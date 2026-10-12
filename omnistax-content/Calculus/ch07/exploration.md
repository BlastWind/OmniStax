# Exploration: Calculus, Chapter 7 Techniques of Integration

Written 2026-10-12, before the chapter's sections were built. The eight modules (Volume 2, Chapter 3) were converted with `python3 tools/convert.py 7` and read; the book's organization and apparatus are as `RULES.md` records them, and nothing in this chapter departs from that account. `config.md` beside this file is the agreed list.

## Why this chapter

Chapter 5 gave the reader the definite integral, the Fundamental Theorem and substitution; Chapter 6 used them for areas, volumes, arc lengths and work. This chapter widens the set of integrals the reader can evaluate and then admits the ones nobody can. 7.1 turns the product rule into integration by parts, gives LIATE as the guide to choosing u, applies the formula twice and solves for a recurring integral, and evaluates definite integrals by parts (the area under tan⁻¹x, the shell volume of e⁻ˣ). 7.2 integrates products and powers of sin x and cos x (odd powers peeled off, even powers reduced by the power-reducing identities), the products sin(ax)cos(bx) and their kin, products and powers of tan x and sec x, ∫sec³x by parts, and the two reduction formulas. 7.3 substitutes x = a sin θ, a tan θ, a sec θ for √(a² − x²), √(a² + x²), √(x² − a²), with a reference triangle to return to x, and once x = sinh θ. 7.4 decomposes rational functions into partial fractions: long division first, nonrepeated and repeated linear factors, the methods of equating coefficients and of strategic substitution, irreducible quadratic factors. 7.5 uses a table of integrals and a CAS and reconciles answers that look different. 7.6 approximates definite integrals by the midpoint, trapezoidal and Simpson's rules, defines absolute and relative error and bounds the error. 7.7 defines improper integrals over infinite intervals and of integrands with an infinite discontinuity, answers the opener's traffic question (Example 7.49), builds Gabriel's horn, proves a comparison theorem and closes on the Laplace Transforms project.

## Modules

Ex. = worked examples, Fig. = numbered figures, Img. = unnumbered images, CP = checkpoints (all keyed), Exer. = section exercises (chapter-wide numbers), Keyed = those carrying the book's solution, Gl. = glossary entries, KE = Key Equations rows, Eq. = equations the book numbers.

