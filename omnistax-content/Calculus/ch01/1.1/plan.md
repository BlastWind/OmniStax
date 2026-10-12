# Plan: 1.1 Review of Functions (m53477)

Source: `source.md`, converted with `tools/convert.py 1.1`. Status: plan, stopped for Chen's review before the page is written (root rule 5, config 2). The first built section of the book and its template for graphs, definitions and checkpoints (`RULES.md`, Template sections).

Seven objectives, an opening paragraph, four definition notes and one rule note, Figures 1.2 to 1.14, Tables 1.1 to 1.5, Examples 1.1 to 1.11, eight checkpoints, two Key Equations, six Key Concepts, 58 section exercises (29 keyed), 17 glossary terms, one media note. One page (root rule 11).

## Sub-concepts (page headers)

The book's own headers apply and are kept (root rule 3); its `###` headers stay `<h3>`.

0. `intro` (no header): the opening paragraph, the section's own introduction (root rule 21.3).
1. `functions` **Functions**: relation and function, the Definition note, the squaring function, independent and dependent variables and y = f(x), Figures 1.2 to 1.5, the natural domain, set-builder and interval notation, piecewise-defined functions, Example 1.1 (Evaluating Functions) and Example 1.2 (Finding Domain and Range), each with its checkpoint. Introduces `function`, `domain`, `range`, `independent-variable`, `dependent-variable`, `graph-of-a-function`, `natural-domain`, `interval-notation`, `piecewise-defined-function`.
2. `representing-functions` **Representing Functions**: the three tools, then `<h3>` Tables (Table 1.1), Graphs (Figures 1.6, 1.7), Algebraic Formulas (zeros, the y-intercept, the Rule note Vertical Line Test with Figure 1.8, Examples 1.3 to 1.5 with Figures 1.9, 1.10, the unnumbered s(t) graph, Tables 1.2 and 1.3, one checkpoint), increasing and decreasing with their Definition note and Figure 1.11. Introduces `table-of-values`, `zeros-of-a-function`, `y-intercept`, `vertical-line-test`, `increasing-function`, `decreasing-function`.
3. `combining-functions` **Combining Functions**: profit P = R − C and the two composites of x² and 3x + 1; `<h3>` Combining Functions with Mathematical Operators (the four operations, Example 1.6 and checkpoint) and Function Composition (C(T(t)), the Definition note, Figure 1.12, Examples 1.7 to 1.9 with Tables 1.4 and 1.5, two checkpoints). Introduces `combinations-of-functions`, `composite-function`.
4. `symmetry` **Symmetry of Functions**: Figure 1.13, f(−x) = f(x) and f(−x) = −f(x), the Definition note, Example 1.10 and checkpoint, the absolute value function with Figure 1.14, Example 1.11 and checkpoint. Introduces `symmetry-about-the-y-axis`, `symmetry-about-the-origin`, `even-function`, `odd-function`, `absolute-value-function`.

Examples keep the book's ids and numbers (Example 1.1 `fs-id1170572455414` … 1.11 `fs-id1170572551051`), each whole (config 7). Objectives and glossary go to the tables, Key Concepts to `summary_html`, the two Key Equations to the forms (`eq-composition`, `eq-absolute-value`) in "Theorems and formulas" with the forms of the rule and definitions. The media note (graphs of functions applet) is dropped and named in `notes`.

## Concept nodes (merged in book.json)

All 22 introduced here, kinds as `RULES.md` sets them: definitions `function` (type function, symbol f), `domain` (D), `range` (R), `independent-variable` (x), `dependent-variable` (y), `graph-of-a-function` (type function), `interval-notation`, `natural-domain`, `piecewise-defined-function` (function), `table-of-values`, `zeros-of-a-function`, `y-intercept`, `increasing-function`, `decreasing-function`, `combinations-of-functions` (function), `composite-function` (function), `symmetry-about-the-y-axis`, `symmetry-about-the-origin`, `even-function`, `odd-function`, `absolute-value-function` (all function where typed); result `vertical-line-test`. No skill: the section prints no strategy. Reinforced later: `piecewise-defined-function` gets its own header in 1.2, `domain` and `range` in 1.4's inverse.

Coverage: each concept `introduces` at its Definition note or its first term (`{term:}` / `{index:}` marker); `uses` where examples lean on it (`domain`, `range` in Examples 1.2, 1.6, 1.7, 1.8, 1.11; `composite-function` in 1.9; `zeros-of-a-function`, `y-intercept` in 1.3, 1.4).

## Colour, referents and function tokens

`function` is the only category (`ch01/COLOR.md`): f, g, s, and the spans naming a function, its graph, a composite, an even or odd function, the absolute value function. x, y, D, t, the zeros, intercepts and intervals are ink.

