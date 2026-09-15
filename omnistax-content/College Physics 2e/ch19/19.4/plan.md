# Plan: 19.4 Equipotential Lines (m42331)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's instruction to finish the book in waves;
the per-section stop of rule 2 and the plan review of rule 5 are replaced by
this file, written before the section was built and left for review after,
as `ch19/config.md` records.

The section that draws the potential. A line along which the potential is
constant is an equipotential line, a sphere of them surrounds a point
charge, and the rule that governs every picture of them is that they are
perpendicular to the electric field lines, since no work is done moving a
charge along one. From that rule the reader can draw either set of lines
from the other, and the section walks the four cases the book prints: the
isolated point charge, an equal and opposite pair, two equal negative
charges measured in a laboratory, and the evenly spaced equipotentials
between two parallel plates. A conductor is an equipotential surface, which
is what makes grounding possible and what lets a charged sphere replace a
point charge. Four diagrams, one boxed note, two glossary terms, no worked
example, no Check Your Understanding box, three conceptual questions, six AP
items and ten problems, every one of the ten an unkeyed sketch. One page
(rule 11).

## Sub-concepts (page headers)

The module prints no header of its own, so all five are the agent's (rule
3), as `ch19/config.md` records.

1. `equipotential-map` **Lines along which the potential is constant**
   (book: the opening paragraph on the isolated point charge, its field
   lines and its equipotential circles, the definition of the term and of an
   equipotential surface, and the sentence that the potential is the same
   anywhere on a sphere of radius $\kr$). $\kV$, $\kQch$ and $\kr$ anchor
   here.
2. `perpendicular-to-field` **Why the two sets of lines cross at right
   angles** (book: the paragraph that no work is required to move a charge
   along an equipotential, the two equations for that work, and the
   conclusion that the angle must be 90°). $\kW$, $\kdV$, $\kq$, $\kF$,
   $\kEf$, $\kd$, $\theta$, `eq-work-along-equipotential` and
   `eq-work-perpendicular-to-field` anchor here.
3. `conductors-and-grounding` **A conductor is an equipotential surface**
   (book: the paragraph on the field at the surface of a conductor, on the
   impossibility of a voltage difference across it and on grounding; the
   boxed Grounding note; the paragraph in which a charged spherical
   conductor replaces the point charge).
4. `drawing-the-lines` **Drawing one set of lines from the other** (book:
   the paragraph on the equal and opposite pair and on the equipotentials
   measured in the laboratory, with Figures 19.9 and 19.10).
5. `plates-and-the-heart` **Parallel plates, and the equipotentials of the
   heart** (book: the paragraph on the familiar parallel conducting plates
   and their evenly spaced equipotentials, with Figure 19.11, and the
   closing paragraph on the heart, the pacemaker, the defibrillator and the
   electrocardiogram).

The book's cross references are plain text: "Energy Stored in Capacitors"
stays as words, and the app links the mentions of Figure 19.8, Figure 19.9,
Figure 19.10 and Figure 19.11 to the two figures on this page, the first
three of them to the folded map. Learning objectives and the section summary
come out of the running text into the tables and views (rule 4); the two
glossary terms, equipotential line and grounding, are already in
`chapter.json`. The boxed Grounding note repeats the sentence the narrative
has just written, so it is kept verbatim as a `div.note`. The PhET link to
Charges and Fields is dropped and named in `notes`.

Macros: $\kV$ and $\kdV$ are this chapter's voltage rows, $\kQch$, $\kq$ and
$\kEf$ Chapter 18's charge and field, $\kW$ Chapter 7's energy, $\kF$
Chapter 4's force and $\kd$ Chapter 3's position. The book writes the field
as $\text{E}$ in three places in this module, upright and inside `\text{}`;
the page writes it through the field's own row, which is what the symbol
means in every one of them.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| equipotential-lines | idea | equipotential-map | the opening paragraph and the glossary; Figure 19.8; CQ 1 and CQ 3 |
| equipotentials-perpendicular-to-field | result, eq-work-along-equipotential | perpendicular-to-field | the two work equations; the caption of Figure 19.8; CQ 2; AP 5 |
| conductor-is-equipotential | idea | conductors-and-grounding | the conductor paragraph, the Grounding box and the sphere that replaces the point charge; AP 2 and AP 6 |
| sketch-equipotentials | skill | drawing-the-lines | Figures 19.9 and 19.10; AP 1 and AP 4; all ten problems |
| equipotential-spacing-and-field | idea | plates-and-the-heart | Figure 19.11; AP 3; the two isoline items held from 19.2 |

