# Plan: 8.4 The Logistic Equation (m53710)

Source: `source.md`, converted with `tools/convert.py 8`. Status: built 2026-10-12 straight through (config 2 waives the review for this run; decisions reported afterwards). Template: `ch01/1.1`.

Three objectives, an opening paragraph, two definition notes, one theorem note, one Student Project, Figures 8.18–8.23, Example 8.14 (the chapter opener), Checkpoint 8.14, three Key Concepts, three Key Equations rows, 40 section exercises (20 keyed), 6 glossary terms, one media note (dropped, named in `notes`).

## Sub-concepts (page headers)

The book's headers: `p#logistic-intro`; `carrying-capacity` **Population Growth and Carrying Capacity** (Figure 8.18, the definitions `carrying-capacity-definition` and `logistic-definition`, the phase line and Figure 8.19, Example 8.14 with the photo Figure 8.20 and Figures 8.21 + 8.22); `solving-logistic` **Solving the Logistic Differential Equation** (the derivation, the theorem `logistic-solution`, Figure 8.23, the point of inflection, Checkpoint 8.14, the Student Project `threshold-project`).

## Concept nodes (merged by the prep)

Introduced: `initial-population` (function, P₀), `growth-rate` (form dP/dt = rP, P(0) = P₀), `carrying-capacity` (limit, K), `logistic-differential-equation`, `phase-line`, the results `solution-of-the-logistic-equation` (function) and `inflection-point-of-the-logistic-curve` (point), `threshold-population` (the project's model). Uses: `exponential-growth`, `autonomous-differential-equation`, `separation-of-variables`, `partial-fraction-decomposition`, `inflection-point`, `concavity`, `horizontal-asymptote`, `direction-field`.

## Colour, referents and function tokens

P `\kP` (function), P′ `\kPprime` and dP/dt `\kdPdt` (derivative), P₀ `\kPzero` (function), K `\kK` (limit). r, t, C, C₁, C₂ and the project's T in ink. Referents: the logistic curve and the exponential curve of Figure 8.23 (`logistic-curve`, `exponential-curve`), which the text names "in blue" and "in green"; the words stay as printed. Function tokens: 100e^(0.03t), the deer's logistic curves.

## Figures

- `fig-exponential-growth` · Figure 8.18 · `exponential-growth`, `growth-rate` · standardisation only: P(t) = 100e^(0.03t) for 0 ≤ t ≤ 55 · still · 2D.
- `fig-phase-line` · Figure 8.19 · `phase-line` · standardisation only: the vertical P-line with P = 0 and P = K marked and the arrows of the book (down above K, up between 0 and K, down below 0); the arrows are notation · still · 2D.
- `fig-deer-herd` · Figure 8.20 · photo, kept: it stands in Example 8.14, the chapter opener's own example, with its credit.
- `sim-deer-logistic` · Figure 8.21 + 8.22 (Example 8.14) · `logistic-differential-equation`, `solution-of-the-logistic-equation`, `carrying-capacity`, `inflection-point-of-the-logistic-curve` · value add: variation: the direction field of dP/dt = 0.2311P(1 − P/1,072,764) for −20 ≤ t ≤ 20, the carrying capacity K dashed in `limit`, the solution through the dragged initial point; P₀ has detents at the book's 900,000 (Figure 8.21) and 1,200,000 (Figure 8.22) and a dashed circle at K; the inflection point is marked when P₀ < K and K/2 is crossed · still · sliders t₀ (−20 to 20) and P₀ (0 to 1,400,000) held by `F.drag` · headline "From P₀ = 900,000 the herd levels off toward K = 1,072,764; P(3) ≈ 978,830." · readout P(t) = P₀Ke^(rt)/((K − P₀) + P₀e^(rt)) with the numbers · graph alone · 2D.
- `fig-logistic-vs-exponential` · Figure 8.23 · `solution-of-the-logistic-equation`, `exponential-growth` · standardisation only: the logistic curve and the exponential curve from 900,000 at 23.11 %, each in its referent colour, K dashed in `limit` · still · 2D.

Unnumbered images: Checkpoint 8.14's answer field; the exercise fields in their cards. The whooping-crane table goes in the cards of 203–207.

## Extra simulations (rule 15)

None. A Sim of the threshold model was weighed and dropped: the Student Project asks the reader to draw that field and find its constant solutions.

## Corrections

- Checkpoint 8.14's key, part a, prints dP/dt = 0.04(1 − P/750), the factor P missing (note under the card).
- Exercise 187's key, P(t) = 3500/(4 + 3e^(−035t)), has lost the decimal point of −0.35t and takes the value 500 at t = 0, not the 2000 fish of the exercise (note under the card).
- Exercise 193's key, "13 years months", prints no number of months (note under the card).

## Exercises

- Checkpoint 8.14 inline after the point of inflection.
- Section exercises 168–207: the 20 odd keyed ones kept; 181 and 183 carry 179's statement of the trout model (named in `changes`). 200 ("show that") kept with an AI-marked approach. Left out, unkeyed and computational: 168, 170, 172, 174, 176, 178, 180, 182, 184, 186, 188, 190, 192, 194, 196, 198, 202, 204, 206.
- Review exercise set here, `source_section` 8.5: 289.

## Wanted at chapter level

- Anchors: variables P, P_prime, dP/dt → `8.4-carrying-capacity`; P_0, K → `8.4-logistic-definition`. Forms: `eq-exponential-growth-ivp` → `8.4-carrying-capacity`; `eq-logistic` → `8.4-logistic-definition`; `eq-logistic-solution` → `8.4-logistic-solution`; `eq-logistic-inflection` → `8.4-solving-logistic`; `eq-threshold-model` → `8.4-threshold-project`.

## Derivations

- Example 8.14 · score 4 · not built: a worked example of 8.3's separation of variables with the deer numbers; the general block that follows is the same work in letters and is built
- Solving the Logistic Differential Equation · the general solution, (8.9) to (8.11) · score 5 · built as drv-logistic-solution (replaces the block from Step 2 to the line before "We state this result as a theorem"; the theorem keeps its (8.11); the book's $C_{1}=e^{c}$ is a note on the node)
- Solving the Logistic Differential Equation · the point of inflection · score 4 · built as drv-logistic-inflection (replaces the block after "set the second derivative equal to zero"; the quotient-rule lines for $P'$ and $P''$ and the cancellation of one factor inserted; form `eq-logistic-inflection` re-anchored to it; new symbol `P_dprime`)
