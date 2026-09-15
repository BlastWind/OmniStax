# Plan: 15.1 The First Law of Thermodynamics (m42232)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's standing instruction to finish the book in
waves; the per-section stop of rule 2, the plan review of rule 5 and the user
picks of rule 15 are replaced by this file, written before the section was
built and left for review after, as `ch15/config.md` records.

The chapter's opening section. It takes the conservation of energy of
Chapter 7 and the heat of Chapter 14 and writes them into one equation for a
system whose energy comes and goes as heat transfer and as work,
$\kdEint = \kQh - \kW$, fixes the signs, separates the two kinds of energy in
transit from the internal energy that is stored, shows by one worked example
that the change in internal energy depends on the two end states and not on
the path between them, and turns the law on the human body. One photograph
(15.2), three schematic figures (15.3 to 15.5), one worked example, two
Making Connections boxes, one table (Table 15.1), three glossary terms, six
AP items of which one belongs to 15.5, seven conceptual questions and nine
problems of which five are keyed. One page (rule 11).

## Sub-concepts (page headers)

The book prints three headers of its own, Heat $Q$ and Work $W$, Internal
Energy $E_\text{int}$ and Human Metabolism and the First Law of
Thermodynamics, and they are kept as written (`ch15/config.md`). The opening
block has no header and gets one; the State 1 to State 2 passage, Example
15.1 and Figure 15.4 sit under the book's Internal Energy header but carry two
concepts of their own, so they are given a header of the agent's.

1. `first-law` **The first law of thermodynamics** (book: Figure 15.2, the
   opening paragraph with the equation and the sign conventions, Figure 15.3,
   the first Making Connections box). The variables $\kdEint$, $\kQh$, $\kW$,
   $\kQin$, $\kQout$, $\kWout$, $\kWin$ and the equation `eq-first-law`
   anchor here.
2. `heat-and-work` **Heat $Q$ and Work $W$** (book: the one paragraph under
   that header, the bicycle tire).
3. `internal-energy` **Internal Energy $E_\text{int}$** (book: the two
   paragraphs that define it in the atomic and in the macroscopic view, the
   restated equation, the paragraph on the experiments, the second Making
   Connections box). The variable $\kEint$ anchors here.
4. `path-independence` **The same change in internal energy by two different
   paths** (book: the State 1 to State 2 paragraph, Example 15.1 with its
   strategy, both solutions and both discussions, Figure 15.4). The variables
   $\kEintone$, $\kEinttwo$, $\kQheatone$, $\kQheattwo$, $\kWone$, $\kWtwo$
   and the equation `eq-internal-energy-change` anchor here.
5. `metabolism` **Human Metabolism and the First Law of Thermodynamics**
   (book: the six paragraphs from the definition of metabolism to
   photosynthesis, Figure 15.5, Table 15.1).

The example is numbered 15.1 as the publisher prints it. The reference to
Conservation of Energy in the second conceptual question and the reference to
the Problem-Solving Strategy of 15.5 in the sixth problem are plain text, as
every cross-reference of the book is; the sixth problem is unkeyed and left
out in any case. Learning objectives, the section summary and the three
glossary terms come out of the running text into the tables and the views
(rule 4).

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| first-law-of-thermodynamics | result, eq-first-law | first-law | the first equation and the boxed note; Figure 15.3; every problem |
| heat-and-work-sign-convention | idea | first-law | the sentence on the sign conventions; the in and out arrows of 15.3; the keyed AP item on −320 J |
| heat-and-work-are-energy-in-transit | idea | heat-and-work | the bicycle tire; Table 15.1; three conceptual questions |
| internal-energy | idea | internal-energy | the two views of it; the second boxed note; the conceptual question on food energy |
| internal-energy-is-a-state-function | result, eq-internal-energy-change | path-independence | the State 1 to State 2 paragraph; the two paths of Example 15.1 and Figure 15.4 |
| calculate-internal-energy-change | skill | path-independence | Example 15.1 step by step; the keyed problems on the gasoline and the woman's work |
| human-metabolism-first-law | idea | metabolism | the Human Metabolism passage; Figure 15.5; the yogurt, the Washington Monument and the man's daily rate |

