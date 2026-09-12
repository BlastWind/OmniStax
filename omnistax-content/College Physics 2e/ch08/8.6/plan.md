# Plan: 8.6 Collisions of Point Masses in Two Dimensions (m42165)

Source: `source.md` (converted from CNXML). Status: built 2026-09-11
without a review stop, on Chen's instruction to finish the book in one
job.

The section that carries the conservation of momentum into the plane. Two
sketch figures (8.10 and 8.11), no photograph, two boxed equations and one
Making Connections box, one worked example, two AP items, one conceptual
question with a figure of its own, and eight problems, four of them keyed.
One page (rule 11).

## Sub-concepts (page headers)

The book prints one header of its own, "Elastic Collisions of Two Objects
with Equal Mass"; the rest of the section is a run of argument. Page
structure, one block per idea:

1. `two-dimensional` **Collisions in two dimensions, and point masses**
   (book: the three opening paragraphs — resolving the motion into
   components along perpendicular axes, the restriction to point masses,
   the choice of a coordinate system with an axis along the incoming
   velocity, and Figure 8.10). The symbols $\kpx$ and $\kpy$ anchor here.
2. `x-axis` **Conservation of momentum along the x-axis** (book: the
   component equation, the same equation in masses and velocities, the
   simplification when particle 2 is at rest, the components $v\cos\theta$,
   and the boxed result). $m_1$, $m_2$, $\kvone$, $\kvoneprime$,
   $\kvtwoprime$, $\theta_1$, $\theta_2$, $\kponex$ and $\kptwox$ anchor
   here, with the two $x$-axis equations.
3. `y-axis` **Conservation of momentum along the y-axis** (book: the
   component equation, the same in masses and velocities, both initial
   $y$-velocities zero, the components $v\sin\theta$, and the boxed
   result). $\kponey$ and $\kptwoy$ anchor here, with the two $y$-axis
   equations.
4. `unseen` **Finding the velocity of an object you cannot see** (book:
   the paragraph on two equations and two unknowns, Example 8.7 with
   Figure 8.11 after it, where the book places it). The scattering-angle
   equation anchors here.
5. `equal-masses` **Elastic collisions of two objects with equal mass**
   (book's own header: the internal kinetic energy of two equal masses
   before and after, and the identity the two conservation equations
   give). The two kinetic-energy equations anchor here.
6. `separation` **Why the balls separate at ninety degrees** (book: the
   term that must vanish, the three ways it can, and what pool players
   see; the Connections to Nuclear and Particle Physics box). The
   vanishing term and the separation angle anchor here.

Cross references to Medical Applications of Nuclear Physics and Particle
Physics stay plain text, as the chapter's config decided, and so does the
reference in problem 6 to the perfectly inelastic equation of 8.5, which
the book writes as a module link and which is kept as the book's own
wording. Degree signs are written `^\circ`.

Learning objectives, the section summary and the one glossary term
(point masses) come out of the running text into the views. All seven
exercises go to the Exercises document; the section has no Check Your
Understanding box, and neither the conceptual question nor the two AP
items is a short Remember or Understand check that belongs beside a
passage, so nothing is inline.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| two-dimensional-collision | idea | two-dimensional | the opening paragraphs; Figure 8.10; the section summary; every problem |
| point-mass | idea | two-dimensional | the second paragraph and the glossary; CQ 1 |
| momentum-conservation-x | result, eq-momentum-x | x-axis | the boxed equation; Example 8.7; problems 3 and 5 |
| momentum-conservation-y | result, eq-momentum-y | y-axis | the boxed equation; Example 8.7; problems 1, 5 and 7 |
| scattering-to-find-unseen-object | skill | unseen | Example 8.7; problem 5 (Rutherford) |
| equal-mass-elastic-2d | result, eq-equal-mass-identity | equal-masses | the identity the section derives; problem 7 |
| ninety-degree-separation | result, eq-separation-angle | separation | the three ways the term vanishes; problem 1 |

The section leans on `conservation-of-momentum` and
`momentum-conserved-by-direction` (8.3), `elastic-collision` and
`internal-kinetic-energy` (8.4), `inelastic-collision` (8.5),
`vector-components` (3.1), `analytical-vector-addition`,
`components-from-magnitude-angle` and `magnitude-direction-from-components`
(3.3), `kinetic-energy` (7.2) and `center-of-mass` (6.5), all of which the
coverage rows mark as used where the text uses them.

## Figures

id · replaces or Sim · concepts · what moves or still, and why · sliders ·
headline · graph · 3D

