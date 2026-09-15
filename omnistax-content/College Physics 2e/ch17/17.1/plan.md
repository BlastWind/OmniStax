# Plan: 17.1 Sound (m42255)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on the standing instruction to finish the book in
waves; the plan is left for review after, as `ch17/config.md` records.

The section that defines sound and hearing and shows sound as a
longitudinal pressure wave. Four paragraphs, five figures (one photograph
and four sketches, three of them the same vibrating string), two defined
terms, no equation, no worked example, no exercise of any kind and no boxed
note but the PhET link, which is dropped per the chapter config. One page
(rule 11), thin as it is.

## Sub-concepts (page headers)

The book prints no header of its own, so the four are OmniStax's, one per
paragraph, since each paragraph carries one idea:

1. `hearing` **Hearing, the perception of sound** (book: the first
   paragraph, hearing defined against vision and the look ahead to
   ultrasound). Introduces `hearing`.
2. `sound` **Sound, a disturbance of matter transmitted outward** (book: the
   second paragraph, the physical definition, sound as a wave that is far
   more ordered than thermal motion and often periodic with the atoms in
   simple harmonic motion). Introduces `sound`; uses `periodic-motion`,
   `simple-harmonic-motion` and `thermal-energy`.
3. `pressure-wave` **Compressions and rarefactions from a vibrating string**
   (book: the third paragraph with Figures 17.3, 17.4 and 17.5, folded into
   one moving figure placed where the book places the three). Introduces
   `sound-longitudinal-pressure-wave`; uses `pressure`, `gauge-pressure`,
   `frequency` and `amplitude`.
4. `fading` **Why the amplitude of a sound wave decreases with distance**
   (book: the fourth paragraph with Figure 17.6, the eardrum). Reinforces
   `sound-longitudinal-pressure-wave`; uses `hearing`, `force-from-pressure`,
   `viscosity` and `second-law-heat-flow-direction`. The chapter's three
   variables of this section, $\kPr$, $A$ and $\kF$, anchor here, since the
   eardrum figure is the only place the section writes them.

The cross reference to Introduction to the Second Law of Thermodynamics:
Heat Engines and Their Efficiency is the book's words as plain text. The
prose carries no math at all; $\kF = \kPr A$ is written only on the figure.

Learning objectives, section summary and glossary come out of the running
text into the views. The section prints no Check Your Understanding box,
conceptual question, problem or AP item, so the Exercises document is empty
and nothing is inline; the three nodes have no book exercise, and no
question is generated (config).

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| hearing | idea | hearing | the glossary; the first paragraph |
| sound | idea | sound | the glossary; the second paragraph and the summary; Figure 17.2 |
| sound-longitudinal-pressure-wave | idea | pressure-wave | the third paragraph, Figures 17.3 to 17.5; the fourth paragraph and Figure 17.6 |

## Figures

id · replaces · concepts · value add · motion · sliders · headline · graph · 3D

1. `fig-shattered-glass` · Figure 17.2, the glass shattered by sound ·
   `sound` · **keep**, as a photograph. It stands at the head of the section
   and the text never points at it, which the chapter config says is the
   mark of a splash image; it is kept because its caption is the section's
   one demonstration of the second paragraph's claim, that sound is a
   physical disturbance whose effects are real whether or not anyone hears
   it (the fallen tree of the introduction is the same argument in words),
   and the `sound` concept row already names it as evidence. Width 200, as
   the book prints it. Caption and credit kept.
