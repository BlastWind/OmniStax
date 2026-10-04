# Chapter 32 colour plan

Prepared 2026-09-28 in the chapter's prep pass, beside `config.md`; brought
under root `RULES.md` item 7 on 2026-10-04, when only the introduction was
built. Colour reaches these pages in item 7's four ways, fact, convention,
referent and category, and where two apply the earlier wins. This file records
what is particular to the chapter; it invents no hue.

## Categories

| Quantity | Type | Treatment |
|---|---|---|
| Absorbed dose (Gy, rad) and dose equivalent (Sv, rem) | `dose` (declared here) | Both are energy per kilogram of tissue, the RBE (ink) the factor between them. A dose is not an energy: it is divided by the mass affected |
| Activity of a source $R$ (Bq, Ci) | `activity` (Chapter 31) | Wherever a readout counts decays per second |
| Half-life, exposure time, confinement time | `time` (Chapter 2) | |
| Energy of a γ ray, of a decay or reaction, BE and BE/$A$, deposited energy, bomb yield | `energy` (Chapter 7) | BE/$A$ keeps it |
| Separation of two nuclei, range, distance from a source, shielding thickness | `position` (Chapter 2) | |
| Mass of the reactants $m_\text{i}$ and products $m_\text{f}$, $m_\text{products}$, the mass destroyed $\Delta m$ | `mass` (Chapter 4) | Wherever a readout converts mass to energy |
| Fuel temperature | `temperature` (Chapter 13) | |
| Average power of a source or reactor | `power` (Chapter 7) | |
| The magnetic field of a tokamak | `magnetic-field` (Chapter 22) | Where the confinement figure draws the field |
| $c$ | `velocity` (Chapter 2) | Where a readout converts mass to energy |

These stay in ink: the RBE, a rating; the numbers $A$, $Z$, $N$ and $x$, a
count of neutrons or fissions, counts; a fraction and a risk.

A word or phrase wears a category when it names a particular one the reader can
point at: the 5.0-mCi activity of a ²⁴Na dose, the 0.42 MeV released in the
first proton–proton reaction, the 6.0-h half-life of ⁹⁹ᵐTc. The kind in general, its unit
and its definition stay ink.

## Facts and conventions

The element palette carries the particles: `F.el('p+')`, `F.el('n0')`,
`F.el('e-')`, `F.el('e+')`, `F.el('nu')` and `F.el('gamma')`, so a positron, a
neutrino and a γ ray have their own palette entries; a nucleus is a packing of
the two nucleon colours, and a named element (U, Pu, Tc, Co) takes `F.el` by
its symbol. A γ ray is never painted in a spectral colour. A glow, a flame or a
fireball drawn in its own colour goes through `F.fact`.

## Referents

Each section lists its own when it is built. Things the text and a figure both
point at take `F.ref`: the two nuclei of a fusion reaction, the fission
fragments FF₁ and FF₂ (whose subscripts name them, so their variables rows take
`ref`), the patient and source of a scan, the tumour and the beams of a
crossfire. Kinds with no physical type that the text never names one by one
(the radiations of the RBE table, the blast, thermal and radiation shares of
Figure 32.29, the three dose levels) take `F.cat(i)` with a label, offset by the
figure's referent count.

The frame of a figure and its labels stay in ink, and with colour coding off
every figure stays legible from its labels.
