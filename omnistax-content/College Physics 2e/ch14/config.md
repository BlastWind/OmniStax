# Config: College Physics 2e, Chapter 14

Proposed by the prep agent after exploration (2026-09-14). Status: applied as
proposed, on Chen's standing instruction to finish the book in waves without
check-ins; the per-section stops of rule 2 and the plan reviews of rule 5 are
replaced by a plan file per section, written before the section is built and
left for review after, as Chapters 1 to 12 did it. Each line is a setting and
its value. Lines that repeat the Chapter 1 to 12 configs are unchanged unless
marked.

| Setting | Value |
|---|---|
| Chapter | 14 Heat and Heat Transfer Methods, modules m42221 (introduction), m42223, m42224, m42225, m42226, m42228, m42229, m42230 |
| Front matter | the chapter introduction (m42221) is a page of its own in `ch14/intro/`, listed before 14.1 (rule 21), built in the prep pass; its opening image is a drawing, not a photograph, and is kept as the page's `photo` row all the same, with no `widths` since the CNXML gives it no width |
| Unit of work | one section = one page; sections never folded (rule 11); 14.1, which has one equation and no problem set, and 14.4, which has no equation and no problem set, stay pages of their own |
| Order | 14.1 to 14.7 in book order, built in parallel by one agent per section |
| Loop | plan file → build → validator, all seven sections in one wave; review after |
| Prose | verbatim, the book's own slips included (14.2's "27.0 × 10⁴ J", 14.5's "1 g of water melts in one second", 14.6's "is used the body"; each kept as printed and named in the section's `notes` and in `exploration.md` under Errata); objectives, summary, glossary pulled into the tables and views; the book's boxed notes kept verbatim (14.2's Heat Transfer and Temperature Change and its Take-Home Experiment, 14.3's Real-World Application, 14.6's Take-Home Experiment, 14.7's Take-Home Experiment, Career Connection and Problem-Solving Strategies for the Methods of Heat Transfer); 14.3's seven numbered Problem-Solving Strategies for the Effects of Heat Transfer kept as the book's numbered list under its own header |
| Tables | four, each rebuilt as a `div.book-table` whose eyebrow is the book's number and whose caption is the book's title: Table 14.1 Specific Heats of Various Substances in 14.2 (irregular: Solids, Liquids and Gases headers inside the body, three footnotes, the gases' columns headed $c_\text{v}$ ($c_\text{p}$)), Table 14.2 Heats of Fusion and Vaporization in 14.3 (two-tier header, two footnotes; the converter's extra row "Water | 37 | 580" is the body-temperature footnote and is set as a footnote, not a row), Table 14.3 Thermal Conductivities of Common Substances in 14.5 (plain, one footnote), Table 14.4 Wind-Chill Factors in 14.6 (a grid, no footnote) (new) |
| Sub-concept headers | 14.1 prints one header of its own (Mechanical Equivalent of Heat) and 14.3 one (Problem-Solving Strategies for the Effects of Heat Transfer), both kept as the book writes them; every other header is the agent's |
| Figures | a sim per idea or result the section introduces; every diagram replaced by a sim with the book's image kept as its original; a photograph kept where the text points at it or it shows the thing the passage is about, dropped where it is decoration; each listed in the plan (rule 14) |
| Photographs kept | seventeen, listed with their reasons in `exploration.md`: Foote's drawing (14.1, rule 21), the smoking brakes (14.5), the icicle (14.7), the iced tea (14.10), the orchard ice (14.11), dry ice and frost (14.12), the fiberglass batts (14.18), the cumulus cloud (14.24), the thunderhead (14.25), the icebergs (14.26), the campfire (14.28), the pavement ice (14.30), the building thermograph (14.32) and the solar cooker (14.34) as `photo` rows of the text; the gas flame (14.29(b)) as the second original of the spectrum figure; the jellabiya (14.19), the lava flow (14.27) and the patient's thermograph (14.35) on the cards of the items that refer to them. Dropped: the spent-fuel pool (14.6) and the walrus (14.20), whose problems are unkeyed and left out, and the wall insulation (14.15), a splash image |
| Folds | judged per section; 14.4's three panels, 14.8's two, 14.12's two and 14.29's two are each one number with several originals and are not folds. The case for a fold is 14.6, where the gravity furnace (14.21) and the pot (14.22) are one convective loop drawn twice and a section agent may fold them; 14.2 and 14.3 in 14.1 are two different scenes and stay two figures |
| Sim sliders | whatever is interesting and variable in the idea: the two temperatures of bodies brought into contact and the time since, the mass and temperature change of a body and its substance chosen from Table 14.1, the two masses and two starting temperatures of a calorimetry pair, the heat added to ice on the heating curve, the temperature difference, area and thickness of a slab and its material chosen from Table 14.3, the air temperature and wind speed of Table 14.4, the temperatures of a body and its surroundings and the body's emissivity, the temperature of an ideal radiator on the spectrum, the fraction of infrared the atmosphere returns |
| Discrete states | a substance chosen from a table is a choice, never a slider (rule 26.1): a segmented control or a dropdown with one option per row the figure offers, the book's own substance the default |
| Motion | decided per figure (rule 14). Heat is a flow and its rate has a time in it, so more of this chapter moves than of Chapters 9 to 12: two bodies coming to equilibrium (14.2), Joule's falling weights and turning paddles (14.3), a heat current through a slab whose speed is the rate (14.17), a convective loop forming in a room, a pot or a pelt (14.21, 14.22, 14.23) and the collisions at a contact surface (14.16) each register a cycle and get the transport, and the plan line says so and why. A figure whose idea is an amount rather than a rate is still: the three pairs of cylinders (14.4), the calorimetry pair's final temperature, the heating curve (14.9), the molecules of three phases (14.8), the fireplace's sorting of three mechanisms (14.13), the black and silver blocks (14.31), the radiation balance of two temperatures and the spectrum (14.29) answer their sliders and nothing else. A wavy heat arrow drawn moving merely to look alive on a still figure is the dummy loop rule 14 forbids |
| 3D | none; every scene of the chapter is a body, a slab, a loop or a graph, and each is clearest drawn flat (rule 28.1) |
| Figures that serve exercises | the book's own rules give two ways of carrying an image an exercise refers to, and this chapter uses the second: the jellabiya, the lava flow and the patient's thermograph travel on the `figure` field of the exercise card that refers to them, as Chapters 4, 9.3, 9.6 and 12 do. The one exception is 14.4's thermos bottle (14.14), whose conceptual question asks the reader to explain each labelled part: it is a `figure` row of the text with its number, a faithful copy with no sliders and no animation and every label the book prints, and the card carries the book's image as well |
| Colour coding | no new type (new). Heat $Q$ and its variants are `energy`; the rate of heat transfer $Q/t$ is `power` wherever a figure draws a heat current or a readout states watts; temperature $T$, $\Delta T$, $T_1$, $T_2$, $T_\text{f}$, $T_\text{i}$, $T'$, $T_\text{hot}$ and $T_\text{cold}$ are Chapter 13's `temperature`, its rows used by name and never restaged and four subscripts of this chapter's own staged beside them; the specific heat $c$, the latent heats $L_\text{f}$, $L_\text{v}$, $L_\text{s}$ and $L$, the thermal conductivity $k$, the emissivity $e$, the Stefan-Boltzmann constant $\sigma$, the $R$ factor, the mass $m$, the area $A$ and the thickness $d$ stay untyped and in ink, with the case made in `exploration.md`. Symbol rows are listed under "Symbols" below |
| Inline exercises | one Check Your Understanding box per section, inline after the passage it tests, in a `<div class="exercises" data-place="…">` closing that block |
| Exercises tab | end-of-module problems, conceptual questions, AP test prep |
| Exercise placement | an exercise goes with the section that introduces what it tests. 14.7 carries the chapter's closing set of ten Integrated Concepts items, four Unreasonable Results and two Construct Your Own Problem items; the Integrated Concepts items stay in 14.7, as 7.9's did, each tagged with the concepts it tests across the chapter. Two Unreasonable Results items turn on one earlier section alone and are keyed: `fs-id2604660` (the person who consumes 2500 kcal) goes to 14.2 and `fs-id2663242` (the 1.46 kW window) goes to 14.5, both with `source_section: "14.7"`, and 14.2's, 14.5's and 14.7's `exercise_notes` say so. Nothing else moves |
| AP test prep | included; ten items, five keyed and all five multiple choice, five open. An unkeyed AP item is kept as an open item with its options as the book prints them and an AI-marked suggested approach, never as a graded choice. 14.5's first two AP items cite "the experiment that you devised" in Example 14.1, an item of the AP edition this edition does not print; both are kept as printed and 14.5's `exercise_notes` says so |
| PhET interactive links | none in this chapter |
| Cross-references | plain text throughout, as every page of the book writes them: a reference to another section, another chapter (Work, Energy, and Energy Resources; Temperature, Kinetic Theory, and the Gas Laws; Electromagnetic Waves; Introduction to Quantum Physics) or a worked example or table on another page is the book's words with no link, and the app links "Figure 14.4" and a same-page "Example 14.3" by itself. A reference to a table on another page ("Table 14.1" from 14.6) is plain text too |
| Answers to book problems | book answer key only; never generated; the 40 unkeyed problems are left out and named in the notes, among them 14.7's two Construct Your Own Problem items |
| Suggested approaches for open questions | generated, marked AI: all 28 conceptual questions of the chapter and the 5 open AP items |
| Generated questions | none; a node with no book exercise of its own is noted in the plan, no question generated |
| Degrees | every temperature is written `°C` outside math and `^\circ\text{C}` inside it, never the ordinal `º` the converter carries out of the CNXML; $\text{Δ}T$ is written with the temperature macros as Chapter 13 stages them |
| Concept nodes | testable units only; kinds idea/result/skill; canonical ids; 44 nodes written into `book.json` before the sections were built (5 for 14.1, 7 for 14.2, 8 for 14.3, 4 for 14.4, 7 for 14.5, 5 for 14.6, 8 for 14.7) with 119 edges into Chapters 1, 4, 7, 11, 12, 13 and 16 and within the chapter; 14.3's heat of sublimation is `heat-of-sublimation`, since Chapter 13 owns `sublimation` |
| Formulas | `ch14/chapter.json`: the stated and named results important and the worked substitution steps not; no anchor on any row, since the validator refuses an anchor into an unbuilt section, and the chapter pass writes them from the section plans |
| Book manifest | `ch14` after `ch13` in `book.json` chapters, added by `ost merge college-physics-2e 14` |

