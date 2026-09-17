# Plan: 21.6 DC Circuits Containing Resistors and Capacitors

Written before the page was built, under `ch21/config.md`, which replaces the
per-section stop of root rule 2 and the plan review of root rule 5 with a plan
file left for review.

## Sub-concepts and where each concept is introduced

| span | header | concepts introduced |
|---|---|---|
| `rc-circuits` | RC circuits | `rc-circuit`, `charging-a-capacitor`, `time-constant`, `fraction-per-time-constant` |
| `discharging` | Discharging a capacitor | `discharging-a-capacitor` |
| `timing` | RC circuits for timing | `rc-timing-circuits` |

The book's own three narrative headers are kept, and the opening paragraph about
the flash camera stands at the head of the first span, where the book prints it.
The strobe-light example sits inside `discharging`, whose exponential it uses, and
the heart-defibrillator example inside `timing`. The page binds `voltage`, `time`,
`capacitance`, `resistance`, `current` and `charge`, which is what `ch21/COLOR.md`
gives 21.6.

## Figures

```
sim-rc-charge-discharge · Figure 21.37 + 21.38 · rc-circuit, charging-a-capacitor, time-constant, discharging-a-capacitor, fraction-per-time-constant · variation by slider, intuition and flow by animation: the reader raises the resistance or the capacitance and watches the same curve stretch along an axis marked in multiples of the time constant, while the current in the wires and the charge on the plates fill or drain in step, which two still drawings of a curve cannot show · moving, because the charging of a capacitor is an event in time: one loop runs the switch from t = 0 to five time constants and the point walks the curve while the arrow in the wire shrinks · sliders \kRes (resistance), \kCap (capacitance) and \kemf (voltage), choice charging or discharging · headline reads how far the voltage has come and what the time constant is · graph below the circuit, since the circuit is a wide horizontal scene · 2D, since a schematic lies in the plane of the page
sim-flashing-lamp · Figure 21.40 · rc-timing-circuits, time-constant, discharging-a-capacitor · variation by slider and flow by animation: the lamp charges slowly through the resistor and empties quickly through itself once the threshold is passed, so the sawtooth is drawn as it happens and the flash period follows the resistance and the capacitance the designer chooses, which is the whole of the passage and is what the book's still sawtooth cannot show · moving, because the circuit repeats: the cycle is one full flash, charge and discharge together, and the lamp lights as the voltage falls · sliders \kRes (resistance), \kCap (capacitance) and the threshold fraction of the emf (untyped) · headline reads the flash period and how many flashes a minute that is · graph below the circuit, for the same reason · 2D
```

Figure pass, 2026-09-15 (Claude Fable 5.1): both circuits are redrawn at the book's symbol conventions, with a zigzag resistor, a one-cell source with a long thin positive plate and its signs, a capacitor of two equal plates with the wire broken between them, a closed switch as a hinged blade lying on its contact, and the current arrow beside the wire on the inside of the loop, its length still following the current. Figure 21.40's lamp is the book's circle with a coiled filament, and its name sits beside it rather than under it on the wire.

Every photograph and unnumbered image of the module: Figure 21.39, the rufous
hummingbird stopped by a capacitor-driven flash, is kept as a photograph, because
the strobe example is about that picture and the text points the reader at it
twice. The two unnumbered images inside exercises stay on their cards, as
`ch21/config.md` settles: `Figure_22_06_05.jpg`, the bleeder resistor of a
conceptual question, and `Figure_22_06_07.jpg`, the bleeder circuit of a keyed
problem. `Figure_22_06_06.jpg` belongs to no exercise this page sets and is not
copied.

## Extra simulations offered, none built

- A strobe lamp over a bullet crossing an apple, with the flash duration set by
  the time constant and the blur drawn as it would be photographed. It would be a
  handsome picture, but the quantity it turns on is the crossing time, which is a
  piece of kinematics from Chapter 2 rather than anything this section teaches,
  and the worked example already carries the arithmetic.
- A pacemaker firing at a rate the reader sets. It would repeat what the flashing
  lamp already shows, one threshold and one time constant setting a period, in a
  scene the section describes in words only.

## Exercises

| kind | count | placement |
|---|---|---|
| `check-understanding` | 1 | inline, after `timing`, keyed by the book |
| `conceptual-question` | 10 | Exercises tab, each with an AI-marked suggested approach |
| `ap-test-prep` | 2 | Exercises tab; one is keyed by the book and one is an open item with its options |
| `problem` | 9 of 18 | Exercises tab, the book's key only |

The CNXML was read for each AP item's key rather than the note that said none of
the chapter's thirteen is keyed: the second item of this section, the uncharged
capacitor charged through $R_1$ and then discharged through $R_2$, carries the
book's own answer and is set with it, while the first, a two-part multiple choice,
has none and is kept as an open item with its options.

Nine problems have no keyed answer and are left out: the pacemaker's resistance,
the four time constants from two capacitors and two resistors, the initial current
and time constant of a 500 Ω circuit, the ECG monitor's maximum capacitance, the
exact discharge to one per cent, the flashing earring, the unreasonable
capacitance, and the two Construct Your Own Problem items.

The Critical Thinking problem on power in series and parallel combinations is
answerable from 21.1 rather than from this page, but `ch21/config.md` settles that
no exercise of this chapter moves, so it stays where the book prints it, is tagged
with 21.1's concepts and is named in `exercise_notes`.

## Tables

The module prints no table. The learning objectives, the section summary and the
three glossary entries go to the tables, as root rule 4 asks.

## Wanted at chapter level

- eq-capacitor-voltage → 21.6-rc-circuits
- eq-initial-current → 21.6-rc-circuits
- eq-charging-capacitor → 21.6-rc-circuits
- eq-time-constant → 21.6-rc-circuits
- eq-discharging-capacitor → 21.6-discharging

No concept or symbol needs fixing: the six concepts of 21.6 and every symbol the
page colours are already in `book.json` as the prep pass staged them.

### What the chapter pass did (2026-09-15)

- All five anchors were written as asked, and the section's ten variable rows were
  anchored, `V_zero` to `21.6-discharging` and the rest to `21.6-rc-circuits`.
- The two states of the capacitor are now labelled "charging" and "discharging",
  since "being charged" did not fit the segmented control's row.
