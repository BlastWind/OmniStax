# Plan: 2.4 Continuity (m53489)

Source: `source.md`, converted with `tools/convert.py 2`. Status: built 2026-10-12; config 2 waives the review for this run, decisions reported afterwards. Template: `ch01/1.1`. Numbers confirmed against the CNXML (counted from the chapter's modules) and openstax.org's page: Figures 2.32–2.38, Examples 2.26–2.38, Checkpoints 2.21–2.26, section exercises 131–175.

Five objectives, two opening paragraphs, two definition notes, a classless note (Continuity from the Right and from the Left), four theorem notes, one Problem-Solving Strategy, two proofs, Figures 2.32 to 2.38, Examples 2.26 to 2.38, six checkpoints, no Key Equations, five Key Concepts, 45 section exercises (131–175, 23 keyed), 9 glossary terms, no media note. One page.

## Sub-concepts (page headers)

The book's own headers apply (root rule 3).

0. `intro` (no header): the two opening paragraphs.
1. `continuity-at-a-point` **Continuity at a Point**: conditions i–iii with Figures 2.32–2.34, the Definition note (`continuity-definition`), the Problem-Solving Strategy (`determining-continuity`), Examples 2.26 (Figure 2.35), 2.27 (Figure 2.36), 2.28 and the checkpoint, the theorem Continuity of Polynomials and Rational Functions (`polynomial-rational-continuity`) with its `<h3>` Proof, Example 2.29 and its checkpoint.
2. `types-of-discontinuities` **Types of Discontinuities**: Figure 2.37, the Definition note (`discontinuity-types`), Examples 2.30–2.32 and the checkpoint.
3. `continuity-over-an-interval` **Continuity over an Interval**: the note Continuity from the Right and from the Left (`one-sided-continuity`, the book's title as its `<h3>`, no eyebrow, since the book gives it no class), the paragraphs on open and closed intervals, then `sim-one-sided`, Examples 2.33 and 2.34 and the checkpoint, the Composite Function Theorem note (`composite-function-theorem`), Example 2.35 with `sim-composite-limit` and its checkpoint, the theorem Continuity of Trigonometric Functions (`trig-continuity`) and its Proof (the book's `## Proof` is an `<h3>` here).
4. `ivt` **The Intermediate Value Theorem**: the theorem note (`ivt-theorem`) with Figure 2.38 inside it, Examples 2.36–2.38 and the checkpoint.

The conditions i, ii, iii stay display math. Theorem and rule notes carry the eyebrow "Theorem" and the book's title as `<h3>`; the strategy the eyebrow "Problem-Solving Strategy". A link to a note is written as the note's title, as openstax.org prints it ("We now apply Continuity of Polynomials and Rational Functions"). Key Concepts → `summary_html`. "Theorems and formulas" carries `eq-continuity`, `eq-continuity-from-right`, `eq-continuity-from-left`, `eq-composite-function-theorem`.

## Concept nodes (merged in book.json)

All 13 introduced here: definitions `continuity-at-a-point`, `discontinuity-at-a-point`, `removable-discontinuity`, `jump-discontinuity`, `infinite-discontinuity`, `continuity-from-the-right`, `continuity-from-the-left`, `continuity-over-an-interval`; results `continuity-of-polynomials-and-rational-functions`, `composite-function-theorem`, `continuity-of-trigonometric-functions`, `intermediate-value-theorem`; skill `determining-continuity-at-a-point`. Untyped: continuity is a property, not a value.

Coverage `introduces`: `continuity-at-a-point` and `discontinuity-at-a-point` at `continuity-definition`; the skill at `determining-continuity`; the three kinds at `types-of-discontinuities` (their `{term:}` paragraph, before the formal note); the one-sided pair at `one-sided-continuity`; `continuity-over-an-interval` at `continuity-over-an-interval`; each theorem at its note. `uses`: `one-sided-limit` at Examples 2.27 and 2.31, `infinite-limit` and `vertical-asymptote` at Example 2.32 and `types-of-discontinuities`, `limits-of-polynomial-and-rational-functions` and `rational-function` at `continuity-at-a-point` (the proof), `important-trigonometric-limits` and `composite-function` at `continuity-over-an-interval`, `addition-and-subtraction-formulas` and `quotient-law-for-limits` at the trig proof, `zeros-of-a-function` at Example 2.36, `domain` at Example 2.33.

## Colour, referents and function tokens

f, g wear `function` (`\kf`, `\kg`); L `limit` (`\kL`); the words naming a limit `limit`, a vertical asymptote `line`, a domain `set`, a zero `point`; the intervals the examples state continuity over are values of `set` (`data-type="set"`), as 1.1 writes them. a, b, c, z, k, p, q are ink (p and q have no macro; `ch02/2.3/plan.md`). "Continuous" and "discontinuity" are `data-concept` spans in ink. No referents: every graph draws one function.

Function tokens: (x² − 4)/(x − 2); the piecewise of Examples 2.27, 2.28 and the checkpoint; (x + 1)/(x − 5), 3x⁴ − 4x²; (x + 2)/(x + 1), the checkpoint's x² with f(1) = 3; (x − 1)/(x² + 2x), √(4 − x²), √(x + 3); cos(x − π/2), sin(x − π); x − cos x, (x − 1)², 1/x, x³ − x² − 3x + 1.

## Figures

- `sim-three-conditions` · Figure 2.32 + 2.33 + 2.34 · `continuity-at-a-point`, `discontinuity-at-a-point` · value add: variation and a morph: the three failures the book draws one by one become states of one line near a = 2: (i) a hole, f(2) undefined; (ii) the right part lifted, a gap, the limit does not exist; (iii) the point lifted off the line, the limit ≠ f(2); and a fourth state, continuous, the point dropped into the hole; the part that changes slides between states · arrows: none · still, a choice morph with no clock · choice `i` / `ii` / `iii` / `continuous` · headline: the failed condition in words, live · readout: the three conditions with the live values, each ticked or crossed · graph alone · 2D. The book prints no formula: f(x) = x/2 + 1, the right part x/2 + 2.5 in (ii), f(2) = 3.5 in (iii), stand-ins close to the sketches. The limit's level is a dashed `limit` line where the limit exists, and in (ii) the two one-sided levels; the hole and the point are hover-named.
- `fig-hole-at-two` · Figure 2.35 (Example 2.26) · `discontinuity-at-a-point` · standardisation only: (x² − 4)/(x − 2), the hole at (2, 4), drawn live · still · no controls · graph alone · 2D.
- `fig-jump-at-three` · Figure 2.36 (Example 2.27) · `discontinuity-at-a-point` · standardisation only: −x² + 4 for x ≤ 3 (closed at (3, −5)), 4x − 8 for x > 3 (open at (3, 4)) · still · graph alone · 2D.
- `fig-discontinuity-kinds` · Figure 2.37 · `removable-discontinuity`, `jump-discontinuity`, `infinite-discontinuity` · standardisation only: three panels, (a) removable, (b) jump, (c) infinite with its asymptote x = a dashed in `line`, stand-ins close to the sketches, each discontinuity hover-named · still · graph alone · 2D. Kept still: `sim-three-conditions` already moves between the failures, and three panels side by side are the comparison.
- `sim-ivt` · Figure 2.38 · `intermediate-value-theorem` · value add: variation: a level z (dashed, ink) dragged across the graph meets it, and every c in [a, b] with f(c) = z is dropped to the axis, so "at least one" is seen (one c, then three where the curve doubles back); a choice of curve: the theorem's (a cubic close to the sketch on [1, 5], f(1) = 1, f(5) = 5); Example 2.36's x − cos x on [0, π/2], z = 0 its special; Example 2.37's (x − 1)² on [0, 2], where z = 0 is not between f(0) = f(2) = 1 and yet f(1) = 0; Example 2.38's 1/x on [−1, 1], where z = 0 finds no c because f is not continuous there · arrows: none · still · choice `Figure 2.38` / `x − cos x` / `(x − 1)²` / `1/x`; slider z (untyped), its range per curve, special 0 on the three examples; each curve keeps its own axes, eased into the next on a change, the curves crossfading · headline: "z = 2.00 lies between f(1) = 1.00 and f(5) = 5.00, and f(c) = z at c = 1.23" or the example's verdict, live · readout: f(a), z and f(b) with the live relations, and f(c) = z for each c or "no c in [a, b]" · graph alone · 2D. The asymptote of 1/x is dashed in `line`; [a, b] is a `set` band on the axis. The checkpoint's x³ − x² − 3x + 1 is not offered, since the figure would answer it.

### Extra simulations (rule 15), built (config 22)

- `sim-one-sided` · Sim · `continuity-from-the-right`, `continuity-from-the-left`, `continuity-over-an-interval` · value add: variation: Example 2.27's function with f(3) on a slider (specials −5 and 4, the two one-sided limits, with a snap); the dot is the only thing that moves, and the readout says from which side f is continuous at 3 and over which intervals, (−∞, 3] and (3, +∞) at the book's f(3) = −5, (−∞, 3) and [3, +∞) at f(3) = 4, (−∞, 3) and (3, +∞) anywhere else. The text defines the two one-sided continuities and the closed-interval rule with no picture; this is the one place the reader sees the closed end decide the interval · arrows: none · still · slider f(3) (untyped) · headline: "f(3) = −5: continuous from the left at 3, not from the right" · readout: both one-sided limits against f(3) and the intervals in `set` · graph alone · 2D.
- `sim-composite-limit` · Sim · `composite-function-theorem` · value add: variation and flow: Example 2.35 as three number lines, x, then g(x) = x − π/2, then f(g(x)) = cos(g(x)); x dragged toward π/2 (a special) carries g(x) to L = 0 and cos(g(x)) to cos 0 = 1 together, which is what lets the limit pass inside a continuous f; one scale for all three lines, so the shift by π/2 and the squeeze of cos toward 1 are seen as they are · arrows: symbolic (the maps) · still · slider x (untyped, 0 to π, default 1.0), dragged on its line · headline: "x = 1.00: g(x) = −0.57, and cos(g(x)) = 0.84" · readout: g(x) and f(g(x)) with the live values, the note the example's limit line · no graph · 2D. The checkpoint's sin(x − π) is not offered.

Considered and dropped: a k slider making a piecewise function continuous (it answers 145–149 and 226–227); a pencil-trace animation of continuity over an interval (a transport with no clock in the idea, rule 24.9); a cos x continuity proof animation (the proof is algebra the text sets out line by line).

Exercise figures: 155, 157 and 159 keep the book's answer sketches in their solutions (`CNX_Calc_Figure_02_04_202`, `_207`, `_205`). No photographs in the section.

## Exercises

- Checkpoints 2.21–2.26, after Examples 2.28, 2.29, 2.32, 2.34, 2.35 and 2.38, inline Try Its (config 6); 2.25 checks the number 0 with its hint, the others are answered in words with the book's hint at the head of the answer (1.1's convention).
- Section exercises 131–175, kind `exercise`, stems carried, "[T]" kept. The 23 odd ones are keyed and kept; the four keyed true-or-false (161, 163, 165, 167) are choices. Of the 22 even ones, kept with an AI-marked approach (config 12): 150 (why h does not contradict the IVT), 152 (cos t = t³, parts a and b; part c, a calculator search, left out and named in `changes`), 162, 164, 166 (true or false, justified), 168 (Coulomb's cut-off, parts a, b and d; part c, a computation, left out and named in `changes`), 172 (no D makes F continuous), 174 (|x| is continuous everywhere). Left out as computational: 132–148 even, 154, 156, 158, 160, 170, named in `exercise_notes`.
- Review exercises held here (2.5 prints them), added in the chapter pass: 208, 211, 225, 227, 230 (rows below); 226 (unkeyed, find c) left out and named.
- Tags: `determining-continuity-at-a-point` and the kind each answer names for 131–144; `continuity-over-an-interval` for 145–149, 225, 227; `intermediate-value-theorem` for 150–153, 164, 165, 167, 230; `continuity-at-a-point` and the kinds for 154–163, 166, 168–172, 175, 208, 211; `continuity-of-trigonometric-functions` for 173; `continuity-at-a-point` for 174.

## Wanted at chapter level

Ids confirmed with `ost ids calculus 2.4` after the build.

- variables `2.4/z`, `2.4/c` → anchor `2.4-ivt-theorem`.
- forms `eq-continuity` → `2.4-continuity-definition`; `eq-continuity-from-right`, `eq-continuity-from-left` → `2.4-one-sided-continuity`; `eq-composite-function-theorem` → `2.4-composite-function-theorem`.
- Review exercises: the checker refuses a `source_section` the app has not built, so once 2.5 is built, add each row with `ost add calculus exercises --section 2.4 '<row>'`, its tags with `ost add calculus exercise_concepts --section 2.4 '<row>'`, the correction with `ost add calculus footnotes --section 2.4 '<row>'`, then add "Review exercises 208, 211, 225, 227 and 230 are set here." to 2.4's `exercise_notes` and say in 2.5's notes that they are held here.

```
{"id": "r208", "source_id": "fs-id1170572565358", "source_section": "2.5", "source_number": "208", "kind": "review-exercise", "bloom": "Evaluate", "place": {"at": "end"}, "cite": "continuity-at-a-point", "prompt": "<p><em>True or False</em>. In the following exercises, justify your answer with a proof or a counterexample.</p><p>A function has to be continuous at $x=a$ if the $\\lim_{x\\to a}f(x)$ exists.</p>", "answer": {"type": "open", "generated_by": "ai", "solution": "False. The limit existing is only the second of the three conditions for continuity at $a$; $f(a)$ must also be defined and equal to the limit. For a counterexample take $f(x)=\\dfrac{x^{2}-4}{x-2}$ of Example 2.26: $\\lim_{x\\to 2}f(x)=4$ exists, but $f(2)$ is undefined, so $f$ is not continuous at $2$ (it has a removable discontinuity there)."}}
{"id": "r211", "source_id": "fs-id1170572184348", "source_section": "2.5", "source_number": "211", "kind": "review-exercise", "bloom": "Evaluate", "place": {"at": "end"}, "cite": "types-of-discontinuities", "prompt": "<p><em>True or False</em>. In the following exercises, justify your answer with a proof or a counterexample.</p><p>If $\\lim_{x\\to a}f(x)$ does not exist, then <em>f</em> is undefined at the point $x=a.$</p>", "answer": {"type": "choice", "generated_by": "source", "options": ["True", "False"], "correct": 1, "solution": "False. A removable discontinuity is possible.<sup class=\"fn\" data-note=\"c-r211-reason\"></sup>"}}
{"id": "r225", "source_id": "fs-id1170571638260", "source_section": "2.5", "source_number": "225", "kind": "review-exercise", "bloom": "Apply", "place": {"at": "end"}, "cite": "continuity-over-an-interval", "prompt": "<p>Determine the domain such that the function $f(x)=\\sqrt{x-2}+xe^{x}$ is continuous over its domain.</p>", "answer": {"type": "open", "generated_by": "source", "solution": "$[2,\\infty]$<sup class=\"fn\" data-note=\"c-r225-interval\"></sup>"}}
{"id": "r227", "source_id": "fs-id1170571539172", "source_section": "2.5", "source_number": "227", "kind": "review-exercise", "bloom": "Apply", "place": {"at": "end"}, "cite": "continuity-over-an-interval", "prompt": "<p>In the following exercises, determine the value of <em>c</em> such that the function remains continuous. Draw your resulting function to ensure it is continuous.</p><p>$f(x)=\\begin{cases}\\sqrt{x+1}, & x\\gt -1\\\\ x^{2}+c, & x\\le -1\\end{cases}$</p>", "answer": {"type": "number", "generated_by": "source", "value": -1, "solution": "$c=-1$"}}
{"id": "r230", "source_id": "fs-id1170571710715", "source_section": "2.5", "source_number": "230", "kind": "review-exercise", "bloom": "Apply", "place": {"at": "end"}, "cite": "ivt", "prompt": "<p>A ball is thrown into the air and the vertical position is given by $x(t)=-4.9t^{2}+25t+5.$ Use the Intermediate Value Theorem to show that the ball must land on the ground sometime between 5 sec and 6 sec after the throw.</p>", "answer": {"type": "open", "generated_by": "ai", "solution": "The position $x(t)=-4.9t^{2}+25t+5$ is a polynomial, so it is continuous over $[5,6].$ At the ends, $x(5)=-4.9(25)+125+5=7.5\\gt 0$ and $x(6)=-4.9(36)+150+5=-21.4\\lt 0.$ Since $0$ lies between $x(5)$ and $x(6),$ the Intermediate Value Theorem gives a time $c$ in $[5,6]$ with $x(c)=0$: the ball is at ground level at some time between 5 sec and 6 sec after the throw."}}
```

```
{"exercise": "r208", "concept": "continuity-at-a-point"}
{"exercise": "r208", "concept": "removable-discontinuity"}
{"exercise": "r211", "concept": "removable-discontinuity"}
{"exercise": "r211", "concept": "discontinuity-at-a-point"}
{"exercise": "r225", "concept": "continuity-over-an-interval"}
{"exercise": "r227", "concept": "continuity-over-an-interval"}
{"exercise": "r227", "concept": "continuity-at-a-point"}
{"exercise": "r230", "concept": "intermediate-value-theorem"}
```

```
{"id": "c-r225-interval", "kind": "correction", "html": "The key prints $[2,\\infty];$ since $\\infty$ is not a real number, the interval is $[2,\\infty).$"}
{"id": "c-r211-reason", "kind": "correction", "html": "At a removable discontinuity the limit exists, so it is no counterexample here. A jump discontinuity is: in Example 2.27, $f(3)=-5$ is defined, but $\\lim_{x\\to 3}f(x)$ does not exist."}
```

- Chapter pass (2026-10-12): all applied, both corrections as notes under their cards.
