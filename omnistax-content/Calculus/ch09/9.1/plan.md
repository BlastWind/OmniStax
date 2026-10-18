# Plan: 9.1 Sequences (m53758)

Source: `source.md`, converted with `tools/convert.py 9`. Status: built 2026-10-12 straight through (config 2 waives the review for this run; decisions reported afterwards). Template: `ch01/1.1`.

Three objectives, one opening paragraph, five definition notes, six theorem notes (two with proofs), Figures 9.2–9.9, Examples 9.1–9.6, Checkpoints 9.1–9.6, Equations 9.1–9.4, the Student Project Fibonacci Numbers, five Key Concepts, no Key Equations, 66 section exercises (33 keyed), 15 glossary terms.

## Sub-concepts (page headers)

The book's headers: the opening paragraph `p#sequences-intro`; `terminology` **Terminology of Sequences** (the definition note `sequence-definition`, Figure 9.2, arithmetic and geometric sequences, Examples 9.1 and 9.2); `limit-of-a-sequence` **Limit of a Sequence** (Figure 9.3, the notes `limit-informal`, `limit-formal`, Figure 9.4, the theorems `sequence-by-function`, `limit-laws` with its proof, `continuous-on-sequences` with its proof and Figure 9.5, `squeeze-sequences` with its proof and Figure 9.6, Examples 9.3–9.5, Equations 9.1–9.4); `bounded-sequences` **Bounded Sequences** (the notes `bounded-definition`, `bounded-theorem`, `monotone-definition`, `monotone-convergence`, Figure 9.7, Example 9.6, the project `fibonacci` with Figures 9.8 and 9.9).

## Concept nodes (merged by the prep)

Introduced: `sequence`, `index-variable`, `term-of-a-sequence`, `explicit-formula`, `recurrence-relation`, `graph-of-a-sequence`, `arithmetic-sequence`, `geometric-sequence`, `limit-of-a-sequence`, `convergent-sequence`, `divergent-sequence`, `formal-definition-of-the-limit-of-a-sequence`, `divergence-to-infinity`, `limit-of-a-sequence-defined-by-a-function`, `limit-of-a-geometric-sequence` (Equations 9.1–9.4), `algebraic-limit-laws-for-sequences`, `continuous-functions-on-convergent-sequences`, `squeeze-theorem-for-sequences`, `bounded-above`, `bounded-below`, `bounded-sequence`, `unbounded-sequence`, `convergent-sequences-are-bounded`, `monotone-sequence`, `monotone-convergence-theorem`, `fibonacci-numbers`. Uses: `function`, `domain`, `limit-at-infinity`, `limit-laws`, `continuity-at-a-point`, `squeeze-theorem`, `lhopitals-rule`, `indeterminate-forms`, `natural-logarithm`, `number-e`.

## Colour, referents and function tokens

aₙ, bₙ, cₙ wear `sequence` (`\kaseq`, `\kbseq`, `\kcseq`, the subscript in ink); L, A, B `limit`; f with f(n) = aₙ `function`; Fₙ of the project `sequence` (`\kF`); n, N, ε, M, r, c in ink. Referents: the three sequences of the Squeeze figure, `squeeze-lower`, `squeeze-middle`, `squeeze-upper` (the text names them aₙ, bₙ, cₙ apart and the figure draws one dot row each). Function tokens on the functions the prose gives by rule: f(x) = 1/x, (1/2)ˣ, 2ˣ/x², (1 + 4/x)ˣ, √x, cos x where written as f.

## Figures

