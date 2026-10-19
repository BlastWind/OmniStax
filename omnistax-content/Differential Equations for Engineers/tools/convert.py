#!/usr/bin/env python3
"""Convert the LaTeX of Notes on Diffy Qs into source.md files, by section or chapter.

    python3 tools/convert.py 1.2         one section: ch01/1.2/source.md
    python3 tools/convert.py 1           every section of Chapter 1
    python3 tools/convert.py 0           the introduction chapter: ch00/0.1 … ch00/0.3
    python3 tools/convert.py A.3 | A     an appendix section, or the whole appendix: appA/A.3/source.md
    python3 tools/convert.py B           Appendix B has no sections: appB/B/source.md
    python3 tools/convert.py --all       every page of the book
    python3 tools/convert.py --index     write toc.md and modules.json
    python3 tools/convert.py 1 --out DIR the same layout under DIR instead of this folder

Run from anywhere. The source is source/diffyqs (Lebl's repository, read-only),
in the order diffyqs.tex inputs it. Every run reads the whole book, since a
number or a reference needs everything before it. The book is read the way
Lebl's own web edition (convert-to-mbx.pl) reads it: lines between
%mbxSTARTIGNORE and %mbxENDIGNORE are print-only and dropped, a line starting
"%mbxlatex " is web-only LaTeX and kept, and the "%mbx " raw lines (one note,
one display of numbered rows) are translated. So a wrapped figure comes after
the paragraph it sits in, as the web edition places it. The converter is the
source of record; a source.md is never edited by hand.

Numbers follow book.cls and diffyqssetup.sty: sections N.M; theorems,
examples, remarks and exercises N.M.k (per section); equations, figures and
tables N.k (per chapter). In the unnumbered introduction (Chapter 0) sections
are 0.M but equations, figures and tables carry no chapter part: Figure 1,
equation (1). Appendices are lettered: A.1, Figure A.3.

An id is the book's \\label with ':' and '.' turned to '-' (1.3:fig0 is
1-3-fig0); an item without a label is named from its number (example-1-2-3,
eq-1-4, fig-1-7). An exercise is always exercise-N-M-kkk, the printed number
padded to three digits so that no id is part of another, with label= where
the book labels it.

Markers, in the order a section prints them:

  # N.M Title {sec:id}           the section.
  ## Title {sec:id}              a subsection; ### a subsubsection. The marker
                                 only where the book labels it.
  :::note [section-notes]        the "Note:" line under a section title: lecture
  *Note: …*                      count and the matching sections of [EP] and [BD].
  :::
  $$ … $$                        a display, joined to one line. An equation the
  $$ … $$ {eq:id} number=N.k     book numbers carries its id and number; an
                                 environment other than equation stays inside
                                 ($$\\begin{align*} … \\end{align*}$$). A display
                                 with several numbered rows writes \\tag{N.k} in
                                 each row and lists the ids: {eq:a,b,c}.
  :::example {ex:id} Example N.M.k [(name)]
  … :::                          a worked example: the problem, then the
                                 solution, with no marker between (the book
                                 prints none).
  :::theorem {thm:id} Theorem N.M.k [(name)] … :::
  :::remark {rem:id} Remark N.M.k [(name)] … :::
  :::exercise {exercise-N-M-kkk} number=N.M.k answered=yes|no src=FILE:LINE [label=…]
  PROBLEM:                       an exercise. A remark in the book's optional
  [**challenging**]              argument comes first in bold. SOLUTION: holds
  …                              the book's \\exsol, its "Solutions to Selected
  SOLUTION:                      Exercises" entry; answered=no has none. Lebl
  …                              answers the exercises numbered 101 and up.
  :::
  > FIGURE {fig:id} number=N.k src=../../media/NAME.svg
  > alt: …                       a numbered figure: the book's alt text (the 4th
  > width: …                     argument of \\diffyincludegraphics or the 2nd of
  > caption: …                   \\inputpdft) and its web width where it gives one.
  > subfigure src=… alt: …       one of several pictures under one caption.
  > IMAGE {img:NAME} src=…       a picture with no caption (a wrapped sketch,
  > alt: …                       a picture in an answer).
  > TABLE {tab:id} number=N.k cols=C
  > caption: …                   a table; an unnumbered tabular has no id.
  | a | b |                      Rows as a markdown table; the header is the row
  | --- | --- |                  above \\midrule, an empty header row where
                                 there is none. A | in a cell is \\vert.
  a) …                           a part of a \\begin{tasks}, lettered as printed.
  (i) …  1. …  - …               enumerate (with [(i)] as Lebl writes it) and itemize.
  ^[…]                           a footnote, where the book anchors it.
  {index:X}                      \\myindex: X printed and listed in the index.
  {index-entry:X}                \\index: an index entry with nothing printed
                                 (X keeps the book's ! for a subentry).
  *…*  **…**  `…`                \\emph, \\textbf, \\texttt. A term the book
                                 defines is \\emph around {index:…}.
  [Figure 1.2](ref:id)           a reference, with the words the book prints
  [§1.3](ref:1.3#id)             (Figure, Table, Example, Exercise, Theorem,
                                 Remark, chapter, Chapter, §, subsection, an
                                 equation as (N.k), a bare \\ref as its number);
                                 the target is ref:id on the same page and
                                 ref:PAGE#id on another (PAGE a section number,
                                 a chapter number for a chapter, B for Appendix B).
                                 Inside maths a reference is its plain text.
  [EP](cite:EP)                  a citation of the Further Reading list.
  [text](url)  <url>             \\href and \\url.
  a line break                   \\\\ in prose.

Maths stays LaTeX. The book's own macros are expanded: \\nicefrac{a}{b} is
{a}/{b}, \\unit[n]{u} is n\\,\\mathrm{u}, \\unitfrac[n]{a}{b} is
n\\,\\mathrm{a}/\\mathrm{b}, \\mybxbg and \\mybxsm are \\boxed, \\noalign and
page-break hints go. Where KaTeX lacks the book's LaTeX: multline* is gather*,
\\cancelto{0}{X} is {\\cancel{X}}^{0}, \\qed is \\qquad\\square. Prose: ``…'' and ' are curly, -- and --- are dashes,
~ is a space, accents are letters. Anything the converter cannot place is
reported on stderr with its file and line.
"""
import bisect, json, os, re, sys, unicodedata

BOOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(BOOK, "source", "diffyqs")
MEDIA = "../../media"

P_BREAK, NL = "\x02\x02", "\x02"          # paragraph break, hard line break
REF, MREF = "\x03", "\x04"                 # reference placeholders (prose, maths)
SPACES = re.compile(r"[ \t]*(?:\x00?\n(?![ \t]*\x00?\n))?[ \t]*")
BLANKS = re.compile(r"\n((?:[ \t]*\x00?\n)*)[ \t]*")
CMD = re.compile(r"\\([A-Za-z@]+\*?|.)")
ACCENTS = {"'": "\u0301", "`": "\u0300", "^": "\u0302", '"': "\u0308", "~": "\u0303", "=": "\u0304",
           ".": "\u0307", "v": "\u030c", "c": "\u0327", "u": "\u0306", "H": "\u030b"}
DISPLAY = {"equation", "equation*", "align", "align*", "multline", "multline*", "gather", "gather*"}
FIGENVS = {"myfig", "figure", "table", "mywrapfig"}
DROP0 = set("capstart medskip smallskip bigskip noindent leavevmode pagebreak sectionnewpage avoidbreak "
            "displaybreak nopagebreak linebreak allowbreak par centering newpage clearpage phantomsection "
            "hfil vfill fill indent".split())
DROPARGS = {"vspace": 1, "vspace*": 1, "hspace": 1, "hspace*": 1, "markboth": 2, "addfakecontentsline": 1,
            "diffypdfversion": 1, "ignore": 1, "enlargethispage": 1}
SPACECMDS = {"quad", "qquad", "enspace", ",", " ", "hfill", ";", ":"}
LITERAL = {"%": "%", "&": "&", "#": "#", "_": "_", "{": "{", "}": "}", "$": "\\$", "S": "§", "LaTeX": "LaTeX",
           "ldots": "…", "dots": "…", "@": "", "/": "", "-": "", "i": "ı", "copyright": "©"}
REFWORDS = {"figurevref": "Figure", "figureref": "Figure", "tablevref": "Table", "tableref": "Table",
            "chapterref": "chapter", "Chapterref": "Chapter", "appendixref": "appendix", "Appendixref": "Appendix",
            "sectionref": "§", "subsectionref": "subsection", "subsectionvref": "subsection",
            "exercisevref": "Exercise", "exerciseref": "Exercise", "examplevref": "Example", "exampleref": "Example",
            "thmvref": "Theorem", "thmref": "Theorem", "remarkref": "Remark", "eqref": "()", "ref": ""}


def sid(label):
    return re.sub(r"[^A-Za-z0-9_-]", "-", label)


def roman(n):
    out = ""
    for v, r in ((10, "x"), (9, "ix"), (5, "v"), (4, "iv"), (1, "i")):
        while n >= v:
            out += r; n -= v
    return out


# ---------------------------------------------------------------- reading

def mbx_raw(lines):
    """The web edition's raw PreTeXt lines as LaTeX: a <p> note, or an <md> of numbered <mrow>s."""
    text = "\n".join(lines)
    if "<md>" in text:
        rows = re.findall(r'<mrow(?: xml:id="([^"]*)")?[^>]*>(.*?)</mrow>', text, re.S)
        un = lambda s: s.replace("&amp;", "&").replace("&lt;", "<").replace("&gt;", ">").strip()
        body = " \\\\ ".join(un(r) + (f" \\label{{{i.replace('_', ':', 1)}}}" if i else "") for i, r in rows)
        out = "\\begin{align} " + body + " \\end{align}"
    else:
        out = re.sub(r"</?p>", "", text)
        out = re.sub(r"<em>(.*?)</em>", r"\\emph{\1}", out)
    return [out] + ["\x00"] * (len(lines) - 1)


def read_tex(name):
    """The file as the web edition reads it, line for line (dropped lines are empty), comments cut to \\x00."""
    raw = open(os.path.join(SRC, name), encoding="utf-8").read().split("\n")
    out, ignore, i = [], False, 0
    while i < len(raw):
        line = raw[i]
        if line.startswith("%mbxSTARTIGNORE"):
            ignore = True; out.append("\x00"); i += 1; continue
        if line.startswith("%mbxENDIGNORE"):
            ignore = False; out.append("\x00"); i += 1; continue
        if ignore:
            out.append("\x00"); i += 1; continue
        if re.match(r"%mbx[ \t]", line):
            j = i
            while j < len(raw) and re.match(r"%mbx[ \t]", raw[j]):
                j += 1
            out += mbx_raw([re.sub(r"^%mbx[ \t]", "", l) for l in raw[i:j]]); i = j; continue
        line = re.sub(r"^%mbxlatex ?", "", line)
        m = re.search(r"(?<!\\)(?:\\\\)*%", line)
        if m:
            line = line[:m.end() - 1] + "\x00"
        out.append(line); i += 1
    # samepage is print layout only, and an \exsol may follow its \end
    return re.sub(r"\\(begin|end)\{(my)?samepage\}", "", "\n".join(out))


def book_files():
    """[(file, appendix?)] in the order diffyqs.tex inputs them."""
    master = read_tex("diffyqs.tex")
    out, appendix = [], False
    for m in re.finditer(r"\\appendix\b|\\input\{([^}]*)\}", master):
        if m.group(1) is None:
            appendix = True
        else:
            out.append((m.group(1), appendix))
    return out


# ---------------------------------------------------------------- scanning helpers

def group(s, i):
    """(content, end) of the {…} at i (after spaces), or of the single token there."""
    i = SPACES.match(s, i).end()
    if i >= len(s):
        return "", i
    if s[i] != "{":
        m = CMD.match(s, i) if s[i] == "\\" else None
        return (m.group(0), m.end()) if m else (s[i], i + 1)
    depth, j = 0, i
    while j < len(s):
        c = s[j]
        if c == "\\":
            j += 2; continue
        if c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                return s[i + 1:j], j + 1
        j += 1
    raise ValueError(f"unbalanced brace at {i}")


