# Plan: 11.2 Density (m42187)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's instruction to finish the book without
check-ins; the per-section stop of rule 2, the plan review of rule 5 and the
user picks of rule 15 are replaced by this file, written before the section
was built and left for review after, as `ch11/config.md` records.

The section that gives the chapter its first quantity. It opens on the old
riddle of the ton of feathers and the ton of bricks, defines density as mass
per unit volume, prints the chapter's first table (Table 11.1, the densities
of thirty-six solids, liquids and gases), reads that table for what a density
says about a substance and its phase, and works one example, the mass of the
water behind a dam. One sketch figure (11.3), one photograph (11.4), one
table, one worked example, two boxed notes (Density and the Sugar and Salt
Take-Home Experiment), one glossary term, four AP items, three conceptual
questions, ten problems of which seven are keyed. One page (rule 11).

## Sub-concepts (page headers)

The module prints no header of its own, so all three are the agent's (rule 3).

1. `definition` **Density is mass per unit volume** (book: the riddle
   paragraph; the paragraph that defines density with its equation; the boxed
   Density note; the paragraph on the SI unit and the origin of the kilogram;
   Table 11.1; Figure 11.3). The variables $\krho$, $m$ and $V$ and the
   equation `eq-density` anchor here.
2. `identify` **What a density says about a substance** (book: the paragraph
   that reads Table 11.1, gold against iron against aluminum, and the phases;
   the Sugar and Salt Take-Home Experiment).
3. `reservoir` **The mass of a reservoir** (book: Example 11.1, Calculating
   the Mass of a Reservoir From Its Volume, with its strategy, solution and
   discussion; Figure 11.4). `eq-mass-from-density` anchors here.

The book gives the example no number in the CNXML; the publisher prints it as
Example 11.1, the chapter's first, and the page follows that, as 9.2 did.
Learning objectives, the section summary and the glossary term come out of
the running text into the tables and the views (rule 4). The section names no
other section and no other chapter, so nothing is linked or left plain.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| density | idea, eq-density | definition | the definition, the boxed note, Table 11.1; the rock, the gas can, the karat gold; the volleyball item |
| density-identifies-substance | idea | identify | the paragraph that reads the table for composition and phase; the conceptual question on identifying a substance; the nucleus and the neutron star |
| calculate-mass-from-density | skill, eq-mass-from-density | reservoir | Example 11.1; the troy ounce, the deep breath, the gasoline tank |

