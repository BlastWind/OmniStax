# Exploration: College Physics 2e, Chapter 15 Thermodynamics

Written in the chapter's prep pass (2026-09-14), after reading every module
of the chapter in full. The source of record is the CNXML bundle
(`source/osbooks-college-physics-bundle`), not the PDF. The book's
organisation (book → chapters → sections → untitled narrative headers, one
CNXML module per section, the apparatus inside the module) is as recorded in
`ch02/exploration.md`; nothing differs here.

## Why this chapter

Chapter 14 taught what heat transfer is; this chapter asks what it can be
made to do. Its first idea is an accounting: heat transfer into a system and
work done by it change one stored quantity, the internal energy, and only the
change in that quantity is independent of how the system got from one state
to another. Its second idea is a picture: a gas in a cylinder traces a path
on a graph of pressure against volume, the work it does is the area under
that path, and a machine that runs the gas round a closed loop does, every
cycle, the work inside the loop. From those two the chapter builds the heat
engine and finds that it cannot be perfect, that some heat must always leave
to a cold reservoir, and Carnot's result that the best possible efficiency
is set by the two reservoir temperatures alone. Run backward, the same
machine is a heat pump or a refrigerator, and the same limit sets its
coefficient of performance. The chapter then names the quantity that all of
this has been circling. Entropy is the ratio of heat transfer to the
temperature at which it happens; it is constant in a reversible process,
grows in every real one, and the growth is exactly the energy that has been
made permanently unavailable for work. The last section gives the reason:
disorder has vastly more microstates than order, and Boltzmann's
$S = k\ln W$ ties the entropy of a state to the count of ways to make it.

## Chapter 15 modules

Figures counted are the numbered figures of the narrative; the unnumbered
images inside 15.2's exercises are noted separately. CYU = Check Your
Understanding, AP = AP test prep items, CQ = conceptual questions, Sol =
exercises with an inline solution. The equation column counts the `{eq:…}`
markers the converter writes, many of which are the numbered substitution
steps of a worked example rather than results.

| Section | Module | Ex. | Fig. | Tables | Eq. | Defs | CYU | AP | CQ | Prob. | Sol. |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m42231 | 0 | 1 photo | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 15.1 The First Law of Thermodynamics | m42232 | 1 | 4 (1 photo, 3 diagrams) | 1 | 9 | 3 | 0 | 6 (3 keyed) | 7 | 9 | 8 |
| 15.2 The First Law of Thermodynamics and Some Simple Processes | m42233 | 1 | 8 (1 photo, 7 diagrams) + 3 unnumbered in exercises | 1 | 12 | 6 | 0 | 6 (3 keyed) | 8 | 10 | 7 |
| 15.3 Introduction to the Second Law of Thermodynamics: Heat Engines and Their Efficiency | m42234 | 1 | 6 (1 photo, 5 diagrams) | 0 | 11 | 4 | 0 | 0 | 4 | 8 | 4 |
| 15.4 Carnot's Perfect Heat Engine: The Second Law of Thermodynamics Restated | m42235 | 1 | 5 (2 photos, 3 diagrams) | 0 | 4 | 3 | 0 | 0 | 3 | 9 | 5 |
| 15.5 Applications of Thermodynamics: Heat Pumps and Refrigerators | m42236 | 1 | 6 (2 photos, 4 diagrams) | 0 | 9 | 2 | 0 | 0 | 5 | 10 | 5 |
| 15.6 Entropy and the Second Law of Thermodynamics: Disorder and the Unavailability of Energy | m42237 | 3 | 6 (1 photo, 5 diagrams) | 0 | 21 | 3 | 0 | 2 (1 keyed) | 9 | 10 | 6 |
| 15.7 Statistical Interpretation of Entropy and the Second Law of Thermodynamics: The Underlying Explanation | m42238 | 1 | 2 (1 photo, 1 diagram) | 3 | 5 | 3 | 0 | 2 (1 keyed) | 1 | 8 | 5 |

