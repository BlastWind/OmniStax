# Plan: 16.1 Vector Fields (m53989)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-12. Template: `ch01/1.1`.

Three objectives, an opening paragraph, two definition notes, two theorems with proofs, Examples 16.1–16.13, twelve checkpoints (16.1–16.12), ten figures (16.2–16.11), three unnumbered value tables, four numbered equations (16.1–16.4), four Key Concepts, two Key Equations, 38 section exercises (19 keyed), seven glossary terms.

## Sub-concepts (page headers)

0. The opening paragraph (the book's own introduction, `vf-intro`).
1. `examples` **Examples of Vector Fields**: Figure 16.2, the definition, "Vector Fields in ℝ²" (h3) with Equations 16.1 and 16.2, Example 16.1, Checkpoint 16.1.
2. `drawing` **Drawing a Vector Field**: radial and rotational fields, Examples 16.2–16.6 with Figures 16.3–16.6 and their tables, Checkpoints 16.2–16.5, unit vector fields and normalizing; "Vector Fields in ℝ³" (h3) with Equations 16.3, 16.4, Examples 16.7, 16.8 with Figures 16.7, 16.8, Checkpoints 16.6, 16.7.
3. `gradient-fields` **Gradient Fields**: the gradient recalled, the definition, Example 16.9 with Figures 16.9 and 16.10, potential functions, Examples 16.10, 16.11 with Figure 16.11, Checkpoints 16.8–16.10, the uniqueness theorem and its proof, the cross-partial property and its proof, Examples 16.12, 16.13, Checkpoints 16.11, 16.12, the closing warning.

## Concept nodes

Introduced: `vector-field` (`eq-vector-field-plane`, `-plane-ij`, `-space`, `-space-ijk`), `radial-field`, `rotational-field`, `unit-vector-field` (`eq-unit-vector-field`), `conservative-vector-field` (`eq-gradient-field`), `potential-function`, `uniqueness-of-potential-functions`, `cross-partial-property`. Uses: `gradient`, `level-curve`, `directional-derivative`, `partial-derivative`, `clairauts-theorem`, `antiderivative`, `unit-vector`, `standard-unit-vectors`, `dot-product`, `domain`, `component-functions`.

## Colour

F, G and the velocity field v wear `vector-field` (`\kvecF`, `\kvecG`, `\kvecv`), and ∇f, a gradient field, wears it too here (its 16.1 row names `conservative-vector-field`); the components P, Q, R and the potential functions f, g wear `function`; i, j, k `vector`; level curves `curve`. x, y, z, a, b, r, G (the constant), m₁, m₂ stay ink. The figures draw the field's arrows in `vector-field`, the one arrow at the dragged point bolder, the circle through it in ink. No referents.

## Figures

- `fig-two-fields` · Figure 16.2 · photo, kept as the book's image: an artist's drawing of a planet and moon and of a river round a rock, with no function to draw from; the text reads both panels ("Figure 16.2(a) shows…", "(b) shows…").
- `sim-radial-field` · Figure 16.3 · `radial-field`, `vector-field` · variation: Example 16.2's field F = ⟨x/2, y/2⟩ on [−3, 3]², and the point (a, b) dragged over it carrying its own vector F(a, b) and the circle through it centred at the origin; every vector on that circle has the same length and is perpendicular to it, and the table's rows are states of the point · arrows symbolic (the field's values) · still: no time in the idea · point by drag on sliders a, b (−3 to 3, default (2, 1), a row of the table, detents at the integers the table samples) · no headline; readout F(a, b) = ⟨a/2, b/2⟩ with numbers, ‖F‖ = r/2 and F · ⟨−b, a⟩ = 0 · graph alone · 2D (a plane field, rule 28.1).
- `fig-hurricane` · Figure 16.4 · photo, kept: printed in Example 16.3, the Chapter Opener example, with its credit.
- `sim-rotational-field` · Figure 16.5 · `rotational-field` · variation: Example 16.3's field ⟨y, −x⟩, the point (a, b) dragged with F(a, b) = ⟨b, −a⟩ tangent to its circle and the radial vector ⟨a, b⟩ dashed, the three panels one picture · arrows symbolic · still · drag on sliders a, b (−3 to 3, default (2, 1)) · readout F(a, b) = ⟨b, −a⟩, ⟨a, b⟩ · ⟨b, −a⟩ = 0, ‖F‖ = r · graph alone · 2D.
- `sim-whirlpool-field` · Figure 16.6 · `rotational-field`, `domain` · variation: Example 16.4's whirlpool F = ⟨y, −x⟩/(x² + y²); dragging (a, b) toward the origin, the one vector grows without bound as ‖F‖ = 1/√(a² + b²) while the sampled grid stays readable (its arrows scaled to the largest on the grid); the origin is marked hollow, outside the domain · arrows symbolic · still · drag on sliders a, b (−3 to 3, default (1, 1)) · readout F(a, b) with numbers and ‖F‖ = 1/r · graph alone · 2D.
- `sim-field-1-1-z` · Figure 16.7 · `vector-field` · 3D visualization: Example 16.7's ⟨1, 1, z⟩ in the box [−2, 2]³ turned freely, its arrows flat in the xy-plane and steeper with height; a slider z moves one marked level whose arrows are drawn bolder · arrows symbolic · still · slider z (−2 to 2, default 1, special 0 where the vectors lie flat) · readout F(x, y, z) = ⟨1, 1, z⟩ with the level · 3D mathematical (rule 28.3), free orbit, pitch bounded to ±1.4 (the box seen from any side; no ground); no buttons.
- `sim-gravity-field` · Figure 16.8 · `radial-field`, `vector-field` · 3D visualization: the field −⟨x, y, z⟩/r³ (Gm₁m₂ = 1) on a grid in the box [−3, 3]³, every arrow toward the origin, longer near it; a slider r moves a marked point along the diagonal toward the mass, its arrow growing as 1/r² · arrows symbolic (forces as values, not motion) · still · slider r (0.8 to 4.5, default 3) · readout ‖F‖ = Gm₁m₂/r² with numbers · 3D mathematical, free orbit, pitch ±1.4; no buttons.
- `sim-gradient-field` · Figure 16.9 + 16.10 · `conservative-vector-field`, `gradient`, `level-curve` · variation: Example 16.9's ∇(x²y²) = ⟨2xy², 2x²y⟩ on [−1.5, 1.5]² with the level curves x²y² = c, and the point (a, b) dragged: its gradient perpendicular to the level curve through it and longest where the curves crowd; the book's two pictures of one field are one drawing · arrows symbolic · still · drag on sliders a, b (−1.5 to 1.5, default (1, 1)) · readout ∇f(a, b) = ⟨2ab², 2a²b⟩, f(a, b) = c with numbers · graph alone · 2D.
- `fig-velocity-potential` · Figure 16.11 · faithful copy, still, no controls (kind figure): Example 16.11's v = ⟨xy, x²/2 − y⟩ on [−3, 3]² drawn by the library; the example only verifies a gradient, and the figure adds nothing a control would change.

Images: Checkpoint 16.2's, 16.4's, 16.6's and 16.8's answer images stay in their answers; exercise images stay in their cards.

Figures 16.7 and 16.8 are the page's two WebGL scenes.

## Exercises

- Checkpoints 16.1–16.12 inline after their examples, the book's hints as `hint`.
- Section exercises 1–38: the 19 odd keyed ones kept; even 2 and 4 (true or false) and 30 (show a curve is a flow line) kept with AI approaches; the other 16 even ones (sketches 6–14, gradients 16–20, formulas 22–28, matching 32–38) left out and named.
- Review: 427 (true or false: a vector field is a gradient field, `source_section` 16.8) if it tests 16.1's ideas; placed in the chapter pass from the review list.

## Extra simulations (rule 15)

None: the probe on the radial, rotational and gradient fields already shows what the text's tables and circles do; a Sim of normalizing would show the rotational field with every arrow one length, which Example 16.6 says in one line.

## Corrections

- Example 16.3's solution and analysis cite "Figure 16.6" (the whirlpool) for the rotational field ⟨y, −x⟩, which is Figure 16.5 (openstax.org prints the same).
- "Figure 16.11 shows the level curves of this function overlaid on the function's gradient vector field": the level curves are Figure 16.10.
- Checkpoint 16.11's field is printed y i − x²xy j; its answer P_y = x, Q_x = −2xy reads F = xy i − x²y j.
- Exercise 31's key prints c′(t) = (cos t, −sin t, e^{−t}); the derivative of eᵗ is eᵗ.
- Key Concepts' first item repeats "F(x, y, z) to each point (x, y, z) in a subset D of ℝ³." without its "and".

## Wanted at chapter level

- forms: `eq-vector-field-plane` → `16.1-fs-id1167793951458`; `eq-vector-field-plane-ij` → `16.1-fs-id1167793252274`; `eq-vector-field-space` → `16.1-fs-id1167793948412`; `eq-vector-field-space-ijk` → `16.1-fs-id1167793977405`; `eq-gradient-field` → `16.1-fs-id1167793266865`; `eq-cross-partial-plane`, `eq-cross-partial-space` → `16.1-fs-id1167794327427`; `eq-uniqueness-of-potential-functions` → `16.1-fs-id1167794097175`; `eq-unit-vector-field` → `16.1-unit-field`.
- variables of 16.1: add i_vec, j_vec, k_vec (the standard unit vectors, 13.4's meaning).
