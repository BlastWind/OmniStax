# Plan: 31.2 Radiation Detection and Detectors

Written before the page was built (root rule 5), under `ch31/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The book prints one header, Human Application, over everything after the
opening paragraph; the other four headers are OmniStax's, one per kind of
detector. The opening paragraph is the module's own introduction and stays as
the first block.

| Span | Header | What it holds |
|---|---|---|
| `detecting-radiation` | Detecting radiation | The opening paragraph: radiation is felt by no nerve, so instruments must detect it |
| `human-application` | Human Application | Becquerel's plate and photographic film, Figure 31.7 |
| `geiger-counters` | The Geiger tube | The Geiger tube and counter, Figure 31.8 and `sim-geiger-tube` |
| `scintillators` | Scintillators and photomultipliers | Scintillators, the photomultiplier, Figure 31.9 |
| `solid-state-detectors` | Solid-state detectors | Semiconductor detectors |

## Concepts

All eight are the prep pass's rows; the page adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `radiation-detection-by-ionization` | `detecting-radiation` | reinforced in `human-application`, `geiger-counters` |
| `radiation-detector` | `geiger-counters` | used in `scintillators` |
| `geiger-tube` | `geiger-counters` | used in `solid-state-detectors` |
| `ionization-energy-to-count` | `geiger-counters` | — |
| `scintillator` | `scintillators` | — |
| `scintillator-and-photomultiplier` | `scintillators` | — |
| `photomultiplier` | `scintillators` | — |
| `solid-state-detector` | `solid-state-detectors` | — |

`ionization-energy-to-count` is never stated in the prose; the Geiger tube's ion
pairs are where the text comes nearest, and `sim-geiger-tube` and the keyed
problem state it. Earlier concepts used: `ionizing-radiation` (31.1) in
`detecting-radiation` and `human-application`; `potential-difference` (19.1) and
`electric-current` (20.1) in `geiger-counters`; `photoelectric-effect` (29.2) and
`energy-from-potential-difference` (19.1) in `scintillators`; `electron-volt`
(19.1) in `geiger-counters`.

## Types the page binds

`energy` (the energy deposited, a few eV, 30.0 eV per ion pair), `voltage` (the
tube's voltage) and `current` (the pulse that is counted, the photomultiplier's
output current), as the chapter's 31.2 row gives. Counts of ion pairs and of
electrons are ink. Conventions: electrons `F.el('e-')`; the scintillation photon
`F.el('gamma')`, the palette's photon, labelled; the incoming radiation and the
positive ions are ink and named (a positive ion hollow, an electron filled, told
apart by a legend, never by a hue for the sign). Referents: the Geiger tube's
`cylinder` and `wire`, which the text names three times each and the Sim draws.

## Figures

```
photo-film-badge · Figure 31.7 · kept photograph: the text points at it ("such as seen in Figure 31.7") and it is the detector the passage is about · still · 2D
photo-geiger-counter · Figure 31.8 · kept photograph, whole: the book prints the counter (a) and the tube's schematic (b) as one image, and the text points at (b); the photograph of the counter is kept for (a), and (b) is also drawn as sim-geiger-tube · still · 2D
sim-geiger-tube · Sim · geiger-tube, ionization-energy-to-count, radiation-detection-by-ionization · value add: flow by animation (the radiation crosses the gas, ion pairs form along its track, the voltage sweeps electrons to the wire and positive ions to the cylinder, and their arrival is one pulse of current and one count, where the book's schematic freezes the drift as arrows) and variation by slider (the energy deposited sets how many ion pairs form, N = E/30.0 eV, yet the count is one whatever the energy, which is the text's point that a count carries no information on energy) · arrows: kinematic (the incoming radiation; the electrons and ions drifting to the wire and cylinder) · moving: the particle crosses in 0.9 s, the pairs drift for 0.8 s each and the pulse is counted, a 3.2 s loop holding 1.2 s, because the count is something that happens in time · slider: E (energy, 0.10 to 1.00 MeV, 0.30 MeV by default; not the problem's 0.500 MeV, whose keyed answer the readout would print); choice: V applied or off (voltage, a discrete state: with no voltage the pairs stay where they form and nothing is counted, the text's "a voltage ... sweeps up") · headline: "Ion pairs swept to the wire and the cylinder make one count, for 0.30 MeV as for any energy." or "With no voltage the ion pairs stay where they formed, and nothing is counted." · readout: N = E/(30.0 eV) = 0.30 MeV/30.0 eV = 1.00 × 10⁴ ion pairs; note: each pair drawn stands for 500 (rule 28.4) · no graph: the counter's display carries the pulse of current I against time and the count · 2D, the book's schematic read as a section (rule 28.1; no locked view, as `exploration.md` decides)
sim-photomultiplier · Figure 31.9 · scintillator-and-photomultiplier, photomultiplier, scintillator · value add: flow by animation (the radiation's flash in the scintillator, the photon to the photocathode, and the electrons multiplied dynode by dynode, which the book draws as one bundle of finished paths) and variation by slider (the electrons ejected per electron and the photoelectrons per flash; the output is their product, so it doubles when the light doubles, the text's proportionality) · arrows: kinematic (the incoming radiation, the electron paths down the dynodes, the output pulse) · moving: each stage takes 0.45 s, the cascade a 4.4 s loop holding 1.2 s, because the multiplication is a sequence in time · sliders: photoelectrons per flash (count, 1 to 4, 1 by default, the book's one photon and one photoelectron), electrons ejected per electron (count, 2 to 4, 2 by default, the book's "two or more" and its doubling bundle) · headline: "Six dynodes multiply 1 photoelectron into 64 electrons at the anode." · readout: electrons at the anode = 1 × 2⁶ = 64; note only while a stage has more electrons than are drawn (at most 64 per stage) · graph beside: electrons leaving each stage against the stage (photocathode, dynodes 1 to 6) on a logarithmic axis from 1 to 10⁵ fixed (4 × 4⁶ = 16 384 at the extremes), so the cascade is a straight line whose slope is the multiplication · 2D, the book's schematic read as a section (rule 28.1)
```

Labels on `sim-geiger-tube`: "thin window", "cylinder" and "wire" in their
referent colours with their signs, "radiation" at the track's start (fixed), "V"
at the battery, "counter"; six. Electrons and ions move and are many, so a legend
names them and hover names carry the rest. Labels on `sim-photomultiplier`:
"radiation", "scintillator", "photocathode", "dynodes" (on the first, the rest by
hover), "output pulse"; five. The moving photon and electrons are named by hover.

Widths: 250 for Figure 31.7 and 400 for Figure 31.8 (photo rows); 300 for Figure
31.9's original.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_32_02_01a.jpg` (31.7) | kept, photo row | the text points at it; 31.5's problem cites it |
| `Figure_32_02_02a.jpg` (31.8) | kept whole, photo row | the text points at (b), and (a) is the counter itself; (b) is also drawn live as `sim-geiger-tube` |
| `Figure_32_02_04a.jpg` (31.9) | original of `sim-photomultiplier` | replaced |

