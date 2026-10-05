# Plan: 11.3 Pressure (m42189)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's instruction to finish the book without
check-ins; the per-section stop of rule 2, the plan review of rule 5 and the
user picks of rule 15 are replaced by this file, written before the section
was built and left for review after, as `ch11/config.md` records.

The section that gives the chapter its quantity. Density said how much of a
substance sits in a volume; pressure says how a force is spread over an area,
and the whole of fluid statics is written in it from here on. The section
defines pressure as force divided by the area perpendicular to it, names the
pascal and the other units still in use, works one example that turns a
pressure back into a force, and then makes the claim the rest of the chapter
leans on: a static fluid cannot exert a shearing force, so the force due to
pressure is always perpendicular to the surface it acts on and is exerted on
every surface at once. Three book figures (11.5 to 11.7), no photograph, one
worked example, one boxed note, one PhET note, one glossary term, one AP item,
eight conceptual questions and three problems of which two are keyed. One
page (rule 11).

## Sub-concepts (page headers)

The module prints no header of its own, so all four are the agent's (rule 3).

1. `pressure-defined` **Pressure is force divided by area** (book: the
   opening paragraph with the definition; the boxed Pressure note). The
   variables $\kPr$, $\kF$ and $A$ and the equation `eq-pressure` anchor here.
2. `units` **The pascal and the other units of pressure** (book: the
   paragraph that begins "A given force can have a significantly different
   effect", which also names the pascal; the millibar; the paragraph on
   pounds per square inch and millimeters of mercury; Figure 11.5, which the
   CNXML sets at the end of that paragraph). `eq-pascal` anchors here. The
   pascal and the finger-and-needle figure share one book paragraph, so the
   span holds both rather than cutting a paragraph in two.
3. `force-from-pressure` **Calculating the force a pressure exerts** (book:
   Example 11.2, the astronaut's air tank, with its strategy, solution and
   discussion). `eq-force-from-pressure` anchors here. The example is
   `ex-air-tank`.
4. `perpendicular` **The forces due to pressure are perpendicular to every
   surface** (book: the paragraph after the example, on static fluids
   exerting no shearing force and pressure being a scalar; Figure 11.6, the
   tire; Figure 11.7, the swimmer).

The book gives its one example no number in the CNXML; the publisher prints
it as Example 11.2, the chapter's second after the reservoir of 11.2, and the
page follows that. The PhET note "Gas Properties" at the end of the module is
left out with the empty image line the converter wrote for it, and named in
`notes`. The section names no other section by title, so nothing is linked
or left plain. Learning objectives, the section summary and the one glossary
term come out of the running text into the tables and the views (rule 4).

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| pressure | idea, eq-pressure | pressure-defined | the definition and the boxed note; the finger and the needle; the knife, the dull needle, the padded shoes and the toe dancer |
| pascal-unit | idea, eq-pascal | units | the pascal, the millibar, psi and mm Hg; the question on converting units without a table |
| force-from-pressure | skill, eq-force-from-pressure | force-from-pressure | Example 11.2; the heel, the phonograph needle and the nail |
| pressure-is-scalar | idea | perpendicular | the paragraph after the example; the tire and the swimmer; the questions on why the force is perpendicular and how the tank's end force is balanced |

The section leans on `force` (4.1), `fluid` (11.1), `scalar` (2.2),
`derived-units` (1.2), `newton-unit` (4.3) and `weight` (4.3); the coverage
rows mark each as used where the text uses it.

## Figures

id · replaces or Sim · concepts · value add · what moves or still · sliders ·
headline · graph · 3D

1. `sim-poke` · Figure 11.5 (a)+(b) · pressure, pascal-unit · variation by
   slider: one push spread from a fingertip's pad to a needle's point,
   pressure through four powers of ten · still: a push held against the skin
   has no time in it · $\kF$ (0 to 20 N, default 5.0, force); $\kd$ (0.1 to
   12.0 mm, default 12.0, detents 0.3 needle and 12.0 fingertip as ticks
   without the snap, whose reach would swallow 0.1 to 4.3 mm) · headline as
   before, the push, the width and the pressure in numbers · ruler of
   pressures below (10² to 10¹⁰ Pa, the 100 mb, air-tank and nail-tip
   landmarks), beside none · 2D: the pusher at body scale (4/3 units/mm),
   `F.hand` side view with the fingers along aim onto the skin of an arm,
   swapping below 4 mm for the same hand holding a 10 mL syringe from above,
   and a magnified inset (circle with leaders, 15 times, 20 units/mm) where
   the pad or the point dents the skin, the contact in the pressure hue and
   $d$ bracketed beside it; no fold, no split. Readout $\kPr = \kF/\karea$
   with the live numbers, note $\karea = \pi(\kd/2)^2$ in mm². Labels: the
   pusher, the skin of an arm and the force. Draws force, pressure,
   position, area.
