# Plan: 10.2 Model: An ion in a harmonic trap

Source: `source.md` (PDF pages 219–226, Eqs. 10.2–10.26, Figures 10.3–10.6, no footnotes). Planned and built in one go (config: Chen approved building without stopping); this plan is left for review after.

## Blocks

The book's opening (before 10.2.1) is the first block with no heading; the four numbered subsections are `<h2>`s with their numbers, and the run-ins of 10.2.3 are `<h3>`s (config, Headers).

| id | `<h2>` | holds |
|---|---|---|
| `opening` | none | the three opening paragraphs, Figures 10.3 and 10.4 |
| `oscillator` | 10.2.1 The harmonic oscillator potential | Eqs. 10.2–10.5 |
| `internal` | 10.2.2 Internal energy levels | Eq. 10.6, γτ ≪ 1, the two methods (1), (2) |
| `ion-laser` | 10.2.3 Ion-laser interactions | Eqs. 10.7–10.26; h3s The Lamb-Dicke parameter, The bare energy spectrum, Laser-induced couplings: Running waves (Figure 10.5 + 10.6), Laser-induced couplings: Standing waves |
| `cooling` | 10.2.4 Sideband cooling | two paragraphs, `sim-sideband-cooling` |

Every numbered display is `<div class="equation" id="eq-10-K">` with `\tag{10.K}`. The prose cites "Figure 10.4" and "Figure 10.5", each linked to its figure; Figure 10.6 is cited only by its own caption.

## Concepts (23, prep-merged)

| concept | introducing span |
|---|---|
| trapped-ion-model | `model` ("approximating the trap by a harmonic oscillator potential") |
| ion-qubit-levels | `qubit-levels` ("a long-lived metastable state which can be driven on a quadrupole transition") |
| ion-hilbert-space | `hilbert-space` ("The Hilbert space of the ion … Fock states describing its motion") |
| trap-frequency | `trap-frequency` ("harmonic oscillator frequency ν ∼ 10 MHz") |
| ion-position-momentum | `eq-10-2` |
| motional-hamiltonian | `eq-10-4` |
| harmonic-oscillator-length | `eq-10-5` |
| ion-electronic-hamiltonian | `eq-10-6` |
| negligible-decay-condition | `gamma-tau` (the sentence ending "γτ ≪ 1") |
| ion-momentum-kick | `momentum-kick` ("the associated momentum kick can excite higher vibrational states") |
| ion-laser-hamiltonian | `x-operator` (the paragraph replacing x by x̂) |
| lamb-dicke-parameter | `ld-parameter` ("the ratio between them provides a small parameter") |
| lamb-dicke-regime | `ld-regime` (“Lamb-Dicke regime”) |
| lamb-dicke-hamiltonian | `eq-10-14` |
| ion-bare-spectrum | `eq-10-16` |
| sideband-couplings | `lowest-order` ("the only nonvanishing matrix elements couple n to m = n, n+1, n−1") |
| carrier-transition | `carrier` (the paragraph "Suppose the laser frequency is tuned to resonance …") |
| red-sideband-jaynes-cummings | `red-jc` ("If the laser is tuned to the red sideband … Jaynes-Cummings model") |
| trapped-ion-strong-coupling | `strong` ("the strong coupling regime is significantly easier to attain for ion traps") |
| anti-jaynes-cummings | `anti-jc` (“anti-Jaynes Cummings”) |
| standing-wave-couplings | `standing` (the first standing-wave paragraph) |
| sideband-cooling | `cooling` (the first paragraph of 10.2.4) |
| resolved-sideband-condition | `resolved` ("to cool into the ground state requires γ ≪ ν") |

Form anchors: `eq-10-N` → `10.2-eq-10-N`; `eq-10-gamma-tau` → `10.2-gamma-tau`; `eq-10-carrier-condition` → `10.2-carrier-condition` (the span on "Ω ≪ ν/η"); `eq-10-resolved` → `10.2-resolved`.

`uses` rows for the earlier concepts the prose leans on: spontaneous-emission (opening), laser-cooling (opening), fock-states and two-level-atom (hilbert-space), creation-annihilation-operators (eq-10-2), raman-transition (internal), rotating-wave-approximation (x-operator), recoil-frequency (eq-10-13), rotating-frame (eq-10-14), jaynes-cummings-model and cavity-qed (red-jc), strong-coupling-regime and single-photon-rabi-frequency (strong), optical-pumping (cooling), spontaneous-emission-rate (resolved).

