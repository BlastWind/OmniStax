# Plan: 8.5 Inelastic Collisions in One Dimension (m42164)

Source: `source.md`, converted from the CNXML module; the section summary
written once from the CNXML. Status: built 2026-09-11 without a review stop,
on Chen's instruction to finish the book in one job.

The heaviest section of Chapter 8. It names the inelastic collision and the
perfectly inelastic collision, works the recoil of a goalie who catches a
puck and the internal kinetic energy that catch destroys, then turns the
argument round with two carts whose spring gives the pair more internal
kinetic energy than it brought. Three sketch figures, no photograph, four
boxed notes (two definitions and the Take-Home Experiment, plus the
Perfectly Inelastic Collision box), two worked examples, ten AP items,
three conceptual questions and fourteen problems, eight of them keyed. One
page (rule 11).

The CNXML closes its first `<example>` only after the paragraph beginning
"During some collisions, the objects do not stick together", Figure 8.9 and
the two tennis paragraphs, so the converter puts all of them inside Example
8.5. They are narrative and not part of the worked answer, so the page ends
the example at the Discussion for (b) and sets the rest as running text in
the book's own order. Nothing is added and nothing is dropped.

## Sub-concepts (page headers)

The book prints no sub-headers, only the run of the argument. Four blocks,
one per idea:

1. `inelastic` **Inelastic collisions and the perfectly inelastic case**
   (book: the opening paragraph on internal kinetic energy that is not
   conserved, the boxed Inelastic Collision, the paragraph on Figure 8.7
   with $\frac{1}{2}mv^2 + \frac{1}{2}mv^2 = mv^2$, the boxed Perfectly
   Inelastic Collision). The folded figure sits here, where the book first
   cites Figure 8.7.
2. `recoil` **Recoil velocity and the kinetic energy lost** (book: Example
   8.5, the goalie and the puck, with its Strategy, its two solutions and
   its two discussions). $m_1$, $m_2$, $\kvone$, $\kvtwo$, $\kvoneprime$,
   $\kvtwoprime$, $\kvprime$, $\kKEint$ and $\kKEintprime$ anchor here, and
   so do `eq-perfectly-inelastic-momentum` and `eq-recoil-velocity`.
3. `released` **Collisions that release stored energy** (book: the
   paragraph on collisions in which the objects do not stick, Figure 8.9,
   and Example 8.6, the two carts and the compressed spring).
   `eq-internal-kinetic-energy-after` anchors here, since this is where the
   book writes it for two moving objects.
4. `sports` **Collisions in sport** (book: the two tennis paragraphs and
   the boxed Take-Home Experiment on the bouncing of a tennis ball, which
   defines the coefficient of restitution).

Cross references to other sections are plain text, in the book's own
wording: problem 3 asks for "mass and speed data from Linear Momentum and
Force", which is what `[m42156](module:m42156)` says. Learning objectives,
the section summary and the two glossary terms come out of the running text
into the views.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| inelastic-collision | idea | inelastic | the boxed definition and the glossary; CQ 1; the AP items that ask which described outcome is the inelastic one |
| perfectly-inelastic-collision | idea, eq-perfectly-inelastic-momentum | inelastic | the boxed term and the glossary; Figure 8.7; the problems on two skaters, a loaded freight car and two football players |
| recoil-velocity | result, eq-recoil-velocity | recoil | Example 8.5 (a); the problems on a battleship, a rifle, a circus performer and the Moon |
| kinetic-energy-lost-in-collision | skill, eq-internal-kinetic-energy-after | recoil | Example 8.5 (b); the problems that ask how much kinetic energy is lost |
| energy-released-in-collision | idea | released | Figure 8.9 and Example 8.6; the problem on the exploding bolts of a satellite |

The section leans on `elastic-collision` and `internal-kinetic-energy`
(8.4), `conservation-of-momentum`, `isolated-system` and `recoil` (8.3),
`linear-momentum` (8.1), `kinetic-energy` (7.2), `potential-energy` (7.3)
and `elastic-potential-energy` (7.4, a placeholder until Chapter 7 is
built, which is the id for the spring of Figure 8.9). The coverage rows
mark each of them as used where the text uses it.

