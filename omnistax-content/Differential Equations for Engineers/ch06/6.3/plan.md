# Plan: 6.3 Convolution (convolution:section)

Source: `source.md` from `tools/convert.py 6`. Status: built 2026-10-19 (task `sec-6.3`, claude-opus-5-5, high effort). Template: `ch00/0.2`, `ch01/1.1`, `ch02/2.5`.

Three book subsections; equation (6.2); Theorem 6.3.1; two boxed formulas; Examples 6.3.1, 6.3.2 (`ltc-convsincosex`), 6.3.3, 6.3.4 (`example-undampedforcedbylaplacearbitrhs`), 6.3.5; two footnotes (the general definition of convolution, Volterra); no inline exercise; end Exercises 6.3.1–6.3.9 and 6.3.101–6.3.104 (13, four keyed). No figure. The section note is dropped.

## Sub-concepts (page headers)

The book's own:
1. `the-convolution` **The convolution**: the product warning and the definition (6.2) `eq-6-2` (`p#convolution` with its footnote 31), `p#another-function`, Example 6.3.1, `sim-convolution`, Example 6.3.2, the four properties (`p#convolution-properties`, `eq-convolution-properties`, an `align` kept as the book prints it, `p#commuted`), Theorem 6.3.1 (`thm-6-3-1`, its box `eq-convolution-theorem`), `p#in-other-words`, `drv-convolution-theorem`, Example 6.3.3 (with the correction marker `c-table-6-2`).
2. `solving-odes` **Solving ODEs**: `p#full-power`, Example 6.3.4 (the problem `eq-undamped-forced`, `p#apply-transform`, then `drv-forced-oscillation-convolution` replacing its worked lines, eyebrow "Example 6.3.4 ·", rule 29.5), `p#resonance`, `p#grows`, `p#general-idea` with `eq-convolution-solution`, `p#any-forcing` (introduces `convolution-solution`).
3. `volterra` **Volterra integral equation**: `p#volterra-equation` (footnote 32) and `eq-volterra`, `p#volterra-divide`, `eq-volterra-transform`, `p#volterra-invert`, Example 6.3.5.

## Concepts (staged)

Introduced: `convolution` (definition, type function, symbol f∗g; forms `eq-convolution-definition` (6.2), `eq-convolution-commuted`), `properties-of-convolution` (result; four forms), `convolution-theorem` (result, Theorem 6.3.1; forms `eq-convolution-theorem`, `eq-inverse-convolution-theorem`), `inverting-a-product-by-convolution` (skill, Example 6.3.3), `convolution-solution` (result, Example 6.3.4 and `p#general-idea`; forms `eq-convolution-solution`, `eq-undamped-forced-convolution`), `volterra-integral-equation` (definition; forms `eq-volterra`, `eq-volterra-transform`).
Reinforced: `laplace-transform-table` (Example 6.3.3 reads "Table 6.2" where it means the table of transforms; the link goes to Table 6.1, with a footnoted correction per rule 13 — decision for Chen), `transfer-function`, `exponential-order`, `inverse-laplace-transform`, `resonance` (Chapter 2, `p#resonance`), `natural-frequency`. Uses: `transform-of-a-derivative`, `undamped-forced-motion` (2.6), `integral-equation` (6.2).

## Colour, referents and symbols

f, g, h, x in `function`, f ∗ g in `function` (`\kfconvg`), F, G, H, X in `transform`, the convolution integral in `integral`, ω₀ in `frequency`; t, τ, c, ω, θ, ψ in ink. Referents `conv-f` and `conv-g` in `sim-convolution` (the two functions convolved; their curves and labels wear the referent colours, their letters stay in `function` since they carry no subscript); the text marks "f", "g" and "the two functions" with `data-ref` in `the-convolution` through Example 6.3.3.

## Figures

The book draws nothing here.

