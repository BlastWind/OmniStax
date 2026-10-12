# Exploration: Calculus, Chapter 5 Integration

Written 2026-10-12, before the chapter's sections were built. The eight modules were converted with `python3 tools/convert.py 5` and read; the book's organization and apparatus are as `RULES.md` records them, and nothing in this chapter departs from that account. `config.md` beside this file is the agreed list.

## Why this chapter

The chapter builds the integral. 5.1 introduces sigma notation and its rules, approximates the area under a curve by left- and right-endpoint rectangles, then by Riemann sums with any sample points (upper and lower sums), and defines the area as their limit. 5.2 lifts the restrictions to define the definite integral, names its parts, reads it as net signed area (and total area with the absolute value), states its properties and the comparison theorem, and defines the average value of a function. 5.3 proves the Mean Value Theorem for Integrals and both parts of the Fundamental Theorem of Calculus, and evaluates integrals with antiderivatives. 5.4 applies the basic formulas, states the net change theorem (displacement and total distance, fuel used, the iceboat of the opener) and the integrals of even and odd functions. 5.5 is integration by substitution, indefinite and definite; 5.6 the integrals of exponential and logarithmic functions with their applications (price–demand, bacteria, fruit flies); 5.7 the integrals that give inverse sine, tangent and secant.

## Modules

Ex. = worked examples, Fig. = numbered figures, Img. = unnumbered images (all in checkpoints or exercises), CP = checkpoints (all keyed), Exer. = section exercises (chapter-wide numbers), Keyed = those carrying the book's solution, Gl. = glossary entries, KE = Key Equations rows.

| Section | Module | Ex. | Fig. | Img. | Tables | Notes | CP | Exer. | Keyed | Gl. | KE | Media |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m53623 | 0 | 1 photo | 0 | 0 | — | 0 | — | — | 0 | 0 | — |
| 5.1 Approximating Areas | m53624 | 6 | 14 | 11 | 1 + 4 in exercises | 3 definitions, 4 rules, 1 proof | 6 | 1–59 | 30 | 8 | 4 | 1 (Riemann sums demonstration) |
| 5.2 The Definite Integral | m53631 | 8 | 10 | 8 | 0 | 3 definitions, 1 rule, 2 theorems | 7 | 60–143 | 42 | 8 | 2 | — |
| 5.3 The Fundamental Theorem of Calculus | m53632 | 8 | 6 (2 photos) | 5 | 0 | 3 theorems, 3 proofs, 1 Student Project | 7 | 144–206 | 31 | 4 | 3 | 1 (Newton biography) |
| 5.4 Integration Formulas and the Net Change Theorem | m53633 | 7 | 5 (1 photo) | 9 | 7 in exercises | 1 theorem, 1 rule | 4 | 207–253 | 24 | 1 | 1 | — |
| 5.5 Substitution | m53634 | 7 | 0 | 5 | 0 | 2 theorems, 1 proof, 1 strategy | 6 | 254–319 | 33 | 2 | 2 | — |
| 5.6 Integrals Involving Exponential and Logarithmic Functions | m53635 | 12 | 3 | 1 | 0 | 2 rules | 9 | 320–390 | 35 | 0 | 2 | — |
| 5.7 Integrals Resulting in Inverse Trigonometric Functions | m53636 | 6 | 0 | 6 | 0 | 1 rule, 1 proof | 5 | 391–438 | 24 | 0 | 1 | — |
| Review (in 5.7) | m53636 | — | — | — | — | — | — | 439–463 | 13 | — | — | — |

438 section exercises, 219 keyed; 25 review exercises, 13 keyed; 44 checkpoints; 54 worked examples; 23 glossary entries. The key answers the odd numbers only.

## Figure, table and example numbers

Counted in book order, the opener as Figure 5.1; a bare `<media>` and a table with class `unnumbered` take no number. Checkpoints run 5.1–44 in the same order as the examples they follow.

