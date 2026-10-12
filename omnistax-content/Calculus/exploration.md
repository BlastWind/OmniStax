# Exploration: Calculus (OpenStax Calculus Volumes 1, 2 and 3 as one book), the full-book pass

Written 2026-10-12, before any section was converted for building. The
source of record is the CNXML bundle at `source/osbooks-calculus-bundle/`
(github.com/openstax/osbooks-calculus-bundle, gitignored). It holds three
collections, `calculus-volume-1`, `-2` and `-3.collection.xml`, over one
shared `modules/` folder; no PDF is needed, since every piece of apparatus
sits inside its module.

What was read: the three Prefaces in full; the introduction and every
section of Chapter 1; sections of Chapters 2, 5, 9 and 16; the head of each
appendix; and every module of all three collections by script, counting the
apparatus listed below. The counts in this file come from that script.

## The merge

The three volumes overlap by module id. Volume 2's Chapters 1 and 2 are
Volume 1's Chapters 5 and 6, the same 19 modules; Volume 3's Chapter 1 is
Volume 2's Chapter 7, the same 6 modules. The three appendices are the same
modules in every volume (m54049 Table of Integrals, m54050 Table of
Derivatives, m54053 Review of Pre-Calculus). The Prefaces are three
modules (m60027, m60028, m60029), each one listing the chapters of all
three volumes; they differ in the volume's name, the scope sentence, the
projects they name and Volume 1's paragraph on early or late
transcendentals. Volume 2's names no contributing authors.

The merged book takes each module once, in the order of the volumes, and
numbers its chapters continuously: 1–6 are Volume 1's 1–6, 7–11 are
Volume 2's 3–7, 12–17 are Volume 3's 2–7. Only Volume 3 renumbers: its
Chapter 2 becomes 12, and so on. Numbers of figures, examples, theorems,
tables and exercises follow the chapter, as openstax.org prints them in
the volume that is the module's home, plus the shift.

Every in-text cross-reference is a `<link target-id>` or `<link document>`
with no number of its own, 140 of them across modules, so it resolves to
the merged numbering for free. The prose names another volume once in the
whole bundle: Volume 3's 15.6 (its own 5.6) says "Section 6.6 of Volume 1",
which in this book is Section 6.6. No prose writes a bare "Chapter N".

## The organising units

book → chapters (17) → sections (N.M, 110 in all) → titled headers, two
levels deep in places → examples. One module is one section, and a chapter
is a `<col:subcollection>` whose first module is an unnumbered Introduction
under a splash photograph (the San Andreas Fault for Chapter 1). There is
no chapter summary and no closing summary. Nothing is thin enough to tempt a
fold; the shortest section, 10.1, still has examples, checkpoints and a
long exercise list.

| Id | Chapter | From | Introduction | Sections |
|---|---|---|---|---|
| ch01 | Functions and Graphs | Vol 1 Ch 1 | m53472 | 5 |
| ch02 | Limits | Vol 1 Ch 2 | m53483 | 5 |
| ch03 | Derivatives | Vol 1 Ch 3 | m53494 | 9 |
| ch04 | Applications of Derivatives | Vol 1 Ch 4 | m53602 | 10 |
| ch05 | Integration | Vol 1 Ch 5 = Vol 2 Ch 1 | m53623 | 7 |
| ch06 | Applications of Integration | Vol 1 Ch 6 = Vol 2 Ch 2 | m53638 | 9 |
| ch07 | Techniques of Integration | Vol 2 Ch 3 | m53654 | 7 |
| ch08 | Introduction to Differential Equations | Vol 2 Ch 4 | m53696 | 5 |
| ch09 | Sequences and Series | Vol 2 Ch 5 | m53756 | 6 |
| ch10 | Power Series | Vol 2 Ch 6 | m53760 | 4 |
| ch11 | Parametric Equations and Polar Coordinates | Vol 2 Ch 7 = Vol 3 Ch 1 | m53831 | 5 |
| ch12 | Vectors in Space | Vol 3 Ch 2 | m53906 | 7 |
| ch13 | Vector-Valued Functions | Vol 3 Ch 3 | m53907 | 4 |
| ch14 | Differentiation of Functions of Several Variables | Vol 3 Ch 4 | m53929 | 8 |
| ch15 | Multiple Integration | Vol 3 Ch 5 | m53961 | 7 |
| ch16 | Vector Calculus | Vol 3 Ch 6 | m54017 | 8 |
| ch17 | Second-Order Differential Equations | Vol 3 Ch 7 | m54039 | 4 |

