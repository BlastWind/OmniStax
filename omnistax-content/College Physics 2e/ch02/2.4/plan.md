# Plan: 2.4 Acceleration (m42100)

Source: `source.md` (converted from CNXML). Book pages 67 to 77.
Status: built 2026-09-11 without a review stop, on Chen's instruction to
finish Chapters 2 and 3 in one job.

The heaviest narrative of the chapter: the definition of average
acceleration, two boxed notes, a Misconception Alert, seven worked
examples (2.1 to 2.7, six of them on one subway train), twelve numbered
figures (2.12 to 2.23: three photographs, one drawing of four cars, one
pair of graphs, one drawing of the train's two trips, four strategy
sketches, one triple graph), one Check Your Understanding, a PhET note,
two AP items, five conceptual questions and four problems, two of them
keyed. One equation, `eq-abar`. It stays one page (rule 11).

## Sub-concepts (page headers)

The book has an untitled opening run, then the headers "Instantaneous
Acceleration" and "Sign and Direction"; the six subway examples sit
under the first of these. Page structure, one block per idea, span ids
as the chapter's anchors expect them:

1. `average-acceleration` **Average acceleration** (book: the opening
   paragraph, the boxed definition of average acceleration, the sentence
   on the unit m/s²). The chapter's variables ā, Δv, v₀, v_f and the
   equation `eq-abar` anchor here.
2. `vector` **Acceleration as a vector** (book: the paragraph on velocity
   being a vector and the car turning a corner; the boxed note
   Acceleration as a Vector).
3. `deceleration` **Deceleration** (book: the paragraph "Keep in mind that
   although acceleration is in the direction of the change in velocity";
   the photograph of the São Paulo subway train, Figure 2.13).
4. `negative-acceleration` **Deceleration and negative acceleration**
   (book: the Misconception Alert with the four cars of Figure 2.14).
5. `racehorse` **Calculating an average acceleration** (book: Example
   2.1, the racehorse leaving the gate, kept as `ex-racehorse`).
6. `instantaneous` **Instantaneous acceleration** (book's own header: the
   paragraph on choosing a representative average and the two graphs of
   Figure 2.17). The chapter's variable a anchors here.
7. `subway` **The subway train** (book: the paragraph introducing the
   train and Figure 2.18; Example 2.2, displacement, as
   `ex-subway-displacement`; Example 2.3, distance traveled, as
   `ex-subway-distance`).
8. `subway-acceleration` **The subway train speeding up and slowing
   down** (book: Example 2.4 as `ex-subway-speeding-up` with Figure 2.19;
   Example 2.5 as `ex-subway-slowing-down` with Figure 2.20; the sentence
   on the three graphs and Figure 2.21).
9. `subway-left` **The subway train moving to the left** (book: Example
   2.6, average velocity, as `ex-subway-velocity` with Figure 2.22;
   Example 2.7, deceleration, as `ex-subway-deceleration` with Figure
   2.23).
10. `sign-direction` **Sign and direction** (book's own header: the
    paragraph on the signs of the answers). The Check Your Understanding
    on the airplane landing while traveling east goes inline after it.

The book's cross references to Time, Velocity, and Speed, Displacement
and Physical Quantities and Units stay plain text, as the common brief
asks. The PhET note (Moving Man Simulation) is dropped per the chapter
config. Learning objectives, section summary and glossary come out of
the running text into the views; the AP items, conceptual questions and
problems go to the Exercises document.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| acceleration | idea | average-acceleration | glossary; the note Acceleration as a Vector; CQ 1, 2, 3 |
| average-acceleration | idea, eq-abar | average-acceleration | glossary; the boxed definition; Examples 2.1, 2.4, 2.5, 2.7; problems 1, 3; AP 1 |
| deceleration | idea | deceleration | glossary; Figure 2.13; Examples 2.5 and 2.7; CYU; CQ 4, 5; problem 3(b) |
| acceleration-sign | result | negative-acceleration | the Misconception Alert and Figure 2.14; Sign and Direction; Example 2.7; CYU; CQ 4, 5 |
| calculate-average-acceleration | skill | ex-racehorse | Example 2.1; Examples 2.4, 2.5, 2.7; problems 1, 3; AP 1 |
| instantaneous-acceleration | idea | instantaneous | glossary; Figure 2.17; CQ 3 |

