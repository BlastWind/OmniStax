# Plan: 7.1 Integration by Parts (m53656)

Source: `source.md`, converted with `tools/convert.py 7`. Status: plan; config 2 waives the review for this run (Chen, 2026-10-12), built the same day, decisions reported afterwards. Template: `ch01/1.1` for conventions.

Three objectives, an opening paragraph, two theorem notes (Equations 7.1 and 7.2), Examples 7.1–7.7, four checkpoints (7.1–7.4), Figures 7.2 and 7.3, two Key Equations, two Key Concepts, 68 section exercises (34 keyed), one glossary term, one media note. One page (root rule 11).

## Sub-concepts (page headers)

The book's two headers apply and are kept (root rule 3).

0. `intro` (no header): the opening paragraph, the section's own introduction (root rule 21.3); introduces `integration-by-parts` at its {term}.
1. `formula` **The Integration-by-Parts Formula**: the derivation from the product rule, the theorem note (`parts-theorem`, Equation 7.1, id `fs-id1165042232372`), Example 7.1 with its Analysis, Checkpoint 7.1, the LIATE paragraphs (`liate`), Example 7.2 and Checkpoint 7.2, Examples 7.3–7.5 (parts more than once, the t³e^{t²} exception, sin(ln x) with I), Checkpoint 7.3. Introduces `integration-by-parts` (the theorem's statement is its note), `liate`, `integrating-by-parts-more-than-once` (at "it may be necessary to apply integration by parts more than once").
2. `definite` **Integration by Parts for Definite Integrals**: the theorem note (`parts-definite-theorem`, Equation 7.2, id `fs-id1165042231112`), Example 7.6 (Figure 7.2), Example 7.7 (Figure 7.3), Checkpoint 7.4. Introduces `integration-by-parts-for-definite-integrals`.

Examples keep the book's ids and numbers (Example 7.1 `fs-id1165041832973` … 7.7 `fs-id1165042058871`), each whole (config 7). Objectives and glossary go to the tables, Key Concepts to `summary_html`, the two Key Equations are the forms `eq-integration-by-parts` and `eq-integration-by-parts-definite` in "Theorems and formulas". The media note (a video and a site of examples) is dropped and named in `notes`. References to the theorem's equation read "Equation 7.1" / "Equation 7.2", linked to the equation's id.

The Integral Calculator sheet is linked where the text first applies the technique: Example 7.1's "Use integration by parts" opens `/calculus/sheets/integral-calculator/?expr=x*sin(x)` (config 24).

## Concept nodes (merged in book.json)

Introduced here: `integration-by-parts` (result, untyped; forms `eq-integration-by-parts` main, `eq-integration-by-parts-fg`), `liate` (skill), `integrating-by-parts-more-than-once` (skill), `integration-by-parts-for-definite-integrals` (result; form `eq-integration-by-parts-definite`). Uses: `product-rule`, `indefinite-integral`, `antiderivative`, `definite-integral`, `integration-by-substitution` (the u-substitutions inside Examples 7.6 and 7.4), `fundamental-theorem-of-calculus-part-2`, `area-under-the-curve` (Example 7.6), the shell method of Chapter 6 (Example 7.7), `logarithmic-function`, `inverse-trigonometric-functions`, `algebraic-function`, `trigonometric-functions`, `exponential-function` (the LIATE classes, where the text names them).

## Colour, referents and function tokens

Categories (`ch07/COLOR.md`): `integral` for every written integral where it is named as one (the integrals of the examples stay plain math; I of Example 7.5 wears `\kI`), the area of Example 7.6 and the volume of 7.7; `function` for f, g, h of the derivation; `region` for the solid of Figure 7.3. u, v, du, dv, x, t, C and K stay ink.

Referents: `parts-under` (the region under tan⁻¹x, the area ∫u dv) and `parts-beside` (the region between the curve and the y-axis, the area ∫v du), drawn by `sim-parts-area`; the text of Example 7.6 marks "the region" and "the shaded region" `parts-under`, and the caption marks both.

Function tokens: the integrand of each example and checkpoint where the text states a function (x sin x, x e^{2x}, ln x / x³, x ln x, x² e^{3x}, t³ e^{t²}, sin(ln x), x² sin x, tan⁻¹x on [0, 1], e^{−x}, x cos x), each `data-fn` with its rule in x.

## Figures

- `sim-parts-area` · Figure 7.2 · `integration-by-parts-for-definite-integrals`, `area-under-the-curve` · value add: intuition and variation: the graph of u = tan⁻¹x against v = x from (0, 0) to (b, tan⁻¹b) splits the rectangle uv|₀ᵇ = b·tan⁻¹b into the area under the curve, ∫u dv, and the area beside it, ∫v du = ∫₀ᵇ x/(x² + 1) dx = ½ln(1 + b²); dragging b keeps the split true, which is Equation 7.2 drawn; at b = 1 it is the book's region, area π/4 − ½ln 2 ≈ 0.4388 · arrows: none · still, it answers the slider · slider b (ink, 0.25 to 3, step 0.01, default 1, a special at 1, the book's) · headline: "b = 1: the box π/4 ≈ 0.785 is 0.439 under the curve and 0.347 beside it" · graph alone · 2D. Axes fixed at x 0 to 3.2, y 0 to 1.4 (tan⁻¹3 ≈ 1.25), from the slider's reach. Readout: ∫₀ᵇ tan⁻¹x dx = x tan⁻¹x|₀ᵇ − ∫₀ᵇ x/(x² + 1) dx with the numbers. Labels: the two areas by `∫u dv` and `∫v du` on panels beside them; the curve by its name y = tan⁻¹x.
- `sim-shell-volume` · Figure 7.3 · `integration-by-parts-for-definite-integrals` (the integral it sets up) · value add: depth (a solid of revolution, `RULES.md` Figures) and variation: the region under e⁻ˣ on [0, 1] revolved about the y-axis as a translucent solid, one shell at radius x the reader slides, its height e⁻ˣ, the rectangle that sweeps it drawn in the profile plane · arrows: none · still · slider x (ink, 0.05 to 1, default 0.5) · headline: "The shell at x = 0.50 has radius 0.50 and height e^{−0.50} ≈ 0.61" · 3D, mathematical (house style, no ground, free orbit; a solid of revolution is read in depth), no buttons (no viewpoint is the lesson and nothing is fine enough for zoom). Readout: V = 2π∫₀¹ x e^{−x} dx = 2π − 4π/e ≈ 1.6603 and the shell's 2πx e^{−x}Δx. Built on `F.revolve`, the solid-of-revolution part Chapter 6 added to figlib. Labels: the shell by hover name, the curve y = e⁻ˣ by a pinned label.

