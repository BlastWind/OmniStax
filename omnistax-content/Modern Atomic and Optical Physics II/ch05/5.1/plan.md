# Plan: 5.1 Raman transitions in the Λ level configuration

Source: `source.md` (PDF pages 83–92, Eqs. 5.1–5.45, Figures 5.2–5.3, no footnotes). Planned and built in one go (Chen approved building without stopping); this plan is left for review after.

## Blocks

The section opens with a paragraph before its first numbered subsection (config). The six numbered subsections are the `<h2>` blocks with the book's numbers; the run-ins are `<h3>` inside theirs.

| id | `<h2>` / `<h3>` | holds |
|---|---|---|
| `opening` | none | the opening paragraph (cites "Figure 9.3", meant 5.2) |
| `schrodinger` | 5.1.1 The Schrodinger equation approach | Eqs. 5.1–5.9, Figure 5.2 |
| `density-matrix-block` | 5.1.2 The density matrix approach | Eqs. 5.10–5.20 |
| `stochastic` | 5.1.3 The stochastic wavefunction method | Eqs. 5.21–5.30 |
| `large-detuning` | 5.1.4 Large detuning $\Delta$, weak $\Omega_1$ | Eqs. 5.31–5.36, Figure 5.3; h3 Dressed state interpretation (Eqs. 5.37–5.39) |
| `rabi-block` | 5.1.5 Large $\Delta$, arbitrary $\Omega_1$: Two-photon Rabi oscillations | Eqs. 5.40–5.41, `sim-two-photon-rabi` |
| `remarks` | 5.1.6 Remarks | h3 Generalization to many excited states (5.42); The influence of Doppler broadening (5.43–5.45); Phase sensitivity; Cascade and V-type transitions (cites "Figure 7.3", meant 5.1) |

Every numbered display is `<div class="equation" id="eq-5-K">` with `\tag{5.K}`; (5.20), an empty numbered row, is kept as an empty display with its tag. No prose citation of an equation by number in 5.1.

