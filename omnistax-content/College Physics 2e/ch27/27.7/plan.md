# Plan: 27.7 Thin Film Interference

Written before the page was built (root rule 5), under `ch27/config.md`, which
replaces the per-section stop with a plan left for review (applied as proposed on
2026-09-28, on Chen's instruction to finish the book without check-ins).

## Sub-concepts

The module prints one narrative header, Problem-Solving Strategies for Wave Optics; the others are OmniStax's.

| Span | Header | What it holds |
|---|---|---|
| `thin-films` | Colors from thin films | The opening paragraph on oil slicks, soap bubbles and Agnes Pockels, Figure 27.32 |
| `phase-change` | A phase change on reflection | Rays 1 and 2, the italic rule, Figure 27.33, the soap bubble that is dark where it is thinnest |
| `path-difference` | The path length difference | $2\ktfilm$ against $\klamn = \klam/n$, Langmuir and Blodgett |
| `coating-example` | Non-reflective coatings | Example 27.6 |
| `film-conditions` | Constructive and destructive films | The two conditions, Example 27.7 |
| `wedges` | Air wedges and Newton’s rings | The microscope slides (Figure 27.34), Newton’s rings (Figure 27.35), wings, paint and banknotes, the Take-Home Experiment |
| `strategies` | Problem-Solving Strategies for Wave Optics | The book’s eight steps as a numbered list |

## Concepts

All five were written by the prep pass; the page adds none.

| Concept | Introduced in |
|---|---|
| `thin-film-interference` | `thin-films` |
| `phase-change-on-reflection` | `phase-change` |
| `thin-film-conditions` | `path-difference` |
| `nonreflective-coating` | `coating-example` |
| `wedges-and-newtons-rings` | `wedges` |

## Types the page binds

`position` only, as `ch27/COLOR.md` gives 27.7: $\klam$, $\klamn$, $\ktfilm$ and the spacer under the slides. The indices are untyped and in ink. Light wears the colour of its wavelength through the chapter's `spectral()` (rule 7's third family); the white-light colour of a film is the sum of that spectrum weighted by the film's reflection, the colour it shows being the physical fact. Rays 1 and 2 share the light's colour and are told apart by ray 2 being dashed, as `COLOR.md` asks.

## Figures

```
sim-thin-film · Figure 27.33 · thin-film-interference, phase-change-on-reflection, thin-film-conditions, nonreflective-coating · value add: variation by slider and a choice, the thickness and wavelength move ray 2 against ray 1 and the film setup decides which reflections carry the λ/2 shift; the swatch shows the colour the film reflects in white light · still: a film is a state, no clock · choice film (soap bubble in air 1.00/1.333/1.00, magnesium fluoride on glass 1.00/1.38/1.52, oil on water 1.00/1.40/1.333; discrete states), sliders t (position, 0–700 nm, 122), λ (position, 380–750 nm, 650, detents 450/550/650) · headline: "A soap bubble 122 nm thick reflects 650-nm light constructively, since ray 2 falls behind ray 1 by a whole number of wavelengths in all." · the stack on the left with the rays drawn slanted so they part, rays 1 and 2 as waves beside it with their sum, the white-light swatch below · 2D
sim-air-wedge · Figure 27.34 · wedges-and-newtons-rings · value add: variation, the spacer and the wavelength set the band spacing, and the choice turns pure light's bright and dark bands into white light's repeating rainbow of 27.34(a) · still · choice light (pure, white; discrete states), sliders spacer (position, 1.0–15.0 μm, 5.0), λ (position, 380–750 nm, 589, held in white light) · headline: "Dark bands of 589-nm light lie 4.42 mm apart on slides 7.50 cm long held 5.0 μm apart at one end." · the slides seen from above as a strip, the cross section below with its thickness drawn 500 times thicker than the length scale (rule 28.4, stated) · 2D
```

Labels: sim-thin-film carries n₁, n₂, n₃, t, ray 1, ray 2, the shift tags at the two reflections and "sum" (six entity labels on the stack, three on the waves); sim-air-wedge carries the two slides, the spacer and the first dark band. Neither figure moves: interference here is a state of the thickness, not a travelling wave.

## Photographs

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_28_00_02a.jpg` (27.32, the soap bubbles, already on the introduction as 27.2) | keep, `photo-soap-bubbles` | the text points at it twice under its new number |
| `Figure_28_07_03a.jpg` (27.35, Newton’s rings) | keep, `photo-newtons-rings` | the text points at it and it is the thing described |
| `Figure_28_07_01a.jpg` (27.33) | original of `sim-thin-film` | replaced |
| `Figure_28_07_02a.jpg` (27.34, photograph and schematic in one image) | original of `sim-air-wedge` | replaced; the white-light choice draws what the photograph (a) shows and the cross section draws (b) |

## Extra simulations considered

- Newton’s rings drawn from a lens radius. Left: the photograph shows it and the air wedge carries the same idea of one band per half wavelength of thickness.
- Angle of incidence on the film. Left: the book treats only perpendicular incidence, and the problems at 45° are unkeyed but one.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| AP test prep | 2 | 2 | — (1 keyed choice; 1 unkeyed open with an AI approach) |
| Conceptual | 9 | 9 | — (all unkeyed, AI approaches) |
| Problems | 14 | 7 | 7 unkeyed |

## Wanted at chapter level

- `eq-thin-film-constructive` → 27.7-film-conditions
- `eq-thin-film-destructive` → 27.7-film-conditions
- `eq-coating-thickness` → 27.7-coating-example
- variables `27.7/t_film`, `27.7/λ`, `27.7/λ_n`, `27.7/n_1`, `27.7/n_2`, `27.7/n_3` → 27.7-phase-change
- glossary `27.7/thin film interference` → 27.7-thin-films
- Note on the equation rows: the book's sentence gives $2t = \lambda_n, 2\lambda_n, \ldots$ as "most constructive" and the half-integral set as "most destructive" only for films with no net phase change; the rows' names follow that sentence, as printed.
- No concept, edge or symbol fix.

Applied by the chapter pass (2026-09-28): The equation and variable anchors are written as listed. The glossary lines are not written, since a glossary row carries no anchor field; each term is found on its section's page.
