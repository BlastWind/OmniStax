# Plan: 4.3 Newton’s Second Law of Motion: Concept of a System (m42073)

Source: `source.md` (converted from CNXML). Status: built today, 2026-09-11,
without a review stop, on Chen’s instruction to finish the book in one job.

The section where the chapter stops naming forces and starts calculating with
them. Four sketch figures (4.5 to 4.8), no photograph, four boxed notes
(Newton’s Second Law of Motion, Weight, Common Misconceptions: Mass vs.
Weight, Take-Home Experiment: Mass and Weight), two worked examples, no Check
Your Understanding box, ten conceptual questions and fourteen problems, six of
them keyed. Three items come here from other sections under rule 12. One page
(rule 11).

## Sub-concepts (page headers)

The book’s own headers are Units of Force and Weight and the Gravitational
Force; the rest of the run is untitled. Page structure, one block per idea:

1. `system` **The system of interest and its external forces** (book: the
   opening paragraph on the second law; a change in motion is a change in
   velocity, so a net external force causes acceleration; what an external
   force is, what an internal force is, and why the boundaries of the system
   have to be drawn first; Figure 4.5). The variable $\ka$ anchors here.
2. `net-force` **The net external force, and the two proportionalities**
   (book: acceleration is directly proportional to the net external force,
   the vertical forces $\kwgt$ and $\kN$ that cancel, the definition of
   friction, the proportionality $\ka \propto \kFnet$ and the definition of
   the net external force as a vector sum found head to tail or by
   components; then acceleration is inversely proportional to mass, Figure
   4.6, and $\ka \propto 1/m$). $\kFnet$, $\kff$, $\kN$ and $m$ anchor here,
   with eq-a-prop-fnet and eq-a-prop-mass.
3. `second-law` **Newton’s second law of motion** (book: combining the two
   proportionalities; the boxed law in its three forms; the paragraph on the
   law as a cause and effect relationship verified by experiment).
   eq-newton2-a, eq-newton2 and eq-newton2-mag anchor here.
4. `newton` **Units of force** (book: the section’s own header; the newton
   defined from $\kFnet = m\ka$; the pound). eq-newton-unit anchors here.
5. `weight` **Weight and the gravitational force** (book: the section’s own
   header; the weight of a falling object, the boxed Weight note with $\kwgt
   = m\kg$ and the 1.0 kg object, free-fall, the variation of $\kg$ over the
   Earth and on the Moon, and the broadest definition of weight). $\kwgt$,
   $\kg$ and eq-weight anchor here.
6. `mass-weight` **Mass against weight** (book: the paragraph that sets the
   two apart, the Common Misconceptions box and the Take-Home Experiment on
   bathroom scales).
7. `mower` **Finding the acceleration from the net force** (book: Example
   4.1, the lawn mower, with Figure 4.7 inside it). The example is
   `ex-mower`.
8. `sled` **Finding the force from the acceleration** (book: Example 4.2, the
   rocket sled, with Figure 4.8 inside it, and the closing paragraph on the
   second law as more than a definition). The example is `ex-sled`, and
   $\kTf$ anchors here.

The cross reference to Two-Dimensional Kinematics is plain text, since the
app links only figure numbers. The book’s bold vectors $\mathbf{a}$ and
$\mathbf{F}_{\text{net}}$ are set bold in ink where the book sets them bold
and take the `\k` macros where it writes their magnitudes.

Learning objectives, the section summary and the glossary come out of the
running text into the views. Two short conceptual questions are placed
inline, as the chapter config allows; everything else goes to the Exercises
document.

## Concept nodes (already in book.json)

