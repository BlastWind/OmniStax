# Plan: 23.12 RLC Series AC Circuits (m42431)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-15
without a review stop, on Chen's standing instruction to finish the book in
waves without check-ins; the per-section stop of rule 2, the plan review of
rule 5 and the user picks of rule 15 are replaced by this file, written
before the section was built and left for review after, as `ch23/config.md`
records.

The chapter's last section and the one it has been building toward. Chapter
20 gave the reader Ohm's law and rms values, 23.11 gave the two reactances
and the quarter-cycle each of them puts between a voltage and a current, and
here all three elements sit on one source at once. The section's whole
argument is that three oppositions measured in ohms do not add, because the
voltages they carry peak at different moments; that they combine instead as
the sides of a right triangle; that the triangle collapses to its resistance
at one frequency, which is resonance; and that the angle left between the
source voltage and the current is what the average power has to be
multiplied by.

Five book figures, all five of them drawings, three worked examples,
seventeen displayed results of which nine are worked substitution steps, no
boxed note, one dropped PhET link, four glossary terms, no Check Your
Understanding box, two conceptual questions and sixteen problems. It is the
longest section of the book and it stays one page (rule 11, and
`ch23/config.md` says so of this section by name).

## Sub-concepts (page headers)

The module prints three headers of its own and `ch23/config.md` keeps them
as the book writes them (rule 3):

1. `impedance` **Impedance** (book: the opening paragraph on three elements
   that impede current together, Figure 23.46, the AC version of Ohm's law,
   the argument from the phases of $V_R$, $V_L$ and $V_C$ through Figure
   23.47, $V_0 = \sqrt{V_{0R}^2 + (V_{0L} - V_{0C})^2}$, the substitution
   that cancels $I_0$, $Z = \sqrt{R^2 + (X_L - X_C)^2}$, and Example 23.12).
2. `resonance-in-rlc-series-ac-circuits` **Resonance in *RLC* Series AC
   Circuits** (book: the current as a function of frequency, $X_L = X_C$,
   $f_0 = 1/2\pi\sqrt{LC}$, the paragraph on mechanical resonance and the
   radio tuner, Figure 23.48 with its two resistances, and Example 23.13).
3. `power-in-rlc-series-ac-circuits` **Power in *RLC* Series AC Circuits**
   (book: the phase angle, $\cos\phi = R/Z$, $P_\text{ave} = I_\text{rms}
   V_\text{rms}\cos\phi$, the power factor, Example 23.14, and the closing
   paragraphs in which the resistance dissipates everything the source
   delivers while the inductor and the capacitor pass energy back and
   forth — the car on the corrugated road of Figure 23.49 and the mass on a
   spring of Figure 23.50).

The two analogies stay inside the third header rather than taking one of
their own, because the book stands them there and because both of them are
about the same thing: where the energy goes in a circuit that is being
driven, and where it goes in one that is not.

Learning objectives, the section summary and the four glossary terms
(impedance, resonant frequency, phase angle, power factor) come out of the
running text into the tables and the views (rule 4). The references to
Reactance, Inductive and Capacitive are plain text, as `ch23/config.md`
settles every cross-reference, and the app links "Figure 23.46" to "Figure
23.50" and "Example 23.12" to "Example 23.14" on the page itself. The PhET
link at the end of the module, Circuit Construction Kit (AC+DC), is dropped
and named in `notes` (`ch23/config.md`).

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| voltages-do-not-simply-add | idea | impedance | the paragraph on $V_R$ in phase, $V_L$ leading by 90° and $V_C$ following by 90°; Figure 23.47; $V_0 = \sqrt{V_{0R}^2 + (V_{0L} - V_{0C})^2}$ |
| impedance | result | impedance | $Z = \sqrt{R^2 + (X_L - X_C)^2}$; the glossary term; Example 23.12, 531 Ω at 60.0 Hz and 190 Ω at 10.0 kHz |
| ac-ohms-law-with-impedance | result | impedance | $I_0 = V_0/Z$ or $I_\text{rms} = V_\text{rms}/Z$; Example 23.12(b), 0.226 A and 0.633 A |
| resonant-frequency-of-an-rlc-circuit | result | resonance-in-rlc-series-ac-circuits | $X_L = X_C$ solved for $f_0 = 1/2\pi\sqrt{LC}$; the glossary term; Example 23.13, 1.30 kHz and 3.00 A |
| resonance-peak-and-resistance | idea | resonance-in-rlc-series-ac-circuits | Figure 23.48, the two curves differing only in resistance; the radio receiver that would not be selective |
| phase-angle | result | power-in-rlc-series-ac-circuits | $\cos\phi = R/Z$; the glossary term; Example 23.14(a), 0.0753 and 85.7° |
| power-factor | result | power-in-rlc-series-ac-circuits | $P_\text{ave} = I_\text{rms}V_\text{rms}\cos\phi$; the glossary term; Example 23.14(b) and (c), 2.04 W and 360 W |
| lc-oscillation-analogy | idea | power-in-rlc-series-ac-circuits | the closing paragraphs; Figure 23.49, the wheel on the corrugated road; Figure 23.50, the mass on a spring beside the *LC* circuit |

