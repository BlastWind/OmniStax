#!/usr/bin/env python3
"""Write Calculus' reference tables as `table` sheets under sheets/.

    python3 tools/appendices.py              every sheet SHEETS names
    python3 tools/appendices.py A maclaurin  only those sheets, by appendix letter or id
    python3 tools/appendices.py --out DIR    the same files under DIR instead of sheets/

Run from anywhere. The three appendices print their formulas as numbered
paragraphs under section headings rather than as tables, so a heading becomes a
table and a paragraph a row: its number, as the book prints it, and the formula.
The Maclaurin sheet is Table 6.1 of Volume 2, the one table of Section 10.4
every reader looks up. A formula is written as $…$ LaTeX by the shared
converter's MathML pass with --full, the same LaTeX the section pages carry,
HTML-escaped as every cell is. Chemistry's tools/appendices.py does not
generalise: its appendices are CNXML tables of chemical formulas set as HTML.
"""
import json, os, re, sys
import xml.etree.ElementTree as ET

BOOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BUNDLE = os.path.join(BOOK, "source", "osbooks-calculus-bundle", "modules")
sys.path.insert(0, os.path.join(os.path.dirname(BOOK), "tools"))
import cnxml2md  # noqa: E402

cnxml2md.FULL = True
C = "{http://cnx.rice.edu/cnxml}"
M = "{http://www.w3.org/1998/Math/MathML}"

# (key, id, module, title the book prints, where the book prints it)
SHEETS = [
    ("A", "integrals", "m54049", "Table of Integrals", {"appendix": "A"}),
    ("B", "derivatives", "m54050", "Table of Derivatives", {"appendix": "B"}),
    ("C", "precalculus", "m54053", "Review of Pre-Calculus", {"appendix": "C"}),
    ("maclaurin", "maclaurin", "m53769", "Maclaurin Series for Common Functions", {"section": "10.4"}),
]

# The geometry formulas of Appendix C are printed inside its two figures; these
# are the figures' formulas as their alt text gives them, figure by figure.
FIGURE_FORMULAS = {
    "fs-id1165043092884": [
        r"\text{Parallelogram: } A=bh", r"\text{Triangle: } A=\frac{1}{2}bh",
        r"\text{Trapezoid: } A=\frac{1}{2}(a+b)h", r"\text{Circle: } A=\pi r^2,\; C=2\pi r",
        r"\text{Sector of circle: } A=\frac{1}{2}r^2\theta,\; s=r\theta\; (\theta \text{ in radians})",
    ],
    "fs-id1165042319172": [
        r"\text{Cylinder: } V=\pi r^2h,\; S=2\pi rh", r"\text{Cone: } V=\frac{1}{3}\pi r^2h,\; S=\pi rl",
        r"\text{Sphere: } V=\frac{4}{3}\pi r^3,\; S=4\pi r^2",
    ],
}

def tag(e):
    return e.tag.split("}")[-1]

def esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")

def math(tex):
    return "$" + esc(tex) + "$"

def html(e):
    """An element's content as one line of cell HTML: text, <em>, <sup>, <sub> and $…$."""
    out = esc(e.text or "")
    for k in e:
        t = tag(k)
        if t == "math":
            out += math(cnxml2md.latex(k))
        elif t == "emphasis":
            out += "<em>" + html(k) + "</em>"
        elif t in ("sup", "sub"):
            out += f"<{t}>" + html(k) + f"</{t}>"
        else:
            out += html(k)
        out += esc(k.tail or "")
    return re.sub(r"\s+", " ", out).strip()

def slug(s):
    s = re.sub(r"<[^>]*>|\$[^$]*\$|&[a-z]+;", "", s).replace("+", " plus ").replace("−", " minus ")
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")

COLUMNS = [{"id": "number", "label": "", "kind": "number"}, {"id": "formula", "label": "", "kind": "text"}]

def numbered(section, title):
    """A heading's numbered paragraphs, as the integrals and derivatives print them."""
    rows = []
    for p in section.findall(C + "para"):
        cell = html(p)
        m = re.match(r"(\d+[a-z]?)\.\s*(.*)", cell)
        rows.append([m.group(1), m.group(2)] if m else ["", cell])
    return {"id": slug(title), "title": title, "columns": COLUMNS, "rows": rows, "notes": []}

def grid(t, title):
    """A CNXML table, whose first row is its heading."""
    rows = [[html(en) for en in r.findall(C + "entry")] for r in t.iter(C + "row")]
    labels, body = rows[0], rows[1:]
    ids = [slug(l) or f"c{i}" for i, l in enumerate(labels)]
    return {"id": slug(title), "title": title, "columns": [{"id": i, "label": l, "kind": "text"} for i, l in zip(ids, labels)],
            "rows": body, "notes": []}

def plain(section, title):
    """A heading of Appendix C: its paragraphs, a figure's formulas and its table, in print order."""
    rows, tables = [], []
    for k in section:
        t = tag(k)
        if t == "para":
            rows.append([html(k)])
        elif t == "media":
            rows += [[math(f)] for f in FIGURE_FORMULAS.get(k.get("id"), [])]
        elif t == "table":
            tables.append(grid(k, title))
    if rows:
        tables.insert(0, {"id": slug(title), "title": title, "columns": [{"id": "formula", "label": "", "kind": "text"}],
                          "rows": rows, "notes": []})
    return tables

def walk(content, each, prefix=""):
    out = []
    for s in content.findall(C + "section"):
        title = html(s.find(C + "title"))
        full = f"{prefix}: {title}" if prefix else title
        if s.find(C + "section") is not None:
            out += walk(s, each, full)
        else:
            out += each(s, full)
    return out

def tables_of(key, root):
    content = root.find(C + "content")
    if key in ("A", "B"):
        return walk(content, lambda s, t: [numbered(s, t)])
    if key == "C":
        return walk(content, plain)
    t = next(t for t in root.iter(C + "table") if t.findtext(C + "title") == "Maclaurin Series for Common Functions")
    return [grid(t, "Maclaurin Series for Common Functions")]

def sheet(key, sid, module, title, where):
    cnxml2md.SOURCE = module
    root = ET.parse(os.path.join(BUNDLE, module, "index.cnxml")).getroot()
    return {"id": sid, "title": title, "kind": "table", "source": {"module": module, **where},
            "generated_by": "tool", "tables": tables_of(key, root)}

def main(argv):
    out = os.path.join(BOOK, "sheets")
    if "--out" in argv:
        i = argv.index("--out")
        out, argv = argv[i + 1], argv[:i] + argv[i + 2:]
    os.makedirs(out, exist_ok=True)
    for key, sid, module, title, where in SHEETS:
        if argv and key not in argv and sid not in argv:
            continue
        data = sheet(key, sid, module, title, where)
        with open(os.path.join(out, sid + ".json"), "w") as f:
            json.dump(data, f, ensure_ascii=False, indent=1)
            f.write("\n")
        print(f"{sid}: {sum(len(t['rows']) for t in data['tables'])} rows in {len(data['tables'])} tables")

if __name__ == "__main__":
    main(sys.argv[1:])
