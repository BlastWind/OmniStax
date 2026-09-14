# Plan: 12.2 Bernoulli’s Equation (m42206)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen’s standing instruction to finish the book in
waves; the per-section stop of rule 2, the plan review of rule 5 and the user
picks of rule 15 are replaced by this file, written before the section was
built and left for review after, as `ch12/config.md` records.

The section that turns the continuity of 12.1 into a statement about
pressure. A fluid that speeds up must have had work done on it, the work
comes from a pressure difference, and so the pressure falls where the fluid
moves fast: the shower curtain, the car beside the truck. Bernoulli’s
equation writes that as conservation of energy per unit volume, is reduced
to the static fluid of Chapter 11 and to Bernoulli’s principle at constant
depth, and the principle is followed into entrainment, wings and sails, and
the manometer and pitot tube. Four sketch figures (12.5 to 12.8), one worked
example, three Making Connections boxes, two glossary terms, four AP items,
fourteen conceptual questions and eight problems of which four are keyed.
Two more book figures, the Venturi (12.9) and the perfume bottle (12.10),
sit among the conceptual questions and travel on their cards, as the
chapter’s config decides. One page (rule 11).

## Sub-concepts (page headers)

The module prints its own headers from the second block on, and those are
kept as the book writes them (`ch12/config.md`); the opening passage has
none, so its header is the agent’s, taken from the book’s own italic phrase.

1. `pressure-drop` **Pressure drops in a rapidly moving fluid** (book: the
   opening paragraphs, the work-energy theorem, Figure 12.5, the Take-Home
   Investigation with a Sheet of Paper). `eq-work-energy-fluid` anchors here.
2. `bernoullis-equation` **Bernoulli’s Equation** (book: the header of that
   name; the equation, its two-point form, the proof that each term is an
   energy per unit volume, the Conservation of Energy box, the sentence that
   promises the special cases). The Sim of the three terms sits here. The
   variables $\kPr$, $\krho$, $\kv$, $\kh$, $\kg$, $\kProne$, $\kPrtwo$,
   $\kvone$, $\kvtwo$, $\khone$, $\khtwo$, $\kKE$, $\kPEg$, $V$, $\kWnet$ and
   $m$ and the equations `eq-bernoulli`, `eq-bernoulli-two-points`,
   `eq-ke-per-volume` and `eq-pe-per-volume` anchor here.
3. `static-fluids` **Bernoulli’s Equation for Static Fluids** (book: the
   header of that name and its two equations). `eq-bernoulli-static`.
4. `bernoullis-principle` **Bernoulli’s Principle—Bernoulli’s Equation at
   Constant Depth** (book: the header of that name; Example 12.4, Calculating
   Pressure: Pressure Drops as a Fluid Speeds Up, with its strategy, solution
   and discussion). `eq-bernoullis-principle`.
5. `applications` **Applications of Bernoulli’s Principle** (book: the one
   sentence under that header). No coverage rows of its own.
6. `entrainment` **Entrainment** (book: the sub-header of that name; Figure
   12.6).
7. `wings-and-sails` **Wings and Sails** (book: the sub-header of that name;
   Figure 12.7; the Take-Home Investigation with Two Strips of Paper).
8. `velocity-measurement` **Velocity Measurement** (book: the sub-header of
   that name; Figure 12.8 and its three equations). `eq-manometer-height`
   and `eq-speed-from-manometer`.

