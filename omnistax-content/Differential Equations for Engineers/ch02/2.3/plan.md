# Plan: 2.3 Higher-order linear ODEs (sec:hol)

Source: `source.md`. Status: built 2026-10-19 straight through (config 2); text and `section.json` reviewed against the source and the merged concepts, `ost check diffyqs --section 2.3` clean, built and checked in the browser in light and dark on 2026-10-19 (sec-2.3 task). Template: `ch00/0.2` (its conventions) and `ch01/1.1`; theorem notes as `ch01/1.2` sets them (`div.note#thm-N-M-k`, eyebrow "Theorem N.M.k", the book's bracketed name as `<h3>`).

An opening, two book subsections; equations (2.4), (2.5); Theorems 2.3.1 (Superposition), 2.3.2 (Existence and uniqueness), 2.3.3; Examples 2.3.1–2.3.5; one book footnote (monic, `fn-monic`, number 1); no inline exercise; end exercises 2.3.1–2.3.11 and 2.3.101–2.3.106 (17, six keyed). No figure, so no `figures.js` and nothing copied to `media/ch02/`. The section note is dropped (named in `notes`). Citations [EP] and [F] in Example 2.3.1 keep their brackets and link 0.1's footnote entries (`/diffyqs/ch00/0.1/#0.1-fn-EP`, `#0.1-fn-F`), where the book first cites them.

## Sub-concepts (page headers)

0. `p#hol-intro`, `p#hol-overview`: the two opening paragraphs, the section's own introduction, before the first block with no header (as 1.3 and 1.5 do).
1. `general-equation` **The general linear equation** (OmniStax's header for the book's unheaded run before its first subsection): (2.4) as `eq-2-4` in `p#hol-general`, Theorem 2.3.1 (`thm-2-3-1`, its display `eq-superposition-n`), "linear combination" (`p#linear-combination`), Theorem 2.3.2 (`thm-2-3-2`, displays `eq-higher-order-linear`, `eq-higher-order-ivp`).
2. `independence` **Linear independence** (the book's): the definition for n functions (`p#linear-independence`, display `eq-linear-independence-n`), "linearly dependent" (`p#linear-dependence`), Examples 2.3.1, 2.3.2 (`ex-2-3-1`, `ex-2-3-2`), the sentence before Theorem 2.3.3 (`p#enough-solutions`), Theorem 2.3.3 (`thm-2-3-3`, display `eq-general-solution-n`).
3. `constant-coefficient` **Constant-coefficient higher-order ODEs** (the book's): the song and dance (`p#song-and-dance`), Example 2.3.3 (`ex-2-3-3`: (2.5) as `eq-2-5`, the roots, the footnote, the constants), repeated real roots (`p#repeated-real`, display `eq-repeated-real-roots`, `p#repeated-real-combination`), Example 2.3.4, repeated complex roots (`p#repeated-complex`, display `eq-repeated-complex-roots`), Example 2.3.5.

## Concept nodes

Introduced (one `introduces` row each, ids as merged): `higher-order-linear-equation` (definition, `p#hol-general`; forms `eq-higher-order-homogeneous` = (2.4), `eq-higher-order-linear`), `superposition-for-higher-order-equations` (result, `thm-2-3-1`; form `eq-superposition-n`), `existence-and-uniqueness-for-higher-order-linear-equations` (result, `thm-2-3-2`; form `eq-higher-order-ivp`), `linear-independence-of-several-functions` (definition, `p#linear-independence`; form `eq-linear-independence-n`), `linear-dependence` (definition, `p#linear-dependence`), `general-solution-of-a-higher-order-homogeneous-equation` (result, `thm-2-3-3`; form `eq-general-solution-n`), `solving-higher-order-constant-coefficient-equations` (skill, `p#song-and-dance`), `solutions-for-repeated-real-roots` (result, `p#repeated-real`; form `eq-repeated-real-roots`), `solutions-for-repeated-complex-roots` (result, `p#repeated-complex`; form `eq-repeated-complex-roots`).
Reinforced: `superposition-principle` (Theorem 2.3.1), `existence-and-uniqueness-for-linear-equations` (Theorem 2.3.2), `linear-combination`, `linear-independence`, `general-solution-to-a-homogeneous-equation`, `solving-with-the-characteristic-equation`, `characteristic-equation` (Examples 2.3.4, 2.3.5), `solution-for-a-repeated-real-root`, `solution-for-complex-conjugate-roots`, `hyperbolic-functions` (Example 2.3.2). Uses: `second-order-linear-differential-equation`, `constant-coefficient-equation`, `nonhomogeneous-linear-equation`, `order-of-a-differential-equation`, `solution-to-a-differential-equation`, `general-solution`, `particular-solution` ("the specific solution"), `initial-value`.

Calculus links on the book's own words: continuity (2.4), rules of exponentials (1.5), the limit x → ∞ (4.6). In-book links: chapter 3 (`/diffyqs/ch03/3.1/`), §3.2, appendix A (`/diffyqs/appA/A.1/`).

## Colour

`function`: y, y₁, y₂, yₙ, f (\ky, \kyone, \kytwo, \kyn, \kf); `derivative`: y′, y″, y‴, y⁽⁴⁾, y⁽⁵⁾, y⁽ⁿ⁾, y⁽ⁿ⁻¹⁾ (\kyprime, \kydprime, \kytprime, \kyfourth, \kyfifth, \kynth, \kynmoneth); `eigenvalue`: r, r₁, r₂, r₃, α, β (\kr, \krone, \krtwo, \krthree, \kalpha, \kbeta), the trial values r = −2, −1, 0, 1, 2 included. Ink: x, z = eˣ of Example 2.3.1, c₁…cₙ, C₀…C₅, D₀…, k (a multiplicity), n, the coefficients pₖ(x), b₀…bₙ₋₁, a, I; the one-off f, g, h of Exercises 2.3.7 and 2.3.8 and the v of 2.3.5's solution stay plain. No referents.

## Figures

The book draws nothing here, and none is added: the examples are root-finding and independence arguments in algebra; a roots-plane picture of a quartic would repeat 2.4's free-motion figure without a motion to show; plotting the polynomial of Example 2.3.3 to find its sign change is the book's suggestion to the reader and reads in the sentence. Extra Sims weighed and left out: the three independence arguments of Example 2.3.1 drawn (the argument is in the limit and the degree, not in a picture); a repeated-root family x^{j}e^{rx} (the book's list says it).

## Exercises

- No inline exercise.
- End: 2.3.1–2.3.11 (`e1`–`e11`) kept with AI-marked solutions, each checked by SymPy (`verify.py` in the task's scratch): 2.3.1 y = C₁eˣ + C₂cos x + C₃sin x; 2.3.2 C₁ + C₂x + C₃e²ˣ + C₄e³ˣ; 2.3.3 C₁ + C₂e⁻ˣcos x + C₃e⁻ˣsin x; 2.3.4 a) y⁽⁴⁾ − 6y‴ + 13y″ − 12y′ + 4y = 0, b) (C₁ + C₂x)eˣ + (C₃ + C₄x)e²ˣ; 2.3.5 a) y⁽⁴⁾ − 16y‴ + 98y″ − 272y′ + 289y = 0, b) y(0) = 0, y′(0) = 2, y″(0) = 16, y‴(0) = 90 (`multi`, the four numbers of b); 2.3.6 (C₁ + C₂x)e⁴ˣcos x + (C₃ + C₄x)e⁴ˣsin x; 2.3.7 dependent, f − g + 2h = 0; 2.3.8 dependent (the zero function); 2.3.9 and 2.3.10 independent (a polynomial identically zero has zero coefficients); 2.3.11 y⁽⁴⁾ + 8y‴ + 42y″ + 104y′ + 169y = 0. Shapes: `choice` ("Yes, linearly independent" / "No, linearly dependent") for the independence questions 2.3.7–2.3.10, `multi` for 2.3.5, `open` otherwise; a `tasks` list is one card with `<ol type="a">` in the prompt.
- 2.3.101–2.3.106 (`e101`–`e106`) with the book's answers (`generated_by: source`), each checked: 2.3.101's key is right (r⁴(r − 1) = 0); 2.3.102 (r² + 4)(r − 3) = r³ − 3r² + 4r − 12; 2.3.103 y = 0 by uniqueness; 2.3.104 and 2.3.105 as `choice` with the book's words beneath; 2.3.106 (r² + 1)(r − 1). The converter leaked `\pagebreak[2]` as "[2]" at the head of 2.3.102's prompt; dropped.

## Derivations

- Example 2.3.1's three arguments · prose with single displays, each two to five moves, score at most 2 · not built: the reasoning is about a polynomial's zeros, a limit, and evaluation, not a chain of equations.
- Example 2.3.3's r₃ from the constant term · one display line · not built. The constants C₁, C₂, C₃ · stated without working · not built (checked: −1/4, 1, 1/4).
- Example 2.3.5's `align` block factoring the characteristic polynomial · two moves of algebra with nothing imported, which the book calls guessing by inspection · not built.

## Wanted at chapter level

- forms: `eq-higher-order-homogeneous` → `2.3-eq-2-4`, `eq-higher-order-linear` → `2.3-eq-higher-order-linear`, `eq-superposition-n` → `2.3-eq-superposition-n`, `eq-higher-order-ivp` → `2.3-eq-higher-order-ivp`, `eq-linear-independence-n` → `2.3-eq-linear-independence-n`, `eq-general-solution-n` → `2.3-eq-general-solution-n`, `eq-repeated-real-roots` → `2.3-eq-repeated-real-roots`, `eq-repeated-complex-roots` → `2.3-eq-repeated-complex-roots`.
- variables of 2.3 (`ch02/chapter.json`): y, y_prime, y_nth, y_nm1th → `2.3-eq-2-4`; y_1, y_2, y_n → `2.3-thm-2-3-1`; f → `2.3-thm-2-3-2`; y_dprime, y_tprime, r, r_1, r_2, r_3 → `2.3-ex-2-3-3`; y_fourth → `2.3-ex-2-3-4`; α, β → `2.3-repeated-complex`; y_fifth has no anchor (it appears only in Exercise 2.3.101).
- Glossary words: the merged `terms` are the spans underlined (superposition; existence and uniqueness; linearly independent; linearly dependent; repeated roots, multiplicity); nothing to add.
- Chapter pass 2026-10-19 (pass-ch02): applied: 8 form anchors, 17 variables anchors (y_fifth left without one, as asked); footnote fn-monic numbered 11.
