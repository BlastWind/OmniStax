# Plan: 12.4 The Cross Product (m53903)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-13. Template: `ch01/1.1`.

Five objectives, two opening paragraphs, three definitions, five theorems (properties, magnitude, area, triple scalar product, volume), one rule (by a determinant), five proofs, Examples 12.31–12.44, thirteen checkpoints (12.30–12.42), ten figures (12.53–12.62), Key Concepts, one Key Equations row, Equations 12.9 and 12.10, 60 section exercises (24 keyed), six glossary terms.

## Sub-concepts (page headers)

0. `cross-intro`: the mechanic's wrench and the 3 × 3 determinant expansion.
1. `cross-product` **The Cross Product and Its Properties**: the construction, the definition (Equation 12.9), the orthogonality check, Example 12.31, Checkpoint 12.30, the right-hand rule with Figure 12.53 + 12.54 + 12.55 + 12.56, Example 12.32, Checkpoint 12.31, i × j and its kin, Example 12.33, Checkpoint 12.32, the properties theorem and proof, Example 12.34, Checkpoint 12.33, the magnitude theorem and proof, Example 12.35, Checkpoint 12.34.
2. `determinants` **Determinants and the Cross Product**: 2 × 2 and 3 × 3 determinants (Equation 12.10), expansion along the first row, `sim-minors`, Example 12.36, Checkpoint 12.35, the rule, Example 12.37, Checkpoint 12.36.
3. `using` **Using the Cross Product**: Example 12.38, Checkpoint 12.37, the area theorem with Figure 12.57 and proof, Example 12.39 with Figure 12.58, Checkpoint 12.38.
4. `triple` **The Triple Scalar Product**: definition, theorem and proof, Example 12.40, Checkpoint 12.39, reordering rows, the identities, the parallelepiped, the volume theorem with Figure 12.59 + 12.60 and proof, Example 12.41, Checkpoint 12.40.
5. `applications` **Applications of the Cross Product**: Example 12.42 (coplanar), Checkpoint 12.41, Example 12.43, torque (definition) with Figure 12.61 + 12.62, Example 12.44, Checkpoint 12.42.

## Concept nodes

Introduced: `cross-product` (`eq-cross-product`), `direction-of-the-cross-product`, `cross-products-of-standard-unit-vectors` (`eq-ijk-cross`), `properties-of-the-cross-product` (`eq-cross-anticommutative`), `magnitude-of-the-cross-product` (`eq-cross-magnitude`), `determinant` (`eq-determinant-2`, `eq-determinant-3`), `cross-product-by-determinant` (`eq-cross-determinant`), `area-of-a-parallelogram` (`eq-parallelogram-area`), `triple-scalar-product` (`eq-triple-scalar-product`), `parallelepiped`, `volume-of-a-parallelepiped` (`eq-parallelepiped-volume`), `torque` (`eq-torque`). Uses: `orthogonal-vectors`, `dot-product`, `right-hand-rule`, `vector-projection`, `standard-unit-vectors`, `pythagorean-identities`.

## Colour

`vector` for bold letters and u × v (the cross product wears `vector`, per the brief); `matrix` for every determinant's array and its bars (the determinants wear `matrix`; `\htmlClass` is not written, so a determinant in prose is marked `<span data-concept="determinant">` around its math where the text names it, and the figures paint arrays in `matrix`); `region` for the parallelogram and the parallelepiped faces in the figures; `angle` for θ; the triple scalar product, ‖u × v‖, areas and volumes ink (scalars). τ through `\ktau` wears `vector`.

## Figures

Three live 3D scenes on the page.

