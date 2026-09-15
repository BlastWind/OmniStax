# Plan: 19.3 Electrical Potential Due to a Point Charge (m42328)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's instruction to finish the book in waves;
the per-section stop of rule 2 and the plan review of rule 5 are replaced by
this file, written before the section was built and left for review after,
as `ch19/config.md` records.

The section that gives the potential a formula. Bringing a test charge in
from a great distance to a distance $\kr$ from a point charge $\kQch$ gives
$\kV = k\kQch/\kr$, with the potential taken as zero at infinity. Set beside
the field of the same charge, $\kEf = k\kQch/\kr^2$, the result says two
things the reader must hold together: the potential falls as one over the
distance where the field falls as one over its square, and the potential is
a scalar that adds as a number where the field is a vector that adds as a
vector. A charged metal sphere makes the result useful, since outside the
sphere the potential is the potential of a point charge at its center, and
the two worked examples read it both ways, from charge to voltage and from
voltage to charge. One diagram (Figure 19.7), one boxed note, two worked
examples, no glossary term, no Check Your Understanding box, two conceptual
questions and twelve problems of which six are keyed, with seven AP items
and one problem brought in from 19.1. One page (rule 11).

## Sub-concepts (page headers)

The module prints no header of its own, so all three are the agent's (rule
3), as `ch19/config.md` records.

1. `point-charge-potential` **The potential of a point charge** (book: the
   opening paragraph on point charges and spherical charge distributions,
   the work needed to bring a test charge in from a large distance, the
   result $\kV = k\kQch/\kr$ and the value of $k$; the boxed Electric
   Potential $V$ of a Point Charge note). $\kV$, $\kQch$, $\kq$, $\kr$,
   $k_\text{coul}$ and `eq-point-charge-potential` anchor here.
2. `scalar-and-vector` **A potential that falls as $1/r$, a field that falls
   as $1/r^2$** (book: the paragraph on the zero of potential at infinity
   and the comparison with the field; the equation $\kEf = \kF/\kq =
   k\kQch/\kr^2$; the paragraph on adding voltages as numbers and fields as
   vectors). $\kEf$, $\kF$ and `eq-point-charge-field` anchor here.
3. `charged-spheres` **Charged spheres, and where the potential is measured
   from** (book: Example 19.6, What Voltage Is Produced by a Small Charge on
   a Metal Sphere?, as `ex-metal-sphere-voltage`; Example 19.7, What Is the
   Excess Charge on a Van de Graaff Generator, as `ex-van-de-graaff-charge`,
   with Figure 19.7 inside it; the closing paragraph on the reference at
   infinity, on ground potential and on the sea-level analogy). $\kPEg$ and
   $\kh$ anchor here.

The book's cross references are plain text: "Electric Charge and Electric
Field" and "Electric Potential Energy: Potential Difference" stay as words,
and the app links the one mention of "Figure 19.7" to the figure on this
page. The two examples carry the publisher's numbers 19.6 and 19.7. Learning
objectives and the section summary come out of the running text into the
tables and views (rule 4); the module defines no glossary term. The boxed
note repeats the equation the narrative has just stated, so it is kept
verbatim as a `div.note` and the equation row is written once, on the
narrative's statement.

Macros: $\kV$ is this chapter's voltage row, $\kQch$, $\kq$, $\kEf$ and
$k_\text{coul}$ Chapter 18's charge, field and constant, $\kr$ Chapter 6's
position, $\kF$ Chapter 4's force, and $\kPEg$, $\kPEtot$ and $\kh$ Chapter
7's energy and position. The page binds energy only on the readout of
`sim-potentials-add`; $\kPEg$ in the closing paragraph is an energy and
takes the hue its row carries.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| potential-of-point-charge | result, eq-point-charge-potential | point-charge-potential | the opening paragraph and its box; Examples 19.6 and 19.7; problems 1, 3, 5, 7, 9, 13 |
| potential-versus-field-of-point-charge | idea, eq-point-charge-field | scalar-and-vector | the comparison of $\kV$ and $\kEf$; CQ 1 |
| superposition-of-potential | result | scalar-and-vector | the paragraph on adding voltages as numbers; CQ 2; AP items 1 to 7 |
| sphere-potential-as-point-charge | idea | charged-spheres | Examples 19.6 and 19.7; Figure 19.7; CQ 1 and 2; problems 1, 3, 9, 13 |
| potential-energy-of-point-charges | skill | scalar-and-vector | the tie between $\kV$ and $\kPEtot$; problem 7; AP items 1 to 7 |

