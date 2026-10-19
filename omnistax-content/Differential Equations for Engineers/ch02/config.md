# Chapter 2 config: Higher-order linear ODEs

Status: agreed by carry-over 2026-10-19 from `ch00/config.md` (Chen's standing defaults for the whole book); only the chapter-specific lines below differ.

1. Start: `ch02/2.1`, then 2.2–2.6 in order; Chapter 0's 0.2 is the template section once built, Calculus `ch08/8.1`, `8.2` and `ch17/17.1`–`17.3` before then.
2. Loop: build straight through with no stops; plans and decisions are reported afterwards. The whole book is built.
3. No chapter introduction or summary (the book prints none).
4. Section notes (`\sectionnotes`: lecture counts, "reduction of order optional", [EP]/[BD] section numbers): dropped, named in `notes`.
5. Numbering: the book's own; sections 2.1–2.6, Figure 2.1–2.8 chapter-wide, equations (2.1)–(2.8), Example 2.M.k, Theorem 2.M.k, Exercise 2.M.k and 2.M.101….
6. Defined terms (`\emph{\myindex{…}}`): stay italic in the prose, each a `definition` concept with the italic words as `terms`; a term Calculus already defines reuses Calculus's concept id (the list in `exploration.md`). A term defined only in an exercise set (Cauchy–Euler equation, 2.1) or a footnote (ansatz, 2.2) is not a concept of the map; the italic stays.
7. Examples: kept whole in the text, Example 2.M.k as eyebrow.
8. Inline exercises: inline Try Its, kind `inline-exercise`; each carries an AI-marked approach that states the check and its result; no attainment.
9. End exercises: Exercises system, kind `exercise`; 101+ carry the book's answer (`\exsol`); parts of a `tasks` list are one card with parts.
10. Unkeyed end exercises (every one below 101; 51 in this chapter): all kept, each with an AI-marked solution that states the answer and the reasoning that reaches it, computed answers included, checked by computation (SymPy, or numerics for an estimate) before it is written.
11. Answers: the book's `\exsol` is the key for 101+; everything else is an AI-marked solution, never shown as the book's answer. A keyed answer the computation contradicts keeps the book's words and carries a correction note under its card.
12. Formulas list "Equations and formulas": (2.1)–(2.4), the boxed roots solutions of Theorems 2.2.1 and 2.2.3, Euler's formula, the reduction-of-order formula, the mass–spring equation, the RLC equation, the pendulum equation and its linearisation, x″ + ω₀²x = 0 and its amplitude–phase form, x″ + 2px′ + ω₀²x = 0 with its roots, the boxed variation-of-parameters system, the boxed undamped forced solution, (2.8) and the boxed steady periodic solution, the practical-resonance frequency.
13. Figures: Figures 2.1–2.8 drawn live from the book's equations and numbers (the originals behind the toggle). Folds: 2.2 + 2.3 + 2.4 (free motion under a damping slider, the characteristic roots beside the graph), 2.5 + 2.6 (undamped forcing under an ω slider, ω₀ a dashed special that fires resonance). The pendulum sketch is the scene of Figure 2.1; the cart sketch the scene of 2.4's model figure and of 2.6's forced figures; the RLC sketch its own moving figure.
14. Sims (rule 15): the plan decides and builds its picks, reported afterwards. The 3Blue1Brown survivors of this chapter, picked by Chen: the complex exponential e^{st} with s dragged (2.2); the characteristic roots moving as damping rises in the fold of 2.2–2.4 (2.4); the transient split from the steady periodic solution with the phase lag shown in Figure 2.7 (2.6).
15. Tier default: lowest tier that carries the value add; no 3D in Chapter 2 (every figure is a graph or a flat apparatus; root rule 28.1).
16. Calculus overlap: 2.1, 2.2 (Calculus 17.1), 2.5 (17.2), 2.4 and 2.6 (17.3); the pages stay whole; shared ideas take Calculus's concept ids (line 6); the prose links Calculus for what it assumes (Taylor series, hyperbolic functions), never repeats it.
17. Citations: [EP] and [F] in Example 2.3.1 keep their brackets; their bibliography entries are footnoted in 0.1, where the book first cites them. The dropped section notes' [EP]/[BD] are not citations.
18. Types: the fifteen of `book.json`; Chapter 2 uses function, derivative, point, eigenvalue, frequency. No new type.
19. Recolour: `colours:default -- diffyqs` is run by the orchestrator at the end of the run, not in the chapter pass.
20. Derivations (root rule 29): the printed proof of Theorem 2.1.1 and the equation blocks the book works step by step are judged in each plan with their scores.
