# Plan: 17.6 Hearing (m42297)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, in the wave that finishes Chapters 17 to 19; the
per-section stop of rule 2, the plan review of rule 5 and the user picks of
rule 15 are replaced by this file, written before the section was built and
left for review after, as `ch17/config.md` records.

The section that turns from sound to its perception. It names the range of
frequencies the ear hears and what lies outside it, the perceptions of pitch,
loudness and timbre and the physical quantities each rests on, the phon and
the equal-loudness curves that relate loudness to intensity level and
frequency, the speech region and the audiogram by which hearing loss is
measured, and, in a boxed note and the paragraphs after it, the mechanism of
the ear itself. One photograph (17.33), three graphs (17.34 to 17.36), two
anatomical illustrations (17.37, 17.39) and one schematic (17.38), Table
17.4, one worked example, seven glossary terms, one Check Your Understanding,
one conceptual question, seventeen problems of which nine are keyed, no AP
item and no equation. One page (rule 11).

## Sub-concepts (page headers)

The module prints no header of its own, so all seven are the agent's (rule
3).

1. `hearing-range` **Hearing and the range of audible frequencies** (book:
   the opening paragraph on the ear's range and sensitivity; the paragraph
   that defines hearing, infrasound and ultrasound and gives the ranges of
   dogs, bats, dolphins and elephants). The Check Your Understanding on
   whether ultrasound and infrasound are imperceptible to every hearing
   organism tests this passage and sits inline after it (rule 12).
2. `pitch` **Pitch and relative pitch** (book: the paragraph on the
   perception of frequency, the 0.3% discrimination, notes and perfect
   pitch).
3. `loudness-perception` **Loudness and the range of intensities** (book:
   the paragraph on the threshold of 10⁻¹² W/m², the trillion-fold range,
   1 dB and 3 dB differences and the ear's sensitivity between 2000 and
   5000 Hz; Table 17.4 Sound Perceptions as a `div.book-table`). The
   variables $\kIntens$ and $\beta$ anchor here.
4. `timbre-tone` **Timbre, tone and note** (book: the paragraph on the
   violin and the piano playing middle C, tone quality and the words used
   for timbre).
5. `equal-loudness` **The phon and the equal-loudness curves** (book: the
   paragraph defining the phon and describing Figure 17.34; Figure 17.34;
   Example 17.6 Measuring Loudness with its three parts; the paragraph that
   reads the graph's facts, the 0-phon threshold, the dips between 2000 and
   5000 Hz and the rise at both extremes).
6. `hearing-loss` **Hearing loss, the speech region and the audiogram**
   (book: the paragraph on frequencies above 8000 Hz, the shaded speech
   region and the 40- and 60-phon losses; Figure 17.35; the paragraph on
   hearing tests, the audiogram, noise loss at 4000 Hz and presbycusis;
   Figure 17.36).
7. `ear-mechanism` **The hearing mechanism** (book: the boxed note The
   Hearing Mechanism with Figure 17.37 inside it, kept verbatim as the
   config says; the paragraph on the outer, middle and inner ear with the
   lever system and the protective muscles; Figure 17.38; the paragraph on
   the cochlea, the tectorial membrane and the hair cells; Figure 17.39; the
   paragraph on conductive and nerve losses and hearing aids; the paragraph
   on the cochlear implant). The variables $\kProne$, $\kPrtwo$, $\kFone$,
   $\kFtwo$, $A_1$ and $A_2$ that the lever figure writes anchor here.

The book gives its one example no number in the CNXML; the publisher prints
it as Example 17.6, and the page follows that. Its three parts are lookups on
Figure 17.34, which the page's figure reproduces. Cross-references are plain
text; the section names none outside its own figures. Learning objectives,
the section summary and the seven glossary terms come out of the running text
into the tables and the views (rule 4). The band photograph of Figure 17.33
is dropped as a splash image, as `ch17/config.md` decided.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| audible-range | idea | hearing-range | the 20 to 20,000 Hz range, infrasound and ultrasound, the animals; the Check Your Understanding |
| pitch-discrimination | idea | pitch | the 0.3% figure and 500.0 against 501.5 Hz; the keyed problem on the closest frequencies to 500 Hz |
| loudness | idea | loudness-perception | the threshold, the trillion-fold range, 1 dB and 3 dB, Table 17.4; the problems on 85 dB and on the ratio 1.26 |
| timbre | idea | timbre-tone | the violin and the piano; Table 17.4's rows for timbre, note and tone |
| equal-loudness-curves | skill | equal-loudness | Figure 17.34 and Example 17.6; the keyed problems that read the graph |
| hearing-loss-and-audiograms | idea | hearing-loss | Figures 17.35 and 17.36; the conceptual question; the problems on a 50-dB loss and on the two thresholds |
| hearing-mechanism | idea | ear-mechanism | the boxed note and Figures 17.37 to 17.39; the lever system; the cochlear implant |

