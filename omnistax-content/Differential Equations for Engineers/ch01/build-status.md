# Chapter 1 build status

Done (prep, 2026-10-19): sources (converted before), config.md, COLOR.md, exploration.md, plan.md for 1.1–1.9, chapter.json (sections and 85 variables rows with their concepts, no anchors), book-rows.json reviewed and completed against every source.md and plan.md, `ost merge diffyqs 1` (62 concepts, 96 edges, 28 symbols). `ost check diffyqs`: no error names ch01/chapter.json or a Chapter 1 row of book.json except the two coverage errors of the partial 1.1 (`interval-of-existence`, `integrating-twice` need their introducing spans) and its footnote number; the 0.2/0.3 anchor errors are Chapter 0's.
In progress: nothing; the section agents start now.
Next: sections 1.1 → 1.9 (1.1 from its partial section.json/text.html), then the chapter pass: anchors on every variables row and form (each plan's "Wanted at chapter level" lists them), the Hasse check rerun, `ost log diffyqs 1`.

Decisions so far:
- No chapter intro/summary. Sections without book subsections get OmniStax h2s (1.1, 1.4, 1.6, 1.7, 1.9).
- Folds: 1.2+1.3+1.4, 1.13+1.14+1.15, 1.16+1.17, 1.20+1.21. Tank sketch of Ex 1.4.2 is the scene of Figure 1.10 (moving).
- Sims (rule 15 picks): sim-integral-solution (1.1), sim-substitution-family (1.5, the section's only figure), sim-method-order (1.7). Figure 1.7 generalised to the family of solutions leaving the axis at a.
- 1.7's Runge–Kutta and improved Euler paragraphs (printed among the exercises) kept in the text before the Exercises.
- Unnumbered classification image in 1.6 kept as <img>; 1.6's phase-diagram image folded into sim-logistic.
- No 3Blue1Brown survivor in Chapter 1.
- tools/mergebook.py is in place (the book's own); merge-state.json tracks ch00 and ch01.
- Prep concepts beyond the plans: `interval-of-existence` (idea) and `integrating-twice` (skill) in 1.1, `reading-a-slope-field` (skill) in 1.2, `classifying-critical-points` (skill) in 1.6, `estimating-the-error-by-halving` (skill) and `choosing-a-step-size` (idea) in 1.7; the plans' `first-order-ode` and `initial-condition` are Chapter 0's `first-order-differential-equation` and `initial-value`; `pde-initial-condition` is typed `function` with symbol f.
- Symbols added at prep beyond the draft: `dx/dy` (\kdxdy), `∂f/∂y` (\kpfy), `u_y` (\kuy), `Q` (\kQ). `h` (step size, harvesting, height), the slopes k₁…k₄, A and B as numbers, ξ, s, a, b, c, α stay in ink with no symbol. In 1.8, y is a coordinate first: its row is `type: null` (ink); in 1.9, g (the PDE's right side) has a row with no type (ink).
- The 1.8 integrating factor u links to `integrating-factor` (the 1.4 definition, which 1.8 says is the special case); P(x) and Q(y) of 1.8 are `function` rows.
