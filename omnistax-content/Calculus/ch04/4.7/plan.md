# Plan: 4.7 Applied Optimization Problems (m53614)

Source: `source.md`, converted with `tools/convert.py 4`. Status: plan; config 2 waives the review for this run, decisions reported afterwards. Built 2026-10-12.

One objective, an opening paragraph, one Problem-Solving Strategy, Figures 4.62 to 4.70, Equations 4.6 and 4.7, Examples 4.32 to 4.37 each with its checkpoint (4.31–4.36), one media note (a video on the volume of a box), four Key Concepts, 45 section exercises (23 keyed), one glossary term. One page.

## Sub-concepts (page headers)

0. `intro` (no header): optimization problems and their constraint.
1. `closed-interval` **Solving Optimization Problems over a Closed, Bounded Interval**: Example 4.32 (the garden, Figures 4.62, 4.63), the strategy `optimization-strategy`, Examples 4.33 (the box, Figures 4.64, 4.65), 4.34 (travel time, Figure 4.66), 4.35 (revenue, Figure 4.67), 4.36 (the inscribed rectangle, Figure 4.68), their checkpoints. Introduces `optimization-problem` (at the glossary word) and `solving-optimization-problems`.
2. `open-interval` **Solving Optimization Problems when the Interval Is Not Closed or Is Unbounded**: x² + 4 over (−∞, ∞), Example 4.37 (the square-based box, Figures 4.69, 4.70) and its checkpoint. Reinforces `solving-optimization-problems`.

## Corrections and source fixes

- Checkpoint 4.35's hint calls the inscribed figure a square; it is a rectangle (`c-cp35-rectangle`, under the card).
- Example 4.35 prints a bare dollar sign ("between $50 per day"), set as &#36; so it is not read as math; the ¢ of Checkpoint 4.36 is set outside the math, where the math font has no ¢.

## Colour, referents and function tokens

Types: `function` for the quantities optimized, A(x), V(x), T(x), R(p), S(x) (applied quantities wear their maths type; each with a variables row) and their graphs; `derivative` for A′, V′, T′, R′, S′; `point` for the optimum on each graph. x, y, p, n(p), L, W, H, the distances D and rates of D = R × T are ink: the R and T of "Distance = Rate × Time" are not the revenue and the total time and are written plain. No referents. Function tokens: x² + 4, A(x) = 100x − 2x², V(x), T(x), R(p) is in p and stays plain, A(x) = 2x√(4 − x²), S(x).

## Figures

Every scene is joined to the graph of the quantity it optimizes, the slider being the variable the problem reduces to; the optimum is a dashed circle on the slider and a `point` on the graph. All still: the problems have no clock.

- `sim-garden` · Figure 4.62 + 4.63 · `optimization-problem`, `solving-optimization-problems` · value add: variation: x sets the garden against the wall (y = 100 − 2x), beside A(x) with the point at x; the book draws the garden and the graph apart, and the graph is one state of this one figure, so they fold; the checkpoint's citation of Figure 4.63 links here · slider x (0–50 ft, circle at 25) · headline "x = 10.0 ft and y = 80.0 ft: the area is 800.0 ft²." · graph beside · 2D.
- `sim-box` · Figure 4.64 + 4.65 · `solving-optimization-problems` · value add: variation and depth: the sheet with its four cut squares, the folded box in a locked perspective (rule 28.2), and V(x) on [0, 12] · slider x (0.2–11.8 in., circle at 10 − 2√7) · graph beside · 2D with a locked view. Seeded by the dropped video.
- `sim-travel-time` · Figure 4.66 · `solving-optimization-problems` · value add: variation: the run along the shore and the swim to the island redrawn for each x, beside T(x), whose minimum at 6 − 6/√55 the book reaches only by algebra · slider x (0–6 mi) · graph beside · 2D.
- `sim-revenue` · Figure 4.67 · `solving-optimization-problems` · value add: variation and a view the text gives in words only: the revenue R = n × p is the area of the rectangle under the line n(p) = 1000 − 5p, beside the book's graph of R(p) · slider p (50–200, circle at 100) · 2D. Checkpoint 4.34's 750 − 5p is not drawn.
- `sim-inscribed-rectangle` · Figure 4.68 · `solving-optimization-problems` · value add: variation: the corner (x, y) moves on the ellipse, beside A(x) = 2x√(4 − x²) · slider x (0–2, circle at √2) · 2D.
- `sim-square-box` · Figure 4.69 + 4.70 · `solving-optimization-problems` · value add: variation and depth: the box of volume 216 in³ for each base x, in a locked perspective, beside S(x) on (0, ∞), whose two infinite ends force the minimum · slider x (3–18 in., circle at 6∛2) · 2D with a locked view.

Photographs: none. Exercise figures: 316, 322, 323, 326, 351, 354 and the lifeguard stem keep the book's images in their cards.

## Exercises

- Checkpoints 4.31–4.36 inline; 4.31 (5000 ft²) and 4.34 ($75) are numbers.
- Section exercises 311–355: 23 keyed odd ones kept, 313 set as a true-or-false choice. Kept with AI-marked approaches: 312 (why check endpoints) and 314 (true or false, the Extreme Value Theorem). The standalone problems 322–326 and 329 carry no group stem. 20 even ones, computational, left out.
- Review exercise 551 (Regiomontanus' problem, keyed, with its image) is set here in the chapter pass, `source_section` 4.10; 552 (the airline, unkeyed) left out.

## Extra simulations (rule 15)

None beyond the required six: each problem's own picture already carries its slider. Judged and dropped: an animation of the flaps folding up (a motion with no time in the idea; the locked box shows the result).

## Wanted at chapter level

- variables rows 4.7 A, V, T, R, S (merged in prep) and A′, V′, T′, R′, S′ (added here), anchors → `4.7-closed-interval` (A, V, T, R and their primes), `4.7-open-interval` (S, S′).
- Review 551 lands in the chapter pass.


## Derivations

- Example 4.34 · Minimizing Travel Time · score 5 · not built: an optimization worked example applying the section's strategy; the Pythagorean distance is part of setting up the function
- Example 4.36 · Maximizing the Area of an Inscribed Rectangle · score 2 · not built: everything printed, the section's method
