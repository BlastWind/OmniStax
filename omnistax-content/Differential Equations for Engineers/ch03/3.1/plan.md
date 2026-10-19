# Plan: 3.1 Introduction to systems of ODEs (`sec:introtosys`)

Source: `source.md` (tools/convert.py 3). Status: built 2026-10-19 straight through (config 2). Template: Calculus `ch08/8.1`, `ch08/8.2` (ch00/0.2 not yet built).

Six examples, Theorem 3.1.1 (Picard for systems), equation (3.1), Figures 3.1–3.3 and the unnumbered two-cart sketch, one inline exercise (3.1.1), twelve end exercises (6 keyed). Section notes dropped (`notes`).

## Sub-concepts (page headers, the book's own)

`systems` **Systems** (Example 3.1.1); `applications` **Applications** (Examples 3.1.2, 3.1.3, Figure 3.1, the two-cart sketch); `first-order` **Changing to first-order systems** (Examples 3.1.4–3.1.6, Exercise 3.1.1 inline); `autonomous` **Autonomous systems and vector fields** (Figures 3.2 + 3.3); `picard` **Picard’s theorem** (equation (3.1), Theorem 3.1.1).

## Concepts

Introduced: `system-of-differential-equations`, `second-order-system`, `first-order-system`, `solution-to-a-system`, `initial-condition-for-a-system`, `general-solution-to-a-system`, `linear-system-of-odes`, `two-tank-brine-system` (result), `two-cart-spring-system` (result), `converting-to-a-first-order-system` (skill), `autonomous-system`, `vector-field` (Calculus's id; terms direction field, vector field), `phase-portrait`, `trajectory` (curve), `picards-theorem-for-systems` (result). Uses Chapter 1's Picard theorem, integrating factor and the constant-coefficient equations of 2.2.

## Colour and referents

x₁, x₂, x₃, y₁, y₂, u_k wear `function` (`\kx`, `\ky`, `\ku` with subscripts), their derivatives `derivative`; t and the independent x in ink; C₁, C₂, a_k, r, V, m_i, k in ink. Referents: `tank-1`, `tank-2` (Example 3.1.2, Figure 3.1); `cart-1`, `cart-2` (Examples 3.1.3, 3.1.5, the two-cart sketch). In the tank example x₁ and x₂ are split, the subscript in its tank's colour.

## Figures

- `sim-brine-tanks` · Figure 3.1 · `two-tank-brine-system`, `system-of-differential-equations` · value add: flow by animation and variation: brine runs through the two pipes at rate r (kinematic: dashes in each pipe move the way it flows), each tank's liquid shaded by its concentration x/V in its referent colour, and below, x₁(t) and x₂(t) closing on (A + B)/2 (dashed level) while their sum stays A + B · arrows kinematic (the flow in the pipes) · moving: the flow and the time line, t 0 to 40 s in 5 s, hold 1.2 s · sliders x₁(0) = A (0–40 g, default 30), x₂(0) = B (0–40 g, default 10, a dashed circle at A: equal amounts, the constant solution the text finds), r/V (0.02–0.2 per s, default 0.05) · headline the live amounts and their sum · scene above, graph below (horizontal scene) · 2D.
- `sim-two-carts` · Sim (the book's unnumbered sketch of Example 3.1.3 kept as the original) · `two-cart-spring-system`, `second-order-system` · value add: flow by animation: the two carts on the track joined by the spring, each pulled by the spring force k(x₂ − x₁) (symbolic arrows, opposite), cart 1 pushed at 1 m/s and cart 2 at x₂′(0); they trade motion through the spring while their centre of mass coasts, and x₁(t), x₂(t) are traced below · arrows symbolic (the spring forces) · moving: t 0 to 10 s in 6 s; the frame follows the centre of mass (the track's ticks scroll) · sliders m₁ (0.5–4 kg, default 2), m₂ (0.5–4 kg, default 1), k (0.5–8 N/m, default 2), x₂′(0) (−1 to 2 m/s, default 0, a dashed circle at x₁′(0) = 1: equal velocities, the carts move together, Exercise 3.1.105) · headline the live stretch x₂ − x₁ and the forces · scene above, graph below · 2D. A Sim because the book's picture has no number.
- `sim-direction-field` · Figure 3.2 + 3.3 · `vector-field`, `phase-portrait`, `trajectory`, `autonomous-system` · value add: flow by animation and variation: the direction field of x′ = 2y − x, y′ = x on [−1, 3]² (arrows scaled to one length as the book scales them, vector-field colour), the initial point dragged (default (1, 0), the book's), its trajectory traced for 0 ≤ t ≤ 2 as time runs with the field's vector at the moving point; at t = 2 the book's (2.475, 2.457) · arrows: kinematic (the moving point and its velocity), the field symbolic · moving: t 0 to 2 in 5 s · sliders x₀, y₀ (−1 to 3, `F.drag`) · headline the point and the vector there · graph alone · 2D. Figure 3.2's state is the field before the trace starts.

## Extra simulations (rule 15)

None beyond the sketch's replacement: Example 3.1.6's solution is the trajectory figure's from (1, 0).

## Derivations (rule 29)

- Example 3.1.2, the rates x₁′ = (x₂/V)r − (x₁/V)r = … · score 1 (one fact, algebra after it) · not built: a worked example setting up its own model.
- Examples 3.1.4–3.1.6 · worked examples of the section's method · not built.
- Theorem 3.1.1 · stated, no proof · not built.

## Exercises

- Inline: 3.1.1 (check Example 3.1.6's solution) after `example-3-1-6`, AI-marked check.
- End: 3.1.2–3.1.7 AI-marked solutions (3.1.2, 3.1.3 computed and checked by SymPy; 3.1.4–3.1.7 set-ups written out); 3.1.101–3.1.106 the book's answers (3.1.105's and 3.1.106's "left to reader" kept as printed).

## Wanted at chapter level

Anchors: variables x, y, u → `3.1-systems` / `3.1-first-order`; forms of `two-tank-brine-system` → `3.1-sintro-closedbrine-example`, `two-cart-spring-system` → `3.1-sintro-carts-example`, (3.1) → `3.1-eq-general-system`.
