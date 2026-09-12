# Plan: 4.7 Further Applications of Newton's Laws of Motion (m42132)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-11
without a review stop, on Chen's instruction to finish the book in one job;
the per-section stop of rule 2, the plan review of rule 5 and the user picks
of rule 15 are replaced by this file, written before the section was built
and left for review after, as Chapters 1 to 3 did it.

The section that puts the three laws to work on situations that take more
than one step. Four worked examples (4.7 to 4.10, the numbers read off the
publisher's own page, as the figure numbers were), three sketch figures
(4.21 to 4.23),
no photograph, no glossary entry, one boxed problem-solving strategy of two
steps, the book's own sub-header on integrating concepts, three AP items,
two conceptual questions and twelve problems, five of them keyed. One page
(rule 11).

## Sub-concepts (page headers)

The book has one titled sub-header of its own, "Integrating Concepts:
Newton's Laws of Motion and Kinematics", which becomes the fourth block;
the first three are the three worked examples and the passages that
introduce them.

1. `drag` **Adding perpendicular forces: the drag on a barge** (book: the
   opening paragraph on further applications; Example 4.7, Drag Force on a
   Barge, with Figure 4.21 and the whole of its strategy, solution and
   discussion). The variables $\kFx$, $\kFy$, $\kFa$, $\kFD$, $m$ and $\ka$
   and the equations `eq-fapp-magnitude` and `eq-drag` anchor here. The
   example is `ex-barge`.
2. `tensions` **Two wires at different angles** (book: the bridging
   paragraph that recalls the tightrope walker; Example 4.8, Different
   Tensions at Different Angles, with Figure 4.22). $\kTone$, $\kTtwo$ and
   $\theta$ and the equation `eq-tension-two-wires` anchor here. The example
   is `ex-traffic-light`.
3. `scale` **What a bathroom scale reads in an elevator** (book: the
   paragraph of questions about the scale; Example 4.9, What Does the
   Bathroom Scale Read in an Elevator?, with Figure 4.23; the paragraph on
   downward acceleration, free fall and apparent weightlessness that follows
   it). $\kFs$ and $\kwgt$ and the equation `eq-apparent-weight` anchor here.
   The example is `ex-scale`.
4. `integrating` **Integrating concepts: Newton's laws of motion and
   kinematics** (book: the section's own header and its paragraph; the boxed
   Problem-Solving Strategy of two steps; Example 4.10, What Force Must a
   Soccer Player Exert to Reach Top Speed?, and the closing paragraph). The
   example is `ex-soccer`.
5. `rescue` **The rescue of the problems** (a short closing block that
   carries the unnumbered figure the keyed rescue problem refers to, as
   3.2's map of paths and 3.5's galaxies do).

Cross references to other chapters are plain text; this section names none.
The book's bold vectors $\mathbf{F}_{x}$ and $\mathbf{F}_{y}$ in the caption
of Figure 4.21 are set as the book sets them and their magnitudes take the
`\k` macros. Learning objectives, the section summary and the key equations
come out of the running text into the views; the section defines no term, so
the glossary gains nothing.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| drag-force | idea | drag | Example 4.7 and Figure 4.21; the flea problem, where the breeze and the gravitational force are added the same way; AP item 2 on the boulder |
| unequal-tensions | result, eq-tension-two-wires | tensions | Example 4.8 and Figure 4.22; the keyed rescue problem |
| apparent-weight | result, eq-apparent-weight | scale | Example 4.9 and Figure 4.23; both conceptual questions; the Unreasonable Results item on the scale |
| integrated-kinematics-dynamics | skill | integrating | the two steps and Example 4.10; the five problems marked Integrated Concepts that are kept, and three more that are left out |

The section leans on `net-external-force`, `newtons-second-law`,
`system-of-interest`, `weight` and `friction` (4.3), `free-body-diagram`
(4.1), `newtons-third-law` (4.4), `normal-force` and `tension` (4.5),
`net-force-by-axis` and `resolve-forces-into-components` (4.6),
`components-from-magnitude-angle` and `magnitude-direction-from-components`
(3.3), `resultant-vector` (3.2), `average-acceleration` (2.4), `const-a` and
`choose-equation` (2.5), `problem-solving-steps` (2.6) and `free-fall`
(2.7), all of which the coverage rows mark as used where the text uses them.

## Figures

id · replaces or Sim · concepts · what moves or still · sliders · headline ·
graph · 3D

1. `sim-barge` · replaces Figure 4.21 (a) and (b) (the two tugboats seen
   from above and the free-body diagram of the barge) · drag-force,
   net-external-force, newtons-second-law · **still**: the question the
   example asks is what the water drags back with, and the answer follows
   from the two pushes, the mass and the observed acceleration; nothing in
   it runs on a clock, and a barge creeping across the canvas would say
   nothing the arrows do not, so the figure answers its sliders and carries
   no transport (rule 14) · $\kFx$ (1.0 to 5.0 × 10⁵ N, default 2.7, force),
   $\kFy$ (1.0 to 5.0 × 10⁵ N, default 3.6, force), $m$ (2.0 to 8.0 × 10⁶
   kg, default 5.0, ink), $\ka$ (0 to 0.20 m/s², default 0.075,
   acceleration) · "the tugs push with 4.5 × 10⁵ N together, the barge takes
   3.75 × 10⁵ N of it, and the water drags back with 0.75 × 10⁵ N" · none:
   the scene from above, the free-body diagram beside it and the bar
   beneath that takes the drag out of the applied force are the picture · no. Readout: $\kFD = \kFa - m\ka$ with the
   live numbers; small line comparing the drag with the weight of the ship,
   as the book's discussion does. Draws force and acceleration.
2. `sim-traffic-light` · replaces Figure 4.22 (a) to (e) (the light hung
   from two poles, the forces, the free-body diagram, the components and the
   two axes) · unequal-tensions, net-force-by-axis, tension · **still**: a
   traffic light hanging at rest has no time in it; the figure answers the
   two angles and the mass and nothing else (rule 14) · $\theta_1$ (10° to
   80°, default 30.0, ink), $\theta_2$ (10° to 80°, default 45.0, ink), $m$
   (5.0 to 40.0 kg, default 15.0, ink) · "with the wires at 30.0° and 45.0°
   the left wire carries 108 N and the right 132 N, because the steeper wire
   takes the greater share of the 147 N weight" · none: the scene and the
   free-body diagram with the components resolved beside it are the picture
   · no. Readout: the two axis equations with the live numbers; small line on
   when the two tensions are equal and on how both grow as the wires are
   pulled toward the horizontal, which is the book's discussion. Draws force.
3. `sim-elevator-scale` · replaces Figure 4.23 (a) and (b) (the forces on
   the person, the scale and the elevator, and the free-body diagram of the
   person) · apparent-weight, newtons-second-law, newtons-third-law ·
   **moves**: the idea is a ride, and the reading changes as the ride does,
   so the lift starts from rest, speeds up for three seconds, cruises for
   four at constant velocity and slows to a stop in the last three, and the
   dial follows it; the loop is ten seconds of model time run in about five
   real seconds, with the scrubber · $m$ (40.0 to 120.0 kg, default 75.0,
   ink), $\ka$ (0.20 to 3.00 m/s², default 1.20, acceleration; the
   magnitude of the acceleration while the lift is speeding up and while it
   is slowing down) · "t = 1.8 s · the lift is speeding up at 1.20 m/s², and
   the scale reads 825 N rather than his 735 N weight" · graph beside the
   vertical scene, two panels: the scale reading against time with the
   weight drawn as a dashed level, and the velocity of the lift against time
   · no. Readout: $\kFs = m\ka + m\kg$ with the live numbers; small line on
   what the dial would read in free fall, which is the paragraph after the
   example. Draws force, acceleration, velocity and time.
4. `sim-soccer` · Sim (the book draws no figure for Example 4.10, and the
   skill this block introduces has none) · integrated-kinematics-dynamics,
   newtons-second-law, average-acceleration · **moves**: the player starts
   from rest and reaches his top speed over the elapsed time, and the run is
   what the two parts of the example are about, so the sprite runs the strip
   once per loop with the scrubber · $\kv$ (4.00 to 12.00 m/s, default 8.00,
   velocity), $\kdt$ (1.00 to 5.00 s, default 2.50, time), $m$ (40.0 to
   100.0 kg, default 70.0, ink) · "t = 1.25 s · he is halfway to his top
   speed, and the ground has been pushing him forward with 224 N all the
   way" · graph below the strip: the velocity against time, a straight line
   whose slope is the average acceleration, with the moving point on it ·
   no. Readout: $\ka = \kdv / \kdt$ and then $\kFnet = m\ka$ with the live
   numbers; small line naming the force in pounds, as the book's discussion
   does. Draws velocity, acceleration, time and force.
5. `fig-rescue` · a faithful copy of the unnumbered figure the keyed rescue
   problem refers to (the book gives it no number, so its eyebrow reads
   "Figure") · unequal-tensions · **still**: a person held motionless
   between two ropes · no sliders · "a person held by two ropes, one 15°
   from the vertical and the other 10° above the horizontal" · none · no.
   Draws force. The book's image travels with the problem's card as well,
   as 3.5's galaxies image does.

Photographs: the section has none, so none is kept and none is dropped.

Figures that serve exercises: the book prints three unnumbered ones here.
The sliding-block diagram belongs to the AP item that needs the coefficient
of friction of 5.1 and is left out with it; the Achilles tendon diagram
belongs to a problem the book does not key, which is left out with it; only
the rescue figure is kept, since its problem is keyed.

Extra simulations (rule 15), considered and left:

- A free-body diagram the reader builds by dragging arrows on, which would
  say whether the diagram is complete. It serves every section of the
  chapter and no section in particular, and `ch04/exploration.md` has
  already set it aside for a later pass over the whole chapter. Left.
- A lift in free fall with the cable cut, so that the dial falls to zero.
  The last paragraph of `scale` says this in a sentence, and
  `sim-elevator-scale` already says it in its readout without pretending
  the cable has broken. Left.
- The flea of problem 1, with the breeze and the gravitational force added
  at right angles. It is the barge again at a different scale, and
  `sim-barge` already carries perpendicular forces on its sliders. Left.

None built beyond the four the triggers of rule 14 call for.

## Exercises

- Both conceptual questions are placed inline after `scale`, since each is a
  short Understand check on the passage that has just been read, as 3.5
  places its two conceptual questions (rule 12). Everything else is at the
  end.
- 2 conceptual questions, `cq1` (fs-id3109644, the astronauts trained in an
  aircraft accelerating downward at $\kg$) and `cq2` (fs-id1449853, the hat
  coming off in a lift that stops), Understand, unkeyed, each with an
  AI-marked suggested approach, both citing `scale`.
- 2 AP items kept. `ap1` (fs-id1471760, the forces on a basketball and on
  the player who shoots it) is unkeyed and is an open item with an AI-marked
  approach, Understand. `ap2` (fs-id1669265, two people pushing a boulder
  north and west) is keyed and is a numeric item, Apply. The section's third
  AP item (fs-id1046422, the sliding block whose surface has a coefficient
  of friction of 0.20) needs the coefficient of friction, which the book does
  not introduce until 5.1, and Chapter 5 is not built, so it is left out and
  named in `notes` and `exercise_notes` for Chapter 5's own pass to pick up.
- 5 problems keyed and kept: `p1` (fs-id2391286, the flea in a breeze, a
  magnitude and a direction), `p3` (fs-id2953749, the person pulled from a
  burning building, the two tensions, with the book's figure on the card),
  `p5` (fs-id3078491, the sprinter's final speed and distance), `p7`
  (fs-id3065143, the basketball player's take-off speed, acceleration and
  force on the floor) and `p9` (fs-id2963222, the fireworks shell fired 10.0°
  from the vertical).
- 7 problems left out, having no answer in the book's key: the Achilles
  tendon (fs-id1427030), the dolphin (fs-id1486506), the rocket
  (fs-id2441621), the fireworks shell fired straight up (fs-id3178018), the
  lift full of passengers (fs-id3028228) and the two Unreasonable Results
  items (fs-id2670683 and fs-id1890360).
- `p9` prints as "Repeat [the preceding problem] for a shell fired at an
  angle 10.0º from the vertical", and the problem it repeats is one of the
  seven left out, so the card asks the three questions that problem asks
  with the angle this one sets, in the book's own words, rather than
  pointing the reader at a card that is not there. 3.2 resolved its own
  "Repeat" references the same way, by naming what is repeated.
- Nothing is taken from another section. 4.6's AP item on the tension in the
  cable of an accelerating lift is the nearest thing to this section's
  apparent weight, but `ch04/config.md` leaves it with 4.6, where the book
  prints it and where the four steps it is set under are introduced, and
  this section's `exercise_notes` records the judgement.
- No generated questions: every node of the section has a book exercise.
- Weights: `ap2` and `p1` give `drag-force` its full value and
  `newtons-second-law` weight 2, since the work is in adding the
  perpendicular forces and the second law only divides by the mass at the
  end; `p3` gives `unequal-tensions` its full value and `tension` weight 1,
  since the item names tension and turns on the two angles; `p5`, `p7` and
  `p9` give `integrated-kinematics-dynamics` their full value and
  `newtons-second-law` weight 3, since half of each is kinematics; `cq2`
  gives `newtons-first-law` weight 2 beside the full value for
  `apparent-weight`.

## Views

- Formulas: the four equations of the section already in `chapter.json`,
  `eq-tension-two-wires` and `eq-apparent-weight` important and the two
  steps of the barge not.
- Definitions: the eleven variables of the section. The section defines no
  glossary term.
- Concept map: the four nodes above with their edges into 2.4, 2.5, 2.6,
  3.3, 4.3, 4.5 and 4.6.

## Colour

The page binds force, acceleration, velocity and time. Every figure draws
forces: the two tug pushes, the applied force and the drag; the two
tensions and the weight; the scale's push and the weight; the ground's push
on the player. The barge and the lift carry an acceleration on a slider and
the soccer sim reads one off the slope of its graph, the lift and the soccer
sim draw a velocity, and the lift and the soccer sim state the time in their
headlines and on their axes. Mass, the angles of the wires and the angle of
the resultant stay untyped and in ink, as `ch04/config.md` decided.

## Wanted at chapter level

- variables `F_x` → 4.7-drag
- variables `F_y` → 4.7-drag
- variables `F_app` → 4.7-drag
- variables `F_D` → 4.7-drag
- variables `m` → 4.7-drag
- variables `a` → 4.7-drag
- variables `T_1` → 4.7-tensions
- variables `T_2` → 4.7-tensions
- variables `θ` → 4.7-tensions
- variables `F_s` → 4.7-scale
- variables `w` → 4.7-scale
- equations `eq-fapp-magnitude` → 4.7-drag
- equations `eq-drag` → 4.7-drag
- equations `eq-tension-two-wires` → 4.7-tensions
- equations `eq-apparent-weight` → 4.7-scale
- The `eq-tension-two-wires` row writes its angles as $\theta_1$ and
  $\theta_2$, which are not symbol rows; the text and the figure write them
  the same way, in plain LaTeX and in ink, as $\theta_0$ and $\theta_v$ are
  written in 3.4. Nothing is wanted unless the chapter pass would rather
  have rows for them.
- The components of the two tensions, $T_{1x}$, $T_{1y}$, $T_{2x}$ and
  $T_{2y}$, are written in plain LaTeX and stand in ink in the two axis
  equations of `tensions`, beside a coloured $\kFnetx$ and $\kFnety$,
  because the symbol table has no rows for them. Four symbol rows of type
  `force` (`T_1x`, `T_1y`, `T_2x`, `T_2y`, macros `\kTonex`, `\kToney`,
  `\kTtwox`, `\kTtwoy`) would let those two lines wear the force hue
  throughout; the chapter pass may add them, and if it does, the four
  occurrences in `text.html` under `tensions` are what change.