Wrong citations, kept as printed and linked to the figure meant (book RULES): "Figure 9.3" → `#fig-lambda` (Figure 5.2); "Figure 7.3" → `#5.intro-fig-raman-configs` (Figure 5.1, on the chapter's intro page). Each also carries a correction.

## Concepts (22, prep-merged)

| concept | introducing span |
|---|---|
| multiphoton-process-classes | `focus` (the opening paragraph, which narrows the intro's second class to the Λ system; the intro page carries no coverage) |
| lambda-system | `lambda-def` ("the three-level Λ system … in which a single excited state mediates transitions between two lower-energy states") |
| lambda-detunings | `detunings` ("the single-photon detunings Δ₁ and Δ₂ and the two-photon detuning δ = Δ₁ − Δ₂"); form `eq-5-detunings` anchors here |
| lambda-hamiltonian | `eq-5-1` |
| lambda-equations-of-motion | `eq-5-3` |
| effective-raman-coupling | `eq-5-9` |
| raman-transition | `raman` ("By absorbing a photon on transition ν₁ and emitting a photon of frequency ν₂ …") |
| lambda-density-matrix-equations | `eq-5-10` |
| complex-decay-rate | `eq-5-17` |
| lambda-non-hermitian-evolution | `eq-5-21` |
| weak-probe-solution | `eq-5-29` |
| probe-susceptibility | `eq-5-31` |
| two-photon-resonance | `two-photon-res` ("the two-photon resonance", the sentence after 5.35) |
| two-photon-detuning-shifted | `eq-5-35`; form `eq-5-delta-prime` anchors there |
| raman-unitarity-limit | `eq-5-36` |
| raman-dressed-states | `dresses` (the quoted “dresses”) |
| two-photon-rabi-oscillations | `eq-5-41` |
| many-excited-states-raman | `eq-5-42` |
| doppler-free-raman | `doppler-free` ("The Doppler-free two-photon resonance") |
| raman-phase-insensitivity | `phase-sensitivity` |
| three-level-configurations | `configurations` ("Other three-level configurations") |
| cascade-two-photon-differences | `cascade` |

`uses` rows: schrodinger-equation and probability-amplitude (`eq-5-3`), adiabatic-elimination (`eq-5-6`), rabi-frequency (`eq-5-9`), density-matrix and lindblad-master-equation (`eq-5-10`), coherence-decay-rate (`eq-5-17`), monte-carlo-wavefunction, effective-hamiltonian and quantum-jump (`eq-5-21`), jump-probability (`eq-5-22`), susceptibility (`eq-5-31`), unitary-limit (`eq-5-36`), dressed-states (`dresses`), ac-stark-shift (`eq-5-42`), doppler-broadening (`doppler`), spontaneous-emission (`cascade`). Every form gets its `anchor`: `5.1-eq-5-K`, `eq-5-detunings` → `5.1-detunings`, `eq-5-delta-prime` → `5.1-eq-5-35`.

Concept spans judged per mention. Wrapped: "Λ system"/"lambda system" (lambda-system); "Raman transition", "Raman process" (raman-transition); "single-photon"/"two-photon detuning(s)" (lambda-detunings); "effective Rabi frequency" (effective-raman-coupling); "Schrodinger equation" (schrodinger-equation; the non-Hermitian one effective-hamiltonian's sense stays with "non-Hermitian Hamiltonian"); "density matrix" (density-matrix); "Louvillian operators" (lindblad-master-equation, misspelt as printed); "stochastic wavefunction method" (monte-carlo-wavefunction); "quantum jump(s)" (quantum-jump); "adiabatic elimination" (adiabatic-elimination); "linear susceptibility" and "the susceptibility" of the probe (probe-susceptibility); "two-photon resonance" (two-photon-resonance); "unitarity limit" (unitary-limit, the general limit of 4.2); "cross-section" (absorption-cross-section); "dressed state picture" (dressed-states); “dresses” (raman-dressed-states); "Rabi oscillations" (two-photon-rabi-oscillations in 5.1.5, where they are the two-photon ones); "dephasing", "decoherence" (dephasing-rate); "Stark shifts" (ac-stark-shift); "Doppler broadening" (doppler-broadening); "Doppler-free" (doppler-free-raman); "cascade system", "V-type" (three-level-configurations); "master equation" (master-equation); "spontaneous emission" (spontaneous-emission); "probability amplitudes"/"population amplitudes" (probability-amplitude); "Hamiltonian" (hamiltonian; "non-Hermitian Hamiltonian" effective-hamiltonian); "coherence ρ₂₁" (density-matrix-coherences); "two-level system" (two-level-atom). Plain: "simple" (not 1.1's quoted sense), "resonance" alone, "decay rate" (no concept fits the partial rates), "excited state", "radiatively broadened", headings.

## Symbols and variables (chapter 5, section 5.1)

`ost meanings` run for each. New rows: Delta_1 → lambda-detunings (ref field-1); Delta_2 → lambda-detunings (ref field-2); delta → lambda-detunings, redefines (two-photon detuning); Delta → lambda-detunings, redefines (the common far detuning Δ₁ ∼ Δ₂ = Δ; in 5.1.2 the book sets Δ = Δ₁); Omega_1, Omega_2 → rabi-frequency (a variant names its base quantity, root 6), ref field-1, field-2; Omega_eff → effective-raman-coupling; c_3 → lambda-equations-of-motion (ref lvl-3); Gamma_12 → complex-decay-rate; Gamma_13 → complex-decay-rate; gamma_3 → lambda-non-hermitian-evolution (ref lvl-3); chi_1 → probe-susceptibility (ref field-1); gamma_eff → two-photon-resonance; delta_prime → two-photon-detuning-shifted; omega, type frequency, redefines (the Fourier frequency of 5.26–5.27). Reused meanings: c_1 (ref lvl-1), psi, H, H_eff, t, nu, k, lambda, rho_11 (ref lvl-1), rho_21, gamma_12. Own meanings, redefines: c_2 (the lower state |2⟩ of the Λ system, ref lvl-2), mu (the probe transition's dipole element), gamma (the partial decay rate |3⟩ → |1⟩, rate). P_jump → jump-probability (6.1's concept, whose symbol row is `delta_p`; P_jump has no row yet).

In ink, no symbol row: ρ₃₁, ρ₁₃, ρ₃₂, ρ₂₃, ρ₃₃, γ₁₃, γ₂₃, γ₂, γ̃, γ′, Γ₂₃, γ₋, ω₁₃, ω₂₃, the velocity **v**, the Liouvillians and σ_ij (operators, book RULES). Wanted at chapter level below.

## Referents

One group: the Λ scheme's three levels and its two fields (COLOR.md). Marked in prose where the text names the state or the field (inline maths wrapped), never inside display equations. The dressed |±⟩ of 5.1.4 are drawn by no figure, so they are not referents and stay ink.

| id | label | figures |
|---|---|---|
| lvl-1 | the ground state \|1⟩ | fig-lambda, sim-two-photon-rabi |
| lvl-2 | the metastable state \|2⟩ | fig-lambda, sim-two-photon-rabi |
| lvl-3 | the excited state \|3⟩ | fig-lambda, sim-two-photon-rabi |
| field-1 | the probe field Ω₁, ν₁ | fig-lambda, sim-two-photon-rabi |
| field-2 | the coupling field Ω₂, ν₂ | fig-lambda, sim-two-photon-rabi |

## Figures

Units: the book gives no numbers. Figure 5.3 measures every frequency in units of γ₁₃ (so γ₁₃ = 1); the Rabi Sim in units of γ₃ and time in 1/γ₃.

- fig-lambda · Figure 5.2 · lambda-system, lambda-detunings, lambda-hamiltonian · standardisation only (the book's scheme in house style, its levels and fields in the referent colours the prose and the Rabi Sim share) · arrows: symbolic (the field arrows, the detuning intervals, the decay squiggles are notation) · still: config's faithful level diagram; the detunings as variables are Figure 5.3's and the Sim's · no controls · headline none · graph none · 2D (book RULES: level diagrams). Kind `figure`. Labels as the book: |1⟩ |2⟩ |3⟩, Ω₁ ν₁, Ω₂ ν₂, Δ₁ = ν₁ − ω₁₃, Δ₂ = ν₂ − ω₂₃, δ = Δ₁ − Δ₂; hover names on each.
- sim-raman-absorption · Figure 5.3 · probe-susceptibility, two-photon-resonance, two-photon-detuning-shifted, raman-unitarity-limit, raman-dressed-states · variation by slider: Im(ρ₃₁/Ω₁) from Eq. (5.32), exact, against the probe detuning Δ₁; the reader sees the narrow two-photon peak sit at the light-shifted δ = |Ω₂|²/Δ beside the absorption zero at δ = 0, narrow as Δ₂ grows (γ_eff ∝ 1/Δ²) while its height stays the single-photon peak's at γ₁₂ = 0 (5.36), and fall once γ₁₂ competes; the book's one curve is the default · arrows: symbolic (the peak markers) · still: Δ₂, |Ω₂|, γ₁₂ are parameters, not a clock · sliders Δ₂ (frequency, 3 to 12 γ₁₃, default 6), |Ω₂| (coupling, 0 to 2 γ₁₃, default 1.5; special 0, no coupling field), γ₁₂ (rate, 0 to 0.2 γ₁₃, default 0, the book's; special 0, no dephasing) · headline states where the two-photon peak sits, its width and its height against the single-photon peak · graph alone: absorption Im(ρ₃₁/Ω₁)·γ₁₃, 0 to 1.2, against Δ₁, −6 to 16 γ₁₃, fixed (the farthest peak the sliders reach is Δ₁ ≈ 12.3); the peak is sampled densely about its centre · 2D. Labels: "single-photon resonance ν₁ = ω₁₃" and "two-photon resonance" on the peaks as the book; hover names on both peaks and the zero at δ = 0. Readout: γ_eff of Eq. (5.35) as (5.34) and (5.39) give it (correction below), with the live numbers; note: Δ ≈ Δ₂ near the peak and the unit.
- sim-two-photon-rabi · Sim · two-photon-rabi-oscillations, effective-raman-coupling, lambda-non-hermitian-evolution · animation and variation: the populations of |1⟩, |2⟩, |3⟩ under Eqs. (5.23)–(5.25), integrated in full (γ₂ = 0, the two-photon detuning held on the light-shifted resonance δ = (|Ω₂|² − |Ω₁|²)/Δ), flop between |1⟩ and |2⟩ at |Ω_eff| = |Ω₁Ω₂|/Δ while |3⟩ stays nearly empty and the jump probability (5.22) climbs slowly; raising Δ slows the flopping as 1/Δ but the jumps as 1/Δ², the section's closing claim, which the text states only in words · arrows: kinematic (population flowing between the levels, drawn as the discs on the level panel filling and emptying), symbolic (the field arrows) · moving: time runs 0 to 20/γ₃; transport · sliders |Ω₁| (coupling, 0 to 10 γ₃, default 6; special at |Ω₂|, the equal pair Ω₁ ∼ Ω₂), |Ω₂| (coupling, 0 to 10 γ₃, default 6; special at |Ω₁|), Δ (frequency, 20 to 100 γ₃, default 60) · headline: Rabi cycles completed so far and the jump probability · graph beside a vertical scene: the Λ level panel left with a population disc on each level, populations p₁, p₂ (referent colours) and P_jump (dashed ink) against t right, 0 to 1, fixed · 2D. Readout: Eq. (5.9) with the live |Ω_eff|; note: the two conditions of (5.40) at the live t.

`draws`: fig-lambda `frequency`, `coupling`, `rate`; sim-raman-absorption `susceptibility`, `frequency`, `coupling`, `rate`; sim-two-photon-rabi `coupling`, `frequency`, `population`, `time`. No facts or conventions (the generic Λ atom has no element).

### Extra sims (root 15), not built

- Doppler-free Raman: an atom's velocity slider shifts δ by (k₁ − k₂)·v for co- and counter-propagating beams, the two-photon line staying put for co-propagating near-equal frequencies while the single-photon lines sweep; and the cascade case where counter-propagating cancels. The text's argument is short and the plot would be one line shifting.
- Dressed levels |±⟩ against Δ with their |3⟩ fraction and widths γ₃ and γ₋ (5.37–5.39): 2.1's dressed Sim already shows the mixing; this adds the width only.

## Exercises

None (config: no MIT 8.422 problem maps to Chapter 5; the section prints no invitation).

## Lead draft (AI-marked)

> Two fields joining two lower levels through one excited level: the Λ system's equations in the Schrodinger, density-matrix and stochastic-wavefunction pictures, the effective Raman coupling far from resonance, the probe's two-photon resonance and its dressed-state reading, two-photon Rabi oscillations, and how many excited states, Doppler shifts, phases and other configurations change the picture.

## Corrections (footnotes rows, kind `correction`)

| id | marker after | the book prints | meant |
|---|---|---|---|
| c-fig-9-3 | "Figure 9.3" (opening) | Figure 9.3 | Figure 5.2 |
| c-eq-5-20 | (5.20) | the number on an empty line | no equation is missing |
| c-schrodinger | "$i\hbar|\psi\rangle = \hat{H}_\mathrm{eff}|\psi\rangle$" after (5.21) | iℏ\|ψ⟩ = Ĥ_eff\|ψ⟩ | iℏ(d/dt)\|ψ⟩ = Ĥ_eff\|ψ⟩ |
| c-eq-5-35 | (5.35) | (γ₁₂/2) + (γ₁₃/2)(\|Ω₂\|²/Δ²) | γ₁₂ + γ₁₃\|Ω₂\|²/Δ², the real part of (5.34)'s denominator, as (5.39) agrees |
| c-real-complex | "real and complex parts" | complex | imaginary |
| c-fig-7-3 | "Figure 7.3" (Cascade) | Figure 7.3 | Figure 5.1 |

Checked and not corrected: the brace labels of (5.24)–(5.27), Γ₁₂ on γ₂/2 − iδ and Γ₁₃ on γ₃/2 − iΔ₁, agree with (5.17)–(5.18) in the radiative limit the book states in 5.1.2 (γ_ij is half the sum of the decay rates out of |i⟩ and |j⟩, so γ₁₂ = γ₂/2 and γ₁₃ = γ₃/2); (5.36)'s 2i/γ₃ is i/γ₁₃ in that limit. Kept as printed with no note (typos): "Louvillian" (twice), "will account for from |3⟩ to |1⟩" and "to |1⟩ rate γ′" (missing words), "singe-photon", "typcially".

## Objectives, summary, notes

`objectives` and `summary_html` empty (the book prints neither). `notes` empty.

## Wanted at chapter level

- Figure 5.3 is built here as its own Sim (`sim-raman-absorption`, number 5.3, in 5.1.4 where the book prints it and the text derives it). 5.2's EIT Sim should then fold Figures 5.4 + 5.5 only (number 5.4, folds 5.5); 5.2's prose never cites 5.3. If the chapter pass prefers the config's three-way fold in 5.2, this Sim gives up its number and 5.1's "Figure 5.3" block would point there.
- Symbols for the ink quantities: rho_31 (coherence), gamma_13 (rate; γ₁₃ is Figure 5.3's unit and Eq. 5.35's), gamma_2 (rate), v (velocity) — staged in `ch05/book-rows.json`, then 5.1's variables rows and macros.
- The prep's re-point: `lambda-density-matrix-equations` from the stand-in `lindblad-master-equation` to Chapter 3's `master-equation` (now merged).
- `jump-probability` (6.1) has `delta_p` as its symbol; P_jump of Eq. (5.22) is the jump probability itself (5.1 links its row there).

Decided at the chapter pass: Figure 5.3 stays here as `sim-raman-absorption` and 5.2 folds 5.4 + 5.5. rho_31, gamma_13 and v are book symbols now (gamma_2 already was), with 5.1's variables rows; the text and figures write them as macros. The edge from `lambda-density-matrix-equations` now goes to `master-equation`, and `complex-decay-rate` takes `coherence-decay-rate` as a prerequisite. P_jump stays with 6.1's `jump-probability`. (5.21) carries the ℏ correction `c-eq-5-21`, as 5.2's (5.48) does.

## Derivations

- 5.1.1 the effective two-level system (5.3)–(5.9) · score 2 (printed block) · built as drv-raman-coupling ((5.6)–(5.9)); (5.1)–(5.5) stay as the facts
- 5.1.2 the density-matrix equations of the Λ system (5.10)–(5.16) · score 7 · built as drv-lambda-density-matrix, one node per element (5.12)–(5.16); (5.10) and (5.11) stay printed, (5.10) with its correction c-eq-5-10, which the first node's note repeats because the work follows the corrected equation
- 5.1.3 the weak-probe solution (5.21)–(5.30) · score 4 (printed block) · built as drv-weak-probe-coherences ((5.28)–(5.30), the 2×2 solve inserted); (5.21)–(5.27) stay as the facts
- 5.1.4 the two-photon resonance (5.31)–(5.36) · score 2 (printed block) · built as drv-probe-response ((5.32), (5.33)) and, past the book's paragraph, drv-raman-resonance ((5.34), (5.35)); the halves the book prints in (5.35) are that node's note. (5.36), the unitary-limit value, is two moves after the book's own prose: not built
- 5.1.4 dressed-state interpretation (5.37)–(5.39) · score 6 · not built: (5.39) is the width of (5.35) reached a second way, built there; (5.37)–(5.38) are the first-order dressed states, two hidden moves each, below the bar; c-eq-5-38 stays on (5.38)
- 5.1.5 two-photon Rabi oscillations (5.40)–(5.41) · score 3 · not built: three hidden moves, below the bar
