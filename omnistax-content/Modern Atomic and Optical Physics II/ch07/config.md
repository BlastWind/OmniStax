# Config: Modern Atomic and Optical Physics II, Chapter 7

Set 2026-10-11 by the session on Chen's approval to build every remaining chapter in one go (no stops; plans written before building and left for review), on the terms of Chapter 2's config. Each line is a setting and its value.

| Setting | Value |
|---|---|
| Chapter | 7 Adiabatic Processes; sections 7.1, 7.2, 7.3, 7.4 |
| Front matter | `intro/`: the chapter's one-paragraph opening, the book's words, no lead, objectives, summary or exercises |
| Unit of work | one section = one page, never folded (root 11) |
| Order and loop | prep (chapter.json, concepts, symbols, intro page), then the four sections built in parallel, each writing its `plan.md` before building and leaving it for review after, then the chapter pass. No stops |
| Headers | numbered subsections are `<h2>` with their numbers (7.1.1, 7.2.1, 7.2.2, 7.3.1, 7.3.2, 7.4.1 "Remarks"), after an opening block where the section prints one; run-in headings inside them are `<h3>` ("Adiabatic return", "Adiabatic passage", "Exactly solvable system: the Landau-Zener model", the five 7.4.1 remarks); 7.4 opens with the run-ins "Analysis of the adiabaticity condition" and "Error due to quantum jumps" before 7.4.1, promoted to `<h2>` without numbers |
| Equations | `div.equation` with the book's number in `\tag` (7.1–7.65; 7.54–7.55 sit in footnote 3 of 7.4); a citation links to its equation |
| Footnotes | per chapter: 1 (7.1, Berry phase), 2 and 3 (7.4), 4 (7.4.1) as `footnotes` rows |
| Prose | verbatim; typos kept ("to is applicability", "approach us thus", "the the", "superpostion", c₂⁽²⁾, the misspelt Alzetta citation); misprinted equations kept and named with `correction` rows (see `prep.md`) |
| Wrong citations | 7.2.1 "(see Fig. (9.3)" links to Figure 7.1; "as noted in the previous lecture" (7.4.1) left unlinked, named in the plan |
| Objectives, summary | left empty |
| Glossary | the quoted terms (“adiabatic”, “geometric”/“Berry's”, “dynamical”, “rapid”, “counterintuitive”) and the subsection names ("Rapid adiabatic passage", "Landau-Zener model", "STIRAP", "partially diagonalized basis") are concept `terms`; every mention judged for its `data-concept` span |
| Lead | written, AI-marked, on 7.1–7.4 |
| Exercises | none: no MIT 8.422 problem maps to Chapter 7 (`exploration.md`) |
| Licence | Figures 7.3 (STIRAP transfer data) and 7.6 (neon beamsplitter data) are experimental and never copied: recomputed from the model with the experiment named in the caption, or left out and named in `notes` |
| Figures | 7.2: Figure 7.1 (adiabatic passage and return) as an interactive figure: ϵ±, Δ, Ω and P₁, P₂ against time, a choice passage/return, sweep-speed slider showing Landau–Zener failure (moving); the RAP Bloch-sphere Sim from `exploration.md` judged against it in the plan. 7.3: Figure 7.2 STIRAP pulse sequence live (sliders delay and two-photon detuning δ, P₁ P₂ P₃ against time, θ and the dark state on the level diagram; reversing the order loses population to |3⟩) with Figure 7.3 recomputed from the model (transfer against delay, and against the two detunings) folded in or as its own still; Figure 7.4 four-level scheme redrawn (still). 7.4: Figure 7.5 pulse sequence redrawn (still or folded into a four-level Sim); Figure 7.6 redrawn from the model or left out; Figure 7.7 the J = 1 → J′ = 1 scheme in two bases (still, a choice parallel/perpendicular). Figures 7.5–7.6 sit in 7.4's pages but belong to 7.3.2: 7.4 keeps them where the book prints them |
| Extra sims | one-line suggestions in each plan; built only if picked |
| Concepts and colour | staged in `ch07/book-rows.json`, merged with `ost merge lukin-amo-ii 7`; no new type |
