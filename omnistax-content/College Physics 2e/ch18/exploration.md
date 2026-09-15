# Exploration: College Physics 2e, Chapter 18 Electric Charge and Electric Field

Written in the chapter's prep pass (2026-09-14), after reading every module
of the chapter in full. The source of record is the CNXML bundle
(`source/osbooks-college-physics-bundle`), not the PDF. The book's
organisation (book → chapters → sections → untitled narrative headers, one
CNXML module per section, the apparatus inside the module) is as recorded in
`ch02/exploration.md`; nothing differs here.

## Why this chapter

Chapter 18 opens the book's second half, and it opens electricity the way
the book opened mechanics, with a new quantity and the force it feels. The
quantity is electric charge, which comes in two kinds, is carried by
electrons and protons in units of $1.60 \times 10^{-19}$ C, and is conserved
absolutely: rubbing only moves it about, and even a particle accelerator
that makes matter from energy makes a pair whose charges cancel. The force is
Coulomb's, an inverse square like gravity's but $10^{39}$ times stronger
between the particles of an atom and able, unlike gravity, to cancel, which
is why the world is neutral at large and why a comb can lift paper. Between
the two the chapter puts the ideas that make charge usable: conductors, in
which charge moves, and insulators, in which it does not; charging by
contact and by induction; polarization, which is why a charged object of
either sign attracts a neutral one. Then it takes the step the book calls a
concept revisited. The Coulomb force on a test charge depends on the test
charge, so the chapter divides it out and defines the electric field,
$E = F/q$, unique at every point in space and drawn as lines that begin on
positive charge, end on negative, never cross, and crowd where the field is
strong. A conductor in that field tells the rest of the story: its free
charges move until the field inside is zero and the field outside meets its
surface at right angles, its excess charge sits on the surface and crowds
its sharpest points, and from those three facts come the parallel-plate
field, the lightning rod, the Faraday cage, the Van de Graaff generator and
the photocopier. One short section notes that DNA and water are charged and
polar and that the cell screens the Coulomb force to short range.

## Chapter 18 modules

Figures counted are every `FIGURE` block the converter wrote, the images
inside exercises included; the numbered ones are listed under Figure
numbers below. CYU = Check Your Understanding, AP = AP test prep items,
CQ = conceptual questions, Sol = exercises with an inline solution (AP
items keyed are given in brackets). The equation column counts the `{eq:…}`
markers, most of which in 18.3, 18.4, 18.5 and 18.8 are the substitution
steps of a worked example rather than results.

| Section | Module | Ex. | Fig. | Tables | Eq. | Defs | CYU | AP | CQ | Prob. | Sol. |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m42299 | 0 | 2 photos | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 |
| 18.1 Static Electricity and Charge: Conservation of Charge | m42300 | 0 | 7 (3 photos, 4 diagrams) | 1 (inside an AP item) | 3 | 4 | 0 | 11 (6 keyed) | 2 | 4 | 2 |
| 18.2 Conductors and Insulators | m42306 | 0 | 8 (2 photos, 4 diagrams, 2 unnumbered in AP items) | 0 | 0 | 7 | 1 | 9 (4 keyed) | 6 | 5 | 3 |
| 18.3 Coulomb's Law | m42308 | 1 | 3 (1 photo, 1 diagram, 1 unnumbered in a CQ) | 0 | 9 | 3 | 0 | 6 (3 keyed) | 3 | 17 | 7 |
| 18.4 Electric Field: Concept of a Field Revisited | m42310 | 2 | 1 diagram | 0 | 7 | 3 | 0 | 7 (4 keyed) | 2 | 6 | 3 |
| 18.5 Electric Field Lines: Multiple Charges | m42312 | 1 | 12 (5 diagrams, 7 unnumbered in exercises) | 0 | 4 | 4 | 0 | 4 (2 keyed) | 2 | 4 | 0 |
| 18.6 Electric Forces in Biology | m42315 | 0 | 2 diagrams | 0 | 0 | 4 | 0 | 0 | 1 | 0 | 0 |
| 18.7 Conductors and Electric Fields in Static Equilibrium | m42317 | 0 | 20 (2 photos, 6 diagrams, 12 unnumbered in exercises) | 0 | 0 | 6 | 0 | 4 (2 keyed) | 16 | 14 | 5 |
| 18.8 Applications of Electrostatics | m42329 | 1 | 10 (5 diagrams, 5 unnumbered in problems) | 0 | 6 | 8 | 0 | 0 | 0 | 19 | 4 |

