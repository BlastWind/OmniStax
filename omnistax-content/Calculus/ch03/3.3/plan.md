# Plan: 3.3 Differentiation Rules (m53575)

Source: `source.md`, converted with `tools/convert.py 3`. Status: plan, built straight through (config 2). Template: `ch01/1.1`.

Six objectives, an opening paragraph, six theorem notes (The Constant Rule, The Power Rule, Sum, Difference, and Constant Multiple Rules, Product Rule, The Quotient Rule, Extended Power Rule), four proofs (power, sum, product, extended power), one Student Project (Formula One Grandstands), Figures 3.18 to 3.21 (3.20 a photograph), Examples 3.17 to 3.32, Checkpoints 3.11 to 3.20, eight Key Concepts, no Key Equations, 44 section exercises (106–149, 22 keyed), 7 glossary terms. One page.

## Changes from the prep plan

1. Picked: `sim-product-rule-area` (rule 15, below). Its two factors are referents `factor-f`, `factor-g` (`ch03/COLOR.md`).
2. A correction note: Checkpoint 3.17 asks for the derivative of h(x) and its answer is written k′(x) = −13/(4x − 3)²; words as printed, the note says h′ is meant.

## Sub-concepts (page headers)

0. Opening paragraph (no header).
1. `basic-rules` **The Basic Rules**, with its `<h3>` **The Constant Rule**: the limit computation, the term constant rule, the theorem note `constant-rule-theorem`, Example 3.17 and Checkpoint 3.11. Introduces `constant-rule` (the term, before the note). Example 3.17 is the text's first application of a rule: the Table of Derivatives is linked there, `/calculus/sheets/derivatives/` ("Table of Derivatives", row 1), config 24.
2. `power-rule` **The Power Rule**: Example 3.18, Checkpoint 3.12, the theorem note `power-rule-theorem` and its Proof, Example 3.19, Checkpoint 3.13. Introduces `power-rule` (the term before the note).
3. `sum-difference-constant-multiple` **The Sum, Difference, and Constant Multiple Rules**: the theorem note `sum-difference-theorem` (its three terms), the Proof of the sum rule, Examples 3.20 (Figure 3.18), 3.21, Checkpoint 3.14, Example 3.22, Checkpoint 3.15. Introduces `sum-rule`, `difference-rule`, `constant-multiple-rule` (each at its term in the note).
4. `product-rule` **The Product Rule**: the paragraph, the theorem note `product-rule-theorem`, `sim-product-rule-area`, the Proof, Examples 3.23, 3.24, Checkpoint 3.16. Introduces `product-rule` (the term in the paragraph).
5. `quotient-rule` **The Quotient Rule**: the paragraph, the theorem note `quotient-rule-theorem`, the term quotient rule, Example 3.25, Checkpoint 3.17, the Extended Power Rule note `extended-power-rule-theorem` and its Proof, Examples 3.26, 3.27, Checkpoint 3.18. Introduces `quotient-rule`, `extended-power-rule`.
6. `combining-rules` **Combining Differentiation Rules**: the rule-of-thumb paragraph (`combining-paragraph`), Examples 3.28–3.30, Checkpoint 3.19, Examples 3.31 (Figure 3.19), 3.32, Checkpoint 3.20, the Student Project note (`project-grandstands`) with Figures 3.20, 3.21 and its six questions (config 15). Introduces `combining-differentiation-rules`.

Examples keep the book's ids. "previously we found that d/dx(√x) = 1/(2√x)" links to Example 3.11, `/calculus/ch03/3.2/#3.2-fs-id1169737770972`. The Integral Calculator in derivative mode (config 24) is linked once per example whose function it takes, after the result, as the check: Examples 3.19 (`?op=derivative&expr=x%5E10`), 3.21 (`2x%5E5%2B7`), 3.24, 3.25 (`5x%5E2%2F(4x%2B3)`), 3.27, 3.31; the base is `/calculus/sheets/integral-calculator/?op=derivative&expr=…`, expr URL-encoded in the grapher's syntax. Examples with abstract f, g, h, k (3.23, 3.28–3.30) get none. Objectives and glossary to the tables, Key Concepts to `summary_html`; the rules' forms are "Theorems and formulas" (the book prints no Key Equations here).

## Concept nodes (merged in book.json by the prep)

Introduced here, 9: results `constant-rule`, `power-rule`, `sum-rule`, `difference-rule`, `constant-multiple-rule`, `product-rule`, `quotient-rule`, `extended-power-rule`; skill `combining-differentiation-rules`.

Coverage `uses`: `derivative-function` in the proofs and Example 3.18; `sum-law-for-limits` in the sum-rule proof; `differentiability-implies-continuity` and `limit-laws` in the product-rule proof; `equation-of-a-tangent-line` in Example 3.22, Checkpoint 3.15 and the project; `graph-of-the-derivative` (horizontal tangent, f′ = 0) in Example 3.31; `velocity` (3.4) in Example 3.32, marked only if the checker accepts it ahead of its span; `power-function`, `polynomial-function`, `rational-function` in the opening paragraphs.

