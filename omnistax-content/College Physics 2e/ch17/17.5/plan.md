# Plan: 17.5 Sound Interference and Resonance: Standing Waves in Air Columns (m42296)

Source: `source.md`, converted from the CNXML. Status: written before the build
and left for review, as `ch17/config.md` records. The section carries thirteen
numbered figures (17.20 to 17.32), one worked example, two boxed notes, two
Check Your Understanding boxes, sixteen AP items, three conceptual questions and
seventeen problems.

## Sub-concepts (page headers)

The book prints no headers of its own in this section, so the seven below are
the agent's, one per block of the narrative.

1. **Interference and the cancelling of noise** (`interference`): the opening
   paragraphs, the noise-cancelling headphones, the boxed note Interference.
   Check Your Understanding 1 sits after it.
2. **Resonance of an air column** (`air-column-resonance`): the tuning fork at
   the end of a closed tube, the disturbance down the tube and back.
3. **Nodes and antinodes** (`nodes-antinodes`): the paragraph that defines both
   terms and reaches $\lambda = 4L$, and the same standing wave driven from the
   closed end. Check Your Understanding 2 sits after it.
4. **The fundamental, the overtones and the harmonics** (`overtones`): the
   shorter wavelengths that fit, the three names, the trumpet against the
   clarinet, the throat and mouth as an air column.
5. **The resonant frequencies of a tube closed at one end** (`closed-tube`):
   the derivation from $v_\text{w} = f\lambda$ to $f_n = nv_\text{w}/4L$, and
   Example 17.5.
6. **Tubes open at both ends** (`open-tube`): the second ladder,
   $f_n = nv_\text{w}/2L$, the boxed note on resonance in everyday systems.
7. **Resonance in musical instruments** (`sounding-boxes`): the sounding boxes
   of the violin and the guitar, the marimba's gourds, and the closing
   paragraph on strings and atomic orbitals.

## Concept nodes

The eight nodes are already in `book.json` and none is added here:
`sound-interference`, `air-column-resonance`, `nodes-and-antinodes`,
`fundamental-and-overtones`, `closed-tube-resonances`, `open-tube-resonances`,
`tube-length-from-resonance`, `sounding-box-resonance`. Coverage rows introduce
them in the spans above, in that order, and lean on `standing-wave`,
`superposition`, `constructive-interference`, `destructive-interference`,
`nodes-and-antinodes-on-a-string`, `string-harmonics` and `beats` from 16.9 to
16.11, on `speed-of-sound-frequency-wavelength` and `speed-of-sound-temperature` from 17.2, on
`sound-intensity-level` from 17.3, and on `resonance` from 16.8.

## Figures

id · replaces · concepts · value add · motion · controls · headline · graph · depth

1. `sim-noise-cancelling` · Figure 17.21 · sound-interference · variation by
   slider and flow by animation: the reader sets how far the second sound is
   turned against the noise and watches the sum collapse, which no still
   drawing of a headphone can show · moving, because two travelling pressure
   waves are what add, and the sum must be seen to stay cancelled as they move;
   one loop is one wave period and the wave runs steadily to the right · the
   pressure amplitude $\Delta p$ of the introduced sound (0 to 2.0 Pa, default
   1.00 Pa, pressure), its phase against the noise (0° to 360°, default 180°,
   ink), and the frequency (100 to 1000 Hz, default 400 Hz, frequency) · "the
   second sound is turned 180° against the noise, and the two add to 0.00 Pa"
   · the two waves on one axis with their sum on a second axis beneath, since
   the graph is the idea · 2D.
2. `sim-tube-resonance` · Figure 17.22 + 17.23 + 17.24 + 17.25 + 17.26 ·
   air-column-resonance, nodes-and-antinodes · intuition and flow by
   animation: the book draws one sequence in four panels and the reader must
   otherwise imagine the disturbance going down the tube, coming back and
   arriving in step; the slider on the fork's frequency adds what the book
   only asserts, that at most frequencies the air column vibrates very little ·
   moving, because the idea is a round trip in time: the loop sends the
   disturbance down the tube, reflects it at the closed end, brings it back to
   the fork, and then holds the standing wave oscillating in its envelope ·
   the length $L$ of the tube (0.20 to 1.50 m, default 0.672 m, ink), the
   frequency of the fork (50 to 800 Hz, default 128 Hz, frequency), and a
   choice of where the fork is held, at the open end or near the closed end,
   which is the state Figure 17.26 draws · "at 128 Hz the reflected sound
   arrives back half a cycle later and adds to the fork's, and the air column
   resonates" · the air's displacement is drawn as a curve above the drawing of
   the tube, and the tube with its air is the horizontal scene beneath it, so
   no separate graph box is needed · 2D. The air is ink dots whose crowding is the compression, as the chapter's
   `COLOR.md` asks.
