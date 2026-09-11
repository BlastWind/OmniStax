# Plan: 3.1 Kinematics in Two Dimensions: An Introduction (m42104)

Source: `source.md` (converted from CNXML). Book pages 120 to 121.
Status: built 2026-09-11 without a review stop, on Chen's instruction to
finish Chapters 2 and 3 in one job.

A short, qualitative section that opens the chapter: two titled runs of
text, one boxed note, five figures (one splash photograph, four sketches),
no equations of its own beyond the Pythagorean theorem, no worked example,
no Check Your Understanding, three AP items (two keyed), no conceptual
questions and no problems. It stays one page (rule 11).

## Sub-concepts (page headers)

The book has two headers. Page structure, one block per idea, span ids as
the chapter's anchors expect them:

1. `walking` **Two-dimensional motion: walking in a city** (book's own
   header: the walk of 9 blocks east and 5 blocks north, the Pythagorean
   theorem, the straight-line distance of 10.3 blocks and the note on
   significant figures). The chapter's equation `eq-pythagoras` anchors
   here.
2. `vectors` **Three vectors describe a two-dimensional path** (book: the
   paragraph on the straight-line distance being less than the distance
   walked as a characteristic of vectors, and the paragraph on arrows,
   hash marks, and the three vectors of the walk that add to the
   straight-line path; the cross references to 3.2 and 3.3 stay as the
   book's plain wording).
3. `independence` **The independence of perpendicular motions** (book's
   own header: the walker's east and north legs, the boxed note
   Independence of Motion kept verbatim, the two baseballs under the
   stroboscope, the paragraph on resolving projectile motion into
   perpendicular components). The keyed multiple-choice AP item on the
   acceleration of a thrown ball goes inline at the end of this block; it
   is a short Understand-level check beside the passage it tests, which
   the exploration left to the section agent's judgement.

The PhET note (Ladybug Motion 2D) is dropped per config. Learning
objectives, section summary and glossary come out of the running text into
the views. The remaining keyed AP item goes to the Exercises document.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| right-triangle-resultant | result, eq-pythagoras | walking | the walk in the city and Figures 3.3 to 3.5; problems 1 and 4 of 3.2 and problem 4 of 3.3 stay on their own pages |
| vector-components | idea | vectors | the three vectors of Figure 3.5; the components problems of 3.2 stay on that page |
| independence-of-perpendicular-motions | idea | independence | the boxed note; the two baseballs of Figure 3.6; AP items 1 and 3 |

`vectors` reinforces `vector` (2.2), which the book's glossary prints again
here; `independence` uses `free-fall` and `acceleration` (2.7 and 2.4),
its prerequisites. The 3.4 conceptual question on the two coins flicked
and nudged off a table tests this section's idea, but it is printed with
projectile motion and 3.4's page keeps it; `exercise_notes` says so.

## Figures

id · replaces · concepts · what moves · sliders · headline · graph · 3D

1. `demo-walk` · replaces Figures 3.3, 3.4 and 3.5 (the walk on the grid
   of blocks, the right triangle of the Pythagorean theorem, and the
   helicopter's straight-line path; one scene in the book drawn three
   times, so one demo carries the number 3.3 with the other two images as
   further originals) · right-triangle-resultant, vector-components · a
   pedestrian walks east along the bottom of a grid of square blocks and
   then north up its right edge while a helicopter flies the straight
   diagonal from the same start at the same speed; the three vectors are
   drawn as arrows with a hash mark per block, the right triangle they
   form is shaded, and the angle of the diagonal above east is marked;
   the helicopter arrives first, because its path is shorter · blocks
   east (1 to 12, step 1, default 9, position hue), blocks north (1 to 8,
   step 1, default 5, position hue) · "the walker has gone 6.0 of the 14
   blocks and the helicopter 6.0 of its 10.3" while moving, and at the
   end "14 blocks walked, 9 east and then 5 north, and the straight-line
   distance is 10.3 blocks" · none, the grid is the scene and the
   triangle is the idea · no. Moving: two things travel, one loop of
   about 5 real seconds ending when the walker arrives, so it gets the
   scrubber. Readout: $c = \sqrt{a^2 + b^2} = \sqrt{(9\ \text{blocks})^2
   + (5\ \text{blocks})^2} = 10.3\ \text{blocks}$ with the legs in plain
   LaTeX (`\ka` is the acceleration and `\kc` the speed of light, so
   neither names a triangle side); small line: the walk covers 14 blocks
   and the angle of the straight-line path above east is 29.1°. The
   three displacement arrows and their labels are in the position hue,
   the walker and the helicopter are ink sprites, the angle is in ink.
   Draws position.
2. `demo-two-balls` · replaces Figure 3.6 (the two baseballs under the
   stroboscope) · independence-of-perpendicular-motions · one ball is
   dropped from rest and another is thrown horizontally from the same
   height at the same instant; both fall, and at every flash of the
   strobe a faint copy of each ball is left behind with its horizontal
   and vertical velocity arrows and a dashed level line joining the two
   copies, which are always at the same height; the acceleration arrow
   on each ball is drawn every frame and never changes · initial
   horizontal velocity $\kvox$ of the thrown ball (0.5 to 6.0 m/s, step
   0.1, default 3.0, velocity hue), flash interval $\kdt$ (0.05 to 0.20
   s, step 0.01, default 0.10, time hue), height $\kyo$ the balls start
   from (1.0 to 5.0 m, step 0.1, default 1.5, position hue) · "t = 0.30
   s · both balls are 1.06 m above the ground; the thrown ball has gone
   0.90 m sideways" and at the end "both balls reach the ground together
   after 0.55 s, and the thrown one has gone 1.66 m sideways" · none,
   the strobe copies are the record of the motion · no. Moving: the
   balls fall, one finite loop of about 5 real seconds, so it gets the
   scrubber. Readout: $\ky = \kyo - \tfrac{1}{2}\kg\kt^2 = 1.06\
   \text{m}$ for both balls and $\kx = \kvox\kt = 0.90\ \text{m}$ for
   the thrown one; small line: the vertical velocities of the two balls
   are equal at every flash, and the horizontal velocity of the thrown
   ball is the same between every pair of flashes. Draws time, position,
   velocity and acceleration.

Photographs, one:

- Figure 3.2, the New York intersection (credit: Margaret W. Carruthers):
  **drop**. It is the splash image at the head of the section; nothing
  in the text refers to it. Not copied.

Figures that serve exercises: none. The unkeyed second AP item asks about
a graph the reader would draw, not one the book prints.

Extra simulations (rule 15): thought about a demo where the reader drags
the destination anywhere on the grid and the walker takes any staircase
path (the distance walked is always the same 14 blocks, whatever the
staircase); a version of the two balls with air resistance switched on
("in the real world, air resistance will affect the speed of the balls in
both directions"); and a third ball thrown vertically, from the third AP
item. The first only redraws the walk demo with a longer path, the second
needs a drag model the book does not give until Chapter 5, and the third
adds a ball 2.7 has already shown. None built.

## Exercises

- 0 Check Your Understanding: the chapter has none.
- 0 conceptual questions, 0 problems: the section prints none.
- AP test prep, 3 items: `ap1` (fs-id1421044, the acceleration of a ball
  thrown at 45°, keyed (d)) kept as a choice answer, Understand, inline
  after `independence`; `ap3` (fs-id1462671, the three-ball experiment,
  keyed with the book's sentence on what to record) kept as an open
  answer to compare with, Analyze, at the end; the second item
  (fs-id895568, the graph of the vertical acceleration against time) is
  unkeyed; the section first left it out, and the chapter pass kept it
  as `ap2`, an open item with the four options as the book prints them
  and an AI-marked suggested approach, as rule 13 and the 2.5 precedent
  (`ap-marble`) do for an AP item without a key. Understand, at the end,
  tagged `independence-of-perpendicular-motions` at full value and
  `acceleration-due-to-gravity` and `derive-motion-graphs` at weight 1.
- Nothing taken from another section, nothing held for a later page. The
  two-coins conceptual question of 3.4 tests the independence of
  perpendicular motions but is printed with projectile motion and stays
  there.
- No generated questions. `right-triangle-resultant` and
  `vector-components` have no exercise of their own on this page; the
  problems that test them are 3.2's and 3.3's (the paths through the city,
  the perpendicular legs of a walk, the components of a displacement),
  which stay with the methods those sections introduce.
- Weights: `ap1` turns on the constant downward acceleration of free fall
  as much as on the independence of the motions, so it is tagged
  `acceleration-due-to-gravity` and `free-fall-highest-point` at weight 1
  each and `independence-of-perpendicular-motions` at full value; `ap3`
  is tagged `independence-of-perpendicular-motions` and `acceleration` at
  weight 1.

## Views

- Formulas: eq-pythagoras (important), already in `chapter.json`.
- Definitions: the glossary term vector; no variable row of this
  section's own.
- Concept map: the three nodes above, with `vector` (2.2) reinforced and
  `free-fall` (2.7) and `acceleration` (2.4) used.

## Colour

The page binds position (the three displacement arrows of the walk and
the height of the balls), and time, velocity and acceleration from the
balls demo, whose sliders carry a flash interval and a horizontal
velocity and whose arrows are velocities and an acceleration. The angle
of the diagonal, the counts of blocks in the headline, and the legs $a$,
$b$, $c$ of the theorem are in ink. No new hue, no new macro.

## Wanted at chapter level

- `eq-pythagoras` → anchor `3.1-walking`.
- (nothing else: no variable row belongs to this section, and every
  concept id, equation id and glossary term it needs is there.)

Decided in the chapter pass (2026-09-11): `eq-pythagoras` is anchored at
`3.1-walking`. The prose refers to Figure 3.5, which the demo carries as
a further original under the number 3.3, so that reference is not linked;
this is accepted, since one scene drawn three times is one demo. The
unkeyed AP item is kept as an open item rather than left out, as the
exercises list above now says.
