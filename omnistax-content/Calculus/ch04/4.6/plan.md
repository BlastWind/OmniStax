# Plan: 4.6 Limits at Infinity and Asymptotes (m53596)

Source: `source.md`, converted with `tools/convert.py 4`. Status: plan; config 2 waives the review for this run, decisions reported afterwards. Built 2026-10-12.

Five objectives, an opening paragraph, five definitions (two informal, two formal, the horizontal asymptote), one Problem-Solving Strategy, Figures 4.40 to 4.61, Tables 4.2 to 4.6 and ten unnumbered tables, Examples 4.21 to 4.31 each with its checkpoint (4.20–4.30), four unnumbered graphs in Examples 4.28–4.31, four Key Concepts, 60 section exercises (30 keyed), five glossary terms. One page.

## Sub-concepts (page headers)

0. `intro` (no header).
1. `limits-at-infinity` **Limits at Infinity**, with `<h3>` `horizontal-asymptotes` (2 + 1/x, Table 4.2, Figures 4.40–4.42, the definitions `limit-at-infinity-definition` and `horizontal-asymptote-definition`, Example 4.21 with Figures 4.43–4.46), `infinite-limits-at-infinity` (x³, Table 4.3, Figure 4.47, `infinite-limit-definition`), `formal-definitions` (`formal-limit-definition`, Figure 4.48, Example 4.22, `formal-infinite-limit-definition`, Figure 4.49, Example 4.23). Introduces `limit-at-infinity`, `horizontal-asymptote`, `infinite-limit-at-infinity` and the two formal definitions.
2. `end-behavior` **End Behavior**, with `<h3>` `polynomial-end-behavior` (Figures 4.50–4.52, Table 4.4, Example 4.24), `algebraic-end-behavior` (Example 4.25 with Figures 4.53–4.55, the oblique asymptote and Figure 4.56, the summary for rational functions, Example 4.26 with Figure 4.57), `transcendental-end-behavior` (Figures 4.58–4.61, Tables 4.5, 4.6, Example 4.27). Reinforces `end-behavior` (1.2, whose glossary word "end behavior" this section prints in bold); introduces `end-behavior-of-rational-functions`, `oblique-asymptote`, `end-behavior-of-transcendental-functions`.
3. `guidelines` **Guidelines for Drawing the Graph of a Function**: the strategy `graphing-strategy`, Examples 4.28–4.31, each with its unnumbered graph and checkpoint. Introduces `drawing-the-graph-of-a-function`.

## Corrections

- Example 4.27 concludes "$\lim_{x\to\infty}f(x)=\frac{2}{7}$" for the limit as x → −∞, and "the graph of approaches" drops f (`c-limit-minus-infinity`).
- Example 4.29 prints the interval (−1, −1) for (−1, 1), in the prose and its table (`c-interval`, one marker in the prose).
- Checkpoint 4.22's key has a stray second exponent (`c-cp22-exponent`); Checkpoint 4.25's key gives ±√3 for the limit as x → ∞, which is √3 (`c-cp25-sign`); Checkpoint 4.26's hint writes x → ∞ for x → −∞ (`c-cp26-hint`). Each note under its card.
- Exercise 307's key "P(0)≠0andQ(0)=0" is set with "and" as words; stray backticks in the source's interval notation are dropped (markup, not words).

## Colour, referents and function tokens

Types: `function`; `limit` for L and the band L ± ε; `line` for every asymptote, dashed; `point` for the extrema and intercepts of the sketches; `derivative`. M, N and ε are ink. Referents `poly-f` (5x³ − 3x² + 4) and `lead-g` (5x³) in `sim-leading-term`, the paragraph citing Figure 4.52 and the row heads of Table 4.4. Function tokens: every rule in x the prose gives.

## Figures

