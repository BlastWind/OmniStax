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


## Pass 11 (2026-10-13): Chapter 6, Applications of Integration, was built by one agent in one run: the introduction and 6.1 to 6.9, then the chapter pass

The plans were written section by section just before each build rather than all in prep; config 2 waives the review for this run, and every plan records its decisions. Sixty concepts and 89 edges merged through book-rows.json, with ten new symbols (u_fn, V_shell, ρ, W, F_h, w, Mₓ, M_y, x̄, ȳ). Every variables row the chapter gives a meaning to carries an anchor, and so does every form of its concepts. The book's numbered equations (6.1–6.27, every `<equation>` not marked unnumbered, chapter-wide) carry their numbers as tags. 6.7 rebuilds ln, e and eˣ: the definitions by the integral are new concepts; the properties, derivatives and integrals of 1.5, 3.9 and 5.6 are reinforced, not restated.

Figures 6.1–6.84 and Tables 6.1–6.4 are numbered without gaps. Solids of revolution are mathematical 3D through a new figlib part, `F.revolve` (pure geometry in `solid.ts` with tests; `F.revolve.mesh` lays a swept profile, its cut faces, disks, washers and shells into a view3d scene, `F.revolve.paint` paints a locked view): the figures whose idea is the solid turn freely (a region revolving as a story, disks, washers, shells, a shell unrolled, the method choice, frustum bands, the Pappus torus); the solids of worked examples are painted locked views, so a page holds at most three WebGL scenes. Folds: 6.2 + 6.3, 6.8 + 6.9, 6.12 + 6.13, 6.16 + 6.17, 6.20 + 6.21, 6.25 + 6.26, 6.37 + 6.38, 6.40 + 6.41, 6.42 + 6.43 + 6.44, 6.48 + 6.49, 6.52 + 6.53, 6.54 + 6.55, 6.59 + 6.60 + 6.61 (the Hoover Dam, full or in the drought), 6.62 + 6.63, 6.65 + 6.66, 6.68 + 6.69, 6.75 + 6.76 + 6.77 (ln as a signed area, specials at 1 and e). Figure 6.34, a table printed as an image, is redrawn live. Stand-ins where the book prints no formula are named in each plan; sliders stop short of every checkpoint's numbers (the cone, the torus of radius 1, k = 0.05, a = 15, the dam's average level). One Sim of OmniStax's own: the coffee of Example 6.45 cooling through the serving band (6.8). Photographs kept: 6.1 (the dam), the unnumbered dam image of Example 6.28, 6.72 (the Skywalk), 6.83 (the chains).

The Chapter Review Exercises printed at the end of 6.9 landed with the section that introduces what each tests: 437, 439, 441 in 6.2; 443, 445, 447 in 6.3; 453, 455 in 6.4; 435, 436, 449 in 6.5; 451 in 6.6; 438, 457, 458 in 6.8; 459 in 6.9; 436, 438 and 458 with AI-marked answers; the ten unkeyed computational ones left out. Unkeyed even section exercises were left out except derivations, proofs, checks and true-or-false justifications, kept with AI-marked answers (6.2's 58–62, 6.3's 164, 6.4's 168 and 214, 6.6's 282 and 284, 6.7's 344 and 346, 6.8's 348 and 350, 6.9's 380–384, 420, 422, 428–434), and keyed ones whose key reads only "Answers may vary" (6.4's 215, 6.5's 253, 6.9's 379–383 and 419). Where the book leaves a "For the following exercises" stem standing over exercises it does not describe, those cards carry no stem (6.1 49, 51; 6.2 103–107; 6.3 163, 164; 6.4 169, 207–217; 6.5 234–253; 6.6 290–294; review 449, 451, 457).

Corrections added as notes: 6.5 exercise 253's area A = πr²h²/H³ (over H²); 6.6 Checkpoint 6.30's "on a number line" for points of the plane; 6.8 exercise 351's key (the constant of the other form of the model); 6.9 Example 6.51's "Recall from Section 2.4", reworded to Section 6.4 and linked. The dropped media notes (6.1's area calculator, 6.2's integral calculator, 6.5's History Channel article) are named in `notes`.


## Pass 12 (2026-10-13): Chapter 10, Power Series, was built by one agent in one run: prep, the

introduction and 10.1 to 10.4, then the chapter pass. The chapter's 30
concepts and 50 prerequisite edges were merged after Chapter 9's; one symbol was
added, f⁽ⁿ⁺¹⁾ (`\kfnplusone`), for Taylor's theorem. `series` is the chapter's
main type: a power series, the partial sums S_N and T_N, the Cauchy product,
the Taylor and Maclaurin polynomials pₙ (written `\kp_{n}` on row p), the
binomial series and the present value P; the remainder Rₙ wears `error`
(`\kR_{n}` on row R, which means the radius of convergence in 10.1 and 10.2,
untyped, and the remainder in 10.3 and 10.4, with `redefines`); intervals of
convergence the text states are marked `data-type="set"`. Every section's
"Wanted at chapter level" was applied: the anchors of all 32 forms and of every
variables row. The book numbers 11 equations here, every `<equation>` that is
not `class="unnumbered"`, as openstax.org shows them (Volume 2's 6.4 prints
(6.6) to (6.11)); all keep their numbers as \tag{10.N}, and every reference to
one reads "Equation 10.N", linked. Theorems are cited by their titles, linked
to their notes, as openstax.org prints them. Table 10.1 (Maclaurin Series for
Common Functions) stays in the text and the words that present it link to the
Maclaurin sheet. The chapter review exercises printed at the end of 10.4 landed
with the section that introduces what each tests: 257 and 259 in 10.1; 253,
254 (AI-marked), 261, 263 and 277 in 10.2; 255, 265 and 269 in 10.3; 256
(AI-marked), 267, 271, 273 and 275 (keyed "Answers may vary", AI-marked) stay
in 10.4. Corrections added as notes: 10.1's "the series in Example 10.3" (the
series of Equation 10.3) and exercises 5 (x = 0 is an endpoint), 49 (a₂ₙ) and 51
((0, 1]); 10.2's exercises 67 (2²ⁿ⁺²) and 89 (the prompt's series and the key
each off by a sign); 10.3's Example 10.12 (m ≥ 0), Example 10.13 (f‴(8) ≈
0.0014468), Example 10.14 (the remainder comes from Taylor's theorem),
Checkpoint 10.14 (2ⁿ⁺² in the hint and the series) and exercises 129
(p₁₀₀₀(2) ≈ 0.6926), 139 and 145 (−sin(x − π/2)); 10.4's Checkpoint 10.18 (the
series of (1 + x)^(−3/2)), Checkpoint 10.19 (the coefficient equations
reversed), Checkpoint 10.21 (0.764, not 0.514), Example 10.20 (4c₄), Example
10.23 (six terms give 0.4729; five give 0.4922, outside the stated accuracy),
Example 10.24 (1·3), exercises 185, 195, 199, 205, 213 (the arcsin series),
235, 237, 241 (the signs of a₂, a₃, a₅), 247, 251 (9k⁴/64) and review 267. Each
corrected value was recomputed, and many keys of 10.2 to 10.4 were checked by hand on the way. Figures 10.1 to 10.12
are numbered without gaps; none is folded (10.6 to 10.8 are the three parts of
one example, each read beside its part); 10.1 and 10.4 are kept photographs.
Four Sims of OmniStax's own were added: the present value of an annuity, the
Cauchy product as a grid, term-by-term differentiation and integration in 10.2,
and the series solution of Airy's equation in 10.4. The MacTutor biographies
of 10.3 are left out (a media note). Binomial coefficients, which the CNXML
writes as one-column arrays, are set as \binom.


## Pass 13 (2026-10-13): Chapter 9, Sequences and Series, was built by one agent in one run: prep, the introduction and 9.1 to 9.6, then the chapter pass

Prep converted the seven modules, wrote exploration.md, config.md (carried over from Chapter 3) and COLOR.md, chapter.json (46 variables rows) and book-rows.json, merged after Chapter 8's concepts were in: 60 concepts, 106 edges (checked Hasse-reduced against the book's graph), four new symbols, a_seq, b_seq and c_seq (the terms of sequences, latex a, b, c, typed `sequence` through their concept) and S_sum (the sum of a series, typed `limit`); the book's a_n, a polynomial coefficient of 1.2, is untouched. S carries the partial sums Sₖ (`series`), R the remainder R_N (`error`), ρ the limit of the ratio and root tests (`limit`). Every variables row carries an anchor, and so does every form of the chapter's concepts. Plans for every page were written in prep.

Equations are numbered as openstax.org numbers them, checked on its pages: every clean display equation of 9.1–9.3 and the four marked `class="numbered"` in 9.5, Equations 9.1–9.14, each `\tag{9.N}`, so "Equation 9.6" and "Series (1), shown in Equation 9.11" name visible numbers. Figures 9.1–9.18 and Tables 9.1–9.3 are numbered without gaps; Table 9.3, the book's Summary of Convergence Tests, stays a book table with its spanning rows.

