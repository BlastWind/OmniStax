# Calculus: the book's rules

What is true of this book and of no other; the rules for every book are the root `RULES.md`, and this is the file its item 18 asks for. A chapter's decisions are in its `config.md`, the book's colour plan in `COLOR.md` beside this file (root rule 22). `exploration.md` has the counts and the reasons.

## Source

The book is OpenStax Calculus Volumes 1, 2 and 3 read as one book, from the CNXML bundle at `source/osbooks-calculus-bundle/` in this folder (a clone of github.com/openstax/osbooks-calculus-bundle, gitignored, read-only). Three collections, `collections/calculus-volume-{1,2,3}.collection.xml`, share one `modules/` folder; modules are `mNNNNN/index.cnxml`, images in `media/`. One module is one section. The volumes share modules: Volume 2's Chapters 1–2 are Volume 1's 5–6 and Volume 3's Chapter 1 is Volume 2's 7, and each shared module is built once. `modules.json` and `toc.md` map every chapter, introduction and section to its module, merged number, home volume, volume number and slug.

The shared `omnistax-content/tools/cnxml2md.py` converts one module to `source.md`; its docstring lists every marker. Ids are the book's CNXML ids; an exercise's `source_id` is its `<exercise>` id.

## Structure

book → chapters (17) → sections (N.M, 110) → titled headers, two levels in places → examples. Chapters are numbered continuously: 1–6 are Volume 1's 1–6, 7–11 Volume 2's 3–7, 12–17 Volume 3's 2–7. Every chapter opens on an unnumbered introduction module under a splash photograph; the book prints no chapter summary and no closing summary. One module, one section, one page; the chapter introduction is `chNN/intro/`, the Preface is `intro/`, each listed first (root rule 21). Sections are never folded.

| Id | Chapter | From | Introduction |
|---|---|---|---|
| ch01 | Functions and Graphs | Vol 1 Ch 1 | m53472 |
| ch02 | Limits | Vol 1 Ch 2 | m53483 |
| ch03 | Derivatives | Vol 1 Ch 3 | m53494 |
| ch04 | Applications of Derivatives | Vol 1 Ch 4 | m53602 |
| ch05 | Integration | Vol 1 Ch 5 | m53623 |
| ch06 | Applications of Integration | Vol 1 Ch 6 | m53638 |
| ch07 | Techniques of Integration | Vol 2 Ch 3 | m53654 |
| ch08 | Introduction to Differential Equations | Vol 2 Ch 4 | m53696 |
| ch09 | Sequences and Series | Vol 2 Ch 5 | m53756 |
| ch10 | Power Series | Vol 2 Ch 6 | m53760 |
| ch11 | Parametric Equations and Polar Coordinates | Vol 2 Ch 7 | m53831 |
| ch12 | Vectors in Space | Vol 3 Ch 2 | m53906 |
| ch13 | Vector-Valued Functions | Vol 3 Ch 3 | m53907 |
| ch14 | Differentiation of Functions of Several Variables | Vol 3 Ch 4 | m53929 |
| ch15 | Multiple Integration | Vol 3 Ch 5 | m53961 |
| ch16 | Vector Calculus | Vol 3 Ch 6 | m54017 |
| ch17 | Second-Order Differential Equations | Vol 3 Ch 7 | m54039 |

A chapter folder is `ch` plus the two-digit number. A chapter's book-level rows (types, symbols, concepts, prerequisite edges) are staged in its `book-rows.json` and merged with `ost merge calculus N`, never written into `book.json` by hand.

The Preface is Volume 1's (m60027); the other two Prefaces are near copies and are not built. Appendices A (Table of Integrals, m54049) and B (Table of Derivatives, m54050) are sheets, `sheets/<id>.json`, marked `"generated_by": "tool"`; Appendix C (Review of Pre-Calculus, m54053) is prose and becomes a page after the chapters when the app has a place for it.

The book's numbers follow the merged chapter: Volume 3's Figure 2.4 is Figure 12.4 here, and a cross-reference, being a link with no number of its own, takes the merged number. No volume reaches the reader (Chen, 2026-10-12): where the words assume three volumes they are changed, the one exception to "words as printed", each change marked by a correction note at the spot that gives what the book printed ("The book, published in three volumes, prints: '…'"). The Preface is one book of Chapters 1–17; "Section 6.6 of Volume 1" (15.6) becomes "Section 6.6", linked, with its note. The openstax.org slugs keep their volumes.

## Apparatus

Inside each module, in order: learning objectives in `<md:abstract>`; the narrative with definitions, theorems, rules, proofs, strategies, examples, checkpoints, figures, notes and tables; Key Equations (75 of 110 sections); Key Concepts; Section Exercises; in the chapter's last module, Chapter Review Exercises; the glossary. Key Concepts is the section summary and goes to `summary_html`. Objectives, Key Equations and the glossary go to the tables.

