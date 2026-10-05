# Plan: 31.1 Nuclear Radioactivity

Written before the page was built (root rule 5), under `ch31/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The book prints three headers; the untitled opening paragraph and its photograph get an
OmniStax header of their own.

| Span | Header | What it holds |
|---|---|---|
| `radioactivity` | Nuclear radioactivity (OmniStax) | The section's own introduction and Figure 31.2 |
| `discovery` | Discovery of Nuclear Radioactivity | Becquerel, the defined terms, the two pieces of evidence for a nuclear origin, the Curies |
| `alpha-beta-gamma` | Alpha, Beta, and Gamma | The three rays, Figure 31.3, what each ray is, Table 31.1 |
| `ionization-and-range` | Ionization and Range | Ionizing radiation, Figure 31.4, range and its three factors, Figure 31.5, the Collisions note, Figure 31.6 |

## Concepts

All nine are the prep pass's rows; the page adds none.

| Concept | Introduced in |
|---|---|
| `nuclear-radioactivity`, `nuclear-radiation`, `radioactive`, `radiation-is-nuclear-in-origin` | `discovery` |
| `alpha-beta-gamma-rays`, `alpha-rays`, `beta-rays` | `alpha-beta-gamma` |
| `ionizing-radiation`, `range-of-radiation` | `ionization-and-range` |

Earlier concepts used: `nucleus` (30.1) in `radioactivity`; `mass-energy-equivalence`
(28.6), `conservation-of-energy` (7.6), `electron-volt` (19.1), `atomic-spectra` (29.1) in
`discovery`; `magnetic-force-on-a-moving-charge` (22.4), `radius-of-curvature` (22.5),
`electron` , `photon` (29.2), `x-ray-radiation` and `gamma-ray-radiation` (24.3) in
`alpha-beta-gamma`; `ionizing-photons` (29.3), `elastic-collision` (8.4),
`change-in-momentum`, `kinetic-energy` (7.2), `density` (11.2) in `ionization-and-range`.

## Types the page binds

`energy` (E, the energy of a ray), `charge` ($q_e$), `magnetic-field` ($B$ in Figure 31.3),
`velocity` (the speed of each ray), `position` (a radius of curvature, a range, a depth),
`time` (the clock of Figure 31.5), and in prose `force`, `momentum` and `density`. Masses
are written untyped. The rays are particles with an identity, so every one is drawn
through the element palette: an α as two `F.el('p+')` and two `F.el('n0')`, a β as
`F.el('e-')`, a γ as `F.el('gamma')`. No referents: the text points at no particular
source or detector.

## Figures

```
photo-radium-dials · Figure 31.2 · kept photograph: the text points at it ("see Figure 31.2") · still · 2D
sim-rays-in-field · Figure 31.3 · alpha-beta-gamma-rays, alpha-rays, beta-rays · value add: flow by animation and variation by slider (the three rays leave the lead box together and part in the field: the α bends gently one way, the β sharply the other, the γ not at all; raising the field shows that the α, whose charge-to-mass ratio is thousands of times smaller, needs a field many times stronger to bend as much, while the β curls into a circle that never reaches the screen) · arrows: kinematic (the rays are particles flying from the source to the screen) · moving: α, β and γ particles stream out of the slot along their paths at their true relative speeds (the α at a few percent of c crawls, the β and γ flash across), each strike lighting its spot on the screen; time slowed about a billion times · sliders: B (magnetic-field, 0.05 to 1.00 T, default 0.30 T), E (energy, 1.0 to 10.0 MeV, default 5.0 MeV, the same for all three rays) · headline: "A field of $\kBmag = 0.30$ T bends the α to the right and the β to the left, and leaves the γ unbent." (or "…curls the β into a circle that never reaches the screen") · readout: $\kr_{\alpha} = m_{\alpha}\kv_{\alpha}/(2\kqe\kBmag)$ with the numbers, the α classical as the text says; note: the β's radius $\kr_{\beta}$ and how many times tighter it is · graph none · 2D: the book's perspective view is turned to look along the field, B out of the page, so the bending lies in the page (rule 28.1; the lesson is the direction of bending, not an arrangement in space)
photo-dosimeter · Figure 31.4 · kept photograph: the text points at it · still · 2D
sim-range · Figure 31.5 · range-of-radiation, ionizing-radiation · value add: variation by slider and choice and flow by animation (the book's three panels folded into one live scene: α, β and γ of one energy enter one material side by side, ion pairs appear along each track, the α stops first, the β farther, and the γ is only thinned out; the energy slider lengthens every range and the material choice shortens them all; on a log ruler, so the true ranges from micrometers to hundreds of meters stand on one scale) · arrows: kinematic (the book's arrows are rays entering the material) · moving: each ray's front advances into the material, leaving ion pairs behind it, on a clock that runs ten times faster with each step of the ruler (a log clock on a log ruler, so a ray of constant speed moves evenly across the page and a slower ray enters later); the clock is written in the scene · slider: E (energy, 1.0 to 10.0 MeV, default 2.0 MeV); choice: material air, tissue, aluminum, lead (tissue by default), discrete states · headline: "Rays of $\kE = 2.0$ MeV enter tissue: the α stops at 11 μm, the β at 9.5 mm, while the γ rays are only thinned out." · readout: $R_{\alpha} < R_{\beta}$ with the live ranges; note: the depth in which nine tenths of the γ rays are absorbed · graph: the ruler is the graph, depth from 1 μm to 1 km fixed · 2D
photo-bone-scan · Figure 31.6 · kept photograph: the text points at it and it is the tracer image the passage is about · still · 2D
```

Models, stated in the code: α ranges from Geiger's rule in air, $R = 0.318E^{3/2}$ cm, carried
to the other materials by the Bragg–Kleeman rule; β ranges from the Katz–Penfold fit in
g/cm², divided by the density; γ attenuation from tabulated mass attenuation coefficients
at 1, 2, 5 and 10 MeV, interpolated. Each matches the book's Table 31.1 and its "a few
millimeters of tissue or about a meter of air" to within the book's words. In Figure 31.3
the field fills a 5-cm gap above the box and the screen stands 12 cm above the slot; the α
is classical ($\kv \approx 5\%$ of $\kc$), the β relativistic, $\kr = \kp/(|q|\kBmag)$.

Labels, Figure 31.3: α, β, γ at their spots (or at the β's curl), "lead box", "phosphorescent
screen" and the field's "$B$ out of the page", six in all; hover names carry the source, the
pole face and each ray. Figure 31.5: α, β, γ at the lane starts, the two ranges and "90%
absorbed" at the γ's tenth-value depth; hover names carry the ion pairs, the 99% depth and
the material.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_32_01_01a.jpg` (31.2, radium dials) | kept, photo row | the text points at it |
| `Figure_32_01_02a.jpg` (31.3) | original of `sim-rays-in-field` | sketch replaced |
| `Figure_32_01_03a.jpg` (31.4, dosimeter) | kept, photo row | the text points at it |
| `Figure_32_01_04a.jpg` (31.5) | original of `sim-range` | sketch replaced |
| `Figure_32_01_05a.jpg` (31.6, bone scan) | kept, photo row | the text points at it |

