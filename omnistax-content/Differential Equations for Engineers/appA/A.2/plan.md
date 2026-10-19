# Plan: A.2 Matrix algebra (`matalg:section`)

Source: `source.md`. Status: planned 2026-10-19 by the prep (config 2: the plan decides; built straight through after the merge of Chapter A). Template: `ch00/0.2`; Chapter 3's `3.2` once built, which teaches the same operations in one page.

One example (A.2.1), no theorems, equation (A.1), no figures, no inline exercises, ten end exercises (5 keyed), two footnotes (the physicists' order in y⃗ᵀx⃗; "not learned enough to appreciate" symmetric matrices). Section notes ("2–3 lectures") dropped.

## Sub-concepts (the book's headers)

`one-by-one` **One-by-one matrices**; `addition` **Matrix addition and scalar multiplication** (the zero matrix, the five rules); `multiplication` **Matrix multiplication** (sizes, the dot product, the product, (A.1), the columns of AB; `sim-composition` after the columns paragraph); `rules` **Some rules of matrix algebra** (the identity, the five rules, Example A.2.1, noncommutativity); `inverse` **Inverse** (the two failing rules, A⁻¹, invertible and singular, cancellation, the 2 × 2 formula, ad − bc); `diagonal` **Diagonal matrices**; `transpose` **Transpose** (symmetric matrices).

## Concepts

Introduced: `one-by-one-matrices` (idea), `zero-matrix`, `properties-of-matrix-addition-and-scalar-multiplication` (result), `matrix-product-as-composition` (result; forms include (A.1) as `eq-a-1`), `noncommutativity-of-matrix-multiplication` (result), `cancellation-with-an-inverse` (result), `diagonal-matrix`, `inverse-of-a-diagonal-matrix` (result), `transpose-of-a-product` (result), `dot-product-via-transpose` (result), `symmetric-matrix`.

Reinforced (3.2's ids, the book's italic definitions here marked with them): `matrix-addition`, `scalar-multiplication-of-a-matrix`, `dot-product` (terms dot product, inner product), `matrix-product` (product of matrices), `identity-matrix`, `rules-of-matrix-algebra` (the multiplication rules: associative, distributive, scalars, identity), `matrix-inverse`, `invertible-matrix` (invertible, singular), `inverse-of-a-2x2-matrix`, `transpose`. Uses: `determinant` ("the expression ad − bc is called the determinant", linked to A.6 and 3.2), `linear-mapping`, `matrix-of-a-linear-mapping` (A.1), `vector`.

## Colour and referents

A, B, C, I, I₃, A⁻¹, Aᵀ, Bᵀ, (AB)ᵀ, the diagonal and symmetric examples wear `matrix` (`\kA`, `\kB`, `\kC`, `\kI`, `\kAinv`, `\kAT`); x⃗, y⃗, the columns b⃗_j, Ax⃗, Bx⃗, ABx⃗ wear `vector`; the 1 × 1 mappings α, β, D, T, the entries a_ij, b_ij, d_k, the scalars α, β, the numbers a, b, c, d of the 2 × 2 formula, the sizes m, n, p and ad − bc in ink. No referents.

## Figures

- `sim-composition` · Sim · `matrix-product-as-composition`, `noncommutativity-of-matrix-multiplication`, `matrix-product` · value add: intuition and variation: the reader drags x⃗ in the plane and sees it carried in two hops, x⃗ → Bx⃗ → A(Bx⃗), with the single hop ABx⃗ landing on the same point, the text's "composition of linear mappings is matrix multiplication" drawn; a choice swaps the order to BA and the final point moves, the text's AB ≠ BA with the book's own pair · arrows: symbolic (vectors and the two hops drawn as arrows between heads) · still: a composition has no clock; the order change morphs the second hop · controls: choice order (AB, BA); sliders x₁, x₂ (−2 to 2, step 0.1, `F.drag`; default (1, 1)); the matrices are the book's A = [1 1; 1 1] and B = [1 0; 0 2], printed in the readout · headline "ABx⃗ = A(Bx⃗) = (3, 3), while BAx⃗ = (2, 4)" · readout `\kA\kB\kvecx = \kA(\kB\kvecx)` with the live vectors and the product matrix AB = [1 2; 1 2] (BA = [1 1; 2 2] under the other choice) · graph alone, one plane, axes fixed −8 to 8 (|BAx⃗| reaches 8 at the slider extremes; a head past the box is pinned) · 2D.

## Extra simulations (rule 15)

Built (config 14): `sim-composition`, above. Considered and rejected: a singular 2 × 2 matrix flattening the plane (A.6's Figure A.7 and 3.2's `sim-determinant-area` show it at det = 0); entry-wise addition and scaling (notation); a diagonal matrix stretching the axes (its slider positions look alike: two scalings; the text's examples say it); the identity as "nothing happens" (no view).

## Derivations (rule 29)

- AB = AC ⇒ A⁻¹AB = A⁻¹AC ⇒ IB = IC ⇒ B = C · printed `align` block · built as `drv-cancellation`, replacing the block; facts: A invertible (`A.2-inverse`), A⁻¹A = I (`A.2-inverse`), IB = B (`A.2-rules`); the result the cancellation rule the text states in italics before it.
- The numeric check that (A + B)x⃗ = Ax⃗ + Bx⃗ (the long `split` with 2 and −1) · a verification with numbers, the text itself saying letters would make it a proof · not built, kept printed.
- Example A.2.1 (the associative and scalar laws on numbers) · worked numbers · not built.
- The diagonal inverse check and the (AB)ᵀ example "left to the reader" · numeric verifications · not built.

## Exercises

All kind `exercise`; no inline exercise. Unkeyed A.2.1–A.2.5 with AI-marked solutions, every answer computed in SymPy 2026-10-19: A.2.1 a) [2 4 5; 13 11 4] b) [3 −6 1; 5 4 1; 6 1 2]; A.2.2 a) [6 39; −12 36] b) [−12 5; −5 −2]; A.2.3 a) [13 7 1 −7; 17 0 11 0; 79 19 31 −19] b) [7 4 16 5; 8 10 9 20; 5 0 10 7] c) [42 70; 31 62; 32 62] d) [27 18; 11 4]; A.2.4 a) [−1/3] b) [0 1; −1 0] c) [−3 4; 1 −1] d) [2/3 −1/3; −1/6 1/3]; A.2.5 a) diag(−1/2, 1) b) diag(1/3, −1/2, 1) c) diag(1, −1, 100, −1/5). Keyed A.2.101–A.2.105 carry the book's answers, all confirmed. Shapes: `open` (a matrix in TeX) throughout; one card per `tasks` list.

## Wanted at chapter level

- Anchors: A, B, C → `A.2-addition`; x_vec → `A.2-addition`; y_vec → `A.2-transpose`; b_vec → `A.2-columns`; I → `A.2-rules`; A_inv → `A.2-inverse`; A_T → `A.2-transpose`.
- Form anchors: `eq-matrix-sum-on-vector`, `eq-matrix-scalar-on-vector`, `eq-matrix-addition-rules` → `A.2-addition`; `eq-matrix-product-composition`, `eq-matrix-product-sizes`, `eq-matrix-product-entry` → `A.2-multiplication`; `eq-a-1` → `A.2-eq-a-1`; `eq-matrix-product-columns` → `A.2-columns`; `eq-noncommutative` → `A.2-noncommutative`; `eq-cancellation` → `A.2-drv-cancellation`; `eq-diagonal-inverse` → `A.2-diagonal`; `eq-transpose-of-product`, `eq-transpose-of-ax`, `eq-dot-product-transpose`, `eq-symmetric` → `A.2-transpose`.
- Chapter 3's forms this page states again (the identity, the multiplication rules, the 2 × 2 inverse): the page cites 3.2's form ids in `coverage` and adds none.
