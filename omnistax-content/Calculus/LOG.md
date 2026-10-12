# Experiment log: Calculus (OpenStax Calculus Volumes 1, 2 and 3)

Source: OpenStax Calculus Volumes 1, 2 and 3, CC BY-NC-SA 4.0, copyright
Rice University, senior contributing authors Gilbert Strang and Edwin
“Jed” Herman. CNXML source: `source/osbooks-calculus-bundle/`, a clone of
github.com/openstax/osbooks-calculus-bundle (gitignored), three
collections over one module folder, merged into one book: a Preface, 17
chapters of 110 sections with an introduction each, and 3 appendices. No
PDF. The table of contents with module ids is `toc.md`.

Workflow: the full-book pass of root rule 18 first, then chapters by the
prep / sections / chapter-pass split.

## Pass 1: the full-book pass (2026-10-12)

Prompted by: Chen asking for "Calculus volume 1 to 3 openstax, as one
omnibook", and root rule 18.

What the exploration found, in brief (`exploration.md` has the whole of
it). The three volumes overlap by module id (Volume 2's Chapters 1–2 are
Volume 1's 5–6, Volume 3's Chapter 1 is Volume 2's 7, the appendices are
shared), so the merged book takes each module once and numbers chapters
1–17. Cross-references are number-less links and renumber for free; the
prose names another volume once ("Section 6.6 of Volume 1", in 15.6). One
module is one section and everything sits inside it: objectives,
definitions (186), theorems (203), rules (40), proofs (75),
problem-solving strategies (36), examples (785) with their solutions,
checkpoints (641, 633 keyed, most with a hint), Media links (42), Student
Projects (21, unkeyed question lists), Key Equations (75 sections), Key
Concepts, Section Exercises (5870) and the glossary (508); Chapter Review
Exercises (446) sit in each chapter's last module and are the only thing
aggregated. Exercise numbers run through the chapter and the key is
exactly the odd-numbered ones (2872 + 220). 847 numbered figures, about
1140 images by alt text are graphs, about 200 are solids, surfaces and
vectors in space, about 45 are photographs; every image is a JPEG.

What was decided, in `RULES.md` and `COLOR.md`:
- book id `calculus`, title "Calculus", Volume 1's Preface as the book's
  `intro/` page, each chapter's introduction its `intro/` page;
  Appendices A and B are sheets, C a page later;
- `openstax` is `https://openstax.org/books/` and each slug carries its
  home volume, a shared module's home being the earliest volume;
- definitions are `definition`, theorems and rules `result`, strategies
  `skill`; the book states no axioms;
- nine types in scheme order (function, derivative, integral, limit,
  sequence, series, vector, vector field, region); variables, indices,
  constants, ε and δ, coordinates and application parameters stay in ink;
  a type is a role, so a symbol takes the type of the concept its
  variables row names in that section;
- the formulas list is named "Theorems and formulas";
- three exercise kinds: `checkpoint` (inline), `exercise` and
  `review-exercise` (the Exercises document); Student Projects stay in
  the text as notes;
- a graph is always drawn live; 3D is for solids, space, surfaces and
  fields through a surface, with a surface read by its level curves built
  flat and 3D side by side.

`book.json` carries the identity, the licence, the Preface as `intro`, the
nine types with the default colours from `npm run colours:default --
calculus`, the three kinds, and empty `chapters`, `symbols`,
`exercise_sources`, `concepts` and `concept_prereqs`. `ost check calculus`
and `npm run check:content` pass with no chapters. `exploration.md` closes
with what live figures could show per chapter and the figure-library parts
the book wants, the first a draggable point on a graph.

Left for the chapter passes: the converter's support for this bundle,
`toc.md` and `modules.json` (a parallel pass); the Preface page; the two
sheets; the figure-library parts; rerunning the colour default once pages
exist; and the config list for Chapter 1, which this pass puts to Chen.


## Pass 2 (2026-10-12): eighteen types

Prompted by: Chen's ruling that the nine types of Pass 1 were too lean.
Pass 1 had been told to keep the categories few; root rule 7 fits the
palette to the categories, never the other way round.

What was decided, in `RULES.md`, `COLOR.md` and `ch01/COLOR.md`:
- nine types added, eighteen in all, in scheme order function,
  derivative, integral, limit, point, set, line, angle, error, region,
  sequence, series, curve, vector, plane, surface, vector field, matrix,
  so the types of the early pages take the hues farthest apart in book
  order;
