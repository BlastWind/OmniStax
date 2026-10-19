# Plan: 3.9 Nonhomogeneous systems (`nonhomogsys:section`)

Source: `source.md`. Status: built 2026-10-19 straight through (config 2). Template: Calculus `ch08/8.1`.

Five examples, no theorems, equations (3.6)–(3.11), three boxed formulas ((3.6), ξ_k, variation of parameters), no figures, three inline exercises (3.9.1–3.9.3), nine end exercises (4 keyed). Section notes dropped.

## Sub-concepts (the book's headers; its subsubsections are `<h3>`)

`first-order-cc` **First-order constant-coefficient** with `integrating-factor` *Integrating factor* (Example 3.9.1), `eigen-decomp` *Eigenvector decomposition* ((3.7)–(3.9), Example 3.9.2, Exercise 3.9.1 inline), `undetermined` *Undetermined coefficients* (Example 3.9.3, Exercise 3.9.2 inline); `first-order-vc` **First-order variable-coefficient** with `variation` *Variation of parameters* ((3.10), (3.11), Example 3.9.4, Exercise 3.9.3 inline); `second-order-cc` **Second-order constant-coefficients** with `undetermined-2` *Undetermined coefficients* and `eigen-decomp-2` *Eigenvector decomposition* (Example 3.9.5).

## Concepts

Introduced: `integrating-factor-method-for-systems` (result, (3.6), boxed), `eigenvector-decomposition` (result, boxed ξ_k), `undetermined-coefficients-for-systems` (skill), `variation-of-parameters-for-systems` (result, boxed), `undetermined-coefficients-for-second-order-systems` (skill), `eigenvector-decomposition-for-second-order-systems` (result). Uses 3.3's Theorem 3.3.2, 3.8's matrix exponential and Exercise 3.8.7, 3.4's eigenvalue method, Chapter 1's integrating factor and Chapter 2's undetermined coefficients and variation of parameters.

## Colour and referents

x⃗, f⃗, b⃗, a⃗, c⃗ (solved), d⃗, g⃗, u⃗, v⃗_k, F⃗ `vector`; x⃗′ `derivative`; A, P, E, X(t), e^{tP} `matrix`; λ_k `eigenvalue`; ξ_k, g_k, x₁, x₂ `function`; the integral of the boxed solutions `integral`; C_k, a_k, α_k, c_k, the arbitrary c⃗ in ink. No referents.

## Figures

- `sim-eigen-decomposition` · Sim · `eigenvector-decomposition` · value add: flow by animation: Example 3.9.2 (A = [1 3; 3 1], f⃗ = [2e^t, 2t], x⃗(0) = [3/16, −5/16]); the plane with the eigenvector directions (1, −1) and (1, 1) drawn as skew axes, the point x⃗(t) moving, its two legs ξ₁v⃗₁ and ξ₂v⃗₂ drawn as the parallelogram that builds it, and beside it ξ₁(t) and ξ₂(t) graphed, each solving its own scalar equation ξ_k′ = λ_kξ_k + g_k; the reader sees one coordinate shrink at rate −2 then drift with the forcing while the other is driven off by e^{4t} · arrows: kinematic (the moving point), the legs symbolic · moving: t 0 to 0.8 in 6 s · sliders a₁ = ξ₁(0) (−1 to 1, default 1/4), a₂ = ξ₂(0) (−1 to 1, default −1/16; a dashed circle at the value that cancels the e^{4t} term, −1/3 + … computed so C₂ = 0) · headline the live ξ₁, ξ₂ · graph beside (the plane is square) · 2D. Rule 15 judged: the text decouples the system in symbols; only the skew coordinates show the solution as two independent scalar motions along the eigenvectors.

## Derivations (rule 29)

- The integrating factor for systems (P e^{tP} = e^{tP} P, the product rule, integrate, invert, (3.6), x⃗(0) = b⃗) · printed block · built as `drv-integrating-factor-for-systems` (Derivations ·: the indefinite and definite forms), replacing the displays from "We multiply both sides" through the check of x⃗(0).
- Eigenvector decomposition (plug (3.8) into (3.7), match coefficients, solve each ξ_k) · printed block · built as `drv-eigenvector-decomposition`, replacing the long display and the ξ_k lines through the boxed ξ_k.
- Variation of parameters (x⃗_p = X u⃗, cancel, X u⃗′ = f⃗, the boxed formula) · printed block · built as `drv-variation-of-parameters-for-systems`, replacing its displays.
- Second-order eigenvector decomposition · "as before", the same steps · not built (a similar proof is not repeated).
- Examples 3.9.1–3.9.5 · worked examples · not built.

## Exercises

- Inline: 3.9.1 after `example-3-9-2`, 3.9.2 after `example-3-9-3`, 3.9.3 after `example-3-9-4`. AI-marked checks, verified in SymPy.
- End: 3.9.4–3.9.8 AI-marked, computed in SymPy; 3.9.101–3.9.104 the book's answers.

## Wanted at chapter level

Anchors: xi → `3.9-eigen-decomp`; forms of `integrating-factor-method-for-systems` → `3.9-nhsys-intfacsoleq`, `eigenvector-decomposition` → `3.9-xi-box`, `variation-of-parameters-for-systems` → `3.9-variation-box`.
