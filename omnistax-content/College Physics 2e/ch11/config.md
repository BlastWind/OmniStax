# Config: College Physics 2e, Chapter 11

Proposed by the agent after exploration (2026-09-14). Status: applied as
proposed, on Chen's instruction to finish the book without check-ins; the
per-section stops of rule 2 and the plan reviews of rule 5 are replaced by a
plan file per section, written before the section is built and left for
review after, as Chapters 1 to 9 and 16 did it. Each line is a setting and
its value. Lines that repeat the Chapter 1 to 9 configs are unchanged unless
marked.

| Setting | Value |
|---|---|
| Chapter | 11 Fluid Statics, modules m42185 (introduction), m42186, m42187, m42189, m42192, m42193, m42195, m42196, m42197, m42199 |
| Front matter | the chapter introduction (m42185) is a page of its own in `ch11/intro/`, listed before 11.1 (rule 21), built in the prep pass |
| Unit of work | one section = one page; sections never folded (rule 11); 11.1, which has no equation, no example and no problem set, stays a page of its own |
| Order | 11.1 to 11.9 in book order, built in parallel by one agent per section |
| Loop | plan file → build → validator, all nine sections in one wave; review after |
| Prose | verbatim; objectives, summary, glossary pulled into the tables and views; the chapter's fifteen boxed notes kept verbatim, among them the four Take-Home Experiments and Investigations (11.2's sugar and salt, 11.7's foil ball and foil boat, 11.8's needle, brush, thread loop, pepper and matches) and the two Making Connections notes (11.5's conservation of energy, 11.8's submicroscopic explanation of surface tension) |
| Tables | five of the book's own, kept in the text as `div.book-table` with the book's number and title: Table 11.1 densities (11.2), Table 11.2 pressure conversions (11.6), Table 11.3 surface tensions (11.8), Table 11.4 contact angles (11.8), Table 11.5 typical pressures in humans (11.9). A sixth, the four springs of 11.2's fourth AP item, travels with that item and is not a chapter table |
| Sub-concept headers | agent decides per section, reported in the plan; 11.5, 11.7, 11.8 and 11.9 print headers of their own in the CNXML and those are kept as the book writes them, and every other header of the chapter is the agent's |
| Figures | an interactive figure per idea or result the section introduces; every sketch and diagram replaced, the book's image kept as its original, including the diagrams drawn over a photograph (the tire of 11.6, the swimmer of 11.7, the beaded water of 11.30), since the diagram is the content; a photograph kept where the text points at it, which in this chapter is all eight of them; each listed in the plan (rule 14) |
| Photographs kept | eight, every one of them pointed at by the text: the swimmer that opens the chapter (Figure 11.1, kept by rule 21), the Three Gorges Dam (11.4), the blood pressure cuff (11.15), the anchor, the submarine and the helium balloons (11.17), hydrostatic weighing (11.22), the soap bubbles (11.24), water beading on waxed and bare paint (11.30) and the tonometer (11.35). A section agent may transform 11.30 instead and keep the photograph as its original, since the book prints the contact angle on the drops |
| Folds | judged per section; the open-tube manometer level, raised and lowered (Figure 11.14) is one image under one number and so is not a fold, but the buoyant force on a cylinder and the fluid that replaces the body (Figures 11.18 + 11.19) are one scene and fold, and so do the capillary tubes of different radius and the two fluids of different density (Figures 11.31 + 11.32). Figures 11.2, 11.5, 11.14, 11.17, 11.19, 11.20, 11.23, 11.25, 11.30, 11.32, 11.33 and 11.36 print several panels inside one image under one number, so each is one row with one original and is not a fold |
| Sim sliders | whatever is interesting and variable in the idea: the depth of a point in a fluid, the density of the fluid, the area a force is spread over, the two piston areas of a hydraulic system, the height of a manometer column, the volume and average density of a floating body, the load in a hull, the surface tension of a liquid, the radius of a bubble or a capillary tube, and the contact angle |
| Motion | almost none. Fluid statics has no time in it, so a figure here answers its sliders, registers no cycle and gets no transport (rule 14). Three scenes have a genuine clock and may move if their plan argues for it: the two balloons of 11.27 emptying into each other, the breath in and out of 11.36, and the capillary column of 11.31 rising to its equilibrium height. Nothing else in the chapter moves |
| 3D | none; every scene of the chapter is planar, and where the book prints a tank, a piston or a cylinder in perspective the figure uses a locked view (root rule 28.2) rather than a scene that turns |
| Figures that serve exercises | the book's images that only an exercise refers to travel on the exercise card's own `figure` field, as Chapter 4 and 9.3 do: the glass of ice water (11.2), the levee and the sandbags (11.4), the spinal manometer, the piston under tension and the backhoe (11.9). The one exception is the dam that 11.4's last problem refers to, which is Figure 11.9 of the text already; the item cites the number and carries no image of its own |
| Extra simulations | agent proposes only those that open a view the required figures do not, builds the one or two that clearly earn their place, and says in the plan which were left (rule 15) |
| Colour coding | three new types (new): `pressure`, labelled pressure with the dimension N/m², because the chapter's figures draw it and its readouts state it and rule 7 keeps a derived quantity its own type even where the dimension matches the `stress` Chapter 5 declared; `density`, labelled density, kg/m³; and `surface-tension`, labelled surface tension, N/m, declared for 11.8 alone and kept apart from `stiffness` for the same reason. Depth $h$ and the average depth $\bar h$ are positions, every $F$, $w$, $N$, $F_1$, $F_2$, $F_{\text{B}}$, $w_{\text{fl}}$ and $F_{\text{ST}}$ is a force, and the area $A$, the volume $V$, the radius $r$, the wire length $L$, the contact angle $\theta$, the masses, the specific gravity and the fraction submerged stay untyped and in ink. Twenty-six symbol rows added to `book.json` (`P_press`, `P_bar`, `P_abs`, `P_g`, `P_atm`, `P_1`, `P_2`, `ΔP`, `ρ_dens`, `ρ_bar`, `ρ_fl`, `ρ_obj`, `ρ_w`, `γ`, `w_fl`, `F_ST`, `h_bar`, `V`, `V_sub`, `V_obj`, `V_fl`, `V_w`, `A_1`, `A_2`, `L_wire`, `Δh`), and Chapters 1 to 9's `F`, `F_1`, `F_2`, `F_B`, `w`, `N`, `A`, `h`, `m`, `g`, `r` and `θ` used as they stand. Pressure is keyed `P_press` with the macro `\kPr` because Chapter 7 holds `P` for power, and density is keyed `ρ_dens` with `\krho` because Chapter 5 holds an untyped `ρ` for the drag equation, and the wire length of 11.8 is keyed `L_wire` because Chapter 10 holds `L` for angular momentum; a symbol row of another chapter is never changed, and folding Chapter 5's row into this one is left for a later pass |
| Inline exercises | none: the chapter has no Check Your Understanding box |
| Exercises tab | end-of-module problems, conceptual questions, AP test prep |
| Exercise placement | an exercise goes with the section that introduces what it tests; eight move, each with `source_section` and a line in both sections' `exercise_notes`: the polystyrene cube (11.2 → 11.7), the drum of petroleum ether (11.3 → 11.4), the iceberg and the glacier (11.3 → 11.7), swimming in the Great Salt Lake (11.4 → 11.7), the loaded oil tanker (11.8 → 11.7), the capillary tube and its energy (11.9 → 11.8), the device that reaches −25 atm (11.9 → 11.8) and the backhoe's hydraulics (11.9 → 11.5). Three that could move stay where the book prints them and say so in `exercise_notes`: 11.2's ranking of densities from four spring stretches, 11.4's aqueous humor problem, and 11.9's hammer-and-nail problem |
| AP test prep | included; the chapter prints five items, all of them in 11.2 and 11.3, and only two are keyed; an unkeyed AP choice item is kept as an open item with its options as the book prints them and an AI-marked suggested approach, never as a graded choice |
| PhET interactive links | dropped (States of Matter—Basics in 11.1, Gas Properties in 11.3), and named in `notes`. 11.3's note also carries an empty `> IMAGE {img:} src=` line the converter wrote from an `<image>` with no source, which goes with it |
| Cross-references to other chapters | plain text, every one of them, as every built page of this book writes a cross reference: the book's title of the target section in the running sentence, no link. Chapter 12 (Fluid Dynamics and Its Biological and Medical Applications, m42205) is referred to by the introduction and by 11.1, 11.4 and 11.9 and is built by another agent in this same job, and those references are plain text like the rest; references to Chapters 4, 5, 7, 8, 9 and 16 and to sections of Chapter 11 itself are plain text as well (corrected in the chapter pass; the line had said the built chapters were linked, and no page of the book links one) |
| Answers to book problems | book answer key only; never generated; 40 of the chapter's 87 problems and 3 of its 5 AP items are unkeyed, and the ones a page does not need are left out and named in the notes, among them 11.9's two Construct Your Own Problem items and its repeat of the Marianas Trench problem with a bulk modulus part |
| Suggested approaches for open questions | generated, marked AI: all 39 conceptual questions of the chapter and the 3 unkeyed AP items |
| Generated questions | none; a node with no book exercise of its own is noted in the plan, no question generated |
| Concept nodes | testable units only; kinds idea/result/skill; canonical ids; 46 nodes written into `book.json` before the sections were built (3 for 11.1, 3 for 11.2, 4 for 11.3, 6 for 11.4, 5 for 11.5, 5 for 11.6, 7 for 11.7, 7 for 11.8, 6 for 11.9) with 117 edges into Chapters 1, 2, 4, 5, 7 and 9 and within the chapter |
| Formulas | `ch11/chapter.json`: 34 equations, the stated and named ones important (the definition of density, the definition of pressure and the pascal, the pressure due to the weight of a fluid, standard atmospheric pressure, the equality of the two hydraulic pressures and the ratio of force to area, absolute pressure, the manometer and the barometer, Archimedes' principle, the fraction submerged, specific gravity, the apparent weight loss, the definition of surface tension, the pressure inside a bubble, the capillary rise and the increase of blood pressure in the feet) and the worked substitution steps not; no anchor on any row, since the validator refuses an anchor into an unbuilt section, and the chapter pass writes them from the section plans |
| Glossary | 19 rows. The book defines **pressure** twice, in 11.3 and again in 11.4, and **systolic pressure** and **diastolic pressure** twice, in 11.6 and again in 11.9; only the first definition of each is written, under the section that introduces the term, since the second is a restatement rather than a second meaning |
| Book manifest | `ch11` after `ch10` in `book.json` chapters, merged with `ost merge college-physics-2e 11` |

## What the build changed (chapter pass, 2026-09-14)

A few lines of the table above needed a word after the nine sections were
built. The cross-reference line is corrected in place; the rest stood as
written and is qualified here.

- **Motion.** Three figures move, and not the three the Motion line named.
  11.1's Figure 11.2 moves, because the idea of the figure is the three
  kinds of motion the book's arrows stand for and the plan argues it under
  rule 24.1; it registers an unbounded cycle and carries play, stop and
  speed with no scrubber. 11.8's two balloons (Figure 11.27) and 11.9's
  breath (Figure 11.36) move as the line allowed. The capillary column of
  Figure 11.31 does not: its plan says the rise would need a drag model the
  book never gives, so it stands at its equilibrium height and answers its
  sliders. The other 30 drawn figures register no cycle and carry no
  transport.
- **Inline exercises.** The chapter has no Check Your Understanding box,
  and four conceptual questions are set inline all the same, each a short
  Understand check on the passage it follows, as rule 12 allows and as 9.2
  sets its first question: 11.2's density identifying a substance (after
  `identify`), 11.3's dull hypodermic needle (after `units`), 11.6's level
  manometer (after `manometer`) and 11.7's ship in salt water (after
  `density-and-archimedes`). 11.2's host was missing from its `text.html`
  and the chapter pass added it.
