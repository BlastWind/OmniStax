# Exploration: College Physics 2e, Chapter 16 Oscillatory Motion and Waves

Written before converting the chapter (2026-09-07). Source of record is the
CNXML bundle (`source/osbooks-college-physics-bundle`), not the PDF.
The book's organisation (book → chapters → sections → untitled narrative
headers, one CNXML module per section, apparatus inside the module) is as
recorded in `ch02/exploration.md`; nothing differs here.

## Why this chapter

Chosen over the other 33 by asking, for each chapter, whether a live
figure shows something a printed one cannot. Four criteria:

1. Time is the content. Oscillation, wave travel, beats and resonance
   build-up exist only as motion; the book draws them as five frozen
   instants or a sine curve, and asks the reader to imagine the rest.
2. One slider changes the kind of thing seen, not just its size: damping
   from ringing to creeping, drive frequency swept across resonance, a
   string's harmonic number, two frequencies pulled apart into beats.
3. Reach. Sound (17), AC circuits (23), electromagnetic waves (24), wave
   optics (27) and quantum physics (29) all lean on this chapter.
4. Fit with the figure idiom already built: a mass on a spring on a strip
   with x, v and a graphs below it is the chapter's own Figure 16.10 in
   the 2.5 template, and the t, x, v, a colours carry over unchanged.

Nine of the eleven numbered sections meet criterion 1 (16.2 and 16.11 are
the exceptions). Runner-up was Chapter 3 (projectile motion and relative
velocity are excellent sims, but 3.2 and 3.3 are vector arithmetic);
then Chapter 25 (lens and mirror ray diagrams, which the static figures
already carry well) and Chapter 6 (only 6.5 and 6.6 are orbital).

## Chapter 16 modules

PDF pages 703 to 752; the chapter's glossary, summary, conceptual
questions and problems are aggregated at pp. 743 to 752 in the PDF but
sit inside each module in CNXML. Figures counted include sub-figures and
exercise figures. CYU = Check Your Understanding, AP = AP test prep,
CQ = conceptual questions, Sol = problems with an inline solution.

| Section | Module | PDF | Ex. | Fig. | Eq. | Defs | CYU | AP | CQ | Prob. | Sol. |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m42239 | 703 | 0 | 1 photo | 0 | 2 | 0 | 0 | 0 | 0 | 0 |
| 16.1 Hooke's Law: Stress and Strain Revisited | m42240 | 704–708 | 2 | 6 | 9 | 4 | 3 | 4 | 0 | 6 | 9 |
| 16.2 Period and Frequency in Oscillations | m42241 | 709 | 1 | 1 | 8 | 3 | 1 | 1 | 0 | 6 | 8 |
| 16.3 Simple Harmonic Motion | m42242 | 710–714 | 1 | 8 | 8 | 3 | 3 | 4 | 6 | 8 | 10 |
| 16.4 The Simple Pendulum | m42243 | 715–716 | 1 | 1 | 11 | 1 | 1 | 3 | 1 | 13 | 11 |
| 16.5 Energy and the Simple Harmonic Oscillator | m42244 | 717–719 | 1 | 1 | 17 | 0 | 2 | 1 | 1 | 2 | 5 |
| 16.6 Uniform Circular Motion and SHM | m42245 | 720–722 | 0 | 4 | 9 | 0 | 1 | 1 | 0 | 4 | 4 |
| 16.7 Damped Harmonic Motion | m42246 | 723–726 | 1 | 4 | 9 | 3 | 2 | 3 | 3 | 1 | 5 |
| 16.8 Forced Oscillations and Resonance | m42247 | 727–729 | 0 | 4 | 0 | 3 | 1 | 1 | 1 | 5 | 5 |
| 16.9 Waves | m42248 | 730–732 | 1 | 7 | 8 | 4 | 1 | 5 | 2 | 10 | 11 |
| 16.10 Superposition and Interference | m42249 | 733–738 | 0 | 9 | 6 | 8 | 3 | 7 | 1 | 6 | 13 |
| 16.11 Energy in Waves: Intensity | m42250 | 739–742 | 2 | 2 | 16 | 1 | 1 | 0 | 2 | 9 | 6 |

