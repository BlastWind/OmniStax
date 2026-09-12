# Plan: 7.6 Conservation of Energy (m42151)

Source: `source.md`, converted from the CNXML with `tools/cnxml2md.py`; the
two tables' titles come from `ch07/exploration.md`, since the converter drops
them. Status: built 2026-09-11 without a review stop, on Chen's instruction to
finish the book in one job.

The section that stops adding up one kind of energy at a time and writes the
whole account down. Its narrative is short: the law in words, the general
equation with a term for every other form of energy, the forms themselves,
the six-step strategy the rest of the chapter's problems refer back to, the
conversions that go on all the time, and efficiency. What it has to draw is
thin: one photograph, two numbered tables and no sketch at all. One page
(rule 11).

## Sub-concepts (page headers)

The book's own headers are the split, with the boxed strategy given a header
of its own so that 7.4's and 7.7's problems have somewhere to point:

1. `law` **The law of conservation of energy** (book: Law of Conservation of
   Energy; the statement, and the two major types of energy the chapter has
   built, mechanical energy $(\kKE + \kPEtot)$ and the energy transferred by
   the work done by nonconservative forces $\kWnc$).
2. `other-energy` **Other forms of energy than mechanical energy** (book:
   Other Forms of Energy than Mechanical Energy; the lumping of everything
   else into $\kOE$, the general equation, the boxed note Making Connections:
   Usefulness of the Energy Conservation Principle, and the person who eats).
   The equation `eq-conservation` and the variables $\kOE$, $\kOEi$, $\kOEf$,
   $\kKEi$, $\kKEf$, $\kPEi$, $\kPEf$ and $\kWnc$ anchor here.
3. `forms` **Some of the many forms of energy** (book: Some of the Many Forms
   of Energy; electrical, chemical, radiant, nuclear and thermal energy, and
   Table 7.1 with its range of energies).
