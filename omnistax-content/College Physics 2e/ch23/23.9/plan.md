# Plan: 23.9 Inductance (m42420)

Source: `source.md`, converted from the CNXML module. Status: built 2026-09-15
without a review stop, on Chen's instruction to finish the book in waves
without check-ins; the per-section stop of rule 2 and the plan review of rule 5
are replaced by this file, written before the section was built and left for
review after, as `ch23/config.md` records.

The section names the quantity the whole chapter has been circling. Induction
has been described so far by its effects, and this is where it is given a
number: inductance, how effective a device is at inducing an emf, in another
device or in itself. The book builds it in one line of argument. Two coils side
by side induce emfs in one another, and the constant between the emf in one and
the rate of change of current in the other is the mutual inductance $M_{ind}$.
The same device does it to itself, and the constant is then the self-inductance
$L_{ind}$. The unit of both is the henry, one ohm-second. Equating Faraday's law
with the definition gives $L = N\Delta\Phi/\Delta I$, which is always valid, and
carrying it through the solenoid's own field gives the one shape whose
inductance the book calculates, $L = \mu_0 N^2 A/\ell$. The section closes on a
second way of seeing the opposition: energy is stored in the magnetic field, and
$E_\text{ind} = \frac{1}{2}LI^2$ cannot be built up or taken away in no time.

Seven equations, five figures (23.37 to 23.41, four sketches and one
photograph), two worked examples, two book headers, no boxed note, no table, no
Check Your Understanding box, no AP item, three conceptual questions and
fourteen problems, six of them keyed. One page (rule 11).

## Sub-concepts (page headers)

The book prints two headers of its own, Inductors and Energy Stored in an
Inductor, and `ch23/config.md` keeps them as the book writes them. The first is
long enough to want dividing, and it divides where the book's own argument
turns, from the constant between two devices to the constant of one device and
then to the one geometry the book can calculate; the headers of the three parts
are then the agent's, with the book's own words kept on the first.

1. `inductors` **Inductors** (book: induction as a process with an effective-
   ness; mutual inductance and $\text{emf}_2 = -M\Delta I_1/\Delta t$; the
   henry; the symmetry of the reverse process; when a large $M$ is wanted and
   when it is not; counterwinding; Figures 23.37 and 23.38). The glossary terms
   inductance, mutual inductance and henry belong here.
2. `self-inductance` **A device induces an emf in itself** (book:
   $\text{emf} = -L\Delta I/\Delta t$, the inductor and its symbol, the henry
   again, the 1.0 H inductor shutting off 10 A in 1.0 ms and the ten thousand
   volts that follow, the camera flash; Figures 23.39 and 23.40). The glossary
   terms self-inductance and inductor belong here.
3. `calculating-inductance` **Calculating an inductance from the geometry**
   (book: $L = N\Delta\Phi/\Delta I$ derived by equating the two expressions for
   the emf, the solenoid carried through to $L = \mu_0 N^2 A/\ell$, Example 23.7,
   the traffic light and the airport gate; Figure 23.41).
4. `inductor-energy` **Energy Stored in an Inductor** (book, the book's own
   header: the energy argument for the opposition, $E_\text{ind} =
   \frac{1}{2}LI^2$, its likeness to the energy in a capacitor, Example 23.8).
   The glossary term energy stored in an inductor belongs here.

Learning objectives, section summary and glossary come out of the running text
into the tables and views. Cross references: Transformers, named in the book's
words with no link, and the two worked examples, which the app links where one
points at the other on this page.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| inductance | idea | inductors | the opening paragraph; Figure 23.37; conceptual question 1 |
| mutual-inductance | result, eq-mutual-inductance | inductors | the display equation and its reverse; Figure 23.37; problem 1 |
| henry | idea, eq-henry | inductors | the units paragraph; conceptual question 3 |
| counterwinding-cancels-inductance | skill | inductors | the clothes dryer paragraph; Figure 23.38; problem 4(c) |
| self-inductance | result, eq-self-inductance | self-inductance | the display equation; Figures 23.39 and 23.40; problems 2, 3 and 5 |
| inductance-from-flux-and-current | result, eq-inductance-from-flux | calculating-inductance | the equated forms; the solenoid derivation |
| solenoid-inductance | result, eq-solenoid-inductance | calculating-inductance | the derivation; Example 23.7; problem 4 |
| energy-stored-in-an-inductor | result, eq-inductor-energy | inductor-energy | the display equation; Example 23.8; problems 3(b) and 6 |

