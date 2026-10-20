# Plan: 3.2 Matrices and linear systems (`sec:matrix`)

Source: `source.md`. Status: built 2026-10-19 straight through (config 2), task sec-3.2 (claude-opus-5-5, high); `ost check diffyqs --section 3.2` clean, built and checked in the browser in light and dark. Template: `ch00/0.2` (conventions), `ch01/1.2` (theorem note), `ch02/2.4` (derivation).

One example (3.2.1), Theorem 3.2.1, one boxed formula (cofactor expansion), no book figures and no images (nothing to copy into `media/ch03/`), no footnotes, one inline exercise (3.2.1), fourteen end exercises (4 keyed). Section notes dropped (`notes`), and with them their pointer to Appendix A, which lives only in the note. The book's parenthetical "(exercise: why?)" in `p#inverse-compute` is unnumbered and stays prose, as 0.2 keeps its "(exercise)".

## Sub-concepts (the book's headers)

`matrices` **Matrices and vectors**; `multiplication` **Matrix multiplication**; `determinant-sec` **The determinant** (the Sim, the boxed cofactor expansion, Theorem 3.2.1 as `div.note#thm-3-2-1`, the derivation); `solving` **Solving linear systems** (Exercise 3.2.1 inline, Example 3.2.1); `inverse` **Computing the inverse**.

## Concepts (merged by the prep; 30, one `introduces` row each)

`matrix` (`p#matrix-def`); `matrix-entry`, `square-matrix` (`p#entries`); `vector` (terms vector, column vector), `row-vector` (`p#vectors`); `scalar`, `scalar-multiplication-of-a-matrix` (`p#scalar`); `matrix-addition` (`p#addition`); `rules-of-matrix-algebra` (`p#addition-rules`); `transpose` (`p#transpose`); `dot-product` (`p#dot-product`); `matrix-product` (`p#matrix-product`); `identity-matrix` (`p#identity`); `commuting-matrices` (`ol#warnings`, the plan had missed it); `matrix-inverse` (`p#inverse-def`); `invertible-matrix` (`p#invertible`); `determinant` (`p#determinant-def`); `determinant-as-area-scale` (`p#area-scale`); `cofactor-expansion` (`p#cofactors`, where the book italicises the terms); `determinant-of-a-product` (`p#det-product`); `invertibility-and-the-determinant` (`thm-3-2-1`); `inverse-of-a-2x2-matrix` (`p#inverse-2x2`); `augmented-matrix` (`p#augmented`); `elementary-row-operations` (`div#row-operations`); `row-reduction` (`p#row-reduce`); `inconsistent-system` (`p#inconsistent`); `leading-entry` (`div#leading-entry`); `reduced-row-echelon-form`, `free-variable` (`p#rref`); `computing-a-matrix-inverse` (`p#inverse-compute`). Uses rows on every other span, 197 coverage rows in all. The first sentence's "linear systems of ODEs" marks 3.1's `linear-system-of-odes`. Calculus link: "area of a parallelogram" → `/calculus/ch12/12.4/#12.4-sim-parallelogram-area`.

## Colour and referents

A, B, C, I, A⁻¹, Aᵀ, A_ij wear `matrix` (`\kA`, `\kB`, `\kC`, `\kI`, `\kAinv`, `\kAT`, `\kAij`); x⃗, b⃗, e⃗_k, x⃗_k wear `vector` (`\kvecx`, `\kvecb`, `\kvece`, `\kvecxk`); a_ij and the unknowns x₁, x₂, x₃ through their macros (`\kaij`, `\kxone`…), which the 3.2 ink rows set in ink; the particular submatrices A₁₁, A₁₂… and entries a₁₁… plain, as the forms' ktex writes them; scalars c, d, α, h, t and the determinant's value in ink. No referents.

## Figures

