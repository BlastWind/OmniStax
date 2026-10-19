# Appendix A build status

Task `prep1-appA` (prep stage one, 2026-10-19), port 8110, scratch `/tmp/claude-0/-home-user-OmniStax/fa1756e3-ffc3-5115-96ae-60401395d3dc/scratch/prep1-appA/` (`answers.py` checks every exercise answer with SymPy; `build_rows.py` writes and checks `chapter.json` and `book-rows.json`).

## Done
- Converted (before this task); every `source.md` read whole. The seven figure SVGs copied to `media/appA/` (`linalg-vecarrow`, `linalg-vecadd`, `linalg-vecsub`, `linalg-vecscale`, `vec-angle`, `vec-orthoproj`, `linalg-imagesquare`).
- `exploration.md`, `config.md` (carry-over from `ch00/config.md`), `COLOR.md`.
- `chapter.json`: id `A`, dir `appA`, title "Linear algebra", six sections (module = `\label`), 53 variables rows, no anchors (set by the section builds).
- `book-rows.json`: 19 symbols, 69 concepts (A.1 13, A.2 11, A.3 20, A.4 10, A.5 10, A.6 5) carrying 62 forms, 120 Hasse-reduced edges (checked by the script), no types.
- `plan.md` for A.1–A.6: 9 figures (Figure A.1 + A.2 + A.3 + A.4 folded, Figures A.5, A.6, A.7, five Sims), 7 derivations to build, 80 exercises (48 unkeyed with expected answers computed, 32 keyed and confirmed).

## In progress
- Nothing: prep stage one is complete. Not done here, by the brief: `ost merge diffyqs A` (waits for Chapters 1–8), the variables' `concept` links are already written (every row of a symbol that names a concept carries it; `ost set` after the merge only if the checker objects), anchors, sections, the chapter pass.

## Next
1. After Chapter 8 is merged: drop from `book-rows.json` `symbols` every sym that `ost rows diffyqs symbols` already lists (Chapter 3 is expected to stage `A`, `B`, `C`, `I`, `x_vec`, `b_vec`, `e_vec`; the merge refuses a symbol another chapter owns), check that the cross-chapter prereq ids below exist (`ost rows diffyqs concepts --where id=<id>`), then `ost merge diffyqs A`.
2. After the merge: the forms on Chapter 3's and Chapter 2's concepts that the plans' "Wanted at chapter level" list (`determinant` ← `eq-det-1x1`, `eq-det-2x2`; `cofactor-expansion` ← `eq-cofactor-first-row`, `eq-cofactor-column`; `linear-combination` ← `eq-linear-combination-of-vectors`), each after `ost rows diffyqs forms --where concept=<id>` shows no duplicate.
3. Sections A.1 → A.6 per their plans, then the chapter pass.

## Cross-chapter prereq ids used in `concept_prereqs` (must exist at merge time)
Chapter 3 (3.2 unless noted): `matrix`, `vector`, `scalar`, `square-matrix`, `matrix-addition`, `scalar-multiplication-of-a-matrix`, `matrix-product`, `dot-product`, `transpose`, `matrix-inverse`, `invertible-matrix`, `determinant-as-area-scale`, `cofactor-expansion`, `determinant-of-a-product`, `invertibility-and-the-determinant`, `augmented-matrix`, `elementary-row-operations`, `leading-entry`, `reduced-row-echelon-form`, `free-variable`, `inconsistent-system`, `row-reduction`, `computing-a-matrix-inverse`. Chapter 2 (2.1): `linear-combination`, `linear-operator`. Concept ids the plans reuse in coverage without an edge: 3.2's `matrix-entry`, `row-vector`, `identity-matrix`, `rules-of-matrix-algebra`, `determinant`, `inverse-of-a-2x2-matrix`; 3.3's `vector-valued-function`; 2.1's `linear-independence`.

## The tools and a lettered chapter (tested read-only 2026-10-19)
- `omnistax-content/tools/ost.py`: `CHAPTER_DIR = re.compile(r"ch\d\d|app[A-Z]")` and `chapter_dir_of` accept `A`, `appA` and `A.3` (the brief's claim that it accepts only `chNN` is out of date). Before `appA/chapter.json` existed, `ost rows diffyqs variables --chapter appA` printed `ost: no omnistax-content/Differential Equations for Engineers/appA/chapter.json` and exited 1; `ost show diffyqs A` printed the same line and exited 0 (an exit code worth fixing). With the file written, `ost rows diffyqs variables --chapter appA`, `ost rows diffyqs sections --chapter A`, `ost show diffyqs A` and `ost meanings diffyqs S` all work.
- `tools/mergebook.py`: `chapter_number` accepts `app([A-Z])` (sorting it as 100 + the letter's code, after every `chNN`) and `merge` checks `chapter.json`'s `dir` equals `appA`; `ost merge diffyqs A` is expected to work once the chapters before it are merged. Nothing in the tools needs a fix for this chapter; the only failure was the missing file.
- Not tested: the app's build of `/diffyqs/appA/A.M/` (no section is built); `omnistax-web/src/lib/content` has no `ch\d\d` pattern, so nothing is expected to object.

## Decisions Chen must hear
- The book-level `exploration.md` counts "112 boxed formulas, 62 of them in Appendix A": the appendix's 62 are `\mybxsm` pivot marks on single matrix entries (A.3's eliminations, Example A.3.1, Example A.4.5), not formulas. The appendix has no boxed formula; its Equations and formulas list is the equations that state its definitions and theorems (config 12). The book-level count of boxed results is 50.
- Appendix A reuses Chapter 3's ids for everything 3.2–3.3 already define (matrix, vector, dot product, determinant, cofactor expansion, inverse, augmented matrix, row operations, echelon form, free variable, …) and Chapter 2's `linear-combination`, `linear-operator`; its pages mark those `reinforces`. Calculus ids are kept for the shared vector concepts (magnitude, addition, difference, scaling, unit vector, standard basis vectors, angle, orthogonal, projection, area of a parallelogram). `linear-independence-of-vectors` is new (Chapter 2's `linear-independence` is of functions, 3.3's of vector-valued functions).
- A linear mapping F wears `matrix` (the section identifies the two); a subspace, kernel, span, row space and column space wear `region`; no new type.
- Figures: all 2D and still (no idea in the appendix has a clock). Figures A.1–A.4 fold into one figure with the operation as a choice that resets the vectors to each book picture's numbers. Figure A.7 reuses the mechanism of 3.2's `sim-determinant-area` with the book's corner arrows added. Five Sims (A.1 matrix mapping, A.2 composition, A.3 system of lines, A.4 rank–nullity with the Fredholm alternative, A.5 Gram–Schmidt), the three proposed in `$BOOK/exploration.md` among them; A.5's Gram–Schmidt and projection figures take plane defaults since the book's examples are in ℝ³.
- A.4's `sim-rank-nullity` uses a choice of three matrices (rank 2, 1, 0) rather than four entry sliders, to keep within four sliders beside the dragged b⃗.
- A book error: the display solving for x⃗₁ in A.3 ("Linear independence and rank") writes "− (−α₃/α₁)x⃗₃" where the sign before the term should be +; kept as printed with a correction footnote (root rule 13).
- The Fredholm argument of A.4 scores 4 under rule 29.1 but is a chain of sentences about dimensions, not equations; not built as a derivation.
- Every keyed answer of the appendix agrees with SymPy; no keyed correction is needed.
