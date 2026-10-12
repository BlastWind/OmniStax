# Exploration: Calculus, Chapter 4 Applications of Derivatives

Written 2026-10-12, before the chapter's sections were built. The eleven modules were converted with `python3 tools/convert.py 4` and their apparatus read (objectives, headers, notes, captions, Key Concepts, Key Equations, glossary, exercise lists); each section's narrative is read in full by its plan. The book's organization and apparatus are as `RULES.md` records them, and nothing in this chapter departs from that account. `config.md` beside this file is the agreed list.

## Why this chapter

Chapter 3 built the derivative; this chapter spends it. 4.1 relates the rates of quantities tied by one equation (a balloon, a plane, the opener's rocket and camera, a draining funnel). 4.2 replaces a function near a point by its tangent line, names the change along it the differential, and propagates a measurement error through it. 4.3 defines absolute and local extrema and critical points, states the Extreme Value Theorem and Fermat's theorem, and locates absolute extrema over a closed interval. 4.4 proves Rolle's theorem and the Mean Value Theorem and draws three corollaries, the third of which ties the sign of f′ to increasing and decreasing. 4.5 turns that into the first derivative test, defines concavity and inflection points by f′, gives the concavity test and the second derivative test. 4.6 takes limits as x → ±∞, horizontal and oblique asymptotes, end behavior of polynomial, rational, algebraic and transcendental functions, and the full graph-drawing strategy. 4.7 solves applied optimization problems over closed and over open or unbounded intervals. 4.8 states L'Hôpital's rule for 0/0 and ∞/∞, rewrites the other indeterminate forms into them, and compares growth rates. 4.9 is Newton's method, its failures, and iterative processes with a Student Project on cycles and chaos. 4.10 reverses differentiation: antiderivatives, the indefinite integral, the power rule for integrals and initial-value problems; its module also prints the Chapter Review Exercises.

## Modules

Ex. = worked examples, Fig. = numbered figures, Img. = unnumbered images in the narrative, CP = checkpoints (all keyed), Exer. = section exercises (chapter-wide numbers), Keyed = those carrying the book's solution, Gl. = glossary entries, KE = Key Equations rows.

| Section | Module | Ex. | Fig. | Img. | Tables | Defs / theorems / other notes | CP | Exer. | Keyed | Gl. | KE | Media |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m53602 | 0 | 1 photo | 0 | 0 | — | 0 | — | — | 0 | 0 | — |
| 4.1 Related Rates | m53604 | 4 | 5 (1 photo) | 1 | 0 | 1 strategy | 4 | 1–45 | 23 | 1 | 0 | — |
| 4.2 Linear Approximations and Differentials | m53605 | 7 | 5 | 0 | 0 | — | 7 | 46–89 | 20 | 7 | 2 | — |
| 4.3 Maxima and Minima | m53611 | 2 | 9 | 0 | 0 (2 unnumbered) | 3 definitions, 3 theorems, 1 strategy, 1 proof | 2 | 90–147 | 29 | 10 | 0 | — |
| 4.4 The Mean Value Theorem | m53612 | 3 | 9 | 0 | 0 | 5 theorems (2 + 3 corollaries), 5 proofs | 2 | 148–193 | 23 | 2 | 0 | — |
| 4.5 Derivatives and the Shape of a Graph | m53613 | 4 | 10 | 0 | 1 (Table 4.1; 4 unnumbered) | 2 definitions, 3 theorems, 1 strategy | 4 | 194–250 | 28 | 7 | 0 | — |
| 4.6 Limits at Infinity and Asymptotes | m53596 | 11 | 22 | 6 | 5 (Tables 4.2–4.6; 10 unnumbered) | 5 definitions, 1 strategy | 11 | 251–310 | 30 | 5 | 0 | — |
| 4.7 Applied Optimization Problems | m53614 | 6 | 9 | 0 | 0 | 1 strategy | 6 | 311–355 | 23 | 1 | 0 | 1 video (box volume) |
| 4.8 L'Hôpital's Rule | m53619 | 8 | 6 | 0 | 6 (Tables 4.7–4.12) | 2 theorems, 1 proof | 8 | 356–405 | 25 | 2 | 0 | — |
| 4.9 Newton's Method | m53620 | 4 | 8 | 0 | 0 | 1 Student Project | 4 | 406–464 | 29 | 2 | 0 | — |
| 4.10 Antiderivatives | m53621 | 5 | 2 | 0 | 1 (Table 4.13) | 2 definitions, 3 theorems | 5 | 465–524 | 30 | 3 | 0 | — |
| Review (in 4.10) | m53621 | — | — | — | — | — | — | 525–552 | 14 | — | — | — |

524 section exercises, 260 keyed; 28 review exercises, 14 keyed; 53 checkpoints; 54 worked examples; 40 glossary entries. Exercise images: 7 in 4.1, 5 in 4.3, 15 in 4.5, 11 in 4.6, 7 in 4.7, 1 in 4.10, 4 in the review (201, 202, 204, 206).

## Figure, table and example numbers

Counted from the CNXML in book order, the opener as Figure 4.1; a bare `<media>` and a table with class `unnumbered` take no number. Not checked against openstax.org page by page; each section's plan confirms its first and last number against the count.

| Section | Figures | Tables | Examples |
|---|---|---|---|
| intro | 4.1 the rocket (splash photo) | — | — |
| 4.1 | 4.2 three balloons, 4.3 the plane and the man, 4.4 the rocket again (photo, in Example 4.3), 4.5 the camera's triangle, 4.6 the funnel; one unnumbered triangle in a checkpoint's hint | — | 4.1–4.4 |
| 4.2 | 4.7 1/x and its tangent at 2, 4.8 √x at 9, 4.9 sin x at π/3, 4.10 (1 + x)³ at 0, 4.11 dy against Δy | — | 4.5–4.11 |
| 4.3 | 4.12 x² + 1, 4.13 six extremum cases, 4.14 two local maxima, 4.15 five critical-point cases, 4.16–4.18 Example 4.12's three functions, 4.19 and 4.20 Example 4.13's two | — | 4.12–4.13 |
| 4.4 | 4.21 Rolle's three cases, 4.22 \|x\| − 1, 4.23 x² + 2x, 4.24 x³ − 4x, 4.25 the MVT picture, 4.26 the proof's g(x), 4.27 √x on [0, 9], 4.28 the dropped rock, 4.29 Corollary 3 | — | 4.14–4.16 |
| 4.5 | 4.30 increasing and decreasing, 4.31 four critical points, 4.32 x³ − 3x² − 9x − 1, 4.33 5x^{1/3} − x^{5/3}, 4.34 concavity cases, 4.35 the inflection picture, 4.36 x³ − 6x² + 9x + 30, 4.37 the four sign cases, 4.38 the second derivative test, 4.39 x⁵ − 5x³ | 4.1 What Derivatives Tell Us about Graphs | 4.17–4.20 |
| 4.6 | 4.40 2 + 1/x, 4.41 (a) and (b) limits at ±∞, 4.42 (cos x)/x + 1, 4.43 5 − 2/x², 4.44 (sin x)/x, 4.45 tan x, 4.46 tan⁻¹ x, 4.47 x³, 4.48 the ε–N picture, 4.49 the M–N picture, 4.50 even powers, 4.51 odd powers, 4.52 5x³ − 3x² + 4 beside 5x³, 4.53 (3x − 1)/(2x + 5), 4.54 (3x² + 2x)/(4x² − 5x + 7), 4.55 and 4.56 (3x² + 4x)/(x + 2) and its oblique asymptote, 4.57 (3x − 2)/√(4x² + 5), 4.58 sin x, 4.59 tan x, 4.60 eˣ, 4.61 ln x; six unnumbered graphs in Examples 4.28–4.31 and their checkpoints | 4.2 f as x → ±∞, 4.3 a power function, 4.4 polynomial end behavior, 4.5 eˣ, 4.6 ln x | 4.21–4.31 |
| 4.7 | 4.62 the garden, 4.63 A(x), 4.64 the cardboard box, 4.65 V(x), 4.66 cabin and island, 4.67 R(p), 4.68 the rectangle in the ellipse, 4.69 the square-based box, 4.70 S(x) | — | 4.32–4.37 |
| 4.8 | 4.71 f and g with their linear approximations at a, 4.72 x ln x, 4.73 eˣ beside x², 4.74 x² beside ln x, 4.75 eˣ beside x³ and x⁴, 4.76 √x, ∛x and ln x | 4.7 x² and x³, 4.8 x² and 3x² + 4x + 1, 4.9 a power and an exponential, 4.10 a power and a logarithm, 4.11 eˣ against powers, 4.12 ln x against roots | 4.38–4.45 |
| 4.9 | 4.77 Newton's tangents, 4.78 x³ − 3x + 1, 4.79 √2, 4.80 the wrong root, 4.81 the 2-cycle of x³ − 2x + 2, 4.82 F(x) = x/2 + 4, 4.83 the Mandelbrot set (image), 4.84 the cobweb of 3.55x(1 − x) | — | 4.46–4.49 |
| 4.10 | 4.85 x² + C, 4.86 solution curves of dy/dx = 6x² | 4.13 Integration Formulas | 4.50–4.54 |

## What is new

- The chapter rests on Chapters 1–3: its prerequisite edges go into the derivative and its rules (3.1–3.9), limits and continuity (2.2–2.4), increasing and decreasing functions, polynomials, rational and transcendental functions (1.1–1.5). 54 new concepts, every glossary word among their `terms` or an earlier concept's (`end-behavior` of 1.2 and `indeterminate-form` of 2.3 are reinforced, not restated).
- Types: `point` is the chapter's busiest after function and derivative (extrema, critical points, inflection points); `line` returns for the tangent line approximation L(x), the horizontal and oblique asymptotes and Newton's tangents; `error` arrives with propagated, relative and percentage error (4.2); `integral` with the antiderivative F and the indefinite integral (4.10); `limit` for limits at infinity (4.6).
- Figures are almost all graphs of functions, drawn live (config 18) with `F.plot`, `F.tangent`, `F.secant`, `F.drag` and `F.shade`; the related-rates and optimization scenes are the chapter's only pictures of things, and its only clocks.

## Sketches to replace and photographs

Every numbered graph is replaced by a live figure drawn from the book's function; where the book draws no formula (4.13, 4.14, 4.15, 4.21, 4.25, 4.26, 4.29, 4.30, 4.31, 4.34, 4.35, 4.37, 4.38, 4.41, 4.48, 4.49, 4.71, 4.77, 4.80) the plan names a stand-in close to the sketch. Folds the plans weigh: 4.16 + 4.17 + 4.18 (Example 4.12's three functions), 4.19 + 4.20 (Example 4.13), 4.22 + 4.23 + 4.24 (Rolle's cases), 4.25 + 4.26 (the MVT and its proof's g), 4.50 + 4.51 (even and odd powers), 4.55 + 4.56 (one rational function and its oblique asymptote), 4.58 + 4.59 (sin and tan have no limit at infinity), 4.60 + 4.61, 4.85 + 4.86 (families of antiderivatives); a fold is taken only where the examples do not read each figure apart.

