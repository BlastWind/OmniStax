# Plan: 6.1 The Laplace transform (laplace:section)

Source: `source.md` from `tools/convert.py 6`. Status: plan (prep stage one, 2026-10-19); built straight through later (config 2). Template: `ch00/0.2`.

Three book subsections; Table 6.1; Theorems 6.1.1 (Linearity), 6.1.2 (Existence), 6.1.3 (Uniqueness); three boxed formulas; Examples 6.1.1–6.1.7; inline Exercises 6.1.1–6.1.4; end Exercises 6.1.5–6.1.15 and 6.1.101–6.1.104 (15, four keyed); three book footnotes (Laplace, "frequency", Heaviside). No figure. The section note is dropped.

## Sub-concepts (page headers)

The book's own:
1. `the-transform` **The transform**: the opening paragraphs (`p#black-box` names the transform, `p#frequency-domain` the standard equation mx″ + cx′ + kx = f(t)), the boxed definition `eq-lt-definition`, Examples 6.1.1–6.1.4 (6.1.4 defines the unit step in `p#unit-step` inside it), `sim-laplace-area` after Example 6.1.4, the table paragraph with Table 6.1 (`table-6-1`, the appendix link to the sheet), Try It 6.1.1, the linearity paragraph, Theorem 6.1.1 (`thm-6-1-1`), Try It 6.1.2, the sum example, the product warning and the functions with no transform.
2. `existence-uniqueness` **Existence and uniqueness**: exponential order (`p#exponential-order`), Try It 6.1.3, Theorem 6.1.2 (`thm-6-1-2`), the comparison argument, the decay at infinity (`p#decay`), Theorem 6.1.3 (`thm-6-1-3`), the piecewise-continuous paragraph (`p#piecewise`).
3. `the-inverse` **The inverse transform**: the definition (`p#inverse-definition`), Example 6.1.5, linearity of the inverse, Example 6.1.6 (partial fractions, `p#partial-fractions` is the example's first paragraph), the first shifting property (`eq-first-shifting`), Try It 6.1.4, the completing-the-square paragraph, Example 6.1.7, proper rational functions (`p#proper-rational`).

## Concepts (staged in `book-rows.json`)

Introduced: `laplace-transform` (definition, type transform, symbol F; Calculus 7.7's id, declared here with the book's type; form `eq-lt-definition`), `frequency-domain` (idea, `p#frequency-domain`), `laplace-transform-table` (result; forms `eq-lt-constant` … `eq-lt-step`, the eleven entries), `unit-step-function` (definition, symbol u; form `eq-unit-step`; Example 6.1.4), `linearity-of-the-laplace-transform` (result, Theorem 6.1.1; forms `eq-lt-linearity`, `eq-lt-constant-multiple`), `exponential-order` (definition; forms `eq-exponential-order`, `eq-exponential-order-limit`), `existence-of-the-laplace-transform` (result, Theorem 6.1.2), `laplace-transform-decay` (result; form `eq-lt-decay`), `uniqueness-of-the-laplace-transform` (result, Theorem 6.1.3), `inverse-laplace-transform` (definition; forms `eq-inverse-lt-definition`, `eq-inverse-lt-linearity`), `partial-fraction-decomposition` (skill, Calculus 7.4's id; Example 6.1.6), `first-shifting-property` (result; form `eq-first-shifting`), `proper-rational-function` (definition), `computing-a-laplace-transform` (skill, Examples 6.1.1–6.1.3), `inverting-with-the-table` (skill, Examples 6.1.5–6.1.7).
Reinforced: `piecewise-continuous-function` (Chapter 4's 4.3 id, which merges first; "piecewise continuous" in `p#piecewise` marks it and links 4.3). Uses: `mass-spring-system` (Chapter 2, the standard equation), `differential-equation`, `linear-differential-equation`. Calculus links on the book's words: improper integrals and the comparison theorem (Calculus 7.7), integration by parts (7.1), partial fractions (7.4), L'Hôpital's rule (4.8, Exercise 6.1.3).

## Colour, referents and symbols

f, g in `function` (`\kf`, `\kg`), F, G in `transform` (`\kF`, `\kG`), u in `function` (`\ku`), x, x′, x″ of the standard equation in `function`/`derivative`; the Laplace integral and "the improper integral" in `integral` through their spans; s, t, a, C, A, B, M, c, t₀, h, ω, n in ink; ℒ and ℒ⁻¹ in ink. No referents.

## Figures

The book draws nothing here.

- `sim-laplace-area` · Sim (3Blue1Brown survivor 6, picked by Chen; judged weak in the survey and kept: the section's only picture, and "exists for s > c" is otherwise only ever stated) · `laplace-transform`, `laplace-transform-table`, `existence-of-the-laplace-transform`, `laplace-transform-decay` · value add: intuition and variation: a choice of f from the table (1, t, e^(−at), cos ωt, u(t − a); the book's Examples 6.1.1–6.1.4 are the first four states), s on a slider; left, f(t) faint and the integrand e^(−st) f(t) solid with the area under it shaded in `integral`, the exponential factor pressing the function down faster as s grows; right, F(s) over s in `transform` with the point (s, F(s)) marked and the dashed vertical at the existence threshold (s = 0, or s = −a for the exponential), which the reader sees the area running away toward as s slides down to it · arrows: none · still: a slider figure with no clock · sliders s (−1 to 6, step 0.05, default 1; the threshold a dashed special where the area diverges, placed from a by `specials`), and a or ω for the choices that have one (a −1 to 2, default 1; ω 0.5 to 4, default 1), choice of f (five options) · headline "s = 1.00: the area under e^(−st)·t is 1/s² = 1.00." (each choice writes its own table entry) · two panels beside each other, t 0 to 6 on the left (the integrand's tail beyond is written in the readout as part of the area), s on the right over the slider's range, F pinned above 4 · 2D. Readout: F(s) = ∫₀^∞ e^(−st) f(t) dt = <the entry> = value; below the threshold "the integral diverges: no transform for s ≤ a". The oscillating choices (cos ωt) shade a signed area; the readout says so.

Extra Sims weighed and left out: the first shifting property as the graph of F(s) sliding to F(s + a) (a horizontal shift the reader can imagine; one sentence says it); an animation of a partial-fraction split (algebra, no view).

## Derivations (rule 29)

- Example 6.1.3, ℒ{t} by parts · worked example of the section's method, 3 printed moves · score 2 (integration by parts imported; the limit te^(−st) → 0 skipped) · not built.
- The existence argument under Theorem 6.1.2 (comparison with Me^(ct)) · prose, 3 moves · score 2 · not built.
- The first shifting property · asked of the reader (Try It 6.1.4), not printed · not built.
- Example 6.1.6 (partial fractions) and 6.1.7 (completing the square) · worked examples of the method · score 1 · not built.

## Exercises

- Try Its (kind `inline-exercise`), each with an AI-marked approach checked by SymPy: 6.1.1 after `table-6-1` (each entry from the definition; the nine integrals computed), 6.1.2 after `thm-6-1-1` (linearity of the integral), 6.1.3 after `p#exponential-order` (tⁿ/e^(ct) → 0 by n applications of L'Hôpital; a sum of exponential-order functions is of exponential order), 6.1.4 after `eq-first-shifting` (substitute into the definition: ∫ e^(−st) e^(−at) f dt = ∫ e^(−(s+a)t) f dt = F(s + a)).
- End exercises 6.1.5–6.1.15 (kind `exercise`, unkeyed), every one kept with an AI-marked solution, computed answers verified at prep with SymPy and re-verified at build: 6.1.5 3/s + 120/s⁶ + π/(s² + π²); 6.1.6 a/s + b/s² + 2c/s³; 6.1.7 (As + Bω)/(s² + ω²); 6.1.8 (s² + 2ω²)/(s(s² + 4ω²)) via cos² = (1 + cos 2ωt)/2; 6.1.9 (4/3) sinh 3t; 6.1.10 2 cosh t; 6.1.11 ½te^t − ¼e^t + ¼e^(−t) (A/(s−1) + B/(s−1)² + C/(s+1) with A = −¼, B = ½, C = ¼); 6.1.12 e^(−s)(1/s² + 1/s) (from the definition, ∫₁^∞ te^(−st) dt); 6.1.13 (2/7)e^(−t/2) cos(√7 t/2) − (2/7)e^(−4t) (partial fractions (2s + 1)/(7(s² + s + 2)) − 2/(7(s + 4)), complete the square (s + ½)² + 7/4, shift); 6.1.14 (ω cos ωa − s sin ωa)/(s² + ω²) for the function as written (expand sin(ωt − ωa)); the solution notes that if the signal is meant to start at t = a the answer is e^(−as) ω/(s² + ω²), which 6.2's second shifting property gives; 6.1.15 2ωs/(s² + ω²)² (two integrations by parts, or as −d/ds of ω/(s² + ω²)). Answer shapes: `open` for a formula; 6.1.7 and 6.1.8 are formulas with parameters, `open`.
- 6.1.101–6.1.104 (kind `exercise`): the book's `\exsol` as the answer, all four verified by SymPy at prep (8/s³ + 8/s² + 4/s; 2t² − 2t + 1 − e^(−2t); 1/(s + 1)²; 1/(s² + 2s + 2)).
- Symbols in prompts through the macros (f, F, u); the one-off constants a, b, c, A, B, ω stay in ink.

## Wanted at chapter level

- Anchors: variables f, F → `6.1-black-box`; g, G → `6.1-thm-6-1-1`; u → `6.1-unit-step`; x, x′, x″ → `6.1-frequency-domain`. Forms: `eq-lt-definition` → `6.1-eq-lt-definition`; the eleven table entries → `6.1-table-6-1`; `eq-unit-step` → `6.1-unit-step`; `eq-lt-linearity`, `eq-lt-constant-multiple` → `6.1-thm-6-1-1`; `eq-exponential-order`, `eq-exponential-order-limit` → `6.1-exponential-order`; `eq-lt-decay` → `6.1-decay`; `eq-inverse-lt-definition` → `6.1-inverse-definition`; `eq-inverse-lt-linearity` → `6.1-inverse-linearity`; `eq-first-shifting` → `6.1-eq-first-shifting`.
- Variables `concept` links at stage two (`ost meanings diffyqs f`, `F`, `u`, `g`): F → `laplace-transform` (F was Chapter 1's potential function; `redefines` if the checker asks across chapters), u → `unit-step-function` (Chapter 1's u was the PDE unknown).
- The sheet link: "appendix B" → `/diffyqs/sheets/laplace-table/` once the sheet task has written it.
