# Plan: 12.1 Vectors in the Plane (m53900)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-13. Template: `ch01/1.1`.

Six objectives, an opening paragraph and definition, six definition notes, one rule (Component Form of a Vector), one theorem (Properties of Vector Operations) with two proofs, Examples 12.1–12.10, ten checkpoints (12.1–12.10), 21 figures (12.2–12.22), seven Key Concepts, 60 section exercises (29 keyed), 19 glossary terms. No Key Equations and no numbered equations.

## Sub-concepts (page headers)

0. `vectors-intro`: the opening paragraph and the definition of a vector.
1. `representation` **Vector Representation**: initial and terminal point, magnitude, the zero vector, equivalent vectors (definition), Figure 12.2, the arrow notation, Example 12.1 with Figure 12.3, Checkpoint 12.1.
2. `combining` **Combining Vectors**: scalars, scalar multiplication (definition) and Figure 12.4, vector addition (triangle and parallelogram methods, definition) and the difference with Figure 12.5 + 12.6, the triangle inequality, Example 12.2 with Figure 12.7 + 12.8 + 12.9, Checkpoint 12.2.
3. `components` **Vector Components**: Example 12.3 with Figures 12.10 and 12.11, Checkpoint 12.3, standard position and component form (definition), the rule, Example 12.4 with Figure 12.12 + 12.14, Checkpoint 12.4, the magnitude and Figure 12.13 + 12.15 + 12.16, operations in components (definition), Example 12.5, Checkpoint 12.5, the theorem and its proofs, Checkpoint 12.6, the components by trigonometry, Example 12.6, Checkpoint 12.7.
4. `unit-vectors` **Unit Vectors**: unit vectors and normalization, Figure 12.17 + 12.20, Example 12.7, Checkpoint 12.8, standard unit vectors with Figure 12.18 + 12.19, Example 12.8, Checkpoint 12.9.
5. `applications` **Applications of Vectors**: Example 12.9 with Figure 12.21, Example 12.10 with Figure 12.22, Checkpoint 12.10.

Theorem and rule citations read as their titles, linked.

## Concept nodes

Introduced: `vector`, `initial-point`, `terminal-point`, `magnitude-of-a-vector` (`eq-vector-magnitude-plane`), `zero-vector`, `equivalent-vectors`, `parallel-vectors` (named here, "we explore this idea later"), `scalar`, `scalar-multiplication` (`eq-scalar-multiple-plane`), `vector-addition` (`eq-vector-sum-plane`), `triangle-method`, `parallelogram-method`, `vector-difference` (`eq-vector-difference`), `triangle-inequality-for-vectors` (`eq-vector-triangle-inequality`), `standard-position-vector`, `component-form-of-a-vector` (`eq-component-form-plane`), `component-form-from-points` (`eq-component-form-from-points`), `properties-of-vector-operations`, `components-from-magnitude-and-direction` (`eq-components-from-angle`), `unit-vector` (`eq-unit-vector`), `normalization`, `standard-unit-vectors` (`eq-standard-unit-plane`). Uses: `triangle-inequality`, `trigonometric-functions`, `inverse-trigonometric-functions`.

## Colour

`vector` for every bold letter through the new macros (`\kvecv`, `\kvecw`, `\kvecu`, `\kveca`, `\kvecb`, `\kveczero`, `\kveci`, `\kvecj`, `\kvecr`, `\kvecp`, `\kPQ` and `\vec{ST}` written plain) and the arrows of every figure; `point` for initial and terminal points in the figures (P, Q, S, T named); `angle` for θ (`\ktheta`, the direction angle). Scalars k, r, s and the components x, y stay ink. No referents: the two forces of Example 12.9 and the two velocities of Example 12.10 are told apart by their labels (chapter `COLOR.md`).

## Figures

Still copies (kind `figure`, no sliders) are drawn by one helper on a fixed grid, arrows in `vector`, points in `point`.

