# Exploration: Calculus, Chapter 11 Parametric Equations and Polar Coordinates

Written 2026-10-12, before the chapter's sections were built. The six modules (Volume 2, Chapter 7, which Volume 3 prints again as its Chapter 1; built once, `RULES.md` Source) were converted with `python3 tools/convert.py 11` and read; the book's organization and apparatus are as `RULES.md` records them. `config.md` beside this file is the agreed list.

## Why this chapter

Until now every curve was the graph of a function. 11.1 lets x and y both depend on a parameter t, so a point travels a curve that need not pass the vertical line test: lines, parabolas, circles, ellipses, the cycloid of a rolling wheel, hypocycloids with a/b cusps, and in two student projects the witch of Agnesi and the curtate and prolate cycloids. It eliminates the parameter and parameterizes a curve two ways. 11.2 does calculus on such curves: dy/dx = y′(t)/x′(t) by the chain rule, the second derivative, the area under a parametric curve (the cycloid's arch, 3π), its arc length (a semicircle, 3π; a pitched baseball's distance and speed) and the surface it sweeps about the x-axis (a sphere, 4πr²). 11.3 locates points by (r, θ), converts both ways, plots polar curves from a table, names the common ones (lines through the pole, circles, spirals, cardioids, limaçons, roses), answers the opener's nautilus with the logarithmic spiral, and tests polar symmetry. 11.4 adds up sectors to get A = ½∫r² dθ, the area between two polar curves, and the arc length ∫√(r² + (dr/dθ)²) dθ. 11.5 defines the parabola, ellipse and hyperbola by distances, derives their standard forms, gives the reflective properties, defines eccentricity and the focal parameter, writes every conic as r = ep/(1 ± e cos θ), and identifies a general second-degree equation by its discriminant and rotation of axes.

## Modules

Ex. = worked examples, Fig. = numbered figures, Img. = unnumbered images in the text (not answers), CP = checkpoints (all keyed), Exer. = section exercises (chapter-wide numbers), Keyed = those carrying the book's solution, Gl. = glossary entries, KE = Key Equations rows, Eq. = equations the book numbers.

| Section | Module | Ex. | Fig. | Img. | Notes | CP | Exer. | Keyed | Gl. | KE | Eq. | Media |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m53831 | 0 | 1 photo | 0 | — | 0 | — | — | 0 | 0 | 0 | — |
| 11.1 Parametric Equations | m53834 | 3 | 14 | 0 | 1 definition, 2 Student Projects | 3 | 1–61 | 30 | 7 | 0 | 0 | — |
| 11.2 Calculus of Parametric Curves | m53850 | 6 | 11 | 0 | 3 theorems, 1 proof | 6 | 62–124 | 30 | 0 | 5 | 6 (11.1–11.6) | — |
| 11.3 Polar Coordinates | m53852 | 6 | 12 | 1 (symmetry table) | 2 theorems, 1 strategy | 5 | 125–187 | 32 | 10 | 0 | 2 (11.7, 11.8) | 1 video |
| 11.4 Area and Arc Length in Polar Coordinates | m53840 | 3 | 4 | 0 | 2 theorems | 3 | 188–254 | 33 | 0 | 2 | 2 (11.9, 11.10) | — |
| 11.5 Conic Sections | m53846 | 6 | 15 | 1 (satellite dish) | 3 definitions, 4 theorems, 1 table | 6 | 255–321 | 34 | 12 | 0 | 5 (11.11–11.15) | — |
| Review (in 11.5) | m53846 | — | — | — | — | — | 322–348 | 13 | — | — | — | — |

321 section exercises, 159 keyed; 27 review exercises, 13 keyed; 23 checkpoints (11.1–11.3 in 11.1, 11.4–11.9 in 11.2, 11.10–11.14 in 11.3, 11.15–11.17 in 11.4, 11.18–11.23 in 11.5); 24 worked examples; 29 glossary entries. The odd exercises 49 and 117 ("Show that …") have no key.

## Figure, table, example and equation numbers

Counted from the CNXML in book order, the opener as Figure 11.1.

