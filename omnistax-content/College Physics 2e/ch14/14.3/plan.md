# Plan: 14.3 Phase Change and Latent Heat (m42225)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's standing instruction to finish the book in
waves; the per-section stop of rule 2, the plan review of rule 5 and the user
picks of rule 15 are replaced by this file, written before the section was
built and left for review after, as `ch14/config.md` records.

The section that says what heat does when it does not change a temperature.
Melting and boiling take energy without warming anything, freezing and
condensing give the same energy back, and the amount is a mass times a
material constant, the latent heat. The section states $Q = mL_\text{f}$ and
$Q = mL_\text{v}$, tabulates the constants, walks the heating curve of water
from ice at −20 °C to steam, works one calorimetry example in which ice melts
in a soda, explains why condensation and freezing warm their surroundings,
names sublimation, and closes with the chapter's seven-step problem-solving
strategy. Two diagrams (14.8, 14.9), four photographs (14.7, 14.10, 14.11,
14.12), one table (14.2), one worked example, one boxed note, three glossary
terms, one Check Your Understanding box, eleven conceptual questions, no AP
items, nineteen problems of which ten are keyed. One page (rule 11).

## Sub-concepts (page headers)

The module prints one header of its own, the Problem-Solving Strategies,
kept as the book writes it; the other seven are the agent's (rule 3).

