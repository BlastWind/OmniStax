# Plan: 4.3 Maxima and Minima (m53611)

Source: `source.md`, converted with `tools/convert.py 4`. Status: plan; config 2 waives the review for this run, decisions reported afterwards. Built 2026-10-12.

Four objectives, an opening paragraph, three definitions, three theorems (the Extreme Value Theorem, Fermat's, the Location of Absolute Extrema) and Fermat's proof (Equations 4.4 and 4.5), one Problem-Solving Strategy, Figures 4.12 to 4.20, two unnumbered tables, Examples 4.12 and 4.13 each with its checkpoint (4.12, 4.13), three Key Concepts, 58 section exercises (29 keyed), ten glossary terms. One page.

## Sub-concepts (page headers)

0. `intro` (no header): the opening paragraph.
1. `absolute-extrema` **Absolute Extrema**: x² + 1 (Figure 4.12), the definition, 1/(x² + 1), the six cases of Figure 4.13, the Extreme Value Theorem and why it needs a closed, bounded interval. Introduces `absolute-extremum`, `extreme-value-theorem`.
2. `local-extrema` **Local Extrema and Critical Points**: Figure 4.14, the local-extremum definition, endpoint extrema, the critical-number definition, Fermat's theorem with its proof, x³ and the five cases of Figure 4.15, Example 4.12 (Figures 4.16–4.18) and its checkpoint. Introduces `local-extremum`, `critical-point`, `fermats-theorem`.
3. `locating-absolute-extrema` **Locating Absolute Extrema**: the Location of Absolute Extrema theorem, the strategy note, Example 4.13 with its two tables and Figures 4.19, 4.20, its checkpoint. Introduces `location-of-absolute-extrema`, `locating-absolute-extrema`.

Note ids: `absolute-extremum-definition`, `extreme-value-theorem`, `local-extremum-definition`, `critical-point-definition`, `fermats-theorem` with `fermat-proof`, `location-of-absolute-extrema`, `closed-interval-strategy`.

## Correction

The critical-number definition prints "We call the point (c, f(c)) a critical number of f"; the point is a critical point, as the glossary has it ("the point (c, f(c)) a critical point of f"). The words stay as printed with a numbered marker after them and an AI-marked note at the section's end (`c-critical-point`).

## Colour, referents and function tokens

Types: `function` for f and its graphs; `point` for every extremum and critical point the figures mark (a dot), and the words absolute and local maximum, minimum and extremum, critical number and critical point, which name points; `set` for the interval I (\kI) and, in the figures, the interval drawn on the x-axis; `derivative` for f′; `line` for the dashed horizontal tangents. c is ink. No referents. Function tokens: x² + 1, 1/(x² + 1), x³, the three functions of Example 4.12, −x² + 3x − 2 and x² − 3x^{2/3} of Example 4.13, the checkpoint's functions.

## Figures

- `fig-parabola-minimum` · Figure 4.12 · `absolute-extremum` · faithful still copy drawn live: x² + 1 with its minimum dot · standardisation only · arrows: none · still · graph alone · 2D.
- `fig-extrema-cases` · Figure 4.13 · `absolute-extremum`, `extreme-value-theorem` · faithful still copy: the book's six graphs (a)–(f) in two rows, each panel's absolute extrema dotted and named, its formula and verdict under it; the text reads the panels apart ("Figure 4.13(b)", "graphs (d), (e), and (f)"), so all six stay in view · arrows: none · still · 2D.
- `sim-local-extremum` · Figure 4.14 · `local-extremum` · value add: variation: the reader sets c and the half-width of an open interval I about it, I shaded in `set`, and the readout tests the definition, min over I ≤ f(c) ≤ max over I, so "there exists an open interval" is tried rather than read: at c = 0 and 1 every small I works, at the corner c = 2 too (the absolute maximum), elsewhere none does · arrows: none · still · sliders c (ink, −1 to 2.8, dashed circles at 0, 1 and 2) and half-width of I (`set`, 0.05 to 0.8) · headline "f(0.00) = 1.00 is the largest value on I: a local maximum at c = 0.00." · graph alone · 2D. The book prints no formula: the stand-in 2x³ − 3x² + 1 up to 2, then 5 − 6(x − 2), has the book's local maximum at 0, local minimum at 1 and cornered absolute maximum at 2.
- `fig-critical-cases` · Figure 4.15 · `critical-point` · faithful still copy: the book's five cases (a)–(e), stand-in curves close to the sketches (a peak, a double pole, a corner, a flat inflection, a vertical tangent), the critical point dotted and f′(c) = 0 or undefined under each · arrows: none · still · 2D.
- `fig-critical-cubic`, `fig-critical-sixth`, `fig-critical-rational` · Figures 4.16, 4.17, 4.18 · `critical-point`, `local-extremum` · faithful still copies drawn live of Example 4.12's three functions, critical points dotted and named, the horizontal tangents dashed; not folded, since parts a, b and c each read their own figure · standardisation only · still · 2D.
- `sim-closed-interval` · Figure 4.19 · `location-of-absolute-extrema`, `locating-absolute-extrema` · value add: variation: the reader moves either end of [a, b] and the candidates of the strategy (the endpoints, and 3/2 when it lies inside) are dotted, the largest and smallest named, so the absolute maximum is seen to jump from the critical point to an endpoint when 3/2 leaves the interval; the book's [1, 3] is the default and the book's graph · arrows: none · still · sliders a and b (ink, the other kept 0.1 away, dashed circles at 3/2) · headline "Over [1.00, 3.00], the absolute maximum 0.25 is at x = 1.50 and the absolute minimum −2.00 at x = 3.00." · readout the candidates' values, step 3's table · graph alone · 2D. Checkpoint 4.13's x² − 4x + 3 is not drawn.
- `fig-endpoint-maximum` · Figure 4.20 · `locating-absolute-extrema` · faithful still copy of x² − 3x^{2/3} on [0, 2] with its maximum at the endpoint and minimum at 1 · still · 2D.

Labels: one formula per graph; extrema named by hover. Photographs: none. Exercise figures: the book's graphs of 100–103 and the gold-rush bar graph of 142–143 stay in their cards.

## Exercises

- Checkpoints 4.12, 4.13, kind `checkpoint`, inline after Examples 4.12, 4.13.
- Section exercises 90–147. Keyed odd ones kept (29). Kept with AI-marked approaches (config 12): the explanations 90 (prove h = −b/(2a)), 92, 94, 96 and 98, and the keyed 91, 93, 105 and 107, whose key reads only "Answers may vary" (as in 2.5). Left out, computational: 100, 102 (read from a graph), 104, 106 (sketches), 108–146 even. The cell-phone and ball problems 140 and 141 are standalone: they carry no group stem.
- Review exercises set here, `source_section` 4.10 (chapter pass): 526 (true or false: f′(c) = 0 gives an extremum, unkeyed, AI approach: false, x³ at 0) and 533 (keyed); 534 left out.

## Extra simulations (rule 15)

`sim-closed-interval` above is the required figure 4.19 made live, not an extra. Judged and dropped: a Fermat's-theorem Sim with one-sided difference quotients at c (the proof's two one-sided limits are two lines of algebra; the figure would repeat 3.1's secant Sims). None built.

## Wanted at chapter level

- forms none: the section's concepts carry no form (Fermat's one-sided limits are proof steps).
- footnote `c-critical-point` (correction) in section.json.
- Review 526, 533 land in the chapter pass.
