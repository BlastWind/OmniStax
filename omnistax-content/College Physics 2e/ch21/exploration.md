# Exploration: College Physics 2e, Chapter 21 Circuits and DC Instruments

Written in the chapter's prep pass (2026-09-15), after reading every module of
the chapter in full. The source of record is the CNXML bundle
(`source/osbooks-college-physics-bundle`), not the PDF. The book's organisation
(book → chapters → sections → untitled narrative headers, one CNXML module per
section, the apparatus inside the module) is as recorded in
`ch02/exploration.md`; nothing differs here. The bundle's file names carry the
chapter number 22, which this edition prints as Chapter 21, so the media of this
chapter are named `Figure_22_…` while its figures are numbered 21.1 and on.

## Why this chapter

Chapter 20 gives the reader current, resistance, Ohm's law and electric power in
a single loop. This chapter takes those quantities into circuits that have more
than one path. The first section connects resistors in series and in parallel and
derives the two combination rules from conservation of energy and conservation of
charge, then reduces a mixed network to one resistance. The second opens the
voltage source itself: a real source has an emf and an internal resistance, so its
terminal voltage falls as it delivers current, and sources combine in series and
in parallel like the resistors of the first section. The third gives Kirchhoff's
two rules, which analyse a circuit no arrangement of series and parallel parts can
reduce, and the sign conventions that make them work. The fourth builds the
voltmeter and the ammeter out of a galvanometer and one resistor, and shows that
every measurement alters the circuit it measures. The fifth answers that with null
measurements, the potentiometer and the Wheatstone bridge, which balance the
circuit so that no current flows through the instrument. The last puts a capacitor
in a resistive circuit, where charge and voltage rise and fall exponentially with
the time constant $\tau = RC$, which is what times a windshield wiper, a flashing
lamp and a pacemaker.

## Chapter 21 modules

Figures counted are the numbered figures of the narrative; the images inside
exercises are counted separately and carry no number. CYU = Check Your
Understanding, AP = AP test prep items, CQ = conceptual questions, Sol = problems
with an inline solution. The equation column counts the `{eq:…}` markers the
converter writes, most of which are the substitution steps of a worked example
rather than results.

| Section | Module | Ex. | Fig. | Tables | Eq. | Defs | CYU | AP | CQ | Prob. | Sol. |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m42354 | 0 | 1 photo | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 21.1 Resistors in Series and Parallel | m42356 | 3 | 6 diagrams + 5 in exercises | 0 | 44 | 9 | 1 | 5 | 12 | 13 | 7 |
| 21.2 Electromotive Force: Terminal Voltage | m42357 | 1 | 13 (9 diagrams, 4 photographs) + 1 in a question | 0 | 10 | 4 | 0 | 2 | 6 | 17 | 7 |
| 21.3 Kirchhoff's Rules | m42359 | 1 | 5 diagrams + 14 in exercises | 0 | 17 | 4 | 1 | 4 | 5 | 11 | 5 |
| 21.4 DC Voltmeters and Ammeters | m42360 | 0 | 7 (6 diagrams, 1 photograph) + 3 in exercises | 0 | 4 | 8 | 1 | 0 | 4 | 15 | 8 |
| 21.5 Null Measurements | m42362 | 0 | 4 diagrams | 0 | 7 | 5 | 1 | 0 | 2 | 6 | 4 |
| 21.6 DC Circuits Containing Resistors and Capacitors | m42363 | 2 | 4 (3 diagrams, 1 photograph) + 2 in exercises | 0 | 13 | 3 | 1 | 2 | 10 | 18 | 9 |

The chapter has 80 problems, of which 40 carry an inline solution and 40 do not,
13 AP items, of which 11 are keyed, 39 conceptual questions, none keyed, and 5
Check Your Understanding boxes, every one of them keyed. (The counts in the two
sentences above and in the Sol. and AP columns were corrected by the chapter pass;
see the errata below.) The worked examples are numbered 21.1 to 21.7 in
book order: three in 21.1, one each in 21.2 and 21.3, none in 21.4 or 21.5, and
two in 21.6. No module of the chapter prints a table, and no module prints a
header of its own beyond the narrative headers listed above.

## Figure numbers in book order

The chapter's numbered figures run 21.1 to 21.40, in the order the modules print
them. Images inside an exercise carry no number.

