# Plan: 6.7 Integrals, Exponential Functions, and Logarithms (m53650)

Source: `source.md`. Status: plan; config 2 waives the review for this run, decisions reported afterwards.

Seven objectives, three opening paragraphs, four definitions, six theorem notes, two proofs, Figures 6.75 to 6.78, Examples 6.35 to 6.41, seven checkpoints (6.35–6.41), seven Key Equations, 53 section exercises (295–347, 27 odd, 24 keyed).

## Sub-concepts (the book's headers)

0. `exp-log-intro` (no header): reinforces `natural-logarithm`, `number-e`.
1. `ln-integral` **The Natural Logarithm as an Integral**: `ln-definition` introduces `natural-logarithm-as-an-integral`.
2. `ln-properties` **Properties of the Natural Logarithm**: `ln-derivative-theorem` (reinforces `derivative-of-the-natural-logarithm`), `ln-continuity-theorem` (introduces `continuity-of-the-natural-logarithm`), `ln-integral-theorem` (reinforces `integrals-involving-logarithmic-functions`), `ln-properties-theorem` and its proof (reinforces `properties-of-logarithms`), Examples 6.35–6.37.
3. `number-e` **Defining the Number e**: `e-definition` introduces `number-e-as-an-area`.
4. `exponential` **The Exponential Function**: `exp-definition` introduces `exponential-function-as-inverse-of-ln`.
5. `exp-properties` **Properties of the Exponential Function**: `exp-properties-theorem` and proof (reinforces `laws-of-exponents`), d/dx eˣ (reinforces `derivative-of-the-natural-exponential-function`), Examples 6.38, 6.39.
6. `general` **General Logarithmic and Exponential Functions**: `general-exponential-definition` introduces `general-exponential-function-by-e`; the two theorems reinforce `derivatives-of-general-exponential-and-logarithmic-functions`; Examples 6.40, 6.41.

Equations numbered for the book: 6.24 to 6.26.

## Colour and referents

`function` for 1/t, ln and exp; `integral` for the signed area; `line` for y = x. Referents `ln-curve` and `exp-curve` in Figure 6.78, marked in the sentence that introduces it.

## Figures

- `sim-ln-area` · Figure 6.75 + 6.76 + 6.77 · `natural-logarithm-as-an-integral`, `number-e-as-an-area` · value add: variation: the signed area under 1/t from 1 to x (hatched and counted negative below 1) beside the point (x, ln x) on the graph of ln; specials at 1 and e, where the area is 0 and 1 · still · slider x (0.2 to 4), drag on the ln graph · 2D. Folded: 6.75's two cases, 6.76's graph and 6.77's area 1 are one picture read at three values of x.
- `fig-ln-exp` · Figure 6.78 · faithful copy with y = x, referents.

## Exercises

- Checkpoints 6.35–6.41 inline, all open (derivatives, antiderivatives, a single logarithm).
- Section exercises 295–347: the 24 keyed odd kept (numbers where the key gives one); 343, 345, 347 (verify, no key) with AI verifications. The 26 even ones left out.
- No review exercises target this section.

## Extra simulations (rule 15)

Judged: ln(ab) = ln a + ln b as the area from a to ab equal to the area from 1 to b (the proof's substitution; worth it but the plan keeps to one Sim per idea and the fold already carries the area definition); exp as the reflection of ln, dragged (Figure 6.78 shows it still). None built.

## Wanted at chapter level

- variables `6.7/f` → `6.7-ln-properties`.
- forms `eq-ln-as-integral` → `6.7-ln-definition`; `eq-e-by-area` → `6.7-e-definition`; `eq-exp-as-inverse`, `eq-exp-ln-inverse` → `6.7-exp-definition`; `eq-general-exponential` → `6.7-general-exponential-definition`.

Applied in the chapter pass (2026-10-13): every anchor above set with `ost set` (tmp/ch06/anchors6.py; a few spans moved to the nearest id the text has, such as the section header where the plan named a note); review exercises held here landed with `source_section` 6.9.

## Derivations

- Derivative of the Natural Logarithm (from the integral definition) · score 1 · not built: one move ("falls out immediately" from the Fundamental Theorem), no equation worked
- Properties of the Natural Logarithm · Proof, part ii · score 2 · built as a node of drv-properties-of-the-natural-logarithm, after part i (ln 1 = 0) as its first node
- Properties of the Natural Logarithm · Proof, part iv · score 2 · built as the last five nodes of the same derivation (the two derivative lines joined by the constant difference theorem of 4.4, then x = 1)
- part iii left to the reader · score 3 · not built: three moves, under the floor
- Properties of the Exponential Function · Proof (property i) · score 0 · built as drv-product-of-exponentials
- the derivative of e^x · score 1 · built as drv-derivative-of-the-exponential-function, with ∫e^x dx = e^x + C as its second node (3.9 states E'(x) = e^x in prose, not worked)
- d/dx a^x · score 1 · not built: a restatement of (3.34), built in 3.9; stays as printed
- log_a x = ln x/ln a and its derivative · score 0 · not built: restatements of 1.5's change-of-base formula and (3.32), both built there; stay as printed
- Defining the Number e · existence and uniqueness ("left to you") · score 8 · built as drv-existence-of-e after the paragraph (ln 4 ≥ 13/12 by the comparison theorem, then the Intermediate Value Theorem and ln increasing, as the hint says)
