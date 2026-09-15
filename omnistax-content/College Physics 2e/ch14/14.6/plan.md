# Plan: 14.6 Convection (m42229)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's standing instruction to finish the book in
waves; the per-section stop of rule 2, the plan review of rule 5 and the user
picks of rule 15 are replaced by this file, written before the section was
built and left for review after, as `ch14/config.md` records.

The section on heat carried by matter that moves. Convection is driven by
buoyant forces, because a fluid that warms expands and its density falls; a
gravity furnace, a pot on a stove, the atmosphere and the oceans all run on
the same loop. Two worked examples (numbered 14.7 and 14.8 at the publisher,
since 14.2 prints three, 14.3 one and 14.5 two), one table (Table 14.4, the
wind-chill factors), three sketch figures (14.21, 14.22, 14.23), three
photographs (14.24, 14.25, 14.26) and one photograph inside a problem
(14.27), one Take-Home Experiment, one Check Your Understanding, two AP
items, two conceptual questions and ten problems of which five are keyed. No
glossary term. One page (rule 11).

## Sub-concepts (page headers)

The module prints no header of its own; the five are the agent's (rule 3),
one per concept node.

1. `natural-convection` **Natural convection and the convective loop**
   (book: the opening paragraphs on the atmosphere, engines, the body and
   breathing; the paragraph on buoyant forces with Figures 14.21 and 14.22;
   the Take-Home Experiment).
2. `moving-mass` **The heat carried by a mass of fluid** (book: Example 14.7,
   the air of a house replaced every half hour; its Discussion on turnover
   times). $\kQh$, $\kt$, $m$, $c$, $\kdTemp$, $\krho$ and $V$ anchor here,
   with eq-convection-heat-rate.
3. `wind-chill` **Wind chill** (book: the paragraph on a cold wind and Table
   14.4). The Check Your Understanding box on the fan is set inline here.
4. `trapped-air` **Air that cannot move is an insulator** (book: the
   paragraph on wall spaces, double panes, fur and feathers; Figure 14.23).
5. `phase-change` **Convection with a phase change** (book: sweating;
   Example 14.8, the sweat that carries 120 W; the oceans and thunderheads
   with Figures 14.24 to 14.26; the drifting iceberg). $L_{\text{v}}$
   anchors here with eq-evaporation-rate.

Cross references are plain text: "Table 14.1" and "Table 14.2" name tables on
other pages, and the lake problem's "Problem-Solving Strategies for the
Effects of Heat Transfer" names 14.3's list. The converter's `º` is written
`°C` in prose and `^\circ\text{C}` in math throughout. The book's own slip,
"The circulatory system is used the body", is kept as printed and named in
`notes`.

Learning objective, summary and the table's summary line come out of the
running text into the views. The conceptual questions, the problems and the
AP items go to the Exercises document; the one Check Your Understanding is
inline.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| natural-convection | idea | natural-convection | the opening paragraphs, Figures 14.21 and 14.22, the Take-Home Experiment, AP 1 and 2, CQ 1 and 2 |
| convection-heat-rate | skill, eq-convection-heat-rate | moving-mass | Example 14.7; problems on the classroom, Kilauea, blood and breathing |
| wind-chill | idea | wind-chill | Table 14.4, the CYU on the fan, problems 1 and 2 |
| air-as-insulator | idea | trapped-air | the paragraph on wall spaces and double panes, Figure 14.23, CQ 2 |
| convection-with-phase-change | result, eq-evaporation-rate | phase-change | Example 14.8, Figures 14.24 to 14.26, the summary, problems on coffee, the lake and breathing |

The page leans on `convection` (14.4), `heat-and-temperature-change` and
`specific-heat` (14.2), `heat-of-vaporization` and
`evaporation-below-boiling` (14.3), `thermal-conductivity` and
`conduction-by-molecular-collisions` (14.5), `density` and `buoyant-force`
(11.2, 11.7), `volume-thermal-expansion` (13.2), `evaporative-cooling`
(13.6) and `power` (7.7), which the coverage rows mark where the text uses
them.

## Figures

id · replaces or Sim · concepts · value add · moving or still · sliders ·
headline · graph · 3D

