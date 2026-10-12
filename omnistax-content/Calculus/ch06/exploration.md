# Exploration: Calculus, Chapter 6 Applications of Integration

Written 2026-10-12, before the chapter's sections were built. The ten modules were converted with `python3 tools/convert.py 6` and read; the book's organization and apparatus are as `RULES.md` records them. The chapter's home is Volume 1 (Chapter 6); Volume 2 prints the same modules as its Chapter 2. `config.md` beside this file is the agreed list.

## Why this chapter

The definite integral of Chapter 5 becomes a tool. 6.1 integrates the difference of two functions for the area between curves, splits a region where the curves cross, and integrates along y. 6.2 slices a solid perpendicular to an axis and integrates the cross-sectional area, then specializes to solids of revolution: disks, washers, around either axis and around other lines. 6.3 revolves the same regions with cylindrical shells, integrating along the perpendicular axis, and compares the three methods. 6.4 sums line segments into arc length, for y = f(x) and x = g(y), and revolved segments (frustum bands) into the area of a surface of revolution. 6.5 integrates density into mass (a rod, a disk with radial density), force into work (springs, pumping a tank) and pressure into hydrostatic force (a trough, the Hoover Dam of the opener). 6.6 balances point masses, finds the center of mass and centroid of a lamina, uses symmetry, and closes on the theorem of Pappus. 6.7 rebuilds ln x as ∫₁ˣ dt/t, defines e and eˣ from it, and general aˣ and logₐx. 6.8 models exponential growth and decay (doubling time, half-life, compound interest, Newton's law of cooling, radiocarbon dating). 6.9 differentiates and integrates the hyperbolic functions and their inverses and meets the catenary.

## Modules

Ex. = worked examples, Fig. = numbered figures, Img. = unnumbered images in the narrative, CP = checkpoints (all keyed), Exer. = section exercises (chapter-wide numbers), Keyed = those carrying the book's solution, Gl. = glossary entries, KE = Key Equations rows.

| Section | Module | Ex. | Fig. | Img. | Tables | Notes | CP | Exer. | Keyed | Gl. | KE | Media |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m53638 | 0 | 1 photo | 0 | 0 | — | 0 | 0 | 0 | 0 | 0 | — |
| 6.1 Areas between Curves | m53640 | 5 | 9 | 2 (checkpoint graphs) | 0 | 3 theorems | 5 | 1–57 | 29 | 0 | 2 | 1 calculator |
| 6.2 Determining Volumes by Slicing | m53642 | 6 | 14 | 1 (checkpoint) | 0 | 1 strategy, 4 rules | 6 | 58–113 | 26 | 5 | 3 | 1 integral calculator |
| 6.3 Volumes of Revolution: Cylindrical Shells | m53643 | 6 | 12 | 0 | 0 | 2 rules | 6 | 114–164 | 25 | 1 | 1 | — |
| 6.4 Arc Length of a Curve and Surface Area | m53644 | 5 | 11 | 0 | 0 | 3 theorems | 5 | 165–217 | 27 | 3 | 3 | — |
| 6.5 Physical Applications | m53648 | 6 | 14 | 1 (the dam photo with its model) | 0 | 2 theorems, 1 definition, 2 strategies | 6 | 218–253 | 18 | 4 | 4 | 1 article |
| 6.6 Moments and Centers of Mass | m53649 | 6 | 13 (1 photo) | 0 | 0 | 5 theorems, Pappus, 1 proof, 1 Student Project | 6 | 254–294 | 20 | 6 | 3 | — |
| 6.7 Integrals, Exponential Functions, and Logarithms | m53650 | 7 | 4 | 0 | 0 | 4 definitions, 6 theorems, 2 proofs | 7 | 295–347 | 24 | 0 | 2 | — |
| 6.8 Exponential Growth and Decay | m53651 | 5 | 2 | 0 | 1 | 2 rules, 2 definitions | 5 | 348–376 | 14 | 4 | 0 | — |
| 6.9 Calculus of the Hyperbolic Functions | m53653 | 5 | 4 (1 photo) | 0 | 3 | — | 5 | 377–434 | 26 | 1 | 0 | — |
| Review (in 6.9) | m53653 | — | — | — | — | — | — | 435–460 | 13 | — | — | — |

434 section exercises, 209 keyed; 26 review exercises, 13 keyed; 51 checkpoints; 51 worked examples; 24 glossary entries. The key answers the odd numbers only. Exercise images: 25 in 6.1 (the region graphs of 1–6 and the sketch answers), 30 in 6.2 (the pyramids, slices and regions), 12 in 6.3, 5 in 6.4, 1 in 6.6 (the torus), 1 in 6.7, 1 in 6.9 (the catenoid).

## Figure, table and example numbers

Counted from the CNXML in book order, the opener as Figure 6.1; a bare `<media>` and a table with class `unnumbered` take no number (the Key Equations and the exercises' data tables). Examples 6.1–6.51 and checkpoints 6.1–6.51 run through the chapter.

| Section | Figures | Tables | Examples |
|---|---|---|---|
| intro | 6.1 the Hoover Dam (splash photo) | — | — |
| 6.1 | 6.2 f over g on [a, b], 6.3 its rectangles and a representative one, 6.4 Ex. 6.1, 6.5 Ex. 6.2, 6.6 sin and cos (Ex. 6.3), 6.7 x² and 2 − x (Ex. 6.4), 6.8 u(y) and v(y), 6.9 their horizontal rectangles, 6.10 the region of 6.7 along y (Ex. 6.5) | — | 6.1–6.5 |
| 6.2 | 6.11 a cylinder with a noncircular base, 6.12 a solid of varying cross-section, 6.13 three slices, 6.14 the pyramid (Ex. 6.6), 6.15 a region revolving, 6.16 + 6.17 Ex. 6.7's region and solid, 6.18 the disk method, 6.19 √x (Ex. 6.8), 6.20 + 6.21 √(4 − y) about the y-axis (Ex. 6.9), 6.22 the washer method, 6.23 x over 1/x (Ex. 6.10), 6.24 about y = −2 (Ex. 6.11) | — | 6.6–6.11 |
| 6.3 | 6.25 a region revolved about the y-axis, 6.26 a shell and nested shells, 6.27 the shell's rectangle, 6.28 the shell cut and opened, 6.29 1/x (Ex. 6.12), 6.30 2x − x² (Ex. 6.13), 6.31 2√y about the x-axis (Ex. 6.14), 6.32 about x = −1 (Ex. 6.15), 6.33 √x over 1/x (Ex. 6.16), 6.34 the table of methods, 6.35 + 6.36 Ex. 6.17 (a) and (b) | — | 6.12–6.17 |
| 6.4 | 6.37 line segments along a curve, 6.38 a representative segment, 6.39 one along x = g(y), 6.40 + 6.41 a surface of revolution and its frustum bands, 6.42 a frustum, 6.43 a cone, 6.44 the frustum as a cut cone, 6.45 a representative band, 6.46 √x (Ex. 6.21), 6.47 y³/3 about the y-axis (Ex. 6.22) | — | 6.18–6.22 |
| 6.5 | 6.48 a rod, 6.49 a segment of it, 6.50 a disk and a washer, 6.51 a spring, 6.52 + 6.53 the cylindrical tank and a layer, 6.54 + 6.55 the conical tank (Ex. 6.26), 6.56 a horizontal plate, 6.57 a vertical plate, 6.58 the trough (Ex. 6.27), 6.59 + 6.60 + 6.61 the dam model (Ex. 6.28) | — | 6.23–6.28 |
| 6.6 | 6.62 a rod on a fulcrum, 6.63 two masses and x̄, 6.64 a point mass in the plane, 6.65 a lamina, 6.66 its rectangle, 6.67 √x (Ex. 6.31), 6.68 + 6.69 a lamina between two curves, 6.70 Ex. 6.32, 6.71 4 − x² (Ex. 6.33), 6.72 the Skywalk (photo), 6.73 its model, 6.74 the torus (Ex. 6.34) | — | 6.29–6.34 |
| 6.7 | 6.75 ln x as area, 6.76 the graph of ln x, 6.77 the area 1 up to e, 6.78 ln x and exp x | — | 6.35–6.41 |
| 6.8 | 6.79 bacteria, 6.80 exponential decay | 6.1 the bacterial population | 6.42–6.46 |
| 6.9 | 6.81 the hyperbolic functions, 6.82 their inverses, 6.83 chains (photo), 6.84 2 cosh(x/2) | 6.2 derivatives of the hyperbolic functions, 6.3 domains and ranges of their inverses, 6.4 derivatives of the inverses | 6.47–6.51 |

## What is new

- `integral` is the chapter's type: every quantity it computes is one (an area between curves, a volume, an arc length, a surface area, a mass, a work, a hydrostatic force, a moment). `region` arrives for the region revolved and the solid of revolution, `surface` for a surface of revolution, `point` for the center of mass and centroid. A density, a variable force and the depth and width of a plate are `function`s; f′ in the arc-length integrand is a `derivative`.
- 60 concepts, every glossary word among their `terms`. 6.7 rebuilds ln, e and eˣ: the definitions by the integral are new concepts; the properties, derivatives and integrals already introduced in 1.5, 3.9 and 5.6 are reinforced, not restated.
- Ten symbols: u(y) as a function (`u_fn`), V_shell, ρ, W, the hydrostatic force F (`F_h`, beside the force function F of 6.5), w, Mₓ, M_y, x̄, ȳ.
- figlib gains `F.revolve` (geometry in `solid.ts`): a region's outline turned about a line of its plane, as a three.js mesh with its rims, or painted as a locked view; the Riemann rectangles that become disks, washers and shells; open curves that become surfaces of revolution. Volumes and areas are checked against the book's integrals in `tests/solid.test.ts`.

## Sketches to replace and photographs

Every graph is drawn live from the book's function (config 18); where the book draws no formula (6.2, 6.3, 6.8, 6.9, 6.12, 6.13, 6.15, 6.25–6.27, 6.37–6.41, 6.45, 6.48–6.50, 6.65, 6.66, 6.68, 6.69) the plan names a stand-in close to the sketch. Solids of revolution are drawn in 3D: the figures whose idea is the solid itself (a region revolving, disks, washers, shells, frustum bands, the torus) are `view3d` scenes the reader turns; the solids of a worked example are painted locked views from the book's viewpoint, since a page holds only a few WebGL scenes. Folds the plans consider: 6.2 + 6.3, 6.8 + 6.9, 6.12 + 6.13, 6.16 + 6.17, 6.20 + 6.21, 6.25 + 6.26, 6.35 + 6.36, 6.37 + 6.38, 6.40 + 6.41, 6.42 + 6.43 + 6.44, 6.52 + 6.53, 6.54 + 6.55, 6.59 + 6.60 + 6.61, 6.62 + 6.63, 6.65 + 6.66, 6.68 + 6.69, 6.75 + 6.76 + 6.77.

Photographs: Figure 6.1 (the Hoover Dam, opener) kept; the unnumbered dam photo beside its trapezoid model in Example 6.28 kept (the example points at it); Figure 6.72 (the Skywalk) kept, the Student Project points at it; Figure 6.83 (chains) kept, the text points at it. Figure 6.34 is a table printed as an image, with three small diagrams and no caption: the plan decides between a live redraw and the image.

## Notes and media

Three media notes are dropped and named in `notes` (config 14): 6.1's area calculator, 6.2's integral calculator and 6.5's History Channel article on the Hoover Dam. The calculators seed the live area and volume figures; the article seeds nothing. The Student Project (The Grand Canyon Skywalk, 6.6) is a note with its six questions (config 15). The proofs of Pappus (6.6), the properties of ln and of eˣ (6.7) stay under their theorems (config 9). Problem-Solving Strategies: slicing (6.2), pumping and hydrostatic force (6.5), each a note and a `skill`.

## Cross-references the reader must not see as volumes

Example 6.51 prints "Recall from Section 2.4 that the formula for arc length is", Volume 2's own number for 6.4. It becomes "Section 6.4", linked, with a correction note giving the printed words (config 4). The module links name chapters by title (Introduction to Integration, Introduction to Techniques of Integration, Introduction to Differential Equations, Taylor and Maclaurin Series, Introduction to Functions and Graphs) and take their merged pages.

## Exercises that belong to another section

The Chapter Review Exercises (435–460) are printed at the end of 6.9 and placed with the section that introduces what each tests (config 11), `source_section` 6.9:

- 6.1: none alone; the area parts of 443–448 go with the volumes they are asked beside.
- 6.2: 437 (true or false: disks can replace washers, keyed False), 439 (slicing with equilateral triangles on an ellipse, keyed), 440 (washers about the y-axis, unkeyed computational, left out), 441 (keyed).
- 6.3: 442 (shells, unkeyed computational, left out); 443, 445, 447 (area and both volumes, keyed); 444, 446, 448 (unkeyed computational, left out).
- 6.4: 453 (arc length along y, keyed), 454 (unkeyed, left out), 455 (surface area and volume of the loudspeaker, keyed).
- 6.5: 435 (true or false: half-full cylinder, keyed False), 436 (true or false: constant force, unkeyed, kept with an AI-marked approach), 456 (the Karun-3 dam, unkeyed computational, left out).
- 6.6: 449 (mass on a disk, keyed, 6.5's radial density), 450 (center of mass, unkeyed, left out), 451 (mass and center of mass, keyed).
- 6.9: 452 (the length of cosh x, unkeyed computational, left out), 459 (the catenoid's volume, keyed: its integral of cosh² x needs 6.9), 460 (its surface area, unkeyed, left out); these are 6.9's own, printed there.
- 6.8: 438 (true or false: half-life constant, unkeyed, kept with an approach), 457 (time of death, keyed), 458 (the Dow Jones model, unkeyed, an explanation: kept with an approach).

Unkeyed even section exercises are judged per plan under config 12: the derivations, explanations and true-or-false justifications are kept with approaches (6.2's 58, 60, 62 derivations and 62's explanation, 6.3's 164, 6.4's 168, 6.5's last, 6.8's true-or-false set, 6.9's proofs); the rest are computational and left out.

## Rule 23: what would make this chapter stunning

The chapter is where the integral turns into things. A region between two curves fills with rectangles that thin into its area, and where the curves cross the reader sees the signed integral cancel while the area does not. A flat region lifts off the page and turns about its axis, sweeping out the solid; the same rectangles turn with it into disks, washers or nested shells, and the stack of them converges on the solid's volume as n grows, with the readout's sum closing on the book's 412π/15. A shell is cut and unrolled into the flat plate 2πx · f(x) · Δx, so the formula is seen being made. A curve's inscribed polygon straightens into its arc length, and the same segments revolved become frustum bands hugging the surface. Water in a tank is lifted layer by layer, the work of each layer its weight times its lift; the Hoover Dam's force is read with the reservoir full and in drought. A plate balances on a pin placed at its centroid; a disk swept round an axis becomes a torus whose volume is its area times the centroid's circuit. ln x is drawn as the area under 1/t that the reader extends, its graph traced beneath, and e is where that area reaches 1.

## Wanted from figlib

- Built for this chapter: `F.revolve` (above). Nothing else: the flat figures use `plot`, `shade`, `riemann`, `drag`, `axes`, and the locked views `view`/`face` or `revolve.paint`.
