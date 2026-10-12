# Exploration: Calculus, Chapter 8 Introduction to Differential Equations

Written 2026-10-12, before the chapter's sections were built. The six modules were converted with `python3 tools/convert.py 8` and read; the book's organization and apparatus are as `RULES.md` records them, and nothing in this chapter departs from that account. `config.md` beside this file is the agreed list. The chapter is Volume 2's Chapter 4; its numbers shift to 8.

## Why this chapter

The chapter turns the antiderivative of 4.10 into the study of differential equations. 8.1 defines a differential equation, its solutions, its order, the general and particular solutions and the initial-value problem, and solves the first applied one, a baseball under gravity. 8.2 draws direction fields, reads equilibrium solutions and their stability from them, and approximates solutions by Euler's Method. 8.3 solves separable equations by separation of variables, with brine tanks and Newton's law of cooling. 8.4 builds the logistic equation from a carrying capacity, solves it, finds its inflection point and adds a threshold population in a Student Project. 8.5 solves first-order linear equations with an integrating factor, with a ball under air resistance and an electric circuit. The last module carries the Chapter Review Exercises.

## Modules

Ex. = worked examples, Fig. = numbered figures, Img. = unnumbered images (in checkpoints and exercises), CP = checkpoints, Exer. = section exercises (chapter-wide numbers), Keyed = those carrying the book's solution, Gl. = glossary entries, KE = Key Equations rows.

| Section | Module | Ex. | Fig. | Img. | Tables | Notes | CP | Exer. | Keyed | Gl. | KE | Media |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m53696 | 0 | 1 photo | 0 | 0 | — | 0 | — | — | 0 | 0 | — |
| 8.1 Basics of Differential Equations | m53697 | 7 | 4 | 0 | 1 | 2 definitions | 6 | 1–65 | 28 | 8 | 0 | 1 (differential equations) |
| 8.2 Direction Fields and Numerical Methods | m53701 | 2 | 9 | 23 | 2 (+1 unnumbered) | 3 definitions, 1 theorem (Euler's Method) | 3 | 66–118 | 26 | 8 | 1 | 3 (slope fields, Euler's method applet, a practical application) |
| 8.3 Separable Equations | m53704 | 4 | 3 | 3 | 0 | 1 definition, 1 strategy | 4 | 119–167 | 25 | 3 | 3 | — |
| 8.4 The Logistic Equation | m53710 | 1 | 6 (1 photo) | 8 | 1 unnumbered (cranes) | 2 definitions, 1 theorem, 1 Student Project | 1 | 168–207 | 20 | 6 | 3 | 1 (logistic equation) |
| 8.5 First-Order Linear Equations | m53713 | 5 | 3 | 1 | 0 | 1 definition, 1 strategy | 5 | 208–261 | 27 | 3 | 2 | — |
| Review (in 8.5) | m53713 | — | — | 1 | — | — | — | 262–290 | 14 | — | — | — |

261 section exercises, 126 keyed; 29 review exercises, 14 keyed; 19 checkpoints; 19 worked examples; 28 glossary entries. The key answers the odd numbers only. 8.1 and 8.3 reuse one CNXML id for two different exercises (`fs-id1170571105977`, 8.1's exercise 27 and 8.3's exercise 128); each section keeps its own.

## Figure, table and example numbers

Counted in book order, the opener as Figure 8.1; a bare `<media>` and a table with class `unnumbered` take no number. Checkpoints run 8.1–19 in the order of the examples they follow (8.1 has seven examples and six checkpoints: none follows Example 8.7).