Two exercises carry no type attribute (16.1 "describe a system in which
elastic potential energy is stored", which sits under Conceptual
Questions; 16.3 the mass-and-period question). Each is classed by the
header it sits under. The CYU column counts `check-understanding`
exercises only.

## Figures

48 in all. By what they are:

- **Photographs, 12, each kept or dropped in the section plan** (kept when it serves the narrative and the text, dropped when it is decoration): the intro splash, the guitar strings
  (16.2), the child's toy and the skydivers (16.3), the merry-go-round
  (16.6), the swing (16.7), the piano and the Tacoma Narrows bridge
  (16.8), the ocean (16.9), the water-surface pattern (16.10), the
  earthquake damage (16.11). The Tacoma Narrows photograph is the one
  that clearly serves the text (a real resonance failure) and is kept
  with its credit line; the car beside Example 16.1 is the kind that is
  dropped.
- **Sketches and graphs, 31, each replaced by a sim:** the displaced
  ruler and its restoring force (16.1), F against x with the stored-energy
  area (16.1, twice), the toy-gun spring (16.1), the car on its springs (16.1, 16.3), the spring
  oscillator (16.3), the bouncing car and the paper strip recording a sine
  curve (16.3), the x(t), v(t), a(t) triple (16.3), the pendulum (16.4),
  the energy transformation strip (16.5, repeated in 16.7), the shadow of
  a ball on a turntable, the point on the circle and its projection graph
  (16.6), the underdamped, critical and overdamped curves (16.7), the
  paddle ball and the resonance curves (16.8), the gull on the wave, the
  transverse and longitudinal cords, the string and the sheet of paper
  (16.9), constructive, destructive and mixed interference, the standing
  wave, the fundamental and overtones, beats (16.10), the two speakers
  (16.11).
- **Figures that serve exercises, 5, copied faithfully:** the pendulum
  and spring images (16.3 AP items),
  the wave image and the seismograph trace (16.9 AP and problem), the
  rarefaction image (16.10 AP item).

## Observations that affect the plan

- The chapter is planar. Every figure is a strip, a graph or a circle; no
  3D is expected anywhere, which is cheaper than 2.5.
- New drawing vocabulary: a spring, a block, a pendulum bob on a string, a
  cord carrying a wave, energy bars. Two new archetypes beyond the seven
  recorded in the figure prompt: a circle beside a strip with a projection
  line (16.6), and a curve on a strip that travels (16.9, 16.10).
- The 2.5 idiom "loop 0..T with a hold" fits the damped and driven sims
  (finite motions, which get the scrubber) but not the steady oscillations
  and travelling waves, which are infinite and should run as a continuous
  cycle with the plain transport. Both already exist in the library.
- Colour: t, x, v, a carry over exactly. The chapter adds force (F, k),
  energy (PE, KE, E) and the periodic quantities T, f, ω, A, λ. The
  proposed assignment is in `config.md`.
- External prerequisites, all from chapters not built yet: Newton's second
  law (4.3), Hooke's law and elastic deformation (5.3), kinetic energy,
  potential energy and conservation of energy (7.2, 7.3, 7.6), g (2.7),
  angular velocity and uniform circular motion (6.1). They become
  placeholder nodes that open the OpenStax page, the mechanism 2.5 used
  for 2.1, 2.3 and 2.4. Velocity and acceleration resolve to the real 2.3
  and 2.4 nodes when those are built.
- 16.2 is one page: period, frequency, f = 1/T, one example. It stays its
  own page (rule 11).
- 16.8 has no equations. Resonance is taught qualitatively, so the sim
  (a driven oscillator with the drive frequency on a slider) carries the
  section.
- 16.10 is the heaviest section: eight definitions, three sub-ideas
  (superposition, standing waves, beats), 13 solved problems. It will
  need the most sub-concept splitting.
- Two "Take-Home Experiment" boxes (16.3) and one (16.9) are prose
  instructions for the reader; they are kept verbatim as boxed notes.
