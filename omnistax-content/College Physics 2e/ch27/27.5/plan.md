# Plan: 27.5 Single Slit Diffraction

Written before the page was built (root rule 5), under `ch27/config.md`, which
replaces the per-section stop with a plan left for review (applied as proposed on
2026-09-28, on Chen's instruction to finish the book without check-ins).

## Sub-concepts

The module prints no narrative header, so the headers are OmniStax's.

| Span | Header | What it holds |
|---|---|---|
| `single-slit-pattern` | The single slit pattern | The opening paragraph and the pattern of Figure 27.21 |
| `single-slit-minima` | Where the minima fall | The rays from one slit (Figure 27.22), the graph of Figure 27.23 and $\kDslit\sin\theta = m\klam$ |
| `single-slit-example` | Calculating single slit diffraction | Example 27.4 with Figure 27.24 |

## Concepts

All three were written by the prep pass; the page adds none.

| Concept | Introduced in |
|---|---|
| `single-slit-pattern` | `single-slit-pattern` |
| `single-slit-minima` | `single-slit-minima` |
| `single-slit-calculations` | `single-slit-example` |

## Types the page binds

`position` only, as `ch27/COLOR.md` gives 27.5: $\klam$ and $\kDslit$. No readout states an intensity, so `intensity` is not bound and the intensity axes read "relative intensity" in ink. Angles, $\sin\theta$ and the order $m$ are ink. The light is drawn in the colour of its wavelength (rule 7's third family) by the `spectral()` function 27.3 uses, the page's only literal colours besides the black ground (`#000`) of the strip where the pattern is seen, which is the darkened screen.

## Figures

```
sim-single-slit-pattern · Figure 27.21 + 27.23 · single-slit-pattern, single-slit-minima · value add: variation by slider, the broad central maximum and the dim side maxima answer the slit width and the wavelength, and the minima move to mλ/D as the reader watches · still: a pattern is a state, no clock · sliders λ (position, 380–750 nm, 633) and D (position, 1.00–10.0 μm, 2.50) · headline: "Light of 633 nm through a slit 2.50 μm wide has its first minima at sin θ = ±0.253, and the central maximum is twice as wide as the others." · graph alone: relative intensity against sin θ from −1 to 1, the true curve solid and the same curve six times higher dashed (the book's "six times higher than shown"), the pattern as seen in a strip beneath on the same axis · 2D
sim-slit-rays · Figure 27.22 + 27.24 · single-slit-minima, single-slit-calculations · value add: variation by slider, the book's four fixed angles become one direction the reader turns, the extra path D sin θ is counted off in wavelengths, and Example 27.4 is the default state · still · sliders θ (untyped, 0–60°, 45.0°, dashed circles at every minimum asin(mλ/D) and at the book's bright direction D sin θ = 3λ/2), λ (position, 380–750 nm, 550), D (position, 1.00–5.00 μm, 1.56) · headline: "Toward θ = 45.0° the ray from the bottom of the slit travels 2.00 wavelengths farther than the ray from the top, so every ray has a partner that cancels it and the screen is dark." · graph beside: relative intensity against θ from 0 to 60°, the point at the current θ · 2D
```

Labels: the slit drawn at one size whatever its width, the wavelength drawn to the same scale, so $\kDslit\sin\theta$ against $\klam$ is true; ticks along the extra path mark each whole wavelength. Entity labels: D, θ, D sin θ and the "× 6" on the dashed curve, all under six.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_28_05_01a.jpg` (27.21), `Figure_28_05_03a.jpg` (27.23) | originals of `sim-single-slit-pattern` | folded: the same pattern drawn as a graph twice |
| `Figure_28_05_02a.jpg` (27.22), `Figure_28_05_04a.jpg` (27.24) | originals of `sim-slit-rays` | folded: the example's rays are one state of the figure |
| `Figure_28_03_07a.jpg` (red dots, from 27.3) | on the card of `cq2` | serves the moved conceptual question |

## Extra simulations considered

- A slit narrowed until its first minimum passes 90°, so no minimum remains. Left: `sim-slit-rays` reaches that state (D below λ removes every circle from the θ slider), and the moved conceptual question asks it.

## Exercises

| Kind | In the book | Set here | Left out or moved |
|---|---|---|---|
| AP test prep | 2 | 2 | — (1 keyed choice; 1 unkeyed kept open with an AI approach) |
| Conceptual | 1 | 3 | 2 moved in: `fs-id1169737897920` from 27.3 with its photograph, `fs-id1169738212208` from 27.4 |
| Problems | 14 | 7 | 7 unkeyed left out |

## Wanted at chapter level

- `eq-single-slit-minima` → 27.5-single-slit-minima
- variables `27.5/D_slit`, `27.5/θ`, `27.5/m`, `27.5/λ` → 27.5-single-slit-minima
- No concept, edge or symbol fix.

Applied by the chapter pass (2026-09-28): The equation and variable anchors are written as listed.
