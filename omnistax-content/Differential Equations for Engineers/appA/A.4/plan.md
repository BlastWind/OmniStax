# Plan: A.4 Subspaces, dimension, and the kernel (`subspaces:section`)

Source: `source.md`. Status: planned 2026-10-19 by the prep (config 2: the plan decides; built straight through after the merge of Chapter A). Template: `ch00/0.2`.

Five examples (A.4.1, labelled `example-simplesubspaces`, to A.4.5), Theorems A.4.1, A.4.2 (Rank), A.4.3 (Rank–Nullity), no figures, no inline exercises, nine end exercises (3 keyed), no footnotes. Section notes ("1 lecture") dropped. The boxed entries of Example A.4.5 are pivot marks, kept as the book sets them.

## Sub-concepts (the book's headers)

`subspaces` **Subspaces, basis, and dimension** (the subspace definition, Example A.4.1, basis and dimension, Theorem A.4.1, Example A.4.2, row and column spaces, Examples A.4.3–A.4.4, Theorem A.4.2); `kernel` **Kernel** (the kernel is a subspace, nullity, the procedure, Example A.4.5, the two steps, Theorem A.4.3, the Fredholm alternative; `sim-rank-nullity` after the Fredholm paragraph).

## Concepts

Introduced: `subspace` (symbol S, type region), `basis`, `dimension`, `unique-representation-in-a-basis` (result, Theorem A.4.1), `rank-theorem` (result, Theorem A.4.2), `kernel-is-a-subspace` (result), `nullity`, `basis-of-the-kernel` (skill), `rank-nullity-theorem` (result, Theorem A.4.3), `fredholm-alternative` (result). Reinforced: `kernel`, `span`, `row-space`, `column-space`, `rank`, `linear-independence-of-vectors`, `finding-a-linearly-independent-subset` (A.3), `standard-unit-vectors` (A.1), `reduced-row-echelon-form` (3.2), Chapter 2's `linear-combination`. Uses: `euclidean-space`, `linear-mapping` (A.1), `invertible-matrix`, `linear-operator` ("the kernel of a linear differential operator", linked to 2.1).

## Colour and referents

L, A, M wear `matrix` (`\kL`, `\kA`); S, S′, S″, X, the kernel, the row and column spaces wear `region` (`\kS`; the words `data-concept` spans of `subspace`, `kernel`, `row-space`, `column-space`, `span`); x⃗, y⃗, w⃗, v⃗_k, e⃗_k, 0⃗, the vectors of a basis wear `vector`; the scalars α, α_j, a, the dimension k, the rank r, the nullity, the sizes n in ink. Referents: `kernel-of-a` and `column-space-of-a` of `sim-rank-nullity` (both `region`; the figure's caption and readout and the Fredholm paragraph's "the column space of A" and "a nonzero solution x⃗ to Ax⃗ = 0⃗" marked `data-ref`).

## Figures

- `sim-rank-nullity` · Sim · `subspace`, `kernel`, `column-space`, `dimension`, `rank-nullity-theorem`, `fredholm-alternative` · value add: intuition and variation: for a 2 × 2 matrix A the kernel {x⃗ : Ax⃗ = 0⃗} and the column space span{column 1, column 2} are drawn in one plane as the origin alone, a line through the origin or the whole plane, the two columns as arrows; a draggable b⃗ is marked in or out of the column space, and the headline counts rank + nullity = 2 and names the Fredholm case, so the reader sees the two subspaces of a matrix as the text's "it looks and acts a lot like some euclidean space ℝᵏ" and the alternative as a picture · arrows: symbolic (the columns and b⃗) · still: a morph between the three cases on the choice · controls: choice of matrix, printed in the option labels: rank 1, A = [1 2; 2 4] (default: kernel the line spanned by (2, −1), column space the line spanned by (1, 2)), rank 2, A = [1 2; 3 4] (kernel {0⃗}, column space the plane), rank 0, the zero matrix (kernel the plane, column space {0⃗}); sliders b₁, b₂ (−4 to 4, step 0.1, `F.drag`; default (1, 3), not in the default column space); a choice rather than entry sliders because the lesson is the three cases, not the collapse between them, and four entries plus b⃗ would exceed four sliders (root rule 26.1) · referents `kernel-of-a`, `column-space-of-a` · headline "rank 1 + nullity 1 = 2: b⃗ = (1, 3) is not in the column space, so Ax⃗ = b⃗ has no solution, while Ax⃗ = 0⃗ has the nonzero solution (2, −1)" / for rank 2 "rank 2 + nullity 0 = 2: Ax⃗ = b⃗ has the unique solution x⃗ = A⁻¹b⃗ = (1, 0)" · readout the reduced row echelon form of A and the kernel basis vector found by the A.4.5 procedure, with n = r + k written in numbers · graph alone, axes fixed −5 to 5 · 2D.

