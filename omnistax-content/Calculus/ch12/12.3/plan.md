# Plan: 12.3 The Dot Product (m53902)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-13. Template: `ch01/1.1`.

Five objectives, two opening paragraphs, three definitions, three theorems with proofs, Examples 12.21–12.30, nine checkpoints (12.21–12.29), nine figures (12.44–12.52), Key Concepts, five Key Equations rows, Equations 12.3–12.8, 60 section exercises (27 keyed), seven glossary terms.

## Sub-concepts (page headers)

0. `dot-intro`: the two opening paragraphs (work, the module link to Chapter 6's introduction).
1. `dot-product` **The Dot Product and Its Properties**: the definition (Equation 12.3), the scalar product, Example 12.21, Checkpoint 12.21, the properties theorem and its proof, Example 12.22, Checkpoint 12.22.
2. `angle` **Using the Dot Product to Find the Angle between Two Vectors**: Figure 12.44 + 12.45 + 12.46, the theorem (Equation 12.4) and proof, Equation 12.5, Example 12.23, Checkpoint 12.23, the orthogonal vectors theorem and proof, the three words, Example 12.24 with Figure 12.47, Checkpoint 12.24, Example 12.25, Checkpoint 12.25, direction angles and cosines (definition) with Figure 12.48, the fruit vendor, Example 12.26, Checkpoint 12.26.
3. `projections` **Projections**: the wagon, Figure 12.49 + 12.51 (folded), the definition (Equations 12.6, 12.7) with Figure 12.50, Example 12.27, resolution into components, Example 12.28, Checkpoint 12.27, Example 12.29 (the ship, its image kept), Checkpoint 12.28 (image kept).
4. `work` **Work**: the definition (Equation 12.8), the wagon's work (Figure 12.51 folded into 12.49's Sim, cited numbers link there), units, Example 12.30, Checkpoint 12.29 with Figure 12.52.

## Concept nodes

Introduced: `dot-product` (`eq-dot-product`), `properties-of-the-dot-product` (`eq-dot-magnitude`), `angle-between-two-vectors` (symbol θ), `evaluating-a-dot-product` (`eq-dot-cosine`, `eq-cosine-of-angle`), `orthogonal-vectors`, `direction-angles`, `direction-cosines`, `vector-projection` (`eq-vector-projection`), `scalar-projection` (`eq-scalar-projection`), `resolution-into-orthogonal-components`, `work-done-by-a-constant-force` (`eq-work-dot-product`). Uses: `work`, `vector-difference`, `magnitude-of-a-vector`, `unit-vector`, `standard-unit-vectors`, `inverse-trigonometric-functions`.

## Colour

`vector` for bold letters, PQ⃗, F and s, proj_u v; `angle` for θ, α, β, γ in figures (θ through `\ktheta`, α, β, γ plain in text, ink); the dot product's value, comp_u v, W, ‖·‖ ink (scalars). No referents.

## Figures

