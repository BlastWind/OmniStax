# Plan: 15.4 Carnot's Perfect Heat Engine: The Second Law of Thermodynamics Restated (m42235)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's standing instruction to finish the book in
waves; the per-section stop of rule 2, the plan review of rule 5 and the
user picks of rule 15 are replaced by this file, written before the section
was built and left for review after, as `ch15/config.md` records.

The section that answers the question 15.3 left open: how efficient can a
heat engine be? Carnot's cycle of two isotherms and two adiabats, all of them
reversible, is the most efficient cycle possible, and its efficiency depends
on nothing but the two reservoir temperatures. Five book figures (15.20 to
15.24), two of them photographs, one worked example (the nuclear reactor),
one boxed statement of the second law, three glossary terms, three
conceptual questions and nine problems of which five are keyed. No AP items
of its own and none taken from elsewhere. One page (rule 11).

## Sub-concepts (page headers)

The module prints no header of its own, so all four are the agent's (rule 3;
`ch15/config.md` says so for 15.4).

1. `carnot-cycle` **Carnot's cycle, made only of reversible processes**
   (book: the drinking bird, Figure 15.20; the paragraph on Carnot and the
   cycle; the paragraph on reversible processes; the boxed Carnot Engine
   statement; the sentence that points at Figure 15.21). Figure 15.21 sits
   here.
2. `maximum-efficiency` **The Carnot efficiency** (book: "Carnot also
   determined…" with `eq-efficiency-heats` restated; "What Carnot found…"
   with `eq-carnot-heat-ratio` and `eq-carnot-efficiency`; the paragraph on
   absolute zero; the paragraph on the smallest ratio). The Sim of the
   efficiency against the two temperatures sits here.
3. `nuclear-reactor` **Maximum theoretical efficiency for a nuclear
   reactor** (book: Example 15.4 with Figure 15.22 inside it and Figure
   15.23 after its discussion).
4. `real-engines` **Why real engines fall short** (book: the closing
   paragraph on irreversible processes and dissipation in peripheral
   equipment; Figure 15.24).

The book numbers its example on openstax.org as Example 15.4 and the page
follows that. The example's reference to Figure 15.22 and 15.23 links by
itself; the problem that cites the Problem-Solving Strategies for
Thermodynamics of 15.5 and the problem that cites Example 15.4 keep the
book's words as plain text. Learning objectives, the section summary and the
three glossary terms come out of the running text into the tables and the
views (rule 4).

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| carnot-cycle | idea | carnot-cycle | the opening paragraphs, Figure 15.21, the drinking bird, cq1 |
| second-law-carnot-statement | result | carnot-cycle | the boxed statement, the caption of 15.21, cq2 and cq3 |
| carnot-efficiency | result, eq-carnot-heat-ratio, eq-carnot-efficiency | maximum-efficiency | the two equations, the Sim, p1, p5, p7 |
| calculate-carnot-efficiency | skill | nuclear-reactor | Example 15.4, p1, p3, p5, p9 |
| real-engines-below-carnot | idea | real-engines | the discussion of Example 15.4, Figure 15.24, cq1, cq2, p3 |

The section leans on `heat-engine`, `isothermal-process`, `adiabatic-process`
and `reversible-process` (15.2), `irreversible-process`, `cyclical-process`,
`second-law-no-perfect-engine`, `heat-engine-work-output`,
`heat-engine-efficiency`, `calculate-engine-efficiency` and `otto-cycle`
(15.3), `net-work-of-a-cycle` (15.2), `absolute-zero`, `temperature-scales`
and `convert-temperature-scales` (13.1), `friction-dissipates-mechanical-energy`
(7.5) and `energy-degradation` (7.9); the coverage rows mark each as used
where the text uses it.

## Figures

id · replaces or Sim · concepts · value add · moving or still · sliders ·
headline · graph · 3D

