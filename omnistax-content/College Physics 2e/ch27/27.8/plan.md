# Plan: 27.8 Polarization

Written before the page was built (root rule 5), under `ch27/config.md`, which
replaces the per-section stop with a plan left for review (applied as proposed on
2026-09-28, on Chen's instruction to finish the book without check-ins).

## Sub-concepts

The module prints three narrative headers (Polarization by Reflection, Polarization
by Scattering, Liquid Crystals and Other Polarization Effects in Materials); the
headers before the first of them, and the splits inside them, are OmniStax's.

| Span | Header | What it holds |
|---|---|---|
| `polarization` | Polarization | The opening, Figure 27.36, the transverse wave and Figure 27.37, the ropes and Figure 27.38 |
| `polarizing-filters` | Unpolarized light and polarizing filters | The Sun's unpolarized light, Polaroid, the axis of a filter, Figures 27.39 to 27.41 |
| `malus-law` | Malus’s law | $E\cos\theta$, $I = I_0\cos^2\theta$ and Figure 27.42 |
| `malus-example` | Calculating intensity reduction | Example 27.8 |
| `reflection` | Polarization by Reflection | The book's header: the glare, Figure 27.43 |
| `brewster` | Brewster’s law | $\tan\theta_{\text{b}} = n_2/n_1$ |
| `filter-molecules` | Polarizing filters at the atomic scale | Things Great and Small, Figures 27.44 and 27.45 |
| `brewster-example` | Calculating polarization by reflection | Example 27.9 |
| `scattering` | Polarization by Scattering | The book's header, Figure 27.46, sunglasses, the Take-Home Experiment |
| `liquid-crystals` | Liquid Crystals and Other Polarization Effects in Materials | The book's header, LCDs, optical activity, Figures 27.47 and 27.48 |
| `stress-and-birefringence` | Stress and birefringence | Figures 27.49 and 27.50 |

## Concepts

All seven were written by the prep pass; the page adds none.

| Concept | Introduced in |
|---|---|
| `light-polarization` | `polarization` |
| `polarizing-filters` | `polarizing-filters` |
| `malus-law` | `malus-law` |
| `polarization-by-reflection` | `reflection` |
| `brewsters-law` | `brewster` |
| `polarization-by-scattering` | `scattering` |
| `optical-activity` | `liquid-crystals` |

## Types the page binds

`electric-field` and `intensity`, as `ch27/COLOR.md` gives 27.8: $\kEf$, $\kEfpar$, $\kEfperp$ and every polarization arrow and dot wear the field's hue; $\kIntens$ and $\kIopol$ wear intensity's. Angles, indices and the rope's amplitude are untyped and in ink. The light is given no wavelength anywhere in the section, so rays are ink; the one colour that is the physical fact is the grey of the LCD pixel in `sim-rotator`, drawn as the brightness it is.

## Figures

```
sim-rope-slit · Figure 27.38 · light-polarization · value add: flow by animation and variation by choice, the wave runs down the rope and either passes the slit or stops at it · moving: the rope's wave travels, a clock is the idea · choices rope (vertical, horizontal) and slit (vertical, horizontal), discrete states · headline: "A vertically polarized wave passes the vertical slit." · none · locked view (rule 28.2) from the book's viewpoint, since the book draws the two planes in perspective; no orbit
sim-filter-chain · Figure 27.39 + 27.40 + 27.41 + 27.42 · polarizing-filters, malus-law · value add: variation by slider, the book's three fixed states (a), (b), (c) of 27.41 become one second filter the reader turns, with the end-on view of 27.42 as an inset, and flow by animation, a pulse of light runs the ray in its direction of propagation · arrows: kinematic (the slender arrow of the ray's direction of propagation), symbolic (the field arrows E and the filters' axes, drawn as they are) · moving: a pulse of light runs along the ray, as bright as each stretch, through the two filters to the ray's end, a 5 s loop holding 1.2 s with the pulse's head where the book's arrowhead was · slider θ (untyped, 0–90°, 45) with dashed circles at 45° (b), 71.6° (Example 27.8) and 90° (c) · headline: "The second filter is turned 45.0° from the first and passes 50.0% of the light that reaches it." · inset beside: the end-on view of the second filter with E, its component E cos θ and the arc θ · locked view (rule 28.2); a full 3D scene was the config's candidate and is not built, because the book's viewpoint shows the chain and the end-on inset gives the one other view that carries meaning, so an orbit would add no view (rule 28.5)
sim-brewster · Figure 27.43 · polarization-by-reflection, brewsters-law · value add: variation by slider, the reflected light's share of the two polarizations follows the angle of incidence and turns wholly horizontal at Brewster's angle · still · slider θ incidence (untyped, 0–85°, 53.1) with a dashed circle at θ_b; choice the surface (water 1.333, crown glass 1.520, Example 27.9) · headline: "At 53.1° on water the reflected light is completely polarized parallel to the surface." · a bar beside the rays for the share polarized parallel to the surface · 2D; dots are the field perpendicular to the page and double arrows the field in the page, as the book draws them
sim-filter-molecules · Figure 27.44 + 27.45 · polarizing-filters, malus-law · value add: variation by slider, the field splits into the part along the molecules, which the electrons absorb, and the part along the axis, which passes · still · slider θ (untyped, 0–90°, 30) between the field and the axis · headline: "The field makes 30.0° with the axis; 0.866 of it passes and the part along the molecules is absorbed." · none · 2D, face-on to the filter
sim-scattering · Figure 27.46 · polarization-by-scattering · value add: variation by slider, the scattered light turns from unpolarized forward to completely polarized at 90° · still · slider φ the direction of view from the original ray (untyped, 0–180°, 90) with a dashed circle at 90° · headline: "Seen at 90.0° from the sunlight, the scattered light is completely polarized." · none · 2D, the page's plane holding the ray and the line of sight, dots out of the page
sim-rotator · Figure 27.47 + 27.48 · optical-activity, malus-law · value add: variation by slider and choice, the rotation of the middle layer decides what the analyzer passes, and the LCD's pixel darkens as the rotation is switched off · still · choice the layer (liquid crystal with a horizontal analyzer, optically active sample with a vertical analyzer); slider rotation (untyped, 0–90°, 90) with circles at 0° (voltage on) and 90° (no voltage) · headline: "The liquid crystal turns the polarization 90.0°, so the horizontal filter passes all of it and the pixel is bright." · a pixel square beside · locked view as sim-filter-chain
```

Labels: each figure names at most six things (source, the filters, E, axis); the chain's filters are named once each. The rope figure names the slit and the rope's plane. Hover names carry the unpolarized burst's arrows.

## Photographs and kept images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_28_08_01a.jpg` (27.36, the river) | keep, `photo-river` | the text points at it |
| `Figure_28_08_02a.jpg` (27.37, the EM wave) | keep as the book's image, `fig-em-wave` | the same arrangement is Figure 24.7's 3D scene in 24.2; a copy here adds nothing |
| `Figure_28_08_06a.jpg` (27.41, with the photograph (d)) | original of `sim-filter-chain` | folded; (d) is kept among the originals |
| `OSX_CP2e_Figure_28_08_12.jpg` (27.47, with the laptop (c)) | original of `sim-rotator` | folded |
| `Figure_28_08_14a.jpg` (27.49, the stressed lens) | keep, `photo-stressed-lens` | the text points at it |
| `Figure_28_08_15a.jpg` (27.50, birefringence) | keep as the book's image, `fig-birefringence` | two rays and their names, no variable the text varies |
| `Figure_28_08_16a.jpg` (the AP item's first filter) | on the card of `ap2` | serves the exercise |

## Extra simulations considered

- Three filters with the middle one turning (the conceptual question). Left: the chain already shows each filter passing $\cos^2$ of the angle to the one before.

## Exercises

| Kind | In the book | Set here | Left out or moved |
|---|---|---|---|
| AP test prep | 2 | 2 | — (1 keyed choice; 1 unkeyed open with its table and image) |
| Conceptual | 7 | 7 | — (all unkeyed, AI approaches) |
| Problems | 18 | 9 | 8 unkeyed left out; `exer-00001` moved to 27.4 |

## Wanted at chapter level

- `eq-transmitted-amplitude` → 27.8-malus-law
- `eq-malus-law` → 27.8-malus-law
- `eq-brewsters-law` → 27.8-brewster
- variables `27.8/E_field`, `27.8/θ`, `27.8/I_intens`, `27.8/I_0pol` → 27.8-malus-law; `27.8/θ_b`, `27.8/n_1`, `27.8/n_2` → 27.8-brewster
- glossary `27.8/polarization`, `27.8/polarized`, `27.8/direction of polarization`, `27.8/vertically polarized`, `27.8/horizontally polarized` → 27.8-polarization; `27.8/unpolarized`, `27.8/axis of a polarizing filter` → 27.8-polarizing-filters; `27.8/reflected light that is completely polarized`, `27.8/Brewster’s law`, `27.8/Brewster’s angle` → 27.8-brewster; `27.8/optically active` → 27.8-liquid-crystals; `27.8/birefringent` → 27.8-stress-and-birefringence
- No concept, edge or symbol fix.

Applied by the chapter pass (2026-09-28): The equation and variable anchors are written as listed. The two worked examples, which the page had numbered 27.3 and 27.4, are renumbered 27.8 and 27.9 as the publisher counts them, in the headings, the Malus figure's special and the problem that cites Example 27.8. The rope figure's locked view is raised from a pitch of −0.14 to −0.4 so that the horizontal wave no longer reads edge-on. The glossary lines are not written, since a glossary row carries no anchor field; each term is found on its section's page.
