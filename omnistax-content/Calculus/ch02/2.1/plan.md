# Plan: 2.1 A Preview of Calculus (m53485)

Source: `source.md`, converted with `tools/convert.py 2`. Status: plan; config 2 waives the review for this run, decisions reported afterwards. Template: `ch01/1.1`.

Seven objectives, an opening paragraph, three definition notes, Figures 2.2 to 2.11, Examples 2.1 to 2.3, three checkpoints, two Key Equations, three Key Concepts, 29 section exercises (15 keyed), 8 glossary terms, one media note. One page (root rule 11).

## Sub-concepts (page headers)

The book's own headers apply and are kept (root rule 3).

0. `intro` (no header): the opening paragraph naming the tangent problem and the area problem (root rule 21.3).
1. `tangent-problem` **The Tangent Problem and Differential Calculus**: the three lines and their rates of change (Figure 2.2), k(x) = x² (Figure 2.3), the secant and its Definition note, Figures 2.4 to 2.6, the tangent and f′(a), differential calculus, the media note (dropped), Example 2.1 with Figure 2.7 and its checkpoint, average velocity (Definition note), the limit, instantaneous velocity (Definition note), Example 2.2 and its checkpoint. Introduces `rate-of-change`, `secant`, `tangent-line`, `tangent-problem`, `differential-calculus`, `average-velocity`, `limit`, `instantaneous-velocity`.
2. `area-problem` **The Area Problem and Integral Calculus**: Figures 2.8 and 2.9, integral calculus, Example 2.3 with Figure 2.10 and its checkpoint (the upper-rectangles image). Introduces `area-problem`, `integral-calculus`.
3. `other-aspects` **Other Aspects of Calculus**: multivariable calculus and Figure 2.11. Introduces `multivariable-calculus`.

Examples keep the book's ids and numbers (2.1 `fs-id1170573387465`, 2.2 `fs-id1170573397285`, 2.3 `fs-id1170573406196`), each whole (config 7). Objectives and glossary go to the tables, Key Concepts to `summary_html`, the two Key Equations to the forms (`eq-secant-slope`, `eq-average-velocity`) in "Theorems and formulas". The media note (Math Insight secant applet, Java) is dropped and named in `notes`; it seeds `sim-secant-to-tangent`.

## Concept nodes (merged in book.json)

All 11 introduced here: definitions `secant` (type line, form `eq-secant-slope`), `tangent-line` (derivative), `differential-calculus`, `average-velocity` (derivative, symbol v_ave, form `eq-average-velocity`), `limit` (limit, symbol L), `instantaneous-velocity` (derivative), `integral-calculus`, `multivariable-calculus`; ideas `rate-of-change` (derivative), `tangent-problem` (derivative), `area-problem` (integral). Prerequisites into Chapter 1: `slope`, `graph-of-a-function`, `function`.

Coverage: each concept `introduces` at its Definition note or its `{term:}` / `{index:}` marker (rate of change and the Tangent Problem and Area Problem are index terms, the rest glossary terms); `uses` for `secant` and `tangent-line` in Example 2.1, `average-velocity` and `limit` in Example 2.2, `area-problem` in Example 2.3.

## Colour, referents and function tokens

Per `ch02/COLOR.md`: f, g, h, k and s wear `function`; the secant line and the word secant `line`; the tangent, m_sec (`\kmsec`, concept `slope`), v_ave (`\kvave`), the rate of change and the velocities `derivative`; "limit" `limit`; the area under the curve and the rectangles `integral`. a, x, t are ink. No referents: Figure 2.2 is three panels.

Function tokens: f(x) = −2x − 3, g(x) = x/2 + 1, h(x) = 2, k(x) = x²; f(x) = x² (Example 2.1 and its checkpoint), s(t) = −16t² + 64 (Example 2.2, written in x for the grapher, `-16x^2+64`), s(t) = t³, f(x) = x² + 1 (Example 2.3 and its checkpoint). The generic f(x) of the definitions is not marked (RULES, Function tokens).

## Figures

