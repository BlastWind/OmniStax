# Plan: 12.4 Viscosity and Laminar Flow; Poiseuille’s Law (m42209)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen’s standing instruction to finish the book in
waves; the per-section stop of rule 2, the plan review of rule 5 and the user
picks of rule 15 are replaced by this file, written before the section was
built and left for review after, as `ch12/config.md` records.

The section that lets the fluid have friction. The three sections before it
treated ideal fluids; this one names laminar and turbulent flow, defines
viscosity from a fluid sheared between two plates, prints the table of
viscosities from air to honey, relates flow to a pressure difference through
a resistance, states Poiseuille’s law for that resistance with its surprising
fourth power of the radius, and turns the relationship round to explain why
pressure drops along a water main and around the circulatory system. Eight
book figures (12.14 to 12.21), one table (12.1), two worked examples, one
boxed note (the river experiment), five glossary terms, four conceptual
questions and twenty-two problems, of which ten are keyed and three belong
to 12.6. One page (rule 11).

## Sub-concepts (page headers)

The module prints three headers of its own and `ch12/config.md` keeps them as
the book writes them, so the page has three spans.

1. `laminar-viscosity` **Laminar Flow and Viscosity** (book: the juice and
   syrup paragraph; the definitions of laminar and turbulent flow against the
   smoke of Figure 12.14; the schematic of Figure 12.15; the Go Down to the
   River experiment; the two plates of Figure 12.16 and the four dependencies
   of the force; the two forms of the definition; the remark on how far
   viscosities range and on aspirin). Introduces `laminar-flow`,
   `turbulent-flow` and `viscosity`. The variables $\keta$, $\kF$, $\kv$,
   $A$ and $L$ and the equations `eq-viscosity-force` and
   `eq-viscosity-definition` anchor here.
2. `poiseuille` **Laminar Flow Confined to Tubes—Poiseuille’s Law** (book:
   flow from a pressure difference through a resistance; the velocity
   profile of Figure 12.17 and the Bunsen flame; Poiseuille’s law for
   resistance; the intuitive check and the factor of sixteen; Poiseuille’s
   law for flow; Example 12.7 on plaque; Table 12.1; the circulatory
   paragraph with the five percent narrowing and the cold motor oil; the
   tube of Figure 12.18; Example 12.8 on the intravenous needle).
   Introduces `velocity-profile-in-tube`, `flow-resistance`,
   `poiseuilles-law-resistance`, `poiseuilles-law` and
   `radius-fourth-power-sensitivity`. The variables $\kQ$, $\kProne$,
   $\kPrtwo$, $R$, $l$ and $r$ and the equations `eq-flow-from-resistance`,
   `eq-poiseuille-resistance` and `eq-poiseuille` anchor here.
3. `pressure-drops` **Flow and Resistance as Causes of Pressure Drops**
   (book: the water main of Figure 12.19 and the rearranged relationship;
   the obstructed artery and the faucet; the circulatory system of Figure
   12.20; the branching paragraph with the aorta and the capillaries).
   Introduces `pressure-drop-from-resistance`; uses `flow-resistance`,
   `radius-fourth-power-sensitivity`, `flow-rate-velocity` and
   `continuity-branching`. The equation `eq-pressure-drop` anchors here.

