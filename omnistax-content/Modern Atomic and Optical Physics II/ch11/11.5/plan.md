# Plan: 11.5 Excitations in a Bose condensate

Source: `source.md` (PDF pages 272–278, Eqs. 11.142–11.167, Figure 11.10, no footnotes). Planned and built in one go (config: Chen approved building without stopping); this plan is left for review after.

## Blocks

The book's opening paragraph is the first block with no heading; 11.5.1–11.5.3 are `<h2>`; the run-ins "Example: homogeneous potential", "Probing the excitation spectrum - under construction" and "Superfluidity of repulsive atoms" are `<h3>` inside 11.5.1 (config).

| id | `<h2>` | holds |
|---|---|---|
| `opening` | none | the opening paragraph |
| `bogoliubov-approximation` | 11.5.1 The Bogoliubov approximation | Eqs. 11.142–11.147; h3 Example (Eqs. 11.148–11.154, Figure 11.10, the closing paragraph); h3 Probing (11.155–11.156); h3 Superfluidity (11.157–11.159) |
| `attractive-interactions` | 11.5.2 BEC with attractive interactions | Eqs. 11.160–11.163 |
| `observation` | 11.5.3 Observation of BEC | Eqs. 11.164–11.167 |

Every numbered display is `<div class="equation" id="eq-11-K">` with `\tag{11.K}`.

## Concepts (8, prep-merged)

