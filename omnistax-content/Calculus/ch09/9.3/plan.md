# Plan: 9.3 The Divergence and Integral Tests (m53754)

Source: `source.md`. Status: built 2026-10-12 straight through (config 2). Template: `ch01/1.1`.

Three objectives, one opening paragraph, one definition note, three theorem notes, Figures 9.12–9.15, Examples 9.13–9.16, Checkpoints 9.12–9.15, Equations 9.8–9.10, four Key Concepts, three Key Equations, 56 section exercises (28 keyed), 4 glossary terms.

## Sub-concepts (page headers)

The book's headers: `p#tests-intro`; `divergence-test` **Divergence Test** (Equation 9.8, the theorem `divergence-theorem`, Example 9.13); `integral-test` **Integral Test** (the harmonic series and Σ1/n² as rectangles, Figures 9.12–9.14, the theorem `integral-theorem`, Example 9.14); `p-series` **The p-Series** (the definition note `p-series-definition`, Equation 9.9, Example 9.15); `estimating` **Estimating the Value of a Series** (the theorem `remainder-theorem` with Equation 9.10, Figure 9.15, Example 9.16).

## Concept nodes (merged by the prep)

Introduced: `divergence-test`, `integral-test`, `p-series`, `convergence-of-p-series`, `remainder-of-a-series`, `remainder-estimate-for-the-integral-test`. Uses: `partial-sum`, `convergence-of-a-series`, `harmonic-series`, `divergence-of-the-harmonic-series`, `improper-integral`, `monotone-convergence-theorem`, `sum-of-a-geometric-series`, `natural-logarithm`.

## Colour, referents and function tokens

Sₖ `series`, the sum S `limit`, aₙ `sequence`, f `function`, the integrals `integral`, R_N `error` (`\kR_{N}`); p, N, k in ink. No referents. Function tokens on f(x) = 1/x, 1/x², and the integrands the examples graph.

## Figures

- `sim-integral-test` · Figure 9.12 + 9.13 + 9.14 · `integral-test`, `convergence-of-p-series`, `p-series` · value add: variation: f(x) = 1/xᵖ with p on a slider (0.5 to 3, detents at the book's 1 and 2, a dashed circle at p = 1 where ∫₁^∞ stops being finite), the terms aₙ = 1/nᵖ as unit-width rectangles placed by a choice: on [n, n + 1], over the curve (Figure 9.12, 9.14(b): Sₖ > ∫₁^{k+1} f), or on [n − 1, n], under it (Figure 9.13, 9.14(a): Sₖ < a₁ + ∫₁ᵏ f); k on a slider (1 to 20, default the book's 5), the x-range following k (0 to max(6, k + 1)); the readout writes the inequality with the live numbers and ∫₁^∞ 1/xᵖ dx = 1/(p − 1) or ∞ · arrows: none · still · choice, sliders p, k (untyped) · headline "p = 1: S₅ = 2.2833 > ln 6 = 1.7918, and ∫₁^∞ 1/x dx is infinite, so the harmonic series diverges." · graph alone · 2D. The three sketches draw one scene, rectangles on a decreasing curve, three times; one live drawing with the placement as a choice and p across 1 reads better and keeps every number.
- `sim-remainder-estimate` · Figure 9.15 · `remainder-estimate-for-the-integral-test`, `remainder-of-a-series` · value add: variation: the book's sketch prints no f; Example 9.16's series Σ1/n³ supplies it, f(x) = 1/x³. N on a slider (1 to 12, default 3); the tail terms a_{N+1}, a_{N+2}, … as rectangles in `error`, placed by a choice as the book's two panels are: (a) each rectangle a_{n} on [n − 1, n], under the curve from N on, so R_N < ∫_N^∞ f; (b) each on [n, n + 1], over the curve from N + 1 on, so R_N > ∫_{N+1}^∞ f; the readout writes ∫_{N+1}^∞ < R_N < ∫_N^∞ with 1/(2(N + 1)²), R_N and 1/(2N²) · arrows: none · still · choice, slider N · the frame follows N (a zoom: N − 1 to N + 7, and 0 to 1.15 f(N), since the tail shrinks like 1/N³) · headline "N = 3: the tail's rectangles fit under the curve from 3, so R₃ = 0.0400 < 0.0556." · graph alone · 2D.

## Extra simulations (rule 15)

None: a divergence-test Sim (terms not tending to 0 push the partial sums on) would repeat 9.2's `sim-partial-sums` with Σn/(n + 1).

## Exercises

- Checkpoints 9.12–9.15 inline after Examples 9.13–9.16.
- Section exercises 138–193: the 28 odd keyed ones kept; 188 (present a procedure) is kept with an AI-marked answer. Left out, unkeyed and computational: 138–150 even (divergence test), 152, 154, 156 (p-series), 158–164 even (integral test), 166, 168 (as p-series), 170, 172 (remainder bounds), 174, 176 (minimum N), 178, 180, 182 (N and the sum), 184 (a limit), 186 (coupon collector), 190 (an estimate), 192 (seconds to 100).
- Review exercises set here, `source_section` 9.6: 379, 380 (380 with an AI-marked answer).

## Corrections

None found in the text.

## Wanted at chapter level

- Anchors: variables a_seq, n, S, S_sum → `9.3-divergence-test`; f → `9.3-integral-test`; p → `9.3-p-series-definition`; R → `9.3-estimating`. Forms: eq-divergence-test → `9.3-divergence-test`; eq-integral-test → `9.3-integral-theorem`; eq-p-series → `9.3-p-series-definition`; eq-p-series-test → `9.3-p-series`; eq-remainder → `9.3-estimating`; eq-integral-remainder-estimate → `9.3-remainder-theorem`.
