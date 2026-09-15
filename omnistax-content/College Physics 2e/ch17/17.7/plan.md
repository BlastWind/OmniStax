# Plan: 17.7 Ultrasound (m42298)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's instruction to finish the book in waves;
the per-section stop of rule 2, the plan review of rule 5 and the user picks
of rule 15 are replaced by this file, written before the section was built
and left for review after, as `ch17/config.md` records.

The chapter's last section, and the one that puts the physics of the six
sections before it to work. Ultrasound is any sound above 20 kHz, and the
section follows it into medicine: at high intensity it shatters stones and
heats deep tissue, and at low intensity it images the body, because a wave
partly reflects wherever the acoustic impedance changes. The section defines
that impedance, gives the fraction of the intensity that reflects at a
boundary, sets the limit the wavelength puts on the detail a probe can
resolve, and closes on Doppler-shifted ultrasound, whose double shift is read
as a beat frequency. One table (17.5), two book headers, seven book images,
two worked examples, three boxed notes, three glossary terms, one Check Your
Understanding box, four conceptual questions and thirteen problems of which
seven are keyed. No AP items. One page (rule 11).

## Sub-concepts (page headers)

The module prints two headers of its own, Ultrasound in Medical Therapy and
Ultrasound in Medical Diagnostics, and those are kept as the book writes them
(`ch17/config.md`); the other six are the agent's (rule 3), since the
diagnostics half runs to a dozen paragraphs and carries four separate ideas.

1. `ultrasound` **Ultrasound and its wave properties** (book: the opening
   paragraph defining ultrasound and naming its applications; the boxed note
   Characteristics of Ultrasound). Figure 17.40 stands here.
2. `therapy` **Ultrasound in Medical Therapy** (book's own header: the
   cavitation paragraph, Figure 17.41, the diathermy paragraph and the
   paragraph on the sound pressure level scale). `ultrasound-therapy` is
   introduced here.
3. `diagnostics` **Ultrasound in Medical Diagnostics** (book's own header:
   the transducer paragraph, which is the piezoelectric crystal that both
   sends and receives).
4. `impedance` **Acoustic impedance** (book: the paragraph defining
   $Z = \krho\kv$ and Table 17.5). The variables $Z$, $\krho$ and $v$ and
   `eq-acoustic-impedance` anchor here. `acoustic-impedance` is introduced
   here, and `sim-acoustic-boundary` stands here.
5. `reflection` **How much of the intensity reflects at a boundary** (book:
   the two paragraphs on reflection and transmission and the definition of
   $a$; Example 17.7; the paragraph on diagnostic intensities and their
   safety). The variables $Z_1$, $Z_2$ and $a$ and
   `eq-intensity-reflection-coefficient` anchor here.
   `intensity-reflection-coefficient` is introduced here.
6. `imaging` **Forming an image, and the detail it can show** (book: Figure
   17.42 and the paragraph on sweeping the beam, Figures 17.43 and 17.44, the
   paragraph on the wavelength limit and the rule of 500 wavelengths, and the
   paragraph on density information). The variables $\klam$, $\kf$ and $\kvw$
   anchor here. `ultrasound-imaging-resolution` is introduced here, and
   `sim-echo-ranging` and `sim-resolution-depth` stand here.
7. `doppler` **Doppler-shifted ultrasound** (book: the paragraph on the
   double shift, Figure 17.45, the paragraph on mixing the echo to make
   beats, the boxed note Uses for Doppler-Shifted Radar and Example 17.8 with
   Figure 17.46). The variables $\kfsrc$, $\kfobs$, $\kvobs$, $\kvs$,
   $\kvblood$, $\kfB$, $\kfone$ and $\kftwo$ and `eq-beat-frequency-echo`
   anchor here. `doppler-shifted-ultrasound` is introduced here, and
   `sim-doppler-ultrasound` stands here.
8. `applications` **Industrial and other applications** (book: the boxed note
   Industrial and Other Applications of Ultrasound, kept verbatim). The one
   Check Your Understanding box, which asks why one technique both images a
   fetus and destroys a tumour, is set inline after it, at the end of the
   narrative where the book prints it.

