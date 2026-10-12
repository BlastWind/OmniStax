# Plan: 3.2 The Derivative as a Function (m53573)

Source: `source.md`, converted with `tools/convert.py 3`. Status: plan, built straight through (config 2). Template: `ch01/1.1`.

Five objectives, an opening paragraph, one definition note (the derivative function), one theorem (Differentiability Implies Continuity) with its proof, Figures 3.11 to 3.17, two unnumbered images (Example 3.13's graph and its answer), Examples 3.11 to 3.16, Checkpoints 3.6 to 3.10, one Key Equation, four Key Concepts, 52 section exercises (54–105, 26 keyed), 5 glossary terms. One page.

## Changes from the prep plan

1. Example 3.13's two graphs stay the book's images: the example is read from the drawing, and its answer is the second image. The derivative tracer offers only the two functions the text gives by formula (Figures 3.12, 3.13).
2. A correction note: Checkpoint 3.10's hint says "Use Example 3.13 as a guide" (the CNXML links Sketching a Derivative); it means Example 3.16, Finding Acceleration. Words as printed, the note says what is meant.

## Sub-concepts (page headers)

0. Opening paragraph (no header).
1. `derivative-functions` **Derivative Functions**: the Definition note `derivative-function-definition`, the differentiability paragraph (`differentiable-paragraph`), Examples 3.11, 3.12, Checkpoint 3.6, the notation paragraph and Leibniz notation (`leibniz-paragraph`), Figure 3.11. Introduces `derivative-function` (note), `differentiable-at-a-point`, `differentiable-on-a-set`, `differentiable-function` (all three terms in `differentiable-paragraph`), `leibniz-notation` (`leibniz-paragraph`).
2. `graphing-a-derivative` **Graphing a Derivative**: the √x and x² − 2x paragraphs with Figures 3.12, 3.13 (`graph-of-derivative-paragraph`), Example 3.13 and Checkpoint 3.7. Introduces `graph-of-the-derivative` (the paragraphs), `sketching-a-derivative` (Example 3.13).
3. `derivatives-and-continuity` **Derivatives and Continuity**: the theorem note `differentiability-continuity-theorem` and its Proof (`<h3>`), |x|, ∛x and x sin(1/x) with Figures 3.14–3.16, the numbered summary (`nondifferentiable-summary`), Example 3.14 (Figure 3.17) and Checkpoint 3.8. Introduces `differentiability-implies-continuity` (the note), `failure-of-differentiability` (the summary list).
4. `higher-order-derivatives` **Higher-Order Derivatives**: the paragraph and notations (`higher-order-paragraph`), Example 3.15, Checkpoint 3.9, Example 3.16, Checkpoint 3.10. Introduces `higher-order-derivative`.

Examples keep the book's ids. Example 3.11's "Use [the difference quotient with increment h]" links to `/calculus/ch03/3.1/#3.1-difference-quotient-definition`. Objectives and glossary to the tables, Key Concepts to `summary_html`; the Key Equation `eq-derivative-function` and the forms below make "Theorems and formulas". Example 3.11 also offers `/calculus/sheets/integral-calculator/?op=derivative&expr=sqrt(x)` after its result as the check the calculator gives (config 24; the calculator works by the rules, so the limit work stays the book's).

## Concept nodes (merged in book.json by the prep)

Introduced here, 10: definitions `derivative-function` (derivative, f′), `differentiable-at-a-point`, `differentiable-on-a-set`, `differentiable-function`, `leibniz-notation` (derivative, dy/dx), `higher-order-derivative` (derivative, f″); results `differentiability-implies-continuity`; ideas `graph-of-the-derivative`, `failure-of-differentiability`; skill `sketching-a-derivative`.

Coverage `uses`: `derivative`, `difference-quotient` in Examples 3.11, 3.12, 3.15; `increasing-function`, `decreasing-function` in `graph-of-derivative-paragraph`; `continuity-at-a-point`, `limit-laws` in the proof; `one-sided-limit` at |x| and in Example 3.14; `absolute-value-function` at |x|; `piecewise-defined-function` in Example 3.14; `velocity`, `acceleration` (3.4) in `higher-order-paragraph` and Example 3.16, marked only if the checker accepts mentions ahead of their span.

## Colour, referents and function tokens

Per `ch03/COLOR.md`: f, s wear `function`; f′ (`\kfprime`), y′ (`\kyprime`), dy/dx (`\kdydx`), f″, f‴, f⁽ⁿ⁾ (`\kfdprime`, `\kftprime`, `\kfn`), d²y/dx² (`\kdtwoydx`), s′, s″ (`\ksprime`, `\ksdprime`), v (`\kv`), a (`\ka`, acceleration, this section's row) `derivative`; S (`\kS`) `set`; the one-sided limits at 0 `limit`; the tangent line `line`. x, h (increment, plain), Δx, Δy, b, c of Example 3.14 and n are ink. In Checkpoint 3.8, a and b are coefficients: written plain `a`, not `\ka`. No referents.

Function tokens: √x, 1/(2√x), x² − 2x, 2x − 2, x², x² − 4, |x|, ∛x written `cbrt(x)`, the piecewise x sin(1/x) / 0 written `{x!=0: x*sin(1/x), 0}` if the grapher reads it (else `x*sin(1/x)`), Example 3.14's piecewise with the found b, c (`{x<-10: x^2/10+7x/4+25/2, -x/4+5/2}`), 2x² − 3x + 1, 4x − 3, 3t² − 4t + 1 in x, t³ in x.

## Figures

- `fig-delta-secant` · Figure 3.11 · `leibniz-notation` · standardisation only: a rising concave-up curve (stand-in y = 0.3x² + 1 near the sketch) with the secant through (a, f(a)) and (a + Δx, f(a) + Δy), Δx and Δy marked as legs, the secant dashed `line` · still · graph alone · 2D.
- `sim-derivative-tracer` · Figure 3.12 + 3.13 · `graph-of-the-derivative`, `derivative-function` · value add: variation: a point dragged along f carries the solid tangent (`line`), and below on the same x-range a dot at (x, f′(x)) in `derivative` leaves the traced part of f′ drawn, the rest faint; f′ crosses zero exactly where the tangent goes flat, and on √x it climbs without bound toward 0⁺. Choice `√x` (Figure 3.12, x on (0, 4]) / `x² − 2x` (Figure 3.13, x on [−1, 3]) · arrows: none · still · `F.drag` of x along f (untyped), default 2 / 0, special at x = 1 on the second state (f′(1) = 0) · headline: "x = 2.00: the slope of the tangent is f′(2) = 0.35" · readout: f′(x) = 1/(2√x) or 2x − 2 with the numbers · graph below (f above, f′ below, horizontal scene) · 2D. New figlib part: the tracer (below).
- `sim-three-failures` · Figure 3.14 + 3.15 + 3.16 · `failure-of-differentiability`, `differentiability-implies-continuity` · value add: variation: secants from (0, f(0)) to the points at −h and +h drawn at once (left dashed, right dotted, both `line`) while the reader shrinks h; at |x| they stay at −1 and 1 (a corner), at ∛x both steepen toward vertical (1/∛h² grows), at x sin(1/x) each swings as sin(1/h) without settling; the oscillation inside the resolvable width is filled with `shade` per the guide · arrows: none · still · choice `|x|` / `∛x` / `x sin(1/x)`; slider h (untyped, log, 1 to 0.001, default 0.5) · headline: "h = 0.010: left slope −1.00, right slope 1.00" (state 1), "slopes 21.5 and 21.5" (2), "slopes −0.51 and −0.51" (3) live · readout: lim from the left and right of (f(h) − f(0))/h, in `limit`, with the values · graph alone · 2D. New figlib part: one-sided secants.
- `sim-smooth-track` · Figure 3.17 (Example 3.14) · `differentiability-implies-continuity`, `differentiable-at-a-point` · value add: variation: b on a slider with c = 10b − 5 so the track stays continuous at (−10, 5); the parabola's slope there, b − 2, against the line's −1/4, shown as two short tangent stubs; at the dashed special b = 7/4 (c = 25/2) the stubs morph into one line and the kink disappears · arrows: none · still · slider b (untyped, 0 to 3.5, default 1) · headline: "b = 1.00: slope from the left −1.00, from the right −0.25: a corner" / at b = 7/4 "slopes agree: f is differentiable at −10" · readout: b − 2 = −1/4 with numbers · graph alone · 2D. The book's cart is drawn as a small still body on the line part.

Exercise images: the graphs of 64–67, 78, 79, 80 and 99 in their cards' `figure`; the answer images of 65, 67, 75, 77, 85, 87, 89 and 103 in their solutions; the review's 387 and its answer (rows below).

## Exercises

- Checkpoints 3.6–3.10, kind `checkpoint`, inline Try Its after Examples 3.12, 3.13, 3.14, 3.15, 3.16 (config 6): 3.6 `open` (f′(x) = 2x); 3.7 `open` ((0, +∞)); 3.8 `open` (a = 6 and b = −9); 3.9 `open` (f″(x) = 2); 3.10 `open` (a(t) = 6t), with the hint's correction note.
- Section exercises 54–105, kind `exercise`, each with its group's stem (config 10), the Saturn V table in the stem of 100–105, "[T]" kept. The 26 odd ones keyed and kept. Even ones kept with AI-marked approaches (config 12): 74, 76 (sketch and show not differentiable at 1; the approach does the limits, the sketch is described), 90, 92, 94 (what the two expressions mean, with units), 98 (interpret P(b) − P(a) over b − a and P′), 100 (the physical meaning of h′(t)). Left out, computational, named in `exercise_notes`: 54–72 even, 78, 80, 82, 84, 86, 88, 96, 102, 104.
- Review exercises held here (rows below): 367, 369, 371, 387 keyed; 368, 370 (true or false, unkeyed) kept with AI-marked approaches; 372 and 386 left out and named.
- Tags: 54–63, 81–83 `derivative-function` (81–83 also `higher-order-derivative`); 64–67, 84–89 `sketching-a-derivative`, `graph-of-the-derivative`; 68–73 `derivative`; 74–80 `failure-of-differentiability`, `differentiability-implies-continuity`; 90–98 `derivative-function`, `instantaneous-rate-of-change`; 99–105 `derivative-function` (105 also `higher-order-derivative`). Bloom per card.

## Extra simulations (rule 15)

Picks are the three Sims above, each folding or animating book figures. Considered and dropped: a Leibniz-notation zoom (Δx shrinking to dx): `sim-secant-to-tangent-h` of 3.1 already closes the secant; a second-derivative tracer (f, f′, f″ stacked): the section only computes f″ algebraically, and f″'s graphical meaning (concavity) is 4.5's; a position–velocity–acceleration triple for Example 3.16: 3.4's particle Sim carries motion.

## Wanted at chapter level

Ids confirmed with `ost ids calculus 3.2` after the build.

- variables: `3.2/f_prime` → `3.2-derivative-function-definition`; `3.2/S` → `3.2-differentiable-paragraph`; `3.2/y_prime`, `3.2/dy/dx`, `3.2/Δx`, `3.2/Δy` → `3.2-leibniz-paragraph`; `3.2/f_dprime`, `3.2/f_tprime`, `3.2/f_n`, `3.2/d2y/dx2` → `3.2-higher-order-paragraph`; `3.2/a`, `3.2/s_dprime` → `3.2-fs-id1169738099443` (Example 3.16).
- forms: `eq-derivative-function` → `3.2-derivative-function-definition`; `eq-leibniz-notation` → `3.2-leibniz-paragraph`; `eq-second-derivative-leibniz` → `3.2-higher-order-paragraph`.
- figlib: the derivative tracer and one-sided secants (also wanted by 3.5 and 3.9).
- Review exercises, once 3.9 is built: `ost add calculus exercises --section 3.2 '<row>'` for each, tags with `ost add calculus exercise_concepts --section 3.2 …`, and append to 3.2's `exercise_notes`: "Review exercises 367, 368, 369, 370, 371 and 387 are printed at the end of 3.9 and set here; 372 and 386 have no answer in the key and are left out." Rows (the `figure` field per the schema's exercise row; the builder confirms the field name):
  - `{"id": "r367", "source_id": "fs-id1169738040717", "source_section": "3.9", "source_number": "367", "kind": "review-exercise", "bloom": "Evaluate", "place": {"at": "end"}, "cite": "derivatives-and-continuity", "prompt": "<p><em>True or False</em>? Justify the answer with a proof or a counterexample.</p><p>Every function has a derivative.</p>", "answer": {"type": "choice", "generated_by": "source", "options": ["True", "False"], "correct": 1, "solution": "False."}}` · tags `differentiable-at-a-point`, `failure-of-differentiability`
  - `{"id": "r368", "source_id": "fs-id1169738040733", "source_section": "3.9", "source_number": "368", "kind": "review-exercise", "bloom": "Evaluate", "place": {"at": "end"}, "cite": "derivatives-and-continuity", "prompt": "<p><em>True or False</em>? Justify the answer with a proof or a counterexample.</p><p>A continuous function has a continuous derivative.</p>", "answer": {"type": "open", "generated_by": "ai", "solution": "False. The function $f(x)=|x|$ is continuous everywhere, but it has no derivative at $0$: the limits of $\\frac{|x|}{x}$ from the left and right are $-1$ and $1.$ So a continuous function need not have a derivative at every point, let alone a continuous one."}}` · tags `differentiability-implies-continuity`, `failure-of-differentiability`
  - `{"id": "r369", "source_id": "fs-id1169738040749", "source_section": "3.9", "source_number": "369", "kind": "review-exercise", "bloom": "Evaluate", "place": {"at": "end"}, "cite": "derivatives-and-continuity", "prompt": "<p><em>True or False</em>? Justify the answer with a proof or a counterexample.</p><p>A continuous function has a derivative.</p>", "answer": {"type": "choice", "generated_by": "source", "options": ["True", "False"], "correct": 1, "solution": "False"}}` · tags `differentiability-implies-continuity`, `failure-of-differentiability`
  - `{"id": "r370", "source_id": "fs-id1169738040765", "source_section": "3.9", "source_number": "370", "kind": "review-exercise", "bloom": "Evaluate", "place": {"at": "end"}, "cite": "derivatives-and-continuity", "prompt": "<p><em>True or False</em>? Justify the answer with a proof or a counterexample.</p><p>If a function is differentiable, it is continuous.</p>", "answer": {"type": "open", "generated_by": "ai", "solution": "True. If $f$ is differentiable at $a,$ then $\\lim_{x\\to a}f(x)=\\lim_{x\\to a}\\left(\\frac{f(x)-f(a)}{x-a}\\cdot(x-a)+f(a)\\right)=f'(a)\\cdot 0+f(a)=f(a),$ so $f$ is continuous at $a$; this is the theorem Differentiability Implies Continuity."}}` · tag `differentiability-implies-continuity`
  - `{"id": "r371", "source_id": "fs-id1169738040784", "source_section": "3.9", "source_number": "371", "kind": "review-exercise", "bloom": "Apply", "place": {"at": "end"}, "cite": "derivative-functions", "prompt": "<p>Use the limit definition of the derivative to exactly evaluate the derivative.</p><p>$f(x)=\\sqrt{x+4}$</p>", "answer": {"type": "open", "generated_by": "source", "solution": "$\\frac{1}{2\\sqrt{x+4}}$"}}` · tag `derivative-function`
  - `{"id": "r387", "source_id": "fs-id1169738226588", "source_section": "3.9", "source_number": "387", "kind": "review-exercise", "bloom": "Apply", "place": {"at": "end"}, "cite": "graphing-a-derivative", "prompt": "<p>Draw the derivative for the following graphs.</p>", "figure": "media/ch03/CNX_Calc_Figure_03_09_206.jpg", "answer": {"type": "open", "generated_by": "source", "solution": "<img src=\"media/ch03/CNX_Calc_Figure_03_09_207.jpg\" alt=\"The function is the straight line y = −4 until x = 0, at which point it becomes a straight line starting at the origin with slope 2. There is no value assigned for this function at x = 0.\">"}}` · tags `sketching-a-derivative`, `graph-of-the-derivative`

## As built (2026-10-12)

- figlib (Chapter 3 block): `F.deriv({f, df})` and `F.secants(ctx, ax, f, a, h, color)`, pure parts in `src/lib/fig/deriv.ts` with `tests/deriv.test.ts`; documented in `docs/prompts/interactive-figures.md`.
- `fig-delta-secant` uses the stand-in f(x) = 4 − 0.18(x − 4.5)², rising and concave down like the book's sketch (not concave up as planned).
- `sim-three-failures`: h is a linear slider 0.01 to 1 (detents 1, 0.5, 0.1, 0.01) on fixed axes ±1.2; for x sin(1/x) the two secant slopes are −sin(1/h) and sin(1/h) (f is even), so they are opposite, not equal as the plan's headline guessed.
- `sim-smooth-track`: the right-hand slope is the line itself, so only the left stub shows until b = 7/4.
- Example 3.13's two graphs are bare images in the example (no figure row), as the plan says.
- No Integral Calculator link here: the section applies no rule; 3.3 carries it.
- Variables rows added: 3.2/f, 3.2/s, 3.2/v and 3.2/s_prime (velocity); anchors set on every 3.2 row and its three forms.
- `ost.py`: a variables key whose symbol holds a slash (dy/dx) could not be named; `find_row` now splits the key only as many times as the table has key fields.
- Corrections: Checkpoint 3.10's hint (Example 3.13 for 3.16), exercise 105's key (f″ for F″).
- Review rows 367–371 and 387 are written by mk.py once 3.9 is built.
