# Plan: 21.3 Kirchhoff's Rules

Written before the page was built, under `ch21/config.md`, which replaces the
per-section stop of root rule 2 and the plan review of root rule 5 with a plan
file left for review.

## Sub-concepts and where each concept is introduced

| span | header | concepts introduced |
|---|---|---|
| `rules` | Two rules that reach any circuit | `kirchhoff-from-conservation` |
| `junction` | Kirchhoff's First Rule | `junction-rule` |
| `loop` | Kirchhoff's Second Rule | `loop-rule` |
| `applying` | Applying Kirchhoff's Rules | `loop-rule-signs`, `apply-kirchhoffs-rules` |

The book's three narrative headers are kept and the opening passage, which the
book leaves unheaded, is given one of its own. The boxed Kirchhoff's Rules, the
boxed Making Connections: Conservation Laws and the boxed Problem-Solving
Strategies for Kirchhoff's Rules are kept verbatim as `div.note`, and the worked
example sits inside `applying`, whose ideas it works. The page binds `current`,
`voltage` and `resistance`, which is what `ch21/COLOR.md` gives 21.3; the wires,
the batteries, the resistor boxes, the letters a to h and the frame are ink.

## Figures

```
sim-junction-rule · Figure 21.22 · junction-rule · variation by slider and intuition: the two currents that leave the junction are set by the reader and the current that arrives follows them, with the width of each arrow drawn from its own current, so the reader sees the sum rather than reading it off one fixed pair of numbers · still, because a junction whose currents are only being set has no time in it · sliders \kIcurtwo and \kIcurthree (current) · headline reads the two currents that leave and the one that must arrive · graph none · 2D, since a schematic lies in the plane of the page
sim-loop-rule · Figure 21.23 · loop-rule, loop-rule-signs · intuition and variation by slider: the book prints the schematic and, beside it, a perspective drawing of the potential as a hill, and here the hill is a real graph of the potential against the position round the loop, rising by the emf at the source and stepping down at each resistance until it is back where it began · still, because nothing in a steady circuit changes with time · sliders \kemf (voltage), \krint, \kResone and \kRestwo (resistance), choice of the direction the loop is walked · headline reads the current, the three drops and the fact that they come to the emf · graph below the scene, since the scene is horizontal · 2D. The direction of the walk is a discrete state and so is a choice, not a slider (root rule 26.1). A marker walking the loop on its own is not built, and no slider carries the point being traversed either, because the graph already draws every point of the walk at once and the reader compares the steps side by side instead of holding an earlier one in mind
sim-sign-rules · Figure 21.24 · loop-rule-signs · standardisation and variation by slider: the book's four panels are kept side by side, since the whole lesson is the comparison between them, but the chosen case is picked out and its change in potential is a live number rather than a formula, so the reader can watch -IR and +emf take values as the current, the resistance and the emf are moved · still · sliders \kIcur (current), \kRes (resistance) and \kemf (voltage), choice of the case, one to four · headline reads the chosen case and the change in potential it gives · graph none · 2D. Four panels carry four labels, well inside root rule 26.7's six, so the labels stay on
sim-two-loop-circuit · Figure 21.21 + 21.25 · kirchhoff-from-conservation, apply-kirchhoffs-rules, junction-rule, loop-rule · variation by slider and intuition: the book draws this circuit twice, once without numbers to say that no series and parallel reduction reaches it and once with the numbers of the worked example, and one live schematic is both, solving the three simultaneous equations at every setting; moving the two emfs drives a branch current through zero and reverses it, which is the section's remark that a wrongly assumed direction costs nothing but a minus sign, and no still drawing can show it · still · sliders \kemfone and \kemftwo (voltage), \kResone and \kRestwo (resistance) · headline reads the three branch currents and names any that runs against the direction assumed for it · graph none · 2D. The internal resistances r_1 and r_2 and the third load resistance R_3 are held at the book's 1.00 Ω so that four sliders carry the figure; they are drawn and labelled all the same
```

