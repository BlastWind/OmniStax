# Plan: 6.5 Solving PDEs with the Laplace transform (laplacepde:section)

Source: `source.md` from `tools/convert.py 6`. Status: plan (prep stage one, 2026-10-19); built straight through later (config 2). Template: `ch00/0.2`.

No book subsection before Exercises; Examples 6.5.1–6.5.3; Figures 6.5, 6.6, 6.7; two footnotes (the Fourier transform, the river of goo); no theorem, no inline exercise; end Exercises 6.5.1–6.5.7 and 6.5.101–6.5.105 (12, five keyed). The section note ("can be skipped") is dropped.

## Sub-concepts (page headers)

OmniStax's, at the places the argument turns:
1. `the-method` **Transforming the time variable**: the two opening paragraphs (`p#family` with the Fourier footnote and the Chapter 4 link, `p#method`).
2. `transport` **The transport equation on a half line**: Example 6.5.1 whole, with `sim-goo-river` (Figures 6.5 + 6.6) after the river paragraph; inside it `p#transform-in-t` (Y(x) defined, `eq-lpde-transform-in-t`), `p#partial-transforms` (the two derivative rules), the solution and `p#wavefront`, the "Shhh" paragraph (`p#shhh`).
3. `nonhomogeneous` **Nonhomogeneous side conditions**: the bridge sentence and Example 6.5.2.
4. `ill-posed` **Detecting an ill-posed problem**: the changed equation, the characteristics argument (`p#characteristics`), `sim-ill-posed` (Figure 6.7), the transform argument (`p#no-decay`).
5. `heat` **A half-infinite rod**: the bridge sentence and Example 6.5.3 (`p#bounded` for the boundedness condition, the Appendix B link), the closing paragraph (`p#closing`).

## Concepts (staged)

Introduced: `solving-pdes-with-the-laplace-transform` (skill, `p#method`; form `eq-lpde-transform-in-t`), `transform-of-a-partial-derivative` (result; forms `eq-lt-partial-x`, `eq-lt-partial-t`), `transport-on-a-half-line` (result, Example 6.5.1; forms `eq-half-line-transport`, `eq-half-line-transport-cases`), `wavefront` (definition, type curve; form `eq-wavefront`), `ill-posed-problem` (definition, `p#characteristics`), `boundedness-condition` (idea, `p#bounded`).
Reinforced: `transport-equation` and `convection` (Chapter 1's; the italic "convection equation" and "transport equation" mark `transport-equation`), `method-of-characteristics`, `characteristic-curve` (1.9), `unit-step-function`, `second-shifting-property`, `transform-of-a-derivative`, `laplace-transform-decay`, `dirac-delta-function`, `derivative-of-the-heaviside-function` (the "Shhh" paragraph), `partial-differential-equation`. Uses: `heat-equation` and `fourier-series` (Chapter 4; ids re-checked at stage two), `wave-equation` (exercises 6.5.7, 6.5.104), `separation-of-variables` for PDEs (Chapter 4's id, the closing paragraph), `convolution-solution`, `linear-differential-equation`.

## Colour, referents and symbols

y (the concentration or temperature), f (the flux) in `function`; y_t, y_x, y_xx, y_tt, y_xt (`\kyt`, `\kyx`, …) and Y′, Y″ in `derivative`; Y(x), F(s) in `transform`; u, δ in `function`; the wavefront and the characteristics in `curve`; the quadrant and its two parts in `region` (`data-type="region"` on "the first quadrant", "the region of interest"); x, t, s, α, C, τ, A, B in ink. No referents.

## Figures

- `sim-goo-river` · Figures 6.5 + 6.6 (folded: the same (x, t) quadrant drawn before and after the solution) · `transport-on-a-half-line`, `wavefront`, `solving-pdes-with-the-laplace-transform`, `transport-equation` · value add: flow by animation and variation: above, the river as a strip along x with the concentration y(x, t) at the present t drawn as a graph over x in `function` (a step of height C whose front stands at x = αt, the factory at x = 0 marked), the goo behind the front shaded in `region`; below, the (x, t) quadrant with y = 0 written on the x axis and y = C on the t axis as the book's Figure 6.5 has them, the wavefront line t = x/α in `curve` with its slope labelled, the region above it shaded y = C and below y = 0 as Figure 6.6, and the present time as a dashed horizontal level rising through the plane, its crossing of the wavefront dropped to the front in the strip above; a choice of the boundary data: the constant C (Example 6.5.1, the default) and sin t with the decay e^(−x) (Example 6.5.2's y = e^(−x) sin(t − x)u(t − x), α = 1 there), which shows the delayed, damped signal travelling behind the same front; sliders α (0.5 to 3, default 1) and C (0.5 to 2, default 1; fades out for the sine choice) · arrows: kinematic (the front advances) · moving: t runs 0 to 6 over 6 s then holds; the advance of the front is the idea (`RULES.md`: the surface u(x, t) is built flat as the moving profile, and the (x, t) plane is kept because the book's figures are that plane) · sliders α, C (untyped), choice (two data) · headline "t = 2.00: the goo has reached x = αt = 2.00; behind the front y = C = 1, ahead y = 0." · strip with the graph above, the (x, t) plane below (x 0 to 6, t 0 to 6) · 2D. Readout: y(x, t) = C u(t − x/α) with the live numbers, the front at x = αt.
- `sim-ill-posed` · Figure 6.7 · `ill-posed-problem`, `characteristic-curve`, `laplace-transform-decay` · value add: variation: the quadrant with y = 0 on the x axis and y = sin t on the t axis, the family of characteristics t = −x + C drawn faint in `curve` and the one with the slider's C solid, its two ends marked with the data they carry, y(C, 0) = 0 and y(0, C) = sin C, in `function`; the reader slides C (0.2 to 4, default 1, the book's) and sees every characteristic join two points whose data disagree (except where sin C = 0, a dashed special at C = π where the two agree and the contradiction vanishes for that one curve) · arrows: none · still · slider C (untyped) · headline "Along t = −x + 1 the solution is constant, but y(1, 0) = 0 and y(0, 1) = sin 1 = 0.84." · the plane alone (x 0 to 4, t 0 to 4) · 2D. Readout: y(C, 0) = 0, y(0, C) = sin C = value, and the second line Y(x) = e^(sx)/(s² + 1) does not decay as s → ∞.

