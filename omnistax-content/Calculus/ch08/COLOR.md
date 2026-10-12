# Chapter 8 colour plan

Prepared 2026-10-12 with `config.md`. It refines the book's `COLOR.md` for what this chapter draws; root rules 7 and 22 hold, and nothing here invents a hue. The types are the 18 of `book.json`.

## What the chapter colours

No fact and no convention: the opener and the deer of Example 8.14 are photographs in their own colours. The categories:

- `function`: the unknown function y = f(x) of a differential equation and every solution of one, general, particular or equilibrium (a constant function), every solution curve, the family of solutions drawn faint beside the one picked out, and the applied unknowns solved for: v(t) where it is the unknown of an initial-value problem, the height s(t), the temperature T(t), the amount of salt u(t), the population P(t) and its initial value P₀, the coefficient functions p(x) and q(x) of a standard form and the integrating factor μ(x). f(x, y), the right-hand side of y′ = f(x, y), is a function of two variables and wears `function` too.
- `derivative`: y′, y″ and the higher derivatives, dy/dx and dy/dt, T′ and dT/dt, v′ and dv/dt (the acceleration), P′ and dP/dt (the growth rate of a population), μ′; every short segment of a direction field, which is a slope drawn at its point, and the value of f(x, y) when it is read as a slope.
- `line`: the linear approximation L(x) of 8.2 and every straight step of Euler's Method, which is a piece of a linear approximation.
- `point`: an initial value, the point (x₀, y₀) a solution curve is drawn through, the draggable point of every field figure; the logistic curve's point of inflection.
- `limit`: the carrying capacity K, the level a logistic population approaches, drawn as a dashed level.

In ink: x, t and the independent variable; the constants C, C₁, C₂, k, r, g and the parameters of the applications (masses, resistances, rates of flow); the step size h and the index n of Euler's Method; the approximate values xₙ, yₙ written in a table; the threshold population T of 8.4's project (a parameter, and not the temperature T of 8.2 and 8.3, which is a function).

| Section | Categories named | Referents |
|---|---|---|
| `intro` | none | none |
| 8.1 | `function` (y, the general and particular solutions, v(t), s(t)), `derivative` (y′, y″, dy/dx, v′, s′), `point` (an initial value) | none |
| 8.2 | `derivative` (the direction field's segments, y′), `function` (solution curves, equilibrium solutions, T(t), f(x, y)), `line` (L(x), Euler's steps), `point` (the initial point) | none |
| 8.3 | `function` (y, f(x), g(y), u(t), T(t)), `derivative` (y′, du/dt, dT/dt) | none |
| 8.4 | `function` (P(t), P₀), `derivative` (dP/dt), `limit` (K), `point` (the inflection point) | the logistic curve and the exponential curve of Figure 8.23 |
| 8.5 | `function` (y, p(x), q(x), μ(x), v(t)), `derivative` (y′, dv/dt) | none |

## Rules the sections keep

- A direction field is a grid of short segments in `derivative`, drawn lighter than the curves so the solution through them reads first; the solution curve wears `function` and its initial point `point`.
- An equilibrium solution y = k is a constant function drawn as a level in `function`, dashed where the plan shows it as a level the solutions approach or leave, solid where it is the solution drawn.
- Euler's polyline wears `line`, its vertices small dots in `line`; the exact solution beside it wears `function`, so the gap between them reads as the error of the method without a separate hue.
- A family of solutions is drawn faint in `function` behind the one particular solution the initial value picks out, which is drawn full.
- The carrying capacity K is a dashed level in `limit`; the logistic and exponential curves of Figure 8.23 are referents, each in its referent colour, since the text names them apart.
