# Plan: 15.7 Change of Variables in Multiple Integrals (m53970)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-13. Template: `ch01/1.1`.

Three objectives, an opening paragraph, definition notes (one-to-one transformation, the Jacobian, the Jacobian of three variables), theorem notes (change of variables for double and for triple integrals) and the strategy note, Examples 15.65–15.73, six checkpoints (15.43–15.48), thirteen figures (15.71–15.83), Key Concepts, Key Equations, 60 section exercises (356–415, 28 keyed), the Chapter Review Exercises (416–442), glossary terms.

## Sub-concepts (page headers)

0. `cov-intro`: the opening paragraph.
1. `planar` **Planar Transformations** (the book's): transformations T: G → R, one-to-one, Examples 15.65–15.67 (Figures 15.71–15.73), Checkpoint 15.43.
2. `jacobians` **The Jacobian** (the book's): C¹ transformations, the subrectangle and its image parallelogram (Figures 15.74, 15.75), the definition, Example 15.68, Checkpoint 15.44.
3. `cov-double` **Change of Variables for Double Integrals** (the book's): the theorem, polar coordinates again (Figure 15.76), the strategy, Examples 15.69–15.71 (Figures 15.77–15.79), Checkpoints 15.45, 15.46.
4. `cov-triple` **Change of Variables for Triple Integrals** (the book's): the Jacobian of three variables, the theorem (Figures 15.80–15.83), Examples 15.72, 15.73, Checkpoints 15.47, 15.48.

## Concept nodes

Introduced: `transformation`, `planar-transformation`, `one-to-one-transformation`, `c1-transformation`, `jacobian` (two forms), `change-of-variables-for-double-integrals` (two forms), `strategy-for-change-of-variables`, `jacobian-of-three-variables`, `change-of-variables-for-triple-integrals`. Uses: `integration-by-substitution`, `cross-product`, `determinant`, `double-integral-in-polar-coordinates`, `triple-integral-in-cylindrical-coordinates`, `triple-integral-in-spherical-coordinates`.

## Colour

`region` for G, R, S, D and their grids; `function` for T, x = g(u, v), y = h(u, v) and the integrands f, F, H; `matrix` for J and its matrix; `vector` for Δu r_u and Δv r_v; `integral` for the integrals and areas; `point` for a moved point and its image. Coordinates u, v, w in ink. No referents.

## Figures

- `sim-transformation` · Figure 15.71 + 15.72 + 15.73 · `transformation`, `planar-transformation` · variation: G in the uv-plane and its image R with the grid curves u = c, v = c carried along · still · choice T (polar map of Example 15.65, (u² − v², uv) of Example 15.66 with sides A, B, C to A′, B′, C′); sliders u, v move a point and its image · 2D side by side. Readout T(u, v) with numbers.
- `sim-jacobian` · Figure 15.74 + 15.75 · `jacobian` · depth: the subrectangles S_ij and their curved images R_ij beside the parallelogram of Δu r_u and Δv r_v · still · choice T (as above); sliders n (subdivisions), u, v · 2D. Readout J(u, v), |J| Δu Δv ≈ ΔA, Σ|J| Δu Δv ≈ A(R).
- `fig-half-disk` · Figure 15.76 · still copy, 2D.
- `fig-parallelogram` · Figure 15.77 + 15.78 · Example 15.70's S and the parallelogram R, a still copy, 2D; readout T, the inverse and J = −1/2.
- `fig-hyperbolas` · Figure 15.79 · Example 15.71's S and R, a still copy, 2D; readout T and J = 1/2.
- `sim-solid-transformation` · Figure 15.80 + 15.81 + 15.82 + 15.83 · `change-of-variables-for-triple-integrals`, `jacobian-of-three-variables` · depth: a box G in uvw-space and its image D · still · choice T (cylindrical, spherical, Example 15.73's map), choice show (G, D = T(G)) · 3D free orbit, no buttons. Readout |J| and the theorem.

Exercise images stay in their cards.

## Exercises

- Checkpoints 15.43–15.48 inline after their examples; the book's hints as `hint`.
- Section exercises 356–415: the 28 keyed odd ones kept (401 and 407 are odd and unkeyed). Unkeyed show exercises kept with AI approaches: 400 (with a correction to its integrand under its card), 401, 406, 407, 412. The other unkeyed ones left out and named.
- Review exercise 419 held here; every review row has `source_section` 15.7.

## Extra simulations (rule 15)

None beyond the figures: the planar map, the Jacobian's parallelogram and the solid map carry the section's ideas.

## Wanted at chapter level

- forms: `eq-jacobian-two-variables` → `15.7-fs-id1167793642159`; `eq-jacobian-area` → `15.7-jacobians`; `eq-change-of-variables-double` → `15.7-fs-id1167793925892`; `eq-change-of-variables-da` → `15.7-cov-double`; `eq-jacobian-three-variables` → `15.7-fs-id1167793957157`; `eq-change-of-variables-triple` → `15.7-fs-id1167793285192`.
- variables of 15.7 anchored at build.
- Review 419 placed here.
