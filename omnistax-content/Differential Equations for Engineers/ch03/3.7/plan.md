# Plan: 3.7 Repeated eigenvalues (`sec:multeigen`)

Source: `source.md`. Status: built 2026-10-19 straight through (config 2). Template: Calculus `ch08/8.1`.

Two examples, Theorem 3.7.1, no figures, one inline exercise (3.7.1), eleven end exercises (4 keyed). Section notes dropped.

## Sub-concepts (the book's headers)

`repeated-intro` (the opening, no header); `geometric` **Geometric multiplicity** (Theorem 3.7.1, complete eigenvalues); `defective` **Defective eigenvalues** (Examples 3.7.1, 3.7.2, Exercise 3.7.1 inline, the algorithm, chains of generalized eigenvectors).

## Concepts

Introduced: `algebraic-multiplicity`, `geometric-multiplicity`, `eigenvalue-method-for-complete-eigenvalues` (result, Theorem 3.7.1), `complete-eigenvalue`, `deficient-matrix`, `defective-eigenvalue`, `defect`, `generalized-eigenvector` (vector), `solutions-for-a-defective-eigenvalue` (result: x⃗₁ = v⃗₁e^{λt}, x⃗₂ = (v⃗₂ + v⃗₁t)e^{λt}), `upper-triangular-matrix` (matrix), `chains-of-generalized-eigenvectors` (result).

## Colour and referents

λ `eigenvalue`; v⃗, v⃗_k, w⃗, x⃗, x⃗_k `vector` (a generalized eigenvector drawn hollow in figures); A, I `matrix`; c_k, m, k, ℓ in ink. No referents.

## Figures

- `sim-repeated-limit` · Sim · `defective-eigenvalue`, `generalized-eigenvector`, `solutions-for-a-defective-eigenvalue` · value add: variation: A = [3 1; 0 3 + ε] with ε on a slider; for ε ≠ 0 two eigenvector lines, (1, 0) for 3 and (1, ε) for 3 + ε, with the field and a fan of trajectories; as ε shrinks the second line folds onto the first, and at ε = 0 only one line is left while the trajectories still bend, the t e^{3t} of x⃗₂ — the text's remark that close eigenvalues behave like a repeated one · arrows symbolic (field, eigenvectors) · still: the variation is the lesson · slider ε (−1 to 1, step 0.01, default 0.5, a dashed circle at 0: the repeated, defective case) · headline "ε = 0: λ = 3 twice, one eigenvector (1, 0), defect 1" · graph alone · 2D. Rule 15 judged: the text states that nearly repeated eigenvalues behave like a repeated one but draws nothing; here the two eigenvector lines visibly merge.

## Derivations (rule 29)

- Example 3.7.1's trial x⃗₂ = (v⃗₂ + v⃗₁t)e^{3t}, its derivative, A x⃗₂, the coefficients of e^{3t} and te^{3t}, giving (A − 3I)v⃗₂ = v⃗₁, (A − 3I)v⃗₁ = 0⃗ · printed block (the method's derivation, though inside the example) · built as `drv-generalized-eigenvector`, replacing the displays from "we try another solution" to the two conditions.
- (A − 3I)²v⃗₂ = 0⃗ after the example · printed, one move from the derivation's results · folded into `drv-generalized-eigenvector` as its last node.
- Example 3.7.2 · worked example · not built.
- The chains for higher defects · stated, not derived · not built.

## Exercises

- Inline: 3.7.1 after `example-3-7-1` (closing paragraph). AI-marked, checked in SymPy.
- End: 3.7.2–3.7.8 AI-marked, computed in SymPy; 3.7.101–3.7.104 the book's answers.

## Wanted at chapter level

Anchors: v_vec (generalized) → `3.7-defective`; forms of `solutions-for-a-defective-eigenvalue` → `3.7-defective-algorithm`.
