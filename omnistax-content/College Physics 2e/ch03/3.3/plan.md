# Plan: 3.3 Vector Addition and Subtraction: Analytical Methods (m42128)

Source: `source.md` (converted from CNXML). Book pages 131 to 137.
Status: built 2026-09-11 without a review stop, on Chen's instruction to
finish Chapters 2 and 3 in one job.

The section that turns the ruler and protractor of 3.2 into sines,
cosines and the Pythagorean theorem: ten sketch figures, one worked
example, one boxed note, thirty-one equations of which ten are on the
chapter sheet, no photographs, no Check Your Understanding boxes, no AP
items, four conceptual questions and twelve problems, six of them keyed.
The PhET note (Vector Addition) is dropped per the chapter config. It
stays one page (rule 11).

## Sub-concepts (page headers)

The book has three titled runs of text; the example's Discussion carries
the subtraction passage inside the example element in the CNXML, and it
gets a block of its own here, since it is an idea of its own with two
equations on the sheet and a figure. Page structure, one block per idea,
span ids as the chapter's anchors expect them:

1. `analytical` **Analytical methods** (book: the opening paragraph, the
   glossary term, why analytical methods are more concise, accurate and
   precise than a drawing).
2. `components` **Resolving a vector into perpendicular components**
   (book: Resolving a Vector into Perpendicular Components; Figure 3.24,
   the sum of the component vectors, 3 m + 4 m ≠ 5 m, $\kAx = \kA\cos\theta$
   and $\kAy = \kA\sin\theta$, Figure 3.25, the walk in the city as Figure
   3.26 with 10.3 blocks at 29.1º). Introduces
   `components-from-magnitude-angle`. The variables $A$, $A_x$, $A_y$ and
   $\theta$ and the equations eq-component-sum, eq-Ax, eq-Ay anchor here.
3. `resultant` **Calculating a resultant vector** (book: Calculating a
   Resultant Vector; $\kA = \sqrt{\kAx^2 + \kAy^2}$ and
   $\theta = \tan^{-1}(\kAy/\kAx)$, Figure 3.27, the 9 and 5 blocks, the
   boxed note Determining Vectors and Vector Components with Analytical
   Methods). Introduces `magnitude-direction-from-components`. The
   equations eq-A-magnitude and eq-A-direction anchor here.
4. `adding` **Adding vectors using analytical methods** (book: Adding
   Vectors Using Analytical Methods; Figure 3.28, the two legs of a walk,
   the four numbered steps with Figures 3.29 and 3.30, $\kRx = \kAx +
   \kBx$, $\kRy = \kAy + \kBy$, $\kR = \sqrt{\kRx^2 + \kRy^2}$,
   $\theta = \tan^{-1}(\kRy/\kRx)$). Introduces
   `analytical-vector-addition`. The variables $B$, $B_x$, $B_y$, $R$,
   $R_x$, $R_y$, $\theta_A$, $\theta_B$ and the equations eq-Rx, eq-Ry,
   eq-R-magnitude, eq-R-direction anchor here. The four steps are kept as
   the book's numbered steps, each a paragraph headed "Step 1." as the
   book prints them (an ordered list doubled the numbers).
5. `ex-walk` Example 3.3 · Adding Vectors Using Analytical Methods (the
   walk of 53.0 m at 20.0º and 34.0 m at 63.0º, Figures 3.31 and 3.32),
   inside `adding` as a `div.example`, with the Discussion up to "it is
   just the addition of a negative vector".
6. `subtraction` **Subtracting vectors using analytical methods** (book:
   the subtraction passage the CNXML keeps inside the example,
   $\mathbf{A} - \mathbf{B} \equiv \mathbf{A} + (-\mathbf{B})$, the
   components of $-\mathbf{B}$, $\kRx = \kAx + (-\kBx)$ and
   $\kRy = \kAy + (-\kBy)$, Figure 3.33, then the closing paragraph on
   perpendicular components and the next module). Reinforces
   `analytical-vector-addition`, which folds subtraction in; uses
   `vector-subtraction`. The equation eq-Rx-subtraction anchors here.
   Figure 3.33 is drawn beside the passage that refers to it, before the
   closing paragraph, where the book prints it after.
