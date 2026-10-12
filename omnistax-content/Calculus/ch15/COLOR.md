# Chapter 15 colour plan

Prepared 2026-10-13 with `config.md`. It refines the book's `COLOR.md` for what this chapter draws; root rules 7 and 22 hold, and nothing here invents a hue. The types are the 18 of `book.json`.

## What the chapter colours

No convention. Facts: the photographs and maps (15.1, 15.10, 15.11, 15.60, 15.61) in their own colours. The categories:

- `integral`, the chapter's main type: a double or triple integral and its value, a double or triple Riemann sum and the boxes that make it (columns over subrectangles, subboxes, polar and spherical boxes), a volume V, an area A(R) or A(D), the slice area A(x) of Fubini's theorem, a mass m, the moments M_x, M_y, M_xy, M_xz, M_yz, the moments of inertia I_x, I_y, I_z, I₀, a probability's integral.
- `region`: the region of integration R, D, E, G, S, Q, B in the plane or in space, a subrectangle R_ij or subbox B_ijk, a polar rectangle, a Type I or Type II region, a cylindrical or spherical box, a solid drawn by its boundary, a lamina, the image of a region under a transformation.
- `surface`: the graph z = f(x, y) of an integrand, the surfaces z = u₁(x, y) and z = u₂(x, y) that bound a solid, a sphere, cone, cylinder or paraboloid bounding a region.
- `function`: the integrand f(x, y) or f(x, y, z), the extension g, the bounding functions g₁, g₂, h₁, h₂, u₁, u₂ as symbols, a density ρ(x, y), the average value f_ave, a transformation T and its components g, h, k, the function H(u, v, w).
- `matrix`: the Jacobian J(u, v), J(u, v, w) and its determinant.
- `point`: a sample point (x*ᵢⱼ, y*ᵢⱼ), the center of mass (x̄, ȳ) or (x̄, ȳ, z̄), the centroid (x_c, y_c), a point and its image under a transformation.
- `angle`: θ in polar, cylindrical and spherical coordinates, φ in spherical coordinates.
- `curve`: a bounding curve drawn on its own (the boundary of D as a curve, a polar curve r = h(θ)) where it is not a referent.
- `vector`: the tangent vectors r_u and r_v of a transformation and Δu r_u, Δv r_v.

In ink: x, y, z and r, u, v, w (coordinates), ρ in spherical coordinates (a coordinate; the density ρ wears `function`), a and b, the counts m, n, l, k, the increments Δx, Δy, Δr, Δθ, ΔA, ΔV, probabilities P and expected values E(X), radii of gyration R_x, R_y, R₀, temperatures and the rainfall readings.

| Section | Categories named | Referents |
|---|---|---|
| `intro` | none | none |
| 15.1 | `integral` (∬, Riemann sums, V, A(R), A(x)), `region` (R, R_ij), `surface`, `function` (f, f_ave), `point` (sample points) | none |
| 15.2 | `integral`, `region` (D, R, Type I and II), `surface`, `function` (f, g, g₁, g₂, h₁, h₂, joint density) | the two curves of Example 15.10 (`ex10-root`, `ex10-cube`), D₁, D₂, D₃ of Example 15.14 (`piece-d1`, `piece-d2`, `piece-d3`) |
| 15.3 | `integral`, `region` (polar rectangle, D), `surface`, `function`, `angle` (θ), `curve` (r = h(θ)) | the circle and cardioid of Example 15.30 (`circle-3cos`, `cardioid-1cos`) |
| 15.4 | `integral` (∭, V(E)), `region` (B, E, D, B_ijk), `surface` (u₁, u₂), `function` (f, f_ave) | none |
| 15.5 | `integral`, `region` (cylindrical and spherical boxes, E), `surface` (cones, spheres, paraboloids, cylinders), `function`, `angle` (θ, φ) | none |
| 15.6 | `integral` (m, M_x, M_y, I_x, I_y, I₀, M_xy …), `region` (R, Q, the lamina), `function` (ρ), `point` (center of mass, centroid) | none |
| 15.7 | `region` (G, R, S, D), `function` (T, g, h, H), `matrix` (J), `vector` (r_u, r_v), `integral`, `point` | none |

## Rules the sections keep

- A Riemann box wears `integral` (it is a term of the sum), the region under it `region`, the surface above it `surface`; the three are drawn translucent so the reader sees each through the others.
- Two surfaces bounding one solid (a cone under a paraboloid) both wear `surface` and are told apart by their labels; the solid between them wears `region`.
- A density ρ is drawn as the shading of the lamina's cells in `function`, one scale with its legend.
- In a transformation the region G and its image R both wear `region`; the grid lines u = c and v = c wear ink (faint) in both planes, so the reader matches them by position, and a selected cell and its image are outlined in `region` with the parallelogram of Δu r_u, Δv r_v in `vector`.