The book gives its one example no number in the CNXML; the publisher prints
it as Example 12.4, the chapter’s fourth after the three of 12.1, and the
page follows that. Its reference to the hose example of 12.1 was built as a
link to that page and is plain text after the chapter pass, as every other
page of the book writes a reference to an example on another page
(`ch12/config.md`); the problem that refers to the same example names it in
its prompt as plain text too. Learning objectives, the section summary and the two glossary
terms come out of the running text into the tables and the views (rule 4).

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| pressure-drops-in-fast-fluid | idea | pressure-drop | the opening argument; Figure 12.5; the sheet of paper; the questions on the train, the tornado, the plastic bag |
| bernoullis-equation | result, eq-bernoulli | bernoullis-equation | the equation and its two-point form; the pump on the hill; the assumptions question |
| bernoulli-energy-per-volume | idea, eq-ke-per-volume | bernoullis-equation | the proof term by term; the Conservation of Energy box; the first problem |
| bernoulli-static-fluid | result, eq-bernoulli-static | static-fluids | the static case; the AP item on the depth at which the pressure doubles |
| bernoullis-principle | result, eq-bernoullis-principle | bernoullis-principle | Example 12.4; the Boulder roof and the fire hose problems |
| entrainment | idea | entrainment | Figure 12.6; the Venturi, the T-shaped chimney, the limit to the height, the perfume bottle |
| lift-from-bernoulli | idea | wings-and-sails | Figure 12.7; taking off into the wind; the keel |
| velocity-measurement | result, eq-speed-from-manometer | velocity-measurement | Figure 12.8; the pitot tube at 700 km/h |

The section leans on `equation-of-continuity` and `incompressible-fluid`
(12.1), `pressure`, `force-from-pressure`, `density`,
`pressure-from-weight-of-fluid` and `manometer` (Chapter 11),
`work-energy-theorem`, `kinetic-energy`, `gravitational-potential-energy`
and `conservation-of-energy` (Chapter 7) and `newtons-third-law` (4.4); the
coverage rows mark each as used where the text uses it.

## Figures

id · replaces or Sim · concepts · value add · moving or still · sliders ·
headline · graph · 3D

1. `sim-car-truck` · replaces Figure 12.5, the overhead view of the car
   passing the truck · pressure-drops-in-fast-fluid, bernoullis-principle,
   equation-of-continuity · **variation by slider**: the book draws one
   gap and one pair of arrows, and the reader has to imagine that a
   narrower gap means faster air and a lower pressure; here the gap and the
   speed are dragged and the streamlines bunch, the arrow lengthens and the
   pressure difference is written live · **still**: a car and a truck held
   side by side while the air streams past is one state of a steady flow,
   and the book’s own arrows are the speeds, not a motion to replay (rule
   24.9; `ch12/config.md` keeps every figure of this section still) ·
   $\kvone$, the speed of the air past the outside of the vehicles (5 to
   35 m/s, default 25, velocity), and the gap between the vehicles (1.2 to
   3.0 m, default 1.5, ink, a scene length). The air that passes between
   them is taken to have come from a band 3.0 m wide before the vehicles
   pinched it, so the equation of continuity gives
   $\kvtwo = \kvone(3.0\ \text{m})/d$, and the difference in pressure is
   $\tfrac12\krho(\kvtwo^2 - \kvone^2)$ with the book’s density of air,
   1.29 kg/m³. Only the difference is stated, since the section gives the
   pressure outside no value of its own · “With the vehicles 1.5 m apart
   the air between them moves at 50 m/s, and the pressure there is 1210
   N/m² below the pressure outside.” · none: the overhead view with the
   streamlines, the two speed arrows and the inward push on each vehicle
   drawn to the scale of the pressure difference is the picture · 2D.
   Labels on: two speeds, two pressures, the two vehicles, six in all.
   Draws velocity, pressure, density.
