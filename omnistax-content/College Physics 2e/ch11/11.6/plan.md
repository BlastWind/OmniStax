# Plan: 11.6 Gauge Pressure, Absolute Pressure, and Pressure Measurement (m42195)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's instruction to finish the book without
check-ins; the per-section stop of rule 2, the plan review of rule 5 and the
user picks of rule 15 are replaced by this file, written before the section
was built and left for review after, as `ch11/config.md` records.

The section that says what a gauge actually reads. It opens on the tire
gauge that reads zero at atmospheric pressure, defines gauge pressure and
absolute pressure and relates them, and then walks through the instruments
that measure pressure: the aneroid gauge, the open-tube manometer, the
mercury manometer of a blood pressure cuff, and the barometer, closing on the
table of pressure units. Three sketch figures (11.13, 11.14, 11.16), one
photograph (11.15), one table (11.2), one worked example, four boxed notes
(Gauge Pressure, Absolute Pressure, Systolic Pressure, Diastolic Pressure),
four glossary terms, no AP item, three conceptual questions, seven problems
of which four are keyed. One page (rule 11).

## Sub-concepts (page headers)

The module prints no header of its own, so all six are the agent's (rule 3).

1. `gauge` **A gauge reads zero at atmospheric pressure** (book: the flat
   tire paragraph; the blood pressure paragraph; the "In brief" paragraph
   that defines gauge pressure; the boxed Gauge Pressure note). The
   variables $\kPg$ and $\kPatm$ anchor here.
2. `absolute` **Absolute pressure is gauge pressure plus atmospheric
   pressure** (book: the paragraph that states $\kPabs = \kPg + \kPatm$ and
   works the 34 psi tire; the boxed Absolute Pressure note; the paragraph on
   the smallest absolute pressure being zero). The variable $\kPabs$ and the
   equation `eq-absolute-pressure` anchor here.
3. `gauges` **A mechanical gauge turns a pressure into a force** (book: the
   paragraph on the host of devices and remote sensing; the paragraph on
   the aneroid gauge; Figure 11.13).
4. `manometer` **The open-tube manometer** (book: the paragraph that
   introduces the U-shaped tube; the paragraph that reads the balloon and
   the peanut jar; Figure 11.14). The variables $\kh$ and $\krho$ and the
   equation `eq-gauge-pressure-manometer` anchor here. The first conceptual
   question is set inline after it.
5. `blood-pressure` **Measuring blood pressure with a mercury manometer**
   (book: the paragraph on the cuff, systolic and diastolic pressure and
   the 13.6 of mercury; the boxed Systolic Pressure and Diastolic Pressure
   notes; Figure 11.15; Example 11.7, Calculating Height of IV Bag, with its
   strategy, solution and discussion). The equation `eq-mm-hg` anchors here.
6. `barometer` **The barometer and the units of pressure** (book: the
   paragraph on the barometer and the altimeter; Figure 11.16; Table 11.2).
   The equation `eq-barometer` anchors here.

The book gives the example no number in the CNXML; the publisher prints it
as Example 11.7, the chapter's seventh (11.2 has one, 11.3 one, 11.4 three,
11.5 one), and the page follows that, as 11.2 and 11.3 did. The book's
cross reference to Pascal's Principle is a section of this chapter and stays
plain text, as `ch11/config.md` allows. Learning objectives, the section
summary and the four glossary terms come out of the running text into the
tables and the views (rule 4). The book's title "Strategy for (a)" on an
example that has no part (b) is kept as the book prints it.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| gauge-pressure | idea | gauge | the flat tire, the boxed note, the blood pressure that is measured relative to the atmosphere; the bicycle tire problem |
| absolute-pressure | result, eq-absolute-pressure | absolute | the relation, the 34 psi tire, the boxed note; the balloon and jar problem |
| manometer | skill, eq-gauge-pressure-manometer | manometer | Figure 11.14 read three ways; the balloon and jar problem, the water manometer for 300 mm Hg; the first conceptual question |
| blood-pressure-measurement | idea | blood-pressure | the cuff, the two boxed notes, 120 over 80; the cuff on the leg; the second and third conceptual questions |
| barometer | idea, eq-barometer | barometer | Figure 11.16, the altimeter, mm Hg as a unit, Table 11.2 |

The section leans on `pressure` and `force-from-pressure` (11.3),
`pressure-from-weight-of-fluid`, `atmospheric-pressure` and
`density-from-pressure-and-height` (11.4), `pascals-principle` and
`pressures-add` (11.5) and `unit-conversion` (1.2); the coverage rows mark
each as used where the text uses it.