- `sim-convolution` · Sim (3Blue1Brown survivor 5, picked by Chen; OmniStax's own design, no wording or composition from the videos) · `convolution`, `properties-of-convolution`, `convolution-theorem` · value add: flow by animation and intuition: three panels on one horizontal scale; top, f(τ) in `conv-f` and the flipped, shifted g(t − τ) in `conv-g` sliding right as t runs (faint where τ < 0, outside the overlap); middle, the product f(τ)g(t − τ) on [0, t], its area shaded in `integral`; bottom, (f ∗ g)(t) in `function`, faint ahead and solid up to the present t, the dashed line τ = t falling from the top panel onto the point (t, (f ∗ g)(t)) and an `integral` bracket from the axis to the point; a choice of the pair: e^t ∗ t (Example 6.3.1, default, = e^t − t − 1, t to 2), sin ωt ∗ cos ωt (Example 6.3.2, = ½ t sin ωt, t to 12), t ∗ e^(−t) (Example 6.3.3, = e^(−t) + t − 1, t to 4), cos t ∗ e^(−t) (Exercise 6.3.101, = ½(cos t + sin t − e^(−t)), t to 8); for the sine pair ω on a slider (0.5 to 3, default 1, detent at 1; shown only for that pair) · arrows: kinematic (g slides; the overlap grows) · moving: t runs 0 to T over 6 s, then holds; every state is a function of t, so the transport scrubs it exactly · choice (four pairs), slider ω for the sine pair · labels: a legend at the right of each panel (f(τ), g(t − τ); the product and "its area"; (f ∗ g)(t)), since every curve but f moves; hover names carry the formulas, the line τ = t and the point · headline "t = 1.50: the product f(τ)g(t − τ) lives on 0 ≤ τ ≤ 1.50, and its area 1.98 is the height of f ∗ g at t." · three graphs stacked, the frame easing between the pairs' windows when the pair changes · 2D. Readout: (f ∗ g)(t) = the pair's integral with t written in = its closed form with t written in = value, one line, true at every t (the value is the closed form at the displayed t). The planned second readout line ℒ{f ∗ g} = F(s)G(s) is dropped: the figure does not draw the transform, and rule 26.13 keeps a note only for what the figure shows; the Sim sits after Example 6.3.1, before the theorem.

Extra Sims weighed and left out: a figure for Example 6.3.4's resonance (Chapter 2's `sim-beats` draws t sin ω₀t; the sine pair of `sim-convolution` shows the same growth); a Volterra "memory" animation (the equation is solved algebraically; no picture).

## Derivations (rule 29)

