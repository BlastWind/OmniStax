# Plan: 31.4 Nuclear Decay and Conservation Laws

Written before the page was built (root rule 5), under `ch31/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The book prints four headers, Alpha Decay, Beta Decay, Gamma Decay and the
apparatus; the opening paragraphs before Alpha Decay carry none. The first
paragraph is the module's own introduction and stays as the first block. The
agent's headers split the opening and the two long book headers where a new idea
starts, as 30.3 does; the two examples are blocks of their own under `<h3>`.

| Span | Header | What it holds |
|---|---|---|
| `nuclear-decay` | Nuclear decay | The module's introduction: decay as a window on the very small |
| `decay-series` | Parents, daughters and decay series | Parent, daughters, the ²³⁸U series, Figure 31.14, the α and β steps on the chart |
| `alpha-decay` | Alpha Decay | The α decay equations, `sim-decay-modes`, the general rule in ${}^{A}_{Z}\text{X}_{N}$ notation |
| `decay-energy` | Conservation laws and decay energy | Charge, momentum and mass–energy in α decay; $E = (\Delta m)c^2$ |
| `pu-239-alpha-energy` | Example 31.2 · Alpha Decay Energy Found from Nuclear Masses | |
| `beta-decay` | Beta Decay | β⁻ decay of ⁶⁰Co, the neutrino, Fermi and Wu, Figure 31.16 |
| `electron-family` | Electron family number | The new conservation law, the antineutrino, antimatter |
| `beta-minus-decay` | The β⁻ decay equation | The β⁻ rule, the free neutron's decay, charge and nucleon number conserved |
| `co-60-beta-energy` | Example 31.3 · β⁻ Decay Energy from Masses | |
| `positron-decay` | Positron decay and electron capture | β⁺ decay, the positron, the electron's neutrino, ²²Na, $\Delta m$ with $2m_e$, electron capture, why nuclides β decay |
| `gamma-decay` | Gamma Decay | γ decay, ⁶⁰Ni*, other decay modes |

## Concepts

All 22 are the prep pass's rows; the page adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `nuclear-decay` | `nuclear-decay` | used in `decay-series` |
| `parent-nuclide`, `daughter-nuclide`, `decay-series`, `parent-daughter-decay-series` | `decay-series` | parent and daughter used in `alpha-decay`, `beta-minus-decay`, `positron-decay` |
| `alpha-decay-process`, `alpha-decay` | `alpha-decay` | reinforced in `decay-energy` |
| `nuclear-reaction-energy` | `decay-energy` | reinforced in both examples |
| `decay-energy-from-atomic-masses` | `pu-239-alpha-energy` | reinforced in `co-60-beta-energy`, `positron-decay` |
| `beta-decay`, `neutrino` | `beta-decay` | used in `positron-decay` |
| `conservation-of-electron-family-number`, `electron-antineutrino`, `antimatter` | `electron-family` | reinforced in `positron-decay` |
| `beta-minus-decay-and-the-neutrino`, `conservation-of-nucleon-number` | `beta-minus-decay` | reinforced in `co-60-beta-energy`, `positron-decay` |
| `positron-decay`, `positron`, `electron-neutrino`, `electron-capture`, `beta-plus-decay-and-electron-capture` | `positron-decay` | — |
| `gamma-decay` | `gamma-decay` | — |

Earlier concepts used: `chart-of-the-nuclides`, `nuclide-notation`,
`atomic-number`, `mass-number`, `neutron-number` (31.3, 30.3); `alpha-rays`,
`beta-rays`, `alpha-beta-gamma-rays` (31.1); `conservation-of-charge` (18.1),
`conservation-of-momentum` (8.3), `mass-energy-equivalence` (28.6),
`kinetic-energy` (7.2); `atomic-mass-unit`, `atomic-mass` (31.3);
`electron-mass` (30.2); `photon` (29.2).

## Types the page binds

`energy` (decay energies, $E$), `mass` (masses in u and $\Delta m$), `momentum`
(the fragments' momenta in `sim-decay-modes`) and `velocity` ($c$). The chapter
notes give 31.4 `charge` too: the charge tallies are of $Z$, a count, so the
page draws no charge quantity and the word "charge" alone is coloured. $Z$,
$A$, $N$ stay ink. Conventions: protons `F.el('p+')`, neutrons `F.el('n0')`,
the electron and β⁻ `F.el('e-')`, the positron `F.el('e+')`, neutrinos
`F.el('nu')`, γ rays `F.el('gamma')`. The decay arrows of the series chart are
two kinds, `F.cat(0)` for α and `F.cat(1)` for β⁻, named by a legend; a nuclide
is hollow when unstable and filled when stable (`ch31/COLOR.md`).

Referents (the parents and daughters of the decay figure, which the text names
in its equations and examples): `pu-239`, `u-235`, `co-60`, `ni-60`, `na-22`,
`ne-22`, each drawn by `sim-decay-modes` (body in the nucleon convention, name
label in the referent colour).

## Figures

```
sim-decay-series · Figure 31.14 · parent-daughter-decay-series, decay-series, alpha-decay, beta-minus-decay-and-the-neutrino, conservation-of-nucleon-number · value add: variation by choice (pick any of the series' 24 decays and its parent, daughter, half-life and decay equation light up, with the line of constant A it stays on or leaves) and standardisation (the book's chart redrawn on fixed axes with hover names for all 20 nuclides) · arrows: symbolic (decay arrows on a chart, notation, never animated) · still: the chart answers the choice and nothing in it has a clock · choice: the decay (F.select, 24 options from ²³⁸U → ²³⁴Th to ²⁰⁶Tl → ²⁰⁶Pb, a discrete state) · headline: "²³⁸U α decays to ²³⁴Th with a half-life of 4.5 × 10⁹ y." · readout: the step's decay equation in full ᴬ_Z X_N notation; note: "An α step leaves the line A = 238 for the line A = 234." or "A β⁻ step stays on the line A = 234." · graph alone: the chart is the idea, N up and Z across as the book has it, Z 79 to 93 and N 123 to 147 fixed · 2D (rule 28.1)
sim-decay-modes · Figure 31.15 + 31.17 + 31.18 · alpha-decay-process, alpha-decay, beta-minus-decay-and-the-neutrino, beta-plus-decay-and-electron-capture, electron-capture, gamma-decay, nuclear-reaction-energy, conservation-of-nucleon-number · value add: flow by animation (the fragments fly apart from a parent at rest, the α fast and the daughter slow, the positron meeting an electron and becoming two γ rays, the captured electron falling in, which the book freezes as before-and-after pictures with arrows) and variation by choice (one scene for the five modes, so the reader sees which nucleon turns into which and what leaves) · arrows: kinematic (the α, β⁻, β⁺, neutrino and γ leaving; the captured electron falling in) and symbolic (the momentum vectors in the panel at the right) · moving: the parent waits 0.8 s, decays, and the products fly for 3.7 s (a 4.5 s loop holding 1.2 s), because a decay is an event in time and the recoil is motion; the α moves 59 times faster than the ²³⁵U, the true ratio of their masses · choice: mode (α, β⁻, β⁺, EC, γ; a discrete state), each with the book's nuclide: ²³⁹Pu (Example 31.2), ⁶⁰Co (Example 31.3), ²²Na (the text's β⁺ example, and its electron capture, since any β⁺ emitter can capture), ⁶⁰Ni* (the text's γ example) · headline per mode, e.g. "²³⁹Pu emits an α particle, and the ²³⁵U daughter recoils the other way." · readout: the mode's decay equation with the nuclide's A, Z, N, morphing by meaning between modes (parent to parent, daughter to daughter); note for α "Of E = 5.25 MeV released, the α carries 5.16 MeV and the ²³⁵U only 0.09 MeV." and for β⁻ "E = (Δm)c² = 2.82 MeV goes almost all to the β⁻ and the ν̄ₑ; the heavy ⁶⁰Ni barely recoils.", none for the other three (the β⁺ and EC energies are keyed answers of this section's problems) · no graph: a momentum panel at the right draws the fragments' momenta from one tail, adding to zero · 2D, a cut through the nucleus (rule 28.1: the lesson is which particles leave, not an arrangement in space)
photo-fermi-wu · Figure 31.16 · kept photograph: the text names both physicists and points at the figure; the portraits are what the passage is about · still · 2D
```

Nucleus drawing: a packed disc of radius proportional to $A^{1/3}$, about $A^{2/3}$
nucleons showing (the face of a ball), protons and neutrons in the proportion
$Z : N$. In β⁻ one neutron turns into a proton at the moment of decay; in β⁺ and
EC one proton turns into a neutron; in α four rim nucleons (two of each) leave
together.

Labels on `sim-decay-series`: the axis titles N and Z; the selected step's parent
and daughter by name; ²³⁸U and ²⁰⁶Pb as the ends of the series, so at most four
nuclide labels; the line of constant A for the parent (and the daughter's after
an α step) labelled at its upper end. The other 16 nuclides and every half-life
are hover names, since twenty labels would crowd the chart (rule 26.7). Legend: α
decay, β⁻ decay, stable.

Labels on `sim-decay-modes`: "parent" with the parent's name under the nucleus
before the decay, "daughter" with the daughter's name after (the daughter's
recoil is under 10 units, so the label stays put); the light particles move and
are named by the legend at the right (one row per kind the mode draws, at most
six) and by hover; the momentum panel labels its arrows ($p$ with the particle's
name as subscript), at most three.

Widths: 360 for Figure 31.14's original; 200 each for 31.15, 31.17 and 31.18; 200
for the photograph.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_32_04_01a.jpg` (31.14) | original of `sim-decay-series` | replaced |
| `Figure_32_04_02a.jpg` (31.15) | original of `sim-decay-modes` | folded |
| `OSX_CP2e_Figure_32_04_03.jpg` (31.16) | kept, photo row | the text names Fermi and Wu and points at the figure |
| `Figure_32_04_04a.jpg` (31.17) | original of `sim-decay-modes` | folded |
| `Figure_32_04_05a.jpg` (31.18) | original of `sim-decay-modes` | folded |