The page leans on 23.11's `inductive-reactance`, `capacitive-reactance`,
`inductor-voltage-leads-current`, `capacitor-voltage-follows-current` and
`resistor-voltage-in-phase`, which are the five facts the triangle is built
from; on Chapter 20's `ac-ohms-law`, `rms-values`, `ohms-law`, `ac-power`
and `series-connection`; on Chapter 16's `resonance`, `natural-frequency`,
`resonance-curve-damping` and `simple-harmonic-motion`, which is where the
reader has met a peak that a damping lowers and broadens; on Chapter 7's
`shm-energy`; and on 23.9's `energy-stored-in-an-inductor` with Chapter
19's `capacitor-energy`, which are the two stores the energy passes
between. Nothing later in the book leans back on it, since it closes the
chapter.

## Figures

id · replaces or Sim · concepts · value add · what moves or still · sliders
and choices · headline · graph · 3D

1. `sim-rlc-voltages` · replaces Figure 23.46 **and** Figure 23.47, which
   fold into one (eyebrow "Figure 23.46 + 23.47", number 23.46, 23.47 under
   `folds`, both images under `originals`, so that both numbers the prose
   cites link here) · voltages-do-not-simply-add, impedance,
   ac-ohms-law-with-impedance, phase-angle · the fold is plain: the book
   draws the circuit once and then draws, in seven stacked panels beside it,
   what each of its elements is doing at each instant. Those are one circuit
   and one set of curves, and a live circuit with its curves beneath it is
   better than a schematic on one page and a column of graphs on another
   (rule 14) · value add: intuition, variation by slider and flow by
   animation (rule 24.4). The reader has to hold in mind that the current is
   the same everywhere and in phase with itself while three voltages peak at
   three different moments, and that the source voltage is their sum at each
   instant and not the sum of their peaks. Here the same current runs round
   the drawn circuit, each element's voltage is written beside the element
   as it rises and falls, and the curves below show the two quarter-cycles
   of lead and lag directly · **it moves**: the whole content of the figure
   is when each quantity peaks, which is a clock (rule 14), so it registers
   a cycle and takes the app's transport: two whole cycles in 5.0 s, so the
   reader can stop it with the scrubber at the moment the source voltage
   peaks and see that the current has not peaked yet · the frequency $\kf$
   (20 to 3000 Hz, default 60, the frequency hue), the resistance $\kRes$
   (30 to 120 Ω, default 40, the resistance hue), the inductance $\kLind$
   (1.00 to 6.00 mH, default 3.00, the inductance hue) and the capacitance
   $\kCap$ (2.00 to 10.00 µF, default 5.00, the capacitance hue), which are
   Example 23.12's own numbers, so the figure opens on that example and reads
   531 Ω and 0.226 A; and a choice, never a slider, for what the graph
   carries, the three element voltages or the source voltage beside the
   current (rule 26.1), since five curves on one frame at once would be
   unreadable at any setting · "At 60.0 Hz the capacitor takes almost the
   whole of the source voltage, and the current reaches its peak 85.7°
   before the source does." · **graph below** the scene, which is a wide
   horizontal circuit (the rule of the plan line). The horizontal axis is
   the number of cycles elapsed, 0 to 2, rather than a time in
   milliseconds, because the period runs from 0.333 ms to 50 ms across the
   frequency slider and a time axis would have to rescale, which rule 26
   forbids; the period in milliseconds is stated in the headline at every
   setting. The voltage axis is fixed at ±350 V, which is twice the 170 V
   peak of the source, so that the book's own state fills half the frame;
   the 310 V the sliders can raise across the inductor near resonance still
   stands inside it, and a setting past it is pinned at the edge. The
   current rides the same frame on its own scale at the right, fixed at
   ±6 A; neither rescales · **flat** (rule
   28.1): a circuit and a set of curves against time are relations between
   quantities and have nothing in their depth. Draws voltage, current,
   resistance, inductance, capacitance, frequency and time.
