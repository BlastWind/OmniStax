# Plan: 8.3 Separable Equations (m53704)

Source: `source.md`, converted with `tools/convert.py 8`. Status: built 2026-10-12 straight through (config 2 waives the review for this run; decisions reported afterwards). Template: `ch01/1.1`.

Two objectives, an opening paragraph, one definition note, one Problem-Solving Strategy, Figures 8.15–8.17, Examples 8.10–8.13, Checkpoints 8.10–8.13, two Key Concepts, three Key Equations rows, 49 section exercises (25 keyed), 3 glossary terms. No media note.

## Sub-concepts (page headers)

The book's headers: `p#separable-intro`; `separation-of-variables` **Separation of Variables** (the definition `separable-definition`, the strategy `separation-strategy`, Examples 8.10 and 8.11 with Figure 8.15); `applications` **Applications of Separation of Variables** with its h3s Solution concentrations (Example 8.12, Figure 8.16) and Newton’s law of cooling (Example 8.13, Figure 8.17).

## Concept nodes (merged by the prep)

Introduced: `separable-differential-equation` (form y′ = f(x)g(y)), `autonomous-differential-equation`, the skill `separation-of-variables`, the idea `solution-concentration` (form du/dt = INFLOW RATE − OUTFLOW RATE). Uses: `newtons-law-of-cooling` (6.8; the section's Key Equation dT/dt = k(T − T_s) is a form wanted on it, owned by Chapter 6), `equilibrium-solution`, `indefinite-integral`, `partial-fraction-decomposition`, `initial-value-problem`, `limit-at-infinity`.

## Colour, referents and function tokens

y `\kyfn`, y′ `\kyprime`, f(x) `\kf` and g(y) `\kg` (function), u(t) `\kufn` (function), du/dt `\kdudt` and dT/dt `\kdTdt` (derivative), T `\kT` (function). C, C₁, C₂, k, T_s, T₀ in ink. No referents. Function tokens: the solutions (−2 + Ce^(x³ − 12x))/3 at C = 1 is not marked (a family); y = (2 − 6e^(4x² + 12x))/(1 + 3e^(4x² + 12x)), u(t) = 50 − 46e^(−t/50), T(t) = 75 + 125e^(−0.08338t).

## Figures

- `fig-separable-ivp` · Figure 8.15 (Example 8.11) · `separation-of-variables`, `equilibrium-solution` · standardisation, with the field: the solution y = (2 − 6e^(4x² + 12x))/(1 + 3e^(4x² + 12x)) of y′ = (2x + 3)(y² − 4), y(0) = −1, over the faint field of the equation, the constant solutions y = ±2 of step 1 dashed · arrows: none · still · graph alone · 2D.
- `sim-brine-tank` · Figure 8.16 (Example 8.12) · `solution-concentration`, `separation-of-variables`, `equilibrium-solution` · value add: flow by animation: brine flows in at the top and out at the stopcock (kinematic: the flowing solution, drawn as moving drops on the two pipes) while the tank's tint deepens with its salt and u(t) = 50 − (50 − u₀)e^(−t/50) is drawn beside up to the moving time; u(0) on a slider (0 to 100 kg, default the book's 4, a dashed circle at the constant solution 50) · moving, the drops and the time line, 300 min in 5 s, 1.2 s hold · headline "t = 100 min: the tank holds 43.8 kg of salt, gaining 0.12 kg/min." · readout du/dt = 1 − u/50 with the live values · graph beside the vertical tank · 2D.
- `sim-pizza` · Figure 8.17 (Example 8.13) · `newtons-law-of-cooling`, `equilibrium-solution` · value add: flow by animation: time runs, the pizza's thermometer falls and T(t) = 75 + 125e^(kt), k = ln(23/25), is drawn beside, the kitchen's 75 °F dashed as the constant solution and the 150 °F the example waits for marked; still parts: the pizza is a plain disc (no colour as fact) · moving, the thermometer and the time line, 15 min in 5 s, 1.2 s hold · headline "t = 6.12 min: the pizza is at 150 °F, cooling at 6.3 °F per minute." · readout dT/dt = k(T − 75) with the live values · graph beside · 2D. The book's figure states the two temperatures in words; the Sim shows them as the curve's start and its asymptote.

Unnumbered images: the exercise fields in their cards.

## Extra simulations (rule 15)

None: separation of variables is algebra, and the three figures carry the three solutions the section draws.

## Corrections

- Example 8.13 cites Equation 8.4 (an integral of Example 8.11) for the initial-value problem of Newton's law of cooling, which is Equation 8.7; a numbered marker at the citation and a note at the section's end. Checkpoint 8.13's hint cites the same Equation 8.4: a note under its card.

## Exercises

- Checkpoints 8.10–8.13 inline after Examples 8.10–8.13.
- Section exercises 119–167: the 25 odd keyed ones kept; 153 carries 152's statement and 155 carries 154's (named in `changes`). 164 (prove the compound-interest equation) kept with an AI-marked derivation. Left out, unkeyed and computational: 120, 122, 124–142 even, 144, 146, 148, 150, 152, 154, 156, 158, 160, 162, 166.
- Review exercises set here, `source_section` 8.5: 263, 269, 271, 275, 287 (264 moved to 8.5: it tests integrating factors too).

## Wanted at chapter level

- Anchors: variables y_fn, y_prime, f, g → `8.3-separable-definition`; C → `8.3-separation-strategy`; u_fn, du/dt → `8.3-solution-concentrations` (the h3's example); T, dT/dt → `8.3-newtons-law`. Forms: `eq-separable` → `8.3-separable-definition`; `eq-solution-concentration` → the brine example.
- Form `dT/dt = k(T − T_s)` and `dT/dt = k(T − T_s), T(0) = T₀` on `newtons-law-of-cooling` (6.8, owned by Chapter 6), anchored at `8.3-newtons-law`: left to the orchestrator if Chapter 6's agent is still working.