## Figures

id · replaces or Sim · concepts · value add · still or moving · sliders ·
headline · graph · 3D

1. `sim-aneroid` · replaces Figure 11.13, the aneroid gauge · gauge-pressure,
   absolute-pressure, force-from-pressure · variation by slider and
   intuition: the pressure being measured pushes the bellows out with a
   force, the force stretches the spring and the pointer turns over the
   dial, so the reader sees a pressure become a force become a reading,
   which the still can only assert with wavy arrows; and the dial's zero can
   be moved from atmospheric pressure to vacuum, which is the whole
   difference between a gauge and an absolute reading · **still**: a gauge
   held on a tire has no time in it, and the figure answers its slider and
   registers no cycle (rule 14; `ch11/config.md` makes the same decision for
   every figure of fluid statics) · $\kPg$ (−14.7 to 60 psi, default 34,
   pressure; in pounds per square inch because that is what the tire gauge
   of the text reads and what its worked numbers are in, with the pascal
   equivalents in the readout), with soft detents at −14.7 psi, the smallest
   gauge pressure there is, at 0, atmospheric pressure, and at 34, the tire
   of the text; and a choice (rule 26.1) of what the dial reads, gauge
   pressure or absolute pressure, gauge by default, because the same pointer
   under a dial numbered from vacuum is the book's sentence that gauges are
   simply designed to read zero at atmospheric pressure · "The gauge reads
   34.0 psi, so the absolute pressure in the tire is 34.0 psi plus 14.7 psi,
   or 48.7 psi." · a ruler of absolute pressure below the gauge, from 0 to
   80 psi, with atmospheric pressure marked, the absolute pressure marked
   and the gauge pressure bracketed between them (archetype 3, number line
   and instrument); the ruler is fixed from the slider maximum and never
   follows the slider · 2D. Readout: $\kPabs = \kPg + \kPatm$ with the live
   numbers in psi and the result in kPa; small line saying what the pointer
   is doing, that below atmospheric pressure the bellows are squeezed and
   the pointer reads negative, and that at −14.7 psi the absolute pressure
   is zero, the smallest there is. Labels: the bellows, the spring, the
   pivot and the pointer named once each beside themselves as the book
   names them, five labels that never move, so labels are on. The bellows
   are ink with a soft fill; the force on their face is the `force` hue and
   the pressure arrow into the stem the `pressure` hue. Draws pressure,
   force.
2. `sim-manometer` · replaces Figure 11.14 (a), (b) and (c), the manometer
   level, raised by the balloon and lowered by the peanut jar, one image
   under one number and so not a fold · manometer, gauge-pressure,
   absolute-pressure, pressure-from-weight-of-fluid · variation by slider
   and intuition: the source pressure is the cause and the height
   difference is the reading, and sliding the one through zero shows the
   other change sign, which the book's three panels can only show at three
   points; and the choice of fluid shows why the fluid matters, since at a
   blood pressure a water column runs off the top of the tube while a
   mercury column stays readable, which is the third conceptual question ·
   **still**: a manometer settles and stays, and the figure answers its
   controls and registers no cycle · $\kPg$ of the source (−10 to 20 kPa,
   default 0.490, pressure), with soft detents at −6.65 kPa, the peanut
   jar of the problem set (50.0 mm Hg below atmospheric), at 0, both sides
   open, at 0.490 kPa, the balloon of the problem set (5.00 cm of water),
   and at 16.0 kPa, a systolic pressure of 120 mm Hg; and a choice of the
   fluid in the tube (rule 26.1: a substance is a state, not a quantity),
   water, ethyl alcohol, glycerin or mercury at the densities of Table
   11.1, water by default because the problem set's balloon manometer
   holds water. The default reproduces that problem on load: 0.490 kPa in
   water is a difference of 5.00 cm · "The balloon is 0.490 kPa above
   atmospheric pressure, so the water stands 5.00 cm higher on the open
   side." · none: the U-tube with its two levels, the meter stick, the
   bracket $\kh$ and the source is the whole picture · 2D, flat (root rule
   28.1). The scene scale is fixed from the slider maximum in mercury,
   0.150 m across the two levels, at 2000 canvas units to the metre, and
   never follows a slider; a level that a lighter fluid would carry past
   the end of a leg is pinned at that end as a hollow marker with the true
   height written beside it (`pinned()`), so the water column of 1.63 m at
   120 mm Hg is seen to run off the tube rather than the tube growing to
   hold it. Readout: $\kPg = \kh\krho\kg$ with the live numbers, and
   $\kPabs = \kPatm + \kh\krho\kg$; small line giving the same reading in
   centimetres of water or millimetres of mercury as the problem set asks
   for it, and, when the column is pinned, the height the tube would need.
   Labels: the two legs named once, the source named as the balloon, the
   jar or open, and $\kh$ on its bracket, so labels are on. The fluids are
   drawn as themselves, a colour that is the physical fact and not a hue
   of the scheme (root rule 7; `ch11/COLOR.md`): mercury the silver of
   `#a9b2bd`, and the three colourless liquids the pale blue `#bfe0f2` the
   book prints its water in, told apart by the label, since a colourless
   liquid has no colour to draw. Draws pressure, position, density.
