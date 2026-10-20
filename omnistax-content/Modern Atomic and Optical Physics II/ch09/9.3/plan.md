# Plan: 9.3 The effects of dissipation on quantum fields

Source: `source.md` (PDF pages 183–200, Eqs. 9.80–9.134, Figures 9.4–9.8, footnotes 2 and 3). Planned and built in one go (config: no stops); left for review after.

## Blocks

| id | `<h2>` | holds |
|---|---|---|
| `opening` | none | the opening paragraph, Figure 9.4, the beamsplitter model of loss (9.80) |
| `lossy-cavity` | 9.3.1 Dynamics of a single mode field in a lossy cavity | Figures 9.5, 9.6; h3 Classical evolution (9.81–9.88) |
| `quantum-cavity` | 9.3.2 Quantum mechanical treatment of the cavity mode | 9.89; h3 Microscopic noise model (9.90–9.102, footnote 2); h3 Example: Coherent state (9.103–9.107, footnote 3 holding 9.105); h3 Quantum field evolution (9.108), `sim-damped-field` |
| `cqed` | 9.3.3 Cavity quantum electrodynamics | Figure 9.7; h3 run-ins: Open vs closed cavities; Theoretical formulation (9.109–9.111); CQED in the dressed state basis (Figure 9.8); Stochastic wavefunction analysis (9.112–9.117, `sim-vacuum-rabi`); Open cavity: the Purcell effect (9.118–9.123); The physics of strong coupling (9.124–9.127); Closed cavity: suppressed decay (9.128–9.129); Microwave CQED with Rydberg atoms; Application: single photons on demand (9.130–9.132); Measurements of single photon fields (9.133–9.134); Reading |

Every numbered display is `div.equation#eq-9-K` with `\tag{9.K}`; 9.116–9.117 stay two displays as numbered. Footnote 2 is a `book` row (marker after "microscopically defined quantities."), footnote 3 a `book` row holding 9.105 as its own `div.equation` (marker after "quadrature components"). The three transitions of the stochastic wavefunction analysis are an `<ol>`.

## Concepts (28, prep-merged) and introducing spans

beamsplitter-loss-model `bs-loss` · cavity-loss-rate `loss-rate` · classical-cavity-evolution `round-trip` · input-output-relation `input-output` · cavity-langevin-equation `quantum-cavity-eq` · cavity-reservoir-model `microscopic` · cavity-noise-correlations `noise-correlations` (the input field of 9.101 reinforces) · cavity-master-equation `cavity-master` · damped-coherent-state `coherent-example` · dissipation-destroys-nonclassicality `nonclassical-loss` · cavity-driven-by-atoms `atoms-drive` · open-and-closed-cavities `open-closed` · cqed-master-equation `cqed-master` · jaynes-cummings-ladder `dressed-basis` · vacuum-rabi-splitting `vrs` · collective-enhancement `collective` · cqed-no-jump-evolution `no-jump` (the quoted “no-jump”; the earlier "no-jump regime" wears the span too) · purcell-effect `purcell` · quality-factor `q-factor` · cavity-finesse `finesse` · cavity-mode-coupling `mode-volume` · strong-coupling-figure-of-merit `figure-of-merit` · suppressed-decay `closed-decay` · microwave-cqed `microwave` · cavity-single-photon-source `single-photon` · hanbury-brown-twiss `hbt` · second-order-correlation `g2-def` · photon-bunching `bunching`.

