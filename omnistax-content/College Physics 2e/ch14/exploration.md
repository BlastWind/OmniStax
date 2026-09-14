# Exploration: College Physics 2e, Chapter 14 Heat and Heat Transfer Methods

Written in the chapter's prep pass (2026-09-14), after reading every module
of the chapter in full. The source of record is the CNXML bundle
(`source/osbooks-college-physics-bundle`), not the PDF. The book's
organisation (book → chapters → sections → untitled narrative headers, one
CNXML module per section, the apparatus inside the module) is as recorded in
`ch02/exploration.md`; nothing differs here.

## Why this chapter

Chapter 13 says what temperature is. This chapter says what heat is, which is
not the same thing, and the whole chapter turns on keeping the two apart:
heat is energy in transit, it exists only while a temperature difference
drives it, and a body has an internal energy but no heat content. The first
half asks what heat does when it arrives. It raises a temperature, by
$Q = mc\Delta T$, and the specific heat $c$ is why a lake stays cool through
a hot afternoon and why a cup of water cools a hot pan so little. Or it
changes a phase, by $Q = mL$, at no change of temperature at all, and the
latent heats are why ice keeps a soda cold, why sweat cools the skin, why
humid air rarely climbs past 35 °C and why an orchard is sprayed with water
before a frost. The second half asks how heat travels, and finds only three
ways. Conduction carries it through matter that stands still, at a rate set
by a conductivity, an area, a thickness and a temperature difference, which
is the physics of a Styrofoam box, a saucepan, a walrus and a house wall.
Convection carries it in matter that moves, in a furnace, a pot, a wind and
a thunderhead, and is the first mechanism that can carry heat from a cold
place to a warm one when a phase change rides along. Radiation carries it
through nothing at all, at a rate that goes as the fourth power of the
absolute temperature, which is why a campfire warms your face, why skin is
black in the infrared, and why the Earth is 40 °C warmer than it would be
with no atmosphere. The chapter closes on Eunice Newton Foote, whose flask of
carbon dioxide in the sun was the first measurement of that effect, and on
Mária Telkes's solar house.

## Chapter 14 modules

Figures counted include the figures that sit inside exercises. CYU = Check
Your Understanding, AP = AP test prep items, CQ = conceptual questions,
Sol = problems with an inline solution. The equation column counts the
`{eq:…}` markers the converter writes, most of which are the numbered
substitution steps of a worked example rather than results.

| Section | Module | Ex. | Fig. | Tables | Eq. | Defs | CYU | AP | CQ | Prob. | Sol. |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m42221 | 0 | 1 drawing | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 14.1 Heat | m42223 | 0 | 2 diagrams | 0 | 1 | 3 | 1 | 2 (1 keyed) | 3 | 0 | 0 |
| 14.2 Temperature Change and Heat Capacity | m42224 | 3 | 3 (1 diagram, 2 photos, one of them with a problem) | 1 | 18 | 1 | 1 | 0 | 2 | 10 | 5 |
| 14.3 Phase Change and Latent Heat | m42225 | 1 | 6 (2 diagrams, 4 photos) | 1 | 10 | 3 | 1 | 0 | 11 | 19 | 10 |
| 14.4 Heat Transfer Methods | m42226 | 0 | 2 (1 diagram, 1 diagram in a CQ) | 0 | 0 | 3 | 1 | 0 | 3 | 0 | 0 |
| 14.5 Conduction | m42228 | 2 | 6 (2 diagrams, 2 photos, 1 photo in a CQ, 1 photo in a problem) | 1 | 12 | 3 | 1 | 4 (2 keyed) | 2 | 15 | 8 |
| 14.6 Convection | m42229 | 2 | 7 (3 diagrams, 3 photos, 1 photo in a problem) | 1 | 6 | 0 | 1 | 2 (1 keyed) | 2 | 10 | 5 |
| 14.7 Radiation | m42230 | 1 | 8 (3 diagrams, 5 photos, one of them with a problem, one a panel of a diagram) | 0 | 7 | 5 | 1 | 2 (1 keyed) | 5 | 27 | 13 |

