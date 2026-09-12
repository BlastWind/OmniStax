# Plan: 9.4 Applications of Statics, Including Problem-Solving Strategies (m42173)

Source: `source.md` (converted from CNXML). Status: built 2026-09-11 without
a review stop, on Chen's instruction to finish the book in one job.

The section that gathers the two conditions for equilibrium into a working
method and then applies it. One boxed Problem-Solving Strategy of four
numbered steps, three book figures that draw the same pole vaulter three
times, one worked example, one boxed Take-Home Experiment, one PhET note,
one conceptual question, five AP test prep items and two problems. The PhET
note is dropped per the chapter config. One page (rule 11), thin though its
problem set is.

## Sub-concepts (page headers)

The module prints no header of its own, so every header below is the
agent's. Three blocks, one per idea:

1. `strategy` **Problem-solving strategies for statics** (book: the opening
   paragraph on statics as a special case of Newton's laws, and the boxed
   Problem-Solving Strategy for static equilibrium situations, kept as the
   book's four-item numbered list). The term *static equilibrium* is
   defined here. $\ktau$ and $\krlev$ first appear here, in step 3.
2. `symmetric` **A pole held with its center of gravity between the hands**
   (book: the pole vaulter of Figure 9.18, the pole uniform and of mass
   5.00 kg, each hand carrying half the weight; the paragraph that states
   $\kFR = \kFL = \kwgt/2$ and looks ahead to the unequal hold; the meter
   stick sentence; the three figures, which the book prints here). $\kFL$,
   $\kFR$, $\kwgt$, $m$ and eq-equal-hands anchor here.
3. `unequal` **Hands that do not share the weight equally** (book: the
   paragraph on Figure 9.19 and the two people carrying a load, the
   paragraph on Figure 9.20 and the reversal of the right hand's force,
   Example 9.2 with its clockwise-counterclockwise statement and its two
   solutions, the closing paragraph on the hold at the start of a run, and
   the Take-Home Experiment in the bus). eq-cw-ccw and eq-hands-sum anchor
   here; the example is `ex-hands`.

Cross references are plain text where the app links nothing: the section
refers to Problem-Solving Strategies, which is 4.6 and is built in this
same job, so the wording is the book's and the reference stands as text.
The book's bold vectors **F** and **τ** in step 3 are set with the typed
macros $\kF$ and $\ktau$, as `chapter.json` sets the same two conditions.

Learning objectives, the section summary and the glossary come out of the
running text into the tables and the views. The chapter has no Check Your
Understanding box, so nothing is inline; the conceptual question and the
three AP items that stay here go to the Exercises document.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| static-equilibrium-strategy | skill | strategy | the four boxed steps; the example follows them; problem eip-339 asks for them explicitly; AP item ap3 |
| choose-pivot-to-simplify | skill | strategy | step 3; the example puts the pivot at the left hand; `sim-pivot`; AP items ap1 and ap2 |
| symmetric-support | result, eq-equal-hands | symmetric | Figure 9.18; the four legs of a uniform table; `sim-pole` at the midpoint |
| unequal-support-forces | result, eq-hands-sum | unequal | Figures 9.19 and 9.20; Example 9.2; AP items ap1 and ap2 |

The section leans on `static-equilibrium`, `first-condition-equilibrium`
(9.1), `second-condition-equilibrium`, `torque`, `torque-depends-on-pivot`,
`torque-sign-convention`, `center-of-gravity` (9.2), `free-body-diagram`,
`newtons-laws-problem-solving` (4.6 and 4.8), `problem-solving-steps` (2.6)
and `weight` (4.5), all of which the coverage rows mark as used where the
text uses them.

`symmetric-support` is the one node of the section with no book exercise of
its own: part (c) of problem eip-339 is exactly its test and that problem
has no keyed answer, so it is left out. No question is generated in its
place (rule 13); the node is carried by the coverage rows and by
`sim-pole`.

## Figures

id · replaces · concepts · what moves · sliders · headline · graph · 3D

1. `sim-pole` · replaces Figures 9.18 + 9.19 + 9.20 (the pole vaulter's
   three holds of one pole; rule 14's fold, and the case the chapter config
   names) · symmetric-support, unequal-support-forces, center-of-gravity,
   second-condition-equilibrium · **still**: a pole held at rest has no time
   in it, so the figure answers its sliders, registers no cycle and gets no
   transport (rule 14, and the chapter's standing decision) · the position
   of the center of gravity along the pole measured from the right hand
   $\krlev$ (0 to 3.00 m, default 0.30, position), the distance between the
   hands (0.30 to 1.50 m, default 0.90, position), the mass of the pole $m$
   (1.00 to 10.00 kg, default 5.00, ink) · "the center of gravity is 0.600 m
   from the left hand and the hands are 0.900 m apart, so the right hand
   carries 32.7 N and the left hand 16.3 N" · graph below the horizontal
   scene: $\kFL$ and $\kFR$ against the position of the center of gravity,
   two straight lines that cross where the hold is symmetric and one of
   which passes through zero and turns negative once the center of gravity
   goes beyond a hand · no 3D. Readout: the second condition about the left
   hand with the numbers in it, and a small line for the first condition
   $\kFL + \kFR = \kwgt = mg$. Draws force, position, torque.

   The three holds the book draws are the three settings of the one slider:
   0.45 m gives Figure 9.18, the center of gravity halfway between the
   hands; 0.30 m gives Figure 9.19, the hold the worked example computes;
   and 2.70 m with the hands 0.700 m apart gives Figure 9.20, in which the
   right hand must push down. The scene keeps the book's own layout, in
   which the vaulter's right hand is drawn on the left of the picture, so
   that all three of its drawings read the same way round and the
   clockwise and counterclockwise senses the example names are the ones the
   reader sees.

2. `sim-pivot` · replaces nothing, so it is a **Sim** · choose-pivot-to-simplify,
   torque-depends-on-pivot, second-condition-equilibrium,
   static-equilibrium-strategy · **still**: the pole stands in equilibrium
   and only the choice of pivot changes, which is not a motion, so no cycle
   and no transport · the pivot's position along the pole (0 to 3.00 m from
   the right hand, default 0.90, position), the position of the center of
   gravity $\krlev$ (0 to 3.00 m, default 0.30, position) · "with the pivot
   at the left hand the left hand's torque is zero, and the other two,
   +29.4 N·m and −29.4 N·m, add to nothing" · graph below: the three
   torques as signed bars with their sum, which stays at zero wherever the
   pivot is put · no 3D. Readout: $\text{net}\;\ktau = \ktau_{\text{R}} +
   \ktau_{\text{w}} + \ktau_{\text{L}} = 0$ with the numbers; a small line
   naming the hand whose torque the current pivot removes. Draws torque,
   force, position. This is the figure for step 3 of the strategy: the book
   states that any pivot may be chosen and that the useful ones kill the
   torque of an unknown force, and then uses the rule without drawing it.

`static-equilibrium-strategy` is a skill whose statement is a list of four
steps, and a drawing of a list is not a figure; it is served by `sim-pole`,
which follows the steps for the pole, and by `sim-pivot`, which shows step 3
at work. No figure of its own.

Photographs: the section prints none in the ordinary sense. Its three
images are photographs of a pole vaulter with the free body diagram drawn
over them, and the diagram is the content, so all three are transformed and
all three are kept as the `originals` of the folded figure, with the widths
the book prints them at (300, 300, 300).

Figures that serve exercises: the section's one exercise figure, the stack
of overhanging books, travels with its AP item to 9.3, so this page carries
none.

Extra simulations (rule 15), considered and left:

- Two people carrying a load between them, the nearer one taking more. The
  text names the analogy in one sentence, and it is the same arithmetic as
  `sim-pole` with different sprites. Left.
- A uniform table on four legs, each leg carrying a quarter of its weight.
  The text names it in one sentence and `sim-pole` already shows the
  symmetric case that makes it true. Left.
- A meter stick held at different places along its length, which the text
  invites the reader to try. It is `sim-pole` with a shorter pole. Left.
- The Take-Home Experiment in the bus, a body shifting its weight as the
  bus speeds up and slows down. The idea has a time in it and would be the
  chapter's only moving figure, but the section sets no accelerating frame
  and works nothing out for it, so everything drawn would be invented.
  Left.

None built.

## Exercises

- No Check Your Understanding boxes; nothing inline.
- 1 conceptual question, `cq1` (fs-id820981, the load balanced on the head),
  Understand, with an AI-written suggested approach, citing `symmetric`.
- 3 AP test prep items kept:
  - `ap1` (fs-id1743606, the 10 N board supported by a string and a hand),
    Apply, unkeyed, so it is kept as an open item with its five options as
    the book prints them and an AI-marked suggested approach, never as a
    graded choice.
  - `ap2` (fs-id1892207, the car at rest between two bridge piers), Analyze,
    keyed: the book gives $\kFL = 7350$ N and $\kFR = 2450$ N for part (a)
    and the direction of the change for part (b), so it is a multi answer
    of the two forces with the book's part (b) in the solution.
  - `ap3` (fs-id1249019, design a way to measure an unknown mass with a
    torque balance), Create, unkeyed, an open item with an AI-marked
    suggested approach.
- 2 AP test prep items taken to other sections of the chapter, as the
  chapter config decided and rule 12 asks: fs-id1383310, the best estimate
  of the torque a child makes on a see-saw, is a torque magnitude and
  nothing else, so it is set with 9.2 with `source_section: "9.4"`; and
  fs-id1362521, the stack of books each overhanging the one below, asks
  when the stack tips and so turns on the base of support, which is 9.3's,
  so it is set there with `source_section: "9.4"` and its figure travels
  with it. `exercise_notes` says both.
- 2 problems left out, neither having an answer in the book's key:
  fs-id1368028 (the ladder against the rain gutter) and eip-339 (the pole
  held 2.00 m from the left hand, whose part (c) is the one test of
  `symmetric-support` the book sets).
- No generated questions.
- Weights: `cq1` gives `center-of-gravity` and `second-condition-equilibrium`
  their full value and `symmetric-support` weight 2, since the load on the
  head is the symmetric argument used in words rather than worked; `ap1`
  gives `center-of-gravity` weight 1, since the uniform board's weight
  acting at its middle is a step rather than the question; `ap2` gives
  `first-condition-equilibrium` and `second-condition-equilibrium` weight 2
  beside the full value for `unequal-support-forces` and
  `choose-pivot-to-simplify`; `ap3` gives `torque` and `balanced-seesaw`
  weight 2 beside the full value for `static-equilibrium-strategy`, since
  the item is about designing the procedure.

## Views

- Formulas: the three equations of the section already in `chapter.json`,
  all three important.
- Definitions: the six variables of the section; the one glossary term,
  static equilibrium.
- Concept map: the four nodes above with their edges into 2.6, 4.5, 4.6,
  4.8, 9.1 and 9.2.

## Colour

The page binds force, position and torque. Both figures draw the two hand
forces and the weight as arrows and state them in their readouts (force),
bracket the lever arms along the pole and carry them on sliders (position),
and draw the torques about the chosen pivot as arcs and as bars and state
them in the readouts (torque). The mass of the pole and the angle stay in
ink, as the chapter config says.

## Wanted at chapter level

- variables `τ` → 9.4-strategy
- variables `r_lever` → 9.4-strategy
- variables `F_L` → 9.4-symmetric
- variables `F_R` → 9.4-symmetric
- variables `w` → 9.4-symmetric
- variables `m` → 9.4-symmetric
- equations `eq-equal-hands` → 9.4-symmetric
- equations `eq-cw-ccw` → 9.4-unequal
- equations `eq-hands-sum` → 9.4-unequal

**Decided in the chapter pass (2026-09-12).** Every anchor above is written.
The two AP items this section prints but does not keep, the see-saw torque
estimate and the stack of overhanging books, appear exactly once each, in
9.2 and 9.3, and all three sections' `exercise_notes` agree on where they
went and why.