- No PhET callouts in this chapter.
- Solutions are inline in the exercise element for roughly every second
  problem, as in Chapter 2; the same answer-key rule applies.

## Defaults the agent intends to use

Listed as the config list in `config.md`, to be confirmed before the
per-section loop starts.

## The remainder, 16.7 to 16.11 (prep pass, 2026-09-14)

Written after reading the five modules in full, for the wave that builds
them in parallel (one agent per section, plan file in place of the stop).
The table above was made before the numbering on openstax.org was checked;
this section supersedes it for the five. Figures counted here are the
numbered figures of the narrative, with the unnumbered images inside
exercises noted separately. The equation column counts the `{eq:…}`
markers the converter writes, most of which are substitution steps of a
worked example rather than results.

| Section | Module | Ex. | Fig. | Eq. | Defs | CYU | AP | CQ | Prob. | Sol. | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 16.7 Damped Harmonic Motion | m42246 | 1 (Example 16.7) | 4 (1 photo, 2 graphs, 1 strip inside the example) | 9 | 3 | 2 | 3 (2 keyed) | 3 | 1 | 0 | none |
| 16.8 Forced Oscillations and Resonance | m42247 | 0 | 4 (2 photos, 1 drawing, 1 graph) | 0 | 3 | 1 | 1 (unkeyed) | 1 | 5 | 3 | none |
| 16.9 Waves | m42248 | 1 (Example 16.8) | 5 (2 photos, 3 drawings) + 2 unnumbered in exercises | 8 | 4 | 1 | 5 (3 keyed) | 2 | 10 | 5 | Misconception Alert, Take-Home Experiment, PhET |
| 16.10 Superposition and Interference | m42249 | 0 | 8 (1 photo, 7 graphs) + 1 unnumbered in an AP item | 7 | 8 | 3 | 7 (3 keyed) | 1 | 6 | 3 | Making Career Connections, PhET |
| 16.11 Energy in Waves: Intensity | m42250 | 2 (Examples 16.9, 16.10) | 2 (1 photo, 1 drawing inside Example 16.10) | 16 | 1 | 1 | 0 | 2 | 9 | 5 | none |

The five have 31 problems, of which 16 carry an inline solution and 15 do
not; 16 AP items, of which 8 are keyed (three as a letter, four as a
sentence, one, the wave graph of 16.9, as "2π m"); 9 conceptual questions,
none keyed; and 8 Check Your Understanding boxes, every one with its answer.
The worked examples are numbered 16.7 (in 16.7), 16.8 (in 16.9), 16.9 and
16.10 (in 16.11) on openstax.org, continuing the count of 16.1 to 16.6.

### Figure numbers, in book order (openstax.org)

- 16.7: Figure 16.19 the child on the swing (photograph, credit Erik A.
  Johnson); 16.20 displacement against time with light damping; 16.21 the
  critically damped curve A and the overdamped curve B; 16.22 the five
  frames of the energy transformation of a mass on a spring, printed inside
  Example 16.7 and the same picture as Figure 16.14 of 16.5.
- 16.8: Figure 16.23 the piano's strings (photograph, credit Matt Billings);
  16.24 the paddle ball driven slowly, at $f_0$ and fast; 16.25 amplitude
  against driving frequency for small, medium and heavy damping; 16.26 the
  Tacoma Narrows Bridge (photograph, credit PRI's Studio 360).
- 16.9: Figure 16.27 the boats before an ocean wave (photograph, credit
  Steve Jurveston); 16.28 the gull on the idealized wave with $\lambda$,
  $X$ and $v_\text{w}$ marked; 16.29 the transverse wave on a cord; 16.30
  the longitudinal wave on a cord; 16.31 the guitar, the amplifier and the
  sheet of paper. Unnumbered: the displacement-against-time graph of the
  last AP item (`new.jpg`, keyed) and the seismograph photograph inside
  problem 10 (credit Oleg Alexandrov; the problem is unkeyed).
- 16.10: Figure 16.32 the river's surface (photograph, credit waterborough,
  Wikimedia Commons); 16.33 pure constructive interference; 16.34 pure
  destructive interference; 16.35 the superposition of two dissimilar waves;
  16.36 the standing wave at $t = 0$, $T/4$, $T/2$, $3T/4$ and $T$; 16.37
  the string at its fundamental; 16.38 the first and second overtones;
  16.39 beats. Unnumbered: the two wave generators with points A to F
  inside the third AP item (`CNX_APPhysics_16_M10_rarefaction_img.jpg`,
  unkeyed).
