# Chapter 6 config: Applications of Integration

Status: agreed by carry-over 2026-10-12 (Chen: build every chapter straight through with Chapter 3's defaults, plans and decisions reported afterwards).

1. Start: `ch06/intro/`, then 6.1–6.9.
2. Loop: prep / sections / chapter pass with no stops; plans and decisions reported to Chen afterwards (rule 5 review waived by Chen for this run).
3. Preface: built with Chapter 1.
4. Cross-volume references: no volume in the reader's text; "Section 6.6 of Volume 1" (15.6) becomes "Section 6.6", linked, with a note giving the printed words. In this chapter Example 6.50 prints "Section 2.4", Volume 2's own number for 6.4: it becomes "Section 6.4", linked, with the note.
5. Numbering: openstax.org's chapter-wide numbers with the merged chapter prefix; slugs keep the volume's own (the chapter's home is Volume 1). Built: equations numbered as openstax.org numbers them (every `<equation>` not marked unnumbered, 6.1 to 6.27 chapter-wide, \tag{6.k}), so each cited "Equation 6.k" has a visible number.
6. Checkpoints: inline Try Its after their example, hint and answer behind reveals, kind `checkpoint`; no attainment.
7. Examples: kept whole in the text, Analysis included.
8. Definitions, theorems, rules: titled notes; definition → `definition`, theorem and rule → `result`, problem-solving strategy → `skill`; no axioms.
9. Proofs: in the text under their theorem (Pappus in 6.6; the properties of ln and of eˣ in 6.7).
10. Section exercises: Exercises system, kind `exercise`; each card carries its group's "For the following exercises…" stem; "[T]" stays. Built: where the book leaves a stem standing over exercises it does not describe (6.1 49, 51; 6.2 103–107; 6.3 163, 164; 6.4 169, 207–217; 6.5 234–253; 6.6 290–294; review 449, 451, 457), those cards carry no stem.
11. Review exercises: kind `review-exercise`, placed with the section that introduces what each tests, `source_section` the chapter's last module (6.9).
12. Unkeyed even exercises: computational ones left out and named in `exercise_notes`; proof and explain ones kept with an AI-marked approach (rule 13).
13. Answers: never generated; keyed answers from the book's solution.
14. Media / applet links: dropped, named in `notes`, each seeds a Sim candidate.
15. Student Projects: a note in the text with its question list (6.6, the Grand Canyon Skywalk); not exercises.
16. Problem-Solving Strategy: a note.
17. Key Concepts → `summary_html`; Key Equations → the formulas list, "Theorems and formulas".
18. Graphs: every function graph drawn live from the book's function and numbers; graphs an exercise reads from are faithful still copies.
19. figlib: plot/shade/riemann/tangent/secant/drag exist; the chapter adds a solid of revolution swept from a profile, with its disk, washer and shell slices, for 6.2–6.4 and later chapters, flagged in the report. Built: `F.revolve` (pure geometry in `src/lib/fig/solid.ts`, tests in `tests/solid.test.ts`): `F.revolve.mesh` for view3d scenes, `F.revolve.paint` for painted locked views.
20. Photographs: chapter opener and photos an example points at kept (the Hoover Dam in 6.5, the Skywalk of the 6.6 project, the chains of 6.9); decoration dropped.
21. Types: the 18 of book.json on the hue-families palette; integral is the chapter's main type beside function (an area, a volume, an arc length, a surface area, a mass, a work, a hydrostatic force, a moment), region for the region revolved and the solid it sweeps, point for a center of mass or centroid, surface for a surface of revolution, derivative for f′ inside the arc-length integrand; applied quantities wear their maths type (a density, a variable force, a depth or width are functions).
22. Sims (rule 15): the plan decides and builds its picks, reported afterwards.
23. 3D: solids of revolution, slices, disks, washers, shells and surfaces of revolution are mathematical 3D through `F.view3d` (book RULES, Figures): house style, free orbit within the bound each plan line names, buttons per root 26.2 (none by default). A pyramid, a tank or a trough drawn in perspective is a locked view.
24. Reference sheets: link the Table of Integrals and the Integral Calculator where the text first sets up an integral it evaluates; no new sheets.
25. Recolour: not run in the chapter pass (the orchestrator runs `colours:default -- calculus` at the end of the run).
