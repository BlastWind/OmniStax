# Chapter 16 build status

Agent: chapter 16 (brief /home/flober/.claude/jobs/a080ae38/briefs/chapter.md, N = 16, port 8135). Scratch /home/flober/.claude/jobs/a080ae38/tmp/ch16/ (ch15's pipeline: draft.py (labels per module), enrich.py, buildex.py, mksection.py, lib/rep.py, lib/figs.py, shoot.py, build.sh; rows.py and chapter.py for the prep; src/<sec>.md condensed sources; per section <sec>/conf.py, spec.py, sec.py, finish.py).

## Done
- Prep: sources present; media copied to media/ch16 (146 files); exploration.md, config.md, COLOR.md; chapter.json (84 variables rows, concepts set); book-rows.json merged after Chapter 15's (64 concepts, 130 edges, 7 symbols, 62 forms; Hasse clean).

- intro built (photo, three paragraphs).
- 16.1 built: 7 Sims/figures (fold 16.9+16.10; 16.11 still copy), photos 16.2 and 16.4 kept; 36 cards (12 cp, 22 ex, review 427, 431); light+dark checked, one fix pass.

- 16.2 built: 6 Sims (folds 16.12+16.13+16.14, 16.17+16.18, 16.23+16.24), still copies 16.20, 16.21 (locked), images 16.16, 16.19 kept; 45 cards (11 cp, 32 ex, review 437, 449); light+dark checked, fix pass applied (verified with the 16.3 build).

- 16.3 built: 2 Sims (fold 16.28+16.29), still copy 16.31 with referents path-1/path-2, images 16.25, 16.27, 16.30 kept; 39 cards (10 cp, 26 ex, review 428 AI, 433, 435); light+dark checked, fix pass (verified with the 16.4 build).

- 16.4 built: 3 Sims (Green circulation fold 16.33+16.35+16.36+16.37, flux fold 16.38–16.41, stream function 16.42) + extra Sim planimeter (seeded by the dropped media link), 9 book images kept (sketches, MRI, planimeter drawings); 38 cards (6 cp, 31 ex, review 443); light+dark checked, fix pass (dropdown presets, grid off the origin) verified with the 16.5 build.

- 16.5 built: 3 Sims (elastic circle, moving, fold 16.50–16.53; paddlewheel, moving, fold 16.54+16.55; 3D curl-free field 16.56); 45 cards (7 cp, 35 ex, review 429, 430 AI, 441); light+dark checked, readout fix pending the 16.6 build.

- 16.6 built: 5 Sims (param surfaces fold 16.57–16.62 with parameter-domain inset; patch fold 16.65–16.67; cone area locked; orientation fold 16.74–16.76 with Möbius strip; flux fold 16.77+16.78), 4 locked still copies, 3 book images; 46 cards (14 cp, 31 ex, review 439); light+dark checked, inset tick fix pending next build.

- 16.7 built: 2 Sims (Stokes fold 16.79+16.83 with live equal sides over a family of surfaces sharing C; curl as circulation fold 16.85+16.86 with paddlewheel), 4 book images; 30 cards (4 cp, 25 ex, review 445); light+dark checked, curl field fix (curl₀ = ⟨0,1,1⟩) verified with the 16.8 build.

- 16.8 built: 3 Sims (divergence theorem with live sides over ball/cylinder/cube and four presets incl. F_r ≠ case; ball flux per volume; swirl cube 16.90), image 16.88; 31 cards (4 cp, 25 ex, review 447, 451); all 25 review exercises placed (15) or left out (10 unkeyed); light+dark checked, cylinder proportion fix.

## Done
- chapter pass: anchors set (115 variables, 62 forms), 13 unused variables rows deleted, COLOR.md/config.md updated, cross-section checks clean, ost check clean, npm test 926/926, astro check 0 errors, build ok; Playwright all 9 pages light+dark clean (only headless GPU-stall warnings); ost log appended.

## Next
- report to orchestrator (reorder chapter.json variables by section: appended rows trigger 'means something else' warnings).

## Decisions so far
- Plans are written per section just before building (as ch04, ch06, ch14).
- Exercise numbers count 16.6's four material-set exercises, as openstax.org does (16.7 starts at 326, checked online; review 427–451). modules.json's ranges for 16.6–16.8 are four short (book-level file, not changed; flag for the orchestrator).
- Labels counted per module: 16.5's Example 16.55 shares its CNXML id with an element of 16.1.
- Types: vector-field main (F, G, v, E, B, F_r, ∇f as a gradient field, curl F); integral (line/surface/flux integrals, W, m, circulation); curve (C, C₁, C₂, ∂D, grid curves); region (D, E, parameter domain); surface (S); function (f, g, P, Q, R, div F, potential, stream function, ρ); vector (T, N, n, t_u, t_v, r′).
- New symbols \kvecG, \kvecE, \kvecFr, \kvectu, \kvectv, \kdivF, \kcurlF. P, Q, R rows wear function with no concept (a component function names no concept of its own).
- One concept for "gradient field" and "conservative field" (`conservative-vector-field`), the book using the two names for one thing.
- 16.1: 16.2 (artist's planet/moon and river) kept as the book's image; corrections: Example 16.3 cites Figure 16.6 for 16.5 (openstax prints it too), 'Figure 16.11 shows the level curves' (16.10), Checkpoint 16.11's field, ex 31 key e^{−t}, Key Concepts' garbled first item; AI approaches 2, 4, 30; i, j, k rows added to every section.
- 16.2: stand-ins f = 1 + y (sheet) and r = ⟨t, t²/2⟩ (Figure 16.15's generic curve); 16.16 and 16.19 (sketches with no function) kept as the book's images; corrections: index printed 'l', circulation notation printed without its circle; AI approaches 40, 42.
- 16.3: corrections Example 16.29 coefficient 2 (4), proof's C for C′, Example 16.34 'ℝ² and ℝ³'; AI 100, 102, 145, r428; Checkpoint 16.25 placed after Figure 16.27 (buildex CPAFTER).
- 16.4: Green figures compute both sides live for any region/field preset (whirlpool preset shows ≠ when D holds the origin); corrections f_x for f_y, 'potential function for f', ∂/∂x for ∂/∂y, Example 16.41's sign; COLOR.md's 16.4 referents dropped (Figure 16.46 kept as image); AI 166.
- 16.5: correction Example 16.57's curl derivatives; AI 206 (curl of a scalar: false), 208, 210, 264, r430.
- 16.6: seven corrections (Example 16.64 bound, Fig 16.69 caption in its figcaption, 'scalar line integral', Example 16.67 integrand/t_θ/bracket, Example 16.68 t_y and Equation 16.5 link, ρN, the '[link]'); AI 270, 272; bold N/T/F in TeX now coloured in 16.2–16.6 (finish post-pass).
- 16.7: corrections 'flux form' (circulation), Example 16.73 (limit, Equation 16.19 citations, 'hemisphere' also in Fig 16.83's original caption), Example 16.74 tangent, Example 16.75 link, Checkpoint 16.64 sign; stand-in field for Fig 16.85+16.86.
- 16.8: corrections Example 16.77 (t_v, integrand, total), Example 16.81 and Checkpoint 16.68 powers of ten (10⁸), link to Example 16.6 for gravity (16.8); chapter.json variables sorted by section; D in 16.5 marked redefines.
