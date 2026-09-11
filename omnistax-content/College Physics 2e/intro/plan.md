# Plan: Preface (m42955)

Source: `source.md` (converted from CNXML). Status: built 2026-09-11 as
the book's own introduction, without a review stop, on Chen's
instruction to build Chapters 2 and 3 in one pass.

## What the page is

The book's Preface, kept as a page of its own beside the chapters and
listed before Chapter 1, as rule 21 asks. It is OpenStax's forty
paragraphs on the publisher, the licence, the book's coverage, the
changes of the second edition, its features (worked examples,
problem-solving strategies, misconception alerts, the essays, the
summaries, the trailers and the PhET simulations), its question types,
its authors and reviewers, its answer guides, its instructor resources
and its note on academic integrity. The book prints no learning
objectives, no summary, no glossary and no exercises here, so the page
carries none of them, and it has no lead, since nothing is written in
the book's place.

The module is thirty-two titled sections nested three deep (About
OpenStax Resources holds Customization, Art Attribution, Errata and
Format; Engaging Students holds Concept Trailers and Simulations). The
page mirrors that nesting with `<section id>` blocks, one per title, so
that a reader can fold a group and its parts together, and every title
is an `<h2>`, the header the app's explorer and fold read. The ids are
the titles in short: `about-openstax`, `customization`,
`coverage-and-scope`, `worked-examples`, `practice-and-assessment`,
`reviewers`, `academic-integrity`, and so on. The author and reviewer
lists, which the CNXML sets one name per line inside a paragraph, keep
their line breaks. The six question types are the book's list and stay
a list. Four links the book writes into its sentences (the concept
trailers, the academic integrity slider, the ICAI site, the Community
Hubs) are kept as links, as 1.2 keeps Appendix C and 16.3 keeps the
PhET laboratory; the many "your book page on OpenStax.org" references
are the book's plain words and stay plain.

## The figure

The one image, the academic integrity continuum
(`OSX_CP2e_Figure_00_P_01.jpg`), is a diagram rather than a
photograph: three coloured bands, Approved, Ask Instructor and Not
Approved, with nine icons along a line. The book prints it with no
number and an empty caption, at a width of 300. It is kept, since the
passage is about it ("OpenStax has created an interactive … You may
then include the graphic on your syllabus") and rule 21 keeps an
introduction's opening image. It is served from `media/book/`, the
book's own folder beside the chapters', at `/media/book/`.

It is a `figure` row with no number, the one kind the tables give an
unnumbered book image: a `photo` row must carry a number, and this
image has none, so the row is `figure` with the image as its one
original and `widths: [300]`, and the text carries it as a
`figure.photo` with the image at `data-width="300"` and the row's
`data-original-width`, so that the app sizes it as it sizes every kept
photograph and the validator reads the width off the row. Its eyebrow
reads "Figure", the label the app gives an unnumbered `figure` row,
and it has no caption, since the book prints none. Nothing is drawn, so
`draws` is empty.

## Figures beyond it

None. The Preface states no physics, draws no sketch and names no
typed symbol, so there is nothing for a sim to transform and nothing
for one to add (rule 15), and no `\k` macro is needed.

## What is left out

Nothing. The module has no trailer link and no apparatus; the notes say
so. Two things the tables cannot say are worth recording here: the
`figure` kind describes itself as a faithful copy that serves
exercises, which this image is not, so an unnumbered kept image is a
gap in the figure kinds; and the converter drops the CNXML `<newline>`
elements, so `source.md` runs the author lists together where the
page keeps their lines.
