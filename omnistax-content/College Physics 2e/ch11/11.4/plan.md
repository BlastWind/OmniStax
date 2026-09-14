# Plan: 11.4 Variation of Pressure with Depth in a Fluid (m42192)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's instruction to finish the book without
check-ins; the per-section stop of rule 2, the plan review of rule 5 and the
user picks of rule 15 are replaced by this file, written before the section
was built and left for review after, as `ch11/config.md` records.

The section that turns the pressure of 11.3 into a number the reader can
find from a depth. It derives $\kPr = \kh\krho\kg$ from the weight of the
fluid standing over the bottom of a container, works the force on a dam from
the average pressure at the average depth, names atmospheric pressure as the
same thing done by air, and closes on the two numbers that make the idea
vivid: 120 km of air and 10.3 m of water press equally hard. Three sketch
figures (11.8 to 11.10), no photograph, three worked examples, no boxed note,
one glossary term the chapter's tables already hold under 11.3, eight
conceptual questions, ten problems of which five are keyed, and one AP item
taken from 11.3. One page (rule 11).

## Sub-concepts (page headers)

The module prints no header of its own, so all four are the agent's (rule 3).

1. `weight-of-fluid` **The weight of the fluid above** (book: the opening
   paragraph on ears popping and the 775 times denser water; "Consider the
   container in Figure 11.8" and the six-step derivation of
   $\kPr = \kh\krho\kg$; the paragraph on its general validity and on
   liquids against gases; Figure 11.8). The variables $\kPr$, $\kh$,
   $\krho$, $\kg$, $m$, $V$ and $A$ and the equations
   `eq-pressure-from-weight`, `eq-mass-of-fluid-column` and
   `eq-pressure-depth` anchor here.
2. `dam` **The force on a dam** (book: Example 11.3, What Force Must a Dam
   Withstand?, with both strategies, both solutions and its discussion;
   Figure 11.9). The example is `ex-dam`. The variables $\kPbar$, $\khbar$
   and $\kF$ and the equations `eq-average-pressure-depth` and
   `eq-force-on-dam` anchor here.
3. `atmosphere` **Atmospheric pressure** (book: the paragraph on
   atmospheric pressure and the standard value; Figure 11.10; Example 11.4,
   How Dense Is the Air?). The example is `ex-air-density`. The variables
   $\krhobar$ and $\kPatm$ and the equations `eq-atmospheric-pressure` and
   `eq-average-density-from-pressure` anchor here.
4. `water-and-air` **The depth of water that equals the atmosphere** (book:
   Example 11.5, What Depth of Water Creates the Same Pressure as the Entire
   Atmosphere?; the closing paragraph on the total pressure at 10.3 m being
   2 atm). The example is `ex-water-depth`. The equation
   `eq-depth-from-pressure` anchors here.

The book gives its three examples no number in the CNXML; the publisher
prints them as Examples 11.3, 11.4 and 11.5, since 11.2 prints Example 11.1
and 11.3 prints Example 11.2, and the page follows that. The cross reference
to Example 11.1 and to Table 11.1 are plain text naming the number, the
forward reference to Pascal's Principle is plain text (`ch11/config.md`),
and the section names no other chapter. Learning objectives and the section
summary come out of the running text into the tables and the views (rule 4).
The section defines **pressure** a second time, as the weight of the fluid
divided by the area supporting it; the glossary row lives under 11.3, where
the term is first defined, and the definition here stays in the prose as the
book prints it.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| pressure-from-weight-of-fluid | result, eq-pressure-depth | weight-of-fluid | the derivation from the container; every example; the gas tank and the unit problems |
| depth-in-a-liquid-versus-a-gas | idea | weight-of-fluid | the paragraph on liquids and gases; the air-density example; the question on the atmosphere thinning faster than linearly |
| force-on-a-dam | skill, eq-average-pressure-depth | dam | Example 11.3; the problem that shows the force grows with the square of the depth |
| pressure-independent-of-container | idea | dam | the discussion after the example; the sandbags question; the drum of petroleum ether |
| atmospheric-pressure | idea, eq-atmospheric-pressure | atmosphere | the standard value; the column of air over one square meter; the sunbathing question |
| density-from-pressure-and-height | skill, eq-average-density-from-pressure | atmosphere | Example 11.4 (the density of the air) and Example 11.5 (the depth of water); the mercury problem |

