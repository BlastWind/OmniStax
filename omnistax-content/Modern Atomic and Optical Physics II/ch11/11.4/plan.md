# Plan: 11.4 Atomic interactions

Source: `source.md` (PDF pages 250–272, Eqs. 11.39–11.141, Figures 11.5–11.9, no footnotes). Planned and built in one go (Chen approved building without stopping); this plan is left for review after.

## Blocks

| id | `<h2>` | holds |
|---|---|---|
| `opening` | none | the two opening paragraphs: dilute gases, n^{−1/3}r₀ and kr₀ |
| `van-der-waals` | 11.4.1 The van der Waals potential | Eqs. 11.39–11.42 |
| `scattering-theory` | 11.4.2 Basic scattering theory | Eqs. 11.43–11.63; h3 "Scattering cross-sections", "The Born approximation", "The partial wave expansion"; Figure 11.5 |
| `s-wave` | 11.4.3 S-wave scattering | Eqs. 11.64–11.80; h3 "Physical interpretation", "The s-wave pseudopotential"; Figure 11.6 + 11.7 |
| `statistics` | 11.4.4 Particle statistics | Eqs. 11.81–11.82 |
| `ensemble` | 11.4.5 Scattering off an atomic ensemble | Eqs. 11.83–11.88 |
| `resonances` | 11.4.6 Resonances | Eqs. 11.89–11.109; h3 "Feshbach Resonances"; Figure 11.8 + 11.9 |
| `bose-gas` | 11.4.7 Quantum theory of an interacting Bose gas | Eqs. 11.110–11.141; h3 "Second quantization", "Operators in the second quantization representation", "Zero temperature non-interacting BEC", "Weak interactions: the Gross-Pitaevski equation", "The ground state of a condensate at T=0", "The Thomas-Fermi approximation", "The healing length"; the Thomas-Fermi Sim |

Every numbered display is `div.equation` `eq-11-K` with `\tag{11.K}`; (11.108) is the book's empty numbered row, kept as `\quad`. The two numbered lists (molecule formation; the two potentials) are `<ol>`.

## Concepts (29, prep-merged)

