# Plan: 11.7 Higher-order coherence of atomic matter waves

Source: `source.md` (PDF pages 281–284, Eqs. 11.168–11.176, Figure 11.13, no footnotes). Planned and built in one go (config: Chen approved building without stopping); this plan is left for review after.

## Blocks

| id | `<h2>` | holds |
|---|---|---|
| `opening` | none | the opening paragraph (`higher-order`, the cite target of the exercises) |
| `double-well` | 11.7.1 Toy model: cold, interacting atoms in a double-well potential | its first sentence; h3 "Noninteracting atoms" (Eqs. 11.168–11.171, Figure 11.13 after Eq. 11.168, where the book stands it); h3 "Strongly interacting atoms" (Eqs. 11.172–11.175, the closing paragraph) |
| `optical-lattice` | 11.7.2 Optical lattice potentials | two paragraphs, Eq. 11.176 |

Every numbered display is `<div class="equation" id="eq-11-K">` with `\tag{11.K}`.

## Concepts (5, prep-merged)

| concept | introducing span |
|---|---|
| double-well-model | `double-well-span` ("N cold atoms confined to the double-well potential") |
| double-well-coherent-ground-state | `coherent-gs` ("The ground state of the system \|φ_N⟩ has all N atoms in the single-particle symmetric superposition state \|+⟩") |
| double-well-fock-ground-state | `fock-gs` ("generating a highly non-classical Fock state") |
| nonclassical-matter-requirements | `nonclassical` ("creating non-classical states of matter requires a system where interactions are stronger than kinetic energy") |
| optical-lattice-potential | `lattice-potential` ("an optical lattice potential to confine atoms") |

Forms anchored at `11.7-eq-11-168`, `-169`, `-173`, `-176`.

