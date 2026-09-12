# Plan: 6.4 Fictitious Forces and Non-inertial Frames: The Coriolis Force (m42142)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-11
without a review stop, on Chen's instruction to finish the book in one job.

The qualitative section of Chapter 6. Nine paragraphs, no equation, no
worked example, no Check Your Understanding box and no problem set; five
book figures, four of them sketches and one a composite of two NASA
satellite photographs with three diagrams; four glossary terms, which are
the section's four concept nodes; six conceptual questions, none of them
keyed. The chapter's PhET links sit in 6.1, 6.2 and 6.3, so this section
drops none. One page (rule 11).

## Sub-concepts (page headers)

The book prints no headers of its own here, only the run of the argument:
the jet and the car, the merry-go-round and the centrifuge, the ball slid
across the boards, Earth's rotation and the weather, and the closing
judgement on which frame to use. Page structure, one block per idea:

1. `frames` **Fictitious forces and the frame you measure in** (book: the
   opening question about the jet, the car, the merry-go-round and the
   tropical cyclone; the jet on the runway; the tight right turn; Figure
   6.12; the paragraph that names the inertial frame, the non-inertial
   frame of reference and the fictitious force). Introduces
   `non-inertial-frame` and `fictitious-force`; reinforces Chapter 4's
   `inertial-frame` and uses `newtons-first-law`. The chapter's variable
   $\kw$ is not named in this span.
2. `centrifugal` **The centrifugal force on a rotating frame** (book: the
   mental ride on the merry-go-round, which names the centrifugal force;
   Figure 6.13 + 6.15; the centrifuge paragraph; Figure 6.14). Introduces
   `centrifugal-force`; uses `fictitious-force`, `centripetal-force`,
   `inertia` and `centripetal-acceleration`. $\kw$ anchors here.
3. `coriolis` **The Coriolis force** (book: the ball slid directly away
   from the centre of the merry-go-round, its straight path over the
   ground and its curved trail on the boards). Introduces
   `coriolis-force`; uses `fictitious-force` and `inertia`. The
   references to Figure 6.15 in this span and the next link to the
   folded figure in `centrifugal`.
4. `weather` **Earth's rotation and the weather** (book: Earth seen from
   above the North Pole, the deflection to the right in the northern
   hemisphere and to the left in the southern; hurricanes and tropical
   cyclones; the winds flowing into a low and away from a high; Figure
   6.16; the Sim of the two hemispheres). Reinforces `coriolis-force`
   and uses `uniform-circular-motion`.
5. `which-frame` **Which frame to describe nature in** (book: the closing
   paragraph, that inertia and the rotation of the system underneath
   explain the path just as well, and that a view in an inertial frame is
   the simplest and truest). Reinforces `fictitious-force` and
   `inertial-frame`.

Figure 6.16 is the one figure moved from where the CNXML prints it. The
book sets it after the closing paragraph and points at it two paragraphs
earlier; on a page that does not turn, it is set where the prose points
at it, at the end of `weather`, and the closing paragraph then ends the
section as the book ends it.

The link to Dynamics: Newton's Laws of Motion is plain text, as the
chapter config asks while Chapter 4 is unbuilt. The learning objectives,
the section summary and the four glossary terms come out of the running
text into the tables and the views.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| non-inertial-frame | idea | frames | the car accelerated to the side and the rotating merry-go-round; the glossary; the Sun's frame question |
| fictitious-force | idea | frames | the jet on the runway, the right turn, Figure 6.12; the washing-machine and barrel-ride questions |
| centrifugal-force | idea | centrifugal | the merry-go-round ride and the centrifuge, Figures 6.13 and 6.14; the washing-machine and barrel-ride questions |
| coriolis-force | idea | coriolis | the ball's two paths in Figure 6.15, the winds of Figure 6.16; the draining-sink question |

The section introduces no frame of its own to stand against the
non-inertial one: `inertial-frame` is Chapter 4's node, defined in 4.5,
and this section reinforces it where it says that Earth is very nearly an
inertial frame and again where it concludes that the inertial view is the
simplest and truest. The other concepts the coverage marks as used are
`newtons-first-law` and `inertia` (4.2), `centripetal-force` (6.3),
`centripetal-acceleration` (6.2) and `uniform-circular-motion` (6.1).

## Figures

id · replaces · concepts · what moves, or still and why · sliders ·
headline · graph · 3D

1. `sim-turn` · replaces Figure 6.12 (a) and (b), the driver forced to
   the left and the real force to the right · fictitious-force,
   non-inertial-frame · **moves**: the idea has a time in it, since the
   car travels round the bend while the driver keeps going straight, so
   the figure runs one turn per loop and carries the transport. Two
   panels on one clock: on the right, seen from Earth, the car follows a
   bend of radius $\kr$ and a real force points from the car toward the
   centre of the bend while the driver's own straight line is drawn
   dashed from where she started; on the left, seen from inside the car,
   the car stands still and the driver slides toward the left-hand door
   under a fictitious force of the same size · the car's speed $\kv$
   (5 to 30 m/s, default 15, velocity) and the radius of the bend $\kr$
   (10 to 80 m, default 25, position) · "the car has turned 48° to the
   right, and the driver has gone 21 m in a straight line" · none: the
   two views are the picture · no. Readout: the turn so far in the
   book's terms, with a second line saying that nothing real pushes the
   driver to the left. Draws position, velocity, force.
