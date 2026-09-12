# Plan: 7.8 Work, Energy, and Power in Humans (m42153)

Source: `source.md`, converted from the CNXML of m42153. Status: built today,
2026-09-11, without a review stop, on Chen's instruction to finish the book in
one job; the per-section stop of rule 2, the plan review of rule 5 and the user
picks of rule 15 are replaced by this file, written before the section was
built and left for review after.

The section that turns the chapter's energy bookkeeping on the reader's own
body. It states no equation of its own: the two equations it prints sit inside
its one worked example, so the section adds nothing to the formula sheet. One
sketch figure, two photographs, two numbered tables, one worked example, four
conceptual questions, sixteen problems (eight of them keyed) and no AP item.
The chapter prints no Check Your Understanding box anywhere. One page (rule 11).

## Sub-concepts (page headers)

The book's own headers are Energy Conversion in Humans, Power Consumed at Rest
and Power of Doing Useful Work. They are the starting split, and the last
paragraph of the module, which totals up what every bodily function costs,
stands apart from the definition of useful work, so it takes a block of its
own. Four blocks:

1. `conversion` **How the body converts food energy** (book: the body as an
   energy conversion machine, the three places food energy goes, and the
   remainder that goes into body fat; Figure 7.23). The variable $\kE$ anchors
   here.
2. `at-rest` **The metabolic rate and the power consumed at rest** (book: the
   definition of the metabolic rate and of the basal metabolic rate, Table 7.4
   and the organs it divides the 85 W among, the 75 percent of the day's
   calories that go to basic functions; then the paragraph on oxygen
   consumption, the 20 kJ a litre, and what Table 7.5 holds). The variable
   $\kP$ anchors here.
3. `useful-work` **The power of doing useful work** (book: the definition of
   useful work and what it excludes, the mechanical energy $\kKE + \kPEtot$ of
   the system worked upon, drawing on fat when more energy is needed than is
   consumed, Example 7.13 on weight loss from exercising, Figure 7.24 and
   Table 7.5, which the book prints here rather than where it first cites
   them). The variables $\kt$ and $\text{Eff}$ anchor here.
4. `bodily-functions` **What every bodily function costs** (book: the many
   small muscle actions that become thermal energy, shivering, the kidneys and
   the liver, and the quarter of all the energy consumed that maintains
   electrical potentials in living cells; Figure 7.25).

The book's order is kept exactly, including Figure 7.24 and Table 7.5, which
the module prints after Example 7.13 although the oxygen paragraph cites them
before it. The terms the book marks (metabolic rate, basal metabolic rate,
useful work) are set bold in the text and go to the glossary. Learning
objectives, the section summary and the glossary come out of the running text
into the views.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| energy-conversion-in-humans | idea | conversion | Figure 7.23; Example 7.13; conceptual question 4; problem 5 |
| metabolic-rate | idea | at-rest | Table 7.4; Table 7.5; problems 1 and 5 |
| oxygen-consumption-measures-energy | result | at-rest | the 20 kJ a litre; Figure 7.24; Table 7.5; problem 7 |
| useful-work | idea | useful-work | the glossary row; conceptual questions 1, 2 and 3; problem 13 |
| body-efficiency | skill | useful-work | problems 7, 11 and 15 |

`body-efficiency` is a skill the section's narrative never carries out: the
word efficiency appears only in its questions and problems. It is introduced at
`useful-work`, which is where the section sets the work a person does on the
outside world against the food energy they must spend to do it, and where
Example 7.13 turns a day's surplus into grams of fat; the figure of that block
puts the efficiency on a slider and states $\text{Eff} = \kWout/\kEin$ in its
readout. Anchoring it there is a judgement and is recorded in the wants below.

The section leans on `conservation-of-energy` and `forms-of-energy` (7.6),
`power`, `watt` and `energy-from-power` (7.7), `efficiency` (7.6), `work`
(7.1), `nonconservative-force` (7.5), `mechanical-energy` (7.4) and
`energy-transformation` (7.6), all of which the coverage rows mark as used or
reinforced where the text uses them.

## Figures

id · replaces or Sim · concepts · what moves, or still and why · sliders ·
headline · graph · 3D

