# Plan: 3.4 The master equation

Source: `source.md` (PDF pages 58–63, Eqs. 3.79–3.104, no figures, no footnotes, two run-in headings in 3.4.3). Planned and built in one go (config: no stops); this plan is left for review after.

## Blocks

| id | `<h2>` | holds |
|---|---|---|
| `remarks` | 3.4.1 Remarks on the generalized master equation | Eqs. 3.79–3.83: the many-channel master equation, its cost, the factorization for a memoryless reservoir, irreversibility as the system boundary, the two caveats |
| `two-level` | 3.4.2 Example: The two-level atom | Eqs. 3.84–3.93: the master equation of the driven atom, the optical Bloch equations, the three processes, γ₁₂ and γ_d |
| `response` | 3.4.3 Atomic response to a resonant field | opening sentence; `<h3>` Weak applied field (Eqs. 3.94–3.98); `<h3>` Continuous-wave fields of arbitrary strength (Eqs. 3.99–3.104, `sim-damped-bloch` after the paragraph that ends "said to be saturated") |

Every numbered display is `div.equation` `eq-3-K` with `\tag{3.K}`; 3.79 and 3.85 keep their three aligned rows, 3.83 its `\underbrace`. The three processes stay "(1)", "(2)", "(3)" paragraphs (`process-1`…`process-3`). Citations link: "Eq. (3.79)" → `eq-3-79` (three times); "Eq. (3.89)" for the three processes → `eq-3-86`, the first of the set (3.86)–(3.89) the processes run through (config; transcript note); "Eq. (3.99)" → `eq-3-99`. "In the previous lecture", "our previous derivation" stay plain (they mean 3.3).

## Concepts (15, prep-merged; all introduced here)

| concept | introducing span |
|---|---|
| generalized-master-equation | `eq-3-79` |
| master-equation-cost | `cost` ("this added information comes with a computational price") |
| memoryless-reservoir-factorization | `factorization` (the paragraph that shows the corrections vanish for τ_c = 0) |
| irreversibility-boundary | `irreversibility` ("This amnesia implies irreversibility …") |
| two-level-master-equation | `eq-3-85` |
| optical-bloch-equations | `obe` (“optical Bloch equations.”) |
| thermal-and-spontaneous-transitions | `thermal-spontaneous` ("Thermal photons lead to incoherent transitions in both directions …") |
| coherence-decay-rate | `coherence-decay` ("The decay rate of the coherences γ₁₂") |
| dephasing-rate | `dephasing` ("the so-called decoherence or dephasing rate") |
| weak-field-response | `lorentzian` ("in the weak field limit the coherence at frequency δν is a Lorentzian") |
| steady-state-coherence | `steady-state` ("damped Rabi oscillations … a steady-state description") |
| steady-state-population | `eq-3-100` |
| optical-pumping-rate | `pumping-rate` ("R_opt acts like an incoherent pumping rate") |
| saturation | `saturated` ("the atomic response is said to be saturated") |
| rate-equations | `rate-equations` (“rate equations.”) |

