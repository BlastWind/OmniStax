# Exploration: Calculus, Chapter 1 Functions and Graphs

Written 2026-10-12, before the chapter's sections were built. The six modules were converted with `python3 tools/convert.py 1` and read; the book's organization and apparatus are as `RULES.md` records them, and nothing in this chapter departs from that account. `config.md` beside this file is the agreed list.

## Why this chapter

The chapter is a review: every function the rest of the book differentiates and integrates is named, graphed and taken apart here. 1.1 says what a function is and the ways it is shown (table, graph, formula), then combines functions, composes them and reads symmetry off a graph. 1.2 walks the classes (lines, polynomials, algebraic, transcendental, piecewise) and the transformations y = cf(a(x + b)) + d. 1.3 builds the trigonometric functions on the unit circle, 1.4 inverts functions and restricts domains to do it, and 1.5 builds bˣ, e, the logarithms and the hyperbolic functions. The chapter opener's question, how a magnitude 9 earthquake compares with 8.2, is answered in Example 1.39.

## Modules

Ex. = worked examples, Fig. = numbered figures, Img. = unnumbered images in the narrative, CP = checkpoints (all keyed), Exer. = section exercises (chapter-wide numbers), Keyed = those carrying the book's solution, Gl. = glossary entries, KE = Key Equations rows.

| Section | Module | Ex. | Fig. | Img. | Tables | Defs / rules / other notes | CP | Exer. | Keyed | Gl. | KE | Media |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m53472 | 0 | 1 photo | 0 | 0 | — | 0 | 0 | 0 | 0 | 0 | — |
| 1.1 Review of Functions | m53477 | 11 | 13 | 1 | 5 | 4 definitions, 1 rule | 8 | 1–58 | 29 | 17 | 2 | 1 applet (graphs of functions) |
| 1.2 Basic Classes of Functions | m53478 | 10 | 15 | 6 | 2 | 2 definitions, 1 rule | 8 | 59–112 | 27 | 17 | 4 | — |
| 1.3 Trigonometric Functions | m53479 | 6 | 7 | 5 | 2 | 1 definition, 1 rule | 6 | 113–182 | 31 | 4 | 1 | — |
| 1.4 Inverse Functions | m53480 | 5 | 6 | 10 | 0 | 3 definitions, 1 rule, 1 strategy, 1 Student Project | 4 | 183–228 | 23 | 5 | 1 | 1 site (functions and their inverses) |
| 1.5 Exponential and Logarithmic Functions | m53481 | 9 | 9 (2 photos) | 0 | 3 | 2 definitions, 4 rules, 1 proof | 9 | 229–309 | 41 | 7 | 0 | 3 (population growth, exponential graphs, a log scale) |
| Review (in 1.5) | m53481 | — | — | — | — | — | — | 310–336 | 13 | — | — | — |

309 section exercises, 151 keyed; 27 review exercises, 13 keyed; 35 checkpoints; 41 worked examples; 50 glossary entries. The key answers the odd numbers only. Exercise images: 13 in 1.1, 10 in 1.2, 6 in 1.3, 13 in 1.4, 13 in 1.5 (graphs to read, and the solution sketches of "sketch the graph" items).

## Figure, table and example numbers

Checked against openstax.org for 1.1 (Figures 1.2–1.14, Tables 1.1, 1.4, 1.5), 1.2 (Figures 1.15–1.27, Table 1.6, Example 1.15) and 1.5 (Figures 1.43–1.51, Tables 1.10–1.12); the rest follow from the same count and agree. A bare `<media>` is unnumbered; a table with class `unnumbered` takes no number.

| Section | Figures | Tables | Examples |
|---|---|---|---|
| intro | 1.1 San Andreas Fault (splash photo) | — | — |
| 1.1 | 1.2 input/output device, 1.3 domain-to-range map, 1.4 graph on {1,2,3}, 1.5 f(x) = 3 − x on {1,2,3}, 1.6 temperature points, 1.7 connected, 1.8 vertical line test, 1.9 f(x) = −4x + 2, 1.10 √(x+3) + 1, 1.11 3x and −x³, 1.12 composite map, 1.13 symmetry, 1.14 \|x\| | 1.1 temperature, 1.2 (Ex. 1.4), 1.3 height s(t), 1.4 f and 1.5 g (Ex. 1.8) | 1.1–1.11 |
| 1.2 | 1.15 lines, 1.16 slope, 1.17 line through two points (Ex. 1.12), 1.18 power functions, 1.19 end behavior, 1.20 units sold, 1.21 root functions, 1.22 piecewise (Ex. 1.19), the five transformation pairs 1.23–1.27, Ex. 1.21’s two sequences 1.28–1.29 | 1.6 units sold, 1.7 transformations | 1.12–1.21 |
| 1.3 | 1.30 radian arc, 1.31 standard position, 1.32 circle of radius r, 1.33 inscribed triangle, 1.34 six periodic graphs, 1.35 general cosine, 1.36 daylight | 1.8 common angles, 1.9 sin and cos at major angles | 1.22–1.27 |
| 1.4 | 1.37 f and f⁻¹ map, 1.38 horizontal line test, 1.39 reflection in y = x, 1.40 restricted x², 1.41 inverse trig graphs, 1.42 sin x + cos x (Student Project) | — | 1.28–1.32 |
| 1.5 | 1.43 2ˣ against x², 1.44 bˣ, 1.45 eˣ and its tangent at 0, 1.46 eˣ and ln x, 1.47 log_b for b = 2, e, 10, 1.48 the fault (Ex. 1.39, photo), 1.49 spider web (photo), 1.50 unit hyperbola, 1.51 hyperbolic graphs | 1.10 x² and 2ˣ, 1.11 2ˣ approaching √2, 1.12 (1 + 1/m)ᵐ | 1.33–1.41 |

