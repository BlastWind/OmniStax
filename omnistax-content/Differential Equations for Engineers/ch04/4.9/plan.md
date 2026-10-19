# Plan: 4.9 Steady state temperature and the Laplacian (dirich:section)

Source: `source.md`. Status: plan (prep stage one, 2026-10-19); built straight through per config 2. Template: `ch00/0.2`, this book's 4.6; Calculus `ch16/16.6` for a 3D surface figure. Section notes dropped and named in `notes`.

No book subsection but Exercises, Example 4.9.1, no theorem, equations (4.19)–(4.25) ((4.20)–(4.24) the five tags of one `align`), Figure 4.25 (a surface) and the unnumbered region image `dirichsetup`, two book footnotes (Laplace, Dirichlet), no inline exercise, end Exercises 4.9.1–4.9.11 and 4.9.101–4.9.102 (thirteen, two keyed).

## Sub-concepts (page headers)

The book prints none; three headers are OmniStax's:
- `steady-state` **Steady state in one dimension**: `p#steady-state` with `eq-steady-state-1d`, `p#wire` with `eq-steady-state-wire`.
- `laplacian` **The Laplacian and harmonic functions**: `p#two-dimensions` with `eq-4-19` and `eq-laplacian`, `p#laplace-equation` with `eq-laplace` boxed, `p#harmonic` , `p#dirichlet-problem`, `p#four-edges`.
- `rectangle` **The Dirichlet problem on a rectangle**: `p#setup`, `eq-4-20` … `eq-4-24` (five `div.equation`s), `sim-square-plate` at the region image's place, `p#method`, `drv-separation-laplace` in place of the display chain from X″Y + XY″ = 0 to Y_n, `p#building-blocks` with `eq-dirichlet-rectangle-solution` boxed, Example 4.9.1 (Figure 4.25 cites the figure above), `p#four-problems`, `p#rubber-sheet`.

## Concepts

