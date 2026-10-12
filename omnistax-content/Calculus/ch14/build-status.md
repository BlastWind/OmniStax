# Chapter 14 build status

Agent: chapter 14 (brief /home/flober/.claude/jobs/a080ae38/briefs/chapter.md, N = 14, port 8133). Scratch /home/flober/.claude/jobs/a080ae38/tmp/ch14/ (ch13's pipeline: draft.py (labels now per section: ids repeat across this chapter's modules), enrich.py, buildex.py, mksection.py, lib/rep.py, shoot.py, build.sh; rows.py and chapter.py for the prep; per section <sec>/conf.py, spec.py, sec.py, finish.py).

## Done
- Prep: sources present; media copied to media/ch14 (83 files); exploration.md, config.md, COLOR.md; chapter.json (95 variables rows); book-rows.json merged after Chapter 13's (72 concepts, 128 edges, 32 symbols, 54 forms; Hasse clean); `ost check calculus` no errors.

- intro built (photo, three paragraphs).
- 14.1 built: 7 Sims (folds 14.2+14.3, 14.4+14.5, 14.9+14.10), photos 14.7 and 14.12 kept; 35 cards; light+dark checked, one fix pass (2D TeX labels).
- 14.2 built: 5 Sims + still copy 14.20 (fold 14.18+14.19); 33 cards; light+dark checked, one fix pass.
- 14.3 built: 3 Sims (14.21 secant, 14.23 heat decay moving, 14.24 heat wire moving), still copy 14.22, images 14.25, 14.26 kept; 35 cards; light checked, fix pass.
- 14.4 built: 4 Sims (folds 14.27+14.28, 14.29+14.32, 14.31+14.33); 31 cards; light checked, fix pass.
- 14.5 built: extra Sim chain-path (moving), 3 tree copies, fold 14.37+14.38; 28 cards; light checked, fix pass.
- 14.6 built: 5 Sims (folds 14.39+14.40, 14.41+14.42); 31 cards; light checked, fix pass.

- 14.7 built: 7 Sims (folds 14.48+14.49, 14.50+14.51, 14.52+14.53, 14.54+14.55, 14.57+14.58; 14.46, 14.47 painted), 14.56 dropped; 28 cards.
- 14.8 built: 2 Sims (fold 14.59+14.60) + extra sim-two-constraints; 24 cards.
- Chapter pass done: review exercises landed (--with-review, 14 kept), every variables row and form anchored (anchors.py), book-rows re-merged, config.md items 29–32, log-pass.md → LOG.md Pass 17.
- Checks: `ost check calculus` no ch14 errors (15 errors all in ch15/16, in progress); content node tests 73/75 (the 2 failures are ch15's figures.js and the whole-book check of ch15/16); build; Playwright light+dark on intro and 14.1–14.8: no console/page errors, images load, every figure.sim has a canvas, transports only on 14.23, 14.24 and sim-chain-path.

## Next
- Nothing; orchestrator runs colours:default and commits.

## Decisions so far
- Types: f(x, y) `function`, its graph `surface`; level curves, contour maps, traces `curve`; every partial derivative and D_u f `derivative`; ∇f, u `vector`; tangent plane and L(x, y) `plane`; error term E `error`; δ disk/ball and open/closed/connected/bounded sets `set`; a region `region`; discriminant D, dz, λ ink.
- Symbols: partial-derivative macros in both notations (`\kfx` …, `\kdfdx` fraction and `\kdfdxin` inline), `\kgradf`, `\kgradg`, `\kDuf`; ∂x/∂u … are `\kpxpu` … (`\kdydu` was taken).
- "surface" (glossary 14.1) stays 12.6's concept; "optimization problem" stays 4.7's; multivariable versions of critical point, extrema, Fermat, second derivative test, extreme value theorem, linear approximation are new concepts with the book's glossary words.
- Equation numbers: 43, checked on openstax.org (4.2, 4.3); 14.21 sits in Checkpoint 14.18.
- Book slips listed in exploration.md (14.6's 17/13 → 77/13, 14.8's "around 395" vs 540, empty values in 14.7, the project's Equation 14.13 for 14.23, …).
- 14.1: stand-ins none; correction notes c-graph-z (z = (x, y)) and c-trace-planes (Tables 14.1/14.2 and Figure 14.11 swap xz/yz); 14.12 kept as image (no functions printed); review 394 here (AI, true/false).
- 14.2: stand-ins for 14.15's surface (f = 3 + 0.3x − 0.2(x² + y²)) and 14.17's set S (r = 4.21 − 0.65 sin 2θ); left out 87, 89 (lean on unkeyed 86, 88); AI approaches 62, 78, 106; corrections cp 14.9 (16 for 26), r403 (> 4 should be ≥ 4); review 401, 403 here.
- Plans are written per section just before building (as ch04, ch06).
- 14.3: stand-in surface for 14.21 (2 + sin x cos(y/2)); 14.23 is Checkpoint 14.18's heat solution decaying (x, y at 1/5 scale, stated); 14.24 draws Equation 14.22 as printed (the book's plot peaks near 12); 14.26 kept as image; AI cp 14.18, 140, 150, 157, 158; corrections Ex 14.14 (h for k), project "Equation 14.13" (14.23).
- 14.4: steep surfaces drawn with heights scaled (1/20, 1/25), z ticks true; 14.30 stand-in √(32 − 4x²) (trace of Ex 14.23); AI 190 (read from figure: AB = Δz − dz), review 396 AI; 419's key is the exact change (2.3228), not dz (2.26) — kept, no note.
- 14.5: extra Sim sim-chain-path (Example 14.26a as a moving point and z(t)); corrections Ex 14.28 last line, e215 (4t²→4t⁴), e247 (signs).
- 14.6: correction nonunit example (17/13 → 77/13); 14.45's arrows at 1/9 length.
- 14.7: two painted (locked) scenes; corrections step-3 link (Fermat → second derivative test), empty values t = 4 and (50, 0); the book's Figure 14.55 labels points that do not match Example 14.40b (Sim marks the solution's).
- 14.8: extra Sim sim-two-constraints (Example 14.45's sphere touching cone ∩ plane); correction "around 395" vs 540 at (10, 4); AI 384.