def optional(s, i):
    """(content or None, end) of an optional [...] at i."""
    j = SPACES.match(s, i).end()
    if j >= len(s) or s[j] != "[":
        return None, i
    depth, k = 0, j
    while k < len(s):
        c = s[k]
        if c == "\\":
            k += 2; continue
        if c in "{[":
            depth += 1
        elif c in "}]":
            depth -= 1
            if depth == 0:
                return s[j + 1:k], k + 1
        k += 1
    raise ValueError(f"unbalanced bracket at {i}")


def env_end(s, i, name):
    """(body end, after \\end{name}) for an environment whose body starts at i."""
    depth, pat = 1, re.compile(r"\\(begin|end)\{" + re.escape(name) + r"\}")
    for m in pat.finditer(s, i):
        depth += 1 if m.group(1) == "begin" else -1
        if depth == 0:
            return m.start(), m.end()
    raise ValueError(f"no \\end{{{name}}} after {i}")


def split_top(s, token):
    """Split s at a regex token outside braces and nested environments."""
    parts, depth, env, start, i = [], 0, 0, 0, 0
    tok = re.compile(token)
    while i < len(s):
        c = s[i]
        if depth == 0 and env == 0:
            m = tok.match(s, i)
            if m:
                parts.append(s[start:i]); start = i = m.end(); continue
        if c == "\\":
            if s.startswith("\\begin{", i):
                env += 1
            elif s.startswith("\\end{", i):
                env -= 1
            i += 2; continue
        if c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
        i += 1
    parts.append(s[start:])
    return parts


def inline_math_end(s, i):
    """Index of the $ that closes the inline maths opened just before i."""
    depth, j = 0, i
    while j < len(s):
        c = s[j]
        if c == "\\":
            j += 2; continue
        if c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
        elif c == "$" and depth == 0:
            return j
        j += 1
    raise ValueError(f"unclosed $ at {i}")


# ---------------------------------------------------------------- the renderer

class Item(dict):
    """A numbered thing: kind, number, id, page, labels."""


