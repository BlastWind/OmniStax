# Plan: 13.2 Thermal Expansion of Solids and Liquids (m42215)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's standing instruction to finish the book in
waves; the per-section stop of rule 2, the plan review of rule 5 and the user
picks of rule 15 are replaced by this file, written before the section was
built and left for review after, as `ch13/config.md` records.

The section that follows temperature with its first consequence. Everything
grows a little as it warms, by a fraction that depends on the material and
on the temperature change; the fraction is stated for a length, doubled for
an area and tripled for a volume; water breaks the rule near 4 °C; a liquid
that grows faster than its container spills; and a body that is not allowed
to grow pushes instead, with a pressure the bulk modulus sets. Three boxed
results, one Making Connections note, three worked examples (numbered 13.3,
13.4 and 13.5 at the publisher, since 13.1 prints two), one table (Table
13.2), two sketch figures (13.12, 13.13), three photographs (13.11, 13.14,
13.15), one Check Your Understanding with the chapter's one numbered exercise
figure (13.16), four glossary terms, five conceptual questions, thirteen
problems of which seven are keyed, and one keyed problem from 13.6. One page
(rule 11).

## Sub-concepts (page headers)

The module prints two headers of its own, kept as written; the other four
are the agent's (rule 3), each named from the boxed title of the passage it
heads.

1. `thermal-expansion` **Thermal expansion** (agent's: the opening run has no
   header; book: Figure 13.11; the paragraph on the thermometer, rising air
   and expansion joints; the paragraph on the two basic properties; the
   paragraph on the underlying cause).
2. `linear-expansion` **Linear thermal expansion** (agent's, from the boxed
   title Linear Thermal Expansion—Thermal Expansion in One Dimension; book:
   the boxed result; the paragraph on Table 13.2 and the units of α; Table
   13.2; Example 13.3, the Golden Gate Bridge). The variables $\kdL$, $L$,
   $\kdTemp$ and $\alpha$ and `eq-linear-expansion` anchor here.
3. `two-and-three-dimensions` **Thermal Expansion in Two and Three
   Dimensions** (book's header; the paragraph on holes; the boxed
   two-dimensional result; Figure 13.12; the boxed three-dimensional result).
   $\Delta A$, $A$, $\Delta V$, $V$ and $\beta$ and `eq-area-expansion`,
   `eq-volume-expansion` and `eq-beta-three-alpha` anchor here. The Check
   Your Understanding is set inline after this span.
