# Exploration: College Physics 2e, Chapter 4 Dynamics: Force and Newton’s Laws of Motion

Written before the chapter was prepared (2026-09-11). The source of record is
the CNXML bundle (`source/osbooks-college-physics-bundle`); the PDF is not in
`source/` at present, so no page numbers could be read off it and the figure
numbers were settled another way (below). The book's organisation (book →
chapters → sections → untitled narrative headers, one CNXML module per
section, all the apparatus inside the module) is as recorded in
`ch02/exploration.md`; nothing differs here.

## Why this chapter

Chen asked for the rest of the book in one job, and Chapter 4 is the first of
the first wave. It is where the book stops describing motion and starts
explaining it. Eight sections take the reader from a working definition of
force, through the three laws, to the named forces a free-body diagram is
drawn from (weight, the normal force, tension, friction), a procedure for
solving any problem about forces, four worked applications of it, and a
closing extended topic on the four basic forces. Everything after this chapter
is built on it, and the placeholder concepts `newtons-first-law` (4.2),
`newtons-second-law` (4.3) and `tension` (4.5) have been waiting in
`book.json` since Chapter 16 was built.

## Chapter 4 modules

Figures counted include the figures inside exercises. CYU = Check Your
Understanding, AP = AP test prep items, CQ = conceptual questions, Sol =
exercises with an inline solution.

| Section | Module | Ex. | Fig. | Tables | Eq. | Defs | CYU | AP | CQ | Prob. | Sol. |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m42129 | 0 | 2 photos | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 4.1 Development of Force Concept | m42069 | 0 | 5 sketches | 0 | 0 | 4 | 0 | 4 (2 keyed) | 2 | 0 | 0 |
| 4.2 Newton’s First Law of Motion: Inertia | m42130 | 0 | 0 | 0 | 0 | 4 | 1 (keyed) | 0 | 2 | 0 | 0 |
| 4.3 Newton’s Second Law of Motion: Concept of a System | m42073 | 2 | 7 sketches | 0 | 18 | 7 | 0 | 0 | 10 | 14 | 6 |
| 4.4 Newton’s Third Law of Motion: Symmetry in Forces | m42074 | 2 | 3 sketches | 0 | 12 | 2 | 0 | 11 (6 keyed) | 6 | 2 | 1 |
| 4.5 Normal, Tension, and Other Examples of Forces | m42075 | 2 | 13 (1 photo, 12 sketches) | 0 | 34 | 3 | 0 | 7 (3 keyed) | 2 | 6 | 3 |
| 4.6 Problem-Solving Strategies | m42076 | 0 | 6 sketches | 0 | 2 | 0 | 0 | 3 (2 keyed) | 0 | 17 | 6 |
| 4.7 Further Applications of Newton’s Laws of Motion | m42132 | 4 | 6 sketches | 0 | 33 | 0 | 0 | 3 (1 keyed) | 2 | 12 | 5 |
| 4.8 Extended Topic: The Four Basic Forces—An Introduction | m42137 | 0 | 6 (3 photos, 3 sketches) | 1 | 0 | 2 | 0 | 6 (3 keyed) | 3 | 4 | 3 |

The chapter has one Check Your Understanding box in the whole of it, in 4.2,
so the inline place of rule 12 will hold almost nothing here unless a section
agent judges a short conceptual question to be a Remember or Understand check
that belongs beside its passage. The answer key covers the odd-numbered
problems of 4.3, 4.4, 4.6, 4.7 and 4.8, three of the six problems of 4.5, and
about half the AP items; no conceptual question is keyed, and the Construct
Your Own Problem and Unreasonable Results items of 4.6 and 4.7 are unkeyed.

## The figure numbers

The rule that reproduced the PDF's numbers for Chapters 2 and 3 is that every
figure of the narrative, of a worked example and of a boxed note is numbered
in order across the chapter, and a figure that sits under Test Prep for AP
Courses, Conceptual Questions or Problem Exercises is not. Applying it here
gives the intro 4.1 and 4.2, then 4.3 to 4.4 in 4.1, none in 4.2, 4.5 to 4.8
in 4.3, 4.9 to 4.10 in 4.4, 4.11 to 4.19 in 4.5, 4.20 in 4.6, 4.21 to 4.23 in
4.7 and 4.24 to 4.28 in 4.8. The numbering was checked against the
publisher's own pages for 4.3 (Figures 4.5 to 4.8), 4.4 (4.9 and 4.10), 4.6
(4.20) and 4.8 (4.24 to 4.28, and Table 4.1), and it agrees in every case,
including the three rocket-sled drawings in 4.3's problem set, which the
publisher leaves unnumbered even though they sit outside any `<exercise>`
element in the CNXML.

