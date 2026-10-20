# Plan: 11.8 Cold atoms in an optical lattice

Source: `source.md` (PDF pages 284–293, Eqs. 11.177–11.212, Figures 11.14–11.15, no footnotes). Planned and built in one go (config: Chen approved building without stopping); this plan is left for review after. The book's last section.

## Blocks

| id | `<h2>` | holds |
|---|---|---|
| `opening` | none | the lattice Hamiltonian in first and second quantization, Eqs. (11.177)–(11.182), and the paragraph on going beyond Gross-Pitaevskii |
| `periodic-potential` | 11.8.1 Atoms in a periodic potential | Eqs. (11.183)–(11.194), the unnumbered substituted Hamiltonian between (11.189) and (11.190) kept unnumbered |
| `bose-hubbard` | 11.8.2 The physics of the Bose-Hubbard model | opening paragraph; `<h3>` "The weak lattice: t ≫ U₀" (11.195–11.201), "The strong lattice: t ≪ U₀" (11.202–11.203), "The Mott insulator to superfluid transition" (11.204–11.212); Figure 11.14 after the wedding-cake paragraph that cites it, Figure 11.15 after the last paragraph (the book sets both on pages 292–293, inside and after that paragraph) |

(11.181) is an empty numbered row in the book and keeps its number on a `\quad` row (config).

## Concepts (14, prep-merged)

| concept | introducing span |
|---|---|
| lattice-site-oscillator | `site-oscillator` ("Each lattice site is a harmonic potential with a characteristic frequency") |
| lattice-recoil-energy | `recoil-energy` ("the recoil energy of the lattice") |
| wannier-expansion | `localized-states` ("we will express the field operator as a sum over localized states") |
| on-site-interaction | `on-site` ("This so-called “on-site” interaction term") |
| lattice-hopping | `hopping` ("the second term allows atoms to hop from one lattice site to a nearest-neighbor site at a rate t") |
| bose-hubbard-model | `hubbard` ("This Hamiltonian is known as the “Hubbard model,”") |
| lattice-superfluid | `superfluid` ("This state exhibits superfluidity because the atoms can freely tunnel between lattice sites") |
| mott-insulator | `mott` ("This ground state is known as a “Mott insulator”") |
| filling-factor | `commensurate` ("we will assume “commensurate” filling") |
| quantum-phase-transition | `qpt` ("it is known as a “quantum phase transition.”") |
| mean-field-mott-transition | `mean-field` ("we can examine the energies for the two limiting wavefunctions and see which is lower in energy") |
| mott-gap | `gap` ("the excitation spectrum is gapped because it costs an energy ∆ϵ ∼ U₀ − t to delocalize a single particle") |
| wedding-cake-structure | `wedding-cake` ("the density takes on a ”wedding-cake” structure") |
| mott-interference-signature | `interference` ("observed the superfluid to Mott insulator transition by observing the interference or lack thereof") |

