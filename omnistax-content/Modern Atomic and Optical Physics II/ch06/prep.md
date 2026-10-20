# Chapter 6 prep

Rows staged in `ch06/book-rows.json`, merged (12 concepts, 6 symbols, 14 edges, Hasse-reduced). Forms carry ids `eq-6-N` (or `eq-6-<name>` for unnumbered expressions) and no anchors: each section adds its anchors with `ost set` once its `text.html` has ids. `chapter.json` has no variables rows: each section adds rows for the symbols it owns (`ost add lukin-amo-ii variables --chapter 6`, `ost meanings` first), linking `concept` only where the symbol names it. `ost check` errors until then only with "has the symbol …, which no variables row linked to it carries" (H_eff, c_hat_k, delta_p).

Chapter 3 (master equation, density operator, Liouvillian, Ŝ_k, n̄) was not merged when this prep ran. Wanted at the chapter pass, once it is: prereq edges `lindblad-master-equation` → Chapter 3's master-equation concept (and drop the stand-in edge to `spontaneous-emission-rate` if it then becomes redundant), `stochastic-master-equation` → the density-operator concept; `data-concept` spans on "master equation" and "density matrix" in the intro and 6.1–6.3; variables rows for ρ̂_S, n̄, Ŝ_k reusing Chapter 3's meanings.

## Intro (built)

`intro/text.html`, `intro/section.json`: the two opening paragraphs, verbatim, spans on monte-carlo-wavefunction, schrodinger-equation, two-level-atom, superposition, quantum-jump. Typo "continous" kept. "40^6 ~ 10^9" is a fair order of magnitude (4 × 10⁹): not a correction.

## 6.1 Formalism

Concepts (8): monte-carlo-wavefunction (idea), lindblad-master-equation (result, eq 6.1–6.4), effective-hamiltonian (definition, eq 6.7–6.9), quantum-jump (definition, "quantum jump" is the chapter's one quoted term; eq-6-jump, 6.19), jump-probability (definition, eq 6.14–6.16), no-jump-evolution (result, 6.17, 6.10), stochastic-master-equation (result, 6.21, 6.20), monte-carlo-procedure (skill, Table 6.1).

Symbols it owns (first variables row is 6.1's): H_eff → effective-hamiltonian (energy); c_hat_k → quantum-jump (untyped, ink: jump operators); delta_p → jump-probability (population; δp_{k,α} beside it); gamma_k (rate, row without concept, meaning "the rate of jump channel k"). Reuse: H (Ĥ_S, the system Hamiltonian, new meaning? judge with `ost meanings H`), psi, t, gamma. ρ̂_S and n̄ wait for Chapter 3 (above).

Exercises: none (no MIT problem maps to Chapter 6).

Figures: none in the book. Table 6.1 kept as the book's table. Candidate Sim: the Table 6.1 procedure on the 6.2 two-level example, one trajectory's ρ₂₂ (or |⟨2|ψ⟩|²) with its jumps beside the average of N trajectories converging on e^{−γt}; moving, transport, slider N and |a₂|²; the plan judges whether it lives here or in 6.2.

Suspected errors (from the transcript notes): Eq. (6.10)–(6.16) write the unnormalized state without the tilde the next sentence gives it ("Note that $|\tilde\psi_\alpha(t+\delta t)\rangle$ is not normalized") — the tilde in that sentence is the slip; "corresponds the state" (missing "to", kept); Table 6.1 step (3): the no-jump test "δp_α < r" and the jump test on cumulative sums cannot both select as written (jump needs r < δp_α; channel K is selected by Σ_{k=1}^{K−1} ≤ r < Σ_{k=1}^{K}; the jumped state is |φ̃_{K,α}⟩); step (7) lacks the sum over the N trajectories.

## 6.2 Example: Decay of a two-level atom

Concepts (3): mcwf-two-level-decay (result, eq 6.26, 6.23, 6.24 — the forms are stored corrected: |a₂|², −iγ/2), null-measurement (idea), monte-carlo-use-cases (idea).

Symbols it owns: a_1, a_2 (amplitude, rows without concept or with `probability-amplitude`); delta_p reused (δp, no α); Delta redefined (`redefines`): in Eq. (6.24) Δ is the frequency of |2⟩ in the effective Hamiltonian (with ℏ = 1), not 2.1's beatnote; ĉ = |1⟩⟨2| reuses c_hat_k's meaning (ref the single channel); gamma reuses 2.3's spontaneous-emission-rate meaning.

Figure candidate: the no-jump excited population |a₂|²e^{−γt}/(|a₁|² + |a₂|²e^{−γt}) against e^{−γt} (still, slider |a₂|²), possibly the still face of the 6.1 Sim.

Suspected errors: Eq. (6.23) and (6.26) print |a₂²|, |a₁²| for |a₂|², |a₁|²; Eq. (6.24) has +iγ/2 where Eq. (6.7) gives −iγ/2 (only the minus decays); Eq. (6.25)'s right side lacks ⟨2|ψ⟩ (acts on the |2⟩ amplitude); "two level system" unhyphenated (kept).

## 6.3 Non-Hermitian evolution: Summary

Concepts (1): non-hermitian-evolution (idea; form eq-6-jump-weak ∫dt γρ₂₂ ∝ |Ω|²).

Symbols: none owned. Reuse Omega (rabi-frequency), gamma; ρ₂₂ waits for Chapter 3's population row (ρ_nn is `population` in COLOR.md).

Figure: none expected; the weak-drive leak could ride on the 6.2 figure. Suspected errors: none.

## Calls

- No new type. H_eff is `energy` (COLOR.md lists H_eff there); the jump operators ĉ_k are ink (COLOR.md: operators that are neither an observable of a type nor a state); δp is `population`.
- `monte-carlo-wavefunction` sits in 6.1, since an intro page carries no coverage, though the intro first names it.
- Stand-in prerequisite: `lindblad-master-equation` ← `spontaneous-emission-rate` until Chapter 3's master equation exists.
