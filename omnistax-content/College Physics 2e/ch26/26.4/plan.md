# Plan: 26.4 Microscopes

Written before the page was built (root rule 5), under `ch26/config.md`: "applied as
proposed on 2026-09-28, on Chen's instruction to finish the book without check-ins".
The plan is left for review after the build.

## Sub-concepts

The module prints no narrative header, so every span carries OmniStax's.

| Span | Header | What it holds |
|---|---|---|
| `multiple-element-systems` | Optical instruments with more than one lens | The opening paragraph and the photograph of Figure 26.15 |
| `compound-microscope` | The compound microscope | The history and the two lenses, Figure 26.16, the two lenses in succession, $m = m_{\text{o}}m_{\text{e}}$ and the boxed Overall Magnification |
| `microscope-magnification` | Finding the magnification of a microscope | Example 26.5 |
| `numerical-aperture` | Numerical aperture and working distance | The resolution sentence, $\text{NA} = n\sin\alpha$, Figure 26.17 and the working distance |
| `f-number` | The $f$-number | $f/\# = f/D \approx 1/(2\,\text{NA})$ and the optical fiber (Figure 26.18) |
| `immersion` | Immersion lenses | Oil, glycerine and water between objective and cover slip (Figure 26.19) |
| `illumination` | Field of view and illumination | The field of view, scanning, condensers and Figure 26.20 |
| `beyond-visible-light` | Microscopes beyond visible light | X ray and electron microscopes, Figures 26.21 and 26.22, and the boxed Take-Home Experiment: Make a Lens |

## Concepts

All seven are in `book.json` from the prep pass; none is added.

| Concept | Introduced | Also |
|---|---|---|
| `compound-microscope` | `compound-microscope` | reinforced in `microscope-magnification` |
| `overall-magnification` | `compound-microscope` | used in `microscope-magnification` |
| `solve-a-multiple-element-system` | `microscope-magnification` | |
| `numerical-aperture` | `numerical-aperture` | used in `f-number`, `immersion` |
| `f-number` | `f-number` | |
| `immersion-objectives` | `immersion` | |
| `microscopes-beyond-visible-light` | `illumination` | reinforced in `beyond-visible-light` |

## Types the page binds

`position` alone (ch26/COLOR.md): the object and image distances of both lenses, the
separation of the lenses, the focal lengths and the aperture diameter $D$. Every
magnification, NA, $f/\#$, angle and index is untyped ink. Rays are `F.cat(i)`, two rays
told apart in the microscope; no hex literal anywhere.

## Figures

```
photo-microscope-in-use · Figure 26.15 · keep: the text points at it ("See Figure 26.15")
sim-compound-microscope · Figure 26.16 · compound-microscope, overall-magnification, solve-a-multiple-element-system · value add: variation by slider: the reader moves the specimen and the eyepiece and sees the first image run along the tube and the final image swing from virtual and inverted, through infinity, to real and upright behind the eye, which the book can only describe in Example 26.5's discussion · still, because an image is a state of the arrangement · sliders: d_o (position, 6.20 to 8.00 mm, 6.20 by default), L the separation (position, 190 to 300 mm, 230 by default), f_e (position, 20.0 to 80.0 mm, 50.0 by default); f_o fixed at Example 26.5's 6.00 mm; a dashed circle on L at d_i + f_e (final image at infinity) · headline states the kind of final image, its distance and the overall magnification · readout m = m_o m_e with the live numbers, note giving d_i, d_o' and d_i' · none · 2D, not to scale: the object side is stretched so that the objective's thin-lens relation holds in the drawing (its F points are drawn 60 units out), and the tube and eyepiece are to one scale of 2.2 units per mm; the heights are one vertical scale chosen so the final image stays in frame; the drawing says "not to scale"
sim-numerical-aperture · Figure 26.17 + 26.19 · numerical-aperture, f-number, immersion-objectives · value add: variation by slider and choice: the reader widens the objective's cone and changes the medium between it and the cover glass, and sees a fan of rays from the specimen either reach the objective or be bent away (or totally reflected) at the cover glass, with NA passing 1.00 only in water or oil · still, because the fan is a set of paths · slider: α (untyped, 10° to 72°, 48.6° by default, NA 0.750 in air, the book's 0.75 NA objective), choice: medium (air n = 1.00, water 1.33, oil 1.51); cover glass n = 1.52 · headline: how many of the specimen's rays reach the objective and the NA · readout NA = n sin α with live numbers; in air a note gives f/# ≈ 1/(2NA) · none · 2D flat section through the axis (rule 28.1): the lesson is an angle in one plane, and the book's (a) and 26.19 are sections; the aperture D is bracketed in the position hue
sim-fiber-acceptance · Figure 26.18 · numerical-aperture · value add: variation by slider and shape by a locked view: the reader tilts a ray entering the fiber and sees it trapped by total internal reflection inside the acceptance cone and leaking into the cladding beyond it · still · sliders: the entry angle θ (untyped, 0° to 60°, 20.0° by default) with a dashed circle at α_max, the cladding index n₂ (untyped, 1.30 to 1.48, 1.40 by default); core n₁ = 1.50 · headline: whether the ray is guided · readout NA = n sin α_max with live numbers · none · locked view (rule 28.2, ch26 notes): the fiber and its acceptance cone in perspective from yaw 0.35, pitch 0.22, the ray in the axial plane; no orbit
sim-illumination · Figure 26.20 · microscopes-beyond-visible-light · value add: standardisation of four panels into one microscope whose illumination is a choice, the specimen and objective holding their place while the light paths change · still · choice: transmitted (condenser lens), transmitted (mirror condenser), dark field, reflected laser · headline names how light reaches the objective · readout: a sentence per scheme naming what the objective collects (no equation; the idea has none) · none · 2D
photo-electron-microscope · Figure 26.21 · keep: the text points at it
photo-bacteria-sand · Figure 26.22 · keep: it shows what an electron microscope resolves, the thing the passage is about
```

Labels: the microscope names object, objective, first image, eyepiece and final image
once each and brackets d_o, d_i, d_o', d_i'; a bracket whose ends leave the frame is not
drawn and the headline carries its number. The fan of 26.19 is not labelled ray by
ray; hover names the objective, cover glass and medium.

Extra simulations: none. A working-distance slider was judged and left out, since the
book gives no relation between working distance and NA.

## Photographs and unnumbered images

The AP item `fs-id2589414` carries its outline (Figure_27_04_09.jpg) on its card's
`figure` field, as config.md says.

## Exercises

AP: `fs-id2859977` keyed (b), a graded choice; `fs-id2589414` unkeyed (its solution is
commented out of the CNXML), open with an AI approach. Conceptual: five, open with AI
approaches. Problems keyed: `fs-id2666912`, `fs-id2407281`, `eip-49`, and `exer-00001`
from 26.6 (`source_section: "26.6"`). Left out, unkeyed: `fs-id3046042`,
`fs-id2639290`, `eip-999`, `fs-id1526656`. No inline checks.

## Wanted at chapter level

- eq-overall-magnification → 26.4-compound-microscope
- eq-objective-magnification → 26.4-microscope-magnification
- eq-objective-image-distance → 26.4-microscope-magnification
- eq-eyepiece-magnification → 26.4-microscope-magnification
- eq-numerical-aperture → 26.4-numerical-aperture
- eq-f-number → 26.4-f-number
