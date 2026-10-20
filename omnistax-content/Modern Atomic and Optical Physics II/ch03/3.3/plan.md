# Plan: 3.3 The dynamics of an open system

Source: `source.md` (PDF pages 47–58, Eqs. 3.22–3.78, two footnotes, no figures, no invitations). Planned and built in one go (config: no stops); this plan is left for review after.

## Blocks

| id | `<h2>` | holds |
|---|---|---|
| `opening` | none | the section's opening: Eqs. 3.22–3.26, entanglement, the decaying atom |
| `general-formalism` | 3.3.1 General formalism | Eqs. 3.27–3.31 |
| `environment` | 3.3.2 Properties of the environment | Eqs. 3.32–3.34; `<h3>` Random variables (3.35, 3.36); `<h3>` Correlation time; `sim-spin-echo` |
| `markovian` | 3.3.3 Density operator method for a Markovian reservoir | Eqs. 3.37–3.78, footnotes 1 and 2 |

3.3.3 is one block: the book marks no boundary inside it (config). Every numbered display is `<div class="equation" id="eq-3-K">` with `\tag{3.K}`; the book's multi-line displays keep its line breaks (`aligned`), the underbraces as `\underbrace`. Citations link: "Eq. (3.42)", "(3.48)", "(3.40)", "the integrand 3.57", "the integrand 3.62", "(3.78)". The numbered "(1)", "(2)", "(3)" paragraphs stay paragraphs, as printed.

## Concepts (18, prep-merged)

| concept | introducing span |
|---|---|
| density-operator-equation-of-motion | `eq-3-23` |
| system-environment-entanglement | `entangled` |
| decaying-atom-reduced-state | `half-rate` |
| system-reservoir-hamiltonian | `eq-3-27` |
| reduced-density-operator-dynamics | `eq-3-31` |
| spin-in-fluctuating-field | `fluctuating-field` |
| stationary-random-process | `stationary` (“stationary processes”) |
| correlation-time | `correlation-time` (item 3) |
| gaussian-random-process | `gaussian` (“Gaussian”) |
| reversible-evolution | `reversible` (“reversible evolution”) |
| markovian-environment | `markovian` (“Markovian environment”) |
| open-system-interaction-picture | `interaction-picture` |
| bilinear-system-reservoir-coupling | `bilinear` |
| born-markov-approximation | `born-markov` (“Born-Markov Approximation”) |
| reservoir-energy-shift | `energy-shift` |
| reservoir-correlation-functions | `correlation-functions` |
| thermal-field-correlator | `sharply-peaked` |
| master-equation | `master-equation` (“master equation”) |

`uses` rows on the earlier concepts the prose leans on: density-operator, reduced-density-operator, open-system (opening); hamiltonian (eq-3-23); spontaneous-emission, spontaneous-emission-rate, density-matrix (decay); time-evolution-operator (eq-3-33); density-matrix-coherences (`s-plus`); atom-field-interaction (eq-3-43); thermal-radiation-field and mean-thermal-photon-number (eq-3-72); wigner-weisskopf (sharply-peaked); principal-value-identity (eq-3-77 sentence). Form anchors `3.3-eq-3-K` set through `ost set … forms`; `eq-3-coarse` → `3.3-coarse`.

Concept spans, judged per mention: "density operator", "reduced density operator", "density matrix", "Hamiltonian" (the operator), "entangled", "decay rate", "spontaneously emitting", "interaction picture", "Markovian"/"Markov process", "correlation time", "Born-Markov Approximation", "Born approximation", "master equation", "Wigner-Weisskopf approximation", "thermal state", "Fock state" (none: no concept) are wrapped where they name the concept. Bare: "system", "environment" and "reservoir" in their running sense (3.2's call: open-system is introduced by "universe"/"open system"; here the words name the parts, wrapped only in the opening's "open system" and "its environment"), "random variable", "probability distribution", "variance" (no concepts), "stationary (time-independent) state" of the reservoir (not a random process), "spin echo" wrapped (a term of reversible-evolution).

## Symbols and variables

`ost meanings` run for each. f_t's book latex changed from `f(t)` to `f` in `ch03/book-rows.json` (merged) so that f(t′), δf(t) and ⟨f⟩ can all be written `\kft(…)`; only 3.3 uses it. Rows added (chapter 3, section 3.3):

