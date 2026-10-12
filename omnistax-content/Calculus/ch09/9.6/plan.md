# Plan: 9.6 Ratio and Root Tests (m53747)

Source: `source.md`. Status: built 2026-10-12 straight through (config 2). Template: `ch01/1.1`.

Three objectives, two opening paragraphs, two theorem notes (the ratio test with its proof), one problem-solving strategy, one media note (dropped, named in `notes`), Table 9.3 Summary of Convergence Tests, Examples 9.23–9.25, Checkpoints 9.21–9.23, the Student Project Series Converging to π and 1/π, three Key Concepts, no Key Equations, 62 section exercises (31 keyed), 2 glossary terms; the module also prints the Chapter Review Exercises 379–404.

## Sub-concepts (page headers)

The book's headers: `p#ratio-root-intro`; `ratio-test` **Ratio Test** (the theorem `ratio-theorem` and its proof, Example 9.23; its h3 Root Test with the theorem `root-theorem` and Example 9.24); `choosing` **Choosing a Convergence Test** (the strategy `choosing-strategy`, Example 9.25, Table 9.3, the project `series-for-pi`).

## Concept nodes (merged by the prep)

Introduced: `ratio-test`, `root-test`, `choosing-a-convergence-test`, `series-for-pi`. Uses: `absolute-convergence`, `sum-of-a-geometric-series`, `comparison-test`, `limit-comparison-test`, `divergence-test`, `integral-test`, `alternating-series-test`, `p-series`, `harmonic-series`, `lhopitals-rule-infinity-over-infinity`, `number-e`.

## Colour, referents and function tokens

aₙ, bₙ `sequence`, ρ `limit` (`\krho`), Sₙ `series`; N, R, ε in ink. No referents. No function tokens.

## Figures

- `sim-ratio-root` · Sim · `ratio-test`, `root-test` · value add: variation: the test on a choice (ratio, root) and the series on a select among the section's examples and checkpoints: 2ⁿ/n! (ρ = 0), nⁿ/n! (ρ = e), (n!)²/(2n)! (ρ = 1/4), n³/3ⁿ (ρ = 1/3), (n² + 3n)ⁿ/(4n² + 5)ⁿ (ρ = 1/4) and 1/n² (ρ = 1, no information); the upper panel draws |aₙ₊₁/aₙ| or ⁿ√|aₙ| as dots settling on ρ (dashed) beside the level 1, the lower one the partial sums, so a ρ below 1 is seen with sums that settle, above 1 with sums that run off, and ρ = 1 with nothing decided; slider n (1 to 30) marks one ratio or root · arrows: none · still · choice, select, slider n · headline "Ratio test on 2ⁿ/n!: at n = 5 the ratio is 0.3333, and ρ = 0 < 1, so the series converges absolutely." · graph beside graph · 2D.

## Extra simulations (rule 15)

None: a test chooser is a sheet planned for later (Table 9.3 stays the book's table); a Sim of the series for π would answer the Student Project.

## Exercises

- Checkpoints 9.21–9.23 inline after Examples 9.23–9.25.
- Section exercises 317–378: the 31 odd keyed ones kept. Kept with AI-marked answers: 368 (does such a p exist), 374 (can you conclude), 376 (explain, and estimate), 378 (show). Left out, unkeyed and computational: 318–326 even (ratio test), 328–336 even (root test), 338–344 even (ratio or root), 346 (ratio test), 348–358 even (an appropriate test), 360, 362 (summation by parts), 364, 366 (ranges of x), 370, 372 (for which p).
- Review exercises 379–404 (printed here, `source_section` 9.6): 391 and 395 set here; 379, 380 in 9.3; 381, 382, 393, 397 in 9.5; 383, 385, 387, 401 in 9.1; 389, 399, 403 in 9.2. Left out, unkeyed and computational: 384, 386, 388, 390, 392, 394, 396, 398, 400, 402, 404.

## Corrections

- The ratio test's proof, part ii, prints "|a_{n−}| > |aₙ|" twice and "It follows that |aₙ| ≠ 0" where |aₙ₊₁| > |aₙ| and lim aₙ ≠ 0 are meant. Marker, note.
- Exercise 327's key writes aₙ/aₙ₊₁ → 1/e² for aₙ₊₁/aₙ → 1/e². Note under the card.

## Wanted at chapter level

- Anchors: variables a_seq, n, S → `9.6-ratio-test`; ρ → `9.6-ratio-theorem`; b_seq → `9.6-root-test`. Forms: eq-ratio-test → `9.6-ratio-theorem`; eq-root-test → `9.6-root-theorem`.
