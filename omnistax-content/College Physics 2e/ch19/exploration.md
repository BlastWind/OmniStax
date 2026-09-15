# Exploration: College Physics 2e, Chapter 19 Electric Potential and Electric Field

Written in the chapter's prep pass (2026-09-14), after reading every module
of the chapter in full. The source of record is the CNXML bundle
(`source/osbooks-college-physics-bundle`), not the PDF. The book's
organisation (book → chapters → sections → untitled narrative headers, one
CNXML module per section, the apparatus inside the module) is as recorded in
`ch02/exploration.md`; nothing differs here.

## Why this chapter

Chapter 18 introduced charge and the electric field, which is a force per
unit charge. This chapter introduces the quantity that goes with energy the
way the field goes with force. The Coulomb force is conservative, so a charge
in a field has a potential energy, and dividing that energy by the charge
gives the electric potential, whose differences are what a voltmeter reads
and what a battery is rated in. The first section builds the potential
difference and the volt out of work and potential energy, defines the
electron volt, and applies conservation of energy to a charge accelerated
through a voltage. The second ties voltage to the field in the one case that
needs no calculus, the uniform field between parallel plates, and states the
general fact that the field is the negative gradient of the potential. The
third gives the potential of a point charge, which falls as $1/r$ where the
field falls as $1/r^2$, and notes that potentials add as numbers where fields
add as vectors. The fourth draws the potential as equipotential lines, always
perpendicular to the field lines, and reads a conductor as an equipotential
that can be grounded. The last three sections are the capacitor: what
capacitance is and what a parallel plate capacitor's depends on, how a
dielectric raises it and what limits the voltage, how capacitors combine in
series and in parallel, and how much energy a charged capacitor holds, which
is what a defibrillator delivers.

## Chapter 19 modules

Figures counted are the numbered figures of the narrative; the unnumbered
images inside 19.4's and 19.6's exercises are noted separately. CYU = Check
Your Understanding, AP = AP test prep items, CQ = conceptual questions, Sol =
problems with an inline solution. The equation column counts the `{eq:…}`
markers the converter writes, most of which are the boxed restatements and
the numbered substitution steps of a worked example rather than results.

| Section | Module | Ex. | Fig. | Tables | Eq. | Defs | CYU | AP | CQ | Prob. | Sol. |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m42320 | 0 | 1 photo | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 19.1 Electric Potential Energy: Potential Difference | m42324 | 3 | 3 diagrams | 0 | 22 | 4 | 0 | 16 (8 keyed) | 5 | 12 | 6 |
| 19.2 Electric Potential in a Uniform Electric Field | m42326 | 2 | 2 (1 diagram, 1 photo) | 0 | 18 | 2 | 0 | 8 (4 keyed) | 3 | 11 | 5 |
| 19.3 Electrical Potential Due to a Point Charge | m42328 | 2 | 1 diagram | 0 | 6 | 0 | 0 | 0 | 2 | 12 | 6 |
| 19.4 Equipotential Lines | m42331 | 0 | 4 diagrams + 6 unnumbered in problems (5 diagrams, 1 photo) | 0 | 2 | 2 | 0 | 6 (3 keyed) | 3 | 10 | 0 |
| 19.5 Capacitors and Dielectrics | m42333 | 1 | 8 (7 diagrams, 1 photo) | 1 + 1 unnumbered in an AP item | 17 | 6 | 0 | 6 (3 keyed) | 7 | 11 | 6 |
| 19.6 Capacitors in Series and Parallel | m42336 | 2 | 3 diagrams + 3 unnumbered in problems | 0 | 14 | 0 | 0 | 0 | 1 | 6 | 4 |
| 19.7 Energy Stored in Capacitors | m42395 | 1 | 2 photos | 0 | 6 | 1 | 0 | 8 (4 keyed) | 2 | 8 | 5 |

The chapter has 70 problems, of which 32 carry an inline solution and 38 do
not, 44 AP items of which 22 are keyed (all 22 multiple choice), and 23
conceptual questions, none keyed. No section has a Check Your Understanding
box, so the inline place of rule 12 holds nothing unless a section agent
judges a short conceptual question to be a Remember or Understand check that
belongs beside its passage. The worked examples are numbered 19.1 to 19.11 in
book order: three in 19.1, two each in 19.2, 19.3 and 19.6, one each in 19.5
and 19.7, none in 19.4. 19.7's fourth AP item cites "Example 19.1", the car
battery, which is that example's number in this edition.

