# Plan: 15.6 Entropy and the Second Law of Thermodynamics: Disorder and the Unavailability of Energy (m42237)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's standing instruction to finish the book in
waves; the per-section stop of rule 2, the plan review of rule 5 and the user
picks of rule 15 are replaced by this file, written before the section was
built and left for review after, as `ch15/config.md` records.

The section that names the quantity the whole chapter has been circling. It
takes the Carnot ratio of 15.4, rearranges it into a ratio of heat transfer
to temperature that is the same at both reservoirs, and defines that ratio
as the change in entropy; shows that entropy is a property of state, so that
its change is the same by any path; finds that a Carnot cycle changes the
total entropy not at all and an irreversible heat transfer increases it;
states the second law a fourth time, in entropy; connects the increase to the
work that can no longer be done, $W_\text{unavail} = \Delta S\cdot T_0$;
looks ahead to the heat death of the universe; ties entropy to disorder in
melting ice and mixing water; and answers the objection that life violates
the law. One photograph (15.31), five schematic figures (15.32 to 15.36),
three worked examples, one Making Connections box, three glossary terms, two
AP items, nine conceptual questions and ten problems of which five are keyed.
One page (rule 11).

## Sub-concepts (page headers)

The book prints four headers of its own, Entropy and the Unavailability of
Energy to Do Work, Heat Death of the Universe: An Overdose of Entropy, Order
to Disorder, and Life, Evolution, and the Second Law of Thermodynamics, and
they are kept as written (`ch15/config.md`). The opening block has no header
and carries two ideas with a worked example between them, so it is split in
two under headers of the agent's.

1. `entropy-defined` **Entropy, a property of state** (book: the opening
   paragraph, the Making Connections box, the rearranged Carnot ratio, the
   definition of $\Delta S$ and its unit, the property-of-state paragraph,
   Figure 15.32). The variables $\kSent$, $\kdS$, $\kQh$, $\kTemp$ and the
   equations `eq-reversible-heat-ratio` and `eq-entropy-change` anchor here.
2. `entropy-second-law` **Entropy in reversible and irreversible processes**
   (book: the Carnot cycle's total change in entropy and its two equations,
   the italic result for reversible processes, Example 15.6 with Figure
   15.33, the italic result for irreversible processes, the fourth version of
   the second law, the paragraph that entropy is not conserved). The
   variables $\kdSh$, $\kdSc$, $\kdStot$, $\kQH$, $\kQC$, $\kTemph$, $\kTempc$
   and the equations `eq-total-entropy` and `eq-reversible-total-entropy`
   anchor here.
3. `unavailable-work` **Entropy and the Unavailability of Energy to Do Work**
   (book: the paragraph under that header, Example 15.7 with Figure 15.34,
   the paragraph on energy becoming permanently unavailable and its two
   equations). The variables $\kWunavail$ and $\kTempo$ and the equation
   `eq-unavailable-work` anchor here.
4. `heat-death` **Heat Death of the Universe: An Overdose of Entropy** (book:
   the seven paragraphs under that header).
5. `order-to-disorder` **Order to Disorder** (book: the paragraph on
   Boltzmann and the melting block of ice, Example 15.8, Figure 15.35, the
   five paragraphs on mixing water at two temperatures). The variables $m$
   and $L_\text{f}$ and the equation `eq-melting-heat` anchor here.
6. `life-and-evolution` **Life, Evolution, and the Second Law of
   Thermodynamics** (book: the four paragraphs under that header with the
   inequality, Figure 15.36). The variables $\kdSsyst$ and $\kdSenvir$ and
   the equation `eq-entropy-system-environment` anchor here.

