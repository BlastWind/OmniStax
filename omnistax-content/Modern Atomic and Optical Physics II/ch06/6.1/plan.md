# Plan: 6.1 Formalism

Source: `source.md` (PDF pages 107–110, Eqs. 6.1–6.21, Table 6.1, no footnotes, no figures). Planned and built in one go (config: no stops); this plan is left for review after.

## Blocks

One block, `formalism`, no `<h2>` (config: no numbered subsections or run-ins; the book marks no boundary before Table 6.1, so the section is not split). Every numbered display is `<div class="equation" id="eq-6-K">` with `\tag{6.K}`; Eq. (6.6) keeps the book's three lines as one `aligned` display under one tag. Citations ("Eq. (6.1)", "Eq. (6.8)", "Eq. (6.21)", "Table (6.1)") link to their targets. Table 6.1 is a `div.book-table` (id `table-6-1`), eyebrow "Table 6.1", title "Monte Carlo Procedure", one column of the seven steps.

## Concepts (8, prep-merged)

| concept | introducing span |
|---|---|
| lindblad-master-equation | `eq-6-1` |
| effective-hamiltonian | `effective-hamiltonian` ("an effective Hamiltonian") |
| quantum-jump | `quantum-jump` (the quoted “quantum jump”) |
| jump-probability | `eq-6-14` |
| no-jump-evolution | `eq-6-17` |
| stochastic-master-equation | `eq-6-21` |
| monte-carlo-wavefunction | `statistical-picture` ("This statistical picture of a state vector evolution"): the intro page names it first but carries no coverage |
| monte-carlo-procedure | `table-6-1` |

`uses`: master-equation, hamiltonian and reduced-density-operator (`eq-6-1`), schrodinger-equation (`eq-6-9`), expectation-value (`eq-6-14`), state-vector and density-matrix (`statistical-picture`). Chapter 3's concepts were merged by its prep while this section was being built, so its master-equation, density-matrix, reduced-density-operator and mean-thermal-photon-number are used directly rather than left for the chapter pass. Form anchors `6.1-eq-6-K`; `eq-6-jump` → `6.1-jump-state` (the inline |φ_{k,α}⟩ = ĉ_k|ψ_α⟩).

