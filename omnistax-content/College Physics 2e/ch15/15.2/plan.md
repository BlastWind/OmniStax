# Plan: 15.2 The First Law of Thermodynamics and Some Simple Processes (m42233)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's standing instruction to finish the book in
waves; the per-section stop of rule 2, the plan review of rule 5 and the user
picks of rule 15 are replaced by this file, written before the section was
built and left for review after, as `ch15/config.md` records.

The section that turns the first law into machinery. A heat engine is a
device that uses heat transfer to do work, and this section shows the pieces
every such engine is built from: a gas in a cylinder that takes heat, pushes a
piston and gives heat back, the four simple processes (isobaric, isochoric,
isothermal, adiabatic), and the one graphical fact that carries the whole
chapter, that the work done on or by a gas is the area under its path on a
$PV$ diagram and the net work of a cycle is the area inside its loop. Seven
book figures (15.6 to 15.13, one a photograph), one worked example, one
table, six glossary terms, six AP items, eight conceptual questions and ten
problems of which four are keyed. One page (rule 11).

## Sub-concepts (page headers)

The module prints two headers of its own, which are kept as the book writes
them; the opening passage has none, and the long $PV$ passage is divided
under the book's header, as 10.3 did (rule 3).

1. `heat-engine` **Heat engines** (agent's header; book: the opening
   paragraph that defines the term, Figure 15.7, Figure 15.8 and the
   paragraph that walks through the three panels). Introduces `heat-engine`.
2. `pv-diagrams` **PV Diagrams and their Relationship to Work Done on or by
   a Gas** (the book's header; book: the isobaric process and its four
   equations, Figure 15.9, the parenthetical note on $\kPrext$, the paragraph
   on pressure as energy per volume, Figure 15.10 and the italic statement
   that work is the area under the curve, Figure 15.11 and the strips
   paragraph). Introduces `isobaric-work` and `pv-diagram-work-as-area`.
   The variables $\kW$, $\kPr$, $\Delta V$, $\kF$, $A$, $\kd$, $\kPrext$ and
   the equations `eq-work-force-distance`, `eq-isobaric-work`,
   `eq-external-pressure-work` anchor here.
3. `path-and-cycles` **The work depends on the path, and the work of a
   cycle** (agent's; book: the paragraph "PV diagrams clearly illustrate…",
   Figure 15.12, Example 15.2 with its strategy, two solutions and
   discussion). Introduces `work-depends-on-path`, `isochoric-process` and
   `net-work-of-a-cycle`. The variables $\kWAB$ to $\kWDA$, $\kPrAB$,
   $\kPrCD$ and the equation `eq-isochoric-work` anchor here.
4. `isothermal-adiabatic` **Isothermal and adiabatic processes** (agent's;
   book: from "Figure 15.13(a) shows two other important processes" through
   the diatomic note, the adiabatic paragraph and Figure 15.13). Introduces
   `isothermal-process`, `internal-energy-monatomic-ideal-gas` and
   `adiabatic-process`. The variables $\kEint$, $\kvb$, $m$, $\kTemp$,
   $\kQh$, $N$, $k$ and the equations `eq-average-kinetic-energy`,
   `eq-internal-energy-monatomic`, `eq-isothermal`, `eq-adiabatic` anchor
   here. In the CNXML these paragraphs and Figure 15.13 sit inside the
   `<example>` element of Example 15.2, which is a markup slip: they define
   two glossary terms and carry four of the section's equations, so the page
   closes the example after its Discussion and sets them as narrative, every
   word unchanged.
5. `reversible` **Reversible Processes** (the book's header; book: the two
   paragraphs and Table 15.2). Introduces `reversible-process`. The Sim of
   the four processes sits after the table.
6. `exercise-diagrams` **Two cycles drawn on a PV diagram** (a closing block
   carrying faithful copies of the two unnumbered diagrams the section's
   exercises read, the nested loops ABCFA and ABDEA and the parallelogram
   ABCD, as 9.2's closing block and 4.7's rescue block do). No coverage rows
   of its own.

