# Chapter 10 prep

Rows staged in `ch10/book-rows.json`, merged (41 concepts, 9 symbols, 71 edges). Forms carry ids `eq-10-N` (or `eq-10-<name>` for unnumbered relations) and no anchors: each section adds its anchors with `ost set` once its `text.html` has ids. `chapter.json` has no variables rows yet: each section adds the rows for the symbols it owns (`ost add lukin-amo-ii variables --chapter 10`, `ost meanings` first), linking `concept` only where the symbol names it. `ost check` errors until then only with "has the symbol …, which no variables row linked to it carries".

Chapter-wide notation shifts (rows `redefines`): ω is the laser frequency (e^{−iωt} in 10.7–10.10) and ω_eg the atomic transition (Chapter 2 had ω atomic, ν laser); ν is the trap frequency; ∆ is the laser detuning from the bare transition; η is the Lamb-Dicke parameter (`eta_LD`, untyped), never the Chapter 8 friction `eta`; x̂, p̂ are the ion's position and momentum (not the field quadratures `x_quad`, `p_quad`); |0⟩, |1⟩ in 10.3 are phonon Fock states and in 10.4.2 also qubit labels.

## 10.1 Ion traps

Concepts (5): ion-trap-principle, penning-trap, quadrupole-potential, paul-trap, micromotion.

Symbols: none owned (Φ, φ₀, α, β, γ of (10.1) are untyped coefficients; if 10.1 adds variables rows, new keys such as `alpha_q`, not the existing `alpha`, `gamma`).

Exercises: none.

Figures: 10.1 and 10.2 are never copied. Paul trap's rotating saddle (3D, mathematical, moving) replacing Figure 10.2 with `withheld`; Figure 10.1 redrawn from the model with `withheld` or left out (plan).

Suspected errors (transcript notes): "LaPlace’s"; "when the is near the center" (missing word); "the position of the atom" (ion); "rotates this potential in time" where a Paul trap oscillates it (keep, correction row optional, judged); Figure 10.1's "illustrated below" (drawn beside); 10.2's crop carries the journal's own "FIG. 1." caption.

## 10.2 Model: An ion in a harmonic trap

Concepts (23): trapped-ion-model, ion-qubit-levels, ion-hilbert-space, trap-frequency, ion-position-momentum, motional-hamiltonian, harmonic-oscillator-length, ion-electronic-hamiltonian, negligible-decay-condition, ion-laser-hamiltonian, ion-momentum-kick, lamb-dicke-parameter, lamb-dicke-regime, lamb-dicke-hamiltonian, ion-bare-spectrum, sideband-couplings, carrier-transition, red-sideband-jaynes-cummings, trapped-ion-strong-coupling, anti-jaynes-cummings, standing-wave-couplings, sideband-cooling, resolved-sideband-condition.

Symbols it owns (rows linked to concept): H_motion → motional-hamiltonian, a_0 → harmonic-oscillator-length, H_electronic → ion-electronic-hamiltonian, eta_LD → lamb-dicke-parameter, H_r → lamb-dicke-hamiltonian, H_0 → ion-bare-spectrum, H_s → standing-wave-couplings; `nu` → trap-frequency (redefines), `omega_eg` → atomic-transition-frequency; typed rows: omega (frequency, the laser, redefines), Delta (frequency, laser detuning, redefines), Omega → rabi-frequency, gamma → spontaneous-emission-rate, tau (time), m (mass), k (wavevector), lambda (length), omega_R → recoil-frequency, E_env (electric-field envelope ℰ), phi (phase, standing-wave phase, redefines), g → single-photon-rabi-frequency (g → ηΩ), n_bar (if the exercise uses it). Reuse H, psi, t.

Exercise: MIT Problem Set 10, Problem 2 (sideband cooling; verified in `source/mit-8422/hw10.pdf`) → after 10.2.4. MIT's notation: H_I = ℏΩ(σ̂₊ + σ̂₋)cos(kx̂ − ωt), so in the RWA MIT's Ω is 2Ω here (Lukin's Ω is half MIT's; sign of the coupling aside); MIT's Γ is γ; MIT's ω₀ is ω_eg; MIT's laser ω is Lukin's ω (the same letter, as Chapter 10 uses it); MIT's δ = ω − ω₀ is ∆; MIT's x₀ = √(ℏ/2mν) is a₀ and η = kx₀ is (10.12)'s 2πa₀/λ; MIT's σ̂₊ = |e⟩⟨g|, |n⟩|g⟩ written |g⟩|n⟩; H₀ = (ℏω₀/2)σ̂_z + ℏνâ†â differs from (10.16) by a constant. Parts (a)–(c) restated with AI-marked solutions: (a) Ω_{n,n−1} = ηΩ√n, Ω_{n,n+1} = ηΩ√(n+1) in Lukin's Ω; (b) rate equation with A± below saturation; (c) d⟨n⟩/dt = −(A₋ − A₊)⟨n⟩ + A₊, steady state ⟨n⟩ = A₊/(A₋ − A₊), at ∆ = −ν with γ ≪ ν a steady ⟨n⟩ of order (γ/ν)², the factors worked in the solution. Part (d) (⁸⁸Sr numbers) held in `exercise_notes`.

