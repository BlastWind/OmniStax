# Plan: 7.3 Adiabatic processes in multi-level systems

Source: `source.md` (PDF pages 119–124, Eqs. 7.24–7.38, Figures 7.2–7.4, no footnotes, no exercises). Planned and built in one go (Chen approved building without stopping); left for review after.

## Blocks

| id | `<h2>` | holds |
|---|---|---|
| `opening` | none | the opening paragraph, Eqs. 7.24–7.32, the dark-state paragraph |
| `stirap-sec` | 7.3.1 Stimulated Raman adiabatic passage (STIRAP) | Eqs. 7.33–7.34, the STIRAP paragraph, `sim-stirap` (Figure 7.2), `sim-stirap-scans` (Figure 7.3) |
| `four-level` | 7.3.2 Four-level systems | Eqs. 7.35–7.38, `sim-four-level` (Figure 7.4), the three closing paragraphs |

Every display is `div.equation` `eq-7-K` with `\tag{7.K}`. The prose cites no equation or figure by number.

## Concepts (4, prep-merged)

| concept | introducing span |
|---|---|
| three-level-dressed-states | `dressed3` ("This Hamiltonian is diagonalized by the eigenbasis of dressed states") |
| stirap | `stirap` ("If we change the two fields … without ever populating the excited state") |
| four-level-dark-states | `dark4` ("has two degenerate dark states spanned by") |
| adiabatic-atomic-beamsplitter | `beamsplitter` ("construct a beamsplitter for atoms") |

`uses`: three-level-configurations, adiabatic-theorem, dark-state, electromagnetically-induced-transparency, lambda-detunings, rabi-frequency, hamiltonian, bare-states (`opening`); spontaneous-emission (`dark-par`); instantaneous-eigenstates, mixing-angle, probability-amplitude, superposition (`stirap-sec`); dark-state-preparation (`counter`); bright-state, nonadiabatic-coupling (`four-level`). Forms 7.24–7.38 get anchors `7.3-eq-7-K`.

Spans judged per mention. Wrapped: "adiabatic"/"adiabatically follow"/"adiabatic following"/"adiabatically transferred" (adiabatic-theorem); "three-level systems" in the opening (three-level-configurations); "dark state(s)" naming the zero-energy state (dark-state; the 7.3.2 pair four-level-dark-states); "EIT"; "two-photon detuning" (lambda-detunings); "Rabi frequencies"; "Hamiltonian"; "bare state basis"/"bare states"; "dressed states"/"dressed energies" (three-level-dressed-states); "spontaneous emission"; "instantaneous eigenstate"; "mixing angle"; "probability amplitudes"; "superposition"; “counterintuitive”, "STIRAP", "adiabatic transfer techniques" (stirap); "bright states"; "nonadiabatic coupling"; "beamsplitter for atoms". Plain: "excited state" (a `data-ref` instead), "metastable", "decay channels", "momentum kicks", "Hilbert spaces", headings.

## Symbols and variables (chapter 7, section 7.3)