The section leans on `electric-potential`, `potential-difference`,
`zero-of-potential`, `energy-from-potential-difference`,
`energy-conservation-for-charges`, `speed-from-potential-difference` and
`electron-volt` (19.1), `potential-scalar-field-vector` (19.2),
`field-of-point-charge`, `coulomb-constant`, `test-charge`,
`superposition-of-electric-fields`, `excess-charge-on-surface` and
`van-de-graaff-generator` (Chapter 18) and `gravitational-potential-energy`
and `pe-reference-level` (Chapter 7), which the coverage rows mark as used
where the text uses them.

## Figures

id · replaces · concepts · value add · moving or still · sliders and choices · headline · graph · 3D

1. `sim-point-charge-potential` · Sim (the book draws nothing for
   $\kV = k\kQch/\kr$) · potential-of-point-charge,
   potential-versus-field-of-point-charge, sphere-potential-as-point-charge
   · **value add**: variation and intuition; the section states two formulas
   that differ by one power of the distance and asks the reader to hold the
   difference in mind, which is exactly the thing a still page cannot show.
   Here the charge sits at the center of its equipotential circles, each
   labeled with the potential on it, a marker sits at the distance $\kr$,
   and two graphs side by side read the potential and the field at that
   distance: moving the marker out halves the potential and quarters the
   field over the same step, and the circles crowd toward the charge because
   equal steps in potential come at ever smaller steps in distance ·
   **still**: nothing in $\kV = k\kQch/\kr$ has a time in it; the figure
   answers its sliders and takes no transport (rules 14 and 24.9) · the
   magnitude of the charge $\kQch$ (charge, 0.50 to 10.0 nC, default 3.00,
   the static charge of Example 19.6), a choice, not a slider, of its sign
   (positive or negative, negative the default, as Example 19.6 has it; rule
   26.1), and the distance $\kr$ from the charge (position, 1.00 to 20.0 cm,
   default 5.00, the distance of Example 19.6) · "5.00 cm from a −3.00 nC
   charge the potential is −539 V and the field is 1.08 × 10⁴ N/C." · two
   graphs beside each other beneath the scene, which is round: the potential
   against the distance and the field strength against the distance, each
   with its marker pinned at the current $\kr$; the axes are fixed at 1 to
   20 cm across, 0 to 9000 V and 0 to 9 × 10⁵ N/C up, from the slider
   maxima, and never rescale · 2D. Readout: $\kV = k\kQch/\kr$ with the live
   numbers, small line giving $\kEf = k\kQch/\kr^2$ and saying what happens
   to each when the distance doubles. The charge and its label wear the
   charge hue, the equipotential circles and their voltages the voltage hue,
   the radius line and its bracket the position hue, the field arrow at the
   marker the field hue; the sign of the charge is told by its label and by
   which way the field arrow points, never by a second hue. Labels on: the
   charge, five equipotential circles, the marker, the radius and the field
   arrow, eight in all and none on a moving thing. Draws voltage, charge,
   position, electric-field.
2. `sim-potentials-add` · Sim (the book draws nothing for the addition of
   potentials) · superposition-of-potential,
   potential-energy-of-point-charges, potential-versus-field-of-point-charge
   · **value add**: variation and intuition; the paragraph that voltages add
   as numbers and fields add as vectors is the section's hardest sentence
   and the book gives the reader no picture of it. Here two charges sit on a
   line with a movable point above them: the two potentials are written as
   two numbers with a plus sign between them and their sum, while the two
   fields are drawn as two arrows at the point with their resultant, so the
   reader sees the scalar sum fall to zero between an unlike pair at the very
   place where the two arrows are largest and do not cancel · **still**: a
   sum has no clock, and the reader's own dragging of the point is the only
   motion the idea needs (rule 24.9) · the magnitude of the second charge
   $\kQch_2$ (charge, 0.50 to 5.00 µC, default 3.00), a choice, not a
   slider, of its sign (positive or negative, negative the default; rule
   26.1), the separation of the charges (position, 0.40 to 2.00 m, default
   1.20 m, the separation of the first AP item) and the position of the
   point along the line (position, −1.00 to 2.50 m, default 0.60); the first
   charge is held at +2.00 µC, the value the AP items give it · "At the
   marked point the two charges contribute 25.6 kV and −38.4 kV, so the
   potential there is −12.8 kV." · graph below the scene, which is
   horizontal: the potential along the line the point runs on, drawn against
   position with the marker pinned on it, fixed at −1.00 to 2.50 m across
   and −200 to 200 kV up · 2D. Readout: $\kV = k\kQch_1/\kr_1 +
   k\kQch_2/\kr_2$ with the three numbers, small line giving the two field
   arrows and their resultant, which is not the sum of their lengths, and
   the stored energy of the pair, $\kPEtot = k\kQch_1\kQch_2/\kd$, which the
   AP items ask for. The charges and their labels wear the charge hue, the
   potential curve and the three voltages the voltage hue, the three field
   arrows the field hue, the separation bracket and the position axis the
   position hue, and the stored energy on the readout the energy hue. Labels
   on: the two charges, the point, the separation and the three arrows.
   Draws voltage, charge, position, electric-field, energy.