1. `sim-scatter` · replaces Figure 8.10 · two-dimensional-collision,
   point-mass, momentum-conservation-x, momentum-conservation-y ·
   **moves**: the idea has a time in it, since one object travels in,
   strikes the other and the two travel out, so the figure runs the
   collision once per loop and takes the scrubber. Object 1 comes in
   along the $x$-axis at $\kvone$, meets object 2 at the origin and the
   two leave at $\theta_1$ above and $\theta_2$ below the axis; the
   momentum of each object is drawn as an arrow with its $x$- and
   $y$-components as dashed lines. The two angles are what the reader
   sets, and the two final speeds are what the conservation equations
   give, which is the section's own "two equations can only be used to
   find two unknowns" read the other way round. $m_1$ is held at
   0.250 kg, the mass of the incoming object in the worked example, and
   the defaults reproduce the example: $\kvoneprime = 1.50$ m/s and
   $\kvtwoprime = 0.886$ m/s. · sliders: $\kvone$ (1.00 to 4.00 m/s,
   default 2.00, velocity), $\theta_1$ ($5^\circ$ to $85^\circ$, default
   $45^\circ$, ink), $\theta_2$ ($-85^\circ$ to $-5^\circ$, default
   $-48.5^\circ$, ink), $m_2$ (0.100 to 1.000 kg, default 0.400, ink) ·
   "t = 1.80 s · the 0.250 kg object leaves at 1.50 m/s and the 0.400 kg
   object at 0.886 m/s, so the momentum along y still adds to zero" ·
   graph below: a momentum ledger, one bar for the momentum along $x$
   before the collision against the two after it, and one for the two
   $y$-components, which are equal and opposite · no. Readout: the
   $x$-axis equation with the live numbers; small line on the $y$-axis
   equation. Draws momentum and velocity.
2. `sim-dark-room` · replaces Figure 8.11 · scattering-to-find-unseen-object,
   momentum-conservation-x, momentum-conservation-y · **moves**: the same
   reason as the first figure, and here the reader also watches the object
   cross the room it cannot be seen in; one run per loop, with the
   scrubber. An object slides into a dark room, strikes something at rest
   inside it and emerges at $\theta_1$ with speed $\kvoneprime$; the
   velocity of the unseen object, which the two conservation equations
   give, is drawn dashed inside the room. The defaults are Example 8.7 and
   the figure reads out $\theta_2 = 311.5^\circ$ and
   $\kvtwoprime = 0.886$ m/s. · sliders: $\kvone$ (1.00 to 4.00 m/s,
   default 2.00, velocity), $\kvoneprime$ (0.50 to 3.00 m/s, default 1.50,
   velocity), $\theta_1$ ($5^\circ$ to $85^\circ$, default $45^\circ$,
   ink), $m_2$ (0.100 to 1.000 kg, default 0.400, ink) · "t = 1.80 s · the
   unseen 0.400 kg object leaves at 0.886 m/s and 311.5º, and the internal
   kinetic energy has fallen from 0.500 J to 0.438 J" · none: the room is
   the picture, and the ledger belongs to the figure above · no. Readout:
   the scattering-angle equation with the live numbers; small line on the
   internal kinetic energy before and after, which is the Discussion of
   the example. Draws velocity and energy.
3. `sim-billiards` · Sim, replacing nothing in the book ·
   equal-mass-elastic-2d, ninety-degree-separation · **moves**: a cue ball
   strikes a ball at rest and the two roll away, so the idea has a time in
   it; one shot per loop, with the scrubber. The two balls have the same
   mass, and the reader sets the angle of separation directly; the graph
   below plots the internal kinetic energy after the collision against the
   angle of separation, and the curve crosses the value before the
   collision at exactly $90^\circ$. This is the one thing the print
   figures cannot show at all: the section states the result and leaves
   the algebra to the reader, and here the reader can break the angle and
   watch the kinetic energy fail to balance. · sliders: $\kvone$ (2.00 to
   10.00 m/s, default 6.00, velocity), $\theta_1$ ($5^\circ$ to $85^\circ$,
   default $30^\circ$, ink), the angle of separation $\theta_1 - \theta_2$
   ($40^\circ$ to $140^\circ$, default $90^\circ$, ink) · "the balls
   separate at 90.0º · the cue ball leaves at 5.20 m/s and the struck ball
   at 3.00 m/s, and the internal kinetic energy is exactly what it was" ·
   graph below: the ratio of the internal kinetic energy after the
   collision to the internal kinetic energy before it, against the angle
   of separation, with the value 1 marked · no. Readout: the equal-mass
   identity with the live numbers; small line on the extra term
   $m\kvoneprime\kvtwoprime\cos(\theta_1 - \theta_2)$ and where it
   vanishes. Draws velocity and energy.

