# Plan: 3.9 Derivatives of Exponential and Logarithmic Functions (m53586)

Source: `source.md`, converted with `tools/convert.py 3`. Status: planned 2026-10-12 by the chapter prep; config 2 waives the review for this run. Template: `ch01/1.1`.

Three objectives, an opening paragraph, three theorem notes (Derivative of the Natural Exponential Function, The Derivative of the Natural Logarithmic Function, Derivatives of General Exponential and Logarithmic Functions), one Problem-Solving Strategy, two proofs, Figures 3.33 to 3.35, Tables 3.6 and 3.7 (in the text) and 3.8 (exercises), Examples 3.74 to 3.83, six checkpoints (Checkpoints 3.50 to 3.55), four Key Equations, three Key Concepts, 36 section exercises (331–366, 18 keyed), the Chapter Review Exercises (367–391, 13 keyed, Table 3.9), one glossary term. One page. Table numbers depend on 3.4's exercise tables being numbered (3.4, 3.5); the builder confirms on openstax.org.

## Sub-concepts (page headers)

0. Opening paragraph (no header). "Introduction to Functions and Graphs" stays plain text, as Chapter 2 kept it.
1. `exponential` **Derivative of the Exponential Function**: the assumptions, 4^π and Table 3.6, B′(0) exists, the definition of e (Figure 3.33, Table 3.7), Figure 3.34, the derivation of B′(x) = bˣB′(0) (display `bx-derivative`), the theorem note (`exp-theorem`), Examples 3.74–3.76, Checkpoints 3.50, 3.51. Introduces `number-e-by-slope` (the paragraph `e-defined`), `derivative-of-an-exponential-function` (the display), `derivative-of-the-natural-exponential-function` (the note).
2. `logarithmic` **Derivative of the Logarithmic Function**: the theorem note (`ln-theorem`) and its `<h3>` Proof, Figure 3.35, Examples 3.77, 3.78, Checkpoint 3.52, the general theorem note (`general-theorem`) and its Proof, Examples 3.79, 3.80, Checkpoint 3.53. Introduces `derivative-of-the-natural-logarithm`, `derivatives-of-general-exponential-and-logarithmic-functions`.
3. `log-diff` **Logarithmic Differentiation**: the term, the strategy note (`log-diff-strategy`), Examples 3.81–3.83, Checkpoints 3.54, 3.55. Introduces `logarithmic-differentiation` (the term), `power-rule-for-real-exponents` (Example 3.83).

Uses: `natural-exponential-function` and `natural-logarithm` (terms "natural exponential function", "natural logarithmic function" in `e-defined`; the book's words name Chapter 1's concepts, which have no term "natural logarithmic function": the span is marked `data-concept="natural-logarithm"`), `number-e`, `exponential-function`, `laws-of-exponents`, `chain-rule`, `quotient-rule`, `product-rule`, `implicit-differentiation` (the ln proof, the general proof), `inverse-function-theorem` (the second ln proof), `properties-of-logarithms` (3.78, the strategy), `change-of-base-formulas` (the general proof), `population-growth-rate` (3.76), `equation-of-a-tangent-line` (3.80).

Correction note: Example 3.79 says "Use the quotient rule and [ref:fs-id1169738238181]", an id the CNXML does not hold; it means the general theorem's dy/dx = bˣ ln b (fs-id1169738224034). The words keep "the quotient rule and" with a link to that form, and a note gives the broken reference. The book's "lo g_b x" typography is normalised to log_b x silently (markup, not words).

Sheets: the Table of Derivatives `/calculus/sheets/derivatives/` linked at `exp-theorem` (its exponential and logarithmic rows); derivative-mode calculator links on Examples 3.74 (`?op=derivative&expr=e^(tan(2x))`), 3.77 (`ln(x^3+3x-4)`) and 3.81 (`(2x^4+1)^(tan(x))`), each `/calculus/sheets/integral-calculator/?op=derivative&expr=…` URL-encoded.

## Concept nodes (merged in book.json by the prep)

Results `derivative-of-an-exponential-function`, `derivative-of-the-natural-exponential-function`, `derivative-of-the-natural-logarithm`, `derivatives-of-general-exponential-and-logarithmic-functions`, `power-rule-for-real-exponents`; definition `number-e-by-slope`; skill `logarithmic-differentiation`.

## Colour, referents and function tokens

B, E, L (`\kB`, `\kE`, `\kL`; their 3.9 rows set `function` through `exponential-function`, `natural-exponential-function`, `natural-logarithm`), A (`\kA`, `function`), f, g, h, y where a function: `function`. B′, A′ (`\kBprime`, `\kAprime`), E′ (no symbol row yet, see Wanted), f′, g′, h′, dy/dx: `derivative`. Tangent y = x + 1: `line`. b, e, r, x, h as increment: ink.

