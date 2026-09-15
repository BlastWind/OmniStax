# Config: College Physics 2e, Chapter 20

Proposed by the prep agent after exploration (2026-09-14). Status: applied as
proposed, on Chen's standing instruction to finish the book in waves without
check-ins; the per-section stops of rule 2 and the plan reviews of rule 5 are
replaced by a plan file per section, written before the section is built and
left for review after, as Chapters 1 to 19 did it. Each line is a setting and
its value. Lines that repeat the Chapter 1 to 19 configs are unchanged unless
marked.

| Setting | Value |
|---|---|
| Chapter | 20 Electric Current, Resistance, and Ohm's Law, modules m42339 (introduction), m42341, m42344, m42346, m42714, m42348, m42350, m42352 |
| Front matter | the chapter introduction (m42339) is a page of its own in `ch20/intro/`, listed before 20.1 (rule 21), built in the prep pass |
| Unit of work | one section = one page; sections never folded (rule 11); 20.2, which has two figures and one example, and 20.7, which has no equation and three problems, stay pages of their own |
| Order | 20.1 to 20.7 in book order, built in parallel by one agent per section |
| Loop | plan file → build → validator, all seven sections in one wave; review after |
| Prose | verbatim, the book's own slips included (the missing $n$ in Example 20.3's solution, the spelling of Table 20.2's title, the unlabelled part (a) of Example 20.6, and the Critical Thinking key of 20.7 that writes $3.25\times10^{-3}$ J/s for a stem of 3.25 MJ; each named in the section's `notes` and in `exploration.md` under Errata); objectives, summary, glossary pulled into the tables and views; the book's boxed notes kept verbatim (the seven boxes `exploration.md` § Notes lists) |
| Tables | three numbered: Table 20.1 Resistivities of Various Materials at 20 °C and Table 20.2 Temperature Coefficients of Resistivity in 20.3, and Table 20.3 Effects of Electrical Shock as a Function of Current in 20.6, each rebuilt as a `div.book-table` whose eyebrow is the book's number, its italic group rows (Conductors, Semiconductors, Insulators) kept and its footnotes kept as the book prints them; two unnumbered, the voltage-and-current table inside 20.2's second AP item and the three-row wire table inside 20.3's fifth AP item, which travel in those items' prompts as small tables |
| Sub-concept headers | 20.1 (Electric Current, Drift Velocity), 20.2 (Ohm's Law, Resistance and Simple Circuits), 20.3 (Material and Shape Dependence of Resistance, Temperature Variation of Resistance), 20.4 (Power in Electric Circuits, The Cost of Electricity), 20.5 (Alternating Current, Why Use AC for Power Distribution?), 20.6 (Thermal Hazards, Shock Hazards) and 20.7 (Nerve Conduction, Electrocardiograms) print headers of their own and those are kept as the book writes them; no section of this chapter prints none |
| Figures | a sim per idea or result the section introduces; every diagram replaced by a sim with the book's image kept as its original; a photograph kept where the text points at it or it shows the thing the passage is about, dropped where it is decoration; each listed in the plan (rule 14) |
| Photographs kept | six: the Srisailam hydroelectric station that opens the chapter (Figure 20.1, kept by rule 21), the two digital thermometers (20.12, the thermistor the temperature coefficient is taught for), the 25-W and 60-W bulbs with the compact fluorescent (20.13, whose caption asks the questions the section answers), the transformers on a transmission line (20.17, "See Figure 20.17"), the electric arc (20.23, whose caption asks the closing question about frequency) and the electric eel (20.29, which the passage names). A section agent who reads one of these as a splash image may drop it and say why |
| Folds | judged per section. The cases are 20.1's 20.2, 20.4 and 20.7, which one wire-and-carriers engine may carry under two or three numbers with the carrier's sign as a choice, the eyebrow reading them all; 20.1's 20.5 and 20.6, the crowd of free electrons, which may fold into one drift-velocity engine; 20.2's 20.8 and 20.9, the simple circuit with and without its voltmeter, which are one circuit with the meter as a state; and 20.5's 20.14, 20.15 and 20.16, the DC and AC traces, the reversing circuit and the power curve, which are one AC engine with a choice of trace and may fold under two of the three numbers. Figures with (a)(b) panels under one number (20.3, 20.4, 20.13, 20.14, 20.18, 20.19, 20.21) are one number with one original, not folds |
| Sim sliders | whatever is interesting and variable in the idea: the charge moved and the time it takes, the current and the wire's radius and free-charge density, the battery's voltage and the resistor's resistance, a cylinder's length and diameter, the temperature of a filament, the power sent down a line and the voltage it is sent at, the peak voltage and the frequency of an AC source, the voltage a person touches and the resistance of their body, the stimulus that fires an axon. A choice, never a slider, for the sign of the carrier, for the material of Table 20.1 and Table 20.2, for DC against AC, for a fuse against a circuit breaker and for which ion the membrane passes (rule 26.1) |
| Motion | decided per figure (rule 14). Several ideas of this chapter have a clock in them and the figures that draw them move, and the plan line must say so and why: the crowd of free electrons drifting through the lattice while each electron rattles (20.1, where the two speeds at once are the idea), the pulse that runs the length of a wire while the electrons barely move (20.1), the current going round the simple circuit (20.2), the AC source reversing and its power curve sweeping (20.5, whose whole subject is a periodic time), the ions crossing a membrane until the Coulomb force halts them and the action potential running down an axon (20.7), and the depolarization wave crossing the heart beside the ECG trace it writes (20.7). The rest are still: the cylinder and its resistance, the resistivity table, the filament's resistance against temperature, the transmission line's losses, the shock bands and the fuse and breaker each answer their sliders, register no cycle and get no transport |
| 3D | none; every scene of the chapter is a circuit schematic, a wire seen from the side, a graph or a membrane, and all of those are clearest drawn flat (rule 28.1). The wire of 20.1 and the cylinder of 20.3 are drawn from a locked view where the book draws them in perspective (rule 28.2), which costs nothing and adds no chrome |
| Figures that serve exercises | the book's own rules give two ways of carrying an image an exercise refers to, and this chapter uses the second: the eleven unnumbered images of 20.1, 20.3 and 20.4 travel on the `figure` field of the exercise cards that refer to them, as Chapters 4, 9, 12, 15 and 19 do. An image whose problem is unkeyed and so left out is not copied |
| Colour coding | two new types, `current` (A) and `resistance` (Ω), because the chapter's figures draw them, their sliders carry them and their readouts state them; `voltage` is Chapter 19's, `charge` and `electric-field` Chapter 18's, `power` and `energy` Chapter 7's, `velocity` Chapter 2's, `frequency` Chapter 16's, `temperature` Chapter 13's and `position` Chapter 2's, all used by name and never restaged; the resistivity $\rho$, its temperature coefficient $\alpha$, the free-charge density $n$, the cross-sectional area $A$, the number of electrons and every specific heat and mass the Integrated Concepts problems bring in stay untyped and in ink. Symbol rows added are listed under "Symbols" below |
| Inline exercises | none: the chapter has no Check Your Understanding box |
| Exercises tab | end-of-module problems, conceptual questions, AP test prep |
| Exercise placement | an exercise goes with the section that introduces what it tests; 20.1's defibrillator resistance problem (`fs-id2397006`) goes to 20.4 with `source_section: "20.1"`, both sections' `exercise_notes` saying so; 20.7's Critical Thinking problem stays in 20.7 as the book prints it and is tagged to 20.3's and 20.4's concepts as well as its own; `exploration.md` § Exercises lists the ids |
| AP test prep | included; the chapter's 15 AP items sit in 20.1, 20.2, 20.3 and 20.4, and 20.5, 20.6 and 20.7 have none. An unkeyed AP item is kept as an open item with its options as the book prints them and an AI-marked suggested approach, never as a graded choice. 20.4's first AP item reads four unnumbered answer graphs by reference and keeps all five images on its card |
| PhET interactive links | dropped (Ohm's Law in 20.2, Resistance in a Wire in 20.3, Generator in 20.5, Neuron in 20.7) and named in `notes`, as is the introduction's link to the publisher's video trailer |
| Cross-references | plain text throughout, as every other page of the book writes them: a reference to another section or another chapter (Resistance and Resistivity, Electrical Safety: Systems and Devices, Transformers, Molecular Transport Phenomena, Viscosity and Laminar Flow) is the book's words with no link, and the app links "Figure 20.6" and an "Example 20.3" that sits on the same page by itself |
| Answers to book problems | book answer key only; never generated; the 50 unkeyed problems are left out and named in the notes, among them 20.4's and 20.6's Construct Your Own Problem items and the eighteen unkeyed problems of 20.4 |
| Suggested approaches for open questions | generated, marked AI: all 32 conceptual questions of the chapter and the 7 unkeyed AP items |
| Generated questions | none; a node with no book exercise of its own is noted in the plan, no question generated |
| Concept nodes | testable units only; kinds idea/result/skill; canonical ids; 43 nodes written into `book.json` before the sections were built (8 for 20.1, 6 for 20.2, 7 for 20.3, 5 for 20.4, 6 for 20.5, 6 for 20.6, 5 for 20.7) with edges into Chapters 2, 7, 12, 13, 14, 16, 18 and 19, and within the chapter |
| Formulas | `ch20/chapter.json`: the stated and named results important (the definition of current, the ampere, the current from drift velocity, Ohm's law in its three forms, the ohm, the $IR$ drop, the resistance of a cylinder, the temperature variation of resistivity and of resistance, the three expressions for electric power, the energy a device uses, the AC voltage and current, the average AC power, the rms current and voltage, Ohm's law for AC and the three AC power expressions) and the worked substitution steps not; no anchor on any row, since the validator refuses an anchor into an unbuilt section, and the chapter pass writes them from the section plans |
| Book manifest | `ch20` after `ch19` in `book.json` chapters, added by `ost merge college-physics-2e 20` |

## Symbols

Never change an existing symbol row (rule of the job). Rows the chapter
would otherwise have wanted are already taken and are **not** reused for
this chapter's meanings:

- `I` is Chapter 10's **moment of inertia** with `\kI`, and `I_c` and
  `I_0` are taken too (a moment of inertia and Chapter 17's intensity), so
  the current is `I_curr` (LaTeX `I`, type `current`, macro `\kIcur`), the
  peak current `I_0curr` (`I_0`, `\kIocur`) and the rms current `I_rms`
  (`\kIrms`).
- `R` is Chapter 6's **radius of curvature**, a position with `\kR`, and
  `R_flow` is Chapter 12's untyped **flow resistance**. The electric
  resistance is `R_res` (LaTeX `R`, type `resistance`, macro `\kRes`), the
  original resistance `R_0res` (`R_0`, `\kReso`), the wire's resistance
  `R_w` and the short's `r_short`.
- `ρ_dens` is Chapter 11's **density** with `\krho`. The resistivity is
  the book's existing untyped `ρ` row (LaTeX `\rho`, no macro), which
  `chapter.json` gives its electric meaning, the way `PE` serves both
  Chapter 7 and Chapter 19; the original resistivity is `ρ_0res`.
- `α` is Chapter 10's **angular acceleration** with `\kalpha` and `α_exp`
  is Chapter 13's untyped expansion coefficient. The temperature
  coefficient of resistivity is `α_res` (LaTeX `\alpha`, untyped, no
  macro).
- `V` is the untyped **volume** of Chapters 5, 11, 13 and 15. The voltage
  is Chapter 19's `V_volt` (`\kV`) and the potential difference its
  `ΔV_volt` (`\kdV`); the peak voltage is `V_0volt` and the rms voltage
  `V_rms`.
- `Q` is Chapter 12's **flow rate** with `\kQ`. The charge is Chapter 18's
  `Q_charge` (`\kQch`), and the charge that crosses an area in a time is
  `ΔQ_charge`.
- `P` is Chapter 7's **power** with `\kP` and is used as it stands; the
  average AC power is `P_ave` and the peak power `P_0pow`.
- `n`, `A`, `D`, `L_len`, `d`, `m`, `t`, `Δt`, `T_temp`, `ΔT`, `f`, `v`,
  `E` and `W` are used as they stand, `n` carrying the free-charge density
  in this chapter's `chapter.json` as it carries an index elsewhere.

Rows this chapter stages, with the sections that write them:

| sym | LaTeX | type | macro | where |
|---|---|---|---|---|
| `I_curr` | `I` | current | `\kIcur` | 20.1, 20.2, 20.3, 20.4, 20.5, 20.6, 20.7 |
| `ΔQ_charge` | `\Delta Q` | charge | `\kdQch` | 20.1, 20.4 |
| `v_d` | `v_{\text{d}}` | velocity | `\kvd` | 20.1 |
| `R_res` | `R` | resistance | `\kRes` | 20.2, 20.3, 20.4, 20.5, 20.6, 20.7 |
| `R_0res` | `R_0` | resistance | `\kReso` | 20.3 |
| `ρ_0res` | `\rho_0` | — | — | 20.3 |
| `α_res` | `\alpha` | — | — | 20.3 |
| `V_0volt` | `V_0` | voltage | `\kVo` | 20.5 |
| `I_0curr` | `I_0` | current | `\kIocur` | 20.5 |
| `I_rms` | `I_{\text{rms}}` | current | `\kIrms` | 20.5, 20.6 |
| `V_rms` | `V_{\text{rms}}` | voltage | `\kVrms` | 20.5, 20.6 |
| `P_ave` | `P_{\text{ave}}` | power | `\kPave` | 20.5, 20.6 |
| `P_0pow` | `P_0` | power | `\kPo` | 20.5 |
| `R_w` | `R_{\text{w}}` | resistance | `\kRw` | 20.6 |
| `r_short` | `r` | resistance | `\krshort` | 20.6 |

Fifteen rows in all, and two types, `current` and `resistance`.

Rows used as they stand: `V_volt` (`\kV`), `ΔV_volt` (`\kdV`), `q` (`\kq`),
`q_e` (`\kqe`), `Q_charge` (`\kQch`), `E_field` (`\kEf`), `P` (`\kP`),
`E` (`\kE`), `W` (`\kW`), `PE` (`\kPEtot`), `t` (`\kt`), `Δt` (`\kdt`),
`T_temp` (`\kTemp`), `ΔT` (`\kdTemp`), `f` (`\kf`), `v` (`\kv`), `d`
(`\kd`), `D` (`\kD`), `L_len`, `n`, `n_e`, `A`, `m`, `r` and `ρ`.
