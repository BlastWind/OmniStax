# Chapter 11 colour plan

Prepared 2026-09-14, restated 2026-10-04 under root `RULES.md` item 7. The
book's `COLOR.md` holds the categories; this file records what is particular
to the chapter. No figure hard-codes a hue.

## The types this chapter adds

| Type | Label | Dimension | Why it is its own type |
|---|---|---|---|
| `pressure` | pressure | N/m² | The chapter's quantity. Its dimension matches `stress`, which Chapter 5 declared, and item 7 forbids folding one into the other to save a colour: a stress is what a solid carries across an internal surface and has a direction relative to it, a pressure is a scalar a fluid exerts equally in every direction, and 11.3 spends a passage on the difference. Chapter 13 reuses it for the pressure of a gas |
| `density` | density | kg/m³ | The subject of 11.2 and a slider in six later figures. It is not a mass: the chapter's whole argument is that a ton of feathers and a ton of bricks differ in it while agreeing in mass |
| `surface-tension` | surface tension | N/m | Declared for 11.8. Its dimension matches `stiffness`, and a force constant relates a force to the displacement of one body while a surface tension relates a force to the length of the line it is spread along; they are not variants of each other |

## What each quantity takes

| Quantity | Type | Treatment |
|---|---|---|
| Pressure, average pressure, gauge, absolute and atmospheric pressure, the two hydraulic pressures, a change in pressure | `pressure` | One hue for all; variants differ by subscript, and the average $\bar P$ is dashed |
| Density, average density, the density of a fluid, of an object and of water | `density` | One hue; the average $\bar\rho$ and $\bar\rho_{\text{obj}}$ are dashed |
| Surface tension | `surface-tension` | One hue, on the slider, on Table 11.3's column when a figure reads from it, and in both of 11.8's results |
| Weight, buoyant force, the weight of the fluid displaced, the two piston forces, the restoring force of a liquid surface, normal force | `force` | One hue for all; forces are told apart by label, by where the arrow sits and by the body acted on |
| Depth, average depth, capillary rise, the height of a column, a radius, a diameter, the length of a dam or a wire | `position` | Where a scene measures it |
| Area of a piston, a patch of wall, a dam face or the back of the eye | `area` | The patch drawn and its label |
| Volume of a body, of the fluid displaced, of the part submerged | `volume` | In the maths and on the sliders that carry it |
| Mass of a pile, a reservoir, cargo or a coin | `mass` | In the maths, on the sliders and on a balance's reading |
| The contact angle, and the angle at which a dented surface pulls | `angle` | The arc and its slider |
| Specific gravity, the fraction submerged, pure ratios | ink | |

## Referents

Each figure names its own things and draws them in referent colours: the four
samples of 11.1; the two piles, the reservoir and its dam in 11.2; the skin,
fingertip, needle, tire and swimmer of 11.3; the container, dam and column of
air of 11.4; the two pistons of Figure 11.11 (which the work Sim of 11.5 draws
again), and the pedal, pedal cylinder and wheel cylinders of the brakes; the
bellows, spring and pointer, the manometer's tube, balloon and jar, and the
barometer and its dish in 11.6; the cylinder, ship and cargo, hydrometer,
floating block and coin of 11.7; the insect and needle, the sliding wire and
film, the two balloons, the three linings and the alveolus of Figure 11.29, the
drop, the capillary tube and the piston of 11.8; the standing person and heart,
the two sides of the heart, the eye and the mass on its pan, and the lungs and
the liquid at the chest wall in 11.9. The subscripts 1 and 2 of 11.5's $F$,
$A$ and $P$ wear the two pistons' colours, and those of 11.8's $P$ and $r$ the
two balloons'.

## The facts and conventions

- **The element palette `F.el`** for the atoms and molecules of 11.1, the
  iron of the crystal, the oxygen and hydrogen of the water and the oxygen
  molecules of the gas, so that no phase box holds anonymous grey dots.
- **A colour that is the physical fact**, through `F.fact`: the mercury of a
  manometer and a barometer, which is silver; the pale blue a colourless
  liquid is drawn in (11.2, 11.6); and blood, bright leaving the heart and
  dark returning, in 11.9's circulatory diagram and standing person. With the
  reader's Facts and conventions switch off these fall to a neutral tint. The
  mercury of 11.8's capillary tube is a grey tint of the page's ink.

A phase is told by packing and by motion, never by a tint on the fluid, and no
body in this chapter wears a category hue: a block floating in water wears its
referent colour as an outline, and the density it has is stated in the
readout and carried on the slider. Every figure still reads from its labels,
its arrows and its caption with all colour switched off.