class Book:
    def __init__(self):
        self.labels = {}          # label -> Item
        self.items = []           # every numbered item in book order
        self.pages = []           # page dicts in book order
        self.chapters = []
        self.warnings = []
        self.target = None        # what a \label names now
        self.enum_last = 0
        self.pending_index = []
        self.base = 0

    # -- positions and warnings
    def warn(self, msg, at=None):
        line = self.line_of(at) if at is not None else "?"
        self.warnings.append(f"{self.file}:{line}: {msg}")

    def line_of(self, local):
        return bisect.bisect_right(self.nl, self.base + local) + 1

    # -- numbering
    def chapnum(self):
        return self.chapter["number"]

    def chapter_part(self, k):
        return f"{k}" if self.chapter["number"] == "0" else f"{self.chapnum()}.{k}"

    def new_item(self, kind, number, auto, at):
        it = Item(kind=kind, number=number, id=auto, page=self.page["id"] if self.page else self.chapnum(),
                  labels=[], file=self.file, line=self.line_of(at))
        self.items.append(it)
        if self.page is not None:
            self.page["counts"][kind] = self.page["counts"].get(kind, 0) + 1
        return it

    def label(self, name, at):
        if self.target is None:
            self.warn(f"\\label{{{name}}} names nothing", at); return
        if name in self.labels:
            self.warn(f"label {name} defined twice", at)
        self.labels[name] = self.target
        if not self.target["labels"]:
            self.target["id"] = sid(name)
        self.target["labels"].append(name)

    # -- maths
    def math(self, s, at=0, strip=True):
        """Maths with the book's macros expanded; \\label and \\index are taken out and recorded."""
        out, i = [], 0
        s = s.replace("\x00\n", " ").replace("\x00", "")
        while i < len(s):
            c = s[i]
            if c != "\\":
                out.append(c); i += 1; continue
            m = CMD.match(s, i); name = m.group(1); j = m.end()
            if name == "nicefrac":
                a, j = group(s, j); b, j = group(s, j)
                out.append(f"{{{self.math(a, at)}}}/{{{self.math(b, at)}}}")
            elif name in ("unit", "unitfrac"):
                n, j = optional(s, j); a, j = group(s, j)
                u = f"\\mathrm{{{a}}}"
                if name == "unitfrac":
                    b, j = group(s, j); u += f"/\\mathrm{{{b}}}"
                out.append((self.math(n, at) + "\\," if n else "") + u)
            elif name in ("mybxbg", "mybxsm"):
                a, j = group(s, j); out.append(f"\\boxed{{{self.math(a, at)}}}")
            elif name == "cancelto":
                a, j = group(s, j); b, j = group(s, j)
                out.append(f"{{\\cancel{{{self.math(b, at)}}}}}^{{{self.math(a, at)}}}")
            elif name == "qed":
                out.append("\\qquad\\square")
            elif name == "noalign":
                _, j = group(s, j)
            elif name in ("displaybreak", "avoidbreak", "allowbreak", "nopagebreak", "pagebreak"):
                _, j = optional(s, j)
            elif name == "label":
                a, j = group(s, j); self.label(a, at)
            elif name == "index":
                a, j = group(s, j); self.pending_index.append(a)
            elif name == "myindex":
                a, j = group(s, j); out.append(self.math(a, at)); self.pending_index.append(a)
            elif name in REFWORDS:
                a, j = group(s, j); out.append(f"{MREF}{a}{MREF}{name}{MREF}")
            elif name == "myquote":
                a, j = group(s, j); out.append(f"“{self.math(a, at)}”")
            elif name in ("text", "mbox", "textrm", "textit", "textbf", "emph"):
                a, j = group(s, j)
                inner = self.math(a, at, strip=False)   # references and quotes inside \text
                out.append(f"\\{name}{{{inner}}}")
            else:
                out.append(m.group(0)); i = j; continue
            i = j
        out = re.sub(r"\s+", " ", "".join(out))
        return out.strip() if strip else out

    def display(self, env, body, at):
        """A display environment as one $$ line."""
        self.pending_index = []
        numbered = not env.endswith("*")
        ids, numbers = [], []
        saved = self.target
        if env == "equation":
            k = self.next_eq(at); ids.append(k); numbers.append(k["number"]); self.target = k
            tex = self.math(body, at)
        elif numbered:
            rows = split_top(body, r"\\\\(?:\[[^\]]*\])?")
            out = []
            for r in rows:
                if re.search(r"\\(nonumber|notag)\b", r) or not r.strip():
                    self.target = saved; out.append(self.math(r, at)); continue
                k = self.next_eq(at); self.target = k
                out.append(f"{self.math(r, at)} \\tag{{{k['number']}}}"); ids.append(k); numbers.append(k["number"])
            tex = f"\\begin{{{env}*}} " + " \\\\ ".join(out) + f" \\end{{{env}*}}"
        else:
            tex = self.math(body, at)
            if env != "equation*":
                env = "gather*" if env == "multline*" else env   # KaTeX has no multline
                tex = f"\\begin{{{env}}} {tex} \\end{{{env}}}"
        self.target = saved
        marker = ""
        if ids:
            marker = " {eq:" + ",".join(k["id"] for k in ids) + "} number=" + ",".join(numbers)
        idx = "".join(f" {{index-entry:{self.index_text(x)}}}" for x in self.pending_index)
        return f"{NL}$$ {tex} $${marker}{idx}{NL}"

    def next_eq(self, at):
        self.chapter["eq"] += 1
        n = self.chapter_part(self.chapter["eq"])
        return self.new_item("equation", n, "eq-" + sid(n), at)

    # -- prose
    def render(self, s, base_at=0):
        """Prose to markdown; positions in s are offsets from base_at in the current file."""
        out, i = [], 0
        while i < len(s):
            c = s[i]
            if c == "\\":
                text, i = self.command(s, i, base_at)
                out.append(text); continue
            if c == "$":
                j = inline_math_end(s, i + 1)
                self.pending_index = []
                out.append("$" + self.math(s[i + 1:j], base_at + i) + "$")
                out += [f"{{index-entry:{self.index_text(x)}}}" for x in self.pending_index]
                i = j + 1; continue
            if c == "{":
                inner, j = group(s, i); out.append(self.render(inner, base_at + i + 1)); i = j; continue
            if c == "\x00":
                i = SPACES.match(s, i + 1).end() if s.startswith("\x00\n", i) else i + 1; continue
            if c == "\n":
                m = BLANKS.match(s, i)
                blank = any(not l.strip(" \t") for l in m.group(1).split("\n")[:-1])
                out.append(P_BREAK if blank else " "); i = m.end(); continue
            if c == "~":
                out.append(" "); i += 1; continue
            if s.startswith("---", i):
                out.append("—"); i += 3; continue
            if s.startswith("--", i):
                out.append("–"); i += 2; continue
            if s.startswith("``", i):
                out.append("“"); i += 2; continue
            if s.startswith("''", i):
                out.append("”"); i += 2; continue
            if c == "`":
                out.append("‘"); i += 1; continue
            if c == "'":
                out.append("’"); i += 1; continue
            if c == "}":
                self.warn("stray }", base_at + i); i += 1; continue
            out.append(c); i += 1
        return "".join(out)

    def index_text(self, a):
        return re.sub(r"\s+", " ", self.render(a)).strip()

    def command(self, s, i, base):
        m = CMD.match(s, i); name = m.group(1); j = m.end(); at = base + i
        eat = lambda k: SPACES.match(s, k).end() if (name[-1:].isalpha() or name.endswith("*")) else k
        if name in ACCENTS and (not name.isalpha() or (j < len(s) and s[j] == "{")):
            a, j = group(s, j)
            a = a.replace("\\i", "ı")
            return unicodedata.normalize("NFC", (a[:1] + ACCENTS[name] + a[1:]) if a else ""), j
        if name in LITERAL:
            return LITERAL[name], eat(j)
        if name in SPACECMDS:
            return " ", eat(j)
        if name in DROP0:
            return "", eat(j)
        if name in DROPARGS:
            for _ in range(DROPARGS[name]):
                _, j = group(s, j)
            return "", j
        if name == "\\":
            _, j = optional(s, j if not s.startswith("*", j) else j + 1)
            return NL, SPACES.match(s, j).end()
        if name == "begin":
            return self.environment(s, i, base)
        if name == "end":
            env, j = group(s, j); self.warn(f"stray \\end{{{env}}}", at); return "", j
        if name in ("chapter", "chapter*", "section", "section*", "subsection", "subsection*", "subsubsection"):
            return self.heading(name, s, j, base)
        if name == "label":
            a, j = group(s, j); self.label(a, at); return "", eat(j)
        if name == "setcounter":
            cnt, j = group(s, j); val, j = group(s, j)
            if cnt == "exercise":
                self.page["exercise"] = int(val)
            else:
                self.warn(f"\\setcounter{{{cnt}}} ignored", at)
            return "", j
        if name in ("emph", "textit", "textbf", "texttt", "text", "textrm", "myquote", "footnote", "myindex",
                    "index", "EPref", "BDref", "parbox", "hbox", "vtop", "mbox", "url", "sectionnotes"):
            if name == "parbox":
                _, j = optional(s, j); _, j = group(s, j)
            a, j = group(s, j)
            if name == "url":
                return f"<{a}>", j
            if name == "index":
                return f"{{index-entry:{self.index_text(a)}}}", j
            r = self.render(a, at)
            wrap = {"emph": "*{}*", "textit": "*{}*", "textbf": "**{}**", "texttt": "`{}`", "myquote": "“{}”",
                    "footnote": "^[{}]", "myindex": "{{index:{}}}",
                    "sectionnotes": P_BREAK + ":::note [section-notes]" + NL + "*Note: {}*" + NL + ":::" + P_BREAK}
            if name == "footnote":
                self.page["counts"]["footnote"] = self.page["counts"].get("footnote", 0) + 1
                r = r.replace(P_BREAK, " ").strip()
            return wrap.get(name, "{}").format(r), j
        if name == "href":
            u, j = group(s, j); t, j = group(s, j)
            return f"[{self.render(t, at)}]({u.replace(chr(92) + '%', '%')})", j
        if name == "cite":
            _, j = optional(s, j); a, j = group(s, j)
            return ", ".join(f"[{k.strip()}](cite:{k.strip()})" for k in a.split(",")), j
        if name in REFWORDS:
            a, j = group(s, j); return f"{REF}{a}{REF}{name}{REF}", j
        if name == "hyperref":
            lab, j = optional(s, j); t, j = group(s, j)
            return f"{REF}{lab}{REF}={self.render(t, at)}{REF}", j
        if name in ("unit", "unitfrac"):
            n, j = optional(s, j); a, j = group(s, j)
            u = a
            if name == "unitfrac":
                b, j = group(s, j); u = f"{a}/{b}"
            return (self.render(n, at) + " " if n else "") + u, j
        if name in ("diffyincludegraphics", "inputpdft"):
            g, j = self.graphic(name, s, j)
            return f"{P_BREAK}> IMAGE {{img:{g['name']}}} src={g['src']}{NL}> alt: {g['alt']}" + \
                   (f"{NL}> width: {g['width']}" if g.get("width") else "") + P_BREAK, j
        if name == "caption":
            a, j = group(s, j); self.warn("\\caption outside a figure", at); return self.render(a, at), j
        if name in ("item", "task"):
            self.warn(f"\\{name} outside a list", at); return NL, eat(j)
        if name == "exsol":
            a, j = group(s, j); self.warn("\\exsol with no exercise before it", at)
            return NL + "SOLUTION:" + NL + self.render(a, at), j
        self.warn(f"unknown command \\{name}", at)
        return m.group(0), j

    def graphic(self, name, s, j):
        if name == "diffyincludegraphics":
            _, j = group(s, j); width, j = group(s, j); fig, j = group(s, j); alt, j = group(s, j)
        else:
            fig, j = group(s, j); alt, j = group(s, j); width = None
        w = re.search(r"width=([\d.]+in)", width or "")
        alt = re.sub(r"\s+", " ", self.render(alt).replace(P_BREAK, " ").replace(NL, " ")).strip()
        alt = alt.replace("’", "'").replace("‘", "'")   # alt text is written for HTML: its quotes are straight
        self.figures_used.setdefault(fig, "pdf_t" if name == "inputpdft" else "pdf")
        return dict(name=fig, src=f"{MEDIA}/{fig}.svg", alt=alt, width=w.group(1) if w else None), j

    def heading(self, name, s, j, base):
        star = name.endswith("*")
        title, j = group(s, j)
        t = re.sub(r"\s+", " ", self.render(title, base + j)).strip()
        kind = name.rstrip("*")
        if kind == "chapter":
            return "", j          # chapters are opened by the driver
        if kind == "section":
            sec = self.page
            sec["title"] = t
            self.target = sec["item"]
            return f"# {sec['id']} {t}" + "\x05" + sec["item"]["uid"] + "\x05" + NL, j
        self.page["subsection"] = self.page.get("subsection", 0) + (kind == "subsection")
        n = f"{self.page['id']}.{self.page['subsection']}"
        it = self.new_item(kind, n, None, base + j)
        it["uid"] = f"u{len(self.items)}"
        self.target = it
        hashes = "##" if kind == "subsection" else "###"
        return f"{P_BREAK}{hashes} {t}\x05{it['uid']}\x05{NL}", j

    # -- environments
    def environment(self, s, i, base):
        m = CMD.match(s, i); j = m.end()
        env, j = group(s, j)
        body_start = j
        body_end, after = env_end(s, j, env)
        body = s[body_start:body_end]
        at = base + body_start
        if env in DISPLAY:
            return self.display(env, body, at), after
        if env in ("example", "theorem", "remark"):
            return self.numbered_box(env, body, at), after
        if env == "exercise":
            return self.exercise(s, body_start, body_end, after, base)
        if env in FIGENVS:
            return self.figure(env, body, at), after
        if env in ("tasks", "enumerate", "itemize"):
            return self.listing(env, body, at), after
        if env == "tabular":
            return self.table(body, at, None), after
        if env in ("center", "samepage", "mysamepage", "minipage", "mywrapfigsimp", "small"):
            if env in ("minipage",):
                _, body_start = optional(s, body_start); _, body_start = group(s, body_start)
            if env == "mywrapfigsimp":
                _, body_start = optional(s, body_start); _, body_start = group(s, body_start); _, body_start = group(s, body_start)
            return P_BREAK + self.render(s[body_start:body_end], base + body_start) + P_BREAK, after
        self.warn(f"environment {env} kept as LaTeX", at)
        return f"{NL}$$ {self.math(s[i:after], at)} $${NL}", after

    def numbered_box(self, env, body, at):
        name, k = optional(body, 0)
        body = body[k:]
        self.page[env] = self.page.get(env, 0) + 1
        n = f"{self.page['id']}.{self.page[env]}"
        word = {"example": "Example", "theorem": "Theorem", "remark": "Remark"}[env]
        prefix = {"example": "ex", "theorem": "thm", "remark": "rem"}[env]
        it = self.new_item(env, n, f"{env}-{sid(n)}", at)
        idx = len(self.items) - 1
        saved, self.target = self.target, it
        inner = self.render(body, at + k).strip()
        self.target = saved
        title = f" ({self.render(name, at).strip()})" if name else ""
        return f"{P_BREAK}:::{env} {{{prefix}:\x06{idx}\x06}} {word} {n}{title}{NL}{inner}{NL}:::{P_BREAK}"

    def exercise(self, s, b0, b1, after, base):
        at = base + b0
        note, k = optional(s, b0)
        body = s[k:b1]
        self.page["exercise"] = self.page.get("exercise", 0) + 1
        num = self.page["exercise"]
        n = f"{self.page['id']}.{num}"
        it = self.new_item("exercise", n, f"exercise-{sid(self.page['id'])}-{num:03d}", at)
        idx = len(self.items) - 1
        saved, self.target = self.target, it
        problem = self.render(body, base + k).strip()
        sol = None
        m = re.compile(r"(?:\s|\x00)*\\exsol\b").match(s, after)
        if m:
            a, after = group(s, m.end())
            sol = self.render(a, base + m.end()).strip()
        self.target = saved
        it["answered"] = sol is not None
        if it["answered"] != (num > 100):
            self.warn(f"Exercise {n} is {'answered' if sol else 'unanswered'}, against the 101-and-up rule", at)
        head = f":::exercise {{{it['id']}}} number={n} answered={'yes' if sol is not None else 'no'} " \
               f"src={self.file}:{self.line_of(at)}\x07{idx}\x07"
        out = P_BREAK + head + NL + "PROBLEM:" + NL
        if note:
            out += f"**{self.render(note, at).strip()}**" + NL
        out += problem
        if sol is not None:
            out += NL + "SOLUTION:" + NL + sol
        return out + NL + ":::" + P_BREAK, after

    def listing(self, env, body, at):
        opt, k = optional(body, 0)
        if env == "tasks":
            m = re.compile(r"\s*\(\d+\)").match(body, k)
            if m:
                k = m.end()
        token = r"\\task\b" if env == "tasks" else r"\\item\b"
        parts = split_top(body[k:], token)
        if parts[0].strip(" \t\n\x00"):
            self.warn(f"text before the first item of {env}", at)
        last = "task_last" if env == "tasks" else "enum_last"
        start = getattr(self, last, 0) if (opt and "resume" in opt) else 0
        out = []
        offset = at + k + len(parts[0])
        for n, p in enumerate(parts[1:], start + 1):
            lead, p2 = optional(p, 0)
            if env == "tasks":
                mark = f"{chr(96 + n)})"
            elif env == "itemize":
                mark = "-"
            elif opt and "(i)" in opt:
                mark = f"({roman(n)})"
            elif opt and "(a)" in opt:
                mark = f"({chr(96 + n)})"
            else:
                mark = f"{n}."
            if lead is not None:
                mark = self.render(lead, offset).strip()
                p = p[p2:]
            out.append(f"{NL}{mark} {self.render(p, offset).strip()}")
            offset += len(p) + 5
        if env != "itemize":
            setattr(self, last, start + len(parts) - 1)
        return P_BREAK + "".join(out).lstrip(NL) + P_BREAK

    def table(self, body, at, caption_item):
        spec, k = group(body, 0)
        cols = len(re.findall(r"[lcrp]", re.sub(r"@\{[^}]*\}|\{[^}]*\}", "", spec)))
        body = body[k:]
        rows, header = [], None
        for r in split_top(body, r"\\\\(?:\[[^\]]*\])?"):
            if "\\midrule" in r:
                header = len(rows)
            r = re.sub(r"\\(toprule|midrule|bottomrule|hline)\b", "", r)
            if not r.strip(" \t\n\x00"):
                continue
            cells = []
            for c in split_top(r, "&"):
                mc = re.match(r"\s*\\multicolumn\{(\d+)\}\{[^}]*\}", c)
                span = ""
                if mc:
                    a, e = group(c, mc.end()); c = a; span = f"{{span={mc.group(1)}}}"
                t = re.sub(r"\s+", " ", self.render(c, at).replace(P_BREAK, " ").replace(NL, " ")).strip()
                cells.append(span + re.sub(r"(?<!\\)\|", r"\\vert{}", t))
            rows.append(cells)
        line = lambda cs: "| " + " | ".join(cs + [""] * (cols - len(cs))) + " |"
        head = rows[:header] if header else []
        bodyrows = rows[header:] if header else rows
        out = [line(head[-1]) if head else line([])] + ["| " + " | ".join(["---"] * cols) + " |"] + [line(r) for r in bodyrows]
        if len(head) > 1:
            self.warn("table with more than one header row; the last is kept", at)
        if caption_item:
            it, cap = caption_item
            first = f"> TABLE {{tab:\x06{it}\x06}} number={self.items[it]['number']} cols={cols}{NL}> caption: {cap}"
        else:
            first = f"> TABLE cols={cols}"
        return P_BREAK + first + NL + NL.join(out) + P_BREAK

    def figure(self, env, body, at):
        """A float: each \\caption numbers the pictures (or tabular) before it."""
        if "\\caption" not in body:
            return P_BREAK + self.render(body, at) + P_BREAK
        pat = re.compile(r"\\(diffyincludegraphics|inputpdft|caption)\b|\\begin\{tabular\}")
        groups, cur, i = [], {"pics": [], "tab": None}, 0
        while True:
            m = pat.search(body, i)
            if not m:
                break
            if m.group(0).startswith("\\begin"):
                e0, e1 = env_end(body, m.end(), "tabular")
                cur["tab"] = (body[m.end():e0], at + m.end()); i = e1; continue
            if m.group(1) == "caption":
                cap, i = group(body, m.end())
                lab = re.search(r"\\label\{([^}]*)\}", body[i:i + 200].split("\\caption")[0].split("\\diffyincl")[0])
                cur["caption"], cur["at"] = cap, at + m.start()
                cur["after_label"] = lab.group(1) if lab and "\\label" not in cap else None
                groups.append(cur); cur = {"pics": [], "tab": None}; continue
            g, i = self.graphic(m.group(1), body, m.end())
            cur["pics"].append(g)
        out = []
        for g in groups:
            kind = "table" if env == "table" else "figure"
            self.chapter[kind] += 1
            n = self.chapter_part(self.chapter[kind])
            it = self.new_item(kind, n, ("tab-" if kind == "table" else "fig-") + sid(n), g["at"])
            idx = len(self.items) - 1
            saved, self.target = self.target, it
            cap = re.sub(r"\s+", " ", self.render(g["caption"], g["at"]).replace(P_BREAK, " ")).strip()
            if g["after_label"]:
                self.label(g["after_label"], g["at"])
            self.target = saved
            if kind == "table":
                if g["tab"] is None:
                    self.warn("table float without a tabular", g["at"]); continue
                out.append(self.table(g["tab"][0], g["tab"][1], (idx, cap)))
                continue
            pics = g["pics"] + (cur["pics"] if g is groups[-1] else [])
            lines = [f"> FIGURE {{fig:\x06{idx}\x06}} number={n}" + (f" src={pics[0]['src']}" if len(pics) == 1 else "")]
            if len(pics) == 1:
                lines.append(f"> alt: {pics[0]['alt']}")
                if pics[0]["width"]:
                    lines.append(f"> width: {pics[0]['width']}")
            else:
                if not pics:
                    self.warn(f"Figure {n} has no picture", g["at"])
                lines += [f"> subfigure src={p['src']} alt: {p['alt']}" for p in pics]
            lines.append(f"> caption: {cap}")
            out.append(P_BREAK + NL.join(lines) + P_BREAK)
        return "".join(out)

    # -- driving
    def run(self):
        self.figures_used = {}
        letters, arabic = iter("ABCDEFG"), 0
        for fname, appendix in book_files():
            text = read_tex(fname)
            self.file, self.text = fname, text
            self.nl = [m.start() for m in re.finditer("\n", text)]
            heads = [m for m in re.finditer(r"^\\(chapter\*|chapter|section)(?![A-Za-z])", text, re.M)]
            ch_m = heads[0]
            title, _ = group(text, ch_m.end())
            if appendix:
                num = next(letters)
            elif ch_m.group(1) == "chapter*":
                num = "0"
            else:
                arabic += 1; num = str(arabic)
            self.base, self.page = 0, None
            lab = re.match(r"\s*\\label\{([^}]*)\}", text[text.index("}", ch_m.end()) + 1:])
            self.chapter = dict(number=num, title=re.sub(r"\s+", " ", self.render(title)).strip(), file=fname, label=lab.group(1) if lab else None,
                                line=self.line_of_abs(ch_m.start()), dir=(f"app{num}" if appendix else f"ch{int(num):02d}"),
                                sections=[], eq=0, figure=0, table=0, appendix=appendix)
            self.chapters.append(self.chapter)
            chit = self.new_item("chapter", num, "chapter-" + num, ch_m.start())
            self.target = chit
            if lab:
                self.label(lab.group(1), ch_m.start())
            if fname == "ch-intro.tex":   # the back matter's one label, which the introduction names
                back = Item(kind="back", number="Further Reading", id="further-reading", page="further-reading", labels=[])
                self.labels["furtherreading:chapter"] = back
            sec_heads = [h for h in heads if h.group(1) == "section"]
            spans = [(h.start(), (sec_heads[k + 1].start() if k + 1 < len(sec_heads) else len(text))) for k, h in enumerate(sec_heads)]
            head_end = sec_heads[0].start() if sec_heads else len(text)
            title_end = text.index("}", ch_m.end()) + 1
            title_end += lab.end() if lab else 0
            head_body = text[title_end:head_end]
            if not sec_heads:
                spans = [(ch_m.start(), len(text))]
            elif re.sub(r"\\label\{[^}]*\}|\\markboth\{[^}]*\}\{[^}]*\}|\\addfakecontentsline\{[^}]*\}", "", head_body).strip(" \t\n\x00"):
                self.warn("text between the chapter title and its first section is not converted", ch_m.start())
            for k, (a, b) in enumerate(spans):
                pid = f"{num}.{k + 1}" if sec_heads else num
                self.page = dict(id=pid, chapter=num, file=fname, lines=[self.line_of_abs(a), self.line_of_abs(b) - (b < len(text))],
                                 dir=os.path.join(self.chapter["dir"], pid), counts={})
                self.base = a
                if sec_heads:
                    it = self.new_item("section", pid, "section-" + sid(pid), 0)
                    it["uid"] = f"u{len(self.items)}"
                    self.page["item"] = it
                    self.target = it
                    self.page["counts"].pop("section")
                    seg = text[a:b]
                else:
                    self.page["item"] = chit
                    chit["uid"] = "uchapter" + num
                    seg = f"\\section{{{title}}}" + text[title_end:b]
                    self.base = title_end - len(f"\\section{{{title}}}")
                self.page["md"] = self.render(seg, 0)
                self.chapter["sections"].append(self.page)
                self.pages.append(self.page)
        return self

    def line_of_abs(self, pos):
        return bisect.bisect_right(self.nl, pos) + 1

    def finish(self, page):
        """The page's markdown with ids and references resolved."""
        md = page["md"]
        md = re.sub("\x06(\\d+)\x06", lambda m: self.items[int(m.group(1))]["id"], md)
        md = re.sub("\x07(\\d+)\x07", lambda m: (" label=" + ",".join(self.items[int(m.group(1))]["labels"])) if self.items[int(m.group(1))]["labels"] else "", md)
        uids = {it.get("uid"): it for it in self.items if it.get("uid")}
        md = re.sub("\x05(\\w+)\x05", lambda m: f" {{sec:{uids[m.group(1)]['id']}}}" if uids[m.group(1)]["labels"] else "", md)

        def ref(m, maths):
            lab, cmd = m.group(1), m.group(2)
            it = self.labels.get(lab)
            if it is None:
                self.warnings.append(f"{page['file']}: unknown label {lab} (page {page['id']})")
                return f"??{lab}??"
            if cmd.startswith("="):
                text = cmd[1:]
            else:
                w = REFWORDS[cmd]
                text = f"({it['number']})" if w == "()" else (f"§{it['number']}" if w == "§" else (f"{w} {it['number']}" if w else it["number"]))
            if maths:
                return text
            target = it["id"] if it["page"] == page["id"] else f"{it['page']}#{it['id']}"
            return f"[{text}](ref:{target})"
        md = re.sub(f"{REF}([^{REF}]*){REF}([^{REF}]*){REF}", lambda m: ref(m, False), md)
        md = re.sub(f"{MREF}([^{MREF}]*){MREF}([^{MREF}]*){MREF}", lambda m: ref(m, True), md)
        md = md.replace("\x00", "")
        md = re.sub(r"[ \t]+", " ", md)
        md = md.replace(" " + NL, NL).replace(NL + " ", NL)
        md = re.sub(r"\x02{3,}", P_BREAK, md).strip("\x02 ")
        md = md.replace(NL, "\n")
        md = re.sub(r"\n{3,}", "\n\n", md)
        md = "\n".join(l.strip() for l in md.split("\n"))
        for bad in "\x03\x04\x05\x06\x07":
            if bad in md:
                self.warnings.append(f"{page['file']}: unresolved placeholder in page {page['id']}")
        return md + "\n"


