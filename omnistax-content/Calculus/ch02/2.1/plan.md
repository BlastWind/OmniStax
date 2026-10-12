# Plan: 2.1 A Preview of Calculus (m53485)

Source: `source.md`, converted with `tools/convert.py 2`. Status: built 2026-10-12 straight through (config 2 waives the review for this run; decisions reported afterwards). Template: `ch01/1.1`. Numbers confirmed on openstax.org (calculus-volume-1, 2.1): Figures 2.2–2.11, Examples 2.1–2.3, Checkpoints 2.1–2.3, section exercises 1–29.

Seven objectives, an opening paragraph, three definition notes, Figures 2.2 to 2.11, Examples 2.1 to 2.3, three checkpoints, two Key Equations, three Key Concepts, 29 section exercises (15 keyed), 8 glossary terms, one media note. One page (root rule 11).

## Sub-concepts (page headers)

The book's own headers apply and are kept (root rule 3).

0. `intro` (no header): the opening paragraph naming the tangent problem and the area problem (root rule 21.3).
1. `tangent-problem` **The Tangent Problem and Differential Calculus**: the three lines and their rates of change (Figure 2.2), k(x) = x² (Figure 2.3), the secant and its Definition note (`secant-definition`), Figures 2.4 to 2.6, the tangent and f′(a), differential calculus, the media note (dropped), Example 2.1 with Figure 2.7 and its checkpoint, average velocity (Definition note `average-velocity-definition`), taking a limit (the paragraph `taking-a-limit`), instantaneous velocity (Definition note `instantaneous-velocity-definition`), Example 2.2 and its checkpoint.
2. `area-problem` **The Area Problem and Integral Calculus**: Figures 2.8 and 2.9, integral calculus, Example 2.3 with Figure 2.10 and its checkpoint (the upper-rectangles image).
3. `other-aspects` **Other Aspects of Calculus**: multivariable calculus and Figure 2.11.

Examples keep the book's ids and numbers (2.1 `fs-id1170573387465`, 2.2 `fs-id1170573397285`, 2.3 `fs-id1170573406196`), each whole (config 7). Objectives and glossary go to the tables, Key Concepts to `summary_html`, the two Key Equations to the forms (`eq-secant-slope`, `eq-average-velocity`) in "Theorems and formulas". The media note (Math Insight secant applet, Java) is dropped and named in `notes`; it seeds `sim-secant-to-tangent`.

## Concept nodes (merged in book.json by the prep)

All 11 introduced here: definitions `secant` (type line, form `eq-secant-slope`), `tangent-line` (derivative), `differential-calculus`, `average-velocity` (derivative, symbol v_ave, form `eq-average-velocity`), `limit` (limit, symbol L), `instantaneous-velocity` (derivative), `integral-calculus`, `multivariable-calculus`; ideas `rate-of-change` (derivative), `tangent-problem` (derivative), `area-problem` (integral). Prerequisites into Chapter 1: `slope`, `graph-of-a-function`, `function`.

Coverage, one `introduces` each: `rate-of-change`, `tangent-line`, `tangent-problem`, `differential-calculus` → `tangent-problem`; `secant` → `secant-definition`; `average-velocity` → `average-velocity-definition`; `limit` → `taking-a-limit`; `instantaneous-velocity` → `instantaneous-velocity-definition`; `area-problem`, `integral-calculus` → `area-problem`; `multivariable-calculus` → `other-aspects`. `uses`: `secant`, `tangent-line` in Example 2.1; `average-velocity`, `instantaneous-velocity`, `limit` in Example 2.2; `area-problem` in Example 2.3; `slope` in `tangent-problem`.

## Colour, referents and function tokens

