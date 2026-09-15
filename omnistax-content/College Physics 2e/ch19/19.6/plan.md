# Plan: 19.6 Capacitors in Series and Parallel (m42336)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's standing instruction to finish the book in
waves; the per-section stop of rule 2, the plan review of rule 5 and the user
picks of rule 15 are replaced by this file, written before the section was
built and left for review after, as Chapters 1 to 16 did it.

The section that takes the single capacitor of 19.5 and puts several of them
in one circuit. Two connections are derived, series and parallel, each from
the quantity the connection holds in common — the same charge on every
capacitor in series, the same voltage across every capacitor in parallel —
and each ends in a picture of the equivalent capacitor, wider apart in
series and wider across in parallel. A third block reduces a circuit that has
both connections in it. Three sketch figures (19.20, 19.21, 19.22), no
photograph, two worked examples, two boxed notes, no Check Your Understanding
box, no glossary term of its own, one conceptual question that goes to 19.7,
six problems of which four are keyed. One page (rule 11).

## Sub-concepts (page headers)

The module prints two headers of its own, Capacitance in Series and
Capacitors in Parallel, and those are kept as the book writes them
(`config.md`). The opening paragraph and the closing reduction get headers of
the agent's (rule 3), since the book leaves both unheaded and each is an
independent idea.

1. `combinations` **Several capacitors, one equivalent capacitance** (book:
   the opening paragraph). The idea `equivalent-capacitance` is introduced
   here.
2. `series` **Capacitance in Series** (book: the two paragraphs on the series
   connection, Figure 19.20, the derivation through the individual voltages,
   the boxed Total Capacitance in Series note and Example 19.9). The
   variables $\kCone$, $\kCtwo$, $\kCthree$, $\kCS$, $\kVone$, $\kVtwo$,
   $\kVthree$, $\kV$, $\kQch$, $\kCap$ and $\kd$ and the equations
   `eq-series-voltages` and `eq-series-capacitance` anchor here.
3. `parallel` **Capacitors in Parallel** (book: the paragraph on the parallel
   connection, Figure 19.21, the derivation through the individual charges,
   the sum of the three capacitances and the boxed Total Capacitance in
   Parallel note). The variables $\kCp$, $\kQchone$, $\kQchtwo$ and
   $\kQchthree$ and the equations `eq-parallel-charges` and
   `eq-parallel-capacitance` anchor here.
4. `mixed` **Series and parallel in one circuit** (book: the paragraph on
   more complicated connections, Figure 19.22 and Example 19.10). The
   variable $\kCtot$ anchors here.

Cross references are plain text, as every other page of the book writes them;
this section names none outside itself, and the app links the Figure numbers
and the Example the caption of Figure 19.22 points at, both of which sit on
this page. Learning objectives and the section summary come out of the
running text into the tables and the views (rule 4); the section defines no
glossary term.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| equivalent-capacitance | idea | combinations | the opening paragraph; the equivalent capacitor drawn beside each connection; every problem of the section, which asks for a total |
| series-capacitance | result, eq-series-capacitance | series | the derivation from the common charge; Example 19.9; the series half of the two-capacitor problem; the Unreasonable Results item |
| parallel-capacitance | result, eq-parallel-capacitance | parallel | the derivation from the common voltage; the 14.000 µF the same three capacitors make in parallel; the Unreasonable Results item |
| reduce-series-parallel-combinations | skill | mixed | Example 19.10; the two circuit problems that are kept |

The section leans on `capacitance`, `capacitor` and
`parallel-plate-capacitance` (19.5), `conservation-of-charge` (18.1),
`conductor-is-equipotential` (19.4) and `voltage-across-uniform-field`
(19.2); the coverage rows mark each as used where the text uses it.

## Figures

id · replaces or Sim · concepts · value add · moving or still · sliders ·
headline · graph · 3D

