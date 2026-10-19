# Chapter 1 build status

Done: sources (converted before), config.md, COLOR.md, chapter.json (sections), plan.md for 1.1–1.9; scratch builder at tmp/ch01/build.py.
In progress: prep (symbols, concepts, variables) — waiting for ch00's concepts to merge before `ost merge diffyqs 1`.
Next: book-rows.json + merge, variables, then sections 1.1 → 1.9, then the chapter pass.

Decisions so far:
- No chapter intro/summary. Sections without book subsections get OmniStax h2s (1.1, 1.4, 1.6, 1.7, 1.9).
- Folds: 1.2+1.3+1.4, 1.13+1.14+1.15, 1.16+1.17, 1.20+1.21. Tank sketch of Ex 1.4.2 is the scene of Figure 1.10 (moving).
- Sims (rule 15 picks): sim-integral-solution (1.1), sim-substitution-family (1.5, the section's only figure), sim-method-order (1.7). Figure 1.7 generalised to the family of solutions leaving the axis at a.
- 1.7's Runge–Kutta and improved Euler paragraphs (printed among the exercises) kept in the text before the Exercises.
- Unnumbered classification image in 1.6 kept as <img>; 1.6's phase-diagram image folded into sim-logistic.
- No 3Blue1Brown survivor in Chapter 1.
- tools/mergebook.py missing from the book (needed by `ost merge`); copy Calculus's if ch00 has not.