2. `sim-merry` · replaces Figure 6.13 and folds Figure 6.15, which draw
   the same merry-go-round twice, once with the rider and once with the
   ball (rule 14; the chapter config asks for the fold) ·
   centrifugal-force, coriolis-force, fictitious-force ·
   **moves**: the boards turn and the ball crosses them, so the figure
   runs one crossing per loop and carries the transport with its
   scrubber. Two panels on one clock, the book's (a) and (b) made live:
   on the left, from the ground, the boards turn under a rider who is
   held on his circle by a real force toward the centre, an unshaded
   rider leaves along the tangent with no net force on him, and the ball
   slid from the middle runs dead straight to the rim; on the right, on
   the boards, the rider stands still under an outward fictitious force
   and the ball's trail in the dust curves to the right of the line to
   B · the angular velocity $\kw$ (0.3 to 2.0 rad/s, default 1.0,
   angular rate), the rider's radius $\kr$ (0.6 to 2.8 m, default 2.2,
   position) and the ball's speed $\kv$ (1.0 to 6.0 m/s, default 3.0,
   velocity) · "in the 1.00 s the ball takes to cross, the boards turn
   57°, so its trail on them bends that far to the right" · none: the
   two discs are the picture · no. Readout: the crossing time and the
   angle the boards turn in it, with a second line saying that nothing
   pushes the ball sideways. Draws angular rate, position, velocity,
   force, time.
3. `sim-centrifuge` · replaces Figure 6.14, the test tube in a
   centrifuge · centrifugal-force, centripetal-acceleration ·
   **still**: what the idea says is that the tube is forced round a
   circle while the particle's inertia carries it along the tangent, and
   what changes as the reader drags is the size of that effect, not a
   position that evolves. A rotor at 200 rad/s turns thirty-two times a
   second, which no animation can show honestly, and a rotor slowed for
   the picture would be a promise the figure cannot keep, so it registers
   no cycle and takes no transport. Two panels: from the ground, the
   rotor from above with the tube at radius $\kr$, the tangent the
   particle's inertia would carry it along drawn dashed, and the real
   force from the tube wall pointing at the axis; in the tube's own
   frame, the tube upright with its particles pressed to the outer end
   under a fictitious centrifugal force · the angular velocity $\kw$ (20
   to 400 rad/s, default 200, angular rate) and the radius $\kr$ (0.05 to
   0.30 m, default 0.15, position) · "at 200 rad/s and 0.150 m the
   contents of the tube are accelerated at 6.0 × 10³ m/s², which is 612
   times the acceleration of gravity" · none · no. Readout:
   $\kac = \kr\kw^2$ with the numbers and the same acceleration in
   multiples of $\kg$, which is the size of the effect the text says
   grows with the angular velocity. Draws angular rate, position,
   acceleration, force.
4. `fig-cyclones` · keeps Figure 6.16 · coriolis-force · a photograph
   row: the image is one file holding two NASA satellite photographs of
   cyclones turning opposite ways and the three diagrams of the winds
   round a low and a high. The text points at it, and the photographs
   show the thing the passage is about, so it is kept whole with the
   book's caption and its two credit clauses (chapter config). Width 475.
5. `sim-cyclone` · replaces nothing; a Sim (rule 15, built) ·
   coriolis-force · **moves**: parcels of air travel toward the low while
   the clock runs, so the figure runs one approach per loop and carries
   the transport. Two panels side by side, the northern hemisphere and
   the southern: a low-pressure centre in each, four parcels released
   from the rim of a weather system of radius $\kr$ at speed $\kv$, each
   turned to the right of its motion in the north and to the left in the
   south, with the straight path they would take without the deflection
   drawn faint beside them · the radius of the system $\kr$ (50 to 2,000
   km, default 1,000, position) and the wind speed $\kv$ (5 to 40 m/s,
   default 20, velocity) · "the air takes 14 hours to reach the centre of
   a 1,000 km low, and in that time Earth's rotation turns it through
   more than a right angle, so it circles the low rather than blowing
   into it" · none: the two panels are the picture · no. Readout: the
   crossing time $\kt = \kr/\kv$ and the turning it gives at the rate of
   about 10⁻⁴ radian a second at which Earth's rotation turns a moving
   parcel, with a second line saying why the effect is nothing over a
   street and everything over a thousand kilometres. Draws position,
   velocity, time.

Every sketch the book prints is replaced. The one photographic figure is
kept. No figure of this section serves an exercise: the section prints no
problem set, and its conceptual questions name no figure.

Extra simulations (rule 15), considered:

