# Plan: 7.4 Analysis of STIRAP: The condition for adiabatic following

Source: `source.md` (PDF pages 124–133, Eqs. 7.39–7.65, Figures 7.5–7.7, footnotes 2–4). Planned and built in one go (Chen approved building without stopping); this plan is left for review after.

## Blocks

The section opens with one paragraph before its first run-in heading. The two run-ins before 7.4.1 are promoted to `<h2>` without numbers (config); 7.4.1 Remarks is an `<h2>` whose five run-ins are `<h3>`. Every numbered display is `<div class="equation" id="eq-7-K">` with `\tag{7.K}`; (7.54)–(7.55) sit inside footnote 3's html, as 4.1 does with its footnote equations.

| id | `<h2>` | holds |
|---|---|---|
| `opening` | none | the opening paragraph |
| `analysis` | Analysis of the adiabaticity condition | Eqs. 7.39–7.53, `sim-four-level-pulses` (Figure 7.5 + 7.6), footnotes 2 and 3 |
| `jumps` | Error due to quantum jumps | Eqs. 7.56–7.58 |
| `remarks` | 7.4.1 Remarks | h3s: The partially-diagonalized basis (Eqs. 7.59–7.65, footnote 4, `sim-dark-loss`); Adiabatic passage and EIT; Non-adiabatic dark state preparation; Populations and coherences (`sim-two-bases`, Figure 7.7); Applications of the dark state |

Figures 7.5 and 7.6 belong to 7.3.2's four-level discussion but sit on 7.4's pages; they stay here, after the paragraph that follows (7.40), where `source.md` puts them (config). Citations linked: "Eq. (7.50)" → `#eq-7-50`. Left unlinked as printed: "as noted in the previous lecture" (the beamsplitter of 7.3.2, config), "the Landau-Zener problem discussed above" (7.2, another page; worded, not numbered).

## Concepts (10, prep-merged)

| concept | introducing span |
|---|---|
| dark-state-adiabaticity-condition | `eq-7-53` |
| adiabatic-expansion | `eq-7-44` |
| quantum-jump-error | `eq-7-56` |
| stirap-fidelity | `eq-7-58` |
| bright-dark-basis | `partial-basis` ("a partially diagonalized basis composed of the the dark state …") |
| nonadiabatic-rabi-frequency | `omega-na` ("The nonadiabatic coupling acts like a weak field …") |
| bright-state-escape-rate | `eq-7-64` |
| adiabatic-following-eit | `eit` (the first paragraph of "Adiabatic passage and EIT") |
| dark-state-optical-pumping | `pumping-dark` ("This puzzle is easily resolved …") |
| coherence-population-basis | `coherence-population` ("coherence in one basis … is just population difference in another basis") |

