# Plan: 9.1 Basic properties of quantum fields

Source: `source.md` (PDF pages 169–177, Eqs. 9.1–9.52, Figures 9.1–9.2, footnote 1 holding Eq. 9.47). Planned and built in one go (config: Chen approved building without stopping); this plan is left for review after.

## Blocks

| id | `<h2>` | holds |
|---|---|---|
| `opening` | none | Eqs. 9.1–9.4, the single-mode paragraph |
| `thermal` | 9.1.1 Thermal states | Eqs. 9.5–9.8, the multimode paragraph |
| `coherent` | 9.1.2 Coherent states | Eqs. 9.9–9.52; run-ins as `<h3>`: The quadrature components, The shift operator, Photon statistics in a coherent state, Classical dipole radiation, Generalization to multimode fields, Quasi-probability distributions, Linear optical transformations of coherent states; `sim-coherent` at the end of "Photon statistics in a coherent state" |

Every numbered display is `<div class="equation" id="eq-9-K">` with `\tag{9.K}`; 9.2–9.3, 9.22–9.25, 9.27–9.28, 9.32–9.33, 9.35–9.37 and 9.41–9.42 keep the book's continued `=` lines as separate numbered displays; 9.35 is one aligned display with one number. Citations link to their equation. Footnote 1 is a `book` row whose html holds Eq. (9.47) as its own `div.equation` (`eq-9-47`, the pattern of 4.1, 7.4, 8.2); its marker follows "two output electric field".

## Concepts (20, prep-merged)

| concept | introducing span |
|---|---|
| fock-states | `fock` (number states or “Fock” states) |
| single-mode-field | `single-mode` ("examining the evolution of a single mode") |
| photon-statistics | `photon-statistics` (“photon distribution” or “photon statistics”) |
| thermal-photon-distribution | `eq-9-6` |
| multimode-thermal-statistics | `multimode-thermal` |
| coherent-state | `coherent-state` (“coherent state”) |
| coherent-amplitude | `eq-9-10` |
| quadrature-operators | `quadrature-operators` ("the quadrature operators") |
| coherent-state-uncertainty | `most-classical` (“most classical”) |
| local-oscillator | `local-oscillator` (“local oscillator”) |
| shift-operator | `shift-operator` (“shift operator”) |
| poisson-photon-statistics | `poisson` ("follows a Poisson distribution") |
| classical-dipole-radiation | `dipole-field` ("the field produced by a classical oscillating dipole") |
| multimode-coherent-state | `multimode-coherent` |
| coherent-state-overcompleteness | `overcomplete` ("form an overcomplete set") |
| p-representation | `p-representation` ("the quasi-probability distribution P(α)") |
| nonclassical-light | `nonclassical` ("non-classical properties") |
| linear-optical-transformations | `linear-transformations` |
| beamsplitter-transformation | `beamsplitter` |
| beamsplitter-unitary | `beamsplitter-unitary` |

`uses` rows: field-mode-expansion and quantized-electric-field (`eq-9-1`), heisenberg-picture (`opening`), creation-annihilation-operators (`opening`), hamiltonian (`eq-9-2`), density-operator (`eq-9-5`), density-matrix-populations (`eq-9-6`), mean-thermal-photon-number (`eq-9-7`), heisenberg-uncertainty-principle (`most-classical`), field-quadratures (`quadrature-operators`), rotating-wave-approximation and rotating-frame and time-evolution-operator (`dipole-radiation`). Every form gets its `anchor` `9.1-eq-9-K`, except eq-9-47, which sits in footnote 1 and anchors to `beamsplitter`, the span carrying the footnote's marker (8.2's eq-8-13 does the same).