Every section has one Check Your Understanding box, so the inline place of
rule 12 holds one item on every page. Four modules carry a table, each of
which the converter wrote as a `> TABLE` block that has to be rebuilt as a
`div.book-table`: 14.2's specific heats (Table 14.1, irregular, with headers
for solids, liquids and gases inside the body, three footnotes and a gases
row whose two columns read $c_\text{v}$ with $c_\text{p}$ in parentheses),
14.3's heats of fusion and vaporization (Table 14.2, two-tier header, a
footnote on the table and one on water's heat of vaporization at body
temperature, which the converter also emitted as a stray second row for water
at 37 °C that is the footnote's own line in the CNXML), 14.5's thermal
conductivities (Table 14.3, plain, one footnote) and 14.6's wind-chill
factors (Table 14.4, a grid of temperature against wind speed, no footnote).
No module carries a PhET note. Seven boxed notes are the book's own words
and are kept: 14.2's Heat Transfer and Temperature Change and its Take-Home
Experiment on land and water, 14.3's Real-World Application on orchards,
14.6's Take-Home Experiment on convection rolls, 14.7's Take-Home Experiment
on temperature in the Sun, its Career Connection and its Problem-Solving
Strategies for the Methods of Heat Transfer. 14.3 prints a seven-step
Problem-Solving Strategies for the Effects of Heat Transfer as a numbered
header of its own, kept as the book's list.

## Figure numbers

Every figure of the narrative is numbered in order, and so is every figure
that sits inside a conceptual question or a problem. The bundle's file names
say 15 rather than 14, because the module numbers are from an earlier
edition; the numbers below are the ones this edition prints.

| Section | Numbers |
|---|---|
| Intro | 14.1 Eunice Newton Foote among her instruments (a drawing) |
| 14.1 | 14.2 the soft drink and the ice cube, apart and in contact, 14.3 Joule's apparatus |
| 14.2 | 14.4 the three pairs of cylinders (a), (b), (c), 14.5 the truck with smoking brakes, 14.6 the spent-fuel pool (with the reactor problem) |
| 14.3 | 14.7 the melting icicle, 14.8 the molecules of a solid, a liquid and a gas (a), (b), 14.9 the graph of temperature against heat added, 14.10 condensation on a glass of iced tea, 14.11 ice on the orchard trees (inside the Real-World Application), 14.12 dry ice and window frost (a), (b) |
| 14.4 | 14.13 the fireplace with its three arrows, 14.14 the thermos bottle (in a CQ) |
| 14.5 | 14.15 wall insulation, 14.16 molecules colliding at a contact surface, 14.17 the slab of conductivity $k$, 14.18 fiberglass batts, 14.19 the jellabiya (in a CQ), 14.20 the walrus (in a problem) |
| 14.6 | 14.21 the gravity furnace and its convective loop, 14.22 the pot on the stove, 14.23 convection cells in fur, 14.24 the cumulus cloud, 14.25 the thunderhead over a city, 14.26 the icebergs, 14.27 the Kilauea lava flow (in a problem) |
| 14.7 | 14.28 the campfire, 14.29 the spectra of an ideal radiator at three temperatures (a) and a gas flame (b), 14.30 ice on light and dark pavement, 14.31 the black and silver blocks, 14.32 a thermograph of a building, 14.33 the greenhouse effect, 14.34 the solar cooker, 14.35 a thermograph of a patient (in a problem) |

Tables: Table 14.1 Specific Heats of Various Substances in 14.2; Table 14.2
Heats of Fusion and Vaporization in 14.3; Table 14.3 Thermal Conductivities
of Common Substances in 14.5; Table 14.4 Wind-Chill Factors in 14.6.

## What is new, and the types the chapter asks for

- **Heat is an energy, and takes the energy hue.** $Q$ is the chapter's
  first quantity and every section writes it. It is measured in joules, it is
  what work is equivalent to in 14.1, and the summary of 14.1 says it
  outright: heat and work are the two ways energy is transferred. So it is
  the book's `energy` type, not a type of its own. The book already holds
  `Q` as Chapter 12's **flow rate** with the macro `\kQ`, so heat is staged
  as a second row, `Q_heat`, LaTeX `Q`, type `energy`, macro `\kQh`, the way
  the book already carries `T`/`T_force` and `P`/`P_press`. Its variants
  `Q_hot`, `Q_cold` (14.2's calorimetry) and `Q_net` (14.7's net radiation)
  are rows of the same type.
- **The rate of heat transfer is a power.** Every one of 14.5's, 14.6's and
  14.7's laws is stated for $Q/t$ in watts, and the book writes it as that
  fraction, never as $P$. A drawn heat current, a gauge or a bar that states
  the rate, and the number in watts a readout prints are `power`; the
  fraction itself is written with $Q$ in the energy hue over $t$ in the time
  hue. No new symbol row is needed for it, and the book's `P` (power, `\kP`)
  is not written anywhere in this chapter.
