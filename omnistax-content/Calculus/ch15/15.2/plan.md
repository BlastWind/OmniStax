# Plan: 15.2 Double Integrals over General Regions (m53963)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-13. Template: `ch01/1.1`.

Five objectives, an opening of two paragraphs, five definition notes (Type I and II, area, average value, joint density, independence, expected values), five theorem notes (Double Integrals over Nonrectangular Regions, Fubini's Theorem (Strong Form), Decomposing Regions into Smaller Regions, Fubini's Theorem for Improper Integrals, Improper Integrals on an Unbounded Region), Examples 15.11–15.23, ten checkpoints (15.7–15.16), sixteen figures (15.12–15.27), four Key Concepts, two Key Equations, 62 section exercises (60–121, 29 keyed), three glossary terms. Numbered equations 15.5–15.7.

## Sub-concepts (page headers)

0. `general-intro`: the two opening paragraphs.
1. `general-regions` **General Regions of Integration** (the book's): D inside R and the extension g (Figure 15.12), Type I and Type II (Figures 15.13, 15.14), Example 15.11 (Figure 15.15), Checkpoint 15.7.
2. `nonrectangular` **Double Integrals over Nonrectangular Regions** (the book's): the two theorems (Equations 15.5, 15.6), Examples 15.12 (Figures 15.16, 15.17) and 15.13 (Figure 15.18), Checkpoint 15.8, property 3 and the decomposition theorem (Equation 15.7), Example 15.14 (Figures 15.19, 15.20), Checkpoints 15.9, 15.10.
3. `order` **Changing the Order of Integration** (the book's): Examples 15.15 (Figure 15.21) and 15.16 (Figure 15.22), Checkpoint 15.11.
4. `volumes-areas` **Calculating Volumes, Areas, and Average Values** (the book's): Example 15.17 (Figure 15.23), Checkpoint 15.12, the area and average-value definitions, Examples 15.18 (Figure 15.24) and 15.19 (Figure 15.25), Checkpoints 15.13, 15.14.
5. `improper` **Improper Double Integrals** (the book's): the definition, the two theorems, Examples 15.20 (Figure 15.26) and 15.21, Checkpoint 15.15, joint density, independence, Example 15.22 (Figure 15.27), expected values, Example 15.23, Checkpoint 15.16.

## Concept nodes

Introduced: `type-i-region` (`eq-type-i-region`), `type-ii-region` (`eq-type-ii-region`), `double-integral-over-a-nonrectangular-region` (`eq-double-integral-over-d`), `fubinis-theorem-strong-form` (`eq-fubini-type-i` Equation 15.5, `eq-fubini-type-ii` Equation 15.6), `decomposing-regions` (`eq-decomposing-regions`, Equation 15.7), `changing-the-order-of-integration`, `improper-double-integral`, `fubinis-theorem-for-improper-integrals` (`eq-fubini-improper`), `improper-integral-on-an-unbounded-region` (`eq-improper-unbounded-region`), `joint-density-function` (two forms), `independent-random-variables` (`eq-independent-random-variables`), `expected-value` (`eq-expected-values`). Reinforced: `area-of-a-region-by-double-integral` (its form `eq-area-double-integral-general`), `average-value-of-a-function-of-two-variables` (`eq-average-value-general-region`), `fubinis-theorem`, `properties-of-double-integrals`. Uses: `double-integral`, `region`, `improper-integral`, `integration-by-substitution`, `integration-by-parts`.

## Colour

`region` for D, D₁, D₂, D₃, R and every shaded region; `function` for f, g, g₁, g₂, h₁, h₂ and the joint density; `integral` for ∬, V, A(D), the probability's integral and every integral value; `surface` for z = f(x, y) in 3D. Referents (book `COLOR.md`): Example 15.11's two curves `curve-root` (y = √x, x = y²) and `curve-cube` (y = x³, x = ∛y), drawn in `sim-region-types` and marked in the example's text; the pieces `piece-d1`, `piece-d2`, `piece-d3` of Example 15.14 in `fig-decomposition` and the example's text. Other figures' bounding curves are told apart by their equations as labels (config 22).

## Figures

All flat region figures share one drawing: the region filled in `region`, its bounding curves with their equations, a vertical strip at x running from the lower to the upper curve (the inner integral of a Type I description) and a horizontal strip at y from the left to the right curve (Type II), each strip's ends dotted on the curves; the readout writes both descriptions at the live x and y and the integral's value.

- `sim-extension` · Figure 15.12 · `double-integral-over-a-nonrectangular-region` · variation and depth: the extension g of f to a rectangle R containing D, its graph f over D and 0 over the rest of R, and the Riemann boxes of g over R, which vanish outside D, so the sum over R is the sum over D · still · slider n (2 to 24, default 10) · no headline · 3D free orbit, pitch 0.1 to 1.4; no buttons. Stand-in D (an oval between two half-ellipses) and f(x, y) = 1.6 + 0.3x − 0.2(y − 1.5)² (the book's figure prints none). Readout ΣΣ g(x*ᵢⱼ, y*ᵢⱼ) ΔA over R = (sum), ∬_D f dA = (exact).
- `sim-region-types` · Figure 15.13 + 15.14 + 15.15 · `type-i-region`, `type-ii-region` · variation: Example 15.11's region between y = √x and y = x³ read both ways at once; the vertical strip at x runs from g₁(x) = x³ to g₂(x) = √x between the lines x = 0 and x = 1, the horizontal strip at y from h₁(y) = y² to h₂(y) = ∛y between y = 0 and y = 1 · still · sliders x (0 to 1, default 0.5), y (0 to 1, default 0.5) · no headline · graph alone on [−0.1, 1.2] × [−0.1, 1.2], equal scale · 2D. The two curves are the referents.
- `sim-example-type-i` · Figure 15.16 + 15.17 · `fubinis-theorem-strong-form` · variation: Example 15.12's triangle D, as Type I (½x ≤ y ≤ 1, 0 ≤ x ≤ 2) and Type II (0 ≤ x ≤ 2y, 0 ≤ y ≤ 1) · still · sliders x (0 to 2), y (0 to 1) · readout both descriptions and ∬_D x²e^{xy} dA = 2 · 2D.
- `fig-example-type-ii` · Figure 15.18 · `fubinis-theorem-strong-form` · variation: Example 15.13's region between x = y² − 3 and x = y + 3; a vertical strip needs two descriptions (−3 ≤ x ≤ −2 under the parabola, −2 ≤ x ≤ 6 between the line and the parabola), a horizontal strip one · still · sliders x (−3 to 6), y (−2 to 3) · readout both and 2375/7 · 2D.
- `fig-decomposition` · Figure 15.19 + 15.20 · `decomposing-regions` · intuition: Example 15.14's region D and its pieces D₁ (Type I), D₂ and D₃ (Type II), a choice · still · choice view (D, pieces) · readout 40/3 + 1664/35 − 1696/35 = 1304/105 on the pieces · 2D. The pieces are the referents.
- `fig-reverse-order` · Figure 15.21 · `changing-the-order-of-integration` · variation: Example 15.15's region under y = 2 − x² from x = 0 to √2, its vertical strip 0 ≤ y ≤ 2 − x² and its horizontal strip 0 ≤ x ≤ √(2 − y) · still · sliders x, y · readout and ½(e² − 3) · 2D.
- `fig-triangle` · Figure 15.22 · `changing-the-order-of-integration` · variation: Example 15.16's triangle under x + y = 1, strips 0 ≤ y ≤ 1 − x and 0 ≤ x ≤ 1 − y · still · sliders x, y · readout −1/6 · 2D.
- `fig-tetrahedron` · Figure 15.23 · `double-integral-over-a-nonrectangular-region` · standardisation: Example 15.17's tetrahedron under z = 6 − 2x − 3y over its triangular base D, a still copy (kind `figure`) · still · no controls · 3D locked from the book's view; readout V = 6.
- `fig-parabola-line` · Figure 15.24 · `area-of-a-region-by-double-integral` · variation: Example 15.18's region between y = x² and y = 2x with both strips · still · sliders x, y · readout A = 4/3 · 2D.
- `fig-average-region` · Figure 15.25 · `average-value-of-a-function-of-two-variables` · variation: Example 15.19's region between x = y and x = √y with both strips · still · sliders x, y · readout A(D) = 1/6 and f_ave = 21/20 · 2D.
- `fig-improper-region` · Figure 15.26 · `fubinis-theorem-for-improper-integrals` · variation: Example 15.20's region x ≤ y ≤ √x, also y² ≤ x ≤ y, the origin where f = e^y/y is not continuous drawn hollow · still · sliders x, y · readout e − 2 · 2D.
- `sim-waiting-time` · Figure 15.27 · `joint-density-function`, `independent-random-variables` · variation: the restaurant's region x + y ≤ t in the first quadrant over the joint density shaded on one scale; drag the time budget t and watch the probability · still · slider t (10 to 240 minutes, default 90) · readout P(X + Y ≤ t) = ∬_D f dA = (value, 0.8328 at 90) · graph alone on [0, 240]² · 2D. The density's shading is one scalar on one scale in `function`, with its legend.

Images: exercise images (regions, the Reuleaux triangle, the lunes) stay in their cards.

## Exercises

- Checkpoints 15.7–15.16 inline after their examples; the book's hints as `hint`; Checkpoint 15.10's hint corrected under its card.
- Section exercises 60–121: the 29 keyed odd ones kept. Unkeyed explain and show exercises kept with AI approaches: 72 (neither Type I nor II), 86 and 88 (decompositions, part a), 106, 107, 120, 121. The other unkeyed even ones left out and named.
- Review exercises 421 and 423 held here, `source_section` 15.7.

## Extra simulations (rule 15)

None beyond the figures: every region the text draws is already a live figure with both orders of integration; a Sim of the joint density over a rectangle would repeat `sim-waiting-time`.

## Wanted at chapter level

- forms: `eq-type-i-region`, `eq-type-ii-region` → `15.2-fs-id1167793857192`; `eq-double-integral-over-d` → `15.2-fs-id1167793952017`; `eq-fubini-type-i`, `eq-fubini-type-ii` → `15.2-fs-id1167793292250`; `eq-decomposing-regions` → `15.2-fs-id1167793965311`; `eq-area-double-integral-general` → `15.2-fs-id1167793287011`; `eq-average-value-general-region` → `15.2-fs-id1167793540298`; `eq-fubini-improper` → `15.2-fs-id1167793450004`; `eq-improper-unbounded-region` → `15.2-fs-id1167793473260`; joint density forms → `15.2-fs-id1167793246020`; `eq-independent-random-variables` → `15.2-fs-id1167793618923`; `eq-expected-values` → `15.2-fs-id1167793377822`.
- variables of 15.2 anchored at build.
- Review 421, 423 placed here.