## Symbols

Never change an existing symbol row (rule of the job). Seven rows the chapter
would otherwise have wanted are already taken and are **not** reused for this
chapter's meanings:

- `Q` is Chapter 12's **flow rate** with the macro `\kQ`. Heat is `Q_heat`
  with `\kQh`.
- `T` is a **period** (time, `\kT`) and `T_1`, `T_2` are **tensions** (force,
  `\kTone`, `\kTtwo`). Temperatures are Chapter 13's rows, listed below.
- `c` is the **speed of light** (velocity, `\kc`). The specific heat is
  `c_spec`.
- `k` is a **force constant** (stiffness, `\kk`). The thermal conductivity is
  `k_cond`.
- `L` is **angular momentum** (`\kL`) and `L_len` a length. The latent heat
  coefficient of the summary's $Q = mL$ is `L_latent`.
- `d` and `R` are **positions** (`\kd`, `\kR`). The slab thickness is
  `d_thick` and the $R$ factor `R_factor`, both untyped scene quantities.
- `P` is **power** (`\kP`) and is not written anywhere in this chapter; the
  book writes the rate as $Q/t$.

Rows this chapter stages, with the sections that write them:

| sym | LaTeX | type | macro | where |
|---|---|---|---|---|
| `Q_heat` | `Q` | energy | `\kQh` | every section |
| `Q_hot` | `Q_{\text{hot}}` | energy | `\kQhot` | 14.2 |
| `Q_cold` | `Q_{\text{cold}}` | energy | `\kQcold` | 14.2 |
| `Q_net` | `Q_{\text{net}}` | energy | `\kQnet` | 14.7 |
| `T_itemp` | `T_{\text{i}}` | temperature | `\kTempi` | 14.2 |
| `T_primetemp` | `T'` | temperature | `\kTemppr` | 14.1 |
| `T_hottemp` | `T_{\text{hot}}` | temperature | `\kTemphot` | 14.5 |
| `T_coldtemp` | `T_{\text{cold}}` | temperature | `\kTempcold` | 14.5 |
| `c_spec` | `c` | — | — | 14.2, 14.3, 14.6, 14.7 |
| `c_p` | `c_{\text{p}}` | — | — | 14.2, 14.6 |
| `c_v` | `c_{\text{v}}` | — | — | 14.2 |
| `L_f` | `L_{\text{f}}` | — | — | 14.3, 14.5, 14.7 |
| `L_v` | `L_{\text{v}}` | — | — | 14.3, 14.5, 14.6, 14.7 |
| `L_s` | `L_{\text{s}}` | — | — | 14.3 |
| `L_latent` | `L` | — | — | 14.3 |
| `k_cond` | `k` | — | — | 14.5, 14.7 |
| `d_thick` | `d` | — | — | 14.5 |
| `R_factor` | `R` | — | — | 14.5 |
| `e_emis` | `e` | — | — | 14.7 |
| `σ_SB` | `\sigma` | — | — | 14.7 |