- `sim-sequence-graph` · Figure 9.2 · `graph-of-a-sequence`, `explicit-formula`, `recurrence-relation`, `arithmetic-sequence`, `geometric-sequence` · value add: variation: the book's {2ⁿ} as the dots (n, aₙ) for n = 1 to 5, and a choice swaps in the section's arithmetic sequence 3, 7, 11, … (aₙ = 4n − 1) and geometric sequence 2, −2/3, 2/9, … (aₙ = 2(−1/3)ⁿ⁻¹), each frame fixed for its sequence; the readout writes the explicit formula and the recurrence relation · arrows: none · still: no clock · one choice of three states · headline "aₙ = 2ⁿ: each term is twice the one before, from a₁ = 2 to a₅ = 32." · graph alone · 2D.
- `sim-four-sequences` · Figure 9.3 · `limit-of-a-sequence`, `convergent-sequence`, `divergent-sequence` · value add: variation: the four sequences (a) 1 + 3n, (b) 1 − (1/2)ⁿ, (c) (−1)ⁿ, (d) (−1)ⁿ/n in the book's four panels, with one slider N (5 to 40, default the book's 5) for the number of terms drawn, so what each does far out, which five points only hint at, is seen; the frame zooms out with N (the plan's named zoom: each panel's range follows N) · arrows: none · still · slider N (untyped) · headline "N = 5: (a) climbs past 16, (b) closes on 1, (c) jumps between −1 and 1, (d) closes on 0." · graph alone (four panels) · 2D.
- `sim-epsilon-n` · Figure 9.4 · `formal-definition-of-the-limit-of-a-sequence` · value add: variation: ε on a slider (0.05 to 1.5, default 0.75) sets the band L ± ε in `limit`; the least N with |aₙ − L| < ε for every n ≥ N is found and dropped to the n-axis, the terms from N on drawn full, the earlier ones faint. The book draws no formula: the stand-in aₙ = 2 + 3(−1)ⁿ⁺¹/n (L = 2, terms above and below L in the first quadrant, as the sketch is) is the default; the choice also offers the section's convergent sequences 1 − (1/2)ⁿ and (−1)ⁿ/n of Figure 9.3 · arrows: none · still · one choice, slider ε (untyped) · headline "ε = 0.75: from N = 5 on, every term lies within 0.75 of L = 2." · graph alone · 2D.
- `sim-continuous-on-sequence` · Figure 9.5 · `continuous-functions-on-convergent-sequences` · value add: variation: the text's two cases on a choice, f(x) = √x on aₙ = 5 − 3/n² → 5 (the prose after Checkpoint 9.3) and f(x) = cos x on aₙ = 3/n² → 0 (Example 9.4); the inputs aₙ as dots on the x-axis, lifted to the graph of f and carried across to the y-axis, where the outputs f(aₙ) close on f(L); slider n (1 to 12) picks the term whose path is drawn · arrows: none (the dashed paths are guides) · still · choice, slider n · headline "n = 2: a₂ = 4.25, f(a₂) = 2.0616, approaching f(5) = √5 = 2.2361." · graph alone · 2D.
- `sim-squeeze-sequences` · Figure 9.6 · `squeeze-theorem-for-sequences` · value add: variation: Example 9.5's two squeezes on a choice, −1/n² ≤ cos n/n² ≤ 1/n² and −1/2ⁿ ≤ (−1/2)ⁿ ≤ 1/2ⁿ, the three sequences as dot rows in their referent colours, L = 0 dashed; slider n (1 to 20) marks one n, where a bracket from aₙ to cₙ holds bₙ · arrows: none · still · choice, slider n · headline "n = 3: −0.111 ≤ −0.110 ≤ 0.111; the bounds close on 0, and bₙ with them." · graph alone · 2D.
- `sim-monotone-convergence` · Figure 9.7 · `monotone-convergence-theorem`, `bounded-above`, `monotone-sequence` · value add: variation: the text's monotone bounded sequences on a choice: n/(n + 1), increasing and bounded above (the prose example, the sketch's shape and the default); Example 9.6(b)'s a₁ = 2, aₙ₊₁ = aₙ/2 + 1/(2aₙ), decreasing and bounded below by 1; Example 9.6(a)'s 4ⁿ/n!, decreasing from n = 3 and bounded below by 0; a bound M on a slider drawn dashed: the readout says whether every term is ≤ M (or ≥ M), and the least such M is the limit (a dashed circle there) · arrows: none · still · choice, slider M (untyped) · headline "M = 1.2 bounds every term of n/(n + 1) from above; the terms increase to their limit 1." · graph alone · 2D.
- `fig-sunflower` · Figure 9.8 · photo, kept: the project's text points at it, with its credit.
- `fig-parthenon` · Figure 9.9 · photo, kept: the project's text points at it, with its credit.

## Extra simulations (rule 15)

None: a cobweb for a recursion and the Fibonacci ratio settling on φ were weighed and dropped, the first going beyond the section, the second answering the Student Project's question 3 for the reader.

## Exercises