Example 15.2 is `ex-cycle-work`; the book gives it no number in the CNXML,
and the publisher prints it as Example 15.2. Cross references are plain text
throughout; the strategy box the sixth problem cites lives on 15.5 and that
problem is unkeyed and left out anyway. Learning objectives, the section
summary and the glossary go to the tables and views (rule 4). The PhET
States of Matter note is dropped and named in `notes`.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| heat-engine | idea | heat-engine | Figures 15.7 and 15.8; the locomotive problem; the Unreasonable Results engine; the perpetual-motion question |
| isobaric-work | result, eq-isobaric-work | pv-diagrams | Figure 15.9; Table 15.2; the locomotive problem both ways |
| pv-diagram-work-as-area | result | pv-diagrams | Figures 15.10 and 15.11; the AP item on process AB; the AP item on process CD |
| work-depends-on-path | idea | path-and-cycles | Figure 15.12(a); the AP item that sketches a cycle closed two ways |
| isochoric-process | result, eq-isochoric-work | path-and-cycles | the vertical legs of 15.12; Example 15.2's BC and DA; the conceptual question on an isochoric process |
| net-work-of-a-cycle | result | path-and-cycles | Example 15.2 both ways; Figure 15.12(b)(c); the ABCDA problem; three AP items on loops |
| isothermal-process | result, eq-isothermal | isothermal-adiabatic | Figure 15.13; Table 15.2; the phase-change and slowness questions |
| adiabatic-process | result, eq-adiabatic | isothermal-adiabatic | Figure 15.13; the cooling-gas and short-time questions |
| internal-energy-monatomic-ideal-gas | result, eq-internal-energy-monatomic | isothermal-adiabatic | the kinetic-theory derivation; the car-tire problem |
| reversible-process | idea | reversible | the Reversible Processes passage; the summary |

The section leans on `first-law-of-thermodynamics`,
`heat-and-work-sign-convention`, `internal-energy` and
`internal-energy-is-a-state-function` (15.1), `work`, `work-as-area` and
`calculate-work` (7.1, 7.2), `pressure` and `force-from-pressure` (11.3),
`ideal-gas-law`, `ideal-gas-law-energy`, `thermal-energy` and `pv-diagram`
(13.3 to 13.5); the coverage rows mark each as used where the text uses it.

## Figures

id · replaces or Sim · concepts · value add · moving or still · sliders and
choices with types · headline · graph · 3D

1. `sim-heat-engine` · replaces Figure 15.7, the schematic engine ·
   heat-engine, first-law-of-thermodynamics · variation by slider: the three
   arrows are drawn with widths proportional to the energy each carries, so
   the reader sees the work as the difference of the two heats and sees it
   vanish when the heat out matches the heat in · **still**: an energy
   account has no time in it, the figure answers its sliders and registers
   no cycle (rule 14) · $\kQin$ (0 to 200 J, default 100, energy), $\kQout$
   (0 to 200 J, default 60, energy) · "The engine takes in 100 J of heat,
   gives 60 J back to the environment, and puts out 40 J of work." · none ·
   2D. Readout: $\kW = \kQin - \kQout$ with the live numbers, and a small
   line on why $\kQout = 0$ is never achieved and what it means when the
   heat out exceeds the heat in. Draws energy.
