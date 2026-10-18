# Plan: 16.2 Line Integrals (m54012)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-12. Template: `ch01/1.1`.

Four objectives, two opening paragraphs, three definitions, four theorems (one proof), Examples 16.14–16.26, eleven checkpoints (16.13–16.23), thirteen figures (16.12–16.24), seven numbered equations (16.5–16.11), five Key Concepts, three Key Equations, 60 section exercises (30 keyed), eight glossary terms.

## Sub-concepts (page headers)

0. `li-intro`, the book's two opening paragraphs.
1. `scalar` **Scalar Line Integrals**: the line integral, the definition (Equation 16.5), the sheet, Example 16.14, the change to t (Equations 16.6, 16.7, 16.8), Examples 16.15–16.17, arc length.
2. `vector` **Vector Line Integrals**: orientation, closed curves, work, the definition, Equation 16.9, Examples 16.18, 16.19, the P dx + Q dy + R dz form (Equation 16.10), Example 16.20 (rectangle), piecewise smooth curves, the properties.
3. `applications` **Applications of Line Integrals**: the mass of a wire (Example 16.21), work (Example 16.22).
4. `flux` **Flux and Circulation**: the flux definition and theorem (Equation 16.11) with its proof, Example 16.24, circulation, Examples 16.25, 16.26.

## Concept nodes

Introduced: `line-integral`, `scalar-line-integral` (`eq-scalar-line-integral`), `scalar-line-integral-calculation` (three forms), `arc-length-as-a-line-integral`, `orientation-of-a-curve`, `closed-curve`, `work-done-by-a-vector-field`, `vector-line-integral` (three forms), `piecewise-smooth-curve`, `properties-of-vector-line-integrals` (four forms), `mass-of-a-wire`, `flux-across-a-curve` (two forms), `circulation`. Uses: `definite-integral`, `riemann-sum`, `smooth-curve`, `arc-length-of-a-space-curve`, `reparameterization`, `orientation`, `work`, `principal-unit-tangent-vector`, `dot-product`, `density-function`, `conservative-vector-field`.

## Colour

