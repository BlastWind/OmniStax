# Exploration: College Physics 2e, Chapter 3 Two-Dimensional Kinematics

Written before converting the chapter (2026-09-11). Source of record is the
CNXML bundle (`source/osbooks-college-physics-bundle`), not the PDF. The
book's organisation (book → chapters → sections → untitled narrative
headers, one CNXML module per section, apparatus inside the module) is as
recorded in `ch02/exploration.md`; nothing differs here.

## Why this chapter

Chen asked for Chapters 2 and 3 in one job. Chapter 3 carries kinematics
into the plane: it begins with a walk through a city and the fact that
perpendicular motions are independent, spends two sections on vectors, the
first with a ruler and protractor and the second with sines and cosines,
and then applies them to the two situations the rest of the book keeps
coming back to, a projectile and a velocity measured by two observers. The
chapter's opening pages (m42126, a wheelchair tennis player and the arc of
a ball) are recorded as `intro_module`; the app has no chapter landing page
yet, so nothing is built from them.

## Chapter 3 modules

PDF pages 119 to 166; the chapter's glossary, summary, conceptual questions
and problems are aggregated at pp. 155 to 166 in the PDF but sit inside
each module in CNXML. Figures counted include exercise figures. CYU = Check
Your Understanding, AP = AP test prep items, CQ = conceptual questions,
Sol = problems with an inline solution.

| Section | Module | PDF | Ex. | Fig. | Tables | Eq. | Defs | CYU | AP | CQ | Prob. | Sol. |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m42126 | 119 | 0 | 1 photo | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 3.1 Kinematics in Two Dimensions: An Introduction | m42104 | 120–121 | 0 | 5 (1 photo, 4 sketches) | 0 | 0 | 1 | 0 | 3 (2 keyed) | 0 | 0 | 0 |
| 3.2 Vector Addition and Subtraction: Graphical Methods | m42127 | 122–130 | 2 | 23 (1 photo, 22 sketches) | 2 | 2 | 10 | 0 | 2 (1 keyed) | 8 | 12 | 6 |
| 3.3 Vector Addition and Subtraction: Analytical Methods | m42128 | 131–137 | 1 | 16 sketches | 0 | 31 | 1 | 0 | 0 | 4 | 12 | 6 |
| 3.4 Projectile Motion | m42042 | 138–145 | 2 | 6 sketches | 0 | 70 | 7 | 0 | 1 (unkeyed) | 4 | 27 | 13 |
| 3.5 Addition of Velocities | m42045 | 146–154 | 3 | 10 sketches | 0 | 33 | 5 | 0 | 0 | 5 | 20 | 9 |

No section of the chapter has a Check Your Understanding box; the inline
place of rule 12 will hold nothing here, unless a section agent judges a
short conceptual question to be a Remember/Understand check that belongs
beside its passage. The two tables of 3.2 are the height-against-time
tables of its two AP items, not book tables. Every section but 3.1 carries
a PhET note (Ladybug Motion 2D, Maze Game, Vector Addition, Projectile
Motion, Motion in 2D); the config drops them, as Chapter 2 did.

Figure numbers follow the rule that reproduced the PDF's Chapter 2 numbers
from the CNXML: every figure of the narrative and of a Check Your
Understanding box is numbered in order, and a figure inside a problem, a
conceptual question or an AP item is not. The introduction's photograph is
Figure 3.1, so 3.1's figures run 3.2 to 3.6, 3.2's 3.7 to 3.23, 3.3's 3.24
to 3.33, 3.4's 3.34 to 3.39 and 3.5's 3.40 to 3.46. The book's PDF is not
in `source/` at present, so the numbers could not be read off the page;
the same rule gave Figure 2.25 for the first sketch of 2.5, which is what
that section was built with.

The answer key covers the odd-numbered problems (3.2: 1, 3, 5, 7, 9, 11;
3.3: 1, 3, 5, 7, 9, 11; 3.4: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23 and
25, the derivation of the range; 3.5: 1, 3, 5, 7, 9, 11, 13, 15 and the
Critical Thinking item), the AP items of 3.1 (1 and 3) and 3.2 (2), and
none of the conceptual questions. The Unreasonable Results and Construct
Your Own Problem items of 3.4 and 3.5 are unkeyed. Problem 5 of 3.3
(`eip-430`) is keyed with "30.8 m, 35.8 west of north", which is the answer
to problem 4 (`eip-287`) as well, since the two add the same legs in the
other order.

## Observations that affect the plan

- Vectors are the new thing. Chapter 2 gave a vector a sign; here it gets
  an angle, an arrow drawn to scale, components, and the rules of addition,
  subtraction and multiplication by a scalar. The concept nodes for 3.1 to
  3.3 are those rules: the Pythagorean resultant of two perpendicular legs
  and the independence of perpendicular motions in 3.1, the vector in two
  dimensions, the resultant, the head-to-tail method, commutativity,
  subtraction, scalar multiplication and resolving in 3.2, and the three
  analytical results (components from magnitude and angle, magnitude and
  direction from components, addition by components) in 3.3. 2.2's
  `vector` and `scalar` nodes are reinforced, not redefined, even though
  3.1 and 3.2 print the glossary term vector again.