| Section | Figures | Examples | Equations | Tables |
|---|---|---|---|---|
| intro | 11.1 the chambered nautilus (splash photo) | — | — | — |
| 11.1 | 11.2 Earth's orbit, 11.3 the same with axes; 11.4–11.6 Example 11.1 a–c (line, parabola, circle); 11.7, 11.8 Example 11.2 a, b (half parabola, ellipse); 11.9 the rolling wheel and cycloid; 11.10 hypocycloid a = 4, b = 1; 11.11 eight hypocycloids by a/b; 11.12 witch of Agnesi (project); 11.13–11.15 the ant on the tire, the spoke and the flange (project) | 11.1–11.3 | — | — |
| 11.2 | 11.16 the line segment; 11.17–11.19 Example 11.4 a–c; 11.20 tangent at t = 2 (Ex. 11.5); 11.21 the cycloid's arch; 11.22 rectangles under a parametric curve; 11.23 chords along a curve; 11.24 the semicircle (Ex. 11.7); 11.25 a surface of revolution; 11.26 the semicircle of radius r (Ex. 11.8) | 11.4–11.9 | 11.1 dy/dx, 11.2 d²y/dx², 11.3 the area, 11.4 the chord sum, 11.5 the arc length, 11.6 the surface area | — |
| 11.3 | 11.27 P with r and θ; 11.28 the polar coordinate system; 11.29 three points (Ex. 11.11); 11.30 r = 4 sin θ (Ex. 11.12); 11.31, 11.32 the common curves (images of a table, no caption); 11.33 r = 3 sin 3θ; 11.34 roses with rational and irrational coefficients; 11.35 a spiral (Ex. 11.14); 11.36 the nautilus and r = 1.2(1.25^θ); 11.37 one petal, 11.38 the four-petaled rose (Ex. 11.15) | 11.10–11.15 | 11.7 x = r cos θ, y = r sin θ; 11.8 r² = x² + y², tan θ = y/x | — |
| 11.4 | 11.39 sectors under a polar curve; 11.40 a sector; 11.41 r = 3 sin 2θ (Ex. 11.16); 11.42 between r = 2 + 2 sin θ and r = 6 sin θ (Ex. 11.17) | 11.16–11.18 | 11.9 the area, 11.10 the arc length | — |
| 11.5 | 11.43 the cone of y = 3x; 11.44 the four conic sections; 11.45 a parabola's focus and directrix; 11.46 four parabolas; 11.47 Ex. 11.19's parabola; 11.48 an ellipse's foci; 11.49 Ex. 11.20's ellipse; 11.50 Earth's orbit and Statuary Hall (photo); 11.51 a hyperbola; 11.52 Ex. 11.21's hyperbola; 11.53 a hyperbolic mirror; 11.54 the conics with directrices; 11.55 r = 3/(1 + 2 cos θ) (Ex. 11.23); 11.56 xy = 1; 11.57 the rotated ellipse (Ex. 11.24) | 11.19–11.24 | 11.11 the parabola, 11.12, 11.13 the ellipse, 11.14, 11.15 the hyperbola | 11.1 Eccentricities and Focal Parameters |

The book numbers 15 equations (every `<equation>` that is not `class="unnumbered"`, the display formulas of the theorem notes), as openstax.org shows them; every "[ref:…]" to one reads "Equation 11.N", linked, and each carries `\tag{11.N}`. References to theorem notes read as the theorem's title, linked (Chapter 10's rule).

## What is new

