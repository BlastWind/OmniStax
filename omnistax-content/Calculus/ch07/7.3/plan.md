# Plan: 7.3 Trigonometric Substitution (m53659)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-12. Template: `ch01/1.1`.

One objective, an opening paragraph, three strategy notes, Figures 7.4–7.10, Examples 7.21–7.27, three checkpoints (7.14–7.16), three Key Concepts, 56 section exercises (28 keyed), one glossary term.

## Sub-concepts (page headers)

0. `trigsub-intro`: introduces `trigonometric-substitution` at its {term}.
1. `sine` **Integrals Involving √(a² − x²)**: the motivating ∫√(9 − x²), the argument from the domain, the paragraph `reference-triangle` with Figure 7.4, the strategy note `sine-strategy`, Examples 7.21 (Figure 7.5), 7.22 (Figure 7.6), 7.23 (two ways), Checkpoint 7.14.
2. `tangent` **Integrating Expressions Involving √(a² + x²)**: the strategy note `tangent-strategy`, Figure 7.7, Example 7.24 (Figure 7.8), Example 7.25 (x = sinh θ), Example 7.26 (arc length), Checkpoint 7.15.
3. `secant` **Integrating Expressions Involving √(x² − a²)**: the strategy note `secant-strategy`, Figure 7.9, Example 7.27 (Figure 7.10), Checkpoint 7.16.

The Integral Calculator is linked at Example 7.21's "substitutions" (`?expr=sqrt(9-x^2)`).

## Concept nodes

Introduced: `trigonometric-substitution` (definition), `reference-triangle` (idea), `sine-substitution`, `tangent-substitution`, `secant-substitution` (skills; forms `eq-sine-substitution`, `eq-tangent-substitution`, `eq-secant-substitution`). Uses: `trigonometric-integral`, `domain`, `range`, `inverse-trigonometric-functions`, `integrating-products-and-powers-of-sine-and-cosine`, `integration-by-substitution`, `hyperbolic-functions`, `reconciling-equivalent-antiderivatives`, `arc-length`, `area-under-the-curve`, `limits-of-integration`.

## Colour, referents and function tokens

`angle` for θ (`\ktheta`; dθ stays ink), `integral` for the area A of Example 7.27 and the readouts, `function` for f. a, x stay ink. No referents. Function tokens on the examples' integrands.

## Figures

- `sim-triangle-sine` · Figure 7.4 · `sine-substitution`, `reference-triangle` · value add: variation: x dragged between −a and a reshapes the triangle (hypotenuse a, opposite side x, third side √(a² − x²)), θ = sin⁻¹(x/a) follows, and for x < 0 it turns below the axis · still · sliders a (1 to 4, default 3) and x (range −a to a) · headline: sin θ = x/a and θ · 2D, no graph. Readout √(a² − x²) = a cos θ with numbers.
- `fig-triangle-nine`, `fig-triangle-four`, `fig-triangle-one` · Figures 7.5, 7.6, 7.8 · faithful copies drawn live with the book's labels (the hypotenuse of 7.6 unlabelled, as printed) · standardisation only · still, no controls.
- `sim-triangle-tangent` · Figure 7.7 · `tangent-substitution` · variation: x over every real value, the hypotenuse √(a² + x²) = a sec θ · sliders a, x · 2D.
- `sim-triangle-secant` · Figure 7.9 · `secant-substitution` · variation: the book's two triangles as one, first quadrant for x ≥ a and second for x ≤ −a (θ obtuse, tan θ negative), nothing between −a and a; specials at ±a · sliders a, x · 2D.
- `sim-area-secant` · Figure 7.10 · `secant-substitution`, `area-under-the-curve` · variation: the region under √(x² − 9) from 3 to b, the limits carried to 0 and sec⁻¹(b/3), at b = 5 the 10 − (9/2) ln 3 of Example 7.27 · slider b (3.2 to 7, special at 5) · graph alone · 2D.

## Exercises

- Checkpoints 7.14–7.16 inline after Examples 7.23, 7.26, 7.27.
- Section exercises 126–181: 28 odd keyed and kept; 168 and 170 kept with AI-marked approaches; 26 even computational ones left out.
- Review exercises 413, 419 held here (`source_section` 7.7); 416 left out.
- Corrections: "dx = a cos θ" (missing dθ, `c-dx`), Example 7.26's side note √(1 + 4x²) = tan θ (`c-ex726`), Example 7.27's "tan²θ = 1 − sec²θ" (`c-ex727`).

## Extra simulations (rule 15)

None beyond the three triangle Sims: an arc-length or sinh Sim would repeat Examples 7.25–7.26's algebra.

## Wanted at chapter level

- forms `eq-sine-substitution` → `7.3-sine-strategy`, `eq-tangent-substitution` → `7.3-tangent-strategy`, `eq-secant-substitution` → `7.3-secant-strategy`.
- variables `7.3/x`, `7.3/θ`, `7.3/a` → `7.3-sine`; `7.3/A`, `7.3/f` → Example 7.27's id.
