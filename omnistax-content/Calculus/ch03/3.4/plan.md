# Plan: 3.4 Derivatives as Rates of Change (m53576)

Source: `source.md`, converted with `tools/convert.py 3`. Status: planned 2026-10-12 in the chapter prep; config 2 waives the review for this run, and the decisions below are reported to Chen afterwards. Template: `ch01/1.1`.

Five objectives, an opening paragraph, three definition notes (motion, population growth rate, marginal functions), Figures 3.22 to 3.24, one unnumbered image (Example 3.34's graph of s(t)), Examples 3.33 to 3.38, four checkpoints (Checkpoints 3.21 to 3.24), no Key Equations, four Key Concepts, 25 section exercises (150–174, 12 keyed), Tables 3.4 (population of London) and 3.5 (hares and lynx) in the exercises, 8 glossary terms. One page. The first section agent confirms the figure, table and example numbers against openstax.org.

## Sub-concepts (page headers)

The book's own headers apply and are kept (root rule 3).

0. Opening paragraph (no header), the section's own introduction (root rule 21.3); its terms "acceleration" and "population growth rates" are marked as uses of the concepts introduced below.
1. `amount-of-change` **Amount of Change Formula**: amount of change, average rate of change, the instantaneous rate recalled, the formula, Figure 3.22, Example 3.33 and Checkpoint 3.21. Introduces `amount-of-change`, `average-rate-of-change` (their term spans) and `amount-of-change-formula` (the displayed formula `amount-of-change-formula`).
2. `motion` **Motion along a Line**: the definition note (`motion-definition`) with velocity, speed and acceleration, Examples 3.34 (with its unnumbered graph), 3.35, 3.36 (Figures 3.23, 3.24) and Checkpoint 3.22. Introduces `velocity`, `speed`, `acceleration` (at the note) and `speeding-up-and-slowing-down` (Example 3.35's part b, span `speeding-up`).
3. `population` **Population Change**: the definition note (`population-definition`), Example 3.37 and Checkpoint 3.23. Introduces `population-growth-rate`.
4. `cost-revenue` **Changes in Cost and Revenue**: the definition note (`marginal-definition`), the h = 1 approximation, Example 3.38 and Checkpoint 3.24. Introduces `marginal-cost`, `marginal-revenue`, `marginal-profit`.

Examples keep the book's ids and numbers. Objectives and glossary go to the tables, Key Concepts to `summary_html`. "Theorems and formulas": the book prints no Key Equations here, so the list is the forms below. Example 3.37 cites "the amount of change formula" (`[ref:fs-id1169739034265]`): an in-page link to the formula's span.

## Concept nodes (merged in book.json by the prep)

All 10 introduced here: definitions `amount-of-change`, `average-rate-of-change`, `velocity`, `speed`, `acceleration`, `population-growth-rate`, `marginal-cost`, `marginal-revenue`, `marginal-profit`; result `amount-of-change-formula`; idea `speeding-up-and-slowing-down`. Prerequisites into 3.1–3.2 and Chapter 1, as merged.

Coverage `uses`: `derivative` (3.1) at the recalled f′(a) and Example 3.33; `instantaneous-velocity` and `average-velocity` (2.1) in Example 3.34; `higher-order-derivative` (3.2) at a(t) = s″(t); `derivative-function` in Examples 3.35, 3.36, 3.38; `tangent-line` in Figure 3.22's paragraph; `power-rule`, `sum-rule`, `constant-multiple-rule` (3.3) where the examples differentiate polynomials.

## Colour, referents and function tokens

s, P, C, R, p wear `function` through `\ks`, `\kP`, `\kC`, `\kR`, `\kp`; v, a, MC, MR, MP, P′ wear `derivative` (`\kv`, `\ka`, `\kMC`, `\kMR`, `\kMP`, `\kPprime`), and so do the words velocity, speed, acceleration, average rate of change, population growth rate and the marginal terms; "amount of change" is untyped and stays ink. h, t, x are ink. The tangent line of Figure 3.22 wears `line`. No referents: each figure draws one function.

Function tokens: −16x² + 64, x³ − 4x + 2, x³ − 9x² + 24x + 4, x² − 5x + 1, −0.03x² + 9x, 9 − 0.03x, −0.03x² + 8x − 50 (all written in x for the grapher). Example 3.37's P is given by data, not a rule, and is unmarked.

Sheets (config 24): Example 3.34's v(t) = s′(t) = −32t is the section's first derivative taken to answer a question about motion; link the Integral Calculator there, `/calculus/sheets/integral-calculator/?op=derivative&expr=-16x^2%2B64`. No new rule is applied, so no Table of Derivatives link.

## Figures

- `sim-amount-of-change` · Figure 3.22 · `amount-of-change-formula`, `amount-of-change` · value add: variation: h on a slider moves a + h along the axis; the tangent at a gives f(a) + f′(a)h, the curve gives f(a + h), and the gap between them grows with h, which is the formula's "≈" and its accuracy · arrows: none · still · slider h (ink), −1.5 to 1.5, default 1, special 0 · stand-in close to the sketch: f(x) = 0.25x² + 1 at a = 2, so f′(a) = 1 · headline: "h = 1.00: f(a) + f′(a)h = 3.00, f(a + h) = 3.25" · readout f(a + h) ≈ f(a) + f′(a)h with numbers and the error · graph alone · 2D.
- `fig-ball-drop` · Example 3.34's unnumbered image · `velocity` · standardisation only: s(t) = −16t² + 64 on [0, 2] drawn live and still, hover-named · no controls · 2D.
- `sim-particle-path` · Figure 3.23 + 3.24 (Example 3.36) · `velocity`, `speeding-up-and-slowing-down` · value add: flow by animation: the particle moves along its coordinate axis while a cursor runs along the graph of s(t) = t³ − 9t² + 24t + 4 above it and the sign chart of v(t) (Figure 3.23) lights its interval; the particle stops and turns at s = 24 (t = 2) and s = 20 (t = 4), the path of Figure 3.24 drawn behind it · arrows: kinematic (the particle's velocity arrow on the axis, `derivative`, length v(t)) · moving: the particle and the time cursor on a cycle t from 0 to 5 · scrub t (ink) with the transport, specials at 2 and 4 · headline: "t = 3.00: s = 22.00, v = −3.00, moving right to left" · readout v(t) = 3t² − 18t + 24 with the number · graph above the particle's axis, sign chart between · 2D. Both figure numbers link here.
- Exercise figures: 159's graph and answer images in its card. Tables 3.4 and 3.5 stay `div.book-table` in the stems of 167–168 and 174.

## Exercises

- Checkpoints 3.21–3.24, kind `checkpoint`, inline Try Its after Examples 3.33, 3.36, 3.37, 3.38 (config 6): 3.21 `number` −4.4; 3.22 `choice` [right to left, left to right] correct "left to right"; 3.23 `number` 3300; 3.24 `number` 2 (the book prints "$2").
- Section exercises 150–174, kind `exercise`, each with its group's stem, "[T]" kept. The 12 odd ones are keyed and kept. The 13 even ones (150, 152, 154, 156, 158, 160, 162, 164, 166, 168, 170, 172, 174) are computational and left out, named in `exercise_notes`; 168's and 174's tables stay in the kept cards that share them (167, 173 do not use Table 3.5, so Table 3.5 leaves with 174 and is named in the notes).
- No review exercise is held here.
- Tags: `velocity`, `acceleration`, `speeding-up-and-slowing-down` for 151–159; `marginal-cost`, `marginal-revenue`, `marginal-profit` for 161, 163; `population-growth-rate` for 165, 167; `velocity` for 169; `derivative-function` for 171, 173; Bloom per card.

## Extra simulations (rule 15)

None beyond the figures. Considered and dropped: a marginal-revenue slider for Example 3.38 (the readout R(101) − R(100) against R′(100) is two numbers the example prints; the slider positions look alike, rule 24.9); a population estimate slider for Example 3.37 (a straight-line estimate from two data points, the same picture as `sim-amount-of-change`); a speedometer for Example 3.35 (`sim-particle-path` already shows v and a acting in opposite directions on the axis).

## Wanted at chapter level

Ids confirmed with `ost ids calculus 3.4` after the build.

- variables `3.4/v`, `3.4/a` → `3.4-motion-definition`; `3.4/P`, `3.4/P_prime` → `3.4-population-definition`; `3.4/MC`, `3.4/MR`, `3.4/MP` → `3.4-marginal-definition`.
- forms: `eq-amount-of-change`, `eq-average-rate-of-change` → `3.4-amount-of-change` (the header's span holding the two displays); `eq-amount-of-change-formula` → `3.4-amount-of-change-formula`; `eq-velocity`, `eq-speed`, `eq-acceleration` → `3.4-motion-definition`; `eq-population-growth-rate` → `3.4-population-definition`; `eq-marginal-cost`, `eq-marginal-revenue`, `eq-marginal-profit` → `3.4-marginal-definition`; `eq-marginal-cost-estimate` → `3.4-marginal-estimate` (the h = 1 paragraph).

## As built (2026-10-12)

- `sim-amount-of-change` uses the stand-in f(x) = 1 + 4/(x + 1) at a = 1 (f(a) = 3, f′(a) = −1), decreasing and concave up like the book's sketch, not the rising 0.25x² + 1; h runs −0.8 to 2.5 with a special at 0; the gap is drawn in `error` (it is the book's "error in using f(a) + f′(a)h"), so the figure draws function, line, derivative, error. Until the chapter's recolour, error and function are close reds.
- `fig-ball-drop`: Example 3.34's unnumbered graph, a still live copy (kind figure, eyebrow "Figure").
- `sim-particle-path`: no t slider; the transport's scrubber is the clock (model 5 s in 5 s, hold 1.2 s). The path is lifted a lane at each turn as the book draws Figure 3.24.
- No calculator link here: no book words name the step (the plan's link at v(t) = s′(t) = −32t would need added words).
- New symbols C_prime, R_prime, v_prime (book-rows.json, merged); variables rows added for f, f_prime, s, s_prime, s_dprime, v_prime, v_ave, C, C_prime, R, R_prime, p; anchors on every 3.4 row and the eleven forms.
- Corrections: Example 3.34 (v(t) for v(2)), exercise 153's key (ft/s² for ft/s), 167's key (the missing t), 169's key (x for t).
- Checkpoint 3.22 is a choice of the two directions.