| sym | concept | type | meaning | note |
|---|---|---|---|---|
| H_SR | system-reservoir-hamiltonian | (energy) | The interaction Hamiltonian between system and reservoir | |
| H_S | none | energy | The system Hamiltonian, acting only on the system | |
| H_R | none | energy | The reservoir Hamiltonian, acting only on the reservoir | |
| H | hamiltonian | (energy) | The total Hamiltonian of system and reservoir | `redefines` (3.1: the system's) |
| H_tilde | system-reservoir-hamiltonian | (energy) | The interaction Hamiltonian in the interaction picture, H̃_SR | written `\kHtilde_{SR}` |
| tau_c | correlation-time | (time) | The correlation time: the timescale on which the random field, or the reservoir, changes | |
| tau_S | none | time | The typical timescale on which the system evolves | |
| Delta_t | none | time | The averaging time step, between the correlation time and the system's evolution time | |
| F_R | bilinear-system-reservoir-coupling | untyped | The reservoir operator of the interaction picture, carrying all the time dependence of H̃_SR | |
| S_hat | none | untyped | A general system operator, coupled bilinearly to a reservoir operator | `redefines` (3.1, 3.2: a system observable) |
| rho_tilde | none | state | The density operator of system and reservoir in the interaction picture | ρ̃_S, ρ̃_R by subscript |
| f_t | none | frequency | The random field: the fluctuating splitting of the spin, ħf(t), over ħ | |
| phi | none | phase | The random phase one realization of the spin gathers, ∫δf dt′ | the Sim's caption and readout |
| rho_hat, psi, rho_S | as 3.2 | | the universe's ρ̂ and |ψ⟩ (`redefines`), the system's ρ̂_S | |
| gamma | spontaneous-emission-rate | | 2.3's meaning | |
| g | single-photon-rabi-frequency | | 2.3's meaning (g_j) | |
| nu | none | frequency | 3.1's meaning (ν_j) | |
| omega | atomic-transition-frequency | | 3.1's meaning | |
| n_bar | mean-thermal-photon-number | | 3.1's meaning (n̄_j, n̄(ω)) | |
| rho_22, rho_12, rho_21 | 3.1's concepts | | 3.1's meanings, no `ref` (no referents here) | |
| c_1, c_2, c_k | probability-amplitude | | the atom's amplitudes; c_k of |1⟩ ⊗ |1_k⟩ | |
| t, T | | time, temperature | "Time", "The temperature" | |

Ink: Ŝ_z, Ŝ_+ of the spin (pseudo-spin components, as 2.1), R̂, the correlators g^{±±} (not the coupling g), the Dirac δ(ν_j − ω), â_j, |n_k⟩, Tr_R, Δρ̃.

## Referents

None: the levels |1⟩, |2⟩ are named but no figure draws them, and a referent needs a figure.

## Figures

The book draws none. One Sim:

sim-spin-echo · Sim · spin-in-fluctuating-field, correlation-time, reversible-evolution, markovian-environment, gaussian-random-process · value adds: flow by animation (sixty realizations of the spin fanning out in the equatorial plane as their phases ∫δf dt′ wander, and the echo pulse folding them back) and variation by slider (the correlation time against the evolution time, the two limits of "Correlation time" as two ends of one track); the reader otherwise has to imagine an ensemble of precessing spins and why reversing them works only when the field holds still · arrows: kinematic, the spins' transverse components turning about ẑ, and the π pulse turning them about x̂ (seen from the pole, their y parts shrink through zero and come back mirrored) · moving, transport: the clock runs t from 0 to 1 μs (the pulse takes no model time and is drawn over a short pause of the clock) · slider τ_c (time, logarithmic track 0.1–100 μs (below 0.1 μs the field averages itself out, σ²τ_c t ≪ 1, and the spins barely spread: motional narrowing, which the text does not draw), value box written in μs; dashed circle at τ_c = t = 1 μs, the boundary of the two limits); choice: free precession, spin echo · headline names the regime: τ_c ≫ t, reversible, the echo refocuses; τ_c ≪ t, irreversible, the echo fails; in between · graph beside: the scene is round, so the two graphs stand to its right, δf(t) for every realization (one traced in ink) above, |⟨Ŝ₊⟩| below, the analytic ensemble average e^{−⟨φ²⟩/2} for a Gaussian process with an exponential correlation ⟨δf(t)δf(t′)⟩ = σ²e^{−|t−t′|/τ_c}, σ = 6 μs⁻¹ · 2D: the Hamiltonian ħf(t)Ŝ_z only turns the spin about ẑ, so the motion stays in the equatorial plane and the view from the pole shows all of it; a sphere would add only a constant height.

Readout: |⟨Ŝ₊(t)⟩|/|⟨Ŝ₊(0)⟩| = e^{−⟨φ²⟩/2} = e^{−x} = y, from Eq. (3.34) with the mean ⟨f⟩ taken out (the spins are drawn in the frame turning at ⟨f⟩) and the Gaussian factorization of Eq. (3.36), the exponent rounded first so the two numbers agree. Labels: no entity labels in the scene (sixty spins move); hover names carry one realization, the traced one, the average arrow, the π pulse and the now-line. Axis titles: δf(t) in the frequency hue, t in the time hue, |⟨Ŝ₊⟩| in the coherence hue. The average arrow is the average of the sixty drawn (honest, with a floor near 1/√60 when they are spread); the graph's curve is the ensemble average over all realizations. The caption says so.

### Extra sims (root 15), not built

- The decaying atom of Eq. (3.26): ρ₂₂ falling at γ and |ρ₁₂| at γ/2, the Bloch vector of the reduced state shrinking and dropping to the pole. It is the γ_d = 0, Ω = 0 state of 3.4's planned Bloch-vector Sim; fold it there rather than build a second sphere.
- The thermal correlator of Eq. (3.72): Σ_j |g_j|² n̄_j e^{i(ν_j−ω)τ} summed over a band of modes, a bandwidth slider narrowing the peak in τ to τ_c ∼ 1/bandwidth and its area staying γn̄/2 (Eq. 3.76): the reader sees why a broadband reservoir forgets fast.

## Exercises

None: the section prints no invitation and no MIT problem maps here (prep: hw7.2 goes to 9.2).

## Footnotes and corrections

Book footnotes (Chapter 3's numbering): `footnote-1` (the bandwidth–correlation-time relation, marker after "very short"), `footnote-2` (the Born approximation, after "density operator.").

Corrections (each verified against the page image and by rederivation):
- `c-eq-3-23`: (3.23) prints 1/iħ with iħρ̂̇_S on the left; the right side is [Ĥ_S, ρ̂_S] (equivalently ρ̂̇_S = (1/iħ)[Ĥ_S, ρ̂_S], as Eq. 3.28).
- `c-eq-3-33`: Û for Ĥ_SR = ħf(t)Ŝ_z is e^{−i∫f dt′Ŝ_z}; with it, (3.34)'s e^{+i∫f} follows for Ŝ₊.
- `c-eq-3-52`: Tr{F̂_R†, ρ̃_R} prints a comma (and Tr without R) for the product Tr_R{F̂_R(t′)†ρ̃_R(t)} = ⟨F̂_R(t′)†⟩.
- `c-eq-3-62`: the second row's first correlator is g⁻⁻(t″, t′), printed g⁻⁻(t″, t).
- `c-eq-3-70`: not an error of the book's maths: the page cuts the second row at the margin; the note says the row is completed from Eq. (3.69).
- `c-eq-3-74`: the integration variable on the right is dt″, printed dt′.

Kept without a correction (config: typos kept): "correspnds", "Ĥ_S R" (for Ĥ_SR), "where the second line when we cyclically permute" (a word missing), "an addition" ("interpreted an addition"), the comma with no space before ⟨â†â⟩. Checked and not errors: (3.54)'s Ĥ′_S needs no ħ (F̂_R carries ħ through g_j, so ŜF̂† is an energy); (3.72)'s sign of τ (convention only).

## Lead draft (AI-marked)

> How the reduced density operator of an open system evolves: tracing the equation of motion over the reservoir, a spin in a fluctuating field as the model of an environment, its correlation time and the line between reversible and Markovian dephasing, and the Born-Markov derivation that turns the reservoir's correlation functions into the master equation for an atom in a thermal radiation field.

## Objectives, summary, notes

`objectives`, `summary_html` empty (config). `notes`: empty (nothing left out). `ai`: text and figures claude-opus-5-5 · high.

## Wanted at chapter level

- f_t's latex is now `f` (book-rows.json, merged); if the chapter pass prefers `f(t)`, the text's `\kft(\kt)` would print f(t)(t).
- The decaying-atom extra sim above belongs with 3.4's Bloch-vector Sim, if picked.
- 3.4's "Ŝ" rows: Chapter 6's prep note says Ŝ_k there may reuse 3.3's system-operator meaning (`S_hat`, "A general system operator, coupled bilinearly to a reservoir operator").

Chapter pass (2026-10-11): S_hat, H_SR, rho_tilde, tau_c in 3.4 now read as 3.3 (3.4 S_hat no longer `redefines`; 3.3 keeps it against 3.1–3.2); rho_hat and psi keep `redefines` in 3.2 and 3.3; f_t keeps latex `f`; extra sims not picked; 3.4 carries `c-eq-3-84`, the Ω sign convention against 2.1.

## Derivations

- 3.3 opening, (3.22)–(3.23) and (3.24)–(3.26) · score 5 · built as two derivations, the book's two passages: drv-density-operator-evolution ((3.23), c-eq-3-23 moved into its note) and drv-decaying-atom-density-matrix ((3.26), the decay of c₂ in the frame rotating at ω, from (2.90))
- 3.3.1 equation of motion of ρ_S, (3.28)–(3.31) · score 1 · built as drv-reduced-density-equation
- 3.3.3 the master equation, (3.37)–(3.78) · score 7 · built as five derivations at the book's breaks, the prose between kept: drv-coarse-grained-change ((3.45)–(3.48)), drv-first-reservoir-term ((3.51)–(3.54)), drv-second-reservoir-term ((3.55)–(3.70), with (3.63)–(3.65) and (3.66)–(3.68) as nodes, the correlator definitions (3.58)–(3.61) kept in the text), drv-thermal-correlator ((3.71)–(3.72)), drv-master-equation ((3.73)–(3.78)); (3.38)–(3.44) are definitions and stay. c-eq-3-52, c-eq-3-62, c-eq-3-70, c-eq-3-74 move into node notes. The expansion (3.57)→(3.69) checked numerically against the double commutator.