Book-row changes (through `ost`, staged in `ch07/book-rows.json` and merged): `quantum-jump-error` loses its `symbol` P_jump (session ruling: P_jump is 6.1's `jump-probability`); `bright-dark-basis` loses the term "bright state", which names 5.2's `bright-state` (spans on "the bright state" wear that concept). Prereq edges added now that Chapters 3–5 are merged, checked Hasse-reduced: dark-state-adiabaticity-condition → lambda-non-hermitian-evolution (Eqs. 7.41–7.43 are that treatment; then quantum-jump-error → jump-probability is reached through it and dropped); bright-dark-basis → dark-state (which reaches bright-state); adiabatic-following-eit → electromagnetically-induced-transparency; dark-state-optical-pumping → optical-pumping (pure-and-mixed-states and density-matrix-coherences, also wanted, are already reached through it and through bright-dark-basis).

Form anchors (`ost set … forms`): every form of the section's concepts whose display is in `text.html` → `7.4-eq-7-K`; eq-7-55 (in footnote 3) has none.

`uses` rows: dark-state, dark-state-preparation, adiabatic-theorem (`opening`); stirap (`follow`); monte-carlo-wavefunction, non-hermitian-evolution, lambda-non-hermitian-evolution, probability-amplitude (`stochastic`); dark-state (`zeroth`); adiabaticity-condition (`eq-7-53`); quantum-jump, jump-probability (`jumps-intro`); landau-zener (`landau`); bare-states, dark-state, bright-state, three-level-dressed-states (`partial-basis`); nonadiabatic-coupling (`omega-na`); electromagnetically-induced-transparency, dark-resonance (`eit`); pure-and-mixed-states (`mixture`); zeeman-effect, lambda-detunings (`discovery`); optical-pumping (`pumping-dark`); polarization-selection-rules (`parallel`); lambda-system, dark-state (`perpendicular`); adiabatic-atomic-beamsplitter (`applications`). `reinforces`: dark-state-adiabaticity-condition (`eq-7-65`), bright-dark-basis (`pumping-dark`).

Concept spans judged per mention. Wrapped: "dark state" naming the Λ dark state (dark-state; 5.2 owns it); "bright state" (bright-state); "counter-intuitive pulse sequence" (dark-state-preparation); "adiabatically follows", "adiabatic following" (adiabatic-theorem); "adiabaticity condition", "adiabatic theorem" where 7.1's coherent condition is meant (adiabaticity-condition, adiabatic-theorem) and "the adiabaticity condition becomes" (7.53, dark-state-adiabaticity-condition); "stochastic wavefunction formulation/approach" (monte-carlo-wavefunction); "non-Hermitian Schrodinger equation", "non-Hermitian evolution" (non-hermitian-evolution); "probability amplitudes" (probability-amplitude); "quantum jumps" (quantum-jump); "Landau-Zener problem" (landau-zener); "partially diagonalized basis" (bright-dark-basis); "bare state basis" (bare-states); "nonadiabatic coupling" in 7.4.1 (nonadiabatic-rabi-frequency); "non-adiabatic corrections" stays plain (no concept; the corrections are the expansion's terms); "electromagnetically induced transparency", "EIT" (electromagnetically-induced-transparency); "dark resonance" (dark-resonance); "optical pumping" (optical-pumping); "incoherent mixture", "mixed state", "statistical mixture" (pure-and-mixed-states); "pure state" (pure-and-mixed-states); "Zeeman effect" (zeeman-effect); "two-photon detuning" (lambda-detunings, 7.3's row for δ); "Λ system/configuration" (lambda-system); "atomic beamsplitter" (adiabatic-atomic-beamsplitter); "adiabatically eliminate" in footnote 3 (adiabatic-elimination); "adiabatic expansion" in footnote 3 (adiabatic-expansion). Plain: "dephasing and decay", "fidelity", "double resonance experiment" (no concept), "coherence"/"population" as words (the 7.4.1 remark is about them in general; the introducing span carries the idea), "interaction Hamiltonian" wears hamiltonian.

## Symbols and variables (chapter 7, section 7.4)

`ost meanings` run for each; 7.3's chapter-7 meanings reused where the quantity is the same.

| sym | concept | meaning |
|---|---|---|
| `Omega_1` | rabi-frequency | 7.3's: the pump field, which couples \|1⟩ to the excited state · ref pump |
| `Omega_2` | rabi-frequency | 7.3's: the Stokes field on \|2⟩ → \|3⟩ · ref stokes |
| `Omega` | rabi-frequency | 7.3's: the total Rabi frequency √(\|Ω₁\|² + \|Ω₂\|²) |
| `Omega_3`, `Omega_4` | rabi-frequency | 7.3's four-level fields (Figure 7.5's S and C) · ref four-s, four-c |
| `gamma_13` | (5.1's) | 5.1's: the decay rate of the coherence ρ₁₃ |
| `c_1`, `c_2`, `c_3` | probability-amplitude | 5.1's Λ amplitudes · ref lvl-1, lvl-2, lvl-3 (c_2 `redefines`: 7.2's c₂ is the two-level excited state) |
| `c_inst` | probability-amplitude | `redefines`: the amplitude c_i of the bare state \|i⟩, the base letter with a free index (session ruling) |
| `rho_11`, `rho_22` | (3.1's) | the populations of \|1⟩, \|2⟩ · ref lvl-1, lvl-2 |
| `rho_hat` | (3.1's) | the density operator, for Figure 7.7's readout |
| `P_jump` | jump-probability | 5.1's: the probability that a quantum jump occurs during the evolution |
| `Omega_NA` | nonadiabatic-rabi-frequency | the Rabi frequency Ω_NA = 1/τ of the nonadiabatic coupling of \|D⟩ to \|B⟩ |
| `gamma_B` | bright-state-escape-rate | the escape rate out of the bright state |
| `Delta_omega` (new, `\kDeltaomega`) | none, frequency | the linewidth Δω = Ω²/γ₁₃ of the dark resonance |
| `tau` | (7.1's) | 7.1's timescale meaning (session ruling) |
| `t`, `psi`, `H` | reused | Ĥ_int is `\kH_\mathrm{int}` |

In ink: the vector v and matrix M of footnote 3 (a generic linear system); kets.

## Referents

7.3's ids, so the chapter's colours agree. Λ: `lvl-1` (\|1⟩), `lvl-2` (\|2⟩), `lvl-3` (the excited \|3⟩ = \|E⟩), `pump` (Ω₁), `stokes` (Ω₂), `dark` (\|D⟩), `bright` (\|B⟩); figure `sim-dark-loss` (and `pump` in `sim-four-level-pulses`, where P = Ω₁ couples \|1⟩ to the excited state as the Λ pump does). Four-level: `four-1`, `four-3`, `four-4`, `four-s` (S = Ω₃), `four-c` (C = Ω₄); figure `sim-four-level-pulses`. Figure 7.7: `pumped` (the state m∥ = 0, which is the dark superposition of m⊥ = ±1); figure `sim-two-bases`. Marked in prose where the text names the state, never inside display equations.

## Figures

- sim-four-level-pulses · Figure 7.5 + 7.6 (7.6 recomputed: the book's is experimental data, never copied; its pulse sequences are this figure's, and its atom distributions are the final momenta computed here; no original for 7.6, its caption named in `notes`) · four-level-dark-states, adiabatic-atomic-beamsplitter · variation by slider: the book's four panels are four stops of two timings; the reader slides the control pulse C through S and watches the final split between \|3⟩ and \|4⟩ turn continuously from mostly \|4⟩ (C after S) through half and half (S = C) to mostly \|3⟩ (C first), and the power of C tilt it, which the four stills leave to the reader; the atoms' final momenta, the beamsplitter of Figure 7.6, follow below · arrows: none · still: the time axis is drawn; the sliders recompute · sliders t_S (time, −2 to 1.5 T, default −0.75, detents −0.75, 0, special at t_C "S = C"), t_C (time, −2 to 2.5 T, default 0, detents −0.75, 0, special at t_S "S = C"), peak Ω₄ (coupling, 0 to 2 Ω₀, default 1); P fixed at 0.8 T · headline: the order of the pulses and the final populations · graph alone: two strips on one time axis −4 to 4 T (Ω/Ω₀ of P, S, C; populations of \|1⟩, \|3⟩, \|4⟩) with the final-momentum stems (−ħk, 0, +ħk) beside · 2D. Model: Eqs. of 7.3.2 with all fields resonant, Gaussian pulses Ω₀e^{−(t−t_i)²/T²}, Ω₀T = 20, the excited \|2⟩ decaying out at 5/T (7.4's assumption, so the intuitive order loses atoms instead of leaving them in \|2⟩); defaults reproduce the book's second panel (0.23/0.74), and its third and fourth are the detents; the first panel (C wider and late) is drawn with different widths in the book and is only approached. Labels: P, S, C on their peaks (three, beside the curves), 1, 3, 4 at the curves' right ends, stems named \|1⟩, \|3⟩, \|4⟩; hover names on the stems. Readout: \|c₁\|², \|c₃\|², \|c₄\|² at the end, summing with the loss to 1.
- sim-dark-loss · Sim · dark-state-adiabaticity-condition, stirap-fidelity, quantum-jump-error, bright-dark-basis, nonadiabatic-rabi-frequency, bright-state-escape-rate · variation by slider: Eqs. (7.41)–(7.43) solved exactly with the pulses of (7.39)–(7.40); the reader sees the final ρ₂₂ against τ fall away once γ₁₃/Ω²τ is no longer small and meet the exponential law, and, with the basis choice, sees the same run as a population swap \|1⟩ → \|2⟩ or as \|D⟩ slowly leaking to \|B⟩ and \|E⟩, the 7.4.1 picture; with γ₁₃ ≪ Ω the exact curve leaves the law where Ωτ is not large, the coherent condition taking over, which the text says in one sentence · arrows: none · still: the time axis is drawn · sliders τ (time, 1 to 60 μs, default 20), \|Ω\| (coupling, 0.2 to 2 μs⁻¹, default 1), γ₁₃ (rate, 0 to 5 μs⁻¹, default 1; special 0 "no decay"); choice basis (\|1⟩, \|2⟩, \|3⟩ · \|D⟩, \|B⟩, \|E⟩) · headline: the live γ₁₃/Ω²τ and the final ρ₂₂ · graph beside: populations against t/τ (0 to π/2) left, final ρ₂₂ against τ (0 to 60 μs) right with the law dashed and the run's point · 2D. The model is a constant 3×3 real matrix in the \|D⟩, \|B⟩, \|E⟩ basis, so each run is one matrix exponential. Readout: ρ₂₂ (exact) ≈ e^{−πγ₁₃/\|Ω\|²τ} with the numbers (the corrected exponent, see corrections); note: Ω_NA = 1/τ against γ_B = Ω²/γ₁₃.
- sim-two-bases · Figure 7.7 · coherence-population-basis, dark-state-optical-pumping · intuition by morph: one state, the end of optical pumping, drawn in either basis; the choice morphs the parallel picture (π light, the atoms in m∥ = 0) into the perpendicular one (the four σ± arrows, the Λ, the atoms shared between m⊥ = ±1 with a coherence bracket between them), the population wearing the referent colour of the one state in both · arrows: symbolic (the light's couplings) · still: the config's call; pumping as a process is offered below · choice axis of quantization (parallel · perpendicular) · headline: which basis, what the light couples, where the atoms are · graph none · 2D (book RULES: level diagrams are 2D). Labels: J = 1, J′ = 1, every m (six on the lower row and three above would crowd: the excited m′ labels are hover names). Readout: ρ̂ in the chosen basis, ρ̂ = \|0∥⟩⟨0∥\| against ρ̂ = ½(\|−1⟩⟨−1\| + \|+1⟩⟨+1\|) − ½(\|−1⟩⟨+1\| + \|+1⟩⟨−1\|), populations and coherence written out.

`draws`: sim-four-level-pulses `coupling`, `population`, `amplitude`, `time`, `momentum`; sim-dark-loss `coupling`, `population`, `amplitude`, `rate`, `time`; sim-two-bases `population`, `coherence`, `state`. No facts, no conventions (generic atoms; the neon of 7.6 is not drawn as an atom).

### Extra sims (root 15), not built

- Optical pumping into the dark state, moving: from ρ₁₁ = ρ₂₂ = ½ the two CW fields pump the mixture into \|D⟩ while the population in the \|1⟩, \|2⟩ basis stays half and half and only the coherence grows; the "Non-adiabatic dark state preparation" remark as a clock. Overlaps Figure 7.7's lesson.
- Figure 7.7 as pumping in time: the populations of m∥ falling into m∥ = 0 while in the perpendicular basis the coherence between m⊥ = ±1 grows from zero; built only if Chen wants the figure moving rather than the config's still.

## Exercises

None: no invitation in the reading, and no MIT 8.422 problem maps to Chapter 7 (config).

## Notes and corrections

Footnotes 2, 3, 4 are `footnotes` rows of kind `book` with the book's numbers: 2 after "decay out of \|3⟩."; 3 after "cannot be solved" (its html carries Eqs. 7.54–7.55 as `div.equation`); 4 after "driving the \|D⟩ to \|B⟩ transition."

Corrections (verified):

| id | attaches to | the book prints | meant |
|---|---|---|---|
| `c-c2-2` | prose after (7.52) | c₂⁽²⁾ | c₂⁽¹⁾, the first-order correction the sentence names next |
| `c-eq-7-56` | `eq-7-56` | γ₁₃∫₀^τ\|c₃\|² = γ₁₃/Ω²τ (no dt) | with ċ₃ = −γ₁₃c₃ of (7.43) the norm falls at 2γ₁₃\|c₃\|², so P_jump = 2γ₁₃∫₀^τ\|c₃\|²dt = 2γ₁₃/Ω²τ; (7.57) unchanged |
| `c-final-time` | prose before (7.58) | "(Ωτ = π/2)" | t = (π/2)τ, where Ω₁ = Ω and Ω₂ = 0 |
| `c-eq-7-58` | `eq-7-58` | e^{−πγ₁₃/2\|Ω\|²τ} | e^{−πγ₁₃/\|Ω\|²τ}: the dark amplitude obeys ḋ = −(γ₁₃/Ω²τ²)d to t = πτ/2; the book's exponent is that of the amplitude. Checked by integrating (7.41)–(7.43) (Ω = 1, γ₁₃ = 1, τ = 20: 0.8546 against e^{−π/20} = 0.8546) |
| `c-psi-paren` | prose (the generic state) | \|ψ(t))⟩ | \|ψ(t)⟩ |
| `c-alzetta` | the citation | "Alzelter et al. Novvo Cirr. 36B, 5/76" | G. Alzetta, A. Gozzini, L. Moi and G. Orriols, Il Nuovo Cimento B 36, 5 (1976) |

Judged and not corrected: "the non-adiabatic coupling to \|B⟩ and \|D⟩" (between is meant, but "coupling to" a pair reads as English); (7.62) carries no ℏ, as (7.24) does not (7.3's call); (7.64) is "on the order of" by the book's own words, so the factor 2 of the population's escape rate is not a slip; "approach us thus", "the the", "superpostion" (prose typos kept, config); Figure 7.5's "S = Ω₃ ,C" spacing. sim-dark-loss uses the corrected exponent; its readout states the relation the equations give.

## Objectives, summary, notes

Objectives and summary empty (config). `notes`: Figure 7.6 (the neon beamsplitter data of Theuer et al.) is not shown; its pulse sequences and the atoms' final momenta are recomputed in Figure 7.5's simulation.

## Lead draft (AI-marked)

> How slowly the fields of STIRAP must change when the excited state decays: the adiabatic expansion and its condition, the error from quantum jumps and the fidelity of the transfer, the same condition read off in the basis of dark, bright and excited states, and remarks on EIT, preparing the dark state by optical pumping, and how a coherence in one basis is a population in another.

## Wanted at chapter level

- `media/ch07/fig-7-6.png` exists (from prep) though the book RULES say Figure 7.6 is never copied into `media/`: delete it (this section does not use it), as 7.3 asks for fig-7-3.png.
- 5.2's `bright-state` has no terms; "bright state" (removed here from `bright-dark-basis`) could become its term.
- 7.3's `sim-four-level` (Figure 7.4) and this section's `sim-four-level-pulses` (Figure 7.5 + 7.6) share the four-level referent ids `four-1`, `four-3`, `four-4`; 7.3's extra-sim line "the adiabatic beamsplitter in flight" is partly this figure's momentum stems.
- Eqs. (7.56) and (7.58) corrections change the factor in the exponent; 5.1's eq-5-22 (P_jump of the Λ system) may want the same reading of γ.

## Derivations

- 7.4 the adiabaticity condition with decay (7.39)–(7.53) · score 2 (printed block) · split at the book's prose into drv-stirap-zeroth-order ((7.45)–(7.47)) and drv-stirap-first-order ((7.48)–(7.52)); (7.39)–(7.44) stay as the facts; (7.53) follows from (7.52) by the order-of-magnitude argument the book gives in prose, with footnote 3, and stays printed. The connecting sentences before (7.51) and (7.52) go with the block
- 7.4 error due to quantum jumps (7.56)–(7.58) · score 4 · (7.56) is one printed line of two moves and stays with c-eq-7-56; (7.57) restates (7.53); (7.58), "can be explicitly calculated", built as drv-stirap-fidelity (the norm lost at $2\gamma_{13}|c_3|^2$, $c_3$ following the dark amplitude as in (7.51), integrated to $t = (\pi/2)\tau$); the exponent the book prints is half the one worked, checked by integrating (7.41)–(7.43) (0.859 at $\gamma_{13}/\Omega^2\tau = 0.05$, against 0.855 worked and 0.924 printed), and is the node's note, so c-eq-7-58 and its marker are gone; c-final-time stays in the prose
- 7.4.1 the partially diagonalized basis (7.59)–(7.65) · score 2 · not built: (7.62) and (7.63) are single equations of two hidden moves inside the book's physical argument, (7.64) is stated as an order of magnitude and (7.65) is one comparison
