# Plan: 15.3 Introduction to the Second Law of Thermodynamics: Heat Engines and Their Efficiency (m42234)

Source: `source.md` (converted from CNXML). Status: built 2026-09-14
without a review stop, on Chen's instruction to finish the book in waves;
the plan is left for review after, as `ch15/config.md` records.

The section that turns the direction of heat transfer into a law and the law
into a limit on engines. One splash photograph, five sketch figures, two
boxed statements of the second law, one worked example, four conceptual
questions and eight problems, four of them keyed. No AP items, no Check Your
Understanding box, no PhET note. One page (rule 11).

## Sub-concepts (page headers)

The book prints one header of its own, Heat Engines, and runs the rest as
one argument: the one-way processes, the first expression, the engine, the
cycle and its work, the efficiency, the example, the Otto cycle. The book's
header is kept as it writes it; the others are the page's, one block per
idea:

1. `irreversible` **Irreversible processes** (book: the opening paragraph,
   the broken glass, the three one-way processes, Figure 15.15).
2. `first-expression` **The second law of thermodynamics, first
   expression** (book: the law that forbids what the first law allows, the
   boxed first expression, its restatement as "sole result").
3. `heat-engines` **Heat Engines** (book's header: the device that uses
   heat transfer to do work, $\kQH$, $\kQC$, $\kW$, $\kTemph$, $\kTempc$,
   Figure 15.16, the wish that $\kW = \kQH$, the boxed second expression).
4. `cyclical` **Cyclical processes and the work of an engine** (book: the
   definition of a cyclical process, $\kdEint = 0$ over a cycle, the first
   law reduced to $\kW = \kQh$ and $\kW = \kQH - \kQC$).
5. `efficiency` **The efficiency of a heat engine** (book: conversion
   efficiency, $\text{Eff} = \kW/\kQH = 1 - \kQC/\kQH$, the sign
   convention; Example 15.3, the coal-fired power station, as `ex-coal`).
6. `otto` **The Otto cycle** (book: the four-stroke engine of Figure 15.17,
   the Otto cycle of Figure 15.18, the correspondence of its four paths to
   the strokes, the area inside the loop as the net work, the larger loop
   of Figure 15.19, the look ahead to the reservoir temperatures).

Cross references are plain text: "as noted in the previous section" stays
as the book writes it, and "In the next section" too. The chemical reaction
$\text{C} + \text{O}_2 \to \text{CO}_2$ stays in plain LaTeX; the CNXML
wraps it in `<sub>`, which the page drops.

Learning objectives, section summary and glossary come out of the running
text into the views. The conceptual questions and the problems go to the
Exercises document; nothing is inline.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| irreversible-process | idea | irreversible | the opening paragraph, Figure 15.15, the summary; CQ 4 |
| second-law-heat-flow-direction | result | first-expression | the boxed first expression, Figure 15.16(a); CQ 2 |
| second-law-no-perfect-engine | result | heat-engines | the boxed second expression; CQ 2, 4 |
| cyclical-process | idea, eq-cycle-first-law | cyclical | the definition and $\kdEint = 0$; problems 1, 3, 5 |
| heat-engine-work-output | result, eq-cycle-work | cyclical | the derivation, Figure 15.16(b), Example 15.3; problems 1, 3, 5, 7 |
| heat-engine-efficiency | result, eq-efficiency | efficiency | both forms, Example 15.3; CQ 1, 3; problems 1, 3, 5, 7 |
| calculate-engine-efficiency | skill | ex-coal | Example 15.3; problems 1, 3, 5, 7 |
| otto-cycle | idea | otto | Figures 15.17 to 15.19, the glossary |

The section leans on `heat` (14.1), `friction-dissipates-mechanical-energy`
(7.5), `reversible-process`, `heat-engine`, `adiabatic-process`,
`isochoric-process` and `net-work-of-a-cycle` (15.2),
`first-law-of-thermodynamics` and `internal-energy-is-a-state-function`
(15.1), `efficiency` (7.6) and `power` (7.7), all marked as used where the
text uses them.

