# Plan: 2.3 Quantized electromagnetic fields

Source: `source.md` (PDF pages 33–42, four numbered subsections, Eqs. 2.55–2.100, no figures, footnotes 3 and 4). Planned and built in one go (Chen approved the chapter without stopping); this plan is left for review after.

## Blocks

The book's opening paragraph is the first block with no heading (root 21.3). The four numbered subsections are the `<h2>` blocks under the book's titles (config); 2.3 prints no run-in headings.

| id | `<h2>` | holds |
|---|---|---|
| `opening` | none | the opening paragraph |
| `quantization` | 2.3.1 Quantization | Eqs. 2.55–2.73, footnote 3 at the block's end |
| `atom-field-block` | 2.3.2 Atomic interactions with the quantized field | Eqs. 2.74–2.77, the four-term list |
| `remarks` | 2.3.3 Remarks about quantization | prose only; hw5.1 cites it |
| `wigner-weisskopf-block` | 2.3.4 Wigner-Weisskopf theory of spontaneous emission | Eqs. 2.78–2.100, footnote 4 at the block's end, `sim-photon-wavepacket` after the last paragraph |

Every display is `<div class="equation" id="eq-2-K">` with `\tag{2.K}`; Eq. (2.79) is one aligned display under one tag, Eqs. (2.62)–(2.63) and the other two-line pairs are two divs as the book numbers them. The citations "Eq. (2.81)" and "Eq. (2.85)" link to `eq-2-81`, `eq-2-85`; "Eq. (2.99)" inside footnote 4 links to `eq-2-99`. No misnumbered citation. The four-term list of 2.3.2 is a `<ul>` (the book sets it as a two-column display). Footnotes follow 2.2: `<sup>3</sup>` after "excitations", `<sup>4</sup>` after "identify", and each note as `<p><small><sup>N</sup>…</small></p>` closing its block.

## Concepts (16, staged by prep)

| concept | introducing span |
|---|---|
| spontaneous-emission | `spontaneous` ("Such spontaneous emission processes") |
| cavity-modes | `eigenmodes` ("The eigenmodes of such a system are running waves") |
| field-mode-expansion | `mode-expansion` ("An arbitrary excitation may be expanded in terms of these spatial modes") |
| field-hamiltonian | `field-energy` ("The quantum mechanical Hamiltonian corresponds to the classical energy within the cavity") |
| field-quadratures | `quadratures` (the paragraph identifying q_j and q̇_j with non-commuting operators) |
| creation-annihilation-operators | `ladder-operators` ("creation and annihilation operators for excitations of each mode") |
| quantized-electric-field | `field-operator` ("an electric field … may be expanded in terms of running-wave excitations") |
| single-photon-field | `one-photon-field` ("ℰ̄_j is the electric field associated with a single photon") |
| atom-field-interaction | `atom-field` ("we replace E by the corresponding operator") |
| single-photon-rabi-frequency | `single-photon-rabi` (“single-photon Rabi frequency”) |
| transverse-fields-and-gauge | `transverse` ("we implicitly treated only transverse fields") |
| wigner-weisskopf | `ww-continuum` ("the effective Hamiltonian corresponds precisely to a bound-to-continuum transition") |
| lamb-shift | `lamb` ("it is known as the Lamb shift") |
| spontaneous-emission-rate | `decay-rate` ("The atom decays from the excited state |2⟩ at a rate γ"), its terms worn again at Eq. (2.89) |
| dipole-decay | `dipole-decays` ("the atomic dipole moment decays in time") |
| emitted-photon-wavepacket | `photon-wavepacket` ("the physical photon wavepacket this state describes") |

Form anchors (`ost set … forms`): every `eq-2-K` form of these concepts → `2.3-eq-2-K`.

`uses` rows: two-level-atom (`spontaneous`, `atom-field`), commutator (`quadratures`), dipole-interaction (`atom-field`), rotating-wave-approximation and rabi-frequency (`rwa-terms`, the paragraph tying the RWA to energy conservation), dipole-matrix-element (`coupling`), bound-continuum-transition (`ww-continuum`), continuum-decay-rate (`decay-rate`), continuum-stark-shift (`lamb`), rotating-frame (`no-rotating-frame`), rabi-oscillations and expectation-value (`dipole-decays`), outgoing-wavepacket (`photon-wavepacket`).

