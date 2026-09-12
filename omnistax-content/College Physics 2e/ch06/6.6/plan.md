# Plan: 6.6 Satellites and Kepler's Laws: An Argument for Simplicity (m42144)

Source: `source.md` (converted from CNXML), with Table 6.2 read back out of
the module itself, since the converter drops the blank Parent cells that the
CNXML writes as `morerows` spans. Status: built 2026-09-11 without a review
stop, on Chen's instruction to finish the book in one job.

The section that carries the centripetal force of 6.3 and the universal law
of 6.5 out to the Moon and the planets. Three sketch figures and no
photograph, one table, one boxed Making Connections note, one worked
example, no Check Your Understanding box, one conceptual question and nine
problems, five of them keyed. One page (rule 11).

## Sub-concepts (page headers)

The book prints three headers of its own and they are kept as the headers of
the spans they open. The opening paragraphs and the paragraph that turns the
period equation into a way of weighing a parent body carry no header of the
book's, so those two spans are given headers written for them.

1. `orbits` **Orbits we can describe without a computer** (book: the
   examples of gravitational orbits, the remark that precise descriptions
   need large computers, the two numbered conditions, and the paragraph on
   Kepler and Tycho Brahe). $m$ and $M$ anchor here.
2. `keplers-laws` **Kepler's Laws of Planetary Motion** (the book's own
   header: the three laws, Figure 6.26, Figure 6.27, the third law in
   equation form, the note that the laws hold for all bodies satisfying the
   two conditions, Example 6.7 and the paragraph on Newton taking the next
   step). $\kTorbone$, $\kTorbtwo$, $\krone$, $\krtwo$, $\kT$, $\kr$ and
   eq-kepler3 anchor here.
3. `derivation` **Derivation of Kepler's Third Law for Circular Orbits**
   (the book's own header, as far as the ratio: Newton's second law applied
   to circular motion, gravity substituted for the net force, the
   cancelling of $m$, the average speed, and $\kT^2 = 4\pi^2 r^3/GM$).
   $\kFnet$, $\kac$, $\kv$, $G$ and eq-Fnet-circular,
   eq-gravity-is-centripetal, eq-v2-orbit, eq-v-circumference and eq-T2
   anchor here.
4. `parent-mass` **The mass of a parent body from its satellites** (book:
   the paragraph that solves for $r^3/T^2$, the remark that the ratio is
   the same for every satellite of one parent, the reference to Table 6.2
   and the perturbations, and the Making Connections note). eq-r3-T2
   anchors here.
5. `simplicity` **The Case for Simplicity** (the book's own header: the
   IAU's three numbered criteria for a planet, the demotion of Pluto,
   Table 6.2, the breadth of the universal law, and the Ptolemaic model
   set beside the Copernican with Figure 6.28).

Table 6.2 stands where the book stands it, inside `simplicity`, even though
the paragraphs of `parent-mass` are the ones that point at it; the reference
reads "Table 6.2" as the book writes it. Its continuation rows carry an
empty Parent cell in the CNXML (`morerows="6"` for Venus through Pluto and
`morerows="2"` for Europa through Callisto), so the column is restored here
as a cell spanning those rows. The book's own table has no row for Uranus
between Jupiter and Saturn, and that is the book's and is kept as printed.

Cross references to chapters the app has not built are plain text: Particle
Physics in the Making Connections note. The two sub-figures the book prints
under one number, 6.26 (a) and (b), are one number with one image, not a
fold (the bundle keeps them in a single file).

Learning objectives, the section summary and the key equations come out of
the running text into the tables and the views; the section defines no
glossary term, so the chapter's glossary gains nothing here. The conceptual
question and the problems go to the Exercises document; there is no Check
Your Understanding box, so nothing is inline.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| satellite-conditions | idea | orbits | the two numbered conditions; the systems named after them; the closing remark that the third law compares satellites of one parent only; CQ 1 |
| keplers-first-law | result | keplers-laws | the statement of the law; Figure 6.26; CQ 1 |
| keplers-second-law | result | keplers-laws | the statement of the law; Figure 6.27 |
| keplers-third-law | result, eq-kepler3 | keplers-laws | the statement and the equation; Example 6.7; Table 6.2; problems 4 and 7 |
| orbital-speed | result, eq-v2-orbit | derivation | the first three steps of the derivation and the remark that all masses orbit alike; problem 6(a) |
| kepler-third-law-derivation | result, eq-T2 | derivation | the derivation carried through to the ratio; problems 2 and 6 |
| mass-from-orbit | skill, eq-r3-T2 | parent-mass | the ratio $r^3/T^2$ and the remark that it has been used extensively; Table 6.2; problems 2 and 4 |
| descriptive-versus-causal-law | idea | simplicity | the third law called descriptive only; the Ptolemaic model set beside the Copernican in Figure 6.28; CQ 1 |