Example 6.5.3 (the heat flux on a half-infinite rod) gets no figure: the convolution solution needs a chosen flux and a quadrature, the (x, t) frame of the river figure would not carry it, and the lesson (a bounded solution picks B over A) is one sentence. Listed, weighed, left out.

## Derivations (rule 29)

- Example 6.5.1 (the transforms of y_x and y_t, the transformed equation, its solution, the inversion by the Heaviside entry) · the section's method shown on its first instance, prose with equations · score 3 (facts: Leibniz's rule for d/dx under the integral, 6.2's derivative rule, the table's Heaviside entry; skipped: solving sY = −αY′, one move) · not built; it stays as the book prints it, the method being the example.
- Example 6.5.2 · 3 moves · not built. The ill-posed transform argument · 2 moves · not built.
- Example 6.5.3 · the method with a boundedness choice and a table inversion · score 3 · not built.

## Exercises

- No Try It.
- End exercises 6.5.1–6.5.7 (unkeyed), AI-marked solutions, answers verified at prep (SymPy, each checked against the PDE and its side conditions) and re-verified at build: 6.5.1 y = t + (1 − t + x)u(t − x) (Y = 1/s² + (1/s − 1/s²)e^(−sx)); 6.5.2 y = (t − x/α)u(t − x/α); 6.5.3 y = tx − t²/2 + ((2t − x)²/8)u(t − x/2) (Y = x/s² − 1/s³ + e^(−sx/2)/s³); 6.5.4 y = e^(−x/α) sin(t − x/α)u(t − x/α); 6.5.5 3Y″ + (s + 3)Y′ + (s² + 1)Y = sin(x)/s + 1/s² + s(1 − x), Y(0) = 1/s, Y(1) = 1/s² (ℒ{y_tt} = s²Y − s(1 − x) − 1, ℒ{y_xt} = sY′ − y_x(x, 0) = sY′ + 1; the two 1's cancel); 6.5.6 y = −∫₀ᵗ e^(−τ) e^(−x²/(4(t−τ)))/√(π(t − τ)) dτ; 6.5.7 y = sin x sin t (Y = sin(x)/(s² + 1) once the growing exponentials are excluded). Shapes `open`.
- 6.5.101–6.5.105: the book's answers, verified at prep ((x − t)u(t − x) + t; e^(−cx) sin(t − x)u(t − x); the transformed ODE problem; sin x cos t; the convolution with x e^(−x²/(4(t−τ)))/(2√(π(t − τ)³)), the Appendix B entry ℒ⁻¹{e^(−x√s)}).

## Wanted at chapter level

- Anchors: variables y, y_t, y_x, Y, Y′ → `6.5-transform-in-t` (y_t, y_x → `6.5-partial-transforms`); u → `6.5-ex-6-5-1`; δ → `6.5-shhh`; y_xx, Y″, f, F → `6.5-ex-6-5-3`; y_tt, y_xt → `6.5-e5`. Forms: `eq-lpde-transform-in-t` → `6.5-transform-in-t`; `eq-lt-partial-x`, `eq-lt-partial-t` → `6.5-partial-transforms`; `eq-half-line-transport`, `eq-half-line-transport-cases` → `6.5-ex-6-5-1`; `eq-wavefront` → `6.5-wavefront`.
- Links: `/diffyqs/ch04/` (Chapter 4), `/diffyqs/ch01/1.9/`, `/diffyqs/ch06/6.2/`, `/diffyqs/sheets/laplace-table/` (Appendix B).
- Stage two: the edge `boundedness-condition → heat-equation` is staged on Chapter 4's expected id; re-check it against `ch04/book-rows.json`, and add `transport-on-a-half-line → characteristic-curve` only if Chen wants the wavefront tied to 1.9's characteristics (the book does not say so).
