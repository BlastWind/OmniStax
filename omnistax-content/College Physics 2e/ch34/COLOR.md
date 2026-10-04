# Chapter 34 colour plan

Prepared 2026-09-28 in the chapter's prep pass, beside `config.md`. This chapter
uses the book's declared types and the app's selected palette, as root rule 7 and
root rule 22 require. It declares no type of its own.

| Quantity | Type | Treatment |
|---|---|---|
| A galaxy's recession velocity $v$, a star's orbital speed, $c$ | `velocity` | One hue; $c$ is `\kc` |
| A galaxy's distance $d$, a radius from a galactic center, $R_{\text{S}}$, a wavelength $\lambda$, a string's length | `position` | One hue; $R_{\text{S}}$ is `\kRS` |
| The temperature of the CMBR and of the early universe, $T_{\text{c}}$ of a superconductor | `temperature` | `\kTempc` for $T_{\text{c}}$; never a tint on a body |
| Average particle energy of an epoch, a photon's energy | `energy` | Coloured where a readout states it |
| Time after the Big Bang, look-back time | `time` | One hue |
| The elevator's acceleration | `acceleration` | 34.2 only |
| The critical density $\rho_{\text{c}}$, an average density of the universe | `density` | `\krhoc` |
| Intensity of the CMBR spectrum | `intensity` | 34.1 only, where the spectrum is drawn |
| Mass $M$, $G$, $H_{0}$, resistivity $\rho$, an angle, a count, a ratio to the critical density | Untyped | Ink |

Which section colours what:

| Section | Types coloured |
|---|---|
| intro | none |
| 34.1 | `velocity`, `position`, `temperature`, `time`, `energy`, `intensity` |
| 34.2 | `position`, `velocity`, `acceleration`, `time` |
| 34.3 | `position`, `energy` |
| 34.4 | `velocity`, `position`, `density` |
| 34.5 | none, or `time` where a pendulum's clock is read |
| 34.6 | `temperature` |
| 34.7 | none |

Of root rule 7's other families: the element palette `F.el` for every atom of
34.25(b)'s lattice (Tl, Ca, Ba, Cu, O) and for particles with an identity
(`F.el('e-')`, `F.el('e+')`, `F.el('p+')`, `F.el('gamma')`, `F.el('nu')`) in 34.17's
pairs and 34.4's neutrinos; the categorical palette `F.cat(i)` for galaxies,
stars or pendulums that must be told apart (the home galaxy against the others,
the two pendulums, the three trials of 34.25(a)), never in a category hue the figure draws. A colour
that is the physical fact is allowed where the plan names it: the red and blue
shift of a galaxy's two sides in 34.18(a), the temperature map of the WMAP sky
kept as a photograph, a star's glow. Colour-off keeps element, categorical and
physical colours, so every figure must stay legible from its labels.
