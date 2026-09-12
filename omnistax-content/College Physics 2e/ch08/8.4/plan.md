# Plan: 8.4 Elastic Collisions in One Dimension (m42163)

Source: `source.md` (converted from CNXML), read against `m42163/index.cnxml`
for the one `<media>` the converter drops. Status: built 2026-09-11 without a
review stop, on Chen's instruction to finish the book in one job; the plan
stands for the per-section stop of rule 2, the plan review of rule 5 and the
user picks of rule 15, as Chapters 1 to 3 did it.

The section that gives the reader the second conservation law of a collision.
Three pages of narrative, one sketch figure (Figure 8.6), no photograph, two
boxed definitions and one take-home investigation, one worked example
(Example 8.4), a dropped PhET note, twenty AP items, one conceptual question
and three problems. One page (rule 11).

## Sub-concepts (page headers)

The module prints no narrative sub-headers of its own, only the run of the
argument, so the split below is the agent's (rule 3). Three blocks:

1. `elastic` **Elastic collisions and internal kinetic energy** (book: the
   opening paragraph on two-object collisions and the net external force; the
   definitions of an elastic collision and of internal kinetic energy; the
   paragraph on how nearly elastic a real collision can be, with the steel
   blocks on ice and the carts with spring bumpers; the two boxed definitions;
   Figure 8.6). The variable $\kKEint$ anchors here, as does
   `eq-internal-kinetic-energy`.
2. `equations` **The two equations that solve an elastic collision** (book:
   "Now, to solve problems involving one-dimensional elastic collisions…", the
   momentum equation in momenta and in masses and velocities, and the
   conservation of internal kinetic energy). The variables $m_1$, $m_2$,
   $\kvone$, $\kvtwo$, $\kvoneprime$, $\kvtwoprime$, $\kpone$, $\kptwo$,
   $\kponeprime$, $\kptwoprime$ and $\kFnet$ anchor here, as do
   `eq-collision-momentum` and `eq-elastic-kinetic-energy`.
3. `example` **Two unknown velocities from two equations** (book: Example 8.4,
   the 0.500-kg object striking a 3.50-kg object at rest, with its strategy,
   its solution, the two roots of the quadratic and the discussion; the two
   paragraphs that close the example; the take-home investigation with the ice
   cubes). `eq-v2-from-momentum` anchors here; the example is `ex-velocities`.

The book's cross reference to the PhET Collision Lab is dropped by the chapter
config and named in `notes`. Masses are untyped and set in plain LaTeX
($m_1$, $m_2$); every velocity, momentum and energy takes its `\k` macro.

Learning objectives, the section summary and the two glossary terms come out
of the running text into the tables and the views. The conceptual question is
short enough to be a Remember check and is set inline after `elastic`, which
is where the section defines the term it asks for; everything else goes to the
Exercises document.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| elastic-collision | idea, eq-elastic-kinetic-energy | elastic | the boxed definition and the glossary; cq1; ap3, ap4, ap7, ap10, ap11, ap12, ap13 |
| internal-kinetic-energy | idea, eq-internal-kinetic-energy | elastic | the boxed definition and the glossary; the discussion of Example 8.4, which checks that it is unchanged at 4.00 J; ap5, ap6, ap10, ap11 |
| nearly-elastic-collisions | idea | elastic | the third paragraph, the ice-cube investigation, ap5 and ap6 |
| elastic-collision-1d | skill | equations | Example 8.4 and its discarded root; ap3, ap4, ap7, ap8, ap9, ap12, ap13; problem 2 |

The section leans on `conservation-of-momentum` and `isolated-system` (8.3),
`linear-momentum` (8.1), `change-in-momentum` (8.2), `kinetic-energy` (7.2),
`friction` (4.3), `physical-solution` (2.5) and, through the centre-of-mass
items, `center-of-mass` (6.5); the coverage rows mark each as used where the
text uses it.

## Figures

id · replaces · concepts · what moves · sliders · headline · graph · 3D