1. `sim-food-energy` · replaces Figure 7.23 (food energy into work, thermal
   energy and stored fat, with ${\kOEi} + {\kWnc} = {\kOEf}$) ·
   energy-conversion-in-humans, useful-work, body-efficiency · **still**: the
   figure splits a day's energy three ways and answers its sliders and nothing
   else; no clock runs in it and nothing travels, so it registers no cycle and
   takes no transport (rule 14) · the food energy eaten today $\kE$ (6,000 to
   18,000 kJ, default 13,000, energy), the food energy the body spends today
   $\kEin$ (6,000 to 18,000 kJ, default 12,000, energy), the efficiency
   $\text{Eff}$ with which it does useful work (2 to 25 %, default 10, ink,
   since an efficiency is a ratio of two energies) · "you spend 12,000 kJ
   today, 1,200 kJ of it as useful work and 10,800 kJ as thermal energy, and
   the 1,000 kJ you eat beyond that is stored as 26 g of fat" · no graph: the
   bar of food energy and the bar of where it went are the picture · no 3D.
   Readout: ${\kOEi} + {\kWnc} = {\kOEf}$ with the numbers, and a small line
   on the thermal energy, the fat and the 39 kJ that go into each gram of it.
   The defaults are Example 7.13's own numbers, so the figure loads showing the
   26 g the example works out; pushing $\kEin$ past $\kE$ turns the surplus
   into a shortfall, and the bar then overhangs the food eaten and is labelled
   as energy drawn from body fat, which is what the example's Discussion
   describes. Draws energy.
2. `sim-day` · Sim, replacing nothing in the book · metabolic-rate,
   oxygen-consumption-measures-energy, energy-conversion-in-humans · **moves**:
   a day runs from midnight to midnight while the energy spent accumulates
   under the power line, which is a time in the idea, so it loops once a day in
   about five seconds, holds, and takes the transport with its scrubber
   (rule 14) · the hours spent asleep at 83 W (4 to 12 h, default 8.0, time),
   the hours spent in class or studying at 210 W (0 to 8 h, default 6.0, time),
   the hours spent cycling at 400 W (0 to 4 h, default 1.0, time); whatever is
   left of the twenty-four is spent sitting at rest at 120 W, and the three
   maxima are set so that the day can never be overfilled · "14:20 · you are
   cycling at 400 W, and the day has cost 8,120 kJ so far" · the scene is a
   strip of the twenty-four hours blocked out by activity with a marker running
   along it, the graph below it is the power against the hour of the day, whose
   shaded area up to the marker is the energy spent, and a bar beneath that
   carries the day's running total against the 12,000 kJ that Example 7.13
   calls an average day's food energy · no 3D. Readout: $\kE = \sum \kP\kt$
   with the day's total, and a small line naming what each activity cost and
   how many litres of oxygen the whole day took at about 20 kJ to the litre.
   Every rate on it is a row of Table 7.5. Draws power, energy, time.
3. `fig-oxymeter` · Figure 7.24, the pulse oxymeter · **kept**: the text points
   the reader at it, "(See Figure 7.24.)", and it shows the instrument the
   passage is about, which is how oxygen use is measured. The book's caption
   with its credit clause, width 300.
4. `fig-fmri` · Figure 7.25, the fMRI scan of the vision centre · **kept**: the
   text points the reader at it, "(See Figure 7.25.)", and it shows the
   energy the brain spends recognising faces, which is what the passage is
   about. The book's caption with its credit clause, width 250.

The section has no other photograph, so nothing is dropped.

Figures that serve exercises. The book prints four unnumbered images inside
this section's problem set, and each rides on the card of the problem it
belongs to, as the exercise figures of 7.1, 7.2 and Chapters 2 to 4 do; none of
them is a sketch that could be redrawn live, so none becomes a figure row of
the text. The shot putter goes with `p3`, the swimmer's stroke with `p13` and
the step pyramid with `p15`. The *Daedalus 88* is the fourth, and its problem
has no answer in the book's key, so the problem is left out and its image is
not copied, as 7.1 left the wagon and the rescue sled. The swimmer's stroke
(`Figure_08_08_06a-6b66.jpg`) is copied once here and is wanted by 7.9's third
problem as well, which carries it on its own card from the same file.

Extra simulations (rule 15), considered and judged:

- A day's energy budget built from Table 7.5, which the chapter's config names
  as this section's candidate: the section prints sixteen rates and never adds
  any of them up, and the reader cannot see from a table that a night's sleep
  costs about as much as an hour and a half of cycling, or that the day's
  total is a number a person can eat. Watching the area under the power line
  fill also shows why a rate multiplied by a time is an energy, which is 7.7's
  result applied to the body. **Built**, as `sim-day`.
- A pie or a bar of Table 7.4's organs, the 85 W of the basal rate divided
  among the liver, the brain and the rest: it would redraw the table's third
  column and add nothing the table does not already say. Left.
- A converter from oxygen to energy, litres a minute against watts at 20 kJ to
  the litre: it is one proportionality, Table 7.5 prints both columns side by
  side, and `sim-day` already reads the day's oxygen off its energy. Left.
- The weight-loss calculator of Example 7.13 on its own, food energy in against
  grams of fat: `sim-food-energy` loads on the example's own numbers and its
  fat bar is exactly the example's 26 g, so a second figure would only repeat
  it. Left.

## Exercises

