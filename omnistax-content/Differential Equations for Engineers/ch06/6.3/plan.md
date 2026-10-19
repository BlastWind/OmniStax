# Plan: 6.3 Convolution (convolution:section)

Source: `source.md` from `tools/convert.py 6`. Status: plan (prep stage one, 2026-10-19); built straight through later (config 2). Template: `ch00/0.2`.

Three book subsections; equation (6.2); Theorem 6.3.1; two boxed formulas; Examples 6.3.1, 6.3.2 (`ltc-convsincosex`), 6.3.3, 6.3.4 (`example-undampedforcedbylaplacearbitrhs`), 6.3.5; two footnotes (the general definition of convolution, Volterra); no inline exercise; end Exercises 6.3.1–6.3.9 and 6.3.101–6.3.104 (13, four keyed). No figure. The section note is dropped.

## Sub-concepts (page headers)

The book's own:
1. `the-convolution` **The convolution**: the product warning and the definition (6.2) `eq-6-2` (`p#convolution` with its footnote), `sim-convolution` after Example 6.3.1, Examples 6.3.1–6.3.2, the four properties (`eq-convolution-properties`, an `align` kept as the book prints it), Theorem 6.3.1 (`thm-6-3-1`) with `drv-convolution-theorem` after the "in other words" sentence, Example 6.3.3.
2. `solving-odes` **Solving ODEs**: Example 6.3.4 with `drv-forced-oscillation-convolution` replacing its worked lines (eyebrow "Example 6.3.4 ·", rule 29.5), the resonance paragraph (`p#resonance`), the general idea x = f ∗ h (`p#general-idea`).
3. `volterra` **Volterra integral equation**: the equation (`p#volterra` with its footnote), the transformed solution, Example 6.3.5.

## Concepts (staged)

Introduced: `convolution` (definition, type function, symbol f∗g; forms `eq-convolution-definition` (6.2), `eq-convolution-commuted`), `properties-of-convolution` (result; four forms), `convolution-theorem` (result, Theorem 6.3.1; forms `eq-convolution-theorem`, `eq-inverse-convolution-theorem`), `inverting-a-product-by-convolution` (skill, Example 6.3.3), `convolution-solution` (result, Example 6.3.4 and `p#general-idea`; forms `eq-convolution-solution`, `eq-undamped-forced-convolution`), `volterra-integral-equation` (definition; forms `eq-volterra`, `eq-volterra-transform`).
Reinforced: `laplace-transform-table` (Example 6.3.3 reads "Table 6.2" where it means the table of transforms; the link goes to Table 6.1, with a footnoted correction per rule 13 — decision for Chen), `transfer-function`, `exponential-order`, `inverse-laplace-transform`, `resonance` (Chapter 2, `p#resonance`), `natural-frequency`. Uses: `transform-of-a-derivative`, `undamped-forced-motion` (2.6), `integral-equation` (6.2).

## Colour, referents and symbols

f, g, h, x in `function`, f ∗ g in `function` (`\kfconvg`), F, G, H, X in `transform`, the convolution integral in `integral`, ω₀ in `frequency`; t, τ, c, ω, θ, ψ in ink. Referents `conv-f` and `conv-g` in `sim-convolution` (the two functions convolved; their curves and labels wear the referent colours, their letters stay in `function` since they carry no subscript); the text marks "f", "g" and "the two functions" with `data-ref` in `the-convolution` through Example 6.3.3.

## Figures

The book draws nothing here.

- `sim-convolution` · Sim (3Blue1Brown survivor 5, picked by Chen) · `convolution`, `properties-of-convolution`, `convolution-theorem` · value add: flow by animation and intuition: above, f(τ) over τ in `conv-f` and the flipped, shifted g(t − τ) in `conv-g` sliding right as t runs, the product f(τ)g(t − τ) between them shaded on [0, t] in `integral`; below, (f ∗ g)(t) in `function` traced up to the present t, the shaded area's value dropping to the point (t, (f ∗ g)(t)) by a dashed drop line; a choice of the pair: e^t and t (Example 6.3.1, the default, f ∗ g = e^t − t − 1), sin ωt and cos ωt (Example 6.3.2, ½ t sin ωt, the growth of resonance), t and e^(−t) (Example 6.3.3, e^(−t) + t − 1), cos t and e^(−t) (Exercise 6.3.101); for the sine pair ω on a slider (0.5 to 3, default 1) · arrows: kinematic (g slides; the overlap grows) · moving: t runs 0 to 4 (0 to 4π/ω for the sine pair) over 6 s, then holds; the sliding window is what the reader would otherwise imagine; the transport scrubs t exactly (every state is a function of t) · choice (four pairs), slider ω for the sine pair only (fades in with it) · headline "t = 1.50: the shaded area ∫₀ᵗ f(τ)g(t − τ) dτ is 1.98 = e^(1.5) − 1.5 − 1." · two graphs, the overlap above (τ 0 to 4, the pair's range) and f ∗ g below on the same t axis · 2D. Readout: (f ∗ g)(t) = ∫₀ᵗ f(τ)g(t − τ) dτ = closed form = value, and the second line ℒ{f ∗ g} = F(s)G(s) written for the pair (1/((s − 1)s²) for the default) so the theorem is on the page.

