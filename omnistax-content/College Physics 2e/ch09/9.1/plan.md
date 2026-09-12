# Plan: 9.1 The First Condition for Equilibrium (m42170)

Source: `source.md`, converted from the CNXML of m42170. Status: built
2026-09-11 without a review stop, on Chen's instruction to finish the book
in one job.

The section that opens the chapter's argument. It states the first
condition, `net F = 0`, notes that it holds along every axis, names static
and dynamic equilibrium beside a motionless person and a car at constant
velocity, and then shows with two drawings of one ice hockey stick that the
condition is necessary and not sufficient. Four sketch figures, no
photograph, no table, no worked example, no problem set, two conceptual
questions, one PhET note dropped by the chapter config. The section is thin
and keeps a page of its own (rule 11).

## Sub-concepts (page headers)

The book prints no header of its own here, only the run of the argument, so
every header below is the agent's (chapter config).

1. `first-condition` **The first condition for equilibrium** (book: the
   opening paragraph and `net F = 0`; the paragraph that says the net
   external force in any direction is zero and `net F_x = 0` and
   `net F_y = 0`). The variables $\kF$, $\kFx$ and $\kFy$ and the equations
   eq-net-force-zero and eq-net-force-axes anchor here.
2. `static-and-dynamic` **Static equilibrium and dynamic equilibrium**
   (book: the paragraph that names both terms, Figure 9.2 and Figure 9.3).
   The variables $\kwgt$, $\kN$, $\kFa$ and $\kff$ anchor here, since the
   two free-body diagrams are where the book writes them.
3. `application-point` **Where the force is applied** (book: the last
   paragraph, with Figures 9.4 and 9.5 folded into one figure).

The reference to the next section is plain text, as the chapter config asks
for a reference inside Chapter 9. The learning objectives, the section
summary and the two glossary terms come out of the running text into the
tables and the views.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| first-condition-equilibrium | result, eq-net-force-zero | first-condition | the two stated equations; both free-body diagrams; every worked example of the chapter |
| static-equilibrium | idea | static-and-dynamic | the term beside Figure 9.2; the glossary; conceptual question 1 |
| dynamic-equilibrium | idea | static-and-dynamic | the term beside Figure 9.3; the glossary; conceptual question 1 |
| point-of-application | idea | application-point | the two hockey sticks and the sentence that the condition is necessary but not sufficient; conceptual question 2 |

The section leans on `newtons-second-law`, `net-external-force`,
`system-of-interest` and `friction` (4.3), `free-body-diagram`,
`external-force` and `force` (4.1), `newtons-first-law` (4.2),
`normal-force` and `weight` (4.5 and 4.3), `resolve-forces-into-components`
(4.6), `acceleration` (2.4) and `instantaneous-velocity` (2.3); the
coverage rows mark each as used where the text uses it.

## Figures

id · replaces or Sim · concepts · what moves or still, with the reason ·
sliders with their types · headline · graph or none · 3D or not

1. `sim-person` · replaces Figure 9.2 (the motionless person) ·
   static-equilibrium, first-condition-equilibrium · **still**: a person
   standing on the ground has no time in it; the figure answers its
   sliders, registers no cycle and gets no transport (rule 14, chapter
   config) · the person's mass $m$ (40 to 120 kg, default 70.0, ink,
   because mass is untyped in this book) and the mass of a pack he carries
   $m_{\text{pack}}$ (0 to 40 kg, default 0.0, ink) · "the ground pushes up
   with 686 N, exactly what the person weighs, so the net external force is
   zero and he does not move" · no graph in the chart sense; beside the
   scene stands the free-body diagram and a column that adds the vertical
   forces with their signs and lands on zero · no. Readout:
   $\text{net}\;\kFy = \kN - \kwgt$ with the numbers. Draws force.
