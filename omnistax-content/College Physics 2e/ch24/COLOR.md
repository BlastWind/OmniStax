# Chapter 24 colour plan

Prepared 2026-09-15 in the chapter's prep pass, beside `config.md`. This chapter
uses the book's declared types and the app's selected palette, as root rule 7 and
root rule 22 require. It declares no type of its own, hard-codes no hue, and every
page binds only the union of the types its own figures draw.

| Quantity | Existing type | Treatment |
|---|---|---|
| The electric field of the wave, and its amplitude $E_0$ | `electric-field` (Chapter 18) | One hue for the field and its amplitude; the amplitude is told by its subscript and by a dashed level across the crest, never by a second hue |
| The magnetic field of the wave, and its amplitude $B_0$ | `magnetic-field` (Chapter 22) | One hue; it is the hue that separates the two fields of a wave from each other, so a figure that draws both must bind both |
| The speed of light $c$, and the speed $v$ of a wave in a medium | `velocity` (Chapter 2) | One hue; the propagation arrow of a wave wears it, and the slowed speed in a medium keeps it |
| Wavelength $\lambda$, and any distance along the wave | `position` (Chapter 2) | One hue; a wavelength bracket and a distance from a source are the same type, as they have been since 16.9 |
| Frequency $f$, and a resonant frequency $f_0$ | `frequency` (Chapter 16) | One hue; the spectrum's frequency axis wears it |
| Period $T$, and elapsed time | `time` (Chapter 2) | Bound where a moving figure exposes a clock, which is 24.2 and 24.3's two modulations |
| Intensity, average and peak | `intensity` (Chapter 17) | Bound on 24.4 alone; the average and the peak share the hue and are told by their subscripts |
| The power a source delivers | `power` (Chapter 7) | Bound on 24.4, where $I = P/A$ is stated |
| The charge separated along an antenna | `charge` (Chapter 18) | Bound on 24.2; the sign of a charge is told by its label, never by a hue |
| The current in an antenna | `current` (Chapter 20) | Bound on 24.2, where the current is what makes the magnetic part of the wave |
| The energy of a transition or of a photon | `energy` (Chapter 7) | Bound on 24.3's two X-ray figures |
| The permittivity $\varepsilon_0$, the permeability $\mu_0$, the index of refraction $n$, an emissivity, a count, a percentage and every band name | Untyped | Ink, including the frame, the antenna, the wire and every label |

Which section binds what:

| Section | Types bound |
|---|---|
| intro | none |
| 24.1 | `velocity`, `frequency`, `position`, `electric-field`, `magnetic-field` |
| 24.2 | `electric-field`, `magnetic-field`, `velocity`, `position`, `time`, `charge`, `current`, `frequency` |
| 24.3 | `frequency`, `position`, `velocity`, `time`, `electric-field`, `energy` |
| 24.4 | `intensity`, `electric-field`, `magnetic-field`, `velocity`, `power` |

Of root rule 7's four families this chapter uses three. Type hues carry every
quantity its figures draw, and the two field hues doing the work of telling $E$
from $B$ is the reason 24.2 and 24.4 must bind both. A colour that is the physical
fact is drawn in one place and one place only: the visible strip of Figure 24.15,
and the visible band inside the spectrum of Figure 24.8, are painted in true
spectral colour, since there the wavelength and the colour are the same fact; a
marker dragged along the spectrum takes that colour while it is inside the band
and is ink outside it. The categorical palette `F.cat(i)` tells apart instances
that carry no type and must be distinguished, and it is never used in a hue the
page has bound. In the two modulation figures of 24.3 the carrier wave and the
modulated wave the station sends out are both the electric field of a wave, so
both are drawn in the `electric-field` hue, and it is the audio signal alone —
a voltage waveform of no type this chapter binds — that takes `F.cat(0)`; in
24.3's X-ray figure the emitted ray takes `F.cat(1)`, since a photon of either
mechanism carries no type of its own. The
element palette arises once, on 24.3's X-ray figures, where `F.el('e-')` fills the
striking electron and the captured one; the nucleus and its shells are ink.

A band of the spectrum is never tinted by its name: radio, infrared and gamma are
told by their place on the axis and by their labels, not by a hue, and the one
band that is coloured is coloured because its colour is what it is.

The test for one figure is root rule 7's: everything in it with an identity is
coloured, or the whole figure is ink. Colour-off drops the type hues and keeps the
element, physical and categorical colours, so every figure must stay legible from
its labels, its arrow directions and its caption alone — which for the 3D wave of
Figure 24.7 means that $E$ and $B$ carry their names in the scene as well as their
hues.