`acceleration-sign` is introduced at the Misconception Alert, where the
book first separates negative acceleration from deceleration and draws
the four cars, and reinforced at Sign and Direction, where the rule
"same sign, speeding up; opposite sign, slowing down" is stated. The
subway examples use `displacement`, `distance-traveled` (2.1),
`average-velocity` (2.3), `coordinate-system` (2.2) and
`unit-conversion` (1.2).

## Figures

id · replaces · concepts · what moves · sliders · headline · graph · 3D

1. `sim-average-acceleration` · new, for the boxed definition ·
   average-acceleration, acceleration · a car on a strip whose velocity
   grows by ā every second for 5.0 s; the velocity arrow lengthens each
   frame and the acceleration arrow keeps its length; every whole second
   a tick on the v–t graph below is labelled with the gain, so "meters
   per second per second" is read off the picture · $\kvo$ (0 to 20 m/s,
   default 5.0, velocity hue), $\kab$ (−5.0 to 5.0 m/s², default 2.5,
   acceleration hue) · "after 2.0 s the velocity has grown by 2 × 2.5 =
   5.0 m/s, to 10.0 m/s" · v–t below (t, v) · no. Moving: the idea is a
   change over time, and the quantity that accumulates is the velocity.
   One run of 5.0 s of model time in about 5 real seconds, so it gets the
   scrubber. Readout: $\kab = \kdv/\kdt = (17.5 − 5.0)/5.0 = 2.5$ m/s².
   Draws time, velocity, acceleration.
2. `sim-turning` · new (rule 15, built; see below) · acceleration · a
   car seen from above drives a straight road, rounds a quarter circle
   at constant speed and drives on; the velocity arrow rides on the car,
   and beside the bend the velocity at the start of the turn and the
   velocity now are set tail to tail with their difference Δv drawn
   between the tips, pointing to the inside of the bend · speed (5 to
   20 m/s, default 10, velocity hue), radius of the bend (20 to 80 m,
   default 40, ink) · "on the bend the speed stays 10.0 m/s while the
   direction turns 45°, so Δv is 7.7 m/s and the car is accelerating" ·
   none, the scene is the idea · no. Moving: the direction changes as
   the car goes round. Endless loop of the whole run (straight, bend,
   straight) in about 5 real seconds. Readout: $|\kdv| = 2\kv\sin(θ/2)$
   in words: the speed has not changed and the velocity has. Draws
   velocity, acceleration.
3. `sim-four-cars` · replaces Figure 2.14 (the four cars) ·
   acceleration-sign, deceleration · four strips, one per car of the
   book's figure: (a) moving right and speeding up, (b) moving right and
   slowing down, (c) moving left and slowing down, (d) moving left and
   speeding up; each car drives for the time it takes the slowing cars
   to stop, its velocity arrow growing or shrinking every frame while
   its acceleration arrow keeps its length and sign · starting speed
   (5 to 30 m/s, default 15, velocity hue), size of the acceleration
   (1.0 to 6.0 m/s², default 3.0, acceleration hue) · "t = 2.4 s · (b)
   and (c) are decelerating, and (b) and (d) have negative
   acceleration" · none · no. Moving: speeding up and slowing down are
   things that happen as time runs. Finite, one loop of v₀/|a| seconds
   in about 5 real seconds, scrubber. Readout: the four signs as the
   book's caption gives them, with the live velocities. Draws velocity,
   acceleration.
