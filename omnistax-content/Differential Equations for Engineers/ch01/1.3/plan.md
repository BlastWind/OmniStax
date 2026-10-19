# Plan: 1.3 Separable equations (separable:section)

Source: `source.md`. Status: built 2026-10-19 straight through (config 2). Section notes dropped and named in `notes`. Four examples (1.3.1–1.3.4), two figures (1.8, 1.9), 19 end exercises (7 keyed); no inline exercise.

## Sub-concepts (page headers)

The book's: `intro` (no header), `separable` **Separable equations**, `implicit` **Implicit solutions**, `more-examples` **More examples of separable equations**.

## Concepts

Introduced: `separable-differential-equation` (Calculus's id; terms separable; form y′ = f(x)g(y)), `separation-of-variables` (Calculus's id; skill; form ∫ dy/g(y) = ∫ f(x) dx + C), `implicit-solution` (definition, type function), `singular-solution` (definition, type function), `newtons-law-of-cooling` (Calculus's id; axiom, stated as given in Example 1.3.3; form dT/dt = k(A − T)). Uses: `first-order-ode`, `integral-solution`, `general-solution`, `initial-condition`.

## Colour, referents and symbols

y `function`, y′ and dy/dx `derivative`, f(x) and g(y) `function`, T the coffee's temperature `function`, dT/dt `derivative`; x, t, A, k, C, D in ink. No referents.

## Figures

- `sim-implicit` · Figure 1.8 · `implicit-solution`, `singular-solution` · value add: variation: the implicit solution y² + 2 ln|y| = x² + D drawn as its two curves (the top in `function`, the bottom thin), D on a slider from −4 to 4 with a dashed circle at the book's D = 0; the initial point the reader drags picks the curve through it and fixes D = y₀² + 2 ln|y₀| − x₀²; y = 0, the singular solution, dashed; opens on D = 0 with the point (1, 1) the text names · arrows: none · still · sliders x₀, y₀ by `F.drag` (D read from them: one quantity, not two controls) · headline "Through (1, 1): D = 0, and the solution is the top curve." · readout y² + 2 ln|y| = x² + D with the numbers · graph alone · 2D. Window x −3 to 3, y −3 to 3 (the book's).
- `sim-coffee` · Figure 1.9 · `newtons-law-of-cooling` · value add: variation: T = A + (T(0) − A)e^(−kt), with T(0) = 89, T(1) = 85 and A = 22 on sliders (the book's numbers; ±3 degrees each, step 0.1), k = −ln((T(1) − A)/(T(0) − A)) computed, the time T = 60 marked by its drop line; the book's two panels, 0 to 12.5 minutes beside 0 to 80, the second with the level A dashed; the reader sees how far the measured numbers move Bob's 9.21 minutes (Exercise 1.3.106's question, now answered by the reader's own hand) · arrows: none · still · sliders T(0), T(1), A (untyped) · headline "k = 0.0616: the coffee reaches 60° at t = 9.21 minutes." · readout T = 22 + 67e^(−0.0616t) · graph alone, two panels side by side · 2D.

## Extra simulations (rule 15)

None. Weighed and dropped: a slope field of y′ = xy with the separated integrals (the section's Figure 1.8 and 1.2's `sim-slope-xy` already show the solutions; the integrals are algebra).

## Exercises

End: 1.3.1–1.3.12 kept with AI-marked solutions, each checked by SymPy (1.3.11 leaves a definite integral; 1.3.12 solves for A); 1.3.101–1.3.107 with the book's answers.

## Wanted at chapter level

- Anchors: forms of `separable-differential-equation` and `separation-of-variables` → `1.3-separable`; `newtons-law-of-cooling` → `1.3-sep-coffeeexample`; variables T, dT/dt → `1.3-sep-coffeeexample`; f, g → `1.3-separable`.

## Derivations

- Separable equations · from dy/dx = f(x)g(y) to ∫ dy/g(y) = ∫ f(x) dx + C, the careful version · printed as a block of equations with words between them · built as `drv-separable` (two facts: the equation, the change of variables formula; three moves); it replaces the block from "We rewrite the equation as follows" to "And we are done."; the quick Leibniz version before Example 1.3.1 stays as printed (prose first, the same result reached by the later derivation).
- Implicit solutions · checking y² + 2 ln|y| = x² + D · score 2 · not built: "we leave this computation to the reader", two moves.
- Example 1.3.3 · the coffee · score 2 · not built: a worked example of the section's method with numbers.