1. `sim-elastic-collision` · replaces Figure 8.6 (the two masses before and
   after an elastic collision with their momenta labelled) · elastic-collision,
   internal-kinetic-energy, elastic-collision-1d · **moves**: a collision has a
   time in it, so the two blocks slide toward one another, touch, and separate
   at the velocities the elastic equations give, once per loop with the
   scrubber and a hold that leaves the reader at the moment after the impact;
   each block carries its velocity arrow and, below it, its momentum arrow,
   which is a different length because the masses differ, and the total
   momentum arrow is drawn on a line of its own · $m_1$ (0.10 to 5.00 kg,
   default 0.500, ink), $m_2$ (0.10 to 5.00 kg, default 3.50, ink), $\kvone$
   (−6.0 to 6.0 m/s, default 4.00, velocity), $\kvtwo$ (−6.0 to 6.0 m/s,
   default 0, velocity) · "t = 1.40 s · the 0.500 kg object bounces back at
   3.00 m/s and the 3.50 kg object moves off at 1.00 m/s" · graph below, two
   panels of paired bars: the total momentum before and after, and the internal
   kinetic energy before and after, both pairs the same height because both are
   conserved · no. Readout: $\kpone + \kptwo = \kponeprime + \kptwoprime$ with
   the numbers; small line on the internal kinetic energy before and after.
   Draws velocity, momentum, energy.
