# Plan: 16.10 Superposition and Interference (m42249)

Source: `source.md`, converted from CNXML. Written 2026-09-14 in the wave
that builds 16.7 to 16.11; under the chapter's dated config block the plan
is left for review rather than waited on, and the page is built from it.

The section adds waves together. It opens on the rule that disturbances
add, draws the two pure cases and one mixed one, turns two waves running
the opposite way into a standing wave, counts the harmonics of a string,
and closes on beats. Eight book figures: one photograph and seven
drawings, of which five are graphs of one or two waves and their sum.

## Sub-concepts (page headers)

The book has two headers of its own, "Standing Waves" and "Beats", and an
untitled opening. Three spans, which is the book's own division:

1. **Superposition and interference** (`superposition`): the opening
   paragraphs, the river photograph, the rule that amplitudes add, pure
   constructive and pure destructive interference, the stereo that is loud
   in one place and quiet in another, and the superposition of two
   dissimilar waves.
2. **Standing Waves** (`standing-waves`, the book's header): two identical
   waves moving in opposite directions, the glass of milk, the earthquake
   paragraph, nodes and antinodes, the fundamental and the overtones.
3. **Beats** (`beats`, the book's header): the warbling piano and the
   taxiing jet, the derivation from two cosines, the beat frequency, and
   the Making Career Connections box on piano tuners, kept verbatim.

Check Your Understanding 3, the room with dull and loud corners, tests
interference and is placed inline after span 1. Check Your Understanding 1
(the jump rope shaken from both ends) and 2 (define nodes and antinodes)
are placed inline after span 2. Beats has no Check Your Understanding of
its own.

## Concept nodes

The eight nodes of this section were staged in the prep pass and are used
as they stand: `superposition`, `constructive-interference`,
`destructive-interference` (span 1); `standing-wave`,
`nodes-and-antinodes-on-a-string`, `string-harmonics` (span 2); `beats`,
`beat-frequency` (span 3). Nothing is added or renamed. The spans also use
16.9's `wave`, `wavelength`, `wave-velocity` and
`wave-speed-wavelength-frequency`, 16.3's `amplitude` and
`shm-kinematics`, 16.2's `frequency` and 16.8's `resonance`, each a
`uses` row of the coverage table.

## Figures

id · replaces · concepts · value add · moving or still · sliders and
choices · headline · graph · 3D

1. `sim-superposition` · Figure 16.33 + 16.34 + 16.35 (the two pure cases
   and the dissimilar pair) · superposition, constructive-interference,
   destructive-interference · variation by slider: the book prints three
   fixed pictures, and one phase knob walks the reader from crest on crest
   through crest on trough, while a second wavelength knob reaches the
   dissimilar pair, so the mixed superposition the text describes between
   the two pure cases is a state the reader can stop at · still: the idea
   is the sum at each point, not its travel, and a snapshot has no clock,
   so no transport (rule 14) · amplitude $X$ (0.2 to 1.0 m, default 0.5,
   position hue); the phase of the second wave (0° to 360°, default 0°,
   ink, soft detents at 0, 90, 180, 270 and 360); the wavelength of the
   second wave $\lambda_2$ (0.5 to 4.0 m, default 4.0, position hue, the
   same as the first wave's 4.0 m at the default) · "The two waves arrive
   exactly in phase, so the crests add: the resultant has twice the
   amplitude, 1.00 m, and the same wavelength", and at 180°, "The two
   waves arrive exactly out of phase, crest against trough, and cancel
   completely" · the graph is the scene: an upper panel carrying the two
   component waves and a lower panel carrying their sum · 2D.
2. `sim-standing-wave` · Figure 16.36 · standing-wave,
   nodes-and-antinodes-on-a-string · flow by animation: the book prints
   five frozen instants across one period and asks the reader to imagine
   the two waves sliding through each other, which is exactly the
   mental translation rule 24.3 names · moving, one full period a loop,
   because the standing wave has a clock: the two component waves travel
   and the resultant swells and vanishes at fixed places · amplitude $X$
   (0.2 to 1.0 m, default 0.5, position hue), wavelength $\lambda$ (1.0 to
   4.0 m, default 2.0, position hue), period $T$ (1.0 to 4.0 s, default
   2.0, time hue, and the loop takes it in real seconds) · "At $t = T/4$
   the two waves are exactly out of phase and the whole cord is
   momentarily flat" · upper panel the two travelling waves with their
   direction arrows, lower panel the resultant with its nodes and
   antinodes marked · 2D.
3. `sim-string-harmonics` · Figure 16.37 + 16.38 (the fundamental, and the
   first and second overtones) · nodes-and-antinodes-on-a-string,
   string-harmonics · variation by choice and flow by animation: the book
   draws three strings side by side, and one string that the reader
   switches between harmonics shows that the nodes and the loops are the
   same cord at three frequencies; the loops also move, which is what the
   word standing means · moving, one period a loop · the harmonic is a
   choice, not a slider (rule 26.1): fundamental, first overtone, second
   overtone; the string's length $L$ (0.5 to 2.0 m, default 1.0, ink) and
   the propagation speed $v_\text{w}$ (50 to 500 m/s, default 200,
   velocity hue) · "The fundamental has one loop, $\lambda_1 = 2L = 2.00$
   m and $f_1 = v_\text{w}/2L = 100$ Hz" · none, the string is the scene;
   the wavelength and the length are bracketed under it, and at the
   fundamental the dashed half of the wave beyond the far end is drawn as
   the book draws it · 2D.
4. `sim-beats` · Figure 16.39 · beats, beat-frequency · variation by
   slider and flow by animation: the book's figure is one pair of
   frequencies, and the reader who can set the two frequencies watches the
   beat frequency follow their difference and go to zero as they close,
   which is what a piano tuner listens for; a marker running along the
   resultant with a loudness bar beside it gives the swelling a clock ·
   moving, the marker sweeping the fixed two-second window in about five
   real seconds · $f_1$ (4.0 to 10.0 Hz, default 5.0, frequency hue),
   $f_2$ (4.0 to 10.0 Hz, default 7.0, frequency hue), amplitude $X$ (0.2
   to 1.0 m, default 0.5, position hue) · "The two frequencies differ by
   2.00 Hz, so the resultant swells and fades twice a second" · the graph
   is the scene: upper panel the two waves, lower panel the resultant
   inside its dashed envelope, with one beat period bracketed · 2D.

Axis ranges are fixed per figure and never rescaled: sims 1 and 2 run
$x$ from −8 m to +8 m and the displacement from −2.0 m to +2.0 m, which
covers twice the largest amplitude the sliders allow; sim 4 runs $t$ from
0 to 2.00 s and the displacement from −2.0 m to +2.0 m for the same
reason.

Labels are on in all four (rule 26.6): each figure names at most six
things — the two component waves in a legend, the resultant, the
wavelength and the period brackets, and, in sim 3, the nodes and the
antinodes — and none of them collide at any slider extreme.

Photographs: one, kept.

- **Figure 16.32, the river's surface** (credit: waterborough, Wikimedia
  Commons): **keep**, at 300 px. The text points the reader straight at
  it in its first sentence, "They look more like the waves in Figure
  16.32 than like the simple water wave considered in Waves", and the
  complex pattern it shows is the thing the section explains.

The one unnumbered image, the two wave generators with their compressions
and rarefactions inside the third AP item, travels on that exercise card's
own `figure` field, the route the chapter's config picked. No `figure`
row and no bare "Figure" eyebrow on this page.

Extra simulations (rule 15): three were considered and none survives.
Two speakers in a room with the loud and quiet places shaded would open a
second dimension the section never writes an equation for, and 16.11
draws the field between two speakers already; a piano tuner's fork and
string is sim 4 with two of its sliders locked; a glass of milk on a
refrigerator is sim 2 with a photograph behind it.

## Exercises

- 3 Check Your Understanding, open, with the book's answers: the stereo
  room inline after span 1, the jump rope and the definitions of node and
  antinode inline after span 2.
- 1 conceptual question, the two speakers wired in opposite senses, open,
  with an AI-marked suggested approach.
- 7 AP test prep items. Keyed and kept: the two sine waves 180° apart,
  a graded choice keyed (c) zero. Answered in words by the book and kept
  open: explain superposition with figures; the string snapped from both
  ends. Unkeyed and kept as open items with an AI-marked suggested
  approach: the guitar string's natural frequencies and the compressions
  and rarefactions, each with its four options printed as the book prints
  them rather than as a graded choice, the second carrying its image on
  the card; the amplitude of the string snapped up at one end and down at
  the other; and what nodes and antinodes are and how they are produced.
- 6 problems. Keyed and kept: 1 (two horns, 4 Hz), 3 (two tuning forks,
  462 Hz and 4 Hz), 5 (the Slinky, 3.33 m/s and 1.25 Hz). Unkeyed and
  left out: 2 (the middle-C hammer), 4 (the twin jet engines), 6 (three
  adjacent piano keys).
- No generated questions: every node has a book exercise.

## Views

- Formulas: the eight equation rows the prep pass wrote for this section
  are used as they stand, `eq-superposition-sum`, `eq-wave-at-a-point`,
  `eq-two-waves-sum`, `eq-beats-product`, `eq-beat-frequency`,
  `eq-fundamental-wavelength`, `eq-string-fundamental` and
  `eq-string-overtones`.
- Definitions: the sixteen variable rows of the section and its eight
  glossary terms, all written in the prep pass.
- Concept map: the eight nodes above with the edges the prep pass staged.

## Colour

The page binds four types, which is what `ch16/COLOR.md` expects of it:
`position` ($x$, $x_1$, $x_2$, $X$, $\lambda$, $\lambda_1$, $\lambda_2$),
`time` ($T$ and the time axis of the beats graph), `frequency` ($f_1$,
$f_2$, $f_3$, $f_\text{B}$, $f_\text{ave}$) and `velocity` ($v_\text{w}$
in the harmonic readout). The string's length $L$, the harmonic number,
the phase of the second wave and every count stay in ink. Two waves that
add are instances with no type of their own and are drawn in the
categorical palette with a legend, as the chapter's `COLOR.md` settles;
the resultant, which is the displacement the section teaches, wears the
position hue, and a node and an antinode are places on it and are marked
in ink. No new type and no new symbol row.

## Wanted at chapter level

- eq-superposition-sum → 16.10-superposition
- eq-wave-at-a-point → 16.10-beats
- eq-two-waves-sum → 16.10-beats
- eq-beats-product → 16.10-beats
- eq-beat-frequency → 16.10-beats
- eq-fundamental-wavelength → 16.10-standing-waves
- eq-string-fundamental → 16.10-standing-waves
- eq-string-overtones → 16.10-standing-waves
- No concept or symbol fix: the eight concepts, the sixteen variables, the
  eight glossary terms and the eight equations the prep pass staged are
  used exactly as they stand.
- `$…$` inside a `data-original-caption` attribute breaks the tag and the
  validator passes it, so this page writes the symbols of its caption
  attributes as plain text (λ₁, f₁); the chapter pass should record it in
  `config.md` as an app gap, as two other builders have asked.

**The chapter pass, 2026-09-14.** The eight equation anchors are written, and
so is one on each of the sixteen variable rows, on `16.10-superposition`,
`16.10-standing-waves` or `16.10-beats` by where the text introduces each.
The caption-attribute finding is recorded in `config.md` as an app gap,
and every caption attribute of the five sections was checked for a dollar
sign; none carries one.
