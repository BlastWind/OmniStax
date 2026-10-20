# Plan: 4.3 Nonlinear atomic response

Source: `source.md` (PDF pages 74–81, Eqs. 4.53–4.76, Figures 4.3–4.5, no footnote, no exercise). Planned and built in one go (config: Chen approved building without stopping); this plan is left for review after.

## Blocks

The run-in headings before 4.3.1 stand outside any numbered subsection, so they are h2s after an opening block (config); 4.3.1 is an h2 with its run-in "The saturated absorption spectrum" as an h3.

| id | `<h2>` | holds |
|---|---|---|
| `opening` | none | Eqs. 4.53–4.60, the nonlinear susceptibility and the propagation equation |
| `resonant` | Resonant fields | Eqs. 4.61–4.62, the saturation parameter, `sim-saturated-decay` (Figure 4.3) |
| `far-detuned` | Far-detuned fields | Eqs. 4.63–4.64, the Kerr effect |
| `weak-saturation` | Weakly saturated regime | Eq. 4.65 and the unnumbered expansion `eq-weak-expansion` |
| `experimental` | Experimental considerations | the saturation threshold, optical pumping |
| `spectroscopy` | 4.3.1 Saturation spectroscopy | Eq. 4.66, `sim-saturation-spectroscopy` (Figures 4.4 + 4.5); h3 "The saturated absorption spectrum" with Eqs. 4.67–4.76 and the unnumbered `eq-chi-minus` |

