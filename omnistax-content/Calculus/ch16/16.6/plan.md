# Plan: 16.6 Surface Integrals (m54004)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-12. Template: `ch01/1.1`.

Six objectives, two opening paragraphs, six definitions, Examples 16.58–16.72, fourteen checkpoints (16.47–16.60), twenty-two figures (16.57–16.78), four numbered equations (16.18–16.21), five Key Concepts, two Key Equations, 57 section exercises (29 keyed, four of them the material-set exercises 306–309), twelve glossary terms.

## Sub-concepts (page headers)

0. `si-intro`. 1. `parametric` **Parametric Surfaces** (parameter domain; Examples 16.58–16.61; spheres and graphs; regular and smooth parameterizations; Checkpoints 16.47–16.50). 2. `area` **Surface Area of a Parametric Surface** (grid curves, t_u, t_v, the definition, Equation 16.18; Examples 16.62–16.64; Checkpoints 16.51–16.53). 3. `scalar` **Surface Integral of a Scalar-Valued Function** (definition, Equation 16.19; Examples 16.65–16.68; Checkpoints 16.54–16.56). 4. `orientation` **Orientation of a Surface** (orientable, positive orientation, Example 16.69, Checkpoint 16.57, the Möbius strip). 5. `vector` **Surface Integral of a Vector Field** (mass flux, definition, Equations 16.20, 16.21; Examples 16.70–16.72; flow rate, heat flow; Checkpoints 16.58–16.60).

## Concept nodes

Introduced: `parametric-surface` (`eq-parametric-surface`), `parameter-domain`, `regular-parameterization`, `grid-curves` (`eq-tangent-vectors-of-a-surface`), `surface-area-of-a-parametric-surface` (`eq-surface-area-parametric`), `surface-integral-of-a-scalar-valued-function` (two forms), `orientation-of-a-surface` (`eq-orientation-normal`), `mass-flux` (`eq-mass-flow-rate`), `surface-integral-of-a-vector-field` (two forms), `surface-integral`, `heat-flow` (`eq-heat-flow`). Uses: `line-integral`, `elliptic-paraboloid`, `spherical-coordinate-system`, `tangent-plane`, `cross-product`, `surface-of-revolution`, `riemann-sum`, `scalar-line-integral`, `density-function`, `flux-across-a-curve`, `gradient-in-three-dimensions`.

## Colour

S and r(u, v) wear `surface`; the parameter domain D `region`; grid curves `curve`; t_u, t_v, N `vector` (`\kvectu`, `\kvectv`, `\kvecN`); F, v `vector-field`; f, ρ `function`; ΔS and every surface integral `integral`. No referents (S₁, S₂ of Example 16.67 are told apart by labels).

## Figures

- `sim-param-surfaces` · Figure 16.57 + 16.58 + 16.59 + 16.60 + 16.61 + 16.62 · `parametric-surface`, `parameter-domain`, `grid-curves` · 3D visualization and variation: the section's surfaces (Example 16.58's cylinder, 16.59's paraboloid, 16.60's cone, the sphere of radius 2, the graph 2y = x² + z²) with the two grid curves through r(u₀, v₀), beside a flat drawing of the parameter domain with the grid lines u = u₀ and v = v₀ · arrows none · still · choice S (five); sliders u₀, v₀ over that surface's domain · readout r(u, v) and r(u₀, v₀) · 3D (free orbit, pitch ±1.4) above the 2D domain: the correspondence between lines in D and curves on S is the lesson · no buttons.
- `fig-degenerate` · Figure 16.63 · faithful copy, locked view (kind figure): the "surface" ⟨0, cos v, 1⟩, a segment.
- `fig-smooth-surfaces` · Figure 16.64 · kept as the book's image: a torus and a pyramid side by side, the pyramid with no formula.
- `sim-surface-patch` · Figure 16.65 + 16.66 + 16.67 · `grid-curves`, `surface-area-of-a-parametric-surface` · 3D and variation: a piece of Example 16.59's paraboloid over [u, u + Δ] × [v, v + Δ] with t_u Δu, t_v Δv and their parallelogram in the tangent plane; shrinking Δ, the piece's area and ‖t_u × t_v‖ΔuΔv agree · arrows symbolic · still · sliders u, v, Δ · readout both areas and their ratio · 3D, pitch −0.3 to 1.4; no buttons.
- `sim-cone-area` · Figure 16.68 · `surface-area-of-a-parametric-surface` · variation: Example 16.62's cone with r and h on sliders, a locked painted view (turning adds nothing), readout k = r/h and πr√(h² + r²).
- `fig-revolution-sketch` · Figure 16.69 · kept as the book's image (a sketch of a general surface of revolution), its caption corrected.
- `fig-revolution-x2`, `fig-cylinder-integral`, `fig-sphere-cap` · Figures 16.70, 16.71, 16.72 · faithful copies, locked views: Examples 16.64 (b = 1.2 drawn), 16.66, 16.67.
- `fig-cap-angle` · Figure 16.73 · kept as the book's image: the right triangle of φ.
- `sim-orientation` · Figure 16.74 + 16.75 + 16.76 · `orientation-of-a-surface` · 3D and variation: the outward normals of a sphere (16.74) and a cylinder (Example 16.69, 16.75), and a Möbius strip (16.76); a normal carried round a loop by slider u comes back to itself on the first two and reversed on the strip · arrows symbolic · still · choice S; slider u (0 to 2π, special 2π) · readout N(u) · N(0) · 3D, pitch ±1.4; no buttons.
- `sim-flux-surface` · Figure 16.77 + 16.78 · `surface-integral-of-a-vector-field`, `mass-flux` · 3D and variation: Example 16.71's v = ⟨2x, 2y, z⟩ through the hemisphere of radius 3 cut into n by 2n pieces, v drawn at each; Σ (v · N)ΔS closes on 90π, and ×80 on 7200π · arrows symbolic (v as values) · still · slider n (2 to 12) · readout both sums · 3D, pitch 0 to 1.4 (the hemisphere stands on z = 0).