4. `sim-racehorse` · replaces Figure 2.16 (the sketch for Example 2.1) ·
   average-acceleration, calculate-average-acceleration · a horse runs
   west along a strip with east positive; its velocity arrow grows from
   v₀ to v_f over Δt, the acceleration arrow points west with a fixed
   length, and the v–t graph below runs down to −15.0 m/s · $\kvo$
   (−20 to 20 m/s, default 0.0), $\kvf$ (−20 to 20 m/s, default −15.0,
   both velocity hue), $\kdt$ (0.5 to 5.0 s, default 1.80, time hue) ·
   "t = 0.90 s · v = −7.5 m/s · the horse gains 8.33 m/s of westward
   velocity every second" · v–t below · no. Moving, finite, scrubber.
   Readout: $\kab = \kdv/\kdt = (−15.0 − 0)/1.80 = −8.33$ m/s². Draws
   time, velocity, acceleration.
5. `sim-instantaneous` · replaces Figure 2.17 (the two graphs of
   instantaneous acceleration) · instantaneous-acceleration,
   average-acceleration · two a–t graphs side by side as the book draws
   them, (a) the slight wobble about 1.8 m/s² over 5 s and (b) the
   package on the conveyor belt over 6 s; an interval [t₁, t₂] is shaded
   on both, the average over it is a dashed level, and as the clock runs
   from t₁ to t₂ the area under each curve fills in the velocity hue,
   since that area is the change in velocity · $t_1$ (0 to 5.5 s,
   default 0.0), $t_2$ (0.5 to 6.0 s, default 3.0; both time hue) ·
   "from 0 to 3.0 s the average on the left is 1.8 m/s² and on the right
   −0.33 m/s², which no part of the right-hand motion has" · the graphs
   are the figure · no. Moving: the change in velocity accumulates as
   the clock runs. Finite, scrubber. Readout: ā over the interval for
   both; small line: over 0 to 1.0 s alone the right-hand motion has
   +3.0 m/s² and over 1.0 to 3.0 s −2.0 m/s², the book's numbers. Draws
   time, velocity, acceleration.
6. `sim-subway-displacement` · replaces Figure 2.18 (the train's two
   trips) · displacement, distance-traveled, coordinate-system · two
   strips of track marked in kilometers; on each a hollow outline of
   the train at the initial position, the train itself at the final
   position and a bracket for the displacement, (a) to the right and
   (b) to the left · $\kxo$ (default 4.70), $\kxf$ (default 6.70),
   $\kxo'$ (default 5.25), $\kxf'$ (default 3.75), all 0 to 10 km, step
   0.05, position hue · "(a) Δx = 6.70 − 4.70 = +2.00 km · (b) Δx′ = 3.75
   − 5.25 = −1.50 km" · none · no. Still: a displacement is a difference
   of two positions and has no time in it; the figure answers its four
   sliders, and Examples 2.2 and 2.3 read straight off it. Readout: the
   two displacements and the two distances traveled. Draws position.
7. `sim-subway-speeding-up` · replaces Figure 2.19 (the sketch for
   Example 2.4) · average-acceleration, calculate-average-acceleration,
   unit-conversion · the train on a strip moving right, from rest to
   30.0 km/h in 20.0 s; the velocity arrow grows, the acceleration arrow
   points right and keeps its length; v–t below in km/h · $\kvo$ (−60
   to 60 km/h, default 0.0), $\kvf$ (default 30.0; both velocity hue),
   $\kdt$ (1 to 60 s, default 20.0, time hue) · "t = 10.0 s · v = 15.0
   km/h · the acceleration points the same way as the change in
   velocity, to the right" · v–t below · no. Moving, finite, scrubber.
   Readout: the book's step with the conversion, $(+30.0\ \text{km/h}
   / 20.0\ \text{s})(10^3\ \text{m}/1\ \text{km})(1\ \text{h}/3600\
   \text{s}) = 0.417$ m/s². Draws time, velocity, acceleration.
