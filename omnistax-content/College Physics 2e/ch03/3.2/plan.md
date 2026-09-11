# Plan: 3.2 Vector Addition and Subtraction: Graphical Methods (m42127)

Source: `source.md` (converted from CNXML); the figure numbers 3.7 to 3.23
follow the chapter exploration's count. Status: built 2026-09-11 without a
review stop, on Chen's instruction to finish Chapters 2 and 3 in one job.

The section that gives a vector its arrow: one photograph (a splash
image), twenty-two sketches of arrows in five runs, two worked examples,
two equations, no Check Your Understanding box, two AP items with a table
of heights, eight conceptual questions and twelve problems, six of them
keyed. The PhET note (Maze Game) is dropped per config. It stays one page
(rule 11).

## Sub-concepts (page headers)

The book has five titled runs of text. Page structure, one block per
idea, span ids as the chapter's anchors expect them:

1. `vectors-2d` **Vectors in two dimensions** (book: the opening
   paragraph, the boxed note Vectors in this Text, Figures 3.8 and 3.9).
   The chapter's variables `D` and `θ` anchor here.
2. `head-to-tail` **Vector addition: the head-to-tail method** (book:
   the paragraph on tail and head, Figure 3.10, the six numbered steps
   with Figures 3.11 to 3.13, the sentence on accuracy). The steps are
   kept as the book's numbered paragraphs. Example 3.1, the woman who
   takes a walk, sits inside this block as `ex-walk` with Figures 3.14 to
   3.18 and the commutative equation; the chapter's variables `A_mag`,
   `B`, `C`, `R` and the equation `eq-commutative` anchor at `ex-walk`.
3. `subtraction` **Vector subtraction** (book: the negative of a vector,
   Figure 3.19, the subtraction equation, Example 3.2 the woman sailing a
   boat as `ex-sail` with Figures 3.20 to 3.23). `eq-vector-subtraction`
   anchors at `subtraction`.
4. `scalar-multiplication` **Multiplication of vectors and scalars**
   (book: the three-times-as-far paragraph and the three rules).
5. `components` **Resolving a vector into components** (book: the two
   paragraphs on finding the parts of a displacement; the cross
   references to Projectile Motion, Dynamics and the analytical section
   stay plain text).
6. `paths` **The map of paths for the problems** (OmniStax: the figure
   problems 1 and 2 refer to, kept faithfully at the end of the text so
   that the problem card can point at it).

Learning objectives, the section summary and the glossary come out of the
running text into the views. The conceptual questions and the problems go
to the Exercises document.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| vector-in-two-dimensions | idea | vectors-2d | glossary (magnitude, direction, head, tail); the note Vectors in this Text; Figures 3.8, 3.9; CQ 1, 2, 3, 5 |
| resultant-vector | idea | head-to-tail | glossary (resultant, resultant vector); CQ 6, 8 |
| head-to-tail-method | skill | head-to-tail | glossary; the six steps and Figure 3.10; Example 3.1; problems 1, 5, 9 |
| vector-addition-commutative | result, eq-commutative | ex-walk | glossary (commutative); the discussion of Example 3.1 and Figure 3.18 |
| vector-subtraction | result, eq-vector-subtraction | subtraction | Figure 3.19; Example 3.2; problem 7 |
| scalar-multiplication | idea | scalar-multiplication | the passage and the summary; CQ 7 |
| resolving-vector | skill | components | the passage; problems 3 and 11 |

The 2.2 nodes `vector` and `scalar` are reinforced where the book prints
their glossary terms again, not redefined; `reference-frame` (2.1) is used
in the opening paragraph, `right-triangle-resultant` (3.1) in the
head-to-tail construction of the 9-and-5 walk, `vector-components` (3.1)
in the components passage, and `displacement` and `distance-traveled`
(2.1) in problem 1 and conceptual question 4.

## Figures

id · replaces · concepts · what moves · sliders · headline · graph · 3D

1. `demo-vector-2d` · replaces Figure 3.8 (the walk of 9 blocks east and
   5 blocks north drawn as one arrow) and Figure 3.9 (the ruler and
   protractor laid on it) · vector-in-two-dimensions · **still**: the
   idea is a picture of an arrow, and nothing in it has a time · a grid
   of city blocks, the displacement $\kD$ drawn as an arrow from the
   starting point, a ruler laid along the arrow with its ticks in blocks
   and a protractor arc at the tail reading the angle from the east-west
   axis; the compass rose beside it · magnitude $\kD$ in blocks (1.0 to
   12.0, step 0.1, default 10.3, position hue), direction θ in degrees
   (0 to 90, step 0.1, default 29.1, ink) · "D = 10.3 blocks at 29.1°
   north of east: the arrow is 10.3 units long on the ruler and the
   protractor reads 29.1°" · none · no. Readout: $\kD = 10.3\
   \text{blocks}$, $\theta = 29.1º$ north of east; small line: the
   arrow's length is proportional to the magnitude and its direction is
   the vector's direction, so the two numbers and the arrow say the same
   thing. Draws position.
