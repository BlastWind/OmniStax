# Plan: 19.1 Electric Potential Energy: Potential Difference (m42324)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's instruction to finish the book in waves;
the per-section stop of rule 2 and the plan review of rule 5 are replaced by
this file, written before the section was built and left for review after,
as `ch19/config.md` records.

The section that turns the electric field of Chapter 18 into an energy. The
Coulomb force is conservative, so a charge has an electric potential energy;
dividing that energy by the charge gives the electric potential, a quantity
that belongs to the field alone; the difference in potential between two
points is the voltage, measured in volts; the electron volt is the energy a
fundamental charge picks up across one volt; and conservation of energy
turns a voltage into a speed. Three sketch figures (19.2 to 19.4), no
photograph, seven boxed notes, three worked examples, four glossary terms,
sixteen AP items, five conceptual questions and twelve problems of which six
are keyed. One page (rule 11).

## Sub-concepts (page headers)

The module prints two headers of its own, The Electron Volt and Conservation
of Energy, kept as the book writes them; the six before them are the
agent's (rule 3).

1. `electric-potential-energy` **Electric potential energy and the work of
   the Coulomb force** (book: the opening paragraph on the charge going
   down an electrical hill; Figure 19.2; the paragraph on the Coulomb force
   being conservative; the paragraph that defines PE and writes
   $\kW = -\kdPE$; the boxed Potential Energy note; the paragraph on the
   gravitational analogy). The variables $\kq$, $\kW$, $\kPEtot$ and
   $\kdPE$ and the equation `eq-work-and-pe` anchor here.
2. `electric-potential` **Electric potential: potential energy per unit
   charge** (book: the paragraph on calculating the work directly, with
   $\kW = \kF\kd\cos\theta$ and $\kF = \kq\kEf$; the definition of
   electric potential and its equation; the boxed Electric Potential note).
   $\kEf$, $\kV$ and `eq-electric-potential` anchor here.
3. `potential-difference` **Potential difference and the volt** (book: the
   paragraph that cancels $\kq$ and defines $\kdV = \kVB - \kVA$; the
   definition of potential difference and the volt; the boxed Potential
   Difference note). $\kdV$, $\kVA$, $\kVB$, `eq-potential-difference` and
   `eq-volt` anchor here.
4. `voltage` **Voltage, and where zero volts is** (book: the paragraph on
   the familiar term voltage, every battery's two terminals and the
   arbitrary zero).
5. `energy-from-voltage` **Energy from a potential difference** (book: the
   summary relationship $\kdV = \kdPE/\kq$ and $\kdPE = \kq\kdV$; the boxed
   note; the paragraph on voltage not being energy, the motorcycle and car
   batteries; Example 19.1, Calculating Energy, as `ex-batteries`).
   `eq-pe-from-voltage`, $\kdPEcycle$ and $\kdPEcar$ anchor here.
6. `charge-sign` **Negative charge moving to higher potential** (book: the
   paragraph on the energies being absolute values and the batteries moving
   electrons from A to B; Figure 19.3; Example 19.2, How Many Electrons Move
   through a Headlight Each Second?, as `ex-headlight`). $n_\text{e}$
   anchors at `ex-headlight`.
7. `electron-volt` **The Electron Volt** (book's header; the paragraph on
   energy per particle and the television tube; Figure 19.4; the definition
   of the electron volt and its equation; the boxed Electron Volt note; the
   paragraph on 50 V, 100 kV and the doubly charged ion; the boxed
   Connections note on energy units; the paragraph on organic molecules and
   nuclear decay). `eq-electron-volt` anchors here.
8. `conservation-of-energy` **Conservation of Energy** (book's header; the
   two paragraphs on mechanical energy and the two forms of the
   conservation equation; Example 19.3, Electrical Potential Energy
   Converted to Kinetic Energy, as `ex-electron-speed`). $\kKE$, $\kKEi$,
   $\kKEf$, $\kPEi$, $\kPEf$, `eq-mechanical-energy-constant` and
   `eq-energy-conservation-charge` anchor at `conservation-of-energy`;
   $\kv$, $m$ and `eq-speed-from-voltage` at `ex-electron-speed`.

