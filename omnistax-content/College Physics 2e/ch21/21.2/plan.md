# Plan: 21.2 Electromotive Force: Terminal Voltage

Written before the page was built, under `ch21/config.md`, which replaces the
per-section stop of root rule 2 and the plan review of root rule 5 with a plan
file left for review.

## Sub-concepts and where each concept is introduced

| span | header | concepts introduced |
|---|---|---|
| `dimming` | Why a source's output voltage falls | — (the opening passage, which names the internal resistance and points the reader at the two parts of a source) |
| `emf-defined` | Electromotive force | `emf` |
| `internal` | Internal resistance | `internal-resistance`, `battery-voltage-from-chemistry` |
| `terminal` | Terminal voltage | `terminal-voltage`, `current-with-load`, `charging-reverses-the-current` |
| `multiple-sources` | Multiple voltage sources | `sources-in-series`, `sources-in-parallel` |
| `animals` | Animals as electrical detectors | — |
| `solar-cells` | Solar cell arrays | — |

The book's own narrative headers are kept and the opening passage, which the book
prints without a header, is given one. The worked example sits inside `terminal`,
the Things Great and Small box inside `internal`, and the two Take-Home
Experiments are kept verbatim as `div.note` where the book prints them. The page
binds `voltage`, `resistance`, `current` and `power`, which is what
`ch21/COLOR.md` gives 21.2.

## Figures

The chapter's `config.md` asks that 21.2's schematics stay separate rather than
fold, since each is a different connection of sources, and they do. Three of the
thirteen numbered figures are photographs the text points at and are kept, three
are faithful copies, six are sims and one is dropped.

```
sim-source-parts · Figure 21.9 · emf, internal-resistance, terminal-voltage · variation by slider: the book's drawing of a cell's two parts is a still anatomy, and here a meter across the terminals reads the emf exactly while no current is drawn and falls away from it as soon as current is, which is the whole of the figure's caption and is what no still drawing can show · still, because a cell that is only being read has no time in it · sliders \kemf (voltage), \krint (resistance) and \kIcur (current) · headline reads what the meter across the terminals says and how far it has fallen below the emf · graph none · 2D, since a schematic lies in the plane of the page
sim-load · Figure 21.12 · current-with-load, terminal-voltage · variation by slider and intuition: the book prints one circuit and works four cases of it in the example, whereas here the load and the internal resistance move together and the reader watches the current, the terminal voltage and the power the load takes follow, so the worked example is one path through the picture · still, for the same reason · sliders \kemf (voltage), \krint (resistance) and \kRload (resistance) · headline reads the current the source drives, the terminal voltage it holds and the power the load dissipates · graph none · 2D
sim-series-sources · Figure 21.15 · sources-in-series · variation by slider and by choice: two cells in series add their emfs and their internal resistances, and turning the second cell round makes the sum algebraic, which the book states in words and draws only once · still · sliders \kemfone, \kemftwo (voltage), \krintone, \krinttwo (resistance), choice of the second cell's sense · headline reads the total emf and the total internal resistance the pair presents · graph none · 2D
sim-charging · Figure 21.17 · charging-reverses-the-current, terminal-voltage · variation by slider: the charger and the battery are two sources in series with their emfs opposed, and the reader moves the charger's emf until the current changes direction and watches the battery's terminal voltage rise above its own emf, which is the sign argument of the passage made visible · still · sliders \kemfone, \kemftwo (voltage), \krintone, \krinttwo (resistance) · headline reads which source is driving, how large the current is and what the battery's terminals then read · graph none · 2D
sim-flashlight · Figure 21.18 · sources-in-series, current-with-load · variation by slider and intuition: the flashlight's bulb brightens and dims as the cells age, so the Take-Home Experiment's question, what old cells do to a torch, is answered in the picture while the readout writes the current the two cells drive through the load · still · sliders \kemfone, \kemftwo (voltage), \krintone, \krinttwo (resistance) and \kRload (resistance) · headline reads the current in the loop and the power the bulb gives out · graph none · 2D
sim-parallel-sources · Figure 21.19 · sources-in-parallel · variation by slider and by choice: one source and two identical sources in parallel drive the same load in turn, and the reader watches the emf stay where it was while the internal resistance halves and the current climbs, which is the third learning objective and which the book's two-part drawing only asserts · still · sliders \kemf (voltage), \krintone, \krinttwo (resistance) and \kRload (resistance), choice of one source or two in parallel · headline reads the total internal resistance and the current the load then gets · graph none · 2D
```