- `curve` is the chapter's main type: a parametric curve C, the cycloid, the hypocycloid, the witch, a polar curve r = f(θ) with its named families (spiral, cardioid, limaçon, rose), the conic sections. `angle` for θ, the polar angle (Chapter 1's θ), the angle of rotation of axes; `point` for the plotted point (x(t), y(t)) or (r, θ), a critical point, the pole, a focus, a vertex, a cusp; `line` for a tangent line, the polar axis, a directrix, an asymptote, the major and minor axes; `derivative` for dy/dx, d²y/dx², x′(t), y′(t), dy/dt and dx/dt, and the speed s′(t); `integral` for the area A, the arc lengths s and L and the surface area S; `surface` for the cone and its nappes; `region` for the polar region whose area is taken.
- A parametric curve is a path traced in time, so its figures move: the point runs the curve over t under the app's transport, the orientation is the direction it runs, and where the section is about derivatives the tangent rides with it. A polar curve is drawn by an angle the reader drags: the ray from the pole turns, the point sits at signed distance r along it (behind the pole where r < 0), and the curve is drawn up to the current θ.
- A new figlib part, `F.polar` (Chapter 11 block): an equal-scale polar frame with rings and spokes, a polar curve drawn up to a dragged angle, the ray and the point, a grip that turns θ by the pointer's angle about the pole, the sectors of 11.4's Riemann sum, and a parametric path drawn up to a parameter with orientation marks; pure geometry in `polar.ts` with a test.
- Prerequisites: Chapter 1's functions, symmetry, the unit circle, radians, the Pythagorean and double-angle identities, inverse trigonometric and hyperbolic functions; Chapter 3's chain rule and higher derivatives; Chapter 4's critical points and the Mean Value Theorem; Chapter 5's Riemann sums, the definite integral and the Fundamental Theorem; Chapter 6's arc length and surface area; Chapter 7's power-reducing identities.
- Concepts: about 55, every glossary word among their `terms`.

## Sketches to replace and photographs

Every graph is drawn live (config 18). Folds, where the book draws one scene again: 11.2 + 11.3 (the orbit, then with its axes: one moving figure of the year); 11.9 + 11.13 + 11.14 + 11.15 (one wheel with the ant at distance b from its centre, b = a the cycloid, b < a the spoke, b > a the flange); 11.10 + 11.11 (one rolling circle with a choice of a/b); 11.21 + 11.22 (the cycloid's arch and its rectangles); 11.23 + 11.24 (chords along the semicircle); 11.31 + 11.32 (the common curves, one choice); 11.33 + 11.34 (roses by the coefficient of θ); 11.37 + 11.38 (one petal, reflected); 11.43 + 11.44 (the cone and its cutting plane, 3D); 11.45 + 11.46 (the parabola's focus and directrix in its four directions). Not folded, because an example or its part reads each: 11.4–11.8, 11.16–11.20, 11.25 and 11.26, 11.29 and 11.28, 11.47, 11.49, 11.52, 11.55, 11.56 and 11.57. Two unnumbered images become Sims: the symmetry table of 11.3 and the satellite dish of 11.5.

Photographs: Figure 11.1 (the nautilus, the opener) kept; Figure 11.36's nautilus photo stands beside its spiral as the original image; Figure 11.50 (Earth's orbit drawn with Statuary Hall's photograph; the text points at both parts) kept as a photograph. Exercise and checkpoint answer images stay in their solutions; the figure of 11.3's exercises 131–134 (points on a polar grid) is a faithful copy in its stem.

## Notes and media

One media note is dropped and named in `notes` (config 14): 11.3's video on sketching polar curves, which seeds the polar figures. Two Student Projects in 11.1 (The Witch of Agnesi; Travels with My Ant: The Curtate and Prolate Cycloids) are notes with their question lists (config 15). One Problem-Solving Strategy (11.3, Plotting a Curve in Polar Coordinates) is a note. Proof under its theorem: 11.2 (Derivative of Parametric Equations).

## Cross-volume references

The book says "Calculus 1" once (11.2, "This follows from results obtained in Calculus 1"), meaning Volume 1: reworded with a correction note giving the printed words (config 4). Its module links ("Introduction to the Applications of Derivatives", "Introduction to the Applications of Integration", "Curve Length and Surface Area", "Appendix A") point at Chapters 4 and 6 and the Table of Integrals sheet, linked.

## Errors noticed in reading (corrections per book-corrections-as-notes)