4. `water` **Water is densest at 4 °C** (agent's; book: the paragraph on
   water's exception and the freezing of a pond; Figure 13.13).
5. `filling-the-tank` **Filling the tank** (agent's, from the note's title;
   book: the Making Connections note, its fuel-gauge photograph dropped;
   Example 13.4, Gas vs. Gas Tank). `eq-spill-volume` anchors here.
6. `thermal-stress` **Thermal Stress** (book's header; the defining
   paragraph; Example 13.5, Gas Pressure; the paragraph on rails, power
   lines, cookware, reactors, cells and the oceans; Figure 13.15; the
   paragraphs on implants and dental fillings). $\kPr$, $\kBb$, $V_0$ and
   $\kF$ and `eq-bulk-volume-change` and `eq-thermal-stress` anchor here.

Cross references to 13.4, to Chapter 5 and to Chapter 14 are plain text, as
every page of the book writes them; "Table 13.2", "Figure 13.12" and
"Example 13.4" on this page link by themselves. Every `º` of the source is
written `°C` in prose and `^\circ\text{C}` in math. Learning objectives, the
summary and the four glossary terms go to the tables and the views (rule 4).

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| thermal-expansion | idea | thermal-expansion | the opening paragraphs; the last conceptual question |
| linear-thermal-expansion | result, eq-linear-expansion | linear-expansion | the boxed result, Table 13.2, Example 13.3, the Washington Monument and mercury problems |
| area-thermal-expansion | result, eq-area-expansion | two-and-three-dimensions | the boxed result, panel (a) of 13.12, the Hong Kong problem |
| holes-expand-too | idea | two-and-three-dimensions | panel (b) of 13.12; the peg and the jar lid questions |
| volume-thermal-expansion | result, eq-volume-expansion | two-and-three-dimensions | the boxed result, panel (c), the β ≈ 3α problem, the 61.1 L problem |
| differential-thermal-expansion | skill, eq-spill-volume | filling-the-tank | Example 13.4; the beaker and coffee problems |
| anomalous-expansion-of-water | idea | water | Figure 13.13 and the pond paragraph |
| thermal-stress | result, eq-thermal-stress | thermal-stress | Example 13.5; the pothole; the Pyrex question |

The section leans on `temperature`, `temperature-scales` (13.1),
`kinetic-energy` (7.2), `density` (11.2), `buoyant-force`,
`archimedes-principle` and `average-density-decides-floating` (11.7),
`stress` and `bulk-deformation` (5.3) and `pressure` (11.3); the coverage
rows mark each where the text uses it.

## Figures

id · replaces or Sim · concepts · value add · moving or still · sliders ·
headline · graph · 3D

1. `fig-expansion-joint` · photograph, Figure 13.11 · thermal-expansion ·
   **keep**: the passage says that bridges have expansion joints to let them
   expand and contract, and the photograph shows one; width 200.
2. `sim-linear-expansion` · Sim (it replaces no figure of the book; the
   Golden Gate Bridge of Example 13.3 is worked in words) ·
   linear-thermal-expansion · **variation by slider and exaggeration** (root
   rule 28.4): a 1275 m span that grows 0.84 m is a change no drawing at
   scale can show, so the extension is drawn larger than life by a factor
   the reader sets, and the readout keeps the true number beside the factor
   drawn; the graph below shows the change growing in a straight line with
   the temperature change and the line's slope changing with the material ·
   **still**: a span at one temperature change is a picture, not a motion; the
   figure answers its sliders and registers no cycle · $\kdTemp$ (−60 to
   100 °C, default 55, temperature), $L$ (100 to 2000 m, default 1275, ink),
   the factor drawn (1 to 1000, default 400, ink, detents at 1, 100, 400 and
   1000) and the material as a dropdown of Table 13.2's thirteen solids,
   default iron or steel (rule 26.1: a material is a state, and thirteen
   would wrap a button row) · "A steel span 1275 m long warms by 55 °C and
   grows 0.84 m, drawn here 400 times larger than life." · graph below, ΔL
   against ΔT, axes fixed at −60 to 100 °C and −2 to 4 m from the slider
   maxima, a value past the edge pinned · 2D. Readout: $\kdL = \alpha L
   \kdTemp$ with the live numbers; small line on the factor drawn and on the
   extension at true scale. Draws temperature and position. Labels on: the
   two brackets and the hollow cold end are three, and none moves.
3. `sim-expanding-plate` · replaces Figure 13.12 (a), (b) and (c), the plate
   with a plug, the plate with a hole and the box · area-thermal-expansion,
   holes-expand-too, volume-thermal-expansion · **variation by slider and
   exaggeration**: the book draws one dashed outline for one unstated warming;
   here the reader sets the warming and the material and watches the plate,
   the plug, the hole and the box all grow by the same fraction, the hole
   included, with the fraction drawn larger than life by a factor the reader
   sets and the true percentages in the readout · **still**: the three panels
   are three views of one warmed body, not moments of a motion · $\kdTemp$ (0
   to 200 °C, default 100, temperature), the factor drawn (1 to 100, default
   50, ink) and the material as a dropdown of the thirteen solids, default
   aluminum · "Aluminum warmed by 100 °C grows 0.25% in every length, 0.50%
   in area and 0.75% in volume, drawn here 50 times larger than life." ·
   none · panel (c) is the box the book prints in perspective, drawn on a
   locked `view()`/`face()` from the book's own viewpoint with no orbit (root
   rule 28.2); the two plates are flat. Readout: $\Delta A = 2\alpha A
   \kdTemp$ and $\Delta V = \beta V \kdTemp \approx 3\alpha V \kdTemp$ as
   percentages; small line on the hole. Draws temperature. Labels on: one
   per panel plus the legend for the two outlines.
