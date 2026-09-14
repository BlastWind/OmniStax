# Plan: 13.1 Temperature (m42214)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's standing instruction to finish the book in
waves; the per-section stop of rule 2, the plan review of rule 5 and the user
picks of rule 15 are replaced by this file, written before the section was
built and left for review after, as `ch13/config.md` records.

The chapter's opening section, and a qualitative one. It defines temperature
as what a thermometer measures, shows four thermometers built on four
different properties, lays the Fahrenheit, Celsius and Kelvin scales side by
side with the six conversions of Table 13.1, walks the range of temperatures
in the universe, finds absolute zero where the pressure of every gas
extrapolates to nothing, and ends on thermal equilibrium and the zeroth law.
Four photographs, four sketch figures (13.4, 13.7, 13.9, 13.10), one table,
two worked examples, three boxed notes, nine glossary terms, one Check Your
Understanding box, four conceptual questions and eight problems of which four
are keyed. One page (rule 11).

## Sub-concepts (page headers)

The book prints three headers of its own (Temperature Scales, Temperature
Ranges in the Universe, Thermal Equilibrium and the Zeroth Law of
Thermodynamics) and those are kept. The run of text before the first header
holds two ideas, and the run under the last header holds two, so the agent
adds one header at each place (rule 3; `ch13/config.md` asks that the added
headers be reported here).

1. `temperature-defined` **Temperature is what a thermometer measures**
   (agent's header; book: the opening paragraph on the two hands in tepid
   water, and the Misconception Alert on the wooden and metal benches). The
   variable $\kTemp$ anchors here.
2. `thermometers` **Thermometers** (agent's header; book: the paragraph
   "Any physical property that depends on temperature…", Figures 13.3 to
   13.6).
3. `temperature-scales` **Temperature Scales** (book's header; the three
   scales, Figure 13.7, Table 13.1, the paragraph on the Fahrenheit-to-Kelvin
   conversions, Example 13.1 Room Temperature and Example 13.2 the Reaumur
   Scale). The variables $\kTempC$, $\kTempF$, $\kTempK$ and all six
   equations anchor here.
4. `temperature-ranges` **Temperature Ranges in the Universe** (book's
   header; Figure 13.8, the paragraph on the lowest temperatures recorded,
   Figure 13.9, the Making Connections box on absolute zero, Figure 13.10).
   The variable $\kPr$ anchors here.
5. `thermal-equilibrium` **Thermal Equilibrium and the Zeroth Law of
   Thermodynamics** (book's header; its first paragraph, on thermometers
   taking their own temperature and two systems in thermal contact reaching
   the same one).
6. `zeroth-law` **The zeroth law of thermodynamics** (agent's header; book:
   the paragraph on systems A, B and C, the boxed statement of the law, and
   the closing paragraph on the two blocks and the plate). The Check Your
   Understanding box sits after it.

The publisher numbers the two examples 13.1 and 13.2 and the page follows
that. Cross references are plain text: "Conduction" and "Thermodynamics"
name later chapters without a link, and the app links Figure 13.4 to 13.10
and Table 13.1 by itself. Learning objectives, the section summary and the
nine glossary terms come out of the running text into the tables (rule 4).
Every degree the source writes as `º` inside `\text{}` is `°C` and `°F` in
prose and `^\circ\text{C}`, `^\circ\text{F}` in math.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| temperature | idea | temperature-defined | the two hands, the definition stated twice, the benches; cq1 |
| thermometer | idea | thermometers | Figures 13.3 to 13.6; cq2, cq3 |
| temperature-scales | idea | temperature-scales | Figure 13.7, the Reaumur example |
| convert-temperature-scales | skill, eq-celsius-to-fahrenheit | temperature-scales | Example 13.1, Table 13.1; every problem |
| absolute-zero | idea | temperature-ranges | the Making Connections box, Figure 13.10, Figure 13.9 |
| thermal-equilibrium | idea | thermal-equilibrium | the header's first paragraph; cyu1, cq1, cq4 |
| zeroth-law-of-thermodynamics | result | zeroth-law | the boxed law, the two blocks and the plate; cyu1 |

The section leans on `physical-quantity` and `unit-conversion` (1.2),
`pressure` (11.1) and `straight-line-graph` (2.8); the coverage rows mark each
as used where the text uses it.

