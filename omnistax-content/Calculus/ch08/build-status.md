# Chapter 8 build status

Scratch: /home/flober/.claude/jobs/a080ae38/tmp/ch08/ (s2h.py, mk.py, wrap.py, fin.py from ch05, adapted; rows.py, chapter.py; port 8126).

Done: prep: convert, exploration.md, config.md, COLOR.md, chapter.json (44 variables), book-rows.json merged (34 concepts, 58 edges, 14 symbols) after ch07's concepts were in. figlib: `F.slopefield` (field, curve, euler; pure geometry in src/lib/fig/slope.ts, tests/slope.test.ts 4/4), documented in docs/prompts/interactive-figures.md.
Done: plans for intro and 8.1–8.5; intro built; 8.1 built (text, figures, section.json; review r267/r273/r283 wait on 8.5), first Playwright light pass clean, label fixes pending rebuild.
Done: 8.2–8.5 written (text, figures, section.json); ost check clean for the book, KaTeX 2057 snippets 0 errors.
Done: build + Playwright light/dark over intro and 8.1–8.5 (no console/page errors, images load, every sim has a canvas, transports only on the four moving Sims, 0 KaTeX errors), one fix pass; chapter pass: anchors set and merged, cross-section check, config/exploration updated, log-pass.md, ost log (Pass 10). npm test: 918/919, the failure is other chapters' (6.8, 9.x, focal-parameter); astro check 0 errors.
In progress: nothing.
Next: orchestrator runs colours:default; Wanted elsewhere items below.

## Decisions so far
- New symbol y_fn (latex y, macro \kyfn) for the unknown function y, typed function, following u_fn; y itself (ch01) stays ink.
- Carrying capacity K typed `limit`; initial value typed `point`; direction field typed `derivative`; Euler's steps drawn in `line`.
- differential-equation and initial-value-problem are 4.10's concepts (8.1 reinforces them); newtons-law-of-cooling and exponential-growth are 6.8's. Wanted elsewhere (other chapters own them): terms "differential equation" on differential-equation (ch04); form dT/dt = k(T − T_s) on newtons-law-of-cooling (ch06).
- Book error found: Table 8.2 prints 1.9164, 1.8414, 1.7746, 1.7156 for n = 7–10; Euler's Method gives 0.9164, 0.8414, 0.7746, 0.7156 (correction note in 8.2).
- 8.1: Figures 8.4 + 8.5 folded into a moving baseball Sim (v₀ slider); 8.2 and 8.3 still Sims (drag point; C slider); no extra Sims. AI verifications for cp 8.1, 8.4 and exercises 8–17; 57/59 carry 56/58; corrections: Example 8.7 prints no IVP equation (note), e59 key constant 3/π² should be 15/π², e65 key y = x for y = t.
- Equation numbers: every CNXML <equation> without class unnumbered is tagged \tag{8.N} (26 in the chapter, matching openstax); cited "Equation 8.N" link text matches.
- 8.2: folds 8.7+8.8, 8.9+8.10+8.11, 8.13+8.14 (drag + h slider); 8.6 and 8.12 still copies (8.6 starts T(0)=100, 50 are stand-ins); matching exercises' five fields labelled A–E in the prompt; corrections Table 8.2, e95, e103, e107, e111, e113, e117, r281; 104/114 AI.
- 8.3: brine tank and pizza moving Sims, 8.15 still with faint field; corrections pizza text "Equation 8.4" (should be 8.7) and cp 8.13 hint; r264 moved to 8.5 (it tests integrating factors too).
- 8.4: logistic field Sim (8.21+8.22 fold, drag P0), 8.18/8.19/8.23 still, deer photo kept; referents logistic-curve/exponential-curve in Fig 8.23; corrections cp 8.14 (missing P), e187 key, e193 key; 200 AI.
- 8.5: air-resistance moving Sim (k slider 0.2–1), circuit and RL current still; agent h2 "Linear Equations"; corrections Example 8.19 v(0)=2, "Equation 8.23" before the RC equation, cp 8.18 and 8.19 hints, e221 key; 208/210/212, r262, r264 AI.
