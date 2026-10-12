# Plan: 6.4 Arc Length of a Curve and Surface Area (m53644)

Source: `source.md`. Status: plan; config 2 waives the review for this run, decisions reported afterwards.

Three objectives, two opening paragraphs, three theorem notes, Figures 6.37 to 6.47, Examples 6.18 to 6.22, five checkpoints (6.18–6.22), three Key Equations, four Key Concepts, 53 section exercises (165–217, 27 keyed), three glossary terms.

## Sub-concepts (the book's headers)

0. `arc-length-intro` (no header): introduces `arc-length` (its `{term}`).
1. `arc-length-x` **Arc Length of the Curve y = f(x)**: smooth functions, the segments and their Pythagorean lengths, the Mean Value Theorem, the theorem note `arc-length-x-theorem`, Examples 6.18, 6.19. Introduces `smooth-function`, `arc-length-of-a-function-of-x`.
2. `arc-length-y` **Arc Length of the Curve x = g(y)**: the note `arc-length-y-theorem`, Example 6.20. Introduces `arc-length-of-a-function-of-y`.
3. `surface-area` **Area of a Surface of Revolution**: surface area, the surface of revolution, frustum bands, the cone's and the frustum's lateral surface areas, the band's area, the theorem note `surface-area-theorem`, Examples 6.21, 6.22. Introduces `surface-area`, `surface-of-revolution`, `frustum`, `lateral-surface-area-of-a-frustum`, `surface-area-of-a-surface-of-revolution`.

Key Equations to `eq-arc-length-x`, `eq-arc-length-y`, `eq-surface-area-x`.

## Colour and referents

`function` for f, g and the curves; `derivative` for f′, g′; `integral` for the segments' lengths, the bands, S and the arc length and surface area themselves; `surface` for the surface of revolution (drawn as a sheet). r₁, r₂, l, s, r, h ink. No referents: one curve per figure.

## Figures

One WebGL scene (6.40 + 6.41); the rest flat or painted locked views.

- `sim-arc-segments` · Figure 6.37 + 6.38 · `arc-length-of-a-function-of-x` · value add: variation: n segments between points of the stand-in f(x) = 1.5 + 1.2 sin(1.1x − 0.3) + 0.1x on [0.5, 5.2] (the book's curve rises and falls, no formula), the representative segment's right triangle Δx, Δyᵢ under the dragged x; the sum of lengths closing on ∫√(1 + [f′]²) · still · slider n (default 5, the book's), drag x · 2D.
- `fig-segment-y` · Figure 6.39 · faithful copy: a segment of the stand-in x = g(y) = 0.6 + 0.35y² over [yᵢ₋₁, yᵢ] with its legs · still · 2D.
- `sim-frustum-bands` · Figure 6.40 + 6.41 · `surface-area-of-a-surface-of-revolution`, `frustum` · value add: 3D and variation: the stand-in f(x) = 1 + 0.5 sin 1.2x + 0.2x on [0, 3.5] swept about the x-axis, faint, and the bands its n inscribed segments sweep; Σπ(f(xᵢ₋₁) + f(xᵢ))lᵢ closing on ∫2πf√(1 + f′²) · still · slider n · mathematical 3D, free orbit, no buttons.
- `sim-frustum-cone` · Figure 6.42 + 6.43 + 6.44 · `lateral-surface-area-of-a-frustum` · value add: variation: a cone (r₁ = 1.6, height 2.4, s ≈ 2.88) cut l up its slant; the frustum below and the faint small cone above; πr₁s − πr₂(s − l) = π(r₁ + r₂)l with the numbers; at l = s (a dashed circle, "the whole cone") it is Figure 6.43's πrs · still · slider l · locked view. Folded: the derivation reads the three pictures as one cone cut in stages.
- `fig-band` · Figure 6.45 · faithful copy: one band on the curve between xᵢ₋₁ and xᵢ, labelled · locked view.
- `fig-sqrt-surface` · Figure 6.46 (Example 6.21) · faithful copy: √x on [1, 4] and its surface about the x-axis · locked view.
- `fig-cubic-surface` · Figure 6.47 (Example 6.22) · faithful copy: x = y³/3 on [0, 2] and its surface about the y-axis · locked view.

Photographs: none.

## Exercises

- Checkpoints 6.18–6.22 inline.
- Section exercises 165–217: odd keyed kept; 215 ("Answers may vary") and 217 (a pointer to Gabriel's Horn) carry AI approaches; 168 (a linear length checked by geometry) kept with one; 213's key is the predicted limit 2 (open). The other 25 even ones computational, left out.
- Review exercises held here (chapter pass): 453 (an arc length along y), 455 (the loudspeaker's volume and surface area, two parts); 454 left out.

## Extra simulations (rule 15)

Judged: a curve the reader draws to compare lengths (exercises 213, 214 would be answered); Gabriel's Horn (exercise 217's subject, an improper integral of Chapter 7). None built.

## Wanted at chapter level

- variables `6.4/f`, `6.4/f_prime` → `6.4-arc-length-x`; `6.4/g`, `6.4/g_prime` → `6.4-arc-length-y`; `6.4/S` → `6.4-surface-area`.
- forms `eq-arc-length-x`, `eq-arc-length-x-sum` → `6.4-arc-length-x-theorem` (the sum is stated in `6.4-arc-length-x`); `eq-arc-length-y` → `6.4-arc-length-y-theorem`; `eq-lateral-surface-area-cone`, `eq-lateral-surface-area-frustum` → `6.4-surface-area`; `eq-surface-area-x`, `eq-surface-area-y` → `6.4-surface-area-theorem`.
- Review exercises 453, 455 (tmp/ch06/sec_6_4.py, `RV`).

Applied in the chapter pass (2026-10-13): every anchor above set with `ost set` (tmp/ch06/anchors6.py; a few spans moved to the nearest id the text has, such as the section header where the plan named a note); review exercises held here landed with `source_section` 6.9.