- `fig-vector` · Figure 12.2 · `vector`, `initial-point`, `terminal-point`, `equivalent-vectors` · standardisation alone: a faithful copy, (a) the directed segment with its two points named, (b) five equal arrows v₁ … v₅ · arrows symbolic · still · no controls · no headline · two panels · 2D.
- `fig-pq` · Figure 12.3 · `vector` · faithful copy of Example 12.1's PQ⃗ from (1, 1) to (8, 5) on the first quadrant · arrows symbolic · still · 2D.
- `sim-scalar-multiple` · Figure 12.4 · `scalar-multiplication` · variation: the scalar k stretches v, shrinks it, and past 0 turns it round, the book's four panels the detents k = 1, 2, 1/2, −1 · arrows symbolic · still: no time in the idea · slider k (−2 to 3, detents 1, 2, 0.5, −1; special 0, where kv is the zero vector) · headline ‖kv‖ = |k|‖v‖ with the live numbers · graph alone: v faint, kv solid from one tail · 2D.
- `sim-vector-sum` · Figure 12.5 + 12.6 · `vector-addition`, `triangle-method`, `parallelogram-method`, `vector-difference` · variation and intuition: drag the heads of v and w; the choice puts the sum by the triangle method, by the parallelogram method (the two give one arrow), or the difference v − w as the arrow from w's head to v's, with −w laid on v's head · arrows symbolic · still · choice method (triangle, parallelogram, difference); v and w by drag, each held by two sliders (x, y components, −4 to 4) · headline the sum or difference in components · graph alone on a grid · 2D. Readout v + w = ⟨x₁ + x₂, y₁ + y₂⟩ (or v − w) with the live numbers and the triangle inequality ‖v + w‖ ≤ ‖v‖ + ‖w‖.
- `fig-combining` · Figure 12.7 + 12.8 + 12.9 · `scalar-multiplication`, `vector-addition`, `vector-difference` · standardisation: one v and w drawn three times; a choice walks the example's parts (given, a. 3w, b. v + w both ways, c. 2v − w) · arrows symbolic · still · choice part · no headline · 2D. The unnumbered image of part (a) folds in (its 3w is the choice's state a).
- `fig-not-equivalent` · Figure 12.10 · `equivalent-vectors` · faithful copy of Example 12.3(a) on a grid · 2D.
- `fig-equivalent` · Figure 12.11 · `equivalent-vectors` · faithful copy of Example 12.3(b) · 2D.
- `sim-component-form` · Figure 12.12 + 12.14 · `component-form-from-points`, `standard-position-vector` · variation: drag the initial and terminal points; the equivalent standard-position vector follows from the origin, with its legs "xₜ − xᵢ units" and "yₜ − yᵢ units" bracketed on both · arrows symbolic · still · choice example (Example 12.4, Example 12.5) setting the points; the two points by drag (four sliders xᵢ, yᵢ, xₜ, yₜ, −4 to 14 / −4 to 14, hidden behind the drag as the keyboard path) · headline v = ⟨xₜ − xᵢ, yₜ − yᵢ⟩ with numbers · graph alone · 2D.
- `sim-magnitude-direction` · Figure 12.13 + 12.15 + 12.16 · `magnitude-of-a-vector`, `components-from-magnitude-and-direction` · variation: sliders ‖v‖ and θ; the legs ‖v‖cos θ and ‖v‖sin θ of the right triangle and the hypotenuse √(x² + y²) · arrows symbolic · still · sliders ‖v‖ (0 to 6, default 4), θ (−180° to 180°, default −45°, detents at 30°-steps) · headline the components ⟨2√2, −2√2⟩ as decimals · graph alone · 2D. Readout x = ‖v‖cos θ, y = ‖v‖sin θ, ‖v‖ = √(x² + y²).
- `sim-unit-vector` · Figure 12.17 + 12.20 · `unit-vector`, `normalization` · variation: drag v's head; u = v/‖v‖ stays on the unit circle at (cos θ, sin θ) while v grows or shrinks · arrows symbolic · still · v by drag (two sliders x, y, −4 to 4; default ⟨1, 2⟩ of Example 12.7) · headline u = ⟨…⟩ and ‖u‖ = 1 · graph alone with the unit circle dashed · 2D.
- `sim-standard-unit` · Figure 12.18 + 12.19 · `standard-unit-vectors` · intuition: v = xi + yj as the horizontal leg xi and the vertical leg yj, each a stack of i's or j's · still · sliders x, y (−4 to 4, step 0.5; default ⟨3, −4⟩ of Example 12.8a) · headline v = ⟨x, y⟩ = xi + yj · graph alone · 2D.
- `sim-resultant-force` · Figure 12.21 · `vector-addition`, `components-from-magnitude-and-direction` · variation: the truck's pull and the push, their angle, and the resultant by the parallelogram · arrows symbolic (forces on the car) · still: the car does not move in the idea · sliders pull (100 to 500 lb, default 300), push (0 to 300 lb, default 150), angle (0° to 60°, default 15°) · headline ‖r‖ ≈ 446.6 lb at 5° · scene: the car (`F.car`) with the arrows from its front · 2D.
- `sim-ground-speed` · Figure 12.22 · `vector-addition` · variation: airspeed, wind speed and the wind's direction; p + w by the triangle method · arrows symbolic (velocities as vectors) · still · sliders airspeed (300 to 600 mph, default 425), wind (0 to 100 mph, default 40), wind from (0° to 360° as a compass bearing, default 45° = northeast) · headline ground speed ≈ 454.17 mph, bearing 3.57° south of west · scene: the plane (`F.plane`) heading west with the compass marked · 2D. Figure "not drawn to scale" is the book's; the Sim draws to scale and its caption drops that clause through the row's caption, the book's caption kept as `original_caption`.

