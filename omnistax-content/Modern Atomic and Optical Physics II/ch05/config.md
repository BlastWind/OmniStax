# Config: Modern Atomic and Optical Physics II, Chapter 5

Set 2026-10-11 by the session on Chen's approval to build every remaining chapter in one go (no stops; plans written before building and left for review), on the terms of Chapter 2's config. Each line is a setting and its value.

| Setting | Value |
|---|---|
| Chapter | 5 Coherent interactions in multi-level systems; sections 5.1, 5.2, 5.3 |
| Front matter | `intro/`: the chapter's opening (the three classes of multi-photon process) with Figure 5.1, the book's words, no lead, objectives, summary or exercises |
| Unit of work | one section = one page, never folded (root 11) |
| Order and loop | prep (chapter.json, concepts, symbols, intro page), then the three sections built in parallel, each writing its `plan.md` before building and leaving it for review after, then the chapter pass. No stops |
| Headers | numbered subsections are `<h2>` with their numbers ("5.1.4 Large detuning $\Delta$, weak $\Omega_1$", "5.3.1 Example: the cascade system"); run-in headings inside them are `<h3>` ("Dressed state interpretation", the four Remarks of 5.1.6, "Phase-matching"); 5.1 and 5.3 open with a block before their first h2; 5.2.1 is the one numbered subsection of 5.2 and its run-ins are h3 |
| Equations | `div.equation` with the book's number in `\tag` (5.1–5.82); a citation links to its equation; the empty numbered rows (5.20), (5.71) are kept as empty displays carrying their tags |
| Prose | verbatim; typos kept ("Louvillian", "singe-photon", "typcially", "configuation", "mathmatical", "approprately", "the the"); wrong citations kept with the link to the figure meant ("Figure 9.3" → 5.2, "Figure 7.3" → 5.1, in the intro and 5.1.6); misprinted equations kept and named in the plan with `correction` rows (5.24–5.27 brace labels against 5.17–5.18, 5.35's halves, the k_i identity after 5.75, the factor 2 before 5.79) |
| Objectives, summary | left empty |
| Glossary | the book's quoted terms: "dresses" (5.1), "dark resonance", "slow light", "electro-magnetically induced transparency", "counter-intuitive pulse sequence" (5.2), "nonlinear black box", "phase-matching condition" (5.3); other concepts carry the book's unquoted names; every mention judged for its `data-concept` span |
| Lead | written, AI-marked, on 5.1–5.3 |
| Exercises | none: no MIT 8.422 problem maps to Chapter 5 (`exploration.md`); 5.2's "see problem set 3" (twice) is the Harvard course, kept verbatim |
| Figures | per root 24–28 and the book's RULES. Figure 5.1 (intro): still faithful copy, built in prep. Figure 5.2 (Λ scheme with Δ₁, Δ₂, δ and decay squiggles): still faithful level diagram, the two fields referents. Figures 5.3–5.5 folded into one EIT Sim (exploration item 23): Im and Re of ρ₃₁/Ω₁ against probe detuning from Eq. (5.33), sliders Δ and |Ω₂| (γ₁₂ too), the Raman double resonance at large Δ (5.3) merging and broadening as Δ falls (5.4), the dark resonance at Δ = 0 (5.5); still, reports "Figure 5.3 + 5.4 + 5.5". Candidate Sims (5.2): the dark state on the level diagram, |3⟩ empty, with a counter-intuitive pulse pair moving |1⟩ into |2⟩ (moving; may defer to 7.3's STIRAP figure, judged in the plan); slow light as a pulse compressing by v_g/c (moving). Candidate (5.1.5): two-photon Rabi oscillation between |1⟩ and |2⟩ at large Δ with the small |3⟩ population (moving). Figure 5.6 (cascade and hydrogen 1s, 2s, 2p): still faithful copy. Figure 5.7: |Ẽ₃(z)| from Eq. (5.76) with a Δk slider, the linear growth at Δk = 0 (still) |
| Extra sims | one-line suggestions in each plan; built only if picked |
| Concepts and colour | staged in `ch05/book-rows.json` by prep, merged with `ost merge lukin-amo-ii 5`; no new type. Levels |1⟩, |2⟩, |3⟩, |±⟩, |D⟩, |B⟩ and the two fields are referents per section (COLOR.md) |
