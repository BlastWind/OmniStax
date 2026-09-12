# Plan: 5.3 Elasticity: Stress and Strain (m42081)

Source: `source.md` (converted from CNXML), read beside the module itself,
since the converter flattened Table 5.3. Status: built 2026-09-11 without a
review stop, on Chen's instruction to finish the book in one job; the plan
is left for review after.

The section that turns from forces that change the motion of a body to
forces that change its shape. Seven sketch figures and one photograph, five
boxed notes (Hooke's Law, Stretch Yourself a Little, Stress, Strain and
Shear Deformation), four worked examples, one table, eight conceptual
questions and seventeen problems, nine of them keyed. The PhET note
("Masses & Springs") is dropped per the chapter config. One page (rule 11).

## Sub-concepts (page headers)

The book gives three named headers of its own and runs the rest of the
argument untitled. Those three are kept in the book's words as `<h2>`, as
2.5 and 16.3 kept theirs; the untitled runs get headers written for them.

1. `deformation` **Deformation and Hooke's law** (book: the bulldozer and
   the car, the definition of a deformation, the two characteristics of a
   small deformation, $\kF = \kk\kdL$ and $\kdL = \kF/\kk$, the graph of
   deformation against force and tensile strength, the boxed Hooke's Law
   note, Figure 5.11). The variables $\kF$, $\kdL$ and $\kk$ and the
   equations eq-hooke-dl and eq-dl-from-k anchor here.
2. `k-depends` **What the proportionality constant depends on** (book: the
   nylon and steel guitar strings, the 0.1% rule, Figure 5.12, the boxed
   Stretch Yourself a Little note, the sentence that names the three
   deformations to come).
3. `length` **Changes in Length—Tension and Compression: Elastic Modulus**
   (the book's own header: Figure 5.13, $\kdL = \frac{1}{\kY}\frac{\kF}{A}\kLo$,
   Table 5.3, the note that liquids and gases have no Young's modulus and
   that two forces act, Example 5.3 with the gondolas photograph). $\kLo$,
   $\kY$, $A$ and eq-delta-L anchor here; the example is `ex-cable`.
4. `tissues` **Bones, tendons and the elasticity of the body** (book: what
   bones carry, the tendon and its stress-strain curve, Figure 5.15, the
   arteries, the lungs and the skin, Example 5.4). The example is
   `ex-femur`; $m$ and $r$ anchor here, since the femur example is where
   the section first works from a mass and a radius.
5. `stress-strain` **Stress and strain** (book: the rearrangement
   $\frac{\kF}{A} = \kY\frac{\kdL}{\kLo}$, the definitions of stress and of
   strain, $\text{stress} = \kY \times \text{strain}$, $\kF = \kY A
   \frac{\kdL}{\kLo}$, the force constant $\kk = \kY A/\kLo$, the boxed
   Stress and Strain notes). eq-stress-strain-form, eq-stress-strain,
   eq-F-YA and eq-k-rod anchor here.
6. `shear` **Sideways Stress: Shear Modulus** (the book's own header:
   $\kdx = \frac{1}{\kS}\frac{\kF}{A}\kLo$, the boxed Shear Deformation
   note, Figure 5.16, the patterns in the shear moduli, the spinal column,
   concrete and brick, Example 5.5 with Figure 5.17). $\kdx$, $\kS$,
   eq-shear and eq-shear-F anchor here; the example is `ex-nail`.
7. `bulk` **Changes in Volume: Bulk Modulus** (the book's own header:
   what compresses easily and what does not, Figure 5.18, $\Delta V =
   \frac{1}{\kBb}\frac{\kF}{A}V_0$, the diamonds and the deep ocean,
   Example 5.6, water freezing, torsion). $\Delta V$, $V_0$, $\kBb$ and
   eq-bulk anchor here; the example is `ex-water`.

