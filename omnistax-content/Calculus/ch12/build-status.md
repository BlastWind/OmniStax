# Chapter 12 build status

Task ch12, port 8131, scratch /home/flober/.claude/jobs/a080ae38/tmp/ch12/ (tools copied from ch11: `draft.py` source → draft; `enrich.py` (+ VEC bold-vector macros) + `<sec>/conf.py`; `<sec>/finish.py` → text.html (via `lib/figs.py`); `buildex.py` + `<sec>/spec.py`; `mksection.py` + `<sec>/sec.py` → section.json; `mkrows.py` → book-rows.json (do not rerun: anchors were set after it); `anchors.sh`; `shoot.py <sec>`).

## Done
- Prep: exploration.md, config.md, COLOR.md; chapter.json (7 sections, 64 variables, all anchored); book-rows.json merged (90 concepts, 133 edges, 19 symbols), all forms anchored.
- figlib: `F.space3d(d, { locked: true })` (painted opening view, no WebGL) with a test and a doc line; the painted view honours `fit`.
- Plans: intro, 12.1–12.7.
- intro, 12.1–12.7 built; review exercises placed (`--with-review`); `ost check` clean for ch12.
- Chapter pass: corrections, config.md updated, log-pass.md written.

## In progress
- Playwright light + dark over every page; one fix pass; `ost log calculus 12`.

## Decisions so far
- Bold vectors are new symbol rows (`u_vec` …) so they wear `vector`; exercise prompts plain LaTeX.
- Dot product, scalar projection, triple scalar product, work, magnitudes, distances stay ink (scalars); cross product wears `vector`; determinants `matrix`.
- Concept id `cylindrical-surface` (12.6), since `cylinder` is 6.2's solid.
- Vectors of one figure (v and w) wear `vector` both, told apart by names, not as referents (a refinement of the book COLOR.md's "the vectors u and v of one sum" — Chen's call).
- 3D: live `F.space3d` only where turning is the lesson (≤ 5 per page); still copies and slider figures that need no turning use `locked: true`.
- 19 numbered equations (12.1–12.19), every classless `<equation>`.
- 12.1: folds 12.5+12.6, 12.7+12.8+12.9, 12.12+12.14, 12.13+12.15+12.16, 12.17+12.20, 12.18+12.19; correction: Example 12.5 cites Figure 12.15 for 12.14. Exercise 21 (key gives only a.) carries a whole AI solution; 23/37 "Answers may vary" → AI; 41, 24, CP 12.6 AI.
- 12.2: Example 12.20's two images replaced by `sim-forward-pass` (Sim, originals listed); Figure 12.43 (credit-only exercise photo) stays an image in exercise 117 with its credit, no figure row. Plan's w in sim-vector-in-space is ⟨1, −2, 2⟩.
- 12.3: correction "rearranges Equation 12.3" (it is 12.4); Figure 12.52 (checkpoint's handcart) moved into the text before Checkpoint 12.29 as a still copy; review 426 AI answer (true for nonzero vectors); currency escaped.
- 12.4: Figure 12.53 split out as a still copy (one box cannot hold both examples' products); hand-rule Sim on Example 12.32 only; `sim-minors` extra Sim; corrections: Example 12.35 / CP 12.34 cite Properties for the magnitude theorem, review 449 key in joules. Review 427 belongs here (it needs the cross product).
- 12.5: extra Sim sliding P along L (invariant height); review 425, 435, 437.
- 12.6: `sim-reflector` extra Sim (opener answered); 12.87 + 12.88 as a choice of six surfaces.
- 12.7: corrections "Figure 12.96 also shows" (12.98) and exercise 369's θ.
