# Calculus colour plan

The rule is root `RULES.md` item 7. This file records what is particular to
this book: its categories, its variants, and the facts and referents it
draws. A chapter's `COLOR.md` may refine it, never inventing a hue.

## Categories, in palette order

A category in calculus is a role an object plays, not a letter: the test
is whether the thing would be its own type in a formal library (a function
ℝ → ℝ, a set of reals, a point of ℝ², a sequence ℕ → ℝ, a vector ℝⁿ). An
applied quantity wears the mathematical type it is: a velocity is the
derivative of a position, work, mass and total change are integrals, a
position or a cost is a function. The book has no physical quantity types.

| Order | Type id | The book's objects | Why it is a type |
|---|---|---|---|
| 1 | `function` | f, g, y = f(x), its graph; s(t), P(t), a cost or position function, a solution y of a differential equation; f(x, y); a Taylor polynomial's target | The thing every chapter draws first; its curve and its symbol are one colour so the reader matches them |
| 2 | `derivative` | f′, dy/dx, f″ as its variant, a slope, a rate of change, a velocity, a partial derivative, a directional derivative, a slope field | Drawn beside its function on almost every graph of Chapters 3–4; the two must never share a hue |
| 3 | `integral` | ∫, an antiderivative F, a definite integral and the area it is, a Riemann sum and its rectangles, a double, triple, line or surface integral, a flux, a circulation, work, mass, a total change | The accumulated quantity; F beside f reads as integral beside function |
| 4 | `limit` | L, the value approached, the sum a sequence converges to | The ε–δ figures and every graph with a hole draw L as its own line |
| 5 | `point` | (a, f(a)), a zero, an x- or y-intercept, a critical point, an inflection point, a maximum or minimum point, a point in space | Marked on nearly every graph from 1.1 on, beside the curve it lies on |
| 6 | `set` | a domain D, a range R, an interval written in interval or set-builder notation, an interval of convergence, a solution set | Read off the axes as the shaded stretch beside the curve; a domain must not look like the function it belongs to |
| 7 | `line` | a tangent, secant or normal line, a vertical or horizontal asymptote, the lines of a vertical or horizontal line test, a line in space | Drawn across the curve it touches or bounds; the tangent and the slope it carries are two things, a line and a number |
| 8 | `angle` | θ in radians or degrees, the polar angle θ, the angle between two vectors | The unit circle of 1.3 and the polar graphs of Chapter 11 turn on it |
| 9 | `error` | an approximation's error, a Taylor remainder Rₙ, the error bounds of the trapezoidal and Simpson's rules | Drawn as the gap between a function and its approximation, which must read apart from both |
| 10 | `region` | a region of integration R, D or E in the plane or in space, a solid of revolution | What a double or triple integral is taken over; drawn as the shaded set or the solid |
| 11 | `sequence` | aₙ, its terms as dots | Chapter 9 draws a sequence beside the series of its partial sums |
| 12 | `series` | Σ, a partial sum Sₙ, a power series, a Taylor polynomial pₙ | Not a sequence: the partial sums climb while the terms shrink |
| 13 | `curve` | a curve C, a parametric curve, a level curve, a path of integration C₁, C₂ | A one-dimensional set traced in the plane or in space, the object of Chapters 11 and 16 |
| 14 | `vector` | v, u, a position r(t), T, N, B, a gradient ∇f, a normal n | An arrow with a direction, from 12.1 to the end |
| 15 | `plane` | a plane in space, a tangent plane | Chapters 12 and 14 draw it beside the vectors and surfaces it holds or touches |
| 16 | `surface` | the graph z = f(x, y), a quadric surface, a surface S of a surface integral | A two-dimensional sheet in space, drawn in 3D from Chapter 12 on |
| 17 | `vector-field` | F(x, y), F(x, y, z), a gradient field, a curl | A field of arrows over a region, the object of Chapter 16 |
| 18 | `matrix` | a Jacobian, a determinant | The change of variables of 15.7 and the cross product of 12.4 are read from one |

The order puts the types of the early pages first (function, derivative,
integral, limit, then the point, set, line and angle of Chapter 1 and the
error of Chapters 3–4), so in book order they take the hues farthest
apart, and the types of space and of Chapter 16 after. `npm run
colours:default -- calculus` assigns the default colours from the pages
built; rerun it as chapters are added.

Untyped, in ink: a variable (x, y, t, though θ wears `angle`), the number
a at which a function is evaluated, and a coordinate, which are on every line and would colour
everything; an index or a count (n, k, the degree of a polynomial); a
constant (e, π, the constant of integration C); a parameter of an
application (a price, a spring constant), unless the section treats it as
a function of time. ε and δ are tolerances, not types: each is drawn as a
band in the colour of what it bounds, the band about L in `limit`, the
band about a in ink.

Two decisions worth naming. The function's derivative is a separate type
though it is itself a function, because the book's central picture is a
curve and its slope drawn together, and a reader cannot tell f′ from f on
one axis if they share a hue. The tangent line is a `line`, not a
`derivative`: the slope is the number the line carries, and the line is
drawn across the curve as the asymptotes and secants are. Region, curve and
surface are three types, not one, because Chapter 16's theorems set them
side by side (a region and its boundary curve in Green's theorem, a surface
and its boundary curve in Stokes'), and each must match its letter in the
bounds.

## Variants and decoration

A variant shares the hue: f″ is a derivative drawn dashed, a partial
derivative is a derivative, a left or right limit is a limit with its side
marked, a definite integral and an antiderivative are one integral, a
Taylor polynomial is a partial sum of its series, a tangent, a secant and
an asymptote are one line (an asymptote dashed), a hole is a point drawn
hollow, an open and a closed interval are one set with their ends marked
as the notation writes them. A second function on one
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
