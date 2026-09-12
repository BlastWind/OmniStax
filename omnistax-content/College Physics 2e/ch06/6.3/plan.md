# Plan: 6.3 Centripetal Force (m42086)

Source: `source.md`, converted from the CNXML module m42086. Status: built
today, 2026-09-11, without a review stop, on Chen's instruction to finish
the book in one job; the plan is written before the section and left for
review after, as Chapters 1 to 3 did it.

The section that names the force behind uniform circular motion and then
works the two cases a road gives you. Three narrative sketches (Figures 6.9
to 6.11), no photograph, seven further figures that sit inside the
conceptual questions and the problems, two worked examples, one Take-Home
Experiment box, ten conceptual questions and ten problems, six of them
keyed. The PhET note (Gravity and Orbits) is dropped per the chapter
config. One page (rule 11).

## Sub-concepts (page headers)

The book prints no titled sub-headers here, only the run of the argument.
Page structure, one block per idea:

1. `centripetal-force` **Centripetal force** (book: the list of forces that
   can cause a radial acceleration; the definition of centripetal force and
   its direction; $\kFnet = m\ka$ becomes $\kFc = m\kac$). The variables
   $\kFc$, $\kac$ and $m$ and the equation `eq-Fc-mac` anchor here.
2. `two-forms` **Two expressions for the centripetal force** (book: putting
   the two forms of $\kac$ into $\kFc = m\kac$; $\kFc = m\kv^2/\kr$ and
   $\kFc = m\kr\kw^2$; whichever is more convenient; the force is always
   perpendicular to the path). $\kv$ and $\kw$ and the equations `eq-Fc`
   and `eq-Fc-omega` anchor here.
3. `radius` **The radius of curvature a given force bends the path into**
   (book: solving the first expression for $\kr$; a large force makes a
   tight curve; Figure 6.9). $\kr$ and `eq-r-from-Fc` anchor here.
4. `level-curve` **Friction as the centripetal force on a level curve**
   (book: Example 6.4 in `ex-flat-curve`, which finds the force on the car
   and then the coefficient of friction it needs; Figure 6.10, which the
   book prints after the example and which stays there). $\kN$, $\mu_s$ and
   $\kg$ and the equations `eq-friction-centripetal` and `eq-mu-s` anchor
   at the example.
5. `banked` **Banked curves and the ideal banking angle** (book: the
   banked curve and ideal banking; Figure 6.11 and the free-body diagram;
   $\kN\sin\theta$ and $\kN\cos\theta$; $\tan\theta = \kv^2/\kr\kg$ and the
   inverse tangent; how the angle depends on the speed and the radius).
   $\kwgt$ and $\theta$ and the equations `eq-N-sin`, `eq-N-cos`,
   `eq-tan-theta` and `eq-banking` anchor here.
