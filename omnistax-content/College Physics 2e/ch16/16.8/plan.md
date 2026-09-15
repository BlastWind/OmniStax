# Plan: 16.8 Forced Oscillations and Resonance (m42247)

Source: `source.md`. Built 2026-09-14 under the wave brief, which replaces
the stop of rule 2 and the review of rule 5 with this file.

A short, qualitative section: five paragraphs, no equation of its own,
three glossary terms, one Check Your Understanding, one AP item, one
conceptual question and five problems, of which two are unkeyed. Four
book figures: two photographs and two drawings.

## Sub-concepts (page headers)

The book prints no header of its own. Proposed page structure:

1. **A periodic driving force and the natural frequency** (`driven`; the
   piano paragraph and the paddle-ball paragraph)
2. **The width of the resonance depends on the damping**
   (`resonance-curve`; the graph paragraph and the paragraph on the
   width of the response)
3. **Resonance in instruments, radios, bodies and bridges**
   (`resonance-everywhere`; the closing paragraph, with the Tacoma
   Narrows photograph; Check Your Understanding inline at its end)

## Concept nodes

Staged by the prep pass and used as they stand: `natural-frequency`
(idea), `resonance` (idea), `resonance-curve-damping` (result),
`energy-removed-by-damping` (skill). Introduced in blocks 1, 1, 2 and 2.
Used: `frequency` and `period-frequency` (16.2), `amplitude` and
`simple-harmonic-motion` (16.3), `damped-harmonic-motion` (16.7),
`shm-energy` (16.5), `elastic-potential-energy` (7.4).

## Figures

id · replaces · concepts · value add · motion · sliders · headline · graph · 3D

1. `sim-resonance` · Figure 16.24 + 16.25 (the paddle ball driven slowly,
   at $f_0$ and fast, and the three resonance curves) · natural-frequency,
   resonance, resonance-curve-damping · variation by slider and flow by
   animation: the book draws the ball at three driving frequencies and
   then, separately, plots the response, so the reader must join the two
   pictures in the head. Here one driving-frequency slider moves the ball
   and the point on the curve together, which is the mental-translation
   test of rule 24.3; tier, moving simulation · moving, endlessly: a
   finger drives the rubber band up and down at the frequency you set and
   the ball follows in step at the amplitude the curve gives, so the
   motion has a clock and takes the plain transport · driving frequency
   $f$ (0.10 to 2.00 Hz, default 1.00 Hz, the natural frequency, frequency
   hue), and the amount of damping as a choice of the book's three named
   states, small, medium and heavy (ink, rule 26.1) · "Your finger drives
   the ball at 1.00 Hz, which is its natural frequency, and the ball
   swings with an amplitude of 8.3 cm" · the curve sits beside the scene,
   which is vertical · 2D: an amplitude against a frequency is a relation
   between two quantities and is clearest flat (rule 28.1).
   Fold: the ball and the curve are one idea drawn twice, and one live
   drawing is clearly better, so 16.24 keeps `number` and 16.25 goes to
   `folds`; the eyebrow reads "Figure 16.24 + 16.25" and both references
   in the prose link here. The three curves are drawn at once, as the
   book draws them, in the categorical palette with a legend, because
   they carry no type that would tell them apart (chapter `COLOR.md`);
   the chosen one is drawn heavy and carries the live point. Labels on:
   four named things, none of them colliding.
2. `sim-driven-energy` · Sim (the book draws nothing here) ·
   resonance, energy-removed-by-damping · variation by slider and flow by
   animation: the section says that at resonance the amplitude increases
   with each oscillation for as long as you drive it, and the AP item
   asks how a constant amplitude is then sustained. The reader would
   otherwise have to imagine the store of energy filling and the damper
   emptying it; tier, moving simulation · moving, finite: the bridge
   starts at 0.100 m and the driver fills it, so the run ends and takes
   the scrubber · force constant $k$ ($0.50$ to $2.00 \times 10^8$ N/m,
   default $1.00 \times 10^8$, stiffness hue), the energy imparted each
   second (2000 to 20000 W, default 10000, power hue), and the amount of
   damping, an untyped quantity the book never names (0 to 12000 W
   removed at the working amplitude, default 0, ink) · "After 1200 s the
   soldiers have put in $1.20 \times 10^7$ J and the bridge swings 0.500 m
   either way" · the amplitude against time sits below the deck, which is
   a horizontal scene · 2D.
   Its defaults are problem 5's numbers, so it loads reproducing the
   book's suspension bridge; raising the damping above zero stops the
   growth at the amplitude where what the driver puts in each second is
   what the damper takes out, which is the answer to the AP item.

