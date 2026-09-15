# Plan: College Physics 2e, 21.5 Null Measurements

Written before the page was built (root rule 5), under the standing decision in
`ch21/config.md` that the per-section stop is replaced by a plan left for review.

## Sub-concepts

The module prints two narrative headers of its own, and the paragraphs before
the first of them are a block in their own right, so the page has three spans.

| Span id | Header | What it holds |
|---|---|---|
| `null-measurements` | Measuring without disturbing the circuit | why standard meters alter what they measure, and what a null measurement does instead |
| `potentiometer` | The Potentiometer | the voltmeter that reads a terminal voltage rather than an emf, the long wire with its steady $IR$ drop, the balance against a standard emf, and what limits the result |
| `wheatstone-bridge` | Resistance Measurements and the Wheatstone Bridge | the ohmmeter and the two standard-meter configurations, then the bridge, its balance and its accuracy |

The second header is the book's for the potentiometer and the third is the
book's for the bridge; the first is OmniStax's, since the book prints none over
its opening paragraphs.

## Concept nodes

The four nodes are already in `book.json` from the chapter's prep pass and this
page introduces all four: `null-measurement` in `null-measurements`,
`potentiometer` in `potentiometer`, and `ohmmeter` and `wheatstone-bridge` in
`wheatstone-bridge`. The page also uses 21.2's `terminal-voltage`,
`internal-resistance` and `emf`, 21.4's `measurement-alters-circuit` and
`galvanometer`, 21.1's `parallel-connection`, 20.2's `ohms-law`, `resistance` and
`ir-drop`, and 19.1's `potential-difference`, as the coverage rows record.

## Figures

Every figure of this section is a circuit schematic and nothing in any of them
has a clock, so all four are still: none registers a cycle, none carries a
transport, and a slider or a choice alone redraws it (root rule 14, and the
chapter's `config.md`, which gives motion to 21.6 alone). All four are 2D, since
each is a schematic and its plane is the canvas (root rule 28.1). Each replaces
a book diagram, so each is a Figure with the book's number, keeps the book's
image as its original and the book's caption as the original caption. Labels are
on in every one of them: no figure carries more than six entity labels, and none
of them collides at any slider extreme, so root rule 26.7 leaves them shown.

```
sim-voltmeter-emf · Figure 21.33 · null-measurement, potentiometer · variation: the reader dials the meter's own resistance and the battery's internal resistance and watches the reading fall short of the emf, which the still drawing can only assert · still, because a meter held on a battery has no time in it · sliders: the emf (voltage), the internal resistance (resistance), the meter's resistance (resistance) · headline: what the meter reads against the emf, with the shortfall · graph none · 2D
sim-potentiometer · Figure 21.34 · potentiometer · variation: the contact slides along the wire and the galvanometer swings through zero, which is the whole of the method and is exactly what a still picture of one balanced state cannot show · still, because the balance is a position and not a history · sliders: the unknown emf (voltage), the resistance up to the contact (resistance), the current down the wire (current); choice: which cell is in the branch, the unknown or the standard · headline: what the galvanometer reads and where the balance lies · graph none · 2D
sim-ohmmeter · Figure 21.35 · ohmmeter · variation: the two configurations are put behind one choice and the calculated resistance is set beside the true one, so the reader sees which meter spoils which reading · still, because nothing in either configuration changes with time · sliders: the resistance being measured (resistance), the source's internal resistance (resistance); choice: the configuration, (a) or (b); the ammeter's own resistance is fixed at 0.500 Ω, drawn in the resistance hue as a number, because the section stages no symbol for it and a section may not add one · headline: the resistance the configuration calculates against the true one · graph none · 2D
sim-wheatstone · Figure 21.36 · wheatstone-bridge · variation: the variable arm is dialled and the galvanometer swings through zero, and the balance condition is then read off the three known arms · still, for the same reason as the potentiometer · sliders: the variable arm (resistance), the unknown resistance (resistance), the second known arm (resistance) · headline: what the galvanometer reads and what the bridge gives for the unknown · graph none · 2D
```

No figure folds: the four diagrams are four different instruments, and nothing
is gained by drawing two of them on one canvas.

## Photographs and unnumbered images

The section prints no photograph and carries no image inside an exercise, so
nothing is kept or dropped on those counts.

## Extra simulations considered

- A plot of the calculated resistance against the true one for both ohmmeter
  configurations, so that the reader sees where each is worst. Left: the two
  numbers side by side in `sim-ohmmeter` already say it, and the graph would add
  an axis to a page that has none.
- A figure in which the galvanometer's sensitivity is dialled and the reader is
  asked how close to zero the needle can be brought. Left: the Check Your
  Understanding box asks the same question in words, and a needle that moves
  less is not a picture worth a canvas.

## Tables

None; the module prints none.

## Types the page binds

`resistance`, `voltage` and `current`, which is what `ch21/COLOR.md` gives 21.5.
The resistance ratios, the letters G, V and A on the meters, the letters a, b, c
and d on the bridge, the wires, the battery and the frame are untyped and in ink.
No new type and no new symbol row: the section's eight variables are already
staged in `ch21/book-rows.json` or owned by Chapters 19 and 20.

## Exercises

| Kind | Count | Placement |
|---|---|---|
| `check-understanding` | 1 | inline, after `wheatstone-bridge`, which is the passage it tests |
| `conceptual-question` | 2 | the Exercises document |
| `problem` | 4 of 6 | the Exercises document |

The two problems the book leaves without a keyed answer, the dry cell balanced
against an alkaline standard and the bridge whose variable arm is to be set, are
left out and named in `notes`. The section carries no AP test prep item: the
module's CNXML has no `ap-test-prep` element, and its exercises are two
conceptual questions and six problems. Nothing moves in or out of the section.

## Wanted at chapter level

- `eq-potentiometer` → 21.5-potentiometer
- `eq-wheatstone-bridge` → 21.5-wheatstone-bridge

No concept or symbol fix is wanted: the four concept rows and the eight variable
rows read correctly against the module, and every symbol the page writes has a
row already.

### What the chapter pass did (2026-09-15)

- Both anchors were written as asked, and the section's eight variable rows were
  anchored to the spans that introduce them.
- Three figure fixes: the reading beside the potentiometer's galvanometer ran off
  the canvas at the far end of the wire and claimed a reading past full scale, the
  "the switch" label of the Wheatstone bridge was cut by the bottom of its canvas,
  and the ammeter's caption in the ohmmeter sat where the headline's second line falls.
- The caption of Figure 21.35 said "the two ways the book draws", which is the page
  talking about itself (root rule 17); it now names the two configurations instead.
- Two controls were too long for their row: the cell in the branch is now labelled
  "which cell", and the two configurations of the ohmmeter are a dropdown, as root
  rule 26.1 allows where a row would wrap.