Cross references are the book's own wording. "Figure 5.11" and the rest
are linked by the build from the figure rows; "Table 5.3" is the table in
the text; "Example 5.5" is the nail example the caption of Figure 5.17
points at. The tightrope walker of problem 15 keeps the book's wording for
the section it names ("Normal, Tension, and Other Examples of Forces"),
which is plain text while Chapter 4 is unbuilt. The weight $w$ of the
guitar strings and of the picture is Chapter 4's symbol row.

Learning objectives, the section summary and the glossary come out of the
running text into the tables and the views. The chapter has no Check Your
Understanding boxes, so nothing is inline; the conceptual questions and the
problems go to the Exercises document.

## Table

Table 5.3 Elastic Moduli is built by hand as a `div.book-table`, since the
converter flattens a table that sits inside a `<para>` and no `[TABLE]`
block reached `source.md`. Its twenty-four rows and three columns are read
off the module itself and agree with the reproduction in
`ch05/exploration.md`; the blank cells are blank in the book. The book
prints a footnote on the title, "Approximate and average values. Young's
moduli $\kY$ for tension and compression sometimes differ but are averaged
here. Bone has significantly different Young's moduli for tension and
compression," which is kept under the title in the table's caption block,
where the CNXML hangs it.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| deformation | idea | deformation | the bulldozer and the car; the glossary; the conceptual questions on the time of day and on the spider's web |
| elastic-limit | idea | deformation | Figure 5.11 and its regions; the glossary entry for tensile strength; the tendon's failure region |
| youngs-modulus | result, eq-delta-L | length | Table 5.3; Figure 5.12; Examples 5.3 and 5.4; problems 1, 3, 5, 7 and 15 |
| stress | idea | stress-strain | the boxed definition; the tendon curve; Example 5.6 and problem 13 |
| strain | idea | stress-strain | the boxed definition; the tendon's 10%; Example 5.6 |
| stress-strain | result, eq-stress-strain | stress-strain | the boxed Strain note; the force constant $\kk = \kY A/\kLo$ |
| shear-deformation | result, eq-shear | shear | Figure 5.16; Example 5.5; problems 9 and 11 |
| bulk-deformation | result, eq-bulk | bulk | Figure 5.18; Example 5.6; problem 13 |

`hookes-law` and `force-constant` stand under 16.1, where Chapter 16 built
them, and a chapter may not claim another chapter's node, so this section
writes `reinforces` rows for both: the law is stated here first, as
$\kF = \kk\kdL$, and the constant is derived here as $\kk = \kY A/\kLo$.
The section also uses `force` (4.1). The report asks the chapter pass to
weigh moving both nodes to 5.3, as `ch05/exploration.md` proposes.

## Figures

id · replaces · concepts · what moves or still · sliders · headline ·
graph · 3D

1. `sim-hooke-graph` · replaces Figure 5.11 (deformation against applied
   force) · deformation, elastic-limit, hookes-law · **still**: the idea has
   no time in it, only a force that is either applied or not, so the figure
   answers its sliders and registers no cycle and no transport · the applied
   force $\kF$ (0 to 600 N, default 90, force), the force constant $\kk$
   (50 to 400 N/m, default 150, stiffness), the force at which the straight
   segment ends (40 to 300 N, default 120, force, since a metal or a spring
   has a long straight segment and a bone a short one) · "F = 90 N · the
   spring has stretched 0.600 m, and the graph is still on its straight
   segment, where Hooke's law holds" · the graph is the figure, with a
   spring stretched on a strip above it so that the reader sees what the
   graph measures, and drawn broken once the fracture force is passed · no.
   Readout: $\kdL = \kF/\kk$ with the numbers; small line on the slope
   $1/\kk$ of the straight segment. Draws force, position, stiffness.
