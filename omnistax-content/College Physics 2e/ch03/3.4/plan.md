# Plan: 3.4 Projectile Motion (m42042)

Source: `source.md` (converted from CNXML); the summary written once from
the CNXML, since the converter prints its nested list twice. Status: built
2026-09-11 without a review stop, on Chen's instruction to finish Chapters
2 and 3 in one job.

The section that carries kinematics into the plane. Six sketch figures, no
photograph, two boxed notes (the review of the kinematic equations and the
coordinate system), two worked examples, the four numbered steps of the
projectile method, one unkeyed AP item, four conceptual questions and
twenty-seven problems, thirteen of them keyed. The PhET note is dropped per
the chapter config. One page (rule 11).

## Sub-concepts (page headers)

The book has no titled sub-headers of its own, only the run of the
argument: definitions, the four steps, two examples, the range, and the
orbit. Page structure, one block per idea:

1. `projectile` **Projectile motion and its independent components** (book:
   the definitions of projectile motion, projectile, trajectory and air
   resistance; motions along perpendicular axes are independent; the
   notation for the displacement $\mathbf{s}$ with components $\kx$ and
   $\ky$; the components of acceleration $\kay = -\kg$ and $\kax = 0$; the
   boxed review of the kinematic equations; Figure 3.34). The chapter's
   variables $\ks$, $\kx$, $\ky$, $\kxo$, $\kyo$, $\kax$, $\kay$, $\kg$,
   $\kt$ and $\theta$ anchor here.
2. `steps` **Resolving the motion: the horizontal and vertical equations**
   (book: Step 1, the components $\kvx = \kv\cos\theta$ and $\kvy =
   \kv\sin\theta$; Step 2, the boxed Horizontal Motion and Vertical Motion
   equations). The velocity components and the horizontal and vertical
   equations anchor here.
3. `recombine` **Solving and recombining** (book: Step 3, time as the one
   shared variable; Step 4, the boxed Total displacement and velocity
   equations; Figure 3.35, placed where the book places it, after the
   equations). The total displacement and velocity equations and
   $\theta_v$ anchor here.
4. `max-height` **Maximum height of a projectile** (book: Example 3.4, the
   fireworks shell, with Figure 3.36 inside it; the paragraph that turns
   part (a) into $\kh = \kvoy^2 / 2\kg$; the boxed note Defining a
   Coordinate System). $\kh$ and eq-h anchor at `max-height`; the example
   is `ex-fireworks`.
5. `impact` **Time of flight and the velocity at impact** (book: Example
   3.5, the hot rock, with Figure 3.37 inside it). The example is
   `ex-rock`.
6. `range` **The range of a projectile** (book: Galileo and the range on
   level ground, Figure 3.38, the effect of initial speed and angle, the
   range equation). $\kR$, $\theta_0$ and eq-range anchor here.
7. `orbit` **From range to orbit** (book: the Earth curving away beneath a
   long range, Figure 3.39, the look ahead to Addition of Velocities).

Cross references to sections are plain text ("Problem-Solving Basics for
One-Dimensional Kinematics", "Kinematics in Two Dimensions: An
Introduction", "Vector Addition and Subtraction: Analytical Methods",
"Addition of Velocities"). The book's bold vectors $\mathbf{s}$ and
$\mathbf{v}$ are set bold in ink; their magnitudes and components take
the `\k` macros. The generic $A$, $A_x$, $A_y$ of Steps 1 and 4 stay in
plain LaTeX, since here they stand for any vector rather than the
displacements of 3.3.

Learning objectives, section summary and glossary come out of the running
text into the views. The conceptual questions, the problems and the AP
item taken from 3.2 go to the Exercises document; the chapter has no Check
Your Understanding boxes, so nothing is inline.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| projectile-motion | idea | projectile | glossary (projectile, projectile motion, trajectory, air resistance); CQ 1, 2, 4 |
| projectile-horizontal-motion | result, eq-proj-x | steps | the Horizontal Motion box; Example 3.4(c); problems 1, 3, 23; the AP item from 3.2 |
| projectile-vertical-motion | result, eq-proj-y | steps | the Vertical Motion box; Examples 3.4(a), (b), 3.5(a); problems 1, 3, 13, 15, 17; the AP item from 3.2 |
| projectile-analysis | skill, eq-v-mag | recombine | the four steps and the Total displacement and velocity box; Examples 3.4 and 3.5; problems 3, 5, 13, 15, 17, 21 |
| maximum-height | result, eq-h | max-height | Example 3.4(a) and the paragraph after it; problems 9, 23 |
| range | result, eq-range | range | Figure 3.38; CQ 3; problems 5, 7, 9, 11, 19, 21, 23, 25 |