2. `sim-car` · replaces Figure 9.3 (the car at constant velocity) ·
   dynamic-equilibrium, first-condition-equilibrium · **still**: a car at
   constant velocity has no time in it either, since nothing about the
   scene changes as the clock runs; the figure answers its sliders and gets
   no transport · the car's mass $m$ (800 to 2,500 kg, default 1,200, ink),
   the applied force $\kFa$ between the tires and the road (0 to 2,000 N,
   default 700, force) and the air friction $\kff$ (0 to 2,000 N, default
   700, force) · "the 700 N the tires apply and the 700 N of air friction
   cancel, and so do the 11,800 N of weight and the support of the four
   tires, so the car keeps its velocity", and where the two horizontal
   forces are set unequal, "the net external force is 300 N forward, so the
   car speeds up and this is not equilibrium" · no chart; two columns
   beside the free-body diagram, one for the horizontal forces and one for
   the vertical, each adding to zero when the car is in equilibrium, which
   is the picture of $\text{net}\;\kFx = 0$ and $\text{net}\;\kFy = 0$ ·
   no. Readout: both component equations with the numbers. Draws force,
   velocity.
3. `sim-stick` · replaces Figure 9.4 and folds Figure 9.5 (the same ice
   hockey stick, the same two forces, applied first along one line and then
   at different places) · point-of-application, first-condition-equilibrium
   · **still**: the idea is where the two forces act, not how the stick
   turns; the book draws the rotation as two curved arrows and so does the
   figure, and the chapter config asks a section that wants a body to move
   to argue for it, which nothing here does · the size of the two equal and
   opposite forces $\kF$ (5 to 60 N, default 30.0, force) and the distance
   $d$ between their two lines of action (0 to 0.60 m, default 0.00, ink,
   since 9.1 names no symbol for it and the perpendicular lever arm is
   9.2's) · at $d = 0$, "the two forces of 30.0 N act along one line, the
   net external force is zero, and the stick stays where it is"; above it,
   "the two forces of 30.0 N still add to zero, but their lines of action
   are 0.30 m apart and the stick turns" · no graph; the free-body diagram
   is drawn beside the scene and is the same picture at every setting,
   which is the point the book is making · no. Readout:
   $\text{net}\;\kF = \kF - \kF = 0$ with the numbers, and a second line
   saying that the free-body diagram cannot tell the two cases apart.
   Draws force.

   The fold is rule 14's own case: the book draws one scene twice because
   print cannot slide the forces along the stick, and one drawing with a
   slider for the offset walks from the first to the second. The row keeps
   9.4 as its `number` and 9.5 under `folds`, its eyebrow reads
   "Figure 9.4 + 9.5", it carries both of the book's images as
   `originals`, and both numbers in the prose land on it.

4. `sim-equilibrium` · Sim, replacing nothing in the book ·
   static-equilibrium, dynamic-equilibrium, first-condition-equilibrium ·
   **still**: the speed is a slider, not a clock; at every setting the
   scene is one frozen moment and the forces do not depend on how long the
   crate has been sliding · the crate's mass $m$ (10 to 200 kg, default
   50.0, ink), the push $\kFa$ (0 to 400 N, default 150, force) and the
   constant speed $\kv$ (0 to 20 m/s, default 0.0, velocity) · at
   $\kv = 0$, "the crate is motionless, so it is in static equilibrium: the
   150 N push and the 150 N of friction cancel, and so do the 490 N of
   weight and the support of the floor"; above it, "the crate slides at 6.0
   m/s and keeps that velocity, so it is in dynamic equilibrium: the same
   four forces, adding to the same zero" · no chart; the free-body diagram
   and the two component columns, both of which stay exactly as they are as
   the speed is raised · no. Readout: the two component equations with the
   numbers, and a second line saying that nothing in them mentions the
   speed. Draws force, velocity.

Photographs: the section has none. Its four images are all free-body
diagrams drawn over a sketch or a photograph, and the chapter config says
the diagram is the content, so all four are transformed and none is kept as
a `photo` row.

Figures that serve exercises: none. Neither conceptual question carries a
figure, and the section prints no problem set.

Extra simulations (rule 15), thought through and judged:

- **The same body, at rest and rolling** (`sim-equilibrium`, built). The
  book draws static equilibrium on a person and dynamic equilibrium on a
  car, two different scenes, so a reader can come away thinking the two
  states differ in their forces. One crate whose speed the reader raises
  from zero, with a free-body diagram that does not move a millimetre as
  the speed goes up, shows what the book says in words and never draws:
  equilibrium asks that the velocity be constant, not that it be zero. Two
  of the section's three learning objectives are exactly this distinction,
  so the view earns its place.
