# Plan: 27.6 Limits of Resolution: The Rayleigh Criterion

Written before the page was built (root rule 5), under `ch27/config.md`, which
replaces the per-section stop with a plan left for review (applied as proposed on
2026-09-28, on Chen's instruction to finish the book without check-ins).

## Sub-concepts

The module prints no narrative header, so the headers are OmniStax's.

| Span | Header | What it holds |
|---|---|---|
| `diffraction-limits` | Diffraction limits resolution | The opening paragraphs, Figure 27.25 and the Take-Home Experiment |
| `rayleigh` | The Rayleigh criterion | $\theta = 1.22\klam/\kDap$, Figure 27.26 and Connections: Limits to Knowledge |
| `hubble-example` | Calculating diffraction limits | Example 27.5 with Figures 27.27 and 27.28 |
| `beam-spreading` | Diffraction spreading of a beam | The paragraph on beams and Figure 27.29 |
| `resolving-power` | The resolving power of a lens | $\kx = 1.22\klam\kd/\kDap$, the numerical aperture, Figures 27.30 and 27.31 |

## Concepts

All six were written by the prep pass; the page adds none.

| Concept | Introduced in |
|---|---|
| `diffraction-limits-resolution` | `diffraction-limits` |
| `rayleigh-criterion` | `rayleigh` |
| `find-a-resolvable-separation` | `hubble-example` |
| `diffraction-spreading-of-a-beam` | `beam-spreading` |
| `resolving-power-of-a-lens` | `resolving-power` |
| `resolution-and-numerical-aperture` | `resolving-power` |

## Types the page binds

`position` only, as `ch27/COLOR.md` gives 27.6: $\klam$, $\kDap$, $\kx$, $\kd$, $\ks$. The graphs read "relative intensity" in ink, so `intensity` is not bound. Angles, the distance $r$, the index $n$ and the numerical aperture are untyped and in ink, as the chapter's variable rows give them. The light is drawn in the colour of its wavelength by the `spectral()` function 27.3 and 27.5 use (rule 7's third family), and the image panel's black ground (`#000`) is the darkened screen.

## Figures

```
sim-rayleigh · Figure 27.25 + 27.26 · diffraction-limits-resolution, rayleigh-criterion · value add: variation by slider, the three fixed states of 27.25 and the one Rayleigh state of 27.26 become one separation the reader closes, and the aperture and wavelength move the limit · still: a pattern is a state, no clock · sliders θ separation (untyped, 0–800 μrad, dashed circle at 1.22λ/D labelled Rayleigh), λ (position, 380–750 nm, 550), D (position, 1.50–8.00 mm, 3.00, the eye's pupil) · headline: "Two sources 300 μrad apart seen through an aperture 3.00 mm wide are resolved, since the limit for 550-nm light is 224 μrad." · graph beside a square image panel: the two patterns dashed and their sum solid against θ from −800 to 800 μrad, the image as seen on black to the left · 2D
sim-beam-spread · Figure 27.29 · diffraction-spreading-of-a-beam · value add: variation by slider, the spreading angle answers the beam diameter and wavelength, drawn 200 times larger than it is (rule 28.4, stated in the readout) · still · sliders D (position, 0.50–5.00 mm, 1.00), λ (position, 380–750 nm, 633) · headline: "A beam 1.00 mm across of 633-nm light spreads at 772 μrad." · none · 2D
sim-resolving-power · Figure 27.30 · resolving-power-of-a-lens, resolution-and-numerical-aperture · value add: variation, the cone of light the objective gathers widens as D grows or d shrinks, and the smallest separation x shrinks with it · still · sliders d (position, 2.0–20.0 mm, 5.0), D (position, 1.0–10.0 mm, 4.0), λ (position, 380–750 nm, 550) · headline: "An objective 4.0 mm across held 5.0 mm above the specimen can separate points 0.84 μm apart." · none; the specimen's two points drawn on a magnified inset · 2D, vertical like the book's (b)
sim-focal-spot · Figure 27.31 · resolution-and-numerical-aperture · value add: intuition and variation, the choice turns the geometric point into the wave spot, and the numerical aperture narrows it · still · choice optics (geometric, wave; discrete states), slider NA (untyped, 0.10–0.95, 0.50) · headline: "In wave optics the rays never meet at a point; the focal spot is about 0.67 μm across for NA = 0.50." · none · 2D
```

Labels: every figure under six entity labels (object 1, object 2, D, θ, x, d, α). The image panel's spots carry hover names instead of labels, since they move under each other.

## Photographs

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_28_06_03a.jpg` (27.27, M82 from the ground and from Hubble) | keep, `photo-m82` | the text points at it for the detail Hubble sees |
| `Figure_28_06_04a.jpg` (27.28, Arecibo) | keep, `photo-arecibo` | the text and a problem point at it |
| `Figure_28_06_01a.jpg`, `_02a` (27.25, 27.26) | originals of `sim-rayleigh` | folded |
| `_05a`, `_06a`, `_07a` | originals of their sims | replaced |

## Extra simulations considered

- The eye's two headlights at a distance. Left: `s = rθ` is a multiplication the Hubble example shows, and a figure would only restate the unkeyed problems.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| AP test prep | 2 | 2 | — (1 keyed choice; 1 unkeyed open with an AI approach) |
| Conceptual | 1 | 1 | — |
| Problems | 13 | 5 | 8 unkeyed |

## Wanted at chapter level

- `eq-rayleigh-criterion` → 27.6-rayleigh
- `eq-arc-separation` → 27.6-hubble-example
- `eq-resolving-power` → 27.6-resolving-power
- `eq-half-angle` → 27.6-resolving-power
- `eq-numerical-aperture` → 27.6-resolving-power
- `eq-resolving-power-na` → 27.6-resolving-power
- variables `27.6/θ`, `27.6/λ`, `27.6/D_ap` → 27.6-rayleigh; `27.6/s`, `27.6/r` → 27.6-hubble-example; `27.6/x`, `27.6/d`, `27.6/α_half`, `27.6/NA`, `27.6/n` → 27.6-resolving-power
- glossary `27.6/Rayleigh criterion` → 27.6-rayleigh
- No concept, edge or symbol fix.

Applied by the chapter pass (2026-09-28): The equation and variable anchors are written as listed. The glossary lines are not written, since a glossary row carries no anchor field; each term is found on its section's page.
