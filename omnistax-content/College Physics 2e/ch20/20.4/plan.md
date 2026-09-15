# Plan: 20.4 Electric Power and Energy (m42714)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's instruction to finish the book in waves;
the per-section stop of rule 2 and the plan review of rule 5 are replaced by
this file, written before the section was built and left for review after,
as `ch20/config.md` records.

The section that turns the current and the voltage of the three sections
before it into a rate of energy. Electric energy depends on the charge moved
and the voltage it is moved through, $\text{PE} = qV$, and power is the rate
at which energy is moved, so the electric power is simply the current times
the voltage. Substituting Ohm's law into that product gives two further
expressions, $\kP = \kV^2/\kRes$ and $\kP = \kIcur^2\kRes$, and the section's
whole difficulty is that one of them says the power falls when the resistance
rises and the other says it climbs: the first holds a voltage fixed and the
second holds a current fixed, and each is the right one to reach for in its
own circumstance. The second half is the reader's electric bill: since
$\kP = \kE/\kt$, a device using power $\kP$ for a time $\kt$ uses energy
$\kE = \kP\kt$, billed in kilowatt-hours, and the cheapest way to use less of
it is to light a room with something other than a hot wire. One photograph
(Figure 20.13), two boxed notes, two worked examples, no glossary term beyond
electric power, no Check Your Understanding box, two conceptual questions,
two AP items and 32 problems of which 14 are keyed, with one keyed problem
brought in from 20.1. One page (rule 11).

## Sub-concepts (page headers)

The module prints both headers itself, and `ch20/config.md` keeps them as the
book writes them (rule 3).

1. `power-in-electric-circuits` **Power in Electric Circuits** (book: the
   opening paragraph on the 25-W and the 60-W bulb with Figure 20.13; the
   derivation $\kP = \text{PE}/\kt = q\kV/\kt$ and $\kP = \kIcur\kV$; the
   paragraph on the watt, the volt-ampere and the 20-A auxiliary outlet; the
   substitution of Ohm's law and the three expressions; the paragraph on what
   each of the three tells you; Example 20.7, Calculating Power Dissipation
   and Current: Hot and Cold Power). $\kP$, $\kPEtot$, $\kq$, $\kV$,
   $\kIcur$, $\kRes$, `eq-power-from-charge`, `eq-power-iv`, `eq-power-v2r`
   and `eq-power-i2r` anchor here.
2. `cost-of-electricity` **The Cost of Electricity** (book: the paragraph on
   $\kE = \kP\kt$ and the kilowatt-hour; the boxed Making Connections:
   Energy, Power, and Time; the paragraph on lighting, on fluorescent lamps
   and on LEDs; Example 20.8, Calculating the Cost Effectiveness of Compact
   Fluorescent Lights (CFL); the boxed Making Connections: Take-Home
   Experiment—Electrical Energy Use Inventory). $\kE$ and $\kt$ anchor here,
   as do `eq-energy-from-power` and `eq-kilowatt-hour`.

The two worked examples are `ex-hot-and-cold-power` (Example 20.7) and
`ex-cfl-cost-effectiveness` (Example 20.8); the numbers are the count of the
chapter's examples, three in 20.1, one in 20.2 and two in 20.3 before them.
The book's cross references are plain text: "Ohm's Law: Resistance and Simple
Circuits" and "Resistance and Resistivity" stay as words with no link, as
every other page of this book writes them. Learning objectives and the
section summary come out of the running text into the tables and views
(rule 4); the one glossary term, electric power, is bolded where the text
defines it. Both boxed notes are kept verbatim as a `div.note` with the
book's own title on the eyebrow.

