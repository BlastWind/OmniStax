# Exploration: College Physics 2e, Chapter 10 Rotational Motion and Angular Momentum

Written in the chapter's prep pass (2026-09-14), after reading every module
of the chapter in full. The source of record is the CNXML bundle
(`source/osbooks-college-physics-bundle`), not the PDF. The book's
organisation (book → chapters → sections → untitled narrative headers, one
CNXML module per section, the apparatus inside the module) is as recorded in
`ch02/exploration.md`; nothing differs here.

## Why this chapter

Chapter 10 is the chapter in which everything the book has taught about
straight-line motion is said again about turning. Chapter 6 gave the angle,
the angular velocity and the radius; Chapter 9 gave the torque and made a
body's shape matter for the first time. Here the two meet: a rate of change
of angular velocity, a rotational mass that depends on where the mass sits,
a second law written in torque and moment of inertia, a kinetic energy of
spinning, a momentum of spinning and its conservation, a collision in which
a struck body turns, and, at the end, the direction that all of these
vectors point. Every section of the chapter is built on one analogy, stated
plainly by the book itself: $\theta, \omega, \alpha$ for $x, v, a$;
$\tau$ for $F$; $I$ for $m$; $\frac{1}{2}I\omega^2$ for
$\frac{1}{2}mv^2$; $L = I\omega$ for $p = mv$.

## Chapter 10 modules

Figures counted include the figures that sit inside examples and exercises,
since this chapter numbers those too (see below). CYU = Check Your
Understanding, AP = AP test prep items, CQ = conceptual questions, Sol =
exercises with an inline solution. The equation column counts the `{eq:…}`
markers the converter writes, most of which are the numbered substitution
steps of a worked example rather than results.

| Section | Module | Ex. | Fig. | Tables | Eq. | Defs | CYU | AP | CQ | Prob. | Sol. |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m42176 | 0 | 2 photos | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 10.1 Angular Acceleration | m42177 | 2 | 4 (3 diagrams, 1 photo-diagram) | 1 | 20 | 3 | 1 | 0 | 4 | 4 | 2 |
| 10.2 Kinematics of Rotational Motion | m42178 | 4 | 3 (2 diagrams, 1 photo in a problem) | 1 | 24 | 1 | 1 | 0 | 0 | 5 | 3 |
| 10.3 Dynamics of Rotational Motion: Rotational Inertia | m42179 | 1 | 6 (4 diagrams, 1 artwork table, 1 photo in a CQ) | 0 | 20 | 3 | 1 | 6 (3 keyed) | 5 | 11 | 7 |
| 10.4 Rotational Kinetic Energy: Work and Energy Revisited | m42180 | 3 | 7 (4 photos, 3 diagrams) | 0 | 40 | 2 | 1 | 4 (2 keyed) | 3 | 15 | 6 |
| 10.5 Angular Momentum and Its Conservation | m42182 | 3 | 9 (4 narrative, 2 in AP items, 3 in CQs) | 0 | 32 | 2 | 1 | 10 (5 keyed) | 13 | 7 | 3 |
| 10.6 Collisions of Extended Bodies in Two Dimensions | m42183 | 1 | 5 (3 narrative, 2 in problems) | 0 | 16 | 0 | 1 | 8 (4 keyed) | 3 | 5 | 3 |
| 10.7 Gyroscopic Effects: Vector Aspects of Angular Momentum | m42184 | 0 | 5 (4 narrative, 1 in a problem) | 0 | 1 | 1 | 1 | 2 (1 keyed) | 2 | 1 | 1 |

Every section carries one Check Your Understanding box and every one of the
seven is answered in the book, so the inline place of rule 12 holds exactly
one item per page. Two modules carry a table: 10.1's Rotational and
Translational Quantities and 10.2's Rotational Kinematic Equations. Both are
real `<table>` elements in the CNXML and both stay in the text as tables,
in a `div.book-table` with the number the book prints, as Chapter 1 does.
10.1 carries a PhET note (Ladybug Revolution) and the config drops it, as
every chapter so far has. Three modules carry a Take-Home Experiment (10.1's
leg on a rotating chair, 10.3's cardboard clock face with blue putty, 10.4's
race of cans of different foods); these are the book's own words and are
kept as notes. 10.2, 10.3 and 10.4 each carry a Problem-Solving Strategy box,
and 10.3, 10.4 and 10.5 carry Making Connections boxes; all are kept verbatim.

## Figure numbers

