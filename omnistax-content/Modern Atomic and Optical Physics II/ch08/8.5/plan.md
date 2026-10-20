# Plan: 8.5 The Heisenberg-Langevin formalism applied to Doppler cooling

Source: `source.md` (PDF pages 154–158, Eqs. 8.79–8.96, no book figures, footnotes 2 and 3, three numbered subsections, three run-in headings). Planned and built in one go (Chen approved building without stopping); this plan is left for review after.

## Blocks

Three numbered subsections as `<h2>` with their numbers, no opening block (config); the run-ins inside them are `<h3>`.

| id | `<h2>` | holds |
|---|---|---|
| `diffusion` | 8.5.1 Momentum diffusion in laser cooling of a two-level atom | Eqs. 8.79–8.85, footnote 2 (8.86–8.87), 8.88–8.90, footnote 3; `<h3>` The diffusion constant: 8.91–8.92 |
| `cooling-limit` | 8.5.2 The Doppler cooling limit | Eqs. 8.93–8.96, the Na and Rb values, the thermal-equilibrium puzzle; `sim-doppler-limit` after the values |
| `dense-sample` | 8.5.3 Corrections for a dense sample | `<h3>` Laser attenuation, `<h3>` Spontaneous photon reabsorption (references kept as printed, unlinked) |

Every numbered display is `<div class="equation" id="eq-8-K">` with `\tag{8.K}`; (8.86)–(8.87) stand inside footnote 2's `html` (the book numbers them before 8.88, book order). The prose cites no equation by number; nothing is misnumbered.

## Concepts (6, prep-merged)

| concept | introducing span |
|---|---|
| laser-cooling-noise-force | `noise-force` ("the noise force we had previously been missing") |
| force-fluctuations | `fluctuating-force` ("the fluctuating force is simply") |
| laser-cooling-diffusion | `diffusion-constant` ("the appropriate diffusion constant") |
| doppler-limit | `final-temperature` ("the final temperature T_D attainable by Doppler cooling") |
| laser-attenuation | `attenuation` ("An optically thick sample will attenuate any laser beam…") |
| photon-reabsorption | `reabsorption-force` ("Spontaneous photon reabsorption thus leads to an effective repulsive force between atoms") |

Form anchors (`ost set … forms`): eq-8-79, 80, 82, 83, 84, 85, 88, 89, 90, 91, 92, 93, 94, 95, 96 → `8.5-eq-8-K`. (8.81) is the first line of (8.82)'s pair and no form.

`uses` rows: heisenberg-langevin-equation, doppler-cooling, light-force-operator (`hl-doppler`); semiclassical-light-force, open-system (`average-fluctuation`); quantum-langevin-force, generalized-einstein-relation (`noise-force`); detuning (`al-split`); spontaneous-emission (`two-factors`); langevin-equation, diffusion-coefficient (`diffusion-constant`); random-walk, spontaneous-emission, zero-velocity-excitation-rate, atomic-recoil (`diffusion-physics`); einstein-relation, friction-coefficient, dissipative-force (`final-temperature`); optical-pumping-rate (`pumping-drops`); spontaneous-emission-rate (`radiative`); thermal-radiation-field (`equilibrium`); dipole-force (`attenuation`); atomic-recoil, heisenberg-langevin-equation, reservoir-operator-solution, master-equation (`reabsorption`, `multi-atom`). `reinforces`: magneto-optical-trap is not mentioned in the text, so only the exercise tags it.

