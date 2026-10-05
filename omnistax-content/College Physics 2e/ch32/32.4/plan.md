# Plan: 32.4 Food Irradiation

Written before the page was built (root rule 5), under `ch32/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The book prints no header of its own in this module, so the three blocks carry
OmniStax headers.

| Span | Header | What it holds |
|---|---|---|
| `food-irradiation` | Treating food with radiation (OmniStax) | Food irradiation defined, its uses and the controversy |
| `irradiation-sources` | The sources and no residual radioactivity (OmniStax) | γ rays, x-rays and electrons, no nuclear reactions, ⁶⁰Co and ¹³⁷Cs, Figure 32.10 |
| `food-doses` | Low and high doses (OmniStax) | Doses beyond those fatal to people, the low dose of 1000 Gy, salmonella at 10,000 Gy, high doses; what each does to foods |
| `free-radicals` | Free radicals and radiolytic products (OmniStax) | How irradiation works, the safety question |

## Concepts

All five are the prep pass's rows; the page adds none.

| Concept | Introduced in |
|---|---|
| `food-irradiation` | `food-irradiation` |
| `irradiated-food-is-not-radioactive` | `irradiation-sources` |
| `free-radicals`, `radiolytic-products`, `free-radicals-and-radiolytic-products` | `free-radicals` |

Earlier concepts used: `ionizing-radiation` (31.1) in `food-irradiation` and
`free-radicals`; `alpha-beta-gamma-rays` (31.1), `gamma-decay` (31.4), `photon` (29.3) in
`irradiation-sources`; `absorbed-dose-rad-and-gray`, `gray`, `immediate-effects-and-dose-levels`,
`low-dose`, `high-dose` (32.2) in `food-doses`.

## Types the page binds

`dose` (the doses in Gy, $\kdose$ in the readout), `energy` (the γ, x-ray and electron
energies in MeV, $\kEgam$ in the note) and `time` (the exposure time, $\kt$). No referents:
the plant, its source and its packages are generic. The source rack wears the element
palette of the nuclide chosen, `F.el('Co')` or `F.el('Cs')`, and the γ field
`F.el('gamma')` (`ch32/COLOR.md`). The dose bands are kinds with no type, `F.cat(0..2)` for
low, moderate and high, as in 32.2's `sim-dose`, so a low dose wears one hue on both rows.

## Figures

```
sim-irradiation-plant · Figure 32.10 · food-irradiation, irradiated-food-is-not-radioactive, absorbed-dose-rad-and-gray, low-dose, high-dose · value add: standardisation and variation by slider and choice (the book's plant redrawn as a section through the shielding walls, the source rack raised on its cable from the storage pool into the irradiation room, packages on the conveyor round it; the exposure time drags the package's dose along a log ruler on which a person's low, moderate and high doses lie on one row and food irradiation's low and high doses on the row beneath, so the four orders of magnitude between a low dose to a person and a low dose to food are seen, and the doses fatal to people, LD50 at 4.5 Gy, sit far left of every food dose; the source choice shows why a ¹³⁷Cs plant needs longer for the same dose) · arrows: none (the book's lines are leaders to labels) · still: the idea is a dose for a given exposure, nothing in it runs on a clock (rule 14) · slider: t (time, 1 to 120 min, default 60 min, the caption's hour), with specials at the exposures that give 1000 Gy ("low dose") and 10,000 Gy ("salmonella"), recomputed from the source; choice: source, ⁶⁰Co (1.25 MeV) or ¹³⁷Cs (0.67 MeV), discrete states, ⁶⁰Co by default · headline: "After $\kt = 60$ min beside the ⁶⁰Co source a package has received $\kdose = 10{,}000$ Gy, enough to kill salmonella." (the clause follows the band) · readout: $\kdose = (\text{rate})\,\kt$ with the numbers; note: the γ energy of the chosen source, $\kEgam$, and the fraction of the ⁶⁰Co dose rate it gives · graph below (the scene is horizontal): the log ruler from 0.01 Gy to 10⁵ Gy, fixed (the extremes are 89 Gy for 1 min of ¹³⁷Cs and 20,000 Gy for 120 min of ⁶⁰Co; the left decades hold a person's dose bands) · 2D, a flat section: the book draws a cutaway in perspective, but the lesson is the dose, not the building's shape, and the chapter decided no locked view (rule 28.1)
```

Model for `sim-irradiation-plant`, stated in the code: the caption's hour for 10⁴ Gy is a
⁶⁰Co dose rate of 167 Gy/min. A ¹³⁷Cs source giving off the same number of γ rays, with the
same fraction absorbed (the assumption of Conceptual Question 3), deposits 0.67/1.25 of the
energy each second, 89.3 Gy/min. A person's bands are Table 32.4's in Sv, which for γ rays
(RBE 1) are the same numbers in Gy.

Labels. Five entity labels on the still scene: irradiation room, shielding wall, the
source rack (with its nuclide), storage pool, conveyor. The packages are a kind, labelled
once by "conveyor". The ruler carries its two row names, the LD50 and salmonella marks, the
package's dose above its marker, and a three-entry legend for the bands. Hover names carry
each package, the cable and hoist, and each band with its range.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_33_04_01a.jpg` (32.10) | original of `sim-irradiation-plant`, width 350 | sketch replaced |

## Extra simulations considered

- Radiolysis in a drop of water: a γ ray's track leaving broken molecules and free
  radicals that react into new compounds. Left: the book names no particular radical or
  product, so every step drawn would be OmniStax's chemistry rather than the text's.
- Dose against depth in a pallet for ¹³⁷Cs, ⁶⁰Co, 5-MeV x-rays and 10-MeV electrons. Left:
  the text says only that more energetic radiation penetrates further, and the curves would
  rest on attenuation data the book does not give; 31.1's depth ruler already shows rays
  stopping in matter.

## Exercises

| Kind | In the book | Set here | Elsewhere |
|---|---|---|---|
| Conceptual question | 3 | 3 (AI suggested approaches) | — |
| Problem | 0 | 1 keyed, moved in: `fs-id3119418` (the picowave photon, 1.24 MeV) from 32.2, `source_section` 32.2 | — |

32.3's `fs-id1940974` (ion pairs in irradiated food) is unkeyed and left out by 32.3; it is
named there, not here. No Check Your Understanding box, so nothing inline.

## Wanted at chapter level

- variables row `32.4/dose` (Gy, `absorbed-dose-rad-and-gray`): the dose a package receives, in the readout and headline of `sim-irradiation-plant`
- variables row `32.4/t` (min, `time`): the exposure time of a package in the irradiation room
- variables row `32.4/E_gamma` (MeV, `energy`): the energy of a γ ray from the plant's source, 1.25 MeV for ⁶⁰Co and 0.67 MeV for ¹³⁷Cs
- concept `food-irradiation`: its statement says why food doses are large rather than what food irradiation is; the book's definition is "the treatment of food with ionizing radiation"

Applied by the chapter pass (2026-10-05): rows added at `32.4-irradiation-sources` for `dose` (`absorbed-dose-rad-and-gray`, with `redefines`), `t` and `E_gamma`; `food-irradiation`'s statement now opens on the book's definition, the treatment of food with ionizing radiation.
