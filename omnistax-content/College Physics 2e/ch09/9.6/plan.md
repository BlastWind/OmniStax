# Plan: 9.6 Forces and Torques in Muscles and Joints (m42175)

Source: `source.md` (converted from CNXML). Status: built 2026-09-11 without
a review stop, on Chen's instruction to finish the book in one job; the plan
is written before the section and left for review after, as Chapters 1 to 6
did it.

The heaviest section of Chapter 9, and the one that turns the second
condition on the reader's own body. Four narrative figures (9.25 to 9.28),
one of them a photograph the text points at, two worked examples, no table,
no Check Your Understanding box, one keyed AP item, seven conceptual
questions and fifteen problems, eight of them keyed. Nine further figures
sit inside problems. One page (rule 11).

## Sub-concepts (page headers)

The module prints no header of its own, so every header below is the
agent's, one block per idea:

1. `muscles-levers` **Muscles, bones and joints as levers** (book: the
   opening paragraphs on muscles exerting far greater forces than we might
   think, the forearm holding a book beside its equivalent lever system,
   muscles contracting only and so occurring in pairs, the flexor and the
   extensor, tendons attached close to joints and mechanical advantages
   much less than one; Figure 9.25).
2. `biceps` **The force in the biceps** (book: Example 9.4, Muscles Exert
   Bigger Forces Than You Might Think, and the paragraph after it on how
   the force changes as the angle at the elbow changes). The variables
   $\kFB$, $\kwarm$, $\kwbook$, $\krone$, $\krtwo$, $\krthree$ and the
   equations `eq-biceps-torque-balance` and `eq-biceps-force` anchor here.
3. `joints` **Forces in the joints** (book: the 407 N at the elbow, muscle
   and joint forces subtracting, forces largest when the load is far from
   the joint; the tennis paragraph; the physical-therapy paragraph).
   $\kFE$ anchors here.
4. `posture` **Posture and back strain** (book: the back and the jaw, good
   posture and bad posture with Figure 9.26, leaning to keep the whole
   body's center of gravity over the base of support with Figure 9.27, and
   the warning against lifting with the back).
5. `lifting` **Lifting with the back** (book: Example 9.5, Do Not Lift with
   Your Back, and Figure 9.28 where the book prints it, after the example
   its caption calls "the preceding example"). $\kFV$, $\kFVx$, $\kFVy$,
   $\kwub$, $\kwbox$, $\theta$ and the equations `eq-vertebrae-magnitude`
   and `eq-vertebrae-direction` anchor here.
6. `short-lever-arms` **Why muscles are attached close to joints** (book:
   the paragraph on speed, flexibility and agility).
7. `complexities` **Complexities in the real system** (book: the closing
   paragraph on the pivot moving as a joint flexes, the bicycle seat, and
   what the method is good for). This is the section's fourth learning
   objective and the book gives it a paragraph of its own.

The one cross reference to another chapter, Collisions of Extended Bodies
in Two Dimensions (Chapter 10), is plain text, since that chapter is not
built. The reference to Applications of Statics, Including Problem-Solving
Strategies belongs to problem 4, which is unkeyed and left out; it is 9.4
and not 4.6, contrary to the note in the task brief, so nothing in the
built page points at 4.6.

Learning objectives, the section summary and the glossary come out of the
running text into the tables and the views; the section defines no term, so
its glossary is empty. Nothing is inline: the module has no Check Your
Understanding box and no conceptual question here is a short check that
belongs beside a passage.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| muscle-lever-system | idea | muscles-levers | the opening paragraphs and Figure 9.25; CQ 1 and 6 |
| muscle-force-from-torque | result, eq-biceps-force | biceps | Example 9.4; the AP item; problems 7, 8, 10, 12 |
| joint-force | result | joints | the 407 N at the elbow; Example 9.5(b); problems 1, 3, 5, 7, 8, 10 |
| posture-and-back-strain | idea | posture | Figures 9.26 to 9.28; Example 9.5; CQ 7 |
| benefits-of-short-lever-arms | idea | short-lever-arms | the paragraph on speed, flexibility and agility; CQ 6 |

