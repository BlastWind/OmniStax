# Plan: 3.5 Addition of Velocities (m42045)

Source: `source.md` (converted from CNXML). Status: built 2026-09-11
without a review stop, on Chen's instruction to finish Chapters 2 and 3
in one job.

The last section of the chapter: two titled runs of text, three worked
examples (a boat on a river, a plane in a wind, a coin dropped in an
airliner), ten sketches and no photographs, four boxed equations, two
notes (the take-home experiment with the toy boat, and Relativity and
Einstein, which sits inside Example 3.8 in the CNXML and stays there), a
PhET note dropped per config, five conceptual questions, nineteen
problems and one keyed Critical Thinking item. No Check Your Understanding
boxes and no AP items. It stays one page (rule 11).

## Sub-concepts (page headers)

The book's own headers are "Relative Velocity" (which runs from the boat
and the plane through the equations and both examples) and "Relative
Velocities and Classical Relativity". Page structure, one block per idea,
span ids as the chapter's anchors expect them:

1. `relative-velocity` **Velocity relative to a medium and to an
   observer** (book: the boat that moves diagonally, the plane carried
   sideways, Figures 3.40 and 3.41, and the paragraph that says the
   velocity relative to the observer is the sum of the two). Introduces
   `relative-velocity`.
2. `velocity-addition` **Adding velocities by components** (book: "How
   do we add velocities?", the hockey player in one dimension, the four
   boxed equations, Figure 3.42, the paragraph on which pair finds
   which, and the take-home experiment as a note). Introduces
   `velocity-addition`; the chapter's `v`, `v_x`, `v_y`, `θ` and the
   four boxed equations anchor here.
3. `boat` **A boat on a river**: Example 3.6 as `<div class="example"
   id="ex-boat">`, with Figure 3.43 folded into the sim of block 1 (see
   Figures). The chapter's `v_tot`, `v_boat`, `v_river` anchor at
   `ex-boat`.
4. `plane` **A plane in a wind**: Example 3.7 as `ex-plane`, its Figure
   3.44 replaced by a sim of the inverse problem, and the book's
   closing paragraph on choosing a coordinate system with one axis
   parallel to one of the velocities. The chapter's `v_totx`, `v_toty`,
   `v_p`, `v_px`, `v_py`, `v_w`, `v_wx`, `v_wy` and `eq-wind-components`
   anchor at `ex-plane`.
5. `relativity` **Relative velocities and classical relativity** (the
   book's own header: relative velocities defined, relativity and
   Einstein, classical relativity below 1% of the speed of light, the
   binoculars dropped from the mast, Figure 3.45). Introduces
   `classical-relativity` and reinforces `relative-velocity`, since this
   is where the book defines the term. The two shortest conceptual
   questions (the frames you use when driving, the basketball player
   who need not watch the ball) go inline here as Understand checks.
6. `coin` **A coin dropped in an airliner**: Example 3.8 as `ex-coin`,
   with Figure 3.46 and the Relativity and Einstein note inside the
   example, where the module has it.
7. `galaxies` **The galaxies of the problems**: the faithful copy of
   the five-galaxy figure that problem 13 takes its data from, as 2.1
   did for its paths.

The book's cross-references to 3.2 and 3.3 ("Vector Addition and
Subtraction: Graphical Methods") stay as the section titles in plain
text. Learning objectives, the summary and the glossary come out into
the views. The glossary prints `velocity` and `vector addition` again,
which are 2.3's and 3.2's ideas: the rows are in `chapter.json` as the
book prints them, and no new node is made for either.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| relative-velocity | idea | relative-velocity (reinforced in relativity) | glossary; Figures 3.40, 3.41; CQ 1, 2; problems 1, 3, 13 |
| velocity-addition | skill, eq-vel-mag | velocity-addition | glossary (vector addition); the four boxed equations; Examples 3.6, 3.7; problems 1, 5, 7, 9, 11, 15 |
| classical-relativity | idea | relativity | glossary (relativity, classical relativity); Figures 3.45, 3.46; Example 3.8; CQ 3, 4, 5 |

Example 3.8 also leans on `projectile-motion` and
`projectile-vertical-motion` (3.4), `free-fall-kinematics` (2.7) and
`physical-solution` (2.5, the negative root chosen); Examples 3.6 and 3.7
on `analytical-vector-addition` (3.3) and `coordinate-system` (2.2).

## Figures

id · replaces · concepts · what moves · sliders · headline · graph · 3D

