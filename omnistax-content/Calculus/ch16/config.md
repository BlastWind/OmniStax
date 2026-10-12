# Chapter 16 config: Vector Calculus

Status: agreed by carry-over 2026-10-13 (Chen: build the book straight through on Chapter 3's defaults, report afterwards). Built 2026-10-13; the build changed the defaults below where marked.

1. Start: `ch16/intro/`, then 16.1–16.8 (Volume 3, Chapter 6).
2. Loop: prep / sections / chapter pass with no stops; plans and decisions reported to Chen afterwards (rule 5 review waived by Chen for this run).
3. Preface: built with Chapter 1.
4. Cross-volume references: none expected; a reference that assumes three volumes is reworded with a correction note at the spot giving the printed words (book `RULES.md`, Structure). Module links to Chapters 5, 6, 11–15 are links.
5. Numbering: openstax.org's chapter-wide numbers with the merged chapter prefix (Volume 3's 6.N is 16.N), counted per module since ids repeat across modules; slugs keep the home volume's own (`calculus-volume-3/pages/6-1-vector-fields`). Exercise numbers count 16.6's material-set exercises, as openstax.org does (16.7 starts at 326; review 427–451).
6. Checkpoints: inline Try Its after their example, hint and answer behind reveals, kind `checkpoint`; no attainment.
7. Examples: kept whole in the text, Analysis included.
8. Definitions, theorems, rules: titled notes; definition → `definition`, theorem → `result`, problem-solving strategy → `skill`; no axioms (Faraday's law and Gauss' law, stated without proof, are results). A reference to a theorem reads as its title, linked to its note, as openstax.org prints it.
9. Proofs: in the text under their theorem, an `<h3>` "Proof".
10. Section exercises: Exercises system, kind `exercise`; each card carries its group's "For the following exercises…" stem; "[T]" stays.
11. Review exercises: kind `review-exercise`, placed with the section that introduces what each tests, `source_section` 16.8.
12. Unkeyed exercises: computational, "sketch" and "use technology" ones left out and named in `exercise_notes`; proof, show, explain and true-or-false ones kept with an AI-marked approach (rule 13).
13. Answers: never generated; keyed answers from the book's solution.
14. Media / applet links: one (16.4, a planimeter animation), dropped and named in `notes`; it seeds a Sim.
15. Student Project (16.4, Measuring Area from a Boundary: The Planimeter): a note in the text with its question list; not exercises.
16. Problem-Solving Strategy (16.3, Finding a Potential Function): a note; its steps are a `skill`.
17. Key Concepts → `summary_html`; Key Equations → the formulas list, "Theorems and formulas".
18. Figures: every field, curve, region and surface drawn live from the book's function and numbers; a figure that only shows one example's picture is a faithful still copy (kind `figure`), a locked painted view where it is in space; figures an exercise reads from stay as images in the card.
19. figlib: the Chapter 12–16 space parts (`F.space3d`, `F.space`: field, flow, curve, surface, normals, patch, solid; flat field2, flow2, region2) are the shared library; this chapter adds only what is missing, additively, in a block named for Chapter 16, under the figlib lock, with a test. Known: `view3d.setView` gives NaN with pitch `'free'`, so every scene bounds its pitch.
20. Photographs: the opener (16.1), the hurricane in the Chapter Opener example (16.4) and the MRI of the project (16.47) kept; the planimeter drawings (16.48, 16.49) still copies, since the project's questions read them; exercise and checkpoint images stay in their cards.
21. Types: the 18 of book.json on the hue-families palette; `vector-field` is the chapter's main type (F, G, v, E, B, F_r, a gradient field ∇f, curl F, heat flow); `integral` (every line, surface and flux integral, a circulation, a flux, work W, a mass m); `curve` (C, C₁, C₂, −C, ∂D, grid curves, flow lines); `region` (D, E, a parameter domain); `surface` (S, a parametric surface); `function` (f, g, P, Q, R, div F, a potential function, a stream function, a density ρ); `vector` (T, N, n, t_u, t_v, r′(t)); `point` (sample points, endpoints). Coordinates and parameters x, y, z, t, u, v, s, constants, charges and arc-length increments stay ink.
22. Referents: curves the text names apart on one figure are referents (book `COLOR.md`): built only for Example 16.30's paths C₁ and C₂ (16.3, `path-1`, `path-2`); 16.4's Figure 16.46 stays the book's image and 16.7's S₁, S₂ became one family of surfaces on a slider, so neither has referents (built).
23. Sims (rule 15): the plan decides and builds its picks, reported afterwards.
24. 3D: plane vector fields, plane curves in a field, Green's theorem and the stream function are 2D (`field2`, `flow2`, `region2`); fields in space, the sheet of a scalar line integral, space curves in a field, parametric surfaces and their normals, flux through a surface, Stokes' theorem and the divergence theorem are mathematical 3D (root rule 28.3) through `F.space3d` with a free orbit and a bounded pitch where turning is the lesson; a locked painted view for an example's still copy; at most about five WebGL scenes a page; buttons off unless a plan line argues one (rule 26.2).
25. Theorem figures: where a figure lets the reader change the field or the region, its readout writes both sides of the theorem with live numbers that agree (Green's, Stokes', the divergence theorem, the Fundamental Theorem for Line Integrals); this is the chapter's value add.
26. Reference sheets: no new sheets; the Grapher through `data-fn` only where the prose gives a function y = f(x) of one variable by its rule.
27. Numbered equations: the book's 24, (16.1)–(16.24), keep their numbers as `\tag{16.N}` on display equations with the book's id; a reference to one reads "Equation 16.N", linked.
28. Recolour: the orchestrator runs `colours:default -- calculus` at the end of the run; not in this chapter pass.
29. Sketches with no function (curve and region types, proof diagrams, the torus and pyramid, the planimeter drawings) are kept as the book's images, kind photo, as Chapter 14 kept 14.12 (built).
30. Fields and theorem figures compute both sides numerically in the page (midpoint and Simpson sums), the readout writing "=" when they agree to the shown digits and "≠" where a field's singularity lies inside the region (Green's whirlpool, Gauss' F_r) (built).
31. Bold vectors in TeX (F, N, T, n, v, G, E, B, i, j, k) wear their macros; d**r** and d**S** stay ink as differentials (built).
