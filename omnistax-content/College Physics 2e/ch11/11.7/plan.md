# Plan: 11.7 Archimedes’ Principle (m42196)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's instruction to finish the book without
check-ins; the per-section stop of rule 2, the plan review of rule 5 and the
user picks of rule 15 are replaced by this file, written before the section
was built and left for review after, as `ch11/config.md` records.

The section that turns the pressure of 11.4 into a force on a body. It opens
on the warm bath and the helium balloon, draws the two unequal forces on the
top and the bottom of a submerged cylinder and names their difference the
buoyant force, replaces the body with the fluid it displaced to get
Archimedes' principle, and then spends the rest of the section on what the
principle is used for: whether a body floats, how deep it floats, the
hydrometer, and the two weighings that give a density. Seven book figures
(11.17 to 11.23, of which three are photographs and four are diagrams),
three worked examples, four boxed notes (Buoyant Force, Archimedes'
Principle, Specific Gravity and two Take-Home Investigations counted as the
book counts them), three glossary terms, four conceptual questions, eighteen
problems of which nine are keyed, no AP item of its own and one taken from
11.2. One page (rule 11).

## Sub-concepts (page headers)

The module prints three headers of its own (Floating and Sinking, Density
and Archimedes' Principle, More Density Measurements), kept as the book
writes them (`ch11/config.md`); the other three headers are the agent's
(rule 3).

1. `buoyant-force` **The buoyant force** (agent's header; book: the opening
   paragraph of questions; Figure 11.17; the paragraph that says pressure
   increases with depth and states the three cases; the boxed Buoyant Force
   note; Figure 11.18). `eq-buoyant-force-difference` anchors here; the
   variables $\kFB$ and $\kwfl$ anchor at `archimedes`.
2. `archimedes` **Archimedes' principle** (agent's header; book: "Just how
   great is this buoyant force?"; Figure 11.19, folded into the figure
   above; the paragraph that replaces the object with fluid and states the
   principle with its equation; the boxed Archimedes' Principle note; the
   swimsuit paragraph; the foil-ball Take-Home Investigation).
   `eq-archimedes` and the variables $\kFB$ and $\kwfl$ anchor here.
3. `floating-sinking` **Floating and Sinking** (book's header; the clay and
   the steel ship; Example 11.8, Calculating buoyant force: dependency on
   shape; the foil-boat Take-Home Investigation). The variable $V_{\text{w}}$
   anchors here.
4. `density-and-archimedes` **Density and Archimedes' Principle** (book's
   header; the paragraph that says average density decides floating; the
   derivation of the fraction submerged with its three equations; Figure
   11.20). The variables $\krhoobj$, $\krhofl$, $V_{\text{sub}}$,
   $V_{\text{obj}}$ and $V_{\text{fl}}$ and the equations
   `eq-fraction-submerged-volumes` and `eq-fraction-submerged` anchor here.
5. `specific-gravity` **Specific gravity and the hydrometer** (agent's
   header, splitting the book's Density and Archimedes' Principle passage
   where it turns from the fraction submerged to the ratio it measures;
   book: the paragraph that defines specific gravity with its equation; the
   boxed Specific Gravity note; Figure 11.21; Example 11.9, Calculating
   Average Density: Floating Woman; Figure 11.22; the paragraph of examples
   from oil on water to mountain ranges). `eq-specific-gravity` and the
   variables $\krhobar$ and $\krhow$ anchor here.
6. `density-measurements` **More Density Measurements** (book's header;
   Figure 11.23; the apparent weight paragraph with its two equations;
   Example 11.10, Calculating Density: Is the Coin Authentic?; the story of
   the crown). `eq-apparent-weight-loss` and `eq-apparent-mass-loss` anchor
   here.

