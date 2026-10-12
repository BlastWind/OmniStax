# Plan: 16.4 Green's Theorem (m53982)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-12. Template: `ch01/1.1`.

Three objectives, two opening paragraphs, two theorems with proofs, Examples 16.38–16.47, six checkpoints (16.34–16.39), eighteen figures (16.32–16.49), three numbered equations (16.13–16.15), one Student Project with a media link, four Key Concepts, three Key Equations, 60 section exercises (30 keyed), two glossary terms.

## Sub-concepts (page headers)

0. `gt-intro`, the two opening paragraphs.
1. `extending` **Extending the Fundamental Theorem of Calculus**: Figure 16.32, Green's theorem named.
2. `circulation` **Circulation Form of Green's Theorem**: the theorem (Equation 16.13), the conservative case, the proof over a rectangle (Figure 16.34), Examples 16.38–16.40, Checkpoints 16.34, 16.35, the area formula (Equation 16.14).
3. `flux` **Flux Form of Green's Theorem**: the theorem (Equation 16.15) and proof, Examples 16.41–16.43, Checkpoint 16.36, source-free fields and stream functions, Example 16.44, Checkpoint 16.37, harmonic potentials, Example 16.45, Checkpoint 16.38.
4. `general` **Green's Theorem on General Regions**: positive orientation, regions with holes (Figures 16.43–16.45), Examples 16.46, 16.47 (Figure 16.46), Checkpoint 16.39, the Student Project (Figures 16.47–16.49) with its ten questions.

## Concept nodes

Introduced: `greens-theorem` (`eq-greens-theorem-circulation`), `area-by-greens-theorem` (`eq-area-by-greens-theorem`), `greens-theorem-flux-form` (`eq-greens-theorem-flux`), `source-free-vector-field`, `stream-function` (`eq-stream-function`), `harmonic-function` (`eq-harmonic-function`), `greens-theorem-on-general-regions` (two forms). Uses: `fundamental-theorem-of-calculus`, `fundamental-theorem-for-line-integrals`, `simply-connected-region`, `circulation`, `cross-partial-test`, `work-done-by-a-vector-field`, `flux-across-a-curve`, `level-curve`, `laplaces-equation`.

## Colour

F, v wear `vector-field`; C and ∂D `curve`; D `region`; P, Q, f, g `function`; N `vector`; both sides of the theorem `integral`, so the boundary integral and the double integral read as one colour on either side of the equals sign. No referents (Figure 16.46's two circles stay the book's image; the plan in `COLOR.md` for them is dropped).

## Figures

- `fig-ftc-segment` · Figure 16.32 · photo, kept as the book's image: a sketch of F′ over [a, b] with no function.
- `sim-greens-circulation` · Figure 16.33 + 16.35 + 16.36 + 16.37 · `greens-theorem`, `greens-theorem-on-general-regions` · variation (the chapter's value add, config 25): a region D (rectangle, ellipse, triangle or annulus) in a field, its boundary C counterclockwise (the annulus's inner circle clockwise); ∮_C P dx + Q dy and ∬_D (Q_x − P_y) dA computed live and written side by side as the reader drags D, resizes it or picks a field; the presets are the section's examples (16.38's rectangle, 16.39's circle, 16.40's ellipse for area, 16.46's annulus, 16.47's whirlpool field, whose two sides disagree when D holds the origin, outside its domain) · arrows symbolic · still · dropdown F (five presets, each setting its region); choice D (four shapes); sliders x₀, y₀ (the centre, also dragged), w, h (0.5 to 6) · readout the two integrals with "=" or "≠" · graph alone · 2D. Default: Example 16.38, −84 = −84.
- `fig-proof-rectangle` · Figure 16.34 · photo, kept as the book's image: the proof's labeled rectangle.
- `sim-greens-flux` · Figure 16.38 + 16.39 + 16.40 + 16.41 · `greens-theorem-flux-form`, `source-free-vector-field` · variation: the same machinery for ∮ F · N ds and ∬ (P_x + Q_y) dA; presets 16.42's ⟨x, y⟩ on a circle, 16.41's triangle (drawn counterclockwise), 16.43's water rectangle (80), and the source-free ⟨y, −x⟩ (flux 0 everywhere) · arrows symbolic · still · dropdown F, choice D, sliders x₀, y₀, w, h · readout both sides · 2D.
- `sim-stream-function` · Figure 16.42 · `stream-function` · variation: ⟨y, −x⟩ over the level circles of g = (x² + y²)/2, F and ∇g at the dragged point, tangent and perpendicular to the level curve, the book's two panels one picture · arrows symbolic · still · drag on sliders a, b (−3 to 3, default (1.5, 1)) · readout F · ∇g = 0 and g(a, b) · 2D.
- `fig-three-holes`, `fig-holes-split`, `fig-annulus-split`, `fig-circle-inside` · Figures 16.43–16.46 · photos, kept as the book's images: sketches of regions and their oriented pieces, no functions.
- `fig-tumor` · Figure 16.47 · photo, kept: the project opens on it, credit kept.
- `fig-planimeter`, `fig-planimeter-analysis` · Figures 16.48, 16.49 · kept as the book's images: the project's questions read them.

Images: checkpoint and exercise images stay in their cards. No WebGL.

## Exercises

- Checkpoints 16.34–16.39; Section exercises 146–205: 30 odd keyed kept, the proof 166 kept with an AI approach, 29 even computations left out. Review 443 (Green's theorem on a circle) held here.

## Extra simulations (rule 15)

- `sim-planimeter` · Sim (seeded by the dropped media link) · `area-by-greens-theorem` · motion: a rolling planimeter traces an ellipse in 6 s, the pivot rolling on the y-axis and the wheel turning by (x/L) dY + l dθ; at the end L × roll is the area · arrows none; kinematic motion of the instrument · moving · no sliders · readout the roll and L × roll beside πab · 2D. Built: the project asks how the wheel's roll measures area, and no figure shows the instrument move.

## Corrections

- "f_x = P and f_x = Q" (f_y = Q); Example 16.45's "a potential function for f" (for F) and f_yy written ∂/∂x; Example 16.41's flux computation written over C and missing its minus sign.

## Wanted at chapter level

- forms: `eq-greens-theorem-circulation` → `16.4-fs-id1167793370454`; `eq-area-by-greens-theorem` → `16.4-fs-id1167793965702`; `eq-greens-theorem-flux` → `16.4-fs-id1167793796153`; `eq-stream-function` → `16.4-source-free-term`; `eq-harmonic-function` → `16.4-harmonic-term`; `eq-greens-theorem-extended`, `eq-greens-theorem-extended-flux` → `16.4-general`.
- `COLOR.md`: 16.4 has no referents.