## Figures

id · replaces · concepts · what moves · sliders · headline · graph · 3D

1. `sim-collision` · replaces Figure 8.7 and folds Figure 8.8 and Figure
   8.9 (rule 14: the book draws one one-dimensional scene three times, with
   different masses, different velocities and a different outcome, because
   print cannot move) · inelastic-collision, perfectly-inelastic-collision,
   recoil-velocity, kinetic-energy-lost-in-collision,
   energy-released-in-collision · **moves**: the two objects slide toward
   each other along a strip, meet at the middle of the run, and leave with
   the velocities conservation of momentum gives them; the idea has a time
   in it, the run is finite, so it loops in about five seconds and gets the
   scrubber · $m_1$ (0.05 to 5.00 kg, default 0.150, ink), $m_2$ (0.05 to
   80.0 kg, default 70.0, ink), $\kvone$ (−40 to 40 m/s, default 35.0,
   velocity), $\kvtwo$ (−40 to 40 m/s, default 0, velocity), $c$ (0 to
   3.50, default 0, ink), the ratio of the speed the two separate at to the
   speed they approached at, which is the coefficient of restitution the
   section's own Take-Home Experiment defines: at $c = 0$ they stick
   together and the collision is perfectly inelastic, at $c = 1$ no
   internal kinetic energy is lost, and above 1 a spring has given the pair
   more than it brought · "t = 2.40 s · the puck and the goalie move off
   together at 0.0748 m/s, and 91.7 J of the 91.9 J of internal kinetic
   energy is gone" · graph below, two panels sharing the time axis: the two
   momenta and their total against time, where $\kpone$ and $\kptwo$ step
   in opposite directions at the collision and $\kptot$ runs flat through
   it, and the internal kinetic energy against time, which steps down (or,
   above $c = 1$, up) · no. Five sliders rather than the usual four,
   because the figure carries three book figures: the defaults are the
   goalie and the puck of Figure 8.8 and of Example 8.5; two equal masses
   with $\kvtwo = -\kvone$ and $c = 0$ are Figure 8.7, both objects coming
   to rest; and $m_1 = 0.350$ kg, $m_2 = 0.500$ kg, $\kvone = 2.00$ m/s,
   $\kvtwo = -0.500$ m/s and $c = 3.08$ are Figure 8.9 and Example 8.6,
   which come out at $-4.00$ m/s and $3.70$ m/s with 5.46 J released.
   Readout: $m_1\kvone + m_2\kvtwo = m_1\kvoneprime + m_2\kvtwoprime$ with
   the live numbers on both sides; small line on $\kKEint$, $\kKEintprime$
   and the difference. Draws velocity, momentum, energy.
2. `sim-recoil` · Sim, replacing nothing in the book · recoil-velocity,
   perfectly-inelastic-collision · **still**: the recoil velocity answers
   its three sliders and has no time in it, so the figure redraws when a
   slider moves and carries no transport (rule 14) · $m_1$ (0.05 to 5.00
   kg, default 0.150, ink), $\kvone$ (1.0 to 60.0 m/s, default 35.0,
   velocity), $m_2$ (0.1 to 100.0 kg, default 70.0, ink) · "a 0.150 kg puck
   at 35.0 m/s leaves a 70.0 kg goalie moving at 0.0748 m/s, one part in
   468 of the speed it came in at" · graph below: $\kvprime$ against the
   catcher's mass $m_2$ over three decades, the hyperbola collapsing as the
   catcher grows heavier, with the set mass marked · no. Above the graph,
   the instant after the catch: the momentum arrow before and the momentum
   arrow after are the same length, while the velocity arrow after is a
   stub beside the one before, which is why the recoil of a heavy body is
   so easy to miss. Readout: $\kvprime = \frac{m_1}{m_1 + m_2}\kvone$ with
   the numbers. Draws velocity, momentum.

