# Plan: 5.2 Drag Forces (m42080)

Source: `source.md`, converted from the CNXML by `tools/cnxml2md.py`. Status:
built 2026-09-11 without a review stop, on Chen's instruction to finish the
book in one job; the per-section stop of rule 2 and the plan review of rule 5
are replaced by this file, written before the section was built and left for
review after, as Chapters 1 to 3 did it.

The section that turns from friction between two surfaces to the force a
fluid exerts on a body moving through it. Four figures, every one of them a
photograph, so no sketch is transformed and every interactive figure here is
a Sim with no number. Four boxed notes (Drag Force, Take-Home Experiment,
Stokes' Law, Galileo's Experiment), one table (Table 5.2, the drag
coefficients), one worked example, Haldane's quoted paragraph, four
conceptual questions and nine problems, five of them keyed. There is no PhET
note in this module and no Check Your Understanding box. One page (rule 11).

## Sub-concepts (page headers)

The book prints no titled sub-header of its own, only the run of the
argument. Page structure, one block per idea, in the book's order:

1. `drag` **The drag force on a body moving through a fluid** (book: the
   opening paragraph, the definition of the drag force, $\kFD \propto \kv^2$,
   the equation $\kFD = \tfrac12 C\rho A\kv^2$, the form $\kFD = b\kv^2$, and
   the boxed note Drag Force). The variables $\kFD$, $C$, $A$, $\rho$, $\kv$
   and $b$ anchor here, and so do `eq-drag-prop`, `eq-drag-force` and
   `eq-drag-b`.
2. `coefficient` **The drag coefficient and the shape of a body** (book: the
   bobsled paragraph and Figure 5.7, the wind tunnel paragraph and Figure
   5.8, the highway-speed paragraph, Table 5.2, and the body suits paragraph
   with Figure 5.9).
3. `terminal` **Terminal velocity** (book: the skydiver under gravity and
   drag, $\kFnet = m\kg - \kFD = m\ka = 0$, $m\kg = \kFD$, the solution
   $\kv = \sqrt{2m\kg/\rho C A}$, the 75 kg head-first skydiver, the boxed
   Take-Home Experiment with the coffee filters, and Example 5.2, A Terminal
   Velocity). $\kvt$, $m$ and $\kg$ anchor here, and so do
   `eq-terminal-balance` and `eq-vt`.
4. `size` **The size of the falling body** (book: the squirrel paragraph and
   Haldane's quoted paragraph from "On Being the Right Size").
5. `stokes` **Stokes' law: drag on a very small body** (book: the paragraph
   that says the quadratic dependence fails for a small, slow body in a
   dense medium, $\kFs = 6\pi r\eta\kv$, the boxed note Stokes' Law, and the
   bacteria and lake sediment paragraph). $\kFs$, $r$ and $\eta$ anchor here,
   and so does `eq-stokes`.
6. `streamlining` **Streamlining in nature** (book: the paragraph on fishes,
   whales, birds and sperm, Figure 5.10, and the boxed note Galileo's
   Experiment).

The promise of "a few pages on fluid dynamics" is Chapter 12 and stays plain
text, as the config asks, since the book names no section there. The
untyped symbols of the section ($C$, $A$, $\rho$, $\eta$, $r$, $m$, $b$) are
written in plain LaTeX and set in ink; $\kFD$, $\kFs$, $\kFnet$, $\kv$,
$\kvt$, $\kg$ and $\ka$ carry their macros.

