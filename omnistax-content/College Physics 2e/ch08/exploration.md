# Exploration: College Physics 2e, Chapter 8 Linear Momentum and Collisions

Written while converting the chapter (2026-09-11), as part of the job that
finishes the book. Source of record is the CNXML bundle
(`source/osbooks-college-physics-bundle`), not the PDF, which this checkout
does not carry. The book's organisation (book → chapters → sections →
untitled narrative headers, one CNXML module per section, every piece of
apparatus inside its module) is as recorded in `ch02/exploration.md` and
`ch03/exploration.md`; nothing differs here.

## Why this chapter

Chapter 8 gives the reader the second of the two conserved quantities.
It begins by naming momentum, the product of a mass and a velocity, and
restating Newton's second law in terms of it, which is the form that holds
when the mass of a system changes. It then names the impulse, shows that
the changes in momentum of two colliding bodies cancel because the forces
between them do, and so arrives at the conservation of momentum. The next
three sections apply that to collisions: elastic in one dimension, where
internal kinetic energy is conserved too; inelastic in one dimension, where
it is not; and collisions in the plane, where the two conservation
equations are written along perpendicular axes. The last section turns the
same principle on a system that throws part of itself away, and gets the
acceleration of a rocket.

The chapter leans backward on Chapter 4 (Newton's second and third laws,
the net external force, the system of interest, internal forces cancelling,
thrust), on Chapter 3 (components, resolving a vector, recovering a
magnitude and a direction from components, the projectile) and on Chapter 2
(velocity, acceleration, free fall, discarding an unphysical root). It
leans sideways on Chapter 7, which is being prepared in the same wave:
kinetic energy is what internal kinetic energy is a sum of, and every
inelastic-collision problem asks how much of it was lost.

## Chapter 8 modules

Figures counted include the figures that sit inside exercises. CYU = Check
Your Understanding, AP = AP test prep items, CQ = conceptual questions,
Sol = exercises with an inline solution.

| Section | Module | Ex. | Fig. | Tables | Eq. | Defs | CYU | AP | CQ | Prob. | Sol. |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m42155 | 0 | 1 photo | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 8.1 Linear Momentum and Force | m42156 | 2 | 0 | 0 | 18 | 2 | 0 | 2 | 4 | 6 | 4 |
| 8.2 Impulse | m42159 | 1 | 3 (1 narrative sketch, 2 in AP items) | 1 (in an AP item) | 9 | 2 | 0 | 12 | 3 | 16 | 14 |
| 8.3 Conservation of Momentum | m42162 | 0 | 4 (3 narrative sketches, 1 in an AP item) | 0 | 11 | 3 | 0 | 6 | 7 | 5 | 6 |
| 8.4 Elastic Collisions in One Dimension | m42163 | 1 | 2 (1 narrative sketch, 1 in an AP item) | 1 (in an AP item) | 12 | 2 | 0 | 20 | 1 | 3 | 11 |
| 8.5 Inelastic Collisions in One Dimension | m42164 | 2 | 3 sketches | 0 | 13 | 2 | 0 | 10 | 3 | 14 | 13 |
| 8.6 Collisions of Point Masses in Two Dimensions | m42165 | 1 | 3 (2 narrative sketches, 1 in a CQ) | 0 | 26 | 1 | 0 | 2 | 1 | 8 | 5 |
| 8.7 Introduction to Rocket Propulsion | m42166 | 1 | 2 sketches | 0 | 7 | 0 | 0 | 0 | 3 | 12 | 5 |

No section of the chapter has a Check Your Understanding box, so the inline
place of rule 12 holds nothing here unless a section agent judges one of
the shorter conceptual questions to be a Remember or Understand check that
belongs beside its passage. 8.4 is the odd one of the chapter: three pages
of narrative and twenty AP items, more AP items than any section built so
far. 8.1 is the only section with no figure at all.

The bundle's image files are named for the first edition, where this was
Chapter 9 (`Figure_09_02_01a.jpg` is the force-against-time graph of 8.2),
and the AP items carry files named for the second edition's Chapter 8
(`Figure_08_M2_Bounce.jpg`). The numbers below are read off the CNXML the
way Chapters 2 to 6 read theirs: every figure of the narrative, of a worked
example and of a boxed note is numbered in order, and a figure inside a
problem, a conceptual question or an AP item is not. The introduction's
photograph is Figure 8.1, so 8.1 has no figure, 8.2's graph is Figure 8.2,
8.3's three sketches are 8.3 to 8.5, 8.4's is 8.6, 8.5's three are 8.7 to
8.9, 8.6's two are 8.10 and 8.11 and 8.7's two are 8.12 and 8.13. The
widths the book prints them at, from the CNXML `<image width>`: 8.2 at 300,
8.3 at 550, 8.4 at 520, 8.5 at 350, 8.6 at 300, 8.7 at 520, 8.8 at 500,
8.9 at 450, 8.10 at 420, 8.11 at 300 and 8.12 at 300, 8.13 at 250. The
introduction's photograph and the four figures that sit inside exercises
carry no width, so their `widths` stay empty. The one figure of a
conceptual question that does carry a width is 8.6's cube and small object,
at 400.