## What is new

- The first chapter of the book: no prerequisite edges leave it. 75 concepts, every glossary word among their `terms`.
- Graphs throughout: almost every numbered figure is a sketch of a function the text names, so per `RULES.md` and config 18 each is drawn live from the book's function. This chapter is what the figure-library parts of config 19 are for: `F.axes`, `F.plot` (pieces with `[)` ends, holes, poles), `F.shade`, `F.tangent`, `F.secant`, `F.drag` (a point held by sliders, dragged along a graph or a level).
- The book's first function tokens (the span marking for function definitions in prose that `RULES.md` will name): every "consider the function f(x) = …" of the examples, checkpoints and figures.

## Sketches to replace and photographs

Every numbered graph is replaced by a live figure (sketch → figure, or several folded where the book draws one scene repeatedly: 1.6 + 1.7, 1.23–1.27, 1.28 + 1.29 are the candidates). Diagrams that are not graphs (1.2 input/output device, 1.3 and 1.12 arrow maps, 1.37 f and f⁻¹ map) are judged per plan. Unnumbered images inside examples are mostly solution sketches; each section plan says whether its example figure earns a live graph.

Photographs: Figure 1.1 (the fault, opener) kept; Figure 1.48 (the same fault, the Richter example points at it) kept; Figure 1.49 (dew on a spider web, the text says the strand's shape is a hyperbolic function) kept. Nothing is dropped as decoration.

## Notes and media

Five media notes are dropped and named in `notes` (config 14): 1.1 graphs of functions applet, 1.4 functions and their inverses, 1.5 population growth, exponential graphs, a base-10 log scale. Each seeds a Sim candidate in its plan. The Student Project of 1.4 (The Maximum Value of a Function, Figure 1.42) is a note with its seven questions (config 15). The Problem-Solving Strategy of 1.4 is a note and the `skill` finding-an-inverse-function. The proof of the change-of-base formulas stays under its rule in 1.5.

## Exercises that belong to another section

The Chapter Review Exercises (310–336) are printed at the end of 1.5 and placed with the section that introduces what each tests (config 11), `source_section` 1.5:

- 1.1: 311 (f ∘ g = g ∘ f, keyed). 316 (h ∘ f, unkeyed computational) is left out.
- 1.2: 318, 319 (degree, intercept, zeros); 314 (domain and range of h = 1/(x + 4), unkeyed) left out.
- 1.3: 320–323 (identities, equations), 330 (the circular track, unkeyed), 333, 334 (Ocean City).
- 1.4: 310, 312, 313 (one-to-one, the line tests), 326–329, 331, 332 (the T-shirt cost and its inverse).
- 1.5: 315, 317 (ln), 324, 325, 335, 336 (carbon dating).

Unkeyed true/false and "describe the meaning" items (310, 312, 332, 334, 336) are judged per plan under config 12: proof and explanation kept with an AI-marked approach, computation left out.

## Rule 23: what would make this chapter stunning

A reader who has met functions only as formulas should see one function in all its views at once: the formula, a table, the graph and the arrow map, and the point (x, f(x)) moving through all four when x is dragged. Then every operation of the chapter becomes a motion of the graph: a vertical line sweeping across a curve (and across a sideways parabola that fails), f(x) and f(−x) as mirror points, g ∘ f as a pipeline an input runs through, a·f(b(x − c)) + d as four sliders morphing a parabola step by step in the book's order, the unit circle unrolling into the sine curve, the reflection of a graph in y = x giving its inverse, and an exponential base slider passing through e where the tangent at 0 has slope 1. Nothing in the chapter needs 3D (config 23); the stunning part is that every graph is alive and draggable, and that its numbers are the book's.
