#!/usr/bin/env python3
"""Walk the PDF once and write toc.md and sections.json.

Usage: python3 tools/pages.py   (from the book folder or anywhere)

A heading is found by its type: Chapter N at 20.7 pt over a 24.8 pt title, a
section number N.M at 14.3 pt, a subsection N.M.K at 12 pt, a paragraph
heading in 10.9 pt bold at the left margin ("Example …" ones are examples).
A caption opens "Figure N.K:". An equation number "(N.K)" ends a line at the
right margin; a cited number can too, so only numbers rising through the
chapter count, except those under a footnote's 143.5 pt rule, which come early.
A chapter's introduction is the text between its title and N.1, where any.
convert.py imports marks() and the line helpers from here.
"""
import json, re, sys, unicodedata
from pathlib import Path
import pymupdf

BOOK = Path(__file__).resolve().parent.parent
PDF = BOOK / 'source' / 'lukin-amo2.pdf'
FIRST = 7            # PDF page of Chapter 1; pages before are the title and Contents
BOTTOM = 680         # page numbers sit below this
TEXT_FONTS = ('CMR', 'CMTI', 'CMBX', 'CMSL', 'CMSS', 'CMTT', 'CMCSC', 'CMB')
MATH_FONTS = ('CMMI', 'CMSY', 'CMEX', 'MSBM', 'MSAM', 'CMBSY', 'CMMIB')


def is_text_font(font):
    return font.startswith(TEXT_FONTS) and not font.startswith(MATH_FONTS)


def lines(page):
    """Text lines in reading order: by baseline, lines on one baseline by x."""
    out = []
    for b in page.get_text('dict')['blocks']:
        for l in b.get('lines', []):
            sp = [s for s in l['spans'] if s['text'].strip()]
            if sp:
                out.append({'bbox': l['bbox'], 'spans': l['spans'][l['spans'].index(sp[0]):], 'base': sp[0]['origin'][1],
                            'text': ''.join(s['text'] for s in l['spans']).strip()})
    out.sort(key=lambda l: l['base'])
    rows, row = [], []
    for l in out:
        if row and l['base'] - row[0]['base'] > 3:
            rows.append(sorted(row, key=lambda l: l['bbox'][0]))
            row = []
        row.append(l)
    if row:
        rows.append(sorted(row, key=lambda l: l['bbox'][0]))
    return [l for r in rows for l in r]


def footnote_top(page):
    """y of the footnote rule, or None."""
    for dr in page.get_drawings():
        r = dr['rect']
        if r.y0 > 400 and r.height < 1 and abs(r.x0 - 126) < 2 and abs(r.width - 143.5) < 2:
            return r.y0
    return None


def eq_key(id):
    c, k = id.split('.')
    return int(c), int(re.match(r'\d+', k)[0]), k.lstrip('0123456789')


def nfkc(t):
    return unicodedata.normalize('NFKC', t)


def spans_md(spans):
    """A line's text with each run of math-font spans set in $…$."""
    groups = []
    for s in spans:
        m = groups[-1][0] if groups and not s['text'].strip() else not is_text_font(s['font'])
        if groups and groups[-1][0] == m:
            groups[-1][1] += s['text']
        else:
            groups.append([m, s['text']])
    return nfkc(' '.join(f'${t.strip()}$' if m else t.strip() for m, t in groups if t.strip()))


def size(l):
    return max(s['size'] for s in l['spans'])


