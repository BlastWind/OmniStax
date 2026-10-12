# Chapter 12 config: Vectors in Space

Status: agreed by carry-over 2026-10-13 (Chen: build the book straight through on Chapter 3's defaults, report afterwards). Built 2026-10-13; the build changed the defaults below where marked.

1. Start: `ch12/intro/`, then 12.1–12.7 (Volume 3, Chapter 2).
2. Loop: prep / sections / chapter pass with no stops; plans and decisions reported to Chen afterwards (rule 5 review waived by Chen for this run).
3. Preface: built with Chapter 1.
4. Cross-volume references: none in the prose; module links to Chapters 6, 11 and 16 are links.
5. Numbering: openstax.org's chapter-wide numbers with the merged chapter prefix (Volume 3's 2.N is 12.N); slugs keep the home volume's own (`calculus-volume-3/pages/2-1-vectors-in-the-plane`).
6. Checkpoints: inline Try Its after their example, hint and answer behind reveals, kind `checkpoint`; no attainment. Checkpoint 12.6 (a proof, unkeyed) carries an AI-marked approach.
7. Examples: kept whole in the text, Analysis included.
8. Definitions, theorems, rules: titled notes; definition → `definition`, theorem and rule → `result`, problem-solving strategy → `skill`; no axioms. A reference to a theorem or rule reads as its title, linked to its note, as openstax.org prints it.
9. Proofs: in the text under their theorem (12.1, 12.3, 12.4).
10. Section exercises: Exercises system, kind `exercise`; each card carries its group's "For the following exercises…" stem; "[T]" stays.
11. Review exercises: kind `review-exercise`, placed with the section that introduces what each tests, `source_section` 12.7.
12. Unkeyed exercises: computational and "use technology" ones left out and named in `exercise_notes`; proof, explain and true-or-false ones kept with an AI-marked approach (rule 13).
13. Answers: never generated; keyed answers from the book's solution.
14. Media / applet links: none in this chapter.
15. Student Project (12.5, Distance between Two Skew Lines): a note in the text with its question list; not exercises.
16. Problem-Solving Strategy: none in this chapter.
17. Key Concepts → `summary_html`; Key Equations → the formulas list, "Theorems and formulas".
18. Figures: every vector sketch and surface drawn live from the book's numbers; a figure that only shows one example's picture is a faithful still copy (kind `figure`); figures an exercise reads from stay as images in the card.
19. figlib: the Chapter 12–16 space parts (`F.space3d`, `F.space`) are the shared library; this chapter added `locked: true` (the painted view, no WebGL context) and made the painted view honour `fit`, additively, under the figlib lock, with a test (built).
20. Photographs: the opener (12.1) and 12.73, 12.85, 12.86, 12.105 kept (the text points at each); exercise and checkpoint images stay in their cards.
21. Types: the 18 of book.json on the hue-families palette; `vector` is the chapter's main type (every bold letter, PQ⃗, sums, multiples, unit vectors, projections, cross products, normals, direction vectors, torque, F as a force); `point` (initial and terminal points, points in space, centres); `plane` (coordinate planes, planes and their equations); `line` (lines in space, skew lines, rulings, lines of intersection); `surface` (spheres, cylinders, quadric surfaces); `curve` (traces); `angle` (θ, α, β, γ, φ); `matrix` (determinants and their arrays); `region` (octants, the parallelepiped); dot products, scalar and triple scalar products, magnitudes, distances, work and coordinates stay ink.
22. Sims (rule 15): the plan decides and builds its picks, reported afterwards.
23. 3D: mathematical 3D (root rule 28.3) through `F.space3d` with a free orbit where turning the scene is the lesson, and a locked painted view of the same layers for a still copy; at most about five WebGL scenes a page; buttons off unless a plan line argues one (rule 26.2).
24. Reference sheets: no new sheets; the Grapher through `data-fn` only where the prose gives a function y = f(x) of one variable by its rule (y = sin x as a curve of 12.6).
25. Numbered equations: the book's 19, (12.1)–(12.19), keep their numbers as `\tag{12.N}` on display equations with the book's id; a reference to one reads "Equation 12.N", linked.
26. Recolour: the orchestrator runs `colours:default -- calculus` at the end of the run; not in this chapter pass.
27. Bold vector symbols: new `symbols` rows (`u_vec` … with macros `\kvecu` …); the text's math writes them through the macros; exercise prompts stay plain LaTeX.
28. Exercise figures: a numbered figure printed inside an exercise (12.43) stays an image in its card with its credit, no figure row; a numbered figure inside a checkpoint (12.52) moves into the text before the checkpoint as a still copy (built).
29. A Sim that cannot hold two examples honestly in one fixed box keeps one example, the other as a still copy (12.53 beside the hand-rule Sim) (built).
30. Currency in prose is &#36;, in cards ＄ (12.3) (built).
