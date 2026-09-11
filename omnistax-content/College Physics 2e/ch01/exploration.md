# Exploration: College Physics 2e, Chapter 1 Introduction: The Nature of Science and Physics

Written before converting the chapter (2026-09-11). Source of record is the
CNXML bundle (`source/osbooks-college-physics-bundle`), not the PDF. The
book's organisation (book → chapters → sections → untitled narrative
headers, one CNXML module per section, apparatus inside the module) is as
recorded in `ch02/exploration.md`; nothing differs here.

## Why this chapter

Chen asked for everything before Chapter 2: the book's own introduction.
Chapter 1 is the front door of the book, and the Preface (m42955, "About
OpenStax") is publisher front matter with no place in the book → chapters
→ sections model, so it is not built. The chapter's opening pages (m42119,
the Veil Nebula and the promise of the text) are recorded as the chapter's
`intro_module`; the app has no chapter landing page yet, so nothing is
built from them.

The chapter is unlike 2 and 16: it is qualitative. 1.1 has no equation at
all, 1.2 has one worked conversion, 1.3 has one boxed formula (percent
uncertainty), 1.4 has arithmetic. Nothing in it is a typed physical
quantity except the times and speeds that pass through the unit
conversions, so almost every figure draws in ink and the pages bind
little. What live figures can do here is different from what they do in
Chapter 16: make a scale visible (the ladder of powers of ten), make an
abstraction concrete (a model of the atom, a bull's-eye of GPS fixes, a
band of uncertainty on a number line), and let the reader turn the knobs
of a worked example (the drive home, the height of a building, a trillion
dollars on a football field).

## Chapter 1 modules

PDF pages 25 to 56; the chapter's glossary, summary, conceptual questions
and problems are aggregated at pp. 52 to 56 in the PDF but sit inside each
module in CNXML. Figures counted include exercise figures. CYU = Check Your
Understanding, CQ = conceptual questions, Sol = problems with an inline
solution. No AP test prep in this chapter.

| Section | Module | PDF | Ex. | Fig. | Tables | Eq. | Defs | CYU | CQ | Prob. | Sol. |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m42119 | 25 | 0 | 1 photo | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1.1 Physics: An Introduction | m42092 | 26–34 | 0 | 13 (12 photos, 1 sketch) | 0 | 0 | 9 | 1 | 9 | 0 | 0 |
| 1.2 Physical Quantities and Units | m42091 | 35–42 | 1 | 6 (5 photos, 1 sketch) | 3 | 7 | 12 | 2 | 1 | 10 | 5 |
| 1.3 Accuracy, Precision, and Significant Figures | m42120 | 43–48 | 1 | 4 (2 photos, 2 sketches) | 0 | 8 | 6 | 3 | 2 | 18 | 9 |
| 1.4 Approximation | m42121 | 49–51 | 2 | 2 photos | 0 | 7 | 1 | 1 | 0 | 8 | 4 |

Figure numbers are the ones openstax.org prints: the intro's nebula is
Figure 1.1, so 1.1's figures run 1.2 to 1.14, 1.2's 1.15 to 1.20, 1.3's
1.21 to 1.24 and 1.4's 1.25 and 1.26. The three tables are Table 1.1
(fundamental SI units), 1.2 (metric prefixes) and 1.3 (approximate values
of length, mass and time), all in 1.2; the converter flattens a table's
spanned header, so the tables are written into `text.html` from the CNXML
by hand.

Every exercise carries a type attribute. The answer key covers the
odd-numbered problems (1.2: 1, 3, 5, 7, 9; 1.3: 1, 3, 5, 7, 9, 11, 13, 15,
17; 1.4: 1, 3, 5, 7), the Check Your Understanding boxes all carry their
answer, and the conceptual questions have none. The approximation
problems' keys are "sample answers", which the book's own wording says are
one estimate among several.

## What the tooling needs

- A style for the book's tables in the article (`table.book`), since no
  built section had one.
- One new symbol, `c` (velocity type, `\kc`), for the meter sim, and two
  untyped symbols, `A` and `δA`, for the definitions view.
- No new type, no new hue, no new figlib primitive; the sprites the sims
  need (a car, a person, a building, a ruler) are drawn in the section
  modules.