1. `sim-series-parallel` · replaces Figure 19.20 (a)(b) and Figure 19.21
   (a)(b), folded, eyebrow "Figure 19.20 + 19.21" (rule 14; `config.md`
   allows the fold and it is taken, because the two figures are the same
   three capacitors across the same source and the whole lesson of the
   section is what changes when the connection changes; every number the
   prose cites links to the one figure) · equivalent-capacitance,
   series-capacitance, parallel-capacitance · value adds **variation by
   slider and intuition**: the reader sets the three capacitances and the
   source voltage and watches the total run from less than the smallest to
   the sum of all three, and the panel beside the circuit shows why, the
   equivalent plates driven apart in series and spread wider in parallel.
   Tier: still simulation (rule 24.5), since nothing is animated and no
   depth is wanted · **still**: a charged combination sits at its voltage
   and the figure answers its sliders, so it registers no cycle and gets no
   transport (rule 14) · $\kCone$, $\kCtwo$, $\kCthree$ (0.5 to 10.0 µF,
   defaults 1.000, 5.000, 8.000, the book's own numbers, capacitance),
   $\kV$ (2 to 24 V, default 12.0, voltage), and a choice of connection,
   series or parallel, series the default, because a connection is a state
   and not a quantity (rule 26.1) · "Three capacitors of 1.000, 5.000 and
   8.000 µF in series across 12.0 V hold 9.06 µC each and act as one
   capacitor of 0.755 µF." · none: the circuit on the left and the
   equivalent capacitor on the right is the whole picture · 2D (rule 28.1):
   a circuit diagram is a schematic and has no depth in it. Labels are on,
   six of them at most (three capacitances, and either the three voltages or
   the three charges), and none collides at any slider position because each
   sits beside its own capacitor (rule 26.6). Readout: the equation of the
   connection with the live numbers. Draws capacitance, voltage, charge,
   position (the equivalent separation $\kd$ bracketed in the series panel;
   the equivalent area is untyped and stays in ink).
2. `sim-mixed` · replaces Figure 19.22 (a)(b)(c) · reduce-series-parallel-combinations,
   series-capacitance, parallel-capacitance · value adds **standardisation
   and variation by slider**: the book draws the reduction once for one set
   of capacitances, and here the three panels are redrawn together for
   whatever three the reader sets, so the two steps of the method are seen
   to be the same two steps every time. Tier: still simulation ·
   **still**: the reduction is a way of reading a circuit, not a process in
   time; the three panels stand side by side rather than replacing one
   another, so the reader sees the whole method at once (rule 14) ·
   $\kCone$, $\kCtwo$, $\kCthree$ (0.5 to 10.0 µF, defaults 1.000, 5.000,
   8.000, the numbers of Example 19.10, capacitance) · "With
   $C_1 = 1.000$ µF and $C_2 = 5.000$ µF in series and $C_3 = 8.000$ µF
   across them, the circuit is one capacitor of 8.833 µF." · none: the three
   panels of the reduction are the picture · 2D. Readout: the two steps,
   $\kCS$ from the series pair and $\kCtot = \kCS + \kCthree$, with the live
   numbers. Draws capacitance.

Photographs: the section prints none, so none is kept and none is dropped.

Figures that serve exercises: the book prints three circuits inside the
problems, and `config.md` carries them on the cards rather than as figure
rows. Two are kept, `Figure_20_05_08a` on the first problem and
`Figure_20_05_09a` on the fourth, both of whose problems are keyed;
`Figure_20_05_10a` belongs to an unkeyed problem that is left out, so it is
not copied.

Extra simulations (rule 15), thought through and judged:

- A capacitor bank built out of many identical capacitors, which is the
  second problem and the conceptual question. Left: the problem is unkeyed
  and is left out, the question goes to 19.7 with the energy it turns on,
  and `sim-series-parallel` already shows that the way to a large
  capacitance is parallel and the way to a small one is series.
- A figure that charges the combination up so the reader watches the charge
  arrive. Left: it would be a clock on a figure whose idea has none (rule
  24.9), and 19.7 is where the charging of a capacitor belongs.

## Exercises

- The section's one conceptual question, `fs-id3075419`, asks whether a
  capacitor bank meant to store a large amount of energy should be connected
  in series or in parallel. The energy stored in a capacitor is introduced in
  19.7, so the question is set there with `source_section: "19.6"`, and both
  sections' `exercise_notes` say so (`config.md`, `exploration.md` §
  Exercises). This page therefore carries no conceptual question and no AP
  item, only problems.
