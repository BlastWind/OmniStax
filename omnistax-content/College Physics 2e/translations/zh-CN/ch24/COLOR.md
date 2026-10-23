# Chapter 24 colour plan

Prepared 2026-09-15 in the chapter's prep pass and brought under item 7 on
2026-10-04. The rule is root `RULES.md` item 7 and its four ways; this file
records what is particular to the chapter. Every category is coloured on every
page, in the prose where a phrase names a particular one, in the maths and in
the figures. No figure hard-codes a hue.

## Categories

| Quantity | Type | Treatment |
|---|---|---|
| The electric field of the wave, and its amplitude $E_0$ | `electric-field` | One hue for the field and its amplitude; the amplitude is told by its subscript and by a dashed level across the crest, never by a second hue |
| The magnetic field of the wave, and its amplitude $B_0$ | `magnetic-field` | One hue; it is the hue that separates the two fields of a wave from each other, so a figure that draws both colours both |
| The speed of light $c$, and the speed $v$ of a wave in a medium | `velocity` | The propagation arrow of a wave, and the slowed speed in a medium |
| Wavelength $\lambda$, a distance along the wave, the sides of the oven's heated patch | `position` | A wavelength bracket and a distance from a source are the same type, as they have been since 16.9 |
| Frequency $f$, a resonant frequency $f_0$, a carrier's and an audio signal's frequency | `frequency` | The spectrum's frequency axis and every frequency slider |
| Period $T$ and elapsed time $t$ | `time` | The clocks of 24.2 and the time axes of the two modulations of 24.3 |
| Intensity, average and peak | `intensity` | The average and the peak share the hue and are told by their subscripts |
| The power a source delivers, the area it is spread over | `power`, `area` | 24.4, where $I = P/A$ is stated |
| The charge separated along an antenna, the charges of Maxwell's first equation | `charge` | The sign of a charge is told by its label, never by a hue |
| The current in an antenna | `current` | 24.2, where the current is what makes the magnetic part of the wave |
| The inductance and capacitance of Hertz's circuit | `inductance`, `capacitance` | The two sliders of Figure 24.4 and $f_0 = 1/2\pi\sqrt{LC}$ |
| The energy of a transition or of a photon; the heats, mass, specific heat, temperatures, latent heat, density and volume of Example 24.3 | `energy` and the rest | Coloured wherever they are written |
| The permittivity $\varepsilon_0$, the permeability $\mu_0$, the index of refraction $n$, an emissivity, a count, a percentage and every band name | Untyped | Ink |

A band of the spectrum is never tinted by its name: radio, infrared and gamma are
told by their place on the axis and by their labels.

## Referents

| Section | Referents |
|---|---|
| 24.1 | The magnet and the loop of Maxwell's equations; Hertz's driving circuit, his two loops and the tunable circuit of the receiver |
| 24.2 | The antenna, its generator, and the wire and loop held in the beam of Figure 24.7 |
| 24.3 | The submarine; the carrier, the audio signal and the modulated wave of each modulation; the three signals of Example 24.2; the atom, the material and the characteristic X-ray of Figures 24.18 and 24.19 |
| 24.4 | The two waves of Figure 24.22 and the oven of Example 24.4 |

In the two modulation figures each of the three traces is a referent's, so each
takes its referent colour and the axes keep the `electric-field` and `time` hues.
The X-rays of braking, which the text never names one by one, take a referent hue
by index. The antenna and its generator appear in all three antenna figures of 24.2
and keep one colour across them; the two receivers share their figure row so that
no two of the four meet in one hue.

## Facts and conventions

The visible strip of Figure 24.15 and the visible band of Figure 24.8 are painted
in true spectral colour through `F.fact`, since there the wavelength and the
colour are the same fact; a marker dragged along the spectrum takes that colour
while it is inside the band and is ink outside it. The element palette arises
once, on 24.3's X-ray figure, where `F.el('e-')` fills the striking electron and
the captured one.

With colour coding off every figure stays legible from its labels, its arrow
directions and its caption alone, which for the 3D wave of Figure 24.7 means that
$E$ and $B$ carry their names in the scene as well as their hues.