The book gives its two examples no number in the CNXML; the publisher prints
them as Examples 17.7 and 17.8, and the page follows that. The book's own
slips are kept verbatim and named in `notes`: the sentence "The minus sign is
used because the motion is toward the observer." printed twice in Example
17.8's Solution for (b), and the capital $F_\text{B}$ the book writes for the
beat frequency in the paragraph on mixing the echo, where the rest of the
section and the summary write $f_\text{B}$. Cross references are plain text.
Learning objectives, the section summary and the three glossary terms come
out of the running text into the tables and the views (rule 4).

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| ultrasound-therapy | idea | therapy | the definition above 20 kHz; cavitation and diathermy; Figure 17.41; the Check Your Understanding; the problems on 170 dB and 103 dB; the conceptual question on 210 dB |
| acoustic-impedance | result, eq-acoustic-impedance | impedance | the definition; Table 17.5; Example 17.7(a); the keyed problem on the transducer, air and gel |
| intensity-reflection-coefficient | result, eq-intensity-reflection-coefficient | reflection | the definition; Example 17.7(b)'s 1.4%; the same keyed problem; the conceptual question on imaging a heavier patient |
| ultrasound-imaging-resolution | idea | imaging | Figure 17.42; the 7 MHz wavelength of 0.22 mm and the 500λ rule; the problems on the 20.0 MHz probe and the eye, the 0.750 μs difference and the dolphin's two sharks |
| doppler-shifted-ultrasound | result, eq-beat-frequency-echo | doppler | the double shift; Figure 17.45; Example 17.8's 649 Hz beat; the note on Doppler radar; the keyed problem on the 30.0 cm/s bloodstream |

The section leans on `audible-range` and `loudness` (17.6), `sound` and
`sound-longitudinal-pressure-wave` (17.1), `speed-of-sound-in-media`,
`speed-of-sound-frequency-wavelength` and `echo-ranging` (17.2),
`sound-intensity`, `sound-intensity-level`, `sound-pressure-level` and
`threshold-of-hearing` (17.3), the three Doppler results and `doppler-effect`
(17.4), `beats` and `beat-frequency` (16.10), `density` (11.2) and
`wave-energy-amplitude` (16.11); the coverage rows mark each as used where
the text uses it. Nothing points at 17.5, which is not built.

## Figures

id · replaces or Sim · concepts · value add · what moves or still · sliders ·
headline · graph · 3D

