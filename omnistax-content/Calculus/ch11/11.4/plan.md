# Plan: 11.4 Area and Arc Length in Polar Coordinates (m53840)

Source: `source.md`, converted with `tools/convert.py 11`. Status: plan; config 2 waives the review for this run (Chen, 2026-10-12), built the same day, decisions reported afterwards. Template: `ch01/1.1` for conventions.

Two objectives, an opening paragraph, two theorem notes (Equations 11.9, 11.10), Examples 11.16–11.18, three checkpoints (11.15–11.17), Figures 11.39–11.42, two Key Equations, three Key Concepts, 67 section exercises (33 keyed). One page.

## Sub-concepts (page headers)

The book's two headers apply and are kept.

0. `intro` (no header): the opening paragraph, area and arc length in rectangular coordinates recalled.
1. `areas` **Areas of Regions Bounded by Polar Curves**: the partition into sectors (Figure 11.39), the sector's area (Figure 11.40), the Riemann sum and its limit, the theorem note `fs-id1167794048381` (Equation 11.9), Example 11.16 (Figure 11.41), Checkpoint 11.15, the paragraph on areas between curves, Example 11.17 (Figure 11.42), Checkpoint 11.16, the intersection at the pole. Introduces `area-of-a-sector`, `area-of-a-region-bounded-by-a-polar-curve`, `area-between-two-polar-curves`.
2. `arc-length` **Arc Length in Polar Curves**: the derivation from 11.2's arc length, the theorem note `fs-id1167793367213` (Equation 11.10), Example 11.18, Checkpoint 11.17. Introduces `arc-length-of-a-polar-curve`.

Examples keep the book's ids and numbers (11.16 `fs-id1167793900982`, 11.17 `fs-id1167793240668`, 11.18 `fs-id1167793301176`). The text's "[ref] to find the area between two polar curves" names the theorem note, read as its title.

## Concept nodes

Introduced here: `area-of-a-sector`, `area-of-a-region-bounded-by-a-polar-curve`, `area-between-two-polar-curves`, `arc-length-of-a-polar-curve`. Uses: `definite-integral`, `fundamental-theorem-of-calculus`, `arc-length-of-a-function-of-x`, `riemann-sum`, `radian`, `polar-equation`, `rose`, `cardioid`, `power-reducing-identities`, `double-angle-formulas`, `arc-length-of-a-parametric-curve`, `parameterization-of-a-polar-curve`, `pythagorean-identities`.

## Colour, referents and function tokens

Categories: `curve` for the polar curves; `integral` for A, Aᵢ, Aₙ, L and the sectors, the swept area and the traced length; `angle` for θ, Δθ and θᵢ where a figure marks them; `region` for the region between two curves where a figure shades it as a set (the swept area wears `integral`). Referents: `circle-6` (the circle r = 6 sin θ) and `cardioid-2` (the cardioid r = 2 + 2 sin θ) of Example 11.17 and Figure 11.42, the text marking "the circle", "the cardioid", "the red graph", "the blue graph", "the outer function", "the inner function"; the area between them wears `integral`. Function tokens: none.

## Figures

