# Plan: 19.7 Energy Stored in Capacitors (m42395)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's instruction to finish the book in waves; the
per-section stop of rule 2, the plan review of rule 5 and the user picks of
rule 15 are replaced by this file, written before the section was built and
left for review after, as Chapters 1 to 18 did it.

The chapter's last section, and the one that says what a capacitor is for. It
takes the charge and the voltage 19.5 and 19.6 have been working with and asks
how much energy the separated charge holds, being careful about the one thing
a reader is likely to get wrong: the voltage rises from zero as the capacitor
charges, so the full charge passes through the average voltage and the energy
is half the product, not the whole of it. The three forms follow from
$Q = CV$, and the section spends the rest of its length on what the energy is
used for, above all the defibrillator. No diagram, two photographs, one worked
example, one boxed note, one glossary term, eight AP items, two conceptual
questions of its own and one held over from 19.6, eight problems of which five
are keyed. One page (rule 11).

## Sub-concepts (page headers)

The module opens on an empty header the converter writes as `## `, which is
dropped, so all three headers are the agent's (rule 3, and the chapter's
`config.md`).

1. `capacitor-uses` **What a capacitor's stored energy is used for** (book:
   the opening paragraph on the defibrillator, the calculator's memory and
   the camera flash; Figure 19.23). The glossary term **defibrillator** is
   defined here.