## Colour, referents and function tokens

Per `ch03/COLOR.md`: f, g, h, k, j wear `function` where they are functions (`\kf`, `\kg`, `\kh`, `\kk`, `\kj`); f′, g′, h′, j′ (`\kfprime`, `\kgprime`, `\khprime`, `\kjprime`), s′ (`\ksprime`), v `derivative`; the tangent line `line`. The k of the constant multiple rule and of the extended power rule is ink (this section's `k` row has no concept): those k are written plain `k`; k(x) of Examples 3.25, 3.28 and 3.30 is a function but shares the letter, and is also written plain (one row per symbol per section). The h of the limit computations is the increment, plain; h(x) of Example 3.28–3.30 and Checkpoint 3.17 is written plain too. c, n are ink. The rules are untyped concepts: their spans are marked and stay ink.

Referents (one group, the product-rule block): `factor-f` and `factor-g`, the two factors f(x) and g(x) as the sides of `sim-product-rule-area`, marked in the theorem note's sentence "the derivative of the first function times the second function plus the derivative of the second function times the first function" ("the first function", "the second function") and in the figure's caption. The letters f and g keep `function` (1.1 ruling 4).

Function tokens: 8, −3, x³, x⁴, x¹⁰, x⁷, 3x², x², 6x, 2x, 2x⁵ + 7, 2x³ − 6x² + 3, x² − 4x + 6, 3x² − 11, (x² + 2)(3x³ − 5x), 2x⁵(4x² + x), 5x²/(4x + 3), (3x + 1)/(4x − 3), x⁻⁴, 6/x², 1/x⁷, x³ − 7x² + 8x + 1, t/(t² + 1) in x, 4x² − 3x + 2, the lines y = −2x + 5, y = 12x − 23, 2x + 3, and the project's x³ + 3x² + x.

## Figures

- `fig-constant-multiple` · Figure 3.18 (Example 3.20) · `constant-multiple-rule` · standardisation only: two panels, g(x) = 3x² over f(x) = x², and g′(x) = 6x over f′(x) = 2x, the derivative panel in `derivative` · still · no controls · graph alone, the panels side by side as the book has them · 2D. A slider on the factor 3 would show only that the curves scale (rule 24.9).
- `fig-horizontal-tangents` · Figure 3.19 (Example 3.31) · `combining-differentiation-rules`, `graph-of-the-derivative` · standardisation only: x³ − 7x² + 8x + 1 with the horizontal tangent lines at x = 2/3 and x = 4 (`line`), their points hover-named · still · graph alone · 2D.
- `fig-grandstand` · Figure 3.20 (Student Project) · photo, kept: the project points at it; the book's caption; `media/ch03/CNX_Calc_Figure_03_03_003.jpg`.
- `fig-racetrack` · Figure 3.21 (Student Project) · faithful copy drawn live and still, since the project's questions read it: (a) f(x) = x³ + 3x² + x, (b) the same with the two grandstand boxes and the corner (−1.9, 2.8) · no controls. A draggable tangent was considered and dropped: it would answer questions 1–5.
- `sim-product-rule-area` · Sim · `product-rule` · value add: intuition and variation: f(x)g(x) drawn as the area of a rectangle with sides f(x) (`factor-f`) and g(x) (`factor-g`), for Example 3.24's f(x) = x² + 2 and g(x) = 3x³ − 5x at x = 2 (sides 6 and 14); increasing x by h grows the sides by Δf and Δg, and the new area is the old plus a strip g·Δf, a strip f·Δg and a corner Δf·Δg; as h shrinks to the dashed special 0 the corner vanishes faster than the strips, so (Δ area)/h closes on f′g + g′f and never on f′g′ · arrows: none · still · slider x (untyped, 1.5 to 2.5, default 2), slider h (untyped, 0 to 0.3, default 0.2, special 0) · headline: "h = 0.20: the area grows by 59.2: strips 11.8 and 41.7, corner 5.8" live · readout: Δ(fg)/h = g·Δf/h + f·Δg/h + Δf·Δg/h with the numbers, and at h = 0 the rule's f′(x)g(x) + g′(x)f(x) = 4 · 14 + 31 · 6 = 242 · graph none (a scene beside the theorem note) · 2D.

Exercise images: the figure that 130–132 read in their stem; the answer graphs of 119, 121, 133, 135 and 129's answer image in their solutions.

## Exercises

- Checkpoints 3.11–3.20, kind `checkpoint`, inline Try Its after Examples 3.17, 3.18, 3.19, 3.21, 3.22, 3.24, 3.25, 3.27, 3.30, 3.32 (config 6): 3.11 `number` 0; 3.12 `open` (4x³); 3.13 `open` (f′(x) = 7x⁶); 3.14 `open` (6x² − 12x); 3.15 `open` (y = 12x − 23); 3.16 `open` (56x⁶ + 12x⁵); 3.17 `open` (−13/(4x − 3)², with its correction note); 3.18 `open` (−7x⁻⁸); 3.19 `open` (3f′(x) − 2g′(x)); 3.20 `number` 0.625.
- Section exercises 106–149, kind `exercise`, each with its group's stem (config 10), the table of 126–129 and the figure of 130–132 in their stems, "[T]" kept. The 22 odd ones keyed and kept. All 22 even ones are computational and left out, named in `exercise_notes`: 106–148 even.
- Review exercise 373 (keyed) held here, row below; 374 left out and named.
- Tags: 106–117 `combining-differentiation-rules` with the rule each needs (`power-rule`, `sum-rule`, `product-rule`, `quotient-rule`, `extended-power-rule`); 118–121, 133–142 `equation-of-a-tangent-line`; 122–132 `sum-rule`, `constant-multiple-rule`, `product-rule`, `quotient-rule`; 143 `higher-order-derivative`, `power-rule`; 144–149 `combining-differentiation-rules`, `instantaneous-rate-of-change`; 373 `extended-power-rule`, `difference-rule`. Bloom per card.

## Extra simulations (rule 15)

Picked: `sim-product-rule-area` (above): it shows why the product rule has two terms and why the corner term dies, which neither the proof's algebra nor Figure 3.18 shows; the text's own warning (d/dx(x · x) is not 1 · 1) is one state of it. Considered and dropped: a power-rule binomial expansion animation: the proof's algebra is the lesson and an animation would replay it; a quotient-rule picture: no clean geometric reading at this level; a draggable tangent for the project: it answers the project; a slider on the constant multiple k: the curves only scale (rule 24.9).

## Wanted at chapter level

Ids confirmed with `ost ids calculus 3.3` after the build.

- variables: `3.3/j`, `3.3/j_prime`, `3.3/g_prime`, `3.3/k` → `3.3-sum-difference-theorem`.
- forms: `eq-constant-rule` → `3.3-constant-rule-theorem`; `eq-power-rule` → `3.3-power-rule-theorem`; `eq-sum-rule`, `eq-difference-rule`, `eq-constant-multiple-rule` → `3.3-sum-difference-theorem`; `eq-product-rule` → `3.3-product-rule-theorem`; `eq-quotient-rule` → `3.3-quotient-rule-theorem`; `eq-extended-power-rule` → `3.3-extended-power-rule-theorem`.
- referents rows: `factor-f`, `factor-g`, figures `["sim-product-rule-area"]`.
- A symbol for k′ is wanted only if the chapter pass decides k(x) in 3.3's examples should wear `function`; until then k and k′ are plain here.
- App: the `op=derivative` query parameter of the Integral Calculator (the links above assume it).
- Review exercise 373, once 3.9 is built: `ost add calculus exercises --section 3.3 '<row>'`, tags, and append to 3.3's `exercise_notes`: "Review exercise 373 is printed at the end of 3.9 and set here; 374 has no answer in the key and is left out." Row:
  - `{"id": "r373", "source_id": "fs-id1169738230392", "source_section": "3.9", "source_number": "373", "kind": "review-exercise", "bloom": "Apply", "place": {"at": "end"}, "cite": "combining-rules", "prompt": "<p>Find the derivatives of the following functions.</p><p>$f(x)=3x^{3}-\\frac{4}{x^{2}}$</p>", "answer": {"type": "open", "generated_by": "source", "solution": "$9x^{2}+\\frac{8}{x^{3}}$"}}` · tags `extended-power-rule`, `difference-rule`

## As built (2026-10-12)

- `fig-constant-multiple` draws f and g on one panel each, so they are referents `const-f`, `const-g` (book `COLOR.md`: two functions on one graph are referents), marked in Example 3.20 and the caption; f′ and g′ wear their referent's colour too.
- `sim-product-rule-area`: x on 1.5 to 2.2, h on 0 to 0.2 (special 0), the two sides on their own fixed scales; the readout splits Δ(fg)/h into the two strips and the corner and, at h = 0, writes f′(x)g(x) + g′(x)f(x) with the numbers.
- Sheet links: "rules for finding derivatives" in the opening paragraph opens the Table of Derivatives; the word "derivative" (or "differentiating") in the problems of Examples 3.19, 3.21, 3.24, 3.25 and 3.27 opens the Integral Calculator in derivative mode on that function. The book's words are kept; no words are added.
- Variables rows added: 3.3/f, g, f_prime, s, s_prime, v; anchors on the 3.3 rows and the eight rule forms.
- Correction: Checkpoint 3.17's answer (k′ for h′).
