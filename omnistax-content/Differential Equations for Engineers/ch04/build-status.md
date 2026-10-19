# Chapter 4 build status

Task `prep1-ch04` (prep stage one), port 8105, scratch `/tmp/claude-0/-home-user-OmniStax/fa1756e3-ffc3-5115-96ae-60401395d3dc/scratch/prep1-ch04/` (the table generator `rows.py` with its Hasse reduction and checks, the answer script `answers.py` with its output `answers.out`).

## Done (2026-10-19, stage one)

- Sources read whole (4.1–4.10). The 35 figure images copied (never moved) from `media/` into `media/ch04/` under the book's names.
- `exploration.md`, `config.md` (carry-over, status agreed by carry-over), `COLOR.md`.
- `chapter.json`: id 4, dir ch04, title, no intro, ten sections with `module` = the `\label` and `slug` empty; 146 variables rows drafted with `type`, `meaning`, `unit` (y of the whirling string, x and F of 4.5) and `redefines`, no `concept` and no `anchor` yet.
- `book-rows.json` staged, not merged: 46 symbols with `\k` macros, 86 concepts (44 definitions, 30 results, 6 ideas, 6 skills; 4.1 12, 4.2 16, 4.3 9, 4.4 9, 4.5 3, 4.6 13, 4.7 7, 4.8 3, 4.9 8, 4.10 6), 89 forms (the boxed formulas, the theorems' forms, the named equations), 151 prereq edges after the mechanical Hasse reduction against the merged Chapter 0–1 edges (20 redundant edges dropped). `rows.py` asserts: unique ids, no form id, symbol or concept already in `book.json`, every prereq known, no cycle, every variables row's symbol staged, merged or in the shared list.
- `plan.md` for 4.1–4.10: 21 figures (13 still Sims or figures, 6 moving, 2 with a 2D | 3D view), 12 derivations built, the 3Blue1Brown survivors judged (all five built: coefficient areas in 4.2, the discrete rod and the decaying modes in 4.6, the partial-sum probe in 4.2's fold of 4.4–4.8, the time slice in 4.6's fold of 4.16–4.19), exercises with the expected answers computed by SymPy (`answers.out`), `## Wanted at chapter level` in every plan.

## In progress

- Nothing: stage one ends here. `ost merge diffyqs 4` has not been run.

## Next (stage two, after Chapter 3 merges)

1. Wait for `ost rows diffyqs concepts --chapter 3` to be non-empty.
2. Symbols shared with Chapters 2–3 that this chapter writes but did **not** stage (the macros the plans assume in brackets): `lambda` (\klambda), `omega` (\komega), `omega_0` (\komegazero), `x_sp` (\kxsp), `x_c` (\kxc), `x_p` (\kxp), `x_1` (\kxone), `x_2` (\kxtwo), `A` (\kA), `B` (\kB), `w` (\kw). For each: `ost rows diffyqs symbols --where sym=<key>`; where Chapters 2–3 merged it under another key or macro, rename the key in `chapter.json`'s variables and the macro in the plans and forms (`\klambda` appears in the forms' `ktex`); where none merged it, add it to `book-rows.json` `symbols`. Also `u_y` is already in `book.json` (\kuy) and is used as is.
3. Re-run `ost meanings diffyqs <sym>` for every variables row (rule 19): `f`, `g`, `F`, `T`, `P`, `u`, `x`, `y`, `v_vec`, `A`, `B`, `w` carry meanings of earlier chapters; the rows here already say `redefines` where the meaning changes within this chapter, and stage two sets it where the earlier chapter's meaning differs and the row's section is the first of the chapter.
4. Re-run the Hasse reduction (`rows.py`) once Chapters 2–3's edges are in `book.json`, since the reduction here saw only Chapter 0–1 edges; re-check every cross-chapter prereq id against the merged ids (the list below), then `ost merge diffyqs 4`, then `ost check diffyqs`.
5. After the merge: set `concept` on each variables row whose symbol names a concept (λ → `eigenvalue-of-a-boundary-value-problem`, x_k → `eigenfunction`, F in 4.2 → `periodic-extension`, a_n → `fourier-coefficients`, F_odd → `odd-periodic-extension`, F_even → `even-periodic-extension`, P in 4.10 → `poisson-kernel`, u in 4.9 → `steady-state-temperature`, f in 4.2 → `periodic-function`), remove the `type` overrides that then repeat the concept's type, and add the form `eq-wave-characteristic-coordinates` on 1.9's `characteristic-coordinates` (`4.8/plan.md`, Wanted).
6. Sections 4.1 → 4.10, then the chapter pass.