The section leans on `lever`, `lever-mechanical-advantage` and
`mechanical-advantage` (9.5), `second-condition-equilibrium`,
`torque`, `perpendicular-lever-arm`, `torque-sign-convention` and
`center-of-gravity` (9.2), `first-condition-equilibrium` (9.1),
`choose-pivot-to-simplify` (9.4), `base-of-support` and
`unstable-equilibrium` (9.3), `weight` and `newtons-third-law` (4.3 and
4.4) and `magnitude-direction-from-components` (3.3); the coverage rows
mark each as used where the text uses it.

## Figures

id · replaces or Sim · concepts · what moves · sliders · headline · graph ·
3D

1. `sim-forearm` · replaces Figure 9.25 (the forearm holding a book and its
   equivalent lever system) · muscle-lever-system, muscle-force-from-torque,
   joint-force · **still**: a forearm held level is a body in static
   equilibrium and has no time in it, so the figure answers its sliders and
   registers no cycle (rule 14 and the chapter config) · $\krone$, the
   distance from the elbow to where the biceps pulls (2.0 to 8.0 cm,
   default 4.0, position); the mass of the book (0 to 8.0 kg, default 4.00,
   ink); $\krthree$, the distance from the elbow to the book (25 to 45 cm,
   default 38.0, position) · "r₁ = 4.0 cm · the biceps pulls with 470 N to
   hold 63.7 N, 7.38 times the weight it supports" · graph below the
   horizontal scene: $\kFB$ against $\krone$, the curve rising steeply as
   the tendon moves towards the joint, with the set value marked · no.
   Readout: `eq-biceps-force` with the live numbers; small line on the
   407 N the humerus pushes down with at the elbow and on the 63.7 N that
   is left. Draws force, position, torque (the two turning arcs at the
   pivot carry the torques the second condition balances).
2. `sim-posture` · replaces Figure 9.26 (good and bad posture) ·
   posture-and-back-strain, muscle-force-from-torque · **still**: the body
   stands, and the lean is a slider rather than a fall · the lean of the
   upper body away from the vertical (0º to 60º, default 0º, ink); the mass
   of the upper body (40 to 80 kg, default 55.0, ink); the perpendicular
   lever arm of the back muscles (4.0 to 12.0 cm, default 8.0, position) ·
   at 0º, "Standing straight, the upper body's weight of 539 N acts
   straight through the hips, so it makes no torque and the back muscles
   pull with nothing at all"; leaning, "Leaning 30º puts the center of
   gravity 0.200 m in front of the hips, and the back muscles must pull
   with 1350 N" · graph beside the vertical scene: the force in the back
   muscles against the lean · no. The upper body's center of gravity is
   taken 0.400 m from the hips along the spine, which is the number that
   makes its perpendicular lever arm the 0.350 m of Example 9.5 at the lean
   the book draws there; the book gives no dimensions on Figure 9.26
   itself, and the plan records the choice rather than leaving it to be
   rediscovered. Draws force, position, torque.
3. `fig-stance` · photograph, Figure 9.27, **kept**: the text points the
   reader at it ("as seen in Figure 9.27") and it shows the thing the
   passage is about, a person leaning forward, sideways and backward to
   keep the whole body's center of gravity over the base of support. The
   book's caption and its width of 269 are kept.
4. `sim-lift` · replaces Figure 9.28 (the person lifting a box with the
   back) · posture-and-back-strain, joint-force, muscle-force-from-torque ·
   **still**: the box is lifted at constant speed, so the scene is a frozen
   one · the mass of the box (0 to 50 kg, default 30.0, ink); the distance
   from the hips to the box (30 to 70 cm, default 50.0, position); the mass
   of the upper body (40 to 80 kg, default 55.0, ink) · "Lifting a 30.0 kg
   box with the back makes the back muscles pull with 4200 N and loads the
   vertebrae with 4660 N, 5.59 times the 833 N being supported" · no graph;
   three bars beside the scene compare the weight supported, the force in
   the back muscles and the force on the vertebrae, which is the comparison
   the example ends on · no. Readout: the torque balance solved for $\kFB$
   with the live numbers; small line on $\kFV$ and its direction. Draws
   force, position, torque.
