# Plan: 1.3 Basic Atomic Physics

Source: `source.md` (PDF pages 10–19, Eqs. 1.14–1.61, no numbered figures, no footnotes). checkprose clean. Planned and built in one go (config: Chen approved the chapter without stopping); this plan is left for review after.

## Blocks

The book's opening paragraph is the first block with no heading (root 21.3; nothing invented). The seven numbered subsections are the `<h2>` blocks under the book's titles; the three bold run-ins are `<h3>` inside theirs (config).

| id | `<h2>` / `<h3>` | holds |
|---|---|---|
| `opening` | none | the opening paragraph |
| `hydrogen` | 1.3.1 Example: the hydrogen atom | Eqs. 1.14–1.16, the Try It |
| `degeneracies` | 1.3.2 Level degeneracies | Eqs. 1.17–1.18 |
| `l-degeneracy` | 1.3.3 Corrections to the hydrogen atom hamiltonian: lifting of the $L$ degeneracy | screening, Rydberg states |
| `fine-structure-block` | 1.3.4 Fine structure: lifting of the $J$ degeneracy | Eqs. 1.19–1.23, the D lines, `sim-fine-hyperfine`; h3 Remark concerning the wavefunctions of hydrogen-like atoms (Eq. 1.24) |
| `hyperfine-block` | 1.3.5 Hyperfine interaction | Eqs. 1.25–1.27; h3 Structure of the alkali ground state |
| `zeeman-block` | 1.3.6 Interaction with static external magnetic fields | Eqs. 1.28–1.39, the italic Note, `sim-zeeman-levels` |
| `optical-block` | 1.3.7 Interaction with optical fields | Eq. 1.40; h3 Selection rules (Eqs. 1.41–1.61) |

Every display equation is `<div class="equation" id="eq-1-K">` with `\tag{1.K}`, as 1.2 does; the prose's "Eq. (1.14)", "Eq. 1.54", "Eq. 1.61" link to them. No misnumbered citation in 1.3.

## Concepts (28, merged)

Each is introduced by one span; ids are local to `text.html`.

| concept | introducing span |
|---|---|
| hydrogen-hamiltonian | `eq-1-14` |
| hydrogen-energy-levels | `hydrogen-levels` (the bound and unbound states) |
| rydberg-constant | `rydberg-constant` ("Rydberg’s constant") |
| uncertainty-energy-estimate | `estimate` (the paragraph that estimates R∞) |
| degeneracy-and-symmetry | `degeneracy-symmetry` |
| principal-quantum-number | `principal-n` |
| l-degeneracy-lifting | `l-lifting` |
| rydberg-states | `rydberg-states` (“Rydberg states”) |
| fine-structure | `fine-structure` |
| total-electronic-angular-momentum | `total-j` |
| spin-orbit-coupling | `spin-orbit` ("spin-orbit term") |
| darwin-term | `darwin` |
| d1-d2-lines | `d-lines` ("D1 line") |
| wavefunction-parity | `parity` |
| hyperfine-interaction | `hyperfine` |
| total-angular-momentum-f | `total-f` |
| alkali-ground-hyperfine | `alkali-ground` |
| zeeman-effect | `zeeman` |
| bohr-magneton | `bohr-magneton` |
| lande-g-factor | `lande` (first "Lande g-factor") |
| zeeman-field-regimes | `field-regimes` |
| clebsch-gordan-coefficients | `clebsch-gordan` |
| weak-field-zeeman-shift | `weak-zeeman` |
| dipole-interaction | `dipole-energy` |
| dipole-matrix-element | `matrix-element` |
| selection-rules | `selection-rules` |
| spherical-polarization-basis | `circular-basis` |
| polarization-selection-rules | `m-selection` |

`uses` rows for the 1.2 concepts the prose leans on: hamiltonian, schrodinger-equation, stationary-states, heisenberg-uncertainty-principle, commutator, state-vector. Every form gets its `anchor` (`1.3-eq-1-K`, or the paragraph for the four inline forms: eq-hydrogen-en → `hydrogen-levels`, eq-enl → `l-lifting`, eq-j → `good-numbers`, eq-parity → `parity`).

