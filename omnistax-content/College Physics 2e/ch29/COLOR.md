# Chapter 29 colour plan

Prepared 2026-09-28 in the chapter's prep pass, beside `config.md`. The chapter
declares no type of its own.

| Quantity | Type | Treatment |
|---|---|---|
| Photon energy $E$, $E'$, an energy step $\Delta E$, the binding energy BE, the electron's kinetic energy $\text{KE}_e$, an uncertainty in energy | `energy` | one hue; the scattered photon's $E'$ is told by its prime |
| Frequency $f$, threshold $f_0$, $f_{\text{max}}$ of an x-ray tube | `frequency` | one hue; variants by subscript |
| Wavelength $\lambda$, a plane or slit spacing $d$, an uncertainty in position $\Delta x$ | `position` | one hue |
| Photon and particle momentum $p$, its uncertainty $\Delta p$ | `momentum` | one hue |
| The speed of light $c$, a particle's speed $v$, $\Delta v$ | `velocity` | one hue |
| A lifetime or uncertainty in time $\Delta t$ | `time` | 29.7 only |
| The accelerating voltage $V$ of an x-ray tube | `voltage` | 29.3 |
| The electron's charge $q$ | `charge` | 29.3's readout only if it writes `\kq` |
| A source's power | `power` | unbound as built: no figure draws a power |
| Blackbody intensity and temperature | `intensity`, `temperature` | 29.1's blackbody sim |
| Planck's constant $h$, a mass $m$, the integers $n$, an angle $\theta$, a count of photons | untyped | ink |

Which section colours what, as built:

| Section | Types coloured |
|---|---|
| intro | none |
| 29.1 | `energy`, `frequency`; `intensity`, `temperature`, `position` on the blackbody figure |
| 29.2 | `energy`, `frequency`, `position`; no figure draws a voltage, so `voltage` is unbound |
| 29.3 | `energy`, `frequency`, `position`, `voltage`, `charge` (the tube's readout writes $\kq\kV$); no figure draws a power, so `power` is unbound |
| 29.4 | `momentum`, `energy`, `position`, `velocity` |
| 29.5 | none |
| 29.6 | `position`, `momentum`, `velocity`, `energy` |
| 29.7 | `position`, `momentum`, `energy`, `time`, `velocity` |
| 29.8 | `momentum`, `velocity`, `position` |

The colour of visible light is one piecewise fit of the spectrum, `spectral()` in
29.1 (the function of 27.1) and `wavelengthColor(nm)` in 29.2, 29.3, 29.4, 29.7 and
29.8, each page carrying its own copy.

Of root rule 7's four families the chapter uses three. **Physical colour**: a
photon or a beam of visible light is drawn in the colour of its wavelength, the
visible band of the spectrum in 29.1 and 29.3 in its true colours, and this is the
one place a hex literal (or a wavelength-to-colour function) appears, named in the
plan line; a photon outside the visible band is ink with its band's name, never a
false colour. A photon is never a typed thing: the wavelength slider wears the
`position` hue and the photon wears the colour the number means. **Element
palette**: every electron, proton and neutron is `F.el('e-')`, `F.el('p+')`,
`F.el('n0')`, and an atom of the plate or the crystal is `F.el` of its element.
**Categorical**: `F.cat(i)` for instances with no type and no element, such as two
metals on one graph, never in a category hue the figure draws. A metal plate is not tinted
to say what it is; its name and binding energy are its label.

Colour-off drops the type hues and keeps the physical and element colours, so each
figure must stay legible from its labels and caption alone.