- `set` for a domain, a range, an interval and its notation, an interval
  of convergence and a solution set; `point` for (a, f(a)), zeros,
  intercepts and critical, inflection and extreme points; `line` for
  tangent, secant and normal lines, asymptotes and lines in space;
  `angle` for θ in radians or degrees, the polar θ and the angle between
  two vectors; `error` for an approximation's error, the Taylor
  remainder Rₙ and the trapezoid and Simpson error bounds; `matrix` for
  the Jacobian and determinants; `plane` for planes in space and tangent
  planes;
- `curve` and `surface` are split out of `region`, which keeps only the
  sets of the plane and of space that an integral is taken over and the
  solids;
- an applied quantity wears the mathematical type it is (a velocity is a
  derivative, work, mass and a total change are integrals, a position or
  a cost is a function), and the book has no physical quantity types;
  variables, indices and the constants e, π and C stay in ink, and ε and
  δ are bands in the colour of what they bound.

Chapter 1 was retyped with `ost set`: `domain`, `range`,
`interval-notation`, `natural-domain` and `restricted-domain` are `set`;
`zeros-of-a-function` and `y-intercept` are `point`; the three forms of a
line's equation in 1.2 are `line`; `radian` is `angle`. θ in 1.3 is an
angle; b of the intercept (0, b) stays in ink as a coordinate; D, R, θ, A,
B and the new E have macros, and A, B and E are sets in 1.1's definition
of a composite. The 1.1 page marks its written domains, ranges, intervals
and intercepts with `data-type`, and its figures draw the ovals of the
maps and the bands of the domain finder in `set`, the marked and dragged
points in `point` and the vertical line test's line in `line`.
`npm run colours:default -- calculus` was rerun with 1.1 built.


## Pass 3 (2026-10-12): Chapter 1 pass

Every section's "Wanted at chapter level" was applied: the anchors of all
81 forms of the chapter and of every variables row, two new forms of
`trigonometric-functions` (`eq-trig-radius-r`, `eq-trig-right-triangle`),
and new variables rows for h and t in 1.3 and f, D, g, h and θ in 1.4.
The chapter review exercises held in 1.5 landed with the section that
introduces what each tests: 311 in 1.1; 319 and 331 in 1.2; 321, 323 and
333 in 1.3; 310, 312 (AI-marked), 313, 327 and 329 in 1.4; 315, 317, 325
and 335 stay in 1.5. Three corrections were added as notes: Example
1.38's "e = 3" where b = e is meant, and the keys to 327 and 329, which
write y where x is meant. The chapter opener's link to Example 1.39 names
the qualified id. `npm run colours:default -- calculus` was rerun with the
chapter built.


## Pass 4 (2026-10-12): Chapter 2 pass

Every section's "Wanted at chapter level" was applied: the anchors of all
the chapter's forms and variables rows, and new variables rows for g, h
and k in 2.1 (k with its macro, `\kk`) and m in 2.2, Einstein's moving
mass (`\km`); g and h in 2.1 and h in 2.2 redefine Chapter 1's meanings.
The chapter review exercises held in 2.5 landed with the section that
introduces what each tests: 231 in 2.1; 210 (AI-marked) in 2.2; 209, 213,
215, 217, 219, 221, 223 and 224 (AI-marked) in 2.3; 208 and 230
(AI-marked), 211, 225 and 227 in 2.4; 228 and 229 stay in 2.5. Two
corrections were added as notes: the key's [2, ∞] for 225, meant
[2, ∞), and the key's reason for 211, where a removable discontinuity is
no counterexample. `tangent-line` wears `line`, its slope `derivative`,
and 2.1's figures draw the tangent in `line`. The chapter opener's link
to Example 2.12 names the qualified id.


## Pass 5 (2026-10-12): No volumes

Chen's ruling: the merged book drops the volumes for the reader. The Preface's words that assume three volumes are changed to the one book, its three coverage lists made one list of Chapters 1–17 in the merged numbers, and each change carries a correction note giving what the book printed (v-welcome, v-licence, v-about (heading and paragraph), v-coverage, v-chapters, v-pedagogy, v-transcendentals). "Over 60 Proofs" stays, still true of the whole book. RULES and the chapter configs now say that 15.6's "Section 6.6 of Volume 1" becomes "Section 6.6" with a note. Chapters 1 and 2 print no volume.


## Pass 6 (2026-10-12): Chapter 5 pass

