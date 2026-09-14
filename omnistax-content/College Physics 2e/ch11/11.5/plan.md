# Plan: 11.5 Pascal’s Principle (m42193)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's instruction to finish the book without
check-ins; the per-section stop of rule 2, the plan review of rule 5 and the
user picks of rule 15 are replaced by this file, written before the section
was built and left for review after, as `ch11/config.md` records.

The section that turns pressure from a number at one point into a number the
whole fluid shares. It repeats that pressure is force per unit area, states
Pascal's principle, that a change in pressure applied to an enclosed fluid is
transmitted undiminished to every part of it and to the walls of its
container, draws the consequence that pressures add, and follows the
principle into the hydraulic system: two pistons of different area on one
enclosed fluid, the force on the larger in the ratio of the areas, the brakes
of a car as the worked example, and the reminder that the larger force cannot
do more work than was put in. Two sketch figures (11.11 and 11.12), no
photograph, one worked example, two boxed notes (Pascal's Principle and
Making Connections: Conservation of Energy), one glossary term, one
conceptual question, five problems of which three are keyed, and one problem
taken from 11.9. One page (rule 11).

## Sub-concepts (page headers)

The module prints two headers of its own, kept as the book writes them; the
first and the last are the agent's (`ch11/config.md`).

1. `pascals-principle` **Pressure in an enclosed fluid** (agent's header;
   book: the opening paragraph that defines pressure and asks whether it can
   be increased by pushing on the fluid, the paragraph that states Pascal's
   principle, the boxed Pascal's Principle note, the paragraph on pressures
   adding, and the paragraph on Pascal's life). Introduces
   `pascals-principle` and `pressures-add`; uses `pressure` (11.3) and
   `fluid` (11.1). The equation `eq-hydraulic-pressures-equal` is first
   written in the derivation, so it anchors in span 3, not here.
2. `hydraulic-system` **Application of Pascal’s Principle** (book's header;
   the hydraulic system paragraph and Figure 11.11). Introduces
   `hydraulic-system`; uses `pascals-principle`.
3. `hydraulic-forces` **Relationship Between Forces in a Hydraulic System**
   (book's header; the derivation, its three equations, the paragraph on
   increasing or decreasing force and the analogy with levers, and Example
   11.6, Calculating Force of Wheel Cylinders: Pascal Puts on the Brakes,
   with Figure 11.12). Introduces `hydraulic-force-ratio`; uses
   `pascals-principle`, `pressure`, `force-from-pressure` (11.3),
   `pressure-from-weight-of-fluid` (11.4, the pistons at the same height so
   no pressure difference due to depth) and `lever` (9.5). The variables
   $\kProne$, $\kPrtwo$, $\kFone$, $\kFtwo$, $A_1$, $A_2$ and the three
   equations anchor here.
4. `hydraulic-work` **Force is multiplied, but work is not** (agent's
   header; the paragraph that begins "A simple hydraulic system, such as a
   simple machine, can increase force but cannot do more work than done on
   it", with the spider, and the boxed Making Connections: Conservation of
   Energy note). Introduces `hydraulic-work-limit`; uses `work` (7.1),
   `conservation-of-energy` (7.6) and `simple-machine` (9.5).

The publisher numbers the worked example Example 11.6, the sixth of the
chapter, and the page follows that. The reference to Applications of
Statics, Including Problem-Solving Strategies (9.4) is plain text, as every
built chapter writes its cross references. Learning objectives, the section
summary and the glossary term come out of the running text into the tables
and the views (rule 4).

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| pascals-principle | result, eq-hydraulic-pressures-equal | pascals-principle | the statement, the boxed note, the glossary; every hydraulic calculation starts from $\kProne = \kPrtwo$; problem 1 |
| pressures-add | result | pascals-principle | the italic sentence that the total pressure is the sum of the pressures from different sources |
| hydraulic-system | idea | hydraulic-system | the term, Figure 11.11, the car brakes of Figure 11.12; the conceptual question |
| hydraulic-force-ratio | result, eq-hydraulic-force-ratio | hydraulic-forces | the derivation, the 100 N into 500 N sentence, Example 11.6, the cork and the backhoe problems |
| hydraulic-work-limit | idea | hydraulic-work | the paragraph after the example, the Making Connections note, the problem that verifies work in equals work out |

## Figures

id · replaces or Sim · concepts · value add (rule 24.4) · moving or still ·
sliders and choices with their types · headline · graph · 3D

1. `sim-hydraulic` · replaces Figure 11.11, the two fluid-filled cylinders
   capped with pistons · pascals-principle, hydraulic-system,
   hydraulic-force-ratio · **variation**: the book draws one pair of pistons
   and one pair of forces, and the reader here changes the applied force and
   both areas and sees the pressure rise everywhere in the fluid at once,
   the same at every wall, and the force on the large piston grow in the
   ratio of the areas; the small pressure arrows on every wall and under
   both pistons all lengthen together, which is Pascal's principle drawn
   rather than stated · **still**: a hydraulic system holding a load has no
   time in it, and the figure answers its sliders and registers no cycle
   (rule 14; `ch11/config.md` says the same of the whole chapter) ·
   $\kFone$ (0 to 500 N, default 100, force), $A_1$ (2.0 to 50.0 cm²,
   default 10.0, ink, detent at 10.0), $A_2$ (10 to 250 cm², default 50,
   ink, detent at 50), the book's "100-N force" and "an area five times
   greater" being the defaults so that the figure reads 500 N on load ·
   "A force of 100 N on the 10.0 cm² piston raises the pressure everywhere
   in the fluid by 1.00 × 10⁵ N/m², which lifts the 50.0 cm² piston with
   500 N." · none: the side view of the two cylinders and the hydraulic
   line is the picture · 2D, drawn flat, since the book draws it flat
   (rule 28.1). The pistons are drawn with widths in the ratio of their
   diameters, which is what the areas fix, and the caption says so. Force
   arrows are 0.6 units per newton, fixed from the default so that
   $\kFtwo = 5\kFone$ reads as five times the length; an arrow that would
   leave the canvas is drawn with the break the book's own Figure 11.12
   puts on its $\kFtwo$ arrows, and its label carries the number. Labels:
   the frame (the two forces, the two areas, the two pressures) is always
   on; the entities (the fluid, each piston, the line) are three and carry
   hover names (26.6, 26.7). Readout: $\kProne = \kFone/A_1 = \kPrtwo$ and
   $\kFtwo = (A_2/A_1)\kFone$ with the live numbers; small line on the
   pressure being the same under both pistons so that each force is that
   pressure times the piston's own area. Draws pressure, force.
2. `sim-brakes` · replaces Figure 11.12, the hydraulic brakes of Example
   11.6 · hydraulic-system, hydraulic-force-ratio, pascals-principle ·
   **variation**: the book's one drawing becomes the whole example with its
   numbers live: the push on the pedal, the two cylinder diameters and the
   number of wheel cylinders all change, and the reader sees the one
   pressure reach every wheel cylinder and each of them push out with the
   same force, however many there are, which the book says in a sentence
   and cannot draw · **still**: the brakes are applied and held, and there
   is no clock in the idea (rule 14) · $\kF$ on the pedal (0 to 200 N,
   default 100, force), the pedal cylinder's diameter (0.25 to 1.50 cm,
   default 0.500, ink, detent at 0.500), the wheel cylinders' diameter
   (1.00 to 5.00 cm, default 2.50, ink, detent at 2.50), and a choice of
   two or four wheel cylinders, default four, because a count is a
   discrete state and never a slider (rule 26.1). The lever's arms are the
   book's 0.20 m and 0.040 m and are not sliders, since the lever is
   Chapter 9's idea and the example takes its 500 N as given; the figure
   states them · "A push of 100 N on the pedal becomes 500 N on the pedal
   cylinder, and the pressure it makes gives each of the four wheel
   cylinders 1.25 × 10⁴ N." · none: the pedal, its lever, the pedal
   cylinder, the line and the wheel cylinders in one side view are the
   picture · 2D, flat, as the book draws it. Force arrows are broken the
   way the book breaks them where the output force would run off the
   canvas, and the label carries the number. Labels: the frame (the forces,
   the two areas, the two diameters, the lever arms) is always on, one
   wheel cylinder carrying the diameter for its kind (26.7); the entities
   (the pedal, the lever's pivot, the pedal cylinder, the line, each wheel
   cylinder) carry hover names. Readout: the book's own line
   $\kFtwo = (A_2/A_1)\kFone = (\pi r_2^2/\pi r_1^2)\kFone$ with the live
   numbers; small line on the lever's 500 N and on the pressure in the
   fluid being the same in every wheel cylinder. No person is drawn: the
   book crops its driver to a shoe, and the pedal carries the force arrow
   and a hover name instead. Draws pressure, force.