## Where the answers are

The key covers 58 of the chapter's 118 exercises, the odd-numbered ones of
each run, with one wrinkle in 8.5, where problems 7 and 8 are both keyed
and 9 is not. By section: 8.1's AP item 1 and problems 1, 3 and 5; 8.2's AP
items 1, 3, 5, 7, 9 and 11 and problems 1, 3, 5, 7, 9, 11, 13 and 15; 8.3's
AP items 1, 3 and 5 and problems 1, 3 and 5; 8.4's AP items 1, 3, 5, 7, 9,
11, 13, 15, 17 and 19 and problem 2; 8.5's AP items 1, 3, 5, 7 and 9 and
problems 1, 3, 5, 7, 8, 10, 12 and 14; 8.6's AP item 1 and problems 1, 3, 5
and 7; and 8.7's problems 1, 3, 5, 8 and 9. No conceptual question is keyed
anywhere in the chapter.

Sixty exercises have no key. The conceptual questions and the unkeyed AP
items are kept as open items with an AI-marked suggested approach, as rule
13 and the 2.5, 3.1 and 4.x precedents do; the unkeyed problems are left
out and named in their section's `exercise_notes`. The two Construct Your
Own Problem items and the one Unreasonable Results item of 8.7 are unkeyed
and left out with the rest.

## Observations that affect the plan

- **The chapter declares one new type, `momentum`.** Momentum is a kind of
  physical quantity the book has not met: the dimension is
  $\text{kg}\cdot\text{m/s}$, and it is neither a velocity nor a force.
  Every figure of the chapter draws it, as an arrow beside the velocity
  arrow that is not the same length, and every readout states it, so rule 7
  gives it a hue of its own. Impulse has the same dimension and is the same
  quantity: the book says outright that "impulse is the same as the change
  in momentum", so $\Delta p$ and $F_{\text{net}}\Delta t$ are momentum and
  wear the momentum hue, and the type's label is "momentum, impulse". The
  type id is the canonical `momentum` from Plan.md's list. Nothing else in
  the chapter is a new kind: the forces are forces, the exhaust velocity is
  a velocity, the internal kinetic energy is an energy, and mass, the
  ejected mass $\Delta m$, the mass ratio $m_0/m_{\text{r}}$ and the
  scattering angles $\theta_1$ and $\theta_2$ stay untyped and in ink, as
  the book's own rules say.
- **The symbol table needs thirty-three rows, and the primes are most of
  them.** The chapter writes the state after a collision with a prime, and
  it does this everywhere: ${p'}_1$, ${p'}_2$, ${p'}_{\text{tot}}$,
  ${v'}_1$, ${v'}_2$, $v'$, ${\text{KE}'}_{\text{int}}$. A primed symbol is
  the same type as the unprimed one and differs by its decoration, which is
  exactly what rule 7 says a variant does, so each gets a row of its own
  with the same type and a macro whose name ends in `prime`
  (`\kponeprime`, `\kvtwoprime`, `\kvprime`). The chapter uses, rather than
  restages, the rows Chapters 2 to 6 merged first: `v`, `v_0`, `vf`,
  `Δv`, `Δt`, `t`, `a`, `g`, `m`, `b`, `KE`, `F_net`, `F_1`, `F_2`,
  `v_1`, `v_2` (Chapter 6's, LaTeX $v_1$ and $v_2$, which is what this
  chapter writes for the two colliding objects) and `θ`. Two keys had to be
  spelled around rows that were already taken: the initial velocity of the
  tennis ball is `v_i` (LaTeX $v_i$, macro `\kvi`) because `v0` is
  Chapter 2's $v_0$ and the book writes an italic $i$ here, and the exhaust
  velocity is `v_e` (macro `\kve`) rather than anything shorter.
- **8.1 has no figure of its own, and its sims are the chapter's first.**
  The section states two results and works two examples, and neither is
  drawn. A sim that sets a mass and a speed against each other, with the
  football player and the football of the worked example as its defaults,
  is the figure the section wants; a second, the tennis ball struck for
  five milliseconds, shows why a short contact time means a large force.
  Both are Sims with no number, since they replace nothing in the book.
