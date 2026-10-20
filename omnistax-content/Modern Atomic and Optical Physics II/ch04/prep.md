# Chapter 4 prep

Rows staged in `ch04/book-rows.json`, merged (35 concepts, 20 symbols, 48 edges); `ch04` added to `book.json` chapters. Forms carry ids `eq-4-N` and no anchors: each section adds its anchors with `ost set` once its `text.html` has ids. `chapter.json` has no variables rows yet: each section adds rows for the symbols it owns (`ost add lukin-amo-ii variables --chapter 4`, `ost meanings` first), linking `concept` only where the symbol names it. `ost check` errors until then only with "has the symbol …, which no variables row linked to it carries".

Chapter 3 is not merged. ρ₁₁, ρ₂₂, ρ₁₂, ρ₂₁, ρ̂, γ₁₂, R_opt and the optical Bloch equations, steady-state coherence (Eq. 4.53 recalls 3.4) and density matrix concepts are Chapter 3's: no symbol or concept staged for them here. Write them plain (no `\k` macro, no span) and list them under "Wanted at chapter level"; the chapter pass adds macros, spans, variables rows and the edges `two-level-susceptibility` / `nonlinear-susceptibility` → Chapter 3's steady-state OBE concept, `independent-atoms` → its density-matrix concept, `saturation-parameter` → its R_opt (rate-equation) concept.

The intro's concepts (macroscopic-polarization, independent-atoms, maxwell-equations-with-polarization) carry `section: "4.1"`, since an intro page has no coverage; 4.1 is their first section page.

## intro (built by prep)

`intro/text.html`, `intro/section.json`: Eqs. 4.1–4.6 with ids `eq-4-1`…`eq-4-6` (anchors for those forms: `intro-eq-4-N`, set at the chapter pass if the checker wants them). Spans: dipole-matrix-element, macroscopic-polarization, independent-atoms, maxwell-equations-with-polarization, slowly-varying-envelope-approximation. Macros used: \kd, \kmu, \kV, \kPpol, \kEfield, \kB, \kt; ρ plain.

## 4.1 The slowly-varying envelope approximation

Concepts (10): macroscopic-polarization (P_pol, dipole), independent-atoms, maxwell-equations-with-polarization, wave-equation-with-polarization, slowly-varying-envelope-approximation, slowly-varying-polarization (P_env, dipole), svea-propagation-equation, plane-wave-propagation-equation, optical-frequency-comb, multimode-svea.

