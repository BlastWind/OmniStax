# Plan: 4.8 L’Hôpital’s Rule (m53619)

Source: `source.md`, converted with `tools/convert.py 4`. Status: plan; config 2 waives the review for this run, decisions reported afterwards. Built 2026-10-12.

Three objectives, an opening paragraph, two theorems (the 0/0 and ∞/∞ cases) and one proof, Figures 4.71 to 4.76, Tables 4.7 to 4.12, Examples 4.38 to 4.45 each with its checkpoint (4.37–4.44), four Key Concepts, 50 section exercises (25 keyed), two glossary terms. One page.

## Sub-concepts (page headers)

0. `intro` (no header).
1. `applying-lhopitals-rule` **Applying L’Hôpital’s Rule**: the 0/0 form, the linear-approximation argument with Figure 4.71, the theorem `lhopitals-rule` and `lhopital-proof`, Example 4.38, the ∞/∞ theorem `lhopitals-rule-infinity`, Examples 4.39, 4.40 (when it does not apply), their checkpoints. Introduces `lhopitals-rule`, `lhopitals-rule-infinity-over-infinity`; reinforces `indeterminate-form` (2.3).
2. `other-indeterminate-forms` **Other Indeterminate Forms**, `<h3>` `zero-times-infinity` (Example 4.41, Figure 4.72) and `infinity-minus-infinity` (Example 4.42), then the powers 0⁰, ∞⁰, 1^∞ with Examples 4.43 and 4.44 (the two `<h3>` share the book's title text; their ids differ). Introduces `indeterminate-forms` (at the section's list of all seven), `indeterminate-products-and-differences`, `indeterminate-powers` (at Example 4.43).
3. `growth-rates` **Growth Rates of Functions**: Tables 4.7, 4.8, the definitions of growing more rapidly and at the same rate, Example 4.45 with Figures 4.73, 4.74 and Tables 4.9, 4.10, then Figures 4.75, 4.76 and Tables 4.11, 4.12. Introduces `growth-rates-of-functions`, `growth-of-exponential-and-logarithmic-functions`.

## Corrections

- Example 4.43 ends a line "(All limits x ≥ ∞.)"; meant is x → ∞ (`c-all-limits`).
- Figure 4.71's caption prints "If lim f(x) = lim g(x)"; the case is both limits 0 (`c-fig-4-71`, a figure note, no marker).

## Colour, referents and function tokens

Types: `function` for f and g as letters and for single curves; `derivative` for f′ and g′; `line` for the tangent lines of Figure 4.71; `point` for (a, 0) and the crossings. Where a graph compares two or three functions (Figures 4.71, 4.73–4.76), each curve is an instance drawn in its own `F.cat` colour and named on the curve: the text compares them only through their formulas, so no referents (the chapter `COLOR.md` listed referents here; this replaces that plan, recorded in the chapter pass). Function tokens: the rules in x of the examples and of the growth-rate tables' functions.

## Figures

- `sim-lhopital-zoom` · Figure 4.71 · `lhopitals-rule`, `linear-approximation` · value add: variation, the book's argument made visible: sin(πx) and ln x near a = 1 (Example 4.38b; the book's figure draws a generic pair) with their tangent lines, in windows about a that shrink by a morph (four states, a choice); the ratio f(x)/g(x) at a point of the window goes to −π, the ratio of the slopes · arrows: none · still · choice window · headline "At x = 1.0180, f(x)/g(x) = −3.1681; the ratio of the tangents' slopes is −π ≈ −3.1416." · graph alone · 2D. The window is the idea (the claim is about x near a), not a visual setting.
- `fig-x-ln-x` · Figure 4.72 · `indeterminate-products-and-differences` · faithful copy drawn live, the hollow end at the origin · still · 2D.
- `fig-exp-vs-square`, `fig-square-vs-log` · Figures 4.73, 4.74 · `growth-rates-of-functions` · faithful copies, two named curves each (Example 4.45's parts read their own figure) · still · 2D.
- `sim-exp-vs-power` · Figure 4.75 · `growth-of-exponential-and-logarithmic-functions` · value add: variation: the book's two panels (e^x against x³ and x⁴) are two states of one slider p; for every p the last crossing is found and marked, and the window runs past it, so "for any p > 0" is tried · slider p (1–6, soft detents at the integers) · readout x^p/e^x at the window's edge · 2D. Checkpoint 4.44's x¹⁰⁰ against 2^x is not drawn.
- `fig-log-vs-roots` · Figure 4.76 · `growth-of-exponential-and-logarithmic-functions` · faithful copy, three named curves · still · 2D.

Tables 4.7–4.12 stay in the text. Photographs: none. Exercise figures: none.

## Exercises

- Checkpoints 4.37–4.44 inline; 4.42 (e) is a number.
- Section exercises 356–405: 25 keyed odd ones kept. Kept with AI-marked approaches: 362, 364, 366 (can L'Hôpital's rule apply directly? explain and rewrite). 22 even ones, computational, left out.
- Review exercise 541 (keyed) is set here in the chapter pass, `source_section` 4.10; 542 left out.

## Extra simulations (rule 15)

Judged and dropped: an ∞ − ∞ Sim on 3xⁿ − (3x² + 5) with n as a choice (the book's three cases are three lines of the text; a figure would only plot them); a 0⁰ Sim (the logarithm trick is algebra, not a picture). None built.

## Wanted at chapter level

- forms `eq-lhopitals-rule` → `4.8-lhopitals-rule`.
- chapter `COLOR.md`: 4.8's compared curves are `F.cat` instances, not referents.
- Review 541 lands in the chapter pass.


## Derivations

- Applying L'Hôpital's Rule · the linear-approximation heuristic · score 1 · not built: an approximate idea whose closing line it does not derive; the result is derived by the proof that follows
- L'Hôpital's Rule (0/0 Case) · Proof · score 3 · built as drv-lhopitals-rule: f(a) = 0 = g(a) as its own node, then the book's chain with its column of reasons as uses; its note says the limit of the quotient needs g′(a) ≠ 0, which the proof leaves out
- L'Hôpital's Rule (∞/∞ Case) · score 9 · not built: its proof rests on Cauchy's mean value theorem, which the book never states
- Other Indeterminate Forms · f(x)^g(x) through the logarithm · score 3 · built as drv-exponent-indeterminate-forms (the displays and connectives replaced; the 0·∞ remark kept after it)
- Growth Rates · eˣ grows faster than xᵖ ("it is not difficult to show") · score 5 · built as drv-exponential-outgrows-powers after that paragraph: L'Hôpital's rule n times for a positive integer n, then any p > 0 by the squeeze theorem
- Growth Rates · xᵖ grows faster than ln x · score 5 · not built: three moves, under the four-move floor
