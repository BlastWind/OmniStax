# Plan: 2.4 Continuity (m53489)

Source: `source.md`, converted with `tools/convert.py 2`. Status: plan; config 2 waives the review for this run, decisions reported afterwards. Template: `ch01/1.1`.

Five objectives, two opening paragraphs, two definition notes, a classless note (Continuity from the Right and from the Left), four theorem notes, one Problem-Solving Strategy, two proofs, Figures 2.32 to 2.38, Examples 2.26 to 2.38, six checkpoints, no Key Equations, five Key Concepts, 45 section exercises (131–175, 23 keyed), 9 glossary terms. One page.

## Sub-concepts (page headers)

0. `intro` (no header): the two opening paragraphs.
1. `continuity-at-a-point` **Continuity at a Point**: conditions i–iii with Figures 2.32–2.34, the Definition note, the Problem-Solving Strategy, Examples 2.26 (Figure 2.35), 2.27 (Figure 2.36), 2.28 and the checkpoint, the theorem Continuity of Polynomials and Rational Functions with its `<h3>` Proof, Example 2.29 and its checkpoint. Introduces `continuity-at-a-point`, `discontinuity-at-a-point`, `determining-continuity-at-a-point`, `continuity-of-polynomials-and-rational-functions`.
2. `types-of-discontinuities` **Types of Discontinuities**: Figure 2.37, the Definition note, Examples 2.30–2.32 and the checkpoint. Introduces `removable-discontinuity`, `jump-discontinuity`, `infinite-discontinuity`.
3. `continuity-over-an-interval` **Continuity over an Interval**: the note Continuity from the Right and from the Left (kept with the book's title, no eyebrow beyond it), the paragraphs on open and closed intervals, Examples 2.33 and 2.34 and the checkpoint, the Composite Function Theorem note, Example 2.35 and its checkpoint, the theorem Continuity of Trigonometric Functions and its Proof (the book's `## Proof` is an `<h3>` here, root rule 3). Introduces `continuity-from-the-right`, `continuity-from-the-left`, `continuity-over-an-interval`, `composite-function-theorem`, `continuity-of-trigonometric-functions`.
4. `ivt` **The Intermediate Value Theorem**: the theorem note with Figure 2.38 inside it, Examples 2.36–2.38 and the checkpoint. Introduces `intermediate-value-theorem`.

The conditions i, ii, iii displayed in the prose stay as display math. No Key Equations: "Theorems and formulas" carries `eq-continuity`, `eq-continuity-from-right`, `eq-continuity-from-left`, `eq-composite-function-theorem`.

## Concept nodes (merged in book.json)

All 13 introduced here: definitions `continuity-at-a-point`, `discontinuity-at-a-point`, `removable-discontinuity`, `jump-discontinuity`, `infinite-discontinuity`, `continuity-from-the-right`, `continuity-from-the-left`, `continuity-over-an-interval`; results `continuity-of-polynomials-and-rational-functions`, `composite-function-theorem`, `continuity-of-trigonometric-functions`, `intermediate-value-theorem`; skill `determining-continuity-at-a-point`. Untyped: continuity is a property, not a value. Prerequisites into 2.2, 2.3 and Chapter 1 (`composite-function`, `addition-and-subtraction-formulas`).

Coverage: `introduces` at each `{term:}`, Definition and theorem note; `uses` for `one-sided-limit` in 2.27, 2.31, `limits-of-polynomial-and-rational-functions` in the first proof, `important-trigonometric-limits` before Example 2.35, `removable-discontinuity` and the others in Examples 2.30–2.32.

## Colour, referents and function tokens

f, g, s wear `function`; the limit and L `limit`; an asymptote `line`. a, b, c, z, k are ink; "continuous" and "discontinuity" name concepts but are untyped, so they are `data-concept` spans in ink. No referents.

Function tokens: (x² − 4)/(x − 2); the piecewise of Examples 2.27 and 2.28 and the checkpoint; (x + 1)/(x − 5), 3x⁴ − 4x²; (x + 2)/(x + 1), the checkpoint's x² with f(1) = 3; (x − 1)/(x² + 2x), √(4 − x²), √(x + 3); cos(x − π/2), sin(x − π); x − cos x, (x − 1)², 1/x, x³ − x² − 3x + 1.

## Figures