## Extra simulations considered

- A mass balance for $E = (\Delta m)c^2$, the parent's mass against the products'
  with the sliver $\Delta m$ magnified. Left: the two examples already carry the
  numbers, and the decay figure's note states the energy and its share.
- The β⁻ energy spectrum, the electron's energy varying from decay to decay.
  Left: the book does not teach the spectrum here.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| AP item | 6 + 1 moved in (`fs-id3282097` from 31.1) | 7: 3 with the book's key (`fs-id2639645` keyed for its α part only, `fs-id2007406`, `fs-id2736223`), 4 open with an AI approach (`fs-id1505280`, `fs-id1278852`, `fs-id1615174` with their keys commented out of the CNXML, `fs-id3282097`) | — |
| Conceptual question | 4 | 4 (AI suggested approach) | — |
| Problem | 27 + 2 moved in (`fs-id2659160`, `fs-id3137818` from 31.7) | 16 keyed | 13 unkeyed: `fs-id1907192`, `fs-id1860601`, `fs-id1917574`, `fs-id3010127`, `fs-id3418134`, `fs-id3033134`, `fs-id2442449`, `fs-id2460264`, `fs-id2590538`, `fs-id1893984`, `fs-id1116905`, `fs-id1441536`, `fs-id3121887` |

Errata kept as printed and named in `notes`: `fs-id1278852`'s prompt opens with
the β answer of `fs-id2639645`; `fs-id1615174`'s (c) and (d) are both ¹²₆C;
`fs-id2670256`'s key prints M for Mn; `fs-id3137818`'s key says "conversation
laws". The converter's flattened nuclides (the β⁻, β⁺, EC and γ rules, the AP
items) are rebuilt from the CNXML as ${}^{A}_{Z}\text{X}_{N}$.

