# Plan: 15.5 Applications of Thermodynamics: Heat Pumps and Refrigerators (m42236)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's standing instruction to finish the book in
waves; the per-section stop of rule 2, the plan review of rule 5 and the user
picks of rule 15 are replaced by this file, written before the section was
built and left for review after, as `ch15/config.md` records.

The section that turns the heat engine of 15.3 and 15.4 round. Run backward,
the same cycle takes heat transfer from a cold reservoir and, with work put
in, delivers more than that work to a hot one; a heat pump, an air
conditioner and a refrigerator are one machine judged by two ratios. Six book
figures (15.25 to 15.30, two of them photographs), one worked example (the
best heat pump for a home), one boxed strategy, two glossary terms, five
conceptual questions, ten problems of which five are keyed, and one AP item
that arrives from 15.1. One page (rule 11).

## Sub-concepts (page headers)

The module prints two headers of its own, "Heat Pumps" and "Air Conditioners
and Refrigerators", kept as the book writes them; the opening paragraph, the
run of the first header and the closing strategy box are given headers of the
agent's (rule 3), as 15.3 does under its "Heat Engines".

1. `heat-engines-backward` **Heat engines run backward** (book: the opening
   paragraph; Figure 15.26). The variables $\kQH$, $\kQC$ and $\kW$ and the
   equation `eq-heat-pump-balance` anchor here.
2. `heat-pumps` **Heat Pumps** (book: the paragraph on the advantage of a
   heat pump over burning fuel; the paragraph on the components; Figure
   15.27; the paragraph on the compressor, the condenser and the valve).
3. `coefficient-of-performance` **The coefficient of performance of a heat
   pump** (book: the paragraph that defines $\text{COP}_{\text{hp}}$ and its
   equation; the paragraph on $\text{COP}_{\text{hp}} = 1/\text{Eff}$ and why
   heat pumps work best when the temperature difference is small; the
   paragraph on friction; Figure 15.28). The variables $\text{COP}_{\text{hp}}$,
   $\text{Eff}_{\text{C}}$, $\kTemph$, $\kTempc$, $\kWprime$ and $\kQf$ and the
   equations `eq-cop-heat-pump` and `eq-cop-heat-pump-efficiency` anchor here.
4. `best-heat-pump` **The best heat pump for a home** (book: Example 15.5,
   The Best $\text{COP}_{\text{hp}}$ of a Heat Pump for Home Use, with Figure
   15.29 inside it; the paragraph on real heat pumps; Figure 15.30).
5. `refrigerators` **Air Conditioners and Refrigerators** (book: the
   paragraph that defines $\text{COP}_{\text{ref}}$ and its equation; the
   paragraph on $\text{COP}_{\text{ref}} = \text{COP}_{\text{hp}} - 1$; the two
   paragraphs on the EER and its equation). The variables
   $\text{COP}_{\text{ref}}$ and $\text{EER}$ and the equations
   `eq-cop-refrigerator`, `eq-cop-relation` and `eq-eer` anchor here.
6. `problem-solving` **How to work a thermodynamics problem** (book: the
   boxed Problem-Solving Strategies for Thermodynamics, kept as the book's
   numbered list under its own eyebrow).

The publisher prints the example as Example 15.5, the chapter's fifth, and
the page follows that. Cross references are plain text: "Figure 15.27",
"Figure 15.29", "Figure 15.30". The caption of Figure 15.26 says its Carnot
cycle is "similar to that in" a figure whose CNXML target is Figure 15.27,
the heat pump's components, where the book means the Carnot cycle of 15.4;
the caption is kept as printed and the slip is named in `notes`. Learning
objectives, the section summary and the two glossary terms come out of the
running text into the tables and the views (rule 4).

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| heat-pump | idea, eq-heat-pump-balance | heat-engines-backward | Figure 15.26 and the opening paragraph; the closed refrigerator of the AP item; the open refrigerator door |
| heat-pump-components | idea | heat-pumps | Figure 15.27 and the two paragraphs round it |
| coefficient-of-performance-heat-pump | result, eq-cop-heat-pump | coefficient-of-performance | the definition and its reciprocal relation to efficiency; Example 15.5; problems 1 and 5 |
| heat-pumps-and-temperature-difference | idea | coefficient-of-performance | the paragraph on cold climates; conceptual questions 1, 3 and 4 |
| coefficient-of-performance-refrigerator | result, eq-cop-refrigerator | refrigerators | the definition and the relation to the heat pump's; problems 3 and 7 |
| calculate-coefficient-of-performance | skill | best-heat-pump | Example 15.5; every keyed problem of the section |
| energy-efficiency-rating | idea, eq-eer | refrigerators | the two EER paragraphs; the 4-ton air conditioner |
| thermodynamics-problem-solving | skill | problem-solving | the boxed strategy; the problem that asks the reader to follow it |

