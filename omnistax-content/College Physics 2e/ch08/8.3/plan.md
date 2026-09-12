# Plan: 8.3 Conservation of Momentum (m42162)

Source: `source.md`, converted from the CNXML of m42162. Status: built
today, 2026-09-11, without a review stop, on Chen's instruction to finish
the book in one job.

The section that gives the reader the conservation law the rest of the
chapter runs on. Three sketch figures (8.3, 8.4, 8.5), no photograph, five
boxed notes (the two named principles, the two Take-Home Investigations and
one Making Connections box), no worked example, no Check Your Understanding
box, six AP test prep items, seven conceptual questions and five problems,
three of them keyed. One page (rule 11).

## Sub-concepts (page headers)

The book prints one header of its own, "Subatomic Collisions and Momentum",
and runs the rest as an unbroken argument. That header is kept as the
header of its own block, and the other four blocks are named for the step
of the argument they carry:

1. `recoil` **Finding a larger system in which momentum is conserved**
   (book: the opening question, the football player and the goalpost, the
   recoil of the Earth). Introduces `recoil`.
2. `two-cars` **Two cars bumping, and why the changes in momentum cancel**
   (book: the two coasting cars, Figure 8.3, and the five steps from
   $\Delta \kpone = \kFone\kdt$ to $\Delta \kpone + \Delta \kptwo = 0$ and
   $\kpone + \kptwo = \kponeprime + \kptwoprime$). Introduces
   `momentum-changes-cancel`. The variables $\kpone$, $\kptwo$,
   $\kponeprime$, $\kptwoprime$, $\Delta \kp$, $\kFone$, $\kFtwo$, $\kdt$,
   $m_1$, $m_2$, $\kvone$, $\kvtwo$, $\kvoneprime$ and $\kvtwoprime$ anchor
   here, and so do the six equations of the derivation.
