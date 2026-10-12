# Plan: 7.4 Partial Fractions (m53681)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-12. Template: `ch01/1.1`.

Four objectives, an opening, two rule notes inside Example 7.29, one strategy note, Figure 7.11, Examples 7.28–7.35, four checkpoints (7.17–7.20), Equations 7.8 and 7.9, three Key Concepts, 62 section exercises (31 keyed), one glossary term, one media note.

## Sub-concepts (page headers)

0. `pfd-intro`: introduces `partial-fraction-decomposition`; Example 7.28 (long division), Checkpoint 7.17.
1. `nonrepeated` **Nonrepeated Linear Factors**: the general form, Example 7.29 with Equation 7.8, the paragraph `two-methods`, the rule notes `equating-rule` and `strategic-rule`, Examples 7.30, 7.31, Checkpoint 7.18, the Sim `sim-partial-fractions`.
2. `repeated` **Repeated Linear Factors**: Example 7.32 with Equation 7.9, Checkpoint 7.19.
3. `general` **The General Method**: the strategy note `general-strategy`, steps 1–3 with a–f inside step 3.
4. `quadratic` **Simple Quadratic Factors**: Examples 7.33, 7.34, 7.35 (Figure 7.11), Checkpoint 7.20.

The rule notes the converter left inside Example 7.29 are rebuilt as notes. The media note (long division) is dropped.

## Concept nodes

Introduced: `partial-fraction-decomposition`, `nonrepeated-linear-factors` (form `eq-nonrepeated-linear-factors`), `method-of-equating-coefficients`, `method-of-strategic-substitution`, `repeated-linear-factors` (form), `irreducible-quadratic`, `quadratic-factors` (forms), `decomposing-a-rational-function` (skill). Uses: `rational-function`, `integration-by-substitution`, `method-of-cylindrical-shells`.

## Colour, referents and function tokens

`function` for P and Q (polynomial-function) and the curves; `integral` for the region of Figure 7.11. A, B, C… stay ink. Referents `term-1`, `term-2`, `term-3`, the partial fractions of the Sim.

## Figures

- `sim-partial-fractions` · Sim · `partial-fraction-decomposition`, `method-of-strategic-substitution` · value add: intuition and variation: the section's rational functions (the opening 3x/(x² − x − 2), Examples 7.29, 7.32, 7.33) drawn with their partial fractions; a dragged x shows the fractions' values adding to the function's, and each pole belongs to one fraction · still · select of the four functions, slider x (−3 to 3) held by `F.drag` · headline: the sum with numbers · graph with a legend beside · 2D. Axes −3 to 3 by −6 to 6.
- `fig-shell-rational` · Figure 7.11 · faithful copy drawn live: x²/(x² + 1)² with [0, 1] shaded · standardisation only · still.

## Exercises

- Checkpoints 7.17–7.20 inline after Examples 7.28, 7.31, 7.32, 7.35.
- Section exercises 182–243: 31 odd keyed and kept; 242 (derive the tan(x/2) formulas) kept with an AI-marked approach; 30 even computational ones left out.
- Review exercises 409, 415, 421 held here; 420 left out.

## Extra simulations (rule 15)

`sim-partial-fractions`, built. Judged and not built: a long-division animation (the media note's subject) repeats algebra the text prints.

## Wanted at chapter level

- forms `eq-nonrepeated-linear-factors` → `7.4-nonrepeated`, `eq-repeated-linear-factors` → `7.4-repeated`, `eq-quadratic-factor` and `eq-repeated-quadratic-factors` → `7.4-general-strategy`.
- variables `7.4/P`, `7.4/Q`, `7.4/x` → `7.4-pfd-intro`.