| concept | introducing span |
|---|---|
| bogoliubov-approximation | `bogoliubov-equations` (“Bogoliubov equations”, the book's quoted term) |
| bogoliubov-spectrum | `dispersion` ("the dispersion relation") |
| free-particle-energy | `free-energy` ("where ϵ_q = ℏ²q²/2m") |
| sound-velocity | `sound-velocity` ("an associated sound velocity") |
| bragg-spectroscopy | `bragg` ("a Bragg scattering technique") |
| landau-criterion | `landau` ("the so-called Landau criterion for superfluidity") |
| attractive-condensate-stability | `finite-number` ("The explanation for the stability lies in the finite number of atoms confined to the trap.") |
| expansion-signature | `expansion` ("Such expansion images provide a means for distinguishing a cold, thermal atom cloud from a condensate.") |

Forms anchored at `11.5-eq-11-K`. Forms corrected (config: a concept form states the corrected relation): eq-11-159 becomes v > v_c = min_q ω_q/q = s, eq-11-165 takes τ for t.

Concept spans, judged per mention: "the ground state wavefunction" `condensate-ground-state`; "a Bose-Einstein condensate", "a Bose condensate", "the condensate" where it names the condensed state `bose-condensation` (plain where it is "the condensate" as a medium in a long run of the same subject; judged in place); "the field operator" `matter-field-operator`; "the Heisenberg equation" `heisenberg-picture`; "squeezing" `squeezed-state`; "The Thomas-Fermi approximation" `thomas-fermi-approximation`; "the condensate density" `condensate-density`; "the chemical potential" `chemical-potential`; "the dispersion relation", "particle-like", "sound-like" `bogoliubov-spectrum`; "the inverse healing length" `healing-length`; "superfluidity" `landau-criterion` (its term); "the speed of sound" `sound-velocity`; "critical velocity" `landau-criterion`; "Adiabatically eliminating" `adiabatic-elimination`; "Bragg scattering" (second mention) `bragg-spectroscopy`; "a characteristic trap length" `trap-length`; "absorption imaging" `absorption-imaging`; "releasing … expand for a time τ" `time-of-flight-imaging`; "the uncertainty principle" `heisenberg-uncertainty-principle`; "a bimodal distribution" `expansion-signature`; "the interatomic potential" plain (11.4's U(r) concept is the van der Waals tail, not the attractive sign). Plain: "coherent beams", "normal mode", "Bose statistics" (of the excitations, not the gas), "drag", "excitations", "momentum distribution", headings.

## Symbols and variables

`ost meanings` run for every symbol. New book symbols (staged with `ost add symbols --chapter 11`): `q` (q, `\kq`, wavevector: an excitation's wavevector), `a_c` (a_c, `\kac`, length: the condensate's size in the trap), `R_exp` (R, `\kRexp`, length: the cloud's size after expansion, R_BEC and R_T).

Rows for 11.5: psi_GP → gross-pitaevskii-equation; U_0 → interacting-bose-gas-hamiltonian; n_0 → condensate-density; mu_chem → chemical-potential; epsilon_q → free-particle-energy; omega_q → bogoliubov-spectrum; s_sound → sound-velocity; xi_heal → healing-length; a_t → trap-length; a_scat → s-wave-scattering-length; v_c (velocity, the Landau critical velocity, `redefines`, linked to landau-criterion with its own type velocity); unlinked typed rows: t, m, V (energy, the trap potential), omega (frequency: ω_j of a normal mode, ω₁, ω₂ of the Bragg lasers, ω_min; `redefines`), q, k and k_mag (the Bragg wavevectors, bold in (11.155), unbold in the prose and (11.156)), v_mag (the object's velocity, `redefines`), p_cm (momentum, `redefines`), epsilon (the object's energy ϵ_object, `redefines`), tau (the expansion time, `redefines`), r_dist (position after expansion, `redefines`), a_c, R_exp.

Ink: ψ̂ and δψ̂ (operators; the `psi_hat` macro prints ψ̂(r), which the book does not write here), α̂_j, u_j, v_j, ℏ, N, N_max, the volume V of (11.162) (the section's V row is the potential), q_c, q_min and ω_min take the macros of their letters with subscripts.

No total energy appears in 11.5, so `E_tot` is not used.

## Referents

None. No figure draws the condensate and thermal cloud of 11.5.3 (its Sim is only suggested below), so they are not referents.

## Figures

Units: ⁸⁷Rb for Figure 11.10 and ⁷Li (the attractive condensate the book alludes to, "stable condensates with attractive interactions have been observed") for the Sim; q in µm⁻¹, frequencies ω/2π, n₀U₀/h, velocities in mm/s. The book gives no numbers. Axes are fixed per figure.

The first draft folded 11.5.2 into Figure 11.10 with an a_t slider. Rejected on the numbers: the interaction energy at which a trapped attractive condensate is still stable (n₀|U₀|/h ≈ 30 Hz at a_t = 1 µm) is a hundred times below the kHz scale on which Figure 11.10 shows the sound-like crossover, so on one fixed axis the imaginary branch and its cut-off would be invisible. 11.5.2 gets its own Sim on its own scale.

- sim-bogoliubov · Figure 11.10 · bogoliubov-spectrum, free-particle-energy, sound-velocity, landau-criterion · variation by slider: the reader raises n₀U₀ from zero and watches the free parabola ϵ_q bend into a sound line of slope s at small q, with the crossover q_c ∼ 1/ξ moving out as √(n₀U₀) (Eqs. 11.151–11.154). Dragging an object's velocity v past s shows its line qv first rising above the spectrum at q → 0, so the critical velocity is s (the Landau criterion, which the book's (11.159) misprints), with the band of q it can excite shaded. Turning U₀ negative shows the long-wavelength modes go imaginary (11.5.2's first sentence). The book's still shows one state; the change of slope and sign is what the reader would otherwise have to imagine · arrows: none (the book's curved arrow, "finite velocity required", becomes the object's line itself) · still: n₀U₀ and v are parameters, not a clock · sliders n₀U₀/h (energy, −1 to 3 kHz, default 1; special 0, no interactions), v (velocity, 0 to 6 mm/s, default 1.2; special s, shown while n₀U₀ > 0) · headline: the object's verdict (no drag, just touching, or the band of q it excites), or the uniform attractive condensate's instability · graph alone (the graph is the idea), q 0 to 8 µm⁻¹, ω/2π 0 to 8 kHz · 2D (a relation between quantities). Curves: ω_q/2π solid (frequency, 5 px); ϵ_q/h dotted ink; the sound line qs/2π dashed (velocity hue, as its slope); the object's line qv/2π (velocity, 3 px) with a dot where it meets the spectrum; |Im ω_q|/2π dashed (frequency). Labels: "sound-like", "particle-like" (the book's), "q_c ∼ 1/ξ"; the five curves are named in a legend (its absent rows faded); hover names on every curve and on the shaded band. Readout: for n₀U₀ > 0, v_c = min ω_q/q = s = √(n₀U₀/m) with the live number, the note giving q_c; for n₀U₀ < 0, the q below which ω_q is imaginary; at 0, ℏω_q = ϵ_q and v_c = 0.
- sim-attractive · Sim · attractive-condensate-stability, trap-length · variation by slider: the reader weakens the attraction or tightens the trap and watches the shaded band q < 1/a_t (Eq. 11.160) grow over the imaginary branch until it covers it, when ω_min of (11.161) turns real and (11.162) holds. The text states the stability as an inequality between two scales; the figure shows the two scales meet · arrows: none · still: n₀|U₀| and a_t are parameters · sliders n₀|U₀|/h (energy, 0 to 400 Hz, default 60; special: the stability limit ϵ(1/a_t)/2), a_t (length, 0.5 to 5 µm, default 2; special: the stability limit ℏ/√(4m n₀|U₀|)) · headline: stable or collapsing, with the live q_min and the branch's end · graph alone, q 0 to 2 µm⁻¹, ω/2π 0 to 800 Hz · 2D. Curves: real ω_q/2π solid, |Im ω_q|/2π dashed (frequency), ϵ_q/h dotted ink, the band shaded with a dashed ink edge, ω_min a dot (filled when real, hollow when imaginary). Labels "q_min = 1/a_t", "ω_min"; legend for the three curves; hover names. Readout: (11.162) with the live numbers and =, ≥ or <; the note gives ω_min/2π or says it is imaginary.

`draws`: sim-bogoliubov `frequency`, `energy`, `velocity`, `wavevector`; sim-attractive `frequency`, `energy`, `length`, `wavevector`.

### Extra sims (root 15), not built

- The expansion image of 11.5.3: a column density across the cloud after time τ, a parabolic condensate on a gaussian thermal pedestal, the condensed fraction on a slider, so the reader sees the bimodal shape a fit separates.
- Bragg spectroscopy on Figure 11.10: the two lasers' difference (k₁ − k₂, ω₁ − ω₂) as a point the reader drags in the (q, ω) plane, lighting up where it lands on the spectrum, so the resonance of (11.156) reads as a hit on the curve.

## Exercises

None (prep, config; no inline invitation in the section).

## Lead draft (AI-marked)

> The elementary excitations of a Bose condensate: the Bogoliubov approximation and its equations, the excitation spectrum of a uniform condensate and how Bragg scattering probes it, the Landau criterion for superfluidity, why a condensate with attractive interactions survives only in a finite trap, and how expansion images tell a condensate from a thermal cloud.

## Objectives, summary, notes

`objectives` and `summary_html` empty. `notes` empty: nothing is left out.

## Book faults kept verbatim

- "homogenous" beside "homogeneous"; the heading "Probing the excitation spectrum - under construction".
- (11.143) writes ψ where (11.146)–(11.147) write ψ̃ (kept; ψ = ψ̃e^{−iμt/ℏ} makes both readable).
- (11.144) the bracketed u_j(r), v_j*(r) kept as printed.

## Corrections

| id | attaches to | the book prints | note |
|---|---|---|---|
| c-eq-11-154 | `eq-11-154` | ms/(√2ℏ) | ℏ⁻¹√(2mn₀U₀) = √2 ms/ℏ; the last expression is off by a factor of 2. |
| c-eq-11-158 | `eq-11-158` | Δϵ_object = ω_q | The energy given to the excitation is ℏω_q. |
| c-eq-11-159 | `eq-11-159` | v_c = ϵ_q/ℏq | An excitation of wavevector q takes momentum ℏq and energy ℏω_q, so v must exceed ω_q/q for some q: v_c = min_q ω_q/q, reached as q → 0, where it equals s, as the next sentence says. |
| c-eq-11-165 | `eq-11-165` | t | The expansion time is τ: R_BEC ∼ ℏτ/(a_c m). |

## Wanted at chapter level

- New book symbols `q`, `a_c`, `R_exp` staged in `ch11/book-rows.json`; 11.8's band −2t cos ka and 11.6 may reuse `q` and `R_exp`.
- 11.5's rows of `U_0`, `n_0`, `a_t`, `xi_heal`, `a_scat`, `psi_GP` were written before 11.4's: the chapter pass should make their meanings agree with 11.4's.
- `v_c` is linked to `landau-criterion` with its own type (velocity), since the concept has none; the chapter pass may prefer to give the concept `symbol: v_c` and `type: velocity`.

## Build notes

Built 2026-10-11: `ost check --section 11.5` ok; astro build ok (54 pages); Playwright in light and dark: no console or page errors, no KaTeX errors, both figures have canvases and no transport, eyebrows "Figure 11.10" and "Sim", four correction markers [1]–[4]. Screenshots at the slider extremes (n₀U₀/h −1, 0, 3 kHz; v 0 and 6 mm/s; n₀|U₀|/h 0 and 400 Hz; a_t 0.5 and 5 µm). One fix pass: the imaginary branch now meets the axis at q*, "sound-like" stands clear of the curve, the Sim's legend steps down when q_min reaches it, and the band's edge is ink rather than the length hue, which sat close to the frequency hue.

## Derivations

- 11.5.1 the Bogoliubov approximation and the homogeneous spectrum (11.142)–(11.154) · score 5 · split at the book's prose: drv-linearized-field-equation ((11.143) from (11.128) with (11.142), the Gross-Pitaevski terms cancelling; "and similar for the hermitian conjugate" dropped with the display), drv-bogoliubov-equations ((11.146)–(11.147); the "where ψ = ψ̃e^{−iμt/ħ}" clause became a fact card), drv-bogoliubov-spectrum ((11.151), the determinant of (11.150)). (11.150) stays printed: the plane waves put into the Bogoliubov equations in two hidden moves, below the bar. (11.152)–(11.154) not built: one-move limits and order-of-magnitude estimates.
- 11.5.1 the Landau criterion (11.157)–(11.159) · score 3 · built as drv-landau-critical-velocity, a thin printed block finished to the speed of sound the next sentence names; the wrong (11.159) is the node's note (c-eq-11-159 and its marker removed); (11.157)–(11.158) stay printed, (11.158) keeping its marker.
- 11.5.2 the maximum stable atom number (11.160)–(11.163) · score 2 · built as drv-attractive-stability; (11.160) stays printed as its fact.
