# Plan: 26.5 Telescopes

Written before the page was built (root rule 5), under `ch26/config.md`, which
replaces the per-section stop with a plan left for review ("applied as proposed on
2026-09-28, on Chen's instruction to finish the book without check-ins").

## Sub-concepts

The module prints no narrative header of its own, so the spans carry OmniStax's.

| Span | Header | What it holds |
|---|---|---|
| `two-lens-telescopes` | Two-lens telescopes | Galileo and the telescope, Galileo's arrangement and the two-convex-lens telescope, the folded Figure 26.23 + 26.24, and the first image at the focal length |
| `angular-magnification` | Angular magnification | The eyepiece magnifying the first image and $M = \theta'/\theta = -f_{\text{o}}/f_{\text{e}}$ |
| `upright-images` | Upright images | The inverted image and the erecting lens |
| `reflecting-telescopes` | Reflecting telescopes | The concave mirror as objective and Figure 26.25 |
| `telescopes-across-the-spectrum` | Telescopes across the spectrum | Radio and x-ray telescopes, the Square Kilometre Array, adaptive optics, Figures 26.26 and 26.27 |

## Concepts

All five were written into `book.json` by the prep pass; the page introduces all five.

| Concept | Introduced | Also |
|---|---|---|
| `distant-image-at-the-focal-length` | `two-lens-telescopes` | used in `angular-magnification` |
| `angular-magnification-of-a-telescope` | `angular-magnification` | used in `reflecting-telescopes` |
| `upright-and-inverted-telescopes` | `upright-images` | |
| `reflecting-telescopes` | `reflecting-telescopes` | |
| `telescopes-across-the-spectrum` | `telescopes-across-the-spectrum` | |

## Types the page binds

`position` alone (`ch26/COLOR.md`): the focal lengths $f_{\text{o}}$ and $f_{\text{e}}$
and the mirror's radius of curvature, on sliders and brackets. $M$, $\theta$, $\theta'$
are untyped and in ink; the rays are `F.cat(0)`; lenses, mirrors, images and the eye
are ink. No hex literal.

## Figures

```
sim-telescope · Figure 26.23 + 26.24 · distant-image-at-the-focal-length, angular-magnification-of-a-telescope, upright-and-inverted-telescopes · value add: fold and variation: the book draws Galileo's telescope, the two-convex-lens telescope and the erecting-lens telescope as three pictures; here one bundle of parallel rays from a distant object is traced through whichever arrangement is chosen, the first image sits at F_o, and the reader sees the angle grow from θ to θ' by the ratio of the focal lengths, and the image come out inverted or upright · still, because optics has no clock (config) · choice arrangement (Galileo's, two convex, erecting lens; discrete), sliders f_o (position, 30.0 to 100 cm, 60.0 cm), f_e (position, 5.00 to 25.0 cm, 12.0 cm; the Galilean eyepiece is the same lens made diverging, f_e negative) · headline: whether the image is inverted or upright and how many times larger the angle is · readout M = θ'/θ = −f_o/f_e with live numbers (times −1 for the erecting lens, whose second image turns it back upright), morphing on the choice · none · 2D, flat, lengths to one fixed scale, angles exaggerated by one factor so that θ'/θ is the true ratio
sim-reflecting-telescope · Figure 26.25 · reflecting-telescopes, angular-magnification-of-a-telescope · value add: variation: the text says a large and relatively flat mirror has a very long focal length and so a great angular magnification; the radius slider flattens the mirror, its focal point runs away from it and M grows, with Problem 3's 10.0 m mirror and 3.00 cm eyepiece as the default · still, because optics has no clock · sliders R (position, 1.00 to 10.0 m, 10.0 m), f_e (position, 1.00 to 10.0 cm, 3.00 cm) · headline: where the mirror focuses parallel light · readout M = −f_o/f_e = −(R/2)/f_e with live numbers · none · 2D, flat, not to scale (focal lengths on a logarithmic run so a 1 m and a 10 m mirror both fit)
```

Folds: Figure 26.23 (a) is the choice Galileo's, (b) the choice two convex; Figure
26.24 is the choice erecting lens, with the erecting lens of focal length 10.0 cm
placed so that it makes a same-size inverted copy of the first image. Motion: none
anywhere.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_27_05_01.jpg`, `_02` (26.23, 26.24) | originals | travel in `sim-telescope`'s `originals` |
| `Figure_27_05_03.jpg` (26.25) | original | travels in `sim-reflecting-telescope`'s `originals` |
| `Figure_27_05_04.jpg` (26.26) | photograph and drawing, kept | the text points at both parts; one image in the bundle, so one `photo` row |
| `Figure_27_05_05.jpg` (26.27) | photograph, kept | the text points at it ("see Figure 26.27") |
| `Figure_27_05_06.jpg` (AP item `fs-id2542348`, part (a)) | kept on the card | the item asks the reader to draw on it |
| `Figure_27_05_07.jpg` (the same item, part (b)) | not shown | a card holds one figure; see Wanted |
| `Figure_27_05_08.jpg` (the commented-out solution) | dropped | its solution is not printed |

## Extra simulations considered

- A Chandra-style grazing-incidence mirror with a glancing-angle slider. Left: the
  text gives it two sentences and the book's drawing is kept.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| Check Your Understanding | 0 | 0 | — |
| Conceptual question | 1 | 1 | — |
| AP test prep | 3 | 3 | — |
| Problem | 6 | 3 | 3 |

AP items 1 (d) and 3 (c) are keyed and graded; item 3 is printed as the book prints
it (two concave lenses), named in `notes`. AP item 2's solution is commented out of
the CNXML, so it is an open item with an AI-marked suggested approach. The three
unkeyed problems (`fs-id3292530`, `fs-id1817768`, `eip-692`) are named in `notes`,
as is the stray line on the lens-to-retina distance above the problems.

## Wanted at chapter level

- Equation `eq-distant-image-at-focal-length` → 26.5-two-lens-telescopes
- Equation `eq-angular-magnification` → 26.5-angular-magnification
- Variables `f_obj`, `f_eye`, `d_obj`, `d_img` (26.5 rows) → 26.5-two-lens-telescopes; `M`, `θ`, `θ_prime` → 26.5-angular-magnification
- Glossary `angular magnification` → 26.5-angular-magnification; `adaptive optics` → 26.5-telescopes-across-the-spectrum
- The mirror's radius of curvature $R$ is written in ink in `sim-reflecting-telescope`; a typed `R` (position) symbol row would let it take the hue. No concept, edge or symbol row needs changing otherwise.
- App: an exercise card holds one `figure`, so AP item `fs-id2542348` shows only part (a)'s drawing; part (b)'s `Figure_27_05_07.jpg` is copied to `media/ch26/` for when a card can hold two.

Applied by the chapter pass: the two equation anchors and the seven variable anchors as listed. The mirror's radius in `sim-reflecting-telescope` now takes Chapter 25's typed symbol `R_curv` (`\kRcur`, position), and a variable row `R_curv` anchored at `reflecting-telescopes` defines it; no symbol row changed. The second drawing of `fs-id2542348` waits on the app.
