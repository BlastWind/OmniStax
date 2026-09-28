# Plan: 27.1 The Wave Aspect of Light: Interference

Written before the page was built (root rule 5), under `ch27/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The module prints no narrative header, so the two headers are OmniStax's.

| Span | Header | What it holds |
|---|---|---|
| `wave-character` | Light as a wave | $c = f\lambda$, the ray and wave pictures, Making Connections: Waves, Figure 27.3 |
| `wavelength-in-a-medium` | Light in a medium | $v = c/n = f\lambda_n$, $\lambda_n = \lambda/n$, the water example, colour follows frequency |

## Concepts

All four were written by the prep pass; the page introduces all four.

| Concept | Introduced in |
|---|---|
| `wave-optics` | `wave-character` |
| `interference-is-the-hallmark-of-a-wave` | `wave-character` |
| `wavelength-in-a-medium` | `wavelength-in-a-medium` |
| `color-follows-frequency` | `wavelength-in-a-medium` |

## Types the page binds

`position` ($\lambda$, $\lambda_n$), `velocity` ($c$, $v$) and `frequency` ($f$), as
`ch27/COLOR.md` gives 27.1. The index $n$ is untyped and in ink. The light wears
the colour of its wavelength in vacuum (rule 7's third family, `spectral()`, the
same function as 25.5), on both sides of the boundary, since that colour is the
fact the section ends on.

## Figures

```
fig-paranal-and-slits · Figure 27.3 · wave-optics, interference-is-the-hallmark-of-a-wave · kept photograph: the text points at it ("in Figure 27.3 both the ray and wave characteristics of light can be seen"); two photographs under one number, width 250 · still · none · none · none · 2D
sim-wavelength-in-medium · Sim · wavelength-in-a-medium, color-follows-frequency · value add: flow by animation and variation by slider; the reader sees crests arriving at the boundary and leaving it at the same rate, closer together and slower, in the same colour, which the equation states and the still cannot show · moving: the wave travels at c on the left and at c/n on the right, a clock is in the idea (frequency is crests per second), four drawn periods per loop so it repeats seamlessly; a marker bobs on each side in step · sliders: λ (position, 380 to 760 nm, 633 nm by default, detents at 380 and 760, the visible limits the text names) and n (untyped, 1.00 to 2.42, 1.333 by default, detents water 1.333, crown glass 1.52, diamond 2.419) · headline: "Light of 633 nm enters water at n = 1.333: it slows to 2.25 × 10⁸ m/s and its wavelength shrinks to 475 nm, while its frequency and its color stay the same." · graph: none; one horizontal scene, vacuum left, medium right on a faint neutral panel, fixed brackets for λ and λ_n above · 2D (rule 28.1, a relation along one line); colour hex only through spectral(), the light's wavelength as the fact
```

Labels: the two brackets ($\lambda$, $\lambda_n$), the two region names and the two
bobbing markers, named by hover; five labels, under six. The brackets are fixed
rulers, not on the moving crests. The readout writes
$\lambda_n = \lambda/n$ with live numbers; its note states $f$ and $v$.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_28_01_01a.jpg` (Figure 27.3) | Kept, photo row, width 250 | The text points at it and it shows ray and wave behaviour side by side |

## Extra simulations considered

- A laser beam through slits of a width the reader sets, spreading more as the slit narrows. Left: 27.5 owns single slit diffraction.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| Conceptual question | 2 (+1 moved in) | 3 | — |
| Problem | 5 | 3 | 2 |

Moved in: `fs-id1169737980797` (why the wavelength decreases in a medium), from
27.2, `source_section` 27.2; both sections' notes say so. Left out, unkeyed: the
visible range in crown glass and zircon or diamond from 329 nm.

## Tables

None.

## Wanted at chapter level

- `eq-c-f-lambda` → 27.1-wave-character
- `eq-speed-in-medium` → 27.1-wavelength-in-a-medium
- `eq-wavelength-in-medium` → 27.1-wavelength-in-a-medium
- Variables `c`, `f`, `λ` → 27.1-wave-character; `n`, `v`, `λ_n` → 27.1-wavelength-in-a-medium
- 27.2's `exercise_notes` should name `fs-id1169737980797` as moved to 27.1.
- Erratum carried as printed: the Making Connections box sends matter waves to "Special Relativity" (they are in a later chapter).

Applied by the chapter pass (2026-09-28): The equation and variable anchors are written as listed. 27.2's `exercise_notes` already names the moved question, and the matter-waves erratum is gathered in `exploration.md`.
