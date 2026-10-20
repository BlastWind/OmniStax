# Modern Atomic and Optical Physics II colour plan

The rule is root `RULES.md` item 7. This file records what is particular to
this book: its categories, their variants, its referents, and the few facts
and conventions it draws. A chapter's `COLOR.md` may refine it, never
inventing a hue.

## The test applied to the book's rates

Every rate in the book has the unit s⁻¹, and with ℏ every one of them is an
energy too, so the unit decides nothing. The test is what a formaliser would
give its own constructor, and the book answers it with its rotating-frame
Hamiltonian: the diagonal holds where the levels sit relative to the light
(ω, ν, the detunings δ and ∆, light shifts), the off-diagonal holds what
couples them (Ω, g), and the non-Hermitian part holds what leaks away (γ, κ).
They are three kinds and three types: **frequency**, **coupling** and
**rate**. A detuning is not a fourth: it is the difference of two
frequencies, as ∆x is a length, and in the rotating frame it is the level's
own frequency (Figure 2.2a draws |2̃⟩ at −δ). Every approximation the book
makes is a comparison across the three (Ω ≪ δ for adiabatic elimination,
γ ≪ ν for resolved sidebands, g ≫ κ, γ for strong coupling, Ω against γ for
saturation), and the colours let the reader see which kinds a condition
compares before reading it.

Energy is a fourth type, for what the book writes as an energy: level
energies E_n and ϵ±, potentials V and U, the recoil energy E_R, the trap
depth, U₀, k_BT, R∞, the spin-orbit and hyperfine constants A and A_HFS, and
the Hamiltonian Ĥ. A light shift the book writes as |Ω|²/δ is a frequency;
the same shift written ℏ|Ω|²/δ as a potential is an energy.

## Categories, in palette order

| Order | Type id | The book's quantities | Dimension | Why it is a type |
|---|---|---|---|---|
| 1 | `time` | t, τ, pulse durations, τ_c, τ_P | s | Every moving figure has a clock |
| 2 | `frequency` | ω, ν, ω_k, ν_k, ω_eg, the trap ν, ω_R; detunings δ, ∆, ∆₁, ∆₂, δ_k; ∆_Stark, the Lamb shift | rad/s | Where a level or a field sits; the diagonal of the rotating-frame Hamiltonian |
| 3 | `coupling` | Ω, Ω_k, Ω±, the two-photon Ω₁Ω₂/∆, g, g_k, ηΩ, the drive vector Ω(t); the Bose–Hubbard hopping t as its energy variant | rad/s | What couples two levels; the off-diagonal |
| 4 | `rate` | γ, γ_ij, γ_d, κ, R_opt, 1/τ_P, the complex Γ_21 = γ_21 − iδ as its variant | s⁻¹ | What leaks to the environment; the non-Hermitian part |
| 5 | `energy` | E, E_n, ϵ±, V, U, U₀, E_R, k_BT, μ (chemical potential), R∞, A, A_HFS, Ĥ, H_eff | J | The book writes it as an energy |
| 6 | `amplitude` | c_n, c₁, c₂, c̃₂, c_k, a₁, a₂ | none | The complex probability amplitude, the variable of every Schrödinger-picture calculation |
| 7 | `population` | P_n, p_n, ρ_nn, ρ₁₁, ρ₂₂, ∆ρ, δp | none | A probability, real and between 0 and 1 |
| 8 | `coherence` | ρ₁₂, ρ₂₁, ρ₃₁, ρ_nm (n ≠ m) | none | A complex off-diagonal element, bounded by |ρ_ij|² ≤ ρ_iiρ_jj; what a dipole, EIT and decoherence are about |
| 9 | `state` | ψ, the density operator ρ̂, the Bloch vector S̃, the condensate wavefunction | none | The state itself, pure or mixed; the Bloch vector is its drawing |
| 10 | `electric-field` | E, the envelope ℰ, Ê, Ê⁺, Ē (the field of one photon) | V/m | The applied and quantized fields |
| 11 | `dipole` | d̂, ⟨d̂⟩, μ_ab, μ; the polarization P as its per-volume variant | C·m | What the field acts on, and what radiates back in Chapter 4 |
| 12 | `susceptibility` | χ, Re χ, Im χ; the refractive index and the absorption coefficient as its two decorated parts | none | The medium's response, the axis of Figures 4.1 and 5.3–5.5 |
| 13 | `intensity` | I, I_sat | W/m² | Saturation in 4.3 and the cooling beams of Chapter 8 |
| 14 | `phase` | φ, θ (mixing angle, Bloch angles), the pulse area ∫|Ω|dt, ∆φ | rad | A pulse area is a rotation angle; θ steers STIRAP |
| 15 | `quadrature` | the field's q_j, p_j, x̂, p̂ of a mode, X₁, X₂, the coherent amplitude α | none | The axes of phase space in Chapter 9 |
| 16 | `momentum` | p, ℏk, p̂ of an atom or ion | kg·m/s | Recoil and diffusion in Chapter 8 |
| 17 | `velocity` | v, v_g, c | m/s | Doppler cooling and slow light |
| 18 | `force` | F, F±, F_reactive | N | The light forces of Chapter 8 |
| 19 | `friction` | the friction coefficient η of Chapter 8 | s⁻¹ | One half of the Doppler limit |
| 20 | `diffusion` | the momentum diffusion D | kg²·m²/s³ | The other half: T = D/(ηm k_B) |
| 21 | `temperature` | T, T_c, T_D | K | Thermal light, laser cooling, condensation |
| 22 | `length` | x, z, r, λ, λ_dB, a₀, a_B, the scattering length a, the lattice spacing | m | A distance in the scene; wavelengths are lengths |
| 23 | `wavevector` | k, k_j, K_L, ∆k | m⁻¹ | Recoil ℏk, Doppler k·v, phase matching |
| 24 | `magnetic-field` | B, B_z | T | Zeeman shifts, the MOT, magnetic traps |
| 25 | `magnetic-moment` | μ, μ_e, μ_N, μ_B | J/T | The Zeeman interaction −μ·B |
| 26 | `angular-momentum` | L̂, Ŝ, Î, Ĵ, F̂ and their components | ℏ | The atomic structure of Chapter 1 |
| 27 | `density` | n (atoms per volume) | m⁻³ | The BEC criterion and the dense MOT |
| 28 | `volume` | V, the quantization or mode volume | m³ | g ∝ 1/√V: why cavities matter |
| 29 | `mass` | m | kg | Recoil, λ_dB, the trap length |

