# Chapter 6 build status

Task `prep1-ch06` (prep stage one), port 8107, scratch `/tmp/claude-0/-home-user-OmniStax/fa1756e3-ffc3-5115-96ae-60401395d3dc/scratch/prep1-ch06/` (`answers.py`: the SymPy and numeric checks of every exercise answer named in the plans; `check_rows.py`: the staged rows checked for shape, id clashes, edges, Hasse reduction and cycles).

## Done (2026-10-19)
- Sources read whole (6.1–6.5); the seven figure images copied to `media/ch06/` under the book's names.
- `exploration.md`, `config.md` (agreed by carry-over), `COLOR.md`.
- `chapter.json`: id, dir, title, no intro, five sections with their `\label`s as `module`, 65 draft variables rows (type on every row that names no Chapter 6 concept; `concept` only where the symbol names one of this chapter's: F → `laplace-transform`, u → `unit-step-function`, H → `transfer-function`, f∗g → `convolution`, φ → `rectangular-pulse`, δ → `dirac-delta-function`, h → `impulse-response`; 6.4's F set to ink with `redefines`).
- `book-rows.json`: 21 new symbols with macros, 52 concepts (16 · 11 · 6 · 13 · 6 by section; 29 definitions, 15 results, 4 ideas, 7 skills, 1 axiom), 68 forms (the nine boxed formulas, Tables 6.1 and 6.2, the theorems, the named equations), 86 prereq edges, Hasse-reduced and acyclic against the merged book (checked by `check_rows.py`).
- `plan.md` for 6.1–6.5: 9 figures (0 faithful copies, 5 still, 4 moving, 0 3D), 5 derivations, every exercise with its expected answer (48 unkeyed computed and checked at prep; 22 keyed verified, none contradicts the book).

## In progress
- Nothing; stage one is complete. Not run: `ost merge diffyqs 6` (waits for Chapters 1–5).

## Next (stage two, after Chapter 5 merges)
- `ost meanings diffyqs <sym>` for every variables row: f, g, F, u, x, y and their derivatives are shared with Chapters 0–5 (reuse the earlier meaning where it is the same quantity; F and u carry new meanings here, 6.4's F a third); then `ost merge diffyqs 6` and `concept` links on the rows whose symbol names a concept (`dependent-variable` for x and y as Chapter 1's rows do, if that convention holds), `ost set` for anchors from each plan's "Wanted at chapter level".
- Re-check the cross-chapter prereq ids used (below) against the merged book; ω₀ and ω: no symbol row is staged here (Chapter 2 is expected to stage `ω_0` for `natural-frequency`; if its key differs, fix the 6.2–6.4 plans' macro name, and add the 6.2–6.4 variables rows for ω₀).
- The sheet `sheets/laplace-table.json` exists (id `laplace-table`): the 6.1 and 6.5 links are `/diffyqs/sheets/laplace-table/`.

## Cross-chapter prereq ids used in `book-rows.json`
- Chapter 0 (merged): `constant-coefficient-equation`, `linear-differential-equation`, `solving-an-initial-value-problem`, `partial-differential-equation`.
- Chapter 1 (merged): `transport-equation`, `method-of-characteristics`.
- Chapter 2 (from its plans; `ch02/book-rows.json` did not exist at prep): `mass-spring-system` (2.4), `linear-operator` (2.1), `natural-frequency` (2.4). Reinforced only, no edge: `resonance`, `rlc-series-circuit`, `steady-state-solution`, `undamped-forced-motion`.
- Chapter 4 (`ch04/book-rows.json`, read late): `heat-equation` (4.6). Reinforced only: `fourier-series`, `wave-equation`, `separation-of-variables-for-pdes`.
- Chapter 5 (`ch05/book-rows.json`, read late): `hinged-end-of-a-beam` (5.2).
- Chapter 3: none.

## Decisions Chen must hear
- `laplace-transform` reuses Calculus 7.7's id and is declared here with type `transform` (Calculus types it `integral`); `partial-fraction-decomposition` reuses Calculus 7.4's id as a `skill` here ("method of partial fractions").
- Table 6.1's eleven entries and Table 6.2's three rows are staged as forms (`laplace-transform-table`, `transform-of-a-derivative`) so the formulas list carries the tables; the tables also stay printed in the text.
- Example 6.3.3 cites "Table 6.2" for entries that are in Table 6.1: treated as a book error under rule 13 (marker, AI-marked footnote, the link to Table 6.1).
- Exercise 6.1.14 is ambiguous (sin(ω(t − a)) as written, or switched on at a); the AI solution gives the literal reading and names the other.
- Sims: both 3Blue1Brown survivors are built (6.1's Laplace area, kept though the survey called it weak, as the section's only picture and the one place "exists for s > c" is seen; 6.3's sliding convolution). One Sim of the plan's own, `sim-impulse-response` (6.4): the response to any input built as a sum of launched impulse responses. Figures 6.5 + 6.6 fold into `sim-goo-river` (moving); Figure 6.7 is a still Sim under a slider rather than a faithful copy. Example 6.5.3 (heat flux) gets no figure.
- Referents without subscripts: f and g in `sim-convolution`, the input and the impulse response in `sim-impulse-response` wear referent colours on their curves and labels while their letters stay in `function` (rule 7 splits only subscripts). If Chen would rather have no referents there, the curves are told apart by label and weight and the rows go.
- 6.5's `wavefront` is a concept of its own (type `curve`); Chapter 4's 4.8 stages `wavefronts` (d'Alembert's). Not linked: the book does not connect them; an edge can be added at stage two if wanted.
- `euler-bernoulli-equation` (static, EI y⁗ = F(x)) is kept apart from Chapter 5's `beam-equation` (the vibrating beam); `three-point-bending` rests on 5.2's `hinged-end-of-a-beam`.
- Five derivations: `drv-transform-of-derivatives` and `drv-periodic-transform` (6.2, printed blocks), `drv-convolution-theorem` (6.3, the proof the book skips, score 7, a Calculus 15.2 fact for the swapped order of integration), `drv-forced-oscillation-convolution` (6.3, replacing Example 6.3.4's worked lines, eyebrow "Example 6.3.4 ·"), `drv-impulse-response` (6.4, the printed convolution argument). Example 6.5.1 stays prose (the method's first instance, score 3).
- Terms only in exercises ("differentiation of the transform", 6.2.7) are not concepts, as Chapters 1 and 2 decided; "convection equation" (6.5) marks Chapter 1's `transport-equation` without a new row.