The chapter has 64 problems, of which 32 carry an inline solution and 32 do
not, 16 AP items of which 8 are keyed (all 8 multiple choice), and 37
conceptual questions, none keyed. No section has a Check Your Understanding
box, so the inline place of rule 12 holds nothing unless a section agent
judges a short conceptual question to be a Remember or Understand check that
belongs beside its passage. The worked examples are numbered 15.1 to 15.9 in
book order, one per section except 15.6, which has three (15.6, 15.7, 15.8).

## Figure numbers

The book numbers the figures of the narrative and leaves the images inside
exercises unnumbered; 15.3's first figure is 15.14 on openstax.org, which
confirms that the three images in 15.2's conceptual questions and problems
carry no number. The bundle's file names say 16 rather than 15 (and
`Figure_16_06_05` does not exist), because the module numbers are from an
earlier edition; the numbers below are the ones this edition prints.

| Section | Numbers |
|---|---|
| Intro | 15.1 the steam locomotive |
| 15.1 | 15.2 the boiling tea kettle (photo), 15.3 the first law as a system with $Q$ in and $W$ out, 15.4 two processes that produce the same $\Delta E_\text{int}$, 15.5 metabolism and photosynthesis |
| 15.2 | 15.6 the steam engine at the Turbinia Works (photo), 15.7 the heat engine schematic, 15.8 the piston in three panels (a)(b)(c), 15.9 the isobaric expansion of a cylinder, 15.10 the $PV$ graph of an isobaric process, 15.11 the strips under a varying-pressure curve and the reverse path (a)(b), 15.12 path dependence, the rectangle ABCDA and a general loop (a)(b)(c), 15.13 the isothermal and adiabatic curves and the cycle ABCA (a)(b); unnumbered: the piston again in a conceptual question (`Figure_16_02_09.jpg`, the same drawing as 15.8), the two nested loops ABCFA and ABDEA in a conceptual question, the parallelogram ABCD in a problem |
| 15.3 | 15.14 the Arctic ice floes (photo), 15.15 three one-way processes (a)(b)(c), 15.16 spontaneous heat transfer beside a heat engine (a)(b), 15.17 the four-stroke gasoline engine, 15.18 the Otto cycle on a $PV$ diagram with its engine schematic (a)(b), 15.19 the Otto cycle with a hotter power stroke and a colder compression |
| 15.4 | 15.20 the drinking bird (photo), 15.21 the Carnot cycle with its engine schematic (a)(b), 15.22 the pressurized-water nuclear reactor, 15.23 a nuclear and a coal-fired power station (photo, (a)(b)), 15.24 real engines against Carnot engines and friction in the output (a)(b) |
| 15.5 | 15.25 refrigerators in a store (photo), 15.26 the heat pump schematic and the reversed Carnot cycle (a)(b), 15.27 the four components of a heat pump, 15.28 a heat pump with frictional loss, 15.29 the heat pump of Example 15.5 between −15 °C and 45 °C, 15.30 a residential heat pump (photo) |
| 15.6 | 15.31 the melting ice in a drink (photo), 15.32 state 1 to state 2 by a reversible and an irreversible path, 15.33 irreversible heat transfer and its reversible stand-in (a)(b), 15.34 two Carnot engines fed the same 4000 J (a)(b), 15.35 ice melting from order to disorder, 15.36 the Sun, the Earth and deep space |
| 15.7 | 15.37 the tossed coins (photo), 15.38 a gas in its likely and its highly unlikely state (a)(b) |

Tables: Table 15.1, Summary of Terms for the First Law of Thermodynamics, in
15.1; Table 15.2, Summary of Simple Thermodynamic Processes, in 15.2; Table
15.3, 5-Coin Toss, and Table 15.4, 100-Coin Toss, in 15.7's narrative; Table
15.5, 10-Coin Toss, among 15.7's problems, where one problem points at it as
a guide. Every one is rebuilt as a `div.book-table` whose eyebrow is the
book's number. Table 15.1 carries math in its cells; Table 15.4 and 15.5
have a two-column spanning header (Macrostate over Heads and Tails).

## What is new, and the types the chapter asks for

