# Plan: 14.5 Conduction (m42228)

Source: `source.md` (converted from CNXML). Status: built 2026-09-14 without
a review stop, under `ch14/config.md`, which replaces the per-section stop
with this plan file left for review.

The section that gives conduction its equation. Two sketch figures (the
molecules at a contact surface, the slab of conductivity $k$), four
photographs (the insulated wall, the fiberglass batts, the jellabiya, the
walrus), one table (Table 14.3, the thermal conductivities), two worked
examples, one Check Your Understanding box, four AP items (two keyed), two
conceptual questions and fifteen problems (eight keyed), plus one
Unreasonable Results item that the chapter config moves here from 14.7. No
boxed note and no PhET link. One page (rule 11).

## Sub-concepts (page headers)

The book prints no header of its own; the run of the argument is the
collisions, the four factors and the equation, the ice box, the table, the
$R$ factor, the pan. Page structure, one block per idea:

1. `collisions` **Conduction by molecular collisions** (book: the carpet and
   the tile, conductors and insulators, Figure 14.16, the temperature
   difference $\kdTemp = \kTemphot - \kTempcold$, the cross-sectional area).
   $\kTemphot$, $\kTempcold$, $\kdTemp$ and eq-heat-flux-temperature-difference
   anchor here.
2. `conduction-rate` **The rate of conductive heat transfer** (book: the
   thickness of the material, Figure 14.17, the equation
   $\kQh/\kt = kA(\kTemptwo - \kTempone)/d$ and the definitions of the rate of
   conductive heat transfer and the thermal conductivity). $\kQh$, $\kt$,
   $k$, $A$, $d$, $\kTemptwo$, $\kTempone$ and eq-conduction-rate anchor
   here. The Check Your Understanding box on doubling every dimension tests
   this equation and nothing later, so it is set inline here (rule 12), and
   the scaling result it states is introduced by this span.
3. `ice-box` **Conduction over a day melts a mass of ice** (book: Example
   14.6, the Styrofoam ice box, with its discussion of why Styrofoam,
   fiberglass, wool and down insulate). $L_{\text{f}}$ anchors here.
4. `conductivities` **Thermal conductivities of common substances** (book:
   Table 14.3 as a `div.book-table`, eyebrow "Table 14.3", the book's title
   as caption, its one footnote as a table note).
5. `r-factor` **The R factor** (book: the paragraph on $d/k$, the Btu and the
   batt ratings; Figure 14.18, the fiberglass batts, kept as a photograph).
   $R$ anchors here.