1. `sim-convective-loop` · replaces Figure 14.21 (the gravity furnace and
   its loop) and folds Figure 14.22 (the pot on the stove), "Figure 14.21 +
   14.22", as `ch14/config.md` allows: the two are one convective loop drawn
   twice, and one live figure with the scene as a choice says so ·
   natural-convection · **flow by animation and variation by slider**: the
   book's arrows stand still, and the reader has to imagine air warming,
   rising, cooling and sinking; here parcels of fluid ride the loop, the
   warmer the heater the faster they go, and two bars state how much lighter
   the warmed fluid is than the rest, which is the buoyant force the text
   names · **moves**: a steady loop with no end, so it registers an endless
   cycle and gets the transport without a scrubber, as 12.6's flow past a
   ball does · the scene as a segmented control (rule 26.1), "Room with a
   gravity furnace" and "Pot of water on a stove", the room the default;
   $\kdTemp$, the temperature rise of the fluid at the heater above the rest
   (5 to 80 °C, default 40, temperature) · "Air 40 °C warmer than the room's
   is 13.6% lighter, so the room's air lifts it: it rises up the wall,
   cools along the ceiling and sinks down the far side." · none: the loop
   is the picture · 2D. Readout: $\krho_{\text{warm}} = \krho(1 -
   \beta\kdTemp)$ with Table 13.2's $\beta$ (air 3400 × 10⁻⁶ /°C, water
   210 × 10⁻⁶ /°C) and the book's densities (air 1.29 kg/m³ from Example
   14.7, water 1000 kg/m³); small line on the buoyant force. The room draws
   the furnace with a flame, a window and a sofa in ink; the pot is cut away
   over a ring of burner flames; the flames are the one colour that is the
   physical fact, a gas-blue on the burner and an orange in the furnace.
   Draws density and temperature. Labels on: "hot air rises" and "air
   cooled by the room sinks" (the book's own), the heater and the two bars,
   five in all; a legend names the parcels.
2. `sim-house-turnover` · Sim (it replaces no figure; Example 14.7 is
   worked in words) · convection-heat-rate · **variation by slider and
   intuition**: the rate is a number the reader cannot feel, so it is drawn
   as the row of 100 W bulbs the Discussion compares it with, and the reader
   watches forty-six bulbs fall to twelve when the turnover time goes from
   the book's half hour to a new home's two hours · **still**: the quantity
   is an amount of heat per turnover time, and the turnover time is a number
   the slider states, not a motion; the figure answers its sliders and
   registers no cycle · $\kdTemp$ (0 to 30 °C, default 10.0, temperature),
   turnover time $\kt$ (0.25 to 6.00 h, default 0.50, time, detents at
   0.50, 2.00 and 6.00 from the Discussion), $V$ (100 to 1500 m³, default
   648, ink) · "Warming 836 kg of air by 10.0 °C every 0.50 h takes 4.64
   kW, the power of 46 bulbs of 100 W." · none · 2D. Readout:
   $\kQh/\kt = mc\kdTemp/\kt$ with the live numbers, the watts in the power
   hue; small line on $m = \rho V$ in ink. Draws temperature, time, energy
   and power. Labels on: the two air arrows, the bar and the bulb row,
   four.
