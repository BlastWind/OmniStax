# Config: Modern Atomic and Optical Physics II, Chapter 6

Set 2026-10-11 by the session on Chen's approval to build every remaining chapter in one go (no stops; plans written before building and left for review), on the terms of Chapter 2's config. Each line is a setting and its value.

| Setting | Value |
|---|---|
| Chapter | 6 Stochastic Wavefunctions; sections 6.1, 6.2, 6.3 |
| Front matter | `intro/`: the chapter's opening (two paragraphs, the Dalibard–Castin–Mølmer and Carmichael history), the book's words, no lead, objectives, summary or exercises |
| Unit of work | one section = one page, never folded (root 11), not even 6.3 |
| Order and loop | prep (chapter.json, concepts, symbols, intro page), then the three sections built in parallel, each writing its `plan.md` before building and leaving it for review after, then the chapter pass. No stops |
| Headers | no section has numbered subsections or run-in headings: each is one opening block; nothing invented. 6.1 may split before Table 6.1 only if its plan argues a block boundary the book marks (none expected) |
| Equations | `div.equation` with the book's number in `\tag` (6.1–6.26); a citation links to its equation |
| Table | Table 6.1 "Monte Carlo Procedure" (6.1), a one-column table of seven steps, kept as the book's table with its number; its step (3) and (7) slips noted in the plan and corrected as `correction` rows |
| Prose | verbatim; typos kept ("continous", "corresponds the state", "Schrodinger"); misprinted equations kept and named (6.10's missing tilde, 6.24's sign, 6.25's missing ⟨2|ψ⟩) with `correction` rows; 6.23/6.26's |a₂²| is not a misprint (|z²| = |z|², judged at 6.2) and carries none |
| Objectives, summary | left empty (6.3 "Summary" is a section, not a chapter summary) |
| Glossary | the one quoted term, "quantum jump"; other concepts carry the book's unquoted names ("stochastic or Monte Carlo wavefunctions", "effective Hamiltonian", "Liouvillian operator"); every mention judged for its `data-concept` span |
| Lead | written, AI-marked, on 6.1–6.3 |
| Exercises | none: no MIT 8.422 problem maps to Chapter 6 (`exploration.md`) |
| Figures | the book draws none. Candidates (root 24 gate in each plan): 6.1 a Table 6.1 Sim running the procedure on a two-level atom, one trajectory's ρ₂₂ jumping beside the average of N trajectories converging on the master-equation curve (moving, transport); 6.2 the no-jump population of Eq. (6.26) against e^{−γt}, sliders |a₂|² and Δ (still) — may fold into the 6.1 Sim if 6.1 builds it on 6.2's example; 6.3 none expected; 6.3 built `sim-weak-leak` (the leak ∫γρ₂₂ against |Ω| under the effective Hamiltonian beside the master equation), kept at the chapter pass by root 24: it shows the section's limit holding and failing, which 6.2's undriven Sim cannot |
| Extra sims | one-line suggestions in each plan; built only if picked |
| Concepts and colour | staged in `ch06/book-rows.json` by prep, merged with `ost merge lukin-amo-ii 6`; no new type |
