# Plan: 14.7 Radiation (m42230)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's standing instruction to finish the book in
waves without check-ins; the per-section stop of rule 2, the plan review of
rule 5 and the user picks of rule 15 are replaced by this file, written
before the section was built and left for review after, as `ch14/config.md`
records.

The third and last method of heat transfer, and the one that needs no
matter at all. The section opens on the fire and the Sun, whose heat reaches
you across empty space, says that what a hot body sends out is
electromagnetic waves whose colour tells its temperature, and then makes the
two claims everything else rests on: a good absorber is a good emitter, and
the rate goes as the fourth power of the absolute temperature. The
Stefan-Boltzmann law is stated with the emissivity, the net rate of exchange
with the surroundings follows, an unclothed person in a dark room is worked
as Example 14.9, and the Earth's own balance with the Sun and the dark sky
gives the greenhouse effect, with Foote's flasks and Telkes's solar house.
The module closes the chapter with the Problem-Solving Strategies for the
Methods of Heat Transfer and the chapter's set of Integrated Concepts and
Unreasonable Results items. Three diagrams (14.29 (a), 14.31, 14.33), five
photographs (14.28, 14.29 (b), 14.30, 14.32, 14.34) and one in a problem
(14.35), one worked example, three boxed notes, five glossary terms, one
Check Your Understanding box, two AP items, five conceptual questions and
27 problems of which 13 are keyed and two go to earlier pages. One page
(rule 11).

## Sub-concepts (page headers)

The module prints no header of its own, so all seven are the agent's
(rule 3).

1. `radiation-across-space` **Heat that crosses empty space** (book: the
   opening paragraph on the fire, the Sun and the oven; Figure 14.28, the
   campfire; the paragraph on wavelength, colour and the stove element; the
   sentence pointing to Electromagnetic Waves and Introduction to Quantum
   Physics; Figure 14.29). `radiation-spectrum-and-temperature` is
   introduced here.
