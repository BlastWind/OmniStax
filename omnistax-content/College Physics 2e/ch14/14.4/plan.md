# Plan: 14.4 Heat Transfer Methods (m42226)

Source: `source.md` (converted from CNXML). Status: built 2026-09-14 without
a review stop, on the chapter config's standing instruction; this file is
left for review after.

The chapter's shortest section: one paragraph, a numbered list defining the
three methods, one sketch figure (the fireplace), one closing sentence, one
Check Your Understanding box, three conceptual questions (one of them with the
thermos bottle drawing), no equation, no worked example, no problem set and no
AP item. One page (rule 11).

## Sub-concepts (page headers)

The book prints no header of its own; every header is the agent's. Three
spans:

1. `methods` **Heat is transferred by only three methods** (book: the
   opening paragraph, from the picnic ice chest and the white roof to "only
   three methods", and the numbered list that defines conduction, convection
   and radiation, kept as the book's one `<ol>` since the paragraph ends on
   the colon that opens it). Introduces `heat-transfer-methods`,
   `conduction`, `convection` and `radiation-heat-transfer`, one row each.
   Uses `heat`, `temperature`, `absolute-zero`, `thermal-energy` (the thermal
   motion of atoms and molecules) and `fluid`.
2. `fireplace` **A fireplace uses all three at once** (book: Figure 14.13
   and the closing sentence, "We examine these methods in some detail…").
   Reinforces the four nodes; the Check Your Understanding box is hosted at
   its end.
3. `thermos` **A thermos bottle is built to slow all three** (Figure 14.14,
   which the book prints inside its third conceptual question, set in the
   text as the chapter config asks, with one short paragraph of OmniStax's
   own in the book's voice saying what the drawing shows, so the figure does
   not stand under a bare header). Reinforces `conduction`, `convection` and
   `radiation-heat-transfer`; the third conceptual question cites it.

The converter's `40.0ºC` is written `40.0^\circ\text{C}` in the hot-tub
question. Learning objectives, the summary and the three glossary terms go to
the tables and views. No cross-reference is printed on this page.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence on this page |
|---|---|---|---|
| heat-transfer-methods | idea | methods | the paragraph and the list; Figure 14.13; cyu1; cq1 |
| conduction | idea | methods | item 1; the conduction arrow of 14.13; cyu1; cq1, cq3 |
| convection | idea | methods | item 2; the convection arrows of 14.13; cyu1; cq1, cq2, cq3 |
| radiation-heat-transfer | idea | methods | item 3; the radiation arrows of 14.13; cyu1; cq1, cq3 |

Every node has a book exercise; nothing is generated.

## Figures

id · replaces · concepts · value add · motion · sliders · headline · graph · 3D

