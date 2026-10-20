# Plan: 6.2 Example: Decay of a two-level atom

Source: `source.md` (PDF pages 110–111, Eqs. 6.22–6.26, no footnotes, no figures). Planned and built in one go (config: no stops); this plan is left for review after.

## Blocks

One block, `two-level-decay`, no `<h2>` (config: no numbered subsections or run-ins; the numbered list (1)–(2) is the book's paragraphs, kept). Every numbered display is `<div class="equation" id="eq-6-K">` with `\tag{6.K}`. The section cites no equation by number.

## Concepts (3, prep-merged)

| concept | introducing span |
|---|---|
| mcwf-two-level-decay | `eq-6-26` |
| null-measurement | `null-measurement` ("*not* detecting a photon is also a measurement on the system") |
| monte-carlo-use-cases | `use-cases` ("it is advantageous to use the Monte Carlo method for simulations when") |

`uses`: monte-carlo-wavefunction (opening sentence, span `mcwf-method`), two-level-atom and pure-and-mixed-states (`initial-state`), quantum-jump and jump-probability (`eq-6-22`), effective-hamiltonian (`eq-6-24`), monte-carlo-procedure (`mc-average`), density-matrix and master-equation (`use-cases`). Form anchors: eq-6-26, eq-6-23, eq-6-24 → `6.2-eq-6-K`.

Concept spans, judged per mention: "Monte Carlo Wavefunction method", "statistical wavefunction approach" → monte-carlo-wavefunction; "two level system" → two-level-atom; "pure state" → pure-and-mixed-states; "superposition state" → superposition; "jumps" (out of the superposition) and "collapse" (into the ground state) → quantum-jump; "the probability to emit a photon" (δp) → jump-probability; "emit(s) a photon" elsewhere (the finite probability, Carmichael's question, "never emits a photon") → spontaneous-emission; "the probability to be in the excited state", "the probability to be in state |2⟩" → born-rule; "average population in the excited state" → density-matrix-populations; "effective Hamiltonian" → effective-hamiltonian; "effective Schrodinger equation" → non-hermitian-evolution (its glossary term; 6.3 introduces it, so no coverage row here); "Monte Carlo algorithm", "Monte Carlo Wavefunction algorithm" → monte-carlo-procedure; "density matrix calculations" → density-matrix; "master equation" → master-equation. Bare: "decays at a rate", "excited state", "ground state", "normalization", "Hilbert space", "feedback", "trajectories", "a method of last resort".

## Symbols and variables

`ost meanings` run for each. New symbol `delta_p_atom` (δp, `\kdeltapatom`, no α): `\kdeltap` is δp_α with its α built in, and the section's δp has none; staged with `ost add … symbols --chapter 6`. Rows for 6.2:

- a_1 → probability-amplitude (amplitude), "The amplitude of |1⟩ in the initial state |ψ(0)⟩ = a₁|1⟩ + a₂|2⟩", anchor `6.2-initial-state`
- a_2 → probability-amplitude, "The amplitude of |2⟩ in the initial state |ψ(0)⟩ = a₁|1⟩ + a₂|2⟩", anchor `6.2-initial-state`
- delta_p_atom → jump-probability, "The probability that the decaying two-level atom jumps out of its state in the time δt", anchor `6.2-eq-6-22`
- Delta → detuning, `redefines`, frequency, rad/s, "The detuning of |2⟩: its frequency in the effective Hamiltonian of the decaying two-level atom, with ℏ = 1", anchor `6.2-eq-6-24`
- reused meanings: H_eff (effective-hamiltonian), gamma (2.3's spontaneous emission rate), psi, t, p_2 (born-rule, the Sim's axis and readout).

Ink, no symbol: ĉ = |1⟩⟨2| (written `\hat{c}`, a jump operator, untyped as `c_hat_k` is; `\kchatk` would print the subscript k the section does not write). δt is written δ\kt.

## Referents

None. As in 6.1, the text names |1⟩ and |2⟩ only as states of the equations, and the Sim draws no levels.

## Figures

The book draws none.

- sim-no-jump · Sim · mcwf-two-level-decay, null-measurement · value add: variation by slider, and a view 6.1's Sim lacks: 6.1 shows trajectories and their average, but never the no-jump curve of Eq. (6.26) on its own nor why it averages back to e^{−γt}. Here the reader sees three exact curves: |⟨2|ψ̃(t)⟩|² for an atom that has emitted no photon, the chance |a₁|² + |a₂|²e^{−γt} that none has come (the squared norm in Eq. (6.26)'s denominator), and their product |a₂|²e^{−γt}, the average; dragging |a₂|² shows the no-jump curve lagging the average ever more as |a₂|² grows, both reaching half their start on one dashed level at two marked times, and at |a₂|² = 1 the no-jump curve flat at 1 (an atom that starts in |2⟩ and emits nothing stays there), the limit of the book's "always end up in |1⟩" · arrows: none · still: each curve is the whole history in t, so no clock is needed and 6.1's Sim already runs the process in time · slider |a₂|² (population, 0–1, default 0.5, the equal superposition of 6.1's Sim) · headline: the time the no-jump population takes to fall to half its start, against ln 2/γ for the average · graph alone: p₂ against t, 0–5/γ and 0–1, fixed, legend at the right · 2D. Labels: a legend of the three curves; hover names on the two half-time points. Readout: Eq. (6.26)'s population with the live |a₁|², |a₂|²; note: the product with the no-photon chance equals the average. Δ is not a slider: it turns only the phase of a₂, so no population curve would move (root 26.6). `draws` population, amplitude, rate, time.

### Extra sims (root 15), not built

- Feedback: 6.1's trajectories with a drive switched on at each detected photon, the measurement-dependent feedback of use (2), showing the average depart from any master-equation curve.

## Exercises

None (config; the section prints no invitation).

## Lead draft (AI-marked)

> The Monte Carlo wavefunction method applied to a two-level atom that decays from a superposition: the probability of a jump in a small time step, the state of an atom that emits no photon, what not detecting a photon does to that state, and when the method is worth using.

## Objectives, summary, notes

`objectives`, `summary_html`, `notes` empty (nothing left out).

## Book faults kept verbatim

"two level system", "Schrodinger".

## Corrections (`correction` rows)

| id | marker after | the book prints | meant |
|---|---|---|---|
| c-eq-6-24 | Eq. (6.24) | +(iγ/2)ĉ†ĉ | −(iγ/2)ĉ†ĉ, as Eq. (6.7) gives with ℏ = 1; only the minus sign makes the amplitude of \|2⟩ decay as Eqs. (6.25)–(6.26) say |
| c-eq-6-25 | Eq. (6.25) | d/dt\|ψ⟩ = −(γ/2 + iΔ)\|2⟩ | −(γ/2 + iΔ)\|2⟩⟨2\|ψ⟩: the right side acts on the amplitude of \|2⟩, which is what Eq. (6.26) solves |

Not a correction, against config and prep: Eqs. (6.23) and (6.26) print |a₂²| and |a₁²|, which equal |a₂|² and |a₁|² for any complex amplitude (|z²| = |z|²); only the notation differs from the denominator's |a₂|²e^{−γt}, so no marker is set. The forms in `book.json` keep the |a|² spelling.

## Wanted at chapter level

- Symbol `delta_p_atom` (δp without α) is new, staged by this section; the chapter pass may prefer another name.
- Config listed 6.23/6.26's |a²| as misprints; this section sets no correction for them (above).

## Derivations

- 6.2 the no-jump trajectory of a decaying two-level atom (6.22)–(6.26) · score 3 (printed block) · split at the book's prose into drv-two-level-jump-probability ((6.23) from (6.22), which stays printed) and drv-no-jump-two-level-state ((6.25) from (6.9) and (6.24), then (6.26)); (6.24) stays printed with c-eq-6-24 and the derivation works the corrected sign with a note; c-eq-6-25 (the missing amplitude) is the node's note, its row and marker gone. The ensemble average "one can show" decays as $e^{-\gamma t}$ is three hidden moves, below the bar: not built
