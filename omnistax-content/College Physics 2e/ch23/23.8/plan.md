# Plan: 23.8 Electrical Safety: Systems and Devices (m42416)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-15
without a review stop, on Chen's standing instruction to finish the book in
waves; the per-section stop of rule 2, the plan review of rule 5 and the user
picks of rule 15 are replaced by this file, written before the section was
built and left for review after, as Chapters 1 to 22 did it.

The chapter's one section of applied safety engineering. It prints no equation
and no new symbol, and it asks for none: what it teaches is a set of
arrangements of wires, and the question the reader must be able to answer of
each is what path a current would take if something went wrong. Eight sketch
figures (23.29 to 23.36), no photograph, no worked example, no boxed note, no
Check Your Understanding box, three glossary terms, two AP items, three
conceptual questions and one problem, which is keyed. One page (rule 11).

## Sub-concepts (page headers)

The module prints no header of its own, so all five are the agent's (rule 3).

1. `three-wire` **The two hazards, and the three-wire system** (book: the
   opening paragraph on thermal and shock hazards; the paragraph that names
   the circuit breaker and the case; Figures 23.29, 23.30 and 23.31; the
   paragraph on the three connections to earth; the paragraph on insulation
   colour-coding). The concept `three-wire-system` is introduced here.
2. `grounded-case` **Why the case of an appliance is grounded** (book: the
   paragraph on the two-wire system, the worn insulation and the doubly
   insulated appliance; Figure 23.32; the paragraph on the emf induction
   raises on a case and the leakage current it drives; Figure 23.33). The
   concept `grounding-the-case` is introduced here.
3. `gfi` **The ground fault interrupter** (book: the paragraph defining the
   GFI and giving the 5 mA trip level; Figures 23.34 and 23.35; the paragraph
   on equal and opposite emfs in the coil). `ground-fault-interrupter` is
   introduced here.
4. `isolation` **The isolation transformer** (book: the paragraph on the
   isolation transformer and Figure 23.36). `isolation-transformer` is
   introduced here.
5. `beyond-basics` **How far these basics go** (book: the closing paragraph on
   hospitals and microshock-sensitive patients). It introduces nothing and
   comes back to the shock hazard.

Cross references to other sections are plain text, as every page of this book
writes them; this section names none. The learning objective, the section
summary and the three glossary terms come out of the running text into the
tables and the views (rule 4).

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| three-wire-system | idea | three-wire | Figures 23.29 and 23.30 side by side in `sim-three-wire`; the plug of `sim-plug`; the second conceptual question |
| grounding-the-case | result | grounded-case | `sim-worn-insulation` with the earth wire broken and intact; `sim-case-emf`; the section's one problem |
| ground-fault-interrupter | result | gfi | `sim-gfi`, where the two currents are compared and the trip level is 5 mA; the second AP item; the third conceptual question |
| isolation-transformer | result | isolation | `sim-isolation`, where the person touching one output wire is in no complete circuit; the first AP item |

The section leans on `thermal-hazard`, `shock-hazard` and `short-circuit`
(20.6), `alternating-current` (20.5), `ohms-law` (20.2), `induction` (23.1),
`faradays-law` and `lenzs-law` (23.2) and `transformer` (23.7); the coverage
rows mark each as used where the text uses it.

## Figures

id · replaces or Sim · concepts · what moves or still · sliders and choices ·
headline · graph · 3D

1. `sim-three-wire` · replaces Figure 23.29 + 23.30, the same appliance on an
   AC supply drawn first with nothing to protect it and then with the three
   wires (fold: the book draws one circuit twice, and what the reader must see
   is the difference between the two drawings, which a single live one shows
   and two stills do not) · three-wire-system · **still**: a circuit sitting at
   its working current is a state, and a fault is a state too, so the figure
   answers its controls and registers no cycle (rule 14; the chapter's config
   makes this decision for every figure of 23.8) · a choice of wiring, no
   safety features or the three-wire system, since which wires are present is a
   state and not a quantity (rule 26.1); $\kRes$, the resistance of the
   appliance (4 to 120 Ω, default 12.0, resistance); and the rating of the
   circuit breaker, a slider with soft detents at 15, 20 and 30 A (current),
   default 20, which is the breaker the section's own problem names ·
   "The appliance draws 10.0 A from the 120 V supply, which the 20 A breaker
   carries." · none: the circuit with its three earth/ground connections
   marked is the whole picture · 2D, flat: a schematic has no depth in it
   (rule 28.1). Value add, variation by choice and by slider: the reader sees
   which conductors the three-wire system adds and what each is for, and sees
   the breaker open when the appliance draws more than its rating. Readout:
   $\kIcur = \kVrms/\kRes$ with the live numbers; small line on the neutral and
   the case being held at zero volts. Draws voltage, current, resistance.
