# Plan: 4.2 Linear optical propagation

Source: `source.md` (PDF pages 68–74, Eqs. 4.29–4.52, Figures 4.1–4.2, no footnotes, no exercises). Planned and built in one go (config: no stops); this plan is left for review after.

## Blocks

| id | `<h2>` | holds |
|---|---|---|
| `opening` | none | the opening: Eqs. 4.29–4.34, the three effects (1)–(3) as the book's paragraphs |
| `absorption-refraction` | 4.2.1 Absorption and refraction | Eqs. 4.35–4.37, the SVEA validity condition |
| `dispersion` | 4.2.2 Dispersion | Eqs. 4.38–4.42 |
| `two-level` | 4.2.3 Two level systems | Eqs. 4.43–4.44, Figure 4.1; h3 "Resonant fields" (Eqs. 4.45–4.49), h3 "Far-detuned fields" |
| `broadening` | 4.2.4 Line-broadening mechanisms | the two examples (1)–(2); h3 "Doppler broadening" (Eqs. 4.50–4.52, Figure 4.2, the closing paragraph) |

Every numbered display is `div.equation#eq-4-K` with `\tag{4.K}`; (4.39)–(4.41) are three numbered lines as printed. "Eq. (4.50)" links to `#eq-4-50`. "The SVEA equation" names 4.1's Eq. (4.25) without a number and stays unlinked.

## Concepts (15, prep-merged)

| concept | introducing span |
|---|---|
| susceptibility | `susceptibility` ("The proportionality constant defines the susceptibility") |
| linear-propagation-solution | `linear-solution` ("a general solution for linear propagation") |
| absorption-coefficient | `effect-absorption` ("(1) Absorption arises from the imaginary part") |
| refractive-index | `effect-refraction` ("(2) Refraction is caused by the real part") |
| dispersion | `effect-dispersion` ("(3) Dispersion results from frequency dependence") |
| group-velocity | `group-velocity` ("the so-called group velocity") |
| two-level-susceptibility | `eq-4-43` |
| resonant-absorption | `resonant-absorption` ("there is no refraction on resonance, but there is absorption") |
| absorption-cross-section | `cross-section` ("the absorption cross-section") |
| unitary-limit | `unitary-limit` (“unitary limit”) |
| far-detuned-refraction | `far-detuned` ("the medium is almost entirely refractive") |
| homogeneous-broadening | `homogeneous` (“homogeneous” linewidth) |
| inhomogeneous-broadening | `inhomogeneous` (“inhomogenous” broadening) |
| doppler-broadening | `doppler` ("the Doppler broadened atoms") |
| inhomogeneous-cross-section | `inhomogeneous-cross-section` ("reduces the δν = 0 cross section") |

Every form gets its anchor `4.2-eq-4-K`. `uses`: plane-wave-propagation-equation (`eq-4-31`), slowly-varying-envelope-approximation (`svea-valid`), slowly-varying-polarization (`opening-weak`), weak-field-response (`opening-weak`), density-matrix-coherences (`opening-weak`), optical-bloch-equations, steady-state-coherence (`two-level-obe`), spontaneous-emission-rate and dipole-matrix-element (`two-level-gamma`), coherence-decay-rate (`two-level-lorentzian`). Chapter 3's rows are merged (unbuilt), so its concepts and symbols (ρ₁₁, ρ₂₂, ρ₂₁, γ₁₂, T) are linked.

Concept spans, judged per mention: "susceptibility" names `susceptibility` everywhere it means χ, and `two-level-susceptibility` only in 4.2.3's "thus the susceptibility"; "absorption"/"absorptive" as the effect of Im χ wears `absorption-coefficient`, "refraction"/"refractive" `refractive-index`; "absorption spectrum" and "ensemble absorption spectrum" stay plain; "cross section" wears `absorption-cross-section` at (4.47)–(4.49) and `inhomogeneous-cross-section` in the Doppler paragraph; "linewidth" is plain except "homogeneous linewidth" (`homogeneous-broadening`); "Doppler effect" plain (no concept of the Doppler shift); "Lorentzian lineshape" plain; "dephasing rate" in Figure 4.2's caption is an attribute, plain.

## Symbols and variables

