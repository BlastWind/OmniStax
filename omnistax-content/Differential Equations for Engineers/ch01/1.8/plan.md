# Plan: 1.8 Exact equations (exact:section)

Source: `source.md`. Status: built 2026-10-19 straight through (config 2). Section notes dropped and named in `notes`. Seven examples, two figures (1.18, 1.19), one theorem (1.8.1, the Poincaré Lemma), two footnotes (equipotential curves, Poincaré), one inline exercise (1.8.1), 9 end exercises (3 keyed).

## Sub-concepts (page headers)

The book's: `intro` (no header; the potential, the total derivative, the vector field), `solving` **Solving exact equations**, `factors` **Integrating factors**.

## Concepts

Introduced: `exact-equation` (definition; form M dx + N dy = 0 with M = F_x, N = F_y), `potential-function` (definition; type function), `equipotential-curve` (definition, from the footnote; type curve), `total-derivative` (definition; form dF = F_x dx + F_y dy; type derivative), `vector-field` (Calculus's id; type vector-field), `conservative-vector-field` (Calculus's id), `solving-an-exact-equation` (skill; the two steps), `exactness-test` (result; form M_y = N_x), `poincare-lemma` (result, Theorem 1.8.1), `exact-integrating-factor` (result; forms u(x) = e^(∫P dx), P = (M_y − N_x)/N and u(y) = e^(−∫Q dy), Q = (M_y − N_x)/M). Uses: `implicit-solution`, `integrating-factor`, `first-order-linear-differential-equation`, `separable-differential-equation`.

## Colour, referents and symbols

F, M, N, u, A(y), r `function`; F_x, F_y, M_y, N_x, dF, dy/dx `derivative`; v⃗ = (M, N) `vector-field`; the level curve F = C `curve`; x, y as coordinates, C, P, Q in ink (P and Q are named functions the text solves with; they stay `function`). The solution y(x) is written y and kept in ink here: in 1.8 y is first of all a coordinate of the plane (F(x, y)), and colouring it would colour every coordinate. No referents.

## Figures

- `sim-exact` · Figure 1.18 · `exact-equation`, `potential-function`, `vector-field`, `equipotential-curve` · value add: variation: the level curves F(x, y) = C of the potential chosen (x² + y², the book's figure; x² + xy − y of Example 1.8.3; x³/3 + xy² + y² of Example 1.8.5) in `curve`, the arrows of v⃗ = (F_x, F_y) = (M, N) faint in `vector-field`, square to the curves, the curve through the point the reader drags bold, which is the implicit solution F(x, y) = F(x₀, y₀) of M + N dy/dx = 0 · arrows: symbolic (a vector field) · still · choice of potential (three options), point x₀, y₀ by `F.drag` · headline "Through (3, 4): x² + y² = 25, a circle." · readout M + N dy/dx = 2x + 2y dy/dx = 0 and F = C with the numbers · graph alone · 2D. Window x −13 to 13, y −10 to 10 (the book's) for the circles; the other two potentials −4 to 4.
- `sim-vortex` · Figure 1.19 (Example 1.8.4) · `exact-equation`, `poincare-lemma` · value add: variation: the solution of −y/(x² + y²) dx + x/(x² + y²) dy = 0 through the point the reader drags is the ray from the origin through it, y = (y₀/x₀)x on the half-plane x > 0 or x < 0 that holds the point, with the origin a hollow point where the field is undefined; opens on (1, 2), the book's y = 2x · arrows: none · still · sliders x₀, y₀ by `F.drag` · headline "Through (1, 2): arctan(y/x) = arctan 2, so y = 2x for x > 0." · readout F = arctan(y/x) = value · graph alone · 2D. Window x −5 to 5, y −10 to 10 (the book's).

## Extra simulations (rule 15)

None. A line-integral Sim for the 2π of Example 1.8.4 was weighed and dropped: the text leaves the computation to the reader and to a multivariable calculus text.

## Exercises

Inline: 1.8.1 (after Example 1.8.1), AI-marked approach. End: 1.8.2–1.8.7 kept with AI-marked solutions checked by SymPy (each potential differentiated back, each integrating factor tested with M_y = N_x); 1.8.101–1.8.103 with the book's answers, each checked.

## Wanted at chapter level

- Anchors: `exact-equation`, `potential-function`, `total-derivative`, `vector-field`, `conservative-vector-field` → `1.8-intro`; `exactness-test`, `poincare-lemma` → `1.8-solving` and `1.8-theorem-1-8-1`; `exact-integrating-factor` → `1.8-factors`; variables F, M, N → `1.8-intro`, u → `1.8-factors`.

## Derivations

- Solving exact equations · the exactness test M_y = F_yx = F_xy = N_x · printed as one chain · built as `drv-exactness-test` (facts: M = F_x, N = F_y, equality of mixed partials when the second derivatives are continuous; three moves), replacing the display.
- Integrating factors · a linear equation is exact after multiplying by r · score 3 · not built: three moves told in prose.
- Integrating factors · the condition on u and the factors u(x), u(y) · printed as displays with words between · built as `drv-exact-factor` (Derivations: two results, u(x) = e^(∫P dx) and u(y) = e^(−∫Q dy)), replacing the displays from "the function u should satisfy" to u(y); the prose between them stays where it carries the argument.
- Examples 1.8.1–1.8.7 · scores ≤ 2 · not built: the procedure with numbers.