## Figure numbers

The book numbers the figures of the narrative and leaves the images inside
exercises unnumbered (the book's `RULES.md` § Figures; confirmed for Chapter
15). The bundle's file names say 20 rather than 19 because the module numbers
are from an earlier edition; the numbers below are the ones this edition
prints. 19.5's cell membrane sits among the conceptual questions but inside
no exercise element, so it carries a number.

| Section | Numbers |
|---|---|
| Intro | 19.1 Air Force officials practising with an automated external defibrillator (photo, no width given) |
| 19.1 | 19.2 a charge accelerated by a field beside a mass rolling down a hill (200), 19.3 a battery moving electrons through a headlight (225), 19.4 an electron gun (200) |
| 19.2 | 19.5 parallel plates A and B with $V_\text{AB}$, $E$ and $d$ (175), 19.6 a spark chamber (photo, 200) |
| 19.3 | 19.7 the demonstration Van de Graaff generator with its voltmeter (200), inside Example 19.7 |
| 19.4 | 19.8 an isolated point charge with field lines and equipotential circles (200), 19.9 field and equipotential lines of two equal and opposite charges (250), 19.10 equipotentials measured in the laboratory and the field lines drawn from them (a)(b) (400), 19.11 field and equipotential lines between two metal plates (150); unnumbered, inside problems: two equal positive charges (`Figure_20_04_05a`, 250), two charges $q_1$ and $q_2$ (`_06a`, 250, read by three problems), a negatively charged oblong conductor (`_07a`, 200), two charged plates at an angle (`_08a`, 150, no caption), a charged insulating rod (`_09a`, 175), the lesser electric ray (`_10a-1a53`, photo, no width) |
| 19.5 | 19.12 a parallel plate capacitor and a rolled capacitor on a battery (a)(b) (200), 19.13 field lines in a parallel plate capacitor (150), 19.14 some typical capacitors (photo, 250), 19.15 the parallel plate capacitor with area $A$ and separation $d$ (150), 19.16 the polarized molecules of a dielectric and the reduced field (a)(b) (200), 19.17 an artist's conception of a polarized atom (200, file `Figure_20_05_06(a)a.jpg`), 19.18 an artist's conception of a water molecule (250, file `Figure_20_05_06(b)a.jpg`), 19.19 the semipermeable membrane of a cell (no width), among the conceptual questions; Table 19.1 Dielectric Constants and Dielectric Strengths for Various Materials at 20 °C; an unnumbered two-column table inside the fifth AP item |
| 19.6 | 19.20 three capacitors in series and their equivalent (a)(b) (185), 19.21 three in parallel and their equivalent (a)(b) (300), 19.22 a series-and-parallel combination reduced in three steps (a)(b)(c) (500); unnumbered, inside problems: three circuits of capacitors (`Figure_20_05_08a`, `_09a`, `_10a`, 200 each) |
| 19.7 | 19.23 the capacitor that keeps a calculator's memory (photo, 250), 19.24 an automated external defibrillator (photo, 250) |

Two file names of 19.5 carry parentheses, `Figure_20_05_06(a)a.jpg` and
`Figure_20_05_06(b)a.jpg`; they carry no space, so the rule on file names
does not bite, but a section agent copying them should keep the names as the
bundle gives them and quote them in the shell.

## What is new, and the types the chapter asks for

- **Voltage is a type.** The electric potential $V$ and the potential
  difference $\Delta V$ are the chapter's subject: 19.1 defines them, 19.2's
  figures put $V_\text{AB}$ on a slider and read $E = V_\text{AB}/d$, 19.3
  reads $V = kQ/r$ off a distance, 19.4 draws lines of constant $V$, and
  19.5 to 19.7 put $V$ on every capacitor. It is a potential energy per unit
  charge, neither an energy nor a field, and by rule 7 it is a type of its
  own: declared `voltage`, labelled voltage, dimension V. The book already
  holds `V` and `ΔV` as the untyped volume and its change (Chapters 5, 11,
  13, 15), so the voltage is keyed `V_volt` with the macro `\kV` and its
  change `ΔV_volt` with `\kdV`; the potentials of the two plates and their
  difference are `V_A`, `V_B` and `V_AB`, and 19.6's three capacitor voltages
  `V_1volt`, `V_2volt`, `V_3volt`.
