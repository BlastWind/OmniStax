# Plan: 23.11 Reactance, Inductive and Capacitive (m42427)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-15
without a review stop, on Chen's standing instruction to finish the book in
waves; the per-section stop of rule 2, the plan review of rule 5 and the user
picks of rule 15 are replaced by this file, written before the section was
built and left for review after, as `ch23/config.md` records.

The section that puts an inductor and then a capacitor alone on an AC source
and asks what each does to the current. Three headers of the book's own, three
figures of the same shape (a circuit and a pair of curves against time), two
worked examples that run the same arithmetic at 60 Hz and at 10 kHz, four
equations, two glossary terms, six conceptual questions and thirteen problems
of which six are keyed. One page (rule 11).

## Sub-concepts (page headers)

The module prints all three headers itself and they are kept as the book
writes them (`ch23/config.md`, rule 3). The opening paragraph, which stands
above the first header in the book, is set as the first paragraph of the first
span.

1. `inductors-and-inductive-reactance` **Inductors and Inductive Reactance**
   (book: the opening paragraph, the inductor on the source, Figure 23.43, the
   note AC Voltage in an Inductor, the two equations and Example 23.10).
2. `capacitors-and-capacitive-reactance` **Capacitors and Capacitive
   Reactance** (book: the capacitor on the source, Figure 23.44, the note AC
   Voltage in a Capacitor, the two equations, Example 23.10 and the paragraph
   on what happens as the frequency goes to zero and to infinity).
3. `resistors-in-an-ac-circuit` **Resistors in an AC Circuit** (book: the
   reminder, Figure 23.45 and the note AC Voltage in a Resistor).

The book's three boxed notes are kept verbatim where it stands them
(`ch23/config.md`). The one cross-reference, to the preceding section, is
plain text. The learning objectives, the section summary and the two glossary
terms come out of the running text into the tables and the views (rule 4).

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| inductor-voltage-leads-current | idea | inductors-and-inductive-reactance | the walk round Figure 23.43(b) from point a to point d; the boxed note AC Voltage in an Inductor |
| inductive-reactance | result | inductors-and-inductive-reactance | $X_L = 2\pi fL$ and $I = V/X_L$; the units argument $1\ \text{H} = 1\ \Omega\cdot\text{s}$; Example 23.10 at 60 Hz and 10 kHz |
| capacitor-voltage-follows-current | idea | capacitors-and-capacitive-reactance | the walk round Figure 23.44(b); the boxed note AC Voltage in a Capacitor |
| capacitive-reactance | result | capacitors-and-capacitive-reactance | $X_C = 1/2\pi fC$ and $I = V/X_C$; Example 23.11 at the same two frequencies; the limits at zero and at very high frequency |
| resistor-voltage-in-phase | idea | resistors-in-an-ac-circuit | Figure 23.45 and the boxed note AC Voltage in a Resistor; "There is no frequency dependence to the behavior of plain resistance" |
| filtering-by-frequency | skill | inductors-and-inductive-reactance | the Discussion of Example 23.10, the inductor in series with a computer or a loudspeaker; reinforced by the Discussion of Example 23.11, the capacitor that rids a sound system of its 60 Hz hum |

The section leans on `self-inductance`, `inductance` and `henry` (23.9),
`rl-circuit` (23.10), `capacitor`, `capacitance` and `charging-a-capacitor`
(19.5 and 21.6), and `alternating-current`, `rms-values` and `ac-ohms-law`
(20.5); the coverage rows mark each as used where the text uses it.

## Figures

id · replaces or Sim · concepts · value add · moving or still · sliders ·
headline · graph · 3D

1. `sim-ac-phase` · replaces **Figure 23.43 + 23.44 + 23.45**, the three
   circuits the book draws, each with its pair of curves against time ·
   inductor-voltage-leads-current, capacitor-voltage-follows-current,
   resistor-voltage-in-phase, inductive-reactance, capacitive-reactance ·
   **the fold `ch23/config.md` left for this plan to argue, and it is taken**:
   the three book figures are one scene drawn three times, a source with one
   element on it and a graph of the voltage across that element and the
   current through it, and the whole content of the section's first half is
   the difference between the three. Three separate figures would put that
   difference on three screens the reader must hold in their head at once;
   one figure with a choice of element puts it under one button, and the
   quarter cycle that the choice moves the current by is drawn as a bracket
   between the two zero crossings. Value add: intuition, variation by slider
   and flow by animation (rule 24.4) · **moving**: the lead and the lag are
   the content, and a phase difference cannot be seen in a still drawing
   without the reader animating it in their head, which is exactly the
   mental-translation test of rule 24.3. The pointer runs along both curves
   together and the arrow in the circuit reverses with the current, so the
   reader sees the current turn round a quarter cycle before or after the
   voltage does. One loop is two periods of the source in five real seconds,
   whatever the frequency, so that the shape stays legible at 10 kHz ·
   a choice of element (inductor, capacitor, resistor; rule 26.1, since an
   element is a discrete state), $\kf$ (20 to 2000 Hz, step 10, default 60,
   frequency) and one value slider per element, only the chosen one shown:
   $\kLind$ (0.50 to 10.0 mH, default 3.00, inductance), $\kCap$ (0.50 to
   20.0 µF, default 5.00, capacitance) and $\kRes$ (1 to 200 Ω, default 20,
   resistance). The rms voltage is fixed at the 120 V both examples apply, so
   that the figure loads on Example 23.10 · "Across a 3.00 mH inductor at
   60.0 Hz the reactance is 1.13 Ω, the rms current is 106 A, and the current
   reaches its peak a quarter of a cycle after the voltage does." · graph
   below, since the scene is a horizontal circuit · 2D. Readout: $\kXL = 2\pi
   \kf\kLind$ or $\kXC = 1/2\pi \kf\kCap$ or $\kRes$ with the live numbers,
   and a second line giving $\kIcur = \kV/\kXL$, $\kV/\kXC$ or $\kV/\kRes$.
   Five things are named — the source, the element, the current in the wire,
   the voltage curve and the current curve — and no two of them can meet at
   any setting, so the labels are on (rule 26.7). Draws voltage, current,
   time, frequency, inductance, capacitance and resistance.