- `sim-determinant-area` · Sim · `determinant`, `determinant-as-area-scale`, `invertibility-and-the-determinant` · value add: variation: the matrix [a b; c d] with its entries on sliders maps the plane, its grid's image drawn in faint `matrix` lines so every cell visibly becomes the same parallelogram, and the unit square (dashed, ink) goes to the parallelogram on the columns (a, c) and (b, d) in `region`, filled while det(A) > 0, hatched while det(A) < 0, a thick segment (or the origin) at det(A) = 0; a short turn at the origin runs from the first column to the second, counterclockwise on the square and the other way once the orientation flips; the four corners' images are listed beside the plane (the book's (0,0), (1,−1), (1,1), (2,0) at the defaults); the parallelogram grows out of the square as the figure arrives · arrows: symbolic (the columns of A as `vector` arrows from the origin) · still: a map has no clock · sliders a, b, c, d (untyped, −2 to 2, step 0.1; defaults the book's [1 1; −1 1]; each with a dashed circle where ad − bc = 0 given the other three, shown where that value lies on the 0.1 steps so the readout's products stay exact) · headline "det(A) = 2: the unit square goes to a square of area 2, its orientation kept." (rectangle or parallelogram as the columns make it; "the axes flipped" when negative; "flattened onto a line, and A is not invertible" at 0) · readout det(A) = det[1 1; −1 1] = (1)(1) − (1)(−1) = 2 · plane alone, x −5 to 5, y −4 to 4 at one scale (corners reach ±4 at the slider extremes), the corner table beside it · 2D (book `RULES.md`: linear-algebra arrows are 2D). Hover names on the two columns, the parallelogram (its area) and the unit square; no in-plane labels, since at det = 0 every corner lands on one line.
- `draws`: matrix, vector, region. `region` is not in the chapter `COLOR.md` list (wanted below).

## Extra simulations (rule 15)

Built: the one above (the brief's pick). Rejected: row reduction stepped (the text prints every step; a stepper replays it); cofactor expansion animated (notation, no variation); det(AB) = det(A)det(B) as two maps in sequence (two matrices need eight entries or a few preset pairs, and the text's "doubles … triples … 6 = 3 · 2" already says it; Appendix A's mapping figure may take it).

## Derivations (rule 29)

- det(A)det(B) = det(AB) = det(I) = 1, then det(A⁻¹) = 1/det(A) · a printed display chain of three moves plus the prose line after Theorem 3.2.1 · built as `drv-determinant-of-inverse` ("Derivation · the determinant of the inverse"), two nodes, after `p#det-of-inverse`; the display stays in the text as the anchor of the form `eq-determinant-of-inverses` (the passage is prose-first). Node 2 starts from node 1's result exactly.
- AB = AC ⇒ B = C by A⁻¹ · prose, three moves, score 1 · not built.
- x⃗ = A⁻¹Ax⃗ = A⁻¹b⃗ · one move · not built.
- The 3 × 3 determinant and the row reduction · worked examples of the section's own method · not built.

## Exercises

- Inline: 3.2.1 (`e1`, after `p#worked-solution`), AI-marked check: the three left-hand sides come to 2, 5, 10.
- End, AI-marked, each computed in SymPy (`verify.py` in the task scratch): 3.2.2 x⃗ = (−4, 9/2) (multi); 3.2.3 det 6; 3.2.4 det 4 (expand along column 2); 3.2.5 inverse [−1/2 3/2 −1/2; 0 0 1; 1/2 −1/2 −1/2] (open); 3.2.6 h = 9 only (number); 3.2.7 h = −1, 0, 1 (open); 3.2.8 x⃗ = (2, 1, 5/2) (multi); 3.2.9 infinitely many, x₃ free, x₁ = −2 + 4x₃, x₂ = 4 − 9x₃ (open); 3.2.10 no solution, inconsistent (open); 3.2.11 A = [1 0; 0 0], B = I, C = [1 0; 0 2] (open).
- Keyed: 3.2.101 −15, 3.2.102 −2, 3.2.103 (15, −5) (multi), 3.2.104 the diagonal inverses (open, parts a, b), the book's `\exsol` with `generated_by: source`, each confirmed in SymPy.
- No `exercises_lead`: the book prints none above this set.

## Wanted at chapter level

- Anchors, variables rows: A → `3.2-matrix-def`; B, C → `3.2-addition-rules`; a_ij → `3.2-entries`; A_T → `3.2-transpose`; I → `3.2-identity`; A_inv → `3.2-invertible`; A_ij → `3.2-cofactor-def`; x_vec → `3.2-vectors`; b_vec → `3.2-by-inverse`; e_vec, x_k_vec → `3.2-inverse-compute`; x_1, x_2, x_3 → `3.2-linear-systems`.
- Anchors, forms: eq-matrix-array → `3.2-eq-matrix-array`; eq-scalar-multiplication-of-a-matrix → `3.2-eq-scalar-multiplication-of-a-matrix`; eq-matrix-addition → `3.2-eq-matrix-addition`; eq-matrix-addition-rules → `3.2-eq-matrix-addition-rules`; eq-transpose → `3.2-eq-transpose`; eq-determinant-of-transpose → `3.2-cofactors`; eq-dot-product → `3.2-eq-dot-product`; eq-matrix-product-entry → `3.2-eq-matrix-product-entry`; eq-identity-matrix → `3.2-eq-identity-matrix`; eq-matrix-multiplication-rules, eq-identity-product → `3.2-eq-matrix-multiplication-rules`; eq-matrices-do-not-commute → `3.2-warnings`; eq-matrix-inverse → `3.2-eq-matrix-inverse`; eq-inverse-of-inverse → `3.2-inverse-unique`; eq-determinant-2x2 → `3.2-eq-determinant-2x2`; eq-parallelogram-area → `3.2-eq-parallelogram-area`; eq-cofactor-expansion → `3.2-eq-cofactor-expansion`; eq-cofactor-expansion-first-row → `3.2-eq-cofactor-expansion-first-row`; eq-determinant-of-a-product → `3.2-eq-determinant-of-a-product`; eq-invertible-iff-det → `3.2-thm-3-2-1`; eq-determinant-of-inverses → `3.2-eq-determinant-of-inverses`; eq-determinant-of-inverse → `3.2-det-of-inverse`; eq-inverse-2x2 → `3.2-eq-inverse-2x2`; eq-augmented-matrix → `3.2-eq-augmented-matrix`; eq-linear-system-matrix-form → `3.2-eq-linear-system-matrix-form`; eq-solution-by-inverse → `3.2-eq-solution-by-inverse`; eq-inverse-by-row-reduction, eq-inverse-columns → `3.2-inverse-compute`.
- Chapter `COLOR.md`, Categories: add `region`: the parallelogram, image of the unit square, in 3.2's `sim-determinant-area` (a book type, no new hue).
- The form `eq-matrix-array` is written m × n with dots while the book's display (its anchor) is the 3 × 5 matrix a₁₁…a₃₅; harmless, named in case the chapter pass wants the form as printed.
- No concept or edge fixes; no glossary words beyond the merged `terms`.

- Chapter pass 2026-10-19 (pass-ch03): applied: every anchor above (28 forms, 15 variables rows); COLOR.md `region` line added under Categories; `eq-matrix-array` kept in its m × n form (it states the concept, the anchor shows the book's instance).