5. `sim-lever-arm-trade` · **Sim**, replaces nothing · benefits-of-short-lever-arms,
   muscle-lever-system · **still**: the elbow angle is a slider, not a
   clock, and the chapter draws no motion · the elbow angle (40º to 140º,
   default 70º, ink); $\krone$, where the biceps is attached (2.0 to 8.0 cm,
   default 4.0, position) · "Closing the elbow from 90º to 70º shortens the
   biceps by 1.39 cm while the hand sweeps 13.3 cm, ten times as far" · no
   graph; two bars drawn to one scale under the scene, the contraction
   beside the movement of the hand · no. The biceps is taken to run from
   0.250 m up the humerus to $\krone$ along the forearm, and the hand sits
   at the 0.380 m of Example 9.4. Draws position.

Every diagram of the section is replaced; the one photograph is kept, and
there is no decoration to drop. The nine figures that sit inside problems
travel with their problems as the card's own figure, as Chapter 4 does it,
and only the six whose problems the book keys are copied: the knee, the
drafting board, the erect head, the foot on its toes, the clenched jaw and
the push-up. The Achilles tendon, the leg-exercise device and the father
lifting a child belong to unkeyed problems that are left out, so their
images are not copied.

Extra simulations (rule 15), thought through and judged:

- **The trade the short lever arm buys** (built, `sim-lever-arm-trade`).
  The section asks in so many words what the benefits of attaching muscles
  close to joints are and answers speed, flexibility and agility, and it
  draws nothing at all for the answer; `benefits-of-short-lever-arms` is
  the one node of the section with no figure otherwise. Watching a 1.39 cm
  contraction swing the hand 13.3 cm is the other half of the bargain the
  first figure prices, and it is not visible anywhere else on the page.
  Built.
- A pair of muscles, a flexor and an extensor, with the reader choosing
  which one contracts. Left: the text gives the pairing one sentence and
  tests it nowhere, and the figure would animate a fact the reader already
  has.
- The force in the biceps against the angle at the elbow, which the
  paragraph after Example 9.4 raises and problem 6 sets. Left: the book
  gives no model for how the muscle's own lever arm changes with the angle,
  so the curve would be invented rather than transformed, and problem 6 is
  unkeyed and left out.
- A whole-body balance sim, leaning under a load to keep the center of
  gravity over the feet (Figure 9.27). Left: the photograph says it, the
  base of support is 9.3's node and 9.3 proposes its own sim for it.

## Exercises

- No Check Your Understanding boxes; nothing is placed inline.
- 7 conceptual questions, `cq1` to `cq7`, none keyed, each an open item with
  an AI-marked suggested approach. Six are Understand; `cq3`, the bipedal
  dinosaur with a long tail, asks the reader to carry the center of gravity
  to a case the book never draws and is Analyze.
- 1 AP test prep item, `ap1` (fs-id1320975, the 20 lb dumbbell curled),
  keyed by the book and kept as an open item with the book's own answer,
  Analyze, citing `biceps`.
- 8 problems keyed and kept: `p1` (the 407 N at the elbow, number), `p3`
  (the kneecap, multi with magnitude and direction), `p5` (the head at the
  drafting board, multi with magnitude and direction), `p7` (the erect head,
  multi), `p8` (standing on the toes, multi), `p10` (the clenched jaw,
  multi), `p12` (the push-up, multi on parts (a) and (b) only), `p14` (the
  Unreasonable Results seesaw, number on part (a) with the rest in the
  solution, Evaluate).
- `p12` is kept although its parts (c) and (d) ask for the work done and
  the power output, which are Chapter 7's and not built. The prompt keeps
  the book's four parts and the book's full key stands in the solution, but
  only (a) and (b) are set as graded parts and only this section's concepts
  are tagged; `exercise_notes` says so.