The section leans on `induction` and `magnetic-flux` (23.1), `faradays-law`
(23.2), `lenzs-law` (23.2), `transformer-voltage` (23.7), `solenoid-field`
(22.9), `electric-current` (20.1), `emf` (21.2), `capacitor-energy` (19.7) and
`specific-heat` (14.2), marked as used where the text uses them.

## Figures

id · replaces · concepts · value add · motion · sliders and choices · headline ·
graph · depth

1. `sim-mutual-inductance` · replaces Figure 23.37 (two coils inducing emfs in
   one another) · mutual-inductance, inductance, henry · **flow by animation
   and variation**: the book's still says the current in coil 1 is changing and
   asks the reader to imagine the needle on coil 2 answering it, which is the
   one thing a still cannot do; the source is driven for the reader, the field
   between the coils thickens and thins with the current, and the needle follows
   the rate and not the current, so the reader sees the deflection fall to zero
   at the top of every swing where the current is greatest · **moving**: the
   whole content is a rate, $\Delta I_1/\Delta t$, and the figure registers a
   cycle of 4.0 s carrying four full swings of the source and takes the transport
   · the mutual inductance $M$ (0.2 to 8.0 mH, default 1.8 mH, the answer to the
   section's first problem, inductance), the peak current in the driven coil
   $\kIocur$ (1 to 10 A, default 5.0 A, current), and a choice of which coil is
   driven, coil 1 or coil 2, as a button row (rule 26.1), since the book's own
   sentence is that nature is symmetric here and the same $M$ works both ways ·
   "The current in coil 1 is falling at 31.4 A/s, and the 1.8 mH between the
   coils induces 57 mV in coil 2." · none: the current and the emf are carried on
   the driven coil's own arrow and on the needle, and a graph against time would
   crowd a figure that already has two coils and a meter in it · **2D from a
   locked view** (rule 28.2, and `ch23/config.md` names this figure for one):
   the book prints the two coils in perspective, their turns drawn as ellipses
   on a common axis, so the coils are projected from the book's own viewpoint
   with `view()`/`face()` and do not orbit. Six labels, all on fixed parts of
   the frame, so they are on (rule 26.7). Readout:
   $\kemftwo = -\kMind\Delta\kIcurone/\kdt$ with the live numbers; small line on
   the needle standing at zero where the current is greatest. Draws inductance,
   current, voltage, magnetic-field.
2. `sim-counterwound` · replaces Figure 23.38 (the counter-wound heater
   element) · counterwinding-cancels-inductance, inductance · **variation**: the
   book draws one winding and says in the caption that the fields cancel; the
   reader cannot see a cancellation in a still, and here the winding is a choice
   and the field inside the cylinder is drawn, so the reader watches the field
   fall to nothing and the inductance with it when the second layer is wound
   back the other way, which is exactly what part (c) of the section's fourth
   kept problem asks for · **still**: a winding is a state of the device and not
   a process; nothing in the figure has a clock in it, so it registers no cycle
   and takes no transport (rule 24.9) · the number of turns $N$ (10 to 60,
   default 40, ink), the current through the element $\kIcur$ (1 to 10 A,
   default 6.0 A, current), and a choice of winding, wound one way or
   counter-wound in two layers, as a button row · "Counter-wound, the two layers
   of 20 turns carry the same current in opposite directions, the field inside
   the element cancels, and its inductance is zero." · none · **2D from a locked
   view** (rule 28.2, named in `ch23/config.md`): the book draws the element as
   a cylinder seen in perspective with the winding running along it, which is
   the drawing the reader has to read the cancellation off, so the cylinder is
   projected from the book's own viewpoint and does not orbit. Five labels on
   fixed parts, so they are on. Readout: $\kLind = \mu_0 N^2 A/\ell$ for the
   single winding and zero for the counter-wound one; small line on why the case
   of a dryer is what this protects. Draws inductance, magnetic-field, current.
3. `sim-self-inductance` · replaces Figure 23.39 (the circuit symbol for an
   inductor) · self-inductance, henry · **flow by animation and variation**: the
   book's figure is the bare symbol, and the paragraph beside it is the one the
   reader most needs to see, the 1.0 H inductor whose 10 A is shut off in 1.0 ms
   and answers with ten thousand volts; the symbol is drawn in its circuit and
   the switch is opened for the reader, so the induced emf is watched rising as
   the interval is shortened and an arc is drawn across the switch contacts
   where it passes the few thousand volts that damage switching equipment ·
   **moving**: the emf is a rate and exists only while the current is falling,
   so the figure registers a cycle of 4.5 s, the switch closed, opened and the
   current dying away, and takes the transport · the self-inductance $\kLind$
   (0.1 to 2.0 H, default 1.0 H, inductance), the current through it $\kIcur$
   (1 to 20 A, default 10 A, current) and the time the current is taken to fall
   in, $\kdt$ (0.2 to 20 ms, default 1.0 ms, time; the drawing slows it so that
   a millisecond can be watched, and the readout states the true number, rule
   28.4) · "Ten amperes through a 1.0 H inductor, shut off in 1.0 ms, induce
   10 000 V, which is enough to strike an arc across the opening switch." ·
   graph below the circuit: the current falling and the induced emf standing
   against the same time axis, which is where the reader sees that the emf lives
   only in the interval while the current changes (a horizontal scene, so the
   graph goes below, and both quantities carry their own hues) · **2D, flat**
   (rule 28.1): a circuit diagram is a relation and not an arrangement in space.
   Four labels on fixed parts, so they are on. Readout:
   $\kemf = -\kLind\kdIcur/\kdt$ with the live numbers; small line on the sign,
   which says the emf opposes the fall. Draws inductance, current, voltage,
   time.
4. `sim-camera-flash` · replaces Figure 23.40 (the battery, inductor pair and
   capacitor of a camera flash) · self-inductance · **flow by animation**: the
   book draws the switch in both its positions with dashed arrows between them
   and asks the reader to imagine the switching repeated many times while the
   voltage is boosted; the switch is thrown for the reader and the charge on the
   capacitor is drawn climbing from a battery of 1.5 V to over a thousand volts,
   which is the sentence the paragraph makes and the still cannot · **moving**:
   the oscillator's whole point is repetition in time, so the figure registers a
   cycle of 6.0 s carrying many switchings and takes the transport · the
   self-inductance of the pair $\kLind$ (0.5 to 5.0 mH, default 2.0 mH,
   inductance), the battery's voltage $\kV$ (1.5 to 6.0 V, default 1.5 V,
   voltage) and the time the switch takes to break the current $\kdt$ (2 to
   40 µs, default 5 µs, time) · "After 46 switchings the capacitor stands at
   330 V, charged in steps by the 399 V the 2.0 mH pair induces each time the
   switch breaks its 1.00 A." · graph beside the circuit: the capacitor's
   voltage climbing in steps against the number of switchings, which is the
   staircase the paragraph describes (the circuit is roughly square, so the
   graph sits beside it) · **2D, flat** (rule 28.1). Five labels on fixed parts,
   so they are on. Readout: $\kemf = -\kLind\kdIcur/\kdt$ with the live numbers
   and the voltage the capacitor has reached; small line that the whine the
   passage mentions is this switching heard. Draws inductance, voltage, current,
   time.
