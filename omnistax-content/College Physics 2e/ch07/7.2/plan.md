# Plan: 7.2 Kinetic Energy and the Work-Energy Theorem (m42147)

Source: `source.md`, converted from the CNXML module. Status: built
2026-09-11 without a review stop, on Chen's instruction to finish the book
in one job; the per-section stop of rule 2, the plan review of rule 5 and
the user picks of rule 15 are replaced by this file, written before the
section was built and left for review after, as Chapters 1 to 3 did it.

The section where the book stops adding up forces and starts adding up
energy. Two sketch figures (7.3 and 7.4), no photograph, one boxed note
(The Work-Energy Theorem), four worked examples, three conceptual
questions, thirteen AP items and seven problems. The chapter has no Check
Your Understanding box anywhere. One page (rule 11).

## Sub-concepts (page headers)

The book carries two titled headers of its own, Work Transfers Energy and
Net Work and the Work-Energy Theorem, and then runs four examples without
a header between them. Five blocks, one per idea:

1. `transfers` **Work transfers energy** (book: the section's opening two
   paragraphs, the lawn mower, the briefcase carried up the stairs and the
   stone blocks of the pyramids). The reference to Figure 7.2 is 7.1's
   figure and keeps the book's wording, which the build links.
2. `net-work` **Net work and the area under the force-distance graph**
   (book: the definition of net work, ${W}_{\text{net}} = {F}_{\text{net}}d
   \cos\theta$, and the paragraph on Figure 7.3, where the work is the area
   under the $F\cos\theta$ against $d$ graph, whether the force is constant
   or varies). The variables $\kWnet$, $\kFnet$, $\kd$ and $\theta$ and the
   equation `eq-wnet` anchor here.
3. `theorem` **The work-energy theorem** (book: the package on the roller
   belt of Figure 7.4, the four forces and which of them do work, the
   derivation through Newton's second law and ${v}^{2} = {v_0}^{2} + 2ad$,
   and the boxed note). The variables $\kFa$, $\kff$, $\kN$, $m$, $\ka$,
   $\kv$ and $\kvo$ and the equations `eq-wnet-parallel`, `eq-wnet-mad` and
   `eq-wet` anchor here.
4. `kinetic-energy` **Kinetic energy** (book: the paragraph that names
   $\tfrac{1}{2}m{v}^{2}$ the translational kinetic energy, the paragraph on
   the square of the speed, and Example 7.2, the kinetic energy of the
   package). $\kKE$ and `eq-ke` anchor here; the example is
   `ex-package-ke`.
5. `worked` **Finding a work, a speed and a distance from energy** (book:
   Examples 7.3, 7.4 and 7.5 — the net work found twice, the speed at the
   end of the push and the distance the package coasts — and the closing
   paragraph on why solutions through energy are shorter). $\kWapp$,
   $\kWfr$, $\kWgr$, $\kWN$ and $\kWtot$ anchor here; the examples are
   `ex-net-work`, `ex-speed` and `ex-distance`.

The concept map makes kinetic energy a prerequisite of the work-energy
theorem, and the page introduces them the other way round, because the
book derives the theorem first and only then names the quantity it
changes. The prose is the book's and keeps its order.

Cross references to other chapters are plain text, as the chapter config
decided: "Dynamics: Force and Newton's Laws of Motion" and "Motion
Equations for Constant Acceleration in One Dimension". The converter
flattened the aircraft-carrier problem's link to `[m42151](module:m42151)`
and the opening paragraphs' links to `[m42146](module:m42146)`; the CNXML
target ids say the book prints Table 7.1 and Figure 7.2, so those are what
the text writes.

Learning objectives, the section summary and the three glossary terms come
out of the running text into the tables and the views.

## Concept nodes (already in `book.json`)

| id | kind | introduced in | evidence |
|---|---|---|---|
| work-transfers-energy | idea | transfers | the opening paragraphs; conceptual questions 1 and 2 |
| net-work | idea, eq-wnet | net-work | the definition of net work; Figure 7.4's four forces; Example 7.3 |
| work-as-area | result | net-work | Figure 7.3(a) and (b); the crane AP item held from 7.1; the Critical Thinking item held from 7.9 |
| kinetic-energy | result, eq-ke | kinetic-energy | the definition; Example 7.2; problems 1 and 2 |
| work-energy-theorem | result, eq-wet | theorem | the derivation and the boxed note; Examples 7.4 and 7.5; problems 3 to 7; the rocket-payload AP item held from 7.1 |
| speed-from-work-energy | skill | worked | Examples 7.4 and 7.5; problems 4 to 7 |

