# Chapter 0 config: Introduction

Status: agreed by Chen 2026-10-19; standing for the whole book (later chapters carry it over, changing only their chapter-specific lines).

1. Start: `ch00/0.2` (the book's template section), then 0.3, then 0.1.
2. Loop: build straight through with no stops; plans and decisions are reported afterwards. The whole book is built.
3. 0.1 "Notes about these notes": built as section 0.1, a page like the others, with its Organisation diagram as a faithful copy whose chapter names link to the chapters; its Typical courses, Computer resources and Acknowledgments kept as printed. No exercises, no figures beyond the diagram.
4. Section notes (`\sectionnotes`: lecture counts, [EP]/[BD] section numbers): dropped, named in `notes`.
5. Numbering: the book's own; sections 0.1–0.3, Figure 0.N, Example 0.2.k, Exercise 0.2.k and 0.2.101….
6. Defined terms (`\emph{\myindex{…}}`): stay italic in the prose, each a `definition` concept with the italic words as `terms`; a term Calculus already defines may reuse Calculus's concept id.
7. Examples: kept whole in the text, Example 0.2.k as eyebrow.
8. Inline exercises: inline Try Its, kind `inline-exercise`; each carries an AI-marked approach that states the check and its result; no attainment.
9. End exercises: Exercises system, kind `exercise`; 101+ carry the book's answer (`\exsol`); parts of a `tasks` list are one card with parts.
10. Unkeyed end exercises (every one below 101; 434 in the book): all kept, each with an AI-marked solution that states the answer and the reasoning that reaches it, computed answers included. Every computed answer is checked by computation (SymPy, or numerics for a plot or estimate) before it is written. This overrides root rule 13's first default.
11. Answers: the book's `\exsol` is the key for 101+; everything else is an AI-marked solution, never shown as the book's answer.
12. Formulas list "Equations and formulas": the four fundamental equations and their solutions, the exponential growth model, the general linear ODE (0.3).
13. Figures: Figure 0.1 (solutions of x′ + x = 2cos t) live, C on a slider with the book's three curves as detents, still; Figure 0.2 (bacteria growth) live, still, P(0) and P(10) from the book; the modelling cycle a faithful copy; the chapter diagram a faithful copy with links.
14. Sims (rule 15): the plan decides and builds its picks, reported afterwards. Seeds: the four fundamental equations as one figure with a choice of equation and k on a slider; the catenary against a parabola with the Gateway Arch's numbers. The 3Blue1Brown survivors in `exploration.md` are picked by Chen and built in their sections.
15. Tier default: lowest tier that carries the value add; no 3D in Chapter 0.
16. Calculus overlap: 0.2 and 0.3 cover Calculus 8.1; the pages stay whole; shared ideas may take Calculus's concept ids; the prose links Calculus for what it assumes (derivatives, eˣ, cosh and sinh), never repeats it.
17. Citations [EP], [BD], [I], [F], [BM], [T] in 0.1: the bracket kept, the bibliography entry in a book footnote at its first citation.
18. Types: the fifteen of `book.json`. The book declares its own types and need not follow other books'; a chapter may add one where rule 7.4's test calls for it.
19. Recolour: rerun `colours:default -- diffyqs` in the chapter pass.
20. Title: the book is published as *Differential Equations for Engineers*, in the folder of that name; the attribution names the source, Lebl's *Notes on Diffy Qs*, through `sources`.