The PhET note Beta Decay is dropped (its text describes Build an Atom) and named in `notes`.
Table 31.1 stays in the text as a `div.book-table`.

## Extra simulations considered

- A Becquerel plate darkening under pitchblende in an envelope. Left: it adds no quantity the
  photographs and the prose do not give.

## Exercises

| Kind | In the book | Set here | Elsewhere |
|---|---|---|---|
| AP test prep | 2 | 1 (keyed, choice (c)) | `fs-id3282097` (key commented out) to 31.4 |
| Conceptual question | 9 | 9 (AI suggested approaches) | — |
| Problem | 0 | 1 from 31.7, `fs-id1186653` (a 10-MeV proton in a 2.00-T field, 22.8 cm) | — |

## Wanted at chapter level

- variables rows in 31.1 for the symbols the text, figures and cards write that the prep pass gave no 31.1 row: `c` (`\kc`), `Δp` (`\kdp`), `F` (`\kF`), `Δt` (`\kdt`), `v` (`\kv`), `B_mag` (`\kBmag`), `r_curv` (`\kr`)
- a symbol and 31.1 variables row for the range of radiation, $R$ (position), so the readout of `sim-range` can colour it
- the glossary entry "gamma rays" of 31.1 is a term of `gamma-ray-radiation` (24.3); the chapter pass may add 31.1's definition there or leave it
- the term "decay" (31.1 `discovery`) names no concept; `nuclear-radioactivity` could carry it
- edge `ionizing-radiation` ← `ionizing-photons` (29.3), as the ch29 pass asked
- edges `nuclear-radioactivity` → `mass-energy-equivalence` (28.6), `alpha-beta-gamma-rays` → `photon` (29.2), `radiation-is-nuclear-in-origin` → `atomic-spectra` (29.1), as the chapter notes ask

Applied by the chapter pass (2026-10-05):

- Variables rows `c`, `B_mag`, `r_curv`, `q`, `Δp`, `F`, `Δt`, `v` added with anchors; `E` and `q_e` anchored.
- The range of radiation is `R` (`\kR`, position, `redefines`, concept `range-of-radiation`), anchored at `ionization-and-range`; the readout of `sim-range` now writes $\kR_{\alpha} < \kR_{\beta}$.
- "gamma rays" is already a term of `gamma-ray-radiation` (24.3); left as it stands.
- "decay" is first defined here, so `nuclear-decay` is now introduced in 31.1 at `discovery` and only used in 31.4.
- Edges added: `ionizing-radiation` → `ionizing-photons`, `nuclear-radioactivity` → `mass-energy-equivalence`, `alpha-beta-gamma-rays` → `photon`, `radiation-is-nuclear-in-origin` → `atomic-spectra`; the edges they made redundant were dropped in the chapter's Hasse reduction.
