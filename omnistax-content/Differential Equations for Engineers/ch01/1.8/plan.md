# Plan: 1.8 Exact equations (exact:section)

Source: `source.md`. Status: built 2026-10-19 straight through (config 2); text, figures, derivations and `section.json` reviewed against the source and the rules, `ost check diffyqs --section 1.8` ok, built and checked in the browser in light and dark on 2026-10-19 (sec-1.8 task). Section notes dropped and named in `notes`. Seven examples, two figures (1.18, 1.19), one theorem (1.8.1, the Poincaré Lemma, `div.note#theorem-1-8-1`), two footnotes (equipotential curves, Poincaré; numbered 1 and 2 as the other sections of the chapter number theirs), one inline exercise (1.8.1), 9 end exercises (3 keyed), three derivations.

## Sub-concepts (page headers)

`intro` **Potential functions and exact equations** (an OmniStax h2: the book opens the section with no header), then the book's own `solving` **Solving exact equations** and `factors` **Integrating factors**.

## Concepts

Introduced (one `introduces` row each): `potential-function` (`p#potential`), `equipotential-curve` (`p#equipotential`, the defined term is in its footnote), `total-derivative` (`p#total-derivative`), `exact-equation` (`p#exact-definition`, where the book says "called exact if"; the first italic mention in `p#potential` is a `uses` row), `vector-field` and `conservative-vector-field` (`p#vector-field`, Calculus's ids), `solving-an-exact-equation` (`p#procedure`), `exactness-test` (`p#exactness-test`), `poincare-lemma` (`div.note#theorem-1-8-1`), `exact-integrating-factor` (`p#factor-idea`). Uses: `implicit-solution`, `general-solution`, `solution-to-a-differential-equation`, `initial-value`, `integrating-factor` (1.4's, for r(x)), `first-order-linear-differential-equation`, `separable-differential-equation` (exercise 1.8.103 only).

Calculus links on the book's own words: "multivariable calculus" → 14.3 partial derivatives (`#14.3-partials-intro`), "second derivatives are continuous" → 14.3's mixed partials (`#14.3-second-partials`), "the work done depends only on the endpoints" → 16.3's fundamental theorem for line integrals (`#16.3-fundamental`), "multivariable calculus textbook" (the 2π path integral) → 16.3 potentials (`#16.3-potentials`).

## Colour, referents and symbols

F, M, N, u, A(y), r, p, f, P, Q `function` through their macros; F_x, F_y, M_y, N_x, dF, u_x, u_y, dy/dx `derivative`; v⃗ = (M, N) `vector-field`; the level curves F = C `curve`; the dragged initial point `point`. y is a coordinate of the plane here and its row is `type: null`, so it is written plain in text, captions, prompts and readouts (`\ky` only inside the linear equation's form `eq-linear-as-exact`, where the row's ink still applies); x, C, A, γ in ink. No referents.

## Figures

