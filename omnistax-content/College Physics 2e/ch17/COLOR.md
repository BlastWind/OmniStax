# Chapter 17 colour plan

Prepared 2026-09-14. Approved with `config.md`. This chapter uses the book's
declared physical types and the app's selected palette, as root rule 7
requires, and adds one type of its own. No figure hard-codes hues, and every
page binds only the union of the types its own figures actually draw. The
introduction binds none.

| Quantity | Type | Treatment |
|---|---|---|
| Intensity $I$, the threshold $I_0$, two compared intensities $I_1$ and $I_2$ | `intensity` (new) | One hue; the height of the bar that grows as a pressure amplitude is raised, the intensity axis of the decibel ladder, the reflected and transmitted shares at a boundary, and every readout that writes $I = P/A$, $I = (\Delta p)^2/2\rho v_\text{w}$ or $I/I_0$ wear it. The reflected and the transmitted intensity of 17.7 are one type and are told apart by direction and label, not by two hues |
| Frequency $f$, the source and observed frequencies $f_\text{s}$ and $f_\text{obs}$, the harmonics $f_n$, $f_1$, $f_2$, $f_3$, $f'$, the beat frequency $f_\text{B}$ | `frequency` (Chapter 16) | One hue on the slider that sets a source going, on the fork's label, on the rings' spacing readout and on every Doppler and harmonic readout. The observed frequency is the same type as the source's and is told by its subscript; the two observers of the Doppler scene are told apart by position and label, never by a hue of their own |
| Speed of sound $v_\text{w}$, the source and observer speeds $v_s$ and $v_\text{obs}$, the blood speed $v_\text{b}$, the rms speed $v_\text{rms}$, $v$ in $Z = \rho v$, $c$ | `velocity` | One hue; the arrow on a moving source or observer, the speed a wavefront's radius grows at, and the readout that writes $v_\text{w} = f\lambda$ or the Doppler ratio. Declared by Chapter 2 and used here by name |
| Wavelength $\lambda$, $\lambda'$; the amplitude $X$ of an air element; a distance $d$ to an echo's reflector | `position` | One hue on the bracket between two compressions, along the tube where the standing wave's quarter-wavelengths are counted, and on the echo's distance. The tube's length $L$ is not a position of the wave and stays in ink (see below) |
| Pressure amplitude $\Delta p$; the gauge pressure $P$ of the wave on the graph's axis; the force $F = PA$ on the eardrum | `pressure`, `force` | Pressure is Chapter 11's and wears its hue on the vertical axis of every gauge-pressure graph, its ticks and the amplitude bracket; force is bound by 17.1 alone if its eardrum figure draws the arrow $F = PA$. A compression is told by packing, never by a tint |
| Temperature $T$ in $v_\text{w} = (331\ \text{m/s})\sqrt{T/273\ \text{K}}$ | `temperature` (Chapter 13) | One hue on the temperature slider and its readout; the air is never tinted warm or cold |
| Density $\rho$ in $I = (\Delta p)^2/2\rho v_\text{w}$ and $Z = \rho v$ | `density` (Chapter 11) | Bound only where a figure states it; a medium's density is a label on the choice of medium, not a colour of the medium |
| Power $P$ in $I = P/A$ | `power` (Chapter 7) | Bound only where a figure of 17.3 draws the power crossing an area |
| Time $t$; a period $T$ | `time` | Bind where a moving scene exposes the time since a pulse left or an echo's round trip |
| Sound intensity level $\beta$ in dB, loudness in phons, the acoustic impedances $Z$, $Z_1$, $Z_2$, the intensity reflection coefficient $a$, the harmonic number $n$, the tube length $L$, the area $A$, the mass $m$, the cone angle $\theta$, the Boltzmann constant $k$, the Mach number, the medium's name | Untyped | Ink, including the sliders that set them and the equation symbols. The decibel axis of the ladder is ink beside an intensity axis in its hue |

Three rules of rule 7 bite in this chapter and are written down so that no
section has to decide them twice.

