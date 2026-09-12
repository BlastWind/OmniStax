# Plan: 9.5 Simple Machines (m42174)

Source: `source.md` (converted from CNXML by `tools/cnxml2md.py`). Status:
built 2026-09-11 without a review stop, on Chen's instruction to finish the
book in one job.

The section that turns the second condition for equilibrium into a working
device. Four sketch figures (9.21 to 9.24), no photograph, no table, one
worked example, two AP items (the first keyed), four conceptual questions
and seven problems, four of them keyed. No Check Your Understanding box,
so nothing is inline. One page (rule 11).

## Sub-concepts (page headers)

The module prints no header of its own, only the run of the argument: the
definition of mechanical advantage, the lever worked out on a nail puller,
two more lever types, the inclined plane, the crank and the wheel, and the
pulleys. Page structure, one block per idea:

1. `machines` **Simple machines and mechanical advantage** (book: what a
   simple machine is, that energy is still conserved because a machine
   cannot do more work than the energy put into it, the definition of
   mechanical advantage and its equation). The variables $\text{MA}$,
   $\kFi$ and $\kFo$ and the equation `eq-mechanical-advantage` anchor here.
2. `lever` **The lever and the nail puller** (book: the lever and its
   fulcrum; Figure 9.21; the three vertical forces on the puller; the
   torque balance about the pivot; $\kli\kFi = \klo\kFo$; the rearrangement
   to $\kFo/\kFi = \kli/\klo$; $\text{MA} = \kli/\klo$ and the sentence
   that it is true for levers in general). $\kFnail$, $\kN$, $\kli$,
   $\klo$ and the equations `eq-lever-balance` and `eq-lever-ma` anchor
   here.
3. `wheelbarrow` **The wheelbarrow and the shovel** (book: the two lever
   types whose input and output forces sit on the same side of the pivot;
   Figure 9.22; Example, What is the Advantage for the Wheelbarrow?).
   $\kwgt$ and the equation `eq-input-force` anchor here; the example is
   `ex-wheelbarrow`.
4. `incline` **The inclined plane** (book: pushing a cart up a plane is
   easier than lifting it, and the work done is the same either way; the
   ramps of the Egyptian pyramids).
5. `crank` **Cranks, wheels and gears** (book: a crank is a lever that can
   be rotated $360^\circ$ about its pivot, its mechanical advantage is the
   ratio of the radii, and the simplified car axle has one below one;
   Figure 9.23). The equation `eq-crank-ma` anchors here.
6. `pulleys` **Pulleys** (book: an ordinary pulley has a mechanical
   advantage of one, combinations multiply force, and the number of cables
   pulling directly on the load is about the mechanical advantage of the
   system; Figure 9.24). $\kTf$ and the equation `eq-pulley-force` anchor
   here.

References to other sections of the book are plain text. The book's
$\text{MA}$ has no macro and is set in ink, since it is a ratio of two
forces and so a pure number; every $F$, $w$, $N$ and $T$ takes the force
hue and every lever arm and radius the position hue. The generic $d_1$,
$d_2$, $r_\text{i}$ and $r_\text{o}$ of the wheelbarrow and crank
paragraphs stay in plain LaTeX, as the book writes them, since the chapter
gives them no symbol row.

Learning objectives, the section summary and the glossary come out of the
running text into the tables and the views. Every exercise goes to the
Exercises document.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| simple-machine | idea | machines | the opening paragraph; CQ 1 and CQ 4 |
| mechanical-advantage | result, eq-mechanical-advantage | machines | the first equation and the glossary; problems 1 and 3; AP 1 |
| lever | idea, eq-lever-balance | lever | the derivation from the second condition; CQ 2 |
| lever-mechanical-advantage | result, eq-lever-ma | lever | the general lever equation; the worked example; problems 1, 3 and 5 |
| crank-and-wheel | result, eq-crank-ma | crank | the crank and the simplified car axle; problem 4 (unkeyed, left out) |
| pulley-mechanical-advantage | result, eq-pulley-force | pulleys | the three combinations of Figure 9.24; CQ 4; problems 6 and 7 |

