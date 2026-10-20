# Appendix A exploration: Linear algebra

Written 2026-10-19 from the six `source.md` files converted from `ap-linear-algebra.tex` (lines 5–6926). Appendix A is a chapter of the book (`RULES.md`): chapter id `A`, directory `appA`, listed after Chapter 8, its sections A.1–A.6. It prints no introduction and no summary: it opens on A.1.

## Modules

| Section | Label | Title | Inline ex. | End ex. (keyed) | Examples | Theorems | Figures | Numbered eqs | Footnotes |
|---|---|---|---|---|---|---|---|---|---|
| A.1 | vecsandmaps:section | Vectors, mappings, and matrices | 0 | 18 (5) | 0 | 0 | A.1–A.4 | none | 5 |
| A.2 | matalg:section | Matrix algebra | 0 | 10 (5) | 1 (A.2.1) | 0 | 0 | (A.1) | 2 |
| A.3 | elim:section | Elimination | 0 | 16 (8) | 1 (A.3.1) | 1 (A.3.1) | 0 | (A.2) | 1 |
| A.4 | subspaces:section | Subspaces, dimension, and the kernel | 0 | 9 (3) | 5 (A.4.1–A.4.5) | 3 (A.4.1–A.4.3) | 0 | none | 0 |
| A.5 | innerproduct:section | Inner product and projections | 0 | 16 (7) | 5 (A.5.1–A.5.5) | 0 | A.5–A.6 | none | 1 |
| A.6 | det:section | Determinant | 0 | 11 (4) | 0 | 2 (A.6.1–A.6.2) | A.7 | none | 0 |
| **all** | | | **0** | **80 (32)** | **12** | **6** | **7** | **2** | **9** |

Every section carries a `\sectionnotes` line (lecture counts only; no [EP]/[BD] numbers), dropped per config. The appendix has no inline exercises, no remarks, no tables and no citations.

## Numbers in book order

- Equations (A.1) the product of a 2 × 3 and a 3 × 2 matrix written out, (A.2) the three-equation system 2x₁ + 2x₂ + 2x₃ = 2, x₁ + x₂ + 3x₃ = 5, x₁ + 4x₂ + x₃ = 10.
- Figures A.1 (the vector (1, 2) as an arrow), A.2 (adding (1, 2) and (2, −3)), A.3 (subtracting (−2, 1) from (1, 2)), A.4 (x⃗, 2x⃗ and −1.5x⃗), A.5 (the angle between two vectors, θ, −θ and 2π − θ), A.6 (the orthogonal projection of w⃗ onto v⃗), A.7 (the image of the unit square under [1 1; −1 1]). All seven are xfig sketches (`linalg-vecarrow`, `linalg-vecadd`, `linalg-vecsub`, `linalg-vecscale`, `vec-angle`, `vec-orthoproj`, `linalg-imagesquare`), copied to `media/appA/`.
- Theorems A.3.1 (rank A = rank Aᵀ), A.4.1 (unique dimension and representation in a basis), A.4.2 (Rank), A.4.3 (Rank–Nullity), A.6.1 (det(AB) = det(A)det(B)), A.6.2 (invertible iff det ≠ 0). Only A.4.2 and A.4.3 carry names in brackets.
- Examples A.2.1, A.3.1, A.4.1–A.4.5, A.5.1–A.5.5. A.4.1 carries the label `example-simplesubspaces` (cited by A.4.2).

## Boxed formulas: a correction of the book-level count

`$BOOK/exploration.md` counts 112 `\mybxbg`/`\mybxsm` boxes in the book, "62 of them in Appendix A". The 62 of Appendix A are all `\mybxsm{…}` marks on a single entry inside a matrix: the leading entries of Example A.3.1, the pivots of the elimination and inverse computations of A.3, the pivots and the filled-in entries of Example A.4.5 (the converter writes each as `\boxed{1}` inside the matrix). The appendix has no `\mybxbg` and no boxed formula, so its Equations and formulas list is made of the equations that state its definitions and theorems, not of boxed results. The book-level count of boxed formulas is therefore 50, not 112.

## What is new

Vectors as n-tuples and as arrows, magnitude, direction, addition, subtraction, scaling, unit vectors; mappings and linear mappings; a matrix as where the standard basis vectors go, the matrix-times-vector rule; linear differential operators as linear mappings of an infinite-dimensional space (A.1). Matrix addition, scalar multiples, the zero matrix, the product as composition and as rows times columns, the identity, the rules and the missing commutative law, the inverse, cancellation, the 2 × 2 inverse formula, diagonal matrices, the transpose and symmetric matrices (A.2). Linear systems as Ax⃗ = b⃗, the augmented matrix, row operations, (reduced) row echelon form, pivots, Gaussian and Gauss–Jordan elimination, backsubstitution, inconsistent and consistent systems, free variables, the homogeneous equation, kernel and nullspace, linear combinations, linear independence, span, rank, row and column spaces, Theorem A.3.1, pivot columns, computing the inverse from [A | I] (A.3). Subspaces, basis, dimension, Theorems A.4.1–A.4.3, nullity, the kernel from the reduced row echelon form, the Fredholm alternative (A.4). The inner product and its four rules, length and angle, orthogonality, orthogonal projection, orthogonal and orthonormal bases, coordinates by inner products, projection onto a subspace, the Gram–Schmidt process (A.5). The determinant of 1 × 1 and 2 × 2 matrices, the determinant as an area factor, cofactor expansion along any row or column, det(A) = det(Aᵀ), triangular and diagonal determinants, det(I) = 1, Theorems A.6.1 and A.6.2, det(A⁻¹) (A.6).

