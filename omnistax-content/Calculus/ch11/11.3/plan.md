# Plan: 11.3 Polar Coordinates (m53852)

Source: `source.md`, converted with `tools/convert.py 11`. Status: plan; config 2 waives the review for this run (Chen, 2026-10-12), built the same day, decisions reported afterwards. Template: `ch01/1.1` for conventions.

Five objectives, an opening paragraph, two theorem notes (Equations 11.7, 11.8), one Problem-Solving Strategy, one media note, Examples 11.10–11.15, five checkpoints (11.10–11.14), Figures 11.27–11.38 and one unnumbered image (the symmetry table), five Key Concepts, 63 section exercises (32 keyed), ten glossary terms. One page.

## Sub-concepts (page headers)

The book's three headers apply and are kept.

0. `intro` (no header): the opening paragraph.
1. `defining` **Defining Polar Coordinates**: P with r and θ (Figure 11.27), the conversion theorem `fs-id1167793948751` (Equations 11.7, 11.8), Example 11.10, Checkpoint 11.10, non-uniqueness and negative r, the polar coordinate system (Figure 11.28) with the polar axis and pole, Example 11.11 (Figure 11.29), Checkpoint 11.11. Introduces `polar-coordinate-system`, `radial-coordinate`, `angular-coordinate`, `converting-points-between-coordinate-systems`, `polar-axis`, `pole`.
2. `polar-curves` **Polar Curves**: the strategy note `fs-id1167794333153`, Example 11.12 (Figure 11.30), Checkpoint 11.12, Example 11.13, Checkpoint 11.13, the common curves (Figures 11.31, 11.32), the rose (Figures 11.33, 11.34), Example 11.14 (Figures 11.35, 11.36), the parameterization of a polar curve. Introduces `polar-equation`, `plotting-a-curve-in-polar-coordinates`, `cardioid`, `limacon`, `rose`, `archimedean-spiral`, `logarithmic-spiral`, `parameterization-of-a-polar-curve`.
3. `symmetry` **Symmetry in Polar Coordinates**: the theorem note `fs-id1167794226648`, the symmetry table (unnumbered image), Example 11.15 (Figures 11.37, 11.38), Checkpoint 11.14. Introduces `symmetry-in-polar-curves`.

Example 11.10's second list is lettered e.–g. in the problem as the CNXML starts it (the converter restarted it at a.). The media note (a video on sketching polar curves) is dropped and named in `notes`; it seeds the polar figures.

## Concept nodes

Introduced here: the 15 concepts of 11.3 in `book-rows.json`. Uses: `trigonometric-functions`, `inverse-trigonometric-functions` (Example 11.10b), `radian`, `function`, `periodic-function`, `symmetry-about-the-y-axis`, `symmetry-about-the-origin`, `even-function`, `odd-function`, `parametric-equations`.

## Colour, referents and function tokens

Categories: `curve` for polar curves and their family names; `angle` for θ (variables row: angular coordinate) and its arc; `point` for P, the plotted points, the pole; `line` for the polar axis and the ray of θ. r, x, y, a, b, k stay ink. No referents: the three points of Figure 11.29 are told apart by their labels, the two points of the symmetry Sim by theirs. Function tokens: none (polar functions are not graphed by the Grapher).

## Figures

Polar figures are still: the reader drags θ (the point runs along the curve by `F.polar.grip`, or the θ slider steps it), the curve is drawn solid up to θ and faint beyond, the ray from the pole at θ, dashed behind the pole when r < 0; the polar frame (`F.polar.frame`) gives rings and spokes. Readouts write the polar function with the live θ and r.

