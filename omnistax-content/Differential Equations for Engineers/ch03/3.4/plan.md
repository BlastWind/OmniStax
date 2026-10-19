# Plan: 3.4 Eigenvalue method (`eigenmethod:section`)

Source: `source.md`. Status: built 2026-10-19 straight through (config 2). Template: Calculus `ch08/8.1`.

Four examples, Theorems 3.4.1 (boxed general solution) and 3.4.2, no figures, four inline exercises (3.4.1–3.4.4), eleven end exercises (4 keyed). Section notes dropped.

## Sub-concepts (the book's headers)

`eigen-intro` (the opening, the trial solution, no header); `eigen-matrix` **Eigenvalues and eigenvectors of a matrix** (Examples 3.4.1–3.4.3, Exercises 3.4.1, 3.4.2 inline); `distinct-real` **The eigenvalue method with distinct real eigenvalues** (Theorem 3.4.1, Example 3.4.4, Exercise 3.4.3 inline, the note on the characteristic equation); `complex-eigen` **Complex eigenvalues** (the complex example, Exercise 3.4.4 inline, Theorem 3.4.2).

## Concepts

Introduced: `eigenvalue` (eigenvalue), `eigenvector` (vector), `characteristic-equation-of-a-matrix` (result, det(A − λI) = 0), `finding-an-eigenvector` (skill), `eigenvalue-method` (result, Theorem 3.4.1, boxed), `complex-conjugate`, `complex-eigenvalue-solutions` (result, Theorem 3.4.2). Uses 3.2's determinant and Theorem 3.2.1, 3.3's superposition and fundamental matrix, Chapter 2's characteristic equation and Euler's formula.

## Colour and referents

λ, λ_k, a ± ib, 1 ± i wear `eigenvalue` (`\klambda`); v⃗, v⃗_k, x⃗, x⃗_k `vector`; x⃗′ `derivative`; P, A, I, X(t) `matrix`; c_k, the components v_1 … in ink. No referents.

## Figures

- `sim-eigenvectors` · Sim · `eigenvalue`, `eigenvector` · value add: variation: a unit vector v⃗ at angle θ and its image Av⃗ from the origin, for a matrix chosen from Example 3.4.1's [2 1; 0 1] and the complex example's [1 1; −1 1]; Av⃗ swings off v⃗'s line for almost every θ and lies along it only at an eigenvector, where Av⃗ = λv⃗ with λ read off; for the complex matrix no θ does it · arrows symbolic (v⃗ and Av⃗) · still: no clock · slider θ (0°–180°, step 1°, dashed circles at the real eigenvector directions, recomputed for the chosen matrix: 0° and 135° for Example 3.4.1, none for the complex one); choice A (Example 3.4.1 / complex example) · headline "At θ = 0°: Av⃗ = 2v⃗, an eigenvector with λ = 2" or the angle between v⃗ and Av⃗ · graph alone · 2D. Rule 15 judged: the text finds eigenvectors by algebra and never shows that a generic vector leaves its line, which is what makes an eigenvector special and why a complex eigenvalue has no real direction.

## Derivations (rule 29)

- The trial solution x⃗ = v⃗e^{λt} gives λv⃗ = Pv⃗ · printed block · built as `drv-eigenvalue-equation`, replacing the two displays and the words between them.
- Av⃗ = λv⃗ ⇒ (A − λI)v⃗ = 0⃗ ⇒ det(A − λI) = 0 · printed display and prose (uses Theorem 3.2.1) · built as `drv-characteristic-equation-of-a-matrix`, after the paragraph that completes it (prose-first, kept).
- The complex pair: 0⃗ = (P − λ̄I)v̄, then x⃗₂ = x̄₁, Re x⃗₁ and Im x⃗₁ as solutions · printed blocks · built as `drv-complex-eigenvalue-solutions` (Derivations ·, three results), standing after the paragraph that completes it; the prose and its displays kept (prose-first).
- Examples 3.4.2–3.4.4 and the expansion of [i, 1]e^{(1−i)t} · worked examples · not built.

## Exercises

- Inline: 3.4.1 and 3.4.2 after `example-3-4-3`; 3.4.3 after `example-3-4-4`; 3.4.4 after the real and imaginary parts (`complex-parts`). AI-marked, each checked in SymPy.
- End: 3.4.5–3.4.11 AI-marked, computed in SymPy; 3.4.101–3.4.104 the book's answers.

## Wanted at chapter level

Anchors: lambda, v_vec → `3.4-eigen-matrix`; forms of `characteristic-equation-of-a-matrix` → `3.4-eigen-matrix`, `eigenvalue-method` → `3.4-theorem-3-4-1`, `complex-eigenvalue-solutions` → `3.4-theorem-3-4-2`.