The section titles and module ids are in `toc.md` and `modules.json`,
which the converter pass writes.

## Provenance

A section is traced by its module id, and through it to its home volume:
the volume whose collection first lists the module in the merged order
(Volume 1 for Chapters 5 and 6, Volume 2 for Chapter 11). The publisher's
page is `https://openstax.org/books/` followed by the section's `slug`,
which carries the volume: `calculus-volume-1/pages/1-1-review-of-functions`,
`calculus-volume-3/pages/2-1-vectors-in-the-plane` for 12.1. The slug keeps
the home volume's own numbering, which is what the publisher's address
says; the page shows the merged number. `modules.json` records for each
module its merged number, home volume, volume number and slug.

## Where the apparatus sits

Everything is inside the module, in this order:

- **Learning objectives** in `<md:abstract>`, a list of three to six.
- **The narrative**, with `<term>`, MathML `<equation>` (real algebra,
  unlike Chemistry's formulas; inline `<m:math>` runs to hundreds per
  section), `<figure>`, bare `<media>`, `<table>` and `<note>`.
- **Definitions**: a classless `<note>` titled "Definition" (186), the
  defined word a `<term>` inside it.
- **Theorems**: `<note class="theorem">` with the theorem's name as title
  (203), "Two Important Limits", "The Mean Value Theorem".
- **Rules**: a classless `<note>` titled "Rule: …" (40), the Vertical Line
  Test, the Disk Method, the Washer Method.
- **Proofs**: a titled "Proof" paragraph or section after a theorem (75; the
  Preface says "over 60").
- **Problem-Solving Strategy**: `<note class="problem-solving">` (36), a
  titled numbered list of steps.
- **Examples**: `<example>` (785), each wrapping one `<exercise>` whose
  `<problem>` carries the title and whose `<solution>` carries the working;
  28 add an "Analysis" paragraph. Answers are always printed.
- **Checkpoints**: `<note class="checkpoint">` after an example (641), an
  `<exercise>` with its `<solution>` (633 of 641 keyed) and usually a
  `<commentary type="hint">`. The Preface puts the answers in the Answer
  Key; the CNXML has them inline.
