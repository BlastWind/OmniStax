# Plan: 7.7 Power (m42152)

Source: `source.md`, converted from the CNXML of module m42152. Status: built
2026-09-11 without a review stop, on Chen's instruction to finish the book in
one job; the per-section stop of rule 2, the plan review of rule 5 and the
user picks of rule 15 are replaced by this file, written before the section
was built and left for review after, as Chapters 1 to 3 did it.

The section that turns the chapter's bookkeeping of energy into a rate. One
sketch figure (the woman on the stairs), two photographs the text points at
(the Space Shuttle and the coal-fired plant), one numbered table (Table 7.3,
whose title the converter drops), two boxed notes, two worked examples, no
Check Your Understanding box, no AP item, three conceptual questions and
fourteen problems, seven of them keyed. One page (rule 11).

## Sub-concepts (page headers)

The book's own headers are What is Power?, Calculating Power from Energy,
Examples of Power and Power and Energy Consumption. The last of those runs
from the definition of the kilowatt-hour through the cost example and on into
two closing paragraphs about which devices are worth going after, which is a
second idea, so it is split. Five blocks:

1. `what-is-power` **What power is** (book: the images of power, Figure 7.20,
   the definition of power as the rate at which work is done, the boxed note
   Power with $\kP = \kW/\kt$ and the watt, and the 60-W bulb paragraph).
   $\kP$, $\kW$ and $\kt$ anchor here, and so do `eq-power` and `eq-watt`.
2. `calculating-power` **Calculating a power output from the energy and the
   time** (book: Example 7.11, the woman running up the stairs, with Figure
   7.21 inside it; the horsepower paragraph; the boxed note Making
   Connections: Take-Home Investigation—Measure Your Power Rating). $m$,
   $\kvf$, $\kh$, $\kg$, $\kKE$ and $\kPEg$ anchor here, and so does
   `eq-horsepower`. The example is `ex-stairs`.
3. `examples-of-power` **Examples of power** (book: the paragraph on sunlight,
   fossil fuels, the incandescent bulb and the coal-fired plant; Figure 7.22;
   Table 7.3).
4. `consumption` **Power and energy consumption** (book: the paragraph on
   paying for energy, $\kE = \kP\kt$, the kilowatt-hour, and Example 7.12 with
   the cost of running a computer). $\kE$ anchors here, and so does
   `eq-energy-pt`. The example is `ex-cost`.
5. `saving-energy` **Where it pays to save energy** (book: the two closing
   paragraphs, on reducing either the power or the time, on the compact
   fluorescent bulb, and on waste heat and the degrading of energy).

The learning objectives, the section summary and the four glossary terms come
out of the running text into the tables and the views. The cross reference to
Thermodynamics is plain text, since that chapter is not built, and it keeps the
book's own wording. The reference the converter flattened to
`[m42151](module:m42151)` in the car-on-a-slope problem is written as what the
CNXML's target says the book prints, the Problem-Solving Strategies for Energy
note of 7.6.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| power | idea | what-is-power | the boxed definition; the 60-W bulb; conceptual questions 1 and 3; every problem of the set |
| watt | idea | what-is-power | the watt in the boxed note; the horsepower paragraph; problems 3, 7, 9, 13 |
| calculate-power | skill | calculating-power | Example 7.11; problems 3, 7, 9, 13 |
| energy-from-power | result | consumption | $\kE = \kP\kt$; the kilowatt-hour; Example 7.12; conceptual question 2; problem 11 |
| cost-of-energy | skill | consumption | Example 7.12; the closing paragraphs; problem 5 |

The section leans on `work` and `joule` (7.1), `work-transfers-energy` and
`kinetic-energy` (7.2), `gravitational-potential-energy` (7.3),
`mechanical-energy` (7.4), `energy-transformation` and `efficiency` (7.6),
`elapsed-time` (2.3) and `unit-conversion` and `order-of-magnitude` (1.2), all
of which the coverage rows mark as used or reinforced where the text uses them.

## Figures

id · replaces or Sim · concepts · what moves, or still and why · sliders ·
headline · graph · 3D

