# Plan: 9.4 Quantum dynamics in non-linear mixing processes

Source: `source.md` (PDF pages 200–216, Eqs. 9.135–9.212, Figures 9.9–9.14, no footnotes). Planned and built in one go (config: Chen approved building without stopping); this plan is left for review after.

## Blocks

The section opens on the run-in "Linear amplification" as an unnumbered `<h2>` (config), then the three numbered subsections, their bold run-ins as `<h3>`.

| id | `<h2>` | holds |
|---|---|---|
| `linear` | Linear amplification | Eq. 9.135 |
| `nonlinear` | 9.4.1 Nonlinear amplification | h3 Degenerate parametric down-conversion (9.136–9.141, Figure 9.9), Phase-dependent amplification (9.142–9.143), Quantum mechanical approach (9.144–9.152), Non-degenerate parametric down-conversion (9.153–9.160) |
| `squeezed` | 9.4.2 Squeezed states | 9.161–9.170, Figure 9.10 |
| `loss` | 9.4.3 Effects of loss | h3 Squeezed light generation in a damped cavity (9.171–9.183), Steady state squeezing (9.184–9.185), Squeezing in the output field (9.186–9.191, Figure 9.11), Homodyne detection (9.192–9.199, Figure 9.12), Application to precision measurements (9.200–9.206, Figures 9.13, 9.14), Squeezing in atoms (9.207–9.210), Atom-photon correlations (9.211–9.212) |

Every display is `<div class="equation" id="eq-9-K">` with `\tag{9.K}`; citations link to their equation or figure. Figure 9.9 stands after the paragraph following (9.141), Figure 9.13 after the first paragraph of "Application to precision measurements" (source notes). "Our semiclassical description of parametric down-conversion" stays unlinked: 5.3 treats sum- and difference-frequency generation and has no down-conversion passage to point at.

## Concepts (17, prep-merged)

| concept | introducing span |
|---|---|
| linear-amplifier-noise | `amp-noise` ("Linear amplification likewise adds noise") |
| degenerate-opo | `opo` (“degenerate optical parametric oscillator” (OPO)) |
| phase-dependent-amplification | `phase-gain` ("One normal mode is amplified while the other is de-amplified") |
| opo-heisenberg-langevin | `eq-9-152` |
| nondegenerate-pdc | `eq-9-155` |
| photon-pair-state | `eq-9-157` |
| photon-number-correlations | `number-correlations` ("correlated photon statistics") |
| heralded-single-photons | `heralded` ("heralded single photon generation") |
| post-selection | `post-selection` (“post-selection”) |
| squeezed-state | `squeezed-def` (“squeezed” relative to the initial coherent state) |
| damped-squeezing | `damped` (the paragraph opening "Squeezed light generation in a damped cavity") |
| steady-state-squeezing | `threshold` ("at the threshold pumping rate") |
| output-squeezing | `output-field` ("one looks not at the field inside the cavity but at the component which leaks out") |
| homodyne-detection | `homodyne` (“homodyne detection”) |
| squeezed-interferometry | `interferometry` ("If the fields have a squeezing parameter r") |
| spin-squeezing | `spin-squeezing` ("spin squeezing in an atomic ensemble") |
| atom-photon-entanglement | `atom-photon` ("can also be applied to atom-photon entanglement") |

`uses` rows: parametric-processes and second-order-susceptibility (`degenerate`), quantum-langevin-force (`amp-noise`), heisenberg-langevin-equation and adiabatic-elimination (`hl-approach`, `adiabatic`), coherent-state and quadrature-operators (`squeezed-def`), cavity-langevin-equation, cavity-loss-rate, cavity-noise-correlations (`damped`), input-output-relation (`output-field`), local-oscillator and beamsplitter-transformation (`homodyne`), thermal-photon-distribution (`number-correlations`), undepleted-pump-approximation (`undepleted`), raman-transition (`atom-photon`). Every form gets its anchor `9.4-eq-9-K`.

