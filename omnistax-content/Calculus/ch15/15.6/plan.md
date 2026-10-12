# Plan: 15.6 Calculating Centers of Mass and Moments of Inertia (m53971)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-13. Template: `ch01/1.1`.

Three objectives, an opening paragraph, one definition note (mass, moments, center of mass and moments of inertia of a solid), Examples 15.55–15.64, ten checkpoints (15.33–15.42), seven figures (15.64–15.70), nine Key Concepts, four Key Equations, 59 section exercises (297–355, 25 keyed), one glossary term. Numbered equations 15.13–15.16.

## Sub-concepts (page headers)

0. `mass-intro`: the opening paragraph.
1. `center-of-mass-2d` **Center of Mass in Two Dimensions** (the book's): the balanced lamina (Figure 15.64), density as a limit (Figure 15.65), the subdivided lamina (Figure 15.66), mass (Equation 15.13), Example 15.55 (Figure 15.67), the moments (Equations 15.14, 15.15), Example 15.56, the center of mass (Equation 15.16), Examples 15.57–15.59 (Figures 15.68, 15.69), Checkpoints 15.33–15.37.
2. `moments-of-inertia` **Moments of Inertia** (the book's): I_x, I_y, I₀, Example 15.60, the radius of gyration, Example 15.61, Checkpoints 15.38, 15.39. "Section 6.6 of Volume 1" is reworded "Section 6.6", linked, with a correction note giving the printed words (config 4).
3. `three-dimensions` **Center of Mass and Moments of Inertia in Three Dimensions** (the book's): the definition note, Examples 15.62–15.64 (Figure 15.70), Checkpoints 15.40–15.42.

## Concept nodes

Introduced: `density-of-a-lamina` (`eq-lamina-density`), `mass-of-a-lamina` (`eq-lamina-mass`, Equation 15.13), `moments-of-a-lamina` (two forms, Equations 15.14, 15.15), `center-of-mass-of-a-lamina` (Equation 15.16), `centroid-of-a-plane-region`, `moments-of-inertia-of-a-lamina` (two forms), `polar-moment-of-inertia`, `radius-of-gyration`, `mass-and-moments-of-a-solid` (two forms), `center-of-mass-of-a-solid`, `moments-of-inertia-of-a-solid`. Uses: `lamina`, `center-of-mass`, `centroid`, `moment`, `density-function`, `double-integral`, `triple-integral`, `triple-integral-over-a-general-region`, `trigonometric-substitution`.

## Colour

`function` for the density ρ (`\krho`) and its shading; `integral` for m, M_x, M_y, M_xy, M_xz, M_yz, I_x, I_y, I_z, I₀ and every value; `region` for R and Q; `point` for the center of mass (x̄, ȳ) or (x̄, ȳ, z̄), drawn filled, and the centroid (x_c, y_c), drawn hollow. Radii of gyration in ink. No referents.

## Figures

- `sim-lamina` · Figure 15.64 + 15.65 + 15.66 + 15.67 · `density-of-a-lamina`, `mass-of-a-lamina`, `center-of-mass-of-a-lamina`, `centroid-of-a-plane-region` · variation and intuition: the triangular lamina of Examples 15.55–15.57 cut into n by n small rectangles, each shaded by its density ρ(x*ᵢⱼ, y*ᵢⱼ) on one scale with a legend; the sum of ρ ΔA closes on the mass, and the point the lamina balances on (the book's spindle) moves from the centroid (1, 1) to the center of mass (6/5, 6/5) when the density changes from uniform to ρ = xy · still · choice density (ρ = 1, ρ = xy); slider n (2 to 30, default 6) · 2D. Readout m ≈ ΣΣ ρ ΔA = (sum), m = (exact), (x̄, ȳ) = (exact). Checkpoint 15.33's ρ = √(xy) is not offered.
- `fig-lamina-parabola` · Figure 15.68 · `center-of-mass-of-a-lamina` · standardisation: Example 15.58's lamina under y = x², 0 ≤ x ≤ 2, shaded by ρ = x + y, its center of mass (44/27, 100/63) marked, a still copy (kind `figure`) · 2D.
- `fig-centroid-exp` · Figure 15.69 · `centroid-of-a-plane-region` · standardisation: Example 15.59's region under y = eˣ, 1 ≤ x ≤ 3, and its centroid, a still copy · 2D.
- `sim-tetrahedron-mass` · Figure 15.70 · `mass-and-moments-of-a-solid`, `center-of-mass-of-a-solid` · depth: the tetrahedron Q under x + 2y + 3z = 6 of Examples 15.62–15.64 with density ρ = x²yz and its center of mass (2.25, 0.75, 0.5) marked inside, with its drops to the coordinate planes · still · no controls · 3D free orbit, pitch 0.1 to 1.4. Readout m = 108/35, (x̄, ȳ, z̄) = (2.25, 0.75, 0.5).

Images: exercise images (regions of laminas) stay in their cards.

## Exercises

- Checkpoints 15.33–15.42 inline after their examples; the book's hints as `hint`.
- Section exercises 297–355: the 25 keyed odd ones kept. Unkeyed show exercises kept with AI approaches: 335, 341, 345, 353. Exercise 347 is left out: its claim does not hold (the moments are 3πk/16 and 9k/4). The other unkeyed ones left out and named.
- Review exercises 433, 435, 441 held here, `source_section` 15.7.

## Extra simulations (rule 15)

None beyond the figures: `sim-lamina` already shows density, mass, center of mass and centroid together; a Sim of the radius of gyration was judged to repeat its readout.

## Wanted at chapter level

- forms: `eq-lamina-density` → `15.6-density-term`; `eq-lamina-mass` → `15.6-fs-id1167793844477`; `eq-lamina-moment-x` → `15.6-fs-id1167793972894`; `eq-lamina-moment-y` → `15.6-fs-id1167793956495`; `eq-lamina-center-of-mass` → `15.6-fs-id1167793828955`; `eq-centroid-plane-region` → `15.6-centroid-term`; `eq-lamina-inertia-x`, `eq-lamina-inertia-y` → `15.6-moments-of-inertia`; `eq-polar-moment-of-inertia` → `15.6-polar-moment-term`; `eq-radius-of-gyration` → `15.6-gyration-term`; solid forms → `15.6-fs-id1167793294163`.
- variables of 15.6 anchored at build.
- Review 433, 435, 441 placed here.