| id | kind | introduced at | evidence |
|---|---|---|---|
| system-of-interest | skill | `system` | the definition of a system by its boundaries; Figure 4.5 worked both ways; cq3; p9 part (a) |
| net-external-force | idea | `net-force` | the definition and the vector sum; Figure 4.5(b); Example 4.2; p1, p3, ap1 |
| friction | idea | `net-force` | the definition of friction; Figure 4.5; Example 4.2; p7, p9 |
| newtons-second-law | result, eq-newton2 | `second-law` | the boxed law; Examples 4.1 and 4.2; p1, p3, p7, p9, p11, ct1 |
| newton-unit | idea, eq-newton-unit | `newton` | the definition of the newton; the unit substitution in Example 4.1; every problem set in newtons |
| weight | result, eq-weight | `weight` | the boxed derivation; 9.8 N on Earth and 1.7 N on the Moon; p11, p13, ap2 |
| mass-versus-weight | idea | `mass-weight` | the Common Misconceptions box and the Take-Home Experiment; p13; ap2 |

The section leans on `newtons-first-law` and `mass` (4.2), `external-force`
and `force` (4.1), `head-to-tail-method` (3.2), `analytical-vector-addition`
(3.3), `acceleration` (2.4), `acceleration-due-to-gravity` and `free-fall`
(2.7) and `fundamental-units` (1.2); the coverage rows mark each as used
where the text uses it.

## Figures

id · replaces or Sim · concepts · what moves or still · sliders · headline ·
graph · 3D

1. `sim-wagon` · replaces Figure 4.5 (a), (b) and (c) (the two children, the
   free-body diagram, and the adult who pushes harder) · system-of-interest,
   net-external-force, friction, newtons-second-law · **moves**: the wagon
   starts from rest and rolls to the right for four seconds while the arrows
   on it hold their lengths, so the reader sees a larger net force build
   speed faster; the idea has a time in it, so it loops and gets the
   scrubber · $\kFone$ (0 to 60 N, default 25.0, force), $\kFtwo$ (0 to 60 N,
   default 30.0, force), $\kff$ (0 to 40 N, default 12.0, force), $m$ (10 to
   60 kg, default 30.0, ink, since mass is untyped) · "t = 2.00 s · a net
   force of 43.0 N on 30.0 kg gives a = 1.43 m/s², and the wagon has reached
   2.87 m/s" · graph below right: $\kv$ against $\kt$, a straight line whose
   slope is the acceleration, with the moving point on it · no. The
   free-body diagram is drawn in its own panel below left, a dot with
   $\kFone$, $\kFtwo$ and $\kff$ along the horizontal and $\kwgt$ and $\kN$
   equal and opposite along the vertical, exactly as the book draws it.
   Readout: $\kFnet = \kFone + \kFtwo - \kff$ with the numbers, and
   $\ka = \kFnet/m$; small line on the vertical forces cancelling. Draws
   force, acceleration, velocity, time.
2. `sim-mass` · replaces Figure 4.6 (the basketball and the SUV) ·
   newtons-second-law, net-external-force · **still**: the two accelerations
   are thousands apart, so no shared strip could carry both, and the idea
   answers its sliders rather than a clock; the figure registers no cycle
   and gets no transport · $\kF$ (10 to 500 N, default 200, force), the mass
   of the ball (0.2 to 3.0 kg, default 0.624, ink), the mass of the SUV (800
   to 3000 kg, default 1800, ink) · "the same 200 N gives the 0.624 kg ball
   321 m/s² and the 1800 kg SUV 0.111 m/s²" · graph below: $\ka$ against $m$,
   both axes stepping by tens from 0.1 kg to 10,000 kg and from 0.01 to
   10,000 m/s², so the two bodies sit on one straight line and each is
   marked · no. The scenes above it are the player pushing the ball and the
   player pushing the SUV, with the same force arrow drawn the same length
   on each and the acceleration printed over each. Readout: $\ka = \kF/m$
   twice, once for each body; small line saying the force is the same and
   only the mass differs. Draws force, acceleration.
