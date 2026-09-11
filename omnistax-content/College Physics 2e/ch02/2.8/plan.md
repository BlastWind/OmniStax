# Plan: 2.8 Graphical Analysis of One-Dimensional Motion (m42103)

Source: `source.md` (converted from CNXML). The answer key of problem 3
was first read from the CNXML itself, since the converter kept only the
first piece of MathML in an `<equation>` that mixes prose with several
pieces; the converter now writes such an equation as a line of text,
and `source.md` was converted again with it in the chapter pass.
Status: built 2026-09-11 without a review stop, on Chen's instruction to
finish Chapters 2 and 3 in one job.

The section is graphs. The jet-powered car of the Bonneville Salt Flats
runs through it three times: at constant velocity (a straight line of
position against time), at constant acceleration (a curve of position, a
straight line of velocity, a level line of acceleration), and up to its
top speed (a velocity that levels out and an acceleration that falls to
zero). Six sketch figures, one photograph, three worked examples, one
Check Your Understanding box with two graphs of its own, six conceptual
questions with five graphs, nine problems with eight graphs (four of them
keyed), and one AP item taken from 2.4. No PhET note. It stays one page
(rule 11).

## Sub-concepts (page headers)

The book has four titled runs of text. The third is long and carries two
ideas, so it is split at the paragraph that turns from position to
velocity; the closing paragraph and the Check Your Understanding box get a
header of their own, since they are where a graph is read as a motion.
The opening paragraph ("A graph, like a picture, is worth a thousand
words") stays above the first header, as 2.5 keeps its opening paragraph.

1. `slopes` **Slopes and general relationships** (book: independent and
   dependent variables, $y = mx + b$, slope as rise over run, the
   $y$-intercept, Figure 2.44). The chapter's variables $m$ and $b$ and
   the equation `eq-line` anchor here.
2. `x-t` **A graph of position against time when the velocity is
   constant** (book: time as the independent variable, the jet car's
   straight-line graph of Figure 2.45, the slope read as $\kvb$ and the
   intercept as $\kxo$, the box The Slope of $x$ vs. $t$, the car's
   positions at 0.50 s and 6.40 s, Example 2.17 as `ex-jet-avg`). The
   variables $x_0$ and $v$ and the equations `eq-x-graph` and
   `eq-slope-x` anchor here.
3. `constant-a` **Graphs of motion when the acceleration is constant but
   not zero** (book: the three graphs of Figure 2.46, the photograph of
   the jet car, the paragraph on the tangent at a point and on plotting
   the tangents' slopes to obtain the velocity graph, Example 2.18 as
   `ex-jet-tangent` with Figure 2.48).
4. `v-t` **The slope of velocity against time is the acceleration**
   (book: "Carrying this one step further", the box The Slope of $v$ vs.
   $t$, the straight velocity line of Figure 2.46(b), $v = v_0 + at$
   read from the graph, the paragraph on discovering physical
   relationships by graphing). The variable $a$ and the equations
   `eq-slope-v` and `eq-v-graph` anchor here.
5. `not-constant` **Graphs of motion where the acceleration is not
   constant** (book: the car from 165 m/s to its top velocity, Figure
   2.49, Example 2.19 as `ex-jet-accel`).
6. `reading-graphs` **Reading a motion from its graphs** (book: the
   closing paragraph on generating one graph from another and on
   graphical analysis in general). The Check Your Understanding box goes
   inline at the end of this block.

Learning objectives, section summary and glossary come out of the running
text into the views. The conceptual questions, the problems and the AP
item go to the Exercises document.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| straight-line-graph | idea, eq-line | slopes | glossary (independent variable, dependent variable, slope, y-intercept); Figure 2.44; used in x-t and v-t |
| x-t-slope-velocity | result, eq-slope-x | x-t | the box The Slope of x vs. t; Example 2.17; problems 1(a), 3(a); CQ 1, 2 |
| tangent-slope | skill | constant-a | Examples 2.18 and 2.19; problems 1, 3 |
| derive-motion-graphs | skill | constant-a | Figure 2.46; the closing paragraph; CYU (b); CQ 2, 4, 5, 6; the AP item from 2.4 |
| v-t-slope-acceleration | result, eq-slope-v | v-t | the box The Slope of v vs. t; Example 2.19; problems 1(b), 3(b), 7(c); CQ 3, 4 |
| interpret-motion-graph | skill | reading-graphs | CYU (a); CQ 1, 2, 4; problem 7 |

`constant-a` also uses x-t-slope-velocity (the slope of the curve is the
instantaneous velocity), `ex-jet-tangent` and `ex-jet-accel` use
tangent-slope, `v-t` uses straight-line-graph and v-from-at (2.5), `x-t`
uses straight-line-graph and average-velocity (2.3), `not-constant` uses
v-t-slope-acceleration, and `reading-graphs` reinforces
derive-motion-graphs.

## Figures

id · replaces · concepts · what moves · sliders · headline · graph · 3D

1. `sim-line` · replaces Figure 2.44 (the straight line $y = mx + b$) ·
   straight-line-graph · **still**: a graph of $y$ against $x$ with the
   line $y = mx + b$, a rise-over-run triangle drawn on it between
   $x = 1$ and $x = 3$, and the intercept marked on the vertical axis
   with a bracket from the origin · slope $m$ (−2.0 to 3.0, step 0.1,
   default 1.5, ink), intercept $b$ (−3 to 4, step 0.5, default 1.0,
   ink) · "the line rises 3.0 for a run of 2.0, so its slope is 1.5, and
   it crosses the $y$-axis at 1.0" · the graph is the figure · no. The
   idea has no time in it; the figure answers its two sliders. Readout:
   $y = mx + b = 1.5x + 1.0$ with a small line on the slope being the
   same between any two points of a straight line. All ink; draws
   nothing.
2. `sim-jet-xt` · replaces Figure 2.45 (the jet car's position against
   time) · x-t-slope-velocity, straight-line-graph · **still**: the
   straight line $x = x_0 + \bar v t$ on axes of 0 to 8 s and 0 to
   2400 m, two chosen points on it with drop lines to both axes, the
   run $\Delta t$ bracketed under the line and the rise $\Delta x$
   beside it, the intercept marked hollow at $t = 0$ · $\kxo$ (0 to
   1000 m, step 25, default 400, position), $\kvb$ (50 to 350 m/s, step
   5, default 250, velocity), the two chosen times $t_1$ (0 to 7.5 s,
   step 0.1, default 0.50, time) and $t_2$ (0.5 to 8 s, step 0.1,
   default 6.4, time) · "between 0.50 s and 6.40 s the car goes from
   525 m to 2000 m, a rise of 1475 m over a run of 5.90 s, so the
   slope is 250 m/s" · the graph is the figure · no. No time in the
   idea: the reader chooses the two points and reads the slope, and the
   slope is the same wherever they are chosen. Readout:
   $\kvb = \kdx / \kdt = (2000 − 525) / (6.4 − 0.50) = 250$ m/s, with a
   small line saying the intercept is $x_0$ and so the graph reads
   $\kx = \kxo + \kvb\kt$. Draws time, position, velocity.
3. `sim-jet-graphs` · replaces Figure 2.46 (position, velocity and
   acceleration of the jet car under constant acceleration) ·
   derive-motion-graphs, tangent-slope, x-t-slope-velocity,
   v-t-slope-acceleration · **moving**: three graphs stacked on one
   time axis, 0 to 35 s. As the clock runs a tangent slides along the
   position curve, its slope is plotted as the point being added to the
   velocity graph, and the slope of the velocity line is plotted as the
   level being added to the acceleration graph; the two lower graphs are
   drawn up to the current time only, so the reader sees them built from
   the tangents · $\kxo$ (0 to 500 m, step 10, default 200, position),
   $\kvo$ (0 to 60 m/s, step 1, default 15, velocity), $\ka$ (0 to 8
   m/s², step 0.1, default 5.0, acceleration) · "t = 12.0 s · the
   tangent at P has slope 75 m/s, which is the velocity plotted below;
   the velocity line has slope 5.0 m/s², the acceleration" · the three
   graphs are the figure · no. It moves because the derivation the
   paragraph describes is a process in time: "if this is done at every
   point on the curve and the values are plotted against time, the
   graph of velocity versus time is obtained". One sweep from 0 to 30 s
   in about 5 real seconds, then a hold, so it gets the scrubber.
   Readout: $\kv = \kvo + \ka\kt = 15 + (5.0)(12.0) = 75$ m/s, with a
   small line on the velocity line being straight because its slope,
   the acceleration, is constant. Draws time, position, velocity,
   acceleration.
4. `sim-tangent` · replaces Figure 2.48 (Example 2.18, the tangent at Q)
   · tangent-slope, x-t-slope-velocity · **still**: the same position
   curve on axes of 0 to 35 s and 0 to 3500 m, the book's table of
   positions at 0, 5, 10, … 30 s beside it, the point Q at the chosen
   time with its tangent drawn out to two endpoints, and the rise and
   run between the endpoints marked with dashed drop lines · $t_Q$ (2 to
   30 s, step 0.5, default 25, time), the endpoints $t_1$ (0 to 30 s,
   step 0.5, default 19, time) and $t_2$ (2 to 35 s, step 0.5, default
   32, time) · "the tangent at Q runs from (19 s, 1298 m) to (32 s,
   3118 m), so its slope, the velocity at 25 s, is 140 m/s" · the graph
   is the figure · no. No time in the idea: the reader places the point
   and the endpoints and reads a slope. Readout:
   $v_Q = \Delta x_Q / \Delta t_Q = (3118 − 1298) / (32 − 19) = 140$
   m/s, with a small line saying that moving the endpoints along the
   tangent does not change the slope, and that a wider interval makes
   any error in reading the graph proportionally smaller. Draws time,
   position, velocity.