## Figures

id · replaces · concepts · value add · motion · sliders and choices ·
headline · graph · 3D

1. `sim-one-way` · replaces Figure 15.15 (a), (b), (c) (the three one-way
   processes) · irreversible-process, second-law-heat-flow-direction · flow
   by animation and variation by slider: the book draws each process as a
   before and an after, and the reader has to imagine the car slowing, the
   heat crossing and the gas spreading, which is exactly the passage of
   time the idea is about · **moves**: the three panels run on one clock of
   five seconds, the heat crossing from the hotter body to the colder as a
   band of moving dashes, the car braking from full speed to rest with the
   heat transfer growing at its brakes, and some forty gas molecules leaving the
   corner of the chamber on straight paths that reflect off the walls until
   they fill it; the idea is a direction in time, so it registers a cycle
   and gets the scrubber, and the hold at the end shows the state nothing
   ever returns from · $\kTemph$ (300 to 600 K, default 400, temperature),
   $\kTempc$ (200 to 500 K, default 300, temperature); the arrow of panel
   (a) runs from whichever body is hotter, and when the reader drags the
   cold body above the hot one the arrow turns round, which is the first
   expression made visible, and its width grows with the difference ·
   "Heat transfer goes from the body at 400 K to the body at 300 K, the car
   is slowing, and the gas is spreading through the chamber." · none: the
   three scenes are the picture · 2D. Readout: $\kTemph = 400\ \text{K}
   > \kTempc = 300\ \text{K}$ with the direction stated; small line on the
   three reverses that never happen. Molecules are ink, the gas being only
   "a puff of air" (rule 7); the car is the library's sprite in ink. Draws
   temperature, energy (the two $\kQh$ arrows). Labels on: one per panel,
   the bodies by their temperatures, nothing moving carries a label.
2. `sim-heat-engine` · replaces Figure 15.16 (a) and (b) (the spontaneous
   transfer and the heat engine) · second-law-no-perfect-engine,
   heat-engine-work-output, second-law-heat-flow-direction · variation by
   slider: the three arrows of the engine are drawn with widths
   proportional to $\kQH$, $\kW$ and $\kQC$, so the balance $\kW = \kQH -
   \kQC$ is a picture, and the two slider extremes are the two limits the
   passage argues, all the heat passing through and doing no work as in
   (a), and no heat out at all, which the second expression forbids ·
   **still**: nothing in the balance has a clock, the arrows answer the
   sliders; no cycle, no transport · $\kQH$ (5.0 to 50.0 kJ, default 25.0,
   energy), $\kQC$ (0 to 50.0 kJ, default 14.8, energy; the defaults are
   Example 15.3's two heat transfers in kilojoules, so the engine on load
   is the coal-fired station in miniature, and $\kQC$ above $\kQH$ is held
   at $\kQH$, the engine then doing no work) · "The engine takes 25.0 kJ
   from the hot reservoir, does 10.2 kJ of work and passes 14.8 kJ to the
   cold reservoir." · none · 2D. Readout: $\kW = \kQH - \kQC$ with the
   numbers; small line saying what $\kQC = 0$ would mean. Panel (a) beside
   it keeps the book's spontaneous transfer with the same reservoirs.
   Draws energy, temperature (the reservoir labels $\kTemph$, $\kTempc$
   wear the hue; the bodies are ink). Labels on: six, none moving.