Sequences and series are drawn apart throughout: terms as dots in `sequence`, partial sums in `series`, limits and sums as dashed `limit` levels, the remainder in `error`. Sims: 9.1 six (Figure 9.2 widened to the text's arithmetic and geometric sequences; Figure 9.3 with N terms; Figure 9.4's ε–N band on a stand-in aₙ = 2 + 3(−1)ⁿ⁺¹/n, the sketch printing no formula, and on the text's two convergent sequences; Figure 9.5 on the text's √x and cos x cases; Figure 9.6 with the three sequences as referents; Figure 9.7 with a bound M); 9.2 four (Figure 9.10 as terms below partial sums for five series; Figure 9.11 the Koch snowflake live; Sims of the geometric series and of the telescoping series laid end to end on a number line); 9.3 two (the fold 9.12 + 9.13 + 9.14 on p and the remainder estimate on Example 9.16's 1/x³); 9.4 two (Figure 9.16 with referents for the given and the compared series; a limit comparison Sim with Example 9.18(c)'s three tries); 9.5 two (the fold 9.17 + 9.18; the rearrangement the text describes, to any target); 9.6 one (the ratio and root tests on the section's series). All still; no 3D. Photographs kept: the opener's Koch iterations (intro), the sunflower and the Parthenon of 9.1's Fibonacci project. The 9.6 media link is dropped and named in `notes`.

The Chapter Review Exercises printed at the end of 9.6 landed with the section that introduces what each tests: 383, 385, 387, 401 in 9.1; 389, 399, 403 in 9.2; 379, 380 in 9.3; 381, 382, 393, 397 in 9.5; 391, 395 in 9.6; 380 and 382 with AI-marked answers, 379 and 381 as true-or-false choices; the eleven unkeyed computational ones left out. Unkeyed even section exercises were left out except explanations, proofs, procedures and true-or-false statements, kept with AI-marked answers (9.2's 88, 90, 92, 130; 9.3's 188; 9.4's 230, 236, 238, 240, 244, 246, 248; 9.5's 286, 288, 290, 292, 294, 296, 298, 300, 308, 316; 9.6's 368, 374, 376, 378). Stems stand only over the exercises they describe (config 30).

Corrections added as notes: the introduction's "(see Example 9.8)" for the Koch snowflake's area, which is Example 9.11; 9.1's "shown in Figure 9.4" for sequences drawn in Figure 9.3, "= → −∞", and Example 9.6(b)'s recursion "for all n ≥ 2" used from n = 1; 9.2's "the form given by Equation 9.5" for 9.6, exercise 107's prompt and exercise 113's key; 9.4's exercise 229 prompt (no summand) and exercise 205's key; 9.5's "Theorem 5.13", Volume 2's number for the Alternating Series Test, reworded "Theorem 9.13" and linked, the note adding that the step uses the limit comparison test (Theorem 9.12), and exercise 305's prompt; 9.6's ratio-test proof (|a_{n−}|, |aₙ| ≠ 0) and exercise 327's key. Stray "**" in the keys of 9.4's 203–209 are removed.

Colour flags for the orchestrator's colours:default: in the light theme `sequence` and `series` read close (olive and dark brown), and `function`, `error` and the `integral` shading sit close (9.3's remainder figure).


## Pass 14 (2026-10-13): Chapter 11, Parametric Equations and Polar Coordinates, was built by one agent in one run: prep, the introduction and 11.1 to 11.5, then the chapter pass

Volume 2's Chapter 7 and Volume 3's Chapter 1 print the same six modules; the chapter is built once, its slugs Volume 2's. Prep converted the modules, wrote exploration.md, config.md (carried over from Chapter 3) and COLOR.md, chapter.json (48 variables rows, every one anchored in the pass) and book-rows.json, merged after Chapter 10's concepts were in: 60 concepts, 94 edges (Hasse-reduced against the book's graph), one new symbol x_prime (\kxprime). focal-parameter carries no symbol, since p is the vertex–focus distance and then the focal parameter within 11.5. The book's 15 classless display equations are Equations 11.1–11.15 with \tag, every "Equation 11.N" linked; references to theorem notes read as the theorem's title.

`curve` is the chapter's main type, with `angle` for θ, `point` for plotted points, foci and vertices, `line` for tangents, directrices, asymptotes and rotated axes, `derivative` for dy/dx and x′, y′, `integral` for areas and lengths, `surface` and `plane` for the cone and its cutting plane. A parametric curve traced over t moves under the transport (the curve faint ahead, solid behind, orientation arrowheads, the book's marked t values); a polar curve is still, drawn up to an angle θ the reader drags along it. A new figlib part, `F.polar` (polar frame, curve and path up to a parameter, ray, θ grip, sectors and strips; polar.ts pure, tests/polar.test.ts), carries both.

Figures 11.1–11.57 are numbered without gaps. Folded, where the book draws one scene again: 11.2 + 11.3 (the year's orbit), 11.9 + 11.13–11.15 (one wheel with the ant at distance b: rim, spoke, flange), 11.10 + 11.11 (the hypocycloid by a/b), 11.21 + 11.22 (rectangles under the cycloid's arch), 11.23 + 11.24 (chords on the semicircle), 11.31 + 11.32 (the common polar curves, one choice), 11.33 + 11.34 (roses by the coefficient, stand-ins 6/5 and √2 for the book's unnamed ones), 11.37 + 11.38 (one petal reflected), 11.43 + 11.44 (a plane tilting through the double cone, 3D), 11.45 + 11.46 (the parabola's four directions). Two unnumbered images became Sims (11.3's symmetry table, 11.5's satellite dish) and one Sim was added for 11.4's arc-length theorem (the cardioid's length traced). 11.25 is 3D over a stand-in arc; 11.29 a faithful copy; 11.1, 11.50 photographs (11.36's photograph is its figure's original).

The Chapter Review Exercises printed at the end of 11.5 landed with their sections: 323, 327, 329 in 11.1; 325, 337, 339 in 11.2; 322, 331, 333 in 11.3; 324, 335 in 11.4; 341, 343, 345, 347 in 11.5; 322 and 324 (unkeyed true or false) with AI-marked approaches, 323, 325 as true-or-false choices. Unkeyed proofs 49, 117, 234 and 254 carry AI-marked approaches; every other unkeyed exercise is left out and named.

Corrections added as notes: "Calculus 1" in 11.2 reworded to Chapter 5 (cross-volume); 11.1's circle table (y = 2 printed for −2 twice), keys 21 (upper half only) and 35 (domain [1, ∞)); 11.2's −∫ₐᵇ = ∫ₐᵇ (∫ᵦᵃ), Checkpoint 11.7's interval, the baseball's speed (140.27, not 140.34 ft/s); 11.3's "Example 11.14" for Example 11.13; 11.4's "r = 3 sin θ" for 6 sin θ and key 243; 11.5's c² = b² = a² (b² + c² = a²), the equation numbers cited in Examples 11.20 and 11.21, Example 11.24's C′ lines, Figure 11.51's caption ("ellipse" for hyperbola) and key 319 (2.623). Example 11.10's second list is lettered e.–g. as the CNXML starts it.

Colour flags for the orchestrator's colours:default: `line` (tangents, rays, directrices) reads close to the orange referent dealt to 11.4's cardioid; `curve` (navy) and `integral` (pink) read apart in both themes.


## Pass 15 (2026-10-13): Chapter 12, Vectors in Space, was built by one agent in one run: prep, the introduction and 12.1 to 12.7, then the chapter pass

Prep found the eight converted modules (Volume 3, Chapter 2), copied their images to media/ch12, and wrote exploration.md, config.md (carried over from Chapter 3) and COLOR.md, chapter.json (64 variables rows, every one anchored in the pass) and book-rows.json, merged after Chapter 11's concepts were in: 90 concepts, 133 edges (Hasse-reduced against the book's graph), every form anchored, and 19 new symbols: the bold vectors u, v, w, a, b, c, p, q, r, s, F, n, i, j, k and 0 (`u_vec` … `zero_vec`, macros \kvecu … \kveczero), PQ⃗ (\kPQ), τ (\ktau) and φ (\kphi). The concept of 12.6's cylinder is `cylindrical-surface`, since `cylinder` is 6.2's solid. The book's 19 classless display equations are Equations 12.1–12.19 with \tag; references to theorem and rule notes read as the note's title, linked.

`vector` is the chapter's main type: every bold letter in the text's math goes through the macros (the book's upright \text{u} slips included), and its arrows in every figure; `point`, `plane`, `line`, `surface`, `curve` (traces), `angle` (θ, α, β, γ, φ), `matrix` (12.4's determinants) and `region` (octants, the parallelogram, the parallelepiped) as COLOR.md sets out. The dot product, scalar and triple scalar products, magnitudes, distances and work stay ink as scalars; the cross product wears `vector`. Vectors named apart in one figure (v and w) wear `vector` both and are told apart by their names, a refinement of the book COLOR.md's referent rule for the vectors of one sum.