3. `sim-mower` · replaces Figure 4.7 (the lawn mower of Example 4.1) ·
   newtons-second-law, newton-unit · **moves**: the mower is pushed from rest
   across the lawn for three seconds under the net force, the velocity arrow
   growing as it goes and the distance covered bracketed beneath it; the idea
   has a time in it, so it loops and gets the scrubber · $\kFnet$ (10 to 120
   N, default 51.0, force), $m$ (5 to 60 kg, default 24.0, ink) · "t = 2.00 s
   · a net force of 51.0 N on 24.0 kg gives a = 2.13 m/s², so the mower has
   reached 4.25 m/s and gone 4.25 m" · none: the strip and its bracket carry
   the reading · no. Readout: $\ka = \kFnet/m$ with the units substituted,
   51.0 kg·m/s² over 24.0 kg, which is the step the example makes and the
   place the newton is defined; small line on the direction of the
   acceleration being the direction of the net force. Draws force,
   acceleration, velocity, position.
4. `sim-sled` · replaces Figure 4.8 (the rocket sled of Example 4.2) ·
   newtons-second-law, net-external-force, friction · **moves**: the sled
   runs down its rail for two seconds with the burning rockets drawn firing;
   the idea has a time in it, so it loops and gets the scrubber ·
   $\kTf$ (5,000 to 40,000 N, default 25,900, force),
   the number of rockets burning (1 to 4, default 4, ink, since it is a
   count), $\kff$ (0 to 2000 N, default 650, force); the mass is held at the
   example’s 2100 kg and stated in the headline · "t = 1.00 s · four thrusts
   of 2.59 × 10⁴ N less 650 N of friction give a = 49.0 m/s², and the sled is
   already at 49.0 m/s" · graph below right: $\ka$ against the number of
   rockets burning, four points on a line that does not pass through the
   origin, which is why one rocket does not give a quarter of the
   acceleration · no. The free-body diagram is drawn below left, the four
   thrusts to the right, friction to the left, $\kwgt$ and $\kN$ cancelling.
   Readout: $\kFnet = n\kTf - \kff = m\ka$ with the numbers; small line
   comparing the acceleration with one rocket and with four. The forces are
   drawn to one scale, except that no arrow is drawn shorter than a legible
   minimum, which is why the friction arrow is larger than scale, as the
   book’s own caption says of Figure 4.8. Draws force,
   acceleration, velocity.
5. `sim-weight` · **Sim**, replacing nothing in the book · weight,
   mass-versus-weight · **still**: the figure answers its sliders and nothing
   else, since weight has no time in it; a mass sits on a bathroom scale
   whose dial reads what the book says a scale reads, and a free-body diagram
   beneath the scene draws the weight down and the support of the scale up,
   equal and opposite, at a length that follows the gravity · $m$ (0.1 to
   100 kg, default 1.0, ink), $\kg$ (1.0 to 11.0 m/s², default 9.80,
   acceleration, with the Moon’s 1.625 and the Earth’s 9.80 both reachable
   on the slider) · "on Earth, where g = 9.80 m/s², a mass of 1.0 kg weighs
   9.80 N" · graph beside the upright scene: $\kwgt$ against $\kg$, a straight
   line through the origin with the Moon and the Earth marked on it · no.
   Readout: $\kwgt = m\kg$ with the numbers; small line on what the scale is
   calibrated to show. Draws force, acceleration.

Every book figure of the section is a sketch and is replaced. The section has
no photograph to keep or drop.

Figures that serve exercises, kept on the exercise cards as the book’s own
images rather than redrawn, since they sit inside the problems rather than
in the running text, as the five diagrams inside the exercises of 3.2
are: the rocket sled with one rocket burning (`Figure_04_03_05-1144.jpg`, on
p7), the rocket sled with the rockets off (`Figure_04_03_07-c153.jpg`, on
p11), the free-body diagram the book prints in the answer to the wagon
problem (`Figure_04_03_06.jpg`, inside p9’s solution), and, travelling with
the items taken from other sections, the racetrack and the two tracks to draw
on (`Figure_04_01_03.jpg` and `Figure_04_01_04.jpg`, on ap1, with the book’s
answer figure `Figure_04_01_05.jpg` inside its solution) and the graph the
book prints in the answer to the Critical Thinking item
(`OSX_CP2e_Figure_04_08Sol_CTQ01c.jpg`, inside ct1’s solution). All are copied
once into `media/ch04/`; `Figure_04_03_07-c153.jpg` serves two of the book’s
problems, but the other one (fs-id1995657, the sled decelerated at 196 m/s²)
has no keyed answer and is left out, so the one copy rides on one card. The
two bundle files with a space in their names are copied with an underscore,
as Chapter 2 copied one.

