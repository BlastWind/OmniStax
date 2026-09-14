# Exploration: College Physics 2e, Chapter 13 Temperature, Kinetic Theory, and the Gas Laws

Written in the chapter's prep pass (2026-09-14), after reading every module
of the chapter in full. The source of record is the CNXML bundle
(`source/osbooks-college-physics-bundle`), not the PDF. The book's
organisation (book → chapters → sections → untitled narrative headers, one
CNXML module per section, the apparatus inside the module) is as recorded in
`ch02/exploration.md`; nothing differs here.

## Why this chapter

Chapter 13 is the first chapter of the book about heat, and it spends all six
of its sections on one quantity, temperature, and on what that quantity is a
measure of. It begins where the book always begins, with an operational
definition: temperature is what a thermometer reads, and a thermometer is any
reproducible property that changes with temperature. It then follows that
property, thermal expansion, into bridges, gasoline tanks, ponds and potholes,
and finds in the expansion of gases the fact that sends the chapter to the
atomic scale: every gas expands at the same rate, because its molecules are
so far apart that only their number and their motion matter. That is the
ideal gas law, first in molecules and then in moles. Kinetic theory then does
what the book promised in 13.1: it derives the pressure of a gas from
molecules bouncing off a wall, sets the result beside $PV = NkT$, and finds
that temperature is nothing but the average translational kinetic energy of
a molecule, $\frac{3}{2}kT$. The last two sections let the molecules come
close again. A real gas condenses, a substance has a phase diagram with a
triple point and a critical point, a liquid and its vapor trade molecules at
equal rates, and the humidity of a summer evening, the dew on a leaf and the
bubbles in a boiling pot are all the same equilibrium read three ways.

## Chapter 13 modules

Figures counted include the figures that sit inside exercises. CYU = Check
Your Understanding, AP = AP test prep items, CQ = conceptual questions,
Sol = exercises with an inline solution. The equation column counts the
`{eq:…}` markers the converter writes, most of which in 13.3 and 13.4 are
the numbered substitution steps of a worked example rather than results.

| Section | Module | Ex. | Fig. | Tables | Eq. | Defs | CYU | AP | CQ | Prob. | Sol. |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m42213 | 0 | 2 photos | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 13.1 Temperature | m42214 | 2 | 8 (4 photos, 4 diagrams) | 1 | 10 | 9 | 1 | 0 | 4 | 8 | 4 |
| 13.2 Thermal Expansion of Solids and Liquids | m42215 | 3 | 6 (3 photos, 2 diagrams, 1 diagram in the CYU) | 1 | 18 | 4 | 1 | 0 | 5 | 13 | 7 |
| 13.3 The Ideal Gas Law | m42216 | 4 | 5 (1 photo, 3 diagrams, 1 diagram in an AP item) | 1 (in an AP item) | 29 | 4 | 3 | 2 (1 keyed) | 3 | 17 | 9 |
| 13.4 Kinetic Theory: Atomic and Molecular Explanation of Pressure and Temperature | m42217 | 2 | 7 (1 photo, 5 diagrams, 1 graph in an AP item) | 1 (the options of an AP item) | 29 | 1 | 1 | 6 (3 keyed) | 1 | 10 | 5 |
| 13.5 Phase Changes | m42218 | 0 | 5 (4 diagrams, 1 diagram in a CQ) | 2 | 2 | 11 | 2 | 0 | 6 | 0 | 0 |
| 13.6 Humidity, Evaporation, and Boiling | m42219 | 2 | 3 (1 photo, 2 diagrams) | 1 | 9 | 4 | 1 | 0 | 3 | 24 | 12 |

Every section but the introduction has at least one Check Your Understanding
box, so the inline place of rule 12 holds something on every page: one box
each in 13.1, 13.2, 13.4 and 13.6, three in 13.3 and two in 13.5, every one
keyed. Five modules carry a table of the book's own that has to be rebuilt as
a `div.book-table`: Table 13.1 (the six temperature conversions, plain), Table
13.2 (the expansion coefficients, irregular: three group rows, Solids, Liquids
and Gases, each spanning the three columns, and a footnote on the title about
liquids and gases), Table 13.3 and Table 13.4 (critical points and triple
points, both irregular: a two-row header whose Temperature and Pressure cells
each span two unit columns) and Table 13.5 (the saturation vapor density of
water, plain, with its 100 °C row set in bold as the book prints it). Two
further tables sit inside exercises and travel in the exercise's `prompt` as
HTML, as 3.4's did: the fifteen-trial data table of 13.3's second AP item and
the two-by-two options table of 13.4's first AP item.