1. `sim-acoustic-boundary` · Sim (the book draws no boundary; it prints the
   table and the two formulas) · acoustic-impedance,
   intensity-reflection-coefficient · **variation by slider and intuition**:
   the book asks the reader to read two impedances out of Table 17.5,
   subtract them and square, and gives no picture of what the answer means;
   here the two media are chosen and the beam arriving at the boundary splits
   into a reflected and a transmitted share drawn to scale, so the reader sees
   at once that fat against muscle returns almost nothing while tissue against
   air returns everything · **still**: a boundary and its two shares are a
   steady state, and the idea is the ratio, not the travel of the pulse, so
   the figure answers its choices and registers no cycle (rule 14;
   `ch17/config.md` lists 17.7's boundary among the stills) · two choices
   (rule 26.1, since a medium is a discrete state): medium 1 (air, water,
   blood, fat, muscle, bone, transducer) defaulting to fat and medium 2
   defaulting to muscle, which is Example 17.7(b); the incident intensity is
   fixed at 1, since only the ratio is the physics · "Between fat and muscle
   only 1.4% of the intensity is reflected, and the rest is transmitted." ·
   the two media are the scene, drawn as two ink fields either side of a
   vertical boundary, with the incident, reflected and transmitted arrows
   scaled by their intensities and a pair of bars beside them; no graph · 2D.
   Readout: $a = (Z_2 - Z_1)^2/(Z_1 + Z_2)^2$ with the live impedances; small
   line writing $Z = \krho\kv$ for each medium from Table 17.5's numbers.
   Draws intensity, density and velocity; $Z$, $a$ and the names of the media
   are ink, as `ch17/COLOR.md` decides. Labels: the frame, the two media and
   the three arrows, seven in all on a fixed layout, so they are on.
2. `sim-echo-ranging` · replaces Figure 17.42, the speaker-microphone above a
   fetus and the graph of echo intensity against time · ultrasound-imaging-
   resolution, acoustic-impedance · **flow by animation and variation by
   slider**: the book draws the bleep and the four peaks in two separate
   panels and leaves the reader to connect them; here one pulse leaves the
   transducer, reflects from each boundary it meets and returns, and its peak
   appears on the graph beneath at the moment it arrives, so the time axis and
   the depth axis are seen to be the same axis · **moving**: the whole idea is
   that the time between the signal and its echo is the depth, which is a
   clock; the figure registers a cycle and gets the transport (rule 14) · the
   depth of the front boundary (2.0 to 12.0 cm, default 4.0, position) and the
   thickness of the reflecting body (1.0 to 8.0 cm, default 5.0, position),
   which move the four peaks apart and together · "An echo from 4.0 cm deep
   returns in 52 μs, because the pulse travels there and back at 1540 m/s." ·
   the tissue is a horizontal scene, so the graph of echo intensity against
   time sits below it · 2D. Readout: $d = \kvw t/2$ with the live depth and
   round-trip time; small line on why the far boundaries return weaker echoes.
   Draws position, velocity, intensity and time. Labels: the transducer, the
   four boundaries and the two axes, on, since they sit on a fixed frame.
3. `sim-resolution-depth` · Sim (the book states the 0.22 mm and the 500λ rule
   in a sentence and draws nothing) · ultrasound-imaging-resolution ·
   **variation by slider and intuition**: the trade the sentence describes,
   finer detail against shallower reach, is a single slider's two consequences
   pulling in opposite directions, and the reader sees the smallest detail
   shrink while the depth the probe reaches shrinks with it · **still**:
   nothing in the picture has a clock; the frequency is a setting and the two
   lengths are its consequences · the frequency of the probe (1.0 to 20.0 MHz,
   default 7.0, frequency, with soft detents at 7.0, the abdominal scan, and
   20.0, the eye) · "At 7.0 MHz the wavelength in tissue is 0.22 mm and the
   probe reaches about 11 cm into the body." · a body in section with the
   reached depth shaded, drawn above a graph of the wavelength and the
   penetration depth against frequency with the current frequency pinned ·
   2D. Readout: $\klam = \kvw/\kf$ with the live numbers; small line giving
   the depth as $500\klam$ and naming the organs each end of the slider suits.
   Draws frequency, position and velocity. Labels: the frame, the bracketed
   wavelength and the depth arrow, on.
4. `sim-doppler-ultrasound` · Sim (Figure 17.46 is a photograph of the probe
   on a hand and is kept as one) · doppler-shifted-ultrasound ·
   **variation by slider and intuition**: the shift in Example 17.8 is 649 Hz
   out of 2.5 MHz, a part in four thousand, and no drawing of two waves can
   show it; here the two Doppler steps are laid out as a chain with the
   broadcast, the frequency the blood receives and the frequency that returns,
   and the beat the two make is drawn as the envelope of their sum, which is
   the thing the instrument actually hears · **still**: the beats are drawn
   against time over one beat period, which shows the whole of the idea at
   once; setting the envelope running would add nothing the graph does not
   already say, and rule 14 forbids a loop added for its own sake · the blood
   velocity (0 to 60.0 cm/s, default 20.0, velocity, Example 17.8's artery)
   and the broadcast frequency (1.0 to 5.0 MHz, default 2.50, frequency) ·
   "Blood moving toward the source at 20.0 cm/s returns 2,500,649 Hz to a
   2,500,000 Hz probe, and the two mix to a beat of 649 Hz." · the chain of
   frequencies is a horizontal scene, so the graph of the mixed signal against
   time sits below it · 2D. Readout: $\kfB = |\kfobs - \kfsrc|$ with the live
   numbers; small line writing the two shifts that produced $\kfobs$. Draws
   velocity and frequency. Labels: the probe, the artery, the three
   frequencies of the chain and the beat period, on.

Photographs, each with keep or drop and the reason (rule 14;
`ch17/config.md` names the six kept):

- Figure 17.40, the ultrasound image of a 21-week fetus, **kept** at 300: it
  is the thing the whole section is about and the first thing the reader has
  seen of it, not decoration.
- Figure 17.41, the probe pulverising a brain tumour, **kept** at 200: the
  cavitation paragraph says "See Figure 17.41."
- Figure 17.43, the abdominal scan and the image it makes, **kept** at 300:
  the paragraph says the most common applications produce an image like it.
  The book prints (a) and (b) under one number, so this is one row.
- Figure 17.44, the 3D scan of a fetus, **kept** at 300: the paragraph points
  at it for the detail more advanced systems reach.
- Figure 17.45, the Doppler image of a partially occluded artery, **kept** at
  300: the paragraph says "See Figure 17.45," and the colours in it are the
  velocities the section is explaining.
- Figure 17.46, the probe on a hand, **kept** at 150 inside Example 17.8: the
  example says "as illustrated in Figure 17.46."
- Figure 17.42 is a sketch, not a photograph, and is replaced by
  `sim-echo-ranging` with its image kept as the original.

Figures that serve exercises: the section prints none; no problem of 17.7
refers to a figure.

Extra simulations (rule 15), thought through, judged and decided:

- **The boundary (`sim-acoustic-boundary`): built.** Two of the section's five
  concepts are the impedance and the fraction that reflects, the keyed problem
  on the coupling gel turns on the difference between 1.00 and 0.823, and the
  book gives the reader a table and two formulas and no picture at all.
- **The resolution trade (`sim-resolution-depth`): built.** The paragraph
  states three numbers, 0.22 mm, 1 mm and 500λ, and four of the section's
  problems ask for one or the other of them; the trade between them is the
  idea, and one slider shows both halves of it moving at once.
- **The Doppler chain (`sim-doppler-ultrasound`): built.** The double shift is
  the section's one new result, and the beat is how it is measured; Example
  17.8 and two problems are about nothing else.
- A cavitation animation, bubbles growing in the rarefactions and collapsing.
  Left: it would replay the book's sentence as a mechanism animation, which
  rule 24.9 forbids, and the physics of the collapse is not in this book.
- A sweep of the beam building a two-dimensional image from its echoes.
  Left: the image is a photograph the section keeps, Figure 17.43, and a
  simulated scan would be a picture of a computer's output rather than of a
  physical idea; the one-dimensional echo train of `sim-echo-ranging` carries
  the physics the section teaches.
- A ladder of the intensities used for surgery, diathermy and diagnosis.
  Left: 17.3's decibel ladder is that figure, and the three problems of this
  section that ask for a level are answered on it.

## Exercises

- 1 Check Your Understanding box, inline and keyed by the book: `cyu1`
  (fs-id2706418, why ultrasound both images a fetus and destroys a tumour,
  Understand, after `applications`, citing `therapy`).
- 4 conceptual questions, none keyed, each an open item with an AI-marked
  suggested approach: `cq1` (fs-id1355290, which of a neighbour's frequencies
  penetrate, Analyze), `cq2` (fs-id3045900, infrasound over long distances,
  Analyze), `cq3` (fs-id3044088, imaging a heavier patient, Analyze) and
  `cq4` (fs-id3105144, the 210 dB claim, Evaluate).
- 7 problems keyed and kept: `p1` (fs-id1426250, 10⁵ W/m² in decibels,
  170 dB), `p3` (fs-id2999852, 2.00 × 10⁻² W/m² in decibels, 103 dB), `p5`
  (fs-id3157929, the transducer against air and against gel, 1.00 and 0.823),
  `p7` (fs-id2406620, 20.0 MHz, its detail, its depth and its wavelength in
  air), `p9` (fs-id1405914, the 0.750 μs difference, 5.78 × 10⁻⁴ m and
  2.67 MHz), `p11` (fs-id1998767, the dolphin and its two sharks) and `p13`
  (fs-id2423508, the 30.0 cm/s bloodstream, 974 Hz).
- 6 problems left out, having no answer in the book's key: whether 155 dB is
  in the deep-heating range (fs-id2010306), the 0.13 ms echo in fat
  (fs-id3012407), the frequency for 0.250 mm detail (fs-id3257336), the echo
  times from 3.50 and 3.60 cm (fs-id2025066), the bat's 1.00 ms echoes
  (fs-id2669014) and the 500 Hz shift from moving blood (fs-id2423205). They
  are named in `notes` and `exercise_notes`.
- No AP test prep items: the chapter's 22 sit in 17.2 to 17.5.
- Nothing is taken from another section and nothing of this section's own is
  held back. The section's three decibel problems, `p1`, `p3` and the part of
  `p5` that is a ratio, stay here and tag 17.3's `sound-intensity-level`
  beside this section's own concepts, as `ch17/config.md` decided.
- No generated questions: every node of the section has a book exercise that
  tests it.
- Weights: `p1` and `p3` give `ultrasound-therapy` its full value and
  `sound-intensity-level` 3; `p5` gives `intensity-reflection-coefficient` the
  full value and `acoustic-impedance` 3; `p7`, `p9` and `p11` give
  `ultrasound-imaging-resolution` the full value and
  `speed-of-sound-frequency-wavelength` 3; `p13` gives
  `doppler-shifted-ultrasound` the full value and `beat-frequency` 3; `cq1`
  and `cq3` give `ultrasound-imaging-resolution` and
  `intensity-reflection-coefficient` their full values with a second tag at 2;
  `cq4` gives `sound-pressure-level` the full value and `ultrasound-therapy`
  3; `cyu1` gives `ultrasound-therapy` the full value and
  `ultrasound-imaging-resolution` 2.

## Views

- Formulas: the three equations of the section already in `chapter.json`, all
  three important (`eq-acoustic-impedance`,
  `eq-intensity-reflection-coefficient`, `eq-beat-frequency-echo`).
- Definitions: the eighteen variables of the section, and three glossary
  terms, acoustic impedance, intensity reflection coefficient and
  Doppler-shifted ultrasound.
- Concept map: the five nodes above with their edges into Chapters 11, 16
  and 17.

## Colour

The page binds intensity, density, velocity, position, frequency and time.
`sim-acoustic-boundary` draws the incident, reflected and transmitted
intensities and states each medium's density and speed in its readout;
`sim-echo-ranging` draws the depth as a position, the pulse's speed as a
velocity, the echo strength as an intensity and the round trip as a time;
`sim-resolution-depth` carries the frequency on its slider and draws the
wavelength and the reach as positions; `sim-doppler-ultrasound` carries the
blood's velocity and the frequencies of the chain. The acoustic impedances
$Z$, $Z_1$ and $Z_2$, the reflection coefficient $a$, the decibel levels and
every medium's name are ink, as `ch17/COLOR.md` decides: an impedance is a
material constant, though a coloured density and a coloured speed multiply to
give it. A medium's body is ink and two media are told apart by the boundary
line and their labels, never by a tint.

## Wanted at chapter level

- variables `Z` → 17.7-impedance
- variables `ρ_dens` → 17.7-impedance
- variables `v` → 17.7-impedance
- variables `Z_1` → 17.7-reflection
- variables `Z_2` → 17.7-reflection
- variables `a_refl` → 17.7-reflection
- variables `λ` → 17.7-imaging
- variables `f` → 17.7-imaging
- variables `v_w` → 17.7-imaging
- variables `I_intens` → 17.7-therapy
- variables `f_src` → 17.7-doppler
- variables `f_obs` → 17.7-doppler
- variables `v_obs` → 17.7-doppler
- variables `v_s` → 17.7-doppler
- variables `v_blood` → 17.7-doppler
- variables `f_B` → 17.7-doppler
- variables `f_1` → 17.7-doppler
- variables `f_2` → 17.7-doppler
- equations `eq-acoustic-impedance` → 17.7-impedance
- equations `eq-intensity-reflection-coefficient` → 17.7-reflection
- equations `eq-beat-frequency-echo` → 17.7-doppler
- concepts `acoustic-impedance`: its `evidence` may add "and the Sim of a beam meeting a boundary"; nothing else is wanted.


## Applied by the chapter pass (2026-09-14)

The eighteen variable rows and the three equation rows carry the anchors
this plan names. `acoustic-impedance` now names the Sim of a beam meeting a
boundary in its `evidence`, as this plan asked. The page binds intensity,
velocity, density, frequency, position and time, two more than `COLOR.md`
expected, because the echo train is clocked and the wavelength and the
reach of a probe are drawn on a scale of length; `COLOR.md` records it.
Eight places in the section's exercises and notes wrote a stray backslash
where a sentence should have ended or joined; they now read as sentences.
The book's repeated minus-sign sentence and its capital $F_\text{B}$ are
kept as printed.