The section leans on `hearing` and `sound` (17.1), `pitch` (17.2),
`frequency` (16.2), `sound-intensity-level`, `threshold-of-hearing` and
`decibel-ratios` (17.3), `fundamental-and-overtones`, `air-column-resonance`
and `closed-tube-resonances` (17.5), `lever` and `lever-mechanical-advantage`
(9.5) and `force-from-pressure` (11.3); the coverage rows mark each as used
where the text uses it.

## Figures

id · replaces or Sim · concepts · what moves or still · sliders · headline ·
graph · 3D

1. `sim-equal-loudness` · replaces Figure 17.34, the thirteen equal-loudness
   curves · equal-loudness-curves, loudness, sound-intensity-level,
   threshold-of-hearing · **still**: the graph is a relation between three
   quantities and has no time in it; the figure answers its sliders and
   registers no cycle (rule 14) · $\kf$ (20 to 20,000 Hz on a slider that
   walks a geometric series of thirty-one values, 20, 25, 30, 40, 50, … ,
   15,000, 20,000, so that 60 Hz and 15,000 Hz are equally easy to set on a
   logarithmic axis; default 100, frequency), $\beta$ (−10 to 130 dB,
   default 80, ink, untyped as `ch17/COLOR.md` decides) · value add:
   variation by slider, the interpolation between curves that Example 17.6
   does by eye is done in front of the reader, and the intensity in watts
   per meter squared that the book's caption names is read off a second
   axis · "A 100 Hz sound at 80 dB lies halfway between the 70- and 80-phon
   curves, so its loudness is 75 phons." · the graph is the idea: the
   thirteen curves in ink on a logarithmic frequency axis (fixed 20 to
   20,000 Hz) against intensity level (fixed −10 to 130 dB), the two curves
   that bracket the point drawn heavier, a right-hand axis of intensity in
   the intensity hue, the point with a drop line to each axis · 2D. Labels:
   the thirteen curve labels are the legend, one per curve at the right end
   where they never collide, so they are always on (rule 26.7). Readout:
   the loudness in phons at the live $\kf$ and $\beta$, with
   $\kIntens = \kIo 10^{\beta/10}$ in the intensity hue; small line on the
   1000 Hz convention or on what the point's position says (below the
   0-phon curve nothing is heard; above 120 phons the sound is painful).
   Draws frequency, intensity.
2. `sim-speech-region` · replaces Figure 17.35, the speech region with the
   0-, 40- and 60-phon thresholds · hearing-loss-and-audiograms,
   equal-loudness-curves · **still**: a threshold is a curve and a hearing
   loss is a number, and neither runs on a clock (rule 14) · the hearing
   loss (0 to 80 phons, default 40, ink, with soft detents at the book's
   0, 40 and 60), $\kf$ (the same thirty-one-value series, default 1000 Hz,
   frequency) · value add: variation by slider, the reader raises the loss
   and watches the threshold climb through the speech region, and reads at
   one frequency how much of speech is left above it · "With a 40-phon loss
   the threshold at 1000 Hz is 40 dB, and conversational speech there runs
   from 40 to 58 dB, so it is heard, though quietly." · the graph is the
   idea: the shaded speech region, the normal threshold dashed, the raised
   threshold solid in ink, and at $\kf$ a vertical line in the frequency
   hue with the threshold marked and the speech band bracketed · 2D.
   Readout: the threshold at $\kf$ for that loss, and the range of speech
   levels there, as a sentence in the book's voice; small line on the
   female voice at higher frequencies where the loss is 60 phons or more.
   Draws frequency.
3. `sim-audiogram` · replaces Figure 17.36, the three audiograms ·
   hearing-loss-and-audiograms · **still**: a hearing test is a set of
   readings (rule 14) · a choice of the person tested, normal hearing, the
   child after the cap gun, or presbycusis, since which person is a state
   and not a quantity (rule 26.1); no slider · value add: standardisation
   (the three charts on one frame with one scale) and the choice, which
   puts the three losses on the same axes so the dip at 4000 Hz and the
   slope of presbycusis are read against a normal ear · "The child hears
   normally except near 4000 Hz, where both ears need 55 dB more than
   normal." · the graph is the idea: threshold level relative to normal on
   an inverted axis (fixed −10 to 60 dB), frequency 250 to 8000 Hz on a
   logarithmic axis, the right ear as circles in `F.cat(0)` and the left
   ear as diamonds in `F.cat(1)` since an ear carries no type, the
   bone-conduction brackets in ink for presbycusis · 2D. Labels: a legend
   for the two ears and the brackets; hover names on the points give the
   ear, the frequency and the reading. Readout: the reading of each ear at
   the frequency that tells the case apart, as a line in the book's voice.
   Draws frequency (the axis title).
