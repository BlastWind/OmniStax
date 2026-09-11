# College Physics 2e: the book's rules

What is true of this book and of no other. The rules that hold for every
book are in the repository's root `RULES.md`, and this file is the one
item 18 there asks for. It is revised as chapters are added; the decisions
for one chapter are in that chapter's `config.md`.

## Source

The book comes from OpenStax as a CNXML bundle, a clone of
github.com/openstax/osbooks-college-physics-bundle, kept at
`source/osbooks-college-physics-bundle/` in this folder beside the PDF
(`source/college-physics-2e_-_WEB.pdf`). Neither is committed, since they
are large and the publisher keeps them. The source of record is the
bundle, not the PDF: the PDF aggregates apparatus at the end of each
chapter, while in CNXML every piece sits inside its module, so nothing
has to be scanned for.

One module is one section. Modules are numbered `m4NNNN` and live at
`source/osbooks-college-physics-bundle/modules/<module>/index.cnxml`; the
chapter's `chapter.json` records which module each section is, and the
chapter introduction's module is `intro_module`. Figures sit beside the
modules under the bundle's `media/`, and the ones a section keeps are
copied to `media/<chapter>/` here.

`tools/cnxml2md.py` turns one module into `source.md`:

```
python3 tools/cnxml2md.py source/osbooks-college-physics-bundle/modules/m42240/index.cnxml > ch16/16.1/source.md
```

It converts MathML to LaTeX and keeps the markers the later steps read:
`{eq:id}` after an equation, `{term:…}` round a defined term,
`[ref:target]` for a cross reference, a `> FIGURE {fig:id}` block with the
image path, alt text and caption, `:::example {ex:id}` and
`:::exercise {id} type=…` blocks, `PROBLEM:` and `SOLUTION:` inside them,
and `- {def}` for a glossary entry. The ids are the book's own CNXML ids,
and an exercise's `source_id` is the id its block carries.

## Structure

book → chapters (34) → sections (numbered N.M) → untitled narrative
headers. Each chapter has an unnumbered introduction of its own. The
working format maps onto it directly: one module, one section, one page.
Sections are never folded, even the thin ones (2.2 is one sign
convention; 2.6 is a strategy box).

Chapters built so far: 1 (Introduction: The Nature of Science and
Physics, `ch01`), 2 (Kinematics, `ch02`), 3 (Two-Dimensional Kinematics,
`ch03`) and 16 (Oscillatory Motion and Waves, `ch16`). Chapter 2 is being
completed in one pass on 2026-09-11, its six remaining sections built
beside the two that already stood. A chapter folder is `ch` followed by
the two-digit chapter number. The whole table of contents is in
`toc.md`. The Preface (m42955) is publisher front matter and is not
built.

## Apparatus

Inside each module, in this order: learning objectives, the narrative
(examples, figures, equations, inline definitions, Check Your
Understanding boxes), sometimes a PhET note, AP test prep, the section
summary, conceptual questions, problems and exercises. Glossary entries are
`<definition>` elements inside the module.

The answer key covers roughly every second problem: the solution sits
inline in the exercise element when the book gives one, and a problem
without one has no keyed answer. Check Your Understanding boxes always
carry their answer. Conceptual questions and most AP items have none, so
their suggested approaches are OmniStax's and are marked as such.

A constants sheet and a unit table are wanted from Chapter 4 on; nothing
built yet needs them.

## Licence and attribution

The book is CC BY-NC-SA 4.0, copyright Rice University, published by
OpenStax, by Paul Peter Urone and Roger Hinrichs. The adapted pages are
shared under the same licence and the footer says so. A section's page at
the publisher is the `openstax` prefix of `book.json` followed by the
section's `slug` from `chapter.json`. The book's third-party credits live
on its photographs as a "(credit: …)" clause at the end of the caption, so
a kept photograph keeps that clause. All of this is in `book.json`; this
file records where it came from.

## Voice

Full sentences in plain second person, patient rather than clever. The
book prefers "for example" and "note that" to a colon, names things by
their own names every time, and explains before it summarises. A few
sentences from 16.1 to write against:

> Newton's first law implies that an object oscillating back and forth is
> experiencing forces. Without force, the object would move in a straight
> line at a constant speed rather than oscillate.

> The force constant k is related to the rigidity (or stiffness) of a
> system—the larger the force constant, the greater the restoring force,
> and the stiffer the system.

