# Plan: 2.1 Atomic Transitions

Source: `source.md` (PDF pages 20–30, Eqs. 2.1–2.41, Figures 2.1–2.3, one footnote). checkprose clean. Planned and built in one go (config: Chen approved building without stopping); this plan is left for review after.

## Blocks

The book's opening paragraph is the first block with no heading. 2.1.1 "The Two-Level Atom" spans the whole section, so it heads the first block after the opening, and the bold run-ins are promoted to `<h2>` without numbers (config, book RULES Structure).

| id | `<h2>` | holds |
|---|---|---|
| `opening` | none | the opening paragraph |
| `two-level` | 2.1.1 The Two-Level Atom | Eqs. 2.1–2.11, the dipole and equations-of-motion displays, Figure 2.1 |
| `resonant` | Resonant field δ = 0 | Eqs. 2.12–2.19, `sim-pulse-area` |
| `far-detuned` | Far-detuned field ν ≫ δ ≫ Ω: adiabatic elimination | Eqs. 2.20–2.22, footnote 1, the light shift |
| `dressed` | Dressed States | Eqs. 2.23–2.26, Figure 2.2 |
| `bloch` | The Bloch sphere picture | Eqs. 2.27–2.33, Figure 2.3, the Try It |
| `multistate` | Generalization to Multistate Systems | Eqs. 2.34–2.41, the Floquet basis |

Every numbered display is `<div class="equation" id="eq-2-K">` with `\tag{2.K}`; the two unnumbered displays are `eq-dipole` and `eq-eom`. Citations link to their equation ("(2.10,2.11)" links each number). Footnote 1 is kept with its number: `<sup>` mark after "c₁," and `<p class="footnote" id="footnote-1">` (the build reserves `fn-N`) closing the block.

## Concepts (24, prep-merged)

| concept | introducing span |
|---|---|
| two-level-atom | `two-level-def` ("a two-level system") |
| atomic-transition-frequency | `transition-frequency` ("their energy differency by ħω") |
| slowly-varying-envelope | `envelope` ("the slowly-varying envelope") |
| optical-frequency | `optical-frequency` ("the optical frequency ν ≈ ω") |
| two-level-dipole-operator | `eq-dipole` |
| two-level-hamiltonian | `eq-2-2` |
| two-level-equations-of-motion | `eq-eom` |
| detuning | `detuning` ("δ = ν − ω") |
| rotating-frame | `rotating-frame` ("an appropriate rotating frame") |
| rabi-frequency | `rabi-frequency` ("the Rabi frequency") |
| rotating-wave-approximation | `rwa` ("the rotating wave approximation (RWA)") |
| rabi-oscillations | `rabi-oscillations` (“Rabi oscillations”) |
| atomic-polarization | `polarization` ("the instantaneous polarization of the atom") |
| pulse-area | `pulse-area` ("the total area under the applied field") |
| adiabatic-elimination | `adiabatic-elimination` (“adiabatic elimination”) |
| ac-stark-shift | `light-shift` ("the AC Stark shift or the “light shift”") |
| rotating-frame-hamiltonian | `eq-2-23` |
| bare-states | `bare-states` ("the bare atomic states") |
| dressed-states | `dressed-states` ("the so-called “dressed” atomic states") |
| dressed-state-energies | `eq-2-24` |
| bloch-sphere | `bloch-sphere` ("a vector on the unit sphere") |
| bloch-precession | `precession` ("precession around effective magnetic fields") |
| multilevel-rotating-frame | `multilevel` ("making a unitary transformation") |
| floquet-basis | `floquet` (“Floquet basis”) |

`uses` rows for the Chapter 1 concepts the prose leans on: selection-rules (opening), hamiltonian and dipole-matrix-element (eq-2-2, two-level), schrodinger-equation and probability-amplitude (eq-eom), born-rule (rabi-oscillations), expectation-value (polarization), heisenberg-picture (bloch-invitation), time-evolution-operator (multilevel). Every form gets its `anchor`: `2.1-eq-2-K`, the two unnumbered displays `2.1-eq-dipole` and `2.1-eq-eom`, eq-2-detuning → `detuning`, eq-2-adiabatic → `adiabatic-follow`, eq-2-floquet → `floquet`.

