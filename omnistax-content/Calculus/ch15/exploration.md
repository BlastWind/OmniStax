# Exploration: Calculus, Chapter 15 Multiple Integration

Written 2026-10-13, before the chapter's sections were built. The eight modules (Volume 3, Chapter 5) were converted with `python3 tools/convert.py 15` and read; the book's organization and apparatus are as `RULES.md` records them. `config.md` beside this file is the agreed list.

## Why this chapter

The definite integral of Chapter 5 grows a dimension, then another. 15.1 builds the double integral over a rectangle from a double Riemann sum of thin boxes under a surface, lists six properties, splits it into iterated integrals by Fubini's theorem (a slice of area A(x) swept across the base), and uses it for areas, volumes and average values, ending on a storm's average rainfall read off a weather map. 15.2 frees the region: Type I between two graphs of x, Type II between two graphs of y, a union of both, the order of integration changed to make the work easy, volumes, areas and averages over general regions, improper double integrals, and joint densities, probabilities and expected values of a restaurant's waiting times. 15.3 cuts the plane into polar rectangles whose area is r Δr Δθ, integrates over polar rectangles and general polar regions, and finds volumes under paraboloids and a cone and the areas of a rose and between a circle and a cardioid. 15.4 builds the triple integral over a box, Fubini's theorem in six orders, general regions between two surfaces over a projection D, a change of order with three projections, and average values. 15.5 integrates in cylindrical and spherical coordinates, with the volume element ρ² sin φ Δρ Δφ Δθ, cones, spheres and paraboloids, the volume of l'Hemisfèric's sphere and of an ellipsoid, and a Student Project on a hot air balloon. 15.6 finds the mass, moments, center of mass, centroid, moments of inertia and radii of gyration of a lamina and of a solid. 15.7 generalizes every substitution so far: a transformation T(u, v) maps a region G to R, the Jacobian measures how it stretches a small rectangle, and the change-of-variables theorem in two and three variables recovers the polar, cylindrical and spherical formulas.

## Modules

Ex. = worked examples, Fig. = numbered figures, CP = checkpoints, Exer. = section exercises (chapter-wide numbers), Keyed = those carrying the book's solution, Gl. = glossary entries, KE = Key Equations rows, Eq. = equations the book numbers.

| Section | Module | Ex. | Fig. | Notes | CP | Exer. | Keyed | Gl. | KE | Eq. |
|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m53961 | 0 | 1 photo | — | 0 | — | — | 0 | 0 | 0 |
| 15.1 Double Integrals over Rectangular Regions | m53949 | 10 | 10 | 4 definitions, 2 theorems | 6 | 1–59 | 23 | 4 | 3 | 4 (15.1–15.4) |
| 15.2 Double Integrals over General Regions | m53963 | 13 | 16 | 5 definitions, 5 theorems | 10 | 60–121 | 29 | 3 | 2 | 3 (15.5–15.7) |
| 15.3 Double Integrals in Polar Coordinates | m53966 | 12 | 12 | 1 definition, 1 theorem | 6 | 122–180 | 28 | 1 | 2 | 2 (15.8, 15.9) |
| 15.4 Triple Integrals | m53965 | 7 | 10 | 1 definition, 3 theorems | 4 | 181–240 | 27 | 1 | 1 | 1 (15.10) |
| 15.5 Triple Integrals in Cylindrical and Spherical Coordinates | m53967 | 12 | 14, Table 15.1 | 2 definitions, 2 theorems, 1 Student Project | 6 | 241–296 | 25 | 2 | 2 | 2 (15.11, 15.12) |
| 15.6 Calculating Centers of Mass and Moments of Inertia | m53971 | 10 | 7 | 1 definition | 10 | 297–355 | 25 | 1 | 4 | 4 (15.13–15.16) |
| 15.7 Change of Variables in Multiple Integrals | m53970 | 9 | 13, 1 unnumbered table | 3 definitions, 2 theorems, 1 strategy | 6 | 356–415 | 28 | 4 | 0 | 0 |
| Review (in 15.7) | m53970 | — | — | — | — | 416–442 | 13 | — | — | — |

