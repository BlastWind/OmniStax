# Plan: 9.2 Interactions between a single-mode radiation field and a two level atom

Source: `source.md` (PDF pages 177–183, Eqs. 9.53–9.79, Figure 9.3, no footnote). Planned and built in one go (config: Chen approved building without stopping); this plan is left for review after.

## Blocks

| id | heading | holds |
|---|---|---|
| `opening` | none | the two opening paragraphs, ”cavity quantum electrodynamics” |
| `jaynes-cummings` | `<h2>` 9.2.1 The Jaynes-Cummings model | Eqs. 9.53–9.59 |
| `vacuum` | `<h2>` 9.2.2 Initial vacuum field: vacuum Rabi oscillations | Eqs. 9.60–9.62, the strong coupling regime; then the run-ins as `<h3>`: `coherent-field` "Initial coherent state field" (Eqs. 9.63–9.67) and `quantum-limit` "The quantum limit to Rabi oscillations" (Eqs. 9.68–9.79, Figure 9.3, the Schrödinger cat) |

Every numbered display is `<div class="equation" id="eq-9-K">` with `\tag{9.K}`; (9.66) and (9.76) are one aligned display each, as printed. The three citations "Eq. (11.6)" keep their words and link to `#eq-9-65` (book RULES: misnumbered citations).

## Concepts (10, prep-merged)

| concept | introducing span |
|---|---|
| cavity-qed | `cavity-qed` (”cavity quantum electrodynamics”) |
| jaynes-cummings-model | `eq-9-53` |
| jaynes-cummings-solution | `jc-pairs` ("couples the state \|2⟩_a\|n⟩ to the state \|1⟩_a\|n+1⟩ and back") |
| vacuum-rabi-oscillations | `vacuum-rabi` ("oscillations at the vacuum Rabi frequency g") |
| strong-coupling-regime | `strong-coupling` (“strong coupling regime”) |
| coherent-state-rabi-oscillations | `classical-rabi` ("the field remains in a coherent state while the atom cycles…") |
| rabi-collapse | `collapse` ("The photon number fluctuations first become significant") |
| rabi-revival | `revival` ("the Rabi oscillations revive") |
| atom-field-entanglement | `eq-9-77` |
| schrodinger-cat-state | `cat` (“Schrodinger cat”) |

`uses` rows: linear-optical-transformations and single-mode-field (opening), two-level-atom (opening), cavity-finesse ("high finesse cavity", 9.3's concept), rotating-frame (eq-9-53), fock-states (eq-9-54), schrodinger-equation and probability-amplitude (eq-9-56), rabi-oscillations (vacuum-rabi), spontaneous-emission and wigner-weisskopf (the reabsorption paragraph), coherent-state and coherent-amplitude (eq-9-63), poisson-photon-statistics (the Δn paragraph). Every form of the ten concepts gets `anchor` `9.2-eq-9-K` (eq-9-124 stays 9.3's).

Concept spans, judged per mention: "Hamiltonian" naming (9.53) wears `jaynes-cummings-model`; "two-level atom/system" `two-level-atom`; "Fock state(s)" `fock-states`; "coherent state(s)" `coherent-state`; "Rabi oscillations" (classical) `rabi-oscillations`; "the vacuum Rabi oscillation", "the vacuum Rabi frequency" `vacuum-rabi-oscillations`; "collapse and revival" and "revival(s)" `rabi-revival`; "the Rabi oscillations damp out" `rabi-collapse`; "spontaneous emission" `spontaneous-emission`; "Wigner Wiesskopf theory" `wigner-weisskopf`; "probability amplitudes" `probability-amplitude`; "Poisson distribution" `poisson-photon-statistics`; "decoherence" (three times) `dephasing-rate`; "photon wavepacket" `emitted-photon-wavepacket`; "environments" `open-system`. Plain: headings, "modes" of the bath, "absorption" (not 4.2's coefficient), "wavepacket" of Fock components (not 2.2's outgoing one), "out of phase" (not the quadrature sense), "coherent/incoherent interactions" (not 5.1's classes), "conceptually simple" (1.1's quoted sense only), "coherent interactions", "classical coherence", "single mode of the radiation field" where it means the mode rather than the description.

## Symbols and variables

`ost meanings` run for each. 9.2 rows: g (2.3's meaning, → single-photon-rabi-frequency), H (→ jaynes-cummings-model, `redefines`: the Jaynes-Cummings Hamiltonian), H_eff (the projected two-state Hamiltonian of 9.61, `redefines`, energy, no concept: it names neither 5.1's effective Hamiltonian nor a concept of its own), psi and t (Chapter 1 meanings), c_n (1.2's meaning), new `c_np1` c_{n+1} (amplitude, → probability-amplitude; a symbol of its own so that (9.56)–(9.58) colour c_{n+1}^{(1)} without a raw class), n_bar (|α|², `redefines`, untyped, no concept), alpha_coh (→ coherent-amplitude), phi (φ_n, the phase of the n-th Fock component, `redefines`, phase, no concept), tau_Rabi → coherent-state-rabi-oscillations, tau_collapse → rabi-collapse, tau_revival → rabi-revival, p_2 (the excited state's population, 6.1's meaning, → born-rule; the figure's caption and readout). n̄, n, δn, Δn are counts and stay in plain LaTeX (book RULES: untyped).