The two worked examples are the chapter’s seventh and eighth (12.1 prints
three, 12.2 one and 12.3 two), so the page heads them Example 12.7 and
Example 12.8, as 12.1 numbered its own. The reference to Example 12.8 in the
last problem is plain text, as the chapter’s config allows for a reference
inside the section. Learning objectives, the section summary and the five
glossary terms come out of the running text into the tables and the views
(rule 4). The summary’s three equations are the book’s `eip-472`, `eip-18`,
`eip-46` and `eip-515`, the same four results as the text’s, and they are not
separate rows.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| laminar-flow | idea | laminar-viscosity | the smoke, the layers of Figure 12.15(a), the river experiment |
| turbulent-flow | idea | laminar-viscosity | the same smoke once it swirls, the obstruction of 12.15(b) |
| viscosity | idea, eq-viscosity-force | laminar-viscosity | the two plates of Figure 12.16, Table 12.1, the slide problems, the first conceptual question |
| velocity-profile-in-tube | idea | poiseuille | Figure 12.17 and the flame; the canoe question |
| flow-resistance | result, eq-flow-from-resistance | poiseuille | the relationship stated before Poiseuille’s law; the concrete pump |
| poiseuilles-law-resistance | result, eq-poiseuille-resistance | poiseuille | the tube of Figure 12.18; the factor-of-sixteen check |
| poiseuilles-law | result, eq-poiseuille | poiseuille | Examples 12.7 and 12.8; a dozen problems |
| radius-fourth-power-sensitivity | idea | poiseuille | the doubling and the five percent narrowing; the arterioles, the angioplasty, the penguin |
| pressure-drop-from-resistance | result, eq-pressure-drop | pressure-drops | the water main of Figure 12.19, the circulatory system of Figure 12.20, the shower question |

The section leans on `flow-rate`, `flow-rate-velocity` and
`continuity-branching` (12.1), `pressure` and `gauge-pressure` (11.3, 11.6),
`friction` (4.3), `kinetic-friction` (5.1) and `shear-deformation` (5.3), and
the coverage rows mark each as used where the text does.

## Figures

id · replaces or Sim · concepts · value add · moving or still · sliders ·
headline · graph · 3D

1. `fig-smoke` · keeps Figure 12.14, the photograph of smoke rising · photo,
   kept: the text points at it ("Figure 12.14 shows both types of flow") and
   it is the reader’s first sight of turbulence, as `ch12/config.md` decides
   · width 200, with the book’s caption and credit.
2. `sim-laminar-turbulent` · replaces Figure 12.15 (a) and (b), the layers
   and the obstruction · laminar-flow, turbulent-flow · value add:
   standardisation and variation, the two states of one stream under one
   control, the layers’ speeds and the size of the obstruction on sliders,
   so the reader sees that laminar layers keep their order and slide past
   one another with friction between them, and that an obstruction bends the
   streamlines and leaves eddies behind it, which the two book panels only
   assert · **still**: the chapter’s config reserves motion for the onset of
   turbulence in 12.5, and here the idea is what the two kinds of flow look
   like, not how one becomes the other; the figure answers its controls and
   registers no cycle (rule 14) · a choice laminar or turbulent (rule 26.1,
   default laminar, the book’s panel (a)); $\kv_\text{t}$, the speed of the
   top layer (0.2 to 2.0 m/s, default 1.0, velocity), which sets the
   gradient across the layers and is held while the turbulent state shows;
   the height of the obstruction (10 to 60 percent of the depth, default 40,
   ink), held while the laminar state shows · "The layers slide past one
   another without mixing; the top one moves at 1.0 m/s and the one on the
   bed does not move at all." · none: the stream in section is the picture ·
   2D. Labels: the five layers are one kind labelled on two representatives
   ($\kv_\text{t}$ and $\kv_\text{b}$) with hover names on every layer; the
   eddies are one kind with one label and hover names (rule 26.7). Readout: a
   sentence in each state, since the figure carries no equation, the laminar
   one naming the friction between layers and the turbulent one the mixing
   and the greater resistance. Draws velocity.
