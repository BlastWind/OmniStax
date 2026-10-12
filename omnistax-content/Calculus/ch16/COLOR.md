# Chapter 16 colour plan

Prepared 2026-10-13 with `config.md`; updated in the chapter pass where the build changed it. It refines the book's `COLOR.md` for what this chapter draws; root rules 7 and 22 hold, and nothing here invents a hue. The types are the 18 of `book.json`.

## What the chapter colours

No convention. Facts: the photographs (16.1, 16.4, 16.47) in their own colours; a speed or density drawn as a heatmap is one scalar on one scale with its legend. The categories:

- `vector-field`, the chapter's main type: F, G, a velocity field v, the electric and magnetic fields E and B, the radial field F_r, a gradient field ∇f, curl F (a field of its own), heat flow −k∇T; its arrows on a grid in the plane or in space.
- `integral`: a scalar or vector line integral and its value, the sheet whose area is ∫_C f ds, the terms F · T Δs of a work sum, work W, a mass m, a flux across a curve or a surface, a circulation, a surface integral, the double integral ∬_D (Q_x − P_y) dA and the triple integral ∭_E div F dV.
- `curve`: a curve C of integration, C₁, C₂, −C, the boundary ∂D or C of a region or surface, a flow line, a grid curve of a parametric surface, the parameterization r(t) as the curve it traces.
- `region`: a region D of the plane, a solid E, a parameter domain D, a region's shadow.
- `surface`: a surface S of a surface integral, a parametric surface r(u, v), a hemisphere or disk bounded by C.
- `function`: a scalar function f, a potential function, a stream function g, the components P, Q, R, the divergence div F (a scalar function), a density ρ, a temperature T.
- `vector`: the unit tangent T, the unit normals N and n of a curve or surface, the tangent vectors t_u and t_v, r′(t).
- `point`: a sample point Pᵢ*, the endpoints r(a) and r(b) of a path.

In ink: x, y, z, t, u, v, s, the arc-length pieces Δsᵢ, the counts m, n, the constants a, b, k, C, G, q, ε₀, charges Q, and the parameter domain's grid lines.

| Section | Categories named | Referents |
|---|---|---|
| `intro` | none | none |
| 16.1 | `vector-field` (F, G, v, ∇f), `function` (P, Q, R, f), `curve` (level curves) | none |
| 16.2 | `integral` (∫_C f ds, ∫_C F · dr, W, m, flux, circulation), `curve` (C, r(t)), `vector-field`, `function` (f, ρ), `vector` (T, N, n, r′), `point` (Pᵢ*) | none |
| 16.3 | `curve` (closed, simple, C₁, C₂), `region` (D), `vector-field`, `function` (f), `integral`, `point` | C₁, C₂ of the path figures (`path-1`, `path-2`) |
| 16.4 | `integral` (both sides of Green's theorem), `curve` (C, ∂D), `region` (D), `vector-field`, `function` (g, f), `vector` (N) | none (Figure 16.46, the circle C₁ inside C, stays the book's image) |
| 16.5 | `vector-field` (F, curl F), `function` (div F, f), `vector` | none |
| 16.6 | `surface` (S, r(u, v)), `region` (D), `curve` (grid curves), `vector` (t_u, t_v, N), `integral`, `vector-field`, `function` | none |
| 16.7 | `integral` (both sides of Stokes' theorem), `surface` (S), `curve` (C), `vector-field` (F, curl F, E, B), `vector` (N), `region` (D) | none (S₁ and S₂ of one boundary are one family of surfaces on a slider) |
| 16.8 | `integral` (both sides of the divergence theorem), `region` (E), `surface` (S), `vector-field` (F, E, F_r), `function` (div F) | none |

## Rules the sections keep

- A field's arrows wear `vector-field`; the curve or surface it acts on wears `curve` or `surface`; a quantity accumulated over it (the work, the flux, the circulation) wears `integral`, and where a figure splits a sum into its terms the term F · T Δs or F · N ΔS is drawn in `integral`, its sign told by direction of a bar or by a hollow marker, never by a second hue.
- A theorem figure writes both sides in `integral` and draws the boundary in `curve` (or `surface` for the divergence theorem) and the interior in `region`, so the reader matches "the boundary integral" and "the interior integral" by their colours in the readout.
- The unit tangent and the unit normal wear `vector`, the field `vector-field`: the dot product F · T is read from two hues.
- curl F is a vector field and wears `vector-field`; div F is a scalar function and wears `function`; a heatmap of div F or of (Q_x − P_y) is one scalar on one scale with its legend.