Unlike Chapter 9, this chapter numbers every figure, including the ones
inside examples, AP items, conceptual questions and problems. The AP item in
10.6 settles it: it sends the reader to "the table in Figure 10.12", and
Figure 10.12 is the artwork of ten rotational inertias only when the yo-yo
photograph inside a problem of 10.2 has been counted. The numbers below are
therefore a straight count through the chapter in document order.

| Section | Numbers |
|---|---|
| Intro | 10.1 the tornado, 10.2 the spinning skater |
| 10.1 | 10.3 uniform circular motion, 10.4 tangential acceleration, 10.5 tangential and centripetal acceleration, 10.6 the motorcycle; Table 10.1 Rotational and Translational Quantities |
| 10.2 | 10.7 the fishing reel, 10.8 the fly on the microwave plate, 10.9 the yo-yo (in a problem); Table 10.2 Rotational Kinematic Equations |
| 10.3 | 10.10 the bike wheel pulled by hand, 10.11 the point mass on a frictionless table, 10.12 the ten rotational inertias, 10.13 the merry-go-round, 10.14 the racing bicycle (in a conceptual question), 10.15 the motorcycle wheel (in a problem) |
| 10.4 | 10.16 the worker at the grindstone, 10.17 the disk turned by a perpendicular force, 10.18 the flywheel bus, 10.19 the large grindstone spun by hand, 10.20 the rescue helicopter, 10.21 the three cans of soup, 10.22 the cloud of gas and dust (in a conceptual question) |
| 10.5 | 10.23 the lazy Susan, 10.24 the kicking leg, 10.25 the spinning skater's two poses, 10.26 the Solar System coalescing, 10.27 the child on the platform (in an AP item), 10.28 the moon's elliptical orbit (in an AP item), 10.29 the four ways off a merry-go-round (in a conceptual question), 10.30 the diver (in a conceptual question), 10.31 the rifled cannon barrel (in a conceptual question) |
| 10.6 | 10.32 the bowling ball and pins, 10.33 the disk and the nailed stick, 10.34 the racquet struck in three places, 10.35 the twin skaters (in a problem), 10.36 the skater catching a ball (in a problem) |
| 10.7 | 10.37 the right-hand rule, 10.38 the direction of a torque, 10.39 the woman and the bike wheel, 10.40 the gyroscope, 10.41 Earth's precession (in a problem) |

Forty-one figures in all, 10.1 to 10.41.

## What is new in this chapter

- **Angular acceleration is a quantity of its own.** $\alpha = \Delta\omega/\Delta t$
  is to $\omega$ what $a$ is to $v$: a derived quantity with its own
  dimension, rad/s². The book declares `angular-rate` for angular velocity
  and angular frequency together, and rule 7 keeps a derived quantity out of
  its parent's hue, exactly as acceleration is not folded into velocity. So
  the chapter declares `angular-acceleration`, labelled angular
  acceleration, dimension rad/s².
- **Angular momentum is a quantity of its own.** $L = I\omega$ is measured
  in kg·m²/s and is not a linear momentum: Chapter 8's `momentum` carries
  kg·m/s, the two are not interconvertible, and 10.5's Check Your
  Understanding says so in the book's own words. The chapter declares
  `angular-momentum`.
- **The moment of inertia: the case for a type of its own.** The argument
  against is the analogy the chapter is built on: $I$ stands where $m$
  stands in Newton's second law, and this book leaves mass untyped and in
  ink, so the rotational mass could stay in ink beside it and $\text{net}\;\tau = I\alpha$
  would read exactly as $F = ma$ reads in Chapter 4, two hues and one black
  symbol between them. The argument for is stronger and is the one this
  chapter follows. A moment of inertia is not a mass: it has its own
  dimension, kg·m², and rule 7 says a derived quantity is another type and
  another colour. More decisively, this chapter *draws* it. Mass is untyped
  in this book because nothing is ever drawn as a mass; here the whole
  drama of 10.3 is that the same mass has a different moment of inertia
  when it sits further out, 10.4's cans race because their moments of
  inertia differ, and 10.5's skater changes hers to change her spin. A page
  whose slider moves mass outward and whose readout has to say what that
  did needs a hue for the thing that changed. Leaving it in ink would mean
  $I\omega = I'\omega'$, the most important sentence of the chapter, being
  half in colour and half in ink at the moment the reader is asked to see
  which side gave way. So `rotational-inertia` is declared, labelled moment
  of inertia, dimension kg·m², and the masses $m$ and $M$ that build it
  stay untyped and in ink, as the book's rules require.
