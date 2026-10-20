# Config: Modern Atomic and Optical Physics II, Chapter 3

Set 2026-10-11 by the session on Chen's approval to build every remaining chapter in one go (no stops; plans written before building and left for review), on the terms of Chapter 2's config. Each line is a setting and its value.

| Setting | Value |
|---|---|
| Chapter | 3 Mathematical methods for open systems; sections 3.1, 3.2, 3.3, 3.4 |
| Front matter | `intro/`: the chapter's opening (two paragraphs: open systems, the “system” and the “environment” or “reservoir”), the book's words, no lead, objectives, summary or exercises (built by prep) |
| Unit of work | one section = one page, never folded (root 11) |
| Order and loop | prep (chapter.json, concepts, symbols, intro page), then the four sections built in parallel, each writing its `plan.md` before building and leaving it for review after, then the chapter pass. No stops |
| Headers | 3.1 and 3.2 have no numbered subsections and no run-in headings: each is one opening block, 3.1's two examples ("Example 1: Two-level atom in thermal equilibrium", "Example 2: Radiation field in thermal equilibrium") its h2s after the opening. 3.3 opens with a block before 3.3.1, then `<h2>` 3.3.1 General formalism, 3.3.2 Properties of the environment (run-ins "Random variables", "Correlation time" as `<h3>`), 3.3.3 Density operator method for a Markovian reservoir (the plan may split it only where the book marks a boundary; it prints no run-in, so none expected). 3.4: `<h2>` 3.4.1 Remarks on the generalized master equation, 3.4.2 Example: The two-level atom, 3.4.3 Atomic response to a resonant field (run-ins "Weak applied field", "Continuous-wave fields of arbitrary strength" as `<h3>`) |
| Equations | `div.equation` with the book's number in `\tag` (3.1–3.104); a citation links to its equation ("the integrand 3.57", "Eq. (3.89)" meaning 3.86–3.89: linked to 3.86 and named in the plan) |
| Prose | verbatim; typos kept ("correspnds", "Ĥ_S R", "Schrodinger", "loosing" is MIT's not ours); misprinted equations kept and named with `correction` rows (see `prep.md`) |
| Objectives, summary | left empty |
| Glossary | the quoted terms: "pure state", "mixed state", "statistical mixture", "maximal coherence", "stationary processes", "Gaussian", "reversible evolution", "Markovian environment", "Born-Markov Approximation", "master equation", "optical Bloch equations", "rate equations"; unquoted names ("density operator", "reduced density operator", "dephasing rate") carried as terms too; every mention judged for its `data-concept` span |
| Lead | written, AI-marked, on 3.1–3.4 |
| Exercises | MIT 8.422 problems restated in Lukin's notation (Lukin's Ω is half MIT's; MIT's Γ is Lukin's γ; |e⟩,|g⟩ are |2⟩,|1⟩), `origin: mit-8422`, AI-marked solutions: hw6.3 physical origin of T₂ (phase damping) → 3.4 after 3.4.2 (γ_d); hw7.1 optical Bloch equations, weak and short-time limits → 3.4 after 3.4.3. No inline Try It (the book prints no invitation) |
| Held | none expected: both problems are derivations |
| Figures | the book draws none in this chapter. Candidates (root 24 gate in each plan), from `exploration.md`: 3.4 the Bloch vector shrinking into the sphere under γ and γ_d (pure on the surface, mixed inside; |ρ₁₂|² ≤ ρ₁₁ρ₂₂ made visible) with the damped Rabi oscillation of ρ₂₂ settling to R_opt/(γ + 2R_opt), saturating at ½ as Ω grows: one Sim, moving, sliders Ω, δ, γ_d. 3.1 the thermal populations of Eq. (3.12) against k_BT/ℏω (still) only if its plan argues it; 3.3 the spin in a fluctuating field (many realizations dephasing, a spin echo refocusing them for t < τ_c and failing for t ≫ τ_c; moving) is the leading candidate |
| Extra sims | one-line suggestions in each plan; built only if picked |
| Concepts and colour | staged in `ch03/book-rows.json` by prep, merged with `ost merge lukin-amo-ii 3`; no new type |
