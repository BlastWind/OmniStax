# Plan: 14.4 Tangent Planes and Linear Approximations (m53937)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-12. Template: `ch01/1.1`.

Five objectives, an opening paragraph, six definitions, two theorems, Examples 14.21–14.25, four checkpoints (14.19–14.22), seven figures (14.27–14.33), Equations 14.24–14.28, six Key Concepts, five Key Equations, 52 section exercises (26 keyed), four glossary terms.

## Sub-concepts (page headers)

0. The opening paragraph (`planes-intro`).
1. `tangent-planes` **Tangent Planes**: the definition (Figure 14.27), the equation (Equation 14.24) and its derivation, Example 14.21 with Figure 14.28, Checkpoint 14.19, Example 14.22, the function with no tangent plane (Figure 14.29).
2. `linear-approximations` **Linear Approximations**: one variable (Figure 14.30), the definition (Equation 14.25), Figure 14.31, Example 14.23, Checkpoint 14.20.
3. `differentiability` **Differentiability**: the definition (Equation 14.26), Example 14.24, Checkpoint 14.21, the function again (Figure 14.32), the two theorems.
4. `differentials` **Differentials**: the total differential (Equation 14.27), Figure 14.33, Example 14.25, Checkpoint 14.22.
5. `three-variables` **Differentiability of a Function of Three Variables**: the definition (Equation 14.28).

## Concept nodes

Introduced: `tangent-plane` (`eq-tangent-plane`), `linear-approximation-of-a-function-of-two-variables`, `differentiable-function-of-two-variables`, `differentiability-implies-continuity-two-variables`, `continuity-of-first-partials-implies-differentiability`, `total-differential` (two forms), `differentiability-of-a-function-of-three-variables`. Uses: `tangent-line`, `linear-approximation`, `scalar-equation-of-a-plane`, `cross-product`, `normal-vector`, `differential`, `propagated-error`, `differentiability-implies-continuity`.

## Colour

f_x, f_y, f_z wear `derivative`; L (the plane's function) `plane`; E `error`; f `function`; a, b, n, i, j, k `vector`. The surface `surface`, the tangent plane `plane`, curves on it `curve`, tangent lines `line`. No referents.

## Figures

Heights of a steep surface are drawn at a stated fraction of the x and y scale (rule 28.4), the z ticks reading the true values.

- `sim-tangent-plane` · Figure 14.27 + 14.28 · `tangent-plane` · 3D and variation: Example 14.21's surface (heights at 1/20) with the plane z = 13x − 26y − 18 at P₀ = (2, −1, 34) — also the stand-in for 14.27's unnamed surface; slider θ (0° to 360°, detents at the axes) runs a curve of the surface through P₀ in that direction and draws its tangent line, which lies in the plane · arrows none · still · readout the plane and the line's slope 13 cos θ − 26 sin θ · 3D free orbit, no buttons.
- `sim-no-tangent-plane` · Figure 14.29 + 14.32 · `differentiable-function-of-two-variables` · 3D and variation: f = xy/√(x² + y²) with f(0, 0) = 0, the plane z = 0 that f_x = f_y = 0 would give, and the vertical slice through the origin at the angle θ (slider 0° to 180°, detents 0, 90, 180, special 45° the book's y = x): the slice z = |s| cos θ sin θ has a corner with slopes ± cos θ sin θ · still · 3D free orbit.
- `sim-tangent-line-approximation` · Figure 14.30 · `linear-approximation` · variation: the stand-in f(x) = √(32 − 4x²) (the trace of Example 14.23's surface along y = 3; the book's curve has no formula) and its tangent line at a = 2; drag x and the gap f(x) − L(x) shows in the error colour · still · 2D.
- `sim-plane-approximation` · Figure 14.31 + 14.33 · `linear-approximation-of-a-function-of-two-variables`, `total-differential` · 3D and variation: choice Example 14.23 (√(41 − 4x² − y²) at (2, 3)) or Example 14.25 (3x² − 2xy + y² at (2, −3), heights at 1/25); sliders Δx, Δy (−1 to 1, defaults the example's); the surface's point and the plane's point above (x₀ + Δx, y₀ + Δy) with the error between them · readout dz = f_xΔx + f_yΔy against Δz · 3D free orbit.

## Exercises

- Checkpoints 14.19–14.22 inline, hints as `hint`.
- Section exercises 163–214: odd keyed ones kept; unkeyed 190 (explain a segment of the figure) with an AI approach read from the figure (AB = Δz − dz); other even ones left out.
- Review 396 (true or false, AI approach), 409, 411 and 419 held here; 419 is a differentials problem under a Lagrange stem.

## Extra simulations (rule 15)

None: the differentiability limit of Example 14.24 is a computation the readout of `sim-plane-approximation` already pictures.

## Wanted at chapter level

- forms: `eq-tangent-plane` → `14.4-fs-id1167793903025`; `eq-linear-approximation-2v` → `14.4-fs-id1167793928374`; `eq-differentiability-2v` → `14.4-fs-id1167794136381`; total differential forms → `14.4-fs-id1167793951229`; `eq-differentiability-3v` → `14.4-fs-id1167793219325`.
- variables anchored at build. Review 396, 409, 411, 419 placed here.

## Derivations

- Tangent Planes, "To see why this formula is correct" · score 4 · built as drv-tangent-plane-normal (a × b by the determinant) and drv-tangent-plane-equation (n · (P − P₀) = 0 solved for z, (14.24)): the book's sentence that a × b is normal to the tangent plane stands between the two displays and keeps its place, so the derivation is split there; "Solving this equation for z gives Equation 14.24" dropped, the inserted solving lines carrying the number
- Differentiability Implies Continuity, stated without proof · score 5 · built as drv-differentiability-implies-continuity after the theorem: the error term's limit by the product law, then the limit of (14.26) by the limit laws of 14.2
- Continuity of First Partials Implies Differentiability, stated without proof · score 9 · built as drv-continuous-partials-imply-differentiability after the theorem: the Mean Value Theorem in each variable, the error term rewritten, bounded by the two differences of partial derivatives, then squeezed to 0 by their continuity
- Example 14.24 and the non-differentiable example after it · not built: worked examples of the definition, one function each
