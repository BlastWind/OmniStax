# Exploration: Calculus, Chapter 13 Vector-Valued Functions

Written 2026-10-13, before the chapter's sections were built. The five modules (Volume 3, Chapter 3) were converted with `python3 tools/convert.py 13` and read; the book's organization and apparatus are as `RULES.md` records them. `config.md` beside this file is the agreed list.

## Why this chapter

Calculus meets the vectors of Chapter 12. 13.1 defines a vector-valued function r(t) by its component functions, evaluates it and finds its domain, graphs plane curves and space curves (an ellipse traced twice as fast, a helix), names reparameterizations, and takes limits and continuity component by component. 13.2 differentiates by the limit of a difference quotient and then component by component, extends the derivative rules (scalar, dot and cross products, the chain rule, and r · r′ = 0 for a constant magnitude), reads the derivative as a tangent vector and normalizes it into the principal unit tangent T, and integrates component by component with a constant vector. 13.3 measures arc length, derives the length of a helical wire, builds the arc-length function and the arc-length parameterization, defines curvature as ‖dT/ds‖ with three working formulas, and adds the principal unit normal N, the binormal B, the normal and osculating planes, the Frenet frame and the osculating circle. 13.4 puts it in motion: velocity, acceleration and speed, the acceleration's tangential and normal components (a = v′T + v²κN), projectile motion and its range, and Kepler's laws, with Newton's proof that an orbit is a conic, the Moon's and Titan's orbits, Halley's Comet (the opener) and a Student Project on a banked NASCAR turn.

## Modules

Ex. = worked examples, Fig. = numbered figures, CP = checkpoints, Exer. = section exercises (chapter-wide numbers), Keyed = those carrying the book's solution, Gl. = glossary entries, KE = Key Equations rows, Eq. = equations the book numbers.

| Section | Module | Ex. | Fig. | Notes | CP | Exer. | Keyed | Gl. | KE | Eq. |
|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m53907 | 0 | 1 photo | — | 0 | — | — | 0 | 0 | 0 |
| 13.1 Vector-Valued Functions and Space Curves | m53913 | 3 | 3 | 3 definitions, 1 theorem | 3 | 1–40 | 20 | 8 | 2 | 4 (13.1–13.4) |
| 13.2 Calculus of Vector-Valued Functions | m53916 | 5 | 1 | 3 definitions, 2 theorems, 1 proof | 5 | 41–101 | 31 | 5 | 4 | 6 (13.5–13.10) |
| 13.3 Arc Length and Curvature | m53919 | 5 | 5 | 2 definitions, 3 theorems, 1 proof, 2 media | 5 | 102–154 | 26 | 11 | 5 | 9 (13.11–13.19) |
| 13.4 Motion in Space | m53930 | 5 | 12 | 1 definition, 3 theorems, 2 proofs, 2 media, 1 Student Project | 4 | 155–201 | 23 | 6 | 5 | 11 (13.20–13.30) |
| Review (in 13.4) | m53930 | — | — | — | — | 202–228 | 13 | — | — | — |

201 section exercises, 100 keyed (every odd one but 199); 27 review exercises, 13 keyed; 17 checkpoints (13.1–13.3 in 13.1, 13.4–13.8 in 13.2, 13.9–13.13 in 13.3, 13.14–13.17 in 13.4); 18 worked examples (13.1–13.18); 30 glossary entries; 4 tables (13.1–13.3 in Example 13.2, 13.4 the motion formulas).

## Figure, table, example and equation numbers

Counted from the CNXML in book order, the opener as Figure 13.1.

