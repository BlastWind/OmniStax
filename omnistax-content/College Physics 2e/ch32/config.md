# Config: College Physics 2e, Chapter 32

Written by the prep agent after exploration (2026-09-28). Status: applied as
proposed on 2026-09-28, on Chen's instruction to finish the book without
check-ins; the per-section stops of rule 2, the plan reviews of rule 5 and the
extra-simulation picks of rule 15 are replaced by a plan file per section,
written before the section is built and left for review after. Each line is a
setting and its value.

| Setting | Value |
|---|---|
| Chapter | 32 Medical Applications of Nuclear Physics, modules m42646 (introduction), m42649, m42652, m42654, m42656, m42659, m42662, m42665 |
| Front matter | the chapter introduction (m42646) is a page of its own in `ch32/intro/`, listed before 32.1 (rule 21), built in the prep pass, with its one photograph, Figure 32.1 |
| Unit of work | one section = one page; sections never folded (rule 11); 32.3 and 32.4, the two thin ones, stay pages of their own |
| Order | 32.1 to 32.7 in book order, built in parallel by one agent per section |
| Loop | plan file → build → validator, all seven sections in one wave; review after |
| Prose | verbatim; objectives, summary and glossary pulled into the tables and views; kept verbatim: the Medical Application boxes (32.1, 32.3), the Misconception Alert: Activity vs. Dose, the Radiation Protection and Risk versus Benefit passages and the Problem-Solving Strategy (32.2) |
| Tables | Table 32.1 (32.1), Tables 32.2 to 32.6 (32.2), Table 32.7 (32.3), each a `div.book-table` with the book's eyebrow and title (rule 19); Table 32.1's procedure headings are spanning rows |
| Sub-concept headers | the book's own where a module prints them; the agent's where it prints none (32.4 to 32.7 print none of their own) |
| Figures | a sim per idea or result the section introduces; every sketch and graph of the chapter replaced by a figure with the book's image as its original; photographs kept as `ch32/exploration.md` lists |
| Folds | judged per section; proposed: 32.13 + 32.14 (the Coulomb barrier and the approaching nuclei) as one scene with an energy slider; 32.21 + 32.22 (fission and the chain) as one scene; 32.24 + 32.25 (gun and implosion) as one scene with a choice of design |
| Motion | 32.3 (γ rays through the collimator), 32.5 (annihilation pair), 32.9 (rotating source), 32.13 + 32.14, 32.21 + 32.22, 32.23 (reactor with control rods), 32.24 + 32.25 may register a cycle; 32.6, 32.12, 32.29 and the tables are still (rule 14) |
| 3D | candidates: the PET ring (32.5) and the crossfire of Figure 32.9 as physical 3D scenes with a bounded orbit, decided by their sections' plans; everything else flat; no locked view |
| Figures that serve exercises | on the exercise card's `figure` field: 32.2's shoe-store photo with `fs-id1357684` and 32.5's AP potential graph with `fs-id2720847`, both unnumbered |
| Extra simulations | the plan decides; proposed in `exploration.md` § BE INSPIRING |
| Colour coding | one new type, `dose` (Gy), staged in `ch32/book-rows.json`; see `ch32/COLOR.md` |
| Inline exercises | none: no Check Your Understanding box in the chapter |
| Exercises tab | end-of-module problems, conceptual questions, AP test prep |
| Exercise placement | as `ch32/exploration.md` § Exercises that belong to another section lists, each with `source_section` and a note in both sections |
| AP test prep | included; an unkeyed AP item is kept as an open item with its options and an AI-marked suggested approach, never graded |
| PhET interactive links | dropped (Simplified MRI 32.1, Alpha Decay 32.2, Nuclear Fission 32.6), each named in `notes` |
| Cross-references to other chapters | plain text; Appendix A and Frontiers of Physics stay plain text |
| Answers to book problems | book answer key only; never generated; 29 unkeyed problems are left out and named in `exercise_notes` |
| Suggested approaches for open questions | generated, marked AI: all 29 conceptual questions and the five unkeyed AP items |
| Generated questions | none; a concept with no book exercise is noted in the plan |
| Concept nodes | testable units only; kinds idea/result/skill; canonical ids; 41 nodes and 89 prerequisite edges merged before the sections were built (6 for 32.1, 9 for 32.2, 3 for 32.3, 3 for 32.4, 9 for 32.5, 8 for 32.6, 3 for 32.7) |
| Formulas | `ch32/chapter.json`: dose units, the proton-proton cycle, D-T fusion, neutron-induced fission and breeding important; worked substitutions not; no anchors until the chapter pass |
| Errata | carried as printed and named in `notes`, as `exploration.md` lists |
| Credit | `ai` is `{"text": "Claude Opus 5.5", "figures": "Claude Opus 5.5"}`, `built` 2026-09-28 |
| Book manifest | `ch32` in `book.json` chapters, merged with `ost merge college-physics-2e 32` |

## What the build changed

| Setting | As built |
|---|---|
| Folds | Figure 32.13 + 32.14 (the Coulomb barrier and the two nuclei over it, with a $\text{KE}$ slider), 32.21 + 32.22 (one fission close up beside the chain, with $x$ a choice and the share of neutrons sent on a slider) and 32.24 + 32.25 (gun and implosion, a choice of design) are one figure each; two Sims are added: the same energy as a dose to a body or a forearm in 32.2 and a log ruler of weapon yields in 32.7 |
| 3D | none: the PET ring (32.5) and the crossfire (32.9) are flat cuts, since every line of a pair and every beam lies in the cut; no PET/SPECT toggle |
| Motion | the Anger camera and the PET ring (32.1), the ionization tracks and the dental shielding (32.2), the crossfire (32.3), the barrier (32.5), the chain and the reactor (32.6) and the bomb's chain (32.7) register a cycle; the Sun's cycle (32.15) and the H-bomb (32.28) are story sliders; the irradiation plant, the BE/$A$ curve, the dose Sim, the energy pies and the yield ruler are still. The ionization tracks move, against the prep's proposal, because the book's arrows are rays crossing the cells (rule 24.1) |
| Colour coding | as `ch32/COLOR.md` § Bindings as built: 32.1, 32.5, 32.6 and 32.7 bind `velocity` through $c$; 32.2, 32.5, 32.6 and 32.7 bind `mass`; 32.2 binds `decay-constant` in Example 32.1; 32.3 binds `angle` for the source's arc; `dose-equivalent-rem-and-sievert` carries `type: dose`; no figure draws the tokamak's field, so `magnetic-field` is unbound |
| Formulas | every form and every variables row anchored by the chapter pass |
| Credit | `ai` is `{"text":[{"model":"claude-opus-5-5","effort":"high"}],"figures":[{"model":"claude-opus-5-5","effort":"high"}]}`, `built` 2026-10-05 |
