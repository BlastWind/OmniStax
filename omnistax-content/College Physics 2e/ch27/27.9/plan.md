# Plan: 27.9 *Extended Topic* Microscopy Enhanced by the Wave Characteristics of Light

Written before the page was built (root rule 5), under `ch27/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The module prints no narrative header, so the three headers are OmniStax's.

| Span | Header | What it holds |
|---|---|---|
| `wavelength-limit` | The wavelength limits detail | the rule of thumb that details smaller than about λ are hard to see, Making Connections: Waves, UV microscopes |
| `contrast` | Contrast from interference | contrast, Figure 27.51, the interference microscope (27.52), the phase-contrast microscope (27.53), the polarization microscope |
| `confocal` | Confocal and spectral microscopes | the confocal microscope (27.54), monochromators and spectral analyzers |

## Concepts

All three were written by the prep pass; the page introduces all three.

| Concept | Introduced in |
|---|---|
| `wavelength-limits-microscopy` | `wavelength-limit` |
| `contrast-by-interference` | `contrast` |
| `confocal-microscopy` | `confocal` |

## Types the page binds

None, as `ch27/COLOR.md` gives 27.9 by default. The one sim's slider is the index
of the object (untyped) and its readout counts wavelengths and a phase (untyped).
The light wears the colour of 546 nm, the green mercury line of a microscope lamp
filter, through `spectral()` (rule 7's third family, the same function as 27.1).

## Figures

```
sim-phase-through-object · Figure 27.51 · contrast-by-interference · value add: variation by slider; the reader raises the object's index and sees the wave inside it close up, the emerging wave fall behind the background wave, and the sum of the two turn from bright to dark, which is the contrast the text describes and the still shows at one index only · still: the idea is a phase difference that a slider sets, no clock in it · slider: n (untyped, index of the object, 1.33 to 1.78, 1.55 by default, detent at 1.33 labelled background); background index fixed at 1.33 (water), object 3 background wavelengths thick · headline: "An object of index 1.55 in water, three wavelengths thick, holds 0.49 more wavelengths than the background beside it, so its light leaves nearly half a wavelength out of step and the two cancel." · graph: none; one horizontal scene, background wave above, wave through the object below, their sum and two brightness swatches on the right · 2D (rule 28.1); colour hex only through spectral(546), and black behind the two swatches, the darkness of no light
fig-interference-microscope · Figure 27.52 · contrast-by-interference · kept book drawing: an apparatus schematic whose layout is the point; a sim would add nothing the 27.51 sim does not already show, width 350 · still · none · none · none · 2D
fig-phase-contrast · Figure 27.53 · contrast-by-interference · kept book drawing: a simplified construction the text walks through, width 159 · still · none · none · none · 2D
fig-confocal · Figure 27.54 · confocal-microscopy · kept book drawing: the pinhole path the text follows step by step, width 350 · still · none · none · none · 2D
```

Labels on the sim: "background", "object", "sum", and the two swatch names; five.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_28_09_01a.jpg` (27.51) | Original of the sim, width 249 | Replaced by the sim |
| `Figure_28_09_02a.jpg`, `_03a`, `_04a` | Kept, widths 350, 159, 350 | Apparatus schematics the text points at |

## Extra simulations considered

- The confocal pinhole moved up and down through a thick sample, the light from other planes blocked. Left: the kept drawing and the text carry it, and the extended focal region is 27.6's Figure 27.31.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| Conceptual question | 2 | 2 | — |

The prism-under-water question (`fs-id1169737802618`) tests Chapter 25's
dispersion (25.5) and stays here with a note.

## Tables

None.

## Wanted at chapter level

- Glossary rows for 27.9 exist; no anchor needed beyond their section.
- No variable or equation row for 27.9; no concept, edge or symbol fix.
- The page cites Section 27.6's Figure 27.31(b) as printed ("Figure 27.31(b)") in plain text.

Applied by the chapter pass (2026-09-28): Nothing to write.