Four WebGL scenes (param surfaces, patch, orientation, flux); the locked views paint on canvases.

## Exercises

Checkpoints 16.47–16.60. Section exercises 269–325: 29 odd keyed kept (306–309 included, openstax's numbering); 270 and 272 (true or false) kept with AI approaches; 26 even computations left out. Review 439 held here.

## Extra simulations (rule 15)

None.

## Corrections

Example 16.64's θ bound printed π; Figure 16.69's caption "0 ≤ x < 2π"; "scalar line integral" for scalar surface integral; Example 16.67's integrand printed 1 and z, t_θ's u, and a wrong bracket; Example 16.68's t_y and its link to Equation 16.5; "the rate of flow … is ρN"; the "[link]" of Example 16.71.

## Wanted at chapter level

- forms: `eq-parametric-surface` → `16.6-parametric`; `eq-tangent-vectors-of-a-surface` → `16.6-grid-term`; `eq-surface-area-parametric` → `16.6-fs-id1167793991244`; `eq-scalar-surface-integral` → `16.6-fs-id1167794160159`; `eq-scalar-surface-integral-calculation` → `16.6-fs-id1167793757749`; `eq-orientation-normal` → `16.6-orientation-term`; `eq-mass-flow-rate` → `16.6-mass-flux-term`; `eq-flux-integral` → `16.6-fs-id1167793385095`; `eq-flux-integral-calculation` → `16.6-fs-id1167793617076`; `eq-heat-flow` → `16.6-heat-flow-term`.
- variables: r_vec_prime of 16.6 added.

## Derivations

- Surface Area of a Parametric Surface, ‘the area of the parallelogram used to approximate the area of S_ij’ · score 2 · built as drv-area-of-a-surface-piece
- Example 16.62 · Calculating Surface Area (the lateral area of a cone) · score 0 · not built: a worked example that substitutes into Equation 16.18
- Example 16.63 · Calculating Surface Area (the sphere) · score 1 · not built: a worked example that substitutes into Equation 16.18
- Surface Integral of a Scalar-Valued Function, ‘we approximate surface areas ΔS_ij with small pieces of a tangent plane’ · score 0 · built as drv-scalar-surface-integral, ending on Equation 16.19, which now lives in it
- Orientation of a Surface, ‘A portion of the graph of any smooth function z = f(x,y) is also orientable’ · score 2 · built as drv-upward-normal-of-a-graph
- Surface Integral of a Vector Field, the block before Equation 16.21 · score 0 · built as drv-flux-integral-in-parameters; Equation 16.21 is the book’s own restatement and stays as printed

## Added 2026-10-19 (3Blue1Brown-informed changes)

- `sim-sphere-cylinder` · Sim (Example 16.63) · `surface-area-of-a-parametric-surface` · value add: 3D and intuition: the sphere of radius r = 2 inside its circumscribed cylinder; the band φ₁ ≤ φ ≤ φ₂ (in `integral`) and the cylinder strip level with it (in `integral`, fainter) have equal area, ∫∫ r² sin φ dφ dθ = 2πr²(cos φ₁ − cos φ₂) = 2πr Δz, the horizontal projection drawn as dashed guide rays at eight angles; slanted near the poles, upright at the equator, the band trades width for girth, and summed over the sphere it gives the cylinder's side 4πr², the example's answer · arrows: none · still: an area relation read off sliders, no clock · sliders φ (0 to 3, detent 0) and Δφ (0.02 to π), the band ending at π, a special on Δφ at π − φ ("to the pole"); φ = 0 with Δφ = π is the whole sphere · headline: "φ from 0.80 to 1.20: area 8.403 on the sphere and on the cylinder; all the bands make 4πr² = 50.27." · readout: both band areas, printed from one Δz · graph none · mathematical 3D (rule 28.3): the surfaces and the projection are the lesson, a flat drawing cannot show the band and strip side by side round the axis; free orbit, pitch ±1.4; no buttons (no single path or fine part earns spin or zoom; the wheel still zooms). Labels: none on the sheets; hover names name the sphere, cylinder, band and strip with the areas.
