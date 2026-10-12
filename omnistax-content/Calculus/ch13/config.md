# Chapter 13 config: Vector-Valued Functions

Status: agreed by carry-over 2026-10-13 (Chen: build the book straight through on Chapter 3's defaults, report afterwards). Built 2026-10-13; lines 29–31 record what the build settled.

1. Start: `ch13/intro/`, then 13.1–13.4 (Volume 3, Chapter 3).
2. Loop: prep / sections / chapter pass with no stops; plans and decisions reported to Chen afterwards (rule 5 review waived by Chen for this run).
3. Preface: built with Chapter 1.
4. Cross-volume references: none in the prose; module links to Chapters 3, 4, 5, 11 and 16 are links.
5. Numbering: openstax.org's chapter-wide numbers with the merged chapter prefix (Volume 3's 3.N is 13.N); slugs keep the home volume's own (`calculus-volume-3/pages/3-1-vector-valued-functions-and-space-curves`).
6. Checkpoints: inline Try Its after their example, hint and answer behind reveals, kind `checkpoint`; no attainment.
7. Examples: kept whole in the text, Analysis included.
8. Definitions, theorems, rules: titled notes; definition → `definition`, theorem and rule → `result`, problem-solving strategy → `skill`; no axioms. A reference to a theorem or rule reads as its title, linked to its note, as openstax.org prints it.
9. Proofs: in the text under their theorem (13.2, 13.3, 13.4).
10. Section exercises: Exercises system, kind `exercise`; each card carries its group's "For the following exercises…" stem; "[T]" stays.
11. Review exercises: kind `review-exercise`, placed with the section that introduces what each tests, `source_section` 13.4.
12. Unkeyed exercises: computational and "use technology" ones left out and named in `exercise_notes`; proof, show, explain and true-or-false ones kept with an AI-marked approach (rule 13).
13. Answers: never generated; keyed answers from the book's solution.
14. Media / applet links: dropped, named in `notes`, each seeds a Sim candidate.
15. Student Project (13.4, Navigating a Banked Turn): a note in the text with its question lists; not exercises.
16. Problem-Solving Strategy: none in this chapter.
17. Key Concepts → `summary_html`; Key Equations → the formulas list, "Theorems and formulas".
18. Graphs and curves: every graph, plane curve and space curve drawn live from the book's function and numbers; a figure that only shows one example's picture, or that a project's questions read, is a still copy; figures an exercise reads from stay as images in the card.
19. figlib: the Chapter 12–16 space parts (`F.space3d`, `F.space`: curve, frame, frenet, vector) are the shared library; this chapter adds only what is missing, additively, under the figlib lock, with a test.
20. Photographs: the opener (13.1) and the Bristol Motor Speedway (13.22, the project's track) kept; the repeat of the opener inside Example 13.18 dropped; exercise and checkpoint images stay in their cards.
21. Types: the 18 of book.json on the hue-families palette; `curve` is the chapter's main type (r(t) and the curve it traces, a plane or space curve, a helix, a reparameterization, the osculating circle); `vector` (r′, r″, a tangent vector, T, N, B, velocity, acceleration, force, i, j, k); `limit` (L); `integral` (the integral of a vector-valued function, arc length s and the arc-length function); `derivative` (speed v = ds/dt, curvature κ); `plane` (normal and osculating planes); `point` (a point of a curve, a centre, the Sun); `function` (component functions); `angle` (θ). The scalar components a_T and a_N, the radius of curvature, ranges, heights, masses and periods stay ink.
22. Sims (rule 15): the plan decides and builds its picks, reported afterwards.
23. 3D: mathematical 3D (root rule 28.3) through `F.space3d` for space curves and the frame along them, free orbit, buttons off unless a plan line argues one (rule 26.2); at most three WebGL scenes a page. Plane curves, curvature of y = f(x), motion in the plane, projectiles and orbits are 2D.
24. Motion: a point moving along a curve has a clock (the moving tier, root rule 14); its transport's scrub reaches the book's marked times.
25. Reference sheets: the Table of Integrals linked where the book's words name it ("a table integration formula", Example 13.9); no new sheets.
26. Numbered equations: the book's 30, (13.1)–(13.30), keep their numbers as `\tag{13.N}` on display equations with the book's id; a reference to one reads "Equation 13.N", linked.
27. Recolour: the orchestrator runs `colours:default -- calculus` at the end of the run; not in this chapter pass.
28. Bold symbols: Chapter 12's rows (`\kvecr`, `\kveci` …) plus this chapter's T, N, B, L, v₀, s₀, r′, r″, u′, T′ and κ; the text's math writes them through the macros; exercise prompts stay plain LaTeX.
29. Stand-ins (built): where the book's sketch prints no function, the figure draws a stated stand-in with the book's picture as one of its states: the osculating-circle curve of 13.6 + 13.8 (y = 1.5 − sin x − ¼ sin(2x + 1)), the road of 13.12–13.14 (y = 1.2 sin 0.9x), the helix of the wire-length Sim (R = 1, h = 6, N = 3) and the projectile of 13.16 (θ = 50°, v₀ = 20 m/sec).
30. Review exercises (built): 202, 207, 209, 211 in 13.1; 203, 213, 215 in 13.2; 204, 217, 219, 221 in 13.3; 205, 223, 225, 227 in 13.4.
31. Stems (built): a group stem stands over the exercises it describes and is recovered whole where the book splits it with an image; a self-contained exercise under a stem carries none.
