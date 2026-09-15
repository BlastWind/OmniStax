# Plan: 14.2 Temperature Change and Heat Capacity (m42224)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's instruction to finish the book in waves;
the per-section stop of rule 2, the plan review of rule 5 and the user picks
of rule 15 are replaced by this file, written before the section was built
and left for review after, as `ch14/config.md` records.

The section that turns heat into a number. 14.1 said that heat is energy in
transit and that work can do the same job; this section says how much heat
a given temperature change costs, names the three things it depends on, the
temperature change, the mass and the substance, writes them into one
equation, $Q = mc\Delta T$, and tabulates the specific heat that carries the
substance's part. Three worked examples: water heated in an aluminum pan,
the brakes of a truck warmed by the potential energy the truck loses, and
cold water poured into a hot pan meeting at one temperature, which is the
calorimetry every later section leans on. One diagram (14.4), two
photographs (14.5 kept, 14.6 dropped), one table (14.1), two boxed notes,
one Check Your Understanding box, two conceptual questions, ten problems of
which five are keyed, one glossary term, no AP items. One page (rule 11).

## Sub-concepts (page headers)

The module prints no header of its own, so all six are the agent's (rule 3).
The book's order is kept throughout, Table 14.1 included, which the book
sets after the truck example although the text first points at it before
Example 14.1.

1. `three-factors` **Three factors decide the heat transferred** (book: the
   opening paragraph; Figure 14.4; the paragraph explaining the dependence
   on temperature change and mass from kinetic theory).
2. `heat-equation` **Heat transfer and temperature change** (book: the
   boxed note Heat Transfer and Temperature Change with the equation and the
   definition of specific heat; the paragraph on looking values up in
   Table 14.1 and on water's large specific heat; Example 14.1, Heating
   Water in an Aluminum Pan). The variables $\kQh$, $m$, $c$, $\kdTemp$,
   $\kTempf$, $\kTempi$ and the equations `eq-heat-temperature-change` and
   `eq-temperature-difference` anchor here. The Check Your Understanding
   box is hosted at the end of this span.
3. `work-into-heat` **Temperature increase from work done on a substance**
   (book: Figure 14.5, the smoking brakes; Example 14.2, Truck Brakes
   Overheat on Downhill Runs). The variable $\kPEg$ and the equation
   `eq-temperature-change-from-heat` anchor here.
4. `specific-heats` **The specific heats of common substances** (book:
   Table 14.1 with its three footnotes; the paragraph noting that Example
   14.2 illustrates the mechanical equivalent of heat). The variables
   $c_\text{v}$ and $c_\text{p}$ anchor here.
5. `calorimetry` **Heat transferred between two bodies** (book: Example
   14.3, Pouring Cold Water in a Hot Pan, with its strategy, five steps and
   discussion; the sim stands before it). The variables $\kQhot$ and
   $\kQcold$ and the equations `eq-calorimetry`, `eq-heat-balance` and
   `eq-final-temperature` anchor here.
6. `land-and-water` **Land and water warm at different rates** (book: the
   boxed Take-Home Experiment, Temperature Change of Land and Water).

The CNXML numbers none of the examples; the publisher prints them as
Examples 14.1, 14.2 and 14.3 and the page follows that. The table's
`[ref:…]` links are written as the plain text "Table 14.1" and the
reference to the truck example as "Example 14.2", and the app links them.
Learning objectives, the summary and the glossary term go out to the tables
(rule 4). The book's slip in Example 14.1, "27.0 × 10⁴ J = 27.0 kJ", is kept
as printed and named in `notes`, as `ch14/config.md` decides. Every `º`
the converter carried out of the CNXML is written `°` in prose and
`^\circ` in math.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| three-factors-of-heat-transfer | idea | three-factors | Figure 14.4's three pairs of cylinders; the first conceptual question |
| heat-and-temperature-change | result, eq-heat-temperature-change | heat-equation | the boxed note; Example 14.1; the pool, bottle and copper-to-water problems; the CYU box |
| specific-heat | idea | heat-equation | the definition in the note; Table 14.1; the water-to-glass-to-iron comparison |
| temperature-rise-from-work | skill, eq-temperature-change-from-heat | work-into-heat | Example 14.2; the rubbing-hands problem; the brakes-at-twice-the-speed question |
| calorimetry | result, eq-calorimetry | calorimetry | Example 14.3's step 3; the peanut problem (unkeyed, left out) |
| final-temperature-from-heat-exchange | skill, eq-final-temperature | calorimetry | Example 14.3's steps 4 and 5 |
| water-moderates-temperature | idea | calorimetry | the discussion of Example 14.3; the Take-Home Experiment |

