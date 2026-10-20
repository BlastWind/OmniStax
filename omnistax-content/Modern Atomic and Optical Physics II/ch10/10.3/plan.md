# Plan: 10.3 Quantum state engineering

Source: `source.md` (PDF pages 226–228, Eqs. 10.27–10.30, no figures, no footnotes). Planned and built in one go (config: Chen approved building without stopping); this plan is left for review after.

## Blocks

| id | `<h2>` | holds |
|---|---|---|
| `opening` | none | the opening paragraph and Eq. (10.27) |
| `arbitrary-state` | 10.3.1 Preparation of an arbitrary motional quantum state | Eq. (10.28); h3 "Two simple examples" (Eqs. 10.29–10.30); h3 "Procedure" (steps (1)–(3) as the book's numbered paragraphs, the closing sentence), then `sim-state-prep` |

Step (3) breaks across pages 227–228; it is set as one paragraph. Every display is `<div class="equation" id="eq-10-K">` with `\tag{10.K}`.

## Concepts (4, prep-merged)

| concept | introducing span |
|---|---|
| motional-state-engineering | `arbitrary` ("engineer an arbitrary motional state") |
| pulse-sequence-unitary | `unitary-series` ("a series of unitary transformations linking these two states") |
| internal-motional-swap | `swap` ("swapping information between the internal and external degrees of freedom") |
| motional-state-preparation | `procedure` ("Our procedure works by systematically emptying population from the N-th rung …") |

Form anchors: `eq-10-K` → `10.3-eq-10-K` for 10.27–10.30.

`uses` rows, on the blocks: ion-hilbert-space, probability-amplitude, fock-states, coherent-state, squeezed-state, schrodinger-cat-state (`opening`); sideband-couplings, atomic-transition-frequency, pulse-area, probability-amplitude, motional-state-engineering, pulse-sequence-unitary (`arbitrary-state`).

Concept spans, judged per mention: "Fock states", "coherent states", "squeezed states", "Schrodinger cat states" wear their Chapter 9 concepts; ""a series of unitary transformations" pulse-sequence-unitary; "the bare resonance frequency", "the bare atomic frequency" atomic-transition-frequency (they name the frequency the laser is tuned to; the carrier referent marks the tuning); "bare and sideband transitions" sideband-couplings (the concept is the carrier and sideband couplings together); "the red sideband" sideband-couplings (as 10.2 marks it); "a π pulse", "a π-pulse" pulse-area (as 2.1 marks "π pulses"); "coefficients" probability-amplitude; "the internal and motional state of a trapped ion" ion-hilbert-space; "arbitrary motional state" and "arbitrary motional quantum state" motional-state-engineering. Plain: "quantum states" in general, "quantum gates" (10.4 names gates; here only a purpose), "ion trap architecture", "harmonic oscillator", "ground state" in the procedure sentence (the motional ground state, which no concept names), "unitary transformations are invertible" (the general property).

## Symbols and variables

`ost meanings` run. Rows for 10.3, all reusing earlier meanings: `c_n` (amplitude, → probability-amplitude), `psi` (state, → state-vector), `Omega` (coupling, → rabi-frequency, 10.2's meaning) and `t` (time) for the figure's caption and readout, and `phi` (phase), the laser's phase on the pulse, a new meaning (`redefines`). The Lamb-Dicke η is untyped and in ink (plain `\eta`, book RULES). |i⟩, |f⟩, U_k, α, β, N and the kets stay in ink: α and β are the amplitudes of a two-level superposition, written as the book writes them, and no row is staged for them (Wanted at chapter level).

## Referents

Ids and labels as 10.2 has them, one group.

| id | label | figures |
|---|---|---|
| lvl-g | the ground state \|g⟩ | sim-state-prep |
| lvl-e | the excited state \|e⟩ | sim-state-prep |
| carrier | the transition on the bare resonance, \|g⟩\|n⟩ → \|e⟩\|n⟩ | sim-state-prep |
| red-sb | the red sideband, \|g⟩\|n⟩ → \|e⟩\|n−1⟩ | sim-state-prep |

Marked in prose: a ket written alone as |g⟩… or |e⟩… (|g⟩|N⟩, |e⟩|N−1⟩, the |g⟩ ⊗ |0⟩ of |i⟩) wears its level; a superposition of the two levels is left unmarked; "the red sideband" wears red-sb; "the bare resonance frequency", "the bare atomic frequency" wear carrier. Never inside a display.

## Figures

The book draws none. One Sim passes the gate (root 24.3): the procedure is eight pulses on a ten-level ladder, and the reader must imagine each pulse moving population on every rung at once, which is where the book's step (1) goes wrong (Corrections).

- sim-state-prep · Sim · motional-state-preparation, pulse-sequence-unitary, internal-motional-swap, motional-state-engineering · animation and variation: the populations of |g⟩|n⟩ and |e⟩|n⟩, n = 0 to 4, flow pulse by pulse from a chosen |ψ⟩ (N = 4) down to |g⟩|0⟩, so the reader sees each red-sideband pulse move every pair |g⟩|n⟩ ↔ |e⟩|n−1⟩ at its own ηΩ√n, not just the top one, and from the second round on find |e⟩|N−1⟩ already filled; with the pulses fixed as π pulses the run fails and leaves population high on the ladder, while pulses whose area and phase are chosen from the whole state (Law and Eberly) end in |g⟩|0⟩; the book states the steps in words and gives no picture · arrows: symbolic (each pulse's pair couplings, red-sideband diagonals and bare-resonance rungs, drawn while the pulse acts, the top pair bold); the population moving between levels is kinematic (book RULES) and sets the moving tier · moving: a story slider (root 25, manim-style 6), stops 0 to 8, one per pulse ("red 4", "bare 3", … "bare 0"), linear within a pulse because a pulse's fraction is its time; the story's transport; scrubbing back is the inverse run that builds |ψ⟩ · choices: target |ψ⟩ (Fock |4⟩ · coherent · cat · squeezed, default coherent; the book's list, each cut at N = 4 and renormalised: α = 1, an even cat of α = 1.2, squeezed vacuum of r = 0.6), red pulse (area from the state · π pulse, default the first; a discrete state, root 26.1) · headline: the pulse now running, what it empties, and how much its partner already holds; at the end, how much reached |g⟩|0⟩ · graph beside (the ladder is a vertical scene): the eight pulse areas ∫|Ω|dt as bars, 0 to π/2, in the red-sb or carrier colour, done filled, current filling, planned hollow, with the π pulse (area π/2 in the book's convention of 2.1) dashed · 2D (a level diagram, book RULES). Labels: column heads |g⟩|n⟩ and |e⟩|n⟩ in referent colours, n = 0…4 as a scale at the left, a population scale (0, 1) under each column, pulse numbers under the bars; every rung and bar named by hover with its population or area. Readout: the running pulse's area and phase, ηΩ√n t or Ωt with live numbers, and at the end |⟨g|⟨0|U₈⋯U₁|ψ⟩|² with its value. Model: H = ℏηΩ√n(e^{iφ}|e⟩|n−1⟩⟨n|⟨g| + h.c.) on each red-sideband pair and ℏΩ(e^{iφ}|e⟩⟨g| + h.c.) on each bare-resonance pair (the corrected (10.24) up to the phase of |e⟩), Lamb-Dicke regime, no decay, sidebands resolved.

`draws`: coupling, phase, population. No facts or conventions (the ion has no element).

### Extra sims (root 15), not built

- The forward run as a picture of Eq. (10.28): the same eight pulses inverted and applied to |g⟩|0⟩, the phonon distribution |c_n|² growing into the target; the story scrubbed backwards already shows it.

## Exercises

None (prep, config).

## Lead draft (AI-marked)

> How laser pulses on the bare resonance and the red sideband can take a trapped ion from its ground state to any chosen state of its motion, from a single swap of the internal state onto the motion to a procedure that builds an arbitrary superposition of Fock states rung by rung.

## Objectives, summary, notes

`objectives` and `summary_html` empty. `notes` empty.

## Book faults kept verbatim

- "whether these these techniques" (doubled word).
- "Schrodinger" without the umlaut.
- "π-pulse" in step (1) beside "π pulse" in the example.

## Corrections

Checked numerically (`check_procedure.py`, a random state with N = 4): with fixed π pulses on the red sideband and fitted bare-resonance pulses the run ends with 0.60 of the population in |g⟩|0⟩; with areas and phases chosen from the whole state it ends with 1.00. Before the second, third and fourth red pulses |e⟩|N−1⟩ held 0.07, 0.33 and 0.01.

| id | attaches to | the book prints | note |
|---|---|---|---|
| c-step-1 | after "into the initially empty state \|e⟩\|N−1⟩" | a π-pulse into an initially empty \|e⟩\|N−1⟩, repeated | True on the first round only. The red-sideband pulse also turns every lower pair \|g⟩\|n⟩ ↔ \|e⟩\|n−1⟩ at its own ηΩ√n, and the bare-resonance pulse of step (2) mixes \|g⟩\|n⟩ with \|e⟩\|n⟩ on every rung, so on later rounds \|e⟩\|N−1⟩ already holds amplitude and a π pulse would swap it back into \|g⟩\|N⟩. The pulse that empties \|g⟩\|N⟩ has the area and phase that rotate the pair's two amplitudes onto \|e⟩\|N−1⟩, worked out from the whole state at that round (C. K. Law and J. H. Eberly, Phys. Rev. Lett. 76, 1055 (1996)); it is never longer than a π pulse. |
| c-step-2 | after "determine the pulse length" | the pulse length | The length alone is not enough: \|g⟩\|N−1⟩ already holds amplitude, and the bare-resonance pulse empties \|e⟩\|N−1⟩ into it only when the laser's phase is chosen too, so that the two amplitudes add on \|g⟩\|N−1⟩. |

## Wanted at chapter level

- α and β of Eqs. (10.29)–(10.30) are probability amplitudes and could wear the amplitude type through a new symbol (the key `alpha` is Chapter 4's absorption coefficient); left in ink here.
- The referents lvl-g, lvl-e, carrier, red-sb reuse 10.2's ids and labels.

## Derivations

- 10.3.1 the preparation of an arbitrary motional state (Procedure) · score 2 · not built: a prose algorithm with no equations (the orchestrator's ruling for this book).
- 10.3.1 the swap (10.29) → (10.30) by a red-sideband π pulse · not in the scan · not built: a stated effect of one pulse, no equations worked.
