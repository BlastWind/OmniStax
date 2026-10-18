# Plan: 5.1 Approximating Areas (m53624)

Source: `source.md`, converted with `tools/convert.py 5`. Status: built 2026-10-12 straight through (config 2 waives the review for this run; decisions reported afterwards). Template: `ch01/1.1`.

Three objectives, three opening paragraphs, three definition notes (partition, Riemann sum, area), four rules (properties of sigma notation, sums and powers of integers, left- and right-endpoint approximations), one proof, Figures 5.2–5.15, Table 5.1, Examples 5.1–5.6, Checkpoints 5.1–5.6, four Key Equations rows, five Key Concepts, 59 section exercises (30 keyed), 8 glossary terms, one media note. One page (root rule 11).

## Sub-concepts (page headers)

The book's own headers are kept (root rule 3).

0. Opening paragraphs (no header), the first `p#exhaustion` (Archimedes' method of exhaustion).
1. `sigma` **Sigma (Summation) Notation**: sigma notation, Example 5.1, the rule `sigma-properties` and its proof, the rule `sums-of-powers`, Examples 5.2 and 5.3, three checkpoints.
2. `approximating-area` **Approximating Area**: Figure 5.2, Δx and the partition points, the definition note `partition-definition`, the rules `left-endpoint-rule` and `right-endpoint-rule`, Figures 5.3–5.5 (folded), the L₆ and R₆ of x²/2, Example 5.4 (Figures 5.6 + 5.7, folded) and its checkpoint, Figures 5.8–5.13 (folded), Table 5.1.
3. `riemann-sums` **Forming Riemann Sums**: the definition notes `riemann-sum-definition` and `area-definition`, the media note (dropped), upper and lower sums, the Sim, Examples 5.5 and 5.6 (Figures 5.14, 5.15) and their checkpoints.

Objectives and glossary go to the tables, Key Concepts to `summary_html`, the Key Equations to the forms in "Theorems and formulas". The media note (a graphical demonstration of a Riemann sum) is dropped and named in `notes`; it seeds `sim-riemann-sum`.

## Concept nodes (merged by the prep)

Introduced here: idea `method-of-exhaustion`; definitions `sigma-notation`, `partition` (set, symbol P), `regular-partition` (set; forms `eq-subinterval-width`, `eq-regular-partition-points`), `riemann-sum` (integral), `upper-sum`, `lower-sum` (integral), `area-under-the-curve` (integral, symbol A); results `properties-of-sigma-notation` (five forms), `sums-and-powers-of-integers` (three forms), `left-endpoint-approximation` (integral, symbol L), `right-endpoint-approximation` (integral, symbol R). Coverage: one `introduces` each at the note or block above; `uses` of `function`, `limit`, `continuity-over-an-interval`, `absolute-extremum`, `increasing-function`, `decreasing-function`, `area-problem` and of this section's own concepts in the examples.

## Colour, referents and function tokens

Per `ch05/COLOR.md`: f wears `function`; the rectangles, Lₙ, Rₙ, A and the Riemann sums `integral`; P `set`. Lₙ and Rₙ are written `\kL_{n}`, `\kR_{n}` (the variables rows L and R carry the endpoint concepts, `redefines`), so the letter wears `integral` and the subscript is ink. No referents: every graph draws one function. Function tokens: x²/2, x², (x − 1)³ + 4, 10 − x², sin x; the generic f is not marked.

## Figures

- `fig-area-region` · Figure 5.2 · `area-under-the-curve` · standardisation only, a still copy drawn live: the region under a curve on [a, b], A written in it · arrows: none · still · no controls · graph alone · 2D. The book prints no formula; stand-in f(x) = 0.15(x − 3)³ − 0.9(x − 3) + 3 on [1, 5] (rising, then falling, concave down then up past 3, rising again shortly before b, as the sketch is).
- `sim-endpoint-rules` · Figure 5.3 + 5.4 + 5.5 · `left-endpoint-approximation`, `right-endpoint-approximation`, `regular-partition` · value add: variation and a morph: the choice "heights from" (left endpoints | right endpoints) bends each rectangle's top from one endpoint's height to the other's, the dots riding along the curve; n (untyped, 1–30, detent 6) thins them · arrows: none · still · headline: "6 rectangles of width 0.500, each as tall as the curve at its left endpoint: their areas sum to 3.4375." · readout: L₆ = Σ f(xᵢ₋₁)Δx = 3.4375 live, R₆ likewise · graph alone · 2D. f(x) = x²/2 on [0, 3] (Figure 5.5's), which the sketches 5.3 and 5.4 also draw (a parabola with vertex at the origin, no formula); Figure 5.5's two panels are its two states at n = 6. Only x₀ = a and xₙ = b are labelled; the other partition points carry hover names (rule 26.7).
- `fig-example-endpoints` · Figure 5.6 + 5.7 (Example 5.4) · `left-endpoint-approximation`, `right-endpoint-approximation` · value add: the morph between the two approximations of one region: x² on [0, 2], n = 4 fixed by the example, heights written over each rectangle · still · choice left | right · readout L₄ = 1.75 or R₄ = 3.75 with the example's terms · graph alone · 2D.
- `sim-converging-sums` · Figure 5.8 + 5.9 + 5.10 + 5.11 + 5.12 + 5.13 · `left-endpoint-approximation`, `right-endpoint-approximation`, `area-under-the-curve` · value add: variation: (x − 1)³ + 4 on [0, 2], n 1–64 with detents at the book's 4, 8 and 32, left or right; the six book figures are six states · still · headline: "4 rectangles: the left-endpoint sum is 7.5, 0.5 below 8." · readout Lₙ or Rₙ live · graph alone · 2D. Table 5.1 stays in the text beside it.
- `fig-lower-sum` · Figure 5.14 (Example 5.5) · `lower-sum` · standardisation only: 10 − x² on the book's 0 to 2 window, the four right-endpoint rectangles on [1, 2], x₀ = a … x₄ = b · still · no controls · 2D. A choice of upper sum would show Checkpoint 5.5's answer.
- `fig-sine-lower-sum` · Figure 5.15 (Example 5.6) · `lower-sum` · standardisation only: sin x on [0, π], the six left-endpoint rectangles on [0, π/2] · still · 2D. Kept still for Checkpoint 5.6 (the upper sum).

