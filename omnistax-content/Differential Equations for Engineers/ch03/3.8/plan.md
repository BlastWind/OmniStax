# Plan: 3.8 Matrix exponentials (`sec:matexp`)

Source: `source.md`. Status: built 2026-10-19 straight through (config 2). Template: Calculus `ch08/8.1`.

One example (3.8.1), Theorems 3.8.1 and 3.8.2, two boxed formulas (the series, (3.5)), no figures, one inline exercise (3.8.1), sixteen end exercises (5 keyed), one book footnote (Moler and Van Loan). Section notes dropped (their pointer to §7.1 goes with them).

## Sub-concepts (the book's headers)

`definition` **Definition** (the series, Theorems 3.8.1, 3.8.2); `simple-cases` **Simple cases** (diagonal, the nilpotent example, Exercise 3.8.1 inline, nilpotent); `general` **General matrices** (e^{BAB⁻¹}, diagonalization, (3.5), Example 3.8.1); `fundamental` **Fundamental matrix solutions**; `approximations` **Approximations**.

## Concepts

Introduced: `matrix-exponential` (matrix; boxed series), `derivative-of-the-matrix-exponential` (result), `matrix-exponential-solution` (result, Theorem 3.8.1), `exponential-of-commuting-matrices` (result, Theorem 3.8.2), `exponential-of-a-diagonal-matrix` (result), `nilpotent-matrix`, `exponential-of-a-similar-matrix` (result), `diagonalization` (result: A = EDE⁻¹), `matrix-exponential-by-diagonalization` (result, (3.5)), `matrix-exponential-from-a-fundamental-matrix` (result), `truncated-series-for-the-matrix-exponential` (skill). Uses 3.3's fundamental matrix, 3.4's eigenvalue method, the Taylor series of eˣ (a Calculus link, since this book's Taylor series comes in 7.1).

## Colour and referents

A, B, D, E, I, P, X(t), e^{tA} written with `\kA` etc. wear `matrix`; x⃗, b⃗, v⃗_k `vector`; λ_k `eigenvalue`; a, b, c⃗ (arbitrary), k, t in ink. No referents.

## Figures

- `sim-exponential-flow` · Sim (3Blue1Brown survey, item 1, picked by Chen) · `matrix-exponential`, `matrix-exponential-solution`, `derivative-of-the-matrix-exponential` · value add: flow by animation: a matrix chosen from five (a rotation [0 −1; 1 0], a spiral sink [−0.5 −1; 1 −0.5], a saddle [1 0; 0 −1], a shear [0 1; 0 0], Example 3.8.1's [1 2; 2 1]) moves every point of a grid along x⃗′ = Ax⃗; the unit square rides with it, its corner images e^{tA}(1, 0) and e^{tA}(0, 1) drawn as the columns of e^{tA}, whose entries are written live; the shear's square slides into a parallelogram whose top corner moves at constant speed, the t of t e^{λt} in 3.7 · arrows kinematic (the moving grid and corners), the column vectors symbolic · moving: t 0 to T (1 for the book's matrix, whose e^{3t} outruns the frame by then, 2π/2 for the rotation, 2 for the others) in 5 s · choice A (five) · headline "t = 0.50: e^{tA} = [1.32 0.5; 0 1.32]…" with the columns · graph alone · 2D. Changing the matrix morphs the grid back to the identity and replays.

## Extra simulations (rule 15)

A truncated-series Sim (number of terms against t) rejected: the text's two tables of numbers at t = 0.1 and t = 1 make the point with the book's own matrix.

## Derivations (rule 29)

- d/dt e^{at} by differentiating the Taylor series term by term · printed block · built as `drv-derivative-of-the-exponential-series`, replacing the display.
- The check of Theorem 3.8.1 and x⃗(0) = e^{0P}b⃗ = b⃗ · printed thin block · built as `drv-matrix-exponential-solution`, replacing the check display; the x⃗(0) display is its second node and goes into it too, the sentence around it kept.
- e^D for a diagonal D · printed block · built as `drv-exponential-of-a-diagonal-matrix`, replacing the display.
- e^{tA} = e^{3tI + tB} for the matrix [5 4; −1 1] · a worked example · not built.
- (BAB⁻¹)^k = BA^kB⁻¹ and e^{BAB⁻¹} = Be^AB⁻¹ · printed proof · built as `drv-exponential-of-a-similar-matrix`, replacing its displays.
- AE = ED ⇒ A = EDE⁻¹ ⇒ e^{tA} = Ee^{tD}E⁻¹ (3.5) · printed block · built as `drv-matrix-exponential-by-diagonalization`, replacing the AE = ED display; (3.5) stays boxed in the text, the result's number on the last node.
- e^{tA} = X(t)[X(0)]⁻¹ · a claim with one sentence · not built.
- Example 3.8.1 and the approximations · worked numbers · not built.

## Exercises

- Inline: 3.8.1 after `nilpotent-example` (the paragraph ending "This is a good exercise."). AI-marked.
- End: 3.8.2–3.8.12 AI-marked, computed in SymPy (proofs 3.8.6, 3.8.7, 3.8.9 written out); 3.8.101–3.8.105 the book's answers.

## Wanted at chapter level

Anchors: A, P → `3.8-definition`; E, D → `3.8-general`; forms of `matrix-exponential` → `3.8-matexp-box`, `matrix-exponential-by-diagonalization` → `3.8-matexp-diagfundsol`.