The section leans on `electric-potential`, `potential-difference`,
`zero-of-potential` and `energy-from-potential-difference` (19.1),
`voltage-across-uniform-field` and `field-is-potential-gradient` (19.2),
`potential-of-point-charge` and `sphere-potential-as-point-charge` (19.3),
and `electric-field-lines`, `field-line-properties`, `grounding`,
`field-perpendicular-to-conductor`, `excess-charge-on-surface` and
`uniform-field-between-plates` (Chapter 18), which the coverage rows mark as
used where the text uses them. Work and the conditions under which a force
does none are Chapter 7's, and `work` is marked used on the span that
derives the right angle.

## Figures

id · replaces · concepts · value add · moving or still · sliders and choices · headline · graph · 3D

1. `sim-equipotential-map` · replaces Figure 19.8 + Figure 19.9 + Figure
   19.10, the book's three maps of charges (the isolated point charge with
   its circles, the equal and opposite pair, and the two equal negative
   charges whose equipotentials are measured and whose field lines are then
   drawn from them), folded into one engine because the book draws one
   scene three times over and one live map is plainly better (rule 14) ·
   equipotential-lines, equipotentials-perpendicular-to-field,
   sketch-equipotentials, conductor-is-equipotential · **value add**:
   variation and intuition; the three figures differ only in the
   arrangement of the charges, and the lesson the reader must take from all
   three at once is that either set of lines fixes the other. Here the
   arrangement is a choice, the equipotentials are contoured from the
   potential itself rather than sketched, and a second choice draws the
   equipotentials alone, the field lines alone or both, which is exactly
   panels (a) and (b) of Figure 19.10: the reader hides the field lines,
   reads the map, and brings them back to check the right angles ·
   **still**: a map of a fixed arrangement of charges has no time in it;
   the figure answers its choices and its sliders, registers no cycle and
   takes no transport (rules 14 and 24.9) · a choice, not a slider, of the
   arrangement (one positive charge, an equal and opposite pair, two equal
   negative charges; the single charge the default, which is Figure 19.8;
   rule 26.1), a choice of what is drawn (both sets of lines, the
   equipotentials alone, the field lines alone; both the default; rule
   26.1), the magnitude of the charges $\kQch$ (charge, 1.00 to 8.00 nC,
   default 4.00) and the number of equipotential lines drawn per charge
   (untyped count, 2 to 6, default 4, the four circles Figure 19.8 prints)
   · "An isolated +4.00 nC charge, with four equipotential circles at 120 V,
   240 V, 360 V and 719 V." · none; the map is the idea and a graph beside
   it would say nothing the crowding of the lines does not · 2D, as
   `ch19/config.md` settles for the whole chapter: the equipotential
   spheres are drawn as the book draws them, as circles in the plane.
   Readout: $\kW = -\kq\kdV = 0$ along a line with the live voltage of the
   line the marker sits on, small line saying what the spacing of the lines
   says about the strength of the field there. The equipotential lines and
   their voltage labels wear the voltage hue, the field lines and their
   arrowheads the field hue, the charges and their labels the charge hue,
   the zero work on the readout the energy hue; the frame and the scale are
   ink and the sign of a charge is told by its label, never by a hue.
   Labels on: the charges, one voltage on each equipotential line and the
   legend, which is at most eight and none of them on a moving thing (rule
   26.6). Draws voltage, electric-field, charge, energy.
