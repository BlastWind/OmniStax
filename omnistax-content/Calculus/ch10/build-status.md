# Chapter 10 build status

Task ch10, port 8128, scratch /home/flober/.claude/jobs/a080ae38/tmp/ch10/ (tools copied from ch07: `draft.py` source → draft (resolves theorem-note refs to their titles, notes keep the book's ids); `enrich.py` + `<sec>/conf.py`; `<sec>/finish.py` → text.html; `buildex.py` + `<sec>/spec.py`; `mksection.py` + `<sec>/sec.py` → section.json; `mkrows.py` → book-rows.json; `shoot.py <sec>`).

## Done
- Prep: exploration, config, COLOR, chapter.json (34 variables rows), book-rows.json (30 concepts, 50 edges, symbol f_n1 = f⁽ⁿ⁺¹⁾); `ost merge calculus 10` done (ch09 was merged first).
- intro (photo, three paragraphs).
- 10.1 built: Figures 10.2 (sim-convergence, four series as a choice + probe x, partial sums below) and 10.3 (sim-partial-sums); 37 exercise cards; Playwright light/dark clean, one fix pass (ticks).
- 10.2 built: photo Figure 10.4 kept; three Sims (present value, Cauchy grid, term-by-term); 35 cards; Playwright clean, one fix pass.

- 10.3 built: Figures 10.5–10.9 (four Taylor/Maclaurin Sims by one helper, not folded; 10.9 the remainder with Taylor's bound); 38 cards; Playwright clean, one fix pass.
- 10.4 built: Figures 10.10 (binomial, r and n), 10.11 (normal area by series), 10.12 (pendulum + period graph), extra Sim Airy; Table 10.1 kept, Maclaurin sheet linked; 52 cards; Playwright clean, one fix pass.
- Review exercises landed in all four sections (`--with-review`).

- Chapter pass done: 32 forms and all 34 variables rows anchored; no exercise kept twice; figure numbers 10.1–10.12 without gaps; read-through fixed a dollar-sign KaTeX error in Example 10.7 (e.); LOG Pass 12 appended.
- Checks: `ost check calculus` no errors (4 sheet warnings, not ours); content node tests 48/48; astro check 0 errors; build; Playwright light+dark on intro and 10.1–10.4: no console/page errors, no math errors, images load, every figure.sim has a canvas, no transports (all still).

## Next
- Nothing; orchestrator runs colours:default and commits.

## Decisions so far
- Equations numbered as openstax.org does (checked on 6.4: 6.6–6.11): 11 classless <equation>s, Equations 10.1–10.11; Table 10.1 is the Maclaurin table (openstax Table 6.1).
- References to theorem notes read as the theorem's title, linked, as openstax.org prints them ("In Combining Power Series we state…").
- 10.1: no extra Sims; corrections under cards 5 (x = 0 is the endpoint), 49 (a₂ₙ for a₂ₙ₊₁), 51 ((0, 1] not [0, 1]); text correction: "the series in Example 10.3" (a slip for Equation 10.3's series). Kept with AI approaches: 2, 4, 48.
- 10.2: extra Sims picked: present value (the opener's question), Cauchy product grid; term-by-term Sim for the main result. Corrections 67 (2ⁿ⁺² for 2²ⁿ⁺²), 89 (prompt series and key both off by a sign). 109 "Answers will vary" → AI worked answer; 108, 110 AI approaches. Review 253 placed in 10.2 (differentiated series), not 10.1.
- Literal dollar signs in the source prose (10.2) are escaped in the drafter (&#36; / ＄).
- 10.3: Figures 10.6–10.8 not folded (each read beside its example part); no extra Sims. Corrections: Ex 10.12c (n for m), Ex 10.13 (0.0011468), Ex 10.14 (wrong theorem cited), CP 10.14 (2ⁿ⁺¹ → 2ⁿ⁺²), e129, e139, e145.
- 10.4: extra Sim sim-airy picked; pendulum uses exercise 249's L = 10 m (example prints none); binomial coefficients rendered \binom (the CNXML's array form). Corrections: CP 10.18 (key is 1/√(1+x)'s series), CP 10.19 hint reversed, CP 10.21 (0.514 → 0.764), Ex 10.20 (4c₃ → 4c₄), Ex 10.23 (five terms/0.4922 vs six terms/0.4729), Ex 10.24 (1.3), e185, e195, e199, e205, e213 (arcsin series wrong in prompt and key), e235, e237, e241 (signs), e247, e251 (9/256 → 9/64), r267. 232 AI approach; r256, r275 AI.
