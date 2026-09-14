# Plan: 11.8 Cohesion and Adhesion in Liquids: Surface Tension and Capillary Action (m42197)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's instruction to finish the book without
check-ins; the per-section stop of rule 2, the plan review of rule 5 and the
user picks of rule 15 are replaced by this file, written before the section
was built and left for review after, as `ch11/config.md` records.

The section where the chapter turns from the weight of a fluid to the forces
between its molecules. Cohesive forces hold a liquid together and draw its
surface into the smallest area it can take, so the surface behaves like a
stretched elastic sheet: it dents under an insect's foot, holds up an iron
needle, squeezes the gas inside a bubble and empties a small balloon into a
large one. Adhesive forces pull a liquid onto a solid, and the contest between
the two kinds decides the contact angle, whether water beads or spreads, and
how far a liquid climbs or is pushed down in a capillary tube. Ten book
figures (11.24 to 11.33), of which two are photographs and one a medical
illustration, two tables (11.3 and 11.4), two worked examples, seven boxed
notes, five glossary terms, eight conceptual questions and fourteen problems
of which seven are keyed. One page (rule 11).

## Sub-concepts (page headers)

The module prints three headers of its own (Cohesion and Adhesion in
Liquids, Surface Tension, Adhesion and Capillary Action), which are kept as
the book writes them (`ch11/config.md`); the other four are the agent's
(rule 3).

1. `cohesion-adhesion` **Cohesion and Adhesion in Liquids** (book header;
   the opening paragraph on soap bubbles, the underwater spider, the blood
   drawn into a tube and the premature infant; the paragraph that defines
   cohesive and adhesive forces; the two boxed notes; Figure 11.24).
2. `surface-tension` **Surface Tension** (book header; the boxed Surface
   Tension note; the Making Connections note; the elastic-sheet paragraph
   with the insect and the needle, Figure 11.25; the definition
   $\kgamma = \kF/L$; the paragraph on Table 11.3, the insect's weight
   $\kwgt = \kgamma L\sin\theta$ and the sliding wire device, Figure 11.26).
   The variables $\kgamma$, $\kF$, $\kFST$ and $L$ and the equations
   `eq-surface-tension`, `eq-slide-wire-force` and `eq-insect-weight` anchor
   here.
3. `bubbles` **The pressure inside a bubble** (agent's header; the paragraph
   that states $\kPr = 4\kgamma/r$ and the two balloons, Figure 11.27; Table
   11.3, which the CNXML sets after that figure; Example 11.11, Surface
   Tension: Pressure Inside a Bubble). The variables $\kPr$ and $r$ and the
   equation `eq-bubble-pressure` anchor here. The example is `ex-bubble`.
4. `alveoli` **Surface tension in the lungs** (agent's header; the three
   paragraphs on the alveoli, the surfactant and the diseases; Figure
   11.28; Figure 11.29; the Take-Home Investigation note).
5. `contact-angle` **Adhesion and Capillary Action** (book header; the
   paragraph on the waxed car and the contact angle; the boxed Contact Angle
   note; Figure 11.30). The variable $\theta$ anchors here.
6. `capillary-action` **Capillary action in a narrow tube** (agent's header;
   the paragraph that defines capillary action and its boxed note; the
   paragraph on mercury and water in glass with Figure 11.31; Table 11.4;
   the paragraph that states $\kh = 2\kgamma\cos\theta/\krho\kg r$ and reads
   its factors, with Figure 11.32; Example 11.12, Calculating Radius of a
   Capillary Tube: Capillary Action: Tree Sap). The variables $\kh$ and
   $\krho$ and the equation `eq-capillary-height` anchor here. The example
   is `ex-tree-sap`.
7. `negative-pressure` **How sap reaches the top of a tree** (agent's
   header; the closing paragraph on transpiration, the chain of cohesive
   forces and the negative pressure that pulls sap through the xylem;
   Figure 11.33). No concept is introduced here; the span uses cohesive
   forces, pressure and the depth a pressure supports, and comes back to
   capillary action.