- **Torque, position, force, energy, momentum and time are already
  declared.** Chapter 9 owns `torque` and the lever arms as positions,
  Chapter 8 owns `momentum` and the symbol $p$, Chapter 7 owns `energy` and
  the work and kinetic-energy symbols, Chapter 6 owns `angular-rate`,
  $\omega$, $\theta$, $r$ and $T$. No existing symbol row is changed.
  Eighteen symbol rows are added: $\alpha$, $\Delta\omega$, $\omega_0$,
  $\bar{\omega}$, $\omega'$, $a_\text{t}$, $I$, $I_\text{c}$, $I'$, $L$,
  $\Delta L$, $L'$, $\text{KE}_\text{rot}$, $\text{KE}'_\text{rot}$,
  $\text{KE}_\text{trans}$, $\text{KE}'$, $\text{PE}_\text{grav}$ and $p'$.
  Two of them need a key that is not their spelling, because the spelling is
  taken: Chapter 5's $\Delta L$ is a change in length and holds the key
  `ΔL` with the macro `\kdL`, so the change in angular momentum is keyed
  `ΔL_ang` with the macro `\kdLang`, the way Chapter 9 keyed its lever arm
  `r_lever` beside Chapter 6's `r_curv`; and 10.6's velocity of a center of
  mass, which the book here writes $v_\text{CM}$, uses Chapter 8's existing
  `v_cm`.

## Sketches to replace, and photographs

Every diagram of the chapter is a sketch of a turning thing and each is a
candidate for an interactive figure carrying the book's own numbers as its
defaults: the circle with its angle and its tangent velocity (10.3 to 10.5),
the motorcycle whose wheels turn as it accelerates (10.6), the fishing reel
paying out line (10.7), the bike wheel pulled by a hand (10.10), the point
mass on a tether (10.11), the merry-go-round with a child on it (10.13), the
disk turned by a perpendicular force (10.17), the three cans racing down an
incline (10.21), the lazy Susan (10.23), the kicking leg (10.24), the
skater's two poses (10.25), the disk that strikes the nailed stick (10.33),
the racquet struck in three places (10.34), the twin skaters (10.35), the
right-hand rule (10.37), the direction of a torque (10.38), the woman and
the bike wheel (10.39), the gyroscope (10.40) and Earth's precession
(10.41). Figure 10.12, the artwork of ten shapes and their rotational
inertias, is the chapter's reference table drawn as a picture; it is the
single best candidate in the chapter for a figure in which a shape is a
choice, the axis is a choice, and the formula and a bar for $I$ follow.

The photographs are the tornado (10.1, kept by rule 21), the spinning skater
(10.2, kept because the introduction's own sentence points at it), the yo-yo
(10.9), the racing bicycle (10.14), the worker at the grindstone (10.16),
the flywheel bus (10.18), the rescue helicopter (10.20), the cloud of gas
and dust (10.22), the bowling ball among the pins (10.32) and the rifled
cannon barrel (10.31). Each section decides by rule 14 whether the text
points at its photograph or the photograph shows the thing the passage is
about; 10.14, 10.22 and 10.31 sit inside conceptual questions and travel
with their items, and 10.9 sits inside a problem.

## Notes, strategies and PhET items

10.1 carries a Take-Home Experiment (sketching the angle, angular velocity
and angular acceleration of a leg on a rotating chair) and the PhET link
Ladybug Revolution, which is dropped and named in `notes`. 10.2 carries a
Making Connections box and the six-step Problem-Solving Strategy for
Rotational Kinematics. 10.3 carries a Making Connections box, a Take-Home
Experiment with a cardboard clock face and blue putty, the five-step
Problem-Solving Strategy for Rotational Dynamics, and a second Making
Connections box that contains Figure 10.12 inside it. 10.4 carries two
Making Connections boxes, the seven-step Problem-Solving Strategy for
Rotational Energy, and a Take-Home Experiment racing cans of food. 10.5
carries two Making Connections boxes. 10.6 and 10.7 carry none. Every box is
kept verbatim.

## Exercises that belong to another section

- 10.3's AP items reach forward. Three of the six (the Ferris wheel's forces
  and their effect on angular velocity and angular momentum, the lever whose
  angular momentum is to be measured, and the setup for determining angular
  acceleration and angular momentum) ask about angular momentum, which 10.5
  introduces; they are held for 10.5 with `source_section: "10.3"`, and both
  sections' `exercise_notes` say so.