The section leans on `heat-engine` (15.2), `reversible-process` (15.2),
`second-law-heat-flow-direction`, `heat-engine-work-output` and
`heat-engine-efficiency` (15.3), `carnot-cycle`, `carnot-efficiency` and
`real-engines-below-carnot` (15.4), `first-law-of-thermodynamics` (15.1),
`friction` (4.3), `convert-temperature-scales` (13.1), `power` (7.7) and
`system-of-interest` (4.3); the coverage rows mark each as used where the text
uses it.

## Figures

id · replaces or Sim · concepts · value add · moving or still · sliders and
choices · headline · graph · 3D

1. `sim-heat-pump-backward` · replaces Figure 15.26 (a) and (b), the heat
   pump's three arrows and the reversed Carnot loop · heat-pump, carnot-cycle,
   heat-engine-work-output · variation by a choice and by slider: the same
   cycle drawn as an engine and as a pump, every arrow and the walk round the
   loop turning about together, and the loop's area shrinking as the two
   temperatures come together, which two printed panels cannot show ·
   **still**: what the figure teaches is which way the three transfers go and
   that $\kQH = \kQC + \kW$, which one state of the drawing shows; walking the
   loop leg by leg is 15.4's lesson for Figure 15.21, and repeating it here
   would replay the book's arrows (rules 14 and 24.9) · a choice of heat
   engine or heat pump, default heat pump, because which way the cycle is run
   is a state and not a quantity (rule 26.1); $\kTemph$ (300 to 400 K, default
   318, temperature) and $\kTempc$ (220 to 300 K, default 258, temperature),
   the example's temperatures in kelvins; the loop is a Carnot cycle of a
   fixed amount of gas with a fixed isothermal expansion, so $\kQH$, $\kQC$
   and $\kW$ follow from the two temperatures and the arrows are drawn to
   scale · "Run as a heat pump between 258 K and 318 K, the cycle takes 358 J
   from the cold reservoir and 83 J of work and delivers 441 J to the hot
   reservoir." · beside: the schematic is vertical, so the $PV$ diagram stands
   at its right, axes fixed at $V$ 0 to 10 L and $P$ 0 to 500 kPa, which hold
   the loop at both slider extremes · 2D. Readout: $\kQH = \kQC + \kW$ with
   the live numbers for the pump, $\kW = \kQH - \kQC$ for the engine; small
   line on $\kQC/\kQH = \kTempc/\kTemph$ fixing the sizes. Labels: the frame,
   $T_{\text{h}}$ and $T_{\text{c}}$ on the reservoirs, $Q$ and $W$ on the
   arrows, A to D on the corners, the two isotherms named; nine labels, none
   moving, so they are on. Draws energy, temperature, pressure.
2. `sim-heat-pump-components` · replaces Figure 15.27, the four components ·
   heat-pump-components · variation by a choice: the text says in one
   sentence that in a cooling cycle the two coils exchange roles and the flow
   reverses, and the book never draws it; the figure draws both modes ·
   **still**: the working fluid does circulate, but an animation of it would
   replay the book's arrows (rule 24.9); the arrowheads on the pipe say which
   way it flows, and a choice, not a clock, swaps the mode · a choice of
   heating or cooling, default heating (rule 26.1); no slider, since the
   figure carries no quantity, and its readout writes the relation
   $\kQH = \kQC + \kW$ with the role each coil plays in the chosen mode rather
   than numbers · "In heating mode the outdoor coil is the evaporator, where
   heat transfer $Q_{\text{c}}$ occurs into the working fluid from the cold
   air, and the indoor coil is the condenser, where $Q_{\text{h}}$ occurs into
   the room." · none · 2D. Labels: the four components numbered as the book
   numbers them, the state of the fluid on each leg, the two heat transfers
   and the work; hover names on the components. Draws energy.
