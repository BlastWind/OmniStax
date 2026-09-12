# Plan: 6.1 Rotation Angle and Angular Velocity (m42083)

Source: `source.md`, converted from the CNXML of m42083. Status: built today
without a review stop, on Chen's instruction to finish the book in one job.

The section that gives a rotation its own two quantities and joins them to the
linear quantities of Chapters 2 and 3. Five book figures (one photograph, four
sketches), one table, one worked example, one Take-Home Experiment, one
conceptual question and nine problems, five of them keyed. The PhET note
(Ladybug Revolution) is dropped per the chapter config. One page (rule 11).

## Sub-concepts (page headers)

The book prints two headers of its own, "Rotation Angle" and "Angular
Velocity", and the opening paragraph stands before them. Both headers carry
more than one idea, so each is split where the argument turns. Six blocks:

1. `circular-motion` **Motion in a curve rather than a straight line** (book:
   the opening paragraph, which looks back at Kinematics and Two-Dimensional
   Kinematics and says that the study of uniform circular motion begins with
   two angular quantities). Introduces `uniform-circular-motion`.
2. `rotation-angle` **Rotation angle** (the book's own header; the CD and its
   pits, the definition $\Delta\theta = \kds/\kr$, the arc length and the
   radius of curvature, Figure 6.2 and the folded Figure 6.3 + 6.4).
   Introduces `arc-length` and `rotation-angle`. The variables $\Delta\theta$,
   $\kds$ and $\kr$ and the equation `eq-rotation-angle` anchor here.
3. `radians` **The radian** (book: one complete revolution as $2\pi r/r = 2\pi$,
   the radian defined from it, Table 6.1, $2\pi$ rad $= 360º$ and
   $1\ \text{rad} \approx 57.3º$). Introduces `radian`. The equations
   `eq-one-revolution`, `eq-radian-revolution` and `eq-radian-degree` anchor
   here.
4. `angular-velocity` **Angular velocity** (the book's own header; $\kw =
   \Delta\theta/\kdt$ and its units). Introduces `angular-velocity`. The
   variables $\kw$ and $\kdt$ and the equation `eq-omega` anchor here.
5. `linear-angular` **Linear velocity and angular velocity** (book: $\kv =
   \kds/\kdt$, the substitution that gives $\kv = \kr\kw$, the two readings of
   it, Figure 6.5 and Example 6.1). Introduces `linear-angular-velocity`. The
   variable $\kv$ and the equations `eq-v-arc` and `eq-v-romega` anchor here.
6. `directions` **The directions of the two velocities** (book: both $\kw$ and
   $\kv$ have directions, the two senses of a rotation, the tangent, the
   Take-Home Experiment and Figure 6.6). Reinforces `angular-velocity` and
   `uniform-circular-motion`.

The worked example is `ex-tire` (Example 6.1, How Fast Does a Car Tire Spin?),
inside `linear-angular`. The Take-Home Experiment is kept verbatim as a
`div.note`, as the chapter config asks. Table 6.1 is a `div.book-table` with
the book's number and its title, "Comparison of Angular Units", never a
`<figure>`.

Cross references to Kinematics and Two-Dimensional Kinematics are plain text,
as the chapter config sets for chapter-level references. The book's sentence
"as shown in Figure 6.3 Note that $r$ is the radius of curvature" loses a full
stop in the CNXML, between the cross reference and the next sentence; the stop
is restored, and nothing else in the prose is touched.

