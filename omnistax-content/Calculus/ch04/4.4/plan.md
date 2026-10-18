# Plan: 4.4 The Mean Value Theorem (m53612)

Source: `source.md`, converted with `tools/convert.py 4`. Status: plan; config 2 waives the review for this run, decisions reported afterwards. Built 2026-10-12.

Three objectives, an opening paragraph, five theorem notes (Rolle's theorem, the Mean Value Theorem, Corollaries 1–3) each with its proof, Figures 4.21 to 4.29, Examples 4.14 to 4.16, two checkpoints (4.14, 4.15), five Key Concepts, 46 section exercises (23 keyed), two glossary terms. One page.

## Sub-concepts (page headers)

0. `intro` (no header): the opening paragraph.
1. `rolle` **Rolle’s Theorem**: Figure 4.21, the theorem `rolles-theorem` and `rolle-proof`, |x| − 1 (Figure 4.22), Example 4.14 (Figures 4.23, 4.24) and its checkpoint. Introduces `rolles-theorem`.
2. `mvt-meaning` **The Mean Value Theorem and Its Meaning**: Figure 4.25, the theorem `mean-value-theorem` and `mvt-proof` with Figure 4.26, Example 4.15 (Figure 4.27), the car at 45 mph, Example 4.16 (the dropped rock, Figure 4.28) and its checkpoint. Introduces `mean-value-theorem`.
3. `corollaries` **Corollaries of the Mean Value Theorem**: `corollary-1` (functions with a derivative of zero) with its proof, `corollary-2` (the constant difference theorem) with its proof and the preview of antiderivatives, Figure 4.29, `corollary-3` (increasing and decreasing functions) with its proof. Introduces the three corollary concepts.

## Correction

The paragraph before Figure 4.29 prints "f is decreasing over I if f(x)₁ > f(x₂)" (`f{(x)}_{1}`); meant is f(x₁) > f(x₂). Marker after the words, note `c-decreasing`. In the exercises: the key's answer to 193 is the proof about two cars, which answers 191; that proof is set under 191 with note `c-key-191`, and 193 carries an AI approach with note `c-key-193`.

## Colour, referents and function tokens

Types: `function` for f, g, s (the rock's position, as in 2.1); `derivative` for f′, g′, s′ and v (velocity, as in 3.4); `line` for the secant and the tangents; `point` for the points c. a, b, c, k and C are ink; h of Corollary 2's proof and F of the antiderivative preview are written plain (no row of this section gives them a meaning). `set` for I. No referents: Corollary 2's f and g share no figure. Function tokens: |x| − 1, x² + 2x, x³ − 4x, √x, −16t² + 100 is in t and stays plain; the checkpoint's 2x² − 8x + 6.

## Figures

- `fig-rolle-cases` · Figure 4.21 · `rolles-theorem` · faithful still copy: the book's three panels (a cap, a cup, one period of a wave) on stand-in curves, f(a) = f(b) dropped, the horizontal tangents at c (c₁, c₂) · standardisation only · still · 2D.
- `fig-rolle-fails` · Figure 4.22 · `rolles-theorem` · faithful copy drawn live of |x| − 1 on [−1, 1], its corner named · still · 2D.
- `fig-rolle-parabola`, `fig-rolle-cubic` · Figures 4.23, 4.24 · `rolles-theorem` · faithful copies of Example 4.14's two functions with their points c and horizontal tangents; each part of the example reads its own figure, so not folded · still · 2D.
- `sim-mean-value` · Figure 4.25 + 4.26 · `mean-value-theorem`, `rolles-theorem` · value add: variation, and the proof made visible: the book draws one curve twice, once with the secant and its parallel tangents at c₁ and c₂, once with the gap g(x) of the proof; here one curve over [a, b] carries the secant and the parallel tangents, and a second graph below draws g(x), 0 at a and b, with its horizontal tangents at the same c, which is Rolle's theorem for g · arrows: none · still · sliders a and b (ink, kept 0.2 apart; a dashed circle on b where f(b) = f(a), the Rolle case) · headline "The secant's slope is −0.250; the tangent has that slope at c₁ = 0.845 and c₂ = 3.155." · graph below graph (two panels sharing x) · readout the secant's slope and f′(c) at each c · 2D. The book prints no formula: the stand-in −x³/4 + 3x²/2 − 9x/4 + 5/2 falls to c₁, rises to c₂ and falls to b, as the book's curve does. Folded: Figure 4.26 is the same curve redrawn in the proof, and its caption's g(x) is the lower panel; its number and image are kept under `folds` and `originals`.
- `fig-mvt-root` · Figure 4.27 · `mean-value-theorem` · faithful copy: √x on [0, 9], the secant, the parallel tangent at 9/4 · still · 2D.
- `fig-mvt-rock` · Figure 4.28 · `mean-value-theorem` · faithful copy: s(t) = −16t² + 100 on [0, 5/2], the secant of slope −40 and the tangent at 5/4; a height slider would answer Checkpoint 4.15, so none · still · 2D.
- `fig-sign-of-derivative` · Figure 4.29 · `increasing-decreasing-corollary` · faithful copy on a stand-in cubic with a local maximum at a and minimum at b, f′ > 0, f′ < 0, f′ > 0 written on the three stretches in `derivative` · still · 2D.

Photographs: none. Exercise figures: none.

## Exercises

- Checkpoints 4.14 (c = 2) and 4.15 (5/(2√2) sec, a number), inline after Examples 4.14 and 4.16.
- Section exercises 148–193: 23 keyed odd ones kept (191 with the book's proof moved from 193's key). Kept with AI-marked approaches: 148, 150 (why continuity, when Rolle and the MVT agree), 168, 170 (show there is no c), 182, 184 (one root), 190 (the police cars), 192 (sec² and tan²), and 193 (its key misprinted). Left out, computational: 152–166 even, 172–180 even, 186, 188 (15).
- Review exercise 525 (true by the MVT, keyed) is set here in the chapter pass, `source_section` 4.10.

## Extra simulations (rule 15)

`sim-mean-value` is the required figure. Judged and dropped: the 45 mph car as a moving Sim (the text's one line says it; Example 4.16's rock is the same idea with a figure); a Corollary 2 Sim of two curves f and g = f + C (4.10's family of antiderivatives draws exactly that). None built.

## Wanted at chapter level

- forms `eq-mean-value-theorem` → `4.4-mean-value-theorem`; `eq-constant-difference` → `4.4-corollary-2`.
- Review 525 lands in the chapter pass.


## Derivations

- Rolle's Theorem · Proof · score 3 · built as drv-rolles-theorem, cases 1 and 2 as two nodes (the constant rule; the extreme value theorem and Fermat's theorem); the case list stays above it and case 3, left as analogous, below
- Mean Value Theorem · Proof · score 1 · built as drv-mean-value-theorem: the secant line from (1.3) and (1.4), g(x), g(a) = 0 and g(b) = 0 (hidden, worked), g′(x) and Rolle's theorem joined at c; the paragraph defining g and its continuity kept above
- Corollary 1 · Proof · score 1 · built as drv-functions-with-zero-derivative (the set-up sentences kept above; the contradiction is the last move)
- Corollary 2 · Proof · score 0 · built as drv-constant-difference-theorem (a thin printed proof, one node)
- Corollary 3 · Proof · score 1 · built as drv-increasing-functions; the book's f(a) > f(b) is corrected to f(a) ≥ f(b) in the derivation, its note saying what the book printed; part ii, left as similar, stays in the book's words