The section leans on `independence-of-perpendicular-motions` (3.1),
`components-from-magnitude-angle` and `magnitude-direction-from-components`
(3.3), `free-fall-kinematics` and `free-fall-highest-point` (2.7),
`x-from-vbar`, `choose-equation` and `physical-solution` (2.5 and 2.6),
all of which the coverage rows mark as used where the text uses them.

## Figures

id · replaces · concepts · what moves · sliders · headline · graph · 3D

1. `demo-displacement` · replaces Figure 3.34 (the soccer ball and its
   total displacement) · projectile-motion, projectile-analysis · **moves**:
   a ball kicked from the origin flies along its parabola for one flight,
   and at every instant the total displacement $\mathbf{s}$ is drawn from
   the kick to the ball with its components $\kx$ and $\ky$ as drop lines
   and the angle $\theta$ arced at the origin; the idea has a time in it
   (the ball is somewhere along its path), so it loops once per flight and
   gets the scrubber · initial speed $\kvo$ (10 to 40 m/s, default 20,
   velocity), launch angle $\theta_0$ (15º to 80º, default 50º, ink) · "t =
   1.20 s · the ball is 15.4 m along and 12.5 m up, so s = 19.9 m at 39.0º
   above the horizontal" · none: the trajectory is the picture · no.
   Readout: $\ks = \sqrt{\kx^2 + \ky^2}$ with the numbers; small line on
   $\theta = \tan^{-1}(\ky/\kx)$. Draws position, velocity, time.
