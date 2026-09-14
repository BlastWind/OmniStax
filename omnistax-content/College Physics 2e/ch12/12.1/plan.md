# Plan: 12.1 Flow Rate and Its Relation to Velocity (m42205)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's instruction to finish the book in waves;
the per-section stop of rule 2, the plan review of rule 5 and the user picks
of rule 15 are replaced by this file, written before the section was built
and left for review after, as `ch12/config.md` records.

The chapter's first section, and the one every later one rests on. It
defines flow rate as volume per time, gives the liter, relates flow rate to
the average speed through the cross-sectional area, and then argues from an
incompressible fluid to the equation of continuity, first for one tube that
narrows and then for a tube that branches. Two sketch figures (12.2, the
shaded cylinder in a pipe; 12.3, the tube that narrows), one photograph
(12.4, the Huka Falls, which belongs to a problem), three worked examples
(the heart's lifetime output, the hose and its nozzle, the aorta and the
capillaries), no boxed note, two glossary terms of its own (flow rate, liter;
the chapter tables also hold *fluid dynamics* under this section, from the
introduction), two AP items, three conceptual questions and sixteen problems
of which eight are keyed. One page (rule 11).

## Sub-concepts (page headers)

The module prints no header of its own, so all four are the agent's (rule 3;
`ch12/config.md` says so for 12.1).

1. `flow-rate` **Flow rate and its units** (book: the opening paragraph that
   defines flow rate and its equation; the paragraph on the SI unit, the
   heart's 5.00 L/min and the liter; Figure 12.2 where the book prints it;
   Example 12.1, the heart pumps a lot of blood in a lifetime). Introduces
   `flow-rate` and `flow-rate-units`. The variables $\kQ$, $V$ and $\kt$ and
   the equation `eq-flow-rate` anchor here.
2. `flow-rate-velocity` **Flow rate and velocity** (book: the paragraph
   that begins "Flow rate and velocity are related, but quite different"
   with $\kQ = A\kvb$, and the derivation from the shaded cylinder through
   $V = Ad$ and $V/t = Ad/t$ to $\kQ = A\kvb$). Introduces
   `flow-rate-velocity`. The variables $A$ and $\kvb$ and the equation
   `eq-flow-rate-velocity` anchor here.
3. `continuity` **The equation of continuity** (book: the paragraph on the
   incompressible fluid in a pipe of decreasing radius and the equation for
   points 1 and 2; Figure 12.3 where the book prints it; the paragraph on
   liquids being essentially incompressible and gases not; Example 12.2, the
   hose and the nozzle; the paragraph on speed going as the inverse square
   of the radius and the candle). Introduces `equation-of-continuity` and
   `incompressible-fluid`. The variables $A_1$, $A_2$, $\kvbone$, $\kvbtwo$,
   $\kQone$, $\kQtwo$ and $r$ and the equation `eq-continuity` anchor here.
4. `branching` **Continuity where the flow branches** (book: the paragraph
   on arteries, arterioles and capillaries with the general form of the
   equation; Example 12.3, the aorta and the number of capillaries).
   Introduces `continuity-branching`. The variables $n_1$ and $n_2$ and the
   equation `eq-continuity-branching` anchor here.

The book gives its three examples no number in the CNXML; the publisher
prints them as Examples 12.1 to 12.3, the chapter's first three, and the page
follows that. Cross references to the two figures are plain "Figure 12.2" and
"Figure 12.3" in the prose, which the app links; the section names no other
section. Learning objectives, the section summary and the glossary come out
of the running text into the tables and the views (rule 4). Inline exercises:
none, per `ch12/config.md`; the three conceptual questions sit at the end.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| flow-rate | idea, eq-flow-rate | flow-rate | the definition and Example 12.1; the gasoline, heart and pool problems |
| flow-rate-units | skill | flow-rate | the liter; the four conversion factors of Example 12.1; the problems asking for cm³/s, m³/s and L/s |
| flow-rate-velocity | result, eq-flow-rate-velocity | flow-rate-velocity | the shaded cylinder of Figure 12.2; part (a) of Examples 12.2 and 12.3; the aorta, Huka Falls and fire hose problems |
| incompressible-fluid | idea | continuity | the sentence on liquids and gases after the equation; the third conceptual question; part (c) of the fire hose problem |
| equation-of-continuity | result, eq-continuity | continuity | Figure 12.3; part (b) of Example 12.2; both AP items; the hose nozzle and faucet problems |
| continuity-branching | result, eq-continuity-branching | branching | the general form; part (b) of Example 12.3; the venules problem |