Exercise figures: the answer graph of 59 (`CNX_Calc_Figure_07_01_202.jpg`) stays the book's image in its solution. Photographs: none.

## Exercises

- Checkpoints 7.1–7.4, kind `checkpoint`, inline after Examples 7.1, 7.2, 7.5 and 7.7, hint and answer behind reveals (config 6); 7.1–7.3 open answers (antiderivatives), 7.4 a number (π/2 − 1).
- Section exercises 1–68, kind `exercise`, each with its group's stem (config 10). The 34 odd ones are keyed and kept; 49 ("Answers vary", a derivation) keeps the book's words and an AI-marked approach. Kept with AI-marked approaches (config 12): 48 and 50 (derive the reduction formulas), 52, 54 and 56 (would you integrate by parts, and with which u and dv, or how otherwise). The other 29 even ones are computational and left out, named in `exercise_notes`.
- Review exercises held here (`source_section` 7.7): 411 (integration by parts can always yield the integral, keyed False), 408 (∫eˣ sin x cannot be done by parts, unkeyed true or false, kept with an AI-marked approach); 412 and 414 (unkeyed computational) left out.
- Every card tagged with the concepts it tests; Bloom per card.

## Extra simulations (rule 15)

Judged and not built: a LIATE chooser (u = x against u = sin x for Example 7.1, the new integral shown for each) repeats the Analysis, which already writes both; an animation of the product rule integrated adds nothing the parts rectangle does not. `sim-parts-area` above is the section's view the text lacks.

## Wanted at chapter level

Anchors confirmed with `ost ids calculus 7.1` after the build.

- forms `eq-integration-by-parts` → `7.1-fs-id1165042232372`, `eq-integration-by-parts-fg` → `7.1-formula`, `eq-integration-by-parts-definite` → `7.1-fs-id1165042231112`.
- variables `7.1/f`, `7.1/g`, `7.1/h`, `7.1/u`, `7.1/v`, `7.1/x` → `7.1-formula`; a variables row `7.1/I` (concept `indefinite-integral`, meaning "the integral ∫sin(ln x) dx, named so that the equation it appears in can be solved for it", `redefines`, after `ost meanings calculus I`) → Example 7.5's id.
- Review 408 and 411 rows are added in the chapter pass once 7.7 is built.
