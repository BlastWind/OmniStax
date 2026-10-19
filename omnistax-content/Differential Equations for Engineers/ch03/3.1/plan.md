# Plan: 3.1 Introduction to systems of ODEs (`sec:introtosys`)

Source: `source.md` (tools/convert.py 3). Status: built 2026-10-19 straight through (config 2), task sec-3.1; `ost check diffyqs --section 3.1` clean; built and checked in the browser in light and dark (no console or page errors, every Sim with its canvas and transport, every slider changing its figure and readout, the originals loading). Template: `ch00/0.2` (its conventions list), `ch01/1.2` (field and theorem), `ch02/2.4` (oscillator scenes).

Six examples, Theorem 3.1.1 (Picard for systems), equation (3.1), Figures 3.1–3.3 and the unnumbered two-cart sketch, one inline exercise (3.1.1), twelve end exercises (6 keyed). Section notes dropped (`notes`). No footnotes (the book prints none in 3.1). No section introduction or summary.

## Sub-concepts (page headers, the book's own)

`systems` **Systems** (`p#systems-intro`, `p#several-variables`, the displays `eq-second-order-system`, `eq-first-order-system`, `eq-solution-to-a-system`, `p#system-def`, `p#solution-def`, `p#initial-condition`, Example 3.1.1 `div#ex-3-1-1`, `p#all-at-once`, `p#linear-systems`); `applications` **Applications** (Example 3.1.2 `div#ex-3-1-2` with Figure 3.1 and `eq-tank-one-rate`, `eq-two-tank-system`; Example 3.1.3 `div#ex-3-1-3` with the two-cart Sim and `eq-two-cart-system`); `first-order` **Changing to first-order systems** (`p#first-order-intro`, `eq-nth-order-equation`, `eq-first-order-from-nth-order`, Examples 3.1.4–3.1.6, Exercise 3.1.1 inline after `ex-3-1-6`, `p#numerical`); `autonomous` **Autonomous systems and vector fields** (`p#autonomous-def`, `p#direction-field`, `p#phase-portrait`, Figures 3.2 + 3.3, `p#non-autonomous`); `picard` **Picard’s theorem** (`p#picard-intro`, equation (3.1) as `div.equation#eq-3-1`, Theorem 3.1.1 `div.note#thm-3-1-1`, `p#picard-meaning`, `p#picard-higher-order`).

## Concepts (merged by the prep; one `introduces` each)

`second-order-system`, `first-order-system` (`p#system-def`); `solution-to-a-system` (`p#solution-def`); `initial-condition-for-a-system`, `general-solution-to-a-system` (`p#initial-condition`); `linear-system-of-odes` (`p#linear-systems`); `two-tank-brine-system` (`div#ex-3-1-2`); `two-cart-spring-system` (`div#ex-3-1-3`); `converting-to-a-first-order-system` (`p#first-order-intro`); `autonomous-system` (`p#autonomous-def`); `vector-field-of-a-system` (`p#direction-field`; the prep's id, not Calculus's `vector-field`); `phase-portrait`, `trajectory` (`p#phase-portrait`); `picards-theorem-for-systems` (`thm-3-1-1`). Fourteen. The italic “system of differential equations” is 0.3's `system-of-differential-equations` (a `uses` row, not an introduction here). Uses: `dependent-variable`, `independent-variable`, `differential-equation`, `ordinary-differential-equation`, `initial-value`, `general-solution`, `solution-to-a-differential-equation`, `linear-differential-equation`, `first-order-linear-differential-equation`, `integrating-factor-method`, `mixing-problem`, `mass-spring-system`, `newtons-second-law`, `second-order-equation-with-constant-coefficients`, `eulers-method`, `runge-kutta-method`, `direction-field` (the slope field), `autonomous-differential-equation`, `picards-theorem`. The word “vector” wears 3.2's `vector` (no coverage row: the concept is introduced in 3.2); Calculus links on “vector” (12.1), “magnitude” (12.1), “continuous” (14.2) and the partial “derivative” (14.3); “§1.6” links `/diffyqs/ch01/1.6/`.

## Colour and referents

