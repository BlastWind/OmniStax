# Plan: 25.1 The Ray Aspect of Light

Written before the page was built (root rule 5), under `ch25/config.md`, which
replaces the per-section stop with a plan left for review ("applied as proposed on
2026-09-28, on Chen's instruction to finish the book without check-ins").

## Sub-concepts

The module prints no narrative header, so the two headers are OmniStax's.

| Span | Header | What it holds |
|---|---|---|
| `three-paths` | Light travels in straight lines called rays | The opening paragraph on the three ways light travels, the boxed note Ray, and Figure 25.3 |
| `geometric-optics` | When light acts like a ray | The two paragraphs on objects larger than the wavelength and on geometric optics and its two laws, and the boxed note Geometric Optics |

## Concepts

All four were written into `book.json` by the prep pass; the page introduces all
four and adds none.

| Concept | Introduced in |
|---|---|
| `ray` | `three-paths` |
| `three-paths-of-light` | `three-paths` |
| `ray-approximation` | `geometric-optics` |
| `geometric-optics` | `geometric-optics` |

## Types the page binds

None. The page is a ray diagram and is wholly in ink, as `ch25/COLOR.md` gives
25.1. The Sun, the Earth, the window, the car, the person and every ray are ink.

## Figures

```
sim-three-paths · Figure 25.3 · three-paths-of-light, ray · value add: standardisation and variation by choice, since the book draws its three paths tangled in one picture and the reader here picks each path in turn and sees it stand out as a chain of straight segments, bending only where it meets glass or a shiny surface · still, because a path is a set of straight lines and has no clock in it; no cycle, no transport · choice: the path (directly through empty space, through media, after reflection), a discrete state and so a segmented control (rule 26.1); no slider, since nothing in the idea varies continuously · headline: "Light from the Sun reaches the upper atmosphere in one straight ray." and its two siblings · graph: none; panel (a) the Sun and the Earth on the left, panel (b) a cross-section of a window with a car outside and a person inside on the right · 2D, since a path of straight lines is planar (rule 28.1)
```

Labels: Sun, upper atmosphere, window glass and car are labelled (four, under the
six of rule 26.7); the person is a silhouette and is named by hover, as is the
Earth. The rays not chosen stay drawn, faint, so the reader sees all three at once
and the chosen one in full ink; the choice crossfades between them. The readout
names the chain of the chosen path and counts its straight segments.

Photographs: none in this module. Figure 25.3 is a drawing and is replaced.

Extra simulations: a slit whose width is dragged against the wavelength, showing
the beam stay a ray while the slit is many wavelengths wide and spread once it is
not, was considered for `ray-approximation` and left: the spreading is wave optics,
which this book has not taught by this page, so it fails rule 26.5.

## Exercises

- `fs-id1419353` (AP, keyed (c)): graded choice, cites `geometric-optics`, tests `ray`, `geometric-optics`.
- `fs-id1865105` (AP, unkeyed): open item with an AI-marked suggested approach, tests `ray-approximation`.
- `fs-id3065345` (the full-length mirror, keyed) is set with 25.2 with `source_section: "25.1"`, as `config.md` settles; its image travels with it.

No conceptual questions and no Check Your Understanding box in this module.

## Wanted at chapter level

- glossary `ray` → 25.1-three-paths
- glossary `geometric optics` → 25.1-geometric-optics