Concept spans, judged in their sentences. "spontaneous emission", "spontaneously relaxes", "spontaneously emit" → `spontaneous-emission`. "eigenmodes", "running waves", "spatial modes", "running wave modes", "mode and polarization j" → `cavity-modes`; the other mode sets the book names in passing (sinusoidal, Hermite-Gaussian, standing waves of a cavity) and "vacuum modes" stay plain. "Hamiltonian" wears the concept of the Hamiltonian it names: the field's (`field-hamiltonian`), the atom-field one and its four terms (`atom-field-interaction`), the projected and effective one (`wigner-weisskopf`), "dipole Hamiltonian" and "dipole interaction Hamiltonian" (`dipole-interaction`), "canonical Hamiltonian" (`transverse-fields-and-gauge`). "creation and annihilation operators", "annihilation operator" → their concept; "positive and negative frequency components", "positive frequency component", "electric field operator" → `quantized-electric-field`; "single-photon/single photon Rabi frequency", "coupling constant(s)" → `single-photon-rabi-frequency`; "transverse fields", "longitudinal fields", "gauge", "canonical momentum" → `transverse-fields-and-gauge`; "RWA" → `rotating-wave-approximation`; "rotating frame" → `rotating-frame`; "bound to continuum transition", "continuum of states" → `bound-continuum-transition`; "Lamb shift", "a shift in the energy levels" → `lamb-shift`; "spontaneous emission rate", "Einstein A coefficient", "decays … at a rate γ" → `spontaneous-emission-rate`; "atomic dipole moment μ" → `dipole-matrix-element`; "the atomic dipole moment decays" → `dipole-decay`; "classical Rabi oscillations" → `rabi-oscillations`; "photon wavepacket", "first order coherence", "wavepacket outgoing" → `emitted-photon-wavepacket`; "two-level atom" → `two-level-atom`; "atomic transition frequency ω" → `atomic-transition-frequency`. Plain: "harmonic oscillator", "wave equation", "vector potential", "density of states", "photon", "vacuum state", "atomic coherences", "cavity quantum electrodynamics".

## Symbols and variables

