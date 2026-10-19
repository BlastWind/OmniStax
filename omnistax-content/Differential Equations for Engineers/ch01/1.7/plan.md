# Plan: 1.7 Numerical methods: Euler’s method (numer:section)

Source: `source.md`. Status: built 2026-10-19 straight through (config 2); text, figures and `section.json` reviewed against the source and the merged concepts, `ost check diffyqs --section 1.7` clean, built and checked in the browser in light and dark (sec-1.7 task). Section notes ("can safely be skipped", [EP] §2.4, [BD] §8.1) dropped and named in `notes`. Two figures (1.16, 1.17, folded), two tables (1.1, 1.2), one footnote (Euler), two inline exercises (1.7.1, 1.7.2), 9 end exercises (4 keyed); the Runge–Kutta and improved Euler paragraphs stand among the end exercises in the book and stay in the text at the end of the section, before the Exercises (build-status decision).

## Sub-concepts (page headers)

The book prints none but Exercises; three headers are OmniStax's:
- `euler` **Euler’s method**: `p#ivp-hard`, `p#why-numerical`, the definition in `p#euler-definition` (with the two worked steps), `p#euler-first-steps`, Figure 1.16 + 1.17, `p#euler-general` with `div.equation#eq-euler-step`, `p#euler-approximation`, the error in `p#error-definition` with `div.equation#eq-error`, `p#error-unknown`, inline 1.7.1.
- `step-size` **Halving the step size**: `p#halving`, Table 1.1 (`div.book-table#tab-1-1`), `p#order-definition`, `p#halvings-cost`, `p#estimate-by-halving` with inline 1.7.2, `p#blowup-table`, Table 1.2 (`#tab-1-2`), `p#oscillating`, `p#rk-in-practice`, `p#choosing` with the list `ul#choosing-factors` (its stability item `li#stiff`), `p#research`.
- `better-methods` **Runge–Kutta and the improved Euler method**: `p#runge-kutta` with `div.equation#eq-rk4`, `p#improved-euler` with `div.equation#eq-improved-euler`, the method-order Sim. The book's "(see the exercises)" and "(see exercises)" in `step-size` link down to these paragraphs; the words stay as printed.

## Concepts (merged by the prep)

Introduced (one `introduces` row each): `eulers-method` (Calculus's id; result; form `eq-euler-step`) and `step-size` (Calculus's id) on `p#euler-definition`; `approximation-error` (definition, "error", type error; form `eq-error`) on `p#error-definition`; `order-of-a-numerical-method` (terms first-, second-, fourth-order method) on `p#order-definition`; `estimating-the-error-by-halving` (skill, prep) on `p#estimate-by-halving`; `choosing-a-step-size` (idea, prep) on `p#choosing`; `stiff-problem` on `li#stiff`; `runge-kutta-method` (forms `eq-rk4`, `eq-rk4-slopes`) on `p#runge-kutta`; `improved-eulers-method` (forms `eq-improved-euler`, `eq-improved-euler-slopes`; indexed without italics, so no `<em>`) on `p#improved-euler`. Uses: `first-order-differential-equation`, `initial-value`, `solution-to-a-differential-equation` (0.2), `closed-form` and `interval-of-existence` (1.1, the blow-up at x = 3), `direction-field` (1.2, the field both figures draw).

## Colour, referents and symbols

