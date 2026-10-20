# Plan: 10.4 Ion trap quantum computation

Source: `source.md` (PDF pages 228–233, Eqs. 10.31–10.44, Figures 10.7–10.9, no footnotes). Planned and built in one go (config: Chen approved building without stopping); this plan is left for review after.

## Blocks

The book's opening (before 10.4.1) is the first block with no heading; 10.4.1 and 10.4.2 are `<h2>`s with their numbers, and the run-ins of 10.4.2 are `<h3>`s (config, Headers).

| id | `<h2>` | holds |
|---|---|---|
| `opening` | none | the two opening paragraphs |
| `two-ions` | 10.4.1 Two ions in a linear trap | Eqs. 10.31–10.39, Figure 10.7 between (10.33) and (10.34) as printed |
| `gates` | 10.4.2 Quantum gates | Eqs. 10.40–10.44; h3s Requirements for the phase gate, Phase gate procedure; Figures 10.8 and 10.9 at the end, as printed |

Every numbered display is `<div class="equation" id="eq-10-K">` with `\tag{10.K}`; (10.33)–(10.36) stay four displays split by Figure 10.7, (10.39) one aligned display (config). The prose cites "Figure 10.8" and "Figure 10.9", each linked to its figure; Figure 10.7 is cited by no sentence.

## Concepts (9, prep-merged)

| concept | introducing span |
|---|---|
| ion-string | `ion-string` ("they form a string of ions with each ion spaced by 5-10μm") |
| two-ion-motion | `eq-10-31` |
| ion-normal-modes | `normal-modes` ("the two ions vibrate in a center-of-mass mode at frequency ν and in a stretch mode at frequency √3ν") |
| two-ion-laser-hamiltonian | `eq-10-39` |
| qubit | `qubit` (“qubit”) |
| universal-gate-set | `universal` ("If one can address each qubit … couples any two-qubit pair") |
| pi-phase-gate | `phase-gate` ("the π phase gate") |
| phase-gate-requirements | `requirements` (the paragraph under "Requirements for the phase gate" holding (10.44) and the auxiliary level) |
| ion-trap-phase-gate | `procedure` (the first paragraph under "Phase gate procedure") |

Form anchors: `eq-10-N` → `10.4-eq-10-N` for 31–44.

`uses` rows: motional-state-engineering (opening), trapped-ion-model (eq-10-31), trap-frequency (normal-modes), lamb-dicke-hamiltonian and lamb-dicke-parameter (eq-10-39), two-level-atom and superposition (qubit), carrier-transition (gate-architecture, "single-qubit rotations … resonant with the bare atomic frequency"), sideband-cooling (requirements), light-polarization (requirements), internal-motional-swap (procedure).

Concept spans, judged per mention: "string of ions" ion-string; "Coulomb interaction couples their motional degrees of freedom" and "Vibrational modes … phonons" ion-normal-modes; "center-of-mass mode", "stretch mode", "normal modes", "phonon modes" ion-normal-modes; "the two phonon modes may be separately addressed by choosing the appropriate laser detuning" two-ion-laser-hamiltonian; "qubit(s)" qubit (each mention names it); "π phase gate", "phase gate" pi-phase-gate in 10.4.2's opening and ion-trap-phase-gate where it names the trapped-ion procedure ("the phase gate for trapped ions", "perform the phase gate on the m-th and n-th ions", "the phase gate implementation"); "two-qubit gate" pi-phase-gate where it is the π phase gate, plain where general ("a non-trivial gate"); "single-qubit rotation(s)" carrier-transition where the text says how ("applying laser light resonant with the bare atomic frequency"), plain otherwise; "cooling the vibrational modes down to the ground state" sideband-cooling; "orthogonal laser polarization" light-polarization; "transferring the quantum state of the m-th ion onto the vibrational mode" internal-motional-swap; "two-level quantum systems" two-level-atom; "state α|0⟩ + β|1⟩" superposition. Plain: "trap", "ions", "laser", "quantum computer", "calculations", "memory", "Hamiltonian" in prose ("the full Hamiltonian for the system" is the introducing display's lead-in and wears two-ion-laser-hamiltonian).

## Symbols and variables

`ost meanings` run for each. Rows (10.4), each anchored at its first use:

