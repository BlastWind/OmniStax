# Plan: 7.1 The adiabatic theorem for time-dependent Hamiltonians

Source: `source.md` (PDF pages 113–115, one numbered subsection, Eqs. 7.1–7.10, footnote 1, no figures, no run-in headings). Planned and built in one go (Chen approved building without stopping); this plan is left for review after.

## Blocks

The section opens with three paragraphs and Eqs. 7.1–7.6 before its one numbered subsection, which does not span it, so the opening is a block without a heading and 7.1.1 is the one `<h2>` (config). Every numbered display is `<div class="equation" id="eq-7-K">` with `\tag{7.K}`; (7.7) and (7.8), one aligned pair in the book, are two displays.

| id | `<h2>` | holds |
|---|---|---|
| `opening` | none | Eqs. 7.1–7.6, footnote 1 (Berry phase) |
| `adiabaticity` | 7.1.1 The condition for adiabaticity | Eqs. 7.7–7.10, the closing paragraph on the dynamical and geometric phases |

Citations linked in-page: "Eq. (7.3)" → `#eq-7-3`, "Eq. (7.4)" → `#eq-7-4`, "Eqs. (7.4,7.6)" → `#eq-7-4` and `#eq-7-6`, "Eq. (7.10)" → `#eq-7-10`. No wrong citations.

## Concepts (6, prep-merged)

