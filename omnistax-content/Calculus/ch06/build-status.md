# Chapter 6 build status

Agent: chapter 6 (brief /home/flober/.claude/jobs/a080ae38/briefs/chapter.md, N = 6, port 8123). Scratch /home/flober/.claude/jobs/a080ae38/tmp/ch06/ (s2h.py, wrap.py, finish.py, mk.py adapted from ch05; cfg_6_M.py and sec_6_M.py per section; build.sh, shoot.py).

## Done
- Prep: sources converted; exploration.md, config.md, COLOR.md, chapter.json (52 variables rows), book-rows.json merged (60 concepts, 89 edges, 10 symbols).
- figlib: `F.revolve` (src/lib/fig/solid.ts + block in figlib.ts, tests/solid.test.ts 13 pass; docs/prompts/interactive-figures.md gained its block).
- intro: built (photo, link to Example 6.28 left plain until 6.5 is built).
- 6.1–6.9: built, checked, Playwright light/dark/reduced clean, one fix pass each (6.4's last fixes rebuild with 6.5).

## In progress
- Nothing: chapter pass done 2026-10-13 (LOG Pass 11).

## Next
- the chapter pass (review exercises 437–455 land in 6.2–6.6 once 6.9 is built: the checker refuses a source_section not built).

## Decisions so far
- 6.9 Example 6.51 prints "Recall from Section 2.4" (Volume 2's own number for 6.4): to be reworded "Section 6.4" with a correction note.
- 6.1: folds 6.2 + 6.3 and 6.8 + 6.9; Figure 6.6 became a sim (b dragged, signed integral beside the area); Figure 6.10 a sim choosing vertical or horizontal rectangles; Figures 6.4, 6.5, 6.7 still live copies. Stand-ins f = 0.25x² − x + 4, g = 0.5 + 0.35x (6.2 + 6.3) and u, v (6.8 + 6.9). 12 referents (each figure's two curves). "the left graph, shown in red" kept as printed though the curve wears a referent colour (as 2.3 did). All 28 even exercises computational, left out. No extra Sims.
- Exercise strings are plain LaTeX (no colour macros), as Chapters 1–2; the dollar sign there is ＄.
- 6.2: three WebGL scenes per page at most (revolving story, disks, washers); example solids are painted locked views (F.revolve.paint). Folds 6.12+6.13, 6.16+6.17, 6.20+6.21. Stand-ins: half-cylinder r 1.2 L 4; solid S with elliptical sections; pyramid a 2 h 4; revolving region f = 1 + 0.6 sin 1.1x + 0.15x. Checkpoint 6.6 (cone derivation, unkeyed) and exercises 58–62 (59, 61 odd but unkeyed) kept with AI approaches; 61 read as the frustum a trapezoid sweeps. 24 even computational left out.
- 6.3: folds 6.25+6.26; Figure 6.28 a story slider unrolling the shell into a plate; 6.34 (a table printed as an image, no caption) redrawn live, its image title as caption; 6.35 a sim (disks vs shells) not folded with 6.36. 164 kept with AI approach; 25 evens left out.
- 6.4: folds 6.37+6.38, 6.40+6.41, 6.42+6.43+6.44 (cone cut in stages). 215 "Answers may vary" and 217 "look up Gabriel's Horn" given AI approaches; 168 AI; 25 evens left out.
- 6.5: all 2D or painted locked views. Folds 6.48+6.49, 6.52+6.53, 6.54+6.55, 6.59+6.60+6.61 (dam: choice full/drought; the checkpoint's 60 ft left out). The dam image kept as an unnumbered photo figure. F in the hydrostatic part is F_h. Exercises 234–253 drop the stem the book prints over 229–233 (mk.py NOSTEM; also applied to 6.1 49 51, 6.2 103 105 107, 6.3 163 164, 6.4 169 207–217 odd). 253 correction (A over H², not H³) under its card. Equations the book cites are numbered chapter-wide (s2h.py), 6.1 to 6.27.
- 6.6: one WebGL scene (Pappus torus, story θ, fixed R = 4, r = 2); the rest 2D. Folds 6.62+6.63, 6.65+6.66, 6.68+6.69. Referents ex32-f, ex32-g. Checkpoint 6.30 "on a number line" corrected under its card (mk.py CPFIX). Multi-part checkpoint hints go on the first part (the schema has no hint on a multi answer; ost check passed it but the astro build refused it).
- 6.7: fold 6.75+6.76+6.77 (signed area under 1/t beside ln, specials 1 and e); referents ln-curve, exp-curve in 6.78. 343, 345, 347 verified by AI. Concepts of 1.5, 3.9, 5.6 reinforced, not reintroduced.
- 6.8: Sims growth (k 0.01–0.04, checkpoint's 0.05 out) and decay; added Sim sim-cooling after Example 6.45 (fixed to the example's data). 351 key corrected under its card.
- 6.9: choice-of-six Sims for the hyperbolic functions with derivatives and for the inverses; catenary slider a. "Recall from Section 2.4" reworded to Section 6.4 with a correction. 421 kept open (g not given).
- Chapter pass: review exercises landed (6.2, 6.3, 6.4, 6.5, 6.6, 6.8, 6.9); every variables row and form anchored (tmp/ch06/anchors6.py); intro links Example 6.28; unkeyed even proofs/checks now kept with AI answers per config 12 (6.4 214, 6.6 282 284, 6.7 344 346, 6.8 348 350, 6.9 380–384 420 422 428–434); 6.5 `work` introduced once; 6.8 display-math dollars as entities and the cooling Sim's placement fixed. Checks: ost check clean (4 warnings in sheets, not ch06), npm test 924/924, astro check 0 errors, build ok, Playwright light/dark/reduced over intro and 6.1–6.9 with only GPU ReadPixels warnings.
- For Chen: links to /calculus/ch10/10.3/ (6.7, Taylor) point at a chapter not yet built; another chapter's new concept `cylindrical-surface` shares the name "cylinder" with 6.2's `cylinder` (content-check flags it).
