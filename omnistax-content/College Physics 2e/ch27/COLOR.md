# Chapter 27 colour plan

Prepared 2026-09-28 in the chapter's prep pass, beside `config.md`. This chapter
uses the book's declared types and the app's selected palette, as root rule 7 and
root rule 22 require. It declares no type of its own, hard-codes no hue except
where a hue is the colour of light itself.

Wave optics measures lengths against a wavelength, so most of what this chapter
colours is one type, `position`: the wavelength, the separation of two slits, the
width of one, the diameter of an aperture, the thickness of a film and the
distances to and along a screen. Every angle, every order $m$, every index of
refraction and the numerical aperture are untyped and stay in ink, as they did in
Chapter 25.

| Quantity | Existing type | Treatment |
|---|---|---|
| The wavelength $\lambda$ and the wavelength in a medium $\lambda_n$; the slit separation $d$; the slit width $D$ and the aperture diameter $D$; the film thickness $t$; the path difference $\Delta l$; the screen distance $x$, the position $y$ and the fringe spacing $\Delta y$; the distance $s$ a wavelet travels | `position` (Chapter 2) | One hue for every length; the wavelength in a medium keeps it and is told by its subscript. A figure that shows both $\lambda$ and $d$ tells them apart by their brackets and labels, never by a second hue |
| The speed of light $c$ and its speed $v$ in a medium, the speed of Huygens's wavelets | `velocity` (Chapter 2) | Coloured on 27.1 and 27.2 |
| The frequency $f$ of light, which stays the same in a medium | `frequency` (Chapter 16) | Coloured on 27.1, and on 27.2 for the frequency of the sound at the doorway |
| The time $t$ after which the wavelets are drawn | `time` (Chapter 2) | Coloured on 27.2 where a moving figure has a clock |
| The intensity $I$ after a filter and $I_0$ before it; an intensity axis on a pattern graph | `intensity` (Chapter 17) | Coloured on 27.8 for Malus's law, and on 27.3 to 27.6 only where a graph's axis is labelled with $I$ and a readout states it; a relative brightness drawn as a pattern on a screen is the colour of the light, not a type |
| The electric field $E$ of a polarized wave, its component $E\cos\theta$ through a filter | `electric-field` (Chapter 18) | Coloured on 27.8; the polarization arrows wear it, and an unpolarized bundle's arrows share the one hue |
| Every angle ($\theta$, $\theta_{\text{b}}$, $\alpha$), the order $m$, every index $n$, the numerical aperture, a phase and a count of slits or lines | Untyped | Ink, with the frame, the barriers, the slits, the lenses, the filters and every label |

Which section colours what:

| Section | Types coloured |
|---|---|
| intro | none |
| 27.1 | `position`, `velocity`, `frequency` |
| 27.2 | `position`, `velocity`, `time`, `frequency` |
| 27.3 | `position` |
| 27.4 | `position` |
| 27.5 | `position` |
| 27.6 | `position` |
| 27.7 | `position` |
| 27.8 | `electric-field`, `intensity` |
| 27.9 | none |

As built, no figure of 27.3 to 27.6 states an intensity in a readout, since each
draws its pattern as the brightness of the light, so `intensity` is coloured on 27.8
alone.

Of root rule 7's four families this chapter uses three.

**A colour that is the physical fact.** Light has the colour of its wavelength, as
in Chapter 25: a 633-nm He-Ne beam and its fringes are drawn red, a 450-nm beam
blue, white light fans into its true spectrum in a grating's higher orders, and a
thin film shows the colour it reflects. A wavelength slider wears the `position`
hue because its number is a length, while the light it controls wears the colour
that number means. This is the only place a hex literal is written in a figure,
named in the plan line. Colour-off keeps it.

**Type hues from the scheme**, carrying the lengths throughout, the
speeds and the frequency of 27.1 and 27.2, and the field and intensity of 27.8.

**The categorical palette `F.cat(i)`** tells apart instances that carry no type:
the wave from slit 1 and the wave from slit 2, ray 1 and ray 2 of a thin film, the
two point sources of the Rayleigh criterion, the first and second polarizing
filters. It is never used in a category hue the figure draws, and never on light whose
colour is its wavelength; where two waves of one colour must be told apart, one
is drawn dashed.

A medium is never tinted to say what it is; a film, a glass and water are told by
their labels and their indices, and a faint neutral panel may mark a boundary.
The element palette does not arise: 27.8's long molecules are drawn in ink and
named, since the text names no element.
