# Chapter 3 config: Derivatives

Status: agreed 2026-10-12 by carry-over (Chen: continue building; defaults carried from Chapter 2, build through, report afterwards). Built 2026-10-12; the build changed the defaults below where marked.

1. Start: `ch03/intro/`, then 3.1–3.9.
2. Loop: prep / sections / chapter pass with no stops; plans and decisions reported to Chen afterwards (rule 5 review waived by Chen for this run).
3. Preface: built with Chapter 1.
4. Cross-volume references: no volume in the reader's text; "Section 6.6 of Volume 1" (15.6) becomes "Section 6.6", linked, with a note giving the printed words.
5. Numbering: openstax.org's chapter-wide numbers with the merged chapter prefix; slugs keep the volume's own.
6. Checkpoints: inline Try Its after their example, hint and answer behind reveals, kind `checkpoint`; no attainment.
7. Examples: kept whole in the text, Analysis included.
8. Definitions, theorems, rules: titled notes; definition → `definition`, theorem and rule → `result`, problem-solving strategy → `skill`; no axioms.
9. Proofs: in the text under their theorem.
10. Section exercises: Exercises system, kind `exercise`; each card carries its group's "For the following exercises…" stem; "[T]" stays.
11. Review exercises: kind `review-exercise`, placed with the section that introduces what each tests, `source_section` the chapter's last module (3.9).
12. Unkeyed even exercises: computational ones left out and named in `exercise_notes`; proof and explain ones kept with an AI-marked approach (rule 13).
13. Answers: never generated; keyed answers from the book's solution.
14. Media / applet links: dropped, named in `notes`, each seeds a Sim candidate.
15. Student Projects: a note in the text with its question list; not exercises.
16. Problem-Solving Strategy: a note.
17. Key Concepts → `summary_html`; Key Equations → the formulas list, "Theorems and formulas".
18. Graphs: every function graph drawn live from the book's function and numbers; graphs an exercise reads from are faithful still copies.
19. figlib: plot/shade/riemann/tangent/secant/drag exist; a section may add a part where its idea needs one (an ε–δ band pair is likely), flagged in its report.
20. Photographs: chapter opener and photos an example points at kept; decoration dropped.
21. Types: the 18 of book.json on the hue-families palette; derivative is the chapter's main type beside function, tangent lines wear line, slopes and rates wear derivative; applied quantities wear their maths type (velocity, marginal cost → derivative).
22. Sims (rule 15): the plan decides and builds its picks, reported afterwards.
23. 3D: none.
24. Reference sheets: the Table of Derivatives and the Integral Calculator (derivative mode) are linked on the book's own words ("rules for finding derivatives", "derivative formulas", the word "derivative" in an example's problem); no words are added, so a section whose words do not name the step carries no link (3.2, 3.4, 3.8). No new sheets.
25. Recolour: rerun `colours:default -- calculus` in the chapter pass.
26. Equations: the book's numbered display equations (Equations 3.1–3.35) carry `\tag{3.N}`, so the text's "Equation 3.5" names a visible number (built).
27. Review exercises: a review exercise goes with the section that introduces what it tests even against the prep's list where it needs a later rule (389, the chain rule, set in 3.6, not 3.5) (built).
28. Two functions on one graph are referents (book `COLOR.md`): 3.3's Figure 3.18 (`const-f`, `const-g`); tangent lines the text names apart are referents (3.7) (built).