The book gives its three examples no number in the CNXML; the publisher
prints them as Examples 11.8, 11.9 and 11.10, counting from 11.2's reservoir,
and the page follows that, as 11.2 and 11.3 did. The two references to
Table 11.1 in 11.2 are plain text, as `ch11/config.md` allows for a section
of this chapter; the section names no other chapter. Learning objectives,
the section summary and the three glossary terms come out of the running
text into the tables and the views (rule 4). The converter left a stray
`****` before the term "buoyant force", an empty emphasis in the CNXML,
which is dropped.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| buoyant-force | idea, eq-buoyant-force-difference | buoyant-force | the warm bath and the balloons; the cylinder of Figure 11.18; the boxed note; the proof problem |
| float-sink-suspend | result | buoyant-force | the three cases stated and restated; the anchor, the submarine and the balloons; the steel block and the steel boat |
| archimedes-principle | result, eq-archimedes | archimedes | the object replaced by fluid in Figure 11.19; the statement, the note and the glossary; Example 11.8 |
| average-density-decides-floating | result | density-and-archimedes | the clay and the steel ship; the paragraph of its own; the examples from oil on water to the mantle |
| fraction-submerged | result, eq-fraction-submerged | density-and-archimedes | the derivation; the loaded and unloaded ship; Example 11.9; the ice and hydrometer problems |
| specific-gravity | idea, eq-specific-gravity | specific-gravity | the definition, the note and the glossary; the hydrometer of Figure 11.21; the hydrometer problem |
| apparent-weight-loss | skill, eq-apparent-weight-loss | density-measurements | the two forms; the coin of Figure 11.23; Example 11.10; the bird bone, the iron and the tungsten ingot |

The section leans on `pressure-from-weight-of-fluid` (11.4), `force` (4.1),
`weight` (4.3), `first-condition-equilibrium` (9.1), `free-body-diagram`
(4.1), `density`, `calculate-mass-from-density` and
`density-identifies-substance` (11.2); the coverage rows mark each as used
where the text uses it.

## Figures

id · replaces or Sim · concepts · value add · still or moving · sliders ·
headline · graph · 3D

1. `fig-buoyancy` · Figure 11.17, the anchor, the submarine and the helium
   balloons · photograph, **kept**: the opening paragraph points at it ("See
   Figure 11.17") and its three panels are the three cases the next
   paragraph states; the book's caption and both credit clauses are kept,
   width 480.
2. `sim-cylinder` · replaces Figure 11.18 + 11.19, the cylinder with the two
   forces on its faces and the same cylinder replaced by the fluid it
   displaced (`ch11/config.md` folds them: they are one scene) ·
   buoyant-force, float-sink-suspend, archimedes-principle · variation by
   slider and intuition: sliding the cylinder deeper lengthens both $\kFone$
   and $\kFtwo$ while their difference does not change, which the still can
   only assert, and swapping the cylinder for the fluid that replaces it
   shows the same buoyant force holding up exactly that fluid's weight,
   which is the argument of Figure 11.19 made visible · **still**: a
   cylinder held at a depth has no time in it, and the figure answers its
   controls and registers no cycle (rule 14; the chapter's config makes the
   same decision for every figure of fluid statics) · the depth $h_1$ of the
   top face (0 to 0.35 m, default 0.200, ink, since this page binds no
   position, `ch11/COLOR.md`; the tank is 0.60 m deep, so the 20.0 cm
   cylinder's bottom face reaches 0.55 m at most and stays off the floor), the fluid's density $\krhofl$ (600 to
   1400 kg/m³, default 1000, density, with soft detents at Table 11.1's
   liquids, gasoline, ethyl alcohol, olive oil, water, sea water, blood and
   glycerin), the cylinder's average density $\krhoobj$ (100 to 3000 kg/m³,
   default 1000, density, detents at polystyrene, cork, ice, water and
   aluminum, the last being the foil of the Take-Home Investigation), and a
   choice of what fills the outline, the cylinder or the fluid that replaces
   it, default the cylinder (rule 26.1: panel (a) and panel (b) of Figure
   11.19 are two states, not two values). The cylinder is 20.0 cm tall with
   end faces of 500 cm², so it displaces 10.0 L, and its dimensions are
   fixed and stated because the lesson is in the depth and the densities,
   not the size · "The fluid pushes up on the bottom of the cylinder with
   196 N and down on its top with 98.0 N, so the buoyant force is 98.0 N." ·
   none: the tank, the cylinder with its two forces and the free-body
   diagram beside it are the picture · locked view (root rule 28.2): the book
   prints the tank and the cylinder in perspective, so the scene is
   projected on `view()` from the book's own viewpoint, straight on and a
   little above, with no orbit. The scene scale is fixed from the tank's
   0.60 m of depth, and never follows a slider; the force
   arrows share one fixed scale so that $\kFB$ can be seen to stay the same
   length while $\kFone$ and $\kFtwo$ grow. Readout: $\kFB = \kFtwo - \kFone
   = (h_2 - h_1)\krhofl g A = \kwfl$ with the live numbers; small line on the
   cylinder's own weight and whether it rises, sinks or stays suspended, and
   on the fluid version holding up exactly its own weight. Labels: two
   forces on the faces, two on the free-body diagram and two depth brackets,
   six, each labelled beside itself, so labels are on. Draws force, density.
   The cylinder is ink with a labelled outline and the fluid a soft panel,
   since no body wears a type hue.
3. `sim-ship` · replaces Figure 11.20, the unloaded and the loaded ship ·
   fraction-submerged, average-density-decides-floating,
   archimedes-principle, float-sink-suspend · variation by slider: the
   reader loads the hull and watches it settle, then changes the water and
   watches it lift, where the book shows two states of the ship and says
   the rest in words · **still**: a floating ship sits where its density
   puts it, and a sunk one is drawn on the bottom rather than animated,
   since what the reader is asked to see is how deep it sits, not how fast
   it gets there (rule 14) · the cargo (0 to 100 × 10⁶ kg, default 0, ink,
   detents at 0 and at 90, the load Example 11.8 says the boat can carry)
   and the water's density $\krhofl$ (900 to 1300 kg/m³, default 1000,
   density, detents at fresh water and sea water). The hull is the boat of
   Example 11.8, 1.00 × 10⁷ kg of steel shaped to displace 1.00 × 10⁵ m³ of
   water, drawn as a box hull 100 m long, 40 m wide and 25 m tall so that
   the draft follows the fraction submerged, and the figure reproduces the
   example on load: the empty hull is a tenth submerged, a cargo of
   90 × 10⁶ kg brings the deck to the water, and any more sinks it · "With
   no cargo the hull's average density is 100 kg/m³, a tenth of the
   water's, so a tenth of the hull is submerged." · none: the hull in side
   view against the water with the fraction submerged bracketed is the
   picture · 2D, flat (root rule 28.1). The scene scale is fixed, 6.5 units
   to the metre, from the hull's height and the 40 m of water it sinks in.
   Readout: $\text{fraction submerged} = \krhoobj/\krhofl$ with the live
   numbers; small line on $\kFB = \kwgt$ while it floats and on the ship
   sitting lower in sea water than in fresh, which is the third conceptual
   question. Labels: the hull, the cargo, the waterline, two forces and one
   bracket, so labels are on. Draws force, density. The hull and the cargo
   are ink outlines.
