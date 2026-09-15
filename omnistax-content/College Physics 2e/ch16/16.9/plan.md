# Plan: 16.9 Waves (m42248)

Source: `source.md` (converted from CNXML). Status: written and built in the
wave of 2026-09-14, under the standing decision that the plan is left for
review rather than waiting on one (`config.md`, the dated block for 16.7 to
16.11).

The section that turns oscillation into propagation: the definition of a
wave, the wave velocity, the wavelength, the relation
$v_\text{w} = \lambda/T = f\lambda$, one worked example, and the difference
between a transverse and a longitudinal wave. Two sketches and one
photograph to settle, one Check Your Understanding, five AP items, two
conceptual questions, ten problems of which five are keyed.

## Sub-concepts (page spans)

The book has one untitled opening and one header, "Transverse and
Longitudinal Waves". The page is three spans:

1. **`wave`** — what a wave is (the opening two paragraphs, the water, sound,
   earthquake and radio examples, the gull and the period, the definition of
   the wave velocity), the Misconception Alert kept verbatim as a note, and
   the ocean-wave figure.
2. **`wave-speed`** — the wavelength, $v_\text{w} = \lambda/T$ and
   $v_\text{w} = f\lambda$, the Take-Home Experiment kept verbatim as a note,
   and Example 16.8, the gull in the ocean.
3. **`transverse-longitudinal`** — the book's own header: the two kinds of
   wave, the folded cord figure, the guitar photograph, the paragraphs on
   musical instruments, sound in fluids and solids, and P- and S-waves; the
   Check Your Understanding sits at its end.

## Concept nodes

The six nodes are staged already (`ost rows … concepts --where section=16.9`):
`wave` and `wave-velocity` introduced in `wave`, `wavelength` and
`wave-speed-wavelength-frequency` in `wave-speed`, `transverse-wave` and
`longitudinal-wave` in `transverse-longitudinal`. The page also uses
`simple-harmonic-motion` and `period-frequency` from earlier in the chapter
and `amplitude` from 16.3. No new node: the problems are all the one relation
applied, and nothing here is a skill of its own.

## Figures

id · replaces · concepts · value add · motion · sliders and choices ·
headline · graph · depth

1. `sim-ocean-wave` · Figure 16.28 · wave, wave-velocity, wavelength,
   wave-speed-wavelength-frequency · intuition and animation: the reader
   otherwise has to imagine the one thing the still cannot show, that the
   shape moves while the water does not, and variation by slider then makes
   the wavelength and the period visibly independent of the speed they set
   together · moving, endless, because a wave has a clock in it: the profile
   travels to the right at $v_\text{w} = \lambda/T$, the gull rides the
   surface up and down without moving right, and one marked water particle
   circles its own place, which is what the Misconception Alert says ·
   $\lambda$ (2.0 to 20.0 m, default 10.0, position), $T$ (1.0 to 10.0 s,
   default 5.00, time), $X$ (0.2 to 1.5 m, default 0.8, position) · "the
   crests are 10.0 m apart and pass the gull every 5.00 s, so the wave
   travels at 2.00 m/s while the gull only bobs up and down" · none, the
   scene is the idea · flat (rule 28.1); a horizontal scene, so there is
   nothing to stack. Tier: moving simulation, the lowest tier that carries
   the propagation the section is about. Labels on: six of them, and
   they do not collide at either slider extreme. Defaults are Example 16.8's own
   numbers, so the figure loads showing the worked answer.
2. `sim-wave-types` · Figure 16.29 + 16.30 folded · transverse-wave,
   longitudinal-wave · intuition and animation, with a choice that swaps the
   state (rule 26.1, archetype 8): the book draws the same cord twice, once
   shaken across its length and once along it, and the whole lesson is the
   angle between the disturbance and the direction of travel, which a still
   pair cannot show; one live cord shakes both ways and the two arrows stay
   on screen together · moving, endless, for the same reason as sim 1: the
   hand has a period · a choice, transverse or longitudinal (a discrete
   state, never a slider); $\lambda$ (0.5 to 4.0 m, default 2.0, position),
   $T$ (0.5 to 3.0 s, default 1.00, time), $X$ (0.05 to 0.40 m, default
   0.25, position) · "the hand moves up and down across the cord while the
   wave travels along it to the right at 2.00 m/s: the disturbance is
   perpendicular to the direction of propagation" · none · flat. Tier:
   moving simulation. Labels on: the disturbance arrow, the propagation
   arrow, the two brackets and the marked coil, five in all, none of them
   colliding at either extreme. The fold keeps both numbers: `number` 16.29,
   `folds` 16.30, eyebrow "Figure 16.29 + 16.30", both images as
   `originals` at the widths the book prints them (300 and 375).

