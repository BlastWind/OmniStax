# Plan: 8.6 Sub-Doppler cooling

Source: `source.md` (PDF pages 158–168, Eqs. 8.97–8.135, Figures 8.4–8.6, footnote 4, four numbered subsections with run-in headings). Planned and built in one go (Chen approved building without stopping); this plan is left for review after.

## Blocks

An opening block, then the four numbered subsections as `<h2>` with their numbers; the run-ins inside them are `<h3>` (config).

| id | `<h2>` | holds |
|---|---|---|
| `opening` | none | the opening paragraph |
| `observations` | 8.6.1 Experimental Observations | `<h3>` Polarization gradients (8.97–8.98), `<h3>` Detuning |
| `sisyphus` | 8.6.2 Sisyphus Cooling | Figure 8.4 (`sim-cg-levels`), 8.99–8.107, the optical-pumping paragraph, Figure 8.5 (`sim-sisyphus`) |
| `quantitative` | 8.6.3 Quantitative analysis of sub-Doppler cooling | `<h3>` The Sisyphus cooling force (8.108–8.127), `<h3>` Comparison of Doppler and Sisyphus cooling (8.128–8.129, Figure 8.6 `sim-sisyphus-doppler`), `<h3>` Capture velocity (8.130), `<h3>` Non-adiabaticity in Sisyphus cooling |
| `limit` | 8.6.4 The Sisyphus cooling limit | 8.131–8.135 with footnote 4, `<h3>` Other sub-Doppler cooling mechanisms, the closing paragraphs |

Every numbered display is `<div class="equation" id="eq-8-K">` with `\tag{8.K}`; 8.107 keeps its own div although it continues 8.106. Citations "Eq. (8.117)" and "Eq. (8.124)" link to their equations; "Figure (8.4)" links to `sim-cg-levels`. "in previous lectures" (8.2's dipole force and Chapter 5's two-photon transitions) and "subsequent lectures" stay unlinked. Figure 8.5 stands on page 161 inside the paragraph that ends "beyond the AC / Stark effect"; its figure goes after the optical-pumping paragraph, which names Sisyphus cooling. Figure 8.6 stands alone on page 165 and goes after the comparison paragraph.

## Concepts (12, prep-merged) and their introducing spans

| concept | span |
|---|---|
| sub-doppler-cooling | `sub-doppler` ("measured temperatures which were ten times smaller than predictions of the Doppler cooling limit") |
| polarization-gradient | `lin-perp-lin` ("linearly cross-polarized beams (the “lin⊥lin” configuration)") |
| ground-state-light-shift-potential | `light-shift-differs` ("the AC Stark shift is different for the two ground states") |
| sisyphus-cooling | `sisyphus-name` ("This physical mechanism has earned the descriptive name “Sisyphus” cooling") |
| sisyphus-pumping-rate | `eq-8-113` |
| sisyphus-force | `lag-force` ("the time delay gives us a contribution to the force which will not average to zero and is proportional to the velocity") |
| sisyphus-friction | `sisyphus-friction` ("the Sisyphus friction coefficient approaches") |
| doppler-sisyphus-comparison | `compare` ("It is instructive to compare the friction coefficient …") |
| sisyphus-nonadiabaticity | `time-lag` ("The friction force entered only when we accounted for a time lag, which therefore must be crucial to the Sisyphus mechanism") |
| sisyphus-limit | `sisyphus-limit` ("the final temperature attained by the atoms in the limit of large detuning") |
| recoil-limit | `recoil-limit` ("sets a lower limit on the atomic energy equal to the recoil energy") |
| sub-recoil-cooling | `sub-recoil` (“sub-recoil” mechanisms) |

Form anchors (`ost set … forms`): every form → `8.6-eq-8-K` of its equation (eq-8-99 and eq-8-101 hold two lines each and anchor to their first; eq-8-103 the same).

`uses` rows: doppler-limit, doppler-cooling (`opening`); spherical-polarization-basis (`lin-perp-lin`); ac-stark-shift, detuning (`detuning-observation`); clebsch-gordan-coefficients (`light-shift-differs`); dipole-force, dressed-states, optical-pumping (`pumping`); rate-equations, adiabatic-elimination, optical-pumping-rate, spontaneous-emission (`rate-equation`); adiabatic-expansion (`expansion`); capture-range (`eq-8-124`); friction-coefficient (`compare`); einstein-relation, laser-cooling-diffusion, spontaneous-emission (`sisyphus-limit`, `diffusion-sp`); recoil-frequency (`recoil-limit`); raman-transition, dark-resonance (`sub-recoil`).