4. `sim-hydrometer` · replaces Figure 11.21, the hydrometer floating in a
   fluid of specific gravity 0.87 · specific-gravity, fraction-submerged ·
   variation by slider and intuition: the fluid changes and the stem reads
   it at the surface, and the reader sees why the scale is printed upside
   down, the smallest numbers at the top, which the still leaves to be
   puzzled out · **still**: a floating instrument has no time in it · one
   slider, the fluid's density $\krhofl$ (650 to 1300 kg/m³, default 870,
   the book's 0.87, density, soft detents at Table 11.1's liquids labelled).
   The instrument has one input, the fluid it floats in, and everything
   else about it is fixed by its calibration, so one slider is what the idea
   has; a second slider on its weighting would only make the instrument
   misread its own scale · "In a fluid of density 870 kg/m³ the hydrometer
   sinks until it displaces its own weight, and the surface crosses the
   stem at 0.87." · none · 2D. The hydrometer weighs 30.0 g, has a bulb of
   20.0 cm³ and a stem of 1.00 cm² cross-section, and the marks on the stem
   are placed where the surface falls in a fluid of that specific gravity,
   which is why they crowd together toward the top; the scale runs from
   0.65 to 1.30 to hold the slider's whole range, fixed. Readout:
   $\text{specific gravity} = \krhofl/\krhow$ with the live numbers; small
   line on the volume displaced, $m/\krhofl$, being smaller in a denser
   fluid, which is why the instrument rides higher. Labels: the scale is the
   frame, the bulb, the lead and the surface are named once, so labels are
   on. Draws density (the fluid is a soft panel; the lead is ink).
