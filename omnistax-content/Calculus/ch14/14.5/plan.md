# Plan: 14.5 The Chain Rule (m53938)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-12. Template: `ch01/1.1`.

Three objectives, an opening paragraph, four theorems (chain rule for one and for two independent variables, the generalized chain rule, implicit differentiation) and one proof, Examples 14.26–14.30, five checkpoints (14.23–14.27), five figures (14.34–14.38), Equations 14.29–14.35, three Key Concepts, three Key Equations, 45 section exercises (23 keyed), three glossary terms.

## Sub-concepts (page headers)

0. The opening paragraph (`chain-intro`).
1. `chain-rules` **Chain Rules for One or Two Independent Variables**: the theorem and its proof, intermediate variables, Example 14.26 and Checkpoint 14.23, tree diagrams (Figure 14.34), the two-variable theorem with Figure 14.35, Example 14.27, Checkpoint 14.24.
2. `generalized` **The Generalized Chain Rule**: the theorem, Example 14.28, Checkpoint 14.25, Example 14.29 with Figure 14.36, Checkpoint 14.26.
3. `implicit` **Implicit Differentiation**: the ellipse (Figure 14.37), the theorem (Equations 14.34, 14.35) and its derivation, Example 14.30 with Figure 14.38, Checkpoint 14.27.

## Concept nodes

Introduced: `chain-rule-for-one-independent-variable` (`eq-chain-rule-one-variable`), `intermediate-variable`, `tree-diagram`, `chain-rule-for-two-independent-variables` (two forms), `generalized-chain-rule`, `implicit-differentiation-by-partial-derivatives` (two forms). Uses: `chain-rule`, `implicit-differentiation`, `differentiable-function-of-two-variables`, `partial-derivative`, `ellipse`, `tangent-line`.

## Colour

Every first derivative in the formulas wears `derivative` (`\kdzdx`, `\kdzdy`, `\kdzdu`, `\kdzdv`, `\kpxpu` …, `\kdzdt`, `\kdxdt`, `\kdydt`, the f_x family and ∂f/∂x in both notations); f, g, h and w wear `function`. The derivatives of the generalized chain rule with indexed variables stay ink. No referents.

## Figures

- `sim-chain-path` · Sim (extra, rule 15) · `chain-rule-for-one-independent-variable` · flow by animation: Example 14.26a's point (sin t, cos t) runs the unit circle over the level curves of z = 4x² + 3y² while the graph of z(t) = 4 sin²t + 3 cos²t beside it carries a tangent of slope dz/dt · arrows none · moving: t runs one lap in 6 s · no controls · headline the level the point is on · readout dz/dt = 8x cos t − 6y sin t with live numbers, equal to 2 sin t cos t · graph beside the contour map · 2D. It opens what the text only computes: the rate along the path read as a slope.
- `fig-tree-one`, `fig-tree-two`, `fig-tree-three` · Figures 14.34, 14.35, 14.36 · `tree-diagram` · standardisation alone: faithful copies (kind figure) of the three tree diagrams, branches in ink and labels through the macros · still · 2D.
- `sim-implicit-tangent` · Figure 14.37 + 14.38 · `implicit-differentiation-by-partial-derivatives` · variation: a choice of curve (the ellipse x² + 3y² + 4y − 4 = 0 and Example 14.30's rotated ellipse 3x² − 2xy + y² + 4x − 6y − 11 = 0), a slider t (0° to 360°) moving the point along it by its angle parameter, special at the book's point (2, 1) on the rotated ellipse; the tangent line through the point with slope −f_x/f_y · still · headline the slope · readout dy/dx = −f_x/f_y with live numbers · graph alone, one scale · 2D.

## Exercises

- Checkpoints 14.23–14.27 inline, hints as `hint`.
- Section exercises 215–259: odd keyed ones kept; even ones left out. Corrections: 215 (the key's 4t² is 4t⁴), 247 (two terms' signs).
- Review 405 held here.

## Corrections

- Example 14.28: the last line printed 2e^{2u}(v + 3 sin sin v cos cos v − v); it is 2e^{2u}(sin²v + 3 sin v cos v − cos²v) (note on the sentence before the display).

## Wanted at chapter level

- forms: `eq-chain-rule-one-variable` → `14.5-fs-id1167793362088`; the two-variable forms → `14.5-fs-id1167794044156`; `eq-generalized-chain-rule` → `14.5-fs-id1167793261542`; the implicit forms → `14.5-fs-id1167793376409`.
- variables anchored at build. Review 405 placed here.