Concept spans, judged per mention: "Fock states"/"number states" `fock-states`; "photon statistics" `photon-statistics` where it names the distribution (also "photon distribution"); "thermal state"/"thermal field" of one mode `thermal-photon-distribution`, "multimode thermal field" `multimode-thermal-statistics`; "coherent state(s)" `coherent-state` (the multimode product `multimode-coherent-state`); "quadrature operators" `quadrature-operators`, “in phase”/“out of phase” on the same; "local oscillator"; "shift operator"; "Poisson distribution"/"Poissonian" (the coherent one) `poisson-photon-statistics`, the multimode thermal "Poissonian" stays bare (it names a look, not the coherent result); "overcomplete"; "quasi-probability distribution" `p-representation`; "non-classical" `nonclassical-light`; "linear transformations"/"linear optical operations" `linear-optical-transformations`; "beamsplitter"/"beam splitter(s)" `beamsplitter-transformation`; "Hamiltonian" `hamiltonian`; "density operator"/"density matrix" `density-operator`/`density-matrix`; "annihilation operator(s)" `creation-annihilation-operators`; "Heisenberg picture" `heisenberg-picture`; "uncertainty principle" `heisenberg-uncertainty-principle`; "RWA" and "rotating frame"; "time evolution operator"; "polarization" of the mode `light-polarization`; "a single mode" where it names the single-mode description `single-mode-field`. Bare: "Schrodinger picture" (no concept), "harmonic oscillator", "field" and "state" in general senses, "laser", headings.

## Symbols and variables

`ost meanings` run for each. 9.1 rows: alpha_coh → coherent-amplitude; x_quad and p_quad → quadrature-operators (both name it, as q_j and p_j of 2.3 both name field-quadratures; prep had p̂ unlinked); D_shift → shift-operator; P_alpha → p-representation; n_bar (no concept, `redefines`: thermal in 9.1.1 and |α|² in 9.1.2, where Chapter 3's is thermal only); T; omega (the mode frequency, `redefines`); omega_k (the mode frequency, `redefines`); k; V; E_hat → quantized-electric-field; rho_nn → density-matrix-populations (3.1's meaning, the population of |n⟩); rho_hat → density-operator; theta (beamsplitter parameter, phase, `redefines`); phi (arg α and the phase shift, phase, `redefines`); H → hamiltonian; t; psi → state-vector.

Ink: the bold Ê and polarization index α of Eq. (9.1), Ê_LO, E, E_k, the classical dipole's d, d₀, E₀, the chemical potential μ, β (a second coherent amplitude), Ô, the beamsplitter's t, r (COLOR.md: ratios), â, â†.

## Referents

