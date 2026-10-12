# Chapter 9 build status

Scratch: /home/flober/.claude/jobs/a080ae38/tmp/ch09/ (pipeline from ch05/ch08: s2h.py, wrap.py, mk.py, fin.py; port 8127).

Done: prep: convert (intro, 9.1–9.6), media copied to media/ch09 (29 files), exploration.md, config.md, COLOR.md, chapter.json (45 variables), book-rows.json merged after ch08's concepts were in (60 concepts, 106 edges, 4 symbols a_seq, b_seq, c_seq, S_sum); plans for intro and 9.1–9.6.
Done also: intro (splash kept, Example 9.8 correction), 9.1 (six Sims, two photos, 43 exercises), 9.2 (four Sims, 48 exercises); built and shot light/dark, no console errors.
Done also: 9.3 (two Sims, 35 exercises), 9.4 (two Sims, 37 exercises); built and shot light/dark, no errors.
Done also: 9.5 (two Sims, 50 exercises), 9.6 (one Sim, Table 9.3, 40 exercises).
Done: chapter pass: every variables row and form anchored, ost log (LOG.md Pass 13), ost check clean for the book, npm test 925/925, astro check 0 errors, final build and Playwright over intro and 9.1–9.6 in light and dark: no console or page errors, no broken images, no KaTeX errors, every Sim has a canvas, no transports.
In progress: nothing.
Next: orchestrator runs colours:default.

## Decisions so far
- Equations numbered as openstax.org does: every clean display equation of 9.1–9.3 and the four class=numbered of 9.5, Equations 9.1–9.14 (\tag{9.N}); checked on openstax.org (5.3 shows 5.8–5.10, 5.5 shows 5.11–5.14, 5.6 none).
- 9.5 "Theorem 5.13": Volume 2's number for the Alternating Series Test (openstax.org: Theorem 5.13); reworded "Theorem 9.13" linked to that note, with a note giving the printed words; the note also says the step uses the limit comparison test (Theorem 9.12).
- New symbols a_seq, b_seq, c_seq (latex a, b, c; macros \kaseq, \kbseq, \kcseq) for the terms of sequences, typed sequence; the book's a_n (a polynomial coefficient, ch01) untouched. S carries Sₖ (series), S_sum (\kSsum) the sum S (limit), R carries R_N (error), ρ (limit) in 9.6.
- Intro correction: the book's "(see Example 9.8)" points at Using Algebraic Properties; the Koch area is Example 9.11 (note).
- Sims planned: 9.1 six (9.2 generalised, 9.3 with N, 9.4 ε–N with a stand-in 2 + 3(−1)ⁿ⁺¹/n, 9.5, 9.6, 9.7), 9.2 four (partial sums, geometric, Koch, telescoping), 9.3 two (9.12+9.13+9.14 folded on p, remainder), 9.4 two (comparison, limit comparison), 9.5 two (9.17+9.18 folded, rearrangement), 9.6 one (ratio/root).
- AI-marked answers planned: 9.2 88, 90, 92, 130; 9.3 188; 9.4 230, 236, 238, 240, 244, 246, 248; 9.5 286, 288, 290, 292, 294, 296, 298, 300, 308, 316; 9.6 368, 374, 376, 378; review 380, 382.
- 9.1: Figure 9.3 is a Sim with N terms (panel (a) zooms); Figure 9.4 uses the stand-in aₙ = 2 + 3(−1)ⁿ⁺¹/n (the sketch prints no formula) plus the text's two convergent sequences; Figure 9.6's three sequences are referents; no extra Sims; corrections: "shown in Figure 9.4" (they are in 9.3), "= → −∞", Example 9.6(b) "n ≥ 2"; all evens left out (computational).
- 9.2: Sims added: geometric series (a, r sliders, frames follow the values) and telescoping (segments end to end on a number line); Figure 9.11 Koch drawn live F_{n−3}…F_n; AI answers 88, 90, 92, 130; corrections: "form given by Equation 9.5" (means 9.6), ex 107 prompt, ex 113 key.
- Colour flag for the orchestrator: in the light theme `sequence` (olive) and `series` (dark brown) read close; in dark they part (lime, gold). colours:default should separate them.
- 9.3: Figures 9.12 + 9.13 + 9.14 folded into one Sim (p slider across 1, over/under placement, k); Figure 9.15 on Example 9.16's 1/x³ with N (frame zooms with N); AI answer 188; review 379 (choice), 380 (AI) set here; no text corrections.
- 9.4: Figure 9.16 Sim with referents cmp-given/cmp-known; extra Sim limit comparison (six pairs incl. Example 9.18(c)'s three tries); Tables 9.1, 9.2 kept; AI answers 230, 236, 238, 240, 244, 246, 248; corrections: ex 229 prompt (no summand), ex 205 key (√(n + 1/2)); stray "**" in keys 203–209 removed.
- Colour flag: in the light theme `function` (red) and `error` (crimson) read close (9.3's remainder figure), and `integral` shading sits close to them.
- 9.5: Figures 9.17 + 9.18 folded (1/n and 1/n², N slider, remainder bracket); extra Sim rearrangement (any target, 200 terms; Example 9.22's first terms at 3 ln 2/2); "Theorem 5.13" reworded "Theorem 9.13" (linked to the Alternating Series Test) with the note; ex 305 prompt correction; AI answers 286–300 even, 308, 316; review 381 (choice), 382 (AI), 393, 397.
- 9.6: extra Sim ratio/root (six series of the examples and checkpoints); Table 9.3 kept as a book table (cells split outside math so |r| survives; spanning rows kept); ratio-test proof correction; ex 327 key correction; AI 368, 374, 376, 378; review 391, 395.
- Chapter pass: Key Concepts with display math now kept whole in summary_html (were cut at the first display line); stems trimmed (config 30); b_seq row added for 9.3.