| Section | Figures | Tables | Examples |
|---|---|---|---|
| intro | 8.1 the white-tailed deer (splash photo) | — | — |
| 8.1 | 8.2 the family y = x² + C, C = −4 to 4 by 2; 8.3 the family y = 2e^(−2t) + Ce^t with C = 1 labelled; 8.4 a baseball with gravity's arrow; 8.5 the two directions of v(t) | 8.1 examples of differential equations and their solutions | 8.1–8.7 |
| 8.2 | 8.6 the field of T′ = −0.4(T − 72) with two solutions; 8.7 the field of y′ = 3x + 2y − 4; 8.8 the same with the solution through (0, 1); 8.9 the field of y′ = (x − 3)(y² − 4) with two solutions either side of y = −2; 8.10 the same with y(0) = 0.5; 8.11 the same with y(0) = −3; 8.12 the field of y′ = (y − 3)²(y² + y − 2) (Example 8.9); 8.13 Euler's Method for y′ = 2x − 3, y(0) = 3, h = 0.5; 8.14 the same with h = 0.5 and h = 0.25 | 8.2 Euler's Method for y′ = x² − y², y(−1) = 2; 8.3 Example 8.9's table for y′ = 3x² − y² + 1 | 8.8, 8.9 |
| 8.3 | 8.15 the solution of y′ = (2x + 3)(y² − 4), y(0) = −1 (Example 8.11); 8.16 the brine tank (Example 8.12); 8.17 the pizza (Example 8.13) | — | 8.10–8.13 |
| 8.4 | 8.18 P(t) = 100e^(0.03t); 8.19 the phase line of the logistic equation; 8.20 the deer (photo, Example 8.14); 8.21 the logistic curve from 900,000 deer; 8.22 from 1,200,000 deer; 8.23 logistic against exponential growth | — | 8.14 |
| 8.5 | 8.24 the forces on a moving baseball; 8.25 the circuit; 8.26 the current of Example 8.18 (the book prints no caption) | — | 8.15–8.19 |

## What is new

