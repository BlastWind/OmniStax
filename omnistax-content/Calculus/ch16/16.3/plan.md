# Plan: 16.3 Conservative Vector Fields (m53987)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-12. Template: `ch01/1.1`.

Four objectives, an opening paragraph, three definitions, five theorems (three proofs), one Problem-Solving Strategy, Examples 16.27–16.37, ten checkpoints (16.24–16.33), seven figures (16.25–16.31), one numbered equation (16.12), five Key Concepts, two Key Equations, 47 section exercises (23 keyed), six glossary terms.

## Sub-concepts (page headers)

0. `cvf-intro`, the opening paragraph.
1. `curves` **Curves and Regions**: closed and simple curves (definition, Figure 16.25), Example 16.27 (Figure 16.26), Checkpoint 16.24, connected and simply connected regions (definition, Figure 16.27), Checkpoint 16.25.
2. `fundamental` **Fundamental Theorem for Line Integrals**: Example 16.28 (Figure 16.28), the theorem (Equation 16.12) and proof, Example 16.29, Checkpoint 16.26, zero circulation, path independence (definition), its theorem and proof (Figure 16.29), the hikers, the converse and its proof (Figure 16.30), Example 16.30 (Figure 16.31), Checkpoint 16.27.
3. `potentials` **Conservative Vector Fields and Potential Functions**: Examples 16.31–16.33, the strategy, Checkpoints 16.28–16.30.
4. `testing` **Testing a Vector Field**: the cross-partial test and its iff form, Examples 16.34, 16.35, Checkpoint 16.31, the whirlpool field's misapplication, Examples 16.36, 16.37, Checkpoints 16.32, 16.33.

## Concept nodes

Introduced: `simple-curve`, `connected-region`, `simply-connected-region`, `fundamental-theorem-for-line-integrals` (`eq-fundamental-theorem-for-line-integrals`), `path-independence`, `path-independence-of-conservative-fields` (`eq-circulation-of-a-conservative-field`), `path-independence-test`, `finding-a-potential-function`, `cross-partial-test` (`eq-cross-partial-test`). Reinforced: `closed-curve`, `potential-function`, `cross-partial-property`. Uses: `fundamental-theorem-of-calculus`, `chain-rule-for-one-independent-variable`, `circulation`, `integration-by-substitution`, `work-done-by-a-vector-field`.

## Colour

F wears `vector-field`, C, C₁, C₂ and r(t) `curve`, D `region`, f, P, Q, R `function`, the line integral's value `integral`. Referents: Example 16.30's two paths, `path-1` (C₁, y = x) and `path-2` (C₂, y = x²), in Figure 16.31 and that example's text only.

## Figures

- `fig-curve-types` · Figure 16.25 · photo, kept as the book's image: four sketched curves with no function.
- `sim-figure-eight` · Figure 16.26 · `simple-curve`, `closed-curve` · variation (the trace in t): Example 16.27's r(t) = ⟨cos t, sin(2t)/2⟩ traced up to t; specials at π/2 and 3π/2, where the point is at the origin, and 2π, where it is back at r(0) · arrows none · still: the slider is the parameter, no clock needed · slider t (0 to 2π, default 4) · readout r(t) with numbers, and r(π/2) = r(3π/2) = ⟨0, 0⟩ at the crossing · graph alone · 2D.
- `fig-region-types` · Figure 16.27 · photo, kept as the book's image: three sketched regions.
- `sim-path-independence` · Figure 16.28 + 16.29 · `fundamental-theorem-for-line-integrals`, `path-independence` · variation: a path C from the origin to the dragged end (a, b), bent by a slider, in ∇f = ⟨2x, 4y⟩ (Example 16.28, f = x² + 2y², its level curves dashed) — the integral equals f(a, b) − f(0, 0) however C bends — or in ⟨x²y, y + 5⟩ (Example 16.30), where it changes with the bend; the book's two pictures of one idea · arrows symbolic · still · choice F; end by drag on sliders a, b (−1 to 2.8, default (2, 2)); slider bend (−1 to 1, special 0, the segment) · readout ∫_C F · dr = f(a, b) − f(0, 0) with numbers, or its value and "depends on the bend" · graph alone · 2D.
- `fig-proof-paths` · Figure 16.30 · photo, kept as the book's image: the proof's sketch of C₁ and C₂ with no function.
- `fig-two-paths` · Figure 16.31 · faithful copy, still (kind figure): Example 16.30's field ⟨x²y, y + 5⟩ and the referent paths C₁, C₂.

Images: Checkpoint 16.25's and 16.26's images stay in their cards. No WebGL.

## Exercises

- Checkpoints 16.24–16.33; Checkpoint 16.25 follows Figure 16.27 (`after: fig-region-types`), since no example stands between it and Checkpoint 16.24.
- Section exercises 99–145: 23 odd keyed kept; 100, 102 (true or false) and 145 (the proof's f_y = Q) kept with AI approaches, 145 without the stem of the group before it; 21 even computations left out.
- Review 428 (AI: true or false, simply connected), 433 and 435 (potential functions) held here.

## Extra simulations (rule 15)

None: the path figure with its non-conservative choice already shows Example 16.30's lesson and the hikers' point.

## Corrections

- Example 16.29(a)'s last line prints 2∫ t³ ln t dt where the line above gives 4∫ t³ ln t dt.
- The proof of the path independence test prints ∫_C F · dr ≠ ∫_C F · dr; the second integral is over C′.
- Example 16.34: "the domain of F is all of ℝ² and ℝ³ is simply connected" (all of ℝ³).

## Wanted at chapter level

- forms: `eq-fundamental-theorem-for-line-integrals` → `16.3-fs-id1167794058636`; `eq-circulation-of-a-conservative-field` → `16.3-zero-circulation`; `eq-cross-partial-test` → `16.3-fs-id1167793927474`.

## Derivations

- The Fundamental Theorem for Line Integrals, Proof · score 2 · built as drv-fundamental-theorem-for-line-integrals
- ‘The first consequence … the circulation of F along C is zero’ · score 0 · built as drv-zero-circulation
- Path Independence of Conservative Fields, Proof · score 0 · built as drv-path-independence
- The Path Independence Test for Conservative Fields, Proof · score 4 · built as drv-path-independence-test
- Example 16.33 · Finding a Potential Function (the gravitational field) · score 1 · not built: a worked example under the bar, one antiderivative per component
- The Cross-Partial Test for Conservative Fields, ‘a proof of this theorem is beyond the scope of the text’ · score 7 · not built: the proof needs that a closed curve in a simply connected region bounds a surface inside it (or Stokes’ theorem on such a surface), which the book never states
