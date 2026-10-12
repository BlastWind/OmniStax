# Exploration: Calculus, Chapter 16 Vector Calculus

Written 2026-10-13, before the chapter's sections were built. The nine modules (Volume 3, Chapter 6) were converted with `python3 tools/convert.py 16` and read; the book's organization and apparatus are as `RULES.md` records them. `config.md` beside this file is the agreed list.

## Why this chapter

The chapter integrates over curves and surfaces and ends on three higher-dimensional Fundamental Theorems of Calculus. 16.1 draws vector fields in the plane and in space (radial, rotational, unit, gravitational, gradient fields), defines conservative fields and potential functions, and proves the cross-partial property. 16.2 builds the scalar line integral as the area of a sheet dropped from a curve on a surface, then the vector line integral as work, with orientation, the forms ∫ P dx + Q dy + R dz, the properties, the mass of a wire, flux across a curve and circulation. 16.3 classifies curves and regions (closed, simple, connected, simply connected), proves the Fundamental Theorem for Line Integrals, path independence and its converse, finds potential functions, and tests fields by their cross-partials. 16.4 is Green's theorem: the circulation form, areas from boundaries (the ellipse and the planimeter project), the flux form, source-free fields and stream functions, harmonic potentials, and regions with holes. 16.5 defines divergence and curl, a paddlewheel for curl, and the identities div curl F = 0, curl ∇f = 0 and the curl test. 16.6 parameterizes surfaces, finds surface area from t_u × t_v, defines the scalar surface integral, the orientation of a surface (and the Möbius strip that has none), and the flux integral with mass flow and heat flow. 16.7 is Stokes' theorem, surface independence, curl as circulation per unit area, and Faraday's law. 16.8 sets the theorems side by side, proves the divergence theorem, reads divergence as flux per unit volume, and derives Gauss' law from the inverse-square field.

## Modules

Ex. = worked examples, Fig. = numbered figures, CP = checkpoints, Exer. = section exercises (chapter-wide numbers), Keyed = those carrying the book's solution, Gl. = glossary entries, KE = Key Equations rows, Eq. = equations the book numbers.

| Section | Module | Ex. | Fig. | Notes | CP | Exer. | Keyed | Gl. | KE | Eq. |
|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m54017 | 0 | 1 photo | — | 0 | — | — | 0 | 0 | 0 |
| 16.1 Vector Fields | m53989 | 13 | 10 | 2 definitions, 2 theorems | 12 | 1–38 | 19 | 7 | 2 | 4 (16.1–16.4) |
| 16.2 Line Integrals | m54012 | 13 | 13 | 3 definitions, 4 theorems | 11 | 39–98 | 30 | 8 | 3 | 7 (16.5–16.11) |
| 16.3 Conservative Vector Fields | m53987 | 11 | 7 | 3 definitions, 5 theorems, 1 strategy | 10 | 99–145 | 23 | 6 | 2 | 1 (16.12) |
| 16.4 Green's Theorem | m53982 | 10 | 18 | 2 theorems, 1 Student Project | 6 | 146–205 | 30 | 2 | 3 | 3 (16.13–16.15) |
| 16.5 Divergence and Curl | m53986 | 10 | 7 | 2 definitions, 5 theorems | 7 | 206–268 | 31 | 2 | 4 | 2 (16.16, 16.17) |
| 16.6 Surface Integrals | m54004 | 15 | 22 | 6 definitions | 14 | 269–325 | 29 | 12 | 2 | 4 (16.18–16.21) |
| 16.7 Stokes' Theorem | m53990 | 4 | 8 | 1 theorem | 4 | 326–375 | 25 | 2 | 1 | 2 (16.22, 16.23) |
| 16.8 The Divergence Theorem | m53991 | 4 (+1 in the text) | 4 | 2 theorems | 4 | 376–426 | 25 | 3 | 1 | 1 (16.24) |
| Review (in 16.8) | — | — | — | — | — | 427–451 | 13 | — | — | — |

