# Config: College Physics 2e, Chapter 16

Proposed by the agent after exploration (2026-09-07). Status: confirmed
2026-09-07. Each line is a setting and its value. Lines that
repeat the Chapter 2 config are unchanged unless marked.

| Setting | Value |
|---|---|
| Chapter | 16 Oscillatory Motion and Waves, modules m42239 to m42250, PDF pp. 703–752 |
| Unit of work | one section = one page; sections never folded (rule 11); 16.2 stays a page of its own |
| Order | 16.1 to 16.11 in book order; chapter intro as a short landing page |
| Loop | per section: plan message → build → stop for feedback |
| Prose | verbatim; objectives, summary, glossary pulled into views; Take-Home Experiment boxes kept verbatim as notes (new) |
| Sub-concept headers | agent decides per section, reported in the plan |
| Figures | a sim per idea or result the section introduces; every sketch and graph replaced by a sim; a photograph kept when it serves the narrative and the text, dropped when it is decoration, each listed in the plan (the Tacoma Narrows photograph is kept); no 3D expected, the chapter is planar (rule 14) |
| Sim sliders | whatever is interesting and variable in the idea (mass, force constant, amplitude, damping, drive frequency, string length, harmonic number) |
| Motion | steady oscillations and travelling waves run as an endless cycle; damped, driven and released motions are finite and get the time scrubber (new) |
| Figures that serve exercises | none of its own, corrected in the audit pass (2026-09-12) from the proposal above: the two AP items of 16.3 that carry images, the pair of oscillation graphs and the single spring graph, are unkeyed in the source, so under rule 13 both items were left out and their images with them, and 16.9 and 16.10 are not built. The chapter therefore has no `figure` row without a number and no bare “Figure” eyebrow; the one book image an exercise of this chapter refers to, the two skydivers beside problem 9 of 16.3, travels on that exercise card's own `figure` field, which is the second of the two routes the book's `RULES.md` allows |
| Extra simulations | agent proposes only those that open a view the required figures do not; user picks from the plan (rule 15) |
| Feedback stops | agent waits until the user has answered every point before building (rule 16) |
| Colour coding | t, x, v, a hues carried over; T, f and ω share the time hue; amplitude and wavelength share the position hue; force and force constant get a new force hue; kinetic, potential and total energy get a new energy hue; both new hues added to `book.json` and RULES.md at 16.1 (new) |
| Inline exercises | Check Your Understanding items, after the passage they test; an untyped exercise is classed by the header it sits under (16.1's is a conceptual question) |
| Exercises tab | end-of-section problems, conceptual questions, AP test prep |
| Exercise placement | an exercise goes with the section that introduces what it tests; one placed early by the book is held for the later page (AP question 1 of 16.1 goes to 16.3) |
| AP test prep | included |
| Answers to book problems | book answer key only; never generated; unkeyed problems are left out unless the user supplies an answer |
| Suggested approaches for open questions | generated, marked AI |
| Generated questions | none; agent asks only when a concept has no book exercise testing it |
| Concept nodes | testable units only; kinds idea/result/skill; canonical ids; one concepts table in the book's `book.json` that grows across the chapter; prerequisites in Chapters 2, 4, 5, 6 and 7 become placeholder nodes that open the OpenStax page until those sections are built |
| Formulas | the variables and equations tables of `ch16/chapter.json`, same shape as Chapter 2 |
| Book manifest | `ch16` added to `book.json` chapters when 16.1 is built, not before |
