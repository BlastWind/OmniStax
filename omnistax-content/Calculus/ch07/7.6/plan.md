# Plan: 7.6 Numerical Integration (m53685)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-12. Template: `ch01/1.1`.

Five objectives, an opening paragraph, one definition note, four theorem notes and one rule note (Equations 7.10–7.15), Figures 7.13–7.16, Examples 7.39–7.46, five checkpoints (7.22–7.26), six Key Equations, four Key Concepts, 48 section exercises (24 keyed), six glossary terms (the book runs "trapezoidal rule" into the Simpson's rule entry).

## Sub-concepts (page headers)

0. `numerical-intro`: introduces `numerical-integration`.
1. `midpoint` **The Midpoint Rule**: Riemann sums recalled, the term paragraph `midpoint-term`, the theorem `midpoint-theorem` (Equation 7.10), Figure 7.13, Examples 7.39, 7.40, Checkpoint 7.22.
2. `trapezoidal` **The Trapezoidal Rule**: Figure 7.14 + 7.15, the derivation, `trapezoidal-term`, the theorem `trapezoidal-theorem` (Equation 7.11), the paragraph `concavity-paragraph` (Tₙ = ½(Lₙ + Rₙ), concavity), Example 7.41, Checkpoint 7.23.
3. `error` **Absolute and Relative Error**: the definition note `error-definition`, Examples 7.42, 7.43, Checkpoint 7.24, the theorem `error-bounds-theorem` (Equations 7.12, 7.13), Example 7.44, Checkpoint 7.25.
4. `simpson` **Simpson’s Rule**: the derivation, Figure 7.16, the theorem `simpson-theorem` (Equation 7.14), S₂ₙ = ⅔Mₙ + ⅓Tₙ, the rule `simpson-error-rule` (Equation 7.15), Examples 7.45, 7.46, Checkpoint 7.26.

## Concept nodes

Introduced: `numerical-integration`, `midpoint-rule` (symbol M, form `eq-midpoint-rule`), `trapezoidal-rule` (T; `eq-trapezoidal-rule`, `eq-trapezoidal-average`), `concavity-and-the-trapezoidal-and-midpoint-rules` (idea), `absolute-error` (`eq-absolute-error`), `error-bounds-for-the-midpoint-and-trapezoidal-rules` (two forms), `simpsons-rule` (S; `eq-simpsons-rule`, `eq-simpsons-weighted-average`), `error-bound-for-simpsons-rule`. Reinforced: `relative-error` (Chapter 4's, which 4.2 introduces; the definition here restates it). Uses: `riemann-sum`, `partition`, `left-endpoint-approximation`, `right-endpoint-approximation`, `concavity`, `higher-order-derivative`, `quadratic-function`, `arc-length`.

## Colour

`integral` for Mₙ, Tₙ, Sₙ, Lₙ, Rₙ (written `\kM_{n}` and so on, as Chapter 5 writes `\kL_{n}`), the rectangles, trapezoids and the area under the parabolas; `error` for the shaded slivers and the errors; `function` for f and p; `derivative` for f″ and f⁽⁴⁾. M of a bound, Δx, n, xᵢ, mᵢ, A and B stay ink.

## Figures

The book draws no formula for its curve; a stand-in that rises and falls, f(x) = 1 + 3 sin(πx/5) on [0.5, 4.5], keeps its look, with the book's axis labels a = x₀, m₁, x₁, … for n ≤ 4.

- `sim-midpoint` · Figure 7.13 · `midpoint-rule` · variation: n and the function (the sketch, x² of Example 7.39, √(1 + x²) of Example 7.40, e^{x²} of Example 7.44; 1/x is left off, since the checkpoints ask for it) · still · choice, slider n (1 to 16, detents 4, 6, 9) · headline Mₙ, the integral, the error · graph alone · 2D. Readout Mₙ; note the error within its bound.
- `sim-trapezoid` · Figure 7.14 + 7.15 · `trapezoidal-rule`, `concavity-and-the-trapezoidal-and-midpoint-rules` · variation and intuition: trapezoids or the midpoint rectangles over the same subintervals, the error shaded, over- and underestimates read off the concavity · choice of rule, choice of function, slider n · 2D. Folded: Figure 7.15 is the same scene with the two rules side by side, cited a paragraph later in the same subsection.
- `sim-simpson` · Figure 7.16 · `simpsons-rule`, `error-bound-for-simpsons-rule` · variation: n through the even numbers, one dashed parabola per pair, the error against M(b − a)⁵/(180n⁴) · choice of function (the sketch, x³ of Example 7.45, √(1 + x²) of Example 7.46), slider n (2 to 12, step 2) · 2D.

## Exercises

- Checkpoints 7.22–7.26 inline after Examples 7.40, 7.41, 7.43, 7.44, 7.46; numbers.
- Section exercises 299–346: 24 odd keyed and kept; 342 (why numerical methods), 344 and 346 (multiple choice on Simpson's rule) kept with AI-marked approaches; 21 even computational ones left out.
- Review exercises 410 (AI-marked true or false), 423, 425 held here; 424 left out.
- Corrections: the Simpson derivation's combined line (∫ from x₂ to x₄ printed for x₀ to x₄, = for ≈), Example 7.45's S₄ for S₂, Checkpoint 7.24's T₂ for M₂, Checkpoint 7.25's cited bound (Equation 7.13 for 7.12).

## Extra simulations (rule 15)

None beyond the three: an error-versus-n log plot was weighed and left out, since each readout already sets the error beside its bound.

## Wanted at chapter level

- forms `eq-midpoint-rule` → `7.6-fs-id1165040697119`, `eq-trapezoidal-rule` → `7.6-fs-id1165041762506`, `eq-trapezoidal-average` → `7.6-concavity-paragraph`, `eq-absolute-error` → `7.6-error-definition`, `eq-midpoint-error-bound` → `7.6-fs-id1165041827796`, `eq-trapezoidal-error-bound` → `7.6-fs-id1165041814747`, `eq-simpsons-rule` → `7.6-fs-id1165041953720`, `eq-simpsons-weighted-average` → `7.6-simpson`, `eq-simpsons-error-bound` → `7.6-fs-id1165042109950`.
- variables of 7.6 (M, T, S, L, R, P, p, Δx, n, f, f″, f⁽⁴⁾) → `7.6-midpoint` and the theorem ids.

## Derivations

- The Trapezoidal Rule, the block before the theorem (four trapezoids, n = 4) · score 1 · built as drv-trapezoidal-rule (replaces the block and the recalled area formula, now its start; "Generalizing" and the theorem stay)
- The remark T_n = ½(L_n + R_n) · score 4 · not built: three moves, under the four-move floor
- Theorem · Error Bounds for the Midpoint and Trapezoidal Rules (7.12, 7.13), stated without proof · score 12 · not built: the proof rests on mathematics the book never states (an error term for interpolation and a mean value theorem for integrals beyond Taylor's theorem of 10.3)
- Example 7.44 · score 3 · not built: a worked example substituting into (7.12)
- Simpson's Rule, the derivation before the theorem · score 2 · built as drv-simpsons-rule (three nodes: the first pair, the next pair, the two combined; the combined line follows the correction c-simpson-combined, whose marker now stands after the derivation)
- The remark S_2n = (2/3)M_n + (1/3)T_n ("it can be shown") · score 6 · built as drv-simpson-as-weighted-average, after the remark
- Rule · Error Bound for Simpson's Rule (7.15), stated without proof · score 11 · not built: as 7.12 and 7.13, its proof rests on mathematics the book never states
- Ruling (coordinator): the Simpson correction is carried by the derivation node's `note` alone; the marker after the derivation and the `c-simpson-combined` footnotes row were removed.