Cross-chapter prereq ids used (29; Chapter 0–1 ids are merged, Chapter 2–3 ids come from their plans and may change): `antiderivative`, `characteristic-coordinates`, `characteristic-curve`, `complex-exponential`, `dot-product`, `eigenvalue`, `eigenvector`, `eulers-formula`, `four-fundamental-equations`, `general-solution`, `hyperbolic-functions`, `initial-value`, `linear-differential-equation`, `linear-independence`, `linear-operator`, `mass-spring-system`, `method-of-undetermined-coefficients`, `newtons-second-law`, `nonhomogeneous-linear-equation`, `partial-differential-equation`, `pde-initial-condition`, `practical-resonance`, `resonance`, `second-order-differential-equation`, `solution-for-complex-conjugate-roots`, `steady-state-solution`, `superposition-principle`, `transpose`, `undamped-forced-motion`.

## Decisions Chen must hear

- Calculus ids reused for concepts the book states again: `periodic-function`, `odd-function`, `even-function`, `integrals-of-even-and-odd-functions`, `one-sided-limit`, `sum-of-a-geometric-series`, `polar-coordinate-system`, `laplaces-equation`, `laplace-operator`, `harmonic-function`. The heat, wave and Laplace equations are introduced where the book defines them (4.6, 4.7, 4.9), not in 4.6's opening paragraph that names all three.
- Not concepts: the complex Fourier series (Exercise 4.2.9), steady-state temperature's italic in Exercise 4.6.7 (the concept is 4.9's), the Cauchy–Euler equation of 4.10 (2.1's exercise), the index joke "tedious".
- Surfaces: the heat surfaces 4.17 and 4.19 and the wave surface 4.22 are replaced by the moving profile with the time slice and the mode bars (book `RULES.md`), no 3D; the steady states 4.25–4.27 get a 2D | 3D view with the heat map the default. The `polarcoords` image is dropped (Calculus 11.3 linked; the polar point is drawn in the Poisson figure).
- Folds: 4.1 + 4.2; 4.4 + 4.5 + 4.6 + 4.7 + 4.8 (one partial-sum figure with a choice of wave, the probe and a named zoom covering Gibbs); 4.9 + 4.10; 4.16 + 4.17 + 4.18 + 4.19; 4.20 + 4.21 + 4.22 + 4.23; 4.26 + 4.27.
- 3Blue1Brown survivors: all five of this chapter built in the form the plans state (none dropped). The weak one (4.2 coefficient areas) is built because the coefficient integral is the one idea of the section the book states but never draws.
- Sims beyond the book's figures: `sim-eigenvalue-hunt`, `sim-orthogonality` (4.1), `sim-fourier-coefficient` (4.2), `sim-term-by-term` (4.3), `sim-sine-cosine-series` (4.4), `sim-harmonic-resonance` (4.5), `sim-discrete-rod` (4.6, carrying Figure 4.15's number as the wire's scene), `sim-poisson-kernel` (4.10).
- The whirling-string equation's derivation is not built: the book skips it whole and every fact (centripetal acceleration, the tension's transverse component) would be invented (rule 29.3). The whirling-string figure's pop-out amount B = 0.3 m is a drawing choice, said in the caption, since the book says B cannot be computed; its L = 2, ρ = 0.1, T = 3 come from Exercise 4.1.101.
- `sim-plucked-string` draws the string's height ×5 and says so in the readout (rule 28.4); it uses figlib's guitar.
- Keyed answers spot-checked against SymPy (4.2.102, 4.2.104, 4.3.101, 4.4.102, 4.5.104, 4.8.102, 4.8.103, 4.10.103): all agree; no correction note foreseen.
- Figure count: the book's chapter table says 32 figures for Chapter 4; the sources carry 27 numbered figures (29 images) and 6 unnumbered images, 35 files.
