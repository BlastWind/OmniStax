# Plan: 8.2 Impulse (m42159)

Source: `source.md` (converted from CNXML). Status: built 2026-09-11 without
a review stop, on Chen's instruction to finish the book in one job.

The section that names the impulse and shows what it is good for. One book
figure, a graph of force against time, and no photograph; one worked
example; three boxed notes; twelve AP test prep items, three conceptual
questions and sixteen problems, eight of them keyed. Two of the AP items
print a graph of their own, which the chapter's config asks to be copied
over faithfully. One page (rule 11).

## Sub-concepts (page headers)

The book prints no headers of its own here, only one run of argument
followed by a worked example and the graph. Page structure, one block per
idea:

1. `impulse` **Impulse: the change in momentum a force produces** (book:
   the opening paragraph on how long a force acts, the rearrangement of
   ${F}_{\text{net}} = \Delta p / \Delta t$, the equation
   $\kdp = \kFnet\kdt$, the naming of the impulse, and the boxed note
   Impulse: Change in Momentum, whose last two paragraphs are the
   dashboards, the airbags, the crumpling racing cars and the soft mat).
   The book runs all of this together and gives the reader no seam, so it
   is one block. $\kdp$, $\kFnet$, $\kdt$ and the equation `eq-impulse`
   anchor here.
2. `billiard` **The impulse on a ball bouncing off a wall** (book: Example
   8.1, the two billiard balls striking a rigid wall, with its two
   strategies, its two solutions and its discussion; the example is
   `ex-billiard`). $\ku$, $m$ and the equations
   `eq-impulse-perpendicular` and `eq-impulse-at-angle` anchor here.
3. `effective-force` **The average effective force** (book: the paragraph
   on forces that are not constant, Figure 8.2, and the two boxed notes
   that follow it, the Take-Home Investigation on hand movement and the
   Making Connections on constant force and constant acceleration).
   $\kFeff$ and $\kt$ anchor here.
