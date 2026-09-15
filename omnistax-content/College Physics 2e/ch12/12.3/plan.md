# Plan: 12.3 The Most General Applications of Bernoulli’s Equation (m42208)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's standing instruction to finish the book in
waves; the per-section stop of rule 2, the plan review of rule 5 and the user
picks of rule 15 are replaced by this file, written before the section was
built and left for review after, as `ch12/config.md` records.

The section takes Bernoulli's equation two steps further than 12.2 did. First
it lets the height change while both pressures stay atmospheric, and the
speed of water leaving a hole in a dam comes out as the speed of a falling
body, which is Torricelli's theorem. Then it lets pressure, speed and height
all change at once in a fire hose run up a ladder, and finally it multiplies
every term by the flow rate and reads each product as a power. Two book
figures (12.11, the dam and its schematic; 12.12, the fire engine and its
ladder), one unnumbered-in-CNXML image the book prints as Figure 12.13 inside
a conceptual question (the leaking boot), two worked examples (the publisher
prints them as Examples 12.5 and 12.6), one boxed note (Making Connections:
Power), no glossary terms, four AP items, four conceptual questions and four
problems, of which two are keyed. One page (rule 11).

## Sub-concepts (page headers)

The module prints two headers of its own, Torricelli's Theorem and Power in
Fluid Flow, and both are kept as the book writes them (`ch12/config.md`). The
book puts the fire hose under the first of them, but it is a different idea
from Torricelli's theorem and has a concept node of its own, so it gets a
block of its own with an agent header, and the pump example gets one too.

1. `torricellis-theorem` **Torricelli’s Theorem** (book header; the paragraph
   that walks from Bernoulli's equation to $\kvtwo^2 = \kvone^2 + 2\kg\kh$
   with its four equations, and Figure 12.11). The variables $\kProne$,
   $\kPrtwo$, $\kvone$, $\kvtwo$, $\khone$, $\khtwo$, $\kh$, $\krho$ and
   $\kg$ and the equation `eq-torricelli` anchor here.
2. `general-application` **Pressure, speed and height changing together**
   (agent header; the paragraph "All preceding applications of Bernoulli's
   equation involved simplifying conditions", Figure 12.12 and Example 12.5,
   Calculating Pressure: A Fire Hose Nozzle, `ex-fire-hose`).
3. `power-in-fluid-flow` **Power in Fluid Flow** (book header; the paragraph
   that multiplies Bernoulli's equation by the flow rate, its two equations,
   the paragraph that names what each term means, and the boxed note Making
   Connections: Power). The variables $\kQ$ and $\kPr$ and the equation
   `eq-power-in-fluid-flow` anchor here.
4. `pump-power` **The power a pump supplies** (agent header; Example 12.6,
   Calculating Power in a Moving Fluid, `ex-pump-power`). The equation
   `eq-power-from-pressure` anchors here.

Cross references: the section names no other section by number; its "as
stated in previously" and "as discussed in the previous section" stay plain
text. Learning objectives and the section summary come out of the running
text into the tables (rule 4); the section defines no glossary term.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| torricellis-theorem | result, eq-torricelli | torricellis-theorem | the dam of Figure 12.11; the AP item on the hole 5 m below the surface; the boot with two leaks |
| bernoulli-general-application | skill | general-application | Example 12.5; the plunger, the pump up the building and the tapered pipe of the AP items; the hose questions |
| power-in-fluid-flow | result, eq-power-in-fluid-flow | power-in-fluid-flow | the three products named term by term; the Hoover Dam problem; the left ventricle problem |
| pump-power | skill, eq-power-from-pressure | pump-power | Example 12.6; the left ventricle, whose power is mostly pressure |

The section leans on `bernoullis-equation`, `bernoulli-energy-per-volume` and
`bernoullis-principle` (12.2), `flow-rate` and `flow-rate-velocity` (12.1),
`atmospheric-pressure` and `gauge-pressure` (11.x), `free-fall-kinematics`
(2.x), `conservation-of-mechanical-energy` (7.x) and `power` (7.7); the
coverage rows mark each as used where the text uses it.

## Figures

id · replaces or Sim · concepts · value add · moving or still · sliders ·
headline · graph · 3D