3. `sim-viscosity-plates` · replaces Figure 12.16, the fluid sheared between
   two plates · viscosity · value add: variation, the four dependencies of
   the force on sliders and the fluid chosen from Table 12.1, so the reader
   sees the force needed to keep the top plate moving change with the
   speed, the area, the separation and the fluid, and sees where each fluid
   of the table stands against the others · **still**: the plate moves at a
   constant speed and the picture of a steady shear does not change with
   time; what changes it are the sliders (rule 14) · the fluid, a dropdown
   over the liquids of Table 12.1 at their tabulated temperatures (rule
   26.1, default olive oil at 20 °C, 138 mPa·s, which is the fluid of the
   keyed slide problem; honey and maple syrup are left out because the table
   gives them ranges); $\kv$ (0.2 to 5.0 cm/s, default 1.00, velocity);
   $L$ (0.50 to 3.00 mm, default 1.50, ink); $A$ (2.0 to 12.0 cm², default
   6.00, ink) · "Olive oil 1.50 mm thick between plates of 6.00 cm² takes
   5.52 × 10⁻⁴ N to keep the top plate moving at 1.00 cm/s." · below: the
   viscosity ladder, the liquids of Table 12.1 laid out on an
   order-of-magnitude axis from 0.1 to 10 000 mPa·s with the chosen one
   marked, which is Chapter 1’s way of showing a range of several powers of
   ten · 2D, drawn from a locked view (rule 28.2) because the book prints
   the plates in perspective and the layers stepping out from the fixed
   plate to the moving one are the point. Labels: the layers are one kind
   with $\kv$ on the top and $\kv = 0$ on the bottom; the ladder’s fluids
   are eleven and would collide, so only the chosen one is labelled and the
   rest have hover names (rule 26.7). Readout: $\kF = \keta\kv A/L$ with the
   live numbers, the force on a bar on a fixed cap of 6.00 mN and pinned
   above it; small line on the SI unit of viscosity. Draws force, velocity,
   viscosity.
4. `sim-velocity-profile` · replaces Figure 12.17 (a), (b) and (c), the
   nonviscous and viscous profiles and the Bunsen flame · velocity-profile-
   in-tube · value add: variation, the same flow rate through both tubes
   with the radius on a slider, so the reader sees that the nonviscous
   speed is the average speed $\kQ/A$ everywhere while the viscous profile
   is zero at the wall and greatest at the center, and that the two carry
   the same flow · **still**: a steady flow has a profile, not a history,
   and the flame the book photographs is that profile standing still
   (rule 14) · $\kQ$ (0.25 to 0.80 L/s, default 0.50, flow-rate); $r$ (1.5
   to 2.5 cm, default 2.0, ink) · "At 0.50 L/s through a tube 2.0 cm in
   radius the average speed is 0.40 m/s; the viscous flow is fastest at the
   center and stands still at the wall." · none: the two tubes side by side
   with their arrows are the picture · 2D, both tubes drawn upright as the
   book draws them so the flame beside them reads. Labels: the arrows are
   one kind per tube, labelled once on each; hover names on the wall and
   center arrows. Readout: $\kvb = \kQ/A = \kQ/\pi r^2$ with the live
   numbers; small line that the viscous profile averages to the same $\kvb$
   and so carries the same flow. Draws flow-rate, velocity.
5. `sim-poiseuille` · replaces Figure 12.18, the tube of radius $r$ and
   length $l$ with $\kPrtwo$ and $\kProne$ at its ends · poiseuilles-law,
   poiseuilles-law-resistance, flow-resistance, radius-fourth-power-
   sensitivity · value add: variation, the pressure difference, the radius,
   the length and the fluid on controls with the flow rate and the
   resistance following, so the reader sees the fourth power of the radius
   as a stream that fattens or dies while the other three sliders move it
   only in proportion · **still**: the law relates steady quantities and the
   figure answers its sliders (rule 14) · the fluid, a dropdown over the
   liquids of Table 12.1 near water, from water at 100 °C to milk, at their
   tabulated temperatures (rule 26.1, default water at 20 °C, which is the
   saline of Example 12.8; the oils are left out because at the needle’s
   radius they would all draw the same stopped stream, rule 24.9);
   $\kPrtwo - \kProne$ (0.50 to 3.00 × 10⁴ N/m², default 1.51 × 10⁴,
   pressure); $r$ (0.100 to 0.200 mm, default 0.150, ink, a detent at the
   needle); $l$ (1.00 to 5.00 cm, default 2.50, ink) · "Water at 20 °C driven by 1.51 × 10⁴ N/m² through a
   needle 0.150 mm in radius and 2.50 cm long flows at 0.120 cm³/s." ·
   none: the tube in section with its profile arrows and the flow rate on a
   bar under it · 2D. Labels: the pressures at the two ends, $r$, $l$ and
   the fluid on the tube, the flow arrow once. Readout:
   $\kQ = (\kPrtwo - \kProne)\pi r^4 / 8\keta l$ with the live numbers;
   small line giving $R = 8\keta l/\pi r^4$. The flow-rate bar sits on a
   fixed cap of 0.500 cm³/s and pins above it where the maximum radius at
   the maximum pressure with water at 100 °C overruns it. Draws
   flow-rate, viscosity, pressure, velocity.
