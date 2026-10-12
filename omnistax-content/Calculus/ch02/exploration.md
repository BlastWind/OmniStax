# Exploration: Calculus, Chapter 2 Limits

Written 2026-10-12, before the chapter's sections were built. The six modules were converted with `python3 tools/convert.py 2` and read; the book's organization and apparatus are as `RULES.md` records them, and nothing in this chapter departs from that account. `config.md` beside this file is the agreed list.

## Why this chapter

The chapter builds the one idea the rest of the book stands on. 2.1 previews calculus through its two founding problems: the tangent (secant slopes closing in on a tangent, average velocities on an instantaneous one) and the area (rectangles closing in on the area under a curve), each solved by a limit. 2.2 gives the intuitive definition of the limit and reads limits from tables and graphs, then one-sided limits, infinite limits and vertical asymptotes, and answers the opener's question about the speed of light in Example 2.12. 2.3 states the limit laws, direct substitution for polynomials and rational functions, the 0/0 techniques (factor, conjugate, complex fraction), K/0 limits and the squeeze theorem with the four trigonometric limits. 2.4 defines continuity by three conditions, classifies discontinuities as removable, jump and infinite, extends continuity to intervals, and states the composite function theorem and the Intermediate Value Theorem. 2.5 makes the limit precise with ε and δ and proves limits, a limit law and a nonexistence with it.

## Modules

Ex. = worked examples, Fig. = numbered figures, Img. = unnumbered images in the narrative, CP = checkpoints (all keyed), Exer. = section exercises (chapter-wide numbers), Keyed = those carrying the book's solution, Gl. = glossary entries, KE = Key Equations rows.

| Section | Module | Ex. | Fig. | Img. | Tables | Defs / rules / other notes | CP | Exer. | Keyed | Gl. | KE | Media |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m53483 | 0 | 1 photo | 0 | 0 | — | 0 | 0 | 0 | 0 | 0 | — |
| 2.1 A Preview of Calculus | m53485 | 3 | 10 | 1 | 0 | 3 definitions | 3 | 1–29 | 15 | 8 | 2 | 1 applet (slope of a secant) |
| 2.2 The Limit of a Function | m53491 | 9 | 12 (1 photo) | 1 | 8 | 4 definitions, 3 theorems, 1 strategy | 7 | 30–82 | 26 | 4 | 6 | — |
| 2.3 The Limit Laws | m53492 | 13 | 8 | 1 | 0 | 4 theorems, 1 strategy, 1 Student Project | 10 | 83–130 | 24 | 9 | 2 | — |
| 2.4 Continuity | m53489 | 13 | 7 | 0 | 0 | 2 definitions, 1 continuity note, 4 theorems, 1 strategy, 2 proofs | 7 | 131–175 | 23 | 9 | 0 | — |
| 2.5 The Precise Definition of a Limit | m53493 | 6 | 5 | 1 | 2 | 4 definitions, 1 strategy, 1 proof | 4 | 176–207 | 16 | 2 | 0 | 1 applet (ε and δ) |
| Review (in 2.5) | m53493 | — | — | — | — | — | — | 208–232 | 12 | — | — | — |

207 section exercises, 104 keyed; 25 review exercises, 12 keyed; 30 checkpoints; 44 worked examples; 32 glossary entries. The key answers the odd numbers only. Exercise images: 11 in 2.2 (the graphs that 46–75 read and the sketch answers of 77, 79, 81), 5 in 2.3 (the piecewise answers 115, 117, the graphs of 118–125, 127, 129), 4 in 2.4 (154's graph, the answers of 155, 157, 159), 4 in 2.5 (the graphs of 180–185 and the review's 212).

## Figure, table and example numbers

Counted from the CNXML in book order, the opener as Figure 2.1; a bare `<media>` and a table with class `unnumbered` take no number. Not yet checked against openstax.org page by page; the first section agent of each page confirms its first and last number there.

