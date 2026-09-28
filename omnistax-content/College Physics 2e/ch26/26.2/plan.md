# Plan: 26.2 Vision Correction

Written before the page was built (root rule 5), under `ch26/config.md`, which
replaces the per-section stop with a plan left for review ("applied as proposed on
2026-09-28, on Chen's instruction to finish the book without check-ins").

## Sub-concepts

The module prints no narrative header of its own, so the spans carry OmniStax's.

| Span | Header | What it holds |
|---|---|---|
| `myopia-and-hyperopia` | Nearsightedness and farsightedness | The opening paragraph, the far point and the near point, and the folded Figure 26.5 + 26.6 + 26.7 |
| `correcting-nearsightedness` | Correcting nearsightedness | The diverging spectacle lens and Example 26.3 |
| `correcting-farsightedness` | Correcting farsightedness | The converging spectacle lens and Example 26.4 |
| `astigmatism` | Astigmatism and contact lenses | Astigmatism, Figure 26.8, and the paragraph on contact lenses and the tear layer |
| `laser-vision-correction` | Laser vision correction | Strickland and Mourou, the powers of close lenses adding, LASIK and Figure 26.9 |

## Concepts

All seven were written into `book.json` by the prep pass; the page introduces all seven.

| Concept | Introduced | Also |
|---|---|---|
| `myopia-and-hyperopia` | `myopia-and-hyperopia` | used in both correcting spans |
| `near-point-and-far-point` | `myopia-and-hyperopia` | used in both correcting spans |
| `correct-nearsightedness` | `correcting-nearsightedness` | |
| `correct-farsightedness` | `correcting-farsightedness` | |
| `astigmatism` | `astigmatism` | |
| `powers-of-close-lenses-add` | `laser-vision-correction` | used in `astigmatism` (the tear layer acts as a lens) |
| `laser-vision-correction` | `laser-vision-correction` | |

## Types the page binds

`position` alone (`ch26/COLOR.md`): the far point, the near point and the object and
image distances from the spectacle lens. The powers in diopters and the astigmatism
strength and axis are untyped and in ink; the rays are `F.cat(0)`, the eye, the
spectacle lens and the chart ink. No hex literal.

## Figures

```
sim-vision-correction · Figure 26.5 + 26.6 + 26.7 · myopia-and-hyperopia, near-point-and-far-point, correct-nearsightedness, correct-farsightedness · value add: fold and variation: the book prints four panels of defects and two separate corrections; here one eye is nearsighted or farsighted, the reader moves its far or near point and puts the spectacle lens on or takes it off, and sees the rays meet in front of the retina, behind it, or on it through a lens whose power the readout gives · still, because a defect and its correction are states, not a motion · controls: choice defect (nearsighted, farsighted; discrete, rule 26.3), choice spectacles (without, with), slider far point (position, 0.15 to 2.00 m, 0.300 m by default, Example 26.3) which relabels to near point (position, 0.40 to 3.00 m, 1.00 m by default, Example 26.4) for the farsighted eye · headline: where the rays meet, and with spectacles the power that puts them on the retina · readout: without spectacles the eye's own power P = 1/d_o + 1/d_i and where its image falls; with spectacles the book's P = 1/d_o + 1/d_i for the spectacle lens, 1.50 cm from the eye, with the live numbers · none · 2D, flat, not to scale, the distances written in the brackets are the real ones
sim-astigmatism-chart · Figure 26.8 · astigmatism · value add: variation by slider: the chart is the book's and stays sharp at the default so the reader can test each eye with it, as the caption asks; raising the astigmatism blurs the lines along one axis as an astigmatic eye sees them, and turning the axis turns the blurred set · still, because a chart has no clock · sliders: astigmatism (untyped, 0 to 2.00 D, 0 by default), axis (untyped angle, 0 to 180°, 90° by default, detents at 0, 45, 90, 135, 180) · headline: none at 0, else which lines look faint · readout: none · none · 2D, flat
```

Folds: Figure 26.5 (four panels) is shown by the choice without spectacles; its
causes, a lens too strong or an eye too long, are named in the caption and
hover names. Figures 26.6 and 26.7 are the two defects with spectacles on.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_27_02_01.jpg`, `_02`, `_03` (26.5 to 26.7) | originals | travel in `sim-vision-correction`'s `originals` |
| `Figure_27_02_04.jpg` (26.8) | original | travels in `sim-astigmatism-chart`'s `originals` |
| `Figure_27_02_05.jpg` (26.9) | photograph, kept | the text points at it ("see Figure 26.9") and it shows LASIK being done |

## Extra simulations considered

- A cornea ablated spot by spot with a readout of its power (the LASIK paragraph).
  Left: the numbers are one addition, and the photograph shows the procedure.
- The tear layer as a lens under a contact lens. Left: the text gives it one sentence.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| Check Your Understanding | 0 | 0 | — |
| Conceptual question | 4 | 4 | — |
| AP test prep | 2 | 2 | — |
| Problem | 20 (+1 from 26.6) | 11 | 10 |

AP item 1 is keyed (c) and graded; AP item 2's solution is commented out of the
CNXML, so it is an open item with an AI-marked suggested approach. The ten unkeyed
problems are named in `notes`. 26.6's Integrated Concepts problem on LASIK ablation
(`fs-id3069158`) is set here with `source_section: "26.6"`; it also tests Chapter
14's `heat-and-temperature-change` and `heat-of-vaporization`, and its `ºC` is
written `°C`.

## Wanted at chapter level

- Variables `P_lens`, `d_obj`, `d_img` → 26.2-correcting-nearsightedness
- Glossary `nearsightedness`, `myopia`, `far point`, `farsightedness`, `hyperopia`, `near point` → 26.2-myopia-and-hyperopia; `astigmatism` → 26.2-astigmatism; `laser vision correction` → 26.2-laser-vision-correction
- 26.6's notes and exercise_notes should say `fs-id3069158` is set with 26.2.
- 26.6's reference to the astigmatism chart can link Figure 26.8 at 26.2.
- No concept, edge or symbol row needs changing.
