# Chapter 32 colour plan

Prepared 2026-09-28 in the chapter's prep pass, beside `config.md`. This chapter
uses the book's declared types and the app's selected palette, as root rule 7 and
root rule 22 require. It declares one type of its own, hard-codes no hue, and
every page binds only the union of the types its own figures draw.

| Quantity | Type | Treatment |
|---|---|---|
| Absorbed dose (Gy, rad) and dose equivalent (Sv, rem) | `dose` (new) | One hue; both are energy per kilogram of tissue, the RBE (untyped) the factor between them. A dose is not an energy: it is divided by the mass affected |
| Activity of a source $R$ (Bq, Ci) | `activity` | Bound where a readout counts decays per second (32.1, 32.2) |
| Half-life, exposure time, confinement time | `time` | One hue |
| Energy of a γ ray, of a decay or reaction, BE and BE/$A$, deposited energy, bomb yield | `energy` | One hue; BE/$A$ keeps it |
| Separation of two nuclei, range, distance from a source, shielding thickness | `position` | One hue |
| Fuel temperature | `temperature` | Bound on 32.5 only |
| Average power of a source or reactor | `power` | Bound where a readout gives watts |
| The magnetic field of a tokamak | `magnetic-field` | Bound on 32.5 if its confinement figure draws the field |
| $c$ | `velocity` | Bound where a readout converts mass to energy |
| Mass, $\Delta m$, RBE, the numbers $A$, $Z$, $N$, $x$, a fraction, a risk, a count of neutrons or fissions | Untyped | Ink |

Which section binds what:

| Section | Types bound |
|---|---|
| intro | none |
| 32.1 | `energy`, `activity`, `time`, `position` |
| 32.2 | `dose`, `energy`, `activity`, `position`, `time` |
| 32.3 | `dose`, `position` |
| 32.4 | `dose`, `energy` |
| 32.5 | `energy`, `position`, `temperature`, `power`, `time` |
| 32.6 | `energy`, `power` |
| 32.7 | `energy` |

Of root rule 7's four families the element palette carries the particles:
`F.el('p+')`, `F.el('n0')`, `F.el('e-')`, `F.el('e+')`, `F.el('nu')` and
`F.el('gamma')`, so a positron, a neutrino and a γ ray have their own palette
entries; a nucleus is a packing of the two nucleon colours, and a named element
(U, Pu, Tc, Co) takes `F.el` by its symbol. A γ ray is never painted in a
spectral colour. Categories with no physical type (the kinds of radiation in the
RBE table, blast, thermal and radiation fractions in Figure 32.29, the three
dose levels) take `F.cat(i)` with a label. Colour-off drops the type hues and
keeps element and categorical colours, so every figure must stay legible from
its labels.
