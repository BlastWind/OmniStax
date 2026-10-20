# Plan: 7.2 Adiabaticity for the two-level system

Source: `source.md` (PDF pages 115–119, Eqs. 7.11–7.23, Figure 7.1, no footnote). Planned and built in one go (config: no stops); this plan is left for review after.

## Blocks

The section opens with an unheaded block (Eqs. 7.11–7.17), then its two numbered subsections; the run-in headings are `<h3>` (config).

| id | heading | holds |
|---|---|---|
| `opening` | none | Eqs. 7.11–7.17, the mixing angle, the time-dependent dressed states |
| `passage` | `<h2>` 7.2.1 Rapid adiabatic passage | the motivation; `<h3>` Adiabatic return; `<h3>` Adiabatic passage; Figure 7.1 at the block's end |
| `adiabaticity` | `<h2>` 7.2.2 Adiabaticity condition for the two-level system | Eqs. 7.18–7.20, “rapid”; `<h3>` Exactly solvable system: the Landau-Zener model, Eqs. 7.21–7.23 |

Figure 7.1 stands on page 118 inside a sentence of the Landau–Zener paragraph, a float. It goes at the end of 7.2.1, after "Adiabatic passage", which it draws and whose "Adiabatic return" paragraph cites it; the sentence that runs over the page break stays whole.

Every numbered display is `<div class="equation" id="eq-7-K">` with `\tag{7.K}`; (7.11) and (7.12) are one display broken over the page and stay two divs as numbered. The wrong citation "(see Fig. (9.3)" links to Figure 7.1 (config), with a correction.

## Concepts (6, prep-merged)

| concept | introducing span |
|---|---|
| time-dependent-dressed-states | `td-dressed` ("a set of time-dependent dressed states and dressed energies") |
| mixing-angle | `mixing-angle` ("the mixing angle") |
| adiabatic-return | `return` (the "Adiabatic return" paragraph) |
| rapid-adiabatic-passage | `rap` ("Adiabatic passage represents an important application…") |
| two-level-adiabaticity-condition | `adiabaticity-2l` ("In the two-level system, the adiabaticity condition requires…") |
| landau-zener | `landau-zener` ("an exactly solvable problem") |

Forms get anchors `7.2-eq-7-K`. `uses`: hamiltonian (eq-7-11), instantaneous-eigenstates (`diagonalize`), dressed-states and dressed-state-energies (`td-dressed`), adiabaticity-condition (eq-7-17), detuning and rabi-frequency (`opening-p`), adiabatic-theorem (`rap`), nonadiabatic-coupling (eq-7-18), pulse-area (eq-7-20), rabi-oscillations (`rap-motivation`), superposition (`return`), bare-states (`opening-p`).

