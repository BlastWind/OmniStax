# Plan: 4.2 Linear Approximations and Differentials (m53605)

Source: `source.md`, converted with `tools/convert.py 4`. Status: plan; config 2 waives the review for this run, decisions reported afterwards. Built 2026-10-12.

Four objectives, an opening paragraph, Figures 4.7 to 4.11, Equations 4.1 to 4.3 (numbered as the book numbers them), Examples 4.5 to 4.11 each with its checkpoint (4.5–4.11; Example 4.5 has an Analysis), four Key Concepts, two Key Equations, 44 section exercises (20 keyed), seven glossary terms. One page.

## Sub-concepts (page headers)

0. `intro` (no header): the opening paragraph.
1. `linear-approximation` **Linear Approximation of a Function at a Point**: the tangent line of 1/x at 2 (Figure 4.7), Equation 4.1 L(x) = f(a) + f′(a)(x − a) with the three glossary words, Examples 4.5 (√x, Figure 4.8), 4.6 (sin x, Figure 4.9), 4.7 ((1 + x)ⁿ, Figure 4.10), each with its checkpoint. Introduces `linear-approximation`; uses `equation-of-a-tangent-line`, `local-linearity`, `derivative`.
2. `differentials` **Differentials**: dx and dy (Equation 4.2), dy/dx (Equation 4.3) and the differential form, Example 4.8, the actual change Δy against dy with Figure 4.11, Example 4.9. Introduces `differential`, `approximating-change-with-differentials`; uses `leibniz-notation`, `linear-approximation`.
3. `amount-of-error` **Calculating the Amount of Error**: propagated error, Example 4.10 (the cube), relative and percentage error, Example 4.11 (the Earth). Introduces `propagated-error`, `relative-error`, `percentage-error`.

Objectives to `objectives`; Key Concepts to `summary_html`; the two Key Equations are the forms `eq-linear-approximation` and `eq-differential`, anchored at Equations 4.1 and 4.2.

## Colour, referents and function tokens

Types: `function` for f and its graph; `line` for L, the linear approximation, which is the tangent line (chapter `COLOR.md`); `derivative` for f′ and dy/dx; `point` for (a, f(a)); `error` for the propagated, relative and percentage errors and, in the figures, the gap between f(x) and L(x). dx, dy, Δx and Δy stay ink: dy is the change along the tangent and Δy the change along the curve, numbers with no type of their own; V, r and q of the error examples are ink, written plain. No referents. Function tokens: every rule in x the prose gives (1/x, √x, sin x, cos x, x² + 2x, e^{x²}, the linear approximations L(x) of the examples), not (1 + x)ⁿ, whose n the grapher does not read.

## Figures

Figures 4.7 to 4.10 are four separate figures: Examples 4.5, 4.6 and 4.7 each read their own ("is given by Figure 4.8"), so they are not folded. One figure kind serves all four: a still graph of f with its tangent line L at a, a point x dragged along f (`F.drag` held by an x slider) and the error f(x) − L(x) drawn as a bracket between the curve and the line.