2. `sim-piston` · replaces Figure 15.8 (a), (b), (c), the gas in a cylinder
   heated, expanding and pushed back · heat-engine, isobaric-work,
   first-law-of-thermodynamics · flow by animation and variation by slider:
   the three panels are three moments of one stroke, and the reader would
   otherwise have to imagine the piston moving out under one force and back
   under a smaller one (rule 24.3) · **moving**: the idea has a clock in it,
   heat in, then expansion, then heat out and the return, and the figure
   plays that sequence over about six seconds with the crank turning, the
   heat arrows flowing and the work accumulating; the plan argues the tier
   because the config lists this figure under neither the still nor the
   moving group, and a mechanism whose three panels are labelled (a), (b),
   (c) in time order is the case rule 14 names · $\kPr$, the pressure of the
   heated gas (1.0 to 5.0 × 10⁵ N/m², default 3.0, pressure), the pressure
   the gas is pushed back at after heat leaves, written $P'$ beside
   $F' = P'A$ as the book writes $F'$ (0.5 to 4.0 × 10⁵ N/m², default 1.0,
   pressure), and the stroke $\kd$
   (0.05 to 0.30 m, default 0.20, position); the piston area is held at
   $A = 0.0100\ \text{m}^2$ and stated in the caption · "Heat flows into the
   gas and its pressure rises to 3.0 × 10⁵ N/m²." then "The gas pushes the
   piston 0.20 m with a force of 3.0 × 10³ N, doing 600 J of work." then
   "Heat leaves the gas, and a force of 1.0 × 10³ N pushes the piston back,
   doing 200 J of work on it." · none: the cylinder, piston, rod and crank in
   side view with the heat arrows is the scene · 2D. Readout: per phase,
   $\kdEint = \kQin$, then $\kWout = \kF\kd = \kPr A\kd$ with the numbers,
   then $\kWin = F'\kd$, with a small line giving the net work of the stroke
   $\kWout - \kWin$ and saying that a gas pushed back at its heated pressure
   would give nothing net. Draws energy, pressure, force, position.
3. `sim-isobaric` · replaces Figure 15.9, the isobaric expansion of a gas in
   a vertical cylinder, and folds Figure 15.10, the same expansion drawn on
   a $PV$ diagram; eyebrow "Figure 15.9 + 15.10" · isobaric-work,
   pv-diagram-work-as-area, force-from-pressure · variation by slider and
   standardisation: the cylinder and its diagram are one scene, and the
   rectangle on the graph grows and shrinks with the piston so that
   $\kW = \kPr\Delta V$ and the area under the line are seen to be the same
   number · **still**: the figure shows one expansion, and dragging the
   stroke is the reader's choice of $\Delta V$, not the passage of time
   (rule 14) · $\kPr$ (1.0 to 5.0 × 10⁵ N/m², default 2.0, pressure), $A$
   (50 to 150 cm², default 100, ink), $\kd$ (0 to 0.30 m, default 0.100,
   position); the gas column starts 0.100 m tall · "At a constant pressure
   of 2.0 × 10⁵ N/m² the piston rises 0.100 m, the volume grows by
   1.00 × 10⁻³ m³ and the gas does 200 J of work." · beside: the scene is
   vertical, so the $PV$ diagram stands to its right with the rectangle
   $\kPr\Delta V$ filled in the energy hue, $V$ from 0 to 6 × 10⁻³ m³ and
   $P$ from 0 to 5 × 10⁵ N/m², fixed, with `pinned()` past the frame · 2D.
   Readout: $\kW = \kPr\Delta V$ with the numbers; small line
   $\kF = \kPr A$ and $\kW = \kF\kd$ giving the same work. Draws energy,
   pressure, force, position.
4. `sim-strips` · replaces Figure 15.11 (a) and (b), the varying-pressure
   path cut into strips and the reverse path · pv-diagram-work-as-area,
   work-as-area · variation by slider: the number of strips is the
   approximation, and the reader watches the sum of the strips close on the
   area as the strips narrow; a choice reverses the path and turns the area
   negative · **still**: an area under a curve has no clock (rule 14) ·
   the number of strips (1 to 40, default 6, ink; a count) and a choice of
   direction, A to B (expansion) or B to A (compression), because which way
   the process runs is a state (rule 26.1) · "6 strips of average pressure add
   to 360 J, against 363 J under the curve." · the graph is the idea
   (archetype 2) · 2D. Readout: $\kW \approx \sum P_{i(\text{ave})}\Delta V_i$
   with the sum and the exact area; small line on the sign of $\Delta V$ and
   the negative area on the reverse path. Draws energy, pressure.
