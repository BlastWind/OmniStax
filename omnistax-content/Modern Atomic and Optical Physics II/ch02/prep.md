# Chapter 2 prep

Rows staged in `ch02/book-rows.json`, merged (47 concepts, 31 symbols, 69 edges). Forms carry ids `eq-2-N` (or `eq-2-<name>` for unnumbered displays) and no anchors: each section adds its anchors with `ost set` once its `text.html` has ids. `chapter.json` has no variables rows yet: each section adds the rows for the symbols it owns (`ost add lukin-amo-ii variables --chapter 2`), linking `concept` only where the symbol names it. `ost check` errors until then only with "has the symbol …, which no variables row linked to it carries".

## 2.1 Atomic Transitions

Concepts (24): two-level-atom, atomic-transition-frequency, slowly-varying-envelope, optical-frequency, two-level-dipole-operator, two-level-hamiltonian, two-level-equations-of-motion, detuning, rotating-frame, rabi-frequency, rotating-wave-approximation, rabi-oscillations, atomic-polarization, pulse-area, adiabatic-elimination, ac-stark-shift, rotating-frame-hamiltonian, bare-states, dressed-states, dressed-state-energies, bloch-sphere, bloch-precession, multilevel-rotating-frame, floquet-basis.

Symbols it owns (first variables row is 2.1's): omega → atomic-transition-frequency, nu → optical-frequency, E_env → slowly-varying-envelope, delta → detuning, Omega → rabi-frequency, c_tilde_2 → rotating-frame, H_tilde → rotating-frame-hamiltonian, epsilon_pm → dressed-state-energies, S_tilde → bloch-sphere; untyped-by-concept rows with `type`: mu (dipole), c_1 and c_2 (concept probability-amplitude), p_1 and p_2 (concept born-rule), tau (time), Omega_vec (coupling, the drive vector), Delta (frequency, the beatnote), Omega_k (coupling), omega_k and nu_k (frequency). Reuse: t, psi, H, d, E_field from Chapter 1.

Exercise: MIT Problem Set 7, Problem 3 (dressed states). MIT writes H = (ℏω₀/2)Z + (ℏΩ₁/2)(X cos ω_L t + Y sin ω_L t), so MIT's Ω₁ is 2Ω here (Lukin's Ω is half MIT's), ω₀ is ω, ω_L is ν, δ_L = ω_L − ω₀ is δ, |e⟩,|g⟩ are |2⟩,|1⟩, and MIT's effective Ω = √(Ω₁² + δ²) is 2√(|Ω|² + δ²/4), the dressed splitting ϵ₊ − ϵ₋ over ℏ up to sign. Inline Try It: the book's invitation to show Eq. (2.32) gives Eq. (2.33).

Figures (config): the Bloch sphere replacing Figure 2.3 (3D, moving, sliders Ω and δ, p₂(t) strip); Rabi flopping with detuning, carried by it or its own strip; dressed-state energies ϵ± against δ replacing Figure 2.2b (still); a pulse-area figure (moving, π and π/2 special values); Figure 2.1's level scheme redrawn (still).

## 2.2 Bound to Continuum Transitions

Concepts (7): bound-continuum-transition, memoryless-continuum, principal-value-identity, continuum-decay-rate, fermi-golden-rule, continuum-stark-shift, outgoing-wavepacket.

Symbols it owns: gamma → continuum-decay-rate, Delta_Stark → continuum-stark-shift; typed rows: delta_k (frequency), c_k (amplitude). Omega_k, omega_k, c_1, p_1 reuse 2.1's meanings.

Exercise: none (the book's "homework problem 5" pointer is to a capture problem, not hw5.1).

Figures: none named; judged in the plan.

## 2.3 Quantized electromagnetic fields

Concepts (16): spontaneous-emission, cavity-modes, field-mode-expansion, field-quadratures, creation-annihilation-operators, field-hamiltonian, quantized-electric-field, single-photon-field, atom-field-interaction, single-photon-rabi-frequency, transverse-fields-and-gauge, wigner-weisskopf, lamb-shift, spontaneous-emission-rate, dipole-decay, emitted-photon-wavepacket.

Symbols it owns: q_j → field-quadratures (p_j beside it, quadrature), E_bar → single-photon-field, V_af → atom-field-interaction, g → single-photon-rabi-frequency; typed rows: k (wavevector), V (volume), nu_k (frequency, if 2.1 has not added it). gamma here names spontaneous-emission-rate (row with `concept` spontaneous-emission-rate, which has no symbol of its own).

Exercises: MIT Problem Set 5, Problem 1 (Rayleigh and Thomson scattering, the −d·E and Coulomb-gauge p·A + A² Hamiltonians; σ₀ = 8πr₀²/3) → after 2.3.3; MIT Problem Set 7, Problem 2 (one atom and one photon, Jaynes-Cummings) → 2.3.4. MIT's Ω₁ in hw7.2 is 2g here (Lukin's coupling is half MIT's), MIT's Γ is Lukin's γ, MIT's δ = ω − ω₀ is Lukin's δ = ν − ω (MIT's ω is the mode frequency ν, its ω₀ the atomic ω); |e⟩,|g⟩ are |2⟩,|1⟩. Hw5.1(a) has no MIT key: hold any numerical part in `exercise_notes`.

Figures: the outgoing photon wavepacket of 2.3.4 (moving) is the leading candidate; judged in the plan.

## Calls

- `spontaneous-emission-rate` and `continuum-decay-rate` both write γ; the symbol's concept is the 2.2 one, and 2.3's row points at the 2.3 one.
- No new type was needed.
