# Plan: 22.6 The Hall Effect (m42377)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-15
without a review stop, on Chen's standing instruction to finish the book in
waves without check-ins; the per-section stop of rule 2, the plan review of
rule 5 and the user picks of rule 15 are replaced by this file, written
before the section was built and left for review after, as `ch22/config.md`
records.

The sixth section of the chapter, and the first that turns the force on a
moving charge into a voltage anyone can measure. It carries one result,
$\varepsilon = Blv$, reached in four short steps from the balance of the
magnetic force against the electric force of the charge the magnetic force
has itself separated. Three book figures, all of them diagrams; one worked
example, the flow probe on an artery; two glossary terms; one conceptual
question, one AP item and nine problems, of which the book keys five. One
page (rule 11).

## Sub-concepts (page headers)

The module prints no header of its own, so all three headers are the agent's
(rule 3). The breaks fall where the book's own subject changes: first what
the field does to the carriers and what that tells the reader about their
sign, then the balance of forces that fixes the voltage, then the two
instruments that live off the formula. A fourth block would separate the
worked example from the flow probe it computes.

1. `carriers` **Charges pushed to one side of a conductor** (book: the two
   opening paragraphs; Figure 22.26, the flat conductor drawn for negative
   and for positive carriers; the paragraph on using the effect to tell
   which sign carries the current).
2. `balance` **The balance of forces and the Hall emf** (book: the paragraph
   that sets $qE$ against $qvB$; the four displayed equations; Figure 22.27,
   the conductor drawn in perspective with the two forces on one electron;
   the sentence that names $l$ and $v$).
3. `probes` **Hall probes and flow meters** (book: the closing paragraph on
   measuring a field and measuring a flow; Figure 22.28, the flow probe
   across a tube; Example 22.3, the Hall emf of blood in an artery).

Learning objectives, the section summary and the glossary come out of the
running text into the tables and the views (rule 4); the two glossary rows,
Hall effect and Hall emf, are already in `chapter.json`. The section cites
Example 20.3 of the chapter on current, in one problem, and the reference is
plain text as `ch22/config.md` asks. The section carries no boxed note and
no PhET link.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| hall-effect | idea | carriers | the second paragraph, where the separation of charge creates a voltage; Figure 22.26 in its two panels; both glossary terms |
| sign-of-charge-carriers | skill | carriers | the paragraph on electrons in metals and positive carriers in semiconductors; the opposite signs of the two panels of Figure 22.26 |
| hall-emf | result | balance | the four displayed equations; Figure 22.27; the section summary's one equation |
| hall-probe-and-flow-measurement | idea | probes | the closing paragraph; Figure 22.28; Example 22.3; five of the section's problems |

The section leans on `magnetic-force-on-a-moving-charge`,
`right-hand-rule-1` and `force-reverses-with-sign-of-charge` from 22.4, on
Chapter 19's `voltage-across-uniform-field` and `volts-per-meter` for the
step from a uniform field to a voltage across a width, and on Chapter 18's
`electric-field`, `uniform-field-between-plates` and `conductor`. Every edge
is already in `book.json`, written when the chapter was prepared.

## Figures

id · replaces or Sim · concepts · value add · what moves or still · sliders
and choices · headline · graph · 3D

1. `sim-hall-carriers` · replaces Figure 22.26, the flat conductor drawn
   twice, once for electrons and once for positive carriers ·
   hall-effect, sign-of-charge-carriers · value add: variation by choice,
   the reader swaps the carriers without touching the conventional current
   and watches the same face of the conductor collect the opposite sign, so
   that the change of sign the book prints as two separate panels becomes
   one thing changing; and variation by slider, since the force that does
   the pushing is the reader's own $\kF = \kq\kvd\kBmag$ from 22.4 with
   numbers on it · **still**: the pile-up is over almost as soon as it
   begins, and what the figure shows is the state it settles into, so the
   figure answers its controls, registers no cycle and gets no transport
   (rule 14; `ch22/config.md` puts the Hall slab among the still figures of
   the chapter) · a choice for the carriers, electrons or positive carriers,
   which is a discrete state and never a slider (rule 26.1); the field
   strength (0.02 to 0.50 T, default 0.10, magnetic-field) and the drift
   speed (0.10 to 2.00 mm/s, default 0.50, velocity) · "The carriers are
   electrons, so they drift to the left while the conventional current runs
   to the right; the magnetic force pushes them to the lower face, which
   turns negative, and the Hall emf stands positive at the upper face." ·
   none · 2D, flat: the book draws the conductor face on with the field out
   of the page, and the whole argument lies in that plane, so there is no
   depth for a locked view or an orbit to add (rule 28.1). The conductor is
   an ink slab; the field out of the page is a lattice of circled dots in
   the field hue; the conventional current is one arrow in the current hue
   along the slab; the carriers of either sign are discs in the
   charge hue lettered with their sign, as `ch22/COLOR.md` asks of the
   carriers that pile up on the face of a Hall conductor, so that a sign is
   told by the letter and never by a second hue; one carrier is singled out
   and carries its velocity arrow and its force arrow; the charge that has collected is a row of signs along each
   long face, and the two leads run to a meter that states the sign of
   $\kemfhall$. Readout: $\kF = \kq\kvd\kBmag$ with the live numbers, and a
   second line naming which face is positive. Labels: seven, all on, none of
   them on a thing that moves (rule 26.7). Draws magnetic-field, current,
   charge, velocity, force and voltage.
