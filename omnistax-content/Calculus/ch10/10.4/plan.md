# Plan: 10.4 Working with Taylor Series (m53769)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-12. Template: `ch01/1.1`.

Five objectives, an opening paragraph, one definition note, Table 10.1, Equations 10.6–10.11, Figures 10.10–10.12, Examples 10.17–10.24, seven checkpoints (10.16–10.22), four Key Concepts, 79 section exercises (39 keyed), the 26 Chapter Review Exercises (253–278), two glossary terms.

## Sub-concepts (page headers)

0. `working-intro`: the opening paragraph.
1. `binomial` **The Binomial Series**: `binomial-series-term`, the expansions for r = 0, …, 4, `binomial-coefficient-term` (Equations 10.6, 10.7), the derivatives of (1 + x)ʳ, Equation 10.8, the coefficient for any real r, Equation 10.9 and its interval, the definition note `fs-id1167023778748`, Example 10.17 with Figure 10.10, Checkpoint 10.16.
2. `common` **Common Functions Expressed as Taylor Series**: the paragraph that presents Table 10.1, the table `fs-id1167024047165` (kept in the text, config 24), Example 10.18, Checkpoint 10.17, Example 10.19, Checkpoint 10.18. The words "we summarize the results of these series" link to the Maclaurin sheet (`/calculus/sheets/maclaurin/`).
3. `differential` **Solving Differential Equations with Power Series**: y′ = y, `power-series-solution-term`, Example 10.20, Checkpoint 10.19, `airy-term` (Airy's equation), Example 10.21, `sim-airy`, Checkpoint 10.20.
4. `nonelementary` **Evaluating Nonelementary Integrals**: `elementary-term` (elementary function, nonelementary integral), Example 10.22, Checkpoint 10.21, `normal-term` (Equation 10.10, Figure 10.11, Equation 10.11), Example 10.23, Checkpoint 10.22, `elliptic-term`, Example 10.24 with Figure 10.12, the closing paragraph.

## Concept nodes

Introduced: `binomial-coefficient` (forms `eq-binomial-coefficient-integer` Equation 10.6, `eq-binomial-expansion` Equation 10.7, `eq-binomial-coefficient`), `binomial-series` (`eq-binomial-series` Equation 10.9, `eq-binomial-series-coefficients` Equation 10.8), `maclaurin-series-of-common-functions` (five forms, Table 10.1), `power-series-solution-of-a-differential-equation`, `airys-equation` (`eq-airy`), `elementary-function`, `nonelementary-integral`, `normal-distribution` (`eq-normal-probability` Equation 10.10, `eq-normal-standardized` Equation 10.11), `elliptic-integral` (`eq-elliptic-integral`), `period-of-a-pendulum` (`eq-pendulum-period`, `eq-pendulum-two-terms`). Uses: `maclaurin-series`, `maclaurin-polynomial`, `taylor-polynomial`, `taylors-theorem-with-remainder`, `combining-power-series`, `term-by-term-differentiation-and-integration`, `uniqueness-of-power-series`, `interval-of-convergence`, `ratio-test`, `alternating-series-test`, `remainder-of-an-alternating-series`, `separable-differential-equation`, `initial-value-problem`, `differential-equation`, `antiderivative`, `definite-integral`, `hyperbolic-functions`.

## Colour

`series` for a binomial, Taylor or Maclaurin series named as such and p₃ (`\kp_{3}`); `function` for f (`\kf`) and the solution y (`\kyfn`, with y′ `\kyprime` and y″ `\kydprime` in `derivative`); `derivative` for f′, f″, f‴, f⁽⁴⁾, f⁽ⁿ⁾; `error` for R₃ (`\kR_{3}`); `integral` for a nonelementary integral and the probability's integral where the text names them; `angle` for θ and θmax (`\ktheta`); `set` for intervals of convergence the text states and the Interval of Convergence column's entries stay as the table prints them. r, the binomial coefficients, cₙ, a, b, k, L, g, T, μ, σ, z stay ink.

## Figures

- `sim-binomial` · Figure 10.10 · `binomial-series`, `binomial-coefficient` · variation: the degree n and the exponent r, the book's r = 1/2, n = 3 the default; at a whole-number r the coefficients vanish past xʳ and the polynomial is (1 + x)ʳ exactly, so the nonnegative integers are dashed circles on r and landing on one closes the gap · arrows none · still · sliders r (−3 to 3, step 0.25, specials 0, 1, 2, 3), n (0 to 10, detents 3) · headline p_n(0.5) beside (1.5)ʳ · graph alone, the interval (−1, 1) marked in `set` · 2D. Readout p_n(x) written out; note Taylor's bound on |Rₙ(0.5)| (the book's 0.00244 at the default).
- Table 10.1 stays a `div.book-table` (rule: a table is never a figure).
- `sim-normal` · Figure 10.11 · `normal-distribution`, `nonelementary-integral` · variation: the ends a and b and the number of series terms; the area under the normal curve between them shaded in `integral`, the series estimate and its alternating-series bound in the readout; the default is Example 10.23's μ = 100, σ = 50, a = 100, b = 200 with six terms · arrows none · still · sliders a (0 to 200, default 100), b (0 to 250, default 200), N (1 to 10, default 6) · headline the estimate beside the area · graph alone · 2D.
- `sim-pendulum` · Figure 10.12 · `period-of-a-pendulum`, `elliptic-integral`, `binomial-series` · variation: θmax; the pendulum drawn at −θmax, the equilibrium position and θmax as the book draws it, beside a graph of the period against θmax, the elliptic integral's exact value beside the one-term estimate 2π√(L/g) and the two-term estimate 2π√(L/g)(1 + k²/4), which part as θmax grows · arrows none (the book draws positions, not a swing) · still: the lesson is the period's dependence on the amplitude, not the swing itself · slider θmax (5° to 170°, default 30°, the angle of exercise 249) · headline the three periods · scene left, graph right (a vertical scene beside its graph) · 2D. L = 10 m and g = 9.8 m/s², exercise 249's numbers, since the example prints none.
- `sim-airy` · Sim · `airys-equation`, `power-series-solution-of-a-differential-equation` · variation: the initial values a = y(0) and b = y′(0) and the degree N; the partial sums of Example 10.21's series close on the solution (computed numerically and drawn in `function`) over a window that grows with N, a function with no elementary formula seen as the limit of its series · arrows none · still · sliders a (−2 to 2, default 1), b (−2 to 2, default 0), N (1 to 40, default 7, the book's last term x⁷) · headline how far the partial sum stays within 0.01 of the solution · graph alone · 2D.
- Exercise answer images (`CNX_Calc_Figure_10_04_201/204/207.jpg`) stay in their solutions.

## Exercises

- Checkpoints 10.16–10.22 inline after Examples 10.17–10.23; open answers, hints as `hint`; 10.22 a number (0.3414).
- Section exercises 174–252: the 39 odd keyed ones kept; 199 (1.260), 201 (0), 237 (0.6827), 249 (6.453) are numbers, the rest open. Kept with an AI-marked approach: 232 (differentiate sinh x's series and compare with cosh x's). Left out, unkeyed and computational: 174–230 even, 234, 236 (show and plot a series solution; its plot needs a CAS), 238–252 even.
- Review exercises held here, `source_section` 10.4 (their own section): 267, 271, 273 (keyed), 275 (keyed "Answers may vary", an AI-marked proof), 256 (unkeyed true or false, with an approach). The rest are placed in 10.1–10.3 (see their plans); 258, 260, 262, 264, 266, 268, 270, 272, 274, 276, 278 are unkeyed and computational and are left out.
- Corrections under their cards: 185 (a binomial coefficient printed as a product), 195 (x³ printed for x² in the second term), 199 (2.2^(−2/3) printed for 2·2^(−2/3)), 205 (the left side should be sin(√x)/√x), 213 (the prompt's series for 1/√(1 − t²) and the key use (½ choose k); the series is Σ(−½ choose k)(−1)ᵏt²ᵏ, so sin⁻¹x = Σ(2n)!/(4ⁿ(n!)²) · x²ⁿ⁺¹/(2n + 1)), 235 (y′ printed for y″ and xy″ for x²y″), 237 (b = 100 printed for 110), 241 (a₂, a₃, a₅ carry the wrong sign: a₂ = −1/2, a₃ = −1/6, a₄ = 0, a₅ = 1/120), 247 (5x⁴/2128 printed for 5x⁴/128), 251 (9k⁴/256 printed for 9k⁴/64), r267 ((2n)! printed as 2n!).
- Corrections in the text: Checkpoint 10.18's key, Checkpoint 10.19's hint, Checkpoint 10.21's value, Example 10.20's 4c₃ for 4c₄, Example 10.23's "first five terms … 0.4922", Example 10.24's "1.3" for 1·3.

## Extra simulations (rule 15)

One picked: `sim-airy`, the view of a solution that exists only as a series. Weighed and left out: a Sim of Example 10.22's ∫₀¹e^(−x²) dx estimate, since `sim-normal` already cuts the same kind of series off term by term.

## Wanted at chapter level

- forms `eq-binomial-coefficient-integer` → `10.4-fs-id1167023717125`, `eq-binomial-expansion` → `10.4-fs-id1167023919069`, `eq-binomial-series-coefficients` → `10.4-fs-id1167023896721`, `eq-binomial-coefficient` → `10.4-binomial-coefficient-general`, `eq-binomial-series` → `10.4-fs-id1167024036610`, the five Maclaurin forms → `10.4-fs-id1167024047165`, `eq-airy` → `10.4-airy-term`, `eq-normal-probability` → `10.4-fs-id1167023806051`, `eq-normal-standardized` → `10.4-fs-id1167023782231`, `eq-elliptic-integral` → `10.4-elliptic-term`, `eq-pendulum-period`, `eq-pendulum-two-terms` → `10.4-fs-id1167024040533`.
- variables of 10.4: f, f′, f″, f‴, f⁽⁴⁾, f⁽ⁿ⁾ → `10.4-binomial`; p, R → `10.4-fs-id1167023918533`; y, y′, y″ → `10.4-differential`; θ → `10.4-fs-id1167024040533`.
- Review exercises land in all four sections with `mksection.py --with-review`.
- Applied in the chapter pass (2026-10-13): every anchor above set with `ost set`; review rows landed with `mksection.py --with-review`.

## Derivations

- The Binomial Series · the derivatives of (1 + x)^r and the coefficients (10.8) · score 5 · built as drv-binomial-series-coefficients (replaces the table of derivatives and (10.8); form eq-binomial-series-coefficients re-anchored to it)
- The Binomial Series · the ratio test for its interval · built as drv-binomial-series-interval (a thin printed block; the endpoint sentence stays as printed)
- Example 10.17 a · score 1 · not built: a worked example of the definition
- Example 10.18 b · score 4 · not built: a worked example combining two known series, every line printed
- Example 10.19 · score 4 · not built: a worked example, one term-by-term differentiation of Example 10.17's series
- Example 10.20 · score 5 · not built: a worked example of the section's own method (a power-series solution), every line printed
- Example 10.21 · score 4 · not built: the same method on Airy's equation, every line printed
- Example 10.22 · score 3 · not built: a worked example of the section's method
- Evaluating Nonelementary Integrals · (10.11) from (10.10) · score 4 · not built: one substitution z = (x − μ)/σ, under four moves
- Example 10.23 · score 3 · not built: a worked example of the section's method
- Example 10.24 · score 7 · built as drv-pendulum-period (the binomial series in the integrand, the first-order estimate, the bound on the terms it leaves out with the skipped "each coefficient is less than 1" and the geometric sum, and the two-term estimate through ∫sin²θ dθ; the footnote c-ex1024-dot became the node's note with the book's dropped first term)
