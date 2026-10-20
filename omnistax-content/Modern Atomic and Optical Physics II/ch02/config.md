# Config: Modern Atomic and Optical Physics II, Chapter 2

Set 2026-10-11 by the session on Chen's instruction "proceed with Lukin chap 2", on the terms of Chapter 1's agreed config. Each line is a setting and its value.

| Setting | Value |
|---|---|
| Chapter | 2 Basic processes in AMO physics and quantum optics; sections 2.1, 2.2, 2.3 |
| Front matter | none: the chapter prints no opening before 2.1 |
| Unit of work | one section = one page, never folded (root 11) |
| Order and loop | transcription of all three sections, then prep (chapter.json, concepts, symbols), then the three sections built in parallel, each writing its `plan.md` before building and leaving it for review after, then the chapter pass. No stops |
| Source | `tools/convert.py`, transcription by `tools/TRANSCRIBE.md`, `tools/checkprose.py` clean before planning |
| Headers | the book's numbered subsections are `<h2>` with their numbers ("2.3.4 Wigner-Weisskopf theory of spontaneous emission"); 2.1 is all 2.1.1 "The Two-Level Atom", so its blocks are the book's bold run-in headings promoted to `<h2>` without numbers, and 2.2 (no subsections) splits only at its run-in headings; any other run-in is `<h3>` |
| Equations | `div.equation` with the book's number in `\tag` (book RULES, Apparatus); a citation links to its equation |
| Prose | verbatim; typos kept and listed in `plan.md`; a misprinted equation is kept as printed and named in the plan, and a figure readout states the correct relation where they differ (as 1.3 did) |
| Objectives, summary | left empty |
| Glossary | the terms the book quotes at first use ("dressed states", "rotating wave approximation", "Rabi frequency") become concept `terms`; every mention judged for its `data-concept` span |
| Lead | written, AI-marked |
| Exercises | MIT 8.422 problems restated in Lukin's notation (Lukin's Ω is half MIT's; MIT's Γ is Lukin's γ), `origin: mit-8422`, `source_number` as MIT prints it ("Problem Set 7, Problem 3"), `changes` naming every alteration, AI-marked solution stating the answer and its reasoning (root 13): hw7.3 dressed states → 2.1; hw5.1 Rayleigh and Thomson scattering → 2.3; hw7.2 one atom and one photon → 2.3 (2.3.4). The book's invitation in 2.1.1 to show that its Hamiltonian gives the equations of motion is an inline Try It whose reveal is the book's own result |
| Held | a numerical MIT part with no key, named in `exercise_notes` |
| Figures | per root 24–28 and the book's RULES; the exploration's candidates: the Bloch sphere replacing Figure 2.3 (3D, mathematical: state vector precessing about the drive vector, sliders Ω and δ, p₂(t) strip beneath; moving), Rabi flopping with detuning carried by it or by its own strip, dressed-state energies ϵ± against δ replacing Figure 2.2b (still), a pulse-area figure (moving, π and π/2 as special values), Figure 2.1's level scheme redrawn (still); 2.2 and 2.3 judged in their plans (the outgoing photon wavepacket of 2.3.4, moving, is the leading candidate) |
| Extra sims | one-line suggestions in each plan; built only if picked |
| Concepts and colour | staged in `ch02/book-rows.json` by prep, merged with `ost merge lukin-amo-ii 2`; `colours:default` rerun only if a type is added (none expected) |
