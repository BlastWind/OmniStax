# Chapter 10 config: Power Series

Status: agreed by carry-over 2026-10-12 (Chen: build the book straight through on Chapter 3's defaults, report afterwards).

1. Start: `ch10/intro/`, then 10.1–10.4.
2. Loop: prep / sections / chapter pass with no stops; plans and decisions reported to Chen afterwards (rule 5 review waived by Chen for this run).
3. Preface: built with Chapter 1.
4. Cross-volume references: no volume in the reader's text; none in this chapter.
5. Numbering: openstax.org's chapter-wide numbers with the merged chapter prefix (Volume 2's 6.N is 10.N); slugs keep the volume's own (`calculus-volume-2/pages/6-1-power-series-and-functions`).
6. Checkpoints: inline Try Its after their example, hint and answer behind reveals, kind `checkpoint`; no attainment.
7. Examples: kept whole in the text, Analysis included.
8. Definitions, theorems, rules: titled notes; definition → `definition`, theorem → `result`; no axioms. A reference to a theorem reads as its title, linked to its note, as openstax.org prints it.
9. Proofs: in the text under their theorem.
10. Section exercises: Exercises system, kind `exercise`; each card carries its group's "In the following exercises…" stem; "[T]" stays.
11. Review exercises: kind `review-exercise`, placed with the section that introduces what each tests, `source_section` 10.4.
12. Unkeyed even exercises: computational ones left out and named in `exercise_notes`; proof, explain and true-or-false ones kept with an AI-marked approach (rule 13).
13. Answers: never generated; keyed answers from the book's solution.
14. Media / applet links: dropped, named in `notes` (10.3's MacTutor biographies).
15. Student Project (10.3, Proving that e is Irrational): a note in the text with its question list; not exercises.
16. Problem-Solving Strategy: none in this chapter.
17. Key Concepts → `summary_html`; Key Equations → the formulas list, "Theorems and formulas".
18. Graphs: every function graph drawn live from the book's function and numbers; graphs an exercise reads from are faithful still copies.
19. figlib: plot/shade/riemann/tangent/secant/drag exist; this chapter adds no part unless a plan argues one.
20. Photographs: chapter opener (Figure 10.1) and the photo in Example 10.7's problem (Figure 10.4) kept.
21. Types: the 18 of book.json on the hue-families palette; `series` is the chapter's main type (a power series and its sum, partial sums Sₙ, Taylor and Maclaurin series and polynomials pₙ, the binomial series, the Cauchy product, the present value as the sum of a series), `function` for f and the function a series represents, `set` for the interval of convergence, `error` for the remainder Rₙ and its bound, `derivative` for f⁽ⁿ⁾(a), `integral` for term-by-term integrals and nonelementary integrals; the radius of convergence R and the coefficients cₙ stay ink.
22. Sims (rule 15): the plan decides and builds its picks, reported afterwards.
23. 3D: none.
24. Reference sheets: the Maclaurin sheet (`/calculus/sheets/maclaurin/`) is linked where 10.4 first presents its series ("we summarize the results of these series"), Table 10.1 kept in the text; the Grapher through `data-fn` where the prose gives a function by its rule; no new sheets.
25. Numbered equations: the book's 11, (10.1)–(10.11) (every `<equation>` not classed unnumbered), keep their numbers as `\tag{10.N}` on display equations with the book's id; a reference to one reads "Equation 10.N", linked.
26. Recolour: the orchestrator runs `colours:default -- calculus` at the end of the run; not in this chapter pass.