3. `sim-four-stroke` · replaces Figure 15.17 (a) to (d) (the four-stroke
   engine) · otto-cycle · flow by animation, and a view the book's four
   panels do not give: the book draws four instants of a sequence and
   names the strokes, and the reader has to imagine the piston, the valves
   and the crankshaft between them; beside the cylinder a small $\kPr V$
   diagram carries a point that walks the cycle as the strokes go by, so
   the reader sees which stroke is which path, which is what the passage
   on the Otto cycle explains in words · **moves**: one cycle is two turns
   of the crank in six seconds, the piston on its connecting rod, the
   intake valve open on the intake stroke and the exhaust valve on the
   exhaust stroke, the spark at the top of the compression, the gas in the
   cylinder drawn as ink molecules that crowd as it is compressed; the
   strokes are a sequence in time, as the chapter config says, so it
   registers a cycle and gets the scrubber · no sliders: the book's
   account of the strokes has nothing variable in it, and the transport's
   scrubber walks the sequence; the speed button is the engine's speed ·
   "Compression stroke: the valves are closed and the piston rises,
   compressing the air-fuel mixture in a nearly adiabatic process; work is
   done on the gas." · graph beside the tall cylinder: the $\kPr V$ trace
   of the cycle, the current point on it · 2D, a cross-section as the
   config settles. Readout: the stroke's relation, $\kQh = 0$ and
   $\kdEint = -\kW$ on the two adiabatic strokes with the sign of $\kW$
   stated, the exchange of gas on the other two; small line naming the
   path of the Otto cycle the stroke corresponds to. Draws pressure (the
   vertical axis of the trace), energy (the $\kW$ of the readout). Labels
   on: the strokes' parts named once each (piston, crankshaft, intake,
   exhaust, spark plug), none on anything that moves.
4. `sim-otto` · replaces Figure 15.18 (a) and (b) and folds Figure 15.19
   (the Otto cycle on a $\kPr V$ diagram with its schematic, and the same
   cycle over a wider temperature range) · otto-cycle,
   heat-engine-work-output, net-work-of-a-cycle · variation by slider and
   flow by animation: the two book figures are two states of one cycle,
   and one live loop with the two temperatures on sliders reaches both and
   every state between, the area inside the loop growing as the reader
   lowers the temperature where the compression begins or raises the one
   where the power stroke begins, which is the passage's argument; and
   the area fills leg by leg as the cycle is walked, with $\kQH$ entering
   along BC and $\kQC$ leaving along DA, which the still cannot show ·
   **moves**: the state point walks A to B to C to D to A in five seconds,
   the work under each adiabat filled as it is walked, the hatched
   compression work under AB subtracted from the filled expansion work
   under CD so that what remains is the loop; the idea is a cycle walked
   round, which the config names as one of the chapter's three moving
   ideas, so it registers a cycle and gets the scrubber · $\kTempc$ (250
   to 400 K, default 300, temperature: the temperature at A, where the
   compression begins), $\kTemph$ (1000 to 2500 K, default 1800,
   temperature: the temperature at C, where the power stroke begins) ·
   "Along path CD the gas expands adiabatically and does 640 J of work on
   the outside world, more than the 240 J done on it along AB." · the
   graph is the scene; the engine schematic with its three arrows beside
   it · 2D. Readout: $\kW = \kQH - \kQC$ with the live numbers; small line
   on the area inside the loop. The cylinder holds a fixed charge of air,
   the amount that fills 0.500 L at 1.00 atm and 300 K, compressed to one
   quarter of that volume, and the two adiabats are drawn for air; the
   compression ratio stays fixed, as the book's dashed volume lines do, so
   the sliders change the loop's height and its area and not its width,
   and a lower temperature at A lowers the whole compression path and the
   work it costs, as the passage says. The fixed axes run 0 to 0.6 L and 0
   to 4 MPa, which holds every state of the sliders. Draws pressure, energy, temperature.
   Labels on: A, B, C, D, the two adiabats and the two heat arrows.

Figure 15.14, the melting ice floes, is a splash photograph at the head of
the section and is dropped, as the chapter config says. Every other book
figure of the section is a sketch and is replaced. No exercise refers to a
figure.

Extra simulations (rule 15), considered and left:

- The coal-fired power station of Example 15.3 as a figure with the daily
  heat transfer on sliders: `sim-heat-engine` already carries the example's
  numbers as its defaults, in kilojoules, and a second engine figure would
  show nothing the first does not. Left.
- The efficiency against $\kQC/\kQH$ as a graph: a straight line that the
  readout of `sim-heat-engine` already states. Left.

None built.

## Exercises