The level is not the intensity. $\beta$ is a logarithm of a ratio of
intensities, and the book calls it unitless; the decibel is a way of
reading $I$, not a quantity of its own. Every readout of 17.3, 17.6 and 17.7
that writes $\beta = 10\log_{10}(I/I_0)$ colours $I$ and $I_0$ in the
intensity hue and leaves $\beta$ and the "dB" in ink, and a slider on
$\beta$ is an ink slider that moves a coloured bar. The reader sees that
the number on the slider and the height of the bar are two readings of one
thing, and that only the bar is the physics.

The medium is a property, the wave is the quantity. The speed of sound is
a velocity and wears its hue, but the medium it is tabulated for (air,
water, steel, fat, muscle, bone) is a choice with a name, never a colour,
and its acoustic impedance $Z = \rho v$ is a material constant in ink,
though a coloured density and a coloured speed multiply to give it in the
readout. The reflected fraction $a$ of the intensity at a boundary is a
ratio and is ink; the reflected intensity itself is coloured. A medium's
body in a figure is ink, and two media are told apart by a boundary line
and their labels, as the book's rules tell a phase or a material.

Air is dots, and a wavefront is where they are dense. No page tints a
compression darker or a rarefaction lighter; the packing of ink dots is the
pressure, and the gauge-pressure graph beneath draws the same thing as a
curve with a pressure-hued axis. A wavefront drawn as an arc, in the
Doppler scene and the sonic-boom cone, is an ink arc; the source's velocity
arrow is the velocity hue and the frequency each observer counts is written
in the frequency hue beside them. The observers themselves carry no type
and no element and are told apart by label and position; the categorical
palette is not needed for two people who are already on opposite sides of
the picture.

A page binds only what it draws. The expectation before the sections are
built: 17.1 binds pressure, and position if its string figure brackets a
wavelength, and force if the eardrum figure draws $F = PA$; 17.2 binds
frequency, velocity, position and temperature; 17.3 binds intensity,
pressure, and power and density where a figure states $I = P/A$ or the
pressure-amplitude form; 17.4 binds frequency and velocity, and position
where a figure brackets the shortened wavelength; 17.5 binds frequency,
velocity and position, and pressure where the noise-cancelling figure adds
two gauge pressures; 17.6 binds frequency and intensity, and pressure and
force where the middle ear's lever is drawn; 17.7 binds intensity, and
velocity, frequency and density where a figure computes $Z$ or the Doppler
echo. No page binds a type merely because the chapter declares it, and the
chapter pass records what the pages bound as built.

What the pages bind as built, taken from the `draws` column of the figures
each of them shows (chapter pass, 2026-09-14). The introduction binds
nothing, as it was expected to.

| Page | Types bound |
|---|---|
| 17.1 | frequency, pressure, position, force |
| 17.2 | frequency, velocity, position, temperature, time |
| 17.3 | intensity, pressure, density, velocity |
| 17.4 | frequency, velocity, position |
| 17.5 | frequency, velocity, position, pressure, temperature |
| 17.6 | frequency, intensity, pressure, force |
| 17.7 | intensity, velocity, density, frequency, position, time |

Four pages bound a type the expectation above did not name, and in each
case a figure draws it. 17.1 binds frequency, because the string's own
frequency is a slider and the readout writes it beside the wavelength.
17.2 and 17.7 bind time, because the bat's echo and the ultrasound pulse
are both timed and their graphs carry a time axis. 17.5 binds temperature,
because the tube that sounds a given note is drawn to the length the speed
of sound at the temperature you set requires. 17.7 binds position, because
the wavelength in tissue and the depth a probe reaches are drawn on a
scale of length. One type the expectation named is not bound: 17.3 does
not bind power, since the figure that states $I = P/A$ writes the power in
ink and colours only the intensity, the pressure amplitude, the density
and the speed of sound.

All canvas colours come from `C(type)` and `PAL`. The element palette is
not expected on any page of the chapter: the air of 17.1's figures is "the
air", a medium with no named molecule, and is ink dots; a section agent who
draws a named gas (the helium of 17.5's voice problem) draws its atoms in
`F.el('He')`. The categorical palette `F.cat(i)` is used only where two
instances that carry no type must be told apart and labels cannot do it
alone (the two tubes of unequal length before one speaker in 17.5's AP
item, if drawn; the three audiograms of 17.36, if redrawn as three curves
on one axis), and never in a hue the page has bound. Turning colour off
must leave the labels, the packing of the dots and the arrow directions
sufficient to read every figure.