Figures 12.1–12.105 are numbered without gaps (12.43, a credit-only photograph inside exercise 117, stays an image in its card). Folded, where the book draws one scene again: 12.5 + 12.6, 12.7 + 12.8 + 12.9, 12.12 + 12.14, 12.13 + 12.15 + 12.16, 12.17 + 12.20, 12.18 + 12.19, 12.24 + 12.25, 12.26 + 12.27, 12.28 + 12.29, 12.34 + 12.35, 12.39 + 12.41, 12.44 + 12.45 + 12.46, 12.49 + 12.51, 12.54 + 12.55 + 12.56, 12.59 + 12.60, 12.61 + 12.62, 12.64 + 12.65, 12.71 + 12.72, 12.75 + 12.76, 12.81 + 12.82, 12.83 + 12.84, 12.87 + 12.88, 12.89 + 12.90 + 12.93, 12.91 + 12.92 + 12.99, 12.97 + 12.98 + 12.100. Every figure is still: no idea of the chapter has a clock. Mathematical 3D through F.space3d, no buttons, the pitch bounded so z-up scenes are rarely seen from beneath: live scenes where turning is the lesson (the axes and the right-hand curl, a point's box, the distance prism, a vector and a sum in space, the forward pass, p ⊥ q, direction angles, the cross product's hand rule, the parallelepiped flattening to coplanar, torque, a line and its parameter, skew and intersecting lines, a plane swept by Q, two planes and their angle, cylinders, traces of the ellipsoid and paraboloid, the six quadric surfaces, cylindrical and spherical coordinates, their coordinate surfaces, the globe), at most five a page; one example's picture is a locked painted copy of the same layers (`locked: true`, added to F.space3d for this chapter). Sims of OmniStax's own: the forward pass (replacing Example 12.20's two images), the expansion of a determinant by minors, and the reflector's rays meeting at the focus (the chapter opener answered). Photographs kept: the opener, 12.73, 12.85, 12.86 and 12.105, with their credits; Figure 12.53 stays a still copy beside the hand-rule Sim, since one box cannot hold both examples' products honestly.

The Chapter Review Exercises printed at the end of 12.7 landed with their sections: 445 in 12.1; 431 in 12.2; 423, 426, 429, 447 in 12.3; 424, 427, 433, 449 in 12.4; 425, 435, 437 in 12.5; 439 in 12.6; 441, 443 in 12.7; 424 and 426 (unkeyed true or false) with AI-marked answers; the eleven unkeyed computational ones left out. Unkeyed show and prove exercises (41, 24, 107–110, 157–159, 165, 166, 194–196, 205, 207, 208, 221, 223, 226, 231, 257, 276, 279, 353, 354) and Checkpoint 12.6 carry AI-marked solutions, as do the key's "Answers may vary" in 21, 23, 37 and 283; every other unkeyed exercise is left out and named.

Corrections added as notes, the words kept as printed: the introduction's "In this first chapter" (Chapter 11 comes before); 12.1's Example 12.5 citing Figure 12.15 for the vector moved to standard position (Figure 12.14); 12.3's "rearranges Equation 12.3" (it is 12.4); 12.4's Example 12.35 and Checkpoint 12.34 citing Properties of the Cross Product for the magnitude theorem, and review key 449's torque in joules (N·m); 12.7's "Figure 12.96 also shows" (Figure 12.98) and exercise 369's θ = −π/4 against the section's [0, 2π). Currency in 12.3 is escaped (&#36; in the prose, ＄ in the cards).

Colour flags for the orchestrator's colours:default: `vector` and `point` share figures throughout (arrows and their dots), `plane` and `surface` meet in 12.6 and 12.7, and `matrix` is new on a page.


## Pass 16 (2026-10-13): Chapter 13, Vector-Valued Functions, was built by one agent in one run: prep, the introduction and 13.1 to 13.4, then the chapter pass

Prep found the five converted modules (Volume 3, Chapter 3), copied their 64 images to media/ch13, and wrote exploration.md, config.md (carried over from Chapter 3) and COLOR.md, chapter.json (70 variables rows, every one anchored in the pass) and book-rows.json, merged after Chapter 12's concepts were in: 46 concepts, 87 edges (Hasse-reduced against the book's graph), 47 forms, every form anchored, and 14 new symbols: T_vec, N_vec, B_vec, L_vec, v0_vec, s0_vec, the primed r′, r″, u′, u″, v′, s′, T′ (\kvecrprime …) and κ (\kkappa). "plane curve" stays the glossary word of 11.1's parametric-curve, which 13.1 reinforces. The book's 30 classless display equations are Equations 13.1–13.30 with \tag; every "Equation 13.N" is linked, and references to theorem notes read as the theorem's title.

`curve` is the chapter's main type: a vector-valued function r(t), u(t) and a projectile's s(t) wear it with the curve they trace, the position arrow from the origin included, and the osculating circle wears it dashed. `vector` carries r′, r″, T, T′, N, B, v, a, v₀, F and i, j, k (the three frame vectors share it, told apart by name; components a_T T and a_N N dashed); `limit` L; `integral` arc length and the arc-length function s; `derivative` the speed and the curvature κ; `plane` the normal and osculating planes. a_T, a_N, the radius of curvature and the constant vectors C, D stay ink. The book's bold letters in prose and its non-bold slips (Example 13.2b and c, the curvature proof) are set through the macros; in the banked-turn project N is the road's force and stays plain bold.

Figures 13.1–13.22 and Tables 13.1–13.4 are numbered without gaps. Folded, where the book draws one scene again: 13.2 + 13.3 (the ellipse traced by r(t) and by r(2t), a choice, the reparameterization seen as the same curve in half the time), 13.6 + 13.8 (the osculating circle dragged along a stand-in curve, the book's sketch printing no function), 13.9 + 13.10 (Example 13.13's cubic and its circle, a still copy), 13.12 + 13.13 + 13.14 (a car on a stand-in road, steady or braking into the bends, its acceleration split into a_T T and a_N N), 13.18 + 13.19 (a planet timed by Kepler's equation sweeping six equal sectors, the force toward the Sun), 13.20 + 13.21 (the banked turn and its forces, a still copy the project's questions read). A point moving along a curve has a clock: 13.2 + 13.3, 13.4, 13.11, the road, 13.15–13.18, the arc-length and Frenet figures. Mathematical 3D through F.space3d, no buttons: the helix of 13.4 (circular or elliptical cross-section, its shadow on the xy-plane), a helical wire's length, the Frenet frame with its osculating and normal planes riding the helix of Example 13.11 or a twisted cubic, and the acceleration of Example 13.15 lying in its osculating plane. Sims added for ideas the book draws no figure for: the limit of r(t) as a shrinking gap, the difference quotient swinging onto r′(t), the integral of r′ as tip-to-tail steps, the helix's length, the arc-length function beside a spiral run by t or by s, and the acceleration plane. Photographs: the opener and the Bristol Motor Speedway (with its credit); Example 13.18's repeat of the opener is dropped. Four media links are named in `notes`. figlib was not changed: F.space3d and F.space (curve, frame, frenet, vector, axes, faces) carried every 3D scene.

The Chapter Review Exercises printed at the end of 13.4 landed with their sections: 202, 207, 209, 211 in 13.1; 203, 213, 215 in 13.2; 204, 217, 219, 221 in 13.3; 205, 223, 225, 227 in 13.4; 202 and 204 (unkeyed true or false) with AI-marked approaches, 203 and 205 as true-or-false choices; the twelve unkeyed computational ones left out. Unkeyed show and prove exercises 36, 68, 96, 164, 182 and 199 carry AI-marked approaches; every other unkeyed exercise is left out and named. Stems stand only over the exercises they describe, the book's stems recovered whole where an image or a second sentence splits them.

Corrections added as notes, the words kept as printed: the introduction's link to Example 13.15 for Halley's Comet (Example 13.18); 13.1's "unit circle" left when the k component of 4 cos t i + 4 sin t j + t k is dropped (radius 4), review keys 207 (t ≠ (2n + 1)π/2) and 211 (the curve lies on the lower nappe; the cone and plane as printed do not meet); 13.2's keys 73 (v · v = k²), 85 (0k), 95 (t − 1/t) and review 213 (72t⁵ + 24 twice, 960t³); 13.3's helix "h … (distance between two consecutive turns)" (the height of all N turns), the curvature proof citing the theorem it proves (the dot product rule), Example 13.12's B "using Equation 13.17" with its −15 − 15t² (Equation 13.19, +15 + 15t²), Checkpoint 13.12's N(2) (it is (4i − j)/√17, and its hint names Equation 13.13), Figure 13.9's caption (t = 1 for x = 1) and key 153 (30/(x^{2/5}(25 + 4x^{6/5})^{3/2})); 13.4's maximum height 1406.39 ft (1406.25 ft, 1506.25 above the water), the 45° range written along j, Checkpoint 13.15's a_N(−3) (4√13/13) and review key 227 (two components). Keys of every section were checked by differentiation, integration and numerics.

Colour flags for the orchestrator's colours:default: `point` and `vector` read close (both green) in several figures (the gap vector of 13.1, the car and its arrows, the falling ball), and `plane` and `integral` should stay apart from `curve` in the Frenet and Kepler figures.


## Pass 17 (2026-10-13): Chapter 14, Differentiation of Functions of Several Variables, was built by one agent in one run: prep, the introduction and 14.1 to 14.8, then the chapter pass

Prep found the nine converted modules (Volume 3, Chapter 4), copied their 83 images to media/ch14, and wrote exploration.md, config.md (carried over from Chapter 3) and COLOR.md, chapter.json (95 variables rows, every one anchored in the pass) and book-rows.json, merged after Chapter 13's concepts were in: 72 concepts, 128 edges (Hasse-reduced against the book's graph), 32 symbols and 54 forms, every form anchored at the span that introduces its concept. The drafting script now keys figure, table, equation and example numbers per section, since the chapter's modules reuse CNXML ids (Equation 14.13's id is also an unnumbered equation of 14.2).

The book numbers 43 equations, every `<equation>` not classed unnumbered, as openstax.org shows them (checked on 4.2 and 4.3); 14.21 sits inside Checkpoint 14.18. Every one carries `\tag{14.N}` and every "Equation 14.N" is a link.

Types: f(x, y) wears `function` and its graph `surface`; level curves, contour maps, traces and implicit curves `curve`; every partial derivative, in both of the book's notations, and D_u f `derivative` (new macros `\kfx` … `\kfyy`, `\kgx` … `\kgyy`, `\kdfdx` and the inline `\kdfdxin` …, `\kdzdx` …, `\kpxpu` …, `\kdzdt`, `\kDuf`); ∇f and ∇g `vector` (`\kgradf`, `\kgradg`); tangent planes and L(x, y) `plane`; the error term E `error`; δ disks and balls and open, closed, connected and bounded sets `set`; a region `region`; the discriminant, dz, λ, ε and δ ink. "Surface" stays 12.6's concept and "optimization problem" 4.7's; the multivariable critical point, extrema, Fermat's theorem, second derivative test, extreme value theorem and linear approximation are concepts of their own under the book's glossary words.

Figures: 46 figure rows (36 Sims, two of them extra, 5 faithful copies, 5 photographs and kept images with the opener) over the 61 numbered figures; folds 14.2 + 14.3, 14.4 + 14.5, 14.9 + 14.10, 14.18 + 14.19, 14.27 + 14.28, 14.29 + 14.32, 14.31 + 14.33, 14.37 + 14.38, 14.39 + 14.40, 14.41 + 14.42, 14.48 + 14.49, 14.50 + 14.51, 14.52 + 14.53, 14.54 + 14.55, 14.57 + 14.58, 14.59 + 14.60. Graphs are mathematical 3D through `F.space3d` (no figlib change), at most five live scenes a page, 14.46 and 14.47 painted; a surface read from its level curves (14.8) is drawn both ways, the slice above the contour map. Steep graphs are drawn with their heights at a stated fraction of the x and y scale, the z ticks reading true values. Moving figures: the heat solution of Checkpoint 14.18 decaying (14.23), the wire's temperature profile (14.24) and the extra Sim of Example 14.26a's point on the unit circle. Stand-ins where the book draws no formula: 14.15's surface, 14.17's set, 14.21's surface, 14.30's curve; 14.27, 14.39 and 14.41 use the nearest example's function. Two extra Sims: the chain rule along a path (14.5) and Example 14.45's sphere touching the cone-and-plane curve (14.8). Kept as images: 14.7 (Devil's Tower), 14.12 (two surfaces without functions), 14.25 (Lord Kelvin), 14.26 (Kelvin's curves, constants not stated); 14.56, a repeat of the opener, dropped.

The Chapter Review Exercises printed at the end of 14.8 landed with their sections: 394 in 14.1; 401, 403 in 14.2; 395, 407 in 14.3; 396, 409, 411, 419 in 14.4 (419 is a differentials problem under a Lagrange stem); 405 in 14.5; 413, 415 in 14.6; 397 in 14.7; 417 in 14.8; 394 and 396 (unkeyed true or false) with AI-marked answers; the twelve unkeyed computational ones and 399 (a sketch keyed "Answers may vary") left out. Unkeyed show, verify, explain and complete-the-statement exercises (62, 78, 106, 140, 150, 157, 158, 190, 384) and Checkpoint 14.18 carry AI-marked solutions; 87 and 89 are left out with the unkeyed 86 and 88 they rest on.

Corrections added as notes, the words kept as printed: 14.1's "z = (x, y)" for z = f(x, y), and Tables 14.1, 14.2 and Figure 14.11's caption exchanging the xz- and yz-planes; Checkpoint 14.9's key (16 for 26 under the root) and review 403's key (> 4 should be ≥ 4); Example 14.14's h for k, and the Kelvin project's "Equation 14.13" (the radial equation, 14.23); Example 14.28's garbled last line, exercise 215's 4t² (4t⁴) and 247's signs; 14.6's nonunit example (17/13 for 77/13); 14.7's link to Fermat's theorem where the second derivative test is applied, and two values the book prints empty (t = 4; the point (50, 0)); 14.8's "around 395, when x and y are both just less than 5" against the tangency at 540, (10, 4). Currency in 14.7 and 14.8 is the fullwidth ＄ inside math.

Colour flags for the orchestrator's colours:default: `function`, `surface`, `curve`, `plane` and `derivative` share most 3D figures (a graph, its traces, a plane, a slope), `set` and `plane` came out close violets on the hue-families palette, and `line` and `surface` close browns in 14.2's path figure.


## Pass 18 (2026-10-13): Chapter 15, Multiple Integration, was built by one agent in one run: prep, the introduction and 15.1 to 15.7, then the chapter pass

Prep found the eight converted modules (Volume 3, Chapter 5), copied their 166 images to media/ch15, and wrote exploration.md, config.md (carried over from Chapter 3) and COLOR.md, chapter.json (71 variables rows, every one anchored in the pass) and book-rows.json, merged after Chapter 14's concepts were in: 56 concepts, 103 edges (Hasse-reduced against the book's graph), 70 forms, every form anchored, and 12 new symbols: J, H, M_xy, M_xz, M_yz, z̄, I_x, I_y, I_z, I₀, x_c, y_c (\kJ …). Exercise numbers count the material-set exercises, as openstax.org does, so 15.4 opens at 181 and the review exercises run 416–442. The book's 16 numbered equations are Equations 15.1–15.16 with \tag; a module id the book reuses in 15.6 and 15.7 was numbered once, so Examples 15.63 and 15.64 keep their numbers.