Macros: $\kP$ is Chapter 7's power row, $\kE$ and $\kPEtot$ its energy rows,
$\kIcur$ and $\kRes$ this chapter's current and resistance, $\kV$ Chapter
19's voltage, $\kq$ Chapter 18's charge, and $\kt$ Chapter 2's time. The book
writes the charge in the derivation as a bare $q$ and the current as
$I = q/t$, so the charge row is used and not the $\Delta Q$ of 20.1.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| electric-power | result, eq-power-iv | power-in-electric-circuits | the derivation and $\kP = \kIcur\kV$; the 240 W auxiliary outlet; Example 20.7; problems 1, 3, 11, 13, 17 |
| power-and-resistance | result, eq-power-v2r | power-in-electric-circuits | the two substitutions and the paragraph on what each says; Example 20.7; CQ 2; AP items 1 and 2 |
| power-supplied-equals-dissipated | idea | power-in-electric-circuits | the sentence that in a simple circuit the power supplied and the power dissipated are identical; problems 5, 19, 30 |
| electrical-energy-and-cost | result, eq-energy-from-power | cost-of-electricity | $\kE = \kP\kt$, the kilowatt-hour and its conversion to joules; Example 20.8; problems 9, 11, 15, 17 |
| lighting-efficiency | idea | cost-of-electricity | the paragraph on fluorescent lamps, CFLs and LEDs; Figure 20.13; Example 20.8; CQ 1; problem 13 |

The section leans on `power` and `energy-from-power` and `cost-of-energy` and
`efficiency` (Chapter 7), `conservation-of-energy` (Chapter 7),
`energy-from-potential-difference` (19.1), `electric-current`, `ampere` and
`watt` (20.1), `ohms-law` and `simple-circuit` (20.2) and
`temperature-and-resistance` (20.3), which the coverage rows mark as used
where the text uses them.

## Figures

id · replaces · concepts · value add · moving or still · sliders and choices · headline · graph · 3D

1. `sim-power-in-a-circuit` · Sim (the book draws no circuit for its three
   expressions) · electric-power, power-and-resistance,
   power-supplied-equals-dissipated · **value add**: variation and intuition;
   the section's hard sentence is that $\kP = \kV^2/\kRes$ says the power
   falls as the resistance rises while $\kP = \kIcur^2\kRes$ says it climbs,
   and a still page can only assert that there is no contradiction. Here one
   source drives one resistor, the three expressions are computed side by
   side from the same two numbers and always agree, and the two graphs say
   which variable was being held fixed: raising the voltage at a fixed
   resistance moves the reader up a parabola, and raising the resistance at a
   fixed voltage moves them down a hyperbola. Setting the resistance to
   0.350 Ω reproduces the cold headlight of Example 20.7, 411 W and 34.3 A,
   without the reader having to imagine it · **still**: the power is a rate,
   but nothing the figure computes changes with time; the current arrows on
   the loop are notation and not a flow of carriers (rule 24.1), the figure
   registers no cycle and takes no transport (rules 14 and 24.9), and
   `ch20/config.md` puts the moving figures of this chapter in 20.1, 20.2,
   20.5 and 20.7 · the source voltage $\kV$ (voltage, 1.0 to 24.0 V, default
   12.0, the car battery of Example 20.7) and the resistance $\kRes$
   (resistance, 0.35 to 12.0 Ω, default 4.80, the hot headlight of Example
   20.7, with the cold 0.350 Ω at the bottom of the range) · "A 12.0 V source
   across a 4.80 Ω resistance drives 2.50 A and delivers 30.0 W." · two
   graphs side by side beneath the scene, which is a wide loop: the power
   against the voltage at the resistance now set, and the power against the
   resistance at the voltage now set, each with its marker pinned at the
   current value; the axes are fixed at 0 to 24 V and 0 to 12 Ω across and 0
   to 200 W up, taken from the default state rather than from the slider
   maxima, which would leave 30.0 W a line along the axis, and a state above
   200 W is pinned at the top and stated in the readout · 2D. Readout:
   $\kP = \kIcur\kV$ with the live numbers, small line giving
   $\kV^2/\kRes$ and $\kIcur^2\kRes$ as the same watts and saying that the
   power the source supplies is the power the resistor dissipates. The
   battery's label wears the voltage hue, the arrows round the loop the
   current hue, the resistor's label the resistance hue and the watts on the
   resistor the power hue; the resistor's zigzag, the wires and the frame are
   ink, as `ch20/COLOR.md` asks. Labels on: the source, the current, the
   resistor and the power, four in all and none on a moving thing. Draws
   power, current, voltage, resistance.
