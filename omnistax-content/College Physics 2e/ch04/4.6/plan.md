# Plan: 4.6 Problem-Solving Strategies (m42076)

Source: `source.md` (converted from CNXML). openstax page
`4-6-problem-solving-strategies`.
Status: built 2026-09-11 without a review stop, on Chen's instruction to
finish the book in one job. The per-section stop of rule 2, the plan
review of rule 5 and the user picks of rule 15 are replaced by this file,
written before the section was built and left for review after, as
Chapters 1 to 3 did it.

A thin section (rule 11): one opening paragraph, a four-step strategy
under the book's own header, one boxed note with the two axis equations,
one figure, three AP items and seventeen problems. It stays a page of its
own. There is no worked example, no Check Your Understanding box, no
glossary entry of its own (the term *free-body diagram* the text marks
here is defined in the chapter glossary under 4.1, where the book first
defines it) and no photograph.

## Sub-concepts (page headers)

The book prints an untitled opening paragraph, then one titled run,
"Problem-Solving Strategy for Newton's Laws of Motion", holding Steps 1
to 4 with the figure after Step 1 and the boxed note between Steps 3 and
4. The page keeps the book's header and divides the run once, at the
seam between drawing the picture and writing the equations, so that
neither block runs to four steps. The book's numbered steps stay numbered
steps, as `<h3 id="step-1">` to `step-4`, so a question can cite one of
them.

1. `skills` **Problem solving with Newton's laws of motion** (book: the
   opening paragraph, "Success in problem solving is obviously
   necessary…", which says why the section exists and introduces no
   concept of its own)
2. `steps` **Problem-Solving Strategy for Newton's Laws of Motion**
   (book's own header; Step 1 with Figure 4.20, and Step 2 with the
   system of interest and the free-body diagram)
3. `axes` **Writing and checking the force equations** (book: Step 3, the
   boxed note *Applying Newton's Second Law* with the two equations, and
   Step 4)

Learning objectives and the section summary come out of the running text
into the views. The three AP items and the problems go to the Exercises
document.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| newtons-laws-problem-solving | skill | `steps` | the four steps and Tarzan on his vine; the summary; the dozen problems that ask the reader to show the steps explicitly |
| resolve-forces-into-components | skill | `axes` | Step 3 on projecting the forces onto axes chosen for convenience; the snow-saucer sled and the braces on a tooth |
| net-force-by-axis | result | `axes` | the boxed note and its two equations; the toboggan and elevator AP items; the snow-saucer sled |

Coverage beyond the three introductions: `skills` uses
`newtons-second-law` (the strategy exists to apply it); `steps` uses
`free-body-diagram` (4.1), `system-of-interest` (4.3),
`external-force` (4.1), `newtons-third-law` (4.4, which sorts internal
forces from external ones), `tension` and `weight`; `axes` uses
`newtons-second-law`, `newtons-laws-problem-solving` and
`weight-components-on-incline` (4.5, the incline is the book's own
example of convenient axes).

## Figures

id · replaces or Sim · concepts · what moves or still · sliders · headline
· graph · 3D

1. `sim-tarzan` · Figure 4.20 (four panels under one number, so one row
   with one original, not a fold) · newtons-laws-problem-solving,
   net-force-by-axis, free-body-diagram · **still**: Tarzan hangs from
   the vine and nothing in the idea has a time in it; the four panels
   answer the sliders and redraw, so the figure registers no cycle and
   carries no transport (rule 14) · mass $m$ (40 to 100 kg, step 5,
   default 80, ink, since mass is untyped) and the vertical acceleration
   $\ka$ (−2.50 to 2.50 m/s², step 0.25, default 0, acceleration hue) ·
   "Tarzan hangs still, so the tension of 784 N is exactly his weight of
   784 N", and, once he is given an acceleration, "Tarzan accelerates
   upward at 1.50 m/s², so the tension of 904 N is 120 N more than his
   weight" · no graph · 2D. The four panels stand side by side as the
   book prints them: (a) the sketch of the man on the vine, (b) every
   force drawn as an arrow, the tension $\kTf$ up the vine, the force
   $F_{\text{T}}$ he exerts on the vine down from the same point and his
   weight $\kwgt$ down from his stomach, (c) the man alone inside a
   dashed system boundary, with $F_{\text{T}}$ gone because it acts on
   the outside world, and (d) the two remaining arrows added head to
   tail. Every arrow's length follows its force, so the reader sees the
   tension grow past the weight as soon as the acceleration is not zero,
   which is what "$T = -w$, if Tarzan is stationary" means. The
   acceleration slider is what ties the figure to the boxed note: at
   $\ka = 0$ the head-to-tail sum closes and the net force along the
   vertical axis is zero, and at any other value it does not close and
   the gap is $m\ka$. Readout: $\kTf = m(\kg + \ka)$ with the live
   numbers, and a second line saying whether the net force along the
   vertical axis is zero and by how much the tension differs from the
   weight. Draws force and acceleration.

