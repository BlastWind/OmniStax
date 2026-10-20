# Plan: 8.1 Incorporating center of mass motion into atom-light interactions

Source: `source.md` (PDF pages 134–136, Eqs. 8.1–8.8, no figures, no footnotes, one run-in heading). Planned and built in one go (Chen approved building without stopping); this plan is left for review after.

## Blocks

No numbered subsections: an opening block, then the run-in heading as an `<h2>` without a number (config).

| id | `<h2>` | holds |
|---|---|---|
| `opening` | none | Eqs. 8.1–8.3: the moving atom's Hamiltonian and the position-dependent Ω(r̂) |
| `plane-wave` | Interactions with a plane wave | Eqs. 8.4–8.8: the plane wave's phase in the momentum basis, atomic recoil, the Doppler- and recoil-shifted resonance; `sim-recoil` at the end |

Every numbered display is `<div class="equation" id="eq-8-K">` with `\tag{8.K}`; (8.4)–(8.5) and (8.7)–(8.8) are two displays each, as printed. No equation citations in the prose; nothing misnumbered.

## Concepts (4, prep-merged)

| concept | introducing span |
|---|---|
| moving-atom-hamiltonian | `moving-hamiltonian` ("the Hamiltonian for a moving atom") |
| atomic-recoil | `atomic-recoil` ("This momentum transfer is known as “atomic recoil.”") |
| recoil-shifted-resonance | `resonant-frequency` ("the resonant frequency of this transition") |
| recoil-frequency | `recoil-energy` ("the recoil energy ω_R of the photon"); its form `eq-8-recoil-frequency` (ℏω_R = (ℏk)²/2m) is stated in 8.2, which anchors it |

