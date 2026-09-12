# Plan: 9.3 Stability (m42172)

Source: `source.md`, converted from the CNXML bundle. Status: built today,
2026-09-11, without a review stop, on Chen's instruction to finish the book
in one job.

The section that asks what happens to a body once it is nudged out of
equilibrium. Nine numbered figures (one photograph, eight diagrams), six
further diagrams inside the problems, no table, no equation stated in the
running text, no worked example, no Check Your Understanding box, one boxed
Take-Home Experiment, one keyed AP item, two conceptual questions and eleven
problems, six of them keyed. One page (rule 11).

## Sub-concepts (page headers)

The module prints no header of its own, so every header below is the agent's.
The book's order of argument is kept exactly.

1. `types` **Three types of equilibrium** (book: the opening paragraph, the
   balanced toy doll and its center of gravity over the pivot; Figure 9.9).
2. `stable` **Stable equilibrium** (book: the definition of stable
   equilibrium, the marble at the bottom of a bowl, the pencil standing on
   its eraser; Figures 9.10, 9.11 and 9.12, folded). The variables $\kwgt$,
   $\kN$ and $\ktau$ anchor here.
3. `unstable` **Unstable equilibrium** (book: the definition of unstable
   equilibrium, the ball on top of a hill, the pencil balanced on its point;
   Figures 9.13 and 9.14, folded).
4. `neutral` **Neutral equilibrium** (book: the definition of neutral
   equilibrium, the marble on a flat surface, the marble on a saddle, the
   sphere and the pencil lying on its side; Figure 9.15).
5. `limits` **The base of support** (book: how far a system in stable
   equilibrium can be displaced, the critical point where the cg passes
   beyond the base, spreading the feet, bending the knees, canes and
   crutches; Figure 9.16).
6. `animals` **Why a chicken is steadier than a person** (book: the two
   paragraphs on the chicken, whose cg is below its hips and between two
   broad feet; Figure 9.17).
7. `design` **Designing for stability** (book: the closing paragraph on
   engineers and architects and on the conditions holding for every kind of
   force, and the boxed Take-Home Experiment).

The three glossary terms (`stable equilibrium`, `unstable equilibrium`,
`neutral equilibrium`) are marked in the text with `<strong>` and defined in
the chapter tables. The learning objectives and the section summary go to
`objectives` and `summary_html`. The section states no equation, so nothing
of this section reaches the formula sheet; its figures read out 9.2's
$\ktau = \krperp\kwgt$, which is where the reader met it.

Two references in the book's own words are kept as the book writes them and
the build links them: "Figure 9.9", "Figure 9.10", "Figure 9.15" and
"Figure 9.16(a)". Conceptual question 1 says "as in Figure 9.12" where it
plainly means the pencil lying on its side, which is Figure 9.15; the book's
own link points at 9.12 and the wording is kept as the book prints it.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| restoring-torque | idea | stable | the pencil folded from Figures 9.10 to 9.12; the AP item on the traffic cone |
| stable-equilibrium | idea | stable | the definition and the glossary; the marble in a bowl; the AP item |
| unstable-equilibrium | idea | unstable | the definition and the glossary; the pencil on its point; the AP item |
| neutral-equilibrium | idea | neutral | the definition and the glossary; Figure 9.15; conceptual question 1 |
| base-of-support | idea | limits | Figure 9.16, the chicken of Figure 9.17, the take-home experiment, the AP item on the stack of books |

The section leans on `center-of-gravity`, `torque`, `torque-depends-on-pivot`,
`torque-sign-convention` and `second-condition-equilibrium` (9.2), on
`first-condition-equilibrium` and `static-equilibrium` (9.1), and on
`weight` and `normal-force` (Chapter 4); the coverage rows mark each as used
where the text uses it.

## Figures

id · replaces · concepts · still or moving · sliders · headline · graph · 3D

1. `fig-doll` · Figure 9.9, the photograph of a man balancing a toy doll on
   one hand · **kept**, because the text points the reader at it in its first
   sentence and it is the section's first example of a balance that is not
   stable · the book's caption, the book's width 200 · no credit clause in
   the book's caption, so none is added.
2. `sim-eraser` · replaces Figures 9.10 + 9.11 + 9.12 (the pencil standing on
   its eraser, upright, tilted a little and tilted too far) ·
   restoring-torque, stable-equilibrium · **still**: statics has no time in
   it, and the three drawings differ only by how far the pencil has been
   displaced, which is a slider and not a clock; a pencil that toppled on its
   own would be the fall rather than the equilibrium, and the book's own
   answer is three frozen drawings · the lean $\theta$ (0º to 25º, ink, since
   an angle is untyped) and the half-width $a$ of the flat end (2 to 40 mm,
   ink, since it is a length of the scene) · "the pencil leans 3.0º and its
   weight acts 0.6 mm inside the pivot, so the torque about the pivot turns it
   back upright" · graph beside the upright scene: the torque about the pivot
   against the lean, crossing zero at the critical lean · no. Readout:
   $\ktau = \krperp\kwgt$ with the live numbers; small line on the critical
   lean $\theta_c = \tan^{-1}(a/h)$. Draws force, position, torque.