The section leans on `pressure` and `force-from-pressure` (11.3), `density`
and `calculate-mass-from-density` (11.2), `atomic-arrangement-and-phase`
(11.1) and `weight` (4.x); the coverage rows mark each as used where the
text uses it.

## Figures

id · replaces or Sim · concepts · value add · still or moving · sliders ·
headline · graph · 3D

1. `sim-column` · replaces Figure 11.8, the container whose bottom supports
   the weight of the fluid in it · pressure-from-weight-of-fluid,
   pressure-independent-of-container, density-from-pressure-and-height ·
   variation by slider and intuition: the still asserts that the bottom
   holds up the weight of the column, and the figure lets the reader deepen
   the column, change the fluid and widen the container, and watch the
   weight, the pressure and the little arrows on the walls answer each
   change, the arrows growing with depth and with density and not at all
   with the width · **still**: a fluid at rest has no time in it, so the
   figure answers its sliders and registers no cycle (rule 14;
   `ch11/config.md` makes the same decision for every figure of fluid
   statics) · $\kh$ (0 to 12.0 m, default 10.3, position), $\krho$ (600 to
   1400 kg/m³, default 1000, density, with soft detents at the liquids of
   Table 11.1 that fall in that range: gasoline 680, ethyl alcohol 790,
   olive oil 920, water 1000, sea water 1025, blood 1050 and glycerin
   1260, the two ends labelled under the track and the headline naming
   whichever liquid the thumb sits on) and the area $A$ of the
   bottom (0.25 to 2.00 m², default 1.00, ink). The default is the book's
   Example 11.5, water 10.3 m deep, so the figure reproduces that example
   on load and the graph's point sits on the 1 atm level; mercury is left
   off the slider, since at 13,600 kg/m³ it would flatten every other
   liquid onto the axis · "Water 10.3 m deep over 1.00 m² weighs
   1.01 × 10⁵ N, so the pressure it exerts on the bottom is 1.01 × 10⁵ N/m²."
   · beside: the scene is a vertical tank, so the graph of $\kPr$ against
   $\kh$ stands to its right, a straight line through the origin whose
   slope is $\krho\kg$, with the 1 atm level dashed across it and the live
   point on the line. Axes fixed from the slider maxima: depth 0 to 12 m,
   pressure 0 to 200 kPa (12 m of 1400 kg/m³ is 165 kPa); nothing can leave
   the box · 2D. The tank's scale is fixed at 32 canvas units to the metre
   of depth, so 12 m fills the frame, and its width follows $\sqrt{A}$ on a
   fixed scale of its own, 95 units to the metre, since a tank 12 m deep and
   1 m across drawn to one scale would be a thread; the pressure arrows and
   the weight arrow are scaled from the largest values the sliders reach.
   Readout: $\kPr = m\kg/A = \kh\krho\kg$ with the live numbers; small line
   on the weight of the column, which changes with the area while the
   pressure does not, since the area cancels. Labels: the weight arrow,
   the depth bracket, the area and the pressure at the bottom, four in all,
   each beside its thing, so labels are on. Draws pressure, density,
   position, force. The fluid is a translucent panel fill and the tank
   is ink, since a body never wears a type hue.
