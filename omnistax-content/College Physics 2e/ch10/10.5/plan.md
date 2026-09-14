# Plan: 10.5 Angular Momentum and Its Conservation (m42182)

Source: `source.md` (converted from CNXML). Status: begun and cut off, then
resumed and finished 2026-09-14 without a review stop, on Chen's instruction to finish the book in waves; the plan is
left here for review after, as `ch10/config.md` records.

The section that gives rotation its momentum. Four worked examples (10.11 the
Earth, 10.12 the lazy Susan, 10.13 the kick, 10.14 the skater), four
narrative figures (10.23 to 10.26), one of them a photograph, five more
figures inside exercises (10.27 to 10.31), two Making Connections boxes, one
book header ("Conservation of Angular Momentum"), one keyed Check Your
Understanding box, ten AP items of its own and eight taken from 10.3 and
10.6, thirteen conceptual questions and seven problems, three of them keyed.
One page (rule 11).

## Sub-concepts (page headers)

1. `angular-momentum` **Angular momentum, the rotational analog of linear
   momentum** (book: the opening questions, the definition $\kL = \kI\kw$,
   the units, the Making Connections box, Example 10.11). The variables
   $\kL$, $\kI$, $\kw$, $M$ and $R$ and the equation `eq-angular-momentum`
   anchor here.
2. `torque-and-angular-momentum` **Torque changes angular momentum** (book:
   the merry-go-round paragraph, $\text{net}\;\ktau = \kdLang/\kdt$ as the
   rotational form of Newton's second law, Example 10.12 with Figure 10.23,
   Example 10.13 with Figure 10.24, the Making Connections: Conservation
   Laws box). $\ktau$, $\kdLang$, $\kdt$ and
   `eq-torque-changes-angular-momentum` anchor here.
3. `conservation` **Conservation of Angular Momentum** (the book's own
   header, kept: why Earth keeps spinning, tidal friction, the derivation
   from $\text{net}\;\ktau = 0$ to $\kL = \kLprime$). $\kLprime$ and
   `eq-conservation-of-angular-momentum` anchor here.
4. `skater` **The spinning skater: a smaller moment of inertia means a
   faster spin** (book: the skater paragraph, $\kI\kw = \kIprime\kwprime$,
   Figure 10.25, Example 10.14 with its rotational kinetic energies).
   $\kIprime$, $\kwprime$, $\kKErot$, $\kKErotprime$ and
   `eq-spin-rate-from-inertia` anchor here.
5. `collapse` **Tornadoes, the Solar System and a floating astronaut**
   (book: the paragraph on tornadoes and the birth of the Solar System,
   Figure 10.26, the paragraph on human motion and the astronauts). The
   Check Your Understanding box is set inline after this span.

The book's cross references are plain text: "Uniform Circular Motion and
Gravitation" as the book prints it, and Figure 10.12 of 10.3 for the sphere's
moment of inertia. The symbols the page colours are the ones it binds (see
Colour): $F$, $r$, $r_\perp$, $M$, $R$, $m$, $v$, $p$, $\alpha$ and $\theta$
stay in plain LaTeX. The Earth example's $M$ and $R$ are untyped in ink, as
the chapter's colour plan says of masses; $R$ has a position row in the
chapter's variables and the anchor below sends it to this page in ink.

Learning objectives, section summary and glossary come out of the running
text into the views.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| angular-momentum | idea | angular-momentum | glossary (angular momentum); Example 10.11; problems 1, 3; AP 1, 3, 9; the lever items from 10.3; the seesaw item from 10.6 |
| torque-changes-angular-momentum | result | torque-and-angular-momentum | Examples 10.12 and 10.13; AP 1, 2, 3, 4; the Ferris wheel from 10.3; the cyclist, screwdriver, fan and door from 10.6 |
| conservation-of-angular-momentum | result | conservation | glossary (law of conservation of angular momentum); CQ 1, 4, 5, 9, 10, 13; AP 6, 10 |
| spin-rate-from-moment-of-inertia | result | skater | Example 10.14(a); CQ 2, 3, 7, 11; AP 5, 7, 8; problem 5 |
| work-done-in-pulling-in | idea | skater | Example 10.14(b) and its discussion; CQ 6 |

