# Plan: 13.6 Humidity, Evaporation, and Boiling (m42219)

Source: `source.md` (converted from CNXML). Status: built 2026-09-14 without a
review stop, under the chapter's `config.md`, with the plan left for review.

The last section of the chapter, and the one that puts the vapor pressure of
13.5 to work. One opening photograph (dew on a banana leaf, Figure 13.31),
two sketch figures (the open and sealed containers of Figure 13.32, the bubble
in a heated beaker of Figure 13.33), one table (Table 13.5, the saturation
vapor density of water), one boxed definition (Percent Relative Humidity), two
worked examples, one Check Your Understanding box, three conceptual questions
and twenty-four problems, of which seven range over the chapter and are set in
the sections that introduce what they test. The PhET note is dropped per the
chapter config. One page (rule 11).

## Sub-concepts (page headers)

The book prints no headers of its own between the objectives and the summary,
only the run of the argument; the six headers below are the agent's, and are
reported here as the chapter config asks.

1. `humidity` **Relative humidity, saturation, and the dew point** (book: the
   opening paragraph on sweat and humidity; the paragraph defining relative
   humidity, saturation and the dew point, and the drying of hair). The
   ideas relative humidity, evaporative cooling and the dew point are met
   here.
2. `vapor-pressure` **The vapor pressure of water sets how much vapor the air
   can carry** (book: the paragraph on the liquid giving off vapor and the
   sealed container coming to equilibrium, Figure 13.32; the paragraph on
   partial pressure against vapor pressure and the air not "holding" water;
   Table 13.5). Uses 13.5's vapor pressure, phase equilibrium and Dalton's
   law.
3. `vapor-density` **Calculating the vapor density from the vapor pressure**
   (book: Example 13.10). $\kPr V = nR\kTemp$ and $n/V = \kPr/R\kTemp$ anchor
   here.
4. `percent-humidity` **Percent relative humidity** (book: the boxed
   definition and the sentence after it). The defining equation anchors here.
5. `humidity-example` **Calculating humidity and dew point** (book: Example
   13.11 in three parts and its discussion of dew, frost and deserts). The
   skill of working every humidity problem from Table 13.5 is introduced
   here, and the humidity Sim sits before the example.
6. `boiling` **Why water boils** (book: the paragraph on boiling and the
   bubble, Figure 13.33; the Check Your Understanding box on freeze drying
   sits inline after it).

Cross references are plain text: "Heat and Heat Transfer Methods" for the
link into Chapter 14. Every `º` of the source is written `°C` in prose and
`^\circ\text{C}` inside math. The symbols the page colours are $\kPr$ (the
vapor pressure and partial pressure), $\kTemp$ and $\krho$ (the vapor
density); $n$, $V$ and $R$ stay in ink.

Learning objectives, section summary and glossary come out of the running
text into the views.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| relative-humidity | idea | humidity | the opening paragraphs, the glossary, the "air holds water" correction, CQ 1 |
| evaporative-cooling | idea | humidity | sweat and humidity, drying hair, the Check Your Understanding box, CQ 3 |
| dew-point | idea | humidity | the definition in the second paragraph, Example 13.11(b), problem 15 |
| vapor-density-from-vapor-pressure | skill, eq-vapor-density | vapor-density | Example 13.10, problem 11 |
| percent-relative-humidity | result, eq-percent-relative-humidity | percent-humidity | the boxed definition, Example 13.11(a) and (c), problems 7 and 13 |
| humidity-from-the-table | skill | humidity-example | Example 13.11, problems 7, 13, 15 and the boiling problems that read Table 13.5 |
| boiling | idea | boiling | the boiling paragraph, Figure 13.33, CQ 2, problems 3, 5, 17 |

The section leans on `vapor-pressure`, `phase-equilibrium` and `daltons-law`
(13.5), `ideal-gas-law-moles` (13.3), `density` and `atmospheric-pressure`
(11.2, 11.4), `buoyant-force` (11.7) and `maxwell-boltzmann-distribution`
(13.4), which the coverage rows mark as used where the text uses them.

## Figures

id · replaces · concepts · value add · motion · sliders · headline · graph · depth