Learning objectives, the section summary and the two glossary terms come out
of the running text into the tables and the views. The conceptual questions,
the problems and the Critical Thinking item taken from 5.3 go to the
Exercises document; there is no Check Your Understanding box, so nothing is
inline.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| drag-force-equation | result, eq-drag-force | drag | the boxed Drag Force note; problems 4 and 5; conceptual questions 1 and 2 |
| drag-coefficient | idea | coefficient | Table 5.2; Figures 5.8 and 5.9; conceptual question 1 |
| terminal-velocity | idea | terminal | the skydiver passage; the Take-Home Experiment; Example 5.2 |
| terminal-velocity-magnitude | result, eq-vt | terminal | the 75 kg skydiver; Example 5.2; problems 1, 2 and 3 |
| stokes-law | result, eq-stokes | stokes | the boxed Stokes' Law note; problems 7, 8 and 9 |
| size-and-terminal-velocity | idea | size | the squirrel; Haldane's paragraph; conceptual question 4; the Critical Thinking item |

`drag-force` is Chapter 4's node, introduced at 4.7 where the barge example
names it, so `drag` reinforces it rather than introducing it a second time,
and the five nodes of this section rest on it. The section also uses
`friction` (4.3, "Like friction, the drag force always opposes the motion"),
`newtons-second-law`, `weight` and `free-fall` at `terminal`, where a zero
net force is what makes the speed stop growing.

## Figures

id · replaces or Sim · concepts · what moves or still, with the reason ·
sliders with their types · headline · graph · 3D

