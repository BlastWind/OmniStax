# Chapter 15 config: Multiple Integration

Status: agreed by carry-over 2026-10-13 (Chen: build the book straight through on Chapter 3’s defaults, report afterwards). Built 2026-10-13; the build changed the defaults where marked.

1. Start: `ch15/intro/`, then 15.1–15.7 (Volume 3, Chapter 5).
2. Loop: prep / sections / chapter pass with no stops; plans and decisions reported to Chen afterwards (rule 5 review waived by Chen for this run).
3. Preface: built with Chapter 1.
4. Cross-volume references: 15.6 prints "Section 6.6 of Volume 1"; it becomes "Section 6.6", linked to `/calculus/ch06/6.6/`, with a correction note at the spot giving the printed words (book `RULES.md`, Structure). Module links to Chapters 5, 6, 12 and 14 are links.
5. Numbering: openstax.org's chapter-wide numbers with the merged chapter prefix (Volume 3's 5.N is 15.N); slugs keep the home volume's own (`calculus-volume-3/pages/5-1-double-integrals-over-rectangular-regions`).
6. Checkpoints: inline Try Its after their example, hint and answer behind reveals, kind `checkpoint`; no attainment.
7. Examples: kept whole in the text, Analysis included.
8. Definitions, theorems, rules: titled notes; definition → `definition`, theorem → `result`, problem-solving strategy → `skill`; no axioms. A reference to a theorem reads as its title, linked to its note, as openstax.org prints it.
9. Proofs: none in this chapter.
10. Section exercises: Exercises system, kind `exercise`; each card carries its group's "For the following exercises…" stem; "[T]" stays.
11. Review exercises: kind `review-exercise`, placed with the section that introduces what each tests, `source_section` 15.7.
12. Unkeyed exercises: computational and "use technology" ones left out and named in `exercise_notes`; proof, show, explain and true-or-false ones kept with an AI-marked approach (rule 13).
13. Answers: never generated; keyed answers from the book's solution.
14. Media / applet links: none in this chapter.
15. Student Project (15.5, Hot air balloons): a note in the text with its question list; not exercises.
16. Problem-Solving Strategy (15.7, Change of Variables): a note; its steps are a `skill`.
17. Key Concepts → `summary_html`; Key Equations → the formulas list, "Theorems and formulas".
18. Figures: every surface, region and solid drawn live from the book's function and numbers; a figure that only shows one example's picture is a faithful still copy (kind `figure`); figures an exercise reads from stay as images in the card. The project's balloon diagrams are still copies, since its questions read them.
19. figlib: the Chapter 12–16 space parts (`F.space3d`, `F.space`: graph, solid, boxes, riemann2, region2, cells2) are the shared library; this chapter adds only what is missing, additively, under the figlib lock, with a test.
20. Photographs: the opener (15.1), the rainfall maps of Example 15.10 (15.10, 15.11), l'Hemisfèric in Example 15.52 (15.60) and the balloons of the project (15.61) kept; exercise and checkpoint images stay in their cards.
21. Types: the 18 of book.json on the hue-families palette; `integral` is the chapter's main type (a double or triple integral, a double or triple Riemann sum and its boxes, a volume V, an area A(R), a mass m, the moments M_x, M_y, M_xy, M_xz, M_yz, the moments of inertia I_x, I_y, I_z, I₀); `region` (R, D, E, G, S, Q, B, a polar rectangle, a subrectangle R_ij, a solid of integration); `surface` (the graph z = f(x, y) of an integrand, the bounding surfaces z = u₁, u₂, a sphere, cone, cylinder or paraboloid bounding a solid); `function` (the integrand f, the extension g, the bounding functions g₁, g₂, h₁, h₂, u₁, u₂, a density ρ, a transformation T and its components, f_ave); `matrix` (the Jacobian J); `point` (a sample point, the center of mass and the centroid); `angle` (θ, φ). Coordinates x, y, z, r, ρ (in spherical coordinates), u, v, w, the counts m, n, l, Δx, Δy, ΔA, ΔV, probabilities, expected values and radii of gyration stay ink.
22. Referents: two curves the text names apart on one figure (Example 15.10's y = √x and y = x³, the circle and cardioid of Example 15.30, the pieces D₁, D₂, D₃ of Example 15.14) are referents (book `COLOR.md`); a generic figure's two bounding curves are told apart by their labels.
23. Sims (rule 15): the plan decides and builds its picks, reported afterwards.
24. 3D: mathematical 3D (root rule 28.3) through `F.space3d` with a free orbit where turning the scene is the lesson (the Riemann boxes, slices, a solid between two surfaces, the coordinate boxes and volume elements, the transformation of a solid); a locked painted view (`locked: true`) for an example's still copy and for a slider figure where turning adds nothing; at most about five WebGL scenes a page; buttons off unless a plan line argues one (rule 26.2). Regions in the plane, polar regions and the planar transformations are 2D.
25. Reference sheets: no new sheets; the Grapher through `data-fn` only where the prose gives a function y = f(x) of one variable by its rule.
26. Numbered equations: the book's 16, (15.1)–(15.16), keep their numbers as `\tag{15.N}` on display equations with the book's id; a reference to one reads "Equation 15.N", linked.
27. Recolour: the orchestrator runs `colours:default -- calculus` at the end of the run; not in this chapter pass.
28. Exercise numbers: the material-set exercises are counted, as openstax.org numbers them, so 15.4 starts at 181 and the review exercises run 416–442 (built).
29. Tall scenes: where a surface or solid is far taller than its base (z = 3x² − y, the paraboloid of Example 15.9, a tetrahedron), z is drawn shortened and its ticks are labelled in true units, so the reader sees the shape and reads the true heights (built).
30. Exercises whose premise does not hold as printed are left out and named (15.2's 72, 15.6's 347); a key or a show exercise that misprints is kept with a correction under its card (15.2's 73, 15.5's 273–275, 15.7's 400) (built).
