# Plan: 10.1 Angular Acceleration (m42177)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's instruction to finish the book in waves;
the per-section stop of rule 2, the plan review of rule 5 and the user picks
of rule 15 are replaced by this file, written before the section was built
and left for review after, as `ch10/config.md` records.

The section that lets the angular velocity change. Chapter 6 gave the angle,
the angular velocity and the radius and held the rate of spin constant; this
section names the rate at which that rate changes, the angular acceleration,
and ties it to the linear acceleration of a point on the rim by the radius,
exactly as the angular velocity was tied to the linear velocity. Four book
figures (10.3 to 10.6, three sketches and one drawn illustration), Table
10.1, two worked examples, one Take-Home Experiment note, one Check Your
Understanding box with its answer, four conceptual questions and four
problems of which two are keyed. The PhET note (Ladybug Revolution) is
dropped per the chapter config. One page (rule 11).

## Sub-concepts (page headers)

The module prints no header of its own, so all five are the agent's (rule 3).

1. `uniform-circular-motion` **Uniform circular motion recalled** (book: the
   opening paragraph that recalls $\kw = \Delta\theta/\kdt$, $\kv = \kr\kw$
   and $\kw = \kv/\kr$ and the sign convention; Figure 10.3). The variables
   $\theta$, $\kw$, $\kv$ and $\kr$ and the equations
   `eq-angular-velocity-recalled` and `eq-omega-from-v` anchor here.
2. `angular-acceleration` **Angular acceleration** (book: the skater, the
   merry-go-round and the hard disk; the definition
   $\kalpha = \kdw/\kdt$, its units and its sign; Example 10.1, the bike
   wheel, `ex-bike-wheel`). The variables $\kdw$, $\kdt$ and $\kalpha$ and
   `eq-angular-acceleration` anchor here.
3. `tangential-acceleration` **Tangential and centripetal acceleration**
   (book: the bicycle on its wheels and the tangent; the definition of
   tangential acceleration; Figure 10.4 + 10.5; the paragraph that makes
   $\kat$ and $\kac$ perpendicular and independent). The variables $\kat$,
   $\kac$ and $\kdv$ and `eq-tangential-acceleration` anchor here.
4. `linear-angular` **Linking linear and angular acceleration** (book: the
   derivation from $\kat = \kdv/\kdt$ through $\kat = \kr\kalpha$ and
   $\kalpha = \kat/\kr$; the paragraph on the car's drive wheels; Example
   10.2, the motorcycle, `ex-motorcycle`, with Figure 10.6 inside it).
   `eq-tangential-from-angular` and `eq-angular-from-tangential` anchor here.
5. `analogy` **Rotational and translational quantities** (book: the "So far"
   paragraph; Table 10.1 as a `div.book-table`; the Take-Home Experiment
   note). The Check Your Understanding box sits inline after this block,
   where the book prints it.

The book's cross references to Uniform Circular Motion and Gravitation
(m42083, which is 6.1) and One-Dimensional Kinematics (m42033, Chapter 2)
are plain text, as every built section writes them. The publisher numbers
the two examples 10.1 and 10.2 and the page follows that. Learning
objectives, the section summary and the three glossary terms come out of the
running text into the tables and the views (rule 4).

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| nonuniform-circular-motion | idea | angular-acceleration | the three everyday cases; CQ 4 on the microwave plate |
| angular-acceleration | idea, eq-angular-acceleration | angular-acceleration | the definition; Example 10.1; the CYU; problem 3 |
| tangential-acceleration | idea, eq-tangential-acceleration | tangential-acceleration | the definition beside Figure 10.4; CQ 3 |
| tangential-and-centripetal-are-independent | idea | tangential-acceleration | Figure 10.5 and the perpendicular-and-independent sentence; CQ 2, 3, 4 |
| tangential-angular-acceleration | result, eq-tangential-from-angular | linear-angular | the derivation; Example 10.2; problem 3 |
| rotational-translational-analogy | idea | analogy | Table 10.1; CQ 1 |

The section leans on `uniform-circular-motion`, `angular-velocity`,
`linear-angular-velocity`, `rotation-angle` (6.1), `centripetal-acceleration`
(6.2) and `acceleration` (2.4); the coverage rows mark each as used where the
text uses it.

## Figures

id · replaces · concepts · value add · moving or still · sliders · headline ·
graph · 3D

