# Chapter 7 prep

Rows staged in `ch07/book-rows.json`, merged (26 concepts, 8 symbols, 45 edges). Forms carry ids `eq-7-N` (and `eq-7-dynamical-phase`) and no anchors: each section adds its anchors with `ost set` once its `text.html` has ids. `chapter.json` has no variables rows: each section adds the rows for the symbols it owns (`ost add lukin-amo-ii variables --chapter 7`, `ost meanings` first). `ost check` errors until then only with "which no variables row linked to it carries" (theta, P_LZ, P_jump, Omega_NA, gamma_B).

## Waiting on Chapters 3 and 5 (wanted at the chapter pass)

Chapter 5 (5.1, 5.2: Λ system, Ω₁, Ω₂, γ₁₃, the dark state, EIT, the quoted “counter-intuitive pulse sequence”) and Chapter 3 (density matrix, ρ_nn, mixed state, optical pumping if it has one) were not merged when this prep ran. Once they are:
- prereq edges: `three-level-dressed-states` → Chapter 5's dark-state concept (the stand-ins `dressed-states`, `multilevel-rotating-frame` then drop if reached); `stirap` → Chapter 5's counter-intuitive-pulse concept, and move the term “counterintuitive” there if Chapter 5 owns it (7.3.1 spells it without the hyphen); `adiabatic-following-eit` → Chapter 5's EIT and dark-resonance concepts; `dark-state-optical-pumping` → Chapter 3's mixed-state concept (and an optical-pumping concept if one exists); `stirap-fidelity` → Chapter 3's density-matrix/population concept; `dark-state-adiabaticity-condition` → Chapter 5's Λ-system equations of motion.
- `data-concept` spans on "dark state", "EIT"/"electromagnetically induced transparency", "dark resonance", "density matrix", "mixed state", "optical pumping", "Λ system" across 7.3 and 7.4.
- variables rows for Ω₁, Ω₂, Ω₃, Ω₄, γ₁₃, ρ₂₂, ρ₁₁ reuse Chapter 5's and 3's symbols and meanings (Ω₃, Ω₄ of 7.3.2 as `redefines` or new typed rows); not staged here to avoid racing Chapter 5's prep. If a section builds before Chapter 5 is merged, it stages them in `ch07/book-rows.json` only after re-checking `book.json`.

## Intro (built)

`intro/text.html`, `intro/section.json`: the one opening paragraph verbatim; spans on hamiltonian (twice), rotating-frame, slowly-varying-envelope. Typo "to is applicability" kept.

## 7.1 The adiabatic theorem for time-dependent Hamiltonians

Concepts (6): instantaneous-eigenstates (definition, 7.1, 7.2), nonadiabatic-coupling (result, 7.4, 7.6), adiabatic-theorem (result, “adiabatic”), adiabaticity-condition (result, 7.10, 7.9), dynamical-phase (definition, “dynamical”, eq-7-dynamical-phase), geometric-phase (definition, “geometric”, “Berry's”).

Symbols it owns: epsilon_k (energy, row without concept, the instantaneous eigenvalue ϵ_k(t)); c_l/c_k reuse c_n's meaning (probability-amplitude) or a row with `ref`-free meaning "amplitude in the instantaneous eigenstate"; tau (time, `redefines`: the timescale on which Ĥ changes; 2.1's τ is a phase). Reuse H, psi, t.

MIT problems: none. Figure candidates: none drawn by the book; a Sim of the adiabaticity condition is left to 7.2's two-level figure. Footnote 1 (Berry phase).

Suspected errors: (7.7)–(7.8) write ω_l where the text uses ϵ_l (ω = ϵ/ℏ); (7.9) sum lacks l ≠ k; (7.5) the matrix printed for Ĥ is the instantaneous-diagonal one (not an error, note only); "Schrödinger"/"Schrodinger" both kept.

## 7.2 Adiabaticity for the two-level system

Concepts (6): mixing-angle (definition, θ, 7.16), time-dependent-dressed-states (result, 7.13–7.15, 7.11), adiabatic-return (idea), rapid-adiabatic-passage (result, “rapid”), two-level-adiabaticity-condition (result, 7.19, 7.17, 7.18, 7.20), landau-zener (result, P_LZ, 7.22, 7.23, 7.21).

Symbols it owns: theta → mixing-angle (phase); A_area (phase, row with concept pulse-area, meaning "the pulse area A = ∫2Ω dt"); P_LZ → landau-zener (population); Delta (`redefines`, frequency: the time-dependent detuning Δ(t) of the bare two-level Hamiltonian, |2⟩ at −ℏΔ); epsilon_pm reuse dressed-state-energies (now time-dependent, `redefines` if the meaning differs); alpha (untyped, ink: the sweep rate in Δ = αt; check `ost meanings alpha`, Chapter 4 uses α for the absorption coefficient, so `redefines`); Omega reuse.

