# Plan: 1.4 Linear equations and the integrating factor (intfactor:section)

Source: `source.md`. Status: built 2026-10-19 straight through (config 2). Section notes dropped and named in `notes`. Two examples, one figure (1.10) and the tank sketch of Example 1.4.2, one boxed formula (1.4), one remark (1.4.1), three inline exercises (1.4.1–1.4.3), 14 end exercises (5 keyed), the line "In the exercises, feel free to leave the answer as a definite integral…" as `exercises_lead`.

## Sub-concepts (page headers)

The book prints none but Exercises; two headers are OmniStax's:
- `linear` **The integrating factor**: the opening through Example 1.4.1, inline 1.4.1, the boxed (1.4), inline 1.4.2–1.4.3, Remark 1.4.1.
- `mixing` **Mixing problems**: Example 1.4.2 with its tank and Figure 1.10.

## Concepts

Introduced: `first-order-linear-differential-equation` (Calculus's id; terms linear equation, first-order linear equation; form (1.3) y′ + p(x)y = f(x)), `integrating-factor` (Calculus's id; definition; form r(x) = e^(∫p(x) dx); type function), `integrating-factor-method` (skill; terms integrating factor method; form y = e^(−∫p dx)(∫e^(∫p dx)f dx + C)), `linear-ivp-solution` (result, boxed (1.4)), `existence-for-linear-equations` (result, Remark 1.4.1), `mixing-problem` (skill; form dx/dt = (rate in)(concentration in) − (rate out)(concentration out)). Uses: `first-order-ode`, `linear` (Chapter 0's classification, where it names a linear equation), `picards-theorem`, `integral-solution`.

## Colour, referents and symbols

y `function`, y′ `derivative`, p(x), f(x), r(x) `function`, x(t) the salt `function`, dx/dt `derivative`; the exponent ∫p dx wears `integral` through its words; t, C, x₀, y₀ in ink. No referents.

## Figures

- `sim-brine-tank` · Figure 1.10 (with the tank sketch of Example 1.4.2 among its originals) · `mixing-problem`, `linear-ivp-solution` · value add: flow by animation and variation: the tank of Example 1.4.2 (100 L, 60 L of water and 10 kg of salt at t = 0) filling as brine runs in at the top and mixture runs out at the bottom, the liquid shaded by its concentration, the level rising to full at t = 20; beside it the graph of x(t) traced as time runs, with the book's x(20) = 11.86 kg marked; sliders for the inflow concentration (0 to 0.3 kg/L, default 0.1) and the outflow rate (1 to 4.5 L/min, default 3; the inflow stays the book's 5 L/min), so the reader sees the salt rise or fall toward the inflow's concentration and the full time move with 40/(5 − rate out) · arrows: kinematic (the streams in and out, drawn as moving dashes) · moving: the clock runs from 0 to the time the tank is full · readout dx/dt = 5(0.1) − 3x/(60 + 2t) with the live x and t; headline "t = 12.0 min: 84 L hold 11.25 kg of salt." · graph beside the vertical tank · 2D.

## Extra simulations (rule 15)

None. Weighed and dropped: a picture of the integrating factor turning y′ + py into (ry)′ (it is algebra; the derivation below carries it move by move).

## Exercises

Inline: 1.4.1 (after the paragraph on the constant of integration), 1.4.2 and 1.4.3 (after the boxed (1.4)), AI-marked approaches checked by SymPy. End: 1.4.4–1.4.12 kept with AI-marked solutions (1.4.9 a three-part lakes problem, 1.4.10 the oscillating ambient, checked by SymPy); 1.4.101–1.4.105 with the book's answers.

## Wanted at chapter level

- Anchors: forms of `first-order-linear-differential-equation` → `1.4-lineq-eq1`; `integrating-factor`, `integrating-factor-method` → `1.4-linear`; `linear-ivp-solution` → `1.4-lei-defsol`; `mixing-problem` → `1.4-example-1-4-2`; variables p, r → `1.4-linear`, x(t) → `1.4-example-1-4-2`.

## Derivations

- The integrating factor · from y′ + p(x)y = f(x) to the general solution, the book's five-line block · built as `drv-integrating-factor` (facts: the equation, r(x) = e^(∫p dx), r′ = rp by the chain rule, the product rule; four moves); it replaces the block after "We compute:".
- The boxed (1.4) · score 2 · not built: the general solution rewritten with definite integrals, one move.
- Example 1.4.1 · score 1 · not built: the method with numbers.
- Example 1.4.2 · the mixing equation and its solution · score 3 · not built: the balance law (two moves) and the method with numbers.