## Extra simulations (rule 15)

Built (config 14): `sim-rank-nullity`, above. Considered and rejected: a stepper through Example A.4.5's kernel vectors (the text prints each step with its boxes); the same vector in two bases of ℝ² (Example A.4.2(ii): A.5's `sim-projection` with Example A.5.3's numbers draws the first coordinate in the basis {(1, 1), (1, −1)}, and A.5's readout the second); a plane subspace of ℝ³ (3D; `RULES.md` keeps the appendix flat, and the plane figure shows the same dimensions).

## Derivations (rule 29)

- L(x⃗ + y⃗) = Lx⃗ + Ly⃗ = 0⃗ + 0⃗ = 0⃗ and L(αx⃗) = αLx⃗ = α0⃗ = 0⃗ · printed display · built as `drv-kernel-is-a-subspace`, replacing the display; facts: linearity of L (A.1, `A.1-linear`), Lx⃗ = Ly⃗ = 0⃗ (given); the result the subspace condition.
- The Fredholm argument (nonzero kernel ⇒ k > 0 ⇒ r = n − k < n ⇒ the column space is a proper subspace ⇒ some b⃗ is outside it) · prose; score 4 (facts imported: Rank–Nullity, the Rank theorem; two unprinted moves; no join), four moves · not built: its lines are sentences about dimensions, not equations the widget can work, and the paragraph is already written as the chain; it stays printed.
- The justification of Theorem A.4.2 ("the number of vectors needed was the number of pivots") · prose, two moves · not built.
- Example A.4.5 and the bases of Examples A.4.2–A.4.4 · worked examples · not built.

## Exercises

All kind `exercise`; no inline exercise. Unkeyed A.4.1–A.4.6 with AI-marked solutions, every answer computed in SymPy 2026-10-19 (bases from the pivot columns; any correct basis is accepted): A.4.1 a) {(1, 1, 1)}, dimension 1 b) {(1, 0, 5), (0, 1, 0)}, 2 c) all three, 3 d) {(1, 3, 0), (0, 2, 2)}, 2 e) {(1, 3), (0, 2)}, 2 f) all three, 3; A.4.2 a) {(−1, 1, 0)} b) {(1, −1, 1)} c) {(1, 1, 0), (1, 0, 1)} d) {(−4, −9, 1, 0), (−3, −7, 0, 1)} (the book's procedure writes these with −1 in the free entry: (1, −1, 0), (−1, 1, −1), (−1, −1, 0) and (−1, 0, −1), (4, 9, −1, 0) and (3, 7, 0, −1); the solution shows the procedure's form); A.4.3 nullity 2; A.4.4 yes, a subspace (sums and multiples keep the third component zero), basis {(1, 0, 0), (0, 1, 0)}, dimension 2; A.4.5 the first alternative holds, so Ax⃗ = b⃗ does not have a unique solution for every b⃗ and A is not invertible; A.4.6 nullity 2 means rank 1, so rows 2 and 3 are multiples of (1, 2, 3): (2, 4, 6) and (−1, −2, −3). Keyed A.4.101–A.4.103 carry the book's answers, all confirmed. Shapes: `open` for a basis, `number` for a dimension or nullity, `choice` for the yes-or-no of A.4.4 with its basis `open`, `multi` for A.4.103's five numbers.

## Wanted at chapter level

- Anchors: L → `A.4-subspaces` (the opening paragraph; A.1's L is the operator and the row carries `redefines`); S, x_vec, y_vec, zero_vec → `A.4-subspace-def`; v_vec, w_vec → `A.4-basis`; A → `A.4-ex-a-4-3`; b_vec → `A.4-fredholm`.
- Form anchors: `eq-subspace` → `A.4-subspace-def`; `eq-dimension` → `A.4-basis`; `eq-dimension-of-rn` → `A.4-ex-a-4-2`; `eq-theorem-a-4-1` → `A.4-theorem-a-4-1`; `eq-kernel-subspace` → `A.4-drv-kernel-is-a-subspace`; `eq-rank-nullity` → `A.4-theorem-a-4-3`.
- Links: A.3's kernel, span, rank, row and column spaces (`/diffyqs/appA/A.3/#A.3-<span>`); Chapter 2's `linear-operator` for "the kernel of a linear differential operator".