3. `sim-van-de-graaff` · replaces Figure 19.7 (the demonstration Van de
   Graaff generator, its belt and pulleys, its aluminum sphere and the
   voltmeter that reads the potential of the sphere against ground) ·
   sphere-potential-as-point-charge, potential-of-point-charge ·
   **value add**: variation and standardisation; the book's drawing carries
   one sphere at one voltage, and the point of Example 19.7 is that a sphere
   this small holds a startling voltage on a charge of barely a microcoulomb.
   Here the sphere grows and shrinks under the diameter slider while the
   voltmeter is set to the voltage the generator holds, the excess charge is
   computed from $\kQch = \kr\kV/k$ and drawn as that many signs spread over
   the surface, and the field at the surface is read against the
   $3.0 \times 10^{6}$ V/m that dry air will support, so the reader sees why
   a big sphere is what a big voltage needs · **still**: the belt turns in
   the laboratory, but nothing the figure computes changes with time; the
   charge on the sphere and the reading on the voltmeter answer the sliders
   and register no cycle, so the figure takes no transport (rules 14 and
   24.9) · the diameter of the sphere (position, 10.0 to 50.0 cm, default
   25.0, the generator of Example 19.7) and the voltage at its surface
   (voltage, 10 to 300 kV, default 100, the voltage of Example 19.7) · "A
   25.0 cm sphere held at 100 kV carries an excess charge of 1.39 µC." ·
   none; the figure is an apparatus with a meter on it, and its numbers
   belong in the readout · 2D. Readout: $\kQch = \kr\kV/k$ with the live
   numbers, small line giving the field at the surface, $\kEf = \kV/\kr$,
   and saying when it has passed what dry air will support and the sphere
   begins to leak its charge away. The frame of the generator, its belt,
   pulleys, motor and voltmeter are ink, the signs on the sphere wear the
   charge hue, the radius line the position hue, the voltmeter's reading the
   voltage hue and the field arrows at the surface the field hue. Labels on:
   the sphere, the radius, the voltmeter, the belt and the motor. Draws
   voltage, charge, position, electric-field.

Photographs and images:

- The module carries no photograph. Its one image, `Figure_20_03_01a.jpg`,
  is the drawing of the demonstration generator inside Example 19.7, and it
  is kept as the original of `sim-van-de-graaff`, at the width the book
  prints it, 200.
- No image sits inside an exercise of this section.

Extra simulations (rule 15), considered and left:

- The alpha particle of the last problem climbing the potential hill of a
  gold nucleus until its kinetic energy runs out: the flight of a charge up
  a hill of potential is what 19.1's figure already runs, the problem is
  unkeyed and left out, and the nucleus is Chapter 31's subject. Left.
- A sphere whose charge is spread over its surface, cut open to show that
  the potential inside is constant: the interior of a conductor is Chapter
  18's result, not this section's, and the first conceptual question asks
  the reader to say it rather than to watch it. Left.

None built.

### Figure pass, 2026-09-15 (Claude Fable 5.1)

- `sim-potentials-add`: the two component field arrows at P carried no name (rule 26.6); the pointer now names them, P and the two charges through `F.hover`.
- `sim-van-de-graaff`: the sphere stood on two faint rules with a bare belt between them; it now stands on a filled insulating column with the belt running up one side and down the other, arrowed, in ink.
- `sim-point-charge-potential`: looked at in both themes at every extreme; nothing changed.

## Exercises

- No Check Your Understanding boxes; nothing inline.
- 2 conceptual questions, `cq1` and `cq2`, Understand, with AI-written
  suggested approaches, both citing `charged-spheres`.
- 6 problems keyed and kept: `p1` (fs-id1677295, the 0.500 cm plastic
  sphere, number), `p3` (fs-id1516605, the 1.00 C sphere at 5.00 MV, multi),
  `p5` (fs-id963449, the sign and magnitude of a charge at 1.00 mm, number),
  `p7` (fs-id2554432, the fission fragment with 46 protons, multi), `p9`
  (fs-id1320070, the electrostatic paint sprayer, multi) and `p12`
  (eip-200, Unreasonable Results, the electron accelerated through 25.0 MV,
  multi).
