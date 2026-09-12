# Config: College Physics 2e, Chapter 5

Proposed by the agent after exploration (2026-09-11). Status: applied as
proposed on 2026-09-11, on Chen's instruction to finish the book in one job
without check-ins; the per-section stops of rule 2 and the plan reviews of
rule 5 are replaced by a plan file per section, written before the section
is built and left for review after, as Chapters 1 to 3 did it. Each line is
a setting and its value. Lines that repeat the Chapter 3 config are
unchanged unless marked.

| Setting | Value |
|---|---|
| Chapter | 5 Further Applications of Newton's Laws: Friction, Drag, and Elasticity, modules m42138 (introduction), m42139, m42080, m42081 |
| Front matter | the chapter introduction (m42138) is a page of its own in `ch05/intro/`, listed before 5.1, with the hip X-ray kept as Figure 5.1 (rule 21) |
| Unit of work | one section = one page; sections are never folded (rule 11) |
| Order | 5.1 to 5.3 in book order, built in parallel by one agent per section |
| Loop | plan file → build → validator, all three sections in one pass; review after |
| Prose | verbatim; objectives, summary, glossary pulled into the tables and views; the book's boxed notes kept verbatim (Friction, Kinetic Friction, Magnitude of Static Friction, Magnitude of Kinetic Friction, two Take-Home Experiments and Making Connections in 5.1; Drag Force, Take-Home Experiment, Stokes' Law and Galileo's Experiment in 5.2; Hooke's Law, Stretch Yourself a Little, Stress, Strain and Shear Deformation in 5.3), and Haldane's quoted paragraph in 5.2 kept as the book sets it |
| Tables | three, each kept in the text as a `div.book-table` with the book's number and title: Table 5.1 Coefficients of Static and Kinetic Friction, Table 5.2 Drag Coefficient Values, Table 5.3 Elastic Moduli. Table 5.3 is rebuilt by hand from the rows in `exploration.md`, since the converter flattens it (new) |
| Sub-concept headers | agent decides per section, reported in the plan; 5.3 keeps the book's three named headers (Changes in Length, Sideways Stress, Changes in Volume) |
| Figures | a sim per idea or result the section introduces; every sketch replaced by a sim; a photograph kept when the text points at it or it shows the thing the passage is about. Every photograph of this chapter is kept, since the text points at each: the replaced knee (5.3), the bobsled (5.7), the wind tunnel (5.8), the body suits (5.9), the geese (5.10) and the gondolas (5.14). 5.2 has no sketch at all, so every interactive figure of 5.2 is a Sim with no number (new) |
| Folds | weighed in the plan, not assumed: 5.1's Figures 5.2 and 5.5 both draw the rough interface and fold well; Figure 5.6 may join them or stand alone; 5.3's three deformations stay three figures (new) |
| Sim sliders | whatever is interesting and variable in the idea: an applied force and a coefficient of friction, the slope angle, a skydiver's mass and frontal area, a force and a rod's length, area and modulus |
| Motion | a crate that breaks away and slides, a skier accelerating down a slope and a skydiver approaching terminal velocity have a time in them and run finite loops with the scrubber; a free-body diagram, a stress-strain curve and the three deformation pictures answer their sliders and are still, with no transport (rule 14) |
| 3D | none; every scene of the chapter is planar |
| Figures that serve exercises | copied over faithfully, no sliders, labelled Figure with no number: the block of ice of 5.1's keyed problem `fs-id1531145`. The skater, the mountain climber and the telephone pole belong to unkeyed problems that are left out, so they are left out too |
| Extra simulations | agent proposes only those that open a view the required figures do not, builds the one or two that clearly earn their place, and says in the plan which were left (rule 15) |
| Colour coding | force, velocity, acceleration and position hues from the global tier; two new types, `stress` and `elastic-modulus`, both N/m², declared for 5.3 and used by its figures; the coefficients of friction, the drag coefficient, strain, mass, area, radius, volume, density and viscosity stay untyped and in ink; eighteen symbol rows added to `book.json` (`f_s`, `f_smax`, `f_k`, `μ`, `μ_s`, `μ_k`, `v_t`, `C_drag`, `ρ`, `η`, `r`, `ΔL`, `L_0`, `ΔV`, `V_0`, `Y`, `S`, `B_bulk`), and seven more the chapter needs are Chapter 4's, which merged first, so the pages use its rows: `f_fric` (`\kff`), `N` (`\kN`), `w` (`\kwgt`), `w_perp` (`\kwperp`), `w_par` (`\kwpar`), `F_D` (`\kFD`) and `F_s` (`\kFs`) (new) |
| Inline exercises | none: the chapter has no Check Your Understanding boxes |
| Exercises tab | end-of-section problems, conceptual questions, and the AP test prep of 5.1 |
| Exercise placement | an exercise goes with the section that introduces what it tests; 5.3's Critical Thinking item `exer-86622` tests terminal velocity and the drag force, so it is set with 5.2 and carries `source_section` "5.3"; 5.3's conceptual question on the soles of shoes (`fs-id1165296252981`) and 5.2's on oil and gasoline on a road in the rain (`fs-id1165296261672`) both test the coefficient of friction, so the chapter pass set them with 5.1, carrying `source_section` "5.3" and "5.2"; every one of these is named in the `exercise_notes` of both the section that prints it and the section that takes it, and a section that gives an item up keeps the numbers the book prints the rest under; no AP item is held, since all four of 5.1's test friction (new) |
| AP test prep | included; an unkeyed AP item (5.1's second and fourth) is kept as an open item with its options as the book prints them and an AI-marked suggested approach |
| PhET interactive links | dropped (Forces and Motion in 5.1, Masses & Springs in 5.3) |
| Cross-references to other chapters | plain text where the target is unbuilt: the four basic forces and Problem-Solving Strategies in Chapter 4, the tightrope walker of 4.5 and the traffic light of 4.7 in 5.3's problems, and the fluid dynamics of Chapter 12 that 5.2 promises |
| Answers to book problems | the book's answer key only; never generated; unkeyed problems are left out and named in the notes |
| Suggested approaches for open questions | generated, marked AI |
| Generated questions | none |
| Concept nodes | testable units only; kinds idea/result/skill; canonical ids; 21 nodes written into `book.json` before the sections were built (7 for 5.1, 6 for 5.2, 8 for 5.3) with 37 edges into Chapters 2, 3 and 4 |
| Nodes another chapter owns | Chapter 4 merged first and holds `friction` (4.3), `drag-force` (4.7), `hookes-law` (16.1) is Chapter 16's and `force-constant` (16.1) with it, so 5.1, 5.2 and 5.3 write `reinforces` coverage rows for them rather than introducing them again, and this chapter's nodes rest on them; the chapter pass weighed the three moves the report asked for and left every node where it stands, since each of those sections is built and introduces the node there, and Chapter 5's own nodes rest on them as prerequisites either way (new) |
| Formulas | `ch05/chapter.json`: 24 equations, the boxed and named ones important (the two friction magnitudes and the maximum, friction on a slope, μ = tan θ, the drag force, terminal velocity, Stokes' law, Hooke's law for a deformation, the change in length, stress and strain, the force constant of a rod, the shear and bulk deformations) and the worked steps not. The chapter pass wrote every anchor from the section plans and added the twenty-fourth row, the fractional change in volume `eq-dv-over-v0`, which Example 5.6 solves for and `sim-cube` reads out (new) |
| Book manifest | `ch05` after `ch03` in `book.json` chapters, which the merge tool puts in numeric order |
