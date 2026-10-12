# Chapter 15 build status

Agent: chapter 15 (brief /home/flober/.claude/jobs/a080ae38/briefs/chapter.md, N = 15, port 8134). Scratch /home/flober/.claude/jobs/a080ae38/tmp/ch15/ (ch13's pipeline: draft.py, enrich.py, buildex.py, mksection.py, lib/rep.py, shoot.py, build.sh; chapter.py and rows.py for the prep; per section <sec>/conf.py, finish.py, spec.py, sec.py).

## Done
- Prep: sources converted (were present); media copied to media/ch15 (166 files); exploration.md, config.md, COLOR.md; chapter.json (71 variables rows); book-rows.json merged after Chapter 14's (56 concepts, 103 edges, 12 symbols, 70 forms; Hasse clean).

- intro built (photo, two paragraphs).
- 15.1 built (6 figures: 3 live 3D, 2 locked still copies, 2 photos; extra Sim sim-average-height), checked light.
- 15.2 built (12 figures, 1 live 3D, 1 locked), checked light.
- 15.3 built (11 figures, 1 live 3D, 3 locked), checked light.
- 15.4, 15.5, 15.6, 15.7 built, checked light.
- Chapter pass done 2026-10-13: every form and variables row anchored (all resolve), Figures 15.1–15.83 each placed once, no exercise twice, KaTeX clean (2549 snippets), Greek Ε and en-dash π in 15.2/15.5 exercises fixed; Playwright light and dark on intro and 15.1–15.7 (no console errors, no KaTeX errors, every Sim has a canvas); ost check: no ch15 errors; npm test 925/926 (the one failure is 16.x review rows pointing to 16.8, chapter 16's agent); astro check 0 errors; config.md items 28–30; log-pass.md appended as LOG Pass 18.

## Next
- Nothing; awaiting the orchestrator's commit.

## Decisions so far
- Exercise numbers count the material-set exercises, as openstax.org does (15.4 starts at 181; review 416–442).
- Types: integral is the main type (∬, ∭, Riemann boxes, V, A, m, moments, I's); region for R, D, E, G, S, Q, B; surface for graphs and bounding surfaces; function for f, g₁ …, ρ, T; matrix for J; ρ in spherical coordinates ink.
- Referents only where the text names two curves apart (Example 15.10's √x and x³, D₁–D₃ of Example 15.14, Example 15.34's circle and cardioid); generic boundary curves told apart by labels.
- 3D: live space3d where turning is the lesson, locked view for an example's still copy; ≤ 5 live scenes a page.
- 15.1: Figures 15.2–15.4 folded (stand-in surface), 15.5+15.6 folded (Example 15.1's signed boxes; Checkpoint 15.1's upper-left choice not offered); tall surfaces drawn with z shortened, ticks in true units; extra Sim sim-average-height (lid at f_ave = 18); 14 proofs/“show” exercises kept with AI approaches; correction e17 (limit printed l).
- 15.2: folds 15.13+15.14+15.15 (Example 15.11's region, referents curve-root/curve-cube), 15.16+15.17, 15.19+15.20 (referents piece-d1..d3); Figure 15.12 as 3D boxes of the extension g; Figure 15.27 a Sim with the time budget t; 72 left out (its region is of both types); 86/88 left out (show + evaluate); corrections ex13, ex14 ×2, ex18, ex22, ex23, cp10 hint, cp16 hint, e73 key (D is Type I).
- 15.3: fold 15.29+15.34 (polar boxes under Example 15.29's paraboloid); stand-in regions for 15.28, 15.32; cone with a and h sliders (Example 15.32's Analysis); referents circle-3cos/cardioid-1cos; corrections ex30 region θ-range and antiderivative coefficient.
- 15.4: subboxes Sim, fold 15.42+15.43+15.44 (solid over D of Type I/II), pyramid sections, three projections; corrections: theorem's projection plane, xz-plane, six orders.
- 15.5: coordinate points, cylindrical box, constant surfaces (choice), spherical volume element; examples locked copies; balloon model and burner column still copies; corrections ex46, ex48, ex49, ex52, ex53, cp29, cp30, e273–e275.
- 15.6: sim-lamina fold 15.64–15.67; still copies 15.68, 15.69; sim-tetrahedron-mass; 347 left out (claim false); corrections c-volume (Section 6.6 of Volume 1), M_y sum, centroid equals sign, ex61 reference.
- 15.7: sim-transformation fold 15.71–15.73; sim-jacobian 15.74+15.75; still copies 15.76, 15.77+15.78, 15.79; sim-solid-transformation 15.80–15.83 (choice cyl/sph/Example 15.73, show G or D); corrections ex68 matrix transposed, ex73 z = 4 and G/D names, ex73 table row, e400 integrand.
