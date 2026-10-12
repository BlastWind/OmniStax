# Exploration: Calculus, Chapter 12 Vectors in Space

Written 2026-10-13, before the chapter's sections were built. The eight modules (Volume 3, Chapter 2) were converted with `python3 tools/convert.py 12` and read; the book's organization and apparatus are as `RULES.md` records them. `config.md` beside this file is the agreed list.

## Why this chapter

The book leaves the plane. 12.1 builds vectors in the plane as arrows (initial and terminal point, magnitude, equivalence), combines them by the triangle and parallelogram methods, writes them in components, finds magnitudes, unit vectors and the standard unit vectors i and j, and resolves a stuck car's forces and a plane in a wind. 12.2 adds the z-axis by the right-hand rule, plots points in octants, measures distance in space, writes planes parallel to the coordinate planes, spheres and cylinders, and carries vector operations into ℝ³ (a quarterback's pass). 12.3 defines the dot product, finds angles with it, tests orthogonality, defines direction angles and cosines, projects one vector onto another, and computes work. 12.4 builds the cross product orthogonal to both factors, its right-hand rule and magnitude ‖u‖‖v‖sin θ, computes it by a determinant, and uses it for areas, the triple scalar product, parallelepiped volumes, coplanarity and torque. 12.5 writes lines in space (vector, parametric and symmetric equations, segments), the distance from a point to a line, skew lines, planes from a normal vector, the distance from a point to a plane, lines of intersection and angles between planes, and closes on a student project on the distance between skew pipes. 12.6 meets surfaces: cylinders and their rulings, traces, and the quadric surfaces (ellipsoid, hyperboloids of one and two sheets, elliptic cone, elliptic and hyperbolic paraboloids), answering the opener's reflector. 12.7 extends polar coordinates to cylindrical and spherical coordinates, their coordinate surfaces, latitude and longitude, and the choice of a coordinate system.

## Modules

Ex. = worked examples, Fig. = numbered figures, CP = checkpoints, Exer. = section exercises (chapter-wide numbers), Keyed = those carrying the book's solution, Gl. = glossary entries, KE = Key Equations rows, Eq. = equations the book numbers.

| Section | Module | Ex. | Fig. | Notes | CP | Exer. | Keyed | Gl. | KE | Eq. |
|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m53906 | 0 | 1 photo | — | 0 | — | — | 0 | 0 | 0 |
| 12.1 Vectors in the Plane | m53900 | 10 | 21 | 6 definitions, 1 rule, 1 theorem, 2 proofs | 10 | 1–60 | 29 | 19 | 0 | 0 |
| 12.2 Vectors in Three Dimensions | m53897 | 10 | 21 | 2 definitions, 1 theorem, 3 rules | 10 | 61–122 | 29 | 6 | 2 | 2 (12.1, 12.2) |
| 12.3 The Dot Product | m53902 | 10 | 9 | 3 definitions, 3 theorems, 3 proofs | 9 | 123–182 | 27 | 7 | 5 | 6 (12.3–12.8) |
| 12.4 The Cross Product | m53903 | 14 | 10 | 3 definitions, 5 theorems, 1 rule, 5 proofs | 13 | 183–242 | 24 | 6 | 1 | 2 (12.9, 12.10) |
| 12.5 Equations of Lines and Planes in Space | m53870 | 10 | 12 | 1 definition, 4 theorems, 1 Student Project | 9 | 243–302 | 28 | 9 | 5 | 9 (12.11–12.19) |
| 12.6 Quadric Surfaces | m53874 | 5 | 14 | 3 definitions | 3 | 303–362 | 29 | 9 | 0 | 0 |
| 12.7 Cylindrical and Spherical Coordinates | m53875 | 8 | 17 | 2 definitions, 2 theorems | 7 | 363–422 | 30 | 2 | 0 | 0 |
| Review (in 12.7) | m53875 | — | — | — | — | 423–449 | 14 | — | — | — |