The three examples are numbered 15.6, 15.7 and 15.8 as the publisher prints
them. The book's lowercase "entropy $s$" in the property-of-state paragraph,
and the $T'_\text{c}$ of Example 15.7's part (b) where Figure 15.34 calls
the same reservoir $T'_\text{h}$ are kept as printed and named in `notes`. Two problems cite
the Problem-Solving Strategies for Entropy of 15.7 as plain text; both are
unkeyed and left out in any case. The PhET note Reversible Reactions is
dropped and named in `notes`. Learning objectives, the section summary and
the three glossary terms come out of the running text into the tables and
the views (rule 4).

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| entropy | idea | entropy-defined | the term, the Making Connections box, the property-of-state paragraph, Figure 15.32 |
| change-in-entropy | result, eq-entropy-change | entropy-defined | the rearranged ratio and the definition; Examples 15.6 and 15.8; the keyed problems on the rock, the mirror and the house |
| irreversible-process-increases-entropy | result, eq-total-entropy | entropy-second-law | Example 15.6 and Figure 15.33; the italic result; the house, the Sun and the power station |
| second-law-entropy-statement | result, eq-reversible-total-entropy | entropy-second-law | the zero total of the Carnot cycle; the fourth version in italics; the conceptual question on adiabatic processes |
| calculate-entropy-change | skill | entropy-second-law | Example 15.6 step by step, Example 15.8, every keyed problem |
| unavailable-energy | result, eq-unavailable-work | unavailable-work | Example 15.7 and Figure 15.34; the 933 J recovered from $\Delta S\cdot T_0$; the Sun and the power station problems |
| heat-death-of-the-universe | idea | heat-death | the seven paragraphs; the conceptual question on the radiating star |
| entropy-and-disorder | idea | order-to-disorder | Example 15.8 and Figure 15.35; the mixed water and its three outcomes; the cottage, the liquefying gas, the uniform gas, the bricks |
| entropy-and-life | idea, eq-entropy-system-environment | life-and-evolution | the inequality; the marbles and the bridge; Figure 15.36; the conceptual question on freezing water |

The section leans on `carnot-efficiency`, `carnot-cycle` (15.4),
`heat-engine-efficiency`, `heat-engine-work-output`, `irreversible-process`,
`second-law-heat-flow-direction` (15.3), `reversible-process`, `heat-engine`
(15.2), `internal-energy-is-a-state-function` (15.1), `heat` (14.1),
`heat-of-fusion`, `latent-heat` (14.3), `temperature-scales` (13.1) and
`energy-degradation` (7.9); the coverage rows mark each as used where the
text uses it.

## Figures

id · replaces or Sim · concepts · value add · moving or still · sliders ·
headline · graph · 3D

1. `Figure 15.31`, the drink with melting ice · photograph, **dropped**: it
   is the splash image at the head of the section, the passage never points
   at it, and Example 15.8's block of ice is drawn by `sim-melting-ice`
   (`ch15/config.md` drops it by default and allows a section to keep it;
   nothing here needs it).
2. `sim-state-paths` · replaces Figure 15.32, state 1 to state 2 by a
   reversible and an irreversible path · entropy, change-in-entropy,
   internal-energy-is-a-state-function · variation by slider and intuition:
   the book draws two arrows between two circles and writes that the change
   is the same; here each state carries a gauge of its entropy, the reader
   sets the heat transfer and the temperature of the reversible path, and
   the level in state 2 rises or falls by $Q/T$ while the irreversible path
   arrives at the same level whatever it did on the way · **still**: the
   figure compares two end states, and a path drawn between them is a
   sequence and not a clock (rule 14) · $\kQh$ of the reversible path (−8000
   to 8000 J, default 4000, energy) and $\kTemp$ (100 to 1000 K, default
   250, temperature); the defaults are the cold reservoir of Example 15.6 so
   the figure previews its 16.0 J/K · "A reversible heat transfer of 4000 J
   at 250 K raises the entropy by 16.0 J/K, and the irreversible path ends
   at the same entropy." · none: the two states and their paths are the
   picture · 2D. Readout: $\kdS = (\kQh/\kTemp)_\text{rev} = S_2 - S_1$ with
   the live numbers; small line on the property of state. Labels: two states
   named once, two paths named once, on by default (rule 26.7). Draws
   entropy, energy, temperature.
