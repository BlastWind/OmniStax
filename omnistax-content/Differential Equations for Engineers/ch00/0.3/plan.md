# Plan: 0.3 Classification of differential equations (classification:section)

Source: `source.md` from `tools/convert.py 0`. Status: built 2026-10-19 (sec-0.3 task), planned the same day from the source, `ch00/config.md` (items 12 and 13), `ch00/COLOR.md`, `ch00/exploration.md`, the merged concepts and the template 0.2, built straight through (config 2); `ost check diffyqs --section 0.3` clean, built and checked in the browser in light and dark (no console or page errors, the Sim has a canvas and a transport, the equation links resolve, the sliders change the figure and the readout reads true, frames taken at 40 %, at rest, over the top and under reduced motion).

No subsections of the book's own, no examples, no figures (the `[3]` after the last display is `\pagebreak[3]`, dropped: there is no Figure 3), equations (2)–(5), the displays of the named equations, end Exercises 0.3.1–0.3.4 and 0.3.101–0.3.103, the section note (dropped, named in `notes`). No inline exercises, no footnotes, no citation outside the dropped note.

## Sub-concepts (page headers)

The book runs the section as one piece, so the headers are OmniStax's (root rule 3), one per category the book introduces:

- `ode-pde` **Ordinary and partial differential equations**: `p#classification-intro`, the two definitions as the book's list (`ul#ode-pde-list`), the ODE examples (`div.equation#examples-ode`: exponential growth, Newton's law of cooling, mechanical vibrations) and the PDE examples (`div.equation#examples-pde`: transport, heat, wave).
- `systems` **Systems of differential equations**: `p#system` (the defined term; the display `eq-system` with y′ = x, x′ = y follows it), Maxwell's equations (`div.equation#maxwell`), the sentence on divergence and curl (`p#maxwell-note`).
- `order-of-equation` **Order**: `p#order` (the defined term; the beam equation `div.equation#eq-beam` follows it), `p#first-order-form` (first-order ODEs dy/dx = f(x, y), the form `eq-first-order-general`).
- `linear-nonlinear` **Linear and nonlinear equations**: `p#linear` (the defined term), equation (2) `div.equation#eq-2` (the form `eq-linear-ode`), `p#coefficients` (the defined term), equation (3) `div.equation#eq-3`, `p#nonlinear` (the defined term), Burgers' equation `div.equation#burgers`, equation (4) `div.equation#eq-4`, equation (5) `div.equation#eq-5`, `p#pendulum` (the two pendulum solutions), the pendulum Sim.
- `homogeneous-equations` **Homogeneous equations**: `p#homogeneous` (the defined terms homogeneous, nonhomogeneous, inhomogeneous), the homogeneous form `div.equation#eq-homogeneous`, `p#homogeneous-compare` ("Compare with (2)…").
- `constant-coefficients` **Constant coefficients**: `p#constant-coefficient` (the defined term), the constant-coefficient form `div.equation#eq-constant-coefficient`, `p#variable-coefficient` (the constants a₀…aₙ, the PDE examples, the defined term variable-coefficient).
- `autonomous-equations` **Autonomous equations**: `p#autonomous` (the defined term), the autonomous form `div.equation#eq-autonomous`.

The section ids carry a suffix where a paragraph of the same name holds the prep's anchor (`p#order`, `p#linear`, `p#homogeneous`, `p#autonomous`), since an id is used once.

Every cited equation number is linked by hand: `<a href="#eq-2">(2)</a>`, `(3)`, `(4)`, `(5)`.

## Concepts (merged by the prep; ids as merged)

Introduced (one `introduces` row each): `system-of-differential-equations` (`p#system`); `order-of-a-differential-equation` (`p#order`); `linear-differential-equation` (`p#linear`); `coefficients-of-a-linear-equation` (`p#coefficients`); `nonlinear-differential-equation` (`p#nonlinear`); `homogeneous-linear-equation`, `nonhomogeneous-linear-equation` (`p#homogeneous`); `constant-coefficient-equation` (`p#constant-coefficient`); `variable-coefficient-equation` (`p#variable-coefficient`); `autonomous-differential-equation` (`p#autonomous`).

Used from 0.2: `ordinary-differential-equation`, `partial-differential-equation`, `independent-variable`, `dependent-variable`, `differential-equation`, `first-order-differential-equation`, `second-order-differential-equation`, `exponential-growth`, `solution-to-a-differential-equation`. Mentions that name a concept of a later chapter take its id too (rule 7): `newtons-law-of-cooling` (1.3), `transport-equation` (1.9), `pendulum-equation` (2.4); the heat equation, the wave equation, mechanical vibrations, Burgers' and Maxwell's equations name no concept of the book and stay plain.