1. `sim-boat` · replaces Figure 3.40 (the boat that moves diagonally)
   and carries Figure 3.43 (the same boat with Example 3.6's numbers) as
   a further original, since the example adds no quantity the section
   figure does not show · relative-velocity, velocity-addition · a boat
   sets out from the near bank of a 25 m river pointed straight across
   and is carried downstream as it crosses; the current's streaks drift
   with the river, the three velocity arrows ride on the boat, and the
   dashed line is its path relative to the shore · `\kvboat` (0.10 to
   3.00 m/s, default 0.75, velocity), `\kvriver` (0 to 3.00 m/s, default
   1.20, velocity), heading (30° to 150° from downstream, default 90°,
   ink; 90° is straight across as the book has it) · "the boat lands
   40.0 m downstream after 33.3 s; relative to the shore it moves at
   1.42 m/s, 32.0° from the bank" · the velocity triangle beside the
   scene, drawn as the book draws it, with the numbers on each arrow · no.
   Moves: the crossing has a time in it (the boat drifts as it crosses),
   finite, one crossing in about 5 real seconds, so it gets the
   scrubber. Readout: $\kvtot = \sqrt{\kvx^2 + \kvy^2} = 1.42$ m/s and
   $\theta = \tan^{-1}(\kvy/\kvx) = 32.0°$, with the book's small-angle
   discussion as the small line; with the heading off 90° the readout
   shows $\kvx = \kvriver + \kvboat\cos\phi$ and the small line says
   where the boat lands. Draws velocity.
2. `sim-plane` · replaces Figure 3.41 (the plane carried west by the
   wind) · relative-velocity · a plane pointed due north flies over a
   map while the wind's streaks drift across it; the plane's track runs
   along its total velocity, off its heading · `\kvp` (0 to 70 m/s,
   default 45.0, velocity), `\kvw` (0 to 40 m/s, default 16.0,
   velocity), the direction the wind blows toward (0° to 360°
   counterclockwise from east, default 215.6°, ink). The defaults are
   the wind Example 3.7 finds, so the track comes out at 38.0 m/s, 20.0°
   west of north, and the figure agrees with 3.44 on load · "t = 6.0 s ·
   the plane points north at 45.0 m/s but moves at 38.0 m/s, 20.0° west
   of north, relative to the ground" · the velocity triangle beside the
   scene, with x (east) and y (north) axes as the book labels them ·
   no. Moves: the plane crosses the map, finite (it runs until it leaves
   the map, about 5 real seconds), scrubber. Readout: $\kvtot =
   \sqrt{(\kvpx + \kvwx)^2 + (\kvpy + \kvwy)^2}$ with the numbers; small
   line names the direction in the book's compass words. Draws velocity.
3. `sim-components` · replaces Figure 3.42 (a velocity and its
   components) · velocity-addition · still · `\kv` (0.20 to 5.00 m/s,
   default 1.42, velocity), θ (−180° to 180°, default 32.0°, ink); the
   defaults are Example 3.6's total velocity, so the components come
   back as 1.20 m/s and 0.75 m/s · "a velocity of 1.42 m/s at 32.0° has
   components 1.20 m/s along x and 0.752 m/s along y" · none, the vector
   diagram is the idea · no. Still: it answers its sliders and nothing
   else, so no cycle and no transport. Readout: $\kvx = \kv\cos\theta$
   and $\kvy = \kv\sin\theta$ with the numbers; the small line runs the
   other two equations back from the components, and says when a
   calculator's $\tan^{-1}$ needs 180° added. Draws velocity.
4. `sim-wind` · replaces Figure 3.44 (Example 3.7) · velocity-addition
   · still · `\kvp` (10 to 70 m/s, default 45.0, velocity), `\kvtot` (5
   to 70 m/s, default 38.0, velocity), the direction of the total
   velocity in degrees west of north (−60° to 60°, default 20.0°, ink) ·
   "the wind blows at 16.0 m/s, 35.6° south of west; it slows the plane
   from 45.0 to 38.0 m/s and turns its track 20.0° off its heading" ·
   none · no. Still. The example gets a figure of its own because it is
   the inverse problem: the total is known and the wind is found, which
   Figure 3.41's sim cannot show. Readout: $\kvw = \sqrt{\kvwx^2 +
   \kvwy^2} = 16.0$ m/s with the components written on the triangle,
   small line on the components and the 110° angle. Draws velocity.