Concept spans: every mention judged in its sentence. "Hamiltonian" naming the operator wears `hamiltonian`; "the effective Hamiltonian" of (2.23) wears `rotating-frame-hamiltonian`; "probability amplitudes" `probability-amplitude`; "populations" of the levels `born-rule`; "dressed"/"dressed states" `dressed-states`; "bare" states `bare-states`; "detuned"/"detuning" `detuning`; "beatnote" `floquet-basis`. Plain: "resonance" (no concept), "simplest atom-field system" ("simple" is 1.1's term for simple quantum systems in its quoted sense only), "frame" where the multistate frame is meant (wears `multilevel-rotating-frame` there), headings.

## Symbols and variables

`ost meanings` run for every symbol. 2.1 rows: omega → atomic-transition-frequency, nu → optical-frequency, E_env → slowly-varying-envelope, delta → detuning, Omega → rabi-frequency, c_tilde_2 → rotating-frame, H_tilde → rotating-frame-hamiltonian, epsilon_pm → dressed-state-energies, S_tilde → bloch-sphere (these clear the checker's nine errors for 2.1); c_1, c_2 → probability-amplitude; p_1, p_2 → born-rule; mu (dipole); tau (time); Omega_vec (coupling); Delta (frequency); Omega_k (coupling); omega_k, nu_k (frequency); reuse of t, psi, H, E_field (Chapter 1 meanings), r (the electron's position operator) and k (wavevector, the field's wavevector).

New book symbols, staged in `ch02/book-rows.json` through `ost add … symbols --chapter 2`: `epsilon_p` (\kepsp, ϵ₊) and `epsilon_m` (\kepsm, ϵ₋), since Eqs. 2.25–2.26 and both figures name the two energies apart; each a 2.1 row → dressed-state-energies.

Macros only where the glyph is the book's: \hat{d} (the book's, unbold) stays ink beside \kd's bold d̂; bold **r** of Eq. 2.1 stays ink (\kr is r̂, used in d̂ = e r̂); the spin operators Ŝ_{x,y,z} and S̃_{x,y} are pseudo-spin components, in ink; the vector S̃ is \kStilde (state).

## Referents

The levels of the two-level scheme and its dressed states (COLOR.md: the levels of a scheme are referents). One group, since the figures share them. Marked in prose where the text names the state (inline maths wrapped), never inside display equations.

| id | label | figures |
|---|---|---|
| lvl-1 | the ground state \|1⟩ | fig-level-scheme, sim-pulse-area, sim-dressed, sim-bloch |
| lvl-2 | the excited state \|2⟩ (\|2̃⟩ in the rotating frame) | fig-level-scheme, sim-pulse-area, sim-dressed, sim-bloch |
| dressed-plus | the dressed state \|+⟩ | sim-dressed |
| dressed-minus | the dressed state \|−⟩ | sim-dressed |

## Figures

Units: the book gives no numbers, so the sims measure Ω and δ in μs⁻¹ (rad/μs) and time in μs, with Figure 2.2b's own frame (±5 on the detuning axis at |Ω| = 1) as the default.

- fig-level-scheme · Figure 2.1 · two-level-atom, atomic-transition-frequency, optical-frequency, detuning · standardisation only (the book's scheme in house style, its levels in their referent colours shared with the other figures) · arrows: symbolic (the field ν, the dashed ω and the detuning −δ are notation) · still: nothing varies in the picture; detuning as a variable is Figure 2.2's · no controls · headline none (the caption carries it) · graph none · 2D (book RULES: level diagrams are 2D). Faithful copy, kind `figure`.
- sim-dressed · Figure 2.2 (both panels in one drawing: (b) the graph, (a) the rotating-frame levels beside it at the cursor) · rotating-frame, rotating-frame-hamiltonian, bare-states, dressed-states, dressed-state-energies, ac-stark-shift · variation by slider: the reader moves along the detuning axis and sees the dressed levels repel by the avoided crossing, the gap 2|Ω| at resonance, and what each dressed state is made of (its mixture of |1⟩ and |2̃⟩ as a split bar) at every δ, which the book's two static panels leave to Eqs. 2.25–2.26; Ω controls the gap and Ω = 0 collapses the dressed curves onto the bare ones · arrows: symbolic (the gap bracket) · still: δ and Ω are parameters, not a clock · sliders δ (frequency, −5 to 5 μs⁻¹, default −2, the book's red-detuned panel (a); special 0, resonance) and |Ω| (coupling, 0 to 2 μs⁻¹, default 1; special 0, the bare states) · headline states the live splitting and which bare state each dressed state mostly is · graph beside: graph left (ϵ/ℏ, −6 to 6 μs⁻¹, against δ, −5 to 5 μs⁻¹, fixed), the rotating-frame level panel right sharing its energy axis · 2D. Labels: |+⟩, |−⟩ on the dressed curves at the left edge; the bare lines are named once, on their dashes in the level panel (on the graph they hug the dressed curves far from resonance and meet the cursor at the right edge, so labels there collide); the panel names its four levels; the gap bracket carries its value; hover names on the cursor points and the panel's bars (each bar's mixture in per cent).
- sim-bloch · Figure 2.3 (all three panels are states of it: (a) a state vector on the sphere, (b) Ω = 0 with the superposition start, precession about z at δ, (c) δ = 0, precession about an axis in the x–y plane) · bloch-sphere, bloch-precession, rabi-oscillations, dressed-state-energies · 3D visualisation, animation and variation: the state vector turns about the drive vector Ω = (−2Re Ω, −2Im Ω*, −δ) and the reader sees the cone it sweeps tilt as δ grows, with the p₂(t) strip beneath showing the same motion as Rabi flopping at the generalised rate √(4|Ω|²+δ²) with reduced contrast 4|Ω|²/(4|Ω|²+δ²), which no static panel can show · arrows: kinematic (the state vector S̃ moves; its traced path), symbolic (the drive vector, fixed under the clock, moved only by the sliders; axes) · moving: the state precesses and the p₂ point runs along the strip; transport · sliders |Ω| (coupling, 0 to 2 μs⁻¹, default 1; special 0, free evolution) and δ (frequency, −4 to 4 μs⁻¹, default 0, the book's panel (c); special 0, resonance); choice start (|1⟩ · (|1⟩+|2̃⟩)/√2), since panel (b)'s free precession needs a state off the pole · headline names the live precession rate and the largest p₂ · graph below: p₂ against t, 0 to 10 μs, 0 to 1, fixed · 3D, mathematical class: orbit free (no ground), no spin or zoom button (the precession already turns the scene and nothing is fine; the wheel still zooms), no snap view. Labels: axes x, y, z, the poles |2̃⟩ and |1⟩ in their referent colours, Ω on the drive vector (fixed while it plays); the moving S̃ is not labelled (rule 26.7) and carries a hover name and a legend line in the strip. Readout: Eq. 2.33 with the live drive vector; note: the precession rate is the dressed splitting (ϵ₋ − ϵ₊)/ℏ.
- sim-pulse-area · Sim · pulse-area, rabi-oscillations · variation and animation: three pulse shapes of one area (square, Gaussian, two separated humps) drive the resonant atom, and the reader watches the area fill under |Ω(t)| while p₂ climbs, pauses or swings, and lands on the same sin²(∫|Ω|dt) whatever the shape, which is Eqs. 2.18–2.19's claim and which neither the constant-drive Bloch figure nor the text shows · arrows: none · moving: the pulse plays through in time; transport · slider area ∫|Ω|dt (phase, 0 to 1.5π; specials π/4 (equal superposition), π/2 (the whole population in |2̃⟩, the book's t = π/2Ω), π (back in |1⟩)); choice shape (square · Gaussian · two pulses) · headline gives the area so far and p₂ · graph alone, two stacked strips on one time axis (|Ω(t)| with its filled area; p₂(t) beneath), 0 to 4 μs · 2D.