2. `sim-tire` · replaces Figure 11.6, the tire with its field of arrows and
   the valve inset · pressure-is-scalar, force-from-pressure · variation by
   slider and intuition: the book draws representative arrows at one
   pressure; here the pressure is on a slider, the arrows grow with it on
   every wall alike, and one patch of wall the reader chooses carries the
   force $\kF = \kPr A$ in numbers, so the reader sees that the same
   pressure makes the same force on an equal patch of the tread, of the rim
   or of the valve, and that the force is perpendicular to whichever wall the
   patch is on · **still**: a tire standing inflated has no clock; the figure
   answers its sliders (rule 14) · $\kPr$ (0 to 400 kPa, default 220, the
   pressure of a car tire, pressure); the area of the patch $A$ (0.1 to
   10.0 cm², default 2.0, ink); and a choice of where the patch sits, the
   tread, the rim or the valve, default the tread, because which wall is a
   state and not a quantity (rule 26.1) · "At 220 kPa the air pushes on a
   2.0 cm² patch of the tread with 44 N, straight out through the wall." ·
   none: the tire seen from the side with its field of arrows, the ground
   under it and the magnified valve beside it, as the book draws it, is the
   whole picture · 2D. Readout: $\kF = \kPr A$ with the live numbers; small
   line saying the pressure is the same at every point inside, so an equal
   patch feels the same force on every wall, always perpendicular to it, and
   giving the pressure in pounds per square inch, the unit the text says a
   tire gauge reads. The field of arrows takes the pressure hue, since each
   states the pressure at its point, and the one force on the chosen patch
   takes the force hue, as `ch11/COLOR.md` decides for the buoyant force of
   11.7. Labels: the field is one kind and is named once in a legend line,
   the patch force is labelled, hover names on the field and the valve. Draws
   force, pressure.
3. `sim-swimmer` · replaces Figure 11.7, the swimmer with arrows on all
   sides · pressure-is-scalar · intuition: the book's caption says the water
   would flow into the space he occupies if he were not there, and the reader
   has to imagine it; here a choice takes the swimmer away and leaves the
   water that fills his place with the very same forces on its boundary, and a
   slider tilts his body so the reader sees the arrows follow his skin
   whichever way he lies, each one perpendicular to the surface where it acts
   · **still**: a swimmer holding his position has no time in it; the figure
   answers its controls (rule 14) · a choice of what is in the water, the
   swimmer or the water in his place, default the swimmer (rule 26.1); the
   tilt of his body (−40° to 40°, default 0, ink, the book's panel being
   horizontal). No depth slider: how much the pressure grows with depth is
   11.4's law, and a slider that grew the arrows by a rule the page has not
   taught would put a number on the figure the reader cannot check (rule
   26.5) · "The water pushes on every part of the swimmer's skin at once,
   each force perpendicular to the skin where it acts, and the forces
   underneath are a little larger than those on top." · none · 2D. Readout:
   $\kF = \kPr A$ on every patch of his skin, perpendicular to that patch, in
   symbols rather than numbers, because the page gives no value for the
   pressure at a depth and the readout will not invent one; the small line
   says the forces underneath are larger because the water is deeper there,
   so their sum has an upward part, the net upward force the caption names,
   which his weight balances. The arrows underneath are drawn a quarter longer
   than those on top, as the book draws them, representative and unnumbered.
   The many arrows are one kind and are named once; the net upward force and
   the weight are labelled. Draws force, pressure.

Photographs: the section has none, so none is kept and none is dropped.

Figures that serve exercises: the book prints none in this section, and the
problems refer to no figure of their own. The AP item's drum has no image.

Extra simulations (rule 15), thought through, judged and left:

- The flat end of the air tank of Example 11.2, with the pressure and the
  diameter on sliders. Left: `sim-tire` already puts $\kF = \kPr A$ on a
  slider for a patch of any area, and the tank would be the same relation on a
  different drawing.
- A converter between pascals, millibars, psi and millimeters of mercury.
  Left: it is a table, not a picture, and the book's own table of
  conversions is 11.6's.
- The nail under the hammer, the same force over the head and the point.
  Left: it is `sim-poke` with a different sprite.

## Exercises

- The AP item on the drum of petroleum ether (fs-id2402162) asks for the
  pressure on the walls and the floor of a drum full of liquid, which is the
  pressure due to the weight of a fluid, 11.4's result; it goes to 11.4 with
  `source_section: "11.3"` (`ch11/config.md`), and both sections' notes say
  so. The conceptual question on the iceberg and the glacier (fs-id2590796)
  is Archimedes' principle and goes to 11.7 the same way.
