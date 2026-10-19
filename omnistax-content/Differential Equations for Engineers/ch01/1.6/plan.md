# Plan: 1.6 Autonomous equations (auteq:section)

Source: `source.md`. Status: built 2026-10-19 straight through (config 2). Section notes dropped and named in `notes`. No example, five figures (1.11–1.15), two unnumbered images (the phase diagram of x′ = 0.1x(5 − x), the four one-point phase diagrams), two footnotes (semistable), two inline exercises (1.6.1, 1.6.2), 9 end exercises (4 keyed).

## Sub-concepts (page headers)

The book prints none but Exercises; three headers are OmniStax's:
- `autonomous` **Equilibria and stability**: the opening through Newton's law of cooling, Figure 1.11 and the definitions of equilibrium, critical point, stable and unstable.
- `logistic` **The logistic equation and the phase diagram**: from "Consider now the logistic equation" through the classification image and inline 1.6.1.
- `harvesting` **Harvesting**: from "Let us think about the logistic equation with harvesting" through Figure 1.15 and inline 1.6.2.

## Concepts

Introduced: `equilibrium-solution` (Calculus's id; definition; type function), `equilibrium-point` (definition, named "Critical point"; terms critical points, equilibria, equilibrium; type point), `stable-critical-point`, `unstable-critical-point`, `semistable-critical-point` (definitions; the last from the footnote), `logistic-differential-equation` (Calculus's id; terms logistic equation; form dx/dt = kx(M − x)), `phase-line` (Calculus's id, named "Phase diagram"; terms phase diagram, phase portrait), `logistic-equation-with-harvesting` (definition; forms dx/dt = kx(M − x) − h and its critical points A, B). Uses: `autonomous` (0.3's classification, where Chapter 0 defines it; this section's italic "autonomous equations" reinforces it), `newtons-law-of-cooling`, `direction-field`.

## Colour, referents and symbols

x the solution `function`, dx/dt `derivative`, f(x) `function`; the critical points A, B on a phase diagram `point` where they are drawn (in the text A, B are numbers in ink, A the ambient temperature a parameter); t, k, M, h in ink. No referents.

## Figures

- `fig-cooling-field` · Figure 1.11 · `equilibrium-solution`, `stable-critical-point` · standardisation: the slope field of x′ = 0.3(5 − x) on the book's window (t 0 to 20, x −10 to 10) with the book's six solutions (x(0) = 10, 5.5, 0, −5, −9 read from its plot and the level x = 5 dashed) · still · no sliders · graph alone · 2D.
- `sim-logistic` · Figure 1.12 (with the phase-diagram image) · `logistic-differential-equation`, `phase-line`, `stable-critical-point`, `unstable-critical-point` · value add: variation: the slope field of x′ = 0.1x(5 − x) on the book's window (t 0 to 20, x −5 to 10), the book's solutions thin, the solution from the start the reader drags bold; beside it the phase diagram, a vertical line with the critical points 0 (hollow, unstable) and 5 (filled, stable) and an arrow up or down between them, the arrow of the stretch that holds the start lit · arrows: symbolic (the phase diagram's arrows are the sign of f, notation) · still · sliders t₀, x₀ by `F.drag` · headline "From x(0) = 1: f(1) = 0.4 > 0, so x rises toward 5." · readout x′ = 0.1x(5 − x) = value at the start · graph beside (the phase diagram is vertical) · 2D.
- The four one-point phase diagrams (unnumbered): kept as the book's image, `<img>` in the text: the classification is a reference picture the reader compares against, and a live version would add nothing (no quantity varies).
- `sim-harvesting` · Figure 1.13 + 1.14 + 1.15 · `logistic-equation-with-harvesting`, `semistable-critical-point` · value add: variation: x′ = 0.1x(8 − x) − h on the book's window (t 0 to 20, x 0 to 10), h on a slider from 0 to 2.5 with detents at the book's 1 and 2 and a dashed circle at h = 1.6 where A = B = 4 (kM²/4); the critical points A and B dashed and named, merging at h = 1.6 and gone beyond; the phase diagram beside; the start the reader drags with its solution · arrows: symbolic · still · sliders h, and t₀, x₀ by `F.drag` · headline "h = 1: B ≈ 1.55 and A ≈ 6.45; above B the population tends to A." (then "h = 1.6: one critical point, x = 4, semistable." and "h = 2: no critical point; every population dies out.") · readout A, B = (kM ± √((kM)² − 4hk))/2k with the numbers · graph beside · 2D.

## Extra simulations (rule 15)

None beyond the folds: the phase diagram beside each field is the section's view.

## Exercises

Inline: 1.6.1 (after the paragraph "Armed with the phase diagram"), 1.6.2 (after the critical points A, B), AI-marked approaches (described, no picture). End: 1.6.3–1.6.7 kept with AI-marked solutions (phase diagrams described in words, limits checked); 1.6.101–1.6.104 with the book's answers.

## Wanted at chapter level

- Anchors: `equilibrium-solution`, `equilibrium-point`, `stable-critical-point`, `unstable-critical-point` → `1.6-autonomous`; `logistic-differential-equation`, `phase-line` → `1.6-logistic`; `logistic-equation-with-harvesting` → `1.6-harvesting`; variables x, f → `1.6-autonomous`.

## Derivations

- Harvesting · the critical points A and B · score 2 · not built: the quadratic formula on one line, printed.
