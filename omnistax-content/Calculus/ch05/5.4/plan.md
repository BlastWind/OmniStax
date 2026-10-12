# Plan: 5.4 Integration Formulas and the Net Change Theorem (m53633)

Source: `source.md`, converted with `tools/convert.py 5`. Status: built 2026-10-12 straight through (config 2 waives the review for this run; decisions reported afterwards). Template: `ch01/1.1`.

Four objectives, an opening paragraph, one theorem (net change), one rule (even and odd functions), Figures 5.32–5.36, Examples 5.23–5.29, Checkpoints 5.21–5.24, one Key Equations row, two Key Concepts, 47 section exercises (24 keyed), one glossary term.

## Sub-concepts (page headers)

The book's headers: `p#formulas-intro`; `basic-formulas` **Basic Integration Formulas** (Example 5.23; the first sentence links the Table of Integrals sheet on "integration formulas" and 4.10 on "Antiderivatives"); `net-change-theorem` **The Net Change Theorem** (the theorem `net-change`, the car of Figure 5.32, Examples 5.24 and 5.25 with Figure 5.33); `applying` **Applying the Net Change Theorem** (Examples 5.26 and 5.27, the iceboat photo Figure 5.34); `even-odd` **Integrating Even and Odd Functions** (the rule `even-odd-rule`, Examples 5.28 and 5.29 with Figures 5.35 and 5.36).

## Concept nodes

Introduced: results `net-change-theorem` (two forms, terms "net change theorem", "net change"), `integrals-of-even-and-odd-functions` (two forms). The forms of `displacement-from-velocity` (5.2's idea), net displacement ∫v and total distance ∫|v|, are stated here and anchored here. Uses: `power-rule-for-integrals`, `properties-of-the-definite-integral`, `instantaneous-rate-of-change`, `fundamental-theorem-of-calculus`, `even-function`, `odd-function`, the two symmetries.

## Colour, referents and function tokens

v(t) is integrated and wears `function` (row `velocity`, override `function`; its meaning also covers Example 5.27's wind speed, so the row carries `redefines`); F `integral`, F′ `derivative` (`instantaneous-rate-of-change`); the shaded areas `integral`. No referents. Function tokens: x² − 3x, 3t − 5, e^t/2 − 2, 20t + 5.

## Figures

- `fig-car-velocity` · Figure 5.32 · standardisation only: the levels 40 on [2, 4] and −30 on [4, 5] with their areas · still · 2D. 5.2's moving car already shows a two-way trip.
- `sim-particle` · Figure 5.33 (Examples 5.24, 5.25) · `displacement-from-velocity`, `net-change-theorem` · value add: flow by animation: the particle moves on its line (kinematic: its motion, with a velocity arrow in `function` notation) while the area under v(t) = 3t − 5 fills in up to the moving time; it goes left until t = 5/3, then turns · moving, 5 s a run, 1.2 s hold · headline "t = 3.00 sec: the particle is 1.50 m to the left of its start, after 6.83 m of travel." · readout ∫₀ᵗ v = s and ∫₀ᵗ |v| = distance, live · scene above graph · 2D. The book's picture is the end state.
- `fig-iceboat-race` · Figure 5.34 · photo, kept: Example 5.27 points at it; its caption is the book's credit.
- `fig-even-function` · Figure 5.35 (Example 5.28) · standardisation only: 3x⁸ − 2 at the book's two zooms, the positive area at the ends and the negative area between the zeros ±(2/3)^(1/8) · still · 2D.
- `fig-odd-function` · Figure 5.36 (Example 5.29) · standardisation only: −5 sin x on [−π, π] · still · 2D.

Extra simulations weighed and dropped: the iceboat run of Example 5.27 (5.2's car and this page's particle already animate a distance from a velocity), an even/odd symmetry slider on a (the two figures draw the rule, and a slider adds no view).

## Exercises

- Checkpoints 5.21–5.24 inline after Examples 5.23, 5.25, 5.27 and 5.29.
- Section exercises 207–253: the 24 odd ones keyed and kept; every even one is computational and left out, named in `exercise_notes`.
- Review exercises set here, `source_section` 5.7: 447 (a polynomial integral), 459 (the cost of RAM in 1980 from its five-year changes, with the book's table), 463 (the bullet's average velocity; its prompt carries 462's statement of v(t), named in `changes`).

## Wanted at chapter level

Applied by this chapter's agent: variables anchors (f → `5.4-basic-formulas`; F, F′ → `5.4-net-change`; v → `5.4-net-change-theorem`; v's meaning reworded with `redefines`) and forms anchors (`eq-net-change`, `eq-net-change-difference` → `5.4-net-change`; `eq-net-displacement`, `eq-total-distance` → `5.4-net-change-theorem`; the two even/odd forms → `5.4-even-odd-rule`). Done.
