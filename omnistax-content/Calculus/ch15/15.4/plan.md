# Plan: 15.4 Triple Integrals (m53965)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-13. Template: `ch01/1.1`.

Five objectives, an opening paragraph, one definition note (the triple integral), three theorem notes (Fubini's Theorem for Triple Integrals, Triple Integral over a General Region, Average Value of a Function of Three Variables), Examples 15.36–15.42, four checkpoints (15.23–15.26), ten figures (15.40–15.49), four Key Concepts, one Key Equation, 60 section exercises (181–240, 27 keyed), one glossary term. Numbered equation 15.10.

## Sub-concepts (page headers)

0. `triple-intro`: the opening paragraph.
1. `integrable-three` **Integrable Functions of Three Variables** (the book's): the box B cut into subboxes (Figure 15.40), the triple Riemann sum, the definition (Equation 15.10), Fubini's theorem and the six orders, Examples 15.36, 15.37 (Figure 15.41), Checkpoint 15.23.
2. `general-bounded` **Triple Integrals over a General Bounded Region** (the book's): E between u₁ and u₂ over D (Figure 15.42), the theorem, the projections onto the other planes, D of Type I and Type II (Figures 15.43, 15.44), Examples 15.38 (Figure 15.45) and 15.39 (Figure 15.46), Checkpoint 15.24.
3. `order` **Changing the Order of Integration** (the book's): Example 15.40 (Figure 15.47), Checkpoint 15.25, Example 15.41 (Figures 15.48, 15.49).
4. `average-three` **Average Value of a Function of Three Variables** (the book's): the theorem, Example 15.42, Checkpoint 15.26.

## Concept nodes

Introduced: `triple-riemann-sum` (`eq-triple-riemann-sum`), `triple-integral` (`eq-triple-integral`, Equation 15.10), `fubinis-theorem-for-triple-integrals` (`eq-fubini-triple`), `triple-integral-over-a-general-region` (three forms), `volume-by-triple-integral` (`eq-volume-triple-integral`), `average-value-of-a-function-of-three-variables` (`eq-average-value-three-variables`). Reinforced: `changing-the-order-of-integration`, `type-i-region`, `type-ii-region`. Uses: `function-of-more-than-two-variables`, `double-riemann-sum`, `fubinis-theorem`, `double-integral-in-polar-coordinates`, `elliptic-paraboloid`, `sphere`.

## Colour

`region` for B, E, D, D₁, D₂, D₃ and the subboxes B_ijk; `surface` for z = u₁(x, y), z = u₂(x, y), the planes and paraboloids bounding a solid; `function` for f, u₁, u₂, g₁, g₂, h₁, h₂, T and f_ave; `integral` for ∭, V(E) and every value. No referents.

## Figures

- `sim-subboxes` · Figure 15.40 · `triple-riemann-sum`, `triple-integral` · variation and depth: the box of Example 15.36, [−1, 5] × [2, 4] × [0, 1], cut by planes parallel to the coordinate planes into l m n subboxes, one subbox B_ijk with its sample point, and the triple Riemann sum of f = x + yz² at the midpoints closing on 36 · still · sliders l (1 to 6, default 3), m (1 to 6, default 2), n (1 to 6, default 2) · 3D free orbit, pitch 0.1 to 1.4; no buttons (the book's figure prints no numbers; Example 15.36's box and integrand stand in). Readout ΣΣΣ f(x*, y*, z*) Δx Δy Δz = (sum), ∭_B f dV = 36.
- `fig-example-box` · Figure 15.41 · `fubinis-theorem-for-triple-integrals` · standardisation: Example 15.37's box [−2, 1] × [0, 3] × [1, 5], a still copy (kind `figure`), locked; readout ∭_B x²yz dV = 162.
- `sim-solid-over-d` · Figure 15.42 + 15.43 + 15.44 · `triple-integral-over-a-general-region` · variation and depth: a solid E between the surfaces z = u₁(x, y) and z = u₂(x, y) over its projection D, with the column at (x, y) from u₁ to u₂ that is the inner integral, and the strip of D through that point that is the middle one; the choice puts D as Type I (between g₁(x) and g₂(x)) or Type II (between h₁(y) and h₂(y)) · still · choice D (Type I, Type II); sliders x, y (the column's foot, kept inside D) · 3D free orbit, pitch 0.1 to 1.4; no buttons. Stand-in surfaces and regions (the book's figures print none). Readout the column's bounds at (x, y) and the iterated form of the triple integral for the type chosen.
- `fig-tetrahedron-e` · Figure 15.45 · `triple-integral-over-a-general-region` · standardisation: Example 15.38's tetrahedron under x + y + z = 1 and its projection D of Type I, a still copy, locked; readout 1/12.
- `sim-pyramid` · Figure 15.46 · `volume-by-triple-integral` · variation: Example 15.39's pyramid over [−1, 1]² with vertex (0, 0, 1) and its square cross section [−1 + z, 1 − z]² at height z · still · slider z (0 to 1, default 0.4) · 3D free orbit, pitch 0.1 to 1.4. Readout the section's area (2 − 2z)² and V = ∫₀¹ (2 − 2z)² dz = 4/3.
- `sim-three-projections` · Figure 15.47 · `changing-the-order-of-integration`, `triple-integral-over-a-general-region` · depth: Example 15.40's solid 0 ≤ x ≤ 1, 0 ≤ y ≤ x², 0 ≤ z ≤ y² standing in space with its three projections laid on the coordinate planes, D₁ on the xy-plane, D₂ on the yz-plane, D₃ on the xz-plane (the book's three flat panels as the shadows of one solid) · still · no controls · 3D free orbit, pitch 0.1 to 1.4.
- `fig-paraboloid-y` · Figure 15.48 · `triple-integral-over-a-general-region` · standardisation: Example 15.41's solid between the paraboloid y = x² + z² and the plane y = 4, a still copy, locked; readout 128π/15.
- `fig-cross-section` · Figure 15.49 · `type-i-region` · variation: the projection of that solid onto the xy-plane, between y = x² and y = 4, read with a vertical strip and a horizontal one · still · sliders x, y · 2D.

Images: exercise images (solids, a sphere's octant, an ellipsoid's octant, prisms) stay in their cards.

## Exercises

- Checkpoints 15.23–15.26 inline after their examples; the book's hints as `hint`.
- Section exercises 181–240: the 27 keyed odd ones kept; 225 keyed only for part b, its part a ("show the planes") with an AI approach. Unkeyed show exercises kept with AI approaches: 189, 190, 237, 238, 239. The other unkeyed ones left out and named.
- Review exercises 417 and 425 held here, `source_section` 15.7.

## Extra simulations (rule 15)

None beyond the figures: the subboxes, the solid over its shadow D, the pyramid's sections and the three projections cover every idea of the section.

## Wanted at chapter level

- forms: `eq-triple-riemann-sum` → `15.4-riemann-sum-term`; `eq-triple-integral` → `15.4-fs-id1167793949956`; `eq-fubini-triple` → `15.4-fs-id1167794125564`; the three general-region forms → `15.4-fs-id1167794284188`; `eq-volume-triple-integral` → `15.4-volume-term`; `eq-average-value-three-variables` → `15.4-fs-id1167793311695`.
- variables of 15.4 anchored at build.
- Review 417, 425 placed here.