1. `sim-fireplace` · replaces Figure 14.13, the fireplace with its three
   labelled arrows · heat-transfer-methods, conduction, convection,
   radiation-heat-transfer · intuition, by a choice that sorts the three
   mechanisms: the book draws all three paths across one crowded room, and
   here the reader picks one and sees it alone at full weight while the other
   two fade, with the readout saying what carries the heat along it (matter in
   contact, a moving fluid, radiation across the empty room), which is the
   sorting the section teaches; a second choice puts the fire out and brings
   the room to the temperature of the outdoors, and every arrow vanishes,
   which is the sentence the section ends on, that all three transfer heat
   solely because of a temperature difference · **still**: the section states
   no rate and no time, its idea is which mechanism is which, and the config
   keeps 14.13 still for that reason; the convective loop with its clock is
   14.6's (14.21, 14.22), and a wavy arrow drawn moving here would be the
   dummy loop rule 14 forbids · choice "Show" (all three, conduction,
   convection, radiation; default all three), choice "Fire" (burning, out;
   default burning); no slider, since nothing on the page is a number ·
   "In a fireplace, heat is transferred into the room by all three methods,
   and most of it by radiation." (a sentence per choice) · none · 2D. The
   scene is the book's: the chimney at the left, the room with its window at
   the right, the couch, the fire on the hearth; the cold-air arrows curve in
   from the window and along the floor to the fire, the hot-air arrows run up
   the chimney, the wavy arrows leave the flames for the room, and the
   conduction arrow bends from under the logs into the floor. Labels on: three
   kinds, each labelled once on one representative path (Conduction,
   Convection, Radiation), with hover names on the window, the chimney, the
   floor, the couch and the fire. Colour: the whole figure is ink, the
   selected path at full ink and the others faded, and the flame alone is
   drawn as the physical fact (rule 7's third family) in the flame's own
   orange `#f2a33a` and yellow `#ffd166`; the arrows carry no hue because the
   page states no quantity, as the chapter's COLOR.md provides, and a cold
   draught is told by its label and direction, never by a blue tint. Draws
   nothing; the page binds no type.
2. `fig-thermos` · Figure 14.14, the cut-away thermos bottle, a faithful copy
   (kind `figure`) since it serves the third conceptual question and the
   config sets it in the text with its number · conduction, convection,
   radiation-heat-transfer · standardisation only: no slider, no animation,
   every label the book prints (Glass walls with silvered surfaces, Spring
   centering device, Container, Vacuum, Rubber support, Hot or cold liquid)
   drawn beside its part with a leader, and hover names for the three parts
   the question names and the book leaves unlabelled (the stopper, the
   thin-walled long glass neck, the air layer) · still · none · "A thermos
   bottle is built to slow every method of heat transfer at once." · none ·
   2D. Ink throughout: the outer container, the air layer, the double glass
   wall, the vacuum between its walls and the liquid are told apart by fills
   of different weight and by their labels, and the liquid is not tinted, as
   the chapter's colour plan asks (it is hot or cold, and a temperature is
   never a tint on a body). Draws nothing.

Both book images carry only a `height` in the CNXML, so `widths` stays empty
and the text carries no `data-original-width`. Neither is a photograph;
there is nothing to keep or drop.

Extra simulations (rule 15), considered and left: the three examples of the
Check Your Understanding box (a coffee cup held, milk steamed, a cup reheated
in a microwave) are what the reader is asked to think of, and a figure would
answer the box for them; a thermos with its parts removed one at a time would
answer the third conceptual question the same way. None built.

Figure pass (2026-09-15, Claude Fable 5.1). Both figures were screenshot at every choice in both themes and looked at, and both were found clean: the room, the chimney, the couch and the three paths read without their labels, the thermos's parts are each beside their label with a leader. Unchanged.

## Exercises

- `cyu1` (fs-id2405334), check-understanding, Understand, inline after
  `fireplace`, citing `methods`, the book's answer, open; tests
  heat-transfer-methods at full value and conduction, convection and
  radiation-heat-transfer at weight 2 each.
- `cq1` (fs-id1824370), Understand, Earth's core to its surface and the
  surface to space, citing `methods`; AI-marked suggested approach; tests
  heat-transfer-methods, conduction, convection and radiation-heat-transfer.
- `cq2` (eip-idm373396672), Analyze, the person in the 40.0 °C hot tub,
  citing `methods`; AI-marked suggested approach; tests convection at full
  value and heat (the direction a temperature difference sets) at weight 2.
- `cq3` (eip-idm377916080), Understand, the thermos bottle, citing
  `thermos`, the card carrying the book's image as its `figure` with the
  book's alt text and caption; AI-marked suggested approach; tests
  conduction, convection and radiation-heat-transfer.
- No problem set, no AP item; nothing left out, nothing taken from another
  section and nothing held for a later one.

## Views

- Formulas: none; the section has no equation.
- Definitions: no variable; the three glossary terms.
- Concept map: the four nodes with their edges into 11.1 and 14.1.

## Colour

The page binds nothing. `sim-fireplace` and `fig-thermos` state no quantity,
so both are ink, and the one colour on the page is the flame of the
fireplace, drawn as the physical fact.

## Wanted at chapter level

- nothing: the section has no variable and no equation to anchor, and its
  three glossary rows carry no anchor.

Applied by the chapter pass (2026-09-14): nothing to apply; the caption of
Figure 14.14 now spells "labeled" the American way.