Per `ch02/COLOR.md`: f, g, h, k and s wear `function`; the secant line and the word secant `line`; the tangent, m_sec (`\kmsec`, concept `slope`), v_ave (`\kvave`), the rate of change and the velocities `derivative`; "limit" `limit`; the area under the curve and the rectangles `integral`; marked points `point` (as 1.1 draws them; the book's COLOR.md marks points on every graph). a, x, t are ink. No referents: Figure 2.2 is three panels, one line on each.

Departure to flag: the book's `COLOR.md` names the tangent a `line` ("the slope is the number the line carries"), while `ch02/COLOR.md` and the merged concept `tangent-line` type it `derivative`. The page follows the concept row, since the text's colour comes from it and a figure must match the text: the secant arrives in `line` and turns `derivative` as it becomes the tangent. Chen to rule; a retype is one `ost set` on `tangent-line` and one colour lookup in each of two figures.

k has no symbols row, so k(x) = x² is set in ink until the chapter pass adds one (below). f′(a) is set in ink: the derivative's symbol belongs to 3.1.

Function tokens: f(x) = −2x − 3, g(x) = x/2 + 1, h(x) = 2, k(x) = x²; f(x) = x² (Example 2.1 and its checkpoint), s(t) = −16t² + 64 (Example 2.2, written in x for the grapher, `-16x^2+64`), s(t) = t³, f(x) = x² + 1 (Example 2.3 and its checkpoint). The generic f(x) of the definitions is not marked (RULES, Function tokens).

## Figures

- `fig-three-lines` · Figure 2.2 · `rate-of-change`, `slope` · value add: standardisation only, a faithful copy drawn live: the three lines on three panels as the book has them, each with its rule · arrows: none · still · no controls · no headline · graph alone · 2D.
- `fig-parabola` · Figure 2.3 · `rate-of-change` · standardisation only: k(x) = x² drawn live, vertex at the origin · arrows: none · still · no controls · graph alone · 2D.
- `sim-secant-to-tangent` · Figure 2.4 + 2.5 + 2.6 · `secant`, `tangent-line`, `tangent-problem` · value add: variation and a morph: the reader drags (x, f(x)) along the curve toward (a, f(a)) from either side and the secant (`line`) swings toward the tangent; at x = a, a dashed special on the x slider, the secant morphs into the tangent (`derivative`). The book's three figures are three states of the drag: detents at x = 4 and x = 2.5, the book's two drawn positions · arrows: none · still, it answers the drag (approach is not a clock) · `F.drag` of x (untyped) along the graph, −2.5 to 5.5 · headline: "x = 4: the secant through (1, 1.57) and (4, 2.65) has slope 0.360" live, "x = a: the secant has become the tangent, slope 1" at the special · readout: m_sec = (f(x) − f(a))/(x − a) with the live numbers; f′(1) = 1 at the special · graph alone · 2D. The book prints no formula: the stand-in is f(x) = 2 arctan x with a = 1 (1.4's inverse tangent, through the origin, flat at both ends and concave down past a as the sketch is), so the tangent's slope is exactly 1. x² is left out so the figure does not answer the checkpoint.
- `fig-example-secants` · Figure 2.7 (Example 2.1) · `secant` · standardisation only: f(x) = x² with the secants through (1, 1) and (a) (2, 4), (b) (3/2, 9/4), two panels, slopes 3 and 2.5 written on each · still · no controls · graph alone · 2D.
- `sim-area-rectangles` · Figure 2.8 + 2.9 · `area-problem` · value add: variation: the hill-shaped region over [a, b] (Figure 2.8) under its midpoint rectangles (Figure 2.9); the slider n (untyped, 1 to 50, default 9, the book's count, detent at 9) thins them, and the slivers between the rectangles' tops and the curve shrink while the sum closes on the area · arrows: none · still · `F.riemann` rule `mid` over `F.shade` · headline: "9 rectangles: their areas sum to 8.909; the area under the curve is 8.899" live · readout: the sum beside the area it approaches, in `integral` · graph alone · 2D. Stand-in f(x) = 0.2x(7.6 − x) on [1, 4.6], close to the sketch (through the origin, peak near 3.8, b past the peak). No special: the limit n → ∞ is no position on the slider, and a circle at its end would claim the last sum is the area.
- `fig-three-rectangles` · Figure 2.10 (Example 2.3) · `area-problem` · standardisation only: f(x) = x² + 1 on the book's grid, the three left rectangles on [0, 3] with areas 1, 2 and 5 written in them · still · graph alone · 2D. The checkpoint's upper-rectangles image (`CNX_Calc_Figure_02_01_009`, unnumbered) stays the book's image in the Try It card (`figure`), since the checkpoint reads it; drawing it live would show its answer, 17.
- `fig-volume-surface` · Figure 2.11 · `multivariable-calculus` · standardisation only: the solid under z = f(x, y) over a rectangle, drawn as a locked view (`view()`/`face()`, root rule 28.2) from the book's viewpoint, no orbit (config 23); the top surface z = 2 − 0.2(x² + y²) on [0, 1.6]², highest over the origin, lowest over the far corner, the two side corners alike, as the book's sketch · still · no controls · no graph · 2D in cost.

Photographs: none. Unnumbered image: the checkpoint's upper rectangles, kept in its card.

## Exercises

- Checkpoints, three, kind `checkpoint`, inline Try Its after Examples 2.1, 2.2 and 2.3, hint and answer behind reveals (config 6).
- Section exercises 1–29, kind `exercise`, each with its group's stem, "[T]" kept: the 15 odd ones are keyed and kept, the tables of 1, 7, 13 in their prompts. The 14 even ones (the tables 4 and 10, the tangent-slope guesses 2, 8, 14, the tangent lines 6 and 12, the average velocities 16, 18, 20, 22, the sketches 24, 26, 28) are all computational and left out, named in `exercise_notes` (config 12). 25 and 27 carry the under and over estimates of their key.
- 13's key prints stray semicolons in e.–h. and two slips, f. (−1.0100000, −0.9909901) for (−1.0100000, −0.99009901) and h. (1.0010000, …) for (−1.0010000, …): kept as printed with a correction note under the card (root rule 13).
- Review exercise 231 (average velocity of x(t) = t² − 2t + 4 over [0, 2], keyed 0 m/sec) is held here, kind `review-exercise`, `source_section` 2.5, added by the chapter pass (row below); 232 (unkeyed, estimate the instantaneous velocity) is left out and named in `exercise_notes` now. 2.5's notes say 231 is held here.
- Tags (`exercise_concepts`): the tables 1, 7, 13 `secant`; the guesses 5, 11 `secant`, `tangent-line`; the tangent lines 3, 9, 15 `tangent-line`, `point-slope-equation`; the velocities 17–23 `average-velocity`, `instantaneous-velocity`; the areas 25–29 `area-problem`; checkpoints 1 `secant`, `tangent-line`, 2 `average-velocity`, `instantaneous-velocity`, 3 `area-problem`. Bloom per card.

## Extra simulations (rule 15), picked

- `sim-average-velocity` · Sim · `average-velocity`, `instantaneous-velocity`, `limit` · value add: variation: Example 2.2's rock, s(t) = −16t² + 64 on 0 ≤ t ≤ 2, its graph with the interval [t, 0.5] or [0.5, t] bracketed on the t-axis and the secant (`line`) over it; dragging t toward 0.5 from either side brings the two average velocities in on −16 from −15.84 and −16.16, the reading the example only guesses · arrows: none · still (t is dragged, not run: the interval shrinks, no time passes) · `F.drag` of t on the graph, detents at 0.49 and 0.51 (the book's intervals), a dashed special at 0.5 where the secant becomes the tangent and the readout names the instantaneous velocity · headline: "Over [0.49, 0.50] the rock falls 0.1584 ft: v_ave = −15.84 ft/sec." · readout: v_ave = (s(t) − s(0.5))/(t − 0.5) live · graph beside the rock on a vertical height scale (the fall is vertical), the rock at s(t) and its place at t = 0.5 hollow, on the graph's own height scale · 2D. Picked: the text says average velocity "is essentially the same as" a secant slope; this draws that sameness on a position–time graph, which neither the example's arithmetic nor Figures 2.4–2.6 (no time axis) show. The checkpoint's s(t) = t³ is not offered.

Considered and dropped: a three-lines slope slider (Figure 2.2 is plain and the slope was 1.2's), a draggable surface for Figure 2.11 (config 23).

## Wanted at chapter level

Ids confirmed with `ost ids calculus 2.1` after the build.

- variables anchors: `2.1/f`, `2.1/a`, `2.1/m_sec` → `2.1-secant-definition`; `2.1/s`, `2.1/t`, `2.1/v_ave` → `2.1-average-velocity-definition`.
- forms anchors: `eq-secant-slope` → `2.1-secant-definition`; `eq-average-velocity` → `2.1-average-velocity-definition`.
- new variables rows (after `ost meanings`): `{"sym": "g", "concept": "function", "meaning": "a second function, examined beside f", "section": "2.1", "anchor": "2.1-tangent-problem"}` (1.1's meaning, "combined with f by an operation or composed with it", does not fit; reword 2.2's row to match or mark this one `redefines`); `{"sym": "h", "concept": "function", "meaning": "a third function, examined beside f and g", "section": "2.1", "anchor": "2.1-tangent-problem"}` (2.2's meaning, reused).
- symbol k: a `symbols` row `{"sym": "k", "latex": "k", "macro": "\\kk"}` and `{"sym": "k", "concept": "function", "meaning": "a function, k(x) = x², whose rate of change is not constant", "section": "2.1", "anchor": "2.1-tangent-problem"}`; then `k(x)` → `\kk(x)` in `text.html` (two places, both in `tangent-problem`) and in `fig-parabola`'s label.
- review exercise 231, once 2.5 is built:
  `ost add calculus exercises --section 2.1 '{"id": "r231", "source_id": "fs-id1170572218614", "source_section": "2.5", "source_number": "231", "kind": "review-exercise", "bloom": "Apply", "place": {"at": "end"}, "cite": "average-velocity-definition", "prompt": "<p>A particle moving along a line has a displacement according to the function $x(t)=t^{2}-2t+4,$ where <em>x</em> is measured in meters and <em>t</em> is measured in seconds. Find the average velocity over the time period $t=[0,2].$</p>", "answer": {"type": "number", "generated_by": "source", "value": 0, "unit": "m/sec", "tol": 0.000001, "solution": "$0\\;\\text{m/sec}$"}}'`
  `ost add calculus exercise_concepts --section 2.1 '{"exercise": "r231", "concept": "average-velocity"}'`, and append to 2.1's `exercise_notes`: "Review exercise 231 is set here, beside the definition of average velocity."
- recolour: `npm run colours:default -- calculus` (config 25).

- Chapter pass (2026-10-12): all applied; g and h carry `redefines` (1.4 and 1.3 give them other meanings); `tangent-line` retyped to `line` and both sims draw the tangent in `line`, the slope readouts keep `derivative`. Recolour left to the orchestrator.