- **8.2's one book figure is a graph, and it is the section's whole idea
  about effective force.** Figure 8.2 draws the actual force on a bouncing
  ball against time and the effective force that has the same area under
  it. A sim that lets the reader change the shape and the duration of the
  bump while the rectangle of the effective force keeps the same area is a
  faithful transformation of that figure, and it carries its number.
- **8.2's two AP graph items carry figures of their own.**
  `fs-id3327236` (a rectangular pulse of 15 N from 0.080 s to 0.24 s) and
  `fs-id2014894` (a trapezoid over the same interval) each print a graph of
  the force a rigid wall exerts against time. Both are figures that serve
  exercises and are copied over faithfully under rule 14, labelled Figure
  with no number, and neither carries a width in the CNXML.
- **8.3's argument is five lines of algebra and one drawing.** Figure 8.3
  draws the two cars before and after the bump with the momentum of each
  labelled, and the derivation that follows it is the chapter's spine. One
  sim that runs the bump, draws the two momentum arrows and the total, and
  prints the total before and against after, replaces Figure 8.3 and is
  worth more than any of the section's other figures. Figure 8.4 (the space
  probe separating in flight) and Figure 8.5 (the particle scattering
  backward) are the section's other two and carry their numbers.
- **8.4 carries twenty AP items and three problems, and most of the AP
  items are about 8.5.** Nine of the twenty describe an inelastic or a
  perfectly inelastic collision, or ask what distinguishes the two kinds
  (`fs-id1442938`, `fs-id1862350`, `fs-id2389032`, `fs-id1741049`,
  `fs-id1971159`, `fs-id2208648`, `fs-id1342061`, `fs-id2332080`,
  `fs-id2494812`). Rule 12 puts an exercise with the section that
  introduces what it tests, so the ones that turn on an inelastic collision
  or on the centre-of-mass velocity of one are held for 8.5 with
  `source_section: "8.4"`, and both sections' `exercise_notes` say so. The
  section agents decide item by item; the rule of thumb is that an item
  that needs only "momentum is conserved, kinetic energy may not be" is
  8.4's, and one that needs the objects to stick together and asks for a
  number is 8.5's.
- **The trade runs the other way too.** 8.5's first two AP items
  (`fs-id2060437` and `fs-id1367751`) are about an *elastic* collision of
  two masses and ask for the two final velocities, which 8.4 introduces, so
  both are held for 8.4 with `source_section: "8.5"` and both sections'
  `exercise_notes` say so. 8.5's `fs-id1538341`, where the two objects do
  not stick together and one final velocity is given, is elastic in all but
  name and belongs to 8.4 as well.
- **8.4's centre-of-mass items reach for an idea the book has not given
  here.** Six AP items across 8.3, 8.4 and 8.5 ask about the velocity of
  the centre of mass of a two-object system. The book defines the centre of
  mass in 6.5 and mentions in 8.3 that the total momentum is the momentum
  of the centre of mass, and that one sentence is all the text the reader
  has. The items are kept where their collision belongs, their `cite`
  points at that sentence of 8.3, and their suggested approaches lean on
  it; `center-of-mass` is 6.5's node and the items are tagged with it.
- **8.5 is the heaviest section of the chapter.** It carries two worked
  examples, three sketches, ten AP items and fourteen problems, and its
  idea is the one every collision problem in the world turns on. Figure 8.7
  (two equal masses meeting and stopping), Figure 8.8 (the goalie catching
  the puck) and Figure 8.9 (the two carts and the compressed spring) are
  three drawings of the same one-dimensional scene with different masses
  and different outcomes, so they fold naturally: one sim with the two
  masses and the two initial velocities as sliders, a switch for whether
  the objects stick, and readouts for the total momentum and for the
  internal kinetic energy before and after, shows all three. The plan
  should say which number it carries and which it folds.
