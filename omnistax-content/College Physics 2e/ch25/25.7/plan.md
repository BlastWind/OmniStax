# Plan: 25.7 Image Formation by Mirrors

Written before the page was built (root rule 5), under `ch25/config.md`, which
records the plan reviews as applied as proposed on 2026-09-28, on Chen's
instruction to finish the book without check-ins.

## Sub-concepts

The module prints one narrative header, the Problem-Solving Strategy for Mirrors,
so the spans before it are OmniStax's, one per independent idea.

| Span | Header | What it holds |
|---|---|---|
| `flat-mirror` | The image in a flat mirror | The opening paragraph, the paragraph on Figure 25.38 and the figure |
| `mirror-focal-length` | The focal length of a spherical mirror | Figures 25.39 and 25.40, $\kffoc = \kRcur/2$, and the convex mirror's negative focal length |
| `mirror-ray-tracing` | Ray tracing for mirrors | The five numbered rules and the paragraph saying the thin lens equations hold |
| `mirror-cases` | The three cases of mirror images | Case 1 with Figure 25.41 and Examples 25.9 and 25.10 (with the photograph 25.42), case 2 with Figure 25.43, case 3 with Figure 25.44 and Example 25.11, the closing analogy and the Take-Home Experiment |
| `mirror-strategy` | Problem-Solving Strategy for Mirrors | The book's two steps, as a numbered list |

## Concepts

All seven were written into `book.json` by the prep pass; the page adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `image-in-a-flat-mirror` | `flat-mirror` | — |
| `focal-length-of-a-spherical-mirror` | `mirror-focal-length` | used in `mirror-cases` |
| `converging-and-diverging-mirrors` | `mirror-focal-length` | reinforced in `mirror-cases` |
| `ray-tracing-rules-for-mirrors` | `mirror-ray-tracing` | used in `mirror-cases` |
| `three-cases-of-mirror-images` | `mirror-cases` | — |
| `solve-mirror-problems` | `mirror-ray-tracing` | used in `mirror-cases`, reinforced in `mirror-strategy` |
| `mirrors-and-lenses-are-analogous` | `mirror-cases` | — |

Used from earlier sections: `law-of-reflection` and `image-behind-a-flat-mirror`
(25.2), `thin-lens-equation`, `magnification`, `power-of-a-lens`,
`real-and-virtual-images` (25.6).

## Types the page binds

`position` only, which is what `ch25/COLOR.md` gives 25.7: $\kffoc$, $\kRcur$,
$\kdobj$, $\kdimg$, $\khobj$, $\khimg$. The magnification $m$, the power $P$,
every angle and the mirror aperture are untyped and in ink. Rays are ink in the
flat-mirror and focus figures; the three traced rays of the image figure are
`F.cat(0..2)`, which `ch25/COLOR.md` names for ray 1, ray 2 and ray 3. No hex.

## Figures

```
sim-flat-mirror · Figure 25.38 · image-in-a-flat-mirror · value add: variation by slider, since the reader moves the object and the eye and sees that the backward extensions always meet at the one point as far behind the glass as the object is in front · still, because an image is a place and has no clock · sliders: d_o (position, 20 to 100 cm, 50 cm by default), the height of the eye (untyped scene length, −60 to 60 cm, 30 cm) · headline: "An object 50 cm in front of the mirror has its image 50 cm behind it, whatever the eye's position." · graph none · 2D (rule 28.1)
sim-mirror-focus · Figure 25.39 + 25.40 · focal-length-of-a-spherical-mirror, converging-and-diverging-mirrors · value add: variation by slider and choice, since the book draws a large mirror, a small mirror and a convex mirror as three pictures, and here one mirror widens until the focus smears (spherical aberration) and turns convex on a choice · still, because focusing is a geometry of paths · choice: concave or convex (discrete, segmented); sliders: R (position, 20 to 80 cm, 40 cm), the half-width of the mirror as a fraction of R (untyped, 0.10 to 0.95, 0.25, with a dashed circle at 0.25 for "small") · headline: "Rays parallel to the axis meet 20.0 cm in front of the mirror, half its radius of curvature." · graph none · 2D
sim-mirror-images · Figure 25.41 · ray-tracing-rules-for-mirrors, three-cases-of-mirror-images, solve-mirror-problems, mirrors-and-lenses-are-analogous · value add: variation by slider, since cases 1, 2 and 3 become one motion of the object and one choice of mirror, the three rays of the rules drawn and the image arriving where they cross · still, because the image answers the sliders and has no time in it · choice: concave or convex; sliders: d_o (position, 5 to 90 cm, 40 cm; dashed circles at f and at 2f = R on a concave mirror), |f| (position, 10 to 40 cm, 20 cm), h_o (position, 2 to 10 cm, 6 cm) · headline names the case and the image: "Case 1: a real, inverted image 40.0 cm in front of the mirror, 1.00 times as tall." · readout 1/d_o + 1/d_i = 1/f and m = −d_i/d_o with the live numbers · graph none · 2D
```