The book's cross references are plain text: "Figure 19.2", "Figure 19.3"
and "Figure 19.4" the app links to the figures on this page, and "Electric
Charge and Electric Field" stays as words. The three examples carry the
publisher's numbers 19.1 to 19.3. The bold PE, KE and the subscripted
forms take Chapter 7's energy macros; $\kq$, $\kEf$ take Chapter 18's;
$\kV$, $\kdV$, $\kVA$, $\kVB$, $\kdPEcycle$, $\kdPEcar$ the rows this
chapter staged; $n_\text{e}$, $m$ and $\theta$ are plain LaTeX in ink, and
$\kF$ and $\kd$ carry macros of types this page does not bind, so they
print in ink too. Learning objectives, the section summary (its empty
emphasis marks dropped as markup) and the four glossary terms come out of
the running text into the tables and views (rule 4). The seven boxed notes
are kept verbatim as `div.note`; the equation rows are written once, on
the narrative's statement, not on the box's repeat.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| electric-potential-energy | idea | electric-potential-energy | Figure 19.2; CQ 2; the Potential Energy note |
| electric-potential | result, eq-electric-potential | electric-potential | the Electric Potential note; CQ 1 |
| potential-difference | result, eq-potential-difference | potential-difference | the Potential Difference note; CQ 1, 3, 4 |
| energy-from-potential-difference | skill, eq-pe-from-voltage | energy-from-voltage | Examples 19.1 and 19.2; AP items 5 to 8; problems 4, 8, 9 |
| charge-sign-and-potential | idea | charge-sign | Figure 19.3; Example 19.2 |
| zero-of-potential | idea | voltage | CQ 4 |
| electron-volt | result, eq-electron-volt | electron-volt | Figure 19.4; CQ 5; problem 3 |
| energy-conservation-for-charges | result, eq-energy-conservation-charge | conservation-of-energy | Example 19.3 |
| speed-from-potential-difference | skill, eq-speed-from-voltage | ex-electron-speed | Example 19.3; AP item 9; problem 1 |

The section leans on `conservative-force`, `potential-energy`,
`path-independence-of-gravity`, `work`, `calculate-work` and
`pe-reference-level` (Chapter 7), `force-from-electric-field`,
`electric-field-direction`, `elementary-charge` and
`count-charges-from-charge` (Chapter 18), and `kinetic-energy`,
`mechanical-energy`, `conservation-of-mechanical-energy` and `pe-to-ke`
(Chapter 7), which the coverage rows mark as used where the text uses them.

## Figures

id · replaces · concepts · value add · moving or still · sliders and choices · headline · graph · 3D

1. `sim-electrical-hill` · replaces Figure 19.2 (the charge between two
   charged sheets beside a mass rolling down a hill) ·
   electric-potential-energy, potential-difference,
   energy-from-potential-difference, charge-sign-and-potential · **value
   add**: variation and animation; the book's cartoon says the charge goes
   down an electrical hill, and the figure draws that hill literally, as the
   potential between the plates with its height in the voltage hue, so the
   reader sees the same drop deliver more or less energy as the charge
   changes and the hill stay put; the still cannot show the potential energy
   turning into kinetic energy as the charge crosses · **moves**: the charge
   is released and crosses the gap between plate A and plate B, accelerating
   as a uniform field accelerates it, while the marker on the hill slides
   down the slope and two bars in the energy hue trade PE for KE; a positive
   charge starts at A and runs down the hill to B, a negative one starts at B
   and climbs to A, which is the book's "downhill for the electron is uphill
   for a positive charge"; one crossing per loop with the scrubber, since the
   conversion of PE to KE over the flight is the idea · plate A's potential
   $\kVA$ (voltage, 10 to 100 V, default 50, with $\kVB = 0$ as the reference
   the figure states), the size of the charge $|\kq|$ (charge, 0.5 to 5.0 µC,
   default 2.0), and a choice, not a slider, for its sign (positive or
   negative, rule 26.1) · "Released at A, the positive charge has crossed
   42% of the gap, and 42% of its 100 µJ of potential energy has become
   kinetic energy." · the hill is the graph, drawn beneath the plates:
   potential against position across the gap, with the charge's marker on
   it and the PE and KE bars beside · 2D. Readout: $\kdPE = \kq\kdV$ with
   the live numbers, small line on $\kW = -\kdPE$ and the kinetic energy
   gained. The plates and their frame are ink, the + and − signs on the
   plates wear the charge hue, no field lines are drawn (the page does not
   bind electric-field; the hill carries the physics). Labels on: A, B,
   $\kVA$, $\kVB$, PE, KE, six in all, none on a moving thing but the
   charge's own name, which sits beside it. Draws voltage, charge, energy.