2. `sim-cost-of-lighting` · Sim (the book draws nothing for $\kE = \kP\kt$ or
   for the comparison of Example 20.8) · electrical-energy-and-cost,
   lighting-efficiency, electric-power · **value add**: variation and
   intuition; Example 20.8 works one bulb against one CFL at one price of
   electricity for one thousand hours, and every one of those four numbers is
   the reader's own and different. Here the two bulbs stand side by side, the
   energy each has used grows as a bar in kilowatt-hours, the running cost of
   each is written under it, and the graph carries both total costs against
   the hours, so the reader sees that the saving is not a discount but a
   widening gap, and that a higher price of electricity widens it faster ·
   **still**: the hours are a slider the reader sets and not a clock the
   figure runs; the figure reaches every state by its sliders, registers no
   cycle and takes no transport (rules 14 and 24.9) · the power of the
   incandescent bulb (power, 25 to 100 W, default 60, the bulb of Example
   20.8), the power of the compact fluorescent (power, 6 to 30 W, default 15,
   the quarter-wattage lamp of Example 20.8), the hours it is left on (time,
   100 to 4000 h, default 1000, the lifetime of the incandescent bulb) and
   the price of electricity (untyped and in ink, since money is not a
   physical quantity; 5 to 30 cents per kilowatt-hour, default 12, the price
   of Example 20.8) · "Over 1000 hours the 60-W bulb uses 60.0 kW·h and costs
   &#36;7.45, while the 15-W CFL uses 15.0 kW·h and costs &#36;1.95." · graph
   below the scene, which is horizontal: the total cost of each bulb against
   the hours it has burned, fixed at 0 to 4000 h across and 0 to &#36;40 up
   from the slider maxima at the default price, with a state above the top
   pinned there · 2D. Readout: $\kE = \kP\kt$ with the live numbers for the
   incandescent bulb, small line giving the same for the CFL, the two total
   costs and what the difference buys over the ten thousand hours the CFL
   lasts. The two power ratings wear the power hue, the energy bars and the
   kilowatt-hours the energy hue, the hours the time hue, and the prices, the
   bulbs' glass and bases and the frame are ink, as a material constant and a
   price are ink throughout this book. The four bulb prices the book gives
   are held at its own figures, 25 cents for the incandescent bulb over
   1000 hours and &#36;1.50 for the CFL over 10,000 hours, and are stated on
   the scene rather than put on sliders, since they are the example's data
   and not its physics. Labels on: the two bulbs, the two energy bars, the
   two costs and the two curves, eight in all, none of them on a moving
   thing. Draws power, energy, time.

Photographs and images:

- Figure 20.13, `Figure_21_04_01a.jpg`, the 25-W and 60-W incandescent bulbs
  beside a compact fluorescent lamp: **kept** as a `photo` row at the width
  the book prints it, 200. It is not a splash image; the section's opening
  paragraph points the reader at part (a) and asks which bulb has the higher
  resistance and which draws more current, and the paragraph on lighting
  points at part (b). The questions the caption asks are the ones the section
  answers, and `ch20/config.md` names it among the six photographs of the
  chapter that are kept.
- `Figure_21_04_03a.jpg`, the on-demand electric hot water heater, travels on
  the card of problem 11 (fs-id2670173), which is keyed.
- `OSX_CP2e_Figure_21_04_06.jpg`, the electric car being recharged in London,
  travels on the card of problem 25 (fs-id3149527), which is keyed.
- `CNX_APPhysics_20_M4_S05_img.jpg`, the circuit and its energy-against-time
  graph, travels on the card of the first AP item (fs-id3270504).
- `Figure_21_01_07a.jpg`, the defibrillation unit, travels on the card of the
  problem brought in from 20.1 (fs-id2397006), which is keyed.
- Four images are not copied, their problems having no answer in the book's
  key and being left out: the calculator's solar cells
  (`Figure_21_04_02a.jpg`, fs-id2449702), the cold vaporizer
  (`Figure_21_04_04a.jpg`, fs-id3229715) and the Hoover dam generators
  (`Figure_21_04_05a.jpg`, fs-id2051957).