- 16.11: Figure 16.40 the earthquake damage in Port-au-Prince (photograph,
  credit Petty Officer 2nd Class Candice Villarreal, U.S. Navy); 16.41 the
  two stereo speakers and their interference pattern, printed inside Example
  16.10.

No tables in the five sections.

### What is new

- **Damping** (16.7) is taught with three curves and no damping constant:
  the book never writes a damping coefficient or an exponential envelope,
  only that the amplitude "gradually decreases", that heavier damping slows
  the motion and that past a certain point the system no longer oscillates.
  The only equation is $W_\text{nc} = \Delta(\text{KE} + \text{PE})$ from
  7.5, and the only worked case is constant friction, Example 16.7, whose
  total distance $d$ comes from equating the friction's work to the stored
  elastic energy. A damping slider is therefore a slider on an untyped
  quantity the book leaves unnamed; it stays in ink, and the readout says
  which of the three regimes the curve is in.
- **Resonance** (16.8) has no equation at all. Its two ideas, the natural
  frequency $f_0$ and the response curve that peaks there and narrows as
  damping falls, are carried by the paddle ball and the three curves of
  Figure 16.25; the sim is the section. Its five problems are energy
  bookkeeping from 16.5 and 16.1 (what the shocks must dissipate, what the
  bridge stores), so the section's one skill node is the energy a damper
  removes, and the problems are tagged to `shm-energy` and
  `elastic-potential-energy` beside it.
- **Waves** (16.9) is the first time the chapter's motion leaves the
  oscillator and travels: a disturbance that propagates, its speed
  $v_\text{w} = \lambda/T = f\lambda$, and the transverse against
  longitudinal distinction. Everything here is reused by Chapter 17 (which
  has already staged `λ` and reuses `v_w`), 24 and 27.