2. `sim-reactance-against-frequency` · Sim (it replaces no figure of the
   book) · inductive-reactance, capacitive-reactance, filtering-by-frequency ·
   value add: variation by slider and intuition (rule 24.4). The section's
   two results run opposite ways with frequency and each worked example
   computes only two points of its own curve, 60 Hz and 10 kHz. The reader is
   asked to conclude from those four numbers that an inductor blocks high
   frequencies and a capacitor low ones, which is the section's one skill and
   the thing five of its six conceptual questions turn on. Here both curves
   are drawn over four decades on one frame, they cross, and the current each
   element passes at 120 V is drawn beside them as an arrow that grows and
   shrinks with the frequency · **still**: the figure answers its sliders, the
   quantities on it are rms values that have had the time averaged out of them
   already, and there is no clock in a reactance; no cycle and no transport
   (rule 14) · $\kf$ (60 to 10000 Hz, step 20, default 60, frequency, with
   soft detents at the book's own 60 Hz and 10 kHz), $\kLind$ (0.50 to
   10.0 mH, default 3.00, inductance) and $\kCap$ (0.50 to 20.0 µF, default
   5.00, capacitance) · "At 60.0 Hz the 3.00 mH inductor offers 1.13 Ω and
   passes 106 A, while the 5.00 µF capacitor offers 531 Ω and passes
   0.226 A." · graph below a strip carrying the two elements and their
   currents; the graph is a log-log frame, since four decades of frequency and
   five of ohms will not fit on a linear one and the two results are
   straight lines of opposite slope when they are drawn this way, which is
   the point of drawing them together · 2D. Readout: $\kXL = 2\pi \kf\kLind$
   and $\kXC = 1/2\pi \kf\kCap$ with the live numbers, and a second line
   giving both currents at the fixed 120 V. Six things are named — the two
   curves, the two elements, the crossing and the marked frequency — and the
   labels are on, since nothing moves and the two curves part company
   everywhere except at the crossing (rule 26.7). Draws frequency,
   resistance, current, inductance and capacitance.

Photographs: the section prints none, so none is kept and none is dropped.

Figures that serve exercises: the book's unnumbered image of the two capacitor
filter circuits (`import-auto-id1169738245387`, `Figure_24_11_04a.jpg`, 250
wide) sits between the fifth and the sixth conceptual questions rather than
inside either. It travels on the `figure` field of both of those cards, as
`ch23/config.md` decides, and on the tenth problem's card as well, which is
kept and which cannot be read without it. It takes no number and no figures
row.

Extra simulations (rule 15), thought through, judged and decided:

- **Both reactances on one frame with the currents they pass
  (`sim-reactance-against-frequency`): built.** The reasoning is in its plan
  line above.
- A filter with a load on it, the signal going in and what is left coming
  out. Left: a series element and a load is a voltage divider whose two
  voltages are a quarter cycle apart and add as the sides of a right
  triangle, which is 23.12's business and which the reader has not been
  taught by this page; the figure could not be read from ideas the book has
  given by here (rule 26.5).
- A phasor diagram, the two vectors turning with the voltage and the current
  a quarter turn apart. Left: the book introduces no phasor in this chapter
  and 23.12 reaches the same result with its impedance triangle, so a phasor
  here would be a notation the reader has to learn twice.
- The charge on a capacitor's plates drawn against the current that carries
  it. Left: it is one line of the figure that is built, where the plates are
  drawn charged and discharged as the pointer runs, rather than a scene of
  its own.

**Figure pass, 2026-09-16 (Claude Fable 5.1).** `sim-ac-phase`: the three-element choice stacked into three rows beside two sliders and is a dropdown (rule 26.1). `sim-reactance-against-frequency` was judged and left as built.