- `sim-polar-sectors` · Figure 11.39 · `area-of-a-region-bounded-by-a-polar-curve` · variation: the partition of [α, β] into n equal angles, each sector of radius rᵢ = f(θᵢ) (the book's choice), the sum Aₙ closing on ½∫r² dθ as n grows; a stand-in curve r = 1 + θ on [0.2, 1.4] in the first quadrant, since the book draws a generic one · arrows: none · still · slider n (ink, 1 to 40, default 6) · "n = 6 sectors: Aₙ = 2.73; the area is 2.85" · 2D, one scale. Readout: Aₙ = Σ ½Δθ (f(θᵢ))² and A = ½∫_α^β (f(θ))² dθ with the numbers.
- `sim-sector` · Figure 11.40 · `area-of-a-sector` · variation: a sector of radius r and central angle θ is the fraction θ/(2π) of the circle · still · sliders θ (angle, 0 to 2π, default π/3) and r (ink, 0.5 to 3, default 2) · "θ = 1.05 is 0.17 of a turn: A = ½θr² = 2.09" · 2D. Readout A = (θ/(2π))πr² = ½θr².
- `sim-petal-area` · Figure 11.41 · `area-of-a-region-bounded-by-a-polar-curve`, `rose` · variation: the area swept by the ray from θ = 0 under r = 3 sin 2θ, growing to one petal's 9π/8 at θ = π/2 · still · slider θ (angle, 0 to π/2, default π/2, special at π/2) with the grip · "θ = π/2: the petal's area is 9π/8 ≈ 3.53" · 2D. Readout A(θ) = ½∫₀^θ 9 sin² 2u du = (9/4)(θ − ¼ sin 4θ).
- `sim-between-curves` · Figure 11.42 · `area-between-two-polar-curves` · variation: the area inside `circle-6` and outside `cardioid-2` swept from θ = π/6, where they meet, to 5π/6, where they meet again, 4π when done; the pole, where they meet for different θ, marked · still · slider θ (angle, π/6 to 5π/6, default 5π/6, specials at π/6, π/2 and 5π/6) · "θ = 5π/6: the area between them is 4π ≈ 12.57" · 2D. Readout: A(θ) = ½∫_{π/6}^θ [6 sin u]² du − ½∫_{π/6}^θ [2 + 2 sin u]² du with the numbers.
- `sim-polar-arc-length` · Sim · `arc-length-of-a-polar-curve` · variation: the cardioid r = 2 + 2 cos θ of Example 11.18 traced from θ = 0, the length so far L(θ) = ∫₀^θ √(r² + (dr/dθ)²) dθ = 8 sin(θ/2) on [0, π] and 16 − 8 sin(θ/2) beyond, 16 at 2π; the theorem has no figure in the book (root rule 14) · still · slider θ (angle, 0 to 2π, default π, specials at π and 2π) with the grip · "θ = π: half the cardioid, length 8.00 of 16" · 2D. Readout: L(θ) with the integrand's numbers.

Exercise figures: none. Photographs: none.

## Exercises

- Checkpoints 11.15–11.17 inline after Examples 11.16–11.18: number answers 3π/2, 4π/3 + 2√3 and 3π.
- Section exercises 188–254: the 33 keyed odd ones kept (number answers where the key is one number); 234 (verify dy/dθ, unkeyed) and 254 (the cissoid's asymptote, unkeyed) kept with AI-marked approaches; the 32 other even ones are computational and left out.
- Review exercises held here (`source_section` 11.5): 335 (the tangent to r = 3 + cos 2θ at 3π/4, keyed, beside this section's own polar tangents); 324 (the length of r = θ/2 on [0, 3π], unkeyed true or false) kept with an AI-marked approach. 338 and 340 (unkeyed) left out.
- Keys checked numerically (209, 211, 213, 223, 227 and the tangents 237–249); 243's key reads "The slope is undefined at (4 + π)/(4 − π)": the slope is (4 + π)/(4 − π) (a correction under the card).

## Corrections

- `c-circle-3`: "The circle r = 3 sin θ is the red graph": the circle of the example is r = 6 sin θ.
- `c-e243-slope` under exercise 243, as above.

## Extra simulations (rule 15)

`sim-polar-arc-length` above (the theorem's figure). Judged and not built: a polar tangent-slope figure for exercises 235–253 (the text does not teach it; the exercises derive it).

## Wanted at chapter level

- forms `eq-sector-area` → `11.4-sector-term`, `eq-polar-area` → `11.4-fs-id1167793300455`, `eq-polar-area-sum` → `11.4-polar-area-limit`, `eq-polar-arc-length` → `11.4-fs-id1167793300660`.
- variables `11.4/f`, `/r`, `/θ`, `/n` → `11.4-partition`; `/A` → `11.4-fs-id1167794048381`; `/L`, `/f_prime` → `11.4-fs-id1167793367213`.

Applied in the chapter pass (2026-10-13): every form and variables anchor above set with `ost set` (anchors resolve, `ost check` clean); the review rows written into section.json with `source_section` 11.5.

## Derivations

- Areas of Regions Bounded by Polar Curves · (11.9) · score 3 · built as drv-area-bounded-by-a-polar-curve (the sector's area, the ith sector, the Riemann sum and its limit; form eq-polar-area-sum and the coverage row of riemann-sum re-anchored to it)
- Example 11.17 · score 2 · not built: a worked example of (11.9)
- Arc Length in Polar Curves · (11.10) · score 3 · built as drv-arc-length-of-a-polar-curve
- Example 11.18 · score 2 · not built: a worked example of (11.10)