F, G, v wear `vector-field`; C, C₁ … C₄ and r(t) `curve`; T, N, n, r′(t) `vector`; f, P, Q, R, ρ `function`; every line integral and its sum, W and the sheet `integral`; the graph of f `surface`. No referents (the rectangle's sides are told apart by labels).

## Figures

- `sim-scalar-sheet` · Figure 16.12 + 16.13 + 16.14 · `scalar-line-integral` · 3D visualization and variation: the upper half of the unit circle C, lifted to C′ on the graph of f, and the sheet between them cut into n pieces of arc length π/n with heights f(Pᵢ*), the three book pictures of one sheet; choice f = 2 (Example 16.14, area 2π) or the stand-in f = 1 + y (π + 2) · arrows none · still · choice f; slider n (1 to 24, default 4) · readout Σ f(Pᵢ*)Δsᵢ beside ∫_C f ds · 3D mathematical, free orbit, pitch 0.05 to 1.4 (the sheet stands on the xy-plane, never seen from beneath); no buttons.
- `sim-arc-piece` · Figure 16.15 · `scalar-line-integral-calculation` · variation: one piece of r(t) = ⟨t, t²/2⟩ (stand-in: the book draws a generic curve) from t to t + Δt beside r′(t*)Δt; shrinking Δt, Δs and ‖r′(t*)‖Δt agree · arrows symbolic · still · sliders t (−2 to 1, default 0.2), Δt (0.05 to 1.5, default 1.3) · readout Δs = ∫‖r′‖dt ≈ ‖r′(t*)‖Δt and their ratio · graph alone · 2D.
- `fig-oriented-curves` · Figure 16.16 · photo, kept as the book's image: two sketched curves with arrows and no function.
- `sim-work-sum` · Figure 16.17 + 16.18 · `vector-line-integral`, `orientation-of-a-curve`, `properties-of-vector-line-integrals` · variation: the upper unit semicircle in a field, n pieces, F at each sample point and the term F · T Δs as a bar along the normal (outward when positive, COLOR.md); choice F (⟨−y, x⟩ of Example 16.18, or ⟨x − 2y, y − x⟩, Example 16.20's field), choice C or −C (Example 16.19) · arrows symbolic · still · choices F and curve, slider n (2 to 24, default 6) · readout Σ F · T Δs and ∫_C F · dr with the sign of the orientation · graph alone · 2D.
- `fig-piecewise-curve` · Figure 16.19 · photo, kept as the book's image: three sketched pieces with no function.
- `fig-rectangle-field` · Figure 16.20 · faithful copy, still (kind figure): Example 16.20's rectangle and field, sides C₁–C₄ labeled.
- `fig-spring-wire` · Figure 16.21 · faithful copy, a locked painted view (kind figure): Example 16.21's spring.
- `sim-work-path` · Figure 16.22 · `work-done-by-a-vector-field` · motion and 3D: an object travels r(t) = ⟨t², t, t⁴⟩ through F = ⟨yz, xy, xz⟩ in 5 s, F and r′(t) drawn at it, the work done so far W(t) = 2t⁷/7 + t⁴/4 + 2t¹⁰/5 growing to 131/140 · arrows kinematic (the object moves) and symbolic (F, r′) · moving, the object along its path · no sliders · readout W(t) with live numbers · 3D mathematical, free orbit, pitch −0.2 to 1.4; no buttons.
- `sim-flux-circulation` · Figure 16.23 + 16.24 · `flux-across-a-curve`, `circulation` · variation: a circle cut into n pieces in a field, F and the outward unit normal N at each sample point; the sums of F · N Δs and F · T Δs close on the flux and the circulation; choice of the section's three closed-curve fields (⟨2x, 2y⟩ on the unit circle, Example 16.24; ⟨−y, x⟩, Example 16.25; ⟨−2, y⟩ on the circle of radius 2, Example 16.26) · arrows symbolic · still · choice F; slider n (3 to 32, default 8) · readout both sums with their limits · graph alone · 2D.

Images: checkpoint and exercise images stay in their cards. Two WebGL scenes (16.12 fold, 16.22) and one locked painted view.

## Exercises

- Checkpoints 16.13–16.23 inline after their examples, hints as `hint`.
- Section exercises 39–98: the 30 odd keyed ones kept; true-or-false 40 and 42 kept with AI approaches; the other 28 even ones, computations, left out.
- Review 437 (a line integral along y = x/2) and 449 (the mass of a semicircular wire) held here.

## Extra simulations (rule 15)

None beyond the folds: the work-sum figure already shows orientation and the sign of each term, and the flux figure shows flux and circulation side by side.

## Corrections

- The subinterval index printed with the letter l ("l ≤ i ≤ n").
- "Circulation line integrals have their own notation: ∫_C F · T ds": the circle the next sentence describes is missing from the printed integral.

## Wanted at chapter level

- forms: `eq-scalar-line-integral` → `16.2-fs-id1167793929737`; `eq-scalar-line-integral-r-prime` → `16.2-fs-id1167793886491`; `eq-scalar-line-integral-calculation` → `16.2-fs-id1167793952322`; `eq-scalar-line-integral-plane` → `16.2-fs-id1167793380173`; `eq-arc-length-line-integral` → `16.2-arc-length-term`; `eq-vector-line-integral` → `16.2-fs-id1167794097258`; `eq-vector-line-integral-calculation` → `16.2-fs-id1167793635294`; `eq-vector-line-integral-differential` → `16.2-fs-id1167794127155`; `eq-work-line-integral` → `16.2-work-term`; `eq-line-integral-sum`, `-constant`, `-reversed`, `-pieces` → `16.2-fs-id1167793559384`; `eq-mass-of-a-wire` → `16.2-wire-term`; `eq-flux-across-a-curve` → `16.2-fs-id1167793460505`; `eq-flux-calculation` → `16.2-fs-id1167793671510`; `eq-circulation` → `16.2-circulation-term`.
- variables: v_vec of 16.2 added (the velocity field).

## Derivations

- Scalar Line Integrals, ‘we can translate ∫_C f ds to an integral … in t’, Equations 16.6 and 16.7 · score 2 · built as drv-scalar-line-integral-in-t
- Scalar Line Integrals, ‘If f(x,y,z) = 1, then …’, arc length as a line integral · score 0 · built as drv-arc-length-line-integral
- Vector Line Integrals, ‘To translate the integral ∫_C F·T ds in terms of t’ · score 1 · built as drv-vector-line-integral-in-t
- Calculating Flux across a Curve, Proof of Equation 16.11 · score 0 · built as drv-flux-across-a-curve