1. `phase-change` **Heat that changes a phase rather than a temperature**
   (book: the opening paragraph with Figure 14.7; the paragraph on cohesive
   bonds; the paragraph on the two factors with the two equations and Figure
   14.8). The variables $\kQh$, $m$, $L_\text{f}$, $L_\text{v}$ and the
   equations `eq-heat-fusion`, `eq-heat-vaporization` and `eq-latent-heat`
   (the summary's $Q = mL$, whose $L$ is `L_latent`) anchor here.
2. `latent-heat-coefficients` **Latent heat coefficients** (book: the
   paragraph "Latent heat is measured in units of J/kg"; the paragraph that
   melts a kilogram of ice and compares it with warming water to 79.8 °C;
   Table 14.2; the paragraph on the stabilizing effect of evaporation and
   condensation in humid climates). The Check Your Understanding box is set
   inline at the end of this block, since what it asks turns on the size of
   the latent heat.
3. `heating-curve` **Heating ice into steam** (book: the paragraph that walks
   the curve segment by segment, and Figure 14.9).
4. `evaporation` **Evaporation below the boiling point** (book: the paragraph
   on perspiration at body temperature).
5. `cooling-soda` **Cooling a soda with ice** (book: Example 14.4, Calculate
   Final Temperature from Phase Change: Cooling Soda with Ice Cubes, with its
   strategy, solution and discussion; the publisher numbers it 14.4, after
   14.2's three). The variables $\kTempf$ and $c$ (`c_spec`, the $c_\text{W}$
   of the example) and the equation `eq-ice-soda-balance` anchor here. The
   Sim of the example sits at the end of the block.
6. `condensation` **Condensation and freezing give the energy back** (book:
   the paragraph on condensation with Figure 14.10; the Real-World
   Application on orchards with Figure 14.11).
7. `sublimation` **Sublimation** (book: the paragraph that defines it with
   Figure 14.12; the paragraph on $Q = mL_\text{s}$). The variable
   $L_\text{s}$ and the equation `eq-heat-sublimation` anchor here.
8. `strategies` **Problem-Solving Strategies for the Effects of Heat
   Transfer** (book: the paragraph "The material presented in this section
   and the preceding section", and the seven numbered steps under the book's
   own header).

Cross references are plain text: the strategy's pointer to the specific heat
of the preceding section and the problem's pointer to 14.2's hot-pan example
stay as the book's words. The converter's `º` is `°` in prose and `^\circ` in
math throughout. Learning objectives, the summary and the three glossary
terms come out of the running text into the tables and the views (rule 4).

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| latent-heat | idea, eq-latent-heat | phase-change | the opening paragraphs, Figure 14.8, the summary's $Q = mL$; the CYU on snow; cq3, cq4 |
| heat-of-fusion | result, eq-heat-fusion | phase-change | the first equation, Table 14.2's water row, the 79.8 °C comparison; p1, p5, p12 |
| heat-of-vaporization | result, eq-heat-vaporization | phase-change | the second equation, 2256 kJ; p3, p10, p18 |
| heating-curve | idea | heating-curve | Figure 14.9 and its paragraph; p7 |
| evaporation-below-boiling | idea | evaporation | the perspiration paragraph and the humid-climate one; cq6, cq7, p9 |
| condensation-and-freezing-release-heat | idea | condensation | Figure 14.10, the orchard note; cq2, cq5, cq10, p12 |
| heat-of-sublimation | result, eq-heat-sublimation | sublimation | the sublimation paragraphs; cq9, cq11 |
| phase-change-calorimetry | skill, eq-ice-soda-balance | cooling-soda | Example 14.4 and the strategies; p14, p16 |

The section leans on `heat` and `heat-vs-temperature` (14.1),
`heat-and-temperature-change`, `specific-heat`, `calorimetry`,
`final-temperature-from-heat-exchange`, `temperature-rise-from-work` and
`water-moderates-temperature` (14.2), `phases-of-matter` and
`atomic-arrangement-and-phase` (11.1), `cohesive-forces` (11.8),
`sublimation` and `vapor-pressure` (13.5), `boiling`, `evaporative-cooling`,
`relative-humidity` and `dew-point` (13.6) and `power` (7.7); the coverage
rows mark each as used where the text uses it.

## Figures

id · replaces or Sim · concepts · value add · moving or still · sliders and
choices · headline · graph · 3D

1. `sim-phases` · replaces Figure 14.8 (a) and (b), the molecules of a solid,
   a liquid and a gas with the energy arrows between them · latent-heat,
   heat-of-fusion, heat-of-vaporization · **variation and intuition**: the
   book draws generic spheres and two pairs of arrows and states no number;
   here the three packings stand in one row, the reader picks the substance
   from Table 14.2 and its mass, and two bars in the energy hue beneath the
   scene show the heat the melting and the boiling of that mass cost, so the
   reader sees that boiling costs several times what melting does for every
   substance, and how the two heats grow with the mass · **still**: the idea
   is an amount of energy and not a rate, and the book's curved arrows
   labelled "energy input, melt" and "energy output, freeze" are notation
   for a transition, not a thing in flight, so they are drawn in the app's
   arrow style and never animated (rules 14 and 24.1; `ch14/config.md`
   decides 14.8 is still, and the arrows the molecules carry that show the
   limits of their motion are drawn as the book draws them, as marks) · a
   substance chosen from Table 14.2 (a dropdown, since seven options would
   wrap a button row: water, helium, nitrogen, oxygen, copper, silver, gold,
   the seven whose particles the element palette can draw, water the
   default; rule 26.1), $m$ (0.10 to 2.00 kg, default 1.00, ink), and a
   choice of direction, energy input (melt, boil) or energy output (freeze,
   condense), default input, which flips the arrows and turns "required"
   into "released" in the readout · "Melting 1.00 kg of water at 0 °C takes
   334 kJ, and boiling it at 100 °C takes 2256 kJ, nearly seven times as
   much." · none: two heat bars on one fixed scale, 0 to 5000 kJ, under the
   three packings; a bar past the scale is pinned at its end with its value
   written · 2D. Readout: $\kQh = mL_\text{f}$ and $\kQh = mL_\text{v}$ with
   the live numbers, $Q$ in the energy hue and $m$ and $L$ in ink; small line
   on the melting and boiling points of the chosen substance from the table
   and on the energy being the same in both directions. The particles are
   water molecules, diatomic nitrogen or oxygen, or single atoms, filled
   from the element palette (rule 7; `ch14/COLOR.md`), and the phase is told
   by packing alone. Labels: the three phase names, the four transition
   arrows and the two bar labels, nine frame labels and no entity labels, so
   all are on. Draws energy.
2. `sim-heating-curve` · replaces Figure 14.9, temperature against heat
   added for water from ice at −20 °C to steam · heating-curve,
   heat-of-fusion, heat-of-vaporization, heat-and-temperature-change ·
   **variation and intuition**: the book's graph is one still curve; here
   the reader slides the heat added per kilogram along it and a container
   beside the graph shows what the sample is at that point, ice, ice and
   water, water, water and steam, or steam, with the melted or boiled
   fraction drawn, so the plateaus become visible as heat going into a
   mixture whose temperature will not move · **still**: the idea is an
   amount of heat added and the state it produces, and the book's figure
   carries no rate; a moving point that crawled along the curve on its own
   would be the dummy loop rule 14 forbids (`ch14/config.md` decides the
   curve is still) · $\Delta Q/m$, the heat added per kilogram (0 to 3200
   kJ/kg, default 200, ink, since energy per kilogram is the untyped
   dimension of $L$), and $m$ (0.10 to 2.00 kg, default 1.00, ink), which
   sets the total heat the readout states in the energy hue · "After 200
   kJ/kg the ice has warmed to 0 °C and 47 percent of it has melted; the
   temperature holds at 0 °C until all of it has." · beside: a container
   at the left is a vertical scene and the graph, 900 wide, sits at its
   right; axes fixed at 0 to 3200 kJ/kg and −20 to 180 °C, which holds the
   book's curve with its 130 °C of steam and the slider's full run · 2D. Readout: the heat
   for the mass through the stages reached so far, for example $\kQh =
   mc_\text{ice}\kdTemp + m_\text{melted}L_\text{f}$ with the live numbers,
   $Q$ and $\Delta T$ in their hues; small line naming the stage and the
   specific heat or latent heat that sets its slope or its length. Specific
   heats and latent heats are the book's own for this figure, 0.50, 1.00 and
   0.482 cal/g·°C and 79.8 and 539 cal/g, converted at 4.186 J/cal. The
   book's axis prints kJ/kg with numbers that are thousands; the figure
   prints kJ/kg with the numbers to match. Labels: the five segment names on
   the curve, the axis titles and the container's contents, all on; nothing
   moves. Draws energy, temperature.
3. `sim-ice-soda` · Sim (it replaces no figure of the book; it is Example
   14.4) · phase-change-calorimetry, heat-of-fusion, calorimetry,
   final-temperature-from-heat-exchange · **variation and intuition**: the
   example's one answer, 13 °C, becomes a heat budget the reader can push
   about, the heat the soda gives up set against the heat that melts the
   ice and then warms the meltwater, with the final temperature read off a
   bar; put in more ice than the soda can melt and the budget runs out at 0
   °C with ice left over, a state the book only hints at in the discussion
   · **still**: the example asks for the final state, not how fast it is
   reached (rule 14) · $m_\text{ice}$ (0 to 0.100 kg, default 0.018, ink,
   with soft detents at 6 g steps, one ice cube each), $m_\text{soda}$ (0.10
   to 0.50 kg, default 0.25, ink), $T_\text{soda}$ (1 to 40 °C, default 20,
   temperature); the ice is at 0 °C as the example assumes · "Three ice
   cubes, 18 g in all, melt in 0.25 kg of soda at 20 °C and bring it to 13
   °C." · none: a cup with the ice and the soda at the left, a temperature
   bar beside it, and the two sides of the heat budget as bars on one fixed
   scale, 0 to 40 kJ, at the right · 2D. Readout: $\kTempf =
   \frac{m_\text{soda}c_\text{W}(T_\text{soda}) - m_\text{ice}L_\text{f}}
   {(m_\text{soda} + m_\text{ice})c_\text{W}}$ with the live numbers, and,
   where the ice is more than the soda can melt, $\kTempf = 0^\circ\text{C}$
   with the mass melted from $m_\text{soda}c_\text{W}T_\text{soda} =
   m_\text{melted}L_\text{f}$; small line on the two steps of the melting.
   Labels: the two bar names, the cup's contents and the temperature bar's
   ends, all on. Draws energy, temperature.

Photographs, all four kept with the book's captions and credits and each a
`photo` row: 14.7, the icicle (the text opens on water dripping from
icicles, and the photograph is that; width 272); 14.10, the iced tea (the
text says "the glass in the figure", so it is pointed at; width 286); 14.11,
the ice on the orchard trees (it shows the thing the Real-World Application
is about and sits inside the note; width 350); 14.12, dry ice and frost (two
panels in one image that show the two directions of sublimation the
paragraph describes; the CNXML gives it no width, so `widths` stays empty).
None is dropped.

Figures that serve exercises: the problems of the section refer to no figure
of their own, and none is needed.

Extra simulations (rule 15), thought through, judged and decided:

- **The soda cooled with ice (`sim-ice-soda`): built**, above, because the
  skill the section's problems test most, a heat exchange with a phase
  change in it, is drawn nowhere in the book, and a heat budget with a
  final-temperature bar is a view the two required figures do not give.
- A bag of ice against a bag of water at 0 °C, the second problem's
  comparison. Left: `sim-phases` puts the 334 kJ of melting beside the
  warming that the heating curve draws, and the comparison is already on the
  page.
- Table 14.2 as a bar chart of latent heats across substances. Left: the
  table is on the page, and `sim-phases` draws the two heats for any row the
  reader picks.
- The dew point and the night air that will not cool below it. Left: it is
  13.6's humidity figure with a different caption, and the question is a
  conceptual one the reader should reason through in words.

Figure pass (2026-09-15, Claude Fable 5.1). The three figures were screenshot at their defaults, slider extremes and every substance in both themes and looked at. `sim-ice-soda`: the cubes that had melted were drawn as dashed ghosts in a cup of grey, which read as nothing; the soda is a tinted liquid with a surface line, only the ice that is still ice floats at the surface, and the caption line under the cup says when all of it has melted. `sim-phases` and `sim-heating-curve` were found clean and are unchanged.

## Exercises

- One Check Your Understanding box, `cyu1` (fs-id2408137, why snow remains
  on a slope above freezing), keyed by the book, Understand, set inline at
  the end of `latent-heat-coefficients`, whose passage makes the size of the
  latent heat concrete; the host div closes that block.
- 11 conceptual questions, none keyed, each an open item at the end with an
  AI-marked suggested approach: `cq1` (fs-id1412690, what else causes these
  changes, Understand), `cq2` (fs-id2621789, large bodies of water and the
  heat of fusion, Understand), `cq3` (fs-id3449946, the temperature of ice
  just formed, Remember), `cq4` (fs-id3225958, 0 °C ice in 0 °C water,
  Understand), `cq5` (fs-id1933185, condensation and the melting rate,
  Understand), `cq6` (fs-id3105447, evaporation in humid climates,
  Understand), `cq7` (fs-id2677751, San Francisco and Sacramento, Analyze),
  `cq8` (fs-id2595298, a lid on a boiling pot, Understand), `cq9`
  (fs-id1926483, freeze-drying in a vacuum, Analyze), `cq10` (fs-id1215980,
  still air and the dew point, Understand), `cq11` (fs-id2449057, the balloon
  in liquid nitrogen, Analyze).
- No AP test prep items: the module prints none.
- 10 problems keyed and kept, named by their position in the book's list:
  `p1` (fs-id2668191, thawing frozen vegetables, 35.9 kcal), `p3`
  (fs-id2011381, the aluminum pot brought to the boil, (a) 591 kcal and (b)
  4.94 × 10³ s), `p5` (eip-id1169190623482, the bag of ice in the cooler,
  13.5 W), `p7` (eip-200, 0.200 kg of ice from −20.0 °C to 130 °C, (a) 148
  kcal and (b) the five times; part (c), the graph, is what
  `sim-heating-curve` draws and is left to the reader), `p9` (fs-id2400640,
  the coffee that cools by evaporating, 33.0 g), `p10` (fs-id3180433, the
  crude-oil fire, keyed 9.67 L for part (a) with the book's own answer to
  part (b) in the solution), `p12` (fs-id3452480, the fruit tree sprayed
  with water, (a) 319 kcal and (b) 2.00 °C), `p14` (fs-id3085487, the ice
  cube at −30.0 °C in warm water, 20.6 °C), `p16` (fs-id1479060, the hot
  rocks in the basket, 4.38 kg), `p18` (fs-id3449621, the liquid nitrogen
  on the dairy truck, three parts).
- 9 problems left out, having no answer in the book's key: the bag of ice
  against the bag of water (fs-id2011380), the condensation that melts ice
  (fs-id2688971), the swimming pool that evaporates (fs-id1997134), the Ross
  Ice Shelf iceberg (fs-id2654995), the thunderstorm's condensation
  (fs-id1560755), the aluminum bowl of soup in the freezer (fs-id3144981),
  the water poured onto a block of ice (fs-id2487283), the hot pan of 14.2
  with evaporation (fs-id2684990) and the lead bullets (fs-id1815385). They
  are named in `notes` and in `exercise_notes`.
- Nothing is taken from another section and nothing of this section's own
  is held back.
- No generated questions: every node of the section has a book exercise
  that tests it.
- Weights: a problem gives its full value to the concept its work is and a
  smaller one to the steps along the way; `p3`, `p9`, `p10`, `p12` and `p18`
  give `heat-and-temperature-change` (14.2) a partial weight for the warming
  stage, `p14` and `p16` give `calorimetry` (14.2) a partial weight, and `p5`
  and `p3` give `power` (7.7) a small weight for the rate.

## Views

- Formulas: the five equations of the section already in `chapter.json`,
  the four stated and named ones important and the ice-soda balance not.
- Definitions: the eight variables of the section, and the three glossary
  terms, heat of sublimation, latent heat coefficient, sublimation.
- Concept map: the eight nodes above with their edges into 7.7, 11.1, 11.8,
  13.5, 13.6, 14.1 and 14.2.

## Colour

The page binds energy and temperature, as `ch14/COLOR.md` says 14.3 does.
Every figure draws a heat as a bar in the energy hue and writes $\kQh$ in
its readout; the heating curve's axis, the soda's temperature bar and the
final temperature of the readout are the temperature hue. The mass, the
latent heats, the specific heats and the heat per kilogram of the heating
curve's slider are untyped and in ink, and the particles of `sim-phases` are
filled from the element palette because a chosen substance gives them an
identity (rule 7). Nothing on the page binds time or power: every law it
states is for an amount.

## Wanted at chapter level

- variables `Q_heat` (section 14.3) → 14.3-phase-change
- variables `m` (section 14.3) → 14.3-phase-change
- variables `L_f` → 14.3-phase-change
- variables `L_v` → 14.3-phase-change
- variables `L_latent` → 14.3-phase-change
- variables `L_s` → 14.3-sublimation
- variables `T_ftemp` (section 14.3) → 14.3-cooling-soda
- variables `c_spec` (section 14.3) → 14.3-cooling-soda
- equations `eq-heat-fusion` → 14.3-phase-change
- equations `eq-heat-vaporization` → 14.3-phase-change
- equations `eq-latent-heat` → 14.3-phase-change
- equations `eq-heat-sublimation` → 14.3-sublimation
- equations `eq-ice-soda-balance` → 14.3-cooling-soda
- The example writes $Q_\text{ice}$, $Q_\text{soda}$, $m_\text{ice}$,
  $m_\text{soda}$ and $c_\text{W}$, none of which is a symbol row; the text
  and the figures write them in plain LaTeX and in ink, as 9.2 writes $m_1$
  and $m_2$. Nothing is wanted unless the chapter pass would rather have
  energy-typed rows for the two heats.
- `ch14/config.md` decides Figure 14.8 is still and `ch14/COLOR.md` says the
  thermal-motion arrows on its molecules animate; the page follows the
  config, since the arrows are the book's marks for the limits of motion and
  a jiggle would be a loop with no idea behind it. The chapter pass may
  settle the two files.

Applied by the chapter pass (2026-09-14): the thirteen anchors are set as
listed. The example's $Q_\text{ice}$, $Q_\text{soda}$, $m_\text{ice}$,
$m_\text{soda}$ and $c_\text{W}$ stay in plain LaTeX and in ink; no row is
added. `ch14/COLOR.md` now agrees with the config and the page that Figure
14.8 is still and its arrows are marks. The heating curve's ranges above are
corrected to the figure's own, 0 to 3200 kJ/kg and −20 to 180 °C.
