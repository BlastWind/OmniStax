# Exploration: Calculus, Chapter 10 Power Series

Written 2026-10-12, before the chapter's sections were built. The five modules (Volume 2, Chapter 6) were converted with `python3 tools/convert.py 10` and read; the book's organization and apparatus are as `RULES.md` records them, and nothing in this chapter departs from that account. `config.md` beside this file is the agreed list.

## Why this chapter

Chapter 9 summed series of numbers; this chapter lets the terms carry a variable. 10.1 defines a power series centred at 0 and at a, proves that it converges at its centre only, everywhere, or on an interval of radius R, finds intervals and radii of convergence with the ratio test and an endpoint check, and represents 1/(1 − x) and its relatives by the geometric series, comparing f with its partial sums. 10.2 adds, scales and substitutes into power series, multiplies them (the Cauchy product), differentiates and integrates them term by term (ln(1 + x), tan⁻¹x), proves that a power series is unique, and answers the opener's lottery question with the present value of an annuity. 10.3 asks which coefficients a power series for f must have, defines the Taylor and Maclaurin series and polynomials, finds them for ln x, eˣ, sin x, cos x and ∛x, proves Taylor's theorem with remainder, bounds the error of an estimate, and shows that a Taylor series converges to f exactly when Rₙ → 0. 10.4 builds the binomial series, collects the Maclaurin series of common functions in Table 10.1, derives new series from known ones, solves y′ = y and Airy's equation by power series, and evaluates the nonelementary integrals ∫e^(−x²) dx, a normal probability and the period of a pendulum.

## Modules

Ex. = worked examples, Fig. = numbered figures, Img. = unnumbered images, CP = checkpoints (all keyed), Exer. = section exercises (chapter-wide numbers), Keyed = those carrying the book's solution, Gl. = glossary entries, KE = Key Equations rows, Eq. = equations the book numbers.

| Section | Module | Ex. | Fig. | Img. | Notes | CP | Exer. | Keyed | Gl. | KE | Eq. | Media |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m53760 | 0 | 1 photo | 0 | — | 0 | 0 | 0 | 0 | 0 | 0 | — |
| 10.1 Power Series and Functions | m53761 | 3 | 2 | 4 (answer of CP 10.2, of 57, 59, 61) | 2 definitions, 1 theorem with proof | 3 | 1–62 | 31 | 3 | 2 | 3 (10.1–10.3) | — |
| 10.2 Properties of Power Series | m53762 | 7 | 1 photo | 1 (answer of a section exercise) | 4 theorems, 2 proofs | 6 | 63–115 | 27 | 2 | 0 | 0 | — |
| 10.3 Taylor and Maclaurin Series | m53817 | 6 | 5 | 4 (answers of section exercises) | 2 definitions, 3 theorems, 1 proof, 1 Student Project | 6 | 116–173 | 29 | 5 | 1 | 2 (10.4, 10.5) | 1 (MacTutor biographies) |
| 10.4 Working with Taylor Series | m53769 | 8 | 3 | 3 (answers of section exercises) | 1 definition, 1 table | 7 | 174–252 | 39 | 2 | 0 | 6 (10.6–10.11) | — |
| Review (in 10.4) | m53769 | — | — | — | — | — | 253–278 | 13 | — | — | — | — |

252 section exercises, 126 keyed; 26 review exercises, 13 keyed; 22 checkpoints (10.1–10.3 in 10.1, 10.4–10.9 in 10.2, 10.10–10.15 in 10.3, 10.16–10.22 in 10.4); 24 worked examples; 12 glossary entries.

## Figure, table, example and equation numbers

Counted from the CNXML in book order, the opener as Figure 10.1; a bare `<media>` and a table with class `unnumbered` take no number.

| Section | Figures | Examples | Equations | Tables |
|---|---|---|---|---|
| intro | 10.1 bills covering a table (splash photo) | — | — | — |
| 10.1 | 10.2 three number lines, R = 0, R = ∞, R; 10.3 1/(1 − x) and S₂, S₄, S₆ (Ex. 10.2) | 10.1–10.3 | 10.1, 10.2 the power series centred at 0 and at a (in the definition), 10.3 the geometric series 1 + x + x² + ⋯ | — |
| 10.2 | 10.4 a stack of bills (photo, in the problem of Ex. 10.7) | 10.4–10.10 | — | — |
| 10.3 | 10.5 ln x and p₀–p₃ at 1 (Ex. 10.11); 10.6 eˣ and p₀–p₃, 10.7 sin x and p₁, p₃, p₅, 10.8 cos x and p₀, p₂, p₄ (Ex. 10.12 a–c); 10.9 ∛x and p₁, p₂ at 8 (Ex. 10.13) | 10.11–10.16 | 10.4 the series Σcₙ(x − a)ⁿ whose coefficients are sought, 10.5 the Taylor series (in the definition) | — |
| 10.4 | 10.10 √(1 + x) and p₃ (Ex. 10.17); 10.11 the normal curve with the area from a to b; 10.12 a pendulum of length L and angle θmax (Ex. 10.24) | 10.17–10.24 | 10.6 the binomial coefficient, 10.7 the finite expansion, 10.8 the coefficients f⁽ⁿ⁾(0)/n!, 10.9 the binomial series, 10.10 the normal probability integral, 10.11 its standardized form | 10.1 Maclaurin Series for Common Functions |

