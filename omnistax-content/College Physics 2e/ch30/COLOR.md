# Chapter 30 colour plan

Prepared 2026-09-28 in the chapter's prep pass. The chapter declares no type and
uses the book's.

| Quantity | Type | Treatment |
|---|---|---|
| Orbital energies $E_n$, $E_0$, $E_{\text{i}}$, $E_{\text{f}}$, the transition energy $\Delta E$, x-ray energies $E_{\text{max}}$ | `energy` | One hue for every level and every energy gap; a level diagram's rungs are ink, the energy axis and readout carry the hue |
| Orbit radii $r_n$, the Bohr radius $a_{\text{B}}$, wavelengths $\lambda$ and $\lambda_n$, plate separation $d$ | `position` | One hue for every length |
| Angular momentum $L$, $L_z$, spin $S$, $S_z$ | `angular-momentum` | The vector and its component in one hue, the component dashed |
| Charges $q_e$, $q_p$, $q$ | `charge` | Symbol and readout only |
| The fields $E$ and $B$ of Thomson's tube, Millikan's plates, the Zeeman field | `electric-field`, `magnetic-field` | As in Chapters 18 and 22 |
| Accelerating and plate voltages $V$ | `voltage` | Slider and readout |
| Beam speed $v$, acceleration $a$ | `velocity`, `acceleration` | 30.2 only |
| Photon frequency $f$ | `frequency` | In readouts of $hf$ only |
| Quantum numbers $n$, $n_{\text{i}}$, $n_{\text{f}}$, $l$, $m_l$, $s$, $m_s$; $Z$; $R$; masses; counts; $h$ | untyped | Ink |

| Section | Types coloured |
|---|---|
| intro | none |
| 30.1 | none (the Brownian figure's molecules and grain are identified by `F.el` and name) |
| 30.2 | `velocity`, `electric-field`, `magnetic-field`, `charge`, `voltage`, `acceleration` where drawn |
| 30.3 | `energy`, `position` (`frequency` only if a readout writes $hf$) |
| 30.4 | `energy`, `voltage` |
| 30.5 | `energy` |
| 30.6 | `position`, `angular-momentum` |
| 30.7 | `magnetic-field`, `angular-momentum` |
| 30.8 | `angular-momentum` |
| 30.9 | none |

Families: the **element palette** `F.el` for every electron, proton, nucleus,
alpha particle, gold atom, helium and neon atom, pollen grain's molecules; an
electron is never an anonymous dot. **Physical colour** for photons: a visible
photon or spectral line is drawn in the colour of its wavelength (the Balmer
lines at 656, 486, 434, 410 nm; the 633-nm He-Ne line; iron's spectrum),
the one place a hex literal or a wavelength-to-colour call is allowed, named in
the plan line; an ultraviolet, infrared or x-ray photon is ink with its wavelength
labelled, never a false colour. **Categorical** `F.cat` for spectral series
(Lyman, Balmer, Paschen) where they must be told apart and carry no type, for
the $m_l$ cones, and for subshells in 30.9, never in a category hue the figure draws.
Colour-off keeps element, physical and categorical colour.