The section leans on `mass` (4.2), `units` and `derived-units` (1.2),
`weight` (4.3, in the example's discussion) and 11.1's `phases-of-matter`
and `atomic-arrangement-and-phase`; the coverage rows mark each as used where
the text uses it.

## Figures

id · replaces or Sim · concepts · value add · still or moving · sliders ·
headline · graph · 3D

1. `sim-ton` · replaces Figure 11.3, the ton of feathers and the ton of
   bricks on a balanced plank · density · variation by slider and intuition:
   the reader picks the two substances and the mass, and sees the same mass
   become two very different solid sizes, which the still can only assert ·
   **still**: a balanced plank has no time in it, and the figure answers its
   controls and registers no cycle (rule 14; the chapter's config makes the
   same decision for every figure of fluid statics) · $m$ (100 to 2000 kg,
   default 1000, the metric ton, ink), and two dropdowns for the substances
   of the two piles (rule 26.1: a substance is a discrete state, and
   twenty-three options would wrap a button row), each offering the
   single-valued solids and liquids of Table 11.1 with the density printed
   beside its name, the left defaulting to polystyrene, the lightest solid
   the table lists and the stand-in for the feathers, the right to granite,
   the stone that stands in for the bricks; the three ranged entries
   (concrete, wood, bone) are left out of the dropdowns because a range is
   not one cube. The book gives feathers and bricks no density, so no
   density is invented for them · "1000 kg of polystyrene makes a cube 2.15 m
   on a side and 1000 kg of granite a cube 0.72 m on a side, and the plank
   balances." · none: the two cubes on the level plank are the picture ·
   locked view (root rule 28.2): each pile is a cube of side $\sqrt[3]{m/\krho}$
   drawn on `view()`/`face()` from one fixed viewpoint, so its size is honest
   in three dimensions and the largest cube the sliders allow (2000 kg of
   polystyrene, 2.71 m) still fits the frame; no orbit. The scene scale is
   fixed from that maximum, 110 canvas units to the metre, and never follows
   a slider. Readout: $V = m/\krho$ for each pile with the live numbers;
   small line on the ratio of the two volumes being the inverse ratio of the
   densities. Labels: two piles, each named once beside itself with its
   volume and its density, so labels are on. Draws density. The two cubes
   are ink with a labelled outline, since a body never wears a type hue.
2. `sim-identify` · Sim (replaces nothing) · density-identifies-substance,
   density · intuition and variation by slider: Table 11.1 drawn on one
   logarithmic axis so that the solids and liquids sit in one band and the
   gases a thousand times below it, which the table's columns of numbers
   leave to the imagination, and a measured mass and volume whose density
   is drawn across it and read against the table, which is exactly how the
   section says a density identifies a substance · **still**: it answers
   its sliders and nothing else · $m$ (0.1 to 1000 g, default 240, ink) and
   $V$ (1 to 1000 cm³, default 89.0, ink), the rock of the problem set, so
   that the figure reproduces that problem on load and lands on aluminum
   and granite at once, which is what the second conceptual question is
   about; a choice of axis, logarithmic or linear (rule 26.1: a state, not a
   quantity), logarithmic by default because it is the one on which the
   gases can be seen at all, and the linear axis is there because on it the
   gases collapse onto zero, which is the sentence the text says about them
   · "A mass of 240 g in a volume of 89.0 cm³ has a density of 2.70 g/cm³,
   which is the density of aluminum and of granite." · graph alone: the
   graph is the idea · 2D. The axis is fixed: on the logarithmic scale from
   10⁻² to 10⁵ kg/m³, in decades, which holds every entry of the table from
   hydrogen to gold, and on the linear scale from 0 to 20 × 10³ kg/m³, the
   table's largest value rounded up; a measured density outside either goes
   through `pinned()`. The thirty-six substances are rows of a dot chart in
   the order of their densities, the three that the table gives as a range
   (concrete, wood, bone) drawn as a bar over the range, and their names
   stand at the left of each row as the category axis of the chart, which
   is the frame of rule 26.7 and is always shown, so no Labels button is
   needed; every dot has a hover name as well. The phases are told apart by
   the categorical palette `F.cat`, solids, liquids and gases, in a legend,
   never in the density hue the page binds. The density hue marks the
   measured value: the line across the chart, the slider readouts and
   $\krho$ in the equation. Readout: $\krho = m/V$ with the live numbers in
   g/cm³ and in kg/m³; small line naming the substances within two and a
   half percent of the value, or the nearest below and above when there is
   none. Draws density.
3. `fig-dam` · Figure 11.4, the Three Gorges Dam · photograph, **kept**: the
   example points at it ("See Figure 11.4 for a view of a large reservoir")
   and it shows the thing the example is about; the book's caption and its
   credit clause are kept, width 350.
4. `sim-reservoir` · Sim (replaces nothing) · calculate-mass-from-density,
   density · variation by slider: the worked example adds two quantities the
   section figure does not show, the surface area and the average depth
   whose product is the volume, and sliding either one shows the mass
   follow, which the example's single substitution cannot · **still**: a
   reservoir held behind a dam has no time in it · $A$ (10 to 200 km²,
   default 50.0, ink), $h$ (5 to 100 m, default 40.0, ink, the average depth
   of the reservoir, which on this page is a dimension of the scene and not
   the depth of 11.4, so it stays untyped), and a dropdown for the liquid,
   the eight liquids of Table 11.1 with water the default, since the point
   of $m = \krho V$ is that the density is looked up · "A reservoir of
   50.0 km² and average depth 40.0 m holds 2.00 × 10⁹ m³ of water, a mass of
   2.00 × 10¹² kg." · none: a plan view of the reservoir drawn to its area
   beside a section through the dam drawn to its depth, each with a scale
   bar, is the picture · 2D, flat (root rule 28.1): a slab 7 km across and
   40 m deep cannot be drawn honestly in one perspective view, so the two
   dimensions get one flat panel each. The scales are fixed from the slider
   maxima, 14.1 km across the plan and 100 m down the section, and never
   follow a slider. Readout: $m = \krho V = \krho A h$ with the live
   numbers; small line giving the weight $mg$ of the discussion, in ink
   since force is not bound on this page. Draws density. The water is a
   soft panel with a labelled outline, not a hue.

Photographs: one, Figure 11.4, kept as above. The glass of ice water that
the third conceptual question refers to is an unnumbered image and travels on
that item's card (`figure` field), as `ch11/config.md` decided; it is no
figure row. The four springs of the fourth AP item are a table inside that
item's prompt, not a chapter table.

Extra simulations (rule 15), thought through, judged and decided:

- **The table on one axis with a measured density read against it
  (`sim-identify`): built**, for the reasons in its line.
- **The reservoir (`sim-reservoir`): built**, for the reasons in its line.
- The volleyball whose radius grows by ten percent (the first AP item).
  Left: it is one cube root and a figure would answer the graded item.
- The gas can of steel and gasoline, an average density of two parts. Left:
  it is the arithmetic of one problem, and `sim-ton` with two substances
  already shows what a volume of each contributes.
- Sugar and salt, the Take-Home Experiment. Left: the book asks the reader
  to measure it and gives no value.

## Tables

Table 11.1, Densities of Various Substances, kept in the text as a
`div.book-table` with the book's number and title, six columns as printed,
the phase sub-headers as the book's italic row. The degree signs are `°`.

## Exercises

- One item is set inline: the second conceptual question, which asks for an
  example of density identifying a substance and whether more than an
  average density would be needed for a composite, is a short Understand
  check on the passage that has just said so, and is placed after
  `identify` (rule 12). Everything else is at the end.
- 3 conceptual questions, none keyed, each an open item with an AI-marked
  suggested approach: `cq1` (fs-id1417224, the density of air with altitude,
  Understand, citing `identify`), `cq2` (fs-id1613737, density identifying a
  substance, Understand, inline after `identify`) and `cq3` (fs-id1397150,
  the glass of ice water, Analyze, citing `definition`, carrying the book's
  image on its card).
- 4 AP items printed, 3 kept: `ap1` (fs-id2059915, the volleyball, keyed
  (e) and set as a graded choice, Apply), `ap2` (fs-id1866510, the foil cube,
  unkeyed, kept as an open item with its five options as printed and an
  AI-marked approach, Apply) and `ap4` (fs-id1758169, the four spheres on
  four springs, unkeyed, an open item with its table in the prompt and an
  AI-marked approach, Analyze; it leans on 16.1's Hooke's law, which is
  built, but the ranking is a density ranking and it stays here, as
  `ch11/config.md` decided). The third AP item, the polystyrene cube partly
  submerged (fs-id889976), is the fraction submerged and nothing else and is
  held for 11.7, which sets it with `source_section` 11.2; both sections'
  `exercise_notes` say so.
- 7 problems keyed and kept: `p1` (fs-id1081259, the troy ounce of gold,
  1.610 cm³), `p3` (fs-id2639547, the deep breath, keyed 2.58 g for part
  (a) with the book's own discussion of part (b) in the solution), `p4`
  (fs-id1561911, the rock in the graduated cylinder, 2.70 g/cm³), `p6`
  (fs-id1157183, the gasoline tank, keyed 0.163 m for part (a) with the
  book's answer to part (b) in the solution), `p8` (fs-id1599362, the full
  gas can, 7.9 × 10² kg/m³), `p9` (fs-id1848674, 18-karat gold,
  15.8 g/cm³) and `p10` (fs-id3101625, the nucleus and the neutron star,
  10¹⁸ kg/m³ and 2 × 10⁴ m).
- 3 problems left out, having no answer in the book's key: the flask of
  mercury (fs-id2056422), the coffee mug (fs-id1381125) and the trash
  compactor (fs-id1602523); named in `notes` and in `exercise_notes`.
- Nothing is taken from another section.
- No generated questions: every node has a book exercise that tests it.
- Weights: `p4` gives `density` its full value and
  `density-identifies-substance` 2, since the rock's density is what the
  problem asks and what it is made of is not; `p8` and `p9` give `density`
  the full value and `calculate-mass-from-density` 3, since each is a mass
  from a density on the way to an average; `p1`, `p3` and `p6` give the
  skill its full value and `density` 2; `p10` gives
  `density-identifies-substance` its full value and `density` 3, since the
  argument is about the substructure of matter; `ap4` gives `density` the
  full value and 16.1's `hookes-law` 2; `cq1` gives
  `density-identifies-substance` the full value and 11.1's
  `atomic-arrangement-and-phase` 2.

## Views

- Formulas: the two equations of the section already in `chapter.json`,
  both important (`eq-density`, `eq-mass-from-density`).
- Definitions: the three variables of the section, and one glossary term,
  density.
- Concept map: the three nodes above with their edges into 1.2, 4.2, 4.3
  and 11.1.

## Colour

The page binds `density` alone, as `ch11/COLOR.md` lists it. Every figure
draws a density: the readouts of `sim-ton` and `sim-reservoir` state it, the
dropdowns carry it, and `sim-identify` draws the measured density as the
line across its chart. Mass, volume, area, the side of a cube and the depth
of the reservoir stay untyped and in ink; the phases of `sim-identify` take
the categorical palette in a legend, never a bound hue; the weight in the
reservoir's small line is ink, since force is not bound here. No body wears a
hue: the cubes and the water are soft panels with labelled outlines.

## Wanted at chapter level

- variables `ρ_dens` → 11.2-definition
- variables `m` → 11.2-definition
- variables `V` → 11.2-definition
- equations `eq-density` → 11.2-definition
- equations `eq-mass-from-density` → 11.2-reservoir
- Nothing else: no concept or symbol row of the section needs a fix, and the
  third AP item (fs-id889976) is expected on 11.7's page with
  `source_section` 11.2.

Applied in the chapter pass (2026-09-14). The three variable anchors and
the two equation anchors are written as listed. The inline `cq2` had no host
in `text.html`, so `<div class="exercises" data-place="identify"></div>` now
closes the `identify` span, after the Sugar and Salt note, and the card
renders there. The third AP item (fs-id889976) is on 11.7's page with
`source_section` 11.2, and both sections' `exercise_notes` say so.

Figure pass, 2026-09-15 (Claude Fable 5.1). `sim-reservoir`: the liquid in both views is filled in the pale blue a colourless liquid is drawn in, the chapter's physical-fact colour that 11.6's manometer already carries (a darker liquid such as mercury takes an ink tint instead), in place of the page's grey panel that made the reservoir look like a block; the dam's label in the plan view sits beside the dam at mid-height, where it no longer runs into the depth labels of the section at the largest area. `sim-ton` and `sim-identify` unchanged.
