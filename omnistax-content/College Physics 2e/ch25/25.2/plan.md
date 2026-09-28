# Plan: 25.2 The Law of Reflection

Written before the page was built (root rule 5), under `ch25/config.md`, which
replaces the per-section stop with a plan left for review ("applied as proposed on
2026-09-28, on Chen's instruction to finish the book without check-ins").

## Sub-concepts

The module prints no narrative header, so the three headers are OmniStax's.

| Span | Header | What it holds |
|---|---|---|
| `reflection-and-diffusion` | Smooth and rough surfaces | The opening paragraph, Figures 25.4 to 25.8 |
| `law-of-reflection` | The law of reflection | The one-line statement and the boxed note The Law of Reflection |
| `mirror-images` | The image behind a mirror | The paragraph on mirror images, Figure 25.9 and the Take-Home Experiment |

## Concepts

The prep pass wrote all three; the page adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `law-of-reflection` | `law-of-reflection` | used in `reflection-and-diffusion` (Figure 25.4 states it first) and in `mirror-images` |
| `specular-and-diffuse-reflection` | `reflection-and-diffusion` | reinforced in `mirror-images` (the Take-Home Experiment) |
| `image-behind-a-flat-mirror` | `mirror-images` | — |

## Types the page binds

None, as `ch25/COLOR.md` gives 25.2: every angle is untyped and a scene length is
untyped, so every figure is wholly in ink (root rule 7's second branch). The
flashlight's beam is drawn in ink too; it carries no wavelength here.

## Figures

```
sim-law-of-reflection · Figure 25.4 · law-of-reflection · value add: variation by slider, since the book draws one angle and the reader sets any, the reflected ray following · still, because a reflection is a path and has no clock · slider: θ_i (untyped, 0° to 85°, 35° by default, near the book's drawing); special value 0°, a ray along the perpendicular that comes straight back, named as a dashed circle · headline: "A ray striking at 35° to the perpendicular leaves at 35° on the other side." · graph: none · 2D (rule 28.1: the incident ray, the perpendicular and the reflected ray lie in one plane)
sim-rough-and-smooth · Figure 25.5 + 25.6 + 25.7 · specular-and-diffuse-reflection, law-of-reflection · value add: variation by slider and standardisation, since the book draws a rough surface, a sheet of paper and a mirror as three pictures and they are one scene at three roughnesses; the reader sees every ray obey the law at its own facet while the bundle fans out · still, because the roughness is a property of the surface and not a motion · sliders: the roughness (untyped, 0 to 1, 0.8 by default, a sheet of paper; a dashed circle at 0 labelled mirror, the case of Figure 25.7) and the angle of incidence θ_i (untyped, 15° to 70°, 40° by default); two observers' eyes, one at the mirror direction and one well off it, each told how many of the nine rays reach it · headline: "The rough surface sends the nine rays off over 96°, so both observers see the paper." · graph: none · 2D. Folded because the three book figures are one surface drawn at three roughnesses (config.md names this fold)
fig-moonlight · Figure 25.8 · photo, kept: the text points at it ("as shown in Figure 25.8") and it shows both effects at once
sim-image-in-mirror · Figure 25.9 · image-behind-a-flat-mirror, law-of-reflection · value add: variation by slider, since the reader moves the person toward and away from the mirror and watches the image keep the same distance behind it, and sees that the patch of mirror the two rays use is always half her height, which 25.1's full-length mirror problem asks · still, because standing at a distance is a setting and not a motion · sliders: the distance from the mirror (untyped, 0.5 to 3.0 m, 1.20 m by default) and her height (untyped, 1.40 to 1.90 m, 1.70 m by default) · headline: "She stands 1.20 m in front of the mirror, and her image stands 1.20 m behind it." · graph: none · 2D. The person and her image are F.silhouette; the image is drawn faint, facing back toward her
```

Labels: Figure 25.4 names five things (surface, perpendicular, two rays, two
angles), Figure 25.5 + 25.6 + 25.7 names the flashlight, the surface and the two
observers, Figure 25.9 names the mirror, the image and the two distances; every
figure is under six entity labels, drawn beside their things.

Colour: every figure is ink. The two observers of the folded figure and the two
rays of Figure 25.9 are told apart by their labels, not by hue.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_26_02_05.jpg` (Figure 25.8) | Kept as `fig-moonlight` | The text points at it and it shows the passage's combination of effects |
| `Figure_26_02_01` to `_04`, `OSX_CP2e_Figure_26_02_06` | Originals of the three sims | Replaced drawings |
| `Figure_26_01_02.jpg` (the full-length mirror, from 25.1) | On the card of `p1` | The moved problem refers to it |
| `Figure 26_02_08`, `26_02_09` | Not copied | Their problems are unkeyed and left out |

## Extra simulations considered

- A corner reflector with a rotation slider. Left: its problem is unkeyed and left
  out, and the section's text never teaches it; 25.4 has the corner reflector.
- A mirror turned by θ turning the ray by 2θ. Left for the same reason.

## Exercises

| Kind | In the book | Set here | Left out or moved |
|---|---|---|---|
| Check Your Understanding | 0 | 0 | — |
| Conceptual question | 1 | 1 (open, AI suggested approach) | — |
| AP test prep | 2 | 1 (keyed, graded choice) | `fs-id1448298` moves to 25.7 |
| Problem | 3 | 1, moved in from 25.1 (`fs-id3065345`, keyed) | all three of 25.2's own, unkeyed |

No question is generated; the three concepts are tested by the conceptual
question, the keyed AP item and the moved problem.

## Tables

None.

## Wanted at chapter level

- `eq-law-of-reflection` → 25.2-law-of-reflection
- variable `θ_i` → 25.2-reflection-and-diffusion
- variable `θ_r` → 25.2-reflection-and-diffusion
- glossary `mirror` → 25.2-reflection-and-diffusion
- glossary `law of reflection` → 25.2-law-of-reflection
- No concept, edge or symbol row needs changing.
