# Plan: 20.2 Ohm's Law: Resistance and Simple Circuits (m42344)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's standing instruction to finish the book in
waves; `ch20/config.md` records that the stop of rule 2 and the review of
rule 5 are replaced by this file.

The section that states Ohm's law and defines resistance. Two sketch
figures, no photograph, two boxed notes (one of them the dropped PhET
link), one worked example, three AP items, two conceptual questions and
six problems, three of them keyed. One page (rule 11).

## Sub-concepts (page headers)

The book prints two headers of its own and opens with an untitled
paragraph, so the page is three blocks (`config.md`: the book's headers are
kept as the book writes them).

1. `voltage-sources` **Voltage sources and the current they drive** (book:
   the opening paragraph on batteries, generators and wall outlets, the
   potential difference they apply and the field that exerts force on
   charges).
2. `ohms-law` **Ohm's Law** (book: the proportionality $I \propto V$, Ohm's
   experiment, cause and effect, and the warning that a linear relationship
   does not always occur).
3. `resistance-circuits` **Resistance and Simple Circuits** (book:
   resistance and $I \propto 1/R$, Ohm's law as $I = V/R$, ohmic materials,
   the resistor, the ohm, Figure 20.8 and the simple circuit, Example 20.4,
   the range of resistances, the $IR$ drop and Figure 20.9, the fluid
   analogy and the Making Connections box on conservation of energy).

Cross references to other sections are plain text, as the rest of the book
writes them: "Resistance and Resistivity", twice. The PhET note is dropped
and named in `notes`; the Making Connections box is kept verbatim as a
`div.note`. Learning objectives, the section summary and the glossary come
out of the running text into the tables.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| ohms-law | result, eq-ohms-law | ohms-law | $I \propto V$ and $I = V/R$; Example 20.4; ap1, ap3, p1, p3 |
| resistance | idea, eq-current-inverse-resistance | resistance-circuits | $I \propto 1/R$; the glossary; the range from copper to a ceramic insulator |
| ohm | result, eq-ohm-unit | resistance-circuits | $1\;\Omega = 1$ V/A; the glossary; the summary |
| ohmic-material | idea | resistance-circuits | the warning that Ohm's law is not universally valid; objective 3; ap2 |
| simple-circuit | idea | resistance-circuits | the glossary; Figure 20.8; objective 4 |
| ir-drop | result, eq-ir-drop | resistance-circuits | $V = IR$; Figure 20.9; cq1, cq2, p5 |

The page leans on `electric-current` and `conventional-current` (20.1),
`potential-difference` and `electric-potential-energy` (19.1),
`electric-field` (18.4) and `flow-rate` and `viscous-pressure-drop` (12.1
and 12.4) where the book draws the fluid analogy; the coverage rows mark
each as used where the text uses it.

## Types the page binds

`current`, `resistance` and `voltage`, the three the chapter's COLOR.md
gives 20.2 and no others. The battery, the wires, the resistor's zigzag,
the voltmeter and the whole of the fluid analogy are the frame of a
diagram and are drawn in ink; the free electrons that carry the current are
`F.el('e-')` (rule 7, the element palette), and their sign is told by their
label and never by a hue.

## Figures

id · replaces · concepts · value add · motion · sliders and choices ·
headline · graph · depth

1. `sim-simple-circuit` · replaces Figure 20.8 + 20.9, folded (the simple
   circuit, and the same circuit with a voltmeter across the resistor;
   `config.md` folds them with the meter as a state) · simple-circuit,
   ohms-law, resistance, ir-drop · value add: **variation by slider** (the
   two knobs that exist in the world, the battery's voltage and the
   resistor's resistance, and the current answers) and **flow by
   animation** (the current is visible as something other than a number) ·
   **moving**: free electrons run round the loop against the conventional
   current, and they run faster when the current is larger; the idea has a
   time in it, since a current is a rate, so the figure registers an
   endless cycle and takes the app's transport · sliders $\kV$ (2 to 24 V,
   default 12.0, voltage) and $\kRes$ (0.5 to 20 Ω, default 4.80,
   resistance); a choice of three states, the circuit alone, the circuit
   with a voltmeter reading the $IR$ drop, and the pump and the narrow pipe
   the book draws in words · headline: "12.0 V across 4.80 Ω drives 2.50 A
   round the loop, and the whole 12.0 V is dropped across the resistor." ·
   graph: none, the circuit is the picture · 2D, tier: moving simulation
   (a still drawing cannot show that the current is a flow, which is the
   one thing a reader new to circuits must imagine). Readout: $\kIcur =
   \kV/\kRes$ with the live numbers, and a small line on the $IR$ drop.
   Draws current, resistance, voltage.
