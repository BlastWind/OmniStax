# Exploration: College Physics 2e, Chapter 9 Statics and Torque

Written in the chapter's prep pass (2026-09-11), after reading every module
of the chapter in full. The source of record is the CNXML bundle
(`source/osbooks-college-physics-bundle`), not the PDF. The book's
organisation (book → chapters → sections → untitled narrative headers, one
CNXML module per section, the apparatus inside the module) is as recorded in
`ch02/exploration.md`; nothing differs here.

## Why this chapter

Chapter 9 is the first chapter of the book that asks where a force is
applied, not only how large it is and which way it points. Chapters 4 to 6
drew every force at a point and added the arrows; here the hockey stick of
9.1 is pushed by two equal and opposite forces and rotates anyway, and the
rest of the chapter is the repair: a second condition for equilibrium, the
quantity it is written in (torque), the three kinds of equilibrium a body
can sit in, a problem-solving strategy, the simple machines the strategy
explains, and the muscles and joints that turn out to be levers with a
mechanical advantage below one. The chapter introduces no motion at all: an
object in this chapter either stands still or moves at constant velocity,
so every scene is a frozen one and every figure answers its sliders rather
than a clock.

## Chapter 9 modules

Figures counted include the figures that sit inside exercises. CYU = Check
Your Understanding, AP = AP test prep items, CQ = conceptual questions,
Sol = exercises with an inline solution. The equation column counts the
`{eq:…}` markers the converter writes, most of which in 9.2, 9.4 and 9.6
are the numbered substitution steps of a worked example rather than results.

| Section | Module | Ex. | Fig. | Tables | Eq. | Defs | CYU | AP | CQ | Prob. | Sol. |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m42167 | 0 | 1 photo | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 9.1 The First Condition for Equilibrium | m42170 | 0 | 4 diagrams | 0 | 2 | 2 | 0 | 0 | 2 | 0 | 0 |
| 9.2 The Second Condition for Equilibrium | m42171 | 1 | 4 (3 diagrams, 1 in an AP item) | 0 | 28 | 4 | 0 | 2 (1 keyed) | 3 | 5 | 3 |
| 9.3 Stability | m42172 | 0 | 15 (1 photo, 8 diagrams, 6 in problems) | 0 | 0 | 3 | 0 | 1 (keyed) | 2 | 11 | 6 |
| 9.4 Applications of Statics, Including Problem-Solving Strategies | m42173 | 1 | 4 (3 diagrams, 1 in an AP item) | 0 | 7 | 1 | 0 | 5 (2 keyed) | 1 | 2 | 0 |
| 9.5 Simple Machines | m42174 | 1 | 4 diagrams | 0 | 6 | 1 | 0 | 2 (1 keyed) | 4 | 7 | 4 |
| 9.6 Forces and Torques in Muscles and Joints | m42175 | 2 | 13 (4 diagrams, 9 in problems) | 0 | 17 | 0 | 0 | 1 (keyed) | 7 | 15 | 8 |

No section of the chapter has a Check Your Understanding box, so the inline
place of rule 12 holds nothing here unless a section agent judges a short
conceptual question to be a Remember or Understand check that belongs beside
its passage. There is no table anywhere in the chapter: every module was
read for a `<table>` element in the CNXML and none has one, so the
converter's habit of flattening a table nested inside a paragraph does no
damage here and no section has a table to rebuild by hand.

Two modules carry a PhET note, 9.1 (Torque) and 9.4 (Balancing Act); the
config drops them, as every chapter so far has. Three modules carry a
Take-Home Experiment, 9.2 (a ruler on a cylinder of clay, balanced with
pennies), 9.3 (touching your toes with your heels against a wall) and 9.4
(shifting your weight in a moving bus); these are the book's own words and
are kept as notes.

## Figure numbers

The numbers were read off the publisher's own pages rather than inferred,
because the chapter's AP items carry figures and it was not obvious whether
those are numbered. They are not. Every figure of the narrative is numbered
in order and a figure inside an AP item, a conceptual question or a problem
is not, which is the rule Chapters 1 to 3 used:

| Section | Numbers |
|---|---|
| Intro | 9.1 (the Kalbarri rock formation) |
| 9.1 | 9.2 the motionless person, 9.3 the car at constant velocity, 9.4 the hockey stick in equilibrium, 9.5 the hockey stick rotating |
| 9.2 | 9.6 the door from overhead, 9.7 the hockey stick about pivots A and B, 9.8 the seesaw |
| 9.3 | 9.9 the toy doll, 9.10 to 9.12 the pencil on its eraser, 9.13 and 9.14 the pencil on its point, 9.15 the sphere and the pencil on its side, 9.16 the standing person, 9.17 the chicken |
| 9.4 | 9.18 to 9.20 the pole vaulter, three holds of the same pole |
| 9.5 | 9.21 the nail puller, 9.22 the wheelbarrow and the shovel, 9.23 the crank, the axle and the pulley, 9.24 the pulley combinations |
| 9.6 | 9.25 the forearm and the book, 9.26 good and bad posture, 9.27 three people adjusting their stance, 9.28 lifting with the back |

