# Config: College Physics 2e, Chapter 24

Written by the prep agent after exploration (2026-09-15). Status: applied as
written, on Chen's standing instruction to build the chapter in one job without
check-ins; the per-section stops of rule 2 and the plan reviews of rule 5 are
replaced by a plan file per section, written before the section is built and left
for review after, as Chapters 9 to 21 did it. Each line is a setting and its
value. Lines that repeat the earlier configs are unchanged unless marked.

| Setting | Value |
|---|---|
| Chapter | 24 Electromagnetic Waves, modules m42434 (introduction), m42437, m42440, m42444, m42446 |
| Front matter | the chapter introduction (m42434) is a page of its own in `ch24/intro/`, listed before 24.1 (rule 21), built in the prep pass; it keeps both its photographs, since the text points at the second by number |
| Unit of work | one section = one page; sections never folded (rule 11); 24.1, which is one equation and two unkeyed problems, stays a page of its own |
| Order | 24.1 to 24.4 in book order, built in parallel by one agent per section |
| Loop | plan file → build → validator, all four sections in one wave; review after |
| Prose | verbatim; objectives, summary, glossary pulled into the tables and views; the boxed notes kept verbatim (Misconception Alert: Sound Waves vs. Radio Waves in the introduction, Maxwell's Equations and Making Connections: Unification of Forces in 24.1, Take-Home Experiment: Antennas in 24.2, Connections: Waves, Electromagnetic Spectrum: Rules of Thumb, Making Connections: Take-Home Experiment—Microwave Ovens, Take-Home Experiment: Colors That Match and Things Great and Small: A Submicroscopic View of X-Ray Production in 24.3, Connections: Waves and Particles in 24.4); the four numbered paragraphs of Maxwell's Equations kept as the book's numbered list |
| Tables | one: Table 24.1 in 24.3, the production, applications, life science aspect and hazards of every band, kept in the text as a `div.book-table` with the book's eyebrow and title (rule 19) |
| Sub-concept headers | the book's own narrative headers where a module prints them (24.1, 24.2 and 24.3 all do; 24.3 prints eleven), the agent's where it does not (24.4 prints none) |
| Figures | a sim per idea or result the section introduces; every one of the chapter's twelve drawings replaced by a sim with the book's image as its original; a photograph kept where the text points at it or it shows the thing the passage is about, dropped where it is decoration; each listed in the plan (rule 14) |
| Photographs kept | all ten: the reef that opens the chapter (Figure 24.1, kept by rule 21), the radar dish (24.2), the engraving of Maxwell (24.3), the power line (24.9), the TV and mobile phone towers (24.13), Sif Mons on Venus (24.14), the Earth in far ultraviolet with Carruthers (24.16), the ozone map (24.17), the chest X-ray (24.20) and the bone scan (24.21). The text points the reader at every one of them except 24.16, which is the picture its paragraph is about; nothing in this chapter is a splash image at the head of a section (new) |
| Folds | judged per section; the two X-ray production mechanisms (Figures 24.18 + 24.19) are one scene with a choice of mechanism and fold, since the book draws the same electron striking the same material twice; 24.6 prints three panels under one number and is one row with one original, not a fold, and so are 24.11, 24.12, 24.13 and 24.16 |
| Sim sliders | whatever is interesting and variable in the idea: the phase of the antenna's cycle and its driving frequency, the amplitude of the field, the orientation of a receiving wire or loop against the wave, the index of refraction of a medium, the position of a marker along the spectrum, the carrier and audio frequencies of a modulation, the wavelength within the visible band, the energy of the striking electron, and the power and area that set an intensity |
| Motion | five figures of the chapter move, because five of its ideas have a time in them: the antenna's charge cycle (24.5), the magnetic wave leaving the antenna (24.6), the wave itself (24.7) and the two modulations (24.11 and 24.12), each of which registers a cycle and gets the app's transport. The spectrum, the visible strip, the X-ray mechanisms and the intensity figures answer their sliders and nothing else, register no cycle and get no transport (rule 14) |
| 3D | one full 3D scene, Figure 24.7 in 24.2 (new). The lesson there is an arrangement in space — the electric field in one plane, the magnetic field in a plane at right angles, the travel along the line where the two meet — which the book itself has to draw in perspective, and three of the section's conceptual questions are answered by turning that arrangement against a wire or a loop (rule 28.3). It carries auto-rotate, wheel zoom and three snap views (down the beam, the book's own side view, and an oblique view), and its orbit is bounded to the hemisphere in front of the antenna with a pitch between about −70° and +70°, so the wave is never seen from behind its source; the plan line states the bound. Figure 24.6(a), the circular field lines round the current, is a locked view (rule 28.2). Figure 24.22 in 24.4 is flat by default, with the 3D wave available behind a view choice (archetype 10); everything else in the chapter is flat (rule 28.1) |
| Figures that serve exercises | left on the exercise cards, in the `figure` field of the item that refers to them, as Chapters 4, 19 and 21 do. An image belonging to an unkeyed problem that is left out is not copied at all, and in the event that rule took two of the five images this line first named: 24.3's TV reception antenna and 24.4's satellite dish each belong to a problem the book leaves unkeyed, so both problems are left out and neither image is copied. The three that are kept are all in 24.2, on its conceptual questions — the wave meeting a straight wire, the wave meeting a loop, and the interference pattern of two antennas (built) |
| Extra simulations | agent proposes only those that open a view the required figures do not, builds the one or two that clearly earn their place, and says in the plan which were left (rule 15) |
| Colour coding | no new type (new). The chapter binds Chapter 18's `electric-field`, Chapter 22's `magnetic-field`, Chapter 17's `intensity`, Chapter 16's `frequency`, and `velocity`, `position`, `time`, `charge`, `current`, `power` and `energy` where a figure draws them. Three symbol rows are staged here: `B_0mag` ($B_0$) on `magnetic-field`, matching Chapter 19's `E_0field` ($E_0$), which is used as it stands, and `I_ave` and `I_0peak` on `intensity`; the peak intensity needs a key of its own because Chapter 17 owns `I_0` for the reference intensity of the decibel scale. Everything else the chapter writes — $c$, $f$, $\lambda$, $T$, $v$, $E$, $B$, $I$, $P$, $A$, $n$, $\varepsilon_0$, $\mu_0$, $f_0$ — has a row already. The permittivity and the permeability of free space stay untyped and in ink, as do the index of refraction, every count and every percentage; what $c = 1/\sqrt{\mu_0\varepsilon_0}$ colours is $c$ alone. The visible strip of 24.3 is drawn in true spectral colour, which is rule 7's third family, a colour that is the physical fact |
| Inline exercises | none: the chapter has no Check Your Understanding box in any module (new) |
| Exercises tab | end-of-module problems, conceptual questions, AP test prep |
| Exercise placement | an exercise goes with the section that introduces what it tests; 24.2's AP item on the period and wavelength of a 3-GHz wave and its AP item on a wave reaching the end of a medium both need $c = f\lambda$ and are set with 24.3 with `source_section: "24.2"`, both sections' `exercise_notes` saying so; nothing else moves, and 24.3's problems that also want $B = E/c$ from 24.2 stay in 24.3 with a note |
| AP test prep | included; an unkeyed AP item is kept as an open item with its options as the book prints them and an AI-marked suggested approach, never as a graded choice; six of the chapter's twelve AP items are keyed, and the key is read from the CNXML for each. A key the publisher commented out of the CNXML is no key, since the book prints none, and such an item is kept unkeyed with a suggested approach like any other: that is 24.4's second AP item, `fs-id3156214`, on the two improvements that would make a radar set more sensitive (new) |
| PhET interactive links | dropped (Radio Waves and Electromagnetic Fields in 24.2, Color Vision in 24.3, whose CNXML carries an empty image marker as well, and Molecules and Light in 24.4), each named in the section's `notes` |
| Cross-references to other chapters | plain text, as the chapter pass settled book-wide; references to sections of Chapter 24 itself and to Chapters 16 to 23 are linked where the target is built and plain text where it is not |
| Answers to book problems | book answer key only; never generated; the twenty-eight unkeyed problems are left out and named in the notes, among them 24.1's two verification problems, both of 24.4's Create Your Own Problem items and the four unkeyed $LC$ circuit problems of 24.4, whose resonance condition is Chapter 23's |
| Suggested approaches for open questions | generated, marked AI: all twenty-two conceptual questions of the chapter and the six unkeyed AP items |
| Generated questions | none; a node with no book exercise of its own is noted in the plan, no question generated. 24.1 has only two problems and neither is keyed, so every one of its five concepts is untested by the book and the plan says so |
| Concept nodes | testable units only; kinds idea/result/skill; canonical ids; 28 nodes written into `book.json` before the sections were built (5 for 24.1, 8 for 24.2, 10 for 24.3, 5 for 24.4) with 90 prerequisite edges into Chapters 7, 14, 16, 17, 18, 19, 20 and 22 and within the chapter. 24.3 takes ten rather than nine because it is three times the length of any other section of the chapter and covers the whole spectrum |
| Formulas | `ch24/chapter.json`: 18 equations, the stated and named ones important (the speed of light from the two constants, the ratio of the field strengths and its form in a medium, $c = f\lambda$, the half-wavelength antenna and the three expressions for the average intensity with the peak intensity) and the worked substitution steps not; the two ozone reactions of 24.3 stay in the text as display math and take no row; no anchor on any row, since the validator refuses an anchor into an unbuilt section, and the chapter pass writes them from the section plans |
| Book manifest | `ch24` after `ch23` in `book.json` chapters, merged with `ost merge college-physics-2e 24` |