- **The two hemispheres round a low** (`sim-cyclone`): **built**. The
  kept Figure 6.16 draws the deflection as four green tick marks on four
  straight arrows and then, in a separate panel, the finished
  counterclockwise circle; what it cannot show is the one becoming the
  other, or why the same rotation gives the opposite sense below the
  equator. Dragging the size of the system from 50 km to 2,000 km walks
  the reader from the book's sentence that the effect is usually
  negligible to its sentence that it is substantial for large-scale
  motions, which no still picture of a finished hurricane says.
- A ball thrown between two children on the merry-go-round, so that the
  Coriolis curve is seen for a motion that is not radial. Left: it
  repeats what the ball slid outward already shows, and the book says
  nothing about the general case.
- Foucault's pendulum turning under the sky. Left: the book does not
  mention it, and the figure would teach a result the section does not
  carry.
- The jet on the runway with the passenger pressed into the seat, the
  section's first example. Left: it is the same idea as the car turning,
  in one dimension instead of two, and `sim-turn` already draws the
  fictitious force beside the real one.

## Exercises

- No Check Your Understanding box and no problem set: the section's only
  exercises are its six conceptual questions, and the book keys none of
  them, so every kept item is an open answer with an AI-marked suggested
  approach (rule 13).
- 4 conceptual questions kept, `cq1` to `cq4`, in the book's order among
  the items that stay: `cq1` (fs-id2405118, the draining sink, Understand,
  citing `weather`), `cq2` (fs-id2453606, the washing machine's spin
  cycle, Understand, citing `centrifugal`), `cq3` (fs-id1420070, the
  barrel ride whose floor drops away, Analyze, citing `centrifugal`) and
  `cq4` (fs-id3121794, why the Sun's frame is not exactly inertial,
  Understand, citing `frames`).
- `cq4` is set inline after `frames`, where the reader has just met the
  inertial and the non-inertial frame and the question is a two-line
  check on the difference; the other three go to the Exercises document.
- 2 conceptual questions left out: `fs-id3180041` (action at a distance)
  and `fs-id3042736` (Anna and Tom on whether a satellite in orbit is in
  free fall) are word for word 6.5's `fs-id959677` and `fs-id3122954`.
  Gravity is introduced in 6.5, so under rule 12 the pair is kept there
  and left out here, and both sections' `exercise_notes` say so.
- Nothing is taken from another section. 6.3's conceptual question
  `fs-id3035023`, on why you feel thrown away from the centre as a car
  goes round a curve, turns on the fictitious force this section
  introduces, but 6.3 introduces the centripetal force it is answered
  with and the chapter config places it there; it is named below for the
  chapter pass to move if it would rather.
- No generated questions: every one of the four nodes is tested. `cq2`
  and `cq3` test `centrifugal-force` and `fictitious-force`, `cq1` tests
  `coriolis-force`, and `cq4` tests `non-inertial-frame`.
- Weights: `cq1` gives `coriolis-force` its full value and
  `non-inertial-frame` weight 1, since the question turns on the
  direction of the deflection and only names the frame; `cq2` gives
  `centrifugal-force` and `fictitious-force` their full value and
  Chapter 4's `inertia` weight 1; `cq3` gives `fictitious-force` and
  `centrifugal-force` their full value and `centripetal-force` weight 2,
  since the real forces the question asks for are 6.3's; `cq4` gives
  `non-inertial-frame` its full value and `inertial-frame` weight 1.

## Views

- Formulas: none. The section states no equation, and `chapter.json`
  carries none for it. The two equations the sims read out,
  $\kac = \kr\kw^2$ and $\kt = \kr/\kv$, are 6.2's and 6.1's and are
  stated there.
- Definitions: the one variable of the section, $\kw$; the four glossary
  terms.
- Concept map: the four nodes above with their edges into 4.2, 4.5, 6.1
  and 6.3.

## Colour

The page binds angular rate, position, velocity, force, acceleration and
time. The angular velocity of the turning frame is on a slider in three
of the four sims; the radius of the bend, of the rider's circle, of the
tube and of the weather system is a position on a slider in all four; the
car's speed, the ball's speed and the wind speed are velocities on
sliders; every force drawn, real or fictitious, is in the force hue, since
a fictitious force is a force in the accounting of the frame that invents
it; the centrifuge reads out an acceleration against $\kg$; and the
merry-go-round and the cyclone read out a time. The angle the frame has
turned through, the masses, the labels A, B and the hemispheres stay in
ink.

## Wanted at chapter level

- variables `ω` → 6.4-centrifugal
- No equation row belongs to this section, so no equation anchor is
  wanted.
- 6.3's conceptual question `fs-id3035023` ("If centripetal force is
  directed toward the center, why do you feel that you are 'thrown' away
  from the center as a car goes around a curve?") is answered with this
  section's `fictitious-force` and `centrifugal-force`. It is left with
  6.3, which the chapter config places it in and which introduces the
  centripetal force the answer starts from; the chapter pass may move it
  here with `source_section: "6.3"` instead.
- The chapter introduction defines **uniform circular motion** and no
  section's glossary carries it, as `exploration.md` notes. Nothing in
  this section can fix that, since a glossary row names a section.