3. `sim-hydraulic-work` · Sim (it replaces no figure of the book) ·
   hydraulic-work-limit, hydraulic-force-ratio · **a view the text does not
   give**: the section says that the wheel cylinder moves through a
   smaller distance than the pedal cylinder and that the work out cannot
   exceed the work in, and never draws it; here the small piston of Figure
   11.11 is pushed down a chosen distance, the fluid it sweeps out is
   marked, the large piston rises by the smaller distance that takes the
   same volume, and the reader sees the larger force move the shorter way
   so that the two products of force and distance agree · **still**: the
   push is the reader's slider and the picture is the before and after of
   one push, not its passage (rule 14) · $\kFone$ (0 to 500 N, default
   100, force), $A_2$ (10 to 250 cm², default 50, ink, detent at 50), and
   the distance the small piston is pushed down (0 to 10.0 cm, default
   5.00, ink); $A_1$ is held at 10.0 cm², the caption says so, and the
   figure keeps to three sliders · "Pushing the small piston down 5.00 cm
   moves 50.0 cm³ of fluid across and raises the large piston 1.00 cm, so
   500 N through 1.00 cm is the same work as 100 N through 5.00 cm." ·
   none · 2D, flat. The piston travel and the swept volume are scene
   lengths and are written in ink, as the common brief keeps them, and the
   work is written as the product of a coloured force and an ink distance
   with its value in joules, so the page binds no position and no energy,
   as `ch11/COLOR.md` fixes for it. The pistons' start positions are dashed
   outlines. Labels on; hover names on the fluid and the two pistons.
   Readout: $\kFtwo d_2 = \kFone d_1$ with the live numbers, and the volume
   $A_1 d_1 = A_2 d_2$; small line on the constant volume and on
   conservation of energy. Draws force.

