# Plan: 2.3 The Limit Laws (m53492)

Source: `source.md`, converted with `tools/convert.py 2`. Status: plan; config 2 waives the review for this run, decisions reported afterwards. Template: `ch01/1.1`.

Six objectives, an opening paragraph, four theorem notes (Basic Limit Results, Limit Laws, Limits of Polynomial and Rational Functions, The Squeeze Theorem), one Problem-Solving Strategy, one Student Project, Figures 2.24 to 2.31, Examples 2.13 to 2.25, ten checkpoints, two Key Equations, four Key Concepts, 48 section exercises (83–130, 24 keyed), 9 glossary terms. One page.

## Sub-concepts (page headers)

0. `intro` (no header): the opening paragraph.
1. `limit-laws` **Evaluating Limits with the Limit Laws**: the Basic Limit Results note (restating 2.2's two limits, `uses`), Example 2.13, the Limit Laws note with its seven named laws, Examples 2.14 and 2.15 and the checkpoint. Introduces the seven `*-law-for-limits` and `limit-laws`.
2. `polynomial-rational` **Limits of Polynomial and Rational Functions**: the theorem note and the argument through the sum, constant multiple and power laws, Example 2.16 and its checkpoint. Introduces `limits-of-polynomial-and-rational-functions`.
3. `techniques` **Additional Limit Evaluation Techniques**: the observation that f = g near a gives equal limits, (x² − 1)/(x − 1) and Figure 2.24, the indeterminate form 0/0, the Problem-Solving Strategy, Examples 2.17–2.20 each with its checkpoint, the one-sided limits Examples 2.21 (Figure 2.25) and 2.22 (Figure 2.26) and the checkpoint (its answer image), the K/0 form, Example 2.23 and its checkpoint. Introduces `limits-of-equal-functions`, `indeterminate-form`, `evaluating-a-limit-of-the-form-zero-over-zero`.
4. `squeeze` **The Squeeze Theorem**: Figure 2.27, the theorem note, Example 2.24 (Figure 2.28) and its checkpoint, sin θ and cos θ on the unit circle (Figures 2.29, 2.30), sin θ/θ, Example 2.25 and its checkpoint, the Student Project Deriving the Formula for the Area of a Circle (Figure 2.31) as a note with its five steps (config 15). Introduces `squeeze-theorem`, `important-trigonometric-limits`.

Examples keep the book's ids and numbers. Key Equations: Basic Limit Results (`eq-limit-of-x`, `eq-limit-of-constant`, 2.2's forms, `uses`) and Important Limits (`eq-limit-sin`, `eq-limit-cos`, `eq-limit-sin-over-theta`, `eq-limit-one-minus-cos-over-theta`); the seven law forms, `eq-limit-of-polynomial`, `eq-limit-of-rational-function`, `eq-squeeze-bounds` and `eq-squeeze-limits` complete "Theorems and formulas".

## Concept nodes (merged in book.json)

All 14 introduced here: results `sum-law-for-limits`, `difference-law-for-limits`, `constant-multiple-law-for-limits`, `product-law-for-limits`, `quotient-law-for-limits`, `power-law-for-limits`, `root-law-for-limits` (each with its glossary term and form), `limit-laws` (rests on the seven), `limits-of-polynomial-and-rational-functions`, `limits-of-equal-functions`, `squeeze-theorem`, `important-trigonometric-limits`; definition `indeterminate-form`; skill `evaluating-a-limit-of-the-form-zero-over-zero`. Prerequisites into 2.2 (`intuitive-definition-of-the-limit`, `two-important-limits`) and Chapter 1 (`rational-function`, `trigonometric-functions`).

Coverage: the Limit Laws note introduces each law at its `{term:}`; `uses` for `two-important-limits` at the Basic Limit Results note, `limit-laws` in Examples 2.14–2.16 and 2.21–2.23, `one-sided-limit` in 2.21–2.23, `infinite-limit` in 2.23, `indeterminate-form` in 2.17–2.20.

## Colour, referents and function tokens

f, g, h, p, q wear `function`; L and M (`\kM`, concept `limit`) and the phrases naming a limit `limit`; θ `angle` (as 1.3), its arc on the unit circle too. c, K, n, a, x are ink.

