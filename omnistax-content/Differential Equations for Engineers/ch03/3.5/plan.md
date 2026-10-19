# Plan: 3.5 Two-dimensional systems and their vector fields (`sec:twodimaut`)

Source: `source.md`. Status: built 2026-10-19 straight through (config 2). Template: Calculus `ch08/8.1`, `ch16/16.1` (plane fields).

No examples or theorems; six cases in running prose, equation (3.3), Figures 3.4–3.11, Table 3.1, eight end exercises (3 keyed, 3.5.103's answer with a picture). Section notes dropped.

## Sub-concepts (OmniStax's; the book prints no subsection before Exercises)

`plane-systems` **Systems in the plane** (equation (3.3), the assumptions); `real-cases` **Real eigenvalues** (Cases 1–3, Figures 3.4–3.8); `complex-cases` **Complex eigenvalues** (Cases 4–6, Figures 3.9–3.11); `summary-table` **Summary** (Table 3.1 and the singular and repeated cases).

## Concepts

Introduced: `motion-along-an-eigenvector-line` (result: on the line of v⃗ the derivative is αλv⃗), `source` (terms source, unstable node), `sink` (sink, stable node), `saddle-point`, `center` (term center), `spiral-source`, `spiral-sink`, `behavior-of-planar-linear-systems` (result, Table 3.1). Uses 3.1's vector field and trajectory, 3.4's eigenvalues, eigenvectors and Theorem 3.4.2.

## Colour and referents

x, y as functions of t wear `function` (`\kx`, `\ky`); P `matrix`; λ, ±ib, a ± ib `eigenvalue`; v⃗ `vector`; a, b, c, d the entries, α, in ink; the field `vector-field`, the solutions `curve`. No referents.

## Figures

- `sim-portrait-cases` · Figure 3.4 + 3.5 + 3.6 + 3.7 + 3.8 + 3.9 + 3.10 + 3.11 · `source`, `sink`, `saddle-point`, `center`, `spiral-source`, `spiral-sink`, `motion-along-an-eigenvector-line` · value add: flow by animation: the book's six matrices as a choice (Case 1 source [1 1; 0 2], Case 2 sink, Case 3 saddle [1 1; 0 −2], Case 4 center [0 1; −4 0], Case 5 spiral source [1 1; −4 1], Case 6 spiral sink [−1 −1; 4 −1]); the vector field on [−3, 3]², the eigenvector lines with their direction arrows in the real cases (Figure 3.5's picture), the book's solution curves drawn, and dots riding each curve forward in time so the reader sees the flow out of, into, past and around the origin; the eigenvalues marked in a small complex plane beside the portrait, Table 3.1's row named under it; a change of case morphs field and curves · arrows: the field symbolic, the moving dots kinematic · moving: one pass of 4 s, hold 1 s · choice case (six) · headline "Case 3: eigenvalues 1 and −2, real and opposite signs: a saddle" · graph alone with the eigenvalue plane beside · 2D. Figures 3.4 and 3.5 are the eigenvector lines of Case 1 before the field fills in (the arrival draws them first).
- `sim-portrait-entries` · Sim · `behavior-of-planar-linear-systems`, `characteristic-equation-of-a-matrix` · value add: variation: P = [a b; c d] with its entries on sliders (default Case 1's matrix), the eigenvalues move in the complex plane beside the portrait and the portrait changes type as they cross the imaginary axis, meet on the real axis (repeated), or pass through zero (singular); the trajectories redrawn from fixed seeds · arrows symbolic (field) · still: the lesson is the change with the entries, not a time · sliders a, b, c, d (−3 to 3, step 0.1; dashed circles where the discriminant (a − d)² + 4bc vanishes, where a + d = 0 with ad − bc > 0, and where ad − bc = 0, each solved for the slider from the other three) · headline the eigenvalues and the behavior from Table 3.1, or "singular" or "repeated" · graph alone with the eigenvalue plane · 2D. Rule 15 judged: the text treats six isolated cases; only a continuous walk shows that a node becomes a spiral through a repeated eigenvalue and a saddle a node through a singular matrix, which Exercises 3.5.2–3.5.5 ask about.

## Table

Table 3.1 stays in the text as `div.book-table`.

## Derivations (rule 29)

- [x y]′ = P(αv⃗) = α(Pv⃗) = αλv⃗ · printed display with words · built as `drv-motion-along-an-eigenvector-line`, replacing the display (equation-first).
- The real and imaginary parts in Cases 4–6 · worked computations of 3.4's method · not built.

## Exercises

End: 3.5.1–3.5.5 AI-marked (eigenvalues checked in SymPy; "draw" questions get described answers); 3.5.101–3.5.103 the book's answers (3.5.103 keeps its picture in the answer as an image).

## Wanted at chapter level

Anchors: P → `3.5-plane-systems`; form of `behavior-of-planar-linear-systems` → `3.5-pln-behtab`.