def marks(page):
    """Every structural mark on a page, in reading order: dicts with kind, y, text."""
    ls = lines(page)
    fn = footnote_top(page)
    out, used = [], set()
    for i, l in enumerate(ls):
        if i in used:
            continue
        s0, x0, y0 = l['spans'][0], l['bbox'][0], l['bbox'][1]
        bold = s0['font'].startswith('CMBX')
        if bold and abs(s0['size'] - 20.7) < 0.3 and l['text'].startswith('Chapter'):
            title = [m['text'] for j, m in enumerate(ls) if j > i and abs(size(m) - 24.8) < 0.3
                     and m['bbox'][1] - y0 < 110]
            used.update(j for j, m in enumerate(ls) if j > i and abs(size(m) - 24.8) < 0.3)
            out.append({'kind': 'chapter', 'n': int(l['text'].split()[1]), 'y': y0,
                        'title': nfkc(' '.join(title))})
        elif bold and re.fullmatch(r'\d+\.\d+(\.\d+)?', l['text']) and \
                abs(s0['size'] - (14.3 if l['text'].count('.') == 1 else 12)) < 0.3:
            pt = s0['size']
            title, last = [], l['base']
            for j, m in enumerate(ls):
                if j <= i or j in used:
                    continue
                same = abs(m['base'] - l['base']) < 2 and m['bbox'][0] > l['bbox'][2]
                below = 0 < m['base'] - last < pt * 1.6 and m['bbox'][0] > l['bbox'][2] and abs(size(m) - pt) < 0.3
                if same or below:
                    title.append(m['text'])
                    used.add(j)
                    last = m['base']
                elif m['base'] - last > pt * 1.6:
                    break
            kind = 'section' if l['text'].count('.') == 1 else 'subsection'
            out.append({'kind': kind, 'id': l['text'], 'y': y0, 'title': nfkc(' '.join(title))})
        elif m := re.match(r'Figure (\d+\.\d+):', l['text']):
            out.append({'kind': 'figure', 'id': m[1], 'y': y0, 'text': l['text']})
        elif (m := re.search(r'\((\d+\.\d+[a-z]?)\)$', l['text'])) and l['bbox'][2] > 478:
            # a prose line ending on a cited number also matches; walk() keeps only rising numbers
            out.append({'kind': 'equation', 'id': m[1], 'y': y0, 'foot': fn is not None and y0 > fn,
                        'alone': l['text'] == m[0]})
        elif bold and x0 < 130 and abs(s0['size'] - 10.9) < 0.3:
            last = max(k for k, s in enumerate(l['spans']) if s['font'].startswith('CMBX') and s['text'].strip())
            head = spans_md(l['spans'][:last + 1])   # a heading may hold maths; a run-in one ends at its last bold word
            if len(head) >= 3:
                kind = 'example' if head.startswith('Example') else 'paragraph'
                out.append({'kind': kind, 'y': y0, 'title': head})
    return out