415 section exercises (the material-set exercises counted, as openstax.org numbers them), 185 keyed; 27 review exercises, 13 keyed; 48 checkpoints (15.1–15.6 in 15.1, 15.7–15.16 in 15.2, 15.17–15.22 in 15.3, 15.23–15.26 in 15.4, 15.27–15.32 in 15.5, 15.33–15.42 in 15.6, 15.43–15.48 in 15.7); 73 worked examples (15.1–15.73); 16 glossary entries.

## Figure, table, example and equation numbers

Counted from the CNXML in book order, the opener as Figure 15.1.

| Section | Figures | Examples | Equations |
|---|---|---|---|
| intro | 15.1 l'Hemisfèric, Valencia (splash photo) | — | — |
| 15.1 | 15.2 a surface over R; 15.3 R cut into R_ij; 15.4 a thin box; 15.5 z = 3x² − y over [0, 2]²; 15.6 its four subsquares; 15.7 the slices A(x) and A(y); 15.8 z = x sin(xy); 15.9 the paraboloid z = 27 − 2x² − y² over R₁ and R₂; 15.10, 15.11 the Hurricane Karl rainfall maps | 15.1–15.10 | 15.1 the double integral; 15.2, 15.3 the iterated integrals; 15.4 the average value |
| 15.2 | 15.12 D inside R and the extension g; 15.13 Type I; 15.14 Type II; 15.15 between √x and x³; 15.16, 15.17 Example 15.11's region as Type I and II; 15.18 Example 15.12's region; 15.19, 15.20 a region and its pieces D₁, D₂, D₃; 15.21 Type I to Type II; 15.22 a triangle; 15.23 a tetrahedron; 15.24 between x² and 2x; 15.25 between x = y and x = √y; 15.26 an improper integral's region; 15.27 the probability region x + y ≤ 90 | 15.11–15.23 | 15.5, 15.6 Fubini's theorem (strong form); 15.7 decomposing regions |
| 15.3 | 15.28 a polar rectangle, its subrectangles and one close up; 15.29 a polar box; 15.30 a semicircular band; 15.31 an annular region; 15.32 a general polar region; 15.33 the top half of a cardioid; 15.34 the paraboloid z = 1 − x² − y²; 15.35 a paraboloid cap over a circular base; 15.36 a paraboloid over a triangle; 15.37 the cone z = 2 − √(x² + y²); 15.38 the rose r = cos 4θ; 15.39 a circle and a cardioid | 15.24–15.35 | 15.8 the polar double integral; 15.9 over a general polar region |
| 15.4 | 15.40 a box cut into subboxes; 15.41 Example 15.37's box; 15.42 E between u₁ and u₂ over D; 15.43, 15.44 D of Type I and of Type II; 15.45 a tetrahedron and its projection; 15.46 a pyramid; 15.47 three projections; 15.48 the paraboloid y = x² + z²; 15.49 its cross section | 15.36–15.42 | 15.10 the triple integral |
| 15.5 | 15.50 cylindrical coordinates; 15.51 a cylindrical box; 15.52–15.54 three cylindrical regions; 15.55 spherical coordinates; 15.56 surfaces ρ = c, φ = c, θ = c; 15.57 the spherical volume element; 15.58, 15.59 cones under spheres; 15.60 l'Hemisfèric (photo); 15.61 balloons (photo, project); 15.62 the balloon model; 15.63 the burner column | 15.43–15.54 | 15.11 cylindrical; 15.12 Fubini in spherical coordinates |
| 15.6 | 15.64 a lamina balanced on a spindle; 15.65 density as Δm/ΔA; 15.66 a lamina cut into R_ij; 15.67 the triangle with ρ = xy; 15.68 under y = x² with ρ = x + y; 15.69 under y = eˣ; 15.70 the tetrahedron x + 2y + 3z = 6 | 15.55–15.64 | 15.13 mass; 15.14, 15.15 the moments; 15.16 the center of mass |
| 15.7 | 15.71 T maps G to R; 15.72 a polar rectangle to a quarter disk; 15.73 a triangle to a parabolic region; 15.74 a small rectangle S and its image; 15.75 S_ij to R_ij; 15.76 a half disk; 15.77, 15.78 a parallelogram and its sides; 15.79 R between lines and hyperbolas, and S; 15.80 G in uvw-space to D; 15.81 cylindrical; 15.82 spherical; 15.83 Example 15.73's box and its image | 15.65–15.73 | — |

