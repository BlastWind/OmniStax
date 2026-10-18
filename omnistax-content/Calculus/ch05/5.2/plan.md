# Plan: 5.2 The Definite Integral (m53631)

Source: `source.md`, converted with `tools/convert.py 5`. Status: built 2026-10-12 straight through (config 2 waives the review for this run; decisions reported afterwards). Template: `ch01/1.1`.

Six objectives, an opening paragraph, three definition notes (definite integral, net signed and total area, average value), one rule (properties), two theorems (continuous functions are integrable, comparison), Figures 5.16–5.25, Examples 5.7–5.14, Checkpoints 5.7–5.13, two Key Equations rows, six Key Concepts, 84 section exercises (42 keyed), 8 glossary terms. No media note.

## Sub-concepts (page headers)

The book's headers are kept: the opening paragraph `p#definite-intro`; `definition-notation` **Definition and Notation** (the note `definite-integral-definition`, limits of integration, integrand, variable of integration, the theorem `continuous-integrable`, Example 5.7); `evaluating` **Evaluating Definite Integrals** (Example 5.8, Figure 5.16); `area-integral` **Area and the Definite Integral** with its h3s Net Signed Area (Figures 5.17 + 5.18, Example 5.9, Figure 5.19) and Total Area (Figures 5.20 + 5.21, the note `net-total-definition`, Example 5.10, Figure 5.22); `properties` **Properties of the Definite Integral** (the rule `integral-properties`, Examples 5.11 and 5.12, the h3 Comparison Properties of Integrals with the theorem `comparison-theorem`, Example 5.13, Figures 5.23 + 5.24); `average-value` **Average Value of a Function** (the note `average-value-definition`, Example 5.14, Figure 5.25).

## Concept nodes (merged by the prep)

Introduced: definitions `definite-integral` (integral), `integrable-function`, `limits-of-integration`, `integrand`, `variable-of-integration`, `net-signed-area`, `total-area` (integral), `average-value-of-a-function` (function, symbol f_ave); results `continuous-functions-are-integrable`, `properties-of-the-definite-integral` (six forms), `integral-comparison-theorem` (three forms); idea `displacement-from-velocity` (integral; its two forms are stated in 5.4). Uses: `area-under-the-curve`, `riemann-sum`, `regular-partition`, `right-endpoint-approximation`, `sums-and-powers-of-integers`, `indefinite-integral`, `antiderivative`, `properties-of-indefinite-integrals`, `jump-discontinuity`, `absolute-value-function`.

## Colour, referents and function tokens

f, g wear `function`; A₁, A₂ (`\kA_{1}`, the variables row A typed by `area-under-the-curve`), the shaded regions and rectangles `integral`; v(t) is integrated here and wears `function` (its row carries `velocity` with a `function` override, as RULES.md Types says); f_ave `\kfave`. The word "velocity" is left plain, since its concept wears `derivative` and the symbol beside it wears `function`. Referents: f and g of Example 5.13 (`curve-f`, `curve-g`), drawn in Figures 5.23 + 5.24, every mention in the example marked, group phrases with both. Function tokens on every rule the text gives (2 − 2x², 2x, x − 2, −3x³ + 2x + 2, 6x³ − 4x² + 2x − 3, √(1 + x²), √(1 + x), x + 1, 6 − 2x).

## Figures