Chapter 3 of this book already teaches the matrix tools it needs, and its concept ids come first in the merge order: `matrix`, `matrix-entry`, `square-matrix`, `row-vector`, `vector`, `scalar`, `matrix-addition`, `scalar-multiplication-of-a-matrix`, `transpose`, `dot-product`, `matrix-product`, `identity-matrix`, `rules-of-matrix-algebra`, `matrix-inverse`, `invertible-matrix`, `determinant`, `determinant-as-area-scale`, `cofactor-expansion`, `determinant-of-a-product`, `invertibility-and-the-determinant`, `inverse-of-a-2x2-matrix`, `augmented-matrix`, `elementary-row-operations`, `inconsistent-system`, `leading-entry`, `reduced-row-echelon-form`, `free-variable`, `row-reduction`, `computing-a-matrix-inverse` (3.2), `vector-valued-function` (3.3); Chapter 2 owns `linear-combination`, `linear-operator`, `linear-independence` (of functions). The appendix reuses every one of these (its pages mark them `uses` or `reinforces`) and introduces only what is not there. Where the appendix states a concept Calculus also states, it keeps Calculus's id: `magnitude-of-a-vector`, `vector-addition`, `vector-difference`, `scalar-multiplication`, `unit-vector`, `standard-unit-vectors` (12.1), `angle-between-two-vectors`, `orthogonal-vectors`, `vector-projection` (12.3), `area-of-a-parallelogram` (12.4). Calculus's `transformation` and `jacobian` (15.7) are not the same concepts as A.1's linear mapping and A.6's determinant, and are not reused; A.6's "determinant as the factor by which area changes" is linked to Calculus 15.7 in the prose.

## Sketches and photographs

No photographs. Every figure is an xfig sketch of arrows in the plane; all are 2D (`RULES.md`, "Linear algebra arrows"). Figures A.1–A.4 fold into one still figure of vector arithmetic with the operation as a choice; A.5 and A.6 are still figures with the two vectors draggable; A.7 is the unit square under a matrix with its entries on sliders, the same mechanism as 3.2's `sim-determinant-area`.

## Notes, footnotes and links

Footnotes (9) are book footnotes: the joke about 5000 unknowns, Euclid and Descartes with their Wikipedia links, the ⟨1, 2⟩ notation, Matlab's vector of inputs (A.1); mathematicians' and physicists' order in the dot product, "not learned enough to appreciate" symmetric matrices (A.2); "perhaps we have this backwards" (A.3); Euclid's right angle (A.5). A.3 links Chapter 2 for linear independence of functions and A.5 links Chapter 4 three times for inner products and orthogonal bases of functions; the chapters have no introduction page, so each link goes to the chapter's first section (`/diffyqs/ch02/2.1/`, `/diffyqs/ch04/4.1/`). A.1 reminds the reader of ı⃗, ȷ⃗, k⃗ from multivariable calculus and A.5 of the dot-product angle formula: both link Calculus 12.1 and 12.3. No PhET items, no computer resources.

## Exercises that belong to another section

None moves. A.3.6 and A.3.7 read the matrices of A.3.5, and A.3.106 and A.3.107 those of A.3.105 (each prompt links its source exercise). A.4.5 asks what the Fredholm alternative says, A.6.4 names L and U without defining an LU factorisation (the prompt stands alone). No term is defined only in an exercise set.

## What would make this chapter stunning (root rule 23)

The appendix is the picture behind Chapters 3–5: a matrix is a thing that moves the plane. The reader can hold the vectors. In A.1 the arrows of the first four figures become one figure the reader drags: the sum closes the triangle, the difference runs from the head of one to the head of the other, and a negative scalar swings the arrow round; a second figure shows a matrix doing exactly what the text says, sending e⃗₁ and e⃗₂ to its columns and any x⃗ to the parallelogram sum x₁(column 1) + x₂(column 2). In A.2 the reader drags x⃗ through B and then A and sees ABx⃗ land where A(Bx⃗) does, and that BAx⃗ lands somewhere else. In A.3 a 2 × 2 system is two lines that cross, run parallel or coincide as the coefficients move, the reduced row echelon form beside them saying unique, inconsistent or free variable. In A.4 the kernel and the column space of a 2 × 2 matrix are lines through the origin whose dimensions add to 2 as the matrix drops rank, and a dragged b⃗ is either in the column space or not: the Fredholm alternative drawn. In A.5 projection is a shadow cast by rays perpendicular to the line of v⃗, and Gram–Schmidt is that shadow subtracted away, the remainder standing square to the first vector however the second is dragged. In A.6 the unit square shears into the parallelogram whose area is the determinant and whose corners run the other way when the sign is negative. The orchestrator's proposal in `$BOOK/exploration.md` (the matrix as a mapping of the unit square, projection as a shadow, Gram–Schmidt stepping) is taken up in those three figures; each plan line judges its tier under root rules 24–26, and every one is still, since no idea of the appendix has a clock.