6. `sim-water-main` · replaces Figure 12.19, the water works, the main and
   the houses · pressure-drop-from-resistance, flow-resistance · value add:
   variation, the number of houses drawing water and the resistance of the
   main on sliders with the pressure at the houses following, so the
   reader sees the pressure at the junction fall as the neighborhood draws
   more, which the book’s drawing can only label · **still**: the main
   carries a steady flow and what the reader changes is how many taps are
   open, not the time (rule 14) · the houses drawing water (0 to 20,
   default 5, ink, each at 20.0 L/min, so $\kQ$ is their count times that);
   the resistance $R$ of the main (0.50 × 10³ to 2.00 × 10³ N/m² per
   L/min, default 1.00 × 10³, ink); $\kPrtwo$ at the water works (2.00 to
   6.00 × 10⁵ N/m², default 4.00 × 10⁵, pressure). The defaults are chosen
   away from the book’s unkeyed water-main problem, whose numbers the
   figure must not answer · "Five houses draw 100 L/min through the main,
   and the pressure falls from 4.00 × 10⁵ N/m² at the water works to
   3.00 × 10⁵ N/m² at the houses." · none: the main in plan with two
   pressure gauges is the picture · 2D. Labels: $\kPrtwo$ and $\kProne$ on
   their gauges, $\kQ$ on the main, the houses one kind labelled once with
   the open taps marked. Readout: $\kPrtwo - \kProne = R\kQ$ with the live
   numbers; small line that a small flow leaves $\kProne \approx \kPrtwo$.
   Draws pressure, flow-rate.
7. `sim-circulation` · replaces Figure 12.20, the circulatory system with
   its pressures · pressure-drop-from-resistance, radius-fourth-power-
   sensitivity, flow-resistance · value add: variation, the pressure at
   every station of the circuit drawn as a staircase with the flow rate and
   the arterioles’ radius on sliders, so the reader sees that each drop
   along the way is $R\kQ$ for that stretch of vessel and that a small
   change in the arterioles’ radius moves the drop across them by a lot,
   which is the section’s account of how the body regulates flow · **still**:
   the pressures are averages for an adult at rest and the figure answers
   its sliders (rule 14) · $\kQ$ (2.0 to 10.0 L/min, default 5.00, flow-rate,
   the resting rate of 12.1, a detent at rest); the arterioles’ radius as a
   percent of its resting value (85 to 115, default 100, ink, detents at 95
   and at rest). Each stretch of the
   circuit is a fixed resistance found from the book’s drop at 5.00 L/min
   (aorta to small arteries 35 mm Hg, small arteries to arterioles 50,
   arterioles to venules 20, venules to the venae cavae 11, pulmonary
   artery to pulmonary veins 17); the venae cavae stay at 4 mm Hg and the
   pulmonary veins at 8 mm Hg, as the book prints them, and the pressures
   upstream follow from $\kPrtwo - \kProne = R\kQ$, the arterioles’
   resistance going as the inverse fourth power of the radius fraction.
   The book’s picture is the default state · "At 5.00 L/min the pressure
   falls from 120 mm Hg in the aorta to 4 mm Hg in the venae cavae, 50 of
   the 116 mm Hg across the arterioles." · the graph is the scene: the
   circuit unrolled left to right, systemic then pulmonary, with a bar at
   each of the book’s stations in the pressure hue, a hollow bar behind it
   for the resting value where the reader has moved off it · 2D. Labels:
   the seven stations are labelled under their bars, as the book labels
   them; their pressures on the bars. Readout:
   $\kPrtwo - \kProne = R\kQ$ for the arterioles with the live numbers;
   small line giving the aortic pressure the left ventricle must supply.
   Draws pressure, flow-rate.

