# College Physics 2e: what the book colours

Written 2026-09-14, the file root rule 22 asks of every book. It records
what this book colours and by which family of root rule 7; the rules
themselves are in the repository's root `RULES.md`, and this book's own
`RULES.md` § Types states the declaration this file dresses. A chapter may
keep a `COLOR.md` of its own that refines this one: it may bind fewer types,
never invent a hue.

A colour belongs to a type, and a type is a kind of physical quantity. The
book declares its types in `book.json` in the order the colour scheme lays
its hues along, says nothing about hues itself, and the app dresses them
from the reader's scheme. A page colours only the types it binds, the ones
its figures draw, its sliders carry or its readouts state; every other
symbol on that page is ink, and the page's plan lists what it binds.

| Type | What wears it | Declared in |
|---|---|---|
| `time` | Elapsed time, a period, a time interval | Chapter 2 |
| `position` | Position, displacement, distance, height, a radius, an arc length, a lever arm, a deformation | Chapter 2 |
| `velocity` | Velocity and speed, average and instantaneous, including the speed of light | Chapter 2 |
| `acceleration` | Acceleration, including $g$, centripetal acceleration and tangential acceleration | Chapter 2 |
| `force` | Every force: applied, net, weight, normal, tension, friction, drag, thrust and their components | Chapter 4 |
| `energy` | Work, kinetic energy, potential energy of every kind, and other energy | Chapter 7 |
| `frequency` | Frequency | Chapter 16 |
| `stiffness` | A force constant | Chapter 16 |
| `angular-rate` | Angular velocity and angular frequency, initial, average and final | Chapter 6 |
| `stress` | Stress | Chapter 5 |
| `elastic-modulus` | Young's, shear and bulk moduli | Chapter 5 |
| `power` | Power | Chapter 7 |
| `torque` | Torque | Chapter 9 |
| `momentum` | Linear momentum and impulse | Chapter 8 |
| `angular-acceleration` | Angular acceleration | Chapter 10 |
| `rotational-inertia` | Moment of inertia | Chapter 10 |
| `angular-momentum` | Angular momentum | Chapter 10 |
| `pressure` | Pressure: absolute, gauge, atmospheric and average, a pressure difference, a vapor pressure and a partial pressure | Chapter 11 |
| `density` | Density, average density, the density of a fluid, of an object and of water, a vapor density | Chapter 11 |
| `surface-tension` | Surface tension | Chapter 11 |
| `flow-rate` | Flow rate and a branch's share of it | Chapter 12 |
| `viscosity` | Viscosity | Chapter 12 |
| `entropy` | Entropy and its changes | Chapter 15 |
| `temperature` | Temperature on any scale, a temperature change, an initial, final, critical, hot-reservoir or cold-reservoir temperature | Chapter 13 |
| `charge` | Electric charge, the charge on a body or a carrier, the elementary charge | Chapter 18 |
| `electric-field` | The electric field and its components, field lines and arrows | Chapter 18 |
| `voltage` | Electric potential, a potential difference, an emf, the Hall emf | Chapter 19 |
| `capacitance` | Capacitance, single or combined | Chapter 19 |
| `current` | Electric current, its rms and peak values, a drift's current | Chapter 20 |
| `resistance` | Resistance, and the reactances and impedance that stand where it stands in Ohm's law | Chapter 20 |
| `magnetic-field` | The magnetic field strength, its lines and arrows, an amplitude | Chapter 22 |
| `magnetic-flux` | Magnetic flux and its change | Chapter 23 |
| `inductance` | Self and mutual inductance | Chapter 23 |

Mass, length, angle, a count, a revolution, a percent and every
dimensionless ratio — a coefficient of friction, a mechanical advantage, an
efficiency — are untyped and stay in ink, as does the frame of a figure and
every label on it. A measured value $A$ and its uncertainty $\delta A$ are
untyped too.

A derived quantity is another type and another colour, and nothing is
coerced into a neighbouring type to save one: a frequency is not a time, a
force constant is not a force, an angular acceleration is not an angular
rate, and a torque keeps its own hue although its dimension matches
energy's. A variant of one type keeps the hue and differs by decoration: an
initial value is hollow or dashed, an average is dashed, a maximum and a
value after a change are told by their subscript or their prime.

Of root rule 7's four families this book uses all four, three of them
sparingly. Type hues from the scheme, bound per page, carry almost
everything it draws. The categorical palette `F.cat(i)` tells apart
instances that carry no type and must be distinguished — two cars in a
collision, two cans racing down an incline, the four hands on a rope, the
metals of a bimetallic strip — and it is never used in a hue the page has
bound. The element palette `F.el(symbol)` arises wherever a page draws a
named atom or molecule: the phases of 11.1, the gas boxes and speed
distributions of Chapter 13, the water lattice of 15.6, the molecules of
Chapter 12's random walk. A colour that is the physical fact is drawn only
where the plan names it: a flame, the visible band of a spectrum, mercury
and a colourless liquid in a manometer, blood. A body never wears a type
hue: a phase, a material and a temperature are told by shape, label and
packing, not by a tint on the body.

The test for one figure is root rule 7's: everything in it with an identity
is coloured, or the whole figure is ink. Colour-off drops the type hues and
keeps the categorical ones, so every figure must stay legible from its
labels, its arrow directions and its caption alone.
