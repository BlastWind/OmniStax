# Plan: 6.2 Centripetal Acceleration (m42084)

Source: `source.md` (converted from CNXML by `tools/cnxml2md.py`). Status:
built 2026-09-11 without a review stop, on Chen's instruction to finish the
book in one job; the per-section stop of rule 2 and the plan review of rule
5 are replaced by this file, written before the section was built and left
for review after, as Chapters 1 to 3 did it.

The section that turns a curve into an acceleration. Two sketch figures and
no photograph, two worked examples, one conceptual question, thirteen
problems of which eight are keyed, no Check Your Understanding box, and one
PhET note, which the chapter config drops. One page (rule 11).

## Sub-concepts (page headers)

The book prints no headers of its own here, only the run of the argument:
the direction of the acceleration, its magnitude, the centrifuge, two
examples and the look ahead to the force. Page structure, one block per
idea:

1. `direction` **The direction of the centripetal acceleration** (book: the
   opening paragraph on turning a corner in a car, and the paragraph that
   reads Figure 6.7 and names the centripetal acceleration). Figure 6.7
   stands here. The variables $\kac$ and $\kdv$ anchor here.
2. `magnitude` **The magnitude of the centripetal acceleration** (book: the
   two similar triangles, $\kdv/\kv = \kds/\kr$, the step to
   $\kdv = (\kv/\kr)\kds$, the division by $\kdt$, the result
   $\kac = \kv^2/\kr$, the remark on the square of the speed, and the second
   form $\kac = \kr\kw^2$). The variables $\kv$, $\kvone$, $\kvtwo$, $\kds$,
   $\kr$ and $\kw$ and all four equations anchor here.
3. `centrifuge` **The centrifuge** (book: the paragraph on what a centrifuge
   separates, how centrifuges are rated against $\kg$, and the human
   centrifuge). $\kg$ anchors here.
4. `examples` **Comparing a centripetal acceleration with gravity** (book:
   Example 6.2, the car on the highway curve, `ex-car`; Figure 6.8, placed
   between the two examples as the book places it; Example 6.3, the
   ultracentrifuge, `ex-ultracentrifuge`).
5. `net-force` **The force that causes the acceleration** (book: the closing
   paragraph on the net external force and the look ahead to Centripetal
   Force).

The examples are numbered as the book numbers them: Chapter 6 prints one
example in 6.1, so this section's two are Example 6.2 and Example 6.3. The
cross reference to Centripetal Force is plain text, as the chapter config
says. `{term:…}` markers become `<strong>`; `[ref:…]` becomes the book's own
wording ("Figure 6.7", "Figure 6.8(a)", "Figure 6.8b"), which the build
links to the rows that carry those numbers.

Learning objectives, the section summary and the two glossary terms come out
of the running text into the tables and the views. The chapter has no Check
Your Understanding box, so nothing is set inline; the conceptual question and
the problems go to the Exercises document.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| centripetal-acceleration | idea | direction | Figure 6.7; the glossary term; the conceptual question |
| centripetal-acceleration-magnitude | result, eq-ac | magnitude | the derivation; both examples; problems 1, 5, 7, 11, 12, 13 |
| centrifuge | idea | centrifuge | the centrifuge paragraph; Figure 6.8(b); Example 6.3; the glossary term ultracentrifuge |
| acceleration-in-multiples-of-g | skill | centrifuge | the rating of centrifuges against $\kg$; the discussion of both examples; problems 1, 5, 7 |

The section leans on `uniform-circular-motion`, `angular-velocity`,
`linear-angular-velocity`, `arc-length` and `rotation-angle` (6.1),
`instantaneous-acceleration` (2.4), `vector-subtraction` (3.2),
`acceleration-due-to-gravity` (2.7), `unit-conversion` (1.2) and
`newtons-second-law` (4.3), which the coverage rows mark as used where the
text uses them.

## Figures

id · replaces · concepts · what moves · sliders · headline · graph · 3D

1. `sim-triangles` · replaces Figure 6.7 (the two velocities and their
   difference) · centripetal-acceleration, centripetal-acceleration-magnitude
   · **moves**: the object runs once round the circle each loop, and the
   velocity arrow turns with it, which is the one thing the section opens by
   saying happens constantly; a hollow marker trails it by the angle
   $\Delta\theta$, and the two radii, the arc $\kds$ and the chord are drawn
   between them, with the velocity triangle $\kvone$, $\kvtwo$, $\kdv$ beside
   the circle and a short $\kac$ arrow drawn from the midpoint of the arc
   toward the centre · radius $\kr$ (0.5 to 4.0 m, default 2.0, position),
   speed $\kv$ (1.0 to 10.0 m/s, default 5.0, velocity), separation
   $\Delta\theta$ (5º to 90º, default 40º, ink, since an angle is untyped) ·
   "Δθ = 40º · Δv = 3.42 m/s and it misses the radius by 20.0º; shrink Δθ and
   it swings round to point straight at the centre" · none: the velocity
   triangle beside the circle is the second half of the drawing, and the
   circle is a square scene that leaves the width free · no. Readout:
   $\kdv/\kv = \kds/\kr$ with the numbers; small line on
   $\kac = \kdv/\kdt$ and on the angle the change of velocity makes with the
   radius. Draws position, velocity, acceleration.
