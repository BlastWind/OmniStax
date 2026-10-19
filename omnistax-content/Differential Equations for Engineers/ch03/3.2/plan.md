# Plan: 3.2 Matrices and linear systems (`sec:matrix`)

Source: `source.md`. Status: built 2026-10-19 straight through (config 2). Template: Calculus `ch08/8.1`.

One example (3.2.1), Theorem 3.2.1, one boxed formula (cofactor expansion), no figures, one inline exercise (3.2.1), fourteen end exercises (4 keyed). Section notes dropped (`notes`), and with them their pointer to Appendix A, which lives only in the note.

## Sub-concepts (the book's headers)

`matrices` **Matrices and vectors**; `multiplication` **Matrix multiplication**; `determinant-sec` **The determinant** (Theorem 3.2.1, the boxed cofactor expansion); `solving` **Solving linear systems** (Example 3.2.1, Exercise 3.2.1 inline); `inverse` **Computing the inverse**.

## Concepts

Introduced: `matrix` (matrix), `matrix-entry`, `square-matrix`, `vector` (Calculus's id; terms vector, column vector), `row-vector`, `scalar`, `scalar-multiplication-of-a-matrix`, `matrix-addition`, `transpose` (matrix), `dot-product` (Calculus's id; terms dot product, inner product), `matrix-product` (matrix), `identity-matrix` (matrix), `rules-of-matrix-algebra` (result), `matrix-inverse` (matrix), `invertible-matrix` (terms invertible, singular), `determinant` (Calculus's id), `determinant-as-area-scale` (result: |det A| is the area of the image of the unit square), `cofactor-expansion` (result, boxed; terms cofactors, cofactor expansion), `determinant-of-a-product` (result), `invertibility-and-the-determinant` (result, Theorem 3.2.1), `inverse-of-a-2x2-matrix` (result), `augmented-matrix`, `elementary-row-operations`, `inconsistent-system`, `leading-entry`, `reduced-row-echelon-form`, `free-variable`, `row-reduction` (skill), `computing-a-matrix-inverse` (skill).

## Colour and referents

A, B, C, I, A⁻¹, Aᵀ wear `matrix` (`\kA`, `\kB`, `\kC`, `\kI`); x⃗, b⃗, e⃗_k wear `vector` (`\kvecx`, `\kvecb`, `\kvece`); entries a_ij, scalars c, d, α, the determinant's value and the unknown numbers x₁, x₂, x₃ in ink (x₁… here are unknown numbers of a linear system, not functions). No referents.

## Figures

- `sim-determinant-area` · Sim · `determinant`, `determinant-as-area-scale`, `invertibility-and-the-determinant` · value add: variation: the matrix [a b; c d] with its entries on sliders maps the unit square to the parallelogram on its columns (a, c) and (b, d); its area |ad − bc| is shaded, the corners keep their order around the square so a flip of orientation shows as the corners running the other way and the area shaded hatched, and at det = 0 the parallelogram collapses onto a line (A not invertible) · arrows symbolic (the column vectors from the origin, the images of (1, 0) and (0, 1)) · still: a map has no clock · sliders a, b, c, d (−2 to 2, step 0.1; defaults the book's [1 1; −1 1]; each with a dashed circle where ad − bc = 0 from the other three) · headline "det(A) = 2: the unit square goes to a square of area 2" · graph alone · 2D.

## Extra simulations (rule 15)

Row reduction stepped (rejected: the text prints every step; a stepper replays it). Cofactor expansion animated (rejected: notation, no variation).

## Derivations (rule 29)

- det(A)det(B) = det(AB) = det(I) = 1, then det(A⁻¹) = 1/det(A) · printed block (a chain of three moves) · built as `drv-determinant-of-inverse`, after the paragraph that completes it (the prose is kept: the chain is prose-first).
- AB = AC ⇒ B = C by A⁻¹ · prose, three moves, score 1 · not built.
- x⃗ = A⁻¹Ax⃗ = A⁻¹b⃗ · one move · not built.
- The 3 × 3 determinant and the row reduction · worked examples · not built.

## Exercises

- Inline: 3.2.1 (check x₁ = −4, x₂ = 3, x₃ = 2) after `solving`'s worked reduction, AI-marked check.
- End: 3.2.2–3.2.11 AI-marked, each computed in SymPy; 3.2.101–3.2.104 the book's answers.

## Wanted at chapter level

Anchors: A → `3.2-matrices`, x_vec → `3.2-matrices`, b_vec → `3.2-solving`; forms of `cofactor-expansion` → `3.2-cofactor-box`, `inverse-of-a-2x2-matrix` → `3.2-determinant-sec`.