`uses`/`reinforces`: strong-coupling-regime (9.2's; its form eq-9-124 anchored here, the quoted “strong coupling regime” reinforces), beamsplitter-transformation, coherent-state, fock-states, heisenberg-langevin-equation, generalized-einstein-relation, wigner-weisskopf, master-equation, quadrature-operators, squeezed-state, jaynes-cummings-model, dressed-states, monte-carlo-wavefunction, effective-hamiltonian, adiabatic-elimination, lamb-shift, spontaneous-emission-rate, rydberg-states, cavity-qed, absorption-cross-section, dispersion. Every form anchored to its display (`9.3-eq-9-K`); eq-9-105 sits in footnote 3 and is anchored there if the checker allows, else left without.

Concept statements set right where the book's slip reached them: vacuum-rabi-splitting and collective-enhancement say 2g and 2g√N; cavity-single-photon-source says the envelope decays at 2g²/κ. Forms state the corrected relation (config): eq-9-116, eq-9-117, eq-9-118 in the sign convention of (9.110); eq-9-128 with κ in place of κ/2.

Term spans judged per mention: "cavity loss rate"/"cavity decay rate" wear cavity-loss-rate; "beamsplitter" naming the device wears beamsplitter-transformation, inside the loss model beamsplitter-loss-model; "coherent state(s)" coherent-state; "Fock state" fock-states; "dressed state(s)" in 9.3.3 jaynes-cummings-ladder; "strong coupling"/"strong-coupling regime" strong-coupling-regime; "quality factor" and "finesse" their definitions; "cavity" alone, "loss", "noise", "field" and "dissipation" stay plain unless the sentence names the concept.

## Symbols and variables

`ost meanings` run for each. Rows (section 9.3): kappa → cavity-loss-rate; gamma_eff → purcell-effect (redefines); Q_fac → quality-factor; F_fin → cavity-finesse; g2 → second-order-correlation; F_noise → cavity-noise-correlations (redefines); gamma → spontaneous-emission-rate (the atom's emission into free-space modes other than the cavity's); g → single-photon-rabi-frequency (the atom-cavity coupling); nu (the cavity mode frequency, redefines); nu_bar (the cavity resonance's centre, redefines); nu_k (continuum mode); delta → detuning (ν − ω, redefines); delta_k; omega → atomic-transition-frequency (redefines against 9.1's mode frequency); c_11, c_20 → probability-amplitude (new symbols \kconeone, \kctwozero); c_k (the free-field mode amplitude of 9.131); H → jaynes-cummings-model (9.110, redefines); H_eff → effective-hamiltonian (9.115); rho_hat → density-operator; E_cav (new symbol \kEcav, plain E: the classical cavity field E(t), E_in, E_out; electric-field); E_hat (the input field operator Ê_in); E_env (the field operator 𝓔 at the detectors); L_med (the cavity length, redefines); lambda; V (mode volume); mu; P_nl (9.87's polarization P, plain as printed); Delta_t (the round-trip time); x_quad, p_quad; alpha_coh; t. Transmission and reflection t, r, t_k and the thermal photon number n stay untyped in ink (COLOR.md).

## Referents

| id | label | figures |
|---|---|---|
| cat-plus | the component \|iα⟩ | fig-cat |
| cat-minus | the component \|−iα⟩ | fig-cat |
| signal | the signal â_in | fig-bs-loss |
| vacuum | the vacuum field b̂_vac | fig-bs-loss |
| atom | the atom | fig-cqed-reservoirs, sim-jc-ladder, sim-vacuum-rabi |
| cavity | the cavity mode | fig-cqed-reservoirs, sim-jc-ladder, sim-vacuum-rabi |
| res-free | the free-space modes the atom decays into | fig-cqed-reservoirs |
| res-leak | the modes the cavity leaks into | fig-cqed-reservoirs |

The atom and the cavity mode are marked in 9.3.3 wherever the text points at them; on the ladder and the population curves a state wears the referent where its one quantum sits (|2⟩_a|n−1⟩ the atom, |1⟩_a|n⟩ the cavity).

## Figures

Units: the book gives no numbers; the CQED sims measure g, κ, γ, δ in μs⁻¹ and time in μs (2.1's choice); the dissipation sim measures time in 1/κ.

- fig-cat · Figure 9.4 · schrodinger-cat-state, nonclassical-light · standardisation only: the book's cat in the quadrature plane in house style, its two components in referent colours; the splitting itself is 9.2's figure · arrows: none (the solid and dotted rays are notation) · still · no controls · headline none · graph none · 2D (book RULES: phase space is 2D). Faithful copy, kind `figure`.
- fig-bs-loss · Figure 9.5 · beamsplitter-loss-model · standardisation only · arrows: symbolic (the ports of the mode transformation, book RULES: beamsplitter schematics are faithful copies) · still · none · none · none · 2D. Faithful copy.
- fig-lossy-cavity · Figure 9.6 · classical-cavity-evolution, input-output-relation · standardisation only · arrows: symbolic (E_in, E_out ports and the round trip) · still · none · none · none · 2D. Faithful copy.
- sim-damped-field · Sim · damped-coherent-state, dissipation-destroys-nonclassicality · flow by animation and variation: the state's uncertainty ellipse slides toward the vacuum as ⟨â⟩ = αe^{−κt/2} while Eq. (9.107) relaxes both variances to 1/2; a coherent disc keeps its size the whole way, a squeezed or stretched one rounds out, which the book states in words only · arrows: kinematic (the mean's path to the origin) · moving: κt runs 0 to 5, transport · sliders |α| (quadrature, 0–4, default 3) and ⟨δx̂²(0)⟩ (quadrature, 0.1–2, default 0.5, special 1/2 the coherent state; ⟨δp̂²(0)⟩ = 1/(4⟨δx̂²(0)⟩), a minimum-uncertainty state) · headline gives κt, the amplitude and both variances · graph beside: the quadrature plane left (x̂, p̂ −5…5), the variances against κt right (0–5, 0–2.1) · 2D.
- fig-cqed-reservoirs · Figure 9.7 · cqed-master-equation, open-system, cavity-qed · standardisation only, the atom, cavity mode and reservoirs wearing the referent colours the ladder and the populations share · arrows: symbolic (γ and κ name decay channels as a decay squiggle does, g the coherent coupling) · still · none · none · none · 2D. Faithful copy.
- sim-jc-ladder · Figure 9.8 (both panels) · jaynes-cummings-ladder, vacuum-rabi-splitting, dressed-states · variation by slider: the reader sees each rung split by √(4ng² + δ²), so the splittings grow as √n up the ladder (the ladder is not evenly spaced), and sees a detuned pair stay nearly bare; panel (b)'s decays drawn on the same bare levels · arrows: symbolic (the g√n coupling, the κ and γ squiggles) · still: g and δ are parameters, not a clock · sliders g (coupling, 0–2 μs⁻¹, default 1) and δ (frequency, −3…3 μs⁻¹, default 1, the book's δ > 0 drawing; special 0, resonance) · headline gives the three splittings and their ratio to the first · graph none (level diagram, energy within a rung to scale, the rungs ℏν apart not to scale) · 2D (book RULES: level diagrams are 2D).
- sim-vacuum-rabi · Sim · cqed-no-jump-evolution, vacuum-rabi-splitting, purcell-effect, strong-coupling-regime, suppressed-decay · variation and animation: Eqs. (9.116)–(9.117) integrated from |2⟩_a|0⟩: the excitation swings between atom and cavity as damped vacuum Rabi oscillations when g ≫ κ, γ, and leaks away as one exponential at γ + κg²/(κ²/4 + δ²) when g < κ; beside it the same atom-cavity system probed by a weak field, two peaks 2g apart against one Purcell-broadened line. The text gives the two limits in words and one formula each; the sliders walk between them · arrows: none · moving: time runs 0 to 3 μs, transport · sliders g (coupling, 0–8), κ (rate, 0.2–30), γ (rate, 0–4), δ (frequency, −12…12, special 0); special on g at √(γκ), the strong coupling threshold (9.124) · headline names the regime and the measured peak separation · graph beside: populations |c₂,₀|², |c₁,₁|² against t (0–3 μs, 0–1) left; the weak probe's excitation of the cavity mode and of the atom, each scaled to its peak, against the probe detuning Δ (−16…16 μs⁻¹) right; the atom's line width equals γ_eff in the Purcell regime · 2D. Readout: in the weak-coupling half (g < κ/2) the decay rate γ + κg²/(κ²/4 + δ²) with its numbers (Eq. 9.119's first term doubled for the population, 9.120 at δ = 0); otherwise the splitting √(4g² + δ²) against (κ + γ)/2. Headline by regime: swings when g > (κ + γ)/4, overdamped between, Purcell when g < κ/2.

`draws`: fig-cat `quadrature`; fig-bs-loss none; fig-lossy-cavity `electric-field`, `length`; sim-damped-field `quadrature`, `time`; fig-cqed-reservoirs `coupling`, `rate`; sim-jc-ladder `coupling`, `frequency`, `rate`; sim-vacuum-rabi `coupling`, `rate`, `frequency`, `amplitude`, `time`. No facts or conventions (the atom is unnamed: ink with referent colour).

### Extra sims (root 15), not built

- Hanbury-Brown-Twiss clicks: photon arrivals at two detectors behind a beamsplitter for coherent, thermal and single-photon light, with the coincidence histogram against delay showing 1, 2 and 0 at zero delay. The book gives only g⁽²⁾(0), not the thermal or single-photon g⁽²⁾(τ) shapes, so the figure would teach beyond the page (rule 26.5).
- Cavity linewidth: mirror transmission t and length L setting κ = t²c/2L and the Lorentzian of (9.86), with the finesse. A single relation with no hidden structure.

## Exercises

No inline invitations. MIT 8.422 problems, `origin: mit-8422`, kind `problem`, end, each part its own card, AI solutions (none numerical, none held):

- hw2.2 (a), (b) · Problem Set 2, Problem 2 · cite `bs-loss` · (a) beamsplitter-loss-model, poisson-photon-statistics; (b) beamsplitter-loss-model, beamsplitter-transformation. Changes: â for a, MIT's r kept beside Lukin's i√(1−|t|²); (b)'s "result from 1(a)" is Problem Set 2, Problem 1(a), set in 9.1.
- hw3.1 (a)–(d) · Problem Set 3, Problem 1 · cite `bs-loss` · beamsplitter-loss-model, beamsplitter-transformation (and coherent-state in (d)). Changes: MIT's three interferometer drawings described in words, the beamsplitter B(θ) of Problem Set 2, Problem 1 named, visibility V written 𝒱 (V is the mode volume).
- hw8.2 (a)–(c) · Problem Set 8, Problem 2 · cite `cavity-master` · cavity-master-equation with no-jump-evolution, quantum-jump, lindblad-master-equation. Changes: MIT's Γ is κ, ω is ν, a is â; C identified in the solution as √κ â.
- hw10.1 (f) only · Problem Set 10, Problem 1(f) · cite `dressed-basis` · jaynes-cummings-ladder, dressed-states. Judgement: (a)–(e) are the semiclassical dressed atom of 2.1 and the dipole force of 8.2 and are not set here (wanted at chapter level); (f) is the only part that needs the quantized field.
- hw1.2 (a)–(d) · Problem Set 1, Problem 2 · cite `hbt` · (a) hanbury-brown-twiss, second-order-correlation; (b) second-order-correlation; (c) photon-bunching, second-order-correlation; (d) photon-bunching, schrodinger-cat-state. Changes: MIT's apparatus drawing described in words.

## Lead draft (AI-marked)

> What dissipation does to quantum fields: loss as a beamsplitter, the lossy cavity treated classically and then quantum mechanically with its noise, why loss returns every field to classical light, and cavity quantum electrodynamics, where one atom, one cavity mode and two decay channels meet in the dressed-state ladder, strong coupling, the Purcell effect, single photons on demand and the correlation function that detects them.

## Objectives, summary, notes

Empty (book prints none); `notes` empty.

## Book faults kept verbatim (no correction row)

"via a the Hamiltonian", "theory find" (missing "to"), page 192's stray braces in "couple {|1⟩_a|n⟩ → {|1⟩_a|n−1⟩ and {|2⟩_a|n⟩ → {|1⟩_a|n⟩", "Fabry-Perot", "Mabuchi, Doherty Science 298 1372(2002)", "Wigner-Weisskopf" spelt so, (9.94)'s second term without its Σ_k.

## Corrections (`kind: correction`, marker after the misprint)

| id | at | prints | meant |
|---|---|---|---|
| c-lossless | 9.84's sentence | "For a perfect mirror, r² + t² = 1" | a lossless mirror (the perfect mirror of Figure 9.6 has r = 1) |
| c-eq-9-102 | eq-9-102 | ρ̂ on the left, ρ on the right | ρ̂ throughout |
| c-eq-9-106 | eq-9-106 | no integration variable | ∫₀ᵗ (…) e^{−κ(t−t′)/2} dt′ |
| c-eq-9-108 | eq-9-108 | σ̂_{α,β}, no j | σ̂₁₂^{(j)}, the lowering operator of atom j |
| c-vrs | "dressed-states splitting g" | g | 2g (Figure 9.8a: √(4g² + δ²)) |
| c-collective | "g√N" | g√N | 2g√N |
| c-eq-9-113 | eq-9-113 | ċ₁,₁ = iδc₁,₁ + igc₂,₀, ċ₂,₀ = igc₁,₁ | ċ₁,₁ = −iδc₁,₁ − igc₂,₀, ċ₂,₀ = −igc₁,₁ from (9.110) |
| c-eq-9-116 | eq-9-116 | the same signs with decay | ċ₁,₁ = −(κ/2 + iδ)c₁,₁ − igc₂,₀, ċ₂,₀ = −igc₁,₁ − (γ/2)c₂,₀; (9.118) then −ig/(κ/2 + iδ); (9.119) as printed; from the printed equations its shift term would come out −ig²δ/(κ²/4 + δ²) |
| c-eq-9-128 | eq-9-128 | κ/2 · g²/(κ²/4 + δ²) | κ g²/(κ²/4 + δ²), the population rate, which at δ = 0 is the 4g²/κ of (9.120); as printed it is the amplitude's rate |
| c-circular | "N=50 L=50" | L = 50 | L = 49 (l ≤ n − 1) |
| c-eq-9-132 | eq-9-132 | width g²/κ | 2g²/κ, the amplitude rate of (9.119) at γ = δ = 0 |
| c-envelope | "∼ e^{−(g²/κ)t}" | g²/κ | e^{−(2g²/κ)t} |
| c-eq-9-118 | eq-9-118 | ig/(κ/2 − iδ) | −ig/(κ/2 + iδ) in (9.110)'s convention, from which (9.119) follows as printed |
| c-hw8-dt | hw8-2a's prompt | MIT's e^{−iHt/ℏ} | e^{−iH dt/ℏ} |
| c-eq-9-133 | eq-9-133 | 𝓔(r₁, t₁⟩ | 𝓔(r₁, t₁)⟩, here and in (9.134) |

## Wanted at chapter level

- hw10.1(a)–(e) (the semiclassical dressed atom: light shift, polarizability, dressed-state Rabi oscillation, dressed-state force) fit 2.1 beside hw7.3, (e) leaning on 8.2; not set anywhere yet.
- Figure 9.4 is numbered and drawn here, where the book prints it; 9.2 should not fold it (if it does, the chapter pass keeps one).
- New symbols added through `ost add … symbols --chapter 9`: c_11 (\kconeone), c_20 (\kctwozero), E_cav (\kEcav, plain E).

## Derivations

- 9.3.1 classical evolution (9.81)–(9.88) · block · built as drv-cavity-field-evolution: (9.83) from (9.81)–(9.82), the loss rate (9.84), (9.85) and the Lorentzian (9.86) as four nodes; replaces (9.81)–(9.86) and their connecting phrases, hosted after the lineshape paragraph; the "where" clause on t, r, Δt becomes a sentence of its own, "Here we have used t² = 1 − r² ≈ 2(1 − r)" goes into the work; c-lossless stays on the kept sentence. (9.87) (projected Maxwell equations) and (9.88) are stated and stay
- 9.3.2 microscopic noise model (9.89)–(9.102) · score 4 · not built: "to review briefly", the reservoir algebra of 8.4.2 with Ŝ = â, built there (drv-reservoir-operator, drv-markov-decay, drv-quantum-langevin-moments); (9.98)–(9.99) are stated from (8.66)–(8.67), (9.100) is two substitutions and (9.102) is the master equation of 3.3 with Ŝ = â, stated
- 9.3.2 Example: coherent state (9.103)–(9.107) · block · built as two at the book's break: drv-damped-coherent-amplitude ((9.103) by integrating (9.89), (9.104)) and drv-damped-quadrature-variance ((9.106), (9.107), the double integral worked); c-eq-9-106 moves into the node's note (row and marker removed); the link "Eq. (9.107)" in the next paragraph re-pointed
- 9.3.3 the Purcell effect (9.118)–(9.120) · block · built as drv-purcell-elimination ((9.118) and (9.119) from the printed (9.116)–(9.117)) and drv-purcell-rate ((9.120)), split at the book's paragraph on the shift; c-eq-9-118 moves into the (9.119) node's note, which says where the sign of the shift term comes from (row and marker removed); c-eq-9-116 and c-eq-9-113 stay on the printed equations
- 9.3.3 the closed cavity (9.128)–(9.129) · score 5 (imported (9.119), (9.121), (9.122), (2.89)) · built as drv-suppressed-decay; the work gives the population rate κg²/(κ²/4 + δ²), and c-eq-9-128 moves into the node's note (row and marker removed)
- 9.3.3 the physics of strong coupling (9.125)–(9.126) · score 5 (imported (9.121), (9.123), (2.89); the μ cancellation hidden) · built as drv-strong-coupling-figure-of-merit, two nodes; the "where d is" clause becomes a sentence of its own. (9.127) is a product of stated factors (one move) and stays
- 9.3.3 single photons on demand (9.130)–(9.132) · score 3 · not built: (9.132) is 2.2's long-time continuum amplitude with its rate and coupling renamed through (9.118)–(9.119), three substitutions; it stays with c-eq-9-132 and c-envelope
