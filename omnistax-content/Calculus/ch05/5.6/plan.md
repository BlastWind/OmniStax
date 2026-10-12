# Plan: 5.6 Integrals Involving Exponential and Logarithmic Functions (m53635)

Source: `source.md`, converted with `tools/convert.py 5`. Status: built 2026-10-12 straight through (config 2 waives the review for this run; decisions reported afterwards). Template: `ch01/1.1`.

Two objectives, an opening paragraph, two rules (exponential and logarithmic integrals), Figures 5.37–5.39, Examples 5.37–5.48, Checkpoints 5.31–5.39, two Key Equations rows, two Key Concepts, 71 section exercises (35 keyed). No glossary.

## Sub-concepts (page headers)

The book's headers: `p#explog-intro`; `exponential` **Integrals of Exponential Functions** (the rule `exp-rule`, Examples 5.37–5.44, the price–demand paragraph, Figures 5.37 and 5.38); `logarithmic` **Integrals Involving Logarithmic Functions** (the rule `log-rule`, the Sim, Examples 5.45–5.48, Figure 5.39). The source's literal dollar amounts ($2.35, $1.99) are escaped as `&#36;`.

## Concept nodes

Introduced: results `integrals-of-exponential-functions`, `integrals-involving-logarithmic-functions`; definitions `price-demand-function` (function, p), `marginal-price-demand-function` (derivative, p′), both in the paragraph before Example 5.40. Uses: `exponential-function`, `logarithmic-function`, `natural-logarithm`, `absolute-value-function`, `integration-by-substitution`, `net-change-theorem`, `antiderivative`.

## Colour, referents and function tokens

p, Q, G and the rates q, g wear their concepts' types (`function`, `integral` for the antiderivatives Q and G, `derivative` for p′); the asymptote x = 10 `line`; a and C ink. Exercise 389's p(x) is a normal distribution and is set plain. Function tokens: x⁻¹, ln x, the price–demand p(x).

## Figures

- `fig-exp-root` · Figure 5.37 (Example 5.38) · standardisation only: eˣ√(1 + eˣ) on [−3, 1], its y-intercept (0, √2) · still · 2D.
- `fig-exp-area` · Figure 5.38 (Example 5.41) · standardisation only: e^(1−x), the region on [1, 2] · still · 2D.
- `fig-reciprocal-shift` · Figure 5.39 (Example 5.45) · standardisation only: 3/(x − 10) and the asymptote x = 10 in `line` · still · 2D.
- `sim-reciprocal-log` · Sim · `integrals-involving-logarithmic-functions` · value add: variation: the signed area under 1/t from 1 to x (x > 0) or from −1 to x (x < 0), a choice of side and |x| on a slider (0.25–4, detent 1), with ln|t| drawn so that the area at x is its height · arrows: none · still · headline "The signed area under 1/t from 1 to x = 3.00 is 1.099, which is ln|x|." · readout ∫ dt/t = value = ln|x| · graph alone · 2D. Rule 14: the logarithm rule's absolute value has no figure; the symmetry of 1/t about the origin is why it is there.

Extra simulations weighed and dropped: the bacteria and fruit-fly cultures growing (the examples are one evaluation each, and the net change theorem has 5.4's moving figure).

## Exercises

- Checkpoints 5.31–5.39 inline after their examples.
- Section exercises 320–390: the 35 odd ones keyed and kept, 385 with an AI-written proof since the key says only "Answers will vary." Even ones kept with AI-written proofs: 382, 384, 386, 388; the computational evens left out and named in `exercise_notes`.
- Review exercise 461 (average cost of RAM from 2005 to 2010) set here, `source_section` 5.7; its prompt carries 460's statement of C(t), named in `changes`.

## Wanted at chapter level

Applied by this chapter's agent: variables anchors (f, a, C → `5.6-exp-rule`; u → Example 5.37; p, p′ → `5.6-exponential`; q, Q → Example 5.42; g, G → Example 5.43) and forms anchors (the exponential forms → `5.6-exp-rule`, the logarithmic forms → `5.6-log-rule`). Done.