3. `conservation` **The conservation of momentum principle** (book: the
   result generalised to any isolated system, $\kptot = \text{constant}$
   and $\kptot = \kptotprime$, the parenthesis on the centre of mass, the
   definition of the isolated system, the two boxed notes, and the shorter
   argument from Newton's second law in terms of momentum). Introduces
   `conservation-of-momentum` and `isolated-system`; $\kptot$,
   $\kptotprime$, $\kFnet$ and the three equations of the principle anchor
   here. The paragraph that carries the sentence on the centre of mass is
   the block's `cite-target`, since that one sentence is all the text the
   centre-of-mass exercises have to lean on.
4. `directions` **Momentum along one direction and not another** (book:
   the three independent length dimensions, the projectile, Figure 8.4, the
   comet and the gas, the two Take-Home Investigations and the Making
   Connections box on collisions). Introduces
   `momentum-conserved-by-direction`.
5. `subatomic` **Subatomic Collisions and Momentum** (book's own header and
   its one paragraph, Figure 8.5). Introduces `subatomic-momentum`.
6. `exercise-figures` **The graph the experiment question refers to** (the
   position-against-time graph the fourth AP item sets its measurements
   on), as `ch03/3.2` and `ch06/6.3` gather theirs.

Cross references to other sections stay plain text, as the chapter config
says: "Impulse", "Linear Momentum and Force" and "Uniform Circular Motion
and Gravitation". Learning objectives, the section summary and the three
glossary terms come out of the running text into the views.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| recoil | idea | recoil | the football player and the goalpost; cq5 |
| momentum-changes-cancel | result, eq-dp-sum-zero | two-cars | the five-step derivation and Figure 8.3; p3 |
| conservation-of-momentum | result, eq-ptot-constant | conservation | the boxed principle and the glossary; ap1 to ap6, cq2, cq3, cq6, cq7, p1, p3, p5 |
| isolated-system | idea, eq-isolated-system | conservation | the boxed definition and the glossary; ap1, ap2, ap3, cq2, cq3 |
| momentum-conserved-by-direction | idea | directions | the projectile paragraph and Figure 8.4; cq4 |
| subatomic-momentum | idea | subatomic | the last passage, Figure 8.5 and the glossary term quark |

The section leans on `impulse` and `change-in-momentum` (8.2),
`linear-momentum`, `calculate-momentum` and `newtons-second-law-momentum`
(8.1), `newtons-third-law`, `net-external-force`, `internal-forces-cancel`
and `system-of-interest` (4.3 and 4.4),
`independence-of-perpendicular-motions` (3.1), `projectile-motion` (3.4)
and `center-of-mass` (6.5); the coverage rows mark each of them as used
where the text uses it.

## Figures

id · replaces or Sim · concepts · what moves, or still and why · sliders
with their types · headline · graph or none · 3D or not

1. `sim-collision` · replaces **Figure 8.3** (the two cars before and after
   the bump) · momentum-changes-cancel, conservation-of-momentum,
   isolated-system · **moves**: the trailing car catches the lead car,
   the two touch for a tenth of a second, and they coast apart again; the
   bump is an event in time, so the figure loops once per pass with the
   scrubber, and during the contact the two forces $\kFone$ and $\kFtwo$
   are drawn on the cars, equal in length and opposite in direction ·
   $m_1$ (600 to 2000 kg, default 1200, ink, since a mass is untyped),
   $\kvone$ (6 to 20 m/s, default 15.0, velocity), $\kvtwo$ (2 to 14 m/s,
   default 8.0, velocity) and the bounce of the bumpers (0 to 1, default
   0.40, ink, a dimensionless coefficient); the lead car's mass is fixed
   at 1000 kg and labelled on the car · "t = 1.20 s · car 1 has lost
   2,730 kg·m/s and car 2 has gained the same, so the total is still
   26,000 kg·m/s" · graph below the strip: the momentum of each car and
   the total against time, the two curves stepping in opposite directions
   at the bump while the total runs flat through it · no 3D. Readout:
   $\kpone + \kptwo = \kponeprime + \kptwoprime$ with the live numbers;
   small line on $\Delta \kpone = -\Delta \kptwo$. Draws momentum,
   velocity, force and time.
2. `sim-probe` · replaces **Figure 8.4** (the space probe separating in
   flight) · momentum-conserved-by-direction, conservation-of-momentum ·
   **moves**: the probe climbs its parabola, splits into two equal halves
   at the top, and the halves fly on while the centre of mass keeps the
   parabola the whole probe would have followed; the flight has a time in
   it, so it loops once per flight with the scrubber · $\kvo$ (200 to 800
   m/s, default 500, velocity), the launch angle $\theta_0$ (30º to 80º,
   default 60º, ink) and the separation impulse $\Delta \kp$ (0 to 400,000
   kg·m/s, default 200,000, momentum) · "t = 62.0 s · the two halves are
   4.6 km apart, the horizontal momentum is still 250,000 kg·m/s, and the
   vertical momentum has fallen to −186,000 kg·m/s" · graph below: the
   horizontal and the vertical momentum of the system against time, the
   first a flat line through the separation and the second a straight fall
   of slope $-M\kg$ · no 3D. Readout: $\kpx = \text{constant}$ beside
   $\kpy \neq \text{constant}$ with the numbers. Draws momentum, velocity
   and time.
3. `sim-scatter` · replaces **Figure 8.5** (a particle scattering straight
   backward from a target) · subatomic-momentum, conservation-of-momentum
   · **moves**: the electron runs in from the left, meets the target and
   leaves again at the velocity the reader sets, while the target moves off
   at whatever velocity conservation of momentum leaves it; the encounter
   happens in time, so it loops with the scrubber · $\kvone$ (1.0 to 20.0
   Mm/s, default 10.0, velocity), the fraction ${v'}_1/\kvone$ the
   electron keeps (−1.00 to 1.00, default −0.95, ink, a ratio), and the
   target's mass in electron masses (1 to 2000, default 1836, the proton,
   ink) · "the electron comes straight back at 9.50 Mm/s, and the target,
   1,836 times as massive, moves off at only 0.0106 Mm/s" · no graph; the
   momenta are drawn as three bars beneath the scene, $\kpone$ before and
   $\kponeprime$ and $\kptwoprime$ after, so that the two after-bars add
   to the one before-bar · no 3D. Readout: $\kpone = \kponeprime +
   \kptwoprime$ with the numbers; small line saying what mass the target
   must have for its recoil to be that small. Draws momentum and velocity.
   The outcome is read off conservation of momentum alone, which is this
   section's own result, so the figure asks nothing of the elastic
   collision the next section derives.
4. `sim-center-of-mass` · **Sim**, replacing nothing in the book ·
   conservation-of-momentum, momentum-changes-cancel · **moves**: two carts
   run along a track and collide, and the centre of mass, drawn as a cross
   between them, sails through the collision at a constant velocity; the
   motion has a time in it, so it loops with the scrubber · $m_1$ (0.2 to
   2.0 kg, default 0.50, ink), $m_2$ (0.2 to 2.0 kg, default 0.50, ink),
   $\kvone$ (0 to 10 m/s, default 6.0, velocity) and $\kvtwo$ (−6 to 10
   m/s, default 0.0, velocity) · "t = 0.90 s · the carts have stuck
   together and move at 3.00 m/s, which is the velocity the centre of mass
   had all along" · graph below: the position of each cart against time,
   solid where they stick together and faint and dashed where they bounce
   apart instead, with the straight line of the centre of mass running
   through both outcomes · no 3D. Readout: $v_{\text{cm}} = \kptot/(m_1 +
   m_2)$ with the numbers, the symbol in plain LaTeX until the chapter has
   a row for it. Draws position, velocity, momentum and time.
5. `fig-cart-graph` · a **Figure** with no number, the faithful copy of the
   position-against-time graph the fourth AP item sets its measurements on
   (`Figure_08_M3_Graph.jpg`, which the book gives no width) · **still**:
   it is a page of measurements and answers no slider, so it registers no
   cycle and carries no transport · no sliders · headline: "all blocks of
   eleven readings are 0.2 s apart, and the two carts move together after
   1.0 s" · the graph is the figure · no 3D. Draws position and time.

There is no photograph in the section to keep or drop; the chapter's one
photograph outside the introduction is in 8.7.

Extra simulations (rule 15), thought through and judged:

- **The centre of mass of two colliding objects** — built, as
  `sim-center-of-mass` above. The book defines the centre of mass in 6.5
  and this section mentions in one parenthesis that the total momentum is
  the momentum of the centre of mass, and six AP items across 8.3 to 8.6
  then ask for the velocity of the centre of mass of a two-object system.
  A drawing in which the cross of the centre of mass runs straight through
  the collision, at the same velocity whatever the two carts do to each
  other, is the whole of the idea, and nothing in the text or in the three
  required figures shows it. It earns its place by rule 15's test.
- A bench of several objects in a closed box, colliding at random, with the
  total momentum held on a needle: it would say that the law holds for any
  number of objects, which the text states in one line. It animates what
  the reader already believes. Left.
- A jellyfish or a squid pushing water backward, from the Take-Home
  Investigation: the propulsion of a body that throws part of itself away
  is 8.7's subject and gets its figure there. Left.
- A ballistocardiograph tracing the recoil of a body against each heartbeat:
  a lovely picture, but the book gives no numbers for it and everything
  drawn would be invented. Left.

## Exercises

- No Check Your Understanding box. One conceptual question is set inline:
  `cq2`, "Under what circumstances is momentum conserved?", is plainly a
  Remember check on the passage above it and is placed after
  `conservation`, as 3.5 places its first conceptual question. Everything
  else sits with the problem set.
- 6 AP test prep items, all the section's own. `ap1` (fs-id1422695, which
  collision is an open system, keyed (d), a choice item, Understand),
  `ap3` (fs-id1468748, the total momentum of two air cars before and after,
  keyed (b), a choice item, Understand) and `ap5` (fs-id1943510, the
  velocity of the centre of mass before and after, keyed (c), a choice
  item, Understand) carry the book's key. `ap2` (fs-id1927054, the girl
  jumping onto the platform and the boy rebounding off the wall, Apply),
  `ap4` (fs-id1890741, the experiment that finds the mass of a cart from a
  collision, Analyze, citing `exercise-figures`) and `ap6` (fs-id2035171,
  the velocity of the centre of mass of two carts that stick, Apply) have
  no key and are kept as open items with an AI-marked suggested approach,
  as rule 13 and the 2.5, 3.1 and 4.x precedents do.
