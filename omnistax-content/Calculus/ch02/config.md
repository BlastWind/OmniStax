# Chapter 2 config: Limits

Status: agreed 2026-10-12 (Chen: build Chapters 1 and 2 through, report plans and decisions afterwards; defaults carried from Chapter 1).

1. Start: `ch02/intro/`, then 2.1–2.5.
2. Loop: prep / sections / chapter pass with no stops; plans and decisions reported to Chen afterwards (rule 5 review waived by Chen for this run).
3. Preface: built with Chapter 1.
4. Cross-volume references: printed words kept; "Section 6.6 of Volume 1" (15.6) links to 6.6 with no note.
5. Numbering: openstax.org's chapter-wide numbers with the merged chapter prefix; slugs keep the volume's own.
6. Checkpoints: inline Try Its after their example, hint and answer behind reveals, kind `checkpoint`; no attainment.
7. Examples: kept whole in the text, Analysis included.
8. Definitions, theorems, rules: titled notes; definition → `definition`, theorem and rule → `result`, problem-solving strategy → `skill`; no axioms.
9. Proofs: in the text under their theorem.
10. Section exercises: Exercises system, kind `exercise`; each card carries its group's "For the following exercises…" stem; "[T]" stays.
11. Review exercises: kind `review-exercise`, placed with the section that introduces what each tests, `source_section` 2.5.
12. Unkeyed even exercises: computational ones left out and named in `exercise_notes`; proof and explain ones kept with an AI-marked approach (rule 13).
13. Answers: never generated; keyed answers from the book's solution.
14. Media / applet links: dropped, named in `notes`, each seeds a Sim candidate.
15. Student Projects: a note in the text with its question list; not exercises.
16. Problem-Solving Strategy: a note.
17. Key Concepts → `summary_html`; Key Equations → the formulas list, "Theorems and formulas".
18. Graphs: every function graph drawn live from the book's function and numbers; graphs an exercise reads from are faithful still copies.
19. figlib: plot/shade/riemann/tangent/secant/drag exist; a section may add a part where its idea needs one (an ε–δ band pair is likely), flagged in its report.
20. Photographs: chapter opener and photos an example points at kept; decoration dropped.
21. Types: the 18 of book.json; limit, point, set, line, function and error are the ones this chapter uses; applied quantities wear their maths type.
22. Sims (rule 15): the plan decides and builds its picks, reported afterwards.
23. 3D: none.
24. Reference sheets: no new ones.
25. Recolour: rerun `colours:default -- calculus` in the chapter pass.
