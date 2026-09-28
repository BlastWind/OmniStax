# Config: College Physics 2e, Chapter 29

Written by the prep agent after exploration (2026-09-28). Status: applied as
proposed on 2026-09-28, on Chen's instruction to finish the book without
check-ins; the per-section stops of rule 2, the plan reviews of rule 5 and the
extra-simulation picks of rule 15 are replaced by a plan file per section, written
before the section is built and left for review after. Each line is a setting and
its value.

| Setting | Value |
|---|---|
| Chapter | 29 Quantum Physics, modules m42550 (introduction), m42554, m42558, m42563, m42568, m42573, m42576, m42579, m42581 |
| Front matter | the chapter introduction (m42550) is a page of its own in `ch29/intro/`, built in the prep pass, with both its images, the black fly (Figure 29.1) and the atom model (Figure 29.2), and its Making Connections box; its three defined terms sit in the glossary under 29.1 |
| Media file names | every section image of the bundle carries a space (`Figure 30_01_01a.jpg`) and is copied with an underscore (`Figure_30_01_01a.jpg`); where the bundle holds two variants, the one `source.md` names is used |
| Unit of work | one section = one page; 29.5, three paragraphs and one figure, stays a page (rule 11) |
| Order | 29.1 to 29.8 in book order, built in parallel by one agent per section |
| Loop | plan file → build → validator, all eight sections in one wave; review after |
| Prose | verbatim; objectives, summary and glossary pulled into the tables and views; the boxed notes kept verbatim (listed in `exploration.md`); the five numbered photoelectric properties of 29.2 kept as the book's numbered list; the Blake quatrain of 29.8 kept as verse |
| Tables | Table 29.1 Representative Energies for Submicroscopic Effects in 29.3, a `div.book-table`; the one-column "Topics" table inside Example 29.10 is kept as a plain list, since the book prints it unnumbered as an example's header |
| Sub-concept headers | the book's own narrative headers (29.1 two, 29.3 three, 29.4 two, 29.6 two, 29.7 three, 29.8 one), the agent's where a module prints none (29.2, 29.5) |
| Figures | a sim per idea or result the section introduces; drawings replaced where rule 24's gate passes, faithful copies where it does not; photographs kept where the text points at them (all of 29.4, 29.5, 29.6, 29.10, 29.13, 29.18, 29.22, 29.23 and the photograph halves of 29.14, 29.16, 29.19); each listed in the plan |
| Folds | judged per section; the candidates are 29.7 + 29.8 (photons and the $\text{KE}_e$ graph) and 29.11 + 29.12 (the tube and its spectrum) |
| Sim sliders | frequency or wavelength of the light, intensity, a choice of metal with its binding energy, temperature of a blackbody, accelerating voltage, scattering angle, particle mass and speed, plane spacing and angle, the uncertainty in position or a lifetime |
| Motion | the photoelectric figure (29.2), the x-ray tube (29.3) and the build-up of a diffraction pattern (29.7) move, because photons and electrons arriving one at a time is the idea; the Compton collision may move once; everything else is still, with no transport |
| 3D | none built; the EM wave of Figure 29.25 is Chapter 24's scene, and 29.19(a)'s SEM is at most a locked view |
| Figures that serve exercises | none; no exercise of this chapter carries an image |
| Extra simulations | the plan decides, building only those that open a view the required figures do not (rule 15) |
| Colour coding | no new type; `ch29/COLOR.md` lists what each section binds. Photons and light are drawn in the colour of their wavelength where it is visible (rule 7's third family, the one hex allowed, named in the plan line) and in ink with a label outside the visible band; an electron is `F.el('e-')` |
| Symbols | four staged: `h_planck` (untyped $h$), `KE_e` `\kKEe`, `E_prime` `\kEprime`, `f_max` `\kfmax`; `ΔE` `\kdE` and `BE` `\kBE` reused from Chapters 30 and 31; never `\kh` (a height) for Planck's constant, never `\kgamma` (a surface tension) for the Lorentz factor |
| Inline exercises | none: no Check Your Understanding box in any module |
| Exercises tab | end-of-module problems, conceptual questions, AP test prep |
| Exercise placement | nothing moves; items that lean on an earlier section are tagged to its concepts too |
| AP test prep | included; an unkeyed AP item is an open item with its options and an AI-marked suggested approach, never graded; 9 of 18 keyed |
| Untyped exercise blocks | 29.8's `exer-00001` (Critical Thinking) has an empty `type=` under Problems & Exercises and is a `problem` |
| PhET interactive links | dropped and named in `notes`: Models of the Hydrogen Atom (29.1), Photoelectric Effect (29.2), Color Vision (29.3), Quantum Wave Interference (29.5) |
| Cross-references | plain text to other sections and chapters |
| Answers to book problems | book answer key only, read from the CNXML; the 40 unkeyed problems are left out and named in `exercise_notes`; errata in keys kept as printed and named in `notes` |
| Suggested approaches | generated, marked AI: all 26 conceptual questions and the 9 unkeyed AP items |
| Generated questions | none |
| Concept nodes | 40 in `book.json` before the sections were built (6, 6, 6, 5, 2, 6, 6, 3 for 29.1 to 29.8) with 101 prerequisite edges |
| Formulas | `ch29/chapter.json`: 20 equations, the stated ones important; no anchors until the chapter pass |
| Credit | `ai` is Claude Opus 5.5 for text and figures; `built` 2026-09-28 |