1. `sim-evaporation` · replaces Figure 13.32 (a) and (b) · relative-humidity,
   vapor-pressure, phase-equilibrium · value add: flow by animation and
   variation by slider; the still cannot show that equilibrium is two rates
   becoming equal, and the reader would otherwise have to imagine molecules
   leaving and returning · **moves**, as the chapter config allows for the
   exchange between a liquid and its vapor: water molecules in the liquid
   jiggle in place, the fastest at the surface break away into the vapor
   space, and each one flies in a straight line, bouncing off the walls; with
   the container open they leave through the mouth and drift into the room,
   and with the lid on, which goes on at $t = 0$, they bounce back from it and
   return to the surface, so the vapor builds up until molecules condense as
   fast as they evaporate. One loop is the five seconds after sealing, then a
   hold; the open container runs the same five seconds as a steady stream. The
   evaporation rate and the condensation rate are drawn as two arrows beside
   the container, and the vapor density as a bar against the saturation
   value, so the balance is read as well as seen · temperature $\kTemp$ (0 to
   100 °C, step 1, default 20, temperature); a choice, open or sealed (the
   book's (a) and (b)), sealed the default · "2.4 s after sealing at 20 °C the
   vapor is at 80% of saturation, so molecules condense at 80% of the rate
   they evaporate." · none: the container is the picture · 2D. The launch
   rate is proportional to the saturation vapor density of Table 13.5 at the
   set temperature, so the vapor space at equilibrium holds a number of drawn
   molecules proportional to that density (six tenths of a molecule per
   g/m³, so 10 at 20 °C and 359 at 100 °C), and the molecular speed grows as
   $\sqrt{\kTemp}$ in kelvins, which is why hotter water looks much the same
   except that far more molecules escape; values between the rows of the table
   are read in a straight line. Readout: $\kPr_{\text{vapor}}$ and
   $\krho_{\text{sat}}$ at $\kTemp$ from Table 13.5, with a small line on the
   share of saturation reached and the two rates. Molecules are drawn in
   `F.el('O')` with a hover name (rule 26.6), the liquid told from the vapor
   by packing, never by colour; the labels that remain (liquid, vapor, lid,
   the two rates, the bar) are six and are on. Draws temperature, pressure,
   density.
2. `sim-humidity` · Sim (replaces nothing) · percent-relative-humidity,
   dew-point, humidity-from-the-table · value add: intuition and variation by
   slider; Table 13.5 becomes a curve, the humidity is a ratio of two heights
   on it and the dew point is where a horizontal line meets it, which no
   table shows · **still**: nothing has a clock, the figure answers its
   sliders · air temperature $\kTemp$ (−20 to 40 °C, step 0.5, default 25.0,
   temperature); vapor density $\krho$ (0.5 to 60 g/m³, step 0.1, default
   9.40, density) · "At 25.0 °C air carrying 9.40 g/m³ of water vapor is at
   40.9% relative humidity and reaches its dew point at 10.0 °C." · the graph
   is the idea, alone: saturation vapor density against temperature from the
   rows of Table 13.5 between −20 and 40 °C, axes fixed at −20 to 40 °C and 0
   to 60 g/m³, the rows marked, the air's state as a filled dot, the
   saturation density at that temperature as a hollow dot above it on the
   curve, the vertical gap bracketed, and the dew point found by running
   left along the vapor density to the curve and dropping to the axis · 2D.
   Where the vapor density is set above saturation the readout says how many
   grams condense out of each cubic meter, which is problem 16's question.
   Rows are interpolated in a straight line, which is how the key reads 4.77
   °C for problem 15. Readout: the defining equation with the live numbers;
   small line on the dew point. Draws temperature, density.
3. `sim-boiling` · replaces Figure 13.33 (a), (b) and (c) · boiling,
   daltons-law, vapor-pressure · value add: variation by slider and intuition;
   the book draws three moments of one bubble and the reader must imagine
   the vapor's share of the bubble's pressure growing, which the figure draws
   as a stacked bar · **still**, as the chapter config decides for the
   bubble: the picture answers its sliders, and the bubble's rise at the
   boiling point is a state, not a motion the reader must watch · water
   temperature $\kTemp$ (20 to 100 °C, step 0.5, default 20, temperature);
   the pressure over the water $\kPr$ (0.30 to 2.00 atm, step 0.01, default
   1.00 with a detent, pressure), which reaches the altitude and
   pressure-cooker problems · "At 20 °C the bubble is 2.30% water vapor and
   97.7% air, and it sits on the bottom." and, at the boiling point, "At
   100 °C the vapor pressure equals the 1.00 atm over the water, so vapor
   enters the bubble without limit: it grows, breaks away and rises." · no
   graph; the stacked bar of the two partial pressures sits beside the
   beaker · 2D. The bubble holds a fixed amount of air and is saturated with
   water vapor, so its air is at $\kPr - \kPr_{\text{vapor}}(\kTemp)$ and its
   volume follows the ideal gas law from the book's 20 °C start; the radius
   is drawn as the cube root of that volume, and once the vapor pressure
   reaches the pressure over the water the bubble is drawn broken away and
   rising, as the book's (c). The boiling point at the set pressure is read
   from Table 13.5 in a straight line between rows. The burner is drawn in
   ink. Readout: $\kPr_{\text{vapor}}(\kTemp)$, the air's partial pressure and
   their sum; small line naming the boiling point at this pressure. Draws
   temperature, pressure.

Photograph: Figure 13.31, dew drops on a banana leaf, dropped as the
chapter config decides (a splash image nothing in the text points at),
named in `notes`.

Extra simulations (rule 15), considered and left:

- A psychrometric chart (humidity against temperature at several vapor
  densities): the humidity Sim already answers both sliders. Left.
- The boiling point against altitude: the pressure slider of the boiling
  figure covers it and the book gives no altitude table. Left.

None built.

Figure pass (2026-09-15, Claude Fable 5.1). Every figure was screenshot at its default, its slider extremes, every choice and three points of its cycle in both themes. `sim-humidity`: at the cold end the "condenses" label and the off-graph dew point label were set to the left of a point on the left axis and ran off the canvas; both now take the side of the point that has room. `sim-evaporation` and `sim-boiling` were found clean and are unchanged.

## Exercises

- 1 Check Your Understanding box, `cyu1` (fs-id2722050, freeze drying),
  keyed, Understand, inline after `boiling`, whose host `div.exercises` sits
  after the boiling passage; tagged `evaporative-cooling` at full value and
  `relative-humidity` at weight 2.
- 3 conceptual questions, `cq1` to `cq3`, with AI-written suggested
  approaches: `cq1` (the helium atmosphere and altitude, Understand,
  `relative-humidity`, `vapor-pressure` weight 2), `cq2` (40.0 °C water
  boiling in a vacuum chamber, Apply, `boiling`, `humidity-from-the-table`
  weight 2), `cq3` (rubbing alcohol evaporating faster than water,
  Understand, `vapor-pressure`, `evaporative-cooling` weight 2).
- 7 problems keyed and kept, numbered by their place in the book's list:
  `p3` (the pressure cooker at 120.0 °C, multi), `p5` (Everest when water
  boils at 70.0 °C, number), `p7` (relative humidity at 25.0 °C with 18.0
  g/m³, number), `p11` (the water in exhaled air, multi), `p13` (the autumn
  evening, number), `p15` (the dew point at 39.0% and 20.0 °C, number), `p17`
  (the depth at which water boils at 150 °C, number, Integrated Concepts).
- 10 problems left out, having no answer in the book's key: fs-id1423931,
  fs-id1423468, fs-id1861214, fs-id1477204, fs-id2206267, fs-id2635848,
  fs-id2085047, fs-id1806668, fs-id2688861 and fs-id1689262.
- 7 problems set in other sections with `source_section: "13.6"`, as the
  chapter config decides: fs-id1543836 and fs-id1669904 to 13.2, fs-id1582923
  to 13.3, fs-id2705483 to 13.4, fs-id1893897, fs-id2377418 and fs-id2298434
  to 13.5.
- No generated questions: every node has a book exercise.
- Weights: `p3` and `p5` turn on the boiling point read from Table 13.5, so
  `boiling` takes the full value and `humidity-from-the-table` weight 2, and
  `p3` gives `gauge-pressure` weight 2 for its part (b); `p7` and `p13` give
  `percent-relative-humidity` the full value and `humidity-from-the-table`
  weight 3; `p15` gives `dew-point` the full value and
  `humidity-from-the-table` weight 3; `p11` gives
  `vapor-density-from-vapor-pressure` the full value and
  `ideal-gas-law-moles` weight 2; `p17` gives `boiling` the full value and
  `pressure-from-weight-of-fluid` weight 3.

## Views

- Formulas: the two equations of the section already in `chapter.json`,
  both important.
- Definitions: the six variables of the section; the four glossary terms.
- Concept map: the seven nodes above with their edges into 11.2, 11.4, 11.7,
  13.3, 13.4 and 13.5.

## Colour

The page binds temperature, pressure and density: every figure carries
$\kTemp$ on a slider and states it in its headline, the evaporation and
boiling figures state the vapor pressure and the boiling figure carries the
pressure over the water on a slider and draws the two partial pressures as
a bar, and the evaporation and humidity figures carry or draw the vapor
density. Water molecules wear the element palette; the number of moles $n$,
the volume $V$, the gas constant $R$ and every percentage stay in ink, and no
body is tinted for its temperature.

## Wanted at chapter level

- variables `P_press` → 13.6-vapor-density
- variables `n` → 13.6-vapor-density
- variables `V` → 13.6-vapor-density
- variables `R_gas` → 13.6-vapor-density
- variables `T_temp` → 13.6-vapor-density
- variables `ρ_dens` → 13.6-vapor-density
- equations `eq-vapor-density` → 13.6-vapor-density
- equations `eq-percent-relative-humidity` → 13.6-percent-humidity
- No concept or symbol fix is wanted.

Applied in the chapter pass (2026-09-14): every anchor above is written on its
row, six variables and two equations. `exercise_notes` now names each of the
seven items that left the section by its id and the section it is set in,
and says that the two unkeyed ones (fs-id1669904, fs-id2298434) are set in
neither.