6. `ideal-speed` **The ideal speed of a banked curve** (book: Example 6.5
   in `ex-ideal-speed`, the Daytona curve; the closing sentence about the
   chapter's problems; the Take-Home Experiment with the golf club).
   `eq-ideal-speed` anchors at the example.
7. `exercise-figures` **The scenes the questions and problems refer to**
   (the seven figures the book prints inside its exercises, copied
   faithfully; see below).

Cross references to other chapters are plain text, as the chapter config
says. The book's "net $F = ma$" is set as $\kFnet = m\ka$, the friction
force $f$ as $\kff$, and the coefficient $\mu_{\text{s}}$, the mass $m$ and
the banking angle $\theta$ stay in plain LaTeX and in ink.

Learning objectives, the section summary and the glossary come out of the
running text into the tables and the views. One conceptual question is
placed inline (see Exercises); everything else goes to the Exercises
document.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| centripetal-force | idea | centripetal-force | the definition and the list of forces; the glossary; CQ 2, 3, 5, 6, 8, 10 |
| centripetal-force-magnitude | result, eq-Fc | two-forms | both forms; Example 6.4(a); problems 1, 5, 7 |
| radius-and-centripetal-force | result, eq-r-from-Fc | radius | Figure 6.9; CQ 1 and 4 |
| friction-as-centripetal-force | result, eq-mu-s | level-curve | Example 6.4(b); Figure 6.10; problems 8 and 10 |
| banked-curve | idea | banked | the banked-curve passage; Figure 6.11; the glossary |
| ideal-banking-angle | result, eq-banking | banked | the derivation; problems 3, 5, 8 |
| ideal-speed | result, eq-ideal-speed | ideal-speed | Example 6.5; problem 8(a) |
| free-body-circular-motion | skill | level-curve | both examples; Figures 6.10 and 6.11; CQ 5, 6, 7, 10; problem 7 |

The section leans on `centripetal-acceleration` and
`centripetal-acceleration-magnitude` (6.2), `uniform-circular-motion`,
`angular-velocity` and `linear-angular-velocity` (6.1),
`newtons-second-law`, `net-external-force` and `weight` (4.3),
`normal-force` (4.5), `free-body-diagram` (4.1),
`resolve-forces-into-components` and `newtons-laws-problem-solving` (4.6),
`components-from-magnitude-angle` (3.3) and `static-friction`,
`static-friction-magnitude` and `coefficient-of-friction` (5.1), all of
which the coverage rows mark as used where the text uses them.

## Figures

id · replaces or Sim · concepts · what moves or still, with the reason ·
sliders with their types · headline · graph · 3D

1. `sim-radius` · replaces **Figure 6.9** (the same speed taken with two
   different forces) · centripetal-force, centripetal-force-magnitude,
   radius-and-centripetal-force · **moves**: two objects travel their
   circles at the same speed, one held by the force you set and one by
   twice that force, each with its velocity arrow along the path and its
   centripetal force arrow pointing at the center; the idea has a time in
   it, since the objects go round, so the figure runs a cycle of one turn
   of the wider circle and gets the transport · mass $m$ (0.5 to 4 kg,
   default 2, ink), speed $\kv$ (5 to 30 m/s, default 20, velocity), and
   the two centripetal forces $\kFc$ and $\kFc'$ (200 to 2000 N, defaults
   600 and 1200, force), so that the ratio of the two circles is the
   reader's to change rather than fixed at a half · "at 20.0 m/s, 600 N
   bends the path into a circle of radius 1.33 m and 1,200 N into one of
   0.67 m" · none: the two circles are the
   picture · no. Readout: $\kr = m\kv^2/\kFc$ with the numbers; the small
   line gives the angular velocity $\kw = \kv/\kr$ of each circle, which is
   where the second form $\kFc = m\kr\kw^2$ comes from. Draws force,
   velocity, position, angular rate.
2. `sim-level-curve` · replaces **Figure 6.10** (the car on a level curve
   with its free-body diagram) · friction-as-centripetal-force,
   free-body-circular-motion, centripetal-force-magnitude · **still**: the
   figure answers its sliders and nothing else, since what it shows is a
   balance of forces at one instant, not a journey; a plan view of the
   curve stands on the left and the car seen from behind with its three
   forces on the right, with the free-body diagram beside it · mass $m$
   (500 to 2000 kg, default 900, ink), speed $\kv$ (5 to 40 m/s, default
   25.0, velocity), radius $\kr$ (50 to 1000 m, default 500, position) ·
   "at 25.0 m/s a 500 m curve needs 1,125 N of friction, which a
   coefficient of 0.13 can supply" · none · no. Readout: $\mu_s =
   \kv^2/\kr\kg$ with the numbers;
   the small line gives the centripetal force itself and says that the mass
   cancels. Draws force, velocity, position, acceleration.
3. `sim-banked` · replaces **Figure 6.11** (the car on a frictionless
   banked curve) · banked-curve, ideal-banking-angle, ideal-speed,
   free-body-circular-motion · **still**: again a balance of forces that
   answers its sliders; the car sits on the slope with its weight $\kwgt$
   and the normal force $\kN$ drawn, and $\kN$ is taken apart into
   $\kN\sin\theta$ toward the center and $\kN\cos\theta$ against the
   weight · banking angle $\theta$ (2º to 80º, default 65.0º, ink), radius $\kr$ (50 to 1500 m,
   default 100, position), mass $m$ (500 to 2000 kg, default 900, ink), the
   ideal speed following from the angle and the radius rather than sitting
   on a slider of its own · "banked at 65.0º, a 100 m curve is ideal for
   45.8 m/s, about 165 km/h" · graph below: the ideal angle
   against the speed for the radius you have set, with the current point
   marked, so that "roads must be steeply banked for high speeds" is a
   curve rather than a sentence · no. Readout: $\theta = \tan^{-1}
   (\kv^2/\kr\kg)$ with the numbers; the small line reads the same relation
   the other way as the ideal speed $\kv = (\kr\kg\tan\theta)^{1/2}$, which
   is Example 6.5, so the example needs no figure of its own. Draws force,
   velocity, position, acceleration.
