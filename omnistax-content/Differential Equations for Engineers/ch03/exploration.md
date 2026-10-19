# Chapter 3 exploration: Systems of ODEs

Converted 2026-10-19 with `python3 tools/convert.py 3` from `ch-systems.tex` (lines 1–7515). Nine sections, no chapter introduction or summary (the book prints none).

## Modules

| Section | Module | Examples | Theorems | Inline ex. | End ex. | Keyed (101+) | Figures | Tables | Numbered eqs |
|---|---|---|---|---|---|---|---|---|---|
| 3.1 Introduction to systems of ODEs | `sec:introtosys` | 6 | 1 | 1 | 12 | 6 | 3.1–3.3 + an unnumbered sketch | — | (3.1) |
| 3.2 Matrices and linear systems | `sec:matrix` | 1 | 1 | 1 | 14 | 4 | — | — | — |
| 3.3 Linear systems of ODEs | `linsystems:section` | 2 | 2 | 0 | 10 | 4 | — | — | (3.2) |
| 3.4 Eigenvalue method | `eigenmethod:section` | 4 | 2 | 4 | 11 | 4 | — | — | — |
| 3.5 Two-dimensional systems and their vector fields | `sec:twodimaut` | 0 | 0 | 0 | 8 | 3 | 3.4–3.11 | 3.1 | (3.3) |
| 3.6 Second-order systems and applications | `sol:section` | 3 | 1 | 2 | 7 | 3 | 3.12–3.17 | — | (3.4) |
| 3.7 Repeated eigenvalues | `sec:multeigen` | 2 | 1 | 1 | 11 | 4 | — | — | — |
| 3.8 Matrix exponentials | `sec:matexp` | 1 | 2 | 1 | 16 | 5 | — | — | (3.5) |
| 3.9 Nonhomogeneous systems | `nonhomogsys:section` | 5 | 0 | 3 | 9 | 4 | — | — | (3.6)–(3.11) |
| **all** | | **24** | **10** | **13** | **98** | **37** | **17** | **1** | **11** |

Figure and table numbers in book order: Figure 3.1 (closed brine tanks), the unnumbered two-cart sketch of Example 3.1.3, Figures 3.2–3.3 (the direction field of x′ = 2y − x, y′ = x, then with a trajectory), 3.4–3.11 (the six cases of a 2D linear system), Table 3.1 (their summary), 3.12 (three masses between walls), 3.13 (two masses and a wall), 3.14 (the two modes), 3.15 (their superposition), 3.16 (the rail-car crash), 3.17 (the second car's position). An unnumbered picture sits in the answer of Exercise 3.5.103 (`0100vectorfield`).

## What is new

The chapter turns single equations into systems and builds the linear-algebra tools the rest of the book leans on: matrices, determinants, row reduction and inverses (3.2), vector- and matrix-valued functions, superposition and the fundamental matrix (3.3), eigenvalues and eigenvectors (3.4), the six phase portraits of a 2D linear system (3.5), normal modes and forced oscillations of mass–spring systems (3.6), repeated and defective eigenvalues with generalized eigenvectors (3.7), the matrix exponential (3.8), and four methods for nonhomogeneous systems (3.9). Appendix A treats the linear algebra at more length; 3.2 says so, and the prose links it where the book does.

## Sketches, plots and photographs

No photographs. Every figure is the book's sketch figure under root rule 14:

- **Sketches of apparatus**: the two tanks (3.1), the two carts (unnumbered, 3.1), three carts between walls (3.12), two carts and a wall (3.13), the rail cars (3.16). Each becomes the scene its section's system drives.
- **Plots**: the direction field and trajectory (3.2, 3.3), the eight portrait plots of 3.5, the mode and superposition plots (3.14, 3.15), the rail car's position (3.17). Each is drawn live from the book's matrix and initial conditions.

Folds (root rule 14, one scene drawn several times): 3.2 + 3.3; 3.4 + 3.5 + … + 3.11 (one portrait under the six cases); 3.13 + 3.14 + 3.15; 3.16 + 3.17.

## Exercises that belong elsewhere

None move. Inline exercises: 3.1.1, 3.2.1, 3.4.1–3.4.4, 3.6.1–3.6.2, 3.7.1, 3.8.1, 3.9.1–3.9.3. Exercise 3.8.7 is cited by 3.9's integrating-factor method; Exercise 3.8.6 by 3.8.7.

## Rule 23: what would make this chapter stunning

The chapter's one picture is a matrix acting on the plane. Each section can show it doing something different: stretching a square by its determinant (3.2), sending most vectors off their line and a few special ones along it (3.4), driving the flow of the plane whose type the eigenvalues decide (3.5), carrying a grid and the unit square forward in time so that the square's corners are the columns of e^{tA} (3.8), and decoupling a forced system into motions along its eigenvectors (3.9). The physical models move: salt mixing between two tanks until the amounts equalise, carts swinging in their normal modes and in their sum, the rail car that hits the wall at speed unless Bob sits at a "safe" distance, two resonances where a forcing frequency meets a natural one. The 3Blue1Brown survivor for this chapter is item 1 of the book's survey (3.8, the flow of the unit square under x⃗′ = Ax⃗).
