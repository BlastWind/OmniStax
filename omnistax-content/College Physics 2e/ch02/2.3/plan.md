# Plan: 2.3 Time, Velocity, and Speed (m42096)

Source: `source.md` (converted from CNXML). Book pages 62 to 66.
Status: built 2026-09-11 without a review stop, on Chen's instruction to
finish Chapters 2 and 3 in one job.

A definitions section: three titled runs of text (Time, Velocity, Speed),
one boxed definition, one splash photograph, three sketch figures, no
worked example, one Check Your Understanding box, one AP item, five
conceptual questions and eleven problems, six of them keyed. No PhET note.
It stays one page (rule 11).

## Sub-concepts (page headers)

The book's opening paragraph stays above the first header, as 2.5 keeps
its own. Page structure, one block per idea, span ids as the chapter's
anchors expect them:

1. `time` **Time is measured by change** (book: the first two paragraphs
   of Time, the definition of time as change, the second as the standard,
   the pendulum that swings every 0.75 s)
2. `elapsed-time` **Elapsed time and the stopwatch convention** (book: the
   rest of Time, the lecture from 11:00 to 11:50, $\Delta t = t_f - t_0$,
   the stopwatch that reads zero at the start, the two bullets the text
   adopts for the rest of the book). The chapter's variables $t_0$,
   $t_f$, $\Delta t$ and $t$ and the equation `eq-dt` anchor here.