| Section | Numbered figures | Unnumbered figures that serve exercises |
|---|---|---|
| Intro | 4.1 dolphin, 4.2 the *Principia* | — |
| 4.1 | 4.3 two skaters and the free-body diagram, 4.4 the spring standard | 3 in the racetrack AP item |
| 4.2 | — | — |
| 4.3 | 4.5 wagon, 4.6 basketball and SUV, 4.7 lawn mower, 4.8 rocket sled | 3 rocket-sled drawings (two of them the same image) |
| 4.4 | 4.9 swimmer, 4.10 professor and cart | 1 free-body diagram in an AP solution |
| 4.5 | 4.11 dog food on the table, 4.12 skier, 4.13 resolving weight, 4.14 rope and mass, 4.15 tendon and brake cable, 4.16 tightrope, 4.17 tension components, 4.18 chain and car, 4.19 Golden Gate Bridge | toboggan, kite, leg traction, baby on a spring scale |
| 4.6 | 4.20 Tarzan | F₁ and F₂ adding, snow saucer, car in mud, braces, Superhero |
| 4.7 | 4.21 tugboats and barge, 4.22 traffic light, 4.23 scale in a lift | sliding block, Achilles tendon, rescue from a fire |
| 4.8 | 4.24 electric field, 4.25 basketball and meson exchange, 4.26 the LHC, 4.27 LISA, 4.28 the M87 black hole | the graph in the Critical Thinking solution |

## Observations that affect the plan

- Force is the new thing, and the chapter's whole drawing vocabulary is the
  free-body diagram: a dot with labelled arrows leaving it. Nearly every
  figure of the chapter is a scene beside a free-body diagram of the same
  situation, so a sim that lets the reader change a force and watch both the
  scene and the free-body diagram answer covers many of the book's figures at
  once. Every section from 4.3 on can lean on that one shape.
- No new type is needed, and none was merged. Weight, thrust, tension, the
  normal force, friction, drag, an applied force and a net force are all
  forces and take the force hue that `book.json` already declares; they differ
  from each other by subscript, as the book's own notation does. Mass stays
  untyped and in ink, as Plan.md decided, and so do the angle of an incline,
  the angle of a sagging wire and the dimensionless comparison of the four
  basic forces. The accelerations and velocities of the worked examples take
  the hues Chapter 2 gave them.
- The symbol table needed twenty-five new rows, all of them forces but the
  last. Two of the book's letters were already spoken for and had to be keyed
  under another name: the book writes both the thrust of 4.3 and the tension
  of 4.5 as $T$, but `T` is the period of Chapter 16, so the row is `T_force`
  (LaTeX $T$, macro `\kTf`) and the chapter's `variables` table gives it its
  two meanings; and the book writes friction as $f$, but `f` is the frequency
  of Chapter 16, so the row is `f_fric` (LaTeX $f$, macro `\kff`). Weight is
  `w` with the macro `\kwgt`, since `\kw` is the angular rate. The rest are
  plain: `F_net`, `F_netx`, `F_nety`, `N`, `w_par`, `w_perp`, `T_L`, `T_R`,
  `T_1`, `T_2`, `F_1`, `F_2`, `F_tot`, `F_x`, `F_y`, `F_perp`, `F_restore`,
  `F_D`, `F_s`, `F_prof`, `F_floor`, and `a_par` for the acceleration along a
  slope.
