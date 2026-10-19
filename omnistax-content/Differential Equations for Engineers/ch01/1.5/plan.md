# Plan: 1.5 Substitution (substitution:section)

Source: `source.md`. Status: built 2026-10-19 straight through (config 2). Section notes ("can safely be skipped", [EP] §1.6) dropped and named in `notes`. Two examples, the table of substitutions, one footnote (the Bernoullis), 10 end exercises (4 keyed), the line "Hint: Answers need not always be in closed form." as `exercises_lead`.

## Sub-concepts (page headers)

The book's: `intro` (no header), `substitution` **Substitution**, `bernoulli` **Bernoulli equations**, `homogeneous` **Homogeneous equations**.

## Concepts

Introduced: `substitution-method` (skill, "Changing variables in an ODE"), `bernoulli-equation` (definition; form y′ + p(x)y = q(x)yⁿ), `bernoulli-substitution` (result; form v = y^(1−n) makes it linear), `homogeneous-first-order-equation` (definition; terms homogeneous equations; form y′ = F(y/x)), `homogeneous-substitution` (result; forms v = y/x, y′ = v + xv′ and the implicit solution ∫ dv/(F(v) − v) = ln|x| + C). Uses: `separation-of-variables`, `first-order-linear-differential-equation`, `linear-ivp-solution`, `singular-solution`.

## Colour, referents and symbols

y `function`, y′ `derivative`, v `function`, v′ `derivative`, p, q, F `function`; x, n, C, D in ink. No referents.

## Figures

The book has none. Rule 14 asks one for the section's idea:
- `sim-substitution-family` · Sim · `substitution-method`, `singular-solution` · value add: variation: the slope field of y′ = (x − y + 1)², the solution y = (Dxe^(2x) − x − 2)/(De^(2x) − 1) for the D the reader sets (−5 to 5, a dashed circle at D = 0 where it is the line y = x + 2), the two line solutions y = x and y = x + 2 dashed; as |D| grows the curve hugs y = x yet never becomes it, the text's "no value of D gives the solution y = x" seen · arrows: none · still · slider D (untyped) · headline "D = 1: the solution through (0, 2) ... " (the y-intercept read live) · readout (x − y + 2)/(x − y) = De^(2x) with D · graph alone · 2D. Window x −2 to 3, y −2 to 5.

## Extra simulations (rule 15)

None. Bernoulli's and the homogeneous substitution are algebra the derivations below carry.

## Exercises

End: 1.5.1–1.5.6 kept with AI-marked solutions checked by SymPy (1.5.1 and 1.5.3 keep a definite integral where no closed form exists); 1.5.101–1.5.104 with the book's answers.

## Wanted at chapter level

- Anchors: `bernoulli-equation` → `1.5-bernoulli`; `homogeneous-first-order-equation`, `homogeneous-substitution` → `1.5-homogeneous`; variable v → `1.5-substitution`.

## Derivations

- Substitution · y′ = (x − y + 1)² by v = x − y + 1 · score 2 · not built: the section's opening example of its method; the closing block that solves for y is algebra.
- Bernoulli equations · v = y^(1−n) transforms the equation into a linear one · the book states it without the steps · four moves, score 5 (the chain rule imported, a run of four unprinted moves) · built as `drv-bernoulli`, standing after the paragraph that states it.
- Homogeneous equations · from y′ = F(y/x) to ∫ dv/(F(v) − v) = ln|x| + C · printed as equations with words between · built as `drv-homogeneous`, replacing the two displays from "Here we try the substitutions" to the implicit solution.
- Examples 1.5.1, 1.5.2 · scores 2, 1 · not built: the substitutions with numbers.