4. `fig-ear` · Figure 17.37, the gross anatomy of the ear, **kept image**,
   a `photo` row with the book's caption, inside the boxed note as the book
   prints it; `ch17/config.md` says the ear's anatomy is a labelled drawing
   and stays a faithful copy or a kept image, and the book's illustration
   is better than any redrawing of a pinna and a cochlea in strokes ·
   width 350.
5. `sim-middle-ear` · replaces Figure 17.38, the middle ear's lever ·
   hearing-mechanism, lever, lever-mechanical-advantage, force-from-pressure
   · **still**: the schematic shows how a pressure becomes a larger pressure,
   which is a chain of relations and not a motion (rule 14) · $\kProne$
   (0.02 to 2.00 Pa, default 0.20, pressure), $A_1$ (30 to 90 mm², default
   60, ink), $A_2$ (1.0 to 5.0 mm², default 2.0, ink), $r_1/r_2$ (1.0 to
   3.0, default 1.3, ink) · the book gives no numbers beyond "about 40
   times", so the defaults are chosen to give it: a lever ratio of 1.3 and
   an area ratio of 30 make 39 · value add: variation by slider, the reader
   sees that the lever does a little and the small window does most, and
   the readout writes the chain $\kFone = \kProne A_1$,
   $\kFtwo = (r_1/r_2)\kFone$, $\kPrtwo = \kFtwo/A_2$ · "A sound pressure
   of 0.20 Pa on the eardrum becomes 7.8 Pa at the oval window, 39 times as
   great." · the schematic on the left as the book draws it, the eardrum
   and the oval window as membranes whose drawn width is the diameter of a
   circle of that area, the hammer, anvil and stirrup about a pivot with
   the two lever arms bracketed, force arrows in the force hue drawn to one
   scale, pressure arrows in the pressure hue; on the right a logarithmic
   pressure gauge with $\kProne$ and $\kPrtwo$ marked and the factor between
   them bracketed, since the two pressures differ by a factor a linear
   arrow cannot show · 2D. Draws pressure, force.
6. `fig-cochlea` · Figure 17.39, the middle and inner ear in detail, **kept
   image**, a `photo` row with the book's caption, for the same reason as
   17.37 · width 300.

Photographs: Figure 17.33, the band, is dropped: the text does not point at
it and it heads the section as a splash image (`ch17/config.md`).

Figures that serve exercises: none; the problems refer to Figure 17.34 and
Figure 17.35, which the page's own figures replace.

Extra simulations (rule 15), thought through, judged and decided:

- The audiogram figure's choice of person is the one extra view built, and
  it lives inside the required figure rather than beside it.
- The trillion-fold range of the ear laid against a ruler (the first problem
  asks what a ruler reading 1 mm at its finest would read at its coarsest).
  Left: 17.3's decibel ladder already draws the twelve decades, and a second
  ladder here would repeat it.
- The relative pitch of two tones 0.3% apart, drawn as two waves. Left: a
  0.3% difference is invisible on any drawn wave, and the idea is a number,
  not a picture.
- The cochlea unrolled, with the place of resonance sliding along it as the
  frequency changes. Considered seriously, since the text says high
  frequencies stimulate the near end and low the far end. Left: the book
  gives no numbers for the map of frequency along the membrane, and a
  figure that invented them would be teaching what the book does not.

## Exercises

- The Check Your Understanding `cyu1` (fs-id2684305, are ultrasound and
  infrasound imperceptible to all hearing organisms) is keyed by the book and
  sits inline after `hearing-range`, the passage that names the animals'
  ranges (rule 12), Understand.
- 1 conceptual question, unkeyed, an open item with an AI-marked suggested
  approach: `cq1` (fs-id2397751, why a hearing test reads 0 dB at 250 Hz
  when Figure 17.35 shows no one hears that frequency below 20 dB), Analyze,
  citing `hearing-loss`.
- No AP item: the section prints none.
- 9 problems keyed and kept, all at the end: `p1` (fs-id1405404, the ruler
  spanning 10¹², keyed 1 × 10⁶ km), `p3` (fs-id3007431, the closest
  frequencies to 500 Hz, keyed 498.5 or 501.5 Hz, set as two parts), `p5`
  (fs-id2621794, the next clearly quieter level below 85 dB, keyed 82 dB),
  `p7` (fs-id2521311, the threshold at 60, 400, 1000, 4000 and 15,000 Hz,
  keyed 48, 9, 0, −7 and 20 dB, set as five parts), `p9` (fs-id2429436, the
  600 Hz tone at 20 and 70 phons, keyed 23 and 70 dB), `p11`
  (fs-id3161731, the 50-dB loss, keyed five factors of 10), `p13`
  (fs-id3201698, the just audible 200 Hz and 4000 Hz intensities, keyed
  2 × 10⁻¹⁰ and 2 × 10⁻¹³ W/m²), `p15` (fs-id2056716, the 100 Hz and 4000
  Hz thresholds of one person, keyed 2.5) and `p17` (fs-id1448928, the ratio
  of intensities just discernible as louder, keyed 1.26).