2. `sim-plate-equipotentials` · replaces Figure 19.11 (the field and
   equipotential lines between two metal plates, with 100 V on plate A and
   0 V on plate B) · equipotential-spacing-and-field,
   equipotentials-perpendicular-to-field, conductor-is-equipotential ·
   **value add**: variation; the book's drawing carries one voltage across
   one gap, and the sentence it illustrates is that the equipotentials
   between plates come out evenly spaced and parallel because the field
   between them is uniform. Here the voltage and the separation both move,
   the isolines are redrawn at whatever step the reader picks, and the
   spacing of the isolines is read off the map and set against $\kEf =
   \kVAB/\kd$, so the AP item that counts six 5.0 V isolines across a 40 cm
   path is answered by counting them · **still**: a fixed voltage across a
   fixed gap has no clock, and the field between the plates does not change
   with time; the figure answers its sliders and takes no transport (rules
   14 and 24.9) · the voltage across the plates $\kVAB$ (voltage, 20 to
   200 V, default 100, the voltage Figure 19.11 prints), the separation of
   the plates $\kd$ (position, 5.0 to 25.0 cm, default 10.0) and a choice,
   not a slider, of the step between isolines (5 V, 10 V, 20 V or 25 V;
   20 V the default, which draws the book's four lines between 100 V and
   0 V; rule 26.1) · "Across a 10.0 cm gap held at 100 V the field is
   1.00 × 10³ V/m, and equipotentials drawn every 20 V stand 2.00 cm
   apart." · none; the scene is the map and its numbers belong in the
   readout · 2D. Readout: $\kEf = \kVAB/\kd$ with the live numbers, small
   line giving the spacing of the isolines as $\Delta\kVolt/\kEf$ and saying
   that the plates themselves are conductors and so are the two outermost
   equipotentials. The plates, their leads and the scale are ink, the
   isolines and their voltage labels wear the voltage hue, the field lines
   and the field arrow the field hue, the charges on the plates the charge
   hue, and the separation bracket the position hue. Labels on: the two
   plates, every isoline's voltage, the separation and the field arrow.
   Draws voltage, electric-field, position, charge.

Photographs and images:

- The module carries no photograph of its own. Its four numbered images,
  `Figure_20_04_01a.jpg` (200), `Figure_20_04_02a.jpg` (250),
  `Figure_20_04_03a.jpg` (400) and `Figure_20_04_04a.jpg` (150), are kept as
  the originals of the two figures, the first three on the folded map in the
  book's order and the fourth on the plates, each at the width the book
  prints it.
- The six unnumbered images inside the section's problems are not copied:
  every one of those problems is an unkeyed sketch and is left out under the
  job's rule, so no card refers to them (`ch19/config.md`, Figures that
  serve exercises).

Extra simulations (rule 15), considered and left:

- A charge walked round a closed path on the map with a running total of the
  work done, zero along a line and not zero across one: the readout of the
  first figure already states the zero work, and the flight of a charge
  through a potential difference is what 19.1's figure runs. Left.
- The potential drawn as a surface in relief, the equipotentials its contour
  lines: it would be the chapter's one 3D scene, and `ch19/config.md`
  settles that the arrangement in space is not the lesson here. Left.

None built.

## Exercises

- No Check Your Understanding boxes; nothing inline.
- 3 conceptual questions, `cq1` (fs-id2664733, Understand), `cq2`
  (fs-id3105556, Understand) and `cq3` (fs-id1356324, Analyze), each with an
  AI-written suggested approach.
- 6 AP items of the section's own: `ap1` (fs-id1249875, keyed (a), how
  Figure 19.10 would differ with two positive charges), `ap2` (fs-id1299780,
  open, the equipotentials of two plates at right angles), `ap3`
  (fs-id751083, keyed (b), the shape of a hill whose isolines crowd), `ap4`
  (fs-id2011505, open, which of Figures 19.9 and 19.10 resembles the
  gravitational field of two equal masses), `ap5` (fs-id1892187, keyed (c),
  the work needed to keep a charge in orbit round another) and `ap6`
  (fs-id2063319, open, the paths of a positive and a negative object between
  those same two plates). Keyed items are graded choices; the three open
  ones are kept with their options where the book prints options and carry
  an AI-marked suggested approach.