The section leans on `torque`, `perpendicular-lever-arm`,
`torque-from-lever-arm` and `second-condition-equilibrium` (9.2), on
`force` and `free-body-diagram` (4.1), `weight` (4.3), `normal-force` and
`tension` (4.5), `newtons-third-law` (4.4) and on 7.1's `work`, which is
still a placeholder; the coverage rows mark each of them as used where the
text uses it.

`crank-and-wheel` is the one node of the section whose only book problem
(problem 4, the car axle) is unkeyed and therefore left out, so no
exercise tags it. Rule 13 says no question is generated in the book's
place, and none is; the node is carried by the narrative and by the crank
figure.

## Figures

id · replaces · concepts · what moves · sliders · headline · graph · 3D

Every figure of this section is **still**. Nothing in a simple machine has
a time in it: the nail is not moving while the torques balance, the
wheelbarrow is held up, the crank is turned through an angle that does not
matter, and the pulleys hang. Each figure answers its sliders and nothing
else, registers no cycle and carries no transport (rule 14, and the
chapter config's reading of it).

1. `sim-nail-puller` · replaces Figure 9.21 (the nail puller and its
   free-body diagram) · lever, lever-mechanical-advantage,
   mechanical-advantage · **still**: the nail is not moving, so the two
   torques about the pivot are equal and there is nothing to play through
   · the input lever arm $\kli$ (0.20 to 0.80 m, position, default 0.50),
   the output lever arm $\klo$ (0.010 to 0.080 m, position, default
   0.025), the input force $\kFi$ (10 to 120 N, force, default 50) ·
   "A pull of 50 N on a handle 0.50 m from the pivot draws the nail with
   1000 N, a mechanical advantage of 20.0" · a pair of bars below the
   scene, $\kFi$ and $\kFo$ on one scale, since two arrows twenty times
   apart cannot be drawn to one scale in the scene itself; the scene's
   arrows show which way each force acts and the bars carry the sizes ·
   no. Readout: $\text{MA} = \kFo/\kFi = \kli/\klo$ with the numbers;
   small line on the torque each force makes about the pivot and on the
   normal force $\kN = \kFi + \kFnail$. Draws force, position, torque.
   The book puts no numbers on this figure, so the defaults are round
   ones of the same size; problem 1's 45 cm and 1.8 cm are both on the
   sliders.
2. `sim-wheelbarrow` · replaces Figure 9.22 (a) and (b) (the wheelbarrow
   and the shovel, two panels under one number, so one row with one
   original and no fold) · lever, lever-mechanical-advantage,
   mechanical-advantage · **still**: the barrow is held up and nothing
   travels · the output lever arm $\klo$ (0.05 to 1.40 m, position,
   default 0.075), the input lever arm $\kli$ (0.50 to 1.50 m, position,
   default 1.02), the combined mass $m$ (10 to 100 kg, ink, default 45.0)
   · "The load sits 7.5 cm from the axle and your hands 1.02 m from it,
   so a lift of 32.4 N supports a 441 N load: the mechanical advantage is
   13.6" · none; beneath the wheelbarrow the same three forces are drawn
   on a bare bar pivoted at one end, and sliding $\klo$ past $\kli$ carries
   that bar from the wheelbarrow, whose load is nearer the pivot than the
   hands, to the shovel, whose load is farther, where the mechanical
   advantage falls below one · no. Readout: $\kFi = \kFo\klo/\kli$ with
   the numbers; small line on the normal force at the wheel,
   $\kN = \kwgt - \kFi$. Draws force, position. The defaults are the
   worked example's, so the figure loads on 32.4 N and 409 N.
3. `sim-incline` · replaces nothing: a **Sim** · simple-machine,
   mechanical-advantage · **still**: the cart is pushed at constant
   velocity and the figure is about the force and the distance, not about
   when the cart arrives · the angle of the ramp $\theta$ (5º to 60º, ink,
   default 20), the weight of the cart $\kwgt$ (100 to 1200 N, force,
   default 500), the height to be climbed $h$ (0.5 to 3.0 m, ink, default
   1.5) · "A ramp at 20º needs a push of 171 N over 4.39 m, against a
   lift of 500 N over 1.50 m: both do 750 J of work" · none; the ramp and
   the vertical lift are drawn side by side with their two path lengths
   bracketed and their two forces arrowed to one scale · no. Readout:
   $\text{MA} = \kFo/\kFi = \kwgt/(\kwgt\sin\theta) = 1/\sin\theta$ with
   the numbers; small line on the two products being equal. Draws force.
4. `sim-crank` · replaces Figure 9.23 (a), (b) and (c) (the crank, the
   simplified car axle and the ordinary pulley, three panels under one
   number) · crank-and-wheel, mechanical-advantage · **still**: the crank
   is turned but the angle it is turned through does not enter the
   mechanical advantage, which is the point of the paragraph · the input
   radius $r_\text{i}$ (0.02 to 0.50 m, position, default 0.24), the
   output radius $r_\text{o}$ (0.02 to 0.50 m, position, default 0.02),
   the input force $\kFi$ (100 to 12,000 N, force, default 1000) · "A
   handle 24.0 cm from the axis turning a shaft 2.0 cm from it has a
   mechanical advantage of 12.0; swap the two and the axle driving the
   wheel has one of 0.083" · none; three panels, the crank with its
   input at the larger radius, the car axle with its input at the smaller,
   and the pulley, where the two radii are the same one and the
   mechanical advantage is one whatever the radius · no. Readout:
   $\text{MA} = r_\text{i}/r_\text{o}$ with the numbers; small line on
   the output force each panel gives. Draws force, position. The book's
   own axle numbers, 2.0 cm and 24.0 cm, are the defaults, so the panel
   loads on $\text{MA} = 0.083$ and the reader can set $\kFi$ to 12,000 N
   and read 1000 N on the ground.
5. `sim-pulleys` · replaces Figure 9.24 (a), (b) and (c) (the three
   combinations of pulleys, three panels under one number) ·
   pulley-mechanical-advantage, mechanical-advantage · **still**: the load
   hangs and the system is in equilibrium · the number of cables pulling
   directly on the load $n$ (1 to 4, ink, default 2), the mass of the load
   $m$ (20 to 200 kg, ink, default 115) · "Two cables pull up on the load,
   so a tension of 564 N in the cord holds a 1130 N engine: the mechanical
   advantage is about 2" · none; the ceiling, the fixed and movable
   pulleys, the load and every cable segment with its tension are the
   picture, and the count of cables on the load is what changes · no.
   Readout: $\kFo \approx n\kTf$ with the numbers; small line on the force
   the ceiling must supply. Draws force. At $n = 1$ the system is the
   ordinary pulley of Figure 9.23(c), which only turns the direction of
   the pull.

Photographs: the section has none. Every one of its four images is a
sketch or a free-body diagram over a drawing, so all four are replaced and
kept as `originals` with the widths the CNXML gives them (250, 250, 200,
350).

No figure exists only to serve exercises. Problems 1 and 5 refer to Figure
9.21, problem 3 and the second AP item to Figure 9.22, problem 4 to Figure
9.23(b) and problems 6 and 7 to Figure 9.24(a) and (c); each of those
numbers is carried by the figure that replaces it, with the book's image
under it, so the references land.

Extra simulations (rule 15), considered:

- **Built.** `sim-incline`, the ramp against the straight lift. The
  inclined plane is the one machine the section names that the book draws
  no figure for, and it is where the book states the trade the whole
  section rests on: "the applied force is less" but "the work done in both
  cases is the same". No required figure of the section shows a force
  bought with a distance, so this opens a view the text asserts and never
  draws.
- **Left.** A lever whose bar tilts through a small angle so that the two
  ends sweep $\kli\theta$ and $\klo\theta$: it makes the same point about
  force traded for distance as the inclined plane, and two figures for one
  idea is one too many.
- **Left.** A gear train, with the mechanical advantage as the ratio of
  the tooth counts. The book names gears in one clause and gives them no
  equation of their own beyond the ratio of the radii, which `sim-crank`
  already draws, so anything more would be invented.
- **Left.** A scissors as a double lever (conceptual question 1). The
  question is worth more asked than answered, and the nail puller figure
  already carries the single lever it is analogous to.

## Exercises

- No Check Your Understanding boxes; nothing inline.
- 4 conceptual questions, `cq1` to `cq4`, Understand, none keyed, each
  with an AI-marked suggested approach: `cq1` (fs-id2581856, scissors,
  citing `lever`), `cq2` (fs-id2597028, the nail puller pulled at a
  constant rate and with an acceleration, citing `lever`), `cq3`
  (fs-id2730066, the mechanical advantage of a wheelbarrow, citing
  `wheelbarrow`), `cq4` (fs-id1428982, the pulley and the piano, citing
  `pulleys`).
- 2 AP test prep items: `ap1` (fs-id2166007, why torque is integral to the
  force a simple machine gives, Understand, keyed, so the book's own
  answer stands as the solution of an open item) and `ap2` (fs-id1777151,
  the wheelbarrow filled with twenty bricks, Apply, unkeyed, kept as an
  open item with an AI-marked approach). `ap2` opens "Figure 9.24(a) shows
  a wheelbarrow", which is the number the AP Physics edition prints; in
  this edition Figure 9.24 is the pulley combinations and the wheelbarrow
  is Figure 9.22, so the item is set with 9.22 and `exercise_notes` says
  so.
- 4 problems keyed and kept: `p1` (fs-id3038577, the nail puller's
  mechanical advantage and the force it needs, multi), `p3`
  (fs-id3530769, the wheelbarrow's mechanical advantage, the lift and the
  force on the ground, multi), `p5` (fs-id2552465, the force the nail
  puller puts on the supporting surface, number), `p7` (fs-id2696021, the
  engine on the four-cable pulley, multi).
- 3 problems left out, having no answer in the book's key: 2
  (fs-id1279744, the mower and the 2.0-m lever), 4 (fs-id2600332, the car
  axle's mechanical advantage) and 6 (fs-id1448216, the engine on the
  two-cable pulley).
- No item is held for a later section and none is taken from another
  section: every exercise the module prints tests what this section
  introduces, and `p5` and `p7`, which refer back to `p1` and to problem
  6, are printed here too.
- No generated questions. `crank-and-wheel` has no exercise, since its
  one problem is unkeyed; the node is noted here and nothing is written in
  the book's place.
- Weights (rule 20): `p1` and `p3` give `lever-mechanical-advantage` and
  `mechanical-advantage` their full value and `lever` weight 2, since the
  torque balance is behind the ratio rather than in the work; `p5` gives
  `lever` its full value and `mechanical-advantage` weight 1, since the
  ratio is only the first step and the rest is the first condition; `p7`
  gives `pulley-mechanical-advantage` its full value and
  `mechanical-advantage` weight 2; `cq1` gives `lever` its full value and
  `simple-machine` weight 1; `ap1` gives `mechanical-advantage` its full
  value and `lever` weight 2.

## Views

- Formulas: the six equations of the section already in `chapter.json`,
  all but `eq-input-force` important.
- Definitions: the nine variables of the section; the one glossary term,
  mechanical advantage.
- Concept map: the six nodes above with their edges into 4.1, 4.3, 4.4,
  4.5, 6.1, 7.1 and 9.2.

## Colour

The page binds force, position and torque. Every figure carries a force on
a slider or draws one: the input and output forces of the nail puller, the
lift and the weight of the wheelbarrow, the push and the weight on the
ramp, the force on the crank and the tension in the pulley cord. Four of
the five bracket a lever arm, a radius or a distance in the position hue.
The nail puller's readout states the torque each force makes about the
pivot, which is the one place the chapter's new type is written on this
page. The masses, the angle of the ramp, the count of cables and the
mechanical advantage itself stay in ink, the last because it is a ratio of
two forces and so a pure number.

## Wanted at chapter level

- variables `MA` → 9.5-machines
- variables `F_i` → 9.5-machines
- variables `F_o` → 9.5-machines
- variables `F_nail` → 9.5-lever
- variables `l_i` → 9.5-lever
- variables `l_o` → 9.5-lever
- variables `N` → 9.5-lever
- variables `w` → 9.5-wheelbarrow
- variables `T_force` → 9.5-pulleys
- equations `eq-mechanical-advantage` → 9.5-machines
- equations `eq-lever-balance` → 9.5-lever
- equations `eq-lever-ma` → 9.5-lever
- equations `eq-input-force` → 9.5-wheelbarrow
- equations `eq-crank-ma` → 9.5-crank
- equations `eq-pulley-force` → 9.5-pulleys
- concepts `simple-machine`: its prerequisite `work` is 7.1's and is still
  a placeholder, so the edge hangs until Chapter 7 is built. Nothing to
  change; it is written down here so that the chapter pass does not read
  it as a slip.
