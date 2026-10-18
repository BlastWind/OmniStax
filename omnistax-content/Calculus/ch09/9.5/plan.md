# Plan: 9.5 Alternating Series (m53743)

Source: `source.md`. Status: built 2026-10-12 straight through (config 2). Template: `ch01/1.1`.

Three objectives, one opening paragraph, two definition notes, three theorem notes, two proofs, Figures 9.17 and 9.18, Examples 9.19–9.22, Checkpoints 9.18–9.20, Equations 9.11–9.14 (the book's `class="numbered"` four), two Key Concepts, one Key Equation, 67 section exercises (33 keyed), 4 glossary terms.

## Sub-concepts (page headers)

The book's headers: `p#alternating-intro`; `alternating-series-test` **The Alternating Series Test** (Equations 9.11 and 9.12, the definition note `alternating-definition` with Equations 9.13 and 9.14, the proof for the alternating harmonic series with Figure 9.17, Figure 9.18, the theorem `alternating-test-theorem`, Example 9.19); `remainder` **Remainder of an Alternating Series** (the theorem `alternating-remainder-theorem`, Example 9.20); `absolute-conditional` **Absolute and Conditional Convergence** (the definition note `absolute-definition`, the theorem `absolute-implies` with its proof, Example 9.21, the rearrangements, Example 9.22).

## Concept nodes (merged by the prep)

Introduced: `alternating-series`, `alternating-harmonic-series`, `alternating-series-test`, `remainder-of-an-alternating-series`, `absolute-convergence`, `conditional-convergence`, `absolute-convergence-implies-convergence`, `riemann-rearrangement-theorem`. Uses: `harmonic-series`, `geometric-series`, `monotone-convergence-theorem`, `remainder-of-a-series`, `comparison-test`, `limit-comparison-test`, `divergence-test`, `algebraic-properties-of-convergent-series`.

## Colour, referents and function tokens

Sₖ `series`, S `limit`, bₙ and aₙ `sequence`, R_N `error`; N, k, M in ink. No referents. No function tokens.

## Figures

- `sim-alternating` · Figure 9.17 + 9.18 · `alternating-harmonic-series`, `alternating-series-test`, `remainder-of-an-alternating-series` · value add: variation: the partial sums as the book draws them, a jump of length bₖ out and back along a number line for each k, one row per term, so the odd partial sums are seen falling and the even ones rising toward S; N on a slider (1 to 20, default the book's 5); a choice between bₙ = 1/n (the alternating harmonic series, S = ln 2, Figure 9.17) and bₙ = 1/n² (Example 9.20, S ≈ 0.8225); the remainder |S − S_N| drawn as a bracket in `error` beside b_{N+1}, the bound Figure 9.18 is read for · arrows: symbolic (each arrow is a term added, not a motion) · still · choice, slider N · headline "N = 5: S₅ = 0.7833, 0.0902 from ln 2, within b₆ = 0.1667." · scene alone (number line) · 2D. The two sketches draw one zig-zag, for one series and for any; one live drawing with the series as a choice keeps both numbers.
- `sim-rearrangement` · Sim · `riemann-rearrangement-theorem`, `conditional-convergence` · value add: variation: the rearrangement the text describes: positive terms 1, 1/3, 1/5, … added until the sum passes a target, then negative terms −1/2, −1/4, … until it falls below, and again; the target on a slider (−1 to 2.5, detents at ln 2 and at Example 9.22's 3 ln 2/2, where the first terms are the example's 1 + 1/3 − 1/2 + 1/5 + 1/7 − 1/4); the rearranged partial sums against the number of terms used (to 200) close on the target, the original order's faint beside them closing on ln 2 · arrows: none · still · slider target (untyped) · headline "Target 1.0397 = 3 ln 2/2: after 200 terms the rearranged sum is 1.0435." · graph alone · 2D.

## Extra simulations (rule 15)

`sim-rearrangement` (picked: the text describes the construction in words and leaves the general fact beyond its scope; the reader sees any target reached). Dropped: an absolute-versus-conditional Sim (Example 9.21's two series drawn twice add nothing to `sim-alternating`).

## Exercises

- Checkpoints 9.18–9.20 inline after Examples 9.19–9.21.
- Section exercises 250–316: the 33 odd keyed ones kept, the true-or-false 287, 289, 291 as choices with the key's reasons. Kept with AI-marked answers: 286, 288, 290 (true or false), 292 (does it necessarily converge), 294, 296 (which hypothesis fails), 298, 300 (show, and which hypothesis), 308 (show that it converges), 316 (explain each step). Left out, unkeyed and computational: 250–278 even (absolute, conditional or divergent), 280, 282, 284 (N for an error), 302, 304 (Taylor error bounds), 306 (N for π/4), 310, 312, 314 (plots and estimates by computer).
- Review exercises set here, `source_section` 9.6: 381 (a choice), 382 (AI-marked), 393, 397.

## Corrections

- Example 9.21: "applying Theorem 5.13" is reworded "applying Theorem 9.13", linked to the Alternating Series Test (openstax.org's Theorem 5.13 in Volume 2's numbering), with a note giving the printed words; the note adds that the step that rules out absolute convergence is the limit comparison test with the harmonic series just above it (Theorem 9.12).
- Exercise 305 prints "find 12 = 1 − 1/2² + ⋯" and "S Σ(−1)ⁿ⁻¹/n²" for "find S = 1 − 1/2² + ⋯" and "12 Σ(−1)ⁿ⁻¹/n²". Note under the card.

## Wanted at chapter level

- Anchors: variables a_seq, b_seq, n, S, S_sum → `9.5-alternating-definition` (b_seq), `9.5-alternating-series-test` (others); R → `9.5-remainder`. Forms: eq-alternating-series-plus, -minus → `9.5-alternating-definition`; eq-alternating-harmonic-series → `9.5-alternating-series-test`; eq-alternating-remainder → `9.5-alternating-remainder-theorem`.

## Derivations

- The Alternating Series Test · Proof for the alternating harmonic series · score 4 · built as drv-alternating-harmonic-series (replaces the proof's body; the hidden last step, odd and even partial sums sharing a limit, inserted)
- "It can also be shown that $S=\ln 2$" · score 8 · not built: every fact it needs is Chapter 10's power series; better built there
- Alternating Series Test · "the proof is similar" · score 11 · not built: its lines are the printed proof's with $b_{n}$ for $1/n;$ the graph would repeat the one above
- Remainder of an Alternating Series · score 2 · not built: under the bar
- Absolute Convergence Implies Convergence · Proof · score 3 · built as drv-absolute-convergence (prose kept to $0\le|a_{n}|+a_{n}\le2|a_{n}|,$ the rest replaced)
- Rearranging the alternating harmonic series to diverge · score 2 · not built: a construction in prose, under the bar
- Riemann Rearrangement Theorem · score 8 · not built: "beyond the scope of this book"; a greedy construction, not a chain of equations, and the section's sim walks it
- Example 9.22 · score 2 · not built: a worked example