Referents: none. Figure 3.33's four exponentials become states of one slider in the fold below, so they are never four curves together.

Function tokens: 2^x, 3^x, 2.7^x, 2.8^x, e^x, x+1, e^(tan(2x)), e^(x^2)/x, x e^(2x), 1000 e^(0.3x), ln(x), 1/x, ln(x^3+3x−4), ln(x^2 sin(x)/(2x+1)), ln((3x+2)^5), 3^x/(3^x+2), log(3x+1)/log(2) for log₂(3x + 1), (2x^4+1)^(tan(x)), x sqrt(2x+1)/(e^x sin(x)^3), x^x, tan(x)^pi.

## Figures

- `sim-find-e` · Figure 3.33 + 3.34 · `number-e-by-slope`, `derivative-of-an-exponential-function` · value add: variation: the base b on a slider from 2 to 3 (default 2, the book's lowest curve), bˣ drawn with its tangent at (0, 1) and the slope B′(0) = ln b live; the dashed special at e, where the tangent becomes y = x + 1 (Figure 3.34's state) and the slope reads 1; the book's 2, 2.7, 2.8, 3 are soft detents · arrows: none · still · slider b (ink), detents 2, 2.7, 2.8, 3, special e · headline: "b = 2.70: the tangent at 0 has slope 0.993" / "b = e: slope 1, the tangent is y = x + 1" · readout: B′(0) ≈ (b^h − 1)/h with h = 0.00001, matching Table 3.7's bounds · graph alone · 2D. Folds 3.33 + 3.34; both numbers link here. Table 3.7 stays in the text.
- `sim-ln-derivative` · Figure 3.35 · `derivative-of-the-natural-logarithm` · value add: variation: the derivative tracer: a point dragged along ln x on (0, 5] draws its tangent and drops its slope as a point on 1/x below, the passed part of 1/x drawn · arrows: none · still · `F.drag` of x, default 1 · headline: "x = 1.00: slope of ln x is 1.00 = 1/x" · readout: d/dx ln x = 1/x with the numbers · graph below · 2D. Uses the chapter's derivative tracer (3.2 builds it).

Tables 3.6, 3.7 stay `div.book-table`. Exercise figure: 355's answer graph in its solution; the review's 386, 387 graphs go with their section (3.2).

## Exercises

- Checkpoints 3.50–3.55, kind `checkpoint`, after Examples 3.75, 3.76, 3.78, 3.80, 3.83 (two): 3.50 `open`; 3.51 996 `number`; 3.52 `open`; 3.53 9 ln 3 `number` (value 9.887510598, tol 0.001, solution "$9\ln 3$"); 3.54, 3.55 `open`.
- Section exercises 331–366, kind `exercise`, with stems; 18 odd keyed kept (363–365 carry Table 3.8 in their stem). Of the 18 even: 366 (will the model be accurate, explain from the tables) kept with an AI-marked approach; the other 17 are computational and left out, named in `exercise_notes`: 332–352 even, 354, 356, 358, 360, 362, 364.
- Tags: `derivative-of-the-natural-exponential-function` 331–335, 359–361; `derivatives-of-general-exponential-and-logarithmic-functions` 336–345, 363–366; `derivative-of-the-natural-logarithm` 340–342; `logarithmic-differentiation` 346–353, 357; `equation-of-a-tangent-line` 354–356.
- Chapter Review Exercises 367–391 are printed here (`source_section` 3.9) and placed per `exploration.md`: 391 → 3.1 (390 out); 367, 369, 371, 387 → 3.2, 368 and 370 kept with approaches there (372, 386 out); 373 → 3.3 (374 out); 377, 389 → 3.5 (378, 388 out); 379 → 3.7 (384 out); 380 out (3.8); 375, 381, 383, 385 → here (376, 382 out). 3.9's `exercise_notes` names them all: "The Chapter Review Exercises 367–391 are printed at the end of this section and each is set with the section that introduces what it tests; 375, 381, 383 and 385 are set here, and 376 and 382 have no answer in the key and are left out."

## Extra simulations (rule 15)