No Check Your Understanding box, so nothing inline.

## Wanted at chapter level

- variables row `E` (31.4, concept `nuclear-reaction-energy`) → 31.4-decay-energy; the text, the examples and the Sim's note write `\kE`
- variables row `c` (31.4, `speed-of-light-in-vacuum`) → 31.4-decay-energy
- variables row `m_e` (31.4, `electron-mass`) → 31.4-positron-decay
- variables rows `Z`, `A_nuc`, `N_neut` (31.4, as 31.3's) → 31.4-alpha-decay
- variables row `Δm` → 31.4-decay-energy
- concept `nuclear-reaction-energy`: give it `type: energy`, so the term and `\kE` in this section wear the energy hue
- `eq-alpha-decay` → 31.4-alpha-decay
- `eq-nuclear-reaction-energy` → 31.4-decay-energy
- `eq-beta-minus-decay` → 31.4-beta-minus-decay
- `eq-neutron-decay` → 31.4-beta-minus-decay
- `eq-beta-plus-decay` → 31.4-positron-decay
- `eq-beta-plus-mass-difference` → 31.4-positron-decay
- `eq-electron-capture` → 31.4-positron-decay
- `eq-gamma-decay` → 31.4-gamma-decay
- `ch31/COLOR.md` 31.4 row: the page binds `energy`, `mass`, `momentum`, `velocity`; no `charge` quantity is drawn
- No edge or symbol row needs changing.

Applied by the chapter pass (2026-10-05):

- Variables rows `E`, `c`, `m_e`, `Z`, `A_nuc`, `N_neut` and `f` (a γ ray's frequency in an AP approach) added; `Δm` anchored.
- `nuclear-reaction-energy` is typed `energy`.
- All eight forms anchored as listed.
- `nuclear-decay` is introduced in 31.1, where the book first defines "decay"; its span here is now a use.
