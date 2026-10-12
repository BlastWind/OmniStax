# Plan: 3.1 Defining the Derivative (m53495)

Source: `source.md`, converted with `tools/convert.py 3`. Status: plan, built straight through (config 2 waives the review; decisions reported afterwards). Template: `ch01/1.1`; the secant figure follows `ch02/2.1`'s `sim-secant-to-tangent`.

Seven objectives, an opening paragraph, four definition notes (difference quotient, tangent line, derivative, instantaneous rate of change), two media notes, Figures 3.2 to 3.10 (3.2 and 3.10 photographs, 3.9 a sketch of a spring), Tables 3.1 to 3.3 and one unnumbered table (Example 3.4), Examples 3.1 to 3.10, Checkpoints 3.1 to 3.5, six Key Equations, four Key Concepts, 53 section exercises (1–53, 27 keyed), 4 glossary terms. One page. Numbers counted from the CNXML (opener = Figure 3.1); the builder confirms the first and last against openstax.org.

## Changes from the prep plan

1. Tangent and secant both wear `line` (`ch03/COLOR.md`): the secant dashed, the tangent solid. Figure 3.4's caption "(shown in green)" and the Figure 3.8 paragraph's "(shown in red)", "(shown in green)" stay as printed (as 2.3's "shown in blue").
2. Figure 3.9 (the spring) is a still copy drawn live, not a moving Sim: the example reads a table, and a bobbing weight would add motion the lesson does not use.

## Sub-concepts (page headers)

0. `intro` (no header): the opening paragraph and Figure 3.2 (Newton and Leibniz).
1. `tangent-lines` **Tangent Lines**: the two secant slopes (display equations `fs-id1169738930229`, `fs-id1169738985511`), the Definition note `difference-quotient-definition`, the media note (dropped), Figures 3.3 and 3.4, the second media note (dropped), Figure 3.5, the Definition note `tangent-line-definition`, Examples 3.1–3.3 (Figures 3.6, 3.7) and Checkpoint 3.1. Introduces `difference-quotient` (the note), `slope-of-the-tangent-line` (the note), `local-linearity` (the Figure 3.5 paragraph, `local-linearity-paragraph`), `equation-of-a-tangent-line` (Example 3.1, its first use; section span).
2. `derivative-at-a-point` **The Derivative of a Function at a Point**: the paragraph naming the derivative and differentiation (`derivative-paragraph`), the Definition note `derivative-definition`, Example 3.4 (unnumbered table), Checkpoint 3.2, Examples 3.5, 3.6, Checkpoint 3.3. Introduces `derivative` (the term in `derivative-paragraph`), `differentiation` (same paragraph), `estimating-a-derivative-from-a-table` (Example 3.4).
3. `velocities` **Velocities and Rates of Change**: average and instantaneous velocity (`instantaneous-velocity-paragraph`, the form v(a) = s′(a)), Figure 3.8, Example 3.7 (Figure 3.9, Table 3.1), Checkpoint 3.4, the Definition note `instantaneous-rate-definition`, Example 3.8 (Figure 3.10, Tables 3.2, 3.3), Examples 3.9, 3.10, Checkpoint 3.5. Introduces `instantaneous-rate-of-change` (the note).

Examples keep the book's ids (3.8 is `fs-id1169739204154`, which the chapter intro links). Objectives and glossary to the tables, Key Concepts to `summary_html`; Key Equations and the definitions' forms make "Theorems and formulas". Media notes (20_calcapplets, 20_diffmicros) dropped, named in `notes`; they seed `sim-secant-to-tangent-h` and `sim-local-linearity`.

## Concept nodes (merged in book.json by the prep)

Introduced here, 8: definitions `difference-quotient` (derivative, Q), `slope-of-the-tangent-line` (derivative, m_tan), `derivative` (derivative, f′), `differentiation`, `instantaneous-rate-of-change` (derivative); idea `local-linearity`; skills `equation-of-a-tangent-line`, `estimating-a-derivative-from-a-table`.

Coverage `uses`: `secant`, `tangent-line`, `rate-of-change` in `tangent-lines`; `limit` at the tangent-line note; `point-slope-equation` in Examples 3.1, 3.3; `evaluating-a-limit-of-the-form-zero-over-zero` in Examples 3.1, 3.3, 3.5; `average-velocity`, `instantaneous-velocity` in `velocities` (with the new form `eq-instantaneous-velocity-derivative`); `important-trigonometric-limits` in Example 3.7; `acceleration` (3.4) in Example 3.8, marked as a mention only if the checker accepts it ahead of its span.

## Colour, referents and function tokens

Per `ch03/COLOR.md`: f, s, T, p, C, R, P wear `function` (`\kf`, `\ks`, `\kT`, `\kp`, `\kC`, `\kR`, `\kP`); Q (`\kQ`), m_tan (`\kmtan`), m_sec (`\kmsec`), f′ (`\kfprime`), s′ (`\ksprime`), v (`\kv`), v_ave (`\kvave`), T′, P′ (`\kTprime`, `\kPprime`) and the words naming rates `derivative`; "tangent line", "secant line" `line`; "limit" `limit`; I (`\kI`) `set`. a, x, t, h (the increment: `h` plain, never `\kh`), and the numbers are ink. The acceleration in Example 3.8 is a rate (`derivative`), written as words; no `a` symbol appears here. No referents: each figure draws one function with its secant and tangent, told apart by decoration.

Function tokens: x² (Examples 3.1, 3.2, 3.4, Checkpoint 3.2), 1/x (Example 3.3), √x (Checkpoint 3.1, Figure 3.5 paragraph), 3x² − 4x + 1 (Examples 3.5, 3.6), x² + 3x + 2 (Checkpoint 3.3), sin t written `sin(x)` (Example 3.7), −16t² + 64 written `-16x^2+64` (Checkpoint 3.4), 0.4t² − 4t + 70 (Example 3.9), −0.01x² + 300x − 10000 (Example 3.10's P), −20s² + 150s − 10 written in x (Checkpoint 3.5), the tangent lines 6x − 9 and −x/4 + 1. The generic f of the definitions is not marked.

## Figures

- `fig-newton-leibniz` · Figure 3.2 · photo, kept: the text points at it ("whose images appear in Figure 3.2"); the book's caption; `media/ch03/CNX_Calc_Figure_03_01_001.jpg`.
- `sim-secant-to-tangent-h` · Figure 3.3 + 3.4 · `difference-quotient`, `slope-of-the-tangent-line` · value add: variation and a morph: on f(x) = x² with a = 3 (Examples 3.1–3.2's numbers, standing in for the book's unformulated curve), the reader drags the second point toward (3, 9) from either side; the dashed secant (`line`) swings toward the solid tangent, and at the dashed special (x = a, h = 0) it morphs into it. A choice `x-form` / `h-form` relabels the second point (x, f(x)) or (a + h, f(a + h)) and the axis tick x or a + h, and swaps the readout's quotient; Figure 3.3 is one state of each form, 3.4(a), (b) the approach, 3.4(c) the arrival · arrows: none · still (the drag is not a clock) · `F.drag` of x (untyped) from 0.5 to 5.5, default 4 (h = 1), detents at 3.1 and 2.9, special at 3; choice of form · headline: "x = 4.00: m_sec = 7.00" / "h = 1.00: m_sec = 7.00", at the special "m_tan = 6" · readout: Q = (f(x) − f(a))/(x − a) or (f(a + h) − f(a))/h with the live numbers, Q in `derivative` · graph alone · 2D.
- `sim-local-linearity` · Figure 3.5 (its four panels) · `local-linearity` · value add: variation: f(x) = √x and its tangent y = (x + 1)/2 at (1, 1) in a window centred on (1, 1) whose half-width w is the slider; as w shrinks from the book's 2 (panel a) through 1 (b) and 0.1 (c, d) to 0.01, the curve straightens onto the line. The zoom is the lesson (unlike 2.3's squeeze, the picture changes with the scale), so it is the one named zoom `axes(…, {nice: true})` · arrows: none · still · slider w (untyped, log scale, 2 to 0.01, default 2, detents at the book's 2, 1, 0.1) · headline: "window ±0.10: the largest gap between √x and its tangent is 0.0013" live · readout: |√x − (x + 1)/2| ≤ gap on the window, with numbers · graph alone · 2D.
- `fig-tangent-square` · Figure 3.6 (Example 3.1) · `equation-of-a-tangent-line` · standardisation only: x² and y = 6x − 9 touching at (3, 9), hover-named · still · graph alone · 2D.
- `fig-tangent-reciprocal` · Figure 3.7 (Example 3.3) · same: 1/x for x > 0 and y = −x/4 + 1 touching at (2, 1/2) · still · 2D.
- `fig-velocity-secant-tangent` · Figure 3.8 · `average-velocity`, `instantaneous-velocity` · standardisation only: an increasing concave position s(t) = 4√t (stand-in close to the sketch) with the secant over [a, t₁] dashed and the tangent at a solid, both `line`, labelled "secant" and "tangent", their slopes v_ave and v(a) hover-named · still · graph alone · 2D. A drag would repeat 2.1's `sim-average-velocity`.
- `fig-spring` · Figure 3.9 (Example 3.7) · faithful copy drawn live: the spring, its weight and the dashed level 0 · still · no controls. Table 3.1 stays a book table beside it.
- `fig-venom-again` · Figure 3.10 (Example 3.8) · photo, kept: the example points at it; credit clause whole; `media/ch03/CNX_Calc_Figure_03_01_009.jpg`.

Tables 3.1–3.3 and Example 3.4's table stay `div.book-table`. Exercise images: the graphs of 39, 40 and 47 in their cards' `figure`; the answer graphs of 49 and 53 in their solutions.

## Exercises

- Checkpoints 3.1–3.5, kind `checkpoint`, inline Try Its after Examples 3.3, 3.4, 3.6, 3.7 and 3.10, hint and answer behind reveals (config 6): 3.1 `number` 0.25; 3.2 `number` 6; 3.3 `number` 5; 3.4 `number` −32, unit ft/s; 3.5 `open` ("P′(3.25) = 20 > 0; raise prices"). Checkpoint 3.2's hint prints (x + h) − x² for (x + h)² − x²: kept as printed with a correction note under the card (root rule 13).
- Section exercises 1–53, kind `exercise`, each with its group's stem (config 10), "[T]" kept, the tables of 31–34 in their prompts. The 27 odd ones are keyed and kept. Of the even ones, 42 and 44 (show by the limit definition that the derivative does not exist at 0) are kept with AI-marked approaches; the other 24 are computational and left out, named in `exercise_notes`: 2–40 even, 46, 48, 50, 52.
- Review exercise 391 (Katrina's wind speed at hour 83, keyed −7.5) held here, row below; 390 (unkeyed estimate) left out and named.
- Tags: 1–10 `difference-quotient`, `secant`; 11–20 `slope-of-the-tangent-line`, `equation-of-a-tangent-line`; 21–30 `derivative`; 31–34 `estimating-a-derivative-from-a-table`, `equation-of-a-tangent-line`; 35–38 `average-velocity`, `instantaneous-velocity`; 39, 40 `derivative`; 41–44 `derivative`, `one-sided-limit`; 45–53 `instantaneous-rate-of-change` (45, 46, 47 also `instantaneous-velocity`; 48 and 51 the rate in their units); 391 `estimating-a-derivative-from-a-table`, `instantaneous-rate-of-change`. Bloom per card.

## Extra simulations (rule 15)

None beyond the two folds above. Considered and dropped: a table-builder for Example 3.4 (h on a slider filling the table): `sim-secant-to-tangent-h`'s readout already gives the quotient at any h, so it would repeat it; a moving spring with its graph (Example 3.7): the lesson is a table of averages, and cos t, the slope it would show, is 3.5's; an acceleration plot of the Venom data: the table and its one-line conclusion say it; a second average-velocity drag: 2.1's `sim-average-velocity` is the same figure.

## Wanted at chapter level

Ids confirmed with `ost ids calculus 3.1` after the build.

- variables: `3.1/Q`, `3.1/I`, `3.1/h` → `3.1-difference-quotient-definition`; `3.1/m_tan` → `3.1-tangent-line-definition`; `3.1/f_prime` → `3.1-derivative-definition`; `3.1/v`, `3.1/s_prime` → `3.1-instantaneous-velocity-paragraph`; `3.1/T`, `3.1/T_prime` → `3.1-fs-id1169739187343` (Example 3.9); `3.1/p`, `3.1/C`, `3.1/R`, `3.1/P`, `3.1/P_prime` → `3.1-fs-id1169739253544` (Example 3.10).
- forms: `eq-difference-quotient`, `eq-difference-quotient-increment` → `3.1-difference-quotient-definition`; `eq-tangent-slope`, `eq-tangent-slope-increment` → `3.1-tangent-line-definition`; `eq-derivative-at-a`, `eq-derivative-at-a-increment` → `3.1-derivative-definition`; `eq-instantaneous-velocity-derivative` (on Chapter 2's `instantaneous-velocity`) → `3.1-instantaneous-velocity-paragraph`.
- The chapter intro's link to Example 3.8: `/calculus/ch03/3.1/#3.1-fs-id1169739204154`.
- Review exercise 391, once 3.9 is built: `ost add calculus exercises --section 3.1 '<row>'`, its tags with `ost add calculus exercise_concepts --section 3.1 …`, and append to 3.1's `exercise_notes`: "Review exercise 391 is printed at the end of 3.9 and set here; 390 has no answer in the key and is left out." Row:
  - `{"id": "r391", "source_id": "fs-id1169738074887", "source_section": "3.9", "source_number": "391", "kind": "review-exercise", "bloom": "Apply", "place": {"at": "end"}, "cite": "velocities", "prompt": "<p>The following questions consider the wind speeds of Hurricane Katrina, which affected New Orleans, Louisiana, in August 2005. The data are displayed in a table.</p><div class=\"book-table\"><p class=\"eyebrow\">Table 3.9</p><p>Wind Speeds of Hurricane Katrina</p><table><tr><th>Hours after Midnight, August 26</th><th>Wind Speed (mph)</th></tr><tr><td>1</td><td>45</td></tr><tr><td>5</td><td>75</td></tr><tr><td>11</td><td>100</td></tr><tr><td>29</td><td>115</td></tr><tr><td>49</td><td>145</td></tr><tr><td>58</td><td>175</td></tr><tr><td>73</td><td>155</td></tr><tr><td>81</td><td>125</td></tr><tr><td>85</td><td>95</td></tr><tr><td>107</td><td>35</td></tr></table></div><p>Estimate the derivative of the wind speed at hour 83. What is the physical meaning?</p>", "answer": {"type": "open", "generated_by": "source", "solution": "$-7.5.$ The wind speed is decreasing at a rate of 7.5 mph/hr"}}` · tags `estimating-a-derivative-from-a-table`, `instantaneous-rate-of-change`