- **Exercise placement.** Seven of the eight listed moves were made; the
  device that reaches −25 atm (fs-id2392422, 11.9 → 11.8) is unkeyed and is
  left out of both sections, named in both sections' notes.
- **Symbols.** The twenty-six rows stand. One variable row was added in the
  chapter pass without a symbol row: 11.8's sliding wire writes its
  half-length as $l$, and Chapter 12 staged an untyped `l` for the length of
  a tube, so `11.8/l` sits on that shared row as `A`, `h` and `r` sit on
  theirs. The `eq-slide-wire-force` row keeps its plain `2l`.
- **Colour.** `COLOR.md`'s row for 11.6 is widened to `force`, which the
  aneroid gauge draws, and its families paragraph is rewritten to the
  figures that draw an arrow field in the pressure hue (11.3, 11.4, 11.5)
  and to where `F.el` (11.1 alone) and `F.cat` (11.2's density axis, 11.8's
  three linings) are actually used. Two complaints from the section
  builders are recorded here for Fable and Chen, since a chapter may not
  invent a hue (root rule 22): the scheme gives `pressure` a hue very close
  to `force` in both themes, and 11.3, 11.4, 11.5, 11.6 and 11.9 draw the
  two side by side; and `surface-tension` is a pale yellow that is nearly
  illegible on the light theme, where 11.8 puts it on two sliders and in
  every readout. Both are a scheme decision, not a chapter one.
- **The book's own slips.** The discussion of Example 11.8 prints the
  steel's weight as $m_{\text{s}}w$ where $m_{\text{s}}g$ is meant; the
  page keeps the book's printing, in ink, with nothing said, as the Chapter
  4 pass kept that chapter's slips. The key to 11.9's spinal manometer
  problem prints part (a) as "13.6 m water" where the problem asks for cm
  of water and 10.0 mm Hg is 13.6 cm of water; the card writes centimeters
  with the book's number, and `exercise_notes` says so. Figure 11.22's
  caption keeps the book's "hydrostatis".
- **Photographs and originals.** Eight photographs kept as the line says;
  Figure 11.30 is transformed with the photograph as its original, as the
  line allowed, and the alveoli illustration of Figure 11.28 is a `photo`
  row with the book's caption. The backhoe image rides on 11.5's card with
  the problem it belongs to; the piston-under-tension image travels nowhere,
  since its problem is left out.
- **Weights.** Root rule 20's `weights_by` field is not in the schema, so
  the AI mark on every weighted `exercise_concepts` row lives in each
  section's `exercise_notes`, as every earlier chapter has it.
