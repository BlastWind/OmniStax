# Exploration: College Physics 2e, Chapter 5 Further Applications of Newton's Laws: Friction, Drag, and Elasticity

Written before converting the chapter (2026-09-11). The source of record is
the CNXML bundle (`source/osbooks-college-physics-bundle`), not the PDF,
which is not in `source/` at present. The book's organisation (book →
chapters → sections → untitled narrative headers, one CNXML module per
section, every piece of apparatus inside its module) is as recorded in
`ch02/exploration.md`; nothing differs here.

## Why this chapter

Chapter 4 gives the reader Newton's three laws and the forces that go with
them, and Chapter 5 spends three sections on the everyday forces the laws
are most often applied to. The first is friction, the force between two
surfaces in contact. The second is drag, the force on a body moving through
a fluid, which leads to terminal velocity. The third turns from forces that
change the motion of a body to forces that change its shape: Hooke's law,
Young's modulus, stress and strain, shear and bulk deformation. The chapter
opens on an X-ray of a replaced hip joint, which is Figure 5.1 and the page
of `ch05/intro/`.

## Chapter 5 modules

Figures counted include the figures inside exercises. CYU = Check Your
Understanding, AP = AP test prep items, CQ = conceptual questions, Sol =
exercises with an inline solution.

| Section | Module | Ex. | Fig. | Tables | Eq. | Defs | CYU | AP | CQ | Prob. | Sol. |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m42138 | 0 | 1 photo | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 5.1 Friction | m42139 | 1 | 8 (2 photos, 3 sketches, 3 in exercises) | 1 | 14 | 5 | 0 | 4 (2 keyed) | 4 | 19 | 9 |
| 5.2 Drag Forces | m42080 | 1 | 4 photos | 1 | 18 | 2 | 0 | 0 | 4 | 9 | 5 |
| 5.3 Elasticity: Stress and Strain | m42081 | 4 | 10 (1 photo, 7 sketches, 2 in exercises) | 1 | 29 | 6 | 0 | 0 | 8 | 17 | 9 |

No section of the chapter has a Check Your Understanding box, so the inline
place of rule 12 holds nothing unless a section agent judges a short
conceptual question to be a Remember or Understand check that belongs
beside its passage. Only 5.1 carries AP test prep. The answer key covers
nine of 5.1's nineteen problems (the first, fourth, sixth, tenth,
fourteenth, sixteenth and eighteenth among them), the odd-numbered problems
of 5.2 and of 5.3 together with 5.3's Critical Thinking item, and the first
and third AP items of 5.1; no conceptual question is keyed.

Figure numbers follow the rule the built chapters use: every figure of the
narrative, a worked example's figures included, is numbered in order, and a
figure inside a problem, a conceptual question or an AP item is not. The
introduction's photograph is Figure 5.1, so 5.1's figures run 5.2 to 5.6,
5.2's 5.7 to 5.10 and 5.3's 5.11 to 5.18. In order: 5.2 friction at the
interface, 5.3 the replaced knee, 5.4 the skier, 5.5 the actual area of
contact, 5.6 the probe tip; 5.7 the bobsled, 5.8 the wind tunnel, 5.9 the
body suits, 5.10 the geese; 5.11 the deformation-against-force graph, 5.12
the three guitar strings, 5.13 tension and compression of a rod, 5.14 the
gondolas, 5.15 the tendon's stress-strain curve, 5.16 the sheared bookcase,
5.17 the nail, 5.18 the compressed cube. The three tables are Table 5.1
(coefficients of static and kinetic friction), Table 5.2 (drag coefficient
values) and Table 5.3 (elastic moduli).

## Observations that affect the plan

- The chapter rests on Chapter 4 throughout, which is being prepared at the
  same time. 5.1 needs the normal force, the weight and the free-body
  diagram; 5.2 needs Newton's second law and the fact that a zero net force
  means no acceleration; 5.3 needs a force and the line along which it
  acts. The prerequisite edges into Chapter 4 are written where the id
  already stands in `book.json` (`newtons-first-law`, `newtons-second-law`,
  `tension`), and the rest are named in the report for the chapter pass to
  add.
- 5.1 also leans on 3.3, since the skier's weight has to be resolved into a
  component along the slope and one perpendicular to it, and on 2.5 and
  2.7, since every incline problem ends in a constant acceleration. 5.2
  leans on 2.7: terminal velocity is what free fall becomes when the air is
  not neglected. 5.3 leans on nothing earlier than the idea of a force.
