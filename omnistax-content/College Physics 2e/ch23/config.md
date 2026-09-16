# Config: College Physics 2e, Chapter 23

Proposed by the prep agent after exploration (2026-09-15). Status: applied as
proposed, on Chen's standing instruction to finish the book in waves without
check-ins; the per-section stops of rule 2 and the plan reviews of rule 5 are
replaced by a plan file per section, written before the section is built and
left for review after, as Chapters 1 to 22 did it. Each line is a setting and
its value. Lines that repeat the Chapter 1 to 22 configs are unchanged unless
marked.

| Setting | Value |
|---|---|
| Chapter | 23 Electromagnetic Induction, AC Circuits, and Electrical Technologies, modules m42389 (introduction), m42390, m42392, m42400, m42404, m42408, m42411, m42414, m42416, m42420, m42425, m42427, m42431 |
| Front matter | the chapter introduction (m42389) is a page of its own in `ch23/intro/`, listed before 23.1 (rule 21), built in the prep pass |
| Unit of work | one section = one page; sections never folded (rule 11); 23.6, which is eleven kilobytes of prose with one figure and no equation display, and 23.4, which has no equation at all, stay pages of their own, and 23.12, which is the longest section of the book, stays one page |
| Order | 23.1 to 23.12 in book order, built in parallel by one agent per section |
| Loop | plan file → build → validator, all twelve sections in one wave; review after |
| Prose | verbatim; objectives, summary, glossary pulled into the tables and views; the book's five boxed notes kept verbatim where the book stands them (the Problem-Solving Strategy for Lenz's Law and Making Connections: Conservation of Energy in 23.2, Making Connections: Unification of Forces in 23.3, and AC Voltage in an Inductor, in a Capacitor and in a Resistor in 23.11); the six numbered steps of 23.2's Lenz's law strategy kept as the book's numbered list; 23.2's tenth problem and 23.12's Critical Thinking problem are left untyped in the CNXML and are classed by the headers they sit under, a problem in each case, and both sections' `notes` say so |
| Tables | none; no module of this chapter prints a table |
| Sub-concept headers | 23.2 (Faraday's and Lenz's Law, Applications of Electromagnetic Induction), 23.4 (Eddy Currents and Magnetic Damping, Applications of Magnetic Damping), 23.9 (Inductors, Energy Stored in an Inductor), 23.11 (Inductors and Inductive Reactance, Capacitors and Capacitive Reactance, Resistors in an AC Circuit) and 23.12 (Impedance, Resonance in RLC Series AC Circuits, Power in RLC Series AC Circuits) print headers of their own and those are kept as the book writes them; 23.1, 23.3, 23.5, 23.6, 23.7, 23.8 and 23.10 print none, so their headers are the agent's |
| Figures | a sim per idea or result the section introduces; every diagram replaced by a sim with the book's image kept as its original; a photograph kept where the text points at it or it shows the thing the passage is about, dropped where it is decoration; each listed in the plan (rule 14). The chapter's numbered figures run 23.1 to 23.50, the book's numbers, although the bundle names most of the files `Figure_24_…` from the AP edition, where this was Chapter 24. The nine images inside end-of-module exercises take no number |
| Photographs kept | seven: the wind turbines that open the chapter (Figure 23.1, kept by rule 21), the butterfly the introduction points at for its symmetry (23.2), the cochlear implant the passage is about (23.9), the metal detector (23.17) and the roller coaster's braking magnets (23.18), both named by the passage as applications of eddy currents, the steam turbine that turns a real generator's coil (23.23), the plug-in transformers the section's first sentence points at (23.25) and the airport security gate whose inductance the passage describes (23.41). That is eight rows counting the introduction's two; the tape recording and playback heads of 23.2 (Figure 23.8) are dropped as decoration for a technology the reader has not used, and named in 23.2's `notes` |
| Folds | judged per section. The cases are 23.1's Figures 23.4 and 23.6, one loop in a field whose tilt and whose magnet the reader moves, the five stills of 23.4 being five states of it; 23.5's Figures 23.19, 23.20, 23.21 and 23.22, one turning generator whose split-ring is a choice and whose graph is drawn beneath it, which is the chapter's strongest fold; 23.4's Figures 23.13 and 23.14, one plate crossing the pole faces, solid or slotted; 23.10's Figure 23.42, whose three panels are one number with one original and are not a fold; and 23.11's Figures 23.43, 23.44 and 23.45, which may fold into one phase engine with a choice of element, or stand as three, the plan arguing which. Sub-figures under one number, (a) and (b), are never folds |
| Sim sliders | whatever is interesting and variable in the idea: the field strength, the area of a loop and the angle it makes with the field, the speed of a magnet moved into a coil, the number of turns, the speed of a rod on its rails and the length between them, the conductivity of a plate and the width of its slots, the angular velocity of a generator's coil, the driving voltage and the back emf of a motor, the turns ratio of a transformer, the leakage current a GFI must catch, the length and the turns of a solenoid, the inductance and the resistance of an RL circuit, and above all the frequency, which drives every figure of 23.11 and 23.12. A choice, never a slider, for the pole that faces the coil, for in or out, for solid or slotted or insulating, for rings or split ring, for step-up or step-down, for the earth wire intact or broken, and for which element sits on the AC source (rule 26.1) |
| Motion | decided per figure (rule 14). This chapter has more moving figures than any before it, because induction is a rate and most of its ideas have a clock in them. Expected to move: 23.1's magnet moved in and out of a coil, whose emf follows the speed of the hand; 23.3's rod sliding along its rails, sweeping area; 23.4's pendulum damping to rest, three bobs released together; 23.5's generator, the chapter's one moving 3D scene, whose sinusoid is drawn as the loop turns; 23.10's current growing and decaying through its time constants; 23.11's three phase pairs, where the lead and the lag are the whole content; 23.12's stacked voltages and its LC circuit sloshing beside a mass on a spring. Expected to be still: the flux geometry of 23.1, which answers its tilt slider; the transformer's ratios; the safety schematics of 23.8, where a fault is a state and not a process; the solenoid of 23.9; the impedance triangle and the resonance curve of 23.12, which answer their frequency slider and register no cycle. A plan line must say which and why, and must never add a dummy loop to earn a transport |
| 3D | two full 3D scenes (rule 28.3): 23.1's flux through a tilted area, where the definition is an angle between a field and a surface's normal and no flat drawing can hold it; and 23.5's generator, the chapter's one moving 3D scene, whose four book figures are four states of it. Each carries the buttons rule 26.2 asks for and each plan line states the bound on the orbit and the reason. Locked views (rule 28.2) for the arrangements the book prints in perspective that do not turn: Faraday's iron ring (23.3), the transformer core (23.27), the two neighbouring coils and the counter-wound element of 23.9 (23.37, 23.38) and the pendulum between its pole faces (23.12). Everything else is flat, every circuit and every graph included (new) |
| Figures that serve exercises | the second of the book's two ways, as Chapters 4, 9, 12, 15, 19 and 22 used it: an image an exercise refers to travels on the `figure` field of that exercise's card. This chapter has nine of them; those belonging to problems that are kept are copied, and 23.11's two capacitor filter circuits, which sit between two conceptual questions rather than inside either, travel on both questions' cards |
| Colour coding | two new types, `magnetic-flux` (Wb, which the book writes $\text{T}\cdot\text{m}^2$) and `inductance` (H), because the chapter's figures draw both and its readouts state both; reactance and impedance take Chapter 20's `resistance` type rather than types of their own, since the book calls them an effective resistance and the AC analogue to resistance, they are measured in ohms, they stand in Ohm's law where $R$ stands, and $Z = \sqrt{R^2 + (X_L - X_C)^2}$ must read as one sentence about ohms (`exploration.md` § The type cases this chapter had to settle argues all four cases); `magnetic-field` and $\mu_0$ are Chapter 22's, `current` and `resistance` Chapter 20's, `emf` Chapter 21's, `voltage` and `capacitance` Chapter 19's, `energy` Chapter 7's, `power` Chapter 7's, `frequency` and the resonant frequency $f_0$ Chapter 16's, `angular-rate` Chapter 6's and `time` Chapter 2's, all used by name and none restaged; the number of turns $N$, the area $A$, the length $\ell$, the width $w$, the permeability $\mu_0$, the phase angle $\phi$ and the power factor $\cos\phi$ stay untyped and in ink. Symbol rows added are listed under "Symbols" below |
| Inline exercises | none: no module of this chapter prints a Check Your Understanding box |
| Exercises tab | end-of-module problems, conceptual questions, AP test prep |
| Exercise placement | an exercise goes with the section that introduces what it tests, and nothing moves between sections in this chapter, which is unusual for a chapter this long: the book's problem sets follow its sections closely here. `exploration.md` § Exercises that belong to another section lists the four cases that were looked at and left where the book prints them, among them 23.2's two peak-emf problems, which 23.5's fourth problem points back at and which carry their own numbers |
| AP test prep | included; the chapter's eight AP items sit two to a section in 23.1, 23.5, 23.7 and 23.8, the first of each pair keyed and the second not. An unkeyed AP item is kept as an open item with its options as the book prints them and an AI-marked suggested approach, never as a graded choice; the CNXML is read for each item's key rather than a note trusted |
| PhET interactive links | dropped (Faraday's Electromagnetic Lab in 23.2, Generator in 23.7, Circuit Construction Kit (AC+DC) in 23.12) and named in `notes`, as is the introduction's link to the publisher's video trailer |
| Cross-references | plain text throughout, as every other page of the book writes them: a reference to another section or another chapter (Motional Emf, Faraday's Law of Induction: Lenz's Law, Back Emf, Electrical Safety: Systems and Devices, Reactance, Inductive and Capacitive) is the book's words with no link, and the app links "Figure 23.19" and an "Example 23.3" that sits on the same page by itself |
| Answers to book problems | book answer key only; never generated; the 57 unkeyed problems are left out and named in the notes, among them 23.7's and 23.11's Construct Your Own Problem items and the drawing and proving problems of 23.3 and 23.4 |
| Suggested approaches for open questions | generated, marked AI: all 30 conceptual questions of the chapter and the four unkeyed AP items |
| Generated questions | none; a node with no book exercise of its own is noted in the plan, no question generated |
| Concept nodes | testable units only; kinds idea/result/skill; canonical ids; 62 nodes written into `book.json` before the sections were built (4 for 23.1, 6 for 23.2, 4 for 23.3, 4 for 23.4, 5 for 23.5, 3 for 23.6, 5 for 23.7, 4 for 23.8, 8 for 23.9, 5 for 23.10, 6 for 23.11, 8 for 23.12) with edges into Chapters 2, 6, 7, 16, 19, 20, 21 and 22 and within the chapter |
| Formulas | `ch23/chapter.json`: 37 equations, the stated and named results important (the magnetic flux and its perpendicular form, Faraday's law, motional emf, the emf induced in a generator coil and its peak, the transformer's voltage, power and current relations, mutual and self-inductance, the henry, inductance from flux and current, the solenoid's inductance, the energy stored in an inductor, the RL time constant and the two exponentials, the two reactances and their Ohm's laws, the AC Ohm's law, impedance, the sum of the peak voltages, the resonant frequency, the power factor and the average power) and the worked substitution steps not; no anchor on any row, since the validator refuses an anchor into an unbuilt section, and the chapter pass writes them from the section plans |
| Book manifest | `ch23` after `ch22` in `book.json` chapters, added by `ost merge college-physics-2e 23` |

## Symbols

Never change an existing symbol row (rule of the job). Rows the chapter would
otherwise have wanted are already taken and are **not** reused for this
chapter's meanings:

- `L` is Chapter 10's **angular momentum** with `\kL`, `L_0` is Chapter 5's
  original length, `L_len` and `L_wire` are lengths and `L_latent` a latent
  heat. The self-inductance is `L_ind` (LaTeX `L`, type `inductance`, macro
  `\kLind`).
- `M` is Chapter 6's untyped **mass of a large body**. The mutual inductance is
  `M_ind` (LaTeX `M`, type `inductance`, macro `\kMind`).
- `X` is Chapter 3's **position** with `\kX`. The two reactances are `X_L` and
  `X_C` (LaTeX `X_L` and `X_C`, type `resistance`, macros `\kXL` and `\kXC`),
  keys of their own.
- `Z`, `Z_1` and `Z_2` are Chapter 17's **acoustic impedance**, untyped. The
  electrical impedance is `Z_imp` (LaTeX `Z`, type `resistance`, `\kZimp`).
- `τ` is Chapter 9's **torque** with `\ktau` and `τ_RC` is Chapter 21's RC time
  constant. The RL time constant is `τ_RL` (LaTeX `\tau`, type `time`, macro
  `\ktauRL`), keyed as Chapter 21 keyed its own.
- `E` is Chapter 7's **total energy** with `\kE` and `E_cap` Chapter 19's energy
  in a capacitor. The energy stored in an inductor is `E_ind`
  (`E_{\text{ind}}`, energy, `\kEind`), keyed as `E_cap` was.
- `V_p` is Chapter 21's **voltage across a parallel group** and `V_c` its
  capacitor voltage in an RC circuit. The transformer's primary and secondary
  voltages are `V_prim` and `V_sec` (`V_{\text{p}}`, `V_{\text{s}}`, voltage,
  `\kVprim` and `\kVsec`), and its turns, currents and powers are `N_prim`,
  `N_sec`, `I_prim`, `I_sec`, `P_prim` and `P_sec`.
- `N` is Chapter 4's **normal force** with `\kN`. The number of turns is
  Chapter 13's untyped `N_count` (LaTeX `N`) and is used as it stands.
- `f_0` is Chapter 16's **resonant frequency**, a frequency with `\kfo`, and is
  the resonant frequency of an RLC circuit as it stands, which is the point:
  23.12 says outright that resonance here is Chapter 16's resonance.
- `emf` is Chapter 21's `\mathcal{E}` with `\kemf`, and `emf_one` and `emf_two`
  are its two sources; the chapter uses all three by name, `emf_one` and
  `emf_two` for the emfs induced in coils 1 and 2 in 23.9. The peak emf of a
  generator is `emf_0` (`\mathcal{E}_0`, voltage, `\kemfo`), which the book
  writes $\text{emf}_0$ in its running text and which the pages set in
  Chapter 21's glyph, as the book's own Figure 23.21 says the script E stands
  for emf.
- `ΔA`, `Δt`, `A`, `l`, `θ`, `ω`, `v`, `t`, `T`, `f`, `μ_0`, `n` and `m` are
  used as they stand.

Rows this chapter stages, with the sections that write them:

| sym | LaTeX | type | macro | where |
|---|---|---|---|---|
| `Φ` | `\Phi` | magnetic-flux | `\kPhi` | 23.1, 23.2, 23.3, 23.5, 23.7, 23.9 |
| `ΔΦ` | `\Delta\Phi` | magnetic-flux | `\kdPhi` | 23.2, 23.3, 23.5, 23.7, 23.9 |
| `ΔI_curr` | `\Delta I` | current | `\kdIcur` | 23.9, 23.11 |
| `L_ind` | `L` | inductance | `\kLind` | 23.9, 23.10, 23.11, 23.12 |
| `M_ind` | `M` | inductance | `\kMind` | 23.9 |
| `E_ind` | `E_{\text{ind}}` | energy | `\kEind` | 23.9 |
| `τ_RL` | `\tau` | time | `\ktauRL` | 23.10 |
| `X_L` | `X_L` | resistance | `\kXL` | 23.11, 23.12 |
| `X_C` | `X_C` | resistance | `\kXC` | 23.11, 23.12 |
| `Z_imp` | `Z` | resistance | `\kZimp` | 23.12 |
| `emf_0` | `\mathcal{E}_0` | voltage | `\kemfo` | 23.5 |
| `V_prim` | `V_{\text{p}}` | voltage | `\kVprim` | 23.7 |
| `V_sec` | `V_{\text{s}}` | voltage | `\kVsec` | 23.7 |
| `N_prim` | `N_{\text{p}}` | — | — | 23.7 |
| `N_sec` | `N_{\text{s}}` | — | — | 23.7 |
| `I_prim` | `I_{\text{p}}` | current | `\kIprim` | 23.7 |
| `I_sec` | `I_{\text{s}}` | current | `\kIsec` | 23.7 |
| `P_prim` | `P_{\text{p}}` | power | `\kPprim` | 23.7 |
| `P_sec` | `P_{\text{s}}` | power | `\kPsec` | 23.7 |
| `V_R` | `V_R` | voltage | `\kVR` | 23.11, 23.12 |
| `V_L` | `V_L` | voltage | `\kVL` | 23.11, 23.12 |
| `V_C` | `V_C` | voltage | `\kVC` | 23.11, 23.12 |
| `V_0R` | `V_{0R}` | voltage | `\kVoR` | 23.12 |
| `V_0L` | `V_{0L}` | voltage | `\kVoL` | 23.12 |
| `V_0C` | `V_{0C}` | voltage | `\kVoC` | 23.12 |
| `ϕ` | `\phi` | — | — | 23.12 |

Twenty-six rows and two types, `magnetic-flux` and `inductance`. The phase
angle and the number of turns carry no macro, as every angle and every count in
this book does.

Rows used as they stand: `B_mag` (`\kBmag`), `μ_0`, `I_curr` (`\kIcur`),
`I_0curr` (`\kIocur`), `I_rms` (`\kIrms`), `V_volt` (`\kV`), `V_0volt` (`\kVo`),
`V_rms` (`\kVrms`), `R_res` (`\kRes`), `C_cap` (`\kCap`), `P_ave` (`\kPave`),
`emf` (`\kemf`), `emf_one` (`\kemfone`), `emf_two` (`\kemftwo`), `f` (`\kf`),
`f_0` (`\kfo`), `ω` (`\kw`), `v` (`\kv`), `t` (`\kt`), `Δt` (`\kdt`), `T`
(`\kT`), `N_count`, `n`, `A`, `ΔA`, `l`, `θ` and `m`.