1. `sim-carnot-cycle` · replaces Figure 15.21, the Carnot cycle on a $PV$
   diagram beside its engine schematic · carnot-cycle,
   second-law-carnot-statement, carnot-efficiency, net-work-of-a-cycle ·
   variation by slider (the two isotherms, the loop and the three energies
   follow the temperatures) and flow by animation (the loop walked leg by
   leg, its area filling as it goes) · **moving**: a cycle has a clock in it,
   and what the still cannot show is that $\kQH$ arrives during AB alone,
   $\kQC$ leaves during CD alone, and the area inside the loop is what is
   left after the compression legs have taken back part of what the
   expansion legs gave; the working point walks A→B→C→D→A in about six
   seconds, the area under each expansion leg fills in the energy hue and
   the area under each compression leg is taken away again, so that the
   interior remains, and the engine schematic beside it lights the arrow of
   the leg being walked (`ch15/config.md` names 15.21 among the three ideas
   that may move) · $\kTemph$ (350 to 650 K, default 573, temperature),
   $\kTempc$ (273 to 350 K, default 300, temperature) and the expansion
   ratio $V_{\text{B}}/V_{\text{A}}$ of the hot isotherm (1.5 to 3.0,
   default 2.5, ink), which changes the size of the loop and of every
   energy but not the efficiency, which is the point · "Between 573 K and
   300 K a Carnot engine turns 47.6% of the heat transfer it takes in into
   work, whatever the size of the loop." · the $PV$ diagram is the scene and
   the engine schematic stands beside it, since the schematic is vertical ·
   2D. The working substance is one mole of a monatomic ideal gas starting
   at $V_{\text{A}} = 3.0$ L, so that the loop has numbers; the book's
   defaults are the temperatures of Example 15.4 and the picture the book
   draws is the loop at those temperatures. Axes fixed at 0 to 35 L and 0
   to 2.0 MPa, which hold the loop at every slider position. Readout:
   $\kQC/\kQH = \kTempc/\kTemph$ and $\text{Eff}_{\text{C}} = 1 -
   \kTempc/\kTemph$ with the live numbers; small line with $\kQH$, $\kQC$ and
   $\kW$ in kJ, and $\kW$ named as the area inside the loop. Labels: the
   corners A, B, C, D and the two isotherm temperatures are six entity
   labels and are on; the two kinds of leg (isotherm solid, adiabat dashed)
   are told in a legend; hover names the four legs. Draws pressure, energy,
   temperature.
2. `sim-efficiency-map` · Sim (it replaces nothing in the book) ·
   carnot-efficiency, absolute-zero · variation by slider on a graph the
   book never draws: the whole curve of $\text{Eff}_{\text{C}}$ against
   $\kTemph$ for the chosen $\kTempc$, which shows at once that the curve
   climbs toward 100% and never reaches it unless $\kTempc$ is at absolute
   zero, and that the same $\kTemph$ gives more when $\kTempc$ is lower ·
   **still**: it answers its sliders and nothing in it runs on a clock ·
   $\kTempc$ (0 to 400 K, default 300, temperature, with a detent at 0 K,
   the case the book calls a practical and theoretical impossibility) and
   $\kTemph$ (300 to 1000 K, default 573, temperature) · "With the cold
   reservoir at 300 K, a hot reservoir at 573 K allows 47.6% at most; only
   a cold reservoir at absolute zero would allow 100%." · graph alone, the
   graph being the idea · 2D. Axes fixed at 0 to 1000 K and 0 to 100%.
   Readout: $\text{Eff}_{\text{C}} = 1 - \kTempc/\kTemph$ with the live
   numbers; small line saying what moving each temperature does. Draws
   temperature.
3. `sim-reactor` · replaces Figure 15.22, the schematic of a pressurized
   water reactor and its steam turbines · calculate-carnot-efficiency,
   carnot-efficiency, heat-engine · standardisation and variation by
   slider: the plant redrawn as the heat engine it is, its hot side the
   pressurized water and its cold side the condenser, with the two
   temperatures in degrees Celsius converted to kelvins in the readout and
   the three energy arrows sized by the Carnot efficiency they set ·
   **still**: the plant runs steadily and a flow drawn moving through its
   pipes would only replay the book's arrows (rule 24.9); the figure
   answers its two sliders · the pressurized water temperature (250 to
   350 °C, default 300, temperature) and the condenser temperature (10 to
   60 °C, default 27, temperature) · "Pressurized water at 300 °C and
   condensed steam at 27 °C allow a maximum efficiency of 47.6%; a real
   station reaches about 35%." · none: the schematic is the whole picture ·
   2D. Readout: $\text{Eff}_{\text{C}} = 1 - \kTempc/\kTemph$ with the
   kelvin values written out, as the example does it; small line comparing
   the actual 35% to the maximum. Labels: the eight parts of the plant
   (core, pressure vessel, steam generator, containment, high- and
   low-pressure turbines, generator, condenser, cooling tower) are kinds
   labelled once each; they sit still and do not collide, so they are on.
   Draws temperature, energy.