Introduced: `steady-state-temperature` (definition, `function`; forms `eq-steady-state-1d`, `eq-steady-state-wire`) at `p#steady-state`; `two-dimensional-heat-equation` (definition; form `eq-heat-2d` at (4.19)) and `laplace-operator` (definition, Calculus's id; terms Laplacian; form `eq-laplacian`) at `p#two-dimensions`; `laplaces-equation` (definition, Calculus's id; form `eq-laplace`) at `p#laplace-equation`; `harmonic-function` (definition, Calculus's id, `function`) at `p#harmonic`; `dirichlet-problem` (definition) at `p#dirichlet-problem`; `dirichlet-problem-on-a-rectangle` (result; forms `eq-dirichlet-rectangle-solution`, `eq-dirichlet-rectangle-problem`, `eq-dirichlet-separated`, `eq-dirichlet-Yn`) at `drv-separation-laplace`; `superposing-the-four-edge-problems` (skill) at `p#four-edges` (reinforced at `p#four-problems`).
Reinforced: `heat-equation`, `heat-equation-solution-fixed-ends`, `separation-of-variables-for-pdes`, `superposition-for-pdes`, `classes-of-second-order-pdes` (elliptic), `dirichlet-boundary-conditions`, `eigenvalues-with-zero-endpoint-values`, `sine-series`, `hyperbolic-functions` (0.2, the sinh identity), `square-wave` (Example 4.9.1's sine series of π "same as the square wave").

## Colour and symbols

u, u_n, X, Y, X_n, Y_n, f `function` (\ku, \kun, \kX, \kY, \kXn, \kYn, \kf); u_t, u_xx, u_yy, ∂²u/∂x², ∂²u/∂y², X″, Y″ `derivative` (\kut, \kuxx, \kuyy, \kptwoux, \kptwouy, \kXdprime, \kYdprime); λ, λ_n `eigenvalue`; b_n `sequence`; the rectangle 0 < x < w, 0 < y < h `region`; the series `series`. Ink: x, y, t, k, L, T₁, T₂, A, B, w, h, A_n, B_n, Δ, ∇². Fact: temperature over the plate as a false-colour scale (`facts: ["spectrum"]`). No referents.

## Figures

- `sim-square-plate` · Figure 4.25 (originals `dirichsetup.svg`, `dirichsquareplot.svg` width 720) · `dirichlet-problem-on-a-rectangle`, `dirichlet-problem`, `harmonic-function`, `laplaces-equation` · value add: variation, intuition and depth: the plate 0 < x < w, 0 < y < h as a flat heat map (the region image's rectangle, its three zero edges and u = f(x) on the bottom written on them) in the fact scale, and in a second view (a 2D | 3D choice, archetype 10) the surface u(x, y) over the plate, mathematical 3D, free orbit with the pitch bounded to above the plate (the plate is the ground; beneath it shows nothing), no buttons, the sheet in the same scale with the boundary wire in ink (the rubber-sheet picture of `p#rubber-sheet`); a choice of f(x) (π, Example 4.9.1, default; sin x, Exercise 4.9.1; the plate of 4.9.11 with 100 on two opposite edges, which shows u(1/2, 1/2) = 50 by symmetry), h on a slider (0.5π to 3π, step 0.05π, default π, with w = π fixed: a tall plate's interior cools to 0 fast, a flat one carries the bottom's heat across); a probe the reader drags on the heat map (S.drag on the sheet in 3D) reading u(x, y) · arrows: none · still: a steady state has no clock · choice (view), choice (f), slider h (untyped), drag (x, y) · headline "f = π, h = π: at (1.57, 0.80) the plate is 1.62; the hottest points are on the bottom edge, never inside." · scene alone (the heat map, 2D the default) · 2D with a 3D view (rule 24.8: the book draws the surface in perspective and the arrangement over the plane is the lesson; the heat map carries the numbers, the surface the shape). Readout: u(x, y) = Σ_{odd} (4/n) sin(nx) sinh(n(π − y))/sinh(nπ) with the first term live at the probe.

Book images: the region image and Figure 4.25 are originals above. Extra Sims weighed and left out: the one-dimensional steady state (a line from T₁ to T₂; the text says it); x² − y² and xy as harmonic surfaces (the "no hilltop" remark is one sentence, and the plate figure shows the maximum on the edge); a four-edge superposition builder (Exercises 4.9.9–4.9.10 compute it; the choice of f with the 4.9.11 plate shows two edges).

## Derivations (rule 29)

- Separation of variables on the rectangle (X″Y + XY″ = 0 → the two equations → X_n → Y_n's general solution (4.25) → A_n = 1, B_n → the sinh identity → Y_n) · printed as equations with words · built as `drv-separation-laplace` (eyebrow "Derivation · the Dirichlet problem on a rectangle"): facts: the Laplace equation, u = XY, the homogeneous conditions, the eigenvalues of 4.1, the hyperbolic general solution of Y″ − λY = 0 (0.2's fundamental equation), the identity sinh(α − β) = sinh α cosh β − cosh α sinh β; nodes: the separated equations, X_n, Y_n (with the cap for the identity), u_n at y = 0, the series as the boxed result.
- The 1D steady state u = Ax + B and the wire's line · two displays, one move each · not built.
- Example 4.9.1 · the square wave's sine series with numbers · not built.

## Exercises

- No inline exercise.
- End, unkeyed (AI-marked, checked with SymPy by substituting into Δu = 0 and the edges): 4.9.1 u = sin x sinh(π − y)/sinh π; 4.9.2 u = sin(πx) sinh(π(1 − y))/sinh π − sin(2πx) sinh(2π(1 − y))/sinh 2π; 4.9.3 u = C; 4.9.4 u = y (X(x) + Y(y) with X″ = Y″ = 0 and the four edges: X = 0, Y = y); 4.9.5 u = y + sin x sinh(π − y)/sinh π; 4.9.6 u = Σ b_n sin(nπx/w) sinh(nπy/w)/sinh(nπh/w), b_n the sine coefficients of f on [0, w]; 4.9.7 u = Σ b_n sin(nπy/h) sinh(nπ(w − x)/h)/sinh(nπw/h), b_n = (2/h)∫₀ʰ f(y) sin(nπy/h) dy; 4.9.8 u = Σ b_n sin(nπy/h) sinh(nπx/h)/sinh(nπw/h); 4.9.9 u = sin(9πx) sinh(9π(1 − y))/sinh 9π + sin(2πx) sinh(2πy)/sinh 2π; 4.9.10 u = sin(πx)[sinh(π(1 − y)) + sinh(πy)]/sinh π + sin(πy)[sinh(π(1 − x)) + sinh(πx)]/sinh π; 4.9.11 u(1/2, 1/2) = 50: adding the problem with the roles of the edge pairs swapped gives the constant 100, and the two values at the centre are equal by symmetry (the plate choice of `sim-square-plate` shows it).
- Keyed 4.9.101–4.9.102 with the book's answers, each checked ✓. Shapes: `number` for 4.9.11, `open` otherwise.

## Wanted at chapter level

- Anchors: variables u, u_t, u_xx → `4.9-steady-state`; u_yy, ∂²u/∂x², ∂²u/∂y² → `4.9-two-dimensions`; f → `4.9-eq-4-24`; X, Y, X″, Y″, λ, λ_n, X_n, Y_n → `4.9-drv-separation-laplace`; u_n, b_n → `4.9-building-blocks`. Forms: `eq-steady-state-1d` → `4.9-steady-state`; `eq-steady-state-wire` → `4.9-wire`; `eq-heat-2d` → `4.9-eq-4-19`; `eq-laplacian` → `4.9-two-dimensions`; `eq-laplace` → `4.9-laplace-equation`; `eq-dirichlet-rectangle-problem` → `4.9-eq-4-20`; `eq-dirichlet-separated`, `eq-dirichlet-Yn` → `4.9-drv-separation-laplace`; `eq-dirichlet-rectangle-solution` → `4.9-building-blocks`.
