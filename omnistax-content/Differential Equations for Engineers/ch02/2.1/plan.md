# Plan: 2.1 Second-order linear ODEs (solinear:section)

Source: `source.md`. Status: built 2026-10-19 straight through (config 2); text, figure, derivations and `section.json` reviewed against the source and the merged concepts, `ost check diffyqs --section 2.1` clean, built and checked in the browser in light and dark on 2026-10-19 (sec-2.1 task, port 8124). Template: `ch00/0.2` and `ch01/1.1` (built), the theorem note as `ch01/1.2` writes it.

Equations (2.1), (2.2); Theorems 2.1.1 (Superposition, with its printed proof), 2.1.2 (Existence and uniqueness), 2.1.3; no example environment, no book figure; inline Exercise 2.1.1; end exercises 2.1.2–2.1.10 and 2.1.101–2.1.105 (15 in all, five keyed). The section note (1 lecture, reduction of order optional, [EP]/[BD]) is dropped and named in `notes`.

## Sub-concepts (page headers)

The book prints no subsection; the headers are OmniStax's, at the turns of the argument.

0. The section's own opening, before the first header: `p#second-order-linear` (the defined term), `div.equation#eq-general-second-order` (A(x)y″ + B(x)y′ + C(x)y = F(x)), `div.equation#eq-2-1` ((2.1)), `p#linear-meaning` ("linear").
1. `homogeneous-superposition` **Homogeneous equations and superposition**: `p#homogeneous` and `div.equation#eq-2-2`, `p#seen-already` with the two known equations y″ ± k²y = 0 (a link to 0.2's four fundamental equations), `p#superposition-intro`, Theorem 2.1.1 as `div.note#thm-2-1-1`, `p#linear-combination`, `p#proof-superposition` ("Proof: Let y = C₁y₁ + C₂y₂. Then") followed by `drv-superposition`, `p#operator` with `div.equation#eq-operator-L`, `p#linear-operator` and the one-line operator proof, `p#cosh-sinh` (linked to Calculus 1.5's definition), `p#hyperbolic-properties` (linked to Calculus 6.9) with the properties display `div.equation#eq-hyperbolic-properties` and Try It 2.1.1 after it.
2. `existence-uniqueness` **Existence and uniqueness**: `p#eu-intro`, Theorem 2.1.2 as `div.note#thm-2-1-2`, `p#ivp-examples` with `div.equation#eq-ivp-cos-sin` and `div.equation#eq-ivp-cosh-sinh`, `p#cosh-sinh-cleaner`, `sim-two-conditions`, `p#two-conditions` (linked to Calculus 17.1's initial-value problems for what the page assumes about two conditions).
3. `independence` **Linear independence**: `p#question`, `p#linearly-independent` (the defined term), Theorem 2.1.3 as `div.note#thm-2-1-3`, `p#cos-sin-independent`, `p#x2-xinv`.
4. `reduction-of-order` **Reduction of order**: `p#reduction-method` (the defined term, y₂ = y₁v), `drv-reduction-of-order`, `p#reduction-w` (w = v′, the integrating factor linked to 1.4, the y₁ = x example), `p#reduction-formula` followed by `drv-reduction-of-order-formula` in place of the formula display, `p#reduction-remember`, `p#nonhomogeneous-pointer` (the pointer to 2.5).

## Concept nodes

Introduced (one `introduces` row each, the ids as merged): `second-order-linear-differential-equation` (`p#second-order-linear`; forms `eq-second-order-linear` (2.1), `eq-second-order-linear-general`, `eq-second-order-homogeneous` (2.2)), `superposition-principle` (`thm-2-1-1`; form `eq-superposition`), `linear-combination` (`p#linear-combination`), `operator` (`p#operator`; form `eq-operator-L`), `linear-operator` (`p#linear-operator`; form `eq-linear-operator`), `existence-and-uniqueness-for-linear-equations` (`thm-2-1-2`; forms `eq-second-order-ivp`, `eq-ivp-cos-sin`, `eq-ivp-cosh-sinh`), `linear-independence` (`p#linearly-independent`), `general-solution-to-a-homogeneous-equation` (`thm-2-1-3`; form `eq-general-solution-homogeneous`), `reduction-of-order` (`p#reduction-method`; forms `eq-reduction-of-order`, `eq-reduction-of-order-trial`, `eq-reduction-of-order-w`).
Reinforced: `linear-differential-equation` and `homogeneous-linear-equation` (Chapter 0's, on "linear" and "homogeneous"), `hyperbolic-functions`, `derivatives-of-hyperbolic-functions`, `general-solution`. Uses: `second-order-differential-equation`, `initial-value`, `solution-to-a-differential-equation`, `four-fundamental-equations`, `first-order-linear-differential-equation`, `integrating-factor`, `integrating-factor-method`, `antiderivative`.

## Colour

`function`: y, y₁, y₂, v, w, f(x), F(x) (\ky, \kyone, \kytwo, \kv, \kw, \kf, \kF); `derivative`: y′, y″, y₁′, y₁″, y₂′, y₂″, v′, v″, w′ (\kyprime, \kydprime, \kyoneprime, \kyonedprime, \kytwoprime, \kytwodprime, \kvprime, \kvdprime, \kwprime); `point`: the initial point (0, b₀) in the figure; the slope b₁ drawn there wears `derivative`. Ink: x (never \kx), the coefficients p, q (\kp, \kq, ink rows), A, B, C, the constants C₁, C₂, A, k, b₀, b₁, a, the operator L, the integrating factor r(x), the exponent r of the Euler exercises. No referents: the figure draws one solution and a faint fan, named by the caption and hover names.

## Figures

The book draws nothing here.

- `sim-two-conditions` · Sim · `existence-and-uniqueness-for-linear-equations`, `initial-value` · value add: variation: y″ + k²y = 0 or y″ − k²y = 0 (a choice) through the point (0, b₀) leaving at slope b₁, the book's y = b₀ cos kx + (b₁/k) sin kx or b₀ cosh kx + (b₁/k) sinh kx drawn full; the point alone does not pin a solution, so the solutions through it at the four other slopes b₁ ± 1, b₁ ± 2 are drawn faint and named on hover, and the slope b₁ is a short tangent through the point · arrows: none · still: the lesson is the dependence on b₀, b₁, k, not a motion · choice of equation (y″ + k²y = 0 | y″ − k²y = 0, the curves bending from one to the other); sliders b₀ (−2 to 2, default 1, detents 0 and 1), b₁ (−3 to 3, default 0, detent 0), k (0.5 to 3, default 1, detent 1), all untyped (constants in ink); no canvas drag, since the point's x is fixed at 0 and `F.drag` needs an x slider (a departure from the earlier plan) · headline "y(0) = 1.00 and y′(0) = 0.00 pick one solution of y″ + k²y = 0: it leaves the point flat, and no other solution through (0, 1.00) does so." · graph alone, x −4 to 4 by y −4 to 4 (a cosh branch past the top is clipped), the initial point in `point`, its slope in `derivative`, the curve and its name y(x) in `function` · 2D. Readout: y = b₀ cos(kx) + (b₁/k) sin(kx) = 1.00 cos(1.00x) + 0.00 sin(1.00x), y(0) = 1.00, y′(0) = 0.00 (cosh and sinh for the second equation), true in every state since the solution is built from b₀ and b₁.

Extra Sims weighed and left out (rule 15): a superposition Sim mixing cos x and sin x with C₁, C₂ sliders (the two-conditions figure already moves through that family); a linear-independence Sim plotting y₁/y₂ (the book's two-line test needs no picture); a reduction-of-order picture (the method is algebra, and its two derivations carry it).

## Exercises

- Try It 2.1.1 inline after `eq-hyperbolic-properties` (derive the properties from the exponentials): an AI-marked approach, checked by SymPy (`verify.py` in the task's scratch).
- End: 2.1.2–2.1.10 kept with AI-marked solutions, each checked by SymPy: 2.1.2 ratio eˣ; 2.1.3 y = 2x + 1; 2.1.4 by linearity of L; 2.1.5 r = 0, 2 and y = C₁ + C₂x²; 2.1.6 opens with the book's Cauchy–Euler paragraph and closes with its "We will revisit … later", r = ((a − b) ± √((b − a)² − 4ac))/(2a); 2.1.7 y = C₁xʳ + C₂xʳ ln x with r = (a − b)/(2a); 2.1.8 (tag "reduction of order") by plugging in; 2.1.9 (tag "Chebyshev's equation of order 1") y₂ = √(1 − x²); 2.1.10 (tag "Hermite's equation of order 2") y₂ = (1 − 2x²)∫₀ˣ e^(t²)/(1 − 2t²)² dt. Shapes: `open` throughout (every answer is a function or a proof); 2.1.101 and 2.1.102 are `choice` (Yes/No) with the book's answers; 2.1.103–2.1.105 `open` with the book's answers. A `tasks` list is one card with `<ol type="a">`.
- Bloom: Apply for the solves and the plugging-in, Understand for the independence checks and the proof of 2.1.4, Analyze for 2.1.6 and 2.1.7.

## Derivations

- Proof of Theorem 2.1.1 · printed proof (a `split` block) · built as `drv-superposition` (one node, four moves: the derivative of the sum, the regrouping, the two zeros, the sum), the block replaced; "Proof: Let y = C₁y₁ + C₂y₂. Then" stays as the prose before it and y = C₁y₁ + C₂y₂ is its first fact. The operator one-liner after it stays printed (the book's restatement in one line).
- Reduction of order, the `split` block from "We plug y₂ into the equation" · printed block · built as `drv-reduction-of-order` (three nodes: y₂′ by the product rule, y₂″ by the product rule, the substitution with the grouping and the cancelling of (y₁″ + py₁′ + qy₁)v). The sentence "In other words, y₁v″ + (2y₁′ + p(x)y₁)v′ = 0" stays as the prose that follows.
- The reduction-of-order formula, "Since we have a formula …" · hidden · score 5 (the integrating factor of 1.4 imported, a run of four unprinted moves: w′ + (2y₁′/y₁ + p)w = 0, its integrating factor y₁²e^{∫p}, (rw)′ = 0 and w = Ce^{−∫p}/y₁², v = ∫w) · built as `drv-reduction-of-order-formula` (four nodes), replacing the display: the book's formula is its last line.
- y = b₀ cos kx + (b₁/k) sin kx from the initial conditions · two moves · not built.
- The x-example of reduction of order (xw′ + 3w = 0, …) · score 3, in prose · not built.

## Wanted at chapter level

- forms: `eq-second-order-linear-general` → `2.1-eq-general-second-order`, `eq-second-order-linear` → `2.1-eq-2-1`, `eq-second-order-homogeneous` → `2.1-eq-2-2`, `eq-superposition` → `2.1-thm-2-1-1`, `eq-operator-L` → `2.1-eq-operator-L`, `eq-linear-operator` → `2.1-linear-operator`, `eq-second-order-ivp` → `2.1-thm-2-1-2`, `eq-ivp-cos-sin` → `2.1-eq-ivp-cos-sin`, `eq-ivp-cosh-sinh` → `2.1-eq-ivp-cosh-sinh`, `eq-general-solution-homogeneous` → `2.1-thm-2-1-3`, `eq-reduction-of-order` → `2.1-drv-reduction-of-order-formula`, `eq-reduction-of-order-trial` → `2.1-reduction-method`, `eq-reduction-of-order-w` → `2.1-reduction-w`.
- variables of 2.1: y, y_prime, y_dprime, f, p, q → `2.1-eq-2-1`; F → `2.1-eq-general-second-order`; y_1, y_2 → `2.1-thm-2-1-1`; y_1_prime, y_1_dprime, y_2_prime, y_2_dprime → `2.1-drv-superposition`; v → `2.1-reduction-method`; v_prime, v_dprime → `2.1-drv-reduction-of-order`; w, w_prime → `2.1-reduction-w`.
- No concept or edge fix and no new glossary word: the nine concepts, their forms and their `terms` were merged as the plan named them and the page introduces each once.
- Chapter pass 2026-10-19 (pass-ch02): applied: every form anchor and every variables anchor above (13 forms, 18 rows); no concept or edge change.
