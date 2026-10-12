# Exploration: Calculus, Chapter 3 Derivatives

Written 2026-10-12, before the chapter's sections were built. The ten modules were converted with `python3 tools/convert.py 3` and read; the book's organization and apparatus are as `RULES.md` records them, and nothing in this chapter departs from that account. `config.md` beside this file is the agreed list.

## Why this chapter

The chapter turns the limit of Chapter 2 into the derivative and then into a calculus. 3.1 defines the slope of the tangent line and the derivative at a point as the limit of a difference quotient, in its x-form and its h-form, reads velocity and other rates as derivatives, and answers the opener's question about the Hennessey Venom's acceleration in Example 3.8. 3.2 makes the derivative a function, introduces Leibniz notation, reads the graph of f′ off the graph of f, proves that differentiability implies continuity and shows three ways a continuous function fails to be differentiable, then takes higher-order derivatives. 3.3 derives the constant, power, sum, difference, constant multiple, product and quotient rules and the extended power rule, and closes on the Formula One Grandstands project. 3.4 reads derivatives as rates: the amount of change formula, motion along a line (velocity, speed, acceleration), population growth and marginal cost, revenue and profit. 3.5 derives the six trigonometric derivatives and the four-step cycle of sin x. 3.6 states and proves the chain rule, combines it with the power, trigonometric and product rules, and writes it in Leibniz notation. 3.7 gives the inverse function theorem, extends the power rule to rational exponents and derives the inverse trigonometric derivatives. 3.8 differentiates implicitly and finds tangent lines to circles, the folium of Descartes and an ellipse. 3.9 derives the exponential and logarithmic derivatives from the assumption that bˣ is differentiable at 0, defines e by the slope 1 of its tangent at 0, and closes on logarithmic differentiation.

## Modules

Ex. = worked examples, Fig. = numbered figures, Img. = unnumbered images in the narrative, CP = checkpoints (all keyed), Exer. = section exercises (chapter-wide numbers), Keyed = those carrying the book's solution, Gl. = glossary entries, KE = Key Equations rows.

| Section | Module | Ex. | Fig. | Img. | Tables | Defs / rules / other notes | CP | Exer. | Keyed | Gl. | KE | Media |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m53494 | 0 | 1 photo | 0 | 0 | — | 0 | 0 | 0 | 0 | 0 | — |
| 3.1 Defining the Derivative | m53495 | 10 | 9 (2 photos, 1 sketch of a spring) | 0 | 3 numbered, 1 unnumbered | 4 definitions | 5 | 1–53 | 27 | 4 | 6 | 2 (derivative applet; tangent-line site) |
| 3.2 The Derivative as a Function | m53573 | 6 | 7 | 2 | 0 | 1 definition, 1 theorem, 1 proof | 5 | 54–105 | 26 | 5 | 1 | — |
| 3.3 Differentiation Rules | m53575 | 16 | 4 (1 photo) | 0 | 0 | 6 theorems, 4 proofs, 1 Student Project | 10 | 106–149 | 22 | 7 | 0 | — |
| 3.4 Derivatives as Rates of Change | m53576 | 6 | 3 | 1 | 2 in the exercises | 3 definitions | 4 | 150–174 | 12 | 8 | 0 | 1 (rate-of-change demonstration) |
| 3.5 Derivatives of Trigonometric Functions | m53578 | 9 | 3 | 0 | 0 | 2 theorems, 1 proof | 9 | 175–213 | 18 | 0 | 6 | — |
| 3.6 The Chain Rule | m53581 | 12 | 0 | 0 | 0 | 4 rules, 1 theorem, 1 strategy, 1 proof | 8 | 214–259 | 23 | 1 | 2 | 1 (chain-rule animation) |
| 3.7 Derivatives of Inverse Functions | m53584 | 8 | 2 | 0 | 0 | 3 theorems, 1 proof | 6 | 260–299 | 20 | 0 | 8 | — |
| 3.8 Implicit Differentiation | m53585 | 6 | 3 | 0 | 0 | 1 strategy | 2 | 300–330 | 15 | 1 | 0 | — |
| 3.9 Derivatives of Exponential and Logarithmic Functions | m53586 | 10 | 3 | 0 | 2 numbered, 1 in the exercises | 3 theorems, 2 proofs, 1 strategy | 6 | 331–366 | 18 | 1 | 4 | — |
| Review (in 3.9) | m53586 | — | — | — | 1 | — | — | 367–391 | 13 | — | — | — |