- `sim-tangent-reciprocal` · Figure 4.7 · `linear-approximation`, `local-linearity` · value add: variation: the reader drags x and watches the tangent's value part from 1/x as x leaves 2; the book's two parts stand side by side, (a) the whole graph to x = 10 and (b) the fixed window about x = 2.1 the book magnifies · arrows: none · still, it answers the drag · slider x (ink, 0.6 to 10.5, dashed circles at 2, 2.1 and 10, the values the text names), `F.drag` along f · headline "At x = 2.10, the tangent line gives 0.47500 and the function 0.47619." · graph alone, two panels · readout f(2.1) = 0.47619, L(2.1) = ½ − ¼(2.1 − 2) = 0.47500, f(x) − L(x) in `error` · 2D.
- `sim-tangent-root` · Figure 4.8 · `linear-approximation` · value add: variation, as above, on √x at 9; default x = 9.1, the example's · slider x (0 to 16, circles at 9 and 9.1) · headline as above · 2D.
- `sim-tangent-sine` · Figure 4.9 · `linear-approximation` · value add: variation, as above, on sin x at π/3; x steps by one degree and reads in degrees, default 62°, the example's · slider x (−π/2 to 3π/2, circles at π/3 and 62°) · 2D.
- `sim-tangent-power` · Figure 4.10 · `linear-approximation` · value add: variation, as above, on (1 + x)³ at 0, with the book's (b) window about x = 0.01; n stays 3 (a slider of n would answer Checkpoint 4.7) · slider x (−2 to 1, circles at 0 and 0.01) · readout f(1.01) and L(0.01) = 1 + 3(0.01) as the example writes them · 2D.
- `sim-differential` · Figure 4.11 · `differential`, `approximating-change-with-differentials` · value add: variation: dx shrinks and the differential dy along the tangent closes on the actual change Δy along the curve, the error between them drawn in `error` · arrows: none · still · sliders a (ink, 0 to 2.5, default 1) and dx (ink, 0.05 to 1.5, default 1.2) · headline "When x increases from 1.00 by dx = 1.20, y changes by 0.960 and the differential is 0.600." · graph alone · readout Δy = f(a + dx) − f(a), dy = f′(a)dx and Δy − dy with the numbers · 2D. The book draws no formula: the stand-in f(x) = 1 + x²/4 is curved like the sketch and is not Example 4.9's x² + 2x, so the figure does not answer Checkpoint 4.9.

Labels: f and L once each on the main panel; the points (a, f(a)), (x, f(x)), (x, L(x)) and the error by hover; Δy, dy, dx, a and a + dx on Figure 4.11 as the book labels them. Photographs: none. Exercise figures: none.

## Exercises

- Checkpoints 4.5–4.11, kind `checkpoint`, inline after Examples 4.5–4.11, hint and answer behind reveals. 4.10 (21.6 cm³) and 4.11 (7.6%) are numbers; the others are open.
- Section exercises 46–89, kind `exercise`, each with its group's stem. The 20 keyed odd ones (47–85) are kept. Kept with AI-marked approaches (config 12, explanations and confirmations the key leaves unanswered): 46 (the linear approximation of y = mx + b), 48 (why the approximation worsens away from a), 87, 88 and 89 (confirm three approximations at x = 0; 87 and 89 are odd and unkeyed). The other 19 even ones are computational and are left out, named in `exercise_notes`.
- Review exercise 531 (a linear approximation, keyed) is set here, `source_section` 4.10 (added in the chapter pass, once 4.10 is built); 532 (a differential, unkeyed) is left out.
- Tags: 46–55 `linear-approximation`; 56–67 `linear-approximation` (62–67 with `relative-error` for their numerical error); 68–77 `differential`; 78–86 `differential` and `approximating-change-with-differentials` (84 with `propagated-error`); 87–89 `linear-approximation`.

## Extra simulations (rule 15)

Judged and dropped: a cube with a measured side ± dx and the band of computed volumes (Example 4.10's asymmetric −7.351 ≤ ΔV ≤ 7.651 against dV = ±7.5 is two lines of the example, and a side slider would answer Checkpoint 4.10); a zoom slider on 4.7 (a visual setting, rule 26.7; the book's fixed (b) window carries the idea). None built.

## Wanted at chapter level

- variables `4.2/L` → `4.2-linear-approximation`.
- forms `eq-linear-approximation` → `4.2-linear-approximation`; `eq-differential` → `4.2-differentials`; `eq-actual-change`, `eq-change-by-differential` → `4.2-differentials`; `eq-propagated-error`, `eq-relative-error` → `4.2-amount-of-error`.
- Review 531 lands in the chapter pass.


## Derivations

- Differentials · the differential approximates the change, Δy ≈ dy · score 0 · built as drv-change-by-differential (a printed block deriving a general result; the displays and "Therefore, if dx is small", "That is", "In summary" replaced, the prose kept, "the linear approximation" now ends on $\kL(x)$)
- Example 4.7 · Approximating Roots and Powers · score 1 · not built: substitutes (1 + x)ⁿ into (4.1); three moves of the section's own formula
