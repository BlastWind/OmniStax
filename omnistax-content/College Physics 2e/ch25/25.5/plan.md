# Plan: 25.5 Dispersion: The Rainbow and Prisms

Written before the page was built (root rule 5), under `ch25/config.md`, which
replaces the per-section stop with a plan left for review: applied as proposed
on 2026-09-28, on Chen's instruction to finish the book without check-ins.

## Sub-concepts

The module prints no narrative header, so the four headers are OmniStax's.

| Span | Header | What it holds |
|---|---|---|
| `colors-of-light` | The colors of the rainbow and of a prism | The opening paragraph on al-Farisi, Figure 25.20, the paragraph that ties each color to a wavelength and defines dispersion, the Dispersion note and Figure 25.21 |
| `index-and-wavelength` | The index of refraction depends on wavelength | The paragraph that makes refraction the cause, the Making Connections: Dispersion note, Table 25.2 and Figure 25.22 |
| `rainbows` | How a rainbow is formed | The paragraph on refraction and reflection in a drop, Figures 25.23 and 25.24 |
| `dispersion-help-and-nuisance` | Dispersion as a help and as a nuisance | The closing paragraph on fibers, lasers and light from outer space |

## Concepts

All four were written by the prep pass; the page adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `color-and-wavelength` | `colors-of-light` | used in `index-and-wavelength` |
| `dispersion` | `colors-of-light` | reinforced in `index-and-wavelength`, `dispersion-help-and-nuisance` |
| `index-depends-on-wavelength` | `index-and-wavelength` | used in `rainbows` |
| `rainbow-formation` | `rainbows` | — |

Used from earlier sections: `snells-law` and `index-of-refraction` (25.3) in
`index-and-wavelength`, `law-of-reflection` (25.2) and `total-internal-reflection`
(25.4) in `rainbows`.

## Types the page binds

`position` only, for the wavelength $\klam$ on the sliders and in the readouts.
Every angle and every index of refraction is untyped and in ink. `ch25/COLOR.md`
allows `velocity` where two colors' speeds are compared; no figure draws a speed,
so it is not bound (the moved Critical Thinking problem compares speeds on its
card only). A ray's color is its wavelength, drawn as the physical fact (root rule
7's third family) by one function, `spectral(λ)`, that turns a wavelength in
nanometers into its sRGB color; sunlight is drawn in one pale yellow hex,
`#f4d35e`, the color the book gives it; these are the only color literals.

## Figures

```
fig-rainbow-and-prism · Figure 25.20 · photo, kept · color-and-wavelength, dispersion · the section opens on it and its claim is that the two sets of colors are identical
sim-spectrum-index · Figure 25.21 · color-and-wavelength, index-depends-on-wavelength · value add: variation by slider and standardisation, since the band becomes a wavelength axis the reader walks, and Table 25.2's rows are drawn beneath it as the index against the same axis, so that the rise of n toward the violet is seen rather than read from six columns · still, a spectrum has no clock · slider λ (position, 380 to 700 nm, 580 nm by default, the table's yellow, detents at the table's six wavelengths); dropdown medium (the table's six media, water by default) · headline: "Light of 580 nm is seen as yellow, and water bends it with an index of 1.333." · graph below the band: n against λ, fixed axes 400 to 700 nm and each medium's own fixed n range, the six table points and the working point pinned · 2D
sim-prism · Figure 25.22 · index-depends-on-wavelength, dispersion · value add: variation by slider and choice, since the reader sends one wavelength or white light through any of the table's media at any angle and watches the fan open wider in flint glass than in water · still, a path is not a history · choice light (one wavelength, white light, the book's (a) and (b)); slider λ (position, 410 to 660 nm, 580 nm, detents at the table's six) that sets the one wavelength and marks it in the fan; slider θ₁ (untyped, 30° to 80°, 45°, the exercise's prism); dropdown medium (crown glass by default); the fan's spread is drawn ×8, as the book says its own is exaggerated, and the note states the true spread (rule 28.4, fixed, not a slider, since a second slider on the drawing would be a visual setting) · headline: "Crown glass bends 580 nm light entering at 45.0° to 27.8° and sends it out at 54.2°." · graph none · 2D, a prism's path lies in one plane (rule 28.1)
sim-drop · Figure 25.23 · rainbow-formation, index-depends-on-wavelength · value add: variation by slider and a graph, since the reader moves the height at which the sunlight enters the drop and sees that the exit angle climbs to a greatest value, 42.4° for red and 40.8° for violet, where the light leaving the drop crowds together, which is the specific angle the book says a rainbow is seen at · still · slider entry height b (untyped, 0 to 0.99 of the radius, 0.86 by default, a dashed circle at the height that gives the greatest red angle); choice reflections (one, two), the secondary bow as a switch · headline: "Entering at 0.86 of the radius, red light leaves at 42.4° to the sunlight and violet at 40.8°." · graph beside, the exit angle against the entry height for red and violet, fixed 0 to 60°, the point pinned · 2D, the path in a drop lies in one plane
sim-rainbow-arc · Figure 25.24 · rainbow-formation · value add: shape in 3D, since the arc is a cone of one fixed half-angle about the line from the sun through the observer's head cut by the curtain of rain, which a flat drawing cannot show as one fact · still, the sun's height and where you stand are settings · slider sun's elevation (untyped, 0° to 50°, 20°); slider observer's position along the curtain (untyped, −4 to 4 m of the scene, 0); choice bows (primary, primary and secondary) · headline: "With the sun 20° up, the top of the red band stands 22.4° above the horizon." · graph none · physical 3D, flat on the book's side view (a) where WebGL is missing; auto-rotate off (an idle spin would carry the bow away from the viewer who is its point), snap views "behind you" (looking along the sun's rays, the book's (b)) and "from the side" (across the rays, the book's (a)); orbit pitch 4° to 70° above the ground and yaw ±100°, so the ground is never seen from beneath and the scene is never turned round to face the sun, where the curtain hides the cone
```