- **Superposition** (16.10) is the heaviest of the five: eight defined
  terms and three sub-ideas the book prints under its own headers (the
  narrative, Standing Waves, Beats). It adds the string's harmonics
  $f_1 = v_\text{w}/2L$, $f_2 = 2f_1$, $f_3 = 3f_1$, the wave at a point
  $x = X\cos(2\pi f t)$ (16.3's kinematics in wave clothing) and the beat
  frequency $f_\text{B} = |f_1 - f_2|$ with the product form
  $x = 2X\cos(\pi f_\text{B} t)\cos(2\pi f_\text{ave} t)$.
- **Intensity** (16.11) declares $I = P/A$ and that a wave's energy, and so
  its intensity, goes as the amplitude squared. Chapter 17 declared the
  type `intensity` and the rows `I_intens` and `I_0` on 2026-09-14; 16.11
  uses them as they stand and adds only the primed intensity $I'$ of
  Example 16.9 and the primed amplitude $X'$ of Example 16.10, since `I_prime`
  is Chapter 10's moment of inertia.

### Sketches and photographs

- 16.7: 16.20 and 16.21 are one drawing with a damping slider, the book's
  three curves its states (light damping ringing down, curve A critically
  damped, curve B overdamped); it has time in it and moves with the
  scrubber, as `config.md` already says for finite motions. The plan may
  fold them (16.20 + 16.21) or keep two figures. 16.22 repeats 16.5's
  Figure 16.14 for the friction case of Example 16.7; a moving figure of
  the block on the rough surface with $\mu_\text{k}$ on a slider and the
  total distance $d$ in the readout would show what the strip cannot, that
  the block stops short of $x = 0$ where static friction holds it; a
  faithful copy is the cheaper alternative and the plan argues the tier.
  The swing (16.19) is the splash image of the section and is dropped
  unless the plan says why not.
- 16.8: the paddle ball (16.24) drives at a frequency on a slider and the
  ball's amplitude grows or shrinks; the response curves (16.25) are a still
  with damping on a slider; the natural fold is one moving figure (16.24 +
  16.25) with the ball above and the curve beneath, a point on the curve at
  the current driving frequency. The Tacoma Narrows photograph (16.26) is
  kept, as `config.md` records. The piano (16.23) is a splash image and is
  dropped.
- 16.9: the gull (16.28) is a moving figure, the wave travelling right at
  $v_\text{w}$ while the gull bobs in place, $\lambda$ and $X$ bracketed,
  with $\lambda$ and $T$ (or $f$) on sliders and the readout writing
  $v_\text{w} = \lambda/T = f\lambda$; it is the figure of 17.2's own wave
  relation too. The transverse and longitudinal cords (16.29, 16.30) are
  one moving figure with a choice of the two (rule 26.1), the coils drawn
  as dots so the reader sees each coil move across or along while the
  pattern travels; folding them (16.29 + 16.30) is the plan's call. The
  ocean (16.27) is a splash and is dropped; the guitar and paper (16.31) is
  a drawing the text never points at and is dropped or kept as a `photo`
  row, the plan saying which. The AP graph (`new.jpg`) travels on its
  exercise card's `figure` field; the seismograph goes out with its unkeyed
  problem.
- 16.10: the three superposition graphs (16.33, 16.34, 16.35) are one
  drawing of two waves and their sum with the phase of the second and its
  wavelength on sliders, the book's three pictures its states (in phase,
  half a wavelength out, dissimilar), and the plan decides whether it is a
  still or moves and whether it folds them; the standing wave (16.36) moves,
  two counter-travelling waves and their sum with the five frames the book
  prints as marks on the transport; the fundamental and overtones (16.37 +
  16.38) are one moving figure with the harmonic number as a segmented
  choice, $L$ and $v_\text{w}$ on sliders and the readout writing
  $f_n = n v_\text{w}/2L$; beats (16.39) move, $f_1$ and $f_2$ on sliders
  and the envelope drawn, the readout writing $f_\text{B} = |f_1 - f_2|$.
  The river (16.32) is pointed at by the first sentence and is kept. The
  rarefaction image travels on its AP item's `figure` field.
- 16.11: the earthquake (16.40) is a splash and is dropped. The two
  speakers (16.41) are pointed at by Example 16.10 and are a still figure:
  two sources, the field shaded by intensity, the speaker separation and
  the wavelength on sliders, so the reader sees the loud and silent places
  move as the wavelength changes; a faithful copy is the fallback. A Sim of
  $I = P/A$, the same power spread over a larger or smaller area with the
  intensity bar rising as the area shrinks (Example 16.9's magnifying
  glass), is the section's one other figure worth building.

### Notes, boxes and PhET items

The earlier note that the chapter has no PhET callouts was wrong for the
five: 16.9 carries "Wave on a String" (an `[interactive]` note whose image
reference is empty in the CNXML) and 16.10 "Wave Interference" (a link to
openstax.org/l/28interference). Both are dropped and named in `notes`, as
every other chapter has done. 16.9's Misconception Alert and Take-Home
Experiment (Waves in a Bowl) and 16.10's Making Career Connections (piano
tuners) are prose for the reader and are kept verbatim as boxed notes,
as the chapter's config already keeps 16.3's boxes.

### Exercises that belong elsewhere, and unkeyed items

- 16.7's conceptual question 3 (damping and the second law of
  thermodynamics) tests 15.6's `second-law-entropy-statement` beside
  16.7's damping; it stays in 16.7 and is tagged to both. Its one problem
  (the 3.0 % amplitude loss per cycle) is unkeyed and is left out. The
  second AP item (the sign of the rate of change of mechanical energy) is
  an unkeyed choice and is kept as an open item with its options.
