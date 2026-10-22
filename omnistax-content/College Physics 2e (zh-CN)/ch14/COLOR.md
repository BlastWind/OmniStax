# Chapter 14 colour plan

Prepared 2026-09-14 and restated 2026-10-04 under root `RULES.md` item 7. It
refines the book's `COLOR.md` and invents no hue: the chapter uses the book's
declared categories and declares none of its own. Every category is coloured
on every page, in prose where a phrase names a particular one, in maths
through its symbol's variables row, and in every figure that draws it.

## Categories

| Quantity | Category | Notes |
|---|---|---|
| Heat $Q$ and its variants $Q_\text{hot}$, $Q_\text{cold}$, $Q_\text{net}$, $Q_\text{ice}$, $Q_\text{soda}$; work $W$; kinetic and potential energy | `energy` | Heat is energy in transit and wears the hue work wore in Chapter 7; the variants are told apart by their subscripts, never by another hue |
| The rate of heat transfer $Q/t$, in watts | `power` | The fraction itself is written with $Q$ in the energy hue over $t$ in the time hue, as Chapter 7 wrote $P = W/t$ |
| Temperature $T$ with every subscript, and every change $\Delta T$ | `temperature` | A bar beside a body, a thermometer's column, the heating curve and every $T$ of a readout |
| Elapsed time $t$, a turnover time | `time` | |
| Mass $m$, $M$ and the masses of the pan, the water, the ice and the soda | `mass` | |
| Area $A$ | `area` | |
| Thickness $d$ of a slab, the size of an air pocket | `position` | |
| Volume $V$ | `volume` | |
| Density $\rho$ | `density` | |
| Wind speed $v$ | `velocity` | |
| Specific heat $c$, $c_\text{p}$, $c_\text{v}$ and the specific heats of aluminum and water | `specific-heat` | |
| Latent heats $L_\text{f}$, $L_\text{v}$, $L_\text{s}$, $L$ | `latent-heat` | |
| Thermal conductivity $k$ | `thermal-conductivity` | |
| The $R$ factor, emissivity $e$, the Stefan-Boltzmann constant $\sigma$, the fraction $f$ the atmosphere returns, sunlight in W/m², a mass evaporated per minute, every percentage and ratio | ink | A rating, a constant, or a quantity no category holds |

Heat in an amount and heat at a rate are two categories, and a page colours
both where it shows both: 14.1 to 14.3 are about amounts, 14.5 to 14.7 about
rates, and 14.5's ice box multiplies a rate by a day with each side in its own
hue.

Changing the material changes colours honestly. When the reader picks water in
place of copper on 14.4, the bar of heat grows 10.8 times in the energy hue and
the readout writes $Q = mc\Delta T$ with each symbol in its category; on 14.17
the conductivity $k$ the material sets wears its own hue beside the slowed
heat current.

A body never wears a category hue. A phase and a temperature are told by
packing, bars and labels, so the water of the pot on 14.21 + 14.22 is tinted in
ink, not in the density hue.

## Facts and conventions

The molecules of 14.8 are drawn with `F.el()` for the substance the reader
picks. Through `F.fact`: the flames of the fireplace on 14.13 and of the
gravity furnace (orange) and the gas burner (blue) on 14.21 + 14.22, the
visible band and the glow swatch of 14.29, the block's black-to-silver fill on
14.31, and the Sun's disc on 14.33.

## Referents

Each section lists its referents in `referents`; the figure draws each with
`F.ref` and the text marks every reference, pronouns included.

- 14.1: the soft drink and the ice cube; Joule's weights, paddles, water and thermometer. The two temperature curves of Figure 14.2 wear the drink's and the ice's colours, and $T_1$, $T_2$ and $m_\text{w}$ split their subscripts to the drink, the ice and the water.
- 14.2: the copper cylinder and the reader's cylinder of 14.4; the pan and the water of Example 14.3, whose $m_\text{Al}$, $c_\text{Al}$, $m_\text{W}$, $c_\text{W}$ split to them.
- 14.3: the sample on the heating curve; the ice, the soda and the foam cup of Example 14.4, whose $m_\text{ice}$, $m_\text{soda}$, $Q_\text{ice}$, $Q_\text{soda}$ split to them.
- 14.4: the fire, the chimney, the window and the couch of 14.13; the eight parts of the thermos bottle of 14.14.
- 14.5: the hot and cold bodies of 14.16, whose $T_\text{hot}$ and $T_\text{cold}$ split to them; the slab of 14.17.
- 14.6: the house, the furnace, the pot and the burner; the house of Example 14.7; the person and the two thermometers in the wind; the warm side, the layer and the cold side of 14.23; the person in the shade and the cup.
- 14.7: the block of 14.31; the person and the walls of Example 14.9; the Sun, the Earth and the atmosphere of 14.33.

The three faint curves of 14.29 at 3000 K, 4000 K and 6000 K are instances the
text names only by their temperatures, and are told apart with `F.cat(i)`.

Turning colour off must leave labels, bar heights, arrow directions and
packing sufficient to understand every figure.
