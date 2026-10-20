# Plan: 2.2 Bound to Continuum Transitions

Source: `source.md` (PDF pages 30–33, Eqs. 2.42–2.54, no figures, footnote 2). checkprose clean. Planned and built in one go (Chen approved the chapter without stopping); this plan is left for review after.

## Blocks

The book prints no subsection and no run-in heading in 2.2, so the page is one block with no heading (config; book RULES: nothing invented).

| id | heading | holds |
|---|---|---|
| `continuum-block` | none | all the prose, Eqs. 2.42–2.54, footnote 2 at the block's end, `sim-continuum-decay` after the last paragraph |

Every display is `<div class="equation" id="eq-2-K">` with `\tag{2.K}`. The one citation, "Eq. (2.47)", links to `eq-2-47`. Footnote 2 is `<sup>2</sup>` after "δ_k." and `<p><small><sup>2</sup>…</small></p>` closing the block, as the other books set footnotes.

## Concepts (7, staged by prep)

| concept | introducing span |
|---|---|
| bound-continuum-transition | `bound-continuum` (the first "bound to continuum transitions") |
| memoryless-continuum | `memory` (the sentence with “memory”) |
| principal-value-identity | `eq-2-49` |
| continuum-decay-rate | `decay` (the paragraph naming the decay at rate γ and the shift Δ_Stark) |
| fermi-golden-rule | `golden-rule` (first "Fermi’s Golden Rule") |
| continuum-stark-shift | `stark` (“AC Stark effect associated with continuum states”) |
| outgoing-wavepacket | `wavepacket` ("an outgoing wavepacket propagating away from the atom") |

Form anchors (`ost set … forms`): eq-2-42, 44, 45, 47, 49, 50, 51, 52, 54 → `2.2-eq-2-K`; eq-2-decay → `2.2-decay-law` (the paragraph with c₁(t) and p₁(t)).

`uses` rows: rotating-wave-approximation, rotating-frame, rabi-frequency (model paragraph); two-level-atom, schrodinger-equation, probability-amplitude, state-vector (eq-2-43); detuning (`detunings`); ac-stark-shift (`stark`); rabi-oscillations, superposition (`wavepacket`); born-rule (`decay-law`); lamb-shift is a forward mention ("e.g. Lamb shift"), wrapped as a span and given no coverage row.

Concept spans, judged in their sentences: "continuum" alone, naming the continuum of unbound states in general, wears `bound-continuum-transition` (its glossary term); "continuum states" or "unbound states" naming the model's |k⟩ wear the referent instead. "population decay", "decay rate", "the decay", "decay terms" wear `continuum-decay-rate`; "energy shift" naming Δ_Stark wears `continuum-stark-shift`, and so does "AC Stark effect associated with continuum states" and "the AC Stark shift" of sub-threshold light; "the sign of the AC Stark effect changes with the sign of the detuning" is the light shift of 2.1, `ac-stark-shift`. "an identity from complex analysis" is `principal-value-identity`. "an initial wavepacket" (the incoming one of a capture) stays plain; "freely propagating wavepacket" is `outgoing-wavepacket`. Plain: "equations of motion", "first order perturbation theory", "photoionization", "principal value".

## Symbols and variables

`ost meanings` run for every symbol below: none has a row yet in Chapter 2 (2.1 is built in parallel). Rows for 2.2:

