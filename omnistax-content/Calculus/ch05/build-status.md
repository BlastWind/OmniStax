# Chapter 5 build status

Done: intro, 5.1–5.7 and the chapter pass (log Pass 6 appended). Final build and Playwright light/dark over all 8 pages clean; KaTeX over all text and section.json strings: 2271 snippets, 0 errors.
Done before: prep (convert, exploration.md, config.md, COLOR.md, chapter.json, book-rows.json merged 2026-10-12 after ch04: 39 concepts, 65 edges, 2 symbols f_ave, p_prime).
In progress: nothing.
Next: orchestrator runs colours:default., chapter pass. Plans are written per section as it is built.

## Decisions so far
- Review exercises placed: 439→5.1; 440 (AI approach), 441→5.2; 442 (AI approach), 443, 445, 455, 457→5.3; 447, 459, 463→5.4; 449, 451→5.5; 461→5.6; 453→5.7; unkeyed computational 444, 446, 448, 450, 452, 454, 456, 458, 460, 462 left out.
- Symbols: L and R carry Lₙ, Rₙ (variables rows typed by their concepts, written \kL_{n}); A₁, A₂ as \kA_{1}; F, F′, G from ch04.
- Photos 5.30 (skydivers) and 5.31 (wingsuit) kept in the Student Project, 5.34 iceboat kept.
- 5.1: folds 5.3+5.4+5.5 (x²/2, left/right choice, n), 5.6+5.7, 5.8–5.13 (detents 4, 8, 32); stand-in cubic for 5.2; 5.14/5.15 still (checkpoints ask the upper sums); extra Sim sim-riemann-sum (5 sample-point rules, area 12); evens 34, 36, 54, 56, 58 AI answers; r439 pending 5.7.
- Colour flag for the orchestrator: function (red) and integral (magenta) read close on the hue-families palette in both themes; colours:default after the run should part them.
- 5.2: folds 5.17+5.18 (n slider, dashed negative cells), 5.20+5.21 (moving car sim, trip choice), 5.23+5.24 (two still panels, referents f, g); others still; AI answers 104, 106, 108, 124, 126, 128, 130, 132, 134, 142, r440; corrections e101 (key minus), e125 (A = 2 not π; key B−A), e132 (a<b<c).
- 5.3: extra Sims sim-mean-value (a, b sliders on the Fig 5.2 curve) and sim-ftc (F(x) drawn below f, two integrands); 5.26/5.27 not folded (two functions); race sim dropped (spoils Checkpoint 5.20); photos 5.30, 5.31 kept; AI answers 144, 146, 200, 202, r442; correction e165 (key upper limit 3 for 2); calculator link in Example 5.20.
- 5.4: Figure 5.33 became a moving sim (particle + filling area); 5.32, 5.35, 5.36 still; photo 5.34 kept; all evens computational, left out; r463 prompt carries 462's v(t) (changes); v row meaning covers the wind speed (redefines).
- 5.5: book's h2 "Proof" demoted to h3; agent h2 "Substitution with Indefinite Integrals" opens at the theorem; extra Sim sim-substitution (Example 5.34's two regions of equal area); AI answers 254, 304, 306, 308, 310, 312; F′ row added for 5.5; calculator link in Example 5.30.
- 5.6: figures 5.37–5.39 still; extra Sim sim-reciprocal-log (area under 1/t = ln|x| on both sides); 385 key "Answers will vary" → AI proof; AI proofs 382, 384, 386, 388; r461 prompt carries 460's C(t) (changes).
- 5.7: extra Sim sim-inverse-trig (area = angle on the unit circle); AI answers 404, 406, 438; correction: Key Concepts link text names 3.9 but opens 3.7.
- Chapter pass: review exercises landed (see log); group stems now carried only by their own exercises (NOSTEM ranges); exploration example numbers for 5.28/5.29 corrected.
