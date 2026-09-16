# Plan: 23.10 RL Circuits (m42425)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-15
without a review stop, on Chen's standing instruction to finish the book in
waves; the per-section stop of rule 2, the plan review of rule 5 and the user
picks of rule 15 are replaced by this file, written before the section was
built and left for review after, as `ch23/config.md` records.

The section that puts a number on the delay 23.9 promised. An inductor will
not let a current start or stop at once, and this page says how long the
opposition lasts: one number, $\tau = L/R$, and two exponentials on either
side of a two-position switch. Five paragraphs, one figure of three panels
(Figure 23.42), one worked example, four equation rows, one glossary term,
ten problems of which five are keyed and no conceptual question, no AP item
and no Check Your Understanding box. One page (rule 11), and the module
prints no header of its own, so the five below are the agent's (rule 3).

## Sub-concepts (page headers)

1. `switching-an-rl-circuit` **A switch that turns the current on and off**
   (book: the opening paragraph, from "We know that the current through an
   inductor $L$ cannot be turned on or off instantaneously"; Figure 23.42).
2. `current-turning-on` **Turning on: the current climbs toward $V/R$**
   (book: the paragraph from "When the switch is first moved to position 1"
   through the 0.632 of the remainder in every characteristic time; the
   displays $I = I_0(1 - e^{-t/\tau})$ and $\tau = L/R$).
3. `what-sets-the-time-constant` **What makes the time constant long or
   short** (book: the paragraph from "The characteristic time $\tau$ depends
   on only two factors").
4. `current-turning-off` **Turning off: the current dies away** (book: the
   paragraph from "When the switch in Figure 23.42(a) is moved to position 2"
   through the 0.368 of the preceding value in each successive time $\tau$;
   the display $I = I_0 e^{-t/\tau}$).
5. `counting-in-time-constants` **Counting in time constants** (book:
   Example 23.6, worked as an `<h3>`, and the closing paragraph from "In
   summary, when the voltage applied to an inductor is changed").

The book's cross-references are to its own Figure 23.42 and Example 23.6,
both of which the app links on the page, to the section's fourth problem,
which the example's discussion points forward at for the 0.183 A it names and
which is one of the five the book leaves unkeyed, so the page gives the number
and leaves the pointer out, and to Reactance, Inductive and Capacitive, written as
plain text (rule of the job). The learning objectives, the section summary
and the glossary term come out of the running text into the tables and the
views (rule 4).

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| rl-circuit | idea | switching-an-rl-circuit | the opening paragraph and Figure 23.42(a), the resistor and the inductor in series with a two-position switch |
| rl-time-constant | result | current-turning-on | $\tau = L/R$, given with its units, and the paragraph that argues why a large $L$ and a small $R$ both lengthen it |
| current-growth-in-an-rl-circuit | result | current-turning-on | $I = I_0(1 - e^{-t/\tau})$, the rise to $0.632 I_0$ in the first $\tau$, and Figure 23.42(b) |
| current-decay-in-an-rl-circuit | result | current-turning-off | $I = I_0 e^{-t/\tau}$, the fall to $0.368 I_0$ in the first $\tau$, and Figure 23.42(c) |
| fraction-per-time-constant-rl | skill | counting-in-time-constants | Example 23.6(b), worked as two steps of 0.368 rather than as one exponential; the problem that asks what percentage flows after three time constants |

The section leans on `inductance`, `self-inductance` and
`energy-stored-in-an-inductor` (23.9), `lenzs-law` and `faradays-law` (23.2),
`ohms-law` and `electric-power` (20.2 and 20.4) and `rc-circuit` and
`rc-time-constant` (21.6), which the book itself points at when it notes the
similarity to a charging capacitor; the coverage rows mark each as used where
the text uses it.

## Figures

id · replaces or Sim · concepts · value add · moving or still · sliders ·
headline · graph · 3D

1. `sim-rl-switching` · replaces Figure 23.42, whose three panels — the
   circuit with its two-position switch, the growth curve and the decay curve
   — are one number with one original and are not a fold (`ch23/config.md`) ·
   rl-circuit, rl-time-constant, current-growth-in-an-rl-circuit,
   current-decay-in-an-rl-circuit · value add: flow by animation and
   variation by slider (rule 24.4). The book prints two fixed curves whose
   axis is marked in $\tau$ and never in seconds, so the one thing the reader
   most needs — that a bigger inductance or a smaller resistance stretches
   the same shape over more time — cannot be seen in it at all, and the
   growth and the decay sit in separate panels although they are the same
   circuit with the switch thrown. Here one circuit carries both, the clock
   runs in milliseconds, and the marks at one, two and three time constants
   slide along the axis as $L$ and $R$ are changed · **moving**: the idea has
   a clock in it, since the current is a function of time and the whole
   result is how long it takes; the figure registers a cycle over a fixed
   25 ms window and takes the app's transport (rule 14) · $\kLind$ (1.00 to
   20.0 mH, step 0.25, default 7.50, inductance), $\kRes$ (1.00 to 10.0 Ω,
   step 0.25, default 3.00, resistance) and $\kV$ (5.0 to 30.0 V, step 1.0,
   default 30.0, voltage), with the position of the switch as a choice and
   never a slider, set as a dropdown rather than a button row because three
   sliders leave a segmented control too narrow for either state to be named
   (rule 26.1), default position 1. The defaults are Example
   23.6's own, 7.50 mH and 3.00 Ω giving $\tau = 2.50$ ms, and the 30.0 V
   supply makes $I_0 = 10.0$ A, the current the example starts from, so the
   figure reproduces the example on load · "One and a quarter time constants
   after the switch was thrown the current has reached 7.1 A of its final
   10.0 A." · graph below, since the scene is a horizontal circuit: the
   current against time, with the growth or the decay drawn as far as the
   clock has run and the rest of it faint ahead, the final value dashed
   across, and drop lines at $\tau$, $2\tau$ and $3\tau$ carrying the
   fractions the book gives. Fixed ranges, stated in a comment and never
   rescaled: 0 to 25 ms on the time axis, which is ten time constants of the
   default circuit, and 0 to 30 A on the current axis, which is the
   greatest final current the sliders reach, 30.0 V through 1.00 Ω, so
   nothing they can set leaves the frame; the curve is clipped to the box and
   a slow circuit is simply still climbing when the window ends, which is the
   lesson · 2D. Readout: $\kIcur = \kIocur(1 - e^{-\kt/
   \ktauRL})$ or $\kIcur = \kIocur e^{-\kt/\ktauRL}$ with the live numbers,
   and a small line giving $\ktauRL = \kLind/\kRes$ in milliseconds. Six
   things are named — the supply, the switch and its two positions, the
   resistance, the inductance, the current in the loop and the emf the
   inductor raises against the change — each beside its own thing; nothing in
   the scene travels and no two of them can meet at any slider setting, so
   the labels are on (rule 26.7). Draws inductance, resistance, current,
   voltage and time.
2. `sim-counting-time-constants` · Sim (it replaces no figure of the book) ·
   fraction-per-time-constant-rl, rl-time-constant · value add:
   standardisation and intuition (rule 24.4). The section's method is to
   count rather than to solve: 0.632 of what is left in every $\tau$ going
   up, 0.368 of what is there in every $\tau$ coming down. The book states
   the rule, works two steps of it in Example 23.6 and then sets a problem
   asking how far the counting is from the exponential, and nothing in it
   draws the two against each other. Here the ladder of counted values stands
   as bars on the exact curve, so the reader sees the counting land on the
   curve at every whole $\tau$ and drift from it in between · **still**: a
   ladder of values at whole time constants is a table of states and not a
   process, the reader steps along it with the slider, and no dummy loop is
   added to earn a transport (rule 14) · $\kLind$ (1.00 to 20.0 mH, step
   0.25, default 7.50, inductance) and $\kRes$ (1.00 to 10.0 Ω, step 0.25,
   default 3.00, resistance), which set $\tau$ between them, and the target
   fraction the circuit is to reach (50 to 99.9 percent of the final current
   going up, or 50 to 99.9 percent of the way down, untyped and in ink, step
   0.1, default 99.0, the figure of the section's ninth problem), with the
   direction as a choice, a dropdown for the same reason (rule 26.1), default
   turning on · "Counting in whole
   time constants puts the circuit past 99.0 percent after 5 of them, at
   12.50 ms, where the exponential gets there at 11.51 ms." · graph alone:
   the graph is the idea, the bars standing on it at $0, \tau, 2\tau \ldots$
   with the percentage of $I_0$ written above each and the target level
   dashed across. Fixed ranges: 0 to 6 time constants on the horizontal axis,
   written in $\tau$ and in milliseconds together, and 0 to 100 percent of
   $I_0$ on the vertical · 2D. Readout: the target fraction solved exactly,
   $\kt = -\ktauRL\ln(1 - f)$ turning on and $\kt = -\ktauRL\ln f$ turning
   off, with a small line giving the counted answer and the percentage
   difference between the two, which is the comparison the ninth and tenth
   problems ask for. Six bars stand on one axis and each carries its own
   percentage; the individual names are the numbers themselves, so the frame
   is labelled and nothing else needs a label (rule 26.7). Draws inductance,
   resistance, current and time.

Photographs: the section prints none, so none is kept and none is dropped.

Figures that serve exercises: the section's ten problems refer to no image of
their own, so none is copied; the eighth problem points at Figure 23.42,
which the page already draws.

Extra simulations (rule 15), thought through, judged and decided:

- **The counted ladder against the exponential
  (`sim-counting-time-constants`): built.** The reasoning is in its plan line
  above: the counting is the section's own skill node, the book sets two
  problems on how far it falls from the exact answer, and neither of the
  book's panels draws it.
- The RL circuit beside the RC circuit of 21.6, the same shape of curve with
  $L/R$ in the place of $RC$. Left: the book makes the comparison in a
  parenthesis and in one clause of the summary, the two curves are the same
  curve, and a figure whose two halves differ only in the label on the time
  constant opens no view the reader does not already have (rule 24.9).
- The energy in the inductor filling and emptying as the current grows and
  decays. Left: $E_{\text{ind}} = \frac{1}{2}LI^2$ belongs to 23.9 and is
  drawn there; this section mentions the stored energy only to say that it is
  dissipated at a finite rate, and the eighth problem that asks for it is one
  of the five the book leaves unkeyed.
- The induced emf across the inductor as its own curve, falling from $V$ to
  zero as the current climbs. Left: the emf is $V - IR$ at every instant and
  so is the current curve turned upside down; `sim-rl-switching` already
  names it and states it beside the coil, and a second curve of the same
  information on the same axis would say that it is a second fact.

**Figure pass, 2026-09-16 (Claude Fable 5.1).** `sim-counting-time-constants`: the percentages over the bars that stand above 90 % sat on the curve and on the target's name; those are written inside their bars and the target's name sits at the empty end of its line, the left while the current climbs. `sim-rl-switching` was judged and left as built.

## Exercises

- Every item is set at the end (`ch23/config.md`; the module prints no Check
  Your Understanding box, so the page hosts no inline card), and the section
  has no conceptual question and no AP test prep item.
- 5 problems keyed and kept: `p1` (fs-id1169738227350, the 1.00 s constant
  with a 500 Ω resistor, keyed 500 H, Apply), `p3` (fs-id1169737788008, the
  50.0 H superconducting magnet, keyed 50.0 Ω, Apply), `p5`
  (fs-id1169736596063, the range of time constants from a supply of inductors
  and resistors, keyed as the book prints it and kept as an open item because
  the answer is a range and not a number, Analyze), `p7`
  (fs-id1169737723042, the percentage of $I_0$ after three time constants,
  keyed 95.0%, Understand) and `p9` (fs-id1169737787416, the exact treatment
  against the counted one for 99.0 percent, keyed 24.6 ms and 26.7 ms with a
  discussion, Analyze).
- 5 problems left out, having no answer in the book's key:
  fs-id1169737723038 (the 20.0 ns constant with a 5.00 MΩ resistance),
  fs-id1169736581925 (verify the 0.183 A of Example 23.6),
  fs-id1169737762374 (the 25.0 mH inductor on a 12.0 V battery),
  fs-id1169738248980 (the 5.00 A through a 1.50 H inductor, with its energy
  and its average power) and fs-id1169737851564 (the 2.00 H inductor down to
  0.100 percent). All five are named in `notes` and in `exercise_notes`.
- Nothing is taken from another section and nothing of this section's own is
  held back; the book's problems follow its sections closely here
  (`ch23/config.md`).
- No generated questions: each of the five nodes has a book exercise that
  tests it.
- Weights: `p1` and `p3` give `rl-time-constant` its full value; `p5` gives
  `rl-time-constant` the full value, since the range is $L/R$ at its two
  extremes; `p7` gives `fraction-per-time-constant-rl` the full value with
  `current-growth-in-an-rl-circuit` at 3, the counting being the whole of the
  work; `p9` gives `current-growth-in-an-rl-circuit` the full value,
  `fraction-per-time-constant-rl` 4, the comparison being half the question,
  and `rl-time-constant` 3.

## Views

- Formulas: the four rows `ch23/chapter.json` gives 23.10, three of them
  important. Their anchors are below.
- Definitions: the three variable rows the section owns and the glossary term
  characteristic time constant. Their anchors are below.
- Concept map: the five nodes above with their edges into 20.2, 20.4, 21.6,
  23.2 and 23.9.

## Colour

The page binds inductance, resistance, current, voltage and time, which is
exactly what `ch23/COLOR.md` gives 23.10. The coil's inductance and the
henries beside it are the inductance hue, the resistor and its ohms the
resistance hue, the current in the loop and the whole of both curves the
current hue, the supply and the emf the inductor raises against the change
the voltage hue, and the time axis with its marks at one, two and three time
constants the time hue. The battery, the switch, the wires, the turns of the
coil and the frame of every graph are ink, since a device is never tinted
(`ch23/COLOR.md`, "A device is never tinted"). The fractions 0.632 and 0.368
and the target percentage are untyped and in ink, as the chapter's plan
says. Nothing on the page uses the categorical or the element palette, and
nothing draws a field or a flux, so neither type is bound here. Colour off
leaves the current curve told from the final-value line by its dash pattern
and every bar by the percentage written above it.

## Wanted at chapter level

- `eq-rl-final-current` → `23.10-current-turning-on`
- `eq-rl-time-constant` → `23.10-current-turning-on`
- `eq-rl-current-on` → `23.10-current-turning-on`
- `eq-rl-current-off` → `23.10-current-turning-off`
- `23.10/τ_RL` → `23.10-current-turning-on`
- `23.10/R_res` → `23.10-current-turning-on`
- `23.10/I_0curr` → `23.10-current-turning-on`

### Decided by the chapter pass (2026-09-16)

- All three `variables` rows and all four `equations` rows are anchored as
  asked, the three growth equations and the three variables to
  `23.10-current-turning-on` and the decay to `23.10-current-turning-off`.