3. `sim-friction` · replaces Figure 15.28, the real heat pump whose work
   input is partly lost to friction · coefficient-of-performance-heat-pump,
   real-engines-below-carnot · variation by slider: the caption says that if
   all of $W$ had reached the pump $Q_{\text{h}}$ would have been greater, and
   the slider lets the reader watch $Q_{\text{h}}$ and the coefficient of
   performance fall as the share lost to friction grows · **still**: it
   answers its sliders and nothing else · $\kW$ (20 to 200 J, default 100,
   energy), the share of $W$ lost to friction (0 to 60 %, default 20, ink),
   $\kTemph$ (25 to 80 °C, default 45, temperature) and $\kTempc$ (−40 to 15
   °C, default −15, temperature); the pump itself is the best possible, so
   $\kQH$ follows from $\kWprime$ by the Carnot ratio · "Of 100 J of work put
   in, 20 J is lost to friction, and the 80 J that reaches the pump delivers
   424 J to the hot reservoir instead of 530 J." · none · 2D. Readout:
   $\kQH = \kQC + \kWprime$ with the live numbers; small line on
   $\text{COP}_{\text{hp}} = \kQH/\kW$ against what it would be without
   friction. Draws energy, temperature.
4. `sim-heat-pump-house` · replaces Figure 15.29, the heat pump of Example
   15.5 across a house wall · calculate-coefficient-of-performance,
   coefficient-of-performance-heat-pump, heat-pumps-and-temperature-difference,
   carnot-efficiency · variation by slider and a graph the book does not draw:
   the coefficient of performance against the cold reservoir temperature, with
   the example's point on it, so that the sentence "heat pumps do not work as
   well in very cold climates" is a curve the reader can read · **still**: a
   heat pump between two fixed temperatures has no time in it · $\kTemph$ (25
   to 80 °C, default 45.0, temperature) and $\kTempc$ (−40 to −5 °C, default
   −15.0, temperature); the cold slider stops at the outside air's −5 °C,
   because a working fluid warmer than the outside air takes no heat transfer
   from it, and the hot slider starts above the room's 20 °C for the same
   reason; the room and the outside air keep the example's temperatures ·
   "Between −15.0 °C and 45.0 °C the best coefficient of performance is 5.30,
   so each joule from the outlet brings 4.30 J in from the cold air." · below:
   the house scene is horizontal, so the graph of $\text{COP}_{\text{hp}}$
   against $\kTempc$ sits under it, axes fixed at −40 to 15 °C and 0 to 12;
   the part of the curve above −5 °C is greyed as the region the fluid cannot
   reach, and a value above 12 goes through `pinned()` · 2D; the book prints
   the block in perspective, but the wall, the two coils and the three arrows
   are a schematic of energy flow and are clearest flat (rule 28.1, and
   `ch15/config.md` § 3D). Readout: $\text{COP}_{\text{hp}} = 1/\text{Eff}_{\text{C}}
   = 1/(1 - \kTempc/\kTemph)$ with the live kelvins; small line on
   $\kQH = \text{COP}_{\text{hp}}\kW$. Draws energy, temperature.
5. `sim-two-ratios` · Sim (it replaces no figure of the book; the
   refrigerator paragraphs have none) · coefficient-of-performance-refrigerator,
   coefficient-of-performance-heat-pump, heat-pump · intuition: one machine
   between two reservoirs, its three energies drawn as bars in units of the
   work, so the reader sees that $\kQH/\kW$ and $\kQC/\kW$ differ by exactly
   the bar for $\kW$ itself, which is the relation the text leaves to the
   problems · **still**: it answers its sliders and its choice · a choice of
   what the machine is for, warming the space (a heat pump) or cooling it (a
   refrigerator or air conditioner), default cooling, which marks which arrow
   is the benefit (rule 26.1); $\kTemph$ (25 to 80 °C, default 45.0,
   temperature) and $\kTempc$ (−40 to 15 °C, default −15.0, temperature); the
   work is one unit and the machine is the best possible · "Used to cool the
   space, the machine removes 4.30 J from the cold reservoir for every joule
   of work, and its coefficient of performance is 4.30." · beside: the
   reservoirs and the machine at the left, the three bars at the right, both
   vertical · 2D. Readout: $\text{COP}_{\text{ref}} = \kQC/\kW$ or
   $\text{COP}_{\text{hp}} = \kQH/\kW$ with the live numbers by the choice;
   small line on $\text{COP}_{\text{ref}} = \text{COP}_{\text{hp}} - 1$. Draws
   energy, temperature.
