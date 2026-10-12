# Plan: 6.8 Exponential Growth and Decay (m53651)

Source: `source.md`. Status: plan; config 2 waives the review for this run, decisions reported afterwards.

Four objectives, an opening paragraph, two rules, two definitions, Figures 6.79 and 6.80, Table 6.1, Examples 6.42 to 6.46, five checkpoints (6.42–6.46), five Key Concepts, 29 section exercises (348–376, 14 keyed), four glossary terms.

## Sub-concepts (the book's headers)

0. `growth-decay-intro` (no header).
1. `growth` **Exponential Growth Model**: y′ = ky (Equation 6.27), `growth-rule`, the bacteria (Figure 6.79, Table 6.1), Example 6.42, compound interest and Example 6.43, doubling time and `doubling-definition`, Example 6.44. Introduces `exponential-growth`, `doubling-time`.
2. `decay` **Exponential Decay Model**: `decay-rule`, Figure 6.80, Newton's law of cooling and Example 6.45, half-life and `half-life-definition`, Example 6.46. Introduces `exponential-decay`, `newtons-law-of-cooling`, `half-life`.

## Colour and referents

`function` for f, T and the growth and decay curves; ink for the doubling and halving steps. No referents.

## Figures

- `sim-growth` · Figure 6.79 · `exponential-growth`, `doubling-time` · value add: variation: the text's bacteria f(t) = 200e^{kt} over two hours, k from 0.01 to 0.04 (the book's 0.02 a special; Checkpoint 6.42's 0.05 out of range), the doublings every (ln 2)/k stepped in, a dragged point reading f(t) · still · sliders k, t · 2D.
- `sim-decay` · Figure 6.80 · `exponential-decay`, `half-life` · value add: variation: y = 100e^{−kt}, the halvings stepped in · still · slider k · 2D.
- Table 6.1 stays a table.

## Exercises

- Checkpoints 6.42–6.46 inline, multi-part where the book asks two things.
- Section exercises 348–376: the 14 keyed odd kept; 351's key adds k = ln 2/t, the constant of the e^{−kt} form, corrected under its card. The 15 even ones left out.
- Review exercises held here (chapter pass): 438 (seaborgium, no key, AI), 457 (time of death; stem dropped, the book prints it under 454–455's), 458 (the Dow Jones, no key, AI).

## Extra simulations (rule 15)

Built: `sim-cooling`, an added Sim after Example 6.45: the coffee's T(t) = 130e^{−kt} + 70 with the serving band 155°F–175°F and the room's 70°F; the example's question read off a curve the reader drags along. Fixed to the example's data, so Checkpoint 6.45 (75°F, 185°F) is not answered. Judged and dropped: continuous versus periodic compounding (Example 6.43's text table does it); radiocarbon (a decay curve with other numbers).

## Wanted at chapter level

- variables `6.8/f` → `6.8-growth`; `6.8/y_prime` → `6.8-growth-rule`; `6.8/T`, `6.8/T_prime` → `6.8-decay`.
- forms `eq-exponential-growth`, `eq-exponential-growth-rate` → `6.8-growth-rule`; `eq-doubling-time` → `6.8-doubling-definition`; `eq-exponential-decay`, `eq-exponential-decay-rate` → `6.8-decay-rule`; `eq-newtons-law-of-cooling`, `eq-newtons-law-of-cooling-rate` → `6.8-decay`; `eq-half-life` → `6.8-half-life-definition`.
- Review exercises 438, 457, 458 (tmp/ch06/sec_6_8.py, `RV`).

Applied in the chapter pass (2026-10-13): every anchor above set with `ost set` (tmp/ch06/anchors6.py; a few spans moved to the nearest id the text has, such as the section header where the plan named a note); review exercises held here landed with `source_section` 6.9.
