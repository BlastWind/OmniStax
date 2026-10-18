# Plan: 8.5 First-Order Linear Equations (m53713)

Source: `source.md`, converted with `tools/convert.py 8`. Status: built 2026-10-12 straight through (config 2 waives the review for this run; decisions reported afterwards). Template: `ch01/1.1`.

Three objectives, an opening (the ball with air resistance, Figure 8.24, the definition note), one Problem-Solving Strategy, Figures 8.24–8.26, Examples 8.15–8.19, Checkpoints 8.15–8.19, three Key Concepts, two Key Equations rows, 54 section exercises (27 keyed), the Chapter Review Exercises 262–290 (14 keyed), 3 glossary terms. No media note.

## Sub-concepts (page headers)

The opening paragraphs on air resistance, with Figure 8.24 and the initial-value problem m dv/dt = −kv − mg, stand before the first header as the section's own introduction (root rule 21.3), the first paragraph `p#linear-intro`. From "The differential equation in this initial-value problem is an example of a first-order linear differential equation" to the nonlinear examples, the book has no header; the agent's `<h2>` **Linear Equations** opens `linear-equations` there (rule 3), holding the definition `linear-definition`. Then the book's headers: `standard-form` **Standard Form** (Example 8.15); `integrating-factors` **Integrating Factors** (the derivation, the strategy `linear-strategy`, Examples 8.16 and 8.17); `applications` **Applications of First-order Linear Differential Equations** with its h3s Free fall with air resistance (Example 8.18) and Electrical Circuits (Kirchhoff's Loop Rule, Figure 8.25, Example 8.19 with Figure 8.26).

## Concept nodes (merged by the prep)

Introduced: `first-order-linear-differential-equation` (form a(x)y′ + b(x)y = c(x)), `standard-form-of-a-linear-equation` (form y′ + p(x)y = q(x)), `integrating-factor` (function, μ), the skill `solving-a-first-order-linear-equation`, the results `free-fall-with-air-resistance` and `kirchhoffs-loop-rule` (three forms). Uses: `product-rule`, `separation-of-variables`, `indefinite-integral`, `velocity-under-gravity`, `limit-at-infinity`, `integration-by-parts`.

## Colour, referents and function tokens

y `\kyfn`, y′ `\kyprime`, p(x) `\kp` and q(x) `\kq` (function), μ `\kmu` (function), μ′ `\kmuprime` (derivative), v `\kv` (function, the unknown), dv/dt `\kdvdt` (derivative). a(x), b(x), c(x) are written plain (the book's arbitrary coefficient functions of the definition only); i, q (charge), E, R, L, C, k, m, g in ink. No referents. Function tokens: the general and particular solutions the examples print.

## Figures

- `sim-air-resistance` · Figure 8.24 (Example 8.18) · `free-fall-with-air-resistance`, `solving-a-first-order-linear-equation` · value add: flow by animation: the racquetball rises from 1 m and falls on a height scale (kinematic: its motion, a velocity arrow), gravity's force arrow fixed and air resistance's arrow −kv shrinking to zero at the top and turning upward as it falls (both notation, drawn as forces), and v(t) = (v₀ + mg/k)e^(−kt/m) − mg/k beside, the terminal velocity −mg/k dashed; k on a slider (0.05 to 1, default the book's 0.5) · moving, the ball and the time line, 0.5 s of flight in 5 s, 1.2 s hold · headline "t = 0.104 s: v = 0.00 m/s at the top, 1.084 m up." · readout m dv/dt = −kv − mg with the live values · graph beside a vertical scene · 2D.
- `fig-circuit` · Figure 8.25 · `kirchhoffs-loop-rule` · standardisation only: the loop with the generator V_S, the capacitor C, the inductor L and the resistor R, drawn in the house style · still · 2D.
- `fig-rl-current` · Figure 8.26 (Example 8.19) · `solving-a-first-order-linear-equation` · standardisation only: i(t) = −(50√89/89)cos(20t + φ) + 400e^(−12.5t)/89 for 0 ≤ t ≤ 5.5, with the steady-state amplitude ±50√89/89 dashed; the book prints no caption, so the caption names the curve · still · 2D.

Unnumbered images: review exercise 279's field in its card.

## Extra simulations (rule 15)

None: the integrating factor is algebra; the ball and the circuit are the section's applications, drawn above.

## Corrections

- Example 8.19, Step 5, prints "using the initial condition v(0) = 2", the racquetball's; the circuit's is i(0) = 0, which the step uses (marker and note at the section's end).
- Before the RC equation the book cites Equation 8.23 (the general solution y = (1/μ)[∫μq dx + C]); the equation rewritten is Equation 8.24, Kirchhoff's (marker and note).
- Checkpoint 8.18's hint cites Example 8.15 (standard form); the racquetball is Example 8.18. Checkpoint 8.19's hint cites Equation 8.25 (the LR circuit) for an RC circuit, which is Equation 8.26. Notes under the cards.

## Exercises

- Checkpoints 8.15–8.19 inline after Examples 8.15–8.19.
- Section exercises 208–261: the 27 odd keyed ones kept; 253 carries 252's statement (named in `changes`). 208, 210 and 212 (is it linear? explain) kept with AI-marked approaches. Left out, unkeyed and computational: 214, 216, 218, 220, 222, 224–232 even, 234, 236, 238, 240, 242–250 even, 252, 254, 256, 258, 260.
- Review exercises 262–290, `source_section` 8.5, placed with their sections (see `ch08/exploration.md`); set here: 262 and 264 (AI-marked approaches), 277, 279, 285; left out: 270, 276, 278.

## Wanted at chapter level

- Anchors: variables y_fn, y_prime → `8.5-linear-definition`; p, q → `8.5-standard-form`; μ, μ_prime → `8.5-integrating-factors`; v, dv/dt → `8.5-linear-intro`. Forms: `eq-first-order-linear` → `8.5-linear-definition`; `eq-standard-form` → `8.5-standard-form`; `eq-integrating-factor`, `eq-linear-solution` → `8.5-linear-strategy`; `eq-air-resistance` → `8.5-linear-intro`; the three circuit forms → `8.5-electrical-circuits`.

## Derivations

- Free fall with air resistance · the initial-value problem (8.13) · score 3 · not built: three moves told in prose, under the bar
- Integrating Factors · (8.18) to (8.23) · score 5 · built as two derivations: drv-integrating-factor ((8.19), $\mu'=\mu p$ and $\mu=C_{2}e^{\int p\,dx}$) and drv-first-order-linear-solution ((8.21) to (8.23)); the bold "integrating factor" sentence stands between them, the connecting phrases moved into the work
- Example 8.16 · score 1 · not built: a worked example of the five-step strategy
- Example 8.17 · score 2 · not built: a worked example of the five-step strategy
- Example 8.18 · score 2 · not built: a worked example of the five-step strategy with numbers
- Electrical Circuits · Kirchhoff's loop rule to (8.24) to (8.26) · score 1 · built as drv-circuit-equations (a printed block, thin, the three equations one family); the misprinted "Equation 8.23" is now the node's note and the `rc-equation` footnote is removed
- Example 8.19 · score 8 · built as drv-rl-circuit-current: beyond the strategy it joins an integral the book skips (by parts twice, 7.1) and the amplitude-phase rewrite (1.3); the book's "initial condition $v(0)=2$" is now the node's note and the `rl-initial` footnote is removed
