# Plan: 18.5 Electric Field Lines: Multiple Charges

Written before the page was built (2026-09-14), under `ch18/config.md`, which
replaces the per-section stop of rule 2 and the plan review of rule 5 with a
plan file left for review.

## Sub-concept headers

The book prints no headers in this narrative, so the four are the agent's
(`config.md`, Sub-concept headers).

| span id | header | what it holds |
|---|---|---|
| `field-lines` | Field lines, a map of the force on a test charge | the opening two paragraphs, Figures 18.19 and 18.20, and why the closeness of the lines is the field strength |
| `adding-fields` | Adding the fields of two charges | the sentence on multiple charges and Example 18.4 with Figure 18.21 |
| `two-charges` | The field of two charges | the three paragraphs on like and unlike charges, Figures 18.22 and 18.23 |
| `field-line-rules` | The properties of field lines | the five numbered properties and why lines cannot cross |
| `exercise-figures` | Two arrangements the test-prep items ask about | the closing block that carries the two faithful copies |

## Concepts

The seven concept rows of 18.5 are already in `book.json`; the page introduces
each one and uses earlier ones.

| concept | introduced in |
|---|---|
| `electric-field-lines` | `field-lines` |
| `superposition-of-electric-fields` | `adding-fields` |
| `add-electric-fields` | `adding-fields` |
| `superposition-of-coulomb-forces` | `adding-fields` |
| `field-of-two-charges` | `two-charges` |
| `field-line-properties` | `field-line-rules` |
| `sketch-field-lines` | `field-line-rules` |

Used, from earlier sections: `electric-field`, `field-of-point-charge`,
`force-from-electric-field`, `coulombs-law`, `electric-charge`,
`like-charges-repel`, `vector`, `vector-addition`, `inverse-square-law`.

## Types the page binds

`charge` and `electric-field`, which is what `ch18/COLOR.md` says 18.5 binds.
No figure of the page draws a force arrow, so `force` is not bound: the AP
items that ask for a force are answered in words and in the readout of no
figure. Coulomb's constant $k$, the separations $r_1$ and $r_2$, the side $d$
and the angle $\theta$ stay untyped and in ink; $r_1$ and $r_2$ are written
plain rather than through `\krone` and `\krtwo`, which are Chapter 9's
positions, as `config.md` requires.

## Figures

```
sim-one-charge · Figure 18.19 + 18.20 · electric-field-lines, field-line-properties · variation by slider and standardisation: one map redrawn as the reader sets the size and the sign of the charge, which is what the book draws five times in two figures; the reader would otherwise have to imagine the lines thickening and turning round · still, because a field around a charge that stays where it is has no time in it and registers no cycle · sliders: Q (charge, −20 to +20 nC, detents at the book's states −10, −5, +5); choice: the drawing (arrows / field lines) · headline reads "Twelve lines leave the charge of +5.0 nC, and the field 3.0 cm from it is 5.0 × 10^4 N/C." · graph none · 2D
sim-adding-fields · Figure 18.21 · add-electric-fields, superposition-of-electric-fields · variation by slider: the example is worked once in the book at one pair of charges and one pair of distances, and the figure lets the reader move either charge and either distance and watch the right triangle and its angle change · still, because the two fields at the origin are there at once and nothing in the idea takes time · sliders: q_1 (charge, 1 to 20 nC), q_2 (charge, 1 to 20 nC), r_1 (untyped, 1 to 6 cm), r_2 (untyped, 1 to 6 cm), the book's 5.00 nC, 10.0 nC, 2.00 cm and 4.00 cm as the defaults · headline reads "The two fields at O add to 1.26 × 10^5 N/C at 63.4° above the x-axis." · graph none · 2D
sim-two-charges · Figure 18.22 + 18.23 · field-of-two-charges, superposition-of-electric-fields, field-line-properties · variation by slider: the book draws three fixed pairs, two positive, two negative and one of each, and the figure is the pair the reader sets, with the field weak between like charges and strong between unlike ones read off the drawing rather than remembered · still, for the reason above · sliders: q_1 (charge, −3 to +3 q), q_2 (charge, −3 to +3 q), the separation (untyped, 4 to 14 cm); choice: the drawing (arrows / field lines) · headline reads "Two positive charges: the lines bend away from the middle, where the field is weakest." · graph none · 2D
fig-square-wxyz · Figure (faithful copy, unnumbered) · superposition-of-coulomb-forces · standardisation alone, so a faithful copy with no sliders and no animation: the book's scan (`image022.jpg`) is a dashed square whose four labels and whose side $d$ are unreadable at card width, and two AP items ask for a force from it · still · no controls · graph none · 2D
fig-three-objects · Figure (faithful copy, unnumbered) · field-of-two-charges, superposition-of-electric-fields · standardisation alone, so a faithful copy with no sliders and no animation: the AP item asks the reader to compare the lengths of the field vectors near R, S and T and to say where they start, which the card-width scan (`image025.jpg`) does not let anyone do · still · no controls · graph none · 2D
```

The two faithful copies stand in a closing block of the text under the
header `exercise-figures`, as `config.md` allows where the card image is too
small to read the labels from. The cards keep the book's images as well.