The section leans on `universal-gravitation` and `gravitational-constant`
(6.5), `centripetal-force`, `centripetal-force-magnitude` and
`free-body-circular-motion` (6.3), `centripetal-acceleration-magnitude`
(6.2), `uniform-circular-motion` (6.1), `newtons-second-law` and
`net-external-force` (4.3), `inertial-frame` (4.5), `mass` (4.2),
`period` (16.2), `average-velocity` (2.3) and `law` and `model` (1.1); the
coverage rows mark each as used or reinforced where the text uses it.

`keplers-first-law` has no exercise of its own in the book, as the chapter's
config noted; no question is generated for it (rule 13), and the conceptual
question that asks in what frames the laws hold is tagged with it at a
reduced weight.

## Figures

id · replaces · concepts · what moves · sliders · headline · graph · 3D

1. `sim-ellipse` · replaces Figure 6.26 (a) and (b) · keplers-first-law ·
   **still**: an ellipse is the set of points whose two focal distances add
   to the same total, and there is no time in that idea at all; the figure
   answers its two sliders and nothing else, so it registers no cycle and
   carries no transport (rule 14) · the eccentricity $e$ (0 to 0.80,
   default 0.50, ink, a dimensionless ratio) and the place of the point on
   the curve (0º to 360º, default 55º, ink, an angle) · "e = 0.50 · the two
   distances are 0.63a and 1.37a, and they add to 2.00a wherever the pencil
   sits on the curve" · none: the ellipse is the picture, drawn twice side
   by side as the book draws it, the pins and the string on the left and
   the planet with $M$ at one focus on the right · no. Readout:
   $d_1 + d_2 = 2a$ with the numbers, and a line saying how far the planet
   runs from $M$ between its nearest and its furthest point. Draws
   position.
2. `sim-equal-areas` · replaces Figure 6.27 · keplers-second-law ·
   **moves**: the planet runs the whole orbit once per loop at the speed
   Kepler's second law gives it, and three sectors swept in equal times are
   shaded as the line from $M$ sweeps them, so the reader watches the same
   area take the same time near the parent body and far from it; the idea
   is about equal *times*, so the figure has a clock in it and takes the
   transport and its scrubber · the eccentricity $e$ (0.10 to 0.70, default
   0.50, ink) and the length of the swept interval $\Delta \kT$ (0.02 to
   0.12 of the period, default 0.08, time) · "t = 0.62T · m is 1.44a from M
   and moving at 0.63 times its mean speed" · graph beside the orbit, since
   the orbit is as tall as it is wide and leaves the width free: the speed
   of the planet against time for one orbit, with the three intervals
   shaded on the same axis, so the fast passage near $M$ and the slow one
   far away are read off directly · no. Readout: the ratio of the speed at the
   nearest point to the speed at the furthest, $(1+e)/(1-e)$, with the
   numbers. Draws position, velocity, time.
3. `sim-third-law` · replaces nothing, so it is a **Sim** with no number ·
   keplers-third-law, orbital-speed, kepler-third-law-derivation,
   mass-from-orbit, satellite-conditions · **moves**: a satellite runs one
   circular orbit per loop about a parent body, with the gravitational
   force drawn toward the centre and the velocity along the tangent, so the
   reader sees the force that supplies the centripetal acceleration while
   the period is read off; the idea has a time in it, the period itself,
   and the figure takes the transport · the orbital radius $\kr$ (7 to 400
   $\times 10^3$ km, default 7.88, position, the radius of Example 6.7) and
   the parent's mass $M$ (0.20 to 2.50 Earth masses, default 1.00, ink; the
   upper end is where the shortest orbit the radius slider allows still
   takes an hour, which keeps the whole line inside the decades the graph
   shows) ·
   "r = 7.88 × 10³ km · the satellite goes round in 1.93 h, and the Moon,
   384 × 10³ km out, takes 655 h" · graph beside the orbit: the period
   against the orbital radius on logarithmic axes, where the law is a
   straight line of slope 3/2, with the current satellite on it and the
   Moon marked as an observation; sliding the parent's mass moves the line
   until it runs through the Moon's point, which is how a parent body is
   weighed · no. Readout: $G mM/\kr^2 = m\kac = m\kv^2/\kr$ solved for
   $\kv$ and $\kT$ with the live numbers. Draws position, velocity,
   acceleration, force, time.
