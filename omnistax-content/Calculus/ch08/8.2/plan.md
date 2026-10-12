# Plan: 8.2 Direction Fields and Numerical Methods (m53701)

Source: `source.md`, converted with `tools/convert.py 8`. Status: built 2026-10-12 straight through (config 2 waives the review for this run; decisions reported afterwards). Template: `ch01/1.1`.

Three objectives, an opening paragraph, three definition notes (direction field, equilibrium solution, the three stabilities), one theorem note (Euler's Method), Figures 8.6–8.14, Tables 8.2 and 8.3, Examples 8.8 and 8.9, Checkpoints 8.7–8.9, two Key Concepts, one Key Equations row, 53 section exercises (26 keyed), 8 glossary terms, three media notes (dropped, named in `notes`; the slope-field and Euler applets seed the Sims below).

## Sub-concepts (page headers)

The book's headers: `p#fields-intro`; `creating` **Creating Direction Fields** (Figure 8.6, Figures 8.7 + 8.8 placed where 8.7 is cited, the definition `direction-field-definition`); `using` **Using Direction Fields** (the solution curve, Checkpoint 8.7, Figures 8.9 + 8.10 + 8.11 placed where 8.9 is cited, the definitions `equilibrium-definition` and `stability-definition`, Example 8.8 with Figure 8.12, Checkpoint 8.8); `eulers-method` **Euler’s Method** (Figures 8.13 + 8.14 placed where 8.13 is cited, Table 8.2, the theorem `euler-theorem`, Example 8.9 with Table 8.3, Checkpoint 8.9).

## Concept nodes (merged by the prep)

Introduced: `direction-field` (derivative, form y′ = f(x, y)), `solution-curve` (function), `equilibrium-solution` (function), `asymptotically-stable-solution`, `asymptotically-unstable-solution`, `asymptotically-semi-stable-solution`, `step-size` (h), the result `eulers-method` (two forms). Uses: `linear-approximation`, `slope-of-the-tangent-line`, `initial-value-problem`, `solution-to-a-differential-equation`, `newtons-law-of-cooling`, `limit-at-infinity`.

## Colour, referents and function tokens

y `\kyfn`, y′ `\kyprime`, f(x, y) `\kf` (function, the right-hand side), T `\kT`, T′ `\kTprime`, L `\kL` (line). The field's segments `derivative`, the solution curves and equilibria `function`, the initial point `point`, Euler's steps `line`. h, xₙ, yₙ, n, k in ink. No referents: Figure 8.6's two solutions are told apart by their labels. Function tokens: −(3/2)x + 5/4 − e^(2x)/4, x² − 3x + 3.

## Figures

- `fig-cooling-field` · Figure 8.6 · `direction-field`, `solution-curve`, `equilibrium-solution` · value add: standardisation, and depth of reading: the field of T′ = −0.4(T − 72) for 0 ≤ t ≤ 10 with the level T = 72 dashed and the two solutions the book plots, from T(0) = 100 and T(0) = 50 (the book prints no starts; stand-ins inside its picture), each labelled by its start · arrows: none · still · no sliders · graph alone · 2D. The draggable field is the next figure.
- `sim-direction-field` · Figure 8.7 + 8.8 · `direction-field`, `solution-curve` · value add: variation: the field of y′ = 3x + 2y − 4 on [−5, 5] × [−10, 10] (Figure 8.7), the solution curve through the point the reader drags (Figure 8.8 is its state at (0, 1), the solution y = −(3/2)x + 5/4 − e^(2x)/4), and the short tangent L(x) = y₀ + y′(x − x₀) at the point in `line` · arrows: none · still · sliders x₀ (−5 to 5) and y₀ (−10 to 10) held by `F.drag` · headline "Through (0, 1): the slope is y′ = 3(0) + 2(1) − 4 = −2." · readout y′ = 3x₀ + 2y₀ − 4 = value, L(x) = y₀ + y′(x − x₀) · graph alone · 2D.
- `sim-equilibria` · Figure 8.9 + 8.10 + 8.11 · `equilibrium-solution`, `asymptotically-stable-solution` · value add: variation: the field of y′ = (x − 3)(y² − 4) on [−2, 8] × [−5, 5], the equilibria y = ±2 dashed, the solution through the dragged point; y₀ has detents at the book's 0.5 (Figure 8.10) and −3 (Figure 8.11) and dashed circles at the equilibria ±2; the point opens at (0, −1.9), just above −2, the first of Figure 8.9's pair · still · sliders x₀ (−2 to 8) and y₀ (−5 to 5) · headline "From y(0) = 0.50 the solution approaches y = −2 as x grows." (approaches −2, stays at 2 or −2, or grows or falls without bound, read from the traced end) · readout y′ = (x₀ − 3)(y₀² − 4) = value · graph alone · 2D.
- `fig-stability` · Figure 8.12 (Example 8.8) · `asymptotically-stable-solution`, `asymptotically-unstable-solution`, `asymptotically-semi-stable-solution` · standardisation only: the field of y′ = (y − 3)²(y² + y − 2) with the levels y = −2, 1 and 3 dashed and named · still · 2D. Dragging a start here would repeat the previous figure's view.
- `sim-euler` · Figure 8.13 + 8.14 · `eulers-method`, `step-size` · value add: variation: y′ = 2x − 3 from the point the reader drags (opening on (0, 3)), the exact solution through it in `function`, the faint field behind, and Euler's polyline in `line` to x = 3 with its vertices dotted; h on a slider from 0.05 to 1 with detents at the book's 0.5 (Figure 8.13 and 8.14a) and 0.25 (8.14b) · still · sliders h, x₀, y₀ · headline "h = 0.50: 6 steps reach x = 3.00 at y₆ = 1.50, where the solution is 3.00." · readout yₙ = yₙ₋₁ + h f(xₙ₋₁, yₙ₋₁) with the last step's numbers · graph alone · 2D. Built on `F.slopefield` (field, curve, euler) and `F.drag`.

Unnumbered images: Checkpoint 8.7's and 8.8's answer fields in their cards; the exercise fields in their cards. Tables 8.2 and 8.3 stay in the text as `div.book-table`; the unnumbered table of Checkpoint 8.9's answer goes in its card.

## Extra simulations (rule 15)

None beyond the folds: the Euler applet's view is `sim-euler`, the slope-field site's is `sim-direction-field`. A second Euler Sim on Table 8.2's y′ = x² − y² was weighed and dropped: `sim-euler` already shows each step reading the field.

## Corrections

- Table 8.2 prints y₇ to y₁₀ as 1.9164, 1.8414, 1.7746, 1.7156; Euler's Method gives 0.9164, 0.8414, 0.7746, 0.7156, as the table's own summary and the decreasing values before them say (numbered marker in the table, note at the section's end).
- Exercise keys, each a note under its card: 95 (the exact value at t = 1 is 7/3, not 2), 103 (the exact value is −9/2, not −1/2), 107 (the key writes y′ for y), 111 (3.2756 is Euler's value with h = 0.01; h = 0.001 gives 3.2952), 113 (the step sizes of the error table are one decade off: the errors are those of h = 1, 0.1, 0.01 and 0.001), 117 (the key is the value after 100 steps, h = 0.1).

## Exercises

- Checkpoints 8.7–8.9 inline after the solution curve's paragraph, Example 8.8 and Example 8.9; 8.7's and 8.8's answers carry the book's field images.
- Section exercises 66–118: the 26 odd keyed ones kept, sketched answers with their images; 109–113 carry exercise 106's statement (named in `changes`). 104 and 114 ("show that") kept with AI-marked approaches. Left out, unkeyed: 66, 68, 70, 72 (sketches), 74, 76, 78 (fields and general solutions), 80, 82 (fields), 84, 86, 88, 90, 92 (matching, which the odd ones' letters would give away), 94–102 even (Euler), 106, 108, 110, 112, 116, 118.
- Review exercises set here, `source_section` 8.5: 265, 281 (with a note: five steps of 0.2 give 0.9051, not the key's 0.6939).

## Wanted at chapter level

- Anchors: variables y_fn, y_prime, f → `8.2-creating`; T, T_prime → `8.2-creating`; L → `8.2-using`; h → `8.2-euler-theorem`. Forms: `eq-first-order-equation` → `8.2-creating`; `eq-euler-x`, `eq-euler-y` → `8.2-euler-theorem`.
