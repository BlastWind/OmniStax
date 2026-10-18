# Plan: 12.7 Cylindrical and Spherical Coordinates (m53875)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-13. Template: `ch01/1.1`.

Four objectives, an opening paragraph, two definitions, two theorems, Examples 12.60–12.67, seven checkpoints (12.55–12.61), seventeen figures (12.89–12.105), Key Concepts, 60 section exercises (30 keyed), the 27 Chapter Review Exercises (423–449), two glossary terms. No Key Equations and no numbered equations.

## Sub-concepts (page headers)

0. `coordinates-intro`: the opening paragraph.
1. `cylindrical` **Cylindrical Coordinates**: the definition with Figure 12.89 + 12.90 + 12.93, the conversion theorem, θ's quadrant, the surfaces of constant coordinate with Figure 12.91 + 12.92 + 12.99, Example 12.60, Checkpoint 12.55, the link to Chapter 11, Example 12.61, Checkpoint 12.56, physics and r = 5, Example 12.62 with Figures 12.94, 12.95, 12.96, Checkpoint 12.57.
2. `spherical` **Spherical Coordinates**: the definition with Figure 12.97 + 12.98 + 12.100, the conversion theorem, the derivation, the surfaces ρ = c, θ = c, φ = c (Figure 12.99 folded into `sim-coordinate-surfaces`), Example 12.63, Checkpoint 12.58, Example 12.64, Example 12.65 with Figures 12.101, 12.102, 12.103, Checkpoint 12.59, latitude and longitude with Figure 12.104, Example 12.66, Checkpoint 12.60, choosing a system, Example 12.67 with Figure 12.105 (photos), Checkpoint 12.61 (image kept).

## Concept nodes

Introduced: `cylindrical-coordinate-system`, `conversion-between-cylindrical-and-rectangular-coordinates` (`eq-cylindrical-to-rectangular`, `eq-rectangular-to-cylindrical`), `spherical-coordinate-system`, `conversion-among-spherical-cylindrical-and-rectangular-coordinates` (`eq-spherical-to-rectangular`, `eq-rectangular-to-spherical`, `eq-spherical-to-cylindrical`), `surfaces-of-constant-coordinate`, `latitude-and-longitude`, `choosing-a-coordinate-system`. Uses: `polar-coordinate-system`, `converting-points-between-coordinate-systems`, `angular-coordinate`, `cylindrical-surface`, `sphere`, `elliptic-cone`, `inverse-trigonometric-functions`.

## Colour

`angle` for θ (`\ktheta`) and φ (`\kphi`); `point` for P and the plotted point; `surface` and `plane` for the coordinate surfaces drawn. r, ρ, z and x, y ink (coordinates). No referents.

## Figures

Four live 3D scenes; the example stills locked.

- `sim-cylindrical` · Figure 12.89 + 12.90 + 12.93 · `cylindrical-coordinate-system`, `conversion-between-cylindrical-and-rectangular-coordinates` · variation and depth: sliders r, θ, z place the point; its projection in the xy-plane, r from the origin, θ's arc from the x-axis and z dropped to the plane; the right triangle of Figure 12.90 in the floor · arrows none · still · sliders r (0 to 6, default 4), θ (0 to 2π, default 2π/3, detents π/6), z (−4 to 4, default −2) · headline (r, θ, z) and (x, y, z) live · 3D live.
- `sim-coordinate-surfaces` · Figure 12.91 + 12.92 + 12.99 · `surfaces-of-constant-coordinate` · depth: a choice of system (rectangular, cylindrical, spherical) and of the coordinate held constant, a slider c; x = c a plane, r = c a cylinder, θ = c a half-plane, ρ = c a sphere, φ = c a half-cone · still · choice system, choice coordinate, slider c · headline what the surface is · 3D live.
- `fig-half-plane-quarter` · Figure 12.94 · faithful copy, locked: θ = π/4.
- `fig-sphere-3` · Figure 12.95 · faithful copy, locked: r² + z² = 9.
- `fig-cone-z-r` · Figure 12.96 · faithful copy, locked: z = r.
- `sim-spherical` · Figure 12.97 + 12.98 + 12.100 · `spherical-coordinate-system`, `conversion-among-spherical-cylindrical-and-rectangular-coordinates` · variation and depth: sliders ρ, θ, φ; ρ from the origin, φ's arc from the z-axis, r = ρ sin φ in the floor and z = ρ cos φ up, θ's arc · still · sliders ρ (0 to 10, default 8), θ (0 to 2π, default π/3), φ (0 to π, default π/6) · headline (ρ, θ, φ), (x, y, z) and (r, θ, z) live · 3D live.
- `fig-half-plane-third` · Figure 12.101 · faithful copy, locked: θ = π/3.
- `fig-half-cone` · Figure 12.102 · faithful copy, locked: φ = 5π/6.
- `fig-sphere-6` · Figure 12.103 · faithful copy, locked: ρ = 6.
- `sim-latitude-longitude` · Figure 12.104 · `latitude-and-longitude` · variation: sliders latitude and longitude place a point on a sphere of radius 4000 mi with the equator and prime meridian drawn; φ = 90° − latitude, θ = longitude · still · sliders latitude (−90° to 90°, default 40° N), longitude (−180° to 180°, default −83°) · headline (4000, −83°, 50°) live · 3D live.
- `fig-objects` · Figure 12.105 · photo, kept: Example 12.67 reads it; the caption is the five credits, kept whole.

Images: checkpoint answer images (004, 008, 012) and the star chart (022) stay as printed.

## Exercises

- Checkpoints 12.55–12.61 inline, hints as `hint`.
- Section exercises 363–422: odd keyed kept; even ones left out unless proof/explain/true-false (approach).
- Review exercises: 441, 443 held here; the others go to their sections (exploration.md); the eleven unkeyed computational review exercises are left out and named here.

## Corrections

- "Figure 12.96 also shows that ρ² = r² + z² …": the cone of Example 12.62 is cited; the triangles that show it are Figure 12.98. Marker and note at the spot.

## Extra simulations (rule 15)

None beyond the folds.

## Wanted at chapter level

- forms anchored to the two theorems' notes.
- variables of 12.7 anchored at build.

## Derivations

- Theorem, Conversion between Cylindrical and Cartesian Coordinates · score 5 · not built: the polar conversion of 11.3 with z carried along, a restatement of a result the book works there.
- Converting among Spherical, Cylindrical, and Rectangular Coordinates (the paragraph after the Theorem) · score 5 · built as drv-spherical-conversion: x and y through r = ρ sin φ and the cylindrical conversion, ρ² through the second triangle, and φ solved from z = ρ cos φ with ρ = √(r² + z²) substituted (the rectangular form of the Theorem added as the last line); the prose kept, the derivation after it.
- Example 12.65(b), the half-cone φ = 5π/6 · score 1 · not built: the section's conversion substituted.
- Example 12.65(d), ρ = sin θ sin φ · score 1 · not built: the section's conversion substituted.