- 7 conceptual questions of the section's own, none keyed, each an open item
  with an AI-marked suggested approach: `cq1` (fs-id3149806, the sharpness
  of a knife, Understand, citing `units`), `cq2` (fs-id2615691, the dull
  hypodermic needle, Understand, set inline after `units`, since it is a
  short check on the finger-and-needle figure the reader has just used, as
  rule 12 asks and as 9.2 sets its first question), `cq3` (fs-id1034685, how
  the force on the end of the air tank is balanced, Analyze, citing
  `force-from-pressure`), `cq4` (fs-id935474, why the force of a static fluid
  is perpendicular, Understand, citing `perpendicular`), `cq6`
  (fs-id1429595, soft ground and padded shoes, Understand, citing `units`),
  `cq7` (fs-id2382902, toe dancing, Understand, citing `units`) and `cq8`
  (fs-id3091727, converting mm Hg, cm of water and inches of mercury without
  a table, Apply, citing `units`; the approach uses only the definition of
  pressure, weight and density, which the reader has).
- 2 problems keyed and kept: `p1` (fs-id2611366, the high heel, keyed
  3.59 × 10⁶ Pa, with the book's 521 lb/in² in the solution) and `p3`
  (fs-id3051764, the nail tip, keyed 2.36 × 10³ N).
- 1 problem left out, having no answer in the book's key: the phonograph
  needle on the record (fs-id2437545), named in `notes` and in
  `exercise_notes`.
- No inline Check Your Understanding box: the chapter prints none.
- No generated questions: every node of the section has a book exercise that
  tests it.
- Weights: `cq3` gives `force-from-pressure` its full value and
  `pressure-is-scalar` 3, since the balancing force is the same pressure on
  the other end; `cq8` gives `pascal-unit` its full value and `pressure` 3,
  since the conversion is the definition applied to a column of liquid; `p1`
  gives `pressure` its full value and `weight` 2; `p3` gives
  `force-from-pressure` its full value and `pressure` 2.

## Views

- Formulas: the three equations of the section already in `chapter.json`,
  all stated and named and all important (`eq-pressure`, `eq-pascal`,
  `eq-force-from-pressure`).
- Definitions: the three variables of the section and one glossary term,
  pressure.
- Concept map: the four nodes above with their edges into 1.2, 2.2, 4.1, 4.3
  and 11.1.

## Colour

The page binds pressure and force, as `ch11/COLOR.md` lists for 11.3. Every
figure draws a force (the push on the skin, the force on the chosen patch of
the tire, the net upward force on the swimmer and his weight) and a pressure
(the reading on the ruler of `sim-poke`, the field of arrows on the tire's
walls and on the swimmer's skin, every readout). The area $A$, the width of a
contact and the tilt of a body stay untyped and in ink, as
`ch11/config.md` decided. Nothing on the page binds density, position, time
or acceleration.

## Wanted at chapter level

- variables `11.3/P_press` → 11.3-pressure-defined
- variables `11.3/F` → 11.3-pressure-defined
- variables `11.3/A` → 11.3-pressure-defined
- equations `eq-pressure` → 11.3-pressure-defined
- equations `eq-pascal` → 11.3-units
- equations `eq-force-from-pressure` → 11.3-force-from-pressure
- exercises: the AP item fs-id2402162 (the drum of petroleum ether) is set in
  11.4 with `source_section: "11.3"`, and the conceptual question
  fs-id2590796 (the iceberg and the glacier) in 11.7 the same way; this
  section's `exercise_notes` says so, and theirs should.
- No concept or symbol row needs changing: `P_press`, `F` and `A` are used
  as they stand.

Applied in the chapter pass (2026-09-14). The three variable anchors and
the three equation anchors are written as listed. 11.4's `exercise_notes`
names the drum of petroleum ether as taken from this section and 11.7's
names the iceberg and the glacier; no row was changed.

Figure pass, 2026-09-15 (Claude Fable 5.1). `sim-poke`: the push is now a thing the reader recognises. Above 4 mm it is a fingertip, a rounded finger with a nail whose pad flattens against the skin along a chord exactly d wide; below it is a hypodermic needle on its syringe, barrel, flange, hub and a shaft that tapers to the point d across. The skin dents under the contact, deeper as the pressure climbs, and the force arrow is anchored on the pusher's end, drawn heavier than any body line and labelled beneath it. The finger and the syringe are drawn in the figure, not in the library. `sim-tire`: the chosen patch is a solid arc of the wall in the force hue, wider with the area, and the force arrow leaves it outside the tread (or inward from the rim), clear of the arrow field, with its label beyond the tip; the three patch choices read tread, rim and valve so that they sit on one row. `sim-swimmer`: the stick person is replaced by `F.silhouette` in the reach pose, face down with arms forward, so that the body in the water reads as a swimmer at every tilt.

Figure pass, 2026-09-28 (Claude Opus 5.5). `sim-tire`: the patch and its force slide around the wall to the tread, the rim or the valve instead of jumping. `sim-swimmer`: the swimmer's outline holds its place while his body fades into the water that fills it, the pressure arrows unchanged, which is the substitution argument of the text. `sim-poke` unchanged.

Rewrite, 2026-10-05 (Claude Opus 5.5, high). `sim-poke` rebuilt from the review's plan line: the library hand at body scale and a magnified inset of the contact.