2. `sim-dam` · replaces Figure 11.9, the dam and the water it retains ·
   force-on-a-dam, pressure-independent-of-container,
   pressure-from-weight-of-fluid · variation by slider and intuition: the
   still draws one $\kF$ at one $\khbar$, and the figure draws the pressure
   on the face growing linearly from nothing at the surface to $\kh\krho\kg$
   at the bottom, marks the average depth halfway down, and lets the reader
   raise the water or lengthen the dam and watch the average pressure follow
   the depth alone while the force follows both · **still**: a dam and the
   water behind it stand still, and the figure answers its sliders (rule 14)
   · $\kh$ (10 to 120 m, default 80.0, position) and the length $L$ of the
   dam (100 to 1000 m, default 500, ink); the fluid is water at the book's
   $10^3$ kg/m³, since the example and its problem are about water · "Water
   80.0 m deep along a dam 500 m long presses on it with an average pressure
   of 392 kPa and a force of 1.57 × 10¹⁰ N." · none: the pressure profile is
   drawn on the face of the dam itself, so no graph is needed · locked view
   (root rule 28.2): the book prints the dam in perspective, and the length
   $L$ cannot be seen in a cross section, so the scene is projected on
   `view()`/`face()` from one fixed viewpoint like the book's, the eye on
   the water's side and in front of the near end, the dam a prism thicker
   at its base, the water a translucent block so that the face and its
   arrows are seen through it as the book draws them, the pressure arrows
   on the face at the near end, no orbit. The scene scale is fixed at 1.9
   canvas units to the metre of height, from the 120 m maximum, and the
   length recedes in perspective, the eye close enough that the far end of
   a 1000 m dam stays under the headline instead of running off to the
   horizon. Readout: $\kPbar = \khbar\krho\kg$ and $\kF = \kPbar A$ with the
   live numbers; small line saying that the average pressure depends on the
   depth alone and not on how far the reservoir reaches behind the dam.
   Labels: $\kh$, $\khbar$, $L$, $\kF$ and the pressure at the bottom, five,
   beside their things, so labels are on. Draws pressure, density,
   position, force.
3. `sim-atmosphere` · replaces Figure 11.10, the column of air over one
   square meter · atmospheric-pressure, density-from-pressure-and-height,
   depth-in-a-liquid-versus-a-gas · variation by slider and intuition: the
   still says the column weighs 1.01 × 10⁵ N, and the figure lets the reader
   widen the patch of ground and watch the weight grow while the pressure
   stays at one atmosphere, and change the height taken for the top of the
   atmosphere and watch the average density Example 11.4 finds move, drawn
   as a bar beside the sea-level density of Table 11.1 that is fifteen
   times larger · **still**: the air stands on the ground and nothing in
   the idea has a clock (rule 14) · the area $A$ of the patch (0.25 to
   4.00 m², default 1.00, ink) and $\kh$, the height the atmosphere is
   taken to extend to (20 to 200 km, default 120, position) · "The air over
   1.00 m² of ground weighs 1.01 × 10⁵ N, and spread over 120 km of height
   its average density is 0.0859 kg/m³." · beside: the column is vertical,
   so a bar chart of the two densities stands to its right, sea-level air
   at 1.29 kg/m³ and the average $\krhobar$, on a fixed axis from 0 to
   1.5 kg/m³ · 2D. The column is drawn with its shading thinning upward,
   since the book says the density is highest near the surface and declines
   rapidly with altitude, and broken off below the top with the height
   written at the break, since 120 km cannot share a scale with a tree.
   Readout: $\krhobar = \kPatm/(\kh\kg)$ with the live numbers; small line
   on the weight $w = \kPatm A$ of the column. Labels: the weight arrow, the
   patch's area and the pressure $P = w/A$ on it, the height and the two
   bars, six, none of them moving or crowding, so labels are on. Draws
   pressure, density, position, force.

Photographs: the section has none, so none is kept and none is dropped.

Figures that serve exercises: the book prints two. The levee and the
sandbags of the fourth conceptual question travel on that card's own
`figure` field, as `ch11/config.md` decides. The last problem repeats the
dam of Figure 11.9 with an empty caption, and the item cites the number and
carries no image of its own (`ch11/config.md`).

