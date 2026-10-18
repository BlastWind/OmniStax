# Plan: 4.9 Newton’s Method (m53620)

Source: `source.md`, converted with `tools/convert.py 4`. Status: plan; config 2 waives the review for this run, decisions reported afterwards. Built 2026-10-12.

Four objectives, an opening paragraph, Figures 4.77 to 4.84, Equation 4.8 (Newton's formula), Examples 4.46 to 4.49 each with its checkpoint (4.45–4.48), the Student Project Iterative Processes and Chaos, three Key Concepts, 59 section exercises (29 keyed), two glossary terms. One page.

## Sub-concepts (page headers)

0. `intro` (no header): zeroes of functions.
1. `describing-newtons-method` **Describing Newton’s Method**: the tangent-line idea (Figure 4.77), the formulas for x₁, x₂ and Equation 4.8, Example 4.46 (Figure 4.78), Example 4.47 (√2, Figure 4.79), their checkpoints, and F(x) = x − f(x)/f′(x), an iterative process. Introduces `newtons-method`, `iterative-process`.
2. `failures-of-newtons-method` **Failures of Newton’s Method**: the three failures, Figure 4.80, Example 4.48 (the 2-cycle, Figure 4.81), its checkpoint. Introduces `failures-of-newtons-method`.
3. `other-iterative-processes` **Other Iterative Processes**: x_n = F(x_{n−1}), Example 4.49 (the cobweb of x/2 + 4, Figure 4.82, the fixed point), its checkpoint, and the Student Project note `chaos-project` (Figures 4.83, 4.84, five questions, kept as a note, config 15). Reinforces `iterative-process`; introduces `cycles-and-chaos` (at the project).

## Correction

Checkpoint 4.48 says x_n = F(x_{n−1}) "for n ≥ 2"; the process starts at x₁, so n ≥ 1 (`c-cp48-index`, under the card).

## Colour, referents and function tokens

Types: `function` for f and F (the iteration function, as merged) and their graphs; `derivative` for f′; `line` for Newton's tangents and the line y = x of a cobweb; `point` for the iterates on the axis and the root or fixed point. x₀, x₁, …, x* are numbers in ink (Chapter 9 makes a sequence a type). No referents. Function tokens: the polynomials and functions of the examples and checkpoints (x³ − 3x + 1, x² − 2, x³ − 2x + 2, x/2 + 4, x/3 + 6).

## Figures

- `sim-newton` · Figure 4.77 · `newtons-method` · value add: flow, as a story: on Example 4.46's x³ − 3x + 1 (the book's figure draws a generic f) each step goes up to the curve and down its tangent to the axis, a story slider with stops x₀ … x₅ (play steps through, dragging scrubs) · arrows: none (the tangents are lines, drawn as they grow) · moving: the story · slider x₀ (1.1–3, default the example's 2; Checkpoint 4.45 starts at 0, outside it) · headline "x₃ = 1.532390162, 0.000301276 from the root x* ≈ 1.532088886." · readout the step x_n = x_{n−1} − f(x_{n−1})/f′(x_{n−1}) with the numbers · graph alone · 2D.
- `fig-cubic-root`, `fig-square-root-two`, `fig-two-cycle` · Figures 4.78, 4.79, 4.81 · faithful copies drawn live with the book's tangent steps (√2 from x₀ = 2; the 2-cycle 0 → 1 → 0) · still · 2D.
- `fig-wrong-root` · Figure 4.80 · `failures-of-newtons-method` · faithful copy on a stand-in (the book prints no formula): x³/4 − x, whose tangent at x₀ = 1, near the root sought 0, lands on the other root −2 · still · 2D.
- `sim-cobweb` · Figure 4.82 · `iterative-process`, `cycles-and-chaos` · value add: variation: the cobweb of x/2 + 4 from x₀ the reader sets, always closing on the fixed point 8 · still · slider x₀ (0–12, dashed circle at 8) · readout x₁ … x₄ · 2D. Checkpoint 4.48's x/3 + 6 is not drawn.
- `fig-mandelbrot` · Figure 4.83 · the book's image, kept: the project points at it; a computed picture, not a sketch to redraw.
- `sim-logistic-cobweb` · Figure 4.84 · `cycles-and-chaos` · value add: variation: the logistic map's cobweb from x₀ = 0.2 after 100 iterations, r the reader's (0.5–4, a detent at the book's 3.55, the 8-cycle); the headline names a fixed point, a cycle's length, or no cycle · still · 2D. The project asks the reader to explore r = 0.5, 2, 3.2, 3.5, 4; the Sim is that exploration (the project is not an exercise).

Photographs: Figure 4.83 kept. Exercise figures: none.

## Exercises

- Checkpoints 4.45–4.48 inline.
- Section exercises 406–464: 29 keyed odd ones kept. Kept with AI-marked approaches: 436 (Newton's method on f′), 446 and 448 (why the method fails), 454 (secant against Newton). 464 is standalone: no group stem. 26 even ones, computational, left out.
- Review exercise 543 (keyed) is set here in the chapter pass, `source_section` 4.10; 544 left out.

## Extra simulations (rule 15)

Judged and dropped: a secant-method Sim beside Newton's (the exercises introduce it; the section does not teach it); a Mandelbrot explorer (beyond the section: complex iteration). None built.

## Wanted at chapter level

- forms `eq-newtons-method` → `4.9-describing-newtons-method`; `eq-iterative-process` → `4.9-other-iterative-processes`.
- variables `4.9/F` → `4.9-describing-newtons-method`.
- Review 543 lands in the chapter pass.


## Derivations

- Describing Newton's Method · the iteration (4.8) · score 1 · built as drv-newtons-method (the tangent line of 4.2 solved for x₁, then x₂ and (4.8))
- Example 4.47 · Finding a Square Root · score 0 · not built: substitutes one function into (4.8)