2. `sim-axes` · Sim (it replaces no figure of the book; Step 3 has no
   drawing of its own) · resolve-forces-into-components, net-force-by-axis
   · **still**: the idea is which pair of axes to write the equations
   along, and that has no time in it; the block does not slide, the
   picture answers its sliders (rule 14) · the angle of the incline
   $\theta$ (5 to 40°, step 1, default 25, ink), the angle the axes are
   turned from the horizontal $\varphi$ (0 to 45°, step 1, default 0,
   ink) and the mass $m$ (10 to 100 kg, step 5, default 40, ink) ·
   "turned 25° from the slope, the axes split the acceleration into 3.75
   and −1.75 m/s²", and, once the axes lie along the slope, "along the
   slope the block accelerates at 4.14 m/s² and not at all across it" ·
   no graph · 2D. The scene at the left is a block on a frictionless
   incline, with its weight $\kwgt$ drawn down, the normal force $\kN$
   drawn away from the surface and the acceleration $\ka$ drawn down the
   slope. Beside it stands the free-body diagram, which carries only the
   two forces, since the book says in this very section that only forces
   are shown on a free-body diagram and not acceleration or velocity; the
   chosen pair of axes runs through it as two dashed lines, and each
   force that does not lie along one of them is projected onto both with
   dashed drop lines and a component arrow along each axis. Under the two
   drawings a ledger writes what each force contributes along each axis,
   what the net force along it comes to and what the mass times the
   acceleration along it comes to, so that the two halves of Newton's
   second law can be read off against each other. Turning the axes to the
   angle of the slope leaves only the weight to resolve and drops the
   acceleration across the slope, and the net force across it, to zero,
   which is the book's own reason for choosing axes along an incline. The
   force arrows are drawn to a scale set by the weight, so the picture
   stays legible at every mass while the labels and the ledger carry the
   newtons. Draws force and acceleration.

Photographs: none. The section prints no photograph.

Figures that serve exercises: the book draws five figures inside the
problems of this section and three more inside their solutions, and none
of them carries a number. Two of the five belong to problems the book
keys, and those two ride on their exercise cards as the card's own
figure, with the bundle's file copied to `media/ch04/`: the snow saucer
sled seen from above (`Figure_04_06_05-5e7d.jpg`, problem 9) and the
braces on a tooth (`Figure_04_06_07.jpg`, problem 11, printed 225 wide).
The other three belong to problems with no keyed answer, which are left
out, so those images are not copied: the pair of forces adding to a total
(`Figure_04_06_04-4292.jpg`), the car in the mud
(`Figure_04_06_09-f3ba.jpg`) and Superhero and Trusty Sidekick
(`Figure_04_06_08.jpg`). The three free-body diagrams the book draws
inside the solutions of problems 1, 3 and 11 are left out as well, since
a card carries one figure and that one is the problem's own; the
solutions state the same equations in words.

Extra simulations (rule 15). Three were thought of and none was built.
A walker through the four steps, lighting each step as the reader clicks
it, would animate a checklist the reader already has in front of them,
which is what the rule tells the agent not to build. A free-body diagram
of the toboggan of the first AP item would answer the item for the
reader, and the item asks precisely that the reader draw it. A "knowns
and unknowns" sorter, where the reader drags the numbers of a problem
into two lists and the usable equations light up, is a quiz rather than a
simulation of anything physical, and Step 2 says the same thing in a
sentence.