## Figures

id · replaces or Sim · concepts · value add · moving or still · sliders ·
headline · graph · 3D

1. `fig-alcohol-thermometer` · Figure 13.3, photograph · keep: the text
   points at it ("the common alcohol thermometer") and it is the thermometer
   the section builds its definition on. The CNXML gives it no width, so
   `widths` stays empty. The same image is the introduction's Figure 13.2
   and is already in `media/ch13/`.
2. `sim-bimetallic-strip` · replaces Figure 13.4 (a) and (b), the strip at
   $T_0$ and at $T > T_0$ · thermometer, temperature · value add: variation
   by slider, with intuition. The book draws two states; the reader drags
   the temperature and sees the strip straight at $T_0$, bending further the
   further the temperature rises, and bending the other way when it is
   cooled below $T_0$, which the still cannot show. The bend is exaggerated
   on the drawing and the readout says so (rule 28.4) · **still**: a strip
   held at one temperature has no time in it; it answers its slider and
   registers no cycle (rule 14) · $\kTemp$ (−40 °C to 200 °C, default 20 °C,
   which is $T_0$, temperature, with soft detents at $T_0$ and at the book's
   heated state 120 °C) · "At 120 °C the metal on the left has grown more
   than the metal on the right, and the strip curves to the right." · none ·
   2D. The two metals are two instances with no type and are told apart by
   `F.cat(0)` and `F.cat(1)`, named in a legend and by hover; the
   temperature hue is on the slider and the readout symbol only, never a
   tint on the strip (`ch13/COLOR.md`). Readout: $\kTemp - T_0$ with the
   live numbers, and a small line on which metal is longer by how much
   (in parts per thousand) and on the exaggeration drawn. Draws
   temperature.
3. `fig-plastic-thermometer` · Figure 13.5, photograph · keep: the text
   points at it ("color, as shown in Figure 13.5"). Width 250.
4. `fig-pyrometer` · Figure 13.6, photograph · keep: the text points at it
   ("infrared radiation, as shown in Figure 13.6"). Width 175.
5. `sim-three-scales` · replaces Figure 13.7, the three scales laid side by
   side · temperature-scales, convert-temperature-scales · value add:
   variation by slider. The book marks four temperatures on three fixed
   scales; here the reader sets any temperature and reads it off all three
   at once, with the three conversions of Table 13.1 written live, and sees
   the same interval measured as 9 Fahrenheit degrees, 5 Celsius degrees
   and 5 kelvins · **still**: a temperature has no clock (rule 14) ·
   $\kTempC$ (−273.15 °C to 130 °C, default 25 °C, room temperature, so the
   figure reproduces Example 13.1 on load; temperature; soft detents at
   absolute zero, the freezing point, body temperature and the boiling
   point) · "Room temperature, 25 °C, is 77 °F and 298.15 K." · none: the
   three scales are the picture · 2D. The scales run linearly from absolute
   zero to 130 °C with no break, since at 1400 units wide the freezing and
   boiling points are still 275 units apart. Readout: the two conversions of
   Example 13.1 with the live numbers, and a small line on the relative
   sizes of the degrees. Draws temperature.
6. `fig-thermograph` · Figure 13.8, photograph · keep: the text points at it
   ("see Figure 13.8"). The file carries a space in the bundle and is copied
   as `Picture_3-08a5.jpg`. Width 268.
7. `sim-temperature-ladder` · replaces Figure 13.9, the logarithmic ladder
   of temperatures · temperature-scales, absolute-zero · value add:
   intuition. The book says each increment is a factor of ten and draws
   the ladder; here the ladder is drawn as the book draws it and beside it
   stands a linear scale whose top the reader sets, so that with the top at
   the collider's $10^{12}$ K every other landmark is crushed into the
   bottom of the linear scale, and with the top at $10^{3}$ K the same
   landmarks spread out and the coldest ones vanish, which is why the book
   had to draw a logarithmic scale at all. The readout writes the chosen
   temperature on the three scales · **still**: it answers its slider
   (rule 14) · the power of ten of $\kTemp$ (−10 to 12, default 12, so the
   linear scale opens at the top of the book's ladder; temperature; soft
   detents at each landmark of the ladder) · "With the top of the linear
   scale at 10¹² K, the surface of the Sun sits six billionths of the way
   up it." · none: the two scales are the picture · 2D. Labels: the
   ladder's seventeen landmarks are the book's own and are shown on the
   ladder, whose entries never move; on the linear scale, where they
   collide, only the ones that stand clear of one another are named, and
   hover names the rest. Readout: $\kTemp = 10^{n}\ \text{K}$ with its
   Celsius and Fahrenheit values. Draws temperature.