Twenty rows and no type. The four temperature rows are this chapter's own
subscripts, keyed and named the way Chapter 13 keys its own (`T_temp`,
`\kTemp`), and were checked against Chapter 13's staged rows before the
merge: a fifth, $T_\text{f}$, was dropped because Chapter 13 stages
`T_ftemp` (`\kTempf`) for the same symbol and this chapter uses that row.
The temperature rows Chapter 13 owns and this chapter writes by name are
`T_temp` (`T`, `\kTemp`) for the absolute temperature of 14.7, `ΔT`
(`\Delta T`, `\kdTemp`) for every temperature change, `T_1temp` and
`T_2temp` (`\kTempone`, `\kTemptwo`) for the two temperatures of 14.1's
figure, 14.5's slab and 14.7's radiation exchange, and `T_ftemp` for the
final temperature of 14.2 and 14.3.

Rows used as they stand: `m`, `A`, `t`, `V`, `g`, `h`, `v`, `KE`, `PE_g`, `W`,
Chapter 11's `ρ_dens` (`\krho`) and Chapter 12's `Q` for the flow rate of air
in 14.7's cooling-tower problem, where the book's $Q$ is a volume per second
and not a heat.

## What the build changed (chapter pass, 2026-09-14)

The table above stood for all seven sections. What the sections found, and
what the chapter pass settled, is here rather than corrected silently in it.

