# Plan: 29.2 The Photoelectric Effect

Written before the page was built (root rule 5), under `ch29/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The module prints no narrative header, so the four headers are OmniStax's.

| Span | Header | What it holds |
|---|---|---|
| `light-ejects-electrons` | Light that ejects electrons | The opening paragraph, Figure 29.6 and the paragraph on the evacuated tube and its retarding voltage |
| `photons` | Photons, the quanta of EM radiation | Einstein's deduction, $\kE = h\kf$, and the paragraph on EM waves made of photons |
| `photoelectric-properties` | The properties of the photoelectric effect | The five numbered properties, $\kKEe = h\kf - \kBE$, $\kBE = h\kfo$, Figure 29.7 + 29.8 and the paragraph on Einstein and the Nobel Prize |
| `violet-light-on-calcium` | Example 29.1 | The worked example, 420-nm violet light on calcium |

## Concepts

All six are the prep pass's rows; the page adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `photoelectric-effect` | `light-ejects-electrons` | reinforced in `photoelectric-properties` |
| `photon-energy` | `photons` | used in `photoelectric-properties`, `violet-light-on-calcium` |
| `photoelectric-properties` | `photoelectric-properties` | — |
| `photoelectric-equation` | `photoelectric-properties` | used in `violet-light-on-calcium` |
| `binding-energy-threshold` | `photoelectric-properties` | reinforced in `violet-light-on-calcium` |
| `photon-energy-from-wavelength` | `violet-light-on-calcium` | — |

Earlier concepts used: `quantum-energy-step` (29.1) in `photons`, `electron-volt` (19.1) in `light-ejects-electrons`, `c-equals-f-lambda` (24.3) in `violet-light-on-calcium`.

## Types the page binds

`energy`, `frequency`, `position` (the wavelength). `voltage` is left unbound, since no figure draws or reads out a voltage. Planck's constant, the count of photons and the choice of metal are ink. A photon is drawn in the colour of its wavelength (rule 7's physical family): the one colour function `wavelengthColor(nm)`, the usual piecewise visible-spectrum approximation from 380 to 700 nm; below 380 nm the photon is ink and labelled UV. An electron is `F.el('e-')`.

## Figures

```
photo-photoelectric-tube · Figure 29.6 · photoelectric-effect · kept photograph: the text points at it ("a device such as that shown in Figure 29.6") and it is the real apparatus · still · none · — · none · 2D
sim-photoelectric · Figure 29.7 + 29.8 · photon-energy, photoelectric-properties, photoelectric-equation, binding-energy-threshold · value add: flow by animation (photons arrive one at a time and each frees one electron or none, which is the whole argument of properties 1 to 4 and which a still cannot show) and variation by slider (any wavelength on any of six metals, with the book's graph live beneath) · moving: photons fall from the lamp onto the plate at the chosen rate and each electron leaves at the one speed its kinetic energy gives it, a 5 s loop holding 1.2 s, because the idea has a clock in it (ejection without delay, number per unit time) · sliders: the wavelength λ (position, 200 to 700 nm, 420 nm by default, a dashed circle at the metal's threshold wavelength hc/BE), photons per second drawn (untyped, 2 to 12, 6 by default); choice: the metal as a dropdown (calcium 2.71 eV by default, sodium 2.28, potassium 2.24, magnesium 3.68, silver 4.73, gold 4.82 eV, the book's own values), a discrete state (rule 26.1); landing on the threshold circle or crossing it switches the readout between hf − BE and hf < BE as a morph by meaning · headline: "Each 2.96-eV photon frees one electron from calcium with 0.25 eV of kinetic energy." (or "... is below the 2.71-eV binding energy, so no electron leaves.") · graph below: the maximum KE_e against f (0 to 1.6 × 10¹⁵ Hz, 0 to 4 eV, fixed), the metal's line of slope h starting at f₀, the live point on it or on the axis below f₀ · 2D, a relation between quantities and a flat scene (rule 28.1)
```

Labels: lamp, plate (named with its metal and BE), one photon labelled with its E = hf, one electron labelled e⁻ with its KE_e; four in all, under six, and every photon and electron beyond the representative is named by kind only.

The figure opens on Example 29.1: 420-nm light on calcium, 2.96 eV photons and 0.25 eV electrons. The book's 29.7 flashlight of many frequencies is one state of the choice of wavelength rather than a separate drawing; its lesson (E = hf per photon, more photons for more intensity) is the rate slider and the photon label.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_30_02_01a.jpg` (29.6) | kept, photo row | the text points at it |
| `Figure_30_02_02a.jpg` (29.7) | original of `sim-photoelectric` | folded |
| `Figure_30_02_03a.jpg` (29.8) | original of `sim-photoelectric` | folded |

## Extra simulations considered

- A retarding-voltage tube with a current meter, the stopping voltage read from the current. Left: the headline and note already state the stopping voltage, and 29.3's tube is the chapter's voltage figure.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| AP test prep | 2 | 2 | — |
| Conceptual question | 5 | 5 (AI suggested approaches) | — |
| Problem | 16 | 8 | 8 unkeyed |

The first AP item is keyed (c); the second's solution is commented out of the CNXML, so it is an open item with an AI-marked approach. Unkeyed problems left out: potassium's longest wavelength, aluminum's binding energy, gold under 120 nm, uranium under 300 nm, potassium's 0.100-eV electrons, the 2.50-cm flight time, sunlight on sodium, and the second Unreasonable Results item.

## Tables

None.

## Wanted at chapter level

- `eq-photon-energy` → 29.2-photons
- `eq-photoelectric-equation` → 29.2-photoelectric-properties
- `eq-binding-energy-threshold` → 29.2-photoelectric-properties
- `eq-photon-energy-wavelength` → 29.2-violet-light-on-calcium
- variables `KE_e`, `BE`, `f_0` → 29.2-photoelectric-properties; `λ`, `c` → 29.2-violet-light-on-calcium
- `ch29/COLOR.md` 29.2 row: the page binds `energy`, `frequency`, `position` only (no `voltage`).
- No concept, edge or symbol row needs changing.

Applied by the chapter pass (2026-09-28): all four equation anchors and five variable anchors as asked; `ch29/COLOR.md` now gives 29.2 `energy`, `frequency`, `position`.
