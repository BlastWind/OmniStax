# Exploration: Calculus, Chapter 9 Sequences and Series

Written 2026-10-12, before the chapter's sections were built. The seven modules were converted with `python3 tools/convert.py 9` and read; the book's organization and apparatus are as `RULES.md` records them, and nothing in this chapter departs from that account. `config.md` beside this file is the agreed list. The chapter is Volume 2's Chapter 5; its numbers shift to 9.

## Why this chapter

The chapter answers the opener's question, how infinitely many terms can add to a finite number. 9.1 defines a sequence, its explicit formula and recurrence relation, arithmetic and geometric sequences, the limit of a sequence informally and by ε and N, the limit laws, continuous functions on convergent sequences, the Squeeze Theorem for sequences, bounded and monotone sequences and the Monotone Convergence Theorem, with a Student Project on the Fibonacci numbers. 9.2 defines an infinite series as the limit of its partial sums, shows the harmonic series diverges, proves the algebraic properties, sums geometric series (repeating decimals, the Koch snowflake) and telescoping series, with a Student Project on Euler's constant. 9.3 gives the divergence test, the integral test, the p-series and the remainder estimate of the integral test. 9.4 gives the comparison and limit comparison tests. 9.5 gives alternating series, the alternating series test, the remainder of an alternating series, absolute and conditional convergence and the rearrangement of a conditionally convergent series. 9.6 gives the ratio and root tests, a strategy for choosing a test, the book's summary table of the tests, and a Student Project on series for π; its module carries the Chapter Review Exercises.

## Modules

Ex. = worked examples, Fig. = numbered figures, Img. = unnumbered images (in exercises), CP = checkpoints, Exer. = section exercises (chapter-wide numbers), Keyed = those carrying the book's solution, Gl. = glossary entries, KE = Key Equations rows.

| Section | Module | Ex. | Fig. | Img. | Tables | Notes | CP | Exer. | Keyed | Gl. | KE | Media |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m53756 | 0 | 1 splash (Koch iterations) | 0 | 0 | — | 0 | — | — | 0 | 0 | — |
| 9.1 Sequences | m53758 | 6 | 8 (2 photos) | 3 | 0 | 5 definitions, 6 theorems, 1 Student Project | 6 | 1–66 | 33 | 15 | 0 | — |
| 9.2 Infinite Series | m53739 | 6 | 2 | 6 | 2 unnumbered (+ KE) | 3 definitions, 1 theorem, 1 Student Project | 5 | 67–137 | 36 | 7 | 2 | — |
| 9.3 The Divergence and Integral Tests | m53754 | 4 | 4 | 0 | KE | 1 definition, 3 theorems | 4 | 138–193 | 28 | 4 | 3 | — |
| 9.4 Comparison Tests | m53751 | 2 | 1 | 0 | 2 (Tables 9.1, 9.2) | 2 theorems | 2 | 194–249 | 28 | 2 | 0 | — |
| 9.5 Alternating Series | m53743 | 4 | 2 | 2 | KE | 2 definitions, 3 theorems | 3 | 250–316 | 33 | 4 | 1 | — |
| 9.6 Ratio and Root Tests | m53747 | 3 | 0 | 0 | 1 (Table 9.3) | 2 theorems, 1 strategy, 1 Student Project | 3 | 317–378 | 31 | 2 | 0 | 1 (testing series) |
| Review (in 9.6) | m53747 | — | — | — | — | — | — | 379–404 | 13 | — | — | — |

378 section exercises, 189 keyed; 26 review exercises, 13 keyed; 23 checkpoints; 25 worked examples; 34 glossary entries. The key answers the odd numbers only.

## Figure, table, example and equation numbers

Counted in book order, the opener as Figure 9.1; a bare `<media>` and a table with class `unnumbered` take no number. Checkpoints run 9.1–9.23 after the examples they follow. Theorems are numbered on openstax.org (Theorem 5.1 to 5.17 in Volume 2) and are not in this book's pages; notes carry their names.

