# Plan: 17.3 Sound Intensity and Sound Level (m42257)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's instruction to finish the book in waves;
the per-section stop of rule 2, the plan review of rule 5 and the user picks
of rule 15 are replaced by this file, written before the section was built
and left for review after, as `ch17/config.md` records.

The section that puts a number on loudness. It defines intensity as the
power a wave carries per unit area, relates it to the square of the pressure
amplitude, and then, because the ear responds to the logarithm of the
intensity, defines the sound intensity level in decibels against the
threshold of hearing. Two tables (17.2, the familiar sounds from 0 to 160 dB;
17.3, the ratios 2, 5 and 10 against 3, 7 and 10 dB), one sketch figure
(17.12, the two birds and their gauge-pressure graphs), one splash photograph
(17.11, the Delhi traffic), two worked examples, one boxed Take-Home
Investigation, three glossary terms, two Check Your Understanding boxes, two
AP items, two conceptual questions and eighteen problems of which nine are
keyed. One page (rule 11).

## Sub-concepts (page headers)

The module prints no header of its own, so all seven are the agent's (rule 3).

1. `intensity` **Intensity: the power a sound carries across an area** (book:
   the opening paragraph on the quiet forest and the passing motorist; the
   paragraph that defines intensity and carries $I = P/A$). The variables
   $\kIntens$, $\kP$ and $A$ and `eq-intensity` anchor here.
2. `pressure-amplitude` **Intensity and the pressure amplitude** (book: the
   equation $I = (\Delta p)^2/2\rho v_\text{w}$ and its paragraph on the
   pressure amplitude, the density and the speed of sound; Figure 17.12). The
   variables $\kdpamp$, $\krho$ and $\kvw$ and `eq-intensity-pressure-amplitude`
   anchor here. The first Check Your Understanding, on amplitude and
   loudness, is set inline after it.
3. `decibels` **The sound intensity level in decibels** (book: the paragraph
   on why decibels are the unit of choice and the definition of $\beta$;
   Table 17.2). The variables $\beta$ and $\kIo$ and `eq-sound-intensity-level`
   anchor here. The second Check Your Understanding, on common sounds at 10,
   50 and 100 dB, is set inline after it.
