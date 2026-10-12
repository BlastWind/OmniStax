# Chapter 7 config: Techniques of Integration

Status: agreed by carry-over 2026-10-12 (Chen: build the book straight through on Chapter 3's defaults, report afterwards).

1. Start: `ch07/intro/`, then 7.1–7.7.
2. Loop: prep / sections / chapter pass with no stops; plans and decisions reported to Chen afterwards (rule 5 review waived by Chen for this run).
3. Preface: built with Chapter 1.
4. Cross-volume references: no volume in the reader's text; "Section 6.6 of Volume 1" (15.6) becomes "Section 6.6", linked, with a note giving the printed words. None in this chapter.
5. Numbering: openstax.org's chapter-wide numbers with the merged chapter prefix (Volume 2's 3.N is 7.N); slugs keep the volume's own (`calculus-volume-2/pages/3-1-integration-by-parts`).
6. Checkpoints: inline Try Its after their example, hint and answer behind reveals, kind `checkpoint`; no attainment.
7. Examples: kept whole in the text, Analysis included.
8. Definitions, theorems, rules: titled notes; definition → `definition`, theorem and rule → `result`, problem-solving strategy → `skill`; no axioms.
9. Proofs and derivations: in the text where the book stands them.
10. Section exercises: Exercises system, kind `exercise`; each card carries its group's "For the following exercises…" stem; "[T]" stays.
11. Review exercises: kind `review-exercise`, placed with the section that introduces what each tests, `source_section` 7.7.
12. Unkeyed even exercises: computational ones left out and named in `exercise_notes`; proof and explain ones kept with an AI-marked approach (rule 13).
13. Answers: never generated; keyed answers from the book's solution.
14. Media / applet links: dropped, named in `notes`, each seeds a Sim candidate.
15. Student Project (7.7, Laplace Transforms): a note in the text with its question list; not exercises.
16. Problem-Solving Strategy: a note.
17. Key Concepts → `summary_html`; Key Equations → the formulas list, "Theorems and formulas".
18. Graphs: every function graph drawn live from the book's function and numbers; graphs an exercise reads from are faithful still copies.
19. figlib: plot/shade/riemann/tangent/secant/drag exist, and Chapter 6's `F.revolve` draws the solids of 7.1 and 7.7; this chapter adds no part.
20. Photographs: chapter opener and photos an example points at kept (Figures 7.1, 7.20); decoration dropped.
21. Types: the 18 of book.json on the hue-families palette; integral is the chapter's main type beside function (every ∫, antiderivative, area, volume, Mₙ, Tₙ, Sₙ, an improper integral, the Laplace transform); error for the absolute and relative errors and error bounds of 7.6; angle for θ of 7.3; region for a solid of revolution; the parts u and v of 7.1 stay ink beside f and g, which wear function.
22. Sims (rule 15): the plan decides and builds its picks, reported afterwards.
23. 3D: the solids of revolution (Figures 7.3 and 7.19) as mathematical 3D through `F.view3d`, free orbit, no buttons unless the plan argues one.
24. Reference sheets (built so): link the Integral Calculator (`/calculus/sheets/integral-calculator/`, `?expr=` for the example's integrand) and the Table of Integrals (`/calculus/sheets/integrals/`) where the text first uses each technique and where 7.5 names a table and a CAS; no new sheets.
25. Numbered equations: the book's 21, (7.1)–(7.21) (every `<equation>` not classed unnumbered, the classless ones included), keep their numbers as `\tag{7.N}` on display equations with the book's id; a reference to one reads "Equation 7.N", linked.
26. Recolour: the orchestrator runs `colours:default -- calculus` at the end of the run; not in this chapter pass.