def walk(doc):
    """chapters with sections, subsections, figures, equations, examples."""
    chapters, cur = [], None   # cur: the open unit (chapter intro or section)
    unit_end = lambda pg, y: cur and cur.update(end_page=pg, end_y=y)
    for pno in range(FIRST - 1, doc.page_count):
        page, pg = doc[pno], pno + 1
        for m in marks(page):
            k = m['kind']
            if k == 'chapter':
                unit_end(pg - 1, BOTTOM)
                ch = {'n': m['n'], 'folder': f"ch{m['n']:02d}", 'title': m['title'],
                      'page': pg, 'y': round(m['y'], 1), 'sections': []}
                chapters.append(ch)
                last_eq = (m['n'], 0, '')
                cur = ch['intro'] = {'id': f"{m['n']}.intro", 'folder': f"{ch['folder']}/intro",
                                     'title': 'Introduction', 'page': pg, 'y': round(m['y'], 1),
                                     'figures': [], 'equations': [], 'examples': [], 'subsections': []}
            elif k == 'section':
                unit_end(pg, round(m['y'], 1))
                ch = chapters[-1]
                cur = {'id': m['id'], 'folder': f"{ch['folder']}/{m['id']}", 'title': m['title'],
                       'page': pg, 'y': round(m['y'], 1),
                       'figures': [], 'equations': [], 'examples': [], 'subsections': []}
                ch['sections'].append(cur)
            elif k == 'subsection':
                cur['subsections'].append({'id': m['id'], 'title': m['title'], 'page': pg, 'y': round(m['y'], 1)})
                if m['title'].startswith('Example'):
                    cur['examples'].append({'title': m['title'], 'page': pg, 'y': round(m['y'], 1), 'level': 'subsection'})
            elif k == 'figure':
                cur['figures'].append(m['id'])
            elif k == 'equation':
                n = eq_key(m['id'])
                if m['foot'] and n[0] == chapters[-1]['n'] and m['alone']:
                    cur['equations'].append(m['id'])   # a footnote's number comes before the text above it
                elif n[0] == chapters[-1]['n'] and n > last_eq:
                    cur['equations'].append(m['id'])
                    last_eq = n
            elif k == 'example':
                cur['examples'].append({'title': m['title'], 'page': pg, 'y': round(m['y'], 1), 'level': 'paragraph'})
    unit_end(doc.page_count, BOTTOM)
    words = set(re.findall(r'\w+-\w+', nfkc(' '.join(p.get_text() for p in doc))))
    unhyphen = lambda t: re.sub(r'(\w+)- (\w+)', lambda m: m[1] + ('-' if f'{m[1]}-{m[2]}' in words else '') + m[2], t)
    for ch in chapters:
        ch['title'] = unhyphen(ch['title'])
        it, first = ch['intro'], ch['sections'][0]   # the title page often runs straight into N.1
        top = max(l['bbox'][3] for l in lines(doc[it['page'] - 1]) if size(l) > 20)
        if it['page'] == first['page'] and not any(
                top < l['bbox'][1] < first['y'] for l in lines(doc[it['page'] - 1])):
            del ch['intro']
        for s in ([ch['intro']] if 'intro' in ch else []) + ch['sections']:
            s['equations'].sort(key=eq_key)
            s['title'] = unhyphen(s['title'])
            for sub in s['subsections']:
                sub['title'] = unhyphen(sub['title'])
            if s['title'].startswith('Example'):
                s['examples'].insert(0, {'title': s['title'], 'page': s['page'], 'y': s['y'], 'level': 'section'})
    return chapters


def printed(pg):
    return pg - 1


def toc(chapters):
    rows = ['| Chapter | Section | Title | Printed pages |', '|---|---|---|---|']
    for ch in chapters:
        rows.append(f"| {ch['folder']} |  | **{ch['title']}** | {printed(ch['page'])} |")
        units = ([ch['intro']] if 'intro' in ch else []) + ch['sections']
        for s in units:
            end = s['end_page'] if s['end_y'] > 140 else s['end_page'] - 1
            rows.append(f"| | {s['id']} | {s['title']} | {printed(s['page'])}–{printed(end)} |")
            for sub in s['subsections']:
                rows.append(f"| | {sub['id']} | {sub['title']} | {printed(sub['page'])} |")
    return '# Modern Atomic and Optical Physics II: contents\n\nPDF page = printed page + 1.\n\n' + '\n'.join(rows) + '\n'


def main():
    doc = pymupdf.open(PDF)
    chapters = walk(doc)
    (BOOK / 'sections.json').write_text(json.dumps(
        {'book': 'lukin-amo-ii', 'pdf': 'source/lukin-amo2.pdf', 'page_offset': 1, 'chapters': chapters},
        indent=1, ensure_ascii=False) + '\n')
    (BOOK / 'toc.md').write_text(toc(chapters))
    units = [u for ch in chapters for u in ([ch['intro']] if 'intro' in ch else []) + ch['sections']]
    count = lambda k: sum(len(u[k]) for u in units)
    print(f"chapters {len(chapters)}, intros {sum('intro' in c for c in chapters)}, "
          f"sections {sum(len(c['sections']) for c in chapters)}, subsections {count('subsections')}, "
          f"figures {count('figures')}, equations {count('equations')}, examples {count('examples')}")


if __name__ == '__main__':
    sys.exit(main())