Photographs: the section prints none.

Figures that serve exercises: the backhoe of the problem taken from 11.9
travels on that item's card as its `figure` field, as `ch11/config.md`
decides for every image an exercise alone refers to; it is not a figure
row. The section's own problems refer to no figure but Example 11.6, whose
figure is `sim-brakes`.

Extra simulations (rule 15), thought through, judged and decided:

- **The small piston pushed down (`sim-hydraulic-work`): built**, for the
  reasons in its line: the section's last idea has no figure in the book,
  two of the section's problems turn on it, and the swept volume is a view
  the required figures do not give.
- The heart pushing on the enclosed blood of the opening paragraph. Left:
  it is the hydraulic system with a different sprite, and 11.9 has the
  circulatory system.
- The river that flows away from a push against the fluid that cannot. Left:
  it carries no quantity the reader could set, and is the sentence itself.
- A pressure that is the sum of the atmosphere and the fluid's weight, for
  `pressures-add`. Left: 11.4's figure of the swimming pool already shows it,
  and 11.6 builds on it.

## Exercises

- All six items are set at the end; the chapter has no Check Your
  Understanding box and the one conceptual question is an Analyze item, so
  nothing is inline (rule 12).
- 1 conceptual question, unkeyed, an open item with an AI-marked suggested
  approach: `cq1` (fs-id1430946, the pedal cylinder higher than the wheel
  cylinder, Analyze, citing `hydraulic-forces`).
