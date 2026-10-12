# Plan: 3.6 The Chain Rule (m53581)

Source: `source.md`, converted with `tools/convert.py 3`. Status: planned 2026-10-12 in the chapter prep; config 2 waives the review for this run, and the decisions below are reported to Chen afterwards. Template: `ch01/1.1`.

Five objectives, an opening paragraph, four rule notes (The Chain Rule; Power Rule for Composition of Functions; Chain Rule for a Composition of Three Functions; Chain Rule Using Leibniz's Notation), one theorem note (Using the Chain Rule with Trigonometric Functions), one Problem-Solving Strategy, one informal proof, no figures, Examples 3.48 to 3.59, eight checkpoints (Checkpoints 3.34 to 3.41), two Key Equations, four Key Concepts, 46 section exercises (214–259, 23 keyed), 1 glossary term, one dropped media note (the chain-rule animation, 20_chainrule2). One page.

## Sub-concepts (page headers)

0. Opening paragraph (no header): sin(x³) and √(3x² + 1) as compositions the earlier rules cannot reach.
1. `deriving` **Deriving the Chain Rule**: the chain reaction for sin(x³), the limit rewritten with x³ − a³, the rule note (`chain-rule-note`), the media note (dropped, named in `notes`), the strategy note (`chain-rule-strategy`). Introduces `chain-rule` (its term span, before the note) and `applying-the-chain-rule` (the strategy).
2. `chain-power` **The Chain and Power Rules Combined**: the rule note (`power-composition-rule`), Examples 3.48–3.50, Checkpoints 3.34, 3.35. Introduces `power-rule-for-composition-of-functions`.
3. `chain-other` **Combining the Chain Rule with Other Rules**: Examples 3.51–3.53, Checkpoint 3.36, the theorem note (`chain-trig-theorem`), Example 3.54, Checkpoint 3.37. Introduces `chain-rule-with-trigonometric-functions`.
4. `three-functions` **Composites of Three or More Functions**: the general k(x) = h(f(g(x))), the rule note (`three-rule`), Examples 3.55, 3.56, Checkpoints 3.38, 3.39, the Proof (kept here, where the book prints it, under the header and not under its theorem note; the text says "an informal proof is provided at the end of the section"), Example 3.57, Checkpoint 3.40. Introduces `chain-rule-for-three-functions`.
5. `leibniz` **The Chain Rule Using Leibniz's Notation**: the derivation, the rule note (`leibniz-rule`, a use of `chain-rule`, whose Leibniz form it restates), Examples 3.58, 3.59, Checkpoint 3.41.

Objectives and glossary to the tables, Key Concepts to `summary_html`, Key Equations: `eq-chain-rule` and `eq-power-rule-composition`; the rest of the forms complete "Theorems and formulas".

## Concept nodes (merged in book.json by the prep)

Introduced here: results `chain-rule`, `power-rule-for-composition-of-functions`, `chain-rule-with-trigonometric-functions`, `chain-rule-for-three-functions`; skill `applying-the-chain-rule`.

Coverage `uses`: `composite-function` (1.1) at the opening and in the rule note; `derivative` (3.1) in the sin(x³) limit; `derivatives-of-sine-and-cosine` and `derivatives-of-the-other-trigonometric-functions` (3.5) in Examples 3.49, 3.51–3.53; `extended-power-rule` (3.3) in 3.48, 3.50; `product-rule` in 3.54; `quotient-rule` in checkpoint 3.37 and Example 3.58; `differentiability-implies-continuity` (3.2) in the Proof; `equation-of-a-tangent-line` in 3.50; `velocity`, `acceleration` (3.4) in 3.56 and checkpoint 3.39; `leibniz-notation` (3.2) in the fifth header.

## Colour, referents and function tokens

f, g, h, k wear `function` where their variables row types them (h and k are the composites in this section, `redefines`); f′, g′, h′, k′, dy/dx, dy/du, du/dx wear `derivative`. u is ink: the text writes it as a variable. The rules are untyped concepts; their spans are marked and stay ink. Referents: none on the page text; the Sim below draws g and f in their `function` colour and tells them apart by position (inner line, outer line) and labels, so no referent group is needed.

Function tokens: sin(x³), √(3x² + 1), 1/(3x² + 1)², (2x³ + 2x − 1)⁴, sin³x, 1/(3x − 5)², (x² − 2)³, cos(5x²), sec(4x⁵ + 2x), sin(7x + 2), (2x + 1)⁵(3x − 2)⁷, x/(2x + 3)³, cos⁴(7x² + 1), sin⁶(x³), sin(2x) + cos(3x), sin(4x), (x/(3x + 2))⁵, tan(4x² − 3x + 1), cos(x³). The general cos(g(x)) and h(f(g(x))) are not marked.

Sheets (config 24): the Table of Derivatives `/calculus/sheets/derivatives/` linked at the rule note (its general formula 8); the Integral Calculator's derivative mode at Example 3.48, `/calculus/sheets/integral-calculator/?op=derivative&expr=1/(3x^2%2B1)^2`.

## Figures

The book prints none. The one Sim picked is below.

## Exercises

- Checkpoints 3.34–3.41, kind `checkpoint`, after Examples 3.48, 3.50, 3.53, 3.54, 3.55, 3.56, 3.57, 3.59: 3.34 `open` 8(3x² + 1)(2x³ + 2x − 1)³; 3.35 `open` y = −48x − 88; 3.36 `open` 7 cos(7x + 2); 3.37 `open` (3 − 4x)/(2x + 3)⁴; 3.38 `open` 18x² sin⁵(x³) cos(x³); 3.39 `open` a(t) = −16 sin(4t); 3.40 `number` 28; 3.41 `open` −3x² sin(x³). Checkpoint 3.40's hint cites Example 3.56 ("Follow [Example 3.56]"); it is kept as printed (it means Example 3.57) with a correction note, the words as printed.
- Section exercises 214–259, kind `exercise`, each with its stem, "[T]" kept. The 23 keyed odd ones are kept. The 23 even ones are computational and left out, named in `exercise_notes`.
- No review exercise is held here.
- Tags: `chain-rule` with `leibniz-notation` for 214–219; `chain-rule`, `applying-the-chain-rule` for 220–227; `power-rule-for-composition-of-functions` for 221, 223, 229, 231, 233; `chain-rule-with-trigonometric-functions` for 225, 227, 235, 237, 241; `chain-rule-for-three-functions` for 235, 237, 251; `chain-rule` for 239, 243, 245–253; `velocity`, `acceleration` for 253, 259; Bloom per card.

## Extra simulations (rule 15)

Picked (config 22 lets the plan decide), judged against the test "does it open a view the text does not give": the text argues the rule as a chain reaction ("as x changes, x³ changes, which leads to a change in sin(x³)") and the dropped animation was the book's only picture of it. A section with no figure on the rule the whole book leans on needs one, and two stretchings in a row is a view no formula on the page draws.

- `sim-chain-stretch` · Sim · `chain-rule` · value add: variation: three number lines stacked, x, u = g(x) and y = f(u), for the book's h(x) = sin(x³) (g(x) = x³, f(u) = sin u); a small interval [x, x + Δx] on the x line is carried by g to an interval on the u line about g′(x) times as long, and by f to one on the y line about f′(u) times that, the two stretch factors written beside the arrows; as Δx shrinks the measured ratio Δy/Δx closes on f′(g(x))g′(x) · arrows: symbolic (the maps between lines, notation, not motion) · still · sliders x (ink, −1.5 to 1.5, default 1) and Δx (ink, 0.01 to 0.5, default 0.3, special at its floor) · choice of the composite: sin(x³) / (3x² + 1)⁻² (Example 3.48's) / cos(5x²) (Example 3.52's) · headline: "x = 1.00: g′ = 3.00, f′(u) = 0.54, so h′ = 1.62; Δy/Δx = 1.43" · readout h′(x) = f′(g(x))·g′(x) with the numbers in type colours · lines alone, no graph · 2D. Hover names on the three intervals; labels on the lines' names and the two factors only.

Dropped: a gear train (cogs turning at rates g′ and f′; kinematic arrows at the moving tier for a picture the number lines give still, and gears suggest constant rates); a tangent-line view of the composite (it is 3.1's tangent on another function); a three-function chain (`chain-rule-for-three-functions` adds a fourth line and nothing new to see).

New figlib part: none required; three `F.axes` strips with mapped intervals (`F.band`'s vertical strip, drawn horizontally, may serve) and symbolic connector arrows.

## Wanted at chapter level

Ids confirmed with `ost ids calculus 3.6` after the build.

- variables `3.6/h`, `3.6/h_prime` → `3.6-chain-rule-note`; `3.6/u`, `3.6/dy/du`, `3.6/du/dx` → `3.6-leibniz` (the derivation paragraph `leibniz-derivation`); `3.6/k` → `3.6-three-functions` (the paragraph `general-three`).
- forms: `eq-chain-rule`, `eq-chain-rule-leibniz` → `3.6-chain-rule-note`; `eq-power-rule-composition` → `3.6-power-composition-rule`; `eq-chain-rule-sine`, `eq-chain-rule-cosine`, `eq-chain-rule-tangent`, `eq-chain-rule-cotangent`, `eq-chain-rule-secant`, `eq-chain-rule-cosecant` → `3.6-chain-trig-theorem`; `eq-chain-rule-three` → `3.6-three-rule`.

## As built (2026-10-12)

- `sim-chain-stretch` as planned: three number lines with the swept bands between them, factors g′(x) and f′(u) beside the bands in `derivative`, choice of sin(x³), (3x² + 1)⁻², cos(5x²); x on −1.5 to 1.5, Δx 0.01 to 0.5 (default 0.1); no special (Δx = 0 has no interval). The readout writes h′(x) = f′(g(x))g′(x) with the numbers beside the live Δy/Δx.
- Review exercise 389 (moved from 3.5's plan) is set here: w(t) = 1.9 + 2.9 cos(πt/6) needs the chain rule.
- New symbol k_prime (merged); variables rows added for f and g (outer and inner, `redefines`), f_prime, g_prime, dy/dx, k_prime, s, s_prime, v; anchors on every 3.6 row and the ten forms.
- Sheet links on book words: "a list of derivative formulas" opens the Table of Derivatives; "derivative" in Example 3.48 opens the calculator.
- Correction: Checkpoint 3.40's hint (Example 3.56 for 3.57). The Problem-Solving Strategy's steps are an ordered list.