1. `sim-uniform` · replaces Figure 10.3 (the disk in uniform circular
   motion) · uniform-circular-motion, angular-velocity,
   linear-angular-velocity · intuition and variation by slider, flow by
   animation: the book's disk shows one frozen $\Delta\theta$ and two $\kv$
   arrows, and the reader has to imagine the radius sweeping round at a
   steady rate and the arrow turning while its length stays put · **moving**:
   a constant angular velocity is a clock, the angle grows with time and the
   figure shows one revolution per loop with the scrubber (rule 14) · $\kw$
   (0.5 to 4.0 rad/s, default 2.0, angular-rate), $\kr$ (0.20 to 1.00 m,
   default 0.60, position) · "After 1.05 s the radius has swept 2.09 rad and
   the rim moves at 1.20 m/s in a direction that has turned with it." · none:
   the disk is the picture · 2D. Readout: $\kv = \kr\kw$ with the live
   numbers; small line on $\kw = \Delta\theta/\kdt$ from the swept angle and
   the time. The disk and the velocity arrow are on scales fixed from the
   slider maxima; the arrow of a rim faster than 3.5 m/s is drawn shortened
   and its label says so (rule 28.4), so the arrow never crosses the headline. Still-simulation tier is argued past because the idea is a
   steady turning and a still could not show the velocity's direction
   changing while its magnitude does not. Draws angular-rate, position,
   velocity, time.
