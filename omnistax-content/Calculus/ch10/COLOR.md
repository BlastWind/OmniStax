# Chapter 10 colour plan

Prepared 2026-10-12 with `config.md`. It refines the book's `COLOR.md` for what this chapter draws; root rules 7 and 22 hold, and nothing here invents a hue. The types are the 18 of `book.json`.

## What the chapter colours

No fact and no convention: Figures 10.1 and 10.4 are photographs in their own colours. The categories:

- `series`, the chapter's main type: a power series Σcₙ(x − a)ⁿ and its sum, the partial sums S_N(x) (and T_N of 10.2's proof), the Cauchy product Σeₙxⁿ, the Taylor and Maclaurin series and the Taylor and Maclaurin polynomials pₙ (each a partial sum of its series, so pₙ wears `series`, not `function`), the binomial series, the present value P of an annuity (the sum of a geometric series), the series that solves a differential equation.
- `function`: f, g, the function a series represents (1/(1 − x), ln(1 + x), eˣ, ∛x, √(1 + x)), the solution y of a differential equation, the normal density.
- `set`: an interval of convergence, drawn as the shaded stretch of a number line with its ends marked as the interval notation writes them; the interval I of a theorem.
- `error`: the remainder Rₙ(x) = f(x) − pₙ(x), its bound M|x − a|ⁿ⁺¹/(n + 1)!, and the gap a figure shades between f and pₙ.
- `derivative`: f′, f″, f‴, f⁽ⁿ⁾ in the Taylor coefficients and in the theorems of 10.2.
- `integral`: ∫f(x) dx of term-by-term integration, a nonelementary integral, the probability as an area under the normal curve, the integral in the pendulum's period.
- `point`: the centre a where a figure marks it on the curve, the point (a, f(a)).
- `angle`: θ and θmax of the pendulum.

In ink: x, t, z, y as variables; the coefficients cₙ, dₙ, eₙ and aₙ of a power series (constants, as `RULES.md` keeps a parameter); the radius of convergence R (a number) and the ratio ρ; n, k, m, N as indices and degrees; the centre a as a number; e, π; M of a bound; c of Taylor's theorem (an unknown number between a and x); r of the binomial series and the interest rate r; C the annual payment; L, g, k, T of the pendulum (parameters of an application); μ and σ.

| Section | Categories named | Referents |
|---|---|---|
| `intro` | none | none |
| 10.1 | `series` (the power series, S_N), `set` (the interval of convergence), `function` (1/(1 − x), 1/(1 + x³)) | none: one series per state of the choice |
| 10.2 | `series` (S_N, T_N, the Cauchy product, P), `function` (f, g), `derivative` (f′), `integral` (∫f), `set` | none: the two factors of a Cauchy product differ by their letters c and d, drawn as the grid's rows and columns |
| 10.3 | `series` (pₙ, the Taylor series), `function` (f), `derivative` (f⁽ⁿ⁾), `error` (Rₙ, its bound), `set`, `point` (a, f(a)) | none: lower-degree polynomials are drawn faded, a variant of pₙ, not a second referent |
| 10.4 | `series` (the binomial series, p₃, the Maclaurin series of Table 10.1, the series solution), `function` (f, y, the normal density), `integral`, `error`, `angle` (θ, θmax) | none |