- Theorem 6.3.1, the convolution theorem (built: `drv-convolution-theorem`, one node of 7 moves: the definition, (6.2), split e^(−st), swap the order (exponential order + Calculus 15.2), factor out, substitute u = t − τ (Calculus 5.5), recognise G then F) · not proved in the book ("the most interesting property for us is the following theorem") · hidden derivation: write ℒ{f ∗ g} as the double integral ∫₀^∞ ∫₀ᵗ e^(−st) f(τ)g(t − τ) dτ dt, swap the order over 0 ≤ τ ≤ t < ∞, substitute u = t − τ in the inner integral, factor e^(−sτ)f(τ) out, recognise F(s)G(s): 5 moves · score 7 (facts imported: the definitions of the transform and of convolution, the order of integration swapped over the triangle (Calculus 15.2), the substitution rule; skipped run 5; joins 0) · built as `drv-convolution-theorem` after the "in other words" sentence; its facts cite 6.1's definition, (6.2) and Calculus 15.2; the result carries no number.
- Example 6.3.4 (built: `drv-forced-oscillation-convolution`, two nodes: the transformed equation to X = F/(s² + ω₀²); then H, the theorem with the table entry, (6.2) and the reversal by commutativity to the book's last line) · the example's worked lines (transform, solve for X, name H, invert H from the table, apply the theorem, commute) · 6 moves · score 5 (facts: Table 6.2's second-derivative rule, the table entry sin(ω₀t)/ω₀, the convolution theorem, commutativity of convolution; skipped: none; joins: the two table facts meet the theorem) · built as `drv-forced-oscillation-convolution` with `source` "Example 6.3.4" (eyebrow "Example 6.3.4 ·"); the book's lines are the nodes, the last result reversing the order by `eq-convolution-commutative`. The example's opening sentence stays as prose.
- Example 6.3.2 (sin ∗ cos with the identity) · a worked example computing a specific convolution · score 2 (the identity imported, the antiderivative evaluation skipped) · not built; its `split` block stays.
- Example 6.3.1, 6.3.3 (one integration by parts each) · score 1 · not built.
- The Volterra solution X = F/(1 − G) · 2 moves · not built.

## Exercises

- No Try It.
- End exercises 6.3.1–6.3.9 (unkeyed), AI-marked solutions, computed answers verified at prep (SymPy) and again at build: 6.3.1 (t − 1)³/3 · u(t − 1) (the integral runs over τ ≤ t − 1); 6.3.2 t − sin t; 6.3.3 x = ∫₀ᵗ f(τ)(e^(r₁(t−τ)) − e^(r₂(t−τ)))/(m(r₁ − r₂)) dτ with r₁,₂ = (−c ± √(c² − 4km))/(2m); 6.3.4 x = ∫₀ᵗ f(τ) e^(−p(t−τ)) sin(ω₁(t − τ))/(mω₁) dτ, p = c/(2m), ω₁ = √(k/m − p²); 6.3.5 x = ∫₀ᵗ f(τ)(t − τ)e^(−p(t−τ))/m dτ; 6.3.6 X = (s² + 1)/(s³ + 1), x = (2/3)e^(−t) + (1/3)e^(t/2) cos(√3 t/2) + (1/√3) e^(t/2) sin(√3 t/2); 6.3.7 X = s/(s² − s + 1), x = e^(t/2)(cos(√3 t/2) + (1/√3) sin(√3 t/2)); 6.3.8 (t/4) sin 2t (cos 2t ∗ ½ sin 2t); 6.3.9 x = ∫₀ᵗ e^(−τ²) sinh(√2(t − τ))/√2 dτ. Shapes `open`.
- 6.3.101–6.3.104: the book's answers, verified at prep (½(cos t + sin t − e^(−t)); 5t − 5 sin t; ½(sin t − t cos t); ∫₀ᵗ f(τ)(1 − cos(t − τ)) dτ).

## Wanted at chapter level

- Anchors, variables: f, g, f*g → `6.3-convolution`; F, G → `6.3-in-other-words`; x, x′, x″, X, ω₀ → `6.3-eq-undamped-forced`; H, h → `6.3-general-idea`; x‴ (only in Exercise 6.3.104) none.
- Anchors, forms: `eq-convolution-definition` → `6.3-eq-6-2`; `eq-convolution-commuted` → `6.3-commuted`; `eq-convolution-commutative`, `eq-convolution-scalar`, `eq-convolution-distributive`, `eq-convolution-associative` → `6.3-eq-convolution-properties`; `eq-convolution-theorem` → `6.3-eq-convolution-theorem`; `eq-inverse-convolution-theorem` → `6.3-in-other-words`; `eq-undamped-forced-convolution` → `6.3-ex-6-3-4`; `eq-convolution-solution` → `6.3-eq-convolution-solution`; `eq-volterra` → `6.3-eq-volterra`; `eq-volterra-transform` → `6.3-eq-volterra-transform`.
- Referents `conv-f`, `conv-g` are section rows (written) listing `sim-convolution`.
- Example 6.3.3's "Table 6.2" is corrected per rule 13 (correction note `c-table-6-2`; the link opens 6.1's `#6.1-table-6-1`). The links to `/diffyqs/ch06/6.1/#6.1-table-6-1` assume 6.1 builds Table 6.1 as `table-6-1`, as its plan says.
- Footnotes numbered 31 (convolution in general) and 32 (Volterra) by the book's running count (27 before Chapter 6; 6.1's three are 28–30).
- No concept or edge fix; no glossary word.