2. `sim-impedance-triangle` · Sim (eyebrow "Sim"; it replaces no book
   figure) · impedance, ac-ohms-law-with-impedance, phase-angle · value
   add: intuition and variation by slider. The book states $Z =
   \sqrt{R^2 + (X_L - X_C)^2}$ and says in words that it is not a sum, and
   it never draws the triangle whose sides those three numbers are, which
   is a pity, because the triangle is also where the phase angle lives:
   $\cos\phi = R/Z$ is the same picture read a second way. Here the two
   legs are drawn to scale in ohms, the hypotenuse is the impedance, the
   angle at the foot is $\phi$, and dragging the frequency swings the
   vertical leg from far below the axis at low frequency, where the
   capacitor dominates, up through nothing at resonance to far above it,
   where the inductor does · **still**: the figure answers its sliders and
   nothing in it has a clock; a triangle is a geometry, not a process
   (rule 14). No transport · the frequency $\kf$ (60 to 3000 Hz, default
   60, the frequency hue), the resistance $\kRes$ (30 to 120 Ω, default 40,
   the resistance hue), the inductance $\kLind$ (1.00 to 6.00 mH, default
   3.00, the inductance hue) and the capacitance $\kCap$ (2.00 to 10.00 µF,
   default 5.00, the capacitance hue). The source is held at the book's
   120 V rms and stated in the readout, so the figure opens on Example 23.12
   and Example 23.14 together and reads 531 Ω, 0.226 A, a power factor of
   0.0753 and 85.7° · "At 60.0 Hz the capacitor's 531 Ω dwarfs the
   inductor's 1.13 Ω, so the impedance is 531 Ω and the current lags the
   source voltage by 85.7°." · **graph beside** the triangle, which is a
   tall scene (the rule of the plan line): the three ohms and the impedance
   against frequency, 0 to 3000 Hz, on a frame fixed at 0 to 600 Ω, which
   is the same scale the triangle is drawn on, so that the two halves of
   the figure are one picture; a reactance past the top of the frame is
   clipped and its value pinned at the edge, since $X_C$ runs to 1326 Ω at
   the foot of the frequency slider and no honest frame can hold both that
   and the 40 Ω resistance · **flat** (rule 28.1). Draws resistance,
   inductance, capacitance, frequency, voltage and current.
3. `sim-resonance` · replaces Figure 23.48 (eyebrow "Figure 23.48") ·
   resonant-frequency-of-an-rlc-circuit, resonance-peak-and-resistance,
   power-factor, ac-ohms-law-with-impedance · value add: variation by
   slider. The book prints two curves for two resistances and says the
   higher one is lower and broader; here the resistance is a slider, so the
   reader watches one curve become the other, and the inductance and the
   capacitance move the peak along the axis instead of changing its shape,
   which is the fact a radio tuner is built on. The average power is drawn
   on the same frame on its own scale, which the book does not draw at all
   and which is where the power factor becomes visible: the power peak is
   sharper than the current peak, because away from resonance both the
   current and $\cos\phi$ are falling together · **still**: a resonance
   curve is a relation between a current and a frequency, answered by the
   sliders, with no clock in it; `ch23/config.md` expects it still and adds
   that a transport is never added to earn one (rule 14). No transport ·
   the frequency $\kf$ (20 to 3000 Hz, default 1300, the frequency hue),
   which sets the live marker rather than the curve, the resistance $\kRes$
   (10 to 200 Ω, default 40, the resistance hue), the inductance $\kLind$
   (1.00 to 6.00 mH, default 3.00, the inductance hue) and the capacitance
   $\kCap$ (2.00 to 10.00 µF, default 5.00, the capacitance hue). The
   second curve, the book's own comparison, is the same circuit with four
   times the resistance and is dashed rather than recoloured, as
   `ch23/COLOR.md` requires of two curves of one type · "A 40.0 Ω circuit
   with 3.00 mH and 5.00 µF resonates at 1.30 kHz, where the impedance
   falls to the resistance alone and the current reaches 3.00 A." ·
   **graph alone**, which is the rule of the plan line where the graph is
   the idea: the rms current against frequency, 0 to 3000 Hz, fixed at 0 to
   12 A, which covers the 12.0 A the smallest resistance reaches at its
   peak; the average power on the right-hand scale, fixed at 0 to
   1500 W · **flat** (rule 28.1). Draws frequency, current, power,
   resistance, inductance and capacitance.