4. `threshold` **The threshold of hearing and the range of intensities**
   (book: the paragraph that puts the threshold at 0 dB; the two paragraphs
   that begin "One of the more striking things" and "Another impressive
   feature").
5. `ratios` **Ratios of intensities and differences in level** (book: the
   paragraph beginning "One more observation"; Table 17.3; Example 17.2,
   Calculating Sound Intensity Levels: Sound Waves; Example 17.3, Change
   Intensity Levels of a Sound). The examples are `ex-sound-waves` and
   `ex-twice-as-intense`. The variables $\kIone$ and $\kItwo$ and
   `eq-sound-level-difference` and `eq-log-of-ratio` anchor here.
6. `pressure-level` **The sound pressure level** (book: the paragraph on the
   other decibel scale; the boxed Take-Home Investigation: Feeling Sound).
7. `many-sources` **Many sources sounding together** (a short closing block
   in the book's voice, as 9.2's closing block is, carrying the one Sim the
   section's problems on the thousand flies and the ten stereos need and the
   book never draws; see the extra simulations below).

The book gives its two examples no number in the CNXML; the publisher prints
them as Examples 17.2 and 17.3, and the page follows that. The book's own
slips are kept verbatim and named in `notes`: the misplaced square on the
intensity formula in Example 17.2's strategy, where the book also writes
$pv_\text{w}$ for $\rho v_\text{w}$, and in the paragraph before Table 17.3.
Cross references are plain text; this section names none outside itself.
Learning objectives, the section summary and the three glossary terms come
out of the running text into the tables and the views (rule 4).

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| sound-intensity | result, eq-intensity | intensity | the definition; the eardrum's 10⁻¹⁶ W; the problems on the eardrum, the ear trumpet, the stethoscope, the loudspeaker |
| intensity-and-pressure-amplitude | result, eq-intensity-pressure-amplitude | pressure-amplitude | Figure 17.12; Example 17.2; the first Check Your Understanding; the keyed AP item on the alarm; the problems on 0.5 Pa and on the amplitude's factor of 100 |
| sound-intensity-level | result, eq-sound-intensity-level | decibels | the definition, Table 17.2, Example 17.2's 87 dB, the second Check Your Understanding; the problems on 85.0 dB, the lawn mower, the earphones, −8.00 dB |
| threshold-of-hearing | idea | threshold | the 0 dB paragraph and the two observations after Table 17.2; the problems on 10⁻¹⁶ W/cm² and the 10⁻⁹ atm gauge pressure |
| decibel-ratios | result, eq-sound-level-difference | ratios | Table 17.3; Example 17.3; the mayor's 30 dB; the problems on twice and one-fifth a 90.0 dB sound, 7.00 dB lower and 3.00 dB higher, 17.0 and 23.0 dB apart |
| combining-sound-sources | skill | many-sources | the housefly and its thousand companions; the ten cars at the boom box competition |
| sound-pressure-level | idea | pressure-level | the paragraph after Example 17.3 and its glossary entry |

The section leans on `power` and `energy-from-power` (7.7), `gauge-pressure`
and `density` (11.x), `amplitude` (16.3), `order-of-magnitude` (1.2),
`sound` and `sound-longitudinal-pressure-wave` (17.1) and
`speed-of-sound-in-media` (17.2); the coverage rows mark each as used where
the text uses it. Nothing points at 16.11, Energy in Waves: Intensity,
which is not built.

## Figures

id · replaces or Sim · concepts · value add · what moves or still · sliders ·
headline · graph · 3D

1. `sim-pressure-amplitude` · replaces Figure 17.12, the two birds and their
   gauge-pressure graphs · intensity-and-pressure-amplitude, sound-intensity ·
   **variation by slider and intuition**: the book draws two amplitudes and
   asks the reader to imagine the square between them; here one slider on
   $\kdpamp$ runs the amplitude from nothing to 2.00 Pa and the reader watches
   the intensity bar grow as the square while the air's packing above the
   graph tightens · **still**: the graph is a snapshot of gauge pressure
   against position, which is how the book draws it, and the idea is the
   amplitude and not the travel of the wave, so the figure answers its slider
   and registers no cycle (rule 14; `ch17/config.md` lists the pressure
   graphs of 17.12 among the stills) · $\kdpamp$ (0 to 2.00 Pa, default
   0.656, pressure, which is Example 17.2's wave; a soft detent at 0.656 and
   at 0.5, the problem's wave); the medium is air at 0 °C throughout, as in
   the example, since a choice between the book's two air temperatures moves
   the intensity by four percent and would not be readable (rule 24.6) ·
   "A pressure amplitude of 0.656 Pa in air at 0 °C carries 5.04 × 10⁻⁴ W/m²."
   · the gauge-pressure graph is the scene, drawn below a strip of air dots
   whose packing follows the pressure and beside a bar of intensity on a
   fixed axis of 0 to 5.0 × 10⁻³ W/m² · 2D. Readout:
   $\kIntens = (\kdpamp)^2/2\krho\kvw$ with the live numbers; small line on
   the square: doubling the amplitude makes four times the intensity. A
   loudspeaker in ink stands at the left as the source; the book's birds are
   not redrawn. Draws pressure, intensity, density and velocity (the readout
   states $\rho$ and $v_\text{w}$ with their macros). Labels: the frame only;
   the dots are the air and are named in the caption.
2. `sim-decibel-ladder` · Sim (Table 17.2 stays a table; the figure replaces
   nothing) · sound-intensity-level, threshold-of-hearing, decibel-ratios ·
   **intuition and variation**: the book says the ear is unaware of a range
   of 10¹² and that each 10 dB is a factor of ten, and the reader has to
   believe it from a table; here two ink sliders on $\beta_1$ and $\beta_2$
   move two marks on a ladder whose rungs are Table 17.2's sounds, the
   intensity axis in its hue beside the decibel scale in ink, and a linear
   panel beside the ladder draws the two intensities to one scale so the
   thousandfold difference between a conversation and a truck is seen as
   well as read · **still**: a level is a reading, not a motion; the figure
   answers its sliders and registers no cycle · $\beta_1$ (0 to 160 dB,
   default 60, ink) and $\beta_2$ (0 to 160 dB, default 90, ink), the book's
   own comparison of a 90 dB and a 60 dB sound · "A 90 dB sound is 30 dB
   above a 60 dB sound, so it is 10³ times, a thousand times, as intense." ·
   the ladder is the scene, vertical, so the linear bars sit beside it · 2D.
   Readout: $\beta_2 - \beta_1 = 10\log_{10}(\kItwo/\kIone)$ with the live
   numbers; small line giving each intensity from
   $\beta = 10\log_{10}(\kIntens/\kIo)$ and the rule of ten decibels to a
   factor of ten. Draws intensity. Labels: every rung of the ladder carries
   the table's example, seventeen short labels on a fixed frame that never
   move or collide, so they are on; the two marks are named by their
   sliders' colours in ink and by "β₁" and "β₂" beside them.
3. `sim-many-sources` · Sim · combining-sound-sources, decibel-ratios ·
   **variation and intuition**: the rule that intensities add and levels do
   not is nowhere drawn in the book, and two of its problems turn on it; the
   reader chooses how many identical sources sound together and watches the
   total intensity grow in proportion while the level rises by only
   $10\log_{10}N$ · **still**: the count of sources is a choice, and nothing
   in the scene has a clock · $\beta$ of one source (0 to 120 dB, default 40,
   ink, the housefly of the problem) and the count $N$ as a choice of 1, 2,
   5, 10, 100 and 1000 (rule 26.1: the count spans three decades, so a linear
   slider would put 1, 2 and 10 in the first hundredth of its track, and the
   six values are the ones Table 17.3 and the two problems use); the
   default $N = 1000$ reproduces the housefly problem, 40 dB each and 70 dB
   together, and $N = 10$ with $\beta$ set to 110 dB is the boom box circle ·
   "A thousand sources of 40 dB each make a sound of 70 dB, since their
   intensities add to a thousand times one." · a ring of sources around a
   listener above a horizontal ladder of intensity, the two marks and the
   bracket $10\log_{10}N$ between them · 2D. Readout:
   $\kIntens = N\kIntens_{\text{one}}$ and $\beta = 10\log_{10}(\kIntens/\kIo)$
   with the live numbers; small line saying that interference is neglected,
   as both problems say. Draws intensity. Labels: up to ten sources are drawn
   as loudspeakers on the ring and named once in a legend; a hundred or a
   thousand are drawn as a dense ring of ink marks with the count written
   beside it, and the listener is the library's person sprite.

Photographs: Figure 17.11, the road in Delhi, is the splash image at the head
of the section and is dropped, as `ch17/config.md` decided; the text does
not point at it. Figure 17.12's image is kept as the original of
`sim-pressure-amplitude`, at the book's width of 200. Nothing else is kept
or dropped.

Figures that serve exercises: the section prints none; no problem refers to
a figure.

Extra simulations (rule 15), thought through, judged and decided:

- **Many sources sounding together (`sim-many-sources`): built.** The
  concept table carries `combining-sound-sources`, the keyed problem on the
  thousand flies and the problem on the ten cars turn on it, and the book
  never states or draws the rule; the reader who has only the table of ratios
  cannot see why a thousand sources add 30 dB and not 1000 dB. The ring and
  the ladder give that view.
- The decibel ladder as a single mark with the linear bar alone. Left: the
  two-mark figure above contains it, and Example 17.3's ratio is the more
  useful default.
- A listener walking away from a source with the intensity falling as
  $1/r^2$. Left: the inverse square is 16.11's matter, which is not built
  and not pointed at, and this section does not state it.
- The eardrum's square centimetre and the 10⁻¹⁶ W that falls on it. Left:
  it is one multiplication the prose does in a sentence, and the problems on
  the eardrum, the ear trumpet and the stethoscope are set in the tab; a
  drawing of an eardrum belongs to 17.6.

## Exercises

- 2 Check Your Understanding boxes, inline and keyed by the book: `cyu1`
  (fs-id3022970, amplitude and loudness, Understand, after
  `pressure-amplitude`) and `cyu2` (fs-id1282140, common sounds at 10, 50 and
  100 dB, Remember, after `decibels`).
- 2 AP items, both the section's own: `ap1` (fs-id1373955, the alarm clock
  tripled, keyed (e), a graded choice, Apply) and `ap2` (fs-id1725922, the
  guitar string at twice the amplitude, no key, an open item with an
  AI-marked suggested approach, Understand).
- 2 conceptual questions, none keyed, each an open item with an AI-marked
  suggested approach: `cq1` (fs-id2023489, the synchronized swimmers and
  their earplugs, Analyze, citing `pressure-level`) and `cq2` (fs-id2010060,
  the mayor's 30 dB, Evaluate, citing `ratios`).
- 9 problems keyed and kept: `p1` (fs-id3387710, 85.0 dB to W/m²,
  3.16 × 10⁻⁴), `p3` (fs-id2450132, 0.5 Pa in 20 °C air, 3.04 × 10⁻⁴ W/m²),
  `p5` (fs-id1947000, earphones at 4.00 × 10⁻² W/m², 106 dB), `p7`
  (fs-id3028387, twice and one-fifth a 90.0 dB sound, 93 dB and 83 dB), `p9`
  (fs-id3076842, 17.0 dB higher and 23.0 dB lower, 50.1 and 5.01 × 10⁻³),
  `p11` (fs-id3017588, the thousand flies, 70.0 dB), `p13` (fs-id3356163,
  the amplitude's factor for 40.0 dB, 100), `p15` (fs-id2448344, the eardrum
  exposed for eight hours, 1.45 × 10⁻³ J) and `p17` (fs-id1382514, the
  stethoscope, 28.2 dB).
- 9 problems left out, having no answer in the book's key: the lawn mower's
  91.0 dB (fs-id1917720), the level of the 0.5 Pa wave (fs-id1011837),
  10⁻¹² W/m² as 10⁻¹⁶ W/cm² (fs-id3257384), 7.00 dB lower and 3.00 dB higher
  than 4.00 × 10⁻⁹ W/m² (fs-id1335022), the −8.00 dB sound (fs-id2514370),
  the ten cars at the boom box competition (fs-id2626138), the gauge
  pressures of a 60 dB and a 120 dB sound (fs-id2451889), the ear trumpet
  (fs-id2612930) and the loudspeaker's power input (fs-id3291429). The ten
  cars are a loss, since they are the second problem `sim-many-sources`
  serves; they are named in `notes` and `exercise_notes`.
- Nothing is taken from another section and nothing of this section's own
  is held back; 17.7's three decibel problems stay in 17.7 and tag
  `sound-intensity-level` from there (`ch17/config.md`).
- No generated questions: every node of the section has a book exercise that
  tests it except `sound-pressure-level`, which the first conceptual question
  touches, and `threshold-of-hearing`, which `p1`, `p5` and `cyu2` use through
  $I_0$ and Table 17.2.
- Weights: `ap1` gives `intensity-and-pressure-amplitude` its full value and
  `sound-intensity` 2; `p3` the same pair; `p5` and `p1` give
  `sound-intensity-level` the full value and `threshold-of-hearing` 2; `p7`
  and `p9` give `decibel-ratios` the full value and `sound-intensity-level`
  2; `p11` gives `combining-sound-sources` the full value and
  `decibel-ratios` 3; `p13` gives `intensity-and-pressure-amplitude` the full
  value and `decibel-ratios` 3; `p15` gives `sound-intensity` the full value
  and `sound-intensity-level` 3; `p17` gives `sound-intensity` the full value
  and `decibel-ratios` 3; `cq1` gives `sound-pressure-level` the full value
  and `intensity-and-pressure-amplitude` 2; `cq2` gives `decibel-ratios` the
  full value and `sound-intensity-level` 2.

## Views

- Formulas: the five equations of the section already in `chapter.json`,
  four important (`eq-intensity`, `eq-intensity-pressure-amplitude`,
  `eq-sound-intensity-level`, `eq-sound-level-difference`) and the property
  of logarithms not.
- Definitions: the ten variables of the section, and three glossary terms,
  intensity, sound intensity level and sound pressure level.
- Concept map: the seven nodes above with their edges into Chapters 7, 11,
  16 and 17.

## Colour

The page binds intensity, pressure, density and velocity. `sim-pressure-amplitude`
carries the pressure amplitude on its slider and its axis, draws the intensity
as a bar and states $\rho$ and $v_\text{w}$ with their macros in its readout;
`sim-decibel-ladder` and `sim-many-sources` draw only intensity, the decibel
scale, the sliders on $\beta$, the count $N$ and every label being ink, as
`ch17/COLOR.md` decides: the level is a way of reading the intensity, and
only the bar is the physics. Power is not bound, since no figure draws
$I = P/A$; $\kP$ appears in the prose and the readout writes no power. The
air is ink dots whose packing is the pressure, never a tint.

## Wanted at chapter level

- variables `I_intens` → 17.3-intensity
- variables `P` → 17.3-intensity
- variables `A` → 17.3-intensity
- variables `Δp_press` → 17.3-pressure-amplitude
- variables `ρ_dens` → 17.3-pressure-amplitude
- variables `v_w` → 17.3-pressure-amplitude
- variables `β_dB` → 17.3-decibels
- variables `I_0` → 17.3-decibels
- variables `I_1` → 17.3-ratios
- variables `I_2` → 17.3-ratios
- equations `eq-intensity` → 17.3-intensity
- equations `eq-intensity-pressure-amplitude` → 17.3-pressure-amplitude
- equations `eq-sound-intensity-level` → 17.3-decibels
- equations `eq-sound-level-difference` → 17.3-ratios
- equations `eq-log-of-ratio` → 17.3-ratios
- concepts `combining-sound-sources`: its `evidence` may add "and the Sim of many sources sounding together"; nothing else is wanted.


## Applied by the chapter pass (2026-09-14)

The ten variable rows and the five equation rows carry the anchors this
plan names. `combining-sound-sources` now names the Sim of many sources
sounding together in its `evidence`, as this plan asked. The page binds
intensity, pressure, density and velocity; it does not bind power, since
the figure that states $I = P/A$ writes the power in ink, and `COLOR.md`
records that. The book's two misprinted forms of the intensity formula are
kept as printed, and the figure reference in the paragraph on the screaming
cartoon, which points at Figure 17.12, is the book's own and is kept;
`exploration.md` carries both under its errata.