- `fig-pq-cross` · Figure 12.53 · faithful copy, locked: Example 12.31's p and q (one box cannot hold both examples' products honestly, so Example 12.31 stays a still).
- `sim-cross-product` · Figure 12.54 + 12.55 + 12.56 · `cross-product`, `direction-of-the-cross-product`, `properties-of-the-cross-product`, `magnitude-of-the-cross-product` · depth: Example 12.32's u = ⟨0, 2, 1⟩, v = ⟨3, −1, 0⟩ and u × v; the parallelogram they span shaded in `region`; the right-hand rule's curl as an arrowed arc from the first factor toward the second; the order choice flips the product (v × u = −(u × v)) · arrows symbolic · still · choice order (u × v, v × u) · headline the rule in words · readout the product in components and ‖u × v‖ = area · 3D live, free orbit, pitch [−0.2, 1.4]: a direction out of the plane of two vectors is what turning shows (root rule 28.1).
- `sim-minors` · Sim · `determinant` · intuition: the 3 × 3 array of Example 12.36; a choice of the first-row entry crosses out its row and column and lights the 2 × 2 minor left, with its sign (+, −, +) · arrows none · still · choice term (a₁, a₂, a₃) · headline the term's value, readout the expansion with the live term lit and the total −19 · 2D. The text describes the crossing-out in words; the picture is the view it lacks.
- `sim-parallelogram-area` · Figure 12.57 · `area-of-a-parallelogram` · variation: the angle θ between u and v; base ‖u‖, height ‖v‖sin θ dashed · still · sliders θ (0° to 180°, default 60°, specials 90°), ‖u‖ (1 to 5, default 4), ‖v‖ (1 to 4, default 2.5) · headline area = ‖u‖‖v‖sin θ live · 2D: the parallelogram lies in its plane.
- `fig-triangle-pqr` · Figure 12.58 · faithful copy, locked: P(1, 0, 0), Q(0, 1, 0), R(0, 0, 1) and the triangle.
- `sim-parallelepiped` · Figure 12.59 + 12.60 · `volume-of-a-parallelepiped`, `triple-scalar-product` · depth: u, v, w and the parallelepiped's faces; v × w on the base and the height proj_{v×w} u; the choice of example collapses it (Example 12.42's coplanar u, v, w: volume 0, the solid flat) · still · choice (Example 12.41's u = ⟨−1, −2, 1⟩, v = ⟨4, 3, 2⟩, w = ⟨0, −5, −2⟩; Example 12.42's u = ⟨2, 0, 5⟩, v = ⟨2, 2, 4⟩, w = ⟨1, −1, 3⟩) · headline V = |u·(v × w)| live · 3D live.
- `sim-torque` · Figure 12.61 + 12.62 · `torque` · depth and variation: the wrench as an ink bar r in the xy-plane from the bolt, F at angle θ at its end, τ = r × F standing along the bolt's axis; physical layer (the wrench bar) ink, mathematical layer (r, F, τ) in `vector` · still · sliders ‖F‖ (0 to 10 N, default 6), θ (0° to 180°, default 40°, special 90°), ‖r‖ (0.05 to 0.3 m, default 0.15) · headline ‖τ‖ = ‖r‖‖F‖sin θ ≈ 0.58 N·m live · 3D live: the torque points out of the wrench's plane.

Images: exercise images stay in their cards.

## Exercises

- Checkpoints 12.30–12.42 inline, hints as `hint`.
- Section exercises 183–242: odd keyed kept; 195, 205, 207, 221, 223, 231 (odd, unkeyed) judged at build; even ones left out unless proof/explain/true-false (approach).
- Review 424 (T/F, approach), 433, 449 held here.

## Extra simulations (rule 15)

`sim-minors` (the expansion by minors as a picture). Weighed and left out: a Sim of i × j cycling (the right-hand rule Sim with i and j shows it).

## Wanted at chapter level

- forms anchored to their notes: `eq-cross-product` (definition), `eq-cross-anticommutative` (properties), `eq-cross-magnitude` (magnitude theorem), `eq-determinant-2` and `eq-determinant-3` (`12.4-fs-id1163724066100` and the 2 × 2 paragraph), `eq-cross-determinant` (rule), `eq-parallelogram-area` (area theorem), `eq-triple-scalar-product` (theorem), `eq-parallelepiped-volume` (volume theorem), `eq-torque` (definition), `eq-ijk-cross` (`12.4-fs-id1163724016752`).
- variables of 12.4 anchored at build.