- 2 AP items brought in from 19.2 with `source_section: "19.2"`: `ap7`
  (fs-id1426361, keyed (d), six 5.0 V isolines across a 40 cm path) and
  `ap8` (fs-id2573348, open, what happens to the isolines between two plates
  as the separation changes). Both test the spacing of equipotential lines,
  which this section introduces and 19.2 does not draw; both sections'
  `exercise_notes` say so.
- 10 problems left out, every one of them an unkeyed sketch (fs-id2706239,
  fs-id2789845, fs-id1292487, fs-id2500526, fs-id1516086, fs-id1492488,
  fs-id1964514, fs-id1350693, fs-id1494380 and fs-id2720527, the last the
  lesser electric ray). The section therefore carries conceptual questions
  and AP items only, and `notes` says so.
- No generated questions: every node is tested by an exercise above.
- Weights: `cq1` tests `equipotential-lines` alone; `cq2` gives
  `equipotentials-perpendicular-to-field` its full value and
  `equipotential-lines` weight 2; `cq3` gives `equipotential-lines` its full
  value and `equipotentials-perpendicular-to-field` weight 3; `ap1` and
  `ap4` give `sketch-equipotentials` its full value with
  `equipotential-lines` weight 3; `ap2` and `ap6` give
  `sketch-equipotentials` its full value with `conductor-is-equipotential`
  weight 4; `ap3` and `ap7` give `equipotential-spacing-and-field` its full
  value, `ap7` adding `equipotentials-perpendicular-to-field` weight 2;
  `ap5` gives `equipotentials-perpendicular-to-field` its full value with
  `equipotential-lines` weight 3; `ap8` gives
  `equipotential-spacing-and-field` its full value with
  `conductor-is-equipotential` weight 2.

## Views

- Formulas: the two equations of the section already in `chapter.json`, one
  of them important.
- Definitions: the nine variables of the section, and the two glossary
  terms, equipotential line and grounding.
- Concept map: the five nodes above with their edges into Chapters 7 and 18
  and into 19.1, 19.2 and 19.3.

## Colour

The page binds voltage, electric-field, charge, position and energy, as
`ch19/COLOR.md` allows: both figures draw equipotential lines and write a
voltage, both draw field lines, both carry a charge on the map or on the
plates, the plates figure carries the separation on a slider and brackets
it, and the map's readout writes the zero work along an equipotential. The
book's own colours in this section, blue field lines and green
equipotentials, become the field hue and the voltage hue exactly as
`ch19/COLOR.md` directs. The frames, the scales and the count of lines are
ink, and the sign of every charge is told by its label and by the direction
of its field lines, never by a second hue.

## Wanted at chapter level

- variables `V_volt` → 19.4-equipotential-map
- variables `Q_charge` → 19.4-equipotential-map
- variables `ΔV_volt` → 19.4-perpendicular-to-field
- variables `W` → 19.4-perpendicular-to-field
- variables `q` → 19.4-perpendicular-to-field
- variables `F` → 19.4-perpendicular-to-field
- variables `E_field` → 19.4-perpendicular-to-field
- variables `d` → 19.4-perpendicular-to-field
- variables `θ` → 19.4-perpendicular-to-field
- equations `eq-work-along-equipotential` → 19.4-perpendicular-to-field
- equations `eq-work-perpendicular-to-field` → 19.4-perpendicular-to-field

**Applied by the chapter pass (2026-09-14).** Nine variable rows and two
equation rows carry their anchors. 19.2's two isoline AP items are on this
page with `source_section: "19.2"`. The page carries no problems at all,
since all ten of the section's problems ask for a sketch and the book keys
none of them; the chapter's `config.md` records the decision under "What the
build changed" so that Chen may override it and keep them as open sketching
items with their images on the cards.