Figure 4.3 is printed at the top of page 76, after Eq. (4.63), where LaTeX floated it; its caption and the text it illustrates (the saturated regime's linear decay turning exponential) are the resonant paragraph's, so the figure closes `resonant`. Figures 4.4 and 4.5 fold into one figure placed where 4.4 stands, after Eq. (4.66). The prose cites neither figure by number.

## Concepts (10, prep-merged)

| concept | introducing span |
|---|---|
| nonlinear-susceptibility | `nonlinear-susceptibility` ("the nonlinear susceptibility in the Fourier domain") |
| nonlinear-propagation | `nonlinear-propagation` ("the nonlinear propagation equation") |
| saturation-parameter | `saturation-parameter` ("this saturation parameter s") |
| resonant-saturation | `bleaches` ("the applied field bleaches the medium") |
| kerr-effect | `kerr-effect` ("known as the Kerr effect") |
| third-order-susceptibility | `chi-3` ("χ⁽³⁾ is the next order correction") |
| saturation-intensity | `saturation-intensity` ("the intensity needed to saturate a transition at resonance") |
| optical-pumping | `optical-pumping` ("an effect known as optical pumping") |
| saturation-spectroscopy | `saturation-spectroscopy` ("Saturation spectroscopy is an important example…") |
| saturated-absorption-dip | `sat-dip` ("the saturated absorption dip") |

`uses`: steady-state-coherence (eq-4-53), steady-state-population (eq-4-54), optical-pumping-rate (eq-4-55), susceptibility (eq-4-56), two-level-susceptibility (eq-4-58), plane-wave-propagation-equation (eq-4-59), refractive-index (kerr-effect), homogeneous-broadening, inhomogeneous-broadening (saturation-spectroscopy), doppler-broadening (doppler-classes), absorption-coefficient (sat-spectrum), alkali-ground-hyperfine (optical-pumping), saturation (experimental). Chapter 3's concepts are merged in `book.json` (prep ran), so they are linked now rather than left plain. Forms get anchors `4.3-eq-4-N`; eq-5-82 (a Chapter 5 form of third-order-susceptibility) is left to Chapter 5.

Concept spans, judged per mention: "nonlinear susceptibility" and χ_n's "susceptibility" in its sense wear `nonlinear-susceptibility`; "the linear susceptiblity" `two-level-susceptibility`; bare "the susceptibility" of the opening's propagation sentence `nonlinear-susceptibility` (it is χ_n); "saturating absorption" `nonlinear-propagation`; "saturation parameter" `saturation-parameter`; "saturate"/"saturated" naming the steady-state saturation of 3.4 `saturation`, the velocity-class "saturated" of 4.3.1 too; "refractive index" `refractive-index`; "self-phase modulation", "self-focussing" `kerr-effect`; "Doppler broadened"/"Doppler broadening" `doppler-broadening`; "inhomogenously broadened" `inhomogeneous-broadening`, "homogeneously broadened" `homogeneous-broadening`; "steady state coherence" `steady-state-coherence`; "hyperfine levels" `alkali-ground-hyperfine`; "absorption coefficient" `absorption-coefficient`; "saturated absorption" (term) `saturated-absorption-dip` where it names the dip, `saturation-spectroscopy` where it names the method ("saturated absorption spectroscopy", "saturated spectroscopy"). Plain: "resonance", "steady state" (the regime, not the concept), "absorption" as a word for the process, "linear regime", the headings.

## Symbols and variables

`ost meanings` run for every symbol. 4.3 rows (chapter 4):
- chi_n → nonlinear-susceptibility; chi_3 → third-order-susceptibility; s_sat → saturation-parameter (untyped, ink).
- Omega_pm (coupling, Ω± = μℰ±/ℏ, concept rabi-frequency), E_pm (electric-field, the envelopes ℰ±, concept slowly-varying-envelope).
- New symbols (staged in `ch04/book-rows.json`): `Omega_p` (\kOmegap, Ω₊), `Omega_m` (\kOmegam, Ω₋), `E_p` (\kEp, ℰ₊), `E_m` (\kEm, ℰ₋), each a 4.3 row with `ref` `pump` or `probe`, so the subscript wears the beam's colour (COLOR.md: the two fields of a two-field figure are referents). The ± forms keep \kOmegapm and \kEpm.
- Delta → atomic-transition-frequency ("the bare atomic resonance Δ"; Chapter 4 has no earlier Δ, so no `redefines`).
- Chapter 3 symbols the section writes, rows with their Chapter 3 concepts: rho_11, rho_22 → density-matrix-populations; rho_21 → density-matrix-coherences; gamma_12 → coherence-decay-rate; R_opt → optical-pumping-rate.
- Reused without a row (same meaning, type inherited): delta, Omega, gamma, nu, nu_bar, k_bar, omega, mu, V, lambda, chi, alpha, v_z, v_T, n_v, I_int, E_env, P_env, E_field, t.
- Ink: N (count), ε₀, ℏ, the scalar P, P± and P^{(v_z)} (no scalar polarization symbol), S(δ − kv_z) (the velocity-resolved saturation parameter, untyped like s, written plain), the plain k of 4.3.1 (the book's k is not the bold \kk), n (the constant density), E of Eq. (4.65), x and a of Eq. (4.76).

## Referents

| id | label | figures |
|---|---|---|
| pump | the strong field ℰ₊ | sim-saturation-spectroscopy |
| probe | the weak field ℰ₋ | sim-saturation-spectroscopy |

Marked in 4.3.1's prose wherever the text names a beam ("a strong field in the forward direction", "the weak field", "the probe beam"), and "two counterpropagating beams" as both.

## Figures

- sim-saturated-decay · Figure 4.3 · resonant-saturation, saturation-parameter, saturation-intensity, nonlinear-propagation · variation by slider: the book's one curve (I(0) = I_sat) barely shows the linear stretch it names; dragging I(0) up to 8 I_sat straightens the start into a line of slope −α₀I_sat that turns exponential once I falls through I_sat, and dragging it below I_sat leaves Beer's exponential, drawn dashed beside it for every state · arrows: none · still: the curve is a profile in space, not a clock · slider I(0)/I_sat (intensity, 0.05 to 8, default 1, the book's; special 1, the saturation intensity) · headline: the distance α₀z at which the beam has halved, against a weak beam's ln 2 · graph alone: I/I(0) 0 to 1 against α₀z 0 to 12 (fixed; the largest I(0) reaches 1 % of itself at α₀z ≈ 12.5), the I = I_sat level dashed with "saturated regime" above and "linear regime" below as the book labels them · 2D. Model: dI/dz = −α₀I/(1 + I/I_sat), from α = k̄ Im[χ_n(0)] (4.36, 4.61) with s = I/I_sat, solved exactly: α₀z = ln(I(0)/I) + (I(0) − I)/I_sat (it reproduces the book's curve: 0.57 at α₀z = 1, 0.27 at 2). Readout: the propagation law with the live α at the entrance.
- sim-saturation-spectroscopy · Figure 4.4 + 4.5 · saturation-spectroscopy, saturated-absorption-dip, doppler-broadening, saturation-parameter · variation by slider: the book's two panels of 4.4 are two states of the δ slider and 4.5 is the curve it traces; one drawing shows why the dip appears: the pump burns a hole in n(v_z)(ρ₁₁ − ρ₂₂) at kv_z = δ, the probe reads the atoms at kv_z = −δ (its shaded class, whose area is the probe's absorption), and only as δ → 0 does the probe's class fall into the hole; the graph beneath traces α₋(δ) with the dip of width ~γ₁₂, the moving point under the hole · arrows: none · still: δ is a laser setting, not a clock · sliders δ = ν − Δ (frequency, −30 to 30 μs⁻¹, default −12, the book's distinct classes; special 0, resonance), |Ω₊| (coupling, 0 to 3 μs⁻¹, default 1; special 0, no pump), γ₁₂ (rate, 0.5 to 4 μs⁻¹, default 1) · headline: the two classes and the probe's absorption against its unpumped value · graph below: top panel n(v_z)(ρ₁₁ − ρ₂₂)^{(v_z)} against kv_z, bottom α₋ against δ, one x scale (−36 to 36 μs⁻¹, fixed) so the hole stands over the point · 2D. Model: Eq. (4.74) integrated numerically with the Gaussian n(v_z) of Eq. (4.51), kv_T = 12 μs⁻¹, radiatively broadened (γ = 2γ₁₂, so S = 2|Ω₊|²/(γ₁₂² + (δ − kv_z)²) and s = 8|Ω₊|²/γ² on resonance, the text's threshold); the dip is the model's to all orders in Ω₊, its lowest order Eq. (4.75). Labels: "pump" and "probe" on the two classes (their referent colours), "without the pump" on the dashed curves, the dip named; hover names on both curves and the point. Readout: S(δ − kv_z), Eq. (4.71), at the probe's class kv_z = −δ with the live numbers. Figure 4.4's swapped labels are not copied: the strong field's class is kv_z = ν − Δ = δ (correction row on the figure).

`draws`: sim-saturated-decay `intensity`, `susceptibility`; sim-saturation-spectroscopy `frequency`, `coupling`, `rate`, `density`, `susceptibility`. No facts or conventions: the atoms have no element.

Units: the book gives none; frequencies in μs⁻¹ (rad/μs) as in 2.1, distance in units of 1/α₀.

### Extra sims (root 15), not built

- The Kerr lens: a Gaussian beam's transverse intensity profile and the index n = n₀ + n₂I it writes across the medium, with the wavefronts curving (self-focussing for n₂ > 0, de-focussing for n₂ < 0) as the detuning's sign flips; a view the text gives in one sentence.
- Optical pumping into the other hyperfine level: three-level populations under a resonant field with a slow hyperfine relaxation slider, showing saturation reached at a far lower R_opt than the two-level s = 1.

## Exercises

None (config: no MIT 8.422 problem maps to Chapter 4; the section prints no invitation).

## Lead draft (AI-marked)

> How a two-level medium answers a strong continuous-wave field: the saturated, nonlinear susceptibility, saturation on resonance and the intensity it takes, the intensity-dependent index far from resonance, the leading third-order correction, optical pumping, and saturation spectroscopy, which uses a strong pump and a weak probe to see through Doppler broadening.

## Objectives, summary, notes

`objectives` and `summary_html` empty (the book prints neither). `notes` empty.

## Book faults kept verbatim (config)

"susceptiblity" (twice), "detunings ,", "c.c," in Eq. (4.66), "inhomogenously", "inhomogenous", "saturating absorption", Figure 4.4's caption without its period.

Not corrected (judgement): 4.3.1 calls Δ "the atomic transition energy" while ν = Δ ± kv_z uses it as a frequency; the book writes energies over ℏ loosely elsewhere, and the variables row says Δ is the resonance frequency.

## Corrections (`footnotes` rows of kind `correction`)

| id | attaches to | the book prints | meant |
|---|---|---|---|
| c-eq-4-53 | `eq-4-53` | ρ₂₁ = −iΩ(ρ₁₁ − ρ₂₂)/(γ₁₂ − iδ), the sign of Eq. (3.99) | +iΩ: Eqs. (4.43), (4.58) and (4.69) take ρ₂₁ = iΩ(ρ₁₁ − ρ₂₂)/(γ₁₂ − iδ), which follows from 2.1's ċ̃₂ = iδc̃₂ + iΩc₁ and gives Im χ_n > 0, absorption; with −i, (4.57) would give χ_n of the opposite sign to (4.58) |
| c-eq-4-59 | `eq-4-59` (and 4.60) | ∂ℰ/∂z = ik̄χ_nℰ | (ik̄/2)χ_nℰ, as Eq. (4.32) and α = k̄ Im χ of Eq. (4.36) require |
| c-eq-4-76 | `eq-4-76` | the integral without its dx | ∫ … dx |
| c-fig-4-4 | figure `sim-saturation-spectroscopy` (Figure 4.4's original) | the strong field's class at kv_z = Δ − ν, the weak field's at ν − Δ; titles Δ − ν > γ, Δ − ν < γ | the text's ν = Δ + kv_z puts the strong field's class at kv_z = ν − Δ and the weak field's at Δ − ν; the titles mean |Δ − ν| |

All four verified against the equations (the χ_n chain 4.56–4.58 with μ² = 3ε₀ℏγλ³/8π², the resonant and far-detuned limits 4.61–4.64, the weak-saturation expansion, 4.70–4.75 and the integral 4.76 = π/2(1 + a²) all check).

## Wanted at chapter level

- Prerequisite edges prep left to the chapter pass: `two-level-susceptibility` / `nonlinear-susceptibility` → `steady-state-coherence`, `saturation-parameter` → `optical-pumping-rate`, `independent-atoms` → `density-matrix` (4.1's).
- Chapter 3 rows: 4.3 carries its own variables rows for rho_11, rho_22, rho_21, gamma_12, R_opt; if Chapter 3's rows give them other meanings or refs, the chapter pass aligns the wording.
- The sign convention of Chapter 3's optical Bloch equations (3.86)–(3.89), (3.99) is opposite to 2.1's equations of motion and to 4.2's (4.43); 4.3's correction on Eq. (4.53) states it. Chapter 3's builder may want one note there too.
- Anchors for eq-5-82 (third-order-susceptibility's Chapter 5 form) belong to Chapter 5.

## Derivations

- 4.3 the nonlinear susceptibility (4.53)–(4.60) · score 4 (printed block) · built as drv-nonlinear-susceptibility ((4.56)–(4.58)) and, past the book's paragraph, drv-nonlinear-propagation ((4.59), (4.60)); (4.53)–(4.55) stay as facts, c-eq-4-53 stays on (4.53); c-eq-4-59 moves into the node notes
- 4.3 resonant, far-detuned and weakly saturated fields (4.61)–(4.65) · scores 3, 4, printed · (4.61)–(4.62): three hidden moves, not built; (4.64): four hidden moves, score 4, built as drv-far-detuned-susceptibility; the unnumbered weak-saturation expansion is a printed block, built as drv-weak-saturation-expansion; (4.63) and (4.65) are definitions and stay
- 4.3.1 the saturated-absorption spectrum (4.66)–(4.76) · score 6 (printed block) · split at the book's prose into drv-probe-coherence ((4.72)), drv-probe-susceptibility ((4.74)) and drv-saturated-absorption-dip (the expansion and (4.75)); (4.66)–(4.71) and (4.73) stay as facts; (4.76) becomes a fact card and c-eq-4-76 its node note; the integral checked numerically