`kinetic-energy` was a placeholder pointing at this section since Chapter
16 was built and is now this section's own. The section leans on `work`,
`work-sign` and `joule` (7.1), `net-external-force` and
`newtons-second-law` (4.3), `kinetic-friction` (5.1), `v-squared` (2.5),
`instantaneous-speed` (2.3) and `mass` (4.2), all of which the coverage
rows mark as used where the text uses them.

## Figures

id · replaces or Sim · concepts · what moves or still · sliders · headline
· graph · 3D

1. `sim-area` · replaces Figure 7.3 (a) and (b), which are two parts of one
   number and so are one row, not a fold · work-as-area, net-work ·
   **still**: the idea has no time in it. The picture answers its sliders —
   how hard the force pushes at the start, how hard at the end, and how far
   it acts — and nothing travels and nothing accumulates as a clock runs, so
   it registers no cycle and carries no transport (rule 14) · the force at
   the start of the push $\kF$ (0 to 200 N, default 115, force), the force
   at the end (0 to 200 N, default 115, force), the distance $\kd$ (0.2 to
   2.0 m, default 0.800, position) · "$F\cos\theta$ holds at 115 N over
   0.800 m, so the area under the line is W = 92.0 J" and, when the two
   forces differ, "the force climbs from 40 N to 190 N over 0.800 m, and the
   eight strips add to W = 92.0 J" · the graph is the figure: $F\cos\theta$
   against $d$, the area under the line shaded in the energy hue, and, when
   the force varies, cut into eight strips each labelled with its own
   average force, as the book's part (b) draws them · no 3D. Readout:
   $\kW = (F\cos\theta)\kd$ with the numbers when the force is constant, and
   the sum of the strips when it is not. Draws force, position, energy.
   Defaults are the net force and the distance of Example 7.3, so the figure
   loads showing the 92.0 J of the package.
2. `sim-package` · replaces Figure 7.4 · net-work, work-energy-theorem,
   kinetic-energy, speed-from-work-energy · **moves**: the idea has a time
   in it, since the package accelerates from ${v}_{0}$ to $v$ while the net
   force acts and the kinetic energy accumulates as it goes, so the figure
   runs the push once per loop and takes the scrubber · the applied force
   $\kFa$ (40 to 200 N, default 120, force), the friction force $\kff$ (0 to
   30 N, default 5.00, force), the distance of the push $\kd$ (0.2 to 2.0 m,
   default 0.800, position), the initial speed $\kvo$ (0 to 3 m/s, default
   0.500, velocity) · "d = 0.52 m · the net force has done 59.4 J, so the
   package carries 63.2 J and moves at 2.05 m/s" · graph below the strip:
   the kinetic energy against the distance travelled, a straight line of
   slope ${F}_{\text{net}}$ rising from ${\text{KE}}_{0}$, with the initial
   value hollow, the current value filled and a bracket between them for the
   net work · no 3D. Readout: the work-energy theorem with the live numbers;
   the small line gives the distance the package would coast once the push
   stops, which is Example 7.5. Draws force, position, velocity, energy.
   Defaults are the book's 120 N, 5.00 N, 0.800 m and 0.500 m/s on a 30.0-kg
   package, so the figure loads on Examples 7.2 to 7.5.
3. `sim-ke` · Sim, replacing nothing in the book · kinetic-energy ·
   **still**: kinetic energy is a property of a speed, not of a history, so
   the figure answers its two sliders and nothing runs · the mass $m$ (10 to
   2000 kg, default 900, ink, since mass is untyped) and the speed $\kv$ (0
   to 40 m/s, default 27.8, velocity) · "at 27.8 m/s a 900 kg car carries
   348 kJ, four times the 86.9 kJ it carries at half that speed" · the graph
   is the figure: $\text{KE}$ against $\kv$, the parabola $\tfrac{1}{2}mv^2$
   with the current speed filled and half that speed hollow, and two bars
   beside it so the factor of four can be seen rather than read · no 3D.
   Readout: $\kKE = \tfrac{1}{2}m\kv^2$ with the numbers; the small line
   states the ratio. Draws velocity, energy.

The section has no photograph to keep or drop. Three figures sit inside
exercises and are unnumbered, as the book leaves every figure inside an
exercise: the lawn mower of conceptual question 1, the crane's
force-distance graph of the AP item held from 7.1, and the $W$ against $x$
graph inside the solution of the Critical Thinking item held from 7.9. Each
rides on its own exercise card rather than in the narrative, as 2.8's
graphs and 4.5's diagrams do, so none of them is a row of the figures table;
the two prompts carry theirs as the card's `figure` and the Critical
Thinking solution carries its graph inline, as 2.8's Check Your
Understanding answer does.