1. `sim-torricelli` · replaces Figure 12.11, the dam photograph (a) and the
   reservoir schematic (b), which the book prints as one image and one number
   (`ch12/config.md`: one number with two originals, here one file that
   carries both halves) · torricellis-theorem, bernoullis-equation,
   flow-rate-velocity · value add: variation by slider and intuition. The
   still schematic labels $\khone$, $\khtwo$, $\kh$ and the two pressures and
   speeds and cannot show that the speed grows as the square root of the
   depth, or that the size of the opening changes the flow rate and not the
   speed; here the reader drags the depth and watches the jet, the point on
   the $\kvtwo$-against-$\kh$ curve and the readout move together, and widens
   the opening to see the speed stay put while the flow rate grows · **still**:
   a reservoir draining steadily has no clock in it, since the surface is
   taken not to fall and every quantity is a steady state; a jet drawn with
   moving tracers would be the dummy loop rule 14 forbids, so the figure
   answers its sliders and registers no cycle · $\kh$, the depth of the
   opening below the surface (0.5 to 20.0 m, default 5.00, position, the
   depth of the AP item), $\kvone$, the speed of the surface (0 to 3.00 m/s,
   default 0, velocity), and the area $A$ of the opening (2.0 to 50.0 cm²,
   default 10.0, ink, the AP item's hole) · "Water 5.00 m below the surface
   leaves the opening at 9.90 m/s, the speed it would have after falling
   5.00 m." · graph beside, since the scene is vertical: $\kvtwo$ against
   $\kh$, axes fixed at 0 to 20 m and 0 to 20 m/s from the slider maxima,
   the current state a pinned point with a drop line · 2D. Readout:
   $\kvtwo = \sqrt{\kvone^2 + 2\kg\kh}$ with the live numbers; small line
   giving $\kQ = A\kvtwo$ and saying that the opening's size has no say in
   the speed. Labels: five entity labels (the two pressures, the two speeds,
   the height bracket) plus the opening's area, none of them moving, so they
   are on by default (26.7). Draws velocity, position, acceleration,
   pressure, flow-rate.
2. `sim-fire-hose` · replaces Figure 12.12, the fire engine, its ladder and
   the nozzle 10 m up. `ch12/config.md` lists this image as dropped as a
   kept picture because the section's own figure says it better; this is that
   figure, and the book's drawing rides on it as the original so that the
   prose's "See Figure 12.12" still lands · bernoulli-general-application,
   bernoullis-equation, bernoulli-energy-per-volume, flow-rate-velocity ·
   value add: variation by slider and intuition. The book's drawing shows a
   ladder and a number; the reader must imagine why the base pressure is what
   it is. Here the three terms of Bernoulli's equation at the base and in the
   nozzle are drawn as two stacked bars whose totals are the same height, so
   the reader sees the pressure at the base being traded for speed and height
   at the top, and drags the flow rate, the nozzle bore and the height to see
   which trade costs most · **still**: a hose held at one setting is a steady
   flow with no clock in it (rule 14) · $\kQ$ (10.0 to 50.0 L/s, default
   40.0, flow-rate), $\khtwo$, the height of the nozzle (0 to 20.0 m, default
   10.0, position), and the nozzle's inside diameter (2.50 to 6.40 cm,
   default 3.00, ink); the hose's own diameter stays at the book's 6.40 cm
   and the nozzle is open to the air, so $\kPrtwo = 0$ as a gauge pressure ·
   "To reach a nozzle 10.0 m up and leave it at 56.6 m/s, the water at the
   base of the hose needs a gauge pressure of 1.62 × 10⁶ N/m²." · bars beside,
   since the scene is vertical: two stacked columns, base and nozzle, on a
   fixed axis of 0 to 6.0 × 10⁶ J/m³ (from the slider extremes, 5.3 × 10⁶
   at most; the default stands at a quarter of the axis, which is why the
   axis is not the 1.62 × 10⁶ the default alone would ask for), the pressure
   term in the pressure hue and the two energy terms in the energy hue, the
   kinetic one solid and the gravitational one hatched, with the common total
   ruled across both in ink as the chapter's `COLOR.md` asks · 2D. Readout:
   $\kProne = \kPrtwo + \frac{1}{2}\krho(\kvtwo^2 - \kvone^2) + \krho\kg\khtwo$
   with the live numbers; small line giving the two speeds from the flow rate
   and the two cross-sections. Labels: the two points, the height bracket,
   the two bores and the three terms of each column, listed beside the
   column rather than on the segments, since the gravitational segment is
   thin at every setting; none move, so on by default (26.7). Draws
   pressure, density, velocity, position, acceleration, energy, flow-rate.
