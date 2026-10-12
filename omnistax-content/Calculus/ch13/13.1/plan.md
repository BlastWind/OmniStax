# Plan: 13.1 Vector-Valued Functions and Space Curves (m53913)

Source: `source.md`, converted with `tools/convert.py 13`. Status: plan; config 2 waives the review for this run (Chen, 2026-10-12), decisions reported afterwards. Template: `ch01/1.1` for conventions.

Four objectives, the opening paragraph, three definition notes and one theorem note (Equations 13.1–13.4), Examples 13.1–13.3, Checkpoints 13.1–13.3, Tables 13.1–13.3, Figures 13.2–13.4, two Key Equations, four Key Concepts, 40 section exercises (20 keyed). One page.

## Sub-concepts (page headers)

The book's three headers apply and are kept.

0. `intro` (no header): the opening paragraph, the section's own introduction.
1. `definition` **Definition of a Vector-Valued Function**: the definition note (Equations 13.1, 13.2), the parameter t, Example 13.1, Checkpoint 13.1, the domain and range paragraph. Introduces `vector-valued-function`, `component-functions`.
2. `graphing` **Graphing Vector-Valued Functions**: standard position, plane curve and space curve, vector parameterization; Example 13.2 with Tables 13.1–13.3 and Figures 13.2–13.4; reparameterization; the helix, elliptical in cross-section; Checkpoint 13.2; the link to parameterized curves. Introduces `space-curve`, `vector-parameterization`, `helix`, `reparameterization`; reinforces `parametric-curve` (its glossary word "plane curve") and `standard-position-vector`.
3. `limits` **Limits and Continuity of a Vector-Valued Function**: the limit definition note, the theorem note `fs-id1169737946849` (Equations 13.3, 13.4), Example 13.3, Checkpoint 13.3, the continuity definition. Introduces `limit-of-a-vector-valued-function`, `limit-of-a-vector-valued-function-by-components`, `continuity-of-a-vector-valued-function`.

Examples keep the book's ids and numbers (13.1 `fs-id1169737841797`, 13.2 `fs-id1169738008664`, 13.3 `fs-id1169737282882`). A reference to a numbered equation reads "Equation 13.N", linked.

## Colour, referents and function tokens

Categories: `curve` for r and its traced curve (the position arrow included); `vector` for i, j, k; `function` for f, g, h; `limit` for L. No referents. Function tokens: none (a vector-valued function is not a function the Grapher reads).

## Figures

- `sim-ellipse` · Figure 13.2 + 13.3 · `vector-valued-function`, `reparameterization` · flow by animation and variation: the position vector r(t) in standard position sweeps the ellipse, its tip tracing the curve; the choice swaps part a's r(t) = 4 cos t i + 3 sin t j, 0 ≤ t ≤ 2π, for part b's 4 cos 2t i + 3 sin 2t j, 0 ≤ t ≤ π, which traces the same ellipse in half the time: the reparameterization the text names, seen. The Tables' vectors (t = 0, π/4, …) are drawn faint in standard position as the book draws them · arrows: kinematic (the moving point and its orientation marks) · moving: t runs over the part's interval, 6 s for 2π (3 s for π), hold 1.2 s · choice part (a, b) · headline "t = 0.79: r(t) = ⟨2.83, 2.12⟩" · graph alone, one scale · 2D. Folded: the book draws the one ellipse twice; one live drawing with the two clocks says "identical" better. Readout writes the part's r(t) with live numbers.
- `sim-helix` · Figure 13.4 · `space-curve`, `helix` · depth (a space curve, root rule 28.3, mathematical 3D) and flow by animation: the point r(t) = 4 cos t i + 4 sin t j + t k climbs the helix for 0 ≤ t ≤ 4π, its position vector from the origin, its shadow on the xy-plane tracing the cross-section the text names; the choice swaps the circular helix for the elliptical one the text names, 4 cos t i + 3 sin t j + t k, whose projection is an ellipse · arrows: kinematic (the point and its orientation) · moving: 8 s for 4π · choice cross-section (circle, ellipse) · `S.headline` "t = 3.14: r(t) = ⟨−4.00, 0.00, 3.14⟩" · 3D, free orbit (house style, no ground, a space curve read from any side), no buttons (no viewpoint is the lesson; nothing fine to zoom); one WebGL scene. Readout r(t) with the numbers.
- `sim-vector-limit` · Sim · `limit-of-a-vector-valued-function`, `limit-of-a-vector-valued-function-by-components` · variation: Example 13.3a's r(t) = (t² − 3t + 4) i + (4t + 3) j near t = 3; the slider walks t toward 3 and the gap r(t) − L, drawn from L to r(t), shrinks to nothing while each component approaches its own limit, so the definition (‖r(t) − L‖ → 0) and the theorem (limits component by component) are one picture · arrows: symbolic (the gap vector) · still: the reader moves t · slider t (ink, 1.5 to 4.5, step 0.01, default 4, special at 3 where the gap closes) · headline "t = 4.00: ‖r(t) − L‖ = 4.47" · graph alone · 2D. Readout: lim r(t) = [lim (t² − 3t + 4)] i + [lim (4t + 3)] j = 4 i + 15 j, with the current r(t) and ‖r(t) − L‖. A Sim (rule 14: the section's idea has no book figure).

