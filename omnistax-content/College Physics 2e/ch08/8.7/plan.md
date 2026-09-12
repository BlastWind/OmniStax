# Plan: 8.7 Introduction to Rocket Propulsion (m42166)

Source: `source.md` (converted from CNXML); the section summary written once
from the CNXML, since the converter prints its nested list twice. Status:
built 2026-09-11 without a review stop, on Chen's instruction to finish the
book in one job.

The last section of Chapter 8, and the first place in the book where the mass
of the system changes while it moves. Two book figures (a sketch of the rocket
before and after it ejects a mass of gas, with its free-body diagram, and a
photograph of the space shuttle launching), two boxed notes and a third that
is a take-home experiment, one worked example, three unkeyed conceptual
questions and twelve problems, five of them keyed. No Check Your Understanding
box, no table, no glossary term, no AP item, no PhET link. One page (rule 11).

## Sub-concepts (page headers)

The book prints no sub-headers of its own, only the run of the argument: the
principle, the rocket over a short time, the three factors, the mass ratio and
the stages. Page structure, one block per idea:

1. `propulsion` **Newton's third law and the propulsion of rockets** (book:
   the opening paragraph on rockets, jet engines, deflating balloons, squids
   and the recoil of a gun; the boxed take-home experiment with the balloon).
2. `ejecting-mass` **Ejecting mass, and the acceleration of a rocket** (book:
   the paragraph on Figure 8.12, the momentum $mv$ of the rocket, the mass
   $\Delta m$ of gas ejected at ${v}_{\text{e}}$, the negative impulse
   $\kdp = -mg\kdt$ of gravity, the centre of mass in free fall, and why the
   thrust is greater in a vacuum; the paragraph that equates the change in
   momentum to the impulse and states the acceleration; the paragraph naming
   "the rocket" and $\kg$; the boxed note Acceleration of a Rocket; Figure
   8.12, where the book places it, after the note). The chapter's variables
   $\ka$, $\kve$, $m$, $\Delta m$, $\kdt$ and $\kg$ and the equation
   `eq-rocket-acceleration` anchor here.
3. `factors` **The three factors in a rocket's acceleration** (book: the
   paragraph on the exhaust velocity, the burn rate and the mass, which is
   where the quantity $(\Delta m/\kdt)\kve$ is named thrust and given its
   units; the boxed note Factors Affecting a Rocket's Acceleration; Example
   8.8, the initial acceleration of a Saturn V, whose discussion gives the
   thrust of the engines). $\kFthrust$ and `eq-rocket-thrust` anchor here;
   the example is `ex-saturn-v`.
4. `mass-ratio` **The final velocity and the mass ratio** (book: the paragraph
   on hopping continents, obtaining orbit and escaping Earth's gravity, the
   final-velocity equation, and the worked mass ratio for escape velocity,
   88, worked through its four displayed steps). $\kv$, $m_0$, $m_{\text{r}}$
   and `eq-rocket-velocity` anchor here.
5. `stages` **Multistage rockets and the space shuttle** (book: the paragraph
   that turns 1/88 into 98.9 per cent fuel, then $m_0/180$ once drag and
   gravity are counted, and gives multistage rockets as the answer; the
   paragraph on the space shuttle and on launching from an airplane; Figure
   8.13, the photograph).

Cross references: the section makes none to other chapters. The two
`[ref:…]` markers are the section's own figures and keep the book's wording,
"Figure 8.12" and "Figure 8.13", which the build links. Learning objectives,
the section summary and the glossary (which is empty here) come out of the
running text into the views. All three conceptual questions and the five
keyed problems go to the Exercises document; nothing is inline, since the
section has no Check Your Understanding box and none of its conceptual
questions is a short Remember or Understand check.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| rocket-propulsion | idea | propulsion | the opening paragraph and Newton's third law; the balloon experiment; CQ 2 and CQ 3 |
| rocket-acceleration | result, eq-rocket-acceleration | ejecting-mass | the boxed equation; Example 8.8; problems 1, 4(b), 5, 6 |
| rocket-thrust | result, eq-rocket-thrust | factors | the paragraph that names thrust and its units; the discussion of Example 8.8; the keyed derivation problem 5 |
| factors-affecting-rocket-acceleration | idea | factors | the boxed list of three factors and the practical limit on $\kve$; the discussion of Example 8.8; problem 6 |
| rocket-velocity-mass-ratio | result, eq-rocket-velocity | mass-ratio | the escape-velocity calculation and the ratio 88; problems 3, 4(a), 7, 8 |
| multistage-rocket | idea | stages | 98.9 per cent fuel, $m_0/180$ with drag, the case for stages, and the shuttle's reusable parts |

The section leans on `newtons-third-law` and `thrust` (4.4),
`newtons-second-law-momentum` (8.1), `impulse` (8.2),
`conservation-of-momentum` (8.3), `acceleration-due-to-gravity` (2.7) and
`center-of-mass` (6.5), which the coverage rows mark as used where the text
uses them.

## Figures

id · replaces · concepts · what moves · sliders · headline · graph · 3D

