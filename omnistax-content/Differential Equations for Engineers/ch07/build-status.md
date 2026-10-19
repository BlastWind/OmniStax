# Chapter 7 build status

Task `prep1-ch07` (prep stage one), port 8108, scratch /tmp/claude-0/-home-user-OmniStax/fa1756e3-ffc3-5115-96ae-60401395d3dc/scratch/prep1-ch07/ (`verify.py`, `verify2.py`, `verify3.py`, `verify4.py`: the SymPy and numeric checks behind the plans' expected answers and headline numbers).

## Done (2026-10-19)
- Sources read whole (converted earlier: 7.1, 7.2, 7.3). Figures copied flat into `media/ch07/` (`ps-conv.svg`, `ps-sin.svg`, `ps-airy.svg`, `bessel-first-second.svg`); the SVGs carry no text, so the plot windows are read at build time.
- `exploration.md`, `config.md` (agreed by carry-over), `COLOR.md`.
- `chapter.json`: id 7, dir ch07, title "Power-series methods" (the book's heading), no intro, three sections with their `\label` modules, 29 draft variables rows (type stated on every typed row; `concept` only on y → `dependent-variable`, already merged).
- `book-rows.json` draft: 8 symbols (a, b, c, S, f_k, J, Γ with macros; ρ without, in ink), 41 concepts (21 in 7.1, 8 in 7.2, 12 in 7.3; 18 of them Calculus ids; 22 definitions, 14 results, 5 skills), 46 forms, 64 prereq edges, Hasse-reduced and checked acyclic by script (`check_rows.py` in the scratch: every prereq resolves, no edge is reached through another, no form id repeats, no merged symbol is restaged).
- `plan.md` for 7.1, 7.2, 7.3: 7 figures (4 Figures 7.1–7.4, 3 Sims), all still, all 2D; 4 derivations (one printed per section plus 7.3.2's hidden second solution); every exercise placed with its expected answer, verified.

## Done (2026-10-19, stage two, task `merge-chain`)

- Every cross-chapter prereq id existed as guessed (none renamed); no staged symbol clashed.
- `redefines: true` added on 7.1/f, y, 7.2/y_1, y_2, 7.3/r, r_1, r_2, Y (earlier chapters gave them other meanings).
- The merge refused the form id `eq-term-by-term-derivative`, already 4.3's: this chapter's renamed **`eq-power-series-term-by-term-derivative`** (on `term-by-term-differentiation-and-integration`). `7.1/plan.md` still names the old id: the 7.1 agent uses the new one.
- Concept links set (their repeated type overrides removed): 7.1/a, 7.2/a → `power-series-coefficients`; 7.1/S → `partial-sum`; 7.1/ρ → `radius-of-convergence`; 7.1/f → `analytic-function`; 7.3/Γ → `gamma-function`; 7.3/J → `bessel-functions-of-the-first-kind`; 7.3/Y → `bessel-functions-of-the-second-kind`.
- Whole-book Hasse check: no redundant edge. `ost check diffyqs`: no errors, no warnings.

## Next

- Sections 7.1 → 7.3, then the chapter pass.

## Decisions Chen must hear
- Chapter title "Power-series methods", the book's own heading (the task brief and the book-level exploration table write it without the hyphen).
- No referents anywhere in Chapter 7: y₁, y₂ recur as the generic pair through four examples and Bessel's y₁, y₂, so one referent colour would bind one letter to four curves; the pairs wear `function` and are told apart by labels. This refines the book `COLOR.md` line on named-apart solutions for this chapter only.
- The indicial exponent r and the roots r₁, r₂ wear `eigenvalue`, the characteristic root's role (book `COLOR.md`); λ of Example 7.3.4 is a constant and stays in ink (no row), unlike Chapter 3's λ; the Bessel order p, the polynomial coefficients P, Q, R, the centre x₀ and the independent variable x are written plain.
- Symbol keys: the coefficient letters a, b, c and the partial sum S are staged as base letters (`\ka_{k+2}`, `\kS_n`), while Chapter 4 keys each written variant of its Fourier coefficients separately (`a_0`, `a_n`, `b_n`, `c_0`, `c_n`); the two do not clash, but one book now writes the same kind of symbol two ways, and Chapter 7 cannot follow Chapter 4's way without thirteen symbol rows for a alone. `Y` is reused from Chapter 4 with the Bessel meaning on 7.3's row.
- Eighteen Calculus ids reused (listed in `exploration.md`), including `term-by-term-differentiation-and-integration` for a result Lebl states only for differentiation and `maclaurin-series-of-common-functions` for the eˣ and sin x series; Calculus's `series-solution-of-the-bessel-equation-of-order-0` is not reused (Lebl's result is the order-p pair).
- Derivations (config 21): one printed block built per section (Theorem 7.1.2's ρ = 1/A; Example 7.2.1; Example 7.3.2), the later worked examples of the same method left printed, and Example 7.3.2's hidden second solution built (score 7) with the recursion b_k = b_{k−1}/k − 1/(k·k!), which reproduces the book's three values.
- Figures: no fold, no moving figure, no 3D; the "disc of convergence in the complex plane" of the book-level exploration is not built (the text keeps x real; root rule 26.5). `sim-bessel` evaluates Y_n from its standard series, which the book does not print (the text only says software has it). No 3Blue1Brown survivor falls in Chapter 7.
- Exercise 7.3.8 e), x²y″ + x²y′ + x²y = 0: classed regular singular by the book's definition (P(0) = 0, both limits exist), with the solution noting that dividing by x² gives y″ + y′ + y = 0, for which 0 would be ordinary. All 13 keyed answers check; no correction note.
- Converter artefacts: the bare `[2]` and `[3]` markers in the 7.1–7.3 `source.md` (page breaks of the PDF edition) are not footnotes and are dropped.

## What section agents must know
- Symbol keys and macros added (8): a \ka, b \kb, c \kc, S \kS, ρ , f_k \kfk, J \kJ, Γ \kGamma.
- Reused from earlier chapters: Y \kY, f \kf, r \kr, r_1 \krone, r_2 \krtwo, y \ky, y_1 \kyone, y_2 \kytwo, y_dprime \kydprime, y_prime \kyprime.
- Types on rows (overrides): `sequence` for 7.1/b, 7.1/c, 7.3/a, 7.3/b; `derivative` for 7.1/f_k, 7.1/y_prime, 7.2/y_prime, 7.2/y_dprime, 7.3/y_prime, 7.3/y_dprime; `function` for 7.2/y_1, 7.2/y_2, 7.3/y_1, 7.3/y_2, 7.3/f; `eigenvalue` for 7.3/r, 7.3/r_1, 7.3/r_2.
- Concept links: 7.1/a, 7.2/a → `power-series-coefficients`; 7.1/S → `partial-sum`; 7.1/ρ → `radius-of-convergence`; 7.1/f → `analytic-function`; 7.1/y, 7.2/y, 7.3/y → `dependent-variable`; 7.3/J → `bessel-functions-of-the-first-kind`; 7.3/Y → `bessel-functions-of-the-second-kind`; 7.3/Γ → `gamma-function`.
- Ink rows (`type: null`): none.
- `redefines: true` rows: 7.1/f, 7.1/y, 7.2/y_1, 7.2/y_2, 7.3/r, 7.3/r_1, 7.3/r_2, 7.3/Y.
- Form ids per concept (main first): power-series eq-power-series · partial-sum eq-partial-sum · convergent-power-series eq-power-series-limit · absolute-convergence eq-absolute-convergence · ratio-test eq-ratio-test · root-test eq-root-test · ratio-and-root-tests-for-power-series eq-power-series-A, eq-radius-from-A · taylor-series eq-taylor-series · maclaurin-series-of-common-functions eq-series-exp, eq-series-sin · term-by-term-differentiation-and-integration eq-power-series-term-by-term-derivative · combining-power-series eq-series-sum, eq-series-constant-multiple · multiplying-power-series eq-series-product, eq-series-product-coefficients · geometric-series eq-geometric-series · ordinary-point eq-polynomial-coefficient-ode · power-series-solution-of-a-differential-equation eq-series-solution-ansatz · recurrence-relation eq-recurrence-example · airys-equation eq-airys-equation · series-solutions-of-airys-equation eq-airy-recurrence, eq-airy-solutions · hermites-equation eq-hermites-equation · polynomial-solutions-of-hermites-equation eq-hermite-recurrence · frobenius-type-solution eq-frobenius-type-solution · indicial-equation eq-indicial-example · regular-singular-point eq-regular-singular-limits · frobenius-theorem eq-frobenius-ode · method-of-frobenius eq-frobenius-two-roots, eq-frobenius-double-root, eq-frobenius-integer-difference · bessel-equation eq-bessels-equation · frobenius-solutions-of-bessels-equation eq-bessel-indicial, eq-bessel-y1, eq-bessel-y2 · gamma-function eq-gamma-function, eq-gamma-recursion · bessel-functions-of-the-first-kind eq-bessel-J-p, eq-bessel-J-minus-p, eq-bessel-J-n, eq-bessel-J-minus-n · bessel-functions-of-the-second-kind eq-bessel-Y-n · general-solution-of-bessels-equation eq-bessel-general-solution · reducing-to-bessels-equation eq-drum-equation, eq-drum-solution. No form on: power-series-coefficients, power-series-center, radius-of-convergence, convergence-of-a-power-series, analytic-function, reindexing-a-series, polynomial-as-a-power-series, power-series-of-a-rational-function, singular-point.
- Numbers: as listed in `exploration.md` and each plan (unchanged by the merge).
- Plan ids renamed by the merge: `eq-term-by-term-derivative` → `eq-power-series-term-by-term-derivative`.