- A body pulled by several ropes at angles, where the reader sets two of
  them and the figure draws the third that closes the triangle. It would
  draw $\text{net}\;\kFx = 0$ and $\text{net}\;\kFy = 0$ with forces that
  are not along the axes, which the book's four figures never do. Left:
  4.5's tightrope walker and 4.7's traffic light already hang a weight from
  two cables and resolve the tensions, and 4.6 already turns the axes under
  a body, so the view is built and the reader has met it.
- A hockey stick that actually rotates when the forces are offset. Left:
  the rotation is next section's subject, the chapter config makes every
  figure of Chapter 9 a still one, and an accelerating rotation drawn here
  would promise a quantity (torque) that 9.1 does not yet have.

## Exercises

- The section prints no problem set, no AP item and no Check Your
  Understanding box; it has two conceptual questions and nothing else.
  Neither is keyed, as no conceptual question in this book is, so each
  carries an AI-marked suggested approach (rule 13).
- `cq1` (fs-id2603151, the velocity of a body in dynamic equilibrium, with
  a sketch of its external forces), Understand, set **inline** after
  `static-and-dynamic`: it is the short check that belongs beside the
  passage it tests (rule 12), and the chapter has no Check Your
  Understanding box to fill that place. Cites `static-and-dynamic`. Tagged
  `dynamic-equilibrium` at full value, `first-condition-equilibrium` and
  `free-body-diagram` at weight 1, since the question turns on what
  constant velocity means and only asks the reader to draw a diagram they
  already have from 4.1.
- `cq2` (fs-id2601562, under what conditions a rotating body can be in
  equilibrium), Understand, at the end: it looks forward to the rotational
  half of the definition, so it is not a check on the passage beside it.
  Cites `application-point`. Tagged `point-of-application` at full value,
  `dynamic-equilibrium` and `first-condition-equilibrium` at weight 1.
- Nothing is taken from another section. The five AP items of 9.4 were read
  against this section: the see-saw estimate and the overhanging books go
  to 9.2 and 9.3 by the chapter config, and the board on a string, the
  bridge piers and the unknown mass all need the second condition, so each
  stays with the section that introduces what it tests. Nothing in 9.2,
  9.3, 9.5 or 9.6 tests the first condition alone.
- Nothing is left out: the section has no unkeyed problem, because it has
  no problem.
- No question is generated. Every concept node of the section is tested by
  one of the two conceptual questions, and `first-condition-equilibrium` is
  tested again by every problem of the chapter that finds a supporting
  force.

## Views

- Formulas: the two equations `chapter.json` already carries for 9.1, both
  important.
- Definitions: the seven variables of the section; the two glossary terms,
  static equilibrium and dynamic equilibrium.
- Concept map: the four nodes above with their eleven edges into Chapters
  2 and 4.

## Colour

The page binds force and velocity. Every figure draws forces, names them
with the `\k` macros and carries at least one force slider; the car and the
crate draw the constant velocity as an arrow and the crate carries it on a
slider. The masses, the distance between the two lines of action and the
lengths of the scenes stay untyped and in ink, as the standing decisions
ask. Torque is not bound here: 9.1 never writes it.

## Wanted at chapter level

- variables `F` → 9.1-first-condition
- variables `F_x` → 9.1-first-condition
- variables `F_y` → 9.1-first-condition
- variables `w` → 9.1-static-and-dynamic
- variables `N` → 9.1-static-and-dynamic
- variables `F_app` → 9.1-static-and-dynamic
- variables `f_fric` → 9.1-static-and-dynamic
- equations `eq-net-force-zero` → 9.1-first-condition
- equations `eq-net-force-axes` → 9.1-first-condition
- variables: add a row `{ "sym": "v", "type": "velocity", "meaning": "the
  constant velocity of a body in dynamic equilibrium, whose magnitude and
  direction both stay the same", "unit": "m/s", "section": "9.1", "anchor":
  "9.1-static-and-dynamic" }`. The section's two dynamic figures draw the
  velocity arrow and the crate carries the speed on a slider, so the page
  binds the type, and the Definitions view should say what the symbol means
  here. Nothing breaks without it; the figures name the arrow in words as
  well.
