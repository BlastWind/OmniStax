# Plan: 3.6 Second-order systems and applications (`sol:section`)

Source: `source.md`. Status: built 2026-10-19 straight through (config 2). Template: Calculus `ch17/17.3` (spring scenes).

Three examples (3.6.1 the two carts, 3.6.2 the rail cars, 3.6.3 forcing), Theorem 3.6.1 (two boxed general solutions), equation (3.4), Figures 3.12–3.17, two inline exercises (3.6.1, 3.6.2), seven end exercises (3 keyed). Section notes dropped.

## Sub-concepts (the book's headers)

`undamped` **Undamped mass-spring systems** (Figure 3.12, the three-mass equations, M, K, A = M⁻¹K, the trial solution, Theorem 3.6.1, Exercises 3.6.1–3.6.2 inline); `examples` **Examples** (Examples 3.6.1 and 3.6.2, Figures 3.13–3.17); `forced` **Forced oscillations** ((3.4), the particular solution, Example 3.6.3, resonance).

## Concepts

Introduced: `three-mass-system` (result: the equations of three masses and four springs), `displacement-vector` (vector), `mass-matrix` (matrix), `stiffness-matrix` (matrix), `diagonal-matrix`, `undamped-second-order-system-solution` (result, Theorem 3.6.1, both boxed forms), `normal-mode` (terms natural mode of oscillation, normal modes of oscillation), `natural-frequency-of-a-system` (frequency; term natural frequencies), `forced-oscillation-of-a-system` (result: x⃗_p = c⃗ cos ωt with (A + ω²I)c⃗ = −F⃗), `resonance-in-a-system` (result). Uses Hooke's and Newton's laws (Chapter 2), 3.2's inverse, 3.4's eigenvalues, Euler's formula, undetermined coefficients (2.5).

## Colour and referents

x⃗, v⃗, v⃗_i, F⃗, G⃗, c⃗ (solved for), d⃗ wear `vector`; x⃗″ `derivative`; M, K, A, M⁻¹, I `matrix`; λ, α `eigenvalue`; ω, ω_i `frequency`; x₁, x₂, x₃ `function`; m_i, k_i, a_i, b_i, c_i, α_i (phase) in ink. Referents: `mass-1`, `mass-2`, `mass-3` (Figure 3.12); `cart-1`, `cart-2` (Examples 3.6.1, 3.6.3, Figures 3.13–3.15); `car-1`, `car-2` (Example 3.6.2, Figures 3.16–3.17). x₁, x₂, x₃ split in the text where they name a referent's displacement.

## Figures

- `sim-three-carts` · Figure 3.12 · `three-mass-system`, `stiffness-matrix`, `displacement-vector` · value add: variation: the three carts between walls on four springs (k₁ … k₄ = 1, m₁ = m₂ = m₃ = 1, labelled in the caption), the reader sets the displacements x₁, x₂, x₃ and each spring stretches or squeezes to fit, each cart carrying its net spring force (symbolic arrow) whose value is its row of Kx⃗ · arrows symbolic (forces) · still: a configuration, no time · sliders x₁, x₂, x₃ (−0.5 to 0.5 m, default 0.3, 0, −0.2) · headline the three forces · scene alone · 2D.
- `sim-normal-modes` · Figure 3.13 + 3.14 + 3.15 · `normal-mode`, `natural-frequency-of-a-system`, `undamped-second-order-system-solution` · value add: flow by animation: Example 3.6.1's carts (m₁ = 2, m₂ = 1, k₁ = 4, k₂ = 2) against the wall moving, x₁(t) and x₂(t) traced below for 0 ≤ t ≤ 10 in the carts' colours; a choice of motion: mode 1 (x⃗ = [1, 2] cos t, Figure 3.14 left), mode 2 ([1, −1] cos 2t, Figure 3.14 right), or the example's initial conditions (2 sin t [1, 2] + (cos 2t − sin 2t)[1, −1], Figure 3.15); in mode 1 the carts swing together, in mode 2 against each other · arrows none · moving: t 0 to 10 in 8 s · choice motion (three) · headline "Mode 2: the carts move in opposite directions at frequency 2" · scene above, graph below · 2D.
- `sim-railcars` · Figure 3.16 + 3.17 · `undamped-second-order-system-solution` (the zero eigenvalue), Example 3.6.2 · value add: flow by animation and variation: car 1 at 3 m/s links to car 2 through the bumper spring (k = 2) and the pair rolls toward the wall; below, x₂(t) = 2t − (2/√3) sin(√3 t) with the wall's level; the wall distance on a slider, the impact time and speed read off; Bob's safe distances 4π/√3 ≈ 7.26 m and 8π/√3 ≈ 14.51 m are dashed circles, where car 2 meets the wall at zero speed · arrows: car 1's velocity arrow before linkup (kinematic) · moving: until impact or t = 9 s, in 6 s · slider wall distance d (4–16 m, default 10, specials at 4π/√3 and 8π/√3) · headline "Impact at t = 5.22 s at 3.85 m/s" · scene above, graph below · 2D.
- `sim-forced-carts` · Sim · `forced-oscillation-of-a-system`, `resonance-in-a-system`, `natural-frequency-of-a-system` · value add: variation and flow: Example 3.6.3's force 2 cos ωt on cart 2 with ω on a slider; the steady periodic motion x⃗_p = c⃗ cos ωt of the two carts moves above, and below the amplitudes c₁(ω), c₂(ω) are graphed against ω, both blowing up at the natural frequencies 1 and 2 and c₂ passing through zero at ω = √3, where the forced cart stands still while cart 1 swings · arrows symbolic (the force on cart 2) · moving: the carts in steady motion, a 2π/ω-periodic loop of 5 s · slider ω (0.2–4, default 3, dashed circles at 1 and 2 (resonance) and √3) · headline "ω = 3: c⃗ = (1/20, −3/10)" · scene above, graph below · 2D. Rule 15 judged: the text says resonance happens at a natural frequency; only the graph against ω shows the two of them, and the zero of c₂ (dynamic damping, which Exercise 3.6.4 names) is nowhere drawn.

## Extra simulations (rule 15)

The fourth figure above is the one extra; a three-cart modes Sim was rejected (the book solves no three-cart system in the text).

## Derivations (rule 29)

- x⃗ = v⃗e^{αt} ⇒ α²v⃗ = Av⃗ · printed block · built as `drv-second-order-trial-solution`, replacing the displays (equation-first).
- x⃗_p = c⃗ cos ωt ⇒ (A + ω²I)c⃗ = −F⃗ ⇒ c⃗ = (A + ω²I)⁻¹(−F⃗) · printed block · built as `drv-forced-response-of-a-system`, replacing the displays.
- The three-mass equations · a model stated, then rearranged · not built.
- M x⃗″ = Kx⃗ + G⃗ cos ωt ⇒ x⃗″ = Ax⃗ + F⃗ cos ωt · one move · not built.
- Examples 3.6.1–3.6.3 · worked examples · not built.

## Exercises

- Inline: 3.6.1 after `three-mass-matrices`; 3.6.2 after `zero-eigenvalue`. AI-marked.
- End: 3.6.3–3.6.6 AI-marked, computed in SymPy; 3.6.101–3.6.103 the book's answers.

## Wanted at chapter level

Anchors: x_vec, M, K → `3.6-undamped`; omega → `3.6-example-3-6-1`; forms of `undamped-second-order-system-solution` → `3.6-theorem-3-6-1`, `forced-oscillation-of-a-system` → `3.6-forced`.
