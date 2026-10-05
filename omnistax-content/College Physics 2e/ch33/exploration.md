# Exploration: College Physics 2e, Chapter 33 Particle Physics

Read by the prep agent on 2026-09-28, before the chapter's six section pages were
built in parallel. The book's own rules are in the folder above; this file
records what the chapter's seven modules hold, what is new in them, and how the
chapter should look when it is built.

## Why this chapter

Chapter 31 opened the nucleus and Chapter 32 used it; this chapter opens the
nucleon. It starts with one idea, Yukawa's: a force is a particle thrown and
caught, lent its mass by the uncertainty principle for just long enough to cross
the range of the force. From there the chapter builds the machines that turn
energy into new matter, sorts the particle zoo by the forces each particle feels
and the numbers it conserves, finds three quarks inside every baryon, and ends
with the forces themselves drawing together at energies no accelerator can
reach.

## Chapter 33 modules

Counts are of the numbered figures of the narrative, the numbered tables, the
examples and the exercises by kind as the CNXML prints them, before any move.

| Section | Module | Numbered figures | Tables | Examples | AP (keyed) | Conceptual | Problems (keyed) | Glossary | Objectives |
|---|---|---|---|---|---|---|---|---|---|
| intro Introduction to Particle Physics | m42667 | 2 | 0 | 0 | 0 | 0 | 0 | 1 | 0 (empty heading) |
| 33.1 The Yukawa Particle and the Heisenberg Uncertainty Principle Revisited | m42669 | 1 | 0 | 1 | 0 | 0 | 3 (2) | 3 | 5 |
| 33.2 The Four Basic Forces | m42671 | 3 | 1 | 0 | 8 (4) | 0 | 2 (1) | 3 | 4 |
| 33.3 Accelerators Create Matter from Energy | m42718 | 5 | 0 | 1 | 6 (3) | 4 | 7 (4) | 6 | 4 |
| 33.4 Particles, Patterns, and Conservation Laws | m42674 | 3 | 1 | 1 | 2 (1) | 9 | 8 (4) | 15 | 3 |
| 33.5 Quarks: Is That All There Is? | m42678 | 6 | 2 | 1 | 2 (1) | 16 | 22 (11) | 12 | 5 |
| 33.6 GUTs: The Unification of Forces | m42680 | 5 | 0 | 0 | 0 | 3 | 11 (5) | 7 | 5 |

Twenty-five numbered figures, four numbered tables, four worked examples, 18 AP
items of which 9 are keyed, 32 conceptual questions of which none is keyed, 53
problems of which 27 are keyed. No Check Your Understanding box, so no
`data-place` host. The intro's glossary term (particle physics) has no section
row to hang on and is left out of `chapter.json`; the intro page bolds it.

## Figure, table and example numbers

