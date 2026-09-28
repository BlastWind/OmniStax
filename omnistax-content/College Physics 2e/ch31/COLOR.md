# Chapter 31 colour plan

Prepared 2026-09-28 in the chapter's prep pass, beside `config.md`. This chapter
uses the book's declared types and the app's selected palette, as root rule 7 and
root rule 22 require. It declares two types of its own, hard-codes no hue, and
every page binds only the union of the types its own figures draw.

| Quantity | Type | Treatment |
|---|---|---|
| Activity $R$, the initial activity $R_0$, a count rate | `activity` (new) | One hue; $R_0$ is hollow or dashed. Decays per unit time are not a frequency: nothing repeats |
| Decay constant $\lambda$ | `decay-constant` (new) | One hue; a probability of decay per unit time, not a frequency and not an activity |
| Time $t$, half-life $t_{1/2}$, a lifetime | `time` | One hue; the half-life is a marked interval on the time axis |
| Nuclear reaction energy $E$, binding energy BE and BE/$A$, decay and ionization energies, kinetic and potential energy of an α | `energy` | One hue; BE/$A$ keeps it (an energy per nucleon, a nucleon being a count) |
| Nuclear radius $r$ and $r_0$, range of radiation, barrier thickness, range of the nuclear force | `position` | One hue |
| Nuclear density | `density` | Bound on 31.3 alone |
| Speed of α, β and γ, and $c$ | `velocity` | Bound where a figure draws or states a speed |
| Momentum of the fragments of a decay | `momentum` | Bound on 31.4 if its decay figure draws the equal and opposite momenta |
| Charge of a ray or a nucleus, $q_e$ | `charge` | Bound where a readout counts charge; the sign is told by the label, never a hue |
| The deflecting magnetic field | `magnetic-field` | Bound on 31.1 |
| Tube and dynode voltages, output current | `voltage`, `current` | Bound on 31.2; `current` on 31.7 for the STM |
| Mass, $\Delta m$, $m_p$, $m_n$, $m_e$, the numbers $N$, $Z$, $A$, $\Delta N$, a fraction left, an abundance, a count of ion pairs | Untyped | Ink |

Which section binds what:

| Section | Types bound |
|---|---|
| intro | none |
| 31.1 | `energy`, `position`, `velocity`, `charge`, `magnetic-field` |
| 31.2 | `energy`, `voltage`, `current` |
| 31.3 | `position`, `density`, `energy` |
| 31.4 | `energy`, `momentum`, `velocity`, `charge` |
| 31.5 | `time`, `decay-constant`, `activity` |
| 31.6 | `energy`, `position` |
| 31.7 | `energy`, `position`, `time`, `current` |

Of root rule 7's four families this chapter leans on the element palette more
than any before it. Every particle with an identity is `F.el`: the proton
`F.el('p+')`, the neutron `F.el('n0')` and the electron and β⁻ `F.el('e-')`, so an
α is drawn as two protons and two neutrons, never a coloured dot, and a nucleus
is a packing of the two nucleon colours. The palette has no positron, neutrino
or photon; until it does, a β⁺, a neutrino and a γ are told apart by
`F.cat(i)` in a hue the page has not bound, each named by a label or hover. A γ
ray is not visible light and is never painted in a spectral colour. Type hues
carry the typed quantities above; a nuclide on the chart of the nuclides is a
place, not a quantity, and its stable or unstable state is told by fill (solid or
hollow), never by a hue. Colour-off drops the type hues and keeps the element
and categorical colours, so every figure must stay legible from its labels.
