# Plan: 10.3 Dynamics of Rotational Motion: Rotational Inertia (m42179)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's instruction to finish the book in waves;
the per-section stop of rule 2, the plan review of rule 5 and the user picks
of rule 15 are replaced by this file, written before the section was built
and left for review after, as `ch10/config.md` records. Begun by one agent and
finished by another the same day: the plan, the text and the figures stood,
and the section's tables, the checks, the build and the browser pass were
added.

The section that turns Newton's second law into its rotational form. A force
on a point mass at the end of a tether becomes a torque, $mr^2$ appears where
the mass stood, and the sum of $mr^2$ over a whole body is named its moment
of inertia; the general law $\text{net}\;\tau = I\alpha$ follows, and one
example, a father pushing a merry-go-round with and without a child on it,
shows that the moment of inertia depends on where the mass sits and not only
on how much of it there is. Four sketch figures (10.10, 10.11, 10.13 and the
artwork of ten shapes, 10.12), one photograph inside a conceptual question
(10.14), one figure inside a problem (10.15), one worked example, four boxed
notes (two Making Connections, a Take-Home Experiment and the numbered
Problem-Solving Strategy), three glossary terms, one Check Your
Understanding, six AP items, five conceptual questions and eleven problems
of which seven are keyed. One page (rule 11).

## Sub-concepts (page headers)

The module prints one header of its own, "Rotational Inertia and Moment of
Inertia", which is kept; the other five are the agent's (rule 3).

1. `force-and-rotation` **Force is needed to change a rotation** (book: the
   opening paragraph on the bike wheel and the door; Figure 10.10).
2. `point-mass` **The rotational analog of Newton's second law for a point
   mass** (book: the derivation from $a = F/m$ and $a = r\alpha$ to
   $\tau = mr^2\alpha$; Figure 10.11; the Making Connections box on
   rotational motion dynamics). The variables $\kF$, $m$, $\kr$, $\ka$,
   $\kalpha$ and $\ktau$ and the equations `eq-force-on-point-mass` and
   `eq-torque-on-point-mass` anchor here.
3. `moment-of-inertia` **Rotational Inertia and Moment of Inertia** (book's
   header; the paragraph that defines $I = \sum mr^2$, works the hoop and
   sends the reader to Figure 10.12 for every other shape). $\kI$, $M$ and
   $\kR$ and `eq-moment-of-inertia` anchor here.
4. `second-law-rotation` **Newton's second law for rotation** (book: the two
   forms of the general relationship and the paragraph on their generality;
   the paragraph on the merry-go-round full of children and the
   distribution of mass; the Take-Home Experiment). `eq-second-law-rotation`
   and `eq-angular-acceleration-from-torque` anchor here.
5. `strategy` **Solving a rotational dynamics problem** (book: the
   five-step Problem-Solving Strategy for Rotational Dynamics; the Making
   Connections box on statics, which carries Figure 10.12 where the book
   prints it).
6. `merry-go-round` **A father pushes a merry-go-round** (book: Example 10.7,
   Calculating the Effect of Mass Distribution on a Merry-Go-Round, with
   Figure 10.13, its strategy, both solutions and its discussion). The
   example is `ex-merry-go-round`; the publisher numbers it 10.7, after the
   two examples of 10.1 and the four of 10.2. $\kIc$ anchors here.

Cross references to Figure 10.10 to 10.13 are plain figure numbers, which the
app links to the figures; the problems' references to the example and to the
Problem-Solving Strategy are plain text. Learning objectives, the section
summary and the three glossary terms come out of the running text into the
tables and the views (rule 4).

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| torque-on-a-point-mass | result, eq-torque-on-point-mass | point-mass | the derivation and Figure 10.11; the lathe and gear AP items |
| moment-of-inertia | idea, eq-moment-of-inertia | moment-of-inertia | the definition, the hoop, Figure 10.12; the boxer's forearm; the two-disk AP item |
| mass-distribution-and-inertia | idea | second-law-rotation | the merry-go-round full of children; the rod-and-weights AP item; the racing bicycle and hoop-versus-disk questions |
| newtons-second-law-rotation | result, eq-second-law-rotation | second-law-rotation | both forms of the law; the merry-go-round example; the grindstone, Zorch and gymnast problems |
| choosing-a-moment-of-inertia | skill | strategy | Figure 10.12 and the sentence that sends the reader to it; the example adds the child's $I$ to the disk's; the rod proof |
| rotational-dynamics-strategy | skill | strategy | the five steps; the Zorch problem asks for them explicitly |

