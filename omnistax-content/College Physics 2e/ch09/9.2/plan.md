# Plan: 9.2 The Second Condition for Equilibrium (m42171)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-11
without a review stop, on Chen's instruction to finish the book in one job;
the per-section stop of rule 2, the plan review of rule 5 and the user picks
of rule 15 are replaced by this file, written before the section was built
and left for review after, as Chapters 1 to 6 did it.

The section that repairs what 9.1 left undone. The first condition says the
forces add to zero, and the hockey stick of 9.1 obeys it and rotates anyway;
this section names the quantity that decides whether it rotates, torque,
writes the second condition in it, and works the one example every reader
already has an intuition for, two children on a seesaw. Three sketch figures
(9.6 to 9.8), no photograph, one worked example, two boxed notes (the
opening Torque note and the Take-Home Experiment), four glossary terms, two
AP items, three conceptual questions, five problems of which three are keyed.
One page (rule 11).

## Sub-concepts (page headers)

The module prints no header of its own, so all five are the agent's (rule 3).

1. `torque-defined` **Torque: the turning effectiveness of a force** (book:
   the boxed Torque note; the "Several familiar factors" paragraph; Figure
   9.6; the paragraph that defines torque and carries the three equations).
   The variables $\ktau$, $\krlev$, $\krperp$, $\kF$ and $\theta$ and the
   equations `eq-torque`, `eq-perp-lever-arm` and `eq-torque-perp` anchor
   here.
2. `pivot` **The pivot you choose, and the two ways a torque can turn**
   (book: Figure 9.7; the paragraph on the perpendicular lever arm being the
   shortest distance; the paragraph on the newton-meter and the 40 N push on
   the door; the paragraph on the torque always being calculated about a
   chosen pivot; the paragraph on the two possible directions).
3. `second-condition` **The second condition for equilibrium** (book: the
   paragraph that states the condition in italics, its equation and the sign
   convention). `eq-net-torque-zero` anchors here.
4. `seesaw` **Two children on a seesaw** (book: the paragraph on the
   intuition everyone has about seesaws; Figure 9.8; Example 9.1, She Saw
   Torques On A Seesaw, with its strategy, both solutions and its
   discussion). The example is `ex-seesaw`. The variables $\ktauone$,
   $\ktautwo$, $\kFp$, $\kwone$, $\kwtwo$, $\krone$, $\krtwo$ and $m$ and
   the equations `eq-seesaw-torques`, `eq-seesaw-balance`,
   `eq-seesaw-distance` and `eq-pivot-force` anchor here.
