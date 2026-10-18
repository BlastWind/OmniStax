# Plan: 12.6 Quadric Surfaces (m53874)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-13. Template: `ch01/1.1`.

Three objectives, an opening paragraph, three definitions, Examples 12.55–12.59 (12.58 the chapter opener), three checkpoints (12.52–12.54), fourteen figures (12.75–12.88), Key Concepts, 60 section exercises (29 keyed), nine glossary terms. No Key Equations and no numbered equations.

## Sub-concepts (page headers)

0. `surfaces-intro`: the opening paragraph.
1. `cylinders` **Identifying Cylinders**: Figure 12.75 + 12.76, the definition, Example 12.55 with Figures 12.77, 12.78, 12.79, Checkpoint 12.52, traces (definition) with Figure 12.80.
2. `quadrics` **Quadric Surfaces**: the definition, the ellipsoid, Example 12.56 with Figure 12.81 + 12.82, the elliptic paraboloid with Figure 12.83 + 12.84, Example 12.57, Checkpoint 12.53, the hyperboloid of one sheet with Figure 12.85 (photo), Example 12.58 (the opener) with Figure 12.86 (photo) and `sim-reflector`, the seventeen surfaces, Figure 12.87 + 12.88, Example 12.59, Checkpoint 12.54.

## Concept nodes

Introduced: `surface`, `cylindrical-surface`, `rulings`, `trace`, `quadric-surface` (`eq-quadric-surface`), `ellipsoid` (`eq-ellipsoid`), `elliptic-paraboloid` (`eq-elliptic-paraboloid`), `hyperboloid-of-one-sheet` (`eq-hyperboloid-one-sheet`), `hyperboloid-of-two-sheets` (`eq-hyperboloid-two-sheets`), `elliptic-cone` (`eq-elliptic-cone`), `hyperbolic-paraboloid` (`eq-hyperbolic-paraboloid`), `sketching-a-surface-from-its-traces`, `identifying-quadric-surfaces`. Uses: `sphere`, `conic-section`, `ellipse`, `parabola`, `hyperbola`, `focus`, `standard-form-of-a-parabola`, `converting-a-conic-to-standard-form`.

## Colour

`surface` for every surface drawn and named; `curve` for traces; `plane` for the slicing plane; `line` for rulings; `point` for the focus (0, 0, 6.25). No referents.

## Figures

Four live 3D scenes; the rest locked.

- `sim-cylinder` · Figure 12.75 + 12.76 · `cylindrical-surface`, `rulings` · intuition and depth: the curve in its coordinate plane and the rulings through it sweeping out the cylinder as the slider grows their extent; choice of curve (x² + y² = 9, rulings along z; z = x³, rulings along y) · arrows none · still · choice curve, slider extent (0 to 3, default 3) · headline the equation and the ruling direction · 3D live, pitch [−0.2, 1.4].
- `fig-cylinder-xz` · Figure 12.77 · faithful copy, locked: x² + z² = 25 about the y-axis.
- `fig-surface-2x2-y` · Figure 12.78 · faithful copy, locked: z = 2x² − y (the book prints no caption).
- `fig-sine-cylinder` · Figure 12.79 · faithful copy, locked: y = sin x, rulings along z.
- `sim-trace-sine` · Figure 12.80 · `trace` · variation: the slicing plane y = c (or x = c, z = c by a choice) through z = sin x and the trace it cuts, a sine wave for every y = c, a line or a set of lines otherwise, as the text says · still · choice plane (y = c, x = c, z = c), slider c · headline the trace's equation · 3D locked.
- `sim-ellipsoid-traces` · Figure 12.81 + 12.82 · `ellipsoid`, `trace`, `sketching-a-surface-from-its-traces` · depth and variation: the ellipsoid x²/2² + y²/3² + z²/5² = 1, a slicing plane by choice (z = k, y = k, x = k) and slider k, the trace ellipse drawn on the surface; k = 0 (dashed circle) gives the book's panels (a)–(c) · still · choice plane, slider k (−5 to 5 for z, scaled to the axis) · headline the trace as an ellipse with its semi-axes · 3D live.
- `sim-paraboloid-traces` · Figure 12.83 + 12.84 · `elliptic-paraboloid`, `trace` · the same for x² + y²/2² = z/5 (Example 12.57): z = k gives ellipses (k = 5 the book's (b), k = 0 a point), y = k and x = k parabolas · still · choice plane, slider k · 3D live.
- `fig-hyperboloid-photos` · Figure 12.85 · photo, kept: the text points at both parts; caption as printed.
- `fig-reflector-photo` · Figure 12.86 · photo, kept: Example 12.58 points at it; caption with its credit clause whole.
- `sim-reflector` · Sim · `elliptic-paraboloid`, `focus`, `reflective-properties-of-conics` · intuition: the dish's trace x² = 25z in the xz-plane, parallel rays falling straight down, each reflected at the dish through the focus (0, 6.25) (Example 12.58's answer, drawn); a slider sets how many rays land · arrows none: the rays are lines, drawn whole, since the idea has no time in it · still · slider rays (1 to 9, default 5) · headline "every ray reflects through the focus 6.25 m above the vertex" with the live number · 2D: the trace is the lesson; the dish's revolution is the paraboloid of `sim-quadrics`.
- `sim-quadrics` · Figure 12.87 + 12.88 · the six surfaces · depth: a choice of the six (ellipsoid, hyperboloid of one sheet, of two sheets, elliptic cone, elliptic paraboloid, hyperbolic paraboloid) with sliders a, b, c and the traces in the coordinate planes drawn on each; the readout writes the equation in standard form and its traces' kinds · still · choice surface, sliders a, b, c (0.5 to 3) · headline the surface's name · 3D live.

Images: Checkpoint 12.52's answer image (004) and Checkpoint 12.53's (012) stay in their answers; exercise images stay in their cards.

## Exercises

- Checkpoints 12.52–12.54 inline, hints as `hint`.
- Section exercises 303–362: odd keyed kept (many are "identify the surface" or match-the-graph with images; those keep their images); 353 (odd, unkeyed) judged at build; even ones left out unless proof/explain/true-false (approach).
- Review 439 held here.

## Extra simulations (rule 15)

`sim-reflector` (the opener answered: the rays the text only describes, reflected through the point the example finds). Weighed and left out: a hyperboloid built of straight lines (the photograph shows it, and `sim-quadrics` shows the surface).

## Wanted at chapter level

- forms `eq-quadric-surface` → the definition note; each surface's form → the paragraph or figure that introduces it.
- Concept `reflective-properties-of-conics` used here (11.5's).

## Derivations

- Example 12.58, the focus of a parabolic reflector · score 2 · not built: one trace, the conic form of 11.5 substituted, one solve.
- Example 12.59(b), a shifted elliptic paraboloid · score 1 · not built: completing the square in the section's method.
