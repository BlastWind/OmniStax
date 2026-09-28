# Config: College Physics 2e, Chapter 31

Written by the prep agent after exploration (2026-09-28). Status: applied as
proposed on 2026-09-28, on Chen's instruction to finish the book without
check-ins; the per-section stops of rule 2, the plan reviews of rule 5 and the
extra-simulation picks of rule 15 are replaced by a plan file per section,
written before the section is built and left for review after. Each line is a
setting and its value.

| Setting | Value |
|---|---|
| Chapter | 31 Radioactivity and Nuclear Physics, modules m42620 (introduction), m42623, m42627, m42631, m42633, m42636, m42640, m42644 |
| Front matter | the chapter introduction (m42620) is a page of its own in `ch31/intro/`, listed before 31.1 (rule 21), built in the prep pass, with its one photograph, Figure 31.1 |
| Unit of work | one section = one page; sections never folded (rule 11); 31.2 and 31.7, the two thin ones, stay pages of their own |
| Order | 31.1 to 31.7 in book order, built in parallel by one agent per section |
| Loop | plan file → build → validator, all seven sections in one wave; review after |
| Prose | verbatim; objectives, summary and glossary pulled into the tables and views; kept verbatim: the Collisions note (31.1), Things Great and Small: Nuclear Decay Helps Explain Earth's Hot Interior with Figure 31.23 inside it, and the Problem-Solving Strategies box (31.6) |
| Tables | Table 31.1 in 31.1 and Table 31.2 in 31.3, each a `div.book-table` with the book's eyebrow and title (rule 19); the table inside 31.7's first problem goes with that unkeyed problem |
| Sub-concept headers | the book's own where a module prints them; the agent's where it prints none (31.6 and 31.7 print none of their own) |
| Figures | a sim per idea or result the section introduces; every sketch and graph of the chapter replaced by a figure with the book's image as its original; photographs kept as `ch31/exploration.md` lists (all twelve, since the text points at each or is about it) |
| Folds | judged per section; proposed: the decay modes 31.15 + 31.17 + 31.18 as one scene with a choice of mode (β⁺ with electron capture as a fourth choice), and the potential and the wave function 31.27 + 31.28 as one scene; 31.11 and 31.25 are in different sections and cannot fold |
| Motion | 31.3, 31.8(b), 31.9, 31.15 + 31.17 + 31.18, 31.19 and 31.27 + 31.28 have a time in them and may register a cycle; 31.5, 31.12, 31.14, 31.22, 31.24, 31.25, 31.26 are still (rule 14) |
| 3D | one candidate, the packed nucleus of Figure 31.11 (physical 3D, bounded free orbit, `F.view3d`), decided by 31.3's plan; everything else flat; no locked view |
| Figures that serve exercises | on the exercise card's `figure` field; this chapter's exercises carry no image, and the one table inside an exercise leaves with its unkeyed problem |
| Extra simulations | the plan decides; proposed in `exploration.md` § BE INSPIRING: the coin-flipping sample beside the decay curve (31.5), the decay walk on the chart of the nuclides (31.4) |
| Colour coding | two new types, `activity` and `decay-constant`, staged in `ch31/book-rows.json`; see `ch31/COLOR.md` |
| Inline exercises | none: no Check Your Understanding box in the chapter |
| Exercises tab | end-of-module problems, conceptual questions, AP test prep |
| Exercise placement | as `ch31/exploration.md` § Exercises that belong to another section lists, each with `source_section` and a note in both sections |
| AP test prep | included; a key commented out of the CNXML is no key; an unkeyed AP item is kept as an open item with its options and an AI-marked suggested approach, never graded |
| PhET interactive links | dropped (Beta Decay 31.1, Radioactive Dating Game 31.2, Alpha Decay 31.5, Nuclear Fission 31.6, Quantum Tunneling and Wave Packets 31.7), each named in `notes` |
| Cross-references to other chapters | plain text; Chapters 28 to 30 are not built, and the Appendix A and B references stay plain text |
| Answers to book problems | book answer key only; never generated; 41 unkeyed problems are left out and named in `exercise_notes` |
| Suggested approaches for open questions | generated, marked AI: all 27 conceptual questions and the six unkeyed AP items |
| Generated questions | none; a concept with no book exercise is noted in the plan |
| Concept nodes | testable units only; kinds idea/result/skill; canonical ids; 44 nodes and 97 prerequisite edges merged before the sections were built (5 for 31.1, 5 for 31.2, 9 for 31.3, 9 for 31.4, 7 for 31.5, 5 for 31.6, 4 for 31.7) |
| Formulas | `ch31/chapter.json`: the stated relations important, worked substitutions not; decay equations written in nuclide notation are equations; no anchors until the chapter pass |
| Errata | carried as printed and named in `notes`, as `exploration.md` lists |
| Credit | `ai` is `{"text": "Claude Opus 5.5", "figures": "Claude Opus 5.5"}`, `built` 2026-09-28 |
| Book manifest | `ch31` in `book.json` chapters, merged with `ost merge college-physics-2e 31` |
