# Plan: 23.6 Back Emf (m42411)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-15
without a review stop, on Chen's standing instruction to finish the book in
waves; the per-section stop of rule 2, the plan review of rule 5 and the user
picks of rule 15 are replaced by this file, written before the section was
built and left for review after, as `ch23/config.md` records.

The short section that turns 23.5 round. A generator is a coil turned in a
field, and a motor is a coil turned in a field by the current fed into it, so
a running motor is generating as well, and what it generates opposes what
drives it. Three paragraphs, one schematic (Figure 23.24), no worked example
set off in a box and no equation display of its own, one glossary term, one
conceptual question and five problems of which three are keyed. One page
(rule 11), and the section owns no variable or equation row in
`chapter.json`, which is why nothing below is anchored.

## Sub-concepts (page headers)

The module prints no header of its own, so all three are the agent's (rule 3).

1. `motor-as-generator` **A motor is a generator as well** (book: the opening
   paragraph, from "It has been noted that motors and generators are very
   similar" to the definition of the back emf; Figure 23.24).
2. `back-emf-and-speed` **Back emf grows with the speed of the motor** (book:
   the second paragraph, from "Back emf is the generator output of a motor"
   through the dimming lights, the wheelchair on the hill and the motor that
   runs free until its back emf nearly equals the driving emf).
3. `stalled-motor` **What a motor draws when it is turning and when it is
   not** (book: the third paragraph, the 48.0 V motor with 0.400 Ω coils
   worked through at rest and at operating speed).

The book's one cross-reference is to its own Figure 23.24, which the app
links on the page; the section names no other section (rule of the job:
cross-references are plain text). The learning objective, the section summary
and the glossary term come out of the running text into the tables and the
views (rule 4).

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| motor-is-a-generator | idea | motor-as-generator | the opening paragraph; Figure 23.24, which draws the motor as a resistance with an emf source of its own |
| back-emf | result | back-emf-and-speed | back emf is the generator output of the motor and so is proportional to ω; the caption of Figure 23.24; the glossary term |
| back-emf-and-current-drawn | result | stalled-motor | the 48.0 V motor at 120 A and 5.76 kW at rest against 20 A and 160 W at speed; the problems that ask for a motor's resistance and for the current it draws at starting |

The section leans on `electric-generator`, `peak-emf` and
`generator-emf-versus-time` (23.5), `faradays-law` and `lenzs-law` (23.2),
`induction` (23.1), `ohms-law`, `ir-drop`, `electric-power` and
`power-and-resistance` (20.2 and 20.4), `wire-resistance-ir-drop` (21.1) and
`internal-resistance` and `terminal-voltage` (21.2); the coverage rows mark
each as used where the text uses it.

## Figures

id · replaces or Sim · concepts · value add · moving or still · sliders ·
headline · graph · 3D

1. `sim-back-emf` · replaces Figure 23.24, the motor drawn as a resistance
   with a variable emf opposing the one that drives it ·
   back-emf, back-emf-and-current-drawn, motor-is-a-generator · value add:
   variation by slider and intuition (rule 24.4), since the book's schematic
   is a fixed drawing of a circuit whose whole interest is that one of its
   two sources grows with the speed of the shaft, and the reader would
   otherwise have to imagine the current and the dissipation running from one
   end of that range to the other · **still**: a motor at a steady speed
   draws a steady current, and what the reader is changing is the speed it
   has settled at, not the passage of time; the figure answers its sliders
   and registers no cycle, so it carries no transport (rule 14) · $\kw$
   (0 to 160 rad/s, step 5, default 160, angular-rate), $\kemf$ (40 to 120 V,
   default 48.0, voltage) and $\kRes$ (0.20 to 2.00 Ω, default 0.400,
   resistance). The back emf is not a slider of its own: it is what the speed
   sets, at 0.250 V for every rad/s of this motor, so that the book's 40.0 V
   stands at the top of the speed slider and the driving emf never falls
   below it · "Turning at 160 rad/s the motor generates 40.0 V against the
   48.0 V driving it, so only 8.0 V is left across its coils and it draws
   20.0 A." · graph below, since the scene is a horizontal circuit: the
   current the motor draws and the power dissipated in its coils, both
   against the speed of the shaft, on one frame with the current's axis at
   the left and the power's at the right. Fixed ranges of 0 to 300 A and 0 to
   12 kW, which hold the book's 120 A and 5.76 kW at rest at a little under
   half the height of the frame; a setting that leaves the frame is clipped
   at its edge and the live point is pinned there (rule of § 2) · 2D.
   Readout: $\kIcur = (\kemf - \kemf_{\text{back}})/\kRes$ with the live
   numbers, and a small line giving $\kP = \kIcur^2\kRes$, which is the
   5.76 kW that would burn the coils out at rest. Six things are named — the
   driving source, the back emf, the coils' resistance, the current, the
   speed of the shaft and the motor the dashed panel encloses — each with its
   readings beside it; nothing in the scene moves and no two of them can
   meet, so the labels are on (rule 26.7). Draws voltage, current,
   resistance, power and angular-rate.
2. `sim-dimming-lights` · Sim (it replaces no figure of the book) ·
   back-emf-and-current-drawn, back-emf · value add: intuition (rule 24.4).
   The section says in one sentence that lights in the same circuit dim
   briefly when a vacuum cleaner or a refrigerator is switched on, and that
   this is the $IR$ drop the large starting current makes in the feeder
   lines. No figure of the book draws it, and the reader who has not thought
   about the resistance of the wiring cannot see why a motor two rooms away
   should have anything to do with a lamp. Here the lamp and the motor hang
   on the same pair of feeders, and dragging the motor's speed down to
   nothing dims the lamp in front of the reader · **still**: a lamp at a
   steady brightness and a motor at a steady speed are one state of a
   circuit, and the brief moment of the dimming is the state at the bottom of
   the speed slider, not a process the figure has to run through; no cycle
   and no transport (rule 14) · $\kw$ (0 to 180 rad/s, step 5, default 180,
   angular-rate) and the resistance of the feeder line (0 to 1.00 Ω, default
   0.40, resistance), with a choice of the appliance switched on or off (rule
   26.1), default on, so that the lamp's full brightness stands beside its
   dimmed one. The motor is the one the passage describes, an 8.00 Ω vacuum
   cleaner motor whose back emf reaches 108 V at its running speed, and the
   lamp is a 100 W bulb of 144 Ω, drawn as the circle and cross a lamp is
   drawn with, its glow a disc in the power hue whose radius follows the
   power it dissipates. The speed slider is disabled while the motor is
   switched off, since a motor that is not running has no speed to set ·
   "Turning at 180 rad/s the motor draws 1.39 A, the feeder lines lose 0.9 V,
   and the lamp has 119.1 V across it at 99 percent of its brightness." ·
   none: the whole of it is the circuit, the currents in its three branches
   and the lamp · 2D. Readout: $\kV = \kemf - \kIcur\kRes$ for the voltage
   left at the lamp, with a small line giving the lamp's power against the
   100 W it takes at the full 120 V. Six things are named — the supply, the
   feeder lines, the current in them, the voltage left at the lamp, the lamp
   itself and the motor the dashed panel encloses — each with its readings
   beside it, and the labels are on for the same reason (rule 26.7). Draws
   voltage, current, resistance, power and angular-rate.

Photographs: the section prints none, so none is kept and none is dropped.

Figures that serve exercises: the section's problems refer to no figure of
their own, so none is copied.

Extra simulations (rule 15), thought through, judged and decided:

- **The lamp and the motor on one pair of feeders (`sim-dimming-lights`):
  built.** The reasoning is in its plan line above: it is the one claim of
  the section a reader cannot check against Figure 23.24, and it is the
  claim the section uses to persuade the reader that the starting current
  is large enough to matter.
- A motor spinning up from rest, its back emf growing and its current
  falling as the shaft gathers speed. Left: the rate at which a shaft gathers
  speed is set by the inertia and the load on it, which this book has not
  put with a motor, so the figure would have to invent its own mechanics to
  fill the axis, and a dummy loop to earn a transport is refused outright
  (rule 14).
- The wheelchair on the hill, with the load on the shaft as the slider.
  Left: the load enters this section only through the speed it leaves the
  motor turning at, and that speed is already the first slider of
  `sim-back-emf`; a second scene would put a hill in front of the same
  arithmetic.
- A motor and a generator drawn side by side to show they are one machine.
  Left: 23.5 builds the generator as a 3D scene and 22.8 the motor, and this
  page opens by saying in the book's own words that they have the same
  construction; a third drawing of the same coil would add no view.

## Exercises

- Every item is set at the end (`ch23/config.md`; the module prints no Check
  Your Understanding box, so the page hosts no inline card).
- 1 conceptual question, unkeyed, an open item with an AI-marked suggested
  approach: `cq1` (fs-id1169738051900, the broken belt drive and the motor
  running freely, Analyze, citing `back-emf-and-speed`).
- 3 problems keyed and kept: `p1` (fs-id1169737728029, the 120 V motor that
  draws 10.0 A at starting, keyed 12.00 Ω and 1.67 A, both parts), `p3`
  (fs-id1169737781410, the back emf of the 120 V motor that draws 8.00 A at
  speed and 20.0 A at starting, keyed 72.0 V) and `p5`
  (fs-id1169737854685, the Integrated Concepts item with the four batteries'
  internal resistance, keyed 0.100 Ω).
- 2 problems left out, having no answer in the book's key: the 240 V motor
  with a 180 V back emf (fs-id1169738010283) and the toy car's motor
  (fs-id1169737946132). Both are named in `notes` and in `exercise_notes`.
- No AP item: the chapter's eight sit two apiece in 23.1, 23.5, 23.7 and 23.8
  (`ch23/config.md`), and none of them tests this section.
- Nothing is taken from another section and nothing of this section's own is
  held back; the book's problems follow its sections closely here
  (`ch23/config.md`).
- No generated questions: each of the three nodes has a book exercise that
  tests it.
- Weights: `cq1` gives `back-emf` its full value and
  `back-emf-and-current-drawn` 4, since the question turns on how fast an
  unloaded motor runs and the current follows from it; `p1` and `p3` give
  `back-emf-and-current-drawn` the full value with `back-emf` at 3, since
  each is the difference of two voltages divided by a resistance; `p5` gives
  `back-emf-and-current-drawn` the full value, `back-emf` 3 and
  `internal-resistance` 3, the internal resistance of the four cells being
  the step that makes it an Integrated Concepts item.

## Views

- Formulas: none. The section states no equation of its own, and
  `chapter.json` gives it no row (`ch23/config.md`); the arithmetic it works
  is Ohm's law and $P = I^2R$ from Chapter 20, which the figures write into
  their readouts in the book's macros.
- Definitions: the glossary term back emf. The section introduces no symbol
  of its own, so it owns no variable row; see "Wanted at chapter level".
- Concept map: the three nodes above with their edges into 20.2, 20.4, 21.1,
  23.2 and 23.5.

## Colour

The page binds voltage, current, resistance, power and angular-rate, which is
exactly what `ch23/COLOR.md` gives 23.6. The driving emf, the back emf and
the voltage left at a lamp are one hue with three labels, as the chapter's
plan requires of a back emf; the current in every branch is the current hue;
the coil, the feeder line and the lamp's filament resistance are the
resistance hue; the power dissipated in the coils and the power the lamp
turns into light are the power hue; the shaft's speed is the angular rate.
The motor's case, the wires, the switch, the battery plates and the lamp's
glass are ink, since a device is never tinted. The one drawn thing that is
not a symbol or an arrow is the glow round the lamp in `sim-dimming-lights`,
whose radius follows the power the lamp dissipates and which is drawn in the
power hue at low alpha: it is the quantity and not the device that wears the
hue (rule 7). Nothing on the page uses the categorical or the element
palette, and nothing draws a magnetic field or a flux, so neither type is
bound here.

## Wanted at chapter level

- No anchor is wanted: 23.6 owns no `variables` row and no `equations` row in
  `ch23/chapter.json`, so there is nothing for the chapter pass to anchor.
- If the chapter pass would rather the page's Definitions view carried more
  than the one glossary term, three `variables` rows would fit it, and the
  page is written so that they can be added without touching it: `ω` (the
  angular velocity of the motor's shaft, rad/s, angular-rate), `emf` (the
  emf driving the motor and the back emf it generates against it, V,
  voltage) and `I_curr` (the current the motor draws, A, current). The
  section introduces no symbol of its own and stages no `book-rows.json` row,
  so this is a suggestion and not a dependency.

### Decided by the chapter pass (2026-09-16)

- The three `variables` rows the plan offered are added: `ω` and `emf`
  anchored to `23.6-motor-as-generator`, `I_curr` to
  `23.6-back-emf-and-speed`. The section states no equation, but the page
  colours all three and the Definitions view would otherwise have held one
  glossary term alone.
- The book's `P = IV = (20 A)/(8.0 V) = 160 W` is an erratum, recorded in
  `exploration.md` § Errata. The prose is verbatim and prints what the book
  prints.