5. `seesaw-lessons` **What the seesaw teaches** (book: the four paragraphs
   that begin "Several aspects of the preceding example have broad
   implications", and the boxed Take-Home Experiment).
6. `anchored-object` **The five forces of the test prep item** (a short
   closing block that carries the unnumbered figure the AP item refers to,
   as 4.7's rescue block and 3.2's map of paths do). No coverage rows of its
   own.

The book gives its one example no number in the CNXML; the publisher prints
it as Example 9.1, the chapter's first, and the page follows that, as 3.4
did for Examples 3.4 and 3.5. Cross references to other sections of this
chapter and to other chapters are plain text; this section names none.
Learning objectives, the section summary and the four glossary terms come
out of the running text into the tables and the views (rule 4).

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| torque | idea, eq-torque | torque-defined | the six drawings of the door and the definition; the door and wrench problems; AP item 1 |
| perpendicular-lever-arm | idea, eq-perp-lever-arm | torque-defined | the dashed line in Figures 9.6 and 9.7; AP item 2 on the anchored object; the wrench question |
| torque-from-lever-arm | result, eq-torque-perp | torque-defined | the second form of the definition; every torque of the seesaw example, where θ = 90º |
| torque-depends-on-pivot | idea | pivot | Figure 9.7 about A and about B; the first lesson of the seesaw discussion |
| torque-sign-convention | idea | pivot | the counterclockwise-positive convention; the minus sign in the second child's torque |
| second-condition-equilibrium | result, eq-net-torque-zero | second-condition | the condition in italics and in equation form; the seesaw; the two children on a door |
| center-of-gravity | idea | seesaw-lessons | the third lesson of the discussion and the glossary row |
| balanced-seesaw | skill, eq-seesaw-distance | seesaw | Example 9.1 in both its parts; the repeat problem with a seesaw of its own mass |

The section leans on `point-of-application` and `first-condition-equilibrium`
(9.1), `force`, `weight` and `net-external-force` (4.x), `newtons-second-law`
(4.3), `free-body-diagram` (4.1), `resolving-vector` (3.2) and
`center-of-mass` (6.5); the coverage rows mark each as used where the text
uses it.

## Figures

id · replaces or Sim · concepts · what moves or still · sliders · headline ·
graph · 3D

1. `sim-door` · replaces Figure 9.6 (a) to (f), the six overhead views of one
   door · torque, perpendicular-lever-arm, torque-from-lever-arm · **still**:
   a door held at one position while you decide how hard, where and in what
   direction to push has no time in it, and the six panels the book draws are
   six answers to three sliders, not six moments of one motion, so the figure
   answers its sliders and registers no cycle (rule 14; the chapter's config
   makes the same decision for every figure of Chapter 9) · $\kF$ (0 to 60 N,
   default 40, force), $\krlev$ (0.05 to 0.90 m, default 0.800, position),
   $\theta$ (0º to 180º, default 90, ink) · "pushing with 40 N at 0.800 m from
   the hinges, square to the door, gives a torque of 32.0 N·m counterclockwise"
   · none: the overhead view of the door with the line of action and the
   perpendicular lever arm drawn on it is the whole picture · no. Readout:
   $\ktau = \krlev\kF\sin\theta$ with the live numbers; small line on the
   push that turns the door as well as the perpendicular one and on the pull
   along the hinges that does nothing. Draws force, position, torque.
2. `sim-hockey-stick` · replaces Figure 9.7 (a) and (b), the same stick about
   pivot A and about pivot B · torque-depends-on-pivot, torque-sign-convention,
   perpendicular-lever-arm · **still**: the stick is nailed down and the
   question is what one force does about one chosen point, which is a picture
   and not a motion; sliding the nail from A to B is the reader's choice of
   pivot, not the passage of time (rule 14) · the position of the pivot along
   the stick (0.10 to 1.30 m from the blade end, default 0.20, position, which
   is A, with B at 1.15), $\kF$ (0 to 60 N, default 30, force), $\theta$ (20º
   to 160º, default 70, ink) · "about the nail 0.20 m from the blade the
   force turns the stick counterclockwise with 21.1 N·m; slide the nail past
   the hand and the same force turns it the other way" · none · no. Readout:
   $\ktau = \krperp\kF$ with the live numbers, signed by the convention; small
   line saying that the torque is zero when the nail sits on the line of
   action, because the lever arm is then nothing. Draws force, position, torque.
3. `sim-seesaw` · replaces Figure 9.8, the two children on the seesaw ·
   balanced-seesaw, second-condition-equilibrium, center-of-gravity,
   first-condition-equilibrium · **still**: a balanced seesaw stands still,
   and an unbalanced one is drawn tipped towards the larger torque rather
   than animated, since what the reader is asked to see is which way it goes
   and by how much the torques differ, not how fast it gets there (rule 14) ·
   $m_1$ (10.0 to 50.0 kg, default 26.0, ink), $\krone$ (0.20 to 2.50 m,
   default 1.60, position), $m_2$ (10.0 to 50.0 kg, default 32.0, ink),
   $\krtwo$ (0.20 to 2.50 m, default 1.30, position) · "the first child makes
   408 N·m counterclockwise and the second 408 N·m clockwise, so the net
   torque is zero and the seesaw balances" · none: the seesaw in side view
   with its weights, the supporting force and the two distances bracketed is
   the picture · no. Readout: $\krtwo = \krone m_1/m_2$ with the live numbers;
   small line giving the supporting force $\kFp = \kwone + \kwtwo$, which is
   part (b) of the example. Draws force, position, torque.
4. `sim-any-pivot` · Sim (it replaces no figure of the book) ·
   torque-depends-on-pivot, second-condition-equilibrium, balanced-seesaw ·
   **still**: it answers where the reader puts the pivot and nothing else ·
   the position of the pivot the torques are taken about (−2.50 to 2.50 m
   from the fulcrum, default 0, position), $m_1$ (10.0 to 50.0 kg, default
   26.0, ink), $m_2$ (10.0 to 50.0 kg, default 32.0, ink) · "about a point
   0.80 m to the right of the fulcrum the three torques are −188, +250 and
   −62.4 N·m, and they still add to zero" · none: the balanced seesaw with a
   movable pivot mark and a bar for each of the three torques beneath it · no.
   Readout: the three torques summed to zero, with the live numbers; small
   line saying that this is why part (b) of the example can also be done with
   the second condition, as one of the section's problems asks. Draws force,
   position, torque.
5. `fig-forces` · a faithful copy of the unnumbered figure the second AP item
   refers to, the five equal forces applied to an anchored object (the book
   gives it no number, so its eyebrow reads "Figure") · perpendicular-lever-arm,
   torque · **still**: the object is anchored and nothing in the question
   moves · no sliders · no headline beyond the labelled point and arrows ·
   none · no. Draws force, position. The book's own image travels with the
   item's card as well, as 4.7's rescue image does.

Photographs: the section has none, so none is kept and none is dropped.

Figures that serve exercises: the book prints one, the five forces on the
anchored object, and it is kept, since its item is kept (`fig-forces` above).
The problems of the section refer to no figure of their own.

Extra simulations (rule 15), thought through, judged and decided:

- **The net torque about any point (`sim-any-pivot`): built.** The section
  says in one sentence that if the second condition holds about one pivot it
  holds about every other, and then never draws it; the discussion after the
  example turns on it, and two of the section's own problems (the one asking
  for $\kFp$ from the second condition, and the repeat with a seesaw of its
  own mass) cannot be done without believing it. Sliding the pivot along the
  plank and watching three torques change while their sum stays at zero is a
  view neither the book nor the three required figures gives.