- The chapter leans on Chapter 2 for acceleration and the constant-acceleration
  equations (4.7's integrated problems are worked with them), on 2.7 for the
  acceleration due to gravity, which weight is written with, and on Chapter 3
  for everything about vectors: forces add head to tail in 4.1, by components
  in 4.3, and the weight is resolved onto a slope in 4.5 exactly as a
  displacement was resolved in 3.3. 4.6's rule that perpendicular axes give
  two independent one-dimensional problems is 3.1's independence of
  perpendicular motions carried over to forces. Chapter 1 supplies the units
  and the fundamental units that the newton is defined from.
- 4.8 is a table and five pictures and no equation. Its one table, Table 4.1
  Properties of the Four Basic Forces, stays in the text as a
  `div.book-table` with the book's number and title, as Chapter 1's tables
  do; it is not a figure. Three of its figures are photographs (the LHC, the
  M87 black hole) or an artist's drawing (LISA) and the text points at each of
  them, so they are kept as photographs; the electric field lines and the
  basketball-and-meson exchange are sketches to replace.
- 4.6 has no glossary entry, no worked example and no conceptual question: it
  is a procedure and seventeen problems. It is thin in the way 2.6 was thin
  and is not folded into a neighbour (rule 11).
- Two PhET notes, Gravity Force Lab in 4.4 and Forces in 1 Dimension in 4.5,
  are dropped, as the built chapters drop them, and each section's `notes`
  says so.
- 4.3 and 4.4 write their laws in more than one form. The second law is boxed
  three times, as $\mathbf{a} = \mathbf{F}_{\text{net}}/m$, as
  $\mathbf{F}_{\text{net}} = m\mathbf{a}$ and as the magnitude-only
  $F_{\text{net}} = ma$; the first two are important rows of the formula
  sheet and the third is not, since it differs only in its boldface.
- Two of 4.3's three problem-set drawings are the same image
  (`Figure_04_03_07-c153.jpg`, for the deceleration problem and for the
  passenger problem). It is copied over once, as the paths figure of 3.2 was,
  and carried on both cards.
- Seven of the chapter's bundle files have a space in their names
  (`Figure 04_01_01a-e066.jpg`, `Figure 04_03_01.jpg`, `Figure 04_03_03.jpg`,
  `Figure 04_05_04.jpg`, `Figure 04_06_01.jpg`, `Figure 04_07_03a.jpg`,
  `Figure 04_07_08a.jpg`). No file under `media/` carries a space, and
  Chapter 2 replaced the space with an underscore when it copied one, so a
  section that keeps one of these copies it as `Figure_04_03_01.jpg` and
  writes that name in its `originals`.
- The converter prints 4.6's numbered summary twice, as it printed 3.4's: a
  nested list inside a list item is emitted at both levels. The section's
  `summary_html` is written from the CNXML once.
- The CNXML types 4.5's problems `problem-exercises` where every other module
  types them `problems-exercises`, and 4.8's Critical Thinking item carries
  an empty `type=`. All of them are classed by the header they sit under, as
  this book's rules say.

## Exercises that belong to another section

- 4.1's first AP item (`fs-id1691415`, the two cars on the racetrack) asks for
  the direction of the net force at points around a track. Net external force
  is 4.3's, and the item is keyed, so it is held for 4.3 and both sections'
  `exercise_notes` say so. Its curved sections anticipate the centripetal
  force of Chapter 6; the keyed solution argues the straight sections only, so
  it stands as the book prints it.
- 4.1's other three AP items test that a body cannot exert a force on itself
  and what does exert the force on a rowed boat, which is 4.1's external
  force, and they stay. Two of them are unkeyed choice items and are kept as
  open items with their options as the book prints them and an AI-marked
  approach.
- 4.5's first AP item (`fs-id1367314`, the force of gravity on an arrow) is
  $w = mg$ and nothing else, which is 4.3's weight; it is unkeyed, so 4.3
  takes it with `source_section` 4.5 as an open item with an AI-marked
  approach.
- 4.7's third AP item (`fs-id1046422`, a sliding block with a coefficient of
  friction of 0.20) needs the coefficient of friction, which the book does not
  introduce until 5.1. Chapter 5 will not be built when 4.7 is built, so the
  item is left out and named in 4.7's `exercise_notes`, and Chapter 5's own
  pass may pick it up.
- 4.8's Critical Thinking item (`exer-16012`, two boxes pushed different
  distances) is keyed and turns on the second law and on
  $v^2 = v_0^2 + 2a\Delta x$, not on the four basic forces. It is held for 4.3
  and both sections' `exercise_notes` say so.
- Several of 4.4's eleven AP items (the parachutist, the two water-skiers, the
  figure skaters) are second-law arithmetic set in a third-law situation. They
  stay in 4.4, since each is stated as a pair of bodies pushing on each other
  and the keyed solutions choose the system before they divide; the section's
  `exercise_notes` records the judgement.

## What the tooling needs

- Twenty-five new symbol rows in `book.json`, merged with
  `tools/mergebook.py`; no new type, no new hue, no new figlib primitive.
- The sprites a section will want (a wagon, a sled with rockets, a skier, a
  hanging mass, a lift) are drawn in the section modules, as Chapter 3's boat
  and ball were.
- Nothing else: the shell, the views and the validator are unchanged.

## Left for a later pass

- A free-body-diagram sim that the reader builds themselves — drag the arrows
  on, and the figure says whether the diagram is complete and what the net
  force is — would serve 4.1, 4.6 and every section between. It belongs to no
  one section, so no section plan should carry it; it is the one extra
  simulation of the chapter worth building when the chapter is next touched.