No photograph in the section, so none to keep or drop. No figure of the
section serves an exercise: the AP items and the problems of 8.5 carry no
figures of their own, and the two items taken from 8.4 that do (the air
cart graph) stay with 8.4.

Extra simulations (rule 15), thought through and judged:

- The velocity of the centre of mass drawn straight through a collision,
  which eight exercises across 8.3 to 8.6 ask for. It would serve the two
  centre-of-mass AP items this section takes from 8.4, but the text of 8.5
  says nothing about the centre of mass; the one sentence the reader has is
  8.3's, so the figure belongs to 8.3, where `exploration.md` proposes it.
  Left.
- A tennis racquet of variable mass striking a ball, for the sports
  paragraphs. The book gives no numbers there and states only that a
  heavier racquet has the advantage, so the figure would have to invent its
  model. Left.
- A bar chart of the internal kinetic energy before and after, for the two
  worked examples. The second panel of `sim-collision` already draws it
  against time, with the step at the collision. Left.
- A ball dropped on a racquet and on the floor, for the coefficient of
  restitution of the Take-Home Experiment. The experiment is one the reader
  performs, and $c$ is already a slider on `sim-collision`. Left.

None built beyond the two above, both of which rule 14 calls for.

## Exercises

- Inline: `cq1` (fs-id1603604, "What is an inelastic collision? What is a
  perfectly inelastic collision?"), a Remember check on the two boxed
  definitions, set after the `inelastic` block. The chapter has no Check
  Your Understanding box, so this is the page's one inline item.
- 3 conceptual questions, `cq1` to `cq3`, none keyed anywhere in the
  chapter, each with an AI-marked suggested approach: the two definitions,
  the mixed-pair skaters who pull themselves together, and the dogs in the
  pickup truck, which is tagged with 6.5's `center-of-mass`.
- 7 of the section's own 10 AP items: `ap1` (fs-id2025404, keyed, a graded
  choice), `ap2` (fs-id2702942), `ap3` (fs-id1414077, keyed, a graded
  choice), `ap4` (fs-id2427911), `ap5` (fs-id2061215, keyed, a graded
  choice), `ap6` (fs-id1422524), `ap7` (fs-id1886734). The four unkeyed
  ones are open items with an AI-marked approach, as rule 13 and the 2.5,
  3.1 and 4.x precedents settle it.
- 3 of the section's AP items left out and given to 8.4 with
  `source_section: "8.5"`: fs-id2060437 and fs-id1367751 ask for the two
  final velocities of an *elastic* collision, and fs-id1538341 has the two
  objects leave with different velocities and gives one of them, which is
  elastic in all but name. All three turn on what 8.4 introduces (rule 12),
  and both sections' `exercise_notes` say so.
- 9 AP items taken from 8.4 with `source_section: "8.4"`, the ones that
  turn on an inelastic collision rather than on an elastic one:
  `ap8` (fs-id2208648, keyed), `ap9` (fs-id1342061), `ap10` (fs-id1442938,
  keyed), `ap11` (fs-id2332080, keyed), `ap12` (fs-id2494812), `ap13`
  (fs-id1862350, keyed), `ap14` (fs-id2389032), `ap15` (fs-id1741049,
  keyed) and `ap16` (fs-id1971159). The last two ask for the centre-of-mass
  velocity of the pair; they stay with their collision, their approaches
  lean on 8.3's sentence that the total momentum is the momentum of the
  centre of mass, and both are tagged with 6.5's `center-of-mass`. Their
  `cite` is left empty, since a `cite` must name a span of this section's
  own text and this section never mentions the centre of mass.
- 8 problems keyed and kept: `p1` (fs-id2504992, the billiard ball off the
  bumper, multi), `p3` (fs-id1664993, the football player catching the
  pass, multi; it reuses 8.1's mass and speed data and stays here, its
  prompt keeping the book's reference as plain text), `p5` (fs-id3107456,
  the two docking satellites in two frames, multi), `p7` (fs-id2679105, the
  exploding bolts, multi), `p8` (fs-id3094767, the rifle held loosely and
  held tight, multi; the book keys (a) to (d) and not (e), and the solution
  says so), `p10` (eip-558, the asteroid striking the Moon, multi), `p12`
  (eip-826, the garbage truck and the trash can, number) and `p14`
  (eip-765, the clown and the barbell, multi).