Three modules carry a PhET note (13.4 Gas Properties, 13.5 States of
Matter—Basics, 13.6 States of Matter); the config drops them, as every
chapter so far has, and names them in `notes`. The book's own boxed notes
are kept verbatim: 13.1's Misconception Alert (the wooden and metal benches),
its Making Connections on absolute zero and its statement of the zeroth law;
13.2's three boxed results (linear, area and volume expansion) and its Making
Connections on filling the tank; 13.3's boxed ideal gas law, its Avogadro's
number box, its Take-Home Experiment (a balloon in the refrigerator), its
boxed ideal gas law in moles and its seven-step Problem-Solving Strategy;
13.4's Things Great and Small derivation and its Historical Note on Daniel
Bernoulli; and 13.6's Percent Relative Humidity box.

## Figure numbers

The numbers were read off the publisher's own pages rather than inferred,
because the bundle's file names say 14 rather than 13 (the module numbers are
from an earlier edition) and because the book numbers some figures inside
exercises and not others. The rule the pages follow: a figure inside a Check
Your Understanding box is numbered (13.16), a figure inside an AP item or a
conceptual question is not (the piston of 13.3, the two-temperature graph of
13.4, the carbon dioxide phase diagram of 13.5).

| Section | Numbers |
|---|---|
| Intro | 13.1 the NASA engineer securing a coated panel, 13.2 the alcohol thermometer |
| 13.1 | 13.3 the alcohol thermometer again (the same image as 13.2, with a longer caption), 13.4 the bimetallic strip straight and bent, 13.5 the plastic liquid-crystal thermometer, 13.6 the fireman's pyrometer, 13.7 the three scales side by side, 13.8 the infrared thermograph, 13.9 the logarithmic ladder of temperatures in the universe, 13.10 pressure against temperature for several gases |
| 13.2 | 13.11 the expansion joint of the Auckland Harbour Bridge, 13.12 a plate, a plug and a box expanding, 13.13 the density of water against temperature, 13.14 a fuel gauge on empty, 13.15 a pothole, 13.16 the two blocks of the CYU |
| 13.3 | 13.17 the hot-air balloon, 13.18 molecules far apart, 13.19 the tire pumped up in three panels, 13.20 a mole of table tennis balls over Everest; the piston of the second AP item is unnumbered |
| 13.4 | 13.21 a molecule striking a wall, 13.22 gas in a box, 13.23 molecules and a sound wave, 13.24 the Maxwell-Boltzmann distribution of oxygen at 300 K, 13.25 the distribution at two temperatures, 13.26 the lunar rover; the two-temperature graph of the third AP item is unnumbered |
| 13.5 | 13.27 volume against temperature for a real gas, 13.28 the $PV$ diagrams (a) and (b), 13.29 the phase diagram of water, 13.30 liquid and gas in equilibrium at two boiling points; the phase diagram of carbon dioxide inside a conceptual question is unnumbered |
| 13.6 | 13.31 dew on a banana leaf, 13.32 water evaporating in an open and a sealed container, 13.33 the bubble in the heated beaker |

Tables: Table 13.1 Temperature Conversions in 13.1; Table 13.2 Thermal
Expansion Coefficients at 20 °C in 13.2; Table 13.3 Critical Temperatures and
Pressures and Table 13.4 Triple Point Temperatures and Pressures in 13.5;
Table 13.5 Saturation Vapor Density of Water in 13.6.

The source places Figure 13.8 (the thermograph) before Figure 13.9 (the
ladder of temperatures) although the prose mentions the ladder first; the
numbers follow the source order and the publisher's page agrees.

## What is new, and the types the chapter asks for

- **Temperature is a type, and this chapter declares it.** $T$ is the
  chapter's subject. It is on the slider of every figure that changes
  anything (the bimetallic strip, the expanding plate, the tire, the box of
  molecules, the Maxwell-Boltzmann curve, the isotherms, the evaporating
  water), it is what every readout of the chapter states, and Chapters 14 and
  15 will draw it again on every page. Declared `temperature`, labelled
  temperature, dimension K. Root rule 7 § temperature is the rule that bites
  hardest here and `COLOR.md` writes it out: the hue lives on the symbol, the
  slider and the readout, never as a tint on a body, so a hot gas and a cold
  gas are drawn in the same colours and told apart by how fast their molecules
  move, how far the strip bends or where the curve peaks. A temperature
  difference $\Delta T$ is the same type, and so are the initial, final and
  critical temperatures and a temperature written on one scale, told apart by
  their subscripts.
