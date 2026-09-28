# Plan: 29.3 Photon Energies and the Electromagnetic Spectrum

Written before the page was built (root rule 5), under `ch29/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The book prints three headers (Ionizing Radiation, Visible Light, Lower-Energy
Photons); the other headers are OmniStax's, splitting the long first part at its
changes of subject. The three worked examples are `<h3>` spans of their own.

| Span | Header | What it holds |
|---|---|---|
| `ionizing-radiation` | Ionizing Radiation | $\kE = h\kf = h\kc/\klam$, $h$ in eV·s, $hc = 1240$ eV·nm, Figure 29.9, Table 29.1 and the paragraph comparing them |
| `gamma-rays-and-x-rays` | Gamma rays and x rays | The γ-ray paragraph, Figure 29.10, the x-ray paragraph and the Connections note |
| `x-ray-tube` | Producing x rays in a tube | Figure 29.11 + 29.12 and the paragraph on the cathode ray tube |
| `x-ray-photon-energy` | Example 29.2 | 50.0 kV gives 50.0-keV photons, $h\kf = \kq\kV$ |
| `x-ray-spectrum` | The x-ray spectrum | Bremsstrahlung and characteristic x rays |
| `ultraviolet` | Ultraviolet radiation | The UV paragraph |
| `uv-photon-energy` | Example 29.3 | 100-nm vacuum UV, 12.4 eV |
| `visible-light` | Visible Light | Photon energies of visible light, Figure 29.13, transparency |
| `bulb-photons` | Example 29.4 | Photons per second from a 100-W bulb |
| `lower-energy-photons` | Lower-Energy Photons | IR, microwaves, the Misconception Alert, the correspondence principle |

## Concepts

All six are the prep pass's rows; the page adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `photon-energy-in-ev` | `ionizing-radiation` | used in `uv-photon-energy`, `x-ray-photon-energy` |
| `photon-energy-and-radiation-effects` | `ionizing-radiation` | reinforced in `visible-light`, `lower-energy-photons` |
| `ionizing-photons` | `gamma-rays-and-x-rays` | reinforced in `ultraviolet`, `uv-photon-energy` |
| `x-ray-tube-maximum-energy` | `x-ray-photon-energy` | used in `x-ray-spectrum` |
| `x-ray-tube-spectrum` | `x-ray-spectrum` | — |
| `photons-per-second` | `bulb-photons` | — |

Earlier concepts used: `photon-energy` (29.2) in `ionizing-radiation`, `photon-energy-from-wavelength` (29.2) in `uv-photon-energy` and `bulb-photons`, `electron-volt` (19.1) in `x-ray-photon-energy`, `electromagnetic-spectrum` (24.3) in `ionizing-radiation`.

## Types the page binds

`energy`, `frequency`, `position` (the wavelength), `voltage`, `charge` (Figure 29.11 + 29.12's readout writes $\kq\kV$). `power` is left unbound: no figure draws a power (see the extra simulations). Planck's constant, counts of photons and the anode's element are ink. The visible band of Figure 29.9 is drawn in its true colours through one function, `wavelengthColor(nm)`, the same piecewise fit 29.2 uses (rule 7's physical family); every photon outside the visible band is ink with its band's name. An x-ray photon is ink and labelled; an electron is `F.el('e-')`.

## Figures

```
sim-em-spectrum · Figure 29.9 · photon-energy-in-ev, photon-energy-and-radiation-effects, ionizing-photons · value add: variation by slider (one photon walked from radio to γ rays with its energy read against Table 29.1's energies laid on the same axis, so the reader sees where ionization starts) and standardisation · still, nothing in the idea has a clock · slider: log₁₀(f/Hz) (frequency, 0 to 24, 21 by default, the book's γ-ray example; detents at the book's other examples, 14.7 for 580-nm light and 15.5 for 100-nm UV; a dashed circle at 10 eV, the least energy that ionizes) · headline: "A 4.14-MeV photon of γ rays carries enough energy to ionize an atom or molecule." (or "... too little energy to ionize ...") · no graph: the figure is three aligned log scales (f, λ, E in eV) with the bands above and Table 29.1's energies marked on the eV scale · 2D, a relation between quantities (rule 28.1)
photo-rontgen-hand · Figure 29.10 · kept photograph: the text points at it ("See Figure 29.10") and it is the historic image · still · 2D
sim-x-ray-tube · Figure 29.11 + 29.12 · x-ray-tube-maximum-energy, x-ray-tube-spectrum · value add: flow by animation (electrons leave the filament one at a time, accelerate across the tube and each makes one x-ray photon at the anode, and the spectrum builds up from the photons counted, which is how the book says the curve is obtained) and variation by slider and choice (the voltage moves f_max, the anode moves the characteristic peaks) · moving: electrons cross with uniform acceleration (physical time, linear) and each photon's frequency is drawn into the histogram beneath as it is counted, a 6 s loop holding 1.2 s, because the spectrum is a count built up in time · slider: V (voltage, 20 to 100 kV, 50 kV by default, Example 29.2; detents at 25, 50 and 100 kV, the book's values); choice: anode copper (Kα 8.05, Kβ 8.90 keV, K edge 8.98 keV, by default, the book's copper anode), molybdenum (17.5, 19.6, 20.0 keV), tungsten (59.3, 67.2, 69.5 keV), a discrete state; the peaks appear only when qV passes the K edge · headline: "Electrons accelerated through 50.0 kV make x-ray photons of up to 50.0 keV, f_max = 12.1 × 10¹⁸ Hz." · graph below: intensity (relative, no tick values) against f (0 to 25 × 10¹⁸ Hz, fixed; 100 kV gives 24.2), the counted photons as bars and the expected spectrum dashed, f_max marked · 2D, the tube is a flat apparatus drawing
photo-faded-poster · Figure 29.13 · kept photograph: the text points at it ("See Figure 29.13") and it shows the fading the passage explains · still · 2D
```

Labels on sim-x-ray-tube: filament, anode (named with its element), V across the tube, one electron e⁻ and one x-ray photon labelled with its energy; five, under six. On sim-em-spectrum the band names are the frame; Table 29.1's seven entries are too many to letter along one scale, so the scale carries short tags for the four that do not collide (rotation, vibration, red light, ionization) and hover names for all seven.

Figure 29.9 has no width in the CNXML, so `sim-em-spectrum` has empty `widths`; Figure 29.11 + 29.12 keeps 250 and 300.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_30_03_01a-ad02.jpg` (29.9) | original of `sim-em-spectrum` | replaced |
| `Figure_30_03_02a.jpg` (29.10) | kept, photo row | the text points at it |
| `Figure_30_03_03a.jpg` (29.11) | original of `sim-x-ray-tube` | folded |
| `Figure_30_03_04a.jpg` (29.12) | original of `sim-x-ray-tube` | folded |
| `Figure_30_03_05a.jpg` (29.13) | kept, photo row | the text points at it |

## Extra simulations considered

- A bulb's photons per second against wavelength and power (Example 29.4). Left: the count spans twenty powers of ten and nothing drawable shows it better than the example's readout; the γ-ray-to-radio walk of Figure 29.9 already shows the photon energy that sets it. `power` stays unbound.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| AP test prep | 2 | 2 | — |
| Conceptual question | 8 | 8 (AI suggested approaches) | — |
| Problem | 17 | 9 | 8 unkeyed plus Construct Your Own |

The first AP item is keyed (b) and kept as printed, though it asks for a wavelength and offers frequencies (erratum, named in `notes`). The second has its solution commented out of the CNXML, so it is an open item with an AI-marked approach. Unkeyed problems left out: the FM station, the 1.00-eV photon, the visible range 1.63 to 3.26 eV, h in eV·s, the tube with a 0.0103-nm shortest wavelength, the microwave oven antenna, the 650-kHz station's photons, the distance for one photon per square meter, and Construct Your Own Problem.

## Tables

Table 29.1, Representative Energies for Submicroscopic Effects, a `div.book-table` in `ionizing-radiation`.

## Wanted at chapter level

- `eq-planck-constant-ev` → 29.3-ionizing-radiation
- `eq-hc-ev-nm` → 29.3-ionizing-radiation
- `eq-x-ray-maximum-energy` → 29.3-x-ray-photon-energy
- variables `q`, `V_volt` → 29.3-x-ray-photon-energy; `f_max` → 29.3-x-ray-spectrum
- `ch29/COLOR.md` 29.3 row: the page binds `energy`, `frequency`, `position`, `voltage`, `charge`; no `power`.
- No concept, edge or symbol row needs changing.

Applied by the chapter pass (2026-09-28): all three equation anchors and three variable anchors as asked; `ch29/COLOR.md` now gives 29.3 `energy`, `frequency`, `position`, `voltage`, `charge`, with `power` unbound. The edges into `ionizing-photons` and `x-ray-tube-spectrum` from 31.1 and 30.4 belong to those chapters' rows and are left for their chapter passes.