| Section | Figures | Examples | Equations |
|---|---|---|---|
| intro | 13.1 Halley's Comet (splash photo) | — | — |
| 13.1 | 13.2 the ellipse of Example 13.2a; 13.3 the same ellipse, part b; 13.4 the helix, part c | 13.1–13.3 | 13.1, 13.2 the two forms of r(t); 13.3, 13.4 the limit by components |
| 13.2 | 13.5 r(π/6) and r′(π/6) on the unit circle | 13.4–13.8 | 13.5 the derivative; 13.6 T; 13.7–13.10 the indefinite and definite integrals |
| 13.3 | 13.6 inscribed circles on a curve; 13.7 the Frenet frame; 13.8 an osculating circle; 13.9 y = x³ − 3x + 1; 13.10 its osculating circle at x = 1 | 13.9–13.13 | 13.11, 13.12 arc length; 13.13, 13.14 the arc-length function; 13.15–13.17 curvature; 13.18 N; 13.19 B |
| 13.4 | 13.11 v(1) on the parabola of Example 13.14; 13.12 a car's velocity on a road; 13.13 a car's acceleration and its components; 13.14 a, a_t and a_r at A, B, C; 13.15 a falling ball; 13.16 a projectile thrown at θ; 13.17 the cannon on the cliff; 13.18 Kepler's first and second laws; 13.19 the gravitational force; 13.20 the car on a banked turn (project); 13.21 the forces on the car (project); 13.22 the Bristol Motor Speedway (photo and diagram, project) | 13.14–13.18 | 13.20–13.22 velocity, acceleration, speed; 13.23–13.25 the components of acceleration; 13.26–13.29 in the proof of Kepler's first law; 13.30 Kepler's third law for any two bodies |

The book numbers 30 equations (every `<equation>` not classed unnumbered), as openstax.org shows them; every reference reads "Equation 13.N", linked, and each carries `\tag{13.N}`. A reference to a theorem or rule note reads as the note's title, linked.

## What is new

- `curve` is the chapter's main type: a vector-valued function r(t) is drawn as the curve it traces, so r, u and s (a position) wear `curve`, as do a plane or space curve, a helix, a reparameterization, an arc-length parameterization and the osculating circle (dashed, a variant). `vector` for every derivative and the frame: r′, r″, a tangent vector, T, N, B, the velocity v and acceleration a, a force, the standard unit vectors i, j, k. `limit` for L. `integral` for the integral of a vector-valued function, arc length and the arc-length function s. `derivative` for the speed v = ds/dt and the curvature κ, a rate of turning per unit length. `plane` for the normal and osculating planes. `point` for a point of the curve, a centre, the Sun. `function` for the component functions f, g, h. In ink: t, a, b, the radius of curvature, the scalar components a_T and a_N (like 12.3's scalar projection), a range R, a height H, g, G, masses and periods.
- New bold symbols T, N, B, L, v₀, s₀ and the primed r′, r″, u′, T′ (macros `\kvecT` …, `\kvecrprime` …) and κ (`\kkappa`); the text's math writes them through the macros, exercises stay plain LaTeX.
- Space curves are mathematical 3D (root rule 28.3) through `F.space3d`: the helix, a helical wire's length, the Frenet frame moving along a curve, the acceleration lying in the osculating plane. Plane curves, the curvature of y = f(x), motion in the plane, projectiles and Kepler's orbit stay flat.
- A point moving along a curve has a clock (the moving tier): the position sweeping an ellipse, a helix, a particle with its v and a, the car on a road, the falling ball, the projectile, the cannonball, the planet.
- Prerequisites: 1.1 functions; 2.1, 2.4 limits and continuity; 3.1–3.6 derivatives and the rules; 3.4 velocity, acceleration, speed; 4.10, 5.2, 5.3 antiderivatives, definite integrals, the Fundamental Theorem; 6.4 smooth functions and arc length; 11.1, 11.2 parametric curves and their arc length; 11.5 conics, foci, eccentricity and the polar form of a conic; 12.1–12.5 vectors, magnitude, unit vectors, the dot and cross products, orthogonality, lines and planes.
- Concepts: about 50, every glossary word among their `terms`; "plane curve" stays the term of 11.1's `parametric-curve`, which 13.1 reinforces.

