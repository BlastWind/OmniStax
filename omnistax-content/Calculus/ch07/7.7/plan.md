# Plan: 7.7 Improper Integrals (m53686)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-12. Template: `ch01/1.1`.

Three objectives, two opening paragraphs, two definition notes (Equations 7.16–7.21), one theorem note, the Student Project (Laplace Transforms), Figures 7.17–7.22 (7.20 a photograph), Examples 7.47–7.56, three checkpoints (7.27–7.29), one Key Equations row, three Key Concepts, 61 section exercises (31 keyed), the chapter's 24 review exercises, one glossary term, one media note.

## Sub-concepts (page headers)

0. The two opening paragraphs.
1. `infinite` **Integrating over an Infinite Interval**: Figure 7.17, the definition `infinite-definition` (Equations 7.16–7.18; introduces `improper-integral` and `integral-over-an-infinite-interval`), Example 7.47 (Figure 7.18), Example 7.48 (Figure 7.19), the paragraph `gabriels-horn`, the media note dropped, Example 7.49 (the opener, Figure 7.20), Examples 7.50, 7.51, Checkpoint 7.27.
2. `discontinuous` **Integrating a Discontinuous Integrand**: Figure 7.21, the definition `discontinuous-definition` (Equations 7.19–7.21), Examples 7.52–7.54, Checkpoint 7.28.
3. `comparison` **A Comparison Theorem**: Figure 7.22, the theorem `comparison-theorem`, Examples 7.55, 7.56, Checkpoint 7.29, the Student Project `laplace-project` with its five questions (lists numbered 1–3, 4, 5 as printed).

## Concept nodes

Introduced: `improper-integral`, `integral-over-an-infinite-interval` (three forms), `integral-of-a-discontinuous-integrand` (three forms), `gabriels-horn` (idea, region), `comparison-theorem-for-improper-integrals` (result), `laplace-transform` (definition, integral; form `eq-laplace-transform`). Uses: `definite-integral`, `limit-at-infinity`, `disk-method`, `solid-of-revolution`, `integration-by-parts`, `lhopitals-rule`, `infinite-discontinuity`, `one-sided-limit`, `integral-comparison-theorem`.

## Colour, referents

`integral` for the areas, the volume V, the gauges; `limit` for the value approached; `line` for the asymptote x = b; `region` for the horn. Referents `lower-f` and `upper-g` (Figure 7.22, the comparison's f and g), marked in the paragraph before the figure and in its caption.

## Figures

The book's curves in Figures 7.17, 7.21 and 7.22 carry no formula; the section's own examples stand in (1/x², 1/√(4 − x), and the pair 1/(xeˣ) ≤ e⁻ˣ of Example 7.55).

- `sim-improper-infinite` · Figure 7.17 · `integral-over-an-infinite-interval` · variation: the book's three panels as one slider on t; a gauge beside the graph shows the area rising toward the dashed limit 1 · still · slider t (1.2 to 40) · 2D.
- `sim-area-reciprocal` · Figure 7.18 · `improper-integral` · the area under 1/x from 1 to t (default 4, the book's), its gauge passing every level · slider t (1.2 to 400) · 2D.
- `sim-gabriels-horn` · Figure 7.19 · `gabriels-horn` · value add: depth (a solid of revolution) and variation: the horn cut at t, its volume π(1 − 1/t) closing on π beside the profile area ln t · mathematical 3D on `F.revolve`, free orbit, no buttons · slider t (1.5 to 10).
- `fig-intersection-again` · Figure 7.20 · photograph kept: Example 7.49 prints it in its problem; caption "(credit: …)" whole.
- `sim-improper-discontinuous` · Figure 7.21 · `integral-of-a-discontinuous-integrand` · variation: t → 4⁻ under 1/√(4 − x) (converges to 4, Example 7.52) and under 1/(4 − x) (diverges), the asymptote dashed · choice, slider t · 2D.
- `sim-comparison` · Figure 7.22 · `comparison-theorem-for-improper-integrals` · variation: two gauges, the area under f always the smaller, the area under g approaching e⁻¹ · slider t · 2D.

## Exercises

- Checkpoints 7.27–7.29 inline after Examples 7.51, 7.54, 7.56.
- Section exercises 347–407: 31 odd keyed and kept (405's key "Answers will vary" gets an AI-marked approach); 406 kept with an AI-marked approach; 29 even computational ones left out. "Divergent" answers are a converges / diverges choice.
- Review exercises 427 (keyed), 428, 429 (AI-marked proofs) held here; 426, 430, 431 left out. Review 429's prompt carries the next group's Bugatti stem and graph (a conversion slip); the card drops them.
- Corrections: Example 7.49's "Revise to:" and its 3.8 × 10⁻¹¹ / 8 months, Example 7.50's lim as x → −∞.

## Extra simulations (rule 15)

None beyond the figures: a Laplace-transform Sim was weighed and left out, since the project asks the reader to compute the transforms.

## Wanted at chapter level

- forms `eq-improper-to-infinity` → `7.7-fs-id1165043372378`, `eq-improper-from-minus-infinity` → `7.7-fs-id1165043086270`, `eq-improper-whole-line` → `7.7-fs-id1165042478832`, `eq-improper-right-endpoint` → `7.7-fs-id1165042617693`, `eq-improper-left-endpoint` → `7.7-fs-id1165042506827`, `eq-improper-interior-point` → `7.7-fs-id1165043378015`, `eq-laplace-transform` → `7.7-laplace-project`.
- variables `7.7/f`, `7.7/g`, `7.7/t` → `7.7-infinite`; `7.7/A` → Example 7.47; `7.7/V` → Example 7.48; `7.7/λ` → Example 7.49; `7.7/F`, `7.7/s` → `7.7-laplace-project`.
- The chapter's review rows: 408, 411 → 7.1; 413, 419 → 7.3; 409, 415, 421 → 7.4; 417 → 7.5; 410, 423, 425 → 7.6; 427–429 → 7.7.