6. `pan` **A small temperature difference across a good conductor** (book:
   the note that the best thermal conductors are the best electrical
   conductors and that cooking utensils are made of them; Example 14.6, the
   aluminum pan, with its discussion of why conduction alone cannot temper
   the Earth's days and nights). eq-conduction-temperature-difference anchors
   here.

Cross references are plain text: "Table 14.3" from the prose and the
problems, "Example 14.6" from problem 11, "Example 14.1" from the two AP
items that cite an experiment this edition does not print. The converter's
`º` is `°` in prose and `^\circ` in math throughout. The book's slip in
Example 14.6, "given that 1 g of water melts in one second" where the water
evaporates, is kept as printed and named in `notes`.

Learning objectives, section summary and glossary come out of the running
text into the views. The Check Your Understanding box is inline after
`conduction-rate`; the AP items, the conceptual questions, the problems and
the Unreasonable Results item from 14.7 go to the Exercises document.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| conduction-by-molecular-collisions | idea | collisions | the opening paragraphs, Figure 14.16, the boiling water and the palm on the wall; the closing remark of Example 14.6 |
| rate-of-conductive-heat-transfer | result, eq-conduction-rate | conduction-rate | Figure 14.17, the equation, the summary; problems 1, 3, 7, 9, 13, 15, the Unreasonable Results item; AP item 3 |
| conduction-rate-scaling | result | conduction-rate | the Check Your Understanding box; problems 9 and 13 |
| conduction-with-phase-change | skill | ice-box | Example 14.5; problems 5 and 7(b); AP items 1 and 2 |
| thermal-conductivity | idea | conductivities | Table 14.3, the discussion of Example 14.5, the note on metals; AP item 4, conceptual questions 1 and 2 |
| r-factor | idea | r-factor | the paragraph on $d/k$ and Figure 14.18 |
| temperature-difference-from-conduction | skill, eq-conduction-temperature-difference | pan | Example 14.6; problem 11 |

The section leans on `conduction` (14.4), `heat-vs-temperature`,
`kinetic-theory` and `thermal-energy` (13.x), `power` and `watt` (7.7),
`heat-of-fusion` and `heat-of-vaporization` (14.3) and `energy-from-power`
(7.7), which the coverage rows mark as used where the text uses them.

## Figures

id · replaces · concepts · value add · motion · sliders · headline · graph · 3D

1. `sim-collisions` · replaces Figure 14.16 (the molecules at a contact
   surface) · conduction-by-molecular-collisions · **flow by animation and
   variation by slider**: the still shows four molecules and four arrows,
   and the reader has to imagine the collisions happening and the two sides
   coming to one temperature; here the collisions happen and the
   temperatures converge · **moves**: two dozen molecules on each side of a
   contact surface fly about at speeds set by their side's temperature, and
   every time one reaches the surface it collides with a molecule of the
   other body and the two exchange kinetic energy, the faster leaving
   slower and the slower faster, as the book's caption describes; a packet
   of heat is drawn crossing the surface in the direction the energy went.
   The two bodies are drawn by two dozen molecules each and are not two
   dozen molecules: their temperatures follow the many, relaxing toward
   each other at a rate set by the collisions, while each drawn molecule
   carries a fixed share of its body's mean kinetic energy, so the picture
   shows the mechanism and the thermometer columns show the result without
   the noise of a 24-body sample, and over the run the columns meet; the idea has a clock in it
   (the two bodies come to equilibrium), so the run is one cycle of 8 s with
   the transport, integrated deterministically from a fixed seed so the
   scrubber can be dragged back · $\kTemphot$ (40 to 500 °C, default 100,
   temperature), $\kTempcold$ (−40 to 100 °C, default 37, temperature); the
   hot slider is held above the cold one · "The molecules on the hot side
   carry more kinetic energy on average, so the collisions at the surface
   pass energy to the cold side and the temperature difference shrinks" ·
   none: the two bodies are the picture · 2D. Readout: $\kdTemp = \kTemphot
   - \kTempcold$ with the live temperatures and the time; small line on
   how many of the drawn collisions passed energy each way, the net flux
   being that excess repeated across every molecule. Speeds are drawn
   proportional to the square root of the absolute temperature, so 100 °C
   against 37 °C is a 10 percent difference in speed, honest and subtle,
   and the columns and the packets carry the visible story. The molecules
   are ink (the book names no substance) with hover names "a molecule of
   the hot body" and "a molecule of the cold body"; the kind labels "higher
   temperature", "lower temperature" and "surface" are the frame and always
   on; no individual label (rule 26.7). Draws temperature, energy, time.
2. `sim-slab` · replaces Figure 14.17 (the slab between a hot body and a
   cold body) · rate-of-conductive-heat-transfer, thermal-conductivity,
   conduction-rate-scaling, conduction-with-phase-change,
   temperature-difference-from-conduction · **variation by slider and flow by
   animation**: the still names four factors and the reader has to imagine
   what each does; here every factor is a control and the current answers
   it, and swapping silver for Styrofoam is the lesson of every insulator in
   the section · **moves**: a heat current of packets runs through the slab
   from the hot face to the cold face at a speed that follows the rate on a
   logarithmic scale (the rate spans ten orders of magnitude across the
   controls, so a linear speed would be invisible or a blur; the gauge and
   the readout state the true watts); the current is steady, so the cycle is
   endless and the transport carries play, stop and speed with no scrubber ·
   $\kTemptwo$ (0 to 400 °C, default 35.0, temperature), $\kTempone$ (−40 to
   100 °C, default 0.0, temperature, held below $\kTemptwo$), $A$ (0.01 to
   3.00 m², default 0.950, ink), $d$ (0.20 to 15.0 cm, default 2.50, ink),
   and the material as a dropdown of Table 14.3 (rule 26.1; twenty-two
   options, wood as its low and high end since the book gives a range;
   default Styrofoam, ink) · "Through 0.950 m² of Styrofoam 2.50 cm thick,
   a 35.0 °C difference drives 13.3 W, the ice box of Example 14.5" · a
   logarithmic gauge of $\kQh/\kt$ from 0.01 W to 100 MW below the scene, in
   the power hue, with the book's two results marked (13.3 W, 2.26 kW) ·
   a locked view (rule 28.2), from the front, the right and above as the
   book draws it, so that the cross-section $A$ is a face and not a line;
   the bar's near half is translucent so the section shows through, and it
   stays a 2D figure in cost and chrome. Readout: the equation with the
   live numbers, the result in watts in the power hue; small line on the heat the rate carries in one day and the
   mass of ice at 0 °C it would melt, which is Example 14.5 at the defaults.
   The defaults reproduce Example 14.5 on load and aluminum, 0.800 cm,
   0.0154 m² and 5.33 °C reproduce Example 14.6. The slab is drawn wider
   as $d$ grows and taller as $\sqrt{A}$ grows, with both dimensions
   labelled; the labels $\kTemptwo$, $\kTempone$, $A$, $d$, $k$ and $Q$ are
   six, fixed and never collide, so they are on (rule 26.7). Draws power,
   temperature, energy, time.
3. `fig-batts` · Figure 14.18, the fiberglass batts · photograph, **kept**:
   the $R$ factor paragraph is about these batts and their ratings, and the
   chapter config lists it among the kept photographs · width 150.

Dropped: Figure 14.15, the insulated wall, a splash image at the head of the
section (config). Figure 14.19, the jellabiya, travels on the card of the
conceptual question that asks about it, as the config says exercise images
do in this chapter. Figure 14.20, the walrus, goes with its problem, which
the book does not key, and is left out with it.

Extra simulations (rule 15), considered and left:

- A ladder of Table 14.3 on a logarithmic axis, silver at the top and
  Styrofoam at the bottom, to show the four orders of magnitude the table
  states in numbers. The dropdown of `sim-slab` walks the same ladder with
  the current and the gauge answering each step, so the ladder would show
  nothing the slab does not. Left.
- The double-paned window of problem 13, two panes of glass and an air gap
  in series, with the temperature dropping across each layer. A real view
  the text does not give, but it is the reader's problem to solve and the
  book keys it. Left.
- The ice box as its own scene, a bar of heat filling over a day and a mass
  of ice shrinking. The slab's small readout line carries the day's heat and
  the ice it melts at the defaults, which is Example 14.5 in one line. Left.

None built.

## Exercises

- 1 Check Your Understanding box, `cyu1` (fs-id2586676), inline after
  `conduction-rate`, Understand, with the book's answer. The book prints the
  same box again in 14.6 under the same id; each section keeps its own copy.
- 2 conceptual questions, `cq1` and `cq2`, Understand, with AI-written
  suggested approaches, citing `pan` and `ice-box`; `cq2` carries Figure
  14.19 on its card.
- 4 AP items: `ap1` (fs-id2327968, keyed (a), a graded choice, Analyze) and
  `ap2` (fs-id3634426, open, AI approach, Understand) both cite "the
  experiment that you devised" in Example 14.1, which the AP edition prints
  and this edition does not; both are kept as printed and the notes say so.
  `ap3` (fs-id2508436, keyed (b), a graded choice, Understand) and `ap4`
  (fs-id2387891, the saucepan, open, AI approach, Analyze).
- 8 problems keyed and kept: `p1` (the house walls, multi), `p3` (the
  human body, number), `p5` (the man who evaporates water, number), `p7`
  (the animal's fur, multi), `p9` (window against wall, number, the ratio),
  `p11` (the ceramic stove top, number), `p13` (the double-paned window,
  multi), `p15` (the body's tissue, multi).
- 7 problems left out, having no answer in the book's key: 2 (fs-id956301,
  the winter window), 4 (fs-id2445988, one foot on ceramic and one on
  carpet), 6 (fs-id3112820, the firewalker), 8 (fs-id2051957, the walrus,
  with Figure 14.20), 10 (fs-id2663763, the wool clothing), 12
  (fs-id1935172, the attic insulation), 14 (fs-id2697772, the payback
  period).
- Taken from 14.7 with `source_section: "14.7"`: `ur1` (fs-id2663242, the
  Unreasonable Results item on the 1.00 m² window), keyed 1.46 kW for (a)
  with the book's (b) and (c) in its solution, Evaluate.
- No generated questions: every node has a book exercise.
- Weights: `p5` gives `conduction-with-phase-change` its full value and
  `heat-of-vaporization` weight 2, since the heat comes from a food intake
  and the equation is 14.3's; `p7` gives `rate-of-conductive-heat-transfer`
  full value and `conduction-with-phase-change` weight 2 for part (b);
  `p9` and `p13` give `conduction-rate-scaling` full value and
  `rate-of-conductive-heat-transfer` weight 2; `cq2` gives
  `thermal-conductivity` full value and `conduction-by-molecular-collisions`
  weight 1; `ap1` and `ap2` give `conduction-with-phase-change` full value
  and `rate-of-conductive-heat-transfer` weight 2.

## Views

- Formulas: the three equations of the section already in `chapter.json`,
  the rate and the temperature difference important and the heat-flux
  difference not.
- Definitions: the twelve variables of the section; the three glossary
  terms.
- Concept map: the seven nodes above with their edges into 7.7, 13.x, 14.3
  and 14.4.

## Colour

The page binds temperature, power, energy and time: both sims carry
temperatures on their sliders and draw them as columns and labels, the slab
draws its current and its gauge and states its watts in the power hue, the
collision sim draws the packets of heat that cross the surface in the energy
hue and the slab writes $\kQh$ over $\kt$ in its readout, and both readouts
state the time. The material constant $k$, the area $A$, the thickness $d$,
the $R$ factor and the mass of ice stay in ink, and the molecules are ink
because the book names no substance.

## Wanted at chapter level

- variables `T_hottemp` → 14.5-collisions
- variables `T_coldtemp` → 14.5-collisions
- variables `ΔT` → 14.5-collisions
- variables `Q_heat` → 14.5-conduction-rate
- variables `t` → 14.5-conduction-rate
- variables `k_cond` → 14.5-conduction-rate
- variables `A` → 14.5-conduction-rate
- variables `d_thick` → 14.5-conduction-rate
- variables `T_2temp` → 14.5-conduction-rate
- variables `T_1temp` → 14.5-conduction-rate
- variables `L_f` → 14.5-ice-box
- variables `R_factor` → 14.5-r-factor
- equations `eq-heat-flux-temperature-difference` → 14.5-collisions
- equations `eq-conduction-rate` → 14.5-conduction-rate
- equations `eq-conduction-temperature-difference` → 14.5-pan
- concept `conduction-rate-scaling`: its `evidence` names the Check Your
  Understanding box; this page introduces it at `conduction-rate`, where
  the box is set inline, since the book prints the box after Example 14.6
  and the idea it tests is the equation.

Applied by the chapter pass (2026-09-14): the fifteen anchors are set as
listed, and `conduction-rate-scaling`'s evidence says the page sets the box
after the rate equation it tests. The publisher numbers this section's two
worked examples 14.5 and 14.6 (three in 14.2, one in 14.3), not 14.6 and
14.7 as this plan and the page had them; the page, the stove-top problem's
prompt, the slab's caption, the notes, this plan and the concept rows that
name them carry the publisher's numbers now. The collision figure's headline
is written as a full sentence, and the slab's ends with a full stop.
