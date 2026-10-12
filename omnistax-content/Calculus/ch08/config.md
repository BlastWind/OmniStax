# Chapter 8 config: Introduction to Differential Equations

Status: agreed by carry-over 2026-10-12 (Chen: build the book straight through on Chapter 3's defaults, report afterwards).

1. Start: `ch08/intro/`, then 8.1–8.5.
2. Loop: prep / sections / chapter pass with no stops; plans and decisions reported to Chen afterwards (rule 5 review waived by Chen for this run).
3. Preface: built with Chapter 1.
4. Cross-volume references: no volume in the reader's text; "Section 6.6 of Volume 1" (15.6) becomes "Section 6.6", linked, with a note giving the printed words. None in this chapter: 8.4's "an earlier chapter … Exponential Growth and Decay" links 6.8 and 8.5's "Differentiation Rules" links 3.3, both as printed.
5. Numbering: openstax.org's chapter-wide numbers with the merged chapter prefix (Volume 2's 4.N is 8.N); slugs keep the volume's own (`calculus-volume-2/pages/4-1-basics-of-differential-equations`).
6. Checkpoints: inline Try Its after their example, hint and answer behind reveals, kind `checkpoint`; no attainment.
7. Examples: kept whole in the text, Analysis included.
8. Definitions, theorems, rules: titled notes; definition → `definition`, theorem and rule → `result` (Euler's Method and the Solution of the Logistic Differential Equation are theorem notes), problem-solving strategy → `skill`; no axioms.
9. Proofs and derivations: in the text where the book stands them.
10. Section exercises: Exercises system, kind `exercise`; each card carries its group's "For the following exercises…" stem; "[T]" stays.
11. Review exercises: kind `review-exercise`, placed with the section that introduces what each tests, `source_section` 8.5; one testing two sections' methods (264) goes with the later.
12. Unkeyed even exercises: computational ones and sketches left out and named in `exercise_notes`; proof, verification, "show that" and explain ones kept with an AI-marked approach (rule 13). 8.1's exercises 8–17 (verify a solution) are unkeyed odd and even and are kept with AI-marked verifications.
13. Answers: never generated; keyed answers from the book's solution, a keyed image (a sketched solution or field) as the answer's figure.
14. Media / applet links: dropped, named in `notes`, each seeds a Sim candidate.
15. Student Project (8.4, Logistic Equation with a Threshold Population): a note in the text with its question list; not exercises.
16. Problem-Solving Strategy: a note.
17. Key Concepts → `summary_html`; Key Equations → the formulas list, "Theorems and formulas".
18. Graphs: every function graph and every direction field drawn live from the book's equation and numbers; fields and graphs an exercise reads from are faithful still copies.
19. figlib: plot/shade/tangent/drag exist; this chapter adds `F.slopefield` (direction field, solution curves through a draggable initial point, Euler's polyline for a step size h), additive, under the figlib lock, with a test, flagged.
20. Photographs: chapter opener and photos an example points at kept (8.20, the deer of Example 8.14); decoration dropped.
21. Types: the 18 of book.json on the hue-families palette; `function` is the solution and every solution curve (y, v(t), T(t), u(t), P(t), μ(x)), `derivative` every slope (y′, dy/dx, the short segments of a direction field, the rates T′ and dP/dt), `line` the linear approximation and Euler's segments, `point` an initial value (x₀, y₀) and the logistic inflection point, `limit` the carrying capacity K; equilibrium solutions are constant functions; applied quantities wear their maths type.
22. Sims (rule 15): the plan decides and builds its picks, reported afterwards.
23. 3D: none.
24. Reference sheets: link the Integral Calculator (`/calculus/sheets/integral-calculator/?expr=…`) where an example integrates both sides; the Grapher for the families of solutions; no new sheets.
25. Recolour: `colours:default -- calculus` is run by the orchestrator at the end of the run, not in the chapter pass.