2. `demo-head-to-tail` · replaces Figure 3.10 (a to c) and the step
   figures 3.11, 3.12 and 3.13 · head-to-tail-method, resultant-vector ·
   **moves**: a person walks the first leg east, then the second leg
   north from the head of the first, and only then is the resultant drawn
   from the tail of the first to the head of the last and measured with
   the ruler and the protractor; the steps of the book happen in the
   order the book lists them, and the walk has a time in it · blocks
   east (1 to 12, step 1, default 9, position hue), blocks north (0 to 8,
   step 1, default 5, position hue) · during the walk "step 1: 9 blocks
   east" and "step 2: 5 blocks north, tail at the head of the first";
   at the end "the resultant D is 10.3 blocks at 29.1° north of east,
   measured with a ruler and a protractor" · none · no. Finite, one
   construction per loop in about 5 real seconds, so it gets the
   scrubber. Readout: $\kD = \sqrt{9^2 + 5^2}\ \text{blocks} = 10.3\
   \text{blocks}$ at $\theta = 29.1º$; small line on the resultant being
   drawn from the tail of the first vector to the head of the last.
   Draws position.
3. `demo-walk` · replaces Figures 3.14, 3.15, 3.16 and 3.17 (Example 3.1:
   the three vectors drawn, laid head to tail, the resultant, the ruler
   and protractor) · head-to-tail-method, resultant-vector · **moves**:
   the woman walks the three legs in turn, each arrow laid down with its
   tail at the head of the one before, and the resultant is drawn and
   measured at the end · $\kA$ (5.0 to 40.0 m, step 0.5, default 25.0),
   $\kB$ (5.0 to 40.0 m, default 23.0), $\kC$ (5.0 to 40.0 m, default
   32.0), all position hue; the directions stay the book's 49.0° north
   of east, 15.0° north of east and 68.0° south of east, since the
   angles are what the next figure varies · "the resultant R is 50.8 m
   at 5.47° south of east" once the walk is done, and the leg being
   walked while it runs · none · no. Finite, so it gets the scrubber.
   Readout: $\kR = 50.8\ \text{m}$, $\theta = 5.47º$ south of east; small
   line: the method works for any number of vectors and is limited only
   by the precision of the drawing. Draws position.