| sym | concept / type | ref | anchor |
|---|---|---|---|
| H | hamiltonian (1.2's meaning) | | eq-2-42 |
| nu | optical-frequency | | `model` |
| omega_k | type frequency, no concept | continuum-k | `model` |
| Omega_k | rabi-frequency | continuum-k | `model` |
| psi | state-vector (1.2's meaning) | | eq-2-43 |
| c_1 | probability-amplitude | bound-1 | eq-2-43 |
| c_k | probability-amplitude | continuum-k | eq-2-43 |
| delta_k | detuning | continuum-k | `detunings` |
| t | type time (1.2's meaning) | | eq-2-46 |
| gamma | continuum-decay-rate | | `decay` |
| Delta_Stark | continuum-stark-shift | | `decay` |
| p_1 | born-rule | bound-1 | `decay-law` |

c_k links `probability-amplitude` as c₁ does (prep listed it as a typed row only; the amplitude of |k⟩ is the same concept as c_n of 1.2). ω_k is the frequency of the level |k⟩, which no concept names. ε (the infinitesimal), 𝒫 and the box size L stay ink.

## Referents

COLOR.md: the levels of a scheme are referents. One group, both drawn by the Sim and marked in the one block.

| id | label | figures | marked in text |
|---|---|---|---|
| bound-1 | the bound state \|1⟩ | sim-continuum-decay | "a single bound state", "the ground state by \|1⟩", "the bound state \|1⟩", "the ground state" (×6, in "ground state amplitude", "starts out in the ground state", "the ground state population" and so on) |
| continuum-k | the continuum states \|k⟩ | sim-continuum-decay | "the excited states by \|k⟩", "each bound state \|k⟩", "continuum states", "the set of states \|k⟩", "the unbound states", "the excited state" of c_k |

The subscripts of c₁ and p₁ wear bound-1, those of c_k, Ω_k, ω_k, δ_k wear continuum-k (variables `ref`).

## Figures

The book draws nothing in 2.2. One Sim passes root 24's gate: the section's lesson is a process in time (a population leaving |1⟩ for good, unlike Rabi flopping), and the reader would otherwise have to imagine the continuum amplitudes of Eq. (2.54) filling in as |c₁|² empties.

- sim-continuum-decay · Sim · continuum-decay-rate, outgoing-wavepacket, bound-continuum-transition · flow by animation and variation by slider: as time runs, p₁ = e^{−γt} falls on the left while the same population piles into the continuum on the right, |c_k|² of Eq. (2.54) drawn as one bar per discretized level |k⟩ at its δ_k, at first spread thin over many detunings and then settling onto the Lorentzian |Ω_k|²/(γ²/4 + δ_k²) of full width γ; the slider shows a faster decay leaving a broader, lower peak, which the still equations leave to the imagination · arrows: none · moving: the idea has a clock (t, 0 to 8 μs in 5 s, hold 1.2 s); the transport is the figure's one timeline · slider γ (rate, 0.5–2 μs⁻¹, default 1; no book number, so units are chosen to make e-folding times of a few μs), no special value (the text's γ = 0 is the sub-threshold case, which this flat continuum cannot show, since there |Ω_k| at resonance would vanish rather than the resonant states) · headline names the peak's width at the live γ · graphs beside: left p₁(t) (solid) and Σ|c_k|² = 1 − p₁ (dashed), both drawn faint in full and bold up to the live t; right |c_k|² against δ_k, −6 to 6 μs⁻¹, 81 levels spaced 0.15 μs⁻¹ (recurrence time 2π/0.15 ≈ 42 μs, beyond the window, so the box is a continuum here), |Ω_k|² = γ·0.15/2π from Eq. (2.51), the long-time Lorentzian dashed and its full width bracketed γ at half height · 2D (a relation between quantities). Axes fixed: t 0–8 μs, population 0–1; δ_k −6–6 μs⁻¹, |c_k|² 0–0.2 (peak 0.19 at γ = 0.5). Colours: p₁ curve and dot in bound-1, Σ|c_k|² curve, bars and Lorentzian in continuum-k (one curve per referent, root 7), axis titles in time, population and frequency, the bracket in rate. Labels: p₁ and Σ|c_k|² at the right ends of their curves, γ on the bracket, "t → ∞" on the dashed peak (four); each bar and the live point have hover names. Readout: Eq. (2.51)'s consequence with live numbers, p₁(t) = p₁(0)e^{−γt} = 1 × e^{−(γ)(t)} = …; note: Σ_k |c_k|² = 1 − p₁ = …, the population the outgoing wavepacket carries. The curves are exact for this model: summing Eq. (2.54) over a flat continuum gives Σ|c_k|² = 1 − e^{−γt} identically.

`draws`: time, population, frequency, rate. AI-marked Sim, no number.

### Extra sims (root 15), not built

- Box size: the same picture with the level spacing as a slider (the box L of the text), solved exactly for a few dozen levels, so the reader sees p₁ come back at t = 2π/spacing when the levels are sparse and the revival move out of reach as the box grows: the continuum's lack of “memory” made visible.
- Threshold: the laser frequency as a slider against a continuum with an edge, γ falling to zero below threshold while Δ_Stark stays, the two terms of Eq. (2.50) side by side.

## Exercises

None. The book prints no invitation in 2.2, "see e.g. homework problem 5" is the Harvard course's capture problem (kept verbatim), and no MIT problem maps here (config, prep).

## Lead draft (AI-marked)

> A single bound state coupled by an applied field to a continuum of unbound states, as in photoionization: the equations of motion for the amplitudes, the approximations that reduce them to one equation for the bound state, what it says about the bound state's population and energy, and the state the continuum is left in.

## Objectives, summary, notes

`objectives` and `summary_html` empty (book prints neither). `notes` empty.

## Book faults kept verbatim

- "couples each bound state |k⟩ to the bound state |1⟩": |k⟩ is an unbound state.
- Eq. (2.48): the left side integrates e^{−i(δ_k − iϵ)(t′−t)}, which gives i(1 − e^{(iδ_k + ϵ)t})/(δ_k − iϵ), growing at long times; the relation the text means, whose second term does vanish, is lim_{ϵ→0} ∫₀ᵗ e^{−i(δ_k + iϵ)(t′−t)}dt′ = lim_{ϵ→0} i(1 − e^{(iδ_k − ϵ)t})/(δ_k + iϵ), and its right side is the one printed. The Sim computes Eq. (2.54), which is right as printed (γ/2 in the place of ϵ), so no readout states Eq. (2.48); the correction lives here.
- "infinitesmal", "Schroedinger", "Note that the expression for γ ," (space before the comma), "photo-ionization" beside "photoionization", Eq. (2.50)'s unsized parentheses.

## Corrections

Chen's ruling of 2026-10-11: the book's words stay as printed, and each correction gets a numbered marker at the spot and a note at the section's end once the app has the feature; no markup or `section.json` field is written for them yet.

1. Attaches to `eq-2-48`. The book prints $\lim_{\epsilon\to 0}\int_0^t e^{-i(\delta_k - i\epsilon)(t'-t)}dt' = \lim_{\epsilon\to 0}\frac{i(1 - e^{(i\delta_k - \epsilon)t})}{\delta_k + i\epsilon}$; what is meant is $\lim_{\epsilon\to 0}\int_0^t e^{-i(\delta_k + i\epsilon)(t'-t)}dt' = \lim_{\epsilon\to 0}\frac{i(1 - e^{(i\delta_k - \epsilon)t})}{\delta_k + i\epsilon}$. Note: "The sign of $\epsilon$ in the exponent on the left should be $+$: as printed the integral gives $i(1 - e^{(i\delta_k + \epsilon)t})/(\delta_k - i\epsilon)$, which grows at long times. With $e^{-i(\delta_k + i\epsilon)(t'-t)}$ it gives the right side shown, whose second term $e^{(i\delta_k - \epsilon)t}$ vanishes in the long time limit, as the text says."
2. Attaches to `model` (the sentence "couples each bound state $|k\rangle$ to the bound state $|1\rangle$"). The book prints "each bound state $|k\rangle$"; what is meant is "each unbound state $|k\rangle$". Note: "The states $|k\rangle$ are the unbound states of the continuum; the field couples each of them to the single bound state $|1\rangle$."

## Wanted at chapter level

- If 2.1's rows for Ω_k, ω_k, ν, c₁, p₁ word their meanings differently, the chapter pass aligns 2.2's to them or marks `redefines` (2.2's Ω_k and ω_k belong to the continuum states |k⟩, 2.1's to the Floquet ladder).

Chapter pass (2026-10-11): footnote 2 and both corrections are `footnotes` rows; c₁ and p₁ read as 2.1's; Ω_k and ω_k are `redefines` (continuum states).

## Derivations

- 2.2 decay rate and shift from a continuum, (2.42)–(2.54) · score 3 · built as drv-continuum-decay ((2.44)–(2.50), host in place of (2.50); the explanatory prose and the identity (2.49) kept, the displayed lines and their connectors removed) and drv-continuum-amplitudes ((2.53)–(2.54), after the prose that separates it)
- Correction found: (2.50) prints −iΔ_Stark; the identity (2.49) gives +i, so c₁(t) ∝ e^{−γt/2 − iΔt}, the sign of the single-level light shift (2.22). Node note on (2.50), and a new footnote c-decay-law on the decay-law sentence, which stays. c-eq-2-48 moves into the integral node's note.