- 4 problems keyed and kept: `p1` (fs-id1656785, the circuit of
  `Figure_20_05_08a`, keyed 0.293 µF, Apply, the book's image on the card),
  `p3` (fs-id1290190, what totals a 5.00 µF and an 8.00 µF capacitor can
  make, keyed 3.08 µF in series and 13.0 µF in parallel, Apply), `p4`
  (fs-id2607784, the circuit of `Figure_20_05_09a`, keyed 2.79 µF, Apply,
  the book's image on the card) and `p6` (fs-id2605419, Unreasonable
  Results, keyed −3.00 µF with the book's own reading of why that is
  impossible, Evaluate).
- 2 problems left out, having no answer in the book's key: the capacitor
  bank of 0.750 F built from 1.50 mF capacitors (fs-id2912478) and the
  five-capacitor circuit of `Figure_20_05_10a` (fs-id2970272). Both are
  named in `notes` and in `exercise_notes`, and the image of the second is
  not copied.
- No generated questions: every node of the section has a book exercise that
  tests it.
- Weights: `p1` and `p4` give `reduce-series-parallel-combinations` its full
  value and `series-capacitance` and `parallel-capacitance` 4 each, since the
  work of each is reading the circuit and the two formulas are steps along
  the way; `p3` gives both formulas their full value and
  `equivalent-capacitance` 3; `p6` gives `parallel-capacitance` its full
  value and `series-capacitance` 3, since what makes the result unreasonable
  is that a parallel total can never fall below a part.

## Views

- Formulas: the four equations of the section already in `chapter.json`, the
  two stated and named ones important (`eq-series-capacitance`,
  `eq-parallel-capacitance`) and the two steps of the derivations not.
- Definitions: the sixteen variables of the section. The section defines no
  glossary term.
- Concept map: the four nodes above with their edges into 18.1, 19.2, 19.4
  and 19.5.

## Colour

The page binds capacitance, voltage, charge and position, which is what
`ch19/COLOR.md` allows it. Every capacitance on a label or a readout wears
the capacitance hue, the source voltage and the three voltages of the series
connection the voltage hue, the charge on every plate the charge hue, and the
larger separation of the series equivalent capacitor the position hue. The
plates, the wires and the battery symbol are the frame of the figure and are
drawn in ink, as `COLOR.md` requires, and so is the equivalent plate area,
which is untyped. No categorical colour is used: the three capacitors are
told apart by their labels and their places in the circuit.

## Wanted at chapter level

- variables `C_cap` → 19.6-series
- variables `C_1` → 19.6-series
- variables `C_2` → 19.6-series
- variables `C_3` → 19.6-series
- variables `C_S` → 19.6-series
- variables `V_volt` → 19.6-series
- variables `V_1volt` → 19.6-series
- variables `V_2volt` → 19.6-series
- variables `V_3volt` → 19.6-series
- variables `Q_charge` → 19.6-series
- variables `d` → 19.6-series
- variables `C_p` → 19.6-parallel
- variables `Q_1charge` → 19.6-parallel
- variables `Q_2charge` → 19.6-parallel
- variables `Q_3charge` → 19.6-parallel
- variables `C_tot` → 19.6-mixed
- equations `eq-series-voltages` → 19.6-series
- equations `eq-series-capacitance` → 19.6-series
- equations `eq-parallel-charges` → 19.6-parallel
- equations `eq-parallel-capacitance` → 19.6-parallel
- Nothing else is wanted: no symbol row is added or changed by this page, and
  the section defines no glossary term.