4. `sim-frames` · replaces Figure 6.28 (a) and (b) ·
   descriptive-versus-causal-law, keplers-third-law · **moves**: Earth and
   Mars run their orbits on one clock, drawn twice; on the left the Sun is
   at the centre and each planet keeps to a plain circle, and on the right
   the same two motions are plotted with Earth at the centre, where Mars's
   track turns back on itself every time Earth overtakes it. That is the
   loop the Ptolemaic model needed an epicycle for and the Copernican model
   gets for nothing, which is the book's argument in one picture; the
   motion is the whole point, so the figure runs eight years per loop and
   takes the transport · the orbital radius of the outer planet (1.20 to
   3.00 AU, default 1.52, position) and the length of track kept (1.0 to
   8.0 y, default 4.0, time) · "t = 3.2 y · seen from the Sun, Mars runs a
   plain circle; seen from Earth, it has turned back on itself twice in the
   last 4.0 y" · none: the two pictures are the figure · no. Readout:
   $\kT = \kr^{3/2}$ in years and astronomical units, with the numbers.
   Draws position, time.

Every book figure of the section is a sketch and every one is replaced;
there is no photograph to keep or drop, and no figure of the section serves
an exercise. The one image that does serve an exercise, the graph of speed
against radius in the answer to the Critical Thinking item, travels with
that item to 6.3, and the file is copied into `media/ch06/` so that it is
there when 6.3 wants it.

The two conditions of `satellite-conditions` are the premise every figure of
the section draws under rather than a picture of their own, so they are
listed against `sim-third-law`, whose small satellite goes round a parent
body that never moves.

Extra simulations (rule 15), thought through and judged:

- Table 6.2 as a scatter of $r^3$ against $T^2$ for all thirteen satellites
  the book lists, the Sun's on one line and Jupiter's on another: it would
  show at a glance that the ratio is a property of the parent and not of
  the satellite. Judged against the rule: `sim-third-law` already draws
  that line and already moves it when the parent's mass changes, and the
  table itself prints the ratio in its last column, so the scatter would
  animate what the reader can already see. Left.
- Two satellites of the same parent at once, so that the ratio of the
  periods can be read straight off the scene: the radii the section works
  with differ by a factor of fifty, so one orbit would be a ring against
  the other's disc and one period would be three hundred times the other.
  The graph of `sim-third-law` carries the comparison without that
  trouble. Left.
- An orbit whose eccentricity can be run up until the satellite strikes the
  parent body, to show what the two conditions rule out: it opens nothing
  the section's own text discusses, since the book keeps to bound orbits.
  Left.

None built.

## Exercises

- No Check Your Understanding box; nothing inline.
- 1 conceptual question, `cq1` (fs-id1864324, the frames in which Kepler's
  laws are valid and whether they are descriptive or causal), Understand,
  with an AI-written suggested approach, citing `simplicity`.
- 4 problems keyed and kept: `p2` (fs-id1412516, the mass of the Sun from
  Earth's orbit, number, $1.98\times 10^{30}$ kg), `p4` (fs-id3246107, the
  ratio of Jupiter's mass to Earth's from Table 6.2, number, 316), `p6`
  (fs-id2639693, Integrated Concepts, the space debris, multi with the five
  keyed parts), `p7` (fs-id2932002, Unreasonable Results, the one-hour
  orbit, number for (a) with (b) and (c) in the solution as the book writes
  them).
- 4 problems left out, having no answer in the book's key: the
  geosynchronous radius (fs-id3043002), the mass of Jupiter from one of its
  moons (fs-id1403658), the star on the periphery of the Milky Way
  (fs-id1060579) and the Construct Your Own Problem item on the NEAR
  spacecraft at Eros (fs-id1845618).
