# Chapter 29 colour plan

Prepared 2026-09-28 in the chapter's prep pass, beside `config.md`, and brought
under root `RULES.md` item 7 on 2026-10-04. The chapter declares no type of its
own. Colour reaches its pages in item 7's four ways, the earlier winning: fact,
convention, referent, category.

## Categories

| Quantity | Type | Treatment |
|---|---|---|
| Photon energy $E$, $E'$, an energy step $\Delta E$, the binding energy BE, the electron's kinetic energy $\text{KE}_e$, an uncertainty in energy | `energy` | one hue; the scattered photon's $E'$ is told by its prime |
| Frequency $f$, threshold $f_0$, $f_{\text{max}}$ of an x-ray tube | `frequency` | one hue; variants by subscript |
| Wavelength $\lambda$, a plane or slit spacing $d$, a path length difference, a position $x$ and its uncertainty $\Delta x$ | `position` | one hue |
| Photon and particle momentum $p$, its uncertainty $\Delta p$, the momenta $p_1$, $p_2$ of Example 29.10 | `momentum` | one hue; the subscripts wear the referents' colours |
| The speed of light $c$, a particle's speed $v$ or velocity $u$, $\Delta v$ | `velocity` | one hue |
| A lifetime or uncertainty in time $\Delta t$ | `time` | |
| The accelerating voltage $V$ of an x-ray tube, the retarding voltage of a photoelectric tube | `voltage` | |
| The electron's charge $q$ | `charge` | |
| The power of a light bulb | `power` | words only; no figure draws a power |
| Blackbody intensity and temperature | `intensity`, `temperature` | 29.1's blackbody figure |
| A particle's mass $m$, the mass of an electron or a grain of dust | `mass` | |
| The Compton scattering angle, the Bragg angle, the double-slit angle $\theta$, $\theta_1$ | `angle` | |

Planck's constant $h$, the integers $n$, an order of interference $m$ and a
count of photons stay in ink. A curve that is one quantity (the blackbody
spectrum, the photoelectric line, the uncertainty limits of 29.7) keeps its
category's colour; the relative intensity of the x-ray spectrum and of the
Bragg and double-slit patterns is a shape, not a typed quantity, and stays ink.

## Facts and conventions

A photon or a beam of visible light is drawn in the colour of its wavelength,
the visible band of a spectrum in its true colours, and a stretch of spectrum
with no light in it black: `spectral()` in 29.1 (the function of 27.1) and
`wavelengthColor(nm)` in 29.2, 29.3, 29.4, 29.7 and 29.8, each page carrying its
own copy, all through `F.fact` so the reader's Facts and conventions switch
reaches them. A photon outside the visible band has no real colour and is never
given a false one; where the text names it, it is a referent.

Every electron, proton and neutron is `F.el('e-')`, `F.el('p+')`, `F.el('n0')`,
and an atom of a crystal is `F.el` of its element. A metal plate or an anode is
not tinted to say what it is; its name and binding energy are its label.

## Referents

Each figure's referents are listed in its section's `referents` table, drawn
with `F.ref` and marked `data-ref` in the text:

| Section | Referents |
|---|---|
| 29.1 | the ladder's oscillator and the classical oscillator beside it |
| 29.2 | the lamp and the metal plate of the photoelectric figure |
| 29.3 | the x-ray tube, its filament (the cathode) and its anode |
| 29.4 | the incoming and scattered photons and the struck electron of the Compton figure; the photon and electron of Example 29.5 |
| 29.6 | the bowling ball and the electron of Example 29.7; the waves scattered from the top and second planes of Figure 29.20 |
| 29.7 | the source, slits, screen and coils of the double-slit figure; the atom and electron of Example 29.8; the excited state of Example 29.9 |
| 29.8 | the 550-nm photon and the grain of dust of Example 29.10, whose momenta $p_1$ and $p_2$ split their subscripts to them |

A referent whose body already wears a fact or a convention (a visible photon,
an electron) keeps that colour on its body and wears its referent colour on its
name. Colour-off drops every hue but leaves each figure legible from its labels
and caption.