- **The symbol $T$ is taken.** The book already holds `T` as the period, a
  time with the macro `\kT` (Chapter 16), and `T_force`, `T_1`, `T_2` as
  tensions (Chapter 4). Temperature is a new row `T_temp` with the LaTeX `T`
  and the macro `\kTemp`, and every variant is a row of its own, listed in
  `config.md` § Symbols. No section may write `\kT` for a temperature.
- **Counts stay in ink: no `amount` type.** The case for typing the number
  of molecules $N$ and the number of moles $n$ was considered and refused. The
  book's rules keep a count untyped, and a mole is a count divided by
  Avogadro's number; the figure of 13.3 that lets the reader add air to a tire
  varies $N$, but what the reader watches respond is the pressure gauge and
  the volume, both already typed, and the readout $PV = NkT$ reads with $N$
  in ink exactly as $m$ reads in ink in $F = ma$. A hue declared for the whole
  book and bound on two pages of one chapter is a hue the reader must learn and
  then never sees again, since Chapters 14 and 15 write $n$ only inside $nRT$.
  The constants $k$, $R$ and $N_\text{A}$ are constants and are ink as $G$ is;
  their symbols collide with Chapter 16's stiffness `k` and Chapter 3's
  vector `R`, so each gets an untyped row of its own with plain LaTeX and no
  macro.
- **The expansion coefficients stay in ink, and so does the mean square
  speed.** $\alpha$ and $\beta$ are material constants with the standing of a
  drag coefficient or a coefficient of friction, and $\alpha$ collides with
  Chapter 10's angular acceleration, so both are untyped rows of their own.
  $\overline{v^2}$ has the dimension of a speed squared and is not a velocity;
  the readout of 13.4 that states $PV = \frac{1}{3}Nm\overline{v^2}$ writes it
  in ink and states $v_\text{rms}$, which is a velocity, in the velocity hue.
- **What is reused.** Pressure and density are Chapter 11's, by name and by
  row: `P_press` (`\kPr`), `P_1`, `P_2`, `P_atm`, `ρ_dens` (`\krho`), and the
  untyped `V`, `ΔV`, `V_0`, `A` and `L_len`. Chapter 5 typed `ΔL` as a
  position (a deformation) and `B_bulk` as an elastic modulus, and 13.2 uses
  both as they stand. Chapter 7's `KE` is the energy $\frac{1}{2}mv^2$ and its
  average, the thermal energy $\overline{\text{KE}}$, is a new energy row.
  Chapter 3's `v_p` is written $v_\text{p}$ and is a velocity, which is exactly
  the most probable speed of 13.4; the row is reused with a variables row of
  its own meaning in this chapter, as the schema allows. Chapter 8's `Δp`
  and `p` carry the momentum reversal of 13.4 in the momentum hue.
- **Lengths, areas and volumes stay in ink; the extension does not.** The
  length $L$ of a bridge, the area $A$ of a plate and the volume $V$ of a tank
  are scene sizes and are untyped, as the standing decision for this job asks.
  The change in length $\Delta L$ is the quantity the expansion figure shows
  growing, and it keeps the position hue Chapter 5 gave the row; a figure
  that draws it binds `position`. $\Delta A$ and $\Delta V$ are untyped, as
  $A$ and $V$ are.

## Sketches to replace, and photographs

Every diagram of this chapter is a sketch of a quantity or of molecules in
motion, so every one is a figure to transform with the book's image kept as
its original: 13.4, 13.7, 13.9, 13.10, 13.12, 13.13, 13.18, 13.19, 13.20,
13.21, 13.22, 13.23, 13.24, 13.25, 13.27, 13.28 (two panels, one number),
13.29, 13.30, 13.32 and 13.33. Three sketches sit inside exercises and travel
on the exercise card's `figure` field: the two blocks of 13.2's CYU (Figure
13.16, the one numbered exercise figure), the piston of 13.3's second AP item,
the two-temperature distribution of 13.4's third AP item and the carbon
dioxide phase diagram of 13.5's third conceptual question. Eleven images are
photographs:

