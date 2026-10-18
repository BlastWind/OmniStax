# Plan: 13.3 Arc Length and Curvature (m53919)

Source: `source.md`, converted with `tools/convert.py 13`. Status: plan; config 2 waives the review for this run (Chen, 2026-10-12), decisions reported afterwards. Template: `ch01/1.1` for conventions.

Three objectives, the opening paragraph, two definition notes and three theorem notes (Equations 13.11–13.19), one proof, two media notes (dropped), Examples 13.9–13.13, Checkpoints 13.9–13.13, Figures 13.6–13.10, five Key Equations, seven Key Concepts, 53 section exercises (26 keyed). One page.

## Sub-concepts (page headers)

The book's four headers apply and are kept.

0. `intro` (no header): the opening paragraph.
1. `arc-length` **Arc Length for Vector Functions**: Chapter 11's formula recalled (linked to 11.2's theorem), the plane and space formulas, the theorem Arc-Length Formulas (Equations 13.11, 13.12), smoothness, Example 13.9 (its table formula linked to the Table of Integrals, config 25), Checkpoint 13.9, the helix's length. Introduces `arc-length-of-a-space-curve`, `smooth-curve`, `arc-length-of-a-helix`.
2. `arc-length-parameterization` **Arc-Length Parameterization**: the arc-length function (Equation 13.13), s′(t) = ‖r′(t)‖, the theorem Arc-Length Function (Equation 13.14), reparameterization by arc length, Example 13.10, Checkpoint 13.10. Introduces `arc-length-function`, `arc-length-parameterization`, `finding-an-arc-length-parameterization`.
3. `curvature` **Curvature**: the road, the inscribed circle (Figure 13.6), the definition note (κ = ‖dT/ds‖), the theorem Alternative Formulas for Curvature (Equations 13.15–13.17) and its Proof, Example 13.11, Checkpoint 13.11. Introduces `curvature`, `alternative-formulas-for-curvature`.
4. `normal-binormal` **The Normal and Binormal Vectors**: the definition note (Equations 13.18, 13.19), B a unit vector, Example 13.12, Checkpoint 13.12, the normal plane, the Frenet frame (Figure 13.7), the osculating plane, the radius of curvature and the osculating circle (Figure 13.8), Example 13.13 (Figures 13.9, 13.10), Checkpoint 13.13. Introduces `principal-unit-normal-vector`, `binormal-vector`, `normal-plane`, `frenet-frame-of-reference`, `osculating-plane`, `radius-of-curvature`, `osculating-circle`, `finding-an-osculating-circle`.

Links: "[the theorem of 11.2]" → `/calculus/ch11/11.2/#11.2-fs-id1167794065177`; "Introduction to Vector Calculus" → Chapter 16's introduction; "Motion in Space" → 13.4; the Proof's "By [the theorem it proves]" keeps the link as printed with a correction.

## Colour, referents and function tokens

Categories: `curve` for r, the curves, the helix and the osculating circle (dashed); `vector` for r′, r″, T, T′, N, B; `integral` for s; `derivative` for κ, s′, y′, y″, f′, f″; `plane` for the normal and osculating planes; `point` for the point P and the circle's centre. No referents. Function tokens: Example 13.11b's f(x) = √(4x − x²), Checkpoint 13.11's and 13.13's parabolas and Example 13.13's cubic as `data-fn` where the prose gives y = f(x) by its rule.

## Figures