| Section | Module | Ex. | Fig. | Img. | Notes | CP | Exer. | Keyed | Gl. | KE | Eq. | Media |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m53654 | 0 | 1 photo | 0 | — | 0 | 0 | 0 | 0 | 0 | 0 | — |
| 7.1 Integration by Parts | m53656 | 7 | 2 | 1 (answer of 59) | 2 theorems | 4 | 1–68 | 34 | 1 | 2 | 2 (7.1, 7.2) | 1 (video and site, examples of parts) |
| 7.2 Trigonometric Integrals | m53657 | 13 | 0 | 0 | 2 rules, 2 strategies | 9 | 69–125 | 29 | 2 | 5 | 5 (7.3–7.7) | 1 (the integral of sec³x) |
| 7.3 Trigonometric Substitution | m53659 | 7 | 7 | 0 | 3 strategies | 3 | 126–181 | 28 | 1 | 0 | 0 | — |
| 7.4 Partial Fractions | m53681 | 8 | 1 | 1 (prompt of 230) | 2 rules, 1 strategy | 4 | 182–243 | 31 | 1 | 0 | 2 (7.8, 7.9) | 1 (long division) |
| 7.5 Other Strategies for Integration | m53684 | 3 | 1 | 0 | — | 1 | 244–298 | 27 | 2 | 0 | 0 | 1 (an integral calculator) |
| 7.6 Numerical Integration | m53685 | 8 | 4 | 0 | 1 definition, 4 theorems, 1 rule | 5 | 299–346 | 24 | 6 | 6 | 6 (7.10–7.15) | — |
| 7.7 Improper Integrals | m53686 | 10 | 6 (1 photo) | 1 (review 429–431) | 2 definitions, 1 theorem, 1 Student Project | 3 | 347–407 | 31 | 1 | 1 | 6 (7.16–7.21) | 1 (Gabriel's Horn) |
| Review (in 7.7) | m53686 | — | — | — | — | — | 408–431 | 11 | — | — | — | — |

407 section exercises, 204 keyed; 24 review exercises, 11 keyed; 29 checkpoints (7.1–7.4 in 7.1, 7.5–7.13 in 7.2, 7.14–7.16 in 7.3, 7.17–7.20 in 7.4, 7.21 in 7.5, 7.22–7.26 in 7.6, 7.27–7.29 in 7.7); 56 worked examples; 14 glossary entries. The key answers the odd numbers only. The glossary of 7.6 runs "trapezoidal rule" into the Simpson's rule entry; it is split into two terms.

## Figure, table, example and equation numbers

Counted from the CNXML in book order, the opener as Figure 7.1; a bare `<media>` and a table with class `unnumbered` take no number. The chapter prints no numbered table.

| Section | Figures | Examples | Equations |
|---|---|---|---|
| intro | 7.1 a busy intersection (splash photo) | — | — |
| 7.1 | 7.2 the area under tan⁻¹x on [0, 1] (Ex. 7.6), 7.3 the shell of e⁻ˣ about the y-axis (Ex. 7.7) | 7.1–7.7 | 7.1 ∫u dv = uv − ∫v du, 7.2 its definite form |
| 7.2 | — | 7.8–7.20 | 7.3–7.5 the three product formulas, 7.6–7.7 the reduction formulas for secⁿx and tanⁿx |
| 7.3 | 7.4 the triangle for x = a sin θ, 7.5 and 7.6 those of Ex. 7.21 and 7.22, 7.7 the triangle for x = a tan θ, 7.8 that of Ex. 7.24, 7.9 the two triangles for x = a sec θ, 7.10 the area under √(x² − 9) on [3, 5] (Ex. 7.27) | 7.21–7.27 | — |
| 7.4 | 7.11 the region under x²/(x² + 1)² on [0, 1] (Ex. 7.35) | 7.28–7.35 | 7.8 3x + 2 = A(x − 2)(x + 1) + Bx(x + 1) + Cx(x − 2), 7.9 the numerators of Example 7.33 |
| 7.5 | 7.12 the two antiderivatives of sin³x (Ex. 7.38) | 7.36–7.38 | — |
| 7.6 | 7.13 the rectangles of M₄, 7.14 the trapezoids of T₄, 7.15 trapezoids beside midpoints, 7.16 Simpson's parabolas | 7.39–7.46 | 7.10 Mₙ, 7.11 Tₙ, 7.12 and 7.13 the error bounds of Mₙ and Tₙ, 7.14 Sₙ, 7.15 the error bound of Sₙ |
| 7.7 | 7.17 ∫ₐᵗf as t grows, 7.18 the area under 1/x (Ex. 7.47), 7.19 Gabriel's horn (Ex. 7.48), 7.20 the intersection again (photo, Ex. 7.49), 7.21 ∫ₐᵗf as t → b⁻, 7.22 0 ≤ f ≤ g | 7.47–7.56 | 7.16–7.18 the integrals over infinite intervals, 7.19–7.21 those of a discontinuous integrand |

The book numbers 21 equations in this chapter, not only the 7 with `class="numbered"` (7.1–7.7): a CNXML `<equation>` with no class is numbered too, as its links show (Example 7.50's "using Equation 7.17 from the definition", Example 7.44's "the error-bound Equation 7.12"), and only `class="unnumbered"` takes no number. The text keeps all 21 with `\tag{7.N}` and the book's id, and every "[ref:…]" to one reads "Equation 7.N", linked.

## What is new

- The chapter's main type is `integral`: every ∫ expression, antiderivative and definite integral, the area it is, the volumes of 7.1 and 7.7, the integral I of Example 7.4, the approximations Mₙ, Tₙ, Sₙ and the sums Lₙ, Rₙ of 7.6 (each a sum of signed areas, as Chapter 5's Riemann sums are), an improper integral and its value, and the Laplace transform F(s) of the project. `function` for f, g and the parts u = f(x), v = g(x) of 7.1, the rational function P(x)/Q(x) and its pieces in 7.4, the interpolating quadratic p(x) of 7.6. `error` for the absolute and relative errors and the error bounds of 7.6, the first pages that use the type. `angle` for θ of the trigonometric substitutions. `region` for the solids of revolution (Figures 7.3 and 7.19), `line` for the asymptote x = b of Figure 7.21, `limit` for the limit in an improper integral's definition where the text names the value approached.
- The book's numbered equations: 21 here (see above). Chapters 1 and 2 print classless equations too and were built without their numbers; that is for Chen.
- Two figures are solids of revolution (7.3, 7.19), mathematical 3D through `F.view3d` (`RULES.md`, Figures); the library has no surface of revolution, so the first section that needs one either reuses Chapter 6's part, if Chapter 6 has added one by then, or adds a lathe part in its own block.
- The Integral Calculator sheet (`/calculus/sheets/integral-calculator/`, step by step through parts, substitution, trigonometric rewriting and partial fractions; `?expr=` hands it an integrand) and the Table of Integrals (`/calculus/sheets/integrals/`) are linked where the text first uses each technique and where 7.5 names a table and a CAS (config 24).
- Concepts: about 45, every glossary word among their `terms`; prerequisite edges go into Chapter 3 (the product rule, the derivatives of the trigonometric and inverse trigonometric functions), Chapter 5 (antiderivative, indefinite and definite integral, Riemann sums, the Fundamental Theorem, substitution, the integrals of exponential, logarithmic and inverse trigonometric functions), Chapter 6 (area between curves, the shell method, arc length) and Chapter 2 (limit, infinite limit).

