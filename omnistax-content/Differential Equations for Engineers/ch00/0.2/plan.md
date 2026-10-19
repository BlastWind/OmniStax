# Plan: 0.2 Introduction to differential equations (introde:section)

Source: `source.md` from `tools/convert.py 0`. Status: built 2026-10-19 straight through (config 2). This section is the book's template (`RULES.md`, Template sections): later sections copy its conventions, listed at the end.

Four subsections, Examples 0.2.1 and 0.2.2, equation (1), Figures 1 and 2, the modelling-cycle image, inline Exercises 0.2.1–0.2.3, end Exercises 0.2.4–0.2.14 and 0.2.101–0.2.106, the section notes (dropped, named in `notes`).

## Sub-concepts (page headers)

The book's own subsections, kept: `differential-equations` **Differential equations** (equation (1) as `eq-1`, the definitions in `p#de-definition`); `solutions` **Solutions of differential equations** (`p#solution-claim`, `p#general-family`, Figure 1, `p#ode-pde`); `in-practice` **Differential equations in practice** (the modelling cycle, `p#modelling`, Example 0.2.1 with Figure 2 inside it, `p#initial-condition`); `four-fundamental` **Four fundamental equations** (the four equations and their solutions, Exercises 0.2.1–0.2.3 inline, the hyperbolic functions, the four-equations Sim, Example 0.2.2, the catenary and the arch Sim). No section introduction, no section summary (the book prints neither).

## Concepts (merged by the prep)

Introduced: `differential-equation`, `dependent-variable` (function, symbol x), `independent-variable`, `first-order-differential-equation` (`p#de-definition`); `solution-to-a-differential-equation` (function), `verifying-a-solution` (skill) (`p#solution-claim`); `ordinary-differential-equation`, `partial-differential-equation` (`p#ode-pde`); `real-world-problem`, `mathematical-model`, `mathematical-solution` (`p#modelling`); `exponential-growth` (`ex-0-2-1`); `initial-value` (point, "initial condition"), `general-solution`, `particular-solution` (function), `solving-an-initial-value-problem` (skill) (`p#initial-condition`); `four-fundamental-equations` (`p#four-fundamental`); `second-order-differential-equation` (`p#fund-oscillation`); `hyperbolic-functions`, `derivatives-of-hyperbolic-functions` (`p#hyperbolic`); `catenary` (`p#catenary`). Ids shared with Calculus where the concept is the same (differential-equation, dependent- and independent-variable, solution, general and particular solution, initial-value, exponential-growth, hyperbolic-functions, derivatives-of-hyperbolic-functions, catenary, solving-an-initial-value-problem).

Calculus links for what the page assumes: derivatives (Calculus 3.2), eˣ (Calculus 1.5), the hyperbolic functions' derivatives (Calculus 6.9), on the book's own words.

## Colour and referents

x, y, P wear `function` (`\kx`, `\ky`, `\kP`); every derivative symbol wears `derivative` (`\kdxdt`, `\kdPdt`, `\kdydx`, `\kdtwoydx`, `\kyprime`, …); t, the independent x, C, C₁, C₂, D₁, D₂, k, A, L in ink. Mentions that name a concept are `data-concept` spans: the defined term and later mentions in the same sense; "solution" only where it means a solution of an equation. No referents: Figure 1's three book curves are members of one family, drawn thin as the family variant.

## Figures