- 10.4's four AP items are all about how a torque changes an angular
  velocity, which is 10.3's matter rather than 10.4's; the gear pair, the
  disk given twice the torque, the fishing reel and the two people on a
  merry-go-round are held for 10.3 with `source_section: "10.4"`.
- Five of 10.6's AP items are about angular momentum and torque rather than
  about collisions: the cyclist's gears, the electric screwdriver, the
  question about why an object's shape matters, the fan and the door on
  hinges belong with 10.5. The seesaw, on which a person sits quickly and
  gives the box on the other end an angular momentum, the board-game spinner
  flicked at one end and the balls on a string are collisions and stay with
  10.6. (Corrected in the chapter pass to what the tables hold.)
- 10.6's third conceptual question about a motorcycle's handlebars is
  repeated word for word as 10.7's first conceptual question; it tests the
  vector aspect of angular momentum, so it is set with 10.7 and 10.6's
  `exercise_notes` says that the book prints it twice. 10.6's first, on two
  collisions, is its own and stays with 10.6.
- 10.6's fourth problem, the person on ice who catches a thrown ball, carries
  an empty `type=` in the CNXML; it sits under Problems &amp; Exercises and is
  classed as a problem by the header it sits under, as the book's rules say.
- 10.3's last AP item repeats the stem of the one before it, and the one
  before it ends with the stem of the next item appended to its answer key.
  The pair is set as the book prints them, with the stray sentence left off
  the keyed item and named in `notes`.

## Answers

The key covers roughly every second problem, as it does throughout the book:
of the forty-eight end-of-module problems, twenty-five carry a solution and
twenty-three do not. Unkeyed problems are left out and named in the notes,
among them the two Construct Your Own Problem items (10.4's skater pulling
his arms in and 10.5's Earth-Moon system). Every Check Your Understanding
box is answered. Conceptual questions and the unkeyed AP items get an
AI-marked suggested approach, and an unkeyed AP choice item is kept as an
open item with its options, never as a graded choice.

## BE INSPIRING (rule 23)

The chapter's one idea is that turning is motion said in different words,
and the thing a reader most needs is to see the two vocabularies side by
side while a single scene runs. That is what the figures of this chapter
should do.

- **One wheel, two readouts.** A single turning wheel with its angle,
  angular velocity and angular acceleration on one side and the distance,
  speed and tangential acceleration of a point on its rim on the other,
  with the radius on a slider. Shrink the wheel and the rim quantities fall
  while the angular ones do not move. Table 10.1 becomes something the
  reader operates rather than reads, and 10.2's four kinematic equations
  can be laid on the same scene.
- **Move the mass, not the amount of it.** Figure 10.12 asks the reader to
  accept ten formulas. A figure in which the same total mass is slid from
  the axis to the rim, with the moment of inertia read out and a torque of
  fixed size applied, turns the formulas into one sentence the reader has
  watched: it is not how much, it is how far out. The merry-go-round of
  10.13, the racing cans of 10.21 and the skater of 10.25 are all the same
  sentence said again, and one scene per section can carry it rather than
  three unrelated ones.
- **A race is the clearest argument in the chapter.** Two cans released
  together, one hollow and one solid, with a bar for each showing how its
  gravitational potential energy is dividing between travelling and
  turning, settles 10.4's question in the time it takes them to reach the
  bottom, and it explains at the same moment why the rolling cylinder takes
  longer than the sliding one.
- **Conservation as a see-saw of two bars.** For 10.5, draw $I$ and $\omega$
  as two bars whose product is a third bar that does not move while the
  skater's arms come in. Nothing else in the chapter states a conservation
  law so plainly, and the same pair of bars serves the tornado, the
  coalescing Solar System and the child walking to the center of the
  platform.
- **Let the reader find the sweet spot.** 10.6's percussion point is a
  figure that almost builds itself: drag the strike point along the stick
  and watch the force on the nail reverse, passing through zero at a place
  the reader discovers rather than is told. The racquet's sweet spot is the
  same picture with a handle.
- **The one place the chapter leaves the plane.** 10.7 is about directions
  in space, and a flat drawing of a gyroscope has to lie about them. The
  right-hand rule, the torque perpendicular to the plane of $r$ and $F$,
  and a gyroscope whose axis sweeps a cone instead of falling are the one
  group of this chapter where rule 28.3 may be argued, and the plan lines
  of 10.7 should argue it rather than assume it: a locked view (rule 28.2)
  may well be enough for the right-hand rule, while the precessing
  gyroscope is the candidate that has to be turned to be believed.