3. `sim-irreversible-transfer` · replaces Figure 15.33 (a) and (b), the
   direct irreversible transfer and its two reversible stand-ins ·
   irreversible-process-increases-entropy, second-law-entropy-statement,
   calculate-entropy-change, change-in-entropy · variation by slider: the
   hot reservoir loses $Q/T_\text{h}$ and the cold one gains $Q/T_\text{c}$,
   drawn as two bars in the entropy hue beside the reservoirs, and the cold
   bar is always the taller; a slider bringing the two temperatures together
   shrinks the difference to nothing, which is the reversible limit the
   Carnot cycle's zero total describes, and pulling them apart grows it ·
   **still**: a transfer between two reservoirs whose temperatures do not
   change has no clock the figure could run, and the two panels of the book
   are two accounts of one end state (rule 14) · a choice, labelled direct or
   reversible, of the direct irreversible transfer or the two reversible
   processes (rule 26.1: the book's two panels are two states of the figure,
   not a quantity; the scene names each state in full), $\kQh$
   (0 to 8000 J, default 4000, energy), $\kTemph$ (300 to 1000 K, default
   600, temperature), $\kTempc$ (100 to 1000 K, default 250, temperature;
   where it is set above the hot reservoir the transfer runs the other way
   and the readout says the total would be negative, which the second law
   forbids) · "Heat transfer of 4000 J from 600 K to 250 K takes 6.67 J/K
   from the hot reservoir and gives 16.0 J/K to the cold one, an increase of
   9.33 J/K." · beside: the two reservoirs stand one above the other, so the
   bars sit to their right · 2D. Readout: $\kdStot = -\kQH/\kTemph +
   \kQC/\kTempc$ with the live numbers; small line saying the same change
   comes from the reversible stand-in, or that the total is zero in the
   reversible limit. Labels: two reservoirs with their temperatures, the
   arrow or arrows with $Q$, three bars, on by default. Draws entropy,
   energy, temperature.
4. `sim-two-engines` · replaces Figure 15.34 (a) and (b), the Carnot engine
   fed directly and the one fed after the heat has fallen to a colder
   reservoir · unavailable-energy, carnot-efficiency,
   irreversible-process-increases-entropy, calculate-entropy-change ·
   variation by slider: the book draws two engines with fixed numbers and the
   passage says the 933 J is $\Delta S\cdot T_0$; here the reader sets the
   heat transfer, the hot temperature, the intermediate reservoir and the
   cold temperature, the work arrows thin or fatten with the Carnot
   efficiency, and the difference between them is written beside the
   entropy increase that caused it, so the 933 J is something the reader
   watches disappear · **still**: two engines compared by their work per
   cycle have no time in them (rule 14) · $\kQH$ (1000 to 8000 J, default
   4000, energy), $\kTemph$ (400 to 1000 K, default 600, temperature),
   $\kTemphprime$ (150 to 1000 K, default 250, temperature; set above
   $T_\text{h}$ the readout says no heat would fall that way), $\kTempc$ (50
   to 400 K, default 100, temperature) · "Fed directly from 600 K the engine
   does 3333 J of work; fed after the 4000 J has fallen to 250 K it does
   2400 J, and 933 J can no longer be done." · none: the two engines side by
   side with arrows as wide as their energies are the picture · 2D. Readout:
   $\kW = \text{Eff}_\text{C}\kQH$ for both engines and $\kWunavail =
   \kdS\cdot\kTempo$ with the live numbers; small line on the entropy
   increase of the first transfer. Labels: four reservoirs with their
   temperatures, two engines, seven arrows labelled with their energies, on
   by default since none moves and none collides at any slider position.
   Draws entropy, energy, temperature.
5. `sim-melting-ice` · replaces Figure 15.35, the ordered ice and the
   disordered water · entropy-and-disorder, calculate-entropy-change,
   heat-of-fusion · variation by slider and intuition: the book draws one
   crystal and one liquid with $\Delta S > 0$ between them; here the reader
   sets the mass of ice and how much of it has melted, molecules leave the
   lattice for the liquid, and a bar in the entropy hue grows by
   $mL_\text{f}/T$ at 273 K, so Example 15.8's 1.22 × 10³ J/K is one state
   of the figure · **still**: melting has a time in it but the idea is the
   comparison of two arrangements and the size of the entropy change, which
   the fraction slider gives without a clock; molecules jittering to look
   warm would be the dummy loop `ch15/config.md` forbids (rule 14) · $m$
   (0.10 to 5.00 kg, default 1.00, ink) and the fraction melted (0 to 100%,
   default 100, ink) · "Melting 1.00 kg of ice at 0 °C takes 3.34 × 10⁵ J of
   heat transfer and raises its entropy by 1.22 × 10³ J/K." · none: the
   crystal and the liquid are the picture, with one bar beside them · 2D.
   Readout: $\kdS = \kQh/\kTemp = mL_\text{f}/\kTemp$ with the live numbers;
   small line on order and disorder. Water molecules are drawn as an oxygen
   with two hydrogens in the element palette (rule 7: a molecule with an
   identity is never a grey dot), the lattice hexagonal like the book's
   snowflake; a hover name says what each is. Labels: ice and water named
   once, on by default. Draws entropy, energy, temperature.
