# Plan: 3.7 Derivatives of Inverse Functions (m53584)

Source: `source.md`, converted with `tools/convert.py 3`. Status: planned 2026-10-12 by the chapter prep; config 2 waives the review for this run, and the decisions below are reported to Chen afterwards. Template: `ch01/1.1`.

Two objectives, an opening paragraph, three theorem notes (Inverse Function Theorem, Extending the Power Rule to Rational Exponents, Derivatives of Inverse Trigonometric Functions), one proof, Figures 3.28 and 3.29, Examples 3.60 to 3.67, six checkpoints (Checkpoints 3.42 to 3.47), eight Key Equations, two Key Concepts, 40 section exercises (260–299, 20 keyed), no glossary. One page. Numbers from the CNXML count in `exploration.md`; the builder confirms the first and last against openstax.org.

## Sub-concepts (page headers)

0. Opening paragraph (no header), the section's own introduction (root rule 21.3).
1. `inverse-derivative` **The Derivative of an Inverse Function**: Figure 3.28 and the slope argument p/q, q/p, the derivation from x = f(f⁻¹(x)) by the chain rule, the theorem note (`inverse-function-theorem-note`), Examples 3.60 and 3.61 with Checkpoints 3.42 and 3.43, the rational-exponent theorem note (`rational-power-note`) and its `<h3>` Proof, Example 3.62 and Checkpoint 3.44. Introduces `inverse-function-theorem` (the note), `power-rule-for-rational-exponents` (the note).
2. `inverse-trig` **Derivatives of Inverse Trigonometric Functions**: the opening paragraph (derivatives algebraic), Example 3.63 with its Analysis and Figure 3.29, Example 3.64, Checkpoint 3.45, the theorem note (`inverse-trig-note`), Examples 3.65–3.67, Checkpoints 3.46 and 3.47. Introduces `derivatives-of-inverse-trigonometric-functions` (the note).

