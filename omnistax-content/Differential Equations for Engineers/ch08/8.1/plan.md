# Plan: 8.1 Linearization, critical points, and equilibria (`linearization:section`)

Source: `source.md`. Status: plan written 2026-10-19 at prep stage one; built straight through after the merge (config 2). Template: `ch00/0.2` for the prose, `ch03/3.5` and `ch03/3.1` (`sim-direction-field`) for the portraits.

An opening on linear against nonlinear equations with the pendulum sketch `mv-pend`, two book subsections, equation (8.1), Examples 8.1.1 and 8.1.2, Figures 8.1 and 8.2, one book footnote (Jacobi), no inline exercise, end exercises 8.1.1–8.1.6 and 8.1.101–8.1.104 (ten, four keyed), six direction-field images in Exercises 8.1.2 and 8.1.102. Section notes dropped (`notes`).

## Sub-concepts (page headers)

0. `nonlinear-intro`: the section's own opening (linear equations suffice in many applications…), the pendulum sketch kept as the book's `<img>` (`data-width` 1.5in → 144), the two pendulum equations, the "why not solve it" paragraph.
1. `autonomous` **Autonomous systems and phase plane analysis** (the book's): the system x′ = f(x, y), y′ = g(x, y), its solutions, equation (8.1) as `eq-8-1`, the phase portrait and vector field (`p#phase-portrait`, reinforcing 3.1), Example 8.1.1 with `sim-portrait-x2` (Figure 8.1) at its place, the zoom paragraph, critical points (`p#critical-points`), equilibria and equilibrium solutions (`p#equilibria`).
2. `linearization` **Linearization** (the book's): the recall of 3.5, u = x − x₀, v = y − y₀, the Jacobian matrix with its footnote (`p#jacobian`), the linearization (`p#linearization`), Example 8.1.2 with `sim-linearizations` (Figure 8.2) at its place.

## Concepts

Introduced: `planar-autonomous-system` (definition; forms (8.1) `eq-planar-autonomous-system`, `eq-planar-autonomous-system-scalar`; terms autonomous system, phase portrait, phase diagram, vector field as the book italicises them here), `critical-point-of-a-system` (definition, `point`; form `eq-critical-point-of-a-system`), `equilibrium-solution-of-a-system` (definition, `function`; form), `jacobian-matrix` (definition, `matrix`, symbol J; form), `linearization-of-a-system` (definition; forms `eq-linearization-of-a-system`, `eq-linearization-variables`), `finding-critical-points-and-linearizations` (skill: Examples 8.1.2, Exercises 8.1.3, 8.1.4, 8.1.101, 8.1.103).
Reinforced: `autonomous-system`, `phase-portrait`, `vector-field`, `trajectory` (3.1), `equilibrium-point`, `equilibrium-solution` (1.6, "the underlying concept is exactly the same"), `pendulum-equation`, `small-angle-approximation` (2.4), `linear-differential-equation`, `nonlinear-differential-equation` (0.3). Uses: `behavior-of-planar-linear-systems` (3.5), `matrix`, `invertible-matrix` (3.2), `converting-to-a-first-order-system` (3.1, Example 8.1.1's rewriting).

Calculus links for what the page assumes: partial derivatives (Calculus 14.3) at the Jacobian; the tangent-line idea ("approximate a function by a line with the right slope", Calculus 4.2) in the opening.

## Colour and referents

x, y, u, v, θ, f, g wear `function` (`\kx`, `\ky`, `\ku`, `\kv`, `\ktheta`, `\kf`, `\kg`); x′, y′, x″, θ″ and the four partials `derivative` (`\kxprime`, `\kyprime`, `\kxdprime`, `\kthetadprime`, `\kpfx`, `\kpfy`, `\kpgx`, `\kpgy`); the Jacobian `matrix` (the symbol J is named only in 8.2); critical points `point`; the field `vector-field`; trajectories `curve`. t, x₀, y₀, g, L in ink. No referents.

## Figures

- `sim-portrait-x2` · Figure 8.1 (Example 8.1.1) · `planar-autonomous-system`, `critical-point-of-a-system`, `equilibrium-solution-of-a-system`, `phase-portrait`, `trajectory` · value add: flow by animation and variation: the vector field of x′ = y, y′ = −x + x² on the book's window [−2, 2]² (arrows one length as the book draws them, `vector-field`), the book's trajectories faint (the closed ovals round the origin, the loop through the saddle, the escaping curves), the two critical points marked ((0, 0) filled, (1, 0) hollow, labelled), and the trajectory through the point the reader drags (default (0.5, 0), inside the ovals) traced both ways with a dot riding it forward in time, so the reader sees which starts circle the origin and which go off towards infinity; a start placed on a critical point shows the equilibrium solution, the dot that never moves · arrows: the field symbolic, the riding dot kinematic · moving: t 0 to 12 in 5 s, hold 1.2 s · sliders x₀, y₀ (−2 to 2, step 0.01, `point`) held by `F.drag`, with dashed circles at the two critical points (both coordinates) · headline "From (0.50, 0): x′ = 0, y′ = −0.25, and the trajectory circles the origin." or "…and the trajectory escapes to the right." · graph alone · 2D.
- `sim-linearizations` · Figure 8.2 (Example 8.1.2) · `linearization-of-a-system`, `jacobian-matrix`, `critical-point-of-a-system` · value add: intuition and variation: two panes on one canvas; left, the nonlinear portrait of Example 8.1.1 in a square window of half-width w centred on the chosen critical point; right, the linearization's portrait in (u, v) on the window [−w, w]², the book's [−1, 1]² at w = 1 (its picture) and the same circles or the same saddle lines as w shrinks: the zoom is the linearization, and at w = 0.2 the two panes are indistinguishable. A choice swaps the critical point, (0, 0) (the circles, J = [0 1; −1 0]) or (1, 0) (the saddle, J = [0 1; 1 0]), morphing both panes; trajectories flow in both panes from the same seeds · arrows: the field symbolic, the riding dots kinematic · moving: t 0 to 8 in 5 s, hold 1.2 s · choice critical point (two), slider w (0.1 to 1.5, step 0.05, default 1, detent at the book's 1, untyped) · headline "At (1, 0), J = [0 1; 1 0]: zoomed to ±0.20 the portrait and its linearization agree." · graph beside graph (two square panes) · 2D. Widths: the book's 9in → 864 for the pair.
- `mv-pend` (unnumbered sketch at the opening): kept as the book's `<img>`, 1.5in → 144 px; it illustrates the two equations, and the live pendulum is 8.3's figure, where the text analyses the motion.
- The six direction-field images of Exercises 8.1.2 and 8.1.102: kept as the book's images in the cards (they serve exercises: no sliders, no animation), 1.75in → 168 px each, labelled a), b), c) as the book prints them.

## Extra simulations (rule 15)

None beyond the zoom of `sim-linearizations`. Weighed and dropped: a "nonlinear against linear pendulum" figure for the opening (2.4's `sim-pendulum` already draws θ beside its linear model; the paragraph links it); a figure for Exercise 8.1.104's three-dimensional autonomous system (an exercise, and the construction is one line).

## Derivations (rule 29)

- Example 8.1.2, the Jacobian at (0, 0) and (1, 0) · score 1 · not built: a worked example evaluating the section's matrix.
- The derivation of the Jacobian as "the best linear approximation" · hidden ("in multivariable calculus you may have seen") · score 2 · not built: a Calculus link.

## Exercises

End exercises (kind `exercise`), every one kept:
- 8.1.1 (sketch three fields) · AI-marked description of each field (a: both components ≥ 0, arrows point up-right, zero only at the origin; b: x′ ≥ 0 with y′ = −x; c: both positive, growing with x and y); `open`.
- 8.1.2 (match three systems to three fields) · AI-marked: a) x′ = x², y′ = y² is the second picture (`nlin-exer-x2-y2`: zero at the origin, arrows away in the first quadrant and towards it in the third), b) x′ = xy, y′ = 1 + y² the first (`nlin-exer-xy-1py2`: y′ > 0 everywhere, arrows up, tilting with the sign of xy), c) x′ = sin πy, y′ = x the third (`nlin-exer-sinpiy-x`: circulation about (0, 0) and (0, ±1) on the y-axis); the three images in the card; `open`.
- 8.1.3 (critical points and linearizations) · a) four points (±1/√2, ±1/√2): at (1/√2, 1/√2) J = √2[1 −1; 1 1], at (−1/√2, −1/√2) J = √2[−1 1; −1 −1], at (−1/√2, 1/√2) J = √2[−1 −1; −1 1], at (1/√2, −1/√2) J = √2[1 1; 1 −1]; b) (0, 0) only, J = [0 −1; 3 0]; c) (0, 0) with J = [0 1; 1 0] and (−1, −1) with J = [−2 1; 1 −2]; each linearization written in u, v (SymPy); `open`.
- 8.1.4 (verify (0, 0) is critical, linearize) · a) J = [1 2; 0 2]; b) J = [0 −1; 1 0]; c) the linearization is u′ = au + bv, v′ = cu + dv, since the partials of f and g vanish at the origin; `open`.
- 8.1.5 (x′ = (x − y)², y′ = (x + y)²) · a) only (0, 0); b) both derivatives are ≥ 0, so every trajectory moves up and to the right and the origin is approached from below-left and left from above-right (described); c) the Jacobian at (0, 0) is the zero matrix: the linearization u′ = 0, v′ = 0 says nothing; `open`.
- 8.1.6 (x′ = x², y′ = x³) · a) the whole y-axis x = 0; b) x increases for x ≠ 0, y increases for x > 0 and decreases for x < 0, trajectories leave the axis to the right and arrive from the left (described); c) J = [2x 0; 3x² 0] is zero on the axis: the linearization is useless; `open`.
- 8.1.101–8.1.104 · the book's answers (`generated_by: source`); 8.1.101 and 8.1.103 confirmed by SymPy; 8.1.102's three images in the card and an AI-marked line reading the book's "1) is c), 2) is a), 3) is b)" as system a) ↔ picture c), b) ↔ a), c) ↔ b) (checked by the fields: `y-xm1xp1` is b), `ypx2-mx` is c), `y2-mx2` is a)).
- Tags: the asterisk on 8.1.4 c) kept in the prompt as the book prints it.

## Wanted at chapter level

- Anchors: `planar-autonomous-system` and its forms → `8.1-autonomous` / `8.1-eq-8-1`; `critical-point-of-a-system` → `8.1-critical-points`; `equilibrium-solution-of-a-system` → `8.1-equilibria`; `jacobian-matrix` → `8.1-jacobian`; `linearization-of-a-system` → `8.1-linearization`; `finding-critical-points-and-linearizations` → `8.1-ex-8-1-2`. Variables x, y, x′, y′, f, g → `8.1-autonomous`; θ, θ″ → `8.1-nonlinear-intro`; u, v, the partials → `8.1-jacobian`.
- Symbols: ∂f/∂x, ∂g/∂x, ∂g/∂y are staged here (`\kpfx`, `\kpgx`, `\kpgy`); ∂f/∂y is Chapter 1's (`\kpfy`, Picard's theorem) and is not restaged.
- Variables `concept` links (stage two): x, y, θ, u, v → `dependent-variable` as Chapters 0–1 link them; J → `jacobian-matrix`.
