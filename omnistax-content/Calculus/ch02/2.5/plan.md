# Plan: 2.5 The Precise Definition of a Limit (m53493)

Source: `source.md`, converted with `tools/convert.py 2`. Status: plan; config 2 waives the review for this run, decisions reported afterwards. Template: `ch01/1.1`.

Four objectives, an opening paragraph, four definition notes, one Problem-Solving Strategy, one proof, Figures 2.39 to 2.43, Tables 2.9 and 2.10, Examples 2.39 to 2.44, four checkpoints, no Key Equations, three Key Concepts, 32 section exercises (176–207, 16 keyed), the Chapter Review Exercises (208–232, 12 keyed), 2 glossary terms, one media note. One page; the review exercises are held by the sections that introduce what they test (config 11).

## Sub-concepts (page headers)

0. `intro` (no header): the opening paragraph.
1. `quantifying-closeness` **Quantifying Closeness**: the two interpretations and the two equivalences, the Definition note, the quantifiers, Table 2.9, Figure 2.39, the media note (dropped), Example 2.39 (Figure 2.40, its Analysis and final proof), the Problem-Solving Strategy, Example 2.40 and the checkpoint, Example 2.41 (Figure 2.41) and its checkpoint, Example 2.42 and its checkpoint. Introduces `epsilon-delta-definition-of-the-limit`, `proving-a-limit-with-epsilon-delta`.
2. `proving-limit-laws` **Proving Limit Laws**: the triangle inequality Definition note, the `<h3>` Proof of the sum law, a limit that does not exist with Table 2.10, Example 2.43 (its unnumbered graph). Introduces `triangle-inequality`, `limit-that-does-not-exist`.
3. `one-sided-infinite` **One-Sided and Infinite Limits**: the one-sided Definition note, Example 2.44 (Figure 2.42) and its checkpoint, Figure 2.43, the infinite limits Definition note. Introduces `epsilon-delta-one-sided-limits`, `epsilon-delta-infinite-limits`.

Examples keep the book's ids and numbers, the long solutions with their prose steps whole (config 7). "Theorems and formulas": `eq-epsilon-delta`, `eq-epsilon-band`, `eq-delta-band`, `eq-triangle-inequality`, `eq-epsilon-delta-right`, `eq-epsilon-delta-left`, `eq-epsilon-delta-infinite-plus`, `eq-epsilon-delta-infinite-minus`. The media note (the ε–δ applet) is dropped and named in `notes`; it seeds `sim-epsilon-delta`.

## Concept nodes (merged in book.json)