The section leans on `torque`, `torque-from-lever-arm` (9.2), `newtons-second-law`,
`net-external-force`, `mass`, `inertia`, `free-body-diagram`, `system-of-interest`
(4.x), `angular-acceleration`, `tangential-angular-acceleration` and
`rotational-translational-analogy` (10.1); the coverage rows mark each as used
where the text uses it.

## Figures

id · replaces or Sim · concepts · value add · moving or still · sliders ·
headline · graph · 3D

1. `sim-bike-wheel` · replaces Figure 10.10, the bike wheel pulled by a hand ·
   torque-on-a-point-mass, newtons-second-law-rotation, mass-distribution-and-inertia
   · variation by slider and flow by animation: the book's caption makes
   three claims (more force, more angular acceleration; more mass, less;
   closer to the axle, less) and the still can only assert them, while here
   the reader sets each and watches the wheel spin up faster or slower ·
   **moving**: the sentence the figure illustrates is that force is needed
   to change angular velocity, and a change of angular velocity is a thing
   that happens in time, so the wheel starts from rest and spins up under
   the pull for 2.00 s, then holds; the cycle is the pull, and the transport
   scrubs it · $\kF$ (0 to 20 N, default 10, force), the distance of the
   pull from the axle $\kr$ (0.05 to 0.33 m, default 0.33, the rim, position)
   and the wheel's mass $M$ (0.5 to 5.0 kg, default 2.0, ink); the wheel is
   a hoop of radius 0.330 m, the one case the book works, so
   $\kI = M\kR^2$ is legible on this page · "A pull of 10 N at the rim of a
   2.0 kg wheel gives it 15.2 rad/s², and after 2.00 s it turns at
   30.3 rad/s." · none: the wheel with its spokes turning is the whole
   picture, and the angular velocity is read out as a number · 2D. Readout:
   $\kalpha = \frac{\text{net}\;\ktau}{\kI} = \frac{\kr\kF}{M\kR^2}$ with the
   live numbers; small line on $\omega = \alpha t$ at the current time. Draws
   force, position, rotational-inertia, angular-acceleration, torque,
   angular-rate, time. Labels on: the hand, the axle and the three quantities
   are five labels on things that do not move (the spokes turn, the labels do
   not).
2. `sim-point-mass` · replaces Figure 10.11, the mass tethered to a pivot on a
   frictionless table · torque-on-a-point-mass · variation by slider: the
   derivation is three equalities, $a = F/m$, $a = r\alpha$ and
   $\tau = mr^2\alpha$, and the reader sees all three numbers change together
   when any one input moves, which the still cannot show · **still**: the
   figure is the free-body picture the derivation reads its quantities from,
   a relation between quantities (rule 28.1); the mass's motion is 10.1's
   matter and the book's picture is a snapshot, so it answers its sliders and
   registers no cycle · $\kF$ (0 to 10 N, default 4.0, force), $m$ (0.10 to
   2.00 kg, default 0.50, ink), $\kr$ (0.20 to 1.00 m, default 0.60,
   position) · "A force of 4.0 N on a 0.50 kg mass 0.60 m from the pivot
   gives it 8.0 m/s² along the force and 13.3 rad/s² about the pivot." ·
   none · 2D, the table seen from above, the plane of rotation as the canvas.
   Readout: $\ktau = \kr\kF = m\kr^2\kalpha$ with the live numbers; small line
   on $\ka = \kF/m$ and $\ka = \kr\kalpha$ agreeing. Draws force, position,
   acceleration, angular-acceleration, torque. Labels on: four, none moving.
