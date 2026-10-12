# Plan: 5.5 Substitution (m53634)

Source: `source.md`, converted with `tools/convert.py 5`. Status: built 2026-10-12 straight through (config 2 waives the review for this run; decisions reported afterwards). Template: `ch01/1.1`.

Two objectives, opening paragraphs, two theorems (substitution with indefinite and with definite integrals), one proof, one Problem-Solving Strategy, Examples 5.30–5.36, Checkpoints 5.25–5.30, two Key Equations rows, two Key Concepts, 66 section exercises (33 keyed), 2 glossary terms. No figures.

## Sub-concepts (page headers)

The book prints only two headers, "Proof" (at the level of a section) and "Substitution for Definite Integrals". The page keeps the opening paragraphs as the section's introduction (`p#substitution-intro`), opens `indefinite` **Substitution with Indefinite Integrals** at the theorem of that name (the header is OmniStax's, the theorem's own title), sets "Proof" as the h3 under the theorem, and keeps `definite` **Substitution for Definite Integrals**. Notes: `substitution-indefinite`, `substitution-strategy`, `substitution-definite`.

## Concept nodes

Introduced: skill `integration-by-substitution` (the strategy; terms "integration by substitution", "u-substitution"), definition `change-of-variables`, results `substitution-with-indefinite-integrals`, `substitution-with-definite-integrals`. Uses: `chain-rule`, `antiderivative`, `indefinite-integral`, `power-rule-for-integrals`, `limits-of-integration`, `fundamental-theorem-of-calculus-part-2`, `trigonometric-identity`.

## Colour, referents and function tokens

f, g wear `function`, g′ and F′ `derivative` (a new 5.5 row for F′ on `derivative-function`), F `integral`; u and du ink. No referents, no function tokens (the integrands are not functions given by a rule). Example 5.30's "Use substitution to find the antiderivative" links the Integral Calculator with its integrand, whose steps show the substitution.

## Figures

- `sim-substitution` · Sim · `substitution-with-definite-integrals`, `integration-by-substitution` · value add: variation: Example 5.34's x²(1 + 2x³)⁵ over [0, b] beside (1/6)u⁵ over [1, 1 + 2b³], b on a slider (0.05–1, default 1); one region tall and narrow, the other low and wide, of equal area for every b, with the top strip of [0, b] and its image in u picked out and equal too · arrows: none · still · headline "b = 1.00: x runs from 0 to 1.00 while u runs from 1 to 3.000; both regions have area 20.222, …" · readout ∫₀ᵇ … dx = (1/6)∫₁^(1+2b³) u⁵ du = value · two graphs side by side · 2D. Rule 14: the section's results have no figure in the book; this shows what the change of the limits of integration does to the region.

## Exercises

- Checkpoints 5.25–5.30 inline after Examples 5.30–5.35.
- Section exercises 254–319: the 33 odd ones keyed and kept. Even ones kept with AI-written answers: 254, 304 (explanations), 306, 308, 310, 312 (each definite integral shown to be zero); the computational evens left out and named in `exercise_notes`.
- Review exercises 449 and 451 set here, `source_section` 5.7.

## Wanted at chapter level

Applied by this chapter's agent: the variables row F′ for 5.5 (`derivative-function`, `redefines`), variables anchors (f, g, g′, u, F, C → `5.5-substitution-indefinite`; F′ → `5.5-indefinite`) and forms anchors (`eq-substitution-indefinite`, `eq-substitution-definite`). Done.