## Photographs and unnumbered images

18.5 prints no photograph. The five numbered figures are all diagrams and all
are replaced, the book's image kept as the original of the figure that
replaces it. The seven unnumbered images ride on the exercise cards that
refer to them (`config.md`, Figures that serve exercises):

| image | kept or dropped | why |
|---|---|---|
| `Figure_19_05_02a.jpg` (18.19) | kept as an original of `sim-one-charge` | the book's two panels of the same charge |
| `Figure_19_05_03a.jpg` (18.20) | kept as the second original of `sim-one-charge` | the folded figure's other number |
| `Figure_19_05_04a.jpg` (18.21) | kept as the original of `sim-adding-fields` | Example 18.4's own drawing |
| `Figure_19_05_05a.jpg` (18.22) | kept as an original of `sim-two-charges` | two positive charges with the points P and P′ |
| `Figure_19_05_06a.jpg` (18.23) | kept as the second original of `sim-two-charges` | the folded figure's other number |
| `image016.jpg` | kept on the card of `ap1` | the dipole the item asks about |
| `image022.jpg` | kept on the card of `ap2` and as the original of `fig-square-wxyz` | the square W X Y Z |
| `image025.jpg` | kept on the card of `ap4` and as the original of `fig-three-objects` | the field of R, S and T |
| `image026.jpg` | kept on the card of `ap4` | the blank axes part (b) asks for a graph on |
| `image034.jpg` | kept in the solution of `ap4` | the keyed answer's graph |
| `Figure_19_05_07a.jpg` | kept on the card of `cq2` | the three regions I, II and III |
| `Figure_19_05_08a.jpg` | kept on the card of `p2` | the field near two charges |

## Tables

None; 18.5 prints no table.

## Exercises

Nine cards. The two conceptual questions are inline after the passage each
tests; the four AP items and the three problems sit in the Exercises tab.

| id | source | kind | placement | answer |
|---|---|---|---|---|
| `cq1` | `fs-id2679234` | conceptual question | inline after `field-line-rules` | open, AI-written suggested approach |
| `cq2` | `fs-id3034762` | conceptual question | inline after `two-charges` | open, AI-written suggested approach, the book's figure on the card |
| `ap1` | `fs-id1522982` | AP test prep | end | unkeyed, so an open item with its four options as the book prints them and an AI-written suggested approach |
| `ap2` | `fs-id1532965` | AP test prep | end | keyed (b), a graded choice |
| `ap3` | `fs-id2015726` | AP test prep | end | unkeyed, an open item with its options and an AI-written suggested approach; the shared setup of questions 39–40 is repeated in the prompt |
| `ap4` | `fs-id953643` | AP test prep | end | keyed, an open item carrying the book's four-part answer, the answer's graph inside the solution |
| `p1` | `fs-id1368682` | problem | end | the book keys none of 18.5's four problems |
| `p2` | `fs-id1994588` | problem | end | as above |
| `p3` | `fs-id2622925` | problem | end | keyed, `source_section: "18.3"` |

18.5's four problems are sketching problems and the book keys none of them.
`fs-id1368682` and `fs-id1994588` are kept as open items whose answer is the
drawing the reader makes, since each is a direct exercise of
`sketch-field-lines` and the page's figures are the check; `fs-id2403262` and
`fs-id2663390` are left out and named in `notes`, the first because it asks
for a sketch of Figure 18.23 at a long distance and the second because it asks
for a sketch of a pair the page's own figure already draws. 18.3's
`fs-id3189377`, the test charge halfway between two charges, moves here by
`config.md` but is unkeyed and is left out and named in `notes` as well.

## Wanted at chapter level

Anchors, as `<row id> → 18.5-<span id>`:

- `eq-total-field-perpendicular` → `18.5-adding-fields`
- `eq-total-field-direction` → `18.5-adding-fields`

Those are the only two equation rows the chapter carries for 18.5; the
substitution steps of Example 18.4 are written in the text and are not rows.

The four variable rows of 18.5 (`E_field`, `E_field1`, `E_field2`, `E_tot`,
`q_1`, `q_2`, `r_1`, `r_2`, `θ`) and the four glossary rows want no change.

Concept and symbol fixes: none. Every concept row of 18.5 is introduced by a
span of this page, and no symbol row needed changing.

**Applied by the chapter pass (2026-09-15).** The two equation anchors are
written at `18.5-adding-fields`. The nine variable rows are anchored too:
`E_field` at `18.5-field-lines`, where the field of one charge is drawn, and
`E_field1`, `E_field2`, `E_tot`, `q_1`, `q_2`, `r_1`, `r_2` and `θ` at
`18.5-adding-fields`, which holds Example 18.4. The two concept ids this
plan named among the ones it uses, `vector-addition` and
`inverse-square-law`, are not rows of the book and no row is staged for
them: vector addition is `head-to-tail-method` (3.2), which the section's
coverage names, and the inverse square is carried by `coulombs-law` and
`field-of-point-charge`, which the section already uses. This chapter
introduces neither idea. The page binds `charge` and `electric-field` and
not `force`, and `ch18/COLOR.md` now says so.
