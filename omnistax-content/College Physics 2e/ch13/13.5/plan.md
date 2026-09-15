# Plan: 13.5 Phase Changes (m42218)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's instruction to finish the book in waves;
the per-section stop of rule 2, the plan review of rule 5 and the user picks
of rule 15 are replaced by this file, written before the section was built
and left for review after, as `ch13/config.md` records.

The section that takes the ideal gas of 13.3 and 13.4 down to the
temperatures where it stops being ideal. A real gas condenses when it is
cooled or squeezed, and the section gives the reader two graphs to see it
on, the *PV* diagram with its isotherms and its critical point, and the
phase diagram with its three regions, its boundaries and its triple point;
it then explains what the boundaries mean, a liquid and its gas exchanging
molecules at equal rates, and ends with vapor pressure, partial pressure and
Dalton's law. Four sketch figures (13.27 to 13.30), no photograph, no worked
example, two tables (13.3 and 13.4), eleven glossary terms, two Check Your
Understanding boxes, six conceptual questions, no problem set of its own and
two keyed problems taken from 13.6. One page (rule 11).

## Sub-concepts (page headers)

The book prints four headers of its own and none over its opening; the
first header and the fourth are the agent's (rule 3), the fourth splitting
the book's Phase Diagrams run at the paragraph on low pressures, where the
text turns from reading the diagram to two features of it.

1. `real-gases` **Real gases condense** (agent's header; book: the two
   opening paragraphs and Figure 13.27). Introduces `real-gas-condensation`;
   uses `ideal-gas`, `ideal-gas-law` and `phases-of-matter`.
2. `pv-diagrams` **PV Diagrams** (book's header: the two equations, Figure
   13.28, the critical point and Table 13.3). Introduces `pv-diagram` and
   `critical-point`; uses `ideal-gas-law`. The variables $\kPr$, $V$,
   $\kTemp$, $N$, $k$ and $\kTempc$ and the equation `eq-isotherm` anchor
   here.
3. `phase-diagrams` **Phase Diagrams** (book's header: the first two
   paragraphs, Figure 13.29 and the melting curve). Introduces
   `phase-diagram`; uses `pressure` and `critical-point`.
4. `sublimation-triple-point` **Sublimation and the triple point** (agent's
   header; book: the paragraph on low pressures and the paragraph on the
   triple point). Introduces `sublimation` and `triple-point`.
5. `equilibrium` **Equilibrium** (book's header: Figure 13.30, Table 13.4,
   the open pot and the sealed glass, the definition of a vapor). Introduces
   `phase-equilibrium`; uses `thermal-equilibrium`. The first Check Your
   Understanding sits inline after it.