Concept spans judged per mention. Wrapped: "the Heisenberg-Langevin formalism", "the Heisenberg-Langevin equation", "the Heisenberg-Langevin approach", "a multi-atom Heisenberg-Langevin equation" (heisenberg-langevin-equation); "momentum diffusion", "Momentum diffusion", "the diffusion coefficient" (8.5.1 and 8.5.2: it is this D), "the diffusion associated with spontaneous emission", "contributions to diffusion" (laser-cooling-diffusion); "the Doppler cooling model", "Doppler cooling", "position-dependent cooling" (doppler-cooling); "a force on the atom" (light-force-operator, F̂ of 8.79); "the average force" (twice, semiclassical-light-force: ⟨F̂⟩ is 8.2's semiclassical force); "the fluctuations about the mean", "this force", "the force fluctuations" (force-fluctuations); "a radiation field bath" (open-system: a reservoir); "the noise force", "the average noise force", "this noise force" (laser-cooling-noise-force); "the detuning", "the optimal detuning" (detuning); "spontaneous emission" each time it names the process (spontaneous-emission); "Brownian motion" (langevin-equation, its term); "a random walk in momentum space", "The average root mean squared momentum grows" (random-walk); "changes the momentum by ℏk" (atomic-recoil, the kick); "the Einstein relation"; "the viscosity", "the friction coefficient" (friction-coefficient); "the dissipative force"; "the optical pumping rate" (optical-pumping-rate); "the final temperature", "the temperature" (8.5.2's), "the Doppler limit" (doppler-limit); "the spontaneous emission rate" (spontaneous-emission-rate); "the thermal reservoir of photons" (thermal-radiation-field); "An optically thick sample…" (laser-attenuation); "an additional dipole force" (dipole-force); "a momentum kick" (atomic-recoil); "Spontaneous photon reabsorption" in the sentence (photon-reabsorption); "The source term for the reservoir operator" (reservoir-operator-solution); "the Langevin force on one atom" (quantum-langevin-force); "a multi-atom master equation" (master-equation). Plain: the h3 titles (headings carry no spans), "the atomic coherence" (σ̂₁₂ as an operator, not the density-matrix element), "vacuum state", "the linewidth of the excited state" (8.1 left "linewidth" plain), "laser cooling efforts", "thermal equilibrium", "dense", "the cooling beams", "atom-atom scattering events", "the atom-laser interaction".

## Symbols and variables (chapter 8, section 8.5)