- 16.8's problems 1, 2, 3 and 5 test 16.5's `shm-energy` and 7.4's
  `elastic-potential-energy` as much as this section's skill; they stay in
  16.8, tagged to those nodes too. Problem 4 (static friction, then the
  distance travelled) tests 16.7's `friction-damped-oscillator`; it is
  unkeyed and left out, 16.8's `exercise_notes` saying so. Problem 2 is
  unkeyed too. The AP item ("How is constant amplitude sustained") is open.
- 16.9's problem 9 (two speakers 1.00 ms apart) uses the speed of sound,
  which 17.2 tabulates, but needs only $d = v t$ and stays. Problems 2, 4,
  6, 8 and 10 are unkeyed and left out; AP items 2 (draw the two kinds of
  wave) and 4 (the particle motion, a choice) are unkeyed and kept as open
  items.
- 16.10's AP items 1 (a choice), 3 (the rarefaction figure, a choice), 5
  and 7 are unkeyed and kept as open items with their options; problems 2,
  4 and 6 are unkeyed and left out. 17.5's own AP items on pulses on strings
  and its four beat-frequency problems stay with 17.5, as Chapter 17's
  config decided; nothing moves from 17 into 16.10.
- 16.11's problems 2, 4, 7 and 9 are unkeyed and left out (problem 2 also
  needs the spherical spreading $A = 4\pi r^2$, which the book does not
  state here).

### Edges other chapters wait to place

Chapter 17's exploration lists the edges it could not place while these
pages were unbuilt: 17.2's `speed-of-sound-frequency-wavelength` on
`wavelength` and `wave-velocity`; 17.3's `sound-intensity` on `intensity`;
17.5's `sound-interference`, `air-column-resonance` and
`nodes-and-antinodes` on `superposition`, `constructive-interference`,
`destructive-interference`, `standing-wave` and
`nodes-and-antinodes-on-a-string`. The ids staged here are those exact
ids, so Chapter 17's chapter pass can add its edges as written.

### BE INSPIRING (rule 23), for the waves

The oscillator half of the chapter answered rule 23 with motion the page
could finally show. The wave half can go one better, because a wave is
motion the reader has always seen and never once taken apart.

- **The gull that does not travel.** Every reader has felt a wave push
  them and believes the water moves along with it. A figure that draws the
  gull bobbing while the crests slide under it, and lets the reader set
  $\lambda$ and $T$ and watch $v_\text{w} = \lambda/T$ change in the readout
  while the gull's own up-and-down speed is something else entirely, is the
  Misconception Alert made visible.
- **Coils, not arrows.** The transverse and longitudinal cords are the same
  cord drawn as a row of dots. When the dots move across the line for one
  choice and along it for the other, while the pattern itself travels at the
  same $v_\text{w}$ in both, the reader sees what "the disturbance is
  perpendicular to" and "parallel to the direction of propagation" mean
  without a single arrow.
- **Two waves and their sum, live.** Superposition is an addition, and an
  addition is easiest believed when the reader can drag one wave past the
  other and watch the sum swell to $2X$, vanish, and settle into something
  in between. The standing wave then needs no new idea: it is two of these
  going opposite ways, and the reader can see the nodes stay put while the
  antinodes breathe.
- **A string that sings its harmonics.** A segmented choice of $n$ with the
  string oscillating in its envelope, the tension or the length on a slider,
  and $f_n = n v_\text{w}/2L$ in the readout, is a guitar being tuned. When
  $L$ shortens and every frequency rises together, the reader has seen a
  fret.
- **Beats as an envelope the ear hears.** Two frequencies on sliders, the
  sum drawn with its slow envelope, and $f_\text{B}$ in the readout: pull the
  sliders apart and the warble quickens, bring them together and it slows to
  nothing, which is exactly what a piano tuner listens for.
- **Intensity as a bar over an area.** The same power poured through a
  smaller square makes a taller bar; the two speakers make a room of loud
  and silent spots. Both show that energy in waves is not a number but a
  distribution, and that where waves add the energy goes to fewer places,
  which is the sentence in Example 16.10 that the book itself calls
  disquieting.
