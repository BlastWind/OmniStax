# Chapter 7 colour plan

Prepared 2026-10-19 with `config.md`. It refines the book's `COLOR.md` for what this chapter draws; root rules 7 and 22 hold, and nothing here invents a hue.

## The four ways (root rule 7), in this chapter

1. **Fact.** None: the book's plots are black on white, and nothing in the chapter has a colour of its own.
2. **Convention.** None.
3. **Referent.** None, and this refines the book's `COLOR.md` line on "two solutions of one equation that the text names apart": the pair y₁, y₂ recurs through Examples 7.2.1–7.2.3 and 7.3.2 and Bessel's y₁, y₂ as the generic even-and-odd (or first-and-second) pair, so one referent colour would bind one letter to four different curves. Instead y₁ and y₂ wear `function` and are told apart in every figure by their labels and by what the text itself says apart (y₁ through (0, 1) with slope 0, y₂ through the origin with slope 1; J_p and J_{p+1} by their labels). A partial sum beside its function is two categories (`series` and `function`), never two referents. No symbol of the chapter is split by a referent, and no variables row carries `ref`.
4. **Category.** The chapter's symbols by type, below.

## What the chapter colours

- `function`: an analytic function f(x) and its Taylor series' limit; the unknown y(x) of a second-order equation and every solution of one (y, y₁, y₂, the general solution a₀y₁ + a₁y₂, A y₁ + B y₂); the limit a series closes on in a figure (eˣ, −ln(1 − x), 2/(3 − x), 1/(1 − x), x/(1 + x)², sin x, cosh x, sinh x, the Airy pair, J_p, Y_n); x^r and x^r ln x drawn as the leading behaviour of a Frobenius-type solution; the Bessel functions J_p, J_{−p}, J_n, Y_n and the gamma function Γ(x).
- `derivative`: y′, y″, f^{(k)}(x₀) in the Taylor formula, y′ = r x^{r−1} where a figure draws the tangent near the singular point.
- `series`: a power series as an object where the text speaks of the series itself, the partial sum S_n(x), a truncated Taylor series drawn closing on its function, a series solution and a Frobenius-type solution drawn as a partial sum.
- `sequence`: the coefficients a_k, b_k, c_k (a₀, a₁, a_{k+2}, a_{2n}, a_{3n+1}, …) drawn as bars against k, the terms c_k of a series in the ratio and root tests.
- `point`: an ordinary point, a singular point and a regular singular point of an equation, marked as a dot on the x-axis in 7.3's figures; the centre x₀ is written plain (it is a constant of the series, not an initial condition).
- `eigenvalue`: the exponent r of a Frobenius-type solution and the roots r₁, r₂ of the indicial equation, the same role as a characteristic root (book `COLOR.md`: a root and an eigenvalue are one role); drawn as the slider's value in `sim-frobenius-exponent`.

In ink: the independent variable x and the centre x₀; the index k, n, m; the arbitrary constants α, A, B, C; the limits L and A of the tests and the radius ρ (a number, as Calculus keeps R in ink); the polynomial coefficients P(x), Q(x), R(x) of an equation (book `COLOR.md`: coefficients of an equation stay in ink unless a section draws them as functions, and none does); the orders n of Hermite's and p of Bessel's equation; the constant λ of Example 7.3.4 (a parameter here, not Chapter 3's eigenvalue: written plain, no variables row); the factorial and the integration variable t of the gamma function.

## Referents, per figure

| Section | Figure | Referents |
|---|---|---|
| 7.1 | `sim-convergence-interval`, `sim-taylor-sin` | none (one series in `series`, its limit in `function`) |
| 7.2 | `sim-airy`, `sim-series-solution`, `sim-hermite` | none (y₁ and y₂ in `function`, labelled; the partial sums in `series`, the bars in `sequence`) |
| 7.3 | `sim-frobenius-exponent`, `sim-bessel` | none (J_p, J_{p+1}, Y_p, Y_{p+1} in `function`, labelled on each curve) |
