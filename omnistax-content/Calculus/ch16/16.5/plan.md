# Plan: 16.5 Divergence and Curl (m53986)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-12. Template: `ch01/1.1`.

Three objectives, two opening paragraphs, two definitions, five theorems (four proofs), Examples 16.48–16.57, seven checkpoints (16.40–16.46), seven figures (16.50–16.56), two numbered equations (16.16, 16.17), three Key Concepts, four Key Equations, 63 section exercises (31 keyed), two glossary terms.

## Sub-concepts (page headers)

0. `dc-intro`, the two opening paragraphs.
1. `divergence` **Divergence**: the definition (Equation 16.16), ∇ · F, Figures 16.50, 16.51, the elastic circle, Examples 16.48–16.51 (Figures 16.52, 16.53), Gauss's law for magnetism, the two source-free theorems, Green's theorem in terms of divergence, Checkpoints 16.40–16.42.
2. `curl` **Curl**: the paddlewheel (Figure 16.54), the definition (Equation 16.17) and its determinant, Examples 16.52–16.54 (Figure 16.55), Green's theorem in terms of curl, Checkpoints 16.43, 16.44.
3. `using` **Using Divergence and Curl**: div curl F = 0, curl ∇f = 0, the curl test, Examples 16.55–16.57 (Figure 16.56), the Laplace operator, Checkpoints 16.45, 16.46.

## Concept nodes

Introduced: `divergence` (`eq-divergence`, `eq-divergence-nabla`), `divergence-test-for-source-free-fields`, `curl` (`eq-curl`, `eq-curl-nabla`), `divergence-of-the-curl` (`eq-divergence-of-curl`), `curl-of-a-conservative-field` (`eq-curl-of-gradient`), `curl-test-for-a-conservative-field`, `laplace-operator` (`eq-laplace-operator`). Uses: `gradient`, `dot-product`, `source-free-vector-field`, `clairauts-theorem`, `greens-theorem`, `greens-theorem-flux-form`, `cross-product-by-determinant`, `cross-partial-property`, `cross-partial-test`, `harmonic-function`, `laplaces-equation`.

## Colour

F, G, v and curl F wear `vector-field` (`\kcurlF`); div F wears `function` (`\kdivF`); P, Q, R, f `function`; i, j, k `vector`. The elastic circle wears `region`, the paddlewheel ink. No referents.

## Figures

- `sim-elastic-circle` · Figure 16.50 + 16.51 + 16.52 + 16.53 · `divergence` · motion: the text's elastic circle, radius 0.5, carried by the fluid for a field's time in 5 s; it keeps its area in ⟨1, 2⟩ and ⟨−y, x⟩ (16.50), scrunches toward the origin in ⟨−x, −y⟩ from (3, 3) (16.51), grows in ⟨x²y, y − xy²⟩ (Example 16.49, 16.52), and is caught near (1, 4) in ⟨−xy, y⟩ (Example 16.51, 16.53) · arrows kinematic (the circle flows) and symbolic (the field) · moving, the circle's points by RK4 along the field · dropdown F (five fields, default ⟨−x, −y⟩) · readout div F at the start and the area against its start · graph alone · 2D.
- `sim-paddlewheel` · Figure 16.54 + 16.55 · `curl` · motion: a paddlewheel at the dragged point turns at (Q_x − P_y)/2 — clockwise everywhere in Example 16.54's parallel field ⟨y, 0⟩, counterclockwise in ⟨−y, x⟩, still in a constant field and in the whirlpool away from its centre · arrows kinematic (the wheel turns) · moving, the wheel on a 2π-second loop (a whole number of quarter turns) · dropdown F; drag on sliders x₀, y₀ (−3.5 to 3.5, default (1.5, 1.5)) · readout curl F and the spin with its sense · 2D.
- `sim-curl-free-field` · Figure 16.56 · `curl-test-for-a-conservative-field` · 3D visualization: Example 16.57's ⟨yz, xz, xy⟩ in [−2, 2]³, turned freely · still · no controls · readout curl F = 0 · 3D mathematical, pitch ±1.4; no buttons.

One WebGL scene.

## Exercises

- Checkpoints 16.40–16.46. Section exercises 206–268: 31 odd keyed kept; 206, 208, 210 (true or false) and 264 kept with AI approaches; 28 even computations left out. Review 429, 430 (AI) and 441 held here.

## Extra simulations (rule 15)

None.

## Corrections

- Example 16.57's curl is printed with the i-component's derivatives in its j and k components.

## Wanted at chapter level

- forms: `eq-divergence` → `16.5-fs-id1167794139077`; `eq-divergence-nabla` → `16.5-divergence`; `eq-curl` → `16.5-fs-id1167793965993`; `eq-curl-nabla` → `16.5-curl`; `eq-divergence-of-curl` → `16.5-fs-id1167794029307`; `eq-curl-of-gradient` → `16.5-fs-id1167793635932`; `eq-laplace-operator` → `16.5-laplace-term`.
- variables: G_vec of 16.5 added.