3. `sim-harmonic-ladder` · Figure 17.27 + 17.28 + 17.30 ·
   nodes-and-antinodes, fundamental-and-overtones, closed-tube-resonances,
   open-tube-resonances · standardisation and variation: the book prints two
   ladders of four tubes each, pages apart, and one drawing with a choice of
   ends puts them side by side in time, so that the open tube's fundamental
   being twice the closed tube's is one button press · still, because a ladder
   of envelopes has no clock in it; it redraws on input and takes no transport
   · the length $L$ (0.20 to 2.00 m, default 0.672 m, ink; the four tubes are drawn one length, as the book draws them, and the slider is read in the frequencies and wavelengths beside each), a choice of ends
   (closed at one end, open at both ends), and a choice of harmonic (1, 3, 5, 7
   for the closed tube and 1, 2, 3, 4 for the open one) · "a 0.672 m tube
   closed at one end sounds its fundamental at 128 Hz, and its first overtone
   is the third harmonic at 384 Hz" · none; the four tubes are the drawing ·
   2D. Node and antinode are named once, on the fundamental.
4. `sim-tube-length` · Sim · closed-tube-resonances,
   tube-length-from-resonance · variation by slider: Example 17.5 works one
   tube at one temperature, and the figure runs the same reckoning backwards
   across the whole range, so that the length a tuba needs for a low note and
   the shift a cold room brings are both visible · still, because a length
   answers a frequency and a temperature and nothing here happens in time ·
   the fundamental frequency (60 to 600 Hz, default 128 Hz, frequency), the
   air temperature (0.0 to 40.0 °C, default 22.0 °C, temperature), and a choice
   of harmonic (1, 3, 5, 7, 9) so that Example 17.5's fourth overtone can be
   read off · "a fundamental of 128 Hz at 22.0 °C needs a tube 0.672 m long" ·
   the tube is drawn vertically to scale beside a metre rule, so the graph of
   $L$ against $f_1$ sits beside it · 2D.

Example 17.5 keeps no figure of its own: its numbers are the defaults of
figures 2, 3 and 4, and figure 4 is the one that writes its reckoning out.

Photographs and images, keep or drop:

- Figure 17.20, the headphones and their jack: dropped, a splash image at the
  head of the section that the text does not point at.
- Figure 17.21, the labelled noise-cancelling headphones: replaced by figure 1
  and kept as its original.
- Figures 17.22 to 17.26: replaced by figure 2 and kept as its originals.
  Figure 17.25's CNXML reuses Figure 17.24's image, so the bundle's
  `Figure_18_05_03ad.jpg` stands as 17.25's original, as the chapter's notes ask.
- Figures 17.27, 17.28 and 17.30: replaced by figure 3 and kept as its
  originals.
- Figure 17.29, the throat and mouth in cross-section: kept as a photograph.
  The text says "See Figure 17.29" and the problem on voice production points
  at it again.
- Figures 17.31 and 17.32, the guitar and violin and the marimba: kept as
  photographs. The text names each and says what it shows.
- The eight images inside the AP items (the two pulses and their four candidate
  overlaps, the ripple tank, the string between two posts, the two tubes before
  a speaker, and the oscillator and pulley) travel on the `figure` field of the
  cards that refer to them, or inline in the prompt where a question offers
  four pictures as its choices, as `ch17/config.md` settles. None is redrawn.
  `image029.png` is printed at the end of the tube-and-speaker item in the
  source but belongs to the oscillator item that follows it, which says "as
  shown above", and it travels on that card.

## Types the page binds

