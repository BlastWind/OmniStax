# Plan: 16.7 Stokes' Theorem (m53990)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-12. Template: `ch01/1.1`.

Four objectives, two opening paragraphs, one theorem with an informal and a special-case proof, Examples 16.73–16.76, four checkpoints (16.61–16.64), eight figures (16.79–16.86), two numbered equations (16.22, 16.23), four Key Concepts, one Key Equation, 50 section exercises (25 keyed), two glossary terms.

## Sub-concepts (page headers)

0. `st-intro`. 1. `stokes` **Stokes' Theorem** (the theorem, Green's theorem as a special case, the proofs with Figures 16.80–16.82, Example 16.73 with Equation 16.22, Checkpoint 16.61). 2. `applying` **Applying Stokes' Theorem** (Example 16.74, surface independence with Equation 16.23, Checkpoint 16.62, Example 16.75, Checkpoint 16.63). 3. `interpretation` **Interpretation of Curl** (circulation per unit area, the paddlewheel, Faraday's law, Example 16.76, Checkpoint 16.64).

## Concept nodes

Introduced: `stokes-theorem` (`eq-stokes-theorem`), `surface-independence` (`eq-surface-independence`), `curl-as-circulation-per-area` (`eq-curl-as-circulation`), `faradays-law` (`eq-faradays-law-differential`). Uses: `greens-theorem`, `orientation-of-a-surface`, `surface-integral-of-a-vector-field`, `curl`, `clairauts-theorem`, `path-independence`, `circulation`.

## Colour

F, G, E, B and curl F wear `vector-field`; S `surface`; C, C_r `curve`; N `vector`; both sides of the theorem `integral`; D `region`. No referents (S₁ and S₂ of Equation 16.23 are drawn as one family in the Stokes figure, told apart by c).

## Figures

- `sim-stokes` · Figure 16.79 + 16.83 · `stokes-theorem`, `surface-independence` · the chapter's value add (config 25), 3D and variation: the surfaces z = c(4 − x² − y²), all bounded by the circle C of radius 2 (c = 1 Example 16.73's paraboloid, c = 0 the disk, c < 0 a bowl), with curl F drawn on the surface; ∮_C F · dr and ∬_S curl F · dS computed live and equal however the surface bends or the field changes · arrows symbolic · still · choice F (⟨y, 2z, x²⟩ of Example 16.73, ⟨−y, x, z⟩, ⟨z, x, y⟩); slider c (−0.6 to 1.1, specials 0 and 1) · readout both integrals and curl F · 3D mathematical, pitch −1.2 to 1.4; no buttons.
- `fig-chopped-surface`, `fig-cancelling-edges`, `fig-shadow`, `fig-complicated-surface` · Figures 16.80, 16.81, 16.82, 16.84 · kept as the book's images: sketches of the proofs and of Example 16.74's surface, which the book says cannot be parameterized.
- `sim-curl-circulation` · Figure 16.85 + 16.86 · `curl-as-circulation-per-area` · 3D and motion: a disk D_r about P₀ with normal N tilted by α in F = ⟨z − (y + y³)/2, x/2, 0⟩ (stand-in; the book draws a generic field), whose curl at P₀ is ⟨0, 1, 1⟩; the circulation per unit area tends to curl F · N as r shrinks, and a paddlewheel on the disk turns at half that rate, fastest at α = 45° · arrows kinematic (the wheel turns) · moving · sliders α (−90° to 90°, special 45°), r (0.1 to 1.4) · readout (1/πr²)∮ F · dr and curl F · N · 3D, pitch ±1.4.

Two WebGL scenes.

## Exercises

Checkpoints 16.61–16.64 (16.64's key corrected under its card). Section exercises 326–375: 25 odd keyed kept; 25 even computations left out. Review 445 held here.

## Extra simulations (rule 15)

None.

## Corrections

The informal proof's "flux form" (circulation form); Example 16.73's lower limit, citations of Equation 16.19 and "hemisphere" (also in Figure 16.83's original caption); Example 16.74's tangent vector; Example 16.75's Equation 16.19 link; Checkpoint 16.64's sign.

## Wanted at chapter level

- forms: `eq-stokes-theorem` → `16.7-fs-id1167793603786`; `eq-surface-independence` → `16.7-fs-id1167793856659`; `eq-curl-as-circulation` → `16.7-curl-circulation`; `eq-faradays-law-differential` → `16.7-faraday-term`.
- variables: G_vec, T_vec, r_vec of 16.7 added.

## Derivations

- Stokes’ Theorem, Proof (informal, by small squares) · score 2 · built as drv-stokes-small-squares
- Stokes’ Theorem, Proof (S the graph of z = g(x,y)) · score 6 · built as drv-stokes-theorem-for-a-graph
- Interpretation of Curl, ‘let D_r be a small disk of radius r’ · score 1 · built as drv-curl-as-circulation
- Interpretation of Curl, Faraday’s law in differential form · score 4 · built as drv-faraday-flux-integrals