Forms (book rows, through `ost set forms`): prep corrected eq-9-143 and eq-9-158; the other printed misprints that stand as forms are corrected the same way here: eq-9-182 with e^{−(κ+2β̃)t}, eq-9-208 and eq-9-209 with N/4. The text keeps the print with its correction row.

Concept spans, judged per mention: "squeezed"/"squeezed state(s)"/"squeezed light" naming the state wear `squeezed-state` ("squeezed vacuum" too; "squeezing" as the process wears it where it names the state's property, "spin squeezing" `spin-squeezing`); "parametric down-conversion" `degenerate-opo` (its term), the non-degenerate process `nondegenerate-pdc`; "coherent state" `coherent-state`; "quadrature components" `quadrature-operators`; "local oscillator" `local-oscillator`; "beamsplitter" `beamsplitter-transformation`; "Heisenberg-Langevin" `heisenberg-langevin-equation`; "adiabatic elimination" `adiabatic-elimination`; "phase-matching" `phase-matching`; "nonlinear susceptibilities" `nonlinear-susceptibility`; "thermal state" `thermal-photon-distribution`; "spontaneous emission" `spontaneous-emission`; "input-output relations" `input-output-relation`; "undepleted pump approximation" `undepleted-pump-approximation`; "threshold" `steady-state-squeezing` only where it names the pumping threshold; "collective" only in “collective” spin; "shot-noise limit" `photon-number-correlations`, “atom shot noise” `spin-squeezing`; "entangled"/"entanglement" stay plain (3.3's `system-environment-entanglement` is the system-reservoir sense); "Raman scattering" `raman-transition`. Plain: "state", "noise", "gain", "loss", "vacuum", "polarization" of the photons (9.160 encodes in light polarization: `light-polarization`), headings.

## Symbols and variables