2. `sim-strings` · replaces Figure 5.12 (the three guitar strings) ·
   youngs-modulus, force-constant · **still**: one weight is hung and the
   three strings stretch by three different amounts, which answers the
   sliders and nothing else · the weight $w$ (2 to 40 N, default 20, force)
   and the common length $\kLo$ (0.20 to 1.20 m, default 0.65, position) ·
   "a 20 N weight stretches the thin nylon string 3.31 mm, the thicker
   nylon string 0.83 mm and the steel string 0.08 mm" · a vertical scene, so the
   graph goes beside it: the change in length against the weight, one line
   for each string, the current weight marked on all three · no. Readout:
   $\kdL = \frac{1}{\kY}\frac{\kF}{A}\kLo$ for the thin nylon string; small
   line on why the thicker string and the steel one stretch less. Draws
   force, position, elastic-modulus.
3. `sim-rod` · replaces Figure 5.13 (a) and (b) (a rod in tension and the
   same rod in compression) · youngs-modulus · **still**: the rod holds
   whatever deformation the force gives it · the force $\kF$ (0 to 5,000 N,
   default 1,500, force), the original length $\kLo$ (0.20 to 3.00 m,
   default 1.00, position), the radius $r$ (0.5 to 5.0 cm, default 1.0,
   ink) and Young's modulus $\kY$ (1 to 210 in units of $10^9\ \text{N/m}^2$,
   default 70, elastic-modulus) · "F = 1500 N · a 1.00 m aluminum rod
   1.0 cm in radius stretches 0.068 mm in tension and is compressed by the
   same amount" · graph beside the two vertical rods: the change in length
   against the force, with the line for the modulus set and faint lines for
   steel, aluminum, bone in compression and nylon from Table 5.3 · no.
   Readout: $\kdL = \frac{1}{\kY}\frac{\kF}{A}\kLo$ with the numbers.
   Draws force, position, elastic-modulus.
