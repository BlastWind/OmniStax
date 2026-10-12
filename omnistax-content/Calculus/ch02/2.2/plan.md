# Plan: 2.2 The Limit of a Function (m53491)

Source: `source.md`, converted with `tools/convert.py 2`. Status: plan; config 2 waives the review for this run, decisions reported afterwards. Template: `ch01/1.1`.

Seven objectives, two opening paragraphs with Figure 2.12, four definition notes, three theorem notes, one Problem-Solving Strategy, Figures 2.12 to 2.23 (2.22 a photograph), Tables 2.1 to 2.8, Examples 2.4 to 2.12, seven checkpoints, six Key Equations, four Key Concepts, 53 section exercises (30–82, 26 keyed), 4 glossary terms, no media note. One page.

## Sub-concepts (page headers)

0. `intro` (no header): the two opening paragraphs, f, g and h near x = 2 and Figure 2.12, and the paragraph after it.
1. `intuitive-definition` **Intuitive Definition of a Limit**: lim f(x) = 4, the Definition note, the Problem-Solving Strategy with Table 2.1, Examples 2.4 (Table 2.2, Figure 2.13) and 2.5 (Table 2.3, Figure 2.14) and the checkpoint, Example 2.6 (Figure 2.15) and its checkpoint (Figure 2.16), the theorem Two Important Limits with Table 2.4. Introduces `intuitive-definition-of-the-limit`, `evaluating-a-limit-with-a-table`, `two-important-limits`.
2. `existence` **The Existence of a Limit**: Example 2.7 (Table 2.5, the sequence 2/π, 2/3π, …, Figure 2.17) and its checkpoint. Introduces `existence-of-a-limit` (the "does not exist" / DNE words).
3. `one-sided` **One-Sided Limits**: g(x) = |x − 2|/(x − 2) again, the Definition note, Example 2.8 (Table 2.6, Figure 2.18) and its checkpoint, the theorem Relating One-Sided and Two-Sided Limits. Introduces `one-sided-limit`, `one-sided-and-two-sided-limits`.
4. `infinite-limits` **Infinite Limits**: h(x) = 1/(x − 2)², the Definition note (three kinds), Example 2.9 (Table 2.7, Figure 2.19) and its checkpoint, Figure 2.20, the theorem Infinite Limits from Positive Integers, the vertical asymptote Definition note, Example 2.10 and its checkpoint, Example 2.11 (Figure 2.21) and its checkpoint (an unnumbered graph), Example 2.12 Chapter Opener: Einstein's Equation (Figure 2.22 photo, Figure 2.23, Table 2.8). Introduces `infinite-limit`, `infinite-limits-from-positive-integers`, `vertical-asymptote`.

Examples keep the book's ids and numbers, 2.12 `fs-id1170572624544` given the id `ex-einstein` that the chapter introduction links to. Objectives and glossary go to the tables, Key Concepts to `summary_html`, the six Key Equations to the forms of the concepts (`eq-limit`, `eq-limit-of-x`, `eq-limit-of-constant`, `eq-limit-from-left`, `eq-limit-from-right`, `eq-infinite-limit-*`) in "Theorems and formulas", with `eq-one-and-two-sided-limits` and the three `eq-infinite-limit-*-power` forms of the theorems. The tables stay in the text as `div.book-table`, Table 2.1 with its "Use additional values as necessary" row.

## Concept nodes (merged in book.json)

All 9 introduced here: definitions `intuitive-definition-of-the-limit` (limit), `one-sided-limit` (limit), `infinite-limit` (limit), `vertical-asymptote` (line); results `two-important-limits`, `one-sided-and-two-sided-limits`, `infinite-limits-from-positive-integers`; idea `existence-of-a-limit` (limit); skill `evaluating-a-limit-with-a-table`. Prerequisites: `limit` (2.1), `interval-notation` and `table-of-values` (1.1).

Coverage: `introduces` at each Definition, theorem and strategy note or `{term:}`; `uses` for `limit` and `intuitive-definition-of-the-limit` in Examples 2.4–2.7, `one-sided-limit` in 2.8 and 2.11, `infinite-limit` in 2.9–2.12, `vertical-asymptote` in 2.10 and 2.12.

## Colour, referents and function tokens

f, g, h wear `function`; L (`\kL`, concept `limit`) and every phrase naming a limit, one-sided or infinite, `limit`; "vertical asymptote" and the line x = a `line`. x, a, c, n are ink. No referents: each figure draws one function at a time (`ch02/COLOR.md`).