Images: the checkpoint answer images (12_01_003, 010) stay in their answers; Checkpoint 12.3's image of six vectors (013) stays in its prompt.

## Exercises

- Checkpoints 12.1–12.10 inline after their examples; the book's hints as `hint`; 12.1 and 12.2 (sketches) open answers with the book's answer image; Checkpoint 12.6 (prove the additive inverse property, unkeyed) with an AI-marked approach.
- Section exercises 1–60: the odd keyed ones kept (numbers and vectors as open answers); 41 (odd, unkeyed) judged at build: kept with an approach if it is a proof or explanation, else left out; even ones left out unless proof/explain/true-false (approach).
- Review exercise 445 held here, `source_section` 12.7 (427 needs the cross product and goes to 12.4).

## Extra simulations (rule 15)

None beyond the folds: `sim-vector-sum`, `sim-component-form` and the force/velocity Sims cover every idea; a Sim of the properties of vector operations would repeat `sim-vector-sum`.

## Wanted at chapter level

- forms: `eq-vector-magnitude-plane` → `12.1-magnitude-term`; `eq-scalar-multiple-plane`, `eq-vector-sum-plane` → `12.1-operations-definition`; `eq-vector-difference` → `12.1-difference-term`; `eq-vector-triangle-inequality` → `12.1-triangle-inequality`; `eq-component-form-plane` → the component-form definition note; `eq-component-form-from-points` → the rule note; `eq-components-from-angle` → `12.1-trig-components`; `eq-unit-vector` → `12.1-unit-vector-term`; `eq-standard-unit-plane` → `12.1-linear-combination`.
- variables of 12.1 anchored at build (`ost set … variables`).
- Review 427, 445 placed here.

## Derivations

- Magnitude of a vector (the block after "Using the distance formula") · score 1 · built as drv-magnitude-of-a-vector, the block replaced.
- Triangle inequality (after Figure 12.6) · score 2 · not built: a geometric fact read off in two moves, below the bar.
- Proof of Commutative Property · score 1 · built as drv-commutative-property, the proof's body replaced under its heading.
- Proof of Distributive Property · score 1 · built as drv-distributive-property, the proof's body replaced under its heading.
- Unit vector in the direction of v (before Figure 12.17) · score 0 · not built: two inline moves from ‖kv‖ = |k|‖v‖, below the bar.
- Linear combination of i and j (before Example 12.8) · score 0 · built as drv-linear-combination, the block replaced.
- Example 12.9, resultant force · score 2 · not built: components and magnitude from the section's own formulas.
- Example 12.10, resultant velocity · score 2 · not built: the section's component, addition and magnitude formulas substituted.
