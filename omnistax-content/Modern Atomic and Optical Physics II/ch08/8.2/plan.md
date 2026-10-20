# Plan: 8.2 Semiclassical description

Source: `source.md` (PDF pages 136–140, Eqs. 8.9–8.27, footnote 1 holding Eqs. 8.11–8.13, no figures). Planned and built in one go (config: no stops); this plan is left for review after.

## Blocks

8.2 has no numbered subsection (config Headers): an opening block, then the two run-in headings as `<h2>` without numbers.

| id | `<h2>` | holds |
|---|---|---|
| `opening` | none | the force in the Heisenberg picture, Eqs. 8.9–8.10, footnote 1 (8.11–8.13), 8.14–8.18, the validity paragraph and 8.19 |
| `dipole` | Large detuning: the dipole force | 8.20, the unnumbered sign display `eq-detuning-sign`, the classical argument, dipole traps and lattices, 8.21, `sim-dipole-potential` |
| `dissipative` | Plane waves: the dissipative force | 8.22–8.27, orders of magnitude, chirp and Zeeman slowing |

Every numbered display is `<div class="equation" id="eq-8-K">` with `\tag{8.K}`; Eqs. 8.11–8.13 stand inside footnote 1's `html` as `div.equation`, the 4.1 and 7.4 precedent. Footnote 1 is a `book` row with its marker after "the effective force", where the book sets it. "previous lectures" (page 140) stays unlinked (config). Eq. (8.24) is cited in the last paragraph but one and links to it.

## Concepts (9, prep-merged)

| concept | introducing span |
|---|---|
| light-force-operator | `force-operator` ("gives the effective force") |
| semiclassical-light-force | `semiclassical` ("a semiclassical approach") |
| semiclassical-force-validity | `validity` ("This semiclassical force description is then valid in the regime") |
| dipole-force | `dipole-force-name` (“dipole force”) |
| dipole-trap | `dipole-trap` ("The dipole trap") |
| optical-lattice | `optical-lattice` (“optical lattice.”) |
| dissipative-force | `dissipative-force` ("The dissipative force depends on Im(ρ₂₁/Ω)") |
| maximum-dissipative-force | `max-force` ("the maximum attainable dissipative force") |
| atomic-beam-slowing | `beam-slowing` ("In order to slow a beam of atoms…") |

Forms anchored to their equations (`8.2-eq-8-K`); eq-8-13 to its display inside the footnote if the checker resolves it there, else to the marker's paragraph. The inline ℏω_R = (ℏk)²/2m is recoil-frequency's form `eq-8-recoil-frequency`: 8.1 owns the concept, 8.2 states the form (prep), so its anchor is `8.2-recoil-energy`.

`uses` rows: heisenberg-picture, commutator (opening, footnote), moving-atom-hamiltonian, spontaneous-emission, susceptibility, steady-state-coherence, dephasing-rate, detuning, recoil-frequency, heisenberg-uncertainty-principle (validity), ac-stark-shift, dressed-states (dipole), optical-pumping-rate, recoil-shifted-resonance, atomic-recoil, steady-state-population, saturation, spontaneous-emission-rate, zeeman-effect (dissipative).