Photographs: the smoke of Figure 12.14 is kept (`fig-smoke` above). The
Bunsen flame of 12.17(c) is kept as an original of `sim-velocity-profile`,
not as a photograph of its own, since the book prints it under the profile’s
number. The air tube beside the faucet, Figure 12.21, travels on the card of
the fourth conceptual question, as `ch12/config.md` decides for every image
an exercise refers to; it is not a figure row.

Figures that serve exercises: only 12.21, on its card.

Table 12.1, Coefficients of Viscosity of Various Fluids, is rebuilt as a
`div.book-table` with the book’s eyebrow and title: two group rows (Gases,
Liquids), the fluids that the book prints at several temperatures spanning
their rows, and the two footnotes on whole blood and blood plasma under the
table as the book prints them.

Extra simulations (rule 15), thought through, judged and decided:

- A viscometer that drops a ball through the fluid. Left: it is 12.6’s
  figure, and its three problems have gone there.
- A single tube whose radius shrinks by five percent while a bar shows the
  flow falling to 81 percent. Left: `sim-poiseuille` already puts the radius
  on a slider with the flow following, and the arithmetic is one drag of it.
- The laminar lanes breaking into eddies as the speed rises. Left: that is
  the onset of turbulence and belongs to 12.5, where motion is allowed.

## Exercises

Kinds and placement follow `ch12/config.md`: everything at the end, since the
section has no Check Your Understanding box; the book’s answer key only.

- 4 conceptual questions, each an open item with an AI-marked suggested
  approach: `cq1` (fs-id2016654, why a liquid’s viscosity falls and a gas’s
  rises with temperature, Understand), `cq2` (fs-id1390466, the canoe near
  the shore going up and near the middle coming down, Apply), `cq3`
  (fs-id2442163, the shower when the toilet flushes, Understand), `cq4`
  (fs-id1528282, the air-filled tube near a faucet, Analyze, with Figure
  12.21 on its card).
- 9 problems keyed and kept: `p1` (fs-id1011276, the air track cart, multi:
  3.02 × 10⁻³ N and 1.03 × 10⁻³), `p3` (fs-id1585889, glucose replaced by
  blood, 1.60 cm³/min), `p5` (fs-id2392198, the small artery at 37 °C,
  8.7 × 10⁻¹¹ m³/s), `p7` (fs-id3385463, the arterioles that shut an organ
  down, 0.316), `p9` (fs-id2639230, the vessel at 90.0 percent, 1.52 with the
  book’s words for (b) in the solution), `p13` (fs-id3034936, the oil between
  slides, 0.138 Pa·s, olive oil), `p15` (fs-id2683828, the IV bottle, multi:
  1.62 × 10⁴ N/m², 0.111 cm³/s, 10.6 cm), `p17` (fs-id742312, the marathon
  runner, 1.59), `p19` (fs-id2400972, the oil gusher, 2.95 × 10⁶ N/m²).
  That is nine cards; the numbering skips the unkeyed items so a card’s
  number is its place in the book’s list.
- 3 problems moved to 12.6 with `source_section: "12.4"`, as the chapter’s
  config decides: fs-id2401743 (the terminal speed from Stokes’ law),
  fs-id1427261 (the viscosity of motor oil from a falling ball, keyed
  225 mPa·s) and fs-id3054572 (the skydiver). `exercise_notes` says so.
- 10 problems left out, having no answer in the book’s key: the microscope
  slides in water (fs-id1845376), the net force and power on the artery
  (fs-id1562200), the five changes to a 100 cm³/s flow (fs-id2423387), the
  angioplasty (fs-id3125888), the 5.00 percent verification (fs-id3025375),
  the clot with the 20.0 percent pressure rise (fs-id2442683), the water
  main (fs-id3358894), the concrete pump (fs-id1373292) and the two
  Construct Your Own Problem items (fs-id2446855, fs-id2053879). Named in
  `notes` and `exercise_notes`.