# ---------------------------------------------------------------- outputs

def pages_for(book, what):
    if "." in what:
        out = [p for p in book.pages if p["id"] == what]
    else:
        out = [p for p in book.pages if p["chapter"] == what]
    return out or sys.exit(f"no page {what} in the book")


def write_index(book):
    def counts(p):
        c = p["counts"]
        ans = sum(1 for it in book.items if it["kind"] == "exercise" and it["page"] == p["id"] and it.get("answered"))
        return dict(examples=c.get("example", 0), theorems=c.get("theorem", 0), remarks=c.get("remark", 0),
                    figures=c.get("figure", 0), tables=c.get("table", 0), equations=c.get("equation", 0),
                    exercises=c.get("exercise", 0), answered=ans, footnotes=c.get("footnote", 0))
    master = open(os.path.join(SRC, "diffyqs.tex"), encoding="utf-8").read()
    version = re.search(r"\\newcommand\{\\theversion\}\{([^}]*)\}", master).group(1)
    fr = master.split("\n")
    fr_start = next(k for k, l in enumerate(fr) if l.startswith("\\begin{thebibliography}")) + 1
    fr_end = next(k for k, l in enumerate(fr) if l.startswith("\\end{thebibliography}")) + 1
    data = dict(book="Differential Equations for Engineers", id="diffyqs", source="source/diffyqs",
                version=version,
                numbering="sections N.M; theorems, examples, remarks, exercises N.M.k per section; equations, figures, "
                          "tables N.k per chapter (no chapter part in Chapter 0); appendices lettered",
                chapters=[], back_matter=[
                    dict(id="further-reading", title="Further Reading", file="diffyqs.tex", lines=[fr_start, fr_end],
                         label="furtherreading:chapter", note="the bibliography [BD], [BM], [EP], [F], [I], [J], [T] that cite: links name"),
                    dict(id="solutions", title="Solutions to Selected Exercises", note="generated by \\printanswers from each \\exsol; "
                         "every source.md carries its exercises' answers in SOLUTION:")])
    for c in book.chapters:
        data["chapters"].append(dict(number=c["number"], title=c["title"], label=c["label"], file=c["file"], line=c["line"],
                                     dir=c["dir"], appendix=c["appendix"],
                                     sections=[dict(id=p["id"], title=p["title"], label=(p["item"]["labels"] or [None])[0],
                                                    file=p["file"], lines=p["lines"], folder=p["dir"], counts=counts(p))
                                               for p in c["sections"]]))
    json.dump(data, open(os.path.join(BOOK, "modules.json"), "w"), indent=1, ensure_ascii=False)
    out = ["# Notes on Diffy Qs: table of contents", "",
           f"Jiří Lebl, *Notes on Diffy Qs: Differential Equations for Engineers*, edition 6, version {version} "
           "(source/diffyqs, the LaTeX of github.com/jirilebl/diffyqs). Each section line gives its number, title, "
           "label and folder, then its counts: examples, figures (numbered), tables, exercises (answered, that is "
           "numbered 101 and up), theorems. The line ranges are in `modules.json`. The book has no chapter introductions: "
           "each chapter opens on its first section. Its back matter is Further Reading (the bibliography the "
           "citations name) and Solutions to Selected Exercises, which the source.md files carry with their exercises.", ""]
    for c in data["chapters"]:
        tot = lambda k: sum(s["counts"][k] for s in c["sections"])
        word = "Appendix" if c["appendix"] else "Chapter"
        out.append(f"- {word} {c['number']} {c['title']} (`{c['label']}`, {c['file']}): "
                   f"{tot('examples')} examples, {tot('figures')} figures, {tot('tables')} tables, "
                   f"{tot('exercises')} exercises ({tot('answered')} answered)")
        for s in c["sections"]:
            k = s["counts"]
            out.append(f"  - {s['id']} {s['title']} (`{s['label']}`, {s['folder']}): {k['examples']} examples, "
                       f"{k['figures']} figures, {k['tables']} tables, {k['exercises']} exercises ({k['answered']} answered), "
                       f"{k['theorems']} theorems")
    out += ["- Further Reading (diffyqs.tex)", "- Solutions to Selected Exercises (from the \\exsol of each exercise)", ""]
    open(os.path.join(BOOK, "toc.md"), "w").write("\n".join(out))
    print("toc.md, modules.json written")


def main(argv):
    if not argv or argv[0] in ("-h", "--help"):
        print(__doc__); return
    root = BOOK
    if "--out" in argv:
        k = argv.index("--out"); root = os.path.abspath(argv[k + 1]); del argv[k:k + 2]
    book = Book().run()
    if "--index" in argv:
        argv.remove("--index"); write_index(book)
    if "--all" in argv:
        argv = [c["number"] for c in book.chapters]
    for what in argv:
        for p in pages_for(book, what):
            dst = os.path.join(root, p["dir"], "source.md")
            os.makedirs(os.path.dirname(dst), exist_ok=True)
            open(dst, "w").write(book.finish(p))
            print(f"{p['file']}:{p['lines'][0]}-{p['lines'][1]} -> {os.path.relpath(dst, root)}")
    for w in book.warnings:
        print("warning:", w, file=sys.stderr)


if __name__ == "__main__":
    main(sys.argv[1:])