Photographs, three:

- Figure 16.27, the ocean with the boats ahead of the wave: **drop**. It is
  the section's splash image and the text never points at it.
- Figure 16.31, the guitar and the sheet of paper: **keep**, with the book's
  caption. The passage is the one place where both kinds of wave are in one
  picture, the string transverse and the sound longitudinal, and the text is
  about exactly that. Width 270.
- The seismograph inside problem 10: the problem is unkeyed and is left out,
  and the photograph leaves with it.

Figures that serve exercises: the graph of the last AP item (`new.jpg`,
keyed $2\pi$ m) travels on that exercise card's own `figure` field, which is
the route this chapter already uses (`config.md`). No `figure` row without a
number, and no bare "Figure" eyebrow.

Extra simulations (rule 15): considered a sound-in-air panel showing
pressure against position beside the longitudinal cord, which would make the
compressions a graph; it belongs to Chapter 17, which teaches sound, and the
page would bind `pressure` for it alone. Considered an earthquake panel with
a P-wave and an S-wave racing at 7.20 and 4.00 km/s, which is problem 10's
picture; problem 10 is unkeyed and left out, and the paragraph on P- and
S-waves is one sentence. Neither survives; nothing extra is built.

## Exercises

- 1 Check Your Understanding, open, inline at the end of
  `transverse-longitudinal`, with the book's own answer.
- 5 AP test prep items. Three are keyed and open (the tuning fork against
  electromagnetic waves, the tambourine against the drum, and the graph
  whose wavelength is $2\pi$ m, which is keyed as a value and is kept as a
  number). Two have no key: "represent longitudinal and transverse waves in
  a graphical form" is an open item, and the four-option item on the motion
  of the particles in a transverse wave is kept as an open item with its
  options as the book prints them, never as a graded choice, under this
  job's standing decision. Both carry an AI-marked suggested approach.
- 2 conceptual questions, open, each with an AI-marked suggested approach.
- 10 problems. Keyed and kept: 1 (the South Pacific swell, 9.26 d), 3 (the
  wind ripples, 40.0 Hz), 5 (the rope bridge, 16.0 m/s), 7 (the earthquake,
  700 m), 9 (the two speakers, 34.0 cm). Unkeyed and left out with their
  answers: 2, 4, 6, 8 and 10, the last taking the seismograph photograph
  with it.
- No generated questions: every node has a book exercise.

## Views

- Formulas: `eq-wave-speed-period` and `eq-wave-speed-frequency`, both
  important, both anchored into `wave-speed`.
- Definitions: the four glossary terms (wave velocity, wavelength,
  transverse wave, longitudinal wave) and the five variables
  ($v_\text{w}$, $\lambda$, $T$, $f$, $X$).
- Concept map: the six nodes above, with their staged edges back to
  `simple-harmonic-motion`, `periodic-motion`, `average-speed`, `amplitude`,
  `period-frequency` and `pressure`.

## Colour

The page binds `position` ($\lambda$, $X$, the brackets and the marked
particle), `time` ($T$ and the clock) and `velocity` ($v_\text{w}$ and the
gull's own up-and-down speed, told apart by direction and label, as
`ch16/COLOR.md` says). The frequency is written in the readout's second
line as a sentence and is not drawn, so the page does not bind it. The water, the cord, the gull, the
person and every frame are ink. No new type, no new hue, no hex.

## Wanted at chapter level

- `eq-wave-speed-period` → 16.9-wave-speed
- `eq-wave-speed-frequency` → 16.9-wave-speed
- `v_w` → 16.9-wave
- `λ` → 16.9-wave-speed
- `T` → 16.9-wave
- `f` → 16.9-wave
- `X` → 16.9-transverse-longitudinal

No concept or symbol fix: the six concept rows, their edges and the eight
symbols the prep pass staged are all correct as they stand, and nothing on
this page needed a row changed.

**The chapter pass, 2026-09-14.** The seven anchors are written. The lead was
carried in words: it stated the wave speed as math, and a lead is printed
as plain text and is not swept, so the dollar signs stood on the page. No
concept or symbol row was changed.