The section leans on `linear-momentum`, `impulse` and
`newtons-second-law-momentum` (8.1 and 8.2), `conservation-of-momentum` and
`isolated-system` (8.3), `torque` (9.2), `moment-of-inertia` and
`mass-distribution-and-inertia` (10.3), `rotational-kinetic-energy` (10.4),
`work` and `work-transfers-energy` (7.1 and 7.2), and `angular-velocity`
(10.1), which the coverage rows mark as used where the text uses them.

## Figures

id · replaces · concepts · value add · motion · sliders · headline · graph · 3D

1. `sim-lazy-susan` · replaces Figure 10.23 (the partygoer and the lazy
   Susan) · torque-changes-angular-momentum, angular-momentum · value add:
   flow by animation and variation by slider; the book's still shows one
   force arrow, and the reader has to imagine the angular momentum growing
   while the torque acts and staying put after, which is what the graph
   shows · **moves**: the tray, seen from above, starts at rest, a hand
   pushes at its rim while the torque acts, the torque's turning arc is
   drawn only during the push, and the tray then coasts at the angular
   velocity it has been given; the idea has a clock in it (a torque acting
   for a time), so it cycles once per push and coast and gets the scrubber ·
   net torque $\ktau$ (0.10 to 1.50 N·m, default 0.650, torque, a detent at
   the book's 0.650), the time the push lasts $\kdt$ (0.05 to 0.50 s,
   default 0.150, time), the tray's moment of inertia $\kI$ (0.05 to 0.50
   kg·m², default 0.135, rotational-inertia, a detent at the book's disk of
   4.00 kg and 0.260 m) · "After 0.150 s the push is over and the tray
   carries 0.0975 kg·m²/s of angular momentum, turning at 0.721 rad/s." ·
   graph below: $\kL$ against $\kt$, a ramp of slope net $\ktau$ while the
   torque acts and a level line after, axes fixed at 0 to 2.0 s and 0 to
   0.40 kg·m²/s (a ramp past the top is clipped and its end pinned) · 2D.
   Readout: $\kdLang = (\text{net}\;\ktau)\kdt$ with the numbers; small
   line on $\kw = \kL/\kI$. Labels on: the tray, the hand and the arc are
   three things and none moves under a label. Draws torque, time,
   rotational-inertia, angular-momentum, angular-rate.
2. `sim-kick` · replaces Figure 10.24 (the kicking leg) ·
   torque-changes-angular-momentum, work-done-in-pulling-in (its energy
   side), rotational-kinetic-energy (used) · value add: animation and
   variation; the example adds the angular acceleration and the rotational
   kinetic energy, which the lazy Susan does not show, and the reader
   watches the leg swing through the angle while its kinetic energy climbs
   · **moves**: the lower leg hangs from the knee and swings forward under a
   constant torque through the set angle, then holds; one kick per loop,
   with the scrubber · net torque $\ktau$ (10 to 80 N·m, default 44.0,
   torque), the leg's moment of inertia $\kI$ (0.50 to 3.00 kg·m², default
   1.25, rotational-inertia), the angle swung through $\theta$ (10° to 90°,
   default 57.3°, ink, a detent at 57.3°, which is 1.00 rad) · "After 0.238
   s the leg has swung through 57.3° and turns at 8.39 rad/s, carrying 44.0
   J of rotational kinetic energy." · graph beside the tall scene:
   $\kKErot$ against $\theta$, a straight line of slope net $\ktau$ with the
   moving point, axes fixed at 0 to 90° and 0 to 140 J · 2D. Readout:
   $\kKErot = \tfrac{1}{2}\kI\kw^2$ with the numbers; small line on
   $\alpha = \text{net}\;\tau/I$ and $\omega^2 = 2\alpha\theta$ in plain
   text, since angular acceleration is not a type this page binds. Labels
   on: knee, leg and the two arcs. Draws torque, rotational-inertia,
   angular-rate, energy.