- **Entropy is a type.** $S$ is defined in 15.6, its change $\Delta S$ is
  what every worked example of that section computes, and the reservoirs of
  15.6's figures gain and lose it; 15.7 states $S = k\ln W$ and computes
  $\Delta S$ from counts of microstates. A figure that shows the hot
  reservoir losing $Q_\text{h}/T_\text{h}$ and the cold one gaining
  $Q_\text{c}/T_\text{c}$ draws entropy as a bar, its readout states
  $\Delta S_\text{tot}$ in J/K, and a slider on the reservoir temperatures
  changes it. By rule 7 it is a type of the book's: declared `entropy`,
  labelled entropy, dimension J/K. It is not an energy and not a
  temperature, though it is their quotient. The book already holds `S` as
  the shear modulus (Chapter 5) with the macro `\kS`, so entropy is keyed
  `S_ent` with the macro `\kSent`, and its variants are `ΔS`, `ΔS_h`,
  `ΔS_c`, `ΔS_tot`, `ΔS_syst`, `ΔS_envir`, `S_i` and `S_f`.
- **Internal energy is an energy.** $E_\text{int}$ is the sum of the kinetic
  and potential energies of a system's atoms and molecules, and the chapter
  treats it as the stored account that $Q$ and $W$ move. Rule 7 forbids a
  new type for a quantity that is one of an existing kind; it takes the
  `energy` hue with the rows `E_int` (`\kEint`) and `ΔE_int` (`\kdEint`),
  told from $Q$ and $W$ by its label, as $\text{KE}$ and $\text{PE}$ are in
  Chapter 7.
- **Work is Chapter 7's row.** $W$ is `W` (`energy`, `\kW`) as it stands, and
  $W_\text{out}$ is Chapter 7's `W_out`. This chapter adds the rows it
  writes and the book does not hold: `W_in`, the work along the four legs
  of 15.2's rectangle (`W_AB`, `W_BC`, `W_CD`, `W_DA`), `W_1` and `W_2` of
  Example 15.1, $W'$ of 15.5's friction figure (`W_prime`) and
  $W_\text{unavail}$ of 15.6. The number of microstates that 15.7 also
  calls $W$ is a different quantity, a count, and is an untyped row of its
  own (`W_micro`, with `W_microi` and `W_microf`), never the energy macro.
- **Heat transfer is an energy, and Chapter 14 owns its plain symbol.** The
  chapter writes $Q$ constantly; the book holds `Q` as Chapter 12's flow
  rate, so heat is Chapter 14's row `Q_heat` with the macro `\kQh`, and
  this chapter adds only the reservoir and direction variants it
  introduces: `Q_h` and `Q_c` (macros `\kQH` and `\kQC`, uppercase because
  `\kQh` is the plain heat), `Q_in`, `Q_out`, `Q_f` (the frictional heat of
  15.4 and 15.5), $Q'_\text{h}$ and $Q'_\text{c}$ of 15.3's second Otto
  figure, and `Q_heat1`, `Q_heat2` of Example 15.1. All are `energy`.
- **Temperature is Chapter 13's type.** $T$ is Chapter 13's `temperature`
  type and its `T_temp` row (`\kTemp`), since the book's `T` is a period
  (Chapter 16). Chapter 13 merged before this chapter and already holds
  `T_c` (LaTeX $T_\text{c}$, `\kTempc`, its critical temperature) and
  `T_0temp` (LaTeX $T_0$, `\kTempo`), and a symbol row carries only its
  LaTeX, type and macro, so this chapter's cold reservoir temperature and
  the lowest temperature of $W_\text{unavail} = \Delta S\cdot T_0$ use those
  rows as they stand and give them their own meanings in `chapter.json`,
  the way `r_1` and `r_2` serve several chapters. This chapter adds the hot
  reservoir temperature `T_h` (`\kTemph`) and the primed pair of 15.3 and
  15.6. The book's `T_1` and `T_2` are tensions, so the $T_{\text{c},1}$
  and $T_{\text{h},1}$ of 15.4's answer key stay plain.