| Number | What it is | Keep or drop |
|---|---|---|
| 13.1 | Nithin Abraham securing a coated panel under Chamber A | keep, rule 21; it is the introduction page's own photograph |
| 13.2 | an alcohol thermometer with red dye | keep on the introduction page, where the book prints it under its second paragraph with a caption that explains the whole of 13.2 in two sentences |
| 13.3 | the same thermometer, captioned "Alcohol thermometer with red dye." | keep; it shows the thing the passage is about (the first thermometer the section names) and the number must land |
| 13.5 | the plastic liquid-crystal thermometer | keep; the text points at it ("as shown in Figure 13.5") |
| 13.6 | the fireman's pyrometer | keep; the text points at it |
| 13.8 | the infrared thermograph | keep; the text points at it ("see Figure 13.8") |
| 13.11 | the expansion joint of the Auckland Harbour Bridge | keep; it stands at the head of the section, but the first paragraph and the Golden Gate example are about expansion joints and this is the one the reader sees |
| 13.14 | a fuel gauge on empty | drop; it decorates the Making Connections box and nothing points at it |
| 13.15 | a pothole | keep; the text points at it ("See Figure 13.15") |
| 13.17 | the hot-air balloon over Putrajaya | drop; a splash at the head of 13.3 that the text never mentions |
| 13.26 | Eugene Cernan driving the lunar rover | keep; the text points at it as the picture of a world that lost its atmosphere |
| 13.31 | dew on a banana leaf | drop; a splash at the head of 13.6 that the text never mentions, though its caption is worth reading in the plan |

Two file names need care. The thermograph's file in the bundle is
`Picture 3-08a5.jpg`, with a space; a file name never carries a space, so 13.1
copies it as `media/ch13/Picture_3-08a5.jpg` and the text and the row point
at that name. The boiling figure's file is `graphics4-cef9.jpg`, which is
fine as it is. The introduction's two images are already in `media/ch13/`.

## Notes, boxes and PhET items

Three PhET notes, all dropped and named in `notes`: 13.4's Gas Properties
(whose CNXML carries an empty image element the converter prints as a bare
`> IMAGE` line), 13.5's States of Matter—Basics and 13.6's States of Matter.
The introduction ends on no trailer link this time; it carries nothing to
leave out but the defined term *heat transfer*, whose glossary entry belongs
to Chapter 14 and is not written here. The boxed notes listed above are the
book's own words and are kept verbatim. Cross-references to unbuilt chapters
(13.1's to Conduction and to Thermodynamics, 13.2's and 13.3's to Heat and
Heat Transfer Methods, 13.3's to Appendix A) stand as plain text, as every
page of the book writes them.

## Exercises that belong to another section

The chapter's Integrated Concepts and Unreasonable Results problems all sit at
the end of 13.6 and range over the whole chapter, and 13.5 has no problem set
of its own. Rule 12 moves the following, each with `source_section: "13.6"`
and both sections' `exercise_notes` saying so:

- **To 13.2:** `fs-id1543836` (Integrated Concepts, the fraction of a copper
  block's weight the buoyant force supports in 0 °C and 95 °C water; keyed,
  1.02), which turns on the volume expansion of water and copper from Table
  13.2; and `fs-id1669904` (Unreasonable Results, the aluminum rod in the
  aluminum engine block; unkeyed, left out and named in both notes).
- **To 13.3:** `fs-id1582923` (Unreasonable Results, moles per cubic meter at
  $10^{14}$ N/m²; keyed), which is the ideal gas law and its limits.
- **To 13.4:** `fs-id2705483` (Unreasonable Results, $v_\text{rms}$ of
  hydrogen inside a supernova; keyed), which is the rms speed.
- **To 13.5:** `fs-id1893897` (the partial pressure of nitrogen in dry air;
  keyed) and `fs-id2377418` (the deep-sea diver's oxygen partial pressure;
  keyed), which are Dalton's law and give 13.5 the two keyed problems it
  otherwise lacks; and `fs-id2298434` (Integrated Concepts, the depth at which
  the critical pressure of water is reached; unkeyed, left out and named in
  both notes).
- **Stays in 13.6:** everything else, including `fs-id2085047` (the oxygen
  partial pressure atop Everest, unkeyed, whose part (c) is about the drying
  of breathing passages), `fs-id2386969`, `fs-id2688861` and `fs-id1689262`.

13.4's fourth AP item (`fs-id1469775`, the force of a gas on a piston at
constant temperature) is the ideal gas law and Chapter 11's force from
pressure rather than kinetic theory, but the book sets it in 13.4 and it is
unkeyed; it stays where the book prints it as an open item.

## The keyed items