3. `sim-wind-chill` · Sim (it replaces no figure; Table 14.4 stays in the
   text) · wind-chill · **variation by slider and intuition**: the table is
   read as a pair of thermometers, the air's own temperature and the still
   air that would chill the same, and a graph shows the whole table at
   once with the reader's point on it · **still**: wind chill is a state
   of the table, not a motion, and wind streaks drifting past the figure
   would be the dummy loop rule 14 forbids · air temperature (−40 to 5 °C,
   default 0, temperature, soft detents at the table's seven rows, snapping)
   and wind speed $\kv$ (0 to 20 m/s, default 15, velocity, soft detents at
   the table's five columns, snapping; 0 m/s is still air) · "A 15.0 m/s
   wind at 0 °C chills like still air at about −18 °C." · graph beside the
   scene: wind-chill temperature against wind speed, axes fixed at 0 to
   20 m/s and −90 to 10 °C, one curve per row of the table in muted ink and
   the current row's in the temperature hue, the reader's point on it;
   between the table's entries the figure interpolates and the readout
   says so · 2D. Readout: the equivalence in words with the numbers; small
   line naming the table. Draws temperature and velocity. Labels on: the two
   thermometers, the person and the wind, four.
4. `sim-fur` · replaces Figure 14.23 (convection loops in fur) ·
   air-as-insulator · **flow by animation and variation by slider**: the
   book draws the loops as arrows and says they are too small to work; here
   the reader sets the size of the air pocket, from a fur pocket through a
   double pane's gap to a wall cavity, and watches the loop in each pocket
   go from still to a crawl to a vigorous turn, which is the whole argument
   that trapped air insulates · **moves**: the loops are a steady flow with
   no end, so it registers an endless cycle and gets the transport without
   a scrubber; at the smallest pockets it turns so slowly as to stand
   still, which is the point · pocket size $d$ (1 to 100 mm, default 1,
   ink, detents at 1 "fur", 10 "double pane" and 90 "wall cavity" from the
   text) and $\kdTemp$ across the pocket (5 to 40 °C, default 20,
   temperature) · "In pockets 1 mm across the air's viscosity holds it
   still, and heat crosses the fur only by conduction through air." ·
   none · 2D. The buoyant drive of a pocket grows with its size and its
   warming as $d^3\kdTemp$ (the pocket's own weight difference against the
   viscous drag of 12.4), so the drawn loop speed follows that rule, still
   below the onset the book's 1 cm sits near and vigorous at 9 cm; the
   readout writes $\krho_{\text{warm}} = \krho(1 - \beta\kdTemp)$ for air
   as figure 1 does, and its small line says whether a pocket of that size
   lets the lighter air rise. Draws density and temperature. Labels on: the
   book's "Fur", "Air (cold)", "Body (warm)" and one "convection loop" on a
   representative, four.
5. `sim-sweat` · Sim (it replaces no figure; Example 14.8 is worked in
   words) · convection-with-phase-change · **variation by slider and
   intuition**: the reader sets the power the body must shed and the time,
   and sees the sweat it costs both as a rate and as the water in a cup,
   180 g in an hour at rest · **still**: a rate and an amount, not a motion
   · power to shed $\kQh/\kt$ (50 to 500 W, default 120, power, detents at
   83 "sleeping", 120 "at rest" and 210 "sitting" from the breathing
   problem's key) and time $\kt$ (5 to 120 min, default 60, time) · "To
   shed 120 W by sweat alone, 2.96 g of water must evaporate every minute,
   180 g in an hour." · none · 2D. Readout: $m/\kt = (\kQh/\kt)/L_{\text{v}}$
   with the live numbers and $L_{\text{v}} = 2430$ kJ/kg; small line on the
   mass in the time. Draws power, time and energy. Labels on: the person,
   the cup and the bar, three.

Photographs, each a `photo` row with the book's caption and credit:

6. `fig-cumulus` · Figure 14.24, the cumulus cloud · **keep**: the
   passage is about the clouds that convection with a phase change builds,
   and the photograph shows one; no width in the CNXML.
7. `fig-thunderhead` · Figure 14.25, lightning over a city · **keep**: the
   paragraph's thunderhead; width 213.
8. `fig-icebergs` · Figure 14.26, the icebergs · **keep**: the paragraph
   after it is about the drifting iceberg; width 227.

Figure 14.27, the Kilauea lava flow, is inside the Kilauea problem and
travels on that problem's card as its `figure` field, as `ch14/config.md`
decides for this chapter; it is copied to `media/ch14/`.

No extra simulation is proposed: the sea breeze of AP 2 is the loop of
figure 1 with the land and the sea as the two walls, and a figure of it
would answer the question for the reader.

Figure pass (2026-09-15, Claude Fable 5.1). Every figure was screenshot at its default, slider extremes, both scenes and three points of each cycle in both themes and looked at. `sim-wind-chill`: the stick figure is a filled silhouette leaning into the wind. `sim-sweat`: the stick figure crouching under a grey ellipse is a silhouette sitting on a bench under a parasol drawn as a canopy with a scalloped edge on a pole. `sim-house-turnover`: the door stood under the turnover label and moved to the left wall, where nothing is written. `sim-convective-loop` and `sim-fur` were found clean and are unchanged.

## Exercises

- The Check Your Understanding (`cyu1`, fs-id2586676, why a fan feels
  refreshing) is keyed and set inline after `wind-chill`, with its host div
  closing that block; Understand. The book prints the same box in 14.5 as
  well, and each section keeps its own copy under its own section id.
- 2 AP items: `ap1` (fs-id1809999, the two conditions for the greatest
  convection, keyed (a), a graded choice, Analyze, citing
  `natural-convection`); `ap2` (fs-id1951877, sea breezes by day and night,
  unkeyed, an open item with an AI-marked suggested approach, Analyze).
- 2 conceptual questions, none keyed, each an open item with an AI-marked
  suggested approach: `cq1` (fs-id3069600, the two fireplace designs,
  Analyze), `cq2` (fs-id2402776, horses under trees on a clear night,
  Understand).
- 5 problems keyed and kept: `p1` (fs-id3090099, the wind speed that makes
  −10 °C chill like −29 °C, 10 m/s), `p3` (fs-id3044160, the coffee cooled by
  evaporating 2.00 g, 85.7 °C), `p5` (fs-id1890173, the lake losing 1.48 kg
  per square meter per hour, which the book prints in 14.2 as well; each
  section keeps its own copy), `p7` (fs-id3437564, Kilauea's lava, 2 × 10⁴
  MW, with Figure 14.27 on its card), `p9` (fs-id3095359, breathing, a
  three-part item keyed 97.2 J, 29.2 W and 9.49 W with the book's
  discussion of part (d) in the solution).
- 5 problems left out, having no answer in the book's key: the still-air
  temperature that matches −5 °C at 15 m/s (fs-id1103870), the water a
  60.0 kg woman must evaporate (fs-id1864446), the classroom's 500 m³ a
  minute (fs-id1967616), the blood pumped to the skin (fs-id1526706) and the
  glass coffee pot (fs-id1095106); all named in `notes` and
  `exercise_notes`.
- No generated questions: every node has a book exercise that tests it.
- Weights: `cyu1` gives `wind-chill` its full value and
  `natural-convection` 2; `ap2` gives `natural-convection` its full value
  and `water-moderates-temperature` 3; `cq1` gives `natural-convection` its
  full value and `heat-transfer-methods` 2; `cq2` gives
  `air-as-insulator` its full value and `wind-chill` 2; `p3` gives
  `convection-with-phase-change` its full value and
  `heat-and-temperature-change` 3; `p5` gives `convection-with-phase-change`
  its full value and `heat-of-vaporization` 2; `p7` gives
  `convection-heat-rate` its full value and `heat-and-temperature-change`
  2; `p9` gives `convection-with-phase-change` and `convection-heat-rate`
  their full value.

## Views

- Formulas: the two equations of the section already in `chapter.json`,
  both important.
- Definitions: the eight variables of the section; no glossary term.
- Concept map: the five nodes above with their edges into 7.7, 11.2, 11.7,
  12.1, 13.2, 13.6, 14.2, 14.3, 14.4 and 14.5.

## Colour

The page binds temperature, time, energy, power, density and velocity, the
set `ch14/COLOR.md` foresees for it. Every figure carries $\kdTemp$ or a
temperature on a slider and in its readout (temperature); the loop and the
fur write $\krho$ in their readouts and draw two bars of density (density,
Chapter 11's row); the house and the sweat carry $\kt$ on a slider and write
$\kQh/\kt$ with $\kQh$ in the energy hue over $\kt$ in the time hue (energy,
time), their bar of watts and the number in watts in the power hue (power);
the wind chill carries $\kv$ on a slider and on its graph's axis
(velocity). $m$, $c$, $V$, $\beta$, $L_{\text{v}}$, the pocket size $d$ and
every percentage are ink, as `ch14/config.md` decides. No body wears a tint
for its temperature: the warm parcels of the loop are the same ink as the
cool ones, told apart by where they are in the loop, and the warm body and
the cold air of the fur are told by their labels. The flames are the one
colour that is the physical fact.

## Wanted at chapter level

- variables `Q_heat` → 14.6-moving-mass
- variables `t` → 14.6-moving-mass
- variables `m` → 14.6-moving-mass
- variables `c_spec` → 14.6-moving-mass
- variables `ΔT` → 14.6-moving-mass
- variables `ρ_dens` → 14.6-moving-mass
- variables `V` → 14.6-moving-mass
- variables `L_v` → 14.6-phase-change
- equations `eq-convection-heat-rate` → 14.6-moving-mass
- equations `eq-evaporation-rate` → 14.6-phase-change
- concepts `convection-heat-rate`: the evidence names "Example 14.8" for the house; the publisher numbers it Example 14.7, since 14.2 prints three examples, 14.3 one and 14.5 two.
- concepts `convection-with-phase-change`: the evidence names "Example 14.9" for the sweat; the publisher numbers it Example 14.8.

Applied by the chapter pass (2026-09-14): the ten anchors are set as listed,
and the two concept rows name Examples 14.7 and 14.8, the publisher's
numbers.