Concept spans, judged per mention: "dipole force" `dipole-force` every time; "dissipative"/"reactive" naming the two parts of the force in the opening `semiclassical-light-force` (its terms), "the dissipative force" in its own block `dissipative-force`; "AC Stark shift(s)" `ac-stark-shift`; "dressed state picture"/"dressed state potential" `dressed-states`; "detuned", "detuning", "red-detuned", "blue-detuned" `detuning`; "susceptibility" `susceptibility`; "Doppler-shifted"/"Doppler shifted" `recoil-shifted-resonance`; "momentum kick ℏk", "recoil velocity" `atomic-recoil`; "optical pumping rate" `optical-pumping-rate`; "saturates" `saturation`; "chirped" `atomic-beam-slowing`; "Zeeman shift" `zeeman-effect`. Plain: "force" in its general sense after the first, "conservative", "ground state", "resonance", "standing wave", "plane wave", "laser cooling" (8.3's concept is Doppler cooling, not named here), "two-photon processes", "Bose Einstein condensates" (no concept yet).

## Symbols and variables

Glyphs kept as the book prints them: F̂ (hat) in 8.9–8.10, plain F in 8.14–8.20, bold 𝐅 in 8.23–8.27; plain v and k in "δ − kv", bold 𝐤 in ℏ𝐤. New book symbols, staged through `ost add … symbols --chapter 8`: `F_mag` (F, \kFmag) and `v_mag` (v, \kvmag), since the chapter's prose writes both plain (8.3 and 8.6 use plain F too). F̂ is the book's existing `F` (\kF, F̂, angular momentum in 1.3) with an 8.2 row typed force by its concept, `redefines`.

8.2 rows (`ost meanings` run for each): F → light-force-operator (redefines); F_mag → semiclassical-light-force; F_force → dissipative-force; V_eff → dipole-force; Omega → rabi-frequency (reuse 2.1's meaning); phi (phase, the laser's phase, Ω = |Ω|e^{iφ}; 8.1's row if it lands first, else `redefines`); p (momentum, the atom's centre-of-mass momentum operator); H → moving-atom-hamiltonian; r (length, the atom's position operator); rho_12, rho_21, rho_22, gamma_12, R_opt, chi, t, lambda, k, k_mag, m (reuse earlier meanings, m redefined as the atom's mass); gamma → spontaneous-emission-rate; delta → detuning; omega_R → recoil-frequency; v_mag (velocity of the atom along the beam). The R_opt macro is italic where (8.23) prints it upright: one symbol, one colour; the glyph difference is the book's typesetting.

Plain symbols left in ink: ψ(r) and Ô of the footnote (any state and operator), ρ (the density operator inside a trace), d and E of the classical argument, r(t), p(0), Δr, Δp of the validity estimate (classical numbers, not the operators the macros print).

## Referents

None: the text names no level or field apart outside the display equations, and the figure draws one beam at a time.

## Figures

The book prints no figure in 8.2. Units: the book gives none, so frequencies are in units of γ₁₂ (the far-detuned regime needs |δ| ≫ γ₁₂) and position in units of λ.

- sim-dipole-potential · Sim · dipole-force, dipole-trap, optical-lattice, ac-stark-shift · variation by choice and slider: the reader picks a focused beam or a standing wave and the sign of δ, and sees the intensity |Ω(x)|² above turn into the potential V_eff = ℏ|Ω(x)|²/δ below, wells at the intensity maxima for δ < 0 and hills there for δ > 0, the atoms sitting at the maxima or minima and, in the lattice, λ/2 apart; the slider pair shows that the depth goes as |Ω|²/δ while the scattering at the atoms goes as |Ω|²/δ², the text's "without introducing a lot of spontaneous emission", which the text gives only in words · arrows: symbolic (force arrows F = −∇V_eff on the slopes) · still: δ and Ω are parameters, nothing has a clock; a choice morphs the curve (hills bend into wells) and the atoms fade to their new places · choices beam (focused beam · standing wave) and detuning (red δ < 0 · blue δ > 0); sliders |δ| (frequency, 10 to 100 γ₁₂, default 20) and |Ω₀| (coupling, 0 to 4 γ₁₂, default 3; special 0, no light) · headline names where the atoms gather and the well or hill depth · scene: intensity strip above, potential graph below on the same x axis (x −2λ to 2λ, V_eff/ℏ −2 to 2 γ₁₂, fixed from the slider extremes: the deepest is 4²/10 = 1.6) · 2D (book RULES: potentials are 2D curves). Labels: "|Ω(x)|²" on the strip, the λ/2 bracket in the lattice, one F on a force arrow; the atoms (up to nine, sitting on a moving curve) carry hover names only (rule 26.7). Force arrows keep one length scale per light (150 px at the trap's steepest slope at the slider maxima, 62 px in the lattice, whose slopes are λ/4 apart). Readout: V_eff/ℏ = |Ω₀|²/δ at the intensity maximum with the live numbers; note: the scattering rate R_opt = 2γ₁₂|Ω|²/(γ₁₂² + δ²) at the atoms (Eq. 8.23 at v = 0), which drops to zero where blue-detuned atoms sit in the dark.

`draws`: `coupling`, `energy`, `force`, `frequency`, `rate`, `length`. No facts or conventions: the generic atom is ink and the laser has no stated wavelength (COLOR.md).

### Extra sims (root 15), not built

- Saturation of the dissipative force: F/ℏk against |Ω|/γ at a chosen δ − kv, the weak-field Lorentzian (8.23) growing as |Ω|² beside the saturated (8.26) bending onto ℏkγ/2, with ρ₂₂ as a bar stopping at ½. The text states the limit in a line; the curve shows where (8.23) stops holding.
- Kicks in a plane wave: one atom absorbing from the beam and emitting at random, its momentum stepping by ℏk forward per absorption and scattering sideways per emission, the mean drifting at ℏkγρ₂₂ (8.24). Overlaps 8.4's random-walk candidate.

## Exercises

No inline invitation (book RULES: only 1.3.1 and 2.1.1 have one). Four MIT 8.422 problems, one card per part, kind `problem`, `origin: mit-8422`, `place: end`, prompts restated in Lukin's notation with every change in `changes`, AI solutions stating answer and reasoning in Lukin's symbols (root 13).