The section leans on `conservation-of-energy`, `forms-of-energy` and
`efficiency` (7.6), `work` and `work-sign` (7.1), `net-work` and
`kinetic-energy` (7.2), `potential-energy` (7.3), `energy-conversion-in-humans`
and `metabolic-rate` (7.8), `temperature` (13.1), and `heat`,
`heat-vs-temperature`, `units-of-heat` and
`internal-energy-changed-by-heat-or-work` (14.1); the coverage rows mark each
as used where the text uses it. The passage's word "irreversible" is 15.3's
concept and is not marked here.

## Figures

id · replaces or Sim · concepts · value add · moving or still · sliders ·
headline · graph · 3D

1. `fig-tea-kettle` · Figure 15.2, the boiling tea kettle · photograph,
   **kept**: the section's first conceptual question asks the reader to
   describe this photograph in terms of heat transfer, work and internal
   energy, so the reader must be able to see it · width 250.
2. `sim-first-law` · replaces Figure 15.3, the system with $Q$ in and $W$
   out and the two arrow sums beside it · first-law-of-thermodynamics,
   heat-and-work-sign-convention · variation by slider: the book draws one
   net heat arrow, one net work arrow and two arrow sums in the margin, and
   the reader has to imagine what happens when heat leaves or work is done on
   the system; here each of the four transfers is its own arrow whose width
   is the energy it carries, the two nets are summed beneath, and a gauge
   inside the system shows the internal energy rising or falling · **still**:
   the law is a balance between the start and the end of a process and has no
   clock in it, so the figure answers its sliders and registers no cycle
   (rule 14; `ch15/config.md` says the same of every first-law figure) ·
   $\kQin$ (0 to 100 J, default 40, energy), $\kQout$ (0 to 100 J, default
   25, energy), $\kWout$ (0 to 100 J, default 10, energy), $\kWin$ (0 to
   100 J, default 4, energy); the defaults are the four numbers of Example
   15.1(a), since Figure 15.3 itself carries none · "Heat transfer of 40 J in
   and 25 J out, with 10 J of work done by the system and 4 J done on it,
   raises the internal energy by 9 J." · none: the system with its arrows is
   the picture · 2D. Readout: $\kdEint = \kQh - \kW = (\kQin - \kQout) -
   (\kWout - \kWin)$ with the live numbers; small line on the sign
   convention. Labels: four arrows and a gauge, each labelled once beside its
   thing, on by default (rule 26.7). Draws energy.
3. `sim-two-paths` · replaces Figure 15.4 (a) and (b), the two processes that
   produce the same change · internal-energy-is-a-state-function,
   calculate-internal-energy-change, heat-and-work-sign-convention ·
   variation by slider: the book draws two fixed processes; here the change
   in internal energy is set once and the net heat transfer of each process
   is set separately, and the work follows so that both processes end in the
   same state, which is the whole point of the figure and is otherwise left
   to the reader to believe · **still**: two processes compared by their end
   states have no time in them (rule 14) · $\kdEint$ (−40 to 40 J, default
   9, energy), $\kQh$ of process (a) (−60 to 60 J, default 15, energy), $\kQh$
   of process (b) (−200 to 200 J, default −150, energy); the defaults are
   Example 15.1's · "Process (a) takes in 15.00 J of heat and does 6.00 J of
   work, process (b) gives up 150.00 J of heat and has 159.00 J of work done
   on it, and both raise the internal energy by 9.00 J." · none · 2D.
   Readout: $\kdEint = \kQh - \kW$ written for both processes with the live
   numbers; small line on the path independence. Labels: a net heat arrow
   and a net work arrow per process, each labelled once with its sign and
   direction, on by default. Draws energy.
