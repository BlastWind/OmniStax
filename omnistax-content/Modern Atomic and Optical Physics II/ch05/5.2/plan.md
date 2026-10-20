# Plan: 5.2 Resonant excitation: Electromagnetically induced transparency

Source: `source.md` (PDF pages 92–97, Eqs. 5.46–5.59, Figures 5.4–5.5, no footnotes). Planned and built in one go (Chen approved building without stopping); this plan is left for review after.

## Blocks

The section opens with a paragraph before its one numbered subsection; 5.2.1 is the `<h2>` and its run-ins are `<h3>` inside it (config).

| id | `<h2>` / `<h3>` | holds |
|---|---|---|
| `opening` | none | the opening paragraph (cites Figure 5.4) |
| `dark-resonance` | 5.2.1 The dark resonance | Eqs. 5.46–5.47, `sim-eit` (Figure 5.4 + 5.5); h3 Physical picture of the dark resonance (Eqs. 5.48–5.53); h3 Dispersive properties of the dark resonance: ”slow light” (Eqs. 5.54–5.57); h3 Preparation of the dark state (Eqs. 5.58–5.59, `sim-dark-state`) |

Every numbered display is `<div class="equation" id="eq-5-K">` with `\tag{5.K}`. No prose citation of an equation by number. "Figure 5.4" and "Figure 5.5" both link to `#sim-eit`.

## Concepts (8, prep-merged)

| concept | introducing span |
|---|---|
| dark-resonance | `dark-res` (the quoted “dark resonance”) |
| bright-state | `bright` ("a particular superposition of the lower states, \|B⟩") |
| dark-state | `dark-state-def` ("This so-called dark state") |
| dark-state-interference | `interference` ("a quantum interference phenomenon …") |
| eit-dressed-picture | `dressed-picture` ("the dressed state interpretation provides a reasonable description") |
| electromagnetically-induced-transparency | `eit` (the quoted “electro-magnetically induced transparency” or “slow light”) |
| slow-light | `eq-5-56` |
| dark-state-preparation | `counter-intuitive` (the quoted “counter-intuitive pulse sequence”) |

`uses` rows: lambda-detunings, two-photon-resonance, ac-stark-shift (`opening`); weak-probe-solution, probe-susceptibility, complex-decay-rate (`eq-5-46`); effective-hamiltonian (`eq-5-48`); dressed-states (`dressed-picture`); density-matrix-coherences (`rho21`); refractive-index, group-velocity (`eq-5-55`); stirap, adiabatic-theorem (`prep`); rabi-oscillations, pulse-area (`stirap`). Forms get anchors `5.2-eq-5-K`.

Concept spans judged per mention. Wrapped: "dark resonance" (dark-resonance); "dark state"/"dark states" and \|D⟩ where it names the state (dark-state); \|B⟩ in its definition (bright-state); "dressed states"/"dressed state interpretation" (dressed-states, eit-dressed-picture on its run); "susceptibility" of the probe (probe-susceptibility); "two-photon resonance" (two-photon-resonance); "single photon detunings" (lambda-detunings); "AC Stark shifts" (ac-stark-shift); "effective Hamiltonian" (effective-hamiltonian); "coherence on the forbidden transition" (density-matrix-coherences); "density matrix" (density-matrix); "group velocity" (group-velocity in the general relation 5.55, slow-light where the reduced velocity of the probe is meant); "refractive index"/"index of refraction" (refractive-index); "adiabatically follow(s)" (adiabatic-theorem); "STIRAP" and its expansion (stirap); "Rabi oscillations" (rabi-oscillations); "π pulses" (pulse-area). Plain: "resonance" alone, "absorption" alone, "decoherence rate" (no Λ concept), "atomic coherence" (general), "excited state" words that mark \|3⟩ carry `data-ref` instead, headings.

## Symbols and variables (chapter 5, section 5.2)

`ost meanings` run for each. Rows, mirroring 5.1's links: Delta_1 → lambda-detunings (ref field-1); Delta_2 → lambda-detunings (ref field-2); delta → lambda-detunings, redefines (two-photon detuning); Delta → lambda-detunings, redefines (the common single-photon detuning); Omega_1, Omega_2 → rabi-frequency (ref field-1, field-2); Gamma_12, Gamma_13 → complex-decay-rate; gamma_12 → coherence-decay-rate; gamma_3 → lambda-non-hermitian-evolution (ref lvl-3); H_eff → effective-hamiltonian, redefines (the Λ system's); rho_21 → density-matrix-coherences; chi → susceptibility; n_ref → refractive-index; v_g → group-velocity; nu_bar (frequency, 4.2's meaning); V (volume, 4.2's meaning); lambda (length, 4.2's meaning); omega (frequency, redefines: the light's frequency in ω(k)). In ink with no symbol row, as in 5.1: ρ₃₁, γ₁₃, c, N, k, Δw.

## Referents

