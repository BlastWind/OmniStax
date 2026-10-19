# Chapter 3 config: Systems of ODEs

Status: agreed by carry-over from `ch00/config.md` (2026-10-19); only the chapter-specific lines differ.

1. Start: `ch03/3.1`, then 3.2 … 3.9 in order.
2. Loop: build straight through with no stops; plans and decisions are reported afterwards.
3. Sections: nine pages, 3.1–3.9; no chapter introduction or summary (the book prints none).
4. Section notes (`\sectionnotes`: lecture counts, [EP]/[BD] section numbers): dropped, named in `notes`.
5. Numbering: the book's own; Figures 3.1–3.17 and Table 3.1 chapter-wide, equations (3.1)–(3.11), Example 3.M.k, Theorem 3.M.k, Exercise 3.M.k and 3.M.101….
6. Defined terms (`\emph{\myindex{…}}`): stay italic in the prose, each a `definition` concept with the italic words as `terms`; a term Calculus already defines reuses Calculus's concept id (determinant, dot product, vector, vector field, vector-valued function, linear independence, superposition, integrating factor).
7. Examples: kept whole in the text, Example 3.M.k as eyebrow.
8. Inline exercises: inline Try Its, kind `inline-exercise`; each carries an AI-marked solution that states the check and its result; no attainment.
9. End exercises: Exercises system, kind `exercise`; 101+ carry the book's answer (`\exsol`); parts of a `tasks` list are one card with parts.
10. Unkeyed end exercises (61 in this chapter): all kept, each with an AI-marked solution that states the answer and the reasoning, computed answers checked by SymPy or numerics before they are written; a "draw the vector field" question gets a described answer.
11. Answers: the book's `\exsol` is the key for 101+; everything else is an AI-marked solution.
12. Formulas list "Equations and formulas": the boxed formulas (cofactor expansion; the eigenvalue-method general solution; the undamped normal-mode solutions; the matrix exponential series; e^{tA} = E e^{tD} E^{−1}; the integrating-factor solution (3.6); ξ_k by eigenvector decomposition; variation of parameters) and the forms of the chapter's theorems.
13. Figures: Figure 3.1 a two-tank scene, moving; the two-cart sketch of Example 3.1.3 a moving scene; Figures 3.2 + 3.3 one direction field with a trajectory from a draggable initial point, moving; Figures 3.4–3.11 one portrait under the book's six matrices, moving, with a still matrix-entries Sim beside it; Table 3.1 kept in the text; Figure 3.12 a still three-cart scene; Figures 3.13 + 3.14 + 3.15 the two carts and their modes, moving; Figures 3.16 + 3.17 the rail-car crash with the wall distance on a slider, moving; the answer picture of Exercise 3.5.103 kept in its answer.
14. Sims (rule 15): the plan decides and builds its picks, reported afterwards. The 3Blue1Brown survivor in this chapter (3.8, the unit square and grid flowing under x⃗′ = Ax⃗, the corners the columns of e^{tA}) is built.
15. Tier default: lowest tier that carries the value add; no 3D in Chapter 3 (every figure is a relation in the plane).
16. Calculus overlap: Calculus 12.1–12.4 (vectors, dot product, determinant), 13.1–13.2 (vector-valued functions), 16.1 (vector fields), 17.1–17.2 (superposition, linear independence, undetermined coefficients, variation of parameters); the pages stay whole; shared ideas take Calculus's concept ids.
17. Citations [EP], [BD] appear only in section notes and are dropped with them; the Moler–Van Loan footnote of 3.8 is a book footnote.
18. Types: the fifteen of `book.json`; no new type.
19. Recolour: `colours:default -- diffyqs` is run by the orchestrator at the end, not in this chapter pass.
20. Title: the book is published as *Differential Equations for Engineers*.
21. Derivations (root rule 29): every printed derivation block is built unless it is a worked example of the section's own method or a one-line move; hidden ones only at score 4 or more; each plan names its candidates.
