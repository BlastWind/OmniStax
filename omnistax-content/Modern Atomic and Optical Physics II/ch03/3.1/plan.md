# Plan: 3.1 The density operator

Source: `source.md` (PDF pages 44–46, Eqs. 3.1–3.16, no figures, footnotes or numbered subsections). Planned and built in one go (config: no stops); this plan is left for review after.

## Blocks

3.1 has no numbered subsections; the two examples are its h2s after an opening block (config, book RULES Structure).

| id | `<h2>` | holds |
|---|---|---|
| `opening` | none | the density operator, Eq. 3.1, pure and mixed states, the three properties, Eqs. 3.2–3.5, the density matrix, Eqs. 3.6–3.9 |
| `example-1` | Example 1: Two-level atom in thermal equilibrium | Eqs. 3.10–3.12, the room-temperature scale, `sim-thermal` |
| `example-2` | Example 2: Radiation field in thermal equilibrium | Eqs. 3.13–3.16 |

Every numbered display is `div.equation` `eq-3-K` with `\tag{3.K}`; Eq. 3.4 keeps its `\underbrace`. The three properties and the two element cases stay indented "(1)", "(2)", "(3)" paragraphs (`prop-1`…`prop-3`, `populations`, `coherences`).

## Concepts (11, prep-merged; all introduced here)

| concept | introducing span |
|---|---|
| density-operator | `density-operator-def` ("The density operator for the system is") |
| pure-and-mixed-states | `pure-mixed` (the “pure state” / “mixed state” / “statistical mixture” paragraph) |
| density-operator-properties | `properties` ("several important properties") |
| density-operator-expectation | `expectation` ("Operator expectation values may be calculated directly from the density operator") |
| density-matrix | `density-matrix` ("The so-called density matrix") |
| density-matrix-populations | `populations` (case (1)) |
| density-matrix-coherences | `coherences` (case (2)) |
| coherence-bound | `maximal-coherence` (“maximal coherence”) |
| thermal-two-level-atom | `thermal-atom` |
| thermal-radiation-field | `thermal-field` |
| mean-thermal-photon-number | `bose-einstein` ("the average photon number obeys the Bose-Einstein distribution") |

`uses`: state-vector (opening), born-rule (`density-operator-def`), observable and expectation-value (`expectation`), two-level-dipole-operator (`coherences`), two-level-atom and probability-amplitude (`pure-density-matrix`), atomic-transition-frequency, two-level-atom and hamiltonian (`thermal-atom`), cavity-modes and creation-annihilation-operators (`thermal-field`).

Form anchors: `eq-3-K` → `3.1-eq-3-K`; `eq-3-hermitian` → `3.1-prop-1`; `eq-3-trace` → `3.1-prop-2`.

Concept spans, judged per mention: "density operator" (every mention naming the operator), “pure state”, “mixed state”, “statistical mixture” and their later plain uses ("a pure state", "an arbitrary mixed state", "a statistical mixture of photon number states"), "density matrix", "Diagonal elements"/"the diagonal elements" → populations, "Off-diagonal elements"/"off-diagonal components"/"the off-diagonal elements of the density operator" → coherences, “maximal coherence”, "expectation value(s)" → expectation-value, "a system observable" → observable, "the atomic dipole operator" → two-level-dipole-operator, "two-level atom" → two-level-atom, "transition frequency ω"/"the atomic transition frequency" → atomic-transition-frequency, "the equilibrium population" → populations, "A single mode" → cavity-modes, "the annihilation operator" → creation-annihilation-operators, "the average photon number" → mean-thermal-photon-number, "a vector in Hilbert space" → state-vector. Bare: "state" and "quantum states" in the general sense, "basis", "trace", "the temperature", "Fock states", "statistical mechanics", "completeness relation".

## Symbols and variables

`ost meanings` run for each. New rows in `chapter.json` (chapter 3):

| sym | concept | type | ref | meaning | anchor |
|---|---|---|---|---|---|
| rho_hat | density-operator | (state) | | The density operator of the system | eq-3-1 |
| rho_nn | density-matrix-populations | (population) | | The diagonal element of the density matrix: the probability of occupying the state abs n | populations |
| rho_nm | density-matrix-coherences | (coherence) | | The off-diagonal element of the density matrix between the states abs n and abs m | coherences |
| rho_11 | density-matrix-populations | (population) | lvl-1 | The population of the level abs 1 | eq-3-7 |
| rho_22 | density-matrix-populations | (population) | lvl-2 | The population of the level abs 2 | eq-3-7 |
| rho_12, rho_21 | density-matrix-coherences | (coherence) | | The coherence between the levels abs 1 and abs 2 | eq-3-7 |
| n_bar | mean-thermal-photon-number | (untyped) | | The mean number of photons in the thermal mode j | eq-3-16 |
| T | none | temperature | | The temperature | eq-3-10 |
| S_hat | none | untyped | | A system observable | eq-3-2 |

Reused meanings: psi (state vector, eq-3-1), H (the Hamiltonian, eq-3-10), omega (2.1's atomic transition frequency, `thermal-atom`), c_1, c_2 (2.1's rows with `ref` lvl-1, lvl-2, `pure-density-matrix`), nu (ν_j, 2.3's mode-frequency meaning, `redefines`, `thermal-field`).

Ink, no macro: p_α, |φ⟩, ρ_ij and c_i c_j* (generic indices), the book's unhatted ρ of case (2) and of "ρ² ≤ ρ", the hatted element of Eq. 3.14 (printed so; kept and set in ink rather than in the operator's state hue), â_j, k_B, ℏ, Tr.

## Referents

The two levels of the two-level atom, drawn by `sim-thermal` and named in Example 1's prose ("its ground state", "ground and excited states", the basis {|1⟩, |2⟩}). One group.