| Number | Module image | What it shows |
|---|---|---|
| 21.1 | `OSX_CP2e_Figure_22_00_01.jpg` | The chapter's opening photograph, a person before racks of servers |
| 21.2 | `Figure_22_01_01.jpg` | Four resistors in series (a) and in parallel (b) |
| 21.3 | `Figure_22_01_02.jpg` | Three resistors in series with a battery and the equivalent single resistance |
| 21.4 | `Figure_22_01_04.jpg` | Three resistors in parallel and the equivalent single resistance; a house's distribution board |
| 21.5 | `Figure_22_01_05.jpg` | Seven resistors reduced in five steps to one equivalent resistance |
| 21.6 | `Figure_22_01_06.jpg` | The worked example's circuit: $R_2$ and $R_3$ in parallel, in series with $R_1$ |
| 21.7 | `Figure_22_01_07.jpg` | A refrigerator motor and a light bulb behind the resistance of the house wiring |
| 21.8 | `Figure_22_02_01.jpg` | Four voltage sources: wind farm, dam, solar farm, batteries |
| 21.9 | `Figure_22_02_02.jpg` | A dry cell drawn as an emf in series with an internal resistance |
| 21.10 | `Figure_22_02_03.jpg` | A lead-acid cell, its plates and its electrolyte |
| 21.11 | `Figure_22_02_04.jpg` | Two electrons driven onto the anode by the cell's chemical reaction |
| 21.12 | `Figure_22_02_05.jpg` | A voltage source with its internal resistance driving a load |
| 21.13 | `Figure_22_02_06.jpg` | Two battery testers |
| 21.14 | `Figure_22_02_07.jpg` | A car battery charger reversing the current through a battery |
| 21.15 | `Figure_22_02_08.jpg` | Two sources in series, emfs and internal resistances adding |
| 21.16 | `Figure_22_02_09.jpg` | Cells combined into a battery |
| 21.17 | `Figure_22_02_10.jpg` | Two sources in series with their emfs opposed |
| 21.18 | `Figure_22_02_11.jpg` | A flashlight: two cells in series with a bulb |
| 21.19 | `Figure_22_02_12.jpg` | Two identical sources in parallel and the reduced total internal resistance |
| 21.20 | `Figure_22_02_13.jpg` | A sand tiger shark, which senses fields with its snout |
| 21.21 | `Figure_22_03_01.jpg` | A circuit that no series and parallel reduction reaches |
| 21.22 | `Figure_22_03_02.jpg` | The junction rule, $I_1 = I_2 + I_3$ |
| 21.23 | `Figure_22_03_03.jpg` | The loop rule, as a schematic and as a potential hill |
| 21.24 | `Figure_22_03_04.jpg` | The four sign cases for traversing a resistor and an emf |
| 21.25 | `Figure_22_03_05.jpg` | The worked example's two-loop circuit with its labelled currents |
| 21.26 | `Figure_22_04_01.jpg` | A car dashboard whose gauges are voltmeters |
| 21.27 | `Figure_22_04_02-ea56.jpg` | A voltmeter placed in parallel, and a digital voltmeter in use |
| 21.28 | `Figure_22_04_03.jpg` | An ammeter placed in series |
| 21.29 | `Figure_22_04_04.jpg` | A galvanometer with a large series resistance: a voltmeter |
| 21.30 | `Figure_22_04_05.jpg` | A galvanometer with a small shunt resistance: an ammeter |
| 21.31 | `Figure_22_04_06.jpg` | A voltmeter that does and does not disturb the circuit |
| 21.32 | `Figure_22_04_07.jpg` | An ammeter that does and does not disturb the circuit |
| 21.33 | `Figure_22_05_01.jpg` | A voltmeter on a battery draws current, so it reads terminal voltage |
| 21.34 | `Figure_22_05_02.jpg` | The potentiometer, balanced against an unknown emf |
| 21.35 | `Figure_22_05_03.jpg` | Two ways of measuring a resistance with standard meters |
| 21.36 | `Figure_22_05_04.jpg` | The Wheatstone bridge |
| 21.37 | `Figure_22_06_01.jpg` | An RC circuit charging, and its voltage against time |
| 21.38 | `Figure_22_06_02.jpg` | An RC circuit discharging, and its voltage against time |
| 21.39 | `Figure_22_06_03.jpg` | A hummingbird stopped by a capacitor-driven flash |
| 21.40 | `Figure_22_06_04.jpg` | A lamp flashing on an RC timing circuit, and its sawtooth voltage |

