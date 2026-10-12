# Plan: 12.5 Equations of Lines and Planes in Space (m53870)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-13. Template: `ch01/1.1`.

Five objectives, an opening paragraph, one definition (plane), four theorems, Examples 12.45–12.54, nine checkpoints (12.43–12.51), twelve figures (12.63–12.74), one Student Project, Key Concepts, five Key Equations rows, Equations 12.11–12.19, 60 section exercises (28 keyed), nine glossary terms.

## Sub-concepts (page headers)

0. `lines-planes-intro`: the opening paragraph.
1. `line` **Equations for a Line in Space**: parallel vectors (u = kv), the direction vector with Figure 12.63, Equations 12.11–12.14, the theorem, Example 12.45, Checkpoint 12.43, line segments (Equations 12.15, 12.16), Example 12.46, Checkpoint 12.44.
2. `point-line` **Distance between a Point and a Line**: Figure 12.64 + 12.65, the theorem, Example 12.47 with Figure 12.66, Checkpoint 12.45.
3. `relationships` **Relationships between Lines**: skew lines, Figure 12.67, Figure 12.68, Example 12.48 (its three images kept), Checkpoint 12.46.
4. `plane` **Equations for a Plane**: the normal vector, Figure 12.69, the definition (Equations 12.17, 12.18), Example 12.49, Example 12.50 (image kept), Checkpoint 12.47, distance to a plane with Figure 12.70 and the theorem (Equation 12.19), Example 12.51 (image kept), Checkpoint 12.48.
5. `planes` **Parallel and Intersecting Planes**: Figure 12.71 + 12.72, Example 12.52 (image kept), Checkpoint 12.49, the angle between planes, Example 12.53, Checkpoint 12.50, distance between parallel planes, the theorem, Example 12.54, Checkpoint 12.51, the Student Project with Figures 12.73 (photo) and 12.74.

## Concept nodes

Introduced: `direction-vector`, `vector-equation-of-a-line` (`eq-vector-line`), `parametric-equations-of-a-line` (`eq-parametric-line`), `symmetric-equations-of-a-line` (`eq-symmetric-line`), `vector-equation-of-a-line-segment` (`eq-segment-vector`, `eq-segment-parametric`), `distance-from-a-point-to-a-line` (`eq-point-line-distance`), `skew-lines`, `classifying-lines-in-space`, `normal-vector`, `vector-equation-of-a-plane` (`eq-vector-plane`), `scalar-equation-of-a-plane` (`eq-scalar-plane`, `eq-general-plane`), `distance-from-a-point-to-a-plane` (`eq-point-plane-distance`, `eq-point-plane-distance-coordinates`), `parallel-and-intersecting-planes`, `angle-between-two-planes` (`eq-angle-between-planes`). Uses: `parallel-vectors`, `area-of-a-parallelogram`, `cross-product`, `scalar-projection`, `parametric-equations`, `orthogonal-vectors`.

## Colour

`vector` for v, n, r, r₀, p, q, PQ⃗ and kin; `line` for L, L₁, L₂ and every line drawn; `plane` for every plane; `point` for P, Q, M, R; `angle` for θ between planes. d, t, coordinates ink. Referents: none (L₁ and L₂ are told apart by their names on the figures; chapter `COLOR.md`).

## Figures

Four live 3D scenes on the page.