Referents: `bound-f`, `squeezed-g`, `bound-h`, the three functions of the squeeze in `sim-squeeze` and the theorem's paragraph and Example 2.24's text ("the graphs of f(x) = −|x|, g(x) = x cos x and h(x) = |x|"); `sine-segment` and `tangent-segment`, the two lengths of `sim-unit-circle-squeeze` and the paragraphs that name them ("the line segment shown in blue", "the side opposite angle θ in this new triangle is tan θ"). The letters f, g, h keep `function` (as 1.1's ruling 4).

Function tokens: every limit's function the examples and checkpoints evaluate where it is a rule in x ((2x² − 3x + 1)/(x³ + 4), (2x² − 3x + 1)/(5x + 4), (x² − 1)/(x − 1), x + 1, (x² − 3x)/(2x² − 5x − 3), (√(x + 2) − 1)/(x + 1), the complex fraction, the sum of 1/x and 5/(x(x − 5)), √(x − 3), the two piecewise functions, (x − 3)/(x² − 2x), x cos x, −|x|, |x|, x² sin(1/x)), written in x for the grapher; functions of θ (sin θ/θ, (1 − cos θ)/θ) in x.

## Figures

- `fig-equal-except-at-one` · Figure 2.24 · `limits-of-equal-functions` · standardisation only, a faithful copy drawn live: (a) f(x) = (x² − 1)/(x − 1) with its hole at (1, 2), (b) g(x) = x + 1, two panels as the book draws them, the hole hover-named · still · graph alone · 2D.
- `fig-root-one-sided` · Figure 2.25 (Example 2.21) · standardisation only: f(x) = √(x − 3) with its closed end at (3, 0) · still · graph alone · 2D.
- `fig-piecewise-two-sided` · Figure 2.26 (Example 2.22) · standardisation only: 4x − 3 for x < 2 (open end at (2, 5)) and (x − 3)² for x ≥ 2 (closed at (2, 1)) · still · graph alone · 2D. The checkpoint's answer graph (`CNX_Calc_Figure_02_03_004`, unnumbered) stays the book's image in the Try It's answer.
- `sim-squeeze` · Figure 2.27 + 2.28 (Example 2.24) · `squeeze-theorem` · value add: variation: a zoom slider about (0, 0) closes the window on −|x| ≤ x cos x ≤ |x| until the three meet at L = 0, and a dragged x shows g(x) held between f(x) and h(x) with the inequality's numbers · arrows: none · still · choice `the theorem` (Figure 2.27's stand-in curves pinching at (a, L)) / `x cos x` (Figure 2.28); slider zoom; `F.drag` of x · headline: "x = 0.5: −0.50 ≤ 0.44 ≤ 0.50" live · readout: f(x) ≤ g(x) ≤ h(x) with numbers, lim = L in `limit` · graph alone · 2D. The checkpoint's x² sin(1/x) is not offered. Referents `bound-f`, `squeezed-g`, `bound-h`.
- `sim-unit-circle-squeeze` · Figure 2.29 + 2.30 · `important-trigonometric-limits` · value add: variation: an angle slider θ (0 to π/2, default 0.8, near the book's drawn angle) on the unit circle draws sin θ (vertical segment), the arc θ and tan θ (the tangent segment at (1, 0)) and writes sin θ < θ < tan θ with live numbers; as θ goes to the dashed special 0 the three lengths shrink together while sin θ/θ in the readout climbs to 1 and cos θ to 1 · arrows: none · still · slider θ (`angle`) · headline: "θ = 0.30: 0.296 < 0.300 < 0.309" · readout: cos θ < sin θ/θ < 1 live · graph beside: sin θ/θ against θ with its hole at (0, 1) · 2D. Figure 2.29 is the state before the tangent segment appears; folded, its citation links here. Referents `sine-segment`, `tangent-segment`.
- `fig-inscribed-triangle` · Figure 2.31 (Student Project) · standardisation only: the isosceles triangle of an inscribed polygon with r, θ, h and b labelled, drawn live and still. A polygon-count slider was considered and dropped: its readout would be the project's step 5.

## Exercises

- Checkpoints, ten, after Examples 2.15, 2.16, 2.17, 2.18, 2.19, 2.20, 2.22, 2.23, 2.24 and 2.25.
- Section exercises 83–130, kind `exercise`, stems carried (the limit-law stem "Justify each step…", the given-limits stem of 107–114, the graphs stem of 118–125 with its image in each card's `figure`), "[T]" kept. 24 odd keyed kept (115, 117, 127, 129 carry their answer images). Of the 24 even ones, 126 (true or false with a justification, [T]) is kept with an AI-marked approach; the other 23 are computational and left out, named in `exercise_notes`. 128 (the rational/irrational piecewise) is computational: left out.
- Review exercises held here, added once 2.5 is built: 209 (true or false, quotient law for (sin x)/x, keyed False), 213, 215, 217, 219, 221 (keyed limits), 223 (squeeze proof, keyed); 224 (unkeyed squeeze proof) kept with an AI-marked approach; 214, 216, 218, 220, 222 (unkeyed computational) left out and named.
- Tags: the law concepts for 83–86 and 107–125, `limits-of-polynomial-and-rational-functions` for 87–92, `indeterminate-form` and the 0/0 skill for 93–102, `infinite-limit` for 103–106, `squeeze-theorem` for 126–129, 223, 224, `important-trigonometric-limits` for 99 and 209.

## Extra simulations (rule 15)

None picked. Considered and dropped: a limit-laws pair (two functions with limits L and M, their sum and product traced): the laws are arithmetic the examples spell out, and the slider positions would look alike (rule 24.9); a K/0 sign tracker for Example 2.23: the example's three steps say it; a polygon-area slider for the Student Project: it answers the project.

## Wanted at chapter level

- variables `2.3/M`, `2.3/c`, `2.3/n` → the Limit Laws note in `2.3-limit-laws`; `2.3/p`, `2.3/q` → the theorem note in `2.3-polynomial-rational`; `2.3/θ` → the unit-circle paragraph in `2.3-squeeze`.
- forms: each `eq-*-law` → the Limit Laws note; `eq-limit-of-polynomial`, `eq-limit-of-rational-function` → its theorem note; `eq-squeeze-bounds`, `eq-squeeze-limits` → the squeeze theorem note; `eq-limit-sin`, `eq-limit-cos`, `eq-limit-sin-over-theta` → their displayed equations, `eq-limit-one-minus-cos-over-theta` → Example 2.25's last equation.
- Symbol `p` has no macro (Chapter 1 merged it untyped as the period), so p(x) is written plain or with `\kp` once the orchestrator adds the macro to Chapter 1's row.