- linked: nu → trap-frequency (10.2's meaning, the same quantity), nu_s → ion-normal-modes ("The frequency √3ν of the stretch mode of two ions in the trap"), H → hamiltonian ("The Hamiltonian of two trapped ions: Ĥ_motion of their motion, Ĥ_int of their coupling to the lasers, Ĥ of the whole", `redefines`), psi → state-vector (the book's meaning).
- typed, no concept: m (mass, 10.2's "The mass of the ion"), k_mag (wavevector, 10.2's meaning), Delta (frequency, 10.2's meaning; written Δ_i, one per ion), Omega (coupling, 10.2's meaning; written Ω_i, Ω₁, Ω₂ through `\kOmega` with a subscript, not the Chapter 5 keys `Omega_1`, `Omega_2`), r_dist (length, "The position r_i of ion i along the trap axis", `redefines`), p_cm (momentum, "The momentum p_i of ion i; p = (p₂ − p₁)/√2 is the relative momentum of the stretch mode", `redefines`).
- four new book symbols, staged through `ost add … symbols --chapter 10`, each a 10.4 row: `x_disp` (x, \kxdisp, length: "The displacement x_i of ion i from its equilibrium position; x = (x₂ − x₁)/√2 is the relative coordinate of the stretch mode"), `X_cm` (X, \kXcm, length: "The center-of-mass coordinate X = (x₁ + x₂)/√2 of two ions"), `P_cm` (P, \kPcm, momentum: "The center-of-mass momentum P = (p₁ + p₂)/√2 of two ions"), `a_sep` (a, \kasep, length: "The equilibrium separation a of two ions in the trap").

