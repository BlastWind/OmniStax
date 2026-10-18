# Plan: 4.5 Derivatives and the Shape of a Graph (m53613)

Source: `source.md`, converted with `tools/convert.py 4`. Status: plan; config 2 waives the review for this run, decisions reported afterwards. Built 2026-10-12.

Six objectives, an opening paragraph, two definitions, three theorems (the first derivative test, the test for concavity, the second derivative test), one Problem-Solving Strategy, Figures 4.30 to 4.39, Table 4.1 and four unnumbered tables, Examples 4.17 to 4.20 each with its checkpoint (4.16–4.19), seven Key Concepts, 57 section exercises (28 keyed), seven glossary terms. One page.

## Sub-concepts (page headers)

0. `intro` (no header): the opening paragraph.
1. `first-derivative-test-section` **The First Derivative Test**: Figure 4.30, switching from increasing to decreasing, Figure 4.31, the summary list, the theorem `first-derivative-test`, the strategy `first-test-strategy`, Examples 4.17, 4.18 (Figures 4.32, 4.33), their checkpoints. Introduces `first-derivative-test`, `using-the-first-derivative-test`.
2. `concavity-section` **Concavity and Points of Inflection**: concavity, the definition `concavity-definition`, Figure 4.34, the theorem `concavity-test`, the definition `inflection-point-definition`, Figure 4.35, Example 4.19 (Figure 4.36), its checkpoint, Table 4.1 and Figure 4.37. Introduces `concavity`, `concavity-test`, `inflection-point`.
3. `second-derivative-test-section` **The Second Derivative Test**: the argument with Figure 4.38, the theorem `second-derivative-test`, x³, x⁴ and −x⁴, Example 4.20 (Figure 4.39), its checkpoint. Introduces `second-derivative-test`.

## Correction

"the function f(x) = −x⁴ has a local maximum at x," drops the value: meant is at x = 0. Marker after the words, note `c-local-maximum-at-0`.

## Colour, referents and function tokens

Types: `function` for f; `derivative` for f′ and f″ (higher-order derivative), in the figures the f′ and f″ curves and the sign notes; `point` for extrema and inflection points; `line` for the tangents of Figures 4.30, 4.34; `set` for I. No referents: f, f′ and f″ are three types of one function. Function tokens: x³, the functions of Examples 4.17–4.20 and of the checkpoints, x⁴, −x⁴.

## Figures

- `fig-increasing-decreasing` · Figure 4.30 · `increasing-decreasing-corollary` · faithful still copy: four panels over [a, b], two tangents each, f′ > 0 or f′ < 0 under each · still · 2D.
- `fig-four-critical-points` · Figure 4.31 · `first-derivative-test`, `critical-point` · faithful copy on a stand-in (the book prints no formula): a corner maximum at a, a minimum at b, a flat point with no extremum at c and the maximum at d, built from g′ = 6(x − 2)(x − 3)²(4 − x) between b and d; the sign of f′ written on each stretch · still · 2D.
- `fig-first-test-cubic`, `fig-first-test-root` · Figures 4.32, 4.33 · `using-the-first-derivative-test` · faithful copies of Examples 4.17 and 4.18 with their extrema (and 4.18's x = 0, where f′ is undefined and there is no extremum) · still · 2D.
- `fig-concavity-cases` · Figure 4.34 · `concavity` · faithful copy: four panels, f′ increasing or decreasing, concave up or down · still · 2D.
- `fig-inflection-point` · Figure 4.35 · `inflection-point`, `concavity-test` · faithful copy on the stand-in 2 − cos x, the signs of f′ and f″ on the four stretches, (a, f(a)) dotted · still · 2D.
- `fig-concavity-cubic` · Figure 4.36 · `inflection-point` · faithful copy of Example 4.19 with (2, 32) · still · 2D.
- `sim-shape-signs` · Figure 4.37 · `concavity`, `concavity-test`, `first-derivative-test`, `increasing-decreasing-corollary` · value add: variation and standardisation: the book's one curve with four labelled stretches becomes three graphs on one x-axis, f, f′ and f″, each shaded where it is positive, and a point x dragged along f; the headline and readout name the row of Table 4.1 the point is in, so the table is read off the shading · arrows: none · still · choice (Figure 4.37's curve, Example 4.17, Example 4.19, Example 4.20; not a checkpoint's function), slider x with `F.drag` along f · headline "At x = 0.80, f′ is positive and f″ is positive: f is increasing and concave up." · graph below graph below graph · 2D. The book prints no formula for Figure 4.37: the stand-in 2 − cos x has its four stretches.
- `fig-second-test` · Figure 4.38 · `second-derivative-test` · faithful copy on a stand-in cubic, f′(a) = 0 with f″(a) < 0 and f′(b) = 0 with f″(b) > 0, the horizontal tangents · still · 2D.
- `fig-second-test-quintic` · Figure 4.39 · `second-derivative-test` · faithful copy of Example 4.20 · still · 2D.

Table 4.1 stays in the text beside `sim-shape-signs`. Photographs: none. Exercise figures: the graphs of f′ in 201–215 stay in their cards.

## Exercises

- Checkpoints 4.16–4.19, inline after Examples 4.17–4.20.
- Section exercises 194–250: 28 keyed odd ones kept. Kept with AI-marked approaches: 194, 196, 198, 200 (explanations), 242, 244 (interpretations), 246, 248, 250 (true or false with a justification; set as choices), and the keyed 217 and 219, whose key says only "Answers will vary". Left out, computational: 202–214 even (read from a graph), 216, 218, 220 (sketches), 222–240 even (20).
- Review exercises set here in the chapter pass, `source_section` 4.10: 527 (keyed), 528 (unkeyed true or false, AI approach), 529 (keyed, from the graph of f′, its image in the card), 535, 537 (keyed); 530, 536, 538 left out.

## Extra simulations (rule 15)

`sim-shape-signs` is the required Figure 4.37 made live and carries the chapter's stacked f, f′, f″ view. Judged and dropped: a separate first-derivative-test Sim (the stacked view shows f′ changing sign at each critical point); a second-derivative-test Sim (the same view at f′ = 0 reads f″'s sign). None built.

## Wanted at chapter level

- No forms or variables rows: the section's concepts carry no form.
- Review 527, 528, 529, 535, 537 land in the chapter pass.


## Derivations

- The First Derivative Test · score 1 · not built: the prose argues only that extrema sit at critical points, and the test itself is summarized from Figure 4.31, not proved
- Test for Concavity · score 1 · built as drv-concavity-test after the paragraph that argues it, a node for concave up and one for concave down (Corollary 3 applied to f′, then the definition)
- The Second Derivative Test · score 2 · built as drv-second-derivative-test after the paragraph that argues it, the maximum at a and the minimum at b; the book's "f″(x) < 0 for all x ∈ I" holds only near the point, marked c-second-test-interval in the text and noted on both nodes
