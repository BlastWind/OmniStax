# Plan: 1.5 Substitution (substitution:section)

Source: `source.md`. Status: built 2026-10-19 straight through (config 2); text, figure, derivations and `section.json` reviewed against the source and the rules, `ost check diffyqs --section 1.5` clean, built and checked in the browser in light and dark on 2026-10-19 (sec-1.5 task). Section notes ("can safely be skipped", [EP] §1.6) dropped and named in `notes`. Two examples, the table of substitutions, one footnote (the Bernoullis), 10 end exercises (4 keyed), no inline exercise, the line "Hint: Answers need not always be in closed form." as `exercises_lead`.

## Sub-concepts (page headers)

The book's: `intro` (no header, one sentence), `substitution` **Substitution** (`p#substitution-try`, `p#substitution-separate`, `p#unsubstitute`, `p#lost-solution`, the Sim, `p#substitution-guess`, the table `div#substitution-table`, `p#substitution-rule-of-thumb`), `bernoulli` **Bernoulli equations** (`p#bernoulli-def`, `div#eq-bernoulli`, `p#bernoulli-sub`, the derivation, Example 1.5.1), `homogeneous` **Homogeneous equations** (`p#homogeneous-def`, `div#eq-homogeneous`, `p#homogeneous-sub`, the derivation, `p#homogeneous-domain`, Example 1.5.2).

## Concepts (merged by the prep)

Introduced (one `introduces` row each): `substitution-method` (skill; `p#substitution-try`, where the book first changes variables), `bernoulli-equation` (definition; `p#bernoulli-def`, form `eq-bernoulli`), `bernoulli-substitution` (result; `p#bernoulli-sub`, forms `eq-bernoulli-v`, `eq-bernoulli-linear`), `homogeneous-first-order-equation` (definition; `p#homogeneous-def`, form `eq-homogeneous`), `homogeneous-substitution` (result; `p#homogeneous-sub`, forms `eq-homogeneous-v`, `eq-homogeneous-solution`). Uses: `separable-differential-equation`, `separation-of-variables`, `first-order-linear-differential-equation`, `integrating-factor`, `integrating-factor-method`, `linear-ivp-solution`, `implicit-solution`, `singular-solution`, `closed-form`, `direction-field`, and Chapter 0's `differential-equation`, `solution-to-a-differential-equation`, `initial-value`.

Calculus links for what the page assumes: changing variables in an integral (Calculus 5.5) on the opening sentence; the chain rule and the product rule are named in the derivations' reasons. Formula (1.4) links to `/diffyqs/ch01/1.4/#1.4-lei-defsol` (the 1.4 plan's anchor for the boxed solution).

## Colour, referents and symbols

y `function` (`\ky`), y′ `derivative` (`\kyprime`), v `function` (`\kv`), v′ `derivative` (`\kvprime`), p, q, F `function` (`\kp`, `\kq`, `\kF`); x, n, s, t, C, D in ink. "Substitution", "substitute" and "unsubstitute" are marked `substitution-method` where they name the method being applied (`bernoulli-substitution` and `homogeneous-substitution` where the sentence names those two); "linear", "separable", "separating variables", "integrating factor (method)", "initial condition", "closed form", "solution" and "differential equation" are spans at every mention in that sense. No referents.

## Figures

The book has none. Rule 14 asks one for the section's idea, and config 14 seeds it:
- `sim-substitution-family` · Sim · `substitution-method`, `solution-to-a-differential-equation`, `singular-solution` · value add: variation: the slope field of y′ = (x − y + 1)² and the solution y = (Dxe^(2x) − x − 2)/(De^(2x) − 1) for the D the reader sets (−5 to 5, a dashed special at D = 0 where the curve is the line y = x + 2 itself), the two line solutions y = x and y = x + 2 dashed and labelled; D > 0 puts a pole at x = −ln(D)/2 (the dashed asymptote), the left branch above y = x + 2 and the right one rising to y = x from below; D < 0 runs smoothly from y = x + 2 on the left to y = x on the right; as |D| grows the curve hugs y = x yet never becomes it (y − x = −2/(De^(2x) − 1) ≠ 0), the text's "no value of D gives the solution y = x" seen · arrows: none · still: a family under a parameter has no clock · slider D (untyped) · headline "D = 1.00: the solution blows up at x = 0.00; to the left it climbs away from y = x + 2, to the right it rises toward y = x from below." (D < 0: "…runs from y = x + 2 on the left to y = x on the right, crossing the y-axis at y(0) = 1.00."; D = 0: "the solution is the line y = x + 2 itself.") · readout (x − y + 2)/(x − y) = De^(2x) with D, the solved y with D, and y(0) = −2/(D − 1) (D < 0) or y − x = −2/(De^(2x) − 1) ≠ 0 (D > 0) · graph alone · 2D. Window x −2 to 3, y −2 to 5; the field in `derivative` lightened, the curves in `function`; the lines and the curve named on hover.

