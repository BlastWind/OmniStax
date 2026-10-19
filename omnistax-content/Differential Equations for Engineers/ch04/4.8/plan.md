# Plan: 4.8 D’Alembert solution of the wave equation (dalemb:section)

Source: `source.md`. Status: plan (prep stage one, 2026-10-19); built straight through per config 2. Template: `ch00/0.2`, `ch01/1.9` (characteristics). Section notes dropped and named in `notes`.

An opening paragraph, four book subsections, Example 4.8.1, no theorem, equations (4.15)–(4.18), Figure 4.24 (two images of four slices), two book footnotes (d'Alembert's biography; "nothing special about η"), inline Exercise 4.8.1, end Exercises 4.8.2–4.8.6 and 4.8.101–4.8.103 (eight, three keyed).

## Sub-concepts (page headers)

0. `dalembert-intro`: the opening (`p#why-dalembert`, `eq-4-15`, `eq-4-16`).
1. `change-of-variables` **Change of variables** (the book's): `drv-characteristic-change` in place of the display chain from the chain rule to y = A(ξ) + B(η), `p#two-waves` (the referents named here), `p#characteristic-remark`.
2. `dalembert-formula` **D’Alembert’s formula** (the book's): `p#definitions` with `eq-dalembert-waves`, `eq-4-17` boxed, `drv-dalembert-check` in place of the checks (the four results), `p#voila`, Example 4.8.1 with `sim-dalembert` at Figure 4.24's place.
3. `another-way` **Another way to solve for the side conditions** (the book's): `p#procedure`, `p#stages`, `eq-4-18`, `p#minus-sign`, Try It 4.8.1, `p#warning`.
4. `remarks` **Some remarks** (the book's): `p#corners-stay`, `p#not-differentiable`, `p#wavefronts`.

## Concepts

Introduced: `wave-equation-general-solution` (result; forms `eq-wave-characteristic-form`, `eq-wave-general-solution`) at `drv-characteristic-change`; `dalemberts-formula` (result; terms d'Alembert solution to the wave equation; forms `eq-dalembert` at (4.17), `eq-dalembert-waves`, `eq-dalembert-h-form` at (4.18)) at `eq-4-17`; `wavefronts` (definition) at `p#wavefronts`.
Reinforced: `characteristic-coordinates` (1.9's concept; the book re-indexes the term here: a new form `eq-wave-characteristic-coordinates` ξ = x − at, η = x + at, section 4.8, is wanted on it), `characteristic-curve` (1.9), `wave-equation`, `wave-equation-side-conditions`, `wave-equation-series-solution` (4.7), `odd-periodic-extension` (4.4), `superposition-for-pdes` (4.6). Uses: the fundamental theorem of calculus (Calculus 5.3 link), equality of mixed partials (Calculus 14.3 link).

## Colour, referents and symbols

y, f, g, F, G, H, A, B `function` (\ky, \kf, \kg, \kF, \kG, \kH, \kA, \kB); y_tt, y_xx, y_t, y_ξη and the ∂/∂ξ, ∂/∂η operators' results `derivative` (\kytt, \kyxx, \kyt, \kyxieta; the ∂²y/∂ξ² forms plain); the characteristic curves ξ, η constant `curve`; the (x, t) region `region`; ∫G `integral`. Ink: x, t, a, L, ξ, η, s, v, C(ξ). Referents: `wave-right` (the wave F(x − at)/2 moving right) and `wave-left` (F(x + at)/2 moving left), drawn in `sim-dalembert` and marked in the text at "two functions (waves) traveling at speed a in opposite directions" (`p#two-waves`), "two waves traveling in opposite directions" (`p#procedure`) and "superposition of two functions (waves) moving in opposite directions" (Example 4.8.1); A and B as symbols keep `function` with no `ref` (the text never names A as "the right wave").

## Figures

- `sim-dalembert` · Figure 4.24 (originals `dalemb-impuls-1-2.svg`, `dalemb-impuls-3-4.svg`) · `dalemberts-formula`, `wave-equation-general-solution`, `wavefronts`, `odd-periodic-extension` · value add: flow by animation and intuition: Example 4.8.1's triangular impulse on 0 < x < 1 with a = 1, the odd periodic extension F drawn faint beyond the ends, the two half-height waves F(x − at)/2 (`wave-right`) and F(x + at)/2 (`wave-left`) running apart and through the mirrored copies at the ends, so a wave reflects inverted off a fixed end, their sum the string in `function`; the four frames of Figure 4.24 are t = 0, 0.2, 0.4, 0.6 of the transport; a slider a (0.5 to 2, step 0.05, default 1) and a choice of the start (the impulse, default; the plucked string of 4.7 with L = 2; the dropped instrument of 4.7.6, f = 0 and g = −1, which uses the H form with the two waves ±H(x ± at)/(2a)); a probe x (slider, 0 to L, step 0.01, default 0.1) with the readout y(x, t) = (F(x − at) + F(x + at))/2 and the two values named, so at t = 0.6 the reader sees the book's y(0.1, 0.6) = (−1 + 0)/2 = −0.5; below, the (x, t) plane with the two characteristics through the probe point traced back to t = 0 and the interval [x − at, x + at] bracketed on the x-axis, the wavefronts (`p#wavefronts`), the characteristic lines faint · arrows: kinematic (the two waves' travel) · moving: t 0 to 2L/a a loop · slider a, x (untyped), choice (start) · headline "t = 0.60, x = 0.10: F(−0.5) = −1 and F(0.7) = 0, so y = −0.5; the point hears only the initial shape on [−0.5, 0.7]." · scene (the string) above, the (x, t) plane below · 2D. Readout: y(x, t) = (F(x − at) + F(x + at))/2 + (−H(x − at) + H(x + at))/(2a) with the live values, the H term written only for the struck start.

Book images: the two are originals of the figure. Extra Sims weighed and left out: the chain-rule change of variables as a sheared grid (ξ, η over (x, t)): the characteristic lines in the lower pane show it; a long-string supernova picture (the lower pane's cone is the idea).

## Derivations (rule 29)

- The change of variables (chain rule, y_xx and y_tt, 4a²y_ξη = 0, integrate twice, y = A(ξ) + B(η)) · printed as equations with words · built as `drv-characteristic-change` (eyebrow "Derivation · the general solution of the wave equation"): facts: ξ = x − at, η = x + at, the chain rule, equality of the mixed partials, the wave equation; nodes: the two operator identities, y_xx, y_tt, the transformed equation, the integration (with the cap that the constant of integration in η depends on ξ).
- The check of d'Alembert's formula (y(x, 0) = F, y_t(x, 0) = G, y(0, t) = 0, y(L, t) = 0) · printed as equations with words; a proof the book prints · built as `drv-dalembert-check` (eyebrow "Derivations · d'Alembert's formula satisfies the side conditions"): facts: the formula (4.17), the fundamental theorem of calculus, F and G odd, F and G 2L-periodic, the substitution v = s − L; four end nodes. Try It 4.8.1 (the H form) hangs after `p#minus-sign`.
- Example 4.8.1's y(0.1, 0.6) · substitution · not built; the figure's probe reproduces it.

## Exercises

- Try It 4.8.1 (inline after `p#minus-sign`): with H′ = G, y_t = (−aF′(x − at) + aF′(x + at))/2 + (aG(x − at) + aG(x + at))/(2a), so y_t(x, 0) = G(x); y(x, 0) = F(x) since H(x) − H(x) = 0; the ends vanish as in the derivation since H(v + L) is even in v when G(v + L) is odd (H odd, 2L-periodic in the same way) — the approach states the four checks, verified symbolically on sin x data.
- End, unkeyed (AI-marked, checked with SymPy): 4.8.2 y = (sin(x − 2t) + sin(x + 2t))/2 + (1/4)∫ sin s ds from x − 2t to x + 2t = sin x cos 2t + (1/2) sin x sin 2t; 4.8.3 y = (sin⁵(π(x − √2 t)) + sin⁵(π(x + √2 t)))/2 + (1/(2√2))∫ sin³(πs) ds over [x − √2 t, x + √2 t] (sin³ and sin⁵ of πx are their own odd periodic extensions), the integral written out as [−cos(πs)/π + cos³(πs)/(3π)] at the ends; 4.8.4 a) F = Σ_{odd} 8/(πn³) sin nx (the sine series of x(π − x)), y = Σ_{odd} (8/(πn³)) sin(nx) cos(2nt); b) y(x, t) = (F(x − 2t) + F(x + 2t))/2 with F the odd 2π-periodic extension, by cases: t = 1/2: x(π − 2) for 0 ≤ x ≤ 1, −x² + πx − 1 for 1 ≤ x ≤ π − 1, (π − x)(π − 2) for π − 1 ≤ x ≤ π; t = 1 and t = 2 by the same cases (the builder lists them, SymPy checks each against the series numerically); 4.8.5 sin(nx) cos(nat) = (sin(n(x − at)) + sin(n(x + at)))/2 term by term gives (F(x − at) + F(x + at))/2; 4.8.6 y = (f(x − t) + f(x + t))/2 with f the hat: two half-height hats moving apart, piecewise linear with corners at ±1 ± t; sketches at t = 0, 1/2, 1, 2 described (at t = 1 the two hats just separate, at t = 2 they are centred at ±2).
- Keyed 4.8.101–4.8.103 with the book's answers, each checked: 4.8.101 ✓ (G = sin 3πx, ∫ = [−cos 3πs/(3π)], a = 3); 4.8.102 ✓ (a) checked: inside, x − x² − 0.04; b) x² − x; c) x − x²); 4.8.103 ✓ (F odd, 8-periodic: y(1, 1) = (F(−9) + F(11))/2 = (F(−1) + F(3))/2 = (−2 + 1)/2 = −1/2; y(4, 3) = 0; y(3, 9) = (F(−27) + F(33))/2 = (F(−3) + F(1))/2 = (−1 + 2)/2 = 1/2). Shapes: `multi` for 4.8.103, `open` otherwise.

## Wanted at chapter level

- Anchors: variables y, y_tt, y_xx → `4.8-eq-4-15`; y_t, f, g → `4.8-eq-4-16`; y_ξη, A, B → `4.8-drv-characteristic-change`; F, G → `4.8-definitions`; H → `4.8-stages`. Forms: `eq-wave-characteristic-form`, `eq-wave-general-solution` → `4.8-drv-characteristic-change`; `eq-dalembert-waves` → `4.8-definitions`; `eq-dalembert` → `4.8-eq-4-17`; `eq-dalembert-h-form` → `4.8-eq-4-18`.
- A form on another chapter's concept (`ost add diffyqs forms` after the merge): `{"concept": "characteristic-coordinates", "id": "eq-wave-characteristic-coordinates", "latex": "\\xi = x - at, \\qquad \\eta = x + at", "section": "4.8", "anchor": "4.8-drv-characteristic-change"}`.
- The symbols A and B are Chapter 3's (\kA, \kB), redefined here as functions.
