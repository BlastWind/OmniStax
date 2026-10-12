# Chapter 9 config: Sequences and Series

Status: agreed by carry-over 2026-10-12 (Chen: build the book straight through on Chapter 3’s defaults, report afterwards). Built 2026-10-13; the build changed or settled the defaults below where marked.

1. Start: `ch09/intro/`, then 9.1–9.6.
2. Loop: prep / sections / chapter pass with no stops; plans and decisions reported to Chen afterwards (rule 5 review waived by Chen for this run).
3. Preface: built with Chapter 1.
4. Cross-volume references: no volume in the reader's text; a reference in a volume's own numbering is reworded with a note giving the printed words. In this chapter: 9.5's "Theorem 5.13" (Volume 2's number for the Alternating Series Test) becomes "Theorem 9.13", linked to that note. 9.1's two links to "Introduction to Limits" open `ch02/intro/` as printed.
5. Numbering: openstax.org's chapter-wide numbers with the merged chapter prefix (Volume 2's 5.N is 9.N); slugs keep the volume's own (`calculus-volume-2/pages/5-1-sequences`).
6. Checkpoints: inline Try Its after their example, hint and answer behind reveals, kind `checkpoint`; no attainment.
7. Examples: kept whole in the text, Analysis included.
8. Definitions, theorems, rules: titled notes; definition → `definition`, theorem → `result`, problem-solving strategy → `skill`; no axioms.
9. Proofs: in the text under their theorem.
10. Section exercises: Exercises system, kind `exercise`; each card carries its group's "For the following exercises…" stem; "[T]" stays.
11. Review exercises: kind `review-exercise`, placed with the section that introduces what each tests, `source_section` 9.6.
12. Unkeyed even exercises: computational ones left out and named in `exercise_notes`; proof, "explain", "show that", true-or-false and "does it converge, and why" ones kept with an AI-marked answer (rule 13).
13. Answers: never generated; keyed answers from the book's solution, a keyed plot as the answer's figure.
14. Media / applet links: dropped, named in `notes`, each seeds a Sim candidate.
15. Student Projects (9.1 Fibonacci Numbers, 9.2 Euler's Constant, 9.6 Series Converging to π and 1/π): a note in the text with its question list; not exercises.
16. Problem-Solving Strategy (9.6 Choosing a Convergence Test): a note.
17. Key Concepts → `summary_html`; Key Equations → the formulas list, "Theorems and formulas".
18. Graphs: every graph of a sequence, a series' partial sums or a function drawn live from the book's formulas and numbers; graphs an exercise reads from are faithful copies or kept images.
19. figlib: no new part expected; sequences are dots on `axes`, rectangles drawn as in 5.1.
20. Photographs: the opener (Koch iterations) and the two photographs of 9.1's Student Project, which its text points at, kept; nothing else is a photograph.
21. Types: the 18 of book.json on the hue-families palette; `sequence` the terms aₙ, bₙ, cₙ and their dots, `series` Σ, a series and its partial sums Sₖ, `limit` the limit L of a sequence, the sum S of a series and ρ of the ratio and root tests, `error` the remainder Rₙ, `function` f with f(n) = aₙ, `integral` the integrals of the integral test and its remainder estimate; r, p, a, N, M, ε in ink; applied quantities wear their maths type.
22. Sims (rule 15): the plan decides and builds its picks, reported afterwards.
23. 3D: none.
24. Reference sheets: the Grapher on a function the prose gives by its rule; the Table of Convergence Tests stays the book's Table 9.3 (a chooser sheet is planned for later and not built here); no new sheets.
25. Recolour: `colours:default -- calculus` is run by the orchestrator at the end of the run, not in the chapter pass.
26. Equations: Equations 9.1–9.14, numbered as openstax.org numbers them (exploration), carry `\tag{9.N}`, so the text's "Equation 9.N" names a visible number.
27. Two or three sequences or series the text names apart on one graph are referents (the squeeze's aₙ, bₙ, cₙ; 9.4's given and comparison series).
28. Folds (built): Figures 9.12 + 9.13 + 9.14 (rectangles over or under 1/xᵖ, p across 1) and 9.17 + 9.18 (the alternating zig-zag for 1/n and 1/n²); every other figure is its own Sim.
29. Extra Sims (built, rule 15): 9.2's geometric series and telescoping series, 9.4's limit comparison, 9.5's rearrangement, 9.6's ratio and root tests.
30. Stems (built): a "For the following exercises" stem is carried only by the exercises it describes; cards the book leaves under a stem that does not describe them carry none (9.1 5–11, 38–39, 58–64; 9.2 115–116, 121–137; 9.3 183–184, 189–193; 9.4 222–249; 9.5 292–293, 298–305, 308–316; 9.6 368–375).