Photographs: none. Unnumbered images: the answer images of Checkpoints 5.4 and 5.5 stay in their cards' solutions; the exercise images in their cards.

## Extra simulations (rule 15), picked

- `sim-riemann-sum` · Sim · `riemann-sum`, `upper-sum`, `lower-sum`, `area-under-the-curve` · value add: variation: Figure 5.2's curve on [1, 5] with the sample point xᵢ* chosen (left | middle | right | highest | lowest) and n 1–50; every choice's sum closes on the area 12 (exact: the cubic and linear parts are odd about 3), the highest always largest and the lowest smallest · arrows: none · still · headline: "4 rectangles, heights at the highest point of each subinterval: the Riemann sum is 13.27, 1.27 above the area 12." · readout Σ f(xᵢ*)Δx beside A = 12 · graph alone · 2D. Picked: the text defines Riemann sums with any sample point and upper and lower sums, but every figure of the section uses an endpoint; this shows the definition's freedom and the limit that does not depend on it. A different function from Examples 5.5 and 5.6 so the checkpoints' upper sums are not shown.

Considered and dropped: a sigma-notation term stacker (the sums are arithmetic, no picture adds to them).

## Exercises

- Checkpoints 5.1–5.6 inline after Examples 5.1–5.6, hint and answer behind reveals.
- Section exercises 1–59: the 30 odd ones keyed and kept. Even ones: 34 and 36 (interpret a sum) and 54, 56, 58 (explain) kept with AI-written answers; the computational evens 2–32, 38–52 left out and named in `exercise_notes` (config 12).
- Review exercise 439 (true or false: the right-hand rule underestimates an increasing positive f, keyed False) is set here, kind `review-exercise`, `source_section` 5.7, once 5.7 is built.
- Tags per card in `exercise_concepts`; Bloom per card.

## Wanted at chapter level

Applied by this chapter's own agent (it owns `chapter.json` and `book-rows.json`):
- variables anchors: f, A, a, b, n, Δx → `5.1-approximating-area`; c → `5.1-sigma-properties`; P → `5.1-partition-definition`; L → `5.1-left-endpoint-rule`; R → `5.1-right-endpoint-rule`. Done.
- forms anchors: `eq-sigma-notation` → `5.1-sigma`; the five `eq-sigma-*` → `5.1-sigma-properties`; `eq-sum-of-*` → `5.1-sums-of-powers`; `eq-subinterval-width`, `eq-regular-partition-points` → `5.1-approximating-area`; `eq-left-endpoint`, `eq-right-endpoint` → their rules; `eq-riemann-sum` → `5.1-riemann-sum-definition`; `eq-area-under-curve` → `5.1-area-definition`. Done.
- r439 in the chapter pass.


## Derivations

- Properties of Sigma Notation · Proof (properties 2 and 3) · score 0 · built as drv-sigma-notation-properties (one Proof heading, a node per property; the two-item display list replaced, the opening sentence and □ kept)
- Sums and Powers of Integers · score 9 · not built: the rule states the three formulas with no claim that they follow from anything; a statement, not a hidden derivation
