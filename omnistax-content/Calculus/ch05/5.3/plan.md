# Plan: 5.3 The Fundamental Theorem of Calculus (m53632)

Source: `source.md`, converted with `tools/convert.py 5`. Status: built 2026-10-12 straight through (config 2 waives the review for this run; decisions reported afterwards). Template: `ch01/1.1`.

Six objectives, three opening paragraphs, three theorems with their proofs, Figures 5.26–5.31, Examples 5.15–5.22, Checkpoints 5.14–5.20, a Student Project (A Parachutist in Free Fall), three Key Equations rows, three Key Concepts, 63 section exercises (31 keyed), 4 glossary terms, one media note.

## Sub-concepts (page headers)

The book's headers are kept: opening paragraphs `p#ftc-intro` (the Fundamental Theorem named; the Newton media note dropped); `mvt` **The Mean Value Theorem for Integrals** (the theorem `mvt-integrals`, its proof, the Sim, Examples 5.15 and 5.16 with Figures 5.26 and 5.27); `ftc1` **Fundamental Theorem of Calculus Part 1: Integrals and Antiderivatives** (the theorem `ftc-part-1`, its proof, the Sim, Examples 5.17–5.19); `ftc2` **Fundamental Theorem of Calculus, Part 2: The Evaluation Theorem** (the theorem `ftc-part-2`, the evaluation notation, its proof, Examples 5.20–5.22 with Figures 5.28 and 5.29, the Student Project `parachutist` with Figures 5.30 and 5.31).

## Concept nodes (merged by the prep)

Introduced: idea `fundamental-theorem-of-calculus`; results `mean-value-theorem-for-integrals` (two forms), `fundamental-theorem-of-calculus-part-1` (two forms), `fundamental-theorem-of-calculus-part-2` (two forms, with the evaluation notation; term "evaluation theorem"). Uses: `average-value-of-a-function`, `extreme-value-theorem`, `integral-comparison-theorem`, `intermediate-value-theorem`, `absolute-extremum`, `derivative`, `antiderivative`, `chain-rule`, `mean-value-theorem`, `power-rule-for-integrals`, `net-signed-area`, `regular-partition`.

## Colour, referents and function tokens

f wears `function`; F and the accumulated area `integral` (the variables row F names `antiderivative`); F′ and g′ `derivative` (rows on `derivative-function`); g of Example 5.17 is an integral with a variable limit, `antiderivative`, and only g(x), g(r) take the macro, so the g(t) of the skating race stays plain; c and the point (c, f(c)) `point`; f_ave `\kfave`. Exercise 205's F(θ) is a force and is set plain. No referents. Function tokens: 8 − 2x, x², x/2, 2x² − 1, and the skaters' 5 + 2t and 10 + cos(πt/2).

## Figures