2. `energy-stored` **The energy stored in a capacitor** (book: the paragraph
   that reasons from the first charge to the last and takes the average; the
   equation $E_\text{cap} = QV/2$ and its parenthesis; the three equivalent
   expressions; the boxed note Energy Stored in Capacitors, kept verbatim as
   a `div.note`, which restates the same equation in the book's words while
   the equation row is written once on the narrative's statement, as the
   chapter's `config.md` asks). The variables $\kEcap$, $\kQch$, $\kV$,
   $\kdV$, $\kCap$, $\kdPE$ and $\kq$ and the equations
   `eq-capacitor-energy-qv` and `eq-capacitor-energy` anchor here.
3. `defibrillator` **The defibrillator** (book: the paragraph on
   fibrillation, the shock and the automated external defibrillator; Figure
   19.24; Example 19.11, Capacitance in a Heart Defibrillator, with its
   strategy, its solution and its discussion). The example is
   `ex-defibrillator`.

The book gives its one example no number in the CNXML; the publisher prints
it as Example 19.11, the chapter's eleventh, and the page follows that, as
the rest of the chapter does. The cross reference to
Nerve Conduction—Electrocardiograms, which the book writes as "Review
[ref:import-auto-id3096543]" and which the converter resolves to the
calculator figure rather than to that section, is written as plain text
naming the section, as every other page of the book writes a cross reference.
Learning objectives, the section summary and the one glossary term come out
of the running text into the tables and the views (rule 4).

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| capacitor-energy-applications | idea | capacitor-uses | the opening paragraph; Figures 19.23 and 19.24; the summary's first bullet |
| average-voltage-while-charging | idea | energy-stored | the first-charge-to-last-charge paragraph; the parenthesis warning that the energy is not $QV$ |
| capacitor-energy | result, eq-capacitor-energy | energy-stored | the three forms and the boxed note; Example 19.11; every problem of the section |

The section leans on `capacitor`, `capacitance`, `parallel-plate-capacitance`,
`dielectric` and `capacitance-with-dielectric` (19.5),
`series-capacitance` and `parallel-capacitance` (19.6),
`potential-difference` and `energy-from-potential-difference` (19.1); the
coverage rows mark each as used where the text uses it.

## Figures

id · replaces or Sim · concepts · what moves or still · sliders · headline ·
graph · 3D

1. `fig-calculator` · Figure 19.23, the calculator's capacitor · photograph,
   **kept**: the text points the reader at it ("See Figure 19.23") and it
   shows the thing the passage is about, a capacitor holding the energy that
   preserves a calculator's memory · width 250, as the CNXML prints it.
2. `sim-capacitor-energy` · Sim (the section prints no diagram, so it
   replaces nothing) · average-voltage-while-charging, capacitor-energy ·
   **still**: the figure is a picture of how much energy a capacitor holds at
   a given charge and voltage, and although charging takes time, what the
   reader is asked to see is the triangle under the line and not how long the
   charging took; the chapter's `config.md` settles the energy triangle as
   still, so the figure answers its sliders and registers no cycle (rule 14) ·
   $\kCap$ (1.00 to 20.0 µF, default 8.00, capacitance) and $\kV$ (0 to
   10.0 kV, default 10.0, voltage); the charge $\kQch$ is a reading and not a
   slider, since $Q = CV$ fixes it once the other two are set, and putting it
   on a slider of its own would let the reader ask for a state the capacitor
   cannot be in · "A capacitor of 8.00 µF charged to 10.0 kV holds 80.0 mC
   and stores 400 J." · **the graph is the scene** (archetype 2): voltage
   against charge, a straight line from the origin whose slope is $1/C$, the
   area under it shaded as the energy, the dashed average voltage $V/2$ drawn
   across it and the rectangle $QV$ outlined so that the reader sees the
   triangle is half of it · 2D. Axis ranges fixed from the slider maxima:
   charge 0 to 200 mC, voltage 0 to 10.0 kV. Readout:
   $\kEcap = \kQch\kV/2 = \kCap\kV^2/2 = \kQch^2/2\kCap$ with the live numbers
   in all three forms; small line on the average voltage being half the final
   voltage and on the energy therefore being half of $QV$. Draws capacitance,
   voltage, charge, energy.
3. `fig-aed` · Figure 19.24, the automated external defibrillator ·
   photograph, **kept**: the passage cites it and it is the device the
   paragraph and Example 19.11 are about · width 250.
4. `sim-defibrillator` · Sim (it replaces no figure of the book) ·
   capacitor-energy, capacitor-energy-applications · **still**: the reader
   chooses an energy setting and a working voltage and reads off what
   capacitor would deliver it, which is a question and not a motion · the
   energy to be delivered $\kEcap$ (40.0 to 400 J, default 400, energy) and
   the voltage the capacitor is charged to $\kV$ (2.00 to 12.0 kV, default
   10.0, voltage) · "Delivering 400 J at 10.0 kV takes a capacitance of
   8.00 µF, charged with 80.0 mC." · **graph below the scene**, since the
   scene is horizontal (the paddles, the capacitor between them and the
   energy setting run across the canvas): the capacitance needed against the
   voltage at the chosen energy, a $1/V^2$ curve with the working point
   marked, which is what shows why a defibrillator charges to thousands of
   volts rather than to hundreds · 2D. Axis ranges fixed: voltage 0 to
   12.0 kV, capacitance 0 to 200 µF, with `pinned()` for a working point
   that leaves the box at the smallest voltages. Readout:
   $\kCap = 2\kEcap/\kV^2$ with the live numbers, which is Example 19.11's
   own working; small line on the charge $\kQch = \kCap\kV$ the capacitor
   must hold and on the much smaller energy that defibrillates a heart in
   open heart surgery, which one of the section's problems asks for. Draws
   energy, voltage, capacitance, charge.

Photographs: two, both kept, as the chapter's `config.md` records. The
section prints no diagram and no unnumbered image, so nothing is dropped.

Figures that serve exercises: none. No exercise of this section refers to an
image, so no exercise card carries a `figure` field.

Extra simulations (rule 15), thought through, judged and decided:

- **The capacitance a given energy demands (`sim-defibrillator`): built.**
  The worked example inverts the section's result, solving for $C$ from the
  energy and the voltage, and that inversion is what the whole application
  turns on: the energy goes as the square of the voltage, so a defibrillator
  charged to 10 kV needs a capacitor a reader can hold, while the same
  energy at 100 V would need one the size of a room. The required figure
  reads the energy off the charge and the voltage and never shows that trade,
  so this adds a view of its own (rule 24.3, variation by slider).
- A capacitor charging through a resistor, with the voltage climbing and the
  energy filling in under it as time passes. Left: the section never mentions
  a resistor or a time constant, and *RC* circuits are Chapter 21's; a figure
  with a clock here would answer a question the reader has not been asked
  (rule 26.5).
- A dielectric slid between the plates with the battery connected and then
  with it disconnected, which is what four of the AP items and both
  conceptual questions turn on. Left: the polarization figure of 19.5 already
  draws the dielectric, and what these items ask is which of $Q$ and $V$ is
  held fixed while the other changes, which the suggested approaches reason
  out in words; a figure that showed the answer would do the items' work for
  them (rule 13).
- Three capacitors that can be wired in series or in parallel, with the
  stored energy read off each way, which is AP item 3 and the conceptual
  question held over from 19.6. Left: 19.6 draws that circuit and puts the
  connection on a choice already, and the energy is one more line on its
  readout rather than a figure of its own; the chapter pass may add the line
  there if it wants it.

## Exercises

- All thirteen items are set at the end: the section prints no Check Your
  Understanding box, so nothing is inline and `text.html` carries no exercise
  host (the chapter's `config.md` records that the chapter has none).
- 3 conceptual questions, none keyed, each an open item with an AI-marked
  suggested approach: `cq1` (fs-id1579143, the isolated capacitor whose
  charge is fixed, Analyze), `cq2` (eip-482, the capacitor left on the
  battery so its voltage is fixed, Analyze), `cq3` (fs-id3075419, series or
  parallel for a bank that must store a large energy, Analyze), which the
  book prints at the end of 19.6 and which is answered by this section's
  $E_\text{cap} = CV^2/2$, so it is set here with `source_section: "19.6"`
  and both sections' `exercise_notes` say so.
- 8 AP items, four keyed as graded choices (`ap1` fs-id1679446 (c), `ap3`
  fs-id1381555 (b), `ap5` fs-id2646945 (a), `ap7` fs-id1368915 (d)) and four
  unkeyed, which are open items with an AI-marked suggested approach (`ap2`
  fs-id1635118, `ap4` fs-id2643905, `ap6` fs-id1222456, `ap8` fs-id3530911).
  None of the four unkeyed items prints options, so none is kept as a choice.
- 5 keyed problems, all at the end: `p1` (eip-838, the 10.0 µF defibrillator
  at 9.00 kV, two parts), `p2` (fs-id2657760, open heart surgery at 40.0 J,
  two parts), `p4` (eip-981, the 2.00 µF and 7.40 µF capacitors in series and
  in parallel, four parts), `p5` (fs-id832930, the nervous physicist's
  bookshelves, three parts) and `p8` (fs-id3088661, Unreasonable Results, the
  truck started from a capacitor at 12.0 V, one keyed number and the book's
  own answers to (b) and (c) in the solution).
- 3 problems left out, none keyed, each named in `notes`: fs-id1998705 (the
  165 µF motor capacitor at 119 V), fs-id3152957 (show that the maximum
  energy is proportional to the volume of dielectric) and fs-id1183288
  (Construct Your Own Problem, on the defibrillator).
- Bloom levels, concept tags and hints are AI-written; answers come from the
  book's key. Numeric answers accept 2% tolerance.

## Types the page binds

`energy`, `capacitance`, `charge` and `voltage`, which is exactly what the
chapter's `COLOR.md` gives 19.7. The two sims draw all four: the shaded
triangle and the energy readings are energy, the line's slope and the
capacitor's label are capacitance, the horizontal axis and the plate charges
are charge, and the vertical axis, the average line and the voltage readings
are voltage. `position` is not bound, since neither figure brackets a plate
separation, and `electric-field` is not bound, since neither draws a field
line. The plates, the paddles, the axes and the rectangle $QV$ are ink.

## Wanted at chapter level

- variables `E_cap` → 19.7-energy-stored
- variables `Q_charge` → 19.7-energy-stored
- variables `V_volt` → 19.7-energy-stored
- variables `ΔV_volt` → 19.7-energy-stored
- variables `C_cap` → 19.7-energy-stored
- variables `ΔPE` → 19.7-energy-stored
- variables `q` → 19.7-energy-stored
- equations `eq-capacitor-energy-qv` → 19.7-energy-stored
- equations `eq-capacitor-energy` → 19.7-energy-stored
- Nothing else is wanted: the page adds and changes no symbol row, and its
  one glossary term, defibrillator, is already in `chapter.json`.