## Sketches to replace and photographs

Every graph is replaced by a live figure from the book's function (config 18). Folds the plans weigh: 7.14 + 7.15 (trapezoids, then trapezoids beside midpoints, one choice), the three panels of 7.17 and of 7.21 (one slider on t each), the two panels of 7.16 (one slider on n). The reference triangles 7.4–7.9 are drawn live from one helper: the three general ones as Sims on x (the triangle reshapes and θ = sin⁻¹(x/a), tan⁻¹(x/a), sec⁻¹(x/a) follows), the three of the examples as faithful stills. Where the book draws no formula (7.13–7.17, 7.21, 7.22) the plan names a stand-in from the section's own examples.

Photographs: Figure 7.1 (the intersection, opener) kept; Figure 7.20 (the same photograph inside Example 7.49) kept, since the example prints it in its problem.

## Notes and media

Five media notes are dropped and named in `notes` (config 14): 7.1's video and site of parts examples, 7.2's site on ∫sec³x, 7.4's review of long division, 7.5's link to an integral calculator (the book's own Integral Calculator sheet is linked in its place), 7.7's site on Gabriel's Horn. Each seeds a Sim candidate. 7.7's Student Project (Laplace Transforms) is a note with its five questions (config 15). The chapter prints no proof under a theorem; the derivations (the formula of 7.1 from the product rule, Simpson's rule in 7.6) stay in the text where they stand. Problem-Solving Strategies: two in 7.2, three in 7.3, one in 7.4, each a note and a `skill`. Cross-module references: the intro's "(see Example 7.49)" and 7.2's and 7.5's links to "Trigonometric Substitution" become links to the built sections.

## Errors noticed in reading (corrections per book-corrections-as-notes)

- 7.2, exercise 73: the key prints "(x/2)(x/2) + C₁"; the first form is tan²(x/2) + C₁.
- 7.3, Example 7.26: the side note says "√(1 + 4x²) = tan θ"; it is sec θ. Example 7.27: "Use tan²θ = 1 − sec²θ"; it is sec²θ − 1.
- 7.6, the derivation of Simpson's rule: "Combining these two approximations, we get ∫ from x₂ to x₄ … =" names the wrong interval and an equality; it is ∫ from x₀ to x₄ ≈. Example 7.45 writes S₄ for S₂. Checkpoint 7.24 says 24/35 came from T₂; it came from M₂ (Checkpoint 7.22). Checkpoint 7.25 cites the trapezoidal bound for an error in M₄; the answer 1/192 is the midpoint bound.
- 7.7, Example 7.49: an editor's "Revise to:" stands at the head of the solution, and its last paragraph gives 3.8 × 10⁻¹¹ as the probability of no accidents in 8 months, where the computation gives about 0.0357 for 10 months. Example 7.50 writes lim as x → −∞ for t → −∞.

## Exercises that belong to another section

The Chapter Review Exercises (408–431) are printed at the end of 7.7 and placed with the section that introduces what each tests (config 11), `source_section` 7.7:

- 7.1: 411 (integration by parts always yields the integral, keyed False); 408 (∫eˣ sin x cannot be done by parts, unkeyed true or false) kept with an AI-marked approach; 412, 414 (unkeyed parts) left out.
- 7.3: 413 (trigonometric substitution, keyed), 419 (x³√(x² + 2), keyed, the integral of Example 7.23 and Checkpoint 7.15's kind); 416 left out.
- 7.4: 409 (1/(x⁴ + 1) and partial fractions, keyed False), 415, 421 (keyed); 420 left out.
- 7.5: 417 (a table or a CAS, keyed); 418, 422 left out.
- 7.6: 423, 425 (M₄, T₄, S₄, keyed); 410 (more points, less error: unkeyed true or false) kept with an approach; 424 left out.
- 7.7: 427 (keyed); 428 and 429 (the gamma function, unkeyed proofs) kept with approaches; 426 left out. 430 (fit a curve to the Bugatti's velocity graph) is unkeyed computational and left out, and 431, keyed only "answers may vary", integrates 430's fit, so it is left out with it.

Unkeyed even section exercises are judged per plan under config 12. Kept with approaches: 7.1's 48 and 50 (derive the reduction formulas), 52, 54, 56 (would you integrate by parts, and with which u, or how otherwise); 7.2's 124 (which of two integrals is harder, and why); 7.3's 168 (show two substitutions agree) and 170 (state a method and why); 7.4's 242 (derive the Weierstrass formulas); 7.6's 342 (why numerical methods), 344 and 346 (Simpson's rule's partitions and its error formula, multiple choice); 7.7's 406 (show f is a probability density function). Every other unkeyed exercise is computational and left out, named in `exercise_notes`.

## Rule 23: what would make this chapter stunning

Techniques of integration read as algebra, and the live page can show what each manipulation is. Integration by parts is a rectangle: the curve from (v(a), u(a)) to (v(b), u(b)) splits the box uv into ∫u dv beneath it and ∫v du beside it, so the area under tan⁻¹x on [0, 1] is the box π/4 less the sliver ½ ln 2, and dragging the right end keeps the split true. A product of sines becomes two waves added: sin 5x cos 3x is drawn over ½ sin 2x + ½ sin 8x, and when a = b the same picture is the power-reducing identity, sin²x riding ½ less a wave that integrates away. A trigonometric substitution is a triangle the reader reshapes, the radical always one side and θ the angle that x picks. A partial fraction decomposition is a graph pulled apart at its poles, each branch owned by one term, and strategic substitution is reading each term's coefficient where its pole stands. The numerical rules are rectangles, trapezoids and parabolas over one curve as n rises, with the error shrinking like 1/n² or 1/n⁴ in the readout and the concavity deciding who overestimates. An improper integral is an endpoint dragged off to infinity while the area either settles (1 − 1/t → 1) or keeps climbing (ln t), and Gabriel's horn turns in 3D, its volume closing on π while the area of its profile grows without bound.