The section leans on `heat`, `mechanical-equivalent-of-heat` and
`units-of-heat` (14.1), `thermal-energy` (13.4), `thermal-equilibrium`
(13.1), `mass` (4.2), `gravitational-potential-energy` (7.3),
`kinetic-energy` (7.2), `work` (7.1), `power` (7.7) and
`conservation-of-energy` (7.6); the coverage rows mark each as used where
the text uses it.

## Figures

id · replaces or Sim · concepts · value add · moving or still · sliders ·
headline · graph · 3D

1. `sim-three-factors` · replaces Figure 14.4 (a), (b) and (c), the three
   pairs of cylinders · three-factors-of-heat-transfer,
   heat-and-temperature-change, specific-heat · **variation by slider**: the
   book draws three comparisons against one copper cylinder and the reader
   can make every one of them, and every one in between, and read the
   ratio; the still cannot show that doubling both the mass and the change
   quadruples the heat, or that gold takes a third of what copper takes ·
   **still**: the figure compares amounts of heat, and an amount has no
   clock in it; the wavy arrow is the book's notation for heat delivered
   and is drawn once, not animated, as `ch14/config.md` decides for 14.4 ·
   $m$ (0.50 to 2.00 kg, default 1.00, ink, soft detents at $m$ and $2m$),
   $\kdTemp$ (5.0 to 20.0 °C, default 10.0, temperature, soft detents at
   $\Delta T$ and $2\Delta T$), and the substance as a dropdown of the
   solids and liquids of Table 14.1 (the human body, which is not a
   cylinder, left out), default water, because a substance is a state and
   not a quantity (rule 26.1). The reference cylinder is copper
   at 1.00 kg and 10.0 °C, the book's (c) is the default state, and its (a)
   and (b) are the detents with copper chosen · "1.00 kg of water warmed by
   10.0 °C takes 41.9 kJ, which is 10.8 times the 3.87 kJ that 1.00 kg of
   copper warmed by 10.0 °C takes." · none: the two cylinders with their
   heat arrows and a bar of heat beside each, drawn to one fixed scale set
   by the largest heat the sliders reach (43.2 times the reference), are the
   picture · 2D. Labels on: two cylinders, two bars, nothing moves. Readout:
   $\kQh' = m'c'\kdTemp'$ with the live numbers; small line stating the
   ratio to the copper cylinder and which of the three factors made it.
   Draws energy, temperature.