4. `sim-water-density` · replaces Figure 13.13, the density of freshwater
   against temperature · anomalous-expansion-of-water · **variation by
   slider**: the reader sets a temperature and reads the density and how far
   it lies below the maximum at 4 °C, which is the fact the caption's two
   percentages state and the pond paragraph turns on · **still**: a curve
   with a point on it · $\kTemp$ (0 to 12 °C, default 4, temperature, step
   0.1) · "At 4 °C water is at its densest, 0.99997 g/cm³, and water at any
   other temperature between 0 and 12 °C floats on it." · the graph is the
   scene (archetype 2), axes fixed at 0 to 12 °C and 0.99950 to 1.00000
   g/cm³ as the book prints them · 2D. Readout: $\krho$ at the chosen
   temperature and its shortfall from the maximum in percent; small line on
   which way water of that temperature moves in a pond of 4 °C water. Draws
   temperature and density. The pond turnover the paragraph describes is left
   to the prose: drawing it would be a cooling that runs on a clock, and the
   graph is what the book draws.
5. `sim-tank-spill` · Sim (it replaces no figure; Example 13.4 is worked in
   words and its photograph is the dropped fuel gauge) ·
   differential-thermal-expansion, volume-thermal-expansion · **variation by
   slider and exaggeration**: a full tank and its liquid warm together, the
   tank grows a little and the liquid more, and what spills is the difference,
   drawn larger than life by a factor the reader sets and stated true in the
   readout; changing the liquid or the tank's material shows why gasoline in
   steel spills a litre and the same warming in a Pyrex beaker of mercury
   spills far less · **still**: the two volumes after one warming are a
   picture, not a motion · $\kdTemp$ (0 to 40 °C, default 20.0, temperature),
   $V$ (10 to 100 L, default 60.0, ink), the factor drawn (1 to 50, default
   20, ink), the liquid as a dropdown of Table 13.2's six liquids (default
   gasoline, the table's petrol) and the tank's material as a dropdown of
   seven solids (steel, aluminum, brass, copper, glass, Pyrex, quartz; default
   iron or steel) · "60.0 L of gasoline in a steel tank warms by 20.0 °C, and
   1.10 L spills, because the gasoline grows 1.14 L while the tank grows only
   0.04 L." · a bar beside the tank for each of the three volumes, no graph ·
   2D. Readout: $V_{\text{spill}} = (\beta_{\text{gas}} - \beta_{\text{s}})V
   \kdTemp$ with the live numbers; small line on the factor drawn. Draws
   temperature. The liquid is ink hatching and the tank is an ink outline, told
   apart by fill, never by a tint.
6. `sim-thermal-stress` · Sim (it replaces no figure; Example 13.5 is worked
   in words) · thermal-stress · **variation by slider**: the same tank sealed
   so that the liquid cannot grow, with a gauge that reads the pressure the
   bulk modulus demands to squeeze the would-be spill back in; sliding the
   temperature change and the bulk modulus shows the pressure climb to
   numbers no tank can hold · **still**: the pressure at one temperature
   change is one reading · $\kdTemp$ (0 to 40 °C, default 20.0, temperature),
   $\kBb$ (0.5 to 3.0 × 10⁹ N/m², default 1.00, elastic-modulus) and the
   liquid as a dropdown of the six liquids, default gasoline, in a steel tank
   · "Gasoline sealed in a steel tank and warmed by 20.0 °C would press on it
   with 1.83 × 10⁷ Pa, about 2500 lb/in², which is 181 times the atmosphere."
   · a gauge, no graph · 2D. Readout: $\kPr = \frac{\Delta V}{V_0}\kBb$ with
   the live numbers; small line naming the would-be spill as the ΔV of the
   equation. Draws temperature, pressure and elastic-modulus. The volume $V_0$
   is not a slider, since the pressure does not depend on it and a slider
   with no visible consequence is removed (rule 24.6); the small line says so.
7. `fig-pothole` · photograph, Figure 13.15 · thermal-stress · **keep**: the
   paragraph on rails and roadways points at it, "See Figure 13.15"; width
   300.

Photographs: 13.11 kept, 13.15 kept, 13.14 (the fuel gauge inside the
Making Connections note) dropped as decoration the text never points at, as
`ch13/config.md` decided; named in `notes`.