| Section | Figures | Tables | Examples |
|---|---|---|---|
| intro | 5.1 the iceboat (splash photo) | — | — |
| 5.1 | 5.2 the region under f on [a, b], 5.3 left endpoints, 5.4 right endpoints, 5.5 x²/2 on [0, 3] left and right, 5.6 and 5.7 x² on [0, 2] left and right (Ex. 5.4), 5.8 to 5.13 (x − 1)³ + 4 on [0, 2] with L₄, L₈, L₃₂, R₄, R₈, R₃₂, 5.14 the lower sum of 10 − x² (Ex. 5.5), 5.15 the lower sum of sin x (Ex. 5.6) | 5.1 converging L_n and R_n; 5.2–5.5 the data tables of exercises 30–41 | 5.1–5.6 |
| 5.2 | 5.16 the quarter of a semicircle (Ex. 5.8), 5.17 Riemann rectangles of 2 − 2x², 5.18 A₁ less A₂, 5.19 the triangles of 2x (Ex. 5.9), 5.20 v(t) = 70, 5.21 60 north then 40 south, 5.22 total area of x − 2 (Ex. 5.10), 5.23 and 5.24 √(1 + x²) against √(1 + x) (Ex. 5.13), 5.25 the trapezoid under x + 1 (Ex. 5.14) | — | 5.7–5.14 |
| 5.3 | 5.26 8 − 2x and its average (Ex. 5.15), 5.27 x² and c = √3 (Ex. 5.16), 5.28 t² − 4 below the axis (Ex. 5.20), 5.29 (x − 1)/√x (Ex. 5.21), 5.30 skydivers (photo, Student Project), 5.31 a wingsuit (photo, Student Project) | — | 5.15–5.22 |
| 5.4 | 5.32 the car's velocity 40 then −30, 5.33 v(t) = 3t − 5 (Ex. 5.24), 5.34 the iceboat (photo, Ex. 5.27), 5.35 3x⁸ − 2 at two zooms (Ex. 5.28), 5.36 −5 sin x (Ex. 5.29) | 5.6–5.12 in exercises | 5.23–5.29 |
| 5.5 | — | — | 5.30–5.36 |
| 5.6 | 5.37 eˣ√(1 + eˣ), 5.38 e^(1−x) on [1, 2], 5.39 3/(x − 10) | — | 5.37–5.48 |
| 5.7 | — | — | 5.49–5.54 |

## What is new

- The `integral` type is the chapter's own: every Riemann sum and its rectangles, L_n and R_n, the area A, A₁ and A₂, the definite and indefinite integral, an antiderivative F, displacement and total distance, net change. `function` stays beside it on every graph; `derivative` returns in the Fundamental Theorem (F′ = f) and for the rates the net change theorem integrates; `set` for the intervals and partitions; `point` for c in the Mean Value Theorem for Integrals.
- Prerequisites reach into Chapters 2–4: limit, continuity over an interval and the Intermediate Value Theorem (2.4), the derivative, chain rule and the derivatives of exponential, logarithmic and inverse trigonometric functions (Chapter 3), and from Chapter 4 the extreme value theorem, the Mean Value Theorem and the antiderivative and indefinite integral of 4.10. 30-odd concepts.
- The figure library already has what the chapter draws: `F.riemann` (left, right, mid, upper, lower, trap) and `F.shade` for the regions, `F.plot` for the curves and the pole of 3/(x − 10), `F.drag` for a moving endpoint. Nothing new is wanted from figlib.

## Sketches to replace and photographs