5. `fig-hydrostatic` · Figure 11.22, hydrostatic weighing · photograph,
   **kept**: the discussion of Example 11.9 points at it ("See Figure
   11.22") and it shows the measurement the example describes; the book's
   caption is kept, width 200.
6. `sim-coin` · replaces Figure 11.23, the coin weighed in air and
   submerged · apparent-weight-loss, archimedes-principle,
   density-identifies-substance · variation by slider: the coin's metal, its
   mass and the liquid it is dipped in, with the two balance readings
   following, and the readout inverting the two readings to a density as
   Example 11.10 does; the still shows one coin and two readings ·
   **still**: two weighings have no clock · the coin's mass $m$ (1.00 to
   20.00 g, default 8.630, ink), its density $\krho_{\text{c}}$ (2.00 to
   20.00 g/cm³, default 10.4, density, detents at Table 11.1's metals,
   aluminum, iron, brass, copper, silver, lead, tungsten and gold) and the
   liquid's density $\krhofl$ (0.60 to 1.40 g/cm³, default 1.000, density,
   detents at the table's liquids); the defaults are Example 11.10, so the
   figure reads 8.630 g in air and 7.800 g submerged on load. The densities
   are in g/cm³ here because the example works in them · "A coin of 8.630 g
   whose density is 10.4 g/cm³ displaces 0.830 cm³ of water, so its apparent
   mass submerged is 7.800 g." · none: the two balances side by side with
   their readings and free-body diagrams are the picture · 2D. Readout:
   $\text{apparent mass loss} = m - m_{\text{app}} = \krhofl V_{\text{w}}$
   and $\krho_{\text{c}} = m/V_{\text{w}}$ with the live numbers; small line
   naming the metal of Table 11.1 the density is nearest, and noting that
   gold and tungsten differ by a tenth of a percent, which is the ingot
   problem. Labels: two readings, five force arrows, so labels are on.
   Draws force, density.
