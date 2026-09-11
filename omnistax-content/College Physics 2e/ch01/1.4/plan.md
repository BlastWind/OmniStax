# Plan: 1.4 Approximation (m42121)

Source: `source.md` (converted from CNXML). openstax page
`1-4-approximation`.
Status: built 2026-09-11 without a review stop, on Chen's instruction to
build the whole chapter in one pass.

A thin section (rule 11): one paragraph, two worked examples, one
photograph, one Check Your Understanding, eight problems of which four
are keyed with sample answers. It stays a page of its own.

## Sub-concepts (page headers)

The book has one paragraph and two examples. Page structure, one block
per idea:

1. **Making reasonable approximations** (`approximation`): the opening
   paragraph, "On many occasions, physicists…", which introduces the one
   concept of the section.
2. **Approximating from the height of a person** (`ex-building`):
   Example 1.3, the 39-story building, verbatim, then a new demo that
   stacks the stories up.
3. **Approximating a vast number** (`ex-trillion`): Example 1.4, a
   trillion dollars on a football field, verbatim, with the bank-stack
   photograph (Figure 1.25) at its head where the book puts it, then a
   new demo that lays the stacks down. The Check Your Understanding (the
   basketball court) goes inline at the end of this block.

The learning objective, the one-sentence summary and the glossary entry
come out of the running text into the views. The problems go to the
Exercises document.

## Concept nodes

| id | kind | section | role here |
|---|---|---|---|
| approximation | skill | 1.4 | introduced in block 1; used by both examples, the CYU and problems 1, 3, 5, 7 |
| unit-conversion | skill | 1.2 | used by both examples (metres per person, yards to inches, inches to feet) |
| order-of-magnitude | idea | 1.2 | used by Example 1.4 (powers of ten throughout) and by the problems, whose inputs come from Table 1.3 |
| sig-figs-multiplication | skill | 1.3 | used by Example 1.4 ("we are using only one significant figure in these calculations") |

No new nodes; `approximation` and its two prerequisite edges are already
in `book.json`.

## Figures

id · replaces · concepts · what moves · sliders · headline · graph · 3D

1. `demo-building` · new (Example 1.3 has no figure) · approximation,
   unit-conversion · a person stands beside a building on a common
   ground line, and over a finite cycle of about 4 s (scrubber) the
   stories stack up one by one to the set count while a bracket on the
   right grows with them and reads the running height; a magnified view
   of the ground story on the left shows the persons stacked inside one
   story, which is the scaling step the example turns on · stories
   (1 to 100, step 1, default 39, ink), height of a person (1.5 to
   2.0 m, step 0.1, default 2.0, ink), persons per story (1 to 3, step
   0.5, default 2, ink) · "39 stories of about 4 m each make a building
   about 156 m tall" · none · no. The drawing is scaled so the finished
   building fills the canvas height, so the person beside it shrinks as
   the building grows; that is why the magnified ground story is there,
   since at 39 stories a true-scale person is a few units tall.
   Readout: (2 m / 1 person) × (2 persons / 1 story) × 39 stories =
   156 m, with the live values. Small line: the estimate is only as good
   as its inputs, and the ranges of the sliders put it within a factor of
   about two. On reduced motion the finished building is drawn.
2. `demo-trillion` · new (Example 1.4 has only the photograph) ·
   approximation, order-of-magnitude, unit-conversion,
   sig-figs-multiplication · a side view of a football field, 100 yd
   between the end zones, with a vertical scale in feet on the left and
   a person 6 ft tall standing in the end zone for scale; over a finite
   cycle of about 5 s (scrubber) the pile of bills rises on the field to
   its final height, which is labelled at the top · amount (0.1 to
   30.0 trillion dollars, step 0.1, default 1.0, ink), thickness of a
   stack of 100 bills (0.3 to 0.7 in., step 0.05, default 0.5, ink) ·
   "one trillion dollars in $100 bills covers the field to a height of
   about 100 in., or about 8 ft" · none · no. The height is computed
   from the set numbers with the field's true area, 6.48 × 10⁶ in.²,
   and rounded to one significant figure in the headline as the example
   does; the unrounded value is drawn and printed on the pile.
   Readout: height = volume / area with the live numbers, the quotient
   before rounding, then the one-figure value and its feet. Small line:
   the unrounded height, and what 28 trillion (the 2021 federal debt the
   example mentions) comes to at the set thickness. On reduced motion
   the finished pile is drawn.

Both demos draw in ink: nothing in the section is a typed quantity, so
`draws` is `[]` for every figure and the page binds no colour.

Photographs, two:

- Figure 1.25, the bank stack (credit: Andrew Magill): **keep**, as a
  photo inside Example 1.4 at its head, with the book's caption and
  credit line. It shows the thing the example counts, the stack of one
  hundred $100 bills, and its caption asks the example's question.
- Figure 1.26, Salmonella (credit: Rocky Mountain Laboratories, NIAID,
  NIH): **drop**. It belongs to problem 4, which has no keyed answer
  and is left out, so the photograph goes with it and is not copied.

Figures that serve exercises: none kept.

Extra simulations (rule 15): none proposed. The chapter config says the
required figures already open the views the text does not, and the
two demos here are the two examples made live.

## Exercises

- 1 Check Your Understanding (`cyu1`, the basketball court), open with
  the book's answer, inline after block 3, Apply since it computes.
- 4 problems keyed with sample answers (the book's own word), each an
  open answer whose solution is the sample answer for the reader to
  compare an estimate against, never a number checked to 2%: `p1`
  heartbeats in a lifetime, `p3` lifetimes against a nuclear mean life,
  `p5` atoms across a cell membrane, `p7` cells in a hummingbird and in
  a human. All Apply; tagged approximation and order-of-magnitude, with
  a weight of 2 on order-of-magnitude since each leans on approximation
  and takes its inputs from Table 1.3.
- Left out, no keyed answer: `p2` (fs-id627359, generations since
  0 AD), `p4` (fs-id1597411, atoms in a bacterium, with its Salmonella
  photograph), `p6` (fs-id1509491, ocean depth and mountain height
  against Earth's diameter), `p8` (fs-id2010654, firing rate of a
  nerve).
- The open answer type has no hint field, so the four problems carry
  no hint; the pointer at Table 1.3 the spec asked for is in
  `exercise_notes` instead.
- No conceptual questions in this section, nothing held for a later
  page, nothing held from another section. No generated questions.

## Views

- Formulas: none. The section states no equation that belongs on the
  sheet; the two examples' lines are arithmetic.
- Definitions: the glossary term approximation, already in
  `chapter.json`.
- Concept map: `approximation` with its edges to order-of-magnitude and
  unit-conversion, already in `book.json`.

## Colour

Nothing. Every quantity here (a count, a length, a money amount, a
thickness) is untyped and in ink; the page binds no type.

## Dollar signs

The build's math prerender renders `$$…$$` first and then runs the
inline `$…$` pass over the result, and KaTeX prints `\$` as a raw `$`
in its HTML, MathML and annotation, so a display equation containing
`\$` is torn apart by the inline pass (checked by running
`prerenderMath` on a test string). Dollar amounts in prose are
therefore written as `&#36;` outside the math (`&#36;$1 \times
10^{12}$`), and the one display equation that needs the sign, the
count of stacks, sets it as the fullwidth dollar sign `＄` inside
`\text{}`, which KaTeX passes through untouched.