- 3 problems keyed and kept: `p1` (fs-id2617779, the pressure transmitted in
  Example 11.6, keyed $2.55\times 10^{7}$ Pa and 251 atm, two parts), `p3`
  (fs-id1397225, the cork pounded into the jug, keyed $5.76\times 10^{3}$ N),
  `p5` (fs-id2452595, work input equals work output, keyed with the book's
  own derivation, an open item with the source solution).
- 2 problems left out, having no answer in the book's key: the force on the
  pedal cylinder of a lift holding a 2000-kg car (fs-id2392885) and the
  system that multiplies force a hundredfold (fs-id3069160). Named in
  `notes` and `exercise_notes`.
- 1 problem taken from 11.9 with `source_section: "11.9"`: `p6`
  (fs-id3077567, the backhoe's hydraulics, keyed $1.38\times 10^{4}$ N,
  $2.81\times 10^{7}$ N/m² and 283 N, three parts, Analyze). It is
  $\kFone/A_1 = \kFtwo/A_2$ with a lever in front of it (`ch11/config.md`,
  `ch11/exploration.md`), and 11.9's `exercise_notes` says so. The book's
  image of the backhoe rides on its card.
- No AP items: the chapter prints all five in 11.2 and 11.3.
- No generated questions: every node of the section has a book exercise
  that tests it except `pressures-add`, which `p1` touches, and no question
  is generated for it (`ch11/config.md`).
- Weights: `cq1` gives `hydraulic-force-ratio` its full value and
  `pressure-from-weight-of-fluid` 3 and `pressures-add` 2, since the
  question turns on the pressure difference a height makes; `p1` gives
  `pascals-principle` its full value and `pressure` 3 and
  `atmospheric-pressure` 2; `p3` gives `hydraulic-force-ratio` its full
  value and `pascals-principle` 3; `p5` gives `hydraulic-work-limit` its
  full value and `hydraulic-force-ratio` 3, `work` 2 and
  `conservation-of-energy` 2; `p6` gives `hydraulic-force-ratio` its full
  value and `second-condition-equilibrium` 4, `force-from-pressure` 3 and
  `mechanical-advantage` 2, since the work of it is the torque balance and
  the hydraulic ratio, and the lever's advantage is given.

## Views

- Formulas: the three equations of the section already in `chapter.json`,
  the two stated ones important and the substitution step not.
- Definitions: the six variables of the section, and one glossary term,
  Pascal's principle.
- Concept map: the five nodes above with their edges into 7.1, 7.6, 9.5,
  11.1, 11.3 and 11.4.

## Colour

The page binds pressure and force, as `ch11/COLOR.md` fixes for 11.5. Every
figure draws a force (the applied force, the output force, the push on the
pedal), and the two hydraulic figures draw the pressure as the field of
small arrows on every wall of the enclosed fluid and state it in their
readouts. The areas, the diameters, the lever arms, the piston travel and
the swept volume are untyped and in ink, and the work of `sim-hydraulic-work`
is written as a force times a distance with its value in joules rather than
as a symbol of its own, so that no energy hue and no position hue is bound.
The fluid is drawn in the panel's soft tone with a hover name, never in a
type hue; the book names no substance for it.

## Wanted at chapter level

- variables `P_1` → 11.5-hydraulic-forces
- variables `P_2` → 11.5-hydraulic-forces
- variables `F_1` → 11.5-hydraulic-forces
- variables `F_2` → 11.5-hydraulic-forces
- variables `A_1` → 11.5-hydraulic-forces
- variables `A_2` → 11.5-hydraulic-forces
- equations `eq-hydraulic-pressures-equal` → 11.5-hydraulic-forces
- equations `eq-hydraulic-force-ratio` → 11.5-hydraulic-forces
- equations `eq-hydraulic-output-force` → 11.5-hydraulic-forces
- 11.9's `exercise_notes` should say that the backhoe problem (fs-id3077567) is set with 11.5.
