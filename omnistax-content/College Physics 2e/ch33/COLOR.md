# Chapter 33 colour plan

Prepared 2026-09-28 in the chapter's prep pass, beside `config.md`, and brought
under item 7 on 2026-10-04, before the sections were built. The chapter
declares no type and uses the book's.

| Quantity | Type | Treatment |
|---|---|---|
| Borrowed energy $\Delta E$, rest energy, collision and beam energy, decay energy, $\text{PE}_{\text{elec}}$ | `energy` | One hue; the energy axis of 33.24 and every readout in MeV or GeV |
| Mass $m$ (`\km`), a rest mass in MeV/$c^{2}$, the mass created from $\Delta E$ | `mass` | Symbol, readout and Table 33.2's rest masses where the text names one |
| Time a virtual particle lives $\Delta t$, a lifetime; the time axis of a Feynman diagram | `time` | One hue |
| Range $d$, the position axis of a Feynman diagram, a track length, a probed distance | `position` | One hue |
| $c$, a beam particle's speed | `velocity` | Coloured where a readout converts time to range |
| Gap voltage $V_{\text{gap}}$, a Van de Graaff potential | `voltage` | 33.3 only |
| The cyclotron's and synchrotron's magnetic field | `magnetic-field` | 33.3 only, where the figure draws the field |
| Particle charge $q$, $q_{e}$, quark charge in units of $q_{e}$ | `charge` | Symbol and the readout that adds quark charges (33.5) |
| The quantum numbers $B$, $L_{e}$, $L_{\mu}$, $L_{\tau}$, $S$, spin, relative force strength, a count, $h$ | untyped | Ink |

Every page colours each category wherever it names a particular one: the
energy borrowed for this pion, its mass, the time it lives, the range it
reaches, the voltage across one gap. The intro names none and is ink. The
figures draw energy, mass, time, position and velocity in 33.1, time and
position in 33.2, energy, voltage, the magnetic field and velocity in 33.3,
energy, mass and time in 33.4, charge and position in 33.5, and energy,
position and time in 33.6.

Canvas colours come in item 7's four ways, the earlier winning.

**Facts.** The photographs and the book's images (33.1, 33.2, 33.12, 33.14,
33.16, 33.18, 33.25) keep the colours the book prints. A photon is never drawn
in a spectral colour unless its wavelength is visible and stated.

**Conventions.** The element palette `F.el` draws every electron, proton,
neutron, positron, neutrino and photon: `F.el('e-')`, `F.el('p+')`,
`F.el('n0')`, `F.el('e+')`, `F.el('nu')`, `F.el('gamma')`. An antiproton or
antineutron takes its particle's hue with the bar in its label and an open
marker. Quark color charge is the field's own convention and the book's
analogy, which works only if the three add to white on screen: red, green and
blue for the color charges and cyan, magenta and yellow for the anticolors,
six named constants drawn through `F.fact` (the element palette has no key for
them), named in the figure's plan line and used for nothing else. Where color
charge is drawn, a quark's flavor is carried by its letter, not a hue.

**Referents.** What a section's text and figure both name is a referent,
listed in its `referents` table, drawn with `F.ref` and marked
`<span data-ref>` in the text: the pion of 33.3 and Example 33.1 in 33.1; the
two positive charges of 33.4 and the exchanged $\pi^{+}$ of 33.6 in 33.2
(where the text calls the charges protons they are drawn `F.el('p+')` and are
not referents); the cyclotron's dees, the synchrotron's accelerating tubes of
Example 33.2 and the Fermilab rings the text names in 33.3; the
$\Xi^{-}$, $\Lambda^{0}$ and $\pi^{-}$ of Example 33.3(a) and the $K^{+}$,
$\mu^{+}$ of (b) in 33.4, where a figure draws the decays; the $\pi^{+}$ and
$\pi^{-}$ of 33.15 and the three families of 33.20 in 33.5; the two quarks
whose colors the gluon changes in 33.22(b) (their color-charge hues winning as
the convention, their outlines and labels in the referent hue) and the four
forces of 33.24 in 33.6, one curve per force in its referent's colour on an
energy axis in `energy`. A quantity drawn on a referent keeps its category's
hue. A symbol whose subscript names a referent splits it through its variables
row's `ref`. `F.cat(i)` is left for instances the text never names one by one
(the eight gluons of 33.22(a), the hadrons of a collision, quarks drawn without
color charge), offset past the figure's referent count.

With every switch off each figure stays legible from its labels, its marker
shapes and its caption.