None: the section names no particular thing that a figure and the text both point at (the beamsplitter's two modes appear in equations only).

## Figures

- sim-coherent · Figure 9.1 + 9.2 (the book's phase-space disc and its photon number distribution are one state seen two ways) · coherent-state, coherent-amplitude, quadrature-operators, coherent-state-uncertainty, local-oscillator, poisson-photon-statistics · variation by slider and flow by animation: as |α| grows the reader sees the circle of diameter √2 move out while keeping its size, the Poisson bars move right as |α|² and widen only as |α|, and the field the circle casts on the turning quadrature x̂ cos ωt + p̂ sin ωt (Eq. 9.17) trace a sinusoid of amplitude √2|α| inside a band of fixed width 1/√2, so the intensity grows better defined as the field grows, which the two still panels leave to the reader to connect · arrows: none drawn as arrows (the dashed line turning at ω is the measured quadrature, kinematic in that it moves; the radius √2|α| and the brackets δx, δp are notation) · moving: the quadrature direction turns at ω and the field trace is drawn as it goes, two periods per loop, transport; the state's circle itself is still (the book's frame) · sliders |α| (quadrature, 0–4, default √10 so |α|² = 10, Figure 9.2's value; specials 0 "vacuum" and √10 "n̄ = 10") and φ = arg α (phase, 0–2π, default 0.2π, near the book's drawing; specials 0 "in phase" and π/2 "out of phase", the text's words for x̂ and p̂ against the local oscillator cos ωt) · headline: n̄ and its spread, and the field's swing and its constant spread, live · graph beside: the phase plane left (x̂, p̂ from −8 to 8, fixed: √2·4 + 1/√2 = 6.4), the number distribution right above (n 0–32, ρ_nn 0–0.3, fixed; bars above 0.3 at |α| < 1.3 pinned at the top with their value), the field trace right below (ωt 0–4π, −8 to 8, fixed) · 2D (book RULES: phase space is 2D). Labels: x̂, p̂ on the axes, √2|α| on the radius (from |α| = 2, where it clears the brackets), φ on its arc, δx and δp on brackets as the book draws them, n̄ ± Δn on a bracket over the bars; the turning line, its shadow and the trace dot move and carry hover names only (rule 26.7); every bar has a hover name with its probability. Readout: Eqs. (9.26)–(9.28) with the live |α|²; note: the field's mean √2|α|cos(ωt − φ) and its spread, Eq. (9.17) with Eq. (9.15). No number driven by the clock is in the readout.

`draws`: state, quadrature, phase, population. No facts, conventions or referents.

### Not built: the beamsplitter

The book prints no figure for Eqs. (9.45)–(9.52), and a still schematic of two arms adds nothing the equations do not say, so none is drawn (config: "only if the plan argues it").

### Extra sims (root 15), not built

- Beamsplitter in phase space: two coherent inputs |α₁⟩, |α₂⟩ as circles of diameter √2, a slider θ (t = cos θ, r = sin θ) and the phase of α₂; the outputs tα₁ + irα₂ and tα₂ + irα₁ move like added vectors while every circle keeps its size, so the reader sees Eq. (9.50)'s "still a coherent state" and interference at once.
- Thermal against coherent: the thermal distribution of Eq. (9.6) beside the Poisson one at the same n̄, the geometric fall from n = 0 against the peak at n̄, with ⟨Ê⟩ = 0 against the coherent swing; slider n̄.

## Exercises

No inline invitation is printed in 9.1, so there is no Try It.

- MIT Problem Set 1, Problem 1 (properties of the coherent state), five end exercises `hw1-1a`…`hw1-1e`, kind `problem`, `origin: mit-8422`, `source_number` "Problem Set 1, Problem 1(a)"…, `source_id` "hw1.1a"…. Restated with hats on operators; part (e)'s P(φ) kept and set apart from Lukin's P(α). (a) overlap, (b) overcompleteness, (c) BCH and the displacement operator, (d) mean and rms field, (e) the phase distribution: all derivations, AI solutions in Lukin's symbols linked to Eqs. (9.15)–(9.17), (9.20)–(9.25), (9.34)–(9.39).
- MIT Problem Set 2, Problem 1 (the quantum beamsplitter), four end exercises `hw2-1a`…`hw2-1d`: modes a, b written â₁, â₂, the state order of (b) and (d) put mode 1 first, B written B̂ and not identified with Lukin's Û (the two differ by the phase of the reflected arm). (d)'s "how sharp for n = 10, and n = 100" is held as numerical; the card asks for the width as a function of n, answered analytically. MIT's relations BâB† = (â₁ ± â₂)/√2 have the opposite sign to its own definition of B̂: a correction in the prompt.

Concepts: hw1-1a overcompleteness, coherent-state; b overcompleteness; c shift-operator, coherent-state; d coherent-state-uncertainty, quadrature-operators; e coherent-amplitude, poisson-photon-statistics, fock-states. hw2-1a beamsplitter-unitary; b beamsplitter-transformation, linear-optical-transformations; c beamsplitter-unitary; d beamsplitter-transformation, fock-states.

## Lead draft (AI-marked)

> The quantum states of a single mode of the radiation field: the thermal state and its photon statistics, the coherent state of a laser seen in the plane of the quadrature operators, the shift operator that makes it, its photon number distribution, coherent states of many modes, the quasi-probability distribution P(α), and phase shifts and beamsplitters as linear transformations.

## Objectives, summary, notes

Empty (the book prints none). `notes` empty: nothing is left out.

## Book faults kept verbatim (no correction)

- "limits δxδp ≥ 1/2 The quadrature" (missing full stop); "the“in phase”" (missing space); "into two output electric field" (plural); "Schrodinger".
- "To prove Eq. 9.19": what Eq. (9.21) proves is D̂(α)|0⟩ = |α⟩, Eqs. (9.22)–(9.25), stated in the same sentence as (9.19); the link goes to (9.19) as printed.
- "the identity operator is proportional to the sum of all coherent states": the integral of the projectors |α⟩⟨α| is meant; loose wording, kept.

## Corrections

| id | attaches to | the book prints | meant |
|---|---|---|---|
| c-eq-9-11 | `eq-9-11` | exponent i(k·r − iωt) | i(k·r − ωt), as in (9.1) |
| c-eq-9-26 | `eq-9-26` | α^{2n} | \|α\|^{2n} |
| c-n-strong | "For strong fields, n ≫ 1" | n ≫ 1 | n̄ ≫ 1 |
| c-eq-9-30 | `eq-9-30` | e^{αâ − α*â†} | e^{αâ† − α*â}, the shift operator, from the Hamiltonian and α given |
| c-eq-9-33 | `eq-9-33` | exponent i(k·r − iω_k t) | i(k·r − ω_k t) |
| c-eq-9-36 | `eq-9-36` | Σ πn! δ_{m,n}\|m⟩⟨n\| | Σ π δ_{m,n}\|m⟩⟨n\|: the factor 1/√(m!n!) of (9.35) dropped (new; not in prep) |
| c-e-in | "E₁^in, E₁^in" | E₁^in twice | E₁^in, E₂^in |
| c-hw2-1d | hw2-1d's prompt | MIT's B̂â₁B̂† = (â₁ + â₂)/√2, B̂â₂B̂† = (−â₁ + â₂)/√2 | with B̂ as defined, (â₁ − â₂)/√2 and (â₁ + â₂)/√2; the printed ones are B̂†â₁B̂, B̂†â₂B̂ |

Concept forms already state the corrected relations (prep). The book row coherent-state-uncertainty said "at distance |α| from the origin"; the book's figure draws √2|α|, so its statement is set to "at a distance √2|α|".

## Wanted at chapter level

- n̄ wears no concept here: 9.1.1's is the thermal mean of Chapter 3's mean-thermal-photon-number, 9.1.2's is |α|² of poisson-photon-statistics. The chapter pass may prefer a concept "mean photon number" for 9.1, 9.2 and 9.4.

## Derivations

- 9.1.1 thermal states (9.5)–(9.8) · score 5 · not built: a restatement of 3.1 Example 2, (3.14)–(3.16), judged out there (its sums are geometric series the notes never state); stays as printed
- 9.1.2 the shift operator on the vacuum, (9.22)–(9.25) · proof · built as drv-shift-operator-on-vacuum: (9.24) by Eq. (9.21) with [â, â†] = 1 (11.114), â|0⟩ = 0 from (9.4) and (â†)ⁿ|0⟩ = √n!|n⟩ (11.8), then (9.25) as the eigenstate of (9.10); replaces (9.22)–(9.25), the lead-in sentence kept; the link "Eq. (9.24)" before (9.39) re-pointed to the derivation. (9.20) is stated with "Similarly" and no work, and stays as printed
- 9.1.2 photon statistics in a coherent state, (9.26)–(9.28) · score 7 (2 imported: (11.114), the Fock basis; hidden run 4; 1 join) · built as drv-coherent-photon-statistics: ρ_nn from (3.1), (3.6) and (9.24) (the book's α^{2n} moves from footnote c-eq-9-26 into the node's note), n̄ from (9.12), the variance by [â, â†] = 1; replaces (9.26)–(9.28), the two lead-in fragments joined into one sentence
- 9.1.2 classical dipole radiation (9.29)–(9.30) · score 5, 3 moves · not built: under the four-move bar; its correction c-eq-9-30 stays
- 9.1.2 completeness of the coherent states, (9.34)–(9.38) · proof · built as drv-coherent-state-completeness: the radial and angular integrals as their own moves; the book's (9.36), which drops 1/√(m!n!), moves from footnote c-eq-9-36 into the node's note; replaces (9.34)–(9.38) with "Writing α = |α|e^{iφ}" (a fact card) and "In other words"
- 9.1.2 non-orthogonality (9.39), same scan entry · score 6 (hidden run 5, "we can directly verify") · built as drv-coherent-state-overlap, after the sentence that states it, (9.39) removed and the "so they provide" clause joined to it
- 9.1.2 the P representation (9.43) · score 8 · not built: the notes cite the inversion formula from Scully and Zubairy rather than derive it (orchestrator's ruling)
- 9.1.2 linear optical transformations (9.44)–(9.52) · score 1 · not built: (9.45)–(9.49) and (9.51)–(9.52) are stated, and (9.50) is one display two hidden moves from (9.48) and (9.10), under the bar