Extra simulations (rule 15), thought through, judged and left:

- A row of containers of different shapes filled to one depth, the pressure
  at the bottom the same in all of them. It is the cleanest picture of
  "independent of the container", but a flared or narrowed vessel makes the
  bottom carry less or more than the weight of the fluid, which the book
  explains nowhere on this page, and the figure would need prose of its own
  to be honest; `sim-column`'s area slider already shows more weight and the
  same pressure for the vertical case.
- The sandbags and the levee, with the water rising inside the ring until it
  stands level with the river. It would answer the question the reader is
  being asked.
- A pool with the atmosphere counted above its surface, the total pressure
  at 10.3 m read as 2 atm. The closing paragraph says it in one sentence and
  hands the idea to Pascal's Principle, where the manometer of 11.6 draws
  it; `sim-column`'s graph already carries the 1 atm level.
- A graph of pressure against depth for several fluids at once. It is
  `sim-column`'s graph with more lines, and the density slider shows the
  slope changing.

## Exercises

- All items are set at the end: the chapter has no Check Your Understanding
  box, and none of the conceptual questions is short enough to sit inline.
- 7 conceptual questions of the section's own, none keyed, each an open item
  with an AI-marked suggested approach: `cq1` (fs-id3073220, the ten tons of
  air on a sunbather, Understand, citing `atmosphere`), `cq2` (fs-id2598964,
  why atmospheric pressure falls faster than linearly with altitude,
  Understand, citing `weight-of-fluid`), `cq3` (fs-id3045581, why mercury
  rather than water in a barometer, Understand, citing `water-and-air`),
  `cq4` (fs-id1381740, the sandbags around the leak under the levee,
  Analyze, citing `dam`, the book's image on its card), `cq5` (eip-29, the
  net force on a dam due to the atmosphere, Analyze, citing `dam`), `cq6`
  (fs-id3042305, whether atmospheric pressure adds to the pressure in a
  rigid tank or a balloon, Analyze, citing `water-and-air`) and `cq7`
  (fs-id1355852, the cork pounded into a full wine bottle, Analyze, citing
  `weight-of-fluid`).
- 1 conceptual question held for 11.7 with a line in `exercise_notes`: why
  it is hard to swim under water in the Great Salt Lake (fs-id1868222),
  which is buoyancy in a denser fluid (`ch11/config.md`).
- 1 AP item taken from 11.3 with `source_section: "11.3"`: `ap1`
  (fs-id2402162, the drum of petroleum ether), which wants the pressure on
  the floor of the drum, which is $\kPr = \kh\krho\kg$ (`ch11/config.md`).
  It is unkeyed and is an open item with an AI-marked approach, Apply.
- 5 problems keyed and kept: `p1` (fs-id3210042, the depth of mercury that
  creates 1.00 atm, keyed 0.760 m), `p3` (fs-id1844231, the SI unit of
  $\kh\krho\kg$, keyed with the book's own line of units, an open item whose
  solution is the book's), `p5` (fs-id1931094, the aqueous humor pressing
  on the cornea, keyed 20.5 mm Hg for part (a) with the book's answer to
  part (b) in the solution; it is $\kF/A$ and stays here as `ch11/config.md`
  decides), `p7` (fs-id2437095, the gasoline in the full tank, keyed
  1.09 × 10³ N/m²) and `p9` (fs-id1946824, the force the left side of the
  heart exerts on the blood, keyed 24.0 N).
- 1 problem kept unkeyed as an open item: `p10` (fs-id3357018, showing that
  the force on a rectangular dam is $\krho\kg\kh^2 L/2$), which asks for a
  derivation and not a number, so it carries an AI-marked suggested approach
  as the open questions do, Analyze. It is the one problem that exercises
  `sim-dam` directly and `ch11/config.md` names it as the item that cites
  Figure 11.9.