Calculus links for what the page assumes, on the book's own words: partial derivatives (Calculus 14.3), the divergence and curl operators (Calculus 16.5).

## Colour and referents

Every dependent variable wears `function` (`\ky`, `\kx`, `\ku`, `\ktheta`) and every derivative `derivative` (`\kdydt`, `\kdxdt`, `\kdtwoxdt`, `\kyprime`, `\kxprime`, `\kdydx`, `\kdtwoydx`, `\kdnydx`, `\kdnmoneydx`, `\kthetadprime`, `\kput`, `\kptwoux`, `\kptwout`, `\kptwouy`, `\kpyt`, `\kpyx`, `\kptwoyx`, `\kptwoyt`, `\kpfouryx`), which is what makes the order and the linearity of each display readable at a glance (chapter `COLOR.md`). Ink: t and the independent x, y, z, the constants k, A, m, c, a, ν, the coefficients aₙ(x) and the right-hand sides b(x), f(t), f(x), f(x, y), and Maxwell's fields D, B, E, H, ρ, J, which the section only names.

Referents (chapter `COLOR.md`): `nonlinear-pendulum`, the solution of θ″ + sin θ = 0, and `linear-pendulum`, the solution of θ″ + θ = 0; the text marks "The solutions" and "they" in `p#pendulum` with both ids, and the Sim draws each as one bob and one curve in its referent colour.

## Figures

- `sim-pendulum` · Sim (no book figure; the chapter's rule 23 picture "the linear pendulum drifting away from the true one", `ch00/exploration.md`) · `nonlinear-differential-equation`, `linear-differential-equation`, `solution-to-a-differential-equation` · value add: intuition and flow by animation: the pendulum equation θ″ + sin θ = 0 and its linear stand-in θ″ + θ = 0 are started from the same θ(0) and θ′(0); two bobs swing from one pivot and the two θ(t) curves are traced beside them, so the reader sees the two solutions agree for a while and then drift apart (the text's "close for some short time"), the nonlinear swing taking longer than the linear 2π, and at a large enough push the nonlinear pendulum go over the top while the linear one keeps oscillating · arrows: kinematic (the bobs swing and the curves are traced in time), which sets the moving tier · moving: the transport runs t from 0 to 20, the bobs at θ(t) of each equation, each curve drawn up to t, a dot on each at the present time · sliders θ(0) (`point`, 0.1 to 3.0 rad, default 1.0) and θ′(0) (`point`, −2 to 2, default 0; both are the initial condition, chapter `COLOR.md`) · headline "θ(0) = 1.00 rad, θ′(0) = 0.00: the two solutions stay within 0.1 rad until t = 1.6, and at t = 20 they differ by 0.59 rad." (or "stay within 0.1 rad all the way to t = 20"; the numbers checked against SciPy's integrator in `pendulum_numbers.py`) · readout the two equations with the live values, θ″ + sin θ = 0: θ(t) = … rad, θ″ + θ = 0: θ(t) = … rad, and a note line with the two periods, one full swing of the nonlinear pendulum (4K(sin(θₘₐₓ/2)), K by the arithmetic–geometric mean: 6.70 at the defaults) against 2π ≈ 6.28, or, past the separatrix ½θ′(0)² − cos θ(0) ≥ 1, that the pendulum goes over the top and keeps turning · graph beside the scene (a vertical scene: book `RULES.md`, Figures) · 2D. Axes t 0 to 20, θ −4 to 4 rad (the sliders' extremes give a linear amplitude up to 3.6 rad; a nonlinear θ past the box is pinned at its edge). The nonlinear solution is integrated by RK4 at step 0.005 once per slider change; the linear one is θ(0) cos t + θ′(0) sin t exactly. The two bobs and the two curves are labelled once in a legend in the scene and named on hover (they move, rule 26.7); the linear bob is drawn a little larger under the nonlinear one so both show while they coincide. The transport runs t at 4 per second (one loop about 5 s, held 1.2 s); reduced motion opens at rest at t = 20.

No book figure to replace; no faithful copy.

## Extra simulations (rule 15)

Built: the pendulum Sim above (the chapter's rule 23 line and `COLOR.md` name it). Considered and rejected: a "classify this equation" picker (a quiz over notation, not a quantity; rule 24.9); dx/dt = x² blowing up beside dx/dt = x (the finite-time blow-up is Chapter 1's lesson, and the text says only that nonlinear solutions "may behave in strange ways"); Maxwell's equations written out by a button (notation, no view the text does not give).

## Derivations (rule 29)

None: the section states definitions and gives examples, works nothing.

## Exercises

