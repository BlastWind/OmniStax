# Plan: 2.5 Motion Equations for Constant Acceleration in One Dimension (m42099)

Source: `source.md`, converted from the CNXML module. Written after the
fact on 2026-09-12: the section was built on 2026-09-05 without a plan
file, and this records what stands in `text.html`, `figures.js` and
`section.json` today, including the figure fixes made in the audit pass
of 2026-09-12.

## Sub-concepts (page headers)

The book runs this module as a chain of derivations with a worked
example after each. The page keeps that chain, one block per equation:

1. **Notation: t, x, v, a** (book: the opening paragraphs on taking
   t₀ = 0)
2. **Constant acceleration** (book: the assumption that ā = a)
3. **Displacement from average velocity** (book: solving for Δx and x,
   with Example 2.8, the jogger)
4. **Final velocity** (book: solving for v, with Example 2.9, the
   airplane, and the Making Connections note on the Space Shuttle)
5. **Final position when velocity is not constant** (book: solving for
   x, with Example 2.10, the dragster)
6. **Final velocity without time** (book: solving for v², with Example
   2.11, the dragster again)
7. **Putting Equations Together** (book's own header: the summary of
   knowns and unknowns, with Example 2.12, the braking car)
8. **Example 2.13, the car merging into traffic**, which is where the
   quadratic and its two roots come in.

Learning objectives, the section summary and the glossary come out of
the running text into the views. The AP item and the problems go to the
Exercises document; the Check Your Understanding box stays inline.

## Concept nodes

| id | kind | name | where introduced |
|---|---|---|---|
| const-a | idea | Constant-acceleration model | `constant-a` |
| x-from-vbar | result | x = x₀ + v̄t | `avg-velocity` |
| vbar-midpoint | result | v̄ = (v₀ + v)/2 | `avg-velocity` |
| v-from-at | result | v = v₀ + at | `final-velocity` |
| x-quadratic | result | x = x₀ + v₀t + ½at² | `position-quadratic` |
| v-squared | result | v² = v₀² + 2aΔx | `velocity-squared` |
| choose-equation | skill | Choose the equation from knowns and unknowns | `summary` |
| physical-solution | skill | Interpret the solution physically | `ex-merge` |

Equations: `eq-notation`, `eq-x-vbar`, `eq-vbar`, `eq-v`, `eq-x`,
`eq-v2`. The four kinematic equations are the spine of the chapter, and
every later section leans on them.

## Figures

id · replaces · concepts · value add · moving or still · sliders ·
headline · graph · 2D or 3D

1. `sim-notation` · Sim, since the sketch the book prints under this
   number is the jogger's, and it has been folded into `sim-jogger`
   where the jogger lives · const-a · variation by slider: the reader
   sets the two positions and the time and watches the simplified
   notation follow · moving, since the point of the figure is that the
   stopwatch is started at zero when the object leaves x₀, and that has
   a time in it · x₀ and x in the position hue (0 to 100 m, step 1,
   defaults 20 and 80), t in the time hue (1 to 60 s, step 0.5, default
   12.0) · "The clock starts at zero when the object is at x₀, and after
   12.0 s the object is at x." · none, the number line and the stopwatch
   are the picture · 2D. The line is a fixed 0 to 100 m, the range of
   both position sliders. Labels on, five of them, and the moving marker
   is named "the object" so nothing on the canvas is an unnamed dot.
   Draws position, time.
2. `sim-avg` · Sim; the book prints no figure for this derivation ·
   vbar-midpoint, x-from-vbar · intuition: the velocity line is straight
   under constant acceleration, so its average is the midpoint and the
   area under it is the displacement · moving, since the area
   accumulates as the clock runs · $\kvo$ and $\kv$ in the velocity hue
   (0 to 30 m/s, step 0.5, defaults 10.0 and 20.0), $\kt$ in the time
   hue (1 to 20 s, step 0.5, default 10.0) · "The velocity line is
   straight, so its average sits halfway between v₀ and v." · the graph
   is the figure, on axes fixed at 0 to 20 s and 0 to 30 m/s, the two
   slider ranges · 2D. Labels on, six of them. Draws acceleration,
   position, time, velocity.
