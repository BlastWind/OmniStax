# Plan: 1.1 Integrals as solutions (integralsols:section)

Source: `source.md`, converted with `tools/convert.py 1`. Status: built 2026-10-19 straight through (config 2; decisions reported afterwards); text, figures and `section.json` reviewed against the source and the merged concepts, `ost check diffyqs --section 1.1` clean, built and checked in the browser in light and dark on 2026-10-19 (sec-1.1 task). Template: `ch00/0.2` (its "Conventions for later sections"), with Calculus `ch08/8.1` and `8.2` for the dragged-point idiom.

The section notes (one lecture, [EP] §1.2, [BD] §1.2 and §2.1) are dropped and named in `notes`. Six examples, one figure (1.1), one book footnote (closed form, the chapter's footnote 1), one inline exercise (1.1.1, after Example 1.1.6), 18 end exercises (7 keyed). No section introduction or summary, no exercises lead (the "101 and higher" note is printed only in 0.2).

## Sub-concepts (page headers)

The book prints no subsection; three headers are OmniStax's, at the places the argument turns:
- `integrating` **Integrating y′ = f(x)**: the opening (`p#first-order-form`), (1.1) as `eq-1-1`, the general solution `eq-integral-general` (`p#solve-by-integrating`, `p#general-by-integrating`), Example 1.1.1 (`ex-1-1-1`), the antiderivative paragraph (`p#antiderivative-def`, `eq-antiderivative-definite`), (1.2) as `eq-1-2` (`p#ivp-integral`, `p#ivp-check`), the closed-form paragraph (`p#closed-form-def`), Example 1.1.2 (`ex-1-1-2`) with the Sim inside it.
- `y-of-x-swapped` **Equations y′ = f(y)**: from "Using this method" (`p#f-of-y-form`, `p#switch-roles`, `eq-dx-dy`, `eq-x-of-y`) through Examples 1.1.3 and 1.1.4 (`ex-1-1-3`, `ex-1-1-4`, with `p#blow-up`, Figure 1.1 and `p#right-branch` inside the example, as the book prints them).
- `velocity` **Velocity, acceleration and distance**: from "Classical problems" (`p#classical-problems`) through Examples 1.1.5 and 1.1.6 (`ex-1-1-5`, `ex-1-1-6`) and the inline Exercise 1.1.1.

## Concepts (merged by the prep)

Introduced (one `introduces` row each): `integral-solution` (result; `p#solve-by-integrating`, forms `eq-integral-general` and (1.2)), `antiderivative` (definition, type integral; `p#antiderivative-def`), `closed-form` (definition; `p#closed-form-def`), `solving-y-prime-equals-f-of-y` (skill; `p#switch-roles`), `interval-of-existence` (idea, the prep's addition; `p#blow-up`), `integrating-twice` (skill, the prep's addition; `ex-1-1-6`). The plan's `first-order-ode` and `initial-condition` are Chapter 0's `first-order-differential-equation` (reinforced at `p#first-order-form`) and `initial-value`. Uses: `solution-to-a-differential-equation`, `general-solution`, `initial-value`, `verifying-a-solution`, `four-fundamental-equations` (Example 1.1.3's y′ = ky), `second-order-differential-equation`, `dependent-variable`, `independent-variable`, `differential-equation`.

Calculus links on the book's own words for what the page assumes: the fundamental theorem of calculus (5.3, `ftc2`), Leibniz notation (3.2, `leibniz-paragraph`), the inverse function theorem (3.7, `inverse-function-theorem-note`). Leibniz notation is an index word here, not a concept of this book.

## Colour, referents and symbols

y the solution (`function`, `\ky`), y′, dy/dx, y″, dx/dy (`derivative`), f the right-hand side (`function`, `\kf`), x(t) the distance and v the velocity of Examples 1.1.5–1.1.6 (`function`, `\kx`, `\kv`) with x′, x″, v′ (`derivative`), r the snowball's radius of 1.1.106 (`function`, `\kr`); x, t, C, D, k, x₀, y₀, n, h in ink. The integral words wear `integral` through the `antiderivative` spans, and the shaded area of the Sim wears `integral`. No referents.

## Figures

- `sim-integral-solution` · Sim · `integral-solution`, `closed-form`, `initial-value` · value add: intuition and variation: Example 1.1.2's y′ = e^(−x²), y(0) = y₀, drawn as (1.2) says: above, f(t) = e^(−t²) with the area from 0 to x shaded in `integral`; below, y(x) = ∫₀ˣ e^(−t²) dt + y₀ in `function` with the point (x, y(x)) the reader drags along it (`F.drag` on the x slider, along the graph), the level y₀ dashed, the hollow `point` (0, y₀), and a bracket from y₀ up to y(x) carrying the area, so the area becomes the rise; y₀ shifts the whole curve; x < 0 counts the area negative. Neither the text nor Figure 1.1 shows (1.2) as an area that becomes a graph, though y has no closed form · arrows: none · still: a starting point and a stopping point, no clock · sliders x (−3 to 3, detents 0 and 1) and y₀ (−2 to 3, detent 1), both untyped · headline "y(1.00) = ∫₀^1.00 e^(−t²) dt + 1.0 = 1.747." (and ": the integral runs from 0 back to x, so the area counts negative." for x < 0) · readout y(x) = ∫₀ˣ e^(−t²) dt + y₀, y(1.00) = 0.747 + 1.0 = 1.747 · graph below the integrand's graph · 2D. Axes t −3 to 3 by 0 to 1.2 above, x −3 to 3 by y −3 to 4 below (y₀ ± √π/2 for every y₀). The area, the initial point and the dragged point are named on hover; ∫₀ˣ e^(−t²) dt = (√π/2) erf(x), erf by Abramowitz–Stegun 7.1.26.
- `sim-blowup` · Figure 1.1 · `interval-of-existence`, `solving-y-prime-equals-f-of-y`, `initial-value` · value add: variation: the solution y = 1/(C − x) of y′ = y² through the initial point (x₀, y₀) the reader drags (`F.drag` on both sliders), C = x₀ + 1/y₀; the branch on the side of x = C that holds x₀ drawn full in `function`, the other branch faint, the line x = C dashed in ink; y₀ = 0 (a dashed special on the y₀ slider) is the constant solution y = 0. Opens on the book's (0, 1), y = 1/(1 − x) on (−∞, 1); the text's (2, −1) is the detent pair x₀ = 2, y₀ = −1 · arrows: none · still: the idea has no clock, only a starting point · sliders x₀ (−3 to 3, detents 0 and 2) and y₀ (−3 to 3, detents 1 and −1, special 0), untyped · headline "Through (0.0, 1.0): C = 1.00, and y = 1/(1.00 − x) is defined on (−∞, 1.00)." · readout y = 1/(C − x), C = x₀ + 1/y₀ = 0.0 + 1/1.0 = 1.00 · graph alone · 2D. Axes x −3 to 3 by y −3 to 3, the book's window; the original (`/media/ch01/1over1mx.svg`, 432 px) behind the toggle. The other branch, the asymptote and the point are named on hover.

## Extra simulations (rule 15)

`sim-integral-solution` above is the pick (config 14's seed), built. Weighed and dropped: a car on a strip for Example 1.1.5 (the example is a substitution into x = 2e^(t/2) − 2; a moving car adds nothing the two numbers do not say); a second graph for Example 1.1.6 (v and x against t are two more substitutions).

## Derivations (rule 29)

- Integrating y′ = f(x) · (1.1) to the general solution · score 1 · not built: one move, under the bar.
- (1.2) checked by the fundamental theorem · score 2 · not built: two moves told in prose.
- Example 1.1.3 · y′ = ky by integrating · score 2 · not built: a worked example of the section's method.
- Example 1.1.4 · score 1 · not built: the section's method with a power.

## Exercises

- Inline Try It (kind `inline-exercise`, id `e1`): 1.1.1 after `ex-1-1-6` (`<div class="exercises" data-place="ex-1-1-6">`), a `number` answer: v = t³/3 + 10, x = t⁴/12 + 10t + 1, x(10) = 2803/3 ≈ 934.33 m (the paused draft's plan said 2713/3 ≈ 904.33, an arithmetic slip; SymPy gives 2803/3), AI-marked, with the check x″ = t², x(0) = 1, x′(0) = 10.
- End exercises 1.1.2–1.1.12 (kind `exercise`, ids `e2`–`e12`, unkeyed): every one kept with an AI-marked solution stating the answer and the reasoning, every computed value checked with SymPy (`verify.py` in the task's scratch): 1.1.2 y = x³/3 + x²/2 + 13/6; 1.1.3 y = (11 − cos 5x)/5; 1.1.4 y = ½ ln((1 − x)/(1 + x)) on (−1, 1); 1.1.5 y = 1/√(1 − 2x) on (−∞, ½); 1.1.6 y = (2 + e^(2x))/(2 − e^(2x)) on (−∞, (ln 2)/2); 1.1.7 y = −1 + √(1 + 2x); 1.1.8 y = 3x − sin x; 1.1.9 145060 km (`number`); 1.1.10 x = ∫₀ᵗ sin(s²) ds + t²/2 + 20; 1.1.11 h″ = −9.8, h = 100 − 4.9t², t = √(100/4.9) ≈ 4.52 s (`number`); 1.1.12 y = eˣ + C and y = −ln(C − x). Tags: "little harder" (1.1.6), "harder" (1.1.8). Every end exercise carries a `cite`.
- 1.1.101–1.1.107 (ids `e101`–`e107`): the book's `\exsol` as the `solution` (`generated_by: source`); 1.1.104 a `number` (170 miles); each checked against SymPy and none contradicted. 1.1.107's y‴′ is written as plain `y''''` (no macro for a fourth derivative).
- Symbols in prompts and solutions through the macros (`\ky`, `\kyprime`, `\kydprime`, `\kdydx`, `\kdxdy`, `\kx`, `\kxprime`, `\kxdprime`, `\kdxdt`, `\kv`, `\kvprime`, `\kr`); h of 1.1.11, n of 1.1.105 and A, B, C, D stay plain.
- `exercise_concepts`: `integrating-twice` on 1.1.1, 1.1.8, 1.1.11, 1.1.107; `interval-of-existence` on 1.1.4–1.1.6 and 1.1.105; `closed-form` on 1.1.10; the rest `integral-solution` or `solving-y-prime-equals-f-of-y` by method.

## Wanted at chapter level

- Anchors (variables rows of 1.1): `y`, `y_prime`, `dy/dx`, `f` → `1.1-first-order-form`; `dx/dy` → `1.1-eq-dx-dy`; `x`, `x_prime` → `1.1-ex-1-1-5`; `x_dprime`, `v`, `v_prime` → `1.1-ex-1-1-6`; `y_dprime` (1.1.8 only), `dx/dt` (1.1.10 only), `r` (1.1.106 only): used only in the exercises, no anchor to give.
- Anchors (forms): `eq-integral-general` → `1.1-eq-integral-general`; `eq-integral-ivp` → `1.1-eq-1-2`; `eq-antiderivative-definite` → `1.1-eq-antiderivative-definite`; `eq-dx-dy` → `1.1-eq-dx-dy`; `eq-x-of-y` → `1.1-eq-x-of-y`. The draft plan's `1.1-ias-inteq` and `1.1-int-eqdef` are now `1.1-eq-1-1` and `1.1-eq-1-2` (template convention 1).
- The footnote row `fn-closed-form` carries `number: "1"`: the checker requires a book footnote to carry the number the book prints it under, and this is the first footnote of Chapter 1's file; the prep's note that a book footnote keeps no number was a misreading of the checker's message.
- Nothing else: the concept rows, edges and statements of the merge fit the page as built.
- Chapter pass (2026-10-19): applied. The ten variables anchors and the five form anchors are set as listed; `y_dprime`, `dx/dt` and `r` stay without one. `fn-closed-form` keeps "1": the chapter numbers its footnotes 1–9 in book order (`config.md`).
