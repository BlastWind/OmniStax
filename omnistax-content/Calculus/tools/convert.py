#!/usr/bin/env python3
"""Convert the modules of Calculus into source.md files, by chapter or by page.

    python3 tools/convert.py 1            every page of Chapter 1: ch01/intro/source.md, ch01/1.1/source.md, …
    python3 tools/convert.py 7.2          one section, in the merged numbering: ch07/7.2/source.md
    python3 tools/convert.py preface-2    one volume's preface: intro/source-volume-2.md
    python3 tools/convert.py B            an appendix: appendix/B/source.md
    python3 tools/convert.py --all        every page of the book
    python3 tools/convert.py 1 --out DIR  the same layout under DIR instead of this folder

Run from anywhere. The book is the three OpenStax Calculus volumes merged into
17 chapters, and modules.json records every module with its merged chapter
and section, the volume numbers it is printed under, and its slug. The
conversion is the shared omnistax-content/tools/cnxml2md.py with --full, which
keeps the bold of the vectors and the display style of inline integrals; this
script only decides which module goes to which folder. The three prefaces are
three files until the book decides what its own introduction is. A page that
already has a source.md is written again, since the converter is the source of
record and the file is never edited by hand. The converter's warnings are
printed as they come, prefixed by the module path.
"""
import json, os, subprocess, sys

BOOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONVERTER = os.path.join(os.path.dirname(BOOK), "tools", "cnxml2md.py")
BUNDLE = os.path.join(BOOK, "source", "osbooks-calculus-bundle", "modules")

def pages(book, what):
    """(file, module) pairs for a chapter number, a section id, preface-N or an appendix letter."""
    if what.startswith("preface"):
        out = [(os.path.join("intro", f"source-volume-{f['volume']}.md"), f["module"])
               for f in book["front_matter"] if what in ("preface", f["id"])]
        return out or sys.exit(f"no {what} in modules.json")
    if len(what) == 1 and what.isalpha():
        return [(os.path.join("appendix", a["id"], "source.md"), a["module"]) for a in book["appendices"] if a["id"] == what.upper()]
    number = what.split(".")[0]
    ch = next((c for c in book["chapters"] if str(c["number"]) == number), None)
    if ch is None:
        sys.exit(f"no chapter {number} in modules.json")
    out = []
    if "." not in what:
        out.append((os.path.join(ch["dir"], "intro", "source.md"), ch["intro"]["module"]))
    for s in ch["sections"]:
        if "." not in what or s["id"] == what:
            out.append((os.path.join(ch["dir"], s["id"], "source.md"), s["module"]))
    if not out:
        sys.exit(f"no page {what} in modules.json")
    return out

def main(argv):
    if not argv or argv[0] in ("-h", "--help"):
        print(__doc__); return
    root = BOOK
    if "--out" in argv:
        i = argv.index("--out"); root = os.path.abspath(argv[i + 1]); del argv[i:i + 2]
    book = json.load(open(os.path.join(BOOK, "modules.json")))
    if "--all" in argv:
        argv = ["preface"] + [str(c["number"]) for c in book["chapters"]] + [a["id"] for a in book["appendices"]]
    for what in argv:
        for rel, module in pages(book, what):
            src = os.path.join(BUNDLE, module, "index.cnxml")
            dst = os.path.join(root, rel)
            os.makedirs(os.path.dirname(dst), exist_ok=True)
            with open(dst, "w") as f:
                r = subprocess.run([sys.executable, "-I", CONVERTER, "--full", src], stdout=f, stderr=subprocess.PIPE, text=True)
            sys.stderr.write(r.stderr)
            if r.returncode:
                sys.exit(f"{module}: converter failed")
            print(f"{module} -> {os.path.relpath(dst, root)}")

if __name__ == "__main__":
    main(sys.argv[1:])