| concept | introducing span |
|---|---|
| instantaneous-eigenstates | `instantaneous` (the first paragraph: "we can always find the instantaneous eigenstates and eigenvalues") |
| nonadiabatic-coupling | `eq-7-4` (the coupled amplitude equations; the term "off-diagonal couplings" is first written in 7.1.1 and wrapped there) |
| adiabatic-theorem | `adiabatic-limit` (the quoted “adiabatic” limit) |
| adiabaticity-condition | `eq-7-10` |
| dynamical-phase | `phases` (the quoted “dynamical” phase) |
| geometric-phase | `phases` (the quoted “geometric” or “Berry's” phase) |

`uses` rows: hamiltonian, schrodinger-equation, stationary-states (`instantaneous`); probability-amplitude (`eq-7-4`); state-vector (`perturbation`); hamiltonian (`adiabatic-limit`); instantaneous-eigenstates, nonadiabatic-coupling (`adiabatic-limit`); schrodinger-equation (`phases`).

Form anchors (`ost set … forms`): `eq-7-1`, `eq-7-2`, `eq-7-4`, `eq-7-6`, `eq-7-9`, `eq-7-10` → `7.1-eq-7-K`; `eq-7-dynamical-phase` → `7.1-phases`.

Concept spans judged per mention. Wrapped: "instantaneous eigenstates" and "the eigenstates" whose time dependence enters (7.3) (instantaneous-eigenstates); "Hamiltonian" wherever it names the system's Hamiltonian, constant or time-dependent (hamiltonian); "Schrödinger equation"/"Schrodinger equation" (schrodinger-equation); "an eigenstate" of a constant Hamiltonian and "an exact stationary state" (stationary-states); "probability amplitudes" (probability-amplitude); "off-diagonal couplings", "off-diagonal terms", "a weak coupling", "this coupling", "couplings" ∝ 1/τ (nonadiabatic-coupling); “adiabatic” limit, "adiabatically follow", "the adiabatic theorem" (adiabatic-theorem); "adiabaticity condition", "the adiabatic requirement" (adiabaticity-condition); "state vector" (state-vector); “geometric”/“Berry's” phase, "geometric phase", "Berry phase" in footnote 1 (geometric-phase); “dynamical” phase (dynamical-phase). Plain: "Hilbert space", "orthonormal basis", "approximately stationary" (an adjective, not the concept), "non-degenerate eigenstates" (a qualifier), "perturbation theory" (no concept), "coherent Hamiltonian evolution", "neglected diagonal terms", "such phases".

## Symbols and variables (chapter 7, section 7.1)

The staged `epsilon_k` (macro `\kepsk`, set as ϵ_k) could not carry ϵ_l, ϵ₁, ϵ_N, and no base letter for the amplitude existed (`c_n`, `c_k`, `c_1` all set their own subscript). Replaced, as the book does for ν_j and g_j, with base-letter symbols written with the index appended: `epsilon` (`\keps`, ϵ) and `c_inst` (`\kcinst`, c; not `c`, which the book will want for the speed of light). Nothing else used `epsilon_k`.

`ost meanings` run for each. Rows:

| sym | concept | type | meaning |
|---|---|---|---|
| `epsilon` | none | energy | The instantaneous eigenvalue ϵ_k(t) of the Hamiltonian Ĥ(t), indexed like its eigenstate |
| `c_inst` | probability-amplitude | (amplitude) | The probability amplitude c_l(t) of the state on the instantaneous eigenstate abs ϵ_l(t) |
| `omega` | none | frequency, `redefines` | The frequency ω_l = ϵ_l/ℏ of the instantaneous eigenstate abs ϵ_l, measured from ϵ_k |
| `tau` | none | time, `redefines` | The timescale on which the Hamiltonian changes (2.1's τ is a phase) |
| `H`, `psi`, `t` | reused meanings | | |

In ink: ℏ; the kets |ϵ_k⟩, |e_k⟩ (a ket is a state labelled by its eigenvalue, set plain as the book's basis kets are everywhere); the integration variable τ of the dynamical phase (a dummy time, not the timescale of the row); ψ⁽¹⁾'s superscript rides on `\kpsi`.

## Referents

None: no example or figure.

## Figures

None: the book draws none in 7.1. The adiabaticity condition gets its picture in 7.2's Figure 7.1 (config), where Ω, Δ and the sweep rate make ⟨ϵ_l|ϵ̇_k⟩ and ϵ_k − ϵ_l concrete; a generic N-level Sim here would show the same comparison with less meaning. `figures.js` is not written; `ai.figures` is empty.

## Extra sims (root 15, not built)

- Leakage against speed: a two-level Hamiltonian whose eigenbasis is turned through a fixed angle in time τ, |c_k|² at the end against ℏ|⟨ϵ_l|ϵ̇_k⟩|/|ϵ_k − ϵ_l| on a log axis; the reader sees leakage fall away once the ratio of (7.10) drops below one. Overlaps 7.2's Figure 7.1 sweep-speed slider, so offered only if 7.2's figure leaves it out.
- Berry phase on the Bloch sphere: a spin following a field carried round a cone, the geometric phase drawn as the enclosed solid angle beside the dynamical phase ∫ϵ_k dτ/ℏ. Goes beyond what the book derives (it neglects the Berry phase), so not offered for the page unless Chen wants it.

## Exercises

None: the section prints no invitation and no MIT 8.422 problem maps to Chapter 7 (config).

## Notes and corrections

Footnote 1 is a `footnotes` row of kind `book`, number 1, marker after "notational simplicity." Its "Berry phase" wraps geometric-phase.

One correction (verified):

| id | attaches to | the book prints | meant |
|---|---|---|---|
| `c-eq-7-9` | `eq-7-9` | the sum over l with no restriction | l ≠ k, as the text states before (7.7); the term l = k has a zero denominator |

Judged and not corrected: (7.7)–(7.8) write ω_l − ω_k where the surrounding text uses energies; with ω_l = ϵ_l/ℏ the equation is right as printed (ċ_l has the unit of a frequency) and only the notation is new. (7.5) writes for Ĥ(t) its diagonal form in the instantaneous eigenbasis; that is what the matrix notation means, not a slip. "Schrödinger" (pages 113–114) and "Schrodinger" (page 115) kept as printed; the dynamical phase's braces in the exponent kept.

## Objectives, summary, notes

Objectives and summary empty (config). `notes` empty: nothing left out.

## Lead draft (AI-marked)

> How a quantum state behaves when its Hamiltonian changes in time: the instantaneous eigenstates and the couplings their motion introduces, the condition under which a state prepared in one of them stays there, and the dynamical and geometric phases it picks up on the way.

## Wanted at chapter level

- The staged symbol `epsilon_k` became `epsilon` (`\keps`) in `ch07/book-rows.json`, and `c_inst` (`\kcinst`) was added; 7.2–7.4 should write a generic-index ϵ or c with these.
- `omega` in 7.1 is a `redefines` row (the eigenstate frequency ϵ_l/ℏ); `tau` likewise (the timescale of Ĥ). 7.4's τ (pulse timescale) can reuse 7.1's meaning.

## Derivations

- 7.1 the adiabatic theorem (7.1)–(7.10) · score 3 (printed block) · split at the book's prose into drv-adiabatic-amplitudes ((7.3), (7.4) from the Schrödinger equation and (7.1)–(7.2)) and, in 7.1.1, drv-adiabatic-condition ((7.7)–(7.10)); the sum over $l \neq k$ that (7.9) needs is that node's note, so c-eq-7-9 and its marker are gone. (7.5)–(7.6), the same equations as matrices, stay printed; "Here we have measured all the energies in reference to $\epsilon_k$" and the sentence naming the adiabaticity condition stay after the host. The links to (7.4) and (7.10) open their derivations
