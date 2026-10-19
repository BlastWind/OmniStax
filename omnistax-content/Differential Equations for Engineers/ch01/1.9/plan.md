# Plan: 1.9 First-order linear PDEs (fopde:section)

Source: `source.md`. Status: built 2026-10-19 straight through (config 2). Section notes ("can safely be skipped") dropped and named in `notes`. Three examples, four figures (1.20–1.23), one numbered equation (1.6), one footnote (moving left), 9 end exercises (3 keyed); no inline exercise.

## Sub-concepts (page headers)

The book prints none but Exercises; three headers are OmniStax's:
- `characteristics` **The method of characteristics**: the opening through Example 1.9.1 and Figures 1.20–1.21.
- `general` **Characteristic curves in general**: from "We use a similar idea in the more general case" through Examples 1.9.2 and 1.9.3, Figures 1.22–1.23.
- `remarks` **Closing remarks**: from "We make a few closing remarks".

## Concepts

Introduced: `first-order-linear-pde` (definition; form a u_x + b u_t + c u = g, u(x, 0) = f(x)), `pde-initial-condition` (definition, "Initial condition for a PDE"), `method-of-characteristics` (skill; terms method of characteristics, characteristics), `transport-equation` (definition; form α u_x + u_t = 0), `transport-solution` (result; form u(x, t) = f(x − αt)), `characteristic-coordinates` (definition; form ξ = x − αt, s = t), `characteristic-curve` (definition; type curve), `convection` (definition), `characteristic-ode` (result, (1.6); forms du/ds + cu = g with dx/ds = a, dt/ds = b). Uses: `first-order-linear-differential-equation`, `integrating-factor-method`, `partial-differential-equation` (0.3).

## Colour, referents and symbols

u `function`, f (the initial data) `function`, u_x, u_t, u_ξ, u_s, du/ds `derivative`, the characteristic curves `curve`, the foot (ξ, 0) `point` where drawn; x, t, ξ, s, a, b, c, g, α, c₁, c₂, C in ink. No referents.

## Figures

- `sim-transport` · Figure 1.20 + 1.21 · `transport-equation`, `characteristic-curve`, `transport-solution`, `convection` · value add: flow by animation and variation: above, the profile u(x, t) = f(x − αt) of a peak at the origin (Figure 1.21's f) moving with velocity α as time runs from 0 to 2; below, the (x, t) plane with the characteristic lines ξ = 0, 1, 2 (Figure 1.20) and the others faint, slope 1/α, the line t = now sweeping up and the peak's characteristic lit; α on a slider (−2 to 2, default 1, a dashed circle at 0 where nothing moves) · arrows: kinematic (the moving profile; its motion along the lit characteristic) · moving: the clock runs t from 0 to 2 · readout u(x, t) = f(x − αt) with α and t; headline "t = 1.00: the peak has moved to x = 1.00." · graph: the profile above the (x, t) plane, both horizontal · 2D.
- `sim-curvy-characteristic` · Figure 1.22 (Example 1.9.3) · `characteristic-curve`, `characteristic-ode` · value add: variation and standardisation: the sketch's general characteristic made concrete with Example 1.9.3's x u_x + u_t + 2u = 0: the curves x = ξe^s, t = s in the (x, t) plane, the one through (ξ, 0) the reader picks bold with its foot marked x = ξ, s = 0, the point (x(s), t(s)) at the s the reader sets, and the value u = e^(−2s) cos ξ carried along it written beside the point · arrows: none · still · sliders ξ (−2 to 2, default 1), s (0 to 1.5, default 0.8) · headline "On ξ = 1.00, at s = 0.80: (x, t) = (2.23, 0.80), u = 0.109." · readout x = ξe^s, t = s, u = e^(−2s) cos ξ · graph alone · 2D.
- `sim-pde-surface` · Figure 1.23 (Example 1.9.2) · `characteristic-ode`, `method-of-characteristics` · value add: flow by animation, and depth: the solution u = e^(−(x−t)² − t) + (1 − x + t)e^(−t) + x − 1 drawn flat as the profile at time t moving as the clock runs from 0 to 3 (the bump riding the characteristics while it fades and the profile tends to x − 1), and in a second view (a 2D | 3D choice, archetype 10) the surface over x −3 to 3, t 0 to 3 with the characteristic lines x − t = ξ drawn on it and the current slice; the surface shows the shape over the (x, t) plane along which the bump travels, which the moving profile alone cannot (book rule: the characteristic lines of 1.9) · arrows: none · moving: the clock runs t · choice view (2D, 3D); 3D mathematical, free orbit with pitch bounded above the (x, t) plane (the surface is read from above; beneath shows nothing new), no buttons · readout u(x, t) with t · headline "t = 1.00: the bump has moved to x ≈ 1 and fallen to 0.37 of its height." · 2D first.

## Extra simulations (rule 15)

None.

## Exercises

End: 1.9.1–1.9.6 kept with AI-marked solutions checked by SymPy (each solution substituted back into its PDE and initial condition; 1.9.6's trick: u = 0 solves it); 1.9.101–1.9.103 with the book's answers, each checked.

## Wanted at chapter level

- Anchors: `first-order-linear-pde`, `pde-initial-condition`, `method-of-characteristics` → `1.9-characteristics`; `transport-equation`, `transport-solution`, `characteristic-coordinates`, `characteristic-curve`, `convection` → `1.9-example-1-9-1`; `characteristic-ode` → `1.9-eq-fopde-charode`; variable u → `1.9-characteristics`.

## Derivations

- Example 1.9.1 · the transport equation in characteristic coordinates, u = f(x − αt) · built as `drv-transport` (eyebrow Example 1.9.1; facts: ξ = x − αt, s = t, the chain rule, the initial condition; five moves), replacing the displays from the chain rule to u = f(x − αt); the prose between stays.
- The general case · (1.6) by the chain rule along (x(s), t(s)) · printed as one display · built as `drv-characteristic-ode` (facts: dx/ds = a, dt/ds = b, the chain rule; two moves), replacing the display.
- Examples 1.9.2, 1.9.3 · scores 2, 2 · not built: the method with numbers.
- No solution of u_x + u = 0, u(x, 0) = sin x · score 1 · not built.
