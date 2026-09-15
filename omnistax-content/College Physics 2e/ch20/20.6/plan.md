# Plan: 20.6 Electric Hazards and the Human Body (m42350)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's instruction to finish the book in waves;
the per-section stop of rule 2 and the plan review of rule 5 are replaced by
this file, written before the section was built and left for review after,
as `ch20/config.md` records.

The section that turns the power and the current of 20.4 and 20.5 on the
reader. There are two hazards, thermal and shock, and they are governed by
different quantities. A short circuit is a low-resistance path across a
source, and because the power it dissipates is $\kV^2/\krshort$ that power
runs away as the resistance falls: 120 V across 0.100 Ω gives 144 kW. Supply
wires carrying too much current overheat for the same reason, $\kP =
\kIcur^2\kRw$, and fuses and circuit breakers open the circuit before they
do. A shock is decided by the current through the person, and since $\kIcur
= \kV/\kRes$ no voltage can be called hazardous until the resistance is
known: dry skin at 200 kΩ takes 0.6 mA from 120 V and feels nothing, while
the same person soaking wet at 10.0 kΩ takes 12 mA and cannot let go. Four
diagrams (Figures 20.18, 20.19, 20.20 and 20.21), one graph (Figure 20.22),
one photograph (Figure 20.23), one numbered table (Table 20.3), four
glossary terms, twelve conceptual questions, ten problems of which five are
keyed, no worked example, no Check Your Understanding box and no AP item.
One page (rule 11).

## Sub-concepts (page headers)

The module prints two headers of its own, Thermal Hazards and Shock Hazards,
and both are kept as the book writes them (`ch20/config.md`). The opening
paragraph stands before them and the last two stretches of the Shock Hazards
discussion are long enough to be read as ideas of their own, so five spans
in all, three of them the agent's (rule 3).

1. `hazards` **Two hazards of electricity** (book: the opening paragraph,
   which defines a thermal hazard and a shock hazard and points ahead to
   Electrical Safety: Systems and Devices). Introduces `thermal-hazard` and
   `shock-hazard`; the glossary terms thermal hazard and shock hazard are
   defined here.
2. `thermal-hazards` **Thermal Hazards** (the book's header; the short
   circuit and the 144-kW example, Figure 20.18, the ionization runaway, the
   overloaded supply wires and the worn cord, Figures 20.19 and 20.20, and
   the paragraph on interrupting a high-voltage arc). Introduces
   `short-circuit` and `overloaded-wires`; $\krshort$, $\kRw$ and the
   equations `eq-short-circuit-power` and `eq-wire-heating` anchor here, and
   the glossary term short circuit is defined here.
3. `shock-hazards` **Shock Hazards** (the book's header; the varied effects
   of current through people, the four major factors, Figure 20.21, Table
   20.3, the body as a conductor and the earth as an electron sink, and the
   four paragraphs that walk the current up from 1 mA to several amperes).
   Introduces `shock-severity-factors`; uses `shock-hazard`.
4. `body-resistance` **The resistance of the body** (book: the paragraph
   that makes current the major factor and works 120 V through 200 kΩ and
   through 10.0 kΩ, and the paragraph on dry skin, wet skin and the
   microshock-sensitive patient). Introduces
   `body-resistance-and-microshock`; the glossary term microshock sensitive
   is defined here.
5. `path-duration-frequency` **Path, duration and frequency** (book: the
   closing paragraph on the other three factors, Figure 20.22, the body's
   sensitivity near 50 and 60 Hz, the wart burned off at high frequency and
   Figure 20.23). Uses `shock-severity-factors` and `shock-hazard`.

The book's cross references are plain text, as every other page of the book
writes them: Electrical Safety: Systems and Devices stays as words in both
places it is named, and the app links the mentions of Figure 20.21, Figure
20.22 and Table 20.3 to the rows on this page. Learning objectives, the
section summary and the four glossary terms come out of the running text
into the tables and views (rule 4). The section prints no boxed note and no
worked example. The PhET link the chapter drops does not appear in this
module.

Macros: $\kIcur$, $\kV$, $\kRes$, $\kRw$, $\krshort$, $\kP$ and $\kf$, every
one a row `ch20/config.md` stages or names as already standing. The
resistivity, the specific heat and the masses of the Integrated Concepts
problem stay untyped and in ink.