- `fig-three-lines` · Figure 2.2 · `rate-of-change`, `slope` · value add: standardisation only, a faithful copy drawn live: the three lines on three panels as the book has them, slope and intercept hover-named · arrows: none · still · no controls · no headline · graph alone · 2D.
- `fig-parabola` · Figure 2.3 · `rate-of-change` · standardisation only: k(x) = x² drawn live, vertex at the origin · arrows: none · still · no controls · graph alone · 2D.
- `sim-secant-to-tangent` · Figure 2.4 + 2.5 + 2.6 · `secant`, `tangent-line`, `tangent-problem` · value add: variation and a morph: the reader drags the point (x, f(x)) along the curve toward (a, f(a)) and the secant (`line`) swings toward the tangent; at x = a, a dashed special on the x slider, the secant morphs into the tangent (`derivative`), the book's three figures being three states of the drag · arrows: none · still, it answers the drag (approach is not a clock) · `F.drag` of x along the graph from either side of a, with soft detents at the book's two drawn positions; no choice · headline: "x − a = 0.50: m_sec = …" live, "x = a: the tangent, slope f′(a) = …" at the special · readout: m_sec = (f(x) − f(a))/(x − a) with the live numbers · graph alone · 2D. The book prints no formula: a stand-in cubic through the origin close to the sketch (rising, the secant below the curve between a and x), a marked on the axis as in the book. x² is left out so the figure does not answer the checkpoint's (5/4, 25/16).
- `fig-example-secants` · Figure 2.7 (Example 2.1) · `secant` · standardisation only: f(x) = x² with the secants through (1, 1) and (a) (2, 4), (b) (3/2, 9/4), two panels, slopes 3 and 2.5 hover-named · still · no controls · graph alone · 2D.
- `sim-area-rectangles` · Figure 2.8 + 2.9 · `area-problem` · value add: variation and a morph: the hill-shaped region over [a, b] (Figure 2.8) and its midpoint rectangles (Figure 2.9); the slider n of rectangles (1 to 60, default 8, the book's count) thins them while the sum readout settles; at the dashed special n = ∞ (slider end) the rectangles morph into the shaded region, the book's first figure · arrows: none · still · slider n (untyped), `F.riemann` rule `mid` and `F.shade` · headline: "n = 8: the rectangles sum to …" live · readout: the sum and the area it approaches, in `integral` · graph alone · 2D. Stand-in f: a hill in quadrant one close to the sketch (a downward parabola lifted), a and b marked.
- `fig-three-rectangles` · Figure 2.10 (Example 2.3) · `area-problem` · standardisation only: f(x) = x² + 1 on [0, 3], the three left rectangles of areas 1, 2 and 5 hover-named, total 8 in the caption's numbers · still · graph alone · 2D. The checkpoint's upper-rectangles image (`CNX_Calc_Figure_02_01_009`, unnumbered) stays the book's image inside the Try It, since the checkpoint reads it; drawing it live as a choice of Figure 2.10 would show its answer, 17.
- `fig-volume-surface` · Figure 2.11 · `multivariable-calculus` · standardisation only: the surface z = f(x, y) over a rectangle, drawn as a locked view (`view()`/`face()`, root rule 28.2) from the book's viewpoint, no orbit (config 23: no 3D scene) · still · no controls · no graph · 2D in cost.

Photographs: none.

## Exercises

- Checkpoints, three, kind `checkpoint`, inline Try Its after Examples 2.1, 2.2 and 2.3, hint and answer behind reveals (config 6).
- Section exercises 1–29, kind `exercise`, each with its group's stem ("For the following exercises, points P(1, 2) and Q(x, y) are on the graph of…"), "[T]" kept: the 15 odd ones are keyed and kept, the tables of 1, 7, 13 in their prompts. The 14 even ones (the tables 4 and 10, the tangent-slope guesses 2, 8, 14, the tangent lines 6 and 12, the average velocities 16, 18, 20, 22, the sketches 24, 26, 28) are all computational and left out, named in `exercise_notes` (config 12). 25 and 27 carry the over and under estimates of their key.
- Review exercise held here, added once 2.5 is built: 231 (average velocity of x(t) = t² − 2t + 4 over [0, 2], keyed 0 m/sec), kind `review-exercise`, `source_section` 2.5; 232 (unkeyed, estimate the instantaneous velocity) left out and named. 2.5's notes say 231 is held here.
- Every card tagged with the concepts it tests (`exercise_concepts`): `secant` and `tangent-line` for 1–15, `average-velocity` and `instantaneous-velocity` for 16–23 and 231, `area-problem` for 24–29. Bloom per card.

## Extra simulations (rule 15), picked

- `sim-average-velocity` · Sim · `average-velocity`, `instantaneous-velocity`, `limit` · value add: variation: Example 2.2's rock, s(t) = −16t² + 64 on 0 ≤ t ≤ 2, its graph with the interval [0.5, t] or [t, 0.5] bracketed on the t-axis and the secant (`line`) over it; dragging t toward 0.5 from either side shows the two average velocities closing on −16 from −15.84 and −16.16, the reading the example only guesses · arrows: none · still (t is dragged, not run: the interval shrinks, no time passes) · `F.drag` of t on the graph, detents at 0.49 and 0.51 (the book's intervals) and a dashed special at 0.5 that names the instantaneous velocity · headline: "[0.49, 0.5]: v_ave = −15.84 ft/sec" · readout: v_ave = (s(t) − s(0.5))/(t − 0.5) live · graph beside a rock on a vertical height scale (the fall is vertical), the rock at s(t) · 2D. Picked: the text says average velocity "is essentially the same as" a secant slope; this draws that sameness, which neither the example's arithmetic nor Figures 2.4–2.6 (no time axis) show. The checkpoint's s(t) = t³ is not offered.

Considered and dropped: a three-lines slope slider (Figure 2.2 is already plain and the slope was Chapter 1's), a draggable surface for Figure 2.11 (config 23).

## Wanted at chapter level

Ids confirmed with `ost ids calculus 2.1` after the build.

- variables `2.1/f`, `2.1/a`, `2.1/m_sec` → `2.1-tangent-problem` (the secant Definition note); `2.1/s`, `2.1/t`, `2.1/v_ave` → the average velocity Definition note in `2.1-tangent-problem`.
- forms `eq-secant-slope` → the secant Definition note; `eq-average-velocity` → the average velocity Definition note.
- No meaning to add: the rows are in `chapter.json` (f reuses 1.1's meaning; s and t redefine, worded to stand alone).
- Review 231 waits for 2.5: once 2.5 is built, `ost add calculus exercises --section 2.1` with `source_id` `fs-id1170572218614`, `source_number` 231, `source_section` 2.5, and tag it `average-velocity`.