- 6 problems left out, having no answer in the book's key: 2
  (fs-id1495002), 4 (fs-id1956748), 6 (eip-384), 9 (fs-id1284886), 11
  (eip-24) and 13 (eip-414).
- No generated questions: every node of the section has a book exercise
  that tests it.
- Weights (rule 20): an item that only names momentum while the work is the
  energy accounting gives momentum less, and the other way about. `ap1`,
  `ap2` and `p1` give `kinetic-energy-lost-in-collision` the full value and
  `perfectly-inelastic-collision` weight 2; `ap5`, `ap6`, `p12` and `eip`
  recoil problems give `recoil-velocity` the full value and
  `conservation-of-momentum` weight 2; `ap15` and `ap16` give
  `center-of-mass` the full value and `perfectly-inelastic-collision`
  weight 2; `p8` gives `recoil-velocity` the full value and
  `kinetic-energy-lost-in-collision` weight 2.

## Views

- Formulas: the three equations of the section already in `chapter.json`,
  all three important.
- Definitions: the nine variables of the section; the two glossary terms.
- Concept map: the five nodes above with their edges into 6.5, 7.2, 7.3,
  7.4, 7.6, 8.3 and 8.4.

## Colour

The page binds velocity, momentum and energy. Both figures carry the
incoming velocities on sliders and draw the velocity arrows;
`sim-collision` draws the two momenta and their total as arrows and as the
lines of its first graph, and the internal kinetic energy as the line of
its second; `sim-recoil` draws the momentum before and after the catch at
the same length beside the two velocity arrows. The masses, the coefficient
of restitution and the time in the headlines stay untyped and in ink, as
the book's own rules ask.

## Wanted at chapter level

- variables `m_1` → 8.5-recoil
- variables `m_2` → 8.5-recoil
- variables `v_1` → 8.5-recoil
- variables `v_2` → 8.5-recoil
- variables `v_1prime` → 8.5-recoil
- variables `v_2prime` → 8.5-recoil
- variables `v_prime` → 8.5-recoil
- variables `KE_int` → 8.5-recoil
- variables `KE_intprime` → 8.5-recoil
- equations `eq-perfectly-inelastic-momentum` → 8.5-recoil
- equations `eq-recoil-velocity` → 8.5-recoil
- equations `eq-internal-kinetic-energy-after` → 8.5-released
- The chapter has no equation row for the conservation of momentum written
  in the two objects' masses and velocities, $m_1\kvone + m_2\kvtwo =
  m_1\kvoneprime + m_2\kvtwoprime$, which 8.4 states and both of this
  section's worked examples start from. 8.4 may already own it; if it does
  not, a row at 8.4 with `concept: "elastic-collision-1d"` would give this
  section's text and `sim-collision`'s readout something to point at.

Decided in the chapter pass (2026-09-12). The nine variable anchors and the
three equation anchors above are written.

The conservation of momentum written in the two objects' masses and velocities
already has a row: `eq-collision-momentum` at 8.4, with the condition that the
net external force on the two-object system is zero and `important: true`. 8.4
does own it, as the plan suspected it might, so no row is added here and this
section's text and `sim-collision`'s readout point at 8.4's row.

The inline conceptual question `cq1` was placed after the span `inelastic` but
`text.html` carried no `<div class="exercises" data-place="inelastic">`, so the
card had nowhere to render. The host is in, at the end of that section.

The two held AP items that ask for the velocity of the centre of mass keep no
`cite`, as the notes say, because the validator requires a `cite` to name an id
of the section the exercise is set in and this section's text never mentions the
centre of mass. Their suggested approaches name 8.3's sentence in words and both
are tagged with 6.5's `center-of-mass`, which is the whole of what the brief
asks for on a page that cannot cite across sections.
