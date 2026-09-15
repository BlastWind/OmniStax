# Plan: 14.1 Heat (m42223)

Source: `source.md` (converted from CNXML). Status: built 2026-09-14 without
a review stop, on the chapter config's standing instruction; this file is
left for review after.

The chapter's first section and its shortest: six paragraphs, one displayed
equation, two sketch figures and no photograph, one Check Your Understanding
box, two AP items (one keyed, one not), three conceptual questions and no
problem set. One page (rule 11).

## Sub-concepts (page headers)

The book prints one header of its own, Mechanical Equivalent of Heat, kept as
the header of its span; every other header is the agent's. Five spans, one per
concept node:

1. `heat` **Heat is energy transferred because of a temperature difference**
   (book: the opening paragraph, from work and internal energy to the
   definition of heat; Figure 14.2). `heat` introduced here. The figure is
   set after the paragraph it illustrates rather than after the third
   paragraph, where the CNXML places it in the run of text: the book never
   cites it by number, and under the units header it would stand beside
   the wrong idea.
2. `heat-vs-temperature` **Heat is a form of energy, and temperature is not**
   (book: the paragraph on the common confusion). `heat-vs-temperature`.
3. `units` **The joule, the calorie and the kilocalorie** (book: the
   paragraph on units, the 14.5 °C to 15.5 °C calorie and the food calorie).
   `units-of-heat`.
4. `mechanical-equivalent` **Mechanical Equivalent of Heat** (book: its own
   header; Joule and the definition; the displayed equation
   $1.000\;\text{kcal} = 4186\;\text{J}$; the 15 °C and thermochemical
   calories; Figure 14.3; the paragraph walking the energy from the weights
   to the water). `mechanical-equivalent-of-heat`; `eq-mechanical-equivalent`
   and the variable $\kW$ anchor here.
5. `internal-energy` **Heat and work both change the internal energy**
   (book: the closing paragraph, cooking, melting ice, stirring, the ice cube
   rubbed on a rough surface, no heat content or work content). `internal-
   energy-changed-by-heat-or-work`; the Check Your Understanding box is
   hosted after it.

Cross references are plain text (Work, Energy, and Energy Resources;
Temperature, Kinetic Theory, and the Gas Laws). The converter's `º` is
written `°C` in prose and `^\circ\text{C}` in math. Learning objectives, the
summary and the three glossary terms go to the tables and views.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence on this page |
|---|---|---|---|
| heat | idea | heat | the definition; Figure 14.2; cq1, cq2; ap1, ap2 |
| heat-vs-temperature | idea | heat-vs-temperature | the paragraph on the confusion; cq1, cq3 |
| units-of-heat | skill | units | the units paragraph; no exercise of its own on this page (14.2's problem on cal/(g·°C) is the book's) |
| mechanical-equivalent-of-heat | result | mechanical-equivalent | the equation; Figure 14.3; no exercise of its own on this page (14.2's brakes and rubbed hands are the book's) |
| internal-energy-changed-by-heat-or-work | idea | internal-energy | the closing paragraph; cyu1; cq2, cq3 |

The page leans on `work`, `work-transfers-energy`, `kinetic-energy`,
`thermal-energy`, `temperature`, `thermal-equilibrium`, `forms-of-energy`,
`joule`, `unit-conversion`, `gravitational-potential-energy`, `viscosity`,
`turbulent-flow`, `conservation-of-energy` and
`friction-dissipates-mechanical-energy`, marked as used where the text uses
them. No question is generated for the two nodes without a book exercise
here (config: none).

## Figures

id · replaces · concepts · value add · motion · sliders · headline · graph · 3D

1. `sim-equilibrium` · replaces Figure 14.2 (a) and (b), the soft drink and
   the ice cube apart and in contact · heat, heat-vs-temperature · flow by
   animation and variation by slider: the reader would otherwise have to
   imagine the transfer between the two panels, and here watches it, sees
   that it runs from the hotter body whichever that is, slows as the two
   temperatures close and stops when they meet, and that nothing called
   heat is left in either body afterward · **moves** (the idea has a clock:
   contact, transfer, equilibrium): the two bodies stand apart for the first
   minute as in (a), the ice slides into contact as in (b), and from then on
   a wavy heat arrow crosses from the hotter to the colder body at a rate set
   by the temperature difference while the temperature bar beside each body
   slides toward the common value $\kTemppr$; a bar of the heat $\kQh$
   transferred so far grows in the energy hue; one contact-to-equilibrium
   run per loop, with the scrubber · $\kTempone$ of the soft drink (−20 to
   60 °C, default 30, temperature), $\kTemptwo$ of the ice (−20 to 60 °C,
   default −10, temperature) · "After 4.0 min the drink has cooled to 21.4 °C
   and the ice has warmed to −1.4 °C, and heat still flows from the drink to
   the ice." · graph below the horizontal scene: $\kTemp$ against $\kt$ for
   both bodies, $\kTempone$ solid and $\kTemptwo$ dashed in the one
   temperature hue, the level $\kTemppr$ dotted, the moving points with drop
   lines; axes fixed at 0 to 12 min and −20 to 60 °C from the slider limits ·
   2D. The two bodies are taken to hold equal amounts of energy per degree,
   so they meet halfway, and the caption says so; how unequal bodies meet is
   14.2's. The ice is a cold body that warms without melting; the caption
   sends the reader to Phase Change and Latent Heat for what melting costs.
   Readout: while heat flows, $\kTempone$, $\kTemptwo$ and the difference
   that drives the transfer; at equilibrium $\kTempone = \kTemptwo =
   \kTemppr$ and no transfer. Labels on: two bodies, two bars, one arrow.
   Draws temperature, energy, time.