4. `sim-loop` · **Sim** (replaces nothing in the book) · centripetal-force,
   centripetal-force-magnitude, free-body-circular-motion · **moves**: a
   car runs round a vertical loop at constant speed while the track's
   normal force $\kN$ and the car's weight $\kwgt$ are drawn at every
   position and their sum along the radius is the centripetal force; the
   car travels, so the figure runs a cycle of one turn and gets the
   transport · speed $\kv$ (6 to 22 m/s, default 12, velocity), radius
   $\kr$ (4 to 15 m, default 8, position), mass $m$ (200 to 800 kg, default
   500, ink) · "the car is 34º round the loop and the track pushes with
   13,081 N there, against 13,900 N at the bottom" · graph
   below: $\kN$ against the angle round the loop, from the bottom up over
   the top and back, with the moving point on it · no. Readout: $\kN = m
   \kv^2/\kr - m\kg\cos\phi$ with the numbers. Draws force, velocity,
   position, acceleration.

Figures that serve exercises (rule 14: copied over faithfully, no sliders,
no animation, labelled "Figure" with no number, each carrying the book's
own image as its original so the reader can call it up). They stand
together in the `exercise-figures` block at the end of the text, as the
paths map does in 2.1 and 3.2, and the prompts name them the way 2.1's
problems name theirs:

5. `fig-race-track` · the two paths through a race-track curve (conceptual
   question 4) · widths 200.
6. `fig-loop-ride` · the amusement ride with a vertical loop (conceptual
   questions 5 and 6) · widths 300.
7. `fig-merry-go-round` · the merry-go-round seen from above with the three
   paths A, B and C the lunch box might take (conceptual question 8) ·
   widths 300.
8. `fig-nail` · the mass on a string tied to a nail on a frictionless table
   (conceptual question 10) · widths 250.
9. `fig-bicycle` · the leaning bicycle with the force of the ground on the
   wheel and its two components (problem 6) · the CNXML gives this image no
   width, so `widths` stays empty and the app shows it at its natural size.
10. `fig-centrifuge` · the rider's cage on the arm of the large centrifuge,
    swung out below the horizontal, with the force along the arm, the
    weight and the centripetal force (problem 7) · the CNXML gives this
    image no width either, so `widths` stays empty. The book's part (a) is
    a photograph of the centrifuge in its hall and part (b) is the diagram
    the problem needs; the copy draws part (b), which is what the problem
    is about, and the whole of the book's image, photograph included, is
    one click away under the figure.
11. `fig-teardrop` · the teardrop-shaped roller-coaster loop with its
    smallest radius at the top and its largest near the base (problem 9) ·
    widths 250.

The leaning bicycle belongs to problem 6 and the teardrop loop to problem
9, and neither problem has an answer in the book's key, so both are left
out; the two figures are kept as the chapter config asks, since the
bicycle shows the section's own relation $\theta = \tan^{-1}(\kv^2/\kr\kg)$
in another setting and the teardrop shows the loop that conceptual
questions 5 and 6 are about.

The eighth image the chapter config names, the graph of $\kv$ against $\kr$
that answers part (c) of 6.6's Critical Thinking item, travels inside that
item's answer as an image on its card, the way 3.4 carries the graph of
3.5's Critical Thinking item, so it is not a row of the figures table.

No photograph to keep or drop: the section prints none.

Extra simulations (rule 15), thought through and judged:

- **The vertical loop with its forces** (`sim-loop`, built). Every figure
  the section requires draws a balance of forces that does not change as
  the object goes round, and the loop is the one case in the section where
  the force the track supplies changes from place to place. Two conceptual
  questions and the Critical Thinking item taken from 6.6 turn on exactly
  that, and nothing in the text pictures it. Built.
- **The same scene in two frames at once**, the ground's and the turning
  frame's, for the lunch box let go on the merry-go-round. It is proposed
  in 6.4's plan, where the Coriolis deflection makes it the section's own
  subject, and it would only repeat 6.4's figure here. Left.
- **A curve taken at more and at less than the ideal speed**, with friction
  drawn pointing up or down the slope. The book says in one sentence that
  friction lets you take the curve faster or slower, and says nothing about
  how much, so the figure would have to invent the friction model the text
  does not give. Left.
- **A centrifuge cage swinging out as the angular velocity rises**, which
  is problem 7. The problem has a key, but the faithful copy of the book's
  diagram is what the reader needs to start it, and a slider would only
  hand the answer over. Left.

## Exercises

