# Plan: 1.3 Separable equations (separable:section)

Source: `source.md`. Status: built 2026-10-19 straight through (config 2); text, figures, derivation and `section.json` reviewed against the source and the merged concepts, `ost check diffyqs --section 1.3` clean, built and checked in the browser in light and dark on 2026-10-19 (sec-1.3 task). Section notes dropped and named in `notes`. Four examples (1.3.1–1.3.4), two figures (1.8, 1.9), one derivation, 19 end exercises (7 keyed); no inline exercise (the book prints none here).

## Sub-concepts (page headers)

The book's: the introduction (`p#intro`, no header), `separable-equations` **Separable equations** (`p#separable`, the displays `eq-separable`, `eq-separated-differentials`, `eq-separated`, Example 1.3.1 as `div#ex-1-3-1`, `p#careful` and the derivation `drv-separable`), `implicit-solutions` **Implicit solutions** (`p#stuck`, `eq-implicit-example`, `p#implicit`, `p#two-curves`, Figure 1.8, `eq-implicit-general`, `p#singular`, `p#implicit-ic`), `more-examples` **More examples of separable equations** (`div#ex-1-3-2`, `div#ex-1-3-3` with `eq-newton-cooling`, `eq-newton-cooling-solution` and Figure 1.9 inside it, `div#ex-1-3-4`).

## Concepts (merged by the prep)

Introduced (one `introduces` row each): `separable-differential-equation` (Calculus's id; terms separable; form `eq-separable`) at `p#separable`; `separation-of-variables` (Calculus's id; skill; forms `eq-separated`, `eq-separated-differentials`) at `p#separating`, the paragraph that names f(x) and g(y) and leads into the rewrite; `implicit-solution` (definition, type function) at `p#implicit`; `singular-solution` (definition, type function) at `p#singular`; `newtons-law-of-cooling` (Calculus's id; axiom, stated as given in Example 1.3.3; forms `eq-newton-cooling`, `eq-newton-cooling-solution`) at `div#ex-1-3-3`. Uses: `differential-equation`, `first-order-differential-equation`, `integral-solution` (1.1), `antiderivative`, `solution-to-a-differential-equation`, `verifying-a-solution`, `general-solution`, `particular-solution`, `initial-value`, `solving-an-initial-value-problem`, `mathematical-model`.

Calculus links on the book's own words for what the page assumes: Leibniz notation (3.2), implicit differentiation (3.8) and the chain rule (3.6); the change of variables formula is a fact of the derivation with its provenance "Calculus, 5.5 Substitution". Nothing of Calculus 8.3 is repeated.

## Colour, referents and symbols

y `function` (`\ky`), y′ and dy/dx `derivative` (`\kyprime`, `\kdydx`), f(x) and g(y) `function` (`\kf`, `\kg`), T the coffee's temperature `function` (`\kT`), dT/dt `derivative` (`\kdTdt`); x, dx/dt and x′ in the exercises (`\kx`, `\kdxdt`, `\kxprime`); x, t, A, k, C, D in ink. The initial point of Figure 1.8 and the two measured temperatures of Figure 1.9 are `point` (chapter `COLOR.md`: an initial condition and a draggable start; the measurements are the data that fix the solution, as 0.2's P(0) and P(10)). No referents.

## Figures

