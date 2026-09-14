# Plan: 13.3 The Ideal Gas Law (m42216)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's standing instruction to finish the book in
waves; the per-section stop of rule 2, the plan review of rule 5 and the user
picks of rule 15 are replaced by this file, written before the section was
built and left for review after, as `ch13/config.md` records.

The section that turns the thermal behavior of gases into one equation. It
opens by asking why every gas expands at nearly the same rate when liquids and
solids differ so widely, answers with the wide separation of molecules in a
gas, and then states the ideal gas law $PV = NkT$, first in terms of the
number of molecules and then, through the mole and Avogadro's number, in
terms of the number of moles, $PV = nRT$. Four worked examples (the bicycle
tire warming up, the molecules in a cubic meter at STP, the moles in that
cubic meter and the liters in a mole, the moles in a bike tire), three
diagrams (13.18 to 13.20), one photograph (13.17), five boxed notes, three
Check Your Understanding boxes, four glossary terms, two AP items, three
conceptual questions and seventeen problems of which nine are keyed, plus
one keyed problem that comes over from 13.6. One page (rule 11).

## Sub-concepts (page headers)

The module prints three headers of its own (Moles and Avogadro's Number, The
Ideal Gas Law Restated Using Moles, The Ideal Gas Law and Energy); the rest
are the agent's (rule 3), and the two long runs the book leaves unheaded are
divided where the idea changes.

1. `ideal-gas` **Why every gas expands alike** (book: the opening paragraph
   on the atoms and molecules that compose gases; the paragraph on gases
   being easily compressed and sharing one $\beta$; the paragraph on the
   large separation of molecules; Figure 13.18). The third Check Your
   Understanding box, on why a density a thousand times lower means a
   separation ten times the molecular size, is set inline here, since this
   is the passage it tests (rule 12); the book prints it after the
   Problem-Solving Strategy.
2. `ideal-gas-law` **The ideal gas law** (book: the paragraph on pumping up
   a tire; Figure 13.19; the paragraph that names the ideal gas and the
   equation of state; the boxed Ideal Gas Law with $k$; the paragraph on
   Charles' law and Boyle's law; the paragraph that follows the tire through
   the law). The variables $\kPr$, $V$, $N$, $k$, $\kTemp$ and the equations
   `eq-ideal-gas-law` and `eq-boltzmann-constant` anchor here.
3. `tire-pressure` **Example 13.4: a tire that warms up** (Example 13.4,
   Calculating Pressure Changes Due to Temperature Changes, and the boxed
   Take-Home Experiment on the refrigerated balloon). The variables $\kPro$,
   $\kPrf$, $\kTempo$, $\kTempf$ and the equation `eq-ideal-gas-ratio`
   anchor here.
4. `stp` **Example 13.5: how many molecules are in a cubic meter** (Example
   13.5). `eq-molar-volume-stp` anchors here, since this is where the
   $2.68 \times 10^{25}\ \text{m}^{-3}$ is first found.
5. `moles` **Moles and Avogadro's number** (book header; the paragraph that
   defines the mole and Avogadro's number, with the BIPM footnote kept as a
   parenthesis; the boxed Avogadro's Number; Figure 13.20; the first Check
   Your Understanding box, on the acetaminophen pill, inline after it). The
   variables $n$, $N_\text{A}$, $M$ and the equations `eq-avogadros-number`
   and `eq-moles-from-molecules` anchor here.
6. `molar-volume` **Example 13.6: moles per cubic meter and liters per mole**
   (Example 13.6 with its discussion of the mass of the air in a living room;
   the second Check Your Understanding box, on halving the density of air at
   constant temperature, inline after it, where the book prints it).
7. `moles-form` **The ideal gas law restated using moles** (book header; the
   derivation through $N_\text{A}$; the boxed Ideal Gas Law (in terms of
   moles) with the three values of $R$; Example 13.7, the bike tire in moles;
   the paragraph on conservation of energy that the book prints before its
   next header). The variable $R$ and the equations `eq-ideal-gas-law-moles`,
   `eq-gas-constant` and `eq-gas-constant-other-units` anchor here.
8. `energy` **The ideal gas law and energy** (book header and its two
   paragraphs).
