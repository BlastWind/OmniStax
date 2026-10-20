# Chapter 5 colour plan

Prepared 2026-10-19 with `config.md`. It refines the book's `COLOR.md` for what this chapter draws; root rules 7 and 22 hold, and nothing here invents a hue. No convention. One fact: the temperature of the ground in 5.3, drawn as a false-colour map on one scale with its legend (book `COLOR.md`, Facts), while its symbol u keeps `function`.

## What the chapter colours, by rule 7's four ways

1. **Fact**: the temperature u(x, t) of the soil column in `sim-underground-temperature` (5.3), one scalar on one scale from coldest to hottest with a legend, `facts: ["spectrum"]`. Nothing else is a fact: the book's plots are black on white.
2. **Convention**: none.
3. **Referents** (per figure, below): the two series of Example 5.1.4, the beam and the string whose frequency ladders stand side by side, and y_c and y_p of the forced string.
4. **Categories**:
   - `function`: the unknown y(x) of a Sturm–Liouville problem and its eigenfunctions yₙ, y_j, y_k, the functions f and g of the inner product and the f that is decomposed, the coefficients p(x), q(x), r(x) of (5.1) and the weight r (functions of x, as Chapter 1 colours p and f of a linear equation), the heat equation's X(x), Xₙ(x), Tₙ(t) and temperature u(x, t) recalled from 4.6, the two curves h/x and tan x of Figure 5.1; the beam's displacement y(x, t), its factors X(x) and T(t), the initial shape f(x); the string's displacement y(x, t), y_p, y_c, w of Example 5.3.1, the odd extension F, the initial data f and g, the forcing F₀ cos(ωt) as a function of t, the factor X(x) of y_p; the ground's temperature u(x, t), the complex-valued h(x, t) and its factor X(x), V(x) and W(x); the coefficient B(ω) of `sim-string-resonance` drawn as a curve over ω (as 2.6 draws C(ω)).
   - `derivative`: y′, y″, X′, X″, X⁽⁴⁾, T′, T″, y_x, y_xx, y_xxx, y_xxxx, y_t, y_tt, u_t, u_xx, h_t, h_xx, ∂y_p/∂t, and the slope conditions at an end drawn as a short tangent segment.
   - `integral`: the weighted inner product ⟨f, g⟩ = ∫ f g r dx and ⟨yₘ, yₘ⟩, the integrals of Theorems 5.1.2 and 5.1.3's statement, the coefficient integrals of (5.4) and of Example 5.1.4.
   - `eigenvalue`: λ, λₙ, λ₀, λ_j, λ_k, the intersections √λₙ of Figure 5.1 as dots on the axis and in the readout, the beam's λₙ = n⁴π⁴; ω = ⁴√λ of 5.2 is in ink (a number introduced to avoid fourth roots, not a frequency).
   - `frequency`: the beam's natural frequencies n²π²a² and the fundamental π²a², the string's nπa/L and the base frequency πa/L, the forcing frequency ω of 5.3 and the yearly ω of the ground, each ladder's rungs; the resonance values are dashed specials on the ω slider.
   - `series`: the eigenfunction series Σ cₙ yₙ and its partial sums, the sine series of 5.2, the series solutions of the beam and of 5.3.101 and 5.3.6.
   - `sequence`: cₙ, cₘ, bₙ, Aₙ, Bₙ, the b₁, b₃, … of Example 5.2.1 drawn as bar heights on the beam's ladder.

In ink: x and t (x a depth in 5.3's second half), the endpoints a, b and the length L, the constants α₁, α₂, β₁, β₂, the Robin constant h of 5.1 (the function h(x, t) of 5.3 wears `function`, a redefinition), the arbitrary constants A, B, C, D and the B of (5.9) as a number of a solution (B(ω) aside), the index n, m, j, k and the Bessel order n, the material constants a, k, E, I, ρ, F₀, T₀, A₀, the fourth root ω of 5.2, the complex α = ±√(iω/k), ξ of the change of variables, i.

## Referents

| Section | Figure | Referents |
|---|---|---|
| 5.1 | `sim-robin-eigenvalues` (Figure 5.1) | none: h/x and tan x are told apart by their end labels, the intersections by their numbers |
| 5.1 | `sim-eigenfunction-series` | `sl-series` (the eigenfunction series in sin((2n − 1)x)) and `sine-series-ref` (the π-periodic regular sine series), two series the text names apart, each in its referent colour; f keeps `function` |
| 5.2 | `sim-beam-vibration` (Figure 5.2) | none: one beam, one motion at a time |
| 5.2 | `sim-beam-timbre` | `beam` and `string`, whose ladders stand on one frequency axis |
| 5.2 | `sim-beam-ends` | none |
| 5.3 | `sim-forced-string` (Figure 5.3 + 5.4) | `yp` and `yc`, the particular and the free parts of y = y_c + y_p, drawn on the graph below; the string y keeps `function` |
| 5.3 | `sim-string-resonance` | none (one curve B(ω)) |
| 5.3 | `sim-underground-temperature` (Figure 5.5) | none: the surface and the depth profile are one field |

The symbols y_p and y_c (5.3) split as root rule 7 says: the letter in `function`, the subscript in its referent's colour (`ref` on their variables rows).