2. `sim-two-solutions` · a Sim; replaces nothing in the book ·
   elastic-collision-1d, physical-solution, internal-kinetic-energy ·
   **still**: the picture answers its sliders and nothing else, so it registers
   no cycle and carries no transport (rule 14). The two conservation laws are
   drawn as two curves in the plane of the final velocities: conservation of
   momentum is the straight line ${v'}_2 = (m_1/m_2)(\kvone - {v'}_1)$ and
   conservation of internal kinetic energy is the ellipse
   $m_1{{v'}_1}^2 + m_2{{v'}_2}^2 = m_1{\kvone}^2$, and they meet at exactly
   two points: the hollow one, $({v'}_1, {v'}_2) = (\kvone, 0)$, which repeats
   the initial condition and is the root the example discards, and the filled
   one, which is the collision · $m_1$ (0.10 to 5.00 kg, default 0.500, ink),
   $m_2$ (0.10 to 5.00 kg, default 3.50, ink), $\kvone$ (1.0 to 6.0 m/s,
   default 4.00, velocity); the second object starts at rest, as it does in the
   example whose algebra this draws · "the two equations meet twice: at
   v′₁ = 4.00 m/s, which is the situation before the collision, and at
   v′₁ = −3.00 m/s, which is the collision" · the graph is the figure · no.
   Readout: ${v'}_1 = \frac{m_1 - m_2}{m_1 + m_2}\kvone$ and
   ${v'}_2 = \frac{2m_1}{m_1 + m_2}\kvone$ with the numbers; small line on why
   the first root is thrown away. Draws velocity, momentum, energy.

The section has one book figure and it is a sketch, so it is replaced; there is
no photograph to keep or drop, and nothing folds, since the book draws the
scene once.

Figures that serve exercises: AP item `fs-id1165124579546` opens on a graph of
the position of two air carts against time, and the following item,
`fs-id2378587`, says "For the above graph". The converter drops the image,
because its `<media>` is nested in a `<para>` rather than in a `<figure>`
(`<media id="fs-34234342">` inside `<para id="fs-id1849450">` of
`m42163/index.cnxml`), so the file is copied out of the bundle to
`media/ch08/CNX_APPhysics_08_M3_aircars.jpg` by hand and carried on both cards
as the exercise's own `figure`, with the CNXML's alt text. The book gives the
image no width and prints it under no number, and it is the card rather than
the page that needs it, so it is not a row of the figures table.

Extra simulations (rule 15), thought of, judged, and what became of them:

- The two conservation laws as two curves meeting twice, built above as
  `sim-two-solutions`. The example says there are two solutions and that one of
  them "is the same as the initial condition" and is discarded, and print can
  only assert that. Drawing the line and the ellipse shows why there are
  exactly two, why one of them is the state before the collision, and how the
  pair moves as the masses change. **Built.**
- Two equal masses exchanging their velocities. A real and pretty result, but
  the reader reaches it by sliding $m_1$ and $m_2$ to the same value in
  `sim-elastic-collision` and watching the two blocks trade speeds, so a figure
  of its own would only animate what the first figure already does. **Left.**
- The ice cubes of the take-home investigation, flicked across a tabletop. The
  investigation asks the reader to do the thing with real ice, and a drawing of
  it would replace the experiment rather than open a view on it. **Left.**
- A bar of internal kinetic energy draining into heat and sound as a collision
  is made less elastic. That is 8.5's idea, not this section's, and 8.5 folds
  three figures into a sim that shows it. **Left.**

## Exercises

- The one conceptual question is set inline: `cq1` (fs-id3105556, "What is an
  elastic collision?"), Remember, after the `elastic` span, with an AI-written
  suggested approach, since no conceptual question in the chapter is keyed.
- 11 of the section's 20 AP items are kept: `ap1` (fs-id1478642, the two pucks
  and the table, keyed (c)), `ap2` (fs-id1364045, the centre-of-mass velocity
  from the same table, unkeyed), `ap3` (fs-id2432045, two cars of equal mass,
  keyed (b)), `ap4` (fs-id3206663, the same at 20 and 10 m/s, unkeyed), `ap5`
  (fs-id1683789, the rubber ball that rebounds to 90 per cent, keyed (a)),
  `ap6` (fs-id1514509, the tennis ball off the wall, unkeyed), `ap7`
  (fs-id1321180, mass A three times mass B, unkeyed), `ap8` (fs-id1487248,
  equal masses at 5.0 and 3.0 m/s, keyed (b)), `ap9` (fs-id3182581, the same
  predicted twice over, unkeyed), `ap10` (fs-id1165124579546, the air-cart
  graph, keyed (a)) and `ap11` (fs-id2378587, the momenta and kinetic energies
  off the same graph, unkeyed).
- 3 AP items are taken from 8.5 with `source_section: "8.5"`, since they turn
  on an elastic collision, which this section introduces: `ap12`
  (fs-id2060437, two 2.0-kg masses, keyed (d)), `ap13` (fs-id1367751, mass B
  three times mass A, unkeyed) and `ap14` (fs-id1538341, equal masses where one
  final velocity is given, keyed (c)). 8.5's `exercise_notes` say so as well.
- 9 of the section's AP items are held for 8.5, because they turn on an
  inelastic or a perfectly inelastic collision or on what distinguishes the two
  kinds, which 8.5 introduces: fs-id2208648, fs-id1342061, fs-id1442938,
  fs-id2332080, fs-id2494812, fs-id1862350, fs-id2389032, fs-id1741049 and
  fs-id1971159. They go to 8.5 with `source_section: "8.4"`, and both sections'
  `exercise_notes` say so.
- The two centre-of-mass items that stay, `ap1` and `ap2`, describe a collision
  this section owns, so rule 12 keeps them here. The book gives the reader only
  one sentence on the idea, in 8.3: the total momentum can be shown to be the
  momentum of the centre of mass of the system. `cite` may name only a span of
  this section's own text, so both cite `equations`, where the total momentum
  before and after is written down, and their suggested approaches quote 8.3's
  sentence in words. Both are tagged with 6.5's `center-of-mass`.
- 1 problem kept: `p1` (fs-id1319285, the two piloted satellites, tagged
  Professional Application, keyed at 0.250 m/s).
- 2 problems left out, having no answer in the book's key: fs-id3102664 (the
  two identical objects) and fs-id898804 (the goalie and the puck).
- Every unkeyed AP item is free response, not a choice item, so each is kept as
  an open item with an AI-marked suggested approach; no unkeyed choice item had
  to be turned out of its options.
- No generated questions: every node of the section has a book exercise.
- Weights: `ap1` and `ap2` give `linear-momentum` weight 2, since the momentum
  of a single puck is only the arithmetic under the question; `ap3`, `ap4`,
  `ap12` and `ap13` give `elastic-collision` weight 2 beside the full value for
  `elastic-collision-1d`, since the work is the calculation and the definition
  is only named; `ap5` gives `internal-kinetic-energy` weight 2, since the item
  turns on where the energy went rather than on the sum itself; `ap8` gives
  `conservation-of-momentum` weight 2; `ap10` gives `conservation-of-momentum`
  and `linear-momentum` weight 2, since the reading of the graph is the work;
  `ap11` gives `linear-momentum` weight 2; `ap14` gives `elastic-collision`
  weight 1, since the collision it describes is not in fact elastic and the
  item turns on momentum alone; `cq1` gives `internal-kinetic-energy` weight 1;
  `p1` gives `elastic-collision` and `conservation-of-momentum` weight 2.

## Views

- Formulas: the four equations of the section already in `chapter.json`, the
  three boxed and named ones important and the step that solves the momentum
  equation for ${v'}_2$ not.
- Definitions: the twelve variables of the section, and the two glossary terms,
  elastic collision and internal kinetic energy.
- Concept map: the four nodes above with their edges into 2.5, 4.3, 7.2, 8.1,
  8.2 and 8.3.

## Colour

The page binds velocity, momentum and energy. Both figures carry $\kvone$ on a
slider and draw the velocity of each object; `sim-elastic-collision` draws a
momentum arrow beside every velocity arrow and a bar for the total momentum
before and after, and a bar for the internal kinetic energy before and after;
`sim-two-solutions` draws the momentum equation as a line and the internal
kinetic energy equation as an ellipse and names both in its readout. The two
masses, the time in the headline and the scene's lengths stay in ink.

## Wanted at chapter level

- variables `m_1` → 8.4-equations
- variables `m_2` → 8.4-equations
- variables `v_1` → 8.4-equations
- variables `v_2` → 8.4-equations
- variables `v_1prime` → 8.4-equations
- variables `v_2prime` → 8.4-equations
- variables `p_1` → 8.4-equations
- variables `p_2` → 8.4-equations
- variables `p_1prime` → 8.4-equations
- variables `p_2prime` → 8.4-equations
- variables `F_net` → 8.4-equations
- variables `KE_int` → 8.4-elastic
- equations `eq-collision-momentum` → 8.4-equations
- equations `eq-internal-kinetic-energy` → 8.4-elastic
- equations `eq-elastic-kinetic-energy` → 8.4-equations
- equations `eq-v2-from-momentum` → 8.4-example
- A variable row for `p_tot` in section 8.4, type `momentum`, meaning "the
  total momentum of the two-object system, which is the same before and after
  the collision", unit "kg·m/s", anchor 8.4-equations. The symbol is in
  `book.json` and `sim-elastic-collision` draws and states it, but no row of
  8.4 gives it a meaning, so the Definitions view does not list it.
- A variable row for `KE_intprime` in section 8.4, type `energy`, meaning "the
  internal kinetic energy of the system after the collision, which an elastic
  collision leaves unchanged", unit "J", anchor 8.4-equations. Same case: the
  symbol is in `book.json` and the figure's readout states it, and the
  conservation of internal kinetic energy is what the section is about, but
  only the unprimed row exists.
- An equation row for the momentum form of the collision equation as the book
  prints it first, ${p}_1 + {p}_2 = {p'}_1 + {p'}_2$ under the condition that
  the net external force is zero, anchored at 8.4-equations and important. The
  chapter carries only the form in masses and velocities, and the book prints
  the momentum form above it as the statement the other is a substitution into.
  The text sets it either way, so this is a want rather than a defect.