6. `sim-sun-earth` · replaces Figure 15.36, the Sun, the Earth and deep
   space · entropy-and-life, second-law-entropy-statement, heat-engine ·
   variation by slider: the book writes $\Delta S < 0?$ on the Earth and
   the inequality in the text; here the reader sets the heat transfer from
   the Sun into deep space, the Sun's temperature and the Earth's own
   change in entropy, and three bars show the Sun's small loss, the Earth's
   decrease and deep space's enormous gain at 3 K, so the total is seen to
   stay positive however far the Earth's entropy is pushed down · **still**:
   the account of one heat transfer has no clock (rule 14) · $\kQh$ (400 to
   2000 J, default 1000, energy, the floor chosen so that no setting of the
   Earth's slider can push the total below zero), $\kTemph$ (3000 to 8000 K, default 5773,
   the 5500 °C surface of the section's own problem on the Sun, temperature),
   $\kdSsyst$ of the Earth (−100 to 20 J/K, default −50, entropy); $T_\text{c}$
   is held at the 3 K the figure prints · "Of 1000 J leaving the Sun at
   5773 K the Earth keeps a little and lowers its entropy by 50 J/K, but deep
   space gains 333 J/K, so the total rises by 283 J/K." · below: the scene
   runs left to right, so the bars sit beneath it · 2D. Readout: $\kdStot =
   \kdSsyst + \kdSenvir > 0$ with the live numbers; small line on the Earth
   as a heat engine. The Sun and the Earth are ink sprites. Labels: three
   bodies named once, the heat arrow labelled, on by default. Draws entropy,
   energy, temperature.

Photographs: one, Figure 15.31, dropped as above; the section has no other.

Figures that serve exercises: none; no exercise of the section refers to a
figure of its own.

Extra simulations (rule 15), thought through, judged and left:

- The two masses of water at 20.0 °C and 40.0 °C mixed to 30.0 °C, with
  its three outcomes. Left: `sim-irreversible-transfer` with the two
  temperatures set to 313 K and 293 K is the entropy account of it, and the
  two problems that compute it are unkeyed and left out.
- A bar of energy that shrinks as entropy rises, for the heat death
  passage. Left: it would be `sim-two-engines` with a story attached and
  opens no view the passage does not give in words.
- The mirror, the rock and the house of the problems as a single
  $\Delta S = Q/T$ calculator. Left: `sim-state-paths` is that calculator,
  and a figure that answers the problems would answer them for the reader.

## Exercises

- All at the end: the chapter has no Check Your Understanding box and the
  conceptual questions go to the Exercises tab (`ch15/config.md`).
- 9 conceptual questions, none keyed, each an open item with an AI-marked
  suggested approach: `cq1` (fs-id1169737806756, the summer cottage,
  Understand, citing `order-to-disorder`), `cq2` (fs-id1169737830797, high
  or low entropy to extract work, Understand, `unavailable-work`), `cq3`
  (fs-id1169737713421, a gas that liquefies, Understand, `order-to-disorder`),
  `cq4` (fs-id1169736657600, water freezing without violating the law,
  Understand, `life-and-evolution`), `cq5` (fs-id1169738046950, a
  uniform-temperature gas, Understand, `order-to-disorder`), `cq6`
  (fs-id1169738205677, a spontaneous process that disorders, Understand,
  `order-to-disorder`), `cq7` (fs-id1169737826678, the entropy change of an
  adiabatic process, Analyze, `entropy-second-law`), `cq8`
  (fs-id1169737861961, a radiating star, Analyze, `heat-death`), `cq9`
  (fs-id1169738007382, the bricks and the pile, Understand,
  `order-to-disorder`). The book prints `cq9` again word for word as 15.7's
  one conceptual question (`eip-558`); both are kept, since the book prints
  both, and 15.7's notes say so (`ch15/exploration.md`).
- 2 AP items of the section's own kept: `ap1` (fs-id2322666, steam and ice
  brought together, keyed (c), a graded choice, Analyze,
  `order-to-disorder`), `ap2` (fs-id2401812, why the transfer between the
  two reservoirs is irreversible when each reservoir's own change is
  reversible, unkeyed, open with an AI-marked approach, Analyze,
  `entropy-second-law`).
