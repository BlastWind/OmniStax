# Plan: 14.1 Functions of Several Variables (m53946)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-12. Template: `ch01/1.1`.

Four objectives, an opening paragraph, four definition notes, Examples 14.1–14.7, five checkpoints (14.1–14.5), 12 figures (14.2–14.13), two tables (14.1, 14.2), one numbered equation (14.1), five Key Concepts, two Key Equations, 59 section exercises (30 keyed), seven glossary terms.

## Sub-concepts (page headers)

0. The opening paragraph (the book's own introduction, `fsv-intro`).
1. `two-variables` **Functions of Two Variables**: the definition with Figure 14.2, Example 14.1 with Figure 14.3, Checkpoint 14.1.
2. `graphing` **Graphing Functions of Two Variables**: the surface, Example 14.2 with Figures 14.4 and 14.5, Example 14.3 with Figure 14.6.
3. `level-curves` **Level Curves**: Devil's Tower (Figure 14.7), the definition, g's level curves (Figure 14.8), the contour map, Example 14.4 with Figures 14.9 and 14.10 and Equation 14.1, Checkpoint 14.2, vertical traces (definition), Example 14.5 with Tables 14.1, 14.2 and Figure 14.11, Checkpoint 14.3, Figure 14.12.
4. `more-variables` **Functions of More Than Two Variables**: Example 14.6, Checkpoint 14.4, the level surface (definition), Example 14.7 with Figure 14.13, Checkpoint 14.5.

## Concept nodes

Introduced: `function-of-two-variables` (`eq-function-of-two-variables`), `graph-of-a-function-of-two-variables`, `level-curve` (`eq-level-curve`), `contour-map`, `vertical-trace` (`eq-vertical-trace`), `function-of-more-than-two-variables`, `level-surface` (`eq-level-surface`). Reinforced: `surface` (12.6, the glossary's "surface"), `domain`, `range`, `elliptic-paraboloid`, `hyperboloid-of-one-sheet`, `trace`. Uses: `sphere`, `ellipse`, `hyperbola`.

## Colour

f and g wear `function` (`\kf`, `\kg`), the sheet of every graph `surface`, level curves and traces `curve`, the domain D and range `set` (`\kD`), the slicing planes z = c, x = c, y = c `plane`, a point of the domain `point`. x, y, z, c stay ink. No referents: Example 14.2's two graphs are a choice, never drawn together.

## Figures

- `sim-domain-map` · Figure 14.2 + 14.3 · `function-of-two-variables`, `domain`, `range` · intuition and variation: drag the point (x, y) about the domain of g(x, y) = √(9 − x² − y²), the closed disk of radius 3; an arrow carries it to its value z = g(x, y) on the number line beside, which stays in the range [0, 3]; outside the disk the value is not real and the point shows hollow · arrows symbolic (the mapping) · still: no time in the idea · point by drag on two sliders x, y (−4 to 4, default (1, 2)); no other control · headline "g(1, 2) = 2" with live numbers · scene beside: the domain disk on its axes left, the number line z right · 2D. Readout g(x, y) = √(9 − x² − y²) = value, or "not real" with the radicand's sign.
- `sim-graph-surfaces` · Figure 14.4 + 14.5 · `graph-of-a-function-of-two-variables`, `surface` · 3D visualization: the hemisphere and the paraboloid of Example 14.2 turned freely, each with its level circles x² + y² = k lifted to their height, the choice swapping the function · arrows none · still · choice function (g = √(9 − x² − y²), f = x² + y²) · no headline; the readout names the surface · 3D, mathematical (rule 28.3), free orbit bounded to pitch above −0.3 so the floor is seen from above or the side, the reason: the shape is the lesson; no buttons.
- `sim-profit-surface` · Figure 14.6 · `graph-of-a-function-of-two-variables`, `range` · 3D visualization and variation: Example 14.3's profit paraboloid f(x, y) = 16 − (x − 3)² − (y − 2)² over the disk of radius 4 about (3, 2) cut to x, y ≥ 0, a point (x, y) dragged on it with its height · arrows none · still · point by drag on the sheet (sliders x 0 to 7, y 0 to 6, default (3, 2)) · readout f(x, y) = 16 − (x − 3)² − (y − 2)² = value thousand dollars · 3D free orbit, pitch bounded above the floor; no buttons.
- `fig-devils-tower` · Figure 14.7 · photo, kept: the text points at it ("(Figure 14.7)"), map and photo, the book's caption whole.
- `sim-level-slice` · Figure 14.8 · `level-curve`, `contour-map` · built both ways (book RULES): the hemisphere g = √(9 − x² − y²) cut by the plane z = c, the circle of the cut drawn on the surface and dropped to the floor, beside the flat contour map with the four level curves c = 0, 1, 2, 3 and the current one bold · arrows none · still · slider c (0 to 3, step 0.05, detents 0, 1, 2, 3; special c = 3 where the curve is the origin alone) · readout x² + y² = 9 − c² with live numbers and the radius √(9 − c²) · 3D (left, free orbit, pitch bounded above the floor) beside a 2D contour map (right) · reason for 3D: the slice is the meaning of a level curve.
- `sim-contour-ellipses` · Figure 14.9 + 14.10 · `contour-map`, `level-curve` · variation: Example 14.4's contour map of f = √(8 + 8x − 4y − 4x² − y²), the ellipses 4(x − 1)²/(16 − c²) + (y + 2)²/(16 − c²) = 1 for c = 0, 1, 2, 3 and the point (1, −2) at c = 4, faint, the current c bold; slider c 0 to 4 with detents at the book's values, special 4 (the point) · arrows none · still · headline names the ellipse's semi-axes · graph alone · 2D. Readout writes Equation 14.1's generalization with the live c.
- `sim-vertical-traces` · Figure 14.11 · `vertical-trace` · 3D visualization and variation: the surface z = sin x cos y over [−π, π]², the plane x = c (or y = d) and the trace it cuts, a cosine curve (or sine curve); choice of family, slider c with detents −π/4, 0, π/4 (the book's) · arrows none · still · readout z = sin c · cos y (or sin x cos d) with numbers, matching Tables 14.1 and 14.2 · 3D free orbit, pitch above the floor; no buttons.
- `fig-striking-surfaces` · Figure 14.12 · kept as the book's image (kind photo): the book prints no function for either surface, so nothing can be drawn from its numbers; the text points at it ("The following figure shows two examples").
- `sim-level-surfaces` · Figure 14.13 · `level-surface`, `hyperboloid-of-one-sheet` · 3D visualization and variation: the level surface 4x² + 9y² − z² = c, c from −2 to 3: a hyperboloid of one sheet for c > 0 (the book's c = 1 default), the cone at c = 0 (special), two sheets for c < 0 · arrows none · still · slider c (−2 to 3, special 0) · readout 4x² + 9y² − z² = c and the surface's name · 3D free orbit; no buttons.

Images: Checkpoint 14.1's answer image (14_01_003, the domain disk) and Checkpoint 14.2's (14_01_011, the circle) stay in their answers; exercise answer images stay in their cards.

Figures 14.4–14.6, 14.8, 14.11 and 14.13 make five WebGL scenes; none more.

## Exercises

- Checkpoints 14.1–14.5 inline after their examples, the book's hints as `hint`.
- Section exercises 1–59: the 30 odd keyed ones kept; the 29 even ones, unkeyed computations, sketches and models, left out and named.
- Review 394 (true or false: the domain of x³ sin⁻¹(y)) held here with an AI approach, `source_section` 14.8.

## Extra simulations (rule 15)

None: the fold of 14.2 + 14.3 shows the mapping, the slice figure the meaning of a level curve, and the level-surface figure the three-variable case; a Sim of Example 14.6's three-variable domains would be a picture of a ball and two planes, already in Chapter 12.

## Corrections

- "The graph of a function z = (x, y) of two variables is called a surface": z = f(x, y) (note at the spot).

## Wanted at chapter level

- forms: `eq-function-of-two-variables` → `14.1-fs-id1167794040017`; `eq-level-curve` → `14.1-fs-id1167793882806`; `eq-vertical-trace` → `14.1-fs-id1167793285160`; `eq-level-surface` → `14.1-fs-id1167793631584`.
- variables of 14.1 anchored at build.
- Review 394 placed here.