6. `fig-reverse-cycle` · Figure 15.30, the residential heat pump, kept as a
   photograph (width 150): the paragraph says the figure "shows a heat pump,
   called a reverse cycle or split-system cooler", so the text points at it
   (`ch15/config.md` keeps it).

Photographs: Figure 15.25, the refrigerators in an appliance store, is dropped
as the splash image at the head of the section (`ch15/config.md`); Figure
15.30 is kept, as above. Figures that serve exercises: none; no exercise of
the section refers to a figure.

Extra simulations (rule 15), thought through, judged and decided:

- **The two ratios of one machine (`sim-two-ratios`): built**, as above. The
  section's second result has no figure in the book, and the bars show the
  "−1" that the text only asserts.
- The EER as a dial converting a COP into Btu per hour per watt. Left: the
  conversion is one number the book does not state, and a figure whose only
  content is a unit conversion adds no view.
- A cost comparison of a heat pump against burning fuel across a winter.
  Left: it is problem 5 with a graph, and the numbers it would need (fuel
  prices, electricity prices) are not the book's.
- A cooling-mode house, the mirror of Figure 15.29. Left: `sim-heat-pump-
  components` already swaps the coils, and `sim-two-ratios` already judges the
  same machine as a cooler.

## Exercises

- All items are set at the end (`place.at = end`); the chapter has no Check
  Your Understanding box, so nothing is inline.
- 5 conceptual questions, none keyed, each an open item with an AI-marked
  suggested approach: `cq1` (fs-id1169737786809, cold climates, Understand,
  citing `coefficient-of-performance`), `cq2` (fs-id1169738105425, the
  Northern European houses without heating, Analyze, citing `heat-pumps`),
  `cq3` (fs-id1169738105385, why a small temperature difference is
  cost-effective, Understand, citing `coefficient-of-performance`), `cq4`
  (fs-id1169738008505, the grocery store kept cold, Evaluate, citing
  `refrigerators`) and `cq5` (fs-id1169737965613, cooling a kitchen with the
  refrigerator door open, Understand, citing `heat-engines-backward`).
- 1 AP item taken from 15.1 with `source_section: "15.1"`: `ap1`
  (fs-id3826091, what happens inside a closed refrigerator or freezer in
  terms of heat transfer, work and conservation of energy). It is a
  refrigerator, which this section introduces (`ch15/config.md`); it has no
  key and is an open item with an AI-marked approach, Understand, citing
  `heat-engines-backward`. The section has no AP items of its own.