- `sim-line-in-space` · Figure 12.63 · `vector-equation-of-a-line`, `parametric-equations-of-a-line`, `vector-equation-of-a-line-segment` · variation: t slides Q = P + tv along the line; t = 0 and t = 1 (dashed circles) are P and the second point, and between them the segment of Equation 12.15 is drawn heavier · arrows symbolic · still · slider t (−2 to 3, default 1, specials 0 and 1) · headline r = r₀ + tv = ⟨1 − 4t, 4 + t, −2 + 2t⟩ with t live · 3D live: a line's direction in space reads from turning it.
- `sim-point-line-distance` · Figure 12.64 + 12.65 · `distance-from-a-point-to-a-line` · intuition: P slides along L; the parallelogram on PM⃗ and v changes shape while its height, the distance d, stays the same, so ‖PM⃗ × v‖/‖v‖ is one number wherever P is · arrows symbolic · still · slider P's place s along L (−3 to 3, default 0) · headline d = ‖PM⃗ × v‖/‖v‖ live · 2D: the line and the point span a plane.
- `fig-point-line-box` · Figure 12.66 · faithful copy, locked: the line (x − 3)/4 = (y + 1)/2 = z − 3, M = (1, 1, 3) and the perpendicular.
- `sim-line-pairs` · Figure 12.67 · `skew-lines`, `classifying-lines-in-space` · depth: two lines; a choice of Example 12.48's pairs (a skew, b intersecting at (1, −1, 1), c parallel) with Figure 12.67's skew pair the default; the readout answers the table's two questions · still · choice pair (12.67, a, b, c) · headline the pair's class · 3D live: skew lines look as if they cross from most views; turning shows they never meet.
- `fig-line-table` · Figure 12.68 · faithful copy: the two-by-two table, drawn as the book draws it · 2D still.
- `sim-plane-normal` · Figure 12.69 · `normal-vector`, `vector-equation-of-a-plane`, `scalar-equation-of-a-plane` · intuition: Q is dragged over the plane (S.drag on the plane's sheet), PQ⃗ swings in the plane and stays orthogonal to n · still · Q by drag, held by sliders s, t (−2 to 2) along the plane · headline n·PQ⃗ = 0 with the live numbers (Example 12.49's P = (1, 1, −2), n = ⟨8, −4, 4⟩) · 3D live.
- `sim-point-plane-distance` · Figure 12.70 · `distance-from-a-point-to-a-plane` · intuition: Q slides over the plane; QP⃗ changes but its projection onto n stays the distance d = |QP⃗·n|/‖n‖ (Example 12.51: P = (3, 1, 2), x − 2y + z = 5, d = 2/√6) · still · sliders Q's place s, t (−2 to 2) · headline d live · 3D locked: the view square to the plane's edge is the book's; the WebGL budget is kept for the scenes that need turning.
- `sim-two-planes` · Figure 12.71 + 12.72 · `parallel-and-intersecting-planes`, `angle-between-two-planes` · depth: two planes, their normals n₁ and n₂, the line of intersection and the angle θ; a choice of Example 12.53's pairs (a parallel, b orthogonal, c 1.27 rad) · still · choice pair (a, b, c; default c) · headline cos θ = |n₁·n₂|/(‖n₁‖‖n₂‖) live · 3D live.
- `fig-pipes` · Figure 12.73 · photo, kept: the Student Project's opener, which the project's question points at; caption as printed.
- `fig-frame-unit` · Figure 12.74 · faithful copy, locked: the 10 × 15 × 4 m frame and the pipes L₁ (main diagonal) and L₂ (base diagonal); the project's questions read it.

Images: Example 12.48's three images (011, 012, 013) stay in the solution; 014, 015, 016 in Examples 12.50–12.52 stay as printed (their alt texts misdescribe 012 and 013 as skew: alt text only, left as printed).

## Exercises

- Checkpoints 12.43–12.51 inline, hints as `hint`.
- Section exercises 243–302: odd keyed kept; 257, 279 (odd, unkeyed) judged at build; even ones left out unless proof/explain/true-false (approach).
- Review 425, 435, 437 held here.

## Corrections

- Key Equations prints the symmetric equations under "Parametric Equations of a Line": the formulas list carries `eq-parametric-line` and `eq-symmetric-line` under their concepts' own names, so no note.

## Extra simulations (rule 15)

`sim-point-line-distance`'s sliding P (the invariance of the height is a view the text states and does not show). Weighed and left out: the skew pipes of the project (the project's figure is its question).

## Wanted at chapter level

- forms anchored to their equations' ids: `eq-vector-line` → `12.5-fs-id1163724080297`, `eq-parametric-line` and `eq-symmetric-line` → the theorem note, `eq-segment-vector` → `12.5-fs-id1163723311060`, `eq-segment-parametric` → `12.5-fs-id1163723756804`, `eq-point-line-distance` → its theorem, `eq-vector-plane`, `eq-scalar-plane`, `eq-general-plane` → the plane definition, `eq-point-plane-distance` → `12.5-fs-id1163724183136`'s note, `eq-point-plane-distance-coordinates` → the later theorem, `eq-angle-between-planes` → `12.5-fs-id1163723281425`.
- variables of 12.5 anchored at build.
