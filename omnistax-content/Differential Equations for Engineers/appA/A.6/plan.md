# Plan: A.6 Determinant (`det:section`)

Source: `source.md`. Status: planned 2026-10-19 by the prep (config 2: the plan decides; built straight through after the merge of Chapter A). Template: `ch00/0.2`; Chapter 3's `3.2` once built (its `sim-determinant-area` is this page's Figure A.7 mechanism).

No examples, Theorems A.6.1 and A.6.2, Figure A.7 (an xfig sketch), no inline exercises, eleven end exercises (4 keyed), no footnotes. Section notes ("1 lecture") dropped.

## Sub-concepts (OmniStax's; the book prints one block before Exercises)

`definition` **The determinant of a 1 × 1 and a 2 × 2 matrix** (the two definitions, the area meaning, the worked A = [1 1; −1 1], Figure A.7 as `sim-unit-square-image`, the parallelogram area); `cofactor` **Cofactor expansion** (A_ij, the recursive definition, the 3 × 3 example, expansion along any row, the second-row example and its check, cofactors, expansion along a column, det(Aᵀ)); `triangular` **Triangular and diagonal matrices** (upper and lower triangular, the product of the diagonal, diagonal matrices, det(I) = 1); `products` **Products, inverses, and notation** (Theorem A.6.1, the inverse argument, Theorem A.6.2, det(A⁻¹), the 2 × 2 inverse revisited, the vertical-bar notation the book does not use).

## Concepts

Introduced: `area-of-a-parallelogram` (Calculus's id; result; term parallelogram), `determinant-of-the-transpose` (result; the row-i and column-j expansions in its statement), `triangular-matrix` (terms upper triangular, lower triangular; type matrix), `determinant-of-a-triangular-matrix` (result; forms the product of the diagonal and det(I) = 1), `determinant-of-an-inverse` (result).

Reinforced (3.2's ids; the book's definitions here are marked with them): `determinant` (the 1 × 1 and 2 × 2 definitions, forms added below), `determinant-as-area-scale` (the paragraph on the unit square), `cofactor-expansion` (terms cofactor, cofactor expansion; the first-row, row-i and column-j forms, added below where 3.2 lacks them), `determinant-of-a-product` (Theorem A.6.1), `invertibility-and-the-determinant` (Theorem A.6.2), `inverse-of-a-2x2-matrix`, `square-matrix`, `identity-matrix`, `matrix-inverse`, `transpose`; A.2's `diagonal-matrix`. Uses: `linear-mapping`, `matrix-of-a-linear-mapping` (A.1), `invertible-matrix`. Calculus link: the determinant as the factor by which area changes to 15.7's `jacobian` (`/calculus/ch15/15.7/#15.7-<span>`), at "The determinant of A is the factor by which the area of objects changes".

## Colour and referents

A, B, A_ij, A⁻¹, Aᵀ, I, L, U, the triangular and diagonal examples wear `matrix` (`\kA`, `\kB`, `\kAij`, `\kAinv`, `\kAT`, `\kI`); the corner images (1, −1), (2, 0), (1, 1) of the square drawn as arrows from the origin wear `vector` in the figure; the unit square and its image are one `region` before and after the mapping; det(A), the entries a, b, c, d, a_ij, the cofactors, n, i, j, x of the exercises in ink. No referents.

## Figures

- `sim-unit-square-image` · Figure A.7 · `area-of-a-parallelogram`, `determinant-as-area-scale`, `determinant`, `invertibility-and-the-determinant` · value add: variation: the entries a, b, c, d on sliders; the unit square on the left pane and its image on the right, each corner joined to its image by an arrow as the book draws, the image's area |ad − bc| shaded and its orientation told by the order of the corners, hatched when det(A) < 0 (the axes flipped), and at det(A) = 0 the square collapses to a segment, the singular case Theorem A.6.2 names · arrows: symbolic (the book's correspondence arrows) · still: a map has no clock · controls: sliders a, b, c, d (−2 to 2, step 0.1; defaults 1, 1, −1, 1 of A, each with a dashed special where ad − bc = 0 from the other three; untyped: entries) · headline "det(A) = 1·1 − 1·(−1) = 2: the unit square goes to a square of area 2" (negative: "… = −2: area 2, orientation flipped") · readout the 2 × 2 determinant with the live entries and the three corner images (1, 0) → (1, −1), (1, 1) → (2, 0), (0, 1) → (1, 1) · scene: two panes (the book's two diagrams), equal scales, axes fixed −4 to 4 (the slider extremes reach |a| + |b| = 4) · 2D. The mechanism and the default matrix are those of 3.2's `sim-determinant-area` (3.2's plan): the IIFE is written once and copied into this page's `figures.js`, with the book's corner arrows and the two panes added here, the eyebrow "Figure A.7" and the original `linalg-imagesquare.svg` behind the toggle.

## Extra simulations (rule 15)

None built beyond the figure. Considered and rejected: cofactor expansion animated (3.2 rejected it: notation, no variation); a 3 × 3 determinant as a parallelepiped's volume (3D, and the book draws nothing; `RULES.md` keeps the appendix flat; Calculus 12.4 has `volume-of-a-parallelepiped`); det(AB) = det(A)det(B) as areas multiplying (the text's doubling-and-tripling sentence says it; the figure's area readout under two matrices in turn would only repeat the sentence).

## Derivations (rule 29)

- det(A)det(B) = det(AB) = det(I) = 1, then det(A⁻¹)det(A) = 1 gives det(A⁻¹) = 1/det(A) · printed chain with prose · built as `drv-determinant-of-an-inverse` after the paragraph that completes it (prose-first, the prose kept); facts: AB = I (given), Theorem A.6.1 (`A.6-theorem-a-6-1`), det(I) = 1 (`A.6-triangular`); it is the derivation 3.2 builds as `drv-determinant-of-inverse` and its first fact links there (rule 29.5).
- The 3 × 3 expansions (det = 0, −60 along two rows) · worked numbers · not built.
- The triangular determinant by repeated expansion · prose, two moves · not built.

## Exercises

All kind `exercise`; no inline exercise. Unkeyed A.6.1–A.6.7 with AI-marked solutions, every answer computed in SymPy 2026-10-19: A.6.1 a) 3 b) −5 c) 0 d) 24 e) 12 f) 85 g) 84 h) −3; A.6.2 a) x = 3 b) x = 4 c) x = ±2 d) x = 1/2; A.6.3 1/48 (det = 2·8·3·1 = 48 of a triangular matrix); A.6.4 det(L) = 1, det(U) = 5, so det(A) = 5; A.6.5 det(A) = 1 − 2x = ±2, so x = −1/2 or x = 3/2; A.6.6 both equal 3 (det(S⁻¹)det(A)det(S) = det(A) by Theorem A.6.1 and det(S⁻¹) = 1/det(S)); A.6.7 det(xA) = det(xI)det(A) = xⁿ. Keyed A.6.101–A.6.104 carry the book's answers, all confirmed. Shapes: `number` for a determinant, `multi` for a list, `open` for the reasoning of A.6.6 and A.6.7.