- No Check Your Understanding boxes; nothing inline.
- 4 conceptual questions, `cq1` to `cq4`, with AI-written suggested
  approaches, citing `efficiency`, `heat-engines`, `efficiency` and
  `heat-engines`.
- 4 problems keyed and kept: `p1` (the engine that does 10.0 kJ of work,
  multi), `p3` (the 22.0% engine, multi), `p5` (the ship's engine at 5.00%,
  multi), `p7` (the upgraded turbines, multi with the book's negative sign
  on the reduction in heat transfer to the environment).
- 4 problems left out, having no answer in the book's key: 2
  (fs-id1169738072279), 4 (fs-id1169737950653), 6 (fs-id1169737794772) and
  8 (fs-id1169736895699).
- No AP items in this section; nothing moves in or out.
- No generated questions: every node has a book exercise except
  `otto-cycle`, which the book tests nowhere in this section and which is
  left without one, as the config says.
- Weights: `p5` gives `calculate-engine-efficiency` the full value and
  `heat-engine-efficiency` and `heat-engine-work-output` weight 2, since
  part (b) is a fuel count beyond both; `cq1` gives `heat-engine-efficiency`
  the full value and `efficiency` weight 1.

## Views

- Formulas: the four equations of the section already in `chapter.json`,
  the cycle's work and the two forms of the efficiency important and the
  reduced first law not.
- Definitions: the thirteen variables of the section; the four glossary
  terms.
- Concept map: the eight nodes above with their edges into 7.5, 7.6, 7.7,
  13.1, 14.1, 15.1 and 15.2.

## Colour

The page binds energy, temperature and pressure: every sim colours a heat
transfer or a work in the energy hue, three of them carry a temperature on a
slider or wear it on a reservoir's label, and two draw the pressure axis of
a $\kPr V$ diagram. The efficiency, the volume, the reservoir bodies, the
gas molecules, the car and the engine are ink.

## Wanted at chapter level

- variables `Q_h` → 15.3-heat-engines
- variables `Q_c` → 15.3-heat-engines
- variables `W` → 15.3-heat-engines
- variables `T_h` → 15.3-heat-engines
- variables `T_c` → 15.3-heat-engines
- variables `Q_heat` → 15.3-cyclical
- variables `ΔE_int` → 15.3-cyclical
- variables `Eff` → 15.3-efficiency
- variables `Q_hprime` → 15.3-otto
- variables `Q_cprime` → 15.3-otto
- variables `W_prime` → 15.3-otto
- variables `T_hprime` → 15.3-otto
- variables `T_cprime` → 15.3-otto
- equations `eq-cycle-first-law` → 15.3-cyclical
- equations `eq-cycle-work` → 15.3-cyclical
- equations `eq-efficiency` → 15.3-efficiency
- equations `eq-efficiency-heats` → 15.3-efficiency
- The primed symbols `Q_hprime`, `Q_cprime`, `W_prime`, `T_hprime` and
  `T_cprime` appear on this page only in the caption of Figure 15.19,
  which the fold keeps as plain text under `sim-otto`; the prose never
  writes them, so the `otto` anchor is the nearest passage.

Applied in the chapter pass (2026-09-14): the thirteen variable anchors and the four equation anchors are set on `chapter.json` as listed. The five primed rows of this section (`Q_hprime`, `Q_cprime`, `W_prime`, `T_hprime`, `T_cprime`) stand on the `otto` anchor although the page writes none of them, since the fold carries only the caption of Figure 15.18 as its `original_caption` and the caption of Figure 15.19, where the book writes them, is not shown; they are the book's symbols for the folded figure and the definitions view lists them. No symbol row was changed.

Figure pass (2026-09-15, Claude Fable 5.1): in `sim-otto` the $Q_\text{c}$ arrow leaving DA was drawn over the corner label A, and at the highest $T_\text{h}$ the corner C rose into the legend in the top-left of the graph; the corner labels are now set after the heat arrows and the legend sits in the top-right corner, which stays empty at every temperature. The other three figures were checked at every state and stand as built.