3. `sim-fluid-power` · Sim (the Power in Fluid Flow passage has no figure in
   the book) · power-in-fluid-flow, pump-power, power, flow-rate · value
   add: variation by slider and intuition. The text says that each term of
   Bernoulli's equation times the flow rate is a power and names the three;
   the reader has no picture of a pump supplying three powers at once, nor of
   the book's own pump supplying only one. Here a pump takes water from a
   hydrant and sends it out with a pressure, a speed and a height the reader
   sets, and three bars beside it show how the power it supplies divides
   among them; at the defaults the speed and height terms are zero and the
   figure is Example 12.6 · **still**: a pump running steadily has no clock
   in it, and the flow is a steady state the sliders describe (rule 14) ·
   $\kPr$, the gauge pressure the pump gives the water (0 to 1.50 × 10⁶ N/m²,
   default 0.920 × 10⁶, pressure), $\kv$, the speed it gives water taken in
   slowly (0 to 20.0 m/s, default 0, velocity), $\kh$, the height it lifts
   the water to (0 to 20.0 m, default 0, position), and $\kQ$ (5.0 to
   60.0 L/s, default 40.0, flow-rate) · "The pump supplies 36.8 kW, all of it
   to raise the pressure by 0.920 × 10⁶ N/m² in a flow of 40.0 L/s." · bars
   beside: the three powers and their total on a fixed axis of 0 to 120 kW
   (the slider extremes give 114 kW), all in the power hue and told apart by
   their labels · 2D. Readout:
   $\text{power} = (\kPr + \frac{1}{2}\krho\kv^2 + \krho\kg\kh)\kQ$ with the
   live numbers in watts and kilowatts; small line giving the horsepower
   the book's discussion mentions. Labels: the pipe's pressure, speed and
   height and the flow rate, four entity labels on by default (26.7). Draws
   power, pressure, flow-rate, velocity, position, density, acceleration.

Photographs: the section's one photograph is the dam of Figure 12.11(a), and
it is kept as an original of `sim-torricelli`, since the book prints it and
the schematic as one figure under one number (`ch12/config.md`). The fire
engine of Figure 12.12 is a drawing, not a photograph, and is the original of
`sim-fire-hose`. The leaking boot the book prints as Figure 12.13 inside the
third conceptual question is kept as printed and travels on that question's
card in its `figure` field, as `ch12/config.md` decides for every image an
exercise of this chapter refers to; it is not redrawn.

Folds: none. `ch12/config.md` allows a fold inside 12.2 and forbids one across
sections; the two book figures of this section draw different scenes.

Extra simulations (rule 15), thought through, judged and decided:

- **The pump's three powers (`sim-fluid-power`): built**, for the reason its
  plan line gives.
- The boot with two leaks at the same depth, its two jets and their maximum
  height. Left: it is `sim-torricelli` with two openings, and the question
  asks the reader to reason it out rather than to be shown.
- The Hoover Dam's 150 m of head and 650 m³/s. Left: it is `sim-fluid-power`
  with only the $\krho\kg\kh$ term, at a scale the fire pump's sliders do not
  reach, and the problem is a calculation rather than a picture.
- A trace of the jet's parabola for several depths at once. Left: the graph
  beside `sim-torricelli` already carries $\kvtwo$ against $\kh$ for every
  depth, and a family of jets would repeat it.

Figure pass (2026-09-15, Claude Fable 5.1). `sim-fluid-power`: the height bracket and its label ran into the tick labels of the power chart, so the bracket stands closer to the outlet pipe. `sim-torricelli` and `sim-fire-hose` were left as built.

## Exercises

- No Check Your Understanding box, so nothing is inline; every item is set
  at the end (`ch12/config.md`).
- 4 AP items, all the section's own: `ap1` (fs-id2174516, the plunger and
  the horizontal pipe) is keyed (a) and is a graded choice, Apply; `ap2`
  (fs-id1527124, the pump pushing water 21 m up a building) has no key and is
  an open item with an AI-marked approach, Apply; `ap3` (fs-id2103327, the
  hole 5 m below the surface of an open container) is keyed (d) and is a
  graded choice, Apply; `ap4` (fs-id1816086, the tapered pipe with its small
  end 8 m up) has no key and is an open item with an AI-marked approach,
  Analyze. The keyed answer to `ap1` is the book's and is kept as the book
  prints it; `exercise_notes` says that a reader who works the item with the
  pipe's full cross-section will find a speed nearer option (b).