3. `sim-jogger` · Figure 2.25 + 2.26 · x-from-vbar · variation by
   slider, and a fold: 2.25 is the sketch for Example 2.8 and 2.26 is
   the straight line of final position against average velocity, both of
   them about the same jogger, so one live drawing carries both and the
   eyebrow reads them both · moving, since the jogger runs the road
   while the clock runs · $\kvb$ in the velocity hue (0 to 8.00 m/s,
   step 0.05, default 4.00), $\kt$ in the time hue (10 to 180 s, step 1,
   default 120), $\kxo$ in the position hue (−200 to 200 m, step 10,
   default 0), which are the numbers of Example 2.8 · "After 60 s the
   jogger is at x = 240 m." · the graph sits below the road, since the
   road is a horizontal scene · 2D. The road is a fixed −200 m to
   1700 m and the graph a fixed 0 to 8.00 m/s by −200 m to 1800 m, so
   neither follows the sliders and the graph is read on the road's own
   scale. Labels on, six of them. Draws position, time, velocity.
4. `sim-plane` · Figure 2.27 + 2.28 (the sketch for Example 2.9 and the
   landing drawn at two instants) · v-from-at · variation by slider and
   motion: the velocity arrow changes while the acceleration arrow does
   not · moving, one landing per set time · $\kvo$ in the velocity hue
   (0 to 90 m/s, step 1, default 70.0), $\ka$ in the acceleration hue
   (−4.00 to 4.00 m/s², step 0.05, default −1.50), $\kt$ in the time hue
   (1 to 60 s, step 0.5, default 40.0) · "After 20.0 s the velocity
   arrow shrinks by 1.50 m/s every second, while the acceleration arrow
   never changes." The wording follows the sign of the acceleration, so
   a positive acceleration reads "grows" and a zero acceleration reads
   "keeps its length" · v–t below, on axes fixed at 0 to 60 s and 0 to
   100 m/s · 2D. The runway is a fixed 0 to 3000 m. A plane that is
   slowing stops when its velocity reaches zero and holds there, since
   an airplane does not roll backwards down the runway: the clock that
   drives the motion is capped at v₀/|a| whenever the acceleration
   opposes the velocity, and the headline says the plane has come to
   rest. A velocity past the top of the scale is drawn against it and
   its true value written in the headline. Labels on, five of them.
   Draws acceleration, position, time, velocity.
5. `sim-dragster` · Figure 2.31 + 2.32 (the two sketches for Examples
   2.10 and 2.11) · x-quadratic, v-squared · intuition: the distance
   grows with the square of the time, which the hollow half-time mark
   makes visible · moving, one run per set time · $\kvo$ in the velocity
   hue (0 to 20 m/s, step 0.5, default 0.0), $\ka$ in the acceleration
   hue (1.0 to 30.0 m/s², step 0.1, default 26.0), $\kt$ in the time hue
   (0.50 to 8.00 s, step 0.01, default 5.56), the book's numbers ·
   "After 2.78 s the dragster is at x = 100 m, since the distance
   covered grows with the square of the time." · x–t below, on axes
   fixed at 0 to 8.00 s and 0 to 1200 m · 2D, the track a fixed 1200 m,
   the farthest the sliders can send the dragster. Labels on, six of
   them. Small line: at half the time the dragster has gone a quarter of
   the distance when it starts from rest, and more than a quarter with a
   running start. Draws acceleration, position, time, velocity.