MIT problems: none. Figures: Figure 7.1 (passage and return) live; RAP on the Bloch sphere as a candidate Sim (see config).

Suspected errors: "(see Fig. (9.3)" is Figure 7.1 (and an unclosed parenthesis); (7.18) sign and bra/ket order (⟨−|+̇⟩ = −θ̇); θ̇ ~ α/2Ω₀ should be α/4Ω₀ (the book's value is what makes 7.22 and 7.23 agree, so the chain is internally consistent with a factor-2 slip); (7.23) P_LZ − 1 is negative, 1 − P_LZ meant, and exact; (7.17) its two sides differ in dimension; Figure 7.1's adiabatic-passage panel has P₁ and P₂ labels swapped.

## 7.3 Adiabatic processes in multi-level systems

Concepts (4): three-level-dressed-states (result, 7.26, 7.28 first, then 7.24–7.32), stirap (result, “STIRAP”, “counterintuitive”, 7.33, 7.34), four-level-dark-states (result, 7.35–7.38), adiabatic-atomic-beamsplitter (idea).

Symbols it owns: phi (phase, row without concept: the second mixing angle of (7.25)–(7.29), and in 7.3.2 of (7.36)); theta reuse (now tan θ = Ω₁/Ω₂, `redefines`); epsilon_pm reuse, ε₀ untyped or energy row on epsilon_pm's meaning; Omega (`redefines`: √(|Ω₁|² + |Ω₂|²)); Ω₁, Ω₂, Ω₃, Ω₄, Δ, δ (two-photon) from Chapter 5 (above). Referents: |1⟩, |2⟩, |3⟩, the pump and Stokes fields, |Φ₀⟩.

MIT problems: none. Figures: 7.2 live (STIRAP), 7.3 recomputed from the model (never copied), 7.4 redrawn.

Suspected errors: (7.29)–(7.32) Ω² under the root and −Ω/Δ should be 4Ω² and −2Ω/Δ with (7.24)'s couplings; (7.24) has no ℏ; (7.38) tan φ = Ω₃/Ω₄ should be Ω₄/Ω₃ for (7.35)–(7.36) to be dark; "|D₁₃⟩" then "Turning on Ω₄ … |D₃₄⟩": with Ω₁ = 0 the dark state is |D₃₄⟩ and the field turned on next is Ω₁; Figure 7.4 labels the excited level |4⟩ where the text has |2⟩.

## 7.4 Analysis of STIRAP: The condition for adiabatic following

Concepts (10): dark-state-adiabaticity-condition (result, 7.53, 7.39–7.43, 7.51), adiabatic-expansion (skill, 7.44, 7.55; footnote 3), quantum-jump-error (result, P_jump, 7.56, 7.57), stirap-fidelity (result, 7.58), bright-dark-basis (definition, “partially diagonalized basis”, “bright state”, 7.59–7.62), nonadiabatic-rabi-frequency (definition, Ω_NA, 7.63), bright-state-escape-rate (result, γ_B, 7.64, 7.65), adiabatic-following-eit (idea), dark-state-optical-pumping (idea), coherence-population-basis (idea).

Symbols it owns: P_jump → quantum-jump-error (population); Omega_NA → nonadiabatic-rabi-frequency (coupling); gamma_B → bright-state-escape-rate (rate); c_3 (amplitude, a row on probability-amplitude's meaning; check `ost meanings c_3`), Δω (frequency, the dark-resonance linewidth, reuse Chapter 5's if it has one); tau (time, the pulse timescale, as 7.1); ρ₂₂, γ₁₃, Ω₁, Ω₂ from Chapters 3 and 5. Referents: |B⟩, |D⟩, |E⟩, m_J levels of Figure 7.7.

MIT problems: none. Figures: 7.5 redrawn, 7.6 recomputed or left out (experimental, never copied), 7.7 two-basis level scheme. Footnotes 2, 3, 4.

Suspected errors: c₂⁽²⁾ for c₂⁽¹⁾; (7.56) integral without dt; (7.58) "(Ωτ = π/2)" should be t = (π/2)τ; |ψ(t))⟩ doubled parenthesis; "the non-adiabatic coupling to |B⟩ and |D⟩" (between is meant); "approach us thus", "the the", "superpostion"; the citation "Alzelter et al. Novvo Cirr. 36B, 5/76" is Alzetta et al., Nuovo Cimento 36B, 5 (1976); "as noted in the previous lecture" refers to 7.3.2.

## Calls

- No new type. θ and φ are `phase` (COLOR.md lists θ as mixing angle); P_LZ, P_jump and the fidelity ρ₂₂ are `population`; Ω_NA is `coupling`, γ_B `rate`.
- The dark state itself stays Chapter 5's concept; Chapter 7 names its dressed-state form (`three-level-dressed-states`) and its partially diagonalized basis (`bright-dark-basis`, term “bright state”).
- Symbols Ω₁, Ω₂, γ₁₃ deliberately not staged (Chapter 5 races them).
