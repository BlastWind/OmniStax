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
chapter's `chapter.json` records which module each section is, and its
`intro` record names the chapter introduction's module and its slug at
the publisher, as `book.json`'s `intro` names the Preface's. Figures sit
beside the modules under the bundle's `media/`, and the ones a page keeps
are copied to `media/<chapter>/` here.

`../tools/cnxml2md.py`, the converter every CNXML book shares (root rule
18; `tools/cnxml2md.py` here still runs it), turns one module into
`source.md`:

```
python3 ../tools/cnxml2md.py source/osbooks-college-physics-bundle/modules/m42240/index.cnxml > ch16/16.1/source.md
```

It converts MathML to LaTeX and keeps the markers the later steps read:
`{eq:id}` after an equation, `{term:…}` round a defined term,
`[ref:target]` for a cross reference, a `> FIGURE {fig:id}` block with the
image path, alt text, the width the book prints the image at where the
CNXML gives one, and caption, `:::example {ex:id}` and
`:::exercise {id} type=…` blocks, `PROBLEM:` and `SOLUTION:` inside them,
and `- {def}` for a glossary entry. The ids are the book's own CNXML ids,
and an exercise's `source_id` is the id its block carries.

## Structure

book → chapters (34) → sections (numbered N.M) → untitled narrative
headers. Each chapter has an unnumbered introduction of its own, one
module of three to five paragraphs under a splash photograph, and the
book opens on a Preface; it prints no chapter summary and no closing
summary of its own. The working format maps onto it directly: one
module, one section, one page, and, by root rule 21, the chapter
introduction is a page of its own in the chapter's `intro/` folder,
listed before the first section, and the Preface is the book's own
introduction in `intro/` beside the chapters, listed before Chapter 1.
An introduction page keeps the book's words and its opening photograph,
which is the point of the page and so is kept with its number, caption
and credit (Figure 2.1 is the kestrel); it has no lead, no objectives, no
summary, no glossary of its own and no exercises, and the link to the
publisher's video trailer at the end of the module is left out, as the
PhET links are, and named in `notes`. A defined term the introduction
carries (kinematics, in Chapter 2) stays in the glossary under the
section the chapter's tables already give it. Sections are never folded,
even the thin ones (2.2 is one sign convention; 2.6 is a strategy box).

Chapters built so far: 1 (Introduction: The Nature of Science and
Physics, `ch01`), 2 (Kinematics, `ch02`), 3 (Two-Dimensional Kinematics,
`ch03`), 4 (Dynamics: Force and Newton's Laws of Motion, `ch04`), 5
(Further Applications of Newton's Laws, `ch05`), 6 (Uniform Circular
Motion and Gravitation, `ch06`), 7 (Work, Energy, and Energy Resources,
`ch07`), 8 (Linear Momentum and Collisions, `ch08`), 9 (Statics and
Torque, `ch09`), 10 (Rotational Motion and Angular Momentum, `ch10`), 11
(Fluid Statics, `ch11`), 12 (Fluid Dynamics and Its Biological and
Medical Applications, `ch12`), 13 (Temperature, Kinetic Theory, and the
Gas Laws, `ch13`), 14 (Heat and Heat Transfer Methods, `ch14`), 15
(Thermodynamics, `ch15`), 16 (Oscillatory Motion and Waves, `ch16`), 17
(Physics of Hearing, `ch17`), 18 (Electric Charge and Electric Field,
`ch18`), 19 (Electric Potential and Electric Field, `ch19`), 20 (Electric
Current, Resistance, and Ohm's Law, `ch20`), 21 (Circuits and DC
Instruments, `ch21`), 22 (Magnetism, `ch22`), 23 (Electromagnetic
Induction, AC Circuits, and Electrical Technologies, `ch23`), 24
(Electromagnetic Waves, `ch24`), 25 (Geometric Optics, `ch25`), 26 (Vision
and Optical Instruments, `ch26`), 27 (Wave Optics, `ch27`), 28 (Special
Relativity, `ch28`) and 29 (Quantum Physics, `ch29`). Chapters 30 to 34 are
prepared (source, chapter tables, concepts, introduction pages and notes)
and have no section pages yet.
All were built under `Plan.md` at the repository root: Chapters 4 to 9
in one job on 2026-09-11 (LOG passes 27 to 33), 10 to 15 on 2026-09-14
(LOG passes 35 to 40), 16.7 to 16.11 with 17 to 19 on 2026-09-14 and 15
(LOG passes 41 to 44), 20 to 22 on 2026-09-15 (LOG passes 45 to 47), 23
and 24 on 2026-09-16 (LOG passes 48 and 49), and 25 to 29 on 2026-09-28
(LOG passes 50 to 54). A chapter folder is `ch` followed by the two-digit chapter number. The whole table
of contents is in `toc.md`. Every built chapter's introduction and the
Preface (m42955) are pages of their own in their `intro/` folders. A
chapter's book-level rows (types, symbols, concepts, prerequisite edges)
are staged in its `book-rows.json` and merged into `book.json` with
`tools/mergebook.py merge chNN`, never written by hand.

## Apparatus

Inside each module, in this order: learning objectives, the narrative
(examples, figures, equations, inline definitions, Check Your
Understanding boxes), sometimes a PhET note, AP test prep, the section
summary, conceptual questions, problems and exercises. Glossary entries are
`<definition>` elements inside the module. The section summary goes to
`summary_html` and the app prints it at the end of the section's text,
after the last passage and before the way on to practice, as the book
prints it at the end of the chapter (root rule 21); the objectives and
the glossary go to the tables and the views, as before. A chapter
introduction module carries none of this apparatus, only its photograph
and its paragraphs.

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

## Types

The book declares its types in `book.json`, in the order the colour
scheme lays its hues along. The first nine came with Chapters 1 to 3 and
16: time, position, velocity, acceleration, force, energy, frequency,
stiffness, angular rate. Later chapters added theirs, staged in each
chapter's `book-rows.json` and merged: stress and elastic modulus (5), power (7), torque (9),
momentum (8), angular acceleration, moment of inertia and angular
momentum (10), pressure, density and surface tension (11), flow rate and
viscosity (12), temperature (13), entropy (15), intensity (17), charge and
electric field (18), voltage and capacitance (19), current and
resistance (20), magnetic field (22), magnetic flux and inductance (23),
thirty-four in all. Heat is an energy and a rate of heat transfer is a
power.

With this many types each hue must still be legible and distinct. Since
2026-09-15 the app's scheme for a book of up to thirty types is a fixed
palette of thirty hues at one lightness, each readable against both
grounds. The hues are dealt to the declared order so that neighbours in
the order stay far apart, as do quantities drawn together on one page
(force with pressure, position with velocity and acceleration, energy
with temperature and entropy, voltage with the electric field). A page
binds only the types it draws; the scheme itself is the app's matter.

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
count, a percent) is untyped and in ink. The macros are derived from the
table, so a new symbol is a new row, not a new macro.

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

