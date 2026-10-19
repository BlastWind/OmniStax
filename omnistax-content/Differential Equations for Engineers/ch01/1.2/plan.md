# Plan: 1.2 Slope fields (slopefields:section)

Source: `source.md`. Status: built 2026-10-19 straight through (config 2). Section notes dropped and named in `notes`. Three examples, six figures (1.2–1.7), one theorem (1.2.1, Picard), one footnote (Picard), 18 end exercises (6 keyed); no inline exercise.

## Sub-concepts (page headers)

The book's: `intro` (no header, the opening two paragraphs), `slope-fields` **Slope fields**, `existence` **Existence and uniqueness**.

## Concepts

Introduced: `direction-field` (Calculus's id; terms slope field; type derivative), `picards-theorem` (result, Theorem 1.2.1; terms existence and uniqueness, Picard’s theorem). Uses: `first-order-ode`, `initial-condition`, `integral-solution` (Examples 1.2.1, 1.2.3), `solving-y-prime-equals-f-of-y` (Example 1.2.3).

## Colour, referents and symbols

f(x, y) `function`, y and solutions `function`, y′ and the field `derivative`, the dragged start `point`; x, x₀, y₀, A, C in ink. No referents: the sample solutions are told apart by their initial conditions, written beside each.

## Figures

- `sim-slope-xy` · Figure 1.2 + 1.3 + 1.4 · `direction-field` · value add: variation: the slope field of y′ = xy on the book's window (x −3 to 3, y −3 to 3), the three solutions of Figure 1.4 through y(0) = 0.2, 0 and −0.2 drawn thin and labelled by their starts, the point the reader drags (opening on (2, 1.5), Figure 1.2's point) with its own segment of slope xy drawn long and bold and the solution through it traced both ways · arrows: none · still · sliders x₀, y₀ held by `F.drag` · headline "At (2, 1.5) the slope is y′ = xy = 2 × 1.5 = 3." · readout y′ = xy = value; the solution y = y₀e^((x² − x₀²)/2) · graph alone · 2D.
- `fig-decay-field` · Figure 1.5 · `direction-field` · standardisation: the slope field of y′ = −y with three solutions from the left edge (y(−3) = 3, 1, −2 within the window, the book's starts read from its plot), all tending to zero · still · no sliders · graph alone · 2D. A drag here would repeat the previous figure.
- `fig-reciprocal-field` · Figure 1.6 (Example 1.2.1) · `picards-theorem` · standardisation: the slope field of y′ = 1/x with solutions y = ln|x| + C on both sides of x = 0 (C = −1, 0, 1), the y-axis where no segment is drawn; still · no sliders · graph alone · 2D.
- `sim-nonunique` · Figure 1.7 (Example 1.2.2) · `picards-theorem` · value add: variation: the slope field of y′ = 2√|y| with the two solutions through (0, 0) the book draws, y = 0 and y = x|x|, and a third family member the reader moves: y = 0 for x ≤ a and (x − a)² for x ≥ a, a on a slider from 0 to 2 with a dashed circle at a = 0 (the book's second solution); the reader sees that a solution through the origin can leave the axis anywhere, so uniqueness fails without contradiction to the slope field · arrows: none · still · slider a (untyped) · headline "Leaving the axis at x = 0.80: one more solution through (0, 0)." · readout y′ = 2(x − a) = 2√|y| for x ≥ a · graph alone · 2D.

## Extra simulations (rule 15)

None beyond `sim-nonunique`'s family (config seed). Weighed and dropped: a blow-up figure for Example 1.2.3 (y′ = y², y(0) = A), already `sim-blowup` of 1.1 with the start (0, A); a link would do, and the text names the interval.

## Exercises

End: 1.2.1–1.2.12 kept with AI-marked solutions (1.2.1–1.2.3 and 1.2.9 described in words, no picture; 1.2.6 keeps its three slope-field images in the card; 1.2.4, 1.2.5, 1.2.10, 1.2.11 checked with SymPy); 1.2.101–1.2.106 with the book's answers (1.2.101's field image and 1.2.104's three images kept in their cards). Tags: "challenging" (1.2.7, 1.2.8, 1.2.12), "tricky" (1.2.105).

## Wanted at chapter level

- Anchors: `direction-field`'s form → `1.2-slope-fields`; `picards-theorem`'s form → `1.2-slope-picardthm`.

## Derivations

- Example 1.2.3 · y′ = y², y(0) = A · score 2 · not built: the method of 1.1 with a constant.
- Example 1.2.2 · the second solution · score 1 · not built: one check.
