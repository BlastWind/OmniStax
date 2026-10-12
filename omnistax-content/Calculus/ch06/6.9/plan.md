# Plan: 6.9 Calculus of the Hyperbolic Functions (m53653)

Source: `source.md`. Status: plan; config 2 waives the review for this run, decisions reported afterwards.

Three objectives, an opening paragraph, Figures 6.81 to 6.84, Tables 6.2 to 6.4, Examples 6.47 to 6.51, five checkpoints (6.47–6.51), three Key Concepts, 58 section exercises (377–434, 29 odd), the chapter's 27 review exercises (434 is the last section exercise; 435–460 review), one glossary term.

## Sub-concepts (the book's headers)

0. `hyperbolic-intro` (no header): reinforces `hyperbolic-functions`.
1. `hyperbolic` **Derivatives and Integrals of the Hyperbolic Functions**: Table 6.2, the integral formulas, Examples 6.47, 6.48. Introduces `derivatives-of-hyperbolic-functions`, `integrals-of-hyperbolic-functions`.
2. `inverse-hyperbolic` **Calculus of Inverse Hyperbolic Functions**: Tables 6.3, 6.4, the integral formulas, Examples 6.49, 6.50. Introduces `derivatives-of-inverse-hyperbolic-functions`, `integrals-involving-inverse-hyperbolic-functions`.
3. `applications` **Applications**: the chains photograph, the catenary, Example 6.51. Introduces `catenary`.

No numbered equations in this module.

## Colour and referents

`function` for the hyperbolic functions and their inverses, `derivative` for their derivatives, `line` for tangent lines and y = x, `integral` for the cable's length. No referents.

## Figures

- `sim-hyperbolic` · Figure 6.81 · `derivatives-of-hyperbolic-functions` · value add: discrete states and variation: a choice of the six functions (the book's six panels), each above its derivative from Table 6.2, with the tangent at the dragged x and the derivative's value beneath · still · choice of six, slider x (drag) · 2D.
- `sim-inverse-hyperbolic` · Figure 6.82 · `inverse-hyperbolic-functions` · value add: discrete states: a choice of the six inverses, each with the function it inverts faint and the mirror y = x · still · choice of six · 2D.
- `fig-chains` · Figure 6.83 · photograph kept.
- `sim-catenary` · Figure 6.84 · `catenary` · value add: variation: y = a cosh(x/a), the book's a = 2 a special, the cable between posts at ±4 and its length 2a sinh(4/a) · still · slider a (0.8 to 5) · 2D. Checkpoint 6.51 (a = 15 on [−20, 20]) is not reachable.

## Exercises

- Checkpoints 6.47–6.51 inline; 6.47–6.50 open, 6.51 a number.
- Section exercises 377–434: the odd ones kept; 379, 381, 383, 419 ("Answers may vary") and 429, 431, 433 (no key) with AI answers; 421's key 37.30 depends on a g the book does not give, kept as an open answer. The 29 even ones left out.
- Example 6.51 prints "Recall from Section 2.4": reworded to Section 6.4 (linked) with a correction note giving the printed words.
- Review exercises: 459 (the catenoid's volume) here; the others landed in 6.2–6.6 and 6.8; 440, 442, 444, 446, 448, 450, 452, 454, 456, 460 (no key) left out.

## Extra simulations (rule 15)

Judged: the catenoid of review exercises 459–460 (its volume is the exercise); a hanging chain the reader pulls (exercises 422–428 compute it). None built.

## Wanted at chapter level

- variables `6.9/f` → `6.9-hyperbolic`.
- forms of `derivatives-of-hyperbolic-functions` → `6.9-fs-id1167793363804` (Table 6.2); `integrals-of-hyperbolic-functions` → `6.9-hyperbolic`; `derivatives-of-inverse-hyperbolic-functions` → `6.9-fs-id1167794020892` (Table 6.4); `integrals-involving-inverse-hyperbolic-functions` → `6.9-inverse-hyperbolic`; `eq-catenary` → `6.9-applications`.

Applied in the chapter pass (2026-10-13): every anchor above set with `ost set` (tmp/ch06/anchors6.py; a few spans moved to the nearest id the text has, such as the section header where the plan named a note); review exercises held here landed with `source_section` 6.9.
