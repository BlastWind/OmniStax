# Plan: Introduction to Linear Momentum and Collisions (m42155)

Source: `source.md` (converted from CNXML). Status: built 2026-09-11 in the
chapter's preparation pass, without a review stop, on Chen's instruction to
finish the book in one job without check-ins, and to the pattern of
`ch03/intro/` and `ch04/intro/`.

## What the page is

The chapter's own introduction, kept as a page of its own and listed before
8.1, as rule 21 asks. It is the book's two paragraphs on what the everyday
word momentum already carries of the scientific one, and on why momentum
matters: like energy, it is conserved, and only a few quantities in nature
are. The book sets no learning objectives, no summary and no exercises
here, so the page carries none of them, and it has no lead, since nothing
is written in the book's place. The module marks no term, so the page adds
nothing to the glossary.

## The photograph

Figure 8.1, the rugby players colliding, is kept with the book's number,
its caption and its credit clause. Rule 21 makes the chapter opener's
photograph the point of the page, and here the paragraph beneath it points
at the photograph by name: "looking at the rugby players in the photograph
colliding and falling to the ground, we expect their momenta to have great
effects in the resulting collisions." The CNXML gives the image neither a
width nor a height, so `widths` is empty and the app shows the image at its
natural size.

The bundle's file name for it carries a space, `Figure 09_00_01.jpg`, which
no other image of this book does. The book's rules ask that a kept
photograph keep the bundle's file name, so the space is kept and the `src`
in `text.html` writes it as `%20`. The chapter pass should confirm the
image loads in the built site; if a space turns out to be trouble anywhere
in the pipeline, the file is renamed with an underscore and the report says
so.

The numbering is the book's: the opener is Figure 8.1, so 8.1 has no
figure, 8.2's graph of force against time is Figure 8.2, and the chapter
runs on to Figure 8.13, the space shuttle of 8.7. The chapter's figure
numbers are worked out in `ch08/exploration.md`.

## Figures beyond it

None. The introduction draws no sketch and states no result, so there is
nothing for a sim to transform and nothing for one to add (rule 15).

## What is left out

The link to the chapter's video trailer at the end of the module, which is
apparatus of the publisher's site rather than the book's text, as the PhET
links are; the notes say so.