- 1 problem brought in from 19.1 with `source_section: "19.1"`: `p13`
  (fs-id2723641, Unreasonable Results, the voltage near a 10.0 cm sphere
  carrying 8.00 C, keyed), which is a $\kV = k\kQch/\kr$ problem and is
  answered by this section; both sections' `exercise_notes` say so.
- 7 AP items brought in from 19.1 with `source_section: "19.1"`: `ap1`
  (fs-id1830876, keyed (b), the internal energy of a 2.0 µC and a −3.0 µC
  charge 1.2 m apart), `ap2` (fs-id1773635, open, the stored energy of three
  charges on a line), `ap3` (fs-id1872138, keyed (b), how the energy changes
  as the third charge is raised or lowered), `ap4` (fs-id1944533, open, the
  three charges trading places), `ap5` (fs-id3081143, keyed (a), the square
  of charges with one sign changed), `ap6` (fs-id2794286, open, the square
  of charges drawn in), and `ap7` (fs-id3350954, keyed (c), the charge
  falling through the midpoint). Every one of them needs the potential of a
  point charge, which 19.3 states and 19.1 does not; both sections'
  `exercise_notes` say so. Keyed choices are graded; open items carry an
  AI-marked approach.
- 6 problems left out, having no answer in the book's key: the potential
  $0.530 \times 10^{-10}$ m from a proton (fs-id1318401), how far from a
  1.00 µC charge the potential is 100 V (fs-id1281542), the sign and
  magnitude of a charge giving $5.00 \times 10^{2}$ V at 15.0 m
  (fs-id1281900), the research Van de Graaff generator with 5.00 mC
  (fs-id890041), the alpha particle and the gold nucleus (fs-id1497489) and
  the potential between two points 10 cm and 20 cm from a 3.0 µC charge
  (fs-id1183848). 19.1's fusion problem, which needs the same result and is
  also unkeyed, is left out of both pages and named in both notes.
- No generated questions: every node has a book exercise or a worked example.
- Weights: `p5` tests `potential-of-point-charge` alone; `p1`, `p3` and `p13`
  give it its full value and `sphere-potential-as-point-charge` weight 4, 3
  and 4; `p7` gives it its full value and `potential-energy-of-point-charges`
  weight 4 and `electron-volt` weight 2; `p9` gives it its full value and
  `sphere-potential-as-point-charge` weight 3 and
  `energy-conservation-for-charges` weight 3; `p12` gives
  `speed-from-potential-difference` its full value and
  `energy-from-potential-difference` weight 3; `ap1` to `ap7` give
  `potential-energy-of-point-charges` its full value, with
  `superposition-of-potential` weight 4 on all seven,
  `potential-of-point-charge` weight 3 on `ap1`, `ap2` and `ap4`, and
  `energy-conservation-for-charges` weight 4 on `ap7`.

## Views

- Formulas: the two equations of the section already in `chapter.json`, one
  of them important.
- Definitions: the nine variables of the section. The module defines no
  glossary term.
- Concept map: the five nodes above with their edges into Chapters 7 and 18
  and into 19.1 and 19.2.

## Colour

The page binds voltage, charge, position, electric-field and energy, as
`ch19/COLOR.md` allows: every figure carries a voltage on a slider or a
meter and writes it in a readout, every figure carries a charge, all three
carry a distance on a slider and bracket it, all three draw the field of the
charge or state it in a readout, and `sim-potentials-add` writes the stored
energy of a pair of charges. The frames of all three figures, the generator's
belt, pulleys and motor and the value of Coulomb's constant are ink, and the
sign of every charge is told by its label and by the direction of its field
arrow, never by a hue.

## Wanted at chapter level

- variables `V_volt` → 19.3-point-charge-potential
- variables `Q_charge` → 19.3-point-charge-potential
- variables `q` → 19.3-point-charge-potential
- variables `r_curv` → 19.3-point-charge-potential
- variables `k_coul` → 19.3-point-charge-potential
- variables `E_field` → 19.3-scalar-and-vector
- variables `F` → 19.3-scalar-and-vector
- variables `PE_g` → 19.3-charged-spheres
- variables `h` → 19.3-charged-spheres
- equations `eq-point-charge-potential` → 19.3-point-charge-potential
- equations `eq-point-charge-field` → 19.3-scalar-and-vector

**Applied by the chapter pass (2026-09-14).** Nine variable rows and two
equation rows carry their anchors. Twenty-one weighted `exercise_concepts`
rows were given `weights_by: "ai"`. The eight items held for this page from
19.1 are here with `source_section: "19.1"` and both sections' notes say so.