2. `sim-plug` · replaces Figure 23.31, the three-prong plug in its outlet ·
   three-wire-system · **still**: a plug in an outlet does not move, and what
   changes is which conductor is there · one choice and no slider, because the
   content of this figure is three states and not a quantity: a three-prong
   plug, a two-prong plug on a doubly insulated appliance, and a three-prong
   plug whose third prong has been cut off, which is the case the section's own
   prose names. A slider was looked for and none was found that changes the
   idea rather than the scene (rule 24.6) · "The three-prong plug carries the
   live, the neutral and the earth/ground wire to the appliance." · none · 2D,
   flat. Value add, variation by choice: the reader sees which conductor is
   missing in each of the three plugs and what is then unprotected, which is
   the paragraph the book prints two pages later. The three wires are named
   and are drawn in ink, never in their insulation colours, because the
   section's own note is that those colours vary from one region to another;
   the readout's small line says so. Readout: the voltage each of the three
   conductors sits at, and the case's. Draws voltage, current.
3. `sim-worn-insulation` · replaces Figure 23.32, the worn live wire touching
   the metal case, with the earth/ground connection broken in (a) and intact in
   (b) · grounding-the-case · **still**: a fault is a state and not a process,
   and the two panels of the book's figure are the two positions of one choice ·
   a choice of the earth/ground wire, intact or broken; $\kRes$ of the worn
   contact where the live wire touches the case (0.50 to 5.00 Ω, default 1.40,
   resistance), $\kRes$ of the earth/ground wire (0.050 to 1.000 Ω, default
   0.200, resistance) and $\kRes$ of the person (1.00 to 100 kΩ, default 3.00,
   resistance). The three defaults are the section's own problem, so the figure
   loads showing 15.0 V on the case, 75.0 A in the short and 5.00 mA through
   the person, which are the three numbers the book's key gives · "The case
   sits at 15.0 V, the short draws 75.0 A and the 20.0 A breaker trips." ·
   none · 2D, flat. Value add, variation by slider and by choice: with the
   earth wire broken the case sits at the supply voltage and the person carries
   40.0 mA, and with it intact the same fault puts 75.0 A through the breaker
   and leaves the person 5.00 mA. The person is `F.silhouette`, one hand on the
   case and one on a water pipe, as the book draws it. Readout:
   $\kV_{\text{case}} = \kIcur_{\text{short}}\kRes_{\text{g}}$ with the live
   numbers; small line on the current through the person and on the breaker.
   Draws voltage, current, resistance.
4. `sim-case-emf` · replaces Figure 23.33, the emf induction raises on the case
   and the leakage current it drives · grounding-the-case · **still**: the case
   emf is an alternating quantity, but what the section asks the reader to
   compare is two arrangements of one circuit, not the passage of a cycle, and
   a transport here would animate an emf whose size the book never states
   (rule 14, and rule 24.9 on mute animations) · a choice of the case, grounded
   or not grounded; the emf induced on the case (0 to 24 V, default 12.0,
   voltage) and $\kRes$ of the person (1.00 to 100 kΩ, default 3.00,
   resistance). The book gives this emf no number, so the slider carries it and
   the readout states what it drives · "An emf of 12.0 V on an ungrounded case
   drives 4.00 mA through a person holding it." · none · 2D, flat. Value add,
   variation by slider and by choice: the reader sees the leakage current rise
   past the 5 mA that is taken to be harmless as the induced emf grows, and
   sees it fall to nothing the moment the case is earthed, which is the
   section's sentence drawn. Grounded, the case is held at zero volts and the
   leakage returns down the earth/ground wire rather than through the person,
   so the emf slider still changes what the figure says and not only what it
   draws. Readout:
   $\kIcur_{\text{leak}} = \kemf_{\text{case}}/\kRes_{\text{person}}$ with the
   live numbers. Draws voltage, current, resistance.