Photographs: Figure 4.1 (the rocket, opener) kept; Figure 4.4 (the same picture inside Example 4.3) kept, since the example is the opener's question. Figure 4.83, the Mandelbrot set, is a computed image the Student Project points at and stays the book's still. The scenes of 4.1 and 4.7 (balloons, plane, rocket and camera, funnel, garden, box, cabin and island, ellipse, square-based box) are drawings the examples are set in, redrawn live.

## Notes and media

One media note, 4.7's video on the volume of a box, is dropped and named in `notes` (config 14); it seeds 4.7's box-folding Sim. 4.9's Student Project (Iterative Processes and Chaos, Figures 4.83 and 4.84) is a note with its questions (config 15). The proofs of 4.3 (Fermat), 4.4 (Rolle, the MVT, three corollaries) and 4.8 (L'Hôpital, 0/0 case) stay in the text under their theorems (config 9). Problem-Solving Strategies: 4.1 (related rates), 4.3 (absolute extrema over a closed interval), 4.5 (the first derivative test), 4.6 (drawing the graph of a function), 4.7 (optimization), each a note and a `skill`.

## Exercises that belong to another section

The Chapter Review Exercises (525–552) are printed at the end of 4.10 and placed with the section that introduces what each tests (config 11), `source_section` 4.10:

