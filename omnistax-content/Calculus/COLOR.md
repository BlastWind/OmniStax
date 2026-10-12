# Calculus colour plan

The rule is root `RULES.md` item 7. This file records what is particular to
this book: its categories, its variants, and the facts and referents it
draws. A chapter's `COLOR.md` may refine it, never inventing a hue.

## Categories, in palette order

A category in calculus is a role an object plays, not a letter: the test
is whether the thing would be its own type in a formal library (a function
ℝ → ℝ, a sequence ℕ → ℝ, a vector ℝⁿ). Most of mathematics fails that test
on the page, and stays in ink.

| Order | Type id | The book's objects | Why it is a type |
|---|---|---|---|
| 1 | `function` | f, g, y = f(x), its graph; s(t), P(t), a solution y of a differential equation; f(x, y) and its surface; a Taylor polynomial's target | The thing every chapter draws first; its curve and its symbol are one colour so the reader matches them |
| 2 | `derivative` | f′, dy/dx, f″ as its variant, a slope, a tangent line, a rate of change, a partial derivative, a directional derivative, a Jacobian, a slope field | Drawn beside its function on almost every graph of Chapters 3–4; the two must never share a hue |
| 3 | `integral` | ∫, an antiderivative F, a definite integral and the area it is, a Riemann sum and its rectangles, a double, triple, line or surface integral, a flux, a circulation | The accumulated quantity; F beside f reads as integral beside function |
| 4 | `limit` | L, the value approached, a horizontal asymptote, the sum a sequence converges to | The ε–δ figures and every graph with a hole draw L as its own line |
| 5 | `sequence` | aₙ, its terms as dots | Chapter 9 draws a sequence beside the series of its partial sums |
| 6 | `series` | Σ, a partial sum Sₙ, a power series, a Taylor polynomial pₙ | Not a sequence: the partial sums climb while the terms shrink |
| 7 | `vector` | v, u, a position r(t), T, N, B, a gradient ∇f, a normal n | An arrow with a direction, from 12.1 to the end |
| 8 | `vector-field` | F(x, y), F(x, y, z), a gradient field, a curl | A field of arrows over a region, the object of Chapter 16 |
| 9 | `region` | a domain of integration R, D or E, a curve C, a surface S, a solid of revolution | What an integral is taken over; drawn as the shaded set or the solid |

The order puts the three of every early page first (function, derivative,
integral), so they take the hues farthest apart, and the vector types after
the series that leave the page by Chapter 11. Rerun `npm run colours:default
-- calculus` once Chapter 1 has pages, so the smart assignment can read
which types share a page.

Untyped, in ink: a variable (x, y, t, θ) and a point of evaluation a, which
are on every line and would colour everything; an index or a count (n, k,
the degree of a polynomial); a constant (e, π, the constant of integration
C); ε and δ, which are tolerances on a variable and are drawn as bands in
the colour of what they bound, the limit's band in `limit`, the input's in
ink; a coordinate; a parameter of an application (a price, a mass, a
spring constant), unless the section treats it as a function of time; a
matrix and a determinant, save the Jacobian.

Two decisions worth naming. The function's derivative is a separate type
though it is itself a function, because the book's central picture is a
curve and its slope drawn together, and a reader cannot tell f′ from f on
one axis if they share a hue. Region is a type though no formula equates
it to anything, because every integral of Chapters 6 and 15–16 is read off
the shaded set it is taken over, and the set must match its letter in the
bounds.

## Variants and decoration

A variant shares the hue: f″ is a derivative drawn dashed, a partial
derivative is a derivative, a left or right limit is a limit with its side
marked, a definite integral and an antiderivative are one integral, a
Taylor polynomial is a partial sum of its series. A second function on one
graph (f and g, the two curves bounding an area) is not a second category:
they are referents of the figure, each in its own referent colour, and the
symbols f and g split as root rule 7 says. The area between them wears
`integral`.

## Conventions

None. The book draws axes, gridlines and labels in black and grey and
fixes no colour of its own.

## Facts

Almost none: a photograph of a chapter opener is its own colours. A
heatmap of f(x, y) over a region, where a figure draws one, is one scalar
on one scale with its legend.

## Referents

The curves of one graph that the text names apart (f and g, the three
transformations of one parabola, the two cars of a related-rates example),
the vectors u and v of one sum, the paths C₁ and C₂ of one line integral.
A referent's quantity keeps its category: the slope drawn on curve f wears
`derivative`, and its subscript wears f's referent colour.