Chapter 5, Integration, was built whole by one agent: prep, the introduction
and 5.1–5.7, and this pass. Every section's "Wanted at chapter level" was
applied as the sections were built: the anchors of all the chapter's forms
and variables rows, a 5.5 row for F′ on `derivative-function`, and a reworded
5.4 meaning for v that covers Example 5.27's wind speed. Two symbols were
added, f_ave (`\kfave`) and p′ (`\kpprime`); Lₙ, Rₙ and A₁, A₂ are written
`\kL_{n}`, `\kA_{1}` on the rows L, R and A, which carry the endpoint and
area concepts. The chapter review exercises printed at the end of 5.7 landed
with the section that introduces what each tests: 439 in 5.1; 440
(AI-marked) and 441 in 5.2; 442 (AI-marked), 443, 445, 455 and 457 in 5.3;
447, 459 and 463 in 5.4; 449 and 451 in 5.5; 461 in 5.6; 453 stays in 5.7.
463 and 461 carry the statements of 462 and 460, which the book asks them
of. Corrections added as notes: 5.2's exercise 101 (the key drops a minus
sign), 125 (A is 2, not π, and the key writes B − A) and 132 (a < b < c);
5.3's exercise 165 (the key's upper limit); 5.7's Key Concepts link, whose
words name 3.9 and open 3.7. A group's "For the following exercises" stem
is carried only by the exercises the book sets under it. Figures 5.1–5.39
are numbered without gaps; six Sims of OmniStax’s own were added, two
figure pairs became moving figures (the car of 5.20 + 5.21, the particle of
5.33).


## Pass 7 (2026-10-12): (2026-10-12): Chapter 7 pass

Chapter 7, Techniques of Integration, was built whole by one agent: prep, the
introduction and 7.1–7.7, and this pass. The chapter's 40 concepts and 77
prerequisite edges were merged after Chapter 6's; one symbol was added, f⁽⁴⁾
(`\kffour`). Mₙ, Tₙ and Sₙ are written `\kM_{n}`, `\kT_{n}`, `\kS_{n}` on the
rows M, T and S of 7.6, which carry the three rules, as Chapter 5 writes Lₙ;
the M of an error bound stays a plain letter. `relative-error` is Chapter 4's
concept, which 7.6's definition reinforces. Every section's "Wanted at chapter
level" was applied: the anchors of all 33 forms and of every variables row,
and two 7.2 rows for a and b. The book numbers 21 equations here, the seven
with `class="numbered"` and the fourteen with no class (Example 7.50 cites
"Equation 7.17"); all keep their numbers as \tag{7.N} and every reference to
one reads "Equation 7.N", linked. The chapter review exercises printed at the
end of 7.7 landed with the section that introduces what each tests: 408
(AI-marked) and 411 in 7.1; 413 and 419 in 7.3; 409, 415 and 421 in 7.4; 417 in
7.5; 410 (AI-marked), 423 and 425 in 7.6; 427, 428 and 429 (AI-marked) stay in
7.7. 431 is left out with 430, whose curve fit it integrates. Corrections added
as notes: 7.2's exercise 77 (tan²(x/2)); 7.3's dx = a cos θ, Example 7.26
(sec θ) and Example 7.27 (sec²θ − 1); 7.5's exercise 291 (about 1273.37) and
review 417 (the term −sin⁻¹(sin x/2)); 7.6's Simpson derivation (∫ from x₀ to
x₄, ≈), Example 7.45 (S₂), Checkpoint 7.24 (M₂), Checkpoint 7.25 (the midpoint
bound, Equation 7.12) and exercise 333 (0.1554); 7.7's Example 7.49 ("Revise
to:", and 0.0357 over 10 months for 3.8 × 10⁻¹¹ over 8) and Example 7.50 (t → −∞).
The keyed antiderivatives (91) were checked by differentiation and some
thirty numeric keys recomputed. Figures 7.1–7.22 are numbered without gaps;
7.14 and 7.15 are folded; the solids of 7.3 and 7.19 are 3D on `F.revolve`;
three Sims of OmniStax's own were added (products of sines and cosines, partial
fractions, and Example 7.37 as a second state of Figure 7.12). The Integral
Calculator and the Table of Integrals are linked where the text first uses a
technique and where 7.5 names a table and a CAS.


## Pass 8 (2026-10-12): Pass (2026-10-12): Chapter 3 pass