366 section exercises, 181 keyed; 25 review exercises, 13 keyed; 55 checkpoints (Checkpoints 3.1–3.55: 3.1–3.5 in 3.1, 3.6–3.10 in 3.2, 3.11–3.20 in 3.3, 3.21–3.24 in 3.4, 3.25–3.33 in 3.5, 3.34–3.41 in 3.6, 3.42–3.47 in 3.7, 3.48–3.49 in 3.8, 3.50–3.55 in 3.9); 83 worked examples; 27 glossary entries. The key answers the odd numbers, except 205 and 207 (derivations), which it leaves unkeyed. Exercise images: 5 in 3.1 (the graphs of 39, 40, 47 and the answer graphs of 49, 53), 17 in 3.2 (the graphs 64–67 read and the answers of 65, 67, 75, 77, the graphs of 78–80 and 99, the answers of 85, 87, 89, 103), 5 in 3.3 (the answer graphs of 119, 121, 133, 135 and the figure 130–132 read), 4 in 3.4, 3 in 3.5, 10 in 3.7, 4 in 3.8, 4 in 3.9 (355's answer, the review's 386, 387 and 387's answer).

## Figure, table and example numbers

Counted from the CNXML in book order, the opener as Figure 3.1; a bare `<media>` and a table with class `unnumbered` take no number. Not yet checked against openstax.org page by page; the first section agent of each page confirms its first and last number there.

| Section | Figures | Tables | Examples |
|---|---|---|---|
| intro | 3.1 the Hennessey Venom GT (splash photo) | — | — |
| 3.1 | 3.2 Newton and Leibniz (photos), 3.3 a secant two ways, 3.4 secants approaching the tangent, 3.5 √x and its tangent at 1 in tighter windows, 3.6 x² and y = 6x − 9 (Ex. 3.1), 3.7 1/x and its tangent at 2 (Ex. 3.3), 3.8 secant and tangent of a position s(t), 3.9 a weight on a spring (Ex. 3.7), 3.10 the Venom again (photo, Ex. 3.8) | 3.1 average velocities of sin t (Ex. 3.7), 3.2 v(t) of the Venom, 3.3 average acceleration (Ex. 3.8); Example 3.4's table is unnumbered | 3.1–3.10 |
| 3.2 | 3.11 Δy/Δx on a secant, 3.12 √x and f′, 3.13 x² − 2x and f′, 3.14 \|x\|, 3.15 ∛x, 3.16 x sin(1/x), 3.17 the toy-car track (Ex. 3.14); Example 3.13's graph and its answer are unnumbered images | — | 3.11–3.16 |
| 3.3 | 3.18 3x² beside x² and their derivatives (Ex. 3.20), 3.19 x³ − 7x² + 8x + 1 and its horizontal tangents (Ex. 3.31), 3.20 a grandstand at Barcelona (photo, project), 3.21 the track f(x) = x³ + 3x² + x (project) | — | 3.17–3.32 |
| 3.4 | 3.22 f(a + h) ≈ f(a) + f′(a)h, 3.23 the sign of v(t) (Ex. 3.36), 3.24 the particle's path (Ex. 3.36); Example 3.34's graph of s(t) is an unnumbered image | 3.4 the population of London, 3.5 hares and lynx (both in the exercises; confirm on openstax.org) | 3.33–3.38 |
| 3.5 | 3.25 D(x) beside cos x, 3.26 (sin h)/h and (cos h − 1)/h, 3.27 sin x and cos x with their horizontal tangents | — | 3.39–3.47 |
| 3.6 | — | — | 3.48–3.59 |
| 3.7 | 3.28 the tangents of f and f⁻¹, 3.29 the right triangle for cos(sin⁻¹x) | — | 3.60–3.67 |
| 3.8 | 3.30 x² + y² = 25 and two of the functions it defines, 3.31 the tangent to the circle at (3, −4), 3.32 the folium of Descartes and its tangent | — | 3.68–3.73 |
| 3.9 | 3.33 2ˣ, 2.7ˣ, 2.8ˣ, 3ˣ, 3.34 eˣ and its tangent y = x + 1, 3.35 ln x and 1/x | 3.6 approximating 4^π, 3.7 estimating e, 3.8 New York City's population (exercises), 3.9 Hurricane Katrina's wind speeds (review) | 3.74–3.83 |

## What is new

- The first chapter that is derivatives: `derivative` is the chapter's main type, worn by f′, f″, m_tan, the difference quotient Q, every rate (velocity, acceleration, speed, the instantaneous and average rates of change, the population growth rate, marginal cost, revenue and profit) and the graph of f′. Applied quantities wear their mathematical type (position, cost, revenue, profit, population and temperature are `function`). 58 concepts, every glossary word among their `terms`; prerequisite edges go into Chapter 1 (function, composite and inverse functions, the power, exponential and logarithmic functions, the trigonometric identities) and Chapter 2 (secant, tangent line, limit, the limit laws, one-sided limits, continuity at a point, the trigonometric limits).
- Tangent and secant lines wear `line` (the concept `tangent-line` is typed `line` in Chapter 2's rows); their slopes wear `derivative`. This changes Chapter 2's reading, where the tangent wore `derivative`: here the line is a line and its slope a derivative.
- Symbols: the primes are rows of their own (`f_prime` f′ `\kfprime`, `f_dprime`, `f_tprime`, `f_n`, `g_prime`, `h_prime`, `j_prime`, `s_prime`, `s_dprime`, `y_prime`, `P_prime`, `T_prime`, `B_prime`, `A_prime`, `f_inv_prime`), and Leibniz's `dy/dx` `\kdydx`, `d2y/dx2`, `dy/du`, `du/dx`. `a` (Chapter 2's ink "number a") and `C` (Chapter 1's vertical shift) took macros `\ka`, `\kC` so that the acceleration a(t) and the cost C(x) can wear their types; a section where they mean the old thing has a variables row with no concept and they stay ink.
- h is three things: the increment of the difference quotient (3.1 on, ink, `redefines` against 1.3's daylight function and 2.2's third function), a function h(x) in 3.3's examples, and the composite h(x) = f(g(x)) of 3.6 (`function`). k is the constant of the constant multiple rule (3.3, ink) and a function k(x) in 3.3's examples and the triple composite of 3.6. The section agent writes `\kh` / `\kk` only where its variables row types the letter.
- The figures are graphs of a function and something derived from it: a tangent, a secant, the graph of f′. The library has `F.plot`, `F.tangent`, `F.secant`, `F.drag`; the chapter's new need is a derivative tracer (a point dragged along f draws its tangent, and the slope lands as a point on a graph of f′ below, leaving the trace of f′ behind it), wanted by 3.2, 3.5 and 3.9 (see `## Wanted from figlib`).

## Sketches to replace and photographs

Every numbered graph is replaced by a live figure drawn from the book's function (config 18); where the book draws no formula (3.3, 3.4, 3.8, 3.11, 3.22, 3.28) the plan names a stand-in close to the sketch. Folds the plans take: 3.3 + 3.4 (one secant sliding into the tangent, in its x-form and its h-form), 3.5's four zoom panels (one window closing on (1, 1)), 3.12 + 3.13 (the derivative traced from the function, a choice of the book's two functions), 3.14 + 3.15 + 3.16 (three ways to fail, one choice each), 3.23 + 3.24 (the particle's velocity sign and path), 3.33 + 3.34 (the base b slid until the tangent at 0 has slope 1). The weight on a spring (Figure 3.9) is drawn live as the moving weight beside its graph sin t. Figure 3.29's triangle is a faithful copy drawn live.

Photographs: Figure 3.1 (the Venom, opener) kept; Figure 3.10 (the same picture inside Example 3.8) kept, since the example points at it; Figure 3.2 (Newton and Leibniz) kept, since the text points at it ("whose images appear in Figure 3.2"); Figure 3.20 (the grandstand) kept in the Student Project, which points at it.

## Notes and media

Four media notes are dropped and named in `notes` (config 14): 3.1's derivative applet (20_calcapplets) and tangent-line site (20_diffmicros), 3.4's rate-of-change demonstration (20_chainrule) and 3.6's chain-rule animation (20_chainrule2). They seed the secant-to-tangent figure, the local-linearity zoom, the amount-of-change figure and the chain-rule Sim. 3.3's Student Project (Formula One Grandstands, Figures 3.20 and 3.21) is a note with its six questions (config 15). The proofs of 3.2 (differentiability implies continuity), 3.3 (power, sum, product and extended power rules), 3.5 (the derivative of sin x), 3.6 (the chain rule, informal), 3.7 (rational exponents) and 3.9 (ln x and the general rules) stay under their theorem (config 9). Problem-Solving Strategies: 3.6 (applying the chain rule), 3.8 (implicit differentiation), 3.9 (logarithmic differentiation), each a note and a `skill`. Cross-module references: the intro's "(see Example 3.8)" is a link `/calculus/ch03/3.1/#3.1-<example id>`; 3.5's "Introduction to Limits" and 3.9's "Introduction to Functions and Graphs" are plain text, as Chapter 2 kept them.

## Exercises that belong to another section

The Chapter Review Exercises (367–391) are printed at the end of 3.9 and placed with the section that introduces what each tests (config 11), `source_section` 3.9:

- 3.1: 391 (estimate the derivative of Katrina's wind speed at hour 83, keyed); 390 (unkeyed estimate) left out.
- 3.2: 367 and 369 (true or false: every function / a continuous function has a derivative, keyed), 371 (a derivative by the limit definition, keyed), 387 (draw the derivative, answer image); 368 and 370 (true or false, unkeyed) kept with an AI-marked approach; 372 and 386 (unkeyed computational) left out.
- 3.3: 373 (keyed); 374 left out.
- 3.5: 377, 389 (keyed); 378, 388 left out.
- 3.7: 379 (keyed); 384 left out.
- 3.8: 380 (unkeyed implicit derivative) left out.
- 3.9: 375, 381, 383, 385 (keyed); 376, 382 left out.

Unkeyed even section exercises are judged per plan under config 12. Kept with approaches: 3.1's 42 and 44 (show a derivative does not exist); 3.2's 74 and 76 (show not differentiable), 90, 92, 94, 98 and 100 (describe what a quotient or a derivative means, with units); 3.5's 205, 206, 207 (derive a derivative with the quotient rule) and 208 (prove d/dx cos x = −sin x); 3.9's 366 if its questions are explanations. Every other unkeyed exercise is computational and left out, named in `exercise_notes`.

## Rule 23: what would make this chapter stunning

A reader should feel a derivative as a slope that lives at every point. A point slides along x² toward (3, 9) and the secant through it swings into the tangent, its slope ticking 6.1, 6.01, 6.001; switching to the h-form, the same secant closes as h shrinks from either side. Zooming on √x at (1, 1) the curve straightens until it is its tangent line, which is the whole idea of a derivative in one gesture. Then the tangent rides the curve and drops its slope as a dot onto a second graph below, and the dot leaves f′ behind it: the reader draws the derivative by moving the tangent, and sees f′ cross zero exactly where f turns. At |x|, ∛x and x sin(1/x) the same machine fails three ways, the left and right secants refusing to agree, the tangent standing up, the secant spinning. In 3.4 a particle runs along its axis while its s(t) graph is traced, turning at t = 2 and t = 4 where v changes sign. In 3.6 the chain rule becomes two stretchings in a row: a small nudge of x is stretched by g′ into a nudge of u and again by f′ into a nudge of y. In 3.9 the base b slides from 2 to 3 and the tangent of bˣ at 0 tilts through slope 1 exactly at e. Nothing needs 3D (config 23); what makes it stunning is the tangent moving, which no still can show.

## Wanted from figlib

- A derivative tracer (name for the figure agent: `F.deriv`, or a pattern on `F.tangent` + `F.plot`): a point dragged along f draws the tangent there (`line`) and, on a second graph below on the same x-range, a point at (x, f′(x)) in `derivative`, with the part of f′ already passed drawn and the rest faint. 3.2 (Figures 3.12 + 3.13 and Example 3.13), 3.5 (Figure 3.27) and 3.9 (Figure 3.35) use it.
- One-sided secants: `F.secant` from both sides of a at once (left in one decoration, right in another), so a corner shows two slopes that do not agree (3.2's Figure 3.14).
- A zoom whose window closes on a point on a slider, `axes(…, {nice: true})` as the interactive-figures guide allows when a plan line names it (3.1's Figure 3.5; the zoom is the lesson there, unlike 2.3's squeeze).
- An implicit-curve plot (contour of F(x, y) = 0 on the canvas) for 3.8's folium of Descartes and the exercise curves; the circle and ellipse can be parametrised, the folium too (x = 3t/(1 + t³), y = 3t²/(1 + t³)), so the part is optional.