Every numbered graph is replaced by a live figure drawn from the book's function (config 18); where the book prints no formula (5.2, 5.3, 5.4) the plan names a stand-in close to the sketch, and 5.3 and 5.4 take x²/2 from 5.5. Folds the plans take: 5.3 + 5.4 + 5.5 (one region, left or right endpoints, n on a slider), 5.6 + 5.7 (Example 5.4's two approximations), 5.8–5.13 (the six approximations of (x − 1)³ + 4, n with detents at 4, 8 and 32, left or right), 5.17 + 5.18 (the rectangles of 2 − 2x² closing on A₁ − A₂), 5.20 + 5.21 (the car's two trips), 5.23 + 5.24 (the comparison and its zoom), 5.26 + 5.27 (the two average-value examples). Moving figures: the car of 5.20 + 5.21 and the particle of 5.33, whose positions are the integrals of the velocities drawn. Figures that serve a checkpoint's answer stay still copies (5.14 and 5.15 show the lower sums; a choice would show the checkpoints' upper sums).

Photographs: 5.1 (opener) kept; 5.34 (the iceboat inside Example 5.27, which points at it) kept; 5.30 and 5.31 inside the Student Project kept, the second because the text points at it and the first because the project's narrative opens on it and the chapter's numbers would otherwise skip one.

## Notes and media

Two media notes are dropped and named in `notes` (config 14): 5.1's graphical demonstration of a Riemann sum (it seeds `sim-riemann-sum`) and 5.3's Newton biography. 5.3's Student Project (A Parachutist in Free Fall, Figures 5.30 and 5.31) is a note with its questions (config 15). Proofs stay under their theorem (config 9): the properties of sigma notation (5.1), the Mean Value Theorem for Integrals and both parts of the Fundamental Theorem (5.3), substitution (5.5), the inverse sine integral (5.7). One Problem-Solving Strategy: Integration by Substitution (5.5), a note and a `skill`.

## Exercises that belong to another section

The Chapter Review Exercises (439–463) are printed at the end of 5.7 and placed with the section that introduces what each tests (config 11), `source_section` 5.7:

- 5.1: 439 (true or false: the right-hand rule underestimates an increasing positive f, keyed False).
- 5.2: 441 (true or false: the comparison property, keyed True); 440 (∫f² = (∫f)², unkeyed true-or-false with a counterexample) kept with an AI-marked approach.
- 5.3: 442 (all continuous functions have an antiderivative, unkeyed, kept with an approach), 443 and 445 (L₄, R₄ and the exact value, keyed; the exact value needs the Fundamental Theorem or a calculator), 455 and 457 (derivatives of integrals, keyed).
- 5.4: 447 (a polynomial integral, keyed), 459 (the cost of RAM in 1980 from its five-year changes, keyed), 463 (the bullet's average velocity, keyed).
- 5.5: 449 and 451 (substitutions, keyed).
- 5.6: 461 (average cost of RAM from C(t) = 8,500,000(0.65)ᵗ, keyed).
- 5.7: 453 (an inverse sine by substitution, keyed).
- Left out, unkeyed and computational: 444, 446, 448, 450, 452, 454, 456, 458, 460, 462.

Unkeyed even section exercises are judged per plan under config 12: computational ones are left out, proofs, explanations and true-or-false justifications are kept with AI-marked approaches.

## Rule 23: what would make this chapter stunning

The integral should be watched being built. Rectangles stand under a curve, then multiply and thin while their sum creeps to the area; the reader picks where each rectangle meets the curve (left, right, middle, highest, lowest) and sees every choice close on the same number. Where the curve drops below the axis the rectangles hang down and count against the sum. A car drives north and back while the area under its velocity graph fills in, positive then negative, and its odometer and its distance from home part ways. A moving endpoint x drags an accumulating area across f while, beneath, the area itself is drawn as a new function F whose slope at every x is the height of f there: the Fundamental Theorem made visible. The average value is a rectangle of equal area whose top meets the curve at c. Substitution shows two regions of different shape, one in x and one in u, with the same area, and the last section's areas under 1/(1 + t²) and 1/√(1 − t²) turn out to be angles. Nothing needs 3D (config 23).

## Wanted from figlib

Nothing: `F.riemann`, `F.shade`, `F.plot`, `F.drag`, `F.car` and `cycle` cover the chapter.