3. `fig-skater` · keeps Figure 10.25 (the skater's two poses) as a
   photograph · spin-rate-from-moment-of-inertia · the text points at it
   twice ("as seen in Figure 10.25", "such as the one in Figure 10.25") and
   it shows the thing the passage is about; it is one image at the book's
   275 px, kept with the book's caption. The chapter config expected two
   originals under one number, but the bundle prints both poses in one
   image, so the row has one.
4. `sim-skater` · Sim (replaces nothing; the see-saw of two bars the
   chapter's exploration asked for) · spin-rate-from-moment-of-inertia,
   conservation-of-angular-momentum, work-done-in-pulling-in · value add:
   intuition and variation; the photograph shows two poses and the reader
   has to take the numbers on trust, while here the moment of inertia and
   the angular velocity trade places under a bar that does not move ·
   **moves**: the skater, seen from the front, spins at the angular
   velocity conservation gives her, her arms foreshortening as she turns,
   and speeds up as the slider brings them in (she is drawn as her own
   front-on sprite rather than with the library's `person()`, which is a
   side view whose two hands reach one point, because her arms spreading
   symmetrically and closing is the idea of the figure); a spin has a clock but no end,
   so the cycle is endless and the transport has play, stop and speed with
   no scrubber · her moment of inertia $\kI$ (0.363 to 2.34 kg·m², default
   2.34, rotational-inertia, detents at the book's 2.34 arms out and 0.363
   arms in; the reader drags it and the arms follow), her angular velocity
   with her arms out $\kwo$ (0.20 to 1.50 rev/s, default 0.800,
   angular-rate) · "With her arms out she spins at 0.800 rev/s; pulled in to
   0.363 kg·m² the same angular momentum spins her at 5.16 rev/s." · four
   bars beneath the skater on fixed caps: $\kI$ to 2.5 kg·m², $\kw$ to 10
   rev/s, $\kL$ to 25 kg·m²/s (this one does not move) and $\kKErot$ to
   250 J, a value past a cap pinned at the cap with its number · 2D.
   Readout: $\kI\kw = \kIprime\kwprime$ with the numbers; small line on the
   rotational kinetic energy before and after and the work that made the
   difference. Labels on: one skater, four named bars. Draws
   rotational-inertia, angular-rate, angular-momentum, energy.
5. `sim-cloud` · replaces Figure 10.26 (the Solar System coalescing) ·
   conservation-of-angular-momentum, spin-rate-from-moment-of-inertia ·
   value add: animation and variation; the book's three panels ask the
   reader to imagine the cloud shrinking and spinning up, and here it does,
   with the same bars as the skater so the two are seen to be one law ·
   **moves**: a rotating cloud of gas and dust, drawn as a disk of ink
   particles, contracts over the loop to the set fraction of its radius
   while its particles keep their angular momentum and orbit faster, a
   central body brightening as it forms; one contraction per loop, with the
   scrubber · how far the cloud contracts $R'/R$ (0.25 to 0.90, default
   0.50, ink, a dimensionless ratio; the far end stops short of 1.00, where
   nothing would contract) · "Contracted to half its radius the
   cloud has a quarter of its moment of inertia and spins four times as
   fast." · three relative bars beneath the scene: $\kI$ against its
   starting value, $\kw$ against its starting value on a cap of 16 (the
   ratio at the slider's far end), and $\kL$, which does not move · 2D.
   Readout: $\kIprime\kwprime = \kI\kw$ written as $\kwprime/\kw =
   \kI/\kIprime = (R/R')^2$ with the number, since the cloud's mass and the
   book's figure carry no units. The one slider is the one thing the idea
   varies; a starting rate would be a number the book does not give. Labels
   on: the cloud, the forming Sun and the bars. Draws rotational-inertia,
   angular-rate, angular-momentum.

The five figures inside exercises travel on their cards' `figure` field, as
`ch10/config.md` settles for this chapter: 10.27 the child on the platform
(`ap5`), 10.28 the moon's orbit (`ap6`), 10.29 the four ways off a
merry-go-round (`cq2`, where the book prints it, and `cq3`, which refers to
it), 10.30 the diver (`cq11`) and 10.31 the rifled cannon barrel (`cq13`).
Every image is copied to `media/ch10/` under the bundle's name.

Depth (rule 28): every scene is planar with the plane of rotation or the
plane of the swing as the canvas; nothing here is printed in perspective.

Extra simulations (rule 15), considered and left:

- The Earth's spin slowing under tidal friction over 900 million years: a
  real view, but the book gives one number (an 18 h day) and no torque, so
  the curve would be invented. Left.
- The child walking in on the platform (AP item 5): the skater sim is the
  same law with the same bars, and the platform is one state of it. Left.
- The astronaut who twists but does not turn (zero angular momentum kept):
  a still could only restate the sentence. Left.

None built.

## Exercises

- Check Your Understanding `cyu-analogy` (fs-id3112286), Understand, open,
  the book's answer, set inline after `collapse`, citing `angular-momentum`.
- 10 AP items of the section's own, `ap1` to `ap10`: `ap1` (fs-id1520916,
  the best system to measure a changing angular momentum, keyed (a),
  Evaluate), `ap2` (fs-id1798043, the least helpful measurement, unkeyed,
  kept open with its options and an AI-marked approach, Analyze), `ap3`
  (fs-id1545671, the torque for 25 N·m·s in 3.5 s, keyed (a), Apply), `ap4`
  (fs-id2840694, the best way to produce a measurable torque, unkeyed,
  open with options, Evaluate), `ap5` (fs-id1597661, the child on the
  platform, Figure 10.27 on the card, keyed (b), Understand), `ap6`
  (fs-id1631548, the moon's elliptical orbit, Figure 10.28 on the card,
  unkeyed, open, Analyze), `ap7` (fs-id1445572, the hamster on the lazy
  Susan, keyed (c), Apply), `ap8` (fs-id1722786, the layer that breaks off
  the Earth, unkeyed, open, Apply), `ap9` (fs-id1665126, the two systems of
  disks, keyed (b), Analyze), `ap10` (fs-id2019185, the bat and the ball,
  unkeyed, open, Apply).
- 3 AP items taken from 10.3 with `source_section: "10.3"`: `ap11`
  (fs-id438270, the loaded Ferris wheel, open, Analyze), `ap12`
  (fs-id1500072, the lever and the rock, keyed (d), Analyze), `ap13`
  (fs-id2003821, the same lever as a setup, open, Analyze).
- 5 AP items taken from 10.6 with `source_section: "10.6"`, the five that
  10.6's own `exercise_notes` sends here (the box on the seesaw stays in 10.6
  as a collision): `ap14` (fs-id2159515, the cyclist's higher gear, keyed
  (c), Analyze), `ap15` (fs-id1526286, the electric screwdriver, open,
  Analyze), `ap16` (fs-id1519591, why the shape of an object matters for its
  angular momentum, keyed (d), Understand), `ap17` (fs-id1581467, the
  tabletop fan, open, Create), `ap18` (fs-id1686879, a system to demonstrate
  torque changing angular momentum, the book's own answer, open, Create).
- 13 conceptual questions, `cq1` to `cq13`, Understand unless said, with
  AI-marked suggested approaches: the car that rocks (fs-id2410017), the
  child walking in (fs-id2640407, Figure 10.29), the four ways off
  (fs-id1994709, Figure 10.29, Analyze), the tail rotor (fs-id2052739), the
  two sets of blades (fs-id3180885), the skater's work (fs-id2446255,
  Analyze), the expanding atmosphere (fs-id2595479), the flywheel
  (fs-id1985120), the jet turbine (fs-id3450198), the astronaut's bolt
  (fs-id3093611), the diver (fs-id1080849, Figure 10.30), the diver's
  free-body diagram (fs-id1860696, Apply) and the spinning bullet (eip-746,
  Figure 10.31).
- 3 problems keyed and kept: `p1` (fs-id1615758, the Earth's orbital and
  spin angular momenta, multi with the book's ratio in the solution,
  Apply), `p3` (fs-id1426438, the antique car's crank, number, Apply), `p5`
  (fs-id3173435, the three children on the merry-go-round, number, Apply).
- 4 problems left out, having no answer in the book's key: 2
  (fs-id3260323, the Moon), 4 (fs-id1215909, the child who grabs the edge),
  6 (fs-id2051402, the skater at 6.00 rev/s) and the Construct Your Own
  Problem item (fs-id3291177, the Earth-Moon system).
- No generated questions: every node has a book exercise.
- Weights: `p1` gives `angular-momentum` its full value and
  `moment-of-inertia` weight 1; `p5` gives `spin-rate-from-moment-of-inertia`
  full value and `angular-momentum` weight 2; `ap16` gives
  `angular-momentum` full value and `mass-distribution-and-inertia` weight 2;
  `cq6` gives
  `work-done-in-pulling-in` full value and `conservation-of-angular-momentum`
  weight 2.

## Views

- Formulas: the four equations of the section already in `chapter.json`.
- Definitions: the thirteen variables of the section; the two glossary
  terms.
- Concept map: the five nodes above with their edges into 7.1, 7.2, 8.1,
  8.2, 8.3, 9.2, 10.1, 10.3 and 10.4.

## Colour

The page binds angular-momentum, rotational-inertia, angular-rate, torque,
energy and time, as `ch10/COLOR.md` lists for 10.5: two sims carry the
torque and one the time on sliders, four carry a moment of inertia, every
readout writes $\kL$ or $\kI\kw$, the skater and the kick colour the
rotational kinetic energy. Force and position are not bound: the lazy Susan
and the kick take the net torque on a slider rather than the force and the
lever arm, so $F$, $r$ and $R$ stay in ink along with $M$, $\alpha$ and
$\theta$. Bodies (the tray, the leg, the skater, the cloud) are ink.

## Wanted at chapter level

- variables `L` → 10.5-angular-momentum
- variables `I` → 10.5-angular-momentum
- variables `ω` → 10.5-angular-momentum
- variables `M` → 10.5-angular-momentum
- variables `R` → 10.5-angular-momentum
- variables `τ` → 10.5-torque-and-angular-momentum
- variables `ΔL_ang` → 10.5-torque-and-angular-momentum
- variables `Δt` → 10.5-torque-and-angular-momentum
- variables `L_prime` → 10.5-conservation
- variables `I_prime` → 10.5-skater
- variables `ω_prime` → 10.5-skater
- variables `KE_rot` → 10.5-skater
- variables `KE_rotprime` → 10.5-skater
- equations `eq-angular-momentum` → 10.5-angular-momentum
- equations `eq-torque-changes-angular-momentum` → 10.5-torque-and-angular-momentum
- equations `eq-conservation-of-angular-momentum` → 10.5-conservation
- equations `eq-spin-rate-from-inertia` → 10.5-skater
- The chapter's `config.md` describes Figure 10.25 as one row with two
  originals; the bundle prints both poses in one image
  (`Figure_11_05_03.jpg`), so the row is a photo with one image and the
  config line may be corrected.

Decided in the chapter pass (2026-09-14): every anchor above is written on
its row. The `config.md` line on Figure 10.25 is corrected to one row with
one image, and its "What the build changed" block records it. The five AP
items taken from 10.6 were already named by id in `exercise_notes`, and
`exploration.md` is corrected to the split the tables hold: the seesaw stays
in 10.6 and the question on why the shape matters (fs-id1519591) comes here.