4. `sim-real-engine` · replaces Figure 15.24 (a) and (b), a real engine
   against a Carnot engine, and friction in the output mechanisms ·
   real-engines-below-carnot, carnot-efficiency, heat-engine-efficiency ·
   variation by slider: the book's two panels become one engine whose
   dashed arrows are what a Carnot engine would do and whose solid arrows
   are what the real engine does, with the friction of the output
   mechanisms diverting part of the work back to the cold reservoir as
   $\kQf$ · **still**: the picture is a balance of energies per cycle, not
   a motion · $\kTemph$ (350 to 700 K, default 573, temperature), $\kTempc$
   (273 to 350 K, default 300, temperature), the real engine's efficiency
   as a share of the Carnot efficiency (0 to 1.00, default 0.70, ink,
   which is the book's "a little better than 0.7 times the maximum") and
   the share of the work output that friction turns back into heat
   transfer (0 to 50%, default 15%, ink); $\kQH$ is held at 100 kJ per
   cycle so that the arrows have widths · "A real engine reaching 0.70 of
   the Carnot efficiency between 573 K and 300 K delivers 33.3 kJ of work
   from every 100 kJ, and friction in its output mechanisms returns 5.0 kJ
   of that to the cold reservoir." · none · 2D. Readout: $\text{Eff} =
   \kW/\kQH$ beside $\text{Eff}_{\text{C}} = 1 - \kTempc/\kTemph$ with the
   live numbers; small line on $\kQf$ and the work that is left. Labels:
   $\kQH$, $\kW$, $\kQC$, $\kQf$, $\kTemph$, $\kTempc$ and the two dashed
   Carnot arrows named in a legend; six entity labels, on. Draws energy,
   temperature.

Photographs, each with keep or drop and why:

- Figure 15.20, the drinking bird (`fig-drinking-bird`, width 400): **kept**.
  The passage calls it an example of Carnot's engine, the paragraph on zero
  power points back at it, and the first conceptual question asks the reader
  to think about it. Its caption and credit are the book's.
- Figure 15.23, the nuclear and coal-fired power stations
  (`fig-power-stations`, width 300, one image with panels (a) and (b)):
  **kept**. Example 15.4's discussion says it "shows" the two stations and
  their cooling towers, which are the $\kQC$ of the example. Its caption and
  credits are the book's.

Figures that serve exercises: none; the problems of the section refer to no
figure.

Extra simulations (rule 15), thought through, judged and decided:

- **The Carnot efficiency against the two temperatures
  (`sim-efficiency-map`): built.** The text says in words that 100% needs
  absolute zero and that the efficiency is greatest when the ratio is
  smallest; the cycle figure shows one state at a time, and a curve is the
  view that shows the whole claim at once. Built as figure 2 above.
- Two Carnot engines in series, the second run on the exhaust of the first,
  which is the keyed problem on the practical steam engines. Left: the
  problem's own solution is the derivation, and a figure would answer it.
- A Carnot engine and an Otto cycle between the same two temperatures, side
  by side. Left: the Otto cycle is 15.3's figure and the comparison is one
  number, which the readout of `sim-carnot-cycle` already states.
- The drinking bird as a moving toy. Left: the passage uses it as an example
  and a caution (zero power), not as a mechanism to be understood, and an
  animation of it would be decoration.

## Exercises

- 3 conceptual questions, none keyed, each an open item with an AI-marked
  suggested approach: `cq1` (fs-id1169738163020, the dissipative processes
  that stop the drinking bird, Understand, citing `carnot-cycle`), `cq2`
  (fs-id1169738110586, whether engineering can reduce or eliminate heat
  transfer to the environment, Understand, citing `real-engines`) and `cq3`
  (fs-id1169737926553, whether the second law alters conservation of energy,
  Understand, citing `maximum-efficiency`).
- 5 problems keyed and kept: `p1` (fs-id1169737792990, the gasoline engine's
  hot reservoir, keyed 403 °C), `p3` (fs-id1169738114379, the Carnot engine
  at 42.0% and the real engine at 0.700 of the maximum, keyed 244 °C and
  477 °C with the book's answer to part (c) in the solution), `p5`
  (fs-id1169738043420, the two steam engines in series, keyed 24.9%, 22.1%
  and 41.5%, part (d) being the book's own demonstration in the solution),
  `p7` (fs-id1169738045392, the inventor's device, an open item with the
  book's answer) and `p9` (fs-id1169737988086, Unreasonable Results, the
  cold reservoir that comes out at −56.3 °C, keyed for part (a) with the
  book's (b) and (c) in the solution).
- 4 problems left out, having no answer in the book's key: the gas-cooled
  reactor between 700 °C and 27.0 °C (fs-id1169737949828), the steam
  locomotive at 17.0% (fs-id1169738033918), the coal-fired station at 38%
  (fs-id1169738110636) and the Unreasonable Results steam engine with a
  Carnot efficiency of 0.800 (eip-319). All four are named in `notes`.
- 15.2's unkeyed Unreasonable Results engine between 450 °C and 150 °C
  (fs-id1169738036310) needs this section and is left out of both, as
  `ch15/config.md` decides; `exercise_notes` says so.
- No AP items: the section prints none and none is held for it.
- No generated questions: every node of the section has a book exercise that
  tests it.
- Weights: `cq1` gives `real-engines-below-carnot` its full value and
  `carnot-cycle` 2; `cq2` gives `real-engines-below-carnot` full and
  `second-law-carnot-statement` 3; `cq3` gives `second-law-carnot-statement`
  full and `first-law-of-thermodynamics` 2; `p1` gives
  `calculate-carnot-efficiency` full and `carnot-efficiency` 3; `p3` gives
  `calculate-carnot-efficiency` full, `carnot-efficiency` 3 and
  `real-engines-below-carnot` 2; `p5` gives `calculate-carnot-efficiency`
  full and `carnot-efficiency` 3; `p7` gives `carnot-efficiency` full,
  `second-law-carnot-statement` 3 and `heat-engine-efficiency` 2; `p9`
  gives `calculate-carnot-efficiency` full and `carnot-efficiency` 2.

## Views

- Formulas: the two equations of the section already in `chapter.json`,
  `eq-carnot-heat-ratio` and `eq-carnot-efficiency`, both important; the
  section's restatement of `eq-efficiency-heats` is 15.3's row.
- Definitions: the seven variables of the section, and three glossary terms,
  Carnot cycle, Carnot engine and Carnot efficiency.
- Concept map: the five nodes above with their edges into 7.5, 7.9, 13.1,
  15.2 and 15.3.

## Colour

The page binds energy, temperature and pressure, as `ch15/COLOR.md` allows
for 15.4. Every figure draws a temperature (the two reservoir labels, the
isotherms' labels, the sliders and every readout) and all but the map draw
an energy (the arrows $\kQH$, $\kW$, $\kQC$ and $\kQf$, and the area inside
the loop); pressure is bound by the Carnot cycle alone, on the vertical axis
of its $PV$ diagram. Volume, the expansion ratio, the efficiency and its
share stay untyped and in ink, and no reservoir body is tinted hot or cold.

## Wanted at chapter level

- variables `Eff_C` → 15.4-maximum-efficiency
- variables `T_h` → 15.4-maximum-efficiency
- variables `T_c` → 15.4-maximum-efficiency
- variables `Q_h` → 15.4-carnot-cycle
- variables `Q_c` → 15.4-carnot-cycle
- variables `W` → 15.4-carnot-cycle
- variables `Q_f` → 15.4-real-engines
- equations `eq-carnot-heat-ratio` → 15.4-maximum-efficiency
- equations `eq-carnot-efficiency` → 15.4-maximum-efficiency

Applied in the chapter pass (2026-09-14): the seven variable anchors and the two equation anchors are set on `chapter.json` as listed. No concept, edge or symbol row was changed.