3. `average-velocity` **Average velocity** (book: the first paragraph of
   Velocity, the boxed definition kept as a `div.note`, the paragraph on
   velocity being a vector with the airplane passenger's −0.8 m/s). The
   variable $\bar v$ and the equations `eq-vbar-def` and `eq-vbar-t`
   anchor here.
4. `instantaneous-velocity` **Instantaneous velocity** (book: average
   velocity tells nothing about what happens in between, Figure 2.9, the
   smaller intervals carried to an infinitesimal one, the speedometer, the
   limit beyond the scope of the text). The variable $v$ anchors here.
5. `speed` **Speed has no direction** (book: the first paragraph of Speed,
   speed as a scalar, instantaneous speed as the magnitude of instantaneous
   velocity, the passenger at −3.0 m/s and the shopper at 40 km/h due
   north, average speed as distance traveled over elapsed time). The
   equation `eq-avg-speed` anchors here.
6. `store-trip` **A round trip to the store** (book: the drive to the
   store and back, Figure 2.10, the graphs of position, velocity and speed
   against time, Figure 2.11 and its note on the simplified model, the
   Take-Home Investigation on getting a sense of speed). The Check Your
   Understanding box, the commuter train from Baltimore to Washington and
   back, goes inline at the end of this block, since it is the round trip
   again with numbers.

The cross reference to Physical Quantities and Units in the first
paragraph of Time stays plain text. The reference to Figure 2.11 keeps
the book's wording so the build links it.

Learning objectives, section summary and glossary come out of the running
text into the views. The AP item, the conceptual questions and the
problems go to the Exercises document.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| time | idea | time | glossary; CQ 1 |
| elapsed-time | idea, eq-dt | elapsed-time | glossary; the lecture; the stopwatch convention; problem 9 |
| average-velocity | idea, eq-vbar-def | average-velocity | glossary; the boxed definition; CYU (a); AP; CQ 2 and 4; problems 1(b), 7(b), 11(b) |
| instantaneous-velocity | idea | instantaneous-velocity | glossary; Figure 2.9; CQ 3 and 5 |
| instantaneous-speed | idea | speed | glossary; CQ 3 and 5 |
| average-speed | idea, eq-avg-speed | speed | glossary; the store trip; CYU (b); CQ 2 and 4; problems 1(a), 3, 5, 7(a), 9, 11(a) |

The glossary prints `model` again; that is 1.1's node, reinforced in
`store-trip` where the text calls the trip a simplified model, not
introduced. `store-trip` also uses 2.1's `displacement` and
`distance-traveled`, since the odometer and the round trip are the
contrast the passage draws.

## Figures

id · replaces · concepts · what moves · sliders · headline · graph · 3D

1. `demo-elapsed-time` · new · time, elapsed-time · a pendulum swings
   above a time line while a marker runs along the line from $t_0$ to
   $t_f$; a bracket in the time hue spans the elapsed time; a stopwatch
   at the right reads zero until the motion starts and then counts up; the
   swings of the pendulum are counted, since every measurement of time is
   a count of some change · $\kto$ in s (0 to 60, step 0.5, default 10.0,
   time hue), $\ktf$ in s (0 to 120, step 0.5, default 40.0, time hue),
   the time of one swing in s (0.5 to 2.0, step 0.05, default 0.75, time
   hue, since a period is a time) · "the clock read 10.0 s at the start
   and 40.0 s at the end, so the elapsed time is 30.0 s, and the pendulum
   swung 40 times" · none · no. Finite motion: the marker runs from
   $t_0$ to $t_f$ in about 5 real seconds and the loop restarts, so it
   gets the scrubber. When $t_f$ is set before $t_0$ the headline says
   the motion has not begun and nothing runs. Readout: $\kdt = \ktf -
   \kto = 40.0\ \text{s} - 10.0\ \text{s} = 30.0\ \text{s}$; small line:
   a stopwatch started at the same moment reads zero at $t_0$ and 30.0 s
   at $t_f$, which is why the text takes $t_0 = 0$ and writes $t$ for the
   elapsed time. Draws time.
2. `demo-average-velocity` · new · average-velocity, elapsed-time,
   displacement · the aisle of an airplane drawn as a strip inside an
   outline of the fuselage, the nose to the right so that $x$ increases
   toward the front as in the book; a passenger walks from $x_0$ to
   $x_f$ while a stopwatch counts the time $t$; a bracket for the
   displacement in the position hue and a velocity arrow on the passenger;
   below, a graph of position against time on which the straight line
   from $(0, x_0)$ to $(t, x_f)$ has slope $\bar v$ and the moving point
   rides along it · $\kxo$ in m (0 to 10, step 0.5, default 6.0, position
   hue), $\kxf$ in m (0 to 10, step 0.5, default 2.0, position hue),
   $\kt$ in s (1 to 20, step 0.5, default 5.0, time hue) · "the
   passenger moves −4.0 m in 5.0 s, an average velocity of −0.80 m/s, the
   minus sign meaning toward the rear of the plane" · position against
   time · no. Finite motion, one walk per set time in about 5 real
   seconds, so it gets the scrubber. Readout: $\kvb = \frac{\kdx}{\kt} =
   \frac{-4.0\ \text{m}}{5.0\ \text{s}} = -0.80\ \text{m/s}$; small line:
   velocity is a vector because displacement is one, and the sign of the
   average velocity is the sign of the displacement. Draws position,
   time, velocity.
3. `demo-segments` · replaces Figure 2.9 · instantaneous-velocity,
   average-velocity · the same passenger on the same aisle, but now his
   actual trip is recorded: he walks toward the rear, slows, comes forward
   a step, and goes back again, ending 4.0 m behind where he started after
   5.0 s; the trip is cut into intervals of a set width, and over each one
   the average velocity is drawn as a chord on the graph of position
   against time, with the book's four segments (a, b, c forward, d) as the
   default cut; the instantaneous velocity at the current instant is the
   slope of the tangent, drawn on the graph and as the arrow on the
   passenger · the width of one interval $\kdt$ in s (0.1 to 5.0, step
   0.05, default 1.25, time hue), the time of the whole trip $\kt$ in s
   (2 to 10, step 0.5, default 5.0, time hue) · "t = 2.3 s · over the
   interval from 1.25 s to 2.50 s the average velocity is −1.2 m/s; at
   this instant the velocity is −1.6 m/s" · position against time · no.
   Finite motion, one trip per loop in about 5 real seconds, so it gets
   the scrubber. Readout: the average velocity over the current interval,
   $\kvb = \kdx/\kdt$, with the numbers, and the instantaneous velocity
   $\kv$ beside it; small line: as the interval shrinks, the average
   velocity over it settles to the instantaneous velocity, which is what
   the text means by an infinitesimally small interval. Keeps the book's
   number 2.9, the book's image as its original and the book's caption.
   Draws position, time, velocity.
4. `demo-store` · replaces Figure 2.10 · average-speed, average-velocity,
   distance-traveled, displacement · a road from home at the left to the
   store at the right; a car drives out to the store and part or all of
   the way back while a stopwatch counts the minutes; an odometer under
   the road adds up the distance traveled and a bracket in the position
   hue shows the displacement from home, which vanishes on a full round
   trip · the distance to the store in km (1.0 to 10.0, step 0.5, default
   3.0, ink, a length of the scene), the time of the trip $\kt$ in min (10
   to 120, step 5, default 30, time hue), how far back toward home the
   car drives, as a percentage of the way (0 to 100, step 10, default 100,
   ink) · "the odometer reads 6.0 km after 30 min, an average speed of 12
   km/h, but the car is back where it began, so its average velocity is
   zero" · none · no. Finite motion, one trip per loop in about 5 real
   seconds, so it gets the scrubber. Readout: $\text{average speed} =
   \frac{6.0\ \text{km}}{0.50\ \text{h}} = 12\ \text{km/h}$ beside
   $\kvb = \frac{\kdx}{\kt} = \frac{0\ \text{km}}{0.50\ \text{h}} = 0$;
   small line: the average speed is not the magnitude of the average
   velocity, and the two agree only when the car never turns back. The
   third slider is what earns the figure beyond the book's sketch: with
   the car stopping halfway home, the displacement is 1.5 km and the
   average velocity 3.0 km/h away from home while the average speed is
   9.0 km/h. Keeps the book's number 2.10, the book's image as its
   original and the book's caption. Draws position, time, velocity.
5. `demo-trip-graphs` · replaces Figure 2.11 · average-speed,
   average-velocity, instantaneous-velocity, instantaneous-speed · the
   same round trip as Figure 2.10 drawn three ways under a short strip
   with the car on it: position against time (a tent that rises to the
   store and comes back), velocity against time (+12 km/h out, −12 km/h
   back, the jump at the turn), speed against time (12 km/h throughout),
   with a time cursor and a moving point on each graph · the distance to
   the store in km (1.0 to 10.0, step 0.5, default 3.0, ink), the time of
   the trip $\kt$ in min (10 to 120, step 5, default 30, time hue) · "t =
   0.20 h · the car is 2.4 km from home, its velocity is +12 km/h and its
   speed is 12 km/h" · three graphs side by side, position, velocity and
   speed against time · no. Finite motion, one trip per loop in about 5
   real seconds, so it gets the scrubber. Readout: $\kv = +12\ \text{km/h}$
   on the way out and $-12\ \text{km/h}$ on the way back, while the speed
   is $12\ \text{km/h}$ throughout; small line: the speed graph is the
   velocity graph with its sign removed, which is what it means for
   instantaneous speed to be the magnitude of instantaneous velocity.
   This is the figure that serves `instantaneous-speed`; a figure of its
   own would only draw the same graph again. Keeps the book's number
   2.11, the book's image as its original and the book's caption. Draws
   position, time, velocity.

Photographs, one:

- Figure 2.8, the racing snails (credit: tobitasflickr, Flickr): **drop**.
  It is the splash image at the head of the section and nothing in the
  text refers to it. Not copied.

Figures that serve exercises: none. Problem 1 leans on the Earth to Sun
distance of Table 1.3, which its hint names.

Extra simulations (rule 15), thought about and judged:

- A dashboard with a speedometer and an odometer for a trip that stops at
  the store: not built. The odometer is already in `demo-store` and the
  speedometer's reading is the speed graph of `demo-trip-graphs`; a
  dashboard would animate what those two already show.
- A chord shrinking to a tangent at one chosen instant: not built as a
  figure of its own, because `demo-segments` already does it for every
  interval of the trip at once, which is closer to the book's argument.

None built.

## Exercises

- 1 Check Your Understanding, `cyu1` (the commuter train, Baltimore to
  Washington and back), two numeric parts, (a) 0 m/s and (b) 20 m/s,
  inline after `store-trip`, citing `store-trip`, with the book's
  solution.
- 1 AP test prep item, `ap1` (two carts on a track), open, with the
  book's own solution, which the source carries, so it is marked as the
  book's.
- 5 conceptual questions, open, with AI-written suggested approaches:
  `cq1` (a device that measures time), `cq2` (average speed against the
  magnitude of average velocity), `cq3` (odometer and speedometer), `cq4`
  (odometer reading over trip time), `cq5` (instantaneous velocity and
  instantaneous speed).
- 6 problems keyed and kept: `p1` (Earth's average speed and velocity,
  two parts), `p3` (the continents drifting 500 km apart; the key is
  rounded to one figure, $2 \times 10^{7}$ years, so it is kept as an open
  answer to compare with, since the quotient itself, $1.7 \times 10^{7}$
  years, would fail a 2% check), `p5` (the Zephyr's average speed, in
  km/h and m/s), `p7` (the student's drive, four keyed values), `p9` (the
  Earth to Moon distance from the echo time), `p11` (the electron's
  revolutions per second and its average velocity).
- 5 problems left out, having no answer in the book's key: 2
  (fs-id3514248, the helicopter blade), 4 (fs-id2572316, the San Andreas
  fault), 6 (fs-id951583, the Moon's orbit), 8 (fs-id1644060, the nerve
  impulse), 10 (fs-id2577314, the quarterback).
- Nothing taken from another section: 2.2's Check Your Understanding on
  speed as a scalar and its conceptual question on the diving bird test
  2.2's own `scalar` node and stay there. Nothing held for a later
  section.
- No generated questions: every node has a book exercise.
- Weights (rule 20): `cyu1` and `p5` merely carry a unit conversion, so
  `unit-conversion` gets weight 1 there; `p7` and `p11` name the distance
  traveled and the displacement on the way to a speed and a velocity, so
  `distance-traveled` and `displacement` get weight 1 there; `p9` uses
  the elapsed time of the echo, so `elapsed-time` gets weight 1.

## Views

- Formulas: eq-dt (important), eq-vbar-def (important), eq-vbar-t (not
  important, the stopwatch form), eq-avg-speed (important). All already
  in `chapter.json`.
- Definitions: variables $t_0$, $t_f$, $\Delta t$, $t$, $\bar v$, $v$;
  the seven glossary terms, `model` among them.
- Concept map: the six nodes above; `model`, `displacement` and
  `distance-traveled` reinforced or used in `store-trip`;
  `unit-conversion` tagged on the exercises that convert.

## Colour

The page binds time, position and velocity, from the five demos: every
one carries a time on a slider, the passenger and the car are placed by
position, and the arrows and the graphs of velocity are drawn in the
velocity hue. The distance to the store, the percentage of the way home
and the count of swings are untyped and in ink. No new hue, no new macro.

## Wanted at chapter level

- `t0` → `2.3-elapsed-time`
- `tf` → `2.3-elapsed-time`
- `Δt` → `2.3-elapsed-time`
- `t` → `2.3-elapsed-time`
- `v̄` → `2.3-average-velocity`
- `v` → `2.3-instantaneous-velocity`
- `eq-dt` → `2.3-elapsed-time`
- `eq-vbar-def` → `2.3-average-velocity`
- `eq-vbar-t` → `2.3-average-velocity`
- `eq-avg-speed` → `2.3-speed`