- No inline exercises; no `exercises_lead` (the book prints the "101 and higher" note in 0.2 only).
- End exercises 0.3.1–0.3.4 (kind `exercise`, unkeyed, ids `e1`–`e4`): every one kept with an AI-marked solution stating the answer and the reasoning in the book's terms (config 10), every classification checked by a SymPy script (`verify.py` in the task's scratch: order, linearity, homogeneity, constant coefficients and autonomy read off each equation): 0.3.1 a) ODE, equation, 2nd order, linear, nonhomogeneous, variable-coefficient, not autonomous; b) PDE, equation, 1st order, linear, nonhomogeneous, constant-coefficient; c) ODE, system, 2nd order, linear, homogeneous, constant-coefficient, autonomous; d) PDE, equation, 2nd order, nonlinear; e) ODE, equation, 2nd order, nonlinear, not autonomous; f) ODE, equation, 4th order, linear, homogeneous, constant-coefficient, autonomous. 0.3.2 Maxwell's equations written out as eight first-order PDEs in the twelve components, a linear constant-coefficient system, nonhomogeneous where ρ or J is not zero. 0.3.3 a y′ + b y = 0 with a ≠ 0: a first-order linear homogeneous constant-coefficient autonomous ODE, whose solutions are y = Ce^(−bt/a). 0.3.4 one explicit system of two third-order equations in x and y with every derivative through the third in each, the coefficients t and e^t, and the right-hand sides t and 1. Shapes: `open` for all four (0.3.1 is one card with parts a)–f) as an `<ol type="a">`).
- 0.3.101–0.3.103 (kind `exercise`, ids `e101`–`e103`): the book's `\exsol` as the `solution` (`generated_by: source`), all `open` (0.3.103's two answers for one k stay the book's one line).
- Symbols in prompts and solutions: the section's own through the macros where a part's every symbol has a row (x, x″ and y, y″ of the systems take `\kxdprime`, `\kydprime`, whose chapter rows are 0.2's); a part with a derivative the chapter has no row for (∂u/∂x, ∂u/∂y, ∂²u/∂s², ∂²v/∂x², d⁷F/dx⁷, d⁴x/dt⁴) is written plain so that no equation is half-coloured; the one-off letters v, F, s, a, b, k, u₁…u₃ stay in ink (chapter `COLOR.md`).

## Wanted at chapter level

- Anchors already set by the prep, all resolving once this page is built: variables y, dy/dt, x, dx/dt, d2x/dt2 → `0.3-examples-ode`; y_prime, x_prime → `0.3-system`; dy/dx → `0.3-first-order-form`; d2y/dx2 → `0.3-eq-3`; dny/dxn, dn1y/dxn1 → `0.3-eq-2`; θ, θ_dprime → `0.3-eq-5`; u, ∂u/∂t, ∂2u/∂x2, ∂2u/∂t2, ∂2u/∂y2, ∂y/∂t, ∂y/∂x → `0.3-examples-pde`; ∂2y/∂x2 → `0.3-burgers`; ∂2y/∂t2, ∂4y/∂x4 → `0.3-order`. Forms: `eq-first-order-general` → `0.3-first-order-form`, `eq-linear-ode` → `0.3-eq-2`, `eq-homogeneous-linear-ode` → `0.3-eq-homogeneous`, `eq-constant-coefficient-ode` → `0.3-eq-constant-coefficient`, `eq-autonomous-first-order` → `0.3-eq-autonomous`.
- Closer anchors, optional: y_prime, x_prime → `0.3-eq-system` and ∂2y/∂t2, ∂4y/∂x4 → `0.3-eq-beam`, the displays where the symbols stand (the present anchors land on the paragraph just before each display, which the hover's jump reaches as well).
- Variables rows wanted for the exercises' second derivatives, after `ost meanings`: `0.3/y_dprime` (derivative, "the second derivative of y with respect to t, in the systems of Exercises 0.3.1 and 0.3.101") and `0.3/x_dprime` (derivative, "the second derivative of x with respect to t"); until then the symbols wear 0.2's rows (same type, the hover meaning 0.2's).
- 0.2's `p#de-definition` names Newton's law of cooling, which is the book's concept `newtons-law-of-cooling` (1.3); 0.3 marks its mentions, and 0.2's could take the span in the chapter pass for consistency.
- Glossary words: none (the book has no glossary); concept and edge fixes: none.

Chapter pass (pass-ch00, 2026-10-19): the closer anchors are applied, y_prime and x_prime → `0.3-eq-system`, ∂2y/∂t2 and ∂4y/∂x4 → `0.3-eq-beam`. The rows `0.3/y_dprime` and `0.3/x_dprime` are added (`derivative`, the meanings above, after `ost meanings`: every other row of each is "the second derivative" of the same letter, the 0.2 rows included, so neither is a redefinition and the checker raises no warning). 0.2's "Newton's law of cooling" now wears the concept span as this page's mentions do. Glossary and edges: nothing to do.

## Conventions

0.2's "Conventions for later sections" are followed as written; this page adds nothing to them.
