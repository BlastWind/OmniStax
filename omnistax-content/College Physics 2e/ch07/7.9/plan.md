# Plan: 7.9 World Energy Use (m42154)

Source: `source.md` (converted from CNXML); Table 7.6's title and the
figure numbers 7.26 to 7.29 come from `ch07/exploration.md`, since the
converter drops a table's title and the bundle's file names run on the
old edition's chapter 8. Status: built 2026-09-11 without a review stop,
on Chen's instruction to finish the book in one job; the per-section stop
of rule 2, the plan review of rule 5 and the user picks of rule 15 are
replaced by this file, written before the section was built and left for
review after.

A short, qualitative closing section: no equation of its own, four
concepts, three data charts, one photograph, one numbered table, two
conceptual questions and eleven problems, six of them keyed. No worked
example, no Check Your Understanding box, no AP item, no PhET note. It
stays one page (rule 11), and it is the page that carries the chapter's
closing integrated problem set.

Because the section states no equation and holds no worked example, it is
built against `ch01/1.2`, the book's other qualitative page: the prose
carries the argument, the photographs and charts carry the evidence, and
the sims turn the charts into something the reader can ask a question of.

## Sub-concepts (page headers)

The book has four titled runs of text and an untitled opening run. One
span per run, one idea to a block, with the span ids the chapter's
variables anchor into:

1. `energy-and-society` **Energy and the quality of our lives** (book: the
   untitled opening paragraph — energy as an ingredient of every phase of
   society, consumption and production that are not sustainable, the
   31 to 35 percent of the world's energy that comes from oil, and the
   U.S. with 4.25 percent of the world's population taking 21 percent of
   its oil).
2. `sources` **Renewable and nonrenewable energy sources** (book's own
   header: the principal energy resources and how the mix has changed,
   the definition of renewable forms of energy, the definition of fossil
   fuels and the 85 percent of our energy that comes from them, the link
   between fossil fuel use and global warming). Figure 7.26 sits here.
3. `growing-needs` **The world's growing energy needs** (book's own
   header: demand tripling, Germany's plan for 2030, China and India,
   and the 2020 mix country by country). Figures 7.27 and 7.28 and
   Table 7.6 sit here. The chapter's variable `E` anchors here.
4. `wellbeing` **Energy and economic well-being** (book's own header: GDP
   per capita against energy use per capita, and the employment,
   resilience and data-centre argument for diversifying). Figure 7.29
   sits here, and the chapter's variable `P` anchors here.
5. `conserving` **Conserving energy** (book's own header: the law of the
   conservation of energy set beside the philosophy of energy
   conservation, and the degradation of energy in every transformation).

The reference to Thermodynamics at the close stays plain text, since that
chapter is not built. The learning objectives, the section summary and
the two glossary rows come out of the running text into the views.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| renewable-energy | idea | sources | the glossary row; Figure 7.26; Table 7.6 and the sim built on it; Figure 7.28 |
| fossil-fuels | idea | sources | the glossary row; the 85 percent; Figure 7.26; Figure 7.27 |
| energy-and-economic-wellbeing | idea | wellbeing | Figure 7.29; Table 7.6 |
| energy-degradation | idea | conserving | the closing passage; both conceptual questions |

`energy-and-society` opens on the shares of oil, so it uses
`fossil-fuels`; `growing-needs` comes back to both `fossil-fuels` and
`renewable-energy`; `conserving` uses `conservation-of-energy` and
`efficiency`, which are 7.6's. Three of the four nodes have no exercise
of the book's own that tests them: the section's whole problem set is the
chapter's closing integrated set and not one item asks about renewable
resources or world energy use. No question is generated for them
(rule 13); the two conceptual questions test `energy-degradation`.

## Figures

id · replaces · concepts · what moves · sliders · headline · graph · 3D

1. `sim-mix` · replaces Figure 7.26 (the pie chart of world energy
   consumption by source) · renewable-energy, fossil-fuels · **still**:
   the mix of a year has no time in it, and the figure answers its
   slider and nothing else, so it registers no cycle and carries no
   transport · a target for the renewable share (7.2 to 80 percent,
   step 0.1, default 7.2, ink, since a percentage is untyped) ·
   "renewable sources supply 7.2% of the world's energy, and oil, coal
   and natural gas supply 87.0% of it", and once the target is raised,
   "raising renewable sources from 7.2% to 30.0% means moving 22.8
   percentage points out of oil, coal, natural gas and nuclear power" ·
   no separate graph: two hundred-percent bars are the drawing · no.
   The book's seven shares are drawn as one bar, the four nonrenewable
   sources first and the three renewable ones after a gap, with the
   renewable group bracketed; a second bar below it holds the same seven
   sources with the renewable share raised to the target, and a legend
   names every source with its share in both bars. Germany's plan to
   meet 30 percent of its overall energy needs with renewable resources
   is in the text, so the target slider asks the section's own question:
   how much of the bar has to move. Draws energy.