- 4 problems left out, having no answer in the book's key: the Marianas
  Trench (fs-id3358416), the water tower (fs-id1842837), the sheet of paper
  under the atmosphere (fs-id2611667) and the shot-putter's palm
  (fs-id1917152). They are named in `notes` and in `exercise_notes`.
- No generated questions: every node of the section has a book exercise
  that tests it.
- Weights: `cq2` gives `depth-in-a-liquid-versus-a-gas` its full value and
  `atmospheric-pressure` 2; `cq3` gives `density-from-pressure-and-height`
  its full value and `pressure-from-weight-of-fluid` 2; `cq4` gives
  `pressure-independent-of-container` its full value and
  `pressure-from-weight-of-fluid` 2; `cq5` gives `atmospheric-pressure` its
  full value and `force-on-a-dam` 2; `cq7` gives
  `depth-in-a-liquid-versus-a-gas` its full value and
  `pressure-from-weight-of-fluid` 2; `ap1` gives
  `pressure-from-weight-of-fluid` its full value and
  `pressure-independent-of-container` 2; `p1` gives
  `density-from-pressure-and-height` its full value and
  `atmospheric-pressure` 2; `p10` gives `force-on-a-dam` its full value and
  `pressure-from-weight-of-fluid` 2; `p5` and `p9` are 11.3's $\kPr = \kF/A$
  and score into `pressure` and `force-from-pressure`.

## Views

- Formulas: the eight equations of the section already in `chapter.json`,
  the five stated and named ones important (`eq-pressure-depth`,
  `eq-average-pressure-depth`, `eq-force-on-dam`, `eq-atmospheric-pressure`,
  `eq-average-density-from-pressure`) and the three steps not.
- Definitions: the twelve variable rows of the section; no glossary row of
  its own, since pressure is 11.3's.
- Concept map: the six nodes above with their edges into 4.x, 11.1, 11.2 and
  11.3.

## Colour

The page binds pressure, density, position and force, as `ch11/COLOR.md`
allows it. Every figure draws a pressure (the arrows on the walls and the
face, the readouts), a density (the slider of `sim-column`, the bars of
`sim-atmosphere`, the water of `sim-dam` in its readout), a position (the
depth brackets and the height of the air) and a force (the weight of the
column, the force on the dam). The area, the volume, the mass and the length
of the dam stay untyped and in ink, as `ch11/config.md` decided, and $\kg$
is ink on this page because nothing binds acceleration. No body wears a type
hue: the water is a translucent panel fill, the tank, the dam and the ground
are ink and muted.

## Wanted at chapter level

- variables `P_press` (11.4) → 11.4-weight-of-fluid
- variables `h` (11.4) → 11.4-weight-of-fluid
- variables `ρ_dens` (11.4) → 11.4-weight-of-fluid
- variables `g` (11.4) → 11.4-weight-of-fluid
- variables `m` (11.4) → 11.4-weight-of-fluid
- variables `V` (11.4) → 11.4-weight-of-fluid
- variables `A` (11.4) → 11.4-weight-of-fluid
- variables `P_bar` (11.4) → 11.4-dam
- variables `h_bar` (11.4) → 11.4-dam
- variables `F` (11.4) → 11.4-dam
- variables `ρ_bar` (11.4) → 11.4-atmosphere
- variables `P_atm` (11.4) → 11.4-atmosphere
- equations `eq-pressure-from-weight` → 11.4-weight-of-fluid
- equations `eq-mass-of-fluid-column` → 11.4-weight-of-fluid
- equations `eq-pressure-depth` → 11.4-weight-of-fluid
- equations `eq-average-pressure-depth` → 11.4-dam
- equations `eq-force-on-dam` → 11.4-dam
- equations `eq-atmospheric-pressure` → 11.4-atmosphere
- equations `eq-average-density-from-pressure` → 11.4-atmosphere
- equations `eq-depth-from-pressure` → 11.4-water-and-air
- The forward reference to Pascal's Principle in the closing paragraph is
  plain text and may be linked to 11.5 once that page is merged.