- `sim-dot-angle` · Figure 12.44 + 12.45 + 12.46 · `evaluating-a-dot-product`, `orthogonal-vectors`, `angle-between-two-vectors` · variation: drag the heads of u and v; θ's arc, the side v − u of the proof's triangle dashed; the five cases of Figure 12.46 are where cos θ lands (dashed circles at θ = 0, π/2, π on v's angle, where the readout names the case) · arrows symbolic · still · u, v by drag (sliders u angle, v angle 0° to 360°, lengths fixed 3 and 2.5 so the case reads from the angle alone) · headline u·v = ‖u‖‖v‖cos θ = … and the case (acute, obtuse, straight, same direction, orthogonal) · graph alone · 2D: two vectors span a plane, so the angle between them is flat.
- `sim-orthogonal-pq` · Figure 12.47 · `orthogonal-vectors` · depth: p = ⟨1, 0, 5⟩ and q = ⟨10, 3, −2⟩ with the right-angle mark between them; the right angle reads as one only from views square to their plane, and turning shows it from all sides · still · no controls · headline p·q = 0 · 3D live, free orbit, pitch bounded [−0.2, 1.4].
- `sim-direction-angles` · Figure 12.48 · `direction-angles`, `direction-cosines` · variation and depth: v by its components; arcs α, β, γ from i, j, k to v · still · sliders v₁, v₂, v₃ (−4 to 4, defaults (2, 3, 3) of Example 12.25) · headline cos α, cos β, cos γ with live numbers · 3D live: three angles to three axes are an arrangement in space.
- `sim-wagon` · Figure 12.49 + 12.51 · `work-done-by-a-constant-force`, `scalar-projection` · variation: the pull ‖F‖ and its angle; its horizontal component drawn under the handle, the displacement 50 ft along the ground · arrows symbolic · still · sliders ‖F‖ (0 to 16 lb, default 8), θ (0° to 90°, default 55°, special 90° where the work is zero), distance (10 to 80 ft, default 50) · headline W = 8(50)cos 55° ≈ 229 ft·lb live · scene: the wagon (`F.cart`) with the handle along F; graph none · 2D.
- `sim-projection` · Figure 12.50 · `vector-projection`, `scalar-projection`, `resolution-into-orthogonal-components` · variation: drag u and v; proj_u v along u with the perpendicular drop, q = v − p dashed, and past 90° the projection turns to point against u · arrows symbolic · still · u, v by drag (four sliders) · defaults v = ⟨6, −4⟩, u = ⟨3, 1⟩ of the resolution paragraph · headline proj_u v = (u·v/‖u‖²)u = ⟨21/5, 7/5⟩ in decimals, comp_u v · 2D.
- `fig-handcart` · Figure 12.52 · faithful copy (a checkpoint reads it): the handcart's handle with F at 60° and s · still · 2D. Caption: the book prints none; the row's caption is empty as printed.

Images: the ship (Example 12.29, 010) and its checkpoint variant (011) stay as printed.

## Exercises

- Checkpoints 12.21–12.29 inline, hints as `hint`.
- Section exercises 123–182: odd keyed kept; 157, 159, 165 (odd, unkeyed) judged at build; even ones left out unless proof/explain/true-false (approach).
- Review 423, 426 (T/F, approach), 429, 447 held here.

## Corrections

- "The following equation rearranges Equation 12.3": it rearranges Equation 12.4. Marker and note at the spot.

## Extra simulations (rule 15)

None beyond `sim-projection`: the fruit vendor's dot product is a sum of four products the text works in full.

## Wanted at chapter level

- forms `eq-dot-product` → the definition note; `eq-dot-magnitude` → the properties theorem; `eq-dot-cosine` → the theorem note; `eq-cosine-of-angle` → `12.3-fs-id1163723122506`; `eq-vector-projection`, `eq-scalar-projection` → the projection definition; `eq-work-dot-product` → the work definition.
- variables of 12.3 anchored at build.

## Derivations

- Properties of the Dot Product, Proof of i (commutative), iii (associative) and iv (magnitude), one Proof heading · score 1 · built as drv-dot-product-properties, one node per property sharing the components and (12.3); the proof's body replaced, "The proof that c(u·v) = u·(cv) is similar" kept after it.
- Evaluating a Dot Product, Proof · score 2 · built as drv-dot-product-and-angle: the law of cosines (Appendix C) and the expansion of ‖v − u‖² by the dot product's properties, joined into (12.4); the proof's body replaced.
- Equation 12.5, the rearrangement of (12.4) · score 0 · not built: one move.
- Orthogonal Vectors, Proof · score 1 · built as drv-orthogonal-vectors, one node per direction of the if and only if; the proof's body replaced.
- Vector and scalar projection (the block in the Definition) · score 2 · built as drv-vector-projection: the length, then the signed multiple of the unit vector giving (12.6); the block replaced inside the Definition, (12.7) kept. The book's |cos| θ is corrected in the work and marked in the prose (footnote c-abs-cos).
- Resolution into orthogonal components (after Example 12.27) · score 1 · not built: (12.6) substituted, then a numerical check.
- Example 12.29, scalar projection of velocity · score 1 · not built: (12.7) and (12.4) substituted.
- Work of the wagon · score 0 · not built: one substitution into (12.8).