`ost meanings` run for each. 4.2 rows (chapter 4): chi → susceptibility; P_env → slowly-varying-polarization; E_env → slowly-varying-envelope; delta_nu (frequency); nu_bar (frequency); k_bar (wavevector); alpha → absorption-coefficient; n_ref → refractive-index; v_g → group-velocity; nu → optical-frequency; omega → atomic-transition-frequency; mu (dipole); V (volume); gamma → spontaneous-emission-rate (2.3's meaning); gamma_12 → coherence-decay-rate; rho_11, rho_22 → density-matrix-populations; rho_21 → density-matrix-coherences; lambda (length); I_int (intensity); sigma_tilde → absorption-cross-section (untyped concept); v_z, v_T (velocity); n_v (density); T (temperature); t (time).

Plain, in ink: N, z, c, k₀, ε₀, ℏ, the δ function, σ_inhom. (no symbol row), and the scalar k of kv_z, kv_T: the book's `k` symbol is the bold **k** of 2.1, so writing \kk would print a glyph the book does not (wanted below).

## Referents

| id | label | figures |
|---|---|---|
| resonant-class | the velocity class on resonance with the field | sim-doppler |

Marked in the Doppler paragraph ("a subset of atoms with the appropriate velocity class"). Re χ and Im χ are decorated variants of one type (COLOR.md: Re dashed, Im solid), not referents.

## Figures

Units: the book gives no numbers for the line, so frequencies are in units of γ and χ in units of (3/8π²)(N/V)λ³ (the prefactor of Eq. 4.44, population difference 1); the caption says so.

- sim-susceptibility · Figure 4.1 · two-level-susceptibility, absorption-coefficient, refractive-index, dispersion, resonant-absorption, far-detuned-refraction, unitary-limit · variation by slider: the reader slides a cursor along the detuning and reads Re χ and Im χ there, sees the ratio |Re χ/Im χ| = |δν|/γ₁₂ grow (purely absorptive on resonance, almost purely refractive far off), the slope of Re χ that sets the group velocity, and the line widen and flatten as γ₁₂ grows with σ̃ in the note, at its unitary limit for γ₁₂ = γ/2 · arrows: symbolic (the γ₁₂ half-width bracket) · still: δν and γ₁₂ are parameters, not a clock · sliders δν (frequency, −6 to 6 γ, default 2; special 0, resonance) and γ₁₂ (rate, 0.5 to 2 γ, default 0.5; special 0.5, purely radiative) · headline: which effect dominates and by what ratio · graph alone: χ (−1 to 2) against δν (−6 to 6), fixed from the slider extremes (Im χ peaks at γ/γ₁₂ ≤ 2, Re χ within ±γ/2γ₁₂ ≤ 1) · 2D (a relation between quantities). Labels: Re[χ] and Im[χ] once each on their curves, γ₁₂ on its bracket; the cursor dots and the tangent carry hover names. Readout Eq. (4.44) with the live χ; note σ̃ = (3/4π)λ²γ/γ₁₂.
- sim-doppler · Figure 4.2 · doppler-broadening, inhomogeneous-broadening, homogeneous-broadening, inhomogeneous-cross-section · variation by slider: the book draws one Doppler-broadened line; the reader moves kv_T and γ₁₂ and watches the sum over velocity classes (Eq. 4.50, computed) turn from the single Lorentzian (γ₁₂ ≫ kv_T) into a Gaussian of width ~kv_T, its resonant height falling as the readout's cross-section ratio says, and moves the field's frequency to light up the one velocity class kv_z = δν it is resonant with · arrows: symbolic (the brackets) · still · sliders kv_T (frequency, 0 to 5 γ, default 3), γ₁₂ (rate, 0.5 to 2 γ, default 0.5; special 0.5, radiative), δν (frequency, −10 to 10 γ, default 2) · headline: the class the field reaches and how far the line has flattened · graph alone: Im χ (0 to 2) against δν (−12 to 12), fixed (kv_T stops at 5γ so the narrow line and the wide one both read on one axis) · 2D. Thirteen thin ink lines are the velocity classes' Lorentzians drawn up to the spectrum, as the book draws them; the resonant class is the referent's colour and thick, its γ₁₂ half-width bracketed; the spectrum is the susceptibility hue; a dashed level marks the peak of one class alone (γ/γ₁₂). Labels: the spectrum once, the resonant class once, γ₁₂ beside its bracket, the Doppler bracket ±kv_T when kv_T ≥ 2γ₁₂ (it would sit on the class bracket below that). Readout: σ_inhom.(0)/σ̃ computed, and ≈ √π γ₁₂/kv_T (Eq. 4.52 over Eq. 4.48) beside it only where kv_T ≥ 3γ₁₂, where the estimate holds.

`draws`: sim-susceptibility `susceptibility`, `frequency`, `rate`; sim-doppler `susceptibility`, `frequency`, `rate`. No facts or conventions (no element named; Rb is mentioned, not drawn).

### Extra sims (root 15), not built

- A pulse crossing the cell beside the same pulse in vacuum: the envelope delayed by z(1/v_g − 1/c) and attenuated by e^{−αz/2} at the carrier detuning chosen on a slider, slow beside the line and advanced, but nearly absorbed, on it (Eqs. 4.41–4.42, 4.46). Moving tier; config marks it optional, and Figure 4.1's tangent already shows the slope that sets v_g.
- Beer's law: I(z) for a resonant beam against the optical depth Nσ̃z/V. Rejected: one exponential, nothing to imagine.

## Exercises

None: no inline invitation, and no MIT 8.422 problem maps to Chapter 4 (config).

## Lead draft (AI-marked)

> How a field weak enough for the atoms to respond linearly travels through a resonant medium: the susceptibility and the absorption, refraction and dispersion it encodes, the susceptibility of a gas of two-level atoms on and far from resonance with its absorption cross-section, and how homogeneous and inhomogeneous broadening, Doppler broadening above all, shape the absorption spectrum.

## Objectives, summary, notes

Empty (the book prints none); `notes` empty: nothing is left out.

## Book faults

Kept verbatim, no correction: "processes which affects", "inhomogenous" (twice), "homogenously", "Two level systems" (heading). "If we keep only the second order terms" before (4.39) keeps the first two terms of (4.38), the book's own count ("the first … the second"), so it is loose wording, not an error. "γ ≈ 5MHz" for Rb: the D lines have γ/2π ≈ 6 MHz; the book's "≈" makes it a round figure, not corrected (call for Chen). "Far from resonance, δν ≫ γ₁₂" means |δν|; not corrected.

## Corrections

| id | attaches to | the book prints | meant |
|---|---|---|---|
| c-resonant-field | first sentence, after "in a resonant field" | light propagation in a resonant field | in a resonant medium: the field is what propagates, the medium of atoms is resonant (the chapter's title) |
| c-eq-4-50 | `eq-4-50` | χ(δν) ≈ ∫dv_z n(v_z)/(γ₁₂ − i(δν − kv_z)) | the factor iμ²/ħε₀ of Eq. (4.43) is dropped, so the line is a proportionality; with it (atoms in the ground state) χ(δν) = i(μ²/ħε₀)∫dv_z n(v_z)/(γ₁₂ − i(δν − kv_z)) |

Checked and consistent: (4.32)–(4.34) from (4.31); (4.36)–(4.37) from (4.35); (4.39)–(4.42) (1/v_g = 1/c + k̄χ′/2 with k̄ = ν̄/c); (4.44) from (4.43) with γ = μ²k₀³/3πε₀ℏ; (4.46)–(4.49) (α = k̄Im χ(0) = Nσ̃/V); (4.52) (the exact resonant ratio √π a e^{a²}erfc a, a = γ₁₂/kv_T, tends to √π γ₁₂/kv_T); "∼500MHz" for Rb at 300 K (FWHM 2√ln2 kv_T ≈ 2π × 510 MHz).

## Wanted at chapter level

- Edges (prep's list): `two-level-susceptibility` → `steady-state-coherence` (3.4); `two-level-susceptibility` also rests on `weak-field-response` (3.4) if the chapter pass judges it direct.
- A scalar wavevector symbol for k in kv_z, kv_T (the `k` row is bold **k**); until then k is in ink in 4.2.
- Chapter 3's spans and macros are used here before Chapter 3 is built; if Chapter 3 renames `coherence-decay-rate`, `density-matrix-populations`, `density-matrix-coherences`, `optical-bloch-equations`, `steady-state-coherence`, `weak-field-response` or the symbols ρ₁₁, ρ₂₂, ρ₂₁, γ₁₂, T, 4.2 follows.

## Derivations

- 4.2 opening, linear propagation (4.29)–(4.34) · score 1 (printed block) · built as drv-linear-propagation ((4.32), (4.33), (4.34)); (4.29)–(4.31) stay as the facts
- 4.2.2 the group velocity (4.38)–(4.42) · score 1 (printed block) · built as drv-group-velocity ((4.39)–(4.42)); (4.38) stays; the "For example …, we find" sentence and the "so the envelope propagates at the group velocity" line go with the block
- 4.2.3 the linear susceptibility (4.43)–(4.44) · score 5 · built as drv-two-level-susceptibility for (4.43) (five hidden moves from (4.29), (4.30), the weak-field coherence and Ω = μℰ/ħ); (4.44), two moves after the book's own paragraph, is below the bar and stays printed
- 4.2.3 resonant fields, the cross-section (4.45)–(4.49) · score 3 (printed block) · built as drv-resonant-cross-section ((4.45)–(4.49)), σ̃ defined by (4.47) with α of (4.36)
- 4.2.4 the Doppler-broadened cross-section (4.50)–(4.52) · score 7 · built as drv-doppler-cross-section (the velocity sum, the Lorentzian narrow beside n(v) by (2.49), then (4.52)); (4.50) stays printed with its correction c-eq-4-50