Concept spans judged per mention. Wrapped: "Doppler cooling limit", "Doppler limit" (doppler-limit); "Doppler cooling" (doppler-cooling); "sub-Doppler" each time it names the cooling or its temperatures (sub-doppler-cooling); "polarization gradient(s)" (polarization-gradient); "AC Stark shift(s)", "AC Stark shifted", "the AC Stark effect" (ac-stark-shift); "far-detuned", "detuning", "red-detuned", "blue-detuned" (detuning); "Clebsch-Gordon coefficients" (clebsch-gordan-coefficients); "dressed state potential", "dressed states" (dressed-states where the states, ground-state-light-shift-potential where the potential); "conservative force analogous to the dipole force" (dipole-force on "the dipole force"); "optically pumps", "optical pumping" (optical-pumping); "rate equation" (rate-equations); "adiabatic elimination", "adiabatic expansion procedure" (adiabatic-elimination, adiabatic-expansion); "optical pumping rate(s)" (optical-pumping-rate); "spontaneous emission", "spontaneously emitted photon" (spontaneous-emission); "capture velocity" (capture-range); "friction coefficient" for η_D and the Doppler one (friction-coefficient), "Sisyphus friction coefficient" (sisyphus-friction); "Einstein relation" (einstein-relation); "momentum diffusion", "diffusion rate", "diffusion coefficient" (laser-cooling-diffusion); "recoil energy" (recoil-frequency, the term on that concept); "two-photon transitions" (raman-transition); "dark resonances" (dark-resonance); "Sisyphus" mechanism words (sisyphus-cooling). Plain: headings, "the multilevel structure", "cooling" as a verb, "temperature(s)" of the observations, "the final temperature" of the opening (the Doppler limit is named beside it), "viscosity", "Λ-type configuration", "classical point particles".

## Symbols and variables (chapter 8, section 8.6)

`ost meanings` run for each. No new symbol. Light shifts Δ^{σ±}_m take `\kDelta` with their sub- and superscripts; the populations ρ_{½½} and the position z stay plain, as in 8.3.

| sym | concept | type | meaning |
|---|---|---|---|
| E_field | polarization-gradient | (electric-field) | the lin⊥lin field of two counterpropagating beams with crossed linear polarizations, `redefines` |
| nu | | frequency | 4.2's: the frequency of the applied field |
| k_mag | | wavevector | 8.3's |
| Omega | rabi-frequency | (coupling) | the Rabi frequency Ω of each beam, `redefines` |
| Omega_p / Omega_m | rabi-frequency | (coupling) | Ω₊ = Ω cos kz of the σ₊ standing wave / Ω₋ = Ω sin kz of the σ₋ one, `redefines`, `ref` sigma-plus / sigma-minus |
| Delta | ac-stark-shift | (frequency) | the light shift Δ^{σ±}_m of ground sublevel m by σ± light, `redefines` |
| H | ground-state-light-shift-potential | (energy) | the effective atom-laser Hamiltonian Ĥ^eff_AL of the far-detuned lin⊥lin field, `redefines` |
| U | ground-state-light-shift-potential | (energy) | the light-shift potential U_m(z) of ground sublevel m, the diagonal of Ĥ^eff_AL (figures and captions), `redefines` |
| F_mag | sisyphus-force | (force) | the reactive force on the atom in the lin⊥lin field, `redefines` |
| delta, gamma, gamma_12, R_opt, omega_R, lambda, m, v_mag, t, T_D | as 8.3/8.5 | | earlier meanings reused |
| Delta_rho | | population | the population difference ρ_{½½} − ρ_{−½−½} of the two ground sublevels |
| tau_P | sisyphus-pumping-rate | (time) | the optical pumping time between the ground sublevels |
| v_c | capture-range | (velocity) | the Sisyphus capture velocity v_c = 1/2kτ_P, `redefines` |
| eta_S | sisyphus-friction | (friction) | the Sisyphus friction coefficient |
| eta | friction-coefficient | (friction) | 8.3's meaning, written η_D here |
| D_diff | laser-cooling-diffusion | (diffusion) | the diffusion coefficients D_sp of spontaneous emission and D_dp of the fluctuating dipole force, `redefines` |
| T_S | sisyphus-limit | (temperature) | the Sisyphus temperature |
| T_R | recoil-limit | (temperature) | the recoil temperature |
| p_cm | | momentum | 8.3's (δp of 8.134) |

