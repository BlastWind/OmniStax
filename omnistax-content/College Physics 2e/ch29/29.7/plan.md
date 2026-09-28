# Plan: 29.7 Probability: The Heisenberg Uncertainty Principle

Written before the page was built (root rule 5), under `ch29/config.md`, which
replaces the per-section stop with a plan left for review (applied as proposed on
2026-09-28, on Chen's instruction to finish the book without check-ins).

## Sub-concepts

The module prints three narrative headers, kept as the page's `<h2>`s; the two
worked examples are `<h3>` spans of their own, and the paragraphs after each
example are spans so that a concept can be introduced where the book says it.

| Span | Header | What it holds |
|---|---|---|
| `probability-distribution` | Probability Distribution | The opening paragraph, Figures 29.21 and 29.22, the probability distribution, and the which-slit argument |
| `heisenberg-uncertainty` | Heisenberg Uncertainty | Measurement affects the system, Figure 29.23 (Heisenberg), $\kdx \approx \klam$, $\kdp \approx h/\klam$, their product and $\kdx\kdp \ge h/4\pi$, and the paragraph on electrons in atoms |
| `uncertainty-example-atom` | Example 29.8 | The electron located to 0.0100 nm |
| `large-objects` | — | Why the principle is not noticed in everyday life (Jupiter) |
| `energy-time-uncertainty` | Heisenberg Uncertainty for Energy and Time | $\kdE\kdt \ge h/4\pi$ and what it means |
| `energy-time-example` | Example 29.9 | The excited state of lifetime $1.0\times10^{-10}$ s |
| `energy-time-consequences` | — | Short-lived particles, the temporary violation of conservation of energy, and Feynman's "What there are, are particles" |

## Concepts

All six were staged by the prep pass; the page adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `probability-distribution` | `probability-distribution` | reinforced in `energy-time-consequences` |
| `measurement-affects-the-system` | `probability-distribution` | reinforced in `heisenberg-uncertainty` |
| `position-momentum-uncertainty` | `heisenberg-uncertainty` | used in `uncertainty-example-atom` |
| `uncertainty-principle-calculation` | `uncertainty-example-atom` | reinforced in `energy-time-example` |
| `uncertainty-negligible-for-large-objects` | `large-objects` | — |
| `energy-time-uncertainty` | `energy-time-uncertainty` | used in `energy-time-example`, reinforced in `energy-time-consequences` |

Earlier concepts used: `de-broglie-wavelength` (29.6) in `probability-distribution`
and `heisenberg-uncertainty`; `double-slit-constructive` (27.3) and
`single-slit-pattern` (27.5) in `probability-distribution`; `correspondence-principle`
(29.1) in `large-objects`.

## Types the page binds

`position` ($\klam$, $\kd$, $\kdx$), `momentum` ($\kdp$), `velocity` ($\kdv$),
`energy` ($\kdE$, $\kKEe$) and `time` ($\kdt$), as `ch29/COLOR.md` gives 29.7.
Planck's constant, a mass, the order $m$, the angle θ and a count of arrivals are
ink. A photon is drawn in the colour of its wavelength through `wavelengthColor`
(the same piecewise fit as 29.2, the one physical colour of rule 7); an electron
is `F.el('e-')`, a proton `F.el('p+')`.

## Figures

```
sim-buildup · Figure 29.21 + 29.22 · probability-distribution, measurement-affects-the-system · value add: flow by animation, since the idea is that particles arrive one at a time at unpredictable places and the pattern exists only in the tally, and variation by choice, since the which-slit argument is two states of one apparatus · moving, particles leave the source one at a time, pass the slits and land; the count grows over a 6 s loop (N ∝ t²) to 2400 and holds; every arrival place is fixed by its index, so the scrubber is exact · slider λ (position, 400 to 700 nm, 490 nm by default, the blue-green of the book's photons); choices: particle (electrons, photons), a discrete state; slits (not watched, watched), a discrete state, the watched state drawing detector coils at the slits and giving the single-slit pattern · headline: "1200 electrons have arrived, each at one definite place, and together they build a double-slit pattern." · graph beside the vertical screen: arrivals per band against sin θ, the predicted distribution drawn over the bars and bending between the double- and single-slit shapes on the choice · 2D, a relation between a count and a place (rule 28.1)
sim-position-momentum · Sim · position-momentum-uncertainty, uncertainty-principle-calculation · value add: variation by slider, since the section's trade-off (a smaller Δx forces a larger Δp) is a curve the reader can walk along, and the book works one point · still, because the principle relates two uncertainties and has no clock · slider Δx (position, 0.005 to 0.200 nm, 0.0100 nm by default, Example 29.8); choice: particle (electron, proton) · headline: "Locating an electron to 0.0100 nm leaves its momentum uncertain by at least 5.28 × 10⁻²⁴ kg·m/s and its velocity by 5.79 × 10⁶ m/s." · graph left (Δp against Δx, the hyperbola Δp = h/4πΔx with the ruled-out region beneath it shaded, a dashed line at the 0.1-nm size of an atom), and beside it an atom drawn to scale with a band Δx wide and the Δv arrow · 2D (rule 28.1)
sim-energy-time · Sim · energy-time-uncertainty, uncertainty-principle-calculation · value add: variation by slider across twenty-three powers of ten, from an atom's excited state (Example 29.9) to a particle living 10⁻²⁵ s with GeV of uncertainty, which the text names but never shows side by side · still, a relation between two uncertainties · slider Δt (time, as a power of ten from 10⁻²⁵ to 10⁻² s, a detent at the book's 1.0 × 10⁻¹⁰ s; its value is written as a time, not as an exponent) · headline: "A state that lives 1.0 × 10⁻¹⁰ s has its energy uncertain by at least 3.3 × 10⁻⁶ eV, far less than a typical atomic excitation of 1 eV." · graph alone, log–log, ΔE against Δt, the line ΔE = h/4πΔt with the ruled-out region beneath, dashed levels at 1 eV, the electron's rest energy 0.511 MeV and 1 GeV · 2D
```

Labels: `sim-buildup` names the source, the two slits, the coils when watched, the
screen and the graph's two axes, and one representative particle in flight; the
thousands of arrivals are a kind, named once. The other two name under six things.

## Photographs

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_30_07_01a-43db.jpg` (29.21) | original of `sim-buildup` | the figure it replaces |
| `Figure_30_07_02a-0d6a.jpg` (29.22) | original of `sim-buildup` | folded into it |
| `Figure_30_07_04a-ef36.jpg` (29.23, Heisenberg) | kept as a photo | the text points at it ("See Figure 29.23") |

## Extra simulations considered

- A wave packet whose width and spread of wavelengths trade off. Left: the book
  argues the principle from $\kdx \approx \klam$ and $\kdp \approx h/\klam$, not
  from Fourier packets, and the figure would teach an idea the page does not.

## Exercises

| Kind | In the book | Set | Left out |
|---|---|---|---|
| Conceptual question | 1 | 1 (AI suggested approach) | — |
| Problem | 10 | 5 (keyed) | 5 unkeyed |
| AP test prep | 0 | — | — |

Left out, unkeyed: the chlorine ion (`fs-id2341151`), the proton at 0.250% of
c (`fs-id1254116`), the nucleus of lifetime 10⁻²⁰ s (`fs-id1309711`), the nuclear
excited state with 2.0 eV (`fs-id2715464`), the derivation of ΔEΔt ≈ h
(`fs-id2668381`). No Check Your Understanding box, so nothing inline.

## Wanted at chapter level

- `eq-position-uncertainty-estimate` → 29.7-heisenberg-uncertainty
- `eq-momentum-uncertainty-estimate` → 29.7-heisenberg-uncertainty
- `eq-uncertainty-product-estimate` → 29.7-heisenberg-uncertainty
- `eq-position-momentum-uncertainty` → 29.7-heisenberg-uncertainty
- `eq-energy-time-uncertainty` → 29.7-energy-time-uncertainty
- variables `Δx`, `Δp` → 29.7-heisenberg-uncertainty; `Δv` → 29.7-uncertainty-example-atom; `ΔE`, `Δt` (29.7 rows) → 29.7-energy-time-uncertainty
- Edge wanted: `probability-distribution` ← `double-slit-constructive` (27.3), since the which-slit argument rests on $d\sin\theta = m\lambda$.
- Errata, kept as printed and named in `notes`: the text says $d\sin\theta = m\lambda$ was developed in Photon Energies and the Electromagnetic Spectrum (it was Wave Optics, 27.3); the stray `****` in two term marks is dropped.
- `fs-id2715464` is also an id in 29.4 (unkeyed there too); it is left out here, so no clash of source ids arises on this page.

Applied by the chapter pass (2026-09-28): all five equation anchors and five variable anchors as asked. The edge `probability-distribution` ← `double-slit-constructive` was already in `book.json` from the prep pass, so nothing was added.
