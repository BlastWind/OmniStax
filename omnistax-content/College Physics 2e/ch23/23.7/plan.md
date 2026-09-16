# Plan: 23.7 Transformers

Written before the page was built, as `ch23/config.md` says the plan file
stands in place of the per-section stop (root rules 2 and 5).

## Sub-concepts

The module prints no headers of its own, so these four are the agent's, and
they are the spans the coverage rows name.

1. `how-a-transformer-works` — What a transformer does and how it is built.
   The opening paragraph on plug-in units and the power distribution system,
   the photograph of the plug-in transformers, the distribution line, and the
   paragraph that describes the two coils on the laminated iron core and says
   the AC input sends a time-varying flux to the secondary.
2. `the-transformer-equation` — Faraday's law applied to each coil. The output
   voltage from the secondary's turns, the input voltage from the primary's,
   the ratio of the two, and the name the book gives it.
3. `currents-and-power` — Which way up the current ratio goes. The paragraph
   that names the step-up and the step-down transformer, the equality of the
   power in and the power out, the current ratio that follows from it, and the
   worked example of the x-ray unit's step-up transformer.
4. `why-transformers-need-ac` — Why a steady voltage transforms into nothing.
   The paragraph on DC through a switch, the two graphs, the worked example of
   the battery charger's step-down transformer and the sentence that sends the
   reader on to electrical safety.

## Concepts

Five, all written into `book.json` by the prep pass; the page introduces each
one once.

| concept | kind | introduced in | used in |
|---|---|---|---|
| `transformer` | idea | `how-a-transformer-works` | `the-transformer-equation`, `why-transformers-need-ac` |
| `transformer-equation` | result | `the-transformer-equation` | `currents-and-power`, `why-transformers-need-ac` |
| `transformer-current-ratio` | result | `currents-and-power` | — |
| `step-up-and-step-down` | skill | `currents-and-power` | `how-a-transformer-works` reinforces it |
| `transformers-need-ac` | idea | `why-transformers-need-ac` | — |

Concepts from earlier pages the spans use: `faradays-law` and
`turns-multiply-emf` (23.2), `magnetic-flux` (23.1), `induction` (23.1),
`alternating-current`, `high-voltage-transmission` and `ac-power` (20.5),
`power-and-resistance` (20.4). No concept of this section is without a book
exercise of its own, so nothing is generated (rule 13).

## Figures

One line per figure in the format of `docs/prompts/interactive-figures.md`.