- `sim-helix-length` · Sim · `arc-length-of-a-helix`, `arc-length-of-a-space-curve` · depth (a space curve, mathematical 3D) and variation: the helix of radius R, height h and N turns, r(t) = R cos(2πNt/h) i + R sin(2πNt/h) j + t k; the sliders change the wire and the readout writes s = √(4π²N²R² + h²) with the numbers, the length of the wire; a cylinder of radius R ghosted under it · arrows: none · still · sliders R (ink, 0.5 to 3, default 1), h (ink, 1 to 8, default 6), N (ink, 1 to 6, step 1, detents) · `S.headline` "N = 3 turns of radius 1.00 over height 6.00: the wire is 19.82 long" · 3D, free orbit, no buttons; WebGL scene 1 of 2. A Sim: the book derives the formula without a figure; defaults are a stand-in (the book prints none).
- `sim-arc-length-function` · Sim · `arc-length-function`, `arc-length-parameterization` · flow by animation and variation: a point runs along the spiral r(t) = ⟨t cos t, t sin t⟩, 0 ≤ t ≤ 2π (the curve of exercise 98), beside the graph of its arc-length function s(t) = ∫₀ᵗ ‖r′(u)‖ du, whose slope is the speed ‖r′(t)‖; the choice parameter (t, s) re-runs the same curve by arc length, r(s): the point then moves at a constant speed 1, s grows along a straight line of slope 1 and equal steps of the parameter mark equal lengths on the curve · arrows: kinematic (the moving point) · moving: 6 s a run · choice parameter · headline "t = 3.14: the point has traveled s = 5.33" · graph beside (a square scene) · 2D. Readout s(t) = ∫₀ᵗ √(1 + u²) du with the number, ds/dt = ‖r′(t)‖. A Sim (rule 14: the arc-length function has no book figure).
- `sim-osculating` · Figure 13.6 + 13.8 · `curvature`, `radius-of-curvature`, `osculating-circle` · variation: a curve that rises and falls (the stand-in y = 1.5 − sin x − ¼ sin(2x + 1) on [0.2, 6.2], the book's sketch printing no function; its broad minimum at x ≈ 1.05 has radius of curvature 1.10, its sharp maximum at x ≈ 4.85 radius 0.51) with the circle that hugs it at the dragged point: tangent to it, on its concave side, radius 1/κ; the circle shrinks where the curve turns sharply and swells where it flattens, the book's two circles two states of one drag · arrows: none · still · slider x (ink, 0.4 to 5.9, step 0.01, default 1.048 at the curve's minimum, specials at the minimum and the maximum 4.854); the point drags along the graph (`F.drag`) · headline "x = 4.71: κ = 1.05, the osculating circle has radius 0.95" · graph alone, one scale · 2D. Folded: 13.8 draws the same circle at one point; the live circle is both. Readout κ = |y″|/[1 + (y′)²]^{3/2} with the numbers and r = 1/κ.
- `sim-frenet` · Figure 13.7 · `frenet-frame-of-reference`, `principal-unit-normal-vector`, `binormal-vector`, `osculating-plane`, `normal-plane` · depth and flow by animation: the frame T, N, B rides a point along a space curve, the osculating plane (T, N) and the normal plane (N, B) translucent squares at the point, so the reader sees N turn toward the bend and B tilt as the curve twists; the choice curve swaps the helix of Example 13.11a, r(t) = 4 cos t i + 4 sin t j + 3t k for 0 ≤ t ≤ 4π/3, ending at the example's point (constant κ = 4/25), for the twisted cubic r(t) = t i + t² j + t³ k (of 13.2's exercises), whose frame tumbles · arrows: kinematic (the moving point), the frame's arrows symbolic · moving: 8 s a run · choice curve · `S.headline` "t = 2.09: κ = 0.16" · 3D, free orbit, no buttons; WebGL scene 2 of 2; hover names on the two planes (they share the `plane` hue). Readout T, N, B at t with the numbers and κ.
- `fig-osculating-cubic` · Figure 13.9 + 13.10 · `finding-an-osculating-circle` · standardisation only: Example 13.13's y = x³ − 3x + 1 with its osculating circle at x = 1, radius 1/6, centre (1, −5/6), drawn live as a still copy (config 18: the figure shows one example's picture) · arrows: none · still · no controls · no headline · graph alone · 2D. Folded: the book draws the cubic, then the cubic with its circle.

Unnumbered example images kept as printed: the helix and the semicircle of Example 13.11, the circle and its normal and the parabola of Example 13.12. Checkpoint 13.13's answer image and the exercise images stay in their cards. Photographs: none.

## Exercises

- Checkpoints 13.9–13.13 inline after Examples 13.9–13.13.
- Section exercises 102–154: the 26 keyed odd ones kept; all 27 even ones are computational or "use technology" and are left out, named in `exercise_notes`.
- Review exercises held here (`source_section` 13.4): 204 (true or false, unkeyed, AI-marked approach), 217, 219, 221 (keyed). 216, 218, 220 and 222 (unkeyed, computational) left out.

## Corrections (book-corrections-as-notes)