`ost meanings` run for every symbol: Chapter 2 has no variables rows yet (2.1 and 2.2 build in parallel; 2.2's plan lists its rows). Symbol changes, staged in `ch02/book-rows.json` and merged (2.3 owns these):

- `q_j` and `p_j` set as `q` and `p`, so one macro serves the classical coordinate q_j of Eqs. (2.58)–(2.63) and the operator q̂_j (`\hat{\kqj}_j`), and p̂_{j′} of Eq. (2.65) keeps the book's prime.
- `E_bar` set as `\bar{\mathcal{E}}`, so ℰ̄_j and ℰ̄_k of Eq. (2.99) are both `\kEbar` with their subscript.
- New `E_hat` (`\hat{E}`, `\kEhat`) and `E_plus` (`\hat{\mathcal{E}}`, `\kEplus`), the field operator and its positive frequency part, both naming `quantized-electric-field`, which takes `E_hat` as its symbol (COLOR.md lists Ê and Ê⁺ under electric-field). The book's \hat{E_α} of Eq. (2.70), the hat over E_α whole, is kept as printed and so stays in ink.

Rows for 2.3 (anchor in brackets):

| sym | concept / type | meaning |
|---|---|---|
| q_j | field-quadratures | the coordinate of mode j, a harmonic-oscillator position (`mode-expansion`) |
| p_j | field-quadratures | the momentum conjugate to q̂_j (eq-2-64) |
| E_bar | single-photon-field | (eq-2-71) |
| E_hat | quantized-electric-field | the electric field operator (eq-2-70) |
| E_plus | quantized-electric-field | its positive frequency component (eq-2-72) |
| V_af | atom-field-interaction | (eq-2-74) |
| g | single-photon-rabi-frequency | (eq-2-77) |
| gamma | spontaneous-emission-rate | the spontaneous emission rate (`decay-rate`); 2.2's γ is continuum-decay-rate, so `redefines` |
| nu | type frequency, no concept, `redefines` | the frequency ν_j of field mode j, or ν of the classical field it replaces (eq-2-58) |
| nu_k | type frequency | the frequency of photon mode k (`ww-states`) |
| k | type wavevector | the wavevector of mode j (eq-2-57 block, `eigenmodes`) |
| V | type volume | the volume of the quantization cavity (`eigenmodes`) |
| omega | atomic-transition-frequency | 2.1's meaning (eq-2-78) |
| mu | type dipole | the dipole matrix element of the transition (`coupling`) |
| Omega | rabi-frequency | 2.1's meaning (`rwa-terms`) |
| c_1, c_2 | probability-amplitude | the amplitudes of \|1, 0⟩ and \|2, 0⟩ (`dipole-decays`, eq-2-90) |
| psi, H, t | 1.2's meanings | |
| E_field, B | 1.3's types | the free field of Eqs. (2.55)–(2.56) |
| m, p | 1.3's types | the particle's mass and momentum (`canonical`) |

Ink: the one-photon amplitudes c_{k,α} and c_j (the c_k macro would drop the α), ℏ, ε₀, μ₀, c, the scalar k_j and k (only the bold **k** is the symbol), **r**, E_x, B_y, A_j and 𝒜_j, the unhatted H of Eqs. (2.62)–(2.63) (no hat in the book), d̂ (the book's is not bold, 1.3's symbol is), ε_α, Θ, the operators â_j, â_j†, σ (none is an observable of a type).

## Referents

None. The Sim draws one unnamed atom (ink, book RULES) and its photon; the text's |1⟩, |2⟩ are drawn by no figure here, so they stay unmarked.

## Figures

The book draws nothing in 2.3. One Sim passes root 24's gate:

- sim-photon-wavepacket · Sim · emitted-photon-wavepacket, spontaneous-emission-rate, wigner-weisskopf · flow by animation (the photon leaving the atom at c while the excited population drains, which the text gives in its closing sentence and Eq. (2.100) only) and variation by slider (Eq. (2.89): ω and |μ| set γ, and with it the length c/γ of the packet's tail; the reader sees a doubled ω shorten it eightfold) · arrows: kinematic (the wavepacket's front moving out at c), so the floor is the moving tier · moving: t runs 0 to 100 ns in 5 s and holds 1.2 s; the clock is the idea's · sliders ω (frequency, 2.0–4.7 × 10¹⁵ s⁻¹, default 3.20 × 10¹⁵ s⁻¹, the 589 nm line) and |μ| (dipole, 1–4 e a₀, default 2.5 e a₀); the book gives no numbers, so the defaults are an optical transition whose γ (6.2 × 10⁷ s⁻¹, a lifetime of 16 ns) lets several lifetimes run in the window · headline: the front's distance ct and the tail's length c/γ at the live t ("At t = 64 ns the front is 19.3 m out; behind it the intensity falls by 1/e every c/γ = 4.8 m") · graph beside the atom: at z = 0 the atom and a bar of |c₂|² (population), then z|⟨0|ℰ̂_α|ψ⟩| against z, 0–30 m, relative 0–1, the envelope e^{−γ(t−z/c)/2}Θ(t − z/c) filled under its curve, the front dashed at z = ct · 2D (a relation along one line). Readout: Eq. (2.89) with the live numbers; note: |c₂|² = e^{−γt} with the live numbers and the share 1 − |c₂|² the photon has carried off. The 1/z of Eq. (2.100) is taken out (the plotted quantity is z times the amplitude), which the axis title says; the optical carrier, 10⁷ times finer than the axis, is not drawn. Labels: "atom", "|c₂|²" on the bar, "z = ct" on the front (three); the bar and the front have hover names. `draws`: frequency, dipole, rate, population, electric-field, length, time.

### Extra sims (root 15), not built

- Mode counting: the allowed k_j of Eq. (2.57) as ticks on a line for a box length L on a slider, with the resonant shell δ(ν_k − ω) as a band; as L grows the ticks crowd into the continuum the sum of Eq. (2.80) becomes, with V/(2π)³ per unit k-volume.
- Emission pattern: the sin²θ of Eq. (2.84) as a surface about the dipole μ (3D, mathematical), the two transverse polarizations drawn on a chosen k̂; the reader sees why no light leaves along μ and where the 8π/3 of Eq. (2.87) comes from.
- Vacuum Rabi oscillation: one mode resonant with the atom at coupling g, |c₂|² flopping at 2g, against the continuum's monotonic e^{−γt}; the contrast of 2.3.2's "emit and reabsorb" with 2.3.4.

## Exercises

MIT problems (config), each part a card, `kind: problem`, `origin: mit-8422`, `place: end`, restated in Lukin's notation, every solution AI-marked (`generated_by: ai`); MIT publishes no key, and no part asks for a number, so none is held.

- Problem Set 5, Problem 1 (Rayleigh and Thomson scattering), after 2.3.3 (cite `canonical`): `hw5-1a` T_fi in leading order with −d̂·Ê and with −(q/m)p̂·Â + (q²/2m)Â²; `hw5-1b` σ₀ = 8πr₀²/3. MIT's photon frequency ω is ν here, its −**d**·**E** is −d̂·Ê; the fields are written per mode as Eq. (2.73) writes them. Concepts: atom-field-interaction, transverse-fields-and-gauge, dipole-interaction, quantized-electric-field (a); fermi-golden-rule, quantized-electric-field, spontaneous-emission-rate (b, whose polarization sum and angular integral are those of Eqs. 2.82–2.87).
- Problem Set 7, Problem 2 (one atom and one photon), at 2.3.4 (cite `ww-continuum`): parts a to f. MIT's cavity frequency ω, atomic ω₀, coupling Ω₁, |e⟩, |g⟩ and Γ are ν, ω, 2g, |2⟩, |1⟩ and γ here, the basis |0g⟩, |0e⟩, |1g⟩ is |1, 0⟩, |2, 0⟩, |1, 1⟩ (atom, photons) as Eq. (2.79) writes it, δ = ν − ω is MIT's δ = ω − ω₀, and MIT's generalized Rabi frequency Ω is Ω′ = √(4g² + δ²) (Ω is 2.1's Rabi frequency). Concepts: atom-field-interaction, single-photon-rabi-frequency, rabi-oscillations, time-evolution-operator (a); single-photon-rabi-frequency, spontaneous-emission, born-rule (b); dipole-decay, spontaneous-emission (c); spontaneous-emission-rate, dipole-decay, wigner-weisskopf (d); bloch-sphere, dipole-decay (e); memoryless-continuum, wigner-weisskopf (f).