Both of the book's figures are sketches and both are replaced. The section
has no photograph to keep or drop.

The figure the conceptual question prints, the small object heading for a
massive cube (`Figure_09_06_05a.jpg`, 400 book pixels), rides on the
question's card as the exercise's own `figure`, with the book's alt text
and caption, as most of the exercise figures of 3.2 do. The chapter's
config had listed it among the figures that serve exercises and are
redrawn faithfully; only one exercise uses it, the book's own drawing
shows the impact parameter clearly, and redrawing it would have asked for
a section of running text that the book does not have, so the lighter
route was taken instead. The image is copied to `media/ch08/`.

Extra simulations (rule 15), considered:

- **A ball bouncing off a wall at an angle**, to show that the wall
  reverses one component of the momentum and leaves the other alone. It
  opens a real view, but it belongs to 8.2, whose AP items set exactly
  that question, and this section is about two objects rather than an
  object and a wall. Left.
- **The centre of mass of the two objects, moving in a straight line at a
  constant velocity through the collision.** Six exercises across 8.3 to
  8.6 ask for a centre-of-mass velocity and nothing in this chapter's text
  derives it. It would open a genuine view, but it is 8.3's to build, as
  `ch08/exploration.md` says, and putting it here would leave the
  one-dimensional sections without it. Left, and named again for the
  chapter pass.
- **The Rutherford experiment, a stream of helium nuclei scattering from a
  gold nucleus.** It animates what problem 5 describes and adds no
  quantity the first figure does not already draw. Left.

Built: none of the three. `sim-billiards` is a required figure under rule
14, not an extra one: the section introduces two results, the equal-mass
identity and the ninety-degree separation, for which the book prints no
figure at all, and a figure the agent adds that replaces nothing in the
book is a Sim.

## Exercises

- No Check Your Understanding boxes; nothing inline.
- 1 conceptual question, `cq1` (fs-id2093269, the small object and the
  massive cube), Understand, an open item with an AI-written suggested
  approach, citing `two-dimensional` and carrying the book's figure on its
  card.
- 2 AP items, both about the centre-of-mass velocity of a two-dimensional
  collision in which the objects stick together. `ap1` (fs-id2039335, two
  cars of equal mass at an intersection) is keyed "(b)" and is a graded
  choice with the book's four options, Understand. `ap2` (fs-id2218337,
  the 2000 kg and 3500 kg cars) has no key and is an open item with an
  AI-marked suggested approach, Analyze. Both stay in 8.6, since the
  collision they describe is a two-dimensional one, and both are tagged
  with 6.5's `center-of-mass` beside this section's nodes, as the chapter
  config asks.
- 4 problems keyed and kept: `p1` (the two identical pucks, multi, with
  the second puck's speed and direction and the book's verification of
  the elastic collision in the solution), `p3` (the cannon's recoil,
  multi, with the book's discussion of the vertical momentum in the
  solution), `p5` (Rutherford's helium and gold, multi), `p7` (the
  derivation of the equal-mass identity, open, with the book's own
  working as the answer to compare against).
- 4 problems left out, having no answer in the book's key: 2
  (fs-id3179260, confirming that the example conserves momentum), 4
  (fs-id2994591, the bowling ball and pin), 6 (fs-id3136237, the two cars
  on the icy intersection) and 8 (fs-id2947426, the hockey player's
  recoil).
- Nothing is taken from another section, and nothing of this section's is
  held for another: the two AP items and the conceptual question all turn
  on a collision in the plane, which only this section introduces, and
  every problem needs the two axis equations.
- No generated questions: every node of the section has a book exercise
  that tests it.
- Weights: `p1` gives `ninety-degree-separation` its full value and
  `internal-kinetic-energy` weight 2, since part (b) only checks a sum;
  `p3` gives `momentum-conserved-by-direction` weight 2, since part (c)
  names it rather than turning on it, and `kinetic-energy` weight 2;
  `p5` gives `elastic-collision` weight 2 and `kinetic-energy` weight 2,
  since the work is all in the two axis equations; `cq1` gives
  `point-mass` weight 2 and `elastic-collision` weight 2; both AP items
  give `center-of-mass` its full value and the section's own nodes
  weight 2, since what they test is the centre of mass rather than the
  scattering.

## Views

- Formulas: the nine equations of the section already in `chapter.json`,
  the four boxed and named ones important and the derivation steps not.
- Definitions: the thirteen variables of the section; the one glossary
  term, point masses.
- Concept map: the seven nodes above with their edges into 3.1, 3.3, 8.3,
  8.4 and 8.5.