- Every sketch is a vector diagram, and most are of one scene: the walk of
  9 blocks east and 5 blocks north (Figures 3.3, 3.5, 3.8, 3.9, 3.10 to
  3.13 and 3.26 all draw it), the woman's three-leg walk of Example 3.1
  (3.14 to 3.18), the sailor of Example 3.2 (3.20 to 3.23), the two legs A
  and B of 3.3 (3.28 to 3.33). A demo that lets the reader drag the head
  of a vector and watch the components, the resultant and the measured
  angle follow covers a whole run of the book's step figures at once; a
  section plan should say which book figures each demo replaces and carry
  their numbers, the first of the run as the demo's number and the rest
  as further originals, as 2.5 did for the airplane.
- 3.4 leans on 2.5 and 2.7: it restates the five constant-acceleration
  equations in a box, applies them to the vertical motion with $a_y = -g$
  and to the horizontal motion with $a_x = 0$, and its nodes rest on
  `free-fall-kinematics`, `free-fall-highest-point`, `x-from-vbar`,
  `choose-equation` and `physical-solution` (the discarded negative root
  of the hot rock). Its demos are the first in the book with motion in two
  dimensions: a trajectory with the velocity and its components drawn
  every frame, the range against launch angle, the fireworks shell and the
  volcano rock as the worked examples' defaults. They stay 2D canvas; the
  plane of motion is the canvas.
- 3.5 leans on 2.3 (`instantaneous-velocity`, the reference frame of 2.1)
  and on 3.3 (every problem adds velocities by components). Its three
  examples are a boat on a river, a plane in a wind and a coin dropped in
  an airliner, and the last is a projectile seen by two observers, so
  `classical-relativity` rests on 3.4 as well.
- No new type is needed. A vector's components take the type of the
  vector: the components and magnitudes of the displacements in 3.2 and
  3.3 ($A$, $A_x$, $A_y$, $B$, $R$, $R_x$, $R_y$, $D$, $C$) are position,
  the velocity components of 3.4 and 3.5 ($v_x$, $v_y$, $v_{0x}$,
  $v_{0y}$, $v_{\text{tot}}$, the boat, river, plane and wind velocities)
  are velocity, the acceleration components $a_x$ and $a_y$ are
  acceleration, the maximum height $h$ and the range $R$ are position, and
  the angles $\theta$, $\theta_0$, $\theta_v$, $\theta_A$ and $\theta_B$
  stay untyped and in ink. The one wrinkle is the symbol table: Chapter 1
  already holds `A` as the untyped measured value of 1.3, so the vector
  magnitude of 3.3 is keyed `A_mag` (LaTeX $A$, macro `\kA`), and the
  legs $a$, $b$, $c$ of the Pythagorean theorem in 3.1 are written in
  plain LaTeX, since `a` is the acceleration and `c` the speed of light.
  The bold vectors $\mathbf{A}$, $\mathbf{B}$, $\mathbf{R}$ of the
  addition rules stay in ink; only magnitudes and components colour.
- The two AP items of 3.2 (a ball launched vertically, then at 60º, with
  a table of heights against time) test the vertical velocity of a
  projectile and the constant horizontal velocity, which 3.4 introduces;
  the first is 2.7's free fall as well. Under rule 12 the keyed second
  item is held for 3.4, and both sections' `exercise_notes` say so; the
  first is unkeyed and is left out, named in 3.2's notes. The keyed 3.1
  AP items (the acceleration of a thrown ball, the three-ball experiment)
  test the independence of perpendicular motions, which 3.1 introduces,
  and stay; its second, on the graph of vertical acceleration, is unkeyed
  and left out.
- The converter prints the numbered list of 3.4's summary twice (a nested
  list inside a list item is emitted at both levels); the section's
  `summary_html` is written from the CNXML once. In 3.5 the boxed note
  Relativity and Einstein sits inside Example 3.8 in the CNXML and closes
  with two `:::` lines in a row, which is right.
- 3.5's problems 12 and 13 refer to a figure of five galaxies and 3.2's
  problems 1 and 2 and 3.3's problems 1 and 2 to a map of paths through a
  city; both are figures that serve exercises and are copied faithfully,
  labelled Figure, under rule 14.

## What the tooling needs

- Forty new symbol rows in `book.json`, listed in the config; no new type,
  no new hue, no new figlib primitive. The sprites the demos want (a ball,
  a boat, a person walking) are drawn in the section modules.
- Nothing else: the shell, the views and the validator are unchanged.

## Left for a later pass

- A simulation for 3.3 that holds a vector fixed while the axes rotate
  under it, so that the components change and the magnitude does not,
  which is what problem 9(b) of 3.3 asks and what 3.2's `resolving-vector`
  is about. The 3.3 plan judged it a genuine view the text does not give
  and left it, since it belongs to two sections at once; it is the one
  extra simulation of the chapter worth building when the chapter is next
  touched.