`ost meanings` run for each. Two new symbols staged in `ch08/book-rows.json` through `ost add … symbols --chapter 8`: `Omega_tilde` (`\kOmegatilde`, Ω̃ = 2Ω) and `r_dist` (`\krdist`, plain r: `\kr` prints r̂, and 9's `\krsq` is another quantity).

| sym | concept | type | meaning |
|---|---|---|---|
| F | light-force-operator | (force) | 8.2's: the force operator on the atom |
| F_noise | laser-cooling-noise-force | (none) | redefines: the noise force 𝓕̂₁₂ on the coherence σ̂₁₂ of the laser-driven atom |
| f_hat | quantum-langevin-force | (none) | the quantum Langevin force f̂(t) of the radiation reservoir (8.4's) |
| D_diff | laser-cooling-diffusion | (diffusion) | redefines: the momentum diffusion constant of a laser-cooled atom |
| T_D | doppler-limit | (temperature) | the Doppler temperature |
| Omega_tilde | none | coupling | twice the Rabi frequency, counting both beams and absorption |
| Omega | rabi-frequency | (coupling) | 8.3's |
| H | moving-atom-hamiltonian | (energy) | 8.2's (H_AL written `\kH_{AL}` as 8.1 does) |
| H_S | none | energy | 3.4's: the system Hamiltonian |
| gamma, gamma_12, delta, R_opt, R_opt_0, eta | their concepts | | 8.3's meanings |
| k_mag, m, p_cm, t, lambda, T, omega | none / their concept | | the earlier sections' meanings (T is the radiation's temperature, 3.1) |
| r_dist | none | length | the distance from the emitting atom |

In ink: σ̂ᵢⱼ (untyped operators, COLOR.md), k_B and ℏ, n(ω), the Fourier ω, ω′ of footnote 2, and footnote 2's "2D", which there stands for the strength of the noise 𝓕̂₁₂ (γ by Eq. 8.84) and not the momentum diffusion constant, so it is not `\kDdiff`.

## Referents

None: the section names no particular level or beam a figure draws (the two counterpropagating beams are counted, not drawn).

## Figures

The book draws none in 8.5. The section's result a reader would otherwise have to imagine varying is (8.94)–(8.95): heating and friction both grow with the pumping rate and the temperature does not. Root 14 gives it a figure and it passes rule 24's gate (variation).

- sim-doppler-limit · Sim · doppler-limit, laser-cooling-diffusion, friction-coefficient, einstein-relation · variation by slider: two stacked graphs against the detuning δ. Above, on one logarithmic axis, the heating D/((ℏk)²γ₁₂) of (8.91) and the friction m|η|/(ℏk²) of (8.93); below, their ratio k_BT_D/ℏγ₁₂ of (8.95). Raising |Ω| lifts both upper curves by the same factor, so on the log axis they slide up together and the gap between them, which is log k_BT_D, does not change, and the lower curve stays put: the pumping rate "drops out", which the still equations leave to be taken on trust. Dragging δ walks the drop line along both; the gap closes to its smallest at δ = −γ₁₂, where the lower curve touches ℏγ₁₂ · arrows: none · still: δ and Ω are parameters, nothing has a clock · sliders δ (frequency, −5 to −0.2 γ₁₂, default −1, special at −1 "optimum") and |Ω| (coupling, 0.1 to 0.5 γ₁₂, default 0.3, weak field as (8.30) assumes; no special) · headline: the live δ and k_BT_D, and whether it sits at the limit · graph alone, two panels on one δ axis · 2D (a relation between quantities). Red detuning only, since only δ < 0 cools (8.3) and the temperature is defined only there. Units γ₁₂, as 8.3. Labels: D above and m|η| below their curves near the left end, moved mid-way when δ is there, k_BT_D on the gap bracket (dropped when the gap is under 18 units), "ℏγ₁₂" on the lower panel's dashed level; hover names on the three dots and the bracket. Readout: (8.94) with the live numbers, k_BT_D = D/m|η| = 0.180(ℏk)²γ₁₂ / 0.180ℏk² = 1.00 ℏγ₁₂, the result computed from the shown values so the numbers agree. The figure follows the corrected sign (|η|, |δ|; see corrections).

`draws`: frequency, coupling, rate, diffusion, friction, temperature, mass, wavevector. No facts or conventions.

### Extra sims (root 15), not built

- Momentum random walk with friction: one atom's momentum kicked by ±ℏk at R⁰_opt and pulled back at η, many atoms' histogram broadening to the width √(mk_BT_D); it would show the balance of (8.94) as a process. 8.4's Brownian candidate covers the same view with general D and η, so offered here only if 8.4 does not build it.
- Two atoms reabsorbing each other's photons: the repulsive 1/r² force of 8.5.3 beside the attenuation force on a cloud's edge atom, with n and σ_R/σ_L as sliders; it would show the density limit of hw9.3(c). The text gives the effect in words only, so offered, not built.

## Exercises

No Try It: the section prints no invitation. MIT 8.422 Problem Set 9, Problem 3 (density limit in a MOT) → 8.5.3, one card per part (`hw9-3a` … `hw9-3e`), `origin: mit-8422`, `kind: problem`, place end, cite `reabsorption`. Restated: MIT's spring constant κ is K (κ is a cavity's decay rate in Chapter 9), the two atoms' separation d is r (d is the dipole moment; 8.5.3 writes r), the absorbing fraction f is f_b (f is the Langevin force); the set's sodium data are left out (this problem uses none). The problem's opening is repeated so each card stands alone, and (c)'s card states the results of (a) and (b). All five take AI solutions (none has a key); nothing numerical, so nothing held.

| id | bloom | concepts |
|---|---|---|
| hw9-3a | Apply | photon-reabsorption, absorption-cross-section, magneto-optical-trap |
| hw9-3b | Understand | laser-attenuation, absorption-cross-section |
| hw9-3c | Apply | photon-reabsorption, laser-attenuation, magneto-optical-trap |
| hw9-3d | Analyze | photon-reabsorption, dressed-states, absorption-cross-section |
| hw9-3e | Analyze | photon-reabsorption, laser-attenuation, magneto-optical-trap |

hw9.1(c) (the longitudinal D for three emission patterns) bears on 8.5.1's diffusion; it stays in 8.2 (config) and is named in `exercise_notes`, not duplicated.

## Notes and corrections

Footnotes 2 and 3 are `footnotes` rows of kind `book` (`footnote-2`, `footnote-3`), markers where the book sets them. Footnote 3's URL stays printed text, unlinked (book RULES); "Bill Phillip’s" kept (config).

