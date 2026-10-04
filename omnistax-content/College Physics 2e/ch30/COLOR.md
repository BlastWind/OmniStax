# Chapter 30 colour plan

Prepared 2026-09-28 in the chapter's prep pass and brought under item 7 on
2026-10-04, before the sections were built. The chapter declares no type and
uses the book's.

| Quantity | Type | Treatment |
|---|---|---|
| Orbital energies $E_n$, $E_0$, $E_{\text{i}}$, $E_{\text{f}}$, the transition energy $\Delta E$, x-ray energies $E_{\text{max}}$ | `energy` | One hue for every level and every energy gap; a level diagram's rungs are ink, the energy axis and readout carry the hue |
| Orbit radii $r_n$, the Bohr radius $a_{\text{B}}$, wavelengths $\lambda$ and $\lambda_n$, plate separation $d$ | `position` | One hue for every length |
| Angular momentum $L$, $L_z$, spin $S$, $S_z$ | `angular-momentum` | The vector and its component in one hue, the component dashed |
| The angles $\theta_1$, $\theta_2$, $\theta_3$ that $L$ makes with the $z$-axis | `angle` | The arc, its label and the readout of 30.8 |
| Charges $q_e$, $q_p$, $q$ | `charge` | Symbol and readout only |
| Masses $m_{\text{e}}$, $m_{\text{p}}$, $m_{\text{drop}}$ | `mass` | Symbol, readout and the mass of Millikan's drop where a figure states it |
| The fields $E$ and $B$ of Thomson's tube, Millikan's plates, the Zeeman field | `electric-field`, `magnetic-field` | As in Chapters 18 and 22 |
| Accelerating and plate voltages $V$ | `voltage` | Slider and readout |
| Beam speed $v$, acceleration $a$ | `velocity`, `acceleration` | 30.2 only |
| Photon frequency $f$ | `frequency` | In readouts of $hf$ only |
| Quantum numbers $n$, $n_{\text{i}}$, $n_{\text{f}}$, $l$, $m_l$, $s$, $m_s$; $Z$; $R$; counts; $h$ | untyped | Ink |

Every page colours each category wherever it names a particular one: the
energy of this level or that photon, the radius of the third orbit, the mass
of the drop. The figures draw velocity, the fields, charge, voltage and mass
in 30.2, energy and position in 30.3, energy and voltage in 30.4, energy in
30.5, position and angular momentum in 30.6, the magnetic field and angular
momentum in 30.7, and angular momentum and angle in 30.8.

Canvas colours come in item 7's four ways, the earlier winning.

**Facts.** A visible photon or spectral line is drawn in the colour of its
wavelength through `F.fact` (the Balmer lines at 656, 486, 434, 410 nm; the
633-nm He-Ne line; iron's spectrum), named in the plan line; an ultraviolet,
infrared or x-ray photon is ink with its wavelength labelled, never a false
colour. The photographs keep the colours the book prints.

**Conventions.** The element palette `F.el` draws every electron, proton,
nucleus, alpha particle, gold atom, helium and neon atom, and the molecules
that jostle the pollen grain; an electron is never an anonymous dot.

**Referents.** What a section's text and figure both name is a referent,
listed in its `referents` table, drawn with `F.ref` and marked
`<span data-ref>` in the text: Thomson's tube and Millikan's drop in 30.2,
the Lyman, Balmer and Paschen series in 30.3 (each series' arrows and lines
in its referent colour, a visible line's own colour taking precedence as a
fact), the anode of an x-ray tube in 30.4, the three orientations of $L$ for
$m_l = +1, 0, -1$ in 30.8, whose angles $\theta_1$, $\theta_2$, $\theta_3$
split their subscripts to them. A quantity drawn on a referent keeps its
category's hue. `F.cat(i)` is left for instances the text never names one by
one, offset past the figure's referent count: the subshells of 30.9 are
referents where the text names them ($1s$, $2p$) and take `F.cat` where a
figure fills more of them than the text names.

With colour off every figure stays legible from its labels, its arrow
directions and its caption.