1. `sim-rocket` · replaces Figure 8.12 (the rocket before and after ejecting a
   mass of gas, with its free-body diagram) · rocket-acceleration,
   rocket-thrust, factors-affecting-rocket-acceleration, rocket-propulsion ·
   **moves**: the idea has a clock in it, because the mass falls while the
   rocket burns, so the loop runs one burn from liftoff to the moment the fuel
   is exhausted; the rocket climbs, the gas streams out below it, the mass
   falls, the thrust stays the same length while the weight shrinks, and the
   acceleration reaches its maximum just before the fuel runs out, which is
   what the discussion of Example 8.8 says and what no print figure can show.
   Three quarters of the liftoff mass is fuel in this scene, a choice of the
   drawing rather than the book's, so that the burn has an end; the caption
   says so. This departs from the chapter config's Motion line, which had the
   rocket's free-body diagram as a still picture: the free body alone would be
   still, but a figure that also burns the fuel away has a time in it and
   earns its transport (rule 14) · exhaust velocity $\kve$ (0.5 to
   2.5 $\times 10^3$ m/s, default 2.40, velocity, the practical limit the text
   gives), burn rate $\Delta m/\Delta t$ (2 to 20 $\times 10^3$ kg/s, default
   14.0, ink), liftoff mass $m_0$ (0.5 to 4.0 $\times 10^6$ kg, default 2.80,
   ink) · "t = 0 s · the Saturn V lifts off at 2.20 m/s², a thrust of
   3.36 × 10⁷ N against a weight of 2.74 × 10⁷ N" · graph beside the scene,
   since the scene is vertical: $\ka$ against $\kt$, rising from the liftoff
   value to the burnout value, with the moving point on it, and a mass bar
   beneath it that empties as the fuel goes · no. Readout:
   $\ka = (\kve/m)(\Delta m/\kdt) - \kg$ with the live numbers; small line on
   the thrust and on the mass that is left. Draws velocity, force,
   acceleration, momentum, time.
2. `sim-mass-ratio` · replaces nothing in the book, so it is a Sim with no
   number · rocket-velocity-mass-ratio, multistage-rocket · **still**: the
   equation $\kv = \kve\ln(m_0/m_{\text{r}})$ is the velocity a whole burn
   gains, and it answers its sliders and nothing else; there is no clock in it
   and a transport would promise a motion the picture cannot make (rule 14) ·
   exhaust velocity $\kve$ (0.5 to 5.0 $\times 10^3$ m/s, default 2.5,
   velocity, the value the book assumes in the escape calculation), mass ratio
   $m_0/m_{\text{r}}$ (1 to 200, default 88, ink, the value the book works
   out) · "with an exhaust velocity of 2.50 × 10³ m/s and 88 kg at liftoff for
   every kilogram left at burnout, the rocket reaches 11.2 × 10³ m/s, which is
   escape velocity" · graph beside the tall rocket: $\kv$ against the mass
   ratio, the logarithm flattening as the ratio grows, with escape velocity
   drawn as a dashed level and the current ratio marked · no. Readout:
   $\kv = \kve\ln(m_0/m_{\text{r}})$ with the numbers; small line on the
   percentage of the rocket that is fuel, which is where the case for stages
   comes from. Draws velocity.
3. `fig-shuttle` · Figure 8.13, the NASA photograph of the space shuttle
   launching · **kept**: the paragraph above it is about the shuttle and its
   reusable parts, and the photograph shows the thing the passage is about;
   it keeps the book's caption and its credit clause, and its width, 250 book
   pixels.

Figure 8.12 is the section's only sketch and is replaced. The book prints no
figure inside any exercise of this section, so no figure serves the exercises.

Extra simulations (rule 15), considered and left:

- The momentum bookkeeping of the whole system, the rocket's $\kp$ rising
  while the gas carries momentum the other way and gravity drains the total by
  $mg\kdt$: a real view the text describes and the print figure cannot show.
  It is not built as a figure of its own, because `sim-rocket` already draws
  the rocket's momentum arrow beside the free body and the section's own
  result is the acceleration; a second figure would draw the same scene again.
  Left.
- A squid or a balloon ejecting fluid, from the take-home experiment and
  problem 9: the principle is the same as the rocket's and `sim-rocket`
  already shows it, so the second scene would animate what the reader has
  seen. Left.
- A multistage rocket dropping its stages, with the velocity gained by each:
  it would open a view the text does not give, but the book states no staging
  equation, so every number in it would be invented. Left.

Two built, both required by rule 14's first two triggers; none of the extra
proposals built.

## Exercises

- No Check Your Understanding boxes; nothing inline.
- 3 conceptual questions, `cq1` to `cq3`, none keyed anywhere in the chapter,
  so each is an open item with an AI-written suggested approach: `cq1`
  (fs-id2554772, the fireworks shell breaking into three pieces, Understand,
  citing `ejecting-mass`, where the book says the centre of mass of the system
  is in free fall), `cq2` (fs-id1279088, the motionless astronaut in the
  middle of the space station, Understand, citing `propulsion`) and `cq3`
  (fs-id1656529, a rocket moving faster than its own exhaust, Analyze, citing
  `ejecting-mass`).