- **Temperature is Chapter 13's type.** $T$, $\Delta T$, $T_1$, $T_2$ and
  the rest are staged by the Chapter 13 prep pass in the same job, and this
  chapter uses `temperature` and those rows by name, never restaging them.
  Two collisions every section agent must know: the book already holds `T`
  as **time** (a period, `\kT`) and `T_1`, `T_2` as **forces** (two
  tensions, `\kTone`, `\kTtwo`), so a temperature is never written with
  those keys or macros. The keys Chapter 13 landed are listed in `config.md`
  under Symbols (`T_temp`, `ΔT`, `T_1temp`, `T_2temp`, `T_ftemp`), together
  with the four temperature rows this chapter stages for its own subscripts
  ($T_\text{i}$, $T'$, $T_\text{hot}$, $T_\text{cold}$).
- **No new type.** This is the chapter's one real decision and the case is
  this. The material constants the chapter introduces are the specific heat
  $c$ (J/(kg·°C)), the latent heats $L_\text{f}$, $L_\text{v}$ and
  $L_\text{s}$ (J/kg), the thermal conductivity $k$ (W/(m·°C)), the
  emissivity $e$ (dimensionless) and the Stefan-Boltzmann constant $\sigma$.
  Each is a property of a labelled material, chosen from a table, and none is
  a quantity a figure of this chapter draws: what a figure draws when the
  reader picks copper instead of water is the heat $Q$ that the same
  temperature change now costs, and what it draws when the reader picks
  Styrofoam instead of glass is the heat current $Q/t$ that now crawls
  instead of pours. Those are an energy and a power, both typed already. The
  book's own colour rule says a material is told by its label, not by a tint
  on the body, and the material's constant follows its label into ink. The
  scheme is also already crowded: Chapters 11 and 12 report pressure,
  density, energy and position in near-identical magentas at twenty-two
  types, Chapter 13 makes twenty-three, and three more hues for three
  constants that are each bound on one or two pages would be hues the reader
  learns and never sees again, which is the ground Chapter 12 gave for
  keeping the diffusion constant in ink. Chapter 12's viscosity is the
  precedent on the other side, and the difference is that viscosity is what
  three of that chapter's figures vary and what the Reynolds number is
  computed from, a quantity in its own right; the specific heat, the latent
  heat and the conductivity are coefficients that make an equation come out
  in the right units. So $c$, $L$, $k$, $e$ and $\sigma$ are untyped rows in
  ink, with the mass $m$, the area $A$, the thickness $d$ and the $R$ factor.
  A section agent who finds a figure that plots one of these constants
  itself should say so in `plan.md` under `## Wanted at chapter level`.
  None did.

## Errata

The book's own slips, kept as printed on the page that carries each and
named in that section's `notes`, as `config.md` decides:

- 14.2, Example 14.1, step 4: the heat transferred to the aluminum pan is
  written "27.0 × 10⁴ J = 27.0 kJ"; the product is 2.70 × 10⁴ J, and the
  27.0 kJ that follows is right.
- 14.3, Figure 14.9: the axis of heat added is labeled kJ/kg but its
  numbers (0.5, 1, 3) are thousands of kJ/kg. The figure that replaces it
  prints kJ/kg with the numbers to match, 334 for the melting and 2256 for
  the boiling of a kilogram of water.
- 14.5, Example 14.6, step 3: "given that 1 g of water melts in one second",
  where the water evaporates; the 2256 J/s that follows is the heat of
  vaporization of the gram, as step 2 computes it.
- 14.6, the paragraph on the body: "The circulatory system is used the body
  to transport thermal energy", with a word dropped.
- 14.5, the first two AP items: "the experiment that you devised" in
  Example 14.1 refers to an item of the AP edition that this edition does
  not print; both items are kept as printed and the notes say so.

## Wanted at chapter level

Nothing. Chapter 13's rows landed while this pass was staging its own, so
every edge this chapter wants into Chapter 13 was placed on an id that stood
in `book.json` when `ch14/book-rows.json` was merged: `temperature`,
`thermal-equilibrium` and `thermal-energy` under `heat` and
`heat-vs-temperature`; `kinetic-theory` and `thermal-energy` under
`conduction-by-molecular-collisions`; `temperature-scales` and
`absolute-zero` under `stefan-boltzmann-law`; `evaporative-cooling`,
`relative-humidity` and `vapor-pressure` under `evaporation-below-boiling`;
`dew-point` under `condensation-and-freezing-release-heat`; `boiling` under
`heat-of-vaporization`; `volume-thermal-expansion` under
`natural-convection`; and 13.5's `sublimation` under 14.3's
`heat-of-sublimation`, which is named so because Chapter 13 already owns the
id `sublimation` for the phase diagram's solid-to-vapor transition and this
chapter's concept is the energy of that transition. A section agent that
finds it needs an id this pass did not stage should add it to its own
`plan.md` under this heading.

## BE INSPIRING (rule 23)

Heat cannot be seen, and every drawing in the book stands in for it with a
wavy arrow. That is exactly the gap OmniStax can close: heat is a flow, a
flow has a rate, and a rate is something a reader can watch.

- **Two bodies coming to equilibrium is the whole of 14.1, and it moves.**
  A soft drink and an ice cube, each with a temperature bar, set apart and
  then in contact, with heat drawn crossing between them and both bars
  sliding toward one value: the reader sees that heat is the transit and
  temperature the state, that the transfer stops when the bars meet, and
  that nothing called heat is left inside either body afterward. Joule's
  apparatus is the same lesson from the other side, weights falling, paddles
  turning, the thermometer creeping up, with a readout writing that the work
  done equals the heat that would have done the same.
- **Specific heat is felt as a bar that grows.** One cylinder, a slider on
  its mass and one on the temperature change, a choice of substance from
  Table 14.1, and a bar of heat that doubles with the mass, doubles with the
  temperature change and jumps by 10.8 when copper becomes water. Beside it
  the calorimetry scene, a hot pan and cold water, two temperature bars and
  a slider on each mass, meeting at a final temperature the readout
  computes, and the reader sees why the answer lands so near the water's
  side.
- **The heating curve should be walked, not read.** Ice at −20 °C and a
  slider on the heat added: the temperature marker climbs a slope, stops
  dead at 0 °C while a bar of ice turns to water, climbs again, stops at
  100 °C for a plateau nearly seven times as long while water turns to steam,
  and climbs once more. The plateaus are the latent heats, and their lengths
  are the argument that the energy of a phase change is enormous. Beside the
  graph the book's own molecules, packed, loose and flying, tell the same
  story by packing, not colour.
- **Conduction is a current, and the fourth factor is the shock of 14.5.**
  A slab between a hot face and a cold face, sliders on the temperature
  difference, the area and the thickness, and a choice of material from
  Table 14.3 spanning five orders of magnitude: the heat current through
  the slab is drawn at its rate and the readout states it in watts. Choosing
  Styrofoam after silver, and watching 420 become 0.010, is the lesson of
  every insulator in the section, and the R factor follows from it.
- **Convection has a clock in it and earns its transport.** A room with a
  gravity furnace, or a pot on a stove, with the fluid drawn as tracers that
  warm, expand, rise, cool at the ceiling and sink: the loop forms itself
  and the reader watches heat carried by the moving matter rather than passed
  between still molecules. Fur is the same scene shrunk until the loops
  cannot form, which is why fur is warm.
- **Radiation's fourth power is a pair of bars.** A body and its
  surroundings, each with a temperature slider, an emissivity slider, and two
  bars of radiated power, emitted and absorbed, whose difference is the net
  rate: the reader sees that a 20 °C rise in a room-temperature body raises
  its emission by 30 percent, that 1100 K against 275 K is 256 to 1, and that
  the net rate is zero exactly when the temperatures match. The spectrum of
  14.29 beside it, redrawn with a temperature slider, shifts its peak from
  the infrared into the visible and shows why a stove element glows red and
  a furnace white, with the visible band drawn in the colour that is the
  fact.
- **The greenhouse figure is the chapter's story about the world.** Sunlight
  in, infrared out, and a slider on how much of the infrared the atmosphere
  returns: the surface temperature reads out, and the reader sees the 40 °C
  that the atmosphere is worth, which is what Foote measured in a flask.

## Left for a later pass

- **A materials sheet.** The chapter prints four tables of material
  constants, specific heats, latent heats, thermal conductivities and wind
  chill, and Chapter 13 prints coefficients of expansion; together they are
  the sheet the book's rules foresee for constants. Each stays in its
  section's text as a `div.book-table` for now, since no chapter of the book
  has a sheet yet.
- **Chapter 15 returns to heat.** The first law of thermodynamics writes
  $\Delta U = Q - W$ with this chapter's `Q_heat`; the Chapter 15 prep pass
  in the same job uses the row by name and stages nothing for heat.