The publisher numbers the two examples 11.11 and 11.12, the chapter's
eleventh and twelfth, and the page follows that. The reference to the
barometer example of 11.4 ("see Example 11.5") and the mentions of Table
11.3 and Table 11.4 are plain text; the figure numbers the prose cites are
linked by the build. Learning objectives, the section summary and the five
glossary terms come out of the running text into the tables and the views
(rule 4). The two notes that repeat a definition (Cohesive Forces, Adhesive
Forces, Surface Tension, Contact Angle, Capillary Action) are the book's own
boxed restatements and are kept as notes, as `ch11/config.md` decided.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| cohesive-forces | idea | cohesion-adhesion | the definition, the note and the glossary; the soap bubbles; cq2 |
| adhesive-forces | idea | cohesion-adhesion | the definition, the note and the glossary; the drop on the window pane; cq3, cq5 |
| surface-tension | idea, eq-surface-tension | surface-tension | the elastic sheet, the insect and the needle, the sliding wire; Table 11.3; p7 |
| pressure-inside-a-bubble | result, eq-bubble-pressure | bubbles | the two balloons; Example 11.11; p1, p3, p9 |
| alveoli-and-surfactant | idea | alveoli | the three paragraphs on the lungs; Figures 11.28 and 11.29; cq8, p1 |
| contact-angle | idea | contact-angle | the waxed car; the note and the glossary; Table 11.4; cq5, p11 |
| capillary-action | result, eq-capillary-height | capillary-action | mercury and water in glass; the four tubes; Example 11.12; p5, p13, p15 |

The section leans on `force` and `weight` (4.x), `net-external-force`
(4.3), `pressure` (11.3), `gauge-pressure` and `absolute-pressure` (11.6),
`pressure-from-weight-of-fluid` (11.4), `density` (11.2) and
`atomic-arrangement-and-phase` (11.1); the coverage rows mark each as used
where the text uses it.

## Figures

id · replaces or Sim · concepts · value add · moving or still · sliders ·
headline · graph · 3D

1. `fig-bubbles` · photograph, Figure 11.24, the soap bubbles · kept: the
   text points at it ("See Figure 11.24") and it is the section's opening
   instance of cohesive forces at work · width 400, the book's caption and
   credit (Steve Ford Elliott).
2. `sim-surface-sheet` · replaces Figure 11.25 (a) and (b), the insect leg
   and the iron needle on a dented water surface · surface-tension,
   cohesive-forces · **intuition and variation by slider**: the book draws
   the surface as an elastic sheet and asks the reader to believe it; here
   the sheet dents under a weight the reader sets, the two restoring forces
   turn toward the vertical as the dent deepens, and the surface breaks and
   the body sinks when the weight is more than $\kgamma L$ can hold, none of
   which the still shows · **still**: a body resting on a surface is an
   equilibrium with no time in it, so the figure answers its sliders and
   registers no cycle (rule 14) · the weight $\kwgt$ of the body (0 to 8.00
   mN, force), the length $L$ of the contact line (2 to 100 mm, ink), the
   surface tension $\kgamma$ (0.010 to 0.100 N/m, surface-tension, with
   detents at Table 11.3's ethyl alcohol, soapy water, glycerin and water at
   20 °C, default water), and a choice of the body (insect's foot, default
   $L = 10$ mm and $\kwgt = 0.30$ mN, or iron needle, $L = 70$ mm and
   $\kwgt = 1.00$ mN), since which body rests there is a state, not a
   quantity (rule 26.1) · "A weight of 0.30 mN on a contact line 10 mm long
   dents the surface until its pull rises at 24° and holds the foot up." ·
   none: the cross-section of the dented surface with the two $\kFST$
   arrows, their net and $\kwgt$, and the book's free-body diagram beside it,
   is the picture · 2D. Readout: $\kwgt = \kgamma L\sin\theta$ with the live
   numbers and the angle it solves for; small line on the largest weight the
   surface can hold, $\kgamma L$, and on the surface breaking past it. Labels
   on: four arrows and two names. Draws force, surface-tension.