Symbols it owns (first variables row is 4.1's): P_pol → macroscopic-polarization, P_env → slowly-varying-polarization; typed rows without concept: nu_bar (frequency, the central frequency ν̄), k_bar (wavevector, k̄ = ν̄/c). Reuse: E_field (𝐄, new meaning "the propagating field": judge `redefines`), E_env (𝓔, the envelope; `ost meanings E_env`), B, t, k, mu, V.

Exercise: none. Footnote 1 (Eqs. 4.7–4.9).

Figures: none in the book; a comb spectrum beside its pulse train is a Sim suggestion only.

Suspected book errors (verify, `correction` rows):
- Eq. (4.7): ∇(∇·𝓔) for ∇(∇·𝐄) (the footnote then sets ∇·𝐄 = 0).
- Eq. (4.22): a number printed on an empty line; kept as a blank display, named in the plan.
- Eq. (4.26)–(4.28): harmonics written e^{inkz} with a single k while each has ν_n; and (4.28) uses k̄ for every harmonic. Check whether a correction is warranted or it is the book's approximation (k_n ≈ k̄).
- Intro (the plan of whichever agent runs the chapter pass): Eq. (4.3) prints ∏_{j=1}^N and ρ̂⁽¹⁾⊗…⊗ρ̂⁽ᴺ⁾ together, the ∏ redundant (meant ⊗_j ρ̂⁽ʲ⁾); Eq. (4.4)'s N_i/V_i before a sum over the N_i atoms counts them twice (meant 1/V_i Σ).

## 4.2 Linear optical propagation

Concepts (15): susceptibility (chi), linear-propagation-solution, absorption-coefficient (alpha), refractive-index (n_ref), dispersion, group-velocity (v_g, velocity), two-level-susceptibility, resonant-absorption, absorption-cross-section (sigma_tilde, untyped), unitary-limit, far-detuned-refraction, homogeneous-broadening, inhomogeneous-broadening, doppler-broadening, inhomogeneous-cross-section.

Symbols it owns: chi → susceptibility, alpha → absorption-coefficient, n_ref → refractive-index, v_g → group-velocity, sigma_tilde → absorption-cross-section (untyped: `type: null` on the row if the checker wants it explicit); typed rows: delta_nu (frequency, the detuning δν from ν̄), lambda (length), I_int (intensity), v_z (velocity), v_T (velocity, the thermal velocity), n_v (density, the velocity distribution n(v_z)). Reuse: gamma (spontaneous-emission-rate, `ost meanings gamma`), mu, V, k, P_env, E_env, nu, omega.

Exercise: none.

Figures (book): 4.1 Re/Im χ against δν; 4.2 Doppler-broadened absorption against a single velocity class. See config.

Suspected book errors:
- Eq. (4.50): the prefactor i μ²/ħε₀ of (4.43) is dropped; "≈" reads as a proportionality, not the susceptibility.
- "if we keep only the second order terms" (4.2.2) means terms through first order in δν, as (4.39)–(4.41) do.
- First sentence: "propagation in a resonant field" for a resonant medium.
- Rb "γ ≈ 5MHz": the D lines have γ/2π ≈ 6 MHz; a loose round figure, probably not a correction.
- Check (4.36) α = k̄ Im χ as an intensity rate (consistent with (4.47)–(4.48): verified by prep, σ̃ = (3/4π)λ²γ/γ₁₂ follows) and (4.42), (4.44), (4.52) (prep checked: all consistent).

## 4.3 Nonlinear atomic response

Concepts (10): nonlinear-susceptibility (chi_n), nonlinear-propagation, saturation-parameter (s_sat, untyped ratio), resonant-saturation, kerr-effect, third-order-susceptibility (chi_3), saturation-intensity (intensity), optical-pumping, saturation-spectroscopy, saturated-absorption-dip.

Symbols it owns: chi_n → nonlinear-susceptibility, chi_3 → third-order-susceptibility, s_sat → saturation-parameter (untyped); typed rows: Omega_pm (coupling, Ω± = μ𝓔±/ħ, `ref` the two beams as referents), E_pm (electric-field, the pump and probe envelopes 𝓔±). Δ here is the atomic resonance (called an "energy", used as a frequency): a `redefines` row on Delta, type frequency. S(δ − kv_z) (capital, the velocity-resolved saturation parameter) can share the saturation-parameter concept on its own row, or be written plain; the builder judges. Reuse: delta, Omega, gamma, nu, k, v_z, n_v, mu, I_int, chi.

Exercise: none.

Figures (book): 4.3 intensity against distance; 4.4 pump and probe velocity classes; 4.5 probe absorption with the saturated dip. See config (4.4 + 4.5 fold).

Suspected book errors:
- Eqs. (4.59)–(4.60): ∂𝓔/∂z = ik̄χ_n𝓔 drops the ½ of (4.32) (should be (ik̄/2)χ_n).
- Eq. (4.53) has −iΩ, Eq. (4.69) +iΩ₋ for the same linear coherence; and (4.43)'s +i with (4.53)'s −i gives the opposite sign: the sign convention is inconsistent.
- Eq. (4.76): the integrand has no dx. Prep checked the value π/2(1+a²) and (4.75)'s result: both right.
- 4.3.1: Δ called the transition "energy", used as a frequency.
- "linear decay in strong fields to the exponential decay characteristic of weak fields": consistent with Figure 4.3; no error.
- Figure 4.4: panel labels put the strong field at kv_z = Δ − ν and the weak at ν − Δ, the reverse of the text (ν = Δ + kv_z for the strong field); titles "Δ − ν > γ", "Δ − ν < γ" mean |Δ − ν|. The figure's readout states the text's relation; a `correction` row on the caption if the original image is shown.
- Figure 4.4's caption ends without a period (kept).

## Calls

- σ̃ (absorption cross-section) is left untyped. COLOR.md names σ only as the "likely" new type at 11.4, not a planned one, so no type was added; whoever settles 11.4 decides, and σ̃ here and σ_inhom then take it.
- α and n are typed `susceptibility` per COLOR.md ("the refractive index and the absorption coefficient as its two decorated parts"), though α has units m⁻¹.
- `n_ref` (refractive index) and `n_v` (velocity distribution, density) are new keys beside the untyped counts n; `I_int` beside the nuclear spin `I`.
- 4.3's run-in headings before 4.3.1 are taken as h2s (they are outside any numbered subsection); a reviewer may prefer them as h3s under an opening.
- No MIT problem maps here.