- 8 problems left out, having no answer in the book's key: the speedometer
  spanning 10³ (fs-id1844846), 2002 Hz against 1999 Hz (fs-id2583819), the
  TV from 70 to 73 dB (fs-id1972718), 40 phons at 60, 3000 and 8000 Hz
  (fs-id3045633), the loudness of four frequencies at 60.0, 110 and 20.0 dB
  (fs-id2384775), the woman's 5.0 × 10¹² amplification (fs-id2588123), 60
  phons at 60.0 and 10,000 Hz (fs-id3191645) and the child's 60 dB loss
  near 5000 Hz (fs-id2447322). Named in `notes` and `exercise_notes`.
- Nothing is taken from another section and nothing is held back.
- No generated questions: every node of the section has a book exercise
  that tests it except `timbre` and `hearing-mechanism`, which the book
  tests with no item of its own; noted, no question generated.
- Weights: `p1` gives `loudness` its full value and `threshold-of-hearing`
  3; `p5` and `p17` give `loudness` the full value and `decibel-ratios` 3;
  `p7`, `p9` and `p13` give `equal-loudness-curves` the full value, `p13`
  giving `sound-intensity-level` 3 as well; `p11` and `p15` give
  `hearing-loss-and-audiograms` the full value and `decibel-ratios` 3; `cq1`
  gives `hearing-loss-and-audiograms` the full value and
  `equal-loudness-curves` 2.

## Views

- Formulas: the section states no equation and `chapter.json` carries none
  for it.
- Definitions: the two variables of the section already in `chapter.json`,
  $\kIntens$ and $\beta$, and the six the lever figure writes (see below);
  seven glossary terms, loudness, timbre, note, tone, phon, ultrasound and
  infrasound.
- Concept map: the seven nodes above with their edges into 9.5, 11.3, 16.2,
  17.1, 17.2, 17.3 and 17.5.

## Colour

The page binds frequency, intensity, pressure and force. The equal-loudness
figure colours its frequency slider and axis in the frequency hue and its
right-hand intensity axis and the $\kIntens$ of its readout in the intensity
hue; the speech-region and audiogram figures bind frequency on their axes;
the middle-ear figure draws $\kProne$ and $\kPrtwo$ in the pressure hue and
$\kFone$ and $\kFtwo$ in the force hue. The intensity level $\beta$, the
loudness in phons, the hearing loss, the areas $A_1$ and $A_2$, the lever
arms and their ratio are untyped and in ink, as `ch17/COLOR.md` decides. The
two ears of the audiogram wear the categorical palette, since an ear has no
type and the two must be told apart. Nothing on the page binds time,
velocity, position or temperature.

## Wanted at chapter level

- variables `I_intens` → 17.6-loudness-perception
- variables `β_dB` → 17.6-loudness-perception
- variables: add rows for 17.6 anchored at 17.6-ear-mechanism, since the
  lever figure writes them with the book's existing symbols: `P_1`
  (pressure, Pa, "the pressure the sound wave exerts on the eardrum"),
  `P_2` (pressure, Pa, "the pressure the stirrup creates at the oval window,
  about 40 times that on the eardrum"), `F_1` (force, N, "the force the
  sound pressure exerts on the eardrum, $\kFone = \kProne A_1$"), `F_2`
  (force, N, "the force the lever system applies to the oval window"), `A_1`
  (m², "the area of the eardrum"), `A_2` (m², "the area of the oval window").
- No symbol row is changed and none is added: `P_1`, `P_2`, `F_1`, `F_2`,
  `A_1` and `A_2` already exist with the types the figure needs.


## Applied by the chapter pass (2026-09-14)

The two variable rows the section already had are anchored at
`17.6-loudness-perception`. The six rows the lever wanted are added and
anchored at `17.6-ear-mechanism`: $P_1$ and $P_2$ as pressures in pascals,
$F_1$ and $F_2$ as forces in newtons, and $A_1$ and $A_2$ as areas in
square meters with no type, each with the meaning the middle ear gives it.
No symbol row was changed and none was added; the chapter's variables table
now holds 64 rows. The section states no equation of its own, so it has no
equation row to anchor.

## Figure pass (2026-09-15, Claude Fable 5.1)

`sim-middle-ear`: the eardrum and the oval window are drawn as taut skins
held in fixed rims and bowed a little by the pressure, not bare vertical
lines, and the oval window's name sits to the right of its rim so it never
meets the stirrup's force label when the lever ratio is large. The three
graphs are unchanged.