Concept spans, judged per mention. "Hamiltonian" wears the concept of the particular Hamiltonian it names (motional-hamiltonian for "the Hamiltonian for the ionic motion", ion-electronic-hamiltonian at (10.6), ion-laser-hamiltonian for the interaction Hamiltonians, lamb-dicke-hamiltonian for the total running- and standing-wave Hamiltonians, carrier-transition for the "two-level Hamiltonian", jaynes-cummings-model for "the Jaynes-Cummings Hamiltonian" and "the same Hamiltonian" of cavity QED, anti-jaynes-cummings for the anti-Jaynes Cummings one). "dipole allowed" and "dipole-forbidden" wear selection-rules; "spontaneous emission", "spontaneously emitting", "fluoresces" spontaneous-emission; "decay rate γ" and "fluorescence rate" spontaneous-emission-rate; "laser cooling" laser-cooling; "Fock states" fock-states; "creation and annihilation operators" creation-annihilation-operators; "two level system" two-level-atom; "qubit" qubit (10.4's concept); "RWA" rotating-wave-approximation; "rotating frame" rotating-frame; "Raman transition" raman-transition; "recoil energy" recoil-frequency; "red sideband", "blue sideband", "sideband transitions" sideband-couplings, and "the effective Rabi frequency g → ηΩ" sideband-couplings too; "strong coupling regime" (the cavity QED one) strong-coupling-regime; "vacuum Rabi coupling" single-photon-rabi-frequency; "cavity quantum electrodynamics" cavity-qed; "bare energy levels", "bare states" ion-bare-spectrum; "bare atomic transition frequency" atomic-transition-frequency; "detuned" detuning; "pumps" optical-pumping. Plain: "trap" and "ion trap" in general, "motional ground state", "phonon", "vibrational states", "quantum state engineering" (10.3's concept, named here only as a purpose), "resonance", headings.

## Symbols and variables

`ost meanings` run for every symbol. Rows (10.2), each anchored at its first use:

- linked: nu → trap-frequency (`redefines`), H_motion → motional-hamiltonian, a_0 → harmonic-oscillator-length, H_electronic → ion-electronic-hamiltonian, omega_eg → atomic-transition-frequency, gamma → spontaneous-emission-rate, Omega → rabi-frequency, E_env → slowly-varying-envelope, eta_LD → lamb-dicke-parameter, omega_R → recoil-frequency, H_r → lamb-dicke-hamiltonian, H_s → standing-wave-couplings, H_0 → ion-bare-spectrum, H → hamiltonian, g → single-photon-rabi-frequency, x_ion and p → ion-position-momentum (types length and momentum on the rows, since the concept has none).
- typed, no concept: omega (frequency, the laser, `redefines`), Delta (frequency, the laser's detuning, `redefines`), k_mag (wavevector, the unbold k of kx̂), phi (phase, the standing wave's, `redefines`), lambda (length), tau (time), m (mass), t (time).

One new book symbol, staged through `ost add … symbols --chapter 10`: `x_ion` (\kxion, x̂), the ion's position operator, kept apart from Chapter 9's quadrature `x_quad`. The classical x of (10.7)–(10.8) stays in ink; p of the momentum basis in (10.11) is an eigenvalue and stays in ink (the macro \kp is the operator p̂). â, â†, ℏ, n, m (a phonon number in (10.19)), ⟨n⟩ are untyped and in ink.

## Referents

One group, since the ladder figure draws all five.

| id | label | figures |
|---|---|---|
| lvl-g | the ground state \|g⟩ | fig-ion-levels, sim-sideband-ladder |
| lvl-e | the excited state \|e⟩ | fig-ion-levels, sim-sideband-ladder |
| carrier | the transition on the bare resonance, \|g⟩\|n⟩ → \|e⟩\|n⟩ | sim-sideband-ladder, sim-sideband-cooling |
| red-sb | the red sideband, \|g⟩\|n⟩ → \|e⟩\|n−1⟩ | sim-sideband-ladder, sim-sideband-cooling |
| blue-sb | the blue sideband, \|g⟩\|n⟩ → \|e⟩\|n+1⟩ | sim-sideband-ladder, sim-sideband-cooling |

Marked in prose where the text names the state or the tuned transition (inline maths wrapped, never inside a display): |g⟩, |e⟩; "the red sideband", "the blue sideband", "vertical transitions" and "the direct … transitions" (the carrier); the word "carrier" is not the book's and the figures say "bare resonance" instead.

## Figures