6. `vapor-pressure` **Vapor Pressure, Partial Pressure, and Dalton's Law**
   (book's header). Introduces `vapor-pressure` and `daltons-law`; uses
   `maxwell-boltzmann-distribution`, `kinetic-theory`, `pascals-principle`
   and `pressures-add`. The second Check Your Understanding sits inline
   after it.

Cross references are plain text: "Pascal's Principle" in the Dalton's law
paragraph loses its link to 11.3. Learning objectives, the section summary
and the eleven glossary terms come out of the running text into the tables
and the views (rule 4). Every `º` of the source is `°C` in prose and
`^\circ\text{C}` in math. The PhET note (States of Matter—Basics) is
dropped and named in `notes`.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| real-gas-condensation | idea | real-gases | Figure 13.27; the dry ice and liquid nitrogen paragraph |
| pv-diagram | idea, eq-isotherm | pv-diagrams | the two equations; Figure 13.28 |
| critical-point | idea | pv-diagrams | Table 13.3; the critical isotherm; cq4, cq5 |
| phase-diagram | idea | phase-diagrams | Figure 13.29; the pressure cooker; the snowball; cq1 |
| sublimation | idea | sublimation-triple-point | the low-pressure paragraph; dry ice; cq3 |
| triple-point | idea | sublimation-triple-point | the triple point paragraph; Table 13.4 |
| phase-equilibrium | idea | equilibrium | Figure 13.30; the open pot; both CYUs; cq6 |
| vapor-pressure | idea | vapor-pressure | the definition; cq2, cq3 |
| daltons-law | result | vapor-pressure | the law in italics; p1, p2 |

## Figures

id · replaces or Sim · concepts · value add · moving or still · sliders ·
headline · graph · 3D

1. `sim-real-gas-volume` · replaces Figure 13.27, the sketch of volume
   against temperature for a real gas at constant pressure ·
   real-gas-condensation, ideal-gas-law · **variation by slider and
   standardisation**: the book's sketch is of no particular gas and has no
   numbers; here one mole at 1.00 atm follows the same ideal line whatever
   the gas, and the choice of substance moves the place where it leaves the
   line, nitrogen and oxygen condensing to a liquid, carbon dioxide going
   straight to a solid, water condensing at 100 °C and freezing at 0 °C ·
   **still**: the graph answers the substance and the temperature and
   nothing in it has a clock (rule 14) · a choice of substance (nitrogen,
   oxygen, carbon dioxide, water; a discrete state, rule 26.1, as a
   dropdown since the four names wrap a row; default nitrogen since the
   book's sketch condenses near −190 °C) and $\kTemp$
   (−273 to 150 °C, default 20, temperature) · "At 20 °C one mole of
   nitrogen is a gas on the ideal line, filling 24.1 L at 1.00 atm." ·
   graph alone: the graph is the idea · 2D. Axes fixed at −300 to 150 °C
   and 0 to 40 L, never rescaled. The volume of the liquid and the solid is
   about a thousandth of the gas's and would sit on the axis, so the
   condensed part of the curve is drawn 100 times larger than the scale,
   labelled so, and the readout states the true volume and the factor
   (root rule 28.4, applied to a size rather than a motion). Readout:
   $V = Nk\kTemp/\kPr$ with the live numbers on the gas side; the true
   volume of the liquid or solid against what the ideal line would give on
   the other. Draws temperature; the pressure is a fixed 1.00 atm and the
   volume is untyped.
2. `sim-pv-isotherms` · replaces Figure 13.28 (a) and (b), the family of
   isotherms and the expanded low-temperature portion with its liquid-vapor
   region · pv-diagram, critical-point, ideal-gas-law · **variation by
   slider and intuition**: the book draws six fixed isotherms; here the
   reader slides one isotherm's temperature through the critical
   temperature and watches its flat part shrink to a point and vanish,
   which is what the critical point is, and reads $\kPr V$ against
   $Nk\kTemp$ to see how far the gas is from ideal · **still**: an isotherm
   is a curve at one temperature and a point on it is a state; there is no
   clock (rule 14) · a choice of substance from Table 13.3 (all eight, as a
   dropdown since a row would wrap, rule 26.1; default carbon dioxide, the
   text's own example), $\kTemp$ (0.7 to 1.5 times the critical
   temperature, so 213 to 456 K for carbon dioxide, default 290 K,
   temperature; the range follows the substance) and $V$ (0.4 to 6 times
   the model's critical volume, so 0.05 to 0.77 L/mol for carbon dioxide,
   default 0.20, ink; the range follows the substance too) · "At 290 K carbon dioxide condenses along the
   flat part of its isotherm, where liquid and vapor coexist at 5.9 MPa."
   · graph alone · 2D. The isotherms are those of one simple model of a
   real gas fitted to the substance's critical temperature and pressure,
   with the flat parts placed where the model's liquid and vapor have the
   same pressure; the caption says so in words and names no model. Axes
   fixed per substance at 0 to 6 and 0 to 2.5 times the critical volume and
   pressure, in L/mol and MPa, never rescaled; a point past an edge goes
   through `pinned()`. Readout: $\kPr V$ and $Nk\kTemp$ for one mole with
   the live numbers; small line saying what the state is. Draws
   temperature, pressure.
3. `sim-phase-diagram` · replaces Figure 13.29, the phase diagram for
   water · phase-diagram, sublimation, triple-point, critical-point ·
   **variation by slider, standardisation and intuition**: the book's
   diagram is not to scale; here the axes are real, temperature linear and
   pressure logarithmic, the curves pass through the triple point, the
   normal boiling and melting points and the critical point of Tables 13.3
   and 13.4, and the reader drags a state point across the diagram and is
   told the phase and the boiling, sublimation or melting temperature at
   that pressure · **still**: a state is a point, and moving it is the
   reader's choice, not time (rule 14) · a choice of substance from Table
   13.4 (all seven, as a dropdown, default water) and the state point,
   dragged on the diagram with the pointer or moved with the arrow keys
   from the keyboard, $\kTemp$ and $\kPr$ written live in their hues
   (default 20 °C and 1.00 atm, the text's glass of water; carbon dioxide
   opens at the same room temperature and pressure, which is the fourth
   conceptual question's). A slider cannot
   carry a pressure that runs from 0.0001 to 1000 atm, which is why the
   point is dragged, as `ch13/config.md` foresaw · "At 20 °C and 1.00 atm
   water is a liquid; at this pressure it boils at 100 °C and melts at
   0 °C." · graph alone · 2D. Axes fixed per substance, temperature from
   below the triple point to past the critical point, pressure from 0.0001
   to 1000 atm, never rescaled. The vaporization curve is drawn through the
   triple point, the normal boiling point and the critical point, the
   sublimation curve through the triple point with the slope the substance's
   own data give (for water it passes through the book's −50 °C value, for
   carbon dioxide through 1 atm at −78.5 °C), and the melting curve to
   scale, which for water leans left by 0.0074 °C per atmosphere and is too
   nearly vertical to see; the caption says so. Readout: $\kTemp$ and
   $\kPr$ with the live numbers; small line naming the phase and the
   boundary temperatures at that pressure. Draws temperature, pressure.
4. `sim-liquid-vapor-equilibrium` · replaces Figure 13.30 (a) and (b), the
   closed container at two boiling points · phase-equilibrium,
   vapor-pressure, thermal-equilibrium · **flow by animation and variation
   by slider**: equilibrium here is two rates being equal, and no still can
   show a rate; molecules leave the liquid at a rate set by the temperature
   and return when they strike the surface, and the vapor settles by itself
   at the count where the two rates match · **moving**: the idea has a
   clock in it, the rate at which molecules cross the surface, so it
   registers an endless cycle (there is no period to scrub) and gets the
   transport (rule 14; `ch13/config.md` names this figure as one of the
   three that may move) · $\kTemp$ (50 to 150 °C, default 100, temperature)
   · "At 100 °C water and its vapor are in equilibrium at 1.01 × 10⁵ Pa:
   in the last two seconds 23 molecules left the liquid and 22 returned."
   · none: the container with its gauge and thermometer is the scene ·
   2D. Water only, with the vapor pressure taken from the book's own Table
   13.5 of 13.6. Molecules wear oxygen's element colour, one hydrogen pair
   drawn on each, with one legend entry (rule 26.7); the liquid and the
   vapor are told apart by packing, never by tint, and the temperature hue
   goes only on the symbol and the slider (`ch13/COLOR.md`). The gauge and
   the thermometer are ink instruments with their readings in the pressure
   and temperature hues. Sliding the temperature does not reset the
   picture: the vapor drifts to its new count over a few seconds, which is
   the book's sentence about equilibrium being maintained by the same
   increase of both rates. Readout: the vapor pressure at the live
   temperature; small line with the two counts. Draws temperature,
   pressure.
5. `sim-partial-pressures` · Sim (it replaces no figure of the book) ·
   daltons-law, ideal-gas-law · **variation by slider and intuition**: the
   book states in one sentence that pressures add and never draws it; here
   nitrogen and oxygen share one box, each makes its own pressure from its
   own molecules, and the gauge reads the sum, with the book's 78.1 percent
   nitrogen as the default so the two problems taken from 13.6 can be read
   off it · **still**: the collisions' rate is 13.4's figure, and what this
   one answers is how much of each gas is in the box (rule 14) · $n_{\text{N}_2}$
   (0 to 1.00 mol, default 0.781, ink), $n_{\text{O}_2}$ (0 to 1.00 mol,
   default 0.219, ink) and $\kTemp$ (200 to 400 K, default 273, temperature)
   in a box of 22.4 L · "In 22.4 L at 273 K, 0.781 mol of nitrogen makes
   7.89 × 10⁴ Pa and 0.219 mol of oxygen 2.21 × 10⁴ Pa, and the gauge reads
   their sum, 1.01 × 10⁵ Pa." · bars beside the box: each partial pressure
   and their sum, in the pressure hue, labelled · 2D. Molecules wear their
   element colours (nitrogen, oxygen) with one legend entry each; the count
   drawn is 60 per mole. Readout: $\kPr = P_{\text{N}_2} + P_{\text{O}_2}$
   with the live numbers; small line giving $P_i = n_i R \kTemp / V$ for
   each gas. Draws temperature, pressure.

Photographs: the section has none, so none is kept and none is dropped.

Figures that serve exercises: the book prints one, the phase diagram for
carbon dioxide inside the third conceptual question, unnumbered. It is
carried on the `figure` field of the cards of `cq3` and `cq4`, which both
refer to it (`ch13/config.md`); it is not redrawn, though `sim-phase-diagram`
set to carbon dioxide shows the same curves to scale.

Extra simulations (rule 15), thought through, judged and decided:

- **Partial pressures (`sim-partial-pressures`): built**, for the reasons
  in its line.
- A pressure cooker whose lid holds the steam at 2 atm. Left:
  `sim-phase-diagram` at 2 atm already tells the reader that water boils
  at 120 °C there, which is the whole of the first conceptual question.
- The open pot and the sealed glass of the Equilibrium paragraph, air over
  the water so that it boils away. Left: it is `sim-liquid-vapor-equilibrium`
  with the lid off and the condensation rate cut, and 13.6 owns evaporation.
- A snowball squeezed until the ice melts. Left: at scale the melting curve
  of water leans by a fraction of a degree, and a figure would have to
  exaggerate it to show anything.

Figure pass (2026-09-15, Claude Fable 5.1). Every figure was screenshot at its default, its slider extremes and every choice in both themes. `sim-pv-isotherms`: the words "Liquid and vapor" sat where the volume label lands and were half covered by its panel, so they sit low in the dome now; the critical isotherm's name was placed at the far right where the isotherm runs into the axis and the labeller pushed it under the graph, so it sits on the isotherm at 2.2 critical volumes, where it runs clear of the family. `sim-liquid-vapor-equilibrium`: the gauge on the lid was too small to read; it is larger, its reading is set in 22-point type with the atmospheres under it, and the container sits 30 units lower so that the gauge clears a two-line headline. `sim-partial-pressures`: the bars were solid fills in the pressure hue, which the scheme makes pale on the light theme, so each bar is outlined in ink. `sim-real-gas-volume` and `sim-phase-diagram` were found clean and are unchanged.

## Exercises

- 2 Check Your Understanding boxes, both keyed by the book, set inline:
  `cyu1` (fs-id2259406, why iced water stays at 0 °C, Understand, after
  `equilibrium`) and `cyu2` (fs-id2635559, energy transfer in a phase change
  and the orange trees, Understand, after `vapor-pressure`).
- 6 conceptual questions, none keyed, each an open item with an AI-marked
  suggested approach: `cq1` (fs-id1060374, the pressure cooker, Understand,
  citing `phase-diagrams`), `cq2` (eip-id3197306, condensation on the
  coldest object, Understand, citing `vapor-pressure`), `cq3`
  (fs-id2808785, the vapor pressure of dry ice, Apply, citing
  `sublimation-triple-point`, with the carbon dioxide diagram on its card),
  `cq4` (fs-id1847607, liquefying carbon dioxide at room temperature,
  Analyze, citing `pv-diagrams`, the same diagram on its card), `cq5`
  (fs-id1592769, why oxygen cannot be liquefied at room temperature,
  Understand, citing `pv-diagrams`) and `cq6` (fs-id2404335, gas against
  vapor, Remember, citing `equilibrium`).
- 2 problems taken from 13.6 with `source_section: "13.6"`, since partial
  pressure is defined here and 13.6 only uses it (`ch13/config.md`): `p1`
  (fs-id1893897, the partial pressure of nitrogen in dry air, keyed
  7.89 × 10⁴ Pa, Apply) and `p2` (fs-id2377418, the deep-sea diver's oxygen,
  keyed 2.12 × 10⁴ Pa and 1.06 percent, Apply), both citing `vapor-pressure`.
- 1 problem from 13.6 left out, having no answer in the book's key: the
  Integrated Concepts item on the depth at which the critical pressure of
  water is reached (fs-id2298434), named in `notes` and `exercise_notes`.
- The section prints no problems and no AP items of its own.
- No generated questions: every node has a book exercise that tests it
  except `triple-point`, which Table 13.4 and the text carry and no
  exercise asks about; noted, no question generated.
- Weights: `cyu1` gives `phase-equilibrium` its full value and
  `phase-diagram` 2; `cyu2` gives `phase-equilibrium` its full value and
  `real-gas-condensation` 2; `cq1` gives `phase-diagram` its full value and
  `phase-equilibrium` 2; `cq2` gives `vapor-pressure` its full value and
  `daltons-law` 2; `cq3` gives `vapor-pressure` and `sublimation` their full
  value and `phase-diagram` 2; `cq4` gives `critical-point` its full value
  and `phase-diagram` 3; `cq6` gives `phase-equilibrium` its full value and
  `critical-point` 2; `p1` and `p2` give `daltons-law` its full value and
  `ideal-gas-law` 2.

## Views

- Formulas: the one equation of the section already in `chapter.json`,
  `eq-isotherm`, important.
- Definitions: the six variables of the section and the eleven glossary
  terms.
- Concept map: the nine nodes above with their edges into 11.1, 11.3, 13.1,
  13.3 and 13.4 and within the section.

## Colour

The page binds temperature and pressure. Every figure carries the
temperature on a slider or writes it in a readout, and four of the five draw
a pressure: the axis of the *PV* diagram and the phase diagram, the gauge on
the closed container, the bars of the partial pressures. Volume, the number
of molecules, the number of moles, the Boltzmann constant and the gas
constant stay untyped and in ink, as `ch13/config.md` decided. Density is
not bound: no figure of the page reads a volume as a density. Molecules wear
the element palette (nitrogen, oxygen; water in oxygen's colour with its
hydrogens drawn), and no body wears the temperature hue.

## Wanted at chapter level

- variables `13.5/P_press` → 13.5-pv-diagrams
- variables `13.5/V` → 13.5-pv-diagrams
- variables `13.5/T_temp` → 13.5-pv-diagrams
- variables `13.5/N_count` → 13.5-pv-diagrams
- variables `13.5/k_boltz` → 13.5-pv-diagrams
- variables `13.5/T_c` → 13.5-pv-diagrams
- equations `eq-isotherm` → 13.5-pv-diagrams
- The `daltons-law` evidence row says "the problems moved here from 13.6";
  two of the three named in `ch13/config.md` are keyed and are on the page,
  the third (fs-id2298434) is unkeyed and left out. Nothing to change.

Applied in the chapter pass (2026-09-14): every anchor above is written on its
row, six variables and one equation. The `daltons-law` evidence stands, as
the note says. The key to the diver's part (a), 2.12 × 10⁴ Pa, is 20.9% of
1.013 × 10⁵ Pa where the problem states 1.01 × 10⁵ N/m², which gives
2.11 × 10⁴ Pa; the card's tolerance accepts both, and `exercise_notes` says
so. The caption of Figure 13.28 called the set isotherm "the colored curve";
it names it by its weight and label now, so that it reads with colour off.
