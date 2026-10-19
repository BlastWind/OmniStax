# Plan: 4.5 Applications of Fourier series (appoffourier:section)

Source: `source.md`. Status: plan (prep stage one, 2026-10-19); built straight through per config 2. Template: `ch00/0.2`; Calculus `ch17/17.3` and this book's 2.6 for the cart scene. Section notes dropped and named in `notes`.

Two book subsections, Examples 4.5.1–4.5.2, no theorem, equations (4.9)–(4.10), Figure 4.14 and the unnumbered cart sketch `massfigforce` (2.4's, printed again at the head), no footnote, inline Exercise 4.5.1, end Exercises 4.5.2–4.5.6 and 4.5.101–4.5.104 (nine, four keyed).

## Sub-concepts (page headers)

The book's own two, kept: `periodically-forced` **Periodically forced oscillation** (`sim-jetpack` at the sketch's place, `p#setup` with `eq-4-9`, `p#steady-periodic`, `p#undamped-form`, `p#series-guess` with `eq-forcing-series` and `eq-steady-periodic-series`, Example 4.5.1 with `eq-jetpack-solution` and Figure 4.14 folded into `sim-jetpack` by citation); `resonance` **Resonance** (`p#resonance-setup`, `eq-resonant-guess`, `p#not-periodic`, `p#overtones-resonance` with `sim-harmonic-resonance` after it, Example 4.5.2 with `eq-4-10`, Try It 4.5.1, `drv-resonant-term` in place of the block from "We compute the second derivative" to the coefficients, `eq-resonant-example`; `p#damped-remark`).

## Concepts

Introduced: `periodically-forced-oscillation` (result; form `eq-periodic-forcing` at (4.9) with its condition) at `p#setup`; `steady-periodic-solution-by-fourier-series` (skill; forms `eq-forcing-series`, `eq-steady-periodic-series`, `eq-jetpack-solution`) at `p#series-guess`; `resonance-with-periodic-forcing` (result; terms pure resonance, resonance; forms `eq-resonant-guess`, `eq-resonant-example`) at `p#resonance-setup`.
Reinforced: `mass-spring-system`, `complementary-solution`, `particular-solution`, `steady-state-solution` (the steady periodic solution x_sp, 2.6's concept, its italic kept), `natural-frequency`, `method-of-undetermined-coefficients`, `resonance`, `practical-resonance` (2.4–2.6), `fourier-series-with-half-period-l`, `overtones` (4.2), `solving-a-boundary-value-problem-by-series` (4.4).

## Colour and symbols

x, x_c, x_p, x_sp, F `function` (\kx, \kxc, \kxp, \kxsp, \kF; x_sp without a referent here, since no second solution is drawn beside it); x′, x″ `derivative`; ω₀ `frequency` (\komegazero) and the harmonics nπ/L on its axis; c₀, c_n, d_n, a₀, a_n, b_n `sequence`; the series `series`. Ink: t, m, c, k, L, N, n, A, B, c₁, c₂, F₀, a₃, b₃ as numbers once solved. No referents; the harmonics' bars are instances (`F.cat(i)`).

## Figures

- `sim-jetpack` · Figure 4.14 (originals `massfigforce.svg`, `afs-steadyex.svg` width 432) · `periodically-forced-oscillation`, `steady-periodic-solution-by-fourier-series`, `resonance-with-periodic-forcing` · value add: flow by animation and variation: Example 4.5.1's cart (m = 1, k = 2) with a jetpack whose flame fires for 1 s and is off for 1 s (F(t) the step, 2-periodic), sliding on its spring with no damping, x_sp(t) traced below over t 0 to 10 (Figure 4.14's window); a choice of the forcing (on–off 0/1, Example 4.5.1, default; ±1, Example 4.5.2) and m, k on sliders (m 0.5 to 3, k 0.5 to 60, step 0.05 and 0.5; a dashed special on k where ω₀ = √(k/m) = nπ for the forcing's odd harmonics, which fires the resonant case: the t cos term grows and the trace climbs out of the window, pinned; Example 4.5.2's m = 2, k = 18π² ≈ 177.7 is reached by the ±1 choice setting the sliders to its values on selection) · arrows: kinematic (the jetpack's thrust drawn only while it fires; the cart's motion) · moving: 10 s of t, a loop · choice (forcing), sliders m, k (untyped) · headline "k = 2, m = 1: ω₀ = 1.41 misses every harmonic nπ; x_sp swings between 0.19 and 0.31 about its mean 1/4." · scene above, graph below (t 0 to 10 by 0 to 0.5, or −1 to 1 for the ±1 case) · 2D. Readout: x_sp(t) = 1/4 + Σ_{odd} 2/(πn(2 − n²π²)) sin nπt with the first two terms live (or x_p with its t cos 3πt term in the resonant case).
- `sim-harmonic-resonance` · Sim · `resonance-with-periodic-forcing`, `overtones`, `natural-frequency` · value add: intuition and variation: the forcing's spectrum, the harmonics' amplitudes |d_n| as bars standing at nπ/L on a frequency axis in `frequency`, and ω₀ as a marked line on the same axis, on a slider (0.5 to 16, step 0.01, dashed specials at the odd multiples of π for L = 1, where a bar lands on it); beside it the response's amplitudes |b_n| = |d_n|/|k − mn²π²| as bars, which spike as ω₀ nears a harmonic; a choice of the forcing (on–off, ±1, the sawtooth t on (−1, 1)); on a special the spiking bar is replaced by "grows as t" and the headline names the harmonic that resonates: the paragraph "infinitely many base frequencies could cause resonance" seen · arrows: none · still · choice (three forcings), slider ω₀ (`frequency`) · headline "ω₀ = 9.42 = 3π: the third harmonic of the forcing meets the natural frequency and its term grows as t." · graph alone, two bar panes · 2D. Readout: b_n = d_n/(ω₀² − n²π²) (m = 1) with the nearest harmonic's value live.