Checked against openstax.org for 33.5 and 33.6: exercise images are unnumbered
(33.6 opens at Figure 33.21). Bundle names are `Figure_34_0S_0N.jpg` (the first
edition's chapter 34), no spaces. 33.2 skips `Figure_34_02_03.jpg`, 33.3 skips
`_03_03`, 33.1's `_01_02` is unused; the cosmic-ray image is
`Figure_34_06_06-3872.jpg` (the `-4e60` twin is unused).

| Section | Figures | Tables, examples |
|---|---|---|
| intro | 33.1 inside the LHC (photo, splash); 33.2 substructure ladder, solid to quark (sketch, 575, kept as the book's image on the intro page) | |
| 33.1 | 33.3 pion created by a proton and caught by a neutron (sketch, 115) | Example 33.1 Calculating the Mass of a Pion |
| 33.2 | 33.4 virtual photon between two positive charges, and the eye that would stop it (sketch, 350); 33.5 Feynman diagram, photon exchange (sketch, 250); 33.6 Feynman diagram, $\pi^{+}$ between a proton and a neutron (sketch, 250) | Table 33.1 Properties of the Four Basic Forces |
| 33.3 | 33.7 Van de Graaff generator (artist's rendition, 250); 33.8 cyclotron (sketch, 260); 33.9 synchrotron ring and tube potentials (a)(b)(c) (sketch, 425); 33.10 Fermilab rings (schematic, 425); 33.11 SLAC (schematic, 400) | Example 33.2 Calculating the Voltage Needed by the Accelerator Between Accelerating Tubes |
| 33.4 | 33.12 Dirac (photo, 200); 33.13 electron-positron annihilation (sketch, 225); 33.14 Gell-Mann (photo, 200) | Table 33.2 Selected Particle Characteristics; Example 33.3 Calculating Quantum Numbers in Two Decays |
| 33.5 | 33.15 quarks of $p$, $n$, $\pi^{+}$, $\pi^{-}$ with spins, colors, spin and charge sums (sketch, 500); 33.16 $\Omega^{-}$ bubble-chamber trace (book image, 275); 33.17 electrons scattering from three quarks (sketch, 250); 33.18 ALICE collision simulation (image, 300); 33.19 white baryon and meson (sketch, 400); 33.20 three families (chart, 350); unnumbered: the $\Delta^{++}$ resonance graph (`Figure_34_05_07.jpg`, on the unkeyed `fs-id1169738092971`), the trace again on AP `fs-id1742950`, the quark-flow diagram in `fs-id1169738209045`'s key (`graphics1-5623.jpg`) | Table 33.3 Quarks and Antiquarks; Table 33.4 Quark Composition of Selected Hadrons; Example 33.4 Quantum Numbers From Quark Composition |
| 33.6 | 33.21 Feynman diagram, $Z^{0}$ between an electron and a neutrino (sketch, 250); 33.22 (a) eight gluons, (b) a gluon changes two quarks' colors (sketch, 450); 33.23 pion exchange with quarks and gluons (Feynman diagram, 270); 33.24 force strengths against energy, EW, GUT, TOE (graph, 350); 33.25 detector (photo, 400); unnumbered: cosmic-ray shower (on `fs-id1169738035555`) | |

Photographs and book images kept: 33.1 (rule 21); 33.12 and 33.14 (portraits the
text points at); 33.16 (the data the discovery rests on; a sim may overlay hover
names on the trace, keeping the image); 33.18 (a simulation image, pointed at);
33.25 (pointed at). 33.7 is an artist's drawing of an object; the section may
keep it as a photo row or draw it. Everything else is a sketch, a schematic, a
chart or a graph to replace.

## What is new

- Force as exchange of virtual particles; range from the carrier's mass via
  $\Delta E\,\Delta t \ge h/4\pi$ and $d \approx c\Delta t$.
- Feynman diagrams; QED; the four forces tabulated with their carriers.
- Accelerators: cyclotron, synchrotron, linacs, colliding beams, synchrotron
  radiation.
- Antimatter; hadrons and leptons; bosons and fermions; mesons and baryons;
  lepton family numbers, baryon number and strangeness as conservation laws;
  lifetime as a signature of the force.
- Quarks: six flavors, fractional charge, composition of hadrons, flavor change
  by the weak force, color and confinement, QCD; three families.
- Electroweak unification, gluons, the Standard Model, GUTs, proton decay.
- No new type. New symbols: $V_{\text{gap}}$ (voltage, `\kVgap`); untyped
  $B$ (`B_bary`), $L_{e}$, $L_{\mu}$, $L_{\tau}$, $S$ (`S_str`).

## Notes, boxes and links

Kept verbatim: Patterns and Puzzles: Atoms, Nuclei, and Quarks (33.5); Making
Connections: Unification of Forces (33.6). No PhET or Link to Learning item.
Cross-references to Chapters 4, 29, 30 and 34 are plain text.

## Exercises that belong to another section

Each moved item carries `source_section` and a note in both sections.

- `fs-id2783273` (AP, keyed (a), needs Table 33.2 and the $\Omega$) 33.3 → 33.4.
- `fs-id1169738156095` (conceptual, evidence for electroweak unification) 33.5 → 33.6.
- `fs-id1169737762764` (conceptual, are gluons confined) 33.5 → 33.6.

## Keyed and unkeyed

| Section | Problems kept (left out) | AP keyed / open | Conceptual (all open) |
|---|---|---|---|
| 33.1 | 2 (1: `fs-id1169738013472`) | 0 / 0 | 0 |
| 33.2 | 1 (1: `fs-id1169737705364`) | 4 / 4 | 0 |
| 33.3 | 4 (3) | 2 / 3 after the move | 4 |
| 33.4 | 4 (4) | 2 / 1 after the move | 9 |
| 33.5 | 11 (11) | 1 / 1 | 14 after the moves |
| 33.6 | 5 (6) | 0 / 0 | 5 after the moves |

## Errata to carry as printed

- 33.1: the Problem `fs-id1169738123938` in 33.4 reuses the id of 33.1's Example 33.1 (`fs-id1169738123938`); 33.4 gives its card a distinct card id and keeps the CNXML id as `source_id`, the example's anchor in 33.1 unchanged.
- 33.2: the fourth objective reads "exchange of a   between a proton and a neutron", the symbol ($\pi^{+}$) missing.
- 33.3: AP `fs-id1719206` keyed "(c), though this comes from Einstein's special relativity".
- 33.4: Example 33.3(b) says "Charge is conserved as $s \to d$".
- 33.5: conceptual `fs-id1169737905434` prints "composition $W^{-}$ or $t\bar{t}$" (a $c\bar{c}$ is meant); `fs-id1169737780424`'s key prints "$Z==0+(-1)$"; glossary defines color as "a quark flavor"; `fs-id1169737780424` repeats the left-out `fs-id1169737821465` and `fs-id1169738209045` continues the left-out `fs-id1169738092971`, so each keeps a note restating what it needs.
- 33.6: "transform the, and $Z^{0}$" (the $W^{+}$, $W^{-}$ dropped); "the carriers of the weak and certainly of the electromagnetic force" (the strong is meant); Figure 33.25's caption describes a Tevatron Higgs search while the image is a proton-decay detector.
- Found in the build: the key of 33.4's Problem `fs-id1169738123938`(c) writes the negative tau's decay as $\tau^{-} \to \mu^{-} + \nu_{\mu} + \bar{\nu}_{\tau}$, the neutrinos the other way round from the text's $\tau^{-} \to \mu^{-} + \bar{\nu}_{\mu} + \nu_{\tau}$; 33.5's text reads "as seen in Table 33.2)." and "Unification of Forces..". Each is kept as printed and named in its section's `notes`.

## 3D, locked views (root rule 28)

None. Feynman diagrams, the quark diagrams and the force-strength graph are
flat; the accelerators are ring schematics best read from above; no figure
argues a locked view.

## BE INSPIRING (root rule 23)

- 33.1: a range slider (0.1 to 10 fm) that lengthens the pion's flight, and
  the borrowed energy and the carrier's mass fall as $1/d$; a choice lands on
  the pion, the kaon and the $W$.
- 33.2: the photon exchange of 33.4 run in time beside its Feynman diagram
  (33.5), the charges tracing the diagram's lines; a still pion diagram.
- 33.3: a cyclotron with the gap voltage flipping as the proton spirals out; a
  synchrotron whose field and frequency rise to hold the radius; a fixed-target
  against colliding-beams choice showing where the energy goes.
- 33.4: annihilation with the two photons flying apart back to back; a decay
  checker on Table 33.2 that adds $Q$, $B$, $L_{e}$, $L_{\mu}$, $L_{\tau}$ and
  $S$ before and after and names what breaks.
- 33.5: a hadron builder, three quark slots or a quark and an antiquark, charge
  and strangeness summed as fractions of $q_{e}$ and the color turning white;
  electrons scattering from three hard points inside the proton.
- 33.6: the gluon exchange changing two quarks' colors; the running strengths
  on a log energy axis with EW, GUT and TOE marked and the reachable range of
  accelerators shaded.