The three figures name at most six things each (object, image, F, C, the mirror,
the rays by number), so every label is drawn; where the image leaves the canvas as
d_o approaches f, it is pinned to the edge with its distance written.

The Example 25.9 numbers (R = 50.0 cm, d_i = 3.00 m) are not the image figure's
default because the 3.00 m image would sit off any canvas that also shows a
25.0 cm focal length at a readable scale; the default is the book's picture
(object at 30 cm, between f and 2f), and the example's state is reachable with |f| = 25 cm
and d_o = 27.3 cm, where the readout gives d_i = 3.00 m and the image is pinned.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_26_07_05.jpg` (Figure 25.42, the trough at Kramer Junction) | Kept, photo row, inside Example 25.10 | The example points at it |
| `Figure_26_07_06.jpg` (Figure 25.43, (a) case 2 drawing and (b) makeup mirror) | Kept as a photo row numbered 25.43 showing the book's whole image | The file holds the drawing and the photograph in one image; the checker forbids a sim folding a number a photo row carries, so the bench is Figure 25.41 alone and reaches case 2 by its slider, while the book's (a) and (b) stand where the book puts them. Splitting the file would need a new derived image, which a section build may not make |
| `Figure_26_07_07.jpg` (Figure 25.44, (a) case 3 drawing and (b) security mirror) | Kept as a photo row numbered 25.44, whole | As for 25.43 |
| `Figure_26_07_08.jpg` (the bulb between two mirrors, unnumbered) | On the card of conceptual question `fs-id2016225` | Serves an exercise |

## Extra simulations considered

- A parabolic against a spherical mirror of the same focal length. Left: the
  aperture slider of `sim-mirror-focus` already shows why the small mirror is
  needed, and the book names the parabola only in passing.
- The solar trough's heating (Example 25.10). Left: parts (b) and (c) are
  Chapter 14's heat, not this section's idea.

## Exercises

| Kind | In the book | Set here | Left out or moved |
|---|---|---|---|
| AP test prep | 4 (+1 from 25.2) | 5 | — |
| Conceptual question | 12 | 12 | — |
| Problem | 13 | 6 | 6 unkeyed left out; `exer-00001` moves to 25.5 |

Keyed AP items 1 and 3 are graded choices; items 2 and 4 and the moved-in
`fs-id1448298` are open with AI approaches. Problems kept: `fs-id1429754`,
`fs-id3039111` (classed problem by its header), `fs-id1946589`, `fs-id1777792`,
`fs-id2725085` (a derivation, the book's line as its solution), `fs-id2681152`
(tagged to 16.11's intensity too). Left out: the telephoto mirror, the heater's
magnification, the security mirror, the flat mirror's focal length, the proof of
$f = R/2$ and the Construct Your Own Problem heat lamp.

## Tables

The module prints none.

## Wanted at chapter level

- `eq-mirror-focal-length` → 25.7-mirror-focal-length
- variables `R_curv`, `f_focal`, `P_lens` of 25.7 → 25.7-mirror-focal-length; `d_obj`, `d_img`, `h_obj`, `h_img`, `m` → 25.7-mirror-cases
- Errata named in `notes`: the summary's "Image length is half the radius of curvature" (focal length is meant); Example 25.11's $R = 2|f| = -0.800$ cm kept as printed.
- Figures 25.43 and 25.44: if the chapter pass wants the drawings (a) folded into `sim-mirror-images`, the two bundle images need splitting into a drawing and a photograph file, and the photo rows then carry only (b).
- No concept, edge or symbol row needs changing.

Applied by the chapter pass (2026-09-28):

- The equation anchor and the eight variable anchors are written as listed.
- The summary's "Image length", Example 25.11's $R = 2|f| = -0.800$ cm and the AP item `fs-id1560818`, keyed (b) 10 cm where the arithmetic gives +20 cm (c) and set open, are gathered in `ch25/exploration.md`.
- Figures 25.43 and 25.44 are kept whole as photo rows, drawing and photograph together as the bundle file prints them; the drawings are not folded into `sim-mirror-images`, since the sim already draws both cases and splitting the files would add two images for no new view.
