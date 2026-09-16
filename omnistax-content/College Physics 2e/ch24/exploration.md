# Exploration: College Physics 2e, Chapter 24 Electromagnetic Waves

Written in the chapter's prep pass (2026-09-15), after reading every module of
the chapter in full. The source of record is the CNXML bundle
(`source/osbooks-college-physics-bundle`), not the PDF. The book's organisation
(book → chapters → sections → untitled narrative headers, one CNXML module per
section, the apparatus inside the module) is as recorded in `ch02/exploration.md`;
nothing differs here. The bundle's file names carry the chapter number 25, which
this edition prints as Chapter 24, so the media of this chapter are named
`Figure 25_…` while its figures are numbered 24.1 and on. Two of those file names
carry a space, and the copies under `media/ch24/` write it as an underscore.

## Why this chapter

Chapters 18 to 23 build electricity and magnetism one piece at a time: charge,
the electric field, potential, current, the magnetic field, and the induction
that ties a changing magnetic field to an electric one. This chapter closes the
loop. The first section states Maxwell's four equations in words, adds the
symmetry Maxwell supplied — a changing electric field is itself a source of
magnetism — and shows that the theory predicts a wave travelling at
$1/\sqrt{\mu_0\varepsilon_0}$, which is the measured speed of light; Hertz then
made and caught such waves in a laboratory. The second section builds one:
charges driven up and down an antenna separate, the electric field they make
propagates away at $c$, the current they carry makes a magnetic field that goes
with it, and the two are perpendicular to each other and to the direction of
travel, in phase, with $E/B = c$. The third lays the whole spectrum out from ELF
radio to gamma rays, ties every band to $c = f\lambda$, to how it is produced and
to what it does to matter. The fourth says how much energy such a wave carries:
the intensity goes as the square of the field amplitude, in three equivalent
forms.

## Chapter 24 modules

Figures counted are the numbered figures of the narrative; the images inside
exercises are counted separately and carry no number. CYU = Check Your
Understanding, AP = AP test prep items, CQ = conceptual questions, Sol = problems
with an inline solution. The equation column counts the `{eq:…}` markers the
converter writes, most of which are the substitution steps of a worked example
rather than results.

| Section | Module | Ex. | Fig. | Tables | Eq. | Defs | CYU | AP | CQ | Prob. | Sol. |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m42434 | 0 | 2 photographs | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 24.1 Maxwell's Equations: Electromagnetic Waves Predicted and Observed | m42437 | 0 | 2 (1 photograph, 1 diagram) | 0 | 3 | 8 | 0 | 0 | 0 | 2 | 0 |
| 24.2 Production of Electromagnetic Waves | m42440 | 1 | 3 diagrams + 3 in questions | 0 | 6 | 11 | 0 | 8 | 10 | 3 | 1 |
| 24.3 The Electromagnetic Spectrum | m42444 | 2 | 14 (6 diagrams, 8 photographs) + 1 in a problem | 1 | 15 | 17 | 0 | 2 | 12 | 24 | 12 |
| 24.4 Energy in Electromagnetic Waves | m42446 | 1 | 1 diagram + 1 in a problem | 0 | 14 | 2 | 0 | 2 | 0 | 24 | 12 |

The chapter has 53 problems, of which 25 carry an inline solution and 28 do not,
12 AP items, of which 6 are keyed, 22 conceptual questions, none keyed, and no
Check Your Understanding box at all — the first chapter since Chapter 15 to print
none. The worked examples are numbered 24.1 to 24.4 in book order: one in 24.2,
two in 24.3 and one in 24.4. The one table of the chapter is Table 24.1 in 24.3.
The last exercise of 24.4, the Critical Thinking item on $B = E/c$, is untyped in
the CNXML and is classed by the header it sits under, Problems &amp; Exercises;
it is counted among the 24 problems of that section.

## Figure numbers in book order

The chapter's numbered figures run 24.1 to 24.22, in the order the modules print
them, and the numbers were read off the publisher's own pages rather than counted
from the CNXML, since the bundle's media names skip three images this edition
drops. Images inside an exercise carry no number.

