# Plan: 3.8 Implicit Differentiation (m53585)

Source: `source.md`, converted with `tools/convert.py 3`. Status: planned 2026-10-12 by the chapter prep; config 2 waives the review for this run. Template: `ch01/1.1`.

Two objectives, an opening paragraph, one Problem-Solving Strategy, Figures 3.30 to 3.32, Examples 3.68 to 3.73, two checkpoints (Checkpoints 3.48 and 3.49), no Key Equations, two Key Concepts, 31 section exercises (300–330, 15 keyed), one glossary term. One page.

## Sub-concepts (page headers)

0. Opening paragraph (no header).
1. `implicit` **Implicit Differentiation**: explicit and implicit functions, the vertical-line remark, x² + y² = 25 and Figure 3.30, the strategy note (`implicit-strategy`), Examples 3.68 (with Analysis), 3.69, 3.70, Checkpoint 3.48. Introduces `implicitly-defined-function` (the paragraph `explicit-implicit`), `implicit-differentiation` (the term, before the strategy).
2. `tangent-implicit` **Finding Tangent Lines Implicitly**: Examples 3.71 (Figure 3.31), 3.72 (Figure 3.32, the folium of Descartes), 3.73 (the elliptical orbit), Checkpoint 3.49. No new concept.

Uses: `chain-rule` (step 1 of the strategy), `product-rule` (3.69), `quotient-rule` (3.70), `higher-order-derivative` (3.70), `vertical-line-test`, `equation-of-a-tangent-line` (3.71–3.73), `point-slope-equation`, `leibniz-notation`.

Correction notes: the book's y = −√(25 − x²) if 0 < x < 25 in the split function means 0 < x < 5 (kept as printed, note at the spot); Example 3.70 writes "the quotient rule to find d/dy(−x/y)" where it means d/dx (note).

The strategy note is where the section first applies a rule anew; the Table of Derivatives link `/calculus/sheets/derivatives/` sits in step 1 (d/dx sin y = cos y dy/dx). No derivative-mode calculator link: an equation in x and y is not a function the calculator differentiates.

## Concept nodes (merged in book.json by the prep)

`implicitly-defined-function` (definition, `function`), `implicit-differentiation` (skill).

## Colour, referents and function tokens

y, where it is the implicitly defined function (`3.8/y`, concept `implicitly-defined-function`), wears `function` (written `y` plain is ink; the section uses `\kf`-style macros only where the row types it: y has no macro, so the builder marks its mentions by `data-concept` in prose and leaves the letter ink in math). dy/dx (`\kdydx`) and d²y/dx² (`\kdtwoydx`) wear `derivative`; tangent lines `line`. x is ink.

Referents: none. Figure 3.30's three functions stand on three panels (the book's order), each in `function`; one canvas with three referents was considered and dropped, since the lesson is that each is a separate function of the one equation.

Function tokens: x^2+1, sqrt(25−x^2), −sqrt(25−x^2), the split function {x<0: sqrt(25-x^2), -sqrt(25-x^2)}. The equations (x² + y² = 25, the folium, the ellipse, the hyperbola) are not functions and carry no token.

## Figures

- `sim-implicit-circle` · Figure 3.30 · `implicitly-defined-function` · value add: variation: a choice of the three functions the book draws (upper semicircle / lower semicircle / the split function), each lit on the full circle x² + y² = 25 drawn faint, so the reader sees each as a piece of the one curve passing the vertical line test · still · choice (3 options) · headline names the function · graph alone · 2D. The book's three panels are three states of one choice.
- `sim-implicit-tangent` · Figure 3.31 + 3.32 · `implicit-differentiation` · value add: variation: a point dragged along the curve carries its tangent, with dy/dx from the implicit formula live; choice `circle x² + y² = 25` (default point (3, −4), slope 3/4, Example 3.71) / `folium y³ + x³ − 3xy = 0` (default (3/2, 3/2), slope −1, Example 3.72) / `ellipse 4x² + 25y² = 100` (default (3, 8/5), slope −3/10, Example 3.73, its tangent's x-intercept 25/3 marked) · arrows: none · still · `F.drag` along the curve (each parametrised: circle by angle, folium by x = 3t/(1 + t³), y = 3t²/(1 + t³), ellipse by angle) · headline: "at (3.00, −4.00), dy/dx = −x/y = 0.75" · readout: the state's dy/dx formula with the numbers · graph alone · 2D. Where dy/dx is undefined (y = 0 on the circle, the folium's vertical tangents) the headline says the tangent is vertical. Folds Figures 3.31 and 3.32 and adds Example 3.73's ellipse, which the book does not draw; both numbers link here.

Exercise figures: 316's folium graph in its card; the answer graphs of 311, 313, 315 in their solutions.

## Exercises

- Checkpoints 3.48 (after Example 3.70) and 3.49 (after Example 3.73), `open` (an expression; an equation of a line).
- Section exercises 300–330, kind `exercise`, with stems; 15 odd keyed kept. The 16 even are computational (dy/dx, tangent lines, 316's folium, 318 vertical tangents, 322 y″, 324 cars, 326 surface area, 328 and 330 x = sin y, x = tan y) and left out, named in `exercise_notes`.
- Review exercise 380 (unkeyed implicit derivative, held here per exploration) left out and named.
- Tags: `implicit-differentiation` for all; `equation-of-a-tangent-line` also on 310–321.

## Extra simulations (rule 15)

None beyond the two figures. Considered and dropped: a slider on the radius of the circle: dy/dx = −x/y does not depend on it, positions look alike (24.9); an animated rocket firing along the tangent for Example 3.73: the ellipse state of `sim-implicit-tangent` marks the x-intercept, and motion adds no idea.

## Wanted at chapter level

Ids confirmed with `ost ids calculus 3.8` after the build.

- variables `3.8/y` → `3.8-explicit-implicit`.
- forms: none (both concepts carry none).
- exercise_notes for 3.8: "Review exercise 380, printed at the end of 3.9, has no answer in the key and is left out."
- figlib: an implicit-curve plot is not needed; all three curves are parametrised.