The answer key covers roughly every second problem, as elsewhere in the book.
Of the chapter's 72 problems, 37 carry an inline solution and 35 do not; the
unkeyed ones are left out and each section's `notes` names them. Of the 8 AP
items, 4 are keyed (three of them multiple choice, one a two-part numerical
answer) and 4 are open and get an AI-marked suggested approach, as do all 22
conceptual questions. Every Check Your Understanding box is keyed. 13.6's
problem set carries four Integrated Concepts items and four Unreasonable
Results items, of which five move as listed above.

Faults in the source that a section agent will meet, all kept as printed
unless the fault is the converter's:

- **13.1** prints every degree sign as `º` (the masculine ordinal) inside
  `\text{}`; the standing decision for this job writes `°` outside math and
  `^\circ` inside, so a degree Celsius in math is `^\circ\text{C}`, never
  `º`. The caption of Figure 13.3 ends its credit with a stray full stop
  ("Commons)."), kept.
- **13.2** The Check Your Understanding prompt prints the ratio of heights
  twice, once as plain text "(hB/hA)" and once in math, and its solution
  carries a stray superscript full stop after $2L^3$; both are the book's and
  are kept. The Hong Kong land problem (`fs-id1463358`) writes dollar amounts
  in its prompt and in its key, and the converter has mangled the key into
  broken math (`$\text{~}$\text{17},\text{000}\text{.}$`); the key is "the
  price of the land DECREASES by ~＄17,000" and the section writes the
  fullwidth ＄ in both strings, as the book's rules require. The caption of
  Figure 13.13 says the maximum density of water at 4 °C is 0.0075% greater
  than the density at 2 °C; the densities the figure itself is drawn from
  (0.999972 and 0.999940 g/cm³) put the difference at about 0.003%, and the
  0.012% it gives for 0 °C is right. The slip is the book's and stands in the
  original caption; the page's own caption and readout carry the true numbers
  (found in the chapter pass).
- **13.3** The data table of the second AP item heads its pressure column
  "(x10m<sup>5</sup> Pa)" where the book means $\times 10^5$ Pa; kept as
  printed and named in `exercise_notes`. The text about the mole carries a
  footnote to the BIPM ("Originally defined^[https://www.bipm.org/…]") that
  the converter writes inline; it is a footnote of the book and is kept as a
  footnote or a parenthesis, not as a link.
- **13.4** The prose cites the Things Great and Small box by its own id
  ("derived in the Things Great and Small feature below"), which is plain
  text. The fifth AP item's key reads "(a) 7.29 × 10<sup>-21</sup>J; (b) 352K
  or 79ºC" with HTML superscripts; it is one keyed item with two numerical
  parts.
- **13.5** The text gives the critical temperature of carbon dioxide as
  31.0 °C and Table 13.3 as 31.1 °C; both stand. The header of Table 13.3
  carries four stray asterisks after "atm" that the converter left from an
  empty bold element; they are dropped, since they print nothing.
- **13.6** Example 13.10's first result is set "40.9 .%" by the converter's
  handling of `\text{.\%}`; the book prints 40.9%.

## Prerequisite edges into built chapters

The chapter rests on Chapter 11 for pressure, density and the phases of
matter, on Chapter 7 for kinetic energy and work, on Chapter 8 for the
momentum reversal that gives a gas its pressure, and on Chapters 1, 2, 4, 5
and 6 for the rest. The edges placed are: 1.2's `physical-quantity`,
`fundamental-units` and `unit-conversion` under temperature, the mole and the
conversions between scales; 2.8's `straight-line-graph` under the
extrapolation to absolute zero; 4.4's `newtons-third-law` under kinetic
theory; 5.3's `stress` and `bulk-deformation` under thermal stress; 6.5's
`universal-gravitation` under atmospheric escape; 7.1's `work` and 7.2's
`kinetic-energy` under thermal expansion, the energy in $PV$ and thermal
energy; 8.1's `newtons-second-law-momentum`, 8.2's `change-in-momentum` and
`impulse` and 8.4's `elastic-collision` under the molecular origin of
pressure; 11.1's `phases-of-matter` and `atomic-arrangement-and-phase`,
11.2's `density`, 11.3's `pressure` and `force-from-pressure`, 11.4's
`atmospheric-pressure`, 11.5's `pascals-principle` and `pressures-add`, 11.6's
`gauge-pressure` and `absolute-pressure`, and 11.7's `buoyant-force` and
`average-density-decides-floating` under the gas laws, thermal stress, the
freezing of ponds, Dalton's law and boiling. Every id above was checked with
`ost rows` and stands in `book.json`.