- Every photograph of the chapter is kept, because the text points the
  reader at each one: the replaced knee of 5.1 ("A damaged or arthritic
  joint can be replaced by an artificial joint"), the bobsled, the wind
  tunnel, the body suits and the geese of 5.2, and the gondolas of 5.3.
  There is no splash image inside a section to drop, and the chapter
  opener's X-ray belongs to the introduction page.
- 5.2 draws no sketch at all: its four figures are photographs, and its
  ideas (the drag force, terminal velocity, Stokes' law) are stated in
  equations and never drawn. Every interactive figure of 5.2 is therefore a
  Sim with no number, and the section agent should expect that rather than
  hunt for book figures to transform.
- Two folds are worth weighing in 5.1. Figures 5.2 and 5.5 both draw two
  rough surfaces pressed together, 5.2 to say that friction opposes motion
  and 5.5 to say that the actual area of contact grows with the normal
  force, so one figure that magnifies the interface and lets the reader
  press the surfaces together covers both. Figure 5.6, the probe tip
  deformed as it is dragged, belongs to the same atomic-scale passage and
  could join them, but it makes a different point, that the force on the
  tip is a shear stress, so the plan should say why it folds or why it
  stands alone.
- 5.3 draws the three deformations separately: the rod stretched and
  compressed (5.13), the bookcase sheared (5.16) and the cube squeezed on
  every face (5.18). They are three equations with three different moduli,
  so they are three figures rather than one fold, but each should carry the
  same layout, so that the reader sees that the three say the same thing.
- Two new types are wanted, and the case for each is that 5.3 draws it. The
  book declares nine types and none of them is a force per unit area.
  `stress` is the ratio of force to area, which the section defines as a
  quantity of its own, plots along the y-axis of the tendon curve and
  writes on both sides of the bulk equation. `elastic-modulus` is what Y, S
  and B are: the constant of proportionality between a stress and a strain,
  standing to a stress as the force constant of 16.1 stands to a force. The
  book already keeps `stiffness` apart from `force` for that reason, so a
  modulus is not coerced into being a stress. Strain is a ratio of two
  lengths and stays in ink, as the coefficients of friction and the drag
  coefficient do.
- Nothing else earns a type. The density ρ and the viscosity η of 5.2 are
  kinds of quantity, but no figure of this chapter drags them or colours
  them: the skydiver falls through air of one density, and Stokes' law is
  drawn with the fluid named rather than tuned. Chapter 11 is where a
  fluid's density is varied, and that is where `density` should be
  declared. Area, mass, radius, volume and every coefficient stay in ink.
- The symbol table needs care, because four of the letters this chapter
  writes are already taken. `f` is the frequency of 16.2, so the friction
  force is keyed `f_fric`, which Chapter 4 merged as LaTeX $f$ with the
  macro `\kff`, and Chapter 5 adds `f_s` and `f_k` beside it;
  `C` is the magnitude of a displacement in 3.2, so the drag coefficient is
  keyed `C_drag` with its LaTeX only, since it is dimensionless and sits in
  ink; `B` is the magnitude of a displacement in 3.3, so the bulk modulus is
  keyed `B_bulk` (LaTeX $B$, macro `\kBb`); and `A` is the measured value of
  1.3, which is untyped and carries no macro, so the area of 5.2 and 5.3
  reuses that row rather than adding one. The weight $w$ and the normal
  force $N$ belong to Chapter 4, and its rows are the ones this chapter
  writes.
- 5.3's problem set closes with a Critical Thinking item (`exer-86622`) on
  two beads falling at constant speed through a fluid. It is keyed, and it
  tests terminal velocity and the drag force, which 5.2 introduces, so under
  rule 12 it is set with 5.2 and carried with `source_section` "5.3"; both
  sections' `exercise_notes` say so. Its answer includes a graph of radius
  against fall time, which the card can carry as the answer's figure.
- 5.1 keeps one figure that serves an exercise: the block of ice being
  pushed and pulled across a frozen lake, which the keyed problem
  `fs-id1531145` refers to. The ice skater of `fs-id1452889` and the
  mountain climber of `fs-id1615856` belong to unkeyed problems that are
  left out, so their figures are left out with them, and the same is true of
  the telephone pole of 5.3's unkeyed `fs-id1165296233210`.
- Two of 5.3's problems return to a calculation made in Chapter 4: the keyed
  `fs-id1165298740744` to the tightrope walker of 4.5, and the unkeyed
  `fs-id1165298783085` to the traffic light of 4.7. The reference stays in
  the book's wording and is plain text while Chapter 4 is unbuilt.
- Chapter 4 merged its book-level rows first, and several of the ids this
  chapter wanted turn out to be its. The symbols `f_fric`, `N`, `w`,
  `w_perp`, `w_par`, `F_D` and `F_s` are Chapter 4's, with the macros
  `\kff`, `\kN`, `\kwgt`, `\kwperp`, `\kwpar`, `\kFD` and `\kFs`, so
  Chapter 5 uses those rows and stages eighteen of its own. The concept
  nodes `friction` (4.3, where friction is named as an external force in a
  free-body diagram) and `drag-force` (4.7, where it is the unknown in the
  barge example) are Chapter 4's as well, so 5.1 and 5.2 reinforce them
  rather than introducing them again, and this chapter's nodes rest on
  them. The report asks the chapter pass to weigh moving each to the
  section that gives it its characteristics.
- The converter flattens Table 5.3. The elastic moduli table of m42081 sits
  inside a `<para>`, and `cnxml2md.py` renders a table inside a paragraph
  with `inline()`, so its rows arrive as one run of text after the equation
  for ΔL and no `[TABLE …]` block is emitted. Tables 5.1 and 5.2, which
  stand as children of `<content>`, come through correctly. The 5.3 agent
  builds Table 5.3, titled "Elastic Moduli", from the rows below, in a
  `div.book-table` as the book's other tables are built; the blanks are
  blank in the book too, and the book prints a footnote under the title
  saying that the values are approximate and averaged and that bone's
  moduli in tension and compression differ.

  | Material | Young's modulus Y (10⁹ N/m²) | Shear modulus S (10⁹ N/m²) | Bulk modulus B (10⁹ N/m²) |
  |---|---|---|---|
  | Aluminum | 70 | 25 | 75 |
  | Bone – tension | 16 | 80 | 8 |
  | Bone – compression | 9 | | |
  | Brass | 90 | 35 | 75 |
  | Brick | 15 | | |
  | Concrete | 20 | | |
  | Glass | 70 | 20 | 30 |
  | Granite | 45 | 20 | 45 |
  | Hair (human) | 10 | | |
  | Hardwood | 15 | 10 | |
  | Iron, cast | 100 | 40 | 90 |
  | Lead | 16 | 5 | 50 |
  | Marble | 60 | 20 | 70 |
  | Nylon | 5 | | |
  | Polystyrene | 3 | | |
  | Silk | 6 | | |
  | Spider thread | 3 | | |
  | Steel | 210 | 80 | 130 |
  | Tendon | 1 | | |
  | Acetone | | | 0.7 |
  | Ethanol | | | 0.9 |
  | Glycerin | | | 4.5 |
  | Mercury | | | 25 |
  | Water | | | 2.2 |

- Hooke's law is stated first here, in 5.3, as $F = k\Delta L$, and again in
  16.1 as $F = -kx$ for a spring. The concept node `hookes-law` already
  stands under 16.1, where Chapter 16 built it, and a chapter may not claim
  another chapter's node, so 5.3 reinforces it rather than introducing it,
  and adds no second node for the same law. The report asks for the node to
  be moved to 5.3, which is where the book's reader meets it. The same holds
  for `force-constant`, which 5.3 derives as $k = YA/L_0$.
- Both PhET notes are dropped, as the built chapters drop them: "Forces and
  Motion" in 5.1 and "Masses & Springs" in 5.3. The chapter introduction's
  video-trailer link is dropped the same way and named in the
  introduction's `notes`.
- The boxed notes are the book's own text and are kept verbatim: Friction,
  Kinetic Friction, Magnitude of Static Friction, Magnitude of Kinetic
  Friction, two Take-Home Experiments and Making Connections in 5.1; Drag
  Force, Take-Home Experiment, Stokes' Law and Galileo's Experiment in 5.2;
  Hooke's Law, Stretch Yourself a Little, Stress, Strain and Shear
  Deformation in 5.3.
- The introduction module defines no term, so it sends nothing to the
  glossary.

## What the tooling needs

- Two new types and eighteen new symbol rows in `book.json`, listed in
  the config, and no new figlib primitive. The sprites the sims want (a
  crate, a skier, a skydiver, a rod, a bookcase, a cube) are drawn in the
  section modules.
- A converter that keeps a table sitting inside a paragraph, which is the
  one defect this chapter found in the tools.
- Nothing else: the shell, the views and the validator are unchanged.
