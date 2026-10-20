# Chapter 11 prep

Rows staged in `ch11/book-rows.json`, merged (93 concepts, 40 symbols, 140 edges, Hasse-reduced against the whole book). Forms carry ids `eq-11-N` (one `eq-11-er` for the unnumbered E_R) and no anchors: each section adds its anchors with `ost set` once its `text.html` has ids. `chapter.json` has no variables rows yet: each section adds the rows for the symbols it owns (`ost add lukin-amo-ii variables --chapter 11`, `ost meanings` first), linking `concept` only where the symbol names it. `ost check` errors until then only with "has the symbol …, which no variables row linked to it carries" (41 at merge). A section that wants a symbol not staged here adds it to `ch11/book-rows.json` (re-read first, small edit) and reruns `ost merge lukin-amo-ii 11`.

Chapter-wide notation (rows `redefines` where an existing key takes a new meaning):
- n is the atomic density (`n_dens`, density type) in 11.1, 11.3, 11.4; the refractive index of (11.35) is `n_ref`; n_i of (11.4) is an occupation number (`n_i`, untyped); n̂_i, n̂_L, n̂_R are untyped number operators.
- μ is the chemical potential (`mu_chem`, energy) in 11.1, 11.4, 11.5; the reduced mass μ = m₁m₂/(m₁+m₂) of 11.4.1–11.4.2 is a mass (new key, e.g. `mu_red`, if a row is wanted); the magnetic moment μ of (11.17) is a magnetic moment (new key `mu_mag` if wanted). `mu` itself is Chapter 2's dipole: never reuse it here.
- a is the s-wave scattering length (`a_scat`, latex a); 11.8 writes a_s for the same length (`a_s`, a second key: link it to `s-wave-scattering-length` only if the checker accepts a second symbol for the concept, else type `length` with no concept) and also a for the lattice spacing in (11.199) (a length, new key). a₀ in 11.4.1 is the Bohr radius, not 10.2's `a_0` (oscillator length): a new key if a row is wanted. a_t (`a_t`) is the trap's oscillator length, a_c the cloud size, a_HO the site's oscillator length.
- t is time in 11.1–11.6 and the tunnelling/hopping amplitude in 11.7–11.8: there the `t` row has `type: "coupling"` and `redefines` (book RULES, Types); the Figure 11.15 ramp time t is time again.
- ν is the filling factor in 11.8 (`nu_fill`, untyped); ν_T is the site frequency (`nu_T`). Chapter 10's ν (trap) is not used.
- η in 11.3.6 is μB₀/k_BT (`eta_ev`, untyped), neither the friction `eta` nor `eta_LD`; η in (11.101) is a wavefunction (untyped, no row).
- σ is untyped everywhere (no new type: COLOR.md only forecasts a cross-section type and plans no category): the areal density of 11.3.1, the cross-section σ₀ of (11.37) (reuse `sigma_tilde`'s concept `absorption-cross-section` in prose; no row needed), σ_el (`sigma_el`), and the scattering σ, dσ/dΩ (`sigma_sc`).
- δ in 11.3.7 is the normalized detuning (ω − ω₀)/(Γ/2), a ratio (new key if a row is wanted, untyped); δ_l is a phase shift (`delta_l`); Γ in (11.29) is a thermalization rate (rate type, new key).
- g is the inter-channel coupling of (11.93) (energy, new key if a row is wanted; not the coupling `g`), g(ϵ) the density of states, g_F the Landé factor (existing concept), g_in, g_el rate constants (untyped).
- U₀ (`U_0`) is the interaction strength 4πℏ²a/m; U(r) (`U_r`) the interatomic potential; U_o, U_c the channel potentials; V the trap potential, V₀ the lattice depth (`V_0`) or the trap's geometric volume in 11.3.6 (a volume: new key `V_geo`).
- ψ is the condensate wavefunction (`psi_GP`, state) and ψ̂ the field operator (`psi_hat`, untyped); ψ_k in 11.4.2 is a scattering wavefunction (reuse `psi` as state-vector or ink).
- k is the relative wavevector; K, K_L the slab and lattice wavevectors.

## 11.1 Introduction

Concepts (10): de-broglie-wavelength, bec-criterion, atom-number-density, critical-temperature, bose-condensation, indistinguishability-statistics, bose-einstein-distribution, chemical-potential, ground-state-occupation-bookkeeping, ideal-gas-condensate-fraction.

Symbols it owns (rows linked to concept): lambda_dB → de-broglie-wavelength, n_dens → atom-number-density, T_c → critical-temperature, n_i → bose-einstein-distribution, mu_chem → chemical-potential, N_gs → ideal-gas-condensate-fraction; epsilon_i (energy, unlinked); reuse T, m, E (energy, E_n's meaning is a level energy: a new row meaning "total energy"), N untyped.

Exercises: none.

Figures: none in the book. Candidates: matter wavepackets of size λ_dB overlapping as T falls toward T_c at fixed n, with nλ_dB³ against 2.612 (still, T slider; root 24 gate); the condensate fraction N_g.s./N against T/T_c, free (3/2) and harmonic (3) (still, a choice).

Suspected errors: (11.7)–(11.8) ϵ_i in the integrands for ϵ (concept form corrected; correction row); λ_dB subscript italic in (11.3) (kept, no row).

## 11.2 Experimental History

Concepts (4): superfluid-helium-depletion, gas-bec-metastability, spin-polarized-hydrogen, alkali-stability-window.

Symbols: none owned (T_c, n reuse 11.1's rows).

Exercises: none.

Figures: Figure 11.1 (allowed and forbidden T–n regions with T_c(n), qualitative) redrawn as a still 2D plot of (11.3) on log axes with the regions shaded, or kept a faithful copy (plan judges).

Suspected errors: "quantatively"; "Walraven" without first name; "the metastable triplet state of hydrogen has no bound state" (the triplet molecular potential is meant; correction row optional).

## 11.3 Experimental techniques used in Bose condensation of atoms

Concepts (19): trapping-and-cooling, surface-sticking, surface-resonance-time, trap-depth, buffer-gas-cooling, magnetic-trap, adiabatic-spin-following, quadrupole-trap, ioffe-pritchard-trap, evaporative-cooling, rf-knife, trap-loss-processes, linear-trap-atom-number, two-body-loss, evaporation-rate, evaporation-figure-of-merit, absorption-imaging, time-of-flight-imaging, phase-contrast-imaging.

Symbols it owns: E_B → surface-sticking, tau_R → surface-resonance-time, omega_Larmor → adiabatic-spin-following, eta_ev → linear-trap-atom-number, g_in → two-body-loss, sigma_el → evaporation-rate, d_OD → absorption-imaging; typed rows: B_z (reuse), T, n_dens, lambda_dB (the book's λ_DB), v (mean velocity v̄, velocity), theta (field angle, phase, redefines), mu_mag if wanted, V_geo if wanted, alpha (polarizability: a new key, untyped or dipole per field judged), n_ref (11.35), Gamma rate if wanted.

Exercises: none.

Figures: Tables 11.1–11.3 as tables. Figure 11.2 (buffer gas) a faithful copy, He wearing `F.el`. Figure 11.3 (evaporation) the leading Sim: a thermal energy distribution in a trap whose barrier is lowered, the hot tail cut, rethermalizing to lower T (moving, transport). Figure 11.4 (RF knife as Landau-Zener) a 2D potential: trapped and untrapped Zeeman curves against position dressed by the RF, the avoided crossing set by the RF frequency (slider) and its width by the RF amplitude (still).

Suspected errors: "outside word"; "Majorana flops"; "into an untrapped, thus" (missing noun); "From Table 11.3 … cool hydrogen using a cold He surface" (Table 11.1 holds the binding energy); Σ|B̃_i| = 0 for ΣB̃_i = 0 (correction row); "(see Figure 11.4)" where Figure 11.3 is meant (the link goes to 11.3; listed); (11.21) drops n₀ (concept form corrected; correction row); (11.29) n₀² for a per-atom rate and σ_el called a rate (correction row); (11.34) "6/2k_BT" (kept); (11.32) unpunctuated.

## 11.4 Atomic interactions

Concepts (29): dilute-quantum-gas, van-der-waals-potential, relative-motion-scattering, scattering-amplitude, scattering-cross-section, born-approximation, partial-wave-expansion, scattering-phase-shift, s-wave-dominance, s-wave-scattering-length, scattering-length-signs, s-wave-pseudopotential, identical-particle-scattering, matter-wave-index, strongly-interacting-dilute-gas, weakly-bound-state, feshbach-resonance, interacting-bose-gas-hamiltonian, second-quantization, matter-field-operator, second-quantized-hamiltonian, noninteracting-condensate-ground-state, gross-pitaevskii-equation, matter-wave-symmetry-breaking, condensate-ground-state, trap-length, thomas-fermi-approximation, healing-length, condensate-density.

Symbols it owns: r_0 → dilute-quantum-gas, U_r → van-der-waals-potential, f_k → scattering-amplitude, sigma_sc → scattering-cross-section, delta_l → scattering-phase-shift, a_scat → s-wave-scattering-length, a_bg → feshbach-resonance, U_0 → interacting-bose-gas-hamiltonian, psi_hat → matter-field-operator, psi_GP → gross-pitaevskii-equation, E_mf → condensate-ground-state, a_t → trap-length, xi_heal → healing-length, n_0 → condensate-density; unlinked typed rows: E_res (energy), Delta_Fesh (energy, the resonance strength ∆ of (11.105)), omega_t (frequency), mu_chem (reuse), k (wavevector, the relative wavevector: redefines), m, d (dipole), mu_red if wanted, B (magnetic field, reuse).

Exercises (Exercises document, after 11.4.1's material), restated in Lukin's notation with AI-marked solutions:
- MIT Problem Set 5, Problem 2 (hw5.2, verified in `source/mit-8422/hw5.pdf`), "Long-range (Van der Waals) interaction between ground-state atoms": (a) the first non-vanishing term is second order, (11.41); (b) in oscillator strengths; (c) C₆ from one dominant transition and the static polarizabilities. Notation: MIT's R (separation, nucleus a to b) is r; MIT's d_a, d_b are d₁, d₂; MIT's H_el(R) is V̂_d(r) of (11.40) with the unit vector R̂ where Lukin writes r/r; MIT's C₆ in U = −C₆/R⁶ is ℏ²r₀⁴/2μ of (11.42); MIT's |g_a g_b⟩, |i_a g_b⟩ are Lukin's |0⟩, |n⟩ per atom; MIT's α_g (static polarizability) matches 11.3.7's α; oscillator strengths and the Thomas-Reiche-Kuhn sum rule are not in Lukin (defined in the prompt as MIT does). Gaussian units as in (11.40).
- MIT Problem Set 6, Problem 1 (hw6.1, verified in `source/mit-8422/hw6.pdf`), "Long-range interaction between an excited atom and a ground-state atom": (a) nearly degenerate atoms, first order vanishing and the second-order 1/R⁶ with its validity; (b) identical atoms, the resonant 1/R³ curves of the symmetric and antisymmetric states; (c) C₃ ∝ ℏγ(λ/2π)³. Notation: MIT's Γ (spontaneous decay rate) is γ; MIT's R is r; MIT's E_i^{(a)} − E_g^{(a)} is ℏω_eg per atom; MIT's |i⟩ is |e⟩ of the two-level atom.

Figures: Figure 11.5 (regions A and B) a still 2D potential with the matching window r₀ < r < 1/k (k slider optional). Figures 11.6 + 11.7 folded into one live square-well figure: depth from repulsive through attractive, the zero-energy radial wavefunction u(r) = rR₀ and its asymptote whose intercept is a, with a(V₀) beside it diverging as each bound state enters (still; the figure reports "Figure 11.6 + 11.7"). Figures 11.8 + 11.9 folded: open and closed channel potentials with the closed bound state moved by B, and a(B) of (11.106) with the marker (still). Candidate Sim: the Thomas-Fermi profile against the non-interacting Gaussian as Na/a_t grows, with the healing-length edge (still).

Suspected errors: "interatomic spacing n ∼ 1nm" (n^{−1/3}); "between the atom", "is the is the", "can written", "corresponds energy cost", "inhomogenous", "Gross-Pitaeveski" once; (11.81)–(11.82) π + θ for π − θ (correction row); (11.83) e^{iK_zx₀} for e^{iKz₀}; (11.86)–(11.88) signs disagree (correction row); (11.91) radical over 2πar; (11.99) "into Eq. (11.94)" for (11.93) (link to 11.93, listed); (11.104) "abg"; (11.111) δ(r) for δ³; (11.116), (11.127) unnormalized; r₀ named after (11.110) where it does not appear; (11.139) power 2/5 for 1/5 (correction row).

## 11.5 Excitations in a Bose condensate

Concepts (8): bogoliubov-approximation, bogoliubov-spectrum, free-particle-energy, sound-velocity, bragg-spectroscopy, landau-criterion, attractive-condensate-stability, expansion-signature.

Symbols it owns: omega_q → bogoliubov-spectrum, epsilon_q → free-particle-energy, s_sound → sound-velocity; `v_c` (velocity, the Landau critical velocity: redefines Chapter 8's capture velocity, linked to landau-criterion only if wanted), n_0, U_0, mu_chem, a_t, xi_heal reused; q (wavevector, new key), N_max untyped, tau (expansion time, time).

Exercises: none.

Figures: Figure 11.10 the Bogoliubov spectrum live: ℏω_q against q with the free-particle ϵ_q, the sound line ℏqs and the crossover near 1/ξ, n₀U₀ slider, U₀ < 0 showing the imaginary branch (still). Candidate: the bimodal time-of-flight profile, condensate parabola on a gaussian thermal pedestal, condensed fraction slider (still).

Suspected errors: "homogenous"; (11.143) ψ against ψ̃; (11.154) factor 2; (11.158) missing ℏ; (11.159) v_c = ϵ_q/ℏq where min ω_q/q = s is meant (correction row); (11.165) t for τ.

## 11.6 First-order coherence of Bose condensates

Concepts (4): condensate-first-order-coherence, atom-laser, condensate-interference-fringes, relative-phase-symmetry-breaking.

Symbols: none owned; lambda_dB, psi_GP, tau (time) reused; ∆R, ∆R_s lengths (new keys if rows are wanted).

Exercises: none. Footnote 1 (gravity sag) as `footnote-1`.

Figures: Figure 11.11 recomputed and moving: two Gaussian condensates ∆R_s apart expanding freely and overlapping into fringes of spacing ht/∆R_s m (transport, ∆R_s slider). Figure 11.12 (Nature 403, 166, never copied): recomputed with `withheld`: fringe visibility against separation, the thermal coherence falling over ∼λ_dB and the condensate's plateau at its fraction, T/T_c slider (still), or left out and named in `notes`.

Suspected errors: Figure 11.11's caption cites "Science 275, p637 (2000)" for 1997 (correction row on the caption); the caption's τ against the figure's t.

## 11.7 Higher-order coherence of atomic matter waves

Concepts (5): double-well-model, double-well-coherent-ground-state, double-well-fock-ground-state, nonclassical-matter-requirements, optical-lattice-potential.

Symbols: none owned; `t` (coupling, the tunnelling amplitude: redefines), U_0 reused, lambda reused; φ_L, φ_R (phase, new keys if wanted); α_L, α_R untyped.

Exercises: MIT Problem Set 4, Problem 2 (hw4.2, verified in `source/mit-8422/hw4.pdf`), "Hanbury Brown and Twiss Experiment with Atoms", in the Exercises document. Restated: (a) the joint probability P against r₂₁ for bosons and fermions, (b) the transverse collimation argument Ww ≪ dλ_dB, (c)(i) ⟨P⟩ over a Gaussian spread of wavevector differences, (c)(ii) the geometric velocity-selection argument, (d) the phase-space-cell volume grows by d³/W²L; AI-marked solutions. Held (named in `exercise_notes`): the ⁶Li numbers of (b) and (c)(ii) and the estimates of (d). Notation: MIT's g⁽²⁾(1, 2) is the second-order correlation of 9.3 (`g2`); MIT's λ_dB = h/p of the wavevector k₀ is not the thermal λ_dB of (11.1) (the prompt says so); MIT's ℏω is the particle's energy; MIT's γ (width of the wavevector distribution) is not Lukin's decay rate γ (renamed, e.g. ∆k); "ignore gravity" kept. The fit is loose: 11.7 treats higher-order coherence through the double well, not atom detection; the problem is its one MIT match (exploration.md).

Figures: Figure 11.13 live: the double well with its |+⟩, |−⟩ split by 2t, and the N-atom ground state's number distribution P(n_L) from exact diagonalization of (11.168) + (11.173) as U₀/t rises, binomial (coherent) to a single Fock bar (still, U₀/t slider; L and R referents).

Suspected errors: (11.170)–(11.171) α for α_L, α_R; "number uncertainty … goes as 1/√N" (relative); Josephson energy factor 1/2 (correction row); (11.172) no 1/2 (consistent, kept); (11.175) (â_L†â_R†)^N holds 2N atoms, unnormalized (correction row); "Gross-Pitaevski".

## 11.8 Cold atoms in an optical lattice

Concepts (14): lattice-site-oscillator, lattice-recoil-energy, wannier-expansion, on-site-interaction, lattice-hopping, bose-hubbard-model, lattice-superfluid, mott-insulator, filling-factor, quantum-phase-transition, mean-field-mott-transition, mott-gap, wedding-cake-structure, mott-interference-signature.

Symbols it owns: nu_T → lattice-site-oscillator, E_R → lattice-recoil-energy, nu_fill → filling-factor; V_0 (energy), K_L (wavevector), a_s (see above), `t` (coupling, redefines, as 11.7), U_0, psi_hat reused; ϵ_i (reuse `epsilon_i` with a site-energy meaning, redefines), z and n̂_i untyped.

Exercises: none.

Figures: Figure 11.14 (wedding cake) recomputed as a still 2D profile: filling ν against radius in a harmonic trap from the local-density mean-field picture, Mott plateaus ν = 1, 2, 3 with thin superfluid shells, U₀/t slider. Figure 11.15 (Nature 415, 39, never copied): recomputed with `withheld` from the mean-field state (11.205): the expansion pattern's interference peaks (weight ∝ |⟨b̂⟩|²) fading as U₀/zt crosses the transition, with a ramp up and back to show reversibility (moving), the paper named. Candidate: the band −2t cos ka with the k = 0 condensate (still).

Suspected errors: "an Bose condensate"; "cases:$t \gg U_0$"; ”wedding-cake” stray quote; (11.187)–(11.188) b̂_j for b̂_j† (correction row); (11.199) cos 2ka for cos ka (correction row); (11.200)–(11.201) N for atoms and sites; "U₀ ∼ tν̇" (kept, correction row optional); "exact value 5.8" is the mean-field value, QMC ≈ 4.9 (correction row); Figure 11.15 caption panels a–g for a–h and no year (caption correction); ν_T an angular frequency.

## Calls

- No new type. σ stays untyped (COLOR.md forecasts "σ, a cross-section, is the likely one at 11.4" but plans no category row, hue or variants); `colours:default` not rerun.
- `trap-length` and the tunnelling concepts carry their own types (length; coupling for `double-well-model`, `lattice-hopping`) with `t` linked through its `redefines` row, not a concept symbol, since `t` is time book-wide.
- Prerequisites reach Chapter 3 (thermal-two-level-atom), Chapter 4 (absorption-cross-section, refractive-index, kerr-effect), Chapter 7 (adiabaticity-condition, landau-zener), Chapter 8 (laser-cooling, dipole-trap, optical-lattice, recoil-frequency), Chapter 9 (coherent-state, fock-states) and Chapter 10 (lamb-dicke-regime).