- `sim-polar-point` · Figure 11.27 · `converting-points-between-coordinate-systems` · variation: P anywhere in the plane, its (x, y) and its (r, θ) read together · arrows: none · still · sliders x and y (ink, −5 to 5, default (3, 2)), P dragged (`F.drag`) · headline "P = (3.00, 2.00): r = 3.61, θ = 0.59" · graph alone · 2D, one scale. Readout: x = r cos θ, y = r sin θ and r² = x² + y², tan θ = y/x with the numbers; θ is chosen in P's quadrant, in [0, 2π). Labels P(x, y), r on the segment, θ at its arc.
- `sim-polar-plot` · Figure 11.28 · `polar-coordinate-system`, `polar-axis`, `pole`, `radial-coordinate`, `angular-coordinate` · variation: the plotting rule, start with the angle and then move r along its ray or, for r < 0, the opposite ray · arrows: none · still · sliders r (ink, −5 to 5, default −2) and θ (angle, −2π to 2π, detents at multiples of π/6, default 4π/3), the point dragged free (`F.polar.grip` with r and θ) · headline "(−2, 4π/3): turn 4π/3 from the polar axis, then go 2 units back through the pole" · 2D, the book's grid of spokes every π/12 and rings 1–5. Default state is the text's (−2, 4π/3), the point (1, √3).
- `fig-three-points` · Figure 11.29 · `polar-coordinate-system` · standardisation: Example 11.11's answer redrawn on the polar frame, each point at the end of its ray, (−3, 2π/3) behind the pole on the dashed ray · faithful copy (kind `figure`), no controls · 2D.
- `sim-polar-circle` · Figure 11.30 · `polar-equation`, `plotting-a-curve-in-polar-coordinates` · variation: r = 4 sin θ drawn up to θ; for π < θ < 2π, r < 0 and the point retraces the circle from behind the pole · arrows: none · still · slider θ (angle, 0 to 2π, default 3π/4, specials at π/2 and π) with the grip · "θ = 2.36: r = 4 sin θ = 2.83" · 2D. Readout r = 4 sin θ and x² + (y − 2)² = 4 with the numbers.
- `sim-common-curves` · Figure 11.31 + 11.32 · `polar-equation`, `cardioid`, `limacon`, `rose`, `archimedean-spiral` · variation by a discrete state: the book's two tables of common curves become one choice (line θ = K, circle r = a cos θ + b sin θ, spiral r = a + bθ, cardioid r = a(1 + cos θ), limaçon r = a sin θ + b, rose r = a sin(bθ)), each opening on the book's example (θ = π/3; r = 2 cos θ − 3 sin θ; r = θ/3; r = 3(1 + cos θ); r = 2 + 4 sin θ; r = 3 sin 2θ) · arrows: none · still · choice (6 options), sliders θ (angle, the family's range) and a and b (ink, those the family has; the others leave the row) · headline names the curve and its equation with the numbers · 2D.
- `sim-rose` · Figure 11.33 + 11.34 · `rose` · variation by a discrete state: the coefficient k of r = 3 sin kθ (2, 3, 4, 5, the rational 6/5 and the irrational √2, stand-ins for the book's unnamed coefficients of Figure 11.34), θ drawn up to its slider; the petals count for whole k and the curve closes for 6/5 at θ = 10π and never for √2 · still · choice k, slider θ (angle, range per k) · "k = 3 (odd): three petals, traced once as θ runs to π" · 2D.
- `sim-spiral` · Figure 11.35 · `archimedean-spiral` · variation: P's distance from the origin is kθ (plus a) as θ grows · still · sliders θ (angle, 0 to 4π, default 3π), k (ink, 0.1 to 1, default 0.5) and a (ink, 0 to 2, default 0) · "θ = 9.42: P is 4.71 from the origin" · 2D. Readout d(P, O) = r = a + kθ and (x, y).
- `sim-log-spiral` · Figure 11.36 · `logarithmic-spiral` · variation: r = a·b^θ with the book's a = 1.2, b = 1.25 over −4π ≤ θ ≤ 4π; the original is the book's nautilus photograph beside its spiral (caption and credit kept in the row) · still · sliders θ (angle, default 4π), a (ink, 0.5 to 2), b (ink, 1.05 to 1.4) · 2D.
- `sim-symmetry` · Sim (replaces the unnumbered symmetry table, its original kept) · `symmetry-in-polar-curves` · variation by a discrete state: the three symmetries on the book's three curves, r = 2 − 2 cos θ with (r, θ) and (r, −θ), r² = 9 cos(2θ − π/2) with (r, θ) and (−r, θ), r = 2 − 2 sin θ with (r, θ) and (r, π − θ); the reader drags the point and its mirror point follows on the curve · still · choice, slider θ (angle) · headline names the symmetry and both points · 2D. Readout: f(θ) and f at the mirror's angle, equal.
- `sim-rose-symmetry` · Figure 11.37 + 11.38 · `symmetry-in-polar-curves`, `rose` · variation: r = 3 sin 2θ traced up to θ; the part traced in [0, π/2] is reflected, faint, about the polar axis, the pole and θ = π/2, which is how the example completes the rose from one petal · still · slider θ (angle, 0 to 2π, default π/2, special at π/2) · "θ = π/2: one petal; its three reflections complete the four-petaled rose" · 2D. Readout: r = 3 sin 2θ with the table's numbers.

Photographs: none kept as photographs; Figure 11.36's photograph is the figure's original. Checkpoint answer images (11.11, 11.12, 11.14) and exercise answer images stay in their solutions; the stem image of exercises 132–135 (points A–D on a polar grid) is kept in the stem as the book's.

## Exercises

- Checkpoints 11.10–11.14 inline after Examples 11.10–11.13 and 11.15; open answers.
- Section exercises 125–187: the 32 keyed odd ones kept; the 31 even ones are computational or "use technology" sketches and left out, named in `exercise_notes`.
- Review exercises held here (`source_section` 11.5): 331 (r = 5 cos 5θ and its symmetry, keyed), 333 (the polar form of y² = 4 + x², keyed); 322 (rectangular coordinates of (4, 5π/6), unkeyed true or false) kept with an AI-marked approach. 330 and 332 (unkeyed) left out.
- Keys checked (conversions by computation); none corrected.

## Corrections

- `c-example-ref`: "Example 11.14 gives some more examples of functions for transforming from polar to rectangular coordinates": the book links the spiral example; the transformations are Example 11.13's.

## Extra simulations (rule 15)

None beyond the folds and the symmetry Sim: a cardioid-as-rolling-circle (the glossary's definition) is a definition the text never draws or uses; the 11.4 sectors take polar areas.

## Wanted at chapter level

- forms `eq-polar-to-rectangular` → `11.3-fs-id1167794066096`, `eq-rectangular-to-polar` → `11.3-fs-id1167793834620`, `eq-polar-parameterization` → `11.3-polar-parameterization`, `eq-limacon`, `eq-cardioid`, `eq-rose`, `eq-archimedean-spiral` → `11.3-fs-id1167794047292`, `eq-logarithmic-spiral` → `11.3-fs-id1167794047292`.
- variables `11.3/x`, `/y`, `/r`, `/θ`, `/P` → `11.3-fs-id1167793948751`; `/f` → `11.3-polar-curves-intro`; `/a`, `/b` → `11.3-common-curves`; `/k` → `11.3-fs-id1167794047292`.

Applied in the chapter pass (2026-10-13): every form and variables anchor above set with `ost set` (anchors resolve, `ost check` clean); the review rows written into section.json with `source_section` 11.5.

## Derivations

- Defining Polar Coordinates · (11.7) and (11.8) · score 2 · built as drv-polar-conversion (a thin printed block; x and y from cosine and sine, and the book's unexplained r² = x² + y² and tan θ = y/x derived from them with the Pythagorean identity and tan = sin/cos)
- Example 11.12 · score 1 · not built: a worked example converting one equation
- Example 11.14 · score 1 · not built: a worked example
- Example 11.15 · score 2 · not built: a worked example of the symmetry tests
