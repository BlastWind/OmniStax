# Plan: 21.4 DC Voltmeters and Ammeters

Written before the page was built, under `ch21/config.md`, which replaces the
per-section stop of root rule 2 and the plan review of root rule 5 with a plan
file left for review.

## Sub-concepts and where each concept is introduced

| span | header | concepts introduced |
|---|---|---|
| `meters` | How the meters are connected | `voltmeter-in-parallel`, `ammeter-in-series` |
| `galvanometer` | Analog Meters: Galvanometers | `galvanometer` |
| `as-voltmeter` | Galvanometer as Voltmeter | `galvanometer-as-voltmeter` |
| `as-ammeter` | Galvanometer as Ammeter | `galvanometer-as-ammeter` |
| `altering` | Taking Measurements Alters the Circuit | `measurement-alters-circuit` |

The book's own narrative headers are kept, and the opening passage, which the
book prints under no header of its own, is given one. The Connections: Limits to
Knowledge box is kept verbatim as a `div.note`, and the Check Your Understanding
box is set inline after `altering`, which is the passage it tests. The page binds
`resistance`, `current` and `voltage`, which is what `ch21/COLOR.md` gives 21.4.

## Figures

```
fig-dashboard · Figure 21.26 · voltmeter-in-parallel · kept photograph: the text sends the reader to it in its first sentence and the gauges in it are the voltmeters the section is about · still photograph · no controls · caption the book's · none · 2D
sim-meter-connection · Figure 21.27 + 21.28 · voltmeter-in-parallel, ammeter-in-series · variation by choice and by slider: the book draws the same loop twice, once with a voltmeter across a component and once with an ammeter in the line, and here one loop takes either meter at any of three places while the readings are written on it, so the reader watches the ammeter read the same current wherever it is put and the voltmeter read a different voltage at each place, which two still drawings cannot show · still, because a meter on a DC loop reads a steady number and nothing in the picture has a clock · choice of the meter, choice of where it is placed, sliders \kResone and \kRestwo (resistance) · headline reads which meter is placed where and what it reads · graph none · 2D, since a schematic lies in the plane of the page
sim-galvanometer · Sim · galvanometer · intuition and variation by slider: the needle of the galvanometer swings to a fraction of full scale that the reader sets with the current, and the sensitivity slider moves the whole scale under it, so the sentence that a 50 μA movement reads half scale at 25 μA becomes a picture · still, because a needle resting at its reading has no time in it · sliders \kIcurG (current) and the current sensitivity (current), slider \krint (resistance) · headline reads the deflection as a fraction of full scale and the voltage across the movement · graph none · 2D
sim-galvanometer-meters · Figure 21.29 + 21.30 · galvanometer-as-voltmeter, galvanometer-as-ammeter · standardisation and variation by slider: the book prints two schematics and two pieces of arithmetic, and here one galvanometer takes either a large resistance in series or a small one in parallel while the resistance needed for the chosen full-scale reading is worked out live, so the reader sees the same movement become either instrument · still, for the same reason · choice voltmeter or ammeter, sliders the full-scale reading (voltage or current, swapped with the choice), \krint (resistance) and the current sensitivity (current) · headline reads what resistance the chosen full-scale reading needs and where it goes · graph none · 2D
sim-meter-disturbs · Figure 21.31 + 21.32 · measurement-alters-circuit · variation by slider: the book draws four fixed cases, the good and the bad for each meter, and here the meter's own resistance runs continuously from far better than the book's good case to far worse than its bad one while the readout states the true value, the measured value and the error, so the reader sees the two cases as the ends of one slider rather than as two pictures · still, for the same reason · choice voltmeter or ammeter, sliders the meter's resistance (resistance) and \kRes, the resistance being measured (resistance) · headline reads the true value, the measured value and the error the meter makes · graph none · 2D
```

Every image of the module is accounted for. The photograph of the car dashboard
(Figure 21.26) is kept, since the text points at it. The digital voltmeter of
Figure 21.27(b) is part of the one image the book prints under that number, so it
travels as the original of `sim-meter-connection`, as `ch21/config.md` says. The
three unnumbered images inside exercises stay on their cards: the ammeter across
a cell (`Figure_22_04_08.jpg`), the two-arm circuit the two questions about meter
points share (`Figure_22_04_09.jpg`), and the voltmeter on a cell
(`Figure_22_04_10.jpg`). The image the book prints as part (a) of the answer to
the ammeter-in-series problem is an answer and not a question, so it is not
copied, and that part of the key is named in `exercise_notes`.

## Extra simulations offered, none built

- A multimeter set to the wrong function and dropped into a working circuit, the
  fuse blowing when it is put across a source in ammeter mode. It would open a
  view the required figures do not, but it is the whole of a conceptual question
  this section already sets, and answering the question for the reader is worse
  than letting the reader answer it.
- A gallery of galvanometer sensitivities, from a school meter to a mirror
  galvanometer, with the voltmeter resistance each allows. `sim-galvanometer` and
  `sim-galvanometer-meters` already carry the sensitivity on a slider, so the
  gallery would be the same numbers in a less useful arrangement.

## Exercises

| kind | count | placement |
|---|---|---|
| `check-understanding` | 1 | inline, after `altering`, keyed by the book |
| `conceptual-question` | 4 | Exercises tab, each with an AI-marked suggested approach |
| `problem` | 8 of 15 | Exercises tab, the book's key only |
| `ap-test-prep` | 0 | the module prints none, and the CNXML carries no AP element |

Seven problems have no keyed answer and are left out: the sensitivity of the
galvanometer in a 25.0 kΩ voltmeter on its 100 V scale, the series resistance for
a 3000 V reading, the shunt for a 300 mA reading, the two parts of the 10.0 Ω
galvanometer made into an ammeter, the lithium cell measured with a 1.00 kΩ
voltmeter, the 1.00 MΩ voltmeter across a 75.0 kΩ resistor, and the first of the
two Unreasonable Results problems.

## Tables

The module prints no table. The five learning objectives, the section summary and
the eight glossary entries go to the tables, as root rule 4 asks.

## Wanted at chapter level

- eq-voltmeter-resistance → 21.4-as-voltmeter
- eq-shunt-resistance → 21.4-as-ammeter

No concept or symbol needs fixing: the six concepts of 21.4 and every symbol the
page colours (`R_res`, `r_int`, `R_restot`, `I_Gcurr`, `I_curr`, `V_volt`) are
already in `book.json` as the prep pass staged them.

### What the chapter pass did (2026-09-15)

- Both anchors were written as asked, and the section's six variable rows were
  anchored: `r_int` and `I_Gcurr` to `21.4-galvanometer`, `R_res`, `R_restot` and
  `V_volt` to `21.4-as-voltmeter`, and `I_curr` to `21.4-as-ammeter`.
- The galvanometer paragraph wrote the movement's own reading as `\kIcur\kRes`,
  which colours the 25 Ω as the resistance wired to the meter and the 50 µA as the
  current in the branch being measured. It now reads `\kIcurG\krint`, and the two
  meanings were widened to cover the movement alone as well as the instrument built
  from it.
- Figure 21.31's caption carried a literal `>>` inside `data-original-caption`,
  which broke the attribute for any reader of the markup and failed the folded-figure
  test; it is now the much-greater-than sign.
- Three figure fixes: the voltmeter's leads no longer cut across the internal
  resistance and its label, the galvanometer's canvas was too short for its own
  readout and its terminals, and the needle struck through the number on the dial.