2. `sim-ohmic` · Sim (the section introduces ohmic materials and the book
   draws nothing for them; `config.md` asks for a sim per idea or result
   the section introduces) · ohmic-material, ohms-law, resistance, ohm ·
   value add: **variation by slider** and **intuition** (what "ohmic"
   means is the shape of the graph of current against voltage, a straight
   line through the origin whose slope is $1/R$, and the reader sees the
   line tilt as the resistance changes and bend when the material is not
   ohmic) · **still**: a current-voltage characteristic is a set of
   measurements and has no clock in it, so no cycle and no transport ·
   slider $\kRes$ (2 to 12 Ω, default 4.80, resistance) and $\kV$ (0.5 to 16
   V, default 12.0, voltage, which walks the operating point along the
   line); a choice of the material, an ohmic resistor or the filament of
   an incandescent bulb, whose resistance rises as the current heats it,
   the case the book's own Discussion names · headline: "At 12.0 V the
   ohmic resistor carries 2.50 A, and every other voltage lands on the
   same straight line." · graph alone: current against voltage, the axes
   fixed at 0 to 16 V and 0 to 8 A, the operating point pinned · 2D,
   tier: still simulation. Readout: $\kRes = \kV/\kIcur$ with the live
   numbers. Draws current, voltage, resistance.

Figure pass of 2026-09-15 (Claude Fable 5.1), what is built now. `sim-simple-circuit`: the conventional-current arrowheads sit just outside the loop so they never land on the electrons riding the wire; in the pump-and-pipe state the pipe really narrows through two tapers at the right side, the water dots shrink through it, and the pump is a casing with a turning impeller. `sim-ohmic`: the drop lines are legible ink, and the resistance read at the point steps above the point when the point sits near the axis.

Both figures are legible with colour off: the current is told by the
arrowheads round the loop and the moving carriers, the resistance by the
zigzag it labels, and the two characteristics by a solid and a dashed
stroke as well as by their hues. Labels are on by default in both: four
entities in the circuit and two curves in the graph, none of them
colliding at any slider position (rule 26.7).

No extra simulation survived the test of rule 15. A third figure for the
range of resistances, from a copper wire to a ceramic insulator, would be
a labelled logarithmic axis and no more, and 20.3 draws the same numbers
where the material and the shape are the subject.

## Exercises

Two conceptual questions (cq1, cq2), three AP items (ap1, ap2, ap3) and
six problems, of which the book keys three (p1, p3, p5). All go to the
Exercises document: the chapter prints no Check Your Understanding box, so
nothing is inline and `text.html` carries no exercise host.

The three unkeyed problems are left out and named in `notes`: the pocket
calculator, the DVD player's indicator light and the glass insulator on a
transmission tower. ap2, which the book leaves unkeyed, is kept as an open
item with the book's own table of voltages and currents in its prompt and
an AI-marked suggested approach, never as a graded answer. cq1 and cq2 are
open items with AI-marked suggested approaches.

## Tables

One unnumbered table, the five voltages and the five currents inside ap2,
which travels in that item's prompt as a small table (`config.md`). The
section has no numbered table.

## Wanted at chapter level

Anchors, `<row id> → <anchor>`:

- eq-current-proportional-voltage → 20.2-ohms-law
- eq-current-inverse-resistance → 20.2-resistance-circuits
- eq-ohms-law → 20.2-resistance-circuits
- eq-ohm-unit → 20.2-resistance-circuits
- eq-ir-drop → 20.2-resistance-circuits
- V_volt (variable row, section 20.2) → 20.2-voltage-sources
- R_res (variable row, section 20.2) → 20.2-resistance-circuits

No concept or symbol fix is wanted: the six concept rows and the two
variable rows read correctly as the prep pass wrote them, and the symbols
`I_curr`, `R_res` and `V_volt` are used as `ch20/config.md` stages them.

Applied in the chapter pass of 2026-09-15. The five equation anchors and the
two variable anchors above were written to `ch20/chapter.json`, and both of
the section's variable rows now carry one. Nothing else of this section was
changed at chapter level.
