# Plan: 11.1 Parametric Equations (m53834)

Source: `source.md`, converted with `tools/convert.py 11`. Status: plan; config 2 waives the review for this run (Chen, 2026-10-12), built the same day, decisions reported afterwards. Template: `ch01/1.1` for conventions.

Four objectives, an opening paragraph, one definition note, Examples 11.1–11.3, three checkpoints (11.1–11.3), Figures 11.2–11.15, four Key Concepts, 61 section exercises (30 keyed), seven glossary terms, two Student Projects. No Key Equations, no numbered equations. One page (root rule 11).

## Sub-concepts (page headers)

The book's three headers apply and are kept (root rule 3).

0. `intro` (no header): the opening paragraph, the section's own introduction (root rule 21.3); names the parameter.
1. `graphs` **Parametric Equations and Their Graphs**: Earth's orbit (Figures 11.2 + 11.3), the definition note (`fs-id1169295820852`), the two uses of x and y, Example 11.1 (Figures 11.4–11.6, `orientation` at its {term}) and Checkpoint 11.1. Introduces `parametric-equations`, `parameter`, `parametric-curve`, `orientation`.
2. `eliminating` **Eliminating the Parameter**: the parabola of Example 11.1b solved for t, Example 11.2 (Figures 11.7, 11.8), Checkpoint 11.2, the paragraph that names `parameterization-of-a-curve`, Example 11.3 and Checkpoint 11.3. Introduces `eliminating-the-parameter` (at "These steps give an example of eliminating the parameter"), `parameterization-of-a-curve`.
3. `cycloids` **Cycloids and Other Parametric Curves**: the ant on the bicycle wheel and the cycloid's derivation (Figure 11.9), the hypocycloid (Figures 11.10, 11.11), cusps and space-filling curves, the two Student Projects as notes with their question lists (config 15): The Witch of Agnesi (Figure 11.12) and Travels with My Ant (Figures 11.13–11.15). Introduces `cycloid`, `hypocycloid`, `cusp`, `space-filling-curve`, `witch-of-agnesi`, `curtate-cycloid`, `prolate-cycloid`.

Examples keep the book's ids and numbers (11.1 `fs-id1169295362672`, 11.2 `fs-id1169295694719`, 11.3 `fs-id1169295460500`), each whole (config 7). Objectives and glossary go to the tables, Key Concepts to `summary_html`. The module link "Conic Sections" opens 11.5.

## Concept nodes (merged in book.json)

Introduced here: the 13 concepts of 11.1 in `book-rows.json` (parametric-equations, parameter, parametric-curve, orientation, eliminating-the-parameter, parameterization-of-a-curve, cycloid, hypocycloid, cusp, space-filling-curve, witch-of-agnesi, curtate-cycloid, prolate-cycloid). Uses: `function`, `pythagorean-identities` (Example 11.2b), `trigonometric-functions`, `graph-of-a-function`.

## Colour, referents and function tokens

Categories (`ch11/COLOR.md`): `curve` for every traced curve and the words "parametric curve", "plane curve", "cycloid", "hypocycloid", "witch of Agnesi", "curtate cycloid", "prolate cycloid", "space-filling curves" where they name the concept; `point` for the moving point, the cusps and the witch's O, A, B, P; `angle` for t on the wheel and θ of the witch. x, y, t, a, b stay ink; the symbol C wears `curve` through its variables row.

Referents: `ant` (the ant of the cycloid story and the project, the point A that traces the cycloid), drawn by `sim-cycloid`; the text marks every "ant", "he", "his", "him" for it in the cycloid paragraphs and the project.

Function tokens: Example 11.2a's y = x² − 3 and Example 11.3's y = 2x² − 3 and Checkpoint 11.3's y = x² + 2x, the curves given as functions y = f(x).

## Figures

A shared helper draws a parametric curve traced by its clock: the curve faint over its whole range, solid up to the current t, orientation arrowheads along the solid part, the book's marked parameter values dotted and labelled "t = …" (at most five, the book's own), the moving point in `point` with a dashed drop to each axis, axes fixed from the curve's extent. Readout: x(t) and y(t) with the live numbers. Headline: "t = 0.50: the point is at (−0.50, 5.00)". 2D, graph alone.