2. `sim-growth` · replaces Figure 7.27 (the bar chart of past and
   projected world energy use) · fossil-fuels · **still**: the year is a
   slider the reader sets, not a clock the figure runs, and the chapter
   config makes the same decision for all three of this section's charts
   · the annual growth rate (0.50 to 4.00 percent a year, step 0.01,
   default 1.74, ink) and the year (1990 to 2035, step 1, default 2035,
   ink, since a calendar year names a date rather than a duration) ·
   "at 1.74% a year the world's energy use reaches 812 EJ in 2035, 2.2
   times the 373 EJ of 1990" · the graph is the figure, energy against
   year · no. The two numbers the book's chart gives, 373 EJ in 1990 and
   a projected 812 EJ in 2035, are marked as hollow points, and the
   curve is steady growth at the rate set, which passes through both at
   1.74 percent. The book's bars are not redrawn, because the bundle
   gives only those two numbers and the rest would have to be invented;
   what the figure adds instead is the rate, which is what the text
   states ("tripled in the past 50 years and might triple again in the
   next 30 years"). Draws energy.
3. `sim-country` · new (Sim) · renewable-energy,
   energy-and-economic-wellbeing · **still**: a table of one year has no
   time in it · a threshold for the renewable share (0 to 50 percent,
   step 1, default 15, ink) · "three of the eleven countries listed draw
   more than 15% of their energy from renewable sources, and Brazil
   leads with 45.8%" · no separate graph: twelve hundred-percent bars
   are the drawing · no. Every row of Table 7.6 becomes one bar, the
   hydro and other renewable columns first so that a single dashed line
   at the threshold cuts the countries that clear it from the countries
   that do not, sorted by renewable share, with each country's total in
   exajoules written beside its bar. Draws energy.
4. `fig-solar` · Figure 7.28, the solar cell arrays at a power plant in
   California (credit: Bureau of Land Management, Flickr): **keep** as a
   photograph. The text says "(See Figure 7.28.)" where it says that
   renewable energy is growing very fast, and the field of arrays is the
   thing that passage is about. Width 350.
5. `fig-gdp` · Figure 7.29, power consumption per capita against GDP per
   capita (2007, credit: Frank van Mierlo, Wikimedia Commons):
   **kept as the book prints it**, a book image with its number, its
   caption and its credit, and not transformed. The chapter config asks
   for the section's three charts to be transformed with the book's own
   numbers, and for Figures 7.26 and 7.27 that can be done, since the
   shares and the two end points are in the book. The scatter's data is
   not: neither the population nor the gross domestic product of any
   country appears anywhere in the section, and Table 7.6 gives totals
   and not per-capita figures, so a redrawn scatter would be invented
   data standing where the book's evidence stands. The book's own chart
   is kept instead, and the text points the reader at it as the book
   does. Width 500.

Extra simulations (rule 15). Thought through, then judged:

- *A day's energy budget for one household, in kilowatt-hours.* Left.
  It would be a page of numbers OmniStax made up; the section gives
  none, and 7.7 is where the cost of running a device belongs.
- *The world's oil against the world's population, country by country.*
  Left. The section gives the pair for one country only (the U.S. with
  4.25 percent of the population and 21 percent of the oil), so a chart
  of it would be one point.
- *Table 7.6 turned into a bar per country, sorted by renewable share,
  with a threshold the reader moves.* **Built**, as `sim-country`. It
  opens a view the table cannot: the table prints eleven rows of
  exajoules, and the passage beside it makes claims about shares ("about
  two-thirds of New Zealand's electricity demand is met by
  hydroelectric. Only 10% of the U.S. electricity is generated by
  renewable resources"), which the reader can check only by dividing
  eleven times. The figure does the division, orders the countries by
  it, and lets the reader ask how many clear a share they choose.
- *Energy conserved and energy degraded, one transformation after
  another.* **Built**, as `sim-degrade` (below). The closing passage is
  the section's fourth concept and both conceptual questions test it,
  and it is the one idea here with nothing at all to look at: the text
  says that the total never changes while the part able to do work
  falls away, and a picture of a bar whose length never changes while
  its useful part shrinks says that in one glance. The second
  conceptual question's 35 percent coal-fired plant is the default.
- *A Sankey diagram of the whole United States energy flow.* Left. The
  data is not in the book and the drawing layer has no flow primitive.

6. `sim-degrade` · new (Sim) · energy-degradation · **still**: the
   transformations are counted, not clocked, so the figure answers its
   sliders and registers no cycle · the efficiency of each transformation
   (10 to 90 percent, step 1, default 35, ink, since an efficiency is a
   ratio of two energies and stays untyped, as the coefficients of
   friction of 5.1 do) and the number of transformations (1 to 5, step 1,
   default 3, ink) · "after 3 transformations at 35% each, 4.3 J of the
   original 100 J can still do work, and the other 95.7 J has been
   degraded to waste heat" · no separate graph · no. One row per stage,
   every row the same length, the part still able to do work at the left
   in the energy hue and the part degraded to waste heat at the right in
   the same hue at low alpha, with the fixed right-hand edge labelled so
   that the reader sees the total never move. Draws energy.

Figures that serve exercises, both carried on their exercise cards as the
book prints them, with no sliders and no number, as 7.1 and 3.2 do:

- the woman doing push-ups (`Figure_08_09_06a.jpg`), on the first
  problem, which asks for the force she exerts;
- the swimmer's stroke (`Figure_08_08_06a-6b66.jpg`), on the third
  problem, which sends the reader to the figure of 7.8's problem set.
  7.8 copies the file into `media/ch07/`; this section copied it with
  `cp -n` in case 7.8 had not run yet, and neither copy overwrites the
  other.

The graph of $W$ against $x$ inside the Critical Thinking item's solution
(`OSX_CP2e_Figure_07_09Sol_CTQ01c.jpg`) goes to 7.2 with that item.

## Table

One, Table 7.6 Energy Consumption—Selected Countries (2020), in
`growing-needs`, in a `div.book-table` with the book's number and the
title the converter dropped, every cell as the CNXML prints it, Egypt's
coal cell included, which the book prints as "0.0%" in a column of
exajoules. The columns of a row do not always add to the row's total
(Russia is 0.4 EJ out, several others 0.1 EJ), so `sim-country` computes
each share against the sum of that row's six source columns and prints
the book's own total beside the bar; the table itself is printed as the
book prints it.

## Exercises

Eleven problems and two conceptual questions in the book's own set, and
one item held for another section.

- 2 conceptual questions, neither keyed, each with an AI-marked suggested
  approach: `cq1` (the difference between energy conservation and the law
  of conservation of energy, with examples), set **inline** after
  `conserving`, since it is an Understand check on the passage it
  follows; `cq2` (what we mean by calling energy conserved when a
  coal-fired plant is 35 percent efficient), at the end.
- 5 problems keyed and kept, all of them the chapter's closing integrated
  set, tagged with the concepts across the chapter they draw on:
  `p1` (the push-up, Integrated Concepts, with the book's figure on the
  card), `p2` (the swimmer, with 7.8's figure on the card), `p3` (the
  elevator cable), `p4` (the exercise bicycle and body fat, Unreasonable
  Results), `p5` (the basketball player).
- 5 problems left out, having no answer in the book's key: the
  cross-country skier (`fs-id2090970`), the toy gun and its spring
  (`fs-id1687884`), the car advertisement (`fs-id1279346`, Unreasonable
  Results), and the two Construct Your Own Problem items (`eip-211`, the
  stairs, and `fs-id2410748`, people pedalling generators), which ask the
  reader to write the problem and have no answer to key. That is five
  of the eleven problems left out, five kept, and one held for 7.2. The chapter's exploration expected both
  Unreasonable Results items to be keyed; only the body-fat one is.
- 1 item held for another section: the Critical Thinking item
  (`exer-86622`, two boxes released by two pistons) turns on the work
  done by a varying force as the area under a force-distance graph and
  on the work-energy theorem, both of them 7.2's. It is keyed, and 7.2
  carries it with `source_section: "7.9"` and the graph from its
  solution. Both sections' `exercise_notes` say so.
- Nothing is taken from another section into this one, and nothing is
  left out for belonging to a chapter the app has not built.
- No generated questions. `renewable-energy`, `fossil-fuels` and
  `energy-and-economic-wellbeing` have no book exercise of their own, as
  above.
- Weights: the push-up problem asks for a force, a work and a power, and
  the force is the greater part of the work, so `useful-work` is given
  weight 2 there; the body-fat item is about a metabolic rate and only
  names power in passing, so `power` is given weight 2.

## Views

- Formulas: none. The section states no equation, so it puts no row on
  the formula sheet; the variables `E` and `P` are already in
  `chapter.json` and only want their anchors.
- Definitions: the variables `E` and `P`; the glossary rows for renewable
  forms of energy and fossil fuels.
- Concept map: the four nodes above, with `conservation-of-energy` and
  `efficiency` (7.6) tagged on the closing passage.

## Colour

The page binds energy, and nothing else. Every sim draws a quantity of
energy or a share of one, so the bars, the curve and the readouts are in
the energy hue; the percentages, the efficiency, the growth rate, the
year and the count of transformations are untyped and stand in ink, as
the chapter config decided. The `power` type the chapter added is not
bound here: the one power on the page is the axis of Figure 7.29, which
is kept as the book's own image, so nothing on this page draws it. No
new hue and no new macro.

## Wanted at chapter level

- variables `E` → 7.9-growing-needs
- variables `P` → 7.9-wellbeing

**Decided in the chapter pass, 2026-09-11.** Both anchors asked for above are
written into `ch07/chapter.json`.

The plan is right that `ch07/exploration.md` had the answer key wrong: only one
of the two Unreasonable Results items is keyed, the exercise bicycle and body
fat (`fs-id1975735`), and the car advertisement (`fs-id1279346`) is not.
`exploration.md` now says so, and this section's `exercise_notes` already did.