5. `sim-binoculars` · replaces Figure 3.45 (the sailor drops the
   binoculars) · classical-relativity · two panels: on the left, seen
   from the ship, the mast stands still and the binoculars fall straight
   down while the water slides past; on the right, seen from shore, the
   ship moves forward and the binoculars trace a curve, and in both
   panels they land at the base of the mast; the velocity arrow on the
   binoculars is drawn every frame in each frame of reference ·
   `\kv_{\text{ship}}` (0 to 15 m/s, default 6.0, velocity), mast height
   h (4 to 20 m, default 12, ink) · "the binoculars land at the base of
   the mast after 1.56 s, having moved 9.4 m forward with the ship" ·
   none, the two scenes are the idea · no. Moves: a fall, finite,
   scrubber. Readout: the velocity at the deck in the two frames, (6.0,
   −15.3) m/s from shore and (0, −15.3) m/s from the ship; small line:
   the observers differ by the ship's velocity alone. Draws velocity.
6. `sim-coin` · replaces Figure 3.46 (Example 3.8) · classical-relativity,
   velocity-addition · on the left, relative to the plane, the coin
   falls straight down 1.50 m in the cabin with its velocity arrow
   growing; on the right, relative to the Earth, a graph of the coin's
   path with the plane moving above it, the horizontal axis in the 144 m
   the plane covers and the vertical axis in the 1.50 m of the fall,
   and under the graph the velocity at the floor drawn to one scale, so
   that the 5.42 m/s downward is a stub beside the 260 m/s forward ·
   `\kv_{\text{plane}}` (50 to 300 m/s, default 260, velocity), drop
   height h (0.5 to 3.0 m, default 1.50, ink) · "the coin lands after
   0.553 s, 1.50 m below where it was dropped and 144 m along the ground;
   its velocity is 260.06 m/s" · the ground-frame path is the graph ·
   no. Moves: a fall, finite, scrubber. The example gets a figure of its
   own because it adds the velocity at the floor and its five-digit
   magnitude, which the binoculars sim does not show. Readout: $\kv =
   \sqrt{\kvx^2 + \kvy^2} = 260.06$ m/s and $\theta = -1.19°$; small
   line: relative to the plane the velocity is $\kvy = -5.42$ m/s alone.
   Draws velocity.
7. `fig-galaxies` · a faithful copy of the five-galaxy figure of
   problems 12 and 13, labelled Figure, no sliders, no motion · serves
   the exercises · still · none · none (no headline; the book's numbers
   are written on the figure as the book prints them) · none · no.
   Draws velocity (the recession arrows).

Photographs: none in the section.

Figures that serve exercises: the five galaxies (above), which problem
13 takes its data from; the book's image is also attached to the problem
card, since the Exercises document is read apart from the text. The
hockey player's diagram serves problem 16, which has no keyed answer and
is left out, so it is not built.

Extra simulations (rule 15): thought about and judged:
- A heading on the boat, so the reader can point it upstream and find
  the heading that lands it straight across, which is what the take-home
  experiment asks and what problem 8 (unkeyed) asks of a ship. Built, as
  the third slider of `sim-boat` rather than a figure of its own; at
  its default of 90° the sim is the book's.
- The expanding line of galaxies seen from each galaxy in turn, so the
  reader sees that every observer finds themself at the centre. Left:
  problem 12, which asks exactly this, is unkeyed and left out, and the
  faithful figure with the book's numbers is what the kept problem needs.
- The hockey player of one-dimensional addition. Left: two numbers add
  and there is nothing to see that the sentence does not say.

## Exercises

- No Check Your Understanding boxes and no AP items in the section, and
  none belonging to it elsewhere in the chapter (3.2's problems on the
  components of $v_{\text{tot}}$ test resolving a vector and stay in
  3.2).