2. `sim-calorimetry` · Sim (Example 14.3 has no figure in the book) ·
   calorimetry, final-temperature-from-heat-exchange,
   water-moderates-temperature, thermal-equilibrium · **intuition and
   variation by slider**: the heat each body loses or gains is drawn as an
   area on a temperature axis, a column whose width is the body's $mc$ and
   whose height is its temperature change, so that the two areas are equal
   by construction and the final temperature is seen to sit where they
   balance, nearer the body with the larger $mc$; the text's algebra
   cannot show why 59.1 °C is so much nearer 20.0 °C than 150 °C, and the
   sliders let the reader make the pan heavier until it is not · **still**:
   the figure answers where the two bodies end, not how they get there,
   and the book's example asks for the equilibrium temperature alone, as
   `ch14/config.md` decides · $m_\text{Al}$ (0.10 to 2.00 kg, default
   0.500, ink), the pan's $\kTempi$ (20 to 300 °C, default 150,
   temperature), $m_\text{W}$ (0.05 to 1.00 kg, default 0.250, ink), the
   water's $\kTempi$ (0 to 100 °C, default 20.0, temperature) · "The pan at
   150 °C and the water at 20.0 °C meet at 59.1 °C, much nearer the water,
   whose mass times specific heat is the larger." · the graph is the scene:
   the temperature axis is fixed at 0 to 300 °C from the pan's slider
   maximum, the column widths at 0.15 canvas units per J/°C from the
   sliders' maxima, and a small drawing of the pan on its pad stands at the
   left · 2D. Labels on: two columns, two temperatures, one final level.
   Readout: $\kTempf$ as the weighted average with the live numbers,
   `eq-final-temperature`; small line writing $|\kQhot| = \kQcold$ with the
   live heat, and, where the final temperature passes 100 °C, that the
   water would boil and that the calculation assumes no phase change, which
   the next section takes up. Draws energy, temperature.
3. `fig-truck-brakes` · keeps Figure 14.5, the truck with smoking brakes ·
   photo · kept because it is the thing Example 14.2 is about and the
   caption names the mechanical equivalent of heat the example computes
   (`ch14/config.md` keeps it) · width 300.

Photographs: Figure 14.5 kept (above). Figure 14.6, the spent-fuel pool,
dropped: it belongs to the reactor problem, which has no keyed answer and
is left out, and `ch14/config.md` drops it.

Figures that serve exercises: none of the section's kept exercises refers
to an image.

Extra simulations (rule 15), thought through, judged and left:

- The truck on its downhill run, with sliders on the truck's mass, the
  drop and the fraction of the energy the brakes keep. Left: it is
  `sim-three-factors` solved the other way about, with $Mgh$ in place of
  $Q$, and the photograph and Example 14.2 carry the one thing the sim
  would add, that a large truck warms a small brake a great deal.
- The land and water of the Take-Home Experiment warming under one lamp.
  Left: it is `sim-three-factors` with sand in place of copper, and the
  experiment is meant to be done, not watched.
- A bar chart of Table 14.1. Left: the table is on the page and the
  dropdown of `sim-three-factors` walks it with a bar of heat for each row.

Figure pass (2026-09-15, Claude Fable 5.1). Both figures were screenshot at their defaults, slider extremes and every substance in both themes and looked at. `sim-calorimetry`: the word "the water" lay on the water's fill in the small drawing of the pan and is on a panel now. `sim-three-factors` was found clean and is unchanged.

## Exercises

- `cyu1` (fs-id3345408, the block heated from 25 to 30 °C and from 45 to
  50 °C): Understand, inline after `heat-equation`, keyed by the book.
- 2 conceptual questions, neither keyed, each an open item with an
  AI-marked suggested approach at the end: `cq1` (fs-id3200990, the three
  factors, Remember, citing `three-factors`) and `cq2` (fs-id3225894, the
  brakes stopping a car from twice the speed, Analyze, citing
  `work-into-heat`).
- No AP items of the section's own and none taken from another section.
- 5 problems keyed and kept, numbered by the book's order: `p1`
  (fs-id3109981, the 80,000 L pool, 5.02 × 10⁸ J, Apply), `p3`
  (fs-id3034501, the glass baby bottle, 3.07 × 10³ J, Apply), `p5`
  (fs-id3397911, rubbing the hands, 0.171 °C, Analyze), `p7`
  (fs-id2423610, the ratio of copper to water, 10.8, Apply) and `p9`
  (fs-id3449821, the person cooling from 40.0 to 37.0 °C, 617 W, Analyze).
- 1 problem taken from 14.7 with `source_section: "14.7"`: `ur1`
  (fs-id2604660, Unreasonable Results, the person who consumes 2500 kcal
  with 95.0% transferred as heat), keyed 36 °C for part (a) with the book's
  (b) and (c) in the solution, Evaluate, tagged Unreasonable Results; it
  turns on $Q = mc\Delta T$ alone, and `ch14/config.md` moves it.
