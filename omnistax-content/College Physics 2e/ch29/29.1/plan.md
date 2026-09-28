# Plan: 29.1 Quantization of Energy

Written before the page was built (root rule 5), under `ch29/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The module prints two narrative headers, and the page keeps both.

| Span | Header | What it holds |
|---|---|---|
| `plancks-contribution` | Planck’s Contribution | The opening paragraph, Figure 29.3 and the blackbody paragraph, Planck’s oscillator energy, his constant and the step $\Delta E = hf$, the macroscopic analogies, Figure 29.4, and the 0.4 eV infrared example that closes on the correspondence principle |
| `atomic-spectra` | Atomic Spectra | The emission of hot gases, Figure 29.5, and the paragraph on the puzzle of quantized spectra |

## Concepts

All six were staged by the prep pass; the page introduces all six and adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `energy-quantization` | `plancks-contribution` | reinforced in `atomic-spectra` |
| `blackbody-radiation` | `plancks-contribution` | — |
| `planck-oscillator-energy` | `plancks-contribution` | — |
| `quantum-energy-step` | `plancks-contribution` | used in `atomic-spectra` |
| `correspondence-principle` | `plancks-contribution` | — |
| `atomic-spectra-quantized` | `atomic-spectra` | — |

## Types the page binds

`energy`, `frequency`, `temperature`, `intensity` and `position`, as `ch29/COLOR.md`
gives 29.1. Planck’s constant, the integer $n$ and every count are untyped and in
ink. Light is drawn in the colour of its wavelength by `spectral()` (the function
27.1 uses, the one literal colour on the page), never as a type hue. The speed of
light is not written with its macro on this page, so `velocity` is not bound.

## Figures

```
sim-blackbody · Figure 29.3 · blackbody-radiation, energy-quantization · value add: variation by slider, since the book prints three curves at unnamed temperatures and the reader can set any temperature and watch the peak climb and move toward the violet, and standardisation, with the classical prediction drawn beside the measured shape so that the ultraviolet catastrophe the text names is visible · still, because a spectrum is a state of the radiator and has no clock in it · slider: the temperature T (temperature, 2000 to 6000 K, 5000 K by default), with faint curves at 3000, 4000 and 5000 K standing for the book's three · headline: "At 5000 K the spectrum peaks at 580 nm, and the total intensity is 7.7 times that at 3000 K." · graph alone: intensity (intensity) against wavelength (position), 0 to 2500 nm, 0 to 120 MW/(m²·μm), the visible band a strip in its true colours under the axis · 2D, a relation between quantities (rule 28.1)
sim-oscillator-ladder · Sim · planck-oscillator-energy, quantum-energy-step, energy-quantization, correspondence-principle · value add: variation by slider, since the reader sees the allowed energies as a ladder whose rungs are hf apart, and sees the rungs crowd into what looks like a continuum as the frequency falls, which is the correspondence principle · still, because an allowed energy is a state and not a motion · sliders: the frequency f (frequency, 0.10 to 1.20 × 10¹⁴ Hz, 1.00 × 10¹⁴ Hz by default, the book's infrared example) and the state n (untyped, 0 to 6 in whole steps with a detent on each, 2 by default) · headline: "An oscillator of 1.00 × 10¹⁴ Hz can hold only energies 0.414 eV apart, and in the state n = 2 it holds 1.03 eV." · graph: none; an energy axis with the ladder of allowed levels beside a continuous bar for the classical oscillator, which may hold any energy · 2D
photo-planck · Figure 29.4 · kept: the photograph of Max Planck the text sets beside his contribution, with its caption and credit
photo-oxygen-spectrum · Figure 29.5 · kept: the text points at it ("shows an example of an emission spectrum"), and a photograph of a real discharge is the evidence the paragraph argues from
sim-line-spectrum · Sim · atomic-spectra-quantized, quantum-energy-step · value add: variation by choice and slider, since the reader sweeps a wavelength across a continuous spectrum and across hydrogen's line spectrum and reads the energy step ΔE = hf that each wavelength would take, finding light only where the gas has a step · still, because a spectrum has no clock · choice: the source, a hot solid or hydrogen gas (a discrete state, a segmented control, rule 26.1); slider: the wavelength λ (position, 380 to 750 nm, 656 nm by default) with a dashed circle on each of hydrogen's four visible lines (656, 486, 434, 410 nm) while the gas is chosen · headline: "Hydrogen emits at 656 nm, where each atom gives up 1.89 eV." · graph: none; the spectrum as a strip with the cursor on it · 2D
```

Labels: the blackbody graph names the live curve, the classical curve, the peak
and the visible band (four); the ladder names the levels by n only at its
current rung and the one above it, with the ΔE bracket between, and the classical
bar once; the line spectrum names the cursor only. Each figure stays under six.

Readouts: the blackbody figure writes the fourth-power law the text states,
$(\kTemp/3000\ \text{K})^4$; the ladder writes $\kE = (n+\tfrac12)h\kf$ with its
numbers and the step $\kdE = h\kf$ in the note; the line spectrum writes
$\kdE = h\kf$ with the frequency of the cursor.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_30_01_01a.jpg` (Figure 29.3) | Original of `sim-blackbody` | The sketch the simulation replaces |
| `Figure_30_01_02a.jpg` (Figure 29.4) | Kept | Planck’s portrait, beside the paragraph on his work, with its credit |
| `Figure_30_01_03a.jpg` (Figure 29.5) | Kept | The text points at it and it is a real spectrum |

## Extra simulations considered

- A child’s swing with $h$ made $10^{34}$ times larger, from the conceptual
  question. Left: it answers an exercise, and the ladder at its lowest frequency
  already shows the rungs closing up.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| Check Your Understanding | 0 | 0 | — |
| Conceptual question | 5 | 5 | — |
| AP test prep | 2 | 2 | — |
| Problem | 3 | 2 | 1 |

The first AP item is keyed (b) and is a graded choice; the second has its
solution commented out of the CNXML and is an open item with an AI-marked
approach. All five conceptual questions are unkeyed and carry AI-marked
approaches. The HBr problem (`fs-id1316461`) is unkeyed and left out. The key of
the orangutan problem (`fs-id1319731`) prints (a) as $2.21\times10^{34}$ J with its
minus sign lost; the number is set with the sign, since the question allows no
other reading. The PhET link Models of the Hydrogen Atom is dropped.

## Tables

None.

## Wanted at chapter level

- `eq-planck-oscillator-energy` → 29.1-plancks-contribution
- `eq-planck-constant` → 29.1-plancks-contribution
- `eq-quantum-energy-step` → 29.1-plancks-contribution
- Errata: `fs-id1319731` (a), key printed as $2.21\times10^{34}$ J, set as $2.21\times10^{-34}$ J.
- Errata: AP `fs-id1392909` has its solution commented out of the CNXML; set open with an AI approach.
- No concept, edge or symbol row needs changing.

Applied by the chapter pass (2026-09-28): the three equation anchors as asked, and the five variables ($E$, $n$, $h$, $f$, $\Delta E$) on `29.1-plancks-contribution`. The restored minus sign of `fs-id1319731` (a) is kept and recorded in `exploration.md` as an erratum for Chen; the open AP item stands.