## Lead draft (AI-marked)

> The electromagnetic field quantized as a set of harmonic oscillators, one per mode, and a two-level atom coupled to it: the field of a single photon, the single-photon Rabi frequency and the energy-conserving terms of the interaction, then the Wigner-Weisskopf theory of spontaneous emission, its rate, the decay of the atomic dipole and the wavepacket of the emitted photon.

## Objectives, summary, notes

`objectives` and `summary_html` empty (book prints neither). `notes` empty: nothing is left out.

## Book faults kept verbatim

- Eq. (2.55) prints ∂²t in the denominator for ∂t².
- Eq. (2.58) prints ν_i² under the root for ν_j² (the form row has ν_j).
- Eq. (2.70) sets the hat over E_α whole.
- 2.3.3's ∇²φ = 4πρ is Gaussian (sign and units) in a section declared S.I.; ρ there is a charge density, in ink (no type). Its canonical momentum p̂ − qÂ/c is Gaussian too.
- Eq. (2.81) prints (2π)² for (2π)³; Eq. (2.84) prints sin θ² for sin²θ; Eq. (2.83) puts the period inside the parenthesis.
- "the atom interaction with the vacuum modes", ”Atom-Photon Interactions” opening with a closing quotation mark, the period closing Eq. (2.77) before "and".
- No figure readout restates a misprinted equation: the Sim writes only Eq. (2.89) and e^{−γt}, both right as printed.

## Corrections

