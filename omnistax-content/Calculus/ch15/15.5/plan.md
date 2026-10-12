# Plan: 15.5 Triple Integrals in Cylindrical and Spherical Coordinates (m53967)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-13. Template: `ch01/1.1`.

Two objectives, an opening of two paragraphs, two definition notes (the triple integral in cylindrical and in spherical coordinates), two theorem notes (Fubini's theorem in cylindrical and in spherical coordinates), Table 15.1, Examples 15.43–15.54, six checkpoints (15.27–15.32), fourteen figures (15.50–15.63), the Student Project (Hot air balloons), two Key Concepts, two Key Equations, 56 section exercises (241–296, 25 keyed), two glossary terms. Numbered equations 15.11, 15.12.

## Sub-concepts (page headers)

0. `cylspher-intro`: the two opening paragraphs.
1. `review-cylindrical` **Review of Cylindrical Coordinates** (the book's): Figure 15.50 and the conversions.
2. `integration-cylindrical` **Integration in Cylindrical Coordinates** (the book's): Table 15.1, the cylindrical box (Figure 15.51), the definition and Equation 15.11, the theorem, Examples 15.43–15.46 (Figures 15.52–15.54), Checkpoints 15.27–15.30.
3. `review-spherical` **Review of Spherical Coordinates** (the book's): Figure 15.55, the conversions, Figure 15.56.
4. `integration-spherical` **Integration in Spherical Coordinates** (the book's): the volume element (Figure 15.57), the definition, the theorem (Equation 15.12), Examples 15.47–15.54 (Figures 15.58–15.60), Checkpoints 15.31, 15.32, the Student Project (Figures 15.61–15.63).

## Concept nodes

Introduced: `triple-integral-in-cylindrical-coordinates` (two forms, Equation 15.11), `fubinis-theorem-in-cylindrical-coordinates` (two forms), `volume-element-in-spherical-coordinates` (`eq-spherical-volume-element`), `triple-integral-in-spherical-coordinates` (`eq-spherical-riemann`), `fubinis-theorem-for-spherical-coordinates` (two forms, Equation 15.12). Uses: `cylindrical-coordinate-system`, `conversion-between-cylindrical-and-rectangular-coordinates`, `spherical-coordinate-system`, `conversion-among-spherical-cylindrical-and-rectangular-coordinates`, `surfaces-of-constant-coordinate`, `triple-integral`, `triple-integral-over-a-general-region`, `volume-by-triple-integral`, `average-value-of-a-function-of-three-variables`, `sphere`, `ellipsoid`, `elliptic-cone`, `elliptic-paraboloid`.

## Colour

`region` for B, E, D and the cylindrical and spherical boxes; `surface` for the cones, spheres, cylinders, paraboloids and planes that bound a solid; `function` for f, g and u₁, u₂; `angle` for θ and φ (`\ktheta`, `\kphi`); `integral` for ∭, V and every value; `point` for a point P in cylindrical or spherical coordinates. ρ, r and z are coordinates, in ink. No referents.

## Figures

- `sim-cylindrical-point` · Figure 15.50 · `cylindrical-coordinate-system` · depth and variation: the point P(r, θ, z) with its polar shadow (r, θ) in the xy-plane and its height z · still · sliders r (0 to 3, default 2), θ (0 to 2π, default π/3), z (0 to 3, default 2) · 3D free orbit, pitch 0.1 to 1.4. Readout x = r cos θ, y = r sin θ, z with numbers.
- `sim-cylindrical-box` · Figure 15.51 · `triple-integral-in-cylindrical-coordinates` · depth and variation: the cylindrical box 1 ≤ r ≤ 2, 0 ≤ θ ≤ π/2, 0 ≤ z ≤ 2 (a stand-in) cut into l m n cylindrical subboxes, one outlined with its sides Δr, r Δθ and Δz · still · sliders l, m, n (1 to 6) · 3D free orbit. Readout ΔV ≈ r* Δr Δθ Δz with numbers, beside the sum ½(b² − a²)(β − α)(d − c).
- `fig-cylinder-sphere` · Figure 15.52 · `fubinis-theorem-in-cylindrical-coordinates` · standardisation: Example 15.44's region inside r = 2 sin θ under the sphere of radius 4, a still copy, locked.
- `fig-cone-paraboloid` · Figure 15.53 · `fubinis-theorem-in-cylindrical-coordinates` · standardisation: Example 15.45's region between the cone z = r and the paraboloid z = 2 − r², a still copy, locked.
- `fig-sphere-cylinder` · Figure 15.54 · `fubinis-theorem-in-cylindrical-coordinates` · standardisation: Example 15.46's region inside r = 1 under the sphere r² + z² = 4, a still copy, locked; readout 2π(8/3 − √3).
- `sim-spherical-point` · Figure 15.55 · `spherical-coordinate-system` · depth and variation: P(ρ, θ, φ), the segment OP of length ρ, the angle φ from the positive z-axis and θ in the xy-plane · still · sliders ρ (0 to 3), θ (0 to 2π), φ (0 to π) · 3D free orbit. Readout x = ρ sin φ cos θ, y = ρ sin φ sin θ, z = ρ cos φ.
- `sim-spherical-surfaces` · Figure 15.56 · `surfaces-of-constant-coordinate` · depth: the surfaces ρ = c (a sphere), φ = c (a half-cone) and θ = c (a half-plane), a choice, with c on a slider · still · choice surface (ρ = c, φ = c, θ = c); slider c (its range set by the choice) · 3D free orbit.
- `sim-spherical-element` · Figure 15.57 · `volume-element-in-spherical-coordinates` · depth and variation: the spherical box at (ρ, θ, φ) with sides Δρ, ρΔφ and ρ sin φ Δθ; moving it toward the pole or the origin shrinks the sides that carry ρ and sin φ · still · sliders ρ (0.6 to 2.4), φ (0.2 to π − 0.2) · 3D free orbit. Readout ΔV ≈ ρ² sin φ Δρ Δφ Δθ against the box's exact volume.
- `fig-cone-hemisphere` · Figure 15.58 · `fubinis-theorem-for-spherical-coordinates` · standardisation: Example 15.48's region inside φ = π/6 under ρ = 2, a still copy, locked.
- `fig-cone-sphere` · Figure 15.59 · `fubinis-theorem-for-spherical-coordinates` · standardisation: Example 15.49's region inside φ = π/4 and the sphere ρ = cos φ, a still copy, locked; readout π/8.
- `fig-hemisferic-photo` · Figure 15.60 · photo (Example 15.52's l'Hemisfèric), caption and credit kept.
- `fig-balloons` · Figure 15.61 · photo (the project's balloons), caption and credit kept.
- `fig-balloon-model` · Figure 15.62 · standardisation: the project's model, a half sphere of radius 28 ft on a frustum 44 ft tall narrowing to radius 6 ft, a still copy (the project's questions read it), locked 3D with its dimensions.
- `fig-burner-column` · Figure 15.63 · standardisation: the balloon's cross section with the 12-ft-wide, 20-ft-high column above the burner, a still copy, 2D.

Table 15.1 stays in the text.

## Exercises

- Checkpoints 15.27–15.32 inline after their examples; the book's hints as `hint`; corrections under Checkpoints 15.29 and 15.30 (their regions).
- Section exercises 241–296: the 25 keyed odd ones kept. Unkeyed show exercises kept with AI approaches: 247, 248, 273, 274, 275 (with corrections to 273, 274 and 275 under their cards). The other unkeyed ones left out and named.
- Review exercises 418 (true or false, with an AI approach), 427, 437 and 439 held here, `source_section` 15.7.

## Extra simulations (rule 15)

None beyond the figures: the coordinate points, boxes, constant surfaces and volume element are the ideas the section draws.

## Wanted at chapter level

- forms: `eq-cylindrical-riemann`, `eq-cylindrical-conversion` → `15.5-fs-id1167793784735`; `eq-fubini-cylindrical` → `15.5-fs-id1167794226649`; `eq-cylindrical-general-region` → `15.5-cylindrical-general`; `eq-spherical-volume-element` → `15.5-volume-element`; `eq-spherical-riemann` → `15.5-fs-id1167793456296`; `eq-fubini-spherical` → `15.5-fs-id1167793424399`; `eq-spherical-general-region` → `15.5-spherical-general`.
- variables of 15.5 anchored at build.
- Review 418, 427, 437, 439 placed here.
