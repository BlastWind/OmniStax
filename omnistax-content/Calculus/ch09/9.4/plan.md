# Plan: 9.4 Comparison Tests (m53751)

Source: `source.md`. Status: built 2026-10-12 straight through (config 2). Template: `ch01/1.1`.

Two objectives, one opening paragraph, two theorem notes (one with a proof), Figure 9.16, Tables 9.1 and 9.2, Examples 9.17 and 9.18, Checkpoints 9.16 and 9.17, two Key Concepts, no Key Equations, 56 section exercises (28 keyed), 2 glossary terms.

## Sub-concepts (page headers)

The book's headers: `p#comparison-intro`; `comparison-test` **Comparison Test** (Σ1/(n² + 1) against Σ1/n², Σ1/(n − 1/2) against Σ1/n, Figure 9.16, Tables 9.1 and 9.2, the theorem `comparison-theorem` with its proof, Example 9.17); `limit-comparison-test` **Limit Comparison Test** (the theorem `limit-comparison-theorem`, Example 9.18).

## Concept nodes (merged by the prep)

Introduced: `comparison-test`, `limit-comparison-test`. Uses: `p-series`, `convergence-of-p-series`, `geometric-series`, `sum-of-a-geometric-series`, `harmonic-series`, `monotone-convergence-theorem`, `partial-sum`, `lhopitals-rule-infinity-over-infinity`.

## Colour, referents and function tokens

aₙ, bₙ `sequence`, Sₖ `series`, L `limit`; M, N in ink. Referents: `cmp-given` (the series being tested, Σ1/(n² + 1) or Σ1/(n − 1/2)) and `cmp-known` (the series it is compared with, Σ1/n² or the harmonic series): the text names them apart and Figure 9.16 draws one row of partial sums each. No function tokens (the prose gives no function of x to graph).

## Figures

- `sim-comparison` · Figure 9.16 · `comparison-test` · value add: variation: the book's two panels on a choice, (a) Σ1/(n² + 1) below Σ1/n² and (b) Σ1/(n − 1/2) above Σ1/n; the partial sums of both series as dots in their referent colours, the terms below them on the same n-axis, k on a slider (1 to 30, default 8, the reach of Tables 9.1 and 9.2); the readout writes the two partial sums at k and the inequality between them · arrows: none · still · choice, slider k · headline "k = 8: 0.9597 < 1.5274; the smaller partial sums are bounded by the convergent p-series." · graph beside graph · 2D.
- `sim-limit-comparison` · Sim · `limit-comparison-test` · value add: variation: the ratio aₙ/bₙ as dots against n, settling on L (dashed), for the section's pairs on a select: 1/(n² − 1) with 1/n² (L = 1); Example 9.18(a) 1/(√n + 1) with 1/√n; (b) (2ⁿ + 1)/3ⁿ with (2/3)ⁿ; (c) ln n/n² with 1/n (L = 0, no information), with 1/n² (∞, no information) and with 1/n^{3/2} (L = 0, converges); slider n (1 to 60) marks one ratio; the readout writes aₙ/bₙ at n and the test's conclusion · arrows: none · still · select, slider n · headline "n = 10: a₁₀/b₁₀ = 1.0101; the ratio settles on L = 1, so both series converge." · graph alone · 2D.

## Extra simulations (rule 15)

`sim-limit-comparison` (picked: the limit comparison test is a result the section states with no figure, and the three tries of Example 9.18(c) are a view the prose only computes). None else.

## Exercises

- Checkpoints 9.16 and 9.17 inline after Examples 9.17 and 9.18.
- Section exercises 194–249: the 28 odd keyed ones kept. Kept with AI-marked answers: 230 (explain), 236, 248 (does it necessarily converge, can you determine), 238 (complete the argument), 240 (prove), 244 (can she do it, and why), 246 (show). Left out, unkeyed and computational: 194–206 even (comparison test), 208–220 even (limit comparison test), 222, 224, 226, 228 (for which p, r, q), 232, 234 (does it converge), 242 (a largest value).
- Review exercises: none set here.

## Corrections

- Exercise 229's prompt prints the sum with no summand, Σ(nπ/2); the key reads it as Σ sin²(nπ/2)/n. Note under the card.
- Exercise 205's key writes √(n + 1/2) for √(n + 1). Note under the card.

## Wanted at chapter level

- Anchors: variables a_seq, b_seq, n, S → `9.4-comparison-test`; L, M → `9.4-limit-comparison-test`. Forms: eq-limit-comparison → `9.4-limit-comparison-theorem`.

## Derivations

- Comparison Test · Proof (part i) · score 3 · built as drv-comparison-test (part ii, "the contrapositive", left as the book's sentence; the book's "since the terms $a_{n}\ge0$" holds only from $n=N,$ a note on the node)
- Limit Comparison Test · justified in prose · score 6 · built as drv-limit-comparison-test (hidden: $\varepsilon=L/2$ for the case $L\ne0,$ then the book's own cases $0$ and $\infty;$ the prose kept, the host after the theorem)
- Example 9.18c · score 3 · not built: a worked example of the section's test