5. `sim-gfi` · replaces Figure 23.34 + 23.35, the GFI in its circuit and the
   sensing coil that does the comparing (fold: the book draws the same device
   twice, once from far enough away to show the hazardous path and once close
   enough to show the two wires through the core, and one drawing that carries
   both is what makes the comparison legible) · ground-fault-interrupter ·
   **still**: the comparison is of two currents at one moment, and the trip is
   a threshold and not a process · a choice of where the leakage goes, through
   the person or down an intact earth/ground wire, since the section says the
   GFI trips either way; $\kIcur$, the current the appliance draws (0 to 15.0
   A, default 10.0, current) and $\kIcur_{\text{leak}}$, the leakage current
   (0 to 20.0 mA, default 8.0, current). The trip level is not a slider: 5 mA
   is the accepted maximum harmless shock and the book states it as a fact ·
   "The live wire carries 10.000 A and the neutral 9.992 A, a difference of
   8.00 mA, so the GFI trips." · none · 2D, flat: the core is drawn as a ring
   with the two wires through it, which is the book's own view of it. Value
   add, variation by slider: the two currents and their difference are live
   numbers, and the field the two wires raise inside the core grows with the
   difference and vanishes when it does, which is the mechanism the book states
   in one sentence and never draws. This is the one figure of the page that
   binds `magnetic-field`, which `ch23/COLOR.md` does not give 23.8; it is
   wanted below. Readout:
   $\kIcur - \kIcur_{\text{leak}}$ with the live numbers and the difference
   against 5 mA. Draws current, voltage, magnetic-field.
6. `sim-isolation` · replaces Figure 23.36, the isolation transformer ·
   isolation-transformer · **still**: the appliance runs and the person stands
   there, and the question is what is connected to what · a choice of supply,
   through the isolation transformer or straight from the source;
   $\kRes_{\text{ins}}$, the resistance of the material between the coils (10
   to 500 MΩ, default 100, resistance) and $\kRes$ of the person (1.00 to 100
   kΩ, default 3.00, resistance) · "Through the transformer the person takes
   1.20 µA; straight from the source the same person would take 40.0 mA." ·
   none · 2D, flat. Value add, variation by slider and by choice: the current
   through the person falls by five orders of magnitude when the transformer is
   put between, and the appliance goes on drawing its 10.0 A either way, which
   is the whole of the section's argument. The two windings carry equal numbers
   of turns, which is what the section's first AP item asks about. Readout:
   $\kIcur_{\text{person}} = \kVrms/(\kRes_{\text{ins}} + \kRes_{\text{person}})$
   with the live numbers. Draws voltage, current, resistance.

Photographs: the section prints none, so none is kept and none is dropped.

Figures that serve exercises: the book prints one, the grounded case with a
0.200 Ω earth wire that the section's problem refers to, and it travels on that
problem's card with its own caption, which is the way `ch23/config.md` chose
for this chapter.

Every label in all six figures names a fixed part of a schematic: nothing in
any scene moves, no name sits on a coloured band, and no two names can meet at
any slider position, so the labels are on and no Labels button is wanted
(rule 26.7).

Extra simulations (rule 15), thought through, judged and decided:

- A chart of what a current does to a human body against its size, so that the
  5 mA trip level could be read against the threshold of sensation and the
  let-go current. Left: that is Figure 20.34 in 20.6, where the reader has
  already met it, and repeating it here would answer the question this section
  asks rather than the one that section asked.
- The inside of a circuit breaker, its bimetallic strip and its solenoid.
  Left: the breaker is Chapter 20's device and this section uses it without
  opening it, and a figure of its workings would teach thermal overload where
  the page is teaching earthing.
- A house's whole distribution panel, with several circuits on one supply.
  Left: nothing in the section or its exercises turns on more than one circuit
  at a time, and `sim-three-wire` already carries the breaker and its rating.

## Exercises

- Everything is set at the end: the section prints no Check Your Understanding
  box, so there is no inline exercise and no `div.exercises` host in the text.