Table 15.1 (Equations of Some Common Shapes) is in 15.5; 15.7's table of planes in Example 15.73 is unnumbered. The book numbers 16 equations (every `<equation>` not classed unnumbered), as openstax.org shows them; each carries `\tag{15.N}`.

## What is new

- `integral` is the chapter's main type: a double or triple integral, its Riemann sum and the boxes that make it, a volume, an area, a mass, moments and moments of inertia. `region` for every region of integration and every solid, `surface` for a graph z = f(x, y) and every surface that bounds a solid, `function` for the integrand and the bounding functions as symbols and a density, `matrix` for the Jacobian, `point` for a sample point and a center of mass, `angle` for θ and φ. In ink: coordinates (x, y, z, r, ρ in spherical coordinates, u, v, w), counts, increments, probabilities, expected values and radii of gyration.
- New symbols: J (`\kJ`), H (`\kH`), M_xy, M_xz, M_yz, z̄, I_x, I_y, I_z, I₀, x_c, y_c. The density ρ reuses `\krho` (6.5's density function); ρ in spherical coordinates is written plain, in ink.
- Mathematical 3D (root rule 28.3) through `F.space3d` and `F.space`: Riemann boxes under surfaces (`riemann2` and `boxes`, rectangular and polar), Fubini's slices, solids between surfaces from their iterated-integral bounds (`solid`, rectangular, cylindrical and spherical), the subboxes of a box, a cylindrical box and the spherical volume element, and a solid G carried to D by a change of variables. Plane regions, polar regions, laminas and the planar transformations are flat (`region2`, `cells2`, the polar frame).
- Prerequisites: 5.1, 5.2 the Riemann sum, definite integral, its properties and average value; 5.5 substitution; 6.1 area between curves; 6.2, 6.3 volumes; 6.5, 6.6 density, moments, center of mass and centroid; 7.1 integration by parts; 7.7 improper integrals; 11.3, 11.4 polar coordinates, polar curves and their areas; 12.4 the cross product and determinants; 12.6 quadric surfaces; 12.7 cylindrical and spherical coordinates; 14.1 functions of two and three variables and their graphs; 14.3 partial derivatives.
- Concepts: about 60, every glossary word among their `terms`.

## Sketches to replace and photographs

Every surface, region and solid is drawn live from the book's function and numbers. Folds, where the book draws one scene again: 15.2 + 15.3 + 15.4 + 15.5 + 15.6 (the boxes under a surface over subrectangles; Example 15.1's surface and subsquares are the book's numbers for the general picture), 15.13 + 15.14 + 15.15 (Type I and Type II on Example 15.10's region, a choice), 15.16 + 15.17 (Example 15.11's region both ways), 15.19 + 15.20 (a region and its three pieces), 15.29 + 15.34 (polar boxes under z = 1 − x² − y², Example 15.29's paraboloid), 15.42 + 15.43 + 15.44 (E over D of Type I or Type II), 15.64 + 15.65 + 15.66 + 15.67 (the triangular lamina, its density and cells), 15.71 + 15.72 + 15.73 (a transformation T and two of the book's), 15.74 + 15.75 (subrectangles and the Jacobian), 15.77 + 15.78 (the parallelogram and its sides), 15.80 + 15.81 + 15.82 + 15.83 (G in uvw-space carried to D). An example's own solid with no idea of its own (15.8, 15.9, 15.23, 15.35, 15.36, 15.41, 15.45, 15.48, 15.52–15.54, 15.58, 15.59, 15.70) is a still copy, a locked view, unless a plan line argues a control.

Photographs: Figure 15.1 (l'Hemisfèric, the opener) kept; Figures 15.10 and 15.11 (the rainfall maps, which Example 15.10 reads) kept; Figure 15.60 (l'Hemisfèric in Example 15.52) and 15.61 (the Balloon Fiesta, the project's opening) kept. Figures 15.62 and 15.63 (the project's balloon model and burner column) are still copies, since the project's questions read them. Checkpoint and exercise images stay in their cards.

## Notes and media

No media notes. One Student Project (15.5, Hot air balloons) is a note with its question list; one Problem-Solving Strategy (15.7, Change of Variables). No proofs.

## Exercises that belong to another section

The review exercises (416–442, printed in 15.7) go to the section that introduces what each tests; their placement is settled in the plans of each section and listed in the chapter pass.

## Book slips found in reading

To be corrected under book-corrections-as-notes, the words kept as printed: Example 15.12's region printed "where = {(x, y) …}" with D missing; Example 15.14's D₃ printed without its braces and bar, and the second integral's integrand printed (2 + 5y) for (2x + 5y); Checkpoint 15.10's hint 2 + √y (−2 + √y); Example 15.18's lower limit written y = 0 with upper x = 4; Example 15.22's joint density printed e^{−y/60} for e^{−y/40}; Example 15.23's limit printed (x + 15) for (a + 15); Checkpoint 15.16's hint 1/6000 for the density's 1/16250; Example 15.30's region printed 0 ≤ θ ≤ π (the integral runs from −π/2 to π/2) and its antiderivative's coefficient 5/2 sin 2θ (sin 2θ); 15.4's theorem "the projection of E onto the xz-plane" (the xy-plane) and "a general bounded region D in the xy-plane" for y = u₁(x, z) (the xz-plane), and the six orderings' ∫_c^e (∫_c^d); Example 15.46's upper limit √(4 − r²) (√(4 − z²)); Example 15.48's "z² = x² + y² = 4" (x² + y² + z² = 4); Example 15.49's order "dρ dθ dθ" (dρ dφ dθ); Example 15.52's integrand ρ² sin θ with θ and φ swapped (ρ² sin φ); Example 15.53's x = aρ cos φ sin θ, y = bρ sin φ sin θ, z = cρ cos θ (x = aρ sin φ cos θ, y = bρ sin φ sin θ, z = cρ cos φ) and its integrand; 15.6's "Section 6.6 of Volume 1" (the volume reworded, config 4), the moment M_y's middle sum written with y*ᵢⱼ (x*ᵢⱼ), the centroid's y_c missing its equals sign, and Example 15.61's "We found the moments of inertia of this lamina in Example 15.58" (Example 15.60); Example 15.68's Jacobian matrix printed with its second column transposed (same determinant); Example 15.73's table repeats x = y/2 where it means x = (y/2) + 1, and its text bounds G by z = 4 (z = 3) and calls the xyz-region G and the uvw-region D, against the figure and the integral. Keys: checked as each section is built.

## Rule 23: what would make this chapter stunning

The chapter is about building a solid out of pieces and taking it apart again. The reader should see boxes rise under a surface and fill it as m and n grow, a slice sweep across the base and pile up the volume as Fubini says, the same region read with vertical strips and then horizontal ones, polar boxes fan out round a paraboloid with their widths growing with r, a solid stand on its shadow D with a column running from the floor surface to the roof, a cylindrical wedge and a spherical box show where r and ρ² sin φ come from, a lamina balance on its center of mass while its density drags that point away from the centroid, and finally a grid in the uv-plane bend into a curved grid in the xy-plane, one cell's image hugging the parallelogram of r_u Δu and r_v Δv whose area is the Jacobian, and a box in uvw-space fold into a cylinder wedge or a ball.
