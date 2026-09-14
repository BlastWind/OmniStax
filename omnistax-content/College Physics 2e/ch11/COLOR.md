# Chapter 11 colour plan

Prepared 2026-09-14. Approved with `config.md`. This chapter uses the book's
declared physical types and the app's selected palette, as root rule 7 and
root rule 22 require. No figure hard-codes a hue, and every page binds only
the union of the types its own figures draw, its sliders carry or its
readouts state. The introduction binds none.

## The types this chapter adds

| Type | Label | Dimension | Why it is its own type |
|---|---|---|---|
| `pressure` | pressure | N/m² | The chapter's quantity. Its dimension matches `stress`, which Chapter 5 declared, and rule 7 forbids folding one into the other to save a colour: a stress is what a solid carries across an internal surface and has a direction relative to it, a pressure is a scalar a fluid exerts equally in every direction, and 11.3 spends a passage on the difference. Chapter 13 reuses it for the pressure of a gas |
| `density` | density | kg/m³ | The subject of 11.2 and a slider in six later figures. It is not a mass: the chapter's whole argument is that a ton of feathers and a ton of bricks differ in it while agreeing in mass |
| `surface-tension` | surface tension | N/m | Declared for 11.8. Its dimension matches `stiffness`, and a force constant relates a force to the displacement of one body while a surface tension relates a force to the length of the line it is spread along; they are not variants of each other |

## What each quantity takes

| Quantity | Type | Treatment |
|---|---|---|
| Pressure, average pressure, gauge, absolute and atmospheric pressure, the two hydraulic pressures, a change in pressure | `pressure` | One hue for all; variants differ by subscript, and the average $\bar P$ is dashed, as rule 7 asks |
| Density, average density, the density of a fluid, of an object and of water | `density` | One hue; the average $\bar\rho$ and $\bar\rho_{\text{obj}}$ are dashed |
| Surface tension | `surface-tension` | One hue, on the slider, on Table 11.3's column when a figure reads from it, and in both of 11.8's results |
| Weight, buoyant force, the weight of the fluid displaced, the two piston forces, the restoring force of a liquid surface, normal force | `force` | One hue for all; forces are told apart by label, by where the arrow sits and by the body acted on, never by hue |
| Depth, average depth, capillary rise, the height of a manometer column | `position` | Bind where a scene measures a depth or a height |
| Area, volume, radius, wire length, mass, contact angle, specific gravity, the fraction submerged, pure ratios | Untyped | Ink, including their sliders and their appearance in the equations |

## What each page binds

| Page | Types bound |
|---|---|
| intro | none |
| 11.1 | none. The phases are told by packing and by motion, not by colour, which is exactly rule 7's sentence; the atoms are drawn from the element palette `F.el` so that no phase box holds anonymous grey dots |
| 11.2 | `density` |
| 11.3 | `pressure`, `force` |
| 11.4 | `pressure`, `density`, `position`, `force` |
| 11.5 | `pressure`, `force` |
| 11.6 | `pressure`, `density`, `position`, `force` (widened in the chapter pass: the aneroid gauge of Figure 11.13 draws the force the pressure makes on its bellows) |
| 11.7 | `force`, `density` |
| 11.8 | `surface-tension`, `pressure`, `force`, `density`, `position` |
| 11.9 | `pressure`, `position`, `force` |

A page binds fewer types than this only, never more, and the plan lists what
it binds.

## Families of rule 7 the chapter uses

- **Type hues from the scheme**, bound per page as the table above says.
  Where a page binds `pressure`, a field of little arrows drawn on the walls
  of a tire, on a swimmer's skin, on the sides of a tank or under the pistons
  of a hydraulic system takes the `pressure` hue, since a pressure is what
  each of them states, and the one arrow that is their effect on a chosen
  patch takes the `force` hue; that change of hue between the many small
  arrows and the one large one is the content of Figures 11.6, 11.7, 11.8
  and 11.11 and is deliberate. 11.7 binds `force` and `density` only, as the
  table says, and its Figure 11.18 draws the two pushes on the cylinder's
  faces and their difference as the book draws them, three forces in the
  `force` hue, with no arrow field on the body.
- **The element palette `F.el`** for the atoms and molecules of 11.1, the
  iron of the crystal, the oxygen and hydrogen of the water and the oxygen
  molecules of the gas, so that no phase box holds anonymous grey dots. No
  other page of the chapter names an atom, and the liquids of 11.6 and 11.8
  are told apart by their labels, not by the element palette.
- **A colour that is the physical fact** for the mercury of a manometer and
  a barometer, which is silver, for the pale blue a colourless liquid is
  drawn in, and for blood, which is red, bright leaving the heart and dark
  returning, in 11.9's circulatory diagram and standing person. The book
  prints them that way and so does the page, and those are the only hexes
  the chapter's figures carry (11.6 and 11.9); the mercury of 11.8's
  capillary tube is a grey tint of the page's ink.
- **The categorical palette `F.cat(i)`** for instances a figure must tell
  apart that carry no type and no element: the solids, liquids and gases of
  Table 11.1 on 11.2's density axis, and the three linings of an alveolus on
  11.8's Figure 11.29, never in a hue the page has bound. The bars of 11.9's
  Table 11.5 figure are pressures and take the pressure hue, told apart by
  their names.

A phase is told by packing and by motion, never by a tint on the fluid, and
no body in this chapter wears a type hue: a block floating in water is ink
with a labelled outline, and the density it has is stated in the readout and
carried on the slider. Colour-off drops the type hues and keeps the element,
physical and categorical colours; every figure of the chapter must still
read from its labels, its arrows and its caption with the type hues gone.
