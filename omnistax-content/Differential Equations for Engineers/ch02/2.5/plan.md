# Plan: 2.5 Nonhomogeneous equations (sec:nonhom)

Source: `source.md`. Status: plan; built straight through 2026-10-19. Template: Calculus `ch17/17.2`.

Three book subsections; equations (2.6), (2.7); Theorem 2.5.1; one boxed system; two notes ("Note: A common mistake …", the lower-degree remark is prose); inline Exercise 2.5.1; end exercises 2.5.2–2.5.11 and 2.5.101–2.5.106 (16, six keyed). No figure. The section note is dropped.

## Sub-concepts (page headers)

1. `solving-nonhom` **Solving nonhomogeneous equations** (the book's): (2.6), (2.7), associated homogeneous equation, complementary solution, particular solution, y = y_c + y_p and its check by linearity, why it is general (the w argument, its expanded and operator displays kept), Theorem 2.5.1, `sim-yc-yp`, the moral.
2. `undetermined-coefficients` **Undetermined coefficients** (the book's): the polynomial guess with `drv-undetermined-polynomial` in place of its `split` block and the sentences that solve for A and B, y_c, the general solution, the initial conditions, Try It 2.5.1, the common-mistake note, lower-degree terms, the cos 2x guess with `drv-undetermined-trig` in place of its `gather` blocks, exponentials, products, the duplication hiccup (y″ − 9y = e^{3x}), the double duplication (y″ − 6y′ + 9y = e^{3x}), the whole-expression check, several terms.
3. `variation-of-parameters` **Variation of parameters** (the book's): tan x and its derivatives, the method's scope, the trial y = u₁y₁ + u₂y₂, `drv-variation-of-parameters` in place of the run of displays from "Compute (note the product rule!)" to f(x) = u₁′y₁′ + u₂′y₂′, the boxed system (kept, framed), the paragraph after it, `drv-variation-tan` in place of the displays from "the two equations are" to y_p, the general solution, the closing summary.

## Concept nodes

Introduced: `complementary-equation` (definition; terms associated homogeneous equation; form (2.7) `eq-associated-homogeneous`), `complementary-solution` (definition, `function`, symbol y_c), `general-solution-to-a-nonhomogeneous-equation` (result, Theorem 2.5.1; form `eq-yc-plus-yp`), `method-of-undetermined-coefficients` (skill), `method-of-variation-of-parameters` (skill; form `eq-variation-of-parameters`, the boxed system).
Reinforced: `particular-solution` (Chapter 0's: one solution, no arbitrary constants; here of (2.6), symbol y_p), `linear-operator`, `nonhomogeneous-linear-equation` ((2.6) is its example), `superposition-principle`. Uses: `solution-for-distinct-real-roots`, `solution-for-a-repeated-real-root`, `solving-an-initial-value-problem`, `general-solution-to-a-homogeneous-equation`, `characteristic-equation`, `second-order-linear-differential-equation`.

## Colour

`function`: y, y_c, y_p, ỹ_p, w, u, v, u₁, u₂, y₁, y₂, f(x) (\ky, \kyc, \kyp, \kyptilde, \kw, \ku…); `derivative`: y′, y″, y_p′, y_p″, w′, w″, u₁′, u₂′, y₁′, y₂′, y₁″, y₂″. Ink: x, A, B, C, D, E, F (coefficients of a guess), C₁, C₂, L. Referents: `yc` and `yp` in `sim-yc-yp` and in the text where the figure's paragraph names them; the symbols y_c and y_p split as rule 7 says (their variables rows carry `ref`).

## Figures

The book draws nothing here.

- `sim-yc-yp` · Sim · `general-solution-to-a-nonhomogeneous-equation`, `complementary-solution`, `particular-solution` · variation: the initial conditions of y″ + 5y′ + 6y = 2x + 1 pick C₁ and C₂; the solution y is drawn with its two parts, y_p = (3x − 1)/9 (fixed, whatever the conditions) and y_c = C₁e^{−2x} + C₂e^{−3x}, and a probe x shows y_c and y_p stacked to y; every solution closes on the line y_p as y_c dies · arrows none · still · sliders y(0) (−1 to 1, default 0), y′(0) (−2 to 2, default 1/3, the book's conditions), the probe x (0 to 4, default 1) · headline: C₁ and C₂ · graph alone, x 0 to 4 by y −1 to 1.5 · 2D. Readout: y = C₁e^{−2x} + C₂e^{−3x} + (3x − 1)/9 with the live constants and the probe's three values adding up. Placed after Theorem 2.5.1.

Extra Sims weighed and left out: the derivatives of tan x as a growing list (the book's list says it); an undetermined-coefficients guesser (a table, not a picture).

## Exercises

- Try It 2.5.1 inline after the general solution with its constants: AI approach checked by SymPy.
- End: 2.5.2–2.5.11 kept with AI-marked solutions, each checked by SymPy (2.5.5, 2.5.6 the forms only; 2.5.8 left as a definite integral; 2.5.9 the cases c ≠ ±1, c = 1, c = −1); 2.5.101–2.5.106 with the book's answers, each checked.

## Derivations

- The w argument before Theorem 2.5.1 · two single-line displays in prose, three moves each · not built (prose first, below the four-move floor); the book itself gives it twice.
- The `split` block of y_p = Ax + B and the coefficient matching · printed block · built as `drv-undetermined-polynomial`: the substitution, the matching of x and constant terms as their own node, y_p = (3x − 1)/9.
- The `gather` block of the cos 2x guess, its collected line and the solved A, B · printed block · built as `drv-undetermined-trig`.
- y″ − 9y = e^{3x} with Axe^{3x} · single displays, three moves · not built.
- Variation of parameters, the general part · a run of `align` displays · built as `drv-variation-of-parameters`: y′ by the product rule, the imposed condition, y″, y₁″ = −y₁ and y₂″ = −y₂, y″ + y = u₁′y₁′ + u₂′y₂′ = f(x). The boxed system stays printed.
- Variation of parameters, the tan x part · a run of `aligned` displays · built as `drv-variation-tan`: the system with y₁ = cos x, y₂ = sin x, the multiplication and addition, u₂′ and u₁′, the integrals (∫ sec x dx = ln|sec x + tan x| from calculus), y_p = −cos x ln|sec x + tan x|. The general solution's display stays printed.

## Wanted at chapter level

- forms `eq-associated-homogeneous` → `2.5-eq3-5-h`, `eq-yc-plus-yp` → `2.5-theorem-2-5-1`, `eq-variation-of-parameters` → `2.5-vp-system`.
- variables of 2.5: y, y_c, y_p → `2.5-solving-nonhom` (y_c, y_p with `ref` yc, yp); ỹ_p, w, w′, w″, y_p′, y_p″ → `2.5-general-why`; u₁, u₂, u₁′, u₂′, y₁, y₂, y₁′, y₂′, f → `2.5-variation-of-parameters`.