- `sim-exact` · Figure 1.18 · `exact-equation`, `potential-function`, `equipotential-curve`, `vector-field`, `conservative-vector-field` · value add: variation: the level curves F(x, y) = C of the chosen potential (x² + y², the book's figure; x² + xy − y of Example 1.8.3; x³/3 + xy² + y² of Example 1.8.5) faint in `curve`, the arrows of v⃗ = (M, N) = (F_x, F_y) faint in `vector-field` and square to them, and the curve through the dragged point bold, which is the implicit solution F(x, y) = F(x₀, y₀) of M + N dy/dx = 0 through it · arrows: symbolic (the vector field, drawn at its true relative length) · still: a family under a choice and a point has no clock · choice of potential (three options, a cut with a fade), the point (x₀, y₀) on two `point` sliders and `F.drag`, the sliders re-ranging with the potential and opening on each example's own point ((3, 4), (0, 1), (2, 1)) · headline "Through (3.00, 4.00): x² + y² = 25.00, a circle." · readout F(x, y) = x² + y² = 25.00, M = 2x = 6.00, N = 2y = 8.00, dy/dx = −M/N = −0.75 (at N = 0: "the curve is vertical here") · graph alone · 2D. Window x ±13, y ±10 (the book's) for the circles, x ±5.2, y ±4 for the other two, on one 1.3 : 1 frame so the circles are round; the curve, the point and the arrows are named on hover.
- `sim-vortex` · Figure 1.19 (Example 1.8.4) · `exact-equation`, `poincare-lemma`, `vector-field` · value add: variation and intuition: the field (−y, x)/(x² + y²) drawn by direction in `vector-field` (its length 1/r would swamp the frame near the origin; the hover name says "the direction of v⃗"), circling the origin, which is why no potential exists round it; the solution through the dragged initial point is the ray from the origin through it on the half-plane x > 0 or x < 0 that holds the point, the other rays faint and dashed, the origin a hollow point where M and N are undefined; opens on (1, 2), the book's y = 2x · arrows: symbolic · still · two `point` sliders x₀, y₀ with `F.drag` · headline "Through (1.00, 2.00): arctan(y/x) = arctan(2.00), so y = 2.00x for x > 0." (on the y-axis: N = 0 there, no solution y(x), the axis itself a solution x = 0; at the origin: M and N undefined) · readout F(x, y) = arctan(y/x) = arctan(2.00) = 1.107, y = tan(1.107) x = 2.00 x (x > 0) · graph alone · 2D. Window x −5 to 5, y −10 to 10 (the book's).

## Extra simulations (rule 15)

None. A line-integral Sim for the 2π of Example 1.8.4 was weighed and dropped: the text leaves the computation to the reader and to a multivariable calculus text; the swirl of the field in Figure 1.19 shows why the integral is not zero.

## Derivations (rule 29)

- `drv-exactness-test` · Derivation · the test for exactness · the book's one chain M_y = F_yx = F_xy = N_x, printed as a block after "As long as the second derivatives are continuous," · one node, two moves (the mixed partials swap, then N = F_y), replacing the display; the form `eq-exactness` anchors here.
- `drv-exact-factor-condition` · Derivation · the condition on an integrating factor · the two displays after "the function u should satisfy" (the product-rule chain, then (M_y − N_x)u = u_x N − u_y M) · one node, two moves, replacing them; the form `eq-exact-factor-condition` anchors here.
- `drv-exact-factor` · Derivations · the integrating factors u(x) and u(y) · the four displays of the u(x) and u(y) cases · four nodes (u = u(x) to its linear equation; solved with 1.4's (1.4) and C = 1; u = u(y) likewise) standing after "and u_y is just zero. Then". The prose that follows keeps every sentence of the book; the three displays it introduced in passing ("Then …", "If so, then we have a linear equation …") are written inline in those sentences, since the sentences do not stand without them, and the derivation carries them as its lines. The forms `eq-exact-factor-x` and `eq-exact-factor-y` anchor here.
- Integrating factors · a linear equation is exact after multiplying by r · score 3 · not built: three moves told in prose (`p#linear-exact-check`).
- Examples 1.8.1–1.8.7 · scores ≤ 2 · not built: the procedure with numbers.

## Exercises

- Inline: 1.8.1 (`e1`, after `div#ex-1-8-1`, `open`), an AI-marked answer: F = x² + y² + 3 is a potential too and the constant is absorbed into C.
- End, unkeyed (`e2`–`e7`, all `open`, AI-marked, every potential differentiated back and every factor tested with `ost`-independent SymPy in the task's scratch `verify.py`): 1.8.2 a) x²y + x³/3 + y³/3 + y = C, b) x⁶/6 + y⁶/6 = C, c) eˣ + xy³ = C, d) (x + y) sin x = C; 1.8.3 a) u = x e^(−xy) (no factor of one variable exists; the common factor e^(xy) is divided out and x restores exactness), b) u = y², c) u = 1/(x + y²) (again no factor of one variable; the common factor x + y² is divided out), d) u = x; 1.8.4 exact since M_y = 0 = N_x, F = ∫f dx + ∫g dy; 1.8.5 exact, y = ∫ from x₀ to x of f(t) dt + C; 1.8.6 F = ln|x| + xy + ln|y| both ways; 1.8.7 a) M_y = −u_yy, N_x = u_xx, b) v = y² − x², c) v = eˣ sin y, d) v = 3x²y − y³. The harmonic function and harmonic conjugate of 1.8.7 keep their italics in the prompt and are no concepts (config 20).
- Keyed (`e101`–`e103`, `generated_by: source`, each confirmed by SymPy): the book's answers as printed; 1.8.103 b) links Example 1.3.1 as `/diffyqs/ch01/1.3/#1.3-ex-1-3-1`.

## Wanted at chapter level

- Anchors, variables rows of 1.8: `F` → `1.8-potential`; `F_x`, `F_y` → `1.8-notation`; `dF` → `1.8-total-derivative`; `M`, `N`, `dy/dx` → `1.8-exact-form`; `M_y`, `N_x` → `1.8-exactness-fail`; `v_vec` → `1.8-vector-field`; `y` → `1.8-solve-for-y`; `u` → `1.8-factor-idea`; `u_x`, `u_y` → `1.8-factor-strategy`; `r` → `1.8-linear-factor`; `p`, `f` → `1.8-eq-linear-as-exact`; `P` → `1.8-factor-x`; `Q` → `1.8-factor-y`; `y_prime` and `g` appear only in the exercises (1.8.2 d, 1.8.101 a; 1.8.4, 1.8.103) and get no anchor.
- Anchors, forms: `eq-total-derivative` → `1.8-eq-total-derivative`; `eq-exact`, `eq-exact-dydx` → `1.8-eq-exact`; `eq-conservative-field` → `1.8-eq-conservative-field`; `eq-path-integral-potential` → `1.8-eq-path-integral-potential`; `eq-exact-fint` → `1.8-eq-1-5`; `eq-exactness` → `1.8-drv-exactness-test`; `eq-exact-factor-condition` → `1.8-drv-exact-factor-condition`; `eq-exact-factor-x`, `eq-exact-factor-y` → `1.8-drv-exact-factor`; `eq-linear-as-exact` → `1.8-eq-linear-as-exact`.
- No concept, edge or glossary change: the merged rows fit the page as built. The prep's `theorem-1-8-1` id is the note's id.
- Book footnotes carry a `number` (the checker refuses a book footnote without one, against SECTION.md's "no number"); 1.8 numbers its two 1 and 2 per section, as 1.1, 1.2, 1.5 and 1.6 do.