5. `sim-cycle-work` · replaces Figure 15.12 (a), (b) and (c), the two paths
   from A to C, the rectangle ABCDA with the example's numbers, and the
   general loop · work-depends-on-path, isochoric-process,
   net-work-of-a-cycle, pv-diagram-work-as-area · flow by animation and
   variation by slider: the area fills leg by leg as the path is walked, so
   the reader sees the positive area under AB laid down, nothing under BC,
   the negative area under CD hatched over it, and only the interior left;
   sliders change the two pressures and the volume change of Example 15.2 ·
   **moving**: a cycle walked round its loop is the idea the config names
   for this figure, the walk takes about five seconds, the point on the
   path and the fill are what move, and the readout accumulates the work
   leg by leg · $\kPrAB$ (1.0 to 2.0 × 10⁶ N/m², default 1.50, pressure),
   $\kPrCD$ (0.1 to 0.9 × 10⁶ N/m², default 0.20, pressure), $\Delta V$ (100
   to 800 cm³, default 500, ink); a dropdown for the path, since six options
   would wrap (rule 26.1): ABC, ADC, ABCDA (the example, default), ADCBA,
   a clockwise loop, a counterclockwise loop, the loop being the ellipse
   inscribed in the rectangle · "Around ABCDA the work is 750 + 0 − 100 + 0 =
   650 J, the area inside the rectangle." · the graph is the idea · 2D. Axes
   fixed: $V$ from 0 to 1 000 cm³ with A at 200 cm³, $P$ from 0 to
   2.0 × 10⁶ N/m². Readout: the legs summed for the rectangle paths, the
   area for the loops, with the sign convention; small line saying that
   clockwise is work out and counterclockwise work in. Labels: A to D on
   their points, always on (four labels, never colliding); the hatched and
   filled regions are told apart in the caption and by a legend. Draws
   energy, pressure.
6. `sim-isotherm-adiabat` · replaces Figure 15.13 (a) and (b), the isotherm
   and the adiabat from A, and the cycle ABCA · isothermal-process,
   adiabatic-process, internal-energy-monatomic-ideal-gas,
   net-work-of-a-cycle · variation by slider: how far the gas expands sets
   how far the two curves part, and the readout states the work along each
   and the internal energy the adiabat gives up · **still**: two paths
   compared from one starting point is a relation, not a motion (rule 14) ·
   $\kPr$ at A (1.0 to 5.0 × 10⁵ N/m², default 3.0, pressure), the expansion
   $V_\text{B}/V_\text{A}$ (1.2 to 4.0, default 3.0, ink), and a choice of
   panel, (a) the two paths from A or (b) the cycle ABCA (rule 26.1) · "The
   isothermal path from A does 330 J of work, the adiabatic path only
   234 J." · the graph is the idea · 2D.
   Axes fixed: $V$ from 0 to 5 × 10⁻³ m³ with $V_\text{A}$ at 1.0, $P$ from
   0 to 5 × 10⁵ N/m². The adiabat is computed with $PV^{5/3}$ constant for
   a monatomic gas, which the caption states in words (the pressure falls
   faster because the gas cools as it does work) without writing a relation
   the book has not taught. Readout: $\kQh = \kW$ along the isotherm and
   $\kdEint = -\kW$ along the adiabat with the numbers, the internal energy
   taken as $\tfrac{3}{2}PV$ from `eq-internal-energy-monatomic` and the
   ideal gas law; for panel (b) the net work of ABCA as the area between the
   curves. Draws energy, pressure.
7. `sim-four-processes` · Sim (it replaces no figure; it is Table 15.2 drawn)
   · isobaric-work, isochoric-process, isothermal-process,
   adiabatic-process, first-law-of-thermodynamics · variation by choice: the
   four processes leave the same point A on one diagram and the readout
   writes $\kQh$, $\kW$ and $\kdEint$ for each, which no figure of the book
   sets side by side · **still** · a dropdown for the process (isobaric,
   isochoric, isothermal, adiabatic), since a row of four wrapped at the
   page's width (rule 26.1), the final volume $V_\text{B}/V_\text{A}$
   (0.6 to 3.0, default 2.0, ink) for the three processes that change the
   volume and the final pressure $P_\text{B}/P_\text{A}$ (0.5 to 2.5,
   default 2.0, ink) for the isochoric one, the slider that does not apply
   held greyed · "An isobaric expansion to 2.0 times the volume does 200 J
   of work and takes in 500 J of heat." ·
   the graph is the idea · 2D. Axes fixed: $V$ 0 to 4 × 10⁻³ m³ with
   $V_\text{A}$ at 1.0 × 10⁻³, $P$ 0 to 6 × 10⁵ N/m² with $P_\text{A}$ at
   2.0 × 10⁵. Readout: $\kdEint = \kQh - \kW$ with the three numbers for the
   chosen process, the internal energy as $\tfrac{3}{2}PV$. Draws energy,
   pressure.
