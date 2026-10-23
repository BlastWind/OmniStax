# College Physics 2e: what the book colours

The rule is root `RULES.md` item 7. This file records what is particular to
this book: its categories, its variant decorations, and the facts and
conventions it draws. A chapter's `COLOR.md` may refine it, never inventing a
hue.

## Categories

The categories are the `types` of `book.json`, in the order "Apply in order"
lays a palette along. In this book each is a kind of physical quantity.

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
| `activity` | The activity of a radioactive source, its decays per second | Chapter 31 |
| `decay-constant` | The decay constant of a nuclide | Chapter 31 |
| `dose` | Radiation dose, absorbed and effective | Chapter 32 |
| `latent-heat` | Latent heat: the heats of fusion, vaporization and sublimation, and the coefficient standing for any of them | Chapter 14 |
| `acoustic-impedance` | The acoustic impedance of a medium, on either side of a boundary | Chapter 17 |
| `specific-heat` | Specific heat, and its values at constant volume and at constant pressure | Chapter 14 |
| `area` | An area: a cross-section, a piston, a plate, a loop, a radiating surface, the area a power or a flux passes through, and its change | Chapter 5 |
| `mass` | Mass: of a body, a system, a particle, a rocket and the gas it ejects; the electron's mass, a rest mass, the mass of a nuclide, a mass defect | Chapter 4 |
| `volume` | Volume: of a body, a fluid, a gas, the part submerged, the fluid displaced, and a change in volume | Chapter 5 |
| `resistivity` | Resistivity, before and after a temperature change | Chapter 20 |
| `angle` | An angle: a direction, an incline, a rotation angle, a contact angle, the angles of incidence, reflection and refraction, the critical and Brewster's angles, a phase angle | Chapter 3 |
| `diffusion-constant` | The diffusion constant of a molecule in a medium | Chapter 12 |
| `temperature-coefficient` | A fractional change per degree: the coefficients of linear and volume expansion, the temperature coefficient of resistivity | Chapter 13 |
| `thermal-conductivity` | Thermal conductivity | Chapter 14 |
| `flow-resistance` | The resistance a vessel or tube offers to fluid flow | Chapter 12 |
| `lens-power` | The power of a lens, of the eye or of a mirror, in diopters | Chapter 25 |

A material property is a category: what a material or a medium is like,
which differs from one to the next. The expansion coefficients and the
temperature coefficient of resistivity are one category, since each is the
fractional change of a property per degree, entering as $X = X_0(1 + \alpha\,\Delta T)$;
the linear and the volume coefficient are variants of it. These stay in ink:
a constant of nature ($G$, $h$, $k_B$, $\varepsilon_0$, $\mu_0$, $R$, $N_A$,
Coulomb's, Stefan–Boltzmann's, Rydberg's and Hubble's constants); a count or a
label (a quantum number, $Z$, $A$, $N$, a number of turns, an order of
interference, a harmonic number, an amount in moles, a baryon or lepton
number); and a rating, one number comparing two quantities of one kind
(efficiency, a coefficient of performance, mechanical advantage, magnification,
numerical aperture, a coefficient of friction or of drag, the index of
refraction, emissivity, a reflection coefficient, RBE, the Reynolds number,
the sound level in decibels, a percent).

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