The section leans on `fluid` (11.1), `elapsed-time` and `average-velocity`
(2.1, 2.3), `unit-conversion` and `metric-prefixes` (1.2) and, in one
problem, `v-squared` (2.5); the coverage rows mark each as used where the
text uses it.

## Figures

id · replaces or Sim · concepts · value add · moving or still, with the
reason · sliders and choices with their types · headline · graph · 3D

1. `sim-flow-cylinder` · replaces Figure 12.2, the shaded cylinder of fluid
   passing point P in a uniform pipe · flow-rate, flow-rate-velocity,
   flow-rate-units · variation by slider: the reader sees the cylinder
   lengthen with the speed and with the time and fatten with the pipe, while
   the readout writes $\kQ = A\kvb$ and $V = Ad$ with the live numbers in
   both m³/s and L/s, which the still cannot show · **still**: the book's
   picture is one cylinder of fluid that has passed P in a chosen time, and
   the chapter's config allows motion only where an idea has a clock the
   reader must watch (12.5, 12.6, 12.7); here the elapsed time is a slider,
   so the figure exposes the clock without running one, answers its sliders
   and registers no cycle (rule 14) · $\kvb$ (0.20 to 4.00 m/s, default 1.96,
   velocity), $r$ (0.30 to 1.50 cm, default 0.900, ink, a scene length), $\kt$
   (0.10 to 2.00 s, default 1.00, time). The defaults are the hose of
   Example 12.2, so that the readout comes to the example's 0.500 L/s ·
   "In 1.00 s a cylinder of water 1.96 m long passes the point P, so the flow
   rate through the 0.900 cm hose is 0.499 L/s." · none: the pipe in section
   with the shaded cylinder, its length $d = \kvb\kt$ bracketed beneath and
   its cross-section $A$ marked, is the whole picture · 2D. The pipe's radius
   and the cylinder's length are drawn on two fixed scales (the radius at 60
   units per cm, the length at 110 units per m), since a centimeter of radius
   and a meter of length cannot share one; the small line says so. Readout:
   $\kQ = A\kvb = \pi r^2\kvb$ with the numbers, in m³/s and L/s; small line
   giving $V = Ad = \kQ\kt$ for the shaded cylinder. Draws flow-rate,
   velocity, time.