5. `sim-jet-top` · replaces Figure 2.49 (velocity and acceleration as
   the car reaches its top velocity) · v-t-slope-acceleration,
   tangent-slope · **still**: two graphs stacked on one time axis, 0 to
   70 s: the velocity curve from 165 m/s levelling out at 250 m/s with a
   tangent at the chosen time drawn out to two endpoints, and the
   acceleration curve below falling from 5.0 m/s² to zero at 55 s with
   the value at the chosen time marked · $t_Q$ (0 to 55 s, step 0.5,
   default 25, time), the endpoints $t_1$ (0 to 40 s, step 0.5, default
   1.0, time) and $t_2$ (10 to 70 s, step 0.5, default 51, time) · "the
   tangent at 25 s runs from (1.0 s, 211 m/s) to (51 s, 261 m/s), so
   the acceleration at 25 s is 1.0 m/s², which is the value plotted
   below" · the graphs are the figure · no. Still, for the same reason
   as the tangent figure. The acceleration is modelled as falling in
   straight pieces through (0, 5.0), (10, 3.0), (25, 1.0) and (55, 0)
   m/s², which reproduces the book's velocities (205, 228, 235, 240,
   246, 250 m/s at 10, 20, 25, 30, 40 and 55 s) and the example's
   tangent endpoints (210 and 260 m/s at 1.0 and 51 s) to within a
   meter per second; the book's own curve is drawn from data and is not
   a formula. Readout: $a = \kdv / \kdt = (261 − 211) / (51 − 1.0) =
   1.0$ m/s². Draws time, velocity, acceleration.