- No Check Your Understanding boxes in this chapter. One conceptual
  question is short enough to be a check beside the passage it tests:
  `cq2` (fs-id3055510, "Define centripetal force. Can any type of force be
  a centripetal force?") is placed inline after `centripetal-force`, which
  is where the text answers it. Everything else sits at the end.
- 10 conceptual questions, `cq1` to `cq10`, Understand, each with an
  AI-written suggested approach, citing the passage it turns on.
- 6 keyed problems kept: `p1` (the child on the two merry-go-rounds,
  multi), `p3` (the ideal banking angle of the 1.20 km highway curve,
  number), `p5` (the bobsled turn, multi with part (c) in the solution),
  `p7` (the NASA centrifuge, multi), `p8` (the Integrated Concepts item on
  the icy mountain road, multi), `p10` (the Unreasonable Results item on
  the unbanked 50.0 m curve, number with parts (b) and (c) in the
  solution).
- 4 problems left out, having no answer in the book's key: 2
  (fs-id1586925, the wind turbine blade), 4 (fs-id2009808, the ideal speed
  of the 20.0º curve), 6 (fs-id2992610, the leaning bicycle) and 9
  (fs-id1933865, the roller coaster's vertical loop).
- Taken from 6.6 under rule 12: `ct1` (exer-86626, the Critical Thinking
  item on where the normal force on a car in a vertical loop is greatest
  and whether $F_N = Kr^{1/2}$ can be right). What it tests is the
  centripetal force, which this section introduces, so it is set here with
  `source_section: "6.6"`, and both sections' `exercise_notes` say so. It
  is keyed, and the book's graph of $v$ against $r$ travels with it inside
  the answer.
- No generated questions: every node of the section has a book exercise.
- Weights: `cq1` and `cq4` give `radius-and-centripetal-force` the full
  value and `centripetal-force-magnitude` weight 2, since the reading they
  ask for is the rearrangement rather than the force itself; `cq3`, `cq8`
  and `cq10` give the concept they lean on from Chapter 4 weight 1;
  `p1` gives `centripetal-force-magnitude` the full value and `weight`
  weight 2, since part (c) only compares the force with the child's
  weight; `p7` gives `free-body-circular-motion` the full value for part
  (b) and `centripetal-acceleration-magnitude` weight 2 for part (a);
  `p8` gives `ideal-speed` and `friction-as-centripetal-force` the full
  value and `ideal-banking-angle` weight 2.

## Views

- Formulas: the eleven equations of the section already in `chapter.json`,
  the boxed and named ones important and the two components of the normal
  force and the friction identity not.
- Definitions: the eleven variables of the section, and the five glossary
  terms (centripetal force, ideal banking, ideal speed, ideal angle, banked
  curve).
- Concept map: the eight nodes above with their edges into 3.3, 4.1, 4.3,
  4.5, 4.6, 5.1, 6.1 and 6.2.

## Colour

The page binds force, velocity, position, acceleration and the angular
rate. Every figure draws a force ($\kFc$, $\kN$, $\kwgt$, $\kff$) and a
speed $\kv$; the radius $\kr$ is bracketed in the position hue in all four
sims; $\kg$ is written in the readouts of the level curve, the banked curve
and the loop; and the angular velocity $\kw$ is read out beside the radius
in `sim-radius`, where the second form of the centripetal force comes from.
The mass $m$, the banking angle $\theta$, the angle $\phi$ round the loop
and the coefficient $\mu_{\text{s}}$ stay in ink, as the chapter config
says.

## Wanted at chapter level

- variables `F_c` → 6.3-centripetal-force
- variables `a_c` → 6.3-centripetal-force
- variables `m` → 6.3-centripetal-force
- variables `v` → 6.3-two-forms
- variables `ω` → 6.3-two-forms
- variables `r_curv` → 6.3-radius
- variables `N` → 6.3-ex-flat-curve
- variables `μ_s` → 6.3-ex-flat-curve
- variables `g` → 6.3-ex-flat-curve
- variables `w` → 6.3-banked
- variables `θ` → 6.3-banked
- equations `eq-Fc-mac` → 6.3-centripetal-force
- equations `eq-Fc` → 6.3-two-forms
- equations `eq-Fc-omega` → 6.3-two-forms
- equations `eq-r-from-Fc` → 6.3-radius
- equations `eq-friction-centripetal` → 6.3-ex-flat-curve
- equations `eq-mu-s` → 6.3-ex-flat-curve
- equations `eq-N-sin` → 6.3-banked
- equations `eq-N-cos` → 6.3-banked
- equations `eq-tan-theta` → 6.3-banked
- equations `eq-banking` → 6.3-banked
- equations `eq-ideal-speed` → 6.3-ex-ideal-speed
- A variable row for `f_fric` in 6.3: `{ sym: "f_fric", type: "force",
  meaning: "friction between the tires and the road, which is the whole
  centripetal force on a level curve", unit: "N", section: "6.3", anchor:
  "6.3-ex-flat-curve" }`. The section writes $\kff$ where the book writes
  $f$, in `eq-friction-centripetal` and in Example 6.4, and the chapter
  sheet has no row for it.
