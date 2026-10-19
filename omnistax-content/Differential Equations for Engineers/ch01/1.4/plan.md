# Plan: 1.4 Linear equations and the integrating factor (intfactor:section)

Source: `source.md`. Status: built 2026-10-19 straight through (config 2); text, figure, derivation and `section.json` reviewed against the source and the rules, `ost check diffyqs --section 1.4` clean, built and checked in the browser in light and dark on 2026-10-19 (sec-1.4 task). Section notes dropped and named in `notes`. Two examples, one figure (1.10, with the tank sketch of Example 1.4.2 among its originals), one boxed formula (1.4), one remark (1.4.1), one derivation, three inline exercises (1.4.1–1.4.3), 14 end exercises (5 keyed), the line "In the exercises, feel free to leave the answer as a definite integral…" as `exercises_lead`.

## Sub-concepts (page headers)

The book prints none but Exercises; two headers are OmniStax's (build-status):
- `linear` **The integrating factor**: the opening (`p#linear-definition`, (1.3) as `eq-1-3`), the nice properties (`p#nice-properties`), the product trick (`p#product-trick`, `eq-integrating-factor-product`), the definition of the integrating factor and the method (`p#integrating-factor-def`), the choice r = e^(∫p dx) (`p#exponential-job`, `eq-integrating-factor`), the derivation in place of the book's five-line block, Example 1.4.1, inline 1.4.1 after `p#constant-of-integration`, `p#advice`, the definite-integral form (`p#definite-integral-form`, the boxed (1.4) as `eq-1-4`), inline 1.4.2–1.4.3 after `p#dummy-variables`, Remark 1.4.1 as `div.note#rem-1-4-1`.
- `mixing` **Mixing problems**: Example 1.4.2 (`div#ex-1-4-2`: `p#tank-setup`, the balance law in `p#mixing-law` and `eq-mixing`, `p#tank-solve`, `p#tank-full`, `p#tank-answer`) with Figure 1.10 inside it.

## Concepts (merged by the prep)