Figure pass, 2026-09-15 (Claude Fable 5.1): the four schematics are redrawn at the book's symbol conventions, with zigzag resistors, one-cell sources with a long thin positive plate and their signs, and every current arrow beside its wire on the inside of the loop, its width still carrying the current in Figures 21.22 and 21.21 + 21.25. Figure 21.22's junction label sits below and left of the node instead of on the wire. Figure 21.23's canvas is taller, so the circuit clears the two-line headline, the source's dashed case holds the emf label, and a step label that would land on the graph's axis title drops under its plateau instead. Figure 21.24's current arrow sits under the resistor with its value beneath it, and the cells carry their emf above and their signs below. Figure 21.21 + 21.25 sets the letters a and e beside their junctions rather than on the middle wire, keeps the real current inside the loop and draws the assumed direction faintly on the far side of the wire where the two differ.

Every photograph and unnumbered image of the module: the module prints no
photograph, and every unnumbered image in it belongs to an exercise and stays on
that exercise's card, as `ch21/config.md` settles. Those kept are the T junction
with three currents entering (`Figure_22_03_06.jpg`), the four-source circuit the
four remaining conceptual questions all work on (`Figure_22_03_07-007f.jpg`), the
circuit of the keyed junction and loop problems (`Figure_22_03_08-1bf9.jpg`), the
circuit of the unreasonable-results problem (`Figure_22_03_09.jpg`) and the four
AP circuits (`CNX_APPhysics_21_M3_S06.jpg`, `_S09_img.jpg`, `_S10.jpg`,
`_S12_img.jpg`). An exercise card carries one image, so where an AP item prints
more than one the rest are described in the prompt in the book's own terms: the
four candidate graphs of the first item's part (e), which are straight lines from
the origin to one of four heights, and the modified circuit of the third item's
part (c), which is the first circuit with a second source in the upper wire.

## Extra simulations offered, none built

- A network with a switch that opens one branch, so the reader watches the two
  rules rewrite themselves as a branch is cut. It opens no view the two-loop
  circuit does not already give, since setting an emf to zero there does the
  same thing and keeps the reader's attention on the equations.
- A tally of independent equations, counting junctions and loops against
  unknowns. The count is arithmetic the reader does on paper in the very next
  step, and a figure that does it for them takes away the skill the section is
  teaching.

## Exercises

| kind | count | placement |
|---|---|---|
| `check-understanding` | 1 | inline, after `applying`, keyed by the book |
| `conceptual-question` | 5 | Exercises tab, each with an AI-marked suggested approach |
| `ap-test-prep` | 4 | Exercises tab, all four open items with their options; two carry the book's key and two an AI-marked approach |
| `problem` | 5 of 11 | Exercises tab, the book's key only |

Six problems have no keyed answer and are left out: the loop rule round aedcba,
the two verifications of the worked example's second and third equations, the
loop rule round abcdefghija, the currents of the four-source circuit and the
currents of the circuit the conceptual questions use. No image is copied for any
of them, since each refers to a circuit an exercise that is kept already carries.

## Tables

The module prints no table. The one learning objective, the section summary and
the four glossary entries go to the tables, as root rule 4 asks.

## Wanted at chapter level

- eq-junction-rule → 21.3-junction
- eq-loop-rule → 21.3-loop

No concept or symbol needs fixing: the five concepts of 21.3 and every symbol the
page colours are already in `book.json` as the prep pass staged them.

### What the chapter pass did (2026-09-15)

- Both anchors were written as asked, and the section's seven variable rows were
  anchored to the spans that introduce them.
- Three of the four AP items are keyed in the CNXML, not two: `ap3` carries the
  book's own answer instead of an AI-marked approach, and the `exercise_notes` say so.
- The branch currents of Figure 21.21 + 21.25 now take the true minus sign on the
  canvas, as the book prints them.