4. `fig-gondolas` · Figure 5.14, the photograph of the gondolas at Gala
   Yuzawa · **kept**, because Example 5.3 points the reader at it ("See
   Figure 5.14") and it shows the cable the example is about. The book's
   caption and its credit clause are kept, and the image sits at the 200
   book pixels the CNXML gives it.
5. `sim-tendon` · replaces Figure 5.15 (the tendon's stress-strain curve) ·
   stress, strain, elastic-limit · **still**: the curve is a property of the
   tendon, and the slider walks along it rather than running a clock · the
   strain (0 to 0.100, default 0.040, ink, since a strain is a ratio and
   stays in ink) and the tendon's original length $\kLo$ (5 to 40 cm,
   default 20, position) · "at a strain of 0.040 the tendon carries a stress
   of 30.0 MN/m², and the slope of the curve there is 1.0 × 10⁹ N/m²" · the graph is the figure, with the tendon drawn
   stretching on a strip above it · no. The three regions the book names
   are shaded and labelled, and the slope in the linear region is the
   $\kY = 1 \times 10^9\ \text{N/m}^2$ that Table 5.3 gives for tendon, so
   no number is invented, and the tangent drawn at the point is the
   modulus there. Readout: the stress and the strain with their numbers;
   small line on what the strain amounts to in millimetres and on where
   $\text{stress} = \kY \times \text{strain}$ holds. Draws stress, position,
   elastic-modulus.
6. `sim-shear` · replaces Figure 5.16 (the sheared bookcase) ·
   shear-deformation · **still**: the bookcase leans as far as the force
   takes it and stays there · the shearing force $\kF$ (0 to 2,000 N,
   default 800, force), the height $\kLo$ (0.30 to 2.50 m, default 1.80,
   position), the cross-sectional area $A$ (0.05 to 1.00 m², default 0.30,
   ink) and the shear modulus $\kS$ (1 to 80 in units of $10^9\
   \text{N/m}^2$, default 10, elastic-modulus) · "F = 800 N · a hardwood
   bookcase 1.80 m tall shears sideways by 0.48 µm" · graph beside the
   vertical scene: the deformation against the shear modulus, the materials
   of Table 5.3 marked along it, so the reader sees the 1/S fall and where
   bone and steel sit · no. Readout: $\kdx = \frac{1}{\kS}\frac{\kF}{A}\kLo$
   with the numbers. Draws force, position, elastic-modulus.
7. `sim-nail` · replaces Figure 5.17 (the nail bent by the picture) ·
   shear-deformation · **still**: the picture hangs and the nail holds its
   flex · the mass of the picture $m$ (0.5 to 20.0 kg, default 5.2, ink),
   the radius of the nail $r$ (0.25 to 2.00 mm, default 0.750, ink) and the
   length of nail outside the wall $\kLo$ (2.0 to 20.0 mm, default 5.00,
   position); the shear modulus is steel's, 80 × 10⁹ N/m², as Example 5.5
   takes it · "a 5.2 kg picture weighs 51 N and bends the nail 1.80 µm,
   which is far too small to see" · none: the scene is the figure, with the
   flex drawn much larger than it is, as the book draws it, and the
   magnification stated · no. Readout: $\kF = \frac{\kS A}{\kLo}\kdx$ with
   the numbers; small line on the mass the weight comes from. Draws force,
   position.
8. `sim-cube` · replaces Figure 5.18 (the cube compressed on every face) ·
   bulk-deformation, stress · **still**: the cube is squeezed and stays
   squeezed · the force per unit area $\kF/A$ (0 to $1.0 \times 10^8\
   \text{N/m}^2$, default $5.0 \times 10^7$, stress, which is the quantity
   the book applies "evenly" on every surface), the original volume $V_0$
   (0.1 to 10.0 L, default 1.0, ink) and the bulk modulus $B$ (0.7 to 130
   in units of $10^9\ \text{N/m}^2$, default 2.2, elastic-modulus, water's
   value) · "a force per unit area of 5.0 × 10⁷ N/m², which is the pressure
   5.00 km down, compresses water by 2.3% of its volume" · graph beside the
   scene: the fractional change in volume against the force per unit area,
   one line for each of the five liquids Table 5.3 lists, the current point
   marked · no. Readout: $\frac{\Delta V}{V_0} = \frac{1}{\kBb}\frac{\kF}{A}$
   with the numbers. Draws stress, elastic-modulus, position.

Every sketch figure of the section is replaced and the one photograph is
kept, so there is no Sim on this page: every figure carries a book number.
The three deformations stay three figures rather than one fold, as the
chapter config decided: they are three equations with three different
moduli, and folding them would hide that. They share one layout, the scene
on the left and the graph on the right, so that the reader sees that the
three say the same thing. Figures 5.11 and 5.15 are both graphs and are
not folded either: one is the deformation of a bone against the force on
it, the other the stress a tendon carries against its strain, and the
second is not linear.

The telephone pole of problem 16 (Figure_06_03_10a.jpg) belongs to an
unkeyed problem that is left out, so the figure is left out with it, and
the graph of radius against fall time in the answer to the Critical
Thinking item travels with that item to 5.2.

Extra simulations (rule 15), considered and left:

- Two rubber bands in parallel and two in series, which is the question the
  Stretch Yourself a Little note asks. It would open a view the text does
  not give, but the book leaves the question for the reader to answer at
  home, and a figure that answers it takes the experiment away. Left.
- The springs-in-parallel model of a tendon that the text names ("A simple
  model of this relationship can be illustrated by springs in parallel:
  different springs are activated at different lengths of stretch"). The
  text says the examples are in the problems, and none of this section's
  problems is that one, so anything drawn would be invented. Left.
- A rod of every material in Table 5.3 under the same force, side by side.
  `sim-rod` already carries the table's materials on its graph and
  `sim-strings` already makes the comparison the text makes. Left.

None built.

## Exercises

- No Check Your Understanding boxes; nothing inline.
- 7 conceptual questions kept, `cq1`, `cq2`, `cq4`, `cq5`, `cq6`, `cq7` and
  `cq8`, numbered as the book prints them, all Understand except `cq8`
  (Analyze), none keyed, each with an AI-written suggested approach and a
  `cite` to the passage it turns on.
- 1 conceptual question left to 5.1: the third, on the soles of shoes
  (`fs-id1165296252981`), asks why the bottom surfaces are designed as they
  are and what dry and wet conditions do, which is the coefficient of
  friction of 5.1 and nothing this section introduces. Rule 12 sets it with
  the section that introduces what it tests, so it is left out here, named
  in `exercise_notes`, and wanted at chapter level.
- 8 problems keyed and kept: `p1` (the trapeze artist's femurs, number),
  `p3` (the pencil lead, number for (a) with (b) in the solution), `p5`
  (the mountain climber's nylon rope, number for (a) with (b) in the
  solution), `p7` (the drill pipe, number), `p9` (the vertebra, number),
  `p11` (the pencil eraser, multi), `p13` (the bottle of grape juice,
  number), `p15` (the tightrope walker's wire, number).
- 8 problems left out, having no answer in the book's key: 2
  (`fs-id1165298595705`, the wrestler's arm bone), 4 (`fs-id1165298941254`,
  the TV antenna), 6 (`fs-id1165298937277`, the flagpole), 8
  (`fs-id1165298786214`, the piano wire), 10 (`fs-id1165298797862`, the
  disc between vertebrae), 12 (`fs-id1165298783085`, the traffic-light
  pole), 14 (`fs-id1165298913397`, freezing water) and 16
  (`fs-id1165296233210`, the telephone pole, with its figure).
- 1 problem set with 5.2: the Critical Thinking item on two beads falling
  at constant speed through a fluid (`exer-86622`) turns on the drag force
  and terminal velocity, which 5.2 introduces, so rule 12 places it there
  with `source_section` "5.3". It is left out here and named in
  `exercise_notes`; the chapter config decided this and 5.2's notes say so.
- No AP test prep in this section, and none held from another: only 5.1
  carries AP items and all four test friction.
- No generated questions: every node of the section has a book exercise.
- Weights: `p1`, `p3`, `p5`, `p7` and `p15` turn on the change in length
  alone and carry no second concept, and `p9` on the shear deformation
  alone; `p11` shears the pencil in part (a) and compresses it lengthwise
  in part (b), so `shear-deformation` and `youngs-modulus` both take their
  full value; `p13` and `cq8` give `bulk-deformation` full value and
  `stress` weight 2, since the answer is a force per unit area; `cq1`
  gives `deformation` full value and `elastic-limit` weight 1; `cq4` and
  `cq5` give `youngs-modulus` weight 2 beside the concept they are really
  about; `cq6` gives `stress` weight 2 beside `shear-deformation`.

## Views

- Formulas: the ten equations of the section already in `chapter.json`, the
  boxed and named ones important and the rearrangements not.
- Definitions: the fourteen variables of the section; the six glossary
  terms (deformation, Hooke's law, tensile strength, stress, strain, shear
  deformation).
- Concept map: the eight nodes above with their edges into 4.1 and 16.1.

## Colour

The page binds force, position, stiffness, stress and elastic-modulus.
Every figure but the tendon carries a force or a force per unit area, five
of them bracket a length or a change in length in the position hue,
`sim-hooke-graph` carries the force constant $\kk$ on a slider and states
it in its readout, `sim-tendon` and `sim-cube` plot and drag a stress, and
four figures carry a modulus $\kY$, $\kS$ or $\kBb$ on a slider and colour
the values Table 5.3 gives. The strain, the cross-sectional area $A$, the
radius $r$, the volume $V_0$ and $\Delta V$, and the mass $m$ stay untyped
and in ink, as the chapter config says.

## Wanted at chapter level

- variables `F` → 5.3-deformation
- variables `ΔL` → 5.3-deformation
- variables `k` → 5.3-deformation
- variables `L_0` → 5.3-length
- variables `A` → 5.3-length
- variables `Y` → 5.3-length
- variables `m` → 5.3-tissues
- variables `r` → 5.3-tissues
- variables `w` → 5.3-k-depends
- variables `S` → 5.3-shear
- variables `Δx` → 5.3-shear
- variables `B_bulk` → 5.3-bulk
- variables `ΔV` → 5.3-bulk
- variables `V_0` → 5.3-bulk
- equations `eq-hooke-dl` → 5.3-deformation
- equations `eq-dl-from-k` → 5.3-deformation
- equations `eq-delta-L` → 5.3-length
- equations `eq-stress-strain-form` → 5.3-stress-strain
- equations `eq-stress-strain` → 5.3-stress-strain
- equations `eq-F-YA` → 5.3-stress-strain
- equations `eq-k-rod` → 5.3-stress-strain
- equations `eq-shear` → 5.3-shear
- equations `eq-shear-F` → 5.3-shear
- equations `eq-bulk` → 5.3-bulk
- The conceptual question `fs-id1165296252981` of this section's source, on
  the soles of shoes, tests the coefficient of friction and belongs with
  5.1 under rule 12. If 5.1 has not taken it with `source_section` "5.3",
  the chapter pass should add it there, so that the book does not lose it.
- `ch05/chapter.json` states no equation for the fractional change in
  volume, $\frac{\Delta V}{V_0} = \frac{1}{B}\frac{F}{A}$, which Example
  5.6 solves for and `sim-cube` reads out. The text sets it as a display
  equation inside the example, as the book does, and the chapter pass may
  add it as an unimportant row anchored at `5.3-ex-water` if the formula
  sheet should carry it.
- The concept nodes `hookes-law` and `force-constant` stand under 16.1, and
  this section reinforces them rather than introducing them again. The
  chapter pass should weigh moving both to 5.3, which is where the book's
  reader meets Hooke's law first, as `ch05/exploration.md` asks.

### What the chapter pass did with these (2026-09-11)

- Every anchor above is written into `ch05/chapter.json`, and each one names a
  span id that stands in this section's `text.html`.
- The fractional change in volume is now a row of the chapter,
  `eq-dv-over-v0`, $\frac{\Delta V}{V_0} = \frac{1}{B}\frac{F}{A}$, anchored
  at `5.3-ex-water` and marked unimportant, as the other rearrangements of the
  section are. Example 5.6 sets it as a display equation and solves for it and
  `sim-cube` reads it out, so the formula sheet should carry it; `eq-bulk`
  stays the important statement of the result and keeps the concept.
- The concepts `hookes-law` and `force-constant` stay under 16.1, where
  Chapter 16 built them. This section reinforces both, which is what the
  coverage rows already say: Hooke's law is stated here as $\kF = \kk\kdL$ and
  the constant is derived here as $\kk = \kY A/\kLo$.
- The conceptual question on the soles of shoes (`fs-id1165296252981`), which
  this section left out, is now carried by 5.1 as `cq5` with `source_section`
  5.3, so the book does not lose it. This section's own questions keep the
  numbers the book prints them under, `cq1`, `cq2` and `cq4` to `cq8`.
- Two `draws` lists are corrected against what the figures colour:
  `sim-nail` writes $\kS$ in its readout, so it gains `elastic-modulus`, and
  `sim-cube` writes $\kF$, so it gains `force`. The page bound both types
  already through the other figures.
- The femur example wrote the weight as `\kF = mg`; it now writes `m\kg`, as
  the rest of the chapter does, so the acceleration due to gravity carries its
  hue there too.

### What the chapter pass finished (2026-09-12)

- The caption of Figure 5.18 said the same squeeze compresses acetone six
  times as much as water. Table 5.3 gives water a bulk modulus of
  2.2 × 10⁹ N/m² against acetone's 0.7 × 10⁹, and the figure's own readout
  says three times, so the caption says three times now.
- The caption of Figure 5.17 said the flex of the nail is drawn many
  thousands of times larger than it is, while the figure states the
  magnification it actually draws, a few hundred times at the numbers of
  Example 5.5. The caption now says hundreds of times and points at the
  number the figure prints.
