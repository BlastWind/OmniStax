# Plan: 3.5 Derivatives of Trigonometric Functions (m53578)

Source: `source.md`, converted with `tools/convert.py 3`. Status: planned 2026-10-12 in the chapter prep; config 2 waives the review for this run, and the decisions below are reported to Chen afterwards. Template: `ch01/1.1`.

Three objectives, an opening paragraph, two theorem notes (The Derivatives of sin x and cos x; Derivatives of tan x, cot x, sec x and csc x), one proof, Figures 3.25 to 3.27, Examples 3.39 to 3.47 (3.45 with an Analysis), nine checkpoints (Checkpoints 3.25 to 3.33), six Key Equations, two Key Concepts, 39 section exercises (175–213, 18 keyed), no glossary. One page. The first section agent confirms the numbers against openstax.org.

## Sub-concepts (page headers)

0. Opening paragraph (no header) on simple harmonic motion, the section's own introduction.
1. `sine-cosine` **Derivatives of the Sine and Cosine Functions**: the h = 0.01 estimate and D(x), Figure 3.25, the theorem note (`sine-cosine-theorem`), the Proof (Figure 3.26, the two trigonometric limits, the sum identity), Figure 3.27, Examples 3.39–3.41 and Checkpoints 3.25–3.27. Introduces `derivatives-of-sine-and-cosine`.
2. `other-trig` **Derivatives of Other Trigonometric Functions**: Example 3.42 (tan x) and Checkpoint 3.28, the theorem note (`other-trig-theorem`), Examples 3.43, 3.44 and Checkpoints 3.29, 3.30. Introduces `derivatives-of-the-other-trigonometric-functions`.
3. `higher-order` **Higher-Order Derivatives**: the repeating pattern, Examples 3.45 (Analysis kept) to 3.47 and Checkpoints 3.31–3.33. Introduces `higher-order-derivatives-of-sine-and-cosine` (the Analysis's span `sine-cycle`).

The Proof's "Introduction to Limits" stays plain text, as Chapter 2 kept it. Objectives to the tables, Key Concepts to `summary_html`, the six Key Equations are the six forms below.

## Concept nodes (merged in book.json by the prep)

Introduced here: results `derivatives-of-sine-and-cosine`, `derivatives-of-the-other-trigonometric-functions`, `higher-order-derivatives-of-sine-and-cosine`.

Coverage `uses`: `derivative-function` at the opening estimate; `important-trigonometric-limits` and `addition-and-subtraction-formulas` in the Proof; `graph-of-the-derivative` at Figure 3.27; `product-rule` in Examples 3.39 and checkpoint 3.25; `quotient-rule` in 3.40, 3.42 and checkpoints 3.26, 3.28; `equation-of-a-tangent-line` in 3.43; `sum-rule` in 3.44; `velocity`, `acceleration`, `speeding-up-and-slowing-down` (3.4) in 3.41 and 3.47; `higher-order-derivative` in the third header; `pythagorean-identities`, `reciprocal-and-ratio-identities` in Example 3.42.

## Colour, referents and function tokens

f, g, D, s wear `function`; f′, g′, dy/dx and the higher Leibniz forms, v, a wear `derivative`. The theorems are untyped concepts and stay ink. D(x) wears `function` (its variables row), the cosine it approaches is drawn as f′ in `derivative`. No referents.

Function tokens: sin x, cos x, (sin(x + 0.01) − sin x)/0.01, sin x/x and (cos x − 1)/x (the h-limits written in x), 5x³ sin x, sin x cos x, cos x/(4x²), x/cos x, 2 sin x − x, √3 x + 2 cos x, tan x, cot x, csc x + x tan x, 2 tan x − 3 cot x, 2 − sin x, 2 sin x.

Sheets (config 24): the Table of Derivatives `/calculus/sheets/derivatives/` linked at the first theorem note (its trigonometric table) and again at the second; the Integral Calculator's derivative mode at Example 3.39, `/calculus/sheets/integral-calculator/?op=derivative&expr=5x^3*sin(x)`.

## Figures

- `sim-sine-difference-quotient` · Figure 3.25 · `derivatives-of-sine-and-cosine` · value add: variation: h on a slider (−1 to 1, default 0.01 as the book draws it, special 0) draws D(x) = (sin(x + h) − sin x)/h over cos x; at large h D is a visibly shifted, squashed cosine, and as h closes on 0 it settles onto cos x, which is the derivative being guessed · arrows: none · still · slider h (ink) · headline: "h = 0.01: D(x) is within 0.01 of cos x" (the largest gap on the window, live) · readout D(x) = (sin(x + h) − sin x)/h at the cursor x with cos x beside it · graph alone, −2π to 2π · 2D. At h = 0 D is undefined; the slider stops short (±0.001) and the special marks the limit.
- `fig-two-trig-limits` · Figure 3.26 · `important-trigonometric-limits` · standardisation only: y = (sin h)/h and y = (cos h − 1)/h drawn live with their holes at (0, 1) and (0, 0), still, hover-named · 2D.
- `sim-sine-derivative-trace` · Figure 3.27 · `derivatives-of-sine-and-cosine`, `graph-of-the-derivative` · value add: variation: x dragged along sin x carries its tangent, and the slope lands as a dot on the graph of cos x below, tracing it; the dots of the book at the horizontal tangents (±π/2, 3π/2) are specials where the dot sits on the axis · arrows: none · still · `F.drag` of x along sin x, −2π to 2π, specials at the maxima and minima · headline: "x = 1.00: slope of sin x = 0.54 = cos 1.00" · graph below (the derivative tracer the chapter asks of figlib; 3.2 builds it first) · 2D.
- Exercise figures: the answer graphs of 185, 187, 189 in their solutions.

## Exercises

- Checkpoints 3.25–3.33, kind `checkpoint`, after Examples 3.39, 3.40, 3.41, 3.42, 3.44 (two), 3.45, 3.46, 3.47: 3.25–3.28 `open` (cos²x − sin²x; (cos x + x sin x)/cos²x; t = π/3, 2π/3; −csc²x); 3.29 `open` 2 sec²x + 3 csc²x; 3.30 `number` 4/3 (1.3333, tol 0.001); 3.31 `open` cos x; 3.32 `open` −cos x; 3.33 `open` (v = −√3, a = −1, speeding up).
- Section exercises 175–213, kind `exercise`, each with its stem, "[T]" kept. The 18 keyed odd ones are kept (185, 187, 189 with answer images). Unkeyed kept with an AI-marked approach (config 12, root rule 13): 205, 206, 207 (derive cot, sec, csc with the quotient rule; 205 and 207 are odd but the key leaves them out) and 208 (prove d/dx cos x = −sin x from the definition). The other 17 even ones (176–204, 210, 212) are computational and left out, named in `exercise_notes`.
- Review exercises held here from 3.9 (rows below): 377 and 389 keyed; 378 and 388 (unkeyed computational) left out and named.
- Tags: `derivatives-of-sine-and-cosine` for 175–184 with the rule each uses, `derivatives-of-the-other-trigonometric-functions` for 175–190, 197–199, 205–207, `higher-order-derivatives-of-sine-and-cosine` for 191–196, 209–213, `velocity` for 200–202, 208 `derivatives-of-sine-and-cosine`; Bloom per card.

## Extra simulations (rule 15)

None picked. Considered and dropped: a spring in simple harmonic motion driven by s(t) = 2 sin t with v and a arrows (it is 3.4's `sim-particle-path` on another function; Example 3.47 states its comparison in two numbers); a derivative-cycle dial for sin → cos → −sin → −cos (the Analysis's table says it, and the four positions of a dial look alike); tracers for tan, sec (the same machine as `sim-sine-derivative-trace` on a function with poles, no new view).

## Wanted at chapter level

Ids confirmed with `ost ids calculus 3.5` after the build.

- variables `3.5/D` → `3.5-sine-cosine` (the paragraph defining D(x), span `d-of-x`).
- forms: `eq-derivative-sine`, `eq-derivative-cosine` → `3.5-sine-cosine-theorem`; `eq-derivative-tangent`, `eq-derivative-cotangent`, `eq-derivative-secant`, `eq-derivative-cosecant` → `3.5-other-trig-theorem`; `eq-fourth-derivative-sine` → `3.5-sine-cycle`.
- Review exercises: once 3.9 is built, add each row with `ost add calculus exercises --section 3.5 '<row>'`, its tags with `ost add calculus exercise_concepts --section 3.5 '{"exercise": "<id>", "concept": "<c>"}'`, and name them in 3.5's `exercise_notes` ("Review exercises 377 and 389 are printed at the end of 3.9 and set here; 378 and 388 have no answer in the key and are left out.") and in 3.9's. Rows:
  - `{"id": "r377", "source_id": "fs-id1169738191971", "source_section": "3.9", "source_number": "377", "kind": "review-exercise", "bloom": "Apply", "place": {"at": "end"}, "cite": "other-trig", "prompt": "<p>Find the derivatives of the following functions.</p><p>$f(x)=x^{2}\\cos x+x\\tan(x)$</p>", "answer": {"type": "open", "generated_by": "source", "solution": "$x\\sec^{2}(x)+2x\\cos(x)+\\tan(x)-x^{2}\\sin(x)$"}}` · tags `derivatives-of-sine-and-cosine`, `derivatives-of-the-other-trigonometric-functions`, `product-rule`
  - `{"id": "r389", "source_id": "fs-id1169738138102", "source_section": "3.9", "source_number": "389", "kind": "review-exercise", "bloom": "Apply", "place": {"at": "end"}, "cite": "sine-cosine", "prompt": "<p>The following questions concern the water level in Ocean City, New Jersey, in January, which can be approximated by $w(t)=1.9+2.9\\cos\\left(\\frac{\\pi}{6}t\\right),$ where $t$ is measured in hours after midnight, and the height is measured in feet.</p><p>Find $w'(3).$ What is the physical meaning of this value?</p>", "answer": {"type": "open", "generated_by": "source", "solution": "$w'(3)=-\\frac{2.9\\pi}{6}.$ At 3 a.m. the tide is decreasing at a rate of 1.518 ft/hr."}}` · tags `derivatives-of-sine-and-cosine`, `instantaneous-rate-of-change`

  The cos(πt/6) needs the chain rule of 3.6; the card is set in 3.5, where the cosine's derivative is, and the AI does not change it.