- 5 problems keyed and kept: `p1` (fs-id1169737753692, the ideal heat pump
  between −25.0 °C and 40.0 °C, keyed 4.82), `p3` (fs-id1169737827636, the
  liquid-nitrogen refrigerator, keyed 0.311), `p5` (fs-id1169737787858, the
  heat pump between −20.0 °C and 50.0 °C with its cost against natural gas,
  keyed 4.61 and 1.66 × 10⁸ J, the book's cost comparison in the solution),
  `p7` (fs-id1169737792679, the hot reservoir temperature for a refrigerator
  of COP 7.00, keyed 27.6 °C) and `p9` (fs-id1169738091163, the 4-ton air
  conditioner of EER 12.0, keyed 1.44 × 10⁷ J and 40 cents, the book's
  discussion of part (c) in the solution).
- 5 problems left out, having no answer in the book's key: the ideal
  refrigerator between −20.0 °C and 50.0 °C (fs-id1169738220305), the mild
  winter heat pump that asks the reader to follow the strategy
  (fs-id1169737814645), the refrigerator between −30.0 °C and 45.0 °C with its
  cost (fs-id1169736677729), the cold reservoir temperature for a heat pump of
  COP 12.0 (fs-id1169738130146), and the derivation of
  $\text{COP}_{\text{ref}} = \text{COP}_{\text{hp}} - 1$ (fs-id1169737780157).
  The last is a loss, since the text points the reader at it; it is named in
  `notes` and `exercise_notes`.
- No generated questions: `heat-pump-components` has no book exercise of its
  own and is noted here, none generated.
- Weights: `cq1` gives `heat-pumps-and-temperature-difference` its full value
  and `coefficient-of-performance-refrigerator` 2; `cq2` gives `heat-pump`
  full and `first-law-of-thermodynamics` 2; `cq3` gives
  `heat-pumps-and-temperature-difference` full and
  `coefficient-of-performance-heat-pump` 2; `cq4` gives
  `coefficient-of-performance-refrigerator` full and
  `heat-pumps-and-temperature-difference` 3; `cq5` and `ap1` give `heat-pump`
  full and `coefficient-of-performance-refrigerator` 2 and
  `first-law-of-thermodynamics` 3 respectively; `p1`, `p3`, `p5` and `p7`
  give `calculate-coefficient-of-performance` full with the coefficient they
  compute at 3, `carnot-efficiency` 2 on `p1`, `thermodynamics-problem-solving`
  2 on `p5` and `convert-temperature-scales` 2 on `p7`; `p9` gives
  `energy-efficiency-rating` full and `coefficient-of-performance-refrigerator` 2.

## Views

- Formulas: the six equations of the section already in `chapter.json`, all
  important (`eq-heat-pump-balance`, `eq-cop-heat-pump`,
  `eq-cop-heat-pump-efficiency`, `eq-cop-refrigerator`, `eq-cop-relation`,
  `eq-eer`).
- Definitions: the eleven variables of the section and the two glossary terms.
- Concept map: the eight nodes above with their edges into 4.3, 7.7, 13.1,
  15.1, 15.2, 15.3 and 15.4.

## Colour

The page binds energy, temperature and pressure. Every drawn figure carries
the three energies $\kQH$, $\kQC$ and $\kW$ as arrows or bars in the energy
hue, told apart by direction and label and never by a second hue
(`ch15/COLOR.md`); four of them label the reservoirs with $\kTemph$ and
$\kTempc$ in the temperature hue and carry those temperatures on sliders;
`sim-heat-pump-backward` alone draws a $PV$ diagram, whose vertical axis is
pressure and whose horizontal axis is ink. The reservoir bodies are ink, hot
above cold. The coefficients of performance, the efficiency and the share
lost to friction are pure numbers and stay in ink, as does the state of the
working fluid written on each leg of Figure 15.27.

## Wanted at chapter level

- variables `Q_h` → 15.5-heat-engines-backward
- variables `Q_c` → 15.5-heat-engines-backward
- variables `W` → 15.5-heat-engines-backward
- variables `W_prime` → 15.5-coefficient-of-performance
- variables `Q_f` → 15.5-coefficient-of-performance
- variables `COP_hp` → 15.5-coefficient-of-performance
- variables `Eff_C` → 15.5-coefficient-of-performance
- variables `T_h` → 15.5-coefficient-of-performance
- variables `T_c` → 15.5-coefficient-of-performance
- variables `COP_ref` → 15.5-refrigerators
- variables `EER` → 15.5-refrigerators
- equations `eq-heat-pump-balance` → 15.5-heat-engines-backward
- equations `eq-cop-heat-pump` → 15.5-coefficient-of-performance
- equations `eq-cop-heat-pump-efficiency` → 15.5-coefficient-of-performance
- equations `eq-cop-refrigerator` → 15.5-refrigerators
- equations `eq-cop-relation` → 15.5-refrigerators
- equations `eq-eer` → 15.5-refrigerators
- The equation row `eq-eer` writes $t_1$ and $t_2$ in plain LaTeX, and so does
  the text; they are times in hours and seconds that the book never colours,
  so no symbol rows are wanted for them.

Applied in the chapter pass (2026-09-14): the eleven variable anchors and the six equation anchors are set on `chapter.json` as listed, and $t_1$ and $t_2$ of `eq-eer` stay plain with no symbol row, as this plan asked. The caption of Figure 15.26, which names Figure 15.27 where the book means the Carnot cycle of Section 15.4, is recorded in `exploration.md` under Errata. The AP item taken from 15.1 was checked against both sections' `exercise_notes`, which agree.

Figure pass (2026-09-15, Claude Fable 5.1): the five figures were screenshot at every slider extreme and choice in both themes and found to read as built; nothing was changed.