`draws`: fig-level-scheme `frequency`; sim-dressed `frequency`, `coupling`, `energy`; sim-bloch `state`, `coupling`, `frequency`, `population`, `time`; sim-pulse-area `coupling`, `phase`, `population`, `time`. No facts or conventions: the generic two-level atom has no element.

### Book faults the figures do not copy (call for Chen)

Figure 2.2b labels the upper branch "dressed state |+⟩" and the lower "|−⟩", while Eq. (2.24) makes ϵ₊ = ℏ(−δ/2 − √((δ/2)²+|Ω|²)) the lower energy, and Eqs. (2.25)–(2.26) and the resonant |±⟩ = (|1̃⟩ ± |2̃⟩)/√2 agree with it (the symmetric state has energy −ℏ|Ω|). The sim follows the equations: |+⟩ is the lower branch. The original image keeps its labels and its caption. Alternative: follow the figure and swap the readout's signs, which would contradict three equations.

### Extra sims (root 15), not built

- Adiabatic elimination: c̃₂(t) in the complex plane for a far-detuned field, the exact amplitude circling fast about −(Ω/δ)c₁ while c₁'s phase winds at the light shift |Ω|²/δ, slider δ/Ω. It opens the view of Eq. (2.21)'s two terms, but the dressed figure already shows the light shift and the Bloch figure the small fast cone at large δ, so it is offered, not built.
- Two fields on one transition: p₂(t) under Ω_a and Ω_b with a beatnote Δ, its Fourier comb of Floquet sidebands beside it (Eqs. 2.40–2.41). A view the text gives only in words.