The three examples: 2.17 is the slope of Figure 2.45 and is served by
`sim-jet-xt`, whose defaults are its two points; 2.18 gets
`sim-tangent` because it adds what `sim-jet-graphs` does not show, the
endpoints of a tangent and the arithmetic of a slope read between them;
2.19 is served by `sim-jet-top`, whose defaults are its endpoints.

Photographs, one:

- Figure 2.47, the U.S. Air Force jet car (credit: Matt Trostle,
  Flickr): **keep** as `fig-jet-car`. The text does not point at it,
  but the whole section is the motion of this car, and the photograph
  shows the thing every graph on the page is about.

Figures that serve exercises: the Check Your Understanding box, five of
the conceptual questions and the four kept problems refer to graphs of
their own (Figures 2.50 and 2.51 for the box, the rest unnumbered).
These are kept as the book's images in the exercise cards, since the
card is where the reader meets them and the app keeps one image per
card in `figure`; a problem that refers to two graphs carries them in
its prompt instead. The answer to the box includes its graph, Figure
2.51, and the answer to the Critical Thinking item includes its graph
of velocity against distance. No canvas copy is drawn for any of them.

Extra simulations (rule 15), proposed and judged:

- A slope-matching game: a motion is played on a strip and the reader
  drags the slope of a graph to match it. Left out: it animates what
  `sim-jet-graphs` already shows.
