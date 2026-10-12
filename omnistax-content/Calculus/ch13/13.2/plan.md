# Plan: 13.2 Calculus of Vector-Valued Functions (m53916)

Source: `source.md`, converted with `tools/convert.py 13`. Status: plan; config 2 waives the review for this run (Chen, 2026-10-12), decisions reported afterwards. Template: `ch01/1.1` for conventions.

Four objectives, the opening paragraph, three definition notes and two theorem notes (Equations 13.5–13.10), one proof, Examples 13.4–13.8, Checkpoints 13.4–13.8, Figure 13.5, four Key Equations, five Key Concepts, 61 section exercises (31 keyed). One page.

## Sub-concepts (page headers)

The book's three headers apply and are kept.

0. `intro` (no header): the opening paragraph.
1. `derivatives` **Derivatives of Vector-Valued Functions**: the definition note (Equation 13.5 and the one-sided limits), Example 13.4, Checkpoint 13.4, the theorem Differentiation of Vector-Valued Functions, Example 13.5, Checkpoint 13.5, the theorem Properties of the Derivative of Vector-Valued Functions and its Proof, Example 13.6, Checkpoint 13.6. Introduces `derivative-of-a-vector-valued-function`, `differentiation-of-vector-valued-functions`, `properties-of-the-derivative-of-vector-valued-functions`, `constant-magnitude-and-its-derivative`.
2. `tangent-vectors` **Tangent Vectors and Unit Tangent Vectors**: r(π/6) and r′(π/6) (Figure 13.5), the definition note (Equation 13.6), the three steps, Example 13.7, Checkpoint 13.7. Introduces `tangent-vector`, `principal-unit-tangent-vector`, `finding-a-unit-tangent-vector`.
3. `integrals` **Integrals of Vector-Valued Functions**: the definition note (Equations 13.7–13.10), the constant vector, Example 13.8, Checkpoint 13.8. Introduces `indefinite-integral-of-a-vector-valued-function`, `definite-integral-of-a-vector-valued-function`.

Links: "Introduction to Derivatives" → Chapter 3's introduction; "Antiderivatives" → 4.10; "The Definite Integral" → 5.2. A reference to a theorem note reads as its title, linked (Example 13.5's "Use Differentiation of Vector-Valued Functions").

## Colour, referents and function tokens

Categories: `curve` for r and u and their curves; `vector` for r′, u′, u″, T, i, j, k; `function` for f, g, h; `derivative` for f′, g′, h′; `integral` for F, G and the integrals. No referents. Function tokens: none.

## Figures

- `sim-difference-quotient` · Sim · `derivative-of-a-vector-valued-function` · variation and intuition: Example 13.4's r(t) = (3t + 4) i + (t² − 4t + 3) j, a parabola; at the point r(t) the chord r(t + Δt) − r(t) and the quotient [r(t + Δt) − r(t)]/Δt drawn from r(t), which swings onto the tangent vector r′(t) = 3 i + (2t − 4) j as Δt shrinks (dashed, the limit) · arrows: symbolic (vectors) · still: answers its sliders · sliders t (ink, −1 to 4, step 0.01, default 1) and Δt (ink, −2 to 2, step 0.01, default 1.5, special at 0 where the quotient is r′(t)); the point drags along the curve (`F.polar.grip`) · headline "t = 1.00, Δt = 1.50: the quotient is ⟨3.00, −0.50⟩, r′(t) = ⟨3.00, −2.00⟩" · graph alone, one scale · 2D. Readout: [r(t + Δt) − r(t)]/Δt = ⟨3, 2t + Δt − 4⟩ → r′(t) with the numbers. A Sim: the definition has no book figure (rule 14).
- `sim-tangent-vector` · Figure 13.5 · `tangent-vector`, `principal-unit-tangent-vector` · variation: r(t) from the origin and r′(t) at its tip on the unit circle, the book's t = π/6 the default, where r′ is T; the choice puts the same arrows on 13.1's ellipse r(t) = 4 cos t i + 3 sin t j, where r′(t) changes length while T(t) = r′/‖r′‖ stays a unit arrow along it, so the unit tangent's normalization is seen · arrows: symbolic · still · slider t (ink, 0 to 2π, step 0.01, default π/6, specials π/6 and π/2) and choice curve (circle, ellipse); the point drags along the curve · headline "t = 0.52: r′(t) = ⟨−0.50, 0.87⟩, ‖r′(t)‖ = 1.00" · graph alone, one scale · 2D. Readout T(t) = r′(t)/‖r′(t)‖ with the numbers.
- `sim-vector-integral` · Sim · `definite-integral-of-a-vector-valued-function` · variation: Example 13.4's derivative r′(t) = 3 i + (2t − 4) j integrated from 0 to b, drawn as the Riemann sum of the vectors r′(tᵢ)Δt laid tip to tail from r(0), whose sum closes on ∫₀ᵇ r′(t) dt = r(b) − r(0), the chord from r(0) to r(b) on the curve: the integral of a vector-valued function as the sum of its little steps, componentwise · arrows: symbolic · still · sliders b (ink, 0.5 to 5, step 0.01, default 4) and n (ink, 1 to 24, step 1, default 6) · headline "n = 6: the steps sum to ⟨12.00, 0.00⟩; ∫₀⁴ r′(t) dt = ⟨12.00, 0.00⟩" · graph alone, one scale · 2D. Readout: ∫₀ᵇ[3 i + (2t − 4) j] dt = [∫₀ᵇ 3 dt] i + [∫₀ᵇ (2t − 4) dt] j with the numbers; the sum's components beside. A Sim (rule 14); chosen over Checkpoint 13.8's function so the figure does not answer the checkpoint.