Figures: 10.3 a still 2D potential; 10.4 a still level diagram (internal ⊗ motional ladders); 10.5 + 10.6 folded into one live sideband ladder (carrier/red/blue choice, η and n sliders, strengths Ω, ηΩ√n, ηΩ√(n+1)); new Sim: sideband spectrum shrinking on the red side under sideband cooling (moving), γ against ν.

Suspected errors (transcript notes): (10.16) printed −ℏω_ge|e⟩⟨e| for +ℏω_eg|e⟩⟨e| (form states it corrected; correction row); (10.24)–(10.25) the factor i makes the Hamiltonian non-Hermitian (relative minus sign or no i meant; correction row); (10.12)–(10.13) η ∼ 0.1 against ω_R ∼ kHz, ν ∼ 10 MHz giving ∼ 0.01 (correction row); ω_R "recoil energy" is a frequency; "h.c" without period (kept); "anti-Jaynes Cummings", "in to", "the atom" for the ion; Figure 10.4 labels the upper qubit level |r⟩ against the text's |e⟩; Figure 10.5's "the atom cycles".

## 10.3 Quantum state engineering

Concepts (4): motional-state-engineering, pulse-sequence-unitary, internal-motional-swap, motional-state-preparation.

Symbols: c_n → probability-amplitude (reuse its meaning), psi → state-vector; U_k (untyped, if a row is wanted, a new key `U_k`, not `U`, which is Chapter 1's energy).

Exercises: none.

Figures: none in the book; a state-preparation Sim on the ladder stepping red-sideband and carrier pulses is the candidate (moving, judged; root 24 gate).

Suspected errors (transcript notes): "these these"; "Schrodinger"; step (1)'s "initially empty" |e⟩|N−1⟩ holds only on the first round, and a fixed π-pulse also rotates the lower pairs at ηΩ√n, so pulse areas and phases must come from the full state (Law-Eberly); step (2) needs the pulse phase too. A `correction` row or a figure readout states it, judged in the plan.

## 10.4 Ion trap quantum computation

Concepts (9): ion-string, two-ion-motion, ion-normal-modes, two-ion-laser-hamiltonian, qubit, universal-gate-set, pi-phase-gate, phase-gate-requirements, ion-trap-phase-gate.

Symbols it owns: nu_s → ion-normal-modes (the stretch frequency √3ν); typed rows: nu (trap, reuse 10.2's meaning), Delta_i, Omega_1, Omega_2 (coupling; `Omega_1`, `Omega_2` exist with Chapter 5 meanings: redefines), e and epsilon_0 untyped constants, m (mass), x positions (length; new keys), a_cm, a_s untyped. Reuse psi, c_x untyped.

Exercises: none.

Figures: Figure 10.7 (raster, never copied) recomputed with `withheld`: ion equilibrium positions in a harmonic trap and the centre-of-mass (ν) and stretch (√3ν) modes (moving); Figure 10.8 a still 2D level diagram (|g⟩, |e⟩ = |r₀⟩, auxiliary |r₁⟩, cooling level); Figure 10.9's three-step gate live on the four basis states with a step choice (still).

Suspected errors (transcript notes): "focussed", "5-10μm", "the n-th atom"; η_cm, η_s in (10.39) undefined in the text but consistent; Figure 10.8 labels |r₀⟩, |r₁⟩ against the text's |e⟩ and "auxiliary ionic level".

## Calls

- No new type. The Lamb-Dicke η is a new untyped symbol `eta_LD` (latex η), kept apart from Chapter 8's `eta`.
- `trap-frequency` has no symbol of its own (ν belongs to `optical-frequency`); 10.2's `nu` row links it with `redefines`.
- Figure candidates for 10.1, 10.2 and 10.7 (originals) are recomputed only; none of the three crops is referenced from a page.