2. `sim-bernoulli` · Sim (it replaces no figure of the book) ·
   bernoullis-equation, bernoulli-energy-per-volume, bernoulli-static-fluid,
   bernoullis-principle · **variation by slider and intuition**: the book
   states that the sum of three terms is constant and proves that each is
   an energy per unit volume, and never draws it; here a bit of water is
   followed from point 1 to point 2 of a tube that changes height and
   width, and the three terms are drawn as bars, pressure in its own hue
   and the two energies per unit volume in theirs, whose total is ruled
   across in ink and never moves (`ch12/COLOR.md`) · **still**: the sum is
   a bookkeeping between two points, and the fluid’s passage from one to
   the other has no clock the idea needs · $\kvone$ and $\kvtwo$ (0 to
   10 m/s, defaults 4.0 and 9.0, velocity), $\khone$ and $\khtwo$ (0 to
   10 m, defaults 0 and 5.0, position); the pressure at point 1 is held at
   $1.50 \times 10^5$ N/m², the fluid is water, and the pressure at point 2
   follows. A choice of case, which is a state and not a quantity (rule
   26.1), set as a dropdown because a row of three would wrap in the
   controls grid: any two points (the default), a static fluid, which holds both
   speeds at zero and greys their sliders, and constant depth, which holds
   $\khtwo$ at $\khone$ and greys its slider; the readout writes the
   equation in the form the book gives that case · “Between point 1 and
   point 2 the water speeds up from 4.0 to 9.0 m/s and rises 5.0 m, so its
   pressure falls from 1.50 × 10⁵ to 0.69 × 10⁵ N/m².” · below: two stacked
   bars, one per point, on a fixed axis of 0 to 3.0 × 10⁵ J/m³, which is
   the largest total the sliders can make · 2D. Labels on: the two points,
   two heights, two speeds, two pressures, and a legend for the three
   terms; the values of the segments are written beside each bar, never on
   it, and an ink rule parts the segments, since two hues of the scheme may
   sit close.
   Draws pressure, energy, velocity, position, density, acceleration.
3. `sim-entrainment` · replaces Figure 12.6, the four entrainment devices ·
   entrainment, bernoullis-principle, equation-of-continuity · **variation
   by slider and standardisation**: the book draws four devices and asks
   the reader to see the one mechanism in all of them; here the mechanism
   is drawn once, a stream of air through a tube that narrows, with a side
   tube from the narrow part down into water open to the atmosphere, and
   the reader drags the speed and the narrowing and watches the water climb
   the side tube as the pressure in the stream falls, and be carried off as
   a spray once it reaches the top, which is the atomizer, the aspirator
   and the carburetor, while the Bunsen burner and the chimney entrain air
   the same way. The four devices stay as the figure’s original · **still**:
   the stream is steady, and the water’s level answers the speed and
   nothing else · $\kvone$, the speed of the air entering the tube (0 to
   40 m/s, default 20, velocity), and the narrowing $A_1/A_2$ (1.0 to 2.0,
   default 1.5, ink, a ratio of areas). Continuity gives
   $\kvtwo = \kvone A_1/A_2$, the pressure in the constriction is below
   atmospheric by $\tfrac12\krho\kvtwo^2$ with air at 1.29 kg/m³, and the
   water stands $\kh$ higher in the side tube by Chapter 11’s
   $\kh\krho\kg$, the side tube being 20 cm tall · “Air at 30 m/s in the
   constriction has a pressure 581 N/m² below the air outside, and the water
   climbs 5.9 cm of the tube.” · none: the tube in section with the side
   tube and beaker beneath the constriction is the picture · 2D. Labels on:
   the two speeds, the pressure outside and in the constriction, the height,
   the water and the drops, seven in all and none on anything that moves.
   Draws velocity, pressure, density, position.
4. `sim-wing-sail` · replaces Figure 12.7 (a) and (b), the wing and the
   sail, one number with two originals · lift-from-bernoulli,
   bernoullis-principle · **variation by slider**: the book draws two
   pressures and says one is smaller; here the two speeds are dragged, the
   streamlines on the fast side bunch, and the net pressure on the surface
   is drawn to scale and written as a force on each square meter ·
   **still**: a wing or a sail held in a steady wind is one state, and the
   book’s streamline arrows are speeds, not a motion · a choice of wing or
   sail, since which surface is on show is a state (rule 26.1), each with
   its own pair of sliders shown only while it is chosen, so that each
   scene keeps a fixed scale from its own maxima: for the wing, the speed
   of the air over the top $\kvtwo$ and under the bottom $\kvone$ (0 to
   100 m/s, defaults 72 and 60, velocity); for the sail, the speed of the
   air along the front $\kvtwo$ and along the back $\kvone$ (0 to 12 m/s,
   defaults 8.0 and 5.0, velocity). The difference in pressure is
   $\tfrac12\krho(\kvtwo^2 - \kvone^2)$ with air at 1.29 kg/m³ · “Air at 72
   m/s over the wing and 60 m/s under it leaves the pressure below the wing
   1022 N/m² higher than the pressure above, which is a lift of 1022 N on
   every square meter of wing.” · none · 2D. Labels on: two speeds, the
   pressure difference, the wing or the sail and the hull, five in all.
   Draws velocity, pressure, density.
