#!/usr/bin/env python3
"""Check a transcribed source.md against the PDF's text layer.

Usage: python3 tools/checkprose.py 1.2    (or 3.intro)

Compares the words of chNN/N.M/source.md with chNN/N.M/text-layer.md: body,
captions and footnotes each as a sequence. Math is dropped on both sides, except
the words a formula prints upright (\\text{}, \\mathrm{}, \\exp …), which the
text layer also shows. Words are letters only, two or more, with ligatures,
accents and hyphens folded away. Also checks that every equation and figure
number of the section in sections.json has its {eq:…} or {fig:…} marker, and
that no $$ $$ slot is left empty. Exits 1 on any gap; {?: …} flags are listed.
"""
import difflib, json, re, sys, unicodedata
from pathlib import Path

BOOK = Path(__file__).resolve().parent.parent
UPRIGHT = re.compile(r'\\(?:text|mathrm|textrm|mbox|operatorname|textit|mathit|textbf|mathbf)\s*\{([^{}]*)\}'
                     r'|\\(exp|sin|cos|tan|cot|sinh|cosh|tanh|coth|log|ln|det|max|min|lim|sup|inf|arg|Pr|deg|dim)\b')


def words(text):
    text = unicodedata.normalize('NFKD', text)
    text = ''.join(c for c in text if unicodedata.category(c) not in ('Mn', 'Sk'))
    text = re.sub(r'(?<=[A-Za-z])-(?=[A-Za-z])', '', text)
    return [w for w in re.findall(r'[A-Za-z]+', text) if len(w) > 1]


def upright(math):
    return ' '.join(a or b for a, b in UPRIGHT.findall(math))


def take_footnotes(text):
    """text without its ^[…] footnotes, and the footnotes."""
    out, notes, i = '', [], 0
    while (j := text.find('^[', i)) >= 0:
        out += text[i:j]
        depth, k = 0, j + 1
        while k < len(text):
            depth += {'[': 1, ']': -1}.get(text[k], 0)
            if depth == 0:
                break
            k += 1
        notes.append(text[j + 2:k])
        i = k + 1
    return out + text[i:], notes


def source_parts(src):
    src = re.sub(r'<!--.*?-->', ' ', src, flags=re.S)
    body, notes = take_footnotes(src)
    captions = dict(re.findall(r'^> FIGURE \{fig:([\d.]+)\}.*\n> caption: (.*)$', body, flags=re.M))
    body = re.sub(r'^>.*$', ' ', body, flags=re.M)
    markers = lambda t: re.sub(r'\{(eq|fig|ex|tab):[^}]*\}|\{\?:[^}]*\}|^:::\w*(?:[ \t]*\{[^}]*\})?|^#+ ', ' ', t, flags=re.M)
    body, notes = markers(body), [markers(n) for n in notes]
    strip = lambda t: re.sub(r'\$\$(.+?)\$\$|\$(.+?)\$', lambda m: ' ' + upright(m[1] or m[2]) + ' ', t, flags=re.S)
    return strip(body), {k: strip(v) for k, v in captions.items()}, strip(' '.join(notes))


def layer_parts(layer):
    body, rest = layer.split('<!-- captions -->')
    caps, notes = rest.split('<!-- footnotes -->')
    unwrap = lambda t: re.sub(r'-\n(?=[a-z])', '', re.sub(r'<!--.*?-->|\$[^$\n]*\$', ' ', t))
    captions = {m[1]: unwrap(m[2]) for m in re.finditer(r'^([\d.]+): Figure [\d.]+:(.*)$', caps, flags=re.M)}
    return unwrap(body), captions, unwrap(notes)


def diff(name, layer, source):
    a, b = words(layer), words(source)
    gaps = []
    for op, i1, i2, j1, j2 in difflib.SequenceMatcher(None, a, b, autojunk=False).get_opcodes():
        if op == 'equal':
            continue
        where = ' '.join(a[max(0, i1 - 4):i1])
        if i2 > i1:
            gaps.append(f"{name}: missing '{' '.join(a[i1:i2])}' after '…{where}'")
        if j2 > j1:
            gaps.append(f"{name}: added '{' '.join(b[j1:j2])}' after '…{where}'")
    return gaps


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    data = json.loads((BOOK / 'sections.json').read_text())
    unit = next((u for ch in data['chapters'] for u in ([ch['intro']] if 'intro' in ch else []) + ch['sections']
                 if u['id'] == sys.argv[1]), None)
    if not unit:
        sys.exit(f'no section {sys.argv[1]} in sections.json')
    folder = BOOK / unit['folder']
    src = (folder / 'source.md').read_text()
    sb, sc, sf = source_parts(src)
    lb, lc, lf = layer_parts((folder / 'text-layer.md').read_text())
    gaps = diff('body', lb, sb) + diff('footnotes', lf, sf)
    for fid in sorted(set(lc) | set(sc)):
        gaps += diff(f'caption {fid}', lc.get(fid, ''), sc.get(fid, ''))
    eqs, figs = re.findall(r'\{eq:([^}]+)\}', src), re.findall(r'\{fig:([^}]+)\}', src)
    gaps += [f'equation ({e}) has no {{eq:}} marker' for e in unit['equations'] if e not in eqs]
    gaps += [f'figure {f} has no {{fig:}} marker' for f in unit['figures'] if f not in figs]
    gaps += [f'marker {{eq:{e}}} is not an equation of this section' for e in eqs if e not in unit['equations']]
    gaps += [f'marker {{fig:{f}}} is not a figure of this section' for f in figs if f not in unit['figures']]
    gaps += [f'empty display: {m}' for m in re.findall(r'\$\$\s*\$\$.*', src)]
    flags = re.findall(r'\{\?:[^}]*\}', src)
    for g in gaps:
        print(g)
    for f in flags:
        print('flag:', f)
    print(f"{unit['id']}: {len(gaps)} gaps, {len(flags)} flags, {len(words(sb))} words")
    sys.exit(1 if gaps else 0)


if __name__ == '__main__':
    main()