- A graph of a motion with a turn-around, position rising then falling,
  with the velocity graph beneath crossing zero where the position graph
  is flat. This is what conceptual questions 1, 2 and 6 and the AP item
  ask the reader to see, and no required figure shows a negative slope
  or a velocity graph that crosses zero. Judged worth building, but held
  to keep the page to the book's five figures; noted here for a later
  pass.

None built.

## Exercises

- 1 Check Your Understanding, open, inline after `reading-graphs`, with
  the book's answer and its graph, Figure 2.51: `cyu1` (the ship coming
  into harbor, citing `reading-graphs`).
- 6 conceptual questions, `cq1` to `cq6`, each with an AI-written
  suggested approach; `cq1` to `cq5` carry the book's graphs.
- 4 problems keyed and kept: `p1` (the jet car's velocity at 20 s and
  its acceleration, two graphs in the prompt), `p3` (the slope of a
  position graph at 10.0 s and 30 s, and the acceleration at 20 s; its
  key is read from the CNXML, where it is intact), `p7` (the sprinter's
  velocity graph, four parts), `p9` (the Critical Thinking item on two
  cars, untyped in the CNXML and classed as a problem by the header it
  sits under, with the book's answer and its graph).
- 5 problems left out, having no answer in the book's key: 2
  (fs-id4012994, verifying 0.21 m/s at 10 s), 4 (fs-id2475925,
  verifying 3.2 m/s² at 10 s), 5 (fs-id1372323, the subway train's
  position graph, whose key is an empty block), 6 (fs-id2290187, the
  jogger's velocity at 2.5 s and 7.5 s), 8 (fs-id1582774, the particle's
  velocity graph and its acceleration at 2 s).
- 1 AP item taken from 2.4 with `source_section: "2.4"`: `ap1`
  (fs-id1860126, the book pushed across a table and its graphs), since
  it tests derive-motion-graphs; tagged acceleration-sign too.
- Nothing held for a later page. The Critical Thinking item leans on
  2.5's results (the midpoint average velocity, $v^2 = v_0^2 + 2a\Delta x$)
  and is tagged with them; it stays here because the book prints it
  here and 2.5 is already built.
- No generated questions: every node has a book exercise that tests it.
- Weights: `p3` turns on reading slopes off a position graph and merely
  divides two velocities by a time for its acceleration, so
  v-t-slope-acceleration gets weight 2 there; `p7` reads a velocity
  graph and names an average velocity, so average-velocity gets weight
  1; `p9` is about the midpoint average velocity, and
  derive-motion-graphs gets weight 2 for its graph; `ap1` is about
  deriving the graphs, and acceleration-sign gets weight 2.

## Views

- Formulas: eq-line, eq-x-graph, eq-slope-x (important), eq-slope-v
  (important), eq-v-graph. All already in `chapter.json`.
- Definitions: variables $m$, $b$, $x_0$, $v$, $a$ of 2.8; the four
  glossary terms.
- Concept map: the six nodes above, with average-velocity (2.3),
  v-from-at, vbar-midpoint and v-squared (2.5) and acceleration-sign
  (2.4) tagged on examples and exercises.

## Colour

The page binds time, position, velocity and acceleration: every sim
but the first carries a time on a slider and draws a position, a
velocity or an acceleration on an axis. The straight line of Figure 2.44
is pure mathematics, so $y$, $x$, $m$ and $b$ stay in ink there, as the
chapter config says for untyped quantities. No new hue, no new macro.

## Wanted at chapter level

- variable `m` (2.8) → anchor `2.8-slopes`
- variable `b` (2.8) → anchor `2.8-slopes`
- variable `x0` (2.8) → anchor `2.8-x-t`
- variable `v` (2.8) → anchor `2.8-x-t`
- variable `a` (2.8) → anchor `2.8-v-t`
- equation `eq-line` → anchor `2.8-slopes`
- equation `eq-x-graph` → anchor `2.8-x-t`
- equation `eq-slope-x` → anchor `2.8-x-t`
- equation `eq-slope-v` → anchor `2.8-v-t`
- equation `eq-v-graph` → anchor `2.8-v-t`

The chapter pass wrote every anchor above into `chapter.json`, each one
checked against the ids of this section's `text.html`.