- 4 conceptual questions, `cq1` to `cq4`, Understand, none of them keyed, so
  each carries an AI-written suggested approach marked as such. `cq2`, which
  asks whether rubbing your hands together does work on the outside world, is
  a short check on the definition of useful work and stands **inline** after
  the `useful-work` block, as the chapter's config allows where the chapter has
  no Check Your Understanding box of its own; the other three are work for the
  problem set and stand at the end.
- 8 problems keyed and kept: `p1` (the pat of butter and the stairs, multi),
  `p3` (the shot putter's power, multi, with the book's photograph on the
  card), `p5` (the fat gained by sitting and sleeping all day, number), `p7`
  (the treadmill subject's efficiency, number), `p9` (the forces in the joints
  of someone landing from a ledge, multi for (a) and (b) with the book's
  whole answer including (c) in the solution, as 7.1's elevator problem does),
  `p11` (the knee bends, multi), `p13` (the swimmer's stroke, multi, with the
  book's drawing on the card), `p15` (the Great Pyramid, multi, with the book's
  photograph of the ramps on the card).
- 8 problems left out, having no answer in the book's key: the sprinter's
  power output (fs-id2501866), the out-of-condition person's efficiency
  (fs-id1844080), the daily energy need read off Table 7.5 (fs-id1525034), the
  shovelling of snow (fs-id1009686), the jogger's leg (fs-id1802434), the
  *Daedalus 88* (fs-id1593504), the mountain climber's bottled oxygen
  (eip-367) and the candy bar and the game of tennis (fs-id1655352).
- Nothing is held for another section and nothing is taken from one. Two of the
  keyed problems, the landing from a ledge (`p9`) and the swimmer (`p13`),
  could be read as 7.3's and 7.1's, since one is a stopping force found from
  the energy of a fall and the other is $\kW = \kF\kd$; the book sets both
  among the forces the human body meets, which is what this section is about,
  and this section is where the reader is ready for them, so both stay and are
  tagged with the earlier sections' concepts. The `exercise_notes` records the
  judgement.
- No generated questions: every node has a book exercise, `useful-work` and
  `energy-conversion-in-humans` through the conceptual questions and
  `body-efficiency`, `metabolic-rate` and `oxygen-consumption-measures-energy`
  through the problems.
- Weights: `p9` gives `stopping-force-from-energy` its full value and
  `useful-work` weight 1, since the item turns on the energy of the fall and
  only names the body; `p13` gives `calculate-work` and `calculate-power` their
  full value and `useful-work` weight 2; `p15` gives `body-efficiency` its full
  value and `gravitational-potential-energy` weight 2, since the potential
  energy is one step of three; `p1` gives `energy-from-power` its full value
  and `metabolic-rate` weight 2, since the rate is read straight off the table.

## Views

- Formulas: none. The section states no equation of its own, so it puts no row
  on the formula sheet; the two equations inside Example 7.13 are the example's
  arithmetic and the chapter's tables carry neither.
- Definitions: the four variables of the section ($\kP$, $\kE$, $\kt$,
  $\text{Eff}$) and the three glossary terms (metabolic rate, basal metabolic
  rate, useful work).
- Concept map: the five nodes above with their edges into 7.1, 7.5, 7.6 and
  7.7.

## Colour

The page binds energy, power and time. `sim-food-energy` carries two energies
on its sliders and draws the food eaten, the useful work, the thermal energy
and the fat as four shares of one bar, all in the energy hue and told apart by
their fill, as variants of one type are; `sim-day` carries three times on its
sliders and an hour of the day on its axis, draws the power of each activity as
a staircase in the power hue, and shades the area under it and the day's total
bar in the energy hue, since an area of watts against hours is an energy. The
efficiency is a ratio of two energies and stays in ink, as the coefficients of
friction of 5.1 do; so do the mass of a person, the hours as a count of the
day's twenty-four and the grams of fat.

## Wanted at chapter level

- variables `E` → 7.8-conversion
- variables `P` → 7.8-at-rest
- variables `t` → 7.8-useful-work
- variables `Eff` → 7.8-useful-work
- The section states no equation, so it asks for no equation anchor.
- `Eff` is anchored at `useful-work` although the section's narrative never
  uses the word: that block is where the work done on the outside world is set
  against the food energy spent to do it, and where the section's figure puts
  the efficiency on a slider. `at-rest` would do as well and is the other
  candidate.

**Decided in the chapter pass, 2026-09-11.** Every anchor asked for above is
written into `ch07/chapter.json`. `Eff` is anchored at `useful-work`, the
candidate the plan preferred, because that block sets the work done on the
outside world against the food energy spent to do it and its sim puts the
efficiency on a slider; `at-rest` is about the rate the body spends energy at,
not about the share of it that becomes work.

Table 7.5's footnote, "for a 76-kg male with typical metabolic functions", is
set as a `<p class="tnote">` under the table rather than as a second table
caption, so that it matches Table 7.2's footnote in 7.6 and Table 4.1's in 4.8.
