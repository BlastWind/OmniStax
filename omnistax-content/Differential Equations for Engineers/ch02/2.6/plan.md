# Plan: 2.6 Forced oscillations and resonance (forcedo:section)

Source: `source.md`. Status: plan; built straight through 2026-10-19. Template: Calculus `ch17/17.3` for the scenes.

The cart sketch again, an opening, two book subsections, equation (2.8), three boxed formulas, Example 2.6.1, Figures 2.5–2.8, one book footnote (Billah and Scanlan), end exercises 2.6.1–2.6.5 and 2.6.101–2.6.103 (eight, three keyed); no inline exercise. The section note is dropped.

## Sub-concepts (page headers)

0. `forcedo-intro`: the two opening paragraphs (the section's own introduction); the repeated cart sketch is carried by `sim-beats`, whose scene it is, and listed among its originals.
1. `undamped-forced` **Undamped forced motion and resonance** (the book's): mx″ + kx = F₀ cos ωt, x_c, natural frequency, x_p, the boxed general solution, the amplitude–phase form, Example 2.6.1 with `sim-beats` (Figure 2.5 + 2.6) at Figure 2.5's place, the beating identity; ω = ω₀ with the trial At cos ωt + Bt sin ωt, the collected line, the particular and general solutions, `drv-pure-resonance` after them, the growth, Figure 2.6's citation (linked to the fold), resonance and pure resonance, swings, earthquakes, Tacoma Narrows with its footnote.
2. `damped-forced` **Damped forced motion and practical resonance** (the book's): (2.8), p and ω₀, the reduced equation, x_c in three cases, `drv-steady-periodic` in place of the displays from "We get" to tan γ, the boxed x_p, the case ω = ω₀, transient and steady periodic solutions, x = x_tr + x_sp, `sim-transient` (Figure 2.7) at its place, how fast x_tr dies, practical resonance (frequency, amplitude) with `sim-practical-resonance` (Figure 2.8) at its place, C′(ω) and the boxed root, the first-derivative test, small damping, ω → ∞, the square-wave paragraph.

## Concept nodes

Introduced: `undamped-forced-motion` (result; forms `eq-undamped-forced-xp`, `eq-undamped-forced` the boxed general solution), `beating` (idea; form `eq-beating`, the product of sines), `resonance` (definition; terms resonance, pure resonance; form `eq-pure-resonance` x_p = (F₀/(2mω)) t sin ωt), `forced-vibrations` (result; forms (2.8) `eq-damped-forced`, `eq-damped-forced-reduced`, `eq-steady-periodic` the boxed x_p, `eq-steady-amplitude` C, `eq-phase-lag` tan γ), `transient-solution` (definition, `function`, symbol x_tr), `steady-state-solution` (definition, `function`, symbol x_sp; terms steady periodic solution; form `eq-tr-plus-sp`), `practical-resonance` (definition), `practical-resonance-frequency` (definition, `frequency`; form `eq-practical-resonance-frequency`), `practical-resonance-amplitude` (definition).
Reinforced: `natural-frequency` ("natural frequency"), `mass-spring-system`, `method-of-undetermined-coefficients`, `complementary-solution`, `particular-solution`, `amplitude-and-phase-shift-form`, `damped-spring-mass-system`, the three damping cases. Uses: `general-solution-to-a-nonhomogeneous-equation`, `amplitude`, `phase-shift`.

## Colour

`function`: x (\kx), x_c, x_p (\kxc, \kxp), x_tr, x_sp (\kxtr, \kxsp, split by their referents), F(t) (\kF); `derivative`: x′, x″, C′(ω) as written; `frequency`: ω, ω₀, ω₁ (\komega, \komegazero, \komegaone) and the practical-resonance frequency on its graph; `eigenvalue`: r₁, r₂. Ink: t, m, c, k, F₀, p, A, B, C (the amplitude, a number for each ω; the curve C(ω) of Figure 2.8 is drawn in ink with its ω axis in `frequency`), γ, C₁, C₂. Referents: `xtr` and `xsp` in `sim-transient` and in the text that names them (the variables rows of x_tr and x_sp carry `ref`).

## Figures

- `sim-beats` · Figure 2.5 + 2.6 (originals: `3-6-beating`, `3-6-resonance`, and the repeated cart sketch `massfigforce`) · `undamped-forced-motion`, `beating`, `resonance`, `natural-frequency` · flow by animation and variation: the undamped cart, started at rest, is shaken by F(t) = F₀ cos ωt (its arrow on the cart) while x(t) is traced below with its slow envelope ±(2F₀/(m|ω₀² − ω²|)) |sin((ω₀ − ω)t/2)| dashed; as ω nears ω₀ the beats slow and swell, and landing on ω₀ (a dashed circle on ω) the beats become the growth between the lines ±F₀t/(2mω) · arrows: symbolic (the force) · moving: 20 s of t over 10 s, then a hold · choice of setup, Example 2.6.1 (m = 0.5, k = 8, F₀ = 10, so ω₀ = 4) | Figure 2.6 (m = 1, k = π², F₀ = 2, so ω₀ = π); slider ω (0.5 to 6, step 0.01, default π, special at ω₀ "resonance") · headline: ω against ω₀ and the beat period 4π/|ω₀ − ω| or "pure resonance" · scene above, graph below, t 0 to 20 by x −10 to 10 (Figure 2.5's window; Figure 2.6's ±6 inside it) · 2D. Readout: x = (F₀/(m(ω₀² − ω²)))(cos ωt − cos ω₀t) with the live numbers, or x = (F₀/(2mω)) t sin ωt at ω₀.
- `sim-transient` · Figure 2.7 (3Blue1Brown survivor: the transient split from the steady periodic solution, the phase lag shown) · `transient-solution`, `steady-state-solution`, `forced-vibrations` · flow by animation and variation: the damped cart pushed by F(t) = F₀ cos ωt with the book's k = m = F₀ = 1, c = 0.7, ω = 1.1; x(t) is traced as the sum of x_tr (fading, its referent colour, dashed) and x_sp (its referent colour); above the graph a strip carries F(t) on its own scale, and the lag γ/ω between a crest of F and the next crest of x_sp is bracketed · arrows: symbolic (the force) · moving: 20 s of t over 10 s · sliders c (0.1 to 2, default 0.7), ω (0.2 to 3, default 1.1, ω₀ = 1 a dashed special where γ = π/2), x(0) (−5 to 5, default 4.7, the book's top curve) · headline: C and γ live · scene above, then the force strip, then the graph (t 0 to 20 by x −6 to 6, the book's window) · 2D. Readout: x_sp = C cos(ωt − γ) with live C, γ, and x_tr at the current t. Labels: x_tr and x_sp once each at the right edge, F(t) on its strip.
- `sim-practical-resonance` · Figure 2.8 · `practical-resonance`, `practical-resonance-frequency`, `practical-resonance-amplitude` · variation: C(ω) for k = m = F₀ = 1 under the damping c, the book's three curves (c = 0.4, 0.8, 1.6) drawn faint behind the live one; the peak at ω = √(ω₀² − 2p²) marked, sliding left and sinking as c grows, and gone at c = √2 (c² = 2km, a dashed circle on c), where the maximum moves to ω = 0 · arrows none · still · sliders c (0.2 to 2.5, step 0.01, default 0.4, detents at 0.4, 0.8, 1.6, special at √2) and ω (0 to 3, default 1, a point riding the curve, special at the practical-resonance frequency) · headline: the practical-resonance frequency and amplitude, or "no practical resonance" · graph alone, ω 0 to 3 by C 0 to 3.5, ω₀ dashed · 2D. Readout: C(ω) = F₀/(m√((2ωp)² + (ω₀² − ω²)²)) with the live numbers.

Extra Sims weighed and left out: a square-wave forcing (the book defers it to Chapter 4); the water tower of Exercise 2.6.5 (it would answer an exercise).

## Exercises

- End: 2.6.1–2.6.5 kept with AI-marked solutions, each checked by SymPy (2.6.3 c ≥ √(2km), 2.6.4 m ≤ c²/(2k), 2.6.5 with parts); 2.6.101–2.6.103 with the book's answers, each checked.

## Derivations

- The undamped x_p = F₀/(m(ω₀² − ω²)) cos ωt, "We leave it as an exercise" · hidden, three moves · not built.
- The resonance trial x_p = At cos ωt + Bt sin ωt · hidden · score 5 (the product rule imported, a run of four unprinted moves: x_p′, x_p″, the substitution, the cancelling of the t terms) · built as `drv-pure-resonance` after the paragraph that ends in the general solution: x_p′ and x_p″ as nodes, the substitution to the book's collected line, A = 0 and B = F₀/(2mω).
- The damped x_p, "the tedious details are left to reader" · a chain of displays with the substitution hidden · score 6 (a run of three unprinted moves in the substitution and two in solving the system, one join for C from A and B) · built as `drv-steady-periodic`, replacing the displays from "We get" through tan γ: the substitution to the book's collected line, the two coefficient equations, A and B, x_p, C = √(A² + B²), tan γ = B/A. The boxed x_p stays printed.
- C′(ω) and its zeros · score 3 · not built. The beating identity in Example 2.6.1 · substitution · not built.

## Wanted at chapter level

- forms `eq-undamped-forced-xp` → `2.6-undamped-xp`, `eq-undamped-forced` → `2.6-undamped-general`, `eq-beating` → `2.6-beating-form`, `eq-pure-resonance` → `2.6-drv-pure-resonance`, `eq-damped-forced` → `2.6-3-6-deq`, `eq-damped-forced-reduced` → `2.6-reduced-eq`, `eq-steady-periodic` → `2.6-steady-box`, `eq-steady-amplitude`, `eq-phase-lag` → `2.6-drv-steady-periodic`, `eq-tr-plus-sp` → `2.6-tr-sp`, `eq-practical-resonance-frequency` → `2.6-pracres-box`.
- variables of 2.6: x, x″, F, ω → `2.6-undamped-forced`; x_c, x_p, ω₀ → `2.6-undamped-forced`; x′, ω₁, r₁, r₂ → `2.6-damped-forced`; x_tr, x_sp (`ref` xtr, xsp) → `2.6-tr-sp`.