`uses`: master-equation, markovian-environment, reduced-density-operator, system-reservoir-hamiltonian (`remarks` opening); probability-amplitude, density-matrix (`cost`); correlation-time, reservoir-correlation-functions (`factorization`); reversible-evolution, open-system (`irreversibility`); two-level-atom, open-system (`eq-3-84`); density-matrix-populations, density-matrix-coherences (`obe`); mean-thermal-photon-number, spontaneous-emission (`thermal-spontaneous`); rabi-oscillations (`steady-state`); pure-and-mixed-states (`saturated`); adiabatic-elimination (`rate-equations`); coherence-bound (`sim-damped-bloch`'s block, `saturated`).

Form anchors: `eq-3-K` → `3.4-eq-3-K` for the 21 forms of 3.79–3.104.

Concept spans, judged per mention: "master equation" → master-equation wherever it names the equation (3.3's, of which 3.79 is the general form); "Markovian reservoir", "a reservoir with no memory" → markovian-environment; "reservoir", "environment", "universe", "dissipative environment" → open-system where they name the environment (3.2's convention); "system-reservoir interaction" → system-reservoir-hamiltonian; "density operator" → density-operator, "system density operator" → reduced-density-operator; "density matrix" → density-matrix; "state amplitudes" → probability-amplitude; "time correlation function" → reservoir-correlation-functions; "reversible", "time reversibility" → reversible-evolution; "two-level system/atom" → two-level-atom; "Thermal photons", "thermal photons" → mean-thermal-photon-number (the photons n̄ counts); "spontaneous emission" → spontaneous-emission; "populations" → density-matrix-populations; "coherences", "off-diagonal terms" → density-matrix-coherences; "Rabi oscillations" → rabi-oscillations; "statistical mixture" → pure-and-mixed-states; "weak-field limit", "perturbative weak-field approach" → weak-field-response; "saturation", "saturated" → saturation; "steady state" → steady-state-coherence or steady-state-population as the sentence means; "adiabatic approximation", "adiabatically follow" → adiabatic-elimination; "dephasing" (last sentence) → dephasing-rate. Bare: "system" alone, "correlations", "perturbation theory", "entropy", "Fourier transform", "Lorentzian" outside its span, "classical dipole", "incoherent radiation", "linewidth", headings.

## Symbols and variables

`ost meanings` run for each. New book symbols (staged in `ch03/book-rows.json` through `ost add … symbols --chapter 3`): `gamma_21` (\kgammatwoone, γ₂₁), `gamma_1` (\kgammaone, γ₁), `gamma_2` (\kgammatwo, γ₂). `delta_nu` (\kdeltanu, δν) was already staged by Chapter 4; 3.4 gives it its own meaning.

3.4 rows in `chapter.json`:

| sym | concept | type | ref | meaning |
|---|---|---|---|---|
| gamma_12 | coherence-decay-rate | (rate) | | The decay rate of the coherence ρ₁₂ |
| gamma_21 | coherence-decay-rate | (rate) | | The decay rate of the coherence ρ₂₁, equal to γ₁₂ |
| gamma_1 | none | rate | lvl-1 | The rate of population decay out of the state abs 1 |
| gamma_2 | none | rate | lvl-2 | The rate of population decay out of the state abs 2 |
| gamma_d | dephasing-rate | (rate) | | The dephasing rate |
| R_opt | optical-pumping-rate | (rate) | | The optical pumping rate of the applied field (4.3's wording kept) |
| Gamma_21 | none | rate | | The complex rate Γ₂₁ = γ₂₁ − iδ |
| gamma_p | none | rate | | The rate of the p-th system-reservoir interaction |
| delta_nu | none | frequency | | The frequency offset δν of a Fourier component of the field and of the coherence |
| H_S | none | energy | | The Hamiltonian of the system alone |
| H_SR | system-reservoir-hamiltonian | (energy) | | The Hamiltonian of the interaction between the system and the reservoir |
| rho_tilde | none | state | | The density operator in the interaction picture; ρ̃_S and ρ̃_R are its system and reservoir parts |
| S_hat | none | untyped | | The system operator Ŝ_p of the p-th system-reservoir interaction (redefines: 3.1–3.2's "a system observable") |
| tau_c | correlation-time | (time) | | The correlation time of the reservoir |
| Delta_t | none | time | | The interval over which the master equation coarse-grains the system's evolution |
| t | — | time | | Time (reused) |

Reused meanings: rho_S (3.2), rho_11, rho_22 (3.1, `ref` lvl-1, lvl-2), rho_12, rho_21 (3.1), n_bar (6.1's wording), Omega (2.1), delta (2.1), gamma (2.3's spontaneous-emission rate).

Ink, no macro: σ_ij, ρ_ij, ρ_ii, γ_ij (generic indices; Ω_ij and δ_ij wear \kOmega, \kdelta with the indices), c_i, n, h.c., Tr, ℏ, O(n²), R̂_p (no symbol, a reservoir operator), the tilde forms H̃_SR (ink: no tilde form of the symbol).

## Referents

The two levels, drawn by `sim-damped-bloch` at the poles of the sphere and named in the text (γ₁ "out of state |1⟩", γ₂, "the ground state", the excited state); `rho_11`, `rho_22`, `gamma_1`, `gamma_2` split their subscripts by them. One group.

| id | label | figures |
|---|---|---|
| lvl-1 | the ground state \|1⟩ | sim-damped-bloch |
| lvl-2 | the excited state \|2⟩ | sim-damped-bloch |

## Figures

The book draws none in 3.4. Units: the book gives no numbers, so the sim measures every rate and frequency in units of γ and time in 1/γ (n̄ = 0, as Eq. 3.100 assumes).

- sim-damped-bloch · Sim · optical-bloch-equations, coherence-decay-rate, dephasing-rate, steady-state-coherence, steady-state-population, optical-pumping-rate, saturation (uses coherence-bound) · 3D visualisation, animation and variation: the Bloch vector of ρ̂_S (S = (−2Re ρ₁₂, −2Im ρ₁₂, ρ₂₂ − ρ₁₁), x and y reversed so the drive (−2Ω, 0, −δ) lies along −x as in Figure 2.3; integrated by RK4 from Eqs. 3.86–3.89 with γ₂₁ = γ/2 + γ_d) swings about the drive vector as in 2.3's Rabi flopping while γ and γ_d draw it off the surface into the ball and onto its steady state: the reader sees that a pure state lies on the sphere (|ρ₁₂|² = ρ₁₁ρ₂₂, Eq. 3.8) and every damped state inside it (|ρ₁₂|² < ρ₁₁ρ₂₂, Eq. 3.9), the transverse part shrinking faster than the population relaxes as γ_d grows, which the text states only as rates. The strip beneath plays ρ₂₂(t), the damped Rabi oscillation the text "expects" but never draws, settling on R_opt/(γ + 2R_opt); the graph beside it holds that steady value against δ, so raising |Ω| shows the line saturating toward ½ and broadening, Eqs. 3.100–3.103 · arrows: kinematic (the Bloch vector moves; its path is drawn), symbolic (the drive vector, fixed under the clock and moved only by the sliders; the axes) · moving: the state relaxes in time; transport · sliders |Ω| (coupling, 0 to 3 γ, default 1; specials 0, "no field", and the |Ω| at which R_opt = γ, the border of Eqs. 3.102–3.103, from the other two), δ (frequency, −5 to 5 γ, default 0; special 0, resonance), γ_d (rate, 0 to 3 γ, default 0; special 0, "γ₂₁ = γ/2"); choice start (|1⟩ · (|1⟩ + |2⟩)/√2), since with |Ω| = 0 the superposition shows the coherence decaying at γ₂₁ beside the population at γ, faster once γ_d > γ/2 (hw6.3's T₂), and |1⟩ shows the drive · headline (the 3D band) states the live length of the Bloch vector and |ρ₁₂|² against ρ₁₁ρ₂₂, pure or mixed · graph below: ρ₂₂ against t (0 to 10/γ, 0 to 1, fixed) and steady ρ₂₂ against δ (−5 to 5 γ) on the same ρ₂₂ axis, the steady level dashed on both at the same height, ½ dashed on both · 3D, mathematical class (book RULES: the Bloch sphere): orbit free, no ground, no spin or zoom button (the state already moves and nothing is fine; the wheel zooms), no snap view. Labels: axes x, y, z; the poles |2⟩ and |1⟩ in their referent colours; Ω on the drive vector; the moving vector and the steady point carry hover names and the strip's legend line (rule 26.7: they move). Readout: Eq. (3.100) with the live R_opt, a note giving γ₂₁ (Eq. 3.93) and R_opt (Eq. 3.101). No note beyond it. Without WebGL a flat canvas draws the sphere from one fixed view.

`draws`: state, coupling, frequency, rate, population, time. No facts or conventions: the generic two-level atom has no element.

The tracing-out view 3.2's plan offers (a slider on the environment overlap ⟨e₁|e₂⟩ shrinking the Bloch vector) is not folded in: γ_d with the superposition start shows the same shrinking of the transverse part, and hw6.3(b) (in the Exercises) works out that the decay is the overlap of the environment states. A second slider for it would move the vector the way γ_d already does.

### Extra sims (root 15), not built

- The weak-field Lorentzian of Eq. (3.97): Re and Im ρ₂₁(δν) against δν for a weak field, the width γ₂₁ and the centre −δ moving with the sliders. It would duplicate 4.2's susceptibility figures, whose subject this is; offered, not built.

## Exercises

- MIT Problem Set 6, Problem 3 (physical origin of T₂), three end exercises `hw6-3a`…`hw6-3c`, kind `problem`, `origin: mit-8422`, `source_number` "Problem Set 6, Problem 3(a)"…, `source_id` "hw6.3a"…, Bloom Apply, `cite` `dephasing` (after 3.4.2). Restated: MIT's |e⟩, |g⟩ are |2⟩, |1⟩, ρ_eg, ρ_ge are ρ₂₁, ρ₁₂, T₂ is named 1/γ₁₂ once; part (b)'s coupling constant γ is renamed χ (it would clash with the decay rate γ) and its environment states |0⟩, |1⟩ are written |0⟩_E, |1⟩_E (|1⟩ is the atom's ground state here); MIT's "Next week…" preamble is left out; λ kept (the solutions identify it with γ_d); "loosing" kept as MIT prints it; MIT's closing paragraph closes part (c). AI-marked solutions: (a) ρ̄(t) keeps a, d and multiplies b, c by e^{−λt}, phase damping at γ_d = λ; (b) ρ₁₂ → ρ₁₂cos(|χ|t) ≈ ρ₁₂(1 − |χ|²t²/2), the overlap of the environment states, compounding to e^{−|χ|²dt·t/2} when the environment is renewed every dt; (c) the same as (a). Concepts: (a) dephasing-rate, density-matrix-coherences; (b) dephasing-rate, reduced-density-operator; (c) dephasing-rate, coherence-decay-rate.
- MIT Problem Set 7, Problem 1 (optical Bloch equations, weak and short-time limits), `hw7-1a`, `hw7-1b`, kind `problem`, `cite` `lorentzian` (after 3.4.3), Bloom Apply. Restated: ρ_ee, ρ_gg, ρ_ge, ρ_eg are ρ₂₂, ρ₁₁, ρ₁₂, ρ₂₁; MIT's Ω is 2Ω (so ¼|Ω|² is |Ω|² and the conditions read 2|Ω| ≪ γ, 2|Ω|t ≪ 1); Γ is γ; ω₀ − ω_L is −δ; MIT's (1)–(2) become (3.86) and (3.88) with n̄ = 0 and Ω real (checked); part (b) repeats the two equations. AI-marked solutions: (a) to lowest order ρ₂₂ − ρ₁₁ ≈ −1, ρ₁₂(t) = iΩ(1 − e^{−(γ/2+iδ)t})/(γ/2 + iδ), and |ρ₁₂|² obeys ρ₂₂'s equation with its initial value, so ρ₂₂ = |ρ₁₂|², which is (3); γ → 0 gives 4|Ω|²sin²(δt/2)/δ²; (b) the t² term of (3), valid while γt, |δ|t ≪ 1 too, which is the "why". Concepts: optical-bloch-equations, weak-field-response (both parts). Neither problem has a numerical part, so none is held.

## Lead draft (AI-marked)

> The master equation of an open system in its general form, what it costs and when it can be trusted, and its use for a driven two-level atom: the optical Bloch equations, how populations and coherences decay, dephasing, and how the atom responds to a weak field and to a constant field of any strength.

## Objectives, summary, notes

Empty (config); `notes` empty: nothing left out.

## Book faults kept verbatim

- "Schrodinger", "h.c.", "e.g.", "i.e." as printed.
- 3.4.1: Δρ̂_S with a hat where (3.83) and the right side carry tildes; kept, no correction (prep).
- "the system evolution described by Eq. (3.89)": linked to Eq. (3.86); (3.89) itself carries all three processes, so no correction.
- "O(Ω²)" italic beside 3.4.1's calligraphic 𝒪(n²); both kept.

## Corrections

| id | attaches to | the book prints | meant |
|---|---|---|---|
| `c-eq-3-82` | `eq-3-82`, after `$$` | ∫_{t_i}^{t}[H̃_SR(t'), …] with no dt' | ∫_{t_i}^{t}dt'[H̃_SR(t'), ρ̃_S(t_i) ⊗ ρ̃_R(t_i)], as (3.83) integrates it |
| `c-eq-3-95` | `eq-3-95`, after `$$` | ρ₁₂(δν) in the transform of ρ₂₁(t) | ρ₂₁(t) = ∫d(δν)e^{−iδνt}ρ₂₁(δν), the transform (3.97) solves for |

Checked and right: 3.79 (each h.c. completes the Lindblad anticommutator), 3.85 (Ŝ = σ₁₂ gives Ŝ†Ŝ = σ₂₂, ŜŜ† = σ₁₁), 3.86–3.89 from 3.84 and 3.85, 3.92, 3.94, 3.97, 3.99, 3.100–3.101 (R_opt/(γ + 2R_opt) is the exact steady state of 3.86–3.89 at n̄ = 0, also with γ_d), 3.104.

## Wanted at chapter level

- 3.3 may want its own wording of the H_SR, rho_tilde, tau_c rows; 3.4's rows stand on their own meanings, H_SR and tau_c linked to 3.3's concepts.
- S_hat's 3.4 row is `redefines` against 3.1–3.2's "a system observable" (in 3.79 Ŝ_p is the system half of one interaction term); 3.3's own row (prep: "the system operator Ŝ") may want the same wording.

Chapter pass (2026-10-11): S_hat, H_SR, rho_tilde, tau_c in 3.4 now read as 3.3 (3.4 S_hat no longer `redefines`; 3.3 keeps it against 3.1–3.2); rho_hat and psi keep `redefines` in 3.2 and 3.3; f_t keeps latex `f`; extra sims not picked; 3.4 carries `c-eq-3-84`, the Ω sign convention against 2.1.

## Derivations

- 3.4.1 validity of the factorization, (3.80)–(3.83) · score 3 · built as drv-memoryless-factorization (a proof the notes print, with their ∝); prose first, so the host stands after the factorization paragraph; c-eq-3-82 moves into the node note
- 3.4.2 optical Bloch equations, (3.84)–(3.89) · score 4 · built as drv-optical-bloch-equations ((3.85), then each matrix element; (3.89) by conjugation); checked numerically; (3.84) stays with its correction marker. (3.92) reads γ₁₂ off (3.88) in one line: not built
- 3.4.3 weak applied field, (3.94)–(3.98) · score 2 · built as drv-weak-field-response ((3.94), (3.97)); the transforms (3.95)–(3.96) stay as facts; (3.98) is stated, not built
- 3.4.3 steady state and rate equations, (3.99)–(3.104) · score 4 · built as drv-steady-state-population ((3.99), the population equation, (3.100)); its middle node is the rate equation that (3.104) restates later, which stays as printed
