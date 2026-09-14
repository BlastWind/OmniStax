# Config: College Physics 2e, Chapter 15

Proposed by the prep agent after exploration (2026-09-14). Status: applied as
proposed, on Chen's standing instruction to finish the book in waves without
check-ins; the per-section stops of rule 2 and the plan reviews of rule 5 are
replaced by a plan file per section, written before the section is built and
left for review after, as Chapters 1 to 12 did it. Each line is a setting and
its value. Lines that repeat the Chapter 1 to 12 configs are unchanged unless
marked.

| Setting | Value |
|---|---|
| Chapter | 15 Thermodynamics, modules m42231 (introduction), m42232, m42233, m42234, m42235, m42236, m42237, m42238 |
| Front matter | the chapter introduction (m42231) is a page of its own in `ch15/intro/`, listed before 15.1 (rule 21), built in the prep pass |
| Unit of work | one section = one page; sections never folded (rule 11); 15.7, which has two figures and one conceptual question, stays a page of its own |
| Order | 15.1 to 15.7 in book order, built in parallel by one agent per section |
| Loop | plan file → build → validator, all seven sections in one wave; review after |
| Prose | verbatim, the book's own slips included (the lowercase entropy $s$ in 15.6 and 15.7, the doubled microstates of Table 15.3, the `Figure 15.12(b)` pressure that Example 15.2 does not use; each named in the section's `notes` and in `exploration.md` under Errata); objectives, summary, glossary pulled into the tables and views; the book's boxed notes kept verbatim (15.1's two Making Connections, the three boxed statements of the second law in 15.3 and 15.4, 15.5's and 15.7's Problem-Solving Strategies as the book's numbered lists, 15.6's Making Connections) |
| Tables | five, each rebuilt as a `div.book-table` whose eyebrow is the book's number: Table 15.1 Summary of Terms for the First Law of Thermodynamics in 15.1 (math in its cells), Table 15.2 Summary of Simple Thermodynamic Processes in 15.2, Table 15.3 5-Coin Toss and Table 15.4 100-Coin Toss in 15.7's narrative, and Table 15.5 10-Coin Toss among 15.7's problems, kept in the text beside the problem that points at it (new). Tables 15.4 and 15.5 carry a header cell spanning Heads and Tails |
| Sub-concept headers | 15.1, 15.2, 15.3, 15.5, 15.6 and 15.7 print headers of their own and those are kept as the book writes them; 15.4 prints none, so its headers are the agent's |
| Figures | a sim per idea or result the section introduces; every diagram replaced by a sim with the book's image kept as its original; a photograph kept where the text points at it or it shows the thing the passage is about, dropped where it is decoration; each listed in the plan (rule 14) |
| Photographs kept | five: the steam locomotive that opens the chapter (Figure 15.1, kept by rule 21), the tea kettle (15.2, which the section's first conceptual question asks the reader to describe), the drinking bird (15.20, which the passage and a conceptual question point at), the nuclear and coal-fired power stations (15.23, which Example 15.4 says "shows"), and the residential heat pump (15.30, which the passage says "shows"). Dropped as splash images: the Turbinia Works engine (15.6), the ice floes (15.14), the refrigerators (15.25), the iced drink (15.31) and the coins (15.37); a section agent may keep 15.31 as the scene Example 15.8 computes if the plan says why |
| Folds | judged per section. The case for a fold is 15.2's run of $PV$ diagrams: 15.10, 15.11 and 15.12 draw the work under a path five times over, and one live diagram with a choice of path may carry two or three of those numbers, the eyebrow reading them all; 15.13's isotherm and adiabat is a separate idea and stays its own figure. 15.18 and 15.19 (the Otto cycle at two temperature ranges) are one scene with two slider states and may fold. Figures with (a)(b) panels under one number (15.8, 15.11, 15.12, 15.13, 15.15, 15.16, 15.18, 15.21, 15.24, 15.26, 15.33, 15.34, 15.38) are one number with several originals, not folds |
| Sim sliders | whatever is interesting and variable in the idea: the heat transfer into and the work out of a system, the piston's position and the gas's pressure, the corners of a loop on the $PV$ diagram and the direction it is walked, the two reservoir temperatures of an engine or a heat pump, the heat transfer fed to a Carnot engine, the temperatures between which a fixed heat transfer falls, the number of coins tossed. A choice, never a slider, for the kind of process (isobaric, isochoric, isothermal, adiabatic), for the direction of a cycle and for engine against heat pump (rule 26.1) |
| Motion | decided per figure (rule 14). Most of the chapter is still: the first law's arrows, a $PV$ path and its area, an engine's three arrows, the Carnot efficiency and the entropy bars each answer their sliders, register no cycle and get no transport. Three ideas have a clock in them and may move, and the plan line must say so and why: a cycle being walked round its loop (15.12, 15.18, 15.21), where the area filling leg by leg is the idea; the four-stroke engine of 15.17, whose piston, valves and crankshaft are a sequence in time; and the coin tosses of 15.7, where a histogram filling toward the middle as the tosses accumulate is the argument. A gas drawn with jittering molecules merely to look warm is the dummy loop rule 14 forbids (new) |
| 3D | none; every scene of the chapter is a schematic of energy flow or a graph, and both are clearest drawn flat (rule 28.1). The four-stroke engine is a cross-section and stays flat |
| Figures that serve exercises | the book's own rules give two ways of carrying an image an exercise refers to, and this chapter uses the second throughout: 15.2's three unnumbered images (the piston of a conceptual question, the nested loops ABCFA and ABDEA of a conceptual question, the parallelogram ABCD of a problem) travel on the `figure` field of the exercise cards that refer to them, as Chapters 4, 9.3, 9.6 and 12 do. The nested loops and the parallelogram are read by five AP items and two problems, so the 15.2 agent may in addition draw each as an unnumbered `figure` row with no sliders and no animation in a closing block of the text, the eyebrow reading "Figure", if the plan says the card image is too small to read the labelled points from |
| Colour coding | one new type, `entropy` (J/K), because 15.6's and 15.7's figures draw it as bars, their sliders change it and their readouts state it; `temperature` is Chapter 13's and is used by name, never restaged; heat transfer is an `energy` on Chapter 14's plain row and this chapter's reservoir variants; internal energy and work are `energy` on the book's existing rows and the rows this chapter adds; `pressure` is Chapter 11's. Efficiency, the Carnot efficiency, both coefficients of performance, the EER, the number of microstates $W$, the atom count $N$, the mass $m$ and the volume $V$ stay untyped and in ink. Symbol rows added are listed under "Symbols" below |
| Inline exercises | none: the chapter has no Check Your Understanding box |
| Exercises tab | end-of-module problems, conceptual questions, AP test prep |
| Exercise placement | an exercise goes with the section that introduces what it tests; 15.1's AP item on what happens inside a closed refrigerator (`fs-id3826091`) goes to 15.5 with `source_section: "15.1"`, both sections' `exercise_notes` saying so; 15.2's unkeyed Unreasonable Results engine between 450 °C and 150 °C (`fs-id1169738036310`) needs 15.4 and is left out of both, both notes naming it; nothing else moves |
| AP test prep | included; the chapter's 16 AP items sit in 15.1, 15.2, 15.6 and 15.7. An unkeyed AP item is kept as an open item with its options as the book prints them and an AI-marked suggested approach, never as a graded choice. 15.2's AP items read two figures that sit among the section's exercises (the parallelogram and the nested loops), and their cards carry those images |
| PhET interactive links | dropped (States of Matter in 15.2, Reversible Reactions in 15.6) and named in `notes` |
| Cross-references | plain text throughout, as every other page of the book writes them: a reference to another section, another chapter, a strategy box on another page or a worked example on another page is the book's words with no link, and the app links "Figure 15.12" and an "Example 15.2" that sits on the same page by itself |
| Answers to book problems | book answer key only; never generated; the 32 unkeyed problems are left out and named in the notes, among them 15.2's two Construct Your Own Problem items and 15.7's air-conditioner-and-ice item |
| Suggested approaches for open questions | generated, marked AI: all 37 conceptual questions of the chapter and the 8 unkeyed AP items |
| Generated questions | none; a node with no book exercise of its own is noted in the plan, no question generated |
| Concept nodes | testable units only; kinds idea/result/skill; canonical ids; 53 nodes written into `book.json` before the sections were built (7 for 15.1, 10 for 15.2, 8 for 15.3, 5 for 15.4, 8 for 15.5, 9 for 15.6, 6 for 15.7) with edges into Chapters 4, 5, 7, 11 and 12, into Chapters 13 and 14 where their ids had landed, and within the chapter |
| Formulas | `ch15/chapter.json`: the stated and named results important (the first law, the four process relations, the internal energy of a monatomic gas, the cycle's work, the two forms of efficiency, the Carnot heat ratio and efficiency, the heat pump balance, the two coefficients of performance and their relation, the EER, the definition of entropy change, the reversible ratio, the total entropy of a Carnot cycle, the unavailable work, the system-plus-environment inequality, Boltzmann's entropy and its change) and the worked substitution steps not; no anchor on any row, since the validator refuses an anchor into an unbuilt section, and the chapter pass writes them from the section plans |
| Book manifest | `ch15` after `ch14` in `book.json` chapters (after `ch12` if Chapters 13 and 14 have not merged first; `ost merge` sorts by number), added by `ost merge college-physics-2e 15` |

## Symbols

Never change an existing symbol row (rule of the job). Rows the chapter
would otherwise have wanted are already taken and are **not** reused for this
chapter's meanings:

- `W` is **energy** with the macro `\kW` (Chapter 7) and is the work of this
  chapter as it stands. The number of microstates that 15.7 also writes $W$
  is a count and has an untyped row of its own, `W_micro`.
- `Q` is Chapter 12's **flow rate** with `\kQ`. Heat transfer is Chapter 14's
  row `Q_heat` with the macro `\kQh`; this chapter stages only its reservoir
  and direction variants, and because `\kQh` is taken, the hot and cold
  reservoir heats take the uppercase macros `\kQH` and `\kQC`.
- `T` is a **period**, a time, with `\kT` (Chapter 16). Temperature is
  Chapter 13's row `T_temp` (`\kTemp`) and type `temperature`. Chapter 13
  landed first and already holds `T_c` (LaTeX `T_{\text{c}}`, `\kTempc`, its
  critical temperature) and `T_0temp` (LaTeX `T_0`, `\kTempo`), so this
  chapter's cold reservoir temperature and its lowest temperature $T_0$ use
  those rows as they stand, the way `r_1` and `r_2` serve several chapters,
  and the hot reservoir temperature is staged as `T_h` with `\kTemph` to
  match. Boltzmann's constant is Chapter 13's untyped `k_boltz` and the atom
  count its `N_count`.
- `S` is the **shear modulus** with `\kS` (Chapter 5). Entropy is `S_ent`
  with `\kSent`.
- `P` is **power** with `\kP` (Chapter 7). Pressure is Chapter 11's `P_press`
  with `\kPr`.
- `k` is a **force constant** with `\kk` (Chapter 16), `N` a **normal force**
  with `\kN` (Chapter 4) and `R` a **position** with `\kR` (Chapter 3).
  Boltzmann's constant, the atom count and the gas constant are Chapter 13's
  rows.
- `T_1` and `T_2` are **tensions** (Chapter 4); the $T_{\text{c},1}$ and
  $T_{\text{h},1}$ of 15.4's answer key stay plain.

Rows this chapter stages, with the sections that write them:

| sym | LaTeX | type | macro | where |
|---|---|---|---|---|
| `E_int` | `E_{\text{int}}` | energy | `\kEint` | 15.1, 15.2, 15.3, 15.6 |
| `ΔE_int` | `\Delta E_{\text{int}}` | energy | `\kdEint` | 15.1, 15.2, 15.3 |
| `E_int1` | `E_{\text{int1}}` | energy | `\kEintone` | 15.1 |
| `E_int2` | `E_{\text{int2}}` | energy | `\kEinttwo` | 15.1 |
| `Q_heat1` | `Q_1` | energy | `\kQheatone` | 15.1 |
| `Q_heat2` | `Q_2` | energy | `\kQheattwo` | 15.1 |
| `W_1` | `W_1` | energy | `\kWone` | 15.1 |
| `W_2` | `W_2` | energy | `\kWtwo` | 15.1 |
| `Q_in` | `Q_{\text{in}}` | energy | `\kQin` | 15.1, 15.2 |
| `Q_out` | `Q_{\text{out}}` | energy | `\kQout` | 15.1, 15.2 |
| `W_in` | `W_{\text{in}}` | energy | `\kWin` | 15.1, 15.2 |
| `W_AB` | `W_{\text{AB}}` | energy | `\kWAB` | 15.2 |
| `W_BC` | `W_{\text{BC}}` | energy | `\kWBC` | 15.2 |
| `W_CD` | `W_{\text{CD}}` | energy | `\kWCD` | 15.2 |
| `W_DA` | `W_{\text{DA}}` | energy | `\kWDA` | 15.2 |
| `P_AB` | `P_{\text{AB}}` | pressure | `\kPrAB` | 15.2 |
| `P_CD` | `P_{\text{CD}}` | pressure | `\kPrCD` | 15.2 |
| `P_ext` | `P_{\text{ext}}` | pressure | `\kPrext` | 15.2 |
| `Q_h` | `Q_{\text{h}}` | energy | `\kQH` | 15.3, 15.4, 15.5, 15.6 |
| `Q_c` | `Q_{\text{c}}` | energy | `\kQC` | 15.3, 15.4, 15.5, 15.6 |
| `Q_hprime` | `Q'_{\text{h}}` | energy | `\kQHprime` | 15.3 |
| `Q_cprime` | `Q'_{\text{c}}` | energy | `\kQCprime` | 15.3 |
| `Q_f` | `Q_{\text{f}}` | energy | `\kQf` | 15.4, 15.5 |
| `W_prime` | `W'` | energy | `\kWprime` | 15.3, 15.5 |
| `W_unavail` | `W_{\text{unavail}}` | energy | `\kWunavail` | 15.6 |
| `T_h` | `T_{\text{h}}` | temperature | `\kTemph` | 15.3, 15.4, 15.5, 15.6 |
| `T_hprime` | `T'_{\text{h}}` | temperature | `\kTemphprime` | 15.3, 15.6 |
| `T_cprime` | `T'_{\text{c}}` | temperature | `\kTempcprime` | 15.3, 15.6 |
| `S_ent` | `S` | entropy | `\kSent` | 15.6, 15.7 |
| `ΔS` | `\Delta S` | entropy | `\kdS` | 15.6, 15.7 |
| `ΔS_h` | `\Delta S_{\text{h}}` | entropy | `\kdSh` | 15.6 |
| `ΔS_c` | `\Delta S_{\text{c}}` | entropy | `\kdSc` | 15.6 |
| `ΔS_tot` | `\Delta S_{\text{tot}}` | entropy | `\kdStot` | 15.6 |
| `ΔS_syst` | `\Delta S_{\text{syst}}` | entropy | `\kdSsyst` | 15.6 |
| `ΔS_envir` | `\Delta S_{\text{envir}}` | entropy | `\kdSenvir` | 15.6 |
| `S_i` | `S_{\text{i}}` | entropy | `\kSi` | 15.7 |
| `S_f` | `S_{\text{f}}` | entropy | `\kSf` | 15.7 |
| `Eff_C` | `\text{Eff}_{\text{C}}` | — | — | 15.4, 15.5, 15.6 |
| `COP_hp` | `\text{COP}_{\text{hp}}` | — | — | 15.5 |
| `COP_ref` | `\text{COP}_{\text{ref}}` | — | — | 15.5 |
| `EER` | `\text{EER}` | — | — | 15.5 |
| `W_micro` | `W` | — | — | 15.7 |
| `W_microi` | `W_{\text{i}}` | — | — | 15.7 |
| `W_microf` | `W_{\text{f}}` | — | — | 15.7 |

Forty-four rows in all, and one type, `entropy`. The temperature rows are
staged with the type `temperature`, which Chapter 13 declared and merged
before this chapter did.

Rows used as they stand: `W` (`\kW`), `W_out` (`\kWout`), `Eff`, `F`
(`\kF`), `d` (`\kd`), `A`, `m`, `v̄` (`\kvb`), `P_press` (`\kPr`), `V`, `ΔV`,
Chapter 13's `T_temp` (`\kTemp`), `T_c` (`\kTempc`), `T_0temp` (`\kTempo`),
`k_boltz` and `N_count`, and Chapter 14's `Q_heat` (`\kQh`) and `L_f` by the
ids its config names (see `exploration.md` § Wanted at chapter level for
what had not landed when this chapter merged). The book's `P` stays power
and is not written anywhere in this chapter.

## What the build changed (chapter pass, 2026-09-14)

A few lines of the table above needed a word after the seven sections were
built, and the rest stood as proposed.

- **Motion.** Eight drawn figures move, not the three ideas the Motion line
  foresaw, and each plan line argues its clock: the cycles walked round
  their loops (15.12, 15.18 + 15.19, 15.21), the four-stroke engine
  (15.17) and the coin tosses of 15.7, as foreseen; and beyond them the
  piston of 15.8, whose three panels are three moments of one stroke, the
  three one-way processes of 15.15, which are a direction in time, and the
  gas of 15.38 dispersing from its corner while its entropy is counted
  live. None is the dummy jitter the line forbids. The other 25 drawn
  figures register no cycle and carry no transport, and the headless pass
  found the transport on those eight alone.
- **Folds.** Two, neither the one the Folds line expected: 15.2 folded the
  isobaric cylinder and its graph (Figure 15.9 + 15.10) and drew 15.11 and
  15.12 as figures of their own, since the strips and the walked loop are
  two ideas; 15.3 folded the two Otto cycles (Figure 15.18 + 15.19) as
  foreseen. The numbers run 15.1 to 15.38 with no gap but the five dropped
  photographs.
- **Photographs.** Five kept, as listed; 15.31 was not kept, 15.6 having
  drawn the melting ice as Figure 15.35 instead.
- **Figures that serve exercises.** 15.2 used both ways the line allows:
  the three images travel on their cards, and the nested loops and the
  parallelogram are also drawn as unnumbered `figure` rows in a closing
  block of the text, the eyebrow reading "Figure".
- **The example boundary in 15.2.** The isothermal and adiabatic passage
  and Figure 15.13 sit inside the `<example>` element of Example 15.2 in
  the CNXML (`eip-62`), after its Discussion. The page sets them as
  narrative under their own header after the example, words unchanged,
  since they are the section's next idea and not part of the worked
  problem; confirmed against the module in the chapter pass.
- **Figure 15.12(b).** The Prose line named "the `Figure 15.12(b)` pressure
  that Example 15.2 does not use"; the printed panel reads
  2 × 10⁵ N/m² and agrees with the example, and the 1.2 × 10⁵ is in the
  image's alt text alone. `exploration.md`'s errata line is corrected.
- **Errata.** Three more are kept as printed and recorded in
  `exploration.md` under Errata: the caption of Figure 15.26, which names
  Figure 15.27 where the book means the Carnot cycle of 15.4; 15.6's
  lowercase entropy $s$ (once there and once in 15.7); and Example 15.7's
  $T'_\text{c}$ for the reservoir Figure 15.34 calls $T'_\text{h}$.
- **Variables.** 92 rows, not 90: 15.6 wanted `T_hprime` and `T_cprime`
  of its own, on the `unavailable-work` anchor, so the definitions view
  lists the intermediate reservoir of Example 15.7 under both names the
  book gives it. 15.3's five primed rows stand on its `otto` anchor though
  the page writes none of them, the caption of Figure 15.19 where the book
  writes them not being shown by the fold. No symbol row was changed and
  the 44 staged rows and the type `entropy` merged as listed.
- **Anchors.** Every variable and equation row of the chapter carries one,
  written from the seven plans; the tables held none before the pass, as
  the Formulas line says.
- **Colour.** 15.7 binds `time` as well as `entropy`, for the horizontal
  axis of the entropy graph of Figure 15.38, which `ch15/COLOR.md` had not
  foreseen and now records in its table. 15.6's water molecules are the
  chapter's one use of the element palette, recorded there too. The pages
  bind exactly what the plans said otherwise.
- **The colour scheme, for Fable and Chen.** Two things, the first
  reported by the section builders and both confirmed by the headless
  pass, neither settled here because a chapter may not invent a hue (root
  rules 7 and 22). The scheme gives
  `pressure` a pale yellow that is close to illegible on the light theme,
  and every $PV$ diagram of the chapter (15.9 + 15.10 through 15.13,
  15.17, 15.18 + 15.19, 15.21, 15.26) puts it on the vertical axis title,
  its ticks and its pressure labels. And `entropy` comes out a pink so
  near the magenta of `energy` that on 15.6's figures, where an energy
  arrow stands beside three entropy bars, the two types are told apart by
  their labels more than by their hues; the figures label every bar and
  arrow, so nothing is lost, but the scheme is the app's matter.
- **Root rule 20.** The `weights_by` field the rule names is not in the
  schema (`exercise_concepts` carries `exercise`, `concept` and `weight`
  only), so no row of this chapter writes it and the 95 weighted rows are
  marked AI-generated in each section's `exercise_notes` instead, as every
  earlier chapter has it. The rule is left as it stands for Fable to
  settle.
- **Inline exercises.** None, as the line says; every one of the 85
  exercises sits in the Exercises tab.
