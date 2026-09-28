# Plan: 26.1 Physics of the Eye

Written before the page was built (root rule 5), under `ch26/config.md`, which
replaces the per-section stop with a plan left for review ("applied as proposed on
2026-09-28, on Chen's instruction to finish the book without check-ins").

## Sub-concepts

The module prints no narrative header of its own, so the spans carry OmniStax's.

| Span | Header | What it holds |
|---|---|---|
| `eye-as-a-lens` | The eye as a single lens | Al-Haytham, the opening paragraph on the eye as an instrument, the anatomy paragraph and Figure 26.2 |
| `refraction-in-the-eye` | Refraction at the cornea and the lens | Table 26.1, the cornea's two-thirds of the power, the single thin lens, Figure 26.3 (folded into 26.4's figure) |
| `accommodation` | Accommodation | The fixed image distance, accommodation, the 25 cm near point, relaxed and accommodated vision and Figure 26.4 |
| `thin-lens-equations-for-the-eye` | The thin lens equations for the eye | The two equations, the boxed Take-Home Experiment: The Pupil and Example 26.1 |
| `power-range` | The power range of the eye and presbyopia | Example 26.2, whose Discussion defines presbyopia |

## Concepts

All six were written into `book.json` by the prep pass; the page introduces all six.

| Concept | Introduced | Also |
|---|---|---|
| `eye-as-a-single-thin-lens` | `eye-as-a-lens` | reinforced in `refraction-in-the-eye` |
| `cornea-supplies-most-of-the-power` | `refraction-in-the-eye` | |
| `accommodation` | `accommodation` | used in `power-range` |
| `thin-lens-equations-for-the-eye` | `thin-lens-equations-for-the-eye` | used in `power-range` |
| `solve-for-an-image-on-the-retina` | `thin-lens-equations-for-the-eye` | reinforced in `power-range` |
| `presbyopia` | `power-range` | |

## Types the page binds

`position` alone (`ch26/COLOR.md`): the object distance, the image (lens-to-retina)
distance and the heights. The power in diopters, the magnification and the indices
of refraction are untyped and in ink; the rays from the top of the object are
`F.cat(0)`, the eye and its parts ink.

## Figures

```
sim-eye-anatomy · Figure 26.2 · eye-as-a-single-thin-lens · value add: standardisation only, so a faithful copy in the house style: the eye in cross-section with its ten named parts, and the indices of Table 26.1 as hover names on the media light passes through · still, because anatomy has no time and no variable in it · no controls · no headline · none · 2D. The ten labels exceed rule 26.7's six, but they are the figure's content, never move and sit in two leadered columns clear of the drawing, as the book sets them
sim-eye-accommodation · Figure 26.3 + 26.4 · cornea-supplies-most-of-the-power, accommodation, thin-lens-equations-for-the-eye, solve-for-an-image-on-the-retina, presbyopia · value add: variation by slider: the book draws one distant tree and one near button; here the object walks from 10 cm to 3 m and the lens of the eye thickens and thins to keep the image on the retina, the rays bending most at the cornea and the rest at the lens (26.3); a second slider sets the greatest power the eye can reach, and an object nearer than the near point it gives forms its image behind the retina, which is presbyopia · still, because focusing is a setting, not a motion · sliders: d_o (position, 0.10 to 3.00 m, 0.600 m by default, Example 26.1's arm's length, detents at 0.25 and 0.600 m; dashed circle at the near point 1/(P_max − 50.0 D), label "near point"), P_max (untyped, 50.5 to 60.0 D, 54.0 D by default, Example 26.2's fully accommodated eye) · headline: the power the eye takes at this distance, or that it cannot reach it and the image falls behind the retina · readout: P = 1/d_o + 1/d_i with the live numbers (d_i = 2.00 cm when clear, the longer image distance when not); note line with the image height of Example 26.1's hair at this distance · none · 2D, not to scale; hover names give each medium its index from Table 26.1
```

Colours: the rays are `F.cat(0)`; the brackets for d_o and d_i are `position`. No
hex literal.

The book's numbers are the defaults: `sim-eye-accommodation` opens on the hair of
Example 26.1 at 60.0 cm (P = 51.7 D, h_i = −4.00×10⁻⁴ cm), and the circle on d_o sits
at 25.0 cm for the default 54.0 D, Example 26.2's close vision.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_27_01_01.jpg` (26.2) | original | travels in `sim-eye-anatomy`'s `originals` |
| `Figure_27_01_02.jpg`, `Figure_27_01_03.jpg` (26.3, 26.4) | originals | travel in `sim-eye-accommodation`'s `originals` |

## Extra simulations considered

- The pupil opening and closing with the room's brightness (the Take-Home
  Experiment). Left: the experiment asks the reader to look at a real eye.
- An eye under water, its cornea's power lost (conceptual question 5). Left: it
  belongs with 26.2's corrections.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| Check Your Understanding | 0 | 0 | — |
| Conceptual question | 5 | 5 | — |
| AP test prep | 2 | 2 | — |
| Problem | 5 | 3 | 2 |

AP item 1 is keyed (a) and set as a graded choice; AP item 2's solution is
commented out of the CNXML, so it is an open item with an AI-marked suggested
approach. Unkeyed problems left out: the power of the eye at 3.00 m and the airplane
letters read at the limit of acuity. No generated questions.

## Tables

Table 26.1, Refractive Indices Relevant to the Eye, as a `div.book-table` in
`refraction-in-the-eye`.

## Wanted at chapter level

- `eq-power-of-the-eye` → 26.1-thin-lens-equations-for-the-eye
- `eq-magnification-of-the-eye` → 26.1-thin-lens-equations-for-the-eye
- `eq-image-height-on-retina` → 26.1-thin-lens-equations-for-the-eye
- Variables `P_lens`, `d_obj`, `d_img` → 26.1-accommodation; `h_obj`, `h_img`, `m` → 26.1-thin-lens-equations-for-the-eye
- Glossary `accommodation` → 26.1-accommodation; `presbyopia` → 26.1-power-range
- Errata kept as printed: "$p=1/f$" in lower case.
- No concept, edge or symbol row needs changing.
