# Appendix A colour plan

Prepared 2026-10-19 with `config.md`. It refines the book's `COLOR.md` for what the appendix draws; root rules 7 and 22 hold, and nothing here invents a hue. No fact and no convention: the book's sketches are black on white.

## What the appendix colours

- `vector`: every arrow, x⃗, y⃗, z⃗, u⃗, v⃗, w⃗, b⃗, 0⃗, the standard basis vectors e⃗_j, the columns of a matrix, Ax⃗ and ABx⃗, proj_v⃗(w⃗), proj_S(x⃗), the Gram–Schmidt vectors w⃗_k, x⃗ⁱ as a row vector; the images of the unit square's corners in A.6.
- `matrix`: A, B, C, M, I, A⁻¹, Aᵀ, the submatrix A_ij, a diagonal, triangular or symmetric matrix, the augmented matrix [A | b⃗] and [A | I], the matrix L of A.4; a linear mapping F (the section identifies a linear mapping with its matrix; `config.md` 18).
- `region`: a subspace S, the kernel, the span of a set of vectors, the row space and the column space, drawn as a line through the origin or a shaded plane.
- `curve`: the two lines of a 2 × 2 system in A.3's figure (the level sets a₁x + b₁y = c₁).
- `point`: the solution (x, y) of a system where the lines cross (A.3); the points (0, 0), (1, 0), (1, 1), (0, 1) of the unit square and their images in A.6 are the corners of a drawn region and keep ink.

Untyped, in ink: the components x₁, …, xₙ and the entries a_ij, b_ij, d_k, a, b, c, d; the scalars α, β, a_j, α_j; the magnitude ‖x⃗‖ and the angle θ; the dimension, rank, nullity and the determinant's value, written det, rank, dim, span, ker as operators; the indices i, j, k, n, m, p; the differential operator L of A.1 (Chapter 2's `linear-operator`, ink there too) and the mappings D, T of A.2's one-by-one example; the variables x, y of the motivating system of A.1.

## Referents

| Section | Figure | Referents |
|---|---|---|
| A.1 | `sim-vector-arithmetic` (Figures A.1 + A.2 + A.3 + A.4) | none: x⃗, y⃗ and the result are told apart by the book's own line styles (dotted, dashed, solid) and their labels |
| A.1 | `sim-matrix-mapping` | none: e⃗₁, e⃗₂, x⃗ and their images carry labels |
| A.2 | `sim-composition` | none: one path at a time (AB or BA), each vector labelled |
| A.3 | `sim-system-of-lines` | `equation-1`, `equation-2`: the two equations of the system, each a line in its own colour, the text's "the first equation", "the second equation" marked `data-ref` |
| A.4 | `sim-rank-nullity` | `kernel-of-a`, `column-space-of-a`: the two subspaces of one matrix drawn together, both of type `region`, told apart by their referent colours; the text's mentions of the kernel and the column space of the example matrix marked `data-ref` |
| A.5 | `sim-angle-between-vectors` (Figure A.5), `sim-projection` (Figure A.6), `sim-gram-schmidt` | none: two or three labelled arrows of one type |
| A.6 | `sim-unit-square-image` (Figure A.7) | none: the square and its image are one region before and after the mapping |

Where a figure draws two things of one type that the caption names apart and labels cannot keep clear at every slider position, hover names carry the labels (root rule 26.7).