8. `sim-subway-slowing-down` · replaces Figure 2.20 (the sketch for
   Example 2.5) · deceleration, average-acceleration,
   calculate-average-acceleration · the same train, 30.0 km/h to rest
   in 8.00 s; the velocity arrow shrinks while the acceleration arrow
   points left · the same three sliders, defaults 30.0, 0.0, 8.00 ·
   "t = 4.00 s · v = 15.0 km/h · the acceleration is opposite to the
   velocity, so this is a deceleration" · v–t below · no. Moving,
   finite, scrubber. Readout: −1.04 m/s² with the conversion. Draws
   time, velocity, acceleration.
9. `sim-subway-graphs` · replaces Figure 2.21 (position, velocity and
   acceleration of the train against time) · average-acceleration,
   instantaneous-acceleration, deceleration · the whole journey of
   Examples 2.4 and 2.5 on one clock: the train speeds up for 20 s,
   cruises for 20 s and brakes for 8 s along a strip, while three
   stacked graphs of x, v and a against time carry a moving point each,
   the position curving up then straight then flattening, the velocity
   a ramp, a plateau and a ramp down, the acceleration three flat steps ·
   top speed (10 to 60 km/h, default 30.0, velocity hue), time to speed
   up (5 to 40 s, default 20.0), time at constant velocity (0 to 40 s,
   default 20.0), time to stop (2 to 20 s, default 8.00; all time hue) ·
   "t = 30.0 s · the velocity is constant, so the acceleration is zero
   and the position grows at a steady rate" · three graphs below · no.
   Moving, finite, scrubber. Readout: the two accelerations, +0.417 and
   −1.04 m/s², and the distance covered. Draws time, position, velocity,
   acceleration.
10. `sim-subway-velocity` · replaces Figure 2.22 (the train's trip to
    the left, for Example 2.6) · average-velocity, displacement · the
    train travels left from x′₀ to x′_f in Δt at a steady rate, its
    velocity arrow pointing left, while an x–t graph below draws the
    straight line whose slope is the average velocity · $\kxo'$ (default
    5.25), $\kxf'$ (default 3.75; both 0 to 10 km, position hue), $\kdt$
    (1.0 to 15.0 min, default 5.00, time hue) · "t = 2.50 min · the train
    is at 4.50 km, halfway along a trip of −1.50 km" · x–t below · no.
    Moving, finite, scrubber. Readout: $\kvb = \kdx'/\kdt = (−1.50\
    \text{km}/5.00\ \text{min})(60\ \text{min}/1\ \text{h}) = −18.0$
    km/h. Draws time, position, velocity.
11. `sim-subway-deceleration` · replaces Figure 2.23 (the sketch for
    Example 2.7) · acceleration-sign, deceleration, average-acceleration
    · the train moving left at −20.0 km/h comes to rest in 10.0 s; the
    velocity arrow points left and shrinks, the acceleration arrow
    points right; v–t below rises from −20.0 to 0 · the three sliders of
    figure 7, defaults −20.0, 0.0, 10.0 · "t = 5.00 s · v = −10.0 km/h ·
    a positive acceleration is slowing a negative velocity" · v–t below
    · no. Moving, finite, scrubber. Readout: +0.556 m/s² with the
    conversion. Draws time, velocity, acceleration.

Figures 4, 7, 8 and 11 are one shape (a sprite on a strip with v and a
arrows, a v–t graph below, sliders v₀, v_f, Δt) built by one function
in `figures.js` with the sprite, the unit and the defaults as its
arguments; each keeps its own book number, its own original and its
own headline and readout, since each sits in the example it serves.

Photographs, three:

- Figure 2.12, the airplane landing at St. Maarten (credit: Steve
  Conry, Flickr): **drop**. It is the splash image at the head of the
  section; nothing in the text refers to it. Not copied.
- Figure 2.13, the subway train in São Paulo decelerating into a
  station (credit: Yusuke Kawasaki, Flickr): **keep** as
  `fig-subway-photo`. It shows the thing the passage is about, a train
  whose acceleration is opposite to its motion, and the book draws the
  velocity and acceleration arrows on it.