## Exercises

- 3 AP test prep items, all at the end. `ap1` (fs-id1642540, the toboggan
  on the slope, keyed (b), a graded choice, Apply); `ap2` (fs-id1459777,
  the mass on a rope in an accelerating elevator, **not** keyed — the
  book comments its solution out — so it is kept as an open item with its
  four options as the book prints them and an AI-marked suggested
  approach, Apply); `ap3` (fs-id1795701, which statement about free-body
  diagrams is true, keyed (d), a graded choice, Understand).
- 6 problems, all keyed, all at the end: `p1` (fs-id1250439, the rocket,
  6.20 m/s², with the book's worked solution), `p3` (fs-id1630579, the
  high jumper, 3.43 × 10³ N, with the book's four numbered steps as its
  solution), `p5` (fs-id666647, the freight train, two parts), `p7`
  (fs-id1673888, the car pulling a boat, two parts), `p9` (fs-id2159386,
  the snow saucer sled, a magnitude and a direction), `p11`
  (fs-id2607890, the braces on a tooth, 12.9 N, with the book's worked
  solution).
- 11 problems left out for want of a keyed answer and named in `notes`
  and `exercise_notes`: the midsize car (fs-id2651416), the gymnast
  landing (fs-id1682349), the tractor and the airplane (fs-id1662012),
  the two forces adding to a total (fs-id1333485), the car in the mud
  (fs-id1389092), Superhero and Trusty Sidekick (fs-id2686437), the
  nurse's cart (fs-id1552077), the two Construct Your Own Problem items
  (fs-id2654456, fs-id1677950) and the two Unreasonable Results items
  (fs-id1325985, fs-id1285123).
- Nothing is taken from another section. The AP items of 4.1, 4.5 and
  4.8 that the chapter holds are held for 4.3, not for this page, and no
  item of another section of the chapter turns on the four steps or on
  the two axis equations without turning first on a law those sections
  introduce.
- Nothing of this section is held for a later one: every item here is
  answered with Newton's second law and the forces the chapter has
  already named.
- No generated questions: each of the three nodes has book exercises of
  its own.

## Views

- Formulas: `eq-fnet-x` and `eq-fnet-y`, both important, both already in
  `chapter.json` and both anchored at `axes`.
- Definitions: six variable rows, `F_netx`, `F_nety`, `T_force`, `w`,
  `m` and `a`, already in `chapter.json`. The term *free-body diagram*
  the text marks here belongs to 4.1 in the chapter glossary, where the
  book first defines it, and is not repeated.
- Concept map: the three nodes with their edges, already in `book.json`.

## Colour

The page binds force and acceleration, from the two figures: every force
arrow, every force component and every tension, weight and normal force
in the readouts takes the force hue, and the acceleration and $\kg$ take
the acceleration hue. Mass, the angle of the incline and the angle the
axes are turned through stay untyped and in ink, as the chapter's config
decided. No new hue, no new macro, no new type.

## Wanted at chapter level

Anchors, one per row of `chapter.json` this section owns:

- `F_netx` → `4.6-axes`
- `F_nety` → `4.6-axes`
- `T_force` → `4.6-steps`
- `w` → `4.6-steps`
- `m` → `4.6-axes`
- `a` → `4.6-axes`
- `eq-fnet-x` → `4.6-axes`
- `eq-fnet-y` → `4.6-axes`

Nothing else is wanted: every concept id, symbol, macro and equation this
section needs was already merged by the chapter's prep.

### The chapter pass decided

The six variable anchors and the two equation anchors are written.

The AP item on the tension in the cable of a lift that is accelerating stays
here, where the book prints it and where the four steps it is set under are
introduced. 4.7's notes say the same, so the two sections agree.

The heading of the strategy is set in the book's voice, sentence case, as the
headings of Chapters 1 to 3 are.