## Extra simulations considered

- A solid-state detector, ionization in a reverse-biased junction. Left: the book
  has not taught the junction, and the Geiger Sim already shows charge freed by
  radiation and swept by a voltage.
- Film darkening against exposure behind different absorbers. Left: the text
  gives no relation to draw.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| Conceptual question | 1 | 1 (AI suggested approach) | — |
| Problem | 4 | 1 (`fs-id2437827`, keyed 1.67 × 10⁴) | 3 unkeyed: `eip-144`, `eip-811`, `eip-405` |

No AP items, no Check Your Understanding box, no exercise moves in or out.

## Wanted at chapter level

- variables row `E` → 31.2-geiger-counters (the energy deposited; the Sim's slider and readout write `\kE`, and the prep pass gave 31.2 no variables)
- variables row `V_volt` → 31.2-geiger-counters, if the chapter pass gives the Sim's choice a symbol row
- `ch31/COLOR.md` 31.2 row: the page binds `energy`, `voltage`, `current`, as given
- No concept, edge or symbol row needs changing.

Applied by the chapter pass (2026-10-05):

- Variables rows `E` and `V_volt` added at `geiger-counters`, and `f` (the photon of a conceptual answer) at `scintillators`.
- `ch31/COLOR.md` records the bindings as built.
