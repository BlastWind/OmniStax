# Plan: 8.4 Dissipation and quantum noise: the Heisenberg-Langevin approach

Source: `source.md` (PDF pages 146–154, Eqs. 8.34–8.78, no figures, no footnotes, two numbered subsections with run-in headings). Planned and built in one go (config: no stops); this plan is left for review after.

## Blocks

8.4 opens with a block before its first subsection, then 8.4.1 and 8.4.2 as numbered `<h2>`s with their run-ins as `<h3>` (config Headers).

| id | heading | holds |
|---|---|---|
| `opening` | none | the paragraph motivating Brownian motion |
| `brownian` | `<h2>` 8.4.1 Brownian motion | the heavy particle in its bath; `<h3>` The Langevin equation (8.34–8.47), The Einstein relation (8.48), Random walks (8.49); `sim-brownian` at the end of the block |
| `heisenberg-langevin` | `<h2>` 8.4.2 The Heisenberg-Langevin approach | 8.50–8.63; `<h3>` The quantum Langevin operator: f̂(t) (8.64–8.67), The Heisenberg-Langevin equation (8.68–8.69), Comparison to the Master Equation (8.70), The quantum fluctuation-dissipation theorem (8.71–8.78) |

Every numbered display is `<div class="equation" id="eq-8-K">` with `\tag{8.K}`; the book prints (8.41)–(8.44), (8.51)–(8.52), (8.59)–(8.60) and (8.64)–(8.66) as runs of one display each line, and they stay one `div.equation` per number. The prose cites Eq. (8.57) and Eq. (8.73); both link to their equations and both are right.

## Concepts (12, prep-merged)

| concept | introducing span |
|---|---|
| langevin-equation | `langevin-equation-name` ("described mathematically by the Langevin equation … “Langevin force”") |
| diffusion-coefficient | `diffusion-coefficient-name` ("in terms of a diffusion coefficient D") |
| langevin-momentum-spread | `eq-8-44` |
| einstein-relation | `einstein-relation-name` (“Einstein relation”) |
| random-walk | `random-walk-name` ("This so-called “random walk” problem") |
| naive-operator-damping | `eq-8-52` |
| system-reservoir-operator-equation | `eq-8-57` |
| reservoir-operator-solution | `eq-8-61` |
| quantum-langevin-force | `quantum-langevin-force-name` ("This so-called “quantum Langevin force,”") |
| heisenberg-langevin-equation | `heisenberg-langevin-equation-name` ("a general result known as the Heisenberg-Langevin equation") |
| heisenberg-langevin-master-equation | `master-equivalence` ("The two descriptions, however, are entirely equivalent.") |
| generalized-einstein-relation | `generalized-einstein-relation` ("This “generalized Einstein relation” …") |

Form anchors (`ost set … forms`): every eq-8-K form of the twelve concepts → `8.4-eq-8-K`.

`uses` rows: friction-coefficient (`langevin-equation`), heisenberg-picture (`eq-8-50`), optical-bloch-equations and commutator (`naive-damping`), system-reservoir-hamiltonian (`eq-8-53`), single-photon-rabi-frequency (`eq-8-55`), rabi-frequency (`coherent-field`), wigner-weisskopf and born-markov-approximation (`markov`), spontaneous-emission-rate (`markov`), mean-thermal-photon-number (`eq-8-65`), master-equation (`eq-8-70`), markovian-environment (`einstein-analogue`), semiclassical-light-force and light-force-operator (`hl-opening`), doppler-cooling (`hl-opening`); `reinforces`: einstein-relation (`einstein-analogue`), langevin-equation (`quantum-langevin-force`), diffusion-coefficient (`generalized-einstein`).