- Left to another section: the Critical Thinking item (exer-86626) asks
  where the normal force on a car in a vertical loop is greatest, which is
  centripetal force and belongs to 6.3, so under rule 12 it is set there
  with `source_section: "6.6"` and both sections' `exercise_notes` say so.
  Its keyed answer carries a graph of speed against radius, and that image
  travels with it.
- Taken from elsewhere: nothing. The conceptual question of 6.5 that asks
  for a free-body diagram of a satellite in an elliptical orbit touches
  Kepler's second law, but what it asks the reader to draw is the
  gravitational force, which 6.5 introduces, so it stays there.
- No generated questions. `keplers-first-law` has no book exercise of its
  own, as the chapter's config foresaw, and none is written for it.
- Weights: `p2` gives `mass-from-orbit` its full value and
  `kepler-third-law-derivation` 2, since the period equation is the step
  that has to be rearranged; `p4` gives `mass-from-orbit` its full value
  and `keplers-third-law` 2, since the table does most of the work; `p6`
  gives `orbital-speed` its full value and `relative-velocity` and
  `newtons-second-law` 1 each, since parts (b) and (d) reach back into 3.5
  and Chapter 4; `p7` gives `keplers-third-law` and `unreasonable-results`
  their full value and `physical-solution` 1; `cq1` gives
  `descriptive-versus-causal-law` and `satellite-conditions` their full
  value and `keplers-first-law` and `keplers-third-law` 1 each.

## Views

- Formulas: the seven equations of the section already in `chapter.json`,
  Kepler's third law, the orbital speed, the period equation and the ratio
  $r^3/T^2$ important and the three steps of the derivation not.
- Definitions: the twelve variables of the section. The section defines no
  glossary term.
- Concept map: the eight nodes above with their edges into 1.1, 4.3, 4.5,
  6.3 and 6.5.

## Colour

The page binds position, velocity, acceleration, force and time. Every
figure draws a radius in the position hue and three of them carry one on a
slider; the orbital speed is an arrow and a readout in the velocity hue; the
gravitational force on the satellite is drawn toward its parent in the force
hue and the centripetal acceleration is written in the readout beside it;
and the period is a slider, a readout and an axis in the time hue. The
masses $m$ and $M$, the gravitational constant $G$, the eccentricity and the
angles stay in ink, as the book's rules say.

## Wanted at chapter level

- variables `m` → 6.6-orbits
- variables `M` → 6.6-orbits
- variables `T_orb1` → 6.6-keplers-laws
- variables `T_orb2` → 6.6-keplers-laws
- variables `r_1` → 6.6-keplers-laws
- variables `r_2` → 6.6-keplers-laws
- variables `T` → 6.6-keplers-laws
- variables `r_curv` → 6.6-keplers-laws
- variables `F_net` → 6.6-derivation
- variables `a_c` → 6.6-derivation
- variables `v` → 6.6-derivation
- variables `G` → 6.6-derivation
- equations `eq-kepler3` → 6.6-keplers-laws
- equations `eq-Fnet-circular` → 6.6-derivation
- equations `eq-gravity-is-centripetal` → 6.6-derivation
- equations `eq-v2-orbit` → 6.6-derivation
- equations `eq-v-circumference` → 6.6-derivation
- equations `eq-T2` → 6.6-derivation
- equations `eq-r3-T2` → 6.6-parent-mass
- concepts `keplers-third-law`: its `name` reads "Kepler's third law,
  $\kTone^2/\kTtwo^2 = \krone^3/\krtwo^3$", and `\kTone` and `\kTtwo` are
  Chapter 4's two tensions, which are forces and carry the force hue. The
  name should read "Kepler's third law,
  $\kTorbone^2/\kTorbtwo^2 = \krone^3/\krtwo^3$", the two orbital periods
  this chapter staged, so that the concept map prints the two periods in
  the time hue as the section's own equation does.

### Decided in the chapter pass

- Every anchor above is written on its variable and equation row in
  `chapter.json`.
- The `name` of `keplers-third-law` is corrected to
  "Kepler's third law, $\kTorbone^2/\kTorbtwo^2 = \krone^3/\krtwo^3$" and
  merged, so the concept map prints the two orbital periods this chapter
  staged in the time hue rather than Chapter 4's two tensions.
- The symbol keys `r_curv` (macro `\kr`) and `T_orb1`/`T_orb2` stand as they
  were merged; they are the book-level rows this chapter added and no other
  chapter's row is touched.
