# Chapter 8 build status (task prep1-ch08, port 8109)

Scratch: /tmp/claude-0/-home-user-OmniStax/fa1756e3-ffc3-5115-96ae-60401395d3dc/scratch/prep1-ch08/ (`check.py` computes every expected answer and figure number quoted in the plans; `rows.py` writes `book-rows.json` and `chapter.json` and Hasse-reduces the edges).

## Done (prep stage one, 2026-10-19)

- Sources read whole (converted before); the chapter's 25 images copied flat into `media/ch08/` under the book's file names (17 numbered figures, `mv-pend`, `chaos-pend`, six exercise fields).
- `exploration.md`, `config.md` (carry-over, lines 1, 5, 6, 8, 10, 12–18, 20, 21 chapter-specific), `COLOR.md`.
- `chapter.json`: id 8, five sections with their `\label` modules, 57 variables rows (type set on every row that names no merged concept; `concept` set where the id is merged or the chapter's own).
- `book-rows.json`: 6 symbols, 49 concepts (8.1: 6, 8.2: 13, 8.3: 8, 8.4: 12, 8.5: 10), 41 forms, 88 prereq edges, Hasse-reduced against the merged graph of Chapters 0–1 and the chapter's own edges (two edges dropped: `stable-center → stable-critical-point-of-a-system` via `asymptotically-stable-critical-point`, `hamiltonian → potential-function` via `exact-equation`).
- `plan.md` for 8.1–8.5: 15 figures (7 required transforms moving, 1 required 3D, 1 required still live copy, 2 Sims built, plus the kept sketches and exercise images), 4 derivations built, every exercise with its expected answer computed by SymPy or numerics.

## In progress

Nothing; stage one ends here.

## Next (stage two, after Chapter 7 is merged)

1. `ost meanings diffyqs <sym>` for every variables row (x, y, f, g, u, v, θ, θ′, θ″, ω, ω₀, λ, J, T, g, P, p, R, z, dy/dx, the partials): reuse the earlier meaning where the quantity is the same, keep `redefines` where the book gives a new one (set now on f, g, u, v in 8.1; f in 8.2; ω, g, T, x, y in 8.3; R, P in 8.4; ω, z, p in 8.5).
2. Re-check every cross-chapter prereq id against the merged tables: `autonomous-system`, `behavior-of-planar-linear-systems`, `center`, `characteristic-equation-of-a-matrix`, `constant-coefficient-system`, `converting-to-a-first-order-system`, `initial-condition-for-a-system`, `invertible-matrix`, `matrix`, `picards-theorem-for-systems`, `trajectory` (Chapter 3, from its plans; its `book-rows.json` did not exist at stage one); `forced-vibrations`, `pendulum-equation`, `period`, `small-angle-approximation`, `steady-state-solution`, `transient-solution` (Chapter 2, from its plans); `equilibrium-point`, `equilibrium-solution`, `exact-equation`, `exponential-growth`, `second-order-differential-equation`, `vector-field` (merged, Chapters 0–1). Re-run the Hasse reduction once Chapters 2–7 are merged (`rows.py` does it against whatever `ost rows diffyqs concept_prereqs` returns).
3. Symbols expected from other chapters, not staged here: ω, ω₀ (Chapter 2, `\komega`, `\komegazero`), λ (Chapter 3, `\klambda`), ∂f/∂y (Chapter 1, `\kpfy`), R, z (Chapter 4, `\kR`, `\kz`). If Chapter 2 does not stage θ′, this chapter's `θ_prime` (`\kthetaprime`) stands; if it does, drop it here before merging.
4. `ost merge diffyqs 8`, then `concept` on the variables rows whose symbol names a concept: x, y, z, θ, u, v → `dependent-variable` (as Chapters 0–1 link them) unless Chapter 3 settles on another concept for a system's unknowns; J → `jacobian-matrix`; T → `period-of-the-nonlinear-pendulum`; λ → `eigenvalue` (Chapter 3); ω (8.5) and ω₀ → Chapter 2's frequency concepts if they carry them. Remove the type overrides that then equal the inherited type.
5. Anchors per the plans' `## Wanted at chapter level`; the form (8.2) stays on `poincare-bendixson-theorem`.
6. Sections 8.1 → 8.5, then the chapter pass.

## Decisions Chen must hear

- Ids: Calculus's `simply-connected-region` and `divergence` are reused; `jacobian-matrix`, `linearization-of-a-system`, `critical-point-of-a-system`, `stable-critical-point-of-a-system`, `classifying-critical-points-of-a-system` are new ids because Calculus's `jacobian` (a determinant), `linear-approximation` and `critical-point` (of a function) and Chapter 1's `stable-critical-point` and `classifying-critical-points` (one dimension) are cousins, not the same concept.
- The equation (8.1) belongs to a new definition `planar-autonomous-system` rather than to 3.1's `autonomous-system`, so no cross-chapter form is needed; (8.2) is the form of `poincare-bendixson-theorem` with its hypotheses as the condition.
- Table 8.1 is the statement of `classification-of-critical-points` (a result) and stays a table in the text, as Table 3.1 did.
- The Hamiltonian and the constant of motion carry no symbol (the book writes them as "= C", an arbitrary constant in ink); the pendulum's period T is a number in ink and the concept's symbol.
- Both 3Blue1Brown survivors are built: Figures 8.6 + 8.7 fold into `sim-pendulum-phase` (the bob and its phase point, with θ₀, ω₀ and a friction slider μ whose zero is the book's case; the separatrix ω₀ = √(2(1 + cos θ₀)) a dashed special); Figure 8.12 becomes `sim-duffing-divergence` with the start gap δ on a slider (the separation time grows only logarithmically as δ shrinks: 12.3, 18.6, 24.9 for δ = 0.1, 0.01, 0.001). Figure 8.13 is a still live copy, not folded: a 100-unit record has no motion worth running.
- Rule-15 Sims built: `sim-energy-levels` (8.2, the potential well over the portrait with C on a slider, opening at C = 1/6 through the saddle) and `sim-divergence-sign` (8.4, the sign regions of the divergence with the trapping line of Example 8.4.4). Dropped: a double-pendulum Sim (no equations on the page), a chaos-game Sim (serves Exercise 8.5.2), a C(x, y) surface for the predator–prey constant, a trapping-annulus figure for Poincaré–Bendixson.
- The Lorenz figure (8.15 + 8.16) is mathematical 3D with a free orbit and the spin button offered; the two sliders are x₀ and z₀ with y₀ = x₀.
- The predator–prey window is x 0–300, y 0–220 (the book's y 0–100 plus room for the text's 200-fox experiment, which drives the hares to 1.27).
- 8.1.102's book answer "1) is c), 2) is a), 3) is b)" is read as system a) ↔ picture c), b) ↔ a), c) ↔ b) (checked against the fields); the card keeps the book's words and adds an AI-marked reading, not a correction footnote.
- The pendulum sketch `mv-pend` stays as the book's image at the head of 8.1 and is an original of 8.3's fold; `chaos-pend` stays as an image.
- Exercise-only terms (damped nonlinear pendulum equation, Sierpinski triangle) and the indexed joke "tedious" are not concepts.