4. `sim-metabolism` · replaces Figure 15.5 (a) and (b), metabolism and
   photosynthesis · human-metabolism-first-law, first-law-of-thermodynamics ·
   variation by slider: the book draws the body with three arrows and a
   plant with two, and the passage says in words what happens when you eat
   too much or too little; here the reader sets the food energy, the heat
   transfer out and the work done in a day and watches the internal energy
   the body stores go positive, zero or negative · **still**: a day's
   balance has no clock the figure could run (rule 14) · a choice of the body
   or a plant (rule 26.1: two systems, not a quantity). For the body: food
   energy (0 to 15 000 kJ a day, default 10 500, the man of the seventh
   problem, energy), heat transfer out (0 to 15 000 kJ, default 8 400,
   energy), work done (0 to 5 000 kJ, default 2 100, energy, which is the
   20.0% efficiency of the same problem). For the plant: sunlight in (0 to
   1 000 kJ, default 500, energy) and heat transfer out (0 to 1 000 kJ,
   default 450, energy) · "Food brings in 10 500 kJ, heat transfer takes out
   8 400 kJ and work takes out 2 100 kJ, so the internal energy of the body
   is unchanged over the day." · none · 2D. Readout: $\kdEint = \kQh - \kW$
   with food counted as work done on the body, as the passage says; small
   line on fat stored or metabolized and on the body's efficiency. Labels:
   three arrows and a gauge, on by default. The person is the library's
   sprite in ink; the sun and the plant are ink. Draws energy.

Photographs: one, Figure 15.2, kept as above; the section has no other.

Figures that serve exercises: none; no exercise of the section refers to a
figure of its own.

Extra simulations (rule 15), thought through, judged and left:

- A heat engine as a system with heat in and work out, which the opening
  paragraph mentions in one sentence. Left: `sim-first-law` with the heat
  out and the work in set to zero is that picture, and 15.3 builds the
  engine properly.
- The bicycle tire warmed by the Sun and warmed by the pump, the two routes
  to one temperature. Left: `sim-two-paths` is that idea drawn on the
  quantities the section actually defines, and a tire figure would only add
  a sprite.
- A Calorie counter converting food labels to joules. Left: it is a unit
  conversion the reader has from 14.1 and adds no view.

## Exercises

- All at the end: the chapter has no Check Your Understanding box and the
  conceptual questions go to the Exercises tab (`ch15/config.md`).
- 7 conceptual questions, none keyed, each an open item with an AI-marked
  suggested approach: `cq1` (fs-id1169737771878, the tea kettle, Analyze,
  citing `first-law`), `cq2` (fs-id1169736613764, the first law against the
  conservation of energy, Understand, `first-law`), `cq3` (fs-id1169737795632,
  an example of each kind of energy, Understand, `heat-and-work`), `cq4`
  (fs-id1169738066105, which can be stored, Understand, `heat-and-work`),
  `cq5` (fs-id1169737981273, running down stairs, Understand,
  `internal-energy`), `cq6` (fs-id1169736609392, food energy as molecular
  potential energy, Understand, `internal-energy`), `cq7` (fs-id1169738111986,
  sunlight, food and the elevator, Apply, `metabolism`).
- 5 AP items of the section's own kept: `ap1` (fs-id2216854, the cylinder
  divided by a disk, keyed (d), a graded choice, Analyze, `heat-and-work`),
  `ap2` (fs-id2211820, the billiard balls on springs, unkeyed, open with an
  AI-marked approach, Understand, `internal-energy`), `ap3` (fs-id2218737,
  300 J of work done on a system with −320 J of heat transfer, keyed (a), a
  graded choice, Apply, `first-law`), `ap4` (fs-id884487, the snack burned
  off at 150 W, unkeyed, open with an AI-marked approach, Apply,
  `metabolism`), `ap5` (fs-id3184155, the potato cannon, keyed (b), a graded
  choice, Understand, `first-law`).
- 1 AP item held for 15.5: fs-id3826091, what happens inside a closed
  refrigerator or freezer, is answered by the refrigerator of 15.5 and is set
  there with `source_section: "15.1"`; `exercise_notes` says so.
- 5 problems keyed and kept: `p1` (fs-id1169738251354, 12.0 gal of gasoline,
  keyed 1.6 × 10⁹ J), `p3` (fs-id1169738061831, 1.80 × 10⁸ J of work with
  7.50 × 10⁸ J of heat transfer out, keyed −9.30 × 10⁸ J), `p5`
  (fs-id1169738072326, the woman's 500 J of work and 9500 J of heat
  transfer, keyed −1.0 × 10⁴ J and 5.00%), `p7` (fs-id1169738011987, the
  man who metabolizes 10,500 kJ a day, keyed 122 W, 2.10 × 10⁶ J and the
  motor's 1.61 × 10⁷ J), `p9` (fs-id1169737799530, the Washington Monument,
  keyed 492 kJ for part (a) with the book's discussion of part (b) in the
  solution).