| id | label | figures |
|---|---|---|
| lvl-1 | the ground state \|1⟩ | sim-thermal |
| lvl-2 | the excited state \|2⟩ | sim-thermal |

## Figures

The book draws none in 3.1 (config). The one candidate passes the gate:

- sim-thermal · Sim · thermal-two-level-atom, mean-thermal-photon-number, thermal-radiation-field · variation by slider: the book says "the equilibrium population depends on the relative scale of the atomic transition frequency and the temperature" and leaves the reader to imagine the dependence; the slider k_BT/ℏω sweeps it, and the reader sees the populations of Eq. (3.12) go from all in |1⟩ toward the ½–½ mixture they approach but never pass, with the room-temperature scale of the text (k_BT/2πℏ ≈ 6·10¹² Hz) turned into the transition frequency each ratio means at 300 K; a choice swaps in Example 2's thermal mode, whose ladder of photon-number states fills geometrically (Eq. 3.14) and whose n̄ grows without bound, the contrast with the atom's ceiling at ½ that neither example states · arrows: symbolic only (the ℏω and k_BT brackets) · still: T and ω are parameters, nothing in thermal equilibrium has a clock · slider k_BT/ℏω (untyped ratio, 0.02 to 4, the bottom a 313 THz transition at 300 K, default 1 = the book's crossover scale; special 1, "k_BT = ℏω"), relabelled k_BT/ℏν_j for the mode; choice system (two-level atom · field mode), the atom's two levels being the mode's first two rungs, so rungs 2–7 fade in and out · headline: the populations (or n̄) and the transition frequency the ratio means at 300 K · graph beside (the ladder is vertical): ρ₁₁, ρ₂₂ against k_BT/ℏω, 0–4 by 0–1, with the dashed ½; for the mode n̄ against k_BT/ℏν_j, 0–4 by 0–4 (n̄ = 3.52 at the slider's top) · 2D (book RULES: level diagrams are 2D). Labels: |1⟩, |2⟩ on the atom's levels in their referent colours; the mode's rungs numbered n = 0…7 like ticks; the bar values are not drawn (eight on the mode, which exceeds six) and carry hover names; the remainder above n = 7 is one muted line. Readout: Eq. (3.12)'s ρ₂₂ with the live exponent and ρ₁₁ = 1 − ρ₂₂; for the mode n̄_j = Σ_n nρ_nn = 1/(e^{ℏν_j/k_BT} − 1), the relation the book means (correction 2). No note.

`draws`: population, energy, frequency, temperature.

### Extra sims (root 15), not built

- The coherence bound as a disc: ρ₁₁ on a slider and the coherence ρ₁₂ as a point in the complex plane confined to the disc |ρ₁₂|² ≤ ρ₁₁ρ₂₂, its rim the pure states. Not built: 3.4's Bloch-vector sim (config) shows the same bound as the ball inside the sphere, with the dynamics that move a state off the rim.

## Exercises

None: the book prints no invitation in 3.1 and no MIT 8.422 problem maps here (config). `exercise_notes` empty.

## Lead draft (AI-marked)

> The density operator, which describes a quantum system known only through the probabilities of its states: pure and mixed states, the properties every density operator has, how expectation values follow from it, the density matrix with its populations and coherences, and two systems in thermal equilibrium, a two-level atom and a mode of the radiation field.

## Objectives, summary, notes

Empty (config); `notes` empty: nothing left out.

## Book faults kept verbatim

- Case (2) prints ρ without its hat in ⟨n|ρ|m⟩; Eq. (3.14) hats the matrix element ρ̂^{(j)}_{nm}; "ρ² ≤ ρ" unhatted. Kept, no correction (prep).
- "T = 300K" (no space), "2x2 matrix", "Bose-Einstein". Kept.

## Corrections

| id | attaches to | the book prints | meant |
|---|---|---|---|
| `c-property-3` | `prop-3`, after the inequality | ⟨n\|ρ̂²\|m⟩ ≤ ⟨n\|ρ̂\|m⟩ for any \|m⟩, \|n⟩ | the inequality holds for the diagonal elements, ⟨n\|ρ̂²\|n⟩ ≤ ⟨n\|ρ̂\|n⟩ for any state \|n⟩ (ρ̂² ≤ ρ̂ as operators, since ρ̂'s eigenvalues lie between 0 and 1); off-diagonal elements are complex and not ordered. Equality for every \|n⟩ means ρ̂² = ρ̂, Tr ρ̂² = 1, a pure state, so the sentence after it stands |
| `c-eq-3-16` | `eq-3-16` | Σ_n ρ_nn | Σ_n nρ_nn: Σ_n ρ_nn = 1 by Property (2); with Eq. (3.14), Σ_n n e^{−nx}(1 − e^{−x}) = 1/(e^{x} − 1), x = ℏν_j/k_BT |

Checked and right: Eqs. (3.4)–(3.5) (the completeness relation), (3.11)–(3.12) (with Ĥ = ℏω|2⟩⟨2|), (3.14), (3.15) (⟨n|â_j = √(n+1)⟨n+1|), the 300 K scale (k_BT/h = 6.25·10¹² Hz).

## Wanted at chapter level

- None.

## Derivations

- 3.1 expectation value as a trace, (3.2)–(3.5) · score 1 · built as drv-expectation-as-trace, replacing (3.2)–(3.5) and the completeness sentence after them
- 3.1 Example 2, thermal occupation (3.14), (3.16) · score 5 · not built: a worked example substituting into the thermal state (3.13), and its sums are geometric series the notes never state
- 3.1 Example 1, (3.10)–(3.12) (not in the scan) · not built: a worked example substituting the two-level Hamiltonian into (3.10)