3. `sim-inertias` · replaces Figure 10.12, the artwork of ten shapes and
   their moments of inertia · moment-of-inertia, choosing-a-moment-of-inertia,
   mass-distribution-and-inertia · standardisation and variation by slider:
   the ten formulas become one body the reader can size, and every shape is
   drawn beside a bar comparing its $I$ with the hoop's $MR^2$, the most a
   body of that mass and radius can have, so the reader sees that the
   formulas differ only in how far out the mass sits · **still**: a body and
   its axis have no time in them · the shape (ten options, a dropdown since
   a row of ten would wrap, rule 26.1, default the solid cylinder about its
   axis, which is the example's disk), $M$ (10 to 100 kg, default 50.0, ink),
   $\kR$ (0.10 to 2.00 m, default 1.50, position; the slab's width $b$ and
   the annular cylinder's outer radius $R_2$ take it) and $\ell$ (0.20 to
   3.00 m, default 1.00, ink; the length of a rod or cylinder and the slab's
   length $a$, disabled for the shapes that have no length in their formula)
   and $R_1$ (0.05 to 1.90 m, default 1.00, position; the annular cylinder's
   inner radius, disabled elsewhere and held below $R_2$) · "A solid disk of
   50.0 kg and 1.50 m radius has a moment of inertia of 56.3 kg·m² about its
   axis, half that of a hoop with the same mass and radius." · none: a bar
   for $I$ against $MR^2$ · 2D from a locked view (rule 28.2): the book
   prints each shape in perspective with its axis, so the body is projected
   from one fixed viewpoint with shaded faces and no orbit. Readout: the
   shape's formula with the live numbers. Draws rotational-inertia, position.
   Labels on: the axis and the dimensions, three at most.
4. `sim-merry-go-round` · replaces Figure 10.13, the father pushing the
   merry-go-round · newtons-second-law-rotation, mass-distribution-and-inertia,
   choosing-a-moment-of-inertia, torque-on-a-point-mass · variation by slider
   and flow by animation: the example's two parts are one slider, the
   child's mass, set to nothing and then to 18.0 kg, and the discussion's
   2.00 s of pushing is a clock, so the reader watches the same push spin
   the empty platform up to 13.3 rad/s and the loaded one to 8.89 rad/s, with
   both curves on one graph · **moving**: the discussion times the push at
   2.00 s and reads the angular velocity it produces, so the figure runs
   from rest for 2.00 s and holds; the cycle is the push · $\kF$ (0 to 400 N,
   default 250, force), the child's mass (0 to 40.0 kg, default 18.0, ink,
   zero meaning no one is on it), the child's distance from the center
   (0 to 1.50 m, default 1.25, position) and the platform's mass $M$ (20 to
   100 kg, default 50.0, ink); the radius stays the book's 1.50 m and the
   push stays at the rim and perpendicular to it, as the caption says ·
   "With an 18.0 kg child 1.25 m from the center the push makes 375 N·m,
   the moment of inertia is 84.4 kg·m² and after 2.00 s the platform turns
   at 8.89 rad/s." · beside: the platform seen from above is round, so the
   graph of $\omega$ against $t$ sits to its right, the loaded platform's
   line solid and the empty platform's dashed, axes fixed at 0 to 2.00 s and
   0 to 30 rad/s (from the book's 13.3 rad/s doubled and rounded), the
   reading pinned at the top where a light platform and a hard push exceed
   it · 2D, the plane of rotation as the canvas. Readout:
   $\kalpha = \frac{\ktau}{\kI} = \frac{\kr\kF}{\frac{1}{2}M\kR^2 + m\kr_{\text{c}}^2}$
   with the live numbers; small line giving the two moments of inertia
   added. Draws force, position, rotational-inertia, angular-acceleration,
   torque, angular-rate, time. Labels: the child and the push are two labels
   on things that turn with the platform, so the child's label rides with
   the child and the push stays at the rim where the father stands; both
   stay on, since two labels never crowd, and the child has a hover name as
   well.

Photographs: the racing bicycle (Figure 10.14) sits inside a conceptual
question and travels on that item's card, as `ch10/config.md` decides; it is
not drawn in the text. The bike wheel of 10.10 is a drawing, not a
photograph, and is replaced.

Figures that serve exercises: the motorcycle wheel (Figure 10.15) belongs to
a problem the book leaves unkeyed, so the problem is left out and the figure
with it, named in `notes`. The problems that are kept refer to no figure.

Extra simulations (rule 15), thought through, judged and decided:

- A hoop and a disk of the same mass and radius side by side under the same
  torque, which is the second conceptual question. Left: `sim-inertias`
  already puts the hoop's $MR^2$ beside every shape as the bar, and
  `sim-merry-go-round` shows what a larger $I$ does to $\alpha$.
- The cardboard clock face with the lump of putty of the Take-Home
  Experiment. Left: it is a torque from a weight at 3 o'clock against the
  friction of a loose nail, which the section gives no numbers for.
- A rod on a pivot with two lead weights in its holes, which is the last AP
  item. Left: it would answer the question the reader is asked.

## Exercises

- The Check Your Understanding (fs-id2404667, torque and moment of inertia
  depend on more than one factor) is keyed by the book and is set inline
  after `merry-go-round`, the example it follows, Understand.
- 5 conceptual questions, none keyed, each an open item with an AI-marked
  suggested approach: `cq1` (fs-id2655227, the rod about its end against a
  point mass at its center, Analyze), `cq2` (fs-id2450048, hoop against disk
  and shell against sphere, Understand), `cq3` (fs-id1222304, a small force
  with a large torque and the reverse, Understand, citing `point-mass`),
  `cq4` (fs-id2680047, the racing bicycle's rims, Analyze, Figure 10.14 on
  its card) and `cq5` (fs-id1401566, the ball sliding and rolling up two
  ramps, Analyze).
- 3 AP items of the section's own kept here. `ap1` (fs-id1721000, the chisel
  on the lathe) is keyed (b) and is a graded choice, Apply. `ap5`
  (fs-id1669125, the two sizes of disk) is keyed (d) and is a graded choice,
  Analyze; the book appends the stem of the next item to its answer key, and
  that stray sentence is left off. `ap6` (fs-id1338880, the rod with two
  lead weights) has no key and is an open item with an AI-marked approach,
  Create; its stem repeats a clause of its own question and is kept as the
  book prints it.
