# Plan: 2.3 Higher-order linear ODEs (sec:hol)

Source: `source.md`. Status: plan; built straight through 2026-10-19. Template: Calculus `ch17/17.1`.

An opening, two book subsections; equations (2.4), (2.5); Theorems 2.3.1 (Superposition), 2.3.2 (Existence and uniqueness), 2.3.3; Examples 2.3.1–2.3.5; one book footnote (monic); no inline exercise; end exercises 2.3.1–2.3.11 and 2.3.101–2.3.106 (17, six keyed). No figure. The section note is dropped. Citations [EP] and [F] in Example 2.3.1 keep their brackets (entries footnoted in 0.1).

## Sub-concepts (page headers)

0. `hol-intro`: the two opening paragraphs (the section's own introduction, no header).
1. `hol-general` **The general linear equation** (OmniStax's header for the book's unheaded run before its first subsection): (2.4), Theorem 2.3.1, "linear combination", Theorem 2.3.2.
2. `linear-independence` **Linear independence** (the book's): the definition for n functions, "linearly dependent", Examples 2.3.1, 2.3.2, the sentence before Theorem 2.3.3, Theorem 2.3.3.
3. `cc-higher` **Constant-coefficient higher-order ODEs** (the book's): the song and dance, Example 2.3.3 ((2.5), the roots, the footnote, the constants), repeated real roots, Example 2.3.4, repeated complex roots, Example 2.3.5.

## Concept nodes

Introduced: `higher-order-linear-equation` (definition, (2.4); form `eq-higher-order-homogeneous`), `superposition-for-higher-order-equations` (result, Theorem 2.3.1; form `eq-superposition-n`), `existence-and-uniqueness-for-higher-order-linear-equations` (result, Theorem 2.3.2), `linear-independence-of-several-functions` (definition; form `eq-linear-independence-n`), `linear-dependence` (definition), `general-solution-of-a-higher-order-homogeneous-equation` (result, Theorem 2.3.3; form `eq-general-solution-n`), `solutions-for-repeated-real-roots` (result: a root repeated k times gives e^{rx}, xe^{rx}, …, x^{k−1}e^{rx}; form), `solutions-for-repeated-complex-roots` (result; form), `solving-higher-order-constant-coefficient-equations` (skill: the guess y = e^{rx}, finding the roots by trying r = 0, ±1 and dividing, one solution per root counted with multiplicity).
Reinforced: `linear-combination`, `linear-independence`, `characteristic-equation`, `constant-coefficient-equation`, `hyperbolic-functions` (Example 2.3.2). Uses: `superposition-principle`, `existence-and-uniqueness-for-linear-equations`, `general-solution-to-a-homogeneous-equation`, `solution-for-a-repeated-real-root`, `solution-for-complex-conjugate-roots`, `linear-differential-equation`, `order-of-a-differential-equation`.

## Colour

`function`: y, y₁…yₙ (\ky, \kyone, \kytwo, \kyn); `derivative`: y′, y″, y‴, y⁽⁴⁾, y⁽⁵⁾, y⁽ⁿ⁾, y⁽ⁿ⁻¹⁾ (\kyprime, \kydprime, \kytprime, \kyfourth, \kyfifth, \kynth, \kynmoneth); `eigenvalue`: r, r₁, r₂, r₃ (\kr, \krone, \krtwo, \krthree) and α, β. Ink: x, z = eˣ of Example 2.3.1, c₁…cₙ, C₁…C₄, C₀…, D₀…, k (a multiplicity), the coefficients pₖ(x), f(x) of Theorem 2.3.2 (\kf, a function), b₀…bₙ₋₁, a. No referents.

## Figures

The book draws nothing here, and none is added: the examples are root-finding and independence arguments in algebra; a roots-plane picture of a quartic would repeat 2.4's free-motion figure without a motion to show; plotting the polynomial of Example 2.3.3 to find its sign change is the book's suggestion to the reader and reads in the sentence. Extra Sims weighed and left out: the three independence arguments of Example 2.3.1 drawn (the argument is in the limit and the degree, not in a picture); a repeated-root family x^{j}e^{rx} (the book's list says it).

## Exercises

- End: 2.3.1–2.3.11 kept with AI-marked solutions, each checked by SymPy (2.3.4, 2.3.5 with parts; 2.3.7–2.3.10 independence questions answered with the combination or the argument); 2.3.101–2.3.106 with the book's answers, each checked. 2.3.101's key "y = C₁eˣ + C₂x³ + C₃x² + C₄x + C₅" is checked (r⁴(r − 1) = 0: right).

## Derivations

- Example 2.3.1's three arguments · prose with single displays, each two to five moves, score at most 2 · not built: the reasoning is about a polynomial's zeros, a limit, and evaluation, not a chain of equations.
- Example 2.3.3's r₃ from the constant term · one display line · not built. The constants C₁, C₂, C₃ · stated without working · not built.
- Example 2.3.5's `align` block factoring the characteristic polynomial · two moves of algebra with nothing imported, which the book calls guessing by inspection · not built.

## Wanted at chapter level

- forms `eq-higher-order-homogeneous` → `2.3-hol-eqlinhom`, `eq-superposition-n` → `2.3-theorem-2-3-1`, `eq-linear-independence-n` → `2.3-linear-independence`, `eq-general-solution-n` → `2.3-theorem-2-3-3`, `eq-repeated-real-roots` → `2.3-repeated-real`, `eq-repeated-complex-roots` → `2.3-repeated-complex`.
- variables of 2.3: y, y′, y⁽ⁿ⁾, y⁽ⁿ⁻¹⁾ → `2.3-hol-eqlinhom`; y₁, y₂, yₙ → `2.3-theorem-2-3-1`; f → `2.3-theorem-2-3-2`; y‴, r, r₁, r₂, r₃ → `2.3-example-2-3-3`; y⁽⁴⁾ → `2.3-example-2-3-4`; α, β → `2.3-repeated-complex`.
