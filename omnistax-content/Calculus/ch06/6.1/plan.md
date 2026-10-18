# Plan: 6.1 Areas between Curves (m53640)

Source: `source.md`, converted with `tools/convert.py 6`. Status: plan; config 2 waives the review for this run, decisions reported afterwards. Template: `ch01/1.1`.

Three objectives, an opening paragraph, three theorem notes, Figures 6.2 to 6.10, Examples 6.1 to 6.5, five checkpoints (6.1–6.5), two Key Equations, four Key Concepts, 57 section exercises (29 keyed), no glossary, one media note. One page (root rule 11).

## Sub-concepts (page headers)

The book's headers are kept (root rule 3).

0. `areas-intro` (no header): the opening paragraph (root rule 21.3); "Introduction to Integration" links to `ch05/intro`.
1. `area-between-two-curves` **Area of a Region between Two Curves**: the partition, the rectangles from g(xᵢ*) to f(xᵢ*), the Riemann sum and its limit, the theorem note `area-between-curves-theorem`, Examples 6.1 and 6.2 with their checkpoints. Introduces `area-between-two-curves`.
2. `compound-regions` **Areas of Compound Regions**: the theorem note `curves-that-cross-theorem` (|f − g|), Example 6.3 (sin and cos), Example 6.4 (x² and 2 − x, two integrals), checkpoints. Introduces `area-between-curves-that-cross`, `area-of-a-compound-region` (at Example 6.4).
3. `regions-along-y` **Regions Defined with Respect to y**: the same region as functions of y, horizontal rectangles, the theorem note `area-along-y-theorem`, Example 6.5 and checkpoint. Introduces `area-between-curves-along-the-y-axis`.

Examples keep the book's ids and numbers. Objectives to the tables, Key Concepts to `summary_html`, the two Key Equations to the forms (`eq-area-between-curves`, `eq-area-between-curves-y`) in "Theorems and formulas" with `eq-area-between-crossing-curves`. The media note (an online area calculator) is dropped and named in `notes`.

## Concepts (merged in book.json in prep)

`area-between-two-curves` (result, integral, symbol A), `area-between-curves-that-cross` (result, integral), `area-of-a-compound-region` (skill), `area-between-curves-along-the-y-axis` (result, integral). Uses: `definite-integral`, `area-under-the-curve`, `riemann-sum`, `regular-partition`, `limit`, `absolute-value-function`, `properties-of-the-definite-integral`, `limits-of-integration`.

## Colour, referents and function tokens

Categories (`ch06/COLOR.md`): `function` for f, g, u, v and their curves; `region` for R and the shaded region; `integral` for A, the rectangles and their sum. x, y, a, b, c, d, Δx, Δy, xᵢ*, n are ink.