Each keeps the book's words as printed; the marker and the note wait for the app feature (Chen, 2026-10-11).

1. `eq-2-55` · prints ∂²E/∂²t · means ∂²E/∂t². Note: The second derivative is with respect to time twice, ∂²E/∂t²; the denominator ∂²t is a slip.
2. `eq-2-58` · prints ν_i² under the root · means ν_j². Note: The factor A_j is √(ν_j²/ε₀V), with the mode index j of the sum; ν_i is a slip.
3. `transverse` (2.3.3, the longitudinal-field relation) · prints ∇²φ = 4πρ · means ∇²φ = −ρ/ε₀ in the S.I. units the section declares. Note: ∇²φ = 4πρ is Gaussian and also drops the sign of Poisson's equation, ∇²φ = −4πρ; in S.I. units it reads ∇²φ = −ρ/ε₀, with ρ the charge density.
4. `canonical` (2.3.3) · prints the canonical momentum p̂ − qÂ/c · means p̂ − qÂ in S.I. units. Note: The factor 1/c on the vector potential belongs to Gaussian units; in the S.I. units of this section the canonical momentum is p̂ − qÂ.
5. `eq-2-81` · prints V/(2π)² · means V/(2π)³. Note: Each allowed wavevector occupies a volume (2π)³/V of k-space, so the sum over k becomes V/(2π)³ ∫d³k; with (2π)³, Eqs. (2.88) and (2.89) follow as printed.
6. `eq-2-84` · prints sin θ² · means sin²θ. Note: The two transverse polarizations together carry |μ|²sin²θ, the square of the sine of the angle between k and μ, as Eq. (2.83) gives.

## Wanted at chapter level

- The γ row: 2.2's names continuum-decay-rate, 2.3's spontaneous-emission-rate with `redefines`; the chapter pass may prefer one meaning that covers both.
- If 2.1's rows for ω, ν, ν_k, μ, Ω, c₁, c₂ word their meanings differently, align 2.3's to them; 2.3's ν is the mode frequency (`redefines`).

Chapter pass (2026-10-11): footnotes 3 and 4 and all six corrections are `footnotes` rows; γ keeps spontaneous-emission-rate with `redefines`, its meaning naming the vacuum modes as the continuum; ω, Ω, μ read as 2.1's; ν_k and c₂ are `redefines`; the caption states the optical scale.

## Derivations

- 2.3.1 quantized field, (2.55)–(2.73) · score 5 · built in part as drv-field-hamiltonian-ladder: [â, â†] = 1 from (2.65)–(2.67), then (2.68) to (2.69); not built: (2.62)→(2.63), the volume integral of the mode functions, which the notes never state; (2.71) and (2.73), each one substitution of A_j into (2.70)
- 2.3.2 atom–field coupling, (2.74)–(2.77) · score 1 · built as drv-atom-field-coupling, host after the coupling-constant sentence in place of (2.77); (2.76)'s missing parentheses in the node note
- 2.3.4 Wigner–Weisskopf rate, (2.78)–(2.89) · score 5 · built as drv-spontaneous-emission-rate from (2.51) of 2.2 (the join) to (2.89); (2.78)–(2.79) stay as the model. The existing correction c-eq-2-81 was wrong: (2.81)'s V/(2π)² is right, the 2π of (2.80) times V/(2π)³; the footnote is deleted and the derivation follows the book's line. c-eq-2-84 moves into a node note. The "Finally" sentence becomes "This is the usual expression…" after the host.
- 2.3.4 decay of the atomic dipole, (2.90)–(2.95) · score 2 · built as drv-dipole-decay ((2.93)–(2.94) only); (2.90)–(2.91) are stated, (2.92) and (2.95) restate 2.2's (2.54): not built. Correction found: (2.93)–(2.94) put μ and μ* the other way round from d̂ of (2.75) and ⟨d̂⟩ of (2.15); node note
- 2.3.4 single-photon wavepacket, (2.96)–(2.100) · score 7 · not built: the step to (2.100) is a contour integral the notes only sketch in footnote 4 and refer to Scully and Zubairy for; (2.97)–(2.98) is one insertion of a complete set