- **Capacitance is a type.** $C = Q/V$ is defined in 19.5, 19.6 combines it
  and 19.7 stores energy in it; the parallel plate figure's readout states
  $C$ as $A$ and $d$ move, and the series and parallel figures state $C_\text{S}$
  and $C_\text{p}$. Declared `capacitance`, labelled capacitance, dimension F.
  The book holds `C` as Chapter 6's circumference (position, `\kC`), so the
  capacitance is keyed `C_cap` with `\kCap`, and the individual and combined
  capacitances are `C_1`, `C_2`, `C_3`, `C_S`, `C_p`, `C_tot` and `C_air`.
- **Electric potential energy is the book's energy.** 19.1 says "We use the
  letters PE to denote electric potential energy" and writes $\text{PE}$ and
  $\Delta\text{PE}$ as Chapter 7 writes them. Chapter 7's `PE` row (`\kPEtot`,
  "the potential energy of a system, the energy it has by reason of its
  position, shape or configuration") is that quantity, and a symbol row
  carries only its LaTeX, type and macro, so this chapter uses `PE`, `ΔPE`,
  `PE_i`, `PE_f`, `KE`, `KE_i` and `KE_f` as they stand and gives them their
  electric meanings in `chapter.json`, the way `r_1` and `r_2` serve several
  chapters. No `PE_elec` row is keyed. The two energies of Example 19.1 are
  staged as `ΔPE_cycle` and `ΔPE_car`, and the energy stored in a capacitor,
  $E_\text{cap}$, as `E_cap` (`\kEcap`), since the book's `E` is the total
  energy of Chapter 7 and Chapter 18's electric field takes a key of its own.
- **Charge and the electric field are Chapter 18's.** $q$, $Q$, $q_e$, $k$
  and $E$ were staged by Chapter 18's prep in the same wave under the types
  `charge` and `electric-field` (`q`, `Q_charge`, `q_e`, `k_coul`, `E_field`),
  and this chapter uses those rows and types by name; `config.md` § Symbols
  lists the keys. The permittivity $\varepsilon_0$ is not among them, since
  Chapter 18's modules never write it, so it is this chapter's untyped row. The three charges of 19.6's parallel connection, $Q_1$, $Q_2$ and
  $Q_3$, are this chapter's, keyed to match Chapter 18's spelling of $Q$,
  and so is the vacuum field $E_0$ of 19.5's $\kappa = E_0/E$.
