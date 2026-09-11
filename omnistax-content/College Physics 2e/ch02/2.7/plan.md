# Plan: 2.7 Falling Objects (m42102)

Source: `source.md` (converted from CNXML). Book pages 91 to 99. Figures
2.37 to 2.43, Examples 2.14 to 2.16, Table 2.1.
Status: built 2026-09-11 without a review stop, on Chen's instruction to
finish Chapters 2 and 3 in one job.

The section applies the constant-acceleration equations of 2.5 to
straight up and down motion: seven figures, all of them drawings (one
illustration, three strategy sketches, three graph sheets; no
photographs), three worked examples, one table, one Check Your
Understanding box, one AP item, six conceptual questions and eighteen
problems, nine of them keyed. The PhET note (Equation Grapher) is dropped
per the chapter config.

## Sub-concepts (page headers)

The book has two headers, Gravity and One-Dimensional Motion Involving
Gravity, and the second runs through three examples. Page structure, one
block per idea, span ids as the chapter's anchors expect them:

1. (opening paragraph, before the first block: the mine shaft)
2. `gravity` **Gravity and free fall** (book: the hammer and the feather,
   air resistance and friction, the definition of free-fall). Figure 2.37
   is replaced here.
3. `accel-gravity` **The acceleration due to gravity** (book: the force of
   gravity, the symbol $g$ and its average value, the range 9.78 to 9.83
   m/s², the direction that defines vertical, $a = -g$ or $a = +g$ by the
   choice of coordinate system). The chapter's variable `g` and the
   equation `eq-g` anchor here.
4. `vertical-motion` **One-dimensional motion involving gravity** (book:
   the simplest situations, $y$ for vertical displacement, the boxed
   kinematic equations for free fall). The variables `y`, `y0`, `v0`,
   `v`, `a`, `t` and the equations `eq-ff-v`, `eq-ff-y`, `eq-ff-v2`
   anchor here.
5. `rock-up` **A rock thrown upward** (book: Example 2.14 as `ex-rock-up`
   with Table 2.1 as a `div.book-table`, Figure 2.39 replaced by a demo,
   then the Take-Home Experiment on reaction time). Problem 1, which is
   Example 2.14 with a different initial velocity, goes inline at the end
   of this block.