One consequence matters to 9.5. Its second AP item opens "Figure 9.24(a)
shows a wheelbarrow being lifted", and in this edition Figure 9.24 is the
pulley combinations; the wheelbarrow is Figure 9.22. The number is the one
the AP Physics edition prints, where the AP items' own figures are numbered
too. The item is kept with the number this book gives the wheelbarrow, so
that the reference lands on the figure the question is about, and 9.5's
`exercise_notes` says so.

## Observations that affect the plan

- **Torque is the new quantity, and it needs a type.** Everything the
  chapter adds to Chapter 4 is carried by $τ = rF\sin\theta$: the second
  condition, the three kinds of equilibrium, the mechanical advantage of a
  lever, the force in a biceps. Its figures draw it (a turning arc about a
  pivot, a bar that balances), its sliders vary the quantities that make it,
  and its readouts state it, so by rule 7 it is a type of the book's and not
  a symbol left in ink. It is declared `torque`, labelled torque, with the
  dimension the book writes, N·m. The dimension it shares with energy is
  not a reason to fold it into energy: rule 7 says a derived quantity is its
  own type, the book itself insists that torque is measured in newton-meters
  and never in joules, and a torque and an energy are added to different
  things. This is the first type the book declares whose dimension matches
  another's, so the pairing is written down here rather than left to be
  rediscovered.
- **Nothing else needs a type.** The lever arms $r$, $r_\perp$, $r_1$,
  $r_2$, $r_3$, $l_\text{i}$ and $l_\text{o}$ are positions and take that
  hue; every $F$, $w$, $N$ and $T$ is a force; the masses, the angle
  $\theta$ and the mechanical advantage MA are dimensionless or untyped and
  stay in ink, MA because it is a ratio of two forces and so is a pure
  number.
- **The chapter leans on Chapter 4 above all.** The first condition is
  Newton's second law with $a = 0$, so `first-condition-equilibrium` rests
  on `newtons-second-law`, `net-external-force` and `free-body-diagram`;
  every scene of the chapter is a free-body diagram with `weight`,
  `normal-force` and `tension` in it; the strategy of 9.4 rests on
  `newtons-laws-problem-solving` and on 2.6's `problem-solving-steps`. It
  leans on 3.2's `resolving-vector` for the $\sin\theta$ in the definition
  of torque, on 6.5's `center-of-mass` for the center of gravity of 9.2, and
  on 7.1's `work` for the sentence in 9.5 that a machine cannot do more work
  than the energy put into it. Chapter 5's friction returns in two of 9.3's
  problems.
- **Every figure of the chapter is still.** Rule 14 asks the question per
  figure and the answer is the same one six times: a body in statics has no
  time in it. A seesaw that balances, a pencil that topples, a nail puller,
  a biceps holding a book — each answers its sliders and nothing else, so
  each registers no cycle and gets no transport. The one place where motion
  could be argued for is 9.3, where a displaced body accelerates away from
  or back towards equilibrium; a section agent who wants the pencil to fall
  should say in the plan that the falling is the idea, and otherwise draw
  the displacement as a slider, which is what the book's own five drawings
  of the pencil do.
- **Most of the chapter's images are a photograph with a free-body diagram
  drawn over it**, not a photograph and not a clean sketch: the person and
  the car of 9.1, the standing man and the chicken of 9.3, the forearm of
  9.6. The diagram is the content, so these are figures to transform, with
  the book's image kept as the original. Three images are photographs in the
  ordinary sense and the text points at each: the Kalbarri rocks that open
  the chapter (Figure 9.1, kept by rule 21), the man balancing a toy doll on
  one hand (Figure 9.9), and the three people adjusting their stance under a
  load (Figure 9.27). The config keeps those three and transforms the rest.
- **9.3 draws one scene five times.** Figures 9.10, 9.11 and 9.12 are the
  same pencil on its eraser, upright, displaced a little and displaced too
  far; 9.13 and 9.14 are the same pencil balanced on its point and displaced.
  One figure with a tilt slider that draws the weight through the center of
  gravity, the normal force at the pivot and the torque they make says all
  five at once, and rule 14's fold is exactly this case. The plan for 9.3
  should say which numbers each fold carries.
