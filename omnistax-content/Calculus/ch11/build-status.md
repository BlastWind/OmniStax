# Chapter 11 build status

Task ch11, port 8129, scratch /home/flober/.claude/jobs/a080ae38/tmp/ch11/ (tools copied from ch10: `draft.py` source → draft (module links resolved book-wide from modules.json); `enrich.py` + `<sec>/conf.py`; `<sec>/finish.py` → text.html; `buildex.py` + `<sec>/spec.py`; `mksection.py` + `<sec>/sec.py` → section.json; `mkrows.py` → book-rows.json; `shoot.py <sec>`).

## Done
- Prep: converted intro, 11.1–11.5; drafts; exploration.md, config.md, COLOR.md; chapter.json (5 sections, 48 variables); book-rows.json merged (60 concepts, 94 edges, symbol x_prime \kxprime).

- figlib `F.polar` added (Chapter 11 block in figlib.ts, polar.ts pure, tests/polar.test.ts 5 tests; doc lines in interactive-figures.md).
- intro built; 11.1 built (9 figures), checked light+dark; 11.2 built (9 figures), checked light.

- 11.3 (10 figures), 11.4 (5), 11.5 (14) built; all sections shot in light and dark (only swiftshader GL warnings).
- Chapter pass: 34 form and 48 variables anchors set; review exercises placed (11.1: 323/327/329; 11.2: 325/337/339; 11.3: 322/331/333; 11.4: 324/335; 11.5: 341/343/345/347); log-pass appended as LOG Pass 14; ost check: no ch11 errors; npm test 924/925 (the failure is ch12's missing 12.3 section.json); astro check 0 errors.

## In progress
- Nothing. Chapter 11 done.

## Decisions so far
- One build for Volume 2 Ch 7 = Volume 3 Ch 1; slugs calculus-volume-2/pages/7-….
- 15 numbered equations (11.1–11.15), every classless `<equation>`, as openstax.org numbers them.
- Folds planned: 11.2+11.3, 11.9+11.13+11.14+11.15, 11.10+11.11, 11.21+11.22, 11.23+11.24, 11.31+11.32, 11.33+11.34, 11.37+11.38, 11.43+11.44, 11.45+11.46.
- Unnumbered images replaced by Sims: 11.3's symmetry table, 11.5's satellite dish.
- Corrections found in reading: 11 (exploration.md lists them), plus "Calculus 1" reworded (cross-volume).
- focal-parameter carries no symbol: p means the vertex–focus distance in 11.5's parabola and the focal parameter later in the same section.
- 11.1: folds 11.2+11.3, 11.9+11.13+11.14+11.15 (b slider; the project's curtate/prolate equations are not written in the readout), 11.10+11.11 (choice a/b); ant is a referent; corrections: Example 11.1c table y(7π/6), y(11π/6) printed 2 for −2; key 21 (upper half only), key 35 (domain [1, ∞)); 49 AI proof; review 323/327/329 to 11.1.
- 11.2: folds 11.21+11.22 (rectangles under the cycloid arch), 11.23+11.24 (chords on the semicircle; the book's "red curve in Figure 11.23" lands on the fold); 11.25 3D with a stand-in arc (x = t + 0.7 sin t, y = 1.4 + 0.6 cos 1.3t); 11.20 still with t slider and grip; baseball Sim judged out; corrections: "Calculus 1" → Chapter 5 (cross-volume), ∫ₐᵇ → ∫ᵦᵃ, checkpoint 11.7 interval, speed 140.34 → 140.27; 117 AI proof; review 325/337/339 to 11.2.
- 11.3: folds 11.31+11.32 (choice of six curves, a/b sliders hide where the family has none), 11.33+11.34 (stand-in coefficients 6/5 and √2), 11.37+11.38; symmetry table → Sim; 11.29 faithful copy; correction "Example 11.14" → 11.13; 322 AI T/F.
- 11.4: stand-in r = 1 + θ for Figure 11.39; added Sim for the polar arc-length theorem (cardioid of Ex. 11.18); referents circle-6, cardioid-2; corrections r = 3 sin θ → 6 sin θ, key 243; 234, 254, 324 AI.
- 11.5: folds 11.43+11.44 (3D cone and plane, φ slider, parabola special at tan⁻¹3), 11.45+11.46; dish image → moving Sim; 11.50 kept photo; corrections Pythagoras line, Ex. 11.20/11.21 equation refs, Ex. 11.24 C′ lines, Figure 11.51 caption (row note), key 319.