The book numbers 11 equations in this chapter, every `<equation>` that is not `class="unnumbered"`, as openstax.org shows them (Volume 2's 6.4 prints (6.6)–(6.11), and its text cites "Equation 6.8", "Equation 6.9", "integral Equation 6.10", "Use Equation 6.11"). The text keeps all 11 with `\tag{10.N}` and the book's id, and every "[ref:…]" to one reads "Equation 10.N", linked; 10.3's "the series Equation 10.4" is cited four times.

The book numbers its theorems on openstax.org (Theorem 6.1 Convergence of a Power Series, 6.2–6.5 in 6.2, 6.6–6.9 in 6.3) but cites them by title ("In Combining Power Series we state…", "By Taylor's Theorem with Remainder"), so the notes keep the eyebrow "Theorem" of the earlier chapters, the book's id, and each cite is the title linked to its note.

## What is new

- `series` is the chapter's main type, its first use beside `sequence` in Chapter 9: a power series and its sum, the partial sums Sₙ(x) (S_N, T_N of the proof in 10.2), a Taylor or Maclaurin series, a Taylor or Maclaurin polynomial pₙ (a partial sum of its series), the binomial series, the Cauchy product. `function` for f, g, the function a series represents and the solution y of a differential equation. `set` for an interval of convergence, the chapter's other central object: drawn as the shaded stretch of the number line with its ends marked as the notation writes them. `error` for the remainder Rₙ(x) = f(x) − pₙ(x) and its bound, drawn as the gap between f and pₙ. `derivative` for f′, f″, f⁽ⁿ⁾(a) in the coefficients; `integral` for the term-by-term integral, a nonelementary integral, the probability (an area) and the period's integral. The radius of convergence R is a number and stays ink, as Chapter 9's ratio ρ does.
- Two theorems carry the whole chapter visually: the trichotomy of convergence (a number line that is a point, the whole line, or an interval) and Taylor's theorem (pₙ hugging f near a, the gap Rₙ shrinking as n grows inside the interval and blowing up outside it).
- Table 10.1 is already the Maclaurin reference sheet (`/calculus/sheets/maclaurin/`, built in the full-book pass); the table stays in the text of 10.4 and the sheet is linked where the text first presents it ("we summarize the results of these series").
- Chapter 9's ratio, comparison, divergence and alternating series tests, the geometric series and its sum, the harmonic and alternating harmonic series and partial sums are the prerequisites; Chapter 3's higher-order derivatives, Chapter 4's Mean Value and Rolle's theorems, Chapter 7's partial fractions and Chapter 8's initial-value problems are used too.
- Concepts: about 35, every glossary word among their `terms`.

## Sketches to replace and photographs

Every graph is replaced by a live figure from the book's function (config 18). Figure 10.2's three number lines become one number line with a choice of the three series of Example 10.1 (R = ∞, R = 0, R = 3) and the geometric series, the interval of convergence shaded in `set`, and a probe x whose partial sums are drawn beside it settling or running off. Figure 10.3 is a slider on N over 1/(1 − x). Figures 10.5–10.9 are each a slider on the degree n over their own function (the book's degrees the default state); folding 10.6–10.8 was weighed and rejected: they are the three parts of one example but the text reads each beside its part (a, b, c), so each stays where its part stands, drawn by one shared helper. Figure 10.9 carries the remainder: the probe at x = 11, the gap R_n(11) shaded in `error` and Taylor's bound beside the true error. Figure 10.10 is the binomial series with a slider on the exponent r as well (the series stops at a nonnegative integer r). Figure 10.11 is the normal curve with a slider on b and on the number of series terms. Figure 10.12 is the pendulum with a slider on θmax and a graph of the period against θmax, exact beside the one- and two-term estimates.

Photographs: Figure 10.1 (bills, opener) kept; Figure 10.4 (a stack of bills inside the problem of Example 10.7) kept, since the example prints it in its problem. The checkpoint answer image of 10.1 (CP 10.2) and the exercise answer images stay in their cards' solutions.

## Notes and media

One media note is dropped and named in `notes` (config 14): 10.3's MacTutor biographies of Brook Taylor and Colin Maclaurin; a biography seeds no Sim. 10.3's Student Project (Proving that e is Irrational) is a note with its six questions (config 15). Proofs under theorems: 10.1 (Convergence of a Power Series), 10.2 (combining, part i, and Uniqueness of Power Series), 10.3 (Taylor's Theorem with Remainder), each in the text under its theorem. Cross-module references: the intro's "(see Example 10.7)"; 10.3's and 10.4's citations of Uniqueness of Power Series become links to 10.2.

## Errors noticed in reading (corrections per book-corrections-as-notes)

- 10.3, Example 10.13 c: the bound on R₂(11) is printed with 0.0011468 for f‴(8) ≈ 0.0014468, the value two lines above; the result 0.0065104 is computed from 0.0014468.
- 10.3, Example 10.14 a: "By Uniqueness of Taylor Series, the remainder is …": the remainder formula is Taylor's Theorem with Remainder.
- 10.3, Example 10.12 c: "and for n ≥ 0" is printed for m ≥ 0.
- 10.3, Checkpoint 10.14: the key prints Σ(2 − x)ⁿ/2ⁿ⁺¹ and the hint f⁽ⁿ⁾(2) = (−1)ⁿn!/2ⁿ⁺¹; for f(x) = 1/(2x), f⁽ⁿ⁾(2) = (−1)ⁿn!/2ⁿ⁺² and the series is Σ(2 − x)ⁿ/2ⁿ⁺² (at x = 2 the printed series gives 1/2, not f(2) = 1/4).
- 10.4, Example 10.20: the right side of the coefficient equation ends "+ 4c₃x³"; it is 4c₄x³.
- 10.4, Checkpoint 10.19: the hint's equations c₀ = 2c₁, c₁ = 2·2c₂, … and cₙ = 2(n + 1)Cₙ₊₁ are reversed; y′ = 2y gives c₁ = 2c₀, 2c₂ = 2c₁, …, (n + 1)cₙ₊₁ = 2cₙ.
- 10.4, Checkpoint 10.18: the key prints the series of 1/√(1 + x) less its first term; the binomial series of (1 + x)^(−3/2) is 1 + Σ (−1)ⁿ/n! · 1·3·5⋯(2n + 1)/2ⁿ xⁿ.
- 10.4, Checkpoint 10.21: the key gives ∫₀¹cos√x dx ≈ 0.514; the series 1 − 1/4 + 1/72 − ⋯ gives 0.764 (the integral is 2(cos 1 + sin 1 − 1) ≈ 0.7635).
- 10.4, Example 10.23: the problem asks for the first six terms and the bound 0.00546 is the seventh term's, but the text says "Using the first five terms, we estimate that the probability is approximately 0.4922": six terms give 0.4729 (the probability is 0.4772, inside 0.4729 ± 0.0055; 0.4922 is not within the stated accuracy).
- 10.4, Example 10.24: "1.3" is printed for 1·3 in one integrand.
- Section exercises: corrections to keys are found while the section's exercises are checked and recorded in its plan.

## Exercises that belong to another section

The Chapter Review Exercises (253–278) are printed at the end of 10.4 and placed with the section that introduces what each tests (config 11), `source_section` 10.4:

- 10.1: 253 (radius of convergence under a change of the series, keyed), 257, 259 (radius and interval, keyed).
- 10.2: 261 (x²/(x + 3) as a power series, keyed), 263 (tan⁻¹(2x) by term-by-term integration, keyed), 277 (the lottery annuity's interest rate, keyed); 254 (power series show (eˣ)′ = eˣ, an unkeyed true or false) kept with an approach.
- 10.3: 255 (sin x ≈ x for small x, keyed), 265 (degree-four Taylor polynomial of a cubic and its error, keyed), 269 (Taylor series of sin x at π/2, keyed).
- 10.4: 267 (cos 3x), 271 (e^(−x²) − 1), 273 (∫sin x/x), 275 (Euler's formula), all keyed; 256 (the radius of the Maclaurin series of 3ˣ, an unkeyed true or false) kept with an approach.
- Left out, unkeyed and computational: 258, 260, 262, 264, 266, 268, 270, 272, 274, 276, 278.

Unkeyed even section exercises are judged per plan under config 12: the true-or-false statements of 10.1 (2, 4), the explanations and proofs (10.1's 48; 10.2's 108, 110) are kept with approaches; the rest are computational and left out, named in `exercise_notes`.

## Rule 23: what would make this chapter stunning

A power series is a polynomial that never stops, and the page can show what that buys and what it costs. On a number line the reader drags x and watches the partial sums at that x either settle or run away: the series of Example 10.1 settles everywhere, at its centre only, or on [−1, 5), the right end failing as the harmonic series fails and the left holding as the alternating harmonic series holds. Over 1/(1 − x) the partial sums Sₙ climb up the curve on (−1, 1) and peel off at its edges whatever N does. A Cauchy product is a grid of cᵢdⱼ, each coefficient of the product an anti-diagonal. Term-by-term integration turns the geometric series into ln(1 + x) and tan⁻¹x, the same radius, the ends changed. A Taylor polynomial is the curve that matches f's value, slope, bend and every higher derivative at a: as n rises, pₙ hugs ln x near 1 and lets go past 2, while eˣ, sin x and cos x are held across the whole window; the gap Rₙ is drawn in the error colour, with Taylor's bound beside the true error. The binomial series turns on its exponent: at a whole number the polynomial stops and is exact. The normal curve's area is a series the reader can cut off term by term, the alternating estimates closing in on 0.477, and a pendulum's period grows with its amplitude in a way the first term of a binomial series misses and the second catches.
