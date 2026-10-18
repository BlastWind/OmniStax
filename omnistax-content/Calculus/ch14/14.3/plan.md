# Plan: 14.3 Partial Derivatives (m53934)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-12. Template: `ch01/1.1`.

Four objectives, an opening paragraph, two definition notes, one theorem (Clairaut's), one Student Project (Lord Kelvin and the Age of Earth), Examples 14.14–14.20, seven checkpoints (14.12–14.18), six figures (14.21–14.26), Equations 14.12–14.23 (14.21 inside Checkpoint 14.18), five Key Concepts, two Key Equations, 51 section exercises (24 keyed), four glossary terms.

## Sub-concepts (page headers)

0. The opening paragraph (`partials-intro`).
1. `two-variables` **Derivatives of a Function of Two Variables**: the definition (Equations 14.12, 14.13), Example 14.14, Checkpoint 14.12, holding the other variable constant, Example 14.15, Checkpoint 14.13, the secant on a trace (Figure 14.21), the tangent lines parallel to the axes, Example 14.16 with Figure 14.22, Checkpoint 14.14.
2. `three-variables` **Functions of More Than Two Variables**: the definition (Equations 14.14–14.16), Examples 14.17, 14.18, Checkpoints 14.15, 14.16.
3. `higher-order` **Higher-Order Partial Derivatives**: the four second partials, mixed partials, Example 14.19, Checkpoint 14.17, Clairaut's theorem.
4. `pdes` **Partial Differential Equations**: Equations 14.17–14.19, Example 14.20 (Equation 14.20), Checkpoint 14.18 (Equation 14.21), Figure 14.23, the one-dimensional heat equation and its solution (Equation 14.22) with Figure 14.24, the Student Project with Figures 14.25, 14.26 and Equation 14.23.

## Concept nodes

Introduced: `partial-derivative` (`eq-partial-x`, `eq-partial-y`), `calculating-partial-derivatives`, `partial-derivative-as-a-slope`, `partial-derivatives-of-a-function-of-three-variables` (three forms), `higher-order-partial-derivatives` (`eq-second-partials`), `mixed-partial-derivatives`, `clairauts-theorem` (`eq-clairaut`), `partial-differential-equation`, `heat-equation` (three forms), `wave-equation`, `laplaces-equation`, `solution-of-the-heat-equation-in-one-dimension`. Uses: `derivative`, `leibniz-notation`, `chain-rule`, `secant`, `tangent-line`, `contour-map`, `vertical-trace`, `differential-equation`; points ahead to `directional-derivative` (14.6).

## Colour

Every partial derivative wears `derivative` through the macros (`\kfx`, `\kfy`, `\kfz`, `\kfxx`, `\kfxy`, `\kfyx`, `\kfyy`, `\kdfdx` … in fraction form and `\kdfdxin` … inline); f and g `function`; the surface `surface`; the trace `curve`; secant and tangent lines `line`. Second-order Leibniz forms ∂²f/∂x² stay ink, as do h, k, m and u's subscripted partials in the equations. No referents.

## Figures

- `sim-partial-secant` · Figure 14.21 · `partial-derivative`, `partial-derivative-as-a-slope` · variation and 3D: a stand-in surface (f(x, y) = 2 + sin x cos(y/2) over [−2.5, 2.5] × [−3, 3]; the book's surface has no formula) with the point (x₀, y₀), the trace it cuts parallel to the x-axis (or the y-axis), the secant through (x₀, y₀, f) and (x₀ + h, y₀, f(x₀ + h, y₀)) and, dashed, the tangent it approaches; choice of the variable (x, y), sliders h (−1.5 to 1.5, special 0 is excluded so h runs 0.02 to 1.5 as the book has h > 0), x₀, y₀ · arrows none · still · readout the difference quotient with live numbers beside f_x(x₀, y₀) · 3D free orbit; no buttons. Reason for 3D: the secant lies in a vertical plane over the surface.
- `fig-contour-g` · Figure 14.22 · `contour-map` · standardisation: a faithful copy (kind figure) of the contour map of g = √(9 − x² − y²) for c = 0, 1, 2, the circles labelled, the points (√5, 0) and (2√2, 0) of Example 14.16 marked · still · 2D.
- `sim-heat-snapshot` · Figure 14.23 · `heat-equation` · flow by animation and 3D: Checkpoint 14.18's solution u(x, y, t) = 2 sin(x/3) sin(y/4) e^(−25t/16) over [−20, 20]², its hills and hollows sinking toward zero as t runs from 0 to 3 (6 s, hold 1.2 s); the book's figure is the state t = 0 · arrows none · moving: the decay has a time · no sliders · readout u at the current t with e^(−25t/16) · 3D free orbit; no buttons. The book prints no caption; the Sim's caption is written for it.
- `sim-heat-wire` · Figure 14.24 · `solution-of-the-heat-equation-in-one-dimension` · 3D and flow by animation: the surface u_m(x, t) = e^(−π²m²c²t) sin(mπx) over the wire 0 ≤ x ≤ 1 and 0 ≤ t ≤ 1, the temperature profile at the moving time t drawn bold on it; choice m (1, 2, 3), slider c (0.2 to 1, default 0.5) · arrows none · moving: t runs 0 to 1 in 5 s · readout u_m(x, t) with the live amplitude · 3D free orbit; no buttons. The book's figure uses m = 1 with its own scaling (a peak near 12); the Sim draws the formula of Equation 14.22 as printed.
- `fig-kelvin` · Figure 14.25 · photo, kept: the project's portrait of Lord Kelvin and the Earth image, with the credit clause.
- `fig-kelvin-curves` · Figure 14.26 · kept as the book's image (kind photo): Kelvin's temperatures are plotted from constants the project does not state, so they cannot be redrawn from its numbers; the project points at it.

Two Sims live in WebGL besides `sim-partial-secant` (three in all).

## Exercises

- Checkpoints 14.12–14.18 inline, hints as `hint`; Checkpoint 14.18 (verify a solution of Equation 14.21, unkeyed) with an AI approach.
- Section exercises 112–162: odd keyed ones kept; unkeyed 140, 150, 157, 158 (show, verify) kept with AI approaches; the rest left out.
- Review 395 (true or false, keyed: Clairaut) and 407 held here.

## Extra simulations (rule 15)

None: `sim-partial-secant` carries the interpretation, and Clairaut's theorem has no picture the readout of a second partial would not repeat.

## Corrections

- Example 14.14: the numerator h(−3x + 4y + 2k + 5) over k (k).
- Project question 1: "Substitute this form into Equation 14.13", the definition of ∂f/∂y; the form goes into the radial equation, Equation 14.23.

## Wanted at chapter level

- forms: `eq-partial-x`, `eq-partial-y` → `14.3-fs-id1167793902985`; the three-variable forms → `14.3-fs-id1167793607547`; `eq-second-partials` → `14.3-second-partials`; `eq-clairaut` → `14.3-fs-id1167793605902`; heat, wave, Laplace forms → `14.3-pde-term`; `eq-heat-equation-1d` → `14.3-heat-1d`; `eq-heat-solution-1d` → `14.3-fs-id1167793929398`; `eq-heat-equation-radial` → `14.3-fs-id1167794139867`.
- variables anchored at build. Review 395, 407 placed here.

## Derivations

- Derivatives of a Function of Two Variables, g(x) = f(x, y) with y fixed · score 0 · built as drv-partial-derivatives-as-ordinary-derivatives, node 1; the same for h(y) with x fixed (the book's next display) as node 2, one family of thin printed blocks, hosted after the second set-up paragraph. The book's h′(x) and h(x + k) for a function of y are node 2's note
- Equality of Mixed Partial Derivatives (Clairaut's Theorem), stated with its proof left to advanced calculus books · score 9 · built as drv-clairauts-theorem after the paragraph that says so: the double difference Δ worked by the Mean Value Theorem of 4.4 twice in each order, the two lines joined, then h → 0 with the continuity of f_xy and f_yx
- Student Project · Lord Kelvin and the Age of Earth · score 12 · not built: the project poses the steps for the reader, and its Fourier step lies outside the book