y `function` (`\ky`), f `function` (`\kf`), y′ and dy/dx `derivative` (`\kyprime`, `\kdydx`), the error `error` (the word, the Error column, the bracket and the error plot); in the exercises x(t) is the dependent variable (`\kx`, `\kdxdt`, `\kxprime`). In ink: x and t as independent variables, x_i, y_i, h, i, the slopes k and k₁…k₄ (numbers, no symbol row; the prep's decision), e. No referents: the three methods of the Sim are told apart by their labels, the chosen one in `error` and the other two in faint ink.

## Figures

- `sim-euler` · Figure 1.16 + 1.17 · `eulers-method`, `step-size`, `approximation-error` · value add: variation: y′ = y²/3, y(0) = 1 on the book's window (x −1 to 3; y 0 to 4 so the gap at x = 2, where the solution is 3, has room), the slope field faint in `derivative`, the solution y = 3/(3 − x) in `function`, Euler's polyline from (0, 1) thin in `function` with its vertices dotted (hover names (xᵢ, yᵢ)), the gap between its last vertex and the solution bracketed in `error`; h on a slider 1/16 to 1 in sixteenths with detents at the book's 1, 1/2, 1/4, 1/8, 1/16, and the step count on a slider whose maximum follows h (the steps that reach x = 2), so Figure 1.16's two panels are the states 1 step and 2 steps at h = 1 and Figure 1.17 the second with the solution · arrows: none · still: the count is the reader's, not a clock · sliders h, steps (untyped) · headline "h = 1, 2 steps to x = 2: y₂ ≈ 1.9259, where the solution is 3.0000; the error is 1.0741." · readout y₂ = y₁ + h f(x₁, y₁) = 1.3333 + 1 · 1.3333²/3 = 1.9259, with the error line Error = |y(2) − y₂| = |3.0000 − 1.9259| = 1.0741 beneath · graph alone · 2D.
- `sim-method-order` · Sim · `order-of-a-numerical-method`, `runge-kutta-method`, `improved-eulers-method`, `estimating-the-error-by-halving` · value add: variation and intuition: the same problem taken to x = 2 by the method chosen (Euler | improved Euler | Runge–Kutta, a segmented control; the polyline bends into the next method's on a change) as h halves (a halvings slider k = 0…7, h = 2⁻ᵏ, Table 1.1's eight rows); left, the method's polyline against the solution with the error at x = 2 bracketed (x 0 to 2.1, y 0 to 4); right, every method's error at each halving so far on a log scale (h along the axis, 10⁻¹⁰ to 10 up), the chosen method full in `error` with the dashed line of its order through its current point, the other two faint and named, every point named on hover with its error and its ratio to the previous: the reader sees the error table fill in and the error halve, quarter or fall sixteenfold as the text says in words · arrows: none · still · choice method, slider halvings (untyped) · headline "Euler, h = 1/8 (16 steps): y(2) ≈ 2.6803, an error of 0.3197, which is 0.61 of the error at h = 1/4." · readout Error = |3 − 2.6803| = 0.3197, Error/Previous error = 0.3197/0.5275 = 0.6060, with the note "A first-order method: as h halves, the ratio approaches 1/2." · graph beside graph · 2D.

## Extra simulations (rule 15)

`sim-method-order` (config 14's seed; the "error table filling in as h halves" of the book's exploration): the orders of the three methods are in the text in words and the exercises only; no figure shows the error falling. Dropped: a stiff Sim for Exercise 1.7.6 (y′ = −5y): the exercise is the reader's to compute, and its AI-marked solution states the factor 1 − 5h.

## Derivations (rule 29)

- None qualify: the method is stated and worked with numbers; no general chain.

## Exercises

- Inline Try Its (kind `inline-exercise`, ids `e1`, `e2`): 1.7.1 after `p#error-unknown` (the paragraph the book prints just before it), 1.7.2 after `p#estimate-by-halving`; AI-marked solutions (1.7.1 the separable solution y = 3/(3 − x), checked with SymPy; 1.7.2 the estimates 0.02437 against 0.02528 and 0.28268 against 0.79139, from the table's numbers).
- End exercises 1.7.3–1.7.7 (ids `e3`–`e7`): AI-marked solutions computed numerically (`verify.py` in the task's scratch): 1.7.3 x(1) ≈ 8.5 (`number`); 1.7.4 the four Euler values 0, 0.5, 0.6328, 0.6872, the exact x = t − 1 + 2e⁻ᵗ with x(1) ≈ 0.7358, factors 0.32, 0.44, 0.47 (`multi`); 1.7.5 1.2⁵ = 2.48832 (`number`); 1.7.6 the factor 1 − 5h, stable for h < 0.4, the numbers settling at h = 1/4 (`open`); 1.7.7 Runge–Kutta 1.3906 and 1.3953, Euler 1 and 1.125, exact e^(1/3) ≈ 1.3956 (`multi`).
- 1.7.101–1.7.104 (ids `e101`–`e104`): the book's `\exsol` as the `solution` (`generated_by: source`), each recomputed and found right; 101, 102 and 104 as `multi` with the book's parts, 103 `open`.
- The book's "(see above)" in 1.7.7 and 1.7.104 now points at the method paragraphs in the text; the prompts keep the words.

## Wanted at chapter level

- Anchors (variables rows): y, y_prime, f → `1.7-ivp-hard`; dy/dx → `1.7-runge-kutta`; x, dx/dt, x_prime are used only in the exercises, no anchor.
- Anchors (forms): `eq-euler-step` → `1.7-eq-euler-step`; `eq-error` → `1.7-eq-error`; `eq-rk4`, `eq-rk4-slopes` → `1.7-eq-rk4`; `eq-improved-euler`, `eq-improved-euler-slopes` → `1.7-eq-improved-euler`.
- The footnote is numbered "1" as 1.1 numbered its first (the book marks footnotes by symbols restarting per page); the chapter pass may unify the convention.
- Nothing else: concepts, edges, terms and symbols as merged.
