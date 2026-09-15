# Plan: 19.2 Electric Potential in a Uniform Electric Field (m42326)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's instruction to finish the book in waves;
the per-section stop of rule 2 and the plan review of rule 5 are replaced by
this file, written before the section was built and left for review after,
as `ch19/config.md` records.

The section that ties the voltage of 19.1 to the electric field of Chapter
18. Two parallel plates held at a potential difference make a uniform field;
following a charge from one plate to the other and writing the work in two
ways gives $\kVAB = \kEf\kd$, which says that the units of a field are volts
per meter as well as newtons per coulomb, and which limits the voltage a gap
of air can hold. The last paragraphs generalize the result: wherever the
potential changes, the field is its gradient, $\kEf = -\kdV/\kds$. One
diagram (Figure 19.5), one photograph (Figure 19.6), two boxed notes, two
worked examples, two glossary terms, eight AP items, three conceptual
questions and eleven problems of which five are keyed. One page (rule 11).

## Sub-concepts (page headers)

The module prints no header of its own, so all three are the agent's (rule
3), as `ch19/config.md` records.

1. `potential-and-field` **Two ways to describe the same charge
   distribution** (book: the opening paragraph on the uniform field between
   two plates, the potential difference tied to energy and the field tied to
   force, the scalar and the vector; Figure 19.5). $\kEf$ and $\kdV$ anchor
   here, and the glossary terms scalar and vector are defined here.
2. `voltage-between-plates` **The voltage between two parallel plates**
   (book: the work done by the field from A to B; the four equations that
   cancel the charge; the result $\kVAB = \kEf\kd$; the paragraph on the
   units of the field and the relation $1\ \text{N/C} = 1\ \text{V/m}$; the
   boxed Voltage between Points A and B note; Example 19.4, What Is the
   Highest Voltage Possible between Two Plates?, as `ex-highest-voltage`;
   Figure 19.6, the spark chamber; Example 19.5, Field and Force inside an
   Electron Gun, as `ex-electron-gun-field`). $\kVAB$, $\kVA$, $\kVB$, $\kW$,
   $\kq$, $\kd$ and the equations `eq-work-in-uniform-field`,
   `eq-uniform-field-voltage` and `eq-field-units` anchor here; $\kF$ anchors
   at `ex-electron-gun-field`.
3. `field-as-gradient` **The field is the gradient of the potential** (book:
   the paragraph on the field pointing in the direction of decreasing
   potential and equalling the rate of decrease of the potential with
   distance; the general relationship; the boxed Relationship between Voltage
   and Electric Field note; the closing sentence on infinitesimals).
   $\kds$ and `eq-field-gradient` anchor here.

