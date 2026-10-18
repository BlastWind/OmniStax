# Plan: 17.2 Nonhomogeneous Linear Equations (m54047)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-12. Template: `ch01/1.1`.

Three objectives, an opening paragraph, one definition note, one theorem with its proof, one rule (Cramer's), two strategies, Table 17.2, Equations 17.3 and 17.4, Examples 17.11–17.16, five checkpoints (17.10–17.14), four Key Concepts, 32 section exercises (16 keyed), four glossary terms. No figure and no media note.

## Sub-concepts (page headers)

0. `nonhomogeneous-intro`: the opening paragraph.
1. `general-solution` **General Solution to a Nonhomogeneous Linear Equation** (the book's): the equation and its complementary equation (Equation 17.3), the particular-solution definition note, the General Solution to a Nonhomogeneous Equation note (Equation 17.4) and its `<h3>` Proof, Example 17.11, Checkpoint 17.10, the paragraph naming the two methods.
2. `undetermined-coefficients` **Undetermined Coefficients** (the book's): the method, Example 17.12 with `sim-nonhomogeneous`, the paragraph on lower-order terms, Example 17.13, Checkpoint 17.11, Table 17.2, the pitfall with 3e^{−2x} and `sim-undetermined-guess`, the strategy note, Example 17.14, Checkpoint 17.12.
3. `variation-of-parameters` **Variation of Parameters** (the book's): the derivation of the system for u′ and v′, the Cramer's Rule note, Example 17.15, Checkpoint 17.13, the strategy note, Example 17.16, Checkpoint 17.14.

## Concept nodes

Introduced: `complementary-equation` (`eq-complementary-equation`, Equation 17.3), `general-solution-to-a-nonhomogeneous-equation` (`eq-general-solution-nonhomogeneous`, Equation 17.4), `method-of-undetermined-coefficients` (term and strategy), `cramers-rule` (`eq-cramers-rule`), `method-of-variation-of-parameters` (`eq-variation-of-parameters`, `eq-variation-particular`). Reinforced: `particular-solution` (8.1's, the same idea, defined again here in the note). Uses: `nonhomogeneous-linear-equation`, `homogeneous-linear-equation`, `general-solution-to-a-homogeneous-equation`, `solving-with-the-characteristic-equation`, `general-solution`, `linear-independence`, `determinant`, `method-of-equating-coefficients`, `indefinite-integral`, `exponential-function`.

## Colour

`function` for y (`\kyfn`), y₁, y₂ (`\kyone`, `\kytwo`), y_p (`\kyp`), r (`\krfn`), u (`\kufn`) and v (`\kv`); `derivative` for y′, y″, y₁′, y₂′, y₁″, y₂″, y_p′, y_p″, u′, v′. x, t, the constants c₁, c₂, A, B, C, p, q, the unknowns z₁, z₂ and the coefficients a₁, b₁, r₁, a₂, b₂, r₂ of Cramer's rule, and x where Example 17.14(b) uses it as the unknown, stay ink. No referents.

## Figures

The book draws none. Two Sims:

- `sim-nonhomogeneous` · Sim · `general-solution-to-a-nonhomogeneous-equation`, `particular-solution`, `complementary-equation` · variation: c₁ and c₂ of Example 17.12's general solution y = c₁e^{−x} + c₂e^{−3x} + x − 4/3; whatever the constants, the complementary part dies away and the solution closes on the particular solution y_p = x − 4/3 (dashed), a few other members faint behind; the gap y − y_p at x = 3 is bracketed · arrows none · still · sliders c₁ and c₂ (−3 to 3, defaults 2 and −1) · headline the gap at x = 3 · graph alone · 2D. Readout: y = c₁e^{−x} + c₂e^{−3x} + x − 4/3 with the live constants.
- `sim-undetermined-guess` · Sim · `method-of-undetermined-coefficients`, `complementary-equation` · variation: the guess for y″ + 5y′ + 6y = 3e^{−2x} as a choice (Ae^{−2x}, Axe^{−2x}, Ax²e^{−2x}) and its coefficient A; the left side y_p″ + 5y_p′ + 6y_p of the guess (solid) against r(x) = 3e^{−2x} (dashed): for Ae^{−2x} it is 0 whatever A is, the book's "0 = 3e^{−2x}"; for Axe^{−2x} it is Ae^{−2x}, which meets r at A = 3 (a dashed circle); for Ax²e^{−2x} it is A(2 + 2x)e^{−2x}, which no A makes equal to r · arrows none · still · choice of guess, slider A (−1 to 5, step 0.05, default 1) · headline what the left side is · graph alone · 2D. Readout: the left side with the live A beside 3e^{−2x}.
- Table 17.2 stays a `div.book-table`.

## Exercises

- Checkpoints 17.10–17.14 inline after Examples 17.11, 17.13, 17.14, 17.15 and 17.16; open answers, hints as `hint`.
- Section exercises 54–85: the 16 odd keyed ones kept (67, 69, 71 with their [T] part b, keyed). Left out, unkeyed and computational: 54–64 even (undetermined coefficients), 66, 68, 70 (forms and particular solutions), 72, 74 (either method), 76, 78 (variation of parameters), 80, 82 (initial-value problems with a given y_p), 84 (variation of parameters with given y₁, y₂).
- Review exercises held here, `source_section` 17.4: 127, 129, 131 (keyed), 118 (unkeyed true or false on Cramer's rule, AI-marked approach).
- Keys checked against the equations (71 by algebra software): no slip found.

## Extra simulations (rule 15)

Both Sims above are extras (the book has no figure to replace): `sim-nonhomogeneous` opens the view that the particular solution is where every solution ends up, which the theorem states only as a sum; `sim-undetermined-guess` turns the pitfall's "0 = 3e^{−2x}" into a picture that no slider can fix until the guess is multiplied by x. Weighed and left out: a Sim of variation of parameters (u and v as curves add nothing the algebra does not), and a Cramer's-rule picture of two lines meeting (the systems here have function coefficients).

## Wanted at chapter level

- forms `eq-complementary-equation` → `17.2-fs-id1170572140518`, `eq-general-solution-nonhomogeneous` → `17.2-fs-id1170571626655`, `eq-cramers-rule` → `17.2-fs-id1170572548183`, `eq-variation-of-parameters` → `17.2-fs-id1170571789080`, `eq-variation-particular` → `17.2-fs-id1170571789080`.
- variables of 17.2: y, y′, y″, r → `17.2-general-solution`; y₁, y₂, y_p → `17.2-fs-id1170571626655`; y₁′, y₂′, y₁″, y₂″, u, v, u′, v′, y_p′, y_p″ → `17.2-variation-of-parameters`.

## Derivations

- General Solution to a Nonhomogeneous Equation, Proof · score 3 · built as drv-general-solution-nonhomogeneous, the proof's lines replaced under its heading and its opening sentence kept: y solves the equation; z − y_p solves the complementary equation; z − y_p = c₁y₁ + c₂y₂ from the hypothesis, rearranged to z.
- Variation of Parameters, the block after "We want to find functions u(x) and v(x)" · score 1 · built as drv-variation-of-parameters, the block replaced through the system: y_p′, y_p″ (the regrouping line inserted), the substitution and the vanishing brackets, then the condition u′y₁ + v′y₂ = 0 and the system it leaves.
