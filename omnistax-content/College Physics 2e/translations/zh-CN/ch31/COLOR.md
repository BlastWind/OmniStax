# Chapter 31 colour plan

Prepared 2026-09-28 in the chapter's prep pass, beside `config.md`, and brought
under root `RULES.md` item 7 on 2026-10-04. This chapter uses the book's declared
categories and the app's selected palette, as items 7 and 22 require. It declares
two categories of its own and hard-codes no hue.

| Quantity | Category | Treatment |
|---|---|---|
| Activity $R$, the initial activity $R_0$, a count rate | `activity` (new) | One hue; $R_0$ is hollow or dashed. Decays per unit time are not a frequency: nothing repeats |
| Decay constant $\lambda$ | `decay-constant` (new) | One hue; a probability of decay per unit time, not a frequency and not an activity |
| Time $t$, half-life $t_{1/2}$, a lifetime | `time` | One hue; the half-life is a marked interval on the time axis |
| Nuclear reaction energy $E$, binding energy BE and BE/$A$, decay and ionization energies, kinetic and potential energy of an α | `energy` | One hue; BE/$A$ keeps it (an energy per nucleon, a nucleon being a count) |
| Nuclear radius $r$ and $r_0$, range of radiation, barrier thickness, range of the nuclear force | `position` | One hue |
| The masses $m_{\text{p}}$, $m_{\text{n}}$, $m_{\text{e}}$, the mass of a nuclide, the mass difference $\Delta m$ of a decay and the mass defect | `mass` | One hue; a mass written in u or in MeV/$c^2$ keeps it |
| Nuclear density | `density` | One hue |
| Speed of α, β and γ, and $c$ | `velocity` | One hue |
| Momentum of the fragments of a decay | `momentum` | One hue, on the equal and opposite momenta of 31.4's decay figure |
| Charge of a ray or a nucleus, $q_e$ | `charge` | One hue; the sign is told by the label, never a hue |
| The deflecting magnetic field | `magnetic-field` | One hue, in 31.1 |
| Tube and dynode voltages, output current | `voltage`, `current` | In 31.2; `current` in 31.7 for the STM |

The numbers $N$, $Z$, $A$ and $\Delta N$, a fraction left, an abundance and a
count of ion pairs are counts or ratings, as the book's `COLOR.md` says, and stay
in ink.

Of item 7's four ways this chapter leans on the element palette more than any
before it. Every particle with an identity is `F.el`: the proton `F.el('p+')`, the
neutron `F.el('n0')`, the electron and β⁻ `F.el('e-')`, and, since the palette
gained them during the build, the positron `F.el('e+')`, the neutrino `F.el('nu')`
and the γ photon `F.el('gamma')`. An α is drawn as two protons and two neutrons,
never a coloured dot, and a nucleus is a packing of the two nucleon colours. A γ
ray is not visible light and is never painted in a spectral colour. A nuclide on
the chart of the nuclides is a place, not a quantity, and its stable or unstable
state is told by fill (solid or hollow), never by a hue; so is a nucleus of 31.5's
decaying sample. With every colour switch off each figure stays legible from its
labels.

## Bindings as built

| Section | Types its figures and readouts draw | Conventions | Referents |
|---|---|---|---|
| 31.1 | energy, position (the radius of a ray's path, the range $R$), velocity, charge, magnetic-field, time | `p+`, `n0`, `e-`, `gamma` | none |
| 31.2 | energy, voltage, current | `e-`, `gamma` | the wire and the cylinder of the Geiger tube |
| 31.3 | position, density | `p+`, `n0` | none; the chart of the nuclides draws no type |
| 31.4 | momentum, energy, mass, velocity; the decay series draws no type | `p+`, `n0`, `e-`, `e+`, `nu`, `gamma` | the parent and daughter of each decay: ²³⁹Pu and ²³⁵U, ⁶⁰Co and ⁶⁰Ni, ²²Na and ²²Ne |
| 31.5 | time, decay-constant, activity | none | none |
| 31.6 | energy, mass, velocity, position, and time and activity in Figure 31.23 | `p+`, `n0`, `e-`, `gamma` | none |
| 31.7 | energy, position, time, current | `p+`, `n0` | the marble in the bowl |

The text colours more than the figures: 31.1 also binds `force` and `momentum` in
the prose of range, 31.3 `mass`, `volume`, `energy`, `velocity`, `force`, `charge`
and `angle`, and 31.5 `mass` in Example 31.6.
No section binds a referent to a particle: a referent is a nucleus of an example,
and its body keeps the nucleon colours while its name wears the referent's hue.