3. `fig-cuff` · Figure 11.15, the blood pressure cuff · photograph, **kept**:
   the text points at it ("as shown in Figure 11.15") and the second
   conceptual question refers to it; the book's caption and its credit
   clause are kept, width 300.
4. `sim-barometer` · replaces Figure 11.16, the mercury barometer ·
   barometer, atmospheric-pressure, absolute-pressure,
   pressure-from-weight-of-fluid · variation by slider and intuition: the
   atmosphere varies with the weather and with altitude and the column
   follows it, which is what a barometer is for and what the still cannot
   show; and the choice of fluid shows the reader why it is mercury, since
   a water barometer would stand over ten metres tall and runs straight
   off the top of the picture · **still**: a barometer stands and reads,
   and the figure answers its controls and registers no cycle · $\kPatm$
   (0 to 120 kPa, default 101.3, pressure), with a soft detent at
   101.3 kPa, one atmosphere; and a choice of the fluid, mercury or water,
   mercury by default because the book's barometer holds mercury. The
   default reproduces the book: 101.3 kPa holds up 0.760 m of mercury,
   which is the 760 mm Hg of Table 11.2 · "At 101.3 kPa the atmosphere
   holds up 0.760 m of mercury, which is 760 mm Hg or 1.00 atm." · none:
   the dish, the tube with its vacuum, the column and the bracket $\kh$ is
   the whole picture · 2D, flat. The scene scale is fixed from the slider
   maximum in mercury, 0.900 m, at 560 canvas units to the metre, and never
   follows a slider; the water column at any but the smallest pressures is
   pinned at the top of the tube with its true height written beside it,
   10.3 m at one atmosphere. Readout: $\kh\krho\kg = \kPatm$ with the live
   numbers; small line giving the same pressure in mm Hg and in atm, and,
   when the column is pinned, the height the tube would need. Labels: the
   vacuum, the dish and $\kh$, so labels are on. Mercury is the silver of
   `#a9b2bd` and water the pale blue `#bfe0f2`, as in `sim-manometer`, the
   physical fact and not a hue. Draws pressure, position, density.

Photographs: one, Figure 11.15, kept as above. No unnumbered image travels on
any card of this section.

Extra simulations (rule 15), thought through, judged and decided:

- The IV bag of Example 11.7, a bag raised above the arm until its fluid
  just enters the vein. Left: it is the manometer read the other way
  round, a gauge pressure of 2.40 kPa in a fluid of water's density held up
  by a column of 0.24 m, and `sim-manometer` set to 2.40 kPa in water
  shows that column already; the example adds no quantity the figure does
  not show.
- The cuff on the leg of a standing person, the fifth problem. Left: it is
  the pressure due to a column of blood 0.500 m tall added to the heart's
  pressure, which 11.9 builds as its own figure of blood pressure and
  height, and a figure here would answer the graded item.
- A dial with both scales printed around it at once. Left: the choice on
  `sim-aneroid` gives the same two readings of one pointer without two
  rings of numbers competing for the reader's eye.

## Tables

Table 11.2, Conversion Factors for Various Pressure Units, kept in the text
as a `div.book-table` with the book's number and title, two columns as
printed, nine rows, the units set in math as the book sets them.

## Exercises

- One item is set inline: the first conceptual question, on why the fluid
  stands level in a manometer open on both sides whatever the diameters of
  the tubes, is a short Understand check on the passage that has just said
  that atmospheric pressure pushes down on each side equally, and is
  placed after `manometer` (rule 12). Everything else is at the end.
- 3 conceptual questions, none keyed, each an open item with an AI-marked
  suggested approach: `cq1` (fs-id2010871, the level manometer with tubes
  of different diameters, Understand, inline after `manometer`), `cq2`
  (eip-id3037483, lowering the manometer, raising the arm and the cuff on
  the leg, Analyze, citing `blood-pressure`) and `cq3` (fs-id1314393, why
  mercury rather than water, Understand, citing `blood-pressure`).