## Exercises

- Every item is set at the end (`ch23/config.md`; the module prints no Check
  Your Understanding box, so the page hosts no inline card).
- 6 conceptual questions, none keyed by the book, each an open item with an
  AI-marked suggested approach: `cq1` (the hearing aid and presbycusis,
  Analyze), `cq2` (a large inductance or a large capacitance against a 100 Hz
  hum, Understand), `cq3` (the plug-in unit that keeps high-frequency noise
  out of a computer, Understand), `cq4` (does inductance depend on current or
  frequency, and does inductive reactance, Understand), `cq5` (why the
  capacitor of (a) is a low-frequency filter and that of (b) a high-frequency
  one, Analyze, carrying the book's image) and `cq6` (the same two circuits
  with inductors in place of the capacitors, Analyze, carrying the image).
- 6 problems keyed and kept: `p1` (531 Hz), `p3` (1.33 nF), `p5` (2.55 A and
  1.53 mA), `p7` (63.7 µH), `p9` (21.2 mH and 8.00 Ω) and `p11` (3.18 mF and
  16.7 Ω, carrying the book's image, since the problem names circuit (b)).
- 7 problems left out, having no answer in the book's key: the inductance for
  a 20.0 kΩ reactance at 500 Hz, the frequency at which an 80.0 mF capacitor
  has 0.250 Ω, the current a 0.250 µF capacitor passes at 60 Hz and at
  25.0 kHz, the capacitance a 20.0 Hz source and a 2.00 mA current imply, the
  capacitor of circuit (a) at 120 Hz and 1.00 MHz, the Unreasonable Results
  item on the EEG signal and the Construct Your Own Problem item on an
  inductor in series with a computer. All are named in `notes` and in
  `exercise_notes`.
- No AP item: the chapter's eight sit two apiece in 23.1, 23.5, 23.7 and 23.8
  (`ch23/config.md`), and none of them tests this section.
- Nothing is taken from another section and nothing of this section's own is
  held back.
- No generated questions: each of the six nodes has a book exercise that
  tests it.
- Weights: the reactance problems give their own result the full value;
  `p5` and `p9` give `filtering-by-frequency` 4 and 5, since each is an
  inductor chosen for what it does to a high frequency; `p11` gives
  `capacitive-reactance` the full value and `filtering-by-frequency` 5;
  `cq1`, `cq2`, `cq3`, `cq5` and `cq6` give `filtering-by-frequency` the full
  value with the reactance they turn on at 4 or 5; `cq4` gives
  `inductive-reactance` the full value and `inductance` 4.

## Views

- Formulas: the four equation rows `ch23/chapter.json` gives this section,
  all four important, anchored below.
- Definitions: the two glossary terms, inductive reactance and capacitive
  reactance, and the three variable rows $X_L$, $X_C$ and $C$.
- Concept map: the six nodes above with their edges into 19.5, 20.5, 21.6,
  23.9 and 23.10.

## Colour

The page binds inductance, capacitance, resistance, frequency, voltage,
current and time, which is exactly what `ch23/COLOR.md` gives 23.11. The two
reactances wear the resistance hue beside the resistance itself, as the
chapter's plan requires and as the section's own argument that they are an
effective resistance demands; they are told apart by their subscripts and by
their labels. The voltage across the element and the current through it wear
their own hues on the circuit and on the graph, which is what lets the reader
see which of the two leads. The frequency is the axis of the second figure and
the slider of both; the time is the axis of the first. The inductance and the
capacitance wear their own hues on their sliders and in the readouts. The
source, the wires, the coil, the plates of the capacitor and the body of the
resistor are ink, since a device is never tinted. Nothing on the page uses the
categorical or the element palette.

## Wanted at chapter level

- `variables` `23.11/X_L` → anchor `23.11-inductors-and-inductive-reactance`
- `variables` `23.11/X_C` → anchor
  `23.11-capacitors-and-capacitive-reactance`
- `variables` `23.11/C_cap` → anchor
  `23.11-capacitors-and-capacitive-reactance`
- `equations` `eq-inductive-reactance` → anchor
  `23.11-inductors-and-inductive-reactance`
- `equations` `eq-ohms-law-inductor` → anchor
  `23.11-inductors-and-inductive-reactance`
- `equations` `eq-capacitive-reactance` → anchor
  `23.11-capacitors-and-capacitive-reactance`
- `equations` `eq-ohms-law-capacitor` → anchor
  `23.11-capacitors-and-capacitive-reactance`

### Decided by the chapter pass (2026-09-16)

- All three `variables` rows and all four `equations` rows are anchored as
  asked.
- The filter image travels on the two conceptual questions and on the tenth
  problem, which is the item that names circuit (b); `config.md` names two and
  is right about the questions.
- The flux and inductance hues were checked against voltage and capacitance on
  this page in the browser, in both themes; they read apart.