- `sim-implicit` · Figure 1.8 · `implicit-solution`, `singular-solution`, `initial-value` · value add: variation and intuition: the implicit solution y² + 2 ln|y| = x² + D drawn as its two curves (with h(y) = y² + 2 ln y increasing on y > 0, the top curve is y = h⁻¹(x² + D) and the bottom its mirror), the one through the initial point full and the other thin, the book's D = 0 pair faint behind them, and the singular solution y = 0 dashed between; the initial point (x₀, y₀) the reader drags fixes D = y₀² + 2 ln|y₀| − x₀² and picks the curve through it, and on the axis it is y = 0 itself; opens on the book's D = 0 with the point (1, 1) the text names · arrows: none · still: a family under its initial point has no clock · sliders x₀, y₀ (`point`) held by `F.drag`, with dashed circles on y₀ at y = 0 (the singular solution) and at ±h⁻¹(x₀²) (the book's D = 0 curves) · headline "Through (1.00, 1.00): D = 0.00, and the solution is the top curve." (on the axis: "Through (x₀, 0): the singular solution y = 0.") · readout y² + 2 ln|y| = x² + D with the numbers and D; on the axis y = 0 with y′ = 0 checked · graph alone · 2D. Window x −3 to 3, y −3 to 3 (the book's). The curves, the singular solution and the point are named on hover.
- `sim-coffee` · Figure 1.9 · `newtons-law-of-cooling` · value add: variation: T = A + (T(0) − A)e^(−kt) with T(0), T(1) and A on sliders (the book's 89, 85 and 22 as detents; T(0) 87 to 92, T(1) 81 to 86.5, A 19 to 25, step 0.1, the ranges keeping T(1) below T(0) and above A so k > 0), k = −ln((T(1) − A)/(T(0) − A)) computed, the time to 60° marked by its drop line and pinned at the panel's edge when it runs past 12.5 minutes; the book's two panels, 0 to 12.5 minutes beside 0 to 80, the second with the level A dashed; the reader sees how far nudged measurements move Bob's 9.21 minutes (Exercise 1.3.106's question) · arrows: none · still · sliders T(0), T(1) (`point`, the measured points), A (untyped) · headline "k = 0.0616: the coffee reaches 60° at t = 9.21 minutes." · readout k = −ln((85.0 − 22.0)/(89.0 − 22.0)) = 0.0616, T = 22.0 + 67.0e^(−0.0616t), T(9.21) = 60 · graph alone, two panels side by side · 2D. The measured points, the crossing and the ambient level are named on hover.

## Extra simulations (rule 15)

None. Weighed and dropped: a slope field of y′ = xy with the separated integrals (1.2's slope-field figures already show the solutions; the integrals are algebra).

## Exercises

End (kind `exercise`, ids `e1`–`e12`, `e101`–`e107`): 1.3.1–1.3.12 kept with AI-marked solutions stating the answer and the reasoning, each checked by SymPy (`verify.py` in the task's scratch): 1.3.1 y² = x² + D; 1.3.2 De^(x³/3); 1.3.3 x = (1 − e^(t²))/(1 + e^(t²)); 1.3.4 e^(1 − cos t); 1.3.5 De^(x²/2 + x) − 1; 1.3.6 xe^(x² − 1); 1.3.7 (1 + x)/(1 − x); 1.3.8 y³ + 3y = x³ + 3x + 4; 1.3.9 ln(x²/2 + e); 1.3.10 ln(ln x + e); 1.3.11 exp(∫₀ˣ e^(−s²) ds); 1.3.12 A = 10 (shape `number`); the rest `open`. 1.3.101–1.3.107 with the book's answers (`generated_by: source`); 1.3.106 a `multi` (7.45 and 12.15 minutes, confirmed by a numeric sweep of the ±0.5° corners) and 1.3.107 a `multi` (102, 861, 999, 1000 rabbits, confirmed). `exercise_concepts` rows for every exercise. No `exercises_lead` (the book prints none in this section).

## Derivations (rule 29)

- `drv-separable` · why separating the variables works · from dy/dx = f(x)g(y) to ∫ dy/g(y) = ∫ f(x) dx + C, the careful version · the book prints it as a block of equations with words between them, so it is built: one node, the start line the equation, two facts (the book's "y = y(x) is a function of x and so is dy/dx", and the change of variables formula with provenance Calculus 5.5), three moves (divide by g(y); integrate both sides in x; substitute on the left). It replaces the block from "We rewrite the equation as follows" to "And we are done."; the prose up to "Consider dy/dx = f(x)g(y)" stays (`p#careful`), and the quick Leibniz version before Example 1.3.1 stays as printed (prose first, the same result).
- Implicit solutions · checking y² + 2 ln|y| = x² + D · score 2 · not built: "we leave this computation to the reader", two moves.
- Example 1.3.3 · the coffee · score 2 · not built: a worked example of the section's method with numbers.

## Wanted at chapter level

- Anchors: form `eq-separable` of `separable-differential-equation` → `1.3-eq-separable`; forms `eq-separated` and `eq-separated-differentials` of `separation-of-variables` → `1.3-eq-separated` and `1.3-eq-separated-differentials`; forms `eq-newton-cooling` and `eq-newton-cooling-solution` of `newtons-law-of-cooling` → `1.3-eq-newton-cooling` and `1.3-eq-newton-cooling-solution`.
- Variables anchors: `1.3/y`, `1.3/y_prime` → `1.3-intro`; `1.3/dy/dx`, `1.3/f`, `1.3/g` → `1.3-separating`; `1.3/T`, `1.3/dT/dt` → `1.3-ex-1-3-3`; `1.3/x`, `1.3/dx/dt`, `1.3/x_prime` are used only in the exercises (1.3.3, 1.3.4, 1.3.102, 1.3.103, 1.3.107): no anchor to give.
- The brief named the coffee figure "Figure 1.6, `2-2-coffee.svg`": in the source it is Figure 1.9, `coffeefig-1-2.svg` (`2-2-coffee.svg` is 1.6's Figure 1.12, x′ = 0.3(5 − x)); the page follows the source.