- The four answer graphs of the first AP item
  (`CNX_APPhysics_20_M4_S06a_img.jpg` to `S06d`) are not copied either. An
  exercise card carries one image and the schema has no room for a second, so
  the four options are written out in words instead, exactly as the four
  graphs draw them, and the card keeps the stem image. This is the one place
  where `ch20/config.md`, which asks for all five images on the card, cannot
  be followed as written, and it is reported at chapter level below.

Extra simulations (rule 15), considered and left:

- The energy dissipated by a resistor growing along a straight line while a
  second line for twice the resistance grows at half the rate, which is the
  first AP item drawn: the cost graph of `sim-cost-of-lighting` already draws
  an energy that grows in a straight line whose slope is the power, and the
  AP item is answered by the same reading. Left.
- A filament heating up as it is switched on, its resistance climbing and its
  power falling from 411 W to 30.0 W: the rise of resistance with temperature
  is 20.3's result and 20.3's figure, and the power slider of
  `sim-power-in-a-circuit` reaches both ends of it. Left.

None built.

## Exercises

- No Check Your Understanding boxes; nothing inline, so the page carries no
  `div.exercises` host.
- 2 conceptual questions, `cq1` (fs-id2409786, why incandescent bulbs grow
  dim late in life) and `cq2` (fs-id1401443, the apparent contradiction
  between $\kP = \kV^2/\kRes$ and $\kP = \kIcur^2\kRes$), both Understand,
  both with AI-written suggested approaches.
- 2 AP items: `ap1` (fs-id3270504, the energy dissipated against time when
  the resistance is doubled, unkeyed, so an open item with its four options
  as the book draws them and an AI-marked suggested approach, the stem image
  on its card) and `ap2` (fs-id2032037, the ratio of the resistances of a
  120 W, 220 V lamp and a 100 W, 110 V lamp, keyed 10:3, a graded number).
- 14 keyed problems kept: `p1` (fs-id3223947, the lightning bolt), `p5`
  (fs-id2023489, the two extension cords, multi), `p7` (fs-id1577565, the
  units of $V^2/Ω$), `p9` (fs-id3244624, the kilowatt-hour in joules), `p11`
  (fs-id2670173, the electric water heater, with the photograph on its card),
  `p13` (fs-id3146477, the break-even price of a CFL), `p15` (fs-id1616012,
  the alkaline battery), `p17` (fs-id2383748, a hundred million televisions),
  `p19` (fs-id2409598, the loss in a kilometre of 00-gauge copper), `p21`
  (fs-id2616676, Integrated Concepts, the lightning bolt and the tree sap,
  multi), `p23` (fs-id2382586, Integrated Concepts, the surgical cauterizer),
  `p25` (fs-id3149527, Integrated Concepts, the electric car, multi, with the
  photograph on its card), `p27` (fs-id3233297, Integrated Concepts, the mass
  per kilometre of an aluminium and a copper line, multi) and `p30`
  (fs-id1546272, Unreasonable Results, transmitting 100 MW at 480 V, multi).
- 1 problem brought in from 20.1 with `source_section: "20.1"`: `p31`
  (fs-id2397006, the defibrillator's path resistance and what a larger
  voltage would do to the skin, keyed), which reads its second half straight
  off $\kP = \kIcur^2\kRes$, the expression this section states and 20.1 does
  not; both sections' `exercise_notes` say so.
- 18 problems left out, having no answer in the book's key: the truck's
  starter motor (fs-id1941660), the calculator's solar cells (fs-id2449702),
  the flashlight (fs-id2599379), the volt-ampere (fs-id3079653), the
  ampere-squared ohm (fs-id970126), the X-ray tube (fs-id3306077), the
  toaster (fs-id1915928), the 6.00-V headlight (fs-id2685078), the cauterizer
  (fs-id2603647), the thinning filament (fs-id1367358), and the Integrated
  Concepts problems on the cold vaporizer (fs-id3229715), the bottle warmer
  (fs-id1994290), the Hoover dam (fs-id2051957), the light-rail train
  (fs-id3046867), the immersion heater (fs-id3037377) and the hot tub
  (fs-id3010699), with the second Unreasonable Results problem
  (fs-id1517296) and the Construct Your Own Problem item (fs-id2667420).