Function tokens: (x² − 4)/(x − 2), |x − 2|/(x − 2), 1/(x − 2)²; (sin x)/x, (√x − 2)/(x − 4), (1/x − 1)/(x − 1); sin(1/x), |x² − 4|/(x − 2); the piecewise `{x<2: x+1, x^2-4}`; 1/x, 1/x², 1/(x + 3)⁴, 1/(x − 2)³; 1/(x − a)ⁿ is generic and not marked. The constant c and the identity f(x) = x of the two important limits are not marked.

## Figures

- `sim-three-functions` · Figure 2.12 · `intuitive-definition-of-the-limit`, `one-sided-limit`, `infinite-limit` · value add: variation: x is dragged toward 2 from either side on the chosen function and its value runs beside it: (a) f climbs to the hole at 4, (b) g sits at −1 then 1, (c) h climbs without bound, so "undefined at 2" and the three behaviors near 2 are seen apart · arrows: none · still · choice `(a) f` / `(b) g` / `(c) h`; `F.drag` of x along the graph, refusing x = 2 · headline: "x = 1.9: f(x) = 3.9" live · readout: the function value and, at the end of the drag, the one-sided behavior in `limit` · graph alone · 2D. The book's three panels are the three states.
- `sim-table-to-graph` · Figure 2.13 + 2.14 (Examples 2.4, 2.5) · `evaluating-a-limit-with-a-table` · value add: variation: the strategy's table made into points: a step slider k = 1 to 4 (x = a ± 10⁻ᵏ, detents) puts the two table rows of that step on the graph as dots closing on the hole from both sides, the table's two numbers in the readout · arrows: none · still · choice `(sin x)/x at 0` / `(√x − 2)/(x − 4) at 4`; slider k · headline: "x = ±0.01: (sin x)/x = 0.99998" · graph alone · 2D. Tables 2.2 and 2.3 stay in the text; the checkpoint's (1/x − 1)/(x − 1) is not offered.
- `fig-graph-limit` · Figure 2.15 (Example 2.6) · `intuitive-definition-of-the-limit` · standardisation only, a faithful copy drawn live: a smooth curve with a hole at (−1, 3) and the filled point (−1, 4) above it, hover-named · still · graph alone · 2D. The book prints no formula: a stand-in close to the sketch.
- `fig-checkpoint-h` · Figure 2.16 (the checkpoint after Example 2.6) · faithful still copy, drawn live from a stand-in close to the sketch (h approaching −1 at 2) · no controls · graph alone · 2D. The checkpoint reads it (config 18).
- `sim-oscillation` · Figure 2.17 (Example 2.7) · `existence-of-a-limit` · value add: variation: a zoom slider about x = 0 (window half-width 1 down to 0.001, logarithmic) shows sin(1/x) oscillating between −1 and 1 at every scale, with the book's sequence 2/π, 2/3π, 2/5π, … marked as dots alternating 1, −1 · arrows: none · still · slider zoom (untyped) · headline: "window ±0.01: still between −1 and 1" · readout: the sequence's values · graph alone · 2D. Needs `F.axes` with a live range (see the chapter's exploration).
- `sim-one-sided` · Figure 2.18 (Example 2.8) · `one-sided-limit`, `one-sided-and-two-sided-limits` · value add: variation: two points, one on each piece of f(x) = x + 1 (x < 2), x² − 4 (x ≥ 2), dragged toward 2 from left and right, each with its limit drawn as a `limit` level: 3 from the left, 0 from the right, the closed dot at (2, 0) · arrows: none · still · two `F.drag` (left and right of 2) · headline: "from the left 3, from the right 0: no two-sided limit" · readout: lim_{x→2⁻} f(x) = 3, lim_{x→2⁺} f(x) = 0 · graph alone · 2D. The checkpoint's |x² − 4|/(x − 2) is not offered.
- `fig-reciprocal` · Figure 2.19 (Example 2.9) · `infinite-limit` · standardisation only: f(x) = 1/x drawn live with its pole at 0 (`F.plot` poles) · still · graph alone · 2D. Kept still: a sim on 1/xⁿ here would answer the next checkpoint (1/x²).
- `sim-power-poles` · Figure 2.20 · `infinite-limits-from-positive-integers`, `vertical-asymptote` · value add: variation: f(x) = 1/(x − a)ⁿ with a slider n = 1 to 4 (integer detents): the right branch always climbs, the left climbs for even n and falls for odd n, the asymptote x = a dashed in `line` · arrows: none · still · slider n (untyped) · headline: "n = 3, odd: +∞ from the right, −∞ from the left" · readout: the theorem's two one-sided limits in `limit` · graph alone · 2D. a stays a letter on the axis, so the figure does not answer the checkpoint at a = 2.
- `fig-four-points` · Figure 2.21 (Example 2.11) · `one-sided-limit`, `infinite-limit` · standardisation only: a faithful copy drawn live, stand-in pieces matching the example's values at −4, −2, 1 and 3 (the hole at (−2, 3), the jump at 1 with f(1) = 6, the asymptote at 3 going to −∞ on both sides), every special point hover-named · still · graph alone · 2D. The example's solution reads all of it; a sim would only repeat it.
- The checkpoint's unnumbered graph after Example 2.11 (`CNX_Calc_Figure_02_02_016`) stays the book's image in the Try It.
- `fig-spaceship-again` · Figure 2.22 (Example 2.12) · photo, kept: the example points at it, "(credit: NASA)" kept whole.
- `sim-einstein` · Figure 2.23 (Example 2.12) · `vertical-asymptote`, `infinite-limit` · value add: variation: the ratio m/m₀ = 1/√(1 − (v/c)²) against v/c, the reader dragging v/c toward 1, the asymptote v/c = 1 dashed, Table 2.8's three rows (0.99, 0.999, 0.9999) as detents and dots, and a mass readout for the example's 100 kg · arrows: none · still · `F.drag` of v/c on [0, 1) · headline: "v = 0.9999c: m = 70.71 m₀, so 100 kg becomes 7071 kg" · readout: m/m₀ = 1/√(1 − v²/c²) live · graph alone · 2D. The example's own figure, made live with the table's numbers.

## Exercises

- Checkpoints, seven, kind `checkpoint`, inline Try Its after Examples 2.5, 2.6, 2.7, 2.8, 2.9, 2.10 and 2.11.
- Section exercises 30–82, kind `exercise`, stems carried, "[T]" kept: the 26 odd ones are keyed and kept, their tables in the prompts; 77 and 79 carry their answer sketches as `figure` (still copies). Of the 27 even ones, 46 and 48 (which statement about the graph is false, and why) are explanations, kept with an AI-marked approach (config 12); the other 25 (tables 30, 32, 36, 38–44, the constant 34, graph readings 50–74, sketches 76, 78, 80, the track coach 82) are computational and left out, named in `exercise_notes`. The graphs that 46–75 read are the book's images in the cards' `figure`.
- Review exercises held here, added once 2.5 is built: 210 (true or false: a vertical asymptote at a means f is undefined at a, unkeyed, an AI-marked approach); 212 (limits from a graph, unkeyed computational) left out and named.
- Tags: `intuitive-definition-of-the-limit` and `evaluating-a-limit-with-a-table` for 30–45, `one-sided-limit` and `one-sided-and-two-sided-limits` for 46–75, `infinite-limit` and `vertical-asymptote` for 76–81 and 210, `existence-of-a-limit` where the answer is DNE.

## Extra simulations (rule 15)

None beyond the figures above: `sim-einstein` and `sim-oscillation` already take the section's two motions toward a limit that a still cannot show. Considered and dropped: a draggable table builder (the Strategy's table is `sim-table-to-graph`), a one-sided limits game on a random graph (the exercises' graphs do this).

## Wanted at chapter level

- variables `2.2/L` → the Definition note in `2.2-intuitive-definition`; `2.2/g`, `2.2/h` → `2.2-intro` (the opening equation).
- forms `eq-limit` → the Definition note; `eq-limit-of-x`, `eq-limit-of-constant` → the Two Important Limits note; `eq-limit-from-left`, `eq-limit-from-right` → the one-sided Definition note; `eq-one-and-two-sided-limits` → its theorem note; `eq-infinite-limit-left-plus` … `eq-infinite-limit-minus` → the infinite limits Definition note; `eq-infinite-limit-even-power`, `eq-infinite-limit-odd-power-right`, `eq-infinite-limit-odd-power-left` → their theorem note.
- The chapter introduction's link to `ex-einstein` resolves once this page is built.