- 5 problems keyed and kept: `p1` (fs-id1169737793331, the house losing
  5.00 × 10⁸ J on a winter day, keyed 9.78 × 10⁴ J/K for part (a) with the
  book's own answer to part (b) in the solution), `p3` (fs-id1169738111073,
  the volcanic rock, keyed 8.01 × 10⁵ J), `p5` (fs-id1169737955124, the Sun's
  radiation into deep space, keyed 1.04 × 10³¹ J/K and 3.28 × 10³¹ J), `p7`
  (fs-id1169737828249, water condensing on a bathroom mirror, keyed 199
  J/K), `p9` (fs-id1169738239396, the 1000-MW power station, keyed
  2.47 × 10¹⁴ J, 1.60 × 10¹⁴ J, 2.85 × 10¹⁰ J/K and 8.29 × 10¹² J).
- 5 problems left out, having no answer in the book's key: the parked car
  on a hot day (fs-id1169738239436), the meat pie (fs-id1169737869611), the
  1.00 kg of water at 40.0 °C placed against 1.00 kg at 20.0 °C
  (fs-id1169737713976), the liquid nitrogen that boils and warms
  (fs-id1169738087184) and the 20.0 kg of water at 90.0 °C mixed with 20.0
  kg at 10.0 °C (fs-id1169738036204); named in `notes` and `exercise_notes`.
- Nothing is taken from another section and nothing of this section's own
  is held back.
- No generated questions: every node has a book exercise that tests it
  except `heat-death-of-the-universe`, which the radiating star (`cq8`)
  reaches through the Sun and deep space, and `entropy` itself, which every
  item touches.
- Weights: `ap1` gives `entropy-and-disorder` its full value and
  `change-in-entropy` 3; `ap2` gives `second-law-entropy-statement` its full
  value and `irreversible-process-increases-entropy` 3; `cq1` gives
  `entropy-and-disorder` its full value and `second-law-entropy-statement`
  2; `cq2` gives `unavailable-energy` its full value and
  `entropy-and-disorder` 2; `cq3` gives `entropy-and-disorder` its full
  value and `change-in-entropy` 2; `cq4` gives `entropy-and-life` its full
  value and `entropy-and-disorder` 2; `cq5` gives `entropy-and-disorder` its
  full value and `unavailable-energy` 2; `cq6` gives `entropy-and-disorder`
  its full value and `irreversible-process-increases-entropy` 2; `cq7` gives
  `second-law-entropy-statement` its full value and `change-in-entropy` 2;
  `cq8` gives `heat-death-of-the-universe` its full value and
  `irreversible-process-increases-entropy` 2; `cq9` gives
  `entropy-and-disorder` its full value alone; `p1` gives
  `calculate-entropy-change` its full value and
  `irreversible-process-increases-entropy` 3 and `unavailable-energy` 2; `p3`
  and `p7` give `calculate-entropy-change` their full value and
  `change-in-entropy` 3; `p5` and `p9` give `calculate-entropy-change` their
  full value and `unavailable-energy` 3 and
  `irreversible-process-increases-entropy` 2.

## Views

- Formulas: the seven equations of the section in `chapter.json`, six
  important (`eq-reversible-heat-ratio`, `eq-entropy-change`,
  `eq-total-entropy`, `eq-reversible-total-entropy`, `eq-unavailable-work`,
  `eq-entropy-system-environment`) and the melting heat `eq-melting-heat`
  not; the worked substitution steps of the examples are not rows.