- 4 conceptual questions, none keyed, each an open item with an AI-marked
  suggested approach: `cq1` (fs-id2443622, the three forms of energy,
  Understand, citing `power-in-fluid-flow`), `cq2` (fs-id1412050, the zero
  gauge pressure of an emerging stream and the force it exerts, Understand,
  citing `general-application`), `cq3` (fs-id2401508, the old boot with two
  leaks, Analyze, citing `torricellis-theorem`, the book's Figure 12.13 on
  its card) and `cq4` (fs-id1389535, water leaving a nozzle against
  atmospheric pressure, Understand, citing `general-application`).
- 2 problems keyed and kept: `p1` (fs-id1404775, Hoover Dam, keyed
  9.56 × 10⁸ W and 1.41 as two parts) and `p3` (fs-id2603396, the left
  ventricle, keyed 1.26 W).
- 2 problems left out, having no answer in the book's key: the aircraft wing
  and its lift per square meter (fs-id1412810) and the sump pump draining a
  basement (fs-id3064064). Both are named in `notes` and `exercise_notes`.
- Nothing is taken from another section and nothing of this section's own
  is held back.
- No generated questions: every node of the section has a book exercise that
  tests it.
- Weights: `ap1` gives `bernoulli-general-application` its full value and
  12.2's `bernoullis-principle` 2, since the pipe is horizontal; `ap3` gives
  `torricellis-theorem` its full value and `flow-rate-velocity` 2, since the
  flow rate is the speed times the hole; `ap4` gives
  `bernoulli-general-application` its full value and `equation-of-continuity`
  2, which is where the second speed comes from; `cq1` gives
  `bernoulli-energy-per-volume` its full value and `power-in-fluid-flow` 2,
  since the passage that names the three terms is this section's; `cq2` and
  `cq4` give `bernoulli-general-application` their full value and
  `bernoulli-energy-per-volume` 2; `p3` gives `power-in-fluid-flow` its full
  value and `pump-power` 3, since most of the ventricle's power is pressure.

## Views

- Formulas: the three equations of the section already in `chapter.json`,
  all important (`eq-torricelli`, `eq-power-in-fluid-flow`,
  `eq-power-from-pressure`).
- Definitions: the eleven variables of the section; no glossary terms, since
  the module defines none.
- Concept map: the four nodes above with their edges into 2.x, 7.x, 11.x,
  12.1 and 12.2.

## Colour

The page binds pressure, density, velocity, position, acceleration, energy,
flow-rate and power, the union of what its three figures draw, as
`ch12/COLOR.md` foresaw for 12.3. Pressure wears Chapter 11's hue on
$\kPr$, $\kProne$ and $\kPrtwo$, on the pressure term of every bar and on the
slider that sets the pump's pressure; the kinetic and gravitational terms
wear the energy hue, solid and hatched; the total of Bernoulli's equation is
ruled in ink because it belongs to no one term; the power bars wear the power
hue; the stream and its slider wear the flow-rate hue. The area of an
opening, the diameters of hose and nozzle, the mass of a bit of fluid and
the scene's lengths stay in ink. No body wears a type hue: the water is told
by its outline and its labels, the dam and the building by their shapes.

## Wanted at chapter level

- variables `12.3/P_1` → 12.3-torricellis-theorem
- variables `12.3/P_2` → 12.3-torricellis-theorem
- variables `12.3/v_1` → 12.3-torricellis-theorem
- variables `12.3/v_2` → 12.3-torricellis-theorem
- variables `12.3/h_1` → 12.3-torricellis-theorem
- variables `12.3/h_2` → 12.3-torricellis-theorem
- variables `12.3/h` → 12.3-torricellis-theorem
- variables `12.3/ρ_dens` → 12.3-torricellis-theorem
- variables `12.3/g` → 12.3-torricellis-theorem
- variables `12.3/Q` → 12.3-power-in-fluid-flow
- variables `12.3/P_press` → 12.3-power-in-fluid-flow
- equations `eq-torricelli` → 12.3-torricellis-theorem
- equations `eq-power-in-fluid-flow` → 12.3-power-in-fluid-flow
- equations `eq-power-from-pressure` → 12.3-pump-power
- The key to `ap1` (fs-id2174516) gives (a) 12 m/s, which the item's own
  numbers do not reach by the section's method (440 N over the 5.6 cm pipe's
  cross-section gives about 19 m/s, option (b)); the key is kept as printed
  and `exercise_notes` says so. Nothing is wanted unless the chapter pass
  would rather record it in `ch12/exploration.md` beside the other errata.

Applied in the chapter pass (2026-09-14): every anchor above is written on its
row. The key to `ap1` is recorded in `ch12/exploration.md` under the chapter's
errata, beside 12.1's, 12.2's and 12.6's, and `ch12/config.md` no longer calls
Figure 12.12 dropped.
