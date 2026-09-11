# Config: College Physics 2e, Chapter 3

Proposed by the agent after exploration (2026-09-11). Status: applied as
proposed, since Chen asked for Chapters 2 and 3 to be built in one job
without check-ins; the per-section stops of rule 2 and the plan reviews of
rule 5 are replaced by a plan file per section, written before the section
is built and left for review after, as Chapter 1 did it. Each line is a
setting and its value. Lines that repeat the Chapter 1 and Chapter 2
configs are unchanged unless marked.

| Setting | Value |
|---|---|
| Chapter | 3 Two-Dimensional Kinematics, modules m42126 (introduction), m42104, m42127, m42128, m42042, m42045, PDF pp. 119–166 |
| Front matter | the chapter introduction (m42126) is recorded as `intro_module` and waits for a chapter landing page |
| Unit of work | one section = one page; sections never folded (rule 11); 3.1, two pages of the book, stays a page of its own |
| Order | 3.1 to 3.5 in book order, built in parallel by one agent per section |
| Loop | plan file → build → validator, all five sections in one pass; review after |
| Prose | verbatim; objectives, summary, glossary pulled into views; the book's boxed notes (Vectors in this Text, Independence of Motion, Determining Vectors and Vector Components with Analytical Methods, Review of Kinematic Equations, Defining a Coordinate System, Take-Home Experiment: Relative Velocity of a Boat, Relativity and Einstein) kept verbatim as notes; the numbered steps of the head-to-tail method, the analytical method and the projectile method kept as the book's numbered steps |
| Tables | none of the book's; the two tables of 3.2's AP items travel with the items |
| Sub-concept headers | agent decides per section, reported in the plan |
| Figures | a demo per idea or result the section introduces; every sketch replaced by a demo, and a demo that lets the reader drag a vector may stand for a whole run of the book's step figures, carrying the first number of the run and the rest as further originals; a photograph kept when the text points at it or it shows the thing the passage is about, dropped when it is a splash image (the New York intersection of 3.1, the Hawaiian map of 3.2 unless the plan finds the text points at it), each listed in the plan (rule 14) |
| Demo sliders | whatever is interesting and variable in the idea: the two legs of a walk, a vector's magnitude and angle, the components of two vectors, a launch speed and angle, a river's and a boat's speed |
| Motion | a projectile flies, a boat crosses a river and a coin falls in the airliner, so those demos run finite loops with the scrubber; a vector diagram that answers its sliders is a still picture with no transport (rule 14) |
| 3D | none; the plane of motion is the canvas, and 3D is reserved for a spatial idea |
| Figures that serve exercises | copied over faithfully, no sliders: the map of paths that problems 1 and 2 of both 3.2 and 3.3 refer to (built once, in 3.2, and carried on the card of 3.3's problem 1, so that no book figure is kept twice), the five galaxies of 3.5, the vector diagrams a keyed problem refers to (3.2's velocities v_A and v_B, 3.3's triangular plot and pilot's flight, 3.5's hockey player) |
| Extra simulations | agent proposes only those that open a view the required figures do not, builds the one or two that clearly earn their place, and says in the plan which were left (rule 15) |
| Colour coding | position, velocity and acceleration hues from the global tier; a vector's components and magnitude take the type of the vector, so the displacement magnitudes and components of 3.2 and 3.3 are position, the velocity components of 3.4 and 3.5 are velocity, and $a_x$, $a_y$ are acceleration; angles stay untyped and in ink; forty symbol rows added to `book.json` (`t0`, `tf`, `vf`, `y`, `y0`, `m`, `b`, `A_mag`, `A_x`, `A_y`, `B`, `B_x`, `B_y`, `C`, `D`, `R`, `R_x`, `R_y`, `v_x`, `v_y`, `v_0x`, `v_0y`, `a_x`, `a_y`, `h`, `v_tot`, `v_totx`, `v_toty`, `v_boat`, `v_river`, `v_w`, `v_wx`, `v_wy`, `v_p`, `v_px`, `v_py`, `θ_0`, `θ_v`, `θ_A`, `θ_B`), the first seven for Chapter 2; no new type (new) |
| Inline exercises | none: the chapter has no Check Your Understanding boxes |
| Exercises tab | end-of-section problems, conceptual questions, AP test prep |
| Exercise placement | an exercise goes with the section that introduces what it tests; the AP items of 3.2 test a projectile's vertical and horizontal velocity, so both are held for 3.4 with both sections' `exercise_notes` saying so; the Critical Thinking item of 3.5 on two launchers tests the maximum height and is set with 3.4 the same way; the 3.1 AP items stay in 3.1 |
| AP test prep | included; an unkeyed AP item (3.1's second, 3.2's first, 3.4's own) is kept as an open item with its options as the book prints them and an AI-marked suggested approach, as rule 13 and the 2.5 precedent do (the sections first left them out; changed in the chapter pass) |
| PhET interactive links | dropped (Ladybug Motion 2D, Maze Game, Vector Addition, Projectile Motion, Motion in 2D) |
| Cross-references to other chapters | plain text where the target is unbuilt (Dynamics: Newton's Laws of Motion in 3.2); references to 2.x and 3.x sections may be plain text too |
| Answers to book problems | book answer key only; never generated; unkeyed problems are left out and named in the notes; the Construct Your Own Problem and Unreasonable Results items are unkeyed and left out |
| Suggested approaches for open questions | generated, marked AI |
| Generated questions | none; a node with no book exercise of its own (scalar multiplication) is noted in the plan, no question generated |
| Concept nodes | testable units only; kinds idea/result/skill; canonical ids; 22 nodes written into `book.json` before the sections were built (3 for 3.1, 7 for 3.2, 3 for 3.3, 6 for 3.4, 3 for 3.5) with edges into Chapters 1 and 2 |
| Formulas | `ch03/chapter.json`: 32 equations, the boxed ones important (Pythagoras, commutativity and subtraction, the component and resultant relations, the horizontal and vertical projectile equations, the recombination, maximum height, range, the velocity components) and the worked steps not; anchors written in the chapter pass from the section plans (new) |
| Book manifest | `ch03` after `ch02` in `book.json` chapters |
