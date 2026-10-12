# Plan: 14.6 Directional Derivatives and the Gradient (m53940)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-12. Template: `ch01/1.1`.

Five objectives, an opening paragraph, four definitions, four theorems (directional derivative by partials, properties of the gradient, gradient normal to the level curve, directional derivative in three variables) and one proof, Examples 14.31–14.37, six checkpoints (14.28–14.33), seven figures (14.39–14.45), Equations 14.36–14.42, four Key Concepts, four Key Equations, 50 section exercises (25 keyed), two glossary terms.

## Sub-concepts (page headers)

0. The opening paragraph (`directional-intro`).
1. `directional` **Directional Derivatives**: the secant in the direction u (Figure 14.39), the definition (Equation 14.36), Example 14.31 with Figure 14.40, the theorem and proof (Equation 14.37), Example 14.32.
2. `gradient` **Gradient**: ∇f · u (Equation 14.38), the definition (Equation 14.39), Checkpoint 14.28, nonunit directions, Example 14.33, Checkpoint 14.29, the angle form and the properties (Figure 14.41), Example 14.34 with Figure 14.42, Checkpoint 14.30, steepest ascent (Figure 14.43) and contour maps (Figure 14.44).
3. `level-curves` **Gradients and Level Curves**: the derivation, the theorem, Example 14.35 with Figure 14.45, Checkpoint 14.31.
4. `three-dimensions` **Three-Dimensional Gradients and Directional Derivatives**: the definitions (Equations 14.40, 14.41), Example 14.36, Checkpoint 14.32, directional cosines, the theorem (Equation 14.42), Example 14.37, Checkpoint 14.33.

## Concept nodes

Introduced: `directional-derivative`, `directional-derivative-of-a-function-of-two-variables` (two forms), `gradient`, `properties-of-the-gradient`, `gradient-normal-to-the-level-curve`, `gradient-in-three-dimensions`, `directional-derivative-in-three-dimensions` (two forms). Uses: `partial-derivative-as-a-slope`, `unit-vector`, `dot-product`, `angle-between-two-vectors`, `direction-angles`, `level-curve`, `contour-map`, `chain-rule-for-one-independent-variable`.

## Colour

D_u f (`\kDuf`), f_x, f_y, f_z wear `derivative`; ∇f (`\kgradf`), u, v, i, j, k `vector`; θ and φ `angle`; f `function`; the surface `surface`, level curves `curve`, the tangent plane `plane`, the arrow along the surface `line`. No referents.

## Figures

- `sim-directional` · Figure 14.39 + 14.40 · `directional-derivative`, `directional-derivative-of-a-function-of-two-variables` · 3D and variation: Example 14.31's surface f = x² − xy + 3y² (also the stand-in for 14.39's unnamed surface) with its tangent plane at (−1, 2, 15); the unit vector u on the floor at the angle θ (slider 0° to 360°, specials at arccos(3/5) ≈ 53.1°, where D_u f = 8, and at the gradient's direction ≈ 107.1°), the curve of the surface over u and the arrow along the plane whose slope is D_u f · heights at 1/12, labelled · arrows symbolic · still · readout D_u f = f_x cos θ + f_y sin θ with live numbers · 3D free orbit, no buttons.
- `sim-gradient-max` · Figure 14.41 + 14.42 · `properties-of-the-gradient` · variation: Example 14.34's contour map of 3x² − 4xy + 2y² about (−2, 3) with ∇f and u, beside the graph of D_u f(−2, 3) = ‖∇f‖ cos φ against θ; slider θ with specials along and against ∇f · arrows symbolic · still · readout with the live angle · 2D. 14.41's paraboloid picture is generic; Example 14.34 supplies the function.
- `sim-steepest` · Figure 14.43 · `properties-of-the-gradient` · 3D and variation: 3 + sin x sin y over [−3, 3]²; drag the point (sliders a, b) and see ∇f on the floor and the arrow climbing at the rate ‖∇f‖ · still · 3D free orbit.
- `sim-gradient-normal` · Figure 14.44 · `gradient-normal-to-the-level-curve` · variation: the contour map of x² − y² for c = −5 … 5; drag the point and the level curve through it is drawn bold with ∇f normal to it and a tangent vector · still · 2D.
- `sim-level-gradient` · Figure 14.45 · `gradient-normal-to-the-level-curve` · variation: Example 14.35's level curve f = 18, the point moved around it by its angle φ from the ellipse's centre (special at (−2, 1)), ∇f and the tangent vector at a ninth of their length (the book's own figure shortens its tangent vector too) · still · 2D.

## Exercises

- Checkpoints 14.28–14.33 inline, hints as `hint`.
- Section exercises 260–309: odd keyed ones kept; even ones left out. 303 and 305 carry their two-line stem ("find equations of a. the tangent plane and b. the normal line").
- Review 413 and 415 held here.

## Extra simulations (rule 15)

None: the five figures cover the definition, the extremes, steepest ascent and normality; a three-dimensional level surface with its gradient would repeat `sim-level-surfaces` of 14.1 with an arrow.

## Corrections

- The nonunit example: printed −(5/13)(2x − (77/12)y) + (12/13)(−x + 6y) = −(22/13)x + (17/13)y; it is −(5/13)(2x − y) + (12/13)(−x + 6y) = −(22/13)x + (77/13)y.

## Wanted at chapter level

- forms: `eq-directional-derivative-definition` → `14.6-fs-id1167794159722`; the two-variable theorem forms → `14.6-fs-id1167793882858`; `eq-gradient-2d` → `14.6-fs-id1167794122930`; `eq-directional-derivative-angle` → `14.6-gradient-angle`; `eq-gradient-3d` → `14.6-fs-id1167793932636`; the three-dimensional forms → `14.6-fs-id1167793277385`.
- variables anchored at build. Review 413, 415 placed here.