- 5 problems keyed and kept: `p1` (fs-id1106358, the antiballistic missile,
  number, 39.2 m/s²), `p3` (fs-id2687489, the space probe that expels 3500 kg,
  number, 4.16 × 10³ m/s), `p5` (fs-id2605458, derive the vertical
  acceleration of a rocket, open with the book's own derivation), `p8`
  (fs-id2339225, how much of a 100,000 kg single-stage rocket can be anything
  but fuel, number, 2.63 × 10³ kg) and `p9` (fs-id3112790, the squid ejecting
  fluid against friction, multi, 0.421 m/s and 0.237 J).
- 7 problems left out, having no answer in the book's key: 2 (fs-id2692650,
  the rocket taking off from the Moon), 4 (fs-id2507085, the ion-propulsion
  probe), 6 (fs-id2000707, the maximum burn rate for seven g), 7
  (fs-id2725128, the fire extinguisher and the toy wagon), the Unreasonable
  Results item (fs-id2751219, the flying squid) and the two Construct Your Own
  Problem items (fs-id2984662, the astronaut and her packages, and
  fs-id2601120, the artillery projectile and the armour plate).
- Nothing is taken from another section: the chapter's AP items and its recoil
  problems test the conservation of momentum and the collisions of 8.1 to 8.6,
  and none of them turns on the thrust, the acceleration or the mass ratio of
  a rocket. Nothing of this section's is held for a later one either, since
  8.7 is the last section of the chapter.
- The book prints "Professional Application" above eight of these items. It is
  a curricular label rather than a topic, and 2.4 and 2.5 dropped it when they
  met it, so it is dropped here too and no `tag` is written.
- No generated questions. `multistage-rocket` has no exercise of its own in
  the book: the nearest is problem 8, which asks what fraction of a
  single-stage rocket can be payload and is the reason stages exist, and it is
  tagged with the node at weight 2 rather than a question being written.
- Weights: `p1` and `p3` turn on the acceleration and the mass-ratio equations
  alone; `p5` gives `rocket-thrust` and `rocket-acceleration` their full value
  and `rocket-propulsion` weight 2, since the derivation runs through Newton's
  third law; `p8` gives `rocket-velocity-mass-ratio` its full value and
  `multistage-rocket` weight 2; `p9` gives `rocket-propulsion` its full value
  and `rocket-thrust` weight 2, since the squid's recoil is the principle
  rather than the equation.

## Views

- Formulas: the three equations of the section already in `chapter.json`, all
  three important (the acceleration of a rocket, the thrust, and the final
  velocity of a one-stage rocket).
- Definitions: the ten variables of the section; the section defines no
  glossary term, so it adds nothing to the definitions view.
- Concept map: the six nodes above with their edges into 2.7, 4.4, 8.1, 8.2
  and 8.3.

## Colour

The page binds velocity, force, acceleration, momentum and time. `sim-rocket`
draws the exhaust velocity of the gas and the momentum of the rocket as
arrows, the thrust and the weight as the free-body pair, and the acceleration
against time in its graph; `sim-mass-ratio` draws the final velocity against
the mass ratio and carries the exhaust velocity on a slider. Momentum is bound
so that the impulse $\kdp = -mg\kdt$ of the running text wears the hue the
chapter gave it. The mass, the ejected mass, the burn rate, the mass ratio and
the percentages stay untyped and in ink, as the book's own rules say.

## Wanted at chapter level

- variables `a` → 8.7-ejecting-mass
- variables `v_e` → 8.7-ejecting-mass
- variables `m` → 8.7-ejecting-mass
- variables `Δm` → 8.7-ejecting-mass
- variables `Δt` → 8.7-ejecting-mass
- variables `g` → 8.7-ejecting-mass
- variables `F_thrust` → 8.7-factors
- variables `v` → 8.7-mass-ratio
- variables `m_0` → 8.7-mass-ratio
- variables `m_r` → 8.7-mass-ratio
- equations `eq-rocket-acceleration` → 8.7-ejecting-mass
- equations `eq-rocket-thrust` → 8.7-factors
- equations `eq-rocket-velocity` → 8.7-mass-ratio
- The `F_thrust` variable row and `eq-rocket-thrust` are anchored at `factors`
  rather than at `ejecting-mass`: the word thrust appears in both spans, but
  it is the paragraph on the three factors that names the quantity
  $(\Delta m/\Delta t)\kve$, gives its units and calls it thrust.

Decided in the chapter pass (2026-09-12). The ten variable anchors and the three
equation anchors above are written, `F_thrust` and `eq-rocket-thrust` anchored
at `8.7-factors` for the reason the plan gives.

`config.md` said the rocket's free-body diagram would be a still picture. It is
not: `sim-rocket` burns the fuel away over a finite loop and carries the
transport, and this section's plan argues the case correctly under rule 14—a
free body alone has no clock in it, but a figure that empties the tank does. The
config line is corrected to say what the chapter built.

The six items of this section that the book labels "Professional Application"
had the label dropped altogether rather than kept; all six now carry it as a
`tag`, which is the chapter's convention.
