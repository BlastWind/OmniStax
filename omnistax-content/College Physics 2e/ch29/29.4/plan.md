# Plan: 29.4 Photon Momentum

Written before the page was built (root rule 5), under `ch29/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The book's own two narrative headers, with each worked example a span of its own.

| Span | Header | What it holds |
|---|---|---|
| `measuring-photon-momentum` | Measuring Photon Momentum | Photons as particles, the comet tails (Figure 29.14), the Connections note, Compton scattering, $\kp = h/\klam$, Figure 29.15, why photon momentum is small |
| `electron-photon-momentum` | Example 29.5 | A 500-nm photon and an electron with the same momentum; the space sail, Figure 29.16 |
| `relativistic-photon-momentum` | Relativistic Photon Momentum | $\kE = \kp\kc$ from the relativistic energy, $\kp = \kE/\kc$, the Photon Detectors note |
| `photon-energy-momentum-check` | Example 29.6 | $\kp = \kE/\kc$ for the same photon; the Problem-Solving Suggestion note |

## Concepts

All five are the prep pass's rows; the page adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `photon-momentum` | `measuring-photon-momentum` | used in `electron-photon-momentum` |
| `compton-effect` | `measuring-photon-momentum` | — |
| `photon-momentum-is-small` | `measuring-photon-momentum` | reinforced in `electron-photon-momentum` |
| `photon-momentum-conservation` | `electron-photon-momentum` (the recoiling sail) | — |
| `photon-momentum-and-energy` | `relativistic-photon-momentum` | used in `photon-energy-momentum-check` |

Earlier concepts used: `photon-energy-from-wavelength` (29.2) in `electron-photon-momentum`.

## Types the page binds

`momentum`, `energy`, `position` (the wavelength), `velocity` (the electron's speed and $c$). Planck's constant, the electron's mass and the scattering angle are ink. X-ray photons are outside the visible band, so they are ink with their band named; the visible photon of the second sim is drawn in its wavelength's colour through the chapter's one function `wavelengthColor(nm)` (the same fit as 29.2), and a microwave, infrared or ultraviolet photon is ink. An electron is `F.el('e-')`.

## Figures

```
photo-comet · Figure 29.14 · photon-momentum · kept photograph: the text points at it twice and its photograph half is the evidence; the drawing half is part of the same image · still · none · — · none · 2D
sim-compton · Figure 29.15 · compton-effect, photon-momentum · value add: variation by slider (any angle and any x-ray wavelength, with the momentum triangle p = p′ + pₑ drawn live beside the collision, which the book's sketch only implies) · still: the idea is the before and after of one collision and the vector sum, which a slider shows exactly; a replayed collision would add a clock with nothing on it · sliders: the wavelength λ (position, 2 to 12 pm, 5 pm by default), the scattering angle θ (untyped, 0 to 180°, 90° by default) · headline: "A 248-keV photon scatters through 90° and leaves with 167 keV, and the electron recoils with 81 keV." · graph: none, the momentum triangle beside the scene at one fixed scale (the p arrow of a 2-pm photon is 380 units) · 2D, a relation between vectors in a plane (rule 28.1)
sim-photon-electron · Sim · photon-momentum, photon-momentum-is-small · value add: variation by choice (the photon of four problems of the section, microwave to ultraviolet, with an electron of the same momentum beside it) and standardisation on one log axis of energy, where the five orders of magnitude of Example 29.5 become a visible gap · still: no time in it · choice: the photon (4.00 cm, 2.50 μm, 500 nm by default, 10.0 nm), a discrete set of the book's own wavelengths (rule 26.1) · headline: "A 500-nm photon and an electron moving at 1460 m/s carry the same momentum, 1.33 × 10⁻²⁷ kg·m/s." · graph below: photon E and electron KEₑ on a log energy axis, 10⁻¹⁶ to 10⁴ eV, fixed · 2D
photo-space-sail · Figure 29.16 · photon-momentum-conservation · kept photograph: the text points at it ("See Figure 29.16") and its photograph half is the real sail · still · none · — · none · 2D
```

Labels: sim-compton labels the incoming and scattered photon (λ, λ′), the electron (e⁻) and the three arrows p, p′, pₑ, six in all; sim-photon-electron labels the photon, the electron and the two markers on the energy axis, four. The Compton relation for λ′ is not shown, since the book does not teach it; the headline states λ′ as a number.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_30_04_01a.jpg` (29.14) | kept, photo row | the text points at it; one image holds drawing and photograph |
| `Figure_30_04_02a.jpg` (29.15) | original of `sim-compton` | replaced |
| `Figure_30_04_03a.jpg` (29.16) | kept, photo row | the text points at it; one image holds drawing and photograph |

## Extra simulations considered

- A sail recoiling under a stream of reflected photons, momentum 2p per photon. Left: AP items ask it, and the Compton triangle already shows momentum conserved photon by photon.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| AP test prep | 4 | 4 (2 keyed choices, 2 open with AI approaches) | — |
| Conceptual question | 3 | 3 (AI suggested approaches) | — |
| Problem | 11 | 6 | 5 unkeyed |

Errata kept as printed and named in `notes`: Example 29.5 (c) writes $9.11\times10^{-3}$ kg and 1455 m/s; Example 29.6 writes $(\text{mc})^2$; problem `fs-id2709001` writes "$E=\gamma mc^2 mc^2$" and calls it rest energy.

## Tables

None.

## Wanted at chapter level

- `eq-photon-momentum` → 29.4-measuring-photon-momentum
- `eq-photon-momentum-energy` → 29.4-relativistic-photon-momentum
- variables `p`, `E_prime` → 29.4-measuring-photon-momentum
- No concept, edge or symbol row needs changing.

Applied by the chapter pass (2026-09-28): both equation anchors and both variable anchors as asked; the edges `photon-momentum` ← `relativistic-momentum` and `photon-momentum-and-energy` ← `energy-momentum-relation` (Chapter 28) were added and merged.