- **8.6 is the chapter's equation-heavy section and has an obvious sim.**
  A sim in which the reader sets the two masses, the incoming speed and the
  scattering angle $\theta_1$, and watches $\theta_2$ and ${v'}_2$ follow
  from the two conservation equations, with the momentum arrows and their
  components drawn, replaces Figure 8.10 and serves the worked example of
  Figure 8.11 as well. It also shows the ninety-degree separation appearing
  as the masses are made equal, which is the section's best result and one
  the print figures cannot show at all.
- **8.7 draws a rocket and a photograph.** Figure 8.12 is a sketch of a
  rocket before and after ejecting a mass of gas, with its free-body
  diagram, and becomes a sim whose sliders are the exhaust velocity, the
  burn rate and the mass, with the acceleration read out. Figure 8.13 is a
  NASA photograph of the space shuttle launching and is kept with its
  number, its caption and its credit clause, since the paragraph above it
  is about the shuttle.
- **The 8.7 summary is printed twice by the converter.** The three-item
  numbered list of the factors affecting a rocket's acceleration appears
  twice in `source.md`, because a nested list inside a list item is emitted
  at both levels, as it was for 3.4. The section's `summary_html` is
  written from the CNXML once.
- **One PhET link is dropped.** 8.4's Collision Lab
  (`https://openstax.org/l/28collisionlab`), as every chapter has dropped
  them. It is named in 8.4's `notes`. The chapter's five Take-Home
  Investigations and Experiments (hand movement and impulse in 8.2, the
  tennis ball and basketball and the two tennis balls on a string in 8.3,
  the ice cubes in 8.4, the bouncing tennis ball in 8.5, the balloon in
  8.7) are kept verbatim as the book's boxed notes, as are the four Making
  Connections boxes.
- **Cross references to chapters the app has not built stay plain text.**
  8.6 points at Medical Applications of Nuclear Physics and at Particle
  Physics, and 8.3 points at Uniform Circular Motion and Gravitation, which
  is built; both stay plain text, as Chapter 3's config decided. 8.6's
  problem `fs-id3136237` cites an equation of 8.5 by a module link, which
  becomes the book's own wording, "you cannot use the equation for a
  perfectly inelastic collision", with a `cite` into 8.5 only if the
  section agent can point at a span it owns; otherwise the sentence is kept
  as the book prints it with the reference plain.
- **8.5's problem `fs-id1664993` uses data from 8.1.** It asks the reader
  to take the mass and speed of the football player and the football from
  the earlier section and work the catch as an inelastic collision. It is
  keyed and stays in 8.5; its prompt keeps the book's reference to the
  earlier section as plain text.

## A converter defect this chapter hits

A `<media>` element nested inside a `<para>`, rather than inside a
`<figure>`, is dropped by `tools/cnxml2md.py`: the paragraph's text is kept
and the image is not. The chapter has one, and it matters:

- **8.4's AP item `fs-id1165124579546`** opens with an inline image,
  `../../media/CNX_APPhysics_08_M3_aircars.jpg`, a graph of the position of
  two colliding air carts against time, and then asks "This figure shows
  the positions of two colliding objects measured before, during, and after
  a collision." The image is absent from `source.md`. The following item,
  `fs-id2378587`, says "For the above graph" and needs the same picture.
  The 8.4 agent reads the image and its alt text out of the CNXML
  (`m42163/index.cnxml`, the `<media id="fs-34234342">` inside
  `<para id="fs-id1849450">`), copies the file to `media/ch08/`, and builds
  it as a figure that serves exercises, labelled Figure with no number,
  carried on both items' cards. Its alt text in the CNXML describes the two
  lines in full, so the figure can be drawn faithfully from it: object A
  runs from 0 m at 0 s to 1.5 m at 0.6 s and back to 0 m at 1.2 s, and
  object B runs from 2.0 m at 0 s to 1.5 m at 0.6 s and back to 2.0 m at
  1.2 s.

The two tables of the chapter do not hit the defect the brief warned of: both
`fs-id2204590` in 8.2 and `fs-id1165124545950` in 8.4 are children of their
`<problem>` rather than of a paragraph, and the converter lays both out as
markdown tables in `source.md`. They are the tables of AP items and travel
with the items, as 3.2's did; neither is a book table, so the chapter has
no `div.book-table`.

## What the tooling needs

- One new type (`momentum`), thirty-three new symbol rows, and no new
  figlib primitive. The scenes the sims want (two blocks on a line, two
  carts and a spring, a puck and a goalie, two discs scattering in a plane,
  a rocket and its plume) are drawn in the section modules out of the
  primitives Chapters 2, 3 and 6 already use.
- The colour scheme now has to dress twelve types. The palette check is the
  app's, and the chapter pass should look at a page of 8.6, where momentum,
  velocity and force are all bound at once, and say whether the three hues
  are far enough apart.
- Nothing else: the shell, the views and the validator are unchanged.

## Left for a later pass

- The chapter keeps reaching for the centre of mass, which the book defines
  in 6.5 and never develops. Eight exercises across 8.3 to 8.6 ask for the
  centre-of-mass velocity of a two-object system, and nothing in the text
  of this chapter derives it. A sim that draws the centre of mass of two
  colliding objects moving at a constant velocity through the collision
  would serve all eight, and it belongs to 8.3 and 6.5 at once; it is
  proposed in 8.3's plan and left for the chapter pass to place if 8.3's
  agent does not build it.
- 8.2's derivation problem `fs-id1357831` asks the reader to derive
  $\text{KE} = p^2/2m$ from the definitions of momentum and kinetic energy.
  It is keyed and it is the one place in the chapter where momentum and
  energy are related as formulas. It belongs with Chapter 7 as much as with
  8.2; it stays in 8.2, and the Chapter 7 pass may want to link to it.