Unnumbered images inside exercises: five in 21.1 (`CNX_APPhysics_21_M1_S01_img.jpg`,
`CNX_APPhysics_21_M1_S02_img.jpg`, `Figure_22_01_08.jpg`, `Figure_22_01_09.jpg`,
`Figure_22_01_10.jpg`), one in 21.2 (`Figure_22_02_14.jpg`), fourteen in 21.3
(ten `CNX_APPhysics_21_M3_…` images with the AP items, `Figure_22_03_06.jpg`,
`Figure_22_03_07-007f.jpg`, `Figure_22_03_08-1bf9.jpg`, `Figure_22_03_09.jpg`),
three in 21.4 (`Figure_22_04_08.jpg`, `Figure_22_04_09.jpg`,
`Figure_22_04_10.jpg`) and two in 21.6 (`Figure_22_06_05.jpg`,
`Figure_22_06_07.jpg`).

## What is new

- **Two types the chapter does not declare.** Every quantity this chapter draws is
  a current, a resistance, a voltage, a charge, a capacitance, a power or a time.
  Chapter 20 declares `current` and `resistance` and Chapter 19 declares `voltage`
  and `capacitance`, so Chapter 21 declares no type of its own. It stages symbol
  rows only.
- **emf is a voltage, not a type.** The book is explicit that "emf is not a force
  at all; it is a special type of potential difference", and its unit is the volt.
  It is therefore a symbol row $\mathcal{E}$ on the `voltage` type, not a new type,
  and it shares the hue of the terminal voltage it is compared against, which is
  the point of $V = \mathcal{E} - Ir$.
- **The time constant is a time.** $\tau = RC$ has units of seconds and takes the
  `time` hue. Chapter 9 owns the bare $\tau$ as a torque, so this one is staged as
  `τ_RC` with the macro `\ktauRC`.
- **Five Check Your Understanding boxes**, one each in 21.1, 21.3, 21.4, 21.5 and
  21.6, every one of them keyed by the book, which is the first chapter since
  Chapter 16 to carry them in nearly every section. They are inline exercises by
  root rule 12.
- **A script capital E in ten captions.** The book's own figures letter the emf
  with a script E and say so in a parenthesis at the end of the caption. A caption
  attribute carries no math, so a redrawn figure writes the symbol as plain text.

## Sketches to replace and photographs