- `sim-three-conditions` · Figure 2.32 + 2.33 + 2.34 · `continuity-at-a-point`, `discontinuity-at-a-point` · value add: variation and a morph: the three failures the book draws one by one become states of one curve near a: (i) a hole, f(a) undefined; (ii) a gap, the limit does not exist; (iii) a point off the curve, the limit ≠ f(a); and a fourth state, continuous, where the point drops into the hole; the conditions list in the readout ticks and crosses as the morph runs · arrows: none · still · choice `i` / `ii` / `iii` / `continuous` · headline: "f(a) is defined, the limit exists, but they differ" for (iii) · readout: f(a) and lim_{x→a} f(x) with live numbers, each condition marked met or failed · graph alone · 2D. The book prints no formula: stand-ins close to the sketches.
- `fig-hole-at-two` · Figure 2.35 (Example 2.26) · standardisation only: (x² − 4)/(x − 2), the hole at (2, 4) · still · graph alone · 2D.
- `fig-jump-at-three` · Figure 2.36 (Example 2.27) · standardisation only: −x² + 4 for x ≤ 3 (closed at (3, −5)), 4x − 8 for x > 3 (open at (3, 4)) · still · graph alone · 2D.
- `fig-discontinuity-kinds` · Figure 2.37 · `removable-discontinuity`, `jump-discontinuity`, `infinite-discontinuity` · standardisation only: three panels, (a) removable, (b) jump, (c) infinite with its asymptote, stand-ins close to the sketches, each discontinuity hover-named · still · graph alone · 2D. Kept still: `sim-three-conditions` already moves through the failures, and three panels side by side are the comparison.
- `sim-ivt` · Figure 2.38 · `intermediate-value-theorem` · value add: variation: a level z dragged between f(a) and f(b) (dashed, ink) meets the curve, and every c in [a, b] with f(c) = z is dotted on the axis, so "at least one" is seen (one c, then three where the curve doubles back); choice of curve: the book's sketch; Example 2.36's x − cos x on [0, π/2] with z = 0 as a detent; Example 2.38's 1/x on [−1, 1], where z = 0 finds no c because the function is not continuous there · arrows: none · still · choice `the theorem` / `x − cos x` / `1/x`; slider z · headline: "z = 0.4: f(c) = z at c = …" or "no c: f is not continuous on [−1, 1]" · readout: f(a) < z < f(b) and f(c) = z live · graph alone · 2D. The checkpoint's x³ − x² − 3x + 1 is not offered.

## Exercises

- Checkpoints, six, after Examples 2.28, 2.29, 2.32, 2.34, 2.35 and 2.38.
- Section exercises 131–175, kind `exercise`, stems carried, "[T]" kept. 23 odd keyed kept (155, 157, 159 with their answer sketches as `figure`). Of the 22 even ones, kept with an AI-marked approach (config 12): 150 (explain why h does not contradict the IVT), 152 (prove the equation cos t = t³ has a solution, [T]), 162, 164, 166 (true or false, justified), 168 (explain the physical reasoning; its numeric part b is answered only in reasoning, no number generated), 172 (is there a D that makes F continuous, explained), 174 (show |x| is continuous everywhere). Left out as computational: 132–148, 154, 156, 158, 160, 170, named in `exercise_notes`. 154's graph stays out with its card.
- Review exercises held here, added once 2.5 is built: 208 (true or false: f continuous at a if its limit exists, unkeyed, approach), 211 (keyed False), 225 (keyed [2, ∞)), 227 (keyed c = −1), 230 (IVT for the thrown ball, unkeyed, approach); 226 (unkeyed find c) left out and named.
- Tags: `continuity-at-a-point` and `determining-continuity-at-a-point` for 131–144, the three kinds for 131–144 by their answers, `continuity-over-an-interval` for 145–149, 225–227, `intermediate-value-theorem` for 150–153, 164–167, 230, `composite-function-theorem` for 173–174.

## Extra simulations (rule 15)

None beyond the figures. Considered and dropped: a k slider making a piecewise function continuous (it answers 145–149 and 226–227); a pencil-trace animation of continuity over an interval (a transport with no clock in the idea, rule 24.9).

## Wanted at chapter level

- variables `2.4/z`, `2.4/c` → the IVT note in `2.4-ivt`.
- forms `eq-continuity` → the Definition note in `2.4-continuity-at-a-point`; `eq-continuity-from-right`, `eq-continuity-from-left` → the Continuity from the Right and from the Left note; `eq-composite-function-theorem` → its theorem note.