Learning objectives, the section summary and the glossary come out of the
running text into the tables and the views. The chapter has no Check Your
Understanding box, so nothing is inline: the conceptual question and the
problems all go to the Exercises document.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| uniform-circular-motion | idea | circular-motion | the opening paragraph; the section summary; the whole chapter rests on it |
| arc-length | idea | rotation-angle | the definition beside Figure 6.3; the odometer and worn-tire problems |
| rotation-angle | idea, eq-rotation-angle | rotation-angle | the CD and its pits; Figure 6.4's two radii; the glossary |
| radian | idea, eq-radian-revolution | radians | the circumference argument; Table 6.1; the Discussion of Example 6.1; problems 1, 3 and 7 |
| angular-velocity | idea, eq-omega | angular-velocity | the definition; Example 6.1; the conceptual question; problems 5, 7 and 8 |
| linear-angular-velocity | result, eq-v-romega | linear-angular | the derivation and its two readings; Example 6.1; problems 5, 7 and 8 |

The section leans on `distance-traveled` (2.1), `instantaneous-velocity` and
`elapsed-time` (2.3), `instantaneous-speed` (2.3), `newtons-first-law` (4.2)
and `projectile-motion` (3.4), which the coverage rows mark as used where the
text uses them.

## Figures

id · replaces · concepts · what moves · sliders · headline · graph · 3D

