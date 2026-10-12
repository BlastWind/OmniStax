# Plan: 6.2 Determining Volumes by Slicing (m53642)

Source: `source.md`. Status: plan; config 2 waives the review for this run, decisions reported afterwards.

Three objectives, an opening paragraph, one strategy and four rule notes, Figures 6.11 to 6.24, Examples 6.6 to 6.11, six checkpoints (6.6–6.11), three Key Equations, three Key Concepts, 56 section exercises (58–113, 26 keyed), five glossary terms, one media note.

## Sub-concepts (page headers, the book's)

0. `volumes-intro` (no header).
1. `slicing` **Volume and the Slicing Method**: volume, cross-section, cylinder (V = A·h), the solid S and its slices, the Riemann sum ΣA(xᵢ*)Δx and its limit, the strategy note `slicing-strategy`, Example 6.6 (the pyramid) and its checkpoint. Introduces `cross-section`, `cylinder`, `slicing-method` (all at `slicing`), `finding-volumes-by-slicing` (at the strategy).
2. `solids-of-revolution` **Solids of Revolution**: the definition, Example 6.7 by slicing, checkpoint. Introduces `solid-of-revolution`.
3. `disk-method` **The Disk Method**: the disks of Figure 6.18, the rule notes `disk-method-rule` and `disk-method-y-rule`, Examples 6.8, 6.9. Introduces `disk-method`, `disk-method-about-the-y-axis`.
4. `washer-method` **The Washer Method**: cavities, Figure 6.22, the rule notes `washer-method-rule` and `washer-method-y-rule`, Examples 6.10, 6.11. Introduces `washer-method`, `washer-method-about-the-y-axis`.

The media note (an online integral calculator) is dropped and named in `notes`. Key Equations to the forms `eq-disk-method`, `eq-disk-method-y`, `eq-washer-method`.

## Colour and referents

`region` for the region revolved, the solid S, the solids of revolution, the pyramid and the cross-sections; `integral` for V and the slices, disks and washers summed; `function` for f, g, A(x) and the curves; `line` for the axis y = −2 (dashed); `angle` for θ in Figure 6.15. Referents: `outer-sqrt` (√x) and `inner-one` (1), the two boundaries of Figure 6.22 and its paragraph; `ex10-f` (x) and `ex10-g` (1/x) of Example 6.10.

## Figures

Three WebGL scenes on the page (6.15, 6.18, 6.22), the figures whose idea is the solid itself; the others are locked views painted on the canvas (`F.revolve.paint`), from the book's oblique viewpoint, since a page holds only a few WebGL contexts and an example's solid is read from one view.