## Referents

One group: the two circular standing waves of the lin⊥lin field and the two ground sublevels of J = 1/2 (COLOR.md names both).

| id | label | figures |
|---|---|---|
| sigma-plus | the σ₊ standing wave, Ω₊ = Ω cos kz | sim-cg-levels, sim-sisyphus |
| sigma-minus | the σ₋ standing wave, Ω₋ = Ω sin kz | sim-cg-levels, sim-sisyphus |
| lvl-g-plus | the m = +1/2 ground sublevel | sim-cg-levels, sim-sisyphus |
| lvl-g-minus | the m = −1/2 ground sublevel | sim-cg-levels, sim-sisyphus |

Text marks every mention of σ₊/σ₋ light and of the ground m = ±1/2 states (m_g = ±1/2, |±½⟩ in the prose), and not the excited m = ±1/2 of "m = −1/2 → m = 1/2".

## Figures

Units: the book gives no numbers. In 8.4 and 8.5 the light shift ℏ|Ω|²/|δ| is the unit of energy, positions are kz, and the Sisyphus sim's velocities are in u = √(2ℏ|Ω|²/m|δ|), the speed whose kinetic energy is ℏ|Ω|²/|δ|, its times in 1/ku. Figure 8.6 measures frequencies in γ (γ₁₂ = γ/2, radiative), velocities in γ/k and forces in ℏkγ, as 8.3 does in γ₁₂.

