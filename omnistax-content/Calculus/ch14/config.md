# Chapter 14 config: Differentiation of Functions of Several Variables

Status: agreed by carry-over 2026-10-13 (Chen: build the book straight through on Chapter 3's defaults, report afterwards). Built 2026-10-13; the build changed or added the defaults marked (built).

1. Start: `ch14/intro/`, then 14.1–14.8 (Volume 3, Chapter 4).
2. Loop: prep / sections / chapter pass with no stops; plans and decisions reported to Chen afterwards (rule 5 review waived by Chen for this run).
3. Preface: built with Chapter 1.
4. Cross-volume references: none in the prose; module links to Chapters 2, 3, 4, 8 and 12 are links.
5. Numbering: openstax.org's chapter-wide numbers with the merged chapter prefix (Volume 3's 4.N is 14.N); slugs keep the home volume's own (`calculus-volume-3/pages/4-1-functions-of-several-variables`).
6. Checkpoints: inline Try Its after their example, hint and answer behind reveals, kind `checkpoint`; no attainment.
7. Examples: kept whole in the text, Analysis included.
8. Definitions, theorems, rules: titled notes; definition → `definition`, theorem and rule → `result`, problem-solving strategy → `skill`; no axioms. A reference to a theorem or rule reads as its title, linked to its note, as openstax.org prints it.
9. Proofs: in the text under their theorem (14.5, 14.6, 14.8).
10. Section exercises: Exercises system, kind `exercise`; each card carries its group's "For the following exercises…" stem; "[T]" stays.
11. Review exercises: kind `review-exercise`, placed with the section that introduces what each tests, `source_section` 14.8.
12. Unkeyed exercises: computational, sketch and "use technology" ones left out and named in `exercise_notes`; proof, show, verify, explain, complete-the-statement and true-or-false ones kept with an AI-marked approach (rule 13).
13. Answers: never generated; keyed answers from the book's solution.
14. Media / applet links: dropped, named in `notes`, each seeds a Sim candidate.
15. Student Project (14.3, Lord Kelvin and the Age of Earth): a note in the text with its numbered questions; not exercises.
16. Problem-Solving Strategy: a note (two in 14.7, one in 14.8).
17. Key Concepts → `summary_html`; Key Equations → the formulas list, "Theorems and formulas".
18. Graphs: every graph z = f(x, y), contour map, level curve and implicit curve drawn live from the book's function and numbers; a figure that only shows one example's picture is a still copy (kind `figure`); figures an exercise reads from stay as images in the card.
19. figlib: the Chapter 12–16 space parts (`F.space3d`, `F.space`: graph with levels, tangent, surface, plane, line, vector, contours, partials) are the shared library; this chapter adds only what is missing, additively, under the figlib lock, with a test.
20. Photographs: the opener (14.1), Devil's Tower (14.7) and the project's Lord Kelvin and Earth (14.25) kept; the repeat of the opener inside Example 14.41 (14.56) dropped; 14.12 and 14.26 kept as the book's images (no function or constants printed to redraw them from); exercise and checkpoint images stay in their cards.
21. Types: the 18 of book.json on the hue-families palette; `function` (f(x, y), g, an objective function, a profit, u(x, y, t)); `surface` (the graph z = f(x, y), a level surface); `curve` (level curves, contour maps, vertical traces, implicit curves); `derivative` (partial derivatives in every notation, higher-order and mixed partials, D_u f); `vector` (∇f, u, normals, tangent vectors to level curves); `plane` (the tangent plane and L(x, y)); `line` (tangent lines and secants on traces, constraint lines); `point` (interior, boundary, critical and saddle points, extrema); `set` (domains, ranges, δ disks and balls, open, closed, connected and bounded sets); `region` (a region); `limit` (L); `error` (the error term E). In ink: x, y, z, t, u, v, w as variables, a, b, x₀, y₀, the discriminant D, dz, Δz, λ, ε, δ, c.
22. Sims (rule 15): the plan decides and builds its picks, reported afterwards.
23. 3D: mathematical 3D (root rule 28.3) through `F.space3d` for graphs z = f(x, y), level surfaces and tangent planes, free orbit, buttons off unless a plan line argues one (rule 26.2); at most five WebGL scenes a page, the rest `locked: true`. Domains, contour maps, level curves, tree diagrams and the Lagrange pictures are 2D; a surface read from its level curves is built both ways.
24. Motion: a figure moves only where its idea has a time in it (the heat and wave solutions, a point travelling a path in the chain rule); every other figure is still.
25. Reference sheets: the Table of Derivatives linked only where the book's words name the rules ("All differentiation rules"), no new sheets; the Grapher through `data-fn` only where the prose gives a function y = f(x) of one variable by its rule.
26. Numbered equations: the book's 43, (14.1)–(14.43), keep their numbers as `\tag{14.N}` on display equations with the book's id (14.21 inside Checkpoint 14.18's prompt); a reference to one reads "Equation 14.N", linked.
27. Recolour: the orchestrator runs `colours:default -- calculus` at the end of the run; not in this chapter pass.
28. Partial-derivative symbols: new `symbols` rows (`f_x` … with macros `\kfx` …, Leibniz `\kdfdx` …, `\kgradf`, `\kDuf`); the text's math writes them through the macros; exercise prompts stay plain LaTeX.
29. Steep graphs: where a graph z = f(x, y) rises far faster than the plane it sits over (Examples 14.21, 14.25, 14.31, 14.39–14.41), heights are drawn at a fraction of the scale of x and y, the caption says which, and the z ticks read the true values (root rule 28.4) (built).
30. Painted 3D: a still graph a page cannot afford as a live scene is painted from its opening view (`locked: true`), as 14.7's Figures 14.46 and 14.47 (built).
31. Stand-ins: where the book draws a generic surface or curve with no formula (14.15, 14.17, 14.21, 14.27, 14.30, 14.39, 14.41), the Sim uses the nearest example's function or a stated stand-in (built).
32. Review exercises: placed with their sections (exploration.md lists them); 419, set under Lagrange multipliers, is solved with differentials and lands in 14.4 (built).