## Exercises

- `ex-bloch-eom` · inline Try It (config), kind `exercise`, Bloom Apply, placed after `bloch-vector` (the paragraph that completes the book's sentence and defines Ω, so the card does not split the sentence at its display), cite `bloch-invitation`. Prompt: the book's invitation. Answer `open`, `generated_by: source`, solution Eq. (2.33) with the book's definitions of S̃ and Ω. Concepts: bloch-precession, heisenberg-picture.
- MIT Problem Set 7, Problem 3 (dressed states), five end exercises `hw7-3a`…`hw7-3e`, kind `problem`, `origin: mit-8422`, `source_number` "Problem Set 7, Problem 3(a)"…, `source_id` "hw7.3a"…, Bloom Apply. Prompts restated in Lukin's notation: MIT's Ω₁ is 2Ω, ω₀ is ω, ω_L is ν, δ_L = ω_L − ω₀ is δ, |g⟩, |e⟩ are |1⟩, |2⟩, and MIT's effective Ω = √(Ω₁² + δ_L²) is renamed Ω′ = √(4Ω² + δ²) so it does not collide with Lukin's Ω; part (a) carries the problem's opening, parts (b)–(e) repeat its Hamiltonian in one line so each card stands alone. Every part is a derivation, so each has an AI-marked solution stating the answer and the reasoning in Lukin's symbols (root 13), linked to Eqs. (2.23)–(2.26); none is numerical, so none is held. Concepts: (a) rotating-frame, two-level-equations-of-motion; (b) rotating-frame-hamiltonian, detuning; (c) rotating-frame-hamiltonian, rabi-frequency; (d) dressed-states, dressed-state-energies; (e) dressed-states, rabi-oscillations.

## Lead draft (AI-marked)

> The simplest atom-field system, two atomic levels driven by a nearly resonant classical field: the rotating frame and the rotating wave approximation, Rabi oscillations and pulse area, adiabatic elimination and the light shift, dressed states, the Bloch sphere, and how the treatment extends to atoms with many levels and fields.

## Objectives, summary, notes

`objectives` and `summary_html` empty (the book prints neither). `notes` empty: nothing is left out.

## Book faults kept verbatim

- Eq. (2.2): a stray period inside the bracket, "e^{iνt}.)".
- Eq. (2.37): an unmatched closing parenthesis, "|ψ̃⟩)".
- Eqs. (2.36), (2.38): dU/dt printed without the hat on U.
- Eqs. (2.25), (2.26): the energies printed without the factor ℏ that (2.24) carries; the dressed sim's readout writes ϵ±/ℏ.
- "After substituting the expression for c₂ into Eq. (2.10), we find ċ₁ = …": the result follows from (2.11), the c₁ equation. The words stay "Eq. (2.10)"; the link goes to Eq. (2.11). The dot spans c₁ as printed.
- Figure 2.2b's |±⟩ labels (above).
- "their energy differency", "varies with time, In this case", "in terms of dressed state picture", "Schroedinger". MIT's "anzatz" is kept in hw7-3a's prompt as MIT prints it.

## Corrections

Chen's ruling (2026-10-11): the book's words stay as printed; each correction gets a numbered marker at the spot and a note at the section's end once the app feature lands. No markup or field is written for them yet.

| # | attaches to | the book prints | meant | note |
|---|---|---|---|---|
| 1 | `eq-2-2` | a period inside the closing bracket, "ℰ*e^{iνt}.)" | no period: "(ℰe^{−iνt} + ℰ*e^{iνt})" | The period inside the bracket of Eq. (2.2) is a misprint; the field factor is (ℰe^{−iνt} + ℰ*e^{iνt}). |
| 2 | `adiabatic-follow` (the citation "Eq. (2.10)") | "substituting the expression for c₂ into Eq. (2.10)" | Eq. (2.11) | The equation for ċ₁ is Eq. (2.11): substituting c̃₂ = −(Ω/δ)c₁ into ċ₁ = iΩ*c̃₂ gives ċ₁ = −i(|Ω|²/δ)c₁. |
| 3 | `eq-2-25`, `eq-2-26` | ϵ₋ = |Ω|²/δ and ϵ₊ = −δ − |Ω|²/δ, without ℏ | ϵ₋ = ℏ|Ω|²/δ and ϵ₊ = −ℏδ − ℏ|Ω|²/δ | Eq. (2.24) carries the factor ℏ, so the far-detuned energies are ϵ₋ ≈ ℏ|Ω|²/δ and ϵ₊ ≈ −ℏδ − ℏ|Ω|²/δ; as printed they are the energies divided by ℏ. |
| 4 | `eq-2-36`, `eq-2-38` | dU/dt, without the hat | dÛ/dt | U in dU/dt is the operator Û of Eq. (2.35). |
| 5 | `eq-2-37` | "i\hbar\frac{d}{dt}|ψ̃⟩) = H̃|ψ̃⟩" with an unmatched parenthesis | iℏ (d/dt)|ψ̃⟩ = H̃|ψ̃⟩ | The closing parenthesis after |ψ̃⟩ in Eq. (2.37) has no opening partner and is a misprint. |
| 6 | `sim-dressed` (Figure 2.2b's original image) | the upper branch labelled "dressed state |+⟩", the lower "|−⟩" | upper |−⟩, lower |+⟩ | By Eq. (2.24) ϵ₊ = ℏ(−δ/2 − √((δ/2)² + |Ω|²)) is the lower energy, as Eqs. (2.25)–(2.26) and the resonant |+⟩ = (|1̃⟩ + |2̃⟩)/√2 with energy −ℏ|Ω| confirm; the figure's labels are swapped. |

## Wanted at chapter level

- Footnote markup: the app has no footnote style; 2.1 writes `<sup>1</sup>` and a closing `<p class="footnote" id="footnote-1">` (the build reserves `fn-N`). The chapter pass may want one convention for the book (2.2 and 2.3 may meet footnotes too).
- The unit μs⁻¹ for Ω and δ is the sims' own choice (the book has no numbers); 2.2 and 2.3 may want the same.

Chapter pass (2026-10-11): footnote 1 is a `book` row with its marker; the six corrections are `correction` rows, Figure 2.2b's marked at the figure head; captions state μs⁻¹ and μs.

## Derivations

- 2.1.1 equations of motion in the rotating frame and RWA, (2.2)–(2.11) · score 2 · built as two derivations at the book's own break: drv-rotating-frame-equations (the projections onto ⟨2| and ⟨1|, then (2.6) and (2.7) with (2.5)) replacing the unnumbered pair and (2.6)–(2.7); drv-rwa-equations ((2.10), (2.11)) replacing them; (2.4), (2.5), (2.8), (2.9) stay in the text as the facts the work cites
- 2.1.1 resonant field, Rabi oscillations and pulse area, (2.12)–(2.19) · score 3 · built as two derivations, as the book prints them on either side of the polarization paragraph: drv-rabi-oscillations ((2.12)–(2.14)) and drv-pulse-area ((2.16)–(2.19), the not-chirped condition a fact)
- 2.1.1 far-detuned field and the AC Stark shift, (2.20)–(2.22) · score 2 · built as drv-far-detuned-excitation ((2.20)–(2.21), equations first, replaced) and drv-ac-stark-shift (prose first: the paragraph kept, the host in place of (2.22)); the motivating estimate does not feed the shift, so they are two derivations
- 2.1.1 dressed states, (2.24)–(2.26) · score 5 · built as drv-dressed-states: eigenenergies (2.24), the eigenvector ratio, the resonant states, the far-detuned energies and states; prose first, so the host stands after "are also close to the bare energies and eigenstates" and the printed results stay; the missing ħ of (2.25)–(2.26) is in the node's note as in c-eq-2-25
- 2.1.1 Bloch equation (2.33) · score 7 · not built: "it is a useful exercise to show", set for the reader (the Try It at bloch-vector)
- 2.1.1 multistate rotating frame, (2.36)–(2.39) · score 3 · built as drv-multilevel-rotating-frame; the prose's "the second term is just Σħν_k|k̃⟩⟨k̃|" has the wrong sign (it is −Σħν_k, as (2.39) carries) and is now a node note; c-eq-2-36 and c-eq-2-37 move into the first node's note
- Links: the citations of (2.10) and (2.11) in the text and in footnote 1 now open drv-rwa-equations.