An interactive figure that replaces an unnumbered image inside an
exercise is a `figure` row with no number and an eyebrow reading
"Figure", while a book image an exercise only refers to may instead
travel on the exercise card's own `figure` field, and the chapter's
`config.md` says which of the two that chapter used.

A book image is shown no larger than the book shows it. A row keeps the
width the book prints each of its images at, `widths`, one number per
image in the order the row shows them (a photograph's one image, or the
originals), taken from the `width` attribute of the CNXML `<image>`;
the text carries the same numbers as `data-width` on a photograph's
`<img>` and `data-original-width` on a figure with originals. The app
never upscales an image, never lets one stand taller than three fifths
of the viewport, and where a width is known caps the image at that
width scaled to its column. Where the book gives an image no width (a
few images carry only a `height`), `widths` stays empty and the image
sits at its natural size.

The book's images are served from `media/<chapter>/` in this folder, with
the file names the bundle gives them.

The book's tables (Chapter 1 has three: the fundamental SI units, the
metric prefixes, the known ranges of length, mass and time) stay in the
text as tables, in a `div.book-table` whose eyebrow is the number the
book prints (Table 1.2) and whose caption is the book's title for it. A
table is never a `<figure>`, since the validator reads every figure
element as a figure row.

Most figures of this book are planar, because most of its ideas are
relations between quantities and read best flat with a fixed frame (root
rule 28.1). A block on an incline, a free-body diagram and a banked curve are
drawn flat, or, where the book prints them in perspective, from a locked view
(root rule 28.2). The book's 3D scenes fall into the two classes of root rule
28.3. Physical 3D is the Cavendish balance (6.5, Figure 6.25), whose thin
fiber, small rod, mirror and beam thrown across the floor to the scale turn a
force too small to feel into a reading; the gyroscope (10.7); and the motor
and generator (22.8, 23.5), whose coils and brushes are meshes while their
field is drawn as mathematics. Mathematical 3D is the magnetism and waves of
Chapters 22 to 24: right hand rule 1 (22.4), the field of a current (22.9),
flux through a tilted loop (23.1) and the electromagnetic wave (24.2, 24.4).
Candidates not yet built are the torque vector of a merry-go-round (10.7),
which lifts out of the platform's plane, and the equipotential map of 19.4
rising into a surface of potential.

Photographs are kept where the text points the reader at them (Chapter
1 does this for most of its photographs: "See Figure 1.4 and Figure
1.5") or where they show the thing the passage is about (the Tacoma
Narrows bridge, 16.8). A splash image at the head of a section is
dropped.