- **The dielectric constant stays untyped, and has no row.** $\kappa$ is a
  ratio of two fields and a pure number, written in ink on sliders and in
  readouts alike, as an efficiency is. It was staged as an untyped row with
  the LaTeX `\kappa` and withdrawn, because the app's symbols test reads
  every `\k…` in the table as a macro (`config.md` § Symbols); the pages
  write plain `\kappa`. The
  area $A$, the separation $d$ (Chapter 3's position row `d`, `\kd`, as it
  stands), the distance $r$ from a point charge (Chapter 6's `r_curv`,
  `\kr`), the step $\Delta s$ (Chapter 2's `Δs`, `\kds`), the mass $m$, the
  number of electrons $n_\text{e}$ (a new untyped row) and the dielectric
  strength are as the book's `COLOR.md` has them: $d$, $r$ and $\Delta s$
  are positions, the rest ink.
- **The electron volt is a unit, not a symbol.** It is a concept of 19.1
  with its own equation row and no symbol row.

## Sketches to replace, and photographs

Every diagram of the chapter is a schematic that a live drawing can carry:
the charge on its electrical hill (19.2), the battery and its headlight
(19.3), the electron gun (19.4), the plates with their voltage and field
(19.5), the Van de Graaff generator (19.7), the four equipotential maps
(19.8 to 19.11), the capacitors (19.12, 19.13, 19.15), the dielectric and
its molecules (19.16, 19.17, 19.18), the membrane (19.19) and the three
circuit reductions (19.20 to 19.22). Each is a figure to transform with the
book's image kept as its original. Six images are photographs:

| Number | What it is | Keep or drop |
|---|---|---|
| 19.1 | Air Force officials practising with an AED | keep, rule 21; it is the introduction page's own photograph |
| 19.6 | a spark chamber on a wooden base | keep; it follows Example 19.4 on the voltage a spark needs and shows sparks jumping between plates along field lines, which is the thing the passage is about, though no sentence names it; a section agent who reads it as a splash image may drop it and say so |
| 19.14 | some typical capacitors | keep; the text says "Figure 19.14 shows some common capacitors" |
| 19.23 | the capacitor in an electronic calculator | keep; the text says "(See Figure 19.23.)" |
| 19.24 | an automated external defibrillator | keep; the text says "found in many public places (Figure 19.24)" and the example that follows computes its capacitance |
| unnumbered | the lesser electric ray, in 19.4's last problem | travels on the card of the problem that refers to it, if that problem is kept; it is unkeyed |

The unnumbered images inside 19.4's and 19.6's problems are drawings an
exercise asks the reader to read (a field-line map to sketch equipotentials
on, a circuit to reduce), so by rule 14 they are copied faithfully with no
sliders and no animation, either as unnumbered `figure` rows in a closing
block of the text or on the cards of the items that refer to them;
`config.md` says which this chapter uses.

## Notes, boxes and PhET items

Two PhET notes, both dropped and named in `notes`: Charges and Fields in
19.4 and Capacitor Lab in 19.5. The introduction ends on a link to the
publisher's Physics Concept Trailer, dropped and named in `notes` as every
built introduction does. The book's boxes are its own words and are kept
verbatim, and this chapter boxes almost every result twice: 19.1's Potential
Energy, Electric Potential, Potential Difference, Potential Difference and
Electrical Potential Energy, Electron Volt and Connections: Energy Units;
19.2's Voltage between Points A and B and Relationship between Voltage and
Electric Field; 19.3's Electric Potential $V$ of a Point Charge; 19.4's
Grounding; 19.5's Capacitor, The Amount of Charge $Q$ a Capacitor Can Store,
Capacitance, Capacitance of a Parallel Plate Capacitor, Take-Home
Experiment: Building a Capacitor, Dielectric Strength and Things Great and
Small: The Submicroscopic Origin of Polarization; 19.6's Total Capacitance
in Series and Total Capacitance in Parallel; 19.7's Energy Stored in
Capacitors. A boxed restatement repeats the equation the narrative has just
stated under a second `{eq:…}` id; the equation row of `chapter.json` is
written once, on the narrative's statement, and the box keeps the book's
words.

## Exercises that belong to another section

- **19.1's first four AP items** (`fs-id1345616`, `fs-id1368476`,
  `fs-id2627165`, `fs-id1649035`: the force on an electron in a 12.0 N/C
  field, how the force changes with the charge, the field from a force on a
  −5.0 C charge, a force at right angles to the field) test Chapter 18's
  $F = qE$ and nothing of this chapter. The job's rule keeps `source_section`
  inside the chapter or in Chapters 1 to 16, so they stay in 19.1 as the book
  prints them, the two keyed ones graded and the two open ones with a
  suggested approach, tagged to Chapter 18's concept for the force on a
  charge in a field once its id has landed, and 19.1's `exercise_notes` says
  they test the previous chapter.
- **19.1's last seven AP items** (`fs-id1830876`, `fs-id1773635`,
  `fs-id1872138`, `fs-id1944533`, `fs-id3081143`, `fs-id2794286`,
  `fs-id3350954`: the internal energy of two and three point charges, of a
  square of charges, and of a charge moving between two others) need the
  potential of a point charge, $V = kQ/r$, which 19.3 states; they go to
  19.3 with `source_section: "19.1"`, both sections' `exercise_notes` saying
  so. Four are keyed multiple choice and three are open.
- **19.1's Unreasonable Results problem** (`fs-id2723641`, the voltage near
  a 10.0 cm sphere carrying 8.00 C, keyed) is a $V = kQ/r$ problem and goes
  to 19.3 the same way. **19.1's fusion problem** (`fs-id1362960`) needs the
  same result and is unkeyed, so it is left out of both and both notes name
  it.