| Number | Module image | Width | What it shows |
|---|---|---|---|
| 24.1 | `Figure 25_00_01a.jpg` | — | The chapter's opening photograph, sea goldie fish over a coral reef |
| 24.2 | `Figure 25_00_02a.jpg` | 150 | The 50-foot C-band radar dish at Kennedy Space Center |
| 24.3 | `Figure 25_01_01a.jpg` | 175 | An engraving of James Clerk Maxwell |
| 24.4 | `Figure 25_01_02a.jpg` | 350 | Hertz's apparatus: an RLC circuit, a transmitting loop and a receiving loop |
| 24.5 | `Figure 25_02_01a.jpg` | 350 | The charge distribution on an antenna at four times through one cycle, and the electric field it sends out |
| 24.6 | `Figure 25_02_02a.jpg` | 375 | (a) the circular magnetic field lines round the antenna's current, (b) $E$ and $B$ perpendicular at one point, (c) the magnetic wave propagating away |
| 24.7 | `Figure 25_02_03a.jpg` | 300 | One instant of the wave: $E$ and $B$ in phase, perpendicular to each other and to the direction of travel |
| 24.8 | `Figure 25_03_01a.jpg` | 620 | The electromagnetic spectrum by wavelength, frequency and energy |
| 24.9 | `Figure 25_03_03a.jpg` | 250 | A high-voltage traction power line at Eutingen Railway Substation |
| 24.10 | `Figure 25_03_04a.jpg` | 200 | ELF signals reaching a submerged submarine |
| 24.11 | `Figure 25_03_05a.jpg` | 300 | Amplitude modulation: carrier, audio signal and the modulated wave |
| 24.12 | `Figure 25_03_06a.jpg` | 175 | Frequency modulation: carrier, audio signal and the modulated wave |
| 24.13 | `Figure 25_03_07a.jpg` | 250 | A TV broadcast tower and a mobile phone tower |
| 24.14 | `Figure 25_03_08a.jpg` | 250 | Sif Mons on Venus, mapped through the cloud by radar |
| 24.15 | `Figure 25_03_10a.jpg` | 400 | The visible strip of the spectrum, from red to violet |
| 24.16 | `OSX_CP2e_Figure_25_03_18.jpg` | — | The Earth in far ultraviolet from the Moon, and Carruthers with his camera |
| 24.17 | `OSX_CP2e_Figure_25_03_12.jpg` | 225 | Ozone concentration over Antarctica in September 2020 |
| 24.18 | `Figure 25_03_13a.jpg` | 200 | An electron knocking out an inner-shell electron, and the characteristic X-ray emitted when the vacancy is filled |
| 24.19 | `Figure 25_03_14a.jpg` | 200 | An electron slowed by collisions in a material, radiating bremsstrahlung |
| 24.20 | `Figure 25_03_15a.jpg` | 200 | A shadow X-ray of a chest with heart valves, a pacemaker and sternum wires |
| 24.21 | `Figure 25_03_16a.jpg` | 150 | A bone scan made from the gamma rays of a concentrated compound |
| 24.22 | `Figure 25_04_01a.jpg` | 275 | Two waves, the second of twice the amplitude and four times the energy |

Unnumbered images inside exercises: three in 24.2 (`Figure 25_02_04a.jpg`, a wave
meeting a straight wire two ways, 350; `Figure 25_02_05a.jpg`, a wave meeting a
loop two ways, 350; `Figure 25_02_06a.jpg`, the interference pattern of two
broadcast antennas seen from above, 200), one in 24.3 (`Figure 25_03_17a.jpg`, a
VHF reception antenna with cross wires of several lengths, 200) and one in 24.4
(`Figure 25_04_02a.jpg`, a satellite dish receiving TV signals, 175).

## What is new

- **No new type.** Every quantity this chapter draws already has one. The electric
  field is Chapter 18's `electric-field`, the magnetic field is Chapter 22's
  `magnetic-field`, the intensity is Chapter 17's `intensity`, the frequency is
  Chapter 16's `frequency`, the wavelength is a `position` as it has been since
  16.9, the speed of light is the book's `velocity` row `\kc`, the period is a
  `time` and the power of a source is a `power`. A photon's energy is named in
  passing and computed nowhere. So the chapter declares no type and stages symbol
  rows only.