Book images: the cart sketch and Figure 4.14 are originals of `sim-jetpack`. Extra Sims weighed and left out: a damped version with practical resonance (the book says "let us not go into details"); a sound of the forcing (no audio).

## Derivations (rule 29)

- Example 4.5.2 (x_p″ computed, plugged in, simplified, coefficients matched) · printed as equations with words; the section's second idea, the term multiplied by t · built as `drv-resonant-term` (eyebrow "Example 4.5.2 · the resonant harmonic"): facts: the series of F (verified in Try It 4.5.1), the guess with the t terms, term-by-term differentiation, uniqueness of coefficients; moves: differentiate twice, multiply by 2 and add 18π²x_p, cancel the t terms (the move that shows why t was needed), match the sin 3πt, cos 3πt and the other sin nπt coefficients; result `eq-resonant-example`.
- Example 4.5.1's plug-in · the method of 4.4's derivation with numbers · not built (repeats `drv-dirichlet-bvp`'s moves; the prose stays).
- The series of F in Example 4.5.1 (c_n, c₀, d_n) · a worked integral · not built.

## Exercises

- Try It 4.5.1 (inline after the series of F in Example 4.5.2): c_n = 0 (odd F), c₀ = 0, d_n = 2∫₀¹ sin nπt dt = 2(1 − (−1)ⁿ)/(nπ) = 4/(nπ) for odd n, checked with SymPy.
- End, unkeyed (AI-marked, checked with SymPy): 4.5.2 x = 1/4 + Σ 1/(n²(2 − n²π²)) cos nπt; 4.5.3 (damped, x″ + x′ + x = Σ sin(nπt)/n³) each harmonic gives a 2 × 2 system; a_n = −π/(n²(π⁴n⁴ − π²n² + 1)), b_n = (1 − π²n²)/(n³(π⁴n⁴ − π²n² + 1)), x = Σ [a_n cos nπt + b_n sin nπt]; 4.5.4 x = Σ 1/(n²(4 − n²π²)) cos nπt; 4.5.5 F = Σ 2(−1)^{n+1}/(nπ) sin nπt, x = Σ 2(−1)^{n+1}/(nπ(1 − n²π²)) sin nπt; 4.5.6 ω₀ = π = 1·π/L: the first harmonic resonates; x_p = −(1/π²) t cos πt + Σ_{n ≥ 2} 2(−1)^{n+1}/(nπ(π² − n²π²)) sin nπt (a₁ from −2a₁π = d₁ = 2/π).
- Keyed 4.5.101–4.5.104 with the book's answers, each checked: 4.5.101 ✓ (each term divided by √2 − ω²); 4.5.102 ✓; 4.5.103 ✓ (the cosine series of |t| on [−1, 1] is 1/2 − Σ_{odd} 4/(n²π²) cos nπt); 4.5.104 ✓ (n = 1 resonates: a₁ t sin πt with −2π² · (−2/π³)… the builder recomputes the t sin πt coefficient −2/π³ from −2a₁π = −4/π² and confirms the book's sign). Shapes: `open` for every series.

## Wanted at chapter level

- Anchors: variables x, x′, x″, F → `4.5-eq-4-9`; x_c, x_p, x_sp → `4.5-steady-periodic`; ω₀ → `4.5-undamped-form`; c₀, c_n, d_n, a₀, a_n, b_n → `4.5-series-guess`. Forms: `eq-periodic-forcing` → `4.5-eq-4-9`; `eq-forcing-series`, `eq-steady-periodic-series` → `4.5-series-guess`; `eq-jetpack-solution` → `4.5-eq-jetpack-solution`; `eq-resonant-guess` → `4.5-eq-resonant-guess`; `eq-resonant-example` → `4.5-drv-resonant-term`.
- The symbols x_c, x_p, x_sp, ω₀ are Chapter 2's (\kxc, \kxp, \kxsp, \komegazero); x_sp's variables row here carries no `ref`.
