# Config: College Physics 2e, Chapter 34

Written by the prep agent after exploration (2026-09-28). Status: applied as
proposed on 2026-09-28, on Chen's instruction to finish the book without
check-ins; the per-section stops of rule 2, the plan reviews of rule 5 and the
extra-simulation picks of rule 15 are replaced by a plan file per section,
written before the section is built and left for review after. Each line is a
setting and its value.

| Setting | Value |
|---|---|
| Chapter | 34 Frontiers of Physics, the book's last chapter, modules m42683 (introduction), m42686, m42689, m42691, m42692, m42694, m42696, m42704 (from `collections/college-physics-2e.collection.xml`) |
| Front matter | the chapter introduction (m42683) is a page of its own in `ch34/intro/`, listed before 34.1 (rule 21), built in the prep pass with Figure 34.1 (photograph) |
| Back matter | the four appendix modules after the chapter (m42699, m42702, m42720, m42709) are not a summary; no `summary/` page for the chapter or the book |
| Unit of work | one section = one page; sections never folded (rule 11); 34.3, 34.5 and 34.7, the thin ones, stay pages of their own |
| Order | 34.1 to 34.7 in book order, built in parallel by one agent per section |
| Loop | plan file → build → validator, all seven sections in one wave; review after |
| Prose | verbatim; objectives, summary and glossary pulled into the tables and views; kept verbatim: the note Making Connections: Cosmology and Particle Physics (34.1); 34.7's three numbered lists of questions stay as ordered lists |
| Tables | none in the chapter |
| Sub-concept headers | the book's own where a module prints them (34.2, 34.4, 34.7, and 34.1's and 34.2's bold-italic run-in heads); the agent's where it prints none (34.3, 34.5, 34.6) |
| Figures | a sim per idea or result the section introduces; every sketch and graph replaced by a figure with the book's image as its original; artist's renditions (34.13, 34.17) judged per section; photographs kept as `ch34/exploration.md` lists |
| Folds | judged per section; proposed: 34.6 + 34.7(a) (the recession of galaxies and the Big Bang pictured) as one expanding-lattice figure in 34.1 |
| Motion | 34.6 (expansion), 34.10 (the elevator's beam), a light ray's flight in 34.11 and 34.12 if the plan argues it, the double pendulums of 34.5 may register a cycle; graphs (34.5, 34.7(b), 34.18(b), 34.23, 34.25(a)), the timeline 34.9 and the Schwarzschild sim are still (rule 14) |
| 3D | candidates in `exploration.md` § 3D: the Milky Way (physical, 34.1), the ceramic lattice 34.25(b) (physical, 34.6), the curvature of the universe (mathematical Sim, 34.4); each section's plan decides |
| Figures that serve exercises | Figure 34.26, the parallax cone, is numbered by the book and travels on `fs-id1169737812426`'s card `figure` field as a faithful copy; the only exercise image in the chapter |
| Extra simulations | the plan decides; proposed in `exploration.md` § BE INSPIRING |
| Colour coding | no new type; see `ch34/COLOR.md` |
| Inline exercises | none: no Check Your Understanding box in the chapter |
| Exercises tab | end-of-module problems and conceptual questions; no AP test prep in the chapter |
| Exercise placement | as `ch34/exploration.md` § Exercises that belong to another section lists, each with `source_section` and a note in both sections |
| PhET interactive links | none in the chapter |
| Cross-references to other chapters | plain text |
| Answers to book problems | book answer key only; never generated; 15 unkeyed problems are left out and named in `exercise_notes` |
| Suggested approaches for open questions | generated, marked AI: all 28 conceptual questions |
| Generated questions | none; a concept with no book exercise is noted in the plan |
| Concept nodes | testable units only; kinds idea/result/skill; canonical ids; 36 nodes and 71 prerequisite edges merged before the sections were built (9 for 34.1, 9 for 34.2, 2 for 34.3, 7 for 34.4, 3 for 34.5, 4 for 34.6, 2 for 34.7) |
| Formulas | `ch34/chapter.json`: Hubble's law, the Schwarzschild radius and the critical density, all important; worked substitutions not; no anchors until the chapter pass |
| Errata | carried as printed and named in `notes`, as `exploration.md` lists |
| Credit | `ai` is `{"text": "Claude Opus 5.5", "figures": "Claude Opus 5.5"}`, `built` 2026-09-28 |
| Book manifest | `ch34` in `book.json` chapters, merged with `ost merge college-physics-2e 34` |
