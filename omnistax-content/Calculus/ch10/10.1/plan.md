# Plan: 10.1 Power Series and Functions (m53761)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-12. Template: `ch01/1.1`.

Three objectives, an opening paragraph, two definition notes and one theorem note with its proof (Equations 10.1–10.3), Figures 10.2 and 10.3, Examples 10.1–10.3, three checkpoints (10.1–10.3), two Key Equations, four Key Concepts, 62 section exercises (31 keyed), three glossary terms.

## Sub-concepts (page headers)

0. `power-intro`: the opening paragraph; introduces nothing (it names power series, defined below).
1. `form` **Form of a Power Series**: the term paragraph `power-series-term`, the definition note `fs-id1170571656400` (Equations 10.1, 10.2), the stipulation x⁰ = 1, three examples of power series.
2. `convergence` **Convergence of a Power Series**: the theorem `fs-id1170572419070` and its proof, the paragraph `interval-term` (interval and radius of convergence), the definition note `fs-id1170572593004`, Figure 10.2, Example 10.1, Checkpoint 10.1.
3. `representing` **Representing Functions as Power Series**: the geometric series again (Equation 10.3), `geometric-representation` (1/(1 − x) = 1 + x + x² + ⋯ for |x| < 1), Example 10.2 with Figure 10.3, Checkpoint 10.2, Example 10.3, Checkpoint 10.3.

The book's "the series in [ref:fs-id1170572180135]" just after Equation 10.3 links to Example 10.3, a slip for the series just displayed: kept as printed (the link reads "Example 10.3") with a correction note saying it is the series of Equation 10.3.

## Concept nodes

Introduced: `power-series` (forms `eq-power-series-at-zero`, `eq-power-series-at-a`, Equations 10.1, 10.2), `convergence-of-a-power-series`, `interval-of-convergence`, `radius-of-convergence` (symbol R), `finding-the-interval-of-convergence` (Example 10.1), `representing-a-function-by-a-geometric-series` (`eq-geometric-power-series`). Uses: `infinite-series`, `geometric-series`, `sum-of-a-geometric-series`, `ratio-test`, `comparison-test`, `harmonic-series`, `alternating-harmonic-series`, `partial-sum`, `absolute-convergence`, `interval-notation`, `function`.

## Colour

`series` for a power series, Σcₙxⁿ named as a power series, and the partial sums S_N (`\kS_{N}`); `set` for an interval of convergence where the text names it and the shaded stretch of the number line; `function` for f = 1/(1 − x), 1/(1 − x²), 1/(1 + x³), x²/(4 − x²) (`\kf`); `error` for the gap between f and S_N in Figure 10.3's Sim. R stays ink (a number, config 21), as do cₙ, aₙ, x, a, ρ. No referents: each state shows one series.

## Figures

- `sim-convergence` · Figure 10.2 · `convergence-of-a-power-series`, `interval-of-convergence`, `radius-of-convergence`, `finding-the-interval-of-convergence` · variation and intuition: the book's three number lines (R = 0, R = ∞, R) become the three series of Example 10.1 and the geometric series of the text as a choice, and a probe x; the partial sums Sₙ(x) are drawn below as dots against N, settling inside the interval and running off outside it · arrows none · still: the dots answer the probe, nothing has a clock · choice of series (Σxⁿ/n!, Σn!xⁿ, Σ(x − 2)ⁿ/((n + 1)3ⁿ) the default, Σxⁿ), slider x with dashed circles at the endpoints the text tests (x = −1 and 5 for the default) · headline: the interval of convergence and whether the series converges at the probe · the number line above, the graph of partial sums below · 2D. Readout: ρ = lim|aₙ₊₁/aₙ| with the live x and the verdict; at an endpoint the readout names the series it becomes (the alternating harmonic series converges, the harmonic diverges). The book's figure (three cases) is reached as the three choices.
- `sim-partial-sums` · Figure 10.3 · `representing-a-function-by-a-geometric-series`, `partial-sum` · variation: N, with the two partial sums before it faded, so the default N = 6 shows S₂, S₄, S₆ as the book does; a probe x shows the gap f(x) − S_N(x) · arrows none · still · slider N (0 to 20, default 6), slider x (−0.95 to 0.95, default 0.5) · headline S_N(x) beside f(x) · graph alone, the interval (−1, 1) marked on the axis in `set` · 2D.
- Checkpoint 10.2's answer image (`CNX_Calc_Figure_10_01_003.jpg`) stays in its solution; the exercise answer images of 57, 59, 61 stay in theirs.

## Exercises

- Checkpoints 10.1–10.3 inline after Examples 10.1, 10.2, 10.3; open answers, the book's hints as `hint`.
- Section exercises 1–62: the 31 odd keyed ones kept; a single-number key (7, 9, 11, 23, 25, 27, 29, 31, 45) is a number answer, the rest open. Kept with AI-marked approaches: 2 and 4 (true or false with a reason) and 48 (explain why p(x) = −p(−x)). Left out, unkeyed and computational: 6, 8–22 even, 24–46 even, 50, 52, 54, 56, 58, 60, 62.
- Review exercises 257 and 259 (radius and interval of convergence) held here, `source_section` 10.4.
- Corrections under their cards: 5 (the key lists x = 0 among the points where the series must converge; x = 0 is the endpoint of (0, 6], where it might diverge), 49 (the key rewrites p(x) with the odd coefficients a₂ₙ₊₁ for the even ones a₂ₙ), 51 (the key gives [0, 1]; p(2x − 1) converges where 2x − 1 is in (−1, 1], that is on (0, 1]).

## Extra simulations (rule 15)

None beyond the two: a Sim of Example 10.3's substitutions (1/(1 + x³), x²/(4 − x²)) would draw Figure 10.3 again with another function; the checkpoint image answers it.

## Wanted at chapter level

- forms `eq-power-series-at-zero` → `10.1-fs-id1170572644191`, `eq-power-series-at-a` → `10.1-fs-id1170572295618`, `eq-geometric-power-series` → `10.1-geometric-representation`.
- variables of 10.1: f → `10.1-geometric-representation`, S → `10.1-fs-id1170572498722`, R → `10.1-interval-term`.
- Applied in the chapter pass (2026-10-13): every anchor above set with `ost set`; review rows landed with `mksection.py --with-review`.