- `sim-earth-orbit` · Figure 11.2 + 11.3 · `parametric-equations`, `parameter` · value add: flow by animation, Earth's position as a function of the day t, and standardisation (the book's two drawings of one orbit, the second with axes, folded) · arrows: none (the moving Earth is the motion) · moving: Earth runs the year t = 1 to 365, 6 s a year · no sliders · headline: "Day 92 (April 2): Earth is at (−5.00, 0.00)" · graph alone · 2D. The book's schematic ellipse (no scale): a = 5, b = 4 drawing units, F₂ and the Sun at the foci, Earth on the uniform parameterization that puts the book's four dates at the ends of the axes (January 1 at the top, April 2 left, July 1 bottom, October 1 right). Readout: (x(t), y(t)) with the live numbers; no formula, since the book gives none. Labels: the four dates at their points (book's), F₂, the Sun, Earth.
- `sim-trace-line` · Figure 11.4 · `parametric-curve`, `orientation` · flow by animation (the orientation is the direction the point runs) · arrows: kinematic (orientation, drawn as arrowheads on the curve; the moving point is the motion) · moving: t runs −3 to 2 in 5 s · none · "t = −1.00: the point is at (−2.00, 2.00)" · graph alone · 2D. Marks t = −3, −1, 2.
- `sim-trace-parabola` · Figure 11.5 · same · t −2 to 3 · marks t = −2, 0, 3.
- `sim-trace-circle` · Figure 11.6 · same · t 0 to 2π · marks t = 0, π/2, π, 3π/2.
- `sim-trace-half-parabola` · Figure 11.7 · `eliminating-the-parameter` · flow by animation and intuition: the whole parabola y = x² − 3 the eliminated equation describes is drawn dashed beside it, so the domain restriction x ≥ 0 that t ∈ [−2, 6] makes is visible · arrows: kinematic (orientation) · moving: t −2 to 6 · none · headline as above · 2D. Marks t = −2, 0, 2, 4, 6. Readout: x(t), y(t) and y = x² − 3 with the numbers.
- `sim-trace-ellipse` · Figure 11.8 · `eliminating-the-parameter` · as above, readout (x/4)² + (y/3)² = 1 with the numbers · marks t = 0, π/2, π, 3π/2.
- `sim-cycloid` · Figure 11.9 + 11.13 + 11.14 + 11.15 · `cycloid`, `curtate-cycloid`, `prolate-cycloid`, `cusp` · value add: flow by animation (a rolling wheel, which the book draws as a strip of stills) and variation: the book draws one scene four times (the rim, the geometry of the turned angle, the spoke, the flange); the ant's distance b from the centre is the slider, b = a (special, a dashed circle, the cycloid) the rim, b < a a spoke, b > a the flange, the wheel's radius a = 1 fixed · arrows: none (the rolling wheel and the ant are the motion) · moving: the wheel rolls through t = 0 to 4π, two turns, in 6 s · slider b (ink, 0.3 to 1.6, step 0.01, default 1, special at 1) · headline: "t = 2.50: the wheel's centre is at (2.50, 1.00) and the ant at (1.90, 1.80)" · graph alone · 2D. Drawn: the road, the wheel (ink) with its spokes, the flange circle of radius b where b > a, the centre C (point), the ant (`ant`), its path (`curve`) faint ahead and solid behind, the right triangle at C with legs x_C − x_A and y_C − y_A and the angle t (`angle`), cusps (point) where b = a. Readout: x_C = at, y_C = a and x_A = x_C − (x_C − x_A), y_A = y_C − (y_C − y_A) with the live numbers, the project's own relation; the parametric equations of the curtate and prolate cycloids, which the project asks for, are not written. Labels: C, A, t; the legs by hover names.
- `sim-hypocycloid` · Figure 11.10 + 11.11 · `hypocycloid`, `cusp`, `space-filling-curve` · flow by animation (the small circle rolls) and variation by a discrete state: the book's eight ratios a/b · arrows: none · moving: the small circle rolls until the curve closes (a/b = p/q closes after q turns), 6 s a run; for π and √2 it runs twelve turns and does not close · choice a/b ∈ {3, 4, 5, 5/3, 7/3, 8/3, π, √2} (segmented control), default 4 · headline: "a/b = 4: four cusps, and the curve closes after one turn" / "a/b = π: the curve never returns to its start" · graph alone · 2D. The fixed circle of radius a = 4 and the rolling circle of radius b in ink, the centre's path dashed, the tracing point (point), the curve (curve). Readout: x(t) = (a − b) cos t + b cos((a − b)/b)t, y(t) = (a − b) sin t − b sin((a − b)/b)t with a, b and t live.
- `sim-witch` · Figure 11.12 · `witch-of-agnesi` · flow by animation: "As the point A moves around the circle, the point P traces out" the curve · arrows: none · moving: A runs the circle, θ from 0.12 to π − 0.12, 6 s · none · headline: "θ = 1.05: A on the circle and B on the line y = 2a put P at (1.15, 1.50)" · graph alone · 2D. The circle (ink) of radius a = 1 through O and (0, 2a), the line y = 2a and the secant OA (line), the vertical through B and the horizontal through A dashed, A, B, P (point), the witch (curve), θ at O (angle). Readout: x = 2a cot θ, y = 2a sin²θ with the numbers, the parameterization the project concludes in its question 8; the points C, E, F and lengths b, c, d of question 1 are the reader's to label and are not drawn.

Exercise and checkpoint figures: Checkpoint 11.1's and 11.2's answer graphs (`CNX_Calc_Figure_11_01_006.jpg`, `_009.jpg`) and the exercise answer graphs stay the book's images in their solutions. Photographs: none.

## Exercises

- Checkpoints 11.1–11.3, kind `checkpoint`, inline after Examples 11.1–11.3, hint and answer behind reveals; all open answers (a sketch, an equation and its description, two parameterizations).
- Section exercises 1–61, kind `exercise`, each with its group's stem (config 10). The 30 keyed odd ones are kept; 49 ("Show that x = h + r cos θ, y = k + r sin θ represents … a circle", odd and unkeyed) is kept with an AI-marked approach. The 30 even ones are computational or "use technology" sketches and left out, named in `exercise_notes`.
- Review exercises held here (`source_section` 11.5): 323 (cosh 3t and 2 sinh 3t, keyed True), 327 and 329 (sketch and eliminate the parameter, keyed). 326 and 328 (unkeyed, computational) left out.
- Key checks: 21's key gives y = √(x + 1)/2, the upper half of the curve x = 4y² − 1 that t of both signs traces (a correction under the card); 35's key gives the domain (0, ∞) where t ≥ 1 makes it [1, ∞) (a correction under the card).
- Every card tagged with the concepts it tests; Bloom per card.

## Extra simulations (rule 15)

Judged and not built: an epitrochoid of exercise 58 (an exercise's answer, unkeyed); a "two parameterizations of one curve" figure for Example 11.3 (the two traces of y = 2x² − 3 at different speeds) shows only speed, which the section does not discuss. The folds above are the section's own.

## Wanted at chapter level

Anchors confirmed with `ost ids calculus 11.1` after the build.

- forms `eq-parametric-equations` → `11.1-fs-id1169295820852`, `eq-cycloid` → `11.1-cycloid-intro`, `eq-hypocycloid` → `11.1-hypocycloid-equations`, `eq-witch-of-agnesi` → `11.1-fs-id1169295607690`.
- variables `11.1/x`, `11.1/y`, `11.1/t`, `11.1/C` → `11.1-fs-id1169295820852`; `11.1/a`, `11.1/b` → `11.1-hypocycloid-equations`; `11.1/θ` → `11.1-fs-id1169295607690`.
- Review 323, 327, 329 rows go into this page's exercises when it is built (11.5's ex.json holds them).

Applied in the chapter pass (2026-10-13): every form and variables anchor above set with `ost set` (anchors resolve, `ost check` clean); the review rows written into section.json with `source_section` 11.5.

## Derivations

- Cycloids and Other Parametric Curves · the cycloid (and the Student Project "Travels with My Ant", which repeats it) · score 2 · built as drv-cycloid (a thin printed block: the center's path and the ant's circle added; the prose and its two fact equations stay, the result display is replaced; the project is set for the reader)
- Cycloids and Other Parametric Curves · the hypocycloid · score 9 · not built: the book states the equations ("somewhat similar"); the angle the small circle turns through rests on the rolling condition, which the book never states
- Student Project · The Witch of Agnesi · score 12 · not built: set for the reader