- Definitions: the seventeen variables of the section, and three glossary
  terms, entropy, change in entropy, second law of thermodynamics stated in
  terms of entropy.
- Concept map: the nine nodes above with their edges into 7.9, 13.1, 14.1,
  14.3, 15.1, 15.2, 15.3 and 15.4.

## Colour

The page binds entropy, energy and temperature, as `ch15/COLOR.md` decides
for 15.6. Every figure draws a heat transfer as an arrow in the energy hue
whose width is the energy it carries, a temperature in its hue on the label
of a reservoir and on the slider that sets it, and an entropy change as a
bar or a gauge in the entropy hue, a loss told from a gain by its sign and
direction and never by a second hue. Reservoir bodies, states, the Sun, the
Earth and the two Carnot engines are ink, hot told from cold by label and by
standing above. The Carnot efficiency, the mass of ice and the fraction
melted are pure numbers and stay in ink. The water molecules of
`sim-melting-ice` are the one use of the element palette on the page, an
oxygen with two hydrogens, as rule 7 asks of any molecule with an identity.
No pressure or volume is drawn, so neither is bound.

## Wanted at chapter level

- variables `S_ent` → 15.6-entropy-defined
- variables `ΔS` → 15.6-entropy-defined
- variables `Q_heat` → 15.6-entropy-defined
- variables `T_temp` → 15.6-entropy-defined
- variables `ΔS_h` → 15.6-entropy-second-law
- variables `ΔS_c` → 15.6-entropy-second-law
- variables `ΔS_tot` → 15.6-entropy-second-law
- variables `Q_h` → 15.6-entropy-second-law
- variables `Q_c` → 15.6-entropy-second-law
- variables `T_h` → 15.6-entropy-second-law
- variables `T_c` → 15.6-entropy-second-law
- variables `W_unavail` → 15.6-unavailable-work
- variables `T_0temp` → 15.6-unavailable-work
- variables `ΔS_syst` → 15.6-life-and-evolution
- variables `ΔS_envir` → 15.6-life-and-evolution
- variables `m` → 15.6-order-to-disorder
- variables `L_f` → 15.6-order-to-disorder
- equations `eq-reversible-heat-ratio` → 15.6-entropy-defined
- equations `eq-entropy-change` → 15.6-entropy-defined
- equations `eq-total-entropy` → 15.6-entropy-second-law
- equations `eq-reversible-total-entropy` → 15.6-entropy-second-law
- equations `eq-unavailable-work` → 15.6-unavailable-work
- equations `eq-melting-heat` → 15.6-order-to-disorder
- equations `eq-entropy-system-environment` → 15.6-life-and-evolution
- The variables table of 15.6 has no row for $T'_\text{h}$, the intermediate
  reservoir of Example 15.7 and Figure 15.34, nor for the $T'_\text{c}$ the
  example's part (b) writes for the same reservoir; the text and
  `sim-two-engines` colour both with the existing symbol rows `T_hprime`
  (`\kTemphprime`) and `T_cprime` (`\kTempcprime`), and the chapter pass may
  want variable rows `T_hprime` → 15.6-unavailable-work ("the temperature
  of the colder reservoir the heat transfer falls to before entering the
  second engine") and `T_cprime` → 15.6-unavailable-work (the book's name
  for the same reservoir in part (b)) so the definitions view lists them.

Applied in the chapter pass (2026-09-14): the seventeen variable anchors and the seven equation anchors are set on `chapter.json` as listed, and the two variable rows this plan asked for are added, `15.6/T_hprime` (the temperature of the cooler reservoir the heat transfer falls to before the second engine) and `15.6/T_cprime` (the 250 K reservoir temperature as part (b) of Example 15.7 writes it), both on the `unavailable-work` anchor, so the definitions view lists them; `chapter.json` now carries 92 variable rows. The book's $T'_\text{c}$ for the reservoir Figure 15.34 calls $T'_\text{h}$ is recorded in `exploration.md` under Errata beside the lowercase entropy. The bricks question kept here and in 15.7 was checked against both `exercise_notes`, which agree. The water molecules of `sim-melting-ice` are the chapter's one use of the element palette and `ch15/COLOR.md` says so now.