## Sketches to replace and photographs

Every graph and curve is drawn live from the book's function and numbers. Folds, where the book draws one scene again: 13.2 + 13.3 (the ellipse of Example 13.2 traced by r(t) and by r(2t), a choice); 13.6 + 13.8 (the inscribed, osculating circle on a curve, x dragged); 13.9 + 13.10 (the cubic of Example 13.13 and its osculating circle at x = 1, a still copy); 13.12 + 13.13 + 13.14 (the car on the road, its velocity and its acceleration in components); 13.18 + 13.19 (the orbit, the equal areas and the gravitational force); 13.20 + 13.21 (the banked turn and its forces, a still copy, since the project's questions read it). Not folded: 13.4 (the helix, part c's own scene in 3D), 13.5, 13.7, 13.11, 13.15, 13.16, 13.17.

Photographs: Figure 13.1 (Halley's Comet, the opener) kept; Figure 13.22 (the Bristol Motor Speedway, photo and track diagram with its credit) kept, the project points at it. The unnumbered image of Halley's Comet inside Example 13.18 repeats the opener and is dropped. Checkpoint answer images and exercise images stay in their cards; the unnumbered images inside Examples 13.11 and 13.12 (a helix, a semicircle, a circle and its normal, a parabola in space) are kept as printed.

## Notes and media

Four media notes, dropped and named in `notes`: the curvature of a space curve (13.3) and the osculating circle (13.3), each seeding the Frenet and osculating-circle figures; a projectile video (13.4), seeding the projectile figure; the triple cross product (13.4). One Student Project (13.4, Navigating a Banked Turn) is a note with its question lists. Proofs stay under their theorems (13.2, 13.3, 13.4 two).

## Exercises that belong to another section

The review exercises (202–228, printed in 13.4) go to the section that introduces what each tests: 202, 206–211 to 13.1; 203, 212–215 to 13.2; 204, 216–222 to 13.3; 205, 223–228 to 13.4.

## Book slips found in reading

To be corrected under book-corrections-as-notes, the words kept as printed: Example 13.2's "the function becomes r(t) = cos t i + sin t j, which is a unit circle" (it is 4 cos t i + 4 sin t j, a circle of radius 4); 13.3's helix "h represents the height (distance between two consecutive turns)" (h is the height of all N turns); 13.3's proof cites the theorem it proves where it uses 13.2's dot-product rule; Example 13.12 computes B "using Equation 13.17" (the curvature formula; B is Equation 13.19) and writes −15 − 15t² for the k-component before using +15; Checkpoint 13.12's key N(2) = (√2/2)(i − j) is not orthogonal to r′(2) = i + 4j (N(2) = (4i − j)/√17) and its hint cites Equation 13.13; Figure 13.9's caption says t = 1 for x = 1; Example 13.16's maximum height 1406.39 ft (1406.25 ft, so 1506.25 ft above the water); the range at 45° written v₀²/g j (i). Keys: 153 (κ = 30/(x^{2/5}(25 + 4x^{6/5})^{3/2})), 207 (t ≠ (2n + 1)π/2), 211 (the curve is on the lower nappe; the cone z = √(x² + y²) and the plane do not meet), 213 (72t⁵ + 24 and 960t³), 227 (two components). Checked further as each section is built.

## Rule 23: what would make this chapter stunning

The chapter is about watching: a point running along a curve and the arrows it carries. The reader should see r(t) sweep the ellipse and then sweep it twice as fast without the curve changing, the difference quotient's chord swing into the tangent as Δt shrinks, a helix unwind into the straight hypotenuse that is its length, the Frenet frame tumble along a twisted curve with the osculating plane riding on it, the osculating circle swell on a flat stretch and shrink at a sharp turn, a car brake into a bend with its acceleration splitting into the part that slows it and the part that turns it, a projectile's range peak at 45°, and a planet race through perihelion while its swept areas stay equal.