2. `sim-battery-headlight` · replaces Figure 19.3 (a battery moving
   electrons through a headlight) · charge-sign-and-potential,
   energy-from-potential-difference · **value add**: flow by animation and
   variation; the book's arrows on the wires are kinematic (rule 24.1),
   electrons leave the negative terminal and arrive at the positive one, and
   the figure runs them while the readout counts how many pass each second
   for the energy the headlight uses · **moves**: a steady stream of
   electrons, drawn with `F.el('e-')`, travels from terminal A up through the
   headlight and back down to terminal B, the stream denser and faster when
   more charge moves each second; the flow has no end and so no scrubber,
   only play, stop and speed · the battery voltage $\kdV$ (voltage, 1.5 to
   24 V, default 12.0, detents at 1.5, 12 and 24) and the energy the
   headlight uses each second $\kdPE$ (energy, 5 to 60 J, default 30.0) ·
   "Each second the battery moves −2.50 C, which is 1.56 × 10¹⁹ electrons,
   through the headlight, and its potential energy falls by 30.0 J." · none:
   the circuit is the picture · 2D. Readout: $\kq = \kdPE/\kdV$ with the
   numbers, small line on $n_\text{e} = \kq / (-1.60 \times 10^{-19}\
   \text{C})$. The battery, wires and headlight are ink, the terminals
   carry A and B and their signs in the charge hue, $\kVA$ and $\kVB$ are
   written beside them in the voltage hue with $\kVA = 0$ as the reference;
   the headlight's rays are ink, longer for more energy per second. Labels
   on: A, B, $-\kq$ once on a representative electron, Headlight, five in
   all. Draws voltage, energy, charge.
3. `sim-electron-gun` · replaces Figure 19.4 (the electron gun) ·
   electron-volt, energy-conservation-for-charges,
   speed-from-potential-difference, charge-sign-and-potential · **value
   add**: variation and animation; the caption's "5000 V produces 5000 eV
   electrons" and the text's proton at 30 kV and doubly charged ion at 100 V
   become one figure whose voltage and particle the reader sets, with the
   energy written in electron volts and joules side by side and the final
   speed of Example 19.3 computed, which the still cannot give · **moves**:
   the particle crosses from the plate that repels it to the plate that
   attracts it, its KE bar growing and its velocity arrow lengthening as it
   goes; one crossing per loop with the scrubber, the same clock as
   `sim-electrical-hill` but a different lesson, the energy unit and the
   speed · the voltage between the plates $\kV$ (voltage, 10 to 5000 V,
   default 100, detents at 100 for Example 19.3, 1000 and 5000 for the
   caption) and a choice of particle (electron, proton, helium nucleus with
   charge 2e, rule 26.1) · "An electron accelerated through 100 V gains 100
   eV, which is 1.60 × 10⁻¹⁷ J, and arrives at 5.93 × 10⁶ m/s." · none: the
   KE bar beside the plates is the reading · 2D. Readout: $\kKEf = \kq\kV$
   in eV and J, small line on $\kv = \sqrt{2\kq\kV/m}$ with the mass; above
   about 10 kV the small line says relativistic effects would have to be
   counted, as the example's discussion does. The particle is drawn with
   `F.el('e-')`, `F.el('p+')` or `F.el('He')`, the plates in ink with their
   signs in the charge hue, the speed arrow in the velocity hue. Labels on:
   A, B, the particle's name, KE, four in all. Draws voltage, charge, energy,
   velocity.