3. `sim-point` · replaces Figures 9.13 + 9.14 (the pencil balanced on its
   point, upright and displaced) · unstable-equilibrium, restoring-torque ·
   **still**, for the reason above · the lean $\theta$ (0º to 20º, ink) and
   the height $h$ of the center of gravity above the point (20 to 140 mm,
   ink) · "balanced on its point the pencil has no base at all, so a lean of
   2.0º puts its weight 3.1 mm outside the pivot and the torque drives it
   further over" · graph beside the scene: the same axes as the figure above,
   the curve now leaving zero at once and never coming back · no. Readout:
   $\ktau = \krperp\kwgt$ with the live numbers; small line saying that the
   equilibrium is a single lean and every displacement leads away from it.
   Draws force, position, torque.
4. `sim-neutral` · replaces Figure 9.15 (the sphere on a flat surface and the
   round pencil lying on its side) · neutral-equilibrium · **still** · the
   displacement $x$ along the surface (−30 to 30 cm, ink) and the radius $r$
   of the body (2 to 10 cm, ink) · "the sphere has been rolled 15 cm along the
   surface, and its weight still acts straight down through the point of
   support, so the torque about that point is zero" · none: the two scenes
   are the picture · no. Readout: $\ktau = \krperp\kwgt = 0$; small line on
   the pencil lying on its side, neutral across its length and not along it.
   Draws force, torque.
5. `sim-marble` · replaces nothing, so it is a **Sim** · stable-equilibrium,
   unstable-equilibrium, neutral-equilibrium · **still** · the shape of the
   surface (−1 a hill, 0 flat, +1 a bowl, ink) and the displacement $x$ of the
   marble from the level place (−40 to 40 cm, ink) · "the marble sits 20 cm
   from the bottom of the bowl and the force along the surface points back
   towards it, so this is stable equilibrium" · none: the surface is the
   picture · no. Readout: the component of the weight along the surface with
   its numbers; small line naming which of the three kinds the surface makes.
   Draws force.
6. `sim-stance` · replaces Figure 9.16 (a) and (b) (the person standing, feet
   close and knees straight, then knees bent and feet apart) · base-of-support
   · **still** · the distance between the feet $d$ (10 to 90 cm, ink), the
   height $h$ of the center of gravity (60 to 110 cm, ink) and the lean
   $\theta$ (0º to 30º, ink) · "with the feet 25 cm apart and the center of
   gravity 100 cm up, the weight leaves the base of support at a lean of
   7.1º" · graph beside the upright scene: the torque about the pivot foot
   against the lean, crossing zero at the critical lean · no. Readout:
   $\ktau = \krperp\kwgt$ with the live numbers; small line saying what
   spreading the feet and bending the knees each do to the critical lean.
   Draws force, position, torque.
7. `sim-chicken` · replaces Figure 9.17 (the chicken, cg below the hips and
   between two broad feet) · base-of-support · **still** · the lean $\theta$
   (0º to 45º, ink) and the height $h$ of the center of gravity above the
   ground (5 to 40 cm, ink) · "the chicken's center of gravity is 15 cm up and
   its feet are 18 cm apart, so it can lean 31º before its weight leaves the
   base of support" · none: the scene carries the reading · no. Readout:
   $\ktau = \krperp\kwgt$ with the live numbers; small line comparing the
   chicken's critical lean with the person's few degrees. Draws force,
   position, torque.

Photographs: the section has one, Figure 9.9, and it is kept for the reason
given above. Nothing else in the section is a photograph, so nothing is
dropped; the eight remaining numbered figures are diagrams and all eight are
transformed.

Folds: two, as the chapter config asks. Figures 9.10, 9.11 and 9.12 are one
pencil drawn three times because print cannot lean it, so one figure with a
lean slider says all three and keeps every number; the same holds for
Figures 9.13 and 9.14. Figure 9.15 prints its (a) and (b) inside one image
under one number, so it is one row with one original and not a fold. Figures
9.16 and 9.17 are not folded together: a person and a chicken are two bodies,
and the book's argument is the comparison between them, so each keeps its own
figure and its own sliders.

Figures that serve exercises: six, none of them numbered by the book. Each is
carried as the book's own image inside the exercise card, which is what the
card's `figure` field is for, rather than redrawn in the text: none of the six
is referred to by the running text, so none of them has a place in it. (The
chapter config had them redrawn as figures of the text; this is the one place
where the section departs from it, as 4.5 did, and the reader sees the book's
drawing either way.) They are the leaning horse, on both of its problems; the
braced wall; the drawbridge; the sandwich board; the athlete in the splits;
and the stack of overhanging books, which travels with its AP item from 9.4.
The chicken in the wind belongs to the one problem of the section the book
does not key, so it is left out with that problem and nothing refers to it.