- 4 problems left out, having no answer in the book's key: the heat transfer
  from a system whose internal energy fell by 150 J while it did 30.0 J of
  work (fs-id1169737930376), the system that does 4.50 × 10⁵ J of work with
  heat transfer in and out (fs-id1169737725397), the man who does 35.0 kJ of
  work at 5.00% (fs-id1169737755290) and the 1470-kJ cup of yogurt
  (fs-id1169737713466); named in `notes` and `exercise_notes`.
- No generated questions: every node has a book exercise that tests it.
- Weights: `ap1` gives `heat-and-work-are-energy-in-transit` its full value
  and `heat` 2; `ap3` gives `calculate-internal-energy-change` its full value
  and `heat-and-work-sign-convention` 3; `ap4` gives
  `human-metabolism-first-law` its full value and `efficiency` 2; `ap5` gives
  `first-law-of-thermodynamics` its full value and
  `heat-and-work-sign-convention` 2; `cq1` gives
  `first-law-of-thermodynamics` its full value and
  `heat-and-work-are-energy-in-transit` 2; `cq5` gives `internal-energy` its
  full value and `conservation-of-energy` 2; `p1` gives
  `calculate-internal-energy-change` its full value and `internal-energy` 2;
  `p3` gives `calculate-internal-energy-change` its full value and
  `heat-and-work-sign-convention` 3; `p5`, `p7` and `p9` give
  `human-metabolism-first-law` their full value and
  `calculate-internal-energy-change` 3, `p7` adding `metabolic-rate` 2.

## Views

- Formulas: the two equations of the section in `chapter.json`, both
  important (`eq-first-law`, `eq-internal-energy-change`); the worked
  substitution steps of the example are not rows.
- Definitions: the fourteen variables of the section, and three glossary
  terms, first law of thermodynamics, internal energy, human metabolism.
- Concept map: the seven nodes above with their edges into 7.1, 7.2, 7.3,
  7.6, 7.8, 13.1 and 14.1.

## Colour

The page binds energy alone, as `ch15/COLOR.md` decides for 15.1. Heat
transfer, work and internal energy are one type and wear one hue; the
figures tell them apart the way the book does, by where they are drawn: heat
crosses the boundary on the left as an arrow labelled $Q$, work crosses it
on the right as an arrow labelled $W$, and internal energy sits inside as a
gauge labelled $E_\text{int}$. Heat in and heat out are told by the arrow's
direction and its label, never by a second hue. The system, the person, the
sun and the plant are ink. No temperature, pressure or volume is drawn, so
none is bound.

## Wanted at chapter level

- variables `ΔE_int` → 15.1-first-law
- variables `Q_heat` → 15.1-first-law
- variables `W` → 15.1-first-law
- variables `Q_in` → 15.1-first-law
- variables `Q_out` → 15.1-first-law
- variables `W_out` → 15.1-first-law
- variables `W_in` → 15.1-first-law
- variables `E_int` → 15.1-internal-energy
- variables `E_int1` → 15.1-path-independence
- variables `E_int2` → 15.1-path-independence
- variables `Q_heat1` → 15.1-path-independence
- variables `Q_heat2` → 15.1-path-independence
- variables `W_1` → 15.1-path-independence
- variables `W_2` → 15.1-path-independence
- equations `eq-first-law` → 15.1-first-law
- equations `eq-internal-energy-change` → 15.1-path-independence
- No concept or symbol row needs changing; the four symbol rows Example 15.1
  writes ($\kEintone$, $\kEinttwo$, $\kQheatone$, $\kQheattwo$, $\kWone$,
  $\kWtwo$) are all staged and merged.

Applied in the chapter pass (2026-09-14): the fourteen variable anchors and the two equation anchors are set on `chapter.json` as listed, and `ost check` resolves every one. No concept, edge or symbol row was changed.

Figure pass (2026-09-15, Claude Fable 5.1): the three figures were screenshot at every slider extreme and choice in both themes and found to read as built: no label sits on an arrow or a body at any position, every text stays inside the canvas, and no axis rescales. Nothing was changed.