- **9.4 draws one scene three times too**, the pole vaulter holding the pole
  with the center of gravity between his hands, nearer his right hand, and
  beyond his hands. One figure whose slider is the position of the center of
  gravity walks through all three and shows the right hand's force reverse,
  which is the point of the last drawing; Figures 9.18, 9.19 and 9.20 fold.
- **9.6 is the heaviest section of the chapter** (two worked examples, four
  narrative figures, fifteen problems, seven conceptual questions) and is
  entirely the second condition applied to the body. Its two examples, the
  biceps holding a book and the back lifting a box, want one figure each.
- **9.1 is thin** (two equations, no example, no problem set, two conceptual
  questions) and 9.4's problem set is thin as well (two problems, neither
  keyed). Rule 11 keeps both as pages of their own.
- **Two exercises sit with the wrong section and are moved.** 9.4's AP item
  on a stack of books, each overhanging the one below, asks what has to be
  known to predict when the stack tips; that is 9.3's base of support, so it
  goes to 9.3 with `source_section: "9.4"`. 9.4's AP item that asks for the
  best estimate of the torque a child makes on a see-saw is a torque
  magnitude and nothing else, so it goes to 9.2 the same way. Both sections'
  `exercise_notes` say so. Nothing else moves: 9.3's eleven problems are
  applied statics, but a reader who has read 9.1 and 9.2 has both conditions
  and can do every one of them, so they stay where the book prints them.
- **Three items lean on chapters that are not built.** 9.6's Integrated
  Concepts problem replaces the book with an elastic rope of force constant
  600 N/m, which is 16.1's Hooke's law and is fine, but it is unkeyed and is
  left out on that ground. 9.6's palm-tree problem asks for the force from a
  ball in contact for 10 ms, which is Chapter 8's impulse; it is unkeyed too
  and is left out. 9.6's push-up problem is keyed and its parts (c) and (d)
  ask for work and power, which are Chapter 7's; it is kept, since it is
  printed in 9.6 and its first two parts are the section's own, and the note
  says which parts reach forward.
- **The keyed items.** The answer key covers roughly every second problem,
  as elsewhere in the book: 9.2's problems 1, 3 and 5; 9.3's 1, 3, 5, 7, 9
  and 11; 9.5's 1, 3, 5 and 7; 9.6's 1, 3, 5, 7, 8, 10, 12 and 14; none of
  9.4's two. Six of the chapter's eleven AP items are keyed (9.2's first,
  9.3's only one, 9.4's second and fourth, 9.5's first and 9.6's only one)
  and none of its nineteen conceptual questions is. 9.6's last two problems are an
  Unreasonable Results item, which is keyed, and a Construct Your Own
  Problem item, which is not and is left out.
- **The converter writes two spellings of the same exercise type.** 9.2 and
  9.3 carry `type=problem-exercises` and 9.4, 9.5 and 9.6 carry
  `type=problems-exercises`; both are the book's end-of-module problem set
  and both become the `problem` kind.
- **The intro defines no term.** Unlike the introductions of Chapters 2, 6
  and 16, m42167 carries no `<definition>`, so nothing has to be placed in a
  section's glossary on its behalf. It does print an unnumbered boxed note
  titled Statics, which is kept as a note, and it ends on a link to the
  publisher's video trailer, which is left out and named in `notes`.

## What the tooling needs

- One new type, `torque`, and twenty-six new symbol rows in `book.json`,
  listed in the config. The lever arm $r$ is keyed `r_lever` rather than
  `r`, because Chapter 5 holds an untyped `r` and Chapter 6 holds the radius
  of curvature under `r_curv` with the macro `\kr`; `r_1` and `r_2` are
  Chapter 6's rows, reused as they stand, since a lever arm and an orbital
  radius are both positions written $r_1$ and $r_2$.
- No new figlib primitive. A turning arc about a pivot and a bar pivoted on
  a fulcrum are drawn from `line`, `arrow`, `dot` and `curve`; the sprites
  the sims want (a pencil, a seesaw, a nail puller, a forearm) are drawn in
  the section modules, as Chapter 3's boats and balls were.
- Nothing else: the shell, the views and the validator are unchanged.

## Left for a later pass

- Torque as a vector. The book says "for rotation in a plane, torque has two
  possible directions" and leaves the right-hand rule to Chapter 10. A
  figure that turns a plane torque into an axial vector belongs with that
  chapter, not this one, and no section of Chapter 9 should draw it.
- A figure for 9.3 that lets the reader raise and lower a body's center of
  gravity and widen its base of support at the same time, and reads off the
  angle at which it topples. It is a genuine view the book does not give,
  since the book draws one person and one chicken and argues from them, but
  it belongs to the whole of 9.3 rather than to any one passage; the 9.3
  agent should propose it under rule 15 and build it only if the section's
  required figures leave it something to add.
