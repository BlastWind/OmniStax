# Plan: 3.3 Linear systems of ODEs (`linsystems:section`)

Source: `source.md`. Status: built 2026-10-19 straight through (config 2). Template: Calculus `ch08/8.1`.

No book subsections (one block of prose before Exercises), two examples, Theorems 3.3.1 (Superposition) and 3.3.2, equation (3.2), no figures, no inline exercises, ten end exercises (4 keyed). Section notes dropped.

## Sub-concepts (OmniStax's, the book prints no subsection)

`matrix-functions` **Vector- and matrix-valued functions** (the definitions and the rules of differentiation); `linear-systems` **First-order linear systems** (the vector equation, constant coefficients, homogeneous, Theorem 3.3.1, linear independence, Example 3.3.1, the fundamental matrix); `nonhomogeneous` **Nonhomogeneous systems and initial conditions** (Theorem 3.3.2, solving for c⃗, Example 3.3.2).

## Concepts

Introduced: `vector-valued-function` (Calculus's id, type vector here), `matrix-valued-function` (matrix), `derivative-of-a-matrix-valued-function` (definition, derivative), `differentiation-rules-for-matrix-valued-functions` (result), `first-order-linear-system`, `constant-coefficient-system`, `homogeneous-system`, `superposition-for-systems` (result, Theorem 3.3.1, (3.2)), `linear-independence-of-vector-valued-functions`, `fundamental-matrix` (matrix; terms fundamental matrix, fundamental matrix solution), `general-solution-of-a-nonhomogeneous-system` (result, Theorem 3.3.2; term associated homogeneous equation), `solving-an-initial-value-problem-for-a-system` (skill).

## Colour and referents

x⃗(t), x⃗_k, x⃗_c, x⃗_p, f⃗, b⃗ wear `vector`; x⃗′ `derivative`; A(t), B(t), P(t), X(t), C wear `matrix`; A′(t) `derivative`; components x_1(t), a_ij(t) `function`; c, c_k and c⃗ (arbitrary constants) in ink. No referents.

## Figures

- `sim-superposition` · Sim · `superposition-for-systems`, `fundamental-matrix`, `solving-an-initial-value-problem-for-a-system` · value add: flow by animation and variation: Example 3.3.2's two solutions x⃗₁ = [e^t, e^t/2] and x⃗₂ = [0, e^{−t}] (the columns of X(t)) drawn as vectors from the origin as t runs, and x⃗(t) = c₁x⃗₁ + c₂x⃗₂ built as their parallelogram sum at every instant, its trajectory traced; the reader drags the initial point b⃗ and the constants c⃗ = X(0)⁻¹b⃗ follow · arrows: kinematic (the moving tip of x⃗(t)); the two scaled columns c₁x⃗₁, c₂x⃗₂ symbolic, redrawn each frame · moving: t 0 to 1.5 in 5 s · sliders b₁, b₂ (−2 to 3, `F.drag`; default (1, 2), the example's) · headline "c₁ = 1, c₂ = 1.5: x⃗(t) = c₁x⃗₁(t) + c₂x⃗₂(t)" · graph alone · 2D. Rule 15 judged: the text states superposition and solves for c⃗ but never shows a solution being the weighted sum of two others at each instant.

## Derivations (rule 29)

- b⃗ = x⃗(t₀) = X(t₀)c⃗ + x⃗_p(t₀) ⇒ X(t₀)c⃗ = b⃗ − x⃗_p(t₀) · printed block, two moves · built as `drv-initial-conditions-for-a-system`, replacing the two displays and the words between them.
- Examples 3.3.1, 3.3.2 · worked examples · not built.

## Exercises

End: 3.3.1–3.3.6 AI-marked (each computed or checked in SymPy); 3.3.101–3.3.104 the book's answers.

## Wanted at chapter level

Anchors: x_vec, A → `3.3-matrix-functions`; P, f_vec → `3.3-linear-systems`; X → `3.3-fundamental`; forms (3.2) → `3.3-syshom-eq1`.