- Checkpoints 9.1–9.6 inline after Examples 9.1–9.6, hint and answer behind reveals.
- Section exercises 1–66: the 33 odd keyed ones kept, keys as printed. Every even one is unkeyed and computational and is left out: 2, 4 (first terms), 6, 8, 10 (formulas), 12 (a general term), 14, 16, 18 (f(n) of a recursion), 20, 22 (plots), 24, 26 (limits from given limits), 28, 30 (limits), 32, 34, 36 (bounded, monotone), 38 (a limit), 40, 42 (squeeze), 44 (a plot), 46, 48, 50, 52 (limits), 54, 56 (Newton’s method), 58, 60, 62, 64, 66 (applications by computer). Group stems carried by their own exercises only (the Newton's-method stem ends at 57; 58–64 have none; 65–66 carry the PRNG stem).
- Review exercises set here, `source_section` 9.6: 383, 385, 387, 401 (401 carries the housefly stem).

## Corrections

- "the sequences {1 + 3n} and {(−1)ⁿ} shown in Figure 9.4 diverge": they are drawn in Figure 9.3 (a) and (c). Words as printed, marker, note.
- "lim (−5n + 2) = → −∞": the printed "= →" is one sign too many. Marker, note.
- Example 9.6(b) defines aₙ₊₁ "for all n ≥ 2" and then uses it for n ≥ 1 (a₂ = 5/4); the recursion holds for n ≥ 1. Marker, note.

## Wanted at chapter level

- Anchors: variables a_seq, n, f → `9.1-sequence-definition`; L → `9.1-limit-informal`; ε → `9.1-limit-formal`; A, B, c → `9.1-limit-laws`; b_seq, c_seq → `9.1-squeeze-sequences`; r → `9.1-terminology`; M → `9.1-bounded-definition`; F → `9.1-fibonacci`. Forms: eq-sequence-list, eq-explicit-formula → `9.1-sequence-definition`; eq-arithmetic-sequence, eq-geometric-sequence → `9.1-terminology`; eq-limit-of-a-sequence → `9.1-limit-informal`; eq-formal-limit-of-a-sequence → `9.1-limit-formal`; eq-sequence-by-function → `9.1-sequence-by-function`; eq-geometric-sequence-to-zero/-one/-infinity/-diverges → `9.1-limit-of-a-sequence`; eq-sequence-*-law → `9.1-limit-laws`; eq-continuous-on-sequence → `9.1-continuous-on-sequences`; eq-sequence-squeeze → `9.1-squeeze-sequences`; eq-increasing-sequence, eq-decreasing-sequence → `9.1-monotone-definition`; eq-fibonacci → `9.1-fibonacci`.

## Derivations

- Terminology of Sequences · the explicit formulas of an arithmetic and a geometric sequence · score 1 · not built: a pattern read off listed terms, three moves, under the bar
- Algebraic Limit Laws · Proof (part iii) · score 2 · built as drv-limit-sum-law (a printed proof; the setup prose kept, the chain line replaced by the host; the regrouping line inserted)
- Limit of a Sequence · the geometric sequence $\{r^{n}\},$ (9.1)–(9.4) · score 3 · not built: a summary drawn from Example 9.5 and prose, no chain
- Example 9.3d · the limit of $(1+4/n)^{n}$ · score 5 · not built: a worked example of 4.8's $1^{\infty}$ method along one line, every line printed but one derivative
- Continuous Functions Defined on Convergent Sequences · Proof · score 2 · built as drv-continuous-function-of-sequence (a printed proof, prose-first; the paragraph kept, the host after it)
- Squeeze Theorem for Sequences · Proof · score 2 · built as drv-squeeze-theorem-sequences (the chain replaced by the host, the closing sentence trimmed to its conclusion)
- Convergent Sequences Are Bounded · no proof printed · score 6 · built as drv-convergent-sequences-bounded (hidden: $\varepsilon=1,$ the triangle inequality of 2.5, the maximum of the first $N-1$ terms; host after the theorem)
- Monotone Convergence Theorem · "beyond the scope of this text" · score 7 · not built: the proof rests on the completeness of the real numbers, which the book never states
- Example 9.6a and 9.6b · scores 1 and 2 · not built: worked examples of the Monotone Convergence Theorem
- Student Project · Fibonacci Numbers · score 12 · not built: a project set for the reader