Labels: the prism names the medium, the incident ray, the normal and the
extreme colors, under six. The drop names red, violet and the sunlight; in the
white fan of the prism the six colors are one kind, labelled only at the two
ends. The 3D scene names the observer, the shadow of the head, the sunlight and
the two bands, and carries hover names for the drops and the rays.

Figure 25.24 is one image in the bundle holding (a), (b) and the photograph (c)
together, so it stays one figure row whose original is that image; (c) is
not cut out into a photograph of its own, since a section copies book files and
never makes new ones, and the double rainbow is already on the page twice over
(Figure 25.20 and the card of the moved conceptual question).

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_26_05_01.jpg` (25.20) | kept as a photo | the text sets the two sets of colors side by side |
| `Figure_26_05_02.jpg` to `_05.jpg` | originals of the four sims | the figures they replace |
| `Figure_26_05_06.jpg` (the 45.0° prism) | on the card of `fs-id1341681` | the keyed problem refers to it |
| `Figure_26_04_08.jpg` (the double rainbow) | on the card of `fs-id1333608` | it travels with the question moved in from 25.4 |

## Extra simulations considered

- A signal of white light spreading in time along a fiber. Left: 25.4 owns the
  fiber, and the sentence here names the effect without any quantity to vary.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| Problem | 8 | 4 keyed + 1 moved in (`exer-00001` from 25.7) | 4 unkeyed |
| Conceptual question | 0 | 1 moved in (`fs-id1333608` from 25.4), AI suggested approach | — |

Left out, unkeyed: the ratio of red to violet speeds in diamond and in
polystyrene, the critical angles of diamond, fused quartz into water at 60.0°,
and the 1.00 cm crown-glass plate.

## Tables

Table 25.2, Index of Refraction n in Selected Media at Various Wavelengths, a
`div.book-table` in `index-and-wavelength`.

## Wanted at chapter level

- `λ` (variable row 25.5) → 25.5-colors-of-light
- `n` (variable row 25.5) → 25.5-index-and-wavelength
- Errata: the book's key to `exer-00001` (a) writes $v_{610} = c/1.530$ and $v_{410} = c/1.514$, the two indices swapped; the difference it finds, 2.07 × 10⁶ m/s, is the right size, and orange, not violet, is the faster; kept as printed and named in `exercise_notes`.
- Errata: the paragraph "Refraction is responsible…" opens "(See Table 25.2." and never closes the parenthesis; kept as printed.
- No concept, edge or symbol row needs changing.

Applied by the chapter pass (2026-09-28):

- Both variable anchors are written as listed.
- `exer-00001` is set here with `source_section: "25.7"`. Both errata, the swapped indices in its key and the unclosed "(See Table 25.2.", are gathered in `ch25/exploration.md`. Figure 25.24(c) stays inside the sim's original, since one bundle file holds all three panels.
