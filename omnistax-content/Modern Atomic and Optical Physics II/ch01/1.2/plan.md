# Plan: 1.2 Review of quantum mechanics

Source: `source.md` (PDF pages 8–10, six numbered subsections, Eqs. 1.1–1.13, no figures, footnotes or run-in headings).

## Blocks

The six numbered subsections are the `<h2>` blocks under the book's own titles (config). Each numbered display equation is a `div.equation` with id `eq-1-K` and `\tag{1.K}`, so the book's numbers stay and a citation from 1.3 or later can link to it (book RULES, Apparatus).

| id | `<h2>` | holds |
|---|---|---|
| `states` | 1.2.1 States | Eq. 1.1, c_n, P_n |
| `superpositions` | 1.2.2 Superpositions - Interference | Eqs. 1.2–1.4 |
| `observables` | 1.2.3 Observables | Eqs. 1.5–1.8 |
| `uncertainty-principle` | 1.2.4 Uncertainty principle | Eqs. 1.9–1.10 |
| `schrodinger-picture` | 1.2.5 Time evolution: Schrodinger’s picture | Eqs. 1.11–1.12, Û(t) |
| `heisenberg-picture` | 1.2.6 Time evolution: Heisenberg picture | Eq. 1.13 |

## Concepts (merged, 14 rows; forms gain anchors)

| id | introducing span | uses |
|---|---|---|
| `state-vector`, `probability-amplitude`, `born-rule` | `states` | |
| `superposition` | `superpositions` | `probability-amplitude`, `born-rule` |
| `observable`, `expectation-value` | `observables` | `state-vector`, `born-rule` |
| `commutator`, `heisenberg-uncertainty-principle` | `uncertainty-principle` | `expectation-value` |
| `hamiltonian`, `schrodinger-equation`, `stationary-states`, `evolution-in-energy-eigenbasis`, `time-evolution-operator` | `schrodinger-picture` | `state-vector`, `probability-amplitude` |
| `heisenberg-picture` | `heisenberg-picture` | `observable`, `commutator`, `hamiltonian` |

Form anchors set in `ch01/book-rows.json` and merged: `eq-1-K` → `1.2-eq-1-K`; the inline forms `eq-cn`, `eq-pn` → `1.2-states`, `eq-stationary`, `eq-u` → `1.2-schrodinger-picture`.

## Symbols and variables

`ost meanings` found no earlier row for any. Rows added to `chapter.json`:

| sym | concept | type | meaning |
|---|---|---|---|
| `psi` | `state-vector` | (state) | the state vector of the system |
| `c_n` | `probability-amplitude` | (amplitude) | the expansion coefficient of the state on the basis state abs n |
| `P_n` | `born-rule` | (population) | the probability of finding the system in the basis state |
| `H` | `hamiltonian` | (energy) | the Hamiltonian of the system |
| `E_n` | none | energy | the energy of the n-th eigenstate of the Hamiltonian |
| `t` | none | time | time |

Untyped and in ink, no macro: Ô and 𝒪_n (observable, eigenvalue: the observable is of no one type), Â, B̂, Ĉ, ΔA, Û(t), the basis kets |n⟩, ℏ. The book's lowercase p_n in Eq. 1.8 is its own spelling of P_n and is kept as printed, in ink. Superscripted variants c_n^(1), P_n^(1) and ψ₁, ψ₂ use the base macros.

## Referents

None: no example or figure.

## Colour

Spans per the 2026-10-11 rule: "state vector" and "the state |ψ⟩" → `state-vector`; "expansion coefficients", "amplitudes" → `probability-amplitude`; "probability of finding/being in" → `born-rule`; "superposition(s)", "interference term" → `superposition`; "Observables"/"observable" → `observable`; "expectation value" → `expectation-value`; "do no commute" → `commutator`; "Heisenberg’s uncertainty principle" → its concept; "Hamiltonian" → `hamiltonian`; "Schrodinger’s equation" → `schrodinger-equation`; "stationary solutions", "eigenstates of Ĥ" → `stationary-states`; "time evolution operator" → `time-evolution-operator`; "Heisenberg’s equation of motion" → `heisenberg-picture`. "basis state", "eigenstate of Ô", "system" and "states of the Hilbert space" in the general sense stay bare.

## Figures

None (config allows none; no book figure).

## Extra sims (root 15)

- Superposition as two phasors (1.2.2): c_n⁽¹⁾ and c_n⁽²⁾ as arrows in the complex plane, a relative-phase slider, P_n against the phase beside the dashed ½(P_n⁽¹⁾ + P_n⁽²⁾); the reader sees the interference term swing P_n above and below the classical sum. Not built.

## Exercises

None: 1.2 prints no question and no MIT 8.422 problem maps to Chapter 1.

## Objectives, summary, notes

Empty (config). `notes` empty: nothing left out.

## Lead draft (AI-marked)

> A short review of the quantum mechanics the course rests on: the state vector and its expansion in a basis, superposition and interference, observables and the uncertainty principle, and how a system evolves in time in Schrodinger's and in Heisenberg's picture.

## Book typos kept

- "do no commute" (1.2.4); "in the the basis" (1.2.5); "explicitely" (1.2.6); "Schrodinger" without umlaut throughout.
- Eq. 1.10 prints ½⟨[Â, B̂]⟩ without the modulus; kept as printed.

## Wanted at chapter level

- None. (Chapter pass: the h2s take the book's numbers, "1.2.1 States", as in all of Chapter 1.)

## Derivations

- (1.7) ⇒ (1.8), the expectation value in the eigenbasis (not in the scan) · score 1 · not built: one printed implication, a single line rather than a chain
