# Config: College Physics 2e, Chapter 10

Proposed by the agent after exploration (2026-09-14). Status: applied as
proposed, on Chen's instruction to finish the book in waves without
check-ins; the per-section stops of rule 2 and the plan reviews of rule 5 are
replaced by a plan file per section, written before the section is built and
left for review after, as Chapters 1 to 9 did it. Each line is a setting and
its value. Lines that repeat the Chapter 1 to 9 configs are unchanged unless
marked.

| Setting | Value |
|---|---|
| Chapter | 10 Rotational Motion and Angular Momentum, modules m42176 (introduction), m42177, m42178, m42179, m42180, m42182, m42183, m42184 |
| Front matter | the chapter introduction (m42176) is a page of its own in `ch10/intro/`, listed before 10.1 (rule 21), built in the prep pass; it keeps both of its photographs, the tornado (Figure 10.1) by rule 21 and the spinning skater (Figure 10.2) because the module's own sentence points at it, as Chapter 4's introduction keeps two |
| Unit of work | one section = one page; sections never folded (rule 11); 10.7, which has one problem and two conceptual questions, stays a page of its own |
| Order | 10.1 to 10.7 in book order, built in parallel by one agent per section |
| Loop | plan file → build → validator, all seven sections in one wave; review after |
| Prose | verbatim; objectives, summary, glossary pulled into the tables and views; the book's boxed notes kept verbatim (the Making Connections boxes of 10.2, 10.3, 10.4 and 10.5, the Take-Home Experiments of 10.1, 10.3 and 10.4, and the numbered Problem-Solving Strategies of 10.2, 10.3 and 10.4, each kept as the book's numbered list) |
| Tables | two, and both stay in the text as tables in a `div.book-table` with the number the book prints (new): Table 10.1 Rotational and Translational Quantities in 10.1, and Table 10.2 Rotational Kinematic Equations in 10.2. A table is never a `<figure>`. 10.1's table may also be the scene of that section's one-wheel figure, but the table itself stays |
| Sub-concept headers | agent decides per section, reported in the plan; 10.3 and 10.4 each print one header of their own ("Rotational Inertia and Moment of Inertia", "How Thick Is the Soup? Or Why Don't All Objects Roll Downhill at the Same Rate?") and 10.5 prints "Conservation of Angular Momentum"; those three are the book's and are kept, and every other header is the agent's |
| Figures | a sim per idea or result the section introduces; every diagram replaced by a sim with the book's image kept as its original; a photograph kept where the text points at it or it shows the thing the passage is about, dropped where it is decoration; each listed in the plan (rule 14) |
| Figure numbers | every figure of this chapter is numbered, including those inside examples, AP items, conceptual questions and problems (new; Chapter 9 numbered only the narrative ones). The chapter runs 10.1 to 10.41 and `exploration.md` lists every number; 10.6's AP item citing "the table in Figure 10.12" is what settles the count |
| Photographs kept | judged per section against rule 14: the tornado (10.1) and the skater (10.2) on the introduction page, the worker at the grindstone (10.16), the flywheel bus (10.18) and the rescue helicopter (10.20) where 10.4's text points at them, the bowling ball among the pins (10.32) which opens 10.6 with the thing the passage is about; the yo-yo (10.9), the racing bicycle (10.14), the cloud of gas and dust (10.22) and the rifled cannon barrel (10.31) sit inside exercises and travel on their items' cards |
| Folds | judged per section; Figure 10.4 and Figure 10.5, which draw the same circle first with the tangential acceleration alone and then with the centripetal acceleration beside it, are one scene with folds, and 10.25's two poses of the skater, which the book prints under one number as (a) and (b) in a single image, are one photo row with one image, neither a fold nor a row with two originals |
| Figures that serve exercises | the book's own rules give two ways of carrying an image an exercise refers to; this chapter uses the exercise card's own `figure` field throughout (new), as Chapter 4 does, for 10.9 the yo-yo, 10.14 the racing bicycle, 10.15 the motorcycle wheel, 10.22 the cloud of gas and dust, 10.27 the child on the platform, 10.28 the moon's orbit, 10.29 the four ways off a merry-go-round, 10.30 the diver, 10.31 the cannon barrel, 10.35 the twin skaters, 10.36 the skater catching a ball and 10.41 Earth's precession. A section that wants one of these redrawn in the text instead says so in its plan. Two of them appear nowhere, because the problems they belong to are unkeyed and left out: 10.15 the motorcycle wheel (fs-id3397406 in 10.3) and 10.36 the skater catching a ball (fs-id1048149 in 10.6); each section's `notes` names the figure that left with its problem |
| Sim sliders | whatever is interesting and variable in the idea: the radius of a wheel and its angular acceleration, the time a torque acts, where a force is applied and how large it is, where the mass of a body sits relative to its axis, the shape of a body as a choice among the ten of Figure 10.12, the height of an incline and which body rolls down it, the skater's arms in or out, where a disk strikes a nailed stick, and the tilt of a gyroscope's axis |
| Motion | decided per figure (new, and unlike Chapter 9). This chapter has time in it: 10.1 and 10.2 are kinematics, 10.4's cans race, 10.5's skater speeds up and 10.7's gyroscope precesses, so a figure whose idea contains a clock registers a cycle and gets the app's transport, while a figure that only answers its sliders (a free-body diagram of a torque, the right-hand rule, the moment-of-inertia table) stays still and gets none. Every plan line says which and why (rule 14) |
| 3D | at most one scene, and only in 10.7, argued in the plan rather than assumed (rule 28.3): the precessing gyroscope is the chapter's only candidate, since its lesson is an arrangement of three perpendicular directions in space. The right-hand rule and the direction of a torque are drawn from a locked view (rule 28.2), and every other scene of the chapter is planar with the plane of the rotation as the canvas |
| Colour coding | three new types (new): `angular-acceleration` labelled angular acceleration with the dimension rad/s², `rotational-inertia` labelled moment of inertia with kg·m², and `angular-momentum` labelled angular momentum with kg·m²/s, each because the chapter's figures draw it and its readouts state it and rule 7 keeps a derived quantity its own type. Chapter 9's `torque`, Chapter 8's `momentum`, Chapter 7's `energy` and Chapter 6's `angular-rate` are used as they stand; the radii and lever arms are positions, the masses $m$ and $M$ and the angle $\theta$ stay untyped and in ink. Eighteen symbol rows added; the change in angular momentum is keyed `ΔL_ang` with the macro `\kdLang` because Chapter 5 holds `ΔL` for a change in length, and 10.6's $v_\text{CM}$ uses Chapter 8's `v_cm`. `ch10/COLOR.md` says which types each section binds |
| Inline exercises | one per section: every module of the chapter carries exactly one Check Your Understanding box and every one is answered in the book, so each is placed inline after the passage it tests (new; Chapter 9 had none) |
| Exercises tab | end-of-module problems, conceptual questions, AP test prep |
| Exercise placement | an exercise goes with the section that introduces what it tests. Three of 10.3's six AP items ask about angular momentum and are set with 10.5 with `source_section: "10.3"`; all four of 10.4's AP items ask how a torque changes an angular velocity and are set with 10.3 with `source_section: "10.4"`; five of 10.6's eight AP items ask about torque and angular momentum rather than about collisions and are set with 10.5 with `source_section: "10.6"`; 10.6's third conceptual question, the motorcycle's handlebar, which the book prints again word for word as 10.7's first, is set with 10.7; and 10.1's third problem, the grindstone slowed by an axe, is set with 10.3 with `source_section: "10.1"`, since its angular acceleration comes through a torque and the moment of inertia of a disk. Both sections' `exercise_notes` say so in every case |
| AP test prep | included; an unkeyed AP item is kept as an open item with its options as the book prints them and an AI-marked suggested approach, never as a graded choice. 10.3's fifth AP item carries the stem of the sixth appended to its answer key and the sixth repeats a clause of its own question; both are set as the book prints them, with the stray sentence left off the keyed item, and 10.3's `notes` says so |
| PhET interactive links | dropped (Ladybug Revolution in 10.1) |
| Cross-references to other chapters | linked where the target is built, plain text where it is not; the chapter refers back to One-Dimensional Kinematics (2.5), Uniform Circular Motion and Gravitation (6.1 and 6.2) and Statics and Torque (9.2), all of which are built, and 10.4's references to Work, Energy, and Energy Resources are Chapter 7's, also built. References to sections of Chapter 10 itself may be plain text |
| Answers to book problems | book answer key only; never generated; the twenty-three unkeyed problems are left out and named in the notes, among them 10.4's Construct Your Own Problem item on the skater pulling his arms in and 10.5's on the Earth-Moon system |
| Suggested approaches for open questions | generated, marked AI: all thirty conceptual questions of the chapter and the fifteen unkeyed AP items |
| Generated questions | none; a node with no book exercise of its own is noted in the plan, no question generated |
| Concept nodes | testable units only; kinds idea/result/skill; canonical ids; 33 nodes written into `book.json` before the sections were built (6 for 10.1, 4 for 10.2, 6 for 10.3, 5 for 10.4, 5 for 10.5, 4 for 10.6, 3 for 10.7) with 115 edges into Chapters 2, 3, 4, 6, 7, 8 and 9 and within the chapter |
| Formulas | `ch10/chapter.json`: 31 equations, the stated and named ones important and the worked steps not; 84 variable rows; every row anchored by the chapter pass from the section plans, since the validator refuses an anchor into an unbuilt section |
| Book manifest | `ch10` after `ch09` in `book.json` chapters, merged with `ost merge college-physics-2e 10` |