- `sim-solutions-family` · Figure 1 · `solution-to-a-differential-equation`, `general-solution` · value add: variation: x = cos t + sin t + Ce^(−t) with C on a slider (−3 to 3, detents at the book's 2, 0 and −2, its curves from 3, 1 and −1), the book's three faint, the reader's full, its starting point x(0) = 1 + C hollow in `point`; every C runs into the same wave, which the book's three still curves only suggest · arrows: none · still: a family under a parameter has no clock (book `RULES.md`) · slider C (untyped) · headline "C = 2.00: x(0) = 3.00, and at t = 5 the term Ce^(−t) is down to 0.013." · readout x = cos t + sin t + 2e^(−t), x(0) = 1 + 2 = 3 · graph alone · 2D. Axes t 0 to 5, x −2 to 4 (the slider's extremes start at −2 and 4; the book's window is −1.7 to 3.2).
- `fig-modelling-cycle` · the unnumbered modelling-cycle image · `real-world-problem`, `mathematical-model`, `mathematical-solution` · value add: standardisation only, so a faithful copy (config 13): the three boxes and the arrows abstract, solve, interpret · arrows: symbolic · still · no controls · eyebrow "Figure" · 2D.
- `sim-bacteria` · Figure 2 (Example 0.2.1) · `exponential-growth`, `solving-an-initial-value-problem`, `initial-value` · value add: variation: the two measurements P(0) and P(10) on sliders (P(0) 50 to 150, P(10) 150 to 300, steps of 10, the book's 100 and 200 the defaults) drawn as `point` dots that pin C = P(0) and k = ln(P(10)/P(0))/10; the curve over the first 60 s with a dot every 10 s, which shows the population multiplied by the same factor each 10 s, so P(60) = P(0)·(P(10)/P(0))⁶ = 6400 · arrows: none · still · two sliders (untyped: P(0) and P(10) are values of the function, set as points) · headline "P(0) = 100, P(10) = 200: the population is multiplied by 2.00 every 10 s, so P(60) = 6400." · readout k = ln(200/100)/10 = 0.0693, P(t) = 100e^(0.0693t), P(60) = 6400 · graph alone · 2D. Axes t 0 to 60, P 0 to 7000 (the book's window); a P(60) past the top is pinned.
- `sim-four-fundamental` · Sim (config 14 seed) · `four-fundamental-equations`, `derivatives-of-hyperbolic-functions` · value add: intuition and variation: a choice of the four equations, k on a slider (0.5 to 2), and a point the reader drags along the solution (y = Ce^(kx), Ce^(−kx) with C = 1; y = cos kx; y = cosh kx); at the point the equation's derivative is drawn: for the first-order pair the tangent of slope ±ky, for the second-order pair the second derivative ∓k²y as a dashed arrow from the curve, toward the axis for y″ = −k²y (the curve bends back and oscillates) and away from it for y″ = k²y (it bends away and grows). What the equation says about the curve at every point is what the text asks the reader to "guess by recalling properties", and nothing on the page draws it · arrows: symbolic (the second derivative as a quantity) · still; a change of equation bends the curve into the next (choice morph) · choice (four options), sliders k and x (untyped) · headline "y′ = ky at x = 0.80: y = 2.23 and the slope is y′ = 1.0 · 2.23 = 2.23." · readout the equation with the live numbers · graph alone · 2D. Axes x −2 to 2, y −4 to 4; a point past the box is pinned.
- `sim-gateway-arch` · Sim (config 14 seed) · `catenary`, `hyperbolic-functions` · value add: intuition and variation: the Gateway Arch's weighted catenary, height A(cosh C − 1) = 625 ft on a half-span L = 299 ft, against the parabola through the same top and feet (dashed, ink), the widest gap between them bracketed; the shape constant C on a slider (0.25 to 4, a detent at the book's 3.0022) with the height and span held, so the reader sees a shallow catenary look like a parabola (the "popular belief") and the Arch's own C pull clearly away from it · arrows: none · still · slider C (untyped) · headline "C = 3.0022: the catenary and the parabola through the same top and feet differ by up to 37 ft." · readout y = A(cosh(Cx/L) − 1) with A, C, L live and the arch's height · scene alone, equal scales in feet · 2D.

## Extra simulations (rule 15)