1. `fig-shuttle` · Figure 7.20, a photograph, **kept** · power · still, a
   photograph · none · the book's caption and its credit clause · none · no.
   The text points the reader straight at it ("a rocket blasting off, as in
   Figure 7.20"), so rule 14 keeps it. Width 300, from the CNXML.
2. `sim-stairs` · replaces Figure 7.21 (the woman running up the stairs) ·
   power, watt, calculate-power · **moves**: the woman climbs the flight over
   the time the slider sets, and the work she has delivered accumulates on the
   graph as the clock runs, so the idea has a time in it and the figure loops
   once per climb with the scrubber · the mass $m$ (40 to 100 kg, default
   60.0, ink), the height of the flight $\kh$ (1.00 to 6.00 m, default 3.00,
   position), the time it takes $\kt$ (1.50 to 12.00 s, default 3.50, time)
   and the speed at the top $\kvf$ (0 to 4.00 m/s, default 2.00, velocity) ·
   "t = 1.75 s · she is half way up, and of the 1884 J the climb takes she has
   delivered 942 J, a rate of 538 W" · graph beside the scene, the energy
   delivered against the time, whose slope is the power, with the total split
   at the right edge into the 1764 J of climbing and the 120 J of speeding up ·
   no. The scene is a staircase and stands tall, so its graph goes beside it
   rather than below. Readout: $\kP = \kW/\kt$ with the numbers of Example
   7.11 substituted; small line on the horsepower and on where the effort
   goes. Draws power, energy, position, velocity, acceleration, time.
3. `fig-plant` · Figure 7.22, a photograph, **kept** · power · still, a
   photograph · none · the book's caption and its credit clause · none · no.
   The paragraph it closes is about the 1000 MW a coal plant produces against
   the 2500 MW it consumes, and the book sends the reader to the picture
   ("See Figure 7.22"), so it is kept. Width 300, from the CNXML.
4. `sim-power-ladder` · Sim, replacing nothing in the book · power, watt,
   order-of-magnitude · **still**: it answers its two sliders and nothing
   else, there is no time in a comparison of rates, so it registers no cycle
   and carries no transport · the mantissa (1.0 to 9.9, default 8.0, ink) and
   the exponent (−3 to 38, default 4, ink) of a power in watts ·
   "8.0 × 10⁴ W is the power Table 7.3 gives for a car" · the chart is the
   picture: a bar for each of the seventeen entries of Table 7.3 on one
   logarithmic scale from 10⁻⁴ W to 10³⁸ W, with the name in a gutter on the
   left and the book's own figure at the end of the bar · no. The power the
   sliders set is a dashed line across the chart, the entries above and below
   it are picked out in the power hue, and the factor from the line to each of
   them is written on its bar. Readout: the value in watts; small line naming
   the two neighbours and the factors. Draws power. (It was first drawn as one
   horizontal ladder with the entries as ticks on it; forty orders of
   magnitude on a single line left neighbouring entries a few units apart and
   their labels on top of one another, so the fix pass gave every entry a row
   of its own.)
5. `sim-bill` · Sim, replacing nothing in the book · energy-from-power,
   cost-of-energy · **moves**: the month runs, the meter turns, and the
   energy and the cost accumulate day by day, which is a quantity
   accumulating as a clock runs, so it loops over the thirty days with the
   scrubber · the power the appliance draws $\kP$ (0.05 to 5.00 kW, default
   0.200, power), the hours it runs each day $\kt$ (1.0 to 24.0 h, default
   6.00, time) and the price of a kilowatt-hour (0.05 to 0.40, default 0.120,
   ink) · "day 12 of 30 · the computer has used 14.4 kW·h and cost ＄1.73 so
   far" · graph below the meter, the energy in kilowatt-hours against the day,
   a step for each day's run · no. Readout: $\kE = \kP\kt$ with the numbers of
   Example 7.12; small line on the cost for the month. Draws power, energy,
   time.

Photographs, all of them: Figure 7.20 (the Space Shuttle) kept, since the
opening sentence points at it; Figure 7.22 (the coal-fired plant) kept, since
the paragraph is about what such a plant produces and wastes and the book
sends the reader to it; the Crab Nebula photograph inside problem 1 kept, on
the exercise card rather than in the text, since it belongs to the problem.
The section has no other image.

Figures that serve exercises: the Crab Nebula photograph
(`graphics4-80ec.jpg`) rides on problem 1's card with the book's caption and
its credit clause, as the crate of 7.1 and the lawn mower of 7.2 ride on
theirs. The CNXML gives it no width, so it sits at its natural size.

Extra simulations (rule 15), thought through and judged:

- A ladder of the powers of Table 7.3 with a marker that names its
  neighbours. **Built** (`sim-power-ladder`). The table runs from a pocket
  calculator at 10⁻³ W to a supernova at 5 × 10³⁷ W, forty orders of
  magnitude that a column of numbers cannot show the spacing of, and the
  section's first two problems ask for exactly the factor between two of its
  rows. The ladder is the instrument those problems want and the view the
  table cannot give.
- Two workers lifting the same load up the same stairs at different speeds,
  side by side. Left: the same work in different times is what the time
  slider of `sim-stairs` already shows, and a second scene would only say it
  twice.
- A bar of a household's appliances, each one's monthly cost, so the reader
  sees which are worth going after. Left: it would need consumption figures
  the book does not print, and `sim-bill` already answers the question for any
  appliance the reader sets.
- The 60-W bulb splitting into 5 W of light and 55 W of heat, and the coal
  plant splitting 2500 MW into 1000 MW of electricity and 1500 MW of waste
  heat. Left: it is an efficiency, which is 7.6's idea and 7.6's figure, and
  the numbers are two sentences of the text.

## Exercises

- The chapter has no Check Your Understanding box, so nothing of the book's
  own is inline. Conceptual question 1, which asks whether an appliance's
  watt rating depends on how long it is switched on, is plainly an Understand
  check on the definition of power, so it is placed inline after
  `what-is-power`, as the chapter's config allows.
- 3 conceptual questions, `cq1` to `cq3`, Understand, none of them keyed, each
  with an AI-written suggested approach, citing `what-is-power`, `consumption`
  and `what-is-power`.
- 7 problems keyed and kept: `p1` (the Crab Nebula pulsar against the
  supernova, number, with the photograph on the card), `p3` (the people
  pedalling generators, multi), `p5` (the air conditioner, number), `p7` (the
  6.00 × 10⁶ J of useful work, multi), `p9` (the 850-kg car with a 40.0 hp
  output, multi), `p11` (the battery and the pocket calculator, multi), `p13`
  (the car climbing the 2.00º slope, number, with the book's own worked
  solution, which names the Problem-Solving Strategies for Energy note of
  7.6 and which is printed as the book prints it, including the 3.00 m/s its
  list of knowns writes where the problem says 30.0 m/s).
- 7 problems left out, having no answer in the book's key: the star a
  thousand times brighter than the Sun (fs-id955671), the electric clock run
  for a year (fs-id2070989), the appliance that uses 5.00 kW·h a day
  (fs-id2297940), the dragster (fs-id1171838), the elevator motor
  (fs-id1492039), the airplane with 100 MW engines (fs-id1546639) and the
  area of solar collectors (fs-id1649741).
- Nothing is held for another section and nothing is taken from one. The
  section sets no AP item, and no AP item of another section of the chapter
  is about the rate at which work is done. Two problems of 7.8 ask for a
  power output in watts and horsepower (the sprinter, fs-id2501866, and the
  shot-putter, fs-id1636804), but both are about what a human body can put
  out, which is 7.8's subject and 7.8's table, so they stay there; neither is
  keyed in any case.
- No generated questions: every node of the section has a book exercise.
- Weights: `p1` turns on reading Table 7.3 and comparing two rates, so `power`
  keeps its full value and `watt` takes 1; `p5` turns on the cost and gives
  `energy-from-power` 2; `p13` turns on finding a power output and gives
  `work` 2, since the work comes from a force through a distance before the
  rate is taken; `cq1` gives `watt` 1 beside the full value for `power`.

## Views

- Formulas: the four equations of the section already in `chapter.json`, all
  four important.
- Definitions: the ten variables of the section; the four glossary terms
  (power, watt, horsepower, kilowatt-hour).
- Concept map: the five nodes above with their edges into 1.2, 2.3, 7.1, 7.2
  and 7.4.

## Colour

The page binds power, energy, time, position, velocity and acceleration.
Power is new to the book here: $\kP$ carries it on the bill sim's slider, the
ladder draws every entry of Table 7.3 in it, and both readouts state a power
with it. Energy is the work $\kW$ and the energy $\kE$, which the stairs sim
brackets and the bill sim accumulates; time is $\kt$, on a slider in both
moving sims and in every headline; position is the height $\kh$ of the
flight, bracketed in the stairs sim; velocity is the speed $\kvf$ at the top;
acceleration is the $\kg$ of the readout $m\kg\kh$. The mass, the mantissa
and the exponent of the ladder, the price of a kilowatt-hour and the numbers
of Table 7.3 stay untyped and in ink.

## Wanted at chapter level

- variables `P` → 7.7-what-is-power
- variables `W` → 7.7-what-is-power
- variables `t` → 7.7-what-is-power
- variables `E` → 7.7-consumption
- variables `m` → 7.7-calculating-power
- variables `vf` → 7.7-calculating-power
- variables `h` → 7.7-calculating-power
- variables `g` → 7.7-calculating-power
- variables `KE` → 7.7-calculating-power
- variables `PE_g` → 7.7-calculating-power
- equations `eq-power` → 7.7-what-is-power
- equations `eq-watt` → 7.7-what-is-power
- equations `eq-horsepower` → 7.7-calculating-power
- equations `eq-energy-pt` → 7.7-consumption

**Decided in the chapter pass, 2026-09-11.** Every anchor asked for above is
written into `ch07/chapter.json`, the ten variable rows and the four equation
rows.
