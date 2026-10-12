# Chapter 17 config: Second-Order Differential Equations

Status: agreed by carry-over 2026-10-13 (Chen: build the book straight through on Chapter 3's defaults, report afterwards). Built 2026-10-13; the build changed the defaults below where marked.

1. Start: `ch17/intro/`, then 17.1–17.4 (Volume 3, Chapter 7), the book's last chapter; no back-matter page (the appendices are sheets, the answer key lives in the modules).
2. Loop: prep / sections / chapter pass with no stops; plans and decisions reported to Chen afterwards (rule 5 review waived by Chen for this run).
3. Preface: built with Chapter 1.
4. Cross-volume references: none expected; a reference that assumes three volumes is reworded with a correction note at the spot giving the printed words (book `RULES.md`, Structure). Module links to Chapters 8 and 10 are links.
5. Numbering: openstax.org's chapter-wide numbers with the merged chapter prefix (Volume 3's 7.N is 17.N); slugs keep the home volume's own (`calculus-volume-3/pages/7-1-second-order-linear-equations`). Exercises 1–116, review 117–141.
6. Checkpoints: inline Try Its after their example, hint and answer behind reveals, kind `checkpoint`; no attainment. A checkpoint the book leaves unanswered (a verification) gets an AI-marked answer.
7. Examples: kept whole in the text, Analysis included.
8. Definitions, theorems, rules: titled notes; definition → `definition`, theorem and rule → `result`, problem-solving strategy → `skill`; no axioms. A reference to a theorem reads as its title, linked to its note, as openstax.org prints it.
9. Proofs: in the text under their theorem, an `<h3>` "Proof".
10. Section exercises: Exercises system, kind `exercise`; each card carries its group's "For the following exercises…" stem; "[T]" stays.
11. Review exercises: kind `review-exercise`, placed with the section that introduces what each tests, `source_section` 17.4.
12. Unkeyed exercises: computational, "graph" and "use technology" ones left out and named in `exercise_notes`; proof, show, verify, explain and true-or-false ones kept with an AI-marked approach (rule 13).
13. Answers: never generated; keyed answers from the book's solution.
14. Media / applet links: six (two in 17.1, four in 17.3), dropped and named in `notes`; the forced-vibrations simulation seeds `sim-forced`.
15. Student Projects (17.3, Landing Vehicle and Resonance): notes in the text with their question lists; not exercises, and no Sim answers their questions.
16. Problem-Solving Strategies (17.1, 17.2 twice, 17.4): notes; their steps are `skill`s (17.4's is 10.4's skill, reinforced).
17. Key Concepts → `summary_html`; Key Equations → the formulas list, "Theorems and formulas".
18. Figures: every solution curve drawn live from the book's equation and numbers, an example's unnumbered graph replaced by a Sim keeping it as its original; the spring-mass, damping, suspension and RLC scenes move (they have a clock); figures an exercise or checkpoint reads from stay as images in the card.
19. figlib: the existing parts (`axes`, `plot`, `spring`, `block`, `fixed`, `arrow`, `drag`, `cycle`, `choice`, `readout`) cover the chapter; anything added goes in a block named for Chapter 17, under the figlib lock, with a test. `F.slopefield` (Chapter 8) fits no figure here: every equation drawn is second order.
20. Photographs: the opener (17.1), the dashpot (17.5), the shock absorber of Example 17.22 (17.9) and the lander of the Landing Vehicle project (17.12) kept with their credits.
21. Types: the 18 of book.json on the hue-families palette; `function` (y, y₁, y₂, y_p, r, u, v, x(t), x_p, q, f(t), E(t)); `derivative` (y′, y″, y₁′, y₂′, y₁″, y₂″, y_p′, y_p″, u′, v′, x′, x″, I); `series` (the Bessel series). Variables, constants, roots, physical parameters, the frequency f and the complementary pieces x₁, x₂ stay ink. (Build: y₁″, y₂″ added; the macros are applied in exercise cards too, as Chapter 8 does.)
22. Referents: the curves a figure draws and the text names apart (Example 17.10's three boundary-value problems, the transient and the steady state of Example 17.23 told by their names); the plan of each section lists them, none expected beyond those.
23. Sims (rule 15): the plan decides and builds its picks, reported afterwards.
24. 3D: none; every figure is a graph or a flat physical scene (root rule 28.1: a relation between quantities reads best flat).
25. Reference sheets: no new sheets; the Grapher through `data-fn` where the prose gives a solution y = f(x) of one variable by its rule.
26. Numbered equations: the book's 10, (17.1)–(17.10), keep their numbers as `\tag{17.N}` on display equations with the book's id; a reference to one reads "Equation 17.N", linked.
27. Recolour: the orchestrator runs `colours:default -- calculus` at the end of the run; not in this chapter pass.
28. Section headers: the book's own, except 17.4, whose module prints none; it gets two of OmniStax's, Power Series Solutions and The Bessel Equation (root rule 3). (Build.)
29. Reused concepts: 17.2's particular solution is 8.1's `particular-solution` and 17.4's strategy 10.4's `power-series-solution-of-a-differential-equation`, both reinforced. (Build.)
