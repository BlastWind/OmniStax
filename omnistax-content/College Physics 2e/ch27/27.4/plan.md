# Plan: 27.4 Multiple Slit Diffraction

Written before the page was built (root rule 5), under `ch27/config.md`, which
replaces the per-section stop with a plan left for review (applied as proposed on
2026-09-28, on Chen's instruction to finish the book without check-ins).

## Sub-concepts

The module prints no narrative header, so the headers are OmniStax's.

| Span | Header | What it holds |
|---|---|---|
| `diffraction-grating` | Diffraction gratings | What a grating is, transmission and reflection gratings (Figures 27.16, 27.17), the sharper pattern (Figure 27.18), iridescence |
| `grating-condition` | The condition for constructive interference | $\kd\sin\theta = m\klam$ (Figure 27.19), where gratings are used, and the Take-Home Experiment: Rainbows on a CD |
| `grating-spectrum` | The spectrum on a screen | Example 27.3 (Figure 27.20) |

## Concepts

All four were written by the prep pass; the page adds none.

| Concept | Introduced in |
|---|---|
| `diffraction-grating` | `diffraction-grating` |
| `grating-maxima-are-sharper` | `diffraction-grating` |
| `grating-constructive-condition` | `grating-condition` |
| `grating-spectrum-on-a-screen` | `grating-spectrum` |

## Types the page binds

`position` only, as `ch27/COLOR.md` gives 27.4: $\klam$, $\kd$, $\kdl$, $\kx$, $\ky$. No readout states an intensity, so `intensity` is not bound; the graphs of Figure 27.18 are relative brightness in ink. Angles, the order $m$ and the number of slits are ink. Light is drawn in the colour of its wavelength (rule 7's third family) by one `spectral()` function, as in 27.3, the page's only literal colours besides the black ground (`#000`) of the strip that shows the screen as it is seen, and the white (`#fff`) of the central maximum of white light on that strip.

## Figures

```
sim-grating-spectrum · Figure 27.16 + 27.20 · diffraction-grating, grating-spectrum-on-a-screen · value add: variation by slider and choice (white light fans into rainbows in its true colours, and the orders spread as the lines crowd together), with Example 27.3's numbers on load · still: a spectrum is a state, not a motion · sliders d (position, 0.80–5.00 µm, 1.00, detents at the book's 10,000, 5000 and 2000 lines per centimeter) and x (position, 0.50–2.50 m, 2.00); choice light: white, 633 nm, 450 nm (white) · headline: "White light through a grating with 10,000 lines per centimeter spreads its first-order rainbow from 0.815 m to 2.338 m along a screen 2.00 m away." · graph none; the screen as it is seen stands in a strip beside the scene on the same scale · 2D, one scale in both directions so every angle is true
sim-grating-sharpness · Figure 27.18 · grating-maxima-are-sharper · value add: variation by slider, the number of slits the book only describes ("as the number of slits is increased") becomes the slider, and the double slit stays above as the reference · still · slider N (untyped count, 2–30, 8, circle at 2 where the grating is a double slit) and λ (position, 400–700 nm, 600); d fixed at 2.00 µm · headline: "With 8 slits the bright lines stand where the double slit's do, but each is 0.25 as wide, with 6 small peaks between neighbors." · graph: two stacked intensity panels against sin θ, double slit above, grating below, the same axis · 2D
sim-grating-rays · Figure 27.19 · grating-constructive-condition · value add: variation by slider, the direction θ turns and the five path differences are seen to be equal, each $\kd\sin\theta$, while the five arriving waves and their sum show the in-phase arrival · still · sliders θ (untyped, 0–40°, the first maximum, dashed circles at every maximum), λ (position, 400–700 nm, 600), d (position, 1.00–3.00 µm, 2.00) · headline: "Toward θ = 17.5° each ray travels 1.00 wavelength farther than its neighbor, so all five arrive in phase." · graph: the five arriving waves and their sum beside the scene · 2D
```

Labels: every figure names under six things; the orders of 27.16 + 27.20 are named once each (m = 0, 1, 2) and the rest carried by the strip; the five triangles of 27.19 are one kind, and only one carries its Δl label.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_28_04_01a.jpg` (27.16) | original of `sim-grating-spectrum` | folded |
| `Figure_28_04_02a.jpg` (27.17) | kept as `photo-opal-butterfly` | the text points at it by number |
| `Figure_28_04_03a.jpg` (27.18) | original of `sim-grating-sharpness` | replaced |
| `Figure_28_04_04a.jpg` (27.19) | original of `sim-grating-rays` | replaced |
| `Figure_28_04_05a.jpg` (27.20) | original of `sim-grating-spectrum` | folded |
| `Figure_28_04_06a-4339.jpg` ($\Delta y$ sketch) | on the card of the problem that uses it | serves a keyed problem |

## Extra simulations considered

- A reflection grating (a CD turned in sunlight). Left: the transmission figure already shows every relation the text states.

## Exercises

| Kind | In the book | Set here | Left out or moved |
|---|---|---|---|
| AP test prep | 2 | 2 | — (1 keyed choice; 1 unkeyed kept open with an AI approach) |
| Conceptual | 7 | 6 | `fs-id1169738212208` (single slit with no minimum) moves to 27.5 |
| Problems | 22 | 11 | 11 unkeyed left out; `exer-00001` (keyed Critical Thinking grating problem) arrives from 27.8, so 12 are set |

## Wanted at chapter level

- `eq-grating-constructive` → 27.4-grating-condition
- `eq-screen-position` → 27.4-grating-spectrum
- variables `27.4/d`, `27.4/θ`, `27.4/m`, `27.4/λ` → 27.4-grating-condition; `27.4/x`, `27.4/y` → 27.4-grating-spectrum
- exercise `27.4/p12` (`exer-00001`, `"source_section": "27.8"`) and its two `exercise_concepts` rows → add to 27.4 once 27.8 is built; the row is ready in `/home/flober/.claude/jobs/d591c33b/tmp/scratch/college-physics-2e-27.4/p12.json` (the validator refuses a `source_section` to an unbuilt section, and the notes already describe it as set here)
- No concept, edge or symbol fix.

Applied by the chapter pass (2026-09-28): The equation and variable anchors are written as listed, and `p12` (`exer-00001`, `source_section` 27.8) is added with its two `exercise_concepts` rows. Example 27.3's printed 0.815 m against the 0.822 m that $(2.00\;\text{m})\tan 22.33^\circ$ gives is named in `notes` and `exploration.md`; the example stays as printed and the figure, which computes its distances, shows 0.822 m. The key's centimeters for lines per centimeter in the 30,000-line problem is named there too.
