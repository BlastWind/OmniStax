# Chapter 3 prep

Rows staged in `ch03/book-rows.json`, merged (46 concepts, 25 symbols, 70 edges, Hasse-reduced against the merged graph). Forms carry ids `eq-3-N` (and `eq-3-trace`, `eq-3-hermitian`, `eq-3-coarse` for unnumbered displays) and no anchors: each section adds its anchors with `ost set` once its `text.html` has ids. `chapter.json` has no variables rows: each section adds rows for the symbols it owns (`ost add lukin-amo-ii variables --chapter 3`, `ost meanings` first), linking `concept` only where the symbol names it. `ost check` errors until then only with "has the symbol …, which no variables row linked to it carries".

## Intro (built)

`intro/text.html`, `intro/section.json`: the two opening paragraphs, verbatim; spans on spontaneous-emission (twice), rabi-oscillations, open-system ("open systems", "environment", "reservoir"). No suspected errors.

## 3.1 The density operator

Concepts (11): density-operator (definition, eq 3.1), pure-and-mixed-states (definition: "pure state", "mixed state", "statistical mixture"), density-operator-properties (result: the three properties), density-operator-expectation (result, 3.5, 3.2), density-matrix (definition, 3.6, 3.7), density-matrix-populations (definition), density-matrix-coherences (definition), coherence-bound (result, 3.9, 3.8; "maximal coherence"), thermal-two-level-atom (result, 3.12, 3.10), thermal-radiation-field (result, 3.14, 3.13, 3.15), mean-thermal-photon-number (result, 3.16).