2. `sim-spin-up` · Sim (it replaces no figure; the book draws nothing for
   Example 10.1) · angular-acceleration, nonuniform-circular-motion ·
   variation by slider and flow by animation: the reader sees the bicycle
   wheel spin up over $\kdt$ under a small positive $\kalpha$ and then stop
   in a fraction of a second under a large negative one, and reads both
   slopes off the graph · **moving**: the example is a story in time, a
   spin-up of 5.00 s followed by a stop of 0.300 s, so the figure runs once
   through both and holds (rule 14) · the final angular velocity $\kw$ (5 to
   40 rad/s, default 26.2, which is the book's 250 rpm, angular-rate), the
   spin-up time $\kdt$ (1.0 to 10.0 s, default 5.00, time), the braking
   angular acceleration $\kalpha$ (−150 to −20 rad/s², default −87.3,
   angular-acceleration) · "At 2.50 s the wheel turns at 13.1 rad/s; it is
   gaining 5.24 rad/s every second." then "The brakes stop the wheel in 0.300
   s, an angular acceleration of −87.3 rad/s²." · graph beside the wheel: $\kw$
   against $\kt$, the rising line and the steep fall, axes fixed at 0 to 12 s
   and 0 to 40 rad/s from the slider maxima · 2D. Readout:
   $\kalpha = \kdw/\kdt$ with the live numbers for whichever phase is running;
   small line on the stopping time $\kdt = \kdw/\kalpha$. Draws angular-rate,
   angular-acceleration, time.
3. `sim-accelerations` · replaces Figure 10.4 + 10.5 (the same point on the
   same circle, first with $\kat$ alone and then with $\kac$ beside it; the
   config folds them) · tangential-acceleration,
   tangential-and-centripetal-are-independent, centripetal-acceleration,
   tangential-angular-acceleration · intuition and flow by animation: the
   book's two stills say in words that $\kat$ affects magnitude and $\kac$
   affects direction; the moving point shows $\kv$ growing longer while
   $\kat$ acts and swinging round while $\kac$ acts, and the two arrows stay
   perpendicular throughout · **moving**: a point whose speed is changing is
   somewhere along the circle at every instant, so the figure runs 4.0 s of
   model time and holds (rule 14) · $\kr$ (0.20 to 1.00 m, default 0.60,
   position), the starting angular velocity $\kwo$ (0 to 3.0 rad/s, default
   0.5, angular-rate), $\kalpha$ (−1.0 to 1.0 rad/s², default 0.80,
   angular-acceleration; at 0 the figure is Chapter 6's uniform motion and
   $\kat$ vanishes) · "At 2.00 s the point moves at 1.26 m/s; a_t = 0.48 m/s²
   is changing that speed and a_c = 2.65 m/s² is changing its direction." ·
   graph beside the circle: $\kv$ against $\kt$, a straight line of slope
   $\kat$, axes fixed at 0 to 4 s and −2 to 4 m/s from the book's default run
   (the slider extremes would leave the book's line flat), a speed beyond the
   frame pinned at its edge; the circle is on a scale fixed from the largest
   radius, and the arrow scales are set from the book's default state, a
   velocity arrow longer than the frame allows drawn shortened with its label
   saying so;
   the centripetal acceleration is read out rather than graphed, since it
   is a different quantity and grows as the square of $\kw$, and where its
   arrow would pass the center it is drawn to the center and its label says
   the arrow is shortened (rule 28.4) · 2D. Readout: $\kat = \kr\kalpha$ and
   $\kac = \kr\kw^2$ with the live numbers; small line on the two being
   perpendicular and independent. Labels: five entity labels ($\kv$, $\kat$,
   $\kac$, $\kr$, the centre), all beside things that move, so they are
   placed by the labeller each frame and stay on (rule 26.7: five is under
   six, and the labeller steps them out where they would touch). Draws
   position, angular-rate, angular-acceleration, velocity, acceleration,
   time.
4. `sim-motorcycle` · replaces Figure 10.6 (the motorcycle with $\kat$ on
   the rider and $\kalpha$ on its wheels) · tangential-angular-acceleration,
   angular-acceleration, tangential-acceleration · variation by slider and
   flow by animation: the book's drawing is one instant; here the motorcycle
   pulls away along the road for the whole 4.20 s while its wheels visibly
   turn faster, and the reader changes the wheel radius and watches
   $\kalpha$ change with $\kat$ held · **moving**: the example is a run from
   rest to 30.0 m/s in 4.20 s, one run per loop with the scrubber (rule 14) ·
   the final speed $\kv$ (10 to 40 m/s, default 30.0, velocity), the time
   $\kdt$ (2.0 to 8.0 s, default 4.20, time), the wheel radius $\kr$ (0.20 to
   0.50 m, default 0.320, position) · "At 2.10 s the motorcycle moves at 15.0
   m/s and its wheels turn at 46.9 rad/s, gaining 22.3 rad/s every second." ·
   graph below the road: $\kw$ of a wheel against $\kt$, a line of slope
   $\kalpha$, axes fixed at 0 to 8 s and 0 to 200 rad/s from the slider
   extremes · 2D. Readout: $\kalpha = \kat/\kr$ with the live numbers; small
   line on $\kat = \kdv/\kdt$. The motorcycle is drawn in ink, its rider the
   library's person sprite leaning to the bars; the wheels carry spokes so the
   turning shows, and the road is fixed from the longest run so the machine
   stays on the canvas at both ends of it. Draws velocity, acceleration,
   angular-acceleration, angular-rate, position, time.

Photographs: the section has none. Figure 10.6 is a drawn illustration, not
a photograph, and is replaced with the book's image kept as its original.

Table 10.1 Rotational and Translational Quantities stays in the text as a
`div.book-table` in `analogy`, as the config says; `sim-uniform` and
`sim-accelerations` between them show every relationship in it, so no figure
is built for the table itself.

Extra simulations (rule 15), thought through and decided:

- **The spin-up and stop of Example 10.1 (`sim-spin-up`): built.** The book
  works the example in numbers only, and the two slopes on one graph of
  $\kw$ against $\kt$, a gentle rise and a cliff, are the picture the
  discussion paints in words ("small and positive", "large and negative").
- The food on the microwave plate of conceptual question 4. Left:
  `sim-accelerations` at $\kalpha > 0$, $\kalpha = 0$ and $\kalpha < 0$ is
  the three parts of the question, and a figure of its own would answer it.
- The leg on the rotating chair of the Take-Home Experiment, with its three
  graphs. Left: the experiment asks the reader to sketch the graphs
  themselves, and drawing them would take the exercise away.
- The tornado of problem 1. Left: it is $\kw = \kv/\kr$, which `sim-uniform`
  already carries on its sliders, and the intro page keeps the photograph.

## Exercises

- 1 Check Your Understanding box, keyed by the book: `cyu1` (fs-id1870686,
  how the magnitude and direction of angular acceleration are denoted),
  Understand, inline after `analogy` where the book prints it, citing
  `angular-acceleration`, with the book's answer as an open solution.
- 4 conceptual questions, none keyed, each an open item with an AI-marked
  suggested approach: `cq1` (fs-id1361145, the rotational analogs of seven
  translational quantities, Remember, citing `analogy`), `cq2`
  (fs-id1867019, why centripetal acceleration changes direction and not
  magnitude, Understand, citing `tangential-acceleration`), `cq3`
  (fs-id3046867, why tangential acceleration changes magnitude and not
  direction, Understand, citing `tangential-acceleration`), `cq4`
  (fs-id3046066, the food on the microwave plate, Analyze, citing
  `tangential-acceleration`).
- 2 problems keyed and kept: `p1` (fs-id1571972, the tornado's angular
  velocity in revolutions per second, keyed 0.737 rev/s, Apply, citing
  `uniform-circular-motion`) and `p3` (fs-id3225958, the grindstone and the
  axe, keyed −0.26 rad/s² and 27 rev, Analyze, citing `linear-angular`; the
  book prints it here although the angular acceleration comes through the
  torque and the moment of inertia of 10.3, and `exercise_notes` says so).
- 2 problems left out, having no answer in the book's key: the
  ultracentrifuge (fs-id2980135) and the Unreasonable Results item on the
  basketball (fs-id1947422).
- No AP test prep items in this module.
- Nothing is taken from another section and nothing of this section's own is
  held for a later page.
- No generated questions: every node has a book exercise.
- Weights: `cq2` gives `centripetal-acceleration` its full value and
  `tangential-and-centripetal-are-independent` 3; `cq3` gives
  `tangential-acceleration` its full value and the independence node 3;
  `cq4` gives the independence node its full value, `tangential-acceleration`
  3 and `nonuniform-circular-motion` 2; `p1` gives `linear-angular-velocity`
  its full value and `angular-velocity` 2; `p3` gives `angular-acceleration`
  its full value and `tangential-angular-acceleration` 2.

## Views

- Formulas: the six equations of the section already in `chapter.json`, the
  four stated results important and the two recalled from Chapter 6 not.
- Definitions: the ten variables of the section; the three glossary terms.
- Concept map: the six nodes above with their edges into 2.4, 3.1, 6.1 and
  6.2.

## Colour

The page binds angular-rate, angular-acceleration, acceleration, velocity,
position and time, as `ch10/COLOR.md` lists for 10.1: every figure carries
$\kw$ or $\kalpha$ on a slider or reads it out, the two accelerations $\kat$
and $\kac$ share the acceleration hue and are told apart by direction and
label, the rim speed is drawn in the velocity hue, every radius is a
position, and every moving figure states the time. The angle $\theta$ and
the swept angle stay untyped and in ink, as do the mass and radius of the
grindstone in the problem's prose.

## Wanted at chapter level

- variables `θ` → 10.1-uniform-circular-motion
- variables `ω` → 10.1-uniform-circular-motion
- variables `v` → 10.1-uniform-circular-motion
- variables `r_curv` → 10.1-uniform-circular-motion
- variables `Δω` → 10.1-angular-acceleration
- variables `Δt` → 10.1-angular-acceleration
- variables `α` → 10.1-angular-acceleration
- variables `a_t` → 10.1-tangential-acceleration
- variables `a_c` → 10.1-tangential-acceleration
- variables `Δv` → 10.1-tangential-acceleration
- equations `eq-angular-velocity-recalled` → 10.1-uniform-circular-motion
- equations `eq-omega-from-v` → 10.1-uniform-circular-motion
- equations `eq-angular-acceleration` → 10.1-angular-acceleration
- equations `eq-tangential-acceleration` → 10.1-tangential-acceleration
- equations `eq-tangential-from-angular` → 10.1-linear-angular
- equations `eq-angular-from-tangential` → 10.1-linear-angular
- Problem 3 (`p3`, the grindstone) is set here where the book prints it,
  but its angular acceleration comes through torque and moment of inertia,
  which 10.3 introduces; the chapter pass may prefer to move it to 10.3 with
  `source_section: "10.1"`.

Decided in the chapter pass (2026-09-14): every anchor above is written on
its row. Problem 3, the grindstone, is moved to 10.3 as `p12` with
`source_section: "10.1"`, since its angular acceleration comes through the
torque of the friction force and the moment of inertia of a disk, which 10.3
introduces; its hints are rewritten to say so and both sections'
`exercise_notes` record the move. With it gone,
`tangential-angular-acceleration` is tested on this page by no exercise of
its own and by 10.2's yo-yo problem at weight 2; no question is generated.
