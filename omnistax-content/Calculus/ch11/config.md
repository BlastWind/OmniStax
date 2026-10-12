# Chapter 11 config: Parametric Equations and Polar Coordinates

Status: agreed by carry-over 2026-10-12 (Chen: build the book straight through on Chapter 3's defaults, report afterwards). Built 2026-10-12/13; the build changed the defaults below where marked.

1. Start: `ch11/intro/`, then 11.1–11.5. Volume 2's Chapter 7 and Volume 3's Chapter 1 print the same modules; the chapter is built once.
2. Loop: prep / sections / chapter pass with no stops; plans and decisions reported to Chen afterwards (rule 5 review waived by Chen for this run).
3. Preface: built with Chapter 1.
4. Cross-volume references: no volume in the reader's text; 11.2's "results obtained in Calculus 1" is reworded with a note giving the printed words; module links to Chapters 4 and 6 and Appendix A are links.
5. Numbering: openstax.org's chapter-wide numbers with the merged chapter prefix (Volume 2's 7.N is 11.N); slugs keep the home volume's own (`calculus-volume-2/pages/7-1-parametric-equations`).
6. Checkpoints: inline Try Its after their example, hint and answer behind reveals, kind `checkpoint`; no attainment.
7. Examples: kept whole in the text, Analysis included.
8. Definitions, theorems: titled notes; definition → `definition`, theorem → `result`, problem-solving strategy → `skill`; no axioms. A reference to a theorem reads as its title, linked to its note, as openstax.org prints it.
9. Proofs: in the text under their theorem (11.2).
10. Section exercises: Exercises system, kind `exercise`; each card carries its group's "For the following exercises…" stem; "[T]" stays.
11. Review exercises: kind `review-exercise`, placed with the section that introduces what each tests, `source_section` 11.5.
12. Unkeyed exercises: computational and "use technology" ones left out and named in `exercise_notes`; proof, explain and true-or-false ones kept with an AI-marked approach (rule 13).
13. Answers: never generated; keyed answers from the book's solution.
14. Media / applet links: dropped, named in `notes` (11.3's video on sketching polar curves).
15. Student Projects (11.1, The Witch of Agnesi; Travels with My Ant): notes in the text with their question lists; not exercises.
16. Problem-Solving Strategy (11.3, Plotting a Curve in Polar Coordinates): a note.
17. Key Concepts → `summary_html`; Key Equations → the formulas list, "Theorems and formulas".
18. Graphs: every graph of a curve drawn live from the book's equations and numbers; graphs an exercise reads from are faithful still copies. A parametric curve traced over t moves under the transport (its clock is t); a polar curve is still, drawn up to an angle θ the reader drags.
19. figlib: plot/shade/riemann/tangent/secant/drag exist; this chapter adds `F.polar` (polar frame, curve up to θ, ray and point, θ grip, sectors, parametric path), additive, in its own block with a test.
20. Photographs: chapter opener (Figure 11.1) kept; Figure 11.50 (Earth's orbit and Statuary Hall) kept; Figure 11.36's nautilus photograph stays the figure's original beside its live spiral.
21. Types: the 18 of book.json on the hue-families palette; `curve` is the chapter's main type (a parametric curve C, the cycloid and hypocycloid, a polar curve and its families, the conic sections), `angle` for θ, `point` for a plotted point, a critical point, the pole, a focus, a vertex, `line` for tangent lines, the polar axis, directrices, asymptotes and the axes of a conic, `derivative` for dy/dx, d²y/dx², x′(t), y′(t) and the speed, `integral` for the areas A, the arc lengths s and L and the surface area S, `surface` for the cone, `region` for a polar region; x, y, t, r and the constants a, b, c, h, k, p, e stay ink.
22. Sims (rule 15): the plan decides and builds its picks, reported afterwards.
23. 3D: the surface of revolution of 11.2 (Figure 11.25) and the cone cut by a plane of 11.5 (Figures 11.43 + 11.44), mathematical 3D through `F.view3d`; everything else flat.
24. Reference sheets: the Table of Integrals sheet linked where 11.2 names Appendix A; the Grapher through `data-fn` only where the prose gives a function y = f(x) by its rule; no new sheets.
25. Numbered equations: the book's 15, (11.1)–(11.15) (every `<equation>` not classed unnumbered), keep their numbers as `\tag{11.N}` on display equations with the book's id; a reference to one reads "Equation 11.N", linked.
26. Recolour: the orchestrator runs `colours:default -- calculus` at the end of the run; not in this chapter pass.
27. Folds (built): 11.2+11.3, 11.9+11.13–11.15, 11.10+11.11, 11.21+11.22, 11.23+11.24, 11.31+11.32, 11.33+11.34, 11.37+11.38, 11.43+11.44, 11.45+11.46; unnumbered images replaced by Sims: 11.3's symmetry table, 11.5's dish; one added Sim, 11.4's polar arc length (the theorem had no figure).
28. Review exercises (built): each with the section that introduces what it tests; 335 (a tangent to a polar curve) with 11.4, beside the section's own polar tangents.