Symbols it owns: rho_hat → density-operator (state); rho_nn → density-matrix-populations (population); rho_nm → density-matrix-coherences (coherence); rho_11, rho_22 (population, rows with concept density-matrix-populations and `ref` the level) and rho_12, rho_21 (coherence, concept density-matrix-coherences); n_bar → mean-thermal-photon-number (untyped count); T (temperature, row without concept: "the temperature"). Reuse: psi, H, omega, nu (ν_j: reuse nu_k's meaning or a new row), c_1, c_2.

Exercise: none.

Figure candidates: none drawn by the book; thermal populations of Eq. (3.12) against k_BT/ℏω (still) only if the plan argues it.

Suspected errors: property (3) ⟨n|ρ̂²|m⟩ ≤ ⟨n|ρ̂|m⟩ holds only for diagonal elements (n = m), purity being Tr ρ̂² = 1; Eq. (3.16) prints Σ_n ρ_nn (= 1) for Σ_n nρ_nn; element case (2) prints ρ unhatted and (3.14) hats a matrix element (kept, no correction).

## 3.2 System and environment

Concepts (2): open-system (definition: "open system", "environment", "reservoir", "universe"), reduced-density-operator (definition, 3.21, 3.20).

Symbols it owns: rho_S → reduced-density-operator (state). Reuse rho_hat, psi.

Exercise: none. Figures: none expected. Suspected errors: none (the first paragraph is taken from the text layer; see the transcript note).

## 3.3 The dynamics of an open system

Concepts (18): density-operator-equation-of-motion (result, 3.28, 3.23), system-environment-entanglement (idea, "entangled"), decaying-atom-reduced-state (result, 3.26), system-reservoir-hamiltonian (definition, 3.27), reduced-density-operator-dynamics (result, 3.31), spin-in-fluctuating-field (idea, 3.32, 3.34), stationary-random-process (definition, 3.35, "stationary processes"), correlation-time (definition), gaussian-random-process (result, 3.36, "Gaussian"), reversible-evolution (idea: "reversible evolution", spin echo), markovian-environment (definition, "Markovian environment"), open-system-interaction-picture (definition, 3.40, 3.38), bilinear-system-reservoir-coupling (definition, 3.41, 3.42, 3.44), born-markov-approximation (definition, 3.49, eq-3-coarse; "Born-Markov Approximation"), reservoir-energy-shift (result, 3.54), reservoir-correlation-functions (definition, 3.58–3.61), thermal-field-correlator (result, 3.72, 3.76), master-equation (result, 3.78; "master equation").

Symbols it owns: H_SR → system-reservoir-hamiltonian (energy); H_S, H_R (energy, rows without concept, or concept system-reservoir-hamiltonian if judged to name it); tau_c → correlation-time (time); F_R → bilinear-system-reservoir-coupling (untyped operator); S_hat (untyped, the system operator Ŝ, row without concept; in 3.1 Ŝ is "a system observable": 3.1 may take the first row); rho_tilde (state, the interaction-picture density operator, row without concept); f_t (frequency, the random field f(t), row without concept); tau_S, Delta_t (time, rows without concept). Reuse gamma (2.3's spontaneous-emission-rate), g (g_j), nu, omega, n_bar.

Exercise: none (hw7.2's reduced density matrix is mapped to 9.2/2.3.4 by exploration.md).

Figure candidates: the spin in a fluctuating field, many realizations dephasing, a spin echo refocusing them for t < τ_c and failing for t ≫ τ_c (moving, transport); the plan judges it against root 24.

Suspected errors (from the transcript): Eq. (3.23) keeps 1/iℏ with iℏ on the left of (3.22) (right side should be [Ĥ_S, ρ̂_S]); Eq. (3.33) Û's sign (+ for −); "Ĥ_S R" for Ĥ_SR (typo kept); Eq. (3.52) prints a comma inside Tr{F̂_R†, ρ̃_R} for the product (and Tr without R); after (3.61) "where the second line when we" (missing words, kept); Eq. (3.62) g⁻⁻(t'', t) for g⁻⁻(t'', t'); Eq. (3.74) dt' for dt''; Eq. (3.70)'s second row is cut at the margin and completed from (3.69) (say so in notes). Doubtful, not corrected: (3.54)'s ℏ in Ĥ_S'; the sign of τ in (3.72) against the text's t'' − t'.

## 3.4 The master equation

Concepts (15): generalized-master-equation (result, 3.79), master-equation-cost (idea), memoryless-reservoir-factorization (result, 3.83), irreversibility-boundary (idea), two-level-master-equation (result, 3.85, 3.84), optical-bloch-equations (result, 3.86–3.89; "optical Bloch equations"), thermal-and-spontaneous-transitions (result, 3.90, 3.91), coherence-decay-rate (result, 3.92), dephasing-rate (definition, 3.93), weak-field-response (result, 3.97, 3.94, 3.98), steady-state-coherence (result, 3.99), optical-pumping-rate (definition, 3.101), steady-state-population (result, 3.100), saturation (result, 3.103, 3.102; "saturated"), rate-equations (result, 3.104; "rate equations").

Symbols it owns: gamma_12 → coherence-decay-rate (rate; γ₂₁, γ_ij, γ₁, γ₂ beside it as rows with `type: rate`, γ_1 and γ_2 as "the rate of population decay out of |1⟩ / |2⟩"); gamma_d → dephasing-rate (rate); R_opt → optical-pumping-rate (rate); Gamma_21 (rate, the complex rate γ₂₁ − iδ, row without concept; COLOR.md: the complex Γ₂₁ is a rate); gamma_p (rate, "the rate of system-reservoir interaction p", row without concept). σ_ij stays ink (COLOR.md) and gets no symbol. Reuse rho_11…rho_21, rho_S, n_bar, Omega, delta, gamma.

Exercises:
- MIT Problem Set 6, Problem 3 "Physical origin of T₂" (phase damping) → after 3.4.2, testing γ_d. MIT's notation: ρ_eg, ρ_ge are ρ₂₁, ρ₁₂; |e⟩,|g⟩ are |2⟩,|1⟩; T₂ is 1/γ₁₂ (state it once in the restated prompt); the dephasing rate λ (part a's variance 2λt, part c's (1 − e^{−λt})/2) is Lukin's γ_d, all three models giving ρ₁₂ → ρ₁₂e^{−γ_d t}; part b's coupling constant MIT calls γ, which clashes with Lukin's decay rate: rename it (e.g. χ) and say so in `changes`; part a's R_z(θ) and AC Stark shift kept. "loosing" is MIT's typo: fix silently in the restated prompt or keep; name it in `changes` if fixed. All three parts are derivations: AI-marked solutions.
- MIT Problem Set 7, Problem 1 "Optical Bloch Equations: weak and short-time limits" → after 3.4.3 (weak applied field). MIT's ρ_ee, ρ_gg, ρ_ge are ρ₂₂, ρ₁₁, ρ₁₂; MIT's Ω is 2Ω here; Γ is γ; ω₀ − ω_L is −δ (Lukin's δ = ν − ω). MIT's (1)–(2) then read ρ̇₂₂ = iΩ(ρ₂₁ − ρ₁₂) − γρ₂₂ and ρ̇₁₂ = −(γ/2 + iδ)ρ₁₂ − iΩ(ρ₂₂ − ρ₁₁), which are (3.86) and (3.88) with n̄ = 0 and Ω real (checked); state the mapping in `changes`. Part a's result becomes ρ₂₂ = |Ω|²/(δ² + γ²/4)·[1 + e^{−γt} − 2cos(δt)e^{−γt/2}] (MIT's ¼|Ω_MIT|² = |Ω|²), Γ → 0 limit 4|Ω|²sin²(δt/2)/δ²; part b's ρ₂₂ = |Ω|²t². MIT cites "API p. 359" (Cohen-Tannoudji, Atom-Photon Interactions): keep. Both parts derivations; the "Why?" questions get AI-marked answers.

Figure candidates (config): the Bloch vector shrinking into the sphere under γ and γ_d (pure on the surface, mixed inside, |ρ₁₂|² ≤ ρ₁₁ρ₂₂ visible), with ρ₂₂(t)'s damped Rabi oscillation settling to R_opt/(γ + 2R_opt) and saturating at ½ as Ω grows; one Sim, moving, sliders Ω, δ, γ_d (n̄ = 0). A still steady-state ρ₂₂ against δ for several Ω (power broadening) could be its still face.

Suspected errors (from the transcript): "Eq. (3.89)" for the three processes means (3.86)–(3.89) (link 3.86, name it); Eq. (3.95) prints ρ₁₂(δν) in the transform of ρ₂₁(t); Eq. (3.82) lacks dt' (kept); ∆ρ̂_S with a hat where tildes are meant in 3.4.1 (kept, no correction).

## For Chapter 6's chapter pass

Chapter 6's prep used stand-ins where it rests on this chapter. With Chapter 3 merged:
- `lindblad-master-equation` → prereq `generalized-master-equation` (the Ŝ_p sum with rates γ_p is what (6.1) writes in Lindblad form); drop the stand-in edge `lindblad-master-equation` ← `spontaneous-emission-rate`, which is then reached through generalized-master-equation → master-equation → thermal-field-correlator → spontaneous-emission-rate.
- `stochastic-master-equation` → `density-operator` is reached through lindblad-master-equation once the edge above exists: add it only if the Hasse check says it is not redundant (it will be).
- `effective-hamiltonian`, `quantum-jump` stay on `lindblad-master-equation`.
- `data-concept` spans in ch06's intro and 6.1–6.3: "master equation" → `master-equation` (or `generalized-master-equation` where (3.79)'s multi-channel form is meant; `lindblad-master-equation` for (6.1) itself), "density matrix" → `density-matrix`, "density operator" → `density-operator`, "reduced density operator" → `reduced-density-operator`, "Markov"/"Markovian" → `markovian-environment`.
- Variables rows: ρ̂_S → `rho_S` (reduced-density-operator), n̄ → `n_bar` (mean-thermal-photon-number), Ŝ_k → `S_hat` reusing the meaning 3.3 and 3.4 now share ("A general system operator, coupled bilinearly to a reservoir operator", 3.3's row the `redefines` against 3.1–3.2's "a system observable") with `ref` k (or a `redefines` row: in Chapter 6 the Ŝ_k are jump channels), ρ₂₂ → `rho_22` (population), γ_k may reuse `gamma_p`'s meaning (3.4: "The rate of the p-th system-reservoir interaction").
- Sign of Ω: Chapter 3 takes +ℏΩ|2⟩⟨1| in (3.84), opposite to 2.1; 3.4 notes it on (3.84) (`c-eq-3-84`). Chapter 6's Ω follows whichever its equations print; check before reusing 3.86–3.89.
- Checked current at Chapter 3's pass (2026-10-11): every concept id above exists and the chain generalized-master-equation → master-equation → thermal-field-correlator → spontaneous-emission-rate is merged; the stand-in edge lindblad-master-equation ← spontaneous-emission-rate is still in book.json, for Chapter 6's pass to drop.
- `non-hermitian-evolution` (6.3, ρ₂₂ leak) may take `density-matrix-populations` as prereq if not reached.

## Calls

- No new type. ρ̂, ρ̂_S, ρ̃ are `state`; ρ_nn and ρ₁₁, ρ₂₂ `population`; ρ_nm and ρ₁₂, ρ₂₁ `coherence`; γ₁₂, γ_d, R_opt, Γ₂₁, γ_p `rate`; Ĥ_SR, Ĥ_S, Ĥ_R `energy`; τ_c, τ_S, ∆t `time`; f(t) `frequency` (a random splitting over ℏ); n̄, Ŝ, F̂_R, σ_ij untyped ink.
- `master-equation` (3.3, the derived thermal two-level form 3.78) and `generalized-master-equation` (3.4, 3.79) are two concepts, since the book derives one and then states the other as its general form. If a reviewer prefers one, fold 3.79 into master-equation's forms.
- `open-system` sits in 3.2 though the intro first quotes "environment" and "reservoir": an intro page carries no coverage (as Chapter 6 did with monte-carlo-wavefunction).
- 3.4.2's "Example: The two-level atom" is a numbered subsection, not an example block (transcript note).