9. `strategy` **Problem-solving strategy: the ideal gas law** (the boxed
   seven-step strategy, kept as the book's numbered steps).

The book gives its examples no numbers in the CNXML; the publisher prints
them as Examples 13.4 to 13.7 and the page follows that. Cross references
are plain text: "Table 13.2" for the coefficients of 13.2, "Example 13.5"
and "Example 13.4" within the page, and "Conservation of Energy", "Kinetic
Theory: Atomic and Molecular Explanation of Pressure and Temperature", "Heat
and Heat Transfer Methods" and "Appendix A" as the book names them. Every
`º` of the source is `°C` in prose and `^\circ\text{C}` in math. Learning
objectives, the section summary and the four glossary terms come out of the
running text into the tables and the views (rule 4).

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| ideal-gas | idea | ideal-gas | the opening paragraphs, Figure 13.18, the third CYU, the second conceptual question, the Unreasonable Results problem from 13.6 |
| ideal-gas-law | result, eq-ideal-gas-law | ideal-gas-law | the boxed law, Figure 13.19, Example 13.5, the first AP item, the third conceptual question, the problems on the light bulb, the space above the planet and deep space |
| boltzmann-constant | idea, eq-boltzmann-constant | ideal-gas-law | the boxed value and every substitution in Examples 13.5 and 13.7 |
| ideal-gas-ratio-method | skill, eq-ideal-gas-ratio | tire-pressure | Example 13.4, Step 5 of the strategy, the second CYU, the problems on the ferry to Alaska, the light bulb and the cooled cylinder |
| mole | idea, eq-moles-from-molecules | moles | the header, the box, the acetaminophen CYU, the conceptual question on a mole of people |
| avogadros-number | idea, eq-avogadros-number | moles | the boxed value, Figure 13.20, the problems on sand grains and table tennis balls |
| ideal-gas-law-moles | result, eq-ideal-gas-law-moles | moles-form | the header, the box, Example 13.7, Step 4 of the strategy, the problems on the lungs, deep space and the units of $nRT$ |
| molar-volume-at-stp | result, eq-molar-volume-stp | stp | Example 13.5 and Example 13.6, the mass of the air in a living room |
| ideal-gas-law-energy | idea | energy | the header, the paragraph on inflating a tire by hand, the problem confirming that $nRT$ is an energy |

The section leans on `volume-thermal-expansion` (13.2), `temperature-scales`
and `absolute-zero` (13.1), `phases-of-matter` and
`atomic-arrangement-and-phase` (11.1), `density` (11.2), `pressure` (11.3),
`atmospheric-pressure` (11.4), `gauge-pressure` and `absolute-pressure`
(11.6), `work` (7.1), `kinetic-energy` (7.2), `conservation-of-energy` (7.6)
and `fundamental-units` (1.2); the coverage rows mark each as used where the
text uses it.

## Figures

id · replaces or Sim · concepts · value add · moving or still · sliders ·
headline · graph · 3D

1. `sim-gas-molecules` · replaces Figure 13.18, the widely separated
   molecules of a gas · ideal-gas, molar-volume-at-stp · **variation and
   intuition**: the book's picture is one spacing, and what the reader has
   to imagine is how much emptier a gas is than the liquid or solid it came
   from; here the spacing is a slider and the drawing packs or thins as it
   moves, so that the thousand of the Check Your Understanding box is seen
   as ten across, ten up and ten deep · **still**: a snapshot of where the
   molecules are has no time in it, and a jitter added to look alive would
   be the dummy loop rule 14 forbids · the spacing between neighboring
   molecules in molecular diameters (1 to 12, default 10, ink, since a
   ratio of lengths is untyped) and a choice of gas (nitrogen, oxygen,
   helium, default nitrogen), because which gas fills the box is a state
   and not a quantity (rule 26.1) and because the point of the book's
   caption is that the answer does not depend on it; nitrogen and oxygen
   are drawn as diatomic pairs and helium as single atoms, each in its
   element's colour (`F.el`), and the readout is the same whichever is
   chosen · "With the molecules ten diameters apart, the gas has one
   thousandth the density of the packed liquid, whatever the gas." · none:
   the box of molecules with one spacing bracketed is the picture · 2D. Readout: the density ratio
   $(a/d)^3$ with the live numbers; small line on the cube of side 3.3 nm
   that each molecule has to itself at STP, which is about ten nitrogen
   diameters. Draws no type: the box is ink, the molecules wear the
   element palette, and a ratio of lengths is untyped.
2. `sim-tire` · replaces Figure 13.19 (a) to (c), the tire pumped up and
   then warmed · ideal-gas-law, boltzmann-constant, ideal-gas-ratio-method,
   ideal-gas-law-moles · **flow by animation, variation and intuition**:
   the book draws three before-and-after pairs of one tire, and the reader
   is left to imagine the molecules that make the gauge move; here the
   tube of the tire is drawn in section with its molecules moving inside
   it, the count and the temperature are sliders, and the gauge reads what
   they do · **moving**, with the reason `ch13/config.md` gives for 13.19:
   the pressure is momentum delivered to the wall per unit time, and a
   still cannot show a rate. The molecules move at a speed set by the
   temperature, strike the wall and turn back, and the readout counts the
   strikes of the last second, so the motion carries the number the gauge
   reads and is not decoration. An endless cycle, so play, stop and speed
   and no scrubber · $N$, the number of molecules in the tire, in units of
   $10^{23}$ (0 to 6.00, default 3.49, ink, since a count is untyped), and
   the temperature (−40 to 60 °C, default 18.0, temperature). The tube of
   a bicycle tire holds 2.00 L when full, as in Examples 13.4 and 13.7, and
   the defaults reproduce them: $3.49 \times 10^{23}$ molecules at 18.0 °C
   give $7.00 \times 10^5$ Pa, and the same count at 35.0 °C gives
   $7.41 \times 10^5$ Pa. While the tire is filling the volume grows at
   atmospheric pressure, $V = NkT/P_\text{atm}$, which is panel (a); once
   the walls are taut the pressure rises with $N$, panel (b), and with
   $T$, panel (c). One drawn molecule stands for $10^{22}$ real ones,
   four in five nitrogen and one in five oxygen, in the element palette;
   the readout says so · "With 3.49 × 10²³ molecules at 18.0 °C the tire is
   full, and the gauge reads an absolute pressure of 7.00 × 10⁵ Pa." ·
   none: the tube in section with the gauge beside it is the scene · 2D.
   Readout: $\kPr V = Nk\kTemp$ solved for $\kPr$ with the live numbers,
   or for $V$ while the tire is still filling; small line on the strikes on
   the wall in the last second, and on $\kPrf/\kPro = \kTempf/\kTempo$
   from 18.0 °C once the tire is full, with $n = N/N_\text{A}$ in moles.
   Draws pressure (the gauge, its dial and the readout) and temperature
   (the slider and the readout).
3. `sim-mole` · replaces Figure 13.20, a mole of table tennis balls over
   Everest · avogadros-number, mole · **variation and intuition**: the book
   draws one depth for one ball, and the reader has to take the 40 km on
   trust; here the diameter of the ball is a slider and the layer of balls
   rises past Everest, past the height airliners fly and towards the edge
   of space as it grows, with the arithmetic in the readout · **still**:
   a layer of balls at rest on the Earth has no time in it · the diameter
   of the ball (5 to 50 mm, default 37.5, ink, with a soft detent at the
   book's 37.5 mm) and the extra space between the balls (0 to 50 %,
   default 25, ink), which is the assumption the section's last keyed
   problem makes · "A mole of table tennis balls 37.5 mm across, with a
   quarter of their volume again in the spaces between them, would cover
   the Earth to a depth of 41 km, nearly five times the height of Everest."
   · none: the Earth's surface with Everest to scale, the layer of balls
   and a fixed vertical scale from 0 to 100 km with Everest (8.85 km), the
   cruising height of an airliner (11 km) and the edge of space (100 km)
   marked on it is the picture · 2D. Readout: depth
   $= N_\text{A}\,\tfrac{\pi}{6}d^3(1 + f)/(4\pi R_\text{E}^2)$ with the live
   numbers; small line on the volume the mole of balls takes up. Draws no
   type: a length is untyped in this book and the picture is ink.

Photographs: one, the hot-air balloon over Putrajaya (Figure 13.17), dropped
as `ch13/config.md` decides: it is a splash image at the head of the
section that the text never mentions, and it is named in `notes`.

Figures that serve exercises: the piston the second AP item refers to is
unnumbered and travels on that item's card as its `figure`, as the chapter's
config decides for every exercise image of the chapter; it is not redrawn.

Extra simulations (rule 15), thought through, judged and left:

- A graph of pressure against temperature in degrees Celsius at fixed volume
  and count, which is the first AP item and the constant-volume gas
  thermometer of the third conceptual question. Left: it is Figure 13.10 of
  13.1, built there with several gases on one axis, and a second copy here
  would answer the AP item for the reader.
- A piston at constant temperature tracing $PV = $ constant, which is the
  data table of the second AP item. Left: 13.5 builds the isotherms on a
  $PV$ diagram, and here the item asks the reader to plot the data
  themselves.
- Letting air out of the tire, which is one of the unkeyed problems. Left:
  it is `sim-tire` with the count slider moved down.
- A box that compares $N$ for several gases at the same $P$, $V$ and $T$,
  which is Avogadro's hypothesis. Left: the gas choice on
  `sim-gas-molecules` already shows that the drawing and the readout do not
  change with the gas.

## Exercises

- Three Check Your Understanding boxes, every one keyed and set inline:
  `cyu1` (fs-id2696745, the acetaminophen pill, Apply, after `moles`, three
  keyed numbers, 151 g/mol, $2.15 \times 10^{-3}$ mol and $1.30 \times
  10^{21}$ molecules, set as a multi-part answer with the book's working as
  the solution), `cyu2` (fs-id2710286, the pressure at which the density of
  air halves, Analyze, after `molar-volume`, keyed 0.50 atm) and `cyu3`
  (fs-id1445894, why a density a thousand times lower means a separation
  ten times greater, Understand, after `ideal-gas`, an open item with the
  book's own answer). The book prints `cyu3` after the Problem-Solving
  Strategy; it tests the opening passage and is set there (rule 12), and
  `exercise_notes` says so.
- Three conceptual questions, none keyed, each an open item at the end with
  an AI-marked suggested approach: `cq1` (fs-id2591367, a mole of people,
  Apply, citing `moles`), `cq2` (fs-id2799079, when a gas departs from the
  law, Understand, citing `ideal-gas`) and `cq3` (fs-id2378151, the
  constant-volume gas thermometer, Understand, citing `ideal-gas-law`).
- Two AP items, both at the end. `ap1` (fs-id1320035, the properties of the
  best-fit curve of $P$ against $T$ in degrees Celsius, Analyze) asks for two
  answers and is keyed "(a), (c)", which a graded choice cannot carry, so
  it is an open item with its four options in the prompt and the book's key
  as its answer, as 7.6 set its closed-systems item. `ap2` (fs-id1390822,
  the students' piston experiment, Evaluate) has no key: its fifteen-trial
  data table travels in the prompt as HTML with its header typo
  "x10m<sup>5</sup>" kept as printed, the book's image of the piston rides
  on the card, and the approach is AI-written and marked.
- Nine problems keyed and kept, numbered by their place in the book's list:
  `p1` (fs-id2682279, the tires on the ferry to Alaska, 1.62 atm), `p3`
  (fs-id2804147, the hot light bulb, 0.136 atm and 0.135 atm), `p5`
  (fs-id1746230, the units of $nRT$ for each value of $R$, an open item with
  the book's working), `p7` (fs-id2631403, the moles in the lungs,
  $7.86 \times 10^{-2}$ mol), `p9` (fs-id2739655, Avogadro's number of sand
  grains, $6.02 \times 10^5$ km³ and $6.02 \times 10^8$ km), `p11`
  (fs-id2328150, the temperature in the space above the planet, −73.9 °C),
  `p13` (fs-id2889733, the leaking gas cylinder, three numbers and the
  book's "No"), `p15` (fs-id2735156, the depth of a mole of table tennis
  balls, 41 km) and `p17` (fs-id2869966, the deep space between galaxies,
  three numbers).
- One problem taken from 13.6 with `source_section: "13.6"`, as
  `ch13/config.md` decides: `p18` (fs-id1582923, Unreasonable Results, the
  moles per cubic meter at $10^{14}$ N/m², keyed $4.41 \times 10^{10}$
  mol/m³ with the book's parts (b) and (c) in the solution, Evaluate). It is
  the ideal gas law and its limits and nothing else; 13.6's notes say so as
  well.
- Eight problems left out, having no answer in the book's key: the
  conversion of $7.00 \times 10^5$ N/m² to gauge pressure in lb/in²
  (fs-id2798567), the helium balloon in the lab (fs-id2687223), the
  conversion of $N/V$ to cm⁻³ and the atoms in a cubic micrometer
  (fs-id2094656), the air in an airplane passenger's stomach
  (fs-id2932069), the expensive vacuum system (fs-id1908858), the bicycle
  tire that lets out 100 cm³ of air (fs-id1804845), the moles in 2.00 L at
  $7.41 \times 10^7$ N/m² (fs-id2084983) and the car tire holding 3.60 mol
  (fs-id1544154). They are named in `notes` and in `exercise_notes`.
- Nothing of this section's own is held for a later page.
- No generated questions: every node of the section has a book exercise
  that tests it.
- Weights: `cyu2` gives `ideal-gas-ratio-method` its full value and
  `ideal-gas-law` 2; `cyu3` gives `ideal-gas` its full value and `density`
  nothing (it is Chapter 11's); `cq1` gives `mole` its full value and
  `avogadros-number` 2; `ap1` gives `ideal-gas-law` its full value and
  `absolute-zero` is not tagged, since it is 13.1's; `ap2` gives
  `ideal-gas-law` its full value and `ideal-gas` 3; `p1` and `p13` give
  `ideal-gas-ratio-method` the full value and `ideal-gas-law` 2; `p3` gives
  the ratio method the full value and `ideal-gas-law` 2; `p5` gives
  `ideal-gas-law-energy` the full value and `ideal-gas-law-moles` 2; `p7`
  and `p17` give `ideal-gas-law-moles` the full value; `p9` and `p15` give
  `avogadros-number` the full value and `mole` 2; `p11` gives
  `ideal-gas-law` the full value; `p18` gives `ideal-gas` the full value
  and `ideal-gas-law-moles` 3.

## Views

- Formulas: the nine equations of the section already in `chapter.json`,
  eight important and the other units of $R$ not.
- Definitions: the thirteen variables of the section, and four glossary
  terms, ideal gas law, Boltzmann constant, Avogadro's number and mole.
- Concept map: the nine nodes above with their edges into 1.2, 7.x, 11.x,
  13.1 and 13.2.

## Colour

The page binds pressure and temperature, as `ch13/COLOR.md` says it should:
`sim-tire` draws the gauge in the pressure hue, carries the temperature on a
slider in its hue, and writes both in its readout. $N$, $n$, $k$, $R$,
$N_\text{A}$, $V$ and $M$ stay in ink, on the sliders as in the equations,
because a count, a constant, a volume and a molar mass are untyped in this
book. The molecules of `sim-gas-molecules` and `sim-tire` wear the element
palette, nitrogen, oxygen and helium each in its own colour, and never a
grey dot; the temperature is never a tint on the gas or the tire, and the
hot tire is told from the cold one by how fast its molecules move and what
its gauge reads. `sim-mole` is ink throughout, since a length is untyped.

## Wanted at chapter level

- variables `P_press` → 13.3-ideal-gas-law
- variables `V` → 13.3-ideal-gas-law
- variables `N_count` → 13.3-ideal-gas-law
- variables `k_boltz` → 13.3-ideal-gas-law
- variables `T_temp` → 13.3-ideal-gas-law
- variables `P_0` → 13.3-tire-pressure
- variables `P_f` → 13.3-tire-pressure
- variables `T_0temp` → 13.3-tire-pressure
- variables `T_ftemp` → 13.3-tire-pressure
- variables `n` → 13.3-moles
- variables `N_A` → 13.3-moles
- variables `R_gas` → 13.3-moles-form
- variables `M` → 13.3-molar-volume
- equations `eq-ideal-gas-law` → 13.3-ideal-gas-law
- equations `eq-boltzmann-constant` → 13.3-ideal-gas-law
- equations `eq-ideal-gas-ratio` → 13.3-tire-pressure
- equations `eq-avogadros-number` → 13.3-moles
- equations `eq-moles-from-molecules` → 13.3-moles
- equations `eq-ideal-gas-law-moles` → 13.3-moles-form
- equations `eq-gas-constant` → 13.3-moles-form
- equations `eq-gas-constant-other-units` → 13.3-moles-form
- equations `eq-molar-volume-stp` → 13.3-stp
- The variables row `M` says "the molar mass of a substance, the mass of
  one mole of it, such as 28.8 g/mol for dry air", and the page first
  writes $M$ in Example 13.6, which is why its anchor is `molar-volume`
  rather than `moles`. Nothing else is wanted; no symbol row is changed.

Applied in the chapter pass (2026-09-14): every anchor above is written on its
row, thirteen variables and nine equations, `M` on `molar-volume` as the note
asks. No symbol row was changed.
