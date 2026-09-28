# Plan: 26.6 Aberrations

Written before the page was built (root rule 5), under `ch26/config.md`, which
replaces the per-section stop with a plan left for review ("applied as proposed on
2026-09-28, on Chen's instruction to finish the book without check-ins").

## Sub-concepts

The module prints no narrative header, so every span carries OmniStax's.

| Span | Header | What it holds |
|---|---|---|
| `chromatic-aberration` | Chromatic aberration | The opening paragraph on aberrations and chromatic aberration, Figure 26.28 |
| `coma-and-spherical-aberration` | Coma and spherical aberration | The paragraph on coma, spherical aberration and astigmatism, Figures 26.29 + 26.30 |
| `brightness-and-correction` | Brightness and the correction of aberrations | The paragraph on brightness and pupils and the paragraph on how aberrations are corrected |

## Concepts

All three were written into `book.json` by the prep pass; the page introduces all three.

| Concept | Introduced | Also |
|---|---|---|
| `chromatic-aberration` | `chromatic-aberration` | |
| `coma-and-spherical-aberration` | `coma-and-spherical-aberration` | |
| `correcting-aberrations` | `brightness-and-correction` | used in `chromatic-aberration` (the doublet) |

## Types the page binds

`position`: the wavelength λ, the aperture diameter $D$, and the bracket between
the violet and red focal points, as `ch26/COLOR.md` gives 26.6. The angle of the
incoming light is untyped and in ink.

## Figures

```
sim-chromatic · Figure 26.28 · chromatic-aberration, correcting-aberrations · value add: variation by slider and choice: a ray of any visible wavelength finds its own focus, and the single crown-glass lens and the crown-flint achromatic doublet (drawn from the published Sellmeier indices of BK7 and F2, the doublet corrected for 486 nm and 656 nm) are two states of one scene, so the reader sees the spread of foci collapse · still, since refraction has no clock · choice: lens (single lens, achromatic doublet; single by default); slider: λ (position, 400 to 700 nm, 550 nm by default, detents at 400 and 700, the book's V and R) · headline: how far behind the violet focus the red focus lies · none · 2D. Violet, red and the chosen ray in their spectral colours (hex through `spectral()`, the physical fact); V and R dots in those colours; the V-to-R bracket in position; the lens outline in ink. Readout: the spread of the focal points in mm
sim-coma-spherical · Figure 26.29 + 26.30 · coma-and-spherical-aberration, correcting-aberrations · value add: variation by slider plus fidelity: an exact ray trace through a thick biconvex lens of spherical surfaces (BK7, f about 100 mm), rays in symmetric pairs from four zones, each pair's crossing marked; at θ = 0 the pairs cross on the axis at different distances (spherical aberration, Figure 26.30), and off the axis they cross beside the chief ray at different heights too (coma, Figure 26.29); closing the aperture draws the crossings together and cuts the light, which is the text's trade-off between brightness and sharpness · still · sliders: θ (untyped, 0 to 12°, 6° by default), D (position, 20 to 80 mm, 80 mm by default) · headline: how far apart along the axis the outermost and innermost pairs cross, and the fraction of the full aperture's light that passes · none · 2D. Pairs in `F.cat(0..3)` from the innermost zone outward; chief ray ink; dashed paraxial image plane. Readout: Δx, the axial spread of the crossings
```

Colours: position for λ, D and the V-to-R bracket; hex only inside `spectral()` for
the violet, red and chosen rays, the physical fact named above; `F.cat(0..3)` for
the four zones. Nothing else coloured.

Motion: none. Optics has no clock (config), so both figures register no cycle and
have no transport; the lens choice morphs its focal points with `choice.mix`.

## Photographs and unnumbered images

None. The three book images are drawings, each replaced and kept as its Sim's original.

## Exercises

- `fs-id2932047` (conceptual): kept as `cq1`, unkeyed, AI-marked suggested approach.
- `fs-id3069158` (Integrated Concepts, LASIK ablation): set in 26.2 with `source_section: "26.6"`, as the chapter's notes decide; not set here.
- `exer-00001` (Critical Thinking, microscope): set in 26.4 with `source_section: "26.6"`; not set here.
- No Check Your Understanding box, so no inline host.

## Wanted at chapter level

- variables row 26.6 λ (position, nm): the wavelength of the light passing through the lens
- variables row 26.6 D (position, m): the diameter of the aperture that admits light to the lens
- variables row 26.6 θ (°): the angle the incoming light makes with the optical axis
- glossary 26.6 aberration already staged; no fix
- equations: none; 26.6 states no equation