Introducing spans: dilute-quantum-gas `dilute` ("dilute quantum gases"); van-der-waals-potential `vdw` ("the van der Waals potential", 11.4.1's first sentence); relative-motion-scattering `relative-motion`; scattering-amplitude `eq-11-45`; scattering-cross-section `cross-section` ("the partial scattering cross-section"); born-approximation `born`; partial-wave-expansion `partial-waves` ("partial wave analysis"); scattering-phase-shift `phase-shift`; s-wave-dominance `s-wave-only`; s-wave-scattering-length `scattering-length`; scattering-length-signs `interpretation`; s-wave-pseudopotential `pseudopotential`; identical-particle-scattering `eq-11-81`; matter-wave-index `slab-phase`; strongly-interacting-dilute-gas `strong-dilute`; weakly-bound-state `weakly-bound`; feshbach-resonance `feshbach`; interacting-bose-gas-hamiltonian `eq-11-110`; second-quantization `second-quantization`; matter-field-operator `eq-11-119`; second-quantized-hamiltonian `eq-11-124`; noninteracting-condensate-ground-state `eq-11-127`; gross-pitaevskii-equation `gp`; matter-wave-symmetry-breaking `symmetry-breaking`; condensate-ground-state `eq-11-133`; trap-length `trap-size`; thomas-fermi-approximation `thomas-fermi`; healing-length `healing`; condensate-density `condensate-density`.

`uses` rows: critical-temperature (opening), dipole-matrix-element (van-der-waals), schrodinger-equation (eq-11-44), chemical-potential (eq-11-80), indistinguishability-statistics (statistics), refractive-index (ensemble), zeeman-effect (feshbach energy shift, `fesh-tune`), creation-annihilation-operators (second-quantization), bose-condensation (bose-gas), coherent-state (symmetry-breaking), kerr-effect (`kerr`). Every form gets its anchor `11.4-eq-11-K`. Concept forms corrected where the book's relation is wrong (config): eq-11-82 takes π − θ; eq-11-88 states the mean-field energy cost with the kinetic energy's sign right.

Concept spans: every mention judged in its sentence. "scattering length" wears s-wave-scattering-length (not inside "background scattering length", which wears feshbach-resonance); "cross-section" wears scattering-cross-section where it names the measured quantity, and not in "the size of the scattering potential"; "s-wave" wears s-wave-dominance only where it names the dominance of the l = 0 wave in the ultracold limit, plain as an adjective of the pseudopotential or the channel; "dilute" wears dilute-quantum-gas where it names the gas regime, plain in "dilute cloud" of the slab; "phase shift" wears scattering-phase-shift in 11.4.2, plain for the slab's "phase shift" of 11.4.5 (wears matter-wave-index there); "open"/"closed" channel are referents and the quoted “closed” is also the feshbach-resonance term; "condensate" wears bose-condensation from 11.1.

## Symbols and variables

`ost meanings` run. Rows for the concept symbols (r_0, U_r, f_k, sigma_sc, delta_l, a_scat, a_bg, U_0, psi_hat, psi_GP, E_mf, a_t, xi_heal, n_0), and typed unlinked rows: k_mag (wavevector, the relative wavevector, redefines), k (the vector, wavevector), mu_red (new, mass, reduced mass), m, n_dens, T, T_c, E_n (the energy of atom state |n⟩), E_res, Delta_Fesh, V_0 (square-well height, energy, 11.4's own meaning; 11.8 gives it the lattice depth), V (quantization volume), V_trap and V_r (new, energy, the trapping potential as printed V_trap and V(r)), H, p, t, psi (the wavefunction of relative motion), omega_t, mu_chem. Ink: σ (ruling), θ, the solid angle Ω (never \kOmega), c₁ c₂ (matching coefficients, never \kcone), R_l, P_l, A_l, b̂, ζ, K, δK, ā, a_x…, E₀, B, d₁ d₂ (bold, unhatted), a₀ (Bohr radius; \kazero is 10.2's oscillator length), N, l.

## Referents

`open-channel` ("the open channel", U_o) and `closed-channel` ("the closed channel", U_c), figures `sim-feshbach`; marked in 11.4.6 prose where the text names the channel.

## Figures

Units: lengths in r₀ (square well) or a_t (Thomas-Fermi), the book's own scales; Feshbach in gauss and µK, the book's numbers.

- sim-regions · Figure 11.5 · partial-wave-expansion, dilute-quantum-gas · variation by slider: the reader drags 1/k and sees the window r₀ < r < 1/k where region A (kr ≪ 1) and region B (r > r₀) overlap open by decades in the ultracold limit and close as kr₀ → 1, which the book's single sketch only asserts · arrows: symbolic (the two region arrows) · still: k is a parameter, not a clock · slider 1/k (length-typed, 1 to 100 r₀, default 20; special 1, kr₀ = 1, where the window closes) · headline: the factor in r the window spans · graph alone: U(r) against r on a log axis 0.2–200 r₀, U in ℏ²/2μr₀², the van der Waals tail −r₀⁴ℏ²/2μr⁶ of Eq. (11.42) on a repulsive core · 2D. Labels: r₀, 1/k, A, B; the well's floor is off the frame as in the book.
- sim-square-well · Figure 11.6 + 11.7 · s-wave-scattering-length, scattering-length-signs · variation by slider and choice: the zero-energy radial wavefunction u = rR₀ of the square well of Eqs. 11.69, 11.71, 11.73, its straight asymptote r − a and the intercept a, and below it a(V₀) across the strength, so the reader watches a pass 0, turn negative, diverge as each bound state enters and come back positive with one more node, the book's four static panels being four states · arrows: none (the intercept marker is a label) · still · choice potential (hard sphere · repulsive · attractive), slider strength √(2μ|V₀|) r₀/ℏ (untyped ratio, 0–9, default 1.2 attractive: the book's no-bound-state panel; specials π/2, 3π/2, 5π/2, where a bound state enters; hidden for the hard sphere) · headline: a, its sign and the number of bound states · graph below: a/r₀ against the strength, −5 to 5 (fixed, divergences pinned), both branches, the hard-sphere line a = r₀ dashed · 2D. Labels: r₀, a on the axis, u, the asymptote.
- sim-feshbach · Figure 11.8 + 11.9 · feshbach-resonance, weakly-bound-state · variation by slider: the field moves the closed channel and its last bound state through the open channel's threshold, and the reader sees the scattering length of Eq. (11.106) diverge as the bound state crosses, its sign set by which side the state lies, the zero crossing at B₀ − ΔB; the book's two panels are one scene and its readout · arrows: none · still · sliders B − B₀ (magnetic-field, −30 to 30 G, default 15; specials 0, the resonance, and −ΔB, a = 0) and |Δ| (energy, 100–1000 µK, default 500, the book's) · headline: a/a_bg and where the bound state stands · graph beside: the channels left, a/a_bg against B − B₀ right, −6 to 6 (fixed, the divergence pinned) · 2D. E*_res = μ_B(B₀ − B): the book writes only E*_res ∝ μ_B(B − B₀); the sign is chosen so that the closed-channel state lies below threshold where a is large and positive, the side that holds the weakly bound molecule, and Figure 11.9 is one state of it (a → +∞ above B₀); Δ is then negative, Δ = −|Δ|. The energies near threshold are magnified in the scene: the closed channel moves by a millikelvin while the wells are far deeper.
- sim-thomas-fermi · Sim · condensate-ground-state, thomas-fermi-approximation, healing-length, trap-length · variation by slider: the ground state of Eq. (11.134) in an isotropic harmonic trap, solved numerically, against the Gaussian of Eq. (11.126) and the Thomas-Fermi parabola of Eq. (11.136), so the reader sees the condensate swell from the oscillator ground state into the inverted parabola as Na/a_t grows, the radius go as (15Na/a_t)^{1/5} (the corrected exponent of Eq. 11.139), and the edge stay rounded over the healing length; the text gives these only as limits · arrows: none · still · slider log₁₀(Na/a_t) (−2 to 3, default 2, detents at each decade) · headline: μ and the radius · graph alone: n(r)/n(0) against r/a_t, −8 to 8, the radius R marked from Na/a_t = 1 and the healing length as a bracket at the edge from Na/a_t = 30, where the parabola holds · 2D.

`draws`: sim-regions energy, length, wavevector; sim-square-well length, energy, state; sim-feshbach energy, length, magnetic-field (referents open, closed); sim-thomas-fermi density, length, energy. No facts or conventions (no element named).

### Extra sims (root 15), not built

- Identical-particle scattering: dσ/dΩ against θ for distinguishable atoms, bosons and fermions with a p-wave admixture, the s-wave doubling for bosons and vanishing for fermions as the choice changes.
- The slab of 11.4.5: a matter wave entering a cloud of density n, its wavelength stretched inside by δK and its phase lagging at the exit, the analogy with a refractive index made visible.
- The weakly bound molecule of Eq. (11.92): its binding energy and size a beside the closed-channel state across the Feshbach resonance, Eq. (11.109)'s point that the two differ.

## Exercises

MIT 8.422 Problem Set 5, Problem 2 (hw5.2) and Problem Set 6, Problem 1 (hw6.1), verified in `source/mit-8422/`, six end cards `hw5-2a`…`hw6-1c`, kind `problem`, `origin: mit-8422`, `cite` the 11.4.1 passage, restated in Lukin's notation (r for R, d₁ d₂ for d_a d_b, V̂_d(r) for H_el(R), |0⟩, |n⟩ per atom, γ for Γ, ω₁, ω₂ for the transition frequencies, Gaussian units as in Eq. 11.40). Every part is a derivation, so each carries an AI-marked solution stating the answer and reasoning in Lukin's symbols; none is numerical, so none is held. Concepts: van-der-waals-potential throughout, with dipole-matrix-element (5.2b, c, 6.1a), spontaneous-emission-rate (6.1c). No inline Try Its (the book's RULES list only two invitations, in 1.3.1 and 2.1.1).

## Lead (AI-marked)

How two cold atoms interact: the van der Waals tail, scattering theory in the ultracold limit, where one number, the s-wave scattering length, replaces the potential, identical particles, a matter wave crossing a cloud, Feshbach resonances that tune the interactions, and the second-quantized theory of the interacting Bose gas down to the Gross-Pitaevski equation, the Thomas-Fermi condensate and its healing length.

## Corrections (`correction` rows, marker after the misprint)

| id | at | note |
|---|---|---|
| c-spacing | opening, "n ∼ 1nm" | the spacing is n^{−1/3} |
| c-identical-angle | 11.4.4 prose "π + θ" | exchange takes θ to π − θ |
| c-eq-11-81, c-eq-11-82 | 11.81, 11.82 | f_k(π − θ), e^{−ikz} pairs with it |
| c-eq-11-83 | 11.83 | e^{iK_zx₀} for e^{iKz₀} |
| c-eq-11-86 | 11.86 | A ≈ e^{−i4πanL/K}, consistent with (11.87) |
| c-eq-11-88 | 11.88 | the kinetic energy falls by 4πℏ²an/m; the positive value is the mean-field energy cost |
| c-eq-11-91 | 11.91 | e^{−r/a}/(√(2πa) r) |
| c-eq-11-99-cited | "into Eq. (11.94)" | the open-channel equation (11.93); link goes to 11.93 |
| c-eq-11-116, c-eq-11-127 | 11.116, 11.127 | 1/√(n_i!), 1/√(N!) |
| c-eq-11-139 | 11.139 | exponent 1/5 |

## Book faults kept verbatim, no row

"between the atom", "is the is the", "can written", "corresponds energy cost", "inhomogenous", "Gross-Pitaeveski" once, "abg" in 11.104, δ(r) for δ³ in 11.111, r₀ named after 11.110, "na^3 << 1", "Schroedinger"/"Schrodinger", "k_BT < E₀" for |E₀|.

## Wanted at chapter level

- None blocking. The k slider unit: 1/k in r₀; 11.5 may want the same scales (a_t, ℏω_t) as the Thomas-Fermi Sim.

## Derivations

- 11.4.1 the van der Waals potential (11.40)–(11.42) · score 7 · not built: second-order perturbation theory and the isotropic average of the dipole matrix elements that give the factor 6 are never stated in the book, and (11.42) defines r₀.
- 11.4.2 the Born approximation (11.51)–(11.54) · score 6 · built as drv-born-amplitude: the printed step (11.51) with (11.52) → (11.53). (11.51) itself rests on integrating the Schroedinger equation with a Green's function the book never states, so it stays printed as the fact; (11.54), one expansion after the book's prose break, stays printed.
- 11.4.2 the partial-wave expansion (11.55)–(11.63) · score 7 · built as drv-partial-wave-amplitude ((11.62), comparing the coefficients of (11.60), (11.45) and (11.47)) and drv-partial-wave-ultracold ((11.63), split at the book's prose); (11.57)–(11.58) not built (the Laplacian in spherical coordinates and the spherical Bessel functions are never stated), (11.59)–(11.61) are stated.
- 11.4.3 the s-wave scattering length (11.64)–(11.68) · score 1 · built as drv-s-wave-amplitude ((11.66)–(11.68)); (11.64)–(11.65) stay printed as the definition of a.
- 11.4.3 the pseudopotential and mean-field energy (11.75)–(11.80) · score 4 · built as drv-mean-field-energy ((11.79)–(11.80)); (11.75)–(11.78) are stated.
- 11.4.4 identical particles (11.81)–(11.82) · score 2 · built as drv-identical-particle-cross-section, a thin block; the f_k(π + θ) of (11.82) is the node's note (correction row c-eq-11-82 and its marker removed), (11.81) stays printed with its marker.
- 11.4.5 scattering off an ensemble (11.83)–(11.88) · score 4 · not built: the transmitted wave (11.84) → (11.86) rests on an integral the book never states or works, and (11.87)–(11.88) only read off its phase; the printed sign errors keep their correction rows.
- 11.4.6 the weakly bound state (11.91)–(11.92) · score 5 · built as drv-weakly-bound-state (hidden: the l = 0 radial equation (11.57) outside the potential, the decaying solution, matching to 1 − a/r of (11.64)); the r under the root of (11.91) is the node's note (c-eq-11-91 removed).
- 11.4.6 Feshbach resonances (11.93)–(11.109) · score 7 · split at the book's prose: drv-closed-channel-coupling ((11.97)–(11.99); the book's "into Eq. (11.94)" is the node's note, its sentence dropped as a connector and c-eq-11-99-cited removed), drv-feshbach-scattering-length ((11.103)–(11.105); the book's ⟨ψ_c^res|g|η⟩ in Δ is ⟨ψ_c^res|g|χ⟩, the node's note), drv-feshbach-binding-energy ((11.109), thin). (11.106)–(11.107) stay printed: a renaming and one approximation.
- 11.4.7 second quantization (11.119)–(11.124) · score 4 · built as drv-field-commutator ((11.120)) and drv-contact-hamiltonian ((11.124)); (11.121)–(11.123) are stated.
- 11.4.7 the Gross-Pitaevski equation (11.128)–(11.132) · score 4 · built as drv-field-equation-of-motion ((11.128), the commutators with (11.124)) and drv-gross-pitaevskii-equation ((11.131)), split at the book's prose; (11.129)–(11.130), (11.132) stay printed.
- 11.4.7 the Thomas-Fermi approximation (11.136)–(11.139) · score 7 · built as drv-thomas-fermi-condensate; the exponent 2/5 of (11.139) is the node's note (c-eq-11-139 removed).
- 11.4.7 the healing length (11.140) · score 3 · not built: an order-of-magnitude estimate in three moves.
