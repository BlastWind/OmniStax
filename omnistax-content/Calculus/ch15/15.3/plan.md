# Plan: 15.3 Double Integrals in Polar Coordinates (m53966)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-13. Template: `ch01/1.1`.

Four objectives, an opening paragraph, one definition note (the double integral over a polar rectangle), one theorem note (Double Integrals over General Polar Regions), Examples 15.24–15.35, six checkpoints (15.17–15.22), twelve figures (15.28–15.39), five Key Concepts, two Key Equations, 59 section exercises (122–180, 28 keyed), one glossary term. Numbered equations 15.8, 15.9.

## Sub-concepts (page headers)

0. `polar-intro`: the opening paragraph.
1. `polar-rectangles` **Polar Rectangular Regions of Integration** (the book's): the polar rectangle and its subrectangles (Figure 15.28), the area ΔA = r* Δr Δθ, the polar box (Figure 15.29), the double Riemann sum, the definition (Equation 15.8), the iterated integral and the conversion dA = r dr dθ, Examples 15.24–15.27 (Figures 15.30, 15.31), Checkpoints 15.17, 15.18.
2. `general-polar` **General Polar Regions of Integration** (the book's): Figure 15.32, the theorem (Equation 15.9), Example 15.28 (Figure 15.33), Checkpoint 15.19.
3. `polar-areas-volumes` **Polar Areas and Volumes** (the book's): the volume formulas, Examples 15.29–15.32 (Figures 15.34–15.37), Checkpoint 15.20, the area formula, Examples 15.33, 15.34 (Figures 15.38, 15.39), Checkpoint 15.21, Example 15.35, Checkpoint 15.22.

## Concept nodes

Introduced: `polar-rectangle` (`eq-polar-subrectangle-area`), `double-integral-over-a-polar-rectangle` (`eq-double-integral-polar-rectangle`, Equation 15.8), `double-integral-in-polar-coordinates` (`eq-polar-iterated-integral`, `eq-polar-double-integral-conversion`), `double-integral-over-a-general-polar-region` (`eq-general-polar-region`, Equation 15.9), `polar-volume-and-area` (`eq-polar-volume`, `eq-polar-area-double`). Uses: `polar-coordinate-system`, `converting-points-between-coordinate-systems`, `polar-equation`, `cardioid`, `rose`, `double-riemann-sum`, `double-integral`, `fubinis-theorem`, `improper-double-integral`.

## Colour

`region` for R, D, the polar rectangle and its subrectangles; `angle` for θ (`\ktheta`) and the θ slider; `function` for f and h₁, h₂; `integral` for ∬, V, A, ΔA's sum and the boxes; `surface` for the paraboloids and the cone; `curve` for a bounding polar curve r = h(θ) drawn on its own. Referents: Example 15.34's circle `circle-3cos` (r = 3 cos θ) and cardioid `cardioid-1cos` (r = 1 + cos θ), drawn in `sim-circle-cardioid` and marked in the example's text.

## Figures

The flat polar figures share one drawing: the polar grid, the region filled in `region`, its bounding curves with their equations, and a ray at the angle θ whose segment inside the region runs from the inner bound to the outer one, the inner integral's limits; the readout writes them at the live θ.

- `sim-polar-rectangle` · Figure 15.28 · `polar-rectangle` · variation: m and n cut the polar rectangle 1 ≤ r ≤ 3, π/6 ≤ θ ≤ 2π/3 into polar subrectangles; one subrectangle R_ij is outlined with its sides r_{i−1}Δθ, r_iΔθ and Δr, the book's close-up (c) · still · sliders m (1 to 8, default 4), n (1 to 8, default 5) · readout ΔA = ½Δr(r_{i−1}Δθ + r_iΔθ) = r*_ij Δr Δθ with numbers, and the sum of the ΔA, the rectangle's area · 2D (stand-in rectangle; the book's figure prints none).
- `sim-polar-boxes` · Figure 15.29 + 15.34 · `double-integral-over-a-polar-rectangle`, `polar-volume-and-area` · variation and depth: the polar boxes f(r*, θ*) r* Δr Δθ under Example 15.29's paraboloid z = 1 − x² − y² over the unit disk, finer with m and n, their sum closing on π/2 · still · sliders m (1 to 10, default 4), n (2 to 24, default 8) · 3D free orbit, pitch 0.1 to 1.4; no buttons. Readout ΣΣ f(r*ᵢⱼ, θ*ᵢⱼ) r*ᵢⱼ Δr Δθ = (sum), ∬_R (1 − x² − y²) dA = π/2.
- `fig-semicircular-band` · Figure 15.30 · `polar-rectangle` · variation: Example 15.24's band 1 ≤ r ≤ 3, 0 ≤ θ ≤ π with the ray at θ · still · slider θ (0 to π) · 2D.
- `fig-annulus` · Figure 15.31 · `double-integral-in-polar-coordinates` · variation: Example 15.27's half annulus 1 ≤ r ≤ 2, π/2 ≤ θ ≤ 3π/2 with the ray · still · slider θ · readout and −14/3 · 2D.
- `sim-general-polar` · Figure 15.32 · `double-integral-over-a-general-polar-region` · variation: a general polar region between r = h₁(θ) and r = h₂(θ) for α ≤ θ ≤ β, the ray's segment changing length with θ · still · slider θ · 2D. Stand-in h₁(θ) = 0.7 + 0.25 sin 3θ, h₂(θ) = 2.2 + 0.4 cos 2θ, α = π/8, β = 7π/8 (the book's figure prints none).
- `fig-cardioid-half` · Figure 15.33 · `double-integral-over-a-general-polar-region`, `cardioid` · variation: Example 15.28's upper half cardioid, 0 ≤ r ≤ 1 + cos θ · still · slider θ · readout and 8/5 · 2D.
- `fig-paraboloid-cap` · Figure 15.35 · `polar-volume-and-area` · standardisation: Example 15.30's solid under z = 4 − x² − y² over the disk (x − 1)² + y² ≤ 1, a still copy (kind `figure`), locked view; readout 5π/2.
- `fig-paraboloid-triangle` · Figure 15.36 · `polar-volume-and-area` · standardisation: Example 15.31's solid under z = x² + y² over the triangle, a still copy, locked; readout 4/3.
- `sim-cone-volume` · Figure 15.37 · `polar-volume-and-area` · variation: the cone z = h − (h/a)√(x² + y²) of Example 15.32's Analysis, its radius a and height h on sliders; V = ∫₀^{2π}∫₀ᵃ (h − (h/a)r) r dr dθ = πa²h/3, 8π/3 at the example's a = h = 2 · still · sliders a (0.5 to 3, default 2), h (0.5 to 3, default 2) · 3D locked: turning the cone adds nothing to its volume.
- `sim-rose-petal` · Figure 15.38 · `polar-volume-and-area`, `rose` · variation: the rose r = cos 4θ, one petal for −π/8 ≤ θ ≤ π/8 shaded, the ray's segment 0 ≤ r ≤ cos 4θ · still · slider θ (−π/8 to π/8) · readout ½∫cos²4θ dθ over the petal = π/16, eight petals π/2 · 2D.
- `sim-circle-cardioid` · Figure 15.39 · `polar-volume-and-area` · variation: the region inside both r = 3 cos θ and r = 1 + cos θ; the ray's outer end lies on the cardioid up to θ = π/3, where the curves meet, and on the circle beyond · still · slider θ (−π/2 to π/2, special at ±π/3) · readout A = 5π/4 · 2D. The circle and cardioid are the referents.

Images: exercise images (polar rectangles, regions, the spherical ring, the caps) stay in their cards.

## Exercises

- Checkpoints 15.17–15.22 inline after their examples; the book's hints as `hint`.
- Section exercises 122–180: the 28 keyed odd ones kept. Unkeyed show exercises kept with AI approaches: 170, 172, 174, 176, 178, 179, 180. The other unkeyed even ones left out and named.
- Review exercises 429 and 431 held here, `source_section` 15.7.

## Extra simulations (rule 15)

None: the Riemann boxes in polar form, the rays of the general region and the volume Sims cover every idea of the section.

## Wanted at chapter level

- forms: `eq-polar-subrectangle-area` → `15.3-subrectangle-area`; `eq-double-integral-polar-rectangle` → `15.3-fs-id1167793270734`; `eq-polar-iterated-integral`, `eq-polar-double-integral-conversion` → `15.3-polar-iterated`; `eq-general-polar-region` → `15.3-fs-id1167793367134`; `eq-polar-volume`, `eq-polar-area-double` → `15.3-polar-areas-volumes`.
- variables of 15.3 anchored at build.
- Review 429, 431 placed here.

## Derivations

- Polar Rectangular Regions of Integration, ‘the area of the polar subrectangle R_ij is …’ · score 2 · built as drv-polar-subrectangle-area, the area ΔA = r*ΔrΔθ and the thin box’s volume; the double Riemann sum and its limit are the book’s definitions and stay, as does the one-line substitution into ∬f(r cos θ, r sin θ) r dr dθ
- Example 15.32, Analysis: the volume of an arbitrary cone · score 3 · not built: three hidden moves of the section’s own method, under the bar