## Wanted at chapter level

Nothing. Chapters 14 and 15 are prepared in the same job and will want the
`temperature` type and the `T_temp` row; this chapter stages both, and if
its merge is refused for an id another chapter landed first, the row that
landed is used as it stands. A section agent that finds it needs a row this
pass did not stage should add it to its own `plan.md` under this heading.

## BE INSPIRING (rule 23)

The chapter's central claim is that a thermometer reading and the speed of a
molecule are the same fact, and almost nothing in the book's drawings lets a
reader see that. Every one of them is a still, and the subject is motion.

- **One box of molecules should run through three sections.** The tire of
  13.3, the gas in a box of 13.4 and the isotherms of 13.5 are one scene: a
  box with a piston, molecules drawn in the element palette (nitrogen and
  oxygen, never a grey dot), a temperature slider that sets how fast they
  move, a count the reader can pump up, and a pressure gauge that reads the
  momentum they deliver to the walls. In 13.3 the readout writes $PV = NkT$
  with the live numbers; in 13.4 the same box highlights one molecule, draws
  its momentum reversed at the wall, and writes $PV = \frac{1}{3}Nm
  \overline{v^2}$ beside it; in 13.5 the piston is driven slowly and the
  point it traces on a $PV$ graph is the isotherm. A reader who has watched
  the gauge climb because the molecules got faster does not need to be told
  what temperature is.
- **Temperature is never a colour on a body.** The chapter is the place
  where this rule is easiest to break and most worth keeping. A hot gas and
  a cold gas look the same in the box except that one moves faster; a hot
  strip and a cold strip are the same colour and differ in their bend; the
  Maxwell-Boltzmann curves at $T_1$ and $T_2$ differ in where they sit, not
  in what they wear. The type hue belongs to the symbol $T$, to its slider
  and to its readout, and the reader learns to read temperature off motion
  and shape, which is the lesson.
- **The Maxwell-Boltzmann distribution deserves a live curve.** One graph
  with a temperature slider and a choice of gas (helium, nitrogen, oxygen,
  carbon dioxide), the peak $v_\text{p}$ and the rms speed $v_\text{rms}$
  marked in the velocity hue and moving as the reader drags, and a line for
  the escape velocity of Earth and of the Moon that the tail either reaches
  or does not: that is 13.24, 13.25 and the helium example in one figure,
  and it explains why the Moon has no sky.
- **The phase diagram should be a place the reader can stand in.** A point
  the reader drags across the $PT$ plane of water, a readout naming the
  phase it is in and the pressure and temperature it is at, the triple point
  and the critical point marked, and a second substance (carbon dioxide) a
  click away so that dry ice is seen to sublimate at one atmosphere because
  its triple point sits above it. The pressure cooker, the snowball and the
  freeze-dryer are three positions of that point.
- **Equilibrium is a rate, and a rate has to be watched.** 13.30 and 13.32
  draw molecules leaving a liquid and returning to it with arrows of equal
  length. A moving figure shows the two rates as two streams, lets the
  reader raise the temperature and watch the vapor thicken until the return
  matches the departure again, and lets them lift the lid and watch the
  equilibrium fail. Humidity, dew point and boiling are then three
  readings of one figure: the vapor density at which the streams balance.
- **Thermal expansion is small and should be exaggerated honestly.** The
  Golden Gate Bridge grows 0.84 m in 1275 m; a figure that draws that to
  scale shows nothing. Root rule 28.4 applies: the plate, the plug and the
  box of 13.12 grow on a slider with the drawn factor stated in the readout
  beside the true numbers, and the hole grows with them, which is the one
  fact in the section readers refuse to believe until they see it.

## Left for a later pass

- **A constants and units sheet.** The chapter is the first to lean on
  named constants ($k$, $R$, $N_\text{A}$) and on tables of data the reader
  looks values up in (Tables 13.2 to 13.5); a sheet of the kind the book's
  rules foresee would serve it and Chapters 14 and 15. The tables stay in
  their sections' text as `div.book-table` for now.
- **The pond that freezes from the top.** 13.2's paragraph on the turnover
  of a pond is a story about density with a clock in it (the surface cools,
  sinks, and then stops sinking below 4 °C) and would make a moving figure of
  real value; it is not a book figure and the 13.2 agent should judge whether
  it earns a Sim beside the density curve of 13.13.