The first nine are drawn on almost every page; the rest arrive with their
chapters. Rerun `npm run colours:default -- lukin-amo-ii` after any type is
added. σ, the scattering and absorption cross-sections of 4.2 and 11.3–11.4, stays untyped in ink (2026-10-12): it is an area the book uses in a handful of formulas, and a thirtieth hue would crowd pages that already show ten to seventeen types.

Not categories, in ink: ℏ, k_B, ε₀, μ₀, e; counts and labels (n, n̄, N,
quantum numbers l, m, J, F, j); ratios (the Lamb–Dicke η, g_J, g_F,
Clebsch–Gordan coefficients, g⁽²⁾, the saturation parameter, nλ_dB³, the
filling factor ν of 11.8, transmission t and reflection r); operators that are
neither an observable of a type nor a state (σ_ij, â and â† as such, ĉ_k, the
Liouvillian). A constant that is a value of a type wears it (c, a_B, μ_B,
R∞).

## Variants and decoration

A detuning keeps the frequency hue, told by its letter; a single-photon ∆
and a two-photon δ in one figure differ by dashing. The rotating-frame tilde
is decoration. The complex Γ_21 is a rate. An initial value (c₁(0), ρ⁽⁰⁾) is
hollow or dashed beside the filled current value. Re and Im of a coherence or
a susceptibility share the hue and differ by dashing (Re dashed, Im solid,
since absorption is the one the reader watches). A Rabi frequency drawn as a
pulse envelope Ω(t) is a coupling; the drive vector on the Bloch sphere is a
coupling arrow with its third component the detuning. The polarization P is a
dipole per volume.

## Referents

The levels of a scheme are referents of their section: |1⟩, |2⟩, |3⟩ of a Λ
system, |g⟩, |e⟩, the dressed |±⟩, the dark |D⟩ and bright |B⟩, m = ±½ of
Sisyphus cooling. The level line, its population bar and every mention of
the state in the text wear the referent's colour, so a reader follows |3⟩
from diagram to equation. A subscript that names a level splits as root 7
asks: in Ω₁ the Ω takes the coupling hue and the 1 the colour of the field
it names. The two fields of a two-field figure (probe and coupling, pump and
Stokes, σ⁺ and σ⁻ beams) are referents too. In Chapter 9 the atom and the
cavity mode are referents of each section that draws both.

## Conventions

The CPK element palette, `F.el`, for an atom or ion the book names (Na, Rb,
Ne, Ca⁺, Be⁺, H). The generic "two-level atom" has no element and is ink with
its levels in referent colours.

No other convention of the field is drawn. Red and blue detuning and the red
and blue sidebands are named for the side of resonance, not for any colour
of light: a red sideband of a 729 nm transition is infrared. They are
frequencies and wear the frequency hue, told apart by sign and label.

## Facts

What is a fact here is short. The sodium D lines (589.0 and 589.6 nm, 1.3.4)
are yellow where a figure draws the light itself; any other laser is drawn in
its referent or category colour, since the book almost never says its
wavelength and the colour of an unnamed laser would be invented. A spectrum
in this book (absorption against detuning) is a graph of a susceptibility,
not of colour, and is never painted as a rainbow. A density image of an
expanding cloud (the superfluid and Mott patterns of 11.8) is a false-colour
map of one scalar on one scale with its legend. Microwave and RF fields (the
hyperfine transition, the RF knife of 11.3) have no colour.