Untyped and in ink: e, ε₀ (constants), â_cm, â_s (operators; the key `a_s` is Chapter 11's scattering length and is not used), η_cm, η_s (ratios, written plain), ν_x, ν_y, ν_z of the anisotropic trap written `\knu_x` (the trap frequency along each axis), c_x and N (prep: untyped), the qubit labels |0⟩, |1⟩ and x_{N−1}…x_0.

## Referents

| id | label | figures |
|---|---|---|
| mode-cm | the center-of-mass mode | sim-ion-string |
| mode-s | the stretch mode | sim-ion-string |
| lvl-g | the ground state \|g⟩ | fig-gate-levels, sim-phase-gate |
| lvl-e | the excited state \|e⟩ | fig-gate-levels, sim-phase-gate |
| lvl-aux | the auxiliary level | fig-gate-levels, sim-phase-gate |
| ion-m | the m-th ion | sim-phase-gate |
| ion-n | the n-th ion | sim-phase-gate |

Ids and labels of |g⟩ and |e⟩ as in 10.2. Marked in prose: "center-of-mass mode" and "stretch mode" (inside the `normal-modes` concept span); |g⟩ = |0⟩, |e⟩ = |1⟩; "the excited and ground states considered previously"; "an auxiliary ionic level" and "the excited state" it is degenerate with; "the m-th" and "n-th ions", "the n-th atom", "the m-th ion" (twice). Inline maths only, never inside a display.

## Figures

- sim-ion-string · Figure 10.7 (withheld: a raster of unstated origin) · ion-string, ion-normal-modes, two-ion-motion · animation and variation: a string of ⁴⁰Ca⁺ ions at their computed equilibrium positions in the harmonic trap swings in the center-of-mass mode, the stretch mode or both, while the graph beneath follows the two normal coordinates X(t) and x(t); with both modes on, the ions' own motion looks irregular yet X and x each swing at one frequency, ν and √3ν, which is what (10.37) says and no still can show; raise ν and the string tightens (a ∝ ν^(−2/3)) while the ratio √3 stays; add ions and the center-of-mass and stretch frequencies stay ν and √3ν, the second stretching the string about its centre · arrows: kinematic (the ions' swings, the book's double arrows, now motion) · moving: the ions swing and the graph traces in real time, slowed so 4 μs of motion takes about 6 s; transport · choice ions (2 · 3 · 4 · 5, default 2, the text's case; the book's sketch draws 4), mode as a dropdown, since its row of three wraps (center of mass · stretch · both, default center of mass), slider ν/2π (frequency, 0.5 to 2 MHz, default 1 MHz, which puts two calcium ions 5.6 μm apart, inside the text's 5-10 μm; no special, the text names none) · headline names the mode and its frequency in words · graph below (a horizontal scene): X(t) in mode-cm's colour and x(t) in mode-s's, displacement in the drawn scale (no ticks) against t from 0 to 4 μs · 2D: the string is a line and the motion is along it. Scene: the trap's parabola in muted ink, its walls steepening as ν² grows; the ions filled in `F.el('Ca')` swinging about hollow markers at their equilibrium positions, the swing exaggerated to a third of the closest spacing at most (true ground-state size ∼10 nm, said in the caption); a bracket under the two middle ions with their spacing (a for two ions). Labels: the bracket, "X" and "x" at the curves' ends; the moving ions are named by hover. Readout: ν = 2π × 1.00 MHz and √3ν = 2π × 1.73 MHz with live numbers; note: a = (e²/2πε₀mν²)^{1/3} with its value for two ions, which follows from (10.31) at equilibrium, or the middle spacing and the string's length for more. For N ions the equilibrium is solved numerically (the dimensionless balance u_m = Σ sign/(u_m − u_n)², James 1998); the center-of-mass mode moves every ion equally and the √3ν mode moves each in proportion to u_m, both exact for any N, so no eigensolver is needed. Conventions: `Ca`.
- fig-gate-levels · Figure 10.8 · phase-gate-requirements, qubit · standardisation, plus the labels made to agree with the text (correction below) · arrows: symbolic (the laser couplings are notation; the decay squiggle is notation, book RULES) · still: nothing in it varies · no controls · headline none · graph none · 2D (book RULES: level diagrams are 2D). Faithful copy, kind `figure`, with the original image and caption. |g⟩ and |e⟩ (the book's |r₀⟩) in their referent colours inside the ellipse "qubit", the auxiliary level |r₁⟩ (the book's name, kept since the text gives none) beside |e⟩ at the same height in lvl-aux's colour, the dashed double arrow "addressing with different light polarizations", the solid qubit arrow, and the short-lived level of the dipole-allowed transition at the right with an arrow up and a squiggle down, "state measurement via quantum jumps". Labels: the four the book prints and the ket names (six fixed); hover names for each level and arrow.
- sim-phase-gate · Figure 10.9 · ion-trap-phase-gate, pi-phase-gate, internal-motional-swap · variation by a choice and intuition: the book follows one input through the three pulses; here a step choice walks all four inputs at once, so the reader sees (10.40)–(10.43) emerge from the procedure: only |e⟩|g⟩ passes through the sign flip of step 2, and it takes it back in step 3 (two π pulses), while |e⟩|e⟩ keeps the −1 of its two π pulses · arrows: symbolic (the pulses are couplings; the laser is notation) · still: a discrete choice, no clock; the choice morphs (fades with a slight shift) between steps · choice step (1 · 2 · 3, default 1) · headline says what the step does in words · graph none · 2D. Left: the six-ion string with ions m and n in their referent colours and the laser on the ion the step addresses; beneath it that ion's levels as the book draws them, |g, 0⟩, |g, 1⟩, |e, 0⟩, |e, 1⟩ (and |r₁, 0⟩, |r₁, 1⟩ for ion n), with the π pulse on the red sideband |e, 0⟩ ↔ |g, 1⟩ (step 1, back in step 3) or the 2π pulse |g, 1⟩ ↔ |r₁, 0⟩ beside the crossed-out |g, 0⟩, which has no partner (step 2). Right: the four inputs as rows, |g⟩|g⟩|0⟩ … |e⟩|e⟩|0⟩ (ion m, ion n, the center-of-mass phonons), and four columns (start, after 1, 2, 3); columns beyond the chosen step are faint, and the rows the chosen pulse moves are marked. Phases: a π pulse takes |e, 0⟩ → −i|g, 1⟩ and |g, 1⟩ → −i|e, 0⟩ and a 2π pulse multiplies by −1 (−iσ_x per π pulse); the final column is the gate whatever the sign of the coupling. Readout: the chosen pulse's relation (|e⟩_m|0⟩ → −i|g⟩_m|1⟩; |g⟩_n|1⟩ → −|g⟩_n|1⟩; −i|g⟩_m|1⟩ → −|e⟩_m|0⟩); note at step 3: together, |1⟩|1⟩ → −|1⟩|1⟩ and the other three unchanged, Eqs. (10.40)–(10.43). The book's population dots and crosses are replaced by the table, which shows every input. Labels as the book's (kets, "π pulse", "2π pulse", "laser", m, n); hover names for the levels and ions.