- **Media**: `<note class="media-2">` (42), one sentence and a link to an
  applet or video off the site ("Visit this applet link to see more about
  graphs of functions."). The applets are the seed list for Sims.
- **Student Project**: `<note class="project">` (21), a titled essay with a
  numbered list of questions, no `<exercise>` and no answers.
- **Key Equations**: `<section class="key-equations">` (75 sections), a
  two-column table of a name and an equation.
- **Key Concepts**: `<section class="key-concepts">`, a bulleted list in
  every section. It is the book's section summary.
- **Section exercises**: `<section class="section-exercises">` in every
  section, 5870 in all. Groups share a stem paragraph ("For the following
  exercises, …"), so a card carries its stem. 30 carry class
  `material-set-2`, and many are marked "[T]" (technology).
- **Chapter Review Exercises**: `<section class="review-exercises">` in
  the last section's module of each chapter, 446 in all, opening with a
  True or False set.
- **The glossary**: `<glossary>` at module end, 508 definitions.

### Aggregated per chapter

Only the Chapter Review Exercises: they sit in the chapter's last module
and test the whole chapter, so a build scans the last module of its
chapter for the review items that belong to its section (root rule 9).
Nothing else is aggregated.

### The answer key

The Preface: "Odd-numbered Exercises and Review Exercises questions are
provided to students in the Answer Key." Exercise numbers run through the
chapter, section exercises then review exercises, and the CNXML's
`<solution>` sits on exactly the odd ones: 2872 of 5870 section exercises
and 220 of 446 review exercises are keyed, and no even-numbered exercise is
keyed anywhere. A few odd ones carry no key (Chapters 12 and 15 most).
An answer is often a value only; a proof or a sketch is answered by its
figure.

### Per chapter

| Ch | Figures | Examples | Checkpoints | Theorems | Definitions | Rules | Strategies | Projects | Media | Proofs | Key eq. | Exercises (keyed) | Review (keyed) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 51 | 41 | 35 | 0 | 12 | 8 | 1 | 1 | 5 | 1 | 4 | 309 (151) | 27 (13) |
| 2 | 43 | 44 | 30 | 11 | 13 | 0 | 4 | 1 | 2 | 3 | 3 | 207 (104) | 25 (12) |
| 3 | 35 | 83 | 55 | 16 | 8 | 4 | 3 | 1 | 4 | 10 | 6 | 366 (181) | 25 (13) |
| 4 | 86 | 54 | 53 | 16 | 12 | 0 | 5 | 1 | 1 | 7 | 1 | 524 (260) | 28 (14) |
| 5 | 39 | 54 | 44 | 8 | 6 | 9 | 1 | 1 | 2 | 6 | 7 | 438 (219) | 25 (13) |
| 6 | 84 | 51 | 51 | 21 | 7 | 8 | 3 | 1 | 3 | 3 | 7 | 434 (209) | 26 (13) |
| 7 | 22 | 56 | 29 | 7 | 3 | 5 | 6 | 1 | 5 | 0 | 4 | 407 (204) | 24 (11) |
| 8 | 26 | 19 | 19 | 2 | 9 | 0 | 2 | 1 | 5 | 0 | 4 | 261 (126) | 29 (14) |
| 9 | 18 | 25 | 23 | 17 | 11 | 0 | 1 | 3 | 1 | 7 | 3 | 378 (189) | 26 (13) |
| 10 | 12 | 24 | 22 | 8 | 5 | 0 | 0 | 1 | 1 | 4 | 2 | 252 (126) | 26 (13) |
| 11 | 57 | 24 | 23 | 11 | 5 | 0 | 1 | 2 | 1 | 1 | 2 | 321 (159) | 27 (13) |
| 12 | 105 | 67 | 61 | 16 | 21 | 5 | 0 | 1 | 0 | 10 | 4 | 422 (196) | 27 (14) |
| 13 | 22 | 18 | 17 | 9 | 9 | 0 | 0 | 1 | 4 | 4 | 4 | 201 (100) | 27 (13) |
| 14 | 61 | 45 | 40 | 20 | 27 | 0 | 3 | 1 | 1 | 3 | 7 | 393 (196) | 27 (13) |
| 15 | 83 | 73 | 48 | 15 | 18 | 0 | 1 | 1 | 0 | 0 | 6 | 415 (185) | 27 (13) |
| 16 | 90 | 81 | 68 | 21 | 16 | 0 | 1 | 1 | 1 | 15 | 8 | 426 (212) | 25 (13) |
| 17 | 13 | 26 | 23 | 5 | 4 | 1 | 4 | 2 | 6 | 1 | 3 | 116 (55) | 25 (12) |

## Front matter and appendices

Three Prefaces, near copies. The recommendation is one book `intro/` page
from Volume 1's (m60027), which already lists the chapters of all three
volumes, kept verbatim; the paragraphs only Volumes 2 and 3 print (their
scope sentence and their projects) are not added, since the merged book is
read from Volume 1's front. The three appendices: A and B are tables and
become sheets, `sheets/integrals.json` and `sheets/derivatives.json`, which
every integration and differentiation section points at; C, Review of
Pre-Calculus, is prose with formulas and becomes a page after the chapters
when the app has a place for one, as Chemistry's Appendix B does.

## Figures

847 numbered figures and about 1900 images in all (1936 JPEGs in
`media/`, every one of them a raster; there is no SVG). By alt text, about
1140 are graphs: a function's curve on axes, a tangent or secant, a shaded
area, rectangles under a curve, a slope or direction field, a level-curve
map. About 200 are diagrams of solids, surfaces, vectors and regions in
space, most of them in Chapters 6 and 12–16. About 45 are photographs: the
seventeen chapter openers and a few beside an applied example (a rocket, a
sports car, a bridge, the Grand Canyon Skywalk). Credits are a "(credit: …)"
clause in the caption, 43 of them.

A graph is the book's sketch figure: the app draws it live, with the
book's function and numbers as defaults, and never ships the raster in its
place. A graph that serves an exercise ("Use the graph to find…") is drawn
faithfully, still and without sliders. A photograph is kept on the
introduction page and where an example points at it, dropped where it is
decoration.

## What would make this book stunning (root rule 23)

Calculus is a subject of motion frozen into still pictures: every limit is a
zoom, every derivative a tangent that tilts as its point slides, every
integral a sum of rectangles that thins into an area. The book draws one
frame of each. The live page can draw the motion itself, and the ideas
become things the reader does with their hand.

- **Functions (Ch 1).** A function plotter with a draggable input: drag x,
  watch f(x) rise on the axis; the vertical and horizontal line tests as a
  line the reader sweeps; transformations of a graph as sliders on
  a, b, c, d in a·f(b(x − c)) + d, the graph morphing; the inverse as the
  graph reflected across y = x, the point and its mirror moving together;
  the unit circle unrolling into the sine curve.
- **Limits (Ch 2).** A limit as a zoom: the reader zooms in at x = a and
  the graph straightens or the hole stays; ε–δ as two bands, the reader
  narrows ε and the figure finds the δ that works or fails; the squeeze
  theorem as two curves pinching a third; a secant line whose second point
  slides into the first, its slope converging, the opening of the
  derivative.
- **Derivatives (Ch 3–4).** A tangent riding the curve with its slope
  plotted live beneath as f′, so the derivative is drawn by the reader;
  the chain rule as two gears or linked number lines whose stretch
  factors multiply; related rates as a ladder sliding down a wall; linear
  approximation as the tangent line that hugs the curve and the error that
  grows away from the point; the Mean Value Theorem as the secant and the
  parallel tangent; Newton's method as tangents stepping to the root;
  optimisation as a box whose cut the reader drags while its volume curve
  peaks.
- **Integrals (Ch 5–7).** Riemann sums with n on a slider and left,
  right, midpoint as a choice, the sum converging to the area in the
  readout; the Fundamental Theorem as a moving right endpoint whose
  accumulated area is drawn as F(x) beneath, its slope equal to f;
  substitution as a stretched axis; the trapezoid rule and Simpson's rule
  beside the true area; an improper integral's area converging or not as
  the endpoint runs to infinity.
- **Solids and applications (Ch 6).** Solids of revolution in 3D: the
  region spins about its axis, the disk, washer or shell drawn as one
  slice the reader slides; arc length as a polygon refined into a curve;
  work pumping a tank as layers that rise; the centre of mass as the
  balance point of a lamina the reader shapes.
- **Differential equations (Ch 8, 17).** A direction field the reader
  clicks into to drop an initial condition and watch its solution flow;
  Euler's method stepping beside the true curve as h shrinks; the logistic
  curve against its carrying capacity; a spring–mass system whose damping
  slider walks it from oscillating through critical to overdamped.
- **Series (Ch 9–10).** Partial sums climbing on a number line toward the
  sum or wandering off; the integral test as rectangles over and under a
  curve; Taylor polynomials converging to sin x or eˣ as the degree
  slider rises, and failing past the radius of convergence for 1/(1 − x).
- **Parametric and polar (Ch 11).** A point tracing a cycloid as the
  wheel rolls; a polar rose drawn by a rotating ray whose length is r(θ);
  conics from the focus and directrix as the eccentricity slider passes 1.
- **Vectors and space (Ch 12–13).** Vector addition by dragging tips; the
  dot product as a projection shadow; the cross product in 3D with its
  parallelogram and the right-hand rule; lines and planes in space; quadric
  surfaces the reader turns; the TNB frame riding a helix, curvature as
  the osculating circle.
- **Several variables (Ch 14–15).** A surface z = f(x, y) in 3D beside its
  contour map, a point dragged on one shown on the other; partial
  derivatives as the surface sliced by a plane; the tangent plane; the
  gradient as an arrow on the contour map, perpendicular to the level
  curve, the directional derivative as the slope along a turning
  direction; Lagrange multipliers as the level curve that just touches the
  constraint; double integrals as columns under a surface that thin into
  its volume; polar, cylindrical and spherical elements of area and volume.
- **Vector calculus (Ch 16).** Vector fields with particles flowing through
  them; a line integral as work along a path the reader bends; a
  conservative field where every path between two points gives one
  number; Green's theorem as circulation of little cells cancelling inside;
  divergence and curl as a paddle wheel and a tiny sphere dropped in the
  flow; flux through a surface; Stokes' theorem as a surface with its
  boundary, the surface deforming while the integral stays.

### What the figure library has, and what this book wants

`omnistax-web/src/lib/fig/figlib.ts` (the `F` object) already has
`axes` and `curve` (a function on scaled axes, with `blendCurve` and a
choice's `curve` to morph between functions), `line`, `arrow`, `dot`,
`text`, `label`, `headline`, `readout` with live type-coloured equations,
sliders through `ctl` with detents and `specials`/`F.solve` for named
values, `choice` and `select`, `hover` names, `morph`/`tween`/`story`/`tour`
for directed sequences, `vectorTriangle`, and `view3d` with `F.mesh`
(`sphere`, `stick`, `arrow`, `polyline`, `arc`, `box`, `plane`) on
three.js. There is no in-canvas drag: a point moves only through a slider.

A calculus book would want, in order of reach:

1. **A draggable point on a graph** (`F.drag` on axes): an input the reader
   drags along x, or a point in the plane, bound to a slider so that a
   control and a stored note still name it. Nearly every figure of
   Chapters 1–5 uses one.
2. **A function plotter** over `axes` and `curve` that draws holes, jumps
   and vertical asymptotes honestly (an open circle at a removable point,
   no line across a pole), shades between two curves, and draws a tangent
   or secant at a point: `F.plot`, `F.shade`, `F.tangent`.
3. **Riemann rectangles** (`F.riemann`: left, right, midpoint, trapezoid,
   n), reused by the integral test and double integrals.
4. **A zoom** on a 2D graph about a point, kept within the frame, for
   limits, local linearity and differentiability.
5. **A field plotter**: a slope field and a 2D vector field on a grid, with
   particles advected through it (moving tier), for Chapters 8, 16 and 17.
6. **A surface mesh** for `view3d`: z = f(x, y) and parametric surfaces,
   solids of revolution swept from a region, with a contour map beside it
   as the flat partner.
7. **Parametric and polar curve tracing**: a curve drawn up to a parameter
   value, for Chapters 11 and 13.

## Things the converter must keep

For the converter pass, and for the builder where the converter loses it:
the "Definition", "Rule: …", theorem, proof and strategy notes as distinct
blocks with their titles; the example's problem title, solution and
Analysis; the checkpoint's hint; the shared stem paragraphs before an
exercise group; "[T]"; MathML as LaTeX, `<m:munder>` limits and integrals
with their bounds, `<m:mtable>` cases; the two-column Key Equations table
with each row's name.