All 6 introduced here: definitions `epsilon-delta-definition-of-the-limit` (limit), `triangle-inequality` (the book's Definition note, so a definition), `limit-that-does-not-exist`, `epsilon-delta-one-sided-limits` (limit), `epsilon-delta-infinite-limits` (limit); skill `proving-a-limit-with-epsilon-delta`. The proof of the sum law `uses` `sum-law-for-limits` (2.3) and `triangle-inequality`.

## Colour, referents and function tokens

f wears `function`; L and every phrase naming a limit `limit`; ε and δ are ink as symbols (no macro), their bands in figures `limit` (the ε-band around L) and ink (the δ-band around a) per the book's `COLOR.md`; M is ink here (a bound, `2.5/M` redefines). No referents.

Function tokens: 2x + 1, 4x + 1, 3x − 2, x², √x, x² − 2x + 3, |x|/x, √(x − 4), √(1 − x).

## Figures

- `sim-epsilon-delta` · Figure 2.39 + 2.40 + 2.41 · `epsilon-delta-definition-of-the-limit`, `proving-a-limit-with-epsilon-delta` · value add: variation: the definition as a game: the ε slider sets the horizontal band L ± ε (`limit`), the δ slider the vertical band a ± δ (ink); the graph's crossings of y = L ± ε drop to the axis, and the box is drawn in the success colour when every point of the graph over the δ band (a excluded) lies inside the ε band, the escaping part marked when not; the δ slider carries a dashed special at the largest δ that works (from the crossings, `F.solve`), which the examples' δ = ε/2 and δ = min{2 − √(4 − ε), √(4 + ε) − 2} land on; shrinking ε moves the special in, so "for every ε there is a δ" is tried, not read · arrows: none · still · choice `Figure 2.39` (a decreasing, concave-down stand-in) / `2x + 1 at 1` (Example 2.39) / `x² at 2` (Example 2.41); sliders ε (default 1, the book's first drawing) and δ · headline: "ε = 0.50, δ = 0.25: every x within δ of 1 gives 2x + 1 within ε of 3" or "δ = 0.40 is too wide: x = 1.38 escapes" · readout: 0 < |x − a| < δ ⇒ |f(x) − L| < ε with the numbers · graph alone · 2D. The book's three panels of Figure 2.39 are three ε states; Figures 2.40 and 2.41 are the example choices with the ε and δ the solutions name. The checkpoints' functions (3x − 2, √x at 9, x² at 1, √(1 − x)) are not offered. Needs the ε–δ band pair (new figlib part, below).
- `fig-one-sided-delta` · Figure 2.42 (Example 2.44) · `epsilon-delta-one-sided-limits` · standardisation only, a faithful copy drawn live: √(x − 4) from (4, 0), the line y = ε, its crossing at x = 4 + ε² and δ = ε² marked, one band only, as the book draws it · still · graph alone · 2D. Kept still: a one-sided choice inside `sim-epsilon-delta` would answer the checkpoint's √(1 − x) at 1⁻ by symmetry.
- `sim-infinite-delta` · Figure 2.43 · `epsilon-delta-infinite-limits` · value add: variation: the book's two panels (two values of M) become an M slider: the line y = M rises, the graph's crossings drop to the axis, and δ, the smaller distance to a, shrinks as M grows · arrows: none · still · slider M (untyped, 1 to 100, logarithmic) · headline: "M = 25: within δ = 0.20 of a, f(x) > 25" · readout: 0 < |x − a| < δ ⇒ f(x) > M live · graph alone · 2D. Stand-in f = 1/(x − a)² with a on the axis, close to the sketch's two branches.
- `sim-no-limit` · Sim (replaces Example 2.43's unnumbered graph `CNX_Calc_Figure_02_05_006`, kept as its original) · `limit-that-does-not-exist` · value add: variation: |x|/x with ε fixed at the example's 1/2; the reader moves the candidate L and the δ slider, and for every L the ε band misses one of the two levels −1 and 1, the example's escaping point x = −δ/2 (L ≥ 0) or x = δ/2 (L < 0) dotted · arrows: none · still · sliders L (`limit`) and δ · headline: "L = 0.3: x = −δ/2 gives |−1 − L| = 1.3 ≥ ε" · readout: the example's inequality live · graph alone · 2D. Picked as the required replacement of the example's graph, since the example's case split on L is exactly what the slider shows.

Tables 2.9 and 2.10 stay in the text as `div.book-table`. Photographs: none.

## Exercises

- Checkpoints, four, after Examples 2.40, 2.41, 2.42 and 2.44.
- Section exercises 176–207, kind `exercise`, stems carried (the δ-reading stems with their graphs as each card's `figure`), "[T]" kept. 16 odd keyed kept; 201 and 207 are keyed "Answers may vary" and kept as printed. Of the 16 even ones, the proofs are kept with AI-marked approaches (config 12): 188, 190, 192 (limits), 194 (one-sided), 196, 198 (infinite), 200, 202, 204 (nonexistence), 206 (the constant multiple law). Left out as computational: 176, 178 (writing a definition), 180, 182, 184 (δ from a graph), 186 ([T] δ from a calculator), named in `exercise_notes`.
- Chapter Review Exercises 208–232, kind `review-exercise`, `source_section` 2.5, the stems carried ("True or False. … justify your answer with a proof or a counterexample", "evaluate the limit algebraically or explain why the limit does not exist", the squeeze stem, the c-for-continuity stem, the precise-definition stem). Held here: 229 (keyed δ = ∛ε) and 228 (unkeyed ε–δ proof, approach). The rest go to 2.1 (231; 232 out), 2.2 (210; 212 out), 2.3 (209, 213, 215, 217, 219, 221, 223, 224; 214–222 even out), 2.4 (208, 211, 225, 227, 230; 226 out); this page's `notes` names where each is held.
- Tags: `epsilon-delta-definition-of-the-limit` for 176–192, 228, 229, `proving-a-limit-with-epsilon-delta` for 188–199, `epsilon-delta-one-sided-limits` for 193–195, `epsilon-delta-infinite-limits` for 196–198, `limit-that-does-not-exist` for 200–204, the law concepts and `triangle-inequality` for 205–207.

## Extra simulations (rule 15)

None beyond the figures: `sim-epsilon-delta` is the chapter's central Sim (the applet's seed), and `sim-no-limit` is its negation. Considered and dropped: a δ-from-ε table for Example 2.42's δ = min{1, ε/5} (the example's algebra, not a picture), a proof-step stepper for the Strategy (the derivation widgets are a sandbox trial, not a library part yet).

## Wanted at chapter level

- variables `2.5/ε`, `2.5/δ` → the Definition note in `2.5-quantifying-closeness`; `2.5/M` → the infinite limits Definition note in `2.5-one-sided-infinite`.
- forms `eq-epsilon-delta`, `eq-epsilon-band`, `eq-delta-band` → the Definition note and the two equivalences above it; `eq-triangle-inequality` → its Definition note; `eq-epsilon-delta-right`, `eq-epsilon-delta-left` → the one-sided Definition note; `eq-epsilon-delta-infinite-plus`, `eq-epsilon-delta-infinite-minus` → the infinite Definition note.
- New figlib part: `F.band` (an ε strip in `limit` about L and a δ strip in ink about a, the crossings dropped, the box judged), built by the figure agent of this section and flagged in its report.
