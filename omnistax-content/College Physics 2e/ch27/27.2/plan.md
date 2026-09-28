# Plan: 27.2 Huygens's Principle: Diffraction

Written before the page was built (root rule 5), under `ch27/config.md`, applied as
proposed on 2026-09-28, on Chen's instruction to finish the book without check-ins.

## Sub-concepts

The module prints no narrative header, so the three headers are OmniStax's.

| Span | Header | What it holds |
|---|---|---|
| `wavefronts` | Wavefronts and rays | The opening paragraph on the transverse wave seen from above and from the side, Figure 27.4 |
| `huygens-principle` | Huygens’s principle | The statement in italics, the paragraph on $\ks = \kv\kt$, the folded Figure 27.5 + 27.6 + 27.7, and the two paragraphs on reflection and refraction |
| `diffraction` | Diffraction | The doorway paragraph with the sound calculation, the slits paragraph and the definition of diffraction, the folded Figure 27.8 + 27.9 |

The reflection and refraction paragraphs stay in `huygens-principle`, since the one
folded figure carries all three constructions and sits at their head.

## Concepts

| Concept | Introduced in | Also |
|---|---|---|
| `huygens-principle` | `huygens-principle` | uses `transverse-wave` in `wavefronts` |
| `huygens-reflection-and-refraction` | `huygens-principle` | uses `law-of-reflection`, `snells-law`, `bending-toward-or-away-from-the-normal` |
| `diffraction` | `diffraction` | uses `ray-approximation`, `wave-speed-wavelength-frequency` |
| `diffraction-depends-on-opening-size` | `diffraction` | — |

## Types the page binds

`position` (the wavelength, the distance $\ks$ a wavelet travels, the width of the
door), `velocity` (the speed $\kv$ of the wavelets, $\kc$, the speed of sound),
`time` (the time $\kt$ after which the wavelets are drawn) and `frequency` (the
frequency of the sound in the doorway figure, which the text's own calculation
$\lambda = c/f$ carries). `frequency` is one more than `ch27/COLOR.md` gives 27.2;
it is a declared type of the book and is asked for below. Every angle and index
is untyped and in ink. The colour of light is the physical fact (rule 7's third
family) through the chapter's `spectral(nm)` fit, the only hex on the page; the
lamp's light in the doorway figure is white light drawn as a pale warm fill
`#f3dc8a`, named here.

## Figures

```
sim-transverse-views · Figure 27.4 · huygens-principle (the wavefront and the ray it is perpendicular to) · value add: flow by animation, since the book's three still views never show the crests moving along the arrow, and standardisation, since the three views are drawn from one wave so a crest in one is a crest in the others · moving: the wave travels along its ray, crest by crest, over two periods with no hold; the clock is the wave's own · slider: λ (position, 400 to 700 nm, 500 nm default), and the light wears the colour of its wavelength · headline: "Crests of 500-nm light are 500 nm apart and move along the ray at c; from above they are the wavefronts." · graph: the side view is the graph of the field, beside the view from above, the overall view below · locked view (rule 28.2) for the overall view, which the book prints in perspective as a sheet; the other two are flat
sim-huygens · Figure 27.5 + 27.6 + 27.7 · huygens-principle, huygens-reflection-and-refraction · value add: flow by animation (the wavelets grow and the tangent sweeps out the new wavefront, which the book can only draw at one instant) and variation (any angle of incidence and any second medium) · moving: the wavelets grow with the time t over one cycle, then hold 1.2 s · choice: surface (open space, mirror, slower medium), a discrete state (rule 26.1); sliders θ₁ (untyped, 0 to 70°, 45° default, as the book's mirror) shown for the mirror and the slower medium, n₂ (untyped, 1.00 to 2.42, detents at 1.33, 1.50, 2.42, 1.50 default) shown for the slower medium only, entering and leaving the row with F.regroup · headline: states the case, e.g. "Each wavelet in the glass travels only 0.67 times as far, so the new wavefront turns toward the perpendicular." · readout: s = vt with live numbers; for the slower medium s₂ = v₂t beside s₁ · graph none · 2D
sim-doorway · Figure 27.8 + 27.9 · diffraction, diffraction-depends-on-opening-size · value add: variation (the ratio of wavelength to opening, which is the whole idea and which the book shows at three fixed sizes) and flow by animation (the wavefronts pass through the opening and spread) · moving: the wave crests travel at the wave's own clock, looped over whole periods, no hold · choice: wave (sound, light); sliders f (frequency, 100 to 3000 Hz, 1000 Hz default, the book's) for sound only, and the door width w (position, 0.20 to 2.00 m, 1.00 m default) for both · the field past the door is Huygens's principle computed: a row of point sources across the opening, summed, so the bending is the construction and not a drawing of it · headline: "Sound of wavelength 0.33 m bends into the whole room through a 1.00-m door." / for light: "Light's wavelength is two million times smaller than the door, so it passes straight through and casts sharp shadows." · graph none · 2D, seen from above as the book draws it
```

Labels: `sim-transverse-views` names its three views and the ray; `sim-huygens` names
the old and new wavefront, one wavelet's $\ks$, the mirror or the two media, fewer
than six; `sim-doorway` names the wall, the door, the listener and, for light, the
straight-edge shadows.

## Photographs and unnumbered images

All six images are drawings replaced by the three figures and travel as their
`originals`: `Figure_28_02_01a.jpg` (27.4), `02a`, `03a`, `04a` (27.5, 27.6, 27.7),
`05a`, `06a` (27.8, 27.9). No photograph.

## Extra simulations considered

- Snell's law derived from the wavelets' geometry, which the book leaves "for
  ambitious readers". Left: the refraction case of `sim-huygens` already shows the
  two triangles and its readout states the ratio; a derivation would be generated
  content.

## Exercises

| Kind | In the book | Set here | Left out or moved |
|---|---|---|---|
| AP test prep | 2 | 2 | — |
| Conceptual question | 5 | 4 | `fs-id1169737980797` (why the wavelength decreases in a medium) moves to 27.1 |
| Problem | 0 | 0 | — |

The first AP item is keyed, (b), and set as a graded choice; the second is unkeyed
and kept open with an AI-marked suggested approach, as are the four conceptual
questions.

## Wanted at chapter level

- `eq-wavelet-distance` → 27.2-huygens-principle
- variables `v`, `t`, `s` of 27.2 → 27.2-huygens-principle
- glossary `Huygens’s principle` → 27.2-huygens-principle; `diffraction` → 27.2-diffraction
- `ch27/COLOR.md`: 27.2 also binds `frequency`, for the sound's frequency in Figure 27.8 + 27.9, whose readout writes $\lambda = \kv/\kf$
- Errata: none found in m42505.