5. `sim-solenoid-inductance` · Sim (the book calculates the solenoid's
   inductance and prints no figure of it) · solenoid-inductance,
   inductance-from-flux-and-current · **variation and intuition**: the
   derivation is four lines of algebra ending in $L = \mu_0 N^2 A/\ell$, and the
   thing worth seeing is what that formula says about a real coil — that the
   inductance goes as the square of the turns and not as the turns, and that
   stretching a coil out without changing its winding weakens it; the solenoid
   is drawn to scale from the sliders with its field inside, and the reader
   walks Example 23.7 and the section's fourth kept problem with the same
   figure · **still**: an inductance is a property of a geometry, and nothing in
   the figure has a clock; it answers its sliders and registers no cycle · the
   number of turns $N$ (50 to 1000, default 200, ink), the length $\ell$ (5 to
   50 cm, default 10.0 cm, ink) and the diameter (1 to 10 cm, default 4.00 cm,
   ink), the book's own numbers from Example 23.7 · "Two hundred turns on a
   10.0 cm solenoid of 4.00 cm diameter give a self-inductance of 0.632 mH." ·
   graph below the solenoid: the inductance against the number of turns with
   the working point pinned on it, so the square law is a shape and not a
   sentence (the solenoid is a horizontal scene, so the graph goes beneath it
   and the scene keeps the full width of the canvas at one honest scale) · **2D, flat** (rule 28.1): a solenoid's
   length, area and turns are three numbers, and a side view carries all three.
   Five labels on fixed parts, so they are on. Readout:
   $\kLind = \mu_0 N^2 A/\ell$ with the live numbers, the substitution set out
   as the example sets it out; small line on $\kLind = N\kdPhi/\kdIcur$, the
   relation the solenoid result is carried through from. Draws inductance,
   magnetic-field, magnetic-flux.