Introduced (one `introduces` row each): `first-order-linear-differential-equation` (Calculus's id; terms linear equation, first-order linear equation; form (1.3) on `p#linear-definition`), `integrating-factor` (Calculus's id; definition, type function, symbol r; forms r(x) = e^(∫p dx) and the product identity; `p#integrating-factor-def`), `integrating-factor-method` (skill; form the general solution; `p#integrating-factor-def`), `linear-ivp-solution` (result, the boxed (1.4) on `eq-1-4`), `existence-for-linear-equations` (result, `div#rem-1-4-1`), `mixing-problem` (skill; form the balance law; `p#mixing-law`). Uses: `linear-differential-equation` (Chapter 0's classification, the opening "Linear equations"), `first-order-differential-equation`, `solution-to-a-differential-equation`, `antiderivative`, `closed-form`, `initial-value`, `integral-solution`, `picards-theorem`, `interval-of-existence`, `mathematical-model`; `newtons-law-of-cooling` in Exercise 1.4.10's prompt.

Calculus links for what the page assumes, on the book's own words: continuity (Calculus 2.4), the exponential function (Calculus 3.9); the derivation's facts cite Calculus 3.3 (product rule), 3.9 (derivative of e^(g(x))) and 4.10 (antiderivatives). Theorem 1.2.1 links `/diffyqs/ch01/1.2/#1.2-thm-1-2-1`.

## Colour, referents and symbols

y `function` (`\ky`), y′ `derivative` (`\kyprime`), p(x), f(x), r(x) `function` (`\kp`, `\kf`, `\kr`), x(t) the salt `function` (`\kx`), dx/dt `derivative` (`\kdxdt`), P and dP/dt of 1.4.104 (`\kP`, `\kdPdt`); t, s, C, K, D, x₀, y₀, k, A, A₀, ω, I, h and the one-off letters of the exercises in ink. The exponent ∫p(x) dx is written plain (no symbol of its own). No referents. The temperature x of Exercise 1.4.10 and the salt x of 1.4.11–1.4.12 wear `\kx` too (one function role).

## Figures

- `sim-brine-tank` · Figure 1.10 (the tank sketch of Example 1.4.2 and the book's graph both among its originals) · `mixing-problem`, `integrating-factor-method` · value add: flow by animation and variation: the tank of Example 1.4.2 (100 L, 60 L of water and 10 kg of salt at t = 0) filling as brine runs in at the top and mixture runs out at the bottom, the liquid shaded by its concentration, the level rising to full; beside it the graph of x(t) traced as time runs, the salt when the tank is full marked (the book's x(20) = 11.86 kg), and dashed the line c_in·V(t), the salt the tank would hold at the inflow's concentration, which x is drawn toward; sliders for the inflow concentration (0 to 0.3 kg/L, detent at the book's 0.1, a dashed special at 1/6, the tank's own starting concentration, where x = V/6 lies on the dashed line and the curve straightens) and the outflow rate (1 to 4.5 L/min, detent at the book's 3; the inflow stays the book's 5 L/min), so the reader sees the salt rise or fall toward the inflow's concentration and the full time move with 40/(5 − rate out) · arrows: kinematic (the streams in and out, dashes running down and out, arrowheads at their ends) · moving: the clock runs from 0 to the time the tank is full, one loop about 5 s, holds 1.2 s · readout dx/dt = 5(0.100) − 3.0(10.81)/(60 + 2.0(12.0)) = 0.500 − 0.386 = 0.114 with the live x and t, every term rounded as shown so the line adds up · headline "t = 12.0 min: 84.0 L hold 10.81 kg of salt, 0.129 kg/L." (full: "t = 20.0 min: the tank is full, 100 L holding 11.86 kg of salt at 0.119 kg/L.") · graph beside the vertical tank · 2D. The graph's window is a zoom that follows the run: t from 0 to the full time, x between the least and the most the salt and the dashed line reach, rounded to ticks (`nice`), since a fixed window from the slider maxima (x up to 30 kg) would flatten the book's own curve from 10 to 11.86. Closed form x = c_in V + (10 − 60c_in)(60/V)^(q/(5 − q)), V = 60 + (5 − q)t, checked with SymPy (`verify.py` in the task's scratch), the book's (60 + 2t)/10 + 4·60^(3/2)(60 + 2t)^(−3/2) at the defaults. Labels: the inflow (rate and concentration), the outflow rate, the volume at the surface, the end value on the graph and the dashed line; the mixture, the two streams, the moving point and the dashed line are named on hover.

## Extra simulations (rule 15)

None. Weighed and dropped: a picture of the integrating factor turning y′ + py into (ry)′ (it is algebra; the derivation carries it move by move).

## Derivations (rule 29)

- `drv-integrating-factor` · the solution of a linear first-order equation by the integrating factor · the book's five-line block after "We compute:" is replaced by it (rule 29.2); one node from (1.3) through four moves: multiply by r(x) = e^(∫p dx) (fact 1), the product rule read backward with d/dx e^(∫p dx) = p e^(∫p dx) (facts 2 and 3, Calculus 3.9 and 3.3, a cap), integrate (fact 4, Calculus 4.10, a cap), divide by the factor (the key of e^(∫p dx) y splits into y and e^(−∫p dx), `map`). The result is the form `eq-linear-general-solution` of `integrating-factor-method`.
- The boxed (1.4) · score 2 · not built: the general solution rewritten with definite integrals, one move.
- Example 1.4.1 · score 1 · not built: the method with numbers.
- Example 1.4.2 · the mixing equation and its solution · score 3 · not built: the balance law (two moves) and the method with numbers.

## Exercises

- Inline Try Its (kind `inline-exercise`, ids `e1`–`e3`): 1.4.1 after `p#constant-of-integration`, 1.4.2 and 1.4.3 after `p#dummy-variables`; AI-marked solutions (1.4.1: the extra constant rescales r and cancels; 1.4.2: both integrals vanish at x₀; 1.4.3: y = e^(−x)(∫₀ˣ e^(t²) dt + 10)), checked with SymPy.
- End exercises 1.4.4–1.4.12 (kind `exercise`, ids `e4`–`e12`): every one kept with an AI-marked solution stating the answer and its reasoning, every computed value checked with SymPy (config 10): 1.4.4 y = 1 + Ce^(−x²/2); 1.4.5 y = e^x/7 + Ce^(−6x); 1.4.6 y = (2 − cos x)e^(−x³); 1.4.7 y = 1 + Ce^(−sin x); 1.4.8 the definite integral 3e^(−(x⁴/4 + x²/2))∫₀ˣ(t² + 1)e^(t⁴/4 + t²/2) dt; 1.4.9 c₁ = 0.005e^(−t/200), c₂ = 0.005(e^(−t/400) − e^(−t/200)) kg/L, b) t > 200 ln 5 ≈ 321.9 h, c) t = 400 ln 2 ≈ 277.3 h (`multi` on b and c); 1.4.10 x = kA₀(k cos ωt + ω sin ωt)/(k² + ω²) + Ce^(−kt), the initial condition dies away; 1.4.11 t = (20/3) ln(7/4) ≈ 3.73 min (`number`); 1.4.12 c = 1.5/(1 − e^(−2)) ≈ 1.735 g/L (`number`). Shapes `open` otherwise; a `tasks` list is one card with parts a)–c) as an `<ol type="a">`.
- 1.4.101–1.4.105 (ids `e101`–`e105`): the book's `\exsol` as the `solution` (`generated_by: source`); 1.4.103 and 1.4.104 as `number` (250 g; 6.31 × 10⁶ with a 1 % tolerance). SymPy agrees with every keyed answer (1.4.103 in the form x = 2t²(10 − t)).
- `exercise_concepts` rows for every exercise.

## Wanted at chapter level

- Anchors: forms `eq-linear-first-order` → `1.4-eq-1-3`; `eq-integrating-factor` → `1.4-eq-integrating-factor`; `eq-integrating-factor-product` → `1.4-eq-integrating-factor-product`; `eq-linear-general-solution` → `1.4-drv-integrating-factor`; `eq-linear-ivp` → `1.4-eq-1-4`; `eq-mixing` → `1.4-eq-mixing`. Variables y, y_prime, p, f → `1.4-linear-definition`; r → `1.4-integrating-factor-def`; x, dx/dt → `1.4-mixing-law`; P, dP/dt have no span in the text (Exercise 1.4.104 only), nothing to give.
- Variables row 1.4/x: its meaning could add "also the temperature of Exercise 1.4.10 and the grams of salt of 1.4.11–1.4.12", all one function role; no type change.
- Glossary words: none beyond the merged `terms`.