3. `sim-slide-wire` · replaces Figure 11.26, the sliding wire device ·
   surface-tension · **variation by slider and standardisation**: the book
   draws the device and says the force it measures gives the surface tension
   accurately; here the reader sets the force the balance reads and the
   length of the wire and the readout writes $\kgamma = \kF/(2l)$ and finds
   the liquid of Table 11.3 it matches, which is the identification the
   section's problems ask for · **still**: the wire is held in place and the
   force is read, a measurement with no clock (rule 14) · the force $\kF$ on
   the wire (0 to 8.00 mN, force) and the wire length $l$ (5.0 to 50.0 mm,
   ink); defaults are the keyed problem's 3.16 mN and 25.0 mm, which the
   figure reproduces on load as glycerin · "A force of 3.16 mN holds a wire
   25.0 mm long against two liquid surfaces, so the surface tension is 0.0632
   N/m, which is glycerin's." · below: Table 11.3's liquids on one fixed axis
   of surface tension, 0 to 0.10 N/m, with the measured value marked; the
   axis is fixed from the slider maxima and a value past its end goes through
   `pinned()`; mercury and gold lie beyond it and are named at the edge ·
   2D. Readout: $\kgamma = \kF/L = \kF/(2l)$ with the live numbers; small
   line naming the nearest liquid of the table or saying none is near. The
   twelve liquids on the axis would collide, so their names are off by
   default behind a Labels button with hover names, and the matched liquid is
   always named (rule 26.7). Draws force, surface-tension.
