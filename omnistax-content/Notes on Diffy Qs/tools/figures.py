#!/usr/bin/env python3
"""Render every figure the book uses to media/NAME.svg.

    python3 tools/figures.py           every figure the converter meets
    python3 tools/figures.py NAME …    only these (the book's file names, no extension)

The list is the converter's: each \\diffyincludegraphics and \\inputpdft of the
web edition (convert.py reads the book). A plain figure is figures/NAME.pdf,
drawn to SVG by PyMuPDF. A \\inputpdft figure is an xfig drawing whose labels
are LaTeX in figures/NAME.pdf_t, set over NAME.pdf when the book is typeset;
the PDF alone has none of them. Those are typeset here the way the book's own
figures/figurerun-one.sh does, with pdflatex and the preview package, and
the SVG is drawn from that, so the labels are in it as glyph outlines. The
book sets them in newpx (Palatino); this machine has no newpx, so mathpazo,
the same Palatino, stands in. chapterdiagram.pdf_t has no PDF: it is a tikz-cd
diagram, typeset the same way.
"""
import os, shutil, subprocess, sys, tempfile
import pymupdf
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from convert import BOOK, SRC, Book

FIGS = os.path.join(SRC, "figures")
OUT = os.path.join(BOOK, "media")
TEX = r"""\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath,amssymb,graphicx,color,units,cancel,tikz-cd}
\usepackage{mathpazo}
\usepackage[active,tightpage]{preview}
\begin{document}
\begin{preview}
\input{NAME.pdf_t}
\end{preview}
\end{document}
"""


def svg(pdf, dst):
    with pymupdf.open(pdf) as d:
        open(dst, "w").write(d[0].get_svg_image(text_as_path=True))


def typeset(name, tmp):
    for ext in (".pdf_t", ".pdf"):
        if os.path.exists(os.path.join(FIGS, name + ext)):
            shutil.copy(os.path.join(FIGS, name + ext), tmp)
    open(os.path.join(tmp, "fig.tex"), "w").write(TEX.replace("NAME", name))
    r = subprocess.run(["pdflatex", "-interaction=nonstopmode", "-halt-on-error", "fig.tex"],
                       cwd=tmp, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
    if r.returncode:
        sys.exit(f"{name}: pdflatex failed\n" + r.stdout[-2000:])
    return os.path.join(tmp, "fig.pdf")


def main(names):
    used = Book().run().figures_used
    todo = {n: used[n] for n in (names or used)}
    os.makedirs(OUT, exist_ok=True)
    for name, kind in sorted(todo.items()):
        dst = os.path.join(OUT, name + ".svg")
        if kind == "pdf_t":
            with tempfile.TemporaryDirectory() as tmp:
                svg(typeset(name, tmp), dst)
        else:
            svg(os.path.join(FIGS, name + ".pdf"), dst)
        print(f"{name}.{kind} -> media/{name}.svg")
    print(f"{len(todo)} figures, {sum(k == 'pdf_t' for k in todo.values())} with LaTeX labels typeset in")


if __name__ == "__main__":
    main(sys.argv[1:])