- `sim-cylinder-slice` · Figure 6.11 · `cross-section`, `cylinder` · value add: variation: a plane slides along a half-cylinder (radius 1.2, length 4; the book draws one of unstated size) and the half-disk it cuts, drawn flat beside it, never changes; readout V = A·h · arrows none · still · slider x · headline "At x = 1.60 the plane cuts a half-disk of area 2.262, the same as everywhere along the solid" · the flat cross-section beside · locked view (rule 28.2: the book prints a perspective).
- `sim-slices` · Figure 6.12 + 6.13 · `slicing-method`, `cross-section` · value add: variation: a stand-in solid S with elliptical cross-sections (half-height q(x) = 0.7 + 0.35 sin 1.3x + 0.12x on [0.5, 4.5], half-depth 0.7q) cut into n slices, each replaced by the cylinder on its middle cross-section, S₁ … Sₙ named up to 8; the sum ΣA(xᵢ*)Δx beside V(S) = ∫A(x)dx · still · slider n (default 3, the book's) · locked view.
- `sim-pyramid` · Figure 6.14 (Example 6.6) · `slicing-method`, `finding-volumes-by-slicing` · value add: variation: the square cross-section of side s = ax/h slides from the tip to the base; (b) the side view's similar triangles beside it · still · sliders a (default 2), h (default 4), x · readout s, A(x) = s², V = a²h/3 · locked view; the book's symbols have no numbers, so a = 2, h = 4 are chosen.
- `sim-revolving` · Figure 6.15 · `solid-of-revolution` · value add: 3D and flow: the region under a stand-in f(x) = 1 + 0.6 sin 1.1x + 0.15x on [0.5, 4] turns about the x-axis through θ and sweeps out the solid · arrows none · a story slider θ (stops: the region 0°, a quarter turn 90°, the solid 360°), so the transport plays the turn; the camera opens head-on (the flat picture first) and lifts as the region turns, until the reader turns it · readout the share of the volume swept · mathematical 3D, free orbit (pitch ±77°), no buttons (the drag turns it; spin would only replay the story).
- `sim-cross-section-disk` · Figure 6.16 + 6.17 (Example 6.7) · `slicing-method`, `solid-of-revolution` · value add: variation: x dragged along [1, 4] on the region at the left, the circular cross-section of radius f(x) lit in the solid at the right; the book's two views are one turn of the solid, so a locked view and the region beside it carry both · still · slider/drag x · readout A(x) = π[f(x)]², V = 78π/5.
- `sim-disk-method` · Figure 6.18 · `disk-method` · value add: 3D and variation: n midpoint disks of f(x) = (x − 1)² + 1 on [−1, 3] inside the faint solid, their sum closing on 412π/15 · still · slider n (default 6) · readout Σπ[f(xᵢ*)]²Δx and ∫ · mathematical 3D, free orbit, no buttons; the disks are named on hover.
- `fig-sqrt-solid` · Figure 6.19 (Example 6.8) · faithful copy: √x on [1, 4], the region and the painted solid · standardisation · still.
- `sim-disk-y-axis` · Figure 6.20 + 6.21 (Example 6.9) · `disk-method-about-the-y-axis` · value add: variation: the horizontal rectangle at y between the y-axis and g(y) = √(4 − y) and the horizontal disk it turns into · still · slider y · readout π[g(y)]² = π(4 − y), V = 8π · locked view.
- `sim-washer-method` · Figure 6.22 · `washer-method` · value add: 3D and variation: n washers between √x and 1 on [1, 4], the solid's upper front quarter cut away so the cavity shows; the sum closing on 9π/2 · still · slider n · mathematical 3D, free orbit, no buttons. Referents `outer-sqrt`, `inner-one` for the two boundary curves.
- `fig-washer-example` · Figure 6.23 (Example 6.10) · faithful copy: x over 1/x on [1, 4], the painted solid cut open toward the reader · still.
- `sim-other-axis` · Figure 6.24 (Example 6.11) · `washer-method` · value add: variation: at x the segment from the axis y = −2 to the curve and to the x-axis, the radii 6 − x and 2 bracketed, and the washer lit in the solid · still · slider x · readout A(x) = π[(6 − x)² − 2²], V = 160π/3 · locked view.

Unnumbered image: the checkpoint graph `CNX_Calc_Figure_06_02_008.jpg` stays in Checkpoint 6.7's card. Photographs: none.

## Exercises

- Checkpoints 6.6–6.11 inline after their examples. Checkpoint 6.6 (derive the cone's volume) has no answer in the book: kept with an AI-written approach.
- Section exercises 58–113 with their stems. Odd keyed kept (the symbolic answers 67, 103, 105, 109, 111, 113 as open answers). The derivations 58–61 (59 and 61 odd but unkeyed) and the explanation 62 kept with AI approaches; 61 reads "trapezoidal cylinder" as the frustum a trapezoid sweeps. The other 24 even ones are computational and left out.
- Review exercises held here (added in the chapter pass, once 6.9 is built): 437 (true or false, keyed False), 439 (equilateral-triangle slices on an ellipse, 16√3), 441 (washers about the y-axis, 162π/5); 440 left out.

## Extra simulations (rule 15)

Judged and not built: a slider on the slicing direction (x or y) for one solid (6.3's method choice shows that); an applet-style calculator (the media note). None.

## Wanted at chapter level

- variables `6.2/V`, `6.2/A`, `6.2/S` → `6.2-slicing`; `6.2/f`, `6.2/R` → `6.2-disk-method`; `6.2/g`, `6.2/Q` → `6.2-disk-method-y-rule`; `6.2/u_fn`, `6.2/v` → `6.2-washer-method-y-rule`.
- forms `eq-volume-of-a-cylinder`, `eq-volume-of-a-right-circular-cylinder`, `eq-slicing-method`, `eq-slicing-sum` → `6.2-slicing`; `eq-disk-method` → `6.2-disk-method-rule`; `eq-disk-method-y` → `6.2-disk-method-y-rule`; `eq-washer-method` → `6.2-washer-method-rule`; `eq-washer-method-y` → `6.2-washer-method-y-rule`.
- Review exercises 437, 439, 441 (spec in tmp/ch06/sec_6_2.py, `RV`).

Applied in the chapter pass (2026-10-13): every anchor above set with `ost set` (tmp/ch06/anchors6.py; a few spans moved to the nearest id the text has, such as the section header where the plan named a note); review exercises held here landed with `source_section` 6.9.