Concept spans: every mention judged in its sentence. "Hamiltonian" naming the operator wears `hamiltonian` (energy); "the Hamiltonian Eq. (1.14)" wears `hydrogen-hamiltonian`. "commutes" is the commutator where it states [Â, Ĥ] = 0. "principal level n" is the principal quantum number. Plain: "atomic physics", "fields" (no concept), "exercize", "total angular momentum E = E(n, l)" (the book's slip for orbital; no concept named).

## Symbols and variables

`ost meanings` run for every symbol. Rows for 1.3 (21): H, E_n and psi reuse 1.2's meanings; new meanings for R_inf (→ rydberg-constant), J (→ total-electronic-angular-momentum), F (→ total-angular-momentum-f), mu_B (→ bohr-magneton), Delta_E_Z (→ weak-field-zeeman-shift, energy); typed rows with no concept: m (mass), p (momentum), r (length), A_SO and A_HFS (energy), L, S, I (angular-momentum), B and B_z (magnetic-field), mu_e and mu_N (magnetic-moment), d (dipole), E_field (electric-field). These clear the checker's four errors (R_inf, J, F, mu_B).

New book symbols, staged in `ch01/book-rows.json` through `ost add … symbols --chapter 1` and merged: `B_z` (\kBz), `mu_e` (\kmue), `mu_N` (\kmuN), `Delta_E_Z` (\kdEZ). A macro is written only where its glyph is the book's: the hatted operators (Ŝ, L̂, Ĵ, F̂, Î, Ĥ, p̂, r̂), bold **B** and **E**, μ_B, μ_e, μ_N, A, A_HFS, B_z, ΔE_Z, R∞, E_n, m. Unhatted J², L², S², F² and the quantum numbers J, L, S, I, F, l, m_F stay ink (COLOR.md: quantum numbers are labels); g-factors are ratios, ink. V_SL, V_HFS, H_HFS, H_Z, U stay ink (no symbol rows; a later pass may add them).

## Referents

The levels of the sodium scheme (COLOR.md: levels of a scheme are referents), and the hyperfine levels of the two ground states 1.3.5 names. One group, since the two figures share the sodium F levels.

| id | label | figures | marked in text |
|---|---|---|---|
| na-3s | the ground state of Na | sim-fine-hyperfine | 1.3.4: "The ground state of Na", "the ³S₁/₂ ground state of Na" (twice) |
| na-3p | the first excited state of Na | sim-fine-hyperfine | 1.3.4: "the first excited state (L = 1)" |
| na-3p12 | the J = 1/2 excited state of Na | sim-fine-hyperfine | 1.3.4: J = 1/2 (three times), "the ³P₁/₂ excited state" |
| na-3p32 | the J = 3/2 excited state of Na | sim-fine-hyperfine | 1.3.4: J = 3/2 (three times), "the ³P₃/₂ excited state" |
| na-f1 | the F = 1 ground level of ²³Na | sim-fine-hyperfine, sim-zeeman-levels | 1.3.5: "F = 1" |
| na-f2 | the F = 2 ground level of ²³Na | sim-fine-hyperfine, sim-zeeman-levels | 1.3.5: "F = 2" |
| h-f0 | the F = 0 ground level of hydrogen | sim-zeeman-levels | 1.3.5: "F = 0", "two levels" |
| h-f1 | the F = 1 ground level of hydrogen | sim-zeeman-levels | 1.3.5: "1", "two levels" |

## Figures

The book draws nothing in 1.3. Both config Sims pass the gate of root 24 and are built:

- sim-fine-hyperfine · Sim · l-degeneracy-lifting, fine-structure, spin-orbit-coupling, hyperfine-interaction, alkali-ground-hyperfine, d1-d2-lines · standardisation (the level scheme the prose describes and never draws) and variation by choice: the reader adds one correction at a time and watches each level of sodium's n = 3 split into the next, with the size of every splitting stated, which the prose leaves to the imagination · arrows: symbolic (the D1 and D2 transitions, dashed connectors from a level to the levels it splits into); none kinematic · still: the stages are a sequence of approximations, not a time, so a choice morphs between them and no transport · one choice, stage (n only · L lifted · fine · hyperfine), default hyperfine so the whole ladder shows on load · headline reads the stage's splitting in sodium (for example "Spin–orbit coupling splits 3p into ²P₁/₂ and ²P₃/₂, h × 515.5 GHz apart…") · graph none; the ladder is the scene, columns left to right, energy up, not to scale (each splitting enlarged and labelled with its true size) · 2D (book RULES: level diagrams are 2D). Colours: levels in their referent colours, the Bohr level and the 3p hyperfine levels in the energy hue, the D lines in the yellow of 589 nm light (`F.fact('#ffe200')`, the book's one colour fact). Labels on the newest column only (at most four); every line has a hover name.
- sim-zeeman-levels · Sim · zeeman-effect, weak-field-zeeman-shift, lande-g-factor, zeeman-field-regimes, bohr-magneton · variation by slider: the energies of every |F, m_F⟩ level of the ground state against B_z from 0 to 2000 G, so the reader sees the weak-field fans of Eq. (1.37) with g_F of opposite sign for the two F, and the levels regrouping by m_S in strong field, which the two cases of the text only name · arrows: none · still: the field is a parameter, nothing has a clock · slider B_z (magnetic-field, 0–2000 G, default 300 G); choice atom (²³Na, I = 3/2 · ¹H, I = 1/2), since the number of levels and their pattern change with I (the H case is the book's S = I = 1/2 example of Eqs. 1.33–1.36) · headline names the regime at the live field ("At B_z = 300 G the field is weak: …") · graph alone, the graph is the idea: E/h (GHz, −4 to 4) against B_z (G, 0 to 2000), fixed for both atoms · 2D. The curves are the exact eigenvalues of A_HFS Î·Ĵ + g_J μ_B B_z Ĵ_z with g_J = 2 from Eq. (1.39) and the nuclear term dropped since μ_e ≫ μ_N (Eq. 1.30); the weak-field lines of Eq. (1.37) are dashed beside them. Each F family wears its referent colour. Readout: Eq. (1.38) and Eq. (1.37) for the stretched level |F = I + ½, m_F = F⟩, whose shift is linear at every field, so the equation is true in every state; note line: g_Jμ_B B_z against the hyperfine splitting and the regime it puts the atom in. Labels: F = 2, F = 1 at zero field, m_S = +½, m_S = −½ in strong field (four); the stretched level is the larger dot, named by the readout and on hover, since a label on it would touch the F label at low field; every point a hover name.

Both are AI-marked Sims (no number). `draws`: ladder `energy`, facts `#ffe200`; Zeeman `energy`, `magnetic-field`.

### Book arithmetic the figures do not copy (call for Chen)

Eq. (1.23) and the hyperfine shifts of 1.3.5 put the square of a quantum number where the eigenvalue belongs (J² → (3/2)² = 9/4 instead of J(J+1) = 15/4). With the eigenvalues, as Eqs. (1.38)–(1.39) of the same section use them, the ²P₁/₂–²P₃/₂ splitting is 3A/2 (not A), hydrogen's ground-state splitting is A_HFS with shifts A_HFS/4 and −3A_HFS/4 (not A_HFS/2, ±A_HFS/4), and that of ²³Na and ⁸⁷Rb is 2A_HFS (not 3A_HFS/2). The text keeps the book's words and numbers; the figures obey root 24.7 (the readout is true as written) and write their arithmetic with J(J+1), F(F+1), I(I+1), so a reader can see where the numbers differ. Alternative: drop the hyperfine and fine numbers from the ladder's readout and show the splittings unlabelled.

### Extra sims (root 15), not built

- Selection-rule ladder: the |L, m_L⟩ levels of an S → P transition with σ⁺, σ⁻ and ẑ light as a choice, the allowed arrows drawn for each (Eqs. 1.58–1.60). It opens a view the text gives only as three lines of rules.
- Parity of Y_lm: a choice of l, the angular function drawn on a circle before and after r̂ → −r̂, its sign flipping as (−1)^l. Weaker: Eq. (1.24)'s statement is already plain.

## Exercises

One inline `exercise` Try It (config): `ex-rinf`, source_id the book's sentence "it is a good exercize to know how to derive an expression for it from basic principles", placed after the paragraph `rinf-invitation`, Bloom Apply, prompt "Derive an expression for Rydberg’s constant $R_\infty$ from basic principles.", answer `open`, `generated_by: source`, solution Eq. (1.16) as the book states it, $E_0 = -R_\infty \sim -\frac{me^4}{2\hbar^2}$, reached by the Heisenberg estimate the book gives next. Concepts: rydberg-constant, uncertainty-energy-estimate. No MIT problem maps to Chapter 1 (config).

## Lead draft (AI-marked)

> The structure of atoms that sets how they answer applied fields: the hydrogen atom and its degeneracies, the corrections that lift them one by one (screening, fine and hyperfine structure), the Zeeman effect of a static magnetic field, and the selection rules of the dipole interaction with light.

## Objectives, summary, notes

`objectives` and `summary_html` empty (book prints neither). `notes` empty: nothing is left out.

## Book faults kept verbatim

- Eq. (1.21) prints $\hat{S} \cdot L = J^2 - L^2 - S^2$: no hat on L and no factor 2 (Eq. 1.22 has the 2).
- Eq. (1.23) and 1.3.5's shifts evaluate J², F² as squares of quantum numbers (above).
- Term symbols ³S₁/₂, ³P₁/₂, ³P₃/₂ where the doublet ²S, ²P is meant; the ladder labels the levels ²S₁/₂, ²P₁/₂, ²P₃/₂.
- "more modern“artificial atoms”" (no space), "exercize", "Schrodinger’s", "have $n$ are allowed", "principal quantum $n$ number", "a reduced the energy splitting", "total angular momentum $E = E(n, l)$", "Clebsch-Gordon" beside "Clebsch-Gordan", "Simliarly", "Lande", "dipole interaction interaction", "transitions strengths", "for example) .", and ”Modern Quantum Mechanics” / ”Laser Cooling and Trapping” / ”Quantum Physics…” opening with a closing quotation mark.
- B_Z with a capital subscript in Eq. (1.30) beside B_z in Eqs. (1.29) and (1.37).

Corrections (Chen, 2026-10-11): the text keeps the book's words; six `footnotes` rows of kind `correction` (AI-marked, numbered [1]–[6] by the app) say what the book prints and what is meant, each with its marker right after the misprint: `c-eq-1-21` (inside Eq. 1.21's block), `c-eq-1-23` (Eq. 1.23: 3A/2), `c-term-symbols` (after the first ³S₁/₂ of `d-lines`), `c-h-shifts` (A_HFS/4, −3A_HFS/4), `c-h-splitting` (A_HFS) and `c-na-splitting` (2A_HFS) in `alkali-ground`. The slips of spelling and spacing above are not corrected.

## Wanted at chapter level

- Symbols for V_SL, V_HFS, H_HFS, H_Z and U (energies) if the chapter pass wants them coloured; 1.3 writes them in ink.
- Nothing else: 1.3's symbols are staged and merged by this build.

Decided in the chapter pass: V_SL, V_HFS, H_HFS, H_Z and U are energies (COLOR.md lists V, U and Ĥ under energy), so each is a symbol (`\kVSL`, `\kVHFS`, `\kHHFS`, `\kHZ`, `\kU`) with a 1.3 variables row anchored at Eqs. 1.19, 1.26, `alkali-ground`, 1.30 and 1.40, and the text writes the macros.

## Derivations

- 1.3.1 estimate of the Rydberg constant, (1.15)–(1.16) · score 4 · built as drv-rydberg-estimate: three nodes, the mean energy (1.15), the minimizing Δr, and E₀ (1.16); replaces (1.15), the "Minimizing" sentence and (1.16), the paragraph before kept
- 1.3.4 fine-structure splitting, (1.20)–(1.23) · score 1 · built as drv-fine-structure-splitting: S·L (1.21), V_SL (1.22), the splitting (1.23); the book's (1.21) factor ½ and (1.23) squares-of-quantum-numbers errors move from footnotes c-eq-1-21 and c-eq-1-23 into the nodes' notes (the work gives 3A/2); the eigenvalue J(J+1) is cited to 1.3.6, where (1.38)–(1.39) write it
- 1.3.5 hyperfine structure of the alkali ground state · score 3 · not built: inline prose, under the bar, and the same moves as the fine-structure block; its corrections stay as footnotes
- 1.3.6 Clebsch–Gordan states (1.33)–(1.36) · score 6 · not built: a table the notes state rather than derive, and the lowering-operator algebra it would need is never stated
- 1.3.6 Landé g-factors (1.37)–(1.39) · score 11 · not built: "can be shown", resting on the projection theorem the notes never state (they refer to Vanier and Audoin)
- 1.3.7 parity argument for ΔL odd, (1.44)–(1.45) · score 3 (re-judged: prose with two displays, the parity of ψ from this section's remark, two hidden moves) · not built: under the bar
- 1.3.7 ΔL = ±1 from the double commutator (1.46) · score 9 · not built: it rests on the eigenvalue ħ²L(L+1) of L², which the notes never state