- Figure 2.15, the racehorses (credit: Jon Sullivan, PD Photo.org):
  **drop**. It is a stock shot beside Example 2.1 with no caption
  beyond the credit. Not copied.

Figures that serve exercises: the velocity–time graph of the cart in
the first AP item is unnumbered in the book and is carried on the
exercise card itself (`figure` on `ap1`), copied as it is from the
bundle as `Figure_Ch2_M4_14.jpg`.

Extra simulations (rule 15). Thought about: a car turning a corner at
constant speed (the text's own example of an acceleration with no
change in speed, which none of the required figures can show since
they are all one-dimensional); a speedometer needle whose rate of
turning is the acceleration (only animates what the v–t graphs already
say); a v–t graph the reader draws freehand and whose average
acceleration over a chosen interval is read off (the same view as
figure 5). Built: the turning car, `sim-turning` (figure 2), since it
opens the one view the section's text gives and its figures do not, a
change in velocity that is entirely a change in direction. Left: the
other two.

## Exercises

- 1 Check Your Understanding, open, inline after `sign-direction`,
  with the book's answer: `cyu1` (the airplane landing while traveling
  east, citing `sign-direction`).
- 1 AP item kept, `ap1` (ranking the average accelerations of the cart
  over the four sections of its v–t graph), with the book's graph on
  the card and no key in the book, so an AI-written suggested approach
  marked as such; kept as an open answer rather than a graded choice.
- 1 AP item held for 2.8: the book pushed across a table with position
  and velocity graphs to draw for either sign convention
  (fs-id1860126). It tests `acceleration-sign` and
  `derive-motion-graphs`, and the latter is a 2.8 node, so 2.8 takes it
  with `source_section: "2.4"`.
- 5 conceptual questions, `cq1` to `cq5`, each with an AI-written
  suggested approach: speed constant while a ≠ 0; velocity constant
  while a ≠ 0; velocity zero while a ≠ 0; the direction and sign of the
  acceleration of a train moving left that stops; the sign of an
  acceleration that reduces a negative velocity and a positive one.
- 2 problems keyed and kept: `p1` (the cheetah, 4.29 m/s²), `p3` (the
  commuter backing out of her garage, 1.43 s and −2.50 m/s²).
- 2 problems left out, having no answer in the book's key: 2
  (fs-id4035192, Stapp's rocket sled), 4 (fs-id4124470, the ICBM).
- Taken from elsewhere: nothing. Conceptual question 3 of 2.2 asks
  whether acceleration is a vector or a scalar, but it states the
  definition in the question and tests the vector idea of 2.2, so it
  stays there.
- Weights: `p3` names deceleration in part (b) and turns on the
  calculation, so `deceleration` gets weight 1 there; `ap1` is a
  ranking read off a graph, so `calculate-average-acceleration` gets
  weight 2 beside `average-acceleration`.

## Views

- Formulas: `eq-abar` (important), already in `chapter.json`.
- Definitions: variables ā, a, Δv, v₀, v_f; the four glossary terms.
- Concept map: the six nodes above, with `displacement`,
  `distance-traveled`, `average-velocity`, `coordinate-system` and
  `unit-conversion` used by the examples.

## Colour

The page binds time, position, velocity and acceleration: every sim
carries a velocity or a position on a slider and draws a velocity
arrow, the moving ones carry a time, and all but the displacement and
velocity sims draw an acceleration arrow. Speeds of the four cars and
the turning car are velocities and take that hue; the radius of the
bend, the length of a strip and the count of a car are untyped and in
ink.

## Wanted at chapter level

- variables `ā`, `Δv`, `v0`, `vf` (section 2.4) → anchor
  `2.4-average-acceleration`
- variable `a` (section 2.4) → anchor `2.4-instantaneous`
- equation `eq-abar` → anchor `2.4-average-acceleration`

The chapter pass wrote every anchor above into `chapter.json`, each one
checked against the ids of this section's `text.html`.
