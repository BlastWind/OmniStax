# Config: College Physics 2e, Chapter 18

Proposed by the prep agent after exploration (2026-09-14). Status: applied as
proposed, on Chen's standing instruction to finish the book in waves without
check-ins; the per-section stops of rule 2 and the plan reviews of rule 5 are
replaced by a plan file per section, written before the section is built and
left for review after, as Chapters 1 to 15 did it. Each line is a setting and
its value. Lines that repeat the Chapter 1 to 15 configs are unchanged unless
marked.

| Setting | Value |
|---|---|
| Chapter | 18 Electric Charge and Electric Field, modules m42299 (introduction), m42300, m42306, m42308, m42310, m42312, m42315, m42317, m42329 |
| Front matter | the chapter introduction (m42299) is a page of its own in `ch18/intro/`, listed before 18.1 (rule 21), built in the prep pass with both of its figures, the slide (18.1) and Franklin's kite (18.2); its two glossary terms, static electricity and the electromagnetic force, are entered under 18.1, as Chapters 6, 12 and 16 did with theirs |
| Unit of work | one section = one page; sections never folded (rule 11); 18.6, which has two figures, no equation and one conceptual question, stays a page of its own |
| Order | 18.1 to 18.8 in book order, built in parallel by one agent per section |
| Loop | plan file → build → validator, all eight sections in one wave; review after |
| Prose | verbatim, the book's own slips included (the $7.20 \times 10^{5}$ N/C of Example 18.3 for the $7.19 \times 10^{5}$ of Example 18.2, the "$63.4°$ above the $x$-axis" of Example 18.4, the summary's comma inside $\text{E} = \text{F}/q$ in 18.4; each named in the section's `notes` and in `exploration.md` under Errata); objectives, summary, glossary pulled into the tables and views; the book's boxed notes kept verbatim (18.1's Things Great and Small, Law of Conservation of Charge and Making Connections; 18.3's boxed Coulomb's Law with its two equations; 18.7's Misconception Alert with Figure 18.28 inside it and its three numbered Properties of a Conductor; 18.8's Take-Home Experiment, its six-step Problem-Solving Strategies for Electrostatics, its Unreasonable Results note and its three-step strategy as the book's numbered lists); 18.8's Integrated Concepts list of six chapter titles kept as plain text |
| Tables | none in any narrative; the one table of the chapter, the final charges on the spheres X, Y and Z, sits inside the prompt of 18.1's second AP item (`fs-id3322928`) and is carried in the item's `prompt` as an HTML table, as Chapters 2, 3, 8 and 11 carried a table inside an exercise (new) |
| Sub-concept headers | 18.1, 18.2, 18.6, 18.7 and 18.8 print headers of their own and those are kept as the book writes them (18.6's Cell Membranes and Bioelectricity and Wound Healing are third-level headers under Polarity of Water Molecules); 18.3, 18.4 and 18.5 print none in their narrative, so their headers are the agent's; a section may add headers of its own before the book's first, where the opening passage carries an idea of its own |
| Figures | a sim per idea or result the section introduces; every diagram replaced by a sim with the book's image kept as its original; a photograph kept where the text points at it or it shows the thing the passage is about, dropped where it is decoration; each listed in the plan (rule 14) |
| Photographs kept | eight: the child on the slide (18.1, rule 21) and Franklin's kite (18.2, "See Figure 18.2") on the introduction page, the Borneo amber (18.3, "see Figure 18.3"), the person at the Van de Graaff (18.6, "Figure 18.6 shows", whose inset the 18.1 agent may instead draw as a figure with the photograph as its original), the bent stream of water (18.15, the CYU's own photograph, with no caption), Earth's fair-weather and storm fields (18.30, pointed at by panel), the lightning rod and the Van de Graaff sphere (18.33, "See Figure 18.33"), and the smokeless power plant that is panel (b) of 18.38 and rides with the precipitator schematic as its second original. Dropped as splash images: the laptop adapter (18.10) and the galaxies of Arp 87 (18.16) |
| Folds | judged per section. The candidates are 18.5's run of field-line figures, 18.19, 18.20, 18.22 and 18.23, which are one live drawing of one or two charges the reader sets, and the 18.5 agent may fold two or more of them into it with the eyebrow reading every number, keeping 18.21 (Example 18.4's addition at the origin) its own figure; 18.2's 18.12 and 18.13 are two methods of induction and stay two figures, each with its four panels as one number and one original; 18.7's 18.26 and 18.27 are one event and may fold if the plan says why. Figures with (a)(b)(c) panels under one number (18.4, 18.8, 18.9, 18.11, 18.12, 18.13, 18.14, 18.17, 18.18, 18.19, 18.20, 18.23, 18.26, 18.30, 18.31, 18.33, 18.38) are one number with one or several originals, not folds |
| Sim sliders | whatever is interesting and variable in the idea: the size and sign of each charge, the separation between two charges, the test charge set down in a field (through zero and across sign), the position of a probe in a field, the strength of a uniform applied field, the charge on a conductor, the sharpness of a conductor's end, the field and the charge on a drop against its weight. A choice, never a slider, for the step of a charging sequence (rod near, rod touching, ground on, ground off, rod away), for the sign of a rod, for conductor against insulator and for the kind of charge distribution drawn (rule 26.1) |
| Motion | decided per figure (rule 14). Most of the chapter is still: Coulomb's two forces, the field of a point charge, the field lines of two charges, the probe's readout and the properties of a conductor each answer their sliders, register no cycle and get no transport. Four ideas have a clock in them and may move, and the plan line must say so and why: the electrons crossing to a rod or a sphere in a charging sequence (18.11, 18.12, 18.13), where the transfer is the idea; the pair created and annihilated in 18.9; the free charges of a conductor drifting until the inside field is zero (18.26, 18.27, 18.31), where the settling is the argument; and the machines of 18.8 (the belt of 18.34, the drum of 18.35 and 18.36, the droplets of 18.37, the particles of 18.38), which move because the machine moves. Electrons orbiting a nucleus in 18.5 merely to look like an atom is the dummy loop rule 14 forbids, unless the plan makes the orbit the idea (new) |
| 3D | none; every scene of the chapter is a schematic or a planar map of a field, and both are clearest drawn flat (rule 28.1). The field of a point charge is drawn in a plane through the charge, as the book draws it |
| Figures that serve exercises | the book's own rules give two ways of carrying an image an exercise refers to, and this chapter uses the second throughout: the twenty-five unnumbered images inside AP items, conceptual questions and problems (two in 18.2, one in 18.3, seven in 18.5, twelve in 18.7, five in 18.8) travel on the `figure` field of the exercise cards that refer to them, as Chapters 4, 9.3, 9.6, 12 and 15 do. 18.7's square of four charges is read by five conceptual questions and four problems, and 18.5's square W X Y Z and its field of three objects R, S and T by several AP items, so those agents may in addition draw each as an unnumbered `figure` row with no sliders and no animation in a closing block of the text, the eyebrow reading "Figure", if the plan says the card image is too small to read the labels from; the keyed answer's graph in 18.5's AP item on R, S and T travels in the item's `solution` |
| Colour coding | two new types, `charge` (C) and `electric-field` (N/C), the first two of electricity, because every figure of the chapter draws charge and every figure from 18.4 on draws the field, their sliders set them and their readouts state them; Chapter 19 is being prepared in the same job and will declare `voltage` and `capacitance`, never these two. The Coulomb force, the gravitational force, the weight and the net force are `force` on Chapter 4's rows and this chapter's `F_G` and `F_par`; Coulomb's constant, the separation $r$, the masses, the angle and every count stay untyped and in ink. A charge's sign is told by its sign and label, never by a hue that is not the charge type's, and electrons and protons are particles for the element palette (see `COLOR.md` for what the app's palette can name today). Symbol rows added are listed under "Symbols" below |
| Inline exercises | one: 18.2's Check Your Understanding on the bent stream of water, inline after the polarization passage with its photograph (Figure 18.15) as the figure the prompt points at |
| Exercises tab | end-of-module problems, conceptual questions, AP test prep |
| Exercise placement | an exercise goes with the section that introduces what it tests; 18.3's keyed problem on where a third charge feels no net force (`fs-id2622925`) and its unkeyed problem on the test charge halfway between two charges (`fs-id3189377`) need the vector sum of two Coulomb forces, which is 18.5's first objective, and go to 18.5 with `source_section: "18.3"`, both sections' `exercise_notes` saying so; nothing else moves, and `exploration.md` lists the items that stay where the book prints them though a later section's concept answers them, tagged with that concept as a placeholder inside the chapter |
| AP test prep | included; the chapter's 41 AP items sit in 18.1, 18.2, 18.3, 18.4, 18.5 and 18.7, 21 keyed. An unkeyed AP item is kept as an open item with its options as the book prints them and an AI-marked suggested approach, never as a graded choice. The items introduced by "for questions 25–27", "questions 31–32" and "questions 39–40" refer to the AP edition's numbering; the words are kept and each item stands on its own card with the shared setup repeated in its prompt where it needs it. 18.1's second AP item asks for two answers and its options are a table; 18.1's eighth (`fs-id2399594`) asks for two answers as well |
| PhET interactive links | dropped (Balloons and Static Electricity in 18.1, John Travoltage in 18.2, Electric Field of Dreams in 18.4, Charges and Fields in 18.5) and named in `notes` |
| Cross-references | plain text throughout, as every other page of the book writes them: a reference to another section, another chapter, a strategy box on another page or a worked example on another page is the book's words with no link, and the app links "Figure 18.17" and an "Example 18.1" that sits on the same page by itself; 18.3's and 18.4's problems that cite "the Problem-Solving Strategy for electrostatics" (18.8's box) and 18.8's six chapter titles are plain text |
| Answers to book problems | book answer key only; never generated; the 45 unkeyed problems are left out and named in the notes, among them 18.8's two Construct Your Own Problem items, its three Unreasonable Results items, six of its seven Integrated Concepts items and all four of 18.5's sketch problems |
| Suggested approaches for open questions | generated, marked AI: all 32 conceptual questions of the chapter and the 20 unkeyed AP items |
| Generated questions | none; a node with no book exercise of its own is noted in the plan, no question generated |
| Concept nodes | testable units only; kinds idea/result/skill; canonical ids; 50 nodes written into `book.json` before the sections were built (7 for 18.1, 7 for 18.2, 5 for 18.3, 6 for 18.4, 7 for 18.5, 3 for 18.6, 9 for 18.7, 6 for 18.8) with 147 edges into Chapters 1, 2, 3, 4, 6, 7 and 9 and within the chapter |
| Formulas | `ch18/chapter.json`: 17 equations, the stated and named results important (the elementary charge, Coulomb's law and its constant, the definition of the field, the force from the field, the field of a point charge) and the worked substitution steps, the gravitational force of Example 18.1, the ratio it reaches, the mass–energy relation of 18.1, the perpendicular addition and its angle in Example 18.4, the parallel force of 18.7's caption and the three steps of Example 18.5 not; no anchor on any row, since the validator refuses an anchor into an unbuilt section, and the chapter pass writes them from the section plans |
| Book manifest | `ch18` after `ch16` in `book.json` chapters (after `ch17` once that chapter merges; `ost merge` sorts by number), added by `ost merge college-physics-2e 18` |

## Symbols

Never change an existing symbol row (rule of the job). Rows the chapter
would otherwise have wanted are already taken and are **not** reused for this
chapter's meanings:

- `Q` is Chapter 12's **flow rate** with `\kQ`, so the point charge $Q$ is
  `Q_charge` with the macro `\kQch`. `Q_1` and `Q_2` are flow rates too.
- `E` is **energy** with `\kE` (Chapter 7) and is the $E$ of 18.1's
  $\Delta m = E/c^2$ as it stands. The electric field is `E_field` with
  `\kEf`, and its variants carry the `Ef` stem.
- `k` is a **force constant** with `\kk` (Chapter 16) and `k_boltz` is
  Boltzmann's; Coulomb's constant is `k_coul`, LaTeX `k`, untyped and with
  no macro, written plain.
- `r` is Chapter 5's untyped row with no macro and is the separation of two
  charges as it stands; `r_curv` (`\kr`) and `r_lever` (`\krlev`) are
  Chapter 6's and 9's positions and are not written here. `r_1` and `r_2`
  are the book's positions (`\krone`, `\krtwo`) and are listed for 18.5
  with no type; the page writes them plain.
- `F`, `F_1`, `F_2` and `F_net` are Chapter 4's forces and are used as they
  stand; `F_perp` (`\kFperp`) is Chapter 4's and is not the $E_\perp$ of
  18.7's alt text, which is a field.
- `m`, `M`, `G`, `Δm`, `θ`, `d`, `c`, `w` (`\kwgt`), `a` (`\ka`) and `x`
  are the book's rows as they stand.

Rows this chapter stages, with the sections that write them:

| sym | LaTeX | type | macro | where |
|---|---|---|---|---|
| `q` | `q` | charge | `\kq` | 18.1, 18.4, 18.7, 18.8 |
| `Q_charge` | `Q` | charge | `\kQch` | 18.4, 18.5 |
| `q_1` | `q_1` | charge | `\kqone` | 18.3, 18.5 |
| `q_2` | `q_2` | charge | `\kqtwo` | 18.3, 18.5 |
| `q_e` | `q_{\text{e}}` | charge | `\kqe` | 18.1, 18.6, 18.8 |
| `q_tot` | `q_{\text{tot}}` | charge | `\kqtot` | 18.1 (Figure 18.9), 18.3 |
| `q_a` | `q_{\text{a}}` | charge | `\kqa` | 18.7 |
| `q_b` | `q_{\text{b}}` | charge | `\kqb` | 18.7 |
| `q_c` | `q_{\text{c}}` | charge | `\kqc` | 18.7 |
| `q_d` | `q_{\text{d}}` | charge | `\kqd` | 18.7 |
| `E_field` | `E` | electric-field | `\kEf` | 18.4, 18.5, 18.7, 18.8 |
| `E_field1` | `E_1` | electric-field | `\kEfone` | 18.5 |
| `E_field2` | `E_2` | electric-field | `\kEftwo` | 18.5 |
| `E_tot` | `E_{\text{tot}}` | electric-field | `\kEftot` | 18.5 |
| `E_par` | `E_{\parallel}` | electric-field | `\kEfpar` | 18.7 |
| `E_perp` | `E_{\perp}` | electric-field | `\kEfperp` | 18.7 |
| `F_G` | `F_{\text{G}}` | force | `\kFG` | 18.3 |
| `F_par` | `F_{\parallel}` | force | `\kFpar` | 18.7 |
| `k_coul` | `k` | — | — | 18.3, 18.4, 18.5 |
| `m_e` | `m_{\text{e}}` | — | — | 18.1 (Figure 18.9) |

Twenty rows in all, and two types, `charge` and `electric-field`. The
`ε_0` the brief names is not written anywhere in this chapter and is not
staged. The book sets $q_\text{e}$ as `{q}_{e}` in 18.1 and as
`q_{\text{e}}` in 18.6 and 18.8; the row carries the upright form, and the
page writes the macro either way.

## What the build changed (chapter pass, 2026-09-15)

The eight sections and the introduction were built as the table above sets
them out, and the table is already corrected where a line needed a word.
These are the decisions the build reached that the table did not foresee.

- **Figure 18.38 has one original with two panels.** The table says the
  smokeless power plant is a second original of the electrostatic
  precipitator, which would have made it the eighth kept photograph. The
  bundle prints panels (a) and (b) in one image file,
  `Figure_19_08_06a.jpg`, at a width of 675, so the figure row carries one
  original and one width and the plant rides inside it. Seven photographs
  are kept as rows of their own, not eight, and nothing of the book is lost.
- **Two faithful copies in 18.5.** The square W X Y Z and the field of the
  three objects R, S and T are read by several AP items whose labels cannot
  be made out from a card image, so each is drawn as an unnumbered figure
  with no slider and no animation in the section's closing block, the
  eyebrow reading "Figure", which is the second way the table allows.
  Section 18.7 draws its square of four charges the same way.
- **The antielectron.** The element palette names the electron, the proton
  and the neutron and no antiparticle, so the pair of Figure 18.9 is drawn
  with the antielectron in the electron's hue, hollow, and the app is asked
  for a key of its own (`e+`) that the figure would then take. This is
  recorded here and in `COLOR.md` so that no later chapter has to decide it
  again.
- **The two problems that move out of 18.3.** Both need the vector sum of
  two Coulomb forces, which 18.5 introduces. The keyed one, on where a third
  charge feels no net force, is set in 18.5 with `source_section` 18.3; the
  unkeyed one, on a test charge halfway between two charges, is left out
  there as every unkeyed problem of the chapter is, and both sections'
  `exercise_notes` say so.
- **What the pages bind.** 18.5 binds `charge` and `electric-field` and not
  `force`, since no figure of the page draws a force arrow; 18.6 binds
  `force` as well as `charge` and `electric-field`, for the attraction
  between a water molecule and the ion it surrounds. `COLOR.md` carries the
  bindings as built.
- **Folds.** Four figures fold, each of two numbers: 18.19 + 18.20 and
  18.22 + 18.23 in 18.5, 18.31 + 18.32 in 18.7 and 18.35 + 18.36 in 18.8.
  Figures 18.12 and 18.13 stayed two figures, as the table asks.
- **Motion.** Seven of the thirty simulations register a cycle and carry the
  transport: the pair created and annihilated in 18.1, the electroscope and
  the charging by induction in 18.2, the free charges settling in 18.7, and
  the belt, the ink jet and the precipitator of 18.8. The copier drum and
  the charged drop answer their controls and stay still, and no figure of
  18.3, 18.4, 18.5 or 18.6 moves.
- **The two concept ids 18.5 named.** Its plan listed `vector-addition` and
  `inverse-square-law` among the concepts it uses. Neither is a row of the
  book: vector addition is `head-to-tail-method` (3.2), which the section's
  coverage now names, and the inverse square is carried by `coulombs-law`
  and `field-of-point-charge`, which the section already uses. The chapter
  introduces neither idea, so no row is staged for them.
- **Anchors.** The table says the chapter pass writes them, and it has:
  all 46 variable rows and all 17 equation rows of the chapter carry one.
  Section 18.2 has no variable and no equation and so wanted none.
- **Weights.** The schema accepted `weights_by` from 2026-09-14, so the 119
  weighted `exercise_concepts` rows of the chapter carry the mark root
  rule 20 asks for.
- **Math in a `lead` and in `notes`.** The app sweeps `summary_html`,
  `exercise_notes` and the text for math and does not sweep a section's
  `lead` or its `notes`, so a `$…$` written there reaches the reader as
  dollar signs. The lead of 18.3 and the notes of 18.2 and 18.4 are written
  in words and Unicode digits instead, as Chapters 14 and 15 write theirs.