1. `fig-cd` · **photograph kept**, Figure 6.2 (`Figure_07_01_01aa.jpg`, 225) ·
   the text points straight at it ("when the CD (compact disc) in Figure 6.2
   rotates about its center"), and the scratched wedge with $\Delta\theta$
   drawn across it is the thing the passage is about, so it is kept with the
   book's caption. The caption is set in plain LaTeX rather than the `\k`
   macros, since a photograph colours nothing it draws; `draws` is empty.
2. `sim-rotation-angle` · replaces Figure 6.3 **and folds Figure 6.4** (the
   book draws the same disc twice, once with one radius swept through
   $\Delta\theta$ and once with two points at different radii, and one live
   disc says both) · arc-length, rotation-angle, radian,
   uniform-circular-motion · **moves**: the disc turns steadily through one
   complete revolution per loop, and the two pits paint their arcs as it goes,
   so the idea has a time in it and the figure takes the transport and the
   scrubber · the radius of curvature $\kr$ of the outer pit (2.0 to 6.0 cm,
   default 6.0, position) and the radius $r_1$ of the inner pit (1.0 to 5.0
   cm, default 3.0, position, held below $\kr$) · "Δθ = 1.85 rad = 106° =
   0.29 revolutions · the outer pit has run 11.1 cm and the inner pit 5.6 cm"
   · no graph: the two arcs are unrolled into straight bars beside the disc,
   which is what shows that the same angle gives different arc lengths · no.
   Readout: $\Delta\theta = \kds/\kr$ with the numbers; small line on the
   radian, that an arc as long as the radius subtends one radian and that a
   whole circumference subtends $2\pi$. Draws position.
3. `sim-omega` · **Sim**, replaces nothing in the book · angular-velocity,
   rotation-angle · **moves**: a wheel turns at the set angular velocity while
   a clock runs, and the swept angle grows with it, so the figure loops
   through the set number of revolutions and takes the transport and the
   scrubber · the angular velocity $\kw$ (0.5 to 12.0 rad/s, default 4.0,
   angular rate) and the number of revolutions to run $N$ (1 to 4, default 2,
   ink, since a count is untyped) · "Δt = 1.85 s · the wheel has turned
   through Δθ = 7.40 rad, and Δθ/Δt is 4.00 rad/s at every moment of the run"
   · graph beside the wheel: $\Delta\theta$ against $\kdt$, a straight line
   through the origin whose slope is the angular velocity, with the moving
   point and its two drop lines · no. Readout: $\kw =
   \Delta\theta/\kdt$ with the numbers; small line on the time for one
   revolution. Draws angular rate, time. The section introduces the angular
   velocity where the book prints no figure at all, and rule 14's first
   trigger asks for one; the line of constant slope is what says that the
   ratio is the same over any interval, which no other figure of the page
   shows.
4. `sim-tire` · replaces Figure 6.5 (the car wheel with $\kv$ and $\kw$) ·
   linear-angular-velocity, angular-velocity, arc-length · **moves**: the car
   drives and its tire turns through exactly one revolution per loop, the
   tread laying down an arc length equal to the distance the car covers, so
   the transport and the scrubber follow · the speed of the car $\kv$ (2.0 to
   30.0 m/s, default 15.0, velocity) and the tire radius $\kr$ (0.20 to 1.40
   m, default 0.300, position), which are Example 6.1's numbers on load ·
   "t = 0.063 s · the tire has turned through 3.14 rad and the car has gone
   0.94 m, so ω = v/r = 50.0 rad/s" · graph below the road: $\kw$ against
   $\kr$ at the set speed, the curve $\kw = \kv/\kr$, with the tire marked on
   it and the earth mover's 1.20 m tire marked as well, which is the
   comparison the Discussion of Example 6.1 makes · no. Readout: $\kw =
   \kv/\kr$ with the numbers; small line on the earth mover. Draws position,
   velocity, angular rate.
5. `sim-record` · replaces Figure 6.6 (the fly on the vinyl record) ·
   angular-velocity, linear-angular-velocity, uniform-circular-motion ·
   **moves**: the record turns clockwise, as the book's figure has it, and the
   two flies ride round with their velocity arrows always along the tangent,
   so the figure loops once per turn of the record and takes the transport and
   the scrubber · the radius of the record $\kr$ (0.05 to 0.16 m, default
   0.152, position) and the angular velocity $\kw$ (1.0 to 8.0 rad/s, default
   3.5, angular rate, which is very nearly the 33⅓ rev/min of the record) ·
   "ω = 3.50 rad/s clockwise · each fly moves at v = rω = 0.53 m/s, always
   along the tangent" · no graph: the tangent arrows turning with the record
   are the whole point, and a graph beside them would take width from the
   circle · no. Readout: $\kv = \kr\kw$ with the numbers; small line saying
   that the two flies share one angular velocity while their velocities point
   opposite ways. Draws position, velocity, angular rate.

Every sketch of the section is replaced and the one photograph is kept. No
problem or conceptual question of the section refers to a figure, so nothing
has to be copied over faithfully.

The folded row carries Figure 6.3's number with 6.4 under `folds`, both book
images under `originals` in the book's order with their widths 300 and 230,
and both of the book's captions joined in `original_caption`, since the reader
can call up both images and each caption says what its own image shows.

Extra simulations (rule 15), considered and left:

- A dial that turns one rotation rate into another (rev/min, rev/s, rad/s,
  degrees per second), for the microwave, the truck and the ice skater. It
  only performs the arithmetic that $2\pi$ rad $=$ 1 revolution already
  settles, and it shows nothing moving that the reader cannot already see.
  Left.
- A wheel that unrolls its circumference along the road, for the odometer
  problem and the worn-tire problem. `sim-tire` already advances the car by
  exactly one circumference per loop and reads the distance out beside the
  turning wheel, so a second figure would draw the same thing twice. Left,
  and the odometer reading is kept inside `sim-tire`.
- The object swung on a string of the Take-Home Experiment, with the small
  circle of the wrist beside the large circle of the object. That is Figure
  6.4's two radii again, which the folded figure carries. Left.

None built.

## Exercises

- No Check Your Understanding box; nothing inline. The section's own problem
  set and its one conceptual question go to the Exercises document, and no
  exercise of another section of the chapter belongs here: 6.2's angular
  problems are set with the centripetal acceleration they lead to, 6.4's two
  borrowed conceptual questions belong to 6.5, and 6.6's Critical Thinking
  item belongs to 6.3.
- 1 conceptual question, `cq1` (fs-id3119404, the rotational quantities
  analogous to distance and velocity), Understand, with an AI-written
  suggested approach, citing `linear-angular`.
- 5 problems keyed and kept: `p1` (fs-id3004274, the trailer odometer, 723
  km), `p3` (fs-id1921627, the worn tires, $5 \times 10^7$ rotations), `p5`
  (fs-id2979194, the pitcher's forearm, 117 rad/s), `p7` (fs-id2678694, the
  truck's tires, 76.2 rad/s and 728 rev/min, a two-part answer) and `p8`
  (fs-id1429548, the Integrated Concepts kick, 33.3 rad/s, 500 N and 40.8 m,
  a three-part answer).
- 4 problems left out, having no answer in the book's key: 2 (fs-id1004074,
  the microwave oven), 4 (fs-id1524972, Earth's period and surface speed), 6
  (fs-id954942, the lacrosse ball) and the Construct Your Own Problem item
  (fs-id2578682, the rotating amusement park cylinder).
- `p8` reaches forward: its part (b) asks for the average force on the
  football, which is Newton's second law from Chapter 4, and its part (c) asks
  for the range, which is 3.4's. Its first part is the section's own and the
  whole item is keyed, so it stays where the book prints it, tagged with
  `newtons-second-law` and `range` at a weight of 2 beside the full value for
  `linear-angular-velocity`, and `exercise_notes` says which parts lean
  elsewhere.
- No generated questions: every node of the section has a book exercise that
  turns on it.
- Weights: `p1` and `p3` give `arc-length` the full value, `radian` 2 (the
  revolutions have to be turned into an arc) and `rotation-angle` 1; `p5`
  gives `linear-angular-velocity` the full value and `angular-velocity` 2;
  `p7` gives `linear-angular-velocity` the full value, `angular-velocity` 2
  and `radian` 2 (the second part is a conversion to revolutions per minute);
  `cq1` gives `angular-velocity` and `rotation-angle` the full value and
  `arc-length` 2.

## Views

- Formulas: the seven equations of the section already in `chapter.json`, the
  five boxed or named ones important and the two derivation steps not.
- Definitions: the six variables of the section; the six glossary terms.
- Concept map: the six nodes above with their edges into 2.1, 2.3, 3.4 and
  4.2.

## Colour

The page binds position, velocity, angular rate and time. The radius of
curvature $\kr$ and the arc length $\kds$ are positions and are carried on
three of the four sims' sliders; the car's speed $\kv$ and the flies' speed
are velocities; the angular velocity $\kw$ is the angular rate the book
declared for 16.6, drawn as the curl round every turning thing; and the clock
of `sim-omega` is a time, which is also the axis its graph runs along. The
rotation angle $\Delta\theta$, the count of revolutions $N$ and the inner
radius label $r_1$ stay in ink: an angle and a count are untyped, and $r_1$ is
drawn in the position hue through its slider class while the book's symbol
$r_1$ belongs to 6.6.

## Wanted at chapter level

- variables `Δθ` → 6.1-rotation-angle
- variables `Δs` → 6.1-rotation-angle
- variables `r_curv` → 6.1-rotation-angle
- variables `ω` → 6.1-angular-velocity
- variables `Δt` → 6.1-angular-velocity
- variables `v` → 6.1-linear-angular
- equations `eq-rotation-angle` → 6.1-rotation-angle
- equations `eq-one-revolution` → 6.1-radians
- equations `eq-radian-revolution` → 6.1-radians
- equations `eq-radian-degree` → 6.1-radians
- equations `eq-omega` → 6.1-angular-velocity
- equations `eq-v-arc` → 6.1-linear-angular
- equations `eq-v-romega` → 6.1-linear-angular
- The glossary carries `pit` under 6.1 but the chapter's `variables` table has
  no row for it and none is wanted; the term is defined in the text and the
  definitions view reads it from the glossary, so nothing is missing.
- The chapter introduction defines **uniform circular motion** and no
  section's glossary carries the term, which the chapter exploration already
  noted. 6.1 states it in its summary and introduces the concept node, so a
  glossary row `{section: "6.1", term: "uniform circular motion", definition:
  "motion in a circle at constant speed"}` would give the definitions view the
  term. Left for the chapter pass, since a section may not write
  `chapter.json`.
