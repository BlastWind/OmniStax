# Plan: 2.1 Displacement (m42033)

Source: `source.md` (converted from CNXML). Book pages 58 to 60.

## Sub-concepts (page headers)

The book has three headers: Position, Displacement, Distance. Proposed
page structure, one block per idea:

1. **Position needs a reference frame** (book: Position)
2. **Displacement is a change in position** (book: Displacement, first half)
3. **The sign carries the direction** (book: Displacement, professor and passenger calculations)
4. **Distance and distance traveled** (book: Distance + misconception alert)
5. Check Your Understanding (cyclist) stays inline as a Try it card.

Learning objectives, section summary and glossary come out of the running
text into the views. AP test prep, conceptual questions and the four
problems go to the Exercises document.

## Concept nodes (all ideas; no results, no skills)

| id | kind | name | prereqs | evidence |
|---|---|---|---|---|
| reference-frame | idea | Reference frame | – | definition of position; AP question distinguishes position from displacement |
| position | idea | Position | reference-frame | glossary; AP question |
| displacement | idea, eq-dx | Displacement, Δx = x_f − x_0 | position | CYU (a), problems 1–4 (c), AP |
| distance | idea | Distance (magnitude of displacement) | displacement | CYU (c), problems 1–4 (b), CQ 2 |
| distance-traveled | idea | Distance traveled (path length) | position | CYU (b), problems 1–4 (a), CQ 1–3 |

The equation Δx = x_f − x_0 is the definition of displacement, so it hangs
on the idea node (`eq` field) rather than getting a result node of its own.
"Choose which direction is positive" is stated here but only tested in
2.2, so it becomes a node there.

2.5's external prerequisite `displacement` will resolve to this node once
2.1 is built.

## Figures

id · replaces · concepts · what moves · sliders · headline · graph · 3D

1. `sim-displacement` · Figure 2.3 + 2.4 (the professor and the passenger) · displacement, position · still, since a displacement is the difference between two positions and has no time in it, so the figure carries no transport · a choice of who moves, professor or passenger, which sets the book's numbers and draws the whiteboard or the cabin of the airplane, with x₀ and x_f in the position hue on a fixed 0 to 8 m axis (defaults 1.5 and 3.5 for the professor, 6.0 and 2.0 for the passenger) · "The displacement of the professor is 3.5 m − 1.5 m = +2.0 m, which is 2.0 m to the right." · none · 2D. Labels on: five of them, each beside something that stays put. Both original captions are carried, written as "(Figure 2.3) … (Figure 2.4) …", and the book's two "(See Figure …)" sentences stand in the prose and link here.
2. `sim-path` · Figure 2.5 (the cyclist of Check Your Understanding) · distance-traveled, distance, displacement · moving: a rider goes x₀ → x_turn → x_f while an odometer counts the path length and a bracket shows the displacement, which has a time in it and so earns the transport · x₀, x_turn, x_f in the position hue on a fixed −5 to 5 km axis (defaults 0, −3, −1 km reproduce the Check Your Understanding) · "The cyclist travels 5.0 km along the path, but the displacement is only −1.0 km, whose magnitude is 1.0 km." When a leg is set to zero the ride is a straight run, and the headline says so and that the two numbers then agree · none · 2D. Labels on, five of them.
3. `fig-paths` · the paths the problems refer to, which the book numbers nowhere, so the eyebrow reads "Figure" without a number · distance-traveled, displacement · still: a figure that serves exercises is a faithful copy, so no sliders, no motion and no transport, and all four paths stand drawn at once, each from a hollow start marker to a filled end marker with a drop line to the axis · none, since the problems need the book's numbers · "Four paths run along one axis, each starting at a hollow marker and ending at a filled one." · none · 2D. Labels on, four path letters.

Photograph of the cyclists (splash) dropped.

## Exercises

- 1 Check Your Understanding, three numeric parts (inline, after block 4).
- 1 AP test prep, multiple choice, tagged position, displacement, distance-traveled.
- 3 conceptual questions, open, with the book's expected points as the suggested approach.
- 4 problems × 3 parts, numeric, tagged distance-traveled, distance, displacement; path data from Fig 2.5: A 0→7, B 12→7, C 2→10→8→11, D 9→3→5. Book answers exist for A and C only, so problems 2 (path B) and 4 (path D) are left out (user decision 2026-09-06).
- No generated questions.

## Views

- Formulas: eq-dx.
- Definitions: symbols x, x₀, x_f, Δx; plus the five glossary terms as a Terms list (new for this section: the Definitions view gets terms as well as symbols).
- Concept map: five nodes above; external prerequisites: none.

## Converter note

`cnxml2md.py` dropped the FIGURE block for the professor figure
(import-auto-id2972079) and emitted its caption as a paragraph. Fix in the
converter before 2.2.

Fold pass (2026-09-11): the book prints the professor as Figure 2.3 and
the passenger as Figure 2.4 (the numbers above are one short), and
`sim-displacement` draws both scenes, so its row keeps 2.3 as its number
and lists 2.4 under `folds`; the eyebrow reads "Figure 2.3 + 2.4".