## Referents

The two coherent components of the field, |αe^{±igt/2√n̄}⟩ of (9.76)–(9.79), drawn as the two dashed discs of the figure's phase-space panel and marked in the prose where the text names them at gτ_Revival/2 (|αe^{iπ/2}⟩, |αe^{−iπ/2}⟩, and "the two superposed states |±iα⟩" banded in both). One group.

| id | label | figures |
|---|---|---|
| comp-plus | the component \|αe^{+igt/2√n̄}⟩ | sim-collapse-revival |
| comp-minus | the component \|αe^{−igt/2√n̄}⟩ | sim-collapse-revival |

Prep listed the atom, the cavity mode and \|α±⟩ as referents. No figure draws the atom or the cavity, and \|α±⟩ are each a superposition of both discs, so neither can be a drawn referent; the discs are what the figure and the text both point at.

## Figures

Units: the time axis is gt (dimensionless), so g needs no slider; the figure holds for any g.

- sim-collapse-revival · Figure 9.3 · jaynes-cummings-solution, vacuum-rabi-oscillations, coherent-state-rabi-oscillations, rabi-collapse, rabi-revival, atom-field-entanglement, schrodinger-cat-state · recomputed exactly from (9.65) (p₂(t) = Σₙ e^{−n̄}n̄ⁿ/n! cos²(g√(n+1)t), no approximation), with flow by animation and variation by slider: the reader watches three views of one clock — the excited-state probability collapsing and reviving; the Fock components |n⟩ as hands on a dial turning at their own rates 2g√(n+1) (in a frame turning with n̄), fanning out at τ_Collapse and lapping back into line at τ_Revival, their weighted sum the envelope of p₂; and the field's distribution ⟨β|ρ̂|β⟩/π in the x̂, p̂ plane splitting into the two components of (9.77)–(9.79), turning apart at ±gt/2√n̄ and meeting behind the origin at the revival, the cat |±iα⟩ halfway. The still book figure shows none of the three mechanisms and only α = 4 · arrows: kinematic (the dial's hands and their sum turn under the clock), symbolic (the τ markers on the graph) · moving: the clock runs gt from 0 to 40 in 16 s (the idea spans two time scales 25 apart, 1/g and 2π√n̄/g, so the loop is longer than the house 4–6 s; the transport's speed slows it); transport · slider n̄ = |α|² (untyped, 0 to 25, default 16 = the book's α = 4 as a detent; special 0 "vacuum": the field starts in |0⟩ and the dial has one hand, the vacuum Rabi oscillation cos² gt of (9.62) that never collapses) · headline states gt, how far each field component has turned and the envelope · graph below: p₂ against gt, 0–40 by 0–1, fixed, the envelope ½ ± ½|Σ| dashed, τ_Collapse and τ_Revival marked by name where (9.70) and (9.71) put them, the revival at 2π√n̄/g (the book's drawn label lacks the 2π: corrections); the readout's note gives their values · 2D (book RULES: phase space and time plots are 2D). Labels: axis titles, the τ markers, the two panel titles; the hands and discs move, so they carry hover names and a legend, not labels (rule 26.7). Readout: p₂(t) = Σₙ e^{−n̄}n̄ⁿ/n! cos²(g√(n+1)t) with the live value; note the three times (9.67), (9.70), (9.71) at the live n̄.

Folding Figure 9.4 (the cat in phase space, printed in 9.3) into this figure was weighed and left: 9.3 is built at the same time and owns its figure; the phase-space panel here reaches the cat state at gt = π√n̄, so 9.3 may link here (Wanted at chapter level).

`draws`: population, time, coupling, state, quadrature. No facts or conventions: the atom is the generic two-level atom.

### Extra sims (root 15), not built

- A Fock-state start beside the coherent one: with the field in |n⟩ the dial has one hand and p₂ oscillates at g√(n+1) forever, so the collapse is seen to come only from the spread of n. A choice on the same figure; offered, since the text names only the vacuum and coherent starts.
- A thermal field start (9.1's distribution): the collapse with no revival, since the thermal spread is too broad for neighbouring hands to realign. The text does not discuss it.

## Exercises

None. The section prints no inline invitation, and no MIT 8.422 problem is placed here (prep: hw7.2 stays in 2.3; the cat-state parts hw1.2(d) and hw1.3(ii) cite this section from 9.3 and 9.4). `exercise_notes` says so.

## Lead draft (AI-marked)

> A single two-level atom coupled to one mode of a cavity: the Jaynes-Cummings model and its exact solution, vacuum Rabi oscillations of an excited atom in an empty cavity, and, for a coherent field, the collapse and revival of Rabi oscillations and the field's splitting into a Schrödinger cat.

## Objectives, summary, notes

Empty (the book prints none); nothing is left out.

## Book faults kept verbatim

- ”cavity quantum electrodynamics”: the stray opening ”.
- "is very different coherent states" (missing "from"); "Wigner Wiesskopf"; "posesses"; "superpostion"; "Schrodinger".
- "To first order in δn/n" for δn/n̄ (a prose slip, the meaning clear; no correction).
- "Eq. (11.6)" three times (pages 180 and 183) for Eq. (9.65): the words stay, the links go to (9.65), one correction at the first.
- (9.69)'s last step and "â†â|ψ⟩ = iâ†â|1⟩_a|1⟩ = |ψ⟩" were checked and are right (δn = n − n̄; at t = π/2g the state is i|1⟩_a|1⟩).

## Corrections

| id | attaches to | the book prints | meant |
|---|---|---|---|
| c-eq-11-6-cited | the first "Eq. (11.6)" (`naive`) | Eq. (11.6), here and twice below | Eq. (9.65) |
| c-eq-9-74 | `eq-9-74` | no factor ½ | ≈ ½(e^{ig√n̄t/2}e^{ignt/2√n̄} − e^{−ig√n̄t/2}e^{−ignt/2√n̄}), the ½ of (9.73) |
| c-eq-9-76 | `eq-9-76` | the middle row without the ket \|n⟩, the last row with a stray Σₙ | the middle row's sum carries \|n⟩ (\|n+1⟩ ≈ \|n⟩); the sum builds the coherent states, so the last row has no Σₙ |
| c-coherence | the inline ⟨â⟩ ∼ e^{−\|α\|²} (`cat-coherence`) | e^{−\|α\|²} | ⟨iα\|−iα⟩ = e^{−2\|α\|²}, so \|⟨â⟩\| is at most of order \|α\|e^{−2\|α\|²}; exponentially small either way |
| c-fig-9-3 | `figure: sim-collapse-revival` (the original's drawn label) | τ_Revival = α/g | τ_Revival ∼ 2π\|α\|/g, Eq. (9.71) |

## Wanted at chapter level

- 9.3 may link its Figure 9.4 (cat in phase space) to this figure's phase-space panel at gt = π√n̄, or fold it here in the chapter pass.
- `alpha_coh`, `n_bar` and `phi` meanings: 9.1 adds its own rows at the same time; the chapter pass should check the chapter's meanings agree or carry `redefines`.
- New symbol `c_np1` (c_{n+1}, \kcnpone) staged in `ch09/book-rows.json`.

## Derivations

- 9.2.1 the Jaynes-Cummings equations (9.56)–(9.57) · block (hidden moves: the Schrodinger equation projected on each pair) · built as drv-jaynes-cummings-equations: â†|n⟩ = √(n+1)|n+1⟩ from |n⟩ = (â†)ⁿ|0⟩/√n! (11.8), then (9.56) and (9.57) from (1.11), (9.53) and (9.55), the coupling taken real as (9.57) writes it; replaces (9.56)–(9.57), the sentence before kept
- 9.2.1 the Jaynes-Cummings solution (9.58)–(9.59), same scan entry · built as drv-jaynes-cummings-solution after the sentence "These equations hold independently…", which keeps its place: (9.59) from (9.56)–(9.57), the sines and cosines of 2.1.1 and the initial state (9.54), then (9.58) from (9.59)
- 9.2.2 vacuum Rabi oscillations (9.60)–(9.62) · score 2 · not built: the case n = 0 of (9.58)–(9.59), with (9.61) a stated projection; under the bar
- 9.2.2 the state in a coherent field (9.64)–(9.65) · block, 4 moves · built as drv-coherent-field-state, replacing (9.64)–(9.65), the two lead-in fragments joined into one sentence
- 9.2.2 the naive approximation (9.66)–(9.67) · block · built as drv-naive-rabi-oscillation: the three rows of (9.66) (the |n+1⟩ → |n⟩ row given its reason, the near-equal neighbouring amplitudes) and the period (9.67); "Such a substitution yields" and "with period" trimmed
- 9.2.2 the phase expansion (9.68)–(9.69) · block · built as drv-rabi-phase-expansion; the dangling "The phase … is then" dropped
- 9.2.2 collapse time (9.70) and revival time (9.71) · score 2 each · not built: order-of-magnitude readings of (9.69) stated in the prose, two moves each; stay as printed
- 9.2.2 the field splitting (9.72)–(9.79) · block plus "a similar calculation" (hidden) · built as drv-field-splitting: (9.74) (the book's dropped ½ moves from footnote c-eq-9-74 into the node's note), the ground state part (9.76) (footnote c-eq-9-76 moved into the node's note), the excited state part the book leaves to "a similar calculation", and the total state (9.77) with (9.78)–(9.79) as fact cards; replaces (9.72)–(9.79) and their connecting phrases; the two "Eq. (11.6)" citations inside are gone, so c-eq-11-6-cited now says "twice more … worked out below"; the links to (9.65) and (9.78) (the #naive paragraph and Figure 9.3's caption) re-pointed to drv-coherent-field-state and drv-field-splitting
- the cat state at gt = π√n̄ (end of 9.2.2) · not built: prose, one substitution into (9.78)–(9.79)
