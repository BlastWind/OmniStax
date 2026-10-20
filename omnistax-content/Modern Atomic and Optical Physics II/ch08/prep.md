# Chapter 8 prep

Rows staged in `ch08/book-rows.json`, merged (51 concepts, 15 symbols, 86 prereq edges, Hasse-reduced against the merged book). Forms carry ids `eq-8-N` (and `eq-8-recoil-frequency`, `eq-8-zero-velocity-rate`, `eq-8-capture-range` for unnumbered displays or inline definitions) and no anchors: each section adds its anchors with `ost set` once its `text.html` has ids. `chapter.json` has no variables rows: each section adds the rows for the symbols it owns (`ost add lukin-amo-ii variables --chapter 8`, `ost meanings` first). `ost check` errors until then only with "which no variables row linked to it carries".

New symbols (all with macros): F_force 𝐅 (force; `F` is the angular momentum F̂ of 1.3), omega_R (frequency), V_eff (energy), R_opt_0 (rate), eta (friction), v_c (velocity), D_diff (diffusion), f_hat (untyped operator), F_noise 𝓕̂ (untyped operator), T_D, T_S, T_R (temperature), tau_P (time), Delta_rho (population), eta_S (friction). Reused: f_t (3.3's random field, a frequency) is the classical Langevin force of 8.4 as a `redefines` row typed force.

## Intro (built)

`intro/text.html`, `intro/section.json`: the one opening paragraph verbatim; spans on semiclassical-light-force ("semiclassical"), dissipative-force (twice), dipole-force ("conservative force"), dressed-states ("dressed").

## 8.1 Incorporating center of mass motion into atom-light interactions

Concepts (4): moving-atom-hamiltonian (definition, H, 8.1–8.3), atomic-recoil (result, “atomic recoil”, 8.5, 8.6), recoil-frequency (definition, ω_R, “recoil energy”; its form is 8.2's inline ℏω_R = (ℏk)²/2m, so 8.1 may anchor only the mention, 8.2 the definition), recoil-shifted-resonance (result, “Doppler shift”, 8.7, 8.8).

Symbols it owns: omega_R (frequency → recoil-frequency); H (row → moving-atom-hamiltonian, `redefines`); p (momentum, the atom's centre-of-mass momentum, `redefines` against 1.3/2.3's electron); m (mass of the atom); k (wavevector); V (energy, the external potential V(r̂); `ost meanings V`); Omega (coupling, now Ω(r̂) with position dependence, `redefines`); phi (phase of the laser, φ(r̂); `ost meanings phi`, 7.3 uses it as a mixing angle, so `redefines`); omega (ω₁₂, 2.1's atomic transition frequency). Referents: |1⟩, |2⟩.

MIT problems: none. Figures: none in the pages (Figure 8.1 sits in 8.3).

Suspected errors: (8.4) k not bold where the prose has 𝐤 (note only); "the recoil energy ω_R of the photon" (a frequency, and the atom's recoil); "ω_R ∼ γ/400 ∼ 10 − 100 kHz" high at the top end and the two estimates disagree across alkalis.

## 8.2 Semiclassical description

Concepts (9): light-force-operator (result, 𝐅, 8.9, 8.10, 8.13 of footnote 1), semiclassical-light-force (result, 8.18, 8.14, 8.15), semiclassical-force-validity (result, 8.19), dipole-force (result, “dipole force”, V_eff, 8.20, 8.21), dipole-trap (idea, “dipole trap”), optical-lattice (idea, “optical lattice”, “atomic crystals”), dissipative-force (result, 8.23, 8.24, 8.22), maximum-dissipative-force (result, 8.27, 8.26, 8.25), atomic-beam-slowing (idea, "chirped").

Symbols it owns: F_force (force → light-force-operator; later sections link their own force concepts); V_eff (energy → dipole-force); R_opt (reuse 3.4's meaning, now with Doppler shift: `ost meanings R_opt`); rho_12, rho_21, rho_22 (reuse 3.1/3.4); gamma_12 (reuse 3.4); delta (reuse); v (velocity, of the atom; `ost meanings v`); t (time); lambda (length, the optical wavelength). Footnote 1 holds 8.11–8.13.

MIT problems (four):
- hw8.1 Classical model of the light force (Problem Set 8, Problem 1). Restated: MIT's phase θ(x) is Lukin's φ; MIT's dipole moment p becomes d (Lukin's p is momentum); MIT's damping coefficient γ and Γ = γ/m are the classical oscillator's, renamed so as not to clash with Lukin's γ (Γ is then Lukin's γ); MIT's Rabi frequency ω_R in (7) is 2Ω in Lukin's notation, and ω_R is Lukin's recoil frequency, so it is rewritten as 2Ω. Parts (a)–(d) are derivations; (b) and the oscillator-strength part (d) take AI solutions.
- hw10.3 Optical dipole trap (Problem Set 10, Problem 3). Restated: MIT's polarizability α(w) becomes α_pol or is written through χ (Lukin's α is the absorption coefficient of 4.2); n_r is the refractive index n_ref; w is ω. Figures 1–2 of the problem (reservoirs, detector, frequency step) redrawn or described in words.
- hw9.1 A Zeeman slower (Problem Set 9, Problem 1). Analytical parts (a) a_max = ℏkγ/2m, (b) B(x) and L as functions of f, (c) the longitudinal D for three emission patterns at scattering rate Γ_s (renamed R_sc or γρ₂₂). MIT's δ ≡ ω − ω₀ has Lukin's sign; gμ_B kept. Numbers held.
- hw9.2 Slowing with off-resonant light (Problem Set 9, Problem 2). Asked as the integral of the equation of motion with (8.26)'s saturated, Doppler-shifted force; I = 5I_sat, so the saturation parameter is written in Lukin's R_opt/γ terms. Numbers held.
Why 8.2 and not 8.3 (exploration's mapping): both hw9 problems use the maximum force, the saturated force and the chirp/Zeeman remark that close 8.2; 8.3 is about velocity-dependent cooling. hw8.1 and hw10.3 map as the exploration says.

Figures: none printed. Candidate Sim: the dipole potential −ℏ|Ω(r)|²/δ of a focused Gaussian beam with the sign of δ as a choice (attraction to maxima or minima), still, judged in the plan; or an optical lattice standing wave.

Suspected errors: footnote numbering puts 8.11–8.13 before 8.14 (book order, not an error); "∇|Ω²| = 0" for ∇|Ω|² = 0; R_opt upright then italic (note); "γ ∼ 10⁶ Hz" for alkalis, 10⁷–10⁸ s⁻¹ meant ("a few milliseconds" needs it); "a few centimeters per second" holds for Li, Na only; "miniscule", "focussing" kept.

## 8.3 Doppler Cooling

Concepts (8): doppler-cooling (idea, "Doppler cooling"), zero-velocity-excitation-rate (definition, R⁰_opt, from 8.28's underbrace), low-velocity-doppler-force (result, 8.28), friction-coefficient (definition, η, “friction coefficient”, 8.30, 8.29), optical-molasses (idea, "optical molasses"), maximum-friction-coefficient (result, 8.33, 8.31, 8.32), capture-range (definition, v_c, “capture range”), magneto-optical-trap (idea, "magneto-optical trap", "MOT").

Symbols it owns: eta (friction → friction-coefficient); R_opt_0 (rate → zero-velocity-excitation-rate); v_c (velocity → capture-range); v_z (velocity, `ost meanings v_z`: 4.2 has one, `redefines` if it is a different atom); F_force (rows for F₊, F₋ as meanings of the beams; referents for the two beams ±z); B (magnetic field gradient of the MOT). Referents: the two counterpropagating beams (+z, −z), the σ⁺ and σ⁻ beams and the J = 1 sublevels of Figure 8.3.

MIT problems: none (see 8.2). Figures: 8.1 faithful copy or folded; 8.2 live; 8.3 3D apparatus above, 2D level-force diagram below.

Suspected errors: sign convention of η: (8.29)–(8.30) give η < 0 for cooling while page 143 writes dp/dt = −ηp with η > 0, and (8.31)–(8.33) give |η|; "the typical timescale for cooling is ω_R ∼ 10 kHz" (a rate); "pushes that atom back"; "than slower atoms ." (space); v_c ∼ rate/k is "wavelength times rate" only up to 2π.

## 8.4 Dissipation and quantum noise: the Heisenberg-Langevin approach

Concepts (12): langevin-equation (definition, f(t), “Langevin force”, 8.34–8.36, 8.38), diffusion-coefficient (definition, D, 8.37), langevin-momentum-spread (result, 8.44, 8.39, 8.40, 8.46, 8.47), einstein-relation (result, “Einstein relation”, 8.48), random-walk (result, “random walk”, 8.49), naive-operator-damping (result, 8.52, 8.50), system-reservoir-operator-equation (result, 8.57, 8.54–8.56, 8.58), reservoir-operator-solution (result, 8.61, 8.60, 8.62), quantum-langevin-force (definition, f̂, “quantum Langevin force”, 8.63, 8.66, 8.67, 8.64), heisenberg-langevin-equation (result, 8.69, 8.68), heisenberg-langevin-master-equation (result, 8.70), generalized-einstein-relation (result, 𝓕̂, “generalized Einstein relation”, “quantum fluctuation-dissipation theorem”, 8.73, 8.71, 8.72, 8.75).

Symbols it owns: f_t (force, `redefines`: the classical Langevin force f(t) → langevin-equation); D_diff (diffusion → diffusion-coefficient); f_hat (untyped → quantum-langevin-force); F_noise (untyped → generalized-einstein-relation); eta (reuse 8.3's meaning, here the Brownian friction rate: `redefines` if worded apart); p (momentum of the heavy particle); T (temperature); H_S, H_R, H_SR, S_hat (reuse 3.3); g (coupling g_j, reuse 2.3); n_bar or n(ω) (3.1's mean thermal photon number); gamma (reuse). The atomic operators σ̂_αβ and R̂ stay untyped and unrowed unless the section wants them.

MIT problems: none. Figures: none printed; candidate Sim: Brownian momentum, many trajectories p(t) with ⟨p²⟩ relaxing to D/η and growing as Dt at η → 0 (moving), judged in the plan.

Suspected errors: "unlike the average velocity" (momentum meant); (8.41) mixes ⟨⟩ and overline; (8.49) p̄² = Dt should be 2Dt by (8.44); (8.52) −γ_αβ should be −2γ_αβ (both terms of 8.51 contribute); (8.55)–(8.56) define â_i, g_i and sum over j; σ_ij without hat in (8.70)'s sentence; (8.74) F̂_μ for 𝓕̂_μ; after (8.74) "𝓕̂_μ(t)" for 𝓕̂_ν(t); (8.77) d without hats; "quantum ”white noise”" opening quote.

## 8.5 The Heisenberg-Langevin formalism applied to Doppler cooling

Concepts (6): laser-cooling-noise-force (result, 𝓕̂₁₂, 8.83, 8.79, 8.80, 8.82, 8.84), force-fluctuations (result, 8.90, 8.85, 8.88, 8.89), laser-cooling-diffusion (result, D, 8.92, 8.91), doppler-limit (result, T_D, "Doppler limit", 8.96, 8.95, 8.94, 8.93), laser-attenuation (idea), photon-reabsorption (idea).

Symbols it owns: T_D (temperature → doppler-limit); D_diff (reuse 8.4's, row → laser-cooling-diffusion with the laser-cooling meaning, `redefines`); F_noise (row → laser-cooling-noise-force); Omega_tilde (coupling, Ω̃ = 2Ω; check `ost meanings` for a tilde Ω first); R_opt_0 (reuse 8.3's; the book now writes it with γ/2 for γ₁₂); eta (reuse); r (length, distance from the emitter in 8.5.3; `ost meanings r`). Footnotes 2 (8.86–8.87) and 3 (Phillips' notes URL, kept as printed text).

MIT problems: hw9.3 Density limit in a MOT (Problem Set 9, Problem 3) → 8.5.3. Restated: MIT's spring constant κ becomes another letter (κ is Lukin's cavity decay in Chapter 9; e.g. K or k_s, named in `changes`); σ_L, σ_R kept as absorption cross-sections (4.2's σ̃ kind, untyped); I, n kept; MIT's f (dark fraction) kept, distinct from f(t) only by context, or renamed f_b. Parts (a), (b), (c) derivations with AI solutions; (d) qualitative (the Mollow-type emission spectrum under red detuning; an AI answer saying σ_R > σ_L with its reason); (e) qualitative with the Dark SPOT reference kept. hw9.1(c) also bears on 8.5.1's diffusion and is cited, not duplicated.

Figures: none printed; candidate still: k_BT_D/ℏγ₁₂ against δ/γ₁₂ from (8.95), its minimum at δ = γ₁₂.

Suspected errors: footnote displays (8.86)–(8.87) numbered before (8.88) (book order); "h.c," for "h.c."; √⟨p²⟩ = √(Dt) follows the book's (8.49), √(2Dt) meant; (8.93)–(8.96) use γ₁₂ where (8.90)–(8.92) use γ/2: they agree only with γ₁₂ = γ/2, so "the final temperature is simply the linewidth of the excited state" means half the linewidth; R_opt without superscript 0 in (8.93); "Bill Phillip’s" for Phillips.

## 8.6 Sub-Doppler cooling

Concepts (12): sub-doppler-cooling (idea, "sub-Doppler"), polarization-gradient (result, “lin⊥lin”, 8.98, 8.97), ground-state-light-shift-potential (result, 8.106, 8.99–8.104; (8.105) the general sum is the section's to anchor too), sisyphus-cooling (idea, “Sisyphus”), sisyphus-pumping-rate (result, τ_P, 8.113, 8.110, 8.112, 8.114), sisyphus-force (result, 8.122, 8.109, 8.116, 8.117, 8.120), sisyphus-friction (result, η_S, 8.127, 8.125, 8.124, 8.123, 8.126), doppler-sisyphus-comparison (result, 8.128–8.130), sisyphus-nonadiabaticity (idea), sisyphus-limit (result, T_S, 8.133, 8.131, 8.132), recoil-limit (result, T_R, 8.135, 8.134), sub-recoil-cooling (idea, “sub-recoil”).

Symbols it owns: tau_P (time → sisyphus-pumping-rate); Delta_rho (population, the ground-sublevel population difference; no concept link); eta_S (friction → sisyphus-friction); T_S (temperature → sisyphus-limit); T_R (temperature → recoil-limit; the book gives T_R for Na and Rb only as values); Omega_p / Omega_m (`ost meanings Omega_p`: 4.x or 5.x may own Ω±; here Ω₊ = Ω cos kz, Ω₋ = Ω sin kz, `redefines`); E_field (the lin⊥lin field); v_c (reuse, Sisyphus capture velocity, `redefines`); D_sp, D_dp (diffusion, new rows if the section wants them; stage the symbols in `ch08/book-rows.json` first). Referents: m = +1/2 and m = −1/2 (COLOR.md), the σ₊ and σ₋ standing waves.

MIT problems: none. Figures: 8.4 redrawn level diagram (still); 8.5 live Sisyphus (moving); 8.6 recomputed Doppler against Sisyphus F(v) (still, sliders). Footnote 4.

Suspected errors: "In the early 1990’s" (1988–89); "T_D = ℏγ" (k_BT_D = ℏγ/2); "the deBroglie wavelength of an atom at T_D ∼ 10 nm"; "Clebsch-Gordon"; "J’"; "δ ≫ γ" for |δ| ≫ γ; (8.107) missing its leading "+"; (8.108) sign (F = −∇V; (8.109) agrees with the minus); "|Ω²|" for |Ω|²; τ_p and τ_P both printed; (8.125) "= η_S v m" sign carried by δ < 0; "the Sisyphus capture velocity scales with the AC Stark shift" (it scales with the pumping rate, 8.130); "optically pumped much faster than the atomic velocity"; m_s for m_g; (8.133) δ for |δ|; footnote 4 lowercase "see" and its reference (JOSA B 6, 2023 (1989)).

## Calls

- No new type. The force F gets its own symbol `F_force` because `F` is the angular momentum F̂; the quantum Langevin operators f̂ and 𝓕̂ are untyped operators (COLOR.md: operators that are neither an observable of a type nor a state), though f̂ has units of √rate.
- The term “recoil energy” is on recoil-frequency (the book names ω_R so); recoil-limit carries no term.
- hw9.1 and hw9.2 moved from 8.3 to 8.2 (above).
- `f_t` is reused for the classical Langevin force, typed force by its 8.4 row; 3.3's f(t) is a frequency.