4. `strategy` **Working a problem through the energy strategy** (book: the
   boxed note Problem-Solving Strategies for Energy, kept verbatim with the
   book's six numbered steps and both of its equations). 7.4's pogo-stick
   problem and 7.7's car-on-a-slope problem point a reader back at this note,
   so it keeps a header and an id of its own.
5. `transformation` **The transformation of energy** (book: Transformation of
   Energy; the chain from coal to electricity, the solar cell that runs a
   motor, and Figure 7.19).
6. `efficiency` **Efficiency** (book: Efficiency; the definition, and
   Table 7.2). The equation `eq-efficiency` and the variables $\text{Eff}$,
   $\kWout$ and $\kEin$ anchor here.
7. `exercise-figures` **The scene a question refers to** (the unnumbered
   drawing of the car coasting down to a gas station that the first
   conceptual question is set on, as 4.7 and 6.3 gather theirs).

The two tables stay in the text as `div.book-table` with the book's number and
title, never a `<figure>`: Table 7.1 Energy of Various Objects and Phenomena
in `forms` and Table 7.2 Efficiency of the Human Body and Mechanical Devices
in `efficiency`. The converter folded Table 7.2's footnote into its second
heading, so the heading reads "Efficiency (%)" and "Representative values" is
printed under the table, as the book prints it. The reference the converter
flattened to `[ref:import-auto-id2866785]` is written as what the book prints,
"Table 7.1", in both places it appears, and `[ref:import-auto-id1330125]` as
"Table 7.2" and `[ref:import-auto-id1626980]` as "Figure 7.19". The PhET note,
Masses and Springs, is dropped and named in `notes`, as the chapter config
decided. Learning objectives, the section summary, the glossary and the key
equations come out of the running text into the tables and the views.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| conservation-of-energy | result, eq-conservation | law | the statement of the law, the general equation, eight AP items, the rock from the bridge |
| forms-of-energy | idea | forms | the five defined forms and their glossary rows, Table 7.1, CQ 4 |
| energy-problem-solving | skill | strategy | the six numbered steps; 7.4's and 7.7's problems ask a reader to follow them |
| energy-transformation | idea | transformation | the coal chain, the solar cell and Figure 7.19, CQ 1, CQ 2 and CQ 5 |
| efficiency | result, eq-efficiency | efficiency | the definition, Table 7.2, CQ 3 |

`conservation-of-energy` was one of the four placeholders that had pointed at
this chapter since Chapter 16 was built; it is this section's, and the
prerequisite edges the chapter staged run back to
`work-by-nonconservative-forces` and `conservation-of-mechanical-energy` of
7.5 and 7.4. The section also leans on `mechanical-energy`,
`kinetic-energy`, `gravitational-potential-energy`, `nonconservative-force`
and `problem-solving-steps`, and the coverage rows mark those as used where
the text uses them.

## Figures

id · replaces or Sim · concepts · what moves, or still and why · sliders ·
headline · graph · 3D

1. `sim-account` · Sim, since the section draws no scene of its own ·
   conservation-of-energy, energy-problem-solving · **moves**: the section's
   own example of other energy is the person who eats, so a climber walks up
   a flight of stairs while the account beside her is kept; her food energy
   $\kOE$ falls, her gravitational potential energy rises with her height,
   her kinetic energy holds steady at the speed she walks, and the rest of
   what her body spends leaves as thermal energy, which is other energy as
   well; the idea has a time in it, since the account is accumulating as she
   climbs, so it loops once per climb and gets the scrubber · the height
   $\kh$ she climbs (2.0 to 20.0 m, default 8.0, position), her walking speed
   $\kv$ (0.4 to 2.0 m/s, default 1.0, velocity), her mass $m$ (40 to 110 kg,
   default 65, ink) and the efficiency of her body (5 to 25 %, default 20,
   ink, since a ratio of two energies stays in ink; the stairs rise at
   $30^\circ$, so she gains height at half her walking speed) · "t = 8.0 s ·
   she has climbed 4.0 m of the 8.0 m and spent 12.7 kJ of the 25.5 kJ", and
   at the end of the climb "she has climbed the whole 8.0 m on 25.5 kJ of
   food energy, 5.1 kJ of it now height" · graph beside the tall scene: the
   four energies stacked against time, the stack level all the way across,
   since the total is what does not change · no. Readout: $\kKEi + \kPEi + \kWnc + \kOEi =
   \kKEf + \kPEf + \kOEf$ with the numbers; small line saying that no outside
   nonconservative force does work on the climber and the Earth together, so
   $\kWnc$ is zero here and every joule she loses from her food is one she has
   put somewhere else. Draws energy, position, velocity and time.
2. `sim-ladder` · Sim · forms-of-energy · **still**: the table's energies
   answer the two sliders and nothing else, and there is no time in a list of
   energies (rule 14) · the row of Table 7.1 to mark (0 to 22, default the
   gallon of gasoline, ink) and the row to compare it with (0 to 22, default
   the 1000-kg car at 90 km/h, ink) · "1 gallon of gasoline carries
   $1.2\times 10^{8}$ J, which is 387 times the energy of a 1000-kg car at
   90 km/h" · none: the ladder is the picture · no. Readout: the ratio of the
   two energies written out; small line on the span of the whole table, from
   the energy that breaks one DNA strand to the Big Bang, which is 87 powers
   of ten. Draws energy.
3. `sim-conversion` · Sim · energy-transformation, efficiency · **still**: a
   conversion's efficiency is a ratio and has no time in it, and the figure
   answers its sliders and nothing else (rule 14) · the energy put in $\kEin$
   (1 to 100 MJ, default 10, energy), the device the energy passes through
   (any row of Table 7.2, default the coal power plant, ink) and a second
   device to pass the useful output through (any row of Table 7.2 or none,
   default none, ink; set the first to the solar cell and the second to the
   electric motor and the figure is the book's own chain from sunlight to the
   turning of a motor) · "a coal power plant turns 10.0 MJ into 4.20 MJ of
   useful energy, and the other 5.80 MJ leaves as thermal energy" · none: the
   branching bar is the picture · no. Readout:
   $\text{Eff} = \kWout / \kEin$ with the numbers; small line giving the
   efficiency of the whole chain as the product of the two, when a second
   device is set. Draws energy.
4. `fig-solar` · photograph, Figure 7.19, kept · the text points the reader at
   it ("Sunlight impinging on a solar cell (see Figure 7.19) produces
   electricity"), and it shows the thing the passage is about, so rule 14
   keeps it, with the book's caption and its credit to NASA · `widths` [300],
   the width the CNXML gives the image.
5. `fig-car` · the unnumbered drawing the first conceptual question is set on,
   copied faithfully with the book's own positions and nothing else; the
   eyebrow reads "Figure" with no number, since the book numbers no figure
   inside an exercise · **still**: it answers nothing and shows the reader
   what the question is about (rule 14) · no sliders · "the car accelerates
   down the first hill, coasts on over the crest, runs down the second hill
   and brakes to a stop at the gas station" · none · no. `widths` [500]. The
   book's image is carried on the question's card as well. Draws nothing.

The section has no sketch figure of the book's to replace and folds nothing:
its one numbered figure is a photograph and its other image sits inside a
conceptual question.

Extra simulations (rule 15), considered and left:

- A closed system drawn as a box with the energy crossing its boundary, for
  the two AP items that ask which systems are closed. The answer to those is
  a judgement about what is inside the boundary rather than about a quantity
  that varies, and `sim-account` already draws the boundary it needs by
  keeping every joule inside one level stack. Left.
- A round of the coal chain drawn step by step, chemical to thermal to
  mechanical to electrical, with an efficiency on each arrow. The book gives
  one efficiency for the whole plant and none for its steps, so the numbers
  on the arrows would be invented. `sim-conversion` chains two devices the
  book does give figures for, which is the book's own solar-cell example.
  Left.
- A bar of a day's food energy split among the things a body spends it on.
  That is 7.8's material, and Table 7.5 is where its numbers are. Left.

Built: none beyond the three figures the section's own ideas call for above.

## Exercises

- The chapter prints no Check Your Understanding box anywhere, so nothing of
  the book's own fills the inline place. The fourth conceptual question, which
  asks the reader to list four forms of energy and a conversion from each, is
  plainly an Understand check on the passage that names them, so it is placed
  inline after `forms`, as the chapter config allows.
- 8 AP items kept, `ap1` to `ap8` in the book's order: `ap1` (fs-id2713007,
  the dart gun that loses energy to friction in the barrel, keyed, a graded
  choice), `ap2` (fs-id1365681, why the crane's load and the pushed object
  both begin and end at rest, unkeyed, open with an AI-written approach),
  `ap3` (fs-id1422967, the two wagons joined by a stretchy rope, keyed, a
  graded choice), `ap4` (fs-id1224844, how the potential and kinetic energy
  of the two wagons trade over time, unkeyed, open with an AI-written
  approach), `ap5` (fs-id1426819, which of four systems are closed; the book
  keys two of the four, "(c), (d)", which a graded choice cannot carry, so it
  is an open item with the book's own key as its solution), `ap6`
  (fs-id2334422, describe a real-world closed system, unkeyed, open with an
  AI-written approach), `ap7` (fs-id1640289, the rock that falls 10 m through
  air resistance, keyed, a graded choice) and `ap8` (fs-id2790720, the water
  behind a dam, unkeyed, open with an AI-written approach).
- 2 AP items held for 7.1, which introduces what they test, and left out here
  with `exercise_notes` saying so: fs-id772532, the mule pulling a barge with
  1200 N at 20° over 10 km, which is $\kW = \kF\kd\cos\theta$ and nothing
  else, and fs-id2338574, describe an instance today in which you did work.
  7.1 is built and carries both with `source_section: "7.6"`.
- 2 AP items that could have gone to 7.5 stay here: fs-id2713007 and
  fs-id1640289 are both
  ${\text{KE}}_{\text{i}}+{\text{PE}}_{\text{i}}+{W}_{\text{nc}}={\text{KE}}_{\text{f}}+{\text{PE}}_{\text{f}}$,
  which 7.5 states, but this section states that equation in its most general
  form and has few keyed items of its own, and the exploration's judgement is
  kept.
- 5 conceptual questions, `cq1` to `cq5`, none of them keyed, each with an
  AI-written suggested approach marked as such: `cq1` (fs-id2075302, the car
  that coasts downhill, over a crest and into a gas station, with the book's
  drawing on the card and `fig-car` in the text), `cq2` (fs-id1471362, the
  javelin), `cq3` (fs-id2098120, whether an efficiency of less than one breaks
  the conservation law), `cq4` (fs-id1172158, four forms of energy and a
  conversion from each, placed inline) and `cq5` (fs-id1528780, the energy
  conversions of a bicycle ride).
- 3 problems kept, the ones the book keys: `p1` (fs-id1626731, how many DNA
  strands one electron of a television beam could break, a number from
  Table 7.1), `p2` (eip-309, showing that the rock thrown from the bridge
  strikes the water at 24.8 m/s whichever way it is thrown, which asks for the
  steps rather than the number, so it is an open item with the book's own
  working as the answer to compare with) and `p4` (fs-id1523087, how long one
  millionth of the oceans' fusion energy would last, keyed for (a) as a number
  with the book's whole answer including (b) in the solution).
- 1 problem left out, having no answer in the book's key: problem 3
  (fs-id1594186, how many nine-megaton fusion bombs a year's energy needs
  would take).
- No generated questions: every node of the section has a book exercise.
- Weights: `p1` and `p4` read a value off Table 7.1 and compare it with
  another, so `forms-of-energy` takes the full value and nothing else is
  tagged; `ap1` and `ap7` give `conservation-of-energy` the full value and
  `work-by-nonconservative-forces` weight 2, since the friction term is one
  line of the account; `ap3` and `ap4` give `elastic-potential-energy` and
  `kinetic-energy` weight 2 beside the full value for
  `conservation-of-energy`; `cq1` gives `energy-transformation` and
  `forms-of-energy` their full value and `nonconservative-force` weight 1,
  since friction is named and not calculated; `p2` gives
  `conservation-of-mechanical-energy` its full value and
  `energy-problem-solving` weight 2.

## Views

- Formulas: the two equations of the section already in `chapter.json`, both
  important. The equation the strategy's step 3 restates is 7.4's
  `eq-cme` and the one its step 4 restates is this section's own
  `eq-conservation`, so neither adds a row.
- Definitions: the eleven variables of the section; the seven glossary terms.
- Concept map: the five nodes above with their edges into 7.1, 7.2, 7.3, 7.4,
  7.5 and 2.6.

## Colour

The page binds energy, position, velocity and time. Energy is everywhere: the
account of `sim-account` is four energies stacked, the ladder of `sim-ladder`
places energies on a logarithmic axis, and the bar of `sim-conversion` splits
one energy into two. Position is the height the climber gains, bracketed
beside her, and velocity is the speed she walks, drawn as an arrow and stated
in the headline; time is the clock the climb runs on. Her mass, the efficiency
of her body and the efficiencies of Table 7.2 stay untyped and in ink, as
Chapter 5's coefficients of friction do.

## Wanted at chapter level

- variables `OE` → 7.6-other-energy
- variables `OE_i` → 7.6-other-energy
- variables `OE_f` → 7.6-other-energy
- variables `KE_i` → 7.6-other-energy
- variables `KE_f` → 7.6-other-energy
- variables `PE_i` → 7.6-other-energy
- variables `PE_f` → 7.6-other-energy
- variables `W_nc` → 7.6-other-energy
- variables `Eff` → 7.6-efficiency
- variables `W_out` → 7.6-efficiency
- variables `E_in` → 7.6-efficiency
- equations `eq-conservation` → 7.6-other-energy
- equations `eq-efficiency` → 7.6-efficiency
- Nothing else is wanted: the chapter staged every concept, symbol and macro
  this section needed, and `power` is 7.7's.

**Decided in the chapter pass, 2026-09-11.** Every anchor asked for above is
written into `ch07/chapter.json`, the eleven variable rows and the two equation
rows, and nothing else was wanted at book level, as the plan says.

Table 7.2's footnote, "Representative values", is set as a `<p class="tnote">`
under the table, which is what Chapter 4 does with Table 4.1's footnote and
what 7.8 now does with Table 7.5's.
