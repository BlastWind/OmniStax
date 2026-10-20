#!/usr/bin/env python3
"""Cut one section out of the PDF for transcription.

Usage: python3 tools/convert.py 1.2      a section
       python3 tools/convert.py 3.intro  a chapter's introduction (text before N.1)
       python3 tools/convert.py 3        the chapter: its introduction and every section

Reads sections.json (run pages.py first) and writes, for the unit:
  chNN/N.M/pages/pPPP.png     each PDF page of the span at 200 dpi, clipped from
                              the unit's heading to the next one
  chNN/N.M/text-layer.md      the span's text layer: math-font runs in $…$, figure
                              labels left out, captions and footnotes after the body
  media/chNN/fig-N-K.png      every numbered figure whose caption is in the span
  chNN/N.M/source.md          a skeleton, only when none exists
"""
import json, re, sys
import pymupdf
from pages import BOOK, PDF, BOTTOM, lines, marks, footnote_top, is_text_font, size, spans_md

DPI = 200
LEFT, RIGHT, TOP = 108, 504, 110


def units(arg):
    data = json.loads((BOOK / 'sections.json').read_text())
    for ch in data['chapters']:
        for u in ([ch['intro']] if 'intro' in ch else []) + ch['sections']:
            if arg in (u['id'], str(ch['n'])):
                yield ch, u


def is_prose(l):
    """A body line: text-face words at the left margin or a paragraph indent."""
    return 125 < l['bbox'][0] < 145 and any(
        is_text_font(s['font']) and abs(s['size'] - 10.9) < 0.3 and s['text'].strip() for s in l['spans'])


def figure_regions(page, figs):
    """{figure id: Rect} for the figures captioned on this page: what is drawn
    between the caption and the last prose line, equation number or heading above it."""
    ls = lines(page)
    shapes = [d['rect'] for d in page.get_drawings()] + \
             [r for img in page.get_images(full=True) for r in page.get_image_rects(img[0])]
    caps = {j for i, l in enumerate(ls) if re.match(r'Figure \d+\.\d+:', l['text']) for j in caption_lines(ls, i)}
    out = {}
    for m in marks(page):
        if m['kind'] != 'figure' or m['id'] not in figs:
            continue
        cap = m['y']
        stops = [l['bbox'][3] for i, l in enumerate(ls) if l['bbox'][3] <= cap and
                 (is_prose(l) or i in caps or l['spans'][0]['font'].startswith('CMBX12') or
                  re.search(r'\(\d+\.\d+[a-z]?\)$', l['text']) and l['bbox'][2] > 478)]
        top = max(stops, default=0)
        inside = [pymupdf.Rect(r) for r in shapes if r.y0 >= top - 1 and r.y1 <= cap + 1] + \
                 [pymupdf.Rect(l['bbox']) for l in ls if l['bbox'][1] >= top - 1 and l['bbox'][3] <= cap + 1]
        r = pymupdf.Rect(LEFT, top, RIGHT, cap - 2)
        if inside:
            r = inside[0]
            for x in inside[1:]:
                r |= x
            r = (r + (-6, -6, 6, 4)) & pymupdf.Rect(0, top, page.rect.width, cap - 1)
        out[m['id']] = r
    return out


def clips(doc, u):
    """(page number, y0, y1) for each page of the unit that has text in it."""
    for pg in range(u['page'], u['end_page'] + 1):
        y0 = u['y'] - 4 if pg == u['page'] else TOP
        y1 = u['end_y'] - 2 if pg == u['end_page'] else BOTTOM
        if any(y0 <= l['bbox'][1] < y1 for l in lines(doc[pg - 1])):
            yield pg, y0, y1


def caption_lines(ls, start):
    """Indexes of a caption's lines, from the 'Figure N.K:' line to the first gap."""
    idx, prev = [start], ls[start]['bbox'][3]
    for j in range(start + 1, len(ls)):
        if ls[j]['bbox'][1] - prev > 5 or not is_text_font(ls[j]['spans'][0]['font']) and size(ls[j]) > 11:
            break
        idx.append(j)
        prev = max(prev, ls[j]['bbox'][3])
    return idx