- 5 problems left out, having no answer in the book's key: showing that
  1 cal/(g·°C) = 1 kcal/(kg·°C) (fs-id1890173, which the book prints again
  in 14.6, and 14.6's notes say so), 1.00 kcal into 1.00 kg of four
  substances (fs-id2929873), the 0.250 kg block and its substance
  (fs-id1547365), the peanut burned under a cup of water (fs-id3306092),
  and the shut-down reactor (fs-id3382734), whose photograph goes with it.
- No generated questions: every node of the section has a book exercise
  that tests it, except `water-moderates-temperature`, which the discussion
  of Example 14.3 and the Take-Home Experiment carry and 14.6's AP item on
  sea breezes will test; nothing is generated for it.
- Weights: `cq2` gives `temperature-rise-from-work` its full value and
  `kinetic-energy` 2, since the question turns on $v^2$; `p1` and `p3`
  give `heat-and-temperature-change` the full value and `specific-heat` 2;
  `p5` gives `temperature-rise-from-work` the full value and `work` 2 and
  `specific-heat` 2; `p7` gives `specific-heat` the full value and
  `heat-and-temperature-change` 3; `p9` gives `heat-and-temperature-change`
  the full value and `power` 2; `ur1` gives `heat-and-temperature-change`
  the full value and `mechanical-equivalent-of-heat` 2.

## Views

- Formulas: the six equations of the section already in `chapter.json`,
  the four stated and named ones important and the two steps of the
  examples not.
- Definitions: the eleven variables of the section, and one glossary term,
  specific heat.
- Concept map: the seven nodes above with their edges into 4.2, 7.x, 13.x
  and 14.1.

## Colour

The page binds energy and temperature. Both figures draw a heat (the bars
and arrows of `sim-three-factors`, the two shaded areas and the two heat
arrows of `sim-calorimetry`, every $Q$ of the readouts) and a temperature
(the $\Delta T$ slider and its readout, the two initial-temperature sliders,
the temperature axis, the final level and every $T$ of the readouts). Mass,
the specific heat and the $mc$ that sets a column's width stay untyped and
in ink, as `ch14/COLOR.md` decides. Nothing on the page binds time, power
or position: the section is about amounts of heat, not rates.

## Wanted at chapter level

- variables `Q_heat` → 14.2-heat-equation
- variables `m` → 14.2-heat-equation
- variables `c_spec` → 14.2-heat-equation
- variables `ΔT` → 14.2-heat-equation
- variables `T_ftemp` → 14.2-heat-equation
- variables `T_itemp` → 14.2-heat-equation
- variables `PE_g` → 14.2-work-into-heat
- variables `c_v` → 14.2-specific-heats
- variables `c_p` → 14.2-specific-heats
- variables `Q_hot` → 14.2-calorimetry
- variables `Q_cold` → 14.2-calorimetry
- equations `eq-heat-temperature-change` → 14.2-heat-equation
- equations `eq-temperature-difference` → 14.2-heat-equation
- equations `eq-temperature-change-from-heat` → 14.2-work-into-heat
- equations `eq-calorimetry` → 14.2-calorimetry
- equations `eq-heat-balance` → 14.2-calorimetry
- equations `eq-final-temperature` → 14.2-calorimetry
- The `PE_g` variable row of 14.2 describes the truck's lost potential
  energy, which the book writes as $Mgh$ with a capital $M$ and never as
  $\text{PE}_\text{g}$; the page writes the example as the book does, in
  plain LaTeX, and colours nothing there. Nothing is wanted unless the
  chapter pass would rather drop the row.

Applied by the chapter pass (2026-09-14): the anchors are set as listed,
except `PE_g`, whose row is dropped, since the page writes $Mgh$ and never
$\text{PE}_\text{g}$, and a variable row names a symbol the page prints.