6. `sim-inductor-energy` · Sim (the book prints no figure for its second
   result) · energy-stored-in-an-inductor · **variation and intuition**: the
   section says only that the energy is stored in the magnetic field and that it
   takes time to build up and to deplete, and the figure gives that a picture —
   the field inside the same solenoid drawn at the density the current sets, the
   stored energy as a bar beside it, and the curve of $E$ against $I$ showing
   that doubling the current stores four times the energy, which is why the
   research solenoid of the section's third kept problem holds 125 kJ ·
   **still**: a stored energy is a state of the device at a given current, and
   the figure answers its sliders with no clock in them · a choice of inductor,
   the 0.632 mH solenoid of Example 23.7, a 60.0 mH inductor and the 25.0 H
   research solenoid, which are the section's own three and are discrete states
   and so a button row and not a slider (rule 26.1), and the current $\kIcur$
   (1 to 100 A, default 30.0 A, current), the numbers of Example 23.8 · "A current of 30.0 A through the
   0.632 mH solenoid of the last example stores 0.284 J in its field." · graph
   below the coil: $E_\text{ind}$ against the current with the working point
   pinned, the square law again, the stored energy also drawn as a bar beside
   the coil (a horizontal scene, so the graph goes beneath it) · **2D, flat** (rule 28.1). Four labels on
   fixed parts, so they are on. Readout: $\kEind = \frac{1}{2}\kLind\kIcur^2$
   with the live numbers; small line that this is the energy a spark carries off
   when the current is switched away, which is the discussion of Example 23.8.
7. `photo-security-gate` · keeps Figure 23.41 (the airport security gate) ·
   solenoid-inductance · **kept photograph** (rule 14): the passage is about the
   gate, names it, and says the self-inductance of its circuit is affected by
   any metal in the path, so it is the thing the paragraph is about and not
   decoration; it is kept with the book's caption and its credit, at the 250 the
   CNXML gives it.

Figure 23.39, the bare circuit symbol, is not kept as a photograph or a copy: it
is the symbol of the device the passage introduces, and it is drawn inside
`sim-self-inductance` as the element of the circuit, which is how the reader
will meet it in 23.10, 23.11 and 23.12. The image travels on that figure's row
as its original.

Extra simulations considered and not offered: a figure for the traffic-light
loop under the road, which would be `sim-solenoid-inductance` again with a car
drawn over it and no new quantity; and a side-by-side of the inductor and the
capacitor, which the book's one sentence of likeness does not carry and which
23.12 will build properly when the energy sloshes between them.

**Figure pass, 2026-09-16 (Claude Fable 5.1).** `sim-inductor-energy`: the three named devices stacked into three rows and are a dropdown (rule 26.1). `sim-self-inductance`: the source's name is set clear of the battery symbol. The other four figures were judged in both themes and left as built.

## Exercises

No Check Your Understanding box and no AP item, so every exercise sits in the
Exercises tab (rule 12).