2. `sim-continuity` · replaces Figure 12.3, the tube that narrows from
   point 1 to point 2 · equation-of-continuity, flow-rate-velocity,
   incompressible-fluid · variation by slider and standardisation: the book
   admits its two cylinders and two arrows are not to scale, and here the
   same 2.00 cm³ of fluid is drawn to scale in both parts of the tube, so
   the reader sees the slab in the wide part stretch into a long cylinder in
   the narrow one, and the speed arrows and the graph beneath show the
   inverse square the text ends on · **still**: the picture is two shaded
   volumes that are the same volume and a pair of speeds, and dragging a
   radius is the reader's choice of tube, not the passage of time
   (rule 14; the chapter's config makes this decision for continuity) ·
   $\kQ$ (0.05 to 1.00 L/s, default 0.500, flow-rate, with soft detents at
   the heart's 5.00 L/min and the hose's 0.500 L/s), $r_1$ (0.50 to 1.20 cm,
   default 0.900, ink), $r_2$ (0.25 to 1.20 cm, default 0.250, ink). The
   defaults are the hose and nozzle of Example 12.2, 1.96 m/s and 25.5 m/s;
   set $r_2$ above $r_1$ and the tube widens and the speed drops, which is
   the reservoir of the text and the reversal the book's caption promises ·
   "The same 0.500 L/s passes both points, so the water that moves at
   1.96 m/s in the 0.900 cm hose moves at 25.5 m/s in the 0.250 cm nozzle."
   · below: $\kvb$ against $r$ on fixed axes (0 to 1.20 cm, 0 to 60 m/s) for
   the current $\kQ$, the two points marked and a point above the top
   pinned, because the text's closing point is that speed goes as the
   inverse square of the radius and a graph shows a curve where the tube
   shows two numbers · 2D. The radii and the lengths of the two cylinders
   share one scale, 60 units per cm, so the figure is honest where the
   book's is not; the speed arrows are at 12 units per m/s and an arrow that
   would overrun its part of the tube is pinned at the end with a hollow
   head. Readout: $\kQone = \kQtwo$, $A_1\kvbone = A_2\kvbtwo$ with the
   numbers; small line saying how long the 2.00 cm³ takes to pass either
   point and that $\kvbtwo/\kvbone = (r_1/r_2)^2$. Draws flow-rate, velocity.
3. `sim-branching` · Sim (the book draws no figure for the branching form
   of continuity) · continuity-branching, equation-of-continuity,
   flow-rate-velocity · variation by slider: the reader changes how many
   branches a vessel divides into and how wide each is, and watches the
   total cross-section and the speed in a branch answer, which the text
   gives only as one equation and one worked number · **still**: it answers
   its sliders and nothing else · $\kQ$ (2.0 to 10.0 L/min, default 5.0,
   flow-rate), $r_1$ (4.0 to 15.0 mm, default 10.0, ink), $n_2$ (1 to 12,
   default 8, ink, a count), $r_2$ (1.0 to 8.0 mm, default 5.0, ink). The
   defaults are the aorta of Example 12.3, 5.0 L/min through 10 mm, so that
   $\kvbone$ comes to its 0.27 m/s; the branches are a stand-in for the
   arteries the aorta divides into, since five billion capillaries cannot be
   drawn and the small line does that arithmetic instead · "One vessel of
   10.0 mm radius divides into 8 branches of 5.0 mm, so the total
   cross-section doubles and the blood slows from 0.27 m/s to 0.13 m/s." ·
   none: the vessel in section, its branches fanning out to the right, two
   bars beneath on one fixed cap (0 to 25 cm²) for $A_1$ and $n_2A_2$, and
   the two speed arrows, are the picture · 2D. Labels: one branch carries
   the labels $r_2$ and $\kvbtwo$ for all of them (a kind is labelled once,
   rule 26.7), and the branches take no colour of their own, since they are
   one kind of thing and the flow through them is the flow-rate hue. Readout:
   $n_1A_1\kvbone = n_2A_2\kvbtwo$ with the numbers; small line on the
   body's $5\times10^9$ capillaries of 4.0 μm radius, whose total
   cross-section is about 800 times the aorta's, so blood there crawls at
   0.33 mm/s. Draws flow-rate, velocity.

Photographs: one, Figure 12.4, the Huka Falls (275 px). Kept, because its
problem is keyed and kept; it travels on the `figure` field of that problem's
card, as `ch12/config.md` decides for every exercise image of the chapter,
and is not a figure row or a `<figure>` of the text. The section has no other
photograph.

Figures that serve exercises: the Huka Falls, as above. No exercise image is
redrawn.

Extra simulations (rule 15), thought through, judged and decided:

- **The branching vessel (`sim-branching`): built.** The general form of
  continuity is the one result of the section the book states without a
  picture, and Example 12.3's arithmetic, five billion capillaries from one
  aorta, is the kind a reader nods at without seeing. A vessel that divides
  into a chosen number of branches of a chosen size, with the total
  cross-section and the speed answering, is a view neither the text nor the
  two book figures give.
- The candle blown out with pursed lips. Left: it is `sim-continuity` with
  a mouth for a nozzle, and the same two numbers.
- The river slowing into a reservoir and speeding up out of it. Left:
  `sim-continuity` reaches it by setting $r_2$ above $r_1$, and a third
  segment would only repeat the second.
- A clock that fills a pool from a hose or a river, the problem's 22 hours
  against 0.016 s. Left: $V = \kQ\kt$ is on the readout of
  `sim-flow-cylinder`, and a filling animation would be the dummy loop the
  chapter's config forbids.

## Exercises

- All items are set at the end; the chapter has no Check Your Understanding
  box and `ch12/config.md` places nothing inline.
- 3 conceptual questions, none keyed, each an open item with an AI-marked
  suggested approach: `cq1` (fs-id1549295, flow rate against fluid velocity,
  Understand, citing `flow-rate-velocity`), `cq2` (fs-id1917833, why the
  speed is greatest where streamlines are closest, Understand, citing
  `continuity`) and `cq3` (fs-id1434712, incompressible and compressible
  substances, Remember, citing `continuity`).
- 2 AP items of the section's own. `ap1` (fs-id1500776, the pipe whose
  diameter doubles) is keyed (b) and is a graded choice, Apply. `ap2`
  (fs-id2019349, the pool toy's opening) has no key and no options, so it is
  an open item with an AI-marked approach, Apply.
- 8 problems keyed and kept: `p1` (fs-id2115593, the car's gasoline,
  2.78 cm³/s), `p3` (fs-id2017637, the speed in the aorta, 27 cm/s), `p5`
  (fs-id2438354, the Huka Falls, 0.75 and 0.13 m/s, the photograph on the
  card), `p7` (fs-id2677825, the capillaries feeding the venules, 40.0 cm²
  and 5.09 × 10⁷), `p9` (fs-id1580788, filling the pool, 22 h and
  0.016 s), `p11` (fs-id3048002, the fire hose, 12.6 m/s and 0.0800 m³/s,
  with the book's answer to part (c) in the solution), `p13` (fs-id3079662,
  the hose and its nozzle, 0.402 L/s and 0.584 cm) and `p15` (fs-id2421219,
  the stream below the faucet, 127 cm³/s and 0.890 cm).
- 8 problems left out, having no answer in the book's key: the heart's rate
  converted (fs-id2382376), the 2 mm artery (fs-id1931967), the artery that
  branches into 18 (fs-id1909395), the speed in each of 10⁹ capillaries
  (fs-id3137420), the capillary's flow rate (fs-id3149885), the heater's air
  duct (fs-id2658266), the proof about the Venturi constriction
  (fs-id1365720) and the Unreasonable Results mountain stream
  (fs-id3088759). Named in `notes` and `exercise_notes`.
- Nothing is taken from another section and nothing of this section's own
  is held back: the chapter's AP items all sit in 12.1 to 12.3 and each is
  about the section it sits in (`ch12/config.md`).
- No generated questions: every node of the section has a book exercise
  that tests it.
- Weights: `p1` and `p9` give `flow-rate` the full value and
  `flow-rate-units` 3, since the work of each is the conversion; `p5` gives
  `flow-rate-velocity` the full value and `flow-rate-units` 2; `p7` gives
  `continuity-branching` the full value and `equation-of-continuity` 3; `p11`
  gives `flow-rate-velocity` the full value, `flow-rate-units` 2 and
  `incompressible-fluid` 2 for part (c); `p13` gives `equation-of-continuity`
  the full value and `flow-rate-velocity` 3; `p15` gives
  `equation-of-continuity` the full value, `flow-rate-velocity` 3 and
  `v-squared` 2, since the speed 0.200 m below the faucet is a step of
  kinematics; `cq1` gives `flow-rate-velocity` the full value and `flow-rate`
  3; `ap2` gives `equation-of-continuity` the full value and
  `flow-rate-velocity` 2.

## Views

- Formulas: the four equations of the section already in `chapter.json`,
  all important (`eq-flow-rate`, `eq-flow-rate-velocity`, `eq-continuity`,
  `eq-continuity-branching`); the substitution steps of the examples are
  not rows.
- Definitions: the fourteen variables of the section, and the glossary terms
  flow rate and liter, with fluid dynamics from the introduction.
- Concept map: the six nodes above with their edges into 1.2, 2.1, 2.3, 11.1
  and 11.2 and within the section.

## Colour

The page binds flow-rate, velocity and time. Every figure draws a flow rate
(the shaded fluid in the pipe, the tube and the branches; the $\kQ$ sliders
of the second and third figures; every readout) and a velocity (the speed
arrows and the $\kvb$ slider of the first figure); the first figure alone
draws a time, on its $\kt$ slider and in its readout, so that the page binds
time as `ch12/COLOR.md` allows where a figure exposes a clock. The radii $r$,
$r_1$ and $r_2$, the length $d$, the areas, the volume $V$ and the count $n_2$
are untyped and in ink, and the sliders that set them carry no colour class,
as the chapter's config decides. Nothing on the page binds pressure, density
or position.

## Wanted at chapter level

- variables `Q` → 12.1-flow-rate
- variables `V` → 12.1-flow-rate
- variables `t` → 12.1-flow-rate
- variables `A` → 12.1-flow-rate-velocity
- variables `v̄` → 12.1-flow-rate-velocity
- variables `A_1` → 12.1-continuity
- variables `A_2` → 12.1-continuity
- variables `v_bar1` → 12.1-continuity
- variables `v_bar2` → 12.1-continuity
- variables `Q_1` → 12.1-continuity
- variables `Q_2` → 12.1-continuity
- variables `r` → 12.1-continuity
- variables `n_1` → 12.1-branching
- variables `n_2` → 12.1-branching
- equations `eq-flow-rate` → 12.1-flow-rate
- equations `eq-flow-rate-velocity` → 12.1-flow-rate-velocity
- equations `eq-continuity` → 12.1-continuity
- equations `eq-continuity-branching` → 12.1-branching
- No concept or symbol fix is wanted. The text writes the book's one bare
  $v_1$ of Example 12.2 with the existing `v_1` row (`\kvone`), as the book
  prints it without a bar there, and every other speed with `\kvb`, `\kvbone`
  and `\kvbtwo`.