`uses` rows: two-level-atom, rabi-frequency (`opening`); field-hamiltonian, system-reservoir-hamiltonian, spontaneous-emission, rotating-wave-approximation (`hamiltonian-parts`); rabi-oscillations, atomic-transition-frequency (`resonance`); spontaneous-emission-rate, raman-transition (`recoil-energy`'s paragraph `recoil-scale`).

Form anchors (`ost set … forms`): eq-8-1, 8-2, 8-3, 8-5, 8-6, 8-7, 8-8 → `8.1-eq-8-K`. (8.4) is the first line of (8.5)'s display pair and no form; eq-8-recoil-frequency left to 8.2.

Concept spans judged per mention. Wrapped: "an atom with only two relevant internal levels" (two-level-atom); "Rabi frequency" (rabi-frequency); "the Hamiltonian for a moving atom" (moving-atom-hamiltonian); "free-field Hamiltonian" (field-hamiltonian); "atom-field Hamiltonian", "the atom-laser Hamiltonian" (hamiltonian, the general operator, since no concept is the coupling term alone); "the atom-reservoir interaction" (system-reservoir-hamiltonian); "spontaneous emission"; "the RWA"; "momentum transfer between light and atoms", "This momentum transfer … “atomic recoil.”" (atomic-recoil); "Rabi oscillations"; "the internal transition energy ℏω₁₂" (atomic-transition-frequency); "the resonant frequency of this transition" (recoil-shifted-resonance); "the Doppler shift" (recoil-shifted-resonance, its term); "the recoil energy ω_R", "the recoil shifts", "the recoil shift" (recoil-frequency); "the optical relaxation rate" (spontaneous-emission-rate, γ); "two-photon transitions" (raman-transition). Plain: "atomic motion", "plane wave", "momentum eigenbasis", "completeness relations", "good quantum number", "external potential" (no concepts), "linewidth" (a property, not the rate concept), "laser cooling of multilevel atoms" (foreshadows 8.6 but names no concept).

## Symbols and variables (chapter 8, section 8.1)

`ost meanings` run for each. New symbols staged in `ch08/book-rows.json` (`ost add … symbols --chapter 8`): `p_cm` (`\kpcm`, plain p: the momentum eigenvalue the book writes unhatted in (8.4)–(8.8), and later sections' p(t)), `omega_res` (`\komegares`, ω_res), now the symbol of recoil-shifted-resonance (`ost set concepts`).

| sym | concept | type | meaning |
|---|---|---|---|
| H | moving-atom-hamiltonian | (energy) | redefines: the Hamiltonian of an atom moving in laser light, centre-of-mass motion included |
| p | none | momentum | redefines: the momentum operator p̂ of the atom's center of mass |
| p_cm | none | momentum | the atom's center-of-mass momentum, an eigenvalue of p̂ |
| r | none | length | redefines: the position operator r̂ of the atom's center of mass |
| m | none | mass | the mass of the atom |
| k | none | wavevector | the wavevector of the applied field (2.1's meaning) |
| k_mag | none | wavevector | the wavevector of the light, as (8.4)–(8.8) write it, unbold |
| V | none | energy | redefines: the external potential on the atom's center of mass |
| Omega | rabi-frequency | (coupling) | redefines: the Rabi frequency Ω(r̂) at the atom's position |
| phi | none | phase | redefines: the phase φ(r̂) of the laser at the atom's position |
| omega | atomic-transition-frequency | (frequency) | 2.1's meaning, written ω₁₂ |
| omega_R | recoil-frequency | (frequency) | the recoil frequency |
| omega_res | recoil-shifted-resonance | (frequency) | the resonant frequency of \|p⟩\|1⟩ → \|p + ℏk⟩\|2⟩ |
| gamma | spontaneous-emission-rate | (rate) | 2.3's meaning |

In ink: the components x̂, ŷ, ẑ; the bold **r** of k·r (2.1 left it in ink too); v in "pk/m = vk" (only `\kv`, bold, exists; one mention); the kets.

## Referents

The two levels (COLOR.md): `lvl-1` the ground state |1⟩, `lvl-2` the excited state |2⟩, one group, drawn by `sim-recoil`. Marked in prose where the text names the state (|1⟩, |2⟩, |p⟩|1⟩, |p + ℏk⟩|2⟩), never inside displays.

## Figures

The book draws none in 8.1. The section introduces one result, the Doppler- and recoil-shifted resonance (8.7)–(8.8), which the text derives in algebra only; root 14 gives it a figure, and it passes rule 24's gate (variation: the reader would otherwise have to imagine how the two shifts change with p).

- sim-recoil · Sim · atomic-recoil, recoil-frequency, recoil-shifted-resonance · variation by slider: the two levels drawn as the parabolas E = p²/2m and ℏω₁₂ + p²/2m against momentum, the absorption a diagonal step from |p⟩|1⟩ to |p + ℏk⟩|2⟩; dragging p the reader sees the step's height split into the tangent's rise (the Doppler shift pk/m, linear in p, changing sign with it) and the parabola's bend above its tangent (the recoil ℏk²/2m = ω_R, the same at every p), which (8.8) states and no still shows · arrows: symbolic (the absorption step and the brackets are notation; nothing moves) · still: p is a parameter, not a clock · slider p (momentum, −2 to 2 ℏk, default 1, no special: the text names no value) · headline: the start and end states with the live shift above ω₁₂ · graph alone, one frame with the energy axis broken between the two parabolas (ω₁₂ ≫ ω_R) · 2D (an energy-momentum relation). Units: momentum in ℏk, frequency in ω_R (the book gives no atom). Labels: |1⟩, |2⟩ on their parabolas, the two brackets (pk/m, ℏk²/2m), ω₁₂ on the jump, ω_res on the step; hover names on the three points, the step and the tangent. Readout: (8.8) with the live numbers, ω₁₂ + 2.0 ω_R + 1 ω_R = ω₁₂ + 3.0 ω_R.

`draws`: momentum, energy, frequency, wavevector, mass (the readout's k and m). No facts or conventions: the atom is unnamed.

### Extra sims (root 15), not built

- Rabi oscillations with recoil: p₂(t) for an atom starting in |p⟩|1⟩ under a laser at fixed ν, slider p; the reader watches the oscillation lose contrast as the Doppler shift detunes it from resonance, the velocity selectivity Doppler cooling (8.3) uses. 2.1's Bloch figure already shows contrast against detuning, so offered, not built.

## Exercises

None: the section prints no invitation and no MIT 8.422 problem maps to it (config).

## Notes and corrections

No footnotes. No correction: the suspected faults in `prep.md` were checked and none is an error.
- (8.4) writes k unbold where the prose writes **k**: notation, kept.
- "the recoil energy ω_R of the photon": the book names the frequency ω_R the recoil energy (ℏ understood), and "photon recoil energy" is the field's usual phrase; kept, and recoil-frequency carries "recoil energy" as its term (prep).
- "ω_R ∼ γ/400 ∼ 10 − 100 kHz": an order-of-magnitude estimate. With γ the population decay rate, ω_R/γ is 1/390 for Na (ω_R = 1.6 × 10⁵ s⁻¹, γ = 6.2 × 10⁷ s⁻¹), and ω_R/2π runs from 2 kHz (Cs) to 74 kHz (Li); the statement holds to the "∼" it is written with, so it is not corrected.
- Eqs. (8.6)–(8.8) checked: (p + ℏk)²/2mℏ − p²/2mℏ = pk/m + ℏk²/2m.

## Objectives, summary, notes

Objectives and summary empty (config). `notes` empty: nothing is left out.

## Lead draft (AI-marked)

> How an atom's center-of-mass motion enters its interaction with laser light: the Hamiltonian of a moving two-level atom, the momentum a plane wave gives the atom when it drives a transition, and the Doppler and recoil shifts this brings to the resonance.

## Wanted at chapter level

- New symbols `p_cm` (`\kpcm`, plain p, momentum) and `omega_res` (`\komegares`) are staged and merged; 8.2–8.6 should write the unhatted atomic momentum p with `\kpcm` (p̂ stays `\kp`).
- recoil-frequency's form `eq-8-recoil-frequency` is stated in 8.2 (inline ℏω_R = (ℏk)²/2m); 8.2 sets its `anchor` (and `section` if the form needs one) since the concept's own section is 8.1.
- `k_mag` (plain k) carries 8.1's row; later sections writing k unbold reuse it.
- Chapter pass: `p_cm`, `k_mag` and `eq-8-recoil-frequency` stand as staged; no change.

## Derivations

- Interactions with a plane wave (8.4)–(8.8) · block (score 2) · built as two at the book's break: drv-plane-wave-coupling ((8.4)–(8.5) by two completeness relations, then (8.6) from (8.2)–(8.3)), after the paragraph that sets up the momentum basis, and drv-recoil-shifted-resonance ((8.7)–(8.8)), after the paragraph on the resonance; "Using two completeness relations, we find" and "Rewriting the atom-laser Hamiltonian," go into the work, "we see immediately" opens its sentence, and "the resonant frequency of this transition is" ends "is shifted."