- Three conceptual questions, all kept, all open with an AI-marked suggested
  approach: placing two flat coils for the greatest and least mutual
  inductance, shaping a wire for the greatest and least self-inductance, and
  verifying that $\text{T}\cdot\text{m}^2/\text{A} = \Omega\cdot\text{s} =
  \text{H}$.
- Fourteen problems, of which six carry the book's answer and are kept: the two
  coils and their 1.80 mH, the 7.50 mH inductor and its 3.60 V, the 25.0 H
  research solenoid in four parts, the precision laboratory resistor in three
  parts, the 20.0 A switched off in 1.50 ms giving 60.0 mH, and the
  superconducting MRI solenoid in two parts. The eight with no answer in the
  book are left out and named in `notes`, among them the two that ask for a
  derivation of the units and the Unreasonable Results item.
- Concepts, Bloom levels, weights and hints are the agent's and are marked as
  such in `exercise_notes`. Numeric answers take the 2% tolerance the chapter
  uses.

## Views

- Formulas: seven equations, six of them important and the reverse form of the
  mutual inductance not.
- Definitions: the five variables of the section; the six glossary terms.
- Concept map: the eight nodes with their edges into 14.2, 19.7, 20.1, 21.2,
  22.9, 23.1, 23.2 and 23.7.

## Colour

The page binds `inductance`, `magnetic-flux`, `voltage`, `current`,
`magnetic-field` and `energy`, which is what `ch23/COLOR.md` gives 23.9, and one
the list does not give it:

- `time`, drawn by `sim-self-inductance` and `sim-camera-flash`: the interval
  the current is taken to fall in is the slider that makes the section's own
  arithmetic visible, since ten amperes shut off in a millisecond and the same
  ten amperes shut off in a second are the difference between ten thousand volts
  and ten, and it carries the horizontal axis of the graph beneath the circuit.
  `ch23/COLOR.md` binds `time` wherever a figure has a clock in it, and these
  two have one.

The inductance hue is on the coil whose inductance a slider sets, on the
inductor symbol in every circuit the page draws, on the henries printed beside
it and on every readout that writes $L$ or $M$, as `ch23/COLOR.md` asks; mutual
and self-inductance wear the same hue and are told apart by their symbols and
their labels. Every device is ink: the coils and their turns, the cylinder of
the heater element, the dryer's case, the battery, the capacitor plates, the
switch, the meter case and the solenoid's former. The number of turns $N$, the
area $A$, the length $\ell$, the diameter and $\mu_0$ stay in ink with them. The
field drawn inside a solenoid or between two coils is in the field hue and the
flux counted through a turn is in the flux hue, never the same one.

## Wanted at chapter level

- variables `M_ind` → 23.9-inductors
- variables `L_ind` → 23.9-self-inductance
- variables `ΔI_curr` → 23.9-self-inductance
- variables `E_ind` → 23.9-inductor-energy
- variables `μ_0` → 23.9-calculating-inductance
- equations `eq-mutual-inductance` → 23.9-inductors
- equations `eq-mutual-inductance-reverse` → 23.9-inductors
- equations `eq-henry` → 23.9-inductors
- equations `eq-self-inductance` → 23.9-self-inductance
- equations `eq-inductance-from-flux` → 23.9-calculating-inductance
- equations `eq-solenoid-inductance` → 23.9-calculating-inductance
- equations `eq-inductor-energy` → 23.9-inductor-energy
- equations `eq-henry` has no `ktex`; the page writes the unit as plain text and
  the row wants none, so nothing is needed unless the formulas view prefers one.
- `ch23/COLOR.md` gives 23.9 six types; the page binds seven, adding `time` for
  the switching interval of `sim-self-inductance` and `sim-camera-flash`, for
  the reason under Colour above. The chapter pass may write it into that file's
  list for 23.9.

### Decided by the chapter pass (2026-09-16)

- All five `variables` rows and all seven `equations` rows are anchored as
  asked.
- `eq-henry` keeps no `ktex`: the henry is a unit and the page sets it as
  text.
- `ch23/COLOR.md` now gives 23.9 `time` as well as its six.
- The inductance hue was checked against voltage and capacitance on this page
  in the browser, in both themes; the three read apart.
