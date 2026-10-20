# Plan: 6.3 Non-Hermitian evolution: Summary

Source: `source.md` (PDF page 111, two paragraphs, no numbered equations, no footnotes, no figures). Planned and built in one go (config: no stops); this plan is left for review after. "Summary" is the book's section title: the section is a page with its text, not a `summary_html` (config).

## Blocks

One block, `non-hermitian-summary`, no `<h2>` (config: no numbered subsections or run-ins). The inline integral ∫dt γρ₂₂ ∝ |Ω|² is span `jump-weak`, the anchor of the form `eq-6-jump-weak` (`6.3-jump-weak`). The section cites no equation by number.

## Concepts (1, prep-merged)

| concept | introducing span |
|---|---|
| non-hermitian-evolution | `non-hermitian-evolution` ("in the limit that quantum jumps are very improbable, one might hope to accurately model a system using only the non-Hermitian Hamiltonian evolution") |

`uses`: monte-carlo-wavefunction (`stochastic-method`), effective-hamiltonian and quantum-jump (`two-parts`), two-level-atom and rabi-frequency (`weak-drive`), master-equation and density-matrix-populations (`missing-term`).

Concept spans, judged per mention: "stochastic wavefunction method" → monte-carlo-wavefunction; "effective, non-Hermitian Hamiltonian", "The non-Hermitian Hamiltonian" (its interpretation), "the non-Hermitian Hamiltonian" (equations of motion obtained from it) → effective-hamiltonian; every "quantum jump(s)" (five) → quantum-jump; "non-Hermitian Hamiltonian evolution", "non-Hermitian Schrodinger equation", "effective Schrodinger equation" → non-hermitian-evolution (its terms); "two-level system" → two-level-atom; "master equation" → master-equation. Bare: "numerical algorithms" (any algorithm, not the Table 6.1 procedure in particular), "imaginary parts to the energy", "finite lifetime", "ground state", "excited state", "decay", "non-Hermitian terms", "loss", "probability slowly leaks".

## Symbols and variables

`ost meanings` run for each; all reuse an earlier meaning, no new symbol:

- Omega → rabi-frequency, "The Rabi frequency Ω = ℰμ/ℏ", anchor `6.3-weak-drive`
- gamma → spontaneous-emission-rate, 2.3's meaning
- rho_22 → density-matrix-populations, "The population of the level |2⟩" (no `ref`: the section has no referents)
- rho_11 → density-matrix-populations, "The population of the level |1⟩"
- psi (state-vector) and t (time), for the Sim

Prep said ρ₂₂ waits for Chapter 3; Chapter 3's `rho_22` and `rho_11` are merged now, so the rows are written here.

## Referents

None: |1⟩ and |2⟩ are named by their symbols only, as in 6.1 and 6.2.

## Figures

The book draws none.

- sim-weak-leak · Sim · non-hermitian-evolution, effective-hamiltonian · value add: variation by slider: the section's claim is a limit ("very improbable", "to lowest order in the applied field", "during the time interval under consideration"), and the reader sees it hold and fail: a two-level atom driven on resonance from |1⟩, evolved by the effective Hamiltonian alone (solid) and by the master equation (dashed), with the probability that has leaked, 1 − ⟨ψ̃|ψ̃⟩ = ∫γρ₂₂dt, shaded up to the chosen time. At weak |Ω| the curves lie together and the shading is thin; raise |Ω| or lengthen the interval and ρ₁₁ without jumps falls away from the master equation's, the one missing term, as the leak grows. Neither 6.1's Sim (trajectories with jumps) nor 6.2's (no drive) shows the leak against |Ω| · arrows: none · still: each curve is the whole history in t, the interval is a slider, and nothing has a clock the reader must watch · sliders |Ω| (coupling, 0–0.5γ, default 0.05γ, a weak field), t (time, 0–10/γ, default 5/γ, the interval under consideration) · headline: the probability leaked by t and the two ρ₁₁ at t · graph alone: populations against t, 0–10/γ and 0–1, fixed; legend at the right (non-Hermitian, master equation, leaked); ρ₁₁ and ρ₂₂ labelled once each near t = 0, where they are always apart · 2D. Model as 6.1's: Ĥ_S = −ℏΩ(|2⟩⟨1| + |1⟩⟨2|), ĉ = |1⟩⟨2| at rate γ, ℏ = 1, both equations RK4 at γδt = 0.01. Readout: ∫₀ᵗγρ₂₂dt′ = 1 − ⟨ψ̃|ψ̃⟩ = value (exact for Ĥ_eff); note: the leak over |Ω|² beside its |Ω| → 0 limit (9.2 against 9.3/γ² at the defaults, 3.9 against 28.1/γ² at |Ω| = 0.5γ, t = 10/γ), the ∝ |Ω|² holding to lowest order only. Checked offline: leak and integral agree to 10⁻⁴; at |Ω| = 0.05γ, t = 5/γ the leak is 0.023, ρ₁₁ 0.969 against 0.992. `draws` population, coupling, time, rate.

### Extra sims (root 15), not built

None: Chapter 6's other views are 6.1's and 6.2's Sims.

## Exercises

None (config; the section prints no invitation).

## Lead draft (AI-marked)

> When a system may be treated by the non-Hermitian Hamiltonian alone, leaving out the quantum jumps, and what that treatment of a weakly driven two-level atom misses.

## Objectives, summary, notes

`objectives`, `summary_html`, `notes` empty (nothing left out).

## Book faults kept verbatim

"Schrodinger" (twice).

## Corrections

None. The integral ∫dt γρ₂₂ ∝ |Ω|² holds to lowest order, as the sentence says, and the missing term is the γρ₂₂ refilling ρ₁₁ in the master equation.

## Wanted at chapter level

- The Sim stands where the config expected none: the chapter pass may judge it against 6.2's Sim (6.2 has no drive, so the leak against |Ω| is new here).
