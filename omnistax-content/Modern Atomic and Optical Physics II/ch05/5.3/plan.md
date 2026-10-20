# Plan: 5.3 Parametric Processes

Source: `source.md` (PDF pages 97–105, Eqs. 5.60–5.82, Figures 5.6–5.7, no footnotes). Planned and built in one go (Chen approved building without stopping); this plan is left for review after.

## Blocks

The section opens with a paragraph before its first numbered subsection (config). The two numbered subsections are the `<h2>` blocks with the book's numbers; the run-ins are `<h3>` inside theirs.

| id | `<h2>` / `<h3>` | holds |
|---|---|---|
| `opening` | none | the opening paragraph ("nonlinear black box") |
| `cascade-block` | 5.3.1 Example: the cascade system | Eqs. 5.60–5.61, Figure 5.6; h3 Non-linear polarization in the cascade level configuration (5.62–5.65) |
| `sfg-block` | 5.3.2 Sum frequency generation | Eqs. 5.66–5.75; h3 Phase-matching (5.76–5.77); Competing processes (Figure 5.7); Sum-frequency generation in the cascade system (5.78–5.80); Practical implementation of phase-matching; Saturation (5.81); Generalization to other parametric processes; Third-order nonlinear processes (5.82) |

Every numbered display is `<div class="equation" id="eq-5-K">` with `\tag{5.K}`; (5.71), an empty numbered row, is kept as an empty display with its tag. The three citations of "Eq. (5.76)" link to `#eq-5-76`. Figure 5.6 sits after the paragraph the book's page break splits ("…back to |1s⟩."), Figure 5.7 after the Competing processes paragraph it interrupts. Neither is cited by number in the prose.

## Concepts (14, prep-merged)

| concept | introducing span |
|---|---|
| parametric-processes | `parametric` (the opening paragraph; the quoted “nonlinear black box” wrapped inside) |
| sum-frequency-generation | `sfg` ("Sum frequency generation has an intuitive semiclassical explanation …", with Eq. 5.60) |
| second-order-susceptibility | `eq-5-61` |
| cascade-nonlinear-susceptibility | `eq-5-65` |
| undepleted-pump-approximation | `undepleted` ("This is known as the undepleted pump approximation …") |
| sum-frequency-propagation | `eq-5-68` |
| wavevector-mismatch | `eq-5-75` |
| phase-matching | `phase-matching-def` (the quoted “phase-matching condition.”) |
| coherence-length | `coherence-length-def` ("for distances less than the coherence length, ΔkL ≪ 1 …") |
| competing-processes | `competing` |
| cascade-sfg-output | `eq-5-78` |
| phase-matching-methods | `pm-methods` (the first paragraph of Practical implementation) |
| parametric-saturation | `eq-5-81` |
| difference-frequency-generation | `dfg` |

