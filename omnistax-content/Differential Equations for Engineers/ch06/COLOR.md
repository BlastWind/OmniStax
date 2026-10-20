# Chapter 6 colour plan

Prepared 2026-10-19 with `config.md`. It refines the book's `COLOR.md` for what this chapter draws; root rules 7 and 22 hold, and nothing here invents a hue. The four ways of rule 7, in order: no fact and no convention in this chapter (the book's plots are black on white; a concentration or a temperature along the river or the rod is not drawn as a false-colour map here, since 6.5's figures draw y as a graph over x and a region in the (x, t) plane); referents in two figures; categories everywhere else.

## Categories (rule 7.4)

- `function`: every function of the time domain: f(t), g(t) and their sums, the unit step u(t) and u(t − a), the signal u(t − π) sin t, a window and a tent built from steps, the unknown x(t) and its solution curves, the forcing f(t) and the input of a system, the output, the convolution (f ∗ g)(t), the impulse response h(t), the function h = ℒ⁻¹{H}, the rectangular pulse φ(t), the delta δ(t) (drawn as an arrow at its point, never as a curve), the beam's deflection y(x), the PDE unknown y(x, t) drawn at a fixed time as a graph over x, the boundary data y(0, t) = C or sin t written on the axes, the flux f(t), a sawtooth, the integrand e^(−st) f(t) of the Laplace integral (a function of t drawn beside f).
- `derivative`: g′, g″, g‴ (Table 6.2), x′, x″, x‴, y′, y″, y‴, d⁴y/dx⁴ of the beam, y_t, y_x, y_xx, y_tt, y_xt of a PDE, Y′(x) and Y″(x) (the x-derivatives of the transformed function), F′(s) (Exercise 6.2.7).
- `integral`: the Laplace integral ∫₀^∞ e^(−st) f(t) dt drawn as the shaded area whose value is F(s), the convolution integral ∫₀ᵗ f(τ) g(t − τ) dτ drawn as the shaded overlap, ∫₀ᵗ f(τ) dτ of the integral rule, ∫ δ(t) f(t) dt, the unit mass ∫ φ dt = 1, a Volterra equation's integral. The words "integral", "integrate" take it where they name one of these.
- `transform`: F(s), G(s), X(s), Y(s) and Y(x), the transfer function H(s), ℒ{…} written as a value ("the transform of f"), the graph of F(s) over s in the 6.1 Sim and of ℒ{φ} over s in the pulse figure, the table's right-hand column. F must not look like f: the transform is a different kind of thing, drawn on its own s axis.
- `curve`: the wavefront t = x/α and the characteristics t = −x + C in the (x, t) plane of 6.5 (paths in the plane, not graphs over an axis).
- `region`: the first quadrant x > 0, t > 0 of the half-line problems and its two parts y = C and y = 0 either side of the wavefront (drawn as shaded sets, `data-type="region"` in the prose where the words name the region and no concept does).
- `frequency`: ω₀ of x″ + ω₀²x (Chapter 2's `natural-frequency`; its symbol and macro come from Chapter 2's rows), marked on the 6.3 and 6.4 figures where resonance is reached.

In ink: the independent variables t, τ, x and the frequency variable s (`RULES.md`, Types); the operators ℒ and ℒ⁻¹, L, d/dt; arbitrary and model constants A, B, C, M, c, a, b, P, α, m, c, k, E, I, L, F (the force on the beam) and the integration constants C₁, C₂ of Example 6.4.3; ω of Table 6.1 (a constant there); n, h in "lim h → ∞"; the pulse's a, b, M; Γ, erf, erfc (Appendix B); i.

## Referents (rule 7.3)

| Section | Figure | Referents |
|---|---|---|
| 6.1 | `sim-laplace-area` | none: one f, its damped integrand and its transform are told apart by their axes and labels |
| 6.2 | `sim-heaviside` (Figure 6.1) | none |
| 6.2 | `sim-rocket` (Figure 6.2) | none: the thrust f(t) and the displacement x(t) both wear `function`, the thrust on its own strip above the graph, as 2.6's force beside its displacement |
| 6.3 | `sim-convolution` | `conv-f` and `conv-g`, the two functions convolved (f(τ) fixed, g(t − τ) flipped and sliding), the curves and their labels in referent colours; their product's area wears `integral` and the result f ∗ g keeps `function` |
| 6.4 | `sim-pulse` (Figure 6.3) | none |
| 6.4 | `sim-impulse-response` | `input` (the forcing f, chopped into slices) and `impulse` (the impulse response h and each slice's scaled, delayed copy of it); the output x = f ∗ h keeps `function` |
| 6.4 | `sim-beam` (Figure 6.4) | none |
| 6.5 | `sim-goo-river` (Figures 6.5 + 6.6) | none |
| 6.5 | `sim-ill-posed` (Figure 6.7) | none |

The referents f, g and h carry no subscript, so their symbols stay in `function` in the prose and readouts and only their curves and curve labels wear the referent colours (rule 7's split applies to subscripts); the text marks "f", "g", "the two functions", "the input", "the impulse response" with `data-ref` within the figures' blocks. A decision for Chen is noted in `build-status.md`.