2. `demo-components` · replaces Figure 3.35 (a) to (d) (the velocity and
   its components along the trajectory) · projectile-horizontal-motion,
   projectile-vertical-motion, projectile-analysis · **moves**: the
   projectile flies once from launch to landing on level ground; every
   frame draws $\kvx$ (constant), $\kvy$ (shrinking, zero at the top, then
   growing downward) and their resultant $\kv$ with $\theta_v$ at the
   projectile, and the acceleration arrow $\kay = -\kg$ pointing straight
   down whatever the velocity does; hollow marks trace the positions
   already passed, as the book's part (a) does · initial speed $\kvo$ (10
   to 40 m/s, default 25, velocity), launch angle $\theta_0$ (10º to 80º,
   default 60º, ink) · "t = 1.50 s · vx stays at 12.5 m/s while vy has
   fallen from 21.7 m/s to 6.9 m/s" · graph below, two panels side by side:
   $\kvx$ against $\kt$ (a flat line, the book's part (b)) and $\kvy$
   against $\kt$ (a line of slope $-\kg$ crossing zero at the apex, the
   book's part (c)), with the moving point on each · no. Readout: $\kv =
   \sqrt{\kvx^2 + \kvy^2}$ and $\theta_v = \tan^{-1}(\kvy/\kvx)$ with the
   live numbers. Draws velocity, acceleration, time.
3. `demo-fireworks` · replaces Figure 3.36 (the fireworks shell) ·
   maximum-height, projectile-vertical-motion, projectile-horizontal-motion
   · **moves**: the shell rises from the launch point to its apex, where
   the fuse fires and a burst is drawn; the height $\kh$ is bracketed
   beside the path and the horizontal displacement $\kx$ under it; one
   run to the apex per loop, with the scrubber · initial speed $\kvo$ (30
   to 100 m/s, default 70.0, velocity), launch angle $\theta_0$ (30º to
   89º, default 75.0º, ink) · "t = 6.90 s · the shell reaches its highest
   point, 233 m up and 125 m along, where vy = 0" · graph beside the tall
   scene: $\kvy$ against $\kt$ falling from $\kvoy$ to zero at the apex,
   which is what makes the apex the highest point · no. Readout: $\kh =
   \kvoy^2 / 2\kg$ with the numbers; small line on the time to the top and
   the horizontal displacement $\kx = \kvx\kt$. Draws position, velocity,
   acceleration, time.
4. `demo-rock` · replaces Figure 3.37 (the hot rock from Kilauea) ·
   projectile-analysis, projectile-vertical-motion,
   projectile-horizontal-motion, physical-solution · **moves**: the rock
   leaves the rim, rises and falls to the slope 20.0 m below, and at
   impact its velocity is drawn with its components and the angle
   $\theta_v$ below the horizontal; one flight per loop, with the scrubber
   · initial speed $\kvo$ (10 to 40 m/s, default 25.0, velocity), launch
   angle $\theta_0$ (0º to 70º, default 35.0º, ink), the drop to the
   landing point $\ky$ (−60 to −5 m, default −20.0 m, position) · "t =
   3.96 s · the rock lands 20.0 m below its start at 31.9 m/s, 50.1º below
   the horizontal" · graph below: $\ky$ against $\kt$, the parabola
   crossing the landing level twice, the negative root hollow and greyed
   as an event before the launch · no. Readout: the quadratic and its two
   roots; small line with $\kv$ and $\theta_v$ at impact. Draws position,
   velocity, acceleration, time.
5. `demo-range` · replaces Figure 3.38 (a) and (b) (trajectories on level
   ground) · range, maximum-height · **moves**: the projectile flies its
   trajectory once per loop while the range is bracketed beneath; the
   complementary angle's trajectory is drawn dashed and lands at the same
   range, and the 45º trajectory is drawn faint as the farthest; the
   book's (a) is reproduced by sliding $\kvo$ through 30, 40 and 50 m/s at
   45º and its (b) by sliding $\theta_0$ through 15º, 45º and 75º at 50
   m/s · initial speed $\kvo$ (10 to 60 m/s, default 50, velocity), launch
   angle $\theta_0$ (5º to 85º, default 45º, ink) · "t = 3.61 s · at 45º a
   50 m/s launch lands 255 m away, the farthest this speed can reach" ·
   graph below: $\kR$ against $\theta_0$ for the set speed, the arch of
   $\sin 2\theta_0$ with the current angle and its complement marked at
   the same height · no. Readout: $\kR = \kvo^2 \sin 2\theta_0 / \kg$
   with the numbers; small line naming the complementary angle and its
   different maximum height. Draws position, velocity, acceleration, time.
6. `demo-orbit` · replaces Figure 3.39 (the tower and the satellite) ·
   range · **moves**: a projectile leaves a tall tower horizontally and
   falls around the Earth under gravity that always points at the centre,
   until it hits the surface or completes an orbit; the arc of surface it
   covers is marked, the paths of a few slower launches are drawn faint,
   and the acceleration arrow turns as the projectile goes round; one
   flight, or one orbit, per loop, with the scrubber · launch speed
   $\kvo$ (1.0 to 9.0 km/s, step 0.1, default 6.0, velocity; above 9
   km/s the ellipse grows too large for the picture), tower height (200
   to 3,000 km, default 1,000, ink, since it is a length of the scene) ·
   "t = 15.1 min · it lands 5,200 km along the curved surface, against
   2,710 km on level ground"; at orbital speed, "the Earth curves away as
   fast as the projectile falls: it is in orbit" · none: the Earth is the
   picture · no. The
   motion is integrated under the inverse-square attraction with the
   Earth's radius 6,370 km and $\kg$ = 9.80 m/s² at the surface, which is
   what the text describes and beyond what it computes; the readout gives
   the level-ground range $\kR = \kvo\sqrt{2h/\kg}$ for comparison and
   the small line says how much farther the projectile went. Draws
   position, velocity, acceleration, time.

Every book figure of the section is a sketch and is replaced; no
photograph to keep or drop. Problems 7 and 8 refer to Figure 3.38, which
`demo-range` replaces with the book's numbers reachable on its sliders and
the book's image as its original, so no separate exercise figure is
needed.

Extra simulations (rule 15), considered and left:

- Two coins flicked and nudged off a table (conceptual question 4): the
  independence of the two motions is already what `demo-components` shows
  with its flat $\kvx$ line, and 3.1 built the horizontal throw. Left.
- The trajectory with air resistance beside the ideal parabola (the text's
  38º against 45º): a real view the text does not give, but the book has
  no drag model to be faithful to, so anything drawn would be invented.
  Left.
- The trajectory as $y = ax + bx^2$ (problem 24): a graph-only figure
  that repeats what every demo already draws. Left.

None built.

## Exercises

- No Check Your Understanding boxes; nothing inline.
- 4 conceptual questions, `cq1` to `cq4`, Understand, with AI-written
  suggested approaches, citing `steps`, `projectile`, `range` and
  `projectile`.
- 1 AP item taken from 3.2 with `source_section: "3.2"`: `ap1`
  (fs-id2061889, the ball launched at 60º with its table of heights,
  keyed with the book's description of the graphs), Analyze, an open
  answer; the table travels with the item as a `table.data`. 3.2's own
  first AP item (fs-id1398128, the vertical launch) is unkeyed and left
  out there. The section's own AP item (fs-id1316152, the horizontal
  launch from 2.00 m) is unkeyed and left out.
- 13 problems keyed and kept: `p1` (x and y after 3.00 s, multi), `p3`
  (the ball off the 60.0 m building, multi with the impact speed and
  angle), `p5` (the archer's angle, number for (a) with (b) in the
  solution), `p7` (the ranges of Figure 3.38(a), multi), `p9` (the
  battleship's shell, multi), `p11` (the standing broad jump, number),
  `p13` (the tennis serve, multi with the angle and the landing point),
  `p15` (the gun sighted at 100.0 m, number for (a) with (b) in the
  solution), `p17` (the owl and the mouse, number), `p19` (the
  goalkeeper's kick, number, the book's "about 92 m"), `p21` (the shot
  put, number), `p23` (the punt in a gust, multi), `p25` (the derivation
  of the range equation, open with the book's derivation).
- 14 problems left out, having no answer in the book's key: 2
  (fs-id1275043), 4 (fs-id2197387), 6 (fs-id1934878), 8 (fs-id2214647),
  10 (fs-id1925728), 12 (fs-id1875777), 14 (fs-id2173828), 16
  (fs-id2177814), 18 (fs-id1403577), 20 (fs-id1437858), 22
  (fs-id1670278), 24 (fs-id2046931), the Unreasonable Results item
  (fs-id1794949) and the Construct Your Own Problem item (fs-id1815382).
- Held for a later page: nothing. The Critical Thinking item of 3.5 on
  the two launchers turns on the maximum height, but 3.5 is being built in
  this job and keeps it with its own problems.
- No generated questions: every node has a book exercise.
- Weights: `p7` and `p19` turn on the range equation alone and touch
  nothing else; `p11` gives `range` its full value and `projectile-analysis`
  weight 1, since the launch speed comes from a 2.5 equation and the range
  equation does the rest; `p21` gives `range` weight 1, since the release
  height keeps it from applying; `p25` gives `projectile-horizontal-motion`
  and `projectile-vertical-motion` weight 2 beside the full value for
  `range`.

## Views

- Formulas: the fourteen equations of the section already in
  `chapter.json`, the boxed ones important and the component relations
  not.
- Definitions: the twenty variables of the section; the seven glossary
  terms.
- Concept map: the six nodes above with their edges into 2.5, 2.6, 2.7,
  3.1 and 3.3.

## Colour

The page binds position, velocity, acceleration and time: every demo
carries $\kvo$ on a slider and draws the velocity and its components, four
of them bracket a height, a range or a displacement in the position hue,
the rock demo carries the landing depth $\ky$ on a slider, the
acceleration arrow $\kay = -\kg$ is drawn in the components, fireworks,
rock and orbit demos and $\kg$ is stated in every readout, and every
headline states the time. Angles ($\theta_0$, $\theta$, $\theta_v$) and
the tower height stay in ink.

## Wanted at chapter level

- variables `s` → 3.4-projectile
- variables `x` → 3.4-projectile
- variables `y` → 3.4-projectile
- variables `x0` → 3.4-projectile
- variables `y0` → 3.4-projectile
- variables `a_x` → 3.4-projectile
- variables `a_y` → 3.4-projectile
- variables `g` → 3.4-projectile
- variables `t` → 3.4-projectile
- variables `θ` → 3.4-projectile
- variables `v` → 3.4-steps
- variables `v_x` → 3.4-steps
- variables `v_y` → 3.4-steps
- variables `v_0x` → 3.4-steps
- variables `v_0y` → 3.4-steps
- variables `v0` → 3.4-max-height
- variables `θ_v` → 3.4-recombine
- variables `h` → 3.4-max-height
- variables `R` → 3.4-range
- variables `θ_0` → 3.4-range
- equations `eq-vx-comp` → 3.4-steps
- equations `eq-vy-comp` → 3.4-steps
- equations `eq-proj-x` → 3.4-steps
- equations `eq-proj-vx` → 3.4-steps
- equations `eq-proj-y-avg` → 3.4-steps
- equations `eq-proj-vy` → 3.4-steps
- equations `eq-proj-y` → 3.4-steps
- equations `eq-proj-vy2` → 3.4-steps
- equations `eq-s` → 3.4-recombine
- equations `eq-s-direction` → 3.4-recombine
- equations `eq-v-mag` → 3.4-recombine
- equations `eq-v-direction` → 3.4-recombine
- equations `eq-h` → 3.4-max-height
- equations `eq-range` → 3.4-range
- The `θ_0` variable row's meaning, "initial angle of the velocity above
  the horizontal", is first used in Step 1 of `steps` (as $\theta$) and
  named $\theta_0$ in Example 3.4; anchoring it at `range`, where the
  range equation makes it the section's own symbol, is a judgement call
  and `max-height` would do as well.