## Colour

The page binds momentum, velocity and energy. `sim-scatter` draws the
momentum of each object as an arrow with its components and reads the two
axis equations out in velocities; `sim-dark-room` draws the velocities and
states the internal kinetic energy before and after; `sim-billiards` draws
the velocities and graphs the internal kinetic energy. The masses, the two
scattering angles and the angle of separation are untyped and stay in ink,
as the book's own rules say.

## Wanted at chapter level

- variables `p_x` → 8.6-two-dimensional
- variables `p_y` → 8.6-two-dimensional
- variables `m_1` → 8.6-x-axis
- variables `m_2` → 8.6-x-axis
- variables `v_1` → 8.6-x-axis
- variables `v_1prime` → 8.6-x-axis
- variables `v_2prime` → 8.6-x-axis
- variables `θ_1` → 8.6-x-axis
- variables `θ_2` → 8.6-x-axis
- variables `p_1x` → 8.6-x-axis
- variables `p_2x` → 8.6-x-axis
- variables `p_1y` → 8.6-y-axis
- variables `p_2y` → 8.6-y-axis
- equations `eq-momentum-x-components` → 8.6-x-axis
- equations `eq-momentum-x` → 8.6-x-axis
- equations `eq-momentum-y-components` → 8.6-y-axis
- equations `eq-momentum-y` → 8.6-y-axis
- equations `eq-scattering-angle` → 8.6-unseen
- equations `eq-equal-mass-kinetic-energy` → 8.6-equal-masses
- equations `eq-equal-mass-identity` → 8.6-equal-masses
- equations `eq-separation-term-zero` → 8.6-separation
- equations `eq-separation-angle` → 8.6-separation
- symbols `v_1x`, `v_2x`, `v_1y`, `v_2y` and their primed forms have no
  row in `book.json`, so the four intermediate equations of the section
  that are written in masses and velocity components
  ($m_1v_{1x} + m_2v_{2x} = m_1{v'}_{1x} + m_2{v'}_{2x}$ and the three
  like it) are set in plain LaTeX and stand in ink, while $\kvone$ and
  the primed speeds beside them are coloured. Rows with the type
  `velocity` and macros `\kvonex`, `\kvtwox`, `\kvoney`, `\kvtwoy`,
  `\kvonexprime`, `\kvtwoxprime`, `\kvoneyprime` and `\kvtwoyprime`
  would let those four lines wear the velocity hue too; the text would
  then want the macros written in. Optional, and the page reads well
  without them.
- The four intermediate equations named above have no row in
  `chapter.json` and are written in the text as display math with no id.
  They are steps of the derivation rather than results, so no row is
  asked for; if the chapter pass wants them on the sheet they would be
  `eq-momentum-x-masses`, `eq-momentum-x-at-rest`,
  `eq-momentum-y-masses` and `eq-momentum-y-at-rest`, all with
  `important: false`, anchored at `8.6-x-axis` and `8.6-y-axis`.
- The centre-of-mass sim that `ch08/exploration.md` leaves for a later
  pass would serve both AP items of this section. The `cite` of an
  exercise must name a span of its own section's text, so neither item
  can point at 8.3's sentence on the momentum of the centre of mass;
  both cite `two-dimensional` instead and their suggested approaches
  name that sentence in words.

Decided in the chapter pass (2026-09-12). The thirteen variable anchors and the
nine equation anchors above are written.

The eight velocity-component symbol rows (`v_1x`, `v_2x`, `v_1y`, `v_2y` and
their primed forms) are **not** added. The plan calls them optional, and they
would buy colour on four lines of a derivation the section does not keep as
results: the four equations written in components have no row in `chapter.json`
by the plan's own argument, so giving their symbols a hue would colour steps
that lead nowhere the formula sheet goes. Rule 7 asks that a page colour only
what it binds, and this page binds momentum and velocity through the symbols it
does carry. The four intermediate equations stay without rows for the same
reason.

The `cite` of an exercise must name an id of the section the exercise is set in,
which is why both AP items here cite `two-dimensional` rather than 8.3's
sentence on the momentum of the centre of mass; their approaches name that
sentence in words and both tag 6.5's `center-of-mass`. The chapter pass keeps
that, and 8.5's two items of the same kind keep no cite at all, since this
section's opening passage is about the collision the items describe while 8.5's
text never mentions the centre of mass.

The masculine ordinal stood in seventeen places in this section's `figures.js`,
in the angle sliders' units, the arc labels, an axis label and the headlines,
and is now the degree sign; the two angle units in the exercise answers went
with it.