5. `sim-manometer` · replaces Figure 12.8 (a) and (b), the two tubes and
   the Prandtl tube, one number with two originals · velocity-measurement,
   bernoullis-principle, manometer · **variation by slider**: the book
   draws one height and writes $\kh \propto \tfrac12\krho\kvtwo^2$; here
   the speed is dragged and the manometer’s column answers as the square of
   it, so the reader sees why doubling the speed quadruples the height and
   why the fluid in the manometer matters · **still**: a manometer at a
   steady speed stands still · $\kvtwo$, the speed of the air past the
   tubes (0 to 200 m/s, default 55.6, which is 200 km/h, velocity); a
   choice of device, the two separate tubes of panel (a) or the coaxial
   Prandtl tube of panel (b), which is a state; and a choice of manometer
   fluid, mercury (the default, $13.6 \times 10^3$ kg/m³) or water
   ($1.00 \times 10^3$ kg/m³), both from Chapter 11’s table. The height is
   $\kh = \tfrac12\krho\kvtwo^2/\rho'\kg$ with air at 1.29 kg/m³; at the
   default it is 15.0 mm of mercury, which is the reading the section’s
   pitot problem gives at 200 km/h. The manometer is drawn 25 cm tall, so
   mercury always fits and water is pushed out above about 61 m/s; the
   column is then pinned at the top with a hollow marker and the headline
   says so, since the scale never follows the slider · “Air at 55.6 m/s
   leaves the pressure at the side opening 1.99 × 10³ N/m² below the
   pressure at the dead spot, and the mercury stands 15.0 mm higher on
   that side.” · none · 2D. Labels on: the two openings with their speeds,
   the two pressures, the height and the manometer fluid, seven in all.
   Draws velocity, pressure, position, density, acceleration.

Photographs: one, the perfume bottle of Figure 12.10, which the conceptual
question about the atomizer refers to; it travels on that question’s card
with the book’s caption and credit, as `ch12/config.md` decides for every
exercise image of the chapter, and is not a figure row. The Venturi of
Figure 12.9 is a drawing among the conceptual questions and travels on the
Venturi question’s card the same way; it is not redrawn.

Figures that serve exercises: the two above, both on cards. The problems of
the section refer to Figure 12.8 (the pitot tube) and to the hose example
of 12.1, and to nothing of their own.

No figure for Example 12.4: the hose and its nozzle add no quantity that
`sim-bernoulli` at constant depth does not show, and the nozzle’s 25.5 m/s
lies beyond a scale chosen so that the three terms stay comparable.

Extra simulations (rule 15), thought through, judged and decided:

- **The three terms as bars (`sim-bernoulli`): built.** The section’s whole
  argument is that pressure is an energy per unit volume and that the sum
  is constant, and the book never draws it.
- A fold of the manometer of 12.8(a) with the pitot tube of 12.8(b): they
  are already one number with two panels, so the choice in `sim-manometer`
  is that fold without a second number.
- The shower curtain bulging inward. Left: `sim-car-truck` is the same
  picture, a fast stream beside a slow one, and the curtain adds nothing.
- The sheet of paper lifting when blown over. Left: it is the wing of
  `sim-wing-sail` in another guise, and the Take-Home Investigation asks
  the reader to do it rather than watch it.
- The pump on the hill of the second AP item. Left: it is `sim-bernoulli`
  with a height of 150 m, and drawing it would answer the item.

## Exercises