Every numbered diagram of this chapter is a circuit schematic, and a schematic
that only stands still is the clearest case in the book for a faithful copy or a
still simulation: the value add is variation, not motion. The photographs are
21.1 (the chapter's opening, kept by root rule 21), 21.8 (four voltage sources),
21.13 (battery testers), 21.16 (cells made into a battery), 21.20 (the sand tiger
shark), 21.26 (the car dashboard), 21.27(b) (a digital voltmeter in use, which
travels with the diagram it shares a number with) and 21.39 (the hummingbird
caught by a flash). Of these the text points the reader at 21.8, 21.13, 21.20,
21.26 and 21.39, and 21.39 is the picture the strobe example is about, so those
are kept; 21.16 is decoration beside the series connection it illustrates and
21.10 and 21.11, the artist's conceptions of a lead-acid cell, are drawings the
section's own box points at and are kept as figures.

## Notes and PhET items

21.4 and 21.6 each carry a PhET note pointing at Circuit Construction Kit (DC
Only); both are dropped and named in the section's `notes`, as every earlier
chapter has dropped them. The boxed notes that stay verbatim are Connections:
Conservation Laws and Problem-Solving Strategies for Series and Parallel
Resistors in 21.1, Things Great and Small: The Submicroscopic Origin of Battery
Potential and the two Take-Home Experiments (Flashlight Batteries, Virtual Solar
Cells) in 21.2, Kirchhoff's Rules, Making Connections: Conservation Laws and
Problem-Solving Strategies for Kirchhoff's Rules in 21.3, and Connections: Limits
to Knowledge in 21.4.

## Exercises that belong to another section

- 21.2's problem on the two-cell flashlight and 21.2's AP items are all within the
  section that introduces terminal voltage and stay there.
- 21.4's problems on a galvanometer-based ohmmeter and on the resistance of a
  meter's own shunt test the instruments of 21.4 and stay there; the two problems
  that ask what a null measurement would do instead are named in 21.4's
  `exercise_notes` and left with 21.4, since the reader meets null measurements
  only on the next page.
- 21.6's Check Your Understanding on when a capacitor's potential difference is an
  emf uses 21.2's emf, so 21.6 carries a `source_section` of its own and no
  exercise moves.
- Nothing else moves: every problem of the chapter is answerable from the section
  that prints it once Chapters 19 and 20 are read.

## The chapter's answer to root rule 23: be inspiring

A circuit is the one subject in this book where the picture in the textbook is
already a diagram rather than a scene, and where the reader's difficulty is never
the picture but the invisible bookkeeping behind it. So the chapter's figures
should put the numbers on the schematic and let the reader move them.

- **One live schematic, three arrangements.** The same three resistors, 1.00 Ω,
  6.00 Ω and 13.0 Ω, are wired in series, in parallel and in the mixed way of the
  third worked example. A figure that switches between the three arrangements with
  the same battery and shows the current in each branch, the voltage across each
  resistor and the equivalent resistance is the whole of 21.1 in one picture, and
  it makes the abstract claim that parallel resistance is less than the smallest
  resistor something the reader watches happen.
- **A battery with a knob on its internal resistance.** Sliding the load
  resistance down while the terminal voltage sags, with the emf drawn as a fixed
  bar and the $Ir$ drop eating into it, tells the story of the dimming headlights
  better than the sentence that opens 21.2.
- **A potential staircase around a loop.** The book already draws Kirchhoff's
  second rule as a roller coaster. A figure that walks a marker around the loop
  element by element and plots the potential as a staircase that must return to
  where it started makes the loop rule a fact about a walk rather than a rule about
  signs, and the same picture, traversed backwards, shows why every sign flips.
- **The meter that spoils its own reading.** A voltmeter drawn as a resistance the
  reader can dial from a megohm down to the value of the resistor it sits across,
  with the reading and the true voltage side by side, is the section's lesson and
  the chapter's most quietly surprising idea.
- **The balance point.** A potentiometer and a Wheatstone bridge both come down to
  a galvanometer needle that must be brought to zero. A figure whose slider is the
  contact point or the variable resistance, with the needle swinging through zero,
  is worth more than either static schematic.
- **The exponential, watched rather than read.** The charging and discharging
  capacitor is the one figure of the chapter with a clock in it, so it moves: the
  curve draws itself against a time axis marked in multiples of $\tau$, with the
  0.632 and 0.368 steps drawn as the ladder they are.

## Errata found while the chapter was built

Gathered by the chapter pass on 2026-09-15, after every page had been read and
every figure looked at in both themes.

- **The AP items are keyed.** This file and `config.md` both say that none of the
  chapter's thirteen AP test prep items is keyed. The CNXML keys eleven of them: all
  five in 21.1, both in 21.2, three of the four in 21.3, and the second of the two
  in 21.6. Only the first item of 21.3 and the first of 21.6 have no key. The four
  pages that had treated a keyed item as unkeyed were corrected, and `config.md`
  records the change.
- **An opposed pair sits with the sources in series.** 21.2's plan asked for
  `eq-sources-opposed` to be anchored in the `terminal` span; the module prints it
  in `multiple-sources`, beside the two sources in series, and that is where the
  anchor went.
- **A symbol with no row.** 21.1 names a fourth resistance, the resistance of her
  shoes, and its first figure carries it on a slider, but the prep pass staged the
  symbol `R_resfour` without a variable row to give it a meaning. The row was added.
- **The book's generic letters in a passage about the movement.** 21.4 writes the
  voltage across a bare galvanometer as V = IR, and the page had coloured that R as
  the resistance wired to the meter and that I as the current in the measured
  branch. Both are the movement's own, and the page now says so.
- **A caption with a bare angle bracket.** Figure 21.31's caption, as the book
  prints it, contains "R_Voltmeter >> R", and the two greater-than signs inside an
  HTML attribute break any reader of the markup. They are written as the
  much-greater-than sign instead.
- **The exercise counts were wrong.** This file first said that 47 of the 80
  problems carry an inline solution and that none of the thirteen AP items is
  keyed. Counting the `<solution>` elements inside the problem sections of the six
  modules gives 7, 7, 5, 8, 4 and 9 keyed problems, forty in all, so the other forty
  are the ones left out, which is what each section's plan and notes already record.
  The table above is corrected.
- **Figure 21.16 has no number in the page.** The old print of cells combined into a
  battery is decoration and was dropped, so the chapter's figures run 21.1 to 21.40
  with that one gap, which is intended and is recorded in `config.md`.

## Wanted at chapter level

Nothing outstanding. The two types this chapter uses without declaring, `current`
and `resistance`, are Chapter 20's, and the symbols `I_curr` and `R_res` are staged
there; Chapter 21 staged the rest, and the chapter pass added one more row,
`R_resfour`. The prerequisite edges into Chapters 19 and 20 all resolve as they were
written, so none needed correcting.