- **Worked examples carry the publisher's numbers.** The CNXML numbers none
  of them; the publisher counts nine through the chapter, three in 14.2, one
  in 14.3, two in 14.5, two in 14.6 and one in 14.7. 14.5 had numbered its
  two 14.6 and 14.7 and 14.7 its one 14.10; they are Examples 14.5, 14.6 and
  14.9 now, on the pages, in the exercise that cites the pan, in the figure
  captions and readouts, and in the concept rows that name them (14.6's two
  rows had the same slip the other way, naming 14.8 and 14.9 for 14.7 and
  14.8).
- **Symbols.** Twenty rows, as listed; no page writes `\kTf`, Chapter 4's
  tension, for a temperature, and the final temperature of 14.2 and 14.3 is
  Chapter 13's `T_ftemp` (`\kTempf`) throughout. 14.2's variable row for
  `PE_g` is dropped: the page writes the truck's lost potential energy as
  $Mgh$, as the book does, and never as $\text{PE}_\text{g}$, so the row
  named a symbol the page does not print. The example's $Q_\text{ice}$,
  $Q_\text{soda}$, $m_\text{ice}$, $m_\text{soda}$ and $c_\text{W}$ of 14.3
  stay in plain LaTeX and in ink, as 9.2's $m_1$ and $m_2$ do.
- **Figure 14.29 has one original, not two.** The CNXML gives (a) the
  spectra and (b) the gas flame as one image, so the spectrum figure carries
  one original with both panels; the Photographs kept line above counts the
  flame as "the second original" and should be read as the second panel.
- **Figure 14.8 is still**, as the Motion line decides; `ch14/COLOR.md` had
  said the thermal-motion arrows on its molecules animate and now agrees
  with the page, which draws them as the book's marks for the limits of
  motion.
- **What the pages bind.** 14.7 binds power and temperature as
  `ch14/COLOR.md` foresaw, and energy and time as well, through its readouts,
  which write every rate as $\kQh/\kt$ under the colour plan's own rule for
  the fraction; 14.5 binds power, temperature, energy and time, since its
  slab's readout states the day's heat and its collision figure draws the
  packets of heat in the energy hue. `COLOR.md`'s summary line says so.
- **Motion.** The Motion line held: six drawn figures register a cycle,
  14.2 and 14.3 in 14.1, 14.16 and 14.17 in 14.5, 14.21 + 14.22 and 14.23 in
  14.6, and every other drawn figure answers its sliders and carries no
  transport. The fold the Folds line allowed was taken: 14.21 and 14.22 are
  one figure, "Figure 14.21 + 14.22".
- **Anchors.** The 71 anchors the plans asked for are on every variable and
  equation row of `chapter.json`, each a span of its section's `text.html`;
  14.4 has no row to anchor.
- **Errata.** The Prose line says the book's slips are named in
  `exploration.md` under Errata, and that section was not written in the
  prep pass; it is there now, with the three slips named above, Figure
  14.9's axis and the AP items' reference to an experiment this edition does
  not print.
- **Weights.** Root rule 20's `weights_by` field is not in the schema, so
  the AI mark on the weighted rows lives in each section's `exercise_notes`,
  as every earlier chapter has it.