- 5 conceptual questions, all with AI-written suggested approaches:
  `cq1` (frames of reference when driving and flying) and `cq2` (the
  dribbling basketball player) inline after `relativity`; `cq3` (the
  softball thrown backward from a pickup), `cq4` (the jogger's hat) and
  `cq5` (the clod of dirt from a truck) at the end.
- 8 problems keyed and kept, all at the end: `p1` (Bryan Allen's
  crossing, three parts), `p3` (the two marathon runners; parts (a) and
  (c) as numbers, (b) in the solution), `p5` (the quarterback moving
  backward; speed and angle), `p7` (the jet from Darwin; speed and angle,
  the discussion in the solution), `p9` (the second airplane in the jet
  stream, two parts), `p11` (the sailboat's wind relative to the water;
  speed and angle), `p13` (the Hubble rate and the time back to the Big
  Bang, two parts, with the galaxies figure on the card), `p15` (the
  Gulf Stream; speed and angle).
- 11 problems left out, having no answer in the book's key: 2 (eip-342,
  the seagull), 4 (fs-id1543938, verify the coin's 144 m), 6
  (fs-id1545568, the ship from Rotterdam), 8 (fs-id1845552, the ship's
  heading for due north), 10 (fs-id2022863, the sandal from the mast),
  12 (fs-id2150516, the galaxies relative to galaxy 2 and 5), 14
  (fs-id2080170, the athlete crossing the river), 16 (fs-id1769191, the
  hockey player), 17 and 18 (fs-id1839158, fs-id1915156, Unreasonable
  Results), 19 (fs-id1913487, Construct Your Own Problem).
- 1 Critical Thinking item, `ct1` (exer-14790, two spring-loaded
  launchers at 40° and 50°), keyed with words and the book's graph of
  speed against height, which is kept as an image inside the open
  answer. It tests the maximum height of a projectile, which 3.4
  introduces, so under rule 12 it goes to that page: the section first
  kept it here because 3.4's plan left it, and the chapter pass moved it
  to 3.4 with `source_section: "3.5"`, where it is tagged to
  `maximum-height` and `projectile-vertical-motion`; both sections'
  `exercise_notes` say so.
- No generated questions: every node has a book exercise.
- Weights: `p5` turns on the projectile range (3.4) to get the ball's
  velocity relative to the ground before the quarterback's velocity is
  subtracted, so `range` is tagged at weight 2 and `velocity-addition`
  keeps the full value; `p13` is about relative velocity and the
  expansion, and `average-velocity` (the time back from distance over
  speed) is tagged at weight 1.

## Views

- Formulas: eq-vel-x, eq-vel-y, eq-vel-mag, eq-vel-direction (important),
  eq-wind-components (a step of Example 3.7, not important). All already
  in `chapter.json`.
- Definitions: the fifteen variable rows of the section; the five
  glossary terms.
- Concept map: the three nodes above, with their edges into 2.1, 2.3,
  2.2, 3.1, 3.3 and 3.4.

## Colour

The page binds velocity only: every sim carries a velocity on a slider
and draws velocity arrows, and the readouts write `\kv`, `\kvx`, `\kvy`,
`\kvtot`, `\kvboat`, `\kvriver`, `\kvp`, `\kvw` and their components.
Angles, the river's width, the mast height, the drop height and the
elapsed time in the headlines stay in ink. Example 3.8's fall equation
writes `\kg`, `\ky` and `\kyo` as the book's symbols, and they render in
ink on this page since it binds neither acceleration nor position.

## Wanted at chapter level

- Nothing at book level: the three concept rows, the fifteen variable
  rows, the five equation rows and the five glossary rows of the section
  were all there and are all used as written. The Critical Thinking item
  `exer-14790` tests 3.4's `maximum-height` and is kept here because
  3.4's plan leaves it here; if the later pass prefers rule 12 read
  strictly, move it to 3.4 with `source_section: "3.5"`.
- Anchors, `chapter.json` variables: `v → 3.5-velocity-addition`,
  `v_x → 3.5-velocity-addition`, `v_y → 3.5-velocity-addition`,
  `θ → 3.5-velocity-addition`, `v_tot → 3.5-ex-boat`,
  `v_boat → 3.5-ex-boat`, `v_river → 3.5-ex-boat`,
  `v_totx → 3.5-ex-plane`, `v_toty → 3.5-ex-plane`, `v_p → 3.5-ex-plane`,
  `v_px → 3.5-ex-plane`, `v_py → 3.5-ex-plane`, `v_w → 3.5-ex-plane`,
  `v_wx → 3.5-ex-plane`, `v_wy → 3.5-ex-plane`.
- Anchors, `chapter.json` equations: `eq-vel-x → 3.5-velocity-addition`,
  `eq-vel-y → 3.5-velocity-addition`, `eq-vel-mag → 3.5-velocity-addition`,
  `eq-vel-direction → 3.5-velocity-addition`,
  `eq-wind-components → 3.5-ex-plane`.

Decided in the chapter pass (2026-09-11): the twenty anchors above are
written into `chapter.json`. The Critical Thinking item is moved to 3.4,
as the exercises list now says. Example 3.6 refers to Figure 3.43, which
`sim-boat` folds under its own number 3.40, since the example adds no
quantity the section figure does not show. The fold pass (2026-09-11)
wrote 3.43 into the row's `folds`, so the eyebrow reads "Figure 3.40 +
3.43" and the example's reference now links to the sim. The lead of the
galaxies block
is a full sentence now, and the caption spells center as the book does.
