# Plan: 4.8 Extended Topic: The Four Basic Forces—An Introduction (m42137)

Source: `source.md` (converted from CNXML), read against the module itself
for Table 4.1, its footnote and the figure widths, which the converter
flattens. Status: built 2026-09-11 without a review stop, on Chen's
instruction to finish the book in one job; the per-section stop of rule 2,
the plan review of rule 5 and the user picks of rule 15 are replaced by
this file, written before the section was built and left for review after.

The chapter's closing extended topic, and the one qualitative section of
Chapter 4: no equation, no worked example, no Check Your Understanding
box. Five numbered figures (two sketches, three photographs), one table,
six AP items, three conceptual questions and four problems, one of which
belongs to 4.3. It stays a page of its own (rule 11).

## Sub-concepts (page headers)

The book prints one header of its own, "Action at a Distance: Concept of a
Field", which is kept as the header of the block it opens. The rest is one
long run of argument, split here into one block per idea:

1. `four-forces` **The four basic forces** (book: the opening
   simplification, the naming of the four forces, the note Concept
   Connections: The Four Basic Forces, and Table 4.1 with its footnote).
   `sim-strengths` sits at the end of the block.
2. `gravity-and-em` **The gravitational and the electromagnetic force**
   (book: why so weak a force is noticed at all, and the paragraph on
   electromagnetic forces cancelling for macroscopic objects and on the
   unification of electricity and magnetism).
3. `unification` **Unifying the four forces** (book: the note Concept
   Connections: Unifying Forces, the Grand Unified Theories paragraph and
   the electroweak force, and the closing paragraph on simplicity).
4. `field` **Action at a Distance: Concept of a Field**, the book's own
   header (book: all forces act at a distance, the definition of a force
   field, the test object, Earth's gravitational field and $w = mg$,
   Figure 4.24, and the note Concept Connections: Force Fields).
5. `exchange` **Carrier particles and the exchange of force** (book: what
   the field leaves unanswered, Yukawa and particle exchange, Figure
   4.25, the paragraph on quarks and the Large Hadron Collider, and
   Figure 4.26).
6. `gravitational-waves` **Gravitational waves and what they are looking
   for** (book: the search for gravitational waves, LIGO, the 2015
   detection, LISA and Figure 4.27, and the paragraph on Penrose, Genzel
   and Ghez with the Event Horizon Telescope image, Figure 4.28).

The section defines no symbol and states no equation, so it has no
variable or equation row in `chapter.json` and asks for no anchor. Its two
glossary terms, force field and carrier particle, are already in the
chapter's table. The cross references to Uniform Circular Motion and
Gravitation, Electric Charge and Electric Field, Magnetism, Radioactivity
and Nuclear Physics and Particle Physics are plain text, as the chapter
config decided, since none of those chapters is built.

Learning objectives, the section summary and the glossary come out of the
running text into the views. Every exercise goes to the Exercises
document; the section has no Check Your Understanding box and the chapter
config sends AP items to the Exercises document, so nothing is inline.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| four-basic-forces | idea | four-forces | Table 4.1; AP items 1, 3, 5 and the three written AP items; CQ 1 and 2; problems 1 and 3 |
| force-field | idea | field | the glossary term; Figure 4.24; Earth's gravitational field and $w = mg$; AP item 4 |
| carrier-particle | idea | exchange | the glossary term; Figure 4.25; the carrier-particle column of Table 4.1; CQ 3 |

The section leans on `force`, `friction` and `tension` from earlier in the
chapter and on `weight` for the gravitational field, which are its
prerequisite edges in `book.json`. No node is left without a book exercise
except `force-field`, which AP item 4 touches and no problem tests on its
own; nothing is generated for it (rule 13).

## Figures

id · replaces · concepts · what moves · sliders · headline · graph · 3D