- `fig-quarter-circle` · Figure 5.16 (Example 5.8) · `definite-integral` · standardisation only: the semicircle √(9 − (x − 3)²) on [0, 6], the quarter over [3, 6] shaded · still · graph alone · 2D.
- `sim-net-signed-area` · Figure 5.17 + 5.18 · `net-signed-area`, `riemann-sum` · value add: variation: 2 − 2x² on [0, 2], left-endpoint rectangles, n 1–64 with a detent at the book's 8; rectangles under the axis hang down with dashed edges and count against the sum; A₁ and A₂ shaded beneath (Figure 5.18's state is the limit) · arrows: none · still · headline: "8 rectangles: 1.5625 of area above the axis less 1.9375 below it gives a Riemann sum of −0.3750." · readout Σ = above − below = sum, beside A₁ − A₂ = −4/3 · graph alone · 2D.
- `fig-odd-triangles` · Figure 5.19 (Example 5.9) · `net-signed-area` · standardisation only: 2x on [−4, 4], the triangles A₁ and A₂ · still · 2D.
- `sim-car-trips` · Figure 5.20 + 5.21 · `displacement-from-velocity`, `net-signed-area`, `total-area` · value add: flow by animation: the car drives along its road (kinematic: the car's motion) while the area under v(t) fills in up to the moving time line, above the axis going north and below it coming back; choice of trip (70 mph for 2 hours | 60 north then 40 south) · arrows: the north arrow is notation · moving, the car and the time line, 5 s a trip, 1.2 s hold · headline: "t = 3.6 h: the car is 55 mi north of its start, after 185 mi of driving." · readout the integrals to the current time with their values, and a note giving the total distance · scene above graph (a horizontal road) · 2D.
- `fig-total-area` · Figure 5.22 (Example 5.10) · `total-area` · standardisation only · still · 2D.
- `fig-compare-roots` · Figure 5.23 + 5.24 (Example 5.13) · `integral-comparison-theorem` · standardisation only: the book's two panels, (a) −2 to 3 with the region under g over [0, 1] shaded, (b) zoomed to [0, 1] with the thin gap between g and f shaded; f and g in their referent colours · still · 2D. A zoom slider was weighed and dropped: the book's two fixed views are the lesson, and a zoom is a visual setting (rule 26.7).
- `fig-trapezoid` · Figure 5.25 (Example 5.14) · `average-value-of-a-function` · standardisation only · still · 2D.

Unnumbered images: Checkpoint 5.9's graph in its card; the exercise images in their cards.

## Extra simulations (rule 15)

None built. Weighed: a slider on c for property 6 (the text's algebra says it), the bounds m(b − a) ≤ ∫ ≤ M(b − a) (5.3's Mean Value Theorem figure draws them with the average value).

## Exercises

- Checkpoints 5.7–5.13 inline after their examples.
- Section exercises 60–143: the 42 odd ones keyed and kept. Even ones kept with AI-written answers: 104, 106, 108 (comparisons), 124, 126, 128, 130, 132, 134 (demonstrations), 142 (a yes-or-no with its reason); the computational evens left out and named in `exercise_notes`.
- Corrections (notes under the cards): 101 (the key's working drops a minus sign), 125 (the prompt's A = π is 2, and the key writes B − A for A − B), 132 (a < c < b for a < b < c).
- Review exercises 440 (∫f² = (∫f)², an AI-written counterexample) and 441 (keyed True) are set here, `source_section` 5.7.

## Wanted at chapter level

Applied by this chapter's agent: variables anchors (f, a, b → `5.2-definite-integral-definition`; g, c → `5.2-integral-properties`; A, v → `5.2-area-integral`; m, M → `5.2-comparison-theorem`; f_ave → `5.2-average-value-definition`) and forms anchors (`eq-definite-integral`, `eq-dummy-variable`, `eq-net-signed-area`, `eq-total-area`, the six `eq-integral-*`, the three `eq-comparison-*`, `eq-average-value`). Done. r440 and r441 in the chapter pass.


## Derivations

- Continuous Functions Are Integrable (stated without proof) · score 9 · not built: the proof rests on uniform continuity and completeness, which the book never states
- Example 5.7 · Evaluating an Integral Using the Definition · score 1 · not built: a worked example applying the section's definition, every line printed
- Average Value of a Function · score 0 · built as drv-average-value (a printed block; the sampling sentence stays, the displays and their connecting sentences replaced, the book's "This is a Riemann sum…" kept as the limit move's reason)
- Comparison Theorem (stated without proof) · score 4 · not built: three moves per part, under the four-move floor