## Extra simulations (rule 15)

None beyond the seed. Considered and rejected: a Bernoulli "before and after" Sim (the substitution is algebra, carried by the derivation); a homogeneous slope field under a choice of F (Example 1.5.2's curve alone says little that the field of 1.2 did not).

## Derivations (rule 29)

- Substitution · y′ = (x − y + 1)² by v = x − y + 1 · score 2 · not built: the section's opening example of its method; the closing block that solves for y is algebra.
- Bernoulli equations · v = y^(1−n) transforms the equation into a linear one · the book states it without the steps · four moves, score 5 (the chain rule imported, a run of four unprinted moves) · built as `drv-bernoulli`, standing after the paragraph that states it (`p#bernoulli-sub`); two nodes: v′ = (1 − n)y^(−n)y′ from the substitution (chain rule), then the Bernoulli equation divided by yⁿ, v and v′ substituted (using result 1 and the condition n ≠ 0, 1), and multiplied by 1 − n to v′ + (1 − n)p(x)v = (1 − n)q(x).
- Homogeneous equations · from y′ = F(y/x) to ∫ dv/(F(v) − v) = ln|x| + C · printed as equations with words between · built as `drv-homogeneous`, replacing the three displays from "Here we try the substitutions" to the implicit solution (rule 29.2: the reader sees them once, in the derivation); two nodes: y′ = v + xv′ from v = y/x (product rule), then y′ = F(y/x) with the substitution, rearranged, separated, and integrated (separating variables as in 1.3).
- Examples 1.5.1, 1.5.2 · scores 2, 1 · not built: the substitutions with numbers.

## Exercises

- No inline exercise.
- End exercises 1.5.1–1.5.6 (kind `exercise`, unkeyed, ids `e1`–`e6`, all `open`): every one kept with an AI-marked solution stating the answer and its reasoning, every computed answer checked with SymPy (`verify.py` in the task's scratch): 1.5.1 y = e^(−x³/3 + x − 2/3)(5∫₁ˣ t e^(−5t³/3 + 5t − 10/3) dt + 1)^(−1/5) (a definite integral, as the hint allows); 1.5.2 y = √(eˣ − x); 1.5.3 y = e^(−x²/2)(1 − 3∫₀ˣ e^(−3t²/2) dt)^(−1/3) (a definite integral); 1.5.4 y = ±√(2Cx + C²) by v = x² + y²; 1.5.5 y = tan(x + C) − x + 1; 1.5.6 y = √(x⁴ + 7)/(√2 x), x > 0.
- 1.5.101–1.5.104 (ids `e101`–`e104`): the book's `\exsol` as the `solution` (`generated_by: source`), each confirmed by SymPy.
- Symbols in prompts and solutions: y, y′, v, v′, p, q, F through the macros; x, n, C, D, t, s plain.

## Wanted at chapter level

- Anchors, variables rows: `1.5/v`, `1.5/v_prime` → `1.5-substitution-try`; `1.5/p`, `1.5/q` → `1.5-eq-bernoulli`; `1.5/F` → `1.5-eq-homogeneous`; `1.5/y`, `1.5/y_prime` → `1.5-substitution-try`.
- Anchors, forms: `eq-bernoulli` → `1.5-eq-bernoulli`; `eq-bernoulli-v` → `1.5-bernoulli-sub`; `eq-bernoulli-linear` → `1.5-drv-bernoulli`; `eq-homogeneous` → `1.5-eq-homogeneous`; `eq-homogeneous-v`, `eq-homogeneous-solution` → `1.5-drv-homogeneous`.
- Glossary words: none to add (`bernoulli-equation` has "Bernoulli equation", `homogeneous-first-order-equation` has "homogeneous equations", "homogeneous equation").
- Footnote number: the book sets footnotes with per-page symbols (∗), not numbers; 1.1 wrote its one footnote as "1", and 1.5 follows (its only footnote, "1"). If the chapter pass prefers the book's ∗, change both.