The chapter has 69 problems, of which 24 carry an inline solution and 45 do
not; 41 AP items, of which 21 are keyed (14 as a lettered choice, 7 as an
open answer); 32 conceptual questions, none keyed; and one Check Your
Understanding box, in 18.2, with its answer. The worked examples are
numbered 18.1 (18.3, the Coulomb force against gravity), 18.2 and 18.3
(18.4, the field of a point charge and the force it exerts), 18.4 (18.5,
adding electric fields) and 18.5 (18.8, the charged drop of gasoline) on
openstax.org; the CNXML gives the last the id `eip-107`.

## Figure numbers

The book numbers the figures of the narrative and of the one Check Your
Understanding box, and leaves the images inside AP items, conceptual
questions and problems unnumbered (the rule `ch13/exploration.md` records);
18.4's one figure is 18.18 and 18.7's first is 18.26 on the publisher's
pages, which confirms that the water molecule in 18.3's conceptual question
and the seven images in 18.5's exercises carry no number. The bundle's file
names say 19 rather than 18 because the module numbers are from an earlier
edition; the numbers below are the ones this edition prints.

| Section | Numbers |
|---|---|
| Intro | 18.1 the child on the plastic slide (photo), 18.2 Franklin and the kite (drawing, kept as the introduction's second photograph) |
| 18.1 | 18.3 the Borneo amber (photo), 18.4 the glass rod and the silk in three panels (a)(b)(c), 18.5 the planetary model of the atom, 18.6 the person touching a Van de Graaff with a blown-up hair (photo with an inset drawing), 18.7 the three quarks in a proton, 18.8 the amber and the cloth rubbed in three panels (a)(b)(c), 18.9 an electron–positron pair created and annihilated (a)(b) |
| 18.2 | 18.10 the laptop power adapter (photo), 18.11 the electroscope charged by contact (a)(b)(c), 18.12 two spheres charged by induction (a)–(d), 18.13 one sphere charged by induction with a ground wire (a)–(d), 18.14 a polarized insulator and conductor (a)(b)(c), 18.15 the stream of water bent by a charged rod (the CYU's photograph, with no caption); unnumbered: the balloon and the sphere and the rod and the two metal balls, each in an AP item |
| 18.3 | 18.16 the galaxies of Arp 87 (photo), 18.17 the forces between two like and two unlike charges (a)(b); unnumbered: the water molecule's electron cloud in the first conceptual question |
| 18.4 | 18.18 the Coulomb force of $Q$ on two different test charges (a)(b) |
| 18.5 | 18.19 the field of a positive charge as arrows and as lines (a)(b), 18.20 the fields of a positive, an equal negative and a larger negative charge (a)(b)(c), 18.21 the two fields of Example 18.4 added at the origin, 18.22 the field of two positive charges, 18.23 the field of two negative charges and of a positive–negative pair (a)(b); unnumbered: the dipole with a third charge, the square W X Y Z, the field of three objects R S T, the blank $E$–$x$ axes and the keyed answer's graph (AP items), the three regions I, II, III (a conceptual question), the field near two charges (a problem) |
| 18.6 | 18.24 the DNA double helix (drawing), 18.25 two water molecules as dipoles |
| 18.7 | 18.26 a field applied to a conductor, resolved and then perpendicular (a)(b), 18.27 a neutral sphere in a uniform field, 18.28 a charged sphere and its radial field, 18.29 two parallel plates, 18.30 the fair-weather field and a storm (photos, (a)(b)), 18.31 charge on a nonuniform conductor in three panels (a)(b)(c), 18.32 the pointed conductor, 18.33 a lightning rod and a Van de Graaff (photos, (a)(b)); unnumbered: the charged sphere with eight arrows, the plates with points A B C, the Millikan apparatus (AP items), the object in a field and the square of four charges $q_\text{a}$ to $q_\text{d}$ (conceptual questions; the square is printed again among the problems), the two oblong conductors, the tilted plates, the nonuniformly charged insulating rod, the charges on the $x$-axis (a)(b) and the equilateral triangle (problems) |
| 18.8 | 18.34 the Van de Graaff schematic, 18.35 xerography in four stages, 18.36 the laser printer, 18.37 the ink jet, 18.38 the precipitator schematic and a smokeless plant (a)(b); unnumbered, all in problems: the parallel plates with a hole, the ball hanging at $8.00°$, the electron deflected between plates, the Millikan oil drop, the four charges and a fifth above the square |

Tables: one, the unnumbered four-column table of final charges on the
spheres X, Y and Z inside 18.1's second AP item (`fs-id3322928`); it is part
of the item's prompt and stays on the exercise card, as `config.md` says.
No module prints a numbered table.

## What is new, and the types the chapter asks for

- **Charge is a type.** $q$ is the quantity the chapter introduces, every
  figure that draws a rod, a sphere, an electron or a proton draws it,
  the sliders of Coulomb's law and of the field carry it and every readout
  states it. By rule 7 it is a type of the book's: declared `charge`,
  labelled charge, dimension C. The book holds no `q`, so the plain symbol
  is staged as `q` with the macro `\kq`; the point charge $Q$ cannot be
  `Q`, which is Chapter 12's flow rate with `\kQ`, and is `Q_charge` with
  `\kQch`. Its variants are `q_1`, `q_2` (`\kqone`, `\kqtwo`), the
  elementary charge `q_e` (`\kqe`, LaTeX `q_{\text{e}}`, which 18.6 and
  18.8 write and 18.1 sets as `{q}_{e}`), `q_tot` and the four corner
  charges `q_a` to `q_d` of 18.7's square. A charge's sign is told by its
  sign and its label, never by a second hue; `COLOR.md` says so.
- **The electric field is a type.** $E$ is defined in 18.4 as a force per
  charge, drawn as arrows and lines from 18.5 on, and set by sliders and
  stated by readouts everywhere after. Declared `electric-field`, labelled
  electric field, dimension N/C, which Chapter 19 will also write as V/m
  on the same row. The book's `E` is energy with `\kE`, so the field is
  `E_field` with `\kEf`, and its variants are `E_field1`, `E_field2`,
  `E_tot` (`\kEfone`, `\kEftwo`, `\kEftot`) for Example 18.4 and `E_par`,
  `E_perp` (`\kEfpar`, `\kEfperp`) for 18.7's components.
- **The Coulomb force is a force.** $F$ is Chapter 4's `F` (`\kF`) as it
  stands, the two forces of Figure 18.17 are Chapter 4's `F_1` and `F_2`,
  and this chapter adds `F_G` (`\kFG`) for the gravitational force of
  Example 18.1 and `F_par` (`\kFpar`) for the parallel force of 18.7.
- **Coulomb's constant is untyped.** $k$ is a material-free constant of
  the same standing as $G$ and Boltzmann's $k$; the book holds `k` as the
  force constant (Chapter 16) and `k_boltz` (Chapter 13), so this one is
  `k_coul`, LaTeX `k`, no type and no macro, written plain. $\varepsilon_0$
  is not written anywhere in the chapter and is not staged; Chapter 19
  may stage it if it writes it.
- **A separation is untyped ink.** $r$ is the distance between two charges
  or from a charge to a point, and the brief settles it as untyped, like
  a length: it is Chapter 5's `r` row, with no macro, written plain.
  Chapter 6's `r_curv` and Chapter 9's `r_lever` carry `\kr` and `\krlev`
  and are not this quantity; `r_1` and `r_2` of Example 18.4 are the
  book's position rows in `book.json` but are listed for 18.5 with no
  type, so the page writes them plain.
- **Mass, angle and counts stay in ink**, as the book's `COLOR.md` says:
  $m$, $M$, $m_\text{e}$ (staged untyped for the caption of Figure 18.9),
  $\Delta m$, $\theta$, the number of electrons in a charge, the fraction
  of a metal's electrons removed.

## Sketches to replace, and photographs

Every diagram of the chapter is a figure to transform with the book's image
kept as its original: 18.4, 18.5, 18.7, 18.8, 18.9, 18.11, 18.12, 18.13,
18.14, 18.17, 18.18, 18.19, 18.20, 18.21, 18.22, 18.23, 18.24, 18.25, 18.26,
18.27, 18.28, 18.29, 18.31, 18.32, 18.34, 18.35, 18.36, 18.37 and 18.38.
Figure 18.2 is a drawing of Franklin but is a picture, not a sketch of an
idea, and is kept as the introduction's second photograph. Eleven images
are photographs:

| Number | What it is | Keep or drop |
|---|---|---|
| 18.1 | the child on the plastic slide | keep, rule 21; the introduction page's own photograph |
| 18.2 | Franklin flying the kite | keep; the introduction's first paragraph says "See Figure 18.2" |
| 18.3 | the polished Borneo amber | keep; the first paragraph says "see Figure 18.3", and the caption is the first statement of rubbing separating charge |
| 18.6 | the person touching a Van de Graaff with a blown-up hair | keep; the passage says "Figure 18.6 shows" and reads the inset; a section agent may instead draw the inset's charges as a figure with the photograph as its original, if the plan says why |
| 18.10 | the laptop power adapter | drop; the splash image at the head of 18.2, which no passage points at |
| 18.15 | the stream of water bent by a rod | keep; the Check Your Understanding box asks the reader to explain this photograph, and it has no caption |
| 18.16 | the galaxies of Arp 87 | drop; the splash image at the head of 18.3; its caption's contrast is the discussion of Example 18.1, which the page carries in words |
| 18.30 | the fair-weather kite field and the lightning over water | keep; the passage points at (a) and (b) by number as the two states of Earth's field |
| 18.33 | the lightning rod and the Van de Graaff sphere | keep; the passage says "such as shown in Figure 18.32" for the point and "See Figure 18.33" for the smooth sphere, and the two are the section's two applications side by side |
| 18.38(b) | the smokeless power plant | keep with (a); it is the second panel of one numbered figure whose (a) is a schematic to transform, so the row carries both originals and the photograph rides with the figure |

The images inside exercises are read by the items they sit in, so by rule
14 each is copied faithfully with no sliders and no animation, either as an
unnumbered `figure` row in a closing block of the text or on the card of
the item that refers to it; `config.md` says which this chapter uses. The
square of four charges in 18.7 is printed twice by the book, once among
the conceptual questions and once among the problems, and is one image
(`Figure_19_07_12a.jpg`).

## Notes, boxes and PhET items

Four PhET notes, all dropped and named in `notes`: Balloons and Static
Electricity in 18.1 and John Travoltage in 18.2 (both with an empty image
block the converter wrote as `> IMAGE`), Electric Field of Dreams in 18.4
and Charges and Fields in 18.5 (both links). The introduction's trailer
link is left out. The book's boxes are its own words and are kept verbatim:
18.1's Things Great and Small (the submicroscopic origin of charge), its
boxed Law of Conservation of Charge and its Making Connections on
conservation laws; 18.3's boxed Coulomb's Law with its two equations; 18.7's
Misconception Alert on the field inside a conductor (which contains Figure
18.28) and its boxed Properties of a Conductor in Electrostatic Equilibrium
(three numbered items); and 18.8's Take-Home Experiment on humidity, its
six-step Problem-Solving Strategies for Electrostatics, its note on
Unreasonable Results and its three-step Problem-Solving Strategy for them.
18.8's Integrated Concepts passage lists six earlier chapters by title with
links to their first modules; the titles stay as plain text.

## Exercises that belong to another section

- **18.3's problem on where a third charge feels no net force**
  (`fs-id2622925`, keyed) and **its problem on the test charge halfway
  between $+6$ μC and $+4$ μC** (`fs-id3189377`, unkeyed) need the forces
  of two charges added as vectors, which is 18.5's first objective and its
  concept `superposition-of-coulomb-forces`; they go to 18.5 with
  `source_section: "18.3"`, both sections' `exercise_notes` saying so. The
  problem on splitting $q_\text{tot}$ for the greatest force
  (`fs-id3034287`) is unkeyed and stays a 18.3 item, left out.
- **18.1's AP item on which of the four objects W, X, Y and Z is charged**
  (`fs-id1409750`, keyed) has a neutral object Z attracted by both signs,
  which is 18.2's polarization; its answer is nonetheless read from the
  two facts 18.1 states (like repel, unlike attract, and a neutral object is
  attracted by either), so it stays with 18.1, tagged with 18.2's
  `attraction-of-neutral-objects` as a placeholder inside the chapter.
- **18.7's conceptual question on the belt of a Van de Graaff**
  (`fs-id3228630`) is answered by 18.8's description of the generator; it
  stays with 18.7, whose properties of a conductor answer it, tagged with
  `van-de-graaff-generator`.
- **18.2's Check Your Understanding on the stream of water** rests on the
  polar molecule, which the book defines in 18.6; it stays inline in 18.2
  as the book prints it, tagged with 18.2's `attraction-of-neutral-objects`
  and 18.6's `polar-molecule` as a placeholder inside the chapter.
- **18.3's three conceptual questions on the water molecule and humidity**
  are likewise 18.6's polar molecule read through Coulomb's law; they stay
  with 18.3 and are tagged with `polar-molecule` too.
- **18.8's Integrated Concepts problems** reach into Chapters 2, 3, 4, 6, 9
  and 11; they stay with 18.8, whose skill `integrated-electrostatics` is
  the tag, with edges into those chapters. The one on the electron orbiting
  a proton (`fs-id3163042`), the electron stopped by a field
  (`fs-id2970960`), the proton reaching 3.00% of $c$ (`fs-id3026039`), the
  hanging ball (`fs-id3053411`), the deflected electron (`fs-id1941066`),
  the Millikan drop (`fs-id2963260`) and the fifth charge above a square
  (`fs-id2612900`) are all unkeyed and left out, named in the notes; the
  Critical Thinking item on the circular track (`exer-45678`) is keyed at
  length and stays.
- Nothing else moves. The AP items introduced by "for questions 25–27",
  "questions 31–32" and "questions 39–40" refer to the AP edition's
  numbering; the section agent keeps the words and sets each item on its
  own card.

## The keyed items

The answer key covers roughly a third of the problems here rather than
every second one: 24 of 69 carry an inline solution, and 18.5's four
sketch problems and all but four of 18.8's nineteen are unkeyed. Of the 41
AP items 21 are keyed, 14 as a lettered choice and 7 as an open answer
(18.1's charge transfer and the four objects W to Z, 18.2's two metal
balls, 18.3's two 1 C charges, 18.4's electron in a field, 18.5's three
objects R, S and T with its graph, 18.7's percentage change). The 20 unkeyed
AP items, the 32 conceptual questions and the one CYU's answer are handled
as `config.md` says. Two problems are Construct Your Own Problem items and
three are Unreasonable Results items, all in 18.8 and none keyed.

## Errata kept as printed

- **Example 18.3 uses $7.20 \times 10^{5}$ N/C** for the field Example 18.2
  found as $7.19 \times 10^{5}$ N/C; kept, and 18.4's `notes` names it.
- **18.4's summary writes the definition as $\text{E} = \text{F}/(q,)$**, with
  the comma inside the fraction (`eip-652`); the equation row carries the
  narrative's form (`eip-853`).
- **Example 18.4's direction.** The text reads the resultant as "$63.4°$
  above the $x$-axis", where Figure 18.21 draws it in the second quadrant
  and the alt text says "above the negative $y$ axis"; the angle is measured
  from the negative $x$-axis. Kept, and the figure built for 18.21 draws
  the book's arrows.
- **18.3's keyed problem on two protons** (`fs-id2384303`) writes the charge
  as $(1.60 \times 10^{-19}\ \text{m})^2$ and uses $9.00 \times 10^{9}$ for
  $k$; kept as the book's key.
- **18.7's keyed problem on the total force on $q$** (`fs-id3165180`) ends
  "in the $-y$ direction" with three empty display-math pairs between the
  words, a converter artifact of empty `<m:math>` elements; the section
  agent drops the empties and keeps the words.
- **Two exercises share the id `fs-id2384303`**, 18.3's problem on two
  protons and 18.7's conceptual question on the special grip for car doors;
  ids are per section, so nothing clashes.
- **18.1's summary** says the force decreases "with the square of the
  distance" where the narrative says only "with distance"; kept, since
  18.3 makes it so.
- **18.4's first objective** writes "electrical field strength (E)" and
  its second objective "electrical force (F)"; kept.
- **18.6's "Figure 18.24" is credited (credit: Jerome Walker)** and its
  file exists twice in the bundle under different hashes; the module names
  `Figure_19_06_02a-d084.jpg` and `Figure_19_06_03a-be53.jpg`, which are the
  ones to copy.
- **18.8's problem on the practical limit of a field** writes "$3.00%$"
  inside math; the section agent writes it as $3.00\%$.

## Prerequisite edges into built chapters

The chapter rests on Chapter 1 for the idea of a physical quantity, a model
and unit conversion; on Chapter 3 for vectors, their resolution and their
addition; on Chapter 4 for force, the free-body diagram, Newton's second
and third laws, weight, the net external force, the four basic forces and
the force field of 4.8, which 18.4 revisits by name; on Chapter 2 and 4.7
for the kinematics the integrated problems need; on Chapter 6 for
universal gravitation, its constant and the centripetal force of the
hydrogen orbit; on Chapter 7 for conservation of energy as the pattern
conservation of charge joins; and on Chapter 9 for static equilibrium and
its first condition. The ids used are `physical-quantity`, `unit-conversion`
(1.2), `model` (1.1), `vector-in-two-dimensions`, `resultant-vector` (3.2),
`resolving-vector`, `components-from-magnitude-angle`,
`magnitude-direction-from-components`, `analytical-vector-addition` (3.3),
`v-squared` (2.5), `force`, `free-body-diagram` (4.1), `net-external-force`,
`newtons-second-law` (4.3), `weight`, `newtons-third-law` (4.4),
`newtons-laws-problem-solving` (4.6), `integrated-kinematics-dynamics`
(4.7), `four-basic-forces`, `force-field` (4.8), `universal-gravitation`,
`gravitational-constant` (6.5), `centripetal-force-magnitude` (6.3),
`conservation-of-energy` (7.6), `first-condition-equilibrium` and
`static-equilibrium` (9.1). Every id was checked with `ost rows` and stands
in `book.json`; 147 edges in all, the rest within the chapter.

## Wanted at chapter level

Nothing. Every symbol and type this chapter writes was staged in
`ch18/book-rows.json` and merged, and every edge lands on an id that
stands in `book.json`. Chapter 19 was being prepared at the same time and
will declare `voltage` and `capacitance`; it writes $E$ in V/m on this
chapter's `E_field` row and, if it writes $\varepsilon_0$, stages it
itself. A section agent that finds it needs an id this pass did not stage
should add it to its own `plan.md` under this heading.

## BE INSPIRING (rule 23)

Electrostatics is the chapter of this book most often taught from still
pictures of things that in fact move, and its ideas are ones a reader can
only half believe until they have moved a charge and watched a field
follow it.

- **The electroscope and the two spheres, walked through, not captioned.**
  Figures 18.11, 18.12 and 18.13 each print four states of one apparatus,
  and every AP item of 18.2 asks the reader to predict the next state. One
  figure per apparatus, with a choice of step (rod near, rod touching,
  ground on, ground off, rod away) and the electrons drawn moving to where
  the step sends them, in the element palette because they are electrons,
  with a readout that counts the charge on each part and shows it summing
  to what it was, would turn the section's nine AP items into something
  the reader has already done. Induction becomes the moment the reader
  breaks the ground wire before moving the rod, and sees why the order
  matters.
- **Coulomb's law as two charges the reader drags.** Figure 18.17 is two
  arrows on two dots. Let the reader set each charge on a slider, in the
  charge hue with its sign on the label, and drag the separation, with the
  two force arrows growing and shrinking together and a readout writing
  $F = k|q_1 q_2|/r^2$ with the live numbers and, beside it, the
  gravitational force between the same two bodies if they were an
  electron and a proton, which never becomes visible at any setting. The
  ratio $2.27 \times 10^{39}$ then reads as a fact about the drawing.
- **From force field to electric field in one gesture.** Figure 18.18 is
  the chapter's conceptual hinge: the force of $Q$ on $q_1$ and on $q_2$
  differ, the field does not. A figure with a slider on the test charge
  that lets it run through zero and change sign, with the force arrow
  flipping and scaling while the field arrow beneath it stays fixed, is
  the definition $E = F/q$ made visible, and the readout that divides the
  one by the other and gets the same number every time is the argument.
- **Field lines that are drawn, not printed.** Figures 18.19 to 18.23 are
  one figure: two charges the reader can move and set, positive or
  negative, with the lines traced live from the positive charge, in the
  field hue, crowding where the field is strong and never crossing. A
  probe the reader drags reports the field vector at the point and, as an
  option, the arrows-at-points view of 18.19(a), so the reader sees that
  lines and arrows are one map. Set the charges equal and like, and the
  weak region between them appears; set them opposite, and the lines run
  across; set them $+5$ nC at 2 cm and $+10$ nC at 4 cm and the probe at the
  origin reads Example 18.4's $1.26 \times 10^{5}$ N/C at $63.4°$.
- **The conductor that empties itself.** Figure 18.26 and 18.27 are the
  same event: a field is switched on, free charges move, and the inside
  goes dark. A figure that lets the reader raise the applied field and
  watch the electrons of a sphere drift to one side until the inside field
  reads zero, with the lines outside bending to meet the surface at right
  angles, gives the three boxed properties as things that happen rather
  than things to memorise. Change the sphere to the pointed shape of
  18.31 and the crowding at the point, and the field that leaks from it,
  is the lightning rod.
- **The machines drawn as the physics they use.** The Van de Graaff, the
  photocopier's drum, the ink jet's deflection plates and the precipitator
  are each one of the chapter's results in a box: charge sprayed from a
  point, charge leaking from a photoconductor where the light falls, a
  charged drop deflected in a uniform field, a charged particle drawn to a
  grid. Each figure moves because the machine moves, and each readout
  writes the equation the machine is built on.
- **Colour carries the two quantities.** With charge and the electric field
  each in its own hue and the force in Chapter 4's, the three equations of
  the chapter, $F = kq_1q_2/r^2$, $E = F/q$ and $F = qE$, read as three
  colours on every readout, and a charge's sign is a sign on a label, so
  that a negative charge is not a differently coloured thing but the same
  kind of thing pointing the other way.

## Left for a later pass

- **A constants sheet.** $k$, $|q_\text{e}|$, the electron and proton
  masses and $G$ are all written in this chapter, and the book's rules say
  a constants sheet has been wanted since Chapter 4; this chapter and the
  next would be the place to add it.
- **Chapter 19's symbols.** The chapter's `E_field` row is the one Chapter
  19 writes in V/m; its `q` and `Q_charge` rows are the charges Chapter 19's
  capacitors carry. Both chapters were prepared in one job, and whichever
  merged second reused the rows as `config.md` records.