7. `sim-floating` · Sim (it replaces no figure of the book) ·
   fraction-submerged, specific-gravity, average-density-decides-floating,
   float-sink-suspend · variation by slider: the two densities of
   $\text{fraction submerged} = \krhoobj/\krhofl$ on two sliders and a block
   that settles to the fraction their ratio gives, or sinks when the ratio
   passes one; the paragraph of examples names cork in wine, an iceberg and
   oil on water, and the detents let the reader try each of them, which
   neither the ship (whose slider is a cargo) nor the hydrometer (whose
   body is fixed) gives · **still**: it answers its sliders and nothing
   else · the object's average density $\krhoobj$ (50 to 1500 kg/m³,
   default 970, the woman of Example 11.9, density, detents at polystyrene,
   cork, ice, the woman of the example and water) and the fluid's density
   $\krhofl$ (600 to 1300 kg/m³, default 1000, density, detents at Table
   11.1's liquids) · "An object whose average density is 970 kg/m³ floats
   in water with 97.0 percent of its volume submerged." · none: the block
   in the tank with the waterline and the submerged fraction bracketed is
   the picture · 2D, flat. The tank is fixed, the block is a fixed cube and
   the frame never rescales. Readout: the fraction submerged and the
   specific gravity with the live numbers; small line on the block sinking
   when its density passes the fluid's, and on the fraction being also the
   specific gravity when the fluid is water. Labels: the block, the fluid,
   the surface and one bracket, so labels are on. Draws force, density (the
   two forces on the block are drawn equal while it floats).

Photographs: three, Figure 11.17 and Figure 11.22 kept as above; the ships
of Figure 11.20 are a drawing and are replaced. No photograph is dropped.

Figures that serve exercises: none. The proof problem refers to Figure
11.19, which `sim-cylinder` carries as a fold, and the coin problems refer
to Figure 11.23, which `sim-coin` replaces; no problem carries an image of
its own.

Extra simulations (rule 15), thought through, judged and decided:

- **The block with two density sliders (`sim-floating`): built**, for the
  reasons in its line.
- The steel block against the steel boat of Example 11.8. Left: `sim-ship`
  is built on the example's own numbers and its cargo slider is the boat's
  whole point, while the solid block is one line of arithmetic the example
  already prints.
- The helium balloon and the man buoyed by the air (two unkeyed problems).
  Left: `sim-cylinder` reaches a fluid density of 600 kg/m³ but not the
  1.29 of air, and a figure built to reach it would show a buoyant force a
  thousandth the length of the weight, which is the sentence the text
  already says.
- A person floating with lungs full and empty, the lung-capacity problem.
  Left: unkeyed, and `sim-floating` with its detent at 970 kg/m³ shows the
  same body at a second density with one slide.
- The bathtub plug and the marbles (two conceptual questions). Left: each
  turns on where the weight of a submerged body ends up, which is the
  answer the reader is being asked for.

## Tables

None: the section prints no table of its own. Its two references to
Table 11.1 are plain text.

## Exercises

- One item is set inline: the third conceptual question, whether the same
  ship floats higher in salt water than in fresh, is a short Understand
  check on the fraction submerged that `sim-ship` has just shown, and is
  placed after `density-and-archimedes` (rule 12), as 11.2 and 9.2 place
  theirs. Everything else is at the end.
- 4 conceptual questions of the section's own, none keyed, each an open item
  with an AI-marked suggested approach: `cq1` (fs-id1870728, the bathtub
  plug, Analyze, citing `buoyant-force`), `cq2` (fs-id937576, buoyant forces
  in a weightless environment, Understand, citing `buoyant-force`), `cq3`
  (fs-id2054662, the ship in salt water, Understand, inline after
  `density-and-archimedes`) and `cq4` (fs-id2604080, the marbles in the
  bathtub, Analyze, citing `archimedes`).
- 3 conceptual questions taken from other sections, as `ch11/config.md`
  decides, each with `source_section`, unkeyed, open with an AI-marked
  approach: `cq5` (fs-id2590796 from 11.3, the iceberg and the glacier,
  Analyze, citing `density-and-archimedes`), `cq6` (fs-id1868222 from 11.4,
  swimming under water in the Great Salt Lake, Understand, citing
  `density-and-archimedes`) and `cq7` (fs-id3245014 from 11.8, the loaded
  oil tanker, Understand, citing `density-and-archimedes`). The three source
  sections' `exercise_notes` say so as well.
- 1 AP item taken from 11.2 with `source_section` 11.2: `ap1` (fs-id889976,
  the polystyrene cube partly submerged). It is keyed, (a) 100 kg/m³, (b)
  60 %, (c) yes and yes with 76 % submerged, (d) answers vary, so it is a
  multi item checking (a) and (b) with the whole key in its solution,
  Analyze, citing `density-and-archimedes`.
- 9 problems keyed and kept, numbered by their place in the book's list:
  `p1` (fs-id1958439, the fraction of ice submerged, 91.7 %), `p3`
  (fs-id2054828, the hydrometer of density 0.750 g/mL, 815 kg/m³), `p5`
  (fs-id2446854, the bird bone, 41.4 g, 41.4 cm³, 1.09 g/cm³), `p7`
  (fs-id3008964, the chunk of iron in an unknown liquid, 39.5 g, 50 cm³,
  0.79 g/cm³ and ethyl alcohol), `p9` (fs-id3011795, the grouper, 8.21 N),
  `p11` (fs-id3201670, the woman with 4.00 % above the surface, 960 kg/m³
  and 6.34 %), `p13` (fs-id3402778, the cork compass, 0.24, 0.68 and yes
  in ethyl alcohol, with the book's reasoning in the solution), `p15`
  (fs-id2442091, the gold-plated tungsten ingot, 0.006 %) and `p17`
  (fs-id1945983, the proof that the buoyant force on the cylinder is the
  weight of the fluid displaced, an open item whose solution is the book's
  own derivation, marked as the source's).
- 9 problems left out, having no answer in the book's key: the log floating
  vertically (fs-id1890482), the body of density 995 kg/m³ (fs-id3011318),
  the rock and granite (fs-id1817688), the immersion measurement of a
  woman (fs-id1871387), the 2.00 L helium balloon (fs-id3172849), the man
  buoyed by the air (fs-id3233355), the iron anchor (fs-id3246047), the air
  mattress (fs-id2688071) and the lung capacity (fs-id3165399); named in
  `notes` and in `exercise_notes`.
- Nothing of this section's own is held for a later page.
- No generated questions: every node of the section has a book exercise
  that tests it.
- Weights: `cq1` and `cq4` give `buoyant-force` and `archimedes-principle`
  their full value respectively and the other 2; `cq3`, `cq6` and `cq7`
  give `fraction-submerged` the full value and
  `average-density-decides-floating` 2; `cq5` gives `archimedes-principle`
  the full value and `fraction-submerged` 3; `ap1` gives
  `fraction-submerged` the full value, `float-sink-suspend` 3 and
  `average-density-decides-floating` 2; `p1` and `p11` give
  `fraction-submerged` the full value and `density` 2; `p3` gives
  `specific-gravity` the full value and `fraction-submerged` 3; `p5`, `p7`
  and `p15` give `apparent-weight-loss` the full value and `density` 2, with
  `density-identifies-substance` 2 on `p7` and `p15`; `p9` gives
  `archimedes-principle` the full value and `calculate-mass-from-density` 2;
  `p13` gives `fraction-submerged` the full value and
  `average-density-decides-floating` 3; `p17` gives `buoyant-force` the full
  value and `archimedes-principle` 4 and `pressure-from-weight-of-fluid` 2.

## Views

- Formulas: the seven equations of the section already in `chapter.json`,
  the four stated and named ones important (`eq-archimedes`,
  `eq-fraction-submerged`, `eq-specific-gravity`, `eq-apparent-weight-loss`)
  and the three steps not.
- Definitions: the ten variables of the section, and three glossary terms,
  Archimedes' principle, buoyant force and specific gravity.
- Concept map: the seven nodes above with their edges into 4.1, 4.3, 9.1,
  11.2 and 11.4.

## Colour

The page binds `force` and `density`, as `ch11/COLOR.md` lists it for 11.7.
Every figure draws a force (the two pushes on the cylinder's faces and their
difference, the weight and the buoyant force on the hull, the tension and
the buoyant force on the coin) or a density (every fluid slider, the
cylinder's and the block's average density, the coin's metal, the readouts).
Depth, the cylinder's dimensions, the cargo, the coin's mass, volume and
every fraction stay untyped and in ink; the depth $h_1$ is a position in this
book, but this page binds no position, so its slider and its bracket are ink.
No body wears a hue: the cylinder, the hull, the block and the hydrometer are
ink outlines and every fluid is a soft panel with a labelled surface. Nothing
on the page binds pressure: the book's Figure 11.18 draws $\kFone$ and
$\kFtwo$ as forces, and so does the page.

## Wanted at chapter level

- variables `F_B` → 11.7-archimedes
- variables `w_fl` → 11.7-archimedes
- variables `ρ_obj` → 11.7-density-and-archimedes
- variables `ρ_fl` → 11.7-density-and-archimedes
- variables `ρ_bar` → 11.7-specific-gravity
- variables `ρ_w` → 11.7-specific-gravity
- variables `V_sub` → 11.7-density-and-archimedes
- variables `V_obj` → 11.7-density-and-archimedes
- variables `V_fl` → 11.7-density-and-archimedes
- variables `V_w` → 11.7-floating-sinking
- equations `eq-archimedes` → 11.7-archimedes
- equations `eq-buoyant-force-difference` → 11.7-buoyant-force
- equations `eq-fraction-submerged-volumes` → 11.7-density-and-archimedes
- equations `eq-fraction-submerged` → 11.7-density-and-archimedes
- equations `eq-specific-gravity` → 11.7-specific-gravity
- equations `eq-apparent-weight-loss` → 11.7-density-measurements
- equations `eq-apparent-mass-loss` → 11.7-density-measurements
- `ch11/COLOR.md` says under its families that the little arrows on a
  submerged body in Figure 11.18 take the `pressure` hue, but its table
  binds 11.7 to `force` and `density` only and says a page never binds more;
  the page follows the table, and the paragraph wants one sentence brought
  into line with it.
- No concept or symbol row of the section needs a fix. The `F_B` symbol row
  is Chapter 9's and is used as it stands.

Applied in the chapter pass (2026-09-14). The ten variable anchors and
the seven equation anchors are written as listed. `ch11/COLOR.md`'s
paragraph on the arrow field is rewritten to the pages that bind pressure
(11.3, 11.4 and 11.5) and says that Figure 11.18 draws three forces and no
arrow field, which is what `sim-cylinder` does. Two things settled beyond
the list: the discussion of Example 11.8 prints the steel's weight as
$m_{\text{s}}w$, a slip for $m_{\text{s}}g$ in the book itself, and the
page keeps the book's printing in ink with nothing said, as Chapter 4's pass
kept that chapter's slips (LOG pass on Chapter 4, "the book's own
typographical slips in the running text … are the book's and stay"); and
the cylinder's depth slider runs to 0.35 m in a tank 0.60 m deep, which the
figure line above now says in place of the 0.80 m and 1.00 m first
planned.