Units: the book gives η ∼ 0.1 and ν ∼ 10 MHz and no Ω, so the ladder measures time in 1/Ω and the cooling sim measures detunings and γ in units of ν and time in γ/(ηΩ)², the natural clock of a weak drive.

- fig-ion-trap · Figure 10.3 · trapped-ion-model · standardisation only (the book's picture in house style) · arrows: symbolic (the laser's wave and the emitted photon's squiggle are notation, book RULES; the trap pointer is a leader) · still: nothing in the picture varies · no controls · headline none (caption carries it) · graph none · 2D. Faithful copy, kind `figure`. The ion is ink (no element named). Labels: ion, laser, trap, spontaneous emission (four, fixed).
- fig-ion-levels · Figure 10.4 · ion-qubit-levels, ion-hilbert-space · standardisation only, plus the level labels made to agree with the text (correction below) · arrows: symbolic (absorption arrows and decay squiggles are notation) · still · no controls · headline none · graph none · 2D (book RULES: level diagrams are 2D). Faithful copy, kind `figure`. Left: |g⟩, the short-lived upper level of the dipole-allowed transition and the long-lived |e⟩ of the dipole-forbidden one, |g⟩ and |e⟩ in their referent colours; right: the trap's parabola with |0⟩, |1⟩, |2⟩ and a fourth rung. The book labels the forbidden level |r⟩ and the allowed one |e⟩; here the forbidden level is |e⟩, as the text has it, and the allowed level is named by its words and a hover name.
- sim-sideband-ladder · Figure 10.5 + 10.6 · ion-bare-spectrum, sideband-couplings, carrier-transition, red-sideband-jaynes-cummings, anti-jaynes-cummings, lamb-dicke-parameter · animation and variation: the ion starts in |g⟩|n⟩ and its population flows to the level the tuned laser reaches, so the reader watches the flop on the bare resonance at Ω whatever n, and on a sideband at ηΩ√n or ηΩ√(n+1), slower by η and quicker up the ladder, with |g⟩|0⟩ never moving on the red sideband; the book's two stills give the strengths as labels and leave the √n and the dark ground state to be imagined · arrows: symbolic (the transition arrows are couplings, fixed), kinematic none, but the population flowing between the two levels is kinematic (book RULES) and sets the moving tier · moving: populations flop in time; transport · choice tuning (bare resonance · red sideband · blue sideband, default red, Figure 10.6's left panel), choice start n (0 · 1 · 2 · 3, default 1, Figure 10.5's |g, 1⟩), slider η (untyped, 0.02 to 0.3, default 0.1, the book's value; no special, the text names none) · headline states the live coupling and the time of a full transfer, or that |g, 0⟩ has no partner on the red sideband · graph beside (the ladder is a vertical scene): P_e(t) against Ωt, 0 to 40, 0 to 1, fixed · 2D. Every transition of the chosen tuning is drawn as in Figure 10.6, the active one bold and the others faint, each with its label ηΩ√n (at most four, fixed in place). Levels |g, n⟩ and |e, n⟩ for n = 0 to 3, |g⟩ rungs in lvl-g's colour and |e⟩ rungs in lvl-e's, with the population a filled bar on the two active levels; the ν spacing marked once. Readout: the coupling of (10.20)–(10.22) with live numbers, e.g. ηΩ√n = 0.1 · √1 · Ω = 0.10 Ω, and P_e = sin²(ηΩ√n t). Ω ≪ ν/η assumed throughout (each transition is resolved).
- sim-sideband-cooling · Sim · sideband-cooling, resolved-sideband-condition, sideband-couplings · animation and variation: the ion's phonon distribution, thermal at ⟨n⟩ = 5, drains into |0⟩ under a weak laser, while the excitation spectrum above shows the red sideband shrinking against the blue one; widen γ toward ν and the carrier's wing reaches the sidebands, the drain stalls at a higher floor; tune the laser to the carrier or the blue sideband and the ion heats. The text states γ ≪ ν and "pumps the ions into the ground state" in words; no figure shows either · arrows: none · moving: time runs the cooling; transport · sliders Δ (frequency, −1.5ν to 1.5ν, default −ν; specials −ν "red sideband", 0 "resonance", +ν "blue sideband", all three named in 10.2.3) and γ (rate, 0.02ν to 1ν, default 0.1ν) · headline: ⟨n⟩ and p₀ now · graph alone, two panels on one stage: the spectrum (excitation against laser detuning, −2ν to 2ν, scaled to the carrier's peak, 0 to 0.08, the carrier running off the top and labelled), each of the three lines a Lorentzian of width γ in its referent's colour with heights 1, η²⟨n⟩, η²(⟨n⟩+1); the laser a dashed line at Δ; beneath, the populations p_n for n = 0 to 19 as bars, the initial thermal distribution hollow · 2D. Model: the rate equations of MIT Problem Set 10, Problem 2 (the section's exercise) in the Lamb-Dicke limit, η = 0.1 fixed, below saturation, emission recoil along the trap axis, n ≤ 60 with no transitions out of the top. Readout: the ratio of the sidebands, red/blue = ⟨n⟩/(⟨n⟩+1), which follows from (10.21)–(10.22) and makes the spectrum a thermometer; note: γ against ν and the floor ⟨n⟩ settles at (or that the laser heats). The readout writes no rate formula, so the sim does not give away the exercise's algebra.

`draws`: fig-ion-trap `coupling`, `rate`, `energy`; fig-ion-levels `rate`, `energy`; sim-sideband-ladder `coupling`, `frequency`, `population`, `time`; sim-sideband-cooling `frequency`, `rate`, `population`. No facts or conventions: the ion has no element.

### Extra sims (root 15), not built

- The standing wave's phase: φ slid from 0 to π/2 moves the ion from the node to the antinode, and the carrier's strength sin φ and the sidebands' η cos φ trade places on the ladder (Eq. 10.26). The ladder figure already shows the three strengths; this adds only their φ dependence, which the text states in a line.
- Rabi flopping on the carrier of a thermal ion: the populations of many |n⟩ dephase because the carrier's strength depends on n at order η² (Eq. 10.20's O(η²)), the Debye-Waller factor. Beyond what the text derives.

## Exercises

MIT Problem Set 10, Problem 2 (sideband cooling), after 10.2.4 (config), kind `problem`, `origin: mit-8422`, Bloom Apply, place end, cite `cooling`. Three cards `hw10-2a`, `hw10-2b`, `hw10-2c`, `source_number` "Problem Set 10, Problem 2(a)" …, `source_id` "hw10.2a" …. Prompts restated in Lukin's notation (prep): MIT's Ω is written 2Ω (so H_I = 2ℏΩ(σ̂₊ + σ̂₋)cos(kx̂ − ωt) and in the RWA its coupling is (10.9)'s up to sign), Γ is γ, ω₀ is ω_eg, δ is Δ, x₀ is a₀, |n⟩|g⟩ is written |g⟩|n⟩; part (a) carries the problem's opening, parts (b) and (c) begin with one line restating the set-up so each card stands alone; MIT's round brackets |n) are written as kets. Every part is a derivation with no key, so each has an AI-marked solution with the answer and the reasoning in Lukin's symbols (root 13): (a) Ω_{n,n−1} = ηΩ√n, Ω_{n,n+1} = ηΩ√(n+1), as (10.21)–(10.22); (b) A∓ = η²Ω²γ[1/((Δ ± ν)² + γ²/4) + 1/(Δ² + γ²/4)] from the weak-drive excitation rate R_opt of (4.55); (c) d⟨n⟩/dt = −(A₋ − A₊)⟨n⟩ + A₊, ⟨n⟩_ss = A₊/(A₋ − A₊) ≈ (5/16)(γ/ν)² at Δ = −ν, γ ≪ ν, reached in 1/(A₋ − A₊) ≈ γ/(4η²Ω²). Part (d), the ⁸⁸Sr numbers, is numerical with no key: held and named in `exercise_notes`. Concepts: (a) sideband-couplings, lamb-dicke-regime; (b) sideband-cooling, sideband-couplings; (c) sideband-cooling, resolved-sideband-condition.

## Lead draft (AI-marked)

> The trapped ion as a two-level system riding a harmonic oscillator ladder: the size of its motional ground state, the Lamb-Dicke parameter that compares it with the laser's wavelength, the transitions a laser addresses on the bare resonance and on the red and blue sidebands, their kinship with the Jaynes-Cummings model of cavity QED, and sideband cooling into the ground state of the trap.

## Objectives, summary, notes

`objectives` and `summary_html` empty (the book prints neither). `notes` empty: nothing is left out (Figures 10.3–10.6 are vector drawings and may be shown).

## Book faults kept verbatim

- "h.c" without its final period in (10.9), (10.10), (10.14), (10.15), (10.26).
- "The momentum kick imparted to the atom", and Figure 10.5's caption "the atom cycles": the book's word for the ion.
- (10.13)'s "recoil energy ω_R = ℏk²/2m", a frequency (the recoil energy over ℏ), as Chapter 8 also calls it.
- "anti-Jaynes Cummings" (missing hyphen), "cooled ions in to the trap ground state".
- (10.19)–(10.22): ⟨g|⟨n|Ĥ|e⟩|m⟩ picks the h.c. term, so strictly it carries Ω* and e^{−iη(â+â†)}, and the first-order elements carry a factor i; only the magnitudes are used, and those are right. Not corrected: the phase conventions do not change any result the section draws, and the i reappears in (10.24)–(10.25), whose correction speaks to it.

## Corrections

| id | attaches to | the book prints | note |
|---|---|---|---|
| c-eta-numbers | after "η can be quite small." | η ∼ 0.1 in (10.12) beside ω_R ∼ kHz and ν ∼ 10 MHz | The two estimates disagree: with ω_R ∼ kHz and ν ∼ 10 MHz, Eq. (10.13) gives η ∼ 0.01, not 0.1. For a calcium ion on its 729 nm line ω_R/2π ≈ 10 kHz, and a trap of ν/2π ≈ 1 MHz gives η ≈ 0.1. |
| c-eq-10-16 | `eq-10-16` | −ℏω_ge\|e⟩⟨e\| | The excited level lies ℏω_eg above \|g⟩, as in (10.6) and the eigenvalue ℏ(nν + ω_eg) of (10.18): the term is +ℏω_eg\|e⟩⟨e\|. |
| c-eq-10-24 | `eq-10-24` | −iℏηΩ(\|e⟩⟨g\|â + \|g⟩⟨e\|â†) | Not Hermitian with the i. Expanding e^{iη(â+â†)} in (10.14) gives −iℏη(Ω\|e⟩⟨g\|â − Ω*\|g⟩⟨e\|â†); with Ω real this is the printed term with a relative minus sign, and it differs from −ℏηΩ(\|e⟩⟨g\|â + \|g⟩⟨e\|â†) only by the phase of \|e⟩. |
| c-eq-10-25 | `eq-10-25` | −iℏηΩ(\|e⟩⟨g\|â† + \|g⟩⟨e\|â) | The same for the blue sideband: −iℏη(Ω\|e⟩⟨g\|â† − Ω*\|g⟩⟨e\|â). |
| c-fig-10-4 | figure `fig-ion-levels` (its original caption, no marker) | the dipole-allowed level labelled \|e⟩, the dipole-forbidden one \|r⟩ | The text calls the long-lived upper level of the dipole-forbidden transition, the one that encodes information, \|e⟩ (10.2.2); the figure here does the same. |

The concept form `eq-10-16` states the corrected sign (prep).

## Wanted at chapter level

- `x_ion` (x̂, \kxion) is a new book symbol for the ion's position operator; 10.3 and 10.4 may want it for x̂ too (10.4's ion positions are classical x_n).
- The referents carrier, red-sb, blue-sb and lvl-g, lvl-e: 10.3's state-preparation sim walks the same ladder, and 10.4's Figure 10.8 draws |g⟩ and |e⟩; the same ids and labels there keep the meaning (colours are dealt per page).
- The ladder figure's "bare resonance" stands where the field says "carrier", which the notes never use; the chapter pass may prefer to keep it.

## Derivations

- 10.2.3 the Lamb-Dicke parameter as √(ω_R/ν) (10.12)–(10.13) · score 4 · not built: three substitutions (k = 2π/λ, a₀ of (10.5), ω_R), below the four-move bar.
- 10.2.3 the carrier and sideband couplings (10.19)–(10.26) · score 4 · built as drv-sideband-couplings ((10.19)–(10.22), a printed block): (10.19) is the element between ⟨g|⟨n| and |e⟩|m⟩, which the coupling's Hermitian conjugate gives, so the work carries Ω* and e^{−iη(a+a†)}, and (10.21)–(10.22) carry the phase −i; each node's note says what the book printed. The sentence "In the case of a running wave, the matrix elements between the states |g⟩|n⟩ and |e⟩|m⟩ are" went with the block; "Expanding the exponent… couple n to m = n, n+1, n−1" kept as a sentence before the host. The forms eq-10-19…22 re-anchored to the derivation and their latex corrected; the H variables row re-anchored. Not built: (10.23)–(10.25), effective Hamiltonians stated for three tunings, each three moves from (10.14) (expand, keep the resonant coupling, write out its conjugate), below the bar, printed apart between figures and prose, and keeping their correction rows c-eq-10-24, c-eq-10-25; (10.26), one expansion of the sine.