Concept spans, judged per mention: "most general form of/for a master equation" → lindblad-master-equation (it names the general form); "Liouvillian operator" → lindblad-master-equation; every "effective Hamiltonian" and the "effective Hamiltonian is not Hermitian" → effective-hamiltonian; both quoted “quantum jump” and the verb "jumps" in outcome (2) → quantum-jump; "never jumped" → no-jump-evolution; "Schrodinger equation" (twice) → schrodinger-equation; "state vector" → state-vector; "probability interpretation" → stochastic-master-equation; "sample algorithm" and the table title → monte-carlo-procedure. Every other "master equation" → master-equation (Chapter 3's); "density matrix" (the statistical-picture sentence, step 7) → density-matrix. Bare: "normalized", "decay and absorption terms".

## Symbols and variables

`ost meanings` run for each. Rows for 6.1: H_eff → effective-hamiltonian (anchor `eq-6-7`'s span `effective-hamiltonian`); c_hat_k → quantum-jump (ink, anchor `eq-6-2`); gamma_k (rate, no concept, "the rate of jump channel k", anchor `eq-6-2`); delta_p → jump-probability (anchor `eq-6-15`); new symbol `delta_p_k` (δp_{k,α}, `\kdeltapk`, population) → jump-probability (anchor `eq-6-14`), staged through `ost add … symbols --chapter 6`, since `\kdeltap` is δp_α with its α built in and the text writes δp_{k,α} fifteen times. Reused meanings: H (Ĥ_S, "The Hamiltonian of the system": the same quantity), psi, t, and for the Sim p_2 (born-rule, no ref: 6.1 has no level referents), Omega, gamma (2.3's spontaneous emission rate). Chapter 3's symbols, merged mid-build: rho_S → reduced-density-operator ("The reduced density operator of the system", \krhoS) and n_bar → mean-thermal-photon-number ("The mean number of thermal photons in a mode of the reservoir", \knbar), 6.1 rows worded here since no Chapter 3 section has a row yet. Ink, no symbol: p_α, Ŝ_k, ĉ_{2k}, |φ_{k,α}⟩, the random number r, N. δt is written δ\kt.

## Referents

None. The text names no particular level; the Sim's |1⟩ and |2⟩ are named in its caption and hover names only.

## Figures

The book draws none. Table 6.1 is the book's table, kept.

- sim-monte-carlo · Sim · monte-carlo-procedure, monte-carlo-wavefunction, stochastic-master-equation, quantum-jump · value add: animation and variation: the procedure is a process in time, and the reader sees what the text asks them to imagine: each trajectory evolving under Ĥ_eff and jumping to |1⟩ at a random step, and the average of N trajectories settling onto the master-equation curve as N grows (step (7)); with a resonant drive, each trajectory keeps oscillating, interrupted by jumps, while the average damps, which no still and no sentence of the text shows · arrows: none (a jump is a dashed drop of the trajectory's curve) · moving: the clock runs t from 0 to 4/γ, every curve drawn up to now; transport · sliders N (untyped, 1–300, default 30, detents 1, 10, 100), p₂(0) (population, 0–1, default 0.5: the equal superposition of the chapter's opening), |Ω| (coupling, 0–3γ, default 0, special 0 "no drive": the decay of 6.2's example) · headline: how many quantum jumps among N trajectories by now · graph alone: p₂ against t, 0–4/γ and 0–1, fixed, a legend at the right · 2D. Model: a two-level atom, one channel ĉ = |1⟩⟨2| at rate γ, Ĥ_S = −ℏΩ(|2⟩⟨1| + |1⟩⟨2|) on resonance; the Table's step (3) run literally with γδt = 0.005 and a seeded random number per step, so changing a slider reshapes the same trajectories and raising N keeps the first ones. The master-equation curve is Eq. (6.1) integrated (RK4) for the same ĉ. Labels: a legend of the four curve kinds (trajectories, followed trajectory, average of N, master equation); the faint further trajectories, the moving dot and the curves' current points carry hover names. Readout: step (7) with the live average, (1/N)Σ|⟨2|ψ̃_n(t)⟩|² = value; note: the master equation's ⟨2|ρ̂_S(t)|2⟩ at the same t. Checked offline: at N = 3000 the average stays within 0.013 of the master equation for every slider setting tried. `draws` population, coupling, time, rate, state.

Where it lives: here, since it is Table 6.1's procedure; it runs on 6.2's example only as its Ω = 0 state. 6.2's candidate (the no-jump population of Eq. 6.26 against e^{−γt}, still) shows the no-jump curve's slower decay with a slider on Δ that this Sim lacks; the chapter pass decides whether 6.2 still builds it (wanted below).

### Extra sims (root 15), not built

- Step size: the same trajectories with a slider on γδt, showing the average drift off the master equation when δp_α is no longer small, the reason the Table asks for "an appropriate time interval δt".

## Exercises

None (config: no MIT problem maps to Chapter 6; the section prints no invitation).

## Lead draft (AI-marked)

> The most general form of the master equation, the effective Hamiltonian, quantum jumps and the probability of each in a small time step, and the Monte Carlo procedure that evolves a state vector in place of the density matrix.

## Objectives, summary, notes

`objectives`, `summary_html`, `notes` empty (nothing left out).

## Book faults kept verbatim

"corresponds the state" (missing "to"), "Schrodinger", "Table (6.1)".

## Corrections (`correction` rows)

| id | marker after | the book prints | meant |
|---|---|---|---|
| c-tilde | "Note that $\|\tilde\psi_\alpha(t+\delta t)\rangle$" | a tilde on the state that is not normalized | the state of Eq. (6.10), without the tilde; the tilde marks the normalized state of Eq. (6.17). Config listed this as "6.10's missing tilde"; Eqs. (6.10)–(6.16) are consistent without one and (6.17) defines it, so the slip is the sentence's tilde and the marker stands there |
| c-table-step-3 | step (3)'s "$\|\tilde\phi_{k,\alpha}\rangle$" | the jumped state with a lower-case k the test does not fix | the test Σ_{k=1}^{K}δp_{k,α} ≤ r < Σ_{k=1}^{K+1}δp_{k,α} (K from 0, an empty sum zero) selects channel K+1, so the state is \|φ̃_{K+1,α}⟩. Prep suspected the two tests of step (3) cannot both select; they are complementary (no jump when δp_α < r, a channel when r ≤ δp_α), so the label is the only slip |
| c-table-step-7 | step (7)'s formula | ρ̂_S(t) = Σ_α p_α\|ψ_α(t)⟩⟨ψ_α(t)\|/N, divided by N but summed over the initial states only | the sum runs over the N trajectories of each initial state as well |

## Wanted at chapter level

- Chapter 3 (merged by its prep mid-build): prereq edges lindblad-master-equation → master-equation (dropping the stand-in to spontaneous-emission-rate if it becomes redundant) and stochastic-master-equation → density-operator; the 6.1 variables rows for rho_S and n_bar should be checked against the meanings Chapter 3's sections give them; Ŝ_k of Eqs. (6.3)–(6.4) stays ink unless Chapter 3 adds a symbol for it.
- 6.2's no-jump figure overlaps this Sim's Ω = 0 state (above).
- `delta_p_k` is a new book symbol staged by 6.1; 6.2's δp (no α) may reuse `delta_p` or want its own.

## Derivations

- 6.1 the Monte Carlo wavefunction decomposition (6.5)–(6.21) · score 3 (printed block) · split at the book's prose and definitions into five: drv-master-equation-pure-states ((6.5), (6.6)), drv-effective-hamiltonian-master-equation ((6.8), after the definition (6.7)), drv-no-jump-norm ((6.11)–(6.13), from (6.10)), drv-no-jump-probability ((6.16), after the definitions (6.14)–(6.15)) and drv-jump-decomposition ((6.20), (6.21)). (6.1)–(6.4), (6.7), (6.9), (6.10), (6.14), (6.15) and (6.19) stay as the facts. (6.17), one division of (6.10) by the root of (6.16), and (6.18), one line of two equalities, are single printed equations below the bar: not built. The links to (6.8) and (6.21) open their derivations
