# Exploration: College Physics 2e, Chapter 11 Fluid Statics

Written in the chapter's prep pass (2026-09-14), after reading every module
of the chapter in full. The source of record is the CNXML bundle
(`source/osbooks-college-physics-bundle`), not the PDF. The book's
organisation (book → chapters → sections → untitled narrative headers, one
CNXML module per section, the apparatus inside the module) is as recorded in
`ch02/exploration.md`; nothing differs here.

## Why this chapter

Chapters 4 to 9 asked what a force does to a body. Chapter 11 asks what a
force does to a body that cannot hold its shape. A fluid yields to a
sideways force, so it can neither withstand nor exert one, and everything
else in the chapter follows from that single concession: the force a fluid
exerts is always perpendicular to a surface, so the quantity that matters is
force over area rather than force; that quantity grows with depth because
the fluid above has weight; a change in it travels through an enclosed fluid
undiminished, which is a hydraulic press; and because it grows with depth,
the fluid pushes harder on the bottom of a submerged body than on its top,
which is buoyancy. The last two sections leave the idealisation behind: a
liquid's surface behaves like a stretched sheet because its molecules pull
on one another, and the pressures a doctor measures in a body are the same
$P = h\rho g$ read off a mercury column.

## Chapter 11 modules

Figures counted include the figures that sit inside exercises. CYU = Check
Your Understanding, AP = AP test prep items, CQ = conceptual questions,
Sol = exercises with an inline solution. The equation column counts the
`{eq:…}` markers the converter writes, most of which in 11.4 and 11.7 are
the numbered substitution steps of a worked example rather than results.

| Section | Module | Ex. | Fig. | Tables | Eq. | Defs | CYU | AP | CQ | Prob. | Sol. |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m42185 | 0 | 1 photo | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 11.1 What Is a Fluid? | m42186 | 0 | 1 diagram | 0 | 0 | 1 | 0 | 0 | 4 | 0 | 0 |
| 11.2 Density | m42187 | 1 | 3 (1 sketch, 1 photo, 1 in a CQ) | 2 (1 in an AP item) | 6 | 1 | 0 | 4 (2 keyed) | 3 | 10 | 7 |
| 11.3 Pressure | m42189 | 1 | 3 (2 diagrams, 1 photo) | 0 | 7 | 1 | 0 | 1 | 8 | 3 | 2 |
| 11.4 Variation of Pressure with Depth in a Fluid | m42192 | 3 | 5 (3 diagrams, 2 in exercises) | 0 | 18 | 1 | 0 | 0 | 8 | 10 | 5 |
| 11.5 Pascal's Principle | m42193 | 1 | 2 diagrams | 0 | 3 | 1 | 0 | 0 | 1 | 5 | 3 |
| 11.6 Gauge Pressure, Absolute Pressure, and Pressure Measurement | m42195 | 1 | 4 (3 diagrams, 1 photo) | 1 | 2 | 4 | 0 | 0 | 3 | 7 | 4 |
| 11.7 Archimedes' Principle | m42196 | 3 | 7 (4 diagrams, 3 photos) | 0 | 17 | 3 | 0 | 0 | 4 | 18 | 9 |
| 11.8 Cohesion and Adhesion in Liquids | m42197 | 2 | 10 (5 diagrams, 4 photos, 1 graph) | 2 | 6 | 5 | 0 | 0 | 8 | 14 | 7 |
| 11.9 Pressures in the Body | m42199 | 1 | 6 (3 diagrams, 3 in problems) | 1 | 7 | 5 | 0 | 0 | 0 | 20 | 10 |

No section of the chapter has a Check Your Understanding box, so the inline
place of rule 12 holds nothing here unless a section agent judges a short
conceptual question to be a Remember or Understand check that belongs beside
its passage. 11.9 prints no conceptual question at all and 11.3 prints eight.

Five tables are the book's own and stay in the text as `div.book-table`
(rule in `$BOOK/RULES.md` § Figures): Table 11.1 Densities of Various
Substances, Table 11.2 Conversion Factors for Various Pressure Units, Table
11.3 Surface Tension of Some Liquids, Table 11.4 Contact Angles of Some
Substances and Table 11.5 Typical Pressures in Humans. A sixth table sits
inside 11.2's fourth AP item (four spheres on four springs) and travels with
that item.