Chapter 3, Derivatives, was built by one agent after the prep (9e1efd6e): the
introduction and 3.1–3.9, and this pass. Every section's "Wanted at chapter
level" was applied as the section was built: anchors on all the chapter's
forms and variables rows, and rows for the letters each section writes with a
macro (f, g, s, v and their primes, dy/dx, θ in 3.7). Four symbols were added
through book-rows.json and merged: C′ (`\kCprime`), R′ (`\kRprime`), v′
(`\kvprime`) and k′ (`\kkprime`). The form eq-instantaneous-velocity-derivative
now belongs to 3.1, where it is stated. The book's numbered equations
(3.1–3.35) carry their numbers as tags, so "Equation 3.5" in an example names
what the reader sees.

figlib gained a Chapter 3 block: `F.deriv`, the derivative tracer (f with its
tangent above, f′ traced below on the same x-range), and `F.secants`, the
secants to a − h and a + h; their pure parts are in src/lib/fig/deriv.ts with
tests/deriv.test.ts, and docs/prompts/interactive-figures.md lists both. The
tracer draws 3.2's Figures 3.12 + 3.13, 3.5's Figure 3.27 and 3.9's Figure
3.35. ost.py's find_row now names a variables row whose symbol holds a slash
(dy/dx).

Folds: 3.3 + 3.4, 3.12 + 3.13, 3.14 + 3.15 + 3.16, 3.23 + 3.24 (a moving
particle on the transport's clock), 3.31 + 3.32 (with Example 3.73's ellipse),
3.33 + 3.34. Sims of OmniStax's own: the product rule as an area (3.3) and the
chain rule as two stretchings on three number lines (3.6). Figures 3.1–3.35
are numbered without gaps; Tables 3.1–3.9 too, Table 3.5 standing only in the
left-out exercise 174. Photographs kept: 3.1, 3.2, 3.10, 3.20.

The Chapter Review Exercises printed at the end of 3.9 landed with the
section that introduces what each tests: 391 in 3.1; 367–371 and 387 in 3.2
(368 and 370 with AI-marked answers); 373 in 3.3; 377 in 3.5; 389 in 3.6 (it
needs the chain rule); 379 in 3.7; 375, 381, 383, 385 in 3.9. Unkeyed even
section exercises were left out except those asking for a proof, a derivation
or an explanation, kept with AI-marked answers: 42, 44; 74, 76, 90, 92, 94,
98, 100; 205–208; 366.

Corrections added as notes: 3.1 Checkpoint 3.2's hint; 3.2 Checkpoint 3.10's
hint and exercise 105's key; 3.3 Checkpoint 3.17's answer; 3.4 Example 3.34's
v(t) for v(2), exercises 153, 167 and 169's keys; 3.6 Checkpoint 3.40's hint;
3.7 Example 3.64's reference and Checkpoint 3.43's answer; 3.8 the split
function's domain and Example 3.70's d/dy; 3.9 Example 3.79's broken
reference and exercise 361's key.


## Pass 9 (2026-10-12): Chapter 4, Applications of Derivatives, was built by one agent in one run: the

prep (exploration, config agreed by carry-over, colour plan, chapter.json, 55
concepts and 109 prerequisite edges merged), the introduction and 4.1–4.10,
and this pass. Each section's plan was written just before its build. A
scratch converter turned each source.md into the page's draft and exercise
rows, so the prose, examples, notes, tables and keys are the book's; concept
spans, macros, function tokens, figures and captions were set per section.

Symbols added through book-rows.json and merged: the related rates dV/dt,
dr/dt, dx/dt, ds/dt, dh/dt, dθ/dt; V, V′, r′; F, F′, G, G′; S′ (R′ was
already merged by another chapter and is shared). Every variables row the
chapter gives a meaning to carries an anchor, and so does every form of its
concepts. The book's numbered equations (4.1–4.11) carry their numbers as
tags. `end-behavior` (1.2) and `indeterminate-form` (2.3) are reinforced here,
not restated.