- **Three symbol rows, and no more.** `B_0mag` ($B_0$, the magnetic field
  amplitude) on `magnetic-field`, matching Chapter 19's `E_0field` ($E_0$), which
  is reused as it stands; `I_ave` ($I_{\text{ave}}$) and `I_0peak` ($I_0$) on
  `intensity`. The peak intensity needs a key of its own because Chapter 17 owns
  `I_0` for the reference intensity of the decibel scale, and root rule 7 keeps
  the two apart although the book letters them the same. Everything else the
  chapter writes — $c$, $f$, $\lambda$, $T$, $v$, $E$, $B$, $I$, $P$, $A$, $n$,
  $\varepsilon_0$, $\mu_0$, $f_0$ — has a row already.
- **The permittivity and the permeability arrive together.** $\varepsilon_0$ came
  with Chapter 19 and $\mu_0$ with Chapter 22, both untyped, and 24.1 is the first
  page of the book to put them in one expression. They stay untyped and in ink;
  what the equation colours is $c$.
- **Chapter 23 is a prerequisite the chapter names in words.** Maxwell's third
  equation is Faraday's law with Lenz's law and the fourth is Ampere's law with
  Maxwell's addition, and 24.1's Hertz apparatus is an RLC circuit resonating at
  $f_0 = 1/2\pi\sqrt{LC}$. The concept edges that should point at Chapter 23 are
  listed under "Wanted at chapter level"; the inductance $L$ and the capacitance
  of an $LC$ circuit are Chapter 23's rows and none is staged here.
- **The index of refraction, four chapters early.** 24.2 writes $v = c/n$ and
  $E/B = c/n$ without defining $n$ beyond the phrase "index of refraction". It is
  a dimensionless ratio, so by the standing decision it is untyped and in ink, and
  the section's prose keeps the book's one sentence and adds nothing.
- **No Check Your Understanding box anywhere in the chapter**, so no section of
  Chapter 24 carries an inline exercise.
- **Two ozone reactions set as display equations.** 24.3 prints the breakdown of
  $\text{CFCl}_3$ and the catalytic destruction of ozone as two display equations
  with `{eq:…}` markers. They are chemistry, not results of this chapter, so they
  stay in the text as display math and take no row in the equations table.

## Sketches to replace and photographs

Twelve of the chapter's twenty-two numbered figures are drawings and every one is
replaced by a simulation: Hertz's apparatus (24.4), the antenna's four-phase
charge distribution (24.5), the current with its circular field lines and the
propagating magnetic wave (24.6), the wave itself (24.7), the spectrum (24.8), the
submerged submarine reached by a long wavelength (24.10), amplitude modulation
(24.11), frequency modulation (24.12), the visible strip (24.15), the two X-ray
production mechanisms (24.18 and 24.19) and the amplitude-and-energy pair (24.22).
The visible strip is the one place in the chapter where root rule 7's third
family, a colour that is the physical fact, applies: it keeps its true spectral
colour and gains a wavelength marker.

The ten photographs are 24.1 (the reef that opens the chapter, kept by root rule
21), 24.2 (the radar dish), 24.3 (the engraving of Maxwell), 24.9 (the power
line), 24.13 (the TV tower and the mobile phone tower), 24.14 (Sif Mons on Venus),
24.16 (the Earth in far ultraviolet, with Carruthers and his camera), 24.17 (the
ozone map), 24.20 (the chest X-ray) and 24.21 (the bone scan). The text points the
reader at 24.2, 24.3, 24.9, 24.13, 24.14, 24.17, 24.20 and 24.21 by number, and
24.16 is the picture its paragraph is about, so all ten are kept with the book's
caption and credit. Maxwell's portrait is kept because 24.1 is a section about one
man's prediction and the text says "See Figure 24.3". Nothing in this chapter is a
splash image at the head of a section that root rule 14 would drop.

## Notes and PhET items