2. `absorbers-emitters` **Black absorbs, and black radiates** (book: the
   paragraph on black, white and gray objects and the asphalt by day and by
   night; Figure 14.30, the ice on two pavements; the paragraph on gray and
   coloured objects and the skin's absorption of infrared; Figure 14.31).
   `absorbers-and-emitters` is introduced here.
3. `stefan-boltzmann` **The Stefan-Boltzmann law of radiation** (book: the
   paragraph that states the law, the constant $\sigma$, the area $A$, the
   absolute temperature and the emissivity with its values for a black
   body, a perfect reflector, tungsten and carbon black). `eq-stefan-boltzmann`,
   `stefan-boltzmann-law` and `emissivity` are introduced here.
4. `fourth-power` **A remarkably strong dependence on temperature** (book:
   the paragraph on the fourth power and on the surface area of a fire's
   coals; Figure 14.32, the building thermograph; the paragraph on the skin's
   emissivity of 0.97, night scopes and thermographs). `radiation-fourth-power`
   is introduced here, and the Check Your Understanding box is hosted at the
   end of the block.
5. `net-rate` **The net rate of heat transfer by radiation** (book: the
   paragraph on absorption minus emission and the net equation; the
   paragraph on the emissivity of the object alone and the sign; the
   Take-Home Experiment; Example 14.9, the person in a dark room).
   `eq-net-radiation` and `net-radiation-rate` are introduced here.
6. `greenhouse` **The Earth's energy balance and the greenhouse effect**
   (book: the paragraph on the Sun, the Earth's emissivity, clouds and the
   greenhouse effect; the paragraph on Foote's experiment; Figure 14.33; the
   paragraph on global warming; the paragraph on Telkes and the zero-energy
   house; Figure 14.34, the solar cooker; the paragraph on dark space and
   frost on clear nights). `greenhouse-effect` is introduced here.
7. `heat-transfer-strategy` **Solving problems across the three methods**
   (book: the Career Connection note; the boxed Problem-Solving Strategies
   for the Methods of Heat Transfer). `heat-transfer-methods-strategy` is
   introduced here.

The book gives its one example no number in the CNXML; the publisher prints
it as Example 14.9, the chapter's tenth, and the page follows that. Cross
references are plain text (`ch14/config.md`): the sentence pointing at
Electromagnetic Waves and Introduction to Quantum Physics keeps the chapter
titles with no link, "Figure 14.32" in the thermograph paragraph is written
out, and the strategies' references to the conductivity table of Conduction
and the latent-heat table of Phase Change and Latent Heat are written as
"Table 14.3" and "Table 14.2". Learning objectives, the section summary and
the five glossary terms come out of the running text into the tables and
the views (rule 4). The converter's `º` is `°` in prose and `^\circ` in
math throughout.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| radiation-spectrum-and-temperature | idea | radiation-across-space | the fire and the Sun; Figure 14.29's three spectra; the campfire caption |
| absorbers-and-emitters | idea | absorbers-emitters | the asphalt by day and by night; Figures 14.30 and 14.31; the dark tent and the white tunic |
| emissivity | idea | stefan-boltzmann | the definition beside the law; tungsten, carbon black, skin, the Earth |
| stefan-boltzmann-law | result, eq-stefan-boltzmann | stefan-boltzmann | the displayed law; the coals knocked apart; the AP item on 275 K and 1100 K |
| radiation-fourth-power | result | fourth-power | the Check Your Understanding box; the thermograph problem; the AP item |
| net-radiation-rate | result, eq-net-radiation | net-rate | the displayed equation; Example 14.9; the roof, the lava, the skier, the tent |
| greenhouse-effect | idea | greenhouse | the Earth's balance; Foote's flasks; Figure 14.33; cloudy nights and the Earth without an atmosphere |
| heat-transfer-methods-strategy | skill | heat-transfer-strategy | the boxed strategies; the Integrated Concepts and Unreasonable Results items |

The section leans on `radiation-heat-transfer` (14.4), `frequency` (16.2),
`temperature-scales` and `absolute-zero` (13.1), `power` (7.7),
`rate-of-conductive-heat-transfer` (14.5), `convection-heat-rate` (14.6),
`phase-change-calorimetry`, `heat-of-fusion` and `heat-of-vaporization`
(14.3), `heat-and-temperature-change` (14.2) and `energy-problem-solving`
(7.6); the coverage rows mark each as used where the text uses it.

## Figures

id · replaces or Sim · concepts · value add · moving or still · sliders ·
headline · graph · 3D

1. `fig-campfire` · Figure 14.28, the campfire · radiation-spectrum-and-temperature
   · a kept photograph (rule 14): the opening paragraph is about feeling a
   fire's heat, and the caption says where that heat travels, so it shows the
   thing the passage is about · still · no sliders · width 350.
2. `sim-spectrum` · replaces Figure 14.29 (a) and (b), the spectra of an
   ideal radiator at three temperatures and the gas flame beside them ·
   radiation-spectrum-and-temperature, stefan-boltzmann-law · **value add:
   variation by slider.** The book draws three temperatures; the reader
   drags one and watches the whole curve rise and its peak slide out of the
   infrared into the visible, which is the sentence "the spectrum shifts
   toward the visible" made visible · **still**: a spectrum is the state of
   a body at one temperature and has no clock in it, so the figure answers
   its slider and registers no cycle (rule 14; `ch14/config.md` makes the
   same decision) · $\kTemp$ (3000 to 6000 K, default 6000, temperature,
   with soft detents at the book's 3000, 4000 and 6000 K) · "At 6000 K an
   ideal radiator sends out 73.5 MW from each square meter, and its
   spectrum peaks at 483 nm, inside the visible band." · the graph is the
   idea, so it stands alone: intensity against wavelength on axes fixed at
   0 to 3000 nm and at the peak the 6000 K slider maximum reaches, the live
   curve in ink, the book's three curves faint in `F.cat(0..2)` as
   references so that the book's picture is three states of the slider, the
   visible band 380 to 700 nm shaded from violet to red as the colour that
   is the physical fact, and beside the graph a swatch of the glow at the
   set temperature, the black-body colour computed from the temperature,
   also the fact (red hot at 3000 K, white hot at 6000 K, as the book's
   labels say) · 2D. Readout: $\kQh/\kt = \sigma e A \kTemp^4$ with $e = 1$
   and $A = 1.00\ \text{m}^2$ and the live numbers; small line naming the
   peak wavelength and the share of the radiation that falls in the visible
   band. Draws temperature, energy and time. Labels: the frame, the three
   reference curves' temperatures at their peaks and the live curve's, six
   at most, on by default.
3. `fig-pavement-ice` · Figure 14.30, ice on light and dark pavement ·
   absorbers-and-emitters · a kept photograph: the passage is the claim that
   black absorbs better than gray, and the photograph is its evidence ·
   still · no sliders · width 230.
4. `sim-blocks` · replaces Figure 14.31, the black and silver blocks ·
   absorbers-and-emitters, emissivity · **value add: variation by slider.**
   The book draws two blocks twice; the figure draws one block absorbing
   and the same block radiating, and one slider on its emissivity sets the
   widths of all four beams together, so the reader sees that the number
   that decides how much is absorbed is the number that decides how much is
   emitted, which is the claim of the passage · **still**: the beams are
   steady rates, and drawing them moving would be the dummy loop rule 14
   forbids · $e$ (0 to 1, default 1, ink, soft detents at 0, the perfect
   reflector, 0.5, tungsten, 0.97, skin, and 1, the black body) · "A black
   block with an emissivity of 1 absorbs all the radiation that falls on it
   and emits all that a black body at its temperature can." · none: the two
   blocks side by side under the headings the book prints, Absorb and
   Radiate, each from a locked view (rule 28.2) matching the book's
   perspective · 2D. The block's fill runs from near-black at $e = 1$ to a
   light silver at $e = 0$, a colour that is the physical fact (the book's
   own labels are "Black" and "Silver coated") and the only hex the figure
   writes; the beams are rates of heat transfer by radiation and wear the
   power hue, their widths in proportion to their shares. Readout:
   absorbed $= e \times$ incident, reflected $= (1 - e) \times$ incident,
   and emitted $= e \times$ what a black body at the same temperature emits,
   with the live fractions. Draws power. Labels on all four beams, on by
   default.
5. `fig-building-thermograph` · Figure 14.32, the thermograph of a building
   · radiation-fourth-power · a kept photograph: the text points at it
   ("detect heat leaks in homes, Figure 14.32") · still · width 350.
6. `sim-fourth-power` · Sim (it replaces no figure of the book) ·
   stefan-boltzmann-law, radiation-fourth-power, emissivity · **value add:
   variation by slider, and the shape of the law.** The book states that
   the rate goes as the fourth power and says it is remarkably strong; the
   figure draws the curve and puts two temperatures on it, so the reader
   sees the curve hug zero and then soar, and reads the ratio of the two
   rates · **still**: the law relates a rate to a temperature and has no
   clock · $\kTempone$ (100 to 1500 K, default 275, temperature),
   $\kTemptwo$ (100 to 1500 K, default 1100, temperature), $e$ (0 to 1,
   default 1, ink); the area is held at 1.00 m² and the caption says so.
   The defaults are the AP item's two black-body radiators, whose rates
   differ by 256; the Check Your Understanding box's 293 K and 313 K are two
   slider positions · "At 1100 K a black body radiates 256 times what it
   does at 275 K, because (1100/275)⁴ = 256." · the graph is the idea:
   $Q/t$ against $T$ on axes fixed at 0 to 1500 K and 0 to 300 kW (the
   rate of 1.00 m² of black body at the slider maximum is 287 kW), the two
   temperatures as points on the curve with drop lines and the rate
   written beside each · 2D. Readout: $\kQh/\kt = \sigma e A \kTemp^4$ at
   each temperature and the ratio $(\kTemptwo/\kTempone)^4$; small line
   giving both temperatures in degrees Celsius, since every temperature of
   the section's problems is given that way and must be converted. Draws
   temperature, power (the rate written beside each point and on the
   axis), energy and time. Two point labels, on.
7. `sim-radiation-balance` · Sim (it replaces no figure of the book) ·
   net-radiation-rate, stefan-boltzmann-law, emissivity · **value add:
   variation by slider.** Example 14.9 gives one number; the figure draws
   the person in the room with the radiation leaving and arriving, and two
   bars of power, emitted and absorbed, whose difference is the net rate,
   so the reader sees the net rate vanish when the two temperatures match
   and reverse when the room is the hotter · **still**: a steady exchange
   has no clock, and a wavy arrow drawn moving to look alive is the dummy
   loop rule 14 forbids · $\kTempone$, the body (−50 to 120 °C, default
   33.0, temperature), $\kTemptwo$, the surroundings (−50 to 120 °C,
   default 22.0, temperature), $e$ (0 to 1, default 0.97, ink), $A$ (0.10
   to 2.00 m², default 1.50, ink) · "A person at 33.0 °C in a room at
   22.0 °C loses 99 W by radiation." · the scene is horizontal, a room with
   the person in it, so the two bars sit below it on one fixed scale, 0 to
   3 kW from the slider maxima (an emissivity of 1, 2.00 m² and 120 °C
   give 2.71 kW) · 2D. Readout: $\kQnet/\kt = \sigma e A(\kTemptwo^4 -
   \kTempone^4)$ with the live numbers in kelvin; small line giving the
   emitted and absorbed rates and the direction of the net transfer. Draws
   power, temperature, energy and time. Labels: the two bars and the two
   arrows, on.
8. `sim-greenhouse` · replaces Figure 14.33, the greenhouse effect ·
   greenhouse-effect, net-radiation-rate · **value add: variation by
   slider.** The book's drawing shows the rays; the figure lets the reader
   set how much of the Earth's infrared the atmosphere sends back and how
   much sunlight the surface absorbs after the clouds have reflected their
   share, and the surface temperature reads out, so the reader sees the
   40 °C the book says the atmosphere is worth, and the negative feedback
   of the clouds · **still**: the balance is a steady state, and the rays
   are steady flows · $S$, the sunlight absorbed by each square meter of
   surface, averaged over the globe and over day and night (150 to
   350 W/m², default 240, ink, a scene quantity), and $f$, the fraction of
   the surface's infrared the atmosphere returns (0 to 0.70, default 0.44,
   ink). At the defaults the surface stands at 295 K, which is 22 °C, and
   at $f = 0$ the same sunlight holds it at 255 K, which is −18 °C, 40 °C
   lower, the book's number · "With the atmosphere returning 44% of the
   Earth's infrared, the surface settles at 22 °C, which is 40 °C warmer
   than it would be with no atmosphere." · none: the Earth's curved
   surface under its atmosphere with the Sun at the upper left, sunlight
   arriving, infrared leaving the surface and splitting at the atmosphere
   into a share returned and a share lost to space, each beam's width in
   proportion to its flow · 2D. The Sun's disc is drawn in the yellow that
   is the fact; every beam is a rate of heat transfer by radiation and
   wears the power hue, the infrared told from the sunlight by its label
   and its wavy stroke. The surface is taken as an ideal radiator in the
   infrared, and the caption says so. Readout: the balance
   $\sigma\kTemp^4 = S + f\,\sigma\kTemp^4$ solved for $\kTemp$ with the
   live numbers; small line giving the temperature with no atmosphere and
   the difference. Draws power and temperature. Labels on the four beams
   and the surface temperature, on.
9. `fig-solar-cooker` · Figure 14.34, the solar cooker · greenhouse-effect ·
   a kept photograph: the Telkes paragraph is about solar cookers and homes
   and the caption names her, so it shows the thing the passage is about ·
   still · width 350.

Photographs: five kept as listed (14.28, 14.30, 14.32, 14.34 as `photo`
rows, 14.29 (b) as the second panel of the spectrum figure's one original,
since the CNXML gives (a) and (b) as one image), none dropped. Figure 14.35,
the artist's thermograph of a patient, sits inside the thermography problem
and travels on that item's card (`ch14/config.md`); the CNXML gives it no
width. Figure 14.31 carries only a height in the CNXML, so its row's
`widths` stays empty and its `<figure>` carries no `data-original-width`.

Extra simulations (rule 15), thought through, judged and decided:

- **The fourth-power curve (`sim-fourth-power`): built**, as above, since
  the section's one worked example is a net rate and nothing in the book
  draws the law itself.
- **The radiation balance (`sim-radiation-balance`): built**, as above,
  since it is the figure `ch14/config.md` and `exploration.md` ask for and
  every keyed problem of the section is a case of it.
- The asphalt and the sidewalk through a day and a night. Left: it is
  `sim-blocks` with a clock, and the passage's claim is about absorption
  and emission, which the blocks already show.
- A thermograph whose colours the reader maps to temperatures. Left: two
  photographs already show thermographs, and a false-colour map would put a
  temperature tint on a body, which the chapter's colour plan forbids.
- Foote's flasks in the sun. Left: the paragraph is history, and the
  greenhouse figure already carries the physics she measured.

Figure pass (2026-09-15, Claude Fable 5.1). Every figure was screenshot at its default and slider extremes in both themes and looked at. `sim-radiation-balance`: the stick figure is a filled silhouette standing on the floor, and the label of its skin temperature, which collided with the walls' label above the head, sits under the floor line beneath its feet. `sim-spectrum`, `sim-blocks`, `sim-fourth-power` and `sim-greenhouse` were found clean and are unchanged.

## Exercises

- The Check Your Understanding box (fs-id3153791, a body at 20 °C compared
  with 40 °C, Understand) is set inline after `fourth-power`, whose passage
  it tests, with its host `div.exercises` at the end of that block; it is
  keyed in words ("about 30 percent") and is set as an open item with the
  book's solution.
- 2 AP items: `ap1` (fs-id1484614, two black-body radiators at 275 K and
  1100 K) is keyed with (d) and is a graded choice, Apply; `ap2`
  (fs-id2278122, the car parked in the sun) has no key and is an open item
  with an AI-marked approach, Analyze.
- 5 conceptual questions, none keyed, each an open item with an AI-marked
  approach: `cq1` (fs-id953571, the dark circus tent, Understand), `cq2`
  (fs-id3491348, the cooled sensors that observe dark space, Analyze),
  `cq3` (fs-id1332236, cloudy nights, Understand), `cq4` (fs-id1405666,
  shielded thermometers, Analyze), `cq5` (fs-id1187288, the Earth without
  an atmosphere, Analyze).
- 11 problems keyed and kept, numbered by the book's order so that the
  gaps name what is left out: `p1` (fs-id1411839, the black roof, −21.7 kW),
  `p3` (fs-id1237994, fresh lava, −266 kW), `p5` (fs-id2581360, the skier in
  white, −36.0 W), `p7` (fs-id1378944, thermography, 1.31% and 20.5%, with
  Figure 14.35 on its card), `p9` (fs-id1940871, the cooling lava, −15.0 kW
  and 4.2 cm), `p11` (fs-id1920945, the circus tent, 48.5 °C for (a) with
  the book's (b) in the solution); and of the Integrated Concepts items
  `ic2` (fs-id3176909, the meteor in the ocean, 3 × 10¹⁷ J and 10¹³ kg),
  `ic4` (fs-id3353126, the cooling towers, 3.44 × 10⁵ m³/s), `ic6`
  (fs-id2400920, the shivering person, 20.9 min), `ic8` (fs-id3012447, the
  lungs, 3.96 × 10⁻² g, 96.2 J and 16.0 W) and `ic10` (fs-id1945562, hot air
  rising, 1.102, 2.79 × 10⁴ J and 12.6 J).
- 14 items left out, having no answer in the book's key: the fireplace
  embers (fs-id1323270), the car radiator (fs-id1234214), the sauna
  (fs-id3596067), the Sun's surface temperature and the solar constant
  (fs-id1102779), the effective temperature of the sky (fs-id2969111), the
  Integrated Concepts items on condensation from humid air (fs-id2392831),
  the frozen waste from an airplane (fs-id1942766), the Stairmaster
  (fs-id3415324), the hot granite (fs-id2677957) and Niagara Falls
  (fs-id2074669), the Unreasonable Results items on the Arctic inventor
  (fs-id742357) and the radiating meteorite (fs-id1447650), and the two
  Construct Your Own Problem items (fs-id1421900, fs-id742311). All are
  named in `notes` and `exercise_notes`.
- 2 items moved to earlier pages, as `ch14/config.md` decides: the person
  who consumes 2500 kcal (fs-id2604660) to 14.2 and the 1.46 kW window
  (fs-id2663242) to 14.5, each with `source_section: "14.7"`; this page's
  `exercise_notes` says so.
- Nothing is taken from another section.
- No generated questions: every node of the section has a book exercise
  that tests it, the strategy node through the Integrated Concepts items.
- Weights: `p7` gives `radiation-fourth-power` its full value and
  `stefan-boltzmann-law` 3; `p9` gives `net-radiation-rate` its full value
  and `rate-of-conductive-heat-transfer` 3; `p11` gives `net-radiation-rate`
  its full value and `absorbers-and-emitters` 2; `ic2` gives
  `heat-transfer-methods-strategy` its full value with `kinetic-energy` 2
  and `heat-and-temperature-change` 3; `ic4` the strategy in full with
  `convection-heat-rate` 3; `ic6` the strategy in full with
  `heat-and-temperature-change` 3 and `power` 2; `ic8` the strategy in full
  with `relative-humidity` 2 and `heat-of-vaporization` 3; `ic10` the
  strategy in full with `buoyant-force` 2 and `heat-and-temperature-change`
  2; `ap1` gives `stefan-boltzmann-law` its full value and
  `radiation-fourth-power` 3; `cq2` gives `net-radiation-rate` its full value
  and `radiation-fourth-power` 2; `cq3` and `cq5` give `greenhouse-effect`
  the full value and `net-radiation-rate` 2.

## Views

- Formulas: the two equations of the section already in `chapter.json`,
  both important (`eq-stefan-boltzmann`, `eq-net-radiation`).
- Definitions: the nine variables of the section, and five glossary terms:
  emissivity, greenhouse effect, net rate of heat transfer by radiation,
  radiation, Stefan-Boltzmann law of radiation.
- Concept map: the eight nodes above with their edges into 7.6, 7.7, 13.1,
  14.2 to 14.6 and 16.2.

## Colour

The page binds temperature, power, energy and time. Temperature wears the
hue on every temperature slider, on the point labels of the fourth-power
curve, on the surface temperature of the greenhouse figure and on every
$\kTemp$, $\kTempone$ and $\kTemptwo$ of a readout. Power is the hue of
every drawn rate of heat transfer by radiation: the beams of the blocks, the
wavy arrows and the two bars of the balance, and the beams of sunlight and
infrared in the greenhouse figure. Energy and time are bound only through
the readouts, which write the rate as the book writes it, $\kQh/\kt$ and
$\kQnet/\kt$, so that the reader sees a power made of an energy and a time,
as `ch14/COLOR.md` asks; `ch14/COLOR.md`'s summary line names power and
temperature alone for this page, and the two extra hues come from its own
rule about the fraction. The emissivity $e$, the constant $\sigma$, the area
$A$, the sunlight $S$ and the fraction $f$ are untyped and in ink, with the
sliders that set them. Three colours are the physical fact and are named
here as the only hexes the page writes: the visible band of the spectrum
from violet to red and the swatch of the glow at the set temperature; the
fill of the block from black to silver; and the Sun's yellow disc. The three
reference spectra are `F.cat(0..2)`, instances of the untyped intensity. No
body wears a temperature tint.

## Wanted at chapter level

- variables `Q_heat` (14.7) → 14.7-stefan-boltzmann
- variables `Q_net` (14.7) → 14.7-net-rate
- variables `t` (14.7) → 14.7-stefan-boltzmann
- variables `σ_SB` (14.7) → 14.7-stefan-boltzmann
- variables `e_emis` (14.7) → 14.7-stefan-boltzmann
- variables `A` (14.7) → 14.7-stefan-boltzmann
- variables `T_temp` (14.7) → 14.7-stefan-boltzmann
- variables `T_1temp` (14.7) → 14.7-net-rate
- variables `T_2temp` (14.7) → 14.7-net-rate
- equations `eq-stefan-boltzmann` → 14.7-stefan-boltzmann
- equations `eq-net-radiation` → 14.7-net-rate
- The chapter's `config.md` says the page binds power and temperature; the
  page also binds energy and time through its readouts' $\kQh/\kt$, per the
  chapter `COLOR.md`'s own rule for the fraction. Nothing is wanted unless
  the chapter pass would rather have the readouts write the rate another way.

Applied by the chapter pass (2026-09-14): the eleven anchors are set as
listed. The readouts keep $\kQh/\kt$, and `ch14/config.md` and
`ch14/COLOR.md` now say the page binds energy and time through them. The
publisher numbers the section's worked example 14.9, the chapter's ninth, not
14.10; the page, its figure caption and readout, this plan and the concept
row that names it say 14.9 now. The caption of Figure 14.29 and the glow
label no longer speak of the book, and the caption of Figure 14.33 no longer
of the text; Figure 14.29 has one original with two panels, as the Photographs
paragraph above says, and `config.md` records it.
