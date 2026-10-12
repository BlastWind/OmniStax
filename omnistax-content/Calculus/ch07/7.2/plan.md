# Plan: 7.2 Trigonometric Integrals (m53657)

Source: `source.md`, converted with `tools/convert.py 7`. Status: plan; config 2 waives the review for this run (Chen, 2026-10-12), built the same day. Template: `ch01/1.1`.

Three objectives, an opening paragraph, two strategy notes, two rule notes (Equations 7.3–7.7), Examples 7.8–7.20, nine checkpoints (7.5–7.13), no figure in the book, five Key Equations, a Key Concepts list, 57 section exercises (29 keyed), two glossary terms, one media note.

## Sub-concepts (page headers)

0. `trig-intro`: the opening paragraph; introduces `trigonometric-integral` at its {term}; links "Trigonometric Substitution" to `/calculus/ch07/7.3/`.
1. `sin-cos` **Integrating Products and Powers of sin x and cos x**: Examples 7.8–7.10 with Checkpoints 7.5–7.7, the power-reducing identities (paragraph `power-reducing`), the strategy note `sin-cos-strategy`, Examples 7.11, 7.12, Checkpoints 7.8, 7.9, the rule note `products-rule` (Equations 7.3–7.5), the paragraph `sum-of-angles`, the Sim `sim-product-to-sum`, Example 7.13, Checkpoint 7.10.
2. `tan-sec` **Integrating Products and Powers of tan x and sec x**: the four integrals already learned (a list), Example 7.14, Checkpoint 7.11, the strategy note `tan-sec-strategy`, Examples 7.15–7.18, Checkpoint 7.12.
3. `reduction` **Reduction Formulas**: the paragraph `reduction-intro` (term), the rule note `reduction-rule` (Equations 7.6, 7.7), Examples 7.19, 7.20, Checkpoint 7.13.

The headers print sin x as math. The Integral Calculator is linked at Example 7.8's "u-substitution" (`?expr=cos(x)^3*sin(x)`). The media note (a site on ∫sec³x) is dropped and named in `notes`.

## Concept nodes

Introduced: `trigonometric-integral` (definition, integral), `power-reducing-identities` (result; forms `eq-sin-squared-reducing`, `eq-cos-squared-reducing`), `integrating-products-and-powers-of-sine-and-cosine` (skill), `products-of-sines-and-cosines-of-different-angles` (result; forms `eq-sine-products` 7.3, `eq-sine-cosine-products` 7.4, `eq-cosine-products` 7.5), `integrating-products-and-powers-of-tangent-and-secant` (skill), `power-reduction-formulas` (result; forms `eq-secant-reduction` 7.6, `eq-tangent-reduction` 7.7). Uses: `trigonometric-functions`, `integration-by-substitution`, `integration-by-parts`, `double-angle-formulas`, `pythagorean-identities`, `addition-and-subtraction-formulas`, `trigonometric-identity`, `trigonometric-substitution`.

## Colour, referents and function tokens

`integral` for the integrals the text names and the readout; `function` for the product curve. u, j, k, n, a, b stay ink. Referents `wave-diff` and `wave-sum`, the two half waves of the Sim, marked in its caption. Function tokens on every example's integrand (12).

## Figures

The book draws none.

- `sim-product-to-sum` · Sim · `products-of-sines-and-cosines-of-different-angles`, `power-reducing-identities` · value add: intuition and variation: the product of sin or cos of ax and bx is drawn as the sum of the two half waves of (a − b)x and (a + b)x that Equations 7.3–7.5 rewrite it as, and the readout integrates each; with b = a the same picture is the power-reducing identity (a dashed special on b at a) · arrows: none · still · choice sin·sin / sin·cos / cos·cos, sliders a and b (integers 1 to 8, defaults 5 and 3, Example 7.13) · headline: the identity with the numbers · graph alone, legend beside · 2D. Axes −π to π by −1.5 to 1.5. Frequencies written positive (cos even, sin odd).

## Exercises

- Checkpoints 7.5–7.13 inline after Examples 7.8, 7.9, 7.10, 7.12 (two), 7.13, 7.14, 7.18, 7.20; open answers with the book's hints.
- Section exercises 69–125: the 29 odd ones keyed and kept; 124 (which integral is harder, and why) kept with an AI-marked approach; the other 27 even ones computational and left out (`exercise_notes`).
- Correction: exercise 77's key prints (x/2)(x/2) + C₁ for tan²(x/2) + C₁, a note under the card (`c-e77-key`).

## Extra simulations (rule 15)

`sim-product-to-sum`, built (above). Judged and not built: an odd-power peeler (sin⁵x split into sin⁴x · sin x) restates the strategy's algebra; a reduction-formula ladder repeats the examples' lines.

## Wanted at chapter level

- forms: `eq-sin-squared-reducing`, `eq-cos-squared-reducing` → `7.2-power-reducing`; `eq-sine-products` → `7.2-fs-id1165043229277`, `eq-sine-cosine-products` → `7.2-fs-id1165042349512`, `eq-cosine-products` → `7.2-fs-id1165042332192`; `eq-secant-reduction` → `7.2-fs-id1165043276273`, `eq-tangent-reduction` → `7.2-fs-id1165039565660`.
- variables `7.2/u`, `7.2/j`, `7.2/k`, `7.2/n` → `7.2-sin-cos`; add `7.2/a`, `7.2/b` (ink, the factors of x in sin(ax), cos(bx), `redefines`) → `7.2-products-rule`.