One group, the ids of 5.1: the Λ scheme's three levels and two fields, all drawn by `sim-dark-state`. Marked in prose where the text names the state or field, never inside display equations. \|D⟩, \|B⟩ and \|±⟩ are drawn by no figure, so they are concept spans or ink, not referents.

| id | label | figures |
|---|---|---|
| lvl-1 | the ground state \|1⟩ | sim-dark-state |
| lvl-2 | the metastable state \|2⟩ | sim-dark-state |
| lvl-3 | the excited state \|3⟩ | sim-dark-state |
| field-1 | the probe field Ω₁ | sim-dark-state |
| field-2 | the coupling field Ω₂ | sim-dark-state |

## Figures

5.1 builds Figure 5.3 as its own Sim (its plan, "Wanted at chapter level"), so this section folds Figures 5.4 + 5.5 only. Units: the book gives no numbers; the EIT figure measures frequencies in units of γ₁₃ (5.1's choice for Figure 5.3), the dark-state Sim in units of γ₃ and time in 1/γ₃ (5.1's Rabi Sim).

- sim-eit · Figure 5.4 + 5.5 (number 5.4, folds 5.5) · dark-resonance, eit-dressed-picture, slow-light, probe-susceptibility · variation by slider: Im and Re of ρ₃₁/Ω₁ from Eqs. (5.32)–(5.33), exact, against the probe detuning Δ₁; dragging Δ₂ from 6 γ₁₃ to 0 walks the book's family of Figure 5.4 (the two-photon resonance merging into the single-photon line and broadening) into Figure 5.5's dark resonance, and at Δ₂ = 0 |Ω₂| widens the window from the narrow dip (width ≈ |Ω₂|²/γ₁₃) to two dressed-state peaks 2|Ω₂| apart, while the Re curve steepens through δ = 0 as |Ω₂| falls (Eq. 5.54, slow light); γ₁₂ fills the dip in (Eq. 5.47). The book's stills show one family and one curve and leave the width, the dressed limit and the γ₁₂ dependence to words · arrows: none · still: Δ₂, |Ω₂|, γ₁₂ are parameters, not a clock · sliders Δ₂ (frequency, 0 to 6 γ₁₃, default 0, Figure 5.5's; special 0, resonance), |Ω₂| (coupling, 0 to 3 γ₁₃, default 0.6; specials 0, no coupling field, and γ₁₃, where the book's two width regimes meet), γ₁₂ (rate, 0 to 0.3 γ₁₃, default 0; special 0, γ₁₂ → 0) · headline states the absorption at δ = 0 as a fraction of the bare line's peak and where the two resonances stand · graph alone: ρ₃₁/Ω₁ in units of 1/γ₁₃, −0.6 to 1.2, against Δ₁, −8 to 8 γ₁₃, fixed (Im never exceeds 1/γ₁₃ and |Re| stays under 0.6; the farthest feature the sliders reach, the light-shifted peak at Δ₂ + |Ω₂|²/Δ₂, stays inside for Δ₂ ≥ 1.2 and leaves the frame only past it at the largest |Ω₂|, where it is cut at the edge); dense sampling about δ = 0 and the light-shifted peak · 2D. Im solid and Re dashed in the susceptibility hue (COLOR.md), named in a legend; dashed guides at Δ₁ = 0 and δ = 0 labelled at the top (one label when they meet); at Δ₂ = 0 and |Ω₂| ≥ γ₁₃ a bracket 2|Ω₂| between the dressed-state positions, labelled; hover names on the peaks, the zero and the guides. Readout: Eq. (5.47) with the live numbers at Δ₂ = 0, the general Im[iγ₁₂/(γ₁₂(γ₁₃ − iΔ₂) + |Ω₂|²)] otherwise (the morph fires on landing at Δ₂ = 0); note at Δ₂ = 0: the window's width from the book's estimate for the live regime and the slope of Re at δ = 0 from Eq. (5.54).
- sim-dark-state · Sim · dark-state, dark-state-preparation, bright-state, dark-state-interference · animation and variation: two Gaussian pulses Ω₁(t), Ω₂(t) drive the resonant Λ atom (Δ = δ = 0, γ₁₂ = 0) from |1⟩ under the non-Hermitian Ĥ_eff of Eq. (5.48), integrated in full; in the counter-intuitive order (Ω₂ first) the atom follows the dark state of Eq. (5.50) from |1⟩ to |2⟩ with |3⟩ nearly empty, while the intuitive order (Ω₁ first) drives it through |3⟩, from which it decays; the peak Rabi frequency sets how adiabatic the passage is. The text states this only in words and Eqs. (5.58)–(5.59) give only the two ends · arrows: kinematic (population flowing between the levels, drawn as discs on the levels filling and emptying), symbolic (the field arrows, which fade with their pulses, and the decay squiggle) · moving: time runs 0 to 40/γ₃; transport · slider peak |Ω| (coupling, 0.2 to 4 γ₃, default 3; both pulses peak there); choice order (Ω₂ first · Ω₁ first) · headline: the live populations of |2⟩ and the probability of a jump · graph beside a vertical scene: the Λ level panel left, two strips right on one time axis (Ω₁, Ω₂ in their field colours, 0 to 4 γ₃; populations of |1⟩, |2⟩, |3⟩ in their level colours and the jump probability dashed ink, 0 to 1) · 2D. Readout: Eq. (5.50) with the live Ω₁, Ω₂; note: the overlap |⟨D|ψ⟩|² live. Not 7.3's STIRAP figure: 7.3 owns the adiabaticity conditions and the experiment; this one shows the dark state the section defines (Wanted at chapter level).

`draws`: sim-eit `susceptibility`, `frequency`, `coupling`, `rate`; sim-dark-state `coupling`, `population`, `time`. No facts or conventions (the generic Λ atom has no element).

### Extra sims (root 15), not built

- Slow light: a probe pulse entering the medium compresses by v_g/c and crawls through, the spin coherence it drags drawn along with it, then leaves at full length; a |Ω₂| slider sets v_g by Eq. (5.56). The compression is stated in one sentence and the EIT figure already shows the slope that causes it.

## Exercises

None (config: no MIT 8.422 problem maps to Chapter 5; "see problem set 3", twice, is the Harvard course and is kept verbatim).

## Lead draft (AI-marked)

> The Λ system with its fields tuned to resonance: the dark resonance in the probe's absorption and the dark state behind it, the steep dispersion that slows light in the transparency window, and the counter-intuitive pulse sequence that prepares the dark state.

## Objectives, summary, notes

`objectives` and `summary_html` empty (the book prints neither). `notes` empty.

## Corrections (footnotes rows, kind `correction`)

| id | marker after | the book prints | meant |
|---|---|---|---|
| c-eq-5-48 | (5.48) | −iℏγ₃/2 \|3⟩⟨3\| beside couplings without ℏ (and (5.49) the same) | one unit throughout: −(iγ₃/2)\|3⟩⟨3\| in the frequency units of Eq. (5.1), or ℏ on the couplings too |

Checked and not corrected: "ρ₂₁ → −Ω₁/Ω₂" in 5.2.1 agrees with (5.53) for Ω₁ ≪ Ω₂, since Ω₂*/|Ω₂|² = 1/Ω₂, and with (5.29) at δ = 0; (5.58)'s −\|2⟩ against "ending up in \|2⟩" is a global phase; (5.47) follows from (5.46) at δ = Δ = 0; (5.56) follows from (5.54)–(5.55) with χ = 3πγ(N/V)(λ/2π)³ρ₃₁/Ω₁ and γ₁₃ = γ/2; the width estimates drop factors of 2 by the book's own remark. Kept as printed with no note (typos): "When the the two resonances" (Figure 5.4's caption), "of the the resonance", the stray ” before slow light in the heading.

## Wanted at chapter level

- 5.1's (5.21) mixes ℏ the same way as (5.48) (Ĥ of (5.1) in frequency units plus −iℏγ₃/2); 5.2 corrects (5.48)–(5.49); the chapter pass decides whether 5.1 carries the same note.
- Symbols for the ink quantities 5.1 also asks for: rho_31 (coherence), gamma_13 (rate); then 5.2's Eqs. (5.46), (5.47), (5.54), (5.56), (5.57) and both figures write them with macros.
- 7.3's STIRAP figure, when built, may point back to `sim-dark-state` for the dark state itself and keep to what 7.3 adds (adiabaticity, the mixing angle, the experiment).
- The edge `stirap` ← `dark-state-preparation` (prep's call, staged in ch07's rows).

Decided at the chapter pass: (5.21) in 5.1 carries the same ℏ note. rho_31 and gamma_13 are book symbols with 5.2 rows and macros in text and figures. The `stirap` ← `dark-state-preparation` edge goes to Chapter 7's pass, since Chapter 7 is being built. `ai` now records effort high.

## Derivations

- 5.2.1 the vanishing absorption at the dark resonance (5.46)–(5.47) · score 3 (printed block) · built as drv-dark-resonance-absorption ((5.47)); (5.46) stays as the fact; the dip widths after it are stated in prose and stay
- 5.2.1 the dark state (5.48)–(5.53) · score 1 (printed block) · built as drv-dark-state ((5.50), (5.51), (5.53)); (5.48)–(5.49) stay as the facts, (5.48) with c-eq-5-48; (5.52) is the start of the last node
- 5.2.1 dispersion and slow light (5.54)–(5.57) · score 7 · built as drv-dark-resonance-dispersion ((5.54), printed) and drv-slow-light ((5.56), whose working the book leaves to problem set 3); (5.55) stays as the fact; (5.57), the window width stated earlier in 5.2.1, stays printed; the sentence after the host no longer opens with "so that"