def convert(doc, ch, u):
    folder = BOOK / u['folder']
    (folder / 'pages').mkdir(parents=True, exist_ok=True)
    media = BOOK / 'media' / ch['folder']
    body, captions, footnotes, skeleton = [], {}, [], []
    eqs, figs = set(u['equations']), set(u['figures'])
    for pg, y0, y1 in clips(doc, u):
        page = doc[pg - 1]
        page.get_pixmap(dpi=DPI, clip=pymupdf.Rect(LEFT, y0, RIGHT, y1)).save(folder / 'pages' / f'p{pg:03d}.png')
        regions = figure_regions(page, figs)
        for fid, r in regions.items():
            media.mkdir(parents=True, exist_ok=True)
            page.get_pixmap(dpi=DPI, clip=r).save(media / f"fig-{fid.replace('.', '-')}.png")
        fn = footnote_top(page) or BOTTOM
        ls = lines(page)
        body.append(f'<!-- page {pg} -->')
        skip = set()
        for i, l in enumerate(ls):
            b = l['bbox']
            if i in skip or not y0 <= b[1] < y1 or any(pymupdf.Rect(b) in r for r in regions.values()):
                continue
            if m := re.match(r'Figure (\d+\.\d+):', l['text']):
                idx = caption_lines(ls, i)
                skip.update(idx)
                captions[m[1]] = ' '.join(spans_md(ls[j]['spans']) for j in idx)
            elif b[1] > fn:
                footnotes.append(spans_md(l['spans']))
            else:
                body.append(spans_md(l['spans']))
        for m in marks(page):
            if y0 <= m['y'] < y1:
                skeleton.append((pg, m))
    text = '\n'.join(body) + '\n\n<!-- captions -->\n' + '\n'.join(f'{k}: {v}' for k, v in captions.items()) + \
        '\n\n<!-- footnotes -->\n' + '\n'.join(footnotes) + '\n'
    (folder / 'text-layer.md').write_text(text)
    src = folder / 'source.md'
    if not src.exists():
        src.write_text(write_skeleton(ch, u, skeleton, captions))
    print(f"{u['id']}: pages {u['page']}-{u['end_page']}, {len(u['figures'])} figures, "
          f"{len(u['equations'])} equations -> {folder.relative_to(BOOK)}")


def write_skeleton(ch, u, skeleton, captions):
    if u['id'].endswith('intro'):
        out = [f"# Chapter {ch['n']} {ch['title']}", '']
    else:
        out = [f"# {u['id']} {u['title']}", '']
    page, ex, open_ex = None, 0, False
    for pg, m in skeleton:
        k = m['kind']
        if k in ('section', 'chapter'):
            continue
        if pg != page:
            out += [f'<!-- page {pg} -->', '']
            page = pg
        if open_ex and k in ('subsection', 'paragraph', 'example'):
            out += [':::', '']
            open_ex = False
        if k == 'subsection':
            out += [f"## {m['id']} {m['title']}", '']
        elif k == 'paragraph':
            out += [f"### {m['title']}", '']
        elif k == 'example':
            ex += 1
            out += [f":::example {{ex:{u['id']}-{ex}}} {m['title']}", '']
            open_ex = True
        elif k == 'equation' and m['id'] in u['equations']:
            out += [f"$$  $$ {{eq:{m['id']}}}" + ('  <!-- in a footnote -->' if m['foot'] else ''), '']
        elif k == 'figure' and m['id'] in u['figures']:
            cap = re.sub(r'^Figure \d+\.\d+:\s*', '', captions.get(m['id'], ''))
            out += [f"> FIGURE {{fig:{m['id']}}} src=../../media/{ch['folder']}/fig-{m['id'].replace('.', '-')}.png",
                    f'> caption: {cap}', '']
    if open_ex:
        out += [':::', '']
    return '\n'.join(out)


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    found = list(units(sys.argv[1]))
    if not found:
        sys.exit(f'no section {sys.argv[1]} in sections.json')
    doc = pymupdf.open(PDF)
    for ch, u in found:
        convert(doc, ch, u)


if __name__ == '__main__':
    main()
