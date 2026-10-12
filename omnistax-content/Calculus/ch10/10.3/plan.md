# Plan: 10.3 Taylor and Maclaurin Series (m53817)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-12. Template: `ch01/1.1`.

Three objectives, an opening paragraph, two definition notes, three theorem notes (Taylor's theorem with its proof), a Student Project, one media note (dropped), Equations 10.4 and 10.5, Figures 10.5–10.9, Examples 10.11–10.16, six checkpoints (10.10–10.15), one Key Equation, five Key Concepts, 58 section exercises (29 keyed), five glossary terms.

## Sub-concepts (page headers)

0. `taylor-intro`: the opening paragraph.
1. `overview` **Overview of Taylor/Maclaurin Series**: the coefficients cₙ = f⁽ⁿ⁾(a)/n! found by differentiating Equation 10.4, the definition note `fs-id1167024973208` (Equation 10.5), the theorem `fs-id1167025088556` (uniqueness), the paragraph `taylor-polynomials-term`.
2. `polynomials` **Taylor Polynomials**: p₀–p₃, `maclaurin-polynomials-term`, the definition note `fs-id1167025242377`, Example 10.11 with Figure 10.5, Checkpoint 10.10, Example 10.12 with Figures 10.6, 10.7, 10.8 in its parts a, b, c, Checkpoint 10.11.
3. `remainder` **Taylor’s Theorem with Remainder**: `remainder-term` (Rₙ = f − pₙ), the bound from the Mean Value Theorem, the theorem `fs-id1167025239317` and its proof, Example 10.13 with Figure 10.9, Checkpoint 10.12, Example 10.14, Checkpoint 10.13.
4. `representing` **Representing Functions with Taylor and Maclaurin Series**: Example 10.15, Checkpoint 10.14, the theorem `fs-id1167025166976` (convergence), Example 10.16, Checkpoint 10.15, the Student Project `fs-id1167025241347` (Proving that e is Irrational, six steps).

Dropped and named in `notes`: the MacTutor biographies of Brook Taylor and Colin Maclaurin (media note).

## Concept nodes

Introduced: `taylor-series` (form `eq-taylor-series`, Equation 10.5), `maclaurin-series`, `uniqueness-of-taylor-series`, `taylor-polynomial` (symbol p; `eq-taylor-polynomial`), `maclaurin-polynomial`, `taylor-remainder` (symbol R; `eq-taylor-remainder`), `taylors-theorem-with-remainder` (`eq-lagrange-remainder`, `eq-remainder-bound`), `convergence-of-taylor-series` (`eq-taylor-series-converges`), `e-is-irrational` (idea, the project). Uses: `power-series`, `uniqueness-of-power-series`, `term-by-term-differentiation-and-integration`, `higher-order-derivative`, `partial-sum`, `mean-value-theorem`, `rolles-theorem`, `ratio-test`, `divergence-test`, `geometric-series`, `squeeze-theorem`, `interval-of-convergence`, `convergence-of-a-series`.

## Colour

`series` for a Taylor or Maclaurin series named as such and pₙ (`\kp_{n}`); `function` for f (`\kf`); `derivative` for f′, f″, f‴, f⁽ⁿ⁾, f⁽ⁿ⁺¹⁾ (`\kfprime`, `\kfdprime`, `\kftprime`, `\kfn`, `\kfnplusone`; other orders such as f⁽⁴⁾(0) and f⁽⁷⁾(c) stay as the book prints them, untyped); `error` for Rₙ (`\kR_{n}`); `set` for intervals of convergence the text states; g of the proof wears `function` (`\kg`, `\kgprime`); I wears `set`. a, c, M, x, n stay ink.

## Figures

One helper draws Figures 10.5–10.8: f in `function`, pₙ in `series`, the book's lower-degree polynomials faded, the point (a, f(a)) in `point`. Each stays with its example (folding 10.6–10.8, the three parts of Example 10.12, was weighed and rejected: the text reads each figure beside its part).

- `sim-taylor-ln` · Figure 10.5 · `taylor-polynomial` · variation: the degree n; the default n = 3 with p₀, p₁, p₂ faded is the book's picture · arrows none · still · slider n (0 to 12, detents 3) · headline pₙ's agreement with ln x at 1 and its value at x = 2 · graph alone · 2D. Readout pₙ(x) written out with the live coefficients. Raising n shows the polynomials holding on (0, 2] and peeling away past 2.
- `sim-maclaurin-exp` · Figure 10.6 · `maclaurin-polynomial` · variation: n (0 to 10, default 3, p₀–p₂ faded) · still · otherwise as above, eˣ on [−3, 3].
- `sim-maclaurin-sin` · Figure 10.7 · `maclaurin-polynomial` · variation: n (1 to 15, default 5, p₁, p₃ faded; even n repeat the odd one below, as the text says p₂ₘ₊₁ = p₂ₘ₊₂) · still · sin x on [−2π, 2π].
- `sim-maclaurin-cos` · Figure 10.8 · `maclaurin-polynomial` · variation: n (0 to 14, default 4, p₀, p₂ faded) · still · cos x on [−2π, 2π].
- `sim-taylor-remainder` · Figure 10.9 · `taylor-remainder`, `taylors-theorem-with-remainder` · variation: the degree n (1 to 4; the book's p₁ and p₂ at n = 2 with p₁ faded) and the point x, whose gap Rₙ(x) is drawn as a segment in `error` between f and pₙ, with Taylor's bound M|x − 8|ⁿ⁺¹/(n + 1)! beside it; the book's x = 11 the default · arrows none · still · sliders n (1 to 4, detents 1, 2), x (1 to 16, default 11, dashed circle at the center 8) · headline pₙ(11) beside ∛11 · graph alone · 2D. Readout Rₙ(x) = f(x) − pₙ(x) with live numbers; note the bound and that it holds.
- Exercise answer images (`CNX_Calc_Figure_10_03_202/204/206/208.jpg`) stay in their solutions.

## Exercises

- Checkpoints 10.10–10.15 inline after Examples 10.11–10.16; 10.13 a number (0.96593), the rest open; hints as `hint`.
- Section exercises 116–173: the 29 odd keyed ones kept; 125 (3.037), 127 (7.3887), 133 (n = 7), 135 (n = 14), 137 (0.596), 139 (0.447), 161 (7.3889947), 171 (−1), 173 (−1/4) are numbers, the rest open. Left out, unkeyed and computational: 116–172 even.
- Review exercises 255 (sin x ≈ x, keyed True), 265 (a degree-four Taylor polynomial of a cubic), 269 (sin x at π/2) held here, `source_section` 10.4.
- Corrections under their cards: 129 (the partial sum is p₁₀₀₀(2), printed p₁₀₀₀(1), and it is 0.6926, printed 0.6936), 139 (the largest |cos z| on [−R, R] is 1, at z = 0, so the condition is R² ≤ 0.2; the key's R² cos R ≤ 0.2 would give a larger R), 145 (−cos(x − π/2) printed for −sin(x − π/2)).
- Corrections in the text: Example 10.12 c ("for n ≥ 0" for m ≥ 0), Example 10.13 c (0.0011468 for f‴(8) ≈ 0.0014468), Example 10.14 a ("By Uniqueness of Taylor Series" for Taylor's Theorem with Remainder), Checkpoint 10.14 (hint f⁽ⁿ⁾(2) = (−1)ⁿn!/2ⁿ⁺², series Σ(2 − x)ⁿ/2ⁿ⁺², the key printing 2ⁿ⁺¹ in both).

## Extra simulations (rule 15)

None: a Sim of Example 10.14's tolerance window (where p₅ approximates sin x to within 0.0001) was weighed and left out, since Figure 10.7's Sim already shows p₅ holding near 0 and the window is one inequality.

## Wanted at chapter level

- forms `eq-taylor-series` → `10.3-fs-id1167025228678`; `eq-taylor-polynomial` → `10.3-fs-id1167025242377`; `eq-taylor-remainder` → `10.3-remainder-term`; `eq-lagrange-remainder`, `eq-remainder-bound` → `10.3-fs-id1167025239317`; `eq-taylor-series-converges` → `10.3-fs-id1167025166976`.
- variables of 10.3: f, f′, f″, f‴, f⁽ⁿ⁾ → `10.3-overview`; p → `10.3-fs-id1167025242377`; R → `10.3-remainder-term`; f⁽ⁿ⁺¹⁾, I, g, g′ → `10.3-fs-id1167025239317`.
- Applied in the chapter pass (2026-10-13): every anchor above set with `ost set`; review rows landed with `mksection.py --with-review`.