Corrections (kind `correction`, marker after the misprint):
- `c-rms-momentum` after "√⟨p²⟩ = √Dt": with 2Dδ(t − t′) = ⟨δF̂(t)δF̂(t′)⟩ the free random walk gives ⟨p²⟩ = 2Dt, so √(2Dt); the slip follows (8.49) of 8.4.
- `c-eq-8-95` after (8.95)'s `$$`: (8.93)'s η has the sign of δ and is negative when the beams cool (δ < 0, as 8.3's correction says); the friction rate in (8.94) is its magnitude, so k_BT_D = D/m|η| = ℏ(δ² + γ₁₂²)/2|δ|, and the optimum is δ ≈ −γ₁₂, where (8.96) holds.

Checked, not corrected:
- (8.93)–(8.96) write γ₁₂ where (8.90)–(8.92) write γ/2; the two agree for a radiatively broadened atom, γ₁₂ = γ/2, which the text then assumes. "the linewidth of the excited state" for γ₁₂: the book calls γ₁₂ the homogeneous linewidth (4.3), so it is kept; k_BT_D = ℏγ/2.
- The Na and Rb values: ℏγ/2k_B is 0.24 mK for Na (γ/2π = 9.8 MHz) and 0.15 mK for Rb (6.1 MHz); the book's 0.25 and 0.14 mK hold to its "e.g.".
- (8.90)–(8.92) checked against (8.89) with Ω̃ = 2Ω, and (8.95) against (8.91), (8.93) with R⁰_opt = 2γ₁₂|Ω|²/(γ₁₂² + δ²).
- Footnote 2's "2Dδ(ω + ω′)" mixes Fourier conventions and uses D for the noise strength γ; the footnote's point (dropping ω from the denominators) does not depend on either, so it is kept.
- "h.c," in (8.89), "R⁰_opt" in italics, R_opt without its 0 in (8.93), "Bill Phillip’s": typography, kept.

## Objectives, summary, notes

Objectives and summary empty (config). `notes` empty: nothing is left out.

## Lead draft (AI-marked)

> The Heisenberg-Langevin equation applied to a two-level atom in counterpropagating beams: the noise force that spontaneous emission puts on the atom, the momentum diffusion it causes, the temperature at which this heating balances Doppler cooling, and what changes when the atoms are dense enough to shade and push one another.

## Wanted at chapter level

- New symbols `Omega_tilde` (`\kOmegatilde`) and `r_dist` (`\krdist`) are staged and merged; 8.6 may reuse `r_dist` for a distance.
- `f_hat` and `F_noise` rows: 8.5 words f̂ as 8.4's quantum Langevin force; the chapter pass should read `ost meanings f_hat` and make 8.5's row match 8.4's wording if 8.4 words it differently.
- 8.4's (8.49) correction (p̄² = 2Dt) and 8.5's `c-rms-momentum` should agree in wording.
- Chapter pass: `c-rms-momentum` now says (8.49) drops a factor of two and gives 2Dt for an atom starting at rest, as 8.4's `c-eq-8-49` does; `f_hat`, `S_hat`, `T_D` already read as 8.4's and 8.6's.

## Derivations

- 8.5.1 momentum diffusion (8.79)–(8.92) · block (score 3) · built as four at the book's breaks: drv-coherence-noise ((8.81)–(8.82) from (8.69)), drv-noise-moment ((8.84) and (8.85)), drv-fluctuating-force ((8.88)–(8.90)) and drv-diffusion-constant ((8.91)–(8.92)). (8.79) restates 8.2's force operator for a plane wave ("Recall that") and stays with (8.80) and the definition (8.83); the sentence "the fluctuating force is simply" becomes the reason of its step; "where Ω̃ = 2Ω" becomes "Here Ω̃ = 2Ω", and the factor it carries is footnote 3's, a fact card. Footnote 2's Fourier check (8.86)–(8.87) stays in the footnote
- 8.5.2 the Doppler limit (8.93)–(8.96) · block (score 3) · built as drv-doppler-limit, (8.93), (8.95) and (8.96), after the paragraph on the optimal detuning; the two fragments around (8.93) join into one sentence. The work takes |η| in the Einstein relation (node note: the printed (8.94)–(8.95) give a negative temperature for δ < 0), and c-eq-8-95 moves to the printed "δ ≈ γ₁₂" of the kept sentence, where it now says the optimum is δ ≈ −γ₁₂; links to (8.91) and (8.93) in the figure's caption re-pointed
