# Plan: 27.3 Young’s Double Slit Experiment

Written before the page was built (root rule 5), under `ch27/config.md`, which
replaces the per-section stop with a plan left for review (applied as proposed on
2026-09-28, on Chen's instruction to finish the book without check-ins).

## Sub-concepts

The module prints no narrative header, so the headers are OmniStax's.

| Span | Header | What it holds |
|---|---|---|
| `double-slit-experiment` | Young’s double slit experiment | Newton and Huygens, Young's experiment (Figure 27.10), coherence, and the adding of two waves (Figure 27.11) |
| `waves-from-two-slits` | Waves from two slits | The two coherent sources and their pattern (Figure 27.12), the paths to one point on the screen, and the Take-Home Experiment: Using Fingers as Slits |
| `path-difference` | The path length difference | $\kdl = \kd\sin\theta$ (Figures 27.13 + 27.14), the two conditions and the order $m$ |
| `interference-fringes` | Interference fringes | The fringes, why a small $\kd$ spreads them (Figure 27.15) |
| `measuring-wavelength` | Measuring a wavelength with two slits | Examples 27.1 and 27.2 |

## Concepts

All nine were written by the prep pass; the page adds none.

| Concept | Introduced in |
|---|---|
| `youngs-double-slit` | `double-slit-experiment` |
| `coherent-sources` | `double-slit-experiment` |
| `path-length-difference` | `path-difference` |
| `double-slit-constructive` | `path-difference` |
| `double-slit-destructive` | `path-difference` |
| `order-of-interference` | `path-difference` |
| `fringe-spacing` | `interference-fringes` (the book derives it only in a problem; the span's figure draws $\kdy$ and the problem card carries the derivation) |
| `find-wavelength-from-a-pattern` | `measuring-wavelength` |
| `highest-order` | `measuring-wavelength` |

## Types the page binds

`position` only, as `ch27/COLOR.md` gives 27.3: $\klam$, $\kd$, $\kdl$, $\kx$, $\ky$, $\kdy$. No readout states an intensity, so `intensity` is not bound. Angles, the order $m$ and the amplitudes of Figure 27.11 are ink. The light is drawn in the colour of its wavelength (rule 7's third family) by one `spectral()` function, the only literal colours of the page; the two waves of Figure 27.11 are told apart by `F.cat(0)` and `F.cat(1)`, and where two waves of one light must be told apart one is dashed.

## Figures

```
sim-young-apparatus · Figure 27.10 · youngs-double-slit · value add: variation by slider (the pattern on the far wall answers the wavelength, in its own colour, and the slit separation) · still: a pattern is a state, not a motion · sliders λ (position, 380–750 nm, 633) and d (position, 0.0050–0.0400 mm, 0.0100) · headline: "Light of 633 nm through slits 0.0100 mm apart lays bright lines 6.33 cm apart on a wall 1.00 m away." · graph none · locked view (rule 28.2), the book's own oblique viewpoint, no orbit
sim-two-waves · Figure 27.11 · coherent-sources, youngs-double-slit · value add: variation by slider, the book's two states (a) and (b) are two positions of one shift, and every shift between them is reachable · still: the shift is a setting, no clock · sliders: the shift of wave 2 in wavelengths (untyped, 0–1, 0, dashed circles at 0, ½ and 1) and A₂/A₁ (untyped, 0.5–3, 1, circle at 1), which also works the AP items on unequal amplitudes · headline: "In phase, the two waves add to a wave of amplitude 2.00 A₁." · graph: three stacked wave panels, wave 1 cat(0), wave 2 cat(1), resultant ink · 2D
sim-ripple-tank · Figure 27.12 (parts a and b; the PASCO photograph of part c is kept as its own photo row under the same number) · youngs-double-slit, coherent-sources · value add: flow by animation, since the book's two stills are waves the reader must imagine travelling, and variation by slider · moving: the crests travel out from the slits, one cycle one period, loop · sliders λ (position, 400–750 nm, 633) and d (position, 1.00–4.00 µm, 2.00) · headline: "Crests from two slits 2.00 µm apart meet along lines, and the first bright line leaves at 18.4°." · graph none; the screen at right marks Max and Min · 2D
sim-path-difference · Figure 27.13 + 27.14 · path-length-difference, double-slit-constructive, double-slit-destructive, order-of-interference · value add: variation by slider, one direction the reader turns replaces the book's two fixed points and its triangle, and the arrival crest-to-crest or crest-to-trough is seen, not imagined · still · sliders θ (untyped, 0–35°, 30.0°, dashed circles at every maximum and minimum), λ (position, 400–750 nm, 600), d (position, 1.50–5.00 µm, 3.00, the book's problem numbers: the third minimum at 30.0°) · headline: "Toward θ = 30.0° the lower path is 2.50 wavelengths longer, so the waves arrive crest to trough and the screen is dark." · graph: the two arriving waves and their sum beside the scene · 2D
sim-fringe-pattern · Figure 27.15, with Examples 27.1 and 27.2 · double-slit-constructive, fringe-spacing, find-wavelength-from-a-pattern, highest-order · value add: variation by slider · still · sliders λ (position, 380–750 nm, 633), d (position, 0.0050–0.0500 mm, 0.0100), x (position, 0.50–2.00 m, 1.00); choice m = 1, 2, 3 (3, the example's third bright line) · headline: "The third bright line of 633-nm light through slits 0.0100 mm apart lies at 10.95°, 0.193 m from the center of a screen 1.00 m away." · graph: the intensity drawn against the screen, as the book draws it, and the fringes as seen beside it; drawn to one scale in both directions so every angle is true · 2D
```

Labels: every figure names under six things; the fringes of 27.10 and 27.15 are one kind and are named once. Envelope: Figures 27.10 and 27.15 draw the falloff the book shows by giving each slit a width of 2d/15, so the pattern dims outward and no order through the seventh is missing; the note says nothing about it, since 27.5 teaches the single slit.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_28_03_01a.jpg` (27.10) | original of `sim-young-apparatus` | replaced |
| `Figure_28_03_02a.jpg` (27.11) | original of `sim-two-waves` | replaced |
| `Figure_28_03_03a.jpg` (27.12) | original of `sim-ripple-tank`, and kept as `photo-double-slit-pattern` for part (c) | the text points at the pattern a screen shows |
| `Figure_28_03_04a.jpg`, `Figure_28_03_05a.jpg` (27.13, 27.14) | originals of `sim-path-difference` | folded |
| `Figure_28_03_06a.jpg` (27.15) | original of `sim-fringe-pattern` | replaced |
| `Figure_28_03_07a.jpg` (red dots) | not copied here | travels with its conceptual question to 27.5 |
| `Figure_28_03_08a.jpg` ($\kdy = \kx\klam/\kd$ sketch) | on the cards of `p6` and `p7` | serves keyed problems |

## Extra simulations considered

- A white-light pattern with every wavelength overlaid, as Young saw with sunlight. Left: the text mentions it once, and 27.4 draws the spectra of a grating.

## Exercises

| Kind | In the book | Set here | Left out or moved |
|---|---|---|---|
| AP test prep | 6 | 6 | — (3 keyed; 3 unkeyed kept open with AI approaches; the keyed "select two" item is open with the book's key) |
| Conceptual | 4 | 3 | `fs-id1169737897920` moves to 27.5 with its image |
| Problems | 15 | 8 | 7 unkeyed left out |

## Wanted at chapter level

- `eq-path-difference` → 27.3-path-difference
- `eq-double-slit-constructive` → 27.3-path-difference
- `eq-double-slit-destructive` → 27.3-path-difference
- `eq-wavelength-from-pattern` → 27.3-measuring-wavelength
- `eq-highest-order` → 27.3-measuring-wavelength
- `eq-fringe-spacing` → 27.3-interference-fringes
- variables `27.3/d`, `27.3/θ`, `27.3/m`, `27.3/λ`, `27.3/Δl` → 27.3-path-difference; `27.3/x`, `27.3/y`, `27.3/Δy` → 27.3-interference-fringes
- No concept, edge or symbol fix.