1. `fig-bobsled` · **photograph, kept**, Figure 5.7 · the text points the
   reader at it ("Athletes as well as car designers seek to reduce the drag
   force to lower their race times. (See Figure 5.7)"), and the bobsled is
   the shaped body the passage is about · the book's caption with its credit
   clause, width 250.
2. `fig-wind-tunnel` · **photograph, kept**, Figure 5.8 · the text points at
   it where it says the drag coefficient is determined empirically in a wind
   tunnel, which is the thing the photograph shows · the book's caption with
   its credit clause, width 200.
3. `fig-body-suits` · **photograph, kept**, Figure 5.9 · the text points at
   it in the passage on body suits and world records · the book's caption
   with its credit clause, width 250.
4. `fig-geese` · **photograph, kept**, Figure 5.10 · the text points at it
   where it says a flock forms a streamlined pattern · the book's caption
   with its credit clause, width 250.

   No photograph of this section is a splash image and none is decoration,
   so none is dropped, which is what the chapter's exploration expected.

5. `sim-drag` · **Sim** (the book draws no sketch of the drag force) ·
   drag-force-equation, drag-coefficient, drag-force · **still**: the idea
   is that the drag force answers the speed, the shape and the frontal area,
   and no clock runs in it; a car travelling at a steady speed with a steady
   drag would be a loop that shows nothing changing, so the figure answers
   its sliders and carries no transport · speed $\kv$ (20 to 150 km/h, step
   5, default 100, velocity), drag coefficient $C$ (0.05 to 1.12, step 0.01,
   default 0.28, ink, and the label names the body of Table 5.2 whose
   coefficient it matches), frontal area $A$ (0.20 to 3.00 m², step 0.05,
   default 0.70, ink) · "At 100 km/h a body with C = 0.28 and A = 0.70 m²
   feels a drag of 91.5 N, four times the 22.9 N it feels at half that
   speed" · graph below the strip: $\kFD$ against $\kv$ from rest to 150
   km/h, the parabola, with the current speed filled and half that speed
   hollow so the factor of four can be read off the curve · no.
   Readout: $\kFD = \tfrac12 C\rho A\kv^2$ with the numbers put in; small
   line on the square dependence. Draws force, velocity.
6. `sim-terminal` · **Sim** (the book draws no sketch of the falling
   skydiver) · terminal-velocity, terminal-velocity-magnitude,
   drag-force-equation · **moves**: a skydiver is released and falls, and
   the whole idea is what happens as the clock runs, the drag growing until
   it equals the weight and the acceleration falling to zero; the run is
   finite, so it loops with the scrubber · mass $m$ (40 to 120 kg, step 1,
   default 85, ink), frontal area $A$ (0.10 to 1.20 m², step 0.01, default
   0.70, ink), drag coefficient $C$ (0.30 to 1.20, step 0.01, default 1.00,
   ink); the defaults are Example 5.2, the 85 kg skydiver falling spread
   eagle, and sliding $m$ to 75, $A$ to 0.18 and $C$ to 0.70 gives the head
   first skydiver of the text · "t = 5.0 s · the skydiver is falling at 37.4
   m/s, the drag has grown to 594 N against a weight of 833 N, and the
   acceleration is down to 2.81 m/s²" · graph beside the vertical scene:
   $\kv$ against $\kt$, the curve levelling on the dashed terminal velocity
   · no. Readout: $\kvt = \sqrt{2m\kg/\rho C A}$ with the numbers put in;
   small line giving the same speed in km/h. Draws force, velocity,
   acceleration, time.
7. `sim-stokes` · **Sim** (the book draws no sketch of Stokes' law) ·
   stokes-law, terminal-velocity · **moves**: a steel bead sinks through a
   jar of oil and the fall takes a time that the reader is asked to measure,
   which is the whole of the ball-bearing problem; the fall is finite, so it
   loops with the scrubber · bead radius $r$ (0.5 to 4.0 mm, step 0.1,
   default 1.5, ink), viscosity $\eta$ (0.10 to 2.00 kg/(m·s), step 0.01,
   default 0.76, ink); the defaults are the ball bearing of problem 9, which
   falls 0.60 m in 12 s through motor oil · "t = 6.0 s · the 1.5 mm steel
   bead has sunk 30.2 cm at a steady 50.3 mm/s, because the Stokes drag grew
   to match its weight almost at once" · graph beside the vertical scene:
   the steady speed against the bead's radius, the curve $\kv \propto r^2$,
   with the current bead marked · no. Readout: $\kFs = 6\pi r\eta\kv$ with
   the numbers put in; small line saying that this equals the weight of the
   bead. Draws force, velocity, time.
8. `sim-size` · **Sim** (the book draws no sketch of Haldane's scaling) ·
   size-and-terminal-velocity, terminal-velocity-magnitude · **moves**: two
   bodies of the same shape and different size are released together and
   fall side by side, and what the reader is to watch is one of them
   settling early and slowly while the other is still speeding up, which is
   a thing that happens over time; the fall is finite, so it loops with the
   scrubber · the scale factor $k$ of the smaller body (0.05 to 1.00, step
   0.01, default 0.10, which is Haldane's "divide an animal's length,
   breadth, and height each by ten", ink), the mass $m$ of the full-size
   body (10 to 120 kg, step 1, default 75, ink), the drop $h$ (20 to 900 m,
   step 10, default 200, ink) · "t = 3.0 s · the full-size body is falling
   at 27.0 m/s and still speeding up, while the one a tenth its size has
   settled at 13.2 m/s; its weight is a thousandth and its area a hundredth"
   · graph beside the two columns: $\kv$ against $\kt$ for both bodies, each
   levelling on its own dashed terminal velocity · no. Readout:
   $\kvt \propto \sqrt{k}$ with the two speeds; small line on the weight
   falling as $k^3$ and the area only as $k^2$. Draws velocity, time.

The drag coefficient has no figure of its own: the wind tunnel that measures
it is Figure 5.8, which is kept, and `sim-drag` carries $C$ on a slider and
names the body of Table 5.2 it matches, which is what a separate figure
would have shown. The bead of `sim-stokes` is steel at the density the
book's own problem gives it, $7.8 \times 10^3$ kg/m³, and buoyancy is
neglected, as the book neglects it there; nothing in either figure is
computed that the section does not compute.

No figure of this section serves an exercise: no problem, conceptual
question or Critical Thinking item of 5.2 refers to a drawing. The Critical
Thinking item taken from 5.3 carries the book's own answer graph inside its
answer, and that image is copied to `media/ch05/`.

Extra simulations (rule 15), considered and judged:

- The coffee-filter experiment as a graph: nested filters of one, two,
  three, four and five, with $\kv$ against $m$ and $\kv^2$ against $m$ side
  by side, so the reader can see which is the straight line. It opens a view
  the required figures do not, since `sim-terminal` shows one mass at a time
  rather than the family. Left, and for the reason the box itself gives: the
  book asks the reader to gather the filters, measure the times and decide
  which relationship is more linear, and a figure that plots both lines
  hands over the answer before the experiment is done.
- A car's power against its speed, to show the claim that over half of a
  car's power goes to overcoming drag at highway speeds and that 70 to 80
  km/h is the most efficient cruising speed. Power is Chapter 7, and the
  section states the fact without deriving it, so the figure would be built
  on an idea the reader has not met. Left.
- Streamlines round a bluff body and a shaped one in a wind tunnel. The book
  describes no flow pattern and gives no model for one, so everything drawn
  would be invented rather than transformed. Left.
- Galileo's two objects dropped from the tower, one heavy and one light.
  `sim-size` already drops two bodies of the same shape and different size
  and shows them separating, and the boxed note is a set of questions for
  the reader rather than a result to draw. Left.

None built.

## Exercises

- No Check Your Understanding box; nothing inline. Every item is at the end.
- 4 conceptual questions, `cq1` to `cq4`, Understand, none keyed, each with
  an AI-marked suggested approach: `cq1` (fs-id1165298899670, the pros and
  cons of body suits, citing `coefficient`), `cq2` (fs-id1165298622189, when
  each of the two drag expressions applies, citing `stokes`), `cq3`
  (fs-id1165296261672, oil and rain on the road, citing `drag`) and `cq4`
  (fs-id1165296346967, why a squirrel walks away from a fall, citing
  `size`).
- 5 problems keyed and kept: `p1` (fs-id1165298861311, the 80.0 kg head
  first skydiver, multi with the speed in m/s and in km/h), `p3`
  (fs-id1165298835347, the 560 g squirrel and the 56 kg person, multi with
  the two speeds), `p5` (fs-id1165298726139, the factor by which drag grows
  from 65 to 110 km/h, number), `p7` (fs-id1165296534353, the units of
  viscosity from Stokes' law, open with the book's own derivation) and `p9`
  (fs-id1165298696745, the steel ball bearing in motor oil, number).
- 4 problems left out, having no answer in the book's key: 2
  (fs-id1165298948219, the 60 kg and 90 kg skydivers), 4
  (fs-id1165298803376, the drag on a Camry and a Hummer), 6
  (fs-id1165298928445, the rain drop falling from 5.00 km) and 8
  (fs-id1165298534706, the spherical bacterium in water).
- Taken from 5.3 with `source_section` "5.3": the Critical Thinking item
  `ct1` (exer-86622, the two spherical beads falling at constant speed
  through a fluid) tests terminal velocity and the drag force, which this
  section introduces and 5.3 does not, so rule 12 sets it here. It is keyed,
  and its answer carries the book's own graph of the bead radius against the
  fall time, which travels with the answer as an image; both sections'
  `exercise_notes` say where the item went.
- `cq3` is printed among this section's conceptual questions but turns on
  the friction between a tyre and a wet, oily road, which 5.1 introduces. It
  is kept here, where the book prints it, and tagged with `friction`; the
  chapter pass may prefer to move it to 5.1, and `exercise_notes` says so.
- No AP test prep in this module, so nothing is held from it and nothing is
  taken from elsewhere beyond `ct1`. No generated question: every node of
  the section has a book exercise that tests it.
- Weights (rule 20): `cq1` gives `drag-force-equation` weight 2, since the
  question turns on the coefficient and only touches the equation; `cq4` and
  `p3` give `terminal-velocity-magnitude` weight 2 beside the full value for
  `size-and-terminal-velocity`, and `p3` gives `free-fall` weight 1 for the
  part with no drag in it; `p1` gives `terminal-velocity` weight 2 and
  `drag-coefficient` weight 1; `p9` gives `terminal-velocity` weight 2
  beside the full value for `stokes-law`; `ct1` gives `stokes-law` weight 2,
  since the beads fall at a constant speed and the item never says which
  drag law holds.

## Views

- Formulas: the six equations of the section already in `chapter.json`, the
  drag force, the terminal velocity and Stokes' law important and the three
  steps not.
- Definitions: the twelve variables of the section; the two glossary terms,
  drag force and Stokes' law.
- Concept map: the six nodes above with their edges into 2.7, 4.3 and 4.7.

## Colour

The page binds force, velocity, acceleration and time. `sim-drag` draws the
drag arrow and the force axis of its graph in the force hue and carries the
speed on a velocity slider; `sim-terminal` draws the weight and the drag as
forces, the falling speed and the terminal level as velocities, the
shrinking acceleration arrow, and the time axis of its graph; `sim-stokes`
draws the weight and the Stokes drag as forces and the steady speed as a
velocity, and its headline runs on a clock; `sim-size` draws two speeds and
their terminal levels against time. Mass, frontal area, the drag
coefficient, the fluid density, the viscosity, the bead's radius, the scale
factor and the drop are untyped and stay in ink, which is what the chapter
config decided and what the book's own type table allows.

## Wanted at chapter level

- variables `F_D` → 5.2-drag
- variables `C_drag` → 5.2-drag
- variables `A` → 5.2-drag
- variables `ρ` → 5.2-drag
- variables `v` → 5.2-drag
- variables `b` → 5.2-drag
- variables `v_t` → 5.2-terminal
- variables `m` → 5.2-terminal
- variables `g` → 5.2-terminal
- variables `F_s` → 5.2-stokes
- variables `r` → 5.2-stokes
- variables `η` → 5.2-stokes
- equations `eq-drag-prop` → 5.2-drag
- equations `eq-drag-force` → 5.2-drag
- equations `eq-drag-b` → 5.2-drag
- equations `eq-terminal-balance` → 5.2-terminal
- equations `eq-vt` → 5.2-terminal
- equations `eq-stokes` → 5.2-stokes
- equations `eq-terminal-balance`: its `ktex` writes $F_{\text{net}}$ in
  plain LaTeX, but `F_net` is a symbol of the book with the macro `\kFnet`
  and the type force, so the line should read
  `\kFnet = m\kg - \kFD = m\ka = 0` and wear the force hue on the sheet, as
  the text of this section writes it.
- concepts `drag-force`: the chapter's exploration asks for the node to move
  from 4.7 to 5.2, which is where the book gives the drag force its
  characteristics rather than using it as an unknown. This section writes a
  `reinforces` row for it either way, so the move costs nothing here.

### What the chapter pass did with these (2026-09-11)

- Every anchor above is written into `ch05/chapter.json`, and each one names a
  span id that stands in this section's `text.html`.
- The `ktex` of `eq-terminal-balance` now reads
  `\kFnet = m\kg - \kFD = m\ka = 0`, so the formula sheet writes the net force
  with the macro of the book's `F_net` row and wears the force hue, as the
  text of this section writes it.
- The concept `drag-force` stays under 4.7, where Chapter 4 introduces it and
  the section is built. This section reinforces it, which is what the coverage
  rows already say, and its six nodes rest on it.
- Conceptual question 3, on oil and gasoline on a road in the rain, goes to
  5.1. It turns on the coefficient of friction between a tyre and a lubricated
  road, which 5.1 introduces and this section does not, and it is the question
  the Take-Home Experiment of 5.1 ends on; rule 12 sets an exercise with the
  section that introduces what it tests, so 5.1 carries it as `cq6` with
  `source_section` 5.2 and the notes of both sections say so. The remaining
  questions keep the numbers the book prints them under, so this section's
  conceptual questions are `cq1`, `cq2` and `cq4`, as 5.3's are.
- `sim-stokes` plots the steady speed against the radius of the bead and
  colours no clock, so `time` comes out of its `draws`; the page binds the
  type through `sim-terminal` and `sim-size` as before.