Figures that serve exercises: the two blocks of the Check Your Understanding,
Figure 13.16, travel on the exercise card's `figure` field with the book's
alt text and no caption, since the book prints none; nothing is redrawn
(`ch13/config.md`).

Extra simulations (rule 15), thought through and decided:

- **The pond turning over.** Left: it is a cooling that runs on a clock, the
  prose tells it well, and `sim-water-density` gives the fact it rests on.
- **A bimetallic strip.** Left: the strip is 13.1's Figure 13.5, and this
  section only names it.
- **The peg and the hole of the third conceptual question.** Left:
  `sim-expanding-plate` already shows the hole growing with the plate, and a
  figure would answer the question the reader is being asked.

## Exercises

- The Check Your Understanding (`cyu1`, eip-264, the two blocks) is keyed and
  set inline after `two-and-three-dimensions`, whose three results it tests,
  with Figure 13.16 on its card; Apply.
- 5 conceptual questions, none keyed, each an open item with an AI-marked
  suggested approach: `cq1` (fs-id2182761, why Pyrex resists, Understand,
  citing `thermal-stress`), `cq2` (fs-id1806401, freezing cells and the
  prospect of preserving bodies, Evaluate, citing `thermal-stress`), `cq3`
  (fs-id1803094, the peg and the block, Analyze, citing
  `two-and-three-dimensions`), `cq4` (fs-id2233261, hot water on a jar lid,
  Analyze, citing `two-and-three-dimensions`), `cq5` (fs-id1332028, materials
  that shrink, Understand, citing `thermal-expansion`).