`ost meanings` run for each. New book symbols (staged, merged): `Omega_3`, `Omega_4`, `epsilon_0`. Rows: H → hamiltonian (7.1's meaning); Delta → lambda-detunings, redefines (the single-photon detuning from |3⟩); delta → lambda-detunings (5.1's two-photon detuning); Delta_1, Delta_2 → lambda-detunings, ref pump / stokes (the figures' pump and Stokes detunings); Omega_1 → rabi-frequency, ref pump; Omega_2 → rabi-frequency, ref stokes; Omega → rabi-frequency, redefines (√(|Ω₁|² + |Ω₂|²)); Omega_3, Omega_4 → rabi-frequency; theta → mixing-angle, redefines (tan θ = Ω₁/Ω₂, and its four-level form); phi (phase, no concept: the second mixing angle); epsilon_p, epsilon_m, epsilon_0 → dressed-state-energies (energy); t, tau (7.1's meaning), psi (7.1's), A_area → pulse-area (the figures). In ink: c₃, c₄ of 7.3.2, γ₁₃ and P₁, P₂, P₃ in the figures.

## Referents

Two groups, never in one block. The Λ scheme of the opening and 7.3.1: `lvl-1` (|1⟩), `lvl-2` (|2⟩), `lvl-3` (the excited |3⟩), `pump` (Ω₁, P), `stokes` (Ω₂, S), `dark` (|Φ₀⟩); figures `sim-stirap`, `sim-stirap-scans` (pump, stokes, lvl-2). The four-level scheme of 7.3.2: `four-1`, `four-2` (excited), `four-3`, `four-4`; figure `sim-four-level`. Its |2⟩ is the excited state and |3⟩ a metastable one, the reverse of 7.3.1, so they are not the same referents. Ω₁'s subscript wears the pump's colour throughout (its variables row), which in 7.3.2 is again the field on the initially occupied state.

## Corrections (`footnotes`, kind correction)

- `c-eq-7-29`: with the couplings of (7.24), tan 2φ = 2Ω/Δ (the forms (7.25), (7.27) fix the sign); the book prints −Ω/Δ.
- `c-eq-7-30`: ε± = ½(−Δ ± √(Δ² + 4Ω²)) in (7.30) and (7.32); the book prints Ω² under the root. (Checked numerically against the eigenvalues of (7.24).)
- `c-eq-7-38`: tan φ = Ω₄/Ω₃ for (7.35)–(7.36) to be dark; (7.37) holds with it.
- `c-d13`: with Ω₁ = 0 the dark state is |D₃₄⟩, not |D₁₃⟩.
- `c-omega4`: the field turned on next is Ω₁, not Ω₄.
- `c-fig-7-4` (figure `sim-four-level`): the book's Figure 7.4 labels the excited level |4⟩; the text's excited state is |2⟩.
(7.24) carries no ℏ, as (7.30)–(7.32) do not: consistent frequency units, not corrected.

## Figures

Units for the STIRAP figures: the book gives no numbers. Time in τ, the width of each Gaussian pulse Ω_i(t) = Ω₀ e^{−(t − t_i)²/τ²}; frequencies in 1/τ; |3⟩ decays as in Eq. (7.43), ċ₃ = −γ₁₃c₃ + …, with γ₁₃ = 1/τ; the Hamiltonian is (7.24) with the two-photon detuning added as −δ|2⟩⟨2|. Pulse area A = ∫2Ω dt (Eq. 7.20) of each pulse, A = 2√π Ω₀τ.

- sim-stirap · Figure 7.2 · stirap, three-level-dressed-states, mixing-angle · animation and variation: the book's three stills (pulses, θ, P₁ and P₂) run live on one clock, with what 5.2's dark-state Sim lacks: the mixing angle θ(t) turning the dark state |Φ₀⟩ from |1⟩ to −|2⟩ on a dial in the |1⟩, −|2⟩ plane with the atom's point (√P₁, √P₂) following it or falling behind, and the dressed energies ε₊, ε₀, ε₋ against time, so the reader sees the gap that protects the dark state open with the pulse area; A sets adiabaticity, the delay sets the order (a negative delay is the intuitive order, which empties into |3⟩ and decays), δ breaks the dark state, Δ reshapes ε± and leaves the transfer · arrows: kinematic (the atom's point moving on the dial, population flowing between levels shown as curves), symbolic (the dark-state arrow, which is notation for a direction) · moving: t from −4.5τ to 4.5τ, transport · sliders A (phase, π to 20π, default 10π), delay (time, −3τ to 3τ, default 1.2τ, positive = Stokes first; special 0, coincident), δ (frequency, −4 to 4 /τ, default 0; special 0, two-photon resonance), Δ (frequency, 0 to 20 /τ, default 0; special 0, resonance) · headline: θ, P₂ and P₃ at the live t · graph beside a vertical scene: dial left, four strips right on one time axis (Ω₁ Ω₂ 0–18/τ, θ 0–π/2, ε −20–20/τ clipped at the frame, P 0–1) · 2D. Readout: Eq. (7.26) with the live θ; note: tan θ = Ω₁/Ω₂ and the overlap |⟨Φ₀|ψ⟩|². Caption links back to 5.2's Sim.
- sim-stirap-scans · Figure 7.3, recomputed (the book's is experimental data, never copied: no original, no original caption) · stirap · variation by slider: the two scans of the experiment (Bergmann and co-workers) computed from the same model: (a) the final P₂ against the delay, with four small pulse-order glyphs above as the book draws them and the live delay marked; (b) the final P₂ over the pump and Stokes detunings Δ₁, Δ₂, a false-colour map on one scale with its legend, the ridge along δ = Δ₁ − Δ₂ = 0 narrowing away from the centre; A and the delay change both. The still cannot show how the window and the ridge depend on the pulse area · arrows: symbolic (the glyph pointers) · still: parameters, no clock · sliders A (phase, as above), delay (time, as above) · no headline (the readout says it) · graph alone, two panels side by side · 2D. Readout: P₂ at Δ₁ = Δ₂ = 0 for the live delay; note: the transfer along δ = 0 at Δ₁ = 20/τ and the |δ| at which half of it is gone. Map 33 × 33 on release, 17 × 17 while dragging (each cell one integration).
- sim-four-level · Figure 7.4 · four-level-dark-states, adiabatic-atomic-beamsplitter · variation by slider: the book's scheme redrawn with its excited level named |2⟩ as the text does, each field's arrow weighted by its strength, beside the amplitudes of the two dark states |Φ₁⟩ and |Φ₂⟩ on |1⟩, |3⟩, |4⟩ (Eqs. 7.35–7.37, φ as corrected); Ω₁ carries |Φ₁⟩ from |1⟩ into the mixture of |3⟩ and |4⟩ that Ω₃ : Ω₄ fixes, the beamsplitter of the text · arrows: symbolic (the fields) · still · sliders Ω₁, Ω₃, Ω₄ (coupling, 0–3, relative units, defaults 1; specials Ω₁ = 0, and Ω₃ = Ω₄ on each for the even split) · no headline · scene left, bars right · 2D. Readout: Eq. (7.35) with the live numbers; note: tan θ, tan φ = Ω₄/Ω₃ and the end state c₃|3⟩ + c₄|4⟩ at θ = π/2.

`draws`: sim-stirap `coupling`, `phase`, `energy`, `population`, `time`, `frequency`; sim-stirap-scans `population`, `frequency`, `phase`, `time`; sim-four-level `coupling`, `amplitude`, `state`, `phase`. No facts, no conventions (generic atoms).

### Extra sims (root 15), not built

- The adiabatic beamsplitter in flight: atoms crossing the three offset beams, each pulsed in its own frame, leaving in |3⟩ or |4⟩ with opposite momentum kicks, so the output ports separate on screen as Ω₄ is turned. The text describes it in one paragraph; 7.4 holds the experiment's Figures 7.5–7.6.

## Notes

`notes`: Figure 7.3's experimental plots are not reproduced; the figure under its number computes the same two scans from the model.

## Wanted at chapter level

- `media/ch07/fig-7-3.png` exists (from prep) though book RULES say Figure 7.3 is never copied into `media/`: delete it (this section does not use it).
- Prep's deferred edges, now that Chapter 5 is merged: `three-level-dressed-states` → `dark-state` (drop `dressed-states`, `multilevel-rotating-frame` if reached), `stirap` → `dark-state-preparation`; whether “counterintuitive” stays a term of `stirap` beside 5.2's “counter-intuitive pulse sequence”.
- The experiment named for Figure 7.3 (Bergmann's group) is from the figure's look; the book cites none. A reviewer may name the paper.

## Derivations

- 7.3 dressed states of the resonant Λ system (7.24)–(7.32) · score 8 · built as drv-lambda-dressed-states: (7.24) rewritten with the bright state of (7.59), the dark state (7.26) with (7.31), the energies (7.30), (7.32) through the two-level matrix of (7.12) and (7.15), then (7.25) with (7.29) and (7.27); (7.28) and the Ω of (7.29) become fact cards after "where". c-eq-7-29 and c-eq-7-30 are the node notes, their rows and markers gone
- 7.3.2 the two dark states of the four-level system (7.35)–(7.38) · score 5 · built as drv-tripod-dark-states (the dark condition, then (7.36) with (7.38), then (7.35) with (7.37)); the Hamiltonian the notes describe without printing is the start line, cited to the text; c-eq-7-38 is the node note, its row and marker gone; c-d13 and c-omega4 stay in the prose