Extra Sims weighed and left out: a figure for Example 6.3.4's resonance (Chapter 2's `sim-beats` draws t sin ω₀t; the sine pair of `sim-convolution` shows the same growth); a Volterra "memory" animation (the equation is solved algebraically; no picture).

## Derivations (rule 29)

- Theorem 6.3.1, the convolution theorem · not proved in the book ("the most interesting property for us is the following theorem") · hidden derivation: write ℒ{f ∗ g} as the double integral ∫₀^∞ ∫₀ᵗ e^(−st) f(τ)g(t − τ) dτ dt, swap the order over 0 ≤ τ ≤ t < ∞, substitute u = t − τ in the inner integral, factor e^(−sτ)f(τ) out, recognise F(s)G(s): 5 moves · score 7 (facts imported: the definitions of the transform and of convolution, the order of integration swapped over the triangle (Calculus 15.2), the substitution rule; skipped run 5; joins 0) · built as `drv-convolution-theorem` after the "in other words" sentence; its facts cite 6.1's definition, (6.2) and Calculus 15.2; the result carries no number.
- Example 6.3.4, the forced oscillation with arbitrary forcing · the example's worked lines (transform, solve for X, name H, invert H from the table, apply the theorem, commute) · 6 moves · score 5 (facts: Table 6.2's second-derivative rule, the table entry sin(ω₀t)/ω₀, the convolution theorem, commutativity of convolution; skipped: none; joins: the two table facts meet the theorem) · built as `drv-forced-oscillation-convolution` with `source` "Example 6.3.4" (eyebrow "Example 6.3.4 ·"); the book's lines are the nodes, the last result reversing the order by `eq-convolution-commutative`. The example's opening sentence stays as prose.
- Example 6.3.2 (sin ∗ cos with the identity) · a worked example computing a specific convolution · score 2 (the identity imported, the antiderivative evaluation skipped) · not built; its `split` block stays.
- Example 6.3.1, 6.3.3 (one integration by parts each) · score 1 · not built.
- The Volterra solution X = F/(1 − G) · 2 moves · not built.

## Exercises

- No Try It.
- End exercises 6.3.1–6.3.9 (unkeyed), AI-marked solutions, computed answers verified at prep (SymPy) and again at build: 6.3.1 (t − 1)³/3 · u(t − 1) (the integral runs over τ ≤ t − 1); 6.3.2 t − sin t; 6.3.3 x = ∫₀ᵗ f(τ)(e^(r₁(t−τ)) − e^(r₂(t−τ)))/(m(r₁ − r₂)) dτ with r₁,₂ = (−c ± √(c² − 4km))/(2m); 6.3.4 x = ∫₀ᵗ f(τ) e^(−p(t−τ)) sin(ω₁(t − τ))/(mω₁) dτ, p = c/(2m), ω₁ = √(k/m − p²); 6.3.5 x = ∫₀ᵗ f(τ)(t − τ)e^(−p(t−τ))/m dτ; 6.3.6 X = (s² + 1)/(s³ + 1), x = (2/3)e^(−t) + (1/3)e^(t/2) cos(√3 t/2) + (1/√3) e^(t/2) sin(√3 t/2); 6.3.7 X = s/(s² − s + 1), x = e^(t/2)(cos(√3 t/2) + (1/√3) sin(√3 t/2)); 6.3.8 (t/4) sin 2t (cos 2t ∗ ½ sin 2t); 6.3.9 x = ∫₀ᵗ e^(−τ²) sinh(√2(t − τ))/√2 dτ. Shapes `open`.
- 6.3.101–6.3.104: the book's answers, verified at prep (½(cos t + sin t − e^(−t)); 5t − 5 sin t; ½(sin t − t cos t); ∫₀ᵗ f(τ)(1 − cos(t − τ)) dτ).

## Wanted at chapter level

- Anchors: variables f, g, f∗g → `6.3-convolution`; F, G → `6.3-thm-6-3-1`; x, X, x″, H, h → `6.3-ex-6-3-4`; x′, x‴ → `6.3-e104`. Forms: `eq-convolution-definition` → `6.3-eq-6-2`; `eq-convolution-commuted` and the four properties → `6.3-convolution-properties`; `eq-convolution-theorem`, `eq-inverse-convolution-theorem` → `6.3-thm-6-3-1`; `eq-undamped-forced-convolution` → `6.3-ex-6-3-4`; `eq-convolution-solution` → `6.3-general-idea`; `eq-volterra`, `eq-volterra-transform` → `6.3-volterra`.
- Referents `conv-f`, `conv-g` (section rows) listing `sim-convolution`.
- Example 6.3.3's "Table 6.2" (the book means the table of transforms, Table 6.1) is a book correction under rule 13: marker, footnote, the link to Table 6.1.
- ω₀ from Chapter 2's rows, as in 6.2.
