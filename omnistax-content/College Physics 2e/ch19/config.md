# Config: College Physics 2e, Chapter 19

Proposed by the prep agent after exploration (2026-09-14). Status: applied as
proposed, on Chen's standing instruction to finish the book in waves without
check-ins; the per-section stops of rule 2 and the plan reviews of rule 5 are
replaced by a plan file per section, written before the section is built and
left for review after, as Chapters 1 to 15 did it. Each line is a setting and
its value. Lines that repeat the Chapter 1 to 15 configs are unchanged unless
marked.

| Setting | Value |
|---|---|
| Chapter | 19 Electric Potential and Electric Field, modules m42320 (introduction), m42324, m42326, m42328, m42331, m42333, m42336, m42395 |
| Front matter | the chapter introduction (m42320) is a page of its own in `ch19/intro/`, listed before 19.1 (rule 21), built in the prep pass |
| Unit of work | one section = one page; sections never folded (rule 11); 19.3, which has one figure and no AP items of its own, and 19.7, which has two photographs and one example, stay pages of their own |
| Order | 19.1 to 19.7 in book order, built in parallel by one agent per section |
| Loop | plan file → build → validator, all seven sections in one wave; review after |
| Prose | verbatim, the book's own slips included (the $V_\text{AB'}$ of 19.2's narrative, the unmatched parenthesis of 19.2's summary, the empty display of Example 19.9; each named in the section's `notes` and in `exploration.md` under Errata); the empty emphasis marks (`****`) the converter carries out of 19.1's summary and 19.5's summary and problem stems are markup and are dropped; objectives, summary, glossary pulled into the tables and views; the book's boxed notes kept verbatim (the eighteen boxes `exploration.md` § Notes lists), the boxed restatement of an equation keeping the book's words while the equation row is written once on the narrative's statement |
| Tables | one numbered, Table 19.1 Dielectric Constants and Dielectric Strengths for Various Materials at 20 °C in 19.5, rebuilt as a `div.book-table` whose eyebrow is the book's number, its math kept in its cells and the em dashes of the vacuum and water rows kept; one unnumbered, the dimension-and-charge table inside 19.5's fifth AP item, which travels in that item's prompt as a small table with Dimension and Charge (µC) as its header |
| Sub-concept headers | 19.1 (The Electron Volt, Conservation of Energy), 19.5 (Parallel Plate Capacitor, Dielectric) and 19.6 (Capacitance in Series, Capacitors in Parallel) print headers of their own and those are kept as the book writes them; 19.2, 19.3, 19.4 and 19.7 print none (19.7's module opens on an empty header the converter writes as `## `, which is dropped), so their headers are the agent's |
| Figures | a sim per idea or result the section introduces; every diagram replaced by a sim with the book's image kept as its original; a photograph kept where the text points at it or it shows the thing the passage is about, dropped where it is decoration; each listed in the plan (rule 14) |
| Photographs kept | five: the AED practice that opens the chapter (Figure 19.1, kept by rule 21), the spark chamber (19.6, which follows Example 19.4 and shows sparks jumping between plates along field lines, the thing the passage is about; a section agent who reads it as a splash image may drop it and say why), the typical capacitors (19.14, "Figure 19.14 shows"), the calculator's capacitor (19.23, "See Figure 19.23") and the automated external defibrillator (19.24, which the passage cites and Example 19.11 computes). The electric ray of 19.4's last problem travels on that problem's card if the problem is kept; it is unkeyed and is not |
| Folds | judged per section. The cases are 19.4's four equipotential maps (19.8 the point charge, 19.9 the opposite pair, 19.10 the two negatives, 19.11 the plates), which one field-and-equipotential engine with a choice of arrangement may carry under two or three numbers, the eyebrow reading them all, or which may stand as four figures of one engine; 19.5's 19.13 (field lines proportional to $Q$) and 19.15 (the plates with $A$ and $d$), which are one parallel plate capacitor with sliders on $V$, $A$ and $d$ and may fold; and 19.6's 19.20 and 19.21 (series and parallel), which are one circuit with a choice of connection and may fold, 19.22 (the mixed circuit reduced in three steps) standing alone. Figures with (a)(b) panels under one number (19.10, 19.12, 19.16, 19.20, 19.21, 19.22) are one number with one original, not folds |
| Sim sliders | whatever is interesting and variable in the idea: the potential difference a charge falls through and the size and sign of the charge, the voltage across two plates and their separation, the charge on a sphere and the distance from it, the number of equipotential lines drawn and the positions and signs of the charges that make them, a capacitor's plate area, separation and voltage, the three capacitances of a combination, the charge fed onto a capacitor as it charges. A choice, never a slider, for the sign of a charge, for the dielectric material of Table 19.1, for the arrangement of charges on an equipotential map and for series against parallel (rule 26.1) |
| Motion | decided per figure (rule 14). Most of the chapter is still: the plates and their voltage, the point charge and its potential, the equipotential maps, the capacitor and its dielectric, the series and parallel circuits and the energy triangle each answer their sliders, register no cycle and get no transport. Three ideas have a clock in them and may move, and the plan line must say so and why: a charge released between the plates and gaining kinetic energy as it falls down the electrical hill (19.2 and 19.4, where the conversion of $\text{PE}$ to $\text{KE}$ over the flight is the idea), the electrons a battery drives through a headlight (19.3, whose arrows are kinematic), and the ions diffusing across the membrane until the Coulomb force halts them (19.19, a process in time). A dielectric's molecules turning to face the plates is a state that answers the $\kappa$ slider, not a clock (new) |
| 3D | none; every scene of the chapter is a schematic of charges, plates and lines or a graph, and both are clearest drawn flat (rule 28.1). The equipotential spheres of a point charge are drawn as the book draws them, as circles in the plane, and the water molecule and the polarized atom are the book's flat schematics; a section agent who wants the spheres in 3D must argue that the arrangement in space is the lesson, which the text does not make it |
| Figures that serve exercises | the book's own rules give two ways of carrying an image an exercise refers to, and this chapter uses the second: 19.6's three circuits (`Figure_20_05_08a`, `_09a`, `_10a`) travel on the `figure` field of the exercise cards that refer to them, as Chapters 4, 9, 12 and 15 do. 19.4's six exercise images belong to problems that are unkeyed and left out, so they are not copied; if the chapter pass keeps those problems as open items, the images travel on their cards the same way |
| Colour coding | two new types, `voltage` (V) and `capacitance` (F), because the chapter's figures draw them, their sliders carry them and their readouts state them; `charge` and `electric-field` are Chapter 18's, staged in the same wave and used by name, never restaged; electric potential energy is the book's `energy` on Chapter 7's `PE` rows; the dielectric constant $\kappa$ (which has no symbol row; see below), the permittivity $\varepsilon_0$, the area $A$, the mass $m$, the electron count $n_\text{e}$ and the dielectric strength stay untyped and in ink; the separation $d$, the distance $r$ and the step $\Delta s$ are positions on the rows the book holds. Symbol rows added are listed under "Symbols" below |
| Inline exercises | none: the chapter has no Check Your Understanding box |
| Exercises tab | end-of-module problems, conceptual questions, AP test prep |
| Exercise placement | an exercise goes with the section that introduces what it tests; 19.1's last seven AP items and its keyed Unreasonable Results problem go to 19.3 with `source_section: "19.1"`, 19.2's two isoline AP items go to 19.4 and its charged-plates AP item to 19.5 with `source_section: "19.2"`, 19.6's one conceptual question goes to 19.7 with `source_section: "19.6"`, both sections' `exercise_notes` saying so in each case; 19.1's first four AP items test Chapter 18's $F = qE$ and stay in 19.1 as the book prints them, since `source_section` never points into a chapter built in the same wave, tagged to Chapter 18's concepts and named in 19.1's notes; `exploration.md` § Exercises lists the ids |
| AP test prep | included; the chapter's 44 AP items sit in 19.1, 19.2, 19.4, 19.5 and 19.7. An unkeyed AP item is kept as an open item with its options as the book prints them and an AI-marked suggested approach, never as a graded choice. 19.4's first, second and fourth AP items read Figures 19.9 and 19.10 by reference and its second and sixth describe the same two plates at right angles |
| PhET interactive links | dropped (Charges and Fields in 19.4, Capacitor Lab in 19.5) and named in `notes`, as is the introduction's link to the publisher's video trailer |
| Cross-references | plain text throughout, as every other page of the book writes them: a reference to another section or another chapter (Electric Charge and Electric Field, Nerve Conduction—Electrocardiograms, Atomic Physics), a worked example on another page or the previous chapter's discussion is the book's words with no link, and the app links "Figure 19.7" and an "Example 19.8" that sits on the same page by itself |
| Answers to book problems | book answer key only; never generated; the 38 unkeyed problems are left out and named in the notes, among them all ten of 19.4's sketching problems, 19.1's fusion problem and its Construct Your Own Problem item, 19.5's prankster problem and 19.7's Construct Your Own Problem item |
| Suggested approaches for open questions | generated, marked AI: all 23 conceptual questions of the chapter and the 22 unkeyed AP items |
| Generated questions | none; a node with no book exercise of its own is noted in the plan, no question generated |
| Concept nodes | testable units only; kinds idea/result/skill; canonical ids; 38 nodes written into `book.json` before the sections were built (9 for 19.1, 5 for 19.2, 5 for 19.3, 5 for 19.4, 7 for 19.5, 4 for 19.6, 3 for 19.7) with edges into Chapters 2, 3, 4, 6, 7 and 13, into Chapter 18 where its ids had landed, and within the chapter |
| Formulas | `ch19/chapter.json`: the stated and named results important (work and potential energy, the electric potential, the potential difference and the volt, energy from potential difference, the electron volt, conservation of energy in its two forms, the speed from a voltage, the uniform-field voltage in both forms, the unit identity, the gradient, the point charge potential, the field of a point charge as the book restates it, zero work along an equipotential, the capacitance and the farad, the parallel plate capacitance with and without a dielectric, the dielectric constant as a ratio of fields, the series and parallel capacitances, the capacitor's energy in its three forms) and the worked substitution steps not; no anchor on any row, since the validator refuses an anchor into an unbuilt section, and the chapter pass writes them from the section plans |
| Book manifest | `ch19` after `ch18` in `book.json` chapters (after `ch16` if Chapters 17 and 18 have not merged first; `ost merge` sorts by number), added by `ost merge college-physics-2e 19` |

## Symbols

Never change an existing symbol row (rule of the job). Rows the chapter
would otherwise have wanted are already taken and are **not** reused for this
chapter's meanings:

- `V` and `ΔV` are the untyped **volume** and its change (Chapters 5, 11, 13
  and 15), with no macro. The voltage is `V_volt` (LaTeX `V`, type
  `voltage`, macro `\kV`) and the potential difference `ΔV_volt`
  (`\Delta V`, `\kdV`).
- `C` is Chapter 6's **circumference**, a position with `\kC`. The
  capacitance is `C_cap` (LaTeX `C`, type `capacitance`, macro `\kCap`).
- `E` is Chapter 7's **total energy** with `\kE`. The electric field is
  Chapter 18's `E_field` (`\kEf`), and the energy stored in a capacitor is
  `E_cap` (`\kEcap`).
- `Q` is Chapter 12's **flow rate** with `\kQ`, and `Q_1` a branch of it.
  The charge is Chapter 18's `Q_charge` (`\kQch`), and 19.6's three charges
  follow its spelling as `Q_1charge`, `Q_2charge` and `Q_3charge`.
- `k` is Chapter 16's **force constant** with `\kk`; Coulomb's constant is
  Chapter 18's untyped `k_coul`.
- `PE`, `ΔPE`, `PE_i`, `PE_f`, `KE`, `KE_i` and `KE_f` are Chapter 7's
  **energy** rows and are used as they stand: 19.1 writes electric potential
  energy with the same letters, and `chapter.json` gives them their electric
  meaning, the way `r_1` and `r_2` serve several chapters. No `PE_elec` row.
- `d` is Chapter 3's **position** with `\kd` and is the plate separation as
  it stands; `r_curv` (LaTeX `r`, position, `\kr`) is the distance from a
  point charge, as Chapter 6 keyed it; `Δs` (`\kds`) is the step over which
  the potential changes. Chapter 18 gives the Coulomb separation an untyped
  `r`; this chapter binds `position` where a figure carries $r$ or $d$ on a
  slider and so uses the typed rows.
- `A`, `m`, `θ`, `h` and `g` are used as they stand.

Rows this chapter stages, with the sections that write them:

| sym | LaTeX | type | macro | where |
|---|---|---|---|---|
| `V_volt` | `V` | voltage | `\kV` | 19.1, 19.2, 19.3, 19.4, 19.5, 19.6, 19.7 |
| `ΔV_volt` | `\Delta V` | voltage | `\kdV` | 19.1, 19.2, 19.4, 19.7 |
| `V_A` | `V_{\text{A}}` | voltage | `\kVA` | 19.1, 19.2 |
| `V_B` | `V_{\text{B}}` | voltage | `\kVB` | 19.1, 19.2 |
| `V_AB` | `V_{\text{AB}}` | voltage | `\kVAB` | 19.2 |
| `V_1volt` | `V_1` | voltage | `\kVone` | 19.6 |
| `V_2volt` | `V_2` | voltage | `\kVtwo` | 19.6 |
| `V_3volt` | `V_3` | voltage | `\kVthree` | 19.6 |
| `C_cap` | `C` | capacitance | `\kCap` | 19.5, 19.6, 19.7 |
| `C_air` | `C_{\text{air}}` | capacitance | `\kCair` | 19.5 |
| `C_1` | `C_1` | capacitance | `\kCone` | 19.6 |
| `C_2` | `C_2` | capacitance | `\kCtwo` | 19.6 |
| `C_3` | `C_3` | capacitance | `\kCthree` | 19.6 |
| `C_S` | `C_{\text{S}}` | capacitance | `\kCS` | 19.6 |
| `C_p` | `C_{\text{p}}` | capacitance | `\kCp` | 19.6 |
| `C_tot` | `C_{\text{tot}}` | capacitance | `\kCtot` | 19.6 |
| `Q_1charge` | `Q_1` | charge | `\kQchone` | 19.6 |
| `Q_2charge` | `Q_2` | charge | `\kQchtwo` | 19.6 |
| `Q_3charge` | `Q_3` | charge | `\kQchthree` | 19.6 |
| `E_0field` | `E_0` | electric-field | `\kEfo` | 19.5 |
| `E_cap` | `E_{\text{cap}}` | energy | `\kEcap` | 19.7 |
| `ΔPE_cycle` | `\Delta\text{PE}_{\text{cycle}}` | energy | `\kdPEcycle` | 19.1 |
| `ΔPE_car` | `\Delta\text{PE}_{\text{car}}` | energy | `\kdPEcar` | 19.1 |
| `n_e` | `n_{\text{e}}` | — | — | 19.1 |
| `ε_0` | `\varepsilon_0` | — | — | 19.5 |

Twenty-five rows in all, and two types, `voltage` and `capacitance`. The
charge and field rows are staged with the types `charge` and
`electric-field`, which Chapter 18 declared and merged before this chapter
did. Chapter 18's modules never write the permittivity of free space, so
`ε_0` is this chapter's row, untyped and with no macro, as Chapter 13's
`k_boltz` is. The dielectric constant $\kappa$ has **no** symbol row: its
LaTeX `\kappa` begins with `\k` and the app's symbols test reads every
`\k…` in the table as a macro, so the page writes it in plain `\kappa` and
the hover layer does not know it; the row is withdrawn rather than the test
changed, and the report names it.

Rows used as they stand: `PE` (`\kPEtot`), `ΔPE` (`\kdPE`), `PE_i`, `PE_f`,
`KE` (`\kKE`), `KE_i`, `KE_f`, `W` (`\kW`), `F` (`\kF`), `v` (`\kv`), `d`
(`\kd`), `r_curv` (`\kr`), `Δs` (`\kds`), `A`, `m`, `h` (`\kh`), `g` (`\kg`),
`PE_g` (`\kPEg`) and Chapter 18's `q`, `Q_charge`, `q_e`, `q_1`, `q_2`,
`k_coul`, `m_e` and `E_field` (`\kEf`) by the keys its `book-rows.json` staged.