- `ap5` and `ap6` ask for a centre-of-mass velocity and keep to the
  collision they describe, which is this section's; both cite
  `conservation`, the one sentence of the text that says the total momentum
  is the momentum of the centre of mass, and both are tagged with 6.5's
  `center-of-mass` beside this section's `conservation-of-momentum`.
- 7 conceptual questions, `cq1` to `cq7`, all unkeyed and all kept as open
  items with an AI-marked suggested approach.
- 3 problems keyed and kept: `p1` (fs-id1511802, the two loaded train cars
  coupling, 0.122 m/s), `p3` (fs-id1759138, the seatbelt force in a crash
  against a tree and against an identical car, the book's own written
  answer) and `p5` (fs-id1516164, the falcon catching the dove, 22.4 m/s).
- 2 problems left out, having no answer in the book's key: 2
  (fs-id1492048, the clay koala) and 4 (fs-id1743106, the car and the
  deer).
- Nothing is taken from another section and nothing is held for one. The
  chapter's trades run between 8.4 and 8.5, and the centre-of-mass items of
  8.4 and 8.5 stay with their own collisions, as the chapter's exploration
  decided. `cq1`, the dive against the belly flop, leans on the contact
  time of 8.2 as much as on this section, but it is printed here and the
  section that introduces the impulse is behind rather than ahead of the
  reader, so it stays and is tagged with 8.2's concepts.
