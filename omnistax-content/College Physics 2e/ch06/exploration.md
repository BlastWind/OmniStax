# Exploration: College Physics 2e, Chapter 6 Uniform Circular Motion and Gravitation

Written before converting the chapter (2026-09-11), as part of the job that
finishes the book. Source of record is the CNXML bundle
(`source/osbooks-college-physics-bundle`), not the PDF, which this checkout
does not carry. The book's organisation (book → chapters → sections →
untitled narrative headers, one CNXML module per section, every piece of
apparatus inside its module) is as recorded in `ch02/exploration.md` and
`ch03/exploration.md`; nothing differs here.

## Why this chapter

Chapter 6 is the first chapter of the book that turns a force back on the
motion it causes. It opens by giving a rotation its own two quantities, the
rotation angle and the angular velocity, and tying them to the arc length
and the linear speed the reader already has. It then shows that turning at
constant speed is an acceleration, finds its size, names the force that
must supply it, and works two cases the reader can drive through: a car
held on a level curve by friction and a car held on a banked one by the
road. The fourth section steps into the turning frame and names the forces
that are not there. The last two carry the same centripetal force out to
the Moon and the planets: Newton's universal law of gravitation, and
Kepler's three laws derived from it.

The chapter leans forward on Chapter 4 (Newton's laws, force, weight,
normal force) and Chapter 5 (friction), which are being prepared in the
same wave, and backward on Chapter 2 (velocity, acceleration, free fall,
the acceleration due to gravity) and Chapter 3 (components, vector
subtraction). Chapter 16 is already built and refers forward to this
chapter's ideas: 16.6 projects uniform circular motion onto a line to get
simple harmonic motion.

## Chapter 6 modules

Figures counted include the figures that sit inside exercises. CYU = Check
Your Understanding, AP = AP test prep items, CQ = conceptual questions,
Sol = exercises with an inline solution.

| Section | Module | Ex. | Fig. | Tables | Eq. | Defs | CYU | AP | CQ | Prob. | Sol. |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m42140 | 0 | 1 photo | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| 6.1 Rotation Angle and Angular Velocity | m42083 | 1 | 5 (1 photo, 4 sketches) | 1 | 16 | 6 | 0 | 0 | 1 | 9 | 5 |
| 6.2 Centripetal Acceleration | m42084 | 2 | 2 sketches | 0 | 11 | 2 | 0 | 0 | 1 | 13 | 8 |
| 6.3 Centripetal Force | m42086 | 2 | 10 (3 narrative sketches, 7 in exercises) | 0 | 19 | 5 | 0 | 0 | 10 | 10 | 6 |
| 6.4 Fictitious Forces and Non-inertial Frames: The Coriolis Force | m42142 | 0 | 5 (4 sketches, 1 composite with two photographs) | 0 | 0 | 4 | 0 | 0 | 6 | 0 | 0 |
| 6.5 Newton's Universal Law of Gravitation | m42143 | 1 | 9 (3 photographs or artwork, 6 sketches) | 0 | 16 | 4 | 0 | 6 | 4 | 10 | 9 |
| 6.6 Satellites and Kepler's Laws: An Argument for Simplicity | m42144 | 1 | 4 (3 narrative sketches, 1 in a solution) | 1 | 16 | 0 | 0 | 0 | 1 | 9 | 5 |

No section of the chapter has a Check Your Understanding box, so the inline
place of rule 12 holds nothing here unless a section agent judges one of
the shorter conceptual questions to be a Remember or Understand check that
belongs beside its passage. 6.4 is the thin section of the chapter: three
pages, no equation, no worked example and no problem set, only six
conceptual questions.

