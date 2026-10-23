# Chapter 16 colour plan

Written 2026-09-14 in the prep pass for 16.7 to 16.11 and restated 2026-10-04
under root `RULES.md` item 7. It refines the book's `COLOR.md` and invents no
hue: the chapter uses the book's declared categories and declares none of its
own. Every category is coloured on every page, in prose where a phrase names a
particular one, in maths through its symbol's variables row, and in every
figure that draws it. No figure hard-codes a hue.

## Categories

| Quantity | Category | Notes |
|---|---|---|
| Elapsed time $t$, a period $T$ | `time` | The clock of a moving figure, the time axis of a graph and the period bracketed between two crests |
| Displacement $x$, amplitude $X$, arc length $s$, the distance $d$ a damped block travels, the pendulum's length $L$ and the string's length $L$, the wavelength $\lambda$ and its harmonics $\lambda_1$, $\lambda_2$, the two disturbances $x_1$ and $x_2$ that add, the primed amplitude $X'$ | `position` | A wavelength is a length along the direction of travel and wears the position hue exactly as the amplitude does; the two are told apart by where the bracket lies |
| Velocity $v$, the maximum speed $v_\text{max}$, the wave velocity $v_\text{w}$ | `velocity` | The gull's own up-and-down speed and the wave's speed are both velocities, told apart by direction and label |
| Acceleration $a$, $g$ | `acceleration` | |
| The restoring force $F$, the applied force $F_\text{app}$, the friction $f$ of Example 16.7, the weight and tension on a pendulum bob | `force` | |
| Elastic potential energy, kinetic energy, the total energy $E$, the work $W$ and the nonconservative work $W_\text{nc}$ | `energy` | The energy a damper removes is the same energy and the same hue, drawn as a shrinking bar |
| The force constant $k$ | `stiffness` | A force constant is not a force |
| Frequency $f$, the natural frequency $f_0$, the harmonics $f_1$, $f_2$, $f_3$, the average $f_\text{ave}$ and the beat frequency $f_\text{B}$ | `frequency` | The driving and the natural frequency are one category, told apart by subscript and label |
| Angular velocity and angular frequency $\omega$ | `angular-rate` | |
| Mass $m$ of every oscillating object, bob and car | `mass` | |
| The pendulum's angle $\theta$ and its amplitude $\theta_\text{max}$, the angle of P on the reference circle, the phase of a second wave | `angle` | |
| Power $P$, the energy a damper takes out each second | `power` | |
| Area $A$ | `area` | |
| Intensity $I$, $I'$ | `intensity` | |
| The coefficient of friction $\mu_\text{k}$, the amount of damping as a share or a rate, the harmonic number $n$, a count of cycles, a ratio | ink | A rating, a count or a quantity no category holds; a damping slider is an ink slider that changes the shape of a coloured curve, and its readout names the regime in words |

The regimes are words, not hues. Underdamped, critically damped and
overdamped are three states of one displacement curve, and on 16.20 the curve
wears the position hue. Where 16.21 draws the three at once, each is a
referent the text names (Curve A, Curve B, the underdamped one).

Two waves that add are referents, their sum is the quantity. In the
superposition, standing-wave and beat figures each component wave is a
referent of its figure with a legend, and the resultant, the displacement the
section is teaching, wears the position hue. A node and an antinode are places
on that resultant and are marked in ink.

## Facts and conventions

Neither the element palette nor a physical colour appears on any page of the
chapter: a cord's coils, the water under a gull and the air between two
speakers are media with no named molecule.

## Referents

Each section lists its referents in `referents`; the figure draws each with
`F.ref` and the text marks every reference, pronouns included.

- 16.1: the plucked ruler; the spring the weights hang on; the toy gun's spring and its dart.
- 16.2: the guitar string; the mass on a spring that is counted.
- 16.3: the object on the spring of 16.9; the upper and lower objects released together; the object writing its trace on the paper; the object on the vertical spring of 16.12.
- 16.4: the pendulum bob of 16.13; the two pendulums, whose $L_1$, $L_2$ and $m_2$ slider labels split to them, and whose points on the period graph wear their colours; the pendulum of Example 16.5.
- 16.5: the object on the spring of 16.14; the car of Example 16.6.
- 16.6: the ball on the turntable and its shadow; the point P and its projection.
- 16.7: the lightly damped object; the three systems of 16.21, each curve in its referent's colour; the object of Example 16.7.
- 16.8: the paddle ball, the finger and the rubber band; the bridge and the marching soldiers. The three resonance curves of 16.25 are the same ball with three amounts of damping, which the text never names one by one, and are told apart with `F.cat(i)`.
- 16.9: the ocean wave, the gull and the marked particle of water; the cord, the hand that shakes it and the marked coil.
- 16.10: the two waves that add, whose $x_1$ and $x_2$ split their subscripts to them; the two waves running opposite ways; the two waves that beat.
- 16.11: the solar collector and the magnifying glass; the two speakers and the listening post.

Turning colour off must leave the labels, the brackets and the arrow
directions sufficient to read every figure.