8. `fig-loops` · a faithful copy of the unnumbered nested loops ABCFA and
   ABDEA that a conceptual question and two AP items read; eyebrow
   "Figure" · net-work-of-a-cycle · standardisation only · still, no
   sliders · "Two cycles start and end at A: the rectangle ABCFA, and the
   taller rectangle ABDEA that reaches down to E and D." · 2D. Draws
   pressure. The book's image travels on the three cards as well.
9. `fig-parallelogram` · a faithful copy of the unnumbered parallelogram
   ABCD with its diagonal DB and the book's numbers, which a keyed problem
   and three AP items read; eyebrow "Figure"; the book's image is 411
   pixels wide and its five pressure values are hard to read from the card
   · net-work-of-a-cycle, pv-diagram-work-as-area · standardisation only ·
   still, no sliders · "The cycle ABCDA runs from A at 2.6 × 10⁶ N/m² and
   1.0 × 10⁻³ m³ round the parallelogram, and the line DB cuts it in two." ·
   2D. Draws pressure. The book's image travels on the four cards as well.

Photographs: one, the steam engine at the Turbinia Works (Figure 15.6),
dropped as the splash image at the head of the section, as `ch15/config.md`
decides; named in `notes`.

Figures that serve exercises: the book prints three unnumbered images. The
piston of the second conceptual question is the same drawing as Figure 15.8
and travels on that card only. The nested loops and the parallelogram travel
on every card that reads them and are also drawn as `fig-loops` and
`fig-parallelogram` above, since five AP items and two problems turn on
reading their labelled points and the parallelogram's numbers.

Extra simulations (rule 15), judged and decided:

- **The four processes from one point (`sim-four-processes`): built.** Table
  15.2 lists the four processes with one relation each, and nothing in the
  book draws them on one diagram or says what $\kQh$ and $\kdEint$ do in
  each; the readout does, and the choice control is what the config asks for
  a kind of process.
- The Turbinia engine as a scene. Left: it is a photograph of an engine, and
  `sim-piston` already shows the mechanism.
- A gas released from a pressurized cylinder cooling (the adiabatic aside).
  Left: it is `sim-isotherm-adiabat` read at C.
- The strips of 15.11 played as an animation, strip by strip. Left: the
  number of strips is a slider, and adding a clock to a sum would be the
  dummy loop rule 14 forbids.

## Exercises

- Every item is set at the end; the chapter has no Check Your Understanding
  box, so no inline host is needed.
- 8 conceptual questions, none keyed, each an open item with an AI-marked
  suggested approach: `cq1` (fs-id1169737813337, the perpetual-motion
  machine, Evaluate, citing `heat-engine`), `cq2` (fs-id1169737777774, is
  the heat transfer converted directly to work, with the book's piston image
  on the card, Analyze, citing `isothermal-adiabatic`), `cq3`
  (fs-id1169738164305, the same for an isochoric process, Understand, citing
  `path-and-cycles`), `cq4` (fs-id1169738243863, does $\kdEint = 0$ assume
  no phase change, Analyze, citing `isothermal-adiabatic`), `cq5`
  (fs-id1169737927114, why a rapidly expanding gas cools, Understand, citing
  `isothermal-adiabatic`), `cq6` (fs-id1169736657271, which of ABCFA and
  ABDEA produces the greatest net work, with the nested loops on the card,
  Analyze, citing `path-and-cycles`), `cq7` (fs-id1169737980711, how a short
  time helps a process be adiabatic, Understand, citing
  `isothermal-adiabatic`), `cq8` (fs-id1169737826122, why an isothermal
  process must be slow, Analyze, citing `isothermal-adiabatic`).
