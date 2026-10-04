# College Physics 2e: what the book colours

The rule is root `RULES.md` item 7. This file records what is particular to
this book: its categories, its variant decorations, and the facts and
conventions it draws. A chapter's `COLOR.md` may refine it, never inventing a
hue.

## Categories

The categories are the `types` of `book.json`, in the order the palette lays
its hues along. In this book each is a kind of physical quantity.

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

The book intends mass, angle, area and volume to be categories as well
(decided 2026-10-04); they are not yet declared.

A derived quantity is another category, and nothing is coerced into a
neighbouring one to save a colour: a frequency is not a time, a force
constant is not a force, an angular acceleration is not an angular rate, and
a torque keeps its own hue although its dimension matches energy's.

## Variants

A variant keeps its category's hue and differs by decoration: an initial
value is hollow or dashed, an average is dashed, a maximum and a value after a
change are told by their subscript or their prime.

## Facts and conventions

The element palette `F.el(symbol)` colours every named atom or molecule a
figure draws: the phases of 11.1, the gas boxes and speed distributions of
Chapter 13, the water lattice of 15.6, the molecules of Chapter 12's random
walk. A colour that is the physical fact is drawn where the plan names it: a
flame, the visible band of a spectrum, mercury and a colourless liquid in a
manometer, blood. A body never wears a category hue: a phase, a material and a
temperature are told by shape, label and packing, not by a tint on the body.

## Referents

The book's examples are full of things to keep apart: two cars in a
collision, two cans racing down an incline, the four hands on a rope, the
metals of a bimetallic strip. Each is a referent of its section and takes a
referent colour.

The frame of a figure and its labels stay in ink, and with colour coding off
every figure stays legible from its labels, its arrow directions and its
caption.