`pressure` (the two gauge pressures of figure 1 and their sum), `position`
(the air's displacement along the tube, the wavelength brackets), `frequency`
(the fork, the harmonics, every $f_n$), `velocity` (the speed of sound on the
wavefront and in every readout) and `temperature` (figure 4's slider). The
chapter's `COLOR.md` expected the first four and named temperature only for
17.2; figure 4 draws it, because Example 17.5 finds the speed of sound from the
air temperature before it finds anything else, and a page binds what it draws.
The length $L$ of the tube, the harmonic number $n$ and the phase in degrees
stay untyped and in ink.

## Exercises

Two Check Your Understanding boxes inline, after `interference` and after
`nodes-antinodes`. Sixteen AP items, three conceptual questions and nine of the
seventeen problems at the end; the eight problems the book leaves unkeyed are
left out and named in `notes`. Ten AP items and all three conceptual questions
have no answer in the book and carry an AI-marked suggested approach; the six
keyed AP items are graded, except the one that asks for two answers of four,
which is kept as an open item with the book's own key as its solution, and the
one that offers four pictures, which is unkeyed and so is open with its four
pictures in the prompt. `eip-781`, the ruler item, carries no type in the CNXML
and sits under the AP header, so it is an `ap-test-prep` item keyed by the
book's sentence.

The four beat problems and the AP items on pulses and on standing waves on a
string test 16.9 to 16.11, which are now built, so they are tagged to
`superposition`, `constructive-interference`, `destructive-interference`,
`standing-wave`, `nodes-and-antinodes-on-a-string`, `string-harmonics` and
`beat-frequency` beside this section's own `sound-interference`, and they stay
on this page as `config.md` asks. Where an item leans on one concept and merely
touches another, the touched row carries a `weight` marked `"weights_by": "ai"`
(root rule 20).

## Wanted at chapter level

- `eq-closed-tube-fundamental` → 17.5-closed-tube
- `eq-closed-tube-first-overtone` → 17.5-closed-tube
- `eq-closed-tube-harmonics` → 17.5-closed-tube
- `eq-open-tube-harmonics` → 17.5-open-tube
- `eq-tube-length` → 17.5-closed-tube
- Prerequisite edges wanted for `sound-interference`: `superposition`,
  `constructive-interference`, `destructive-interference`, `beats` (16.10).
- Prerequisite edges wanted for `air-column-resonance`: `standing-wave` (16.10),
  `resonance` (16.8).
- Prerequisite edges wanted for `nodes-and-antinodes`:
  `nodes-and-antinodes-on-a-string` (16.10).
- Prerequisite edges wanted for `fundamental-and-overtones`: `string-harmonics`
  (16.10).
- No symbol row is changed and none is added: the section writes `λ`,
  `λ_prime`, `f`, `f_prime`, `f_n`, `f_1`, `f_2`, `f_3`, `v_w`, `L_len`, `n`,
  `Δp_press` and `T_temp`, all of which the chapter already stages.


## Applied by the chapter pass (2026-09-14)

The five equation rows carry the anchors this plan names. The section's
eleven variable rows, which this plan did not list, are anchored where the
text first gives each its meaning: $\klam$ at `17.5-nodes-antinodes`,
$\klamprime$ at `17.5-overtones`, $f_2$ at `17.5-open-tube`, and $L$, $n$,
$f$, $f'$, $f_n$, $f_1$, $f_3$ and $v_\text{w}$ at `17.5-closed-tube`. All
eight prerequisite edges this plan asked for are placed, since 16.8 and
16.10 are built; `exploration.md` lists them. The section's exercises were
already tagged to 16.9 to 16.11's concepts when it was built. The heading
of the first passage now reads "the canceling of noise", in the book's
American spelling, and the tube's rule is a meter rule. The page binds
temperature as well as frequency, velocity, position and pressure, because
the length of a tube that sounds a given note is drawn from the speed of
sound at the temperature the reader sets; `COLOR.md` records it.

## Figure pass (2026-09-15, Claude Fable 5.1)

`sim-tube-resonance`: the tuning fork is 130 units tall with a rounded yoke,
round-capped strokes and the prongs' swing ghosted either side, in place of
the small square one; its name sits on a panel above it. The other three
figures are unchanged.