- hw8-1a…d · Problem Set 8, Problem 1(a)–(d), classical model of the light force. Changes: MIT's laser ω is ν and its ω₀ is ω (δ = ν − ω as in Lukin); the dipole p is d along the unit vector n̂ and its quadrature v is w (Lukin's p is momentum, v velocity); the damping coefficient γ is β, so MIT's Γ = γ/m is β/m, which is Lukin's γ; MIT's Rabi frequency ω_R in (7) is 2Ω; the phase θ is kept (the field cos(θ + νt) makes θ = −φ against Lukin's Ω ∝ e^{iφ}); a missing parenthesis of (2) supplied; the oscillator strength f_fi written f₂₁. Concepts: (a) semiclassical-light-force; (b) dipole-force, dissipative-force; (c) semiclassical-light-force, atomic-polarization; (d) semiclassical-light-force, rabi-frequency.
- hw10-3a…c · Problem Set 10, Problem 3(a)–(c), optical dipole trap energetics. Changes: MIT's frequency w is ν, the polarizability α(w) is α_pol(ν) (Lukin's α is the absorption coefficient), the reservoir thickness d is ℓ; the footnote is a parenthesis; Figures 1–2 described in words. Concepts: (a) dipole-trap, far-detuned-refraction; (b) dipole-trap, far-detuned-refraction; (c) dipole-force, ac-stark-shift.
- hw9-1a…c · Problem Set 9, Problem 1(a)–(c), Zeeman slower. Changes: MIT's ω₀ is ω and the laser's ω is ν, so δ ≡ ν − ω; the scattering rate Γ_s is R_sc; 𝒟 is D. The sodium data stay in the prompt; numbers held. Concepts: (a) maximum-dissipative-force; (b) atomic-beam-slowing, recoil-shifted-resonance, zeeman-effect; (c) dissipative-force, atomic-recoil, spontaneous-emission.
- hw9-2a…b · Problem Set 9, Problem 2(a)–(b), slowing with off-resonant light. Changes: the problem's opening and Problem 1's sodium data repeated so each card stands alone; I = 5I_sat given also as the saturation parameter s = 2R_opt/γ = 5. Numbers held. Concepts: maximum-dissipative-force, recoil-shifted-resonance, saturation-parameter.

## Lead draft (AI-marked)

> The light force on an atom treated as a classical particle, and its two parts: the dipole force of far-detuned light, behind dipole traps and optical lattices, and the dissipative force of a plane wave, how large it can grow, and what it takes to slow an atomic beam.

## Objectives, summary, notes

`objectives` and `summary_html` empty (book prints neither). `notes` empty.

## Corrections

| id | attaches to | the book prints | meant |
|---|---|---|---|
| c-gamma-alkali | "γ ∼ 10⁶ Hz" (page 140) | γ ∼ 10⁶ Hz for alkali atoms | γ ≈ 3–6 × 10⁷ s⁻¹ (γ/2π ≈ 5–10 MHz); with it 10⁴ scatterings at γ/2 take about half a millisecond, with 10⁶ s⁻¹ they would take 20 ms |

Checked and not corrected: "∇|Ω²| = 0" (|Ω²| = |Ω|², so the book is right as printed; prep had it as a slip); "a few centimeters per second" (true of Li and Na, the book says "typically"); R_opt upright then italic (typesetting); the footnote's numbers before 8.14 (book order). Every equation 8.9–8.27 was rederived; the signs and factors hold.

## Book faults kept verbatim

"miniscule", "focussing", "Bose Einstein", "far-off resonance beam".

## Wanted at chapter level

- New book symbols `F_mag` (plain F) and `v_mag` (plain v) staged by 8.2: 8.3 and 8.6 write plain F and v and may reuse them; if another section staged its own plain F, the chapter pass keeps one.
- `F` (F̂) carries an 8.2 row typed force (light-force-operator, `redefines`); 8.5's F̂ (if the force operator) can reuse it.
- `eq-8-recoil-frequency` anchored to `8.2-recoil-energy` (the book's definition of ω_R stands in 8.2).
- 8.1's rows for p, H, phi, Omega, m: 8.2 words its own to match where 8.1's had landed by the end of the build; the chapter pass reconciles any difference.
- Chapter pass: `F_force` (bold F, 8.2's dissipative force) is kept, being the book's bold glyph; F̂ stays `F`; plain F stays `F_mag`.

## Derivations

- The light force (8.9)–(8.18) · block (score 1) · built as two at the book's break: drv-light-force-operator (footnote 1's identity (8.11)–(8.13), then (8.10) from (8.9)), hosted after (8.9), which stays as the definition; the derivation carries footnote 1 whole, so footnote-1 and its marker are removed. drv-semiclassical-light-force ((8.14), then (8.16)–(8.18)) after the paragraph on the reactive and dissipative parts; (8.15) and "the indices are counterintuitive but correct" become a fact card and its reason
- Validity of the semiclassical force (8.19) · score 3 · not built: the argument is printed in the prose line by line; the one skipped move (Δp(0) ≳ ħk from Δr(0) ≪ λ) leaves a run of one, under the bar, and the window is an order-of-magnitude reading
- The dissipative force (8.22)–(8.27) · block (score 5) · built as three at the book's breaks: drv-dissipative-force ((8.22) from the weak-field ratio, (8.23) from (8.18)), drv-scattering-force ((8.24), the "bit of algebra": γρ₂₂ = 2|Ω|² Im(ρ₂₁/Ω) from the steady state of (3.86), with Chapter 3's Ω of the opposite sign), and drv-maximum-dissipative-force ((8.26) from (8.25), (8.27)); the "where R_opt" clause becomes "Here R_opt …", (8.25) stays as the stated fact, and the link to (8.24) is re-pointed