## Figures

sim-short-circuit · Figure 20.18 · short-circuit · value add: variation by slider, and intuition — the reader drags the short's resistance down and watches the power in it pass the appliance's by four orders of magnitude, which no still drawing of a worn cord can show · still, because a short that has been made is a steady state and the question is only how much power it dissipates; no clock, no transport · sliders: the source voltage $\kV$ (voltage, 0 to 480 V, 120 V), the short's resistance $\krshort$ (resistance, 0.020 to 2.000 Ω, 0.100 Ω), the toaster's resistance $\kRes$ (resistance, 5 to 40 Ω, 15 Ω) · headline: "A short of r = 0.100 Ω across 120 V dissipates 144 kW, about 150 times what the toaster itself draws." · graph below: two power bars on one fixed logarithmic scale from 0.1 kW to 1000 kW, because the two powers are orders of magnitude apart and a linear frame would leave the appliance's bar invisible; each bar states its own number · 2D, the worn cord and its schematic drawn flat (rule 28.1)

sim-fuse-breaker · Figure 20.19 + 20.20 · overloaded-wires · value add: variation by slider, and intuition — one engine carries the device, the circuit it sits in and the heating it prevents, so the reader sees the strip melt or the bimetallic strip bend at the current the rating names rather than reading two separate drawings · still, because a fuse holds or it does not; the trip answers the current slider and registers no cycle · choices (rule 26.1): the device (a fuse, a circuit breaker) and its rating (15 A, 20 A, 30 A), both of them discrete states; sliders: the current $\kIcur$ (current, 0 to 40 A, 10 A), the wire's resistance $\kRw$ (resistance, 0.050 to 3.000 Ω, 2.000 Ω, the worn cord of the book's own example) · headline: "10.0 A through a worn cord of 2.00 Ω dissipates 200 W in the cord alone, and the 15-A fuse still holds." · graph: none; the circuit and the device drawn side by side are the scene · 2D (rule 28.1)

sim-shock · Figure 20.21 · shock-severity-factors, body-resistance-and-microshock · value add: variation by slider, and standardisation — the person, the current through them and Table 20.3's bands are drawn on one logarithmic scale, so that the two cases the section works, 120 V through dry skin and through wet skin, are two positions of one slider rather than two sentences · still, because a shock of a stated duration is read off a table; nothing here runs on a clock · sliders: the voltage touched $\kV$ (voltage, 0 to 480 V, 120 V), the body's resistance $\kRes$ (resistance, 1.0 to 300.0 kΩ, 200.0 kΩ, with soft detents at 4.5, 10.0, 100.0, 200.0 and 300.0 kΩ for wet grass, soaking wet, damp skin, dry skin and rubber-matted) · headline: "120 V through 200.0 kΩ of dry skin sends 0.600 mA through the trunk, below the 1-mA threshold of sensation." · graph below the scene: the seven bands of Table 20.3 laid along a logarithmic current axis from 0.01 mA to 10 A, with the live current pinned on it · 2D (rule 28.1)

sim-frequency-sensitivity · Figure 20.22 · shock-severity-factors · value add: variation by slider — the book's two curves are read at a chosen frequency against a chosen current, so the reader sees the same 10 mA pass unfelt at 10 kHz and hold the hand shut at 60 Hz · still, because a sensitivity curve is a standing fact of the body and has no time in it · choice (rule 26.1): the frequency, as a dropdown of the frequencies the section names, DC, 10 Hz, 50 Hz, 60 Hz, 100 Hz, 400 Hz, 1 kHz and 10 kHz, because the span is four decades and a linear slider across it would leave the whole of the story in its first hundredth; slider: the current through the person $\kIcur$ (current, 0 to 30 mA, 10 mA) · headline: "At 60 Hz, 10.0 mA is above the can't-let-go current of 10.1 mA, so the hand closes on the wire." · the graph is the idea and stands alone: current in milliamperes against a logarithmic frequency axis, the two curves and the live point on both · 2D (rule 28.1)

photo-electric-arc · Figure 20.23 · kept · the book's caption asks the closing question of the section, whether the arc is dangerous, and answers that it depends on the frequency and the power, which is exactly what the two figures before it measure; it is not a splash image and the passage points at it ("See Figure 20.23")