The boxed notes kept verbatim are Misconception Alert: Sound Waves vs. Radio Waves
in the introduction, Maxwell's Equations and Making Connections: Unification of
Forces in 24.1, Take-Home Experiment: Antennas in 24.2, Connections: Waves,
Electromagnetic Spectrum: Rules of Thumb, Making Connections: Take-Home
Experiment—Microwave Ovens, Take-Home Experiment: Colors That Match and Things
Great and Small: A Submicroscopic View of X-Ray Production in 24.3, and
Connections: Waves and Particles in 24.4. Three PhET notes are dropped and named
in the section's `notes`: Radio Waves and Electromagnetic Fields in 24.2, Color
Vision in 24.3 (whose CNXML carries an empty image marker as well) and Molecules
and Light in 24.4. The introduction's link to the publisher's video trailer is
dropped as every earlier chapter drops it.

## Exercises that belong to another section

- 24.2's AP item on the period and wavelength of a 3-GHz wave, and its item on the
  ordering of a mechanical and an electromagnetic wave at the end of a medium,
  both need $c = f\lambda$, which is stated in 24.3. They are held for 24.3 with a
  `source_section` of `24.2`, and both sections' `exercise_notes` say so.
- 24.2's AP item on Hertz's spark gap refers to Figure 24.4 in 24.1 but tests the
  reception of a wave, which is 24.2's own subject; it stays in 24.2 and carries
  the figure on its card.
- 24.2's AP item on the Earth's tilt and the seasons tests intensity falling with
  the angle of incidence; the book prints it in 24.2 and it is answerable from the
  section's own claim that the fields carry energy, so it stays.
- 24.3's problems on the AM power line's maximum magnetic field and on the heart's
  1-Hz wave use $B = E/c$ from 24.2 as well as $c = f\lambda$; they stay in 24.3,
  which is where the wavelength is asked for, and 24.3's `exercise_notes` says so.
- 24.4's four Integrated Concepts problems on $LC$ circuits and its two Unreasonable
  Results items on the same need Chapter 23's resonant frequency. Two of the six
  are keyed and are kept with a note that the resonance condition is Chapter 23's;
  the four unkeyed ones are left out with the chapter's other unkeyed problems.
- Nothing else moves.

## Which figures argue a locked view or a full 3D scene

Root rule 28 asks the question of every figure, and this chapter is the second in
the book, after Chapter 6's Cavendish balance, where the answer for one figure is
a full 3D scene.

- **Figure 24.7, the electromagnetic wave, is a full 3D scene (root rule 28.3).**
  What the figure teaches is nothing but an arrangement in space: $E$ oscillates in
  one plane, $B$ in a second plane at right angles to it, and the wave travels
  along the line where the two planes meet. The lesson is the mutual
  perpendicularity of three directions, and a flat drawing can only assert it —
  the book itself has to draw the figure in perspective, which is exactly the
  signal root rule 28.2 and 28.3 name. Two of the section's own conceptual
  questions ask the reader to compare a wave that meets a wire with its $E$ field
  along the wire against one that meets it broadside, and a third asks whether a
  receiving antenna should stand vertical or lie horizontal and how a loop should
  be turned. Those questions are answered by turning the arrangement, and a reader
  who can turn it answers them from the picture rather than from a memorised rule.
  The scene therefore carries the buttons root rule 26.2 asks for — auto-rotate on
  and off, wheel zoom, and three snap views: down the direction of travel, where
  $E$ and $B$ cross as a bare pair of axes; the side view the book itself prints;
  and an oblique three-quarter view. The orbit is bounded to the hemisphere in
  front of the source and to a pitch between about $-70°$ and $+70°$, so the wave
  is never seen from behind its own antenna and never edge-on to the point of
  vanishing; the plan line states the bound. It moves, because a wave has a time in
  it: the profile travels along the axis at a rate the readout states, and the
  transport is the app's own.
- **Figure 24.6 is a locked view (root rule 28.2), not a scene.** The circular
  magnetic field lines round a straight current are drawn in perspective in the
  book, and a locked projection with shaded ellipses gives the reader the same
  picture without guessing; the right-hand rule the figure illustrates is Chapter
  22's and was taught there. The cost of a second orbiting scene buys no view the
  locked one lacks.