- `c-helix-h`: "h represents the height (distance between two consecutive turns)": with N turns over 0 ≤ t ≤ h, h is the height of the whole helix, and consecutive turns are h/N apart.
- `c-proof-cite`: the Proof's "By Alternative Formulas for Curvature" cites the theorem being proved; the step is the dot product rule of 13.2's Properties of the Derivative.
- `c-ex12-binormal`: Example 13.12 computes B "using Equation 13.17", the curvature of a graph; B is Equation 13.19, B = T × N. Its k-component is written (−15 − 15t²)/(25(t² + 1)) before the next line uses +15; T × N gives (15 + 15t²)/(25(t² + 1)), and B = (4/5) i + (3/5) k as printed.
- `c-cp12`: Checkpoint 13.12's key N(2) = (√2/2)(i − j) is not orthogonal to r′(2) = i + 4j; N(2) = (4i − j)/√17; its hint cites Equation 13.13, the arc-length function, where N is Equation 13.18 (under its card).
- `c-fig-13-9`: Figure 13.9's caption "at the point where t = 1" means x = 1 (through the figure row's original caption, no marker).
- `c-e153`: 153's key κ = 6/(x^{2/5}(25 + 4x^{6/5})); for y = 0.25x^{1.6}, κ = 30/(x^{2/5}(25 + 4x^{6/5})^{3/2}) (under its card).

## Extra simulations (rule 15)

Built: `sim-helix-length`, `sim-arc-length-function` (above). Judged and not built: a figure for Example 13.10's circle, whose speed is constant, so its t and s ticks coincide (the spiral shows the difference); a curvature graph κ(x) under the curve (the readout carries κ).

## Wanted at chapter level

Applied in the chapter pass (tmp/ch13/anchors13.py).


- forms `eq-arc-length-vvf-plane` → `13.3-fs-id1169738187798`, `-space` → `13.3-fs-id1169738053435`; `eq-arc-length-helix` → `13.3-fs-id1169738046192`; `eq-helix-n-turns` (concept `helix`, section 13.3) → `13.3-fs-id1169737382153`; `eq-arc-length-function` → `13.3-fs-id1169737151922`, `-components` → `13.3-fs-id1169737914271`, `-rate` → the theorem note; `eq-curvature-definition` → the curvature definition note; `eq-curvature-unit-tangent` → `13.3-fs-id1169737287184`, `-cross-product` → `13.3-fs-id1169738153497`, `-graph` → `13.3-fs-id1169738200809`; `eq-unit-normal-vector` → `13.3-fs-id1169737271064`; `eq-binormal-vector` → `13.3-fs-id1169737805867`.
- variables `13.3/s`, `/s_prime` → the Arc-Length Function note; `/r_vec`, `/r_vec_prime`, `/f`, `/g`, `/h`, `/f_prime`, `/g_prime`, `/h_prime`, `/i_vec`, `/j_vec`, `/k_vec` → the Arc-Length Formulas note; `/T_vec`, `/T_vec_prime`, `/κ` → the curvature definition note; `/r_vec_dprime`, `/y_prime`, `/y_dprime`, `/f_dprime` → the Alternative Formulas note; `/N_vec`, `/B_vec` → the normal and binormal definition note; `/θ` → `13.3-fs-id1169737527159`.

## Derivations

- Arc Length for Vector Functions, the arc length of the helix · score 1 · built as drv-helix-arc-length (r′(t) one node, (13.12) worked to √(4π²N²R² + h²) the second; the evaluation at the limits inserted)
- Arc-Length Parameterization, differentiating (13.13) · score 1 · built as drv-speed-along-a-curve (the Fundamental Theorem, Part 1, needs ‖r′‖ continuous, which smoothness gives)
- the same passage, s(t) = t − a when ‖r′(t)‖ = 1 · score 0 · built as drv-unit-speed-arc-length (a thin printed block split from the first by the book's sentence on s′(t) > 0, which keeps its place; the trailing "which means …" clause dropped, the theorem below saying it)
- Alternative Formulas for Curvature · Proof of (13.15), (13.16) and (13.17) · score 4 · built as drv-alternative-curvature-formulas, one node per line of the argument: (13.15) by the chain rule; r′ = (ds/dt)T, r″, r′ × r″, T′ · T = 0 and ‖T × T′‖ = ‖T′‖ as their own nodes, joined for (13.16); r′, r″ and the determinant for y = f(x), then (13.17). The book's citation of the theorem itself for d/dt(T · T) is the node's note; footnote c-proof-cite removed
- The Normal and Binormal Vectors, B(t) is a unit vector · score 3 · not built: one display with the reasoning in prose, under the hidden bar, and the prose already carries every move
- Example 13.13 · Finding the Equation of an Osculating Circle · score 3 · not built: substitutes into (13.17) and reads the centre off the graph