- No generated questions: every node of the section has a book exercise
  that tests it.
- Weights: `ap1` and `ap3` give `conservation-of-momentum` its full value
  and the second concept weight 2; `cq4` gives
  `independence-of-perpendicular-motions` weight 2, since the angle is all
  the question wants from it; `p1` and `p5` give `calculate-momentum`
  weight 2, since the arithmetic is a step and the conservation is the
  point; `cq7` gives `kinetic-energy` weight 2 and `cq1` gives
  `change-in-momentum` weight 2 for the same reason.

## Views

- Formulas: the nine equations of the section already in `chapter.json`,
  the conserved pair, the conserved total, the constant total and the
  isolated system important, the four steps of the derivation not.
- Definitions: the seventeen variables of the section; the three glossary
  terms (conservation of momentum principle, isolated system, quark).
- Concept map: the six nodes above with their edges into 3.1, 3.4, 4.3,
  4.4, 8.1 and 8.2.

## Colour

The page binds momentum, velocity, force, position and time. Momentum is
the section's own quantity and every figure draws it: the two cars carry
$\kpone$ and $\kptwo$ as arrows and the graph plots them against the total,
the probe's readout states $\kpx$ and $\kpy$, the scatter figure's three
bars are momenta, and the centre-of-mass figure states $\kptot$. Velocity
rides on the sliders of all four sims and on the arrows beside the cars and
the carts. Force appears in the collision figure, where $\kFone$ and
$\kFtwo$ are drawn during the contact, which is the step the derivation
turns on. Position is the vertical axis of the centre-of-mass graph and of
the cart graph, and time is the horizontal axis of every graph on the page.
The masses, the bounce of the bumpers, the launch angle, the mass ratio of
the target and the fraction of its velocity the electron keeps are all
untyped and stay in ink.

## Wanted at chapter level

- variables `p_1` → 8.3-two-cars
- variables `p_2` → 8.3-two-cars
- variables `p_1prime` → 8.3-two-cars
- variables `p_2prime` → 8.3-two-cars
- variables `Δp` → 8.3-two-cars
- variables `F_1` → 8.3-two-cars
- variables `F_2` → 8.3-two-cars
- variables `Δt` → 8.3-two-cars
- variables `m_1` → 8.3-two-cars
- variables `m_2` → 8.3-two-cars
- variables `v_1` → 8.3-two-cars
- variables `v_2` → 8.3-two-cars
- variables `v_1prime` → 8.3-two-cars
- variables `v_2prime` → 8.3-two-cars
- variables `p_tot` → 8.3-conservation
- variables `p_totprime` → 8.3-conservation
- variables `F_net` → 8.3-conservation
- equations `eq-dp1-impulse` → 8.3-two-cars
- equations `eq-dp2-impulse` → 8.3-two-cars
- equations `eq-dp2-newton3` → 8.3-two-cars
- equations `eq-dp-sum-zero` → 8.3-two-cars
- equations `eq-p-pair-constant` → 8.3-two-cars
- equations `eq-p-pair-conserved` → 8.3-two-cars
- equations `eq-ptot-constant` → 8.3-conservation
- equations `eq-ptot-conserved` → 8.3-conservation
- equations `eq-isolated-system` → 8.3-conservation
- A symbol row for the velocity of the centre of mass is wanted:
  `{"sym": "v_cm", "latex": "v_{\\text{cm}}", "type": "velocity", "macro":
  "\\kvcm"}`. The centre-of-mass sim's readout and the suggested approaches
  of `ap5` and `ap6` all want to write it, and the chapter's symbol table
  has no row for it. Until the row exists the section writes the symbol as
  plain LaTeX, `v_{\text{cm}}`, which the validator accepts; when the row
  is merged the readout of `sim-center-of-mass` and the two approaches can
  take the macro.

Decided in the chapter pass (2026-09-12). The seventeen variable anchors and
the nine equation anchors above are written.

The symbol row for the velocity of the centre of mass is merged:
`{"sym": "v_cm", "latex": "v_{\\text{cm}}", "type": "velocity",
"macro": "\\kvcm"}`, staged in `book-rows.json` and merged with
`mergebook.py`. The readout of `sim-center-of-mass` now writes `\kvcm`, so the
velocity it states stands in the velocity hue beside the `\kptot` it is
divided out of, instead of in ink. No suggested approach of this section writes
the symbol in LaTeX, so none of them changed.

The inline conceptual question `cq2` was placed after the span `conservation`
but `text.html` carried no `<div class="exercises" data-place="conservation">`
for it to render in, so the card was laid out into nothing. The host is in, at
the end of that section after the centre-of-mass sim.