4. `sim-two-balloons` · replaces Figure 11.27, the two balloons joined by a
   tube · pressure-inside-a-bubble · **flow by animation and variation by
   slider**: the book's arrow shows air moving from the small balloon to the
   large one, which is a kinematic arrow (rule 24.1), and the surprise of the
   figure is the direction; here the valve opens, the small balloon empties
   into the large one, and $\kPr = 4\kgamma/r$ is written for both while it
   happens, so the reader sees the pressure of the shrinking balloon climb as
   its radius falls · **moving**: the emptying is a genuine clock, one of
   the three `ch11/config.md` allows; one loop opens the valve and runs the
   air across in about five seconds, then holds, and a slider change resets
   it · the two radii $r_1$ and $r_2$ (1.0 to 8.0 cm, ink, defaults 6.0 and
   3.0 cm as the book's picture has it) and the surface tension $\kgamma$ of
   the film (0.010 to 0.100 N/m, surface-tension, with the same detents,
   default soapy water) · "With the valve closed the small balloon holds 4.93
   Pa above the air outside and the large one 2.47 Pa, so air will flow from
   the small one to the large one." · none: the two balloons on the tube with
   the valve and the flow arrow are the picture, and a pressure bar under
   each states the two pressures on one fixed scale (0 to 40 Pa, the
   pressure of the smallest balloon at the largest surface tension) · 2D.
   Readout: $\kPr_1 = 4\kgamma/r_1$ and $\kPr_2 = 4\kgamma/r_2$ with the live
   numbers; small line on the air moving from the higher pressure to the
   lower until the small balloon is empty, and on the total volume being
   kept. Draws pressure, surface-tension.
5. `fig-alveoli` · the book's illustration of the alveoli, Figure 11.28 ·
   kept as the book draws it: the text points at it ("See Figure 11.28") and
   it is an anatomical drawing, not a sketch of a relation, so there is
   nothing a slider would open (rule 24.9) · width 300, a `photo` row with
   the book's caption.
6. `sim-surfactant` · replaces Figure 11.29, surface tension against surface
   area for lung surfactant, a detergent and interstitial fluid ·
   alveoli-and-surfactant, pressure-inside-a-bubble · **variation by slider
   and intuition**: the book's graph shows the surfactant's surface tension
   falling with area and says in words that this keeps small alveoli from
   collapsing; here the reader shrinks an alveolus and watches the pressure
   $4\kgamma/r$ inside it for each of the three linings, climbing steeply for
   the two fixed surface tensions and staying nearly level for the
   surfactant · **still**: the graph and the sac answer the slider and have
   no clock · the radius $r$ of the alveolus (0.020 to 0.100 mm, ink, default
   0.050 mm, the book's 0.1 mm diameter) · "At a radius of 0.050 mm the
   surfactant's surface tension is 0.030 N/m and the pressure inside the sac
   is 2.40 kPa, against 4.00 kPa for tissue fluid." · the graph is the idea
   and stands at the left with the book's axes (surface tension across,
   surface area up), the three lines told apart by `F.cat(i)` with a legend,
   and the sac with three pressure bars beside it; the axes are fixed at 0 to
   0.08 N/m and 0 to 0.04 mm² · 2D. The book prints no numbers on this graph,
   so the values are representative and the caption says so: tissue fluid at
   Table 11.3's 0.050 N/m, the detergent at soapy water's 0.037 N/m, and the
   surfactant rising from 0.010 N/m at the smallest area to 0.050 N/m at the
   largest. Readout: $\kPr = 4\kgamma/r$ for the surfactant with the live
   numbers; small line comparing the three pressures. Draws surface-tension,
   pressure.
7. `sim-contact-angle` · replaces Figure 11.30, water beaded on waxed paint
   and flattened on bare paint, keeping the photograph as its original
   (`ch11/config.md` allows this) · contact-angle, cohesive-forces,
   adhesive-forces · **variation by slider**: the book prints two drops at
   two angles; here the drop of a fixed volume takes every shape from a flat
   film to a nearly detached bead as the contact angle is dragged, with the
   tangent and the angle drawn as the book draws them · **still**: a drop at
   rest has no clock · the contact angle $\theta$ (0° to 180°, ink, with
   detents at Table 11.4's water–glass 0°, kerosene–glass 26°, water–silver
   90°, water–paraffin 107° and mercury–glass 140°, default 107°, the water
   on wax of the book's panel (a)) · "At a contact angle of 107° the
   cohesive forces win and the water stands as a bead on the wax." · none ·
   2D. Readout: the contact angle and the relation it states, which of the
   two forces is the stronger; small line naming the pair of Table 11.4 at a
   detent. Draws nothing typed: the angle, the drop and the surface are ink,
   and the figure lists no types.
8. `sim-capillary` · replaces Figure 11.31 + 11.32, mercury suppressed and
   water raised in glass, then tubes of decreasing radius and two liquids
   of different density · capillary-action, contact-angle, surface-tension,
   density · **variation by slider and standardisation**: the book draws
   four pictures of one relation; one tube whose liquid, contact angle and
   radius the reader sets reaches every one of them and the states between,
   with the meniscus curving the way the angle says, the two $\kFST$ arrows
   along the surface and their net up or down, and the graph of height
   against radius beside it · **still**: the column stands at its
   equilibrium height and the lesson is what that height is, not how fast it
   is reached, so the figure answers its sliders and registers no cycle; the
   rise `ch11/config.md` allows would need a drag model the book never
   gives · a choice of the liquid (water, ethyl alcohol, glycerin, mercury,
   olive oil, default water), which sets $\kgamma$ from Table 11.3 and
   $\krho$ from Table 11.1 together, since a liquid is a state and not a
   quantity (rule 26.1); the contact angle $\theta$ (0° to 180°, ink, with
   Table 11.4's detents, default 0°); and the tube radius $r$ (0.10 to 9.00
   mm, ink, default 0.500 mm, the moved problem's tube) · "Water in a glass
   tube 0.500 mm in radius, with a contact angle of 0°, is raised 2.97 cm."
   · beside: $\kh$ against $r$ for the chosen liquid and angle on fixed axes,
   $r$ from 0 to 9 mm and $\kh$ from −8 to 16 cm, the current point pinned
   at the edge when the column is taller than the frame · 2D. Readout:
   $\kh = 2\kgamma\cos\theta/\krho\kg r$ with the live numbers; small line
   on the sign, raised below 90° and suppressed above it, and on the column's
   weight limiting the height. The liquids are drawn as themselves: the
   clear ones as a faint ink tint with the name on the beaker, mercury as a
   denser grey tint of the same ink, since silver-grey is the physical fact
   of mercury and no type hue is borrowed for it. Draws position,
   surface-tension, density, force.
9. `sim-negative-pressure` · replaces Figure 11.33, the piston that
   stretches a liquid and the liquid that separates · capillary-action
   (reinforced), pressure, cohesive-forces · **variation by slider**: the
   book's two panels are two states of one pull; here the force on the
   piston is dragged up, the readout writes $\kPr = -\kF/A$ as the book
   does, and past the limit the liquid parts, which is panel (b) · **still**:
   a piston held against a stretched liquid has no clock · the force $\kF$
   on the piston (0 to 300 N, force) and the piston area $A$ (0.50 to 4.00
   cm², ink), defaults 100 N and 1.00 cm², a negative pressure of 9.87 atm ·
   "A pull of 100 N on a piston of 1.00 cm² puts the water under a negative
   pressure of 9.87 atm, and it holds." · none · 2D, the cylinder from a
   locked view (rule 28.2), since the book prints it in perspective.
   Readout: $\kPr = -\kF/A$ in pascals and atmospheres; small line on the
   height of water such a negative pressure could hold up, $\kh =
   |\kPr|/\krho\kg$, which is what lets sap reach the top of a tall tree. The
   limit at which the liquid separates is set at 25.0 atm, the value the
   book itself states for this device in the problem that 11.9 prints.
   Draws pressure, force, position.

Photographs: two, both kept and both pointed at by the text: the soap
bubbles (11.24) and the alveoli illustration (11.28), which is not a
photograph but is kept the same way. The beaded water of 11.30 is
transformed with the photograph as its original, as `ch11/config.md` allows.
No photograph is dropped.

Figures that serve exercises: the problems refer to Figure 11.26 (the
sliding wire) and Figure 11.32(a) (the tubes of different radius), both
figures of the text, so no image of the book's travels on an exercise card.
The piston figure the moved 11.9 problem refers to is Figure 11.33 of this
text, and that problem is unkeyed and left out in any case.

Extra simulations (rule 15), thought through, judged and decided:

- **Table 11.3 on one axis.** Folded into `sim-slide-wire` rather than
  built apart: the axis of surface tensions under the device is the table
  figure, and putting the measured value on it is what the two problems that
  name the table ask the reader to do.
- **The alveolus that empties into its neighbour.** Left: it is
  `sim-two-balloons` with smaller radii, and the text says so in as many
  words.
- **A needle placed point down.** Left: the text explains it in one
  sentence, and `sim-surface-sheet` already puts the contact length on a
  slider, so shortening $L$ until the surface breaks is the same lesson.
- **The chain of sap pulled up by transpiration.** Left: the book says the
  question is not completely resolved, and a picture would claim more than
  the text does.

## Exercises

- The chapter has no Check Your Understanding box, so nothing is inline
  (`ch11/config.md`); every item is set at the end.
- 7 conceptual questions of the section's own, none keyed, each an open item
  with an AI-marked suggested approach: `cq2` (fs-id1276085, surface tension
  cohesive or adhesive, Understand, citing `surface-tension`), `cq3`
  (fs-id3028474, capillary action cohesive or adhesive, Understand, citing
  `capillary-action`), `cq4` (fs-id1486629, ducks and swans on water,
  Analyze, citing `surface-tension`), `cq5` (fs-id2971778, the oily
  sunbather, Understand, citing `contact-angle`), `cq6` (fs-id2682132,
  capillary action in a weightless environment, Analyze, citing
  `capillary-action`), `cq7` (fs-id2437631, capillary action and a manometer,
  Analyze, citing `capillary-action`) and `cq8` (fs-id1993729, exhalation
  without muscle action, Understand, citing `alveoli`).
- 1 conceptual question moved out: `fs-id3245014`, the loaded oil tanker
  sitting lower in the water, is how deep a floating body sits and is set
  in 11.7 with `source_section: "11.8"` (`ch11/config.md`); this section's
  `exercise_notes` says so.
- 7 problems keyed and kept: `p1` (fs-id3123703, the alveolus with soapy
  water, 592 N/m²), `p3` (fs-id2684580, the soap bubble 0.100 m across,
  2.23 × 10⁻² mm Hg), `p5` (fs-id3013760, water in a 0.900 cm tube and the
  tube that raises it 4.00 cm, 1.65 × 10⁻³ m and 3.71 × 10⁻⁴ m), `p7`
  (fs-id1986155, the fluid in the slide wire device, 6.32 × 10⁻² N/m,
  glycerin), `p9` (fs-id2627309, bubbles of water, alcohol and soapy water,
  14.6, 4.46 and 7.40 N/m², alcohol the most stable), `p11` (fs-id3062468,
  the contact angle of olive oil, 5.1°) and `p13` (fs-id1910033, the ratio
  of the heights of water and mercury, −2.78).
- 1 problem taken from 11.9 with `source_section: "11.9"`: `p15`
  (fs-id2382586, how high water rises in a 0.500 mm glass tube and the
  potential energy it gains, 2.97 cm and 3.39 × 10⁻⁶ J, with the book's
  answer to part (c) in the solution). It is the capillary rise and nothing
  else (`ch11/config.md`), and 11.9's `exercise_notes` says so too.
- 7 problems left out, having no answer in the book's key: the surface
  tension of an alveolus's fluid (fs-id1993714), the force on a 3.50 cm
  slide wire in ethyl alcohol (fs-id909629), the xylem tube (fs-id2410017),
  the rubber balloon's effective surface tension (fs-id1427554), water in
  paraffin and silver tubes (fs-id3123947), the two soap bubbles that merge
  (fs-id3091822) and the ratio for ethyl alcohol and water (fs-id3035905);
  and the 11.9 problem on the device that reaches −25.0 atm (fs-id2392422),
  which `ch11/config.md` moves here, is unkeyed too and is left out. All are
  named in `notes` and `exercise_notes`.
- No AP test prep items: the chapter prints them all in 11.2 and 11.3.
- No generated questions: every node of the section has a book exercise that
  tests it.
- Weights: `p1` gives `alveoli-and-surfactant` 2 beside the full value for
  `pressure-inside-a-bubble`; `p5`, `p13` and `p15` give `capillary-action`
  the full value and `contact-angle` 2, since the angle is looked up and the
  work is the height; `p7` gives `surface-tension` the full value; `p11`
  gives `contact-angle` the full value and `capillary-action` 3, since the
  height equation is solved for the angle; `cq4` gives `surface-tension` the
  full value and `contact-angle` 2, since the feathers not wetting is the
  angle; `cq7` gives `capillary-action` the full value and `contact-angle`
  2; `cq8` gives `alveoli-and-surfactant` the full value and
  `pressure-inside-a-bubble` 2.

## Views

- Formulas: the five equations of the section already in `chapter.json`,
  the three stated and named ones important (`eq-surface-tension`,
  `eq-bubble-pressure`, `eq-capillary-height`) and the two steps
  (`eq-slide-wire-force`, `eq-insect-weight`) not.
- Definitions: the nine variables of the section, and five glossary terms,
  cohesive forces, adhesive forces, surface tension, contact angle and
  capillary action.
- Concept map: the seven nodes above with their edges into 4.x, 11.1, 11.2,
  11.3, 11.4 and 11.6.

## Colour

The page binds surface-tension, pressure, force, density and position, the
five `ch11/COLOR.md` allows it. Surface tension is on the slider of three
figures and in every readout; pressure is stated in the balloons, the
alveolus and the piston; force is the weight on the sheet, the restoring
forces of the surface, the pull on the wire and on the piston; density and
position are the liquid's density and the height it climbs in the capillary
tube, and the depth a negative pressure could hold up. The contact angle,
every length and radius, an area, a mass and a volume stay untyped and in
ink, as `ch11/config.md` decided. The three linings of `sim-surfactant`
and nothing else take the categorical palette; no liquid wears a type hue,
and mercury's grey is a tint of the page's ink.

## Wanted at chapter level

- variables `11.8/γ` → 11.8-surface-tension
- variables `11.8/F` → 11.8-surface-tension
- variables `11.8/F_ST` → 11.8-surface-tension
- variables `11.8/L_wire` → 11.8-surface-tension
- variables `11.8/P_press` → 11.8-bubbles
- variables `11.8/r` → 11.8-bubbles
- variables `11.8/θ` → 11.8-contact-angle
- variables `11.8/h` → 11.8-capillary-action
- variables `11.8/ρ_dens` → 11.8-capillary-action
- equations `eq-surface-tension` → 11.8-surface-tension
- equations `eq-slide-wire-force` → 11.8-surface-tension
- equations `eq-insect-weight` → 11.8-surface-tension
- equations `eq-bubble-pressure` → 11.8-bubbles
- equations `eq-capillary-height` → 11.8-capillary-action
- exercises: the conceptual question fs-id3245014 (the loaded oil tanker)
  is set in 11.7 with `source_section: "11.8"`, and the problem
  fs-id2382586 (water in a 0.500 mm capillary tube and its energy) is set
  here with `source_section: "11.9"`; this section's `exercise_notes` says
  both, and 11.7's and 11.9's should. The 11.9 problem fs-id2392422 (the
  device that reaches −25.0 atm) is unkeyed and left out of both sections.
- No concept or symbol row needs changing: `γ`, `F`, `F_ST`, `L_wire`,
  `P_press`, `r`, `h`, `θ`, `ρ_dens`, `w` and `g` are used as they stand.
- The `eq-slide-wire-force` row writes the half-length as $l$, which is no
  symbol row; the text and the figure write it the same way, in plain LaTeX
  and in ink, as $m_1$ and $m_2$ are written in 9.2. Nothing is wanted
  unless the chapter pass would rather have a row for it.