422 section exercises, 196 keyed; 27 review exercises, 14 keyed; 61 checkpoints (12.1–12.10 in 12.1, 12.11–12.20 in 12.2, 12.21–12.29 in 12.3, 12.30–12.42 in 12.4, 12.43–12.51 in 12.5, 12.52–12.54 in 12.6, 12.55–12.61 in 12.7); 67 worked examples (12.1–12.67); 58 glossary entries. Unkeyed odd exercises: 41, 107, 109, 157, 159, 165, 195, 205, 207, 221, 223, 231, 257, 279, 353. Checkpoint 12.6 ("Prove the additive inverse property") has a hint and no answer.

## Figure, table, example and equation numbers

Counted from the CNXML in book order, the opener as Figure 12.1; exercise figures are numbered too (Figure 12.43, a credit-only photograph in 12.2's exercises).

| Section | Figures | Examples | Equations |
|---|---|---|---|
| intro | 12.1 the Very Large Array (splash photo) | — | — |
| 12.1 | 12.2 a vector and equivalent vectors; 12.3 PQ (Ex. 12.1); 12.4 v, 2v, v/2, −v; 12.5 triangle and parallelogram methods; 12.6 the difference; 12.7–12.9 Ex. 12.2 (v and w, v + w, 2v − w); 12.10, 12.11 Ex. 12.3 a, b; 12.12 Ex. 12.4; 12.13 the magnitude triangle; 12.14 Ex. 12.5; 12.15 components by trigonometry; 12.16 Ex. 12.6; 12.17 v and its unit vector; 12.18 i and j; 12.19 v = xi + yj; 12.20 the unit circle (Ex. 12.8); 12.21 the car's two forces (Ex. 12.9); 12.22 the plane and the wind (Ex. 12.10) | 12.1–12.10 | — |
| 12.2 | 12.23 the axes and the right hand; 12.24 plotting (x, y, z); 12.25 (1, −2, 3); 12.26 coordinate planes; 12.27 octants; 12.28 the distance prism; 12.29 Ex. 12.12; 12.30 two lines that do not meet; 12.31 linked circles; 12.32 x = 0 in ℝ, ℝ², ℝ³; 12.33 z = 0, y = 0; 12.34 a sphere; 12.35 Ex. 12.13; 12.36 Ex. 12.14; 12.37 Ex. 12.15; 12.38 Ex. 12.16's cylinder; 12.39 v = ⟨2, 4, 1⟩; 12.40 Ex. 12.18; 12.41 A + B; 12.42 Ex. 12.19; 12.43 exercise photo | 12.11–12.20 | 12.1 distance in space, 12.2 the sphere |
| 12.3 | 12.44 the angle between u and v; 12.45 the proof's triangle; 12.46 five angle cases; 12.47 Ex. 12.23; 12.48 direction angles; 12.49 the wagon; 12.50 the projection; 12.51 the wagon's work; 12.52 the handcart (Checkpoint 12.29) | 12.21–12.30 | 12.3 u·v, 12.4 ‖u‖‖v‖cos θ, 12.5 cos θ, 12.6 proj, 12.7 comp, 12.8 work |
| 12.4 | 12.53 Ex. 12.31; 12.54 the right-hand rule; 12.55, 12.56 Ex. 12.32; 12.57 the parallelogram; 12.58 Ex. 12.36's triangle; 12.59 the parallelepiped; 12.60 Ex. 12.40; 12.61 torque; 12.62 the wrench (Ex. 12.44) | 12.31–12.44 | 12.9 u × v, 12.10 the 3 × 3 determinant |
| 12.5 | 12.63 a line and its direction vector; 12.64 distance to a line in the plane; 12.65 the parallelogram PM, v; 12.66 Ex. 12.47; 12.67 skew lines; 12.68 the classification table; 12.69 a plane and its normal; 12.70 distance to a plane; 12.71 two planes meeting; 12.72 the angle between planes; 12.73 pipes (project photo); 12.74 the frame unit (project) | 12.45–12.54 | 12.11–12.19 (lines, segments, planes, distance to a plane) |
| 12.6 | 12.75 x² + y² = 9; 12.76 z = x³; 12.77–12.79 Ex. 12.55 a–c; 12.80 z = sin x and its trace; 12.81, 12.82 Ex. 12.56's ellipsoid; 12.83 an elliptic paraboloid; 12.84 Ex. 12.57; 12.85 sculpture and cooling towers (photo); 12.86 the reflector (photo and diagram); 12.87, 12.88 the tables of quadric surfaces | 12.55–12.59 | — |
| 12.7 | 12.89 cylindrical coordinates; 12.90 the triangle in the xy-plane; 12.91, 12.92 surfaces of constant coordinate (rectangular, cylindrical); 12.93 Ex. 12.60; 12.94–12.96 Ex. 12.62 a–c; 12.97 spherical coordinates; 12.98 the derivation triangles; 12.99 spherical coordinate surfaces; 12.100 Ex. 12.63; 12.101–12.103 Ex. 12.65 a–c; 12.104 latitude and longitude; 12.105 five objects (photos, Ex. 12.67) | 12.60–12.67 | — |

The book numbers 19 equations (every `<equation>` not classed unnumbered), as openstax.org shows them; every reference reads "Equation 12.N", linked, and each carries `\tag{12.N}`. References to theorem and rule notes read as the note's title, linked (Chapter 10's rule).

