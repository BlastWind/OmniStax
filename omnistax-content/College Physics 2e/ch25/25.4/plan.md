# Plan: 25.4 Total Internal Reflection

Written before the page was built (root rule 5), under `ch25/config.md`, whose
per-section stop is "applied as proposed on 2026-09-28, on Chen's instruction to
finish the book without check-ins"; the plan is left for review.

## Sub-concepts

The module prints three narrative headers; the opening passage before the first of
them has none, so its header is OmniStax's.

| Span | Header | What it holds |
|---|---|---|
| `critical-angle` | The critical angle (OmniStax's) | The opening paragraphs, the boxed note Critical Angle, Figure 25.13, Snell's law at $\theta_2 = 90^\circ$, the critical angle, and Example 25.4 (the polystyrene pipe) |
| `fiber-optics` | Fiber Optics: Endoscopes to Telephones | Figures 25.14, 25.15 and 25.16, the boxed note Cladding, endoscopes and communications |
| `corner-reflectors` | Corner Reflectors and Diamonds | The corner reflector, Figures 25.17 and 25.18 |
| `diamond-sparkle` | The Sparkle of Diamonds | Figure 25.19 and the paragraph on diamond, zircon and cubic zirconia |

## Concepts

All seven were staged by the prep pass; the page introduces all seven and adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `critical-angle` | `critical-angle` | used in `corner-reflectors` |
| `critical-angle-from-the-indices` | `critical-angle` | used in `diamond-sparkle` |
| `total-internal-reflection` | `critical-angle` | used in `fiber-optics`, `corner-reflectors` |
| `find-a-critical-angle` | `critical-angle` | — |
| `fiber-optics` | `fiber-optics` | — |
| `corner-reflector` | `corner-reflectors` | — |
| `sparkle-of-diamond` | `diamond-sparkle` | — |

`critical-angle` also uses 25.3's `snells-law`, `index-of-refraction` and
`bending-toward-or-away-from-the-normal`.

## Types the page binds

None, which is what `ch25/COLOR.md` gives 25.4 by default. Every angle and every
index of refraction is untyped, the fiber carries no pulse (below), so no speed and
no time are drawn. Every figure is wholly in ink: surfaces and media outlines in
muted ink, rays in ink with arrowheads, normals dashed. No ray here carries a
wavelength, so no spectral hex is written.

## Figures

```
sim-critical-angle · Figure 25.13 · critical-angle, critical-angle-from-the-indices, total-internal-reflection, find-a-critical-angle · value add: variation by slider, since the book's three panels are three positions of one slider and the reader sees the refracted ray swing up to the surface and vanish while the reflected ray takes all the light · still, because a ray at a boundary is a path and has no clock · slider θ₁ (untyped, 0° to 89°, 30° by default, the book's panel (a)) with a dashed circle at θc for the pair chosen; dropdown of the two media (polystyrene to air, the default and Example 25.4's; water to air; diamond to air; flint glass to crown glass; air to water, where no critical angle exists and the circle hides) · headline: "At 30.0° the ray in polystyrene refracts into air at 48.2°." / "…is totally reflected, since 50.0° is more than the critical angle of 42.2°." · graph: none · 2D, the ray diagram is planar (28.1)
sim-light-pipe · Figure 25.14 + 25.16 · fiber-optics, total-internal-reflection · value add: variation by slider and choice, since the reader bends the fiber tighter and tilts the entering ray and watches each bounce stay above the critical angle or fail it, and swaps what surrounds the core; 25.14 (the ray round a bend) and 25.16 (the same fiber clad) are one scene with the surround as a choice, so they fold · still, because the piping of light is the geometry of each reflection, which a still path shows whole; a pulse running down the fiber would add a speed and a clock the section never uses (config left the case open) · sliders: the angle of the ray entering the end α (untyped, 0° to 80°, 30° by default) and the radius of the bend in fiber widths (untyped, 1.5 to 6, 4 by default); dropdown of the surround: air, crown-glass cladding, a bare fiber touching it (three discrete states, a dropdown since a row of three would wrap) · headline: the smallest angle any bounce makes against the critical angle · graph: none · 2D; the book's 25.16 is in perspective but what it teaches is a path in one plane, so a locked view would add shading and nothing else (28.1, 28.5)
sim-image-bundle · Figure 25.15 · fiber-optics · value add: variation by choice, since the reader sees that the letter survives only because each fiber keeps its neighbors, which the book states and the still drawing cannot show · still, nothing moves in an image carried by a bundle · choice: the fibers keep their neighbors / the fibers are shuffled (two discrete states); no slider, since nothing in the idea varies continuously · headline: "Every fiber keeps its place, so the letter arrives as it left." · graph: none · 2D, the two end faces flat with the bundle between them
photo-endoscope · Figure 25.15 (the book's one image, whose panel (b) is the endoscope's view) · kept: the text points at 25.15(b), and the bundle prints both panels in one file, so the photograph row shows the book's image whole beneath the sim that replaces panel (a)
photo-corner-reflectors · Figure 25.17 · kept: the text points at it (the reflector on the Moon, the bicycle reflectors)
sim-porro-prisms · Figure 25.18 · corner-reflector, total-internal-reflection · value add: variation by slider, since the reader tilts the ray and changes the glass and sees the ray come back parallel to itself at every tilt, and sees the reflections stop being total when the index falls below √2 · still, a path · sliders: the index of the prism glass n (untyped, 1.30 to 2.42, 1.52 crown by default, detents at water 1.333, crown 1.52, flint 1.66, diamond 2.419, and a dashed circle at 1.414 where the critical angle is 45°) and the tilt of the entering ray (untyped, −8° to 8°, 0 by default) · headline: the angle each ray meets the long faces at against θc · graph: none · 2D, the prisms drawn flat inside the outline of one barrel; the book's cutaway is in perspective, but the light path is planar (28.1)
sim-diamond · Figure 25.19 · sparkle-of-diamond, critical-angle-from-the-indices · value add: variation by slider and choice, since the reader moves the entry point and the angle of a ray and swaps diamond for cubic zirconia, zircon or glass, and watches where the light leaves · still, a path · sliders: where the ray enters the table (untyped, −0.95 to 0.95 of the half-width, −0.35 by default) and its angle of incidence (untyped, −60° to 60°, −10° by default, a ray that glass lets out through the pavilion and diamond does not); dropdown of the gem (diamond 2.419, cubic zirconia 2.17, zircon 1.923, crown glass 1.52) · headline: "In diamond the critical angle is 24.4°, and this ray is totally reflected 2 times before it leaves." · graph: none · 2D, a brilliant cut in profile, which is how the book draws it
```

Labels: `sim-critical-angle` names the two media, the normal, and the three angles
(θ₁, θ₂ or θc, and the reflected angle), six at most. `sim-light-pipe` names core
and surround once, and the ray's bounces carry no labels; the smallest angle is in
the headline and readout. `sim-porro-prisms` names the two prisms, objective and
eyepiece. `sim-diamond` names air and the gem once and marks the critical angle at
the first internal reflection only; later bounces are unlabelled (26.7).

Reflected rays below the critical angle are drawn faint, the partial reflection the
book mentions, and a ray that escapes is drawn continuing out of the medium.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_26_04_03.jpg` (25.15) | Kept twice: original of `sim-image-bundle` and the photograph row `photo-endoscope` | One file carries (a) the drawing and (b) the endoscope's view; the text points at (b) |
| `Figure_26_04_05.jpg` (25.17) | Kept as `photo-corner-reflectors` | The text points at both panels |
| `Figure_26_04_09.jpg` (the liquid at the critical angle) | On the card of `fs-id1826801` | Keyed problem that refers to it |
| `Figure 26_04_08.jpg` (the double rainbow) | Not copied here | Its conceptual question moves to 25.5, which owns the card |
| `Figure 26_04_10.jpg` (the ray entering a fiber end) | Not copied | Its problem is unkeyed and left out |

## Extra simulations considered

- A pulse of light racing down a long fiber with a counter of bounces. Left: the
  section asks for no speed or time, and the path is the idea.
- A bundle of fibers in cross-section with and without cladding, light leaking to a
  neighbour. Left: the third choice of `sim-light-pipe` shows it.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| Check Your Understanding | 0 | 0 | — |
| Conceptual question | 4 | 3 | `fs-id1333608` moves to 25.5 |
| AP test prep | 1 | 1 (open, AI approach) | — |
| Problem | 8 | 3 | 5 unkeyed |

The AP item's solution is commented out of the CNXML, which is no key, so it is an
open item with an AI-marked suggested approach, as 24.4 did. Unkeyed problems left
out: water to air at 48.6°, diamond to air and zircon to air, water against ice,
the substance with a critical angle of 68.4° in water, and the crown-glass fiber
end (a show-that with no key).

## Tables

None.

## Wanted at chapter level

- `eq-critical-angle-condition` → 25.4-critical-angle
- `eq-critical-angle` → 25.4-critical-angle
- variables `θ_c`, `θ_1`, `θ_2`, `n_1`, `n_2` (section 25.4) → 25.4-critical-angle
- Errata: Example 25.4's strategy says the index of polystyrene "is found to be 1.49 in Figure 25.14", which is the fiber drawing; the index is in Table 25.1 of 25.3. Kept as printed in words naming Table 25.1 as the prep notes settle, and named in `notes`.
- No concept or symbol row needs changing.