`uses` rows: three-level-configurations (`cascade-intro`), selection-rules and wavefunction-parity (`hydrogen`), density-matrix-coherences and macroscopic-polarization (`sfg`), effective-raman-coupling, many-excited-states-raman and ac-stark-shift (`eq-5-62`), slowly-varying-envelope-approximation (`eq-5-66`), susceptibility (`eq-5-67`), electromagnetically-induced-transparency and lambda-system (`pm-methods-eit`), light-polarization (`pm-crystals`), kerr-effect (`kerr`); `reinforces` third-order-susceptibility (`eq-5-82`). Every 5.3 form gets its anchor `5.3-eq-5-K`; eq-5-82 (a form of ch04's `third-order-susceptibility`, staged in `ch04/book-rows.json`) is anchored the same way through `ost set` and a merge of chapter 4.

Concept spans judged per mention. Wrapped: "parametric processes", “nonlinear black box” (parametric-processes); "cascade level configuration", "cascade system" (three-level-configurations); "sum frequency generation", "sum-frequency generation", "parametric upconversion", "parametric up-conversion" (sum-frequency-generation); "polarization" where it is the medium's (macroscopic-polarization); "polarizations" of the pump fields and crystal (light-polarization); "nonlinear susceptibility" meaning χ⁽²⁾ (second-order-susceptibility); "third order susceptibility" (third-order-susceptibility); "atomic coherence", "off-diagonal density matrix components" (density-matrix-coherences); "Rabi frequency" of the effective coupling (effective-raman-coupling); "two-level system" (two-level-atom); "Stark shifts from the applied fields" (ac-stark-shift); "two-photon detuning δ_eff" (cascade-nonlinear-susceptibility); "slowly-varying envelope approximation", "generalized SVEA" (slowly-varying-envelope-approximation); "slowly-varying amplitudes" (slowly-varying-envelope); "linear response", "linear susceptibility/ies" (susceptibility); "undepleted pump approximation"; "phase-matching condition", "phase-matched", "phase-matching", "phase matching" (phase-matching); "coherence length"; "competing processes"; "birefringence", "Angle tuning" (phase-matching-methods); "EIT-like configurations", "EIT propagation" (electromagnetically-induced-transparency); "Λ configuation" (lambda-system, misspelt as printed); "difference frequency"; "Kerr effect"; "Selection rules" (selection-rules); "parity" (wavefunction-parity); "dipole couplings", "atomic dipole moments" (dipole-matrix-element). Plain: "two-photon transition" (no concept names it), "linear Stark shift" and "DC Stark shift" (no static-Stark concept), "inversion symmetry", "phase velocity", "momentum-conservation", "second harmonic generation", "two-photon resonance" here (the Λ concept of 5.1 does not fit the cascade), headings.

## Symbols and variables (chapter 5, section 5.3)

`ost meanings` run for each. New book symbols staged in `ch05/book-rows.json` (the brief allows small staged additions): `z_prop` z, `L_med` L (book's `L` is the angular momentum L̂), `P_nl` P (the book prints the sum-frequency polarization as italic P; `P_pol` is bold **P**). New rows: chi_2nd → second-order-susceptibility; delta_eff → cascade-nonlinear-susceptibility; Delta_k → wavevector-mismatch; E_env_1, E_env_2 → slowly-varying-envelope (ref field-1, field-2; as 4.3's E_p, E_m); E_env_3 → sum-frequency-propagation (ref field-3); z_prop (length, no concept); L_med (length, no concept); P_nl → macroscopic-polarization. Own meanings, redefines: chi (the linear susceptibility χ_i at ν_i), nu (ν_i of field i), k_mag (k_i inside the medium), n_ref (n_i at ν_i), mu (μ_ij of the cascade), Omega (Ω_1i, Ω_2i), Delta (Δ_i from the intermediate |i⟩, frequency, no concept), Omega_eff (through the intermediate states; effective-raman-coupling), E_env (the total field of 5.66 and the common amplitude of 5.80). Reused meanings: rho_21, V, t, chi_3.

In ink: ℏ, ε₀, c, N, the vacuum ν_i/c inside exponents stays with \knu; the order labels (1), (3).

## Referents

One group: the cascade's levels and its three fields (COLOR.md). Marked in prose where the text names the state or the field, never inside display equations.

| id | label | figures |
|---|---|---|
| lvl-1 | the lower state \|1⟩, \|1s⟩ in hydrogen | fig-cascade-sfg |
| lvl-2 | the upper state \|2⟩, the Stark-mixed 2s–2p hybrid in hydrogen | fig-cascade-sfg |
| lvl-i | the intermediate states \|i⟩ | fig-cascade-sfg |
| field-1 | the applied field ℰ₁, ν₁ | fig-cascade-sfg |
| field-2 | the applied field ℰ₂, ν₂ | fig-cascade-sfg |
| field-3 | the sum-frequency field ℰ₃, ν₃ | fig-cascade-sfg |

## Figures

- fig-cascade-sfg · Figure 5.6 · three-level-configurations, sum-frequency-generation · standardisation only (the book's two schemes in house style, the levels and fields in the referent colours the prose shares) · arrows: symbolic (the field arrows are notation) · still: config's faithful copy; the book gives no relation for the Stark mixing that a slider could vary · no controls · headline none (the panel titles are the book's) · graph none · 2D (book RULES: level diagrams). Kind `figure`. Labels as the book: "Cascade system: frequency sum generation", \|1⟩ \|2⟩ \|i⟩ "intermediate states"; "Hydrogen atom in a DC electric field", \|2p⟩ \|2s⟩ "hybrid state" \|1s⟩, "Both single- and two-photon transitions are dipole allowed."; ℰ₁ ν₁, ℰ₂ ν₂, ℰ₃ ν₃ (ℰ for the book's E, as the text writes it); hover names on each.
- sim-phase-matching · Figure 5.7 · phase-matching, wavevector-mismatch, coherence-length, cascade-sfg-output · variation by slider: |Ẽ₃(z)|² = sin²(Δkz/2)/(Δk/2)² from Eq. (5.76) against z beside the phase-matched z² of Eq. (5.77); the reader sees the field follow the phase-matched growth for z ≪ π/Δk, turn over at π/Δk (Eq. 5.78) and fall back to zero at 2π/Δk, the peaks shrinking as 1/Δk² while the phase-matched curve leaves the scale; the end of the medium L reads the output · arrows: none · still: z is a distance, not a clock · sliders Δk (wavevector, 0 to 4 ℓ⁻¹, default 1.75 so that 3.3 periods fill the axis as in the book; special 0, phase-matched), L (length, 0.5 to 12 ℓ, default 8; special at π/Δk, the peak of Eq. 5.78) · headline: where the field peaks and its value, and the output at L · graph alone: |Ẽ₃|² 0 to 2 against z 0 to 12 ℓ, fixed (the default peak 1.31 at 65 % of the height; peaks above 2, for Δk < 1.41, and the parabola are clipped at the top and the headline states their numbers) · 2D. The book's "coherence length 2π/Δk" bracket under the axis, the peak's π/Δk mark, the medium shaded to L with the output dot (pinned when off scale); hover names on the peak, the output and the parabola. Readout: Eq. (5.76) squared with the live numbers, morphing to Eq. (5.77)'s L² at Δk = 0; note: the unit.

`draws`: fig-cascade-sfg `electric-field`, `frequency`; sim-phase-matching `electric-field`, `wavevector`, `length`. No facts or conventions (the book's red and blue arrows are not facts; hydrogen's levels are drawn, not an atom).

Units: the book gives no numbers. Lengths are in an arbitrary unit ℓ, Δk in ℓ⁻¹ and |Ẽ₃|² in |ν₃χ⁽²⁾Ẽ₁Ẽ₂ℓ/2c|².

### Extra sims (root 15), not built

- Phase slip as a phasor chain: each slice dz of the medium adds a short arrow e^{iΔkz}dz to Ẽ₃; at Δk = 0 they line up and the sum grows as L, otherwise the chain curls into a circle of diameter 2/Δk and the sum (its chord) returns to zero at 2π/Δk. It shows why the polarization "slips out of alignment" and interferes destructively, which Figure 5.7 shows only as a curve.
- Saturation with pump depletion: the coupled equations with depletion (beyond the undepleted pump approximation) at Δk = 0, |ℰ₃|² rising as L² then saturating as |ℰ₁|², |ℰ₂|² fall, their sum constant as Eq. (5.81) requires. The book derives no depleted solution, so the Sim would solve equations the text does not write.

## Exercises

None (config: no MIT 8.422 problem maps to Chapter 5; the section prints no invitation).

## Lead draft (AI-marked)

> Parametric processes, in which atoms only mediate the mixing of light fields: how a cascade system with broken inversion symmetry generates the sum frequency, how the generated field propagates beside its two pumps, why the wavevector mismatch governs its growth, how phase matching is engineered in gases and crystals, what limits the growth, and the step to difference-frequency and third-order processes.

## Corrections (footnotes rows, kind `correction`)

| id | marker after | the book prints | meant |
|---|---|---|---|
| c-eq-5-64 | (5.64) | P₃ = (N/V)μ*(1/ℏ²)Σ… without a sign | (5.63)'s ρ₂₁ = −Ω_eff/δ_eff carries a minus sign into P₃ and into χ⁽²⁾ of (5.65) |
| c-eq-5-71 | (5.71) | the number on an empty line | no equation is missing |
| c-eq-5-76 | (5.76) | ∫₀ᴸ … e^{iΔkz} without dz | the integral over dz |
| c-k-i | "ν_iχ_i/2c = n_iν_i/c = k_i" after (5.75) | ν_iχ_i/2c = n_iν_i/c | (n_i − 1)ν_i/c, the medium's addition to k_i = n_iν_i/c; Δk = k₁ + k₂ − k₃ still holds since the vacuum parts cancel for ν₃ = ν₁ + ν₂ |
| c-delta-k | "≈ 2(ν₃/c)χ₃⁽¹⁾" before (5.79) | 2 | ½: n₃ − 1 = χ₃⁽¹⁾/2 |
| c-eq-5-79 | (5.79) | −½ | −2: (5.78) with Δk ≈ ½(ν₃/c)χ₃⁽¹⁾ gives −2χ⁽²⁾/χ₃⁽¹⁾ |

Checked and not corrected: (5.78) follows from (5.76) at z = π/Δk; (5.79)'s ℏ sits where χ⁽²⁾/χ₃⁽¹⁾ puts it. The book's Figure 5.7 labels the distance to the first zero "Coherence length D = 2π/Δk" while the caption and text speak of growth over ~π/Δk; both are the book's, and the Sim marks both. "Eq. (5.76) indicates … grows linearly" (Saturation) is the Δk → 0 limit of (5.76), written out in (5.77): kept. "UV and UUV" (VUV likely) is unverifiable and kept. Kept as printed with no note (typos): "approprately", "a atomic cloud", "the net output nonlinear processes", "configuation", "mathmatical", "do not use atomics", "may also employed", "(n a lossless system)".

## Objectives, summary, notes

`objectives` and `summary_html` empty (the book prints neither). `notes` empty.

## Wanted at chapter level

- Symbols added here for chapter 4's reuse if it wants them: `z_prop` (z), `L_med` (L), `P_nl` (italic P, macroscopic-polarization); Chapter 4 writes z and the polarization P in ink or bold.
- The ink quantities μ_{1i}, μ_{2i} use `\kmu` with a subscript; Ω_{1i}, Ω_{2i}, Δ_i likewise.

## Derivations

- 5.3.1 the second-order susceptibility of the cascade system (5.62)–(5.65) · score 2 (printed block) · built as drv-cascade-susceptibility ((5.64), (5.65)); (5.61)–(5.63) stay as the facts; the minus sign the book drops is the nodes' note, so c-eq-5-64 and its marker are gone
- 5.3.2 propagation and phase matching (5.66)–(5.77) · score 3 (printed block) · split at the book's prose into drv-sfg-propagation ((5.73), (5.74) from (5.67), (5.68) and the substitution (5.72), with (5.75) a fact card after "where") and, under Phase-matching, drv-sum-frequency-output ((5.76), (5.77)); the missing $dz$ of (5.76) is the node's note (c-eq-5-76 gone); (5.66)–(5.71) stay as given: the field, the propagation equations of 4.1 and the far-detuned susceptibilities, two moves each at most. The two links "Eq. (5.76)" go to #drv-sum-frequency-output
- 5.3.2 the largest sum-frequency field in the cascade system (5.78)–(5.80) · score 2 (printed block) · built as drv-maximal-sum-frequency-field ((5.78), (5.79)); the prefactor −1/2 the book prints is the node's note (c-eq-5-79 gone); the inline $\Delta k \approx …$ stays printed with c-delta-k, now naming the sign as well as the factor; (5.80) is an order-of-magnitude estimate and stays printed