- **Efficiency and the coefficients of performance stay untyped.** The
  book's `COLOR.md` already lists an efficiency among the dimensionless
  ratios in ink, and Chapter 7's `Eff` row is untyped with no macro. This
  chapter uses it and adds `Eff_C`, `COP_hp`, `COP_ref` and `EER` the same
  way. The Carnot efficiency is the one candidate for a hue, since 15.4's
  figure will put it on a readout as two temperatures change; but it is a
  ratio of two quantities that already carry the temperature hue, the
  reader sees the change through them, and a colour for a pure number is
  what rule 7's untyped list forbids.
- **Pressure and volume are Chapter 11's.** $P$ is `P_press` (`\kPr`),
  never the book's `P`, which is power; $V$ and $\Delta V$ are Chapter 11's
  and Chapter 5's untyped rows. The $PV$ diagram therefore has a pressure
  axis in the pressure hue and a volume axis in ink, and the area under
  the curve, which is a work, wears the energy hue. This chapter adds
  `P_ext`, `P_AB` and `P_CD` as pressures.
- **Boltzmann's constant, the atom count and the gas constant are Chapter
  13's.** 15.2 writes $E_\text{int} = \tfrac32 NkT$ and $PV = nRT$, and 15.7
  writes $S = k\ln W$; the book's `k` is a force constant, its `N` a normal
  force and its `R` a position, so the constants are Chapter 13's untyped
  rows `k_boltz`, `N_count`, `n` and `R_gas`, written plain. The latent heat
  $L_\text{f}$ of Example 15.8 is Chapter 14's `L_f`.

## Sketches to replace, and photographs

Every diagram of the chapter is a schematic of energy flow or a graph of
pressure against volume, so every one is a figure to transform with the
book's image kept as its original: 15.3, 15.4, 15.5, 15.7, 15.8, 15.9,
15.10, 15.11, 15.12, 15.13, 15.15, 15.16, 15.17, 15.18, 15.19, 15.21, 15.22,
15.24, 15.26, 15.27, 15.28, 15.29, 15.32, 15.33, 15.34, 15.35, 15.36 and
15.38. Nine images are photographs:

| Number | What it is | Keep or drop |
|---|---|---|
| 15.1 | a steam locomotive with passenger cars | keep, rule 21; it is the introduction page's own photograph |
| 15.2 | a whistling tea kettle on a stove | keep; the section's first conceptual question asks the reader to describe this photograph in terms of heat transfer, work and internal energy |
| 15.6 | a steam engine at the Turbinia Works, 1911 | drop; it is the splash image at the head of 15.2, and the passage does not point at it |
| 15.14 | melting Arctic ice floes | drop; a splash image at the head of 15.3 whose caption makes the section's point but which no passage or exercise refers to |
| 15.20 | the drinking bird | keep; the passage calls it "the drinking bird above", the conceptual question points at it, and it is the section's one concrete Carnot engine |
| 15.23 | a nuclear and a coal-fired power station | keep; Example 15.4's discussion says "Figure 15.23 shows" and reads the cooling towers as $Q_\text{c}$ |
| 15.25 | refrigerators in an appliance store | drop; a splash image at the head of 15.5 |
| 15.30 | a residential heat pump | keep; the passage says "Figure 15.30 shows a heat pump" and its caption is the reverse-cycle explanation |
| 15.31 | a drink with melting ice | drop; a splash image at the head of 15.6, though a section agent may keep it as the scene Example 15.8 computes |
| 15.37 | coins showing heads and tails | drop; a splash image at the head of 15.7, its question answered by the two tables that follow |

15.8 and the unnumbered piston of 15.2's conceptual question are the same
drawing (`Figure_16_02_09.jpg` repeats `Figure_16_02_03.jpg`); the
conceptual question's image travels on its exercise card. The two nested
loops and the parallelogram in 15.2's exercises are graphs an exercise asks
the reader to read, so by rule 14 they are copied faithfully with no sliders
and no animation, either as unnumbered `figure` rows in a closing block of
the text or on the cards of the items that refer to them; `config.md` says
which this chapter uses.

## Notes, boxes and PhET items

