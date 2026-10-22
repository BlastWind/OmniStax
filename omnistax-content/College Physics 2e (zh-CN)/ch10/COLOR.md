# Chapter 10 colour plan

Prepared 2026-09-14, brought in line with root item 7 on 2026-10-04. This
chapter uses the book's declared categories and the palette the reader picks,
and refines the book's `COLOR.md` rather than adding to it. No figure
hard-codes hues.

| Quantity | Type | Treatment |
|---|---|---|
| Angular velocity, initial and final and average angular velocity, angular frequency | `angular-rate` | One hue for all; $\omega_0$, $\bar{\omega}$ and $\omega'$ keep the hue and differ by decoration |
| Angular acceleration | `angular-acceleration` | Its own hue; it is the rate of change of an angular rate, not an angular rate |
| Moment of inertia | `rotational-inertia` | Its own hue; $I'$ and $I_\text{c}$ keep it |
| Angular momentum | `angular-momentum` | Its own hue; $L'$ and $\Delta L$ keep it. Chapter 8's linear momentum keeps its own |
| Torque | `torque` (Chapter 9) | Wherever something is turned about a pivot |
| Radius, arc length, distance, height, lever arm | `position` | Wherever a scene measures a radius or a distance travelled |
| Tangential and centripetal acceleration | `acceleration` | One hue; $a_\text{t}$ and $a_\text{c}$ are told apart by direction and label, not by colour |
| Linear velocity and speed | `velocity` | A rim speed, a rolling speed, a flight speed |
| Force | `force` | A force that turns or stops a body |
| Work, kinetic energy, rotational kinetic energy, potential energy | `energy` | One hue for all; $\text{KE}_\text{rot}$, $\text{KE}_\text{trans}$ and $\text{PE}_\text{grav}$ are told apart by subscript and by where the bar sits |
| Linear momentum | `momentum` (Chapter 8) | In 10.5's comparison and in 10.6, where the linear momentum of a struck stick is compared with its angular momentum |
| Elapsed time | `time` | Wherever a moving scene exposes a clock |
| Mass | `mass` | The masses $m$ and $M$ of a point mass, a wheel, a disk, a stick, a skater and the bodies of Figure 10.12 |
| Angle | `angle` | The rotation angle $\theta$ and $\Delta\theta$, a number of revolutions, the angle between a force and its radius, the slope of 10.4's inclines, the tilt of 10.7's gyroscope |
| Pure ratios such as $r/\ell$ and $R'/R$ | none | Ink |

A category is coloured on every page, so a section colours whatever it
names; each figure row's `draws` lists the categories that figure colours, so
its referent hues keep clear of them.

The moment of inertia and the mass are each their own category. A moment of
inertia is a derived quantity with its own dimension, this chapter draws it and
varies it, and $I\omega = I'\omega'$ has to be legible as two coloured
quantities trading places; $I = \sum mr^2$ then reads as a mass and a position
building it.

## Referents

A body never wears a category hue. The particular things of each example are
referents of their section, drawn with `F.ref` and marked in the text with
`<span data-ref>`: the disk, the bicycle wheel, the motorcycle and its wheels of
10.1; the fishing reel and its line, the fly, the plate and the lunch of 10.2;
the bike wheel and the hand, the point mass with its pivot and cord, and the
merry-go-round with the father and the child of 10.3; the disk, the grindstone
and the person turning it, the rescue helicopter and its blades, and the three
cans of 10.4; the lazy Susan and the person, the lower leg, the skater and the
cloud of 10.5; the disk, the stick and the nail, and the ball, the racquet and
the hand of 10.6; and the disk and the right hand, the person and the
merry-go-round, the wheel and the woman, and the gyroscope and its stand of
10.7. Where a figure compares two states of one body (arms out and arms in,
hollow and solid) the two are one referent, and the quantities that differ are
read out in their own category hues.

10.6's percussion figure draws the stick and the nail of Figure 10.33 beside
the racquet and the hand; its own referents are listed ball, racquet, hand, so
that each takes the hue of the part it stands in for (the disk, the stick, the
nail) under the book's scheme.

All canvas colours come from `C(type)`, `F.ref(id)` and `PAL`. Turning colour
off must leave labels, arrow directions and the sense of rotation sufficient to
understand every figure.