Figures 4.1–4.86 and Tables 4.1–4.13 are numbered without gaps. Folds: 4.25 +
4.26 (the MVT with its proof's g below), 4.62 + 4.63, 4.64 + 4.65, 4.69 + 4.70
(each optimization scene with its graph). Required figures made live as Sims:
the four related-rates scenes (moving, each holding on the example's instant),
the four linear approximations and the differential, the local-extremum test
on an interval, the closed-interval search, the stacked f, f′, f″ sign view,
the ε–N and M–N games, the leading term and the oblique asymptote at growing
windows, the five optimization scenes (the revenue as a rectangle under the
demand line), L'Hôpital's zoom, eˣ against any power, Newton's steps as a
story, two cobwebs, the family of antiderivatives with parallel tangents and
the initial-value curve. No Sim of OmniStax's own was added: each candidate
was judged and dropped in its plan. Stand-ins where the book prints no
formula: 4.14, 4.15, 4.21, 4.25, 4.29, 4.31, 4.35, 4.37, 4.38, 4.41, 4.80,
4.11 (chosen not to answer Checkpoint 4.9). Photographs kept: 4.1, 4.4; the
Mandelbrot image 4.83 kept. No figlib change.

The Chapter Review Exercises printed at the end of 4.10 landed with the
section that introduces what each tests: 549 in 4.1; 531 in 4.2; 526, 533 in
4.3; 525 in 4.4; 527, 528, 529, 535, 537 in 4.5; 539, 547 in 4.6; 551 in 4.7;
541 in 4.8; 543 in 4.9; 545 in 4.10; 526 and 528 with AI-marked answers; the
12 unkeyed computational ones left out. Unkeyed even section exercises were
left out except explanations, proofs, interpretations and true-or-false
justifications, kept with AI-marked answers, and keyed ones whose key reads
only "Answers may vary" (4.3's 91, 93, 105, 107; 4.5's 217, 219).

Corrections added as notes: 4.3 the critical-number definition; 4.4 the
decreasing condition and exercise 193's key (the car proof moved to 191);
4.5 "a local maximum at x"; 4.6 Example 4.27's limit, Example 4.29's
interval, Checkpoints 4.22, 4.25 and 4.26; 4.7 Checkpoint 4.35's square; 4.8
Example 4.43's "x ≥ ∞" and Figure 4.71's caption; 4.9 Checkpoint 4.48's
index; 4.10 the constant-multiple line and Example 4.53's condition.


## Pass 10 (2026-10-13): Chapter 8, Introduction to Differential Equations, was built by one agent in one run: the

prep (exploration, config agreed by carry-over, colour plan, chapter.json with 44 variables,
34 concepts, 58 prerequisite edges and 14 symbols merged after Chapter 7's concepts were in),
the introduction and 8.1–8.5, and this pass. A scratch converter turned each source.md into
the page's draft and exercise rows, so the prose, examples, notes, tables and keys are the
book's; concept spans, macros, function tokens, figures and captions were set per section.
Every CNXML equation without the class unnumbered is tagged 8.1–8.26 as openstax.org numbers
it, and each cited "Equation 8.N" matches a visible number.

The unknown function y is the new symbol y_fn (macro \kyfn, typed function, as u_fn is);
y′ and the higher derivatives wear derivative. The carrying capacity K wears limit, an
initial value point, a direction field's segments derivative and Euler's steps line.

The figure library gained one part, F.slopefield (field, curve, euler; pure geometry in
src/lib/fig/slope.ts with tests/slope.test.ts): a direction field of y′ = f(x, y), the
solution through a point traced both ways by Runge–Kutta steps that stop where it blows up,
and Euler's polyline for a step size h, the draggable point coming from F.drag. Folds:
8.4 + 8.5 (the baseball, moving), 8.7 + 8.8, 8.9 + 8.10 + 8.11, 8.13 + 8.14 (Euler, h on a
slider), 8.21 + 8.22 (the deer's logistic field). Moving Sims: the baseball, the brine tank,
the cooling pizza, the racquetball against air resistance. Still copies: 8.6 (its two
starts T(0) = 100 and 50 are stand-ins), 8.12, 8.15, 8.18, 8.19, 8.23, 8.25, 8.26. Photos
kept: 8.1, 8.20. No Sim of OmniStax's own beyond the required figures.

The Chapter Review Exercises printed at the end of 8.5 landed with the section that
introduces what each tests: 267, 273, 283 in 8.1; 265, 281 in 8.2; 263, 269, 271, 275, 287
in 8.3; 289 in 8.4; 262, 264, 277, 279, 285 in 8.5; 262 and 264 with AI-marked answers;
the 12 other unkeyed ones left out. Unkeyed even section exercises were left out except
verifications, "show that", derivations and explanations, kept with AI-marked answers
(8.1's 8–17 odd and even, Checkpoints 8.1 and 8.4, 104, 114, 164, 200, 208, 210, 212).

Corrections added as notes: Example 8.7's missing initial-value problem; Table 8.2's
y₇–y₁₀; Example 8.13's and Checkpoint 8.13's "Equation 8.4" (8.7 meant); Checkpoint 8.14's
missing P; Example 8.19's v(0) = 2; the "Equation 8.23" cited for the RC equation;
Checkpoints 8.18's and 8.19's hints; exercise keys 59, 65, 95, 103, 107, 111, 113, 117,
187, 193, 221 and review 281.
