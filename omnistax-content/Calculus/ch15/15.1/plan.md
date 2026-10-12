# Plan: 15.1 Double Integrals over Rectangular Regions (m53949)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-13. Template: `ch01/1.1`.

Four objectives, an opening paragraph, four definition notes (double integral, iterated integral, area, average value), two theorem notes (Properties of Double Integrals, Fubini's Theorem), Examples 15.1–15.10, six checkpoints (15.1–15.6), ten figures (15.2–15.11), four Key Concepts, three Key Equations, 59 section exercises (23 keyed), four glossary terms. Numbered equations 15.1–15.4.

## Sub-concepts (page headers)

0. `double-intro`: the opening paragraph.
1. `volumes` **Volumes and Double Integrals** (the book's): the rectangle R, the solid S, subrectangles and the thin boxes (Figures 15.2–15.4), the double Riemann sum, the definition (Equation 15.1), signed volume, Example 15.1 (Figures 15.5, 15.6) and Checkpoint 15.1, integrability, dA as dx dy or dy dx.
2. `properties` **Properties of Double Integrals** (the book's): the theorem note with its six properties.
3. `iterated` **Iterated Integrals** (the book's): the definition (Equations 15.2, 15.3), Fubini's theorem and Figure 15.7, Examples 15.2–15.7 (Figure 15.8), Checkpoints 15.2–15.4.
4. `applications` **Applications of Double Integrals** (the book's): area, Example 15.8, volume, Example 15.9 (Figure 15.9), Checkpoint 15.5, average value (Equation 15.4), Example 15.10 (Figures 15.10, 15.11), Checkpoint 15.6.

## Concept nodes

Introduced: `double-riemann-sum` (`eq-double-riemann-sum`), `double-integral` (`eq-double-integral`, Equation 15.1), `integrable-function-of-two-variables`, `properties-of-double-integrals` (six forms), `iterated-integral` (two forms, Equations 15.2, 15.3), `fubinis-theorem` (`eq-fubini-rectangle`), `area-of-a-region-by-double-integral` (`eq-area-double-integral`), `average-value-of-a-function-of-two-variables` (`eq-average-value-two-variables`, Equation 15.4). Uses: `function-of-two-variables`, `graph-of-a-function-of-two-variables`, `riemann-sum`, `net-signed-area`, `definite-integral`, `average-value-of-a-function`, `integration-by-substitution`, `integration-by-parts`, `contour-map`, `region`.

## Colour

`integral` for ∬, the Riemann sums and their boxes, V, A(R), A(x), A(y) and every integral's value in a readout; `region` for R, R₁, R₂, R_ij and S (`\kR`, `\kS`); `surface` for the graph z = f(x, y) in every figure; `function` for f (`\kf`), g, h and f_ave (`\kfave`); `point` for the sample points. Coordinates, m, n, Δx, Δy, ΔA ink. No referents.

## Figures

- `sim-double-riemann` · Figure 15.2 + 15.3 + 15.4 · `double-riemann-sum`, `double-integral` · variation: m and n cut R into subrectangles, the boxes rise from each to the surface at its sample point, and their total closes on the volume as m and n grow; the book's three drawings (the surface over R, the grid of R_ij, one thin box) are three stages of one scene · arrows none · still: no time in the idea · sliders m (1 to 12, default 4), n (1 to 12, default 3), choice sample point (lower left, upper right, midpoint) · no headline (the readout carries the sum) · graph none · 3D, free orbit (pitch 0.1 to 1.4, never from beneath the base plane): the boxes stand under a curved surface and only turning shows which corners of a box poke through it; no buttons. Stand-in surface f(x, y) = 2 + 0.5 sin(1.2x) + 0.35y cos(0.9x) over R = [0, 4] × [0, 3] (the book's figure prints no function). The box R₂₂ is drawn opaque with its height labelled f(x*₂₂, y*₂₂); the rest translucent; sample points dotted while m n ≤ 36. Readout: V ≈ ΣΣ f(x*ᵢⱼ, y*ᵢⱼ) ΔA = (sum) beside ∬_R f dA = (exact, a 300 × 300 midpoint sum).
- `sim-example-riemann` · Figure 15.5 + 15.6 · `double-riemann-sum`, `net-signed-area` · variation: Example 15.1's z = 3x² − y over [0, 2]², boxes above and below the plane for a signed volume, the example's two sample choices and finer grids · still · slider m = n (1 to 12, default 2, detent 2), choice sample point (upper right, midpoint) · no headline · 3D free orbit, pitch −0.3 to 1.4 (the negative boxes hang below the plane, so the view may dip a little under it); no buttons. Readout the example's sum: upper right 2 + 11 + 1 + 10 = 24, midpoint 11 at m = n = 2; ∬_R (3x² − y) dA = 12 as the limit. Checkpoint 15.1's upper-left choice is not offered, so the figure does not answer it.
- `sim-fubini-slices` · Figure 15.7 · `iterated-integral`, `fubinis-theorem` · variation: a slice at x of area A(x) = ∫₀³ f(x, y) dy and a slice at y of area A(y) = ∫₀² f(x, y) dx, both under Example 15.6's z = 3x² − y over [0, 2] × [0, 3]; each slider sweeps its slice across the base, and the readout shows both orders reaching 15 · still · sliders x (0 to 2, default 1.2), y (0 to 3, default 1.5) · no headline · 3D free orbit, pitch −0.3 to 1.4; no buttons. Readout A(x) = 9x² − 9/2 = (value), A(y) = 8 − 2y = (value), ∫₀² A(x) dx = ∫₀³ A(y) dy = 15.
- `fig-x-sin-xy` · Figure 15.8 · `fubinis-theorem` · standardisation: Example 15.7's z = x sin(xy) over [0, π] × [1, 2], a still copy (kind `figure`), locked view from the book's angle · still · no controls · 3D locked.
- `fig-paraboloid` · Figure 15.9 · `double-integral` · standardisation: Example 15.9's surface z = 27 − 2x² − y² over R₁ = [−3, 3]² (a) and the solid S over R₂ = [0, 3]² (b), a choice for the two panels · still · choice part (a), (b) · 3D locked from the book's view; readout V = 162 on (b).
- `fig-storm` · Figure 15.10 · photo (the weather map Example 15.10 reads), caption kept.
- `fig-storm-grid` · Figure 15.11 · photo (the map with its grid and midpoints), caption kept.

Images: Checkpoint 15.6's contour map stays in its prompt; exercise images (tables, level curves, solids, the isotherm map) in their cards.

## Exercises

- Checkpoints 15.1–15.6 inline after their examples; the book's hints as `hint`; Checkpoint 15.3(b) (show a bound, "Answers may vary") and 15.6 ("Answers … may vary") with AI-marked approaches.
- Section exercises 1–59: the 23 keyed odd ones kept. Unkeyed proofs and "show" exercises kept with AI approaches: 39–48 (bounds by property v), 51, 52, 57, 58. The other unkeyed even ones (computational, CAS) left out and named.
- Review exercise 416 (true or false, the order of integration) held here, `source_section` 15.7, with an AI approach.

## Extra simulations (rule 15)

- `sim-average-height` · Sim · `average-value-of-a-function-of-two-variables` · intuition: Example 15.9's solid under z = 27 − 2x² − y² over R₂ = [0, 3]² beside a box of height h over the same base; the box holds the solid's volume exactly when h = f_ave = 162/9 = 18 · still · slider h (0 to 27, default 10, special at 18) · no headline · 3D free orbit, pitch 0.1 to 1.4; no buttons. Readout h · A(R) = (value) against V = 162, and at h = 18: f_ave = V/A(R) = 18.

Judged out: a Sim of property v (the bounds m A(R) ≤ ∬ ≤ M A(R)) repeats `sim-average-height`'s boxes; a midpoint-rule Sim of the rainfall map would invent data the map does not give.

## Wanted at chapter level

- forms: `eq-double-riemann-sum` → `15.1-riemann-sum-term`; `eq-double-integral` → `15.1-fs-id1167793950178`; the six property forms → `15.1-fs-id1167794188051`; `eq-iterated-integral-dy-dx` → `15.1-fs-id1167793432466`; `eq-iterated-integral-dx-dy` → `15.1-fs-id1167793424345`; `eq-fubini-rectangle` → `15.1-fs-id1167793423558`; `eq-area-double-integral` → `15.1-fs-id1167793508032`; `eq-average-value-two-variables` → `15.1-fs-id1167794076409`.
- variables of 15.1 anchored at build.
- Review 416 placed here.