- All exercises sit at the end: the chapter has no Check Your Understanding
  box (`ch12/config.md`), and none of the conceptual questions is a short
  enough check on one passage to move inline.
- 4 AP items of the section’s own. `ap1` (fs-id1292491, the depth at which
  the pressure is twice atmospheric) is keyed (a) and is a graded choice,
  Apply; its stem has lost the lake it once described and is kept as the
  book prints it, `exercise_notes` saying so. `ap2` (fs-id1479037, the
  pump that lifts water 150 m to a house) has no key and is an open item
  with an AI-marked approach, Apply. `ap3` (fs-id1497466, constant pressure
  and rising kinetic energy per unit volume) is keyed (a) and is a graded
  choice, Understand. `ap4` (fs-id1727123, the two circumstances along a
  fluid path) has no key and is an open item with an AI-marked approach,
  Analyze.
- 14 conceptual questions, none keyed, each an open item with an AI-marked
  suggested approach: `cq1` the thumb over the hose (Understand), `cq2` the
  fountain and the faucet (Analyze), `cq3` the car and the truck of Figure
  12.5 (Understand, citing `pressure-drop`), `cq4` an example of entrainment
  (Understand), `cq5` the Venturi (Understand, with Figure 12.9 on its
  card), `cq6` the T-shaped chimney (Apply), `cq7` the limit to the height
  (Analyze), `cq8` taking off into the wind (Understand), `cq9` roofs and
  tornadoes (Apply), `cq10` the keel (Analyze), `cq11` the passing train
  (Understand), `cq12` the assumptions of Bernoulli’s equation (Understand),
  `cq13` the perfume bottle (Understand, with Figure 12.10 on its card) and
  `cq14` the plastic bag out of the car window (Apply).
- 4 problems keyed and kept: `p1` (fs-id3176552, that pressure has units
  of energy per unit volume, an open item carrying the book’s own
  derivation, Understand), `p3` (fs-id3200825, the pitot tube at 700 km/h,
  keyed 184 mm Hg, Apply), `p5` (fs-id2423711, the Boulder roof, keyed
  2.54 × 10⁵ N, Apply) and `p7` (fs-id1909948, the fire hose and nozzle,
  keyed 1.58 × 10⁶ N/m² and 163 m, Analyze).
- 4 problems left out, having no answer in the book’s key: the factor by
  which the wind speed must rise to double the manometer’s height
  (fs-id1994566), the maximum height the hose of Example 12.2 can squirt
  (fs-id1997770), the force on a square meter of sail (fs-id1022777) and
  the derivation of the pitot tube’s speed from a mercury manometer
  (fs-id3091422). They are named in `notes` and in `exercise_notes`.
- Nothing is taken from another section and nothing of this section’s own
  is held back (`ch12/config.md`).
- No generated questions: every node of the section has a book exercise
  that tests it.
- Weights: an item that turns on one concept and touches another gives the
  second a smaller weight: `cq1` and `cq2` give `equation-of-continuity`
  the full value and the Bernoulli concept 3; `cq3`, `cq9` and `cq14` give
  `pressure-drops-in-fast-fluid` the full value and `bernoullis-principle`
  3 or 2; `cq5` gives `entrainment` the full value and the continuity and
  the principle 2 each; `cq7` gives `entrainment` the full value and
  `pressure-from-weight-of-fluid` 3; `cq12` gives `bernoullis-equation` the
  full value and `incompressible-fluid` 2; `ap1` gives
  `bernoulli-static-fluid` the full value and `pressure-from-weight-of-fluid`
  3; `ap2` gives `bernoullis-equation` the full value and
  `equation-of-continuity` 2; `ap3` and `ap4` split between the equation
  and the energy-per-volume idea; `p3` gives `velocity-measurement` the
  full value and `bernoullis-principle` 2; `p5` gives `bernoullis-principle`
  the full value and `force-from-pressure` 2; `p7` gives
  `bernoullis-principle` the full value, `equation-of-continuity` 3 and
  `bernoullis-equation` 2, since part (b) needs the height term.

## Views