- sim-cg-levels · Figure 8.4 · ground-state-light-shift-potential, clebsch-gordan-coefficients, optical-pumping · variation by choice: the book prints the scheme with its Clebsch-Gordan coefficients and leaves the reader to work out, in prose, what one polarization does with them; here a choice of σ₊ or σ₋ light lights that polarization's two transitions and shows the two consequences the text derives from them: the ground sublevels' light shifts drawn as level displacements in the ratio 1 : 1/3 (Eqs. 8.99–8.102, red detuning so both move down), and the pumping route, absorption on the weak 1/√3 line then decay on the √(2/3) line, (1/3)(2/3) = 2/9 · arrows: symbolic (transitions, decays, shift brackets) · still: the polarization is a state, nothing has a clock; the levels glide between the two states on the choice's morph · choice light: σ₊, σ₋ · headline: which sublevel the light shifts more and pumps into · graph none · 2D (level diagram, book RULES). Labels: the six levels, the CG coefficients on the lit transitions, the two shift brackets; the unlit polarization's lines faded, named by hover.
- sim-sisyphus · Figure 8.5 · sisyphus-cooling, ground-state-light-shift-potential, sisyphus-pumping-rate, sisyphus-nonadiabaticity, sisyphus-limit · animation: the book draws the climb and the pumping as arrows on frozen curves; here one atom runs over the two potentials U_{±1/2}(z) of Eqs. (8.106)–(8.107), is pumped at random at the local rates of Eq. (8.110), (1/τ_P)cos²kz up and (1/τ_P)sin²kz down, and its energy steps down each time it is pumped near a crest, until it can no longer climb a hill and stays in one well (8.6.4's end of Sisyphus cooling); fast pumping (large v_c) shows the non-adiabatic point: the atom mostly rides the lower envelope and cools far more slowly; blue detuning heats · arrows: kinematic (the atom moving along z and dropping between curves; the pump squiggle marks the drop) · moving: one atom over 0 to 16/ku; transport · sliders v₀ (velocity, starting speed, 0.5–2.5 u, default 1.7, kinetic energy ≈ 3ℏ|Ω|²/|δ|; special v₀ = v_c) and v_c (velocity, 1/2kτ_P, 0.1–5 u, default 0.8; special v_c = v₀, where (8.125)'s force on an atom at v₀ is largest); choice detuning: red δ < 0, blue δ > 0 · headline: the atom's energy now against its start, the number of pumping cycles · scene above (U_{+1/2} solid, U_{−1/2} dashed in the sublevels' colours, energy line, atom), strip of |Ω₊|², |Ω₋|² beneath (the book's lower panel), graph below (E against t with the hilltop level) · 2D (potentials are 2D, book RULES). Labels: U_{+1/2}, U_{−1/2}, |Ω₊|², |Ω₋|², E; the pump squiggles unlabelled (hover names: which light pumped and the energy carried off). Readout: ½mv² + U_m = K + U = E with live numbers. Recoil kicks and the momentum diffusion of 8.6.4 are left out, as the caption says.
- sim-sisyphus-doppler · Figure 8.6 · doppler-sisyphus-comparison, sisyphus-friction, capture-range, friction-coefficient · variation by slider: the book's sketch draws the two forces on one linear scale, which they never share (at δ = −5γ, |Ω| = 0.4γ the Sisyphus peak is 1/120 of the Doppler one and its capture velocity 1/7000 of it, so on the Doppler scale the Sisyphus force is under a pixel high and wide); recomputed from the two-beam weak-field force of 8.3 (Eqs. 8.23, 8.28) and Eq. (8.125), the graph draws |F| against v > 0 on logarithmic axes (the forces are odd in v, so the book's v < 0 half is the mirror), where a force ηmv is a line of slope one whose height is η: dragging |Ω| slides the Sisyphus peak along a line that stays put (η_S does not depend on power, 8.127), dragging δ raises the Sisyphus line and lowers the Doppler one while v_c^S shrinks as |Ω|²/δ² (8.128–8.130). The book's linear picture is not one state of it; the plan argues the log axes as the only scale on which both forces and both capture velocities are visible at once, and the original stays one click away · arrows: none · still: δ and Ω are parameters · sliders δ (frequency, −8 to −2 γ, default −5) and |Ω| (coupling, 0.15 to 0.5 γ, default 0.4, weak field); red detuning only (only δ < 0 cools, and the comparison is made there); no special the text names · headline: the ratio η_S/η_D and the ratio of the capture velocities · graph alone (log v 10⁻⁶…10² γ/k, |F| 10⁻¹⁰…1 ℏkγ) · 2D (a relation between quantities). Labels: legend F_D, F_S; v_c^S, v_c^D on their drop lines; the η_S/η_D bracket at v = max(2×10⁻⁶, v_c^S/6); hover names on the curves' points. Readout: Eqs. (8.128)–(8.129) as their ratio with the live numbers.

`draws`: sim-cg-levels `frequency`, `coupling`, `rate`; sim-sisyphus `energy`, `coupling`, `velocity`, `time`, `length`; sim-sisyphus-doppler `force`, `velocity`, `frequency`, `coupling`, `friction`. No facts or conventions (the atom is unnamed and ink).

### Extra sims (root 15), not built

- The lagging population: Δρ(t) of Eq. (8.117) against the steady value cos 2kvt for an atom at constant v, the lag vτ_P growing with v and the product sin 2kz·Δρ whose average is the force (8.121); it would show (8.118)–(8.123) as a picture, but the Sisyphus sim already shows the lag in the place it matters.
- Many atoms in the lin⊥lin field, their energy histogram settling at k_BT_S ∼ ℏ|Ω|²/8|δ| once recoil kicks are added; needs a diffusion model the text only states.

## Exercises

None: 8.6 prints no invitation, and the config maps no MIT problem here.

## Footnotes

`footnote-4` (book): "see Dalibard and Cohen-Tannoudji, JOSA B, p2023 (1989) for further details.", its mark after "averaged over a wavelength,". Lowercase "see" and the missing volume (6) kept, no correction.

## Corrections