2. `sim-hall-balance` · replaces Figure 22.27, the conductor drawn in
   perspective with the two forces on one electron · hall-effect, hall-emf ·
   value add: variation by slider, the reader sets the field, the drift
   speed and the width and watches the electric field that the separated
   charge maintains hold exactly level with the magnetic force at every
   setting, and reads the emf that width turns it into; the book draws one
   state of it and no numbers at all · **still**: the balance is an
   equilibrium the section says is quickly reached, so what the figure shows
   is the state after it, and there is no clock in it (rule 14) · the field
   strength (0.02 to 0.50 T, default 0.100, magnetic-field), the drift speed
   (0.05 to 0.50 m/s, default 0.200, velocity) and the width of the
   conductor (3.0 to 10.0 mm, default 4.00, ink, a length being untyped in
   this book, on one fixed scale of 30 units to the millimetre); the defaults are the numbers of Example 22.3, so the figure
   opens on the worked example's 80.0 μV · "The electric field of the
   separated charge is 0.0200 V/m, which is exactly what it takes to hold
   the 4.00 mm wide conductor at a Hall emf of 80.0 μV." · none · 2D, and
   **a locked view** (rule 28.2; `ch22/config.md` names the Hall slab of
   22.6 as one of the chapter's locked views): the book prints this figure
   in perspective because the field comes out of the front face while the
   carriers cross the slab and the charge collects on the top and bottom
   faces, three directions at once, and a flat drawing would have to put the
   field on top of the carriers. There is no orbit and no button, since
   nothing the reader could turn the slab to would show more than the
   book's own viewpoint does, and the figure stays a 2D figure in cost and
   in chrome. Yaw 0.38, pitch 0.26, fixed. The slab is ink with shaded
   faces; the field is a row of arrows out of the front face in the field
   hue; the collected charge is a row of plus signs on the top face and
   minus signs on the bottom; the electric field inside is a set of downward
   arrows in the electric-field hue; the one electron is a disc in the charge hue
   lettered with a minus and carries its velocity arrow and the two force
   arrows, drawn the same length on the page because they are equal, one up
   and one down in the force hue; the width is bracketed. Readout: $\kq\kEf = \kq\kv\kBmag$ solved to
   $\kEf = \kv\kBmag$ with the live numbers, and a second line giving
   $\kemfhall = \kBmag l \kv$. Labels: eight, all on, none on a moving
   thing. Draws magnetic-field, electric-field, force, velocity, charge and
   voltage.
3. `sim-flow-probe` · replaces Figure 22.28, the flow probe across a tube ·
   hall-probe-and-flow-measurement, hall-emf · value add: variation by
   slider, the reader sets the field, the average speed and the bore and
   reads the emf the probe gives, and **a scale that the book's own
   Discussion asks for and none of its figures draws**: the computed emf is
   marked on a decade scale of voltage beside the millivolt band of the
   voltages the beating heart itself produces, so the reader sees at once
   why the section says the voltage is small and why a flow probe has to
   apply an alternating field to be heard over a heartbeat · **still**: the
   flow crosses the field steadily and the reading is a state of that flow,
   not a story in time, so the figure answers its sliders and registers no
   cycle · the field across the vessel (0.010 to 0.500 T, default 0.100,
   magnetic-field), the average speed of the flow (0.02 to 1.00 m/s, default
   0.200, velocity) and the bore of the vessel (3.0 to 10.0 mm, default
   4.00, ink, on one fixed scale of 19 units to the millimetre of radius); the defaults are Example 22.3's, so the figure opens on the
   80.0 μV the worked example computes · "A field of 0.100 T across a vessel
   4.00 mm wide, with the blood moving at 0.200 m/s, gives a Hall emf of
   80.0 μV, which is about a hundredth of the voltages the heart itself
   makes." · a scale below the scene, the scene being wider than it is tall:
   a decade scale of voltage from 0.1 μV to 100 mV, fixed once from the
   slider maxima (the emf reaches 5 mV at the top of all three sliders and
   falls to 0.6 μV at the bottom of them, so nothing the sliders can do
   leaves the scale), the emf marked on it in the voltage hue and the
   millivolt band of heart voltages shaded in ink · 2D, flat: the tube is
   drawn end on between the two pole faces, which is how the book draws it,
   and the flow comes out of the page as a lattice of dots; the third
   direction carries no lesson here beyond that. The magnet is ink with N
   and S lettered on its poles; the field across the gap is arrows in the
   field hue; the flow out of the page is dots in the velocity hue; the
   carriers of each sign are charge-hued and lettered, with the force on
   each an arrow in the force hue, up for the positive and down for the
   negative, which is the section's point that the sign of the emf does not
   depend on the sign of the carriers; the bore is bracketed and the two
   electrodes run to a meter. Readout: $\kemfhall = \kBmag l \kv$ with the
   live numbers, and a second line on the ECG voltages the Discussion names.
   Labels: eight, all on. Draws magnetic-field, velocity, charge, force and
   voltage.

Photographs: none in the module, so none kept and none dropped. Figures that
serve exercises: none, since no exercise of this section refers to an image
(`ch22/config.md` lists the sections that do, and 22.6 is not among them).
Example 22.3 gets no figure of its own, since it adds no quantity
`sim-flow-probe` does not already carry and opens on its numbers (rule 14).

Extra simulations (rule 15), thought through, judged and left:

- A quantised Hall plateau, the staircase of conductance the last sentence
  of the first passage mentions. Left: the book gives the quantum Hall
  effect one clause and no equation, and a figure of it would teach a result
  the page does not state and the reader cannot check (rule 26.5).
- A carrier-density gauge, turning the measured emf into the free charge
  density the conceptual question asks about. Left: the relation it needs,
  $I = nqAv_{\text{d}}$, belongs to 20.1 and the section never writes it, so
  the figure would answer the conceptual question instead of setting it.

## Types the page binds

`magnetic-field`, `electric-field`, `voltage`, `velocity`, `charge`,
`current` and `force`. The first six are the bindings `ch22/COLOR.md`
expects of this page. The seventh, `force`, is asked for here and the reason
is the section itself: the whole argument is one force set against another,
the magnetic force that separates the charge and the electric force that
stops it, and both are drawn as arrows in two of the three figures. A
magnetic force is a force and wears Chapter 4's force hue, as
`ch22/COLOR.md` says of the chapter throughout, so nothing new is invented;
the page simply draws a type the chapter's expectation for this page left
out. The width $l$ of the conductor, the bore of the vessel, every axis
label and the frame of each figure are untyped and in ink, and no body is
tinted: the conductor is an ink slab, the magnet is ink with N and S on its
poles, and a carrier's sign is told by the letter on it, never by a second
hue.

## Exercises

Eleven in the book; six are set here. One conceptual question, on getting
the free charge density from the effect, with an AI-marked suggested
approach, since the book prints no key for it. One AP test prep item, the
aeroplane wingspan crossing Earth's field, kept as an open item with an
AI-marked suggested approach for the same reason (`ch22/config.md`). Five of
the nine problems are keyed and are set: the water main, the supersonic
aircraft, the heart wall in the MRI scanner, the copper wire that needs the
drift velocity of Example 20.3, and the pacemaker wire. The four the book
leaves unkeyed are left out and named in `exercise_notes`: the aorta, the
non-mechanical water meter, the Hall probe recalibrated to a weaker field,
and the proof that the Hall voltage across wires of the same material goes
inversely with their diameters. The module prints no Check Your
Understanding box, so the page hosts no inline exercise, and no exercise is
held here for a later section or held elsewhere for this one.

## Wanted at chapter level

- variables `E_field` → 22.6-balance
- variables `emf_hall` → 22.6-balance
- variables `l` → 22.6-balance
- equations `eq-hall-force-balance` → 22.6-balance
- equations `eq-hall-emf` → 22.6-balance

**Chapter pass, 2026-09-15.** All five anchors written with `ost set`: the three
variable rows and the two equation rows of the section now carry `22.6-balance`.
The convention the section asked to have settled is settled in
`ch22/COLOR.md`: a carrier the page does not name is drawn in the charge hue
with its sign lettered on it, because what carries the current is the very
question the Hall effect answers and naming the carrier for the element palette
would answer it in advance; this section is the only page of the chapter that
draws such a carrier, and 22.2, 22.5 and 22.11 keep `F.el` for the particles
they do name. The `force` binding this page takes beyond the colour plan's list
is now in that list, with the reason. The AP item fs-id2336649 stays unkeyed
with the approach that uses the perpendicular component, and the difference
from the solution the publisher commented out is recorded in
`ch22/exploration.md` under Errata.