Exercise images stay in their cards (43, 55, 65, 69 stem, 79 stem, 83 stem, 89 stem, 97). Photographs: none.

## Exercises

- Checkpoints 13.4–13.8 inline after Examples 13.4–13.8; open answers, hints from the book.
- Section exercises 41–101: the 31 keyed odd ones kept. 68 (show the speed is proportional to ω) and 96 (show the product rule gives the same result) are unkeyed show-exercises, kept with AI-marked approaches. The other 28 even ones are computational and left out, named in `exercise_notes`.
- Review exercises held here (`source_section` 13.4): 203 (true or false, keyed), 213 (derivatives and unit tangent, keyed), 215 (integral, keyed). 212 and 214 (unkeyed, computational) left out.
- Keys checked by differentiation (sympy).

## Corrections (book-corrections-as-notes)

- `c-r213`: review 213's key prints the j-components of d/dt[u′ × u] and d/dt[u × u′] as 24 + 75t² and −24 − 75t² (they are 72t⁵ + 24 and −72t⁵ − 24) and d/dt[u · u′] as 720t⁸ − 9600t³ + 6t² + 4 (720t⁸ − 960t³ + 6t² + 4), under its card.
- Others as the key check finds them.

## Extra simulations (rule 15)

Built: `sim-difference-quotient`, `sim-vector-integral` (above). Judged and not built: a figure for Example 13.6's dot and cross products (the example is symbolic; drawing r, u and their products adds nothing the algebra does not); r · r′ = 0 for a constant magnitude is seen on the circle of `sim-tangent-vector`.

## Wanted at chapter level

Applied in the chapter pass (tmp/ch13/anchors13.py).


- forms `eq-vvf-derivative` → `13.2-fs-id1169739012267`; `eq-vvf-derivative-components-plane`, `-space` → the Differentiation theorem note; the six `eq-vvf-…` property forms and `eq-vvf-constant-magnitude` → `13.2-fs-id1169736863566`; `eq-unit-tangent-vector` → `13.2-fs-id1169736889687`; `eq-vvf-indefinite-integral-plane` → `13.2-fs-id1169736591974`, `-space` → `13.2-fs-id1169739044371`; `eq-vvf-definite-integral-plane` → `13.2-fs-id1169739062367`, `-space` → `13.2-fs-id1169739182212`.
- variables `13.2/r_vec`, `/r_vec_prime` → the derivative definition note; `/f`, `/g`, `/h`, `/f_prime`, `/g_prime`, `/h_prime` → the Differentiation theorem note; `/u_vec`, `/u_vec_prime`, `/u_vec_dprime` → the Properties theorem note; `/T_vec` → the unit tangent definition note; `/F`, `/G` → `13.2-fs-id1169736882460`; `/i_vec`, `/j_vec`, `/k_vec` → the Differentiation theorem note.
