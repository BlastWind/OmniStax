# Plan: 1.7 Numerical methods: Euler’s method (numer:section)

Source: `source.md`. Status: built 2026-10-19 straight through (config 2). Section notes ("can safely be skipped") dropped and named in `notes`. Two figures (1.16, 1.17), two tables (1.1, 1.2), one footnote (Euler), two inline exercises (1.7.1, 1.7.2), 9 end exercises (4 keyed); the Runge–Kutta and improved Euler paragraphs stand among the end exercises in the book and stay in the text at the end of the section, before the Exercises.

## Sub-concepts (page headers)

The book prints none but Exercises; three headers are OmniStax's:
- `euler` **Euler’s method**: the opening through Figure 1.17 and the definition of the error, inline 1.7.1.
- `step-size` **Halving the step size**: Table 1.1, first- and second-order methods, inline 1.7.2, Table 1.2, stiffness.
- `better-methods` **Runge–Kutta and the improved Euler method**: the two method paragraphs the book sets among its exercises, moved here before the Exercises with their formulas (named in `notes`).

## Concepts

Introduced: `eulers-method` (Calculus's id; result; forms x_{i+1} = x_i + h, y_{i+1} = y_i + h f(x_i, y_i)), `step-size` (Calculus's id), `approximation-error` (definition, "Error"; form Error = |actual y − approximate y|; type error), `order-of-a-numerical-method` (definition; terms first-order method, second-order method, fourth-order method), `stiff-problem` (definition; terms stiff), `runge-kutta-method` (result; forms k₁…k₄ and y_{i+1}), `improved-eulers-method` (result; forms k₁, k₂ and y_{i+1}). Uses: `first-order-ode`, `initial-condition`, `direction-field`.

## Colour, referents and symbols

y `function`, f `function`, the slopes k `derivative` where named as slopes, the error `error`; x_i, y_i, h, i in ink (numbers of a table). No referents.

## Figures

- `sim-euler` · Figure 1.16 + 1.17 · `eulers-method`, `step-size`, `approximation-error` · value add: variation: y′ = y²/3, y(0) = 1 on the book's window (x −1 to 3, y 0 to 3; y to 6 so the halvings' last steps stay in frame), the slope field faint, the exact solution y = 3/(3 − x) in `function`, Euler's polyline to x = 2 in `function` thin with its vertices dotted, the gap at x = 2 bracketed in `error`; h on a slider from 0.0625 to 1 with detents at the book's 1, 0.5, 0.25, 0.125, 0.0625; a step count n (0 to the steps to x = 2) shows the steps one by one, Figure 1.16's two panels its states n = 1 and n = 2, Figure 1.17 its state n = 2 with the solution · arrows: none · still: the steps are a count the reader sets, not a clock · sliders h, n (untyped) · headline "h = 1, 2 steps: y(2) ≈ 1.926; the solution is 3, an error of 1.074." · readout y_{i+1} = y_i + h f(x_i, y_i) with the last step's numbers · graph alone · 2D.
- `sim-method-order` · Sim · `order-of-a-numerical-method`, `runge-kutta-method`, `improved-eulers-method` · value add: variation: the same problem, y(2) approximated by the method chosen (Euler | improved Euler | Runge–Kutta, a segmented control) as h halves (h slider 1 to 1/128 by halvings, detents); left, the polyline against the solution; right, the error of each halving on a log scale against h with the line of slope 1, 2 or 4 beside the points; the reader sees the error halve, quarter or fall sixteenfold as the text says in words · arrows: none · still · choice method, slider halvings k (h = 2⁻ᵏ) · headline "Runge–Kutta, h = 0.25: error 0.0012; halving h divides it by about 16." · readout the method's update with numbers · graph beside · 2D.

## Extra simulations (rule 15)

`sim-method-order` (config 14's seed): the orders of the three methods are in the text in words and the exercises only; no figure shows the error falling. Dropped: a stiff Sim for Exercise 1.7.6 (y′ = −5y): the exercise is the reader's to compute.

## Exercises

Inline: 1.7.1 (after the error formula), 1.7.2 (after "In practice, we do not know how large the error is!"), AI-marked approaches checked numerically. End: 1.7.3–1.7.7 kept with AI-marked solutions computed numerically; 1.7.101–1.7.104 with the book's answers, each recomputed.

## Wanted at chapter level

- Anchors: `eulers-method` → `1.7-euler`; `approximation-error` → `1.7-euler`; `order-of-a-numerical-method`, `stiff-problem` → `1.7-step-size`; `runge-kutta-method`, `improved-eulers-method` → `1.7-better-methods`; variable h → `1.7-euler`.

## Derivations

- None qualify: the method is stated and worked with numbers; no general chain.