Checkpoint and exercise images stay in their cards: Checkpoint 13.2's answer (`CNX_Calc_Figure_13_01_004.jpg`), exercises 3, 5, 19, 25, 27, 29, 33, 35, 37 (their solution images). Photographs: none.

## Exercises

- Checkpoints 13.1–13.3 inline after Examples 13.1–13.3; open answers with the book's solutions and hints.
- Section exercises 1–40: the 20 keyed odd ones kept. Exercise 36 ("Eliminate the parameter t to show that z = 5 − r/10", unkeyed) kept with an AI-marked approach. The other 19 even ones are computational, sketches or "use technology" (38, 40) and are left out, named in `exercise_notes`.
- Review exercises held here (`source_section` 13.4): 202 (true or false, unkeyed, AI-marked approach), 207 (domain), 209 ([T] sketch, keyed image), 211 (cone and plane). 206, 208 and 210 (unkeyed, computational) left out.
- Keys checked; corrections below.

## Corrections (book-corrections-as-notes)

- `c-unit-circle`: Example 13.2c says that eliminating the k component gives r(t) = cos t i + sin t j, "a unit circle centered at the origin"; from 4 cos t i + 4 sin t j + t k it is 4 cos t i + 4 sin t j, the circle of radius 4.
- `c-r207`: review 207's key "t ≠ nπ/2"; sec t is undefined only at the odd multiples of π/2, so t < 4, t ≠ (2n + 1)π/2 (under its card).
- `c-r211`: review 211's key r(t) = ⟨t, 2 − t²/8, −2 − t²/8⟩ has z < 0: it is where the plane meets the lower nappe z = −√(x² + y²); the cone z = √(x² + y²) and the plane z = y − 4 do not meet (under its card).

## Extra simulations (rule 15)

Built: `sim-vector-limit` (above). Judged and not built: a domain figure for Example 13.1b (tan and sec blowing up at odd multiples of π/2) adds nothing the example's table of values does not; the roller-coaster curve of exercise 37 belongs to the exercise.

## Wanted at chapter level

Applied in the chapter pass (tmp/ch13/anchors13.py); the definition notes are `fs-id1169737987352` (vector-valued function), `fs-id1169737394789` (limit) and `fs-id1169738219590` (continuity).


- forms `eq-vvf-unit-vector-form` → `13.1-fs-id1169737813537`, `eq-vvf-component-form` → `13.1-fs-id1169737819432`, `eq-vvf-limit` → the limit definition note, `eq-vvf-limit-components-plane` → `13.1-fs-id1169737903941`, `eq-vvf-limit-components-space` → `13.1-fs-id1169737911304`, `eq-vvf-continuity` → the continuity definition note.
- variables `13.1/r_vec`, `/f`, `/g`, `/h`, `/i_vec`, `/j_vec`, `/k_vec` → the vector-valued function definition note; `/L_vec` → the limit definition note.