1. `sim-field` · replaces Figure 4.24 (the electric force field between a
   positive and a negative charge) · force-field · **still**: the field
   has no time in it, and the picture answers its sliders and nothing
   else, so it registers no cycle and carries no transport (rule 14). A
   positive charge on the left and a negative charge on the right, the
   field lines traced from one to the other as the book draws them, and a
   test charge the reader places anywhere in the field; the force on the
   test charge is drawn along the field line through it, in the force
   hue, and the field lines never move when the test charge changes ·
   the test charge's position across the field $x$ (−2.40 to 2.40 m, step
   0.05, default 0.20, ink) and up the field $y$ (−1.15 to 1.15 m, step
   0.05, default 0.70, ink), and the size of the test charge $q$ (1.0 to
   4.0 units, step 0.5, default 2.0, ink) · "the force on the test charge
   is 1.16 and points 16° below the axis", with the distance to each
   charge written on the dashed line that runs to it · none:
   the field is the drawing · no. Readout: $\kF = qE = (2.0)(0.58) =
   1.16$, with $E$ in units of the field midway between the two charges;
   small line on the field being a characteristic of the two charges that
   make it, so that changing $q$ changes the arrow and leaves the lines
   where they are. Draws force.
2. `sim-exchange` · replaces Figure 4.25 (the basketball thrown and
   caught, and the meson exchanged between a proton and a neutron) ·
   carrier-particle · **moving**: the idea is an exchange, which takes
   time, so the figure runs a finite loop of about five seconds with the
   scrubber. Two rows in one canvas, the people above and the proton and
   neutron below, doing the same thing in step: the ball leaves the
   thrower, who is pushed back; it crosses; the catcher takes it and is
   pushed back in turn, and the two end further apart than they began,
   without having touched · the force of the exchange $\kF$ (20 to 200 N,
   step 5, default 80, force hue) and the separation of the pair $d$ (3.0
   to 10.0 m, step 0.5, default 6.0, ink) · "the ball is in flight, and
   the 80 N it carried away has pushed the thrower back from the catcher"
   · none: the two rows are the drawing · no. Readout: $\kFone = \kFtwo =
   80\ \text{N}$; small line saying that the thrower is pushed back as
   the ball leaves and the catcher as it arrives, and that a meson
   exchanged between a proton and a neutron carries the strong nuclear
   force the same way. The people, the ball, the proton, the neutron and
   the meson are ink; the arrows and their labels are the force hue.
   Draws force.
3. `sim-strengths` · new, a Sim with no number · four-basic-forces ·
   **still**: a comparison of four numbers has no time in it. A
   logarithmic ladder of relative strength from $10^{-40}$ to $10^{0}$
   with the four forces of Table 4.1 marked on it, each as a bar from the
   foot of the ladder to its own strength, and a bracket between the two
   the reader picks that counts the powers of ten between them · force A
   (1 to 4, step 1, default 4, ink) and force B (1 to 4, step 1, default
   2, ink), the four numbered on the canvas in the order Table 4.1 prints
   them · "the strong nuclear force is 10² times the electromagnetic
   force" · none: the ladder is the graph · no. Readout:
   $\dfrac{\text{strong nuclear}}{\text{electromagnetic}} =
   \dfrac{1}{10^{-2}} = 10^{2}$; small line on gravity being the weakest
   of the four by a very long way and noticed only because it is always
   attractive and never cancels. All ink, since a relative strength is a
   dimensionless comparison (chapter config). Draws nothing.

Photographs, three, all kept:

- Figure 4.26, the Large Hadron Collider (credit: Frank Hommes):
  **keep** as `fig-lhc`. The text says "(See Figure 4.26.)" and the
  photograph shows the accelerator the passage is about. Width 400.
- Figure 4.27, the drawing of LISA's orbit (credit: NASA): **keep** as
  `fig-lisa`. The text points at it where it describes the three
  satellites in their triangle. Width 350.
- Figure 4.28, the Event Horizon Telescope image of the black hole at the
  centre of M87 (credit: EHT Collaboration/NASA APOD): **keep** as
  `fig-m87`. The paragraph before it is about the first actual image of a
  black hole, which is what the photograph is. Width 250.

Figures that serve exercises: none on this page. The graph in the
Critical Thinking item's solution goes with that item to 4.3.

Extra simulations (rule 15). Thought of, judged, and only one built:

- **Built.** `sim-strengths`, the ladder of relative strengths. The
  section's own concept, the four basic forces, is carried by a table and
  by nothing else, and three of the four problems ask for the ratio of
  one force's strength to another's. The ladder is where the reader sees
  that thirty-six powers of ten separate gravity from electromagnetism,
  which no table of exponents makes felt.
- **Left.** A sim of the electroweak unification, in which raising the
  temperature of the early universe merges two of the four bars: the
  section gives no temperature and no energy at which it happens, so the
  figure would have to invent its own numbers.
