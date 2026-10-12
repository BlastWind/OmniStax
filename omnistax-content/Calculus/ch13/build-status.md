# Chapter 13 build status

Agent: chapter 13 (brief /home/flober/.claude/jobs/a080ae38/briefs/chapter.md, N = 13, port 8132). Scratch /home/flober/.claude/jobs/a080ae38/tmp/ch13/ (ch11's pipeline adapted: draft.py → enrich.py with <sec>/conf.py → <sec>/finish.py → text.html; buildex.py with <sec>/spec.py → exrows.json; mksection.py with <sec>/sec.py → section.json; rows.py, chapter.py for the prep; build.sh, shoot.py, ctx.py). Per section the order is: python3 draft.py S; python3 enrich.py S/draft.html S/conf.py S/en.html; python3 S/finish.py; python3 buildex.py S S/spec.py S/exrows.json; python3 mksection.py S [--with-review].

## Done
- Prep: sources present; media copied to media/ch13 (64 files); exploration.md, config.md, COLOR.md; chapter.json (70 variables rows); book-rows.json merged after Chapter 12's (46 concepts, 87 edges, 14 symbols, 47 forms; Hasse clean). Plans for intro and 13.1–13.4.
- intro, 13.1, 13.2, 13.3, 13.4: built; Playwright light/dark per section with one fix pass, reduced motion over every page: no console or page errors (only swiftshader GPU-stall warnings), no broken images, transports only on moving figures.
- Chapter pass (2026-10-13): review exercises landed (13.1–13.3 with --with-review); 70/70 variables and 47/47 forms anchored (tmp/ch13/anchors13.py); in-section figure citations linked to their (folded) figures (figlinks.py); config.md lines 29–31; plans corrected where the build changed them; log-pass.md → LOG Pass 16. Checks: ost check calculus — no ch13 findings (9 errors all in ch15/ch16, in progress elsewhere); npm test 922/925 (the 3 failures are ch15's); astro check 0 errors; build ok.

## In progress
- Nothing.

## Decisions so far
- Types: r(t) and every curve wear `curve`; r′, T, N, B, v, a, i, j, k wear `vector`; κ and speed `derivative`; s `integral`; a_T, a_N, radius of curvature, constant vectors C and D ink. T, N, B share the vector hue, told apart by name; a dashed component a_T T, a_N N.
- "plane curve" stays 11.1's term (parametric-curve); 13.1 reinforces it.
- Folds: 13.2+13.3 (ellipse, part choice), 13.6+13.8 (osculating circle on a stand-in curve y = 1.5 − sin x − ¼ sin(2x+1)), 13.9+13.10 (still copy, kind figure), 13.12+13.13+13.14 (car on a stand-in road y = 1.2 sin 0.9x, steady/braking), 13.18+13.19 (Kepler orbit with force), 13.20+13.21 (banked turn still copy, kind figure). 13.22 photo kept; Example 13.18's repeat of the opener dropped.
- Sims added (rule 14, ideas with no book figure): 13.1 sim-vector-limit; 13.2 sim-difference-quotient, sim-vector-integral (Example 13.4's r′, not the checkpoint's function); 13.3 sim-helix-length (3D), sim-arc-length-function (spiral of exercise 98, parameter t/s); 13.4 sim-acceleration-plane (3D, Example 13.15).
- 3D scenes: 13.1 helix (circle/ellipse cross-section); 13.3 helix length, Frenet frame (helix of Ex 13.11 over 0 ≤ t ≤ 4π/3, or twisted cubic); 13.4 acceleration plane. No buttons.
- Exercises: computational unkeyed evens left out; AI approaches for 36, 68, 96, 164, 182, 199 and review 202, 204 (true/false). Review placement: 202, 207, 209, 211 → 13.1; 203, 213, 215 → 13.2; 204, 217, 219, 221 → 13.3; 205, 223, 225, 227 → 13.4.
- Corrections (book-corrections-as-notes): intro link Example 13.15 → 13.18; 13.1 unit circle (radius 4), r207 domain, r211 cone/lower nappe; 13.2 e73 (k²), e85 (0k), e95 (t − 1/t), r213 (three terms); 13.3 helix h, proof's self-citation, Ex 13.12 B citation and sign, cp 13.12 N(2) = (4i − j)/√17 and hint, Figure 13.9 caption t → x, e153 κ; 13.4 Ex 13.16 1406.25 ft, range v₀²/g along i, cp 13.15 a_N(−3) = 4√13/13, r227 two components.
- Prose bold letters (r, u, v, a, T, N, B, i, j, k, L, F) set through the macros; the book's non-bold r, i, j, k slips in Example 13.2 and the curvature proof normalized to the bold symbols. In the banked-turn project N is the road's force and stays \mathbf{N}.