Concept spans, judged per mention: "Adiabatic evolution", "adiabatic limit", "adiabatic theorem", "adiabatically follows" → adiabatic-theorem; "the adiabatic condition" (7.17), "adiabaticity condition", "adiabatic condition" → adiabaticity-condition (7.1's general condition) except the 7.2.2 statement, which introduces the two-level one; "detuning" → detuning; "Rabi frequency" → rabi-frequency; "bare state basis" → bare-states; "Hamiltonian" → hamiltonian; "instantaneous eigenstates", "eigenstates |−⟩ and |+⟩" → instantaneous-eigenstates; "dressed states", "dressed energies" → time-dependent-dressed-states; "Rabi rotation" → rabi-oscillations; "superposition" → superposition; "pulse area" → pulse-area; "coupling terms" → nonadiabatic-coupling; "Adiabatic passage"/“rapid”/"rapid adiabatic passage" → rapid-adiabatic-passage; "adiabatic return" (caption) → adiabatic-return. Plain: "avoided crossing" (no concept), "perturbation theory", "excited state lifetime", "loss from the excited state", "non-adiabatic correction" (a part of the Landau–Zener result, wrapped landau-zener), headings.

## Symbols and variables (chapter 7, section 7.2)

`ost meanings` run for each.

| sym | concept | type | meaning |
|---|---|---|---|
| `H` | hamiltonian | energy | The Hamiltonian of the system (reused) |
| `t` | none | time | Time (reused) |
| `Delta` | detuning | frequency | The time-dependent detuning Δ(t) of the two-level system; the bare state \|2⟩ sits at −ℏΔ (first Δ row of Chapter 7: no `redefines`) |
| `Omega` | rabi-frequency | coupling | The Rabi frequency Ω = ℰμ/ℏ (reused; Ω₀ is written `\kOmega_0`) |
| `theta` | mixing-angle | phase | The mixing angle θ(t) of the instantaneous eigenstates \|±⟩ |
| `epsilon_pm` | dressed-state-energies | energy | The energies of the dressed states \|±⟩ (reused) |
| `epsilon_p`, `epsilon_m` | dressed-state-energies | energy | The energy of the dressed state \|+⟩ / \|−⟩ (reused), `ref` dressed-plus / dressed-minus |
| `A_area` | pulse-area | phase | The pulse area A = ∫2Ω dt |
| `P_LZ` | landau-zener | population | The probability of complete transfer to \|2⟩ in the Landau–Zener model |
| `alpha` | none | ink | The rate α at which the detuning is swept, Δ = αt (first α row of Chapter 7) |
| `tau` | none | time | The timescale on which the Hamiltonian changes (7.1's meaning reused: the interaction time) |
| `P_1`, `P_2` | born-rule | population | The occupation probability of \|1⟩ / \|2⟩, `ref` lvl-1 / lvl-2. New symbols (`\kPone`, `\kPtwo`), staged in `ch07/book-rows.json` and merged, since the caption and the figure write P₁ and P₂ |

The small parameter ϵ of (7.21) is a ratio: plain `\epsilon`, ink.

## Referents

The levels and the dressed states of the two-level system, one group, with 2.1's ids.

| id | label | figures |
|---|---|---|
| lvl-1 | the bare state \|1⟩ | sim-adiabatic |
| lvl-2 | the bare state \|2⟩ | sim-adiabatic |
| dressed-plus | the instantaneous eigenstate \|+⟩ | sim-adiabatic |
| dressed-minus | the instantaneous ground state \|−⟩ | sim-adiabatic |

Kets in prose wrapped `data-ref`; never inside display equations.

## Figures

Units: the book gives no numbers, so Ω and Δ are in μs⁻¹ and τ in μs, as in 2.1. The pulse is Ω(t) = Ω₀e^{−t²/2τ²}; return holds Δ = −2 μs⁻¹ (with Eq. 7.11's signs |1⟩ is the lower state |−⟩ only for Δ < 0); passage sweeps Δ = αt from −6 to 6 μs⁻¹ over t = ±3τ, so α = 2/τ μs⁻². Time is plotted as t/τ, −3 to 3, so the adiabatic curves keep their shape as τ changes and only the true state's curves move.

- sim-adiabatic · Figure 7.1 · time-dependent-dressed-states, adiabatic-return, rapid-adiabatic-passage, two-level-adiabaticity-condition, landau-zener · animation and variation: the state is integrated from Eq. (7.11), and as it runs the reader sees its population ride the curve ϵ₋ as a disc that shrinks onto ϵ₊ when the change is too quick, while P₁ and P₂ of the true state are drawn over the book's adiabatic curves (dashed); dragging τ below 1/Ω₀ turns robust transfer into a Rabi rotation whose end depends on every number, which is the section's argument for passage, and the Landau–Zener value (7.22) stands beside the transfer the pulse gives. Neither panel of the book can show a state failing to follow · arrows: kinematic (the book's red arrow, the state moving along ϵ₋, is the moving discs) · moving: the state runs from t = −3τ to 3τ; transport · choice return · passage (the book's two columns; Δ morphs between the constant and the sweep), sliders Ω₀ (coupling, 0.2 to 4 μs⁻¹, default 3) and τ (time, 0.02 to 4 μs, default 3; special 1/Ω₀, the text's minimum time τ ≈ 1/Ω) · headline: where the state is now and where it ends ("At t = 0.4τ the state is 99 % |−⟩; it ends with P₂ = 1.00.") · graph alone: three stacked strips on one t/τ axis, Δ and Ω (−6 to 6 μs⁻¹), ϵ±/ℏ (−8 to 8 μs⁻¹), P₁ and P₂ (0 to 1); axes fixed from the slider maxima · 2D (book RULES: time plots). Labels: Δ and Ω on their curves, |+⟩ and |−⟩ at the left end of ϵ±, P₁ and P₂ at the right end of the populations panel; the two discs and the cursor points carry hover names; a legend line says solid is the state and dashed is following |−⟩. Readout: return, Eq. (7.20)'s two sides, ∫|θ̇|dt and A = ∫2Ω dt = 2√(2π)Ω₀τ, with the live numbers and a note giving P₁ and P₂ at the end; passage, Eq. (7.22) with Ω₀ and α = 2/τ and a note with ∫|θ̇|dt, A and the P₂ the Gaussian pulse leaves (equal to P_LZ only where Ω stays near Ω₀ through the crossing, which the note's words say).

`draws`: frequency, coupling, energy, population, time, phase. No facts or conventions (the generic two-level atom has no element).

The book's panels are one state each (return and passage at the defaults τ = 3 μs, Ω₀ = 3 μs⁻¹, where the state keeps within a few per cent of the adiabatic curves; the small ripples it shows are its admixture of |+⟩), up to sign: the book draws Δ > 0 for return and ϵ± mirrored in the passage panel; the figure follows Eqs. (7.11)–(7.16). Its passage panel's P₁/P₂ labels are a correction on the figure.

### Extra sims (root 15), not built

- Rapid adiabatic passage on the Bloch sphere: the drive vector (−2Ω, 0, −Δ) swings from the south pole to the north as Δ is chirped, and the state vector tracks it when slow and spirals round it, left behind, when fast; θ shows as half the drive's polar angle. It opens the geometric view of following that Figure 7.1 lacks, but 2.1's Bloch figure and this figure's populations carry the lesson; offered, not built (3D cost, config).

## Exercises

None: the section prints no invitation and no MIT 8.422 problem maps to Chapter 7 (config). `exercise_notes` says so.

## Lead draft (AI-marked)

> A two-level system whose detuning and Rabi frequency change in time: its time-dependent dressed states and mixing angle, adiabatic return and rapid adiabatic passage, the condition under which the system follows its instantaneous ground state, and the exactly solvable Landau-Zener model of a linear sweep through resonance.

## Objectives, summary, notes

`objectives` and `summary_html` empty (the book prints neither). `notes` empty: nothing is left out.

## Corrections (verified)

| id | marker after | the book prints | meant |
|---|---|---|---|
| c-fig-9-3-cited | "(see Fig. (9.3)." | Fig. (9.3), parenthesis left open | Figure 7.1 |
| c-omega-over-delta | "from near −∞ to near ∞" | Ω/Δ runs from −∞ to ∞ | Δ/Ω (Ω/Δ goes from 0 through ±∞ at resonance back to 0) |
| c-eq-7-18 | (7.18) | ⟨+̇\|−⟩ = θ̇ | ⟨+̇\|−⟩ = −θ̇ from (7.13)–(7.14); only the magnitude enters (7.19) |
| c-eq-7-21 | (7.21) | ϵ = θ̇/\|ϵ₊ − ϵ₋\| | ϵ = ℏθ̇/\|ϵ₊ − ϵ₋\|, dimensionless as (7.19) needs |
| c-theta-dot | "ϵ ≈ α/4Ω₀²" | θ̇ ∼ α/2Ω₀, ϵ ≈ α/4Ω₀² | at resonance θ̇ = α/4Ω₀ exactly, so ϵ ≈ α/8Ω₀² |
| c-eq-7-23 | (7.23) | P_LZ − 1 ≈ e^{−π/2ϵ} | 1 − P_LZ = e^{−2π\|Ω₀\|²/\|α\|}, exactly, which with ϵ ≈ α/8Ω₀² is e^{−π/4ϵ} (with the book's ϵ, e^{−π/2ϵ}) |
| c-fig-7-1 (figure) | none (`figure: sim-adiabatic`) | passage panel: the curve falling from 1 labelled P₂, the rising one P₁ | for the transfer from \|1⟩ to \|2⟩ the falling curve is P₁ and the rising one P₂ |

Not a correction: prep's "(7.17) its two sides differ in dimension". Both sides are rates: the left is \|θ̇\| exactly (from tan 2θ = −2Ω/Δ) and the right is (ϵ₊ − ϵ₋)/ℏ, so (7.17) is (7.19) written out.

## Wanted at chapter level

- Symbols `P_1`, `P_2` added to `ch07/book-rows.json` (merged); Chapters 2–6 write the populations p₁, p₂ and may want the capital forms where the book prints them.

## Derivations

- 7.2 instantaneous dressed states (7.11)–(7.16) · score 5 · not built: the energies (7.15) restate the dressed energies of 2.1 (drv-dressed-states), and the eigenstates with a mixing angle are the same diagonalization written with an angle; the block stays as printed
- 7.2 the explicit adiabatic condition (7.17) · not built: (7.19) written out with $\dot\theta$ from (7.16) and the splitting of (7.15), three moves, stated ahead of 7.2.2
- 7.2.2 the adiabaticity condition (7.18)–(7.20) · score 4 (printed block) · split at the book's paragraph into drv-two-level-adiabaticity ((7.18), (7.19)) and drv-pulse-area-condition ((7.20)); the sign of (7.18) is that node's note, so c-eq-7-18 and its marker are gone
- 7.2.2 the Landau–Zener model (7.21)–(7.23) · score 15 · not built: the notes quote (7.22) from Landau and Zener without deriving it, and (7.23) is two moves from the quoted result; (7.21) is a definition; c-eq-7-21, c-theta-dot and c-eq-7-23 stay on the printed lines