- **Left.** A LIGO interferometer whose two arms change length as a
  gravitational wave passes: it belongs to the chapter on waves and would
  need the wave ideas of Chapter 16 to read, and the passage here is
  about the search rather than the instrument.
- **Left.** A sim in which the electromagnetic forces of a macroscopic
  body cancel while its gravitational forces add, which is the answer to
  conceptual question 1: it needs Coulomb's law, which the book does not
  state until Electric Charge and Electric Field.

## Tables

One, Table 4.1 Properties of the Four Basic Forces, in `four-forces`, as
a `div.book-table` with the book's number and title and never a
`<figure>` (chapter config). Its five columns and four rows are the
book's, and the footnote the book prints on the title (the graviton, the
vector bosons and the eight gluons) is kept under the table.

Two things in the table are the book's own and are printed as the book
prints them. The strength of the weak nuclear force is given as
$10^{-6}$, while the answer the book keys to problem 1 makes it
$10^{-13}$; and the range of the strong nuclear force is given as
$\infty$, while the prose above says that the weak and strong nuclear
forces act "over an extremely short range, the size of a nucleus or
less". The publisher's own page for this section prints both exactly as
the bundle does, so both stand, `sim-strengths` reads the table's numbers
and not the key's, and `exercise_notes` says so.

## Exercises

All at the end; the section has no Check Your Understanding box and the
chapter config sends AP items to the Exercises document.

- 6 AP items. Three are keyed choice items and are kept as graded
  choices with the book's options: `ap1` (which phenomenon describes the
  normal force, keyed (b)), `ap3` (which force explains tension in a
  rope, keyed (b)), `ap5` (when the other three forces can be ignored,
  keyed (d)). Three are written answers with no key and are kept as open
  items with an AI-marked suggested approach: `ap2` (the ball bouncing
  off the ground), `ap4` (how interatomic electric forces produce the
  normal force), `ap6` (a situation in which gravity dominates).
- 3 conceptual questions, none keyed, all open with an AI-marked
  suggested approach: `cq1` (why so weak a force is noticed), `cq2` (the
  dominant force between astronomical objects), `cq3` (an exchange that
  gives an attractive force).
- 2 problems kept with the book's key: `p1` (the weak force relative to
  the strong and to the electromagnetic, two parts) and `p3` (the strong
  force relative to the electromagnetic).
- 1 problem left out, having no answer in the book's key: problem 2
  (`fs-id2670330`, the three ratios of the gravitational force).
- 1 item taken elsewhere: the Critical Thinking item (`exer-16012`, the
  two boxes pushed different distances) turns on the second law and on
  $v^2 = v_0^2 + 2a\Delta x$ and not on the four basic forces, so it is
  set on the page for 4.3 with `source_section` 4.8, and both sections'
  `exercise_notes` say so. Its solution figure goes with it.
- Nothing is held from another section: no exercise elsewhere in the
  chapter turns on the four basic forces.
- No generated questions.
- Weights: `cq3` is about the exchange and only names the forces it
  carries, so `four-basic-forces` gets weight 1 there; `ap1` and `ap4`
  lean on the four forces and merely name the normal force of 4.5, and
  `ap3` merely names the tension of 4.5, so those get weight 1;
  `force-field` on `ap4` gets weight 1, since the item turns on the
  electromagnetic force and only touches the field between atoms that do
  not meet.

## Views

- Formulas: nothing. The section states no equation; the $w = mg$ it
  recalls is 4.3's row.
- Definitions: the two glossary terms, force field and carrier particle,
  already in `chapter.json`.
- Concept map: the three nodes above, with their edges into `force`,
  `friction`, `tension` and `weight`.

## Colour

The page binds one type, force: the arrows on the test charge in
`sim-field` and on the two partners in `sim-exchange`, and the force
slider of `sim-exchange`. Everything else on the page is untyped and in
ink, as the chapter config says: the placement and size of the test
charge, the separation of the exchanging pair, the numbering of the four
forces and their dimensionless relative strengths. No new hue, no new
macro, no new symbol row.

## Wanted at chapter level

Nothing. The section has no variable row and no equation row in
`chapter.json`, so it asks for no anchor, and every concept, symbol and
glossary term it needs is already merged.
