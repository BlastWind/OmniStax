# Config: College Physics 2e, Chapter 33

Written by the prep agent after exploration (2026-09-28). Status: applied as
proposed on 2026-09-28, on Chen's instruction to finish the book without
check-ins; the per-section stops of rule 2, the plan reviews of rule 5 and the
extra-simulation picks of rule 15 are replaced by a plan file per section,
written before the section is built and left for review after. Each line is a
setting and its value.

| Setting | Value |
|---|---|
| Chapter | 33 Particle Physics, modules m42667 (introduction), m42669, m42671, m42718, m42674, m42678, m42680 (from `collections/college-physics-2e.collection.xml`) |
| Front matter | the chapter introduction (m42667) is a page of its own in `ch33/intro/`, listed before 33.1 (rule 21), built in the prep pass with Figures 33.1 (photograph) and 33.2 (the book's image of the substructure ladder) |
| Unit of work | one section = one page; sections never folded (rule 11); 33.1 and 33.2, the two thin ones, stay pages of their own |
| Order | 33.1 to 33.6 in book order, built in parallel by one agent per section |
| Loop | plan file → build → validator, all six sections in one wave; review after |
| Prose | verbatim; objectives, summary and glossary pulled into the tables and views; kept verbatim: the notes Patterns and Puzzles: Atoms, Nuclei, and Quarks (33.5) and Making Connections: Unification of Forces (33.6) |
| Tables | Table 33.1 (33.2), Table 33.2 (33.4), Tables 33.3 and 33.4 (33.5), each a `div.book-table` with the book's eyebrow and title (rule 19); Table 33.2's category headings and Table 33.4's Mesons and Baryons are spanning rows; the tables' footnotes kept |
| Sub-concept headers | the book's own where a module prints them (33.3, 33.4, 33.5); the agent's where it prints none (33.1, 33.2, 33.6) |
| Figures | a sim per idea or result the section introduces; every sketch and graph of the chapter replaced by a figure with the book's image as its original; photographs kept as `ch33/exploration.md` lists |
| Folds | judged per section; proposed: 33.4 + 33.5 (the photon exchange pictured and as a Feynman diagram) as one figure in 33.2, the moving charges tracing the diagram's lines as time runs; 33.9 (a)(b)(c) one synchrotron scene; 33.22 (a) and (b) kept as one figure |
| Motion | 33.3 (the pion's trip), 33.4 (the photon's trip), 33.8 (cyclotron spiral), 33.9 (synchrotron), 33.13 (annihilation), 33.17 (scattering) may register a cycle; Feynman diagrams, 33.15, 33.19, 33.20, 33.22(a), 33.24 and the tables are still (rule 14) |
| 3D | none: every figure is a diagram on a plane or a graph; no locked view |
| Figures that serve exercises | on the exercise card's `figure` field: the unnumbered cosmic-ray shower (`Figure_34_06_06-3872.jpg`) with 33.6's `fs-id1169738035555`; the unnumbered bubble-chamber trace with 33.5's AP `fs-id1742950` (unkeyed, open); 33.5's Δ⁺⁺ resonance graph goes with the unkeyed `fs-id1169738092971` and is left out |
| Extra simulations | the plan decides; proposed in `exploration.md` § BE INSPIRING |
| Colour coding | no new type; see `ch33/COLOR.md` |
| Inline exercises | none: no Check Your Understanding box in the chapter |
| Exercises tab | end-of-module problems, conceptual questions, AP test prep |
| Exercise placement | as `ch33/exploration.md` § Exercises that belong to another section lists, each with `source_section` and a note in both sections |
| AP test prep | included; an unkeyed AP item is kept as an open item with its options and an AI-marked suggested approach, never graded |
| PhET interactive links | none in the chapter |
| Cross-references to other chapters | plain text, including Frontiers of Physics (Chapter 34, unbuilt) |
| Answers to book problems | book answer key only; never generated; 26 unkeyed problems are left out and named in `exercise_notes` |
| Suggested approaches for open questions | generated, marked AI: all 32 conceptual questions and the nine unkeyed AP items |
| Generated questions | none; a concept with no book exercise is noted in the plan |
| Concept nodes | testable units only; kinds idea/result/skill; canonical ids; 36 nodes and 73 prerequisite edges merged before the sections were built (4 for 33.1, 4 for 33.2, 6 for 33.3, 9 for 33.4, 8 for 33.5, 5 for 33.6) |
| Formulas | `ch33/chapter.json`: the energy-time uncertainty, the range of a force, $m = \Delta E/c^{2}$, $\text{PE}_{\text{elec}} = qV$, the lepton and neutron decays, $d \to u$ and proton decay important; worked substitutions not; no anchors until the chapter pass |
| Errata | carried as printed and named in `notes`, as `exploration.md` lists |
| Credit | `ai` is `{"text": "Claude Opus 5.5", "figures": "Claude Opus 5.5"}`, `built` 2026-09-28 |
| Book manifest | `ch33` in `book.json` chapters, merged with `ost merge college-physics-2e 33` |

## What the build changed

| Setting | As built (2026-10-05) |
|---|---|
| Folds | 33.4 + 33.5 + 33.6 in 33.2 (the pion's diagram joined the proposed pair as a choice); 33.10 + 33.11 in 33.3 (Fermilab or SLAC as a choice); 33.15 + 33.19 in 33.5; 33.9 (a)(b)(c) one synchrotron scene; 33.22 (a) and (b) one figure |
| Motion | moving: 33.3, the 33.4 fold, 33.8, 33.9, the 33.10 fold, 33.13, 33.17; a story slider: 33.23; still: the decay checker, the 33.15 fold, 33.20, 33.21, 33.22, 33.24 |
| Sims | one, the decay checker of 33.4 |
| Photographs | 33.7, the artist's drawing, kept as a photograph |
| Formulas | all 16 forms anchored by the chapter pass; `eq-virtual-particle-energy`, `eq-pion-mass` and `eq-mass-from-energy-33` write `\km` |
| Exercise placement | AP `fs-id2432948` (a Z boson's decay into K⁰ or electron-positron pairs) also moves 33.3 → 33.4, since it needs Table 33.2 as `fs-id2783273` does; 33.3 keeps 2 keyed and 2 open AP items, 33.4 2 and 2 |
| Credit | `ai` is `{"text": [{"model": "claude-opus-5-5", "effort": "high"}], "figures": [{"model": "claude-opus-5-5", "effort": "high"}]}`, `built` 2026-10-05; the intro keeps its prep-pass credit |
| Colour | the quark color charges are one set of six constants in 33.5 and 33.6 (`ch33/COLOR.md`) |
