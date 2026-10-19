# Plan: 2.2 Constant-coefficient second-order linear ODEs (sec:ccsol)

Source: `source.md`. Status: plan; built straight through 2026-10-19. Template: Calculus `ch17/17.1`.

Three book subsections; equation (2.3); Theorems 2.2.1, 2.2.2 (Euler's formula), 2.2.3, three boxed formulas; Examples 2.2.1–2.2.4; inline Exercises 2.2.1–2.2.5 (2.2.2 inside Example 2.2.2); end exercises 2.2.6–2.2.16 and 2.2.101–2.2.107 (18, seven keyed); one book footnote (ansatz). No figure. The section note is dropped.

## Sub-concepts (page headers)

1. `solving-cc` **Solving constant-coefficient equations** (the book's): the problem y″ − 6y′ + 8y = 0, "Constant coefficients", the guess and its footnote, `drv-cc-example` in place of the `align` block, Try It 2.2.1, independence of e^{2x}, e^{4x}, the constants, (2.3), the characteristic equation and the quadratic formula, Theorem 2.2.1, Examples 2.2.1, 2.2.2 (Try It 2.2.2 inside it), the double-root paragraphs.
2. `complex-euler` **Complex numbers and Euler's formula** (the book's): the pair (a, b), multiplication, i² = −1, the example product, j for engineers, Try It 2.2.3, the complex exponential, Theorem 2.2.2, e^{a+ib}, Try Its 2.2.4 and 2.2.5, real and imaginary parts.
3. `complex-roots` **Complex roots** (the book's): roots α ± iβ, the complex-valued form, Euler to the rescue with `drv-complex-roots` in place of the two `aligned` displays, `sim-complex-exponential`, independence of y₃, y₄, Theorem 2.2.3, Examples 2.2.3, 2.2.4.

## Concept nodes

Introduced: `second-order-equation-with-constant-coefficients` (definition, at (2.3); form `eq-cc-second-order` (2.3)), `characteristic-equation` (definition; forms `eq-characteristic-equation` ar² + br + c = 0, `eq-characteristic-roots` the quadratic formula), `solution-for-distinct-real-roots` and `solution-for-a-repeated-real-root` (results, Theorem 2.2.1 (i) and (ii), each with its boxed form), `complex-number` (definition; form `eq-complex-multiplication`), `complex-exponential` (definition), `eulers-formula` (result, Theorem 2.2.2; form `eq-eulers-formula`), `real-and-imaginary-parts` (definition; terms real part, imaginary part), `solution-for-complex-conjugate-roots` (result, Theorem 2.2.3; boxed form), `solving-with-the-characteristic-equation` (skill: the method the section generalises from its first example).
Reinforced: `constant-coefficient-equation` ("Constant coefficients"), `linear-independence`, `general-solution-to-a-homogeneous-equation`, `superposition-principle`, `hyperbolic-functions` (Example 2.2.1). Uses: `solving-an-initial-value-problem`, `particular-solution`.

## Colour

`function`: y, y₁…y₄ (\ky, \kyone…\kyfour), the exponential e^{rx} in the figure; `derivative`: y′, y″; `eigenvalue`: r, r₁, r₂ (\kr, \krone, \krtwo) and α, β of a root α ± iβ (\kalpha, \kbeta), the root's dot in the figure. Ink: x, a, b, c, C₁, C₂, D₁, D₂, k, i, θ of Euler's formula, the complex numbers (a, b) of the review. No referents.

## Figures

The book draws nothing here.

- `sim-complex-exponential` · Sim (3Blue1Brown survivor 4, picked by Chen) · `complex-exponential`, `eulers-formula`, `solution-for-complex-conjugate-roots` · flow by animation and variation: the root r = α + iβ dragged in the complex plane; as x runs the point e^{rx} travels from 1, its velocity arrow always r times its position (the derivative re^{rx}, symbolic), so it circles at α = 0 and spirals in for α < 0, out for α > 0; beside it the real part e^{αx} cos βx, the book's y₃, is traced on the same x, with the envelope ±e^{αx} dashed · arrows: symbolic (the velocity re^{rx}, drawn in `derivative` on the moving point, and the faint radius from 0) · moving: the point travels x from 0 to 4π over 6 s, then holds; the trace is the motion, kinematic, which sets the moving tier · sliders α (−0.6 to 0.6, step 0.01, default 0, a dashed special at 0 where the path closes into a circle) and β (0 to 3, default 1, special at 0 where the root is real), the root r dragged on the plane through `F.drag` on those two sliders; the book's r² + 1 = 0 (r = i) on load · headline: r and the shape (circle, inward or outward spiral, real line at β = 0) · two panels side by side, the plane left (−1.6 to 1.6 square, the unit circle dashed, the root's own small plane inset at its corner) and the graph right (x 0 to 4π by y −1.6 to 1.6, pinned beyond) · 2D. Readout: e^{rx} = e^{αx}(cos βx + i sin βx) with the live α, β, x and the value, and (e^{rx})′ = re^{rx}; a clock drives it, so no highlight.

Extra Sims weighed and left out: a characteristic-roots Sim over a, b, c (2.4's free-motion figure moves the same roots under damping, Calculus `sim-characteristic-roots` exists for linking); a double-root limit picture of (e^{r₂x} − e^{r₁x})/(r₂ − r₁) closing on xe^{rx} (a pleasing check, but the argument is two lines and the figure would restate it).

## Exercises

- Try Its 2.2.1–2.2.5 inline at their places, AI approaches checked by SymPy (2.2.3 has five parts; the book shows the answers in its prompts, the approach justifies each).
- End: 2.2.6–2.2.16 kept with AI-marked solutions, each checked by SymPy (2.2.14 the complex Cauchy–Euler case, 2.2.15 the double root α, 2.2.16 an equation from its solution); 2.2.101–2.2.107 with the book's answers, each checked (a contradiction would carry a correction note).

## Derivations

- The `align` block of the opening problem (y = e^{rx} into y″ − 6y′ + 8y = 0, divide by e^{rx}, factor) · printed block · built as `drv-cc-example`: y′ and y″ of e^{rx} as facts (the chain rule of the exponential), the substitution, the division (e^{rx} is never zero), the factoring.
- The general passage "Try the solution y = e^{rx} to obtain …" · prose first, three moves, score 1 · not built.
- The double-root argument "(e^{r₂x} − e^{r₁x})/(r₂ − r₁) is a solution … the limit is xe^{rx}" · prose, three moves, score 4 · not built (below the four-move floor).
- The `aligned` displays y₁, y₂ by Euler's formula and y₃ = (y₁ + y₂)/2, y₄ = (y₁ − y₂)/(2i) · printed blocks · built as `drv-complex-roots`, replacing them with "Then" and "Linear combinations of solutions are also solutions. Hence, … are also solutions." (these become its reasons): e^{a+ib} = e^a e^{ib} and Euler's formula for y₁, the second form for y₂, then superposition for y₃ and y₄ as two nodes, i² = −1 inserted where y₄'s 2i cancels.
- Example 2.2.4's constants · substitution only · not built.

## Wanted at chapter level

- forms `eq-cc-second-order` → `2.2-ccsol-eq`, `eq-characteristic-equation` → `2.2-characteristic-equation`, `eq-characteristic-roots` → `2.2-quadratic-formula`, `eq-distinct-real-roots` → `2.2-theorem-2-2-1`, `eq-repeated-real-root` → `2.2-theorem-2-2-1`, `eq-complex-multiplication` → `2.2-complex-multiplication`, `eq-eulers-formula` → `2.2-eulersformula`, `eq-complex-conjugate-roots` → `2.2-theorem-2-2-3`.
- variables of 2.2: y, y′, y″ → `2.2-solving-cc`; y₁, y₂ → `2.2-solving-cc`; r, r₁, r₂ → `2.2-characteristic-equation`; α, β, y₃, y₄ → `2.2-complex-roots`.