The bundle's image files are named for the first edition, where this was
Chapter 7 (`Figure_07_01_01aa.jpg` is the CD of 6.1), and their ordinals do
not track the second edition's figure numbers: 6.1's first two figures share
the ordinal `01`, and 6.5 has both `07_05_07aa` and `07_05_07`. The numbers
below are read off the CNXML the way Chapters 2 and 3 read theirs: every
figure of the narrative is numbered in order and a figure inside a problem,
a conceptual question, an AP item or a solution is not. The introduction's
photograph is Figure 6.1, so 6.1's figures run 6.2 to 6.6, 6.2's 6.7 and
6.8, 6.3's 6.9 to 6.11, 6.4's 6.12 to 6.16, 6.5's 6.17 to 6.25 and 6.6's
6.26 to 6.28. The chapter's two tables are Table 6.1 (degrees and radians,
in 6.1) and Table 6.2 (orbital data and Kepler's third law, in 6.6).

## Where the answers are

The key covers 33 of the chapter's 80 exercises. By section: 6.1's problems
1, 3, 5, 7 and 8; 6.2's problems 1, 3, 5, 7, 9, 11, 12 and 13; 6.3's
problems 1, 3, 5, 7, 8 and 10; 6.5's AP items 1, 3 and 5 and its problems
1, 3, 5, 7, 9 and 10; and 6.6's problems 2, 4, 6, 7 and the Critical
Thinking item. 6.4 has no keyed item of any kind. No conceptual question is
keyed anywhere in the chapter, and neither are the three open AP items of
6.5 (the circumstances that maximise the gravitational force, Titan's mass,
and the Sun's field at Mercury against its field at Earth), which are kept
as open items with an AI-marked suggested approach.

Twenty-one problems have no key and are left out, named in their section's
`exercise_notes`: 6.1's microwave, Earth's period, lacrosse and Construct
Your Own Problem; 6.2's runner, propeller, helicopter, satellite percentage
and space station; 6.3's wind turbine, ideal speed at 20.0º, bicycle lean
and roller coaster; 6.5's Moon-and-Sun accelerations, the Sun's surface
gravity, the re-solve of Example 6.6 and the Neptune-Pluto comparison; and
6.6's geosynchronous radius, Jupiter's mass, the Milky Way star and
Construct Your Own Problem.

## Observations that affect the plan

- **The new quantities are angular, and the book already has the type.**
  The chapter's own quantities are the rotation angle $\Delta\theta$, the
  arc length $\Delta s$, the radius of curvature $r$, the angular velocity
  $\omega$, the centripetal acceleration $a_{\text{c}}$, the centripetal
  force $F_{\text{c}}$, the gravitational constant $G$ and the orbital
  period $T$. Every one of them falls under a type the book already
  declares: `angular-rate` for $\omega$ (declared for 16.6), `position` for
  $r$ and $\Delta s$, `acceleration` for $a_{\text{c}}$, `force` for
  $F_{\text{c}}$ and `time` for $T$. A centripetal acceleration is an
  acceleration and a centripetal force is a force: each is a variant of its
  type, told by its subscript, and rule 7's warning against coercion does
  not apply, since neither is a new kind of quantity. The rotation angle is
  an angle and stays in ink, as $\theta$ has since Chapter 3. Mass ($m$,
  $M$) stays in ink, as the book's own rules say. $G$ is a universal
  constant with the dimension $\text{N}\cdot\text{m}^2/\text{kg}^2$ that no
  figure varies and no slider carries, so it stays in ink too and gets a
  symbol row with its LaTeX only, for the hover layer.
  **So Chapter 6 declares no new type.** This is the first chapter of the
  job to need none, and it is worth saying why: the chapter's subject is
  not a new kind of quantity but the same force, acceleration and velocity
  seen along a curve.
- **The symbol table needs thirteen rows, and three keys were already
  taken.** Chapter 6 stages `r_curv`, `Δs`, `Δθ`, `a_c`, `F_c`, `M`, `G`,
  `T_orb1`, `T_orb2`, `r_1`, `r_2`, `v_1` and `v_2`. It uses, rather than
  restages, the rows Chapters 4 and 5 merged first: `F_net` (`\kFnet`),
  `N` (`\kN`), `w` (`\kwgt`), `f_fric` (`\kff`, the friction force of
  6.3's level-curve example) and `μ_s`. Three keys had to be spelled
  differently, the way Chapter 3 spelled a vector magnitude `A_mag`
  because Chapter 1 held `A`:
  the radius of curvature is `r_curv`, LaTeX $r$, macro `\kr`, because
  Chapter 5 holds `r` for the sphere of Stokes' law and holds it untyped;
  and the two orbital periods of Kepler's third law are `T_orb1` and
  `T_orb2`, LaTeX $T_1$ and $T_2$, macros `\kTorbone` and `\kTorbtwo`,
  because Chapter 4 holds `T_1` and `T_2` for the two tensions in a wire
  and holds them as forces. The report names all three for the chapter
  pass to reconcile if Fable would rather have one row each.
- **6.1 is where the chapter's two vocabularies are joined.** The section
  defines the rotation angle as the ratio of arc length to radius, the
  radian from a whole revolution, and the angular velocity as the rate of
  change of the angle, and then puts them beside the linear quantities:
  $v = r\omega$, read in both directions, is the result the rest of the
  chapter uses. Its figures are one photograph the text points at (the CD)
  and four sketches, of which the rotated radius (6.3) and the two points
  at different radii (6.4) draw the same disc and fold naturally into one
  interactive figure with a draggable radius and two pits on it.
- **6.2 derives the centripetal acceleration from similar triangles.** The
  velocity triangle of Figure 6.7 is the whole argument and is the obvious
  sim: the reader drags the two points apart and watches $\Delta v$ swing
  round toward the centre as $\Delta\theta$ shrinks. Figure 6.8 prints a car
  on a curve and a centrifuge as (a) and (b) of one number in one image
  file, so it is one number with one original, not a fold. The section's
  second thread is the centrifuge and the habit of reading an acceleration
  in multiples of $g$, which most of its problems ask for.
- **6.3 is the heaviest section and carries seven figures that serve
  exercises.** Its narrative has only three sketches (the two curves of
  different radius, the car on a level curve with its free-body diagram,
  the car on a banked curve with its free-body diagram), but four
  conceptual questions and three problems each refer to a figure of their
  own: the race track, the vertical loop, the merry-go-round with the lunch
  box, the mass on a nail, the leaning bicycle, the NASA centrifuge and the
  teardrop loop. Those seven are copied faithfully under rule 14 and carry
  no number. The bicycle and the NASA centrifuge carry no `width` in the
  CNXML, so their `widths` stay empty.
- **6.3 leans hardest on the chapters being written beside it.** Its worked
  example turns on static friction and the normal force, its banked-curve
  derivation on resolving the normal force into components, and almost
  every problem on a free-body diagram. Its concept nodes therefore want
  edges into Chapter 4's `newtons-second-law`, `weight`, `normal-force`,
  `free-body-diagram` and `resolve-forces-into-components` and into
  Chapter 5's `static-friction`, `static-friction-magnitude` and
  `coefficient-of-friction`. Chapters 4 and 5 merged their rows while this
  chapter was being prepared, so every one of those edges is in the book.
- **6.4 is qualitative and has no equation at all.** Its four glossary terms
  (fictitious force, centrifugal force, Coriolis force, non-inertial frame
  of reference) are its four concept nodes; the inertial frame itself is
  Chapter 4's, which defines it in 4.5, so 6.4 reinforces that node rather
  than introducing one of its own. Its
  five sketches are all narrative. The two views of the merry-go-round
  (Figure 6.13) and the ball slid across it (Figure 6.15) are the same
  scene twice and are the section's natural interactive figure: one
  merry-go-round the reader can watch from the ground or from the horse.
  Figure 6.16 is a composite of two NASA satellite photographs and three
  diagrams under one number, so it is one row with one original and its
  credit clause stays in the caption.
- **6.4 prints two conceptual questions that are 6.5's.** Its fourth
  (`fs-id3180041`, action at a distance) and fifth (`fs-id3042736`, Anna
  and Tom on whether a satellite is in free fall) are word for word 6.5's
  `fs-id959677` and `fs-id3122954`. Gravity is introduced in 6.5, so the
  pair is kept there and 6.4's copies are left out, with both sections'
  `exercise_notes` saying so. 6.4's sixth (the Sun as a nearly inertial
  frame) is its own and stays.
- **6.5 is the longest section and its figures are mostly keepable
  pictures.** Three of its nine are photographs or artwork the text points
  at (Newton's apple and Émilie du Châtelet, the black hole tearing matter
  from its companion, the astronauts aboard the International Space
  Station) and are kept as `photo` rows with their captions and credits.
  The other six are sketches: the two masses and the line joining them, the
  house on Earth's radius, the Earth-Moon system and its wiggle, the tidal
  bulges, the spring and neap alignments, and the Cavendish balance. The
  section's spine is one equation, $F = G\,mM/r^2$, and the three things
  the book does with it: get $g$ out of it, get Earth's mass out of $g$,
  and show that it supplies the Moon's centripetal acceleration.
- **6.6 has a table the converter cannot lay out.** Table 6.2's
  continuation rows carry four cells rather than five in the CNXML itself
  (the Parent column is left blank for Venus through Pluto and for Europa
  through Callisto), so `source.md` shows them shifted one column left. The
  section agent reads the CNXML and writes the `div.book-table` with the
  empty Parent cells restored. The book's own table omits Uranus between
  Jupiter and Saturn; that is the book's, and it is kept as printed.
- **6.6's Critical Thinking item belongs to 6.3.** `exer-86626` asks where
  the normal force on a car in a vertical loop is greatest and whether
  $F_N = Kr^{1/2}$ can be right; it is keyed, and what it tests is
  centripetal force, which 6.3 introduces. Under rule 12 it is set with 6.3
  and carries `source_section: "6.6"`, and both sections' `exercise_notes`
  say so. Its keyed answer carries a figure of its own (a graph of $v$
  against $r$), which travels with the item.
- **6.2's satellite problem belongs to 6.5.** `fs-id3257966` asks what
  percentage of the surface acceleration gravity gives at 300 km altitude,
  which needs $g = GM/r^2$ from 6.5. It has no key, so it is left out
  rather than held, and 6.2's `exercise_notes` names it and says where it
  belongs.
- **Three integrated problems reach into chapters that are not built.**
  6.1's kicked football (`fs-id1429548`) asks for an average force and a
  range in parts (b) and (c); 6.2's Viking ship (`fs-id1363119`) asks for a
  free-body diagram and the force on a rider; 6.2's jet tyres
  (`fs-id3033187`) asks for a force and a ratio to a weight. All three are
  keyed and their first part is the section's own, so each stays where the
  book prints it, tagged with the concepts it really tests (the football's
  range is 3.4's `range`) and with a line in `exercise_notes` saying which
  parts lean on Chapter 4.
- **Three PhET links are dropped**, as every chapter has dropped them:
  Ladybug Revolution in 6.1, Ladybug Motion 2D in 6.2 and Gravity and
  Orbits in 6.3. Three Take-Home Experiments are kept verbatim as the
  book's boxed notes (the object swung on a string in 6.1, the golf club in
  6.3, the marble and the spoon in 6.5), as are the Misconception Alert and
  the two Making Connections boxes in 6.5 and 6.6.
- **One AP item names an equation by a number we do not print.** 6.5's
  `fs-id674030` reads "Given Newton's universal law of gravitation
  (Equation 6.40)". The book numbers its equations and OmniStax does not,
  so the wording is kept as the book prints it and the item's `cite` points
  at the passage that states the law.
- **The converter leaves three display equations with a stray brace.**
  `eip-735` and `eip-967` in 6.3 and `eip-859` in 6.5 close an `array`
  environment with an extra `}` or wrap it in parentheses, because the
  MathML nests a fenced pair round the two forms of the centripetal
  equation. Each is the pair $F_{\text{c}} = mv^2/r$ and
  $F_{\text{c}} = mr\omega^2$ (or the pair for $a_{\text{c}}$), and the
  section agent writes the pair cleanly rather than passing the brace on.

## What the tooling needs

- Seventeen new symbol rows in `book.json` and no new type, no new hue and
  no new figlib primitive. The scenes the sims want (a disc with a pit, a
  car on a curve, a merry-go-round, a planet on an ellipse) are drawn in
  the section modules out of the primitives Chapters 2, 3 and 16 already
  use.
- Nothing else: the shell, the views and the validator are unchanged.

## Left for a later pass

- The introduction defines **uniform circular motion** and no section's
  glossary carries it, so it has no glossary row, exactly as Chapter 16's
  introduction left `oscillate` and `wave` without one (LOG pass 26). A
  glossary row names a section, and the fix belongs with that one.
- An interactive figure that shows one scene in two frames at once, the
  ground's and the turning frame's, would serve 6.4 and 6.3 together (the
  lunch box let go on the merry-go-round is a conceptual question of 6.3
  and the Coriolis deflection is the subject of 6.4). It belongs to two
  sections, so it is proposed in 6.4's plan and left for the chapter pass
  to place if 6.3's agent does not build it.