6. `sim-braking` · Figure 2.33 + 2.34 (the sketch for Example 2.12 and
   the book's diagram of braking distances) · v-squared, choose-equation
   · variation by slider: the same speed and the same driver on two road
   surfaces, with the reaction distance shown apart from the braking
   distance · moving, since the two cars stop at different moments and
   the difference is the point · $\kvo$ in the velocity hue (5.0 to
   40.0 m/s, step 0.5, default 30.0), the reaction time in the time hue
   (0 to 1.50 s, step 0.05, default 0.50), and the two decelerations in
   the acceleration hue (−10.0 to −2.0 m/s², step 0.1, defaults −7.00
   dry and −5.00 wet), all the book's numbers · "After 2.50 s the two
   cars are this far down the road, and since the speed and the driver
   are the same, only the road surface separates them." · none, the two
   bars are the graph · 2D. The 3D view of two cars that once stood over
   the bars is gone, since a pair of distance bars carries the whole
   idea and the cars added nothing the reader could measure (rule 28.5).
   The road is a fixed 0 to 200 m, which holds the example's 79.3 m and
   105 m with room to spare, and a longer stop runs off the end and is
   said to. Both bars are distances, so both take the position hue and
   are told apart by decoration rather than by colour: the reaction
   distance is an outlined bar with a dashed border and the braking
   distance a filled one. The cars themselves are the library's car
   sprite in ink, so nothing on the canvas is an unnamed dot. Labels on,
   seven of them. Small line: the reaction distance, the two total
   stopping distances and the difference between them. Draws
   acceleration, position, time, velocity.
7. `sim-merge` · Figure 2.35 (the sketch for Example 2.13) ·
   x-quadratic, physical-solution · intuition: the quadratic has two
   roots, and only one of them lies in the future · moving, one run up
   the ramp · $\kx$ in the position hue (50 to 400 m, step 10, default
   200), $\kvo$ in the velocity hue (0 to 20.0 m/s, step 0.5, default
   10.0), $\ka$ in the acceleration hue (0.50 to 4.00 m/s², step 0.05,
   default 2.00), the book's numbers · "After 5.0 s the car is on its
   way, and the parabola crosses the length of the ramp twice, although
   only the crossing at 10.0 s lies in the future." · the parabola sits
   below the ramp, on axes fixed at −40 to 40 s and −500 to 1000 m,
   which hold every root the sliders can produce; the curve is clipped
   to the box rather than the box stretched round it · 2D, the ramp a
   fixed 0 to 400 m. The root before the motion began is a filled muted
   marker with a cross through it, since a hollow marker means an
   initial value everywhere else on this page. Labels on, seven of them.
   Draws acceleration, position, time, velocity.

## Photographs

- Figure 2.24, the kayaks racing in Newbury (credit: Barry Skeates,
  Flickr): **drop**. It is the splash image at the head of the section
  and the text never points at it.
- Figure 2.29, the Space Shuttle *Endeavor* blasting off (credit:
  Matthew Simantov, Flickr): **keep** as `fig-shuttle`, with the book's
  caption and credit and the width the book prints it at, 300. The
  Making Connections note beside it is about the Space Shuttle against
  an intercontinental ballistic missile, so the photograph shows the
  thing the passage is about (rule 14). Copied to
  `media/ch02/Figure_02_04_01a.jpg`. Added in the audit pass of
  2026-09-12; the original build left it out.
- Figure 2.30, Tony Schumacher's controlled burnout (credit: Lt. Col.
  William Thurmond, U.S. Army): **drop**. It stands at the head of
  Example 2.10 as a picture of a dragster, and `sim-dragster` two
  paragraphs later draws the run the example is about with the book's
  numbers on it, so the photograph adds nothing the page does not
  already carry.

## Exercises

- 1 Check Your Understanding, the rocket sled, inline after the final
  velocity block.
- 1 AP test prep item, the marble, in the Exercises document.
- 12 problems in the Exercises document, the ones the book's answer key
  covers. Problems without a keyed answer are left out, and
  `exercise_notes` says so.
- No generated questions.

## Views

- Formulas: `eq-notation`, `eq-x-vbar`, `eq-vbar`, `eq-v`, `eq-x`,
  `eq-v2`.
- Definitions: the symbols x, x₀, v, v₀, v̄, a, t as the chapter's table
  already carries them.
- Concept map: the eight nodes above.

## Types the page binds

position, velocity, acceleration, time. Mass and length stay in ink, as
the book's rules say.