`fig-plug-in` · Figure 23.25 · photograph, kept · the section's first sentence
points the reader straight at it ("many cell phones, laptops, video games, and
power tools and small appliances have a transformer built into their plug-in
unit like that in Figure 23.25"), and the object it shows is the one piece of
this technology every reader owns, so it is kept with the book's caption and
its credit to Tamar More, at the 200 px the CNXML gives it.

`sim-power-line` · Figure 23.26 · `transformer`, `step-up-and-step-down`,
`transformer-current-ratio` · value add: variation, since the book's drawing
fixes the transmission line at 400 kV and states without showing it that "less
current is required for a given amount of power, and this means less line
loss", which is a statement about three numbers the reader should be able to
move; intuition, since the current in the line and the power it wastes are
drawn on the line itself and fall away as the voltage is raised · still: the
power flows steadily and nothing here has a clock, so there is no cycle and no
transport (rule 14) · sliders the transmission voltage (voltage), the power
delivered (power) and the resistance of the line (resistance), opening on the
book's own 400 kV and on the 1000 MW and 2.00 Ω of the section's eighth
problem · headline: the live sentence "Sending 1000 MW at 400 kV puts 2500 A
into the line, and 2.00 Ω of line then wastes 12.5 MW, which is 1.3% of the
power." · graph below the scene, which is a horizontal one: the power wasted
against the transmission voltage, with the reader's setting marked on the
curve · 2D and flat (rule 28.1): the line is a row of places along the ground
and depth would say nothing about it.

`sim-transformer` · Figure 23.27 · `transformer`, `transformer-equation`,
`transformer-current-ratio`, `step-up-and-step-down` · value add:
standardisation of the book's drawing, and variation, since the four
quantities the section relates are all on sliders and the reader can wind
turns on or off either coil and watch the output voltage and the output
current go opposite ways while the power stays where it was; intuition, since
the flux the core carries is drawn going round it, so the reason both coils
see the same rate of change is visible rather than asserted · still: the
ratios answer the sliders and the section's argument has no clock in it, so
there is no cycle and no transport (rule 14; the chapter's alternation is the
business of `sim-dc-ac`) · sliders the primary voltage (voltage), the turns on
the primary and the turns on the secondary (both untyped, ink) and the primary
current (current) · headline: the live sentence "Sixteen turns on the primary
and two on the secondary turn 120 V into 15.0 V, so this is a step-down
transformer." · no graph: the scene and its readout carry the two ratios, and
a straight line of output against turns would say nothing the readout does not
· 2D on a locked view (rule 28.2), not a full 3D scene: the book prints the
core in perspective because a laminated slab with a window cut through it and
a coil wound on each of its legs cannot be drawn flat without the coils
running into the core, and one viewpoint, from above and to the right at a yaw
of 0.34 and a pitch of 0.26, shows the front of the ring, the laminations on
its top and its right side, and both coils at once; the reader never turns it,
because nothing further is on the other side and the drawing is a diagram of a
relation, not an arrangement in space (rule 28.3). Entity names: five, the
core, the two coils, the flux and the circuit symbol the book prints beneath
its drawing, each in a fixed slot that no slider moves, so they are shown
rather than held behind a Labels button (rule 26.7); the readings beside the
terminals and the coils are the figure's frame, not entity labels.

`sim-dc-ac` · Figure 23.28 · `transformers-need-ac`, `transformer-equation` ·
value add: variation by choice, since the book draws one of the three things a
primary can be given and the other two are the ones that make its point, a
steady voltage that induces nothing at all and the alternating voltage
everything else in the chapter assumes; intuition, since the secondary's trace
is worked out from the primary's rather than asserted, so the reader sees that
what reaches the secondary is the change and never the value · still: the two
traces are whole waveforms over a fixed window and answer the choice and the
sliders, so the figure registers no cycle and takes no transport (rule 14),
and a sweeping dot would be the dummy loop rule 24.9 forbids · sliders the
primary voltage (voltage) and the turns ratio (untyped, ink), with a choice of
what the primary is given, a steady direct voltage, one switched on and off,
or an alternating one (rule 26.1) · headline: the live sentence "The switch is
thrown every 40 ms, and each time it is the secondary shows a spike of 240 V
that dies away as the current settles." · the graphs are the idea: the primary
voltage against time above and the secondary voltage against time below, on
one time axis, drawn as the book draws them · 2D and flat (rule 28.1).

The primary in `sim-dc-ac` is a coil with a resistance of its own, so the
current in it, and the flux with it, settles towards its steady value with a
time constant of 15 ms; the secondary voltage is what is left of the primary
voltage once the settled part is taken off, which is the whole of it while the
flux is still changing and none of it once the flux has stopped. One model
draws all three states: nothing for a steady voltage, a decaying spike of
either sign at each throw of the switch, and, at 60 Hz, where the coil's
reactance is far larger than its resistance, the primary's own sinusoid
scaled by the turns ratio.

Every one of the section's four images is accounted for: one photograph kept
(Figure 23.25, 200 px) and three drawings replaced, each keeping the book's
number, its image as its `originals` and its caption as `original_caption`
(`Figure_24_07_02.jpg` at 550 px for Figure 23.26, `Figure_24_07_03.jpg` at
250 px for Figure 23.27 and `Figure_24_07_04.jpg` at 250 px for Figure 23.28).
No image rides on an exercise card: the only image an exercise points at is
Figure 23.25, which the page already carries, and the first problem refers to
it by its number.

## Extra simulations offered

None survives rule 15. Two were judged and dropped: a double transformer in
two stages, which is the section's Construct Your Own Problem item and is
`sim-transformer` applied twice with nothing new in it; and a winding whose
laminations can be taken away to show the eddy currents in a solid core, which
belongs to 23.4 and would need that section's figure, not this one's.

## Exercises

Thirteen in the module: 10 problems, 1 conceptual question and 2 AP items, and
no Check Your Understanding box, so nothing is set inline and the page carries
no `div.exercises` host. Five problems carry the book's answer and are kept
with their own numbers: `p1` the plug-in transformer for a video game system,
`p3` the cassette recorder, `p5` the laptop's plug-in transformer, `p7` the
power plant's new secondary and `p9` the Unreasonable Results item. The other
five are unkeyed and are left out and named in `notes`: the traveller's
converter, the flashlight charger, the multipurpose transformer, the line loss
that follows the power plant, and the Construct Your Own Problem item. The
conceptual question on why transformers hum at twice the frequency of the
supply is unkeyed and gets an AI-marked suggested approach. Of the two AP
items the first is keyed in the CNXML, "(a), (d)", and is set as an open item
carrying the book's own key, since it asks for two answers of four and the
graded choice takes one; the second has its solution commented out in the
CNXML and is unkeyed, so it is kept as an open item with an AI-marked
suggested approach. Nothing is held for a later section and nothing comes from
an earlier one.

## Tables

None. The module prints no table.

## Types the page binds

`magnetic-flux`, `voltage`, `current` and `power`, which is what
`ch23/COLOR.md` gives the page, and two it does not list for this page:
`resistance`, because `sim-power-line` puts the resistance of the
transmission line on a slider and states the ohms the section's eighth problem
gives it, and the loss it computes is Chapter 20's $P = I^2R$; and `time`,
which the horizontal axis of `sim-dc-ac` carries and which that file's own time
row grants to a figure with a clock in it. The number of turns, the turns
ratio and the percentages stay untyped and in ink, and the flux the core
carries never wears the field's hue, which this page never binds at all: the
section states its results in the flux and does not name the field once.

No categorical colour is used. `ch23/COLOR.md` expects `F.cat(i)` here for the
stages of the distribution line, but the plant, the substation and the house
are drawn as apparatus, and the chapter's own rule that a device is never
tinted governs: they are named in ink and told apart by their shapes and their
places along the ground, while the voltage between the stages and the current
in the line wear their own hues.

## Wanted at chapter level

- `eq-secondary-voltage` → `23.7-the-transformer-equation`
- `eq-primary-voltage` → `23.7-the-transformer-equation`
- `eq-transformer-equation` → `23.7-the-transformer-equation`
- `eq-transformer-power` → `23.7-currents-and-power`
- `eq-transformer-current` → `23.7-currents-and-power`
- `23.7/V_prim` → `23.7-the-transformer-equation`
- `23.7/V_sec` → `23.7-the-transformer-equation`
- `23.7/N_prim` → `23.7-the-transformer-equation`
- `23.7/N_sec` → `23.7-the-transformer-equation`
- `23.7/I_prim` → `23.7-currents-and-power`
- `23.7/I_sec` → `23.7-currents-and-power`
- `23.7/P_prim` → `23.7-currents-and-power`
- `23.7/P_sec` → `23.7-currents-and-power`
- `ch23/COLOR.md`, the paragraph of expected bindings: 23.7 binds `resistance`
  and `time` as well as the four types listed there, the first for the line
  resistance `sim-power-line` carries on a slider and the loss it states, the
  second for the time axis of `sim-dc-ac`; and its categorical row loses the
  distribution line, which is drawn in ink.
- The errata for the chapter pass: the second AP item of this section,
  `fs-id1313520`, has its solution commented out in the CNXML
  (`120 W, 17.14 A`), so it is carried unkeyed with an AI-marked approach, as
  23.1's AP item was.

### Decided by the chapter pass (2026-09-16)

- All five `equations` rows and all eight `variables` rows are anchored as
  asked.
- `ch23/COLOR.md` now gives 23.7 `resistance` and `time`, and no longer claims
  the distribution line for the categorical palette: its three places are
  drawn in ink.
- The second AP item's commented-out key, "120 W, 17.14 A", is recorded in
  `exploration.md` § Errata and is not used.