426 section exercises (16.6's four material-set exercises counted, as openstax.org numbers them: 16.7 starts at 326, checked), 212 keyed; 25 review exercises, 13 keyed; 68 checkpoints (16.1–16.12 in 16.1, 16.13–16.23 in 16.2, 16.24–16.33 in 16.3, 16.34–16.39 in 16.4, 16.40–16.46 in 16.5, 16.47–16.60 in 16.6, 16.61–16.64 in 16.7, 16.65–16.68 in 16.8); 81 worked examples (16.1–16.81); 42 glossary entries. `modules.json` gives 16.6 the range 269–321 and the later sections ranges four short; the build follows openstax.org.

Ids repeat across modules (16.5's Example 16.55 shares its id with an element of 16.1), so numbers are counted per module.

## Figure, table, example and equation numbers

Counted from the CNXML in book order, the opener as Figure 16.1.

| Section | Figures | Examples | Equations |
|---|---|---|---|
| intro | 16.1 Cyclone Catarina from the ISS (splash photo) | — | — |
| 16.1 | 16.2 a gravitational field and a river; 16.3 the radial field ⟨x/2, y/2⟩; 16.4 the hurricane (photo in Example 16.3); 16.5 ⟨y, −x⟩ with circles; 16.6 the whirlpool ⟨y, −x⟩/(x² + y²); 16.7 ⟨1, 1, z⟩; 16.8 gravity; 16.9 ∇(x²y²); 16.10 with level curves; 16.11 a velocity field and its potential | 16.1–16.13 | 16.1–16.4 a field in the plane and in space |
| 16.2 | 16.12 C cut into pieces; 16.13 the sheet under f over C; 16.14 the sheet of ∫_C 2 ds; 16.15 a piece of curve nearly straight; 16.16 oriented and closed curves; 16.17 F · T on a piece; 16.18 a semicircle in ⟨−y, x⟩; 16.19 a piecewise smooth curve; 16.20 a rectangle in a field; 16.21 a wire; 16.22 a curve in a field (work); 16.23 flux across a curve; 16.24 the unit circle in ⟨2x, 2y⟩ | 16.14–16.26 | 16.5–16.11 |
| 16.3 | 16.25 simple and closed curves; 16.26 closed but not simple; 16.27 simply connected or not; 16.28 the endpoints decide; 16.29 a conservative field is path independent; 16.30 the paths of the converse's proof; 16.31 C₁ and C₂ left to right | 16.27–16.37 | 16.12 the Fundamental Theorem for Line Integrals |
| 16.4 | 16.32 the FTC on [a, b]; 16.33 circulation form; 16.34 rectangle D; 16.35 Example 16.38's rectangle; 16.36 a circle and its disk; 16.37 an ellipse; 16.38 flux form; 16.39 a circle of radius r; 16.40 a triangle oriented clockwise; 16.41 water across a rectangle; 16.42 a stream function's level curves; 16.43 a region with three holes; 16.44 split into simply connected pieces; 16.45 an annulus cut in two; 16.46 a circle inside C; 16.47 the MRI tumor (photo); 16.48 the planimeter; 16.49 its analysis | 16.38–16.47 | 16.13 circulation form; 16.14 area; 16.15 flux form |
| 16.5 | 16.50 two fields of zero divergence; 16.51 negative divergence; 16.52 div = 1, not magnetic; 16.53 ⟨−xy, y⟩ at (1, 4); 16.54 the paddlewheel; 16.55 ⟨y, 0⟩; 16.56 ⟨yz, xz, xy⟩ | 16.48–16.57 | 16.16 divergence; 16.17 curl |
| 16.6 | 16.57 a cylinder's grid lines and circles; 16.58 the cylinder; 16.59 an elliptic paraboloid's grid curves; 16.60 a cone; 16.61 a sphere; 16.62 a graph; 16.63 a degenerate parameterization; 16.64 smooth and piecewise smooth; 16.65 grid lines to grid curves; 16.66 the tangent plane from t_u, t_v; 16.67 the parallelogram of t_u, t_v; 16.68 a cone's area; 16.69 a surface of revolution; 16.70 a solid of revolution; 16.71 f = x + y² on a cylinder; 16.72 a piece of a sphere; 16.73 its maximum φ; 16.74 an oriented sphere; 16.75 an outward cylinder; 16.76 the Möbius strip; 16.77 fluid across S; 16.78 the mass flux through S_ij | 16.58–16.72 | 16.18 surface area; 16.19 scalar surface integral; 16.20, 16.21 flux integral |
| 16.7 | 16.79 Stokes' theorem; 16.80 S chopped into squares; 16.81 the cancelling edges; 16.82 the shadow D; 16.83 a hemisphere in a field; 16.84 a complicated surface; 16.85 the small disk D_r; 16.86 the paddlewheel | 16.73–16.76 | 16.22 (Example 16.73's line integral); 16.23 surface independence |
| 16.8 | 16.87 S encloses E; 16.88 a small box B; 16.89 the ball B_r; 16.90 ⟨−y/z, x/z, 0⟩ | 16.77–16.81 | 16.24 the divergence theorem |

16.8 opens on an unnumbered table of the theorems (Overview of Theorems); the other tables are unnumbered value tables in 16.1's examples. 16.1 to 16.8 number 24 equations as openstax.org does (every `<equation>` not classed unnumbered); each carries `\tag{16.N}`. A link to an unnumbered equation (16.6's "By [link]" in Example 16.70) reads as openstax.org prints it.

## What is new

