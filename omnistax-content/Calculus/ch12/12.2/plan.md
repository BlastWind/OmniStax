# Plan: 12.2 Vectors in Three Dimensions (m53897)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-13. Template: `ch01/1.1`.

Five objectives, an opening paragraph, two definitions, one theorem, three rules, Examples 12.11–12.20, ten checkpoints (12.11–12.20), 21 figures (12.23–12.43, 12.43 in the exercises), Key Concepts, two Key Equations rows, Equations 12.1 and 12.2, 62 section exercises (29 keyed), six glossary terms.

## Sub-concepts (page headers)

0. `space-intro`: the opening paragraph.
1. `coordinates` **Three-Dimensional Coordinate Systems**: the definition, the right-hand rule and Figure 12.23, points and Figure 12.24 + 12.25 (Example 12.11), Checkpoint 12.11, coordinate planes and octants with Figure 12.26 + 12.27, the distance theorem (Equation 12.1) with Figure 12.28 + 12.29 (Example 12.12), Checkpoint 12.12, Figures 12.30 and 12.31.
2. `equations` **Writing Equations in ℝ³**: Figure 12.32, Figure 12.33 and the rule on planes parallel to coordinate planes, Example 12.13, Checkpoint 12.13, the sphere (definition, Figure 12.34 + 12.35, the rule with Equation 12.2), Example 12.14 with Figure 12.35 folded, Checkpoint 12.14, Example 12.15 with Figure 12.36, Checkpoint 12.15, Example 12.16 with Figure 12.37, Checkpoint 12.16, Example 12.17 with Figure 12.38, Checkpoint 12.17.
3. `vectors-in-space` **Working with Vectors in ℝ³**: component form and Figure 12.39, operations, i, j, k, Example 12.18 with Figure 12.40, Checkpoint 12.18, Figure 12.41, the rule on properties of vectors in space, Example 12.19 with Figure 12.42, Checkpoint 12.19, Example 12.20 (the forward pass) with `sim-forward-pass`, Checkpoint 12.20.

(Example numbers: 12.11 locating points, 12.12 distance, 12.13 planes, 12.14 and 12.15 spheres, 12.16 and 12.17 other equations, 12.18 representations, 12.19 operations, 12.20 the pass.)

## Concept nodes

Introduced: `three-dimensional-rectangular-coordinate-system`, `right-hand-rule`, `coordinate-planes`, `octants`, `distance-between-two-points-in-space` (`eq-distance-in-space`), `planes-parallel-to-coordinate-planes`, `sphere`, `standard-equation-of-a-sphere` (`eq-sphere`), `vectors-in-three-dimensions` (`eq-vector-in-space`), `properties-of-vectors-in-space` (`eq-magnitude-in-space`, `eq-sum-in-space`), `graphing-equations-in-space`. Uses: `vector`, `standard-unit-vectors`, `unit-vector`, `vector-addition`, `scalar-multiplication`, `component-form-from-points`, `magnitude-of-a-vector`.

## Colour

`vector` for bold letters and PQ⃗; `point` for P₁, P₂, P, Q, C and the plotted point; `plane` for the coordinate planes and every plane x = a; `region` for an octant and the distance prism drawn as a box; `surface` for the sphere and the cylinder; `line` for Figure 12.30's lines; `curve` for Figure 12.31's circles. Coordinates, d, r and k ink. No referents (P₁, P₂ are told apart by name).

## Figures