None picked. Considered and dropped: a mosquito population slider on the growth constant (Example 3.76: A′/A is the constant, readable in one line); a logarithmic-differentiation step stepper (the strategy's five steps read in the examples; a stepper replays notation, 24.9); the 4^π squeeze of Table 3.6 as a slider (the table says it; positions look alike).

## Wanted at chapter level

Ids confirmed with `ost ids calculus 3.9` after the build.

- variables `3.9/B` → `3.9-exponential` (the paragraph introducing B(x) = bˣ); `3.9/B_prime` → `3.9-bx-derivative`; `3.9/E`, `3.9/L` → `3.9-e-defined`; `3.9/A`, `3.9/A_prime` → `3.9-<Example 3.76 id>`; `3.9/r` → `3.9-<Example 3.83 id>`.
- Symbol `E_prime` (`E'`, `\kEprime`) is missing from the symbols the prep staged; the theorem writes E′(x) = eˣ. Ask the chapter pass to add it (`ost add calculus symbols --chapter 3 '{"sym": "E_prime", "latex": "E'"'"'", "macro": "\\kEprime"}'`) with a variables row `3.9/E_prime` (derivative of the natural exponential function, concept `derivative-function`); until then E′ is written `\kE'`.
- forms: `eq-derivative-b-to-the-x` → `3.9-bx-derivative`; `eq-e-slope-one` → `3.9-e-defined`; `eq-derivative-exp`, `eq-derivative-exp-chain` → `3.9-exp-theorem`; `eq-derivative-ln`, `eq-derivative-ln-chain` → `3.9-ln-theorem`; `eq-derivative-log-b`, `eq-derivative-log-b-chain`, `eq-derivative-b-to-the-x-ln`, `eq-derivative-b-to-the-g` → `3.9-general-theorem`; `eq-power-rule-real` → `3.9-<Example 3.83 id>`.
- Review exercises set here (rows for `ost add calculus exercises --section 3.9`):
  - `{"id": "r375", "source_id": "fs-id1169738230535", "source_section": "3.9", "source_number": "375", "kind": "review-exercise", "bloom": "Apply", "place": {"at": "end"}, "cite": "exponential", "prompt": "<p>Find the derivatives of the following functions.</p><p>$f(x)=e^{\\sin x}$</p>", "answer": {"type": "open", "generated_by": "source", "solution": "$e^{\\sin x}\\cos x$"}}` · tags `derivative-of-the-natural-exponential-function`, `chain-rule`
  - `{"id": "r381", "source_id": "fs-id1169738239323", "source_section": "3.9", "source_number": "381", "kind": "review-exercise", "bloom": "Apply", "place": {"at": "end"}, "cite": "logarithmic", "prompt": "<p>Find the following derivatives of various orders.</p><p>First derivative of $y=x\\ln(x)\\cos x$</p>", "answer": {"type": "open", "generated_by": "source", "solution": "$\\cos x\\cdot(\\ln x+1)-x\\ln(x)\\sin x$"}}` · tags `derivative-of-the-natural-logarithm`, `product-rule`
  - `{"id": "r383", "source_id": "fs-id1169738239462", "source_section": "3.9", "source_number": "383", "kind": "review-exercise", "bloom": "Apply", "place": {"at": "end"}, "cite": "logarithmic", "prompt": "<p>Find the following derivatives of various orders.</p><p>Second derivative of $y=4^{x}+x^{2}\\sin(x)$</p>", "answer": {"type": "open", "generated_by": "source", "solution": "$4^{x}(\\ln 4)^{2}+2\\sin x+4x\\cos x-x^{2}\\sin x$"}}` · tags `derivatives-of-general-exponential-and-logarithmic-functions`, `higher-order-derivative`
  - `{"id": "r385", "source_id": "fs-id1169738226472", "source_section": "3.9", "source_number": "385", "kind": "review-exercise", "bloom": "Apply", "place": {"at": "end"}, "cite": "exponential", "prompt": "<p>Find an equation of the tangent line to the following equations at the specified point.</p><p>$y=x+e^{x}-\\frac{1}{x}$ at $x=1$</p>", "answer": {"type": "open", "generated_by": "source", "solution": "$T=(2+e)x-2$"}}` · tags `derivative-of-the-natural-exponential-function`, `equation-of-a-tangent-line`
- The other sections' review rows are written in their own plans (3.1, 3.2, 3.3, 3.5, 3.7).

## As built (2026-10-12)

- `sim-find-e`: b from 2 to 3 (step 0.001), detents only at 2 and 3 (the book's 2.7 and 2.8 lie too near e to snap to, so they are reached by sliding), special at e where the readout becomes E′(0) = 1 and y = x + 1 is labelled.
- `sim-ln-derivative` on `F.deriv`, x from 0.2 to 5.
- Sheet links on book words: "derivative formula" in Example 3.74 opens the Table of Derivatives; "derivative" in Examples 3.74, 3.77 and 3.81 opens the calculator.
- Review exercises: 375, 381, 383, 385 set here; the others written into 3.1 (391), 3.2 (367–371, 387), 3.3 (373), 3.5 (377), 3.6 (389, moved from 3.5: it needs the chain rule) and 3.7 (379); 372, 374, 376, 378, 380, 382, 384, 386, 388, 390 unkeyed and left out.
- 366 kept with an AI-marked answer; variables rows added for f, f_prime, dy/dx; anchors on every 3.9 row and the eleven forms (E_prime already had its symbol and row).
- Corrections: Example 3.79's broken reference (Equation 3.34), exercise 361's key ("United States" for New York City).
