# Plan: 24.4 Energy in Electromagnetic Waves

Written before the page was built (root rule 5), under `ch24/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The module prints no narrative header of its own, so the three headers below are
OmniStax's, one per independent idea, as `config.md` settles.

| Span | Header | What it holds |
|---|---|---|
| `energy-and-amplitude` | Energy and the amplitude of the wave | The two opening paragraphs, the boxed Connections: Waves and Particles, Figure 24.22, and the two paragraphs that say a wave's energy goes as its amplitude squared and that for an electromagnetic wave the amplitude is the maximum field strength |
| `average-intensity` | The average intensity of a sinusoidal wave | The three display equations for $\kIave$, the sentences that derive the second and the third from the first, and the statement that the peak intensity is twice the average |
| `fields-from-intensity` | Finding the field strengths from the intensity | Example 24.4, the microwave oven, which goes from a power and an area to an intensity and then to both field amplitudes |

## Concepts

Every concept of this section was written into `book.json` by the prep pass; the
page introduces all five and adds no node of its own.

| Concept | Where it is introduced | Also used by |
|---|---|---|
| `wave-energy-from-field-amplitude` | `energy-and-amplitude` | reinforced in `average-intensity` |
| `average-intensity-from-e0` | `average-intensity` | used in `fields-from-intensity` |
| `intensity-from-the-magnetic-amplitude` | `average-intensity` | used in `fields-from-intensity` |
| `peak-intensity-is-twice-average` | `average-intensity` | reinforced in `fields-from-intensity` |
| `find-fields-from-intensity` | `fields-from-intensity` | — |

Chapter 16's `intensity` ($\kIntens = \kP/A$) is used by `fields-from-intensity`
and introduced nowhere here, since 16.11 already owns it.

## Types the page binds

`intensity`, `electric-field`, `magnetic-field`, `velocity` and `power`, which is
exactly what `ch24/COLOR.md` gives 24.4. The area a power is spread over, the
permittivity and the permeability of free space, every length and every count are
untyped and stay in ink, as do the frame of every figure and the oven drawn in the
third. No new type and no hue of the page's own.

## Figures

```
sim-amplitude-squared · Figure 24.22 · wave-energy-from-field-amplitude · value add: variation by slider, since the book prints two amplitudes and the reader can set any, and shape in 3D, since the amplitude of an electromagnetic wave is the height of two crests in planes at right angles · still, because the comparison of two amplitudes is a state of the waves and has no clock in it; nothing moves and the figure registers no cycle · sliders: the amplitude factor k (untyped, 0.5 to 3.0, 2.0 by default, which is the book's own second wave) and the reference field E_0 (electric-field, 200 to 2000 V/m, 1000 V/m by default) · headline: "The lower wave carries a field k times the upper one's, so it carries k squared times the energy." · graph: none; two wave panels above a pair of energy bars · 2D by default with the 3D scene behind a view choice (archetype 10), the orbit bounded to a yaw from −115° to +29° and a pitch within ±70°, so the reader may turn from the book's own oblique view round to looking straight down the beams but never round behind them, where one beam hides the other and the comparison the figure is for is lost
sim-intensity-three-ways · Sim · average-intensity-from-e0, intensity-from-the-magnetic-amplitude, peak-intensity-is-twice-average · value add: variation by slider and standardisation, since the section writes the same intensity three ways and the figure works all three at once on one field strength so that the reader sees them land on one number · still, because an intensity is a state of the wave and has no time in it · slider: E_0 (electric-field, 200 to 5000 V/m, 2510 V/m by default, which is the field the worked example finds in the oven); choice: which amplitude the intensity is written from (the electric one, the magnetic one, or both), a discrete state and so a segmented control (rule 26.1) · headline: "A peak electric field of 2510 V/m carries 8.36 kW/m² on average and 16.7 kW/m² at the crest." · graph below the strip, the two intensities against the electric amplitude, both parabolas, with the working point pinned on each · 2D, since the relation between an amplitude and an intensity is a relation between quantities (rule 28.1)
sim-oven-intensity · Sim · find-fields-from-intensity · value add: variation by slider, since the reader can put any power onto any patch and watch the intensity and both field amplitudes answer, where the book works one oven once · still, because the oven's power and its floor are a setting and not a motion · sliders: the power P (power, 100 to 2000 W, 1000 W by default), the width of the heated patch (untyped, 0.10 to 0.60 m, 0.400 m by default) and its depth (untyped, 0.10 to 0.60 m, 0.300 m by default), which together are the book's 1.00 kW on 30.0 by 40.0 cm · headline: "1000 W spread over 0.120 m² is 8.33 kW/m², and a wave of that intensity carries 2.51 kV/m and 8.37 µT." · graph: none; the oven's floor drawn to one fixed scale, with three bars beside it for the intensity and the two field amplitudes · 2D, since the oven is a box and nothing about its shape is the lesson (rule 28.1)
```

Labels: `sim-amplitude-squared` names five things in its flat view (the two beams,
$\kEf$, $\kBmag$ and the two energy bars) and five in its scene, which is under
the six of rule 26.7, so every label is on by default and no Labels button is
needed. The other two figures name four things each.

The book's numbers are the defaults everywhere: the second wave of Figure 24.22
is twice the first, and the oven opens on 1.00 kW over 30.0 by 40.0 cm, so
`sim-oven-intensity` reproduces Example 24.4 on load and `sim-intensity-three-ways`
opens on the 2.51 kV/m that example finds.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure 25_04_01a.jpg` (Figure 24.22) | Kept as the original of `sim-amplitude-squared` | It is the figure the simulation replaces, so it travels in `originals` and the app can swap it in |
| `Figure 25_04_02a.jpg` (the satellite dish, unnumbered, inside a problem) | Not copied | `config.md` sets a figure that serves an exercise on the exercise card, but the problem it belongs to has no keyed answer and is left out with the other unkeyed problems, and an image belonging to a problem that is left out is not copied at all |

## Extra simulations considered

- A wave falling on a sheet and the energy arriving on it over a time, so that
  the reader could watch $\kE = \kIntens A \kt$ fill up. Left: the section states
  no such equation, 16.11 already owns the result, and the figure would open no
  view the three above do not.
- The resonance of water molecules that the first paragraph mentions in passing.
  Left: the section says only that the transfer is more efficient at the natural
  frequency and teaches nothing the figure could vary, so the drawing would be a
  mechanism animation of a sentence (rule 24.9).

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| Check Your Understanding | 0 | 0 | — |
| Conceptual question | 0 | 0 | — |
| AP test prep | 2 | 2 | — |
| Problem | 24 | 12 | 12 |

The first AP item is keyed in the source and is set as a graded choice. The
second is unkeyed in print, and its answer sits in the CNXML inside a comment, so
it is kept as an open item with an AI-marked suggested approach, as the four such
items of 24.2 were; the errata line for the chapter pass is below. Twelve
problems have no keyed answer and are left out: the intensity from a peak
magnetic field of 4.00 nT, the AM transmitter at 30.0 km, the satellite dish, the
demonstration that the peak intensity is twice the average, the 5.00 pF $LC$
circuit, the police radar, the spaghetti in the oven, the 200-turn coil antenna,
the 1.20 GHz wave measured at 0.500 m, the 2.00 H $LC$ circuit and both Create
Your Own Problem items.

Every exercise is set at the end with the problem set, since the module prints no
Check Your Understanding box and nothing here is a short Remember or Understand
check that belongs inline (rule 12). No exercise moves into or out of this
section.

## Tables

The module prints none.

## Wanted at chapter level

- `eq-intensity-power-area` → 24.4-average-intensity
- `eq-intensity-from-e0` → 24.4-average-intensity
- `eq-intensity-from-b0` → 24.4-average-intensity
- `eq-intensity-from-e0-b0` → 24.4-average-intensity
- `eq-peak-intensity` → 24.4-average-intensity
- `eq-e0-from-intensity` → 24.4-fields-from-intensity
- `eq-b0-from-e0` → 24.4-fields-from-intensity
- Errata: the second AP item of m42446 (`fs-id3156214`, two improvements that
  would make a radar set more sensitive) carries a solution the publisher
  commented out of the CNXML, so the book prints none; it is set here as an open
  item with an AI-marked suggested approach, as 24.2's four such items are.
- Errata: the key the book prints for part (b) of the Critical Thinking problem
  of m42446 (`exer-00001`) reads "E would increase" where the question asks what
  happens to $\kBmag$; it is set here as the magnetic field increasing, which is
  the only reading the question allows, and the section's `exercise_notes` says
  so.
- No concept row and no symbol row needs changing: the five concepts, the ten
  variables and the seven equations the prep pass staged for 24.4 are all used as
  they stand, and `B_0mag`, `I_ave` and `I_0peak` are written with the macros the
  pass gave them.

### What the chapter pass did (2026-09-15)

Every anchor above is written, the five intensity equations to
`24.4-average-intensity` and the two that solve for a field to
`24.4-fields-from-intensity`; the section's ten variables are anchored to
`24.4-average-intensity`, where every one of them is introduced. Both errata are
gathered under a heading of their own in `ch24/exploration.md` and the AP count
of `config.md` now says that a key the publisher commented out of the CNXML is no
key. The `draws` column of `sim-intensity-three-ways` gained `velocity`, which
its readout writes with the macro for the speed of light. The view choice of
Figure 24.22 was checked in the browser in both themes: with WebGL the flat
canvas is hidden by `style.display` and the scene takes its place, and without
WebGL no view choice is offered at all and the flat drawing stands alone.