Every book figure of the section is a sketch and is replaced; there is no
photograph to keep or drop and no image inside an exercise.

Extra simulations (rule 15), considered and left:

- The motorcycle battery against the car battery (Example 19.1) as two
  batteries of the same voltage and different charge, their energies as two
  bars: `sim-electrical-hill` already shows the same drop delivering more
  energy to a larger charge while the hill stays put, which is the lesson.
  Left.
- The proton breaking 6000 organic molecules at 5 eV each: a count, not a
  view. Left.

None built.

### Figure pass, 2026-09-15 (Claude Fable 5.1)

- `sim-electrical-hill`: the energy bars were scaled to the widest state the sliders reach, so the book's 100 µJ stood 24 units tall, and their sign was inverted, a negative charge's potential energy standing up. They now run ±250 µJ over 180 units (the default range, a taller bar capped and drawn broken), each value sits just past the end of its own bar, and the bars read the right way.
- `sim-electron-gun`: the velocity arrow grew from the particle along its path and ran through the far plate as it arrived. The speed is now an arrow of its own under the plates, growing in step with the time of flight and labelled with its value; the plates were shortened to make its row.
- `sim-battery-headlight`: looked at in both themes at every extreme; nothing changed.

## Exercises

- No Check Your Understanding boxes; nothing inline.
- 5 conceptual questions, `cq1` to `cq5`, Understand, with AI-written
  suggested approaches, citing `voltage`, `potential-difference`,
  `energy-from-voltage`, `voltage` and `electron-volt`.
