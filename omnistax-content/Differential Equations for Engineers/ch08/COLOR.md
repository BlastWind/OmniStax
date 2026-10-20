# Chapter 8 colour plan

Prepared 2026-10-19 with `config.md`. It refines the book's `COLOR.md` for what this chapter draws; root rules 7 and 22 hold, and nothing here invents a hue.

## Rule 7's four ways

1. **Facts.** None. The book's plots are black on white; the sign of the divergence in 8.4's Sim is told by fill and hatching in the `region` hue, not by a scale, and no false-colour map is drawn.
2. **Conventions.** None.
3. **Referents.** The two populations of 8.3 (`hares`, `foxes`: two curves on one time graph, the book's "thinner line with taller peaks" and the thick one) and the two Duffing solutions of 8.5 (`path-1`, `path-2`: two trajectories in one phase plane and two curves on one graph). Everywhere else a figure draws one solution, one trajectory or one point, told by its label, and keeps its category.
4. **Categories.**

- `function`: the unknowns x(t), y(t), z(t) of a system and their solutions; the shifted u, v of a linearization; the right sides f(x, y), g(x, y) and the f(x) of a conservative equation; θ(t) of the pendulum; the hare and fox populations as functions of t on a time graph; x(t) of the Van der Pol, Duffing and Lorenz solutions. On a time graph a solution is a `function` curve; on a phase plane the same solution is a `curve` (a trajectory): the two readings are the two panes of 8.9, 8.10, 8.12 and 8.15 + 8.16.
- `derivative`: x′, y′, z′, x″, θ′, θ″, the angular velocity ω = θ′ of 8.3 (the vertical axis of the pendulum's phase plane), dy/dx of the chain-rule trick, the partial derivatives ∂f/∂x, ∂f/∂y, ∂g/∂x, ∂g/∂y that fill the Jacobian and make the divergence.
- `point`: a critical point (stable filled, unstable hollow: a center or sink filled, a saddle or source hollow, as the book's `COLOR.md` says), an initial point the reader drags, the critical points (kπ, 0) of the pendulum, (100, 40) of the predator–prey example, the three critical points of the Lorenz system in the exercise.
- `eigenvalue`: λ of the Jacobian at a critical point, ±i√(ad), ±√(−f′(x)), written in readouts and headlines.
- `matrix`: the Jacobian matrix J and each Jacobian written out.
- `vector-field`: the arrows of every phase portrait (symbolic, never animated).
- `curve`: a trajectory in a phase plane, the moving state dot that rides it, a closed trajectory, a limit cycle, a periodic orbit, a level curve of the Hamiltonian or of the constant of motion, the Lorenz trajectory in space, the two Duffing trajectories before their referent colours apply on the shared figure.
- `frequency`: the forcing frequency ω and ω₀ of 8.5's Duffing and forced-oscillator equations (8.3's ω is a `derivative`: the two meanings are two variables rows with `redefines`).
- `error`: the relative error (T − T_linear)/T of Figure 8.8, a curve of its own.
- `region`: the region R of the two theorems of 8.4, the simply connected region, the sign regions of the divergence Sim and the hole cut out in Example 8.4.5.

In ink: the independent variable t; x₀, y₀, θ₀, ω₀ as the numbers of an initial condition (not the frequency ω₀ of 8.5); the arbitrary constant C of a Hamiltonian and the constant of motion C; the parameters a, b, c, d, g, L, μ, h, γ of a model and the Duffing constants a, b, c, C, ω's companions; p, F₀, m of the forced oscillator; the period T and T_linear of the pendulum (numbers) and the period P of a periodic orbit; ε, the radius of a stability definition; the index k; the entries of a numerical Jacobian once written as numbers; the Poincaré strobe times 2πk and the phase shift φ.

## Referents, per figure

| Section | Figure | Referents |
|---|---|---|
| 8.1 | `sim-portrait-x2` (Figure 8.1), `sim-linearizations` (Figure 8.2) | none: one dragged trajectory; the two critical points are told by a choice and their labels |
| 8.2 | `sim-saddle-sink` (8.3), `sim-saddle-spiral` (8.4), `sim-false-center` (8.5), `sim-energy-levels` (Sim) | none: one trajectory or one level curve at a time, the book's others faint |
| 8.3 | `sim-pendulum-phase` (8.6 + 8.7) | none: the bob and the phase point are one thing seen two ways (manim-style item 2); its trajectory `curve`, the bob and its rod ink |
| 8.3 | `sim-period` (8.8) | none: T solid and T_linear dashed, both ink numbers over θ₀, the error in `error` |
| 8.3 | `sim-predator-prey` (8.9) | `hares`, `foxes` on the time graph; the single trajectory on the portrait keeps `curve`; the symbols x and y have no subscript and are not split |
| 8.4 | `sim-van-der-pol` (8.10), `sim-limit-cycle-cases` (8.11), `sim-divergence-sign` (Sim) | none: the three book starts of 8.11 are told by their labelled starting dots |
| 8.5 | `sim-duffing-divergence` (8.12) | `path-1` (from (2, 3)), `path-2` (from (2, 2.9)), on both panes |
| 8.5 | `fig-duffing-long` (8.13), `sim-poincare-section` (8.14), `sim-lorenz` (8.15 + 8.16) | none |

The text marks every reference to the hares, the foxes and the two Duffing solutions with `data-ref`, pronouns included ("they", "the two trajectories" as `data-ref="path-1 path-2"`).
