# Plan: 32.2 Biological Effects of Ionizing Radiation

Written before the page was built (root rule 5), under `ch32/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The book prints three headers (Radiation Protection, Problem-Solving Strategy, Risk
versus Benefit). The long opening run before the first of them is split at its natural
stops under OmniStax headers.

| Span | Header | What it holds |
|---|---|---|
| `radiation-and-cells` | Radiation and the cell (OmniStax) | The section's own introduction: DNA damage, repair, and why radiation both causes and cures cancer |
| `dose-units` | The rad and the gray (OmniStax) | Dose as deposited energy per kilogram, the rad, the 50.0-kg and 2.00-kg worked doses, the gray |
| `rbe` | Relative biological effectiveness (OmniStax) | RBE, the rem, Figure 32.6, the sievert, Table 32.2, the Misconception Alert, the activity paragraph, Table 32.3 |
| `immediate-effects` | Immediate effects (OmniStax) | Low, moderate and high doses, Table 32.4, `sim-dose`, why blood counts fall first |
| `long-term-effects` | Long-term effects (OmniStax) | Cancer and genetic defects, the linear hypothesis, hormesis |
| `background` | Background radiation (OmniStax) | Cosmic rays, the Earth, food, medical x rays, radon |
| `radiation-protection` | Radiation Protection | Dose limits, Table 32.5, shielding, distance and time, Figure 32.7, Table 32.6 |
| `strategy` | Problem-Solving Strategy | The seven steps and Example 32.1 Dose from Inhaled Plutonium (h3) |
| `risk-versus-benefit` | Risk versus Benefit | Medical doses and the iodine isotopes |

## Concepts

All eighteen are the prep pass's rows; the page adds none.

| Concept | Introduced in |
|---|---|
| `radiation-damages-dna` | `radiation-and-cells` |
| `absorbed-dose-rad-and-gray`, `rad`, `gray` | `dose-units` |
| `relative-biological-effectiveness`, `dose-equivalent-rem-and-sievert`, `rem`, `sievert` | `rbe` |
| `immediate-effects-and-dose-levels`, `low-dose`, `moderate-dose`, `high-dose` | `immediate-effects` |
| `linear-hypothesis-and-long-term-risk`, `hormesis` | `long-term-effects` |
| `background-radiation` | `background` |
| `radiation-protection`, `shielding` | `radiation-protection` |
| `dose-from-a-source` | `strategy` |

Earlier concepts used: `ionizing-radiation` (31.1) in `radiation-and-cells`; `energy`,
`joule`, `kilogram`, `mass`, `electron-volt`, `ionization-energy-to-count` (31.2) in
`dose-units`; `range-of-radiation`, `alpha-rays`, `beta-rays` (31.1),
`gamma-ray-radiation`, `x-ray-radiation` (24.3), `neutron` (31.3), `activity`,
`activity-from-number-and-half-life`, `exponential-decay-law`, `half-life`, `becquerel`,
`curie` (31.5) in `rbe`; `ultraviolet-radiation` (24.3) in `long-term-effects`;
`nuclear-radioactivity` (31.1) in `background`; `x-ray-radiation`,
`intensity-area-ratio` (16.11) in `radiation-protection`; `activity`, `curie`,
`electron-volt` in `strategy`; `half-life` in `risk-versus-benefit`.

## Types the page binds

`dose` (the dose in Gy or rad, and in Sv or rem: the type covers both), `energy`
(deposited energy, the energy of a decay), `mass` (the tissue affected), `activity`
($\kRact$ in Example 32.1), `time` (an exposure, a year, a half-life), `position` (the
distance from a source, a thickness of lead). RBE is a rating and stays ink. No
referents: the page's people are "a person" and "a weapons plant employee", named once
and drawn only in `sim-dose`, where the region, not the person, is what the text points
at. Particles wear the element palette: a γ or x-ray photon `F.el('gamma')`, a β
`F.el('e-')`, a proton `F.el('p+')`, an α two `F.el('p+')` and two `F.el('n0')`, a heavy
ion a cluster of both. The dose bands of Table 32.4 are kinds with no type, `F.cat(0..2)`
with their names.

## Figures

```
sim-ionization · Figure 32.6 · relative-biological-effectiveness, dose-equivalent-rem-and-sievert, range-of-radiation · value add: flow by animation and variation by choice (each ray crosses a row of cells and leaves its ion pairs behind it as it goes; the α stops in the third cell having packed its ionization into a short track, while the γ crosses all nine leaving a few; the choice puts any charged radiation of Table 32.2 on the lower row against the γ above, so the RBE climbs as the track grows denser, and the low-energy β of Conceptual Question 3 stops inside the first cell) · arrows: kinematic (the book's two arrows are rays crossing the cells) · moving: the γ and the chosen ray cross the cells at their true relative speeds, ion pairs appearing behind each; time slowed about 10¹² times · choice (select, a row of six would wrap): the lower ray, X-rays, β above 32 keV, β below 32 keV, protons (1–10 MeV), α rays, heavy ions, discrete states; α by default, as the book draws it · headline: "The α stops inside the third cell; the γ crosses all nine and goes on." (per ray) · readout: $\kdose = (2.00\;\text{rad})(20) = 40.0\;\text{rem}$, the book's 2.00 rad with the chosen RBE; note: the energy each ray leaves per micrometer and how many times the γ's that is · graph none · 2D: a row of cells is a strip (rule 28.1)
sim-dose · Sim · absorbed-dose-rad-and-gray, gray, rad, dose-equivalent-rem-and-sievert, low-dose, moderate-dose, high-dose, immediate-effects-and-dose-levels · value add: variation by slider and choice (the same joule spread through a whole body or packed into a forearm, its ion pairs drawn as dots, so the dose is seen as a density; the dose equivalent placed on a log ruler from 1 mSv to 100 Sv with the low, moderate and high bands and the Table 32.4 effect of the band it lands in) · arrows: none · still: the idea is a ratio, with no time in it · slider: E (energy, 0.10 to 10.0 J, default 1.00 J, a detent at 1.00); choices: tissue, whole body 50.0 kg or forearm 2.00 kg; radiation, γ rays (RBE 1) or α rays (RBE 20) · headline: "Spread through the whole body, $\kE = 1.00$ J is 2.00 rad; packed into the forearm it would be 50.0 rad." · readout: $\kdose = \kE/\km = 1.00\;\text{J}/50.0\;\text{kg} = 0.0200\;\text{Gy} = 2.00\;\text{rad}$; note: times the RBE, the dose in Sv and rem and its band · graph: the log ruler beside the figure, fixed from 1 mSv to 100 Sv (the extremes, 0.10 J in 50.0 kg of γ and 10.0 J in 2.00 kg of α, are 2 mSv and 100 Sv) · 2D
sim-protection · Figure 32.7 · radiation-protection, shielding · value add: flow by animation and variation by slider (the three ways to limit a dose made into the three controls: the exposure time sets how many pulses of x rays leave the tube, the scattered x rays thin out as they spread toward the technician, and the lead in the door stops a fraction set by its thickness; the collimator and the apron stop what heads elsewhere) · arrows: kinematic (the book's wavy arrows are x rays travelling from the tube to the film) · moving: x-ray photons leave the tube through the collimator during the exposure and scatter from the jaw, spreading on rings that the apron and the door cut; time slowed about 10⁹ times on the flight · sliders: t (time, 0.05 to 1.00 s, default 0.20 s, the exposure), d (position, 1.0 to 4.0 m, default 3.0 m, "a few meters"), x (position, 0 to 2.00 mm of lead, default 1.00 mm) · headline: "The scattered x rays thin out as they spread, and $\kx = 1.00$ mm of lead stops 98% of those that reach the door." · readout: the technician's dose against an unshielded person 1 m away for 1 s, $\kdose/\kdose_{1} = (\kt/1\;\text{s})(1\;\text{m}/\kd)^{2}(1/2)^{\kx/0.170\;\text{mm}}$ with the numbers and the result; no note · graph none · 2D, a side view of the book's room
```

Model for `sim-protection`, stated in the code: the dose of scattered x rays falls as the
inverse square of the distance (the spreading of 16.11), in proportion to the exposure
time, and by half for each 0.170 mm of lead, the half-thickness the section's own problem
gives (it is close to lead's half-thickness for a 70-kV dental tube). The ring of dots is
a slice through the spreading shell, so in the plane it thins as $1/\kd$; the readout
carries the $1/\kd^{2}$ of the whole sphere.

Model for `sim-ionization`, stated in the code: cells 15 μm across; linear energy
transfer in water (keV/μm) and range: γ (⁶⁰Co) 0.3, passes; x rays 2, passes; β above
32 keV 0.3, passes; β below 32 keV (20 keV) 2.2, stops at 9 μm; protons (5 MeV) 8, pass;
α (5.23 MeV, the plutonium of Example 32.1) 90, stops at 40 μm; heavy ions (iron, about
1 GeV per nucleon) 150, pass. The marks drawn per cell grow as the square root of the
transfer, so the γ's few and the heavy ion's many both fit on a cell; the note gives the
true numbers. Where Table 32.2 gives a range of RBE (α and heavy ions, 10–20), the
readout takes the higher, 20, as Example 32.1 does; protons take 10 (body). Neutrons
are left out of the choice: they ionize through the nuclei they strike, not along a
track of their own.

Labels: Figure 32.6, the two rays' names at the left of their rows and "cells" once;
hover names carry the cell, its nucleus and an ion pair. `sim-dose`: the region's name and
mass, the three band names, the effect line and the ruler's title; hover names carry
the Table 32.4 rows on the ruler. Figure 32.7: "x-ray tube", "lead collimator", "film",
"lead apron", "lead-lined door" and the bracket $\kd$, six; hover names carry the
patient, the technician and the photons.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_33_02_01a.jpg` (32.6) | original of `sim-ionization` | sketch replaced |
| `Figure_33_02_02a.jpg` (32.7) | original of `sim-protection` | sketch replaced |
| `Figure_33_02_03a.jpg` (shoe-fitting x-ray, protective suits) | kept on the card of `fs-id1357684`, as `config.md` says | the question asks about the two photographs |

The PhET note Alpha Decay is dropped and named in `notes`. Tables 32.2 to 32.6 stay in
the text as `div.book-table`. The stray `****` after "quality factor" and "gray" is
dropped.

## Extra simulations considered

- Example 32.1 as a chain of sliders (activity, time, energy per decay, mass, RBE) ending
  on the ruler of `sim-dose`. Left: the chain is the example's own arithmetic and the
  ruler is already on the page.
- Tables 32.5 and 32.6 as marks on the same ruler. Left: a table reads these numbers
  better, and the ruler would crowd.

## Exercises

| Kind | In the book | Set here | Elsewhere |
|---|---|---|---|
| AP test prep | 2 | 2: `fs-id1541499` keyed (b); `fs-id1556618` unkeyed, open with an AI-marked approach (no options printed) | — |
| Conceptual question | 7 | 7 (AI suggested approaches); `fs-id1357684` carries the shoe-store photographs on its card | — |
| Problem | 8 | 3 keyed: `fs-id3398507` (multi), `fs-id744946`, `fs-id3402426` | `fs-id3119418` (picowave, keyed) to 32.4; unkeyed and left out: `fs-id2583106`, `fs-id3009638`, `fs-id1948689`, `fs-id3094325` |

## Wanted at chapter level

- variables rows in 32.2 for the symbols the text, figures and cards write that the prep pass gave no 32.2 row: `E` (`\kE`, energy, the ionizing energy absorbed), `m` (`\km`, mass, the mass of tissue affected), `R_act` (`\kRact`, activity, the activity of the inhaled plutonium), `t` (`\kt`, time, the exposure time), `d` (`\kd`, position, the distance from the source), `x` (`\kx`, position, the thickness of lead)
- `dose-equivalent-rem-and-sievert` takes no `type`; the notes give `dose` to the dose equivalent as well, so it should carry `type: dose` and its words wear the hue
- anchors: `eq-rad` → 32.2-dose-units, `eq-gray` → 32.2-dose-units, `eq-rem` → 32.2-rbe, `eq-sievert` → 32.2-rbe

Applied by the chapter pass (2026-10-05): `dose` and `RBE` anchored at `32.2-dose-units` and `32.2-rbe`; rows added for `E` and `m` at `32.2-dose-units`, `R_act`, `t`, and also `t_half` and `λ_dec`, which Example 32.1 writes, at `32.2-rbe`, and `d` (`distance`) and `x` (`length`, the lead's thickness) at `32.2-radiation-protection`, both with `redefines`; `dose-equivalent-rem-and-sievert` now carries `type: dose`; the four forms anchored as asked. The caption of Figure 32.6 lost its instruction to choose the lower ray and no longer names the book.