Referents (two curves bounding one region, Chapter 1's ruling 4: the curves in referent colours, the letters f, g, u, v in `function`): `curve-f`, `curve-g` (Figures 6.2 + 6.3, the paragraphs before the theorem); `ex1-f`, `ex1-g` (Example 6.1); `ex2-f`, `ex2-g` (Example 6.2); `sine`, `cosine` (Example 6.3); `left-curve` (y = x², x = √y) and `right-curve` (y = 2 − x, x = 2 − y), shared by Figures 6.7 and 6.10 and the text of Examples 6.4 and 6.5 and the paragraph between; `curve-u`, `curve-v` (Figures 6.8 + 6.9). "the left graph, shown in red" stays as printed though the curve wears its referent colour, as 2.3 kept "shown in blue".

Function tokens: every example's and checkpoint's f and g of x.

## Figures

- `sim-area-between` · Figure 6.2 + 6.3 · `area-between-two-curves`, `riemann-sum` · value add: variation: n rectangles between the stand-in curves f(x) = 0.25x² − x + 4 and g(x) = 0.5 + 0.35x on [1, 5] (the book draws no formula; one above the other in the first quadrant), each from g(xᵢ*) to f(xᵢ*) at the left endpoint as the book chooses; the representative rectangle of Figure 6.3(b) is the one under the dragged x*, labelled f(x*), g(x*), Δx; the sum closes on the integral as n grows · arrows: none · still, it answers its controls · slider n (1–50, default 10, the book's), `F.drag` x* along the axis · headline: "10 rectangles: their areas add to 8.75; the area between the curves is 8.80" live · readout A ≈ Σ[f(xᵢ*) − g(xᵢ*)]Δx = … and ∫ = … · graph alone · 2D.
- `fig-example-lines` · Figure 6.4 (Example 6.1) · faithful live copy: f(x) = x + 4 over g(x) = 3 − x/2 on [1, 4], the region shaded · standardisation only · arrows none · still · no controls · graph alone · 2D.
- `fig-example-parabola` · Figure 6.5 (Example 6.2) · faithful live copy: 9 − (x/2)² over 6 − x on [−2, 6] · standardisation · still · 2D.
- `sim-curves-cross` · Figure 6.6 (Example 6.3) · `area-between-curves-that-cross` · value add: variation: the right end b of the interval dragged from 0 to 2π (default π, the book's); the sub-regions R₁, R₂ (and R₃ past 5π/4) shaded, and the readout sets the signed ∫(f − g) beside ∫|f − g|, so the reader sees the signed integral cancel where the curves swap and the area not · arrows none · still · `F.drag` b on the axis, with dashed circles at π/4, π and 5π/4 · headline "On [0, π]: ∫|sin x − cos x| dx = 2√2 ≈ 2.83, but ∫(sin x − cos x) dx = 2.00" live · readout the split of Example 6.3 with the live b · graph alone · 2D. The checkpoint's [π/2, 2π] cannot be read: a stays 0.
- `fig-compound-region` · Figure 6.7 (Example 6.4) · faithful live copy: x² and 2 − x over [0, 2], R labelled · still · 2D. Referents `left-curve`, `right-curve`.
- `sim-area-along-y` · Figure 6.8 + 6.9 · `area-between-curves-along-the-y-axis` · value add: variation, as `sim-area-between` turned on its side: stand-ins u(y) = 4 − 0.15(y − 2)² and v(y) = 0.5 + 0.3 sin(1.4y) + 0.2y on [c, d] = [0.5, 4], horizontal rectangles from v(yᵢ*) to u(yᵢ*) at the lower endpoint (the book's choice), n and y* dragged · still · slider n (default 10), `F.drag` y* on the y-axis · headline live · graph alone · 2D.
- `sim-x-or-y` · Figure 6.10 (Example 6.5; the region of Figure 6.7 again) · `area-between-curves-along-the-y-axis`, `area-of-a-compound-region` · value add: variation and a morph: a choice between vertical and horizontal rectangles over the one region; vertical ones change their top at x = 1 and the readout writes the two integrals 1/3 + 1/2, horizontal ones run from x = √y to x = 2 − y and the readout writes one integral, 5/6 either way · arrows none · still, the choice morphs · choice `vertical` / `horizontal` (default horizontal, the example's), slider n · headline "Horizontal rectangles: one integral, ∫₀¹[(2 − y) − √y]dy = 5/6" · graph alone · 2D. Not folded into Figure 6.7: Example 6.4 reads that figure for its two integrals before the y idea is met.

Unnumbered images: the checkpoint graphs `CNX_Calc_Figure_06_01_007.jpg` and `_011.jpg` stay the book's images in the checkpoint cards (an exercise reads them). Photographs: none.

## Exercises

- Checkpoints 6.1–6.5, kind `checkpoint`, inline after Examples 6.1–6.5, hint in the answer's `hint`.
- Section exercises 1–57, kind `exercise`, each with its group's stem, "[T]" kept: the 29 odd ones keyed and kept; the 28 even ones are all computational (areas, the applications 48–52, the geometry of 56) and left out, named in `exercise_notes`. Graph images in prompts go to `figure`; sketch answers stay in the solution.
- Review exercises: none belong here alone (the areas of 443–447 go to 6.3 with their volumes).

## Extra simulations (rule 15)

Candidates judged: an applet-style "area calculator" (the media note) adds nothing the three sims do not show; a sim of the cell-phone profit (exercise 49) would answer an exercise. None built.

## Wanted at chapter level

- variables `6.1/f`, `6.1/g`, `6.1/A`, `6.1/R` → `6.1-area-between-two-curves`; `6.1/u_fn`, `6.1/v` → `6.1-regions-along-y`.
- forms `eq-area-between-curves`, `eq-area-between-curves-sum` → `6.1-area-between-curves-theorem`; `eq-area-between-crossing-curves` → `6.1-curves-that-cross-theorem`; `eq-area-between-curves-y` → `6.1-area-along-y-theorem`.

Applied in the chapter pass (2026-10-13): every anchor above set with `ost set` (tmp/ch06/anchors6.py; a few spans moved to the nearest id the text has, such as the section header where the plan named a note); review exercises held here landed with `source_section` 6.9.

## Derivations

- Area of a Region between Two Curves (6.1) · score 1 · built as drv-area-between-two-curves, ending on (6.1) (the printed sum and its limit replaced; the theorem stays)
- Regions Defined with Respect to y (6.2) · score 1 · built as drv-area-between-two-curves-along-y, ending on (6.2)