- `vector-field` is the chapter's main type: F, G, the velocity field v, the electric and magnetic fields E and B, the radial field F_r, a gradient field ∇f, curl F and heat flow −k∇T. `integral` for every line, surface and flux integral, a circulation, a flux, work W and a mass. `curve` for C, C₁, C₂, −C, ∂D and the grid curves, `region` for D, E and the parameter domain, `surface` for S, `function` for f, g, P, Q, R, div F, a potential and a stream function, `vector` for T, N, n, t_u, t_v and r′(t), `point` for sample points and endpoints. In ink: x, y, z, t, u, v, s, k, constants and charges.
- New symbols: G (`\kvecG`), E (`\kvecE`), F_r (`\kvecFr`), t_u, t_v (`\kvectu`, `\kvectv`), div F (`\kdivF`), curl F (`\kcurlF`). F reuses `\kvecF`, v `\kvecv`, B `\kvecB`, T, N, n, r and r′ their Chapter 12–13 macros, ∇f `\kgradf`.
- Fields: plane fields flat (`field2`, `flow2` on axes), fields in space through `F.space3d` (`field`, `flow`); line integrals over curves drawn flat where the curve is planar and in 3D where the sheet under f or a space curve is the lesson; parametric surfaces, normals, patches and flux through `F.space.surface`, `normals`, `patch`; Stokes' and the divergence theorem in 3D.
- Prerequisites: 5.3 the Fundamental Theorem of Calculus; 6.5 work and density; 11.1 parametric curves and orientation; 12.1–12.4 vectors, the dot and cross products and determinants; 12.6 surfaces and quadrics; 13.1–13.3 vector-valued functions, unit tangents, arc length; 14.1 functions of several variables and level curves; 14.3 partial derivatives and Clairaut's theorem, Laplace's equation; 14.6 the gradient; 15.2 double integrals over general regions; 15.4 triple integrals.
- Concepts: 64, every glossary word among their `terms`.

## Sketches to replace and photographs

Every field, curve, region and surface is drawn live from the book's function and numbers. The chapter's heart is the three theorems: where a figure lets the reader change the field or the region and watch the boundary integral and the interior integral agree, that is the value add (Green's 16.33, 16.39, Stokes' 16.79, the divergence theorem 16.87). Folds, where the book draws one scene again: 16.3 radial with its circles, 16.5 rotational with its circles (each a choice, not folded together since the examples read each), 16.9 + 16.10 (∇(x²y²) alone and with level curves), 16.12 + 16.17 (the curve cut into pieces, the scalar and the vector sum), 16.13 + 16.14 (the sheet under f over C, f = 2 the example's state), 16.33 + 16.36 (circulation form, Example 16.39's circle a state), 16.38 + 16.39 (flux form), 16.43 + 16.44 + 16.45 (holes cut away), 16.57 + 16.58 (the cylinder's grid), 16.65 + 16.66 + 16.67 (grid curves, tangent plane, parallelogram), 16.79 + 16.82 (Stokes' surface and shadow), 16.85 + 16.86 (the disk and the paddlewheel), 16.87 + 16.89 (the divergence theorem and the shrinking ball). An example's own picture with no idea of its own is a still copy, a locked view where it is in space; exercise images stay in their cards.

Photographs: Figure 16.1 (Cyclone Catarina, the opener) kept; Figure 16.4 (the same hurricane, printed in Example 16.3, the Chapter Opener example) kept, since the example points at it; Figure 16.47 (the MRI of a tumor, the project's opening) kept; the planimeter drawings of 16.48 and 16.49 still copies, since the project's questions read them. Checkpoint and exercise images stay in their cards.

## Notes and media

One media note (16.4, "a short animation of a planimeter"), dropped and named in `notes`; it seeds a Sim of the planimeter tracing a boundary. One Student Project (16.4, Measuring Area from a Boundary: The Planimeter) is a note with its question list; one Problem-Solving Strategy (16.3, Finding a Potential Function). Proofs: 16.1 (two), 16.2 (flux), 16.3 (three), 16.4 (both forms), 16.5 (three), 16.7, 16.8 (two), each under its theorem.

## Exercises that belong to another section

The review exercises (427–451, printed in 16.8) go to the section that introduces what each tests; their placement is settled in each section's plan and listed in the chapter pass.

## Book slips found in reading

To be corrected under book-corrections-as-notes, words kept as printed, as each section is built: 16.1's Checkpoint 16.11 field y i − x²xy j (its key reads P_y = x, Q_x = −2xy, so the field is xy i − x²y j); the Key Concepts' first item repeats "F(x, y, z) to each point (x, y, z) in a subset D of ℝ³" without its "or"; 16.2's subinterval index printed with the letter l, "l ≤ i ≤ n" (1 ≤ i ≤ n); 16.4's "f_x = P and f_x = Q" (f_y = Q). Keys: checked as each section is built.

## Rule 23: what would make this chapter stunning

The chapter is about one equation said three times: what happens inside a region is told by its boundary. The reader should see a field's arrows fill the plane and a seed's flow line thread them, a sheet rise from a curve to a surface and its area become ∫ f ds, a particle carried round a curve with F · T glowing positive where it helps and negative where it fights, the work of a conservative field depend only on the endpoints however the path is dragged, a region whose boundary circulation and whose interior curl count (Q_x − P_y) tick up together as the reader reshapes it or swaps the field (Green's theorem), a paddlewheel spin where curl is large and sit still where it is zero, a parametric surface's grid curves lift off the uv-plane with t_u and t_v spanning each patch, a flux of arrows through an oriented surface, a hemisphere and a disk sharing one boundary and one circulation (Stokes'), and a box or ball whose outward flux and whose inner divergence agree as the field is changed (the divergence theorem), shrinking at last to the divergence at a point.