Uses: `inverse-function`, `graph-of-an-inverse-function` (Figure 3.28's symmetry about y = x), `chain-rule` (the derivation, the proof, Examples 3.64, 3.65), `power-rule-for-composition-of-functions` (the proof), `quotient-rule` (Example 3.60's check), `inverse-trigonometric-functions`, `pythagorean-identities` (Example 3.63's Analysis), `product-rule` (3.66), `velocity` (3.67), `equation-of-a-tangent-line` (3.62, Checkpoint 3.47), `derivative-function`.

Example 3.64's text says "the formula derived in Example 3.61" (the CNXML links ex fs-id1169738977168, which is Example 3.61, ∛x); it means Example 3.63 (sin⁻¹x). A correction note at the spot, the words kept as printed. Checkpoint 3.43's answer prints "g(x) = (1/5)x^{−4/5}" for g′(x): kept as printed with a correction note. Checkpoint 3.44 prints s′(t) = (2t + 1)^{−1/2}, correct.

The Table of Derivatives `/calculus/sheets/derivatives/` is linked once, at the inverse-trig theorem note (its inverse-trigonometric table), the section's first new rule set the sheet lists; Example 3.65's f(x) = tan⁻¹(x²) carries the derivative-mode link `/calculus/sheets/integral-calculator/?op=derivative&expr=atan(x^2)`.

## Concept nodes (merged in book.json by the prep)

Three results: `inverse-function-theorem`, `power-rule-for-rational-exponents`, `derivatives-of-inverse-trigonometric-functions`. Prerequisites as merged.

## Colour, referents and function tokens

f, g, f⁻¹ (`\kf`, `\kg`, `\kfinv`) wear `function`; f′, g′, (f⁻¹)′ (`\kfprime`, `\kgprime`, `\kfinvprime`), dy/dx (`\kdydx`) and the slopes p/q, q/p as slopes wear `derivative`; the tangent lines and y = x wear `line`; θ (`\ktheta`) wears `angle` in Example 3.63's Analysis and Figure 3.29. a, x, m, n are ink. s(t) wears `function`, v(t) `derivative` (`\kv`, row from 3.4).

Referents (one group, Figure 3.28 and its paragraph): `tangent-f`, `tangent-inverse`, the two tangent lines the text names apart. The curves f and f⁻¹ keep `function` (one category, told apart by label: they are a function and its inverse, both functions; a referent pair `curve-f`/`curve-inverse` was considered and dropped, since the labels f and f⁻¹ already name them and the lesson is the slopes).

Function tokens: (x + 2)/x, 2/(x − 1), 1/(x + 2), cbrt(x) as `x^(1/3)`, x^(1/5), x^(2/3), sqrt(2x+1), asin(x), asin(2x^3), atan(x), atan(x^2), x^2 asin(x), acos(3x−1), atan(1/x), and the exercise-free prose functions. s(t) = tan⁻¹(1/t) is written in x for the grapher.

## Figures

- `sim-inverse-tangents` · Figure 3.28 · `inverse-function-theorem` · value add: variation: a point dragged along f carries its tangent and slope, and its mirror across y = x rides f⁻¹ with the mirrored tangent; the readout shows the two slopes reciprocal · arrows: none · still · `F.drag` of the point along f (stand-in close to the sketch: f(x) = x³/8 + x/2 + 1 on [0, 3], one-to-one and increasing, so both tangents stay on the canvas), default at x = 2 · headline: "slope of f at (2.00, 3.00) is 2.00; slope of f⁻¹ at (3.00, 2.00) is 0.50" · readout: (f⁻¹)′(a) = 1/f′(f⁻¹(a)) with the numbers · graph alone, square window with y = x dashed · 2D. Referents `tangent-f`, `tangent-inverse`.
- `fig-sin-inverse-triangle` · Figure 3.29 · `derivatives-of-inverse-trigonometric-functions` · standardisation only: faithful copy drawn live, the right triangle with angle θ, hypotenuse 1, opposite x, adjacent √(1 − x²) · still · no controls · 2D. A slider on x was considered and dropped: the triangle stays a triangle, the Analysis is algebra.

Exercise figures: the graphs of 260–263 and the answer images of 261, 263 in their cards; the figures of 296–299 in their cards.

## Exercises

- Checkpoints 3.42–3.47, kind `checkpoint`, after Examples 3.60, 3.61, 3.62, 3.64, 3.66, 3.67: 3.42 g′(x) = −1/(x + 2)² `open`; 3.43 `open`; 3.44 `open`; 3.45 1/(1 + x²) `open`; 3.46 `open`; 3.47 y = x `open`.
- Section exercises 260–299, kind `exercise`, with stems; 20 odd keyed kept. All 20 even are computational (sketching an inverse from a graph, (f⁻¹)′ at a point, tangent lines, dy/dx, the related-rates word problems 296, 298) and left out, named in `exercise_notes`.
- Review exercise held here from 3.9: 379 (keyed); 384 (unkeyed tangent line) left out.
- Tags: `inverse-function-theorem` for 260–278, 289–294; `derivatives-of-inverse-trigonometric-functions` for 279–288, 295–299, 379; `chain-rule` also on 279–283, 287.

## Extra simulations (rule 15)

None picked. Considered and dropped: a slider on the base function of Example 3.63 (sin restricted, its inverse and their slopes): `sim-inverse-tangents` already shows the reciprocal slopes for any monotone f; a power-rule slider for x^{m/n}: its positions look alike (24.9); a sec⁻¹ graph with |x|: the formula is read, not seen.

## Wanted at chapter level

Ids confirmed with `ost ids calculus 3.7` after the build.

- variables `3.7/f_inv_prime` → `3.7-inverse-function-theorem-note`; `3.7/g` → `3.7-inverse-function-theorem-note`; `3.7/m` → `3.7-rational-power-note`.
- forms: `eq-inverse-function-theorem`, `eq-inverse-function-theorem-g` → `3.7-inverse-function-theorem-note`; `eq-power-rule-root`, `eq-power-rule-rational` → `3.7-rational-power-note`; `eq-derivative-arcsine`, `eq-derivative-arccosine`, `eq-derivative-arctangent`, `eq-derivative-arccotangent`, `eq-derivative-arcsecant`, `eq-derivative-arccosecant` → `3.7-inverse-trig-note`.
- Review exercise (add with `ost add calculus exercises --section 3.7 '<row>'`, tag with `ost add calculus exercise_concepts`, name in `exercise_notes`: "Review exercise 379 is printed at the end of 3.9 and set here; 384 has no answer in the key and is left out."):
  - `{"id": "r379", "source_id": "fs-id1169738082288", "source_section": "3.9", "source_number": "379", "kind": "review-exercise", "bloom": "Apply", "place": {"at": "end"}, "cite": "inverse-trig", "prompt": "<p>Find the derivatives of the following functions.</p><p>$f(x)=\\frac{x}{4}\\sin^{-1}(x)$</p>", "answer": {"type": "open", "generated_by": "source", "solution": "$\\frac{1}{4}\\left(\\frac{x}{\\sqrt{1-x^{2}}}+\\sin^{-1}(x)\\right)$"}}` · tags `derivatives-of-inverse-trigonometric-functions`, `product-rule`

## As built (2026-10-12)

- `sim-inverse-tangents` as planned (stand-in f(x) = x³/8 + x/2 + 1 on [0, 3], square window 0 to 6, y = x dashed in `line`); the two tangents wear their referent colours `tangent-f`, `tangent-inverse`, marked in the opening paragraph and the caption; the readout writes (f⁻¹)′(a) = 1/f′(f⁻¹(a)) with the numbers.
- `fig-sin-inverse-triangle` drawn for x = 0.6, θ's arc and label in `angle`.
- Sheet links on book words: "These formulas" before the inverse-trig theorem opens the Table of Derivatives; "derivative" in Example 3.65 opens the calculator on tan⁻¹(x²).
- Variables rows added: 3.7/f, f_inv, f_prime, g_prime, dy/dx, s, s_prime, v, θ (angle); anchors on every 3.7 row and the ten forms.
- Corrections: Example 3.64's reference (Example 3.61 for 3.63), Checkpoint 3.43's answer (g for g′).