8. `sim-gas-extrapolation` · replaces Figure 13.10, pressure against
   temperature for four gases · absolute-zero, temperature-scales · value
   add: variation by slider. The book draws four straight lines and their
   dashed extrapolations; here the reader cools the gases and watches all
   four pressures fall towards one point, and changes the amount of one gas
   and sees its slope change while its zero stays at −273.15 °C · **still**:
   the graph answers its sliders and nothing in it has a clock (rule 14;
   `ch13/config.md` decides the same for 13.10) · $\kTempC$ (−273.15 °C to
   150 °C, default 20 °C, temperature, detents at absolute zero, freezing
   and boiling) and the pressure of gas 1 at 0 °C (0.20 to 1.20 atm, default
   1.00, pressure); gases 2, 3 and 4 are held at 0.75, 0.50 and 0.30 atm ·
   "At 20 °C the four gases read 1.07, 0.80, 0.54 and 0.32 atm, and every
   line reaches zero at −273.15 °C." · the graph alone, axes fixed at
   −300 °C to 150 °C and 0 to 2.0 atm, a value past the top pinned · 2D.
   The four gases are instances with no type and wear `F.cat(0)` to
   `F.cat(3)`, named at the right end of each line as the book names them;
   the temperature axis wears the temperature hue and the pressure axis the
   pressure hue. Readout: $\kPr = P_{0}\left(1 + \kTempC/273.15^\circ\text{C}\right)$
   for gas 1 with the live numbers, where $P_0$ is written in plain LaTeX
   for the pressure at 0 °C, and a small line on the common zero. Draws
   temperature, pressure.
9. `sim-thermal-equilibrium` · Sim (it replaces no figure of the book) ·
   thermal-equilibrium, zeroth-law-of-thermodynamics · value add: flow by
   animation. The book describes a cold block and a hot block set on a
   plate at room temperature and says that eventually all three are in
   thermal equilibrium; here the reader sets the two blocks' temperatures
   and watches the three temperatures run together on a graph while a
   thermometer on each block reads the same number at the end · **moving**:
   heat flows from the hotter body to the cooler one until the temperatures
   are the same, and that "until" is a time; the figure registers a cycle
   and gets the transport (rule 14) · the cold block's starting temperature
   (−20 °C to 60 °C, default 0 °C, temperature), the hot block's (0 °C to
   120 °C, default 80 °C, temperature), and the plate's starting
   temperature (0 °C to 40 °C, default 20 °C, temperature); the plate is
   twice the heat capacity of either block, so the common temperature is
   the weighted mean · "After 40 s the blocks read 27.3 °C and 33.1 °C and
   the plate 29.6 °C; heat is still flowing." · the graph of the three
   temperatures against time beside the scene, since the scene is short and
   wide, the graph below it · 2D. The three bodies are told apart by their
   labels and by `F.cat(0)` to `F.cat(2)` on the curves and the thermometer
   marks; no body is tinted for its temperature. Readout: the common
   temperature the three approach, with the live readings, and a small line
   saying that once the two blocks are each in equilibrium with the plate
   they are in equilibrium with each other, which is the zeroth law. Draws
   temperature, time.

Photographs: four kept (13.3, 13.5, 13.6, 13.8), each because the text
points the reader at it; none dropped.

Figures that serve exercises: none in this section.

Extra simulations (rule 15), thought through, judged and decided:

- **The two blocks and the plate (`sim-thermal-equilibrium`): built.** The
  section's last idea is stated in words only, and the exercise set asks
  what it means for two systems to be in thermal equilibrium and what the
  final temperature of boiling water in a cup at room temperature will be;
  the approach to a common temperature is a view no still figure of the
  section gives.
- A thermometer whose column dips before it rises, the third conceptual
  question. Left: it would answer the question the reader is being asked,
  and the effect belongs to 13.2's thermal expansion.
