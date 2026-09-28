# Plan: 25.6 Image Formation by Lenses

Written before the page was built (root rule 5), under `ch25/config.md`, which
replaces the per-section stop with a plan left for review ("applied as proposed on
2026-09-28, on Chen's instruction to finish the book without check-ins").

## Sub-concepts

The module prints three narrative headers of its own (Ray Tracing and Thin Lenses,
Image Formation by Thin Lenses, Problem-Solving Strategies for Lenses). The
opening, before the first of them, holds three ideas and is split into three spans
with OmniStax's headers; the long middle header is split the same way, one span per
idea.

| Span | Header | What it holds |
|---|---|---|
| `converging-lens` | Converging lenses and the focal point | The two opening paragraphs, the three boxed definitions (Converging or Convex Lens, Focal Point F, Focal Length f), Figure 25.25 and the photograph of Figure 25.26 |
| `lens-power` | The power of a lens | The definition $P = 1/f$, the boxed Power P and Example 25.5 |
| `diverging-lens` | Diverging lenses | The concave lens, its negative focal length, the boxed Diverging Lens, and the reversibility of the paths with the filament at the focal point (Figure 25.28) |
| `ray-tracing` | Ray Tracing and Thin Lenses (the book's) | The thin lens, the two boxed notes, Figures 25.29 and 25.30, the five rules as the book's numbered list and the boxed Rules for Ray Tracing |
| `image-formation` | Image Formation by Thin Lenses (the book's) | The three rays that locate an image (Figure 25.31), the real image, its boxed definition and the projection onto film and retina (Figure 25.32) |
| `thin-lens-equations` | The thin lens equations | The distances and heights, the two equations, the magnification, the boxed Image Distance and Thin Lens Equations and Magnification, and Example 25.6 (the light bulb, Figure 25.33) |
| `case-1-and-2` | Case 1 and case 2 images | The case 1 and case 2 paragraphs, the photographs of Figure 25.34, the virtual image (Figure 25.35) with its boxed definition, and Example 25.7 |
| `case-3` | Case 3 images | The diverging lens's image, the photograph of Figure 25.36, Figure 25.37 and Example 25.8 |
| `three-cases` | The three types of image | The summary paragraph, Table 25.3, the sentence pointing on to mirrors and the boxed Take-Home Experiment: Concentrating Sunlight |
| `problem-solving` | Problem-Solving Strategies for Lenses (the book's) | The seven steps as a numbered list and the boxed Misconception Alert |

## Concepts

All nine were written into `book.json` by the prep pass; the page introduces all
nine and adds none.

| Concept | Introduced | Also |
|---|---|---|
| `converging-and-diverging-lenses` | `converging-lens` | reinforced in `diverging-lens` |
| `focal-point-and-focal-length` | `converging-lens` | reinforced in `diverging-lens`, used in `ray-tracing` |
| `power-of-a-lens` | `lens-power` | reinforced in `diverging-lens` |
| `ray-tracing-rules-for-lenses` | `ray-tracing` | used in `image-formation`, `case-1-and-2`, `case-3` |
| `real-and-virtual-images` | `image-formation` | reinforced in `case-1-and-2`, `case-3` |
| `thin-lens-equation` | `thin-lens-equations` | used in `case-1-and-2`, `case-3` |
| `magnification` | `thin-lens-equations` | used in `case-1-and-2`, `case-3` |
| `three-cases-of-lens-images` | `case-1-and-2` | reinforced in `case-3`, `three-cases` |
| `solve-with-the-thin-lens-equations` | `problem-solving` | used in `thin-lens-equations` (Example 25.6) |

## Types the page binds

`position` alone, as `ch25/COLOR.md` gives 25.6: the focal length, the object and
image distances and the two heights, one hue, told apart by their brackets, labels
and the side of the lens they are measured on. The power in diopters, the
magnification, the index of refraction and every angle are untyped and in ink. The
three rays of a ray-tracing figure are told apart by `F.cat(i)` (COLOR.md), never in
the position hue. The lens, the axis, the person and the photographs' frames are ink.

## Figures

```
sim-lens-focus · Figure 25.25 + 25.27 + 25.28 + 25.29 + 25.30 · converging-and-diverging-lenses, focal-point-and-focal-length, power-of-a-lens · value add: standardisation of five drawings of one lens into one, and variation by choice and slider: the reader turns the lens from converging to diverging, sends the light in parallel or from the focal point (the reversal of 25.28), and from the left or the right (the equal focal lengths of 25.29), and sets the focal length and sees the power follow as its inverse · still, because a set of ray paths has no time in it · choices: the lens (converging, diverging), the light (parallel to the axis, from the focal point, through the center, which is Figure 25.30), the side it comes from (left, right); slider: |f| (position, 2.00 to 8.00 cm, 5.00 cm by default, the book's diverging lens) · headline: "A converging lens of focal length 5.00 cm brings parallel rays together at its focal point F." · an expanded view of ray 1 beside the lens, traced by the law of refraction through two curved surfaces of glass (n = 1.50), with the dotted perpendiculars and θ₁, θ₂ and θ₁′ as the book draws them · 2D (rule 28.1)
photo-sunlight-burn · Figure 25.26 · keep: the text points at it and it is the focal point made visible
sim-image-by-lens · Figure 25.31 + 25.33 + 25.35 + 25.37 · ray-tracing-rules-for-lenses, real-and-virtual-images, thin-lens-equation, magnification, three-cases-of-lens-images · value add: standardisation (one drawing for the five ray diagrams the book prints of one lens and one object) and variation by slider: the reader walks the object in through 2f and f and watches the real inverted image run off to infinity and come back as a virtual upright one, which the book can only show as separate pictures · still, because an image is a state of the arrangement, not a motion · choice: the lens (converging, diverging); sliders: d_o (position, 3.0 to 150 cm, 75.0 cm by default, Example 25.6's bulb in cm), |f| (position, 5.0 to 60.0 cm, 50.0 cm by default), h_o (position, 5.0 to 40.0 cm, 30.0 cm by default); dashed circles on d_o at f (the image at infinity, the AP item's case) and at 2f (m = −1), converging only · headline states the case, the kind of image and its distance · the three rays of the rules in F.cat(0..2), their backward extensions dashed for a virtual image; the object is a standing F.silhouette() h_o tall, the image the same silhouette scaled by m, inverted where m < 0, faint where virtual · readout: 1/d_o + 1/d_i = 1/f with the live numbers and m = −d_i/d_o, the note naming the case of Table 25.3 · a scale that follows the values (manim-style 7) so that the object, both focal points and a nearby image stay framed, lens at x = 560 · 2D
sim-projected-image · Figure 25.32 · real-and-virtual-images, thin-lens-equation · value add: variation by slider and choice: the book's two drawings are one object at one distance; here the object walks from near to far and the reader sees the camera move its lens to keep the image on the film while the eye keeps its retina fixed and changes its lens instead, which is conceptual question 3 · still, because focusing is a setting · choice: camera or eye; slider: d_o (position, 0.25 to 10.0 m, 3.00 m by default) · headline: where the image falls and how far the lens must sit from the film, or what power the eye's lens must take · readout: d_i = f d_o/(d_o − f) for the camera (f = 50.0 mm), P = 1/d_o + 1/d_i for the eye (d_i = 2.00 cm) · 2D
photo-face-lens · Figure 25.34 · keep: the two photographs are the case 1 and case 2 images the passage defines
photo-car-diverging · Figure 25.36 · keep: it is the case 3 image and the text asks the reader to look through such a lens
```

Colours: the rays of `sim-lens-focus` and `sim-image-by-lens` are `F.cat(0)`,
`F.cat(1)`, `F.cat(2)` (ray 1, 2, 3); no hex literal anywhere, since no ray here
carries its wavelength. The focal points F are ink with their distance bracketed in
the position hue.

Labels: `sim-image-by-lens` names the object, the image, the two F points and
brackets d_o, d_i, f, h_o and h_i; the rays are named 1, 2, 3 once each near the
lens. Where a bracket would run off the scene (an image beyond the frame) the
bracket is not drawn and the headline and readout carry the number (rule 26.7).

The book's numbers are the defaults: `sim-lens-focus` opens on 5.00 cm (−20 D when
diverging), `sim-image-by-lens` on Example 25.6's 0.750 m and 0.500 m in cm, and
the detents on |f| at 10.0 cm reach Examples 25.7 and 25.8 with d_o at 7.5 cm.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_26_06_02.jpg` (25.26) | keep | the text points at it |
| `Figure_26_06_10.jpg` (25.34) | keep | the case 1 and case 2 images the passage defines |
| `Figure_26_06_12.jpg` (25.36) | keep | the case 3 image |
| `Figure_26_06_01.jpg`, `_03`, `_04`, `_05`, `_06`, `_07`, `_08`, `_09`, `_11`, `_13` | originals | each travels in its sim's `originals` |
| `Figure_26_06_14.jpg` (the thermometer, unnumbered) | on the card of `cq6` | the conceptual question that moves in from 25.3 asks about it |

## Extra simulations considered

- A half-covered lens forming the same image, fainter (the Misconception Alert).
  Left: striking, but the image-by-lens figure already shows many rays meeting at
  one point; a later chapter pass may add it.
- A lens submerged in water (conceptual question 5). Left: it needs the lensmaker's
  equation, which the book does not teach.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| Check Your Understanding | 0 | 0 | — |
| Conceptual question | 5 | 6 (one from 25.3) | — |
| AP test prep | 4 | 4 | — |
| Problem | 17 | 9 | 8 |

AP items 1 and 3 are keyed and graded choices; 2 and 4 carry a solution the
publisher commented out of the CNXML, so they are open items with AI-marked
suggested approaches that give the method, not a number. Unkeyed problems left
out: the 50.0 mm camera lens's power, the 1.75 D reading glasses, the flower 75.0 cm
away, the person 3.00 m away, the 51.0 mm lens-to-film distance, the −4.00 D lens,
the telephoto lens and the mountains, and the proof that m = f/(f − d_o).
Conceptual question 6 (`fs-id2104353`, the curved thermometer) moves in from 25.3
with `source_section: "25.3"`.

## Tables

Table 25.3, Three Types of Images Formed By Thin Lenses, as a `div.book-table` in
`three-cases`.

## Wanted at chapter level

- `eq-lens-power` → 25.6-lens-power
- `eq-thin-lens` → 25.6-thin-lens-equations
- `eq-magnification` → 25.6-thin-lens-equations
- `eq-thin-lens-rearranged` → 25.6-thin-lens-equations
- `eq-image-distance-solved` → 25.6-thin-lens-equations
- Variables `f_focal`, `P_lens` → 25.6-converging-lens and 25.6-lens-power; `d_obj`, `d_img`, `h_obj`, `h_img`, `m` → 25.6-thin-lens-equations
- Errata: AP items `fs-id1303826` and `fs-id1463977` of m42470 carry solutions commented out of the CNXML; set as open items.
- No concept, edge or symbol row needs changing.

Applied by the chapter pass (2026-09-28):

- The five equation anchors and seven variable anchors are written as listed.
- The two AP items whose solutions are commented out of the CNXML are gathered in `ch25/exploration.md`.