- 7 problems keyed and kept: `p1` (fs-id1469982, the Washington Monument,
  169.98 m), `p3` (fs-id1945010, the mercury column, 5.4 × 10⁻⁶ m), `p5`
  (fs-id1463358, the Hong Kong parcel, a decrease of about ＄17,000, the key
  read from the CNXML since the converter mangles it), `p7` (fs-id1251302, 60.0
  L of gasoline becoming 61.1 L, keyed with the book's derivation), `p9`
  (fs-id2192379, the beaker of ethyl alcohol, 9.35 mL and 7.56 mL), `p11`
  (fs-id1378164, the cooling coffee, 0.832 mm), `p13` (fs-id1565294, showing
  β ≈ 3α, an open item keyed with the book's derivation).
- 1 problem taken from 13.6 with `source_section: "13.6"`: `p14`
  (fs-id1543836, Integrated Concepts, the fraction of a copper block's weight
  the buoyant force supports at 0 °C and at 95.0 °C, keyed 1.02), as
  `ch13/config.md` places it; 13.6's `exercise_notes` say so as well.
- 7 problems left out, having no answer in the book's key: the Eiffel Tower
  (fs-id1806662), the railroad gap (fs-id2177180), the meter sticks of steel
  and invar (fs-id1803642), the column of ocean water (fs-id1961878), the
  copper radiator (fs-id1943516), the pressure that stops ice expanding
  (fs-id1457239), and 13.6's Unreasonable Results item on the aluminum rod
  (fs-id1669904), which would otherwise have come here; all named in
  `notes` and `exercise_notes`.
- No generated questions: every node has a book exercise that tests it.
- Weights: `cyu1` gives `volume-thermal-expansion` its full value,
  `area-thermal-expansion` 3 and `linear-thermal-expansion` 2; `cq1`, `cq3`
  and `cq4` give `linear-thermal-expansion` 2 beside their main concept;
  `cq2` gives `volume-thermal-expansion` 2 beside `thermal-stress`; `p3` gives
  `volume-thermal-expansion` 2, since mercury has only a volume coefficient
  in the table; `p9` and `p11` give `volume-thermal-expansion` 3 beside
  `differential-thermal-expansion`; `p14` gives `archimedes-principle` 3 and
  `density` 2 beside `volume-thermal-expansion`.

## Views

- Formulas: the seven equations of the section already in `chapter.json`,
  six important and the bulk-modulus step of Example 13.5 not.
- Definitions: the thirteen variables and four glossary terms.
- Concept map: the eight nodes above with their edges into 5.3, 7.2, 11.2,
  11.3, 11.7 and 13.1.

## Colour

The page binds temperature, position, density, pressure and elastic modulus.
Every figure carries $\kdTemp$ or $\kTemp$ on a slider and in its readout
(temperature); `sim-linear-expansion` draws the extension $\kdL$ (position,
Chapter 5's row); `sim-water-density` draws a density axis and reads $\krho$
(density); `sim-thermal-stress` draws a gauge (pressure) and carries $\kBb$
on a slider (elastic modulus). $L$, $A$, $V$, $V_0$, $\Delta A$, $\Delta V$,
$\alpha$, $\beta$, every factor drawn and every percentage are ink, as
`ch13/config.md` and `ch13/COLOR.md` decide. No body wears a tint for its
temperature: the warmed plate is the same ink as the cold one, told apart by
its dashed outline. Force is not bound: the page states $F/A$ in one line of
an example and no figure draws a force.

## Wanted at chapter level

- variables `ΔL` → 13.2-linear-expansion
- variables `L_len` → 13.2-linear-expansion
- variables `ΔT` → 13.2-linear-expansion
- variables `α_exp` → 13.2-linear-expansion
- variables `ΔA` → 13.2-two-and-three-dimensions
- variables `A` → 13.2-two-and-three-dimensions
- variables `ΔV` → 13.2-two-and-three-dimensions
- variables `V` → 13.2-two-and-three-dimensions
- variables `β` → 13.2-two-and-three-dimensions
- variables `P_press` → 13.2-thermal-stress
- variables `B_bulk` → 13.2-thermal-stress
- variables `V_0` → 13.2-thermal-stress
- variables `F` → 13.2-thermal-stress
- equations `eq-linear-expansion` → 13.2-linear-expansion
- equations `eq-area-expansion` → 13.2-two-and-three-dimensions
- equations `eq-volume-expansion` → 13.2-two-and-three-dimensions
- equations `eq-beta-three-alpha` → 13.2-two-and-three-dimensions
- equations `eq-spill-volume` → 13.2-filling-the-tank
- equations `eq-bulk-volume-change` → 13.2-thermal-stress
- equations `eq-thermal-stress` → 13.2-thermal-stress
- concepts `linear-thermal-expansion`: the evidence names "Example 13.2" for the Golden Gate Bridge; the publisher numbers it Example 13.3, since 13.1 prints two examples.
- concepts `differential-thermal-expansion`: the evidence names "Example 13.3" for the gasoline tank; the publisher numbers it Example 13.4.
- concepts `thermal-stress`: the evidence names "Example 13.4" for the pressure in the tank; the publisher numbers it Example 13.5.
- concepts `area-thermal-expansion`: the evidence says the steel tape "shrinks the parcel"; the tape expands on the warm day and reads the parcel smaller, which is what the key's decrease means, so "reads the parcel about ＄17,000 smaller" would say it.
- equations `eq-linear-expansion`, `eq-area-expansion`, `eq-volume-expansion`, `eq-spill-volume`, `eq-thermal-stress`: a `ktex` would let the formula sheet colour $\kdL$, $\kdTemp$, $\kPr$ and $\kBb$; none is written here since the rows are the chapter's.

Applied in the chapter pass (2026-09-14): every anchor above is written on its
row, thirteen variables and seven equations. The four concept evidence lines
are corrected in `book-rows.json` and merged: the Golden Gate Bridge is
Example 13.3, the gasoline tank Example 13.4, the pressure in the tank
Example 13.5, and the Hong Kong parcel's evidence now says the expanded tape
reads the parcel about ＄17,000 smaller. No `ktex` is written on the five
equations: no equation row of this chapter carries one, and a `ktex` on
13.2's rows alone would colour one section's formula sheet and not the
chapter's; whether the chapter's thirty-two rows get one is left for Fable,
since Chapters 2 to 16 carry it everywhere else. The `draws` row of
`sim-expanding-plate` is narrowed to `temperature`, which is what its code
names and what the plan line says; the row had also claimed `position`. The
caption of Figure 13.13 in the book overstates the density difference between
4 °C and 2 °C (0.0075% for about 0.003%), recorded in `exploration.md`.