Referents: `map-f` and `map-g`, the two maps of Figure 1.12 (the book draws them blue and orange), in `sim-composite-map` and the paragraph under the Definition ("First, the function f maps… the output g(f(x))"), its f and g marked `data-ref`. Everywhere else one curve per graph, in its category; Example 1.6's f and g share no figure and stay category.

Function tokens (the span marking another agent is adding to `RULES.md`): every function the prose defines by a formula. In 1.1: the squaring function f(x) = x² and √x; f(x) = 3 − x on {1, 2, 3}; the piecewise f(x) = 3x + 1 / x²; A(r) = πr², s(t) = −16t² + v₀t, A(t) = Pe^{rt}; P(x) = R(x) − C(x); f(x) = x², g(x) = 3x + 1; f(x) = x² − 4; f(x) = 3x, −x³; x⁴ − 2x² − 3, x³ − 4x, x², x³; the absolute value function; and the function of every example and checkpoint (Examples 1.1 to 1.11, the eight checkpoints). Exercise prompts are left for the token's own rule.

## Figures

- `fig-function-machine` · Figure 1.2 · `function` · value add: standardisation only, so a faithful copy redrawn in the house style (input x, the box, output f(x), symbolic arrows) · arrows: symbolic · still, nothing varies · no controls · no headline · no graph · 2D.
- `sim-function-views` · Figure 1.3 + 1.4 + 1.5 · `function`, `domain`, `range`, `graph-of-a-function` · value add: variation and standardisation: the book draws one finite function three times (an arrow map, its graph, the rule 3 − x), and here the map and the graph are one function side by side; dragging a point's output up or down moves its arrow in the map and rewrites the range, so "two inputs can be sent to the same output" and "range = {1, 2}" are seen happening · arrows: symbolic (the map's) · still, it answers the drag · choice `function` (Figure 1.3's map on {1, 2, 3, 4}, Figure 1.4's points, Figure 1.5's 3 − x), one `F.drag` per input along the vertical through it, snapping to integers · headline: "f(1) = 2, f(2) = 1, f(3) = 2: domain {1, 2, 3}, range {1, 2}" live · graph beside the map (the map is a vertical stack of two bubbles) · 2D. Labels: the points (x, f(x)) labelled as the book does (three or four); arrows by legend.
- `sim-temperature` · Figure 1.6 + 1.7 · `table-of-values`, `graph-of-a-function` · value add: variation and a morph: the 24 points of Table 1.1, a choice morphing the dots into the connected curve (the book's two figures), and a draggable hour on the curve reading the temperature, with its interval (decreasing on (0, 4), increasing on (4, 14), decreasing on (14, 23)) named in the readout, which the later prose cites · arrows: none · still, the choice is a before and after · choice `points` / `connected`, `F.drag` along the data (x hours, untyped) · headline: "4 hours after midnight: 52 °F" · graph alone · 2D. Table 1.1 stays in the text beside it as `div.book-table`.
- `sim-vertical-line` · Figure 1.8 · `vertical-line-test` · value add: variation: the reader sweeps a vertical line x = c across (a) a function's graph and (b) a relation, and the crossings are counted and dotted; in (b) the count jumps to 3 · arrows: none · still · choice `(a) y = f(x)` / `(b) y ≠ f(x)`, `F.drag` of c on the x-axis level · headline: "x = 1.2 meets the graph once" · graph alone · 2D. The book prints no formula: (a) a cubic close to the sketch, (b) a sideways curve x = y³ − 3y; the relation drawn in ink (`ch01/COLOR.md`).
- `fig-line-intercepts` · Figure 1.9 (Example 1.3) · `zeros-of-a-function`, `y-intercept` · drawn live faithful copy (config 18): f(x) = −4x + 2 by `F.plot` with (1/2, 0) and (0, 2) marked and hover-named · value add: standardisation only · arrows: none · still · no controls · no headline · graph alone · 2D.
- `fig-root-graph` · Figure 1.10 (Example 1.4) · `y-intercept` · drawn live faithful copy: √(x + 3) + 1 from its closed end (−3, 1), the table's points (−2, 2), (1, 3) and the intercept (0, 1 + √3) · standardisation only · arrows: none · still · graph alone · 2D.
- `fig-falling-ball` · unnumbered (Example 1.5, `CNX_Calc_Figure_01_01_009`) · `domain` · drawn live faithful copy: s(t) = −16t² + 100 on its domain [0, 2.5], closed ends, Table 1.3's six points · standardisation only · arrows: none · still · graph alone · 2D. (The moving ball is a Sim candidate below.)
- `sim-increasing` · Figure 1.11 · `increasing-function`, `decreasing-function` · value add: variation: two points x₁ < x₂ dragged along the graph, and the readout writes the definition's inequality with their values, so "for all x₁, x₂" is tried instead of read · arrows: none · still · choice `(a) f(x) = 3x` / `(b) f(x) = −x³`; two `F.drag` along the graph, x₂ kept right of x₁ · readout: "x₁ = −1 < x₂ = 0.5, f(x₁) = 1 > f(x₂) = −0.125" in the type colours; no headline (the readout says it) · graph alone · 2D.
- `sim-composite-map` · Figure 1.12 · `composite-function` · value add: flow by morph: the book's map with each input's two-step path; choosing an input lights its arrow under f, then under g, as the definition's "First… Second…" reads, and draws the g ∘ f arrow · arrows: symbolic · still, a choice morph with no clock · choice `x` (1, 2, 3) · headline: "(g ∘ f)(1) = g(f(1)) = g(0) = 4" · no graph · 2D. Referents `map-f`, `map-g`.
- `sim-symmetry` · Figure 1.13 + 1.14 · `symmetry-about-the-y-axis`, `symmetry-about-the-origin`, `even-function`, `odd-function`, `absolute-value-function` · value add: variation: a point (x, f(x)) dragged along the curve with its partner (−x, f(−x)) drawn and joined, so the reader sees the partner fall on (−x, y) for an even function and on (−x, −y) for an odd one; the choice morphs between the book's three curves · arrows: none · still · choice `x⁴ − 2x² − 3` / `x³ − 4x` / `|x|`; `F.drag` along the graph · readout: "f(−1.5) = −2.44 = f(1.5)" in the type colours · graph alone · 2D. The fold is a call for Chen: Figure 1.14 sits after Example 1.10 in the book; folded, its citation links up to this figure.

Exercise figures: the four keyed vertical-line-test graphs (29, 31, 33, 35) and the three keyed solution sketches (23, 25, 27) stay the book's images in their cards through the exercise's `figure` field (config 18: faithful still copies an exercise reads from); 57's table and 49's table stay tables in their prompts. Photographs: none in this section.

## Exercises

- Checkpoints, eight, kind `checkpoint`, inline Try Its after their examples (Examples 1.1, 1.2, 1.4, 1.6, 1.7, 1.9, 1.10, 1.11), hint and answer behind reveals, no attainment (config 6).
- Section exercises 1–58, kind `exercise`, each with its group's stem (config 10), "[T]" kept: the 29 odd ones are keyed and kept. The 29 even ones are all computational (relations from tables, evaluation, domain and zeros, sketches from tables, vertical-line tests, combinations, compositions, the [T] applications) and are left out, named in `exercise_notes` (config 12). None is a proof or an explanation.
- Review exercise held here: 311 (f ∘ g = g ∘ f, keyed False), kind `review-exercise`, `source_section` 1.5, its stem ("True or False? Justify your answer with a proof or a counterexample.") carried. 316 (h ∘ f, unkeyed computational) is left out and named. The 1.5 page's notes say 311 is held here.
- Every card tagged with the concepts it tests (`exercise_concepts`); Bloom per card.

## Extra simulations (rule 15)

- Falling ball: a ball drops beside the graph of s(t) = −16t² + 100 while a point runs down the curve, and stops at t = 2.5 where the domain ends (moving: it has a clock).
- Domain finder for Example 1.2: drag x along the axis for √(3x + 2) − 1 or 3/(x − 2); the domain and range shade on the axes and the point vanishes where f is undefined, the hole or asymptote drawn honestly.
- Composition as a pipeline (Example 1.9): an original price slides through the 20% sale and the 15% coupon on two number lines, ending at 0.68x.

## Wanted at chapter level

Anchors, once `text.html` exists (span ids as planned; the builder confirms with `ost ids calculus 1.1`):

- variables `1.1/f`, `1.1/x`, `1.1/y`, `1.1/D` → `1.1-functions`; `1.1/g` → `1.1-combining-functions`; `1.1/s`, `1.1/t` → `1.1-fs-id1170572175021` (Example 1.5).
- forms `eq-open-interval`, `eq-closed-interval` → `1.1-functions`; `eq-y-intercept`, `eq-increasing`, `eq-strictly-increasing`, `eq-decreasing`, `eq-strictly-decreasing` → `1.1-representing-functions`; `eq-sum-of-functions` … `eq-quotient-of-functions`, `eq-composition` → `1.1-combining-functions`; `eq-even-function`, `eq-odd-function`, `eq-absolute-value` → `1.1-symmetry`.
- No meaning to add: the variables rows of 1.1 are in `chapter.json` already (f, g, x, y, D, s, t), each the first meaning of its symbol in the book.
