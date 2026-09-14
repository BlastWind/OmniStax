# Config: College Physics 2e, Chapter 12

Proposed by the prep agent after exploration (2026-09-14). Status: applied as
proposed, on Chen's standing instruction to finish the book in waves without
check-ins; the per-section stops of rule 2 and the plan reviews of rule 5 are
replaced by a plan file per section, written before the section is built and
left for review after, as Chapters 1 to 9 did it. Each line is a setting and
its value. Lines that repeat the Chapter 1 to 9 configs are unchanged unless
marked.

| Setting | Value |
|---|---|
| Chapter | 12 Fluid Dynamics and Its Biological and Medical Applications, modules m42204 (introduction), m42205, m42206, m42208, m42209, m42210, m42211, m42212 |
| Front matter | the chapter introduction (m42204) is a page of its own in `ch12/intro/`, listed before 12.1 (rule 21), built in the prep pass |
| Unit of work | one section = one page; sections never folded (rule 11); 12.6, which has three conceptual questions and no problem set of its own, stays a page of its own |
| Order | 12.1 to 12.7 in book order, built in parallel by one agent per section |
| Loop | plan file → build → validator, all seven sections in one wave; review after |
| Prose | verbatim, the book's own slips included (12.1's Example 12.3 prints $\bar{v}_1$ on both sides of the branching equation, and 12.6's Example 12.10 prints a stray `1.00` beside the viscosity of air; both are kept as printed and named in the sections' `notes` and in `exploration.md`); objectives, summary, glossary pulled into the tables and views; the book's boxed notes kept verbatim (12.2's sheet of paper, its two strips of paper and its Conservation of Energy box, 12.3's Power box, 12.4's Go Down to the River, 12.5's Inhalation, 12.6's Don't Lose Your Marbles) |
| Tables | two, both rebuilt as a `div.book-table` whose eyebrow is the book's number: Table 12.1 Coefficients of Viscosity of Various Fluids in 12.4, which is irregular (one fluid spans several rows of temperature) and carries two footnotes about blood, and Table 12.2 Diffusion Constants for Various Molecules in 12.7, which is plain and carries one footnote (new) |
| Sub-concept headers | 12.2, 12.3, 12.4 and 12.7 print headers of their own and those are kept as the book writes them; 12.1, 12.5 and 12.6 print none, so their headers are the agent's (new) |
| Figures | a sim per idea or result the section introduces; every diagram replaced by a sim with the book's image kept as its original; a photograph kept where the text points at it or it shows the thing the passage is about, dropped where it is decoration; each listed in the plan (rule 14) |
| Photographs kept | eight: the firefighters that open the chapter (Figure 12.1, kept by rule 21), the Huka Falls (12.4, with its keyed problem), the perfume bottle (12.10, with its conceptual question), the Studen Kladenetz dam (12.11(a), as an original of the Torricelli figure), the rising smoke (12.14, which the text points at as the first sight of turbulence), the Bunsen flame (12.17(c), as an original of the velocity-profile figure), the air tube beside a faucet (12.21, with its conceptual question) and the sink-drain insert (12.23, with its conceptual question). The fire engine and ladder (12.12) is a drawing, not a photograph, and is the original of 12.3's fire-hose figure, so the prose's "See Figure 12.12" still lands (corrected in the chapter pass; the prep pass had called it dropped) |
| Folds | judged per section; 12.17(a) and (b) are one number with two panels and are not a fold; 12.24's three sphere panels and 12.28's two membrane panels are likewise one number each; the two halves of 12.11, the dam photograph and its schematic, are one number with two originals. The case for a fold is 12.2 and 12.3, which draw Bernoulli's equation five times over in different applications: a section agent may fold the manometer and the pitot tube (12.8's two panels are already one number) but should not fold across sections |
| Sim sliders | whatever is interesting and variable in the idea: the cross-section of a pipe and where along it the reader looks, the number of branches, the height and the speed at two points of a streamline, the fluid's density, the tube's radius and length, the fluid's viscosity chosen from the book's own table, the speed of an object through a fluid, the diffusing molecule and the time it has had |
| Motion | decided per figure (rule 14). Most of the chapter is still: continuity, Bernoulli's three terms, Poiseuille's law and osmosis each answer their sliders and nothing else, register no cycle and get no transport. Three ideas have a clock in them and may move, and the plan line must say so and why: the onset of turbulence in 12.5, where laminar lanes breaking into eddies is the idea and no slider can stand in for it; the wake around a sphere in 12.6, which is the same figure run past an object; and the random walk of 12.7, where the reader watches $x_\text{rms}$ grow as $\sqrt{t}$. A streamline drawn with moving tracers merely to look alive is the dummy loop rule 14 forbids (new) |
| 3D | none; every scene of the chapter is a flow through a pipe or across a membrane, and both are clearest in section, drawn flat (rule 28.1) |
| Figures that serve exercises | the book's own rules give two ways of carrying an image an exercise refers to, and this chapter uses the second throughout: the Huka Falls, the perfume bottle, the air tube beside a faucet and the sink-drain insert travel on the `figure` field of the exercise card that refers to them, as Chapters 4, 9.3 and 9.6 do. No exercise image of this chapter is redrawn |
| Colour coding | two new types, `flow-rate` (m³/s) and `viscosity` (Pa·s), because the chapter's figures draw both, its sliders carry both and its readouts state both; `pressure` and `density` are Chapter 11's and are used by name, never restaged. The diffusion constant $D$, the resistance to flow $R$, the Reynolds numbers, the number of branches $n$ and every ratio stay untyped and in ink, and so do the scene lengths $r$, $l$, $L$ (the row `L_len`, since the book's `L` is Chapter 10's angular momentum) and $R$ (the sphere's radius); the height $h$ keeps the position hue the book's existing row gives it. Symbol rows added are listed under "Symbols" below |
| Inline exercises | none: the chapter has no Check Your Understanding box |
| Exercises tab | end-of-module problems, conceptual questions, AP test prep |
| Exercise placement | an exercise goes with the section that introduces what it tests; three of 12.4's problems are about an object moving through a viscous fluid rather than about Poiseuille's law and go to 12.6 with `source_section: "12.4"` (`fs-id2401743` the terminal speed from Stokes' law, `fs-id1427261` the viscosity of motor oil from a falling ball, `fs-id3054572` the skydiver), both sections' `exercise_notes` saying so. Of the three only `fs-id1427261` is keyed and is set in 12.6; the other two are unkeyed and are left out of both sections, and both `exercise_notes` name them; nothing else moves |
| AP test prep | included; the chapter's ten AP items all sit in 12.1, 12.2 and 12.3. An unkeyed AP item is kept as an open item with its options as the book prints them and an AI-marked suggested approach, never as a graded choice. 12.2's first AP item has lost the lake its stem described and is kept as the book prints it, with `exercise_notes` saying so; 12.3's first AP item is keyed (a) 12 m/s where the item's own numbers reach about 19 m/s by the section's method, and the key is kept as printed with `exercise_notes` saying so |
| PhET interactive links | none in this chapter |
| Cross-references | Plain text throughout, as every other page of the book writes them: a reference to another section, another chapter or a worked example on another page is the book's words with no link, and the app links "Figure 12.3" and an "Example 12.4" that sits on the same page by itself. 12.2's reference to Example 12.2 and 12.5's to Example 12.8 were built as links and are plain text after the chapter pass (corrected; the prep pass had asked for links) |
| Answers to book problems | book answer key only; never generated; the 33 unkeyed problems are left out and named in the notes, among them 12.4's two Construct Your Own Problem items |
| Suggested approaches for open questions | generated, marked AI: all 33 conceptual questions of the chapter and the 5 unkeyed AP items |
| Generated questions | none; a node with no book exercise of its own is noted in the plan, no question generated |
| Concept nodes | testable units only; kinds idea/result/skill; canonical ids; 44 nodes written into `book.json` before the sections were built (6 for 12.1, 8 for 12.2, 4 for 12.3, 9 for 12.4, 4 for 12.5, 4 for 12.6, 9 for 12.7) with edges into Chapters 1, 2, 4, 5, 6, 7, 9 and 11 and within the chapter |
| Formulas | `ch12/chapter.json`: the stated and named results important and the worked substitution steps not; no anchor on any row, since the validator refuses an anchor into an unbuilt section, and the chapter pass writes them from the section plans |
| Book manifest | `ch12` after `ch11` in `book.json` chapters, added by `ost merge college-physics-2e 12` |

## Symbols

Never change an existing symbol row (rule of the job). Three rows the chapter
would otherwise have wanted are already taken and are **not** reused for this
chapter's meanings:

- `P` is **power** with the macro `\kP` (Chapter 7). Pressure is Chapter 11's
  row and is written with Chapter 11's macro.
- `ρ` is an **untyped** row with no macro (Chapter 5's drag). Density is
  Chapter 11's row.
- `η` is an **untyped** row with no macro (Chapter 5's Stokes' law), and `D`
  is a **position** with the macro `\kD` (Chapter 3's vectors). This chapter
  writes viscosity as a second row with the same LaTeX and a type of its own,
  and the diffusion constant as a second untyped row, the way the book
  already carries `T`/`T_force` and `r`/`r_curv`.

Rows this chapter stages, with the sections that write them:

| sym | LaTeX | type | macro | where |
|---|---|---|---|---|
| `Q` | `Q` | flow-rate | `\kQ` | 12.1, 12.3, 12.4, 12.5 |
| `Q_1` | `Q_1` | flow-rate | `\kQone` | 12.1, 12.4 |
| `Q_2` | `Q_2` | flow-rate | `\kQtwo` | 12.1, 12.4 |
| `η_visc` | `\eta` | viscosity | `\keta` | 12.4, 12.5, 12.6 |
| `v_bar1` | `\bar{v}_1` | velocity | `\kvbone` | 12.1 |
| `v_bar2` | `\bar{v}_2` | velocity | `\kvbtwo` | 12.1 |
| `h_1` | `h_1` | position | `\khone` | 12.2, 12.3 |
| `h_2` | `h_2` | position | `\khtwo` | 12.2, 12.3 |
| `x_rms` | `x_{\text{rms}}` | position | `\kxrms` | 12.7 |
| `n_1` | `n_1` | — | — | 12.1 |
| `n_2` | `n_2` | — | — | 12.1 |
| `l` | `l` | — | — | 12.4 |
| `R_flow` | `R` | — | — | 12.4 |
| `R_sphere` | `R` | — | — | 12.6 |
| `N_R` | `N_{\text{R}}` | — | — | 12.5 |
| `N_Rprime` | `{N'}_{\text{R}}` | — | — | 12.6 |
| `D_diff` | `D` | — | — | 12.7 |
| `L_len` | `L` | — | — | 12.4, 12.6 (added in the chapter pass) |

Eighteen rows in all, and two types, `flow-rate` and `viscosity`. Three rows
this pass had drafted, `V`, `A_1` and `A_2`, were dropped because Chapter 11
staged the same ids for the same quantities and landed first; they are used as
Chapter 11 wrote them. A fourth, `L`, was dropped for the same reason in error:
the only `L` row in the book is Chapter 10's angular momentum, typed and with
the macro `\kL`, and Chapter 11 staged no length under that id. The chapter
pass added `L_len` (LaTeX `L`, untyped, no macro) for the plate separation of
12.4 and the characteristic length of 12.6, and both variables rows point at
it; neither page writes `\kL`.

Rows used as they stand: `t`, `v`, `v̄`, `v_1`, `v_2`, `v_t`, `A`, `r`, `h`,
`g`, `F`, `F_s`, `F_V`, `F_B`, `w`, `m`, `KE`, `PE_g`, `W_net`, and Chapter
11's `P_press` (`\kPr`), `P_1` (`\kProne`), `P_2` (`\kPrtwo`), `ρ_dens`
(`\krho`), `V`, `A_1` and `A_2`. The book's `P` stays power and is not
written anywhere in this chapter, since 12.3 spells the word out.

## What the build changed (chapter pass, 2026-09-14)

A few lines of the table above needed a word after the sections were built,
and they are corrected in it and marked. Everything else stood.

- **Figure 12.12.** Not dropped: 12.3 built the fire hose run up its ladder
  as `sim-fire-hose` with the book's drawing as the original, since the
  passage says "See Figure 12.12" and the number had to land somewhere.
- **Cross-references.** Plain text, decided once for the chapter. Two pages
  had linked a worked example on another page by hand, and no other page of
  the book does; the app already links a figure number and a same-page
  example, and a hand-written link would sit beside those as a second
  mechanism. Both links are gone.
- **The symbol `L`.** A new untyped row `L_len` for the two lengths the
  chapter writes as $L$, as the Symbols section now records; the variables
  rows `12.4/L` and `12.6/L` are `12.4/L_len` and `12.6/L_len`.
- **The moved problems.** One of the three problems that go from 12.4 to
  12.6 is set there; the two unkeyed ones are set nowhere, and both sections'
  notes say which is which.
- **Errata kept as printed.** Four, all recorded in `exploration.md` under
  Errata: 12.1's $\bar{v}_1$ on both sides of the branching equation, 12.2's
  AP item with no lake, 12.3's AP key of 12 m/s, and 12.6's stray `1.00`,
  which the prep pass had proposed dropping and the section kept.
- **Anchors.** Every variable and equation row of the chapter carries one,
  written from the sections' plans; the tables held none before the pass, as
  the Formulas line says.
- **Concept evidence.** `lift-from-bernoulli` had cited the aircraft-wing
  problem, which is 12.3's; its evidence now names 12.2's own figure,
  questions and sail problem.
- **The colour scheme, for Fable and Chen.** The section builders report
  that with twenty-two types declared the scheme lays position, pressure,
  density and energy in four magentas that are hard to tell apart, which
  bites on the Bernoulli figures of 12.2 and 12.3 where a pressure bar
  stands beside two energy bars and a height bracket; and that surface
  tension in Chapter 11 comes out pale. No hue was invented here (root rule
  7 and 22): the figures part their segments with an ink rule and label
  every value beside the bar, and the question of the scheme is left open.
- **Root rule 20.** The `weights_by` field the rule names is not in the
  schema (`exercise_concepts` carries `exercise`, `concept` and `weight`
  only), so no row of this chapter writes it and the plans' weights are
  recorded in `exercise_notes` as AI-generated instead. The rule is left as
  it stands for Fable to settle.