Photographs:

- Figure 16.23, the piano strings (credit: Matt Billings, Flickr):
  **drop**. It is the splash image at the head of the section and the
  text points at no part of it (config).
- Figure 16.26, the Tacoma Narrows Bridge (credit: PRI's *Studio 360*,
  via Flickr): **keep**, with its caption and credit. The text names it
  and it shows the thing the passage is about, which is the book's own
  rule for keeping a photograph.

No figure serves an exercise: nothing in this section's exercises carries
an image.

Extra simulations (rule 15): considered a radio dial tuning across two
stations, which would draw the same curve a second time with no new view;
a car crossing corrugations at several speeds, which is the resonance
curve with a speed axis; and a singer shattering a glass for the Check
Your Understanding, which would have to animate a failure the book does
not describe. None survives. The page keeps the two figures above.

## Exercises

- 1 Check Your Understanding (the singer and the crystal glass), open,
  inline at the end of block 3, with the book's own answer.
- 1 AP item (how constant amplitude is sustained in forced oscillations),
  open and unkeyed, with an AI-marked suggested approach. It is not a
  choice item, so nothing is left as options.
- 1 conceptual question (why soldiers route step across a bridge), open,
  with an AI-marked suggested approach.
- 5 problems. Keyed and kept: 1 (the car's shocks, 384 J), 3 (the hanging
  object, three parts) and 5 (the suspension bridge, two parts). Unkeyed
  and left out, and named in `notes`: 2 (the shocks of a car with
  $k = 5.00 \times 10^4$ N/m) and 4 (the object on a spring with static
  and kinetic friction, which tests 16.7's `friction-damped-oscillator`).
- No generated questions: every node has a book exercise.

## Views

- Formulas: none. The section states no equation, which is why the two
  figures carry it.
- Definitions: the symbols $f$, $f_0$ and $X$ of this section, and the
  three glossary terms natural frequency, resonance and resonate.
- Concept map: the four nodes above.

## Colour

The page binds `frequency` ($f$ on the slider and the frequency axis,
$f_0$ marked on it), `position` ($X$ on the amplitude axis and the
bracket across the ball's swing), `time` (the clock of the driven run and
the time axis of the second figure), `stiffness` ($k$), `power` (the
energy imparted each second, Chapter 7's type, used by name) and `energy`
(the store $\tfrac{1}{2}kX^2$ the driver fills). The amount of damping,
the mass of the ball and the three regimes stay in ink, and the three
resonance curves are told apart by `F.cat`, as the chapter's `COLOR.md`
settles. No new type and no hex.

## Wanted at chapter level

- variables 16.8/f → 16.8-driven
- variables 16.8/f_0 → 16.8-driven
- variables 16.8/X → 16.8-resonance-curve
- `ch16/COLOR.md`: the line for 16.8 expects frequency, position and
  time. As built the page also binds `stiffness`, `power` and `energy`,
  because `sim-driven-energy` draws the store $\tfrac{1}{2}kX^2$ that the
  soldiers of problem 5 fill at a steady number of joules each second;
  the chapter pass should record those three against 16.8.
- No symbol row is changed and no equation row is added.

**The chapter pass, 2026-09-14.** The three anchors are written. `ch16/COLOR.md`
now records that 16.8 binds `stiffness`, `power` and `energy` as built,
beyond the frequency, position and time the colour plan expected, and
`config.md` says the same in its "What the build changed" block. No symbol
row changed and no equation row added.