## What is new

- Space. `vector` is the chapter's main type: every bold letter u, v, w, a, b, c, p, q, r, s, F, n, i, j, k, the zero vector, PQ⃗ and its kin, a sum, a difference, a scalar multiple, a unit vector, a projection, a cross product, a normal and a direction vector. `point` for initial and terminal points and points in space; `plane` for the coordinate planes, a plane and its equation; `line` for a line in space, skew lines and rulings; `surface` for a sphere, a cylinder and the quadric surfaces; `curve` for a trace; `angle` for θ between vectors and planes, the direction angles α, β, γ, the polar angle θ and φ; `matrix` for a determinant and its array; `region` for an octant and a parallelepiped. A dot product, a scalar projection, a triple scalar product, a magnitude, work and the distances stay ink: they are scalars (the brief: results wear their maths type).
- Bold vector symbols are new rows (`v_vec` for **v**, macro `\kvecv`, and so on), so the colour reaches the text's symbols; letters of exercises stay plain LaTeX as in earlier chapters.
- Three dimensions are the chapter's medium: mathematical 3D (root rule 28.3) through `F.space3d` where turning the scene is the lesson (the axes and the right hand, a point's box, the cross product and its hand rule, the parallelepiped, torque, skew lines, a plane and its normal, two planes, surfaces and their traces, cylindrical and spherical coordinates, the globe), a locked painted view where a figure only shows the book's one picture (a still copy). A page holds at most about five WebGL scenes.
- Prerequisites: Chapter 1's trigonometric and inverse trigonometric functions, radians and slope; 2.5's triangle inequality; 6.5's work; 11.1's parametric equations and parameter; 11.3's polar coordinates and conversions; 11.5's conic sections (ellipse, parabola, hyperbola, focus).
- Concepts: about 90, every glossary word among their `terms`.

## Sketches to replace and photographs

