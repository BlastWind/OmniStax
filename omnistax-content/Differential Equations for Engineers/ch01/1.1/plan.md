# Plan: 1.1 Integrals as solutions (integralsols:section)

Source: `source.md`, converted with `tools/convert.py 1`. Status: built 2026-10-19 straight through (config 2; decisions reported afterwards). Template: Calculus `ch08/8.1` and `8.2` until `ch00/0.2` is built.

The section notes (one lecture, [EP] §1.2, [BD] §1.2 and §2.1) are dropped and named in `notes`. Six examples, one figure (1.1), one footnote (closed form), one inline exercise (1.1.1, after Example 1.1.6), 18 end exercises (7 keyed).

## Sub-concepts (page headers)

The book prints no subsection; three headers are OmniStax's, at the places the argument turns:
- `integrating` **Integrating y′ = f(x)**: the opening, (1.1), Example 1.1.1, the antiderivative paragraph, (1.2), Example 1.1.2.
- `y-of-x-swapped` **Equations y′ = f(y)**: from "Using this method" through Example 1.1.4 and Figure 1.1.
- `velocity` **Velocity, acceleration and distance**: from "Classical problems" through Example 1.1.6 and inline Exercise 1.1.1.

## Concepts

Introduced: `first-order-ode` (definition, form y′ = f(x, y) and dy/dx = f(x, y)), `antiderivative` (definition, terms antiderivative, indefinite integral, to antidifferentiate, type integral), `closed-form` (definition, from the footnote), `integral-solution` (result, forms (1.1)'s general solution y = ∫f(x) dx + C and (1.2) y(x) = ∫ from x₀ to x of f(t) dt + y₀), `solving-y-prime-equals-f-of-y` (skill: treat x as a function of y, x = ∫ 1/f(y) dy + C). Uses (Chapter 0): `differential-equation`, `general-solution`, `initial-condition`, the exponential solution of y′ = ky. Leibniz notation is used, not defined here (an index word only; a Calculus link).

## Colour, referents and symbols

y the solution (`function`), y′ (`derivative`), f the right-hand side (`function`), x(t) the distance and v the velocity of Examples 1.1.5–1.1.6 as functions of t; x, t, C, D, k, x₀, y₀ in ink. The integral words wear `integral` through their spans. No referents.

## Figures

- `sim-blowup` · Figure 1.1 · `integral-solution`, `solving-y-prime-equals-f-of-y` · value add: variation: the solution y = 1/(C − x) of y′ = y² through the initial point the reader drags (x₀ on −3 to 3, y₀ on −4 to 4, held by `F.drag`), C = x₀ + 1/y₀, the branch on the interval that holds x₀ drawn solid and the other branch faint, the asymptote x = C dashed; opens on (0, 1), the book's y = 1/(1 − x) on (−∞, 1); y₀ = 0 gives the solution y = 0 · arrows: none · still: the idea has no clock, only a starting point · sliders x₀, y₀ (untyped) · headline "Through (0, 1): y = 1/(1 − x), defined on (−∞, 1)." · readout y = 1/(C − x), C = x₀ + 1/y₀ = value · graph alone · 2D. The state y(2) = −1 the text names next is a detent pair (x₀ = 2, y₀ = −1).
- `sim-integral-solution` · Sim · `integral-solution`, `antiderivative` · value add: variation: Example 1.1.2's y′ = e^(−x²), y(0) = 1; above, f(t) = e^(−t²) with the area from 0 to x shaded in `integral`; below, y(x) = ∫₀ˣ e^(−t²) dt + 1 traced up to x in `function`, the point (x, y(x)) moving as x is dragged; y₀ on a slider shifts the whole curve; the reader sees that (1.2) is a number for each x that can be plotted though it has no closed form · arrows: none · still · sliders x (−3 to 3), y₀ (−2 to 3) · headline "y(1.00) = ∫₀¹ e^(−t²) dt + 1 = 1.747." · readout (1.2) with the numbers · graph below the integrand's graph · 2D.

## Extra simulations (rule 15)

`sim-integral-solution` above is the pick (config 14's seed): neither the text nor Figure 1.1 shows (1.2) as an area that becomes the graph. Weighed and dropped: a car on a strip for Example 1.1.5 (the example is a substitution into x = 2e^(t/2) − 2; a moving car adds nothing the two numbers do not say).

## Exercises

Inline: 1.1.1 (finish Example 1.1.6: v = t³/3 + 10, x = t⁴/12 + 10t + 1, x(10) = 2713/3 ≈ 904.33 m), after `example-1-1-6`, AI-marked approach. End: 1.1.2–1.1.12 kept with AI-marked solutions, each checked by SymPy; 1.1.101–1.1.107 with the book's answers. Tags: "little harder" (1.1.6), "harder" (1.1.8).

## Wanted at chapter level

- Anchors: variables y, y′, f → `1.1-integrating`; forms of `first-order-ode` → `1.1-integrating`; `integral-solution`'s forms → `1.1-ias-inteq` and `1.1-int-eqdef`.

## Derivations

- Integrating y′ = f(x) · (1.1) to the general solution · score 1 · not built: one move, under the bar.
- (1.2) checked by the fundamental theorem · score 2 · not built: two moves told in prose.
- Example 1.1.3 · y′ = ky by integrating · score 2 · not built: a worked example of the section's method.
- Example 1.1.4 · score 1 · not built: the section's method with a power.