| Section | Figures | Tables | Examples |
|---|---|---|---|
| intro | 2.1 the spaceship (splash photo) | — | — |
| 2.1 | 2.2 three lines, 2.3 k(x) = x², 2.4 a secant, 2.5 a closer secant, 2.6 secants approaching the tangent, 2.7 the secants of Example 2.1, 2.8 the area problem, 2.9 rectangles under the curve, 2.10 three rectangles under x² + 1 (Ex. 2.3), 2.11 a volume under a surface | — | 2.1–2.3 |
| 2.2 | 2.12 the three functions near x = 2, 2.13 (sin x)/x, 2.14 (√x − 2)/(x − 4), 2.15 g with g(−1) = 4, 2.16 h (checkpoint), 2.17 sin(1/x), 2.18 the piecewise break at 2, 2.19 1/x, 2.20 1/(x − a)ⁿ, 2.21 the graph of Example 2.11, 2.22 the spaceship again (photo), 2.23 m/m₀ against v/c | 2.1 table template, 2.2 (sin x)/x, 2.3 (√x − 2)/(x − 4), 2.4 the constant c, 2.5 sin(1/x), 2.6 the piecewise f, 2.7 1/x, 2.8 ratio of masses | 2.4–2.12 |
| 2.3 | 2.24 (x² − 1)/(x − 1) beside x + 1, 2.25 √(x − 3), 2.26 the piecewise of Ex. 2.22, 2.27 the squeeze, 2.28 −\|x\| ≤ x cos x ≤ \|x\|, 2.29 sin θ on the unit circle, 2.30 sin θ and tan θ on the unit circle, 2.31 the inscribed triangle (Student Project) | — | 2.13–2.25 |
| 2.4 | 2.32 a hole at a, 2.33 a gap at a, 2.34 a point off the curve, 2.35 (x² − 4)/(x − 2), 2.36 the jump at 3, 2.37 removable, jump, infinite, 2.38 the IVT | — | 2.26–2.38 |
| 2.5 | 2.39 δ for three ε, 2.40 δ for 2x + 1, 2.41 δ for x², 2.42 δ for √(x − 4), 2.43 δ for two M | 2.9 translating the definition, 2.10 the definition and its opposite | 2.39–2.44 |

## What is new

- The first chapter that leans on Chapter 1: its prerequisite edges go into 1.1–1.5 (function, graph, slope, interval notation, polynomial and rational functions, the trigonometric functions, composition, absolute value). 53 concepts, every glossary word among their `terms`.
- The `limit` type is the chapter's own: L, the value approached, the dashed level a hole sits on, and the ε-band around it. `line` arrives for the secant and the vertical asymptote; `derivative` for the tangent, the rates of change and the velocities; `integral` for the area problem.
- Holes, jumps, poles and closed dots are on every graph, which is what `F.plot`'s pieces, holes and poles were built for. The chapter's own new drawing need is the ε–δ pair: a horizontal band L ± ε in `limit` and a vertical band a ± δ in ink, with the graph's crossing of the band edges marked (see `## Wanted from figlib` below).

## Sketches to replace and photographs

Every numbered graph is replaced by a live figure drawn from the book's function (config 18); where the book draws no formula (2.4–2.6, 2.8, 2.9, 2.27, 2.32–2.34, 2.37, 2.38, 2.39, 2.43) the plan names a stand-in close to the sketch. Folds the plans take: 2.4 + 2.5 + 2.6 (one secant sliding into the tangent), 2.8 + 2.9 (the region, then its rectangles), 2.32 + 2.33 + 2.34 (the three failures of continuity), 2.29 + 2.30 (the unit-circle squeeze), 2.39 + 2.40 + 2.41 + 2.42 (the ε–δ game on the book's functions). Figure 2.11 (a surface over a rectangle) is a preview of Chapter 15 and stays a still: config 23 says no 3D in this chapter. Figure 2.31 belongs to the Student Project and stays the book's still.

Photographs: Figure 2.1 (the spaceship, opener) kept; Figure 2.22 (the same NASA picture inside Example 2.12) kept, since the example points at it. Nothing is dropped as decoration.