- 6 AP items, all the section's own. `ap1` (fs-id2539531, the work in
  process AB of the parallelogram, keyed (c), a graded choice, Apply, the
  parallelogram on the card), `ap2` (fs-id2328663, process CD by or on the
  system and how much, unkeyed, open with an AI approach, Apply, the
  parallelogram on the card), `ap3` (fs-id2200650, the sequence of five
  states read on the nested loops, keyed (d), a graded choice, Analyze, the
  loops on the card), `ap4` (fs-id2150466, sketch a cycle closed by an
  isotherm or an adiabat, unkeyed, open with an AI approach, Analyze), `ap5`
  (fs-id1738036, which cycle on the parallelogram has the greatest net work,
  keyed (a), a graded choice, Analyze, the parallelogram on the card), `ap6`
  (fs-id2537938, assign values and find the net work of ABCFEDCFA, unkeyed,
  open with its questions as printed and an AI approach, Evaluate, the loops
  on the card).
- 4 problems keyed and kept: `p1` (fs-id1169738045355, the nitrogen in a car
  tire, keyed 2.09 × 10⁴ J, Apply), `p3` (fs-id1169737713001, the locomotive
  piston both ways, keyed 1.76 × 10⁵ J for (a) and the same for (b), set as
  two parts, Apply), `p5` (fs-id1169737041721, the net work round ABCDA on
  the parallelogram, keyed 4.5 × 10³ J, Apply, the parallelogram on the
  card), `p7` (fs-id1169737818589, Unreasonable Results, the engine that
  does 4.00 kJ on 24.0 kJ in and 16.0 kJ out, keyed with the book's
  sentence, an open item with the book's answer, Evaluate).
- 6 problems left out: the helium-filled ball (fs-id1169737805440), the
  hand-driven tire pump (fs-id1169737780474) and the cycle ABDA
  (fs-id1169737002182) have no keyed answer; the Unreasonable Results
  engine between 450 °C and 150 °C (fs-id1169738036310) needs the Carnot
  efficiency of 15.4 and is left out of both sections, as `ch15/config.md`
  decides; the two Construct Your Own Problem items (fs-id1169737860358,
  fs-id1169737781729) have no answer to key. All named in `notes` and
  `exercise_notes`.
- Nothing is taken from another section and nothing of this section's own
  is held back.
- No generated questions: every node has a book exercise that tests it
  except `reversible-process`, which the perpetual-motion question and the
  summary reach toward; noted, no question generated.
- Weights: `ap1` and `ap2` give `pv-diagram-work-as-area` its full value and
  `isobaric-work` 2, since a leg of a parallelogram is an area, not a
  constant pressure; `ap3` gives `pv-diagram` (13.5) 2 beside the full value
  for `net-work-of-a-cycle`; `ap4` gives `work-depends-on-path` its full
  value, `isothermal-process` and `adiabatic-process` 3 each and
  `net-work-of-a-cycle` 3; `ap5` and `p5` give `net-work-of-a-cycle` the
  full value and `pv-diagram-work-as-area` 3; `ap6` gives
  `net-work-of-a-cycle` the full value and `first-law-of-thermodynamics` 2;
  `cq1` gives `heat-engine` the full value and
  `first-law-of-thermodynamics` 3; `cq2` gives `isobaric-work`,
  `isothermal-process` and `adiabatic-process` the full value each and
  `heat-engine` 2; `cq4` gives `isothermal-process` the full value and
  `internal-energy-monatomic-ideal-gas` 3; `cq8` gives `isothermal-process`
  the full value and `isobaric-work` and `isochoric-process` 2 each; `p1`
  gives `internal-energy-monatomic-ideal-gas` the full value and
  `ideal-gas-law` 2; `p3` gives `isobaric-work` the full value and
  `heat-engine` 2; `p7` gives `heat-engine` the full value and
  `first-law-of-thermodynamics` 3.

## Views

- Formulas: the eight equations of the section already in `chapter.json`,
  five important.
- Definitions: the twenty variables of the section and six glossary terms.
- Concept map: the ten nodes above with their edges into 7.1, 7.2, 11.3,
  13.3 to 13.5 and 15.1.

## Colour

The page binds energy, pressure, force and position. Every figure draws an
energy (the three arrows of the engine, the heat arrows of the piston, the
filled area under every path, every readout), every $PV$ diagram wears the
pressure hue on its vertical axis and every pressure slider carries it, and
the two cylinder figures draw the force $\kF = \kPr A$ on the piston and
bracket the stroke $\kd$ (`ch15/COLOR.md`). The volume, the piston area, the
number of strips, the expansion ratios and the atom count stay untyped and in
ink; no figure draws $\kvb$ or a temperature, so velocity and temperature are
not bound, and the internal energy the readouts state wears the energy hue
with heat and work, as the chapter's colour plan requires. Heat into and out
of the engine are one hue told apart by direction and label. The paths on
every diagram are ink; a positive area is the energy hue filled and a
negative one the same hue hatched.

## Wanted at chapter level

- variables `W` → 15.2-pv-diagrams
- variables `P_press` → 15.2-pv-diagrams
- variables `ΔV` → 15.2-pv-diagrams
- variables `F` → 15.2-pv-diagrams
- variables `A` → 15.2-pv-diagrams
- variables `d` → 15.2-pv-diagrams
- variables `P_ext` → 15.2-pv-diagrams
- variables `W_AB` → 15.2-path-and-cycles
- variables `W_BC` → 15.2-path-and-cycles
- variables `W_CD` → 15.2-path-and-cycles
- variables `W_DA` → 15.2-path-and-cycles
- variables `P_AB` → 15.2-path-and-cycles
- variables `P_CD` → 15.2-path-and-cycles
- variables `E_int` → 15.2-isothermal-adiabatic
- variables `v̄` → 15.2-isothermal-adiabatic
- variables `m` → 15.2-isothermal-adiabatic
- variables `T_temp` → 15.2-isothermal-adiabatic
- variables `Q_heat` → 15.2-isothermal-adiabatic
- variables `N_count` → 15.2-isothermal-adiabatic
- variables `k_boltz` → 15.2-isothermal-adiabatic
- equations `eq-work-force-distance` → 15.2-pv-diagrams
- equations `eq-isobaric-work` → 15.2-pv-diagrams
- equations `eq-external-pressure-work` → 15.2-pv-diagrams
- equations `eq-isochoric-work` → 15.2-path-and-cycles
- equations `eq-average-kinetic-energy` → 15.2-isothermal-adiabatic
- equations `eq-internal-energy-monatomic` → 15.2-isothermal-adiabatic
- equations `eq-isothermal` → 15.2-isothermal-adiabatic
- equations `eq-adiabatic` → 15.2-isothermal-adiabatic
- The prep notes say Figure 15.12(b) prints $P_\text{CD} = 1.2 \times 10^5$;
  the printed image reads 2 × 10⁵ N/m² and only the image's alt text says
  1.2 × 10⁵, so the page's `notes` names the alt text and Example 15.2's
  numbers stand. Nothing else is wanted; no symbol row is changed and none
  is missing.

Applied in the chapter pass (2026-09-14): the twenty variable anchors and the eight equation anchors are set on `chapter.json` as listed. The erratum line of `exploration.md` now says that the 1.2 × 10⁵ N/m² is in the alt text of Figure 15.12(b) alone and that the printed panel reads 2 × 10⁵ N/m², as this plan found. The page's setting of the isothermal and adiabatic passage and Figure 15.13 as narrative after Example 15.2's Discussion, although the CNXML places them inside the `<example>` element, was confirmed against the module and is recorded in `config.md`. The two unnumbered figure rows of the closing block stand as the config allowed. No symbol row was changed.

Figure pass (2026-09-15, Claude Fable 5.1): `sim-piston` set the label of $F'$ on the cylinder's hatched wall, where the pale pressure-force hue could not be read; it now sits under its arrow inside the gas on a panel, at weight 700. `sim-isobaric` drew "ΔV = Ad" and "F = PA" on top of each other at the book's default stroke; the volume label now stands at the left of the swept volume and the force label to the right of its arrow, and the pressure labels are set at weight 700 so the pale hue reads by weight. `sim-four-processes` named its three ghost paths at their endpoints, where the chosen path's B collided with the isothermal name; each ghost is now named at the middle of its own path, in muted ink on a panel, and the names are set after B. The other four figures were checked at every state and stand as built.