2. `sim-string` · replaces Figure 17.3 + 17.4 + 17.5, the vibrating string
   drawn three times and its pressure graph · `sound-longitudinal-pressure-wave`,
   `sound` · value add: flow by animation (the compressions leave the string
   and move outward, which the reader would otherwise have to imagine from
   three stills), intuition (the air is a field of ink dots whose packing is
   the pressure, and the gauge-pressure graph beneath draws the same thing
   as a curve, so the reader sees a compression and its peak line up),
   variation by slider · **moves**: the string starts from rest at $\kt = 0$
   and the run is one crossing of the scene by the wave front, 3.0 m at 343
   m/s, so the three book figures are three moments of one run, the first
   half-swing of 17.3, the return of 17.4 and the trail of compressions of
   17.5; a finite period, so the transport carries the scrubber and the
   reader can stop at any of the three · frequency of the string $\kf$ (200
   to 1,000 Hz, default 440 Hz, frequency), pressure amplitude $\kdpamp$
   (0.2 to 2.0 Pa, default 1.0 Pa, pressure; the string's own swing is drawn
   in proportion and stays in ink) · "The string moves to the right and
   compresses the air in front of it while the air behind it is rarefied",
   then "The string moves back to the left and makes another compression
   and rarefaction while the first ones move away", then "After 3.9
   vibrations the compressions and rarefactions are moving out from the
   string as a sound wave" · graph below, horizontal scene: gauge pressure
   against distance from the string, the pressure axis fixed at ±2 Pa (the
   slider's maximum, so the default fills half of it) and the distance axis
   the scene's 3.0 m, with the wavelength bracketed between two compressions
   in the position hue · 2D. Readout: $\kf_{\text{wave}} = \kf_{\text{string}}$
   with the number and the spacing of the compressions $\klam$; small line
   on the ±$\kdpamp$ swing against atmospheric pressure, which makes the
   caption's "only slightly" a number. The air's crowding is drawn far
   larger than it is (rule 28.4), and the small line says so. Labels: the
   frame only (string, air, the wave front's arrow, the bracket), since a
   compression is told by packing and the graph; nothing needs a Labels
   button. Draws frequency, pressure, position.
3. `sim-eardrum` · replaces Figure 17.6, the ear and the eardrum · 
   `sound-longitudinal-pressure-wave`, `hearing`, `force-from-pressure` ·
   value add: flow by animation (the book draws both force arrows at once
   and the reader must imagine the drum vibrating; here the compressions
   travel up the canal, the drum bows in as each arrives and out as each
   rarefaction follows, and the one force arrow flips with the sign of the
   gauge pressure), variation by slider · **moves**: a steady wave arriving
   at a steady rate is an endless cycle, so the transport carries play, stop
   and speed and no scrubber · pressure amplitude $\kdpamp$ (0.2 to 2.0 Pa,
   default 1.0 Pa, pressure), area of the eardrum $A$ (0.30 to 1.00 cm²,
   default 0.50 cm², untyped, ink) · "A compression has reached the eardrum
   and pushes it inward with a net force of 5.0 × 10⁻⁵ N" alternating with
   "A rarefaction has reached the eardrum and the atmospheric pressure
   behind it pushes it outward with a net force of 5.0 × 10⁻⁵ N" · none: the
   ear is the picture · 2D. Readout: $\kF = \kPr A$ with the live gauge
   pressure and area; small line on the pressure behind the drum being
   atmospheric, which is why the net force reverses. The wavefronts are
   drawn as the book draws them, ink arcs solid for a compression and dashed
   for a rarefaction, at a schematic spacing that the readout does not
   claim as a wavelength. Labels on: eardrum, ear canal, compression,
   rarefaction, four in all, fixed to things that do not move except the
   drum's, which moves with it. Draws pressure, force.

No figure serves an exercise, since there are none. The PhET note is left
out and named in `notes`.

Extra simulations (rule 15), considered and left:

- The heat transfer between a compression and its neighbouring rarefaction
  (the fourth paragraph): a real view the text gives only in words, but the
  book gives no rate to be faithful to and the picture would be invented.
  Left.
- Transverse against longitudinal waves side by side (the parenthesis on
  fluids having no shear strength): 16.9's matter, not built in this wave.
  Left.

None built.

## Exercises

None. The section prints no Check Your Understanding box, no conceptual
question, no problem and no AP test prep item, and nothing was held for it
or taken from it. No question is generated for its three nodes (config).

## Views

- Formulas: none; the chapter's equations table has no row for 17.1.
- Definitions: the three variables of the section ($\kPr$, $A$, $\kF$); the
  two glossary terms.
- Concept map: the three nodes above with their edges into 11.3, 11.6,
  12.4, 13.4, 15.3, 16.2 and 16.3.

## Colour

The page binds pressure, frequency, position and force: the string sim
carries $\kf$ and $\kdpamp$ on its sliders, colours the gauge-pressure axis
and the amplitude readout in the pressure hue and brackets the wavelength
and the distance axis in the position hue; the eardrum sim carries
$\kdpamp$ and draws the net force $\kF = \kPr A$ in the force hue. The
eardrum's area, the string, the air and its dots, the wavefront arcs, the
time in the headline and the atmospheric pressure in the small line stay
in ink. The chapter's colour plan expected pressure, position and force of
this page; frequency is bound as well because the string's frequency is the
one thing the third paragraph says the wave inherits, and a slider on it is
the figure's point.

## Wanted at chapter level

- variables `P_press` → 17.1-fading
- variables `A` → 17.1-fading
- variables `F` → 17.1-fading
- Nothing else: no equation row belongs to 17.1, the three concept rows and
  the two glossary rows stand as staged, and no symbol row is changed.


## Applied by the chapter pass (2026-09-14)

The three variable rows are anchored at `17.1-fading`, where the eardrum's
$\kF = \kPr A$ is stated and its figure stands. No equation row belongs to
the section, the three concept rows and the two glossary rows stand as
staged, and no symbol row was changed. The page binds frequency as well as
pressure, position and force, because the string's frequency is a slider
and a readout, and `COLOR.md` now records it. Keeping the shattered glass
(Figure 17.2), which the chapter's config had listed as a splash image to
drop, stands on the argument this plan makes, and `config.md` records the
change.

## Figure pass (2026-09-15, Claude Fable 5.1)

`sim-eardrum`: the head in section is redrawn so the pinna reads as an ear,
a helix curling out from the side of the skull, an inner rim, the bowl that
leads into the canal and a lobe, with the jaw and neck running on below; the
middle-ear bones are heavier with their joints marked; the pinna and cochlea
are named, and hover names cover the pinna, canal, eardrum, bones and
cochlea (rule 26.6). The live pressure and canal labels sit on panels so the
type hues are not read against the skin's fill. `sim-string` is unchanged.