Concept spans, judged per mention. Wrapped: "Brownian motion" (langevin-equation, its term) each time it names the problem; "Langevin equation", "Langevin force", "the classical Langevin force" (langevin-equation); "friction coefficient", "viscous drag" where it is the −ηp term (friction-coefficient); "diffusion coefficient", "diffusion constant", "diffusion term" (diffusion-coefficient); "mean square momentum" (langevin-momentum-spread); "Einstein relation" (einstein-relation), "generalized Einstein relation", "quantum fluctuation-dissipation theorem", "fluctuation-dissipation theorem", "white noise" (generalized-einstein-relation); "random walk" (random-walk); "Heisenberg equations of motion" (heisenberg-picture); "density matrix equations" (optical-bloch-equations, the two-level equations meant); "Wigner-Weisskopf theory" (wigner-weisskopf); "Markov approximation" (born-markov-approximation); "quantum Langevin force", "quantum Langevin operator", "Langevin noise operator" (quantum-langevin-force); "Heisenberg-Langevin equation(s)", "Heisenberg-Langevin approach" in the title-like opening of 8.4.2 (heisenberg-langevin-equation); "master equation" (master-equation); "Markovian" (markovian-environment); every "reservoir" naming the environment (open-system); "decoherence terms", "decoherence parameters" (dephasing-rate); "two-level atom"; "modes" of the radiation field (cavity-modes); "rotating frame of reference" (rotating-frame, the same transformation applied to the modes); "decay rate" of (8.68) (spontaneous-emission-rate, the γ it names); "density matrix approach" (density-matrix); "the noise force" (quantum-langevin-force); "no memory" (memoryless-continuum); "Doppler cooling" (doppler-cooling); "semiclassical analysis" (semiclassical-light-force). Plain: "random fluctuations", "thermal equilibrium", "kinetic energy" (no concept), "dissipation", "fluctuations", "noise" in their general sense, "decay", "dephasing terms", "vacuum state", "laser cooling" (the general method, not 8.3's Doppler cooling), "temperature", "second order correlation function" (the force's g(t − t′), not 9.3's g⁽²⁾), "rapid", "simple".

## Symbols and variables

`ost meanings` run for each. No new book symbol.

| sym | concept | type | meaning |
|---|---|---|---|
| p_cm | none | momentum | redefines: the momentum p of the heavy particle |
| eta | friction-coefficient | (friction) | redefines: the friction coefficient of the heavy particle's viscous drag −ηp |
| f_t | langevin-equation | (force) | redefines: the Langevin force f(t), the random force of the light particles' collisions |
| D_diff | diffusion-coefficient | (diffusion) | the diffusion coefficient, the strength of the Langevin force's correlations; D_μν its generalization |
| t | none | time | Time |
| m | none | mass | redefines: the mass of the heavy particle |
| T | none | temperature | The temperature (3.1's wording) |
| F | light-force-operator | (force) | 8.2's meaning |
| H | none | energy | redefines: the total Hamiltonian of system and reservoir (3.3's wording) |
| H_S, H_R, H_SR, S_hat | 3.3's | | 3.3's meanings |
| g | single-photon-rabi-frequency | (coupling) | 3.3's meaning, written g_j |
| nu | none | frequency | 3.3's meaning, ν_j of mode j |
| omega | atomic-transition-frequency | (frequency) | 2.1's meaning |
| gamma | spontaneous-emission-rate | (rate) | 2.3's meaning |
| Omega | rabi-frequency | (coupling) | "The Rabi frequency Ω = ℰμ/ℏ" (8.3's row) |
| f_hat | quantum-langevin-force | untyped | the quantum Langevin force |
| F_noise | generalized-einstein-relation | untyped | the quantum Langevin operator 𝓕̂_μ of the compact form |

In ink: g(t − t′), k_B, E_kinetic (energy with no concept or symbol), σ̂_αβ, R̂, Â, â_j, d̂_μ, n(ω) (the book writes n, not n̄), the misprinted F̂_μ of (8.74).

## Referents

None: no example names particular things that a figure and the text both point at. The Sim's traced realization is named by its hover and caption only.

## Figures

The book draws none in 8.4. Its 8.4.1 introduces five concepts about one stochastic process the text derives only in algebra, and root 14 gives them a figure; it passes rule 24's gate twice: the reader would otherwise have to imagine motion (many noisy momenta in time) and variation (how drag and diffusion set the spread, and what happens as η → 0).

- sim-brownian · Sim · langevin-equation, diffusion-coefficient, langevin-momentum-spread, einstein-relation, random-walk · animation and variation by slider: sixty heavy particles, all starting at p(0), are kicked by the same model force; the reader watches their momenta fan out while the mean slides to zero as p(0)e^{−ηt}, untouched by the kicks (8.40), and the mean square relax to D/η (8.44), the equilibrium the Einstein relation (8.48) turns into a temperature; dragging η to 0 the fan never stops widening and the mean square grows as 2Dt, the random walk (8.49, corrected) · arrows: none (the momenta are curves on a graph; nothing is a notation arrow) · moving: model time 0 to 100 μs plays in about 5 s, the traces drawn as they happen; transport · sliders η (friction, 0 to 0.2 μs⁻¹, default 0.05; special 0, the random walk the text names), D (diffusion, 1 to 10 (ℏk)²/μs, default 5), p(0) (momentum, −40 to 40 ℏk, default 20) · headline: the live η, with the relaxation time 1/2η and where the mean square settles, or at η = 0 that it grows without limit · graph alone: two stacked graphs on one time axis, p(t) of every particle with the mean dashed above, the mean square below with the ensemble's own average in ink over (8.44) and the level D/η dashed · 2D (a relation between quantities in time). Units: the book gives none; momentum in ℏk and time in μs, the scales of an atom in laser light that 8.5 applies the result to. Axes fixed: t 0–100 μs; p −60…60 ℏk (the default band ±2√(D/η) = ±20 well inside; η → 0 traces leave it and are clipped); p̄² 0–1000 (ℏk)², set from the default state (400 relaxing to 100) rather than the extremes: p(0) = ±40 starts above it and the default random walk leaves it at 60 μs, the current point going through `pinned()` with the readout's number. Labels: axis titles, p̄ on the mean's right end, D/η on the level's; individual traces, the traced one and the moving points are not labelled (they move) and carry hover names. Readout: (8.44) with the live numbers, the two terms rounded and added as shown; at η = 0 the limit p̄² = p(0)² + 2Dt. Note: the equilibrium D/η = mk_BT, the Einstein relation, with its number (dropped at η = 0, where the headline says it). Draws `momentum`, `friction`, `diffusion`, `time`, `mass`, `temperature`.

The quantum half (8.4.2) introduces seven results that are operator identities: no slider varies them and no motion is hidden in them beyond what 3.4's master-equation figures already draw, so the gate gives them no figure.

### Extra sims (root 15), not built

- Noise keeps the commutator: an atom's coherence operator under the naive damping (8.52), whose ⟨[σ̂₂₁, σ̂₁₂]⟩ shrinks as e^{−2γ₁₂t}, beside the Heisenberg-Langevin evolution with f̂, which holds it fixed; slider γ. It shows the one claim of 8.4.2 a reader cannot see in the algebra, but it is a plot of two curves, one flat, so offered, not built.
- Thermal noise in the quantum Langevin force: the normal- and antinormal-ordered moments n(ω)γ and (n(ω)+1)γ of (8.66)–(8.67) against the reservoir temperature, the vacuum's 1 standing when n → 0.

## Exercises

None: the section prints no invitation and no MIT 8.422 problem maps to it (config). `exercises`, `exercise_concepts` empty, `exercise_notes` empty.

## Corrections

Every equation 8.34–8.78 was rederived; the signs and factors hold except where listed.

| id | attaches to | the book prints | meant |
|---|---|---|---|
| c-eq-8-45 | `eq-8-45` | "For very short times ηt ≪ 1, the square momentum simply decays exponentially", p̄² ≈ p(0)²e^{−2ηt} | For ηt ≪ 1, (8.44) gives p̄² ≈ p(0)²(1 − 2ηt) + 2Dt: the square momentum falls only when the particle starts above equilibrium, p(0)² > D/η; a particle starting at rest gains p̄² = 2Dt |
| c-eq-8-49 | `eq-8-49` | p̄² = Dt | With η → 0, (8.44) gives p̄² = p(0)² + 2Dt; from rest, 2Dt, by (8.36) with g → δ |
| c-eq-8-52 | `eq-8-52` | −γ_αβ[σ̂_βα, σ̂_αβ] | Each term of (8.51) contributes, so the commutator decays at −(γ_αβ + γ_βα) = −2γ_αβ for a coherence |
| c-eq-8-74 | `eq-8-74` | F̂_μ(t′) in the last term | 𝓕̂_μ(t′), the quantum Langevin operator of (8.71); F̂ is the force operator |

Checked and not corrected: "unlike the average velocity" (the average velocity is p̄/m, so the statement holds of it as of the momentum); (8.41)'s ⟨⟩ around an overlined average (two notations for one average); (8.55)–(8.56)'s â_i, g_i defined and summed over j (a dummy index); σ_ij without its hat after (8.70), d without hats in (8.77) (typesetting); "not correlated with 𝓕̂_μ(t)" after (8.74) (true for any index, by causality); "quantum ”white noise”" (the book's quotation mark, kept).

## Book faults kept verbatim

"Schrodinger picture", "the reservoir was initially", the closing quotation mark opening ”white noise”.

## Objectives, summary, notes

Objectives and summary empty (config). `notes` empty: nothing is left out.

## Lead draft (AI-marked)

> How dissipation brings noise with it: the classical Langevin description of Brownian motion, with its friction, diffusion and the Einstein relation, and its quantum counterpart, the Heisenberg-Langevin equations, in which a reservoir adds a quantum Langevin force to every decay.

## Wanted at chapter level

- 8.3 rows `eta` → friction-coefficient; 8.4's own `eta` row is worded for the Brownian drag with `redefines`, and the chapter pass may prefer one wording.
- 8.5 reuses `D_diff` and `F_noise`; their 8.4 meanings are the general ones.
- Chapter pass: `eta` keeps two wordings, 8.4's `redefines`: the Brownian drag −ηp and the laser friction ηmv_z differ in sign convention. `D_diff`, `F_noise` keep 8.4's general meanings; the Sim's ℏk now written with `\kkmag`.

## Derivations

- 8.4.1 Brownian motion and the Einstein relation (8.34)–(8.48) · block (score 3) · built as four at the book's breaks: drv-langevin-solution ((8.39) by integrating (8.34), (8.40)), drv-mean-square-momentum ((8.41)–(8.44)), drv-long-time-momentum ((8.46)–(8.47)) and drv-einstein-relation ((8.48)); "so the average momentum" opens its sentence, "In this long-time limit, the kinetic energy" goes into the work. (8.45) and the random walk (8.49) are one move each and stay with c-eq-8-45 and c-eq-8-49
- 8.4.2 the naive dephasing (8.51)–(8.52) · block, three moves · built as drv-naive-commutator-decay; c-eq-8-52 moves into the node's note (row and marker removed)
- 8.4.2 the Heisenberg-Langevin equation (8.53)–(8.69) · block (score 4) · built as five at the book's breaks: drv-system-operator-equation ((8.57) from (8.50), (8.53)–(8.54), and the example (8.58)), drv-reservoir-operator ((8.60), the formal integration, (8.61)), drv-markov-decay ((8.62), with 2.2's integral and (2.80)), drv-quantum-langevin-moments ((8.64)–(8.66) and the "similar calculation" (8.67)) and drv-heisenberg-langevin-equation ((8.68)–(8.69)). (8.50), (8.53)–(8.56) and (8.63) stay as the definitions the work cites; the two sentences around (8.58) join into one; the link to (8.57) is re-pointed. (8.70) is three moves ("taking the expectation value") and stays
- 8.4.2 the quantum fluctuation-dissipation theorem (8.73)–(8.78) · proof · built as drv-fluctuation-dissipation-theorem, (8.75), (8.76) (the "similar calculation") and (8.78); the book's argument on the three terms becomes the facts and reasons of the (8.75) node; c-eq-8-74 moves into its note (row and marker removed); (8.71)–(8.73) stay