> Consider the car to be in its equilibrium position x = 0 before the
> person gets in. The car then settles down 1.20 cm, which means it is
> displaced to a position x = −1.20 × 10⁻² m.

No fragment-headed captions ("The landing."), no telegraphic semicolon
chains, no editorial framing ("three different questions"). OmniStax's
sentences are set in the sans face; the reader should feel a change of
typeface, not a change of writer.

## Types

The book declares nine types in `book.json`, in the order the colour
scheme lays its hues along: time, position, velocity, acceleration, force,
energy, frequency, stiffness, angular rate. Mass, length and angle are not
typed and stay in ink.

Variants of one type share its hue and differ by decoration: an initial
value (subscript 0) is hollow or dashed, an average (bar) is dashed, a
maximum is told by its subscript. A derived quantity is another type:
frequency is not a time, a force constant is not a force, and angular
velocity and angular frequency are one type, the angular rate. Nothing is
coerced into a neighbouring type to save a colour.

Every symbol the text colours has a row in the `symbols` table with its
type and its macro name (`\kx`, `\kvo`, `\kF`); a symbol with no type (θ,
a measured value A and its uncertainty δA) has a row with its LaTeX only.
The speed of light c is a velocity and takes that hue (`\kc`). Chapter 1
is qualitative, and its pages colour only the time and the speed that pass
through the unit conversions; everything else there (a length, a mass, a
count, a percent) is untyped and in ink. The macros are derived from the table, so
a new symbol is a new row, not a new macro.

## Exercise kinds

Four kinds, declared in `book.json`:

- `check-understanding`: the Check Your Understanding boxes. Inline, after
  the passage they test.
- `problem`: the problems and exercises at the end of the module. The
  Exercises document.
- `conceptual-question`: the conceptual questions. The Exercises document.
- `ap-test-prep`: the AP test prep items. The Exercises document.

An exercise the CNXML leaves untyped is classed by the header it sits
under. An exercise goes with the section that introduces what it tests,
and when the book places one early (the AP items do this), it is held for
the later page and both sections' `exercise_notes` say so.

## Figures

The book numbers its figures on openstax.org (Figure 16.4), and figures
inside exercises are unnumbered; the number is the book's, not a count of
the CNXML figures. An interactive figure that replaces a book figure
keeps the book's number, its eyebrow reads "Figure" with that number,
and it carries the book's images as its `originals` and the book's
caption as `original_caption`, so the app can swap the original in. An
interactive figure that replaces nothing is a sim: it has no number and
its eyebrow reads "Sim". A kept photograph is a `photo` row with its
number. An interactive figure that folds several book figures (the walk,
its triangle and its diagonal in 3.1; the rock thrown up and its
strategy sketch in 2.7) names its own `number` and the rest under
`folds`, and its eyebrow reads them all, "Figure 3.3 + 3.4 + 3.5", so
every number the prose cites links to it. Sub-figures the book prints
under one number, (a) and (b), are not folds; they are one number with
several `originals`. The validator reads every eyebrow against its row.

The book's images are served from `media/<chapter>/` in this folder, with
the file names the bundle gives them.

The book's tables (Chapter 1 has three: the fundamental SI units, the
metric prefixes, the known ranges of length, mass and time) stay in the
text as tables, in a `div.book-table` whose eyebrow is the number the
book prints (Table 1.2) and whose caption is the book's title for it. A
table is never a `<figure>`, since the validator reads every figure
element as a figure row.

The chapters built so far are planar; no 3D was needed. Photographs are
kept where the text points the reader at them (Chapter 1 does this for
most of its photographs: "See Figure 1.4 and Figure 1.5") or where they
show the thing the passage is about (the Tacoma Narrows bridge, 16.8), and
dropped where they are a splash image at the head of a section.

## Files

The layout is the one the root `RULES.md` draws. Two things are specific
to this book:

- `figures.js` is `window.OMNISTAX_FIGURES['<section>'] = function (root, F) {…}`,
  one function per figure, every lookup through `F.demo(root, id, H)` or
  `F.byId(root, id)`. The types a figure draws are the ones its sliders
  carry (`cls`), its colour lookups name (`C('velocity')`) and its
  readouts write with a `\k` macro; the `draws` column of the figures
  table lists them.
- `text.html` carries the article body with local ids and `\k` macros in
  its math, and each `<figure>` carries `id`, `class` (demo or photo),
  `data-figure`, `data-original` and `data-original-caption`, which must
  agree with the figures table; the validator checks that they do.