`draws`: sim-ion-string `frequency`, `length`, `time`; fig-gate-levels `coupling`, `rate`, `state`; sim-phase-gate `coupling`, `phase`. Conventions: sim-ion-string `Ca`. No facts.

### Extra sims (root 15), not built

- The normal modes of N ions beyond the two the text names (√(29/5)ν and up for three ions and more), each mode a choice: the spectrum of modes a laser detuning picks from, which (10.39)'s last sentence points at; the text derives only two.
- The Lamb-Dicke factors of (10.39) per ion and mode, η_cm = η/√2 and η_s ≈ 0.54η (correction note): a bar per ion and mode, signs included. A readout would say it all.

## Exercises

None (prep, config). The section prints no invitation.

## Lead draft (AI-marked)

> How trapped ions become a quantum computer: two ions in one trap share their motion through the Coulomb repulsion, which splits into a center-of-mass mode and a stretch mode; the internal levels serve as qubits, and the shared motion carries the interaction a two-qubit phase gate needs.

## Objectives, summary, notes

`objectives` and `summary_html` empty. `notes` empty: Figure 10.7's image is withheld, which its row carries.

## Book faults kept verbatim

- "focussed", "5-10μm", "the n-th atom" (for the ion, twice).
- "center of mass" without a hyphen as the book prints it.
- Figure 10.8's caption says the dipole-allowed transition cools the ion where the drawing labels it "state measurement via quantum jumps"; both are its uses, kept.

## Corrections

| id | attaches to | the book prints | note |
|---|---|---|---|
| c-eq-10-39 | `eq-10-39` | η_cm, η_s, never defined | With x₁,₂ = (X ∓ x)/√2 from (10.33)–(10.34) and the mode sizes √(ℏ/2mν) and √(ℏ/2m√3ν) of (10.37), kx₁,₂ = η_cm(â_cm + â_cm†) ∓ η_s(â_s + â_s†) with η_cm = η/√2 and η_s = η/(√2·3^{1/4}) ≈ 0.54η, η the single-ion parameter of (10.12); the signs in (10.39) agree. |
| c-fig-10-8 | figure `fig-gate-levels` (original caption) | the qubit's upper level \|r₀⟩, the auxiliary level \|r₁⟩ | The text calls \|r₀⟩ the excited state \|e⟩ = \|1⟩ and \|r₁⟩ "an auxiliary ionic level"; the figure here labels them \|e⟩ and \|r₁⟩. |
| c-fig-10-9 | figure `sim-phase-gate` (original caption) | \|r₀, n⟩, \|r₁, n⟩ | \|r₀, n⟩ is \|e⟩\|n⟩ of the text; the figure here writes it so. |

## Wanted at chapter level

- Figure 10.7's crop `media/ch10/fig-10-7.png` is on disk (written by `convert.py`) though the book's RULES say it is never copied into `media/`; nothing references it. The chapter pass may delete it.
- Four new book symbols (`x_disp`, `X_cm`, `P_cm`, `a_sep`) for the two-ion coordinates.
- The referents lvl-g and lvl-e reuse 10.2's ids and labels.

## Derivations

- 10.4.1 two ions in a linear trap (10.31)–(10.39) · score 4 · split at the book's prose: drv-two-ion-expansion ((10.31) → (10.32), hidden: the positions about equilibrium, the Coulomb term to second order, the force balance removing the linear term; the sentence before it trimmed to end "…to lowest order in x_i."), drv-two-ion-normal-modes ((10.37) from (10.32) with (10.33)–(10.36); "in terms of which" dropped), drv-two-ion-hamiltonian ((10.39), hidden: kx_{1,2} in the two modes' operators through (10.2), with η_cm and η_s defined in a step, then H_motion + H_int with (10.4) and (10.38)). The undefined η_cm, η_s are that node's note; the c-eq-10-39 row is deleted with its marker, and the three coverage rows on span eq-10-39 moved to drv-two-ion-hamiltonian. Forms eq-10-32, eq-10-37, eq-10-39 and the x_disp, a_sep variables rows re-anchored.
