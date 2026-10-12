# Plan: 6.3 Volumes of Revolution: Cylindrical Shells (m53643)

Source: `source.md`. Status: plan; config 2 waives the review for this run, decisions reported afterwards.

Two objectives, an opening paragraph, two rule notes, Figures 6.25 to 6.36, Examples 6.12 to 6.17, six checkpoints (6.12–6.17), one Key Equation, two Key Concepts, 51 section exercises (114–164, 25 keyed), one glossary term.

## Sub-concepts (the book's headers)

0. `shells-intro` (no header).
1. `shells` **The Method of Cylindrical Shells**: the region about the y-axis, the shell's volume from the annulus, the flat plate, the Riemann sum, the rule note `shell-method-rule`, Examples 6.12, 6.13; the x-axis rule `shell-method-x-rule`, Example 6.14; another axis x = −k, Example 6.15; two functions, Example 6.16; checkpoints. Introduces `method-of-cylindrical-shells`, `shell-method-about-the-x-axis`.
2. `which-method` **Which Method Should We Use?**: Figure 6.34, Example 6.17 and its checkpoint. Introduces `choosing-a-method-for-volume`.

Key Equation to `eq-shell-method`. No media note.

## Colour and referents

As 6.2: `region` for the region and the solids, `integral` for V, V_shell and the shells, `function` for f, g and the curves, `line` for the axis x = −1. Referents: `ex16-f` (√x) and `ex16-g` (1/x) of Example 6.16; `ex17-left` (y = x) and `ex17-right` (y = 2 − x) of Example 6.17(a). In Figure 6.34 the washer column's f and g both wear `function`, told apart by their labels: the text never names them, so referents would have no mention to mark.

## Figures

Three WebGL scenes (6.25 + 6.26, 6.28, 6.35); the examples' solids are painted locked views.

- `sim-shells` · Figure 6.25 + 6.26 · `method-of-cylindrical-shells` · value add: 3D and variation: n midpoint rectangles under the stand-in f(x) = 1 + 0.25x² on [1, 3] (the book draws a rising curve of no formula) turn about the y-axis into nested shells inside the faint solid, the quarter toward the reader cut away; the sum Σ2πxᵢ*f(xᵢ*)Δx closes on 18π · still · slider n (default 5) · mathematical 3D, free orbit, no buttons (looking down the axis shows the nesting).
- `fig-shell-rectangle` · Figure 6.27 · faithful copy: the rectangle over [xᵢ₋₁, xᵢ] of height f(xᵢ*) under the same curve, Δx bracketed · still · 2D.
- `sim-unroll-shell` · Figure 6.28 · `method-of-cylindrical-shells` · value add: flow by morph and 3D: one shell (radius 2, height 2, thickness 0.4) cut along the front and opened into a flat plate 2πxᵢ* wide; the surface keeps its arc length while its radius r/(1 − k) grows · arrows none · a story slider k (stops: the shell, opening, the plate), played by the transport · readout V_shell ≈ f(xᵢ*)(2πxᵢ*)Δx with the numbers · mathematical 3D, free orbit.
- `fig-shells-reciprocal` · Figure 6.29 (Example 6.12) · faithful copy: 1/x on [1, 3]; the back half of the solid, as the book's (b) · locked view.
- `fig-shells-parabola` · Figure 6.30 (Example 6.13) · faithful copy, the solid cut open · locked view.
- `fig-shells-x-axis` · Figure 6.31 (Example 6.14) · faithful copy: the region left of 2√y about the x-axis, cut open · locked view.
- `sim-shell-shifted-axis` · Figure 6.32 (Example 6.15) · `method-of-cylindrical-shells` · value add: variation: the rectangle at x and its shell about x = −1, the radius x + 1 bracketed · still · slider x · readout 2π(x + 1)f(x), V = 23π/3 · locked view.
- `fig-shells-two-functions` · Figure 6.33 (Example 6.16) · faithful copy, referents `ex16-f`, `ex16-g` · locked view.
- `fig-method-table` · Figure 6.34 · faithful copy of the book's table (it is printed as an image with no caption; the image's own title is the caption): the three columns, their formulas and the six small graphs, redrawn live · still.
- `sim-best-method` · Figure 6.35 (Example 6.17a) · `choosing-a-method-for-volume` · value add: variation and 3D: the triangle under y = x and y = 2 − x about the x-axis, sliced by a choice into disks (two formulas, split at x = 1) or shells (one formula from y = x to y = 2 − y), the readout writing the integrals the example sets up, 2π/3 either way · still · choice disks/shells (default shells, the example's pick), slider n · mathematical 3D, free orbit.
- `fig-best-method-b` · Figure 6.36 (Example 6.17b) · faithful copy: 4x − x² about the x-axis · locked view. Not folded with 6.35: (b) is a different region whose point is that shells do not suit it.

Photographs: none.

## Exercises

- Checkpoints 6.12–6.17 inline; 6.17 (choose a method and set up the integral) is an open answer.
- Section exercises 114–164: odd keyed kept (159, 161, 163 open, symbolic); 164 (prove the shell and disk integrals agree) kept with an AI approach; the other 25 even ones computational, left out (158, 160, 162 included: they compute known volumes).
- Review exercises held here (chapter pass): 443, 445, 447 (area and both volumes, multi-part); 442, 444, 446, 448 left out.

## Extra simulations (rule 15)

Judged: a shell sliding through the solid (the nested shells already show it); none built.

## Wanted at chapter level

- variables `6.3/V`, `6.3/V_shell`, `6.3/f`, `6.3/R` → `6.3-shells`; `6.3/Q`, `6.3/g` → `6.3-shell-method-x-rule`.
- forms `eq-shell-method`, `eq-shell-volume` → `6.3-shell-method-rule` (the volume of one shell is stated in `6.3-shells`); `eq-shell-method-shifted-axis` → `6.3-shells`; `eq-shell-method-x-axis` → `6.3-shell-method-x-rule`.
- Review exercises 443, 445, 447 (spec in tmp/ch06/sec_6_3.py, `RV`).

Applied in the chapter pass (2026-10-13): every anchor above set with `ost set` (tmp/ch06/anchors6.py; a few spans moved to the nearest id the text has, such as the section header where the plan named a note); review exercises held here landed with `source_section` 6.9.