- Types: no new one. `function` is the solution y, the unknown v(t), T(t), u(t), P(t), μ(x), p(x), q(x) and every solution curve; `derivative` is y′, dy/dx, the right-hand side read as a slope, every short segment of a direction field (the brief's call: a slope wears `derivative`), and the rates T′, P′, dP/dt; `line` is the linear approximation L(x) and the segments of an Euler polyline, which are pieces of linear approximations; `point` is an initial value (x₀, y₀) and the logistic curve's inflection point; `limit` is the carrying capacity K, the level the population approaches. Equilibrium solutions are functions (constant ones), drawn as levels across the field.
- Prerequisites reach back to 4.10 (differential equation, initial-value problem, antiderivative and indefinite integral, which this chapter reinforces), 4.2 (linear approximation, the step of Euler's Method), 3.2–3.4 (derivative, higher-order derivatives, velocity and acceleration, product rule), 4.5 and 4.6 (inflection point, limit at infinity), 6.8 (exponential growth, Newton's law of cooling, which 8.3 solves again with its own letters) and 7.4 (partial fractions, used by 8.3 and 8.4). About 33 new concepts.
- The figure library lacks a direction field. Every section of the chapter after 8.1 draws one, so the chapter adds one reusable part, `F.slopefield` (config 19): the field's segments on a grid, solution curves traced both ways from a point by a fourth-order Runge–Kutta step that stops where the solution leaves the box or blows up, a draggable initial point, and Euler's polyline for a step size h. Its pure geometry lives in `src/lib/fig/slope.ts` with a test; the drawing block sits in `figlib.ts` under its own heading.

## Sketches to replace and photographs

Every numbered graph is drawn live from the book's equation (config 18). Folds the plans take: 8.7 + 8.8 (one field of y′ = 3x + 2y − 4, with its solution through a draggable point that opens on (0, 1)); 8.9 + 8.10 + 8.11 (one field of y′ = (x − 3)(y² − 4), its point opening on the book's pair near y = −2, and a choice of the book's three starts); 8.13 + 8.14 (Euler's Method for y′ = 2x − 3 with the step size h on a slider, detents at 0.5 and 0.25); 8.21 + 8.22 (the deer's logistic curve from either start). Moving figures are argued per plan line: a solution traced by Euler's Method has a clock in it (step after step), and the brine tank and the cooling pizza have a time in them. Faithful copies: exercise images (the direction fields the exercises read, their keyed answer images) stay as the book prints them.

Photographs: 8.1 (opener) kept; 8.20 (the deer inside Example 8.14, the chapter opener's own example) kept. Figures 8.4, 8.5 and 8.24 (a baseball and its arrows) are sketches; 8.4 and 8.5 fold into one still figure of the ball's two directions under gravity (8.4 + 8.5), and 8.24 is a still copy of the forces with air resistance (the plan argues whether a moving ball adds a view).

## Notes and media

Five media notes are dropped and named in `notes` (config 14): 8.1's differential-equations website, 8.2's slope-field website, Euler's-method applet and practical application, and 8.4's logistic-equation website. The slope-field and Euler applets seed the 8.2 Sims; the logistic site seeds a logistic-field Sim in 8.4. 8.4's Student Project (Logistic Equation with a Threshold Population) is a note with its questions (config 15). Two Problem-Solving Strategies are notes and skills: Separation of Variables (8.3) and Solving a First-order Linear Differential Equation (8.5). Euler's Method is printed as a theorem note (a `result`).

## Exercises that belong to another section

The Chapter Review Exercises (262–290) are printed at the end of 8.5 and placed with the section that introduces what each tests (config 11), `source_section` 8.5:

- 8.1: 267 and 273 (a general solution and an initial-value problem by antidifferentiation, keyed), 283 (a ball thrown up under gravity, keyed 40/49 s); left out, unkeyed and computational: 266, 272, 282 (a car's velocity), 284 (a dropped ball).
- 8.2: 265 (true or false: behaviour from direction fields or Euler's method, keyed T), 281 (Euler's Method with five steps, keyed); left out: 280.
- 8.3: 263 (true or false: y′ = x − y is separable, keyed F), 269, 271 and 275 (separable equations and an initial-value problem, keyed), 287 (the brine tank, keyed); left out: 268, 274, 286 (a drug dose), 288 (tea cooling).
- 8.4: 289 (the Nevada logistic model, keyed); left out: 290 (its Gompertz repeat).
- 8.5: 262 (true or false: y′ = 3x²y − cos(x)y″ is linear, unkeyed, kept with an approach), 264 (true or false: every first-order equation is solvable explicitly by separation or integrating factors, unkeyed, kept with an approach; it tests both methods, so it lands here), 277 (a linear initial-value problem, keyed), 279 (the field and solution of y′ = 1/x + ln x − y, keyed with its image), 285 (a ball with drag, keyed); left out: 270, 276, 278.

Unkeyed even section exercises are judged per plan under config 12: computational ones and sketches are left out; verifications, proofs, "show that" and true-or-false justifications are kept with AI-marked approaches. 8.1's exercises 8–17 (verify that a function solves an equation) are all unkeyed, odd and even, and are kept with AI-marked verifications.

## Rule 23: what would make this chapter stunning

A differential equation is a field of tiny slopes, and its solutions are the curves that thread them. The reader should see that at once: a direction field drawn by the page, a point they drag anywhere in it, and the solution through that point flowing out both ways, bending to every segment it passes. Drag the point across an equilibrium and watch the solution flip from being drawn in to being pushed away; stability becomes something seen, not computed. Euler's Method then walks the same field by hand: a step size slider sets how far each straight step runs before it looks at the field again, and the reader watches the polyline peel away from the true curve when h is large and hug it when h is small. The family y = x² + C stacks its parabolas, and the initial value is a point that picks one out. The logistic population climbs its S toward the carrying capacity, its inflection point marked at K/2, with the exponential curve it starts beside running away. The brine tank fills toward 50 kg, the pizza cools toward the kitchen, and each is the same picture: a solution approaching an equilibrium. The integrating factor of 8.5 is algebra, and the ball with air resistance falls to its terminal velocity while the reader watches the drag term grow. Nothing needs 3D (config 23).

## Wanted from figlib

`F.slopefield` (above), added by this chapter's agent under the figlib lock and flagged in the report.