## What the build changed (chapter pass, 2026-09-14)

A few lines of the table above needed a word after the sections were built,
and they are already corrected in it. Everything else stood.

- **Figure 10.25.** The config expected the skater's two poses as one row
  with two originals; the bundle prints (a) and (b) in a single image
  (`Figure_11_05_03.jpg`), so the row is a photo with one image.
- **Figures that appear nowhere.** 10.15 and 10.36 belong to unkeyed
  problems that are left out, and leave with them; the chapter's numbers
  otherwise run 10.1 to 10.41 without a gap, the exercise figures on their
  cards.
- **The two-collisions question.** 10.6's first conceptual question
  (fs-id1575956) is not printed in 10.7, which carries only the handlebar
  and the guidance gyroscope; it is set in 10.6 with an AI-marked approach,
  and the placement line and 10.6's notes now say that the handlebar is the
  question 10.7 takes.
- **The grindstone.** 10.1's third problem moved to 10.3 as `p12`, for the
  reason the placement line gives.
- **Variables.** 84 rows, not 82: 10.4 wanted `r_curv` for the radius of the
  disk its two figures turn and `R` for the radius of the rolling cylinder of
  Example 10.10; both symbols exist and no symbol row changed. `r_curv` is
  the chapter's key wherever $r$ is a distance from the axis (10.1 to 10.3,
  10.6, 10.7), and 9.2's `r_lever` is not used, so the chapter is consistent
  with itself.
- **Colour.** `ch10/COLOR.md`'s rows for 10.3, 10.4 and 10.6 were widened to
  the types the pages draw: 10.3 adds `acceleration`, `angular-rate` and
  `time`, 10.4 and 10.6 add `force`. Nothing binds a type it does not draw.
- **Weights.** Root rule 20's `weights_by` field is not in the schema, so the
  AI mark on weights lives in each section's `exercise_notes`, as the
  earlier chapters do it.
- **Glossary anchors.** The glossary table has no `anchor` field, so 10.7's
  request for one is not applied.