4. `demo-order` · replaces Figure 3.18 (the same three vectors added as
   C, then A, then B) · vector-addition-commutative · **still**: the
   idea is that two constructions end at one point, and the comparison
   is a picture · the walk of Example 3.1 laid head to tail in the order
   A, B, C in muted ink and again in the chosen order in full ink, both
   from the same starting point, the resultant drawn once because it is
   the same arrow · the order (1 to 6, step 1, ink; 1 is A B C, 2 is A C
   B, 3 is B A C, 4 is B C A, 5 is C A B, 6 is C B A), and the three
   directions θ_A (−180 to 180, default 49.0), θ_B (default 15.0), θ_C
   (default −68.0), all ink · "added as C, then A, then B, the vectors
   end at the same point: R is 50.8 m at 5.47° south of east" · none ·
   no. Readout: $\mathbf{C} + \mathbf{A} + \mathbf{B} = \mathbf{A} +
   \mathbf{B} + \mathbf{C} = \mathbf{R}$, $\kR = 50.8\ \text{m}$; small
   line: vector addition is commutative, as 2 + 3 and 3 + 2 are. Draws
   position (the resultant's magnitude in the readout).
5. `demo-subtraction` · replaces Figure 3.19 (B and −B) and Figures 3.20
   to 3.23 (Example 3.2: A and B, −B, A + (−B) = R, A + B = R′) ·
   vector-subtraction · **still**: the picture answers its sliders; the
   two destinations, the dock and the place the sailor ends up, are
   compared side by side, which a walk through time would not show
   better · the first leg $\mathbf{A}$ from the starting point; from its
   head both $\mathbf{B}$ (to the dock) and $-\mathbf{B}$ (the mistaken
   leg, drawn dashed in the reverse direction), which is what Figure 3.19
   shows; the two resultants $\mathbf{R} = \mathbf{A} - \mathbf{B}$ and
   $\mathbf{R}' = \mathbf{A} + \mathbf{B}$ from the origin; the dock
   marked at the head of $\mathbf{R}'$ and a boat at the head of
   $\mathbf{R}$ · $\kA$ (5.0 to 40.0 m, default 27.5, position hue),
   θ_A (0 to 180, default 66.0, ink), $\kB$ (5.0 to 40.0 m, default
   30.0, position hue), θ_B (0 to 180, default 112.0, ink) · "A − B is
   22.6 m at 6.9° south of east, while the dock at A + B is 52.9 m at
   90.1° north of east" · none · no. Readout: $\mathbf{A} - \mathbf{B} =
   \mathbf{A} + (-\mathbf{B})$, $\kR = 22.6\ \text{m}$; small line: the dock
   and the place she reaches are 2B = 60.0 m apart. Draws position. The
   demo computes the difference exactly, 22.6 m at 6.9° south of east,
   where the book's drawing measured 23.0 m at 7.5°; the sum agrees with
   the book's 52.9 m at 90.1°, and the text keeps the book's numbers.
6. `demo-scalar` · new (the passage has no sketch) · scalar-multiplication
   · **still** · the vector $\mathbf{A}$ of the sailing example drawn from
   the origin and, beneath it from a second origin, $c\mathbf{A}$, the
   same direction when c is positive and the reverse when it is negative
   · $\kA$ (5.0 to 40.0 m, default 27.5, position hue), θ_A (0 to 180,
   default 66.0, ink), the scalar c (−3.0 to 3.0, step 0.5, default 3.0,
   ink) · "3 × 27.5 m = 82.5 m in the same direction, 66.0° north of
   east" or, for a negative c, "… in the opposite direction" · none ·
   no. Readout: $|c|\,\kA = 3.0 \times 27.5\ \text{m} = 82.5\ \text{m}$;
   small line: dividing by 2 is multiplying by 1/2. Draws position.
7. `demo-components` · new (the passage has no sketch) · resolving-vector
   · **still** · the total displacement of the walk in the city, 10.3
   blocks at 29.0° north of east, drawn on the grid of blocks with the
   two vectors that add to it, east and north, drawn head to tail beneath
   and beside it, each measured with a ruler in blocks; the finding of
   the parts is the inverse of the head-to-tail figure above · $\kD$ (1.0
   to 12.0 blocks, step 0.1, default 10.3, position hue), θ (0 to 90,
   step 0.1, default 29.0, ink) · "10.3 blocks at 29.0° north of east is
   9.0 blocks east and 5.0 blocks north" · none · no. Readout: the east
   component and the north component as measured lengths, $9.0\
   \text{blocks east}$ and $5.0\ \text{blocks north}$, written with the
   position macros; small line: the two components added head to tail
   give back the vector. Draws position.
8. `fig-paths` · the map of paths (the figure of problems 1 and 2, which
   3.3's problems 1 and 2 use too) · none · **still**, a faithful copy
   under rule 14: labelled Figure, no sliders, no motion · the grid of
   blocks 120 m on a side, the compass, the Start and the second start,
   and paths A, B, C and D told apart by their dash patterns, since the
   page colours only types · none · "all blocks are 120 m on a side" ·
   none · no. Draws nothing; the book's image is its original.

Photographs, one:

- Figure 3.7, the Hawaiian Islands map (credit: US Geological Survey):
  **drop**. It is the splash image at the head of the section, and no
  sentence of the text points at it. Not copied.

Figures that serve exercises: `fig-paths` above. The five diagrams inside
conceptual questions 4 and 5 and problems 4, 5 and 11 (the cabin and the
lake, the circle round San Francisco, the two-leg walks, the velocities
$\mathbf{v}_A$ and $\mathbf{v}_B$) are kept on the exercise cards as the
book's own images, copied into `media/ch03/`, so the reader sees exactly
what the problem is about; problems 4 and 10 are unkeyed and their images
travel with nothing, but they are copied since 3.3's problems reuse two of
them.

Extra simulations (rule 15): one considered, none built. A simulation
that lets the reader lay a fourth and fifth vector down and watch the
resultant keep up would show that the method is valid for any number of
vectors, but the three-leg walk and the order demo already show it for
three, and the sentence in the text says the rest. Nothing else opens a
view the eight figures do not give.

## Exercises

- No Check Your Understanding boxes; nothing inline.
- 8 conceptual questions, all open with AI-written suggested approaches:
  `cq1` (which quantities are vectors), `cq2` (an example of a vector),
  `cq3` (what vectors and scalars share), `cq4` (the two campers, with the
  book's figure on the card), `cq5` (the pilot and the circle, with the
  book's map on the card), `cq6` (two steps that return you to the start),
  `cq7` (why a scalar cannot be added to a vector), `cq8` (two steps of
  different sizes; three or more).
- 6 problems keyed and kept: `p1` (path A: distance traveled, magnitude
  and direction of the displacement; cites `paths`), `p3` (the hikers'
  north and east components, with the cabin figure), `p5` (12.0 m at 20°
  west of north then 20.0 m at 40.0° south of west, with the book's
  figure), `p7` (the two subtractions R′ = A − B and R″ = B − A), `p9`
  (the sum of the sailing example's vectors gives R′), `p11` (the
  components of $\mathbf{v}_{\text{tot}}$, with the velocities figure).
  Directions are part of the keyed answers, so a direction is a numeric
  part with its compass sense in the unit ("º east of north").
- 6 problems left out, having no answer in the book's key: 2
  (fs-id1165298474424, path B), 4 (fs-id1165298536705, 18.0 m west then
  25.0 m north), 6 (fs-id1165298849088, the reversed order), 8
  (fs-id1165296576869, three vectors in two orders), 10
  (fs-id1165298704732, the magnitudes of $\mathbf{v}_A$ and
  $\mathbf{v}_B$), 12 (fs-id1165296227129, components along rotated
  axes).
- AP items: the first (fs-id1398128, the ball launched vertically) is
  unkeyed and left out; the second (fs-id2061889, the 60° launch with the
  table of heights) is keyed but tests a projectile's vertical and
  horizontal velocity, which 3.4 introduces, so it is held for 3.4, which
  takes it with `source_section: "3.2"`. Both are named in
  `exercise_notes`.
- Nothing taken from another section; 3.3's problems 1 and 2 use the map
  of paths but test the analytical method and stay there.
- No generated questions. `vector-addition-commutative` has no keyed
  problem of its own (problems 6 and 8 test it and are unkeyed) and
  `scalar-multiplication` has only conceptual question 7; both are noted,
  none generated.
- Weights: `p1` gives `distance-traveled` weight 2 and
  `right-triangle-resultant` weight 2, since the problem is about the
  head-to-tail construction and merely counts the blocks and forms the
  right triangle; `p9` gives `vector-subtraction` weight 1, since it adds
  the sailing example's vectors and only compares with the subtraction;
  `cq7` gives `vector` weight 1.

## Views

- Formulas: `eq-commutative` (important, anchored at `ex-walk`) and
  `eq-vector-subtraction` (important, anchored at `subtraction`). Both
  already in `chapter.json`.
- Definitions: variables `D`, `A_mag`, `B`, `C`, `R`, `θ`; the ten
  glossary terms.
- Concept map: the seven nodes above, with `vector`, `scalar`,
  `reference-frame`, `displacement`, `distance-traveled`,
  `right-triangle-resultant` and `vector-components` reached through the
  coverage and the exercises.

## Colour

The page binds position only, from the seven demos whose sliders carry a
displacement magnitude ($\kD$, $\kA$, $\kB$, $\kC$) or whose readouts state
a resultant ($\kR$). Every angle, the scalar c and the order of addition
are untyped and in ink, as the chapter config says; the bold vectors
$\mathbf{A}$, $\mathbf{B}$, $\mathbf{R}$ of the equations stay in ink,
since only magnitudes and components colour. The velocity components of
problem 11 are typed velocity in the book's symbol table but appear only
in a prompt and its answer, so the page does not bind velocity. No new
hue, no new macro.

## Wanted at chapter level

- `variables[D]` (3.2) → anchor `3.2-vectors-2d`
- `variables[θ]` (3.2) → anchor `3.2-vectors-2d`
- `variables[A_mag]` (3.2) → anchor `3.2-ex-walk`
- `variables[B]` (3.2) → anchor `3.2-ex-walk`
- `variables[C]` (3.2) → anchor `3.2-ex-walk`
- `variables[R]` (3.2) → anchor `3.2-ex-walk`
- `equations[eq-commutative]` → anchor `3.2-ex-walk`
- `equations[eq-vector-subtraction]` → anchor `3.2-subtraction`
- `variables[D]` (3.2): the unit is `m` but the book's walk in the city
  measures $\kD$ in blocks (10.3 blocks); `blocks (or m)` would say what
  the section says. Not changed by this section.