`uses`: indistinguishability-statistics, s-wave-pseudopotential, second-quantization, matter-field-operator, gross-pitaevskii-equation (`opening`); optical-lattice-potential, lamb-dicke-regime, double-well-model, s-wave-scattering-length (`periodic-potential`); bose-condensation, optical-lattice-potential, double-well-coherent-ground-state, coherent-state, condensate-first-order-coherence, bogoliubov-spectrum, time-of-flight-imaging, s-wave-scattering-length (`bose-hubbard`); chemical-potential (the wedding-cake sim's slider, `bose-hubbard`).

Spans judged per mention. Wrapped: "optical lattice" → optical-lattice-potential (11.7's lattice of the same chapter, which this section's Hamiltonian describes); "indistinguishable atoms"; "s-wave pseudopotential"; "second quantization"; "the field operators", "field operator" → matter-field-operator; "the Gross-Pitaevskii equation", "the Gross-Pitaevskii wavefunction"; "Lamb-Dicke limit"; "the double-well potential", "double-well system"; "Bloch bands", "Wannier functions" → wannier-expansion; "hop", "hopping term", "tunnelling" where it names the lattice hopping → lattice-hopping; "on-site interaction", "onsite interaction" → on-site-interaction; "Bose-Hubbard model", "Bose-Hubbard Hamiltonian" → bose-hubbard-model; "superfluid", "superfluidity" of the lattice → lattice-superfluid; "Mott insulator", "exchange energy" → mott-insulator; "coherent state(s)" → coherent-state; "a Bogoliubov spectrum"; "first order coherence" → condensate-first-order-coherence; "Bose condensate", "Bose condensates" → bose-condensation; "filling factor(s)", "commensurate", "incommensurate filling" → filling-factor; "phase transition" where it names the superfluid–Mott transition → quantum-phase-transition; "the atomic scattering length" → s-wave-scattering-length; "as the atoms expand", "expansion image" → time-of-flight-imaging. Plain: "harmonic oscillator" (no concept of the book names it), "lattice site(s)", "ground state" in general, "condensed-matter physics", "perturbation theory", "kinetic energy", "phase" of a site, "thermal" fluctuations, "reciprocal lattice", headings.

## Symbols and variables (chapter 11, section 11.8)

`ost meanings` run for each. New book symbols, staged through `ost add … symbols --chapter 11`: `a_HO` (\kaHO, a_HO, the site's oscillator length), `a_lat` (\kalat, a, the lattice spacing), `E_SF` (\kESF), `E_MI` (\kEMI), `Delta_E_ex` (\kDeltaEex, ∆E, the exchange energy), `Delta_eps` (\kDeltaeps, ∆ϵ, the Mott gap).

Rows: H (energy, "The Hamiltonian of the system", 11.4's); p_cm (momentum, p_i of atom i, redefines); m (mass); V (energy, the potential on each atom, 11.5's meaning, redefines against 11.4's volume); a_s → s-wave-scattering-length (the book's a_s for 11.4's a); psi_hat → matter-field-operator (11.4's meaning; untyped, written \hat{\psi} in the text); V_0 (energy, the lattice depth, redefines 11.4's square well); K_L (wavevector); nu_T → lattice-site-oscillator; E_R → lattice-recoil-energy; a_HO (length); V_trap (energy, 11.4's meaning); epsilon_i (energy, the site energy, redefines 11.1's level); t → lattice-hopping, redefines, coupling inherited from the concept (book RULES, Types; an explicit `type` drew the checker's "overrides with the type it inherits" warning); U_0 → on-site-interaction, type energy, unit J, redefines (11.4–11.5's contact strength in J·m³); k (wavevector, a momentum mode of the lattice, redefines) and k_mag (the same, written unbold in one dimension, redefines); a_lat (length); psi (state, the lattice ground state |ψ₀⟩, redefines); T (temperature); nu_fill → filling-factor (untyped, written \nu); c_n (amplitude, 1.2's meaning); alpha (quadrature, the coherent amplitude of one site, redefines); E_SF, E_MI, Delta_E_ex (energy); theta (phase, the mixing angle of (11.211), redefines); Delta_eps → mott-gap (energy); mu_chem → chemical-potential (Figure 11.14's slider); tau (time, the time since the ramp began in Figure 11.15, redefines). In ink: N, z, n̂_i, the operators b̂_i, b̂_k, W, φ_n, positions x_i, r, r_i (as 11.4 leaves r), U as printed in 11.8.2's opening.

## Referents

None. No example names a particular thing the text and a figure both point at: the shells of Figure 11.14 are values of ν, told by their labels, and Figure 11.15 draws one cloud.

## Figures

Units: energies in units of U₀; the hopping as zt/U₀ with z = 6 (a cubic lattice); momentum in units of ℏK_L, the reciprocal lattice at multiples of 2ℏK_L.

- sim-wedding-cake · Figure 11.14 · wedding-cake-structure, mott-insulator, lattice-superfluid, filling-factor, mean-field-mott-transition · variation by slider: the book draws one trap with three Mott plateaus; here the plateaus are computed (each site in the mean field of its z neighbours, the trap entering through the local chemical potential μ − V_trap(r_i), the Gutzwiller product state of Eq. (11.205) minimized site by site), so raising zt/U₀ widens the superfluid shells until they swallow the plateaus, ν = 3 first and ν = 1 last, and lowering μ empties the centre shell by shell. The book's picture is the default state · arrows: none (the book's double arrows are plateau brackets, symbolic) · still: zt/U₀ and μ are parameters, not a clock · sliders zt/U₀ (coupling, 0 to 0.25, default 0.03; special 1/5.83 = 0.172, the ν = 1 transition the text names), μ/U₀ (energy, 0.2 to 2.9, default 2.5; above 3 a ν = 4 site would form) · headline: which plateaus stand and how many sites are superfluid · scene above graph: the lattice-plus-trap potential over 25 sites (the book's), each well holding ⌊ν_i⌋ atoms in ink and, on a superfluid site, one more in grey whose opacity is the fractional part (the book's grey atoms); beneath it the cake, ν(r) from the same local-density calculation sampled finely, Mott plateaus ink and superfluid slopes grey, each plateau of two or more sites bracketed with its ν · 2D. Labels: plateau brackets (at most three, the book's), axis titles; site values by hover. Readout: ν = N_atoms/N_sites of Eq. (11.204) for each Mott plateau with its counts. Original kept (`/media/ch11/fig-11-14.png`, a sketch, not a published image).
- sim-mott-ramp · Figure 11.15 (`withheld`: published data) · mott-interference-signature, mean-field-mott-transition, quantum-phase-transition, condensate-first-order-coherence · animation and variation: U₀/zt is ramped up and back, slowly enough that the atoms follow the ground state, and the expansion image of the cloud fades from sharp peaks at the reciprocal lattice to a featureless blob and back. The peak weight is |⟨b̂_i⟩|² of the book's own trial state (11.211): minimizing its energy −zt|⟨b̂_i⟩|² + U₀ sin²θ/2 gives sin²θ = ½(1 − (U₀/zt)/(3 + 2√2)) and θ = 0, the Mott state, beyond U₀/zt = 3 + 2√2 ≈ 5.83 · arrows: none · moving: the ramp has a clock (up over 80 ms, held 20 ms, down over 80 ms, linear in U₀/zt), transport · slider: the turning value U₀/zt (energy, 2 to 40, default 20; special 5.83, the transition): below the special the peaks only dim and never vanish · headline: the time, U₀/zt and the phase · scene beside graph: the expansion image (a false-colour map of the column density on one scale, the density hue, with its legend, p_x and p_y in units of ℏK_L, ±4) on the left; on the right two stacked graphs against the ramp time, U₀/zt with the dashed transition level and |⟨b̂_i⟩|², each with its moving marker · 2D. Labels: the two phases named in the U₀/zt graph above and below the transition; the peaks by hover. Readout: |⟨b̂_i⟩|² = (1 + 1/√2)² sin²θ cos²θ with the live numbers and sin²θ on the line under it, both set with `F.tex` (the clock drives them, so no morph and no highlight). Caption names Greiner et al., Nature 415, 39 (2002). No `originals`; `original_caption` kept so the caption's corrections attach.

`draws`: sim-wedding-cake `coupling`, `energy`; sim-mott-ramp `energy`, `coupling`, `density`, `time`, `phase`. No facts or conventions: no element is named (the experiment's ⁸⁷Rb is not drawn).

### Extra sims (root 15), not built

- The weak lattice's band: −2t cos ka of Eq. (11.199) across the Brillouin zone with the N atoms piled into k = 0, and beside it the site amplitudes of that state, all equal in phase; dragging t widens the band (4t) without moving the ground state's k.
- The two limiting energies of (11.208)–(11.209) against U₀/zt beside the trial state's energy minimized over θ, showing the crossing estimate (11.210) and where the variational state improves on it.

## Exercises

None (prep, config). No inline invitation.

## Lead draft (AI-marked)

> Atoms in an optical lattice reduce to the Bose-Hubbard model of hopping and on-site interaction; its superfluid and Mott insulator ground states, the quantum phase transition between them, and how a trap's wedding-cake density and the interference of released atoms reveal it.

## Objectives, summary, notes

`objectives` and `summary_html` empty. `notes`: Figure 11.15 is computed from the mean-field state; the book's image reproduces published data and is not shown.

## Book faults kept verbatim

- "an Bose condensate", "cases:$t \gg U_0$" without a space, "reexamination", the stray ”wedding-cake” opening quote, "onsite" beside “on-site”, "Gross-Pitaevskii" (11.7 spells it "Gross-Pitaevski").
- (11.200)–(11.201) use N for atoms (the power) and sites (the 1/√N); kept, no correction (the meaning is plain from 11.197).
- (11.185) calls ν_T a frequency and defines an angular frequency, used as ℏν_T/2 in (11.192); consistent with that use, kept.
- (11.208)–(11.210): the factors 2 in E_SF and 4 in (11.210) count each neighbouring pair twice; the book calls the analysis simple and writes ∼, so kept, no correction. The figures count −t Σ_<i,j> over ordered pairs, which gives the mean-field energy −zt|⟨b̂_i⟩|² per site and the book's 5.8.
- "the parameters $U$ and $t$": U for U₀, kept in ink.

## Corrections

| id | attaches to | the book prints | note |
|---|---|---|---|
| c-eq-11-187 | after (11.187) | [b̂_i, b̂_j] = δ_ij | [b̂_i, b̂_j†] = δ_ij (and [b̂_i, b̂_j] = 0) |
| c-eq-11-188 | after (11.188) | {b̂_i, b̂_j} = δ_ij | {b̂_i, b̂_j†} = δ_ij |
| c-eq-11-199 | after (11.199) | cos 2ka | Σ_i e^{−ikx_i}(e^{iqx_{i−1}} + e^{iqx_{i+1}}) = 2N δ_kq cos ka, so −2t Σ b̂_k†b̂_k cos ka |
| c-nu-dot | after "U₀ ∼ tν̇" | a dot over ν | t·ν is meant; mean field gives U₀/zt = 2ν + 1 + 2√(ν(ν + 1)) ≈ 4ν at the tip of the ν-th Mott lobe |
| c-exact-value | after "U₀/(t·z) = 5.8" | "the exact value" | 5.8 is the mean-field value 3 + 2√2, which (11.211) itself reaches; quantum Monte Carlo for the cubic lattice gives U₀/zt ≈ 4.9 (U₀/t ≈ 29.3, Capogrosso-Sansone et al., 2007) |
| c-fig-11-15-panel | figure `sim-mott-ramp` (original caption) | "to 20E_r (g)" | the expansion images run from (a) to (h); the 20 E_r image is (h) |
| c-fig-11-15-year | figure `sim-mott-ramp` (original caption) | "Nature 415, 39" with no year | Greiner et al., "Quantum phase transition from a superfluid to a Mott insulator in a gas of ultracold atoms", Nature 415, 39 (2002) |

The concept statement of `mean-field-mott-transition` repeated "the exact U₀/zt = 5.8"; it now says the mean-field value (`ost set … concepts`).

## Wanted at chapter level

- `media/ch11/fig-11-15.png` (and `fig-11-12.png`, as 11.6 says) exist though the book's RULES (Licence) say Figures 11.12 and 11.15 are never copied into `media/`: the chapter pass should remove them. 11.8 does not reference fig-11-15.png.
- A withheld figure has no Original button, so its kept `original_caption` and the two caption corrections of Figure 11.15 show only in the section's Corrections list; if the app should show a withheld figure's book caption, that is an app change.
- `t` in 11.7 and 11.8 both mean the hopping (coupling, `redefines`); 11.8 words it "The hopping amplitude between neighbouring lattice sites". The two rows could share a meaning.

## Derivations

- 11.8.1 the Bose-Hubbard Hamiltonian (11.183)–(11.194) · score 4 · built in part: drv-site-frequency ((11.185), a thin block; the "where" clause defining E_R kept as its own sentence) and drv-on-site-interaction ((11.190), the leading i = j = k = l term and b†b†bb = n(n − 1); the span introducing “on-site” went with the dropped "is" sentence, its coverage row moved to the derivation). Not built: the unnumbered substitution of (11.189) into (11.179) (one move); (11.191) an estimate; (11.192)–(11.193) stated, the hopping integral and its sign argued in words only; (11.194) the sum of (11.190) and (11.193).
- 11.8.2 the weak lattice (11.195)–(11.201) · score 2 · built as drv-weak-lattice-band ((11.198)–(11.199)); the cos 2ka of (11.199) is the node's note (c-eq-11-199 and its marker removed), the "where a is the spacing" clause became a fact card. (11.200)–(11.201) stay printed: one substitution.
- 11.8.2 the exchange energy −2t²/U₀ · score 6 · not built: it rests on second-order perturbation theory, which the book never states.
- 11.8.2 the Mott insulator to superfluid transition (11.205)–(11.212) · score 7 · not built: E_MI (11.209) is the exchange energy above, (11.208) is stated with its hopping count unworked (the factor 2 in −t·z·2 does not follow from Σ_<ij> with z neighbours), (11.210) is an order-of-magnitude comparison, and the variational minimum (11.212) is stated, its working left out and already addressed by the c-exact-value row.
- 11.8.2 the Mott insulator to superfluid transition (11.205)–(11.212), second pass (2026-10-19) · score 8 · re-judged and built in part as drv-mott-transition-estimate: (11.208), hidden (the homogeneous Hubbard Hamiltonian (11.194) averaged in the product of coherent site states (11.205), (11.207)), whose hopping energy works out to −t·z, not the printed −t·z·2 (the node's note), and (11.210) from E_SF = E_MI with (11.209) cited as stated, giving t·z·2 ∼ U₀ for the printed t·z·4 (the node's note). A wrong line that now lives in the derivation needs no correction row. The connectors "In this simple model, the superfluid state has an energy" and "From this simple analysis, we would predict a phase transition to occur when" went with the displays; "whereas the Mott insulator state has an energy" became "In this simple model, the Mott insulator state has an energy"; "where z is the number of nearest neighbors" became a fact card. Form eq-11-210 re-anchored with the corrected latex, the E_SF variables row re-anchored. (11.209) stays printed (second-order perturbation theory is never stated); (11.211)–(11.212) stay as before.
- 11.8.1 drv-site-frequency, second pass: the last line keys its two forms apart, so no key spans an equals sign.