Figure pass of 2026-09-15 (Claude Fable 5.1), what is built now. `sim-short-circuit`: the toaster has two slots with a slice of bread standing in each, feet and a lever, and the cord is a sheath worn through in the middle where the two bare conductors touch, drawn here since the library has no toaster or cord. `sim-fuse-breaker`: the breaker's mechanism sits in a housing, its movable strip pivots at the left, a coil spring pulls it down to the floor, the contacts are two pads and the notch sits on a rail. `sim-shock`: the live current reading stands above the band names, never on them, and the scale's title is ink. `sim-frequency-sensitivity`: the two curve names sit in the gap between the curves, the frequency name goes inside the frame when it would meet the axis title, and the current level is named at the right, below its line when the line runs along the top.

Photographs and images, one line each. Figure 20.18 (`Figure_21_06_01a.jpg`,
width 225): a drawing, replaced by `sim-short-circuit` and kept as its
original. Figure 20.19 (`Figure_21_06_02a.jpg`, width 300) and Figure 20.20
(`Figure_21_06_03a.jpg`, width 175): drawings, folded into
`sim-fuse-breaker` and kept as its two originals. Figure 20.21
(`Figure_21_06_04a.jpg`, width 400): a drawing, replaced by `sim-shock` and
kept as its original. Figure 20.22 (`Figure_21_06_05a.jpg`, width 250): a
graph, replaced by `sim-frequency-sensitivity` and kept as its original.
Figure 20.23 (`Figure_21_06_06a.jpg`, width 300): a photograph, kept with
the book's caption and its credit. No unnumbered image travels on an
exercise card in this section.

No extra simulation is offered (rule 15). The candidates considered and
dropped: an animation of the ionization runaway in a short, which would
replay the book's own sentence and add no view (rule 24.9); and a drawing of
the current's path through the trunk against its path through an arm, which
the section states in one sentence and does not quantify, so a figure would
have to invent numbers the book does not give.

## Tables

Table 20.3, Effects of Electrical Shock as a Function of Current, is rebuilt
as a `div.book-table` whose eyebrow is the book's number, with the book's
footnote kept as the book prints it. It is not a `<figure>`. Its seven rows
are also the seven bands `sim-shock` draws, so the figure and the table
carry the same numbers.

## Exercises

Twelve conceptual questions, every one unkeyed, each with an AI-marked
suggested approach, all at the end in the Exercises document. Ten problems,
five of them keyed and kept: the 220-V short at 0.250 Ω, the 120-V source
through 300 kΩ and through 4500 Ω, the butter knife and the minimum
resistance of the path, the peak power of a 220-V short, and the Integrated
Concepts problem on the temperature rise in the material round a short. The
five unkeyed problems are left out and named in `notes`: the voltage of a
1.44-kW short, the smallest voltage on a radio case that could cause
fibrillation, the 20.0-µA current applied directly to the heart, the heart
defibrillator's four parts, and the Construct Your Own Problem item on
insulation. No exercise is inline, since the section prints no Check Your
Understanding box, so the page carries no `div.exercises` host. No AP item
sits in this section.

## Types the page binds

`current`, `voltage`, `resistance`, `power` and `frequency`, exactly the
bindings `ch20/COLOR.md` predicts for 20.6. Energy is not drawn on this page
and stays in ink, as do the specific heat and the masses of the Integrated
Concepts problem, the ratings in amperes being currents and wearing the
current hue. No figure hard-codes a hue: the wires, the schematics, the
fuse, the bimetallic strip, the person and every frame are ink, the arc of a
tripped breaker is ink, and the three bands of Table 20.3 that must be told
apart on the shock scale are `F.cat(i)`, never in a hue the page has bound.
Colour off leaves every figure legible from its labels, its arrowheads and
the band names written along the scale.

## Wanted at chapter level

- variables `r_short` → 20.6-thermal-hazards
- variables `R_w` → 20.6-thermal-hazards
- equations `eq-short-circuit-power` → 20.6-thermal-hazards
- equations `eq-wire-heating` → 20.6-thermal-hazards

No concept row and no symbol row needs a fix.

Applied in the chapter pass of 2026-09-15. The two variable anchors and the
two equation anchors above were written to `ch20/chapter.json`. Nothing else
of this section was changed at chapter level.
