# Chapter 2 exploration: Higher-order linear ODEs

Written 2026-10-19 from the six `source.md` files converted by `tools/convert.py 2` (ch-higher-order-ode.tex, lines 5–3238). The chapter prints no introduction and no summary: it opens on 2.1.

## Modules

| Section | Label | Title | Inline ex. | End ex. (keyed) | Examples | Theorems | Figures | Numbered equations | Footnotes |
|---|---|---|---|---|---|---|---|---|---|
| 2.1 | solinear:section | Second-order linear ODEs | 1 (2.1.1) | 14 (5) | 0 | 3 | 0 | (2.1), (2.2) | 0 |
| 2.2 | sec:ccsol | Constant-coefficient second-order linear ODEs | 5 (2.2.1–2.2.5) | 18 (7) | 4 | 3 | 0 | (2.3) | 1 (ansatz) |
| 2.3 | sec:hol | Higher-order linear ODEs | 0 | 17 (6) | 5 | 3 | 0 | (2.4), (2.5) | 1 (monic) |
| 2.4 | sec:mv | Mechanical vibrations | 1 (2.4.1) | 9 (4) | 2 | 0 | 2.1–2.4, three sketches | none | 1 (pseudo-frequency) |
| 2.5 | sec:nonhom | Nonhomogeneous equations | 1 (2.5.1) | 16 (6) | 0 | 1 | 0 | (2.6), (2.7) | 0 |
| 2.6 | forcedo:section | Forced oscillations and resonance | 0 | 8 (3) | 1 | 0 | 2.5–2.8, one sketch (repeated) | (2.8) | 1 (Billah–Scanlan) |
| **all** | | | **8** | **82 (31)** | **12** | **10** | **8 numbered, 4 sketches** | **8** | **3** |

Every section carries a `\sectionnotes` line (lectures, [EP]/[BD] sections), dropped per config.

## Numbers in book order

- Equations (2.1) y″ + py′ + qy = f, (2.2) its homogeneous form, (2.3) ay″ + by′ + cy = 0, (2.4) the nth-order homogeneous equation, (2.5) y‴ − 3y″ − y′ + 3y = 0, (2.6) y″ + 5y′ + 6y = 2x + 1, (2.7) its associated homogeneous equation, (2.8) mx″ + cx′ + kx = F₀ cos ωt.
- Figures 2.1 (sin θ and θ), 2.2 (simple undamped oscillation, Example 2.4.1), 2.3 (overdamped, several initial conditions), 2.4 (underdamped with envelope), 2.5 (beating, Example 2.6.1), 2.6 (pure resonance, (1/π) t sin πt), 2.7 (transient behaviour, k = m = F₀ = 1, c = 0.7, ω = 1.1), 2.8 (practical resonance C(ω), c = 0.4, 0.8, 1.6). No tables.
- Unnumbered xfig sketches: `massfigforce` (2.4 and again at the head of 2.6), `mv-rlc` (2.4), `mv-pend-deriv` (2.4). `mv-pend.svg` in media is Chapter 8's.
- Theorems 2.1.1 (Superposition), 2.1.2 (Existence and uniqueness), 2.1.3, 2.2.1, 2.2.2 (Euler's formula), 2.2.3, 2.3.1 (Superposition), 2.3.2 (Existence and uniqueness), 2.3.3, 2.5.1.
- Examples 2.2.1–2.2.4, 2.3.1–2.3.5, 2.4.1–2.4.2, 2.6.1.

## What is new

Second-order and nth-order linear equations, superposition and linear independence, existence and uniqueness for linear equations, reduction of order, the characteristic equation with its three cases, complex numbers, the complex exponential and Euler's formula, higher-order constant-coefficient equations with repeated and complex roots, the mass–spring system and its four words (forced, free, damped, undamped), the RLC circuit and the pendulum as the same equation, simple harmonic motion (amplitude, angular frequency, phase shift, period), over-, critical and underdamping, envelope and pseudo-frequency, complementary and particular solutions, undetermined coefficients, variation of parameters, beating, pure resonance, transient and steady periodic solutions, practical resonance.

Calculus 17.1–17.3 covers 2.1, 2.2, 2.4, 2.5 and 2.6 in other words; its concept ids are reused where the concept is the same (`second-order-linear-differential-equation`, `homogeneous-linear-equation`, `superposition-principle`, `linear-independence`, `general-solution-to-a-homogeneous-equation`, `second-order-equation-with-constant-coefficients`, `characteristic-equation`, the three root cases, `eulers-formula`, `complementary-equation`, `general-solution-to-a-nonhomogeneous-equation`, `method-of-undetermined-coefficients`, `method-of-variation-of-parameters`, `simple-harmonic-motion`, `amplitude-and-phase-shift-form`, `damped-spring-mass-system`, the three damping cases, `forced-vibrations`, `transient-solution`, `steady-state-solution`, `resonance`, `rlc-series-circuit`).

## Sketches and photographs

No photographs. Every plot (2.1–2.8) is drawn live from the book's equation and numbers, the original behind the toggle. The three sketches are apparatus: the cart on its spring (the scene of 2.4's model figure and of 2.6's forced figures), the RLC circuit (its own moving figure, the analogy drawn), the pendulum with its forces (the scene of Figure 2.1, which it folds into as an original). The repeated `massfigforce` at the head of 2.6 is carried by 2.6's forced scenes and listed among their originals.

## Exercises in another section

None moves. 2.2.14 revisits 2.1.6's Cauchy–Euler equation in the complex case, where 2.2 supplies x^r = e^{r ln x}; 2.3.6 reads 2.3.5; 2.5.7 points at 2.5.10. The Cauchy–Euler paragraph sits between exercises 2.1.5 and 2.1.6 in the book; it opens 2.1.6's prompt, with the italic kept, and the line after 2.1.6 ("We will revisit … later") closes it. As in Chapter 1, a term defined only in an exercise set is not a concept of the map.

## What would make this chapter stunning (root rule 23)

The chapter is one picture seen four ways: the roots of a quadratic decide the shape of a motion. Moving a root in the complex plane is moving the motion: a root on the imaginary axis is a pure oscillation, one in the left half a decaying spiral, two real ones a slide home. The 3Blue1Brown survivors in this chapter carry that idea: in 2.2, the complex exponential e^{st} as a point that always moves at s times its own position, circling at a = 0 and spiralling in for a < 0, its real part the solution e^{ax} cos bx traced beside it; in 2.4, the cart on its spring beside its two characteristic roots, which slide together along the real axis as damping rises, meet at critical damping and lift off as a conjugate pair; in 2.6, the steady periodic solution set beside the force that drives it, the transient fading away beneath and the phase lag γ/ω bracketed between the force's crest and the cart's. Forcing is a hand at ω: beats as ω nears ω₀, the growth of t sin ω₀t at ω₀, and the practical-resonance peak of C(ω) that sinks and slides left as c grows and disappears at c² = 2km.
