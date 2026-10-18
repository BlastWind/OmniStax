# Plan: 6.6 Moments and Centers of Mass (m53649)

Source: `source.md`. Status: plan; config 2 waives the review for this run, decisions reported afterwards.

Four objectives, two opening paragraphs, six theorem notes and a proof, Figures 6.62 to 6.74, Examples 6.29 to 6.34, six checkpoints (6.29–6.34), the Skywalk project, eight Key Equations, five Key Concepts, 41 section exercises (254–294, 20 keyed), five glossary terms.

## Sub-concepts (the book's headers)

0. `moments-intro` (no header).
1. `moments` **Center of Mass and Moments**: the seesaw, two masses, the moment, `line-theorem`, Example 6.29; point masses in the plane, `plane-theorem`, Example 6.30. Introduces `moment`, `center-of-mass`, `center-of-mass-on-a-line`, `center-of-mass-in-a-plane`.
2. `thin-plates` **Center of Mass of Thin Plates**: laminas and centroids, `symmetry-theorem`, the rectangles under f, `plate-theorem`, Example 6.31; between two functions, `two-functions-theorem`, Example 6.32. Introduces `lamina`, `centroid`, `symmetry-principle`, `center-of-mass-of-a-thin-plate`, `center-of-mass-of-a-lamina-between-two-functions`.
3. `symmetry` **The Symmetry Principle**: Example 6.33; the Skywalk project.
4. `pappus` **Theorem of Pappus**: `pappus-theorem`, its proof by shells, Example 6.34. Introduces `theorem-of-pappus-for-volume`.

## Colour and referents

`point` for x̄, ȳ and every centroid or center of mass (a filled dot with a ring); `integral` for M, Mₓ, M_y, m and the masses; `region` for laminas; `function` for f, g. Referents `ex32-f` (1 − x²) and `ex32-g` (x − 1) for Example 6.32.

## Figures

- `sim-seesaw` · Figure 6.62 + 6.63 · `center-of-mass`, `moment` · value add: variation: m₁ = 2 at −3 and m₂ at 2 on a light rod; the rod tips toward the larger moment about the fulcrum and lies level only at x̄, marked on the number line below · still · sliders fulcrum, m₂ · 2D. Checkpoint 6.29's masses are not used.
- `fig-point-mass-plane` · Figure 6.64 · faithful copy · 2D.
- `sim-lamina` · Figure 6.65 + 6.66 · `center-of-mass-of-a-thin-plate` · value add: variation: the stand-in f(x) = 1.5 + 0.8 sin 0.9x + 0.15x on [1, 5]; n rectangles with their centers (xᵢ*, f(xᵢ*)/2), the rectangles' center of mass closing on the centroid (+) · still · slider n, drag x · 2D.
- `fig-sqrt-lamina` · Figure 6.67 (Example 6.31) · faithful copy with the centroid (12/5, 3/4).
- `sim-lamina-between` · Figure 6.68 + 6.69 · `center-of-mass-of-a-lamina-between-two-functions` · value add: variation: stand-ins f(x) = 2.55 + 0.85 cos 1.35x above g(x) = 0.55 + 0.75 sin(0.62x + 0.1); the representative rectangle at the dragged xᵢ*, its center at (f + g)/2, its mass and moments · still · drag xᵢ* · 2D.
- `fig-centroid-two` · Figure 6.70 (Example 6.32) · faithful copy, referents `ex32-f`, `ex32-g`, centroid (−1/2, −3/5).
- `fig-symmetric-centroid` · Figure 6.71 (Example 6.33) · faithful copy, centroid (0, 8/5).
- `fig-skywalk` · Figure 6.72 · photograph kept.
- `fig-skywalk-model` · Figure 6.73 · faithful copy: R₁, R₂, R₃, the visitor center and the canyon wall.
- `sim-pappus` · Figure 6.74 (Example 6.34) · `theorem-of-pappus-for-volume` · value add: 3D and flow: the disk of radius 2 at (4, 0) turned about the y-axis, the centroid's path traced in the point colour, V = A·d growing to 32π² · story slider θ (the region, half a turn, the torus), played by the transport · readout d and V · mathematical 3D, free orbit, no buttons. Fixed R = 4, r = 2: Checkpoint 6.34's torus (radius 1 at (3, 0)) is not reachable.

## Exercises

- Checkpoints 6.29–6.34 inline; 6.29–6.33 multi-part (the moment and x̄, or x̄ and ȳ). Checkpoint 6.30 says “on a number line” for points of the plane: kept as printed, with a correction under its card.
- Section exercises 254–294: the 20 odd keyed kept (261, 271, 281, 283, 291, 293 symbolic, open). The book prints 290–294 after the stem of 285–289; here they carry no stem. The 21 even ones left out.
- Review exercise held here (chapter pass): 451 (mass and center of mass, three parts); 450 left out.

## Extra simulations (rule 15)

Judged: dragging point masses in the plane to see the center move (Example 6.30 computes it once; the seesaw already shows moments balancing); the Skywalk's center of gravity as visitors walk out (project steps 5 and 6, which the reader is asked to compute). None built.

## Wanted at chapter level

- variables `6.6/M`, `6.6/m`, `6.6/x_bar` → `6.6-line-theorem`; `6.6/M_x`, `6.6/M_y`, `6.6/y_bar` → `6.6-plane-theorem`; `6.6/ρ`, `6.6/R`, `6.6/f` → `6.6-plate-theorem`; `6.6/g` → `6.6-two-functions-theorem`; `6.6/A`, `6.6/V` → `6.6-pappus`.
- forms of `moment`, `center-of-mass`, `center-of-mass-on-a-line`, `center-of-mass-in-a-plane`, `center-of-mass-of-a-thin-plate`, `center-of-mass-of-a-lamina-between-two-functions`, `theorem-of-pappus-for-volume` → the notes above.
- Review exercise 451 (tmp/ch06/sec_6_6.py, `RV`).

Applied in the chapter pass (2026-10-13): every anchor above set with `ost set` (tmp/ch06/anchors6.py; a few spans moved to the nearest id the text has, such as the section header where the plan named a note); review exercises held here landed with `source_section` 6.9.

## Derivations

- Center of Mass and Moments · two point masses on a line · score 1 · built as drv-center-of-mass-of-two-masses (the n-mass formula after it is stated, not derived, and stays)
- Center of Mass of a Thin Plate (6.18)–(6.20) · score 2 · built as drv-center-of-mass-of-a-thin-plate, a node each for m (6.18), Mx and My (6.19); (6.20) is (6.17) restated, no move
- Center of Mass of a Lamina Bounded by Two Functions (6.21)–(6.23) · score 3 · not built: hidden ("we won't go through all the details") and under the bar, its moves the plate's own development
- Theorem of Pappus for Volume · Proof · score 3 · built as drv-theorem-of-pappus (d·A from (6.21)–(6.23), joined with the shell volume of 6.3)
