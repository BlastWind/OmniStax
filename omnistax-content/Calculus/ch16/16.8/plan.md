# Plan: 16.8 The Divergence Theorem (m53991)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-12. Template: `ch01/1.1`.

Three objectives, an opening paragraph, the overview of five theorems, two theorems (with an informal proof and a proof), Examples 16.77–16.81, four checkpoints (16.65–16.68), four figures (16.87–16.90), one numbered equation (16.24), three Key Concepts, one Key Equation, 51 section exercises (25 keyed), the chapter's 25 review exercises (427–451), three glossary terms.

## Sub-concepts (page headers)

1. `overview` **Overview of Theorems**. 2. `stating` **Stating the Divergence Theorem** (the theorem, Equation 16.24, Figure 16.87, the informal proof with Figure 16.88, Example 16.77, Checkpoint 16.65, divergence as flux per unit volume with Figure 16.89). 3. `using` **Using the Divergence Theorem** (Examples 16.78, 16.79 with Figure 16.90, Checkpoints 16.66, 16.67, the interpretation of divergence). 4. `electrostatic` **Application to Electrostatic Fields** (Gauss' law, the inverse-square field, Example 16.80, the flux theorem and its proof, Example 16.81, Checkpoint 16.68).

## Concept nodes

Introduced: `divergence-theorem` (`eq-divergence-theorem`), `divergence-as-flux-per-volume` (`eq-divergence-as-flux`), `gauss-law` (`eq-gauss-law`), `inverse-square-law` (`eq-inverse-square-field`), `flux-across-a-smooth-surface` (`eq-flux-inverse-square`). Uses: the four earlier Fundamental Theorems, `triple-integral`, `surface-integral-of-a-vector-field`, `divergence`.

## Colour

F, v, E, F_r wear `vector-field`; div F `function`; S `surface`; E (the solid) `region`; both sides `integral`. No referents.

## Figures

- `sim-divergence-theorem` · Figure 16.87 · `divergence-theorem` · the chapter's value add (config 25), 3D and variation: a closed surface S (ball, cylinder or cube) about a solid E in a field; ∯_S F · dS and ∭_E div F dV computed live as the solid moves along z or is resized; presets Example 16.78's field and cylinder (3π), Example 16.77's field (div 2), Example 16.79's cube in ⟨−y/z, x/z, 0⟩ (0), and F_r, whose sides disagree (4π against 0) when S encloses the origin · arrows symbolic · still · dropdown F; choice E; sliders size, z₀ · readout both integrals with = or ≠ · 3D, pitch ±1.4.
- `fig-small-box` · Figure 16.88 · kept as the book's image: the informal proof's box and its labels.
- `sim-div-ball` · Figure 16.89 · `divergence-as-flux-per-volume` · 3D and variation: the ball B_r about P = (1, 0, 0.5) in ⟨x³, y, z²⟩ (stand-in: the book draws a generic field); the flux per unit volume tends to div F(P) = 5 as r shrinks · still · slider r (0.05 to 1.5) · 3D.
- `sim-swirl-cube` · Figure 16.90 · `divergence-theorem` · 3D visualization: Example 16.79's field and cube, turned freely; the example reasons from the picture · still · no controls · readout div v = 0.

Three WebGL scenes. Example 16.77's and the checkpoints' unnumbered images stay in place.

## Exercises

Checkpoints 16.65–16.68 (16.68's key corrected under its card). Section exercises 376–426: 25 odd keyed kept; 26 even computations left out. Review exercises (printed here) placed by topic: 427, 431 → 16.1; 437, 449 → 16.2; 428, 433, 435 → 16.3; 443 → 16.4; 429, 430, 441 → 16.5; 439 → 16.6; 445 → 16.7; 447, 451 here; 432, 434, 436, 438, 440, 442, 444, 446, 448, 450 (unkeyed computations) left out.

## Extra simulations (rule 15)

None.

## Corrections

Example 16.77's t_v, integrand and total; Example 16.81's power of ten; Checkpoint 16.68's key power of ten; the link to Example 16.6 for the gravitational field (16.8).

## Wanted at chapter level

- forms: `eq-divergence-theorem` → `16.8-fs-id1167794295927`; `eq-divergence-as-flux` → `16.8-div-flux`; `eq-gauss-law` → `16.8-gauss-term`; `eq-inverse-square-field` → `16.8-inverse-square-term`; `eq-flux-inverse-square` → `16.8-fs-id1167794029720`.
- variables: N_vec, r_vec, t_u_vec, t_v_vec, ∇f of 16.8 added.

## Derivations

- The Divergence Theorem, Proof (informal, by small boxes) · score 2 · built as drv-divergence-small-boxes
- Stating the Divergence Theorem, ‘let B_r be a ball of small radius r centered at P’ · score 1 · built as drv-divergence-as-flux
- Example 16.80 · The Divergence of F_r Is Zero · score 2 · built as drv-divergence-of-inverse-square-field
- Flux across a Smooth Surface, Proof · score 4 · built as drv-flux-of-inverse-square-field
- Application to Electrostatic Fields, Gauss’ law for a point charge · score 1 · built as drv-gauss-law-point-charge