Extra simulations (rule 15). Thought about first, then judged:

- **Built: `sim-ke`.** The two required figures both draw the kinetic
  energy against a distance, where it rises in a straight line; neither
  shows it against the speed, and the square of the speed is the one thing
  the text stops to insist on ("a car traveling at 100 km/h has four times
  the kinetic energy it has at 50 km/h, helping to explain why high-speed
  collisions are so devastating"). Two of the section's problems compare a
  truck with an astronaut and an elephant with a sprinter, which is the same
  comparison. A parabola with the half-speed point marked beside it gives
  the reader that factor of four at a glance, which no other figure here
  does, so it earns its place.
- Left: the package coasting to rest after the push (Example 7.5). It is
  the same scene and the same theorem with the sign of the work reversed,
  and 19.2 m of coasting beside 0.800 m of pushing leaves the push
  invisible. `sim-package` states the coasting distance in its readout
  instead.
- Left: a force turned through the angle $\theta$ while the displacement
  stays put, to show the work change sign as the angle passes 90°. Three of
  the AP items turn on exactly that, but it is $W = Fd\cos\theta$, which is
  7.1's own figure, and repeating it here would say nothing new.
- Left: a cart round a loop-the-loop with gravity doing work on it, which
  two AP items describe. It needs the potential energy of 7.3 and the
  vertical circle of 6.3 to be honest, and without them it would be a
  drawing of an answer rather than a figure of this section.
- Left: an energy account that runs any of the chapter's scenes and keeps
  one bar chart of every kind of energy beside it. It belongs to the whole
  chapter rather than to this section, and `exploration.md` leaves it for a
  later pass.

## Exercises

- Nothing of the book's own is inline, since the chapter prints no Check
  Your Understanding box anywhere. Conceptual question 2 ("Work done on a
  system puts energy into it... Give an example for each statement") is a
  plain Understand check on the passage it follows, so it is set inline
  after `transfers`, as the chapter config allows and as 4.3 did with its
  two shortest questions.
- 3 conceptual questions, `cq1` to `cq3`, Understand, none keyed, each with
  an AI-marked suggested approach. `cq1` carries the book's lawn-mower
  figure on its card.
- 13 AP items, `ap1` to `ap13`, in the book's order. Six are keyed
  (`ap2`, `ap4`, `ap6`, `ap8`, `ap10`, `ap12`) and carry the book's own
  answer as an open solution. Seven are not, and each is kept as an open
  item with its options as the book prints them and an AI-marked suggested
  approach, as rule 13 and the 2.5, 3.1 and 4.1 precedents do.
- 2 AP items taken from 7.1 with `source_section: "7.1"`, as the chapter's
  exploration asks: `ap-rocket` (fs-id2527597, the force a rocket engine
  exerts on a 3.0-kg payload, read off a table of distance against final
  velocity) is the work-energy theorem and nothing else, and `ap-crane`
  (fs-id2714107, the total work as the force ramps up, holds and winds down
  over 60 m) is the work under a force-distance graph, which is Figure
  7.3's. Both are keyed by the book, so both are graded choice items with
  the book's options; the rocket item carries its table in the prompt and
  the crane item its graph on the card.
- 1 Critical Thinking item taken from 7.9 with `source_section: "7.9"`:
  `ct1` (exer-86622, two boxes released by two pistons) turns on the work
  done by a varying force as the area under a force-distance graph and on
  the work-energy theorem, both of them this section's. It is keyed, and
  the graph of $W$ against $x$ that the book prints in part (c) of the key
  goes with it, inside the solution.
- 4 problems keyed and kept: `p1` (the truck against the astronaut in
  orbit, the ratio 1/250), `p3` (the kinetic energy of the aircraft carrier
  of Table 7.1, $1.1\times10^{10}$ J), `p5` (the bumper that collapses
  0.200 m, $2.8\times10^{3}$ N) and `p7` (the sprinter against a headwind,
  102 N).
- 3 problems left out, having no answer in the book's key: 2 (fs-id1628939,
  the elephant and the sprinter), 4 (fs-id2075342, the car stopped in 120 m
  and against an abutment) and 6 (fs-id2126703, the boxing glove). Named in
  `notes` and `exercise_notes`.
- Left with their own sections: 7.1's spring AP item (fs-id2713956) needs
  ${\text{PE}}_{s}$ and goes to 7.4, and the two mechanical-energy AP items
  of this section (`ap9`, fs-id1130691, and `ap10`, fs-id1353464) name
  mechanical energy, which 7.4 defines, but each is the same question about
  the sign of the work as the rest of this set and each is answered from the
  work-energy theorem alone, so both stay here, as the exploration judged.
- No generated questions: every node of the section has a book exercise
  that tests it.
- Weights (rule 20): `p1` and `p3` turn on the kinetic energy alone;
  `ap-crane` and `ct1` give `work-as-area` the full value and
  `work-energy-theorem` less, since the area is the work the question asks
  for; `cq1` and `cq2` give `work-transfers-energy` the full value and
  `net-work` less; the items that only ask whether the kinetic energy rises
  or falls give `work-energy-theorem` the full value and `net-work` less.

## Views

- Formulas: the five equations of the section already in `chapter.json`,
  `eq-wnet`, `eq-ke` and `eq-wet` important and the two derivation steps
  not.
- Definitions: the seventeen variables of the section; the three glossary
  terms (net work, work-energy theorem, kinetic energy).
- Concept map: the six nodes above with their edges into 2.3, 2.5, 4.2,
  4.3, 5.1 and 7.1.

## Colour

The page binds force, position, velocity and energy. Every figure colours
an energy: the shaded area of `sim-area`, the kinetic energy axis and the
net-work bracket of `sim-package`, the parabola and the two bars of
`sim-ke`. Force is on four sliders and on the four arrows of the package.
Position is on the distance slider of two figures and on the bracket under
the belt. Velocity is on the initial-speed slider, on the velocity arrow of
the package and on the speed axis of `sim-ke`. Mass, the angle $\theta$
between the force and the displacement, and the times the headlines state
stay in ink; time is not coloured anywhere on the page, since nothing draws
it.

## Wanted at chapter level

- variables `W_net` → 7.2-net-work
- variables `F_net` → 7.2-net-work
- variables `d` → 7.2-net-work
- variables `θ` → 7.2-net-work
- variables `m` → 7.2-theorem
- variables `a` → 7.2-theorem
- variables `v` → 7.2-theorem
- variables `v0` → 7.2-theorem
- variables `F_app` → 7.2-theorem
- variables `f_fric` → 7.2-theorem
- variables `N` → 7.2-theorem
- variables `KE` → 7.2-kinetic-energy
- variables `W_app` → 7.2-worked
- variables `W_fr` → 7.2-worked
- variables `W_gr` → 7.2-worked
- variables `W_N` → 7.2-worked
- variables `W_total` → 7.2-worked
- equations `eq-wnet` → 7.2-net-work
- equations `eq-wnet-parallel` → 7.2-theorem
- equations `eq-wnet-mad` → 7.2-theorem
- equations `eq-wet` → 7.2-theorem
- equations `eq-ke` → 7.2-kinetic-energy
- symbols `F_fr` with LaTeX `F_{\text{fr}}`, type `force` and macro
  `\kFfr`. The book writes the friction force of this section as $f$
  everywhere except in Example 7.3, where it once writes
  ${F}_{\text{fr}}$; the `f_fric` row covers the first spelling and there
  is no row for the second, so the text sets that one occurrence in plain
  LaTeX and it stands in ink where every other force on the page is
  coloured. A row would colour it. This is a book-level table, so the
  chapter pass decides whether it is worth one symbol for one appearance.

**Decided in the chapter pass, 2026-09-11.** Every anchor asked for above is
written into `ch07/chapter.json`, the seventeen variable rows and the five
equation rows.

The symbol `F_fr` is worth its row, so it was added to `book-rows.json` with the
LaTeX `F_{\text{fr}}`, the type `force` and the macro `\kFfr`, and merged. The
book writes the friction force of this section as $f$ everywhere but once, and
that one occurrence sat in ink in the middle of Example 7.3 while the applied
force, the normal force and the weight around it were all coloured, which reads
as a mistake rather than as a distinction. Solution (b) of Example 7.3 now
writes $\kFfr$, and the symbol is one row for one appearance, which is what the
rule that every coloured symbol has a row asks for.

The card for `cq2` had nowhere to render: the item is placed inline after the
span `transfers`, and `text.html` carried no host for it. A
`<div class="exercises" data-place="transfers"></div>` now closes that section,
where 7.7 and the other sections of the chapter put theirs.
