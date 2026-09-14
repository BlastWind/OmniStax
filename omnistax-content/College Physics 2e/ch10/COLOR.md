# Chapter 10 colour plan

Prepared 2026-09-14. Approved with `config.md`. This chapter uses the book's
declared physical types and the app's selected palette, as root rule 7
requires, and refines the book's `COLOR.md` rather than adding to it. No
figure hard-codes hues, and every page binds only the union of the types its
own figures draw, its sliders carry or its readouts state. The introduction
binds none.

| Quantity | Type | Treatment |
|---|---|---|
| Angular velocity, initial and final and average angular velocity, angular frequency | `angular-rate` | One hue for all; $\omega_0$, $\bar{\omega}$ and $\omega'$ keep the hue and differ by decoration |
| Angular acceleration | `angular-acceleration` | Its own hue; it is the rate of change of an angular rate, not an angular rate |
| Moment of inertia | `rotational-inertia` | Its own hue; $I'$ and $I_\text{c}$ keep it. The masses $m$ and $M$ that build it stay in ink |
| Angular momentum | `angular-momentum` | Its own hue; $L'$ and $\Delta L$ keep it. Chapter 8's linear momentum keeps its own |
| Torque | `torque` (Chapter 9) | Bind where a figure turns something about a pivot |
| Radius, arc length, distance, height | `position` | Bind where a scene measures a radius or a distance travelled |
| Tangential and centripetal acceleration | `acceleration` | One hue; $a_\text{t}$ and $a_\text{c}$ are told apart by direction and label, not by colour |
| Linear velocity and speed | `velocity` | Bind where a rim speed or a rolling speed is drawn |
| Force | `force` | Bind where a force turns or stops a body |
| Work, kinetic energy, rotational kinetic energy, potential energy | `energy` | One hue for all; $\text{KE}_\text{rot}$, $\text{KE}_\text{trans}$ and $\text{PE}_\text{grav}$ are told apart by subscript and by where the bar sits |
| Linear momentum | `momentum` (Chapter 8) | Bind in 10.6, where the linear momentum of a struck stick is compared with its angular momentum |
| Elapsed time | `time` | Bind where a moving scene exposes a clock |
| Mass, angle, revolutions, pure ratios and categorical labels | Untyped | Ink, including controls and equation symbols |

Which section binds what:

| Section | Types bound |
|---|---|
| 10.1 | `angular-rate`, `angular-acceleration`, `acceleration`, `velocity`, `position`, `time` |
| 10.2 | `angular-rate`, `angular-acceleration`, `position`, `velocity`, `acceleration`, `time` |
| 10.3 | `torque`, `rotational-inertia`, `angular-acceleration`, `force`, `position`, `acceleration`, `angular-rate`, `time` |
| 10.4 | `energy`, `rotational-inertia`, `angular-rate`, `torque`, `position`, `velocity`, `force` |
| 10.5 | `angular-momentum`, `rotational-inertia`, `angular-rate`, `torque`, `energy`, `time` |
| 10.6 | `angular-momentum`, `rotational-inertia`, `angular-rate`, `momentum`, `velocity`, `energy`, `position`, `force` |
| 10.7 | `angular-momentum`, `torque`, `angular-rate`, `force`, `position` |

The rows for 10.3, 10.4 and 10.6 were corrected after the build to the
types the pages draw (2026-09-14). 10.3 binds `acceleration`, because the
derivation's first step is $a = F/m$ and the point-mass figure draws that
arrow, and `angular-rate` and `time`, because the bike wheel and the
merry-go-round spin up under a clock and read out the angular velocity the
push produces. 10.4 and 10.6 bind `force`, because the disk of Figure 10.17
and the grindstone of 10.19 are a force turning a disk, and the percussion
figure of 10.34 draws the ball's blow and the force on the pivot. 10.7 binds
`position` as forecast, for the $r$ of the merry-go-round.

A body never wears a type hue. The skater, the merry-go-round, the cans of
soup, the stick on its nail and the gyroscope are drawn in ink and told
apart by shape, label and the categorical palette `F.cat(i)` where two of a
kind must be distinguished, never in a hue the page has bound. Where a
figure compares two states of one body — arms out and arms in, hollow and
solid — the two are told apart by the categorical palette or by hatching,
and the quantities that differ are read out in their own type hues.

The moment of inertia is coloured and the mass is not, which is deliberate
and is argued in `exploration.md`: a moment of inertia is a derived quantity
with its own dimension, this chapter draws it and varies it, and
$I\omega = I'\omega'$ has to be legible as two coloured quantities trading
places. All canvas colours come from `C(type)` and `PAL`. Turning colour off
must leave labels, arrow directions and the sense of rotation sufficient to
understand every figure.