Figure pass, 2026-09-15 (Claude Fable 5.1): every schematic is redrawn at the book's symbol conventions, with zigzag resistors, one-cell sources whose long thin plate is the positive terminal and whose signs are drawn, current arrows beside their wires on the inside of the loop, and every label off every wire. Figure 21.9 and Figure 21.12 have their case drawn wide enough that the emf label sits inside it rather than across its border; Figure 21.17's battery now has its positive plate uppermost, so the two emfs really are opposed as the current in the readout assumes (the earlier drawing had them aiding); Figure 21.18's lamp is the book's coiled filament under a radial glow, its name, value, "the bulb" and its power sit beside it off the right-hand wire, and r₂ is moved left so its stacked labels clear that wire; Figure 21.19's case is drawn wide and deep enough that the emf label, r₂'s value and the two source captions all sit inside it. The three faithful copies (Figures 21.10, 21.11, 21.14) are unchanged except that the charger's cables are drawn under its posts and the signs sit beside the posts rather than on the cables.

Faithful copies, which carry the book's image and its caption and no control,
because each is a drawing with nothing in it to vary and no depth to turn
(root rule 24.3, and root rule 24.9 for the second of them, whose arrows are a
mechanism the book has already drawn):

- Figure 21.10, the artist's conception of a lead-acid cell, in the Things Great
  and Small box.
- Figure 21.11, the two electrons driven onto the anode by one reaction.
- Figure 21.14, the car battery charger drawn pictorially. The schematic of the
  same connection is `sim-charging`, which is why the pictorial stays a copy.

Photographs kept, each where the text points the reader at it: Figure 21.8, the
four voltage sources; Figure 21.13, the two battery testers; and Figure 21.20,
the sand tiger shark, which the passage on electroreception is about. Figure
21.16, the old print of cells made into a battery, is decoration and is dropped.
The one unnumbered image of the module, `Figure_22_02_14.jpg`, travels on the
card of the conceptual question that refers to it.

## Extra simulations offered, none built

- A rack of solar cells the reader wires into rows and columns until the array
  reaches a wanted voltage and current. It would open a view the required
  figures do not, but it is exactly the Take-Home Experiment the section sets
  with playing cards, and building it answers the reader's own exercise.
- An electric eel's 140 rows of 5,000 electroplaques drawn as a grid of cells.
  The arrangement is a series and parallel combination the page has already
  taught, and the one number it would produce is the answer to a problem in the
  Exercises tab.

## Exercises

| kind | count | placement |
|---|---|---|
| `conceptual-question` | 6 | Exercises tab, each with an AI-marked suggested approach |
| `ap-test-prep` | 2 | Exercises tab; one is keyed, and the unkeyed choice item is an open item with its four options |
| `problem` | 7 of 17 | Exercises tab, the book's key only |

The module prints no Check Your Understanding box, so the page has no inline
exercise and no host div. Ten problems have no keyed answer and are left out: the
number of carbon-zinc cells in a 9-V battery, the terminal voltage and power of a
1.54-V cell supplying 2.00 A, the motorcycle battery on charge, the car battery
charged at 60 A, the radio on nicad and alkaline cells, the child's toy on four
cells, the 20.0-kV power supply grasped by hand, the electric eel's
electroplaques, the integrated-concepts battery whose temperature rises, and the
unreasonable dry cell supplying 1.00 W.

## Tables

The module prints no table. The learning objectives, the section summary and the
four glossary entries go to the tables, as root rule 4 asks.

## Wanted at chapter level

- eq-terminal-voltage → 21.2-terminal
- eq-current-with-load → 21.2-terminal
- eq-sources-in-series → 21.2-multiple-sources
- eq-sources-opposed → 21.2-terminal
- eq-sources-in-parallel → 21.2-multiple-sources

No concept or symbol needs fixing: the eight concepts of 21.2 and every symbol
the page colours are already in `book.json` as the prep pass staged them.

### What the chapter pass did (2026-09-15)

- Four of the five anchors were written as asked. `eq-sources-opposed` was given
  `21.2-multiple-sources` rather than `21.2-terminal`, because the text prints the
  opposed pair inside the `multiple-sources` span, beside the sources in series.
- Every one of the section's eleven variable rows was anchored: `emf` to
  `21.2-emf-defined`, where the passage defines it, `r_int` to `21.2-internal`,
  and the rest to `21.2-terminal` or `21.2-multiple-sources` as the text takes them.
- Both AP items are keyed in the CNXML, not one: `ap1` became a graded choice with
  the book's key and the `exercise_notes` were rewritten to say so.
- Two figure fixes: the "no current is being drawn" label of Figure 21.9 was struck
  through by the dashed case, and the load of Figure 21.12 read "1010 per cent of
  the load" at the small end of its slider, which now reads as a sentence.