2. `sim-joule` · replaces Figure 14.3, Joule's apparatus · mechanical-
   equivalent-of-heat, internal-energy-changed-by-heat-or-work · flow by
   animation and variation by slider: the weights fall, the paddles turn and
   the thermometer creeps up, which the still cannot show, and the reader
   sets the weights, the drop and the water and sees the same work warm the
   water by the amount the kilocalorie definition predicts · **moves** (the
   descent is the clock): the two weights descend the height $h$ over one
   loop while the paddle wheel turns and the thermometer column rises; the
   bar of work $\kW = 2mgh$ done so far grows in the energy hue; one descent
   per loop, with the scrubber · mass of each weight $m$ (2.0 to 20.0 kg,
   default 10.0, ink), height of descent $h$ (0.50 to 2.00 m, default 1.50,
   ink), mass of water in the can $m_\text{w}$ (0.50 to 5.00 kg, default
   1.00, ink) · "The weights have fallen 0.90 m of 1.50 m and done 176 J of
   work on the water, which has warmed by 0.042 °C." · graph beside the tall
   scene: the water's temperature rise $\kdTemp$ against the work $\kW$ done,
   a straight line whose slope is the mechanical equivalent divided by the
   water's mass, with the moving point; axes fixed at 0 to 800 J and 0 to
   0.40 °C from the slider limits · 2D. The weights fall slowly against the
   paddles' resistance, as Joule's did, so the work of gravity goes into the
   water and none stays as kinetic energy of the weights; $g$ is written in
   ink, since the page does not bind acceleration. Readout: $\kW = 2mgh$ with
   the numbers in joules and in kilocalories; small line: one kilocalorie
   warms 1.00 kg of water by 1.00 °C, so this work warms the water in the
   can by the stated rise, which the thermometer shows. Labels on: the
   weights, the thermometer, the paddles, $h$. Draws energy, temperature.

Both book figures are sketches and are replaced; there is no photograph to
keep or drop. Both figures carry the book's image as their original with its
CNXML width (250 and 350).

Extra simulations (rule 15), considered and left: an ice cube rubbed on a
rough surface warming by friction (the closing paragraph) would repeat
`sim-joule`'s lesson with a different apparatus; two identical samples, one
heated and one stirred, ending in the same state (the Check Your
Understanding box) is what the reader is asked to reason out, and a figure
would answer it for them. None built.

Figure pass (2026-09-15, Claude Fable 5.1). Every figure of the page was screenshot at its default, its slider extremes and three points of its cycle in both themes and looked at. `sim-equilibrium`: the ice was a rounded square with two stray slashes and read as nothing; it is a cube on a locked view now, three shaded faces with its name on the top face, and the heat arrow runs from inside the can's wall to the cube's front face across the contact instead of from centre to centre over both bodies; the graph's "contact" mark moved to the foot of the box, where it no longer collides with the upper starting label when a slider is at its top; the bar ticks carry a true minus sign. `sim-joule`: the label of the height h sat on the left weight through most of the descent, so the left pulley moved right and the dimension line stands clear of the weight's path with its label on the far side; the paddle wheel's blades, which had bunched on the shaft as solid black marks, are pairs of blades on opposite arms, foreshortened as the shaft turns, filled and outlined, with the arm pointing at the viewer left out.

## Exercises

- `cyu1` (fs-id2410326), check-understanding, Understand, inline after
  `internal-energy`, the book's answer, open; tests
  internal-energy-changed-by-heat-or-work.
- `ap1` (fs-id1443233), ap-test-prep, Understand, keyed (c): a graded
  choice with the book's four options; tests heat at full value and
  thermal-energy at weight 2.
- `ap2` (fs-id2868495), ap-test-prep, Analyze, the refrigerator: the book
  prints no answer (the CNXML holds one only inside a comment, which the
  book does not print), so it is an open item with an AI-marked suggested
  approach; tests heat at full value and internal-energy-changed-by-heat-or-work
  at weight 2.
- `cq1` to `cq3` (fs-id1802714, fs-id3385364, fs-id2406920), Understand,
  AI-marked suggested approaches, citing `heat`, `heat` and
  `internal-energy`.
- No problem set; nothing left out, nothing taken from another section and
  nothing held for a later one.

## Views

- Formulas: `eq-mechanical-equivalent`, important.
- Definitions: the five variables of the section; the three glossary terms.
- Concept map: the five nodes with their edges into 1.2, 7.1, 7.2, 7.3, 7.5,
  7.6, 12.4, 13.1 and 13.4.

## Colour

The page binds energy, temperature and time: `sim-equilibrium` carries two
temperature sliders, draws two temperature bars and a $\kt$ axis and a bar
of $\kQh$; `sim-joule` draws the bar of $\kW$, the thermometer column and
the $\kdTemp$ against $\kW$ graph. Mass, height, water mass, $g$ and the
constant 4186 J/kcal stay in ink.

## Wanted at chapter level

- variables `Q_heat` → 14.1-heat
- variables `T_1temp` → 14.1-heat
- variables `T_2temp` → 14.1-heat
- variables `T_primetemp` → 14.1-heat
- variables `W` → 14.1-mechanical-equivalent
- equations `eq-mechanical-equivalent` → 14.1-mechanical-equivalent

Applied by the chapter pass (2026-09-14): the six anchors are set as listed.