- No generated questions: every node has a book exercise or a worked example.
- Weights: `p1`, `p7` and `p9` test one concept each; `p5`, `p19` and `p31`
  give `power-and-resistance` its full value and `electric-power` weight 3;
  `p11`, `p15` and `p17` give `electrical-energy-and-cost` its full value and
  `electric-power` weight 4; `p13` gives `lighting-efficiency` its full value
  and `electrical-energy-and-cost` weight 4; `p21`, `p23`, `p25` and `p27`
  give `electric-power` its full value with `electrical-energy-and-cost`
  weight 4 on `p21`, `p23` and `p25` and `power-and-resistance` weight 4 on
  `p27`; `p30` gives `power-and-resistance` its full value and
  `power-supplied-equals-dissipated` weight 4; `ap1` gives
  `power-and-resistance` its full value with `electrical-energy-and-cost`
  weight 4, and `ap2` gives `power-and-resistance` its full value with
  `electric-power` weight 3; `cq1` gives `lighting-efficiency` its full value
  with `power-and-resistance` weight 3, and `cq2` gives
  `power-and-resistance` its full value with `electric-power` weight 3.

## Views

- Formulas: the six equations of the section already in `chapter.json`, all
  of them important.
- Definitions: the four variables of the section and the one glossary term,
  electric power.
- Concept map: the five nodes above with their edges into Chapters 7 and 19
  and into 20.1, 20.2 and 20.3.

## Colour

The page binds power, current, voltage, resistance, energy and time, and
nothing else. `sim-power-in-a-circuit` carries a voltage and a resistance on
its sliders, draws the current round the loop and writes the power in three
ways; `sim-cost-of-lighting` carries two powers and a time on its sliders and
draws the energy each bulb has used. `ch20/COLOR.md` expects this page to
bind power, current, voltage, resistance and energy, and time is the sixth
because the hours slider of the second figure carries it and the readout
writes $\kE = \kP\kt$ in its hue; the chapter's variable row for $\kt$ in
this section already gives it the type. The price of electricity, the price
of a bulb, the bulbs' glass and bases, the resistor's zigzag, the wires and
every frame are ink.

## Wanted at chapter level

- variables `P` → 20.4-power-in-electric-circuits
- variables `PE` → 20.4-power-in-electric-circuits
- variables `E` → 20.4-cost-of-electricity
- variables `t` → 20.4-cost-of-electricity
- equations `eq-power-from-charge` → 20.4-power-in-electric-circuits
- equations `eq-power-iv` → 20.4-power-in-electric-circuits
- equations `eq-power-v2r` → 20.4-power-in-electric-circuits
- equations `eq-power-i2r` → 20.4-power-in-electric-circuits
- equations `eq-energy-from-power` → 20.4-cost-of-electricity
- equations `eq-kilowatt-hour` → 20.4-cost-of-electricity
- glossary `20.4/electric power` → 20.4-power-in-electric-circuits
- The first AP item (fs-id3270504) cannot keep its four answer graphs on its
  card: `ExerciseSchema` carries one `figure` and no images inside a set of
  options, so the card keeps the stem image and the four graphs are written
  out in words. `ch20/config.md`'s line asking for all five images on that
  card wants amending, or the schema wants a second image field.

Applied in the chapter pass of 2026-09-15. The four variable anchors, the six
equation anchors and the glossary line above were written to
`ch20/chapter.json`, except the glossary anchor: the `glossary` table has no
`anchor` field, so electric power takes none, and `ch20/config.md` now says
so under Anchors.

`ch20/config.md` is amended as this plan asks. Its AP test prep line now
reads that the first AP item keeps the stem's circuit-and-energy graph alone
and writes its four answer graphs out in words, since an exercise card
carries one image; the schema is left as it is, because one image per card is
the rule the other chapters of this book have built to.
