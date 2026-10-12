# Chapter 4 config: Applications of Derivatives

Status: agreed by carry-over 2026-10-12 (Chen: build every chapter straight through on Chapter 3's defaults, report afterwards).

1. Start: `ch04/intro/`, then 4.1–4.10.
2. Loop: prep / sections / chapter pass with no stops; plans and decisions reported to Chen afterwards (rule 5 review waived by Chen for this run).
3. Preface: built with Chapter 1.
4. Cross-volume references: no volume in the reader's text; "Section 6.6 of Volume 1" (15.6) becomes "Section 6.6", linked, with a note giving the printed words.
5. Numbering: openstax.org's chapter-wide numbers with the merged chapter prefix; slugs keep the volume's own.
6. Checkpoints: inline Try Its after their example, hint and answer behind reveals, kind `checkpoint`; no attainment.
7. Examples: kept whole in the text, Analysis included.
8. Definitions, theorems, rules: titled notes; definition → `definition`, theorem and corollary → `result`, problem-solving strategy → `skill`; no axioms.
9. Proofs: in the text under their theorem.
10. Section exercises: Exercises system, kind `exercise`; each card carries its group's "For the following exercises…" stem; "[T]" stays.
11. Review exercises: kind `review-exercise`, placed with the section that introduces what each tests, `source_section` the chapter's last module (4.10).
12. Unkeyed even exercises: computational ones left out and named in `exercise_notes`; proof and explain ones kept with an AI-marked approach (rule 13).
13. Answers: never generated; keyed answers from the book's solution.
14. Media / applet links: dropped, named in `notes`, each seeds a Sim candidate (4.7's box-volume video).
15. Student Projects: a note in the text with its question list; not exercises (4.9, Iterative Processes and Chaos).
16. Problem-Solving Strategy: a note.
17. Key Concepts → `summary_html`; Key Equations → the formulas list, "Theorems and formulas".
18. Graphs: every function graph drawn live from the book's function and numbers; graphs an exercise reads from are faithful still copies.
19. figlib: plot/shade/riemann/tangent/secant/drag/band exist; a section may add a part where its idea needs one, flagged in its report.
20. Photographs: chapter opener and photos an example points at kept (Figure 4.4 in Example 4.3); decoration dropped.
21. Types: the 18 of book.json on the hue-families palette; function, derivative and point are the chapter's main types, with line (tangent lines, the linear approximation L, asymptotes, Newton's tangents), limit (4.6), error (4.2) and integral (4.10); the rates of related-rates problems wear derivative and the quantities they relate stay ink; applied quantities to optimize wear function.
22. Sims (rule 15): the plan decides and builds its picks, reported afterwards.
23. 3D: none.
24. Reference sheets: the book's link to Appendix A (4.10, beside Table 4.13) opens the Table of Integrals sheet; no new sheets.
25. Recolour: the orchestrator reruns `colours:default -- calculus` at the end of the run.

Built 2026-10-12 on these defaults. Where the build departed: each section's plan was written just before its build (one agent built the chapter); 4.8's compared curves are `F.cat` instances rather than referents (`COLOR.md`); review exercises 526 and 528 and the unkeyed explanations named in each page's notes carry AI-marked answers, per item 12.
