# Chapter 16 colour plan

Written 2026-09-14 in the prep pass for 16.7 to 16.11, after the
introduction and 16.1 to 16.6 were built (LOG passes 1 to 26 and the audit);
the file root rule 22 asks of a chapter. It records what the built pages
bound, as their figures tables say, and what the five remaining pages are
expected to bind. This chapter uses the book's declared physical types and
the app's selected palette, as root rule 7 requires. No figure hard-codes a
hue, and every page binds only the union of the types its own figures draw,
its sliders carry or its readouts state. The introduction binds none.

| Quantity | Type | Treatment |
|---|---|---|
| Elapsed time $t$, a period $T$ | `time` | One hue on the clock of a moving figure, the time axis of a graph and the period bracketed between two crests; the chapter's first pages declared it by 16.2's period |
| Displacement $x$, amplitude $X$, arc length $s$, the distance $d$ a damped block travels, the wavelength $\lambda$ and its harmonics $\lambda_1$, $\lambda_2$, the two disturbances $x_1$ and $x_2$ that add, the primed amplitude $X'$ | `position` | One hue: the block's displacement on its strip, the bracket that measures an amplitude or a wavelength, the position axis of every displacement graph. A wavelength is a length along the direction of travel and wears the position hue exactly as the amplitude does; the two are told apart by where the bracket lies |
| Velocity $v$, the maximum speed $v_\text{max}$, the wave velocity $v_\text{w}$ | `velocity` | One hue on the block's velocity arrow, the velocity graph, and the arrow that shows the disturbance travelling; the gull's own up-and-down speed and the wave's speed are both velocities and are told apart by direction and label |
| Acceleration $a$, $g$ | `acceleration` | Bound where a page draws the acceleration graph (16.3) or the pendulum's $g$ (16.4); the five remaining pages are not expected to bind it |
| The restoring force $F$, the applied force $F_\text{app}$, the friction $f$ of Example 16.7 | `force` | One hue on every force arrow; the friction that damps the block in 16.7 is a force like any other and wears the hue, told from the spring's force by its label and its direction against the motion |
| Elastic potential energy, kinetic energy, the total energy $E$, the work $W$ and the nonconservative work $W_\text{nc}$ | `energy` | One hue on the energy bars, the shaded area under the force graph and every readout that writes $W_\text{nc} = \Delta(\text{KE} + \text{PE})$; the energy a damper removes is the same energy and the same hue, drawn as a shrinking bar |
| The force constant $k$ | `stiffness` | Its own hue on the slider and in the readout; a force constant is not a force |
| Frequency $f$, the natural frequency $f_0$, the harmonics $f_1$, $f_2$, $f_3$, the average $f_\text{ave}$ and the beat frequency $f_\text{B}$ | `frequency` | One hue on the frequency slider of a driven oscillator, on the harmonic ladder and on every readout that writes $f = 1/T$, $f_1 = v_\text{w}/2L$ or $f_\text{B} = \lvert f_1 - f_2\rvert$; the driving frequency and the natural frequency are one type and are told apart by subscript and label, never by two hues |
| Angular velocity and angular frequency $\omega$ | `angular-rate` | Bound by 16.6 alone, on the turntable; not expected on the five |
| Power $P$ in $I = P/A$ | `power` (Chapter 7) | Bound only by 16.11 where a figure states the power crossing an area; used by name, never restaged |
| Intensity $I$, the concentrated intensity $I'$ | `intensity` (Chapter 17) | Bound only by 16.11: the bar that rises as the area shrinks, the shading of the field between two speakers, and the readout that writes $I = P/A$ or $I'/I = A/A'$; declared by Chapter 17 on 2026-09-14 and used here by name, never restaged |
| Mass $m$, the coefficient of friction $\mu_\text{k}$, the amount of damping, the string's length $L$, the harmonic number $n$, the area $A$, the angle $\theta$, a count, a ratio | Untyped | Ink, including the sliders that set them and the equation symbols. The book never names a damping constant, so a damping slider is an ink slider that changes the shape of a coloured curve, and its readout names the regime in words |

Two rules of rule 7 bite in the five remaining pages and are written down
so that no section has to decide them twice.

The regimes are words, not hues. Underdamped, critically damped and
overdamped are three states of one displacement curve, and the curve wears
the position hue in all three; the book's labels A and B and the readout's
word tell them apart. Where a figure draws two or three curves at once for
comparison, and labels cannot do it alone, the categorical palette
`F.cat(i)` tells the instances apart, as the three resonance curves of
Figure 16.25 (small, medium, heavy damping) may need, and it is never used
in a hue the page has bound.

Two waves that add are instances, their sum is the quantity. In the
superposition, standing-wave and beat figures the two component waves carry
no type of their own that would tell them apart, so they are drawn in the
categorical palette with a legend, and the resultant, the displacement the
section is teaching, wears the position hue. A node and an antinode are
places on that resultant and are marked in ink.

The expectation before the sections are built: 16.7 binds position, time,
and energy where a bar shows what damping removes, and force and stiffness
if the friction figure of Example 16.7 draws the block on its spring; 16.8
binds frequency and position, and time if the paddle ball moves on a clock;
16.9 binds position, velocity, time and frequency; 16.10 binds position,
time, frequency and velocity where the harmonic readout writes $v_\text{w}$;
16.11 binds intensity and power, position where a figure brackets the
amplitude, and energy and time where the readout writes $E = IAt$. No page
binds a type merely because the chapter declares it, and the chapter pass
records what the pages bound as built.

What the five bound, as their figures table says after the build. The
chapter pass of 2026-09-14 read every figure row and records these.

| Section | Types its figures draw | Against the expectation |
|---|---|---|
| 16.7 | `energy`, `force`, `position`, `stiffness`, `time` | As expected: the friction figure of Example 16.7 does draw the object on its spring, so force and stiffness are bound |
| 16.8 | `energy`, `frequency`, `position`, `power`, `stiffness`, `time` | Three more than expected. `sim-driven-energy` draws the store $\tfrac{1}{2}kX^2$ that the marching soldiers fill at a steady number of joules each second, so it states a stiffness, an energy and a power |
| 16.9 | `position`, `time`, `velocity` | Frequency was expected and is not bound: both wave figures set the period and read the speed from it, and neither writes a frequency |
| 16.10 | `frequency`, `position`, `time`, `velocity` | As expected |
| 16.11 | `energy`, `force`, `intensity`, `position`, `power`, `stiffness`, `time` | Two more than expected. `sim-amplitude-energy` draws the restoring force $F = kx$ and shades the work done under it, so it binds force and stiffness beside the energy |

The four families stand as the file describes them: type hues throughout,
the categorical palette on the three resonance curves of 16.8 and on
nothing else, and neither the element palette nor a physical colour on any
page of the chapter.

All canvas colours come from `C(type)` and `PAL`. The element palette is
not expected on any page of the chapter: a cord's coils, the water under a
gull and the air between two speakers are media with no named molecule and
are ink. Turning colour off must leave the labels, the brackets and the
arrow directions sufficient to read every figure.