## What the build changed (chapter pass, 2026-09-15)

Three lines of the table above needed a word after the sections were built, and
they are already corrected in it. Everything else stood.

- **Figures that serve exercises.** The line named five images, and the rule
  beside it took two of them: 24.3's TV reception antenna and 24.4's satellite
  dish each belong to a problem the book leaves unkeyed, so both problems are
  left out and neither image is copied. The three that are kept all travel on
  conceptual questions of 24.2.
- **Motion.** Five figures move, not four. The line named five of them —
  Figures 24.5, 24.6, 24.7, 24.11 and 24.12 — and counted them as four. Each
  registers a cycle and carries the app's transport; nothing else in the
  chapter does.
- **AP test prep.** A key the publisher commented out of the CNXML is no key,
  since the book prints none, so 24.4's second AP item is kept unkeyed with a
  suggested approach. Six of the twelve AP items carry a printed key and are
  set as graded choices.
- **Anchors.** The prep pass left every variable and equation row without one,
  since the validator refuses an anchor into an unbuilt section. The chapter
  pass wrote all twenty-six variable anchors and all eighteen equation anchors
  from the section plans.
- **Prerequisite edges into Chapter 23.** Chapter 23's concept ids had not
  landed when the chapter was prepared, so three edges were held:
  `maxwells-equations` now takes `faradays-law` and `lenzs-law`, and
  `hertz-observations` takes `resonant-frequency-of-an-rlc-circuit`. The pass
  judged that `em-waves-from-accelerating-charges` and `antenna-resonance` want
  no Chapter 23 edge: the first rests on a charge being accelerated and already
  points at the alternating current, and the second is a standing-wave
  resonance and already points at Chapter 16's nodes and antinodes.
- **What the figures draw.** Three `draws` columns were short of a type the
  figure binds: a frequency slider on 24.2's `sim-antenna-b` and
  `sim-em-wave-3d`, and the speed of light written with its macro in the
  readout of 24.4's `sim-intensity-three-ways`.
- **Colour.** `ch24/COLOR.md` now gives 24.1 the `position` it draws on Hertz's
  wavelength bracket and 24.2 the `frequency` its three sliders carry, and it
  records that the carrier and the modulated wave of 24.3's two modulation
  figures are the electric field of a wave and take that hue, the audio signal
  alone taking the categorical palette.
- **Voice.** Five sentences OmniStax had written named the book — a caption that
  said what the book prints, two that said what the figure opens on, a line of
  the fallback drawing of Figure 24.7 and a snap-view button on each of the
  chapter's two 3D scenes. Each is now about the subject, and the snap view is
  named for the direction it looks from.