| id | attaches to | the book prints | meant |
|---|---|---|---|
| c-early-1990s | after "In the early 1990’s" | the sub-Doppler experiments in the early 1990s | 1988 (Lett et al., PRL 61, 169), explained by Dalibard and Cohen-Tannoudji in 1989 |
| c-td-hbar-gamma | after "T_D = ℏγ" | T_D = ℏγ | k_BT_D = ℏγ₁₂ = ℏγ/2 (Eq. 8.96) |
| c-large-detuning | after "δ ≫ γ" | δ ≫ γ | |δ| ≫ γ, since cooling needs δ < 0 |
| c-eq-8-107 | after (8.107)'s `$$` | no leading "+" | the Hamiltonian is the sum of the two lines |
| c-eq-8-108 | after (8.108)'s `$$` | F = +Σ ℏ∇(…) | F = −Σ ℏ∇(…); (8.109) agrees with the minus |
| c-omega-squared | after "|Ω²|" in R_opt | |Ω²| | |Ω|² |
| c-capture-scaling | after "scales with the AC Stark shift" | scales with the light shift | by (8.130) with the pumping rate |Ω|²γ/δ² |
| c-eq-8-133 | after (8.133)'s `$$` | ℏ|Ω|²/8δ | ℏ|Ω|²/8|δ|, positive with δ < 0 |

Kept without a correction: "deBroglie", "Clebsch-Gordon", "J’", "a few wavelengths ," (space), τ_p beside τ_P (same time), (8.125)'s "= η_S v m" (the sign is carried by δ < 0, as 8.3's convention F = ηmv), "optically pumped much faster than the atomic velocity" (loose, meaning clear), m_s for m_g, "T_D ∼ 10 nm" (the de Broglie wavelength at T_D is meant, and is about 7 nm for Na).

## Lead draft (AI-marked)

> Why atoms cool below the Doppler limit in two beams of crossed linear polarization: on a J = 1/2 → 3/2 transition the polarization gradient gives the two ground sublevels light-shift hills a quarter wavelength apart, and optical pumping that lags the moving atom makes it climb more than it descends; the resulting friction, its capture velocity, and the temperature where it stops.

## Objectives, summary, notes

Empty (the book prints none); `notes` empty: nothing is left out.

## Wanted at chapter level

- Nothing new staged. 8.5's `T_D` row is reused here with its meaning; if 8.5 rewords it, the 8.6 row follows.
- The units of Figure 8.6 (γ, γ/k, ℏkγ) differ from 8.3's γ₁₂ by the radiative factor γ₁₂ = γ/2; the chapter pass may want one convention.
- Chapter pass: Figure 8.6 keeps γ, γ/k, ℏkγ, its caption stating γ₁₂ = γ/2; unifying with 8.3's γ₁₂ would mean refitting the figure for no gain in reading.

## Derivations

- 8.6.1 the lin⊥lin field (8.97)–(8.98) · block, two moves · built as drv-lin-perp-lin-field after the paragraph that introduces it; "since" trimmed
- 8.6.2 the light shifts of the J = 1/2 ground state (8.97)–(8.107) · block (score 3) · built as drv-sisyphus-light-shifts, (8.105)–(8.107) from (8.99)–(8.104), which stay as the facts; the sentence "In the far-detuned regime … is" goes into the start line's reason, "where δ < 0" becomes "Here δ < 0"; c-eq-8-107 moves into the node's note (row and marker removed); links to (8.106)–(8.107) re-pointed
- 8.6.3 the Sisyphus force (8.108)–(8.127) · block (score 7) · built as seven at the book's breaks: drv-sisyphus-reactive-force ((8.109), with the minus sign of (8.108) restored: c-eq-8-108 into the note), drv-population-relaxation ((8.112)–(8.114) from the rate equations (8.110)–(8.111), which stay; the fragments "which describes a relaxation process at rate" and "towards a steady state value" join the sentence before), drv-steady-state-force ((8.115)–(8.116)), drv-population-lag ((8.118)–(8.120) from (8.117), which stays), drv-lag-force ((8.121)–(8.122)), drv-sisyphus-solution (the exact solution (8.123), hidden in "it is possible to solve exactly", the capture velocity (8.124) and the force (8.125)) and drv-sisyphus-friction ((8.126)). (8.127) is one move from (8.126) and stays with its sentence; (8.128)–(8.130) are one move each; links to (8.124)–(8.125) re-pointed
- 8.6.4 the Sisyphus limit (8.131)–(8.135) · score 5 · built as drv-sisyphus-limit ((8.133) from the Einstein relation with |η_S|, (8.127) and the large-detuning (8.132)); c-eq-8-133 moves into the note. (8.131) restates (8.91) and (8.132) is cited from Dalibard and Cohen-Tannoudji (footnote 4): both are fact cards, not built. (8.134)–(8.135) is one move (δp²/2m with δp = ħk) and stays