- 7 problems left out, none of them keyed: 2 (fs-id1169738208889, the
  Achilles tendon), 4 (fs-id1169738163020, the leg-exercise device), 6
  (fs-id1169737911368, the biceps at 120º), 9 (fs-id1169738082815, the
  father lifting his child), 11 (fs-id1169738163099, the Integrated
  Concepts item on the elastic rope, which is 16.1's Hooke's law), 13
  (fs-id1169738139224, the palm tree, which needs Chapter 8's impulse), and
  15 (fs-id1169738064552, the Construct Your Own Problem item).
- Nothing is taken from another section and nothing is held for a later
  one: every item the book prints here rests on 9.1, 9.2 and this section.
  9.4's two travelling AP items go to 9.2 and 9.3, not here.
- No generated questions: every node of the section has a book exercise.
- Weights (rule 20): a concept the item merely names is given 2 and the
  concept the work turns on keeps its full Bloom value. `p1` gives
  `first-condition-equilibrium` 2; `p3` and `p5` give
  `magnitude-direction-from-components` 2; `p10` gives
  `mechanical-advantage` 2, since the masseter is the one muscle of the
  chapter whose mechanical advantage is above one; `p12` gives
  `muscle-lever-system` 2; `cq1` gives `mechanical-advantage` 2; `cq2`
  gives `muscle-force-from-torque` 2; `cq5` gives `muscle-lever-system` 2;
  `cq6` gives `mechanical-advantage` 2; `cq7` gives `center-of-gravity` 2;
  `ap1` gives `torque` 2 and `muscle-lever-system` 2.

## Views

- Formulas: the four equations of the section already in `chapter.json`,
  `eq-biceps-force` important and the three worked steps not.
- Definitions: the thirteen variables of the section. The section defines
  no glossary term.
- Concept map: the five nodes above with their fifteen edges into 3.3, 4.3,
  4.4, 9.1, 9.2, 9.4 and 9.5.

## Colour

The page binds force, position and torque. Every figure carries a force on
a slider or draws one as an arrow ($\kFB$, $\kFE$, $\kFV$, $\kwarm$,
$\kwbook$, $\kwub$, $\kwbox$); every figure brackets a lever arm in the
position hue ($\krone$, $\krtwo$, $\krthree$, $\krperp$); and the first
three draw the two turning arcs at the pivot in the torque hue and state
the torque they balance. The masses, the angles and the ratios stay in ink,
as the chapter config says.

## Wanted at chapter level

- variables `F_B` → 9.6-biceps
- variables `F_E` → 9.6-joints
- variables `F_V` → 9.6-lifting
- variables `F_Vx` → 9.6-lifting
- variables `F_Vy` → 9.6-lifting
- variables `w_a` → 9.6-biceps
- variables `w_b` → 9.6-biceps
- variables `w_ub` → 9.6-lifting
- variables `w_box` → 9.6-lifting
- variables `r_1` → 9.6-biceps
- variables `r_2` → 9.6-biceps
- variables `r_3` → 9.6-biceps
- variables `θ` → 9.6-lifting
- equations `eq-biceps-torque-balance` → 9.6-biceps
- equations `eq-biceps-force` → 9.6-biceps
- equations `eq-vertebrae-magnitude` → 9.6-lifting
- equations `eq-vertebrae-direction` → 9.6-lifting
- A symbol row for the back muscles' own perpendicular lever arm, which the
  book writes $r_{\text{b}\perp}$ in the caption of Figure 9.26 and which
  `sim-posture` and `sim-lift` both bracket: `sym` `r_bperp`, `latex`
  `r_{\text{b}\perp}`, `type` `position`, `macro` `\krbperp`. The page
  writes it in plain LaTeX for now, so it renders in ink where every other
  lever arm on the page is coloured.

**Decided in the chapter pass (2026-09-12).** Every anchor above is written.
The symbol row asked for is added to `book-rows.json` and merged: `r_bperp`,
LaTeX `r_{\text{b}\perp}`, type `position`, macro `\krbperp`. `sim-posture`
now carries it on its slider label and in its readout, so the back muscles'
lever arm is coloured like every other lever arm on the page. Problem 12,
the push-up, now sets all four of the book's parts as graded parts rather
than two: parts (c) and (d) ask for the work done and the power output, and
Chapter 7 is built, so they are tagged with 7.1's `calculate-work` and 7.7's
`calculate-power` at a reduced weight. Three headlines that ran past the
right edge of the canvas at 1400 wide were shortened (`sim-posture`,
`sim-lift` and `sim-lever-arm-trade`), and the weight label in `sim-lift`
took the panel background the other two force labels already had, because
the muscle's arrow crossed it.