Extra simulations (rule 15), considered:

- **Built:** a marble on a surface whose shape runs from a bowl through flat
  to a hill (`sim-marble`). The book names all three of its force examples in
  words — the marble at the bottom of a bowl, the ball on top of a hill, the
  marble on a flat table — and draws none of them; every required figure of
  the section argues from a torque about a pivot instead. One picture that
  puts the three kinds on one continuum, and reads out the force along the
  surface rather than a torque, opens the definitions from the side the text
  states them and the figures never show.
- **Left:** the cg-over-base view the chapter's exploration set aside for the
  section agent. It is what `sim-stance` already is, since that figure
  carries the height of the center of gravity, the width of the base and the
  lean on its sliders and reads off the lean at which the body topples, so a
  second figure of it would only repeat a required one.
- **Left:** the traffic cone of the AP item, on its base and on its tip. It is
  the two pencils with a different outline, and the item is answered by
  reading either of them.
- **Left:** the take-home experiment, a person with heels and back against a
  wall bending forward to touch their toes. The wall is the only thing it adds
  to `sim-stance`, and the experiment asks the reader to do it rather than
  watch it.
- **Left:** the marble on a saddle, stable one way and unstable the other. It
  is the one idea of the section that needs 3D, the book gives it a single
  sentence and no drawing, and the chapter config keeps the whole chapter
  planar.

## Exercises

- No Check Your Understanding box, so nothing is inline; every item is in the
  Exercises document.
- 2 conceptual questions, `cq1` and `cq2`, Understand, neither keyed by the
  book, each with an AI-marked suggested approach, citing `neutral` and
  `limits`.
- 1 AP item of the section's own, `ap1` (fs-id3163270, the traffic cone on its
  base and on its tip), Understand, keyed by the book, an open answer with the
  book's own solution.
- 1 AP item taken from 9.4 with `source_section: "9.4"`, `ap2`
  (fs-id1362521, the stack of books each overhanging the one below): it asks
  what has to be known to predict when the stack tips, which is the base of
  support and this section's idea, so rule 12 places it here and both
  sections' `exercise_notes` say so. It is keyed, "(d)", so it is a graded
  choice with the five options the book prints; the three numbered statements
  it chooses among stay in the prompt as the book sets them, and the book's
  figure travels with the card.
- 6 problems keyed and kept: `p1` (the horse leaning on the wall, number),
  `p3` (the force on each foot of the horse and the coefficient of friction,
  multi), `p5` (the ten braces on the wall, number), `p7` (the drawbridge on
  its hinges, multi), `p9` (the sandwich board, multi), `p11` (the athlete in
  the splits, number).
- 5 problems left out, having no answer in the book's key: 2 (fs-id3088700,
  the two children on the seesaw), 4 (fs-id1373374, the plank of wood), 6
  (fs-id1323620, the chicken in the wind), 8 (fs-id1285566, the car on the
  drawbridge) and 10 (fs-id1372080, the sign whose chain breaks).
- Nothing is held for a later section: every problem of this section is
  applied statics that a reader who has read 9.1 and 9.2 can do.
- No generated questions: every concept node of the section is tested by a
  book exercise.
- Weights: `p1`, `p3`, `p5`, `p7`, `p9` and `p11` are applications of the two
  conditions for equilibrium and touch the base of support only in that each
  body stands where it stands, so `base-of-support` takes weight 1 on the
  three of them that turn on where the weight's line falls (`p1`, `p5`,
  `p11`) and is not tagged on the others; `cq1` gives `neutral-equilibrium`
  its full value and `stable-equilibrium` weight 1.

## Views

- Formulas: nothing of this section; it states no equation. The figures read
  out 9.2's $\ktau = \krperp\kwgt$.
- Definitions: the three variables of the section, $\kwgt$, $\kN$ and
  $\ktau$; the three glossary terms.
- Concept map: the five nodes above with their edges into 9.1, 9.2, Chapter 4
  and Chapter 6.

## Colour

The page binds force, position and torque. Every figure draws the weight and
the normal force as arrows in the force hue and states them in its readout;
five of the six bracket the perpendicular lever arm in the position hue; five
draw the turning arc about the pivot and state the torque in the torque hue.
The leans, the stance widths, the heights of a center of gravity, the radius
of a rolling body and the shape of a surface are angles and lengths of a
scene, so they stay untyped and in ink.

## Wanted at chapter level

- variables `w` (9.3) → 9.3-stable
- variables `N` (9.3) → 9.3-stable
- variables `τ` (9.3) → 9.3-stable
- No equation of this section wants an anchor: the section states none.
