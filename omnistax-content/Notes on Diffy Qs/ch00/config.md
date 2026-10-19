# Chapter 0 config: Introduction

Status: draft, awaiting Chen.

1. Start: `ch00/0.2`, then 0.3, then 0.1 (or the book `intro/` page, item 3).
2. Loop: 0.2 reviewed alone as the book's template section; then 0.3, 0.1 and the chapter pass at once with no stops, plans reported afterwards. Check-in after Chapter 0 before the Chapter 1 config.
3. 0.1 "Notes about these notes": built as section 0.1, a page like the others, with its Organisation diagram as a faithful copy whose chapter names link to the chapters; its Typical courses, Computer resources and Acknowledgments kept as printed. No exercises, no figures beyond the diagram.
4. Section notes (`\sectionnotes`: lecture counts, [EP]/[BD] section numbers): dropped, named in `notes`.
5. Numbering: the book's own; sections 0.1–0.3, Figure 0.N, Example 0.2.k, Exercise 0.2.k and 0.2.101….
6. Defined terms (`\emph{\myindex{…}}`): stay italic in the prose, each a `definition` concept with the italic words as `terms`; a term Calculus already defines reuses Calculus's concept id.
7. Examples: kept whole in the text, Example 0.2.k as eyebrow.
8. Inline exercises (0.2's three "Check that…"): inline Try Its, kind `inline-exercise`; unkeyed, so each carries an AI-marked approach that states the check and its result (root rule 13: a solution to an open question), no attainment.
9. End exercises: Exercises system, kind `exercise`; 101+ carry the book's answer; parts of a `tasks` list are one card with parts.
10. Unkeyed end exercises (1–11 of 0.2, 1–4 of 0.3, 15 in all): "show", "verify", "is it a solution? justify" and "classify" questions kept with an AI-marked approach; questions whose answer must be computed ("solve", "find C", the population and salary problems) left out and named in `exercise_notes`.
11. Answers: never generated; the book's `\exsol` is the answer.
12. Formulas list "Equations and formulas": the four fundamental equations and their solutions, the exponential growth model, the general linear ODE (0.3).
13. Figures: Figure 0.1 (solutions of x′ + x = 2cos t) live, C on a slider with the book's three curves as detents, still; Figure 0.2 (bacteria growth) live, still, P(0) and P(10) from the book; the modelling cycle a faithful copy; the chapter diagram a faithful copy with links.
14. Sims (rule 15): the plan decides and builds its picks, reported afterwards. Seeds: the four fundamental equations as one figure with a choice of equation and k on a slider; the catenary against a parabola with the Gateway Arch's numbers.
15. Tier default: lowest tier that carries the value add; no 3D in Chapter 0.
16. Calculus overlap: 0.2 and 0.3 cover Calculus 8.1; the pages stay whole; shared concepts take Calculus's ids (`solution-to-a-differential-equation`, `order-of-a-differential-equation`, `general-solution`, `particular-solution`, `autonomous-differential-equation`, …); the prose links Calculus for what it assumes (derivatives, eˣ, cosh and sinh), never repeats it.
17. Citations [EP], [BD], [I], [F], [BM], [T] in 0.1: the bracket kept, the bibliography entry in a book footnote at its first citation.
18. Types: the fifteen of `book.json`; Chapter 0 uses function, derivative and point.
19. Recolour: rerun `colours:default -- diffyqs` in the chapter pass.

## Open questions for Chen

1. 0.1: a section page (proposed), or the book's `intro/` page since it is a preface in all but its number, or skipped as instructor-only?
2. Unkeyed exercises are 63 % of the end exercises (434 of 685) and all 62 inline ones. Keep the proposed split (approach for show/verify/explain, leave out the computed ones), or generate AI-marked solutions for all of them, or leave all unkeyed ones out?
3. Inline "Check that…" Try Its have no key: an AI-marked approach behind the reveal (proposed), or a plain prompt with no reveal?
4. Section notes ("can safely be skipped", lecture counts): dropped (proposed), or kept as a one-line eyebrow under the title for instructors?
5. Further Reading: footnotes at first citation (proposed), or a book page after Appendix B?
6. The book's folder is `Notes on Diffy Qs` while the title is the full subtitle; keep, or rename the folder to the title (root "Where things live")?
7. Types: fifteen, with `eigenvalue`, `transform` and `frequency` new beside Calculus's ids. Agree, or fold `frequency` into ink parameters as Calculus does?
8. Template: 0.2 as the book's first template section, or wait for 1.2 (slope fields, a theorem) before setting one?
