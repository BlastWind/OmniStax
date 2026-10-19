# Plan: 2.1 Second-order linear ODEs (solinear:section)

Source: `source.md`. Status: plan; config 2 builds straight through, reported afterwards; built 2026-10-19. Template: Calculus `ch17/17.1` (0.2 not yet built).

Equations (2.1), (2.2); Theorems 2.1.1 (Superposition, with its printed proof), 2.1.2 (Existence and uniqueness), 2.1.3; no example environment, no figure; inline Exercise 2.1.1; end exercises 2.1.2–2.1.10 and 2.1.101–2.1.105 (14, five keyed). The section note (1 lecture, reduction of order optional, [EP]/[BD]) is dropped and named in `notes`.

## Sub-concepts (page headers)

The book prints no subsection; the headers are OmniStax's, at the turns of the argument.

0. `solinear-intro`: the first paragraph and (2.1), "linear" (no header; the section's own opening).
1. `homogeneous-superposition` **Homogeneous equations and superposition**: "homogeneous" and (2.2), the two known equations y″ ± k²y = 0, Theorem 2.1.1, "linear combination", the proof (`drv-superposition`), the operator L and its linearity, sinh and cosh as linear combinations, their properties, Try It 2.1.1.
2. `existence-uniqueness` **Existence and uniqueness**: Theorem 2.1.2, the two solutions with b₀, b₁, `sim-two-conditions`, the paragraph on two constants and two equations.
3. `linear-independence` **Linear independence**: the Question, "linearly independent", Theorem 2.1.3, the cos/sin and x², 1/x examples.
4. `reduction-of-order` **Reduction of order**: the method, `drv-reduction-of-order`, the y₁ = x example, `drv-reduction-of-order-formula` in place of the formula display, the closing paragraph and the pointer to 2.5.

## Concept nodes

Introduced: `second-order-linear-differential-equation` (definition; forms `eq-second-order-linear-general` A(x)y″ + B(x)y′ + C(x)y = F(x), `eq-second-order-linear` (2.1)), `superposition-principle` (result, Theorem 2.1.1; form `eq-superposition`), `linear-combination` (definition), `operator` (definition), `linear-operator` (definition; form `eq-linear-operator`), `existence-and-uniqueness-for-linear-equations` (result, Theorem 2.1.2), `linear-independence` (definition, two functions), `general-solution-to-a-homogeneous-equation` (result, Theorem 2.1.3; form `eq-general-solution-homogeneous`), `reduction-of-order` (skill; form `eq-reduction-of-order`).
Reinforced: `linear-differential-equation`, `homogeneous-linear-equation` ((2.2) is staged as `eq-second-order-homogeneous`, a second form of `second-order-linear-differential-equation` with the condition f(x) = 0, so that Chapter 0's row is not touched), `hyperbolic-functions`, `derivatives-of-hyperbolic-functions`, `general-solution`. Uses: `second-order-differential-equation`, `initial-value`, `solution-to-a-differential-equation`, Chapter 1's integrating factor (`integrating-factor`).

## Colour

`function`: y, y₁, y₂, v, w, f(x), F(x) (\ky, \kyone, \kytwo, \kv, \kw, \kf, \kF); `derivative`: y′, y″, y₁′, y₁″, y₂′, y₂″, v′, v″, w′ (\kyprime, \kydprime, \kyoneprime, \kyonedprime, \kytwoprime, \kytwodprime, \kvprime, \kvdprime, \kwprime); `point`: the initial point (a, b₀) in the figure. Ink: x, the coefficients p, q, A, B, C, the constants C₁, C₂, A, k, b₀, b₁, a, the operator L. No referents: the figure draws one solution and a faint family, named by the caption.

## Figures

The book draws nothing here.

- `sim-two-conditions` · Sim · `existence-and-uniqueness-for-linear-equations`, `initial-value` · variation: y″ + k²y = 0 or y″ − k²y = 0 (a choice) through the point (0, b₀) leaving at slope b₁, the book's y = b₀ cos kx + (b₁/k) sin kx or b₀ cosh kx + (b₁/k) sinh kx; the point alone does not pin a solution (the faint fan through it at other slopes crosses there, which no two solutions of a first-order equation y′ = f(x, y) of 1.2 may do), the slope does · arrows none · still: the lesson is the dependence on b₀, b₁, k, not a motion · choice of equation (y″ + k²y = 0 | y″ − k²y = 0); sliders b₀ (−2 to 2, default 1), b₁ (−3 to 3, default 0), k (0.5 to 3, default 1), the point dragged on the canvas (held by b₀ and b₁ through `F.drag`, b₁ by the tangent's end) · headline: the equation's solution with the live constants · graph alone, x −4 to 4 by y −4 to 4, the initial point in `point`, its tangent in `derivative` · 2D. Readout: y = b₀ cos(kx) + (b₁/k) sin(kx) with the live numbers, y(0) = b₀, y′(0) = b₁.

Extra Sims weighed and left out (rule 15): a superposition Sim mixing cos x and sin x with C₁, C₂ sliders (the two-conditions figure already moves through that family); a linear-independence Sim plotting y₁/y₂ (the book's two-line test needs no picture); a reduction-of-order picture (the method is algebra).

## Exercises

- Try It 2.1.1 inline after the hyperbolic properties (derive them from the exponentials): AI approach, checked by SymPy.
- End: 2.1.2–2.1.10 kept with AI-marked solutions (2.1.6 opens with the Cauchy–Euler paragraph and closes with "We will revisit … later"; 2.1.8 titled reduction of order; 2.1.9, 2.1.10 with parts), each checked by SymPy; 2.1.101–2.1.105 with the book's answers.
- Bloom: Apply for the solves, Understand for the independence checks, Analyze for 2.1.6, 2.1.7.

## Derivations

- Proof of Theorem 2.1.1 · printed proof (a `split` block) · built as `drv-superposition`, the block replaced; "Proof:" and "Let y = C₁y₁ + C₂y₂. Then" become its first fact and start. The operator one-liner after it stays printed (the book's restatement in one line).
- Reduction of order, the `split` block from "We plug y₂ into the equation" · printed block · built as `drv-reduction-of-order`: y₂ = y₁v, y₂′ and y₂″ by the product rule as their own nodes, the substitution and the grouping, (y₁″ + py₁′ + qy₁) = 0 cancelling. The sentence "In other words, y₁v″ + (2y₁′ + p(x)y₁)v′ = 0" stays as the prose that follows.
- The reduction-of-order formula, "Since we have a formula …" · hidden · score 5 (the integrating-factor solution of 1.4 imported, a run of four unprinted moves: w′ + (2y₁′/y₁ + p)w = 0, its integrating factor, w = e^{−∫p}/y₁², v = ∫w) · built as `drv-reduction-of-order-formula`, replacing the display: the book's formula is its last line.
- y = b₀ cos kx + (b₁/k) sin kx from the initial conditions · two moves · not built.
- The x-example of reduction of order (xw′ + 3w = 0, …) · score 3, in prose · not built.

## Wanted at chapter level

- forms `eq-second-order-linear-general` → `2.1-eq-general-second-order`, `eq-second-order-linear` → `2.1-sol-eqlin`, `eq-second-order-homogeneous` → `2.1-sol-eqlinhom`, `eq-superposition` → `2.1-theorem-2-1-1`, `eq-linear-operator` → `2.1-linear-operator`, `eq-general-solution-homogeneous` → `2.1-theorem-2-1-3`, `eq-reduction-of-order` → `2.1-drv-reduction-of-order-formula`.
- variables of 2.1: y, y′, y″, f → `2.1-sol-eqlin`; y₁, y₂ → `2.1-theorem-2-1-1`; v, w, y₁′, y₁″, y₂′, y₂″, v′, v″, w′ → `2.1-reduction-of-order`; F → `2.1-eq-general-second-order`.
