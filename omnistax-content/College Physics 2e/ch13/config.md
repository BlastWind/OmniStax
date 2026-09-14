# Config: College Physics 2e, Chapter 13

Proposed by the prep agent after exploration (2026-09-14). Status: applied as
proposed, on Chen's standing instruction to finish the book in waves without
check-ins; the per-section stops of rule 2 and the plan reviews of rule 5 are
replaced by a plan file per section, written before the section is built and
left for review after, as Chapters 1 to 12 did it. Each line is a setting and
its value. Lines that repeat the Chapter 1 to 12 configs are unchanged unless
marked.

| Setting | Value |
|---|---|
| Chapter | 13 Temperature, Kinetic Theory, and the Gas Laws, modules m42213 (introduction), m42214, m42215, m42216, m42217, m42218, m42219 |
| Front matter | the chapter introduction (m42213) is a page of its own in `ch13/intro/`, listed before 13.1 (rule 21), built in the prep pass with both of the book's photographs, Figure 13.1 and Figure 13.2, since the book prints both in the module and both numbers must land |
| Unit of work | one section = one page; sections never folded (rule 11); 13.5, which has no problem set of its own and no worked example, stays a page of its own and gains two keyed problems from 13.6 (see Exercise placement) |
| Order | 13.1 to 13.6 in book order, built in parallel by one agent per section |
| Loop | plan file → build → validator, all six sections in one wave; review after |
| Prose | verbatim, the book's own slips included and named in `exploration.md` under The keyed items; objectives, summary, glossary pulled into the tables and views; the book's boxed notes kept verbatim (13.1's Misconception Alert, Making Connections: Absolute Zero and The Zeroth Law of Thermodynamics; 13.2's three boxed expansion results and Filling the Tank; 13.3's Ideal Gas Law, Take-Home Experiment, Avogadro's Number, Ideal Gas Law (in terms of moles) and the seven-step Problem-Solving Strategy, kept as the book's numbered steps; 13.4's Things Great and Small derivation and its Historical Note; 13.6's Percent Relative Humidity) |
| Degree signs | the source prints `º` (the masculine ordinal) inside `\text{}` for every degree; the page writes `°C` and `°F` outside math and `^\circ\text{C}`, `^\circ\text{F}` inside, never `º`, per the standing decision for this job (new) |
| Tables | five of the book's own, each rebuilt as a `div.book-table` whose eyebrow is the book's number: Table 13.1 Temperature Conversions in 13.1 (plain); Table 13.2 Thermal Expansion Coefficients at 20 °C in 13.2 (irregular: three group rows spanning the columns and a footnote on the title); Table 13.3 Critical Temperatures and Pressures and Table 13.4 Triple Point Temperatures and Pressures in 13.5 (irregular: a two-row header with spanning cells; Table 13.3's four stray asterisks after "atm" are dropped); Table 13.5 Saturation Vapor Density of Water in 13.6 (plain, its 100 °C row bold as printed). Two more sit inside exercises and travel in the exercise `prompt` as HTML, as 3.4's did: the data table of 13.3's second AP item (its header typo "x10m<sup>5</sup>" kept and named in `exercise_notes`) and the options table of 13.4's first AP item |
| Sub-concept headers | 13.1, 13.2, 13.3, 13.4, 13.5 and 13.6 all print headers of their own and those are kept as the book writes them; where a run of text before or between the book's headers holds more than one idea, the header the agent adds is reported in the plan |
| Figures | a sim per idea or result the section introduces; every diagram replaced by a sim with the book's image kept as its original; a photograph kept where the text points at it or it shows the thing the passage is about, dropped where it is decoration; each listed in the plan (rule 14) |
| Photographs kept | eight: the NASA engineer (13.1) and the alcohol thermometer (13.2) on the introduction page; the thermometer again (13.3), the plastic thermometer (13.5), the pyrometer (13.6) and the thermograph (13.8) in 13.1; the bridge expansion joint (13.11) and the pothole (13.15) in 13.2; the lunar rover (13.26) in 13.4. Dropped: the fuel gauge (13.14), the hot-air balloon (13.17) and the dew on a banana leaf (13.31), each a decoration nothing points at, named in the sections' `notes`. The thermograph's file name carries a space in the bundle and is copied as `Picture_3-08a5.jpg` |
| Folds | judged per section, never across sections. The cases: 13.21 (a molecule striking the wall) and 13.22 (gas in a box) are one scene drawn twice and may fold into one moving sim, "Figure 13.21 + 13.22"; 13.24 (the distribution at 300 K) and 13.25 (the distribution at two temperatures) are one graph drawn twice and may fold, "Figure 13.24 + 13.25". 13.28's two panels and 13.19's three are one number each with several originals and are not folds |
| Sim sliders | whatever is interesting and variable in the idea: the temperature, first of all, on almost every figure; the temperature change of an expanding body and the material chosen from Table 13.2; the number of molecules pumped into a tire or a box; the volume set by a piston; the gas chosen for a Maxwell-Boltzmann curve; a point dragged across a phase diagram; the lid on or off a container of water; the vapor density of the air |
| Motion | decided per figure (rule 14). Still: the three scales, the graphs of 13.10, 13.13, 13.24 + 13.25, 13.27 and 13.28, the expanding plate and box, the phase diagram, the bubble of 13.33, each of which answers its sliders and nothing else. Three ideas have a clock in them and may move, and the plan line must say so and why: molecules in a box striking the walls (13.19, 13.21 + 13.22), where the pressure is the momentum delivered per unit time and no still can show a rate; the exchange of molecules between a liquid and its vapor (13.30, 13.32), where equilibrium is two rates being equal; and the sound wave of 13.23, if the agent judges it worth a sim at all. A gas box whose molecules jitter merely to look alive, with no readout of the rate they produce, is the dummy loop rule 14 forbids (new) |
| 3D | none; every scene of the chapter is a box, a strip, a graph or a plane, and each is clearest drawn flat (rule 28.1). The box of molecules is drawn in section, in two dimensions, and the readout says so where the count of dimensions matters (the $\frac{1}{3}$ of 13.4) |
| Exaggeration | thermal expansion is too small to see at scale (0.84 m in 1275 m) and is drawn exaggerated on a slider with the factor stated in the readout beside the true numbers, per root rule 28.4 (new) |
| Figures that serve exercises | the book's own rules give two ways of carrying an image an exercise refers to, and this chapter uses the second throughout: the two blocks of 13.2's Check Your Understanding (Figure 13.16, the chapter's one numbered exercise figure), the piston of 13.3's second AP item, the two-temperature distribution of 13.4's third AP item and the carbon dioxide phase diagram of 13.5's third conceptual question travel on the `figure` field of the exercise card that refers to them, as Chapters 4, 9.3, 9.6 and 12 do. No exercise image of this chapter is redrawn |
| Colour coding | one new type, `temperature` (K), because every figure of the chapter carries it on a slider and states it in a readout, and Chapters 14 and 15 will draw it again; `pressure` and `density` are Chapter 11's and are used by name, never restaged. Root rule 7 § temperature is written out in `COLOR.md`: the hue is on the symbol, the slider and the axis, never a tint on a body. $N$, $n$, $k$, $R$, $N_\text{A}$, $M$, $m$, $\alpha$, $\beta$, $\overline{v^2}$, $L$, $A$, $V$, $\Delta A$, $\Delta V$, $l$ and every ratio stay untyped and in ink; $\Delta L$ keeps the position hue Chapter 5 gave its row. Symbol rows added are listed under "Symbols" below |
| Inline exercises | the Check Your Understanding boxes, one each in 13.1, 13.2, 13.4 and 13.6, three in 13.3, two in 13.5, every one keyed, set inline after the passage each tests |
| Exercises tab | end-of-module problems, conceptual questions, AP test prep |
| Exercise placement | an exercise goes with the section that introduces what it tests. The Integrated Concepts and Unreasonable Results problems at the end of 13.6 range over the chapter and five move with `source_section: "13.6"`, both sections' `exercise_notes` saying so: `fs-id1543836` (copper block in cold and hot water, keyed) and `fs-id1669904` (aluminum rod, unkeyed, left out) to 13.2; `fs-id1582923` (moles at $10^{14}$ N/m², keyed) to 13.3; `fs-id2705483` (supernova rms speed, keyed) to 13.4; `fs-id1893897` (partial pressure of nitrogen, keyed), `fs-id2377418` (the diver's oxygen, keyed) and `fs-id2298434` (critical pressure at depth, unkeyed, left out) to 13.5. Nothing else moves; 13.4's fourth AP item (a piston at constant temperature) stays where the book prints it |
| AP test prep | included; the chapter's eight AP items sit in 13.3 (two) and 13.4 (six). An unkeyed AP item is kept as an open item with its options as the book prints them and an AI-marked suggested approach, never as a graded choice. 13.3's first item asks for two answers and is keyed (a), (c); 13.4's fifth item is keyed with two numerical parts |
| PhET interactive links | three, all dropped and named in `notes`: 13.4 Gas Properties, 13.5 States of Matter—Basics, 13.6 States of Matter |
| Cross-references | plain text throughout, as every other page of the book writes them: a reference to another section, another chapter, an appendix or a worked example on another page is the book's words with no link, and the app links "Figure 13.7" and an "Example 13.3" that sits on the same page by itself |
| Answers to book problems | book answer key only; never generated; the 35 unkeyed problems are left out and named in the notes |
| Suggested approaches for open questions | generated, marked AI: all 22 conceptual questions of the chapter and the 4 unkeyed AP items |
| Generated questions | none; a node with no book exercise of its own is noted in the plan, no question generated |
| Concept nodes | testable units only; kinds idea/result/skill; canonical ids; 47 nodes written into `book.json` before the sections were built (7 for 13.1, 8 for 13.2, 9 for 13.3, 7 for 13.4, 9 for 13.5, 7 for 13.6) with edges into Chapters 1, 2, 4, 5, 6, 7, 8 and 11 and within the chapter |
| Formulas | `ch13/chapter.json`: the stated and named results important and the worked substitution steps not; no anchor on any row, since the validator refuses an anchor into an unbuilt section, and the chapter pass writes them from the section plans |
| Book manifest | `ch13` after `ch12` in `book.json` chapters, added by `ost merge college-physics-2e 13` |

## Symbols

Never change an existing symbol row (rule of the job). Six rows the chapter
would otherwise have wanted are already taken and are **not** reused for this
chapter's meanings:

- `T` is the **period**, a time with the macro `\kT` (Chapter 16), and
  `T_1`, `T_2` are **tensions** (Chapter 4). Temperature and its variants are
  new rows with the LaTeX `T` and macros of their own; no page writes `\kT`
  for a temperature.
- `k` is the **force constant**, a stiffness with the macro `\kk` (Chapter
  16). The Boltzmann constant is a second untyped row with the same LaTeX.
- `R` is a **resultant vector**, a position with the macro `\kR` (Chapter 3).
  The gas constant is a second untyped row with the same LaTeX.
- `N` is the **normal force** with the macro `\kN` (Chapter 4). The number of
  molecules is a second untyped row with the same LaTeX.
- `α` is the **angular acceleration** with the macro `\kalpha` (Chapter 10).
  The coefficient of linear expansion is a second untyped row.
- `P` is **power** with the macro `\kP` (Chapter 7). Pressure is Chapter 11's
  row `P_press` and is written with Chapter 11's macro `\kPr`.

Rows this chapter stages, with the sections that write them:

| sym | LaTeX | type | macro | where |
|---|---|---|---|---|
| `T_temp` | `T` | temperature | `\kTemp` | every section |
| `ΔT` | `\Delta T` | temperature | `\kdTemp` | 13.2 |
| `T_0temp` | `T_0` | temperature | `\kTempo` | 13.3 |
| `T_ftemp` | `T_{\text{f}}` | temperature | `\kTempf` | 13.3 |
| `T_1temp` | `T_1` | temperature | `\kTempone` | 13.4, 13.5 |
| `T_2temp` | `T_2` | temperature | `\kTemptwo` | 13.4, 13.5 |
| `T_c` | `T_{\text{c}}` | temperature | `\kTempc` | 13.5 |
| `T_C` | `T_{{}^\circ\text{C}}` | temperature | `\kTempC` | 13.1 |
| `T_F` | `T_{{}^\circ\text{F}}` | temperature | `\kTempF` | 13.1 |
| `T_K` | `T_{\text{K}}` | temperature | `\kTempK` | 13.1 |
| `P_0` | `P_0` | pressure | `\kPro` | 13.3 |
| `P_f` | `P_{\text{f}}` | pressure | `\kPrf` | 13.3 |
| `KE_bar` | `\overline{\text{KE}}` | energy | `\kKEbar` | 13.4 |
| `v_rms` | `v_{\text{rms}}` | velocity | `\kvrms` | 13.4 |
| `v2_bar` | `\overline{v^2}` | — | — | 13.4 |
| `N_count` | `N` | — | — | 13.3, 13.4, 13.5 |
| `n` | `n` | — | — | 13.3, 13.6 |
| `N_A` | `N_{\text{A}}` | — | — | 13.3 |
| `k_boltz` | `k` | — | — | 13.3, 13.4, 13.5 |
| `R_gas` | `R` | — | — | 13.3, 13.6 |
| `α_exp` | `\alpha` | — | — | 13.2 |
| `β` | `\beta` | — | — | 13.2 |
| `ΔA` | `\Delta A` | — | — | 13.2 |

Twenty-three rows in all, and one type, `temperature`.

Rows used as they stand: Chapter 11's `P_press` (`\kPr`), `P_1`, `P_2`,
`P_atm` (`\kPatm`), `ρ_dens` (`\krho`), `V`, `ΔV`, `V_0` and `A`; Chapter 5's
`ΔL` (`\kdL`, a position) and `B_bulk` (`\kBb`); Chapter 12's `L_len` and
`l`; Chapter 7's `KE` (`\kKE`); Chapter 8's `p` (`\kp`) and `Δp` (`\kdp`);
Chapter 2's `v` (`\kv`), `v_x` (`\kvx`), `Δt` (`\kdt`) and `F` (`\kF`);
Chapter 3's `v_p` (`\kvp`), which is written $v_\text{p}$ and is a velocity,
exactly the most probable speed of 13.4, so 13.4 gives it a variables row of
its own meaning rather than a second symbol row; and the untyped `m` and `M`
for the mass of a molecule and the molar mass.

## What the build changed (chapter pass, 2026-09-14)

A few lines of the table above needed a word after the sections were built,
and they are corrected here rather than in the table. Everything else stood.

- **Motion.** The three ideas with a clock moved as foreseen (the tire of
  13.19, the box of 13.21 + 13.22, the liquid and its vapor of 13.30 and
  13.32), and one more figure moves that the table did not foresee: 13.1's
  Sim of two blocks and a plate coming to a common temperature, which is
  the zeroth law told as the approach it is, with a finite cycle and a
  scrubber. The sound wave of 13.23 is not drawn; the figure is still and
  its readout says in words what the wave would show. Five figures move in
  all, and no still figure registers a cycle.
- **Formulas.** Every variable and equation row of `chapter.json` carries
  an anchor now, 61 and 32, written from the sections' plans; the line
  above that says "no anchor on any row" described the tables before the
  sections were built. No equation row of the chapter carries a `ktex`,
  although every chapter from 2 to 16 does; the question is left for
  Fable rather than answered for one section.
- **Choice options are printed raw.** The app prints a `choice` item's
  option strings as they stand, with no math sweep (`ChoiceAnswer.svelte`
  writes `{o}`), so an option cannot carry `$T_1$`; 13.4's two graded
  choices write their subscripts as Unicode (T₁, T₂). Recorded for the app.
- **Concept evidence.** Four rows of 13.2 were corrected through
  `book-rows.json` and merged: the three worked examples take the
  publisher's numbers 13.3, 13.4 and 13.5, and the Hong Kong parcel's row
  says the expanded tape reads the parcel smaller rather than shrinking it.
- **13.6's notes.** `exercise_notes` names each of the seven items that
  left the section by id and the section it is set in, and says the two
  unkeyed ones (fs-id1669904, fs-id2298434) are set in neither.
- **Errata found in the build.** The caption of Figure 13.13 puts the
  density of water at 4 °C 0.0075% above that at 2 °C where the figure's
  own numbers give about 0.003%; kept in the original caption and recorded
  in `exploration.md`. The key to the diver's problem in 13.5 uses
  1.013 × 10⁵ Pa where the prompt states 1.01 × 10⁵ N/m²; both results
  pass the card's tolerance and its notes say so.
- **Schema.** A glossary row carries no anchor, so 13.4's wish for one on
  "thermal energy" cannot be applied. Root rule 20's `weights_by` field is
  not in the schema (`exercise_concepts` carries `exercise`, `concept` and
  `weight` only), so the plans' weights are recorded as AI-generated in
  each section's `exercise_notes`, as every earlier chapter has it; the
  rule is left as it stands for Fable to settle.
- **The colour scheme, for Fable and Chen.** With twenty-four types
  declared the scheme gives `pressure` a pale yellow on the light theme
  that is nearly illegible where 13.1, 13.2, 13.4, 13.5 and 13.6 put it on
  an axis title, a gauge, a slider and a readout (it reads well on the
  dark theme), and it gives `temperature` and `elastic-modulus` violets
  that cannot be told apart on 13.2's thermal stress Sim, where the two sit
  on neighbouring sliders. No hue was invented (root rules 7 and 22); every
  figure labels its values in words beside the colour, and the scheme is
  left to the app.
- **The book's `COLOR.md`.** Its table stopped at Chapter 10's types; the
  seven declared since (pressure, density, surface tension, flow rate,
  viscosity, entropy, temperature) are added in the shape of the existing
  rows. Its prose still says the element palette does not arise in the
  book, which this chapter's molecules make untrue; the prose was not
  touched and is left for the book-level pass.
