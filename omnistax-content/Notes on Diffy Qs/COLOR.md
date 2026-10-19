# Notes on Diffy Qs colour plan

The rule is root `RULES.md` item 7. This file records what is particular to
this book: its categories, its variants, and the facts and referents it
draws. A chapter's `COLOR.md` may refine it, never inventing a hue.

## Categories, in palette order

A category here is a role an object plays, as in Calculus, whose ids this
book shares wherever the role is the same, since the two books link to
each other: the test is whether the thing would be its own type in a
formal library (a function ℝ → ℝ, a vector in ℝⁿ, an n × n matrix, a
transform taking a function of t to a function of s). An applied quantity
wears the mathematical type it is: a position, a temperature, an amount of
salt or a current is a `function` of time, a velocity a `derivative`.

| Order | Type id | The book's objects | Why it is a type |
|---|---|---|---|
| 1 | `function` | a solution y(x) or x(t), a general or particular solution, an equilibrium solution, the forcing f(t), an eigenfunction, a temperature u(x, t), a displacement y(x, t), the Heaviside u(t) and the delta δ(t) | Every page draws its solutions; the curve and its letter are one colour |
| 2 | `derivative` | y′, dx/dt, y″ as its variant, a slope, the slope field of y′ = f(x, y), a partial derivative | The equation is a relation between a function and its derivatives; the slope field is the derivative drawn |
| 3 | `integral` | ∫ in an integral solution, an antiderivative, the integrating factor's exponent, the convolution integral, the Laplace integral, a Fourier coefficient's integral, an inner product of functions | 1.1 solves by integrating, Chapter 6 transforms by one |
| 4 | `point` | an initial condition (x₀, y₀), a critical point or equilibrium in the phase plane, an equilibrium value of an autonomous equation | Marked on slope fields and portraits beside the curves through it |
| 5 | `eigenvalue` | λ of a matrix or of an eigenvalue problem, a characteristic root r, α ± iβ, the trace and determinant read as the eigenvalues' sum and product | The eigenvalue decides the shape of a solution in Chapters 2–5 and 8; a root and an eigenvalue are one role, and the book says so in 3.4 |
| 6 | `vector` | x⃗, an eigenvector v⃗, a solution vector, a column of a matrix, a vector of Appendix A | Drawn as arrows and eigenvector lines on every portrait |
| 7 | `matrix` | A, P, a fundamental matrix X(t), e^(tA), a matrix of Appendix A | The system x⃗′ = Ax⃗ is read from it; its entries are the reader's sliders in 3.5 |
| 8 | `vector-field` | the direction field of a 2D system, a phase portrait's arrows | The picture of an autonomous system, beside its trajectories |
| 9 | `curve` | a trajectory in the phase plane, a characteristic curve of a PDE, a limit cycle, a level curve F(x, y) = C of an exact equation | A path traced through the field, not a graph over an axis |
| 10 | `frequency` | ω₀ = √(k/m), the forcing ω, the damped frequency, the harmonics nπ/L, the practical-resonance frequency | Resonance is read off the gap between two frequencies on one axis |
| 11 | `series` | a Fourier series, a sine or cosine series, a power series, a partial sum S_N, a Taylor polynomial, a series solution | Drawn as a partial sum closing on its function |
| 12 | `sequence` | the coefficients aₙ, bₙ, cₙ of a Fourier or power series, a recurrence relation's terms | The recurrences of Chapter 7 and the coefficient formulas of Chapter 4 compute them term by term |
| 13 | `transform` | F(s) = ℒ{f(t)}, X(s), a transfer function, an inverse transform's input | Drawn and tabled beside f(t) on every line of Chapter 6; F must not look like f |
| 14 | `error` | the error of Euler's method, the error of a truncated series or matrix exponential | 1.7 tables it and draws it as the gap between the approximation and the solution |
| 15 | `region` | the wire's segment, the square plate, the disc of the Dirichlet problem, the half-line of 6.5, the (x, t) region of a PDE | The boundary data sits on its edge; a region drawn as a shaded set |

The order puts the types of Chapters 0–2 first (function, derivative,
integral, point) and then the linear-algebra roles of Chapters 2–3
(eigenvalue, vector, matrix, vector field, curve), so in book order they
take the hues farthest apart; frequency, series, sequence and transform
belong to Chapters 2, 4, 6 and 7. `npm run colours:default -- diffyqs`
assigns the default colours from the pages built; rerun it as chapters are
added.

Untyped, in ink: an independent variable (t, x, s, a polar r or θ), an
arbitrary constant (C, C₁, C₂, A, B, D), an index or a count (n, a mode
number k), a parameter of a model (m, c, k, L, the heat constant k, a
population's k, the coefficients p, q of an equation), and an operator
written as a symbol (L, ℒ, Δ, d/dx), which would colour every line and is
never drawn. The damping ratio and similar dimensionless groups are
parameters.

Three decisions worth naming. `eigenvalue` is a type of its own, though
it is a number, because the book's central picture from 3.4 on is a matrix
whose eigenvalues and eigenvectors are drawn together, and the reader must
match λ in the readout to its line in the portrait. `transform` is
separate from `function` for the reason Calculus keeps `derivative`
separate: f(t) and F(s) stand side by side in every table and every step.
`frequency` is the book's one physical type: resonance is a lesson about
two frequencies, and Fourier series about a ladder of them.

## Variants and decoration

A variant shares the hue: y″ is a derivative drawn dashed; a particular
solution and the general solution's family are one function, the family
drawn thin; the homogeneous solution y_c, the particular y_p and the
steady periodic x_sp are referents of one figure, each in its referent
colour, their symbols split as root rule 7 says; a transient is a function
drawn fading. A repeated or complex eigenvalue is one eigenvalue with its
multiplicity or conjugate written; a generalized eigenvector is a vector
drawn hollow. A stable and an unstable critical point are one point, filled
and hollow. An ω₀ beside an ω is one frequency, ω₀ marked by a dashed
special on the slider (root rule 26.1). The envelope ±Ae^(−pt) of damped
motion is a function drawn dashed.

Two solutions on one graph, two carts, two masses, the two modes of 3.6,
predator and prey: referents of the figure, each in its own colour.

## Conventions

None. The book's plots are black on white and fix no colour of their
own.

## Facts

A temperature drawn along a wire or over a plate (4.6, 4.9, 4.10, 5.3)
is one scalar on one scale with its legend, a false-colour map, which
takes the place of the category's hue for that field: the surface or wire
is in the scale, and its symbol u keeps `function`.

## Referents

Two or more solutions of one equation that the text names apart (y₁ and
y₂, the solutions through two initial points of Picard's example), the
carts and masses of 3.6, the predator and the prey of 8.3, the two
pendulum trajectories of a chaos figure, the tanks of 3.1, the mode shapes
of a string. A referent's quantity keeps its category: the velocity of
cart 1 wears `derivative`, its subscript cart 1's colour.
