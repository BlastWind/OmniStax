# Plan: 26.3 Color and Color Vision

Written before the page was built (root rule 5), under `ch26/config.md`, which
replaces the per-section stop with a plan left for review ("applied as proposed on
2026-09-28, on Chen's instruction to finish the book without check-ins").

## Sub-concepts

The module prints two narrative headers, which keep their words; the spans between
them carry OmniStax's headers.

| Span | Header | What it holds |
|---|---|---|
| `simple-theory` | Simple Theory of Color Vision (book) | The opening paragraph and the paragraph on pure wavelengths and hues |
| `rods-and-cones` | Rods and cones | The rods paragraph, Figure 26.10 and Take-Home Experiment: Rods and Cones with its two numbered steps |
| `three-cones` | Three types of cones and three primary colors | The cones paragraph with the simplified theory, Figure 26.11 and the Sim on three primary colors |
| `true-color` | The true color of an object | The crimson rosella paragraph and Figure 26.12 |
| `light-source-color` | The color of a light source | The paragraph on sources, Take-Home Experiment: Exploring Color Addition and Figure 26.13 |
| `color-constancy` | Color Constancy and a Modified Theory of Color Vision (book) | The two paragraphs on color constancy and edges, Figure 26.14 |
| `retinex` | The retinex theory | Land's retinexes and his two-filter experiment |

## Concepts

All five were written into `book.json` by the prep pass; the page introduces all five.

| Concept | Introduced | Also |
|---|---|---|
| `rods-and-cones` | `rods-and-cones` | used in `three-cones` |
| `simplified-theory-of-color-vision` | `three-cones` | uses in `simple-theory`, `light-source-color` |
| `true-color-of-an-object` | `true-color` | used in `color-constancy` |
| `color-of-a-light-source` | `light-source-color` | used in `color-constancy` |
| `color-constancy` | `color-constancy` | reinforced in `retinex` |

## Types the page binds

`position` alone, for the wavelength: the slider of Figure 26.11 and the wavelength
axis titles of Figures 26.11 and 26.13. The relative sensitivity (Figure 26.11) and
the relative intensity (Figure 26.13) are both dimensionless ratios on the book's
own relative scales, so `intensity` is not bound and both axes are in ink, as
`ch26/COLOR.md` allows. Everything else is a colour that is the physical fact
(below) or ink.

## Figures

```
fig-rods-and-cones · Figure 26.10 · rods-and-cones · kept as the book's image: one file holds both the drawing (a) and the micrograph (b), and the micrograph is a photograph the config keeps; the drawing is anatomy with no variable in it, so a faithful copy would add nothing the book's image lacks · still · no controls · none · none · 2D
sim-cone-sensitivity · Figure 26.11 · rods-and-cones, simplified-theory-of-color-vision · value add: variation by slider: one pure wavelength runs across the visible band and the reader reads off how strongly it stimulates each type of cone and the rods, and sees the hue it produces · still, because a response curve has no time in it · slider: λ (position, 400 to 700 nm, 580 nm by default, the yellow of the text; detents at the three cone peaks 420, 534 and 564 nm) · headline: the light of this wavelength, its hue, and which cones it stimulates most · graph alone (the graph is the idea) · 2D. Curves: each cone curve in the spectral colour of its peak wavelength (hex through `spectral()`, the physical fact), rods dotted ink; four curve labels, one per curve, as the book sets them; the wavelength strip beneath painted in its true colours. Readout: the three cone responses as a ratio at the live wavelength
sim-three-primaries · Sim · simplified-theory-of-color-vision · value add: variation by slider: the text's red, green and blue phosphors mixed in any proportion, yellow from red and green, white from all three · still, no time in mixing · sliders: red, green and blue intensity (untyped, 0 to 100 %; 100, 100, 0 by default, the text's yellow) · headline: the hue the three produce together · none · 2D. Three overlapping discs of light on a dark screen in their own colours (hex, the physical fact), the mixture swatch with its hue named. Readout: the mixture as the sum of the three weighted primaries
sim-true-color · Figure 26.12 · true-color-of-an-object · value add: variation by choice: the book draws four pairings of light and object; here any of four lights (white, red, green, blue) falls on any of four objects (white, red, blue, black), and the reader sees which rays are reflected and which absorbed, including the text's blue object under red light and conceptual question 1's red object under green light · still · choices: light (white, red, green, blue), object (white, red, blue, black) · headline: what the object reflects and the color it appears · none · 2D. Rays in their spectral colours (hex, the physical fact); the object's face in its true color; absorbed rays end in a dot at the surface; the book's panel is one state (white light on the blue object by default)
sim-emission-spectra · Figure 26.13 · color-of-a-light-source · value add: variation by choice plus intuition: the four spectra stay on one frame as the book prints them, a choice brings one forward, and a white tablecloth beside the graph takes that source's color · still · choice: source (A sun, B fluorescent, C incandescent, D helium-neon laser; A by default) · headline: the source and the color a white object takes under it · graph beside the tablecloth · 2D. Curves in `F.cat(0..3)`, one label each (four); the tablecloth's tint is the physical fact (hex). Readout: the relative intensity at 450 nm against that at 650 nm, the blue-to-red balance that sets the tint
sim-edges · Figure 26.14 · color-constancy · value add: standardisation only, so a faithful copy in the house style: five uniform grey strips, the step graph of the actual light intensities and the graph of the signal from the rods and cones with its spikes at each edge · still · no controls · no headline · none · 2D. The greys are the fact the figure shows and are drawn as greys; the two graph curves ink
```

Colours: position for λ; hex only inside `spectral()`, the three primaries, the four
object faces and the four source tints, all physical facts named above. The four
spectra and nothing else take `F.cat`.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `OSX_CP2e_Figure_27_02_06.jpg` (26.10) | keep | the text points at the rods and cones; (b) is a micrograph |
| `OSX_CP2e_Figure_27_03_01.jpg` (26.11) | original | travels in `sim-cone-sensitivity`'s `originals` |
| `Figure_27_03_02.jpg` (26.12) | original | travels in `sim-true-color` |
| `Figure_27_03_03.jpg` (26.13) | original | travels in `sim-emission-spectra` |
| `Figure_27_03_04.jpg` (26.14) | original | travels in `sim-edges` |
| PhET Color Vision | drop | the PhET link is left out, as everywhere; its image marker is empty; named in `notes` |

## Extra simulations considered

- `sim-three-primaries` (above) is built: the text's television example and "yellow from red and green" are the core of the simplified theory, and no book figure shows a mixture.
- Land's two-filter projection. Left: a screen cannot reproduce the perception the experiment depends on.
- Mach bands with a contrast slider. Left: the illusion looks alike at every contrast.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| Check Your Understanding | 0 | 0 | — |
| Conceptual question | 4 | 4 | — |
| AP test prep | 2 | 2 | — |
| Problem | 0 | 0 | — |

AP item 1 is keyed (a) and set as a graded choice; AP item 2 is unkeyed and set as an
open item with an AI-marked suggested approach. Every conceptual question carries an
AI-marked suggested approach. No generated questions; `color-of-a-light-source` is
tested only by AP item 1 and conceptual question 2 indirectly.

## Tables

None.

## Wanted at chapter level

- Glossary `hues` → 26.3-simple-theory
- Glossary `rods and cones` → 26.3-rods-and-cones
- Glossary `simplified theory of color vision` → 26.3-three-cones
- Glossary `color constancy` → 26.3-color-constancy
- Glossary `retinex` → 26.3-retinex; `retinex theory of color vision` → 26.3-retinex
- The book prints four stray asterisks after "retinex theory of color vision"; they are dropped.
- No concept, edge, symbol or equation row needs changing; the page uses `λ` (`\klam`) as it stands.
