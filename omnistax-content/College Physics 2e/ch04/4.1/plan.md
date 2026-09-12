# Plan: 4.1 Development of Force Concept (m42069)

Source: `source.md`, converted from the CNXML. Status: built today,
2026-09-11, without a review stop, on Chen's instruction to finish the book
in one job.

The shortest section of the chapter and the one everything after it rests
on: three paragraphs that define force, define the external forces a
free-body diagram draws, and take the restoring force of a stretched spring
as a standard. Two sketch figures (the book's 4.3 and 4.4), no photograph,
no equation, no worked example, no table, one boxed Take-Home Experiment,
four AP items and two conceptual questions. One page (rule 11).

## Sub-concepts (page headers)

The book prints no sub-headers here, only the run of the argument:
what force is, what a free-body diagram shows, and how a force is
measured. Three blocks, one per idea:

1. `force` **Force: a push or a pull that adds like a vector** (book: the
   definition of dynamics, the intuitive definition of force, the cannon
   and the flea, the two skaters pushing on a third, the head-to-tail
   method, the pointer back to Two-Dimensional Kinematics; Figure 4.3,
   which the book places at the end of this paragraph). The variables
   $\kF$, $\kFone$, $\kFtwo$ and $\kFtot$ anchor here.
2. `free-body` **External forces and the free-body diagram** (book: Figure
   4.3(b) as the first free-body diagram of the text, the body as a single
   isolated point, external forces against internal ones, why only
   external forces are shown).
3. `standard` **A standard unit of force** (book: a quantitative
   definition built on a standard force, the spring stretched a fixed
   distance, the restoring force, the magnitude of any other force as a
   multiple of the standard, the magnetic force as an alternative, Figure
   4.4, and the boxed Take-Home Experiment on force standards). The
   variables $\kFres$, $\kx$ and $\kdx$ anchor here.

The cross references stay plain text: "Two-Dimensional Kinematics" and
"Magnetism", as the chapter's config settled. `[ref:import-auto-id2379809]`
becomes "Figure 4.3" and `[ref:import-auto-id2608835]` becomes "Figure
4.4", which the build links to the two figures. The four `{term:…}` markers
become `<strong>`, the Take-Home Experiment becomes a `div.note`.

Learning objectives, the section summary and the four glossary terms come
out of the running text into the views. The hawk AP item is a short
Understand check and is set inline after `free-body`; everything else goes
to the Exercises document.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| dynamics | idea | force | the opening sentence; the section summary |
| force | idea | force | the definition as a push or a pull; Figure 4.3(a); CQ 2 |
| external-force | idea | free-body | the definition; AP items 1 and 3; the hawk item |
| free-body-diagram | skill | free-body | Figure 4.3(b) and the paragraph that reads it |
| force-standard | idea | standard | the stretched spring; Figure 4.4; CQ 1 |

The section leans on `vector` and `head-to-tail-method` (3.2) and on
`units` (1.2), which the coverage rows mark as used where the text uses
them.

Two nodes have no exercise of their own in the book. `dynamics` is named
and defined and nothing is set on it; `free-body-diagram` would have been
tested by the racetrack AP item, which goes to 4.3 with the net external
force. No question is generated for either (rule 13 and the chapter's
config).

## Figures

id · replaces · concepts · what moves · sliders · headline · graph · 3D

1. `sim-skaters` · replaces Figure 4.3, whose parts (a) and (b) the book
   prints as one image under one number ·
   force, external-force, free-body-diagram · **still**: the idea has no
   time in it. Two skaters push on a third and the total force answers the
   two pushes; nothing travels, oscillates or accumulates, so the figure
   registers no cycle and carries no transport (rule 14) · $\kFone$ (10 to
   80 N, default 50, force), $\kFtwo$ (10 to 80 N, default 40, force),
   $\theta$, the angle between the two pushes (30º to 150º, default 90º,
   ink, since an angle is untyped) · "F₁ = 50 N and F₂ = 40 N at 90º to
   each other add to a total force of 64 N, 38.7º from the first push" ·
   no graph: the two panels are the picture · no. Layout: the book's (a)
   at the left, an overhead view of the three skaters with the two pushes
   drawn along the arms and the head-to-tail triangle laid on the scene,
   and the book's (b) at the right, the free-body diagram, the third
   skater drawn as a single point with the two external forces leaving it
   and the total force dashed. Readout: $\kFtot = \sqrt{\kFx^2 + \kFy^2}$
   with the numbers; small line on the head-to-tail method and on the
   right angle of the book's figure, where the sum is simply
   $\sqrt{\kFone^2 + \kFtwo^2}$. Draws force.
2. `sim-spring` · replaces Figure 4.4, whose parts (a), (b) and (c) the
   book prints as one image under one number · force-standard, force · **still**: the idea has no
   time in it either. The spring answers its stretch and the scale answers
   the pull; nothing runs while a clock runs, so no cycle and no transport
   · $\kx$, the undistorted length of the spring (0.10 to 0.40 m, default
   0.20, position), $\kdx$, the distance it is stretched (0.00 to 0.10 m,
   default 0.06, position) · "the spring is stretched 6.0 cm past its
   relaxed length of 20.0 cm, and the scale reads 6 units of the standard
   force" · no graph · no. Layout: three panels stacked, the book's (a)
   the relaxed spring of length $\kx$ fixed at the left, (b) the same
   spring pulled out by $\kdx$ with the restoring force $\kFres$ drawn
   back toward the fixed end, and (c) the spring scale with a face marked
   in standard units and its pointer at the reading. The standard is the
   restoring force of a one-centimeter stretch, so the default stretch
   reads six units and reproduces the book's part (c) on load. Readout:
   $\kFres = (\kdx / \Delta x_{\text{std}})F_{\text{std}}$ with the
   numbers; small line saying that the face of the scale is marked off in
   those standard units. Draws force, position.

Both book figures are sketches and both are replaced. The section prints no
photograph, so there is nothing to keep or drop. No figure of this section
serves an exercise: the three racetrack drawings of the first AP item go to
4.3 with the item, and the 4.1 copies of them are not made here.

Figure 4.3's image carries no `width` in the CNXML, so its `widths` stays
empty and the app shows it at its natural size; Figure 4.4's carries
`width="400"`. The bundle file of Figure 4.3 is named with a space,
`Figure 04_01_01a-e066.jpg`; it is copied to `media/ch04/` with an
underscore, as Chapter 2 did.

`dynamics` gets no figure of its own. It is the name of the question the
chapter asks rather than a thing that can be drawn, and the two figures
above answer to force, which is what dynamics is the study of.

Extra simulations (rule 15), considered and left:

- A free-body diagram the reader builds: drag arrows onto a dot and the
  figure says whether the diagram is complete and what the total force is.
  It opens a real view that neither figure gives, but it serves 4.1, 4.6
  and every section between equally and belongs to none of them, so the
  chapter's `exploration.md` holds it for a chapter-level pass. Left.
- A sorter that takes a scene and asks which of its forces are external to
  a chosen body: the choice of the body is the system of interest, which is
  4.3's idea, and here it would run ahead of the text. Left.
- Three or more forces added head to tail: `sim-skaters` already shows the
  method, and a third arrow only makes the same drawing busier. Left.

None built.

## Exercises

- One inline item: the hawk AP item, `ap2` (fs-id1470278), keyed by the
  book, Understand, set after `free-body`, which is where the text says a
  body cannot exert a force on itself.
- 2 further AP items at the end, both unkeyed choice items, both kept as
  open items with their four options as the book prints them and an
  AI-marked suggested approach, as rule 13 and the 2.5 and 3.1 precedents
  do: `ap1` (fs-id1266227, a body exerting a force on itself) and `ap3`
  (fs-id1418886, what moves a rowed boat).
- 2 conceptual questions, `cq1` (fs-id1445672, propose a different force
  standard, Apply) and `cq2` (fs-id1654920, what makes forces vectors,
  Understand), both with AI-written suggested approaches.
- No problems: the section prints none.
- Left out: the first AP item, `fs-id1691415`, the two cars on the
  racetrack. It asks for the direction of the net force at points around a
  track, which is the net external force of 4.3, and it is keyed, so 4.3
  takes it with `source_section: "4.1"` and both sections' `exercise_notes`
  say so. Its three drawings go with it and are not copied here.
- Weights: `ap1`, `ap2` and `ap3` all turn on the external force and merely
  name force itself, so `force` takes weight 1 on each and `external-force`
  its full Bloom value. `cq1` turns on the standard and gives `force`
  weight 1.
- Nothing is generated.

## Views

- Formulas: none. The section states no equation, so its part of the
  formula sheet is empty and `chapter.json` writes no equation row for it.
- Definitions: the seven variables of the section and the four glossary
  terms.
- Concept map: the five nodes above, with edges into 1.2 and 3.2.

## Colour

The page binds force and position. Both figures carry forces on their
sliders, draw them as arrows and state them in their readouts, and the
spring figure carries the undistorted length $\kx$ and the stretch $\kdx$
in the position hue and brackets them on the drawing. The angle between the
two pushes, the count of standard units on the face of the scale and the
skaters themselves stay in ink.

## Wanted at chapter level

- variables `F` → 4.1-force
- variables `F_1` → 4.1-force
- variables `F_2` → 4.1-force
- variables `F_tot` → 4.1-force
- variables `F_restore` → 4.1-standard
- variables `x` → 4.1-standard
- variables `Δx` → 4.1-standard