## Wanted at chapter level

- Anchors: A → `A.6-definition`; B → `A.6-theorem-a-6-1`; A_ij, a_ij → `A.6-cofactor`; I → `A.6-triangular`; A_inv → `A.6-drv-determinant-of-an-inverse`; A_T → `A.6-det-transpose`.
- Form anchors: `eq-parallelogram-area` → `A.6-parallelogram`; `eq-det-transpose` → `A.6-det-transpose`; `eq-det-triangular`, `eq-det-identity` → `A.6-triangular`; `eq-det-inverse`, `eq-det-inverse-product` → `A.6-drv-determinant-of-an-inverse`.
- Forms on Chapter 3's concepts through `ost add diffyqs forms` after the merge, each with `"section": "A.6"`, after checking `ost rows diffyqs forms --where concept=<id>` so none duplicates a 3.2 form: on `determinant`, `eq-det-1x1` (`\det \left( \begin{bmatrix} a \end{bmatrix} \right) = a`, anchor `A.6-definition`) and `eq-det-2x2` (`\det \left( \begin{bmatrix} a & b \\ c & d \end{bmatrix} \right) = ad-bc`, anchor `A.6-definition`); on `cofactor-expansion`, `eq-cofactor-first-row` (`\det (A) = \sum_{j=1}^n {(-1)}^{1+j} a_{1j} \det (A_{1j})`) and `eq-cofactor-column` (`\det (A) = \sum_{i=1}^n {(-1)}^{i+j} a_{ij} \det (A_{ij})`), anchor `A.6-cofactor` (the row-i form is 3.2's boxed one); on `determinant-of-a-product`, Theorem A.6.1's form only if 3.2 staged none, anchor `A.6-theorem-a-6-1`.
- Links: Calculus 15.7 (`jacobian`) and 12.4 (`area-of-a-parallelogram`, the cross-product version) in the prose.