3D tier, argued per figure (root rules 24.5, 28): live (`F.space3d`, free orbit, no buttons; pitch bounded to [−0.2, 1.4] so the scene is rarely seen from beneath, since z up is the book's convention) where turning the scene is the lesson; locked (`locked: true`, painted, no WebGL) for a still copy of one example's picture. Five live scenes on the page.

- `sim-axes` · Figure 12.23 · `three-dimensional-rectangular-coordinate-system`, `right-hand-rule` · depth: the three axes and a curled arrow from x round to y about z, the right-hand rule's curl, seen from any side so the reader sees the arrangement is not a flat drawing · arrows symbolic · still · no controls · headline "Fingers along x curl toward y; the thumb points along z." · 3D live, free orbit, pitch [−0.2, 1.4]: the axes are the scene and only turning shows them perpendicular. The hand of panel (b) is drawn as the curl and the thumb (z) arrow; the book's hand photograph-like drawing is the original.
- `sim-point-in-space` · Figure 12.24 + 12.25 · `three-dimensional-rectangular-coordinate-system` · variation and depth: sliders x, y, z move the point and its dashed box from the origin; the octant the point lies in is named in the readout · arrows none · still · sliders x (−4 to 4), y (−4 to 4), z (−4 to 4), step 0.5, defaults (1, −2, 3) of Example 12.11 · headline the point's coordinates · 3D live: depth is the lesson (x units along x, then y, then z).
- `fig-octants` · Figure 12.26 + 12.27 · `coordinate-planes`, `octants` · standardisation: the three coordinate planes as translucent sheets named xy, xz, yz, and the octant numerals I–VIII at the octant centres with their sign triples · still · 3D locked (the book's view).
- `sim-distance` · Figure 12.28 + 12.29 · `distance-between-two-points-in-space` · variation: P₁ = (3, −1, 5) fixed, P₂ by sliders; the box with P₁ and P₂ at opposite corners, d₁ across its base and |z₂ − z₁| up its side · arrows none · still · sliders x₂, y₂, z₂ (−4 to 6, defaults (2, 1, −1) of Example 12.12) · headline d = √41 ≈ 6.40 with the live numbers · 3D live: the diagonal of a box is an arrangement in space.
- `fig-lines-not-meeting` · Figure 12.30 · faithful copy, locked: the lines z = 3 (parallel to the xy-plane) and y = 2 (parallel to the x-axis) as the book draws them.
- `fig-linked-circles` · Figure 12.31 · faithful copy, locked: the circle about the z-axis at z = 1 and the vertical circle on [0, 6] of the x-axis.
- `fig-x-equals-zero` · Figure 12.32 · `graphing-equations-in-space` · standardisation: the three panels, a point on a number line, the y-axis in the plane, the yz-plane in a box · still · panels (a), (b) 2D on axes, (c) through `F.view`'s locked perspective drawn as a face · 2D cost.
- `sim-plane-x-equals-c` · Figure 12.33 · `planes-parallel-to-coordinate-planes` · variation: choice of the variable held constant (x, y, z) and a slider c: the plane x = c, y = c or z = c slides parallel to its coordinate plane; c = 0 (a dashed circle) is the coordinate plane itself, z = 0 and y = 0 the book's two panels · still · choice variable (z, y, x; default z), slider c (−3 to 3, special 0) · headline the equation and the coordinate plane it parallels · 3D locked: the plane's direction reads from the book's view and orbit adds nothing a slider does not.
- `sim-sphere` · Figure 12.34 + 12.35 · `sphere`, `standard-equation-of-a-sphere` · variation: the center (a, b, c) by sliders, the sphere through the fixed point (−1, 3, −2) with its radius r drawn to it · still · sliders a, b, c (−2 to 12; defaults (10, 7, 4) of Example 12.14) · headline (x − 10)² + (y − 7)² + (z − 4)² = 173 with live numbers · 3D locked: one sphere reads from one view; a WebGL budget kept for the scenes that need turning.
- `fig-diameter` · Figure 12.36 · faithful copy, locked: P = (−5, 2, 3), Q = (3, 4, −1) and the segment PQ.
- `fig-two-planes` · Figure 12.37 · faithful copy, locked: the planes x = 4 and z = 2.
- `fig-cylinder-21` · Figure 12.38 · faithful copy, locked: (x − 2)² + (y − 1)² = 4 as a cylinder about x = 2, y = 1.
- `sim-vector-in-space` · Figure 12.39 + 12.41 · `vectors-in-three-dimensions`, `properties-of-vectors-in-space` · variation and depth: v = ⟨x, y, z⟩ by sliders with its components dropped along the axes, w = ⟨1, −2, 2⟩ fixed beside it and their sum by the parallelogram in space (Figure 12.41's A + B) · arrows symbolic · still · sliders x, y, z (−4 to 4, defaults (2, 4, 1)) · headline v = 2i + 4j + k, ‖v‖ = √21 · 3D live: the parallelogram of a sum in space only reads as flat when it is turned edge-on, the lesson that the 2D rule carries over.
- `fig-pq-space` · Figure 12.40 · faithful copy, locked: P = (3, 12, 6), Q = (−4, −3, 2) and PQ⃗.
- `fig-v-w-space` · Figure 12.42 · faithful copy, locked: v = ⟨−2, 9, 5⟩, w = ⟨1, −1, 0⟩ in standard position.
- `sim-forward-pass` · Sim (replaces Example 12.20's two unnumbered images, its originals) · `vectors-in-three-dimensions`, `unit-vector` · variation: the throw's speed and upward angle; w aimed above the receiver's head, v = kw scaled to the speed · arrows symbolic · still · sliders speed (20 to 80 mph, default 60), angle (10° to 60°, default 30°) · headline v = ⟨24√3, 18√3, 30⟩ in decimals · 3D live: the field (20 yd down, 15 yd left) and the climb out of it are an arrangement in space; the quarterback and receiver are points named on labels.
- Figure 12.43 (credit-only photograph in the exercises) stays in its exercise's prompt as an image with the credit.

Images: checkpoint answer images (004, 018, 020) stay in their answers; Example 12.20's two unnumbered images (024, 025) are replaced by `sim-forward-pass`, which lists them as its originals.

## Exercises

- Checkpoints 12.11–12.20 inline, hints as `hint`; sketch checkpoints keep the book's answer image.
- Section exercises 61–122: odd keyed kept; 107 and 109 (odd, unkeyed) judged at build; even ones left out unless proof/explain/true-false (approach).
- Review 431 held here.

## Extra simulations (rule 15)

`sim-forward-pass` (the example's picture made live; the reader sees the direction of v fixed by the receiver and only its length set by the speed). Weighed and left out: a sim of the linked circles (a still copy shows them).

## Wanted at chapter level

- forms `eq-distance-in-space` → the theorem note; `eq-sphere` → the sphere rule note; `eq-vector-in-space` → `12.2-ijk`; `eq-magnitude-in-space`, `eq-sum-in-space` → the properties rule note.
- variables of 12.2 anchored at build.
- Review 431 placed here.
