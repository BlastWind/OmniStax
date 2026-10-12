# Plan: 17.4 Series Solutions of Differential Equations (m54046)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-12. Template: `ch01/1.1`.

One objective, two opening paragraphs, one strategy, Equation 17.10, Examples 17.25 and 17.26, two checkpoints (17.22, 17.23), two Key Concepts, 13 section exercises (6 keyed), the 25 Chapter Review Exercises (117–141, 12 keyed), no glossary. One unnumbered image, the graph of the Bessel series in Example 17.26, replaced by a Sim that keeps it as its original. The book's module has no section header; the page gets two (root rule 3).

## Sub-concepts (page headers)

0. `series-intro`: the two opening paragraphs (power series and their derivatives recalled; the brief treatment).
1. `power-series-solutions` **Power Series Solutions** (OmniStax's header): the strategy note, Example 17.25 with its Analysis for part a, Checkpoint 17.22.
2. `bessel` **The Bessel Equation** (OmniStax's header): Bessel functions and the Bessel equation of order n, Example 17.26 (Equation 17.10) with `sim-bessel`, Checkpoint 17.23.

## Concept nodes

Introduced: `bessel-equation` (`eq-bessel-equation`), `series-solution-of-the-bessel-equation-of-order-0` (`eq-bessel-order-zero`, Equation 17.10). Reinforced: `power-series-solution-of-a-differential-equation` (10.4's skill; the strategy note states it again). Uses: `power-series`, `term-by-term-differentiation-and-integration`, `uniqueness-of-power-series`, `recurrence-relation`, `general-solution`, `exponential-function`, `maclaurin-series-of-common-functions`, `second-order-equation-with-constant-coefficients`, `differential-equation`.

## Colour

`function` for y (`\kyfn`), `derivative` for y′ and y″ (`\kyprime`, `\kydprime`); `series` for the Bessel series's partial sums in the figure. The coefficients aₙ, a₀, a₁, c₀, c₁, the index n and k, the order n of a Bessel equation and x stay ink. No referents.

## Figures

- `sim-bessel` · Sim (replaces Example 17.26's unnumbered graph, `CNX_Calc_Figure_17_04_001`, kept as its original) · `series-solution-of-the-bessel-equation-of-order-0`, `power-series-solution-of-a-differential-equation` · variation: the number of terms; the partial sum Σ_{k=0}^{K} (−1)ᵏx²ᵏ/(2²ᵏ(k!)²) (in `series`) closes on the solution with a₀ = 1 (in `function`, the sum taken far enough to be exact on the window) over a window that widens with K, the function of a vibrating drum seen as the limit of its series · arrows none · still · slider K (0 to 20, default 4, detents 4) · headline how far the partial sum stays within 0.01 of the solution · graph alone, x −12.5 to 12.5 by y −0.6 to 1.2 as the book's graph · 2D. Readout: the partial sum written out to its last term.

## Exercises

- Checkpoints 17.22 and 17.23 inline after Examples 17.25 and 17.26; 17.22 open, 17.23 ("Verify …") has no answer in the book: an AI-marked verification.
- Section exercises 104–116: the 6 odd keyed ones kept. Left out, unkeyed and computational: 104–114 even (power series solutions) and 116 (the Bessel equation of order 1).
- Review exercises 117–141 are printed here and set in the sections that introduce what each tests: 117, 119, 120, 121, 123, 125, 133, 135 in 17.1; 118, 127, 129, 131 in 17.2; 137, 139, 141 in 17.3. None tests a series solution, so none is set here. Left out, unkeyed and computational: 122, 124 (classifications), 126, 128, 130, 132 (general solutions), 134 (an initial-value problem), 136 (a boundary-value problem), 138 (the general solution of the beats equation), 140 (a plot of beats).
- Keys checked (105's a₁ is not the coefficient of x there, but the family it writes is the general solution; no note).
- Corrections in the text: Example 17.25's "this choice of c₁ and c₂" for the constants c₀ and c₁ just chosen, and "(step 3)" at a₂ = 2a₀ + 2, where coefficients are equated (step 5).

## Extra simulations (rule 15)

None beyond `sim-bessel`. Weighed and left out: the partial sums of Example 17.25(a) closing on c₀eˣ + c₁e⁻ˣ (the same picture as `sim-bessel` and Chapter 10's `sim-airy`, for a solution the reader already has in closed form).

## Wanted at chapter level

- forms `eq-bessel-equation` → `17.4-bessel-term`, `eq-bessel-order-zero` → `17.4-eip-id1171281740360`.
- variables of 17.4: y, y′, y″ → `17.4-power-series-solutions`.
- The chapter's review exercises: placed by `mksection.py --with-review` in 17.1–17.3 (above).
