# Plan: 10.2 Properties of Power Series (m53762)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-12. Template: `ch01/1.1`.

Four objectives, an opening paragraph, four theorem notes (two with proofs), the photo Figure 10.4 inside Example 10.7, Examples 10.4–10.10, six checkpoints (10.4–10.9), three Key Concepts, 53 section exercises (27 keyed), two glossary terms. No Key Equations and no numbered equations.

## Sub-concepts (page headers)

0. `properties-intro`: the opening paragraph.
1. `combining` **Combining Power Series**: the theorem `fs-id1167023714096` and its proof, Examples 10.4–10.6, Checkpoints 10.4–10.6, the paragraph `present-value-term` (present value), Example 10.7 (the chapter opener's lottery) with Figure 10.4, then `sim-present-value`.
2. `multiplication` **Multiplication of Power Series**: the long-hand product, the theorem `fs-id1167023808343` (the Cauchy product), `sim-cauchy-product`, Example 10.8, Checkpoint 10.7.
3. `differentiating` **Differentiating and Integrating Power Series**: the two questions, `term-by-term-term` (the glossary terms), the theorem `fs-id1167023789599`, `sim-term-by-term`, Examples 10.9 and 10.10, Checkpoints 10.8, 10.9, the theorem `fs-id1167023777376` (uniqueness) and its proof, the closing paragraph.

Citations of the theorems read as their titles, linked to their notes, as openstax.org prints them ("In Combining Power Series we state…").

## Concept nodes

Introduced: `combining-power-series` (forms `eq-combining-sum`, `eq-combining-substitution`), `present-value` (symbol P; `eq-present-value-n-years`, `eq-present-value-perpetual`), `multiplying-power-series` (`eq-cauchy-product`), `term-by-term-differentiation-and-integration` (`eq-term-by-term-derivative`, `eq-term-by-term-integral`), `uniqueness-of-power-series`. Uses: `power-series`, `interval-of-convergence`, `radius-of-convergence`, `partial-sum`, `geometric-series`, `sum-of-a-geometric-series`, `representing-a-function-by-a-geometric-series`, `partial-fraction-decomposition`, `compound-interest`, `derivative-function`, `indefinite-integral`, `antiderivative`, `harmonic-series`, `alternating-harmonic-series`, `divergence-test`, `alternating-series-test`, `higher-order-derivative`.

## Colour

`series` for a power series named as such, S_N and T_N of the proof (`\kS_{N}`, `\kT_{N}`), the Cauchy product, and the present value P (`\kP`, the sum of a series); `function` for f, g (`\kf`, `\kg`); `derivative` for f′ (`\kfprime`); `integral` for ∫f(x) dx; G = ln(1 + x), an antiderivative of g, wears `integral` (`\kG`); `set` for the intervals of convergence the text states. The coefficients cₙ, dₙ, eₙ, aₙ, bₙ, the interest rate r, the payment C, P₁, P₂, P_k (the present value of one payment, a term of the series: a sequence term, kept ink as the book's subscripted letters) stay ink. No referents: the two factors of the Cauchy product are told apart by their letters c and d on the grid's two edges.

## Figures

- `fig-money` · Figure 10.4 · photo, kept: printed in the problem of Example 10.7 (config 20); the book's caption is only its credit, "(credit: modification of work by Robert Huffstutter, Flickr)", kept whole.
- `sim-present-value` · Sim · `present-value`, `sum-of-a-geometric-series` · variation: the payment C, the rate r and the number of years n, with the bars of the present values C/(1 + r)ᵏ of each year shrinking geometrically and their running sum P climbing to C/r; the book's numbers (C = 1.5, r = 0.05, n = 20; P = 18.693) are the default and the lump sum of 20 million is the dashed level it is compared with · arrows none · still: each bar is a payment's worth today, not a moment · sliders C (0.5 to 2 million, detents 1, 1.5), r (0.01 to 0.10), n (1 to 100 years, detents 20) · headline P beside the lump sum · graph alone · 2D. Readout P = Σ C/(1 + r)ᵏ = C(1 − (1 + r)⁻ⁿ)/r with the live numbers; note the perpetual value C/r.
- `sim-cauchy-product` · Sim · `multiplying-power-series` · intuition: the products cᵢdⱼ laid out on a grid, i along one edge and j along the other, every coefficient eₙ of the product the sum along the anti-diagonal i + j = n; the reader sees why eₙ = c₀dₙ + c₁dₙ₋₁ + ⋯ + cₙd₀ and why Example 10.8's coefficients run 1, 1, 2, 2, 3, 3 · arrows none · still · choice of product (Example 10.8's 1/(1 − x) · 1/(1 − x²), Checkpoint 10.7's 1/(1 − x) · 1/(1 − x)), slider n (0 to 8, default 4) · headline eₙ and the terms it adds · grid alone, the coefficients of the product as a row beneath · 2D. Cells hold no labels (81 would crowd, rule 26.7); the highlighted anti-diagonal's cells carry their products, at most nine; hover names the rest.
- `sim-term-by-term` · Sim · `term-by-term-differentiation-and-integration` · variation and intuition: the partial sums of the differentiated or integrated series close on the new function inside the interval with the same radius, and at the ends behave differently from the original (the book's next examples) · arrows none · still · choice of example (Example 10.9's 1/(1 − x) → 1/(1 − x)², Example 10.10's 1/(1 + x) → ln(1 + x) and 1/(1 + x²) → tan⁻¹x), slider N (1 to 40, default 6) · headline: the interval of convergence of the new series with its ends, and the partial sum at the right end · graph alone, the interval marked on the axis in `set` with its ends as the notation writes them · 2D. Readout the term-by-term series with the live N; note what the series does at x = 1.

## Exercises

- Checkpoints 10.4–10.9 inline after Examples 10.4, 10.5, 10.6, 10.8, 10.9, 10.10; open answers, the book's hints as `hint`.
- Section exercises 63–115: the 27 odd keyed ones kept (77 a number, 0.05; 91 and 93 numbers, 2 and 4; the rest open); 109 (keyed "Answers will vary.") kept with an AI-marked worked answer. Kept with AI-marked approaches: 108 (E(x + y) = E(x)E(y) to third order) and 110 (integrating even and odd powers). Left out, unkeyed and computational: 64–106 even, 112, 114.
- Review exercises 253 (the radius of the differentiated series, keyed True), 261, 263, 277 (keyed) and 254 (power series show (eˣ)′ = eˣ, unkeyed true or false, with an approach) held here, `source_section` 10.4.
- Corrections under their cards: 67 (the key's coefficient prints 1/2ⁿ⁺² for 1/2²ⁿ⁺², with a stray dot), 89 (the prompt's series and the key are each off by a sign: Σ(−1)ⁿ(2n)x²ⁿ⁻¹ is −2x/(1 + x²)², and ∫2x/(1 + x²)² dx = −1/(1 + x²) + C = Σ(−1)ⁿ⁺¹x²ⁿ + C).

## Extra simulations (rule 15)

Two picked, besides `sim-term-by-term` for the section's main result: `sim-cauchy-product` (the grid is the view the text's long-hand product only hints at) and `sim-present-value` (the opener's question answered by dragging the rate and the term, the bars a geometric sequence the reader can watch sum). Weighed and left out: a Sim of Combining Power Series' substitution (Example 10.4's interval shrinking to (−1/3, 1/3)), since 10.1's number line already shows an interval and the arithmetic is one line.

## Wanted at chapter level

- forms `eq-combining-sum`, `eq-combining-substitution` → `10.2-fs-id1167023714096`; `eq-present-value-n-years` → `10.2-fs-id1167023780795`; `eq-present-value-perpetual` → `10.2-fs-id1167023920708`; `eq-cauchy-product` → `10.2-fs-id1167023808343`; `eq-term-by-term-derivative`, `eq-term-by-term-integral` → `10.2-fs-id1167023789599`.
- variables of 10.2: f, g, S, T → `10.2-fs-id1167023714096`; R, f′ → `10.2-fs-id1167023789599`; G → `10.2-term-by-term-term`; P → `10.2-present-value-term`.
- Review 253 placed here, not in 10.1 as the prep listed: Σnaₙxⁿ⁻¹ is the differentiated series.
- Applied in the chapter pass (2026-10-13): every anchor above set with `ost set`; review rows landed with `mksection.py --with-review`.

## Derivations

- Theorem · Combining Power Series, Proof of i. · score 3 · built as drv-combining-power-series (replaces the two displays; the partial sums split, then the limit law)
- Example 10.5 b · score 4 · not built: a worked example of Combining Power Series on the geometric series; the partial fractions are one printed line
- Example 10.7 c · score 2 · not built: a worked example, the geometric series summed
- Multiplication of Power Series · the Cauchy product coefficients · score 2 · not built: a heuristic ("it appears that"), one multiplication collected by powers, before a theorem whose proof the book omits
- Example 10.9 a · score 2 · not built: a worked example, one term-by-term differentiation
- Example 10.10 a · score 4 · built as drv-power-series-for-ln (an equation-first block that derives the series of Table 10.1; the antiderivative and the constant C = 0 join the integrated series)
- Example 10.10 b · score 4 · built as drv-power-series-for-arctan (the same shape for tan⁻¹x)
- Theorem · Uniqueness of Power Series, Proof · score 1 · built as drv-uniqueness-of-power-series (a proof; the nth derivative line the book summarises as "more generally" is inserted)
- From 9.5 (the ch09 candidate "S = ln 2"): built in 10.3 as drv-alternating-harmonic-series-sum; Example 10.10 a's sentence that the sum at x = 1 needs "more advanced techniques" stays as printed with a correction note (c-ln2-remainder) pointing to it