`ost meanings` run for each. New book symbol: `P_quad` (\kPquad, P̂), the p quadrature in the Fourier domain and the homodyne quadrature P_φ (9.189–9.199), staged through `ost add … symbols --chapter 9`. 9.4 rows: sigma_gain → linear-amplifier-noise; beta_gain → degenerate-opo; beta_tilde → phase-dependent-amplification; xi_pdc → photon-pair-state; r_sq → squeezed-interferometry; S_coll → spin-squeezing; H_eff → opo-heisenberg-langevin (redefines); x_quad → quadrature-operators and p_quad typed quadrature (both redefines: the θ-weighted quadratures of 9.162–9.163); P_quad → quadrature-operators; kappa → cavity-loss-rate; F_noise (the cavity noise operator, redefines); E_env (ℰ₀, ℰ₁, ℰ₂, ℰ±, redefines); E_hat (Ê_out); P_nl (the polarizations of 9.136–9.139); chi_2nd, chi (χ₁, χ₂); nu (ν₀, ν_c, ν₁, ν₂; redefines); Delta (pump detuning, redefines); delta (detuning from |3⟩, redefines); Omega (Ω₀); g (g_j); mu (μ₃₁, μ₂₃); gamma_13 (redefines); H; theta (pump phase, redefines); phi (local-oscillator phase and the interferometer's phase shift, redefines); omega (Fourier frequency, redefines); n_bar (reservoir, redefines); alpha_coh; t. â, b̂, n̂₋, β̄, the noise b̂† of 9.135, single spins S_i and the unhatted P, x of 9.200 stay ink.

## Referents

One group across Figure 9.9 (the cascade atom and its two fields, COLOR.md: levels and the two fields of a two-field figure) and one each for Figures 9.12 and 9.14 (config: the signal â and the local oscillator b̂_LO). Marked in prose, never inside display equations.

| id | label | figures |
|---|---|---|
| lvl-1 | the ground state \|1⟩ | fig-opo |
| lvl-2 | the upper state \|2⟩ | fig-opo |
| lvl-3 | the intermediate state \|3⟩ | fig-opo |
| pump | the pump field ℰ₀ at ν₀ | fig-opo |
| generated | the generated field ℰ₁ = ℰ₂ at ν_c | fig-opo |
| signal | the signal field â | fig-homodyne |
| lo | the local oscillator b̂_LO | fig-homodyne |
| sq-in | the squeezed input â_i | fig-interferometer |
| coh-in | the coherent input b̂_i | fig-interferometer |

## Figures

- fig-opo · Figure 9.9 · degenerate-opo · standardisation only: the cascade scheme and the cavity in house style, the levels and the two fields in their referent colours, shared with the prose · arrows: symbolic (the photon arrows ν₀, ν_c on the scheme and the pump's direction into the cavity are notation; book RULES: a laser's arrow on a level diagram is symbolic, apparatus schematics are faithful copies) · still: nothing varies · no controls · headline none (the caption carries it) · graph none · 2D (book RULES: level diagrams and schematics). Labels: the three levels, ℰ₀ ν₀, the two ℰ ν_c arrows, "atomic medium", "optical cavity"; hover names on levels, arrows, mirrors and atoms. Kind `figure`.
- sim-squeezing · Figure 9.10 · squeezed-state, phase-dependent-amplification, coherent-state-uncertainty · variation by slider: β̃t stretches the coherent state's noise disc into the ellipse of (9.168)–(9.169), its area fixed, and carries its centre along (9.166)–(9.167), so the reader sees the quadrature in phase with the gain grow and the other shrink; arg α turns the starting state against the pump; beside it the field of (9.17), x̂ cos ν_c t + p̂ sin ν_c t, is traced over two cycles with its noise band, which pinches below the vacuum's band twice a cycle: the noise a still picture cannot show in time · arrows: none (the line from the origin to the state's centre is the amplitude, as the book draws it) · still: β̃t sets one moment of the evolution and is a slider, not a clock · sliders β̃t (untyped, 0–0.7, default 0.5, special 0: the coherent state) and arg α (phase, −180° to 180°, default 35°, the book's; specials 0° and 90°, the state along x̂ or p̂) · headline states the two variances and their product 1/4 · graph beside: phase space left (x̂, p̂ from −6 to 6, fixed: the centre reaches 2.12·e^{0.7} = 4.3 and the ellipse 1.4 beyond it), the field strip right (ν_c t 0–4π, field −6 to 6, fixed) · 2D (book RULES: phase space is 2D). Each state has a one-standard-deviation outline; the vacuum muted dashed, the coherent state hollow dashed (the initial value), the squeezed state shaded as a Gaussian in the state colour (one scale: every minimum-uncertainty state has the same peak); a three-line legend names them. Labels: axes, "vacuum", "coherent", "squeezed" by the legend only (they overlap at β̃t = 0). Readout: (9.168)×(9.169) = 1/4 with live numbers; note: the means of (9.166)–(9.167). |α| = 1.5 fixed (the book's picture, coherent state about three disc radii out).
- sim-output-squeezing · Figure 9.11 · output-squeezing, steady-state-squeezing · variation by slider: β̃/κ deepens the Lorentzian dip of (9.191) from the standard quantum limit to zero at threshold, while the intracavity floor of (9.185), drawn dashed, stops at one half; that contrast is the subsection's point and the book's picture shows one curve · arrows: symbolic (the width bracket) · still · sliders β̃/κ (untyped ratio, 0–0.5, default 0.5 the book's; specials 0 (no pump) and 0.5 (threshold)) and ω/κ (frequency, −4 to 4, default 0.5, the Fourier component read out) · headline: the output noise at ω against the standard quantum limit, and the intracavity value · graph alone: noise ratio 0–1.1 against ω/κ −4…4, fixed; the full width at half depth bracketed and labelled in κ · 2D.
- fig-homodyne · Figure 9.12 · homodyne-detection, local-oscillator · standardisation only: the book's schematic in house style, the signal and the local oscillator in their referent colours · arrows: symbolic (beam directions in an apparatus schematic, book RULES) · still · no controls · 2D. Not folded into a φ Sim: sweeping φ reads the quadrature noise at each angle, which is the band Figure 9.10 traces against ν_c t; the caption says so. Kind `figure`.
- sim-phase-shift · Figure 9.13 (its three panels are the three choices) · squeezed-interferometry, homodyne-detection · variation by choice and slider: the state before and after the phase shift δφ, each with its noise, and beside them the two p̂ distributions a measurement draws from, so the reader sees them part as δφ grows, part sooner when p̂ is squeezed (b) or the field is stronger (c), which the book's three stills leave to the eye · arrows: symbolic (the arc δφ) · still · state as a dropdown, since the three-button row wraps (coherent, ⟨x̂⟩ = 3 · squeezed, ⟨x̂⟩ = 3, r = 1 · stronger coherent, ⟨x̂⟩ = 6); slider δφ (phase, 0–0.4 rad, default 0.2) · the shift carries the centre round the origin while the noise of p̂ is kept at (9.201)'s e^{−2r}/2, as the book draws the ellipses unturned · headline: the shift of ⟨p̂⟩ against its noise · graph beside: the p̂ marginals on the phase space's own p̂ axis · 2D. Readout: ΔP = ⟨x̂⟩ sin δφ (Eq. 9.200 for small δφ) and (9.201) with live numbers; note: δφ_min ≈ e^{−r}/(√2⟨x̂⟩), (9.202).
- fig-interferometer · Figure 9.14 · squeezed-interferometry · standardisation only: the book's Mach-Zehnder in house style, the squeezed and coherent inputs in their referent colours · arrows: symbolic (beam directions) · still · no controls · 2D. Kind `figure`.

`draws`: fig-opo `frequency`, `electric-field`; sim-squeezing `quadrature`, `state`, `phase`, `electric-field`; sim-output-squeezing `quadrature`, `frequency`, `rate`, `coupling`; fig-homodyne none typed; sim-phase-shift `quadrature`, `state`, `phase`; fig-interferometer `phase`. No facts or conventions: the cascade atom has no element.

### Extra sims (root 15), not built

- Q-function viewer for hw1.3: the five states of the problem (Fock superposition, cat, phase state, squeezed vacuum, Kerr-evolved coherent state) as Q(α) on one shaded scale, with each problem's parameter on a slider; it would answer the held plots.
- Damped squeezing in time: ⟨Δx̂²⟩ and ⟨Δp̂²⟩ of (9.181)–(9.182) (corrected exponents) against κt, slider 2β̃/κ across threshold, the floor of (9.185) and the runaway above threshold.
- Photon-number difference of non-degenerate down-conversion: the joint distribution of n₁, n₂ (on the diagonal only) beside a beam split on a beamsplitter (binomial spread), slider ξ.

## Exercises

No inline invitation. MIT 8.422 problems (prep), kind `problem`, `origin: mit-8422`, place `end`, every solution AI-marked:

- hw1.3 (i)–(v), `hw1-3i`…`hw1-3v`, cite `squeezed-def`; (ii) cites 9.2's Schrödinger cat in its prompt. Each part asks for the analytic Q(α) and MIT's questions; the plots are held (exercise_notes) and the solution describes what the plot shows. MIT's Kerr strength ξ is K (ξ is 9.157's), the squeezing parameter ε is r, the cat's amplitude α₀ apart from Q's argument α, MIT's state angles θ, φ kept. Concepts: (i) fock-states, coherent-state-uncertainty; (ii) schrodinger-cat-state, coherent-state; (iii) fock-states, coherent-state-uncertainty; (iv) squeezed-state, squeezed-interferometry; (v) kerr-effect, schrodinger-cat-state. Judgement: held, not figure-answered, since no figure of the section draws Q(α); the Q viewer above is the suggestion that would answer them.
- hw3.2 (a)–(c), `hw3-2a`…, cite `hl-approach`, (b), (c) `squeezed-def`. MIT's H is (9.152) in the rotating frame with β = −2iΛ (β̃ = 2Λ, θ = 0); b_P, b_Q = x̂/√2, p̂/√2. Concepts: (a) opo-heisenberg-langevin, heisenberg-picture; (b) squeezed-state, quadrature-operators; (c) squeezed-state, coherent-state-uncertainty.
- hw3.3 (a), (b), (c)i–iii, `hw3-3a`, `hw3-3b`, `hw3-3ci`…, cite `squeezed-def` (a), `damped` (b), `homodyne` (c). MIT's r = 2Λt₀ (printed "r = 2Λr"); T = |t|² of (9.80). (b)'s attenuation is analytic and kept. Concepts: (a) squeezed-state, photon-statistics; (b) beamsplitter-loss-model, squeezed-state; (c)i shift-operator, beamsplitter-transformation; (c)ii photon-statistics, squeezed-state; (c)iii poisson-photon-statistics, homodyne-detection.
- hw4.1 (a)–(d), `hw4-1a`…, cite `interferometry`. MIT's B is (9.45) with t = r = 1/√2, P is (9.44), M is n̂₋. The problem's Δφ = √2/n for the Yurke state: the calculation with this beamsplitter gives ⟨M⟩ = −n sin φ and ⟨ΔM²⟩ = 1 at φ = 0, so Δφ = 1/n (checked numerically for n = 3, 5, 7); a correction row in (b)'s prompt says so. Concepts: (a) beamsplitter-transformation, linear-optical-transformations; (b) squeezed-interferometry, beamsplitter-transformation; (c) coherent-state, beamsplitter-transformation; (d) squeezed-interferometry, poisson-photon-statistics.

## Lead draft (AI-marked)

> Linear and nonlinear amplification of quantum fields: degenerate and non-degenerate parametric down-conversion, from its classical equations to an effective Hamiltonian for photon pairs; the correlated pairs and the squeezed states it makes; how cavity loss bears on squeezing inside the cavity and in the light that leaves it; homodyne detection; squeezed light in interferometry; and squeezing and entanglement with atoms.

## Objectives, summary, notes

`objectives` and `summary_html` empty; `notes` empty.

## Book faults kept verbatim

Typos: "the atomic polarization$σ_{13}^{(j)}$" (no space), "which can be described an effective Hamiltonian", "the output only partially squeezed", "Lorentizian", "late1980’s", Figure 9.14's caption with its parenthesis open, "the collective spin projection we find" (grammar).

## Corrections (`correction` rows)

| id | marker | the book prints | meant |
|---|---|---|---|
| c-eq-9-143 | eq-9-143 | ∂ℰ₋*/∂t = β̃ℰ₋ | ∂ℰ₋/∂t = β̃ℰ₋ |
| c-eq-9-146 | eq-9-146 | σ̇₁₃ without its hat | the operator's derivative, with the hat |
| c-sigma-21 | after "σ̂₁₂ = Ω₀/Δ" | σ̂₁₂ | σ̂₂₁, as the sentence and the next use |
| c-beta-star | after the identification of β* | β* = −2Σ Ω₀* g_j²/(Δδ) | matching (9.149) to (9.150) gives β* = 2Σ Ω₀ g_j²/(Δδ); the phase of β is free, so nothing after depends on it |
| c-eq-9-158 | eq-9-158 | p(n) = tanh²ξ/cosh²ξ | tanh^{2n}ξ/cosh²ξ |
| c-beta-kappa | after "κ ≫ β" | β in "κ ≫ β", "β > κ/2", "β < κ/2", "β = κ/2", "β → κ/2" | β̃ |
| c-eq-9-181 | eq-9-181 | exponents −(κ/2 ∓ β̃)t in (9.181)–(9.182) | −(κ ∓ 2β̃)t: the variance decays at twice the amplitude rate; κ = 0 then gives (9.168)–(9.169), and the limits (9.183)–(9.185) stand |
| c-eq-9-205 | eq-9-205 | ⟨n̂₋⟩ ∼ β̄δφ⟨b̂_i†b̂_i⟩ | ⟨n̂₋⟩ ≈ −δφ⟨b̂_i†b̂_i⟩ = −β̄²δφ |
| c-eq-9-208 | eq-9-208 | N/2 in (9.208)–(9.210) | N/4 for N spin-½ atoms (ℏ = 1) |
| c-hw4-1b | hw4-1b prompt | MIT's Δφ = √2/n | 1/n with the problem's own beamsplitter |

## Wanted at chapter level

- `kappa`, `F_noise`, `x_quad`, `alpha_coh`, `n_bar` meanings: 9.4's rows were written to stand alone; the chapter pass may align their wording with 9.1's and 9.3's rows.
- New book symbol `P_quad` (\kPquad, P̂) staged in `ch09/book-rows.json`.

## Build notes

Checked: `ost check --section 9.4` clean; build into `tmp/dist-9.4`; Playwright in light and dark: no console or page errors, no KaTeX errors, six figures with canvases and no transports (all still), eyebrows Figure 9.9–9.14; exercise strings KaTeX-checked (578 formulas). The three apparatus and level figures are faithful copies drawn in figlib; the three numbered Sims are still.

## Derivations

- Linear amplification (9.135) · score 8 · not built: the notes cite the amplifier relation ("one can derive a very general result") rather than derive it (orchestrator's ruling)
- 9.4.1 degenerate down-conversion, classical (9.136)–(9.143) · score 2 · built as drv-phase-dependent-amplification: (9.142) and (9.143) from (9.140)–(9.141) with β = iβ̃, one node each; (9.136)–(9.141) are stated and stay; c-eq-9-143 moves into the node's note (row and marker removed)
- 9.4.1 quantum approach (9.144)–(9.152) · block · built as two at the book's break: drv-two-photon-drive ((9.149) from (9.145), (9.147), (9.148)) after (9.148), and drv-squeezing-equations ((9.150)–(9.151)) after the paragraph on the Hermitian conjugate; c-beta-star moves into the (9.150) node's note (row and marker removed). (9.146) is stated, and as printed its −ig_j â†σ̂12 term has the sign opposite to the Heisenberg equation of (9.144), which would make the two terms of (9.149) cancel: c-eq-9-146 now says so, and (9.147)–(9.148) stay printed as the facts the work cites. (9.152) is checked against (9.150) in three moves and stays as printed
- 9.4.1 non-degenerate down-conversion (9.156)–(9.159) · score 4 · built as drv-pair-state, (9.157) from (9.155)–(9.156) to second order; the work gives ξ²/2 on |2, 2⟩ and the vacuum's −|ξ|²/2, which the node's note says. (9.158) is cited from Walls and Milburn (orchestrator's ruling, not built; c-eq-9-158 stays); (9.159) is one move and stays; (9.153)–(9.155) "by a similar calculation" are stated
- 9.4.2 squeezed states (9.161)–(9.170) · score 2 · built as drv-quadrature-squeezing, six nodes (9.164)–(9.169), after the paragraph that completes them; the two short sentences between the blocks stay before it. (9.170) is a definition
- 9.4.3 damped cavity (9.171)–(9.185) · score 4 · built as two at the book's break: drv-damped-quadrature-equations ((9.174)–(9.175)) and drv-damped-squeezing ((9.178)–(9.183), the double integrals worked); the "where" on F_x, F_p becomes "Here …", (9.176)–(9.177) stay as definitions; c-eq-9-181 moves into the (9.181) and (9.182) nodes' notes (row and marker removed). (9.184)–(9.185) are the long-time limits, one move each, (9.185) restating (9.183): stay as printed
- 9.4.3 squeezing in the output field (9.186)–(9.191) · score 2 · built as drv-output-squeezing, (9.190) and (9.191); (9.186)–(9.189) are stated; links to (9.175) and (9.191) re-pointed
- 9.4.3 homodyne detection (9.192)–(9.199) · score 2 · built as two at the figure: drv-homodyne-intensities ((9.194)–(9.195)) and drv-homodyne-difference ((9.197)–(9.199)); "provided that β̄ ≫ 1" joins the sentence before
- 9.4.3 precision measurements (9.200)–(9.206) · score 5 · built in part: drv-squeezed-phase-sensitivity ((9.202) from (9.200)–(9.201)). Not built: (9.203)–(9.206), whose cross term depends on beamsplitter phase conventions the notes never fix for Figure 9.14 (with 9.1's beamsplitter it comes out sin φ(â†b̂ + b̂†â)); c-eq-9-205 stays
