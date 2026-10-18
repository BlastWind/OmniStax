# Plan: 8.1 Basics of Differential Equations (m53697)

Source: `source.md`, converted with `tools/convert.py 8`. Status: built 2026-10-12 straight through (config 2 waives the review for this run; decisions reported afterwards). Template: `ch01/1.1`.

Five objectives, two opening paragraphs, two definition notes, Table 8.1, Figures 8.2–8.5, Examples 8.1–8.7, Checkpoints 8.1–8.6, three Key Concepts, no Key Equations, 65 section exercises (28 keyed), 8 glossary terms, one media note (dropped, named in `notes`).

## Sub-concepts (page headers)

The book's headers: the opening paragraphs `p#de-intro`; `general-de` **General Differential Equations** (the definition note `de-definition`, Table 8.1, Example 8.1, the definition note `order-definition`, Example 8.2); `general-particular` **General and Particular Solutions** (Figure 8.2, Example 8.3); `initial-value-problems` **Initial-Value Problems** (Examples 8.4 and 8.5, Figure 8.3, the baseball of Figures 8.4 + 8.5, Examples 8.6 and 8.7).

## Concept nodes (merged by the prep)

Introduced: `solution-to-a-differential-equation` (function, symbol y_fn), `order-of-a-differential-equation`, `general-solution` (function), `particular-solution` (function), `initial-value` (point), `initial-velocity`, the skill `solving-an-initial-value-problem`, the result `velocity-under-gravity` (two forms). Reinforced from 4.10: `differential-equation`, `initial-value-problem` (the book's glossary terms there are the 4.10 concepts'). Uses: `derivative-function`, `higher-order-derivative`, `antiderivative`, `indefinite-integral`, `chain-rule`, `velocity`, `acceleration`.

## Colour, referents and function tokens

The unknown y wears `function` through `\kyfn`, y′ and the higher derivatives `derivative` (`\kyprime`, `\kydprime`, `\kytprime`, `\kyfour`, `\kyfive`, `\kdydx`, `\kdydt`); v(t) and s(t) of the baseball `function` (v is the unknown solved for), v′ and s′ `derivative`. C and the constants C₁, C₂ in ink; g, m, F in ink. No referents. Function tokens on the solutions the text gives (x², x² + 4, x³, x² + 3, 2x² + 3x + 2, the baseball's −9.8t + 10 and −4.9t² + 10t + 3).

## Figures

- `sim-family-parabolas` · Figure 8.2 (and Example 8.3) · `general-solution`, `particular-solution`, `initial-value` · value add: variation: the family y = x² + C for the book's C = −4, −2, 0, 2, 4 drawn faint, and the reader drags the initial point (x₀, y₀), which picks out the one parabola through it, C = y₀ − x₀² live; the point opens on Example 8.3's (2, 7), C = 3 · arrows: none · still: the family has no clock · two sliders x₀ (−3 to 3) and y₀ (−4 to 9), held by `F.drag` · headline "Through (2, 7): C = 3, the particular solution y = x² + 3." · readout y = x² + C, y₀ = x₀² + C with the numbers · graph alone · 2D.
- `sim-family-exponential` · Figure 8.3 (Examples 8.4, 8.5) · `general-solution`, `particular-solution` · value add: variation: the family y = 2e^(−2t) + Ce^t, C on a slider (−1 to 2, detents at the book's 1, 0.5 and −0.2, a dashed circle at 0 where the curves stop turning up and start falling for good), y(0) = 2 + C, the particular solution of Example 8.4 at C = 1; the book's labelled members drawn faint · still · headline "C = 1: y(0) = 3, and the curve turns up for large t." · graph alone · 2D.
- `sim-baseball` · Figure 8.4 + 8.5 (Examples 8.6, 8.7) · `velocity-under-gravity`, `initial-velocity`, `initial-value-problem` · value add: flow by animation: the ball rises and falls on a vertical height scale (kinematic: its motion, its velocity arrow v(t) up while v(t) > 0 and down while v(t) < 0, the book's Figure 8.5), gravity's arrow g fixed (notation), and beside it v(t) = −9.8t + v₀ and s(t) = −4.9t² + v₀t + 3 drawn as time runs; v₀ on a slider (0 to 20 m/s, default the book's 10) · moving, the ball and the time line, 5 s a flight, 1.2 s hold · headline "t = 2.00 s: v(2) = −9.60 m/s, the ball is falling, 3.40 m above the ground." · readout v′(t) = −9.8, v(t) = −9.8t + 10, s(t) = −4.9t² + 10t + 3 with the live values · graph beside a vertical scene · 2D. Figure 8.4's picture is the ball with its gravity arrow at any time; Figure 8.5's are the arrow up and down.

## Extra simulations (rule 15)

None: the three figures cover the family, the constant and the initial value; a Sim of "verifying a solution" would only redraw Table 8.1.

## Exercises

- Checkpoints 8.1–8.6 inline after Examples 8.1–8.6, hint and answer behind reveals. Checkpoints 8.1 and 8.4 ask for a verification and the book prints only a hint: each keeps the hint and takes an AI-marked verification (rule 13).
- Section exercises 1–65: the 28 odd keyed ones kept. 8–17 (verify that a function solves an equation, unkeyed odd and even) kept with AI-marked verifications (config 12). Left out, unkeyed and computational: 2, 4, 6 (orders), 18–26 even (particular solutions), 28–36 even (general solutions), 38–46 even (initial-value problems), 48–52 even (calculator families), 54, 56, 58, 60, 62, 64. 57 carries 56's statement and 59 carries 58's (named in `changes`).
- Review exercises set here, `source_section` 8.5: 267, 273, 283.

## Wanted at chapter level

- Anchors: variables y_fn, f → `8.1-de-definition`; y_prime, dy/dx, dy/dt → `8.1-general-de`; y_dprime, y_tprime, y_4, y_5, d2y/dx2 → `8.1-order-definition`; C → `8.1-general-particular`; v, v_prime, s, s_prime → `8.1-initial-value-problems`. Forms: `eq-initial-value` → `8.1-initial-value-problems`; `eq-velocity-under-gravity`, `eq-height-initial-value-problem` → `8.1-initial-value-problems`.
- Terms "differential equation" for `differential-equation` (4.10, owned by Chapter 4): the glossary word of 8.1. Left to the orchestrator.

## Derivations

- Initial-Value Problems · the baseball's equation of motion, before Example 8.6 · score 4 · built as drv-velocity-under-gravity (prose kept, host after its paragraph; the display $v'(t)=-g$ and the sentence leading to it moved into the derivation; form `eq-velocity-under-gravity` re-anchored to it)
- Examples 8.6 and 8.7 · score 1 · not built: worked examples that integrate and substitute the initial value
