# Plan: 9.2 Infinite Series (m53739)

Source: `source.md`. Status: built 2026-10-12 straight through (config 2). Template: `ch01/1.1`.

Three objectives, one opening paragraph, three definition notes, one theorem note, Figures 9.10 and 9.11, two unnumbered tables, Examples 9.7–9.12, Checkpoints 9.7–9.11, Equations 9.5–9.7, the Student Project Euler's Constant, four Key Concepts, two Key Equations, 71 section exercises (36 keyed), 7 glossary terms.

## Sub-concepts (page headers)

The book's headers: the opening paragraph `p#series-intro`; `sums-and-series` **Sums and Series** (the oil example, Figure 9.10, the table of Sₖ, the definition note `series-definition`, reindexing, Example 9.7; its h3s The Harmonic Series with Equation 9.5 and the table of its partial sums, Algebraic Properties of Convergent Series with the theorem `series-properties` and Example 9.8, Geometric Series with Equation 9.6, the definition note `geometric-definition` with Equation 9.7, Examples 9.9–9.11 and Figure 9.11 in Example 9.11); `telescoping` **Telescoping Series** (the definition note `telescoping-definition`, Example 9.12, the project `eulers-constant`).

## Concept nodes (merged by the prep)

Introduced: `infinite-series`, `partial-sum`, `convergence-of-a-series`, `divergence-of-a-series`, `reindexing-a-series`, `harmonic-series`, `divergence-of-the-harmonic-series`, `algebraic-properties-of-convergent-series`, `geometric-series`, `sum-of-a-geometric-series`, `repeating-decimals-as-fractions`, `koch-snowflake`, `telescoping-series`, `eulers-constant`. Uses: `sequence`, `convergent-sequence`, `convergent-sequences-are-bounded`, `limit-of-a-geometric-sequence`, `algebraic-limit-laws-for-sequences`, `partial-fraction-decomposition`, `improper-integral`, `continuity-at-a-point`.

## Colour, referents and function tokens

Sₖ wears `series` (`\kS_{k}`), the sum S `limit` (`\kSsum`), aₙ and bₙ `sequence`; a, r, k, c in ink; the Koch figure's Lₙ, Aₙ, Nₙ, lₙ, Tₙ in ink (lengths, areas and counts of one example). No referents. No function tokens (the prose gives no function of x to graph but 1/x² in the Analysis, marked).

## Figures