- `sim-mean-value` · Sim · `mean-value-theorem-for-integrals`, `average-value-of-a-function` · value add: variation: Figure 5.2's curve over [a, b] (a 0.3–2.9, b 3.1–5.7, defaults 1 and 5); the region under the curve, the dashed rectangle of height f_ave with the same area, the dashed levels m and M, and every c where f(c) = f_ave, one to three of them as the interval changes · arrows: none · still · headline "On [1.00, 5.00]: m = 2.15 ≤ average 3.00 ≤ M = 3.85, taken at c = 3.00." · readout f_ave = (1/(b − a))∫ f = area/(b − a) = f(c) · graph alone · 2D. Rule 14: the theorem is a result the section introduces and the book draws it only through two examples on monotone functions, where c is unique.
- `fig-average-line` · Figure 5.26 (Example 5.15) · standardisation only: 8 − 2x, the level 4 on [0, 4] with the region under it, (2, 4) marked · still · 2D.
- `fig-average-parabola` · Figure 5.27 (Example 5.16) · standardisation only: x² with the region on [0, 3] and (√3, 3) · still · 2D. Figures 5.26 and 5.27 are not folded: two functions, two examples.
- `sim-ftc` · Sim · `fundamental-theorem-of-calculus-part-1`, `antiderivative` · value add: variation and a second graph: above, f(t) and the signed area from a to x; below, F(x) = ∫ₐˣ f(t) dt traced to x with its tangent (`line`), whose slope is f(x) (`derivative` in the readout). Choice of integrand: Example 5.17's 1/(t³ + 1) from a = 1, or Example 5.20's t² − 4 from a = −2 (where F(2) = −32/3 is that example's integral); x dragged on f (`F.drag`), each choice with its own fixed axes · arrows: none · still · headline "x = 2.50: the area from 1 to x is F(x) = …, and F changes at the rate f(x) = …, the height of f there." · readout F(x) = ∫ f = value, F′(x) = f(x) = value · two graphs stacked · 2D. Rule 14: Part 1 has no figure in the book; this draws the accumulation the theorem is about.
- `fig-negative-integral` · Figure 5.28 (Example 5.20) · standardisation only: t² − 4, the region below the axis on [−2, 2] · still · 2D.
- `fig-root-quotient` · Figure 5.29 (Example 5.21) · standardisation only: (x − 1)/√x, the region on [1, 9] · still · 2D.
- `fig-skydivers`, `fig-wingsuit` · Figures 5.30, 5.31 · photos, kept with the book's captions and credits: the project's narrative opens on the first, and the text points at the second.

Extra simulations weighed and dropped: the roller-skating race of Example 5.22 as two skaters on a track (its checkpoint asks who leads at 3 seconds, which the motion would show).

## Exercises

- Checkpoints 5.14–5.20 inline after Examples 5.15–5.21 and 5.22.
- Section exercises 144–206: the 31 odd ones keyed and kept; 165's key misprints its upper limit (correction note). Even ones kept with AI-written answers: 144, 146, 200, 202 (explanations); the computational evens left out and named in `exercise_notes`.
- Review exercises set here (`source_section` 5.7): 442 (an AI-written answer, True by Part 1), 443 and 445 (L₄, R₄ and the exact value), 455 and 457 (derivatives of integrals).
- Sheets: Example 5.20's "find the antiderivative of the function" links the Integral Calculator with t² − 4.

## Wanted at chapter level

Applied by this chapter's agent: variables anchors (f, a, b, c, f_ave → `5.3-mvt-integrals`; m, M → `5.3-mvt`; F, F′ → `5.3-ftc-part-1`; g, g′ → Example 5.17; u → Example 5.18) and forms anchors (the two MVT forms, the two Part 1 forms, `eq-ftc-part-2` → `5.3-ftc-part-2`, `eq-evaluation-notation` → `5.3-ftc2`). Done. Review exercises in the chapter pass.


## Derivations

- The Mean Value Theorem for Integrals · Proof · score 3 · built as drv-mean-value-theorem-for-integrals (the extreme-value sentence stays; the comparison, division and intermediate-value lines are the derivation)
- Fundamental Theorem of Calculus, Part 1 · Proof · score 3 · built as drv-fundamental-theorem-part-1 (the difference quotient worked to the average over [x, x + h], the mean value theorem for integrals beside it, joined in the limit; the book's ∫ f(x)dx from x to x + h is written with t, the node's note says so)
- The Fundamental Theorem of Calculus, Part 2 · Proof · score 2 · built as drv-fundamental-theorem-part-2 (the telescoping sum and the Mean Value Theorem on each subinterval joined, then the limit; the partition sentence stays; the book's i = 0, 1, …, n for the subintervals is corrected in the node's note)

## Added 2026-10-19 (3Blue1Brown-informed changes)

- `sim-ftc` · Sim · `fundamental-theorem-of-calculus-part-1`, `average-value-of-a-function` · value add: variation: a dashed chord of F from (a, 0) to (x, F(x)) whose slope (F(x) − F(a))/(x − a) is the average value f_ave of f on [a, x], drawn as a dashed level line over [a, x] on f's graph (both in `function`, the type of f_ave, dashed [10, 10] as averages are); the tangent's slope is f(x), the chord's the average of f, so the two slopes of F are the two heights of f · arrows: none · still · choice and x as before · headline unchanged · readout: F(x), F′(x) = f(x), and (F(x) − F(a))/(x − a) = F(x)/(x − a) = f_ave with the numbers (dropped at x = a, where the chord has no length) · two graphs stacked · 2D.