- 3 AP items held for 10.5 with `source_section: "10.3"`, since they ask
  about angular momentum: the Ferris wheel (fs-id438270), the lever whose
  angular momentum is to be measured (fs-id1500072) and the setup for
  determining angular acceleration and angular momentum (fs-id2003821).
  `exercise_notes` says so.
- 4 AP items taken from 10.4 with `source_section: "10.4"`, since each asks
  how a torque changes an angular velocity: `ap2` (fs-id2004322, the two
  gears, keyed (a), graded choice, Understand), `ap3` (fs-id1292713,
  doubling the torque against halving the radius, open, AI approach, Analyze),
  `ap4` (fs-id1543406, the fishing reel, keyed (c), graded choice, Analyze)
  and `ap7` (fs-id1628274, two people pushing a merry-go-round, open, AI
  approach, Create).
- 7 problems keyed and kept: `p1` (fs-id1198532, the merry-go-round with the
  child, multi 0.338 s, 0.0403 rev, 0.313 s), `p3` (fs-id2669875, the boxer's
  forearm, 0.50 kg·m²), `p5` (fs-id2449638, the grindstone, multi 50.4 N·m,
  17.1 and 17.0 rad/s²), `p7` (fs-id3064540, Zorch slowing Earth,
  3.96 × 10¹⁸ s), `p9` (fs-id2962557, the rod about its center from the rod
  about its end, open with the book's proof as its solution), `p10`
  (fs-id2514768, the gymnast, 2.0 ms for part (a) with the book's (b) and (c)
  in the solution) and `p11` (fs-id1930191, the flywheel car, 17,500 rpm for
  part (a) with the book's (b) and (c) in the solution).
- 4 problems left out, having no answer in the book's key: the skater as a
  cylinder with rod arms (fs-id2659846), the soccer player's kick
  (fs-id966811), the motorcycle wheel as an annular ring (fs-id3397406, with
  Figure 10.15) and the automobile drive train (fs-id1128778).
- No generated questions: every node of the section has a book exercise that
  tests it.
- Weights: `cq1`, `cq2` and `cq4` give `mass-distribution-and-inertia` the
  full value and `moment-of-inertia` 2; `cq3` tests `torque` alone; `cq5`
  tests `newtons-second-law-rotation` with `moment-of-inertia` at 2, since
  the argument is that a frictionless ramp exerts no torque about the ball's
  center, so its spin cannot change and cannot be traded for height; the
  Check Your Understanding tests `mass-distribution-and-inertia` with
  `torque` at 2; `ap1`, `ap2`, `ap3`,
  `ap4` and `ap7` test `newtons-second-law-rotation` with
  `torque-on-a-point-mass` at 2 where the lever arm is the point; `ap5` and
  `ap6` test `choosing-a-moment-of-inertia` with `mass-distribution-and-inertia`
  at 3; `p1`, `p5`, `p7`, `p10` test `newtons-second-law-rotation` with
  `rotational-dynamics-strategy` at 3 (`p7` at full value, since it asks for
  the steps); `p3` tests `newtons-second-law-rotation`; `p9` and `p11` test
  `choosing-a-moment-of-inertia`, `p11` with `moment-of-inertia` at 2.

## Views

- Formulas: the five equations of the section already in `chapter.json`,
  four important and `eq-force-on-point-mass` not.
- Definitions: the ten variables of the section, and three glossary terms,
  torque, rotational inertia and moment of inertia.
- Concept map: the six nodes above with their edges into 4.x, 9.2 and 10.1.

## Colour

The page binds force, position, acceleration, torque, rotational-inertia,
angular-acceleration, angular-rate and time. Every figure draws a force and
a distance from the axis and reads out a torque and an angular acceleration;
`sim-point-mass` draws the linear acceleration $a = F/m$ beside the force;
the two moving figures read out the angular velocity the push produces and
the time it has acted, and `sim-merry-go-round` graphs them. This is three
more than `ch10/COLOR.md` lists for 10.3: acceleration, because the
derivation's first step is $a = F/m$ and the figure draws that arrow, and
angular-rate and time, because the figures that move have a clock and a
speed to read. The masses $m$ and $M$, the lengths $\ell$, $a$ and $b$ of a
body and the angle turned stay untyped and in ink, as the chapter decided.

## Wanted at chapter level

- variables `10.3/F` → 10.3-point-mass
- variables `10.3/m` → 10.3-point-mass
- variables `10.3/r_curv` → 10.3-point-mass
- variables `10.3/a` → 10.3-point-mass
- variables `10.3/α` → 10.3-point-mass
- variables `10.3/τ` → 10.3-point-mass
- variables `10.3/M` → 10.3-moment-of-inertia
- variables `10.3/R` → 10.3-moment-of-inertia
- variables `10.3/I` → 10.3-moment-of-inertia
- variables `10.3/I_c` → 10.3-merry-go-round
- equations `eq-force-on-point-mass` → 10.3-point-mass
- equations `eq-torque-on-point-mass` → 10.3-point-mass
- equations `eq-moment-of-inertia` → 10.3-moment-of-inertia
- equations `eq-second-law-rotation` → 10.3-second-law-rotation
- equations `eq-angular-acceleration-from-torque` → 10.3-second-law-rotation
- `ch10/COLOR.md` row for 10.3: add `acceleration`, `angular-rate` and `time` to the types bound, for the reasons under Colour above.
- `ch10/config.md` and `exploration.md` say Figure 10.15, the motorcycle wheel, travels on its problem's card; that problem (fs-id3397406) is unkeyed and left out, so the figure appears nowhere on the page. Nothing is wanted unless the chapter pass would rather keep the figure another way.

Decided in the chapter pass (2026-09-14): every anchor above is written on
its row, and `ch10/COLOR.md`'s row for 10.3 now lists `acceleration`,
`angular-rate` and `time` with the reason. Figure 10.15 stays where it is,
nowhere: its problem is unkeyed and left out, `notes` says so, and
`ch10/config.md` records that 10.15 and 10.36 are the two numbers of the
chapter that no page shows. 10.1's grindstone problem (fs-id3225958) is set
here as `p12` with `source_section: "10.1"`, tagged
`newtons-second-law-rotation` with `choosing-a-moment-of-inertia` and 10.2's
`rotational-kinematic-equations` at weight 2, and `exercise_notes` says so.