The book's cross references are plain text: "Electric Potential Energy:
Potential Difference" and "Nerve Conduction—Electrocardiograms" stay as
words, and the app links the three mentions of "Figure 19.5" to the figure on
this page. The two examples carry the publisher's numbers 19.4 and 19.5. The
book's own slips are kept verbatim and named in `notes`: the narrative writes
the opposite of the potential difference as $V_{\text{AB}'}$ with a stray
prime, and the section summary closes its second bullet with an unmatched
parenthesis. Learning objectives, the section summary and the two glossary
terms come out of the running text into the tables and views (rule 4). The
two boxed notes are kept verbatim as `div.note`; the equation rows are
written once, on the narrative's statement, not on a box's repeat.

Macros: $\kVAB$, $\kVA$, $\kVB$, $\kV$ and $\kdV$ are the voltage rows this
chapter staged, $\kEf$ and $\kq$ Chapter 18's, $\kd$ and $\kds$ Chapter 3's
and Chapter 19's positions, $\kF$ Chapter 4's force and $\kW$ and $\kdPE$
Chapter 7's energies. The page does not bind energy, so $\kW$ and $\kdPE$
print in ink; $\theta$ is plain LaTeX in ink.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| potential-scalar-field-vector | idea | potential-and-field | the opening paragraph; the glossary terms scalar and vector; CQ 1 |
| voltage-across-uniform-field | result, eq-uniform-field-voltage | voltage-between-plates | Figure 19.5; Examples 19.4 and 19.5; problems 3, 5, 7, 9, 11 |
| volts-per-meter | result, eq-field-units | voltage-between-plates | the units relation; the discussion of Example 19.5; problem 1 |
| dielectric-breakdown-of-air | idea | ex-highest-voltage | Example 19.4; Figure 19.6; problems 5 and 9 |
| field-is-potential-gradient | result, eq-field-gradient | field-as-gradient | the general relationship and its box; CQ 1, 2 and 3 |

The section leans on `electric-potential-energy`, `potential-difference`,
`energy-from-potential-difference` and `charge-sign-and-potential` (19.1),
`force-from-electric-field`, `electric-field-direction`,
`electric-field-lines` and `uniform-field-between-plates` (Chapter 18),
`work` and `calculate-work` (Chapter 7) and `vector-in-two-dimensions`
(Chapter 3), which the coverage rows mark as used where the text uses them.

## Figures

id · replaces · concepts · value add · moving or still · sliders and choices · headline · graph · 3D

1. `sim-plates-voltage-field` · replaces Figure 19.5 (two plates A and B
   with field lines between them and a charge carried across) ·
   voltage-across-uniform-field, volts-per-meter,
   dielectric-breakdown-of-air, potential-scalar-field-vector · **value
   add**: variation and standardisation; the book's drawing carries no
   numbers, and the whole lesson of the section is that the same voltage
   across a smaller gap is a stronger field, which the reader must otherwise
   imagine; here the plates move apart and together under the separation
   slider while the voltage is held, the field lines crowd or thin as the
   field strength changes, and the graph beneath reads the potential falling
   across the gap with the field as its slope, so $\kVAB = \kEf\kd$ and
   $\kEf = -\kdV/\kds$ are one picture · **still**: the relation has no time
   in it; nothing crosses the gap and no quantity changes of itself, so the
   figure answers its sliders and takes no transport (rules 14 and 24.9). The
   charge that carries the book's $\kF = \kq\kEf$ sits still between the
   plates with its force arrow, because the work that the derivation
   computes is the same over any path · the voltage between the plates
   $\kVAB$ (voltage, 5 to 100 kV, default 25.0, the voltage of Example 19.5,
   with detents at 25.0 and 75.0 for the two examples), the plate separation
   $\kd$ (position, 1.0 to 10.0 cm, default 4.00, Example 19.5's gap, with a
   detent at 2.5 for Example 19.4) and the charge between the plates $\kq$
   (charge, 0.10 to 2.00 µC, default 0.500, the plastic of Example 19.5) ·
   "Across 4.00 cm, 25.0 kV makes a field of 6.25 × 10⁵ V/m, and the field
   pushes the 0.500 µC charge toward plate B with 0.313 N." · graph below the
   scene, which is horizontal: the potential against the distance from plate
   A, a straight line from $\kVAB$ at A down to zero at B, its slope written
   as the field; the axes are fixed at 0 to 10 cm and 0 to 100 kV from the
   slider maxima and never rescale · 2D. Readout: $\kEf = \kVAB/\kd$ with the
   live numbers, small line on $\kF = \kq\kEf$ in newtons and the identity
   $1\ \text{N/C} = 1\ \text{V/m}$ that makes those newtons come out right.
   Above $3.0 \times 10^{6}$ V/m the air breaks down: a jagged spark is drawn
   between the plates in ink, with the sentence Example 19.4 gives, and the
   readout says so. Plates, wires and frame are ink, the plate signs wear the
   charge hue, the field lines the field hue, the separation bracket the
   position hue, the charge and its label the charge hue and the force arrow
   the force hue. Labels on: A, B, $\kVA$, $\kVB$, $\kd$, $\kEf$, $\kq$ and
   $\kF$, none of them on a moving thing. Draws voltage, electric-field,
   position, charge, force.
2. `sim-potential-gradient` · Sim (the book draws nothing for the general
   relationship) · field-is-potential-gradient, volts-per-meter ·
   **value add**: variation and intuition; the text says only that the faster
   the potential falls over distance the greater the field, and the reader
   has no picture of it at all. Here the reader drags a window of width
   $\kds$ along a potential that falls evenly in one arrangement and
   unevenly in the other, and reads the field off the steepness of the chord:
   the same window gives a small field where the curve is shallow and a large
   one where it is steep, and over the uniform field it gives the same answer
   everywhere, which is the parallel plate result again · **still**: a
   gradient has no clock, and the reader's own dragging is the only motion
   the idea needs (rule 24.9) · the middle of the window $s$ (position, 0.5
   to 9.5 cm, default 5.0), its width $\kds$ (position, 0.5 to 4.0 cm,
   default 2.0) and a choice, not a slider, of the potential: Falls evenly
   (two parallel plates) or Falls unevenly (rule 26.1) · "Over the 2.00 cm
   window centered 5.00 cm along, the potential falls 20.0 V, so the average
   field there is 1.00 × 10³ V/m." · the graph is the figure: the potential
   against distance in the voltage hue with the chord across the window in
   the field hue, the window bracketed in the position hue below and the drop
   in the voltage hue at its side, and a row of field arrows beneath the
   graph whose lengths are the local field; axes fixed at 0 to 10 cm and 0 to
   100 V · 2D. Readout: $\kEf = -\kdV/\kds$ with the live numbers, small line
   saying which way the field points and that the field is the same
   everywhere only when the potential falls evenly. Draws voltage,
   electric-field, position.

Photographs and images:

- Figure 19.6, the spark chamber, is **kept**. It follows Example 19.4, and
  the passage is about exactly what it shows: sparks that jump when the gas
  between charged plates is ionized, perpendicular to the plates and along
  the field lines between them. It is not a splash image; the section opens
  on the plates of Figure 19.5, not on it. Its caption and its credit clause
  are the book's.
- No image sits inside an exercise of this section.

Extra simulations (rule 15), considered and left:

- The negatively charged particle dropped between the plates of the first AP
  item, curving toward the positive plate as a projectile curves toward the
  ground: the parabola is projectile motion from Chapter 3 with a constant
  $\kF = \kq\kEf$ in place of the weight, and the flight of a charge across
  a gap is already run in 19.1's Figure 19.2. Left.
- Three plates in a row at $+45$ V, ground and $-75$ V, the fifth AP item's
  arrangement, with the average field between them: one number the reader
  can get from `sim-plates-voltage-field` twice over. Left.

None built.

## Exercises

- No Check Your Understanding boxes; nothing inline.
- 3 conceptual questions, `cq1` to `cq3`, Understand, with AI-written
  suggested approaches, citing `field-as-gradient` twice and
  `voltage-between-plates` once.
- 5 AP items kept here: `ap1` (fs-id1418320, keyed (b), the negative
  particle dropped between the plates), `ap2` (fs-id1392626, open, two
  charged particles launched into the field), `ap3` (fs-id1837856, keyed
  (a), the two horizontal plates at $+100$ V and $\pm 50$ V), `ap4`
  (fs-id1764873, keyed (d), three plates and the average field) and `ap5`
  (fs-id1893948, open, the new electron gun). Keyed choices are graded; open
  items carry their options where the book prints them and an AI-marked
  approach.
- 3 AP items held for other sections with `source_section: "19.2"`:
  fs-id1426361 and fs-id2573348, which read equipotential isolines, go to
  19.4, and fs-id2337566, the plates carrying $\pm 0.225$ C over
  $0.75\ \text{m}^2$, which needs $\varepsilon_0$ and $\kCap = \kQch/\kV$,
  goes to 19.5; named in `exercise_notes`.
- 5 problems keyed and kept: `p3` (fs-id2635926, the plates 4.00 cm apart,
  multi), `p5` (fs-id2956436, whether 2.00 mm of air breaks down, multi),
  `p7` (fs-id2573954, the voltage across an 8.00 nm membrane, number), `p9`
  (fs-id2705714, the maximum potential difference across 0.500 cm of air,
  number) and `p11` (fs-id1948894, the electron accelerated through
  $2.00 \times 10^{6}$ V/m, multi).
- 6 problems left out, having no answer in the book's key: showing that V/m
  and N/C are equivalent (eip-id1688468), the field between plates 1.00 cm
  apart (eip-id1688476), how far apart the plates are at
  $4.50 \times 10^{3}$ V/m (fs-id2749816), the field across a 9.00 nm cell
  wall (fs-id1956925), the plates 10.0 cm apart with 450 V at 8.00 cm
  (fs-id1636534) and the doubly charged ion accelerated to 32.0 keV
  (fs-id1563009).
- No generated questions: every node has a book exercise or a worked example.
- Weights: `p3` and `p9` test `voltage-across-uniform-field` alone; `p5`
  gives `dielectric-breakdown-of-air` its full value and
  `voltage-across-uniform-field` weight 4; `p7` gives
  `voltage-across-uniform-field` its full value and `volts-per-meter` weight
  2; `p11` gives `voltage-across-uniform-field` its full value and
  `energy-from-potential-difference` weight 3 and `electron-volt` weight 2;
  `ap1` gives `force-from-electric-field` its full value and
  `projectile-motion` weight 2; `ap4` gives `voltage-across-uniform-field`
  its full value and `field-is-potential-gradient` weight 3.

## Views

- Formulas: the four equations of the section already in `chapter.json`,
  three of them important.
- Definitions: the ten variables of the section; the two glossary terms,
  scalar and vector.
- Concept map: the five nodes above with their edges into Chapters 3, 7 and
  18 and into 19.1.

## Colour

The page binds voltage, electric-field, position, charge and force: both
sims carry a voltage on a slider and write it in a readout, both draw field
lines or field arrows and state the field in a readout, both carry a distance
on a slider and bracket it, `sim-plates-voltage-field` carries the charge
between the plates on a slider and draws the force on it. The page does not
bind energy, so $\kW$ and $\kdPE$ print in ink, as the chapter's `COLOR.md`
asks; the angle $\theta$ and the frame of both figures are ink, and the spark
of a broken-down gap is drawn in ink so that no hue is invented for it.

## Wanted at chapter level

- variables `E_field` → 19.2-potential-and-field
- variables `ΔV_volt` → 19.2-potential-and-field
- variables `V_AB` → 19.2-voltage-between-plates
- variables `V_A` → 19.2-voltage-between-plates
- variables `V_B` → 19.2-voltage-between-plates
- variables `W` → 19.2-voltage-between-plates
- variables `q` → 19.2-voltage-between-plates
- variables `d` → 19.2-voltage-between-plates
- variables `F` → 19.2-ex-electron-gun-field
- variables `Δs` → 19.2-field-as-gradient
- equations `eq-work-in-uniform-field` → 19.2-voltage-between-plates
- equations `eq-uniform-field-voltage` → 19.2-voltage-between-plates
- equations `eq-field-units` → 19.2-voltage-between-plates
- equations `eq-field-gradient` → 19.2-field-as-gradient

**Applied by the chapter pass (2026-09-14).** Ten variable rows and four
equation rows carry their anchors in `chapter.json`. Thirteen weighted
`exercise_concepts` rows were given `weights_by: "ai"`. The two isoline AP
items are on 19.4's page and the item on two plates carrying ±0.225 C is on
19.5's, each with `source_section: "19.2"`, and every one of the three
sections names the move in its `exercise_notes`. The section's `notes` wrote
the book's stray prime as math, which the app does not sweep in a note, so
the sentence now names the symbol in words instead; the erratum itself is
unchanged and is recorded in `exploration.md`.