- **Figure 24.22 is flat, with 3D behind a choice (archetype 10).** Its idea is
  that the energy goes as the square of the amplitude, which is a relation between
  two numbers and is clearest as a graph with the two drawn waves beside it; the
  geometry it also shows was taught on 24.2's page. The section may mount the 3D
  wave behind a view choice so that the amplitude slider can be watched in either
  form, and the plan line says so, but the default is flat.
- **Everything else in the chapter is flat (root rule 28.1).** The antenna's charge
  cycle, the spectrum, the two modulations, the visible strip and the two X-ray
  mechanisms are all relations between quantities or one-plane diagrams, and a
  fixed frame with honest labels is both clearest and cheapest.

## The chapter's answer to root rule 23: be inspiring

This is the chapter where twenty-three chapters of separate subjects turn out to
be one subject, and where a reader learns that the light they are reading by, the
warmth on their hands, the radio in the car and the X-ray of a broken bone are the
same thing at different rates. The figures should make that single fact felt.

- **One wave, turned in the hand.** The 3D scene of Figure 24.7 is the chapter's
  centre. A reader who can look down the beam and see $E$ and $B$ as a simple
  cross, then tilt back to the book's own side view and watch the crest travel,
  has understood transverse in a way no sentence delivers. Let a receiving wire or
  a loop be dropped into the scene and turned, and the section's three conceptual
  questions answer themselves.
- **The antenna as the wave's source, cycle by cycle.** Figure 24.5 draws four
  separate panels for four instants. One live antenna with charge sliding up and
  down it, the field it has already sent out streaming away at $c$ and a phase
  marker that the reader can drag or let run, is the same picture with the
  imagining taken out of it, and it makes the claim that the wavelength is set by
  the period something the reader watches rather than is told.
- **A spectrum that is one axis, not seven pictures.** Figure 24.8 is the one
  figure of the chapter every reader will return to. A logarithmic axis the reader
  drags a marker along, reading off frequency, wavelength and band, with a
  familiar object drawn at the marker's wavelength for scale — a building, a
  person, a pinhead, a cell, an atom, a nucleus — turns twenty orders of magnitude
  from a printed strip into a distance the reader has walked. The visible band is
  drawn in true colour, and the marker passing through it is the moment the whole
  chapter lands.
- **Modulation you can hear with your eyes.** AM and FM are two ways of writing a
  slow signal onto a fast carrier, and the book draws each as three stacked stills.
  One figure with the audio signal drawn as a shape the reader can change, a
  carrier frequency on a slider and the modulated wave built beneath, with a
  choice between amplitude and frequency modulation, shows in one picture why noise
  spoils the one and not the other.
- **The inverse square, drawn as the reason it is true.** 24.4's problems keep
  asking for the field at a distance from a transmitter. A figure that shows the
  same power crossing spheres of growing radius, with the intensity and the two
  field amplitudes on a readout, gives the reader the geometry behind three of the
  section's problems at once.
- **How each band is made.** The two X-ray mechanisms of 24.18 and 24.19 are the
  only submicroscopic pictures in the chapter, and they are the place where a
  reader first sees that a colour of light is an energy of a transition. One scene
  in which an electron either knocks out an inner-shell electron or is braked by
  the material, with the emitted photon's place on the spectrum marked, ties the
  section's last third back to its first.

## Wanted at chapter level

- `concept_prereqs`: `maxwells-equations` needs an edge into Chapter 23's
  Faraday's law of induction and into Lenz's law, both of which belong to 23.2,
  Faraday's Law of Induction: Lenz's Law; `hertz-observations` needs an edge into
  the resonant frequency of an RLC circuit, which is 23.12, RLC Series AC
  Circuits. Chapter 23's `chapter.json` had landed when this chapter was prepared
  but none of its concept ids had (`ost rows college-physics-2e concepts
  --chapter 23` returns nothing), so the three edges are not staged. The chapter
  pass adds them once Chapter 23's ids are in `book.json`.
- `concept_prereqs`: `em-waves-from-accelerating-charges` and `antenna-resonance`
  would each take an edge into Chapter 23's inductance or RLC nodes if the section
  agents find them useful; the same pass decides.
- Nothing else. The chapter declares no type, and the three symbol rows it needs
  (`B_0mag`, `I_ave`, `I_0peak`) are staged and merged here.
