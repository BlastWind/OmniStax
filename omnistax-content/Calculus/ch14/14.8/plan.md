# Plan: 14.8 Lagrange Multipliers (m53943)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-12. Template: `ch01/1.1`.

Two objectives, an opening paragraph, one theorem with its proof, one problem-solving strategy, Examples 14.42–14.45, four checkpoints (14.37–14.40), three figures (14.59–14.61), two Key Concepts, two Key Equations, 36 section exercises (18 keyed), the Chapter Review Exercises 394–420, five glossary terms.

## Sub-concepts (page headers)

0. The opening paragraph (`lagrange-intro`).
1. `lagrange` **Lagrange Multipliers**: the golf-ball budget (Figures 14.59, 14.60), the theorem and proof, the strategy, Example 14.42 with Figure 14.61, Checkpoint 14.37, Example 14.43, Checkpoint 14.38, three variables, Example 14.44, Checkpoint 14.39.
2. `two-constraints` **Problems with Two Constraints**: the system, Example 14.45, Checkpoint 14.40.

## Concept nodes

Introduced: `constraint`, `objective-function`, `method-of-lagrange-multipliers` (`eq-lagrange-one-constraint`), `lagrange-multiplier`, `steps-for-using-lagrange-multipliers`, `lagrange-multipliers-with-two-constraints` (`eq-lagrange-two-constraints`). Reinforced: `optimization-problem` (4.7). Uses: `level-curve`, `gradient`, `gradient-normal-to-the-level-curve`, `principal-unit-tangent-vector`, `arc-length-parameterization`, `chain-rule-for-one-independent-variable`.

## Colour

∇f, ∇g wear `vector` (`\kgradf`, `\kgradg`); f, g, h `function`; λ, λ₁, λ₂ ink. Level curves `curve`, the linear constraints `line`, the touching point `point`. No referents (COLOR: level curves and the constraint differ by type).

## Figures

- `sim-lagrange-golf` · Figure 14.59 + 14.60 · `method-of-lagrange-multipliers` · variation: the profit's level curves (the book's c = 150, 250, 350, 400 faint) and the budget line 20x + 4y = 216; slider c (100 to 640) moves the bold level curve, its crossings with the line dotted; at the special c = 540 it touches the line at (10, 4) and ∇f, ∇g appear, parallel · still · readout ∇f(10, 4) = ⟨20, 4⟩ = 4⟨5, 1⟩ = λ∇g, or the number of common points · graph alone, one scale · 2D. The Sim draws the true tangency; the book's 14.60 is drawn at c = 395 (correction note in the text).
- `sim-lagrange-min` · Figure 14.61 · `steps-for-using-lagrange-multipliers` · the same helper for Example 14.42: levels c = 10, 26 faint, the line x + 2y = 7, special c = 27 touching at (5, 1) with ∇f = 8∇g · still · 2D.
- `sim-two-constraints` · Sim (extra, rule 15) · `lagrange-multipliers-with-two-constraints` · 3D: Example 14.45's cone and plane, the hyperbola where they meet (two branches) and the sphere x² + y² + z² = R²; slider R with specials at √(6 − 4√2) and √(6 + 4√2) where the sphere touches each branch at the example's points · still · readout f = R² against the two extreme values · 3D free orbit; no buttons. It shows what the five equations of the example compute: the level surfaces of f touching the curve the two constraints leave.

## Exercises

- Checkpoints 14.37–14.40 inline, hints as `hint`.
- Section exercises 358–393: odd keyed ones kept; unkeyed 384 (show) with an AI approach; even ones left out.
- Review exercises 394–420 are distributed by the chapter pass; 417 stays here.

## Corrections

- "Trial and error reveals that this profit level seems to be around 395, when x and y are both just less than 5": the tangency is at f = 540, (10, 4), as Example 14.43 finds (note at the spot).

## Wanted at chapter level

- forms: `eq-lagrange-one-constraint` → `14.8-fs-id1167794055797`; `eq-lagrange-two-constraints` → `14.8-two-constraints`.
- variables anchored at build.

## Derivations

- Method of Lagrange Multipliers: One Constraint · Proof · score 4 · built as drv-lagrange-one-constraint: dz/ds = 0 by the chain rule and Fermat's theorem worked to ∇f · T(0) = 0, then joined with the gradient's normality to the level curve g = 0 (14.6) in ∇f = λ∇g; the whole proof body replaced, its assumptions the facts
- Problems with Two Constraints, the system ∇f = λ₁∇g + λ₂∇h · score 7 · not built: stated by analogy with no claim that it follows, and its proof needs the independence of ∇g and ∇h, which the book never states