4. `exercise-figures` **The graphs the test prep items refer to** (the two
   force-against-time graphs that two of the AP items are set on, copied
   over faithfully as the chapter's config asks).

The reference to the previous section, which the CNXML writes as a module
link, is the book's own wording, "Linear Momentum and Force", as plain
text. The book's bold $\Delta \mathbf{p}$ and $\mathbf{F}_{\text{net}}$ of
the vector statement are set bold in ink where the book sets them bold and
take the `\k` macros where it writes the magnitudes; the components
${p}_{\text{xi}}$, ${p}_{\text{yf}}$ and the rest of the example stay in
plain LaTeX, since the chapter's symbol table carries no rows for the
initial and final components of one ball.

Learning objectives, the section summary and the two glossary terms come
out of the running text into the views. One conceptual question is set
inline, after the passage it checks; the rest of the exercises go to the
Exercises document.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| change-in-momentum | idea | impulse | the glossary term; the billiard example in components; AP items 10 and 12 |
| impulse | result, eq-impulse | impulse | the boxed note; the section summary; most of the sixteen problems |
| extending-collision-time | idea | impulse | the dashboard, airbag and crumpling paragraphs of the note; CQ 1 and 2; problem 7 |
| average-force-from-impulse | skill | impulse | problems 1, 3, 9, 11; AP items 1, 2, 3, 4, 6, 9 |
| effective-force | idea | effective-force | Figure 8.2 and its caption; AP items 11 and 12 |

The section leans on `linear-momentum`, `calculate-momentum` and
`newtons-second-law-momentum` (8.1), on `newtons-third-law` (4.4), on
`free-fall-kinematics` (2.7), on `components-from-magnitude-angle` (3.3)
and on `interpret-motion-graph` (2.8); the coverage rows mark each as used
where the text uses it.

## Figures

id · replaces · concepts · what moves · sliders · headline · graph · 3D

1. `sim-impulse` · new, a Sim · impulse, change-in-momentum,
   extending-collision-time, average-force-from-impulse · **moves**: a
   passenger of mass $m$ rides at $\kv$ into a padded barrier and is
   brought to rest over the contact time $\kdt$; the momentum arrow
   shrinks to nothing while the force the padding exerts is drawn
   backward at a constant length, and the contact is drawn in slow
   motion, since it lasts only a few hundredths of a second. The idea has
   a time in it — the passenger travels and then stops — so it runs a
   finite loop and gets the scrubber · mass $m$ (40 to 120 kg, default
   75.0, ink), speed $\kv$ (5 to 30 m/s, default 20.0, velocity), contact
   time $\kdt$ (0.005 to 0.500 s, default 0.020, time) · "Δt = 0.020 s ·
   taking away 1,500 kg·m/s of momentum that quickly needs 75,000 N;
   stretch the stop to 0.150 s and 10,000 N will do" · graph below: the
   force against the contact time, the hyperbola $\kFnet = \kdp/\kdt$,
   with the current stop marked and the rectangle of area $\kdp$ under it
   shaded · no. Readout: $\kFnet = \kdp/\kdt$ with the numbers; small
   line on the momentum change being the same however long the stop
   takes. Draws momentum, force, velocity, time.
2. `sim-billiard` · new, a Sim · change-in-momentum, impulse · **moves**:
   a billiard ball of mass $m$ comes in at $\theta$ from the perpendicular
   at speed $\ku$, strikes the rigid wall and leaves at the same angle
   and the same speed; the momentum before and after are drawn as arrows
   from the point of contact, the change in momentum is drawn between
   their tips and carried to the wall along the perpendicular, and the
   force on the wall is drawn the other way by Newton's third law. The
   ball travels, so the figure runs a finite loop and gets the scrubber ·
   angle from the perpendicular $\theta$ (0º to 60º, default 30, ink),
   speed $\ku$ (1.0 to 10.0 m/s, default 5.0, velocity), mass $m$ (0.10 to
   0.30 kg, default 0.16, ink) · "θ = 30.0º · the ball keeps the momentum
   it had along the wall and reverses the part across it, so the impulse
   is 1.39 kg·m/s straight into the wall" · none: the scene is the
   picture · no. Readout: $\Delta p_x = -2m\ku\cos\theta$ with the
   numbers; small line on the ratio to the head-on strike,
   $1/\cos\theta$, which is the book's 1.155 at 30º. Draws momentum,
   velocity, force. The book draws no figure for this example and tells
   the reader to sketch one, which is the reason the figure is here.
3. `sim-effective-force` · replaces Figure 8.2 (the actual and the
   effective force on a bouncing ball) · effective-force, impulse ·
   **still**: the idea is an area against another area and no clock runs
   in it, so the figure answers its sliders and carries no transport
   (rule 14, and the chapter's config says the same) · peak force
   $\kFeff$... the peak of the actual force $F$ (200 to 2,000 N, default
   1,000, force), the length of the contact $\kdt$ (0.02 to 0.30 s,
   default 0.10, time), the shape of the bump (1.0 to 6.0, default 1.6,
   ink, since it is a dimensionless exponent) · "the ball pushes with up
   to 1,000 N for 0.100 s, and an effective force of 553 N over the same
   0.100 s gives the same impulse, 55.3 kg·m/s" · the graph is the
   figure: force against time, the bell-shaped actual force with the
   area under it shaded, and the rectangle of the effective force over
   the same interval shaded to the same area · no. Readout:
   $\kdp = \kFeff\kdt$ with the numbers; small line saying the two areas
   are equal and both are the impulse. Draws force, time, momentum, since
   the shaded area is an impulse and is shaded as one (rule 7).
4. `fig-bounce` · a figure that serves exercises, copied faithfully,
   labelled Figure with no number since the book gives it none ·
   effective-force · **still** · none · none · the graph is the figure: a
   force of 15 N standing from 0.080 s to 0.24 s and nothing outside it ·
   no. Draws force, time.
5. `fig-collision` · a figure that serves exercises, copied faithfully,
   labelled Figure with no number · effective-force · **still** · none ·
   none · the graph is the figure: the force rising from zero to 15 N by
   0.080 s, standing there until 0.24 s and falling back to zero by
   0.32 s · no. Draws force, time.

Photographs: the section prints none, so there is none to keep or drop.
The book's one numbered figure, 8.2, is a sketch of a graph and is
replaced by `sim-effective-force`, which carries the book's number, its
image under `originals` and its caption, and the book's width of 300. The
two exercise graphs carry no width in the CNXML, so their `widths` stay
empty.

Extra simulations (rule 15), considered and left:

- The momentum of a ball dropped from a height, bouncing and rebounding
  to a lower height, with the impulse the floor gives it read off: five
  of the AP items are exactly this calculation. It would be a good
  figure, but it is `sim-impulse` with a fall added, and the fall is
  Chapter 2's material rather than this section's. Left.
- A graph of velocity against time for the block bouncing off the spring
  of AP item 5, with the average slope drawn: the item prints its own
  table and the point of it is reading a change in velocity off numbers,
  which a drawn line would do for the reader. Left.
- The derivation $\kKE = \kp^2/2m$ of problem 13 drawn as two curves
  against the momentum: it relates two quantities the section never
  relates in its text, and it belongs with Chapter 7. Left.

Two built, both of them figures the triggers of rule 14 call for rather
than extras: `sim-impulse` for the result the section states and
`sim-billiard` for the example the book asks the reader to sketch.

## Exercises

- One inline item: `cq1` (fs-id1247228, padding and a carpeted floor)
  follows the `impulse` passage, since it is a short Understand check on
  the paragraphs about dashboards and soft mats.
- 3 conceptual questions, `cq1` to `cq3`, Understand, none of them keyed
  anywhere in the chapter, each with an AI-written suggested approach.
- 12 AP test prep items, `ap1` to `ap12`, in the book's order. Six are
  keyed and are kept as the book keys them: `ap1` (the ball of putty),
  `ap3` (the ceramic bowl), `ap5` (the block and the spring, with the
  book's table of velocities against time inside the prompt), `ap7` (what
  you would need to measure), `ap9` (the air hockey puck) and `ap11` (the
  rectangular pulse) are choice items with the book's answer. Six have no
  key — `ap2` (the bouncing ball), `ap4` (the glass figure), `ap6` (the
  crash test), `ap8` (design an experiment), `ap10` (the puck's change in
  momentum) and `ap12` (the trapezoid) — and each is an open item with an
  AI-marked suggested approach, as rule 13 and the 2.5, 3.1 and 4.x
  precedents do. None of the six prints options, so none had to be turned
  from a graded choice into an open item.
- 8 problems keyed and kept: `p1` (the bullet in the barrel, number),
  `p3` (the hand slapping the leg, number for (a) with the book's reason
  for (b) in the solution), `p5` (the bumper car, multi), `p7` (the
  dashboard and the airbag, multi), `p9` (the cruise ship, number), `p11`
  (the fire hose, number), `p13` (the derivation of $\kKE = \kp^2/2m$,
  open with the book's own derivation) and `p15` (the tennis serve,
  number).
- 8 problems left out, having no answer in the book's key: 2
  (fs-id1628347), 4 (fs-id1310662), 6 (fs-id1506126), 8 (fs-id1401795),
  10 (fs-id1267234), 12 (fs-id1372894), 14 (fs-id1684977) and 16
  (fs-id1524152).
- Held from elsewhere: none. 8.1's second AP item (fs-id1049937, the
  baseball struck by a bat for 20 ms) is an average force from a change
  in momentum and a contact time, and it was considered for this page;
  it is answered by 8.1's own $\kFnet = \kdp/\kdt$ with nothing this
  section adds, so it stays with 8.1 and this section's
  `exercise_notes` says so. Nothing of this section belongs to a later
  one: every item here turns on the impulse alone.
- No generated questions: every node has a book exercise of its own.
- Weights: `p13` gives `impulse` weight 2 and `change-in-momentum`
  weight 1, since the work is the algebra of the kinetic energy rather
  than the impulse; `ap7` gives `average-force-from-impulse` its full
  value and `impulse` weight 2, since it asks only what has to be
  measured; `cq3` gives `extending-collision-time` its full value and
  `impulse` weight 1.

## Views

- Formulas: the three equations of the section already in `chapter.json`,
  the impulse important and the two steps of the example not.
- Definitions: the seven variables of the section, and the two glossary
  terms, change in momentum and impulse.
- Concept map: the five nodes above with their edges into 8.1, 2.8, 3.3
  and 4.4.

## Colour

The page binds momentum, force, velocity and time. Every figure draws a
force and a time; `sim-impulse` draws the momentum as an arrow and carries
the speed on a slider; `sim-billiard` draws the momentum before, after and
its change, and carries the speed on a slider; `sim-effective-force`
shades the two equal areas, which are impulses and so wear the momentum
hue (rule 7). The masses, the angle $\theta$ and the dimensionless shape
of the bump stay in ink.

## Wanted at chapter level

- variables `Δp` → 8.2-impulse
- variables `F_net` → 8.2-impulse
- variables `Δt` → 8.2-impulse
- variables `F_eff` → 8.2-effective-force
- variables `t` → 8.2-effective-force
- variables `u` → 8.2-billiard
- variables `m` → 8.2-billiard
- equations `eq-impulse` → 8.2-impulse
- equations `eq-impulse-perpendicular` → 8.2-billiard
- equations `eq-impulse-at-angle` → 8.2-billiard
- Add a variable row `v` for section 8.2: type `velocity`, meaning "the
  speed the object is moving at before the force brings it to rest",
  unit "m/s", anchor `8.2-impulse`. The section's own figure carries it on
  a slider and its readout states it, and the Definitions view has
  nothing to say about $\kv$ on this page without the row.

Decided in the chapter pass (2026-09-12). The seven anchors above are written,
and the variable row for `v` is added to `chapter.json` with the meaning,
the unit and the anchor the section asked for, so the Definitions view has
something to say about the speed the slider of `sim-impulse` carries.

Two things the reading found and fixed. The caption of Figure 8.2 said the
force was "drawn against the time as in Figure 8.2", which is the figure
pointing at itself and which the build would have linked to itself; the clause
is gone. The masculine ordinal the CNXML writes for degrees stood in six places
in `figures.js`, in the angle slider's unit and in the arc labels and headlines
of `sim-billiard`; outside math it is now the degree sign, which is what
Chapters 4, 9 and 16 write.