Two PhET notes, both dropped and named in `notes`: States of Matter in
15.2 and Reversible Reactions in 15.6. The introduction carries no trailer
link. The book's boxes are its own words and are kept verbatim: 15.1's two
Making Connections boxes (the first law as conservation of energy;
macroscopic and microscopic), 15.3's two statements of the second law and
15.4's Carnot Engine statement (each a boxed note that the section's prose
introduces), 15.5's seven-step Problem-Solving Strategies for
Thermodynamics, 15.6's Making Connections: Entropy, Energy, and Work, and
15.7's seven-step Problem-Solving Strategies for Entropy. The two strategy
boxes are cited by problems in other sections (15.1, 15.2 and 15.4 cite the
thermodynamics strategy in 15.5; 15.6 cites the entropy strategy in 15.7),
and those citations are plain text, as every cross-reference of the book is.

## Exercises that belong to another section

- **15.1's fifth AP item** (`fs-id3826091`, what happens inside a
  refrigerator or freezer in terms of heat transfer, work and conservation
  of energy) is answered by 15.5, which introduces the refrigerator as a
  heat engine run backward; it goes to 15.5 with `source_section: "15.1"`,
  both sections' `exercise_notes` saying so. It is unkeyed and gets a
  suggested approach.
- **15.2's eighth problem** (`fs-id1169738036310`, an engine between
  450 °C and 150 °C that does 4.00 MJ on 5.00 MJ of heat transfer, asked
  what is unreasonable) needs the Carnot efficiency of 15.4 for its parts
  (b) and (c); it is unkeyed, so it is left out of both sections and both
  `exercise_notes` name it. **15.2's two Construct Your Own Problem items**
  ask for an engine's maximum efficiency and a car trip's overall
  efficiency, which are 15.4's and 15.3's ideas; both are unkeyed and left
  out, named in 15.2's notes.
- **15.7's one conceptual question** (`eip-558`, the bricks and the pile)
  repeats 15.6's last conceptual question (`fs-id1169738007382`) word for
  word. The CNXML leaves it untyped (`type=` is empty) and it is classed by
  its header as a conceptual question. It is set in 15.7, where the count
  of microstates it asks for is taught, and 15.6 keeps its own copy, since
  the book prints both; 15.7's `exercise_notes` says the item is the same
  question.
- **15.7's last problem** (`fs-id1169738218686`, an air conditioner's heat
  transfer measured in melted ice) is a Chapter 14 latent-heat problem
  with a cost comparison; it is unkeyed and left out, named in 15.7's
  notes.
- Nothing else moves. 15.5's coefficient-of-performance problems all sit
  where the book prints them; 15.6's power-station problem restates 15.3's
  coal plant and needs only 15.6's own entropy to finish.

## The keyed items

The answer key covers roughly every second problem. Of the 64 problems, 32
carry an inline solution; the unkeyed ones are left out and each section's
`notes` names them. Of the 16 AP items, 8 are keyed and all 8 are multiple
choice; the other 8 are open questions and get an AI-marked suggested
approach, as do all 37 conceptual questions. Two problems are Construct
Your Own Problem items (both in 15.2, neither keyed) and four are
Unreasonable Results items (15.2's seventh, keyed; 15.2's eighth, unkeyed;
15.4's eighth, unkeyed; 15.4's ninth, keyed).

## Errata kept as printed

- **The alt text of Figure 15.12(b) disagrees with the figure and Example
  15.2 on $P_\text{CD}$.** The alt text gives
  $P_\text{CD} = 1.2\times10^{5}\;\text{N/m}^2$, while the printed panel reads
  $2\times10^{5}\;\text{N/m}^2$ and the example computes $W_\text{CD}$ with
  $2.00\times10^{5}\;\text{N/m}^2$ and reaches 650 J, which is the keyed
  total; the drawing itself is right, and the slip is in the alt text alone
  (corrected in the chapter pass, since this pass had read it as a slip of
  the drawing). The figure built for 15.12 defaults to the example's
  numbers, and 15.2's `notes` names the alt text.
- **The caption of Figure 15.26 names the wrong figure.** Its panel (b) is
  "similar to that in Figure 15.27 but reversed", where the book means the
  Carnot cycle of Figure 15.21 in Section 15.4; Figure 15.27 is the heat
  pump's four components. The caption is kept as printed and 15.5's `notes`
  names it.