- 9 AP items kept here. The first four (`ap1` fs-id1345616, keyed (d);
  `ap2` fs-id1368476, open; `ap3` fs-id2627165, keyed (b); `ap4`
  fs-id1649035, open) test Chapter 18's $\kF = \kq\kEf$ and stay where the
  book prints them, tagged `force-from-electric-field` and
  `electric-field-direction`, citing `electric-potential` where the page
  writes $\kF = \kq\kEf$. Then `ap5` (fs-id3080988, keyed (c), the car
  battery's electrons), `ap6` (fs-id2544423, open, the turbines), `ap7`
  (fs-id2013214, keyed (a), the AAA battery and the LED), `ap8`
  (fs-id1935369, open, the vehicle battery) and `ap9` (fs-id2506228, open,
  the electron through 10 V). Keyed choices are graded; open items carry
  their options where the book prints them and an AI-marked approach.
- 7 AP items held for 19.3 with `source_section: "19.1"` (fs-id1830876,
  fs-id1773635, fs-id1872138, fs-id1944533, fs-id3081143, fs-id2794286,
  fs-id3350954), which need $V = kQ/r$; named in `exercise_notes`.
- 5 problems keyed and kept: `p1` (the ratio of speeds, number), `p4`
  (Integrated Concepts, the gas ions at 13.0 V, number), `p6` (Integrated
  Concepts, the defibrillator's power, number for (a) with (b) in the
  solution), `p8` (Integrated Concepts, the bottle warmer, multi), `p9`
  (Integrated Concepts, the battery-operated car, number).
- 1 problem held for 19.3: the Unreasonable Results sphere (fs-id2723641).
- 6 problems left out, having no answer in the book's key: 2
  (fs-id2607118), 3 (fs-id2595258), 5 (fs-id2634581), 7 (fs-id2511020),
  10 (fs-id1362960, the fusion problem, which also needs 19.3 and is left
  out of both) and the Construct Your Own Problem item (fs-id2678910).
- No generated questions: every node has a book exercise or a worked
  example.
- Weights: `p4` gives `energy-from-potential-difference` its full value and
  `thermal-energy` weight 2; `p6` tests `calculate-power` alone; `p8` gives
  `energy-from-potential-difference` full value, `heat-and-temperature-change`
  weight 2 and `count-charges-from-charge` weight 2; `p9` gives
  `energy-from-potential-difference` full value and `kinetic-energy`,
  `gravitational-potential-energy` and `calculate-work` weight 1; `ap5`
  gives `energy-from-potential-difference` full value and
  `count-charges-from-charge` weight 2; `p1` and `ap9` give
  `speed-from-potential-difference` full value and
  `energy-conservation-for-charges` weight 2.

## Views

- Formulas: the nine equations of the section already in `chapter.json`,
  all important.
- Definitions: the nineteen variables of the section; the four glossary
  terms.
- Concept map: the nine nodes above with their edges into Chapters 7 and
  18 and within the chapter.

## Colour

The page binds voltage, charge, energy and velocity: every sim carries a
voltage on a slider and writes it in a readout, two carry a charge on a
slider and all three colour the charge that moves, every readout writes an
energy and two sims draw PE and KE as bars, and the electron gun states the
particle's speed with $\kv$ and draws its velocity arrow. No field line is
drawn, so electric-field is not bound and $\kEf$ prints in ink; $\kF$ and
$\kd$ print in ink for the same reason. The mass $m$, the count
$n_\text{e}$, the angle $\theta$ and the frame of every figure are ink; the
electron, proton and helium nucleus take the element palette.

## Wanted at chapter level

- variables `q` → 19.1-electric-potential-energy
- variables `W` → 19.1-electric-potential-energy
- variables `PE` → 19.1-electric-potential-energy
- variables `ΔPE` → 19.1-electric-potential-energy
- variables `E_field` → 19.1-electric-potential
- variables `V_volt` → 19.1-electric-potential
- variables `ΔV_volt` → 19.1-potential-difference
- variables `V_A` → 19.1-potential-difference
- variables `V_B` → 19.1-potential-difference
- variables `ΔPE_cycle` → 19.1-ex-batteries
- variables `ΔPE_car` → 19.1-ex-batteries
- variables `n_e` → 19.1-ex-headlight
- variables `KE` → 19.1-conservation-of-energy
- variables `KE_i` → 19.1-conservation-of-energy
- variables `KE_f` → 19.1-conservation-of-energy
- variables `PE_i` → 19.1-conservation-of-energy
- variables `PE_f` → 19.1-conservation-of-energy
- variables `v` → 19.1-ex-electron-speed
- variables `m` → 19.1-ex-electron-speed
- equations `eq-work-and-pe` → 19.1-electric-potential-energy
- equations `eq-electric-potential` → 19.1-electric-potential
- equations `eq-potential-difference` → 19.1-potential-difference
- equations `eq-volt` → 19.1-potential-difference
- equations `eq-pe-from-voltage` → 19.1-energy-from-voltage
- equations `eq-electron-volt` → 19.1-electron-volt
- equations `eq-mechanical-energy-constant` → 19.1-conservation-of-energy
- equations `eq-energy-conservation-charge` → 19.1-conservation-of-energy
- equations `eq-speed-from-voltage` → 19.1-ex-electron-speed
- The dielectric constant has no symbol row (config); nothing on this page
  writes it.

**Applied by the chapter pass (2026-09-14).** Every variable and equation row
above carries its anchor in `chapter.json`; nineteen variables and nine
equations were set. The dielectric constant now has a symbol row of its own,
`κ` with the LaTeX `\kappa`, staged and merged with the chapter's other
rows, but nothing on this page writes it, so the page is unchanged. Twenty of
the section's `exercise_concepts` rows carry a weight and each now carries
`weights_by: "ai"` as well. The seven AP items and the Unreasonable Results
problem that go to 19.3 are on 19.3's page with `source_section: "19.1"`, and
both sections' `exercise_notes` name the move.
