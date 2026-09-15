# Plan: 20.5 Alternating Current versus Direct Current

Module m42348. Written before the page was built, left for review after, as
`ch20/config.md` records. Figure numbers 20.14 to 20.17 come from the prep
agent's notes; the section's two worked examples are the publisher's Example
20.9 and Example 20.10.

## Sub-concepts and where each concept is introduced

The book prints two headers of its own, "Alternating Current" and "Why Use AC
for Power Distribution?", and both are kept word for word. The first of them
carries four ideas the reader needs separately, so the page divides that run
into four spans and gives the three new ones headers in the book's voice; the
book's own header stands over the first of them.

| span | header | concepts |
|---|---|---|
| `alternating-current` | Alternating Current (book) | introduces `direct-current`, introduces `alternating-current` |
| `ac-power` | The power an alternating current delivers | introduces `ac-power`, uses `alternating-current`, uses `electric-power` |
| `rms-values` | Root mean square values, the equivalent direct current | introduces `rms-values`, uses `ac-power` |
| `ac-ohms-law` | Ohm's law and power for alternating current | introduces `ac-ohms-law`, uses `rms-values`, uses `ohms-law`, uses `electric-power` |
| `transmission` | Why Use AC for Power Distribution? (book) | introduces `high-voltage-transmission`, uses `ac-ohms-law`, uses `power-and-resistance` |

Example 20.9 sits at the end of `ac-ohms-law`, where the book prints it, and
Example 20.10 inside `transmission`. Nothing is held for a later section and
nothing of another section is set here.

## Figures

```
sim-ac-versus-dc · Figure 20.14 + 20.15 · alternating-current, direct-current · variation by slider and flow by animation: one engine draws the DC source and the AC source under a choice, and the reader watches the current in the loop reverse as the trace crosses zero, which the two still figures can only assert · moving, because the whole subject is a periodic time: the carriers run round the loop and the point on the trace sweeps with them, one cycle of the source per loop · choice DC/AC; sliders V₀ (voltage), f (frequency), R (resistance) · headline: the instantaneous voltage and current at the time now showing, and which way the charge is running · graph below the circuit, which is a horizontal scene · 2D
sim-ac-power · Figure 20.16 · ac-power, rms-values · variation by slider and flow by animation: the power curve is swept out as the voltage and current sweep theirs, so the reader sees why the product is never negative and why its average is half the peak · moving, the same clock as the figure above, one cycle per loop · sliders V₀ (voltage), R (resistance), f (frequency) · headline: the instantaneous power now, with the average and the peak · graph alone, since the graph is the idea; the voltage and current traces sit above the power curve in the same frame of time · 2D
sim-transmission · Sim · high-voltage-transmission, ac-ohms-law · variation by slider: the reader sends a fixed power down a line at any voltage between 25 kV and 400 kV and watches the loss fall as the square of the voltage, which is the argument of the whole span and which the book makes at two voltages only · still, because nothing in it has a clock: it answers its sliders and registers no cycle · sliders P (power), V_rms (voltage), R of the line (resistance) · headline: the current the line carries and the fraction of the power it loses · graph below the scene, which is horizontal, showing the loss against the transmission voltage with the reader's setting pinned on it · 2D
fig-transformers · photo, Figure 20.17 · high-voltage-transmission · kept: the text says "See Figure 20.17" and the caption names the transformers that do the raising and lowering the span turns on · no controls
```

The three sims bind voltage, current, resistance, power and frequency.
Every hue comes from `C(type)`; the free electrons of the reversing loop are
`F.el('e-')`, as `ch20/COLOR.md` asks, and the voltage and current traces are
told apart by a solid and a dashed stroke as well as by their hues, so the
figures read with colour off. Labels: five or fewer entity labels in each
figure and none of them on a moving body, so all of them are on by default
(root rule 26.7). Axis ranges are fixed from the slider maxima and stated in a
comment in `figures.js`; a value past an edge goes through `pinned()`.

No sim is proposed beyond these three. A fourth was considered, a stroboscope
for the take-home experiment that flickers a fluorescent tube at 120 Hz beside
a car headlight, and it was dropped: the flicker is faster than a screen can
draw and the figure would have to lie about the rate it shows, which root rule
24.9 forbids.

## Photographs and images

Four images in the module, all of them kept as `originals` or as a photograph:
Figure_21_05_01.jpg (width 200) and Figure_21_05_03.jpg (width 200) as the two
originals of `sim-ac-versus-dc`, Figure_21_05_04.jpg (width 225) as the
original of `sim-ac-power`, and Figure_21_05_05.jpg (width 225) as the
photograph Figure 20.17. No exercise of this section carries an image.

## Tables

None. The section prints no table.

## Exercises

Three conceptual questions, all of them open with an AI-marked suggested
approach, and thirteen problems, of which the book keys six. The seven unkeyed
problems are left out and named in `notes` and in `exercise_notes`: the hot
resistance of a 25-W bulb, the peak current of a breaker that trips at 15.0 A,
the razor plugged into 240 V, the air conditioner's effective resistance and
monthly cost, the peak current of a 500-W heater, the Nichrome radiative heater
and the two times at which 60-Hz voltage equals the rms voltage. The section has
no Check Your Understanding box, so no inline exercise host is wanted. The
section has no AP test prep items. The PhET link to Generator is left out and
named in `notes`.

## Types the page binds

`voltage`, `current`, `resistance`, `power` and `frequency`. The time runs along the horizontal axis of every graph as an untyped scale in ink, so the page does not bind it. Resistivity
does not appear on this page; the mass, the cost per kilowatt-hour and the
percentages of the problems stay untyped and in ink.

## Wanted at chapter level

- `ch20/COLOR.md` → the line "20.5 binds voltage, current, power, frequency and time" should read "20.5 binds voltage, current, resistance, power and frequency": Ohm's law for AC is this section's own result, the resistance is a slider on all three of its sims and the readouts write $\kIrms = \kVrms/\kRes$, so the page draws the type.
- `eq-ac-power-average` → 20.5-ac-power
- `eq-rms-current` → 20.5-rms-values
- `eq-rms-voltage` → 20.5-rms-values
- `eq-ac-voltage` → 20.5-alternating-current
- `eq-ac-current` → 20.5-alternating-current
- `eq-ac-power-rms` → 20.5-rms-values
- `eq-ohms-law-ac` → 20.5-ac-ohms-law
- `eq-ac-power-v2r` → 20.5-ac-ohms-law
- `eq-ac-power-i2r` → 20.5-ac-ohms-law
- No concept or symbol fix is wanted: the six concept rows and the seven
  variable rows the prep agent wrote are the ones the page needs, and no
  existing symbol row was changed.

Applied in the chapter pass of 2026-09-15. The nine equation anchors above
were written to `ch20/chapter.json`, and the seven variable rows of the
section were anchored as well: $\kVo$, $\kIocur$ and $\kf$ to
`20.5-alternating-current`, $\kVrms$ and $\kIrms$ to `20.5-rms-values`,
$\kPave$ to `20.5-ac-power` and $\kPo$ to `20.5-ex-peak-voltage`, where
Example 20.9 introduces the peak power.

`ch20/COLOR.md` is corrected as this plan asks: its line now reads that 20.5
binds voltage, current, resistance, power and frequency.

The pass also renumbered the section's two worked examples. They carried 20.8
and 20.9, but the book numbers its examples straight through the chapter and
20.4 has already printed Example 20.8, so they are Example 20.9 and Example
20.10; the headings, the caption of `sim-transmission`, the problem that
verifies the second example's closing statements and the three concept rows
whose evidence cites them were all changed with them.
