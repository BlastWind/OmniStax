# Chapter 4 colour plan

Prepared 2026-10-12 with `config.md`. It refines the book's `COLOR.md` for what this chapter draws; root rules 7 and 22 hold, and nothing here invents a hue. The types are the 18 of `book.json`.

## What the chapter colours

No fact and no convention: the opener and Figure 4.4 are photographs in their own colours, Figure 4.83 (the Mandelbrot set) is the book's image. The categories:

- `function`: every function the text names (f, g, F of an iterative process, s(t), the quantities to optimize A(x), V(x), T(x), R(p), S(x)), and every curve that is the graph of one.
- `derivative`: f′ and f″ (f″ dashed where drawn beside f′), a slope, a velocity, the rates of a related-rates problem (dV/dt, dr/dt, dx/dt, ds/dt, dh/dt, dθ/dt), the sign bands of f′ and f″.
- `point`: an absolute or local extremum (c, f(c)), a critical point, an inflection point, a root x* that Newton's method approaches, the points (a, f(a)) a tangent is drawn at.
- `line`: the tangent line and the linear approximation L(x) (4.2), the secant and the parallel tangent of the MVT (4.4), horizontal, vertical and oblique asymptotes (4.6, dashed), Newton's tangents (4.9), the line y = x of a cobweb.
- `limit`: L in a limit at infinity and the band L ± ε about it (4.6); M of an infinite limit at infinity is ink, as in Chapter 2.
- `error`: the propagated error dy, the relative and percentage errors (4.2); in a figure, the gap between f and L(x).
- `integral`: an antiderivative F, the indefinite integral, the family F(x) + C (4.10).
- `set`: an interval I over which an extremum or a test is taken, where the text writes it as one.
- `angle`: θ, the camera's angle of 4.1 and the painting's angle of review 551.

In ink: x, t, the numbers a, b, c and x₀; the changing quantities of a related-rates problem (V, r, x, s, h, θ excepted, which wears `angle`), which are the variables of the equation relating them; dx; Δy and Δx as differences; the iterates x₀, x₁, x₂, … of Newton's method (numbers, before Chapter 9 makes a sequence a type); N, M, ε as bounds; C, k and n as constants.

| Section | Categories named | Referents |
|---|---|---|
| `intro` | none | none |
| 4.1 | `derivative` (the rates), `angle` (θ) | none: each scene has one of each thing |
| 4.2 | `function`, `line` (L), `derivative`, `error`, `point` | none |
| 4.3 | `function`, `point`, `derivative`, `set` | none: one function per graph |
| 4.4 | `function`, `line` (secant, tangent), `derivative`, `point` | none: Corollary 2 has no figure, and the MVT Sim draws one function |
| 4.5 | `function`, `derivative` (f′, f″), `point` | none: f, f′ and f″ are three types of one function, not referents |
| 4.6 | `function`, `limit`, `line` (asymptotes), `point`, `error` (the gap to an oblique asymptote) | `poly-f` and `lead-g` of Figure 4.52, marked in the paragraph citing it and in Table 4.4 |
| 4.7 | `function`, `point` | none |
| 4.8 | `function`, `derivative`, `line`, `point` | none: the curves compared in Figures 4.71 and 4.73–4.76 are instances in `F.cat` colours, each named on its curve, since the text compares them only by formula |
| 4.9 | `function`, `line`, `point` | none |
| 4.10 | `integral`, `function`, `derivative` | none: the family F(x) + C is one category, its members told apart by their C on hover |

## Rules the sections keep

- f wears `function`, f′ and f″ `derivative`; on stacked panels each panel's curve keeps its type, and its sign band is in that type's colour (f″ is told from f′ by its own panel and label, the plot primitive having no dashed curve).
- The tangent line wears `line`, its slope `derivative`; the linear approximation L(x) is that line and wears `line`.
- A point found by the calculus (an extremum, a critical point, an inflection point) is a `point` dot; a hollow dot is a point the function does not reach.
- An asymptote is a dashed `line`; the level it gives a limit at infinity is that same line, and L in the readout wears `limit`.
- The area, the rectangles and the antiderivative of 4.10 wear `integral`; the integrand f stays `function`.