`integral` is the chapter's main type: ∬ and ∭, the Riemann sums and their boxes, V, A, a slice's A(x), a mass, moments and moments of inertia. `region` carries R, D, E, G, S, Q, B and every solid; `surface` the graph of an integrand and every bounding surface; `function` f, g₁, g₂, h₁, h₂, u₁, u₂, the density ρ and T; `matrix` the Jacobian; `point` sample points and centers of mass; `angle` θ and φ. Coordinates, ρ in spherical coordinates and radii of gyration stay ink. Referents only where the text names two curves apart: Example 15.11's √x and x³, Example 15.14's D₁, D₂, D₃ and Example 15.34's circle and cardioid.

Figures 15.1–15.83 and Table 15.1 are numbered without gaps. Folded, where the book draws one scene again: 15.2 + 15.3 + 15.4 (boxes under a stand-in surface), 15.5 + 15.6 (Example 15.1's signed boxes), 15.13 + 15.14 + 15.15, 15.16 + 15.17, 15.19 + 15.20, 15.29 + 15.34 (polar boxes under Example 15.29's paraboloid), 15.42 + 15.43 + 15.44 (a solid over D of Type I or II), 15.64 + 15.65 + 15.66 + 15.67 (the lamina, its density cells, centroid and center of mass), 15.71 + 15.72 + 15.73 (a planar transformation and its grid), 15.74 + 15.75 (subrectangles and the Jacobian's parallelogram), 15.77 + 15.78, 15.80 + 15.81 + 15.82 + 15.83 (a box G carried to D by cylindrical, spherical or Example 15.73's map). Every figure is still. Mathematical 3D through F.space3d, no buttons: live where turning is the lesson (Riemann boxes, Fubini's two slices, the average-value lid, the extension g, polar boxes, subboxes, the solid over D, the pyramid's sections, the three projections, cylindrical and spherical points, boxes and surfaces, the spherical volume element, the tetrahedron's center of mass, the solid transformation), at most five a page; an example's own solid is a locked painted copy. Tall scenes draw z shortened with ticks in true units. Sims of OmniStax's own: the box of height f_ave beside Example 15.9's solid. Plane regions are read with a vertical and a horizontal strip at once, both orders of integration in one readout. Photographs kept: the opener, the rainfall maps, l'Hemisfèric and the Balloon Fiesta, with their credits. figlib was not changed.

The Chapter Review Exercises printed at the end of 15.7 landed with their sections: 416 in 15.1; 421, 423 in 15.2; 429, 431 in 15.3; 417, 425 in 15.4; 418, 427, 437, 439 in 15.5; 433, 435, 441 in 15.6; 419 in 15.7; 416 and 418 (unkeyed true or false) with AI-marked approaches; the twelve unkeyed computational ones left out. Unkeyed proofs and show exercises carry AI-marked approaches (39–48, 51, 52, 57, 58; 106, 107, 120, 121; 170–180 even and 179; 189, 190, 237–239; 247, 248, 273–275; 335, 341, 345, 353; 400, 401, 406, 407, 412), as do "Answers may vary" parts of Checkpoints 15.2 and 15.6 and of 87, 89 and 225; exercises 72 and 347 are left out because their claims do not hold as printed; every other unkeyed exercise is left out and named.

Corrections added as notes, the words kept as printed: 15.1's exercise 17 (upper limit printed l); 15.2's Example 15.13 (region without its name), Example 15.14 (D₃'s braces, the integrand 2 + 5y), Example 15.18 (limit x = 4), Example 15.22 (e^{−y/60}), Example 15.23 ((x + 15) for (a + 15)), the hints of Checkpoints 15.10 (2 + √y) and 15.16 (1/6000) and key 73 (the region is of Type I); 15.3's Example 15.30 (θ from 0 to π, the antiderivative's 5/2 sin 2θ); 15.4's theorem (the xz-plane for the xy-plane), the next paragraph (the xy-plane for the xz-plane) and the six orders (∫_c^e); 15.5's Examples 15.46 (√(4 − r²)), 15.48 (z² = x² + y² = 4), 15.49 (dρ dθ dθ), 15.52 (sin θ for sin φ), 15.53 (the coordinates), Checkpoints 15.29 and 15.30 (their regions) and exercises 273 (dr), 274 (21π belongs to radii 1 and 2) and 275 (the factor π/2); 15.6's "Section 6.6 of Volume 1" (reworded "Section 6.6", linked, the printed words in the note), M_y's middle sum (y* for x*), the centroid's missing equals sign and Example 15.61's reference (Example 15.60); 15.7's Example 15.68 (the transposed matrix), Example 15.73 (z = 4, the table's repeated x = y/2, G and D swapped) and exercise 400 (y²/3 for y²/5).

Colour flags for the orchestrator's colours:default: `integral` (the boxes) and `function` (the density shading, f) read close in light and dark in 15.1 and 15.6, `region` and `surface` share most 3D figures, and `matrix` and `vector` are new on 15.7's pages.


## Pass 19 (2026-10-13): Chapter 17, Second-Order Differential Equations, the book's last chapter, was built by one agent in one run: prep, the introduction and 17.1 to 17.4, then the chapter pass

Prep found the five converted modules (Volume 3, Chapter 7), copied their 21 images to media/ch17, and wrote exploration.md, config.md (carried over from Chapter 3) and COLOR.md, chapter.json (39 variables rows, every one anchored in the pass) and book-rows.json, merged after Chapter 16's concepts were in: 35 concepts, 69 prerequisite edges (Hasse-reduced), 14 symbols (y₁, y₂, y_p and their derivatives, r, u′, the displacement x, x″, x_p), 31 forms, each anchored. 8.1's `particular-solution` and 10.4's `power-series-solution-of-a-differential-equation` are reinforced, not introduced again; `eulers-formula` is new in 17.1. No back-matter page is built: the appendices are sheets and the answer key lives in the modules.

The book numbers 10 equations, every `<equation>` not classed unnumbered, each with `\tag{17.N}`; Figures 17.1–17.13 and Tables 17.1, 17.2 are numbered without gaps; checkpoints 17.1–17.23 and examples 17.1–17.26 run through the chapter.

Types: the solution y and its pieces y₁, y₂, y_p, the right-hand side r, u and v, a displacement x(t), a charge q, an external force f(t) and a voltage E(t) wear `function`; their derivatives, a velocity, an acceleration and a current `derivative`; the Bessel series `series`. Constants, roots, the physical parameters and the frequency stay ink. The macros are applied in the exercise cards too, by an applier that colours y after a coefficient (ay″, 2xy′) and never inside a command or `\text{}`.

Figures: 17.1, 17.2 and 17.4 print no numbered figure, so their ideas got Sims: the roots of the characteristic equation in the plane of λ beside the solution they give (the repeated root a dashed circle), Example 17.8's initial-value problem with its two conditions as sliders and Example 17.9's spring moving, both replacing the examples' unnumbered graphs, Example 17.10's boundary-value problems as a family pinned at one point, the solutions of a nonhomogeneous equation closing on y_p, the undetermined-coefficients pitfall as a guess whose left side stays flat at zero, and the Bessel series closing on its function (replacing Example 17.26's graph). In 17.3, folds 17.2 + 17.3 + 17.4 (the mass on its spring beside A sin(ωt + ϕ)), 17.6 + 17.7 + 17.8 (the three damping regimes on one damping slider, the critical b = √6 a dashed circle), 17.10 + 17.11 (the motorcycle landing, at a quarter of real speed), Figure 17.13 (the RLC circuit with its charges flowing and q(t) closing on 10 C, critical R = √200 a dashed circle) and an extra Sim of forced vibrations; the dashpot, the shock absorber and the lander photographs kept. Every scene with a clock moves; every graph without one is still.

The Chapter Review Exercises printed at the end of 17.4 landed with their sections: 117, 119, 120, 121, 123, 125, 133, 135 in 17.1; 118, 127, 129, 131 in 17.2; 137, 139, 141 in 17.3; 118 and 120 (unkeyed true or false) and 139 (a show) with AI-marked approaches; the ten unkeyed computational ones left out and named in 17.4's notes.

Corrections added as notes, the words kept as printed: 17.1's citations of Equation 17.1 for ay″ + by′ + cy = 0 (one note) and of Example 17.1 for it, "linearly independent" where the argument assumes dependence, Example 17.6's "functions of x" while three parts answer in t, exercise 49's key (3 cos 8x − 3 sin 8x) and review 119's "+10" for "+10y"; 17.3's Example 17.18(b) quadrant (ϕ ≈ 2.159, the printed form is −x(t)), the RLC circuit cited as Figure 17.10, exercise 95's key (61.25 cm gives a critically damped (5 + 10t)e^{−4t}; the printed answer is a 6.25-cm stretch), exercise 99's key (1 in. is 1/12 ft and the forced term is sin 4t), review 137's key (cos(√(g/L) t)) and review 139's printed beat form; 17.4's "c₁ and c₂" for c₀ and c₁ and "(step 3)" for step 5. Keys were checked with algebra software where the arithmetic was long.

Colour flags for the orchestrator's colours:default: `function` and `derivative` share every graph of the chapter (a solution and its slope, a displacement and its velocity, a charge and its current) and read apart in light and dark; `series` and `function` share the Bessel figure.


## Pass 20 (2026-10-13): Chapter 16, Vector Calculus, was built by one agent in one run: prep, the introduction and 16.1 to 16.8, then the chapter pass

Prep found the nine converted modules (Volume 3, Chapter 6), copied their 146 images to media/ch16, and wrote exploration.md, config.md (carried over from Chapter 3) and COLOR.md, chapter.json (115 variables rows after the pass, every one anchored) and book-rows.json, merged after Chapter 15's concepts were in: 64 concepts, 130 prerequisite edges (Hasse-reduced against the book's graph), 62 forms, every form anchored, and 7 new symbols: G, E, F_r, t_u, t_v, div F and curl F (\kvecG, \kvecE, \kvecFr, \kvectu, \kvectv, \kdivF, \kcurlF). "Gradient field" and "conservative field" are one concept, as the book uses the two names for one thing. Exercise numbers count 16.6's four material-set exercises, as openstax.org does (16.7 opens at 326, checked; review 427–451); modules.json still gives 16.6–16.8 ranges four short. Module ids repeat across modules (16.5's Example 16.55 shares one with 16.1), so numbers are counted per module. The book numbers 24 equations, each with \tag{16.N}.

`vector-field` is the chapter's main type: F, G, the velocity field v, E, B, F_r, a gradient field ∇f, curl F and heat flow. `integral` carries every line, surface and flux integral, circulation, work and mass; `curve` C, C₁, C₂, ∂D and the grid curves; `region` D, E and the parameter domain; `surface` S; `function` f, g, P, Q, R, div F, potential and stream functions; `vector` T, N, n, t_u, t_v, r′. The bold vectors in TeX wear their macros; dr and dS stay ink. Referents only for Example 16.30's two paths.

Figures 16.1–16.90 are numbered without gaps. The theorem figures compute both sides live: the Fundamental Theorem for Line Integrals on a path the reader bends (and a non-conservative field whose value changes), Green's theorem in both forms on rectangles, ellipses, triangles and annuli dragged and resized in the book's fields (the whirlpool field shows ≠ round the origin), Stokes' theorem on a family of surfaces sharing one boundary circle, and the divergence theorem on balls, cylinders and cubes (F_r shows 4π against 0 round the origin). Folded where the book draws one scene again: 16.9 + 16.10, 16.12 + 16.13 + 16.14 (the sheet of a scalar line integral, in 3D), 16.17 + 16.18, 16.23 + 16.24 (flux and circulation on one circle), 16.28 + 16.29, 16.33 + 16.35–16.37, 16.38–16.41, 16.50–16.53 (an elastic circle carried by the flow), 16.54 + 16.55 (a paddlewheel), 16.57–16.62 (parametric surfaces beside their parameter domain), 16.65–16.67, 16.74–16.76 (a normal carried round a sphere, a cylinder and a Möbius strip), 16.77 + 16.78, 16.79 + 16.83, 16.85 + 16.86. Moving: the work along Example 16.22's path, the planimeter (an extra Sim seeded by the dropped media link), the elastic circle, the paddlewheel and the curl paddlewheel; every other figure is still. Mathematical 3D through F.space3d with bounded pitch and no buttons, at most four scenes a page; an example's own solid is a locked painted copy. Sketches with no function (curve and region types, proof diagrams, the torus and pyramid, the planimeter) are the book's images; the photographs of the opener, the hurricane and the MRI are kept with their credits. figlib was not changed.

The Chapter Review Exercises printed at the end of 16.8 landed with their sections: 427, 431 in 16.1; 437, 449 in 16.2; 428, 433, 435 in 16.3; 443 in 16.4; 429, 430, 441 in 16.5; 439 in 16.6; 445 in 16.7; 447, 451 in 16.8; 428 and 430 (unkeyed true or false) with AI-marked approaches; the ten unkeyed computational ones left out and named. Unkeyed true-or-false, show and proof exercises carry AI-marked approaches (2, 4, 30; 40, 42; 100, 102, 145; 166; 206, 208, 210, 264; 270, 272); every other unkeyed exercise is left out and named.

Corrections added as notes, the words kept as printed: 16.1's Example 16.3 and its Analysis citing Figure 16.6 for 16.5, "Figure 16.11 shows the level curves" (16.10), Checkpoint 16.11's field, exercise 31's key (e^{−t}) and the first Key Concept; 16.2's index printed l and the circulation notation printed without its circle; 16.3's Example 16.29 coefficient, the proof's C for C′ and Example 16.34's "ℝ² and ℝ³"; 16.4's f_x for f_y, "a potential function for f", ∂/∂x for ∂/∂y and Example 16.41's sign; 16.5's Example 16.57 curl derivatives; 16.6's Example 16.64 θ bound, Figure 16.69's caption, "scalar line integral", Example 16.67's integrand, t_θ and bracket, Example 16.68's t_y and its Equation 16.5 link, ρN, and the "[link]" of Example 16.71; 16.7's "flux form", Example 16.73's limit, Equation 16.19 citations and "hemisphere" (also Figure 16.83's original caption), Example 16.74's tangent vector, Example 16.75's link and Checkpoint 16.64's sign; 16.8's Example 16.77 (t_v, integrand, total), the powers of ten in Example 16.81 and Checkpoint 16.68, and the link to Example 16.6 for the gravitational field.

Colour flags for the orchestrator's colours:default: `vector-field` and `vector` share almost every figure of the chapter (a field beside N, T or t_u, t_v), `integral` and `function` share the theorem readouts and the div F figures, and `surface` and `region` share the 3D solids.


## Pass 21 (2026-10-16): Chapter 7, Techniques of Integration, had its derivations built by one agent in one run (rule 29), from the scan's 42 candidates

Fourteen derivations were built. Replacing printed blocks: 7.1's integration-by-parts formula from the product rule, ending on (7.1) (form `eq-integration-by-parts-fg` re-anchored to it); 7.3's three radicals under x = a sin θ, a tan θ and a sec θ, each from its Pythagorean identity of 1.3, and Example 7.25's sinh⁻¹x as a logarithm, first worked here though 1.5 states it; 7.6's trapezoidal rule for four trapezoids and Simpson's rule (the first pair worked in twelve moves with its skipped lines inserted, the next pair, the two combined); 7.7's Example 7.53, where the parts antiderivative the book only names and the L'Hôpital limit it hides join in the evaluation. After the prose that states or argues them: 7.2's power-reducing identities, its product-to-sum identities (7.3)–(7.5) from the four angle formulas of 1.3, and the reduction formulas (7.6) and (7.7), one derivation with a node each; 7.6's Sₙ₂ = (2/3)Mₙ + (1/3)Tₙ; 7.7's arbitrary split point of an integral over (−∞, +∞) and the comparison theorem's argument, a proof the book prints in prose.

Judged out: the worked examples that apply the section's own method or substitute into its formula (7.3, 7.5, 7.6, 7.7, 7.17, 7.18, 7.21, 7.26, 7.27, 7.30–7.35, 7.44, 7.48, 7.49, 7.51; 7.18 is the n = 3 case of the built (7.6)); 7.1's definite-integral form (7.2) and 7.6's Tₙ = ½(Lₙ + Rₙ), under the four-move floor; 7.5's check of two antiderivatives; the error bounds (7.12), (7.13) and (7.15), whose proofs rest on mathematics the book never states; the Laplace-transform student project, which is set for the reader.

Simpson's combined line follows the correction `c-simpson-combined` (∫ from x₀ to x₄ and ≈, where the book prints ∫ from x₂ to x₄ and =); the book's line having gone into the derivation, the node's note alone says what the book printed, and the footnote row and its marker were removed. Every line was checked by hand, the product-to-sum identities, both reduction formulas and Sₙ₂ also with algebra software or numerically.


## Pass 22 (2026-10-16): Chapter 3, Derivatives, had its derivations built by one agent in one run (rule 29), from the scan's 37 candidates

Twenty-four derivations were built. Replacing printed blocks and proofs: 3.2's differentiability implies continuity; 3.3's constant rule, power rule (the binomial expansion worked to the difference quotient, then the limit), the product rule, the extended power rule and Example 3.29's three-factor product rule; 3.5's sine with the hidden cosine beside it on (3.11) and (3.12), and Example 3.42's tangent on (3.13); 3.6's special case sin(x³) (two factor limits joined), Example 3.51's cosine of a function, the three-function chain rule, the informal proof of the chain rule on (3.17) and its Leibniz form; 3.7's (3.19), the rational-exponent power rule on (3.20) and (3.21) and Example 3.63's inverse sine on (3.22); 3.9's (3.28) and (3.29), the natural logarithm both ways on (3.30) with (3.31), the general logarithm and exponential on (3.32)–(3.35) under their one Proof heading, and Example 3.83's power rule for real exponents. Hidden, after the paragraph or theorem that names them: 3.3's difference and constant multiple rules (nodes of the sum rule's derivation, one Proof heading) and the omitted quotient rule; 3.5's cotangent, secant and cosecant on (3.14)–(3.16); 3.7's other five inverse trigonometric derivatives on (3.23)–(3.27), with sin(cos⁻¹x), x tan(sec⁻¹x) and x cot(csc⁻¹x) worked from the Pythagorean identities of 1.3 and the ranges (1.12)–(1.14).

Judged out: 3.2's three nondifferentiable examples (two moves each); Example 3.18, the n = 3 case of the power-rule proof; 3.4's amount of change formula (3.10) and 3.6's power rule for composition (3.18), prose-first and under the four-move floor; 3.6's six-formula trigonometric chain-rule theorem, stated as applications and never printed; E′(x) = eˣ, one substitution left in the prose. The scan folded 3.6's sin(x³) block into the chain rule's proof; it was built on its own, being a printed block with its own result.

The book's three-function chain rule prints k′(x) = h′(f(g(x))f′(g(x))g′(x)) with a parenthesis misplaced and d/dx(h(f(g(x))) with one missing; 3.9's proof says Equation 3.32 follows from the chain rule where (3.33) is meant. Both lines went into their derivations, so each node's note alone says what the book printed. Re-anchored: 3.6's k, k′, u, dy/du and du/dx to their derivations, 3.9's B′ and the form `eq-derivative-b-to-the-x` to drv-derivative-of-exponential-function, E′ to the exponential theorem, and 3.9's coverage row for the exponential derivative to the derivation's host. Every line was checked by hand, the quotient-rule regrouping, the extended power rule, the inverse trigonometric results and the logarithm rules also with sympy.


## Pass 23 (2026-10-16): Chapter 12, Vectors in Space, had its derivations built by one agent in one run (rule 29), from the scan's 52 candidates

Twenty-three derivations were built. Replacing printed proofs, the bodies replaced under their Proof headings and the remarks between them kept after the derivation: 12.1's commutative and distributive properties of vector operations (two headings, one each); 12.3's commutative, associative and magnitude properties of the dot product (one heading, a node each), (12.4) from the law of cosines of Appendix C joined with the expansion of ‖v − u‖², and both directions of the orthogonality test; 12.4's anticommutative, zero-vector and triple-product properties of the cross product (one heading, 0 × u resting on the anticommutative node), the magnitude of the cross product through 1 − cos²θ = sin²θ, the area of a parallelogram, the triple scalar product as a determinant and the volume of a parallelepiped through the projection length of 12.3. Replacing printed blocks: 12.1's magnitude of a vector and its linear combination of i and j; 12.3's vector projection on (12.6), the signed multiple of the unit vector carrying the obtuse case; 12.4's opening vector orthogonal to u and v (the elimination, the choice of w₁ and w₂, w₃ substituted back) and the check that u · (u × v) = 0; 12.5's vector, parametric and symmetric equations of a line on (12.11) and (12.12) as one family, the line segment on (12.15) and (12.16), the distance from a point to a line, the scalar and general equations of a plane and the distance from a point to the plane ax + by + cz + k = 0. Hidden, after the prose that tells them: 12.4's triple scalar product under reordering (the row-switch rule, one sign change and two cyclic shifts, joined into the book's chain of identities) and 12.7's conversion from spherical coordinates, with the rectangular form of φ added as its last line. One example qualified: Example 12.20's forward pass, two right triangles and an independent scaling joined in v = kw.

Judged out: the worked examples that substitute into the section's own formulas (12.9, 12.10, 12.15, 12.29, 12.42, 12.43, 12.48(a), 12.52, 12.58, 12.59(b), 12.65(b) and (d), the resolution after 12.27, the wagon's work); the moves under the four-move floor (the triangle inequality, the unit vector, the sphere's equation, (12.5), the cross products of i, j and k, parallel vectors as multiples, (12.19), the angle between planes); the distance between two points in space, left to the reader, and the student project on skew lines; the cylindrical conversion, a restatement of 11.3's polar one.

Corrections: 12.3's |cos| θ in the projection's length (footnote c-abs-cos, the work using |cos θ|); 12.5's restatement of (12.19) without its absolute value (footnote c-abs-12-19); 12.4's middle component −(u₂(0) − u₃(0)) of u × 0, which went into the derivation, so the node's note alone says what the book printed. Where a removed display ended a sentence with a colon, the colon became a full stop (12.5's term paragraphs), and 12.4's "is orthogonal to both u and v" after the opening derivation reads "That is, vector w is orthogonal". Re-anchored: the forms `eq-vector-line`, `eq-segment-vector` and `eq-segment-parametric` to their derivations, and the citations of Equations 12.11, 12.12 and 12.16 (Checkpoint 12.44's hint among them) link to the derivation hosts. Every line was checked by hand, the cross-product identities, the magnitude identity, the determinant reorderings, the line-segment and plane algebra and Example 12.20's numbers also with sympy.


## Pass 24 (2026-10-16): Chapter 1, Functions and Graphs, had its derivations built by one agent in one run (rule 29), from the scan's 15 candidates

Six derivations were built. Replacing printed blocks and proofs: 1.3's Example 1.26, 1 + tan²θ = sec²θ from sin²θ + cos²θ = 1; 1.5's compound-interest block, annual and half-yearly compounding as two branches joined in A(t) = P(1 + r/n)^{nt} (the m = n/r line stays printed, since it opens Table 1.12 and the limit that defines e); the change-of-base formulas, a node each under their one Proof heading; cosh²t − sinh²t = 1, its two squarings inserted; and sinh⁻¹x = ln(x + √(x² + 1)). Hidden, after the sinh⁻¹ derivation: the other five inverse hyperbolic functions ("The others follow similarly"), one node each, the root of cosh⁻¹ and sech⁻¹ chosen by the restricted domain y ≥ 0 and that of csch⁻¹ by e^y > 0.

Judged out: 1.2's slope and point-slope passage, prose-first single displays under the four-move floor; 1.5's 2% population, one instance of the compound-interest pattern; the hyperbolic identities 1–4 ("follow easily"), two or three moves each; the hanging chain, which rests on physics and a differential equation the book does not give; 1.4's Student Project on the maximum of A sin x + B cos x, which only poses it.

Every line was checked by hand, the inverse hyperbolic formulas and the quadratic roots also with sympy and numerically. No book line was found wrong.


## Pass 25 (2026-10-16): Chapter 2, Limits, had its derivations built by one agent in one run (rule 29), from the scan's 11 candidates

Six derivations were built. Replacing printed blocks and proofs: 2.3's limits of polynomial and rational functions (the sum and constant multiple laws given their own moves, then the quotient law); Example 2.25's (2.19); 2.4's continuity of cosine and, as a second node, of sine ("analogous"); 2.5's proof of the sum law, its δ choices as facts and the definition closing it. After the paragraph that sets them up: 2.3's (2.16) and (2.17), the one-sided limits joined by 2.2's theorem and (2.17) worked by the root, difference and power laws; and (2.18), whose left-hand limit the book waves through ("a manipulation similar to …") is worked from the right-hand inequality at −θ, with sin(−θ) = −sin θ as the book uses it for (2.16).

Judged out: 2.4's proof of the continuity of polynomials and rational functions, one sentence citing 2.3's theorem with no equation to work; the intermediate value theorem, whose proof needs the completeness of the real numbers; 2.3's Student Project on the area of a circle, which poses the steps for the reader; 2.5's Examples 2.39–2.44, which apply the section's ε-δ method to one limit each.

Every line was checked by hand, the trigonometric limits also with sympy. No book line was found wrong.


## Pass 26 (2026-10-16): Chapter 5, Integration, had its derivations built by one agent in one run (rule 29), from the scan's 17 candidates

Eleven derivations were built. Replacing printed proofs, the opening sentences and the □ kept: 5.1's constant multiple and sum properties of sigma notation (one Proof heading, a node each); 5.3's mean value theorem for integrals (the extreme-value sentence stays), the Fundamental Theorem of Calculus, Part 1 (the difference quotient worked to the average over [x, x + h] and the mean value theorem for integrals beside it, joined in the limit) and Part 2 (the telescoping sum and the Mean Value Theorem on each subinterval, joined, then the limit as a Riemann sum); 5.5's substitution with indefinite integrals; 5.7's inverse sine integral. Replacing printed blocks: 5.2's average value of a function, the book's "This is a Riemann sum" kept as the reason of the limit move; 5.5's justification of substitution with definite integrals. Hidden, after the rule that states them: 5.4's integrals of even and odd functions, which the book shows only as equal areas (the split, the substitution u = −x of 5.5, the reversed limits, then a node each for even and odd); 5.7's inverse tangent and inverse secant integrals, which the section's opening says follow from the derivatives of 3.7, the secant worked for u > a and u < −a and joined, since the book's form carries |u|.

Judged out: the sums of powers of integers (5.1) and the logarithmic integration formulas (5.6), stated with no claim that they follow from anything (∫ln x dx is worked by parts in 7.1); continuous functions are integrable, whose proof needs mathematics the book never states; Example 5.7, a worked example of the definition; the comparison theorem, three moves a part; the net change theorem, one move from the Fundamental Theorem.

Corrections, each in its node's note, the book's line having gone into the derivation: Part 1's integral from x to x + h printed with f(x)dx, x both a limit and the variable of integration (written with t); Part 2's i = 0, 1, …, n for the subintervals (i = 1, …, n); the inverse sine proof's −a ≤ x ≤ a, where the integrand is undefined at ±a. No footnote rows were touched. Every line was checked by hand, the inverse tangent and secant results also with sympy (the secant at both signs of u).


## Pass 27 (2026-10-16): Chapter 8, Introduction to Differential Equations, had its derivations built by one agent in one run (rule 29), from the scan's 18 candidates

Seven derivations were built. Replacing printed blocks: 8.4's solution of the logistic equation, (8.9), (8.10), the constant $C_{1}$ from $P(0)=P_{0}$ and (8.11) as four nodes, the theorem box keeping its (8.11); the logistic curve's point of inflection, with the quotient-rule lines for $P'$ and $P''$ the book skips; 8.5's integrating factor, (8.19) to $\mu=C_{2}e^{\int p\,dx},$ and the general solution, (8.21) to (8.23), two derivations with the bold "integrating factor" sentence between them; the circuit equations (8.24)–(8.26), a thin block of one family. Hidden, kept as prose with the derivation after it: 8.1's $v'(t)=-g$ from Newton's second law and the weight. One example: 8.19's current in an RL circuit, which joins the integral the book skips (by parts twice) and the amplitude-phase rewrite to the five-step strategy.

Judged out: the worked examples that integrate and substitute into the section's own method (8.6, 8.7, 8.11–8.13, 8.14, 8.16–8.18); the exact solution of $y'=3x+2y-4$ beside Figure 8.8, a stated fact whose working is 8.5's method; the constant solutions of $y'=(x-3)(y^{2}-4),$ Euler's method and the air-resistance equation (8.13), under the four-move floor.

Corrections, each now the node's note, the book's line having gone into the derivation: 8.4's $C_{1}=e^{c}$ with a lower-case $c;$ 8.5's "Equation 8.23" for the equation rewritten as (8.26) (footnote `rc-equation` removed); Example 8.19's "initial condition $v(0)=2$" for $i(0)=0$ (footnote `rl-initial` removed). New symbol `P_dprime`. Re-anchored: forms `eq-velocity-under-gravity` and `eq-logistic-inflection` to their derivations. Every line was checked by hand, the logistic derivatives, the RL integral and the phase rewrite also with sympy.


## Pass 28 (2026-10-16): Chapter 9, Sequences and Series, had its derivations built by one agent in one run (rule 29), from the scan's 39 candidates

Nineteen derivations were built. Replacing printed proofs, the opening sentences and the □ kept: 9.1's sum law for limits of sequences, continuity carried through a convergent sequence and the Squeeze Theorem for sequences; 9.4's comparison test (part i, as the book proves it); 9.5's convergence of the alternating harmonic series (its "it can be shown" last step, odd and even partial sums sharing a limit, inserted) and absolute convergence implying convergence; 9.6's ratio test, parts i–iii. Replacing printed blocks: 9.2's divergence of the harmonic series ($S_{4},$ $S_{8}$ and the skipped general $S_{2^{j}}\gt 1+j/2$), the geometric series' sum with its four cases branching to (9.7), and the telescoping series' sum; 9.3's divergence test and its contrapositive (9.8), the harmonic series and $\sum 1/n^{2}$ against their integrals, the integral test, the $p$-series (9.9) and the remainder estimate (9.10); 9.6's root-test limit of a $p$-series, with the L'Hôpital step inserted. Hidden, built after the theorem they prove: convergent sequences are bounded ($\varepsilon=1$ and the triangle inequality of 2.5) and the limit comparison test ($\varepsilon=L/2$ for $L\ne0,$ then the book's cases $0$ and $\infty$).

Judged out: the Monotone Convergence Theorem, whose proof needs the completeness of the real numbers, never stated; the alternating series test and the root test's parts i and ii, whose "similar" proofs are the printed ones with $b_{n}$ for $1/n$ or $R^{n}$ for the ratio chain, and would repeat those graphs; $S=\ln 2$ and the Riemann rearrangement theorem, which rest on Chapter 10 or on a construction with no chain of equations; the worked examples (9.3d, 9.6, 9.11, 9.18c, 9.22, 9.23); the explicit formulas of 9.1, the limits of $r^{n},$ the algebraic properties of series, the alternating remainder and the divergent rearrangement, under the four-move floor; the three Student Projects. The worked $\sum 1/(n(n+1))$ before the telescoping definition and the $S_{1}$–$S_{3}$ lines of the general block stay as printed.

Corrections: 9.6's garbled part ii ($|a_{n-}|\gt|a_{n}|$ and "$|a_{n}|\ne0$") went into the derivation, so the node's note alone says what the book printed and footnote `ratio-proof` is removed; 9.4's "since the terms $a_{n}\ge0$" holds only from $n=N,$ a note on the node. Re-anchored: forms `eq-divergence-test` and `eq-p-series-test` to their derivations. Every line was checked by hand, the geometric and $p$-series algebra also with sympy.


## Pass 29 (2026-10-16): Chapter 4, Applications of Derivatives, had its derivations built by one agent in one run (rule 29), from the scan's 32 candidates

Seventeen derivations were built. Replacing printed proofs, the set-up sentences kept above them and the cases the book leaves as similar kept below in its words: 4.3's Fermat's theorem, (4.4) and (4.5) from the one-sided limits of 2.2, each side's inequality worked (the x < c side, which the book only says "can be shown", inserted) and joined in f′(c) = 0; 4.4's Rolle's theorem (cases 1 and 2), the mean value theorem (the secant line from (1.3) and (1.4), g(a) = 0 and g(b) = 0 worked, g′ and Rolle's theorem joined at c), Corollaries 1, 2 and 3; 4.8's L'Hôpital's rule for 0/0, its column of reasons become the moves' uses. Replacing printed blocks: 4.2's Δy ≈ dy; 4.6's lim f(x) = lim aₙxⁿ for a polynomial; 4.8's limit of f(x)^g(x) through the logarithm; 4.9's Newton iteration on (4.8); Example 4.50b's derivative of ln|x|, the general formula behind Table 4.13; 4.10's sum, difference and constant multiple properties of indefinite integrals, a node each. After the prose that argues or states them: 4.5's test for concavity and second derivative test, both printed as arguments before their theorems; 4.6's end behavior of a rational function (n = m and n < m worked by dividing by xᵐ, and r(x)/q(x) → 0 resting on the n < m node); 4.8's eˣ outgrowing xᵖ for every p > 0 ("it is not difficult to show"), L'Hôpital's rule n times for an integer n, then the squeeze theorem.

Judged out: the related-rates and optimization examples (4.3, 4.4, 4.34, 4.36), which apply their section's strategy; the examples that substitute into the section's formula (4.7, 4.47) and the formal-limit instances (4.22, 4.23); the extreme value theorem, whose proof the book leaves to real analysis, and L'Hôpital's rule for ∞/∞, which needs Cauchy's mean value theorem, never stated; the arguments without a chain of equations or under the four-move floor (the location of absolute extrema, the limits of cxⁿ read off a stretched graph, the general antiderivative, the power rule for integrals, xᵖ outgrowing ln x); the first derivative test, whose prose argues only where extrema can sit and summarizes the test from Figure 4.31; the linear-approximation heuristic before L'Hôpital's rule, an approximate idea whose last line the proof derives.

Corrections: Corollary 3 supposes f(a) > f(b) where a function that is not increasing has f(a) ≥ f(b), and the constant-multiple block of 4.10 prints d/dx(kf(x)) = k f′(x) where k F(x) is differentiated; both lines went into their derivations, so each node's note alone says what the book printed, and 4.10's footnote c-constant-multiple and its marker were removed. The second derivative test's "f″(x) < 0 for all x ∈ I" holds only over an open interval about the point; the sentence stays printed, marked by the new footnote c-second-test-interval, and both nodes carry the note. L'Hôpital's proof takes the limit of a quotient without saying it needs g′(a) ≠ 0, which the paragraph before the theorem assumes; the fact is carded from 4.8 and the node's note says so. Where a removed display ended a kept sentence, the sentence was trimmed to end on its own ("We proceed as follows.", "approximated by the linear approximation L(x)."). Every line was checked by hand, the mean value theorem's g(a), g(b) and g′, Newton's solve for x₁, the derivative of ln(−x) and the limits also with sympy.


## Pass 30 (2026-10-16): Chapter 10, Power Series, had its derivations built by one agent in one run (rule 29), from the scan's 30 candidates and Chapter 9's "S = ln 2"

Fourteen derivations were built. Proofs, their lines replaced: 10.1's convergence of a power series (the lemma by the divergence and comparison tests, then case iii from the least upper bound, with the skipped reasons R > 0 and divergence beyond R inserted); 10.2's sum of two power series and the uniqueness of power series (the nth-derivative line inserted); 10.3's Taylor's theorem with remainder, in six nodes (g(a) = 0, g(x) = 0, the product-rule term, the telescoping g′, Rolle and the bound). Printed blocks replaced: 10.2's Example 10.10, the series for ln(1 + x) and tan⁻¹x, each with its antiderivative and its constant C = 0 as a node; 10.3's Taylor coefficients c₀ to c₃ and cₙ = f⁽ⁿ⁾(a)/n!, the criterion Rₙ → 0, and Example 10.16's proofs that the Maclaurin series of eˣ and sin x converge to them; 10.4's binomial coefficients (10.8) (form eq-binomial-series-coefficients re-anchored) and the ratio test for the binomial series' interval, and Example 10.24's pendulum, where the bound on the terms the first-order estimate leaves out gets the skipped "each coefficient is less than 1" and the geometric sum. Chapter 9's "it can also be shown that S = ln 2" is built in 10.3, after Example 10.16, from facts all stated in Chapter 10: the nth derivative of ln(1 + x), Taylor's remainder at x = 1 bounded by 1/(n + 1), the squeeze theorem and the convergence criterion.

Judged out: worked examples that apply the section's own method or substitute into its formula (10.1, 10.3 b, 10.5 b, 10.7 c, 10.9 a, 10.12 b, 10.13 c, 10.14, 10.15, 10.17 a, 10.18 b, 10.19, 10.20, 10.21, 10.22, 10.23); the geometric series as 1/(1 − x) and (10.11) from (10.10), one substitution each; the Cauchy product's "it appears that", a heuristic before a theorem whose proof the book omits; 10.3's n = 0 case of the remainder, under the bar; the student project on the irrationality of e, set for the reader.

Corrections: Taylor's g(a) line prints "+ ⋯ +" where every term of pₙ is subtracted, and the proof calls g a polynomial in t; both now live inside the derivation and its notes say what the book printed. Example 10.24's footnote c-ex1024-dot ("1.3" for 1·3) became the node's note, with the book's bound of the whole integral by the integral of its terms after the first; the row and its marker were removed. Example 10.10 a's "showing this fact requires more advanced techniques" stays as printed with a new note, c-ln2-remainder, pointing to the ln 2 derivation. The link to Equation 10.8 in 10.4 now points to the derivation that carries the number. Every line was checked by hand; the remainder bounds and the binomial ratio also numerically.


## Pass 31 (2026-10-16): Chapter 11, Parametric Equations and Polar Coordinates, had its derivations built by one agent in one run (rule 29), from the scan's 34 candidates

Fourteen derivations were built. 11.1's cycloid, the center's path and the ant's circle added (its prose kept, the result display replaced). 11.2's proof of (11.1) by the Chain Rule; (11.2); the area under a parametric curve, the book's two passes over the Riemann sum folded into one node ending on (11.3); the arc length (11.4) to (11.5) through the Mean Value Theorem; the side derivation back to Chapter 6's arc length formula. 11.3's conversion formulas (11.7) and (11.8), with the r² = x² + y² and tan θ = y/x the book states without reason derived from x and y. 11.4's polar area (11.9) from the sector's area and polar arc length (11.10) from (11.5). 11.5's parabola (the printed block, then its "same derivation" for the vertex (h, k) inserted and solved for (11.11)), ellipse, hyperbola, e = c/a for both (the hyperbola's "similar calculation" inserted), and the polar equation of a conic, which the book says "it is possible to prove", built after its theorem from the definitions of eccentricity and focal parameter. Forms eq-parametric-second-derivative, eq-parametric-arc-length-sum, eq-polar-area-sum, eq-parabola-at-origin and eq-eccentricity and two coverage rows were re-anchored to the hosts; two links to Equations 11.2 and 11.4 now point to them.

Judged out: worked examples that substitute into the section's formula (11.4–11.9, 11.12, 11.14, 11.15, 11.17, 11.18, the baseball); the hypocycloid, whose small circle's turning rests on a rolling condition the book never states; (11.6), stated as "the analogous formula"; the ellipse's directrices, the hyperbola's asymptotes and Table 11.1's focal parameters, stated with no claim that they follow; the rotation of axes and the reflective properties, which rest on mathematics the book never gives; the Witch of Agnesi and "Travels with My Ant", set for the reader.

Corrections: the hyperbola's block adds the radicals the wrong way round from its second line on (√((x − c)² + y²) = 2a + √((x + c)² + y²), then √((x + c)² + y²) = −a − cx/a); the derivation keeps the radicals in place, reaches the same x² + c² + y² = a² + c²x²/a², and its notes give the printed lines. The area block's y(x(t̄ᵢ)) for y(t̄ᵢ) is the note of its node. The ellipse's misprinted Pythagorean line stays in the prose with its note c-pythagoras; the derivation's fact is b² + c² = a². Every line was checked by hand, the conic algebra also numerically and the polar arc length with algebra software.


## Pass 32 (2026-10-16): Chapter 17, Second-Order Differential Equations, had its derivations built by one agent in one run (rule 29), from the scan's 15 candidates and the Figure Sandbox's underdamped spring

Eleven derivations were built. A printed proof, its lines replaced: 17.1's linear dependence of two functions (the converse's c₁f₁ = −c₂f₂ and its two cases as nodes; the first direction, one substitution per case, stays printed); 17.2's general solution to a nonhomogeneous equation (y solves it; z − y_p solves the complementary equation; z rewritten). Printed blocks replaced: 17.1's characteristic equation (y′ and y″ of e^{λx} by 3.9, then the substitution into (17.2)), the repeated root (λ = −b/2a, the product rule twice with its skipped line, the substitution to 0) and the complex conjugate roots (the law of exponents, Euler's formula, the even and odd identities as their own move, the two choices of c₁ and c₂, i² = −1 inserted); 17.2's variation of parameters (y_p′, y_p″, the vanishing brackets, the imposed condition and the system it leaves); 17.3's spring-mass equation (Newton's second law to mx″ + kx = 0, stopping where the book introduces ω), the amplitude and phase shift (sum identity, matching coefficients, then A and tan φ as two nodes), the damped spring-mass equation with its characteristic roots, and (17.9) from the three voltage drops. Example 17.21's solution is replaced by the sandbox's settled underdamped-spring record, moved onto this book's macros (m, g, k, s, b, W and t in ink, as the text sets them).

Judged out: the superposition principle, left as an exercise (exercise 52) and three moves; the general solution to a homogeneous equation, whose proof the book puts beyond scope and which needs existence and uniqueness and the Wronskian, never stated; the Resonance student project, posed to the reader; Example 17.25 a's analysis, three printed moves under the bar; Example 17.26's Bessel series, the section's strategy applied to one equation; Examples 17.17, 17.19 and 17.20, which substitute into the section's equations.

Corrections: 17.1's "Assume f₁(x) and f₂(x) are linearly independent" now lives in the derivation as the dependence fact, so the node's note says what the book printed and footnote `c-dependent` and its marker are removed. The `c-eq-17-1` marker, whose sentence went into the characteristic-equation derivation, moves to the next printed citation of Equation 17.1. Re-anchored: forms `eq-damped-spring-mass` and `eq-damped-roots` to `17.3-drv-damped-spring-mass`, `eq-rlc-circuit` to `17.3-drv-rlc-circuit-equation`. Every line was checked by hand, the repeated-root, complex-root and variation-of-parameters algebra also with sympy.


## Pass 33 (2026-10-16): Chapter 6, Applications of Integration, had its derivations built by one agent in one run (rule 29), from the scan's 44 candidates

Twenty-seven derivations were built. Replacing printed blocks, each partition's sum and its limit as a Riemann sum: 6.1's area between two curves on (6.1) and along the y-axis on (6.2); 6.2's slicing method and Example 6.6's volume of a pyramid; 6.3's method of cylindrical shells on (6.6), the shell's four-line volume, Δx and the midpoint worked first, and the shell around the line x = −k, whose development "as before" is inserted (the recalled shell volume above it stays as printed); 6.4's arc length on (6.7), the lateral surface area of a frustum (both printed blocks) and the surface of revolution on (6.9), with the Mean Value and Intermediate Value Theorems as facts; 6.5's mass of a rod (6.10), mass of a disk (6.11), work (6.12) and hydrostatic force (6.13); 6.6's center of mass of two point masses, the thin plate's mass and moments on (6.18) and (6.19), and the proof of Pappus's theorem, joined with the shell volume of 6.3; 6.7's proof of the natural logarithm's properties (i, ii and iv in one derivation, iv as two derivative lines joined by the constant difference theorem of 4.4, then x = 1), the proof of e^p e^q = e^{p+q} and the derivative of e^x with its integral; 6.8's continuous compounding (1.5 states Pe^{rt} without working it), doubling time, Newton's law of cooling and half-life; 6.9's sinh x and sinh⁻¹x. Hidden, after the paragraph or in the derivation the book prints beside them: 6.4's (6.8) ("follow the same development"), after its paragraph, and the theorem's y-axis surface area ("a similar development"), the last two nodes of the surface derivation; 6.7's existence and uniqueness of e ("left to you"), from ln 4 ≥ 13/12 by the comparison theorem, then the hint's Intermediate Value Theorem and ln increasing; 6.9's cosh, tanh, coth, sech and csch (Table 6.2) and the other five inverse hyperbolic derivatives (Table 6.4), each a node, the signs of their roots from the ranges of Table 6.3 and the graphs of Figure 6.81.

Judged out: 6.2's disk and washer rules, one substitution each into V = ∫A(x)dx, and their worked volumes; 6.5's cylindrical-tank pumping problem, the section's method worked to a number; 6.6's lamina between two functions, hidden and under the bar; 6.7's derivative of ln x (one move), part iii of the logarithm properties (three moves), and d/dx a^x, log_a x = ln x/ln a and d/dx log_a x, restatements of results built in 1.5 and 3.9, which stay as printed.

No line of the book's was wrong. Every line was checked by hand, the shell and frustum algebra, the pyramid, the two-mass balance, the cooling law, continuous compounding and all twelve hyperbolic and inverse hyperbolic derivatives also with sympy or numerically. No anchor moved: the replaced displays carried no ids.


## Pass 34 (2026-10-16): Chapter 13, Vector-Valued Functions, had its derivations built by one agent in one run (rule 29), from the scan's 18 candidates

Fourteen derivations were built. Replacing printed proofs, the remarks the book makes between them kept after the derivation: 13.2's scalar product, dot product and constant-magnitude properties of the derivative (one Proof heading, a node each, property vii resting on property iv); 13.3's alternative formulas for curvature, (13.15) by the chain rule, (13.16) through r′ = (ds/dt)T, r″, r′ × r″, T′ · T = 0 and ‖T × T′‖ = ‖T′‖ as their own nodes, and (13.17) through r′, r″ and the determinant for y = f(x); 13.4's plane of the acceleration vector; Kepler's first law, split at the book's paragraph on the plane of motion into the constant vector r × v and the work from (13.26) to the polar equation of a conic, (13.26)–(13.29) keeping their numbers on their nodes. Replacing printed blocks: 13.2's constant vector of integration; 13.3's arc length of the helix, the rate of change of arc length (differentiating (13.13)) and the unit-speed arc length, split at the sentence on s′(t) > 0; 13.4's projectile velocity and position, split at the sentences that name the initial velocity and the initial position, which keep their places with their inline lines; the position thrown at an angle θ; the range and the best angle. Hidden, after the proof of the first law: the law of equal areas, r × v in polar coordinates equal to ‖r‖²θ′k = C and the polar area formula of 11.4 giving A = ½‖C‖(t₂ − t₁).

Judged out: 13.3's binormal as a unit vector (one display with the reasoning in prose, score 3) and Example 13.13 (substitution into (13.17)); 13.4's Kepler's third law (13.30), stated with no claim that it follows from anything and resting on two-body motion the book never states; the Student Project on the banked turn, which poses the steps for the reader.

Corrections, each in its node's note, the book's line having gone into the derivation: 13.3's citation of Alternative Formulas for Curvature, the theorem being proved, for d/dt(T · T), which is property iv of 13.2 (footnote c-proof-cite removed with its marker); 13.4's range written as the vector R = (v₀² sin 2θ/g)i, a distance, and the last line's (v₀²/g)j for (v₀²/g)i, with sin 45 and sin 90 lacking their degree signs (footnote c-range-j removed with its marker). The ids of (13.26)–(13.29) went with their displays; only the removed prose linked to them. Every line was checked by hand, the helix's arc length also with sympy.


## Pass 35 (2026-10-16): Chapter 14, Differentiation of Functions of Several Variables, had its derivations built by one agent in one run (rule 29), from the scan's 17 candidates

Twelve derivations were built. Replacing printed proofs: 14.5's chain rule for one independent variable (the difference quotient from (14.30), which stays printed with its sentence; the root quotient bounded; the error term's limit; the joined limit, (14.29)); 14.6's directional derivative formula (g′ by the chain rule, g′(0) by the definition, joined in (14.37)); 14.8's method of Lagrange multipliers with one constraint. Replacing printed blocks: 14.3's partial derivatives as ordinary derivatives, the x and y displays as one family of two nodes; 14.4's tangent plane, split at the book's sentence that a × b is normal to the plane into the normal vector and the equation (14.24); 14.5's implicit differentiation (14.34), with (14.35), "derived in a similar fashion", as two more nodes by the generalized chain rule; 14.6's directional derivative as ‖∇f‖ cos φ and the gradient normal to a level curve, two lines joined. Hidden, after the statements: Clairaut's theorem, whose proof the book leaves to advanced calculus books (the double difference worked by the Mean Value Theorem twice in each order, then h → 0); differentiability implies continuity (the limit laws of 14.2 on (14.26)); continuity of first partials implies differentiability (the Mean Value Theorem in each variable, the error term bounded and squeezed to 0).

Judged out: the chain rule for two independent variables (two hidden moves); the second derivative test, whose proof needs a second-order Taylor expansion in two variables the book never states; the extreme-value theorem on closed bounded sets, a proof in prose with no equation; Fermat's theorem in two variables, three moves; the two-constraint Lagrange system, stated by analogy and needing the independence of ∇g and ∇h; the Student Project on the age of Earth, which poses the steps for the reader.

Corrections, each in its node's note: 14.3's h′(x) and h(x + k) for the function h(y); 14.5's √(…)/(t − t₀) written as √(…/(t − t₀)²), its absolute value, whose limit the work takes as t → t₀ instead of the book's (x, y) → (x₀, y₀); 14.6's "since f_x and f_y both exist, and therefore f is differentiable" (the theorem assumes differentiability) and the last line's partials at (x, y) for (x₀, y₀). No ids were removed and no footnote rows touched. Every line was checked by hand.


## Pass 36 (2026-10-19): Chapter 16, Vector Calculus, had its derivations built (rule 29), from the scan's 41 candidates, by one agent and finished by a second after the first was cut off

Thirty-one derivations were built. Printed proofs, the prose that states their facts kept and the derivation after it: 16.1's uniqueness of potential functions (h_x = 0 and h_y = 0 as two nodes, joined on a connected domain) and the cross-partial property; 16.2's flux across a curve (16.11); 16.3's Fundamental Theorem for Line Integrals (16.12), path independence of conservative fields and the path independence test (f_x = P and f_y = Q as two nodes, joined in ∇f = F); 16.4's Green's theorem on a rectangle and its flux form (16.15); 16.5's divergence of a source-free field, divergence of the curl and curl of a conservative field; 16.7's Stokes' theorem by small squares and for the graph of a function; 16.8's divergence theorem by small boxes (16.24) and the flux of the inverse-square field (0 outside, 4π on the sphere S_a, then the solid between S and S_a). Printed blocks replaced: 16.2's scalar line integral in t ((16.6) and (16.7)), arc length as a line integral and the vector line integral in t; 16.3's zero circulation; 16.4's area from the boundary (16.14), the harmonic potential and Green's theorem with holes; 16.6's area of a surface piece, the scalar surface integral (16.19), the upward normal of a graph and the flux integral over the parameter domain; 16.7's curl as circulation per unit area and Faraday's flux integrals; 16.8's divergence as flux per unit volume, Example 16.80's divergence of F_r and Gauss' law for a point charge.

Judged out: 16.3's cross-partial test and 16.5's divergence test for source-free fields, whose proofs the book puts beyond scope and which need facts about simply connected regions it never states; 16.5's curl test, one sentence citing the cross-partial test; Examples 16.33, 16.47, 16.54, 16.62 and 16.63, worked examples under the bar; the planimeter Student Project, posed to the reader.

Corrections, each in its node's note: 16.2's (16.6) printed with an equals sign; 16.3's open parenthesis in d/dt(f(r(t)); 16.4's r_{1'}(t) for r₁′(t); 16.7's citation of (16.19) for the flux integral (16.21); 16.8's F_r · N with N the unnormalized normal. Re-anchored: forms `eq-area-by-greens-theorem` to `16.4-drv-area-from-boundary` and `eq-scalar-surface-integral-calculation` to `16.6-drv-scalar-surface-integral`, the variables row 16.6/r_vec_prime with it; the coverage span of (16.14) moved to its host; every link to (16.14) and (16.19), in the text, the checkpoint hints, 16.6's summary and 16.7 and 16.8, re-pointed at the derivations. Every line was checked by hand; Example 16.80 and the sphere's flux also with sympy.


## Pass 37 (2026-10-19): Chapter 15, Multiple Integration, had its derivations built by one agent in one run (rule 29), from the scan's 8 candidates

Five derivations were built, all replacing printed blocks. 15.3's area of a polar subrectangle (the trapezoid with arcs r_{i−1}Δθ and r_iΔθ, then r*_{ij}, then the thin box's volume; the Riemann sum and its limit are definitions and stay). 15.7's area of the image of a small rectangle (‖Δu r_u × Δv r_v‖ by the cross product of 12.4 to |J(u,v)|ΔuΔv, the tangent vectors and their approximations kept printed as its facts) and change of variables for double integrals (the definition's Riemann sum, the images x_ij = g(u_ij, v_ij), the area element, the limit), split at the Definition, the two examples and the section heading; Example 15.72's triple integrals in cylindrical and in spherical coordinates, each its Jacobian expanded along the third row and then the triple change-of-variables theorem, split at the book's part b.

Judged out: Example 15.32's cone volume, three hidden moves; 15.5's spherical volume element, under the bar and worked in Example 15.72; Examples 15.52 and 15.53, the section's formula integrated.

Corrections: the area of a transformed rectangle printed without its absolute value, (x_u y_v − x_v y_u)ΔuΔv and J(u,v)ΔuΔv, now in the node's note; the restated ΔA ≈ J(u,v)Δu,Δv at the head of Change of Variables stays printed, marked `c-cov-abs`; Example 15.72's ∂x/∂θ printed without its minus sign and the first minor's row with sin θ for cos θ, in the node's note (the values that follow were right). No anchor moved: the replaced displays carried no ids. Every line was checked by hand, the spherical Jacobian and its minors also with sympy.