Every graph and vector sketch is drawn live or as a faithful still copy in the house style (config 18). Folds, where the book draws one scene again: 12.7 + 12.8 + 12.9 (Example 12.2's v and w, three parts as a choice); 12.12 + 12.14 (a vector moved to standard position, two examples as a choice); 12.13 + 12.15 + 12.16 (the components as legs of the right triangle); 12.17 + 12.20 (a vector's unit vector on the unit circle); 12.18 + 12.19 (i, j and v = xi + yj); 12.5 + 12.6 (sum by two methods and the difference); 12.24 + 12.25 (a point and its box); 12.26 + 12.27 (coordinate planes and octants); 12.28 + 12.29 (the distance prism); 12.32 (c) + 12.33 (a plane x = c, y = c or z = c); 12.34 + 12.35 (the sphere); 12.44 + 12.45 + 12.46 (the angle and its cases); 12.49 + 12.51 (the wagon); 12.53 + 12.54 + 12.55 + 12.56 (the cross product and its hand rule); 12.59 + 12.60 (the parallelepiped); 12.61 + 12.62 (torque); 12.64 + 12.65 (distance to a line); 12.71 + 12.72 (two planes and their angle); 12.75 + 12.76 (cylinders); 12.81 + 12.82 and 12.83 + 12.84 (traces of a surface); 12.87 + 12.88 (the quadric surfaces as a choice); 12.89 + 12.90 + 12.93 (cylindrical coordinates); 12.91 + 12.92 + 12.99 (surfaces of constant coordinate); 12.97 + 12.98 + 12.100 (spherical coordinates). Not folded, because an example's part reads each: 12.3, 12.10, 12.11, 12.36–12.38, 12.40, 12.42, 12.47, 12.58, 12.66, 12.77–12.79, 12.94–12.96, 12.101–12.103 (faithful still copies).

Photographs: Figure 12.1 (the Very Large Array, the opener) kept; 12.73 (pipes, the Student Project's opener) kept; 12.85 (sculpture and cooling towers; the text points at both parts) kept; 12.86 (dishes and the parabola, Example 12.58) kept; 12.105 (five objects of Example 12.67) kept; 12.43 (credit-only, an exercise's photograph) stays in its exercise. Checkpoint answer images and exercise images stay in their cards; unnumbered images in examples (the quarterback, the ship, Example 12.48's three pairs of lines, Examples 12.50–12.52's planes) are kept as printed.

## Notes and media

No media notes. One Student Project (12.5, Distance between Two Skew Lines) is a note with its question list (config 15). Proofs stay under their theorems (12.1 two, 12.3 three, 12.4 five).

## Exercises that belong elsewhere

Review exercises (423–449, printed in 12.7) go with the section that introduces what each tests: 445 → 12.1; 431 → 12.2; 423, 426, 429, 447 → 12.3; 424, 427 (it needs the cross product), 433, 449 → 12.4; 425, 435, 437 → 12.5; 439 → 12.6; 441, 443 → 12.7; the unkeyed computational ones (428, 430, 432, 434, 436, 438, 440, 442, 444, 446, 448) are left out.

## Corrections found in reading

- 12.3: "The following equation rearranges Equation 12.3" — the cosine formula rearranges Equation 12.4 (‖u‖‖v‖cos θ), not the component definition.
- 12.3 Key Concepts writes W = F·s with s not bold (as printed).
- 12.5 Key Equations labels the symmetric equations "Parametric Equations of a Line" (formulas list carries both forms by their own names).
- 12.7: "[Figure 12.96] also shows that ρ² = r² + z²" cites the cone of Example 12.62; the derivation figure is 12.98.
- Exercise and key slips are recorded per section.

## Cross-volume references

None in the prose: the module links ("Introduction to Applications of Integration", "Introduction to Parametric Equations and Polar Coordinates", "Introduction to Vector Calculus", the opener's link to Example 12.58) point at Chapters 6, 11 and 16 and 12.6, linked.

## Rule 23: what would make this chapter stunning

Let the reader hold space in their hands. The axes turn and a right hand curls x into y with its thumb on z; a point grows its box as the reader drags its coordinates; the cross product stands up off its parallelogram, as tall as the parallelogram's area, and flips when the factors swap; the parallelepiped flattens to nothing as three vectors fall into one plane; the wrench's torque points along the bolt; a plane sweeps out round its normal as the reader drags Q across it; two lines that never meet are turned until the reader sees they never could; a slicing plane runs through each quadric surface and its trace curve changes kind as it goes; and Columbus sits on a globe at (4000, −83°, 50°).