- 4.1: 549 (the car compactor, keyed). 550 (the rocket's kinetic energy, unkeyed computational) left out.
- 4.2: 531 (linear approximation, keyed). 532 (a differential, unkeyed) left out.
- 4.3: 526 (true or false: f′(c) = 0 gives an extremum, unkeyed, kept with an AI-marked approach), 533 (keyed). 534 left out.
- 4.4: 525 (true or false by the MVT, keyed).
- 4.5: 527 (true or false, keyed), 528 (true or false, unkeyed, kept with an approach), 529 (increasing and decreasing from the graph of f′, keyed), 535, 537 (keyed). 530 (sketch f′, unkeyed), 536, 538 left out.
- 4.6: 539 (keyed limit at infinity), 547 (a graph by hand, keyed with its image). 540, 548 left out.
- 4.7: 551 (Regiomontanus' problem, keyed). 552 (the airline fare, unkeyed) left out.
- 4.8: 541 (keyed). 542 left out.
- 4.9: 543 (keyed). 544 left out.
- 4.10: 545 (keyed), set in its own section with no `source_section`. 546 left out.

Unkeyed even section exercises are judged per plan under config 12: computational ones (most of every set) are left out; true-or-false justifications, explanations and proofs (4.3's and 4.4's "why" and "prove" items, 4.6's sketches with given properties are computational) are kept with AI-marked approaches.

## Rule 23: what would make this chapter stunning

Every application here is a picture moving under a derivative. The balloon swells, the plane flies past the tower, the rocket climbs while the camera tilts after it, the funnel drains: each scene plays its clock while the related equation's rates tick beside it, and the reader sees dr/dt shrink as the balloon grows. The tangent line zooms in until it and the curve are one line, and a dx slider pulls dy and Δy apart. On any graph the reader drags the ends of an interval and watches the absolute extrema jump between endpoints and critical points; on a curve over [a, b] the secant's slope finds its parallel tangents. f, f′ and f″ stand in three stacked panels whose sign bands paint where f rises, falls, bends up and bends down. The window flies out toward infinity until the curve lies down on its asymptote. A sheet of cardboard folds into a box as its V(x) graph climbs and falls; the walker from the cabin picks a landing point while the travel time traces its curve. L'Hôpital's rule is a zoom in which f and g straighten into their tangent lines, so their ratio becomes the ratio of slopes. Newton's tangents slide down to the axis step by step, a cobweb spirals into a fixed point or into an 8-cycle, and the family x² + C slides up and down until one curve passes through the initial point. Nothing needs 3D (config 23).

## Wanted from figlib

Nothing new is expected: tangents, secants, drags, shading and honest asymptotes are in `figlib`. A plan that needs a part (an ε–N band for 4.6, stacked sign bands for 4.5) adds it under the Chapter 4 block with a test.
