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

Of root rule 7's four families this book uses two. Type hues from the
scheme, bound per page, carry almost everything it draws. The categorical
palette `F.cat(i)` tells apart instances that carry no type and must be
distinguished — two cars in a collision, two cans racing down an incline,
the four hands on a rope — and it is never used in a hue the page has
bound. The element palette does not arise, because the book names no atom,
ion or molecule in the chapters built so far, and a colour that is the
physical fact arises only where a page draws light, which is later in the
book than anything built. A body never wears a type hue: a phase, a
material and a temperature are told by shape, label and packing, not by a
tint on the body.

The test for one figure is root rule 7's: everything in it with an identity
is coloured, or the whole figure is ink. Colour-off drops the type hues and
keeps the categorical ones, so every figure must stay legible from its
labels, its arrow directions and its caption alone.