4. `sim-mechanical-analogy` · replaces Figure 23.49 **and** Figure 23.50,
   which fold into one (eyebrow "Figure 23.49 + 23.50", number 23.49, 23.50
   under `folds`, both images under `originals`) · lc-oscillation-analogy,
   resonance-peak-and-resistance, resonant-frequency-of-an-rlc-circuit ·
   the fold is the section's own argument: both figures say that the
   circuit is a mechanical oscillator, one of them driven and damped and
   the other free, and the difference between them is whether the circuit
   has a resistance in it. A choice between the two states is plainly
   better than two drawings of two machines (rule 14) · value add:
   intuition and flow by animation. The book draws four frozen states of
   the *LC* circuit beside four frozen states of a mass on a spring and
   asks the reader to run them together in his head; here they run
   together, with the energy drawn as two bars that fill and empty in
   step — the capacitor's electric field against the spring's potential
   energy, the inductor's magnetic field against the kinetic energy of the
   mass · **it moves**: an oscillation is the clock itself (rule 14), so
   the figure registers a cycle and takes the app's transport, two whole
   cycles of the circuit in 5.0 s. The circuit really oscillates at
   1.30 kHz on its defaults, which is 0.77 ms to the cycle, and the
   readout states the true period and the factor the drawing is slowed by
   (rule 28.4) · the inductance $\kLind$ (1.00 to 6.00 mH, default 3.00,
   the inductance hue) and the capacitance $\kCap$ (2.00 to 10.00 µF,
   default 5.00, the capacitance hue), which set the resonant frequency and
   with it the period of both machines; and a choice, never a slider, for
   which analogy is drawn, the free *LC* circuit beside its mass on a
   spring or the driven *RLC* circuit beside the car wheel on the
   corrugated road (rule 26.1) · "With 3.00 mH and 5.00 µF the circuit
   oscillates at 1.30 kHz of its own accord, and all of its energy stands
   in the capacitor's electric field at the moment the current is zero." ·
   **graph below** the scene, which is a wide horizontal pair of machines:
   the two energies against the number of cycles elapsed, 0 to 2, in units
   of the energy the circuit started with, so that the two curves add to
   the whole and the reader can see the trade directly. Free, the frame
   runs 0 to 1.0 and the two always add to its top; damped, it runs 0 to
   1.5 and carries a third line, the energy the resistance has turned into
   heat, which rises as the other two fall under their envelope. Neither
   frame rescales as the sliders move · **a locked view** (rule 28.2) for the car wheel and its
   shock absorber, which the book prints in perspective, a front quarter
   view of the wing with the wheel standing under it: the wheel is drawn as
   a cylinder through `F.view`, its faces shaded, the corrugated road
   running away from the viewer under it, and there is no orbit, since the
   book's own viewpoint is the one that shows both the spring above the
   wheel and the bumps under it. The *LC* state and the mass on a spring
   are drawn flat beside it, because a spring, a block and a circuit are
   relations and have nothing in their depth. Draws energy, inductance,
   capacitance, voltage, current and time.

Photographs: none. All five images of the module are drawings, and all five
are replaced or folded.

Figures that serve exercises: none. Neither conceptual question and none of
the sixteen problems refers to an image, so nothing travels on a card.

Extra simulations (rule 15), thought through, judged and left:

- A radio dial: the resonance curve with three broadcast stations marked
  along the frequency axis and a variable capacitor that tunes between
  them. Left: it is the resonance curve again with a story painted on it,
  and `sim-resonance` already moves the peak with the capacitance, which is
  the whole of the mechanism. The stations would be decoration.
- A phasor diagram turning at $\omega$, with the three voltages as arrows
  whose vertical projections are the curves. Left: phasors are not taught
  anywhere in this book, and rule 26.5 asks that a simulation be legible
  from ideas the book has taught by that page. The triangle of
  `sim-impedance-triangle` is the same geometry with nothing the reader has
  not met.
- A power triangle, real against reactive power. Left: the book never names
  reactive power, and the section's power content is one product and one
  cosine, which `sim-resonance` carries on its second axis.

**Figure pass, 2026-09-16 (Claude Fable 5.1).** `sim-mechanical-analogy`: the names of the two energy curves were set over the axis title at the top left of the frame; they are a legend of line samples on panels in the frame's top right corner, with the third for the heat when the circuit is damped. The other three figures were judged in both themes and left as built.

## Types the page binds

`inductance`, `capacitance`, `resistance`, `frequency`, `voltage`,
`current`, `power`, `time` and `energy`, which is exactly the list
`ch23/COLOR.md` gives this page; nothing beyond it is wanted. Resistance,
the two reactances and the impedance are one hue with four subscripts, as
that file insists — the whole argument of the page is that they are four
numbers of one kind — and $V_R$, $V_L$, $V_C$ and the source voltage are
one hue with four labels for the same reason, told apart on the graph by
their labels and their dash patterns and never by a second colour. The
phase angle $\phi$, the power factor $\cos\phi$, the axis titles and the
frame are untyped and in ink, and no device is tinted: the resistor's box,
the inductor's coil, the capacitor's plates, the source, every wire, the
spring, the block, the wheel and the road are all ink.