`uses`: nonclassical-light ("Quantum states of light"), second-order-correlation ("higher order coherences"), bose-condensation ("a BEC"), condensate-interference-fringes ("an interference pattern", "a first-order interference pattern"), gross-pitaevskii-equation (twice), second-quantization, coherent-state, coherent-amplitude (α of Eqs. 11.170–11.171), fock-states ("Fock states of atoms"), dissipation-destroys-nonclassicality ("losses … destroy non-classical coherences"), optical-lattice (11.7.1's "an optical lattice"), s-wave-scattering-length, feshbach-resonance, dipole-force, ac-stark-shift.

Spans judged per mention. Wrapped as above, plus "classical Josephson device" (twice) → double-well-coherent-ground-state (its term), "The optical lattice", "a simple cubic lattice with a potential", "The optical lattice potential" → optical-lattice-potential, "the double-well potential" (11.7.2) → double-well-model. Plain: "non-classical states" of the opening (the question, not yet the idea), "nonlinearity", "kinetic energy or tunnelling terms", "delocalized states", "repulsive interaction", "red-detuned light source", "standing wave", "tunnelling rate between lattice sites" and "interaction strength for atoms occupying the same lattice site" (11.8's lattice-hopping and on-site-interaction, introduced there), headings.

## Symbols and variables (chapter 11, section 11.7)

`ost meanings` run for each. New book symbols (staged with `ost add symbols --chapter 11`): `phi_L` (φ_L, `\kphiL`), `phi_R` (φ_R, `\kphiR`), `E_dw` (E, `\kEdw`).

Rows: `t` (coupling, `redefines`: the tunnelling amplitude between the wells, J; no concept, per prep's call); `U_0` (energy, `redefines`: the interaction energy of a pair of atoms in one well, J, since (11.172) multiplies a pair count, not a density; no concept, the on-site interaction is 11.8's); `alpha_coh` → coherent-amplitude (9.1's meaning); `phi_L`, `phi_R` (phase, `ref` well-L, well-R); `E_dw` (energy, the energy of the atoms in the double well); `a_scat` → s-wave-scattering-length (11.5's meaning); `V` (energy, 11.5's meaning); `lambda` (length, 8.2's meaning). In ink: N, the operators â_L, â_R, n̂_L, n̂_R, Ĥ_kin, Ĥ_int (book RULES: operators untyped), x, y, z.

## Referents

One group: `well-L` (the left well), `well-R` (the right well), both drawn by `sim-double-well`. Text marks: "the left and right potential well" split, "the particles on the left" / "on the right", "the two wells" (twice) as `well-L well-R`, φ_L and φ_R through their rows' `ref`.

## Figures

- sim-double-well · Figure 11.13 · double-well-model, double-well-coherent-ground-state, double-well-fock-ground-state · variation by slider: the book draws the well and its levels once; the figure adds what the text argues in words, the N-atom ground state of Eqs. (11.168) + (11.173), found by exact diagonalization in the number basis, going from the binomial spread of n_L of Eq. (11.169) (all atoms in |+⟩, ⟨â_L†â_R⟩ = N/2) to the single Fock bar at n_L = N/2 (⟨â_L†â_R⟩ → 0) as U₀/t rises; the occupations of |+⟩ and |−⟩, N/2 ± ⟨â_L†â_R⟩, are bars on the levels, so the reader sees atoms paying the ∼t price of the text to avoid each other · arrows: the tunnelling arrow over the barrier is notation for the coupling t, labelled t, symbolic (an eigenstate is stationary; nothing flows) · still: U₀/t and N are parameters, there is no clock · sliders log₁₀(U₀/t) (untyped ratio, −3 to 3, default −3, integer detents: six decades are needed, from U₀ ≪ t/N to U₀ ≫ Nt) and N (untyped, 2 to 40, step 2, default 20; even, so the Fock state of (11.175) exists) · headline: the regime, the live U₀/t and N, and Δn_L · scene above graph: the scene is horizontal (the double well, |L⟩ and |R⟩ as short solid segments in the referent colours, |+⟩ and |−⟩ dashed across both wells, the 2t bracket in the coupling hue), the graph below is P(n_L) bars in the population hue with the U₀ = 0 binomial as hollow markers · 2D (book RULES: potentials are 2D curves). Labels: |L⟩, |R⟩, |+⟩, |−⟩, t, 2t (six, none on moving things); the bars and markers by legend and hover. Readout: E₀ = −2t⟨â_L†â_R⟩ + U₀⟨n̂_L(n̂_L−1) + n̂_R(n̂_R−1)⟩ with the live expectation values, U₀ in units of t, and the sum; note: ⟨â_L†â_R⟩ against N/2 and Δn_L against the binomial's √N/2. The scene draws the book's Figure; the original is `/media/ch11/fig-11-13.png` with its caption.

`draws`: coupling, energy, population. No facts or conventions (no named element).

### Extra sims (root 15), not built

- The classical Josephson device: two coherent states with phases φ_L, φ_R, the energy −Nt cos(φ_R − φ_L) as a cosine against the phase difference, and the mean-field Josephson oscillation of the population imbalance when the phase is kicked (moving); opens the large-N classical picture the text names in one sentence.
- The 1D lattice of Eq. (11.176) with the harmonic confinement: V(x) along one axis as the depth rises, the tunnelling between neighbouring sites falling as the barrier grows (still); 11.8's figures cover the lattice's physics, so this is offered only.

## Exercises

No inline invitation in the reading. MIT 8.422 Problem Set 4, Problem 2 (hw4.2, "Hanbury Brown and Twiss Experiment with Atoms", verified in `source/mit-8422/hw4.pdf`, page 2–3), in the Exercises document, `kind: problem`, `origin: mit-8422`, `place.at: end`, `cite: higher-order`, five parts each repeating the problem's setting: (a) P against r₂₁ for bosons and fermions; (b) the transverse collimation argument Ww ≪ dλ_dB; (c)(i) ⟨P⟩ over the Gaussian distribution of wavevector differences; (c)(ii) the geometric velocity selection |(k_A − k_B)_l| ≤ mvL/ℏd; (d) the coherent cell grows by d³/W²L. AI-marked solutions in Lukin's symbols. Alterations named in `changes`: MIT's γ in p = e^{−|k_A−k_B|²γ²} written with ∆k = 1/γ (γ is a decay rate in Lukin); MIT's λ_dB, h/p at k₀, said in the prompt not to be the thermal λ_dB of Eq. (11.1); the figure described in words; numerical sentences left out. Held (named in `exercise_notes`): the ⁶Li MOT's λ_dB and size bound in (b), the timing resolution in (c)(ii), the order of magnitude and the cell occupations in (d). `exercise_concepts`: (a) hanbury-brown-twiss, photon-bunching, second-order-correlation; (b) hanbury-brown-twiss, de-broglie-wavelength; (c)(i) second-order-correlation, photon-bunching; (c)(ii) hanbury-brown-twiss; (d) hanbury-brown-twiss, de-broglie-wavelength. The fit is loose (prep): the section's higher-order coherence is the double well's, not atom detection; it is the course's one matching problem.

## Lead draft (AI-marked)

> Whether atomic interactions can make non-classical states of matter: a toy model of N atoms tunnelling between the two sides of a double-well potential, without interactions and with strong repulsion, and the optical lattice potentials that confine atoms in arrays of such wells.

## Objectives, summary, notes

`objectives` and `summary_html` empty; `notes` empty (nothing left out).

## Book faults kept verbatim

- "Gross-Pitaevski" (twice); "tunnel between them at rate t" (t is an energy, kept); Eq. (11.172) without the conventional 1/2, consistent with (11.173), no row.

## Corrections

| id | marker after | the book prints | note |
|---|---|---|---|
| c-eq-11-171 | Eq. (11.171) | the same eigenvalue α in (11.170) and (11.171), then \|α_R\|² = \|α\|² = N/2 | each well has its own amplitude, α_R and α_L, with \|α_R\|² = \|α_L\|² = N/2 |
| c-number-uncertainty | "goes as 1/√N" | the number uncertainty going as 1/√N | the absolute uncertainty √(N/2) grows; the relative one falls as 1/√N |
| c-josephson | the Josephson energy | E = −(Nt/2)cos(φ_R − φ_L) | Eq. (11.168) with \|α_{L,R}\|² = N/2 and real t gives −Nt cos(φ_R − φ_L), whose minimum −Nt is N atoms in \|+⟩ at −t each |
| c-eq-11-175 | Eq. (11.175) | (â_L†â_R†)^N\|vac⟩ | holds 2N atoms, unnormalized; the N-atom state is (â_L†â_R†)^{N/2}\|vac⟩/(N/2)! |

## Wanted at chapter level

- New book symbols `phi_L`, `phi_R`, `E_dw` staged in `ch11/book-rows.json`.
- `U_0` carries a 11.7 meaning with `redefines` (an energy per pair in one well, J), where 11.5's is 4πℏ²a/m (J·m³); 11.8's on-site U₀ is the same quantity as 11.7's, and the chapter pass may link both to `on-site-interaction`.
- `t` (coupling, `redefines`) has no concept in 11.7; 11.8 may link its row to `lattice-hopping`.

## Build notes

Built 2026-10-11: `ost check --section 11.7` ok; astro build ok (55 pages); Playwright in light and dark: no console, page or KaTeX errors, the figure has its canvas and no transport, eyebrow "Figure 11.13", four correction markers [1]–[4]. Screenshots at log₁₀(U₀/t) −3, 0, 0.5, 1, 3 with N 2, 20, 40. One fix pass: the population bars now stay inside the walls, and the readout gives the interaction expectation two decimals below 100 so the sum reads true for small N. The ground-state solver was checked against numpy's eigh (N = 2, 20, 40; U₀/t 10⁻³ to 10³).

## Derivations

- 11.7.1 the Josephson energy of two coherent states, E = −(Nt/2)cos(φ_R − φ_L) · score 4 · not built: three hidden moves, below the four-move bar (its prefactor keeps the c-josephson correction row).
- 11.7.1 the interaction Hamiltonian in number operators (11.172) → (11.173) · not in the scan · not built: one move (b†b†bb = n(n − 1)), a restatement.