Two modules carry a PhET note, 11.1 (States of Matter—Basics) and 11.3 (Gas
Properties); the config drops both. 11.3's note also carries an empty
`> IMAGE {img:} src=` line, which is the converter reading an `<image>`
element with no source in the CNXML; the line is dropped with the note and
nothing else in the chapter trips on it.

## Figure and table numbers, in book order

Every figure of the narrative is numbered in order and a figure inside a
conceptual question, an AP item or a problem is not, which is the rule
Chapters 1 to 3 used and which the numbers below follow. Figures and tables
number in separate sequences.

| Section | Numbers |
|---|---|
| Intro | 11.1 the swimmer |
| 11.1 | 11.2 atoms in a solid, a liquid, a gas and a plasma |
| 11.2 | Table 11.1 densities; 11.3 the ton of feathers and the ton of bricks, 11.4 the Three Gorges Dam; unnumbered: the glass of ice water in a CQ, the spring table in an AP item |
| 11.3 | 11.5 the finger and the needle, 11.6 the tire, 11.7 the swimmer underwater |
| 11.4 | 11.8 the container of depth $h$, 11.9 the dam, 11.10 the column of air; unnumbered: the levee and sandbags in a CQ, the dam again in a problem |
| 11.5 | 11.11 the two-cylinder hydraulic system, 11.12 the hydraulic brakes |
| 11.6 | 11.13 the aneroid gauge, 11.14 the open-tube manometer in three states, 11.15 the blood pressure cuff, 11.16 the mercury barometer; Table 11.2 pressure units |
| 11.7 | 11.17 the anchor, the submarine and the balloons, 11.18 the cylinder and the two forces, 11.19 the object and the fluid that replaces it, 11.20 the unloaded and loaded ship, 11.21 the hydrometer, 11.22 hydrostatic weighing, 11.23 the coin weighed in air and in water |
| 11.8 | 11.24 the soap bubbles, 11.25 the insect and the needle, 11.26 the sliding wire, 11.27 the two balloons; Table 11.3 surface tensions; 11.28 the alveoli, 11.29 surface tension against area, 11.30 water on waxed and bare paint, 11.31 mercury and water in glass tubes; Table 11.4 contact angles; 11.32 tube radius and fluid density, 11.33 the piston under tension |
| 11.9 | Table 11.5 typical pressures in humans; 11.34 the circulatory system, 11.35 the tonometer, 11.36 inhalation and exhalation; unnumbered: the spinal manometer, the piston again and the backhoe, each in a problem |

The bundle names every image `Figure_12_…` because this chapter was Chapter
12 in the first edition; the copies in `media/ch11/` keep the bundle's names,
as the book's rules ask. The chapter's media folder holds one file so far,
the introduction's photograph; each section copies its own.

## What is new

- **Pressure is the chapter's quantity**, and it is a type of the book's
  (`pressure`, N/m²). Its figures draw it as an arrow on a surface and as a
  field that deepens, its sliders vary the depth and the density that make
  it, and its readouts state it. Its dimension matches `stress`, which
  Chapter 5 declared, and rule 7 settles that: a derived quantity is its own
  type and nothing is coerced into a neighbour to save a colour, exactly as
  torque was kept apart from energy in Chapter 9. A stress is a force a
  solid carries across an internal surface and it has a direction relative
  to that surface; a pressure is a scalar that a fluid exerts equally in
  every direction, which is the point 11.3 makes at length. Chapter 13 will
  reuse the type for the pressure of a gas, so it is named for the quantity
  and not for this chapter.
- **Density is the chapter's second type** (`density`, kg/m³). It is the
  subject of 11.2, it stands in $P = h\rho g$, in the fraction submerged and
  in the capillary rise, and every one of those figures carries it on a
  slider with a table of real liquids behind the detents.
- **Surface tension is the chapter's third** (`surface-tension`, N/m),
  declared for 11.8 alone. $\gamma$ is a force per unit length, which is the
  dimension `stiffness` already carries, and the two are not the same
  quantity: a force constant relates a force to a displacement of one body,
  while a surface tension relates a force to the length of the line it is
  spread along. 11.8's figures put $\gamma$ on a slider with the book's own
  table of liquids as detents, and its two results, $P = 4\gamma/r$ and
  $h = 2\gamma\cos\theta/\rho gr$, are written in the readouts, so rule 7's
  test is met and it is a type rather than ink. **Case: the lower-case Greek
  gamma, $\gamma$, written `\gamma` and never $\Gamma$**; the book prints it
  lower case in the definition, in Table 11.3's column head and in both
  results, and the symbol row is keyed `γ` with the macro `\kgamma`.