2. `sim-curve` · replaces Figure 6.8 (the car on the circular path and the
   centrifuge) · centripetal-acceleration-magnitude,
   acceleration-in-multiples-of-g, centripetal-acceleration · **moves**: the
   car drives once round the curve each loop with its velocity drawn along
   the tangent and its centripetal acceleration drawn toward the centre, the
   two arrows staying perpendicular whatever the sliders say · speed $\kv$ (5
   to 40 m/s, default 25.0, velocity), radius $\kr$ (50 to 800 m, default
   500, position) · "v = 25.0 m/s round a curve of radius 500 m · a_c = 1.25
   m/s², which is 0.128 g" · graph beside the circular scene: $\kac$ against
   $\kv$ for the radius set, with the current point filled and a hollow point
   at half the speed, which sits at one quarter of the acceleration · no.
   Readout: $\kac = \kv^2/\kr$ with the numbers; small line on the ratio
   $\kac/\kg$. Draws position, velocity, acceleration.
   Figure 6.8 prints its two panels inside one image under one number, so the
   row carries that one original and does not fold (the chapter's exploration
   settled this). The interactive figure draws panel (a), the highway curve,
   with the numbers of Example 6.2; panel (b), the ultracentrifuge, wants a
   radius ten thousand times smaller and an angular velocity rather than a
   speed, so it cannot share these sliders and is drawn by the sim below
   instead.
3. `sim-centrifuge` · Sim, replacing nothing in the book · centrifuge,
   acceleration-in-multiples-of-g, centripetal-acceleration-magnitude ·
   **still**: a rotor at 7.5 × 10⁴ rev/min turns more than a thousand times a
   second, and no drawing can show that turning honestly, so the figure
   answers its two sliders and nothing else; it registers no cycle and gets no
   transport (rule 14) · radius $\kr$ (1.0 to 15.0 cm, default 7.50, position),
   angular velocity $\kw$ (0.5 to 9.0 × 10⁴ rev/min, default 7.50, angular
   rate) · "a point 7.50 cm from the axis at 7.50 × 10⁴ rev/min is
   accelerated at 4.63 × 10⁶ m/s², which is 472,000 g" · graph beside the
   rotor: $\kac/\kg$ against the angular velocity for the radius set, the
   parabola through the current point · no. Readout: $\kac = \kr\kw^2$ with
   the numbers; small line on the conversion from rev/min to rad/s. Draws
   position, angular rate, acceleration.

Both of the section's book figures are sketches and both are replaced; the
section prints no photograph, so nothing is kept or dropped. No problem of
the section refers to a figure, so no figure is copied over to serve an
exercise.

Extra simulations (rule 15), thought about, judged, and what became of them:

- **The ultracentrifuge of Example 6.3.** It opens the second form of the
  result, $\kac = \kr\kw^2$, which no other figure of the section can reach,
  and it puts the habit of quoting an acceleration in multiples of $\kg$ on a
  scale where the ratio runs to hundreds of thousands. **Built**, as
  `sim-centrifuge`.
- A pair of cars on a sharp curve and a gentle one at the same speed, side by
  side. The radius slider of `sim-curve` and the shape of its graph already
  say that a tighter turn asks more, and a second car would only animate it.
  Left.
- The circular motion projected onto a line so that the acceleration appears
  as the second derivative of the projection. That is 16.6's figure and 16.6's
  idea, not this section's. Left.
- A graph of $\kac$ against the radius at a set speed, beside the graph
  against speed. The text says the speed enters squared and the radius
  divides, and one graph plus a radius slider carries both. Left.

## Exercises

- No Check Your Understanding boxes, so nothing is set inline; every item goes
  to the Exercises document.
- 1 conceptual question, `cq1` (fs-id1348631, whether a centripetal
  acceleration can change the speed of circular motion), Understand, with an
  AI-written suggested approach, citing `direction`.
- 8 problems keyed and kept: `p1` (the fairground ride at 1.50 g, number),
  `p3` (the distance Earth has travelled since its birth, number), `p5` (the
  workshop grindstone, multi), `p7` (the Olympic skaters, multi), `p9` (the
  linear speeds of an ultracentrifuge and of Earth, multi), `p11` (the jet
  tyres at takeoff, multi), `p12` (Integrated Concepts, the Viking ship ride,
  multi), `p13` (Unreasonable Results, the child on the swing, multi).