- A wrench with a length of pipe slipped over its handle, which is the third
  conceptual question. Left: `sim-door` already puts the distance from the
  pivot on a slider, and a wrench would be the same picture with a different
  sprite.
- The wrecking ball and the unsupported wall of the second conceptual
  question. Left: what the question turns on is whether the wall pivots at
  its base or slides, which is 9.3's stability, and a figure for it here
  would answer the question the reader is being asked.
- A torque meter that adds any number of forces on a bar. Left: it is
  `sim-seesaw` and `sim-any-pivot` with more arrows, and neither the text nor
  the exercises ask for more than three torques at once.

## Exercises

- All nine items are set at the end except the first conceptual question,
  which asks what three factors affect a torque; that is a short Understand
  check on the passage that has just been read, so it is placed inline after
  `torque-defined` (rule 12), as 4.7 places its two conceptual questions.
- 3 conceptual questions, none keyed, each an open item with an AI-marked
  suggested approach: `cq1` (fs-id2659358, the three factors, Understand,
  inline after `torque-defined`), `cq2` (fs-id3564976, the wrecking ball and
  the concrete wall, Analyze, citing `pivot`) and `cq3` (fs-id1430926, the
  pipe over the wrench handle, Understand, citing `torque-defined`).
- 2 AP items of the section's own. `ap1` (fs-id1330781, which situation
  involves no torque) is keyed with (a) and is a graded choice, Understand.
  `ap2` (fs-id1495433, the five equal forces on the anchored object) has no
  key, so it is kept as an open item with its five options as the book prints
  them and an AI-marked approach, Analyze, and the book's image rides on its
  card.
- 1 AP item taken from 9.4 with `source_section: "9.4"`: `ap3`
  (fs-id1383310, the best estimate of the torque a child on the end of a
  see-saw makes). It is a torque magnitude and nothing else, so it belongs
  here (`ch09/config.md` and `ch09/exploration.md` decide this, and 9.4's
  `exercise_notes` says so too). It has no key and is an open item with its
  four options as printed and an AI-marked approach, Apply.
- 3 problems keyed and kept: `p1` (fs-id1405750, the 55.0 N push on a door
  0.850 m from the hinges, keyed 46.8 N·m for part (a) with the book's own
  answer to part (b) in the solution), `p3` (fs-id2699718, the two children
  pushing opposite sides of a door, keyed 23.3 N) and `p5` (fs-id2989327, the
  seesaw repeated with a 12.0 kg plank whose center of mass is 0.160 m to the
  left of the pivot, keyed 1.36 m and 686 N).
- 2 problems left out, having no answer in the book's key: the wrench and
  its conversion to foot-pounds (fs-id1372921) and the item that asks for
  $\kFp$ from the second condition alone (fs-id1259724). The second is a
  loss, since it is the one problem that exercises `sim-any-pivot` directly;
  it is named in `notes` and in `exercise_notes`.