| Section | Figures | Tables | Examples |
|---|---|---|---|
| intro | 9.1 the Koch snowflake's iterations (splash) | — | — |
| 9.1 | 9.2 the graph of {2ⁿ}; 9.3 four sequences (a) 1 + 3n, (b) 1 − (1/2)ⁿ, (c) (−1)ⁿ, (d) (−1)ⁿ/n; 9.4 the ε–N picture; 9.5 a continuous f on a convergent sequence; 9.6 the Squeeze Theorem; 9.7 an increasing bounded sequence; 9.8 a sunflower (photo); 9.9 the Parthenon (photo) | — | 9.1–9.6 |
| 9.2 | 9.10 the partial sums of Σ(1/2)ⁿ⁻¹ approaching 2; 9.11 the Koch snowflake F₀–F₃ (Example 9.11) | two unnumbered (Sₖ of the oil series; of the harmonic series) | 9.7–9.12 |
| 9.3 | 9.12 the harmonic series as rectangles over 1/x; 9.13 Σ1/n² as rectangles under 1/x²; 9.14 (a) inscribed and (b) circumscribed rectangles of a general f; 9.15 the remainder estimate (a) (b) | — | 9.13–9.16 |
| 9.4 | 9.16 partial sums (a) Σ1/(n² + 1) against Σ1/n², (b) Σ1/(n − 1/2) against Σ1/n | 9.1 comparing with a p-series (p = 2); 9.2 comparing with the harmonic series | 9.17, 9.18 |
| 9.5 | 9.17 the partial sums of the alternating harmonic series; 9.18 those of a general alternating series | — | 9.19–9.22 |
| 9.6 | — | 9.3 Summary of Convergence Tests | 9.23–9.25 |

Equations: openstax.org numbers every clean display equation of 9.1–9.3 and the four marked `class="numbered"` in 9.5 (checked on openstax.org 2026-10-12: 5.3 shows (5.8)–(5.10), 5.5 shows (5.11)–(5.14), 5.6 shows none). Here they are Equations 9.1–9.4 (9.1, rⁿ for |r| < 1, r = 1, r > 1, r ≤ −1), 9.5–9.7 (9.2, the harmonic series, the geometric series, its sum), 9.8–9.10 (9.3, the divergence test, the p-series, the remainder estimate), 9.11–9.14 (9.5, the two example series and the two forms of an alternating series), each `\tag{9.N}`.

## What is new

- Types: none new. `sequence` and `series` (book types 11 and 12) are drawn for the first time: a sequence's terms as dots at (n, aₙ), a series as its partial sums Sₖ, the sum S or the limit L of a sequence as a dashed level in `limit`. The remainder Rₙ is an `error`. f with f(n) = aₙ wears `function`, the integral beside it `integral`.
- Symbols: aₙ (the book's sym `a_n`, until now ink as a polynomial coefficient) wears `sequence` from 9.1 with its own variables rows (`redefines`); new rows bₙ, cₙ (sequence), Sₖ (series), S (limit, the sum), Rₙ (error), ρ (limit, the limit of the ratio or root), r and p in ink.
- The book's summary table of convergence tests (Table 9.3) stays a book table; a chooser sheet is planned for later and is not built here.

## Sketches, photographs, media

Every graph is drawn live. Photographs: the opener's Koch iterations (a diagram the book prints as the splash; kept on the introduction page, the snowflake itself drawn live in 9.2), the sunflower and the Parthenon of 9.1's Fibonacci project (the project's text points at both, kept with their credits). One media note in 9.6 (a website on testing series) is dropped and named in `notes`. Exercise images: the keyed plots of 9.1 (three), 9.2 (the stacked blocks, two zig-zag paths, the Sierpinski triangle and gasket, a plot of tₖ) and 9.5 (two keyed plots) stay with their cards.

## Exercises that belong elsewhere

The Chapter Review Exercises 379–404, printed at the end of 9.6, go to the section that introduces what each tests (`source_section` 9.6): 383, 385, 387, 401 → 9.1; 389, 399, 403 → 9.2; 379, 380 → 9.3; 381, 382, 393, 397 → 9.5; 391, 395 → 9.6. Unkeyed computational review exercises 384, 386, 388, 390, 392, 394, 396, 398, 400, 402 and 404 are left out; the unkeyed true-or-false 380 and 382 are kept with AI-marked answers.

## Rule 23: what would make this chapter stunning

Sequences and series are the first chapter where the reader must hold two infinite lists at once, the terms and their running totals, and keep them apart. The figures put them side by side throughout: the terms as dots shrinking toward zero in `sequence`, the partial sums climbing or zig-zagging toward their sum in `series`, the sum a dashed `limit` level. The ε–N band closes on a sequence as ε shrinks; the integral test's rectangles sit over and under 1/xᵖ while p crosses 1; the telescoping series collapses on a number line as its segments butt end to end; the Koch snowflake grows its perimeter without bound while its area settles; and the alternating harmonic series, rearranged greedily, walks to whatever sum the reader asks for, which is the Riemann rearrangement the text leaves beyond its scope.