- 3 conceptual questions, none keyed, each an open item with an AI-marked
  suggested approach: `cq1` (fs-id1169737813489, whether plastic insulation
  prevents shock hazards, thermal hazards or both, Understand, citing
  `three-wire`), `cq2` (fs-id1169736590263, why ordinary circuit breakers and
  fuses are ineffective in preventing shocks, Understand, citing `three-wire`)
  and `cq3` (fs-id1169737777962, why a GFI may trip because its two wires
  differ in length, Analyze, citing `gfi`).
- 2 AP items, both the section's own. `ap1` (fs-id1516027, the turns of an
  isolation transformer) is keyed with (c) in the CNXML and is set as a graded
  choice, Understand. `ap2` (fs-id1449525, explain the working of a GFI) is a
  question in words and its solution is commented out in the CNXML, so the book
  prints no answer to it: it is kept as an open item with an AI-marked
  suggested approach, Understand. Nothing is taken from the commented-out text.
- 1 problem, keyed and kept: `p1` (fs-id1169738083911, Integrated Concepts, the
  wet person holding a grounded case), keyed 15.0 V for part (a) and 75.0 A for
  part (b), with the book's own "yes" to part (c) in the solution. The book's
  image of the scene rides on the card.
- No problem is left out, since the section prints only the one and the book
  keys it.
- Nothing is taken from another section and nothing of this section's own is
  held back: the book sets every one of these where it introduces what they
  test.
- No generated questions: each of the four nodes has a book exercise that tests
  it, the three-wire system twice.
- Weights: `cq1` gives `three-wire-system` its full value and `thermal-hazard`
  and `shock-hazard` 3 each, since the question is about what insulation does
  and the two hazards are the vocabulary it is asked in; `cq2` gives
  `three-wire-system` its full value and `shock-hazard` 3; `p1` gives
  `grounding-the-case` its full value, `ohms-law` 4, since two of its three
  parts are one application of it apiece, and `three-wire-system` 2.

## Views

- Formulas: none. The section states no equation, so no row is written for it
  and none is wanted.
- Definitions: the three glossary terms, thermal hazard, shock hazard and the
  three-wire system. No variable row: the section gives no symbol a meaning of
  its own, and the quantities its figures carry are Chapter 19's and Chapter
  20's $\kV$, $\kIcur$ and $\kRes$, used as they stand.
- Concept map: the four nodes above with their edges into 20.2, 20.5, 20.6,
  23.1, 23.2 and 23.7.

## Colour

The page binds voltage, current, resistance and magnetic-field. Every figure
carries a voltage (the supply, the voltage on a case, the emf induced on one),
a current (along every wire, and the leakage current, which is a current and
wears the current hue, as `ch23/COLOR.md` requires) and a resistance (the
appliance, the earth/ground wire, the person, the material between a
transformer's coils, and the reactance-free ohms of all of them). The magnetic
field is bound in `sim-gfi` alone, for the field the two wires raise inside the
sensing coil's core. No device is tinted: every wire, plug, outlet, case, core,
coil and breaker is ink, and the person is ink, as the chapter's colour plan
requires. The number of turns on a transformer, the 5 mA trip level and the
20 A rating of a breaker are counts and settings and stay in ink.

## Wanted at chapter level

- `ch23/COLOR.md`: widen the 23.8 line from `voltage`, `current` and
  `resistance` to add `magnetic-field`, which `sim-gfi` draws for the field the
  live and neutral wires raise inside the GFI's core; the field is what
  vanishes when the two currents are equal, and the sentence the book prints
  about equal and opposite emfs cannot be drawn without it.
- Errata for the chapter pass: the second AP item of this section
  (fs-id1449525, explain the working of a GFI) carries a solution in the CNXML
  that is commented out, so the book prints no answer to it. The item is kept
  unkeyed with an AI-marked approach, as 23.1's unkeyed AP item is.
- No anchors are wanted: the section states no equation and gives no symbol a
  meaning of its own, so it writes no `equations` and no `variables` row. The
  glossary rows the prep pass wrote for it carry no anchor field.

### Decided by the chapter pass (2026-09-16)

- No anchor was wanted and none is written: the section states no equation and
  gives no symbol a meaning of its own, and its glossary rows carry no anchor
  field. It is the one section of the chapter left without `variables`.
- `ch23/COLOR.md`'s 23.8 line now carries `magnetic-field`.
- The second AP item's commented-out key is recorded in `exploration.md` §
  Errata and is not used.