- Nothing else is taken from another section and nothing of this section's
  own is held back: a reader who has read 9.1 and 9.2 can do every problem
  the later sections print, so they stay where the book prints them
  (`ch09/config.md`).
- No generated questions: every node of the section has a book exercise that
  tests it.
- Weights: `cq3` and `ap2` give `perpendicular-lever-arm` its full value and
  `torque` a smaller one, since both turn on the lever arm alone; `cq2` gives
  `torque-depends-on-pivot` weight 2 beside the full value for `torque`;
  `ap3` gives `torque-from-lever-arm` weight 2, since the estimate is a
  weight times a lever arm; `p3` gives `torque` weight 3 beside the full
  value for `second-condition-equilibrium`; `p5` gives `balanced-seesaw` its
  full value and `second-condition-equilibrium` 4, `first-condition-equilibrium`
  3 and `center-of-gravity` 2, since the work of it is the seesaw and the
  three others are steps along the way.

## Views

- Formulas: the eight equations of the section already in `chapter.json`,
  the four stated and named ones important (`eq-torque`, `eq-perp-lever-arm`,
  `eq-torque-perp`, `eq-net-torque-zero`) and the four steps of the example
  not.
- Definitions: the thirteen variables of the section, and four glossary
  terms, torque, perpendicular lever arm, SI units of torque and center of
  gravity.
- Concept map: the eight nodes above with their edges into 3.2, 4.x, 6.5 and
  9.1.

## Colour

The page binds force, position and torque. Every figure draws a force (the
push on the door, the push on the stick, the two weights and the supporting
force of the seesaw), a position (the distance from the pivot, the
perpendicular lever arm, the two children's distances) and a torque (the
turning arc in each scene, the bars of `sim-any-pivot`, every readout). Mass,
the angle $\theta$ and the length of a door or a plank stay untyped and in
ink, as `ch09/config.md` decided. Nothing on the page binds time, velocity or
acceleration: statics has none of them.

## Wanted at chapter level

- variables `τ` → 9.2-torque-defined
- variables `r_lever` → 9.2-torque-defined
- variables `r_perp` → 9.2-torque-defined
- variables `F` → 9.2-torque-defined
- variables `θ` → 9.2-torque-defined
- variables `τ_1` → 9.2-seesaw
- variables `τ_2` → 9.2-seesaw
- variables `F_p` → 9.2-seesaw
- variables `w_1` → 9.2-seesaw
- variables `w_2` → 9.2-seesaw
- variables `r_1` → 9.2-seesaw
- variables `r_2` → 9.2-seesaw
- variables `m` → 9.2-seesaw
- equations `eq-torque` → 9.2-torque-defined
- equations `eq-perp-lever-arm` → 9.2-torque-defined
- equations `eq-torque-perp` → 9.2-torque-defined
- equations `eq-net-torque-zero` → 9.2-second-condition
- equations `eq-seesaw-torques` → 9.2-seesaw
- equations `eq-seesaw-balance` → 9.2-seesaw
- equations `eq-seesaw-distance` → 9.2-seesaw
- equations `eq-pivot-force` → 9.2-seesaw
- The `eq-seesaw-distance` row writes the two masses as $m_1$ and $m_2$,
  which are not symbol rows of their own; the text and the figures write them
  the same way, in plain LaTeX and in ink, as $\theta_1$ and $\theta_2$ are
  written in 4.7. Nothing is wanted unless the chapter pass would rather have
  rows for them.

**Decided in the chapter pass (2026-09-12).** Every anchor above is written.
No rows are added for $m_1$ and $m_2$: they stay plain LaTeX in ink, as
$\theta_1$ and $\theta_2$ do in 4.7, because a mass is untyped in this book
and a row with no type would only repeat what the text says. One thing in
`text.html` is changed. The closing block `anchored-object` was headed "The
five forces of the test prep item" and opened "One of the test prep items
applies five forces…", which is the page talking about its own apparatus
rather than about the physics (rule 17). The heading is now "Five equal
forces about one point" and the paragraph says what the scene is and what
decides the torque each force makes; the figure and the item are untouched.
The book's own image still travels on the item's card as well, as 4.7's
rescue image does, so the reader meets it in both places.