- **Nothing else needs a type.** Area $A$, volume $V$, the bubble and tube
  radius $r$, the wire length $L$, the contact angle $\theta$, the specific
  gravity and the fraction submerged are scene lengths, counts or pure
  ratios, and they stay untyped and in ink. Depth $h$ is a position and
  takes Chapter 2's hue; every $F$, $w$, $N$ and $F_{\text{B}}$ is a force
  and takes Chapter 4's.

## Symbols already in the book

Checked with `ost find` and against `book.json` before anything was staged. `F`, `F_1`, `F_2`, `w`,
`N`, `A`, `h`, `m`, `g`, `r`, `θ`, `V_0` and `ΔV` all have rows already and
are used as they stand. Three collisions had to be worked around, and each
follows a pattern the book has used before (`T_force` beside `T`, `A_mag`
beside `A`, `B_bulk` beside `B`, `r_lever` and `r_curv` beside `r`):

- **$P$ is taken.** Chapter 7 holds `P` for power with the macro `\kP`.
  Pressure is keyed `P_press`, latex `P`, macro `\kPr`.
- **$\rho$ is taken.** Chapter 5 staged an untyped `ρ` for the density of
  the fluid a body moves through in the drag equation. A symbol row of
  another chapter is never changed, so density is keyed `ρ_dens`, latex
  `\rho`, macro `\krho`. The two rows are the same physical quantity, and
  folding Chapter 5's row into this one — giving it the type `density` and
  the macro — is a one-field change for a later pass, not for this chapter.
- **$L$ is taken.** Chapter 10, built in this same job, staged `L` for
  angular momentum while this chapter's rows were being written, and the
  merge refused the collision. The wire length of 11.8 is keyed `L_wire`,
  latex `L`, untyped, and it is the one place in the chapter that writes
  an $L$.
- **$F_{\text{B}}$ is taken and is reused.** Chapter 9 staged it for the
  force at a joint; it is a force there and a buoyant force here, both of
  the same type, so 11.7 uses the row as it stands and names it in its own
  `variables` row.

## Figures to replace, and photographs to keep

The chapter prints thirty-six numbered figures. Eight are photographs in
the ordinary sense, with the book's "(credit: …)" clause on the caption, and
the text points the reader at every one of them, so the config keeps all
eight: the swimmer that opens the chapter (11.1, kept by rule 21), the Three
Gorges Dam (11.4), the blood pressure cuff (11.15), the anchor, the
submarine and the helium balloons (11.17), hydrostatic weighing (11.22), the
soap bubbles that open 11.8 (11.24), water beading on waxed and bare paint
(11.30) and the tonometer (11.35). Two of those carry drawing as well as
photograph — 11.30 prints the contact angle $\theta$ on each drop — and a
section agent may transform one of them instead, keeping the photograph as
the original, as Chapter 9 did with the person and the car of 9.1.

The remaining twenty-eight are sketches, diagrams and one graph, and each is
a candidate for an interactive figure under rule 14. The ones that clearly
carry an idea a slider can open are 11.2 (the three phases), 11.5 (the same
force on two areas), 11.6 and 11.7 (arrows drawn over a photograph of a tire
and of a swimmer, where the diagram is the content), 11.8 (depth and the
weight it holds up), 11.10 (the column of air), 11.11 and 11.12 (the
hydraulic system), 11.14 (the manometer in three states, a fold), 11.16 (the
barometer), 11.18 and 11.19 (the buoyant force and the fluid that replaces
the body, a fold), 11.20 (the loaded and unloaded ship), 11.21 (the
hydrometer), 11.23 (the coin weighed twice), 11.25 (the insect and the
needle), 11.26 (the sliding wire), 11.27 (the two balloons), 11.31 and 11.32
(the capillary tubes, a fold), 11.33 (the piston under tension) and 11.36
(inhalation and exhalation). 11.29, the graph of surface tension against
area, is already a graph and is redrawn as one; 11.28 and 11.34 are medical
illustrations of the alveoli and of the circulatory system, and each is kept
as the book draws it unless its section's plan argues for more.

## Notes and PhET items

