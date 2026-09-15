# Plan: 20.1 Current

Module m42341. Built 2026-09-14 under `ch20/config.md`, which replaces the
stop of root rule 2 and the review of root rule 5 with this file.

## Sub-concepts and where each concept is introduced

The book prints two headers of its own, Electric Current and Drift Velocity,
and both are kept as it writes them. Three more spans divide the long middle
of each, as root rule 3 allows, so that a concept has a span to be introduced
in.

| span | header | concepts introduced |
|---|---|---|
| `electric-current` | Electric Current (the book's) | `electric-current`, `ampere` |
| `circuit-schematics` | A simple circuit and its schematic | `circuit-schematic` |
| `conventional-current` | The direction of conventional current | `conventional-current`, `charge-carriers` |
| `drift-velocity` | Drift Velocity (the book's) | `signal-speed-versus-drift`, `drift-velocity` |
| `current-from-drift` | Current and drift velocity | `current-and-drift-velocity` |

The three worked examples sit in the spans whose ideas they use: Example 20.1
(the truck battery and the calculator) in `electric-current`, Example 20.2
(the number of electrons a calculator passes each second) in
`conventional-current`, and Example 20.3 (the drift velocity in a 12-gauge
copper wire) in `current-from-drift`. Every concept node of the section has a
book exercise of its own, so nothing is generated to fill a gap.

## Figures

The section prints six drawings and no photograph. Four interactive figures
carry all six, folding two pairs as `config.md` foresaw.

```
sim-current-in-a-wire · Figure 20.2 + 20.4 · electric-current, ampere, conventional-current, charge-carriers · intuition and variation: the reader sets the charge and the time and watches exactly that charge cross the marked area in exactly that time, which is what a rate is, and the carrier choice shows positive charges, electrons and both signs at once all making the same conventional current · moving, because the definition is a rate and the loop is the time Δt itself, the counter filling to ΔQ as the loop runs · sliders ΔQ (charge) and Δt (time), choice of carriers (positive charges, electrons, both signs) · "720 C crossing the area in 4.00 s is a current of 180 A." · no graph, the wire is the scene · 2D, the wire drawn as a band with elliptical ends so that the marked cross-section reads as an area
sim-simple-circuit · Figure 20.3 · circuit-schematic · standardisation and variation: one schematic beside the thing it stands for, and a choice of situation that leaves the schematic unchanged while the picture changes, which is the reason the book gives for learning to read one · still, because a closed circuit carrying a steady current has no clock in it and the arrows here are notation for a direction, not a flow the reader must imagine · slider I (current), choice of situation (a truck battery and a headlight, a small battery and a penlight) · "A truck battery lights a headlight, and the schematic beside it is the same for both." · no graph, the picture and the schematic sit side by side · 2D
sim-drift-and-signal · Figure 20.5 + 20.6 · drift-velocity, signal-speed-versus-drift · intuition and animation: the two speeds the section exists to separate cannot be told apart in a still picture, and here one electron's rattling path, the whole crowd's slow creep and the signal running the length of the wire are three states of one drawing · moving, because the two speeds at once are the idea and neither can be seen without a clock · sliders I (current) and the factor the drift is drawn at (untyped), choice of what to follow (one electron, the crowd, the signal) · "The crowd drifts at 4.53 × 10⁻⁴ m/s, drawn 2000 times faster, while the signal crosses the wire at about 10⁸ m/s." · no graph, the wire is the scene · 2D
sim-drift-count · Figure 20.7 · current-and-drift-velocity, drift-velocity · variation: the shaded segment is the volume that empties in the time Δt, and the reader sets the current, the wire's diameter and the free-charge density and watches the segment and the drift velocity answer, which reproduces Example 20.3 and the problem that doubles the diameter · still, because the segment's length is a statement about a time rather than a motion in one, and the drifting itself has just been animated in the figure above · sliders I (current), D (untyped, the wire's diameter in mm) and n (untyped, the free-charge density) · "A 20.0 A current in a 2.053 mm copper wire drifts at 4.53 × 10⁻⁴ m/s." · no graph, the wire is the scene · 2D, on two fixed scales set once from the sliders’ extents, 220 units to the millimetre along the wire and 62 across it, both stated on the figure
```

Figure pass of 2026-09-15 (Claude Fable 5.1), what is built now. `sim-current-in-a-wire`: the marked cross-section is a filled ellipse in the charge hue, so the area reads as an area. `sim-simple-circuit`: the headlight is a parabolic reflector with its lens, its bulb on two leads and a beam that reaches further as the current rises; the truck battery has a lid, a label band and two posts. `sim-drift-and-signal`: in the signal state the electron pushed in and the one that leaves are named beside themselves with leaders, not in the corners. `sim-drift-count`: the drift arrow runs above the wire from the segment rather than through the carriers, the diameter bracket stands clear of the wire's end, and the scale note says the length is drawn at 3.5 times the scale of the diameter.

Value adds and tiers (root rule 24.4, 24.5). `sim-current-in-a-wire` and
`sim-drift-and-signal` are moving simulations, the third tier, and each
argues past the still tier in its line above. `sim-simple-circuit` and
`sim-drift-count` are still simulations, the second tier, and neither is
taken higher: one draws a steady state and the other draws a volume.
No figure of this section reaches the 3D tier, as `config.md` settles for the
whole chapter: a wire seen from the side and a circuit schematic are
relations between quantities and are clearest drawn flat (root rule 28.1),
and the two wires the book prints in perspective are drawn flat as bands
with elliptical ends, which shows the cross-section as an area without
asking the reader to read a projection.

Controls (root rule 26). The sign of the carrier, what the reader follows
down the wire and which situation the schematic stands for are discrete
states, so each is a button row and none is a slider. Labels: every figure
names fewer than six entities and no label sits on a moving body, so labels
are on by default and no Labels button is needed; the crowd of electrons in
`sim-drift-and-signal` is named once in a legend rather than one electron at
a time, as root rule 26.6 asks.

Photographs and unnumbered images. The section prints no photograph. Two
unnumbered images sit inside problems: the defibrillation unit and the SPEAR
storage ring. Both travel on the `figure` field of the cards that refer to
them, as `config.md` settles for the chapter. The defibrillation unit's own
problem moves to 20.4, but the problem two below it refers to the same
picture and stays here, so the image is kept on that card.

## Tables

None. The section prints no table.

## Exercises

Eighteen in all. Four AP test prep items: two are keyed and are graded, and
two, the 2.5 A charge question and the two students' calculations, have no
key, so each is kept as an open item with its options as the book prints them
and an AI-marked suggested approach. Six conceptual questions, all open with
AI-marked suggested approaches. Eight problems with the book's own keyed
answers.

Nine problems are not built. Eight have no answer in the book's key and are
left out and named in `notes`: the flashlight's average current, the comb and
hair, the spark plug, the open-heart defibrillator voltage, the clock
battery, the electron gun, the silver wire and the 14-gauge copper wire. The
ninth, the defibrillator that asks for the resistance of the path, tests Ohm's
law and goes to 20.4 with `source_section: "20.1"`, and both sections'
`exercise_notes` say so.

## Types the page binds

`current`, `charge`, `time`, `velocity` and `electric-field`, which is what
`ch20/COLOR.md` expects of this page. The free-charge density $n$, the
cross-sectional area $A$, the wire's diameter $D$, the number of electrons
and the factor the drift is drawn at stay untyped and in ink, as do their
sliders. No voltage is drawn: the battery of `sim-simple-circuit` is a source
in ink with its name beside it, since the section states no voltage and the
page must not bind a type it does not draw. Free electrons are `F.el('e-')`
and the positive carriers `F.el('p+')`, and a carrier's sign is told by its
label and its direction, never by a hue.

## Wanted at chapter level

Anchors, one per row:

- `eq-current` → `20.1-electric-current`
- `eq-ampere` → `20.1-electric-current`
- `eq-current-drift` → `20.1-current-from-drift`
- `I_curr` → `20.1-electric-current`
- `ΔQ_charge` → `20.1-electric-current`
- `Δt` → `20.1-electric-current`
- `E_field` → `20.1-conventional-current`
- `q_e` → `20.1-conventional-current`
- `v_d` → `20.1-drift-velocity`
- `q` → `20.1-current-from-drift`
- `n` → `20.1-current-from-drift`
- `A` → `20.1-current-from-drift`

No concept or symbol row needs a fix; every row the section wanted was there.

Applied in the chapter pass of 2026-09-15. Every anchor above was written to
`ch20/chapter.json`, and the nine variable rows and three equation rows of
the section now carry one each, since the pass anchored every row of the
chapter and not only the rows a plan named. Nothing else of this section was
changed at chapter level.