- `sim-partial-sums` · Figure 9.10 · `infinite-series`, `partial-sum`, `convergence-of-a-series`, `divergence-of-a-series`, `harmonic-series` · value add: variation: a sequence beside its series: the terms aₙ as dots in the lower panel and the partial sums Sₖ as dots in the upper one, on one n-axis, k on a slider (1 to 40, default the book's 5); a select swaps the series among the oil series Σ(1/2)ⁿ⁻¹ (the book's, S = 2 dashed), Example 9.7's Σn/(n + 1), Σ(−1)ⁿ and Σ1/(n(n + 1)) (S = 1), and the harmonic series, so a series whose terms shrink to 0 is seen both converging and not · arrows: none · still · select, slider k · headline "k = 5: S₅ = 1.9375, 0.0625 short of 2; the terms halve each week." · graph beside graph (terms below) · 2D.
- `sim-geometric-series` · Sim · `geometric-series`, `sum-of-a-geometric-series` · value add: variation: the initial term a (−2 to 2, default 1) and ratio r (−1.2 to 1.2, default 1/2, dashed circles at ±1 where the series stops converging) on sliders; the terms arⁿ⁻¹ below and the partial sums Sₖ = a(1 − rᵏ)/(1 − r) above for k up to 25, the sum a/(1 − r) dashed when |r| < 1; at |r| ≥ 1 the sums run off or swing without settling · arrows: none · still · sliders a, r (untyped) · headline "r = 0.50: the partial sums close on a/(1 − r) = 2." · graph beside graph · 2D.
- `sim-koch-snowflake` · Figure 9.11 (Example 9.11) · `koch-snowflake` · value add: variation: n on a slider (0 to 6, detents at the book's 0 to 3, default 3) draws Fₙ; the readout writes Nₙ = 3·4ⁿ sides of length lₙ = (1/3)ⁿ, the perimeter Lₙ = 3(4/3)ⁿ and the area Aₙ = (√3/4)[8/5 − (3/5)(4/9)ⁿ], so the perimeter is seen growing without bound while the area settles on 2√3/5 · arrows: none · still · slider n (untyped) · headline "F₃: 192 sides, perimeter 7.11, area 0.6700 of the limit 0.6928." · scene alone · 2D.
- `sim-telescoping` · Sim · `telescoping-series` · value add: intuition: the term bₙ − bₙ₊₁ drawn as the segment from bₙ₊₁ to bₙ on a number line, the first k segments one row each and end to end, so together they span [bₖ₊₁, b₁] and Sₖ = b₁ − bₖ₊₁ is read off as one bracket; slider k (1 to 30, default 3); a choice between bₙ = 1/n (Σ1/(n(n + 1)), the section's, sum 1) and bₙ = cos(1/n) (Example 9.12, sum cos 1 − 1) · arrows: none · still · choice, slider k · headline "k = 3: the three segments run from b₄ = 0.25 to b₁ = 1, so S₃ = 1 − 1/4 = 0.75." · scene alone · 2D.

## Extra simulations (rule 15)

`sim-geometric-series` and `sim-telescoping` above (picked: each draws a result the section states with no figure of its own). Dropped: the harmonic series' grouping into halves (the table and the partial-sums figure carry it); a repeating-decimal Sim (arithmetic, no view).

## Exercises

- Checkpoints 9.7–9.11 inline after Examples 9.7–9.10 and 9.12, hint and answer behind reveals.
- Section exercises 67–137: the 36 odd keyed ones kept. 88, 90 and 92 ("state whether the series converges and explain why") and 130 (explain) are kept with AI-marked answers; the computational evens are left out: 68, 70 (sigma notation), 72, 74 (partial sums), 76, 78 (general terms), 80, 82 (partial sums), 84, 86 (sums), 94, 96 (geometric series), 98, 100 (geometric series of functions), 102, 104 (telescoping series), 106, 108 (telescoping sums), 110, 112, 114 (general telescoping), 116 (the blocks' overhang), 118, 120 (π by series), 122, 124 (coin probabilities), 126, 128 (deposits, doses), 132 (von Bertalanffy), 134, 136 (zig-zag, Sierpinski). Stems: the π-series stem ends at 120; 121–137 carry none.
- Review exercises set here, `source_section` 9.6: 389, 399, 403 (403 carries the housefly stem).

## Corrections

- "As long as we can rewrite the series in the form given by Equation 9.5": Equation 9.5 is the harmonic series; the form meant is Equation 9.6, the geometric series. Marker, note.
- Exercise 107's prompt prints ln(1 +ₙ¹) for ln(1 + 1/n): note under the card.
- Exercise 113’s key writes 2/(n³ − 1) for 2/(n³ − n): note under the card.

## Wanted at chapter level

- Anchors: variables a_seq, n, S, S_sum → `9.2-series-definition`; a, r → `9.2-geometric-series`; b_seq → `9.2-telescoping`; c → `9.2-series-properties`. Forms: eq-infinite-series, eq-partial-sum, eq-sum-of-a-series → `9.2-series-definition`; eq-harmonic-series → `9.2-harmonic-series`; eq-harmonic-partial-sum-bound → `9.2-harmonic-series`; eq-series-sum-rule, -difference-rule, -constant-multiple-rule → `9.2-series-properties`; eq-geometric-series → `9.2-geometric-series`; eq-geometric-series-sum, eq-geometric-partial-sum → `9.2-geometric-definition`; eq-telescoping-partial-sum, eq-telescoping-sum → `9.2-telescoping`; eq-eulers-constant → `9.2-eulers-constant`.

## Derivations

- The Harmonic Series · divergence · score 3 · built as drv-harmonic-series-divergence (a printed proof; $S_{4},$ $S_{8},$ the hidden general $S_{2^{j}}\gt 1+j(\frac{1}{2})$ and the conclusion; the paragraph that restated them dropped)
- Algebraic Properties of Convergent Series · "follow directly" · score 4 · not built: three moves, under the bar
- Geometric Series · the sum, (9.7) · score 1 · built as drv-geometric-series-sum (a printed block; the cases $r=1,$ $r\ne1,$ $|r|\lt1$ and $|r|\ge1$ as a branching graph; the definition box keeps its (9.7))
- Example 9.11a · the perimeter of the Koch snowflake · score 2 · not built: a worked example
- Example 9.11b · the area of the Koch snowflake · score 5 · not built: a worked example of the section's geometric sum, every line printed; its one join (part a's side count) is the example's own
- Telescoping Series · the sum of a telescoping series · score 2 · built as drv-telescoping-series (the general block: $S_{k}=b_{1}-b_{k+1}$ and the sum $b_{1}-B;$ the worked $\sum 1/(n(n+1))$ before the definition and the $S_{1}$–$S_{3}$ lines stay as printed)
- Student Project · Euler's Constant · score 14 · not built: a project set for the reader