Built (config 14): the four fundamental equations and the arch, above. Considered and rejected: a "plug it in" Sim for checking a solution (replays the text's computation); a modelling-cycle animation around the Petri dish (the cycle is notation; config 13 keeps it a faithful copy); Example 0.2.2's line y = 3x + 2 under sliders for y(0) and y′(0) (the line is the whole picture; the text says it).

## Derivations (rule 29)

- The check that x = cos t + sin t (and + e^(−t)) solves (1) · score 0 · not built: a verification by substitution, not a derivation of a result.
- Example 0.2.1 (C and k from P(0) and P(10)) and Example 0.2.2 (C₁, C₂ from y(0), y′(0)) · score 1 each · not built: worked examples that substitute the given conditions into the general solution.

## Exercises

- Inline Try Its (kind `inline-exercise`): 0.2.1 after `eq-fund-decay`, 0.2.2 after `p#fund-oscillation`, 0.2.3 after `p#hyperbolic`; each an AI-marked check that computes the derivatives and shows the two sides agree (config 8), verified with SymPy.
- End exercises 0.2.4–0.2.14 (kind `exercise`, unkeyed): every one kept with an AI-marked solution stating the answer and its reasoning, every computed answer checked with SymPy (config 10): 0.2.7 r = 2, −4; 0.2.8 C = 100; 0.2.9 C₁ = 20/3, C₂ = 10/3; 0.2.10 x = 2 sin t (also 2 cos t, 2); 0.2.11 a) 5e^(−10t) b) e^(3x) c) ½ sinh 2x d) cos 3y; 0.2.12 only y = 0; 0.2.13 144 thousand; 0.2.14 1 and 1.1, about 24.2, 31.4, 35.7 years. Answer shapes: `choice` for a yes-or-no question (0.2.6), `number` for one value (0.2.8, 0.2.13), `multi` for several (0.2.9, 0.2.14), `open` otherwise; a `tasks` list is one card with parts.
- 0.2.101–0.2.106 (kind `exercise`): the book's `\exsol` as the answer (`generated_by: source`); 0.2.102 a `choice`, 0.2.104 a `multi`.
- Symbols in prompts: the section's own (x, y and their derivatives) through the macros; the one-off letters A, H, φ, p, T, s stay in ink (chapter `COLOR.md`).

## Wanted at chapter level

- Anchors already set by the prep: variables x, dx/dt → `0.2-de-definition`; P, dP/dt → `0.2-ex-0-2-1`; y, dy/dx → `0.2-four-fundamental`; d2y/dx2 → `0.2-fund-oscillation`; y_prime → `0.2-ex-0-2-2`. Forms: `eq-exponential-growth` → `0.2-eq-growth-model`, `eq-exponential-growth-solution` → `0.2-eq-growth-solution`, `eq-fundamental-*` → `0.2-eq-fund-growth|decay|oscillation|exponentials`, `eq-cosh`, `eq-sinh` → `0.2-eq-hyperbolic`, `eq-derivative-cosh|sinh` → `0.2-hyperbolic`, `eq-gateway-arch` → `0.2-eq-gateway-arch`.
- Config 5 corrected: the Introduction prints Figure 1, Figure 2 and equations (1)–(5) with no chapter part (book class, `\chapter*`), and the pages keep them.

## Conventions for later sections (the template)

1. Ids: subsections by a short slug of the book's title; a paragraph that introduces concepts `p#<slug>`; a numbered display `div.equation#eq-<n>` (`eq-2` in 0.3; in Chapter 1, `eq-1-3` for (1.3)) and a cited one linked `<a href="#eq-<n>">(n)</a>`; a boxed or form display `div.equation#eq-<form slug>`; Example N.M.k `div.example#ex-N-M-k` with `<h3>Example N.M.k</h3>` (and the book's name after " · " where it gives one); figures `sim-<idea>`, faithful copies `fig-<idea>`.
2. Exercises: id `e<k>` for Exercise N.M.k (`e101` for N.M.101), `source_id` and `source_number` the printed number; inline Try Its `place: {at: inline, after: <span>}` with `<div class="exercises" data-place="<span>">` right after the span.
3. Defined terms: `<em><span data-concept="…">…</span></em>` at the definition, plain `data-concept` spans at later mentions in the same sense.
4. Figure numbers and equation numbers as printed; widths in pixels at 96 per inch from the converter's `width:` (4.5in → 432).
5. Unkeyed answers: AI-marked, computed answers checked with SymPy first; one card per `tasks` list.
