# Plan: 21.1 Resistors in Series and Parallel

Written before the page was built, under `ch21/config.md`, which replaces the
per-section stop of root rule 2 and the plan review of root rule 5 with a plan
file left for review.

## Sub-concepts and where each concept is introduced

| span | header | concepts introduced |
|---|---|---|
| `connections` | The two simplest connections | — (the passage names the resistor and the resistance and points at Figure 21.2) |
| `series` | Resistors in series | `series-connection`, `series-resistance`, `voltage-divides-in-series` |
| `parallel` | Resistors in parallel | `parallel-connection`, `parallel-resistance`, `current-divides-in-parallel`, `parallel-resistance-least` |
| `combinations` | Combinations of series and parallel | `reduce-resistor-network` |
| `practical` | What the resistance of the wires does | `wire-resistance-ir-drop` |

The book's own narrative headers are kept; the three worked examples sit inside
the spans whose ideas they work, and the two Major Features boxes and the
Problem-Solving Strategies box are kept verbatim as `div.note`. The page binds
`resistance`, `current`, `voltage` and `power`, which is what `ch21/COLOR.md`
gives 21.1.

## Figures

```
sim-four-resistors · Figure 21.2 · series-connection, parallel-connection, parallel-resistance-least · variation by slider and by choice: the same four resistors are rewired and the reader watches the total climb above the largest of them in series and fall below the smallest of them in parallel, which no still drawing of the two wirings can show · still, because a connection of resistors that is only being looked at has no time in it · sliders \kResthree (resistance) and \kResfour (resistance), choice series or parallel · headline reads how the four are wired and what the four together come to · graph none · 2D, since a schematic lies in the plane of the page
sim-three-resistors · Figure 21.3 + 21.4 + 21.6 · series-resistance, voltage-divides-in-series, parallel-resistance, current-divides-in-parallel, reduce-resistor-network · variation by slider and standardisation: one battery and three resistors are drawn in the book's three wirings beside the one resistance each reduces to, and the drops, the branch currents and the power follow the sliders, so the reader reads all three worked examples off one picture · still, for the same reason · sliders \kV (voltage), \kResone, \kRestwo and \kResthree (resistance), choice of the three wirings · headline reads the wiring, the equivalent resistance and the current the source drives · graph none · 2D
sim-reduce-network · Figure 21.5 · reduce-resistor-network · standardisation and variation by choice: the book prints five drawings of one network and the reader must carry the arithmetic between them, whereas here one network collapses a step at a time with the group being combined picked out and its arithmetic written under it · still · sliders \kRestwo and \kResthree (resistance), choice of the step, one to five · headline reads which group is being combined and what it comes to · graph none · 2D. Seven resistors means seven labels, which is past root rule 26.7's six, but they stay on: a schematic whose resistors are unnamed cannot be read at all, the labels sit on a fixed lattice that no slider moves, and they do not collide at either slider extreme
sim-dimming-light · Figure 21.7 · wire-resistance-ir-drop · variation by slider and intuition: switching the motor on dims the bulb in the picture while the readout says by how much the wires took the voltage down, which is the whole of the passage and is exactly what the book's conceptual drawing cannot do · still · sliders \kResone (resistance, the wires), \kRestwo (resistance, the bulb) and \kResthree (resistance, the motor), choice motor off or on · headline reads the voltage that reaches the bulb and the power it then dissipates · graph none · 2D
```

Every photograph and unnumbered image of the module: Figure 21.4 is a composite
whose part (b) is a photograph of a distribution board, and it travels as an
original of `sim-three-resistors` rather than as a figure of its own, since the
text points at it only to say that a house is wired in parallel. The five
unnumbered images inside exercises stay on their cards: the two AP circuits
(`CNX_APPhysics_21_M1_S01_img.jpg`, `CNX_APPhysics_21_M1_S02_img.jpg`) and the
switch diagrams (`Figure_22_01_08.jpg`, `Figure_22_01_09.jpg`).
`Figure_22_01_10.jpg`, the transmission tower, belongs to an unkeyed problem
that is left out, so it is not copied.

## Extra simulations offered, none built

- A ladder of holiday lights, forty bulbs in series, one of them burned out
  open and then burned out shorted. It would open a view the required figures do
  not, but it is the whole of a conceptual question the Exercises tab already
  sets, and answering the question for the reader is worse than letting the
  reader answer it.
- A resistance box in which the reader assembles a wanted resistance out of
  resistors that are all too large. The same objection: it is a conceptual
  question of this section, and the network reducer already shows how a
  parallel group falls below its smallest member.

## Exercises

| kind | count | placement |
|---|---|---|
| `check-understanding` | 1 | inline, after `practical`, keyed by the book |
| `conceptual-question` | 12 | Exercises tab, each with an AI-marked suggested approach |
| `ap-test-prep` | 5 | Exercises tab; two are keyed by the book and three are open items with their options |
| `problem` | 7 of 13 | Exercises tab, the book's key only |

Six problems have no keyed answer and are left out: the series and parallel
resistance of three given resistors, the toaster and frying pan on one fuse, the
currents and powers for two resistors on a 48.0 V battery, the power dissipated
by $R_3$ in the combined circuit, the ceramic insulators on a transmission line,
and the unreasonable parallel pair. The AP item that asks the reader to select
two answers is kept as an open item, since a card that takes one choice cannot
take two, and the book's key "(a), (b)" is its solution.

## Tables

The module prints no table. The learning objectives, the section summary and the
nine glossary entries go to the tables, as root rule 4 asks.

## Wanted at chapter level

- eq-series-resistance → 21.1-series
- eq-series-voltage → 21.1-series
- eq-parallel-resistance → 21.1-parallel
- eq-parallel-current → 21.1-parallel
- eq-mixed-total-resistance → 21.1-combinations

No concept or symbol needs fixing: the nine concepts of 21.1 and every symbol
the page colours are already in `book.json` as the prep pass staged them.

### What the chapter pass did (2026-09-15)

- All five anchors were written as asked: `eq-series-resistance` and
  `eq-series-voltage` to `21.1-series`, `eq-parallel-resistance` and
  `eq-parallel-current` to `21.1-parallel`, and `eq-mixed-total-resistance` to
  `21.1-combinations`.
- Every one of the section's nineteen variable rows was anchored to the span that
  introduces it, which the chapter pass added beyond the plan.
- One symbol the page colours had no variable row after all: `R_resfour`, which the
  text names as the resistance of her shoes and the first figure carries on a
  slider. A row was added to 21.1 for it, anchored to `21.1-series`.
- The five AP items were read against the CNXML: all five are keyed, not two.
  `ap2` and `ap4` became graded choices with the book's key, and the
  `exercise_notes` were rewritten to say so.