- No generated questions: every node has a book exercise that tests it.
- Weights: `cq2` gives `velocity-profile-in-tube` its full value and
  `laminar-flow` 2; `cq3` gives `pressure-drop-from-resistance` its full
  value and `flow-resistance` 2; `p3` gives `poiseuilles-law` its full value
  and `viscosity` 2; `p5` gives `poiseuilles-law` its full value and
  `viscosity` 2, since the viscosity is read from the table; `p7`, `p9`
  and `p17` give `radius-fourth-power-sensitivity` their full value and
  `poiseuilles-law` 3; `p15` gives `poiseuilles-law` its full value and
  `pressure-from-weight-of-fluid` 3; `p19` gives `poiseuilles-law` its full
  value and `pressure-from-weight-of-fluid` 3.

## Views

- Formulas: the six equations of the section already in `chapter.json`, the
  five stated and named results important and the rearranged definition of
  viscosity not.
- Definitions: the eleven variables of the section and the five glossary
  terms.
- Concept map: the nine nodes above with their edges into 4.3, 5.1, 5.3,
  11.3 and 12.1.

## Colour

The page binds flow rate, viscosity, pressure, velocity and force. The
stream and the flow-rate bars wear the flow-rate hue; the fluid chosen from
Table 12.1, its dropdown and every readout that writes $\keta$ wear the
viscosity hue; the pressures at the ends of a tube, on the gauges of the
water main and on the bars of the circulation wear the pressure hue; the
layer arrows and the profile arrows wear the velocity hue; the force on the
top plate wears the force hue. The radius $r$, the length $l$, the plate
separation $L$, the area $A$, the resistance $R$, the house count and the
radius fraction are untyped and in ink, as `ch12/COLOR.md` decides, and the
plate separation is written as a plain $L$ because the book’s `L` row is
Chapter 10’s angular momentum and this length is not that.

## Wanted at chapter level

- variables `η_visc` → 12.4-laminar-viscosity
- variables `F` → 12.4-laminar-viscosity
- variables `v` → 12.4-laminar-viscosity
- variables `A` → 12.4-laminar-viscosity
- variables `L` → 12.4-laminar-viscosity
- variables `Q` → 12.4-poiseuille
- variables `P_1` → 12.4-poiseuille
- variables `P_2` → 12.4-poiseuille
- variables `R_flow` → 12.4-poiseuille
- variables `l` → 12.4-poiseuille
- variables `r` → 12.4-poiseuille
- equations `eq-viscosity-force` → 12.4-laminar-viscosity
- equations `eq-viscosity-definition` → 12.4-laminar-viscosity
- equations `eq-flow-from-resistance` → 12.4-poiseuille
- equations `eq-poiseuille-resistance` → 12.4-poiseuille
- equations `eq-poiseuille` → 12.4-poiseuille
- equations `eq-pressure-drop` → 12.4-pressure-drops
- No concept or symbol fix is wanted. The plate separation of the viscosity
  definition is written as a plain $L$ in ink, since the book’s `L` symbol
  row is Chapter 10’s angular momentum with the macro `\kL`, and the
  chapter’s variables row for `L` in 12.4 is untyped as it should be.
  (Chapter pass: the row is `12.4/L_len` now, pointing at the new untyped
  symbol `L_len`, so that the Definitions view does not name the angular
  momentum for a length.)

Applied in the chapter pass (2026-09-14): every anchor above is written on its
row, the `L` variables row is `L_len`, and the slider lines above were
brought to the ranges the figures were built with. The `notes` and
`exercise_notes` now say that of the three problems that belong to 12.6 only
the falling steel ball is set there and the other two are left out of both
sections. Table 12.1's header writes $\keta$ with the macro, as the prose
does, since the page binds viscosity.