7. `paths` **Paths for the problems**: the map of the city that problems 1
   and 2 refer to, a figure that serves exercises. (Removed in the chapter
   pass: the map is 3.2's figure, built once there, and problem 1's card
   carries the book's image, so the page does not keep the figure twice.)

The cross-references to Kinematics in Two Dimensions: An Introduction,
Vector Addition and Subtraction: Graphical Methods and Projectile Motion
stay plain text. "Figure 3.29", "Figure 3.30", "Figure 3.31" and "Figure
3.32" in the steps and the example stay the book's wording, and since the
fold pass (2026-09-11) each of them links to `demo-add`, the one demo that
stands for the run: its row carries 3.28 as its number and 3.29 to 3.32
under `folds`, and its eyebrow reads them all.

Learning objectives, section summary and glossary come out of the running
text into the views. The conceptual questions and the problems go to the
Exercises document.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| components-from-magnitude-angle | result, eq-Ax | components | the boxed note; Figures 3.25 and 3.26; CQ 2, 3, 4; problems 3 and 9 |
| magnitude-direction-from-components | result, eq-A-magnitude | resultant | the boxed note; Figure 3.27; the last two steps of Example 3.3; problems 1, 4, 5 and 11 |
| analytical-vector-addition | skill, eq-Rx | adding | glossary term; the four steps; Example 3.3; problems 1, 4, 5, 7, 9 and 11 |

Subtraction is folded into `analytical-vector-addition` (the chapter
preparation's decision): the `subtraction` span reinforces it and uses
3.2's `vector-subtraction`. The section also uses 3.1's
`right-triangle-resultant` and `vector-components`, 3.2's
`vector-in-two-dimensions`, `resolving-vector`, `resultant-vector` and
`vector-addition-commutative`, and 2.2's `coordinate-system` (Step 1).

## Figures

id · replaces · concepts · what moves · sliders · headline · graph · 3D

1. `demo-components` · replaces Figures 3.24, 3.25 and 3.26 (one run: the
   vector with its components, the components as $A\cos\theta$ and
   $A\sin\theta$, the walk in the city with the numbers) ·
   components-from-magnitude-angle · **still**: the picture answers its
   sliders and nothing else, there is no time in a vector's components ·
   the vector $\mathbf{A}$ drawn from the origin of an $x$, $y$ frame with
   a compass rose, its component vectors $\mathbf{A}_x$ along the axis and
   $\mathbf{A}_y$ standing on its head, dashed as the book draws them,
   the right angle marked, the angle arc, and the two component equations
   written with the live numbers beside the drawing · $\kA$ (0.5 to 12.0
   blocks, step 0.1, default 10.3, position hue), $\theta$ (−180º to 180º,
   step 0.1, default 29.1, ink; the step is 0.1 so the default is not snapped away, as pass 19 found) · "A = 10.3 blocks at 29.1º has the
   components Ax = 9.0 blocks and Ay = 5.0 blocks" · none · no. Readout:
   $\kAx = \kA\cos\theta = (10.3\ \text{blocks})(\cos 29.1º) = 9.0\
   \text{blocks}$ and the same for $\kAy$ on one line; small line: the
   component vectors add to $\mathbf{A}$, but their magnitudes do not,
   9.0 + 5.0 is not 10.3. The angle runs the whole circle so that a
   component can come out negative. Draws position.
2. `demo-resultant` · replaces Figure 3.27 · magnitude-direction-from-
   components · **still**, for the same reason · the two components laid
   head to tail from the origin and the vector they add to, with the right
   angle marked and the angle arc; the direction is also said as a
   compass direction, as the problems ask for it · $\kAx$ (−12.0 to 12.0
   blocks, step 0.5, default 9.0, position hue), $\kAy$ (−12.0 to 12.0,
   step 0.5, default 5.0, position hue) · "Ax = 9.0 blocks and Ay = 5.0
   blocks add to A = 10.3 blocks at 29.1º, which is 29.1º north of east" ·
   none · no. Readout: $\kA = \sqrt{\kAx^2 + \kAy^2} = \sqrt{9.0^2 + 5.0^2}
   = 10.3\ \text{blocks}$ and $\theta = \tan^{-1}(\kAy/\kAx) =
   \tan^{-1}(5.0/9.0) = 29.1º$; when $\kAx$ is negative the small line
   says that the inverse tangent gives the angle of the line and the arrow
   points the other way along it, so the compass direction is the one to
   read off the drawing. Draws position.
3. `demo-add` · replaces Figures 3.28, 3.29, 3.30, 3.31 and 3.32 (one
   run: the two legs and the resultant, the components of each, the
   components summed, and the example's figure with and without its
   numbers) · analytical-vector-addition, components-from-magnitude-angle,
   magnitude-direction-from-components · **still** · the legs
   $\mathbf{A}$ and $\mathbf{B}$ head to tail from the origin, the
   resultant $\mathbf{R}$ from the origin to the head of $\mathbf{B}$, the
   components of each leg dashed head to tail on rows below the drawing
   and on columns to its left, and the components of the resultant as
   solid ink arrows on a further row and column, as Figure 3.32 draws
   them, so that a leg pointing back along an axis never draws over the
   other; the scale follows the sliders so the whole walk stays in the
   frame · $\kA$ (5 to 80 m, step 0.5, default 53.0, position), $\theta_A$
   (−180º to 180º, step 0.5, default 20.0, ink), $\kB$ (5 to 80 m, step
   0.5, default 34.0, position), $\theta_B$ (−180º to 180º, step 0.5,
   default 63.0, ink) · "A = 53.0 m at 20.0º and B = 34.0 m at 63.0º add
   to R = 81.2 m at 36.6º, which is 36.6º north of east" · none · no.
   Readout, two lines of one aligned equation, the four steps with the
   live numbers: $\kRx = \kAx + \kBx = 49.8 + 15.4 = 65.2\ \text{m}$,
   $\kRy = \kAy + \kBy = 18.1 + 30.3 = 48.4\ \text{m}$; $\kR =
   \sqrt{\kRx^2 + \kRy^2} = 81.2\ \text{m}$, $\theta = \tan^{-1}(\kRy/\kRx)
   = 36.6º$. The example's numbers are the defaults, so the figure
   reproduces Example 3.3 on load and is placed before the four steps,
   where the book prints Figure 3.28; the example follows with its own
   numbers on the page. Draws position.
4. `demo-subtract` · replaces Figure 3.33 · analytical-vector-addition,
   vector-subtraction · **still** · the same drawing with $-\mathbf{B}$
   in place of $\mathbf{B}$, the leg $\mathbf{B}$ itself as a muted ghost
   from the head of $\mathbf{A}$ so that the reversal is seen, the
   components of $-\mathbf{B}$ dashed along the axes and pointing the
   other way · the same four sliders with the same defaults, since Figure
   3.33 is the subtraction of the vectors of Figure 3.28 · "A − B = R is
   36.5 m at −19.5º, which is 19.5º south of east" · none · no. Readout:
   $\kRx = \kAx + (-\kBx) = 49.8 + (-15.4) = 34.4\ \text{m}$,
   $\kRy = \kAy + (-\kBy) = 18.1 + (-30.3) = -12.2\ \text{m}$; $\kR =
   36.5\ \text{m}$, $\theta = -19.5º$. Draws position.
5. `fig-paths` · Figure (unnumbered, inside problem 1) · the map of the
   city with paths A to D, blocks 120 m on a side · a figure that serves
   exercises, copied over as it is: the book's image
   `Figure_03_02_20a-b5e9.jpg`, shared with 3.2's problems 1 and 2, with
   the book's caption · no sliders, no motion · kind `figure`, drawn as
   a photograph is · draws nothing. Removed in the chapter pass: the same
   book figure is not kept twice, 3.2 builds it as its faithful copy, and
   problem 1's card here carries the image, so the reader of the problem
   still sees the map; `p1` cites `adding` instead of the removed span.

Photographs: none in the section.

Figures that serve exercises, on the cards: problem 1 carries the map as
well, so that the practice desk shows it; problem 3 carries the map of
northern California (`Figure_03_02_19a.jpg`) and problems 4 and 5 the two
legs $\mathbf{A}$ west and $\mathbf{B}$ north (`Figure_03_02_21a.jpg`)
with the book's caption. The figures of problems 8, 10 and 12 go with
problems that have no key and are not copied.

Every demo is a still picture: the section's ideas are relations between
lengths and angles with no time in them, so none registers a cycle and
none gets a transport, and each redraws when a slider moves. Figures
3.24 to 3.26 are one drawing at three stages and Figures 3.28 to 3.32
one drawing at five, so two demos stand for eight sketches, each carrying
the first number of its run as its `number`, the rest under `folds`, and
every image among its originals, as root rule 14 allows. The eyebrows
read "Figure 3.24 + 3.25 + 3.26" and "Figure 3.28 + 3.29 + 3.30 + 3.31 +
3.32".

Extra simulations (rule 15), thought about and left:
- A walk animated along the legs and then along the resultant, an
  odometer counting the path against the straight-line distance. It only
  animates what `demo-add` already shows, and 3.2's walk figures carry
  the head-to-tail picture. Left.
- A vector held fixed while the axes rotate, showing that the components
  change and the magnitude does not (problem 9(b)). A genuine view the
  text does not give, but it belongs to 3.2's `resolving-vector` and one
  problem here; left, and named for a later pass.
- A sum of many legs (Gilligan's seven) with a running total of the
  components. The two-leg demo already shows that components along one
  axis add like numbers; a seventh slider adds nothing to the idea. Left.

## Exercises

- No Check Your Understanding boxes and no AP items in the section, and
  nothing in 3.1, 3.2, 3.4 or 3.5 belongs here: 3.2's problems say "use
  graphical methods" and stay with the head-to-tail method, and every
  velocity problem of 3.5 tests `velocity-addition`.
- 4 conceptual questions, all Understand, with AI-written suggested
  approaches: `cq1` (the greatest and smallest resultant, citing
  `adding`), `cq2` (a nonzero vector with a zero component), `cq3` (why
  no component exceeds the magnitude), `cq4` (perpendicular vectors and
  each other's components), the last three citing `components`. Per the
  chapter config none goes inline.
- 6 problems keyed and kept: `p1` (path C, two parts: 1.56 km and 120 m
  east, with the map on the card), `p3` (San Francisco to Sacramento, the
  north and east components, 87.0 km each), `p4` (18.0 m west then 25.0 m
  north: 30.8 m at 35.8º west of north; the key the book prints under
  problem 5, which asks for the same sum in the other order and says the
  result is the same, and the answer is the magnitude and direction only,
  not the discussion), `p5` (the legs reversed, the same key), `p7` (the
  second leg reversed, 30.8 m at 54.2º south of west, then 30.8 m at
  54.2º north of east), `p9` (32.0 km at 35.0º south of west: 18.4 km
  south then 26.2 km west, then 31.5 km and 5.56 km along axes rotated
  45º), `p11` (Gilligan's raft, 7.34 km at 63.5º south of east).
- 6 problems left out, having no answer in the book's key: 2
  (fs-id1876099, path D), 6 (fs-id1862376, 7.50 km at 15º east of north),
  8 (fs-id1956316, the triangular piece of land), 10 (eip-379, the
  four-sided plot), 12 (fs-id1955218, the pilot's flight). The keys give
  a magnitude and a compass direction, so the magnitude is the number
  checked and the direction is in the solution to compare with.
- No generated questions: every node has a book exercise.
- Weights: `p1` also asks for the distance traveled, which is 2.1's
  `distance-traveled`, at weight 1; `p5` turns on
  `vector-addition-commutative` and `p7` on `vector-subtraction`, both
  at full value since the problems are about them; `p4` uses
  `right-triangle-resultant` at weight 1, since the analytical method is
  what the problem asks to show.

## Views

- Formulas: eq-Ax, eq-Ay, eq-A-magnitude, eq-A-direction, eq-Rx, eq-Ry
  (important); eq-component-sum, eq-R-magnitude, eq-R-direction,
  eq-Rx-subtraction (not). All already in `chapter.json`.
- Definitions: variables $A$, $A_x$, $A_y$, $B$, $B_x$, $B_y$, $R$, $R_x$,
  $R_y$, $\theta$, $\theta_A$, $\theta_B$; the glossary term analytical
  method.
- Concept map: the three nodes above, with the 3.1, 3.2 and 2.2 nodes
  they rest on.

## Colour

The page binds position, from the four demos whose sliders carry a
magnitude or a component of a displacement and whose readouts write
$\kA$, $\kAx$, $\kAy$, $\kB$, $\kBx$, $\kBy$, $\kR$, $\kRx$, $\kRy$. The
angles $\theta$, $\theta_A$, $\theta_B$ are untyped and in ink, as the
chapter config says, and the bold vectors $\mathbf{A}$, $\mathbf{B}$,
$\mathbf{R}$ of the vector equations stay in ink; only magnitudes and
components colour. The one wrinkle is that the book's Figure 3.33 draws
$\mathbf{A}$ red and $\mathbf{B}$ blue to tell the legs apart; here both
legs are the position hue and are told apart by their labels and by the
ghost of $\mathbf{B}$, since a hue per vector would be a hue per symbol
rather than per type (rule 7). No new hue, no new macro.

## Wanted at chapter level

- variables A_mag → 3.3-components
- variables A_x → 3.3-components
- variables A_y → 3.3-components
- variables θ → 3.3-components
- variables B → 3.3-adding
- variables B_x → 3.3-adding
- variables B_y → 3.3-adding
- variables R → 3.3-adding
- variables R_x → 3.3-adding
- variables R_y → 3.3-adding
- variables θ_A → 3.3-adding
- variables θ_B → 3.3-adding
- equations eq-component-sum → 3.3-components
- equations eq-Ax → 3.3-components
- equations eq-Ay → 3.3-components
- equations eq-A-magnitude → 3.3-resultant
- equations eq-A-direction → 3.3-resultant
- equations eq-Rx → 3.3-adding
- equations eq-Ry → 3.3-adding
- equations eq-R-magnitude → 3.3-adding
- equations eq-R-direction → 3.3-adding
- equations eq-Rx-subtraction → 3.3-subtraction
- concepts components-from-magnitude-angle: the evidence names "problems 3, 6 and 9"; problem 6 is unkeyed and left out, so "problems 3 and 9" is what the page carries.
- concepts analytical-vector-addition: the evidence names "problems 1, 5, 7, 9 and 11"; problem 4 is kept as well (the key under problem 5 answers it), so "problems 1, 4, 5, 7, 9 and 11".
- exploration: an extra simulation worth a later pass, a vector held fixed while the axes rotate under it, for 3.2's `resolving-vector` and problem 9(b) here.

Decided in the chapter pass (2026-09-11): the twenty-two anchors above are
written into `chapter.json`, and the two evidence lines are changed in
`book.json` as asked, so that each names the problems the page carries.
The paths figure is not kept on this page, as the figure list now says.
The rotating-axes simulation stays a note for a later pass.
