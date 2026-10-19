# Chapter 4 colour plan

Prepared 2026-10-19 with `config.md`. It refines the book's `COLOR.md` for what this chapter draws; root rules 7 and 22 hold, and nothing here invents a hue. No convention.

## The four ways (root rule 7), in this chapter

1. **Fact.** Temperature is the chapter's one physical scalar. Where a figure draws temperature along a wire or over a plate or a disc (`sim-discrete-rod`, `sim-heat-modes`, `sim-square-plate`, `sim-disc`, and the boundary rim of `sim-poisson-kernel`), it is a false-colour map on one scale with its legend, `facts: ["spectrum"]`; the wire or sheet wears the scale and the symbol u keeps `function`. No other fact: the book's plots are black on white, a string and a cart have no colour of their own.
2. **Convention.** None.
3. **Referent.** Two particular things the text names apart in one figure: the two travelling waves of d'Alembert's solution (4.8, `wave-right` and `wave-left`, "two functions (waves) traveling at speed a in opposite directions"), each drawn in its referent colour under the string that is their sum in `function`. Nowhere else: a partial sum beside its function is two categories (`series` and `function`); the odd and even extensions of 4.4 are two functions on two panes; the modes of the heat profile and the harmonics of a spectrum are instances of one kind, told apart by `F.cat(i)` or by their index labels, never referents; the eigenfunctions x₁, x₂ of Theorem 4.1.1 are drawn in no figure.
4. **Category.** The chapter's symbols by type, below.

## What the chapter colours

- `function`: the unknown x(t) of a boundary value problem and its eigenfunctions x_k, sin kt, cos kt, X(x), T(t), Y(y), R(r), Θ(θ) and their indexed X_n, T_n, Y_n, R_n, Θ_n; a periodic f(t), its extension F(t), F_odd, F_even; the sawtooth and the square wave; g(s) of 4.3; the right-hand side f(t) of a boundary value problem and the forcing F(t) of 4.5; x_sp (2.6's symbol, no referent here); the temperature u(x, t), u(x, y), u(r, θ) and the building blocks u_n; the string's displacement y(x, t), w, z, w_n, z_n; the initial data f(x), g(x), their odd extensions F(x), G(x) and H(x) = ∫₀ˣG; the waves A(ξ), B(η); the Poisson kernel P(r, θ, α); the boundary data g(θ); a harmonic function; the steady state u(x).
- `derivative`: x′, x″, f′, F′, y′ of the whirling string, X″, T′, T″, Y″, R′, R″, Θ″; every partial derivative u_t, u_x, u_xx, u_yy, u_r, u_rr, u_θ, u_θθ, u_xy, y_t, y_tt, y_xx, y_ξη and the ∂/∂ξ, ∂/∂η forms of 4.8.
- `integral`: the inner product ⟨f, g⟩ = ∫ fg dt of functions, the orthogonality integrals, the Fourier coefficient integrals as integrals, the Poisson integral.
- `eigenvalue`: λ, λ_k, λ_n, λ₀ of a boundary value problem (the book says it is the same role as a matrix's), and −λ as the separation constant.
- `frequency`: ω of the whirling string and its pop-out values kπ√T/(L√ρ); ω₀ = √(k/m) of 4.5 and the harmonics nπ/L on the same axis; the fundamental frequency πa/L and the overtones of 4.7.
- `series`: a Fourier series, a sine or cosine series, a partial sum S_N drawn closing on its function, the eigenfunction expansion, the solution series u(x, t), y(x, t), u(x, y), u(r, θ) when the text speaks of the series itself.
- `sequence`: the coefficients a₀, a_n, b_n, c_n, d_n, c₀, the mode amplitudes b_n e^{−n²π²kt/L²} drawn as bars.
- `region`: 0 < x < L, t > 0 of the heat and wave problems, the rectangle 0 < x < w, 0 < y < h, the disc r < 1, drawn as the shaded set the side conditions sit on.
- `vector`, `matrix`: only in 4.2's finite-dimensional analogy (v⃗, w⃗₁, w⃗₂; a symmetric A); drawn in no figure.

In ink: the independent variables t, x, y, s, r, θ, α, ξ, η; the endpoints a, b, the half period L, the lengths w, h; the parameters k (thermal diffusivity), a (wave speed), T, ρ, m, c, k of a spring, F₀, N, n, m as indices; the arbitrary constants A, B, C, c₁, c₂ where they are numbers, the amplitudes A_n, B_n of Y_n; the operator L = −d²/dt², Δ, ∇², d/dt; the period P; the distance s of the Poisson picture.

## Referents, per figure

| Section | Figure | Referents |
|---|---|---|
| 4.1 | `sim-eigenvalue-hunt`, `sim-whirling-string`, `sim-orthogonality` | none |
| 4.2 | `sim-periodic-extension`, `sim-fourier-coefficient`, `sim-partial-sums` | none (f in `function`, S_N in `series`, the harmonics by index) |
| 4.3 | `sim-triangle-sum`, `sim-smoothness-decay`, `sim-term-by-term` | none |
| 4.4 | `sim-extensions`, `sim-sine-cosine-series`, `sim-bvp-series` | none |
| 4.5 | `sim-jetpack`, `sim-harmonic-resonance` | none (x_sp keeps `function`, the forcing F `function`, the harmonics `F.cat(i)`) |
| 4.6 | `sim-discrete-rod`, `sim-heat-modes` | none (the beads and the modes are instances, `F.cat(i)`; temperature is the fact scale) |
| 4.7 | `sim-plucked-string` | none |
| 4.8 | `sim-dalembert` | `wave-right` (F(x − at)/2, moving right), `wave-left` (F(x + at)/2, moving left); the text marks "two functions (waves)", "two waves traveling in opposite directions" and each wave where it names one |
| 4.9 | `sim-square-plate` | none |
| 4.10 | `sim-disc`, `sim-poisson-kernel` | none |

No symbol of this chapter is split by a referent: the two waves have no symbol of their own in the text (A(x − at) and B(x + at) are functions; the variables rows of A and B carry `ref` only if the section builder marks them as the waves — the plan of 4.8 decides, and the default is no `ref`).