## Notes and media

Two media notes are dropped and named in `notes` (config 14): 2.1's secant-slope applet (Math Insight, a Java plugin) and 2.5's ε–δ applet. Both seed the chapter's two central Sims: the secant sliding into the tangent and the ε–δ band game. 2.3's Student Project (Deriving the Formula for the Area of a Circle, Figure 2.31) is a note with its five steps (config 15). The proofs of 2.4 (continuity of polynomials and rational functions; continuity of the trigonometric functions) and 2.5 (the sum law) stay in the text under their theorem (config 9). Problem-Solving Strategies: 2.2 (a limit from a table), 2.3 (the 0/0 form), 2.4 (continuity at a point), 2.5 (an ε–δ proof), each a note and a `skill`.

## Exercises that belong to another section

The Chapter Review Exercises (208–232) are printed at the end of 2.5 and placed with the section that introduces what each tests (config 11), `source_section` 2.5:

- 2.1: 231 (average velocity of x(t) = t² − 2t + 4 over [0, 2], keyed). 232 (unkeyed estimate) left out.
- 2.2: 210 (true or false: a vertical asymptote at a means f is undefined at a, unkeyed, kept with an AI-marked approach); 212 (limits read from a graph, unkeyed computational) left out.
- 2.3: 209 (true or false: the quotient law gives lim (sin x)/x, keyed), 213, 215, 217, 219, 221 (keyed limits), 223 (squeeze, keyed); 224 (an unkeyed squeeze proof) kept with an approach; 214, 216, 218, 220, 222 (unkeyed computational) left out.
- 2.4: 208 (true or false: f is continuous at a if its limit exists there, unkeyed, kept with an approach), 211 (keyed), 225, 227 (keyed); 230 (an unkeyed IVT argument) kept with an approach; 226 (unkeyed, find c) left out.
- 2.5: 229 (keyed δ = ∛ε); 228 (an unkeyed ε–δ proof) kept with an approach.

Unkeyed even section exercises are judged per plan under config 12. All of 2.1's are computational. 2.2's 46 and 48 ask which statements about a graph are false and why, and are kept with approaches; the rest are computational. 2.3 keeps 126 (true or false with a justification). 2.4 keeps 150, 152, 162, 164, 166, 168, 172 and 174 (explanations, an IVT proof, true-or-false justifications, a proof of continuity). 2.5 keeps every proof: 188, 190, 192, 194, 196, 198, 200, 202, 204, 206.

## Rule 23: what would make this chapter stunning

A reader should watch a limit happen rather than be told one. A point slides along a curve toward (a, f(a)) and the secant through it swings into the tangent, its slope ticking toward a number it never quite reaches; the same slider drives a falling rock's average velocity over shrinking intervals. Rectangles under a curve multiply and thin until their sum stops moving. On any graph, x walks toward a from both sides while two readouts chase the left and right limits, and the hole, the jump and the pole each show their own way of failing. The squeeze pins x cos x between ±|x| as the window zooms in, and on the unit circle sin θ < θ < tan θ is three lengths shrinking together. Last, the ε–δ definition becomes a game: the reader is dealt an ε band around L and must find a δ band around a that keeps the whole graph inside the box, and every ε smaller than the last still has its answer. Nothing needs 3D (config 23); the stunning part is the motion toward a, which no still can show.

## Wanted from figlib

- `F.band` (name for the figure agent): a horizontal strip y ∈ (L − ε, L + ε) in the `limit` colour and a vertical strip x ∈ (a − δ, a + δ) in ink, each semi-transparent with dashed edges, the crossing points of the graph with y = L ± ε marked and dropped to the x-axis, and the box where they meet outlined; the box turns red where the graph leaves it inside the δ strip. 2.5 needs it; 2.2's limit Sims can reuse the vertical strip.
- A zoom on a point (window shrinking about (a, L) on a slider) for the squeeze and the sin(1/x) oscillation; the plans ask whether `F.axes` already takes a live range.