Extra simulations (rule 15), considered and judged:

- **The weight of a mass on Earth and on the Moon** (`sim-weight` above).
  The section states that a 1.0 kg mass weighs 9.8 N on Earth and about
  1.7 N on the Moon, sets mass against weight twice over, and prints no
  figure for any of it; a scale the reader can carry to another body shows
  the mass staying put while the weight changes, which no other figure of
  the page shows. **Built.**
- A free-fall sim in which the only force is the weight, so $\kFnet = \kwgt$
  and $\ka = \kg$: the falling object is 2.7’s picture and `sim-weight`
  already writes $\kwgt = m\kg$ in its readout. **Left.**
- A system boundary the reader drags around the wagon, the child or both, so
  that the list of external forces changes as the boundary moves: this is the
  section’s own skill, but the boundary that excludes the child needs the
  internal forces that 4.4 introduces, so anything drawn would run ahead of
  the book. **Left**, and the chapter’s `exploration.md` already holds a
  free-body diagram the reader builds for a later pass.

One built, two left. Of the five figures, three move and two are still
by the test of rule 14.

## Exercises

- No Check Your Understanding box in the section. Two short conceptual
  questions are placed inline where they plainly check the passage beside
  them: `cq6` (fs-id1449832, the net external force on a rock at the top of
  its trajectory) after `weight`, and `cq9` (fs-id3180550, what a constant
  nonzero force does to velocity and acceleration) after `second-law`.
- 10 conceptual questions, `cq1` to `cq10`, Understand, none keyed by the
  book, each with an AI-marked suggested approach and a `cite` to the
  passage it turns on.
- 6 problems keyed and kept: `p1` (fs-id2025052, the sprinter, 265 N), `p3`
  (fs-id1947422, the laundry cart, 13.3 m/s²), `p7` (fs-id2673239, one rocket
  burning, 12 m/s², with the book’s reason for part (b) in the solution),
  `p9` (fs-id2963161, two children pushing a wagon, the acceleration with
  12.0 N and with 15.0 N of friction, with the book’s free-body diagram in
  the solution), `p11` (fs-id3091858, the force the seat exerts on the
  passenger), `p13` (fs-id3244376, the astronaut on the Moon).
- 8 problems left out, having no answer in the book’s key: fs-id3046116 (the
  sprinter’s time), fs-id1829025 (the astronaut’s mass in orbit),
  fs-id2052918 (the force on the mower), fs-id1995657 (the sled decelerated
  at 196 m/s²), fs-id2409301 (the deceleration from 1000 km/h), fs-id2687795
  (the motorcycle), fs-id1849611 (the passenger under deceleration) and
  fs-id1418924 (the lunar module).
- 3 items taken from other sections under rule 12, each named in both
  sections’ `exercise_notes`:
  - `ap1` (fs-id1691415, `source_section` 4.1): the two cars on the
    racetrack, which asks for the direction of the net external force at
    points around the track. Net external force is this section’s, and the
    item is keyed, so it comes here with the book’s answer. Analyze; tagged
    `net-external-force` at full value and `newtons-first-law` at weight 2.
    Its curved sections anticipate the centripetal force of Chapter 6, and
    the book’s own answer argues the straight sections, so it stands as the
    book prints it.
  - `ap2` (fs-id1367314, `source_section` 4.5): the force of gravity on an
    arrow, which is $\kwgt = m\kg$ and nothing else. Unkeyed, so it is kept
    as an open item with its four options as the book prints them and an
    AI-marked suggested approach, as rule 13 and the 2.5 and 3.1 precedents
    do. Apply; tagged `weight` at full value and `mass-versus-weight` at
    weight 1.
  - `ct1` (exer-16012, `source_section` 4.8): the Critical Thinking item on
    two boxes pushed different distances, which turns on the second law and
    on $\kv^2 = \kvo^2 + 2\ka\kdx$ rather than on the four basic forces. It
    is keyed, and the book’s graph travels with the answer. Analyze, tagged
    `Critical Thinking`; `newtons-second-law` at full value,
    `net-external-force` at weight 2 and `v-squared` at weight 2.