- 5 problems left out, having no answer in the book's key: 2 (fs-id2936845,
  the runner on the curved track), 4 (fs-id2688068, the fighter plane's
  propeller), 6 (fs-id1474903, the helicopter blade), 8 (fs-id3257966, the
  satellite 300 km up) and 10 (fs-id2603647, the rotating space station).
- `fs-id3257966` is left out for a second reason as well: what it asks for is
  the acceleration due to gravity at altitude, which needs $g = GM/r^2$ from
  6.5, and it has no key, so it is named in `notes` and in `exercise_notes`
  rather than held for that section.
- Nothing is taken from another section. 6.1's problems are all on the
  rotation angle and the angular velocity, and 6.3's conceptual questions and
  problems all turn on the centripetal force, which 6.3 introduces, so none of
  them belongs here.
- `p3` is the one item of the section whose subject is 6.1's rather than
  6.2's: it multiplies an orbital radius by a rotation angle of
  $2\pi \times 4 \times 10^9$ to get an arc length. The book prints it here,
  the reader has already met arc length in 6.1, and it is keyed, so it is kept
  where the book prints it and tagged with 6.1's `arc-length` and
  `rotation-angle`. The chapter pass may prefer to move it to 6.1 with
  `source_section: "6.2"`; the note below says so.
- The book's key prints the accelerations of `p7`(b), `p7`(c) and `p12`(a) in
  m/s rather than m/s². The numbers are the book's and are kept as the book
  gives them, with the unit the question asks for; `exercise_notes` says so.
- No generated questions: every concept node of the section has a book
  exercise that tests it.
- Weights: `cq1` gives `centripetal-acceleration-magnitude` weight 1, since
  the question turns on the direction of the acceleration and only mentions
  its size; `p3` gives `rotation-angle` weight 1 beside the full value for
  `arc-length`; `p9` gives `centrifuge` weight 1, since the item only borrows
  the ultracentrifuge as a setting; `p11`, `p12` and `p13` give Chapter 4's
  `newtons-second-law`, `weight` and `free-body-diagram` weight 1, since their
  first part is this section's and the rest leans on Newton's laws.

## Views

- Formulas: the four equations of the section already in `chapter.json`,
  $\kac = \kv^2/\kr$ and $\kac = \kr\kw^2$ important and the two derivation
  steps not.
- Definitions: the nine variables of the section; the two glossary terms,
  centripetal acceleration and ultracentrifuge.
- Concept map: the four nodes above with their edges into 2.4, 2.7, 3.2 and
  6.1.

## Colour

The page binds position, velocity, acceleration and angular rate. Every
figure carries a radius on a slider and draws it in the position hue,
`sim-triangles` and `sim-curve` carry a speed and draw the velocity arrows,
all three draw the centripetal acceleration toward the centre and state it in
their readouts, and `sim-centrifuge` carries the angular velocity. The
rotation angle $\Delta\theta$, the separation of the two points, the masses
of the problems and the counts of revolutions stay in ink.

## Wanted at chapter level

- variables `a_c` (6.2) → 6.2-direction
- variables `Δv` (6.2) → 6.2-direction
- variables `v` (6.2) → 6.2-magnitude
- variables `v_1` (6.2) → 6.2-magnitude
- variables `v_2` (6.2) → 6.2-magnitude
- variables `Δs` (6.2) → 6.2-magnitude
- variables `r_curv` (6.2) → 6.2-magnitude
- variables `ω` (6.2) → 6.2-magnitude
- variables `g` (6.2) → 6.2-centrifuge
- equations `eq-similar-triangles` → 6.2-magnitude
- equations `eq-dv-step` → 6.2-magnitude
- equations `eq-ac` → 6.2-magnitude
- equations `eq-ac-omega` → 6.2-magnitude
- Problem `p3` (fs-id3116567, the distance Earth has travelled) tests 6.1's
  arc length rather than anything this section introduces. It is kept here,
  where the book prints it; if the chapter pass would rather have it on 6.1's
  page, move the row to `ch06/6.1/section.json` with
  `source_section: "6.2"` and say so in both sections' `exercise_notes`.

### Decided in the chapter pass

- Every anchor above is written on its variable and equation row in
  `chapter.json`.
- Problem `p3` (fs-id3116567) is moved to 6.1, as the plan offered. It is
  tagged with `arc-length` and `rotation-angle` and its hint works the arc
  length, all of which 6.1 introduces, so rule 12 puts it there rather than
  where the book prints it. It carries `source_section: "6.2"` on 6.1's page
  and is gone from this one, and both sections' `exercise_notes` say so.