- 11.2, the area derivation: "If x is a decreasing function … the area is given by −∫ₐᵇ y(t)x′(t)dt = ∫ₐᵇ y(t)x′(t)dt": the second integral runs from b to a.
- 11.2, Checkpoint 11.7's answer: "x(t) is a decreasing function over the interval [0, 2π]": the interval of the checkpoint is [0, π].
- 11.2, the baseball: s′(1/3) is printed 2√(256(1/3)² − 16(1/3) + 4901) ≈ 140.34 ft/s; the formula two lines above gives −32(1/3), and the speed is ≈ 140.27 ft/s (95 mph stands).
- 11.3, "Example 11.14 gives some more examples of functions for transforming from polar to rectangular coordinates": the examples are Example 11.13's (the book's link names the spiral example).
- 11.3, Example 11.10's second list is printed a.–c. in the problem and e.–g. in the solution (the CNXML starts it at e).
- 11.4, Example 11.17: "The circle r = 3 sin θ is the red graph": the circle is r = 6 sin θ.
- 11.5, the ellipse's derivation: "From the Pythagorean theorem, c² = b² = a² and b² + a² = c²": the right triangle gives b² + c² = a².
- 11.5, Example 11.20: "Comparing this to Equation 11.14 gives h = 2, k = −3, a = 3, and b = 2": the vertical ellipse is Equation 11.13.
- 11.5, Example 11.21: "Comparing this to Equation 11.15": the horizontal hyperbola is Equation 11.14.
- 11.5, Figure 11.51's caption: "from any point on the ellipse to the foci": on the hyperbola.
- 11.5, Example 11.24: C′ is printed "13 sin²60 + (−6√3) sin 60 cos 60 = 7 cos²60" and then "(√3/2)² + …": the terms are 13 sin²60 − (−6√3) sin 60 cos 60 + 7 cos²60 and 13(√3/2)² + 6√3(√3/2)(1/2) + 7(1/2)², which gives the printed 16.
- Section exercises: corrections to keys found while each section's exercises are checked go into its plan.

## Exercises that belong to another section

The Chapter Review Exercises (322–348) are printed at the end of 11.5 and placed with the section that introduces what each tests (config 11), `source_section` 11.5:

- 11.1: 323 (cosh 3t, 2 sinh 3t is a hyperbola, keyed true), 327, 329 (sketch and eliminate the parameter, keyed).
- 11.2: 325 (dx/dy = dy/dx, keyed false), 337 (area under a parametric curve), 339 (arc length).
- 11.3: 331 (a rose and its symmetry), 333 (the polar equation of y² = 4 + x²); 322 (rectangular coordinates of (4, 5π/6), an unkeyed true or false) kept with an approach.
- 11.4: 335 (the tangent to r = 3 + cos 2θ, beside 11.4's own polar tangents); 324 (the arc length of r = θ/2, an unkeyed true or false) kept with an approach.
- 11.5: 341, 343 (Cartesian equations of a parabola and a hyperbola), 345, 347 (eccentricity of a polar conic, Pluto's orbit).
- Left out, unkeyed and computational: 326, 328, 330, 332, 334, 336, 338, 340, 342, 344, 346, 348.

Unkeyed exercises are judged per plan under config 12: the proofs 49, 117, 234 and 254 are kept with approaches; the rest are computational or "use technology" sketches and left out, named in `exercise_notes`.

## Rule 23: what would make this chapter stunning

A parametric curve is a story with a clock. The page can let the reader watch Earth go round its year with its coordinates written beside it, a point run a parabola in the direction the arrows promise, and an ant ride a bicycle wheel: on the rim it traces arches with cusps where it stops dead on the road, up a spoke the arches flatten, on a train's flange it loops backward though the train goes on. A small circle rolling inside a large one draws a star with a/b points, closes into a pentagram at 5/3, and never closes at π. On the curve itself the tangent rides along and turns vertical exactly where x′(t) = 0. Rectangles under the cycloid have unequal widths because x(t) is not linear, and their sum closes on 3π; chords along a semicircle close on 3π too. Polar coordinates turn the picture inside out: the reader drags an angle, the ray swings, and r = 4 sin θ draws its circle twice, the second time from behind the pole; a rose grows a petal per sweep, three for sin 3θ and four for sin 2θ, closes for a rational coefficient and fills its disk for an irrational one; a logarithmic spiral lies over the nautilus. Areas become fans of sectors. A plane tilts through a double cone and cuts a circle, an ellipse, a parabola at the generating line's angle and a hyperbola past it; one slider on the eccentricity bends the same focus–directrix picture from ellipse to parabola to hyperbola, and parallel rays find a dish's focus all at once because every path to it has one length.