Fifteen boxed notes, all of them the book's own words and kept as notes:
the Connections note on the submicroscopic explanation of solids and liquids
(11.1), Density (11.2), the Sugar and Salt Take-Home Experiment (11.2),
Pressure (11.3), Pascal's Principle (11.5), the Conservation of Energy
Making Connections note (11.5), Gauge Pressure, Absolute Pressure, Systolic
Pressure and Diastolic Pressure (11.6), Buoyant Force, Archimedes' Principle,
Specific Gravity and two Take-Home Investigations (11.7), Cohesive Forces,
Adhesive Forces, Surface Tension, the Making Connections note on surface
tension, Contact Angle, Capillary Action and a Take-Home Investigation
(11.8), and Increase in Pressure in the Feet of a Person, Two Pumps of the
Heart and Eye Pressure (11.9). The two PhET notes are dropped and named in
`notes`, as every chapter so far has done, and the introduction's link to the
publisher's video trailer is dropped the same way.

## Exercises that belong to another section

An exercise goes with the section that introduces what it tests (rule 12),
and both sections' `exercise_notes` say so. The clear moves:

| Item | Printed in | Goes to | Why |
|---|---|---|---|
| `fs-id889976` (the polystyrene cube, partly submerged) | 11.2 | 11.7 | It is the fraction submerged and nothing else |
| `fs-id2402162` (the drum of petroleum ether) | 11.3 | 11.4 | It wants the pressure on the floor, which is $P = h\rho g$ |
| `fs-id2590796` (the iceberg and the glacier) | 11.3 | 11.7 | It is displaced volume and the level of a lake |
| `fs-id1868222` (swimming under the Great Salt Lake) | 11.4 | 11.7 | It is buoyancy in a denser fluid |
| `fs-id3245014` (the loaded oil tanker) | 11.8 | 11.7 | It is how deep a floating body sits |
| `fs-id2382586` (water in a capillary tube, and its energy) | 11.9 | 11.8 | It is the capillary rise |
| `fs-id2392422` (the device that reaches −25 atm) | 11.9 | 11.8 | It is the negative pressure of 11.33 |
| `fs-id3077567` (the backhoe's hydraulics) | 11.9 | 11.5 | It is $F_1/A_1 = F_2/A_2$ with a lever in front of it |

Three that are borderline and stay where the book prints them, each named in
the section's `exercise_notes`: 11.2's fourth AP item ranks densities from
the stretch of four springs, which is 16.1's Hooke's law, but the ranking is
a density ranking and 16.1 is built; 11.4's problem on the aqueous humor
asks for millimeters of mercury, whose conversion factor 11.6 supplies, but
the calculation is $F/A$ and belongs with 11.4; and 11.9's hammer-and-nail
problem reaches back to 5.3's deformation for its middle part, as its own
note will say.

11.9's last ten problems are the chapter's integrated set rather than a set
about the body, which is why four of them move. Two are Construct Your Own
Problem items (the people clinging to a log, the alveoli of an emphysema
sufferer) and are unkeyed, and the repeat of the Marianas Trench problem
with a bulk modulus part is unkeyed as well; all three are left out and
named in `notes`, as is every other unkeyed problem the chapter prints.

## Answers

The answer key covers roughly every second problem, as elsewhere in the
book: 47 of the chapter's 87 problems carry an inline solution, 2 of its 5
AP items do, and none of its 39 conceptual questions does. Conceptual
questions and unkeyed AP items get an AI-marked suggested approach; an
unkeyed AP choice item is kept as an open item with the book's options and
never as a graded choice. No answer is ever computed.

## The chapter's glossary, and two terms defined twice

The book defines **pressure** twice, in 11.3 ("the force per unit area
perpendicular to the force, over which the force acts") and again in 11.4
("the weight of the fluid divided by the area supporting it"), and defines
**systolic pressure** and **diastolic pressure** twice, in 11.6 and again in
11.9. Only the first definition of each is written to the glossary, under
the section that introduces the term; the second is a special case or a
restatement, and printing it a second time would tell the reader the chapter
has two meanings for one word when it has one. Nineteen glossary rows
remain.

## BE INSPIRING (rule 23)

Pressure is the first quantity in the book the reader cannot see. A force
has an arrow and a direction; a pressure has neither, and the book has to
argue for four sections that it is there. The chapter becomes intuitive the
moment it is drawn, and what makes it stunning is that one drawing does the
whole chapter.

- **One scene, returned to six times.** A tank of fluid with a body in it,
  drawn once and reused: little arrows on every surface, each as long as the
  pressure at its depth. Put a surface in it and the arrows crowd onto it —
  that is 11.3. Slide the surface deeper and they grow — that is 11.4. Seal
  the tank and push on a piston and every arrow in the tank lengthens by the
  same amount at once — that is 11.5, and the reader sees "undiminished"
  rather than reading it. Drop a block in and the arrows on the bottom face
  are visibly longer than those on the top, and their difference is drawn as
  one upward arrow beside the weight — that is 11.7, and Archimedes'
  principle stops being a coincidence. A reader who watches one picture
  answer five sections has learned the chapter's real claim, which is that
  all of it is the weight of the fluid above.
- **Make the invisible carry a number.** Every one of those figures states
  $P = h\rho g$ with the live depth, density and pressure in their type
  hues, so the arrows and the algebra move together. Where the book prints a
  mercury column, draw the mercury column: the manometer of 11.14 with a
  balloon on one side, a vacuum-packed jar on the other, and the height
  difference read off a scale, is the most honest instrument in the book and
  reads its own equation.
- **Let the reader load the ship.** 11.7's best figure is a hull the reader
  fills with cargo and watches settle, with the waterline, the displaced
  volume and the fraction submerged read off together, and a density slider
  that turns fresh water into sea water and lifts the hull an inch. The same
  figure, with the hull replaced by a person, answers the section's floating
  woman and its hydrometer.
- **Show the surface as a sheet.** 11.8 asks the reader to believe a liquid
  surface is elastic. Draw it: an insect's foot denting a membrane, the dent
  deepening as its weight rises on a slider, and the restoring force turning
  toward the vertical until the surface breaks. Then the two balloons: open
  a valve between a small one and a large one and the small one empties into
  the large one, which is the opposite of what anybody expects, and
  $P = 4\gamma/r$ is written underneath while it happens.
- **Scale honestly and the scale becomes the lesson.** The chapter's numbers
  are its best argument: ten meters of water and a hundred and twenty
  kilometers of air weigh the same, a dam holds back a force that is less
  than a tenth of a percent of the water's weight, and a pedal cylinder five
  times narrower than a wheel cylinder multiplies a foot's push
  twenty-five-fold. Each of those is a figure whose two bars sit side by
  side on one fixed scale, and the reader reads the ratio off the picture
  before reading it in the text.
- **Motion where there is a clock, and nowhere else.** Fluid statics has no
  time in it, so almost every figure here answers its sliders and gets no
  transport (rule 14). Three have a genuine cycle and may move: the two
  balloons emptying into each other, a breath in and out in 11.36, and the
  capillary column rising to its equilibrium height. Each must argue for its
  transport in the section's plan; nothing else in the chapter does.

## What the tooling needs

- Three new types, `pressure`, `density` and `surface-tension`, and
  twenty-six new symbol rows in `book.json`, listed in `config.md`.
- No new figlib primitive. A tank of fluid, a piston, a U-tube, a hull at a
  waterline and a capillary column are drawn from `rect`, `line`, `arrow`,
  `dot` and `curve`; a field of arrows whose length follows depth is a loop
  over `arrow`, and the sprites the sims want are drawn in the section
  modules, as Chapter 9's nail puller and forearm were.
- Nothing else: the shell, the views and the validator are unchanged.

## Left for a later pass

- **Chapter 5's `ρ`.** It is untyped, it is the same quantity as this
  chapter's `ρ_dens`, and 5.2's drag figures would read better in the
  density hue. Folding the two rows into one is a book-level change and
  belongs to a pass that owns both chapters.
- **A constants and units sheet.** The book's rules have wanted one since
  Chapter 4, and this chapter is the first that would plainly use it: Table
  11.1's densities, Table 11.2's pressure conversions and Table 11.3's
  surface tensions are looked up from four different sections, and 11.4,
  11.6, 11.8 and 11.9 each print the same 1 mm Hg = 133 Pa. Three tables
  and one conversion factor are the whole of it.
- **Chapter 12.** The introduction and three sections point forward to Fluid
  Dynamics and Its Biological and Medical Applications (m42205), which is
  built in this same job by another agent. Every one of those references is
  plain text in the prep pass, because the validator refuses a link into a
  chapter that is not yet in `book.json`; the chapter pass should link them
  once Chapter 12 is merged.
