# Chapter 5 prep

Rows staged in `ch05/book-rows.json`, merged (44 concepts, 18 symbols, 67 edges, Hasse-reduced against book.json as merged with Chapters 1, 2, 4, 6, 7). Forms carry ids `eq-5-N` (or `eq-5-<name>` for unnumbered expressions) and no anchors: each section adds its anchors with `ost set` once its `text.html` has ids. `chapter.json` has no variables rows: each section adds rows for the symbols it owns (`ost add lukin-amo-ii variables --chapter 5`, `ost meanings` first), linking `concept` only where the symbol names it. `ost check` errors until then only with "has the symbol …, which no variables row linked to it carries".

Chapters 4 and 7 merged while this prep ran, so 5.x reuses them: `susceptibility` (χ), `nonlinear-susceptibility`, `third-order-susceptibility` (χ⁽³⁾ is ch04's `chi_3`; Eq. (5.82) is added to it as form `eq-5-82` in ch04/book-rows.json), `group-velocity` (v_g), `refractive-index`, `unitary-limit`, `doppler-broadening`, `macroscopic-polarization` (P), `saturation-spectroscopy`, and 7.3's `stirap`, which 5.2 first names: 5.2 links "STIRAP" to it and owns `dark-state-preparation`.

Chapter 3 (master equation, density operator ρ, ρ_ij, γ_ij, Liouvillian, Γ_21) was not merged. Wanted at the chapter pass, once it is: re-point `lambda-density-matrix-equations` from the stand-in `lindblad-master-equation` to Chapter 3's master-equation concept (and add Chapter 3's complex-rate concept as a prereq of `complex-decay-rate` if it has one: COLOR.md's Γ_21 = γ_21 − iδ); `data-concept` spans on "density matrix" in the intro and 5.1; variables rows for ρ₁₁, ρ₂₁, ρ₃₁ (population, coherence) and γ_ij reusing Chapter 3's meanings, rather than staging symbols here.

## Intro (built)

`intro/text.html`, `intro/section.json`, `intro/figures.js`: the opening verbatim (three classes printed as numbered paragraphs), spans on two-level-atom, multiphoton-process-classes, saturation-spectroscopy, raman-transition. Figure 5.1 as a still faithful copy (`fig-raman-configs`; Λ, cascade, V panels; the two fields referents `field-1`, `field-2`, levels ink since |2⟩ differs per panel). "Figure 7.3" kept, linked to Figure 5.1 (ost warns that it stays plain text by number: expected).

## 5.1 Raman transitions in the Λ level configuration

Concepts (22): multiphoton-process-classes (idea, first named on the intro page), raman-transition (idea), three-level-configurations (definition; "cascade", "V system"), lambda-system (definition, state), lambda-detunings (definition, Δ₁; δ = Δ₁ − Δ₂), lambda-hamiltonian (result, 5.1), lambda-equations-of-motion (result, c₃; 5.2–5.5), effective-raman-coupling (result, Ω_eff; 5.9, 5.6–5.8), lambda-density-matrix-equations (result, 5.10–5.16), complex-decay-rate (definition, Γ₁₂; 5.17–5.19), lambda-non-hermitian-evolution (result, γ₃; 5.21–5.25), weak-probe-solution (result, 5.29, 5.30, 5.26–5.28), probe-susceptibility (definition, χ₁; 5.31–5.33), two-photon-resonance (result, γ_eff; 5.35, 5.34), two-photon-detuning-shifted (definition, δ′), raman-unitarity-limit (result, 5.36), raman-dressed-states (result, 5.37–5.39; the quoted "dresses"), two-photon-rabi-oscillations (result, 5.41, 5.40), many-excited-states-raman (result, 5.42), doppler-free-raman (result, 5.45, 5.43–5.44), raman-phase-insensitivity (idea), cascade-two-photon-differences (idea).

Symbols it owns (first variables row is 5.1's): Delta_1 → lambda-detunings, Delta_2 (frequency, no concept), c_3 → lambda-equations-of-motion, Omega_1, Omega_2 (coupling, no concept; MIT-free so no factor question), Omega_eff → effective-raman-coupling, Gamma_12 → complex-decay-rate, Gamma_13 (rate, no concept), gamma_3 → lambda-non-hermitian-evolution, chi_1 → probe-susceptibility, gamma_eff → two-photon-resonance, delta_prime → two-photon-detuning-shifted. Redefinitions (`redefines`): Delta (2.1's beatnote) as the common single-photon detuning Δ₁ ∼ Δ₂ = Δ; delta (2.1's detuning) as the two-photon detuning; H_eff (6.1) reused for Eq. (5.21) with the Λ meaning; omega as the Fourier frequency of (5.26)–(5.27). Reuse c_1, c_2, psi, H, t, mu, k, v.

Exercises: none.

Figures: Figure 5.2 (still faithful level diagram); Figure 5.3 folded with 5.4 and 5.5 into one Sim built in 5.2 (5.1 cites it; the plan of 5.1 says whether 5.3 is drawn as its own still face here instead); candidate Sim of two-photon Rabi oscillation (5.1.5).

Suspected errors (from the transcript notes): "Figure 9.3" for Figure 5.2 and "Figure 7.3" for Figure 5.1 (wrong citations); "Louvillian" (twice); missing "decay"/"at" in "will account for from |3⟩ to |1⟩" and "to |1⟩ rate γ′"; "singe-photon", "typcially"; "real and complex parts of the denominator" (imaginary meant); the Schrodinger equation after (5.21) lacks d/dt; (5.24)–(5.27) brace labels Γ₁₂, Γ₁₃ on γ₂/2 − iδ, γ₃/2 − iΔ₁ while (5.17)–(5.18) define them without the halves; (5.35)'s (γ₁₂/2) + (γ₁₃/2)|Ω₂|²/Δ² does not follow from (5.34) and disagrees with (5.39) (the stored form uses γ_eff); (5.20) is an empty numbered row.

## 5.2 Resonant excitation: Electromagnetically induced transparency

Concepts (8): dark-resonance (result, 5.47; "dark resonance"), bright-state (definition, state; 5.49, 5.48), dark-state (definition, state; 5.50, 5.51, 5.53), dark-state-interference (idea), eit-dressed-picture (idea), electromagnetically-induced-transparency (definition; "electro-magnetically induced transparency", "slow light"), slow-light (result, 5.56, 5.54, 5.55, 5.57; reuses ch04's v_g), dark-state-preparation (result, 5.58–5.59; "counter-intuitive pulse sequence"). STIRAP is 7.3's `stirap`.

Symbols it owns: none new. Rows reusing: v_g (group-velocity, ch04), chi (susceptibility, ch04; Re[χ] in 5.54), n_ref (refractive-index), V, H_eff, Omega_1, Omega_2, Gamma_12, Gamma_13. |D⟩, |B⟩ are referents, not symbols. ν̄ in (5.56) is ch04's `nu_bar` if its meaning fits (`ost meanings nu_bar`).

Exercises: none ("see problem set 3", twice, kept verbatim).

Figures: the EIT Sim folding Figures 5.3, 5.4, 5.5 (see config); candidate dark-state/counter-intuitive-pulse Sim (or defer to 7.3); candidate slow-light pulse.

Suspected errors: "When the the two resonances" (Figure 5.4 caption), "of the the resonance"; heading "”slow light”" with a stray closing mark; (5.47) drops factors of 2 by the book's own remark (not a correction); "ρ₂₁ → −Ω₁/Ω₂" in 5.2.1 against (5.53)'s −Ω₂*Ω₁/(|Ω₁|² + |Ω₂|²) → −Ω₁/Ω₂ only for real Ω₂ (judge in the plan); (5.58) gives |D⟩ = −|2⟩ while the text says "ending up in |2⟩" (a global phase, not a slip).

## 5.3 Parametric Processes

Concepts (14): parametric-processes (definition; "nonlinear black box"), sum-frequency-generation (idea, 5.60), second-order-susceptibility (definition, χ⁽²⁾; 5.61), cascade-nonlinear-susceptibility (result, δ_eff; 5.65, 5.62–5.64), undepleted-pump-approximation (definition, 5.67), sum-frequency-propagation (result, ℰ₃; 5.66, 5.68–5.70, 5.72–5.74), wavevector-mismatch (definition, Δk; 5.75), phase-matching (definition; "phase-matching condition"; 5.77, 5.76), coherence-length (definition), competing-processes (idea), cascade-sfg-output (result, 5.78–5.80), phase-matching-methods (idea), parametric-saturation (result, 5.81), difference-frequency-generation (idea). Eq. (5.82) is a form of ch04's third-order-susceptibility; "Kerr effect" links ch04's kerr-effect.

Symbols it owns: chi_2nd → second-order-susceptibility, delta_eff → cascade-nonlinear-susceptibility, Delta_k → wavevector-mismatch, E_env_3 → sum-frequency-propagation, E_env_1, E_env_2 (electric-field, no concept). Reuse: chi_3 (ch04) for χ⁽³⁾; P_pol (ch04) for P and P₃; mu for μ₁₂, μ_1i; V; k for k_i (redefines: the wavevector inside the medium); chi for χ₁, χ₂, χ₃ (`ref` per field) or new rows judged in the plan; L is the length of the medium (length, row without concept; `ost meanings L` shows L is angular momentum: `redefines`).

Exercises: none.

Figures: Figure 5.6 (still faithful copy of the cascade and the hydrogen 1s/2s/2p scheme); Figure 5.7 as a still figure of |Ẽ₃(z)| from Eq. (5.76) with a Δk slider (special value Δk = 0, linear growth).

Suspected errors: (5.71) an empty numbered row; (5.76) lacks dz; "ν_iχ_i/2c = n_iν_i/c = k_i" after (5.75) should be (n_i − 1)ν_i/c; before (5.79) "≈ 2(ν₃/c)χ₃⁽¹⁾" should be ½ (and (5.79)'s −½ would be −2); "approprately", "a atomic cloud", "the net output nonlinear processes" (missing "of"), "configuation", "mathmatical", "do not use atomics", "may also employed", "(n a lossless system)", "UV and UUV" (VUV likely); Saturation's "Eq. (5.76) indicates … grows linearly" (written out in (5.77)).

## Calls

- No new type. χ₁ and χ⁽²⁾ are `susceptibility`; Γ₁₂, γ₃, γ_eff `rate`; Δ₁, δ′, δ_eff `frequency`; Ω_eff `coupling`; Δk `wavevector`; ℰ₃ `electric-field`; c₃ `amplitude`; lambda-system, bright-state, dark-state `state`.
- `multiphoton-process-classes` sits in 5.1 though the intro names it (an intro page carries no coverage), as 6.1 did for monte-carlo-wavefunction.
- Stand-in prerequisite: `lambda-density-matrix-equations` ← `lindblad-master-equation` until Chapter 3's master equation exists.
- Wanted at the chapter pass: edge `stirap` (7.3) ← `dark-state-preparation` (5.2), staged in ch07's rows.