- **Example 15.7 writes $T'_\text{c}$ for the reservoir Figure 15.34 calls
  $T'_\text{h}$.** Part (b) computes
  $\text{Eff}'_\text{C} = 1 - T_\text{c}/T'_\text{c}$ with 250 K in the
  denominator, the intermediate reservoir the figure labels $T'_\text{h}$;
  the page keeps the book's subscript, colours it with the `T_cprime` row,
  and 15.6's `notes` names it. `chapter.json` carries both `T_hprime` and
  `T_cprime` for 15.6 with meanings that say they are the same reservoir.
- **Table 15.3's 3-heads row lists five microstates twice.** The book
  prints HTHTH, THTHH, HTHHT, THHTH, THHHT and then the same five again,
  where it means the ten distinct sequences; the count of 10 is right. The
  table is kept as printed, and a figure of 15.7 that enumerates the
  sequences will show the ten distinct ones.
- **15.7's summary writes $S = klnW$** with `ln` as an italic product; the
  narrative equation `eip-291` writes it properly, and the equation row of
  `chapter.json` follows the narrative.
- **15.5's Figure 15.29 alt text calls both reservoirs hot**; the caption
  and drawing are right, and the alt is kept as printed.
- **15.6 writes the entropy $s$ in lowercase once** ("the entropy $s$ of a
  system") and 15.7 once ("this expression for $s$"); both mean $S$ and are
  kept as printed.
- **15.5's example writes** "Carnot efficiency in terms of absolute
  temperature is given by**:**" with the colon in bold; the bold is dropped
  as a typesetting slip.

## Prerequisite edges into built chapters

The chapter rests on Chapter 7 for work, energy, conservation of energy,
efficiency and the body as an energy converter; on Chapter 11 for pressure
and its units; on Chapter 12 for pressure as an energy per unit volume; and
on Chapters 13 and 14 for temperature, the kelvin scale, the ideal gas law,
the kinetic-theory result for the average kinetic energy, heat transfer and
latent heat. Within the built chapters the edges placed are: 7.1's `work`
and `work-sign`, 7.2's `net-work`, `work-as-area` and `kinetic-energy`,
7.3's `potential-energy`, 7.5's `friction-dissipates-mechanical-energy`,
7.6's `conservation-of-energy`, `forms-of-energy`, `energy-transformation`
and `efficiency`, 7.7's `power`, 7.8's `energy-conversion-in-humans`,
`metabolic-rate` and `body-efficiency`, 7.9's `energy-degradation`; 11.3's
`pressure` and `force-from-pressure`, 11.6's `gauge-pressure`; 12.2's
`bernoulli-energy-per-volume`; 4.3's `system-of-interest`; 5.1's
`kinetic-friction`. Chapters 13 and 14 both merged before this chapter did,
so their edges are placed too: 13.1's `temperature`, `temperature-scales`,
`convert-temperature-scales`, `absolute-zero` and `thermal-equilibrium`,
13.3's `ideal-gas`, `ideal-gas-law`, `ideal-gas-law-energy` and
`boltzmann-constant`, 13.4's `kinetic-theory`, `thermal-energy` and
`maxwell-boltzmann-distribution`, 13.5's `pv-diagram`; 14.1's `heat`,
`heat-vs-temperature`, `units-of-heat` and
`internal-energy-changed-by-heat-or-work`, 14.2's
`heat-and-temperature-change`, 14.3's `latent-heat` and `heat-of-fusion`,
14.5's `conduction-by-molecular-collisions`. Every id was checked with
`ost find` and stands in `book.json`; 165 edges in all.

## Wanted at chapter level

Nothing. Chapters 13 and 14 had merged when `ch15/book-rows.json` was
merged, so every edge and every symbol this chapter wants from them was
placed on an id that stands in `book.json`; the ids used are listed in
`config.md` § Symbols and above. A section agent that finds it needs an id
this pass did not stage should add it to its own `plan.md` under this
heading.

## BE INSPIRING (rule 23)

Thermodynamics is usually taught as a set of sign conventions and a list
of Greek-named processes, and it is the chapter of this book that a live
drawing can do the most for, because its central object, the $PV$
diagram, is a picture the book draws nine times and never once lets the
reader move.

- **One cylinder and one graph, kept side by side, for the whole of 15.2.**
  A piston the reader drags, a gas whose pressure is shown as a hue on the
  axis and not as a tint on the gas, and beside it the $PV$ diagram drawing
  the path as it is traced, with the area under it filling in the energy
  hue and a readout writing $W = P\Delta V$ with the live numbers. The same
  figure with a choice of process (isobaric, isochoric, isothermal,
  adiabatic) draws each of the four curves from the same point A and shows
  why the adiabat falls below the isotherm: no heat came in to hold the
  temperature up. If one figure of the chapter is built well, it is this
  one, and 15.3's Otto cycle and 15.4's Carnot cycle are the same figure
  run around a loop.
- **A loop that fills as it is walked.** The rectangle ABCDA of 15.12
  should be traced leg by leg, the positive area under AB filling in, the
  negative area under CD subtracting, and the net work left as the
  rectangle's interior, with a readout summing $W_\text{AB} + 0 + W_\text{CD} + 0$
  to 650 J. Let the reader drag the corners and watch the loop's area and
  the number change together; reverse the direction and the sign flips.
  That is 15.2's example and every AP item of the section in one gesture.
- **The engine as three arrows whose widths are energies.** The book draws
  its heat engine as a circle between two reservoirs with $Q_\text{h}$
  going in and $W$ and $Q_\text{c}$ coming out. Drawn with arrow widths
  proportional to the energies, and with two temperature sliders on the
  reservoirs, that schematic becomes the whole of 15.3 and 15.4: as
  $T_\text{c}$ rises toward $T_\text{h}$ the work arrow thins to nothing,
  and as $T_\text{c}$ falls toward absolute zero it fattens toward
  $Q_\text{h}$, and the readout writes $\text{Eff}_\text{C} = 1 - T_\text{c}/T_\text{h}$.
  Run backward, with $W$ going in, it is 15.5's heat pump, and the reader
  sees why $Q_\text{h}$ is bigger than what was paid for.
- **Entropy as two bars that do not match.** The hot reservoir loses
  $Q/T_\text{h}$ and the cold one gains $Q/T_\text{c}$; drawn as two bars in
  the entropy hue at the two temperatures, the cold bar is always the
  taller, and the difference is the total increase. A slider bringing the
  temperatures together shrinks the difference to nothing, which is the
  reversible limit, and a second panel shows the Carnot engine that could
  have run between the two temperatures giving less work the further the
  heat has already fallen. The number 933 J is then something the reader
  has watched disappear, not a line in an example.
- **Coins that are tossed, not tabulated.** Table 15.4's numbers run from 1
  to $10^{29}$ and cannot be read as a shape. A figure that tosses 5, 10,
  or 100 coins each cycle, drops the result on a growing histogram of
  macrostates, and writes $S = k\ln W$ for the current state has a real
  clock in it and earns the transport: the reader watches the histogram
  fill the middle and never the ends, and the second law stops being a
  prohibition and becomes a count.
- **Colour carries the accounting.** With energy, pressure, temperature and
  entropy each in its own hue, the first law is two energy arrows and one
  energy store, the $PV$ diagram is a pressure axis over an ink axis with
  an energy-coloured area, and the definition $\Delta S = Q/T$ reads as
  energy over temperature giving entropy on every readout of 15.6 and 15.7.
  Efficiency and the coefficients of performance stay in ink, which is
  itself the lesson: they are pure numbers, and the temperatures that set
  them are what the reader is moving.

## Left for a later pass

- **A chapter summary or concept sheet.** The two strategy boxes (15.5 and
  15.7) are cited by problems across the chapter and would sit well on a
  sheet of the kind the book's rules foresee; they stay in their sections'
  text for now.
- **A gas-law link.** 15.2's isothermal and adiabatic curves rest on
  $PV = nRT$ and on the monatomic $E_\text{int} = \tfrac32 NkT$, both
  Chapter 13's. When Chapter 13's pages exist the figure of 15.13 could
  show the temperature along each curve from the ideal gas law; the
  section agent should draw the book's account and leave that for the
  chapter pass.
