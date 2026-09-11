# Plan: 1.3 Accuracy, Precision, and Significant Figures (m42120)

Source: `source.md` (converted from CNXML). Book pages 34 to 41.
Status: built 2026-09-11 without a review stop, on Chen's instruction to build the whole chapter in one pass.

A qualitative section with one equation, one worked example, three Check
Your Understanding boxes, two conceptual questions and eighteen problems,
of which the book keys nine. Four photographs, two of them decoration and
two of them the bull's-eye pair the text explains. Nothing in the section
is a typed physical quantity, so every figure draws in ink.

## Sub-concepts (page headers)

The book has eight untitled runs of text. Proposed page structure, one
block per idea, in the book's order:

1. **Accuracy and precision of a measurement** (`accuracy-precision`; the
   three paragraphs on the paper measurements and the GPS restaurant, then
   the demo that replaces the two bull's-eyes)
2. **The uncertainty in a measurement** (`uncertainty`; the uncertainty
   paragraph, the list of four factors, the paragraph after it, and the
   note "Making Connections: Real-World Connections – Fevers or Chills?";
   Check Your Understanding 1, the stopwatch, goes inline here, since it
   asks whether an uncertainty can tell two readings apart)
3. **Uncertainty as a percent of the measured value**
   (`percent-uncertainty`; the defining sentence and the equation, Example
   1.2 with the bag of apples, then a new demo)
4. **The uncertainty in a quantity you calculate** (`calculations`; the
   method of adding percents and the floor, then a new demo)
5. **The precision of a measuring tool and significant figures**
   (`sig-figs`; the two paragraphs on the ruler and the caliper, the
   "Zeros" sub-header with its paragraph, then a new demo; Check Your
   Understanding 2, counting significant figures, goes inline here)
6. **Significant figures in calculations** (`sig-figs-calculations`; the
   two rules with the circle and the potatoes, then a new demo)
7. **Significant figures in this text** (`sig-figs-text`; the paragraph;
   Check Your Understanding 3, the bags and the wagon, goes inline here,
   since it applies both rules)

The book places Check Your Understanding 1 after the floor paragraph; it
tests uncertainty alone, so it moves up to the end of block 2. The words
of every block are the book's, in the book's order; only the headers go
in. Learning objectives, the summary and the glossary come out of the
running text into the views. The conceptual questions and the problems go
to the Exercises document.

## Concept nodes (already in `book.json`)

| id | kind | name | prereqs | evidence |
|---|---|---|---|---|
| accuracy | idea | Accuracy | none | glossary; the bull's-eye passage; CQ 1 |
| precision | idea | Precision | none | glossary; the bull's-eye passage; CYU 1; CQ 2 |
| uncertainty | idea | Uncertainty A ± δA | accuracy, precision | glossary; the fevers note; CYU 1; CQ 1, 2; problems 11, 15, 17 |
| percent-uncertainty | result, eq-percent-uncertainty | %unc = δA/A × 100% | uncertainty | glossary; Example 1.2; problems 1, 3, 9, 11 |
| adding-percents | result | Method of adding percents | percent-uncertainty | glossary; the floor; problems 11, 15, 17 |
| significant-figures | idea | Significant figures | precision, uncertainty | glossary; the ruler and caliper; zeros; CYU 2; problem 7 |
| sig-figs-multiplication | skill | Significant figures in multiplication and division | significant-figures | the circle; CYU 3(b); problems 5, 7, 13, 15, 17 |
| sig-figs-addition | skill | Significant figures in addition and subtraction | significant-figures | the potatoes; CYU 3(a) |

Placeholders tagged on exercises only: `unit-conversion` (1.2, built) on
problems 3, 5 and 13, and `average-speed` (2.3, a placeholder until that section was built) on problem
13. The chapter's variables `A` and `δA` and the equation
`eq-percent-uncertainty` anchor at `1.3-uncertainty` and
`1.3-percent-uncertainty`, which are span ids of this page.

## Figures

id · replaces · concepts · what moves · sliders · headline · graph · 3D

1. `demo-target` · Figures 1.23 and 1.24 (both bull's-eyes, one demo) ·
   accuracy, precision · a bull's-eye target of five rings with the
   restaurant at its centre and eight GPS attempts as ink dots, drawn
   from a fixed seeded sequence so the picture is stable; the dots
   scatter about a centre that the offset slider moves away from the
   bull's-eye, with a spread the spread slider sets; a hollow marker at
   the centre of the attempts and a faint line from it to the restaurant;
   a legend on the right reads "low precision" and "high accuracy" in
   large type with a line under each saying why · spread (0.1 to 3.0
   rings, default 2.0, ink), offset (0 to 3.0 rings, default 0.3, ink) ·
   "a spread of 2.0 rings means low precision, and an offset of 0.3 rings
   means high accuracy" (low/high switch at 1.0 ring each) · none · no.
   The defaults reproduce Figure 1.23; spread 0.3 with offset 2.5
   reproduces Figure 1.24. No motion.
   Readout: spread = 2.0 rings, offset of the centre = 0.3 rings. Small
   line: precision is about how closely the attempts agree with one
   another, and accuracy about how close they are to the correct value;
   a system can have either without the other.
2. `demo-percent` · new (Example 1.2) · percent-uncertainty · a number
   line of weight in pounds with the four weekly weights of the example
   as ink ticks, the average A as a filled marker and the band A ± δA as
   a shaded bracket; a second line beneath repeats it for a bag half as
   heavy with the same δA, so the same absolute uncertainty becomes a
   larger percent · A (1.0 to 10.0 lb, default 5.1, ink), δA (0.1 to 1.0
   lb, default 0.4, ink) · "5.1 lb ± 0.4 lb is 5.1 lb ± 8%" · none · no.
   No motion. Readout: the equation with the numbers substituted. Small
   line: the same uncertainty on a bag half as heavy is 16%.
3. `demo-area` · new (the floor) · adding-percents · the 4.00 m by 3.00 m
   floor drawn to scale with the largest and smallest floors the
   uncertainties allow as dashed outlines about the same centre and the
   ring between them shaded, so the uncertainty in the area is the ring;
   a key on the right gives the three areas · percent uncertainty in the
   length (0 to 10%, default 2, ink), in the width (0 to 10%, default 1,
   ink) · "a floor 4.00 m by 3.00 m, known to 2% and 1%, has an area of
   12.0 m² known to 3%" · none · no. No motion. Readout: 12.0 m² ± 3% =
   12.0 m² ± 0.4 m². Small line: the largest and smallest floors, computed
   from the sliders, and that adding the percents is very nearly exact
   when the uncertainties are small.
4. `demo-ruler` · new (the precision of a measuring tool) ·
   significant-figures, precision · a stick of true length L on a strip
   and a ruler that slides in from the left over about four seconds and
   stops with its zero at the stick's left end; below, a magnified view
   of the end of the stick with the ruler's marks at the chosen division,
   a bracket over the two marks the end lies between labelled as the
   estimated digit, and the reading a person would write down · true
   length (10.00 to 50.00 cm, default 36.71, ink), smallest division (0,
   1, 2 for 1 cm, 1 mm, 0.1 mm, default 1 mm, ink) · "with millimeter
   divisions the stick reads 36.7 cm, three figures, and the 7 is
   estimated" · none · no. Finite cycle, so it gets the scrubber;
   reduced motion draws it aligned. Readout: L = 36.7 cm. Small line: the
   last digit written down is the first with some uncertainty; the
   centimeter ruler gives 37 cm, two figures, and the caliper 36.71 cm,
   four, computed from L.
5. `demo-calc` · new (the two rules) · sig-figs-multiplication,
   sig-figs-addition · two measured lengths a and b as two sticks laid end
   to end for the sum, and as the sides of a rectangle for the product;
   on the right the calculator's result for each with the rejected digits
   in muted type, and the properly written result · a (1.00 to 20.00,
   default 7.56, ink), decimals of a (0 to 3, default 2, ink), b (1.00 to
   20.00, default 6.052, ink), decimals of b (0 to 3, default 3, ink);
   each input is rounded to its own decimals before use · "7.56 + 6.052 =
   13.612, which is written 13.61 because 7.56 is known only to
   hundredths" · none · no. No motion. Readout: the sum rounded to the
   fewer decimals and the product rounded to the fewer significant
   figures, as two aligned lines. Small line: the two rules in one
   sentence.

Every figure draws in ink (`draws: []`): a spread, a weight, a percent, a
length and a count are untyped in this book. Two helpers sit at the top
of the module, `sigfigs(x, dec)` and `roundSig(x, n)`, and a seeded
generator for the GPS attempts.

Photographs, four:

- Figure 1.21, the double-pan balance (credit: Serge Melki): **drop**. A
  splash pair at the head of the section; the text never refers to it.
- Figure 1.22, the digital balance (credit: Karel Jakubec): **drop**, for
  the same reason.
- Figure 1.23, the bull's-eye with low precision and high accuracy
  (credit: Dark Evil): **replaced** by `demo-target`, which carries the
  book's number 1.23, both images as originals and the 1.23 caption.
- Figure 1.24, the bull's-eye with high precision and low accuracy
  (credit: Dark Evil): **folded** into the same demo, which reproduces it
  at spread 0.3 and offset 2.5.

Figures that serve exercises: none in this section.

Extra simulations (rule 15): none proposed. The chapter config says the
required figures already open the views the text does not, and the five
above cover every idea and result the section introduces.

## Exercises

- 3 Check Your Understanding, inline, with the book's answers: the
  stopwatch (`cyu1`, open, after `uncertainty`), counting significant
  figures (`cyu2`, five parts, after `sig-figs`), the bags and the wagon
  (`cyu3`, two parts, after `sig-figs-text`).
- 2 conceptual questions (`cq1`, `cq2`), open, with AI-written suggested
  approaches marked as such.
- 9 problems keyed and kept: 1 (`p1`, 2 kg), 3 (`p3`, two ranges as four
  parts), 5 (`p5`, three parts), 7 (`p7`, three counts), 9 (`p9`, a
  percent and a range), 11 (`p11`, a rate and its uncertainty), 13
  (`p13`, 2.8 h), 15 (`p15`, a volume and its uncertainty), 17 (`p17`, an
  area and its uncertainty).
- 9 problems left out for want of a keyed answer: 2, 4, 6, 8, 10, 12, 14,
  16 and 18 (fs-id1246911, fs-id3107170, fs-id1001291, fs-id1954504,
  fs-id1673258, fs-id3154651, fs-id1493327, fs-id2560910, fs-id1678580).
- Weights: `unit-conversion` at 2 on problem 3 and at 1 on problems 5 and
  13; `average-speed` at 1 on problem 13. Everything else at the Bloom
  value.
- Nothing held for a later page, nothing held from another section, no
  AP items in this chapter. No generated questions: every node has a book
  exercise.

## Views

- Formulas: `eq-percent-uncertainty` (important), already in
  `chapter.json`.
- Definitions: the symbols A and δA, untyped; the six glossary terms.
- Concept map: the eight nodes above with the edges `book.json` gives.

## Colour

Nothing on this page binds a type. The sliders carry `cls: ''`, the
figures colour through `PAL` alone, and the readouts write A and δA in
plain LaTeX.