6. `rock-down` **A rock thrown downward** (book: Example 2.15 as
   `ex-rock-down`, Figure 2.41 replaced by a demo, the "another way to
   look at it" paragraph).
7. `find-g` **Finding g from data on a falling object** (book: Example
   2.16 as `ex-find-g`, Figure 2.42 replaced by a demo). The equation
   `eq-a-from-fall` anchors at `ex-find-g`. The Check Your Understanding
   box (the chunk of ice) goes inline at the end of this block, where the
   book has it.
8. `well` **The depth of a mine shaft** (no book prose: one sentence of
   lead and the extra demo below, which draws the section's opening
   example).

The three "Draw a sketch" figures (2.38, 2.40, 2.43) are strategy sketches
with empty captions; each is kept as an original of the demo that follows
its example, as 2.5 did with its own sketches, so no figure row carries
those numbers and the text never refers to them. The source's `$$$`
artifact in the 9.78 to 9.83 sentence, the stray caret after the second
$-9.80\ \text{m/s}^2$ of the discussion, and the italic marks round $y_2$
are converter noise and are not reproduced. The book's own "$t =
0.45173$" without a unit in Example 2.16 is kept as printed.

Learning objectives, section summary and glossary come out of the running
text into the views. The AP item, the conceptual questions and the
problems go to the Exercises document.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| free-fall | idea | gravity | glossary; the hammer and the feather; CQ 4 |
| acceleration-due-to-gravity | idea, eq-g | accel-gravity | glossary; the boxed value; CQ 1, 2, 5, 6; Example 2.16 |
| free-fall-kinematics | result, eq-ff-y | vertical-motion | the boxed equations; Examples 2.14 to 2.16; CYU; problems 1, 3, 5, 7, 9, 11, 13, 15, 17 |
| free-fall-highest-point | result | ex-rock-up | the discussion of Example 2.14; CQ 1, 2, 6; problems 3, 5, 17 |
| free-fall-symmetry | result | ex-rock-down | Example 2.15 and its discussion; CQ 3, 4; problems 7, 9 |
| g-from-fall-time | skill, eq-a-from-fall | ex-find-g | Example 2.16; the AP item on the asteroid |

`ex-rock-down` also uses `physical-solution` (2.5: the negative root is
chosen), `ex-find-g` uses `precision` (1.3), and `accel-gravity` uses
`coordinate-system` (2.2).

## Figures

id · replaces · concepts · what moves · sliders · headline · graph · 3D

1. `demo-hammer-feather` · replaces Figure 2.37 · free-fall,
   acceleration-due-to-gravity · a hammer and a feather are let go
   together from the same height in two panels, in air and in a vacuum;
   in the vacuum they stay side by side all the way down, and in air the
   feather drifts down slowly and lags behind (its drift is drawn
   qualitatively, with no number, since the book gives none) · $\kg$ in
   m/s² (1.00 to 20.00, step 0.01, default 9.80, acceleration hue; the
   Moon's 1.67 is on the slider), the drop height h in m (0.5 to 5.0,
   step 0.1, default 2.0, ink) · "t = 0.31 s · in a vacuum the hammer
   and the feather have fallen the same 0.47 m together, while in air the
   feather lags behind" and at the floor "both reach the floor at t =
   0.64 s, having fallen 2.0 m with the same acceleration g = 9.80 m/s²"
   · none · no. Moving: something falls, one finite drop per loop in
   about 5 real seconds, so it gets the scrubber. Readout $\ky = -\tfrac{1}{2}\kg\kt^2$
   with the live numbers; small line: the mass does not appear in the
   equation, and on the Moon the same fall takes the time the slider
   would give. Draws time, position, acceleration.
2. `demo-rock-up` · replaces Figure 2.39 (Figure 2.38, the strategy
   sketch, is its second original) · free-fall-kinematics,
   free-fall-highest-point, acceleration-due-to-gravity · a rock leaves
   the edge of a cliff straight up at $\kvo$, rises to its highest point,
   stops there for an instant and falls past the edge; its velocity
   arrow shrinks, reverses and grows, and its acceleration arrow points
   down the whole time; the highest point is marked with a hollow dot
   and the time and height it is reached · $\kvo$ in m/s (0.0 to 25.0,
   step 0.1, default 13.0, velocity hue), $\kg$ in m/s² (1.00 to 20.00,
   step 0.01, default 9.80, acceleration hue), the time shown $\kt$ in s
   (0.5 to 8.0, step 0.05, default 3.00, time hue) · "t = 1.00 s · y =
   8.10 m and v = +3.20 m/s, so the rock is above its start and still
   rising, and a = −9.80 m/s² as it is throughout"; at the top "at t =
   1.33 s the rock is at its highest point, 8.62 m: its velocity is zero,
   but its acceleration is still −9.80 m/s²" · three graphs beside the
   scene, stacked as the book stacks them: $\ky$ against $\kt$, $\kv$
   against $\kt$, $\ka$ against $\kt$, the moving point on each · no. The
   scene is vertical, so the graphs go beside it. Moving: the rock
   travels, one finite flight per loop in about 5 real seconds, with the
   scrubber. Readout: the position and velocity equations with the live
   time substituted; small line: the rock is highest at t = v₀/g, where v
   = 0 and y = v₀²/2g. Draws time, position, velocity, acceleration.
3. `demo-rock-down` · replaces Figure 2.41 (Figure 2.40, the strategy
   sketch, is its second original) · free-fall-symmetry,
   free-fall-kinematics · two rocks leave the same cliff edge at the same
   instant, one thrown straight up at $+\kvo$ and one straight down at
   $-\kvo$, and both fall to the same level $\ky$ below the start; the
   rock thrown down arrives first and waits there with its arrival
   velocity written beside it, and the rock thrown up leaves a hollow
   mark with a velocity arrow at every whole second, as in the book's
   figure, and arrives with the same velocity · $\kvo$ in m/s (1.0 to
   25.0, step 0.1, default 13.0, velocity hue), the level reached $\ky$
   in m (−40.0 to −1.0, step 0.1, default −5.10, position hue), $\kg$ in
   m/s² (1.00 to 20.00, step 0.01, default 9.80, acceleration hue) · "t =
   2.99 s · thrown up, the rock reaches −5.10 m at −16.4 m/s, the same
   velocity the rock thrown down had there at t = 0.34 s" · beside the
   scene, on the same height scale, $\kv$ across against $\ky$ up: the
   single parabola $\kv^2 = \kvo^2 - 2\kg(\ky - \kyo)$ that both rocks
   ride, the rock thrown up going over its top from the right branch to
   the left, the rock thrown down starting on the left branch · no.
   Moving: both rocks travel, one finite flight per loop in about 5 real
   seconds, with the scrubber. Readout: the velocity-squared equation
   with the numbers and its negative root; small line: v₀² is the same
   either way, so at any height below the start the speeds agree, and
   the rock thrown up passes y = 0 again at −v₀. Draws time, position,
   velocity, acceleration.
4. `demo-drop` · replaces Figure 2.42 (Figure 2.43, the strategy sketch,
   is its second original) · g-from-fall-time, free-fall-kinematics · a
   metal ball is released from rest and falls the measured distance in
   the measured time, leaving a strobe mark every 0.1 s with its position
   and velocity written beside it, as in the book's figure; the
   acceleration, and so $\kg$, follows from the two measurements · the
   distance fallen d in m (0.2000 to 3.0000, step 0.0001, default
   1.0000, position hue), the fall time $\kt$ in s (0.20000 to 1.00000,
   step 0.00001, default 0.45173, time hue) · "t = 0.30 s · the ball has
   fallen 0.441 m and is moving at −2.94 m/s" and at the end "the ball
   falls 1.0000 m in 0.45173 s, which gives g = 9.8010 m/s² at this
   place" · three graphs beside the scene, $\ky$, $\kv$ and $\ka$ against
   $\kt$, the strobe points marked on the first two · no. The scene is
   vertical, so the graphs go beside it. Moving: the ball falls, one
   finite drop per loop in about 4 real seconds, with the scrubber.
   Readout: $\ka = 2(\ky - \kyo)/\kt^2$ with the numbers and $\kg$ from
   it; small line: position grows with the square of the time, velocity
   in proportion to it, and the acceleration is the same at every
   instant. Draws time, position, velocity, acceleration.
5. `demo-well` · new (the extra simulation below) · free-fall-kinematics
   · a rock is dropped into a shaft and falls to the water; from the
   splash a sound climbs back up at the speed of sound, and the clock
   reads the two legs, the long fall and the short return · the depth d
   in m (5 to 200, step 1, default 40, position hue), the speed of sound
   $\kv_{\text{s}}$ in m/s (300 to 360, step 1, default 340, velocity
   hue) · "the splash is heard 2.97 s after the drop: 2.86 s of fall and
   0.12 s for the sound to climb 40 m" · beside the shaft, on the same
   height scale, the height of the rock and then of the sound against
   $\kt$: the parabola of the fall and the straight line of the sound
   back up · no. Moving: the rock falls and the sound rises, one finite
   round trip per loop in about 5 real seconds, with the scrubber.
   Readout: the fall time from $\sqrt{2d/\kg}$ and the sound's time from
   $d/\kv_{\text{s}}$; small line: taking the whole time as fall time
   would overstate the depth by the amount the numbers give. Draws time,
   position, velocity, acceleration.

Photographs: none. Figure 2.37 is an illustration (three drawn panels, in
air, in a vacuum and on the Moon), so it is a sketch the demo replaces and
its image is the demo's original.

Figures that serve exercises: none. No problem of the section refers to a
figure.

Extra simulations (rule 15), thought through and judged:

- The depth of a mine shaft from the splash: **built** as `demo-well`.
  The section opens with it ("we can estimate the depth of a vertical
  mine shaft by dropping a rock into it and listening"), problem 15
  turns on it, and no required figure shows a fall followed by a second
  leg on the same clock, or how neglecting the sound's travel overstates
  the depth.
- The reaction-time ruler of the Take-Home Experiment: **left**. It is
  the drop demo with a ruler in place of the ball; the view is the same.
- A jump on Earth and on the Moon side by side (conceptual questions 5
  and 6): **left**. The rock-up demo's $\kg$ slider already shows the
  highest point rise as $\kg$ falls, so a second figure would only
  animate that comparison.
- The Vomit Comet: **left**. The book defers it to a later chapter.

## Tables

Table 2.1, Results (four columns: time, position, velocity,
acceleration, for the rock of Example 2.14), in `rock-up` inside the
example, as a `div.book-table` numbered as openstax.org numbers it.

## Exercises

- 1 Check Your Understanding, `cyu-ice` (the ice falling 30.0 m), a
  number, inline after `find-g`, citing `vertical-motion`.
- 1 AP item, `ap-asteroid` (the spacecraft falling toward an asteroid), a
  choice with the book's key (c).
- 6 conceptual questions, `cq1` to `cq6`, each with an AI-written
  suggested approach, marked.
- 9 problems keyed and kept: `p1` (ball thrown up at 15.0 m/s, eight
  values, inline after `rock-up` since it is Example 2.14 with a
  different number), `p3` (the basketball player's takeoff velocity),
  `p5` (the dolphin, parts b and c keyed, part a's list of knowns in the
  solution), `p7` (the cliff height and the time thrown down), `p9` (the
  tree branch), `p11` (Mt. Arapiles), `p13` (Half Dome), `p15` (the well,
  with and without the sound's travel), `p17` (the coin from the
  balloon). Problem 13's part (a) is keyed as −70.0 m/s, and that signed
  value is what is checked.
- 9 problems left out, having no answer in the book's key: 2
  (fs-id1746555, the Verrazano Narrows Bridge), 4 (fs-id1582773, the
  life preserver), 6 (fs-id1818111, the swimmer), 8 (fs-id2576295, the
  shot putter), 10 (fs-id4076783, the kangaroo), 12 (fs-id776278, the
  object dropped from 75.0 m), 14 (fs-id4044798, the window), 16
  (fs-id2561073, the steel ball), 18 (fs-id3597625, the tennis ball).
- Nothing held for a later page and nothing taken from another section.
  Problems 2 and 4 of 2.4 express accelerations in multiples of $g$ but
  test average acceleration, so they stay with 2.4; the AP item of 2.2
  drops a feather but asks about the coordinate system, so it stays with
  2.2.
- No generated questions: every node has a book exercise that tests it.
- Weights: `cq4` (air resistance) turns on free-fall and only touches
  the symmetry result, so `free-fall-symmetry` gets weight 1 there;
  `cq5` and `cq6` turn on the value of $g$ and use the kinematics only
  as a proportion, so `free-fall-kinematics` gets weight 1 on both.

## Views

- Formulas: eq-g, eq-ff-v, eq-ff-y, eq-ff-v2 (important),
  eq-a-from-fall (not important). All already in `chapter.json`.
- Definitions: variables g, y, y0, v0, v, a, t; the two glossary terms.
- Concept map: the six nodes above, with physical-solution (2.5),
  precision (1.3) and coordinate-system (2.2) tagged on the spans that
  use them.

## Colour

The page binds time, position, velocity and acceleration: every demo
carries a time, a position or a velocity on its sliders and draws $g$ in
the acceleration hue. The drop height of the hammer and the feather is a
length of the scene and stays in ink. No new hue, no new macro; `\ky`,
`\kyo` and `\kg` are already in the symbol table.

## Wanted at chapter level

- variable `g` (2.7) → anchor `2.7-accel-gravity`
- variable `y` (2.7) → anchor `2.7-vertical-motion`
- variable `y0` (2.7) → anchor `2.7-vertical-motion`
- variable `v0` (2.7) → anchor `2.7-vertical-motion`
- variable `v` (2.7) → anchor `2.7-vertical-motion`
- variable `a` (2.7) → anchor `2.7-vertical-motion`
- variable `t` (2.7) → anchor `2.7-vertical-motion`
- equation `eq-g` → anchor `2.7-accel-gravity`
- equation `eq-ff-v` → anchor `2.7-vertical-motion`
- equation `eq-ff-y` → anchor `2.7-vertical-motion`
- equation `eq-ff-v2` → anchor `2.7-vertical-motion`
- equation `eq-a-from-fall` → anchor `2.7-ex-find-g`