## Exercises

Eighteen in the book: two conceptual questions and sixteen problems, of
which the book keys nine problems. The section carries no AP test prep item
and no Check Your Understanding box, so everything is set at the end.

- Both conceptual questions go to the Exercises document with AI-marked
  suggested approaches, since the book prints no key for either
  (`ch23/config.md`).
- The nine keyed problems go to the Exercises document as `p1`, `p3`, `p5`,
  `p7`, `p9`, `p11`, `p13`, `p15` and `p16`, keeping the place each holds
  in the book's own list.
- The last problem, `exer-78926`, is the Critical Thinking item. The CNXML
  leaves its `type` attribute empty, and it is classed by the header it
  sits under, Problems & Exercises, so it is a problem
  (`ch23/config.md`). Its key is kept exactly as the book prints it and the
  arithmetic it prints is named in `notes` rather than corrected: part (a)
  writes $1\Delta\phi/\Delta t$ with a denominator of 100 and comes to
  0.0002000 V, and part (b), which the book's own reasoning says should be
  the larger, comes to 0.0001000 V. Nothing is computed for the reader
  (rule 13), so the printed numbers stand and the note says what the book
  printed.
- The seven unkeyed problems are left out and named in `notes`: the *RC*
  circuit's impedance at two frequencies, the resonant frequency of a
  0.500 mH inductor with a 40.0 µF capacitor, the range of resonant
  frequencies from a supply of inductors and capacitors, the inductance
  that resonates at 60.0 Hz with a 2.00 µF capacitor, the 2.50 Ω circuit's
  impedance and currents, that same circuit's power factor and average
  power, and the 200 Ω circuit whose phase angle is 45.0° at 8000 Hz.
- No exercise of this section is held for a later one and none arrives from
  an earlier one; `ch23/config.md` lists the four cases that were looked at
  across the chapter and none of them is here.

## Wanted at chapter level

- `variables` `23.12/Z_imp` → anchor `23.12-impedance`
- `variables` `23.12/I_rms` → anchor `23.12-impedance`
- `variables` `23.12/V_rms` → anchor `23.12-impedance`
- `variables` `23.12/f_0` → anchor `23.12-resonance-in-rlc-series-ac-circuits`
- `variables` `23.12/ϕ` → anchor `23.12-power-in-rlc-series-ac-circuits`
- `variables` `23.12/P_ave` → anchor `23.12-power-in-rlc-series-ac-circuits`
- `equations` `eq-ac-ohms-law` → anchor `23.12-impedance`
- `equations` `eq-peak-voltage-sum` → anchor `23.12-impedance`
- `equations` `eq-impedance` → anchor `23.12-impedance`
- `equations` `eq-resonance-condition` → anchor
  `23.12-resonance-in-rlc-series-ac-circuits`
- `equations` `eq-resonant-frequency` → anchor
  `23.12-resonance-in-rlc-series-ac-circuits`
- `equations` `eq-power-factor` → anchor
  `23.12-power-in-rlc-series-ac-circuits`
- `equations` `eq-average-power` → anchor
  `23.12-power-in-rlc-series-ac-circuits`
- Errata: the Critical Thinking problem's printed key, described above, is
  kept as printed and named in this section's `notes`. Part (a) divides by
  100 where the quarter cycle of a 400 Hz rotation is 1/1600 s, and part
  (b) comes out smaller than part (a) although the text of the answer
  argues it should be larger. Nothing is recomputed for the reader.

### Decided by the chapter pass (2026-09-16)

- All six `variables` rows and all seven `equations` rows are anchored as
  asked.
- The chapter's figure numbering was verified module by module. The chapter
  has fifty narrative figures, not fifty-one: the count of fifty-one had taken
  one of the nine images that sit inside end-of-module exercises for a
  narrative figure. No figure between 23.3 and 23.4 is unnumbered, and this
  section's 23.46 to 23.50 stand.
- This section's three worked examples are renumbered 23.12, 23.13 and 23.14.
  Numbered from 23.7 they collided with 23.9's pair; the publisher counts
  fourteen straight through the chapter. The five exercise and prose
  references that point back at them are renumbered with the headers.
- The Critical Thinking problem's faulty key is kept as printed and recorded
  in `exploration.md` § Errata.