- Formulas: the nine equations of the section already in `chapter.json`,
  the six stated and named ones important and the work-energy theorem and
  the two proportionalities not; anchors under Wanted below.
- Definitions: the sixteen variables of the section, and two glossary terms,
  Bernoulli’s equation and Bernoulli’s principle.
- Concept map: the eight nodes above with their edges into 4.4, 7.x, 11.x
  and 12.1.

## Colour

The page binds pressure, density, velocity, position, energy and
acceleration, the union of what its five figures draw (`ch12/COLOR.md`):
every figure writes a pressure difference and a speed and states the density
of air or water; `sim-bernoulli` and `sim-manometer` measure a height and
state $\krho\kg\kh$, so position and acceleration; `sim-bernoulli` draws the
two energies per unit volume as bars in the energy hue and the pressure term
in the pressure hue, with the constant total ruled in ink. The gap between
the vehicles, the ratio of areas, the volume $V$, the mass $m$, the areas
and the tube lengths are untyped and in ink. The pressures the book writes
with descriptive subscripts, $P_\text{o}$, $P_\text{i}$, $P_\text{t}$,
$P_\text{b}$, $P_\text{front}$, $P_\text{back}$ and the manometer fluid’s
$\rho'$, have no symbol rows and are written in plain LaTeX in the prose;
the figures draw them in the pressure and density hues, since a canvas
label takes the colour of its type.

## Wanted at chapter level

- variables `P_press` → 12.2-bernoullis-equation
- variables `ρ_dens` → 12.2-bernoullis-equation
- variables `v` → 12.2-bernoullis-equation
- variables `h` → 12.2-bernoullis-equation
- variables `g` → 12.2-bernoullis-equation
- variables `P_1` → 12.2-bernoullis-equation
- variables `P_2` → 12.2-bernoullis-equation
- variables `v_1` → 12.2-bernoullis-equation
- variables `v_2` → 12.2-bernoullis-equation
- variables `h_1` → 12.2-bernoullis-equation
- variables `h_2` → 12.2-bernoullis-equation
- variables `KE` → 12.2-bernoullis-equation
- variables `PE_g` → 12.2-bernoullis-equation
- variables `V` → 12.2-bernoullis-equation
- variables `W_net` → 12.2-pressure-drop
- variables `m` → 12.2-pressure-drop
- equations `eq-work-energy-fluid` → 12.2-pressure-drop
- equations `eq-bernoulli` → 12.2-bernoullis-equation
- equations `eq-bernoulli-two-points` → 12.2-bernoullis-equation
- equations `eq-ke-per-volume` → 12.2-bernoullis-equation
- equations `eq-pe-per-volume` → 12.2-bernoullis-equation
- equations `eq-bernoulli-static` → 12.2-static-fluids
- equations `eq-bernoullis-principle` → 12.2-bernoullis-principle
- equations `eq-manometer-height` → 12.2-velocity-measurement
- equations `eq-speed-from-manometer` → 12.2-velocity-measurement
- The prose writes $P_\text{o}$, $P_\text{i}$, $P_\text{t}$, $P_\text{b}$,
  $P_\text{front}$, $P_\text{back}$ and $\rho'$ in plain LaTeX and in ink,
  as 9.2 writes $m_1$ and $m_2$; nothing is wanted unless the chapter pass
  would rather have pressure and density rows for them.

Applied in the chapter pass (2026-09-14): every anchor above is written on its
row. No rows are made for $P_\text{o}$, $P_\text{i}$, $P_\text{t}$,
$P_\text{b}$, $P_\text{front}$, $P_\text{back}$ or $\rho'$: each appears
in one passage of one page and the book gives none of them a meaning of its
own, so they stay in plain LaTeX in the prose, as 9.2's $m_1$ and $m_2$ do.
The link on Example 12.2 is plain text now, the chapter's decision for every
cross-reference. The evidence of `lift-from-bernoulli` was corrected: it had
cited the aircraft-wing problem, which is 12.3's, and now names this
section's figure, its two conceptual questions and its sail problem.
