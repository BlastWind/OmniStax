# Config: College Physics 2e, Chapter 30

Written by the prep agent after exploration (2026-09-28). Status: applied as
proposed on 2026-09-28, on Chen's instruction to finish the book without
check-ins; the per-section stops of rule 2 and the plan reviews of rule 5 are
replaced by a plan file per section, written before the section is built and left
for review after. Each line is a setting and its value.

| Setting | Value |
|---|---|
| Chapter | 30 Atomic Physics, modules m42585 (introduction), m42589, m42592, m42596, m42599, m42602, m42606, m42609, m42614, m42618 |
| Front matter | the chapter introduction (m42585) is a page of its own in `ch30/intro/`, built in the prep pass, keeping its one photograph, the carbon nanotube (Figure 30.1) |
| Media file names | the bundle's names, with no space in any, first-edition chapter number 31 kept (`Figure_31_03_05a.jpg`) |
| Unit of work | one section = one page; never folded (rule 11); 30.6 and 30.7, each one conceptual question and no problem, stay pages of their own |
| Order | 30.1 to 30.9, built in parallel by one agent per section |
| Loop | plan file → build → validator, all nine sections in one wave; review after |
| Prose | verbatim; objectives, summary, glossary pulled into the tables; boxes kept verbatim (Patterns and Systematics 30.1, Charges and Electromagnetic Forces 30.2, Nano-Crystals 30.5, Waves and Quantization 30.6, Intrinsic Spin 30.8, Pauli Exclusion Principle 30.9) |
| Tables | three, each a `div.book-table` with the book's eyebrow and title: Table 30.1 Atomic Quantum Numbers (30.8), Table 30.2 Shell and Subshell Symbols (30.9, a spanned header), Table 30.3 Electron Configurations of Elements Hydrogen Through Calcium (30.9, the book's ditto marks kept) |
| Sub-concept headers | the book's own where printed (30.2, 30.3, 30.4, 30.5, 30.8, 30.9), the agent's where not (30.1, 30.6, 30.7) |
| Figures | a sim per idea or result; every drawing replaced by a sim with the book's image as its original, except 30.56 (the notation $2p^3$) and 30.57 (a table printed as an image), which are faithful copies; folds judged per section from the candidates in `exploration.md` |
| Photographs kept | all twenty-six photographs and portraits, since the text points at each: 30.1, 30.3, 30.4, 30.5, 30.8, 30.13, 30.14(b) as an original, 30.22 to 30.27, 30.28 to 30.33, 30.38, 30.39, 30.41, 30.54, 30.58 |
| Sim sliders | the voltage and field of Thomson's tube, the plate voltage of Millikan's drop, the model and impact parameter of Rutherford's alphas, $n_{\text{i}}$, $n_{\text{f}}$ and $Z$ of a transition, the tube voltage and anode of an x-ray spectrum, the pumping of a laser, the orbit radius around which a wave must fit, the field of the Zeeman effect, $l$ and $m_l$, the atomic number that fills the shells |
| Motion | Brownian motion (30.2) and Rutherford scattering (30.10/30.11) move; the stimulated-emission cascade and the laser cavity (30.35/30.36) move; a transition may send one photon per click without a cycle. Every other figure is still, no transport |
| 3D | mathematical 3D for Figure 30.52 (angular momentum on cones about $z$, free orbit, snap views along and across $z$), and 30.7 may reuse it for 30.49/30.51; candidates decided by their plans: Figure 30.7 crossed fields (mathematical), Figure 30.53 probability clouds (flat default). Locked views: 30.9, 30.10, 30.36 |
| Figures that serve exercises | on the exercise cards' `figure` field: 30.5's chromium and neodymium level diagrams, 30.6's wave functions of X and Y; an image of a left-out problem is not copied |
| Extra simulations | only those that open a view the required figures do not; the plan says which were left (rule 15) |
| Colour coding | no new type; see `COLOR.md`. Twenty-one symbol rows merged (13 typed, 8 untyped). Photons are drawn in their true colour (rule 7's third family) where visible and in a neutral ink with a wavelength label outside the visible; the electron, proton, alpha particle and atoms take `F.el` |
| Inline exercises | none: no Check Your Understanding box in any module |
| Exercises tab | end-of-module problems, conceptual questions, AP test prep |
| Exercise placement | twelve keyed problems and two conceptual questions move, listed in `exploration.md`: 30.1 → 30.2 (two), 30.9 → 30.2 (three), 30.9 → 30.3 (four), 30.9 → 30.4 (one), 30.9 → 30.5 (two), 30.5 → 30.3 (two conceptual); reprinted questions are kept once (30.3's correspondence question, 30.5's CD question) |
| Untyped exercise blocks | 30.2's `eip-200` and 30.9's `exer-00001` are classed `problem` by their header |
| AP test prep | included; unkeyed items kept open with options where the book prints them and an AI-marked suggested approach, never graded; 6 of 16 keyed |
| PhET links | dropped and named in `notes`: Rutherford Scattering (30.2), Models of the Hydrogen Atom (30.3), Quantum Wave Interference (30.6) |
| Cross-references | Chapters 13 and 22 linked; Chapters 27, 28, 29 and 31 plain text |
| Answers | book key only; the 34 unkeyed problems are left out and named in `exercise_notes` |
| Suggested approaches | generated and marked AI for all 26 conceptual questions kept and the 10 unkeyed AP items |
| Concept nodes | 50 merged into `book.json` before the sections were built (3, 7, 9, 5, 8, 3, 4, 6 and 5 for 30.1 to 30.9) with 109 prerequisite edges |
| Formulas | `ch30/chapter.json`: 29 equations with `ktex`, the stated and named ones important; no anchors, which the chapter pass writes |
| Book manifest | `ch30` merged with `ost merge college-physics-2e 30` |

## What the build changed

Recorded by the chapter pass (2026-10-05); each line is a default above that the
section builds or the pass changed.

| Setting | As built |
|---|---|
| Folds | nine: 30.6 + 30.7, 30.10 + 30.11, 30.16 + 30.17 + 30.18 + 30.19, 30.20 + 30.21, 30.34 + 30.35 + 30.36, 30.42 + 30.43, 30.44 + 30.45, 30.48 + 30.49, 30.50 + 30.51 |
| Extra simulations | two Sims: fluorescence step by step in 30.5, and each shell's capacity in 30.9 |
| Motion | moving: Brownian motion, Thomson's beam, Rutherford's alphas, the planetary orbits, the light of Figure 30.14, the Bohr atom's photon, fluorescence, the laser, the helium-neon transfer, the CD's beam, the hologram's waves, the probability clouds of 30.46 and 30.53, the orbit and the spin in their fields; every other figure is still |
| 3D | mathematical 3D for Figure 30.52 only (`F.view3d`, cones about $z$); 30.7's figures are flat with locked views of the orbit; Figure 30.53 builds its clouds flat; locked views (`F.view`) for 30.6's cloud and 30.7's orbit and spin, none for Millikan's plates, Rutherford's apparatus or the laser cavity |
| Sim sliders | the atomic number of 30.55 is a dropdown of the twenty elements (rule 26.1), not a slider |
| Examples | numbered as the publisher prints them, 30.1 to 30.5 (the prep had counted 30.1, 30.3 to 30.6) |
| Concepts | 71 after the pass: `metastable-state-and-phosphorescence` folded into `metastable-state` and `phosphorescence`; `spin-quantum-numbers` keeps its statement and gives its two repeated forms to the spin definitions |
| Symbols | six added: $F_{\text{mag}}$, $B_{\text{orb}}$, $B_{\text{int}}$, $B_{\text{ext}}$, $L_{\text{orb}}$, $\theta_3$; every mass now written with its macro |