- A **Definition** (a classless note titled "Definition") is kept in the text as `<div class="note">` with the eyebrow "Definition"; the concept it defines is a `definition`.
- A **Theorem** (`note.theorem`, titled by its name) and a **Rule** ("Rule: …") are kept as notes with the book's title; the concept each states is a `result`. The book takes nothing as an axiom; where it states a property without proof ("we accept the following"), the concept is still a `result`.
- A **Proof** stays in the text under the theorem it proves, an `<h3>` "Proof".
- A **Problem-Solving Strategy** is kept as a note; its steps are a `skill`.
- An **Example** is `<example>` numbered Example N.M chapter-wide: a titled problem, a Solution, sometimes an Analysis. It stays in the text whole.
- A **Checkpoint** follows its example, an exercise with the book's answer and usually a hint: inline as a Try It, hint and answer behind their reveals.
- **Media** notes (links to applets and videos) are dropped and named in `notes`; an applet on an idea the section teaches is the trigger for a Sim of our own.
- A **Student Project** is kept as a note at its place in the text with its numbered questions; it is not an exercise, since the book keys none of it.

Exercise numbers run through the chapter: section exercises, then the review exercises. The key covers the odd-numbered ones (2872 of 5870 section exercises, 220 of 446 review exercises), inline as `<solution>`; no even one is keyed. An exercise group's stem paragraph ("For the following exercises, …") is carried by each card of the group. "[T]" stays at the head of the prompt. An unkeyed computational exercise is left out and named in `exercise_notes`; an unkeyed proof or explanation is kept with an AI-marked approach (root rule 13), unless the chapter's `config.md` says otherwise. No answer is ever generated.

## Licence and attribution

CC BY-NC-SA 4.0, copyright Rice University, published by OpenStax; senior contributing authors Gilbert Strang (MIT) and Edwin “Jed” Herman (University of Wisconsin-Stevens Point). The contributing authors are not named in the footer. Adapted pages are shared under the same licence. `openstax` in `book.json` is `https://openstax.org/books/`, and a section's `slug` carries its home volume and the volume's own number, `calculus-volume-3/pages/2-1-vectors-in-the-plane` for 12.1. A shared module's home is the earliest volume. Third-party credits are a "(credit: …)" clause at the end of a caption, kept whole on a kept photograph.

## Types

Eighteen types in `book.json`, in scheme order: function, derivative, integral, limit, point, set, line, angle, error, region, sequence, series, curve, vector, plane, surface, vector field, matrix. An applied quantity wears the mathematical type it is (a velocity is a derivative, work, mass and a total change are integrals, a position or a cost is a function); the book has no physical quantity types. Untyped and in ink: a variable (x, y, t, and a, the number a function is evaluated at; θ is an angle), a coordinate, an index or count (n, k), a constant (e, π, a constant of integration C) and a parameter of an application; ε and δ are drawn as bands in the colour of what they bound. `COLOR.md` says why each type is there and what its variants are.

A type is a role, not a letter: a symbol takes the type of the concept its variables row names in that section, so v(t) is a function where it is integrated and a derivative where it is s′(t). Every coloured symbol has a `symbols` row with its macro; macros are derived from the table, and a new symbol is a new row, never a new macro.

## Formulas list

The chapter's equations table is printed as **Theorems and formulas**: the book's Key Equations plus the forms of every theorem and rule the section states.

## Exercise kinds

Three, declared in `book.json`. `checkpoint`: inline after its example, with the book's answer. `exercise`: a Section Exercise, in the Exercises document. `review-exercise`: a Chapter Review Exercise, in the Exercises document of the section that introduces what it tests (root rule 12), carrying `source_section` for the last section, where the book prints it.

## Function tokens

The book keeps a Grapher and a Unit Circle as sheets. Where the prose gives a function by its rule, the builder wraps the math in `<span data-fn="…">`, the rule in x as the grapher reads it (`x^2-3`, `sqrt(3x+2)-1`, `3/(x-2)`, `{x>=2: 3x+1, x^2}` with `<` and `>` written `&lt;` and `&gt;`): it hovers as a small graph and opens the Grapher with that function. Only a rule the reader could graph is marked, never an f of nothing in particular.

## Figures

Figures, tables and examples are numbered chapter-wide as openstax.org prints them, shifted to the merged chapter, from the opener's photograph as Figure N.1. A bare `<media>` is an unnumbered image.

A graph of a function is the book's sketch figure and is always drawn live, the book's function and numbers its defaults (root rule 14); one that an exercise reads from is a faithful still copy. A photograph is kept on the introduction page and where an example points at it. Images carry no width, so `widths` stays empty. Images are served from `media/<chapter>/` under the bundle's file names, copied there, never moved.

Flat or 3D (root rule 28): a graph, a number line, a slope field, a contour map and a plane vector field are 2D; a solid of revolution, a vector or plane in space, a quadric or a graph z = f(x, y), a space curve and its frame, a region of a triple integral and a field through a surface are mathematical 3D through `F.view3d`, with a free orbit. A surface whose lesson is read from its level curves is built both ways: the contour map flat, the surface beside it.

Tables stay in the text as `div.book-table` with the publisher's number as eyebrow; a function's table of values beside its graph is kept. A table is never a `<figure>`.

## Files

The root layout, plus `sheets/` (the appendices' tables, and `grapher.json` and `unit-circle.json`, the instruments' opening data), `COLOR.md`, `modules.json`, `toc.md` and `tools/`.

## Template sections

None yet: `ch01/1.1` becomes the template for graphs, definitions and checkpoints once built, and `ch01/intro/` for introduction pages.
