# Chapter 17 build status

Agent: chapter 17 (brief /home/flober/.claude/jobs/a080ae38/briefs/chapter.md, N = 17, port 8136). Scratch /home/flober/.claude/jobs/a080ae38/tmp/ch17/ (ch16's pipeline copied: draft.py, enrich.py, buildex.py, mksection.py, lib/rep.py, lib/figs.py, shoot.py, build.sh; rows.py and chapter.py for the prep; per section <sec>/conf.py, spec.py, sec.py, finish.py).

## Done
- Prep: sources converted; media copied to media/ch17 (21 files); exploration.md, config.md, COLOR.md; chapter.json (33 variables rows, concepts set); book-rows.json merged after Chapter 16's (35 concepts, 69 edges, 12 symbols, 31 forms; Hasse clean).

- intro built (photo, three paragraphs).
- 17.1 built: 4 Sims (characteristic roots, Example 17.8's IVP, Example 17.9's spring moving, Example 17.10's boundary-value family); 47 cards (9 cp, 30 ex, 8 review); light+dark checked, one fix pass.
- 17.2 built: 2 Sims (solutions closing on y_p; the undetermined-coefficients pitfall); 25 cards (5 cp, 16 ex, 4 review); light+dark checked.

- 17.3 built: folds 17.2+17.3+17.4, 17.6+17.7+17.8, 17.10+17.11, Figure 17.13 moving, extra `sim-forced`; photos 17.5, 17.9, 17.12; 19 cards (7 cp, 9 ex, 3 review); light+dark checked, one fix pass (scenes moved under headlines).
- 17.4 built: two OmniStax headers; `sim-bessel`; 8 cards (2 cp, 6 ex); review exercises landed in 17.1–17.3.
- Chapter pass: form anchors (via book-rows, merged), 39 variable anchors (ost set), config.md, log-pass.md.

## In progress
- Nothing: final checks passed (ch17 clean in ost check; npm test and the book check fail only on ch16 in progress), LOG pass appended.

## Decisions so far
- Plans are written per section just before building (as ch04, ch06, ch14, ch16).
- Reused, not introduced again: 8.1's `particular-solution` for 17.2's definition (same idea), 10.4's `power-series-solution-of-a-differential-equation` for 17.4's strategy, 8.5's `kirchhoffs-loop-rule`, 6.5's `hookes-law`.
- New concept `eulers-formula` in 17.1 (the book recalls it; no earlier concept).
- `F.slopefield` not used: every equation drawn is second order (brief suggested it where it fits).
- 17.1: no book figures; unnumbered example graphs replaced by Sims keeping them as originals (as 1.1); extra Sims `sim-characteristic-roots`, `sim-boundary-value`. AI approaches: cp 17.2, 17.3 (verifications), ex 7–10 (verify + common behaviour), 52, 53 (proofs), r120. Corrections: Equation 17.1 cited for Equation 17.2 (one note covering the section), Example 17.1 cited for it, "linearly independent" for dependent in the argument, Example 17.6 "functions of x" while b, c, f answer in t, ex 49 key (3 cos 8x − 3 sin 8x), r119 (+10 for +10y). Exercise 10's prompt carried the next group's stem (markup); moved without note.
- Symbols y₁″, y₂″ added (`\kyonedprime`, `\kytwodprime`) for the superposition proof and variation of parameters.
- Macros applied in exercise cards too (as ch08), with a context-aware applier (ay″, 2xy′ coloured; \infty and \text untouched).
- 17.2: extra Sims `sim-nonhomogeneous`, `sim-undetermined-guess`; keys checked (71 with sympy), no slips; r118 AI approach (Cramer's determinant 0).
- 17.3: corrections Example 17.18(b) quadrant, RLC figure cited as 17.10, ex 95 key (critically damped), ex 99 key, r137 key, r139 beat form; r139 AI approach. Dashpot drawn beside the spring, scaled to the gap.
- 17.4: corrections "c₁ and c₂" for c₀, c₁; "(step 3)" for step 5; cp 17.23 AI verification; ex 105's key is a valid family (no note).
