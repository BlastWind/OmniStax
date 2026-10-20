# Config: Modern Atomic and Optical Physics II, Chapter 4

Set 2026-10-11 by the session on Chen's approval to build every remaining chapter in one go (no stops; plans written before building and left for review), on the terms of Chapter 2's config. Each line is a setting and its value.

| Setting | Value |
|---|---|
| Chapter | 4 Propagation of light in a resonant medium; sections 4.1, 4.2, 4.3 |
| Front matter | `intro/`: the chapter's opening (Eqs. 4.1–4.6: the atomic dipole, the macroscopic polarization, the three conditions for independent atoms, Maxwell's equations with P as source), the book's words, no lead, objectives, summary or exercises. Built by prep |
| Unit of work | one section = one page, never folded (root 11) |
| Order and loop | prep (chapter.json, concepts, symbols, intro page), then the three sections built in parallel, each writing its `plan.md` before building and leaving it for review after, then the chapter pass. No stops |
| Headers | 4.1 has no numbered subsection: an opening block and its one run-in heading "Generalizations of the SVEA" as an h2. 4.2: opening block, then h2s 4.2.1 Absorption and refraction, 4.2.2 Dispersion, 4.2.3 Two level systems (h3s "Resonant fields", "Far-detuned fields"), 4.2.4 Line-broadening mechanisms (h3 "Doppler broadening"). 4.3: the opening and its run-ins ("Resonant fields", "Far-detuned fields", "Weakly saturated regime", "Experimental considerations") stand before 4.3.1, so they are h2s; then h2 4.3.1 Saturation spectroscopy with h3 "The saturated absorption spectrum" |
| Equations | `div.equation` with the book's number in `\tag` (4.1–4.76; 4.7–4.9 inside 4.1's footnote 1, 4.22 an empty numbered line kept as a blank display); unnumbered aligned displays (4.3's weak-saturation expansion and χ₋ expansion) carry no tag; a citation links to its equation |
| Footnotes | 4.1's footnote on "wave equation for E", carrying Eqs. 4.7–4.9, a `footnotes` row of kind `book` |
| Prose | verbatim; typos kept ("focussing", "inhomogenous", "homogenously", "processes which affects", "susceptiblity", "detunings ,", "c.c,", "saturating absorption"); misprinted equations kept and named in the plan with `correction` rows (see `prep.md`) |
| Objectives, summary | left empty |
| Glossary | the quoted terms "unitary limit", "homogeneous", "inhomogenous", "self-phase modulation", plus the book's unquoted names (susceptibility, group velocity, Kerr effect, optical pumping, saturation spectroscopy) as concept `terms`; every mention judged for its `data-concept` span |
| Lead | written, AI-marked, on 4.1–4.3 |
| Exercises | none: no MIT 8.422 problem maps to Chapter 4 (`exploration.md`) |
| Figures | Figures 4.1–4.5 in the book. Candidates (root 24 gate in each plan): 4.2 Figure 4.1 Re χ and Im χ against δν (interactive, γ₁₂ slider, Re dashed and Im solid per COLOR.md), optionally a pulse crossing the medium, attenuated and delayed at v_g (moving); Figure 4.2 Doppler profile as a sum of shifted Lorentzians with a kv_T (temperature) slider, the Lorentzian to Gaussian crossover (still). 4.3 Figure 4.3 intensity against distance, linear then exponential decay, s slider (still, curve of the theory: integrates dI/dz ∝ −I/(1+I/I_sat)); Figures 4.4 + 4.5 folded: velocity distribution with the pump and probe holes at kv_z = ±(ν − Δ), ν slider, the Lamb dip in the probe absorption appearing as the holes meet (moving optional), with Figure 4.4's swapped labels corrected in the readout. 4.1 none expected (a comb spectrum against its pulse train is a Sim suggestion only) |
| Extra sims | one-line suggestions in each plan; built only if picked |
| Concepts and colour | staged in `ch04/book-rows.json` by prep, merged with `ost merge lukin-amo-ii 4`; no new type (σ̃ left untyped, see `prep.md`) |