- A Reaumur scale added as a fourth line to `sim-three-scales`. Left: the
  example builds the scale in two lines and the figure already shows how a
  scale is made from two fixed points.

## Exercises

- The Check Your Understanding box (eip-959, `cyu1`) is keyed and set inline
  after `zeroth-law`, the passage it tests; Understand.
- 4 conceptual questions, none keyed, each an open item with an AI-marked
  suggested approach: `cq1` (fs-id1802189, what thermal equilibrium means,
  Understand, citing `thermal-equilibrium`), `cq2` (fs-id1795880, a property
  that varies with temperature, Understand, citing `thermometers`), `cq3`
  (fs-id1466328, the alcohol column that dips before it rises, Analyze,
  citing `thermometers`), `cq4` (fs-id1823709, boiling water in a cup at
  room temperature, Analyze, citing `zeroth-law`).
- 4 problems keyed and kept: `p1` (fs-id1394420, a 39.0 °C fever, keyed
  102 °F), `p3` (fs-id1566976, 68.0 °F and 78.0 °F, keyed 20.0 °C and 25.6 °C
  as two parts), `p5` (fs-id1448440, the surface of the Sun, keyed 9890 °F),
  `p7` (fs-id1426187, a 40.0 °F drop, keyed 22.2 °C for part (a) with the
  book's own derivation for part (b) in the solution).
- 4 problems left out, having no answer in the book's key: frost damage at
  28.0 °F in kelvins (fs-id1940370), the tungsten filament at 2900 K
  (fs-id1818837), Death Valley's 134 °F (fs-id1348930), and the temperatures
  at which two scales read the same number (fs-id1801272). Named in `notes`
  and `exercise_notes`.
- No AP items in this section; nothing taken from another section and
  nothing held back.
- No generated questions: every node has a book exercise that tests it
  except `absolute-zero`, which the chapter's later sections test through
  the ideal gas law; noted, no question generated.
- Weights: `cq1` tests `thermal-equilibrium` in full and `temperature` at
  2; `cq3` gives `thermometer` the full value and `temperature` 2; `cq4`
  gives `thermal-equilibrium` the full value and
  `zeroth-law-of-thermodynamics` 3; `cyu1` gives
  `zeroth-law-of-thermodynamics` the full value and `thermal-equilibrium` 3;
  every problem tests `convert-temperature-scales` in full and
  `temperature-scales` at 2.

## Views

- Formulas: the six equations of the section already in `chapter.json`,
  the four of the summary important and the two Fahrenheit–Kelvin
  combinations not.
- Definitions: the five variables of the section, and nine glossary terms.
- Concept map: the seven nodes above with their edges into 1.2, 2.8 and 11.1.

## Colour

The page binds temperature, pressure and time. Temperature is on the
slider of every figure, on the symbol in every readout and on the
temperature axis of `sim-gas-extrapolation` and `sim-thermal-equilibrium`;
pressure is on the pressure axis and slider of `sim-gas-extrapolation`;
time is on the time axis of `sim-thermal-equilibrium`, the one figure with
a clock. Nothing on the page is tinted for its temperature: the metals of
the strip, the gases and the three bodies are instances and wear the
categorical palette. $T_0$ of the strip and $P_0$ of the gas are written in
plain LaTeX in the readouts and in ink.

## Wanted at chapter level

- variables `T_temp` → 13.1-temperature-defined
- variables `T_C` → 13.1-temperature-scales
- variables `T_F` → 13.1-temperature-scales
- variables `T_K` → 13.1-temperature-scales
- variables `P_press` → 13.1-temperature-ranges
- equations `eq-celsius-to-fahrenheit` → 13.1-temperature-scales
- equations `eq-fahrenheit-to-celsius` → 13.1-temperature-scales
- equations `eq-celsius-to-kelvin` → 13.1-temperature-scales
- equations `eq-kelvin-to-celsius` → 13.1-temperature-scales
- equations `eq-fahrenheit-to-kelvin` → 13.1-temperature-scales
- equations `eq-kelvin-to-fahrenheit` → 13.1-temperature-scales

Applied in the chapter pass (2026-09-14): every anchor above is written on its
row, five variables and six equations. Nothing else was wanted and nothing
else was changed.