x₁, x₂, x₃, xₙ, y₁, y₂, yₙ, u₁…uₙ, f₁, f₂, g₁…g₃, F, F₁…Fₙ, F_j, x, y, f, g wear `function` through their macros, every derivative `derivative`; t and the independent x, C₁, C₂, a₁…a₃, A, B, r, V, m₁, m₂, k, x_j⁰ in ink. The generic f of `p#several-variables` (no row; the 3.1 `f` row is the trajectory's coordinate) and the f(x), F of Exercises 3.1.4 and 3.1.6 stay plain; y₃, y₄ of 3.1.101 and 3.1.104 have no row and stay plain. Referents: `tank-1`, `tank-2` (Example 3.1.2, Figure 3.1); `cart-1`, `cart-2` (Examples 3.1.3, 3.1.5, the two-cart Sim). Decision: no `ref` on the x₁, x₂ rows — one 3.1 row each carries the generic first-order system, the tanks and the carts, so a referent subscript would be wrong in two of the three places; the referents are told apart by the marked words, the scene and the curves, and x₁, x₂ keep `function` whole.

## Figures

- `sim-brine-tanks` · Figure 3.1 · `two-tank-brine-system`, `solution-to-a-system` · value add: flow by animation and variation: the two tanks with brine running through the two crossing pipes (dashes in each pipe move the way it flows, at a speed set by r/V, in the colour of the tank it leaves at that tank's density), each tank's liquid shaded by its density x/V in its referent colour; below, x₁(t) and x₂(t) in the tanks' colours closing on (A + B)/2 (dashed level) · arrows: kinematic (the moving brine) · moving: the clock runs t 0 to 40 s in 5 s, hold 1.2 s · sliders A = x₁(0) (0–40 g, default 30), B = x₂(0) (0–40 g, default 10), each with a dashed circle at the other's value (equal amounts, the constant solution the text finds), r/V (0.02–0.2 per s, default 0.05), all untyped (constants and parameters in ink) · headline “t = 19.3 s: x₁ = 21.4 g and x₂ = 18.6 g, and still x₁ + x₂ = 40 g.” (x₂ shown as A + B less the x₁ shown, so the two always add up), at A = B “Equal amounts … neither amount changes.” · readout x₁′ = (r/V)(x₂ − x₁) = 0.05(18.6 − 21.4) = −0.140 g/s, x₂′ = 0.140 g/s from the numbers shown · scene above, graph below (t 0–40 s, x 0–40 g) · 2D. The book gives no numbers; the defaults are ours.
- `sim-two-carts` · Sim (the book's unnumbered sketch of Example 3.1.3 kept as the original, row `kind: sim`, no number, eyebrow “Sim”) · `two-cart-spring-system`, `second-order-system` · value add: flow by animation: the two carts (bodies in their referent colours) on the track joined by the spring, both starting at their zero positions, cart 1 pushed at x₁′(0) = 1 m/s and cart 2 at x₂′(0); the spring's forces k(x₂ − x₁) and its opposite (symbolic, ink, 50 units per newton) pass the motion back and forth while the pair travels; each cart's displacement from its zero position is an arrow below the track; below, x₁(t) and x₂(t) in the carts' colours (at the defaults two interleaved staircases: each cart stops while the other moves) · arrows: symbolic (forces), the displacement arrows notation · moving: t 0 to 10 s in 5 s; the view follows the pair's centre of mass, so the metre marks of the track slide by · sliders m₁, m₂ (0.5–3 kg, default 1), k (1–8 N/m, default 2), x₂′(0) (0–2 m/s, default 0, `derivative`, a dashed circle at 1 = x₁′(0): equal velocities, Exercise 3.1.105) · headline “t = 6.03 s: the spring is stretched by 0.24 m and pulls the carts together with 0.480 N.” (compressed / pushes apart; at rest length; at the special “Equal velocities: the spring never stretches, and the carts coast together, x₁ = x₂ = t.”) · readout m₁x₁″ = k(x₂ − x₁) = 2.0(3.14 − 2.90) = 0.480 N, m₂x₂″ = −0.480 N from the rounded displacements · scene above, graph below (t 0–10 s, x −2–10 m, beyond pinned) · 2D. Built from the plan with three changes: defaults m₁ = m₂ = 1 kg, k = 2 N/m (equal masses show the trade most plainly); x₂′(0) from 0 rather than −1, so the stretch never exceeds 1.22 m and the carts never pass through each other on the 1.35 m spring; a Sim because the book's picture has no number.
- `sim-direction-field` · Figure 3.2 + 3.3 · `vector-field-of-a-system`, `trajectory`, `phase-portrait`, `autonomous-system` · value add: flow by animation and variation: the direction field of x′ = 2y − x, y′ = x on the book's [−1, 3]² (`F.space.field2`, 13 by 13 arrows scaled by one factor so the longest fits its cell, as the book scales them; sparser than the book's 20 so each arrow reads as an arrow), the initial point dragged (`F.drag` on x₀, y₀, detents at the book's (1, 0)), its trajectory x = −2C₁e^(−2t) + C₂e^t, y = C₁e^(−2t) + C₂e^t traced for 0 ≤ t ≤ 2 as the clock runs, faint whole and solid to t; the moving point carries its velocity (2y − x, x) drawn as the step of a quarter unit of t (at the field's own scale it would be a few units long); at t = 2 from (1, 0) it ends at the book's (2.475, 2.457), labelled · arrows: the field symbolic, the velocity at the moving point kinematic · moving: t 0 to 2 in 5 s · sliders x₀, y₀ (−1 to 3, untyped) · headline “t = 1.26: (x, y) = (1.23, 1.15); at t = 2 it reaches (2.475, 2.457).” (“… off the square” when it leaves) · readout (x′, y′) = (2y − x, x) = (2(1.15) − 1.23, 1.23) = (1.07, 1.23), the note the solution through the point with C₁, C₂ · graph alone · 2D. Figure 3.2's state is the field before the trace starts.

## Extra simulations (rule 15)

None beyond the sketch's replacement: Example 3.1.6's solution is the trajectory figure's from (1, 0), and its readout's note writes Example 3.1.6's general solution for any initial point. Considered and rejected: a “change of variables” Sim for Examples 3.1.4–3.1.6 (the bookkeeping is the whole idea, and the text shows it); a non-autonomous field that changes with t (the text says only that it cannot be drawn).

## Derivations (rule 29)

- Example 3.1.2, the rate x₁′ = (x₂/V)r − (x₁/V)r = (r/V)(x₂ − x₁) · score 1 (one fact, algebra after it) · not built: a worked example setting up its own model.
- Examples 3.1.1, 3.1.4–3.1.6 · worked examples of the section's methods · not built.
- Theorem 3.1.1 · stated, no proof · not built.

## Exercises

- Inline (kind `inline-exercise`): `e1` 3.1.1 after `ex-3-1-6` (`<div class="exercises" data-place="ex-3-1-6">` right after the example), AI-marked check: both equations and both initial conditions hold.
- End, unkeyed (kind `exercise`, AI-marked solutions, `generated_by: ai`, every one checked by SymPy in the task's scratch `verify.py`): `e2` 3.1.2 x₁ = C₁e^(−t) + (C₂/2)e^t + t − 1, x₂ = C₂e^t; `e3` 3.1.3 x₂ = C₁e^((3+√5)t/2) + C₂e^((3−√5)t/2) − e^t, x₁ = x₂′; `e4` 3.1.4 u₁′ = u₂, u₂′ = (f(x) − bu₂ − cu₁)/a; `e5` 3.1.5 the four-equation system; `e6` 3.1.6 m₁x₁″ = k(x₂ − x₁) + F, m₂x₂″ = −k(x₂ − x₁); `e7` 3.1.7 with the volumes V ± (r₂ − r₁)t. All `open`.
- Keyed `e101`–`e106` 3.1.101–3.1.106: the book's `\exsol` (`generated_by: source`, each confirmed by SymPy), 3.1.105's and 3.1.106's “left to reader” kept as printed; 3.1.106's a)–c) one card with an `<ol type="a">`. All `open`.
- `exercises_lead` the book's “Exercises with numbers 101 and higher have solutions.”; `exercise_concepts` rows for all 13.

## Wanted at chapter level

Anchors on the variables rows of 3.1 (all spans exist; `ost ids diffyqs 3.1`):
- y_1, y_2, y_n, y_1_prime, y_2_prime, y_1_dprime → 3.1-several-variables
- y_2_dprime, f_1, f_2 → 3.1-eq-second-order-system
- x_1, x_2, x_3, x_1_prime, x_2_prime, x_3_prime, g_1, g_2, g_3 → 3.1-eq-first-order-system
- x_1_dprime, x_2_dprime → 3.1-eq-two-cart-system
- y, y_prime, y_nth, y_nm1th, F → 3.1-eq-nth-order-equation
- u_1, u_2, u_3, u_n, u_nm1, u_1_prime, u_2_prime, u_n_prime, u_nm1_prime → 3.1-eq-first-order-from-nth-order
- x, x_prime, x_dprime, x_tprime, u_3_prime → 3.1-ex-3-1-4
- u_4, u_4_prime → 3.1-ex-3-1-5
- y_dprime → 3.1-ex-3-1-6
- f, g → 3.1-phase-portrait
- x_n, x_n_prime, F_1, F_2, F_n → 3.1-eq-3-1
- F_j → 3.1-thm-3-1-1

Anchors on the forms of 3.1's concepts:
- eq-second-order-system → 3.1-eq-second-order-system; eq-first-order-system → 3.1-eq-first-order-system; eq-general-first-order-system → 3.1-eq-3-1
- eq-solution-to-a-system → 3.1-eq-solution-to-a-system; eq-system-initial-condition → 3.1-initial-condition
- eq-two-tank-system → 3.1-eq-two-tank-system; eq-tank-one-rate → 3.1-eq-tank-one-rate; eq-two-cart-system → 3.1-eq-two-cart-system
- eq-nth-order-equation → 3.1-eq-nth-order-equation; eq-first-order-from-nth-order → 3.1-eq-first-order-from-nth-order
- eq-direction-field-vector → 3.1-direction-field; eq-trajectory-points → 3.1-phase-portrait; eq-general-system → 3.1-thm-3-1-1

No concept or edge fix and no new glossary word. Two notes for the chapter pass: no `ref` is wanted on 3.1/x_1 and 3.1/x_2 (see Colour and referents); y₃ and y₄ of Exercises 3.1.101 and 3.1.104 are written plain for want of a 3.1 row; add `y_3`, `y_4` (and primes) rows of type `function` only if the pass wants them coloured beside y₁, y₂.