- No generated questions: every node of the section has a book exercise.
- Weights (rule 20): `cq1`, `cq2`, `cq4`, `cq5` and `cq8` give
  `newtons-first-law` weight 1, since they lean on the second law and only
  name the first; `p1` and `p3` are the second law alone; `p7` gives
  `friction` weight 2 beside the full value for `newtons-second-law`, since
  part (b) is entirely about friction not scaling with the thrust; `p9`
  gives `system-of-interest` full value beside `newtons-second-law`, since
  part (a) asks for the system before anything is calculated; `p11` gives
  `weight` weight 2, since the ratio to the passenger’s weight is one step of
  a longer problem; `p13` gives `mass-versus-weight` full value and `weight`
  full value, since the question is exactly the difference between them.

## Views

- Formulas: the seven equations of the section already in `chapter.json`,
  the second law in its two vector forms, the newton and the weight
  important, the two proportionalities and the magnitude-only form not.
- Definitions: the eight variables of the section; the seven glossary terms.
- Concept map: the seven nodes above with their edges into 1.2, 2.4, 2.7,
  3.2, 3.3, 4.1 and 4.2.

## Colour

The page binds force, acceleration, velocity, position and time. Every figure
draws forces and an acceleration; `sim-wagon`, `sim-mower` and `sim-sled`
draw a velocity arrow and `sim-wagon` a $\kv$–$\kt$ graph whose time axis is
coloured; `sim-mower` brackets the distance the mower covers. Mass, the
number of rockets burning, the angles of the free-body diagrams and the
lengths of the scenes stay untyped and in ink, as Plan.md decided.

## Wanted at chapter level

- variables `a` → 4.3-system
- variables `F_net` → 4.3-net-force
- variables `f_fric` → 4.3-net-force
- variables `N` → 4.3-net-force
- variables `m` → 4.3-net-force
- variables `w` → 4.3-weight
- variables `g` → 4.3-weight
- variables `T_force` → 4.3-sled
- equations `eq-a-prop-fnet` → 4.3-net-force
- equations `eq-a-prop-mass` → 4.3-net-force
- equations `eq-newton2-a` → 4.3-second-law
- equations `eq-newton2` → 4.3-second-law
- equations `eq-newton2-mag` → 4.3-second-law
- equations `eq-newton-unit` → 4.3-newton
- equations `eq-weight` → 4.3-weight
- The glossary row for `friction` reads “a force past each other of objects
  that are touching”, which drops the word the book’s own sentence carries.
  The section’s text has the full sentence, “a force that opposes the motion
  past each other of objects that are touching”; the glossary row is the
  book’s own wording in the CNXML `<definition>`, so it is left as it is and
  named here in case the chapter pass would rather match the text.
- The `T_force` variable row’s meaning is written for this section (“the
  thrust of one rocket of the four-rocket propulsion system”); 4.5 gives the
  same symbol its tension meaning in a row of its own, so nothing is wanted
  beyond the anchor.
- equations `eq-newton2-a`: its `ktex`, `\mathbf{a} = \frac{\kFnet}{m}`, sets
  a bold ink vector beside a coloured symbol, which reads as two conventions
  in one line. The text prints both vector forms of the law in bold ink, as
  the book prints them, and the magnitude form with the macros, so the sheet
  would read better with the `ktex` dropped from `eq-newton2-a` and kept on
  `eq-newton2` and `eq-newton2-mag`. Either way the section is unaffected.