- No AP item: the chapter prints all five of its AP items in 11.2 and 11.3.
- 4 problems keyed and kept: `p1` (fs-id2666940, the gauge and absolute
  pressures of the balloon in water and the jar in mercury, four numbers,
  keyed 5.00 and 1.035 × 10³ cm of water and −50.0 and 710 mm Hg, Apply),
  `p3` (fs-id2594876, the water manometer for 300 mm Hg, keyed 4.08 m,
  Apply), `p5` (fs-id2599483, the cuff on the leg 0.500 m below the heart,
  keyed 38.7 mm Hg and 159 over 119, Analyze) and `p7` (fs-id2408955, the
  area of the bicycle tires from the gauge pressure and the weight, keyed
  22.4 cm², Apply).
- 3 problems left out, having no answer in the book's key: 120 over 80
  converted through $\kPr = \kh\krho\kg$ with the discussion of an infant
  (fs-id2624790), the pressure cooker's latches (fs-id1405340) and the
  submarine's hatch (fs-id2950488). They are named in `notes` and in
  `exercise_notes`.
- Nothing is taken from another section and nothing of this section's own
  is held back, as `ch11/config.md` decided.
- No generated questions: every node of the section has a book exercise
  that tests it.
- Weights: `cq1` gives `manometer` its full value and `atmospheric-pressure`
  2; `cq2` gives `blood-pressure-measurement` its full value,
  `pressure-from-weight-of-fluid` 3 and `manometer` 2; `cq3` gives
  `manometer` its full value and `blood-pressure-measurement` 2; `p1` gives
  `manometer` and `absolute-pressure` their full values and
  `gauge-pressure` 2; `p3` gives `manometer` its full value and
  `blood-pressure-measurement` 2; `p5` gives `blood-pressure-measurement`
  its full value, `pressure-from-weight-of-fluid` 3 and `gauge-pressure` 2;
  `p7` gives `force-from-pressure` its full value and `gauge-pressure` 3,
  since the work of it is $\kF = \kPr A$ and the gauge pressure is what
  makes the tire's pressure the one to use.

## Views

- Formulas: the four equations of the section already in `chapter.json`,
  all four important (`eq-absolute-pressure`, `eq-gauge-pressure-manometer`,
  `eq-barometer`, `eq-mm-hg`); the two substitution steps of Example 11.7
  are not rows.
- Definitions: the five variables of the section ($\kPg$, $\kPabs$,
  $\kPatm$, $\kh$, $\krho$), and four glossary terms, gauge pressure,
  absolute pressure, systolic pressure and diastolic pressure.
- Concept map: the five nodes above with their edges into 11.3, 11.4 and
  11.5, and the edges out of them into 11.8, 11.9 and Chapter 12.

## Colour

The page binds pressure, density and position, as `ch11/COLOR.md` allots
it. Every figure states a pressure on its slider and in its readout;
`sim-manometer` and `sim-barometer` measure a height (position) and read a
density from their fluid choice (density). `sim-aneroid` draws the force
the pressure makes on the bellows, so it draws force as well; the page
binds force through it. The area of the bellows, the mass of the bicycle
and rider, and the diameters of the tubes stay untyped and in ink. The
fluids are drawn as themselves, mercury silver and the colourless liquids
the book's pale blue, which is the physical fact and not a hue of the
scheme, and the two hexes are named in the figure lines above.

## Wanted at chapter level

- variables `P_g` (11.6) → 11.6-gauge
- variables `P_atm` (11.6) → 11.6-gauge
- variables `P_abs` (11.6) → 11.6-absolute
- variables `h` (11.6) → 11.6-manometer
- variables `ρ_dens` (11.6) → 11.6-manometer
- equations `eq-absolute-pressure` → 11.6-absolute
- equations `eq-gauge-pressure-manometer` → 11.6-manometer
- equations `eq-barometer` → 11.6-barometer
- equations `eq-mm-hg` → 11.6-blood-pressure
- The cross reference to Pascal's Principle in `gauge` is plain text; if the
  chapter pass links same-chapter references, it points at 11.5.
- Nothing is wanted of the concept rows: the five nodes and their edges
  stand as the prep pass wrote them.

Applied in the chapter pass (2026-09-14). The five variable anchors and
the four equation anchors are written as listed. The reference to Pascal's
Principle stays plain text, as every cross reference of the built book is;
`ch11/config.md` now says so. The two hexes the figures carry, mercury's
silver and the pale blue of a colourless liquid, are the physical fact of
root rule 7's third family and stand.
