# Chapter 7 colour plan

Prepared 2026-10-12 with `config.md`. It refines the book's `COLOR.md` for what this chapter draws; root rules 7 and 22 hold, and nothing here invents a hue. The types are the 18 of `book.json`.

## What the chapter colours

No fact and no convention: Figures 7.1 and 7.20 are a photograph in its own colours. The categories:

- `integral`, the chapter's main type: every integral the text writes or names (indefinite and definite, ∫u dv and ∫v du, the I of Example 7.4, a trigonometric integral, an improper integral and the value it converges to), the area under a curve and the shaded region that is that area, a volume of revolution, the approximations Mₙ, Tₙ, Sₙ and the sums Lₙ, Rₙ, and the Laplace transform F(s) = L{f(t)}.
- `function`: f, g, h and every function the text names; the rational function P(x)/Q(x), its numerator and denominator, and each partial fraction of 7.4; the quadratic p(x) of Simpson's rule; the time-domain f(t) of the project; every curve that is the graph of one.
- `error`: the absolute error |A − B|, the relative error, "Error in Mₙ", "Error in Tₙ", "Error in Sₙ", and the gap a figure shades between an approximation and the true area.
- `angle`: θ of the trigonometric substitutions and of their reference triangles.
- `region`: the solid of revolution of Figure 7.3 and Gabriel's horn (Figure 7.19); the volume each has wears `integral`.
- `line`: the vertical asymptote x = b of Figure 7.21 and of the discontinuous integrands of 7.7.
- `limit`: the limit as t → ±∞ or t → b of an improper integral where the text names the value approached; the improper integral itself is an `integral`.
- `derivative`: f′ in the derivation of 7.1, and f″ and f⁽⁴⁾ where 7.6 bounds them; M, the maximum of |f″(x)|, is a number and stays ink.
- `set`: an interval [a, b] or [a, +∞) stated as a domain of integration (`data-type="set"`).

In ink: x, t, s, y as variables; the parts u and v of integration by parts, named for the functions f(x) and g(x) they stand for (u has no macro, and v's is velocity's), and u of a substitution; a, b, the limits of integration and the a of a radical; n, k, j, i as counts and exponents; A, B, C, D, E, F, G as the unknown coefficients of a partial fraction decomposition; the constant of integration C and K; e, π; λ of the opener's probability; du, dv, dx, dθ; Δx and the points xᵢ, mᵢ; M of an error bound; the techniques and rules as concepts where they name no typed object (integration by parts, LIATE, the strategies: their spans are marked and stay ink).

| Section | Categories named | Referents |
|---|---|---|
| `intro` | none | none |
| 7.1 | `integral` (∫u dv, ∫v du, the area, the volume, I), `function` (f, g, h), `region` (the solid of 7.3) | `parts-under` and `parts-beside`, the two areas ∫u dv and ∫v du of the parts Sim, which fill the rectangle uv between them |
| 7.2 | `integral`, `function` | `wave-diff`, `wave-sum`: the two waves ½cos((a − b)x) and ½cos((a + b)x) (or sines) whose sum is the product, in the product-to-sum Sim |
| 7.3 | `integral`, `angle` (θ), `function` (f of Example 7.27) | none: one triangle, its sides named by their lengths |
| 7.4 | `integral`, `function` (P, Q, the rational function, the partial fractions) | `term-1`, `term-2`, `term-3`: the partial fractions of the decomposition Sim, each its own curve beside the rational function |
| 7.5 | `integral`, `function` | `antiderivative-hand` and `antiderivative-cas`: the two antiderivatives Figure 7.12 draws on one graph (the result found by hand and the CAS's) |
| 7.6 | `integral` (Mₙ, Tₙ, Sₙ, Lₙ, Rₙ, the exact value), `function` (f, p), `error`, `derivative` (f″, f⁽⁴⁾) | none: one function per figure; rectangles, trapezoids and parabolas differ by rule, a choice, not by referent |
| 7.7 | `integral`, `function`, `limit`, `line` (the asymptote), `region` (Gabriel's horn) | `lower-f`, `upper-g`: f and g of the comparison theorem (Figure 7.22, Example 7.55), drawn on one graph and named apart |
