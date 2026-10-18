# Plan: 6.5 Physical Applications (m53648)

Source: `source.md`. Status: plan; config 2 waives the review for this run, decisions reported afterwards.

Five objectives, an opening paragraph, two theorem notes, a definition, two problem-solving strategies, Figures 6.48 to 6.61 and one unnumbered image (the dam), Examples 6.23 to 6.28, six checkpoints (6.23–6.28), a media note, five Key Equations, four Key Concepts, 36 section exercises (218–253, 18 keyed), four glossary terms.

## Sub-concepts (the book's headers)

0. `physical-intro` (no header).
1. `mass-density` **Mass and Density**: the rod and its density function, the Riemann sum, `mass-1d-theorem`, Example 6.23; the disk and its washers, `mass-circular-theorem`, Example 6.24. Introduces `density-function`, `mass-of-a-one-dimensional-object`, `mass-of-a-circular-object`.
2. `work-force` **Work Done by a Force**: units, the definition note `work-definition`, Hooke's law, Example 6.25. Introduces `work`, `hookes-law`.
3. `pumping` **Work Done in Pumping**: the cylindrical tank worked in the text, the strategy `pumping-strategy`, Example 6.26. Introduces `work-done-in-pumping`.
4. `hydrostatic` **Hydrostatic Force and Pressure**: pressure, Pascal's principle, the vertical plate, the strategy `hydrostatic-strategy`, Examples 6.27, 6.28 (the Hoover Dam). Introduces `hydrostatic-pressure`, `pascals-principle`, `hydrostatic-force-on-a-plate`, `finding-hydrostatic-force`.

Equations numbered for the book's references: 6.10 to 6.13 (6.13 is cited by the strategy and Example 6.28).

## Colour and referents

`function` for ρ, F (a force function), w and s; `integral` for m, W, F_h and the pieces (segments, washers, layers, strips); `region` for the water and the solids it fills. `F` in the hydrostatic part is the force on a plate, `F_h` (\kFh); p, the pressure, its own symbol. No referents.

## Figures

All 2D or painted locked views: the tanks are solids the reader does not need to turn.

- `sim-rod-density` · Figure 6.48 + 6.49 · `mass-of-a-one-dimensional-object` · value add: variation: Example 6.23's rod ρ(x) = sin x on [π/2, π], shaded by density, cut into n segments; the graph of ρ below with the segments' masses as rectangles; the sum closing on 1 · still · slider n, slider x (picks a segment, draggable) · 2D.
- `sim-radial-density` · Figure 6.50 · `mass-of-a-circular-object` · value add: variation: Example 6.24's disk (r = 4, ρ = √x) shaded by density, cut into n washers; beside it 2πxρ(x) with the washers' masses; the sum closing on 128π/5 · still · sliders n, x · 2D.
- `sim-spring` · Figure 6.51 · `hookes-law`, `work` · value add: variation: Example 6.25's spring (k = 50 N/m) compressed or stretched to x, the force arrow, and the work as the area under F(x) = 50x · still · slider x with specials −0.2, 0, 0.5 · 2D.
- `sim-pump-cylinder` · Figure 6.52 + 6.53 · `work-done-in-pumping` · value add: variation: the text's tank (radius 4 m, height 10 m, filled to 8 m), the layer at depth x and the distance it is lifted; W = 7,526,400π J · still · slider x over [2, 10] · locked view.
- `sim-pump-cone` · Figure 6.54 + 6.55 · `work-done-in-pumping` · value add: variation: Example 6.26's cone (height 12, radius 4) pumped down to 4 ft; the layer at depth x and its radius by the similar triangles drawn beside it · still · slider x over [0, 8] · locked view. Checkpoint 6.26's tank (10 by 6, from 8 ft to 3 ft) is not drawn.
- `fig-horizontal-plate`, `fig-vertical-plate` · Figures 6.56, 6.57 · faithful copies · 2D.
- `sim-trough` · Figure 6.58 · `finding-hydrostatic-force` · value add: variation: Example 6.27's trough painted, and its end with the strip at depth x, w(x) = 8 − (8/3)x; F = 748.8 lb · still · slider x · locked view + 2D.
- `fig-dam-photo` · unnumbered image of the dam (a photograph beside the trapezoid) · kept as a photo figure with a written caption.
- `sim-hoover-dam` · Figure 6.59 + 6.60 + 6.61 · `finding-hydrostatic-force` · value add: variation and discrete states: the trapezoid face, the water from its surface to x = 540, the strip at x with w(x) = 1250 − (2/3)x and s(x), the similar triangle r = 250 − x/3; the force for each state · still · choice full (10 ft below the top) / the drought (135 ft), slider x · 2D. Checkpoint 6.28's average level (60 ft) is left out of the choice.

## Exercises

- Checkpoints 6.23–6.28 inline.
- Section exercises 218–253: the 18 odd keyed kept (247 and 243 two-part; 251 symbolic, open; 253 "Answers may vary", an AI approach, with a correction under its card: the book's A = πr²h²/H³ should be over H²). The book prints 234–253 after the stem of 229–233; here they carry no stem. The 18 even ones left out.
- Review exercises held here (chapter pass): 435 (True/False, pumping a half-full cylinder), 436 (constant force, no key, AI), 449 (mass of a disk); 456 (Karun-3 dam, no key) left out.

## Extra simulations (rule 15)

Judged: a cable wound up (exercises 240–242, computational); a pumping sim where the reader picks the tank's shape (the two tank sims already contrast cylinder and cone). None built.

## Wanted at chapter level

- variables `6.5/ρ`, `6.5/m` → `6.5-mass-density`; `6.5/W`, `6.5/F` → `6.5-work-definition`; `6.5/F_h`, `6.5/p`, `6.5/s`, `6.5/w` → `6.5-hydrostatic`.
- forms `eq-mass-rod` → `6.5-mass-1d-theorem`; `eq-mass-disk` → `6.5-mass-circular-theorem`; `eq-work` → `6.5-work-definition`; `eq-hookes-law` → `6.5-work-force`; `eq-hydrostatic-pressure` → `6.5-hydrostatic`; `eq-hydrostatic-force` → `6.5-hydrostatic` (the integral, Equation 6.13).
- Review exercises 435, 436, 449 (tmp/ch06/sec_6_5.py, `RV`).

Applied in the chapter pass (2026-10-13): every anchor above set with `ost set` (tmp/ch06/anchors6.py; a few spans moved to the nearest id the text has, such as the section header where the plan named a note); review exercises held here landed with `source_section` 6.9.

## Derivations

- Mass–Density Formula of a One-Dimensional Object (6.10) · score 1 · built as drv-mass-of-a-rod, ending on (6.10)
- Mass–Density Formula of a Circular Object (6.11) · score 2 · built as drv-mass-of-a-disk, ending on (6.11) (washer area, washer mass, then the sum)
- Work Done by a Force (6.12) · score 1 · built as drv-work-done-by-a-force, ending on (6.12)
- Work Done in Pumping · the cylindrical tank · score 3 · not built: the section's own method worked to a number, a worked problem
- Hydrostatic Force and Pressure (6.13) · score 2 · built as drv-hydrostatic-force-on-a-plate, ending on (6.13); Equation 6.13 in the strategy left as cited