- **19.2's two isoline AP items** (`fs-id1426361`, keyed, six 5.0 V isolines
  across a 40 cm path; `fs-id2573348`, open, how the isolines between plates
  change with their separation) test 19.4's equipotential lines and go
  there with `source_section: "19.2"`.
- **19.2's AP item on two plates carrying ±0.225 C over 0.75 m²**
  (`fs-id2337566`, open) needs $\varepsilon_0$ and $Q = CV$ with
  $C = \varepsilon_0 A/d$, which 19.5 states; it goes to 19.5 with
  `source_section: "19.2"` as an open item with a suggested approach.
- **19.6's one conceptual question** (`fs-id3075419`, series or parallel for
  a bank that must store a large energy) is answered by 19.7's
  $E_\text{cap} = CV^2/2$ and goes there with `source_section: "19.6"`.
- **19.5's Integrated Concepts problem** (`fs-id1674884`, the prankster's
  capacitor burning a finger) needs 19.7's energy and Chapter 14's specific
  heat; it is unkeyed and left out, named in 19.5's notes.
- **19.4's ten problems are all unkeyed** sketching exercises (sketch the
  equipotentials of a point charge, of two equal charges, of the ray, of the
  plates); by the job's rule they are left out and named in 19.4's notes,
  which leaves 19.4's Exercises tab with its three conceptual questions and
  eight AP items (its own six and 19.2's two). The images those problems
  carry are then not copied, unless the chapter pass decides otherwise. The
  next-to-last of them (`fs-id1494380`, the fair-weather field of 113 N/C
  over 3.00 m) is a numerical problem the book prints twice over in one
  item and leaves unkeyed; it goes with the rest.
- Nothing else moves. 19.7's AP items on inserting a dielectric with the
  battery connected or disconnected are answered by 19.7's energy and 19.5's
  dielectric together and stay where the book prints them; the section's
  `exercise_concepts` tags both.

## The keyed items

The answer key covers roughly every second problem. Of the 70 problems, 32
carry an inline solution; the unkeyed ones are left out and each section's
`notes` names them. Of the 44 AP items, 22 are keyed and all 22 are multiple
choice; the other 22 are open questions and get an AI-marked suggested
approach, as do all 23 conceptual questions. Two problems are Construct Your
Own Problem items (19.1's cellular phone battery and 19.7's defibrillator,
neither keyed) and four are Unreasonable Results items (19.1's sphere and
19.3's 25.0 MV electron, 19.5's nylon capacitor, 19.6's negative capacitance
and 19.7's 133 F truck capacitor, all five keyed; 19.1's goes to 19.3).

## Errata kept as printed

- **19.2's narrative names $V_\text{AB'}$ with a stray prime** ("The
  opposite of the potential difference between points A and B, which we
  denote as ${V}_{\text{AB'}}$") where Figure 19.5's caption and every
  equation write $V_\text{AB}$; kept as printed, and 19.2's `notes` names
  it.
- **19.1's section summary** opens "Electric potential is potential energy
  per unit charge.****" with four stray asterisks the CNXML carries as an
  empty emphasis, and 19.5's summary and problems carry the same empty
  `****` in several places (the capacitor bullet, four problem stems); the
  converter prints them and the page drops the empty emphasis, since it is
  markup and not a word.
- **19.2's summary** closes the gradient bullet with an unmatched
  parenthesis ("decreasing potential.)"); kept as printed.
- **Example 19.9 prints an empty display** "Inverting to find $C_\text{S}$
  yields $$ $C_\text{S} = \ldots$" where the CNXML holds an empty math
  element before the inline one; the page writes the sentence with its one
  inline equation and 19.6's `notes` names it.
- **19.4's fair-weather-field problem** (`fs-id1494380`) asks parts (a) and
  (b) twice over; it is unkeyed and left out in any case.
- **19.5's fifth AP item prints its table without a header row**; the
  converter writes an empty header and the labels Dimension and Charge (µC)
  in the first body row, and the page rebuilds it with those as the header.
- **19.7's AP item cites "Example 19.1"**, which is the car battery's
  number in this edition, so no correction is needed.
- **Example 19.8's answer key disagrees with the example it belongs to.**
  The example works the charge stored on a 8.85 nF capacitor at 3.00 kV out
  as 26.6 µC, and the key at the end of the chapter gives 80.0 mC for the
  same question. Both are printed as the book prints them, the example in
  the narrative and the key on the card, and 19.5's `notes` names the
  disagreement; the figure that draws the capacitor opens on the example's
  26.6 µC.
- **19.7's opening paragraph sends the reader to the wrong photograph.**
  The sentence on the defibrillator reads "(Review Figure 19.23.)", but
  Figure 19.23 is the calculator whose memory a capacitor preserves and the
  defibrillator is Figure 19.24, two sentences later. The text is kept as
  printed, and both photographs are kept, so the reader who follows the
  link still sees a capacitor doing the work the passage describes.
- **Figure 19.19, the cell membrane, is printed among 19.5's conceptual
  questions**, where the book sets it beside the question it illustrates.
  The conceptual questions leave the text for the Exercises tab, which
  would leave the figure with nothing around it, so the page sets it beside
  the paragraph on the membrane's −70 mV, the passage it draws, and keeps
  its number and its caption. 19.5's `notes` records the move.

## Prerequisite edges into built chapters

The chapter rests on Chapter 7 for work, potential energy, conservative
forces, mechanical energy and its conservation, and the joule; on Chapter 2
for scalars and vectors and for speed; on Chapter 4 for force and Newton's
second law; on Chapter 3 for vector addition; on Chapter 13 for the average
kinetic energy of a gas molecule (the Integrated Concepts problems of 19.1);
and on Chapter 18 for charge, the coulomb, the electric field, Coulomb's
law, field lines, conductors in static equilibrium and the field of a
charged sphere. Within the built chapters the edges placed are: 7.1's `work`
and `joule`, 7.2's `kinetic-energy`, `work-energy-theorem` and
`speed-from-work-energy`, 7.3's `potential-energy`, `pe-reference-level`,
`path-independence-of-gravity` and `pe-to-ke`, 7.4's `conservative-force`,
`mechanical-energy`, `conservation-of-mechanical-energy` and
`solve-with-mechanical-energy`, 7.6's `conservation-of-energy` and
`forms-of-energy`; 2.2's `scalar` and `vector`; 3.2's `resultant-vector`
and 3.3's `analytical-vector-addition`; 4.1's `force`, 4.3's
`newtons-second-law`; 6.5's `universal-gravitation` for the $1/r$ and
$1/r^2$ comparison. Every id was checked with `ost find` and stands in
`book.json`. Chapter 18 merged before this chapter did, so its
edges are placed too: 18.1's `electric-charge`, `like-charges-repel`,
`elementary-charge`, `count-charges-from-charge` and
`conservation-of-charge`; 18.2's `conductor`, `insulator`, `polarization`
and `grounding`; 18.3's `coulombs-law` and `coulomb-constant`; 18.4's
`test-charge`, `electric-field`, `force-from-electric-field`,
`field-of-point-charge` and `electric-field-direction`; 18.5's
`electric-field-lines`, `field-line-properties`,
`superposition-of-electric-fields`, `field-of-two-charges` and
`sketch-field-lines`; 18.6's `polar-molecule`; 18.7's
`electrostatic-equilibrium`, `field-perpendicular-to-conductor`,
`excess-charge-on-surface` and `uniform-field-between-plates`; 18.8's
`van-de-graaff-generator`; 137 edges in all. Two terms this chapter
defines in its glossary, grounding (19.4) and polar molecule (19.5), are
concepts Chapter 18 already introduced, so 19.4 and 19.5 reinforce
`grounding` and `polar-molecule` rather than introducing them.

## Wanted at chapter level

Nothing. Chapter 18 had merged when `ch19/book-rows.json` was merged, so
every edge and every symbol this chapter wants from it was placed on an id
that stands in `book.json`; the ids used are listed in `config.md` § Symbols
and above. A section agent that finds it needs an id this pass did not stage
should add it to its own `plan.md` under this heading.

## BE INSPIRING (rule 23)

Electric potential is the chapter where students lose the thread, because
the book's own pictures cannot show the one thing that makes the idea
concrete: potential is a height, and the field is the slope of that height.
The book says so in words ("It is as if the charge is going down an
electrical hill") and draws the hill once, in Figure 19.2, as a cartoon
beside the plates. Everything this chapter needs can be built out of taking
that sentence literally.

- **The hill, drawn as the potential itself.** One figure for 19.1 puts the
  charge between the plates on the left and, on the right, the same span
  drawn as a slope whose height is $V$ in the voltage hue; a positive charge
  released at A slides down it, a negative one slides up it, and beside the
  scene two bars in the energy hue trade $\text{PE}$ for $\text{KE}$ while
  the readout writes $\Delta\text{PE} = q\Delta V$ with the live numbers.
  A slider on $\Delta V$ tilts the hill; a slider on $q$ changes how much
  energy the same drop delivers and leaves the hill alone, which is the
  section's first sentence made visible: voltage is not energy.
- **The same hill for the point charge and the equipotentials.** 19.3's
  $V = kQ/r$ is a funnel, and 19.4's equipotential circles are the contour
  lines of that funnel. A figure that draws the plane view with its
  contours in the voltage hue and its field lines in the field hue, and
  lets the reader raise the number of contours or move a second charge in,
  turns Figures 19.8, 19.9 and 19.10 into one gesture: the map is read the
  way a hiker reads a topographic map, the field is steepest where the
  lines crowd, and no work is done walking along a line. Figure 19.11 is
  the same map for two plates, where the contours come out evenly spaced,
  and the AP item on six isolines across 40 cm is answered by counting
  them.
- **A voltmeter across two plates, with the field as slope.** 19.2's
  $E = V_\text{AB}/d$ is a graph of $V$ against distance whose slope is $E$.
  A figure with the plates on the left and that graph on the right, sliders
  on $V_\text{AB}$ and $d$, shows the slope steepen as the plates close,
  and the readout writes $E = -\Delta V/\Delta s$ with the sign the book
  insists on. Push $E$ past $3\times10^6$ V/m and the air breaks down, which
  is Example 19.4 and four of the section's problems in one slider.
- **The capacitor as a bucket whose width is $C$.** 19.5's parallel plate
  capacitor with sliders on $A$, $d$ and $V$ and a choice of dielectric from
  Table 19.1 draws the field lines one per unit of charge, as the book
  suggests, so the plates fill with lines as $V$ rises and the readout
  writes $C = \kappa\varepsilon_0 A/d$ and $Q = CV$ in their hues. The
  dielectric's molecules turn to face the plates as the reader slides
  $\kappa$ up, and the field lines between the plates thin out as the
  surface charge cancels them, which is Figure 19.16 with its two panels
  become one scene.
- **Series and parallel as one circuit with a switch.** 19.6's three
  capacitors drawn once, with a choice of series or parallel, show the same
  charge $Q$ on every plate in series and the same $V$ across every
  capacitor in parallel, with the equivalent capacitor drawn beside them
  as a taller gap or a wider plate; the readout adds reciprocals or adds
  capacitances, and the reader sees why series always gives less than the
  smallest.
- **Energy as the area of a triangle.** 19.7's $E_\text{cap} = QV/2$ is the
  area under a graph of $V$ against $Q$ as the capacitor charges, a
  triangle because $V$ rises in proportion to $Q$. A figure that charges
  the capacitor and shades that triangle in the energy hue, with the
  readout writing all three forms, shows where the factor of one half comes
  from and why a defibrillator at $10^4$ V needs only 8 µF to hold 400 J.
- **Colour carries the distinction the chapter is about.** With voltage,
  electric field, charge, energy and capacitance each in its own hue, the
  reader sees on every readout that $V$ is not $E$ (a height is not a
  slope), that $\Delta\text{PE}$ is $q$ times $\Delta V$ (an energy is a
  charge times a voltage) and that $C$ is $Q$ over $V$; the book's own
  colours in 19.4, blue field lines and green equipotentials, become the
  two type hues, and $\kappa$, $A$ and $d$ stay in ink because they are the
  knobs and not the quantities.

## Left for a later pass

- **A constants sheet.** $k$, $\varepsilon_0$, $|q_e|$, the electron's mass
  and the electron volt are written in full in every example of the
  chapter; the book's rules foresee a constants sheet, and this chapter and
  Chapter 18 are where it would first earn its place.
- **The point-charge potential energy.** $\text{PE} = kqQ/r$ is never
  stated as an equation, only as an instruction in a problem and as the
  assumption of seven AP items; the concept is staged as a skill of 19.3
  with no equation row, and a later pass may decide it deserves one.
