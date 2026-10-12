# Plan: 4.10 Antiderivatives (m53621)

Source: `source.md`, converted with `tools/convert.py 4`. Status: plan; config 2 waives the review for this run, decisions reported afterwards. Built 2026-10-12.

Four objectives, an opening paragraph, two definitions, three theorems (the general form of an antiderivative, the power rule for integrals, the properties of indefinite integrals), Figures 4.85 and 4.86, Table 4.13, Equations 4.9–4.11, Examples 4.50 to 4.54 each with its checkpoint (4.49–4.53), two Key Concepts, 60 section exercises (30 keyed), the chapter's 28 Review Exercises (525–552), three glossary terms. One page.

## Sub-concepts (page headers)

0. `intro` (no header): reversing differentiation, rectilinear motion; "[Derivatives]" links to the Chapter 3 introduction.
1. `reverse-of-differentiation` **The Reverse of Differentiation**: the definition `antiderivative-definition`, 2x and x² + C, Corollary 2, the theorem `general-antiderivative`, Example 4.50 and its checkpoint. Introduces `antiderivative`, `general-form-of-an-antiderivative`.
2. `indefinite-integrals` **Indefinite Integrals**: the notation, the definition `indefinite-integral-definition` (integrand, variable of integration), the family of antiderivatives with Figure 4.85, the power rule `power-rule-for-integrals`, Table 4.13 (Appendix A linked to the Table of Integrals sheet, config 24), Example 4.51, sums and constant multiples, `integral-properties`, Example 4.52, their checkpoints. Introduces `indefinite-integral`, `power-rule-for-integrals`, `properties-of-indefinite-integrals`.
3. `initial-value-problems` **Initial-Value Problems**: differential equations, Equations 4.9–4.11, the initial condition, Figure 4.86, Examples 4.53 (sin x) and 4.54 (the decelerating car), their checkpoints. Introduces `differential-equation`, `initial-value-problem`.

## Corrections

- "d/dx(kf(x)) = k d/dx F(x) = kf′(x)" is meant as d/dx(kF(x)) = kF′(x) = kf(x) (`c-constant-multiple`).
- Example 4.53 writes the initial condition as "−cos x + C = 5"; it is taken at x = 0 (`c-initial-at-zero`).

## Colour, referents and function tokens

Types: `integral` for F, G and the indefinite integral's antiderivatives (the family F(x) + C), as merged; `function` for f; `derivative` for F′, G′, f′, dy/dx, v′; `point` for the initial point. s(t) wears `function`, v(t) and a(t) `derivative` (as 2.1 and 3.4). C, k and n are ink; y, the unknown solution, is ink. No referents: the family's members are told apart by C, on hover. Function tokens: the rules in x of the examples and checkpoints.

## Figures

- `sim-antiderivative-family` · Figure 4.85 · `general-form-of-an-antiderivative`, `antiderivative` · value add: variation, a view the text gives only in words: the family x² + C with one member picked by C, and at a point x every member's tangent drawn, all parallel with slope 2x, so "differ by a constant" is seen as "same slope everywhere" · arrows: none · still · sliders C (ink, −2 to 2, detents at the integers) and x (−2 to 2) · headline "At x = 1.00, every curve x² + C has slope 2.00: the tangent lines are parallel." · readout F(x) = x² + C, F′(x) = 2x · 2D.
- `sim-initial-value` · Figure 4.86 · `initial-value-problem`, `differential-equation` · value add: variation: the solution curves 2x³ + C, the reader moving C until the curve meets the initial point (1, 5), a dashed circle at C = 3 · still · slider C (−4 to 7) · readout y(1) = 2 + C · 2D. Checkpoint 4.52's −3/x + 5 is not drawn.

Table 4.13 stays in the text. Photographs: none. Exercise figures: none (the review's images go to their sections).

## Exercises

- Checkpoints 4.49–4.53 inline; 4.53's car answer is open (two parts).
- Section exercises 465–524: 30 keyed odd ones kept, 521 and 523 set as true-or-false choices. Kept with AI-marked approaches: 466 and 468 (show that F is an antiderivative), 522 and 524 (true or false, with counterexamples). 509–514 are standalone: no group stem. 26 even ones, computational, left out.
- Chapter Review Exercises 525–552 (`exploration.md` lists their homes): 545 is set here as a `review-exercise` with no `source_section`; the others land in their sections in the chapter pass; the 12 unkeyed computational ones are left out and named in this page's notes.

## Extra simulations (rule 15)

Judged and dropped: a slope-field Sim for dy/dx = 6x² (Chapter 8 draws direction fields; here the family is enough); a braking-car Sim for Example 4.54 (a(t) → v(t) → s(t) stacked; the example's two short computations carry it, and a speed slider would answer Checkpoint 4.53). None built.

## Wanted at chapter level

- variables `4.10/F`, `4.10/F_prime`, `4.10/G`, `4.10/G_prime` → `4.10-antiderivative-definition` (F, F′) and `4.10-integral-properties` (G, G′).
- forms `eq-antiderivative` → `4.10-antiderivative-definition`; `eq-general-antiderivative` → `4.10-general-antiderivative`; `eq-indefinite-integral` → `4.10-indefinite-integral-definition`; `eq-power-rule-for-integrals` → `4.10-power-rule-for-integrals`; `eq-integral-of-a-sum`, `eq-integral-of-a-constant-multiple` → `4.10-integral-properties`; `eq-initial-value-problem` → `4.10-initial-value-problems`.
- The review exercises of 4.1–4.9 land in the chapter pass.