- Faithful copies drawn live, still, standardisation only: `fig-two-plus-reciprocal` (4.40), `fig-limits-at-infinity` (4.41, two panels on stand-ins), `fig-crossing-asymptote` (4.42), `fig-five-minus`, `fig-sinc`, `fig-tangent-branch`, `fig-arctangent` (4.43–4.46, Example 4.21's parts each read their own figure, so not folded), `fig-cube` (4.47), `fig-even-powers`, `fig-odd-powers` (4.50, 4.51, three powers each, named), `fig-rational-equal`, `fig-rational-lower`, `fig-rational-higher` (4.53–4.55), `fig-radical` (4.57), `fig-sine-ends`, `fig-tangent-ends`, `fig-exponential-ends`, `fig-logarithm-ends` (4.58–4.61), and the four unnumbered example graphs `fig-sketch-polynomial`, `fig-sketch-rational`, `fig-sketch-oblique`, `fig-sketch-cusp` (eyebrow "Figure", the book's images as originals). Asymptotes dashed in `line`.
- `sim-epsilon-n` · Figure 4.48 · `formal-definition-of-a-limit-at-infinity` · value add: variation: on 2 + 1/x (Example 4.22; the book's figure draws a generic f) the reader sets ε and N; the band L ± ε is shaded and the graph past N drawn heavy where it escapes, so "for all ε there exists N" is played · arrows: none · still · sliders ε (`limit`, 0.05–0.5) and N (ink, 0.5–20, dashed circle at 1/ε, the example's N) · headline "For every x > 4.0, f(x) stays within 0.25 of 2: this N works." · readout |f(x) − 2| = 1/x < 1/N against ε · 2D. Checkpoint 4.21's 3 − 1/x² is not drawn.
- `sim-m-n` · Figure 4.49 · `formal-definition-of-an-infinite-limit-at-infinity` · value add: variation, the same game for x³ (Example 4.23): sliders M and N (dashed circle at ∛M) · 2D. Checkpoint 4.22's 3x² is not drawn.
- `sim-leading-term` · Figure 4.52 · `end-behavior` · value add: variation: the polynomial and its leading term in windows |x| ≤ 2, 10, 100, 1000, the window widening by a morph, the two curves becoming one while f/g at the edge goes to 1 · arrows: none · still · choice window (four states: a discrete state is a choice) · headline "On |x| ≤ 1000, f(x) and g(x) = 5x³ are one curve to the eye: at x = 1000, f/g = 0.99940." · 2D. The window is the idea here, not a visual setting: the claim is about large x (rule 26.7's named zoom).
- `sim-oblique-asymptote` · Figure 4.56 · `oblique-asymptote` · value add: variation: (3x² + 4x)/(x + 2) and y = 3x − 2 in windows |x| ≤ 10, 30, 100, 1000; the gap f(x) − (3x − 2) = 4/(x + 2) is drawn in `error` at the window's edge and shrinks · still · choice window · 2D. Figure 4.55, the same function in Example 4.25, stays a faithful copy where the example reads it.

Photographs: none. Exercise figures: the graphs of 251–255 in their cards; the keyed sketch answers 295–305 as images in the solutions.

## Exercises

- Checkpoints 4.20–4.30, inline after Examples 4.21–4.31; 4.27 and 4.28 are answered by the book's images.
- Section exercises 251–310: 30 keyed odd ones kept (285, 287 "Answers will vary, for example…" kept as printed). Kept with AI-marked approaches: 306 (the relation for y = 2), 308 (asymptotes of f from those of f′), 310 (true or false, set as a choice). 306–310 are standalone: no group stem. Left out, computational: 27 even ones (vertical asymptotes from graphs, justifications of asymptotes, limits, asymptotes, constructions, graphing-calculator estimates, sketches).
- Review exercises set here in the chapter pass, `source_section` 4.10: 539 (keyed limit), 547 (keyed sketch, its image as the answer); 540, 548 left out.

## Extra simulations (rule 15)

The four Sims above are required figures made live. Judged and dropped: a Sim of the graphing strategy stepping through its six steps on Example 4.29 (a directed tour would replay the example's text step by step; the four example graphs already show each result). None built.

## Wanted at chapter level

- variables `4.6/L` → `4.6-limit-at-infinity-definition`.
- forms `eq-limit-at-infinity`, `eq-limit-at-negative-infinity` → `4.6-limit-at-infinity-definition`; `eq-formal-limit-at-infinity` → `4.6-formal-limit-definition`; `eq-formal-infinite-limit-at-infinity` → `4.6-formal-infinite-limit-definition`.
- Review 539, 547 land in the chapter pass.
