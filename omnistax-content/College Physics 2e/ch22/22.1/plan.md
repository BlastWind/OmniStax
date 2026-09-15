# Plan: 22.1 Magnets (m42366)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's standing instruction to finish the book in
waves without check-ins; the per-section stop of rule 2, the plan review of
rule 5 and the user picks of rule 15 are replaced by this file, written
before the section was built and left for review after, as `ch22/config.md`
records.

The chapter's first section, and the shortest of the eleven. It says that
every magnet has two poles, that one of them seeks the north and is named
for that, that like poles repel and unlike poles attract, and that the two
poles cannot be separated however finely the magnet is cut. It carries no
equation, no variable and no worked example. Four book figures (one
photograph, three diagrams), three boxed notes, two glossary terms, one
conceptual question and nothing else. One page (rule 11).

## Sub-concepts (page headers)

The module prints no header of its own, so both headers are the agent's
(rule 3), and the break falls where the book's own subject changes, between
the pair of magnets that attract and the magnet that is cut in half. The
section is short and two blocks divide it honestly; a third would separate
the Earth from the poles it is evidence for.

1. `poles` **Magnets and their poles** (book: Figure 22.3, the assortment of
   magnets; the opening paragraph that names the two poles; the boxed
   Universal Characteristics of Magnets and Magnetic Poles; Figure 22.4, the
   bar magnet inside the Earth; the boxed Misconception Alert on Earth's
   magnetic poles; Figure 22.5, the two pairs of magnets).
2. `pairs` **Poles always come in pairs** (book: Figure 22.6, the magnet
   split again and again; the paragraph that carries the fact from sunspots
   down to the electron; the boxed Take-Home Experiment on refrigerator
   magnets).

Learning objectives, the section summary and the glossary come out of the
running text into the tables and the views (rule 4); the two glossary rows,
north magnetic pole and south magnetic pole, are already in `chapter.json`.
The section cites no other section and carries no PhET link.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| magnetic-poles | idea | poles | the opening paragraph; Figure 22.4, the suspended magnet; both glossary terms |
| like-poles-repel | result | poles | the boxed Universal Characteristics; Figure 22.5 in its two panels; the Take-Home Experiment |
| no-magnetic-monopoles | idea | pairs | the boxed Universal Characteristics; Figure 22.6; the paragraph on sunspots, atoms and electrons |

The section leans on `force` (4.1) and on Chapter 18's `like-charges-repel`
and `electric-charge`, which the book's own parenthesis invites the reader to
compare, and every later section of the chapter leans back on all three of
its nodes.

## Figures

id · replaces or Sim · concepts · value add · what moves or still · sliders
and choices · headline · graph · 3D

1. `fig-magnets` · Figure 22.3, bar, horseshoe and disc magnets with
   paperclips · photograph, **kept**: the section's first claim is that
   magnets come in many shapes and sizes and that every one of them has two
   poles, and the photograph is the evidence for it (`ch22/config.md`);
   width 320 as the book prints it.
2. `sim-earth-magnet` · replaces Figure 22.4, the bar magnet inside the globe
   with another hanging beside it · magnetic-poles · value add: variation by
   slider, the reader tilts Earth's internal magnet away from the rotation
   axis and moves the hanging magnet over the globe, and watches the
   direction the north-seeking end takes swing away from the geographic
   North Pole, which is the boxed Misconception Alert made visible and which
   one still drawing cannot show · **still**: a magnet hanging on a thread
   has settled where the Earth holds it, and the question is which way it
   ended up pointing, not how it swung there, so the figure answers its
   sliders and registers no cycle (rule 14; `ch22/config.md` says a compass
   needle settling onto a field line is a state, not a clock) · the tilt of
   Earth's magnetic axis from its rotation axis (0 to 25°, default 11°, the
   present value, ink) and where the magnet hangs, as a latitude on the near
   side of the globe (−20 to 45°, default 20°, ink); both untyped, since an
   angle and a place are untyped in this book · "A magnet hung at 20° north
   points 4° away from the direction of the geographic North Pole, because
   the pole it seeks is a south magnetic pole tilted 11° from the axis." ·
   none · 2D, flat: the book draws a globe in the plane of the two axes and
   the whole lesson lies in that plane, so there is no depth for an orbit to
   add (rule 28.1). Earth is an ink circle with its rotation axis dashed and
   the geographic North Pole named; the bar magnet inside it is ink with S
   at the top and N at the bottom, which is the point of the misconception;
   the hanging magnet is ink on an ink thread with N and S on its ends. No
   field line is drawn, since a field line is 22.3's idea and rule 26.5
   allows a figure only what the book has taught by its own page: the
   hanging magnet is drawn pointing at the south magnetic pole, which is
   what the section's own words claim. Readout: the tilt, the latitude and
   the angle between the magnet's direction and the direction of the
   geographic North Pole, all in ink. Labels: six, all on, none of them on a
   thing that moves far (rule 26.7). Draws nothing typed.
3. `sim-attract-repel` · replaces Figure 22.5, the two pairs of bar magnets ·
   like-poles-repel, magnetic-poles · value add: variation by choice, the
   reader turns either magnet end for end and sees all four arrangements
   collapse into the two outcomes the rule names, and slides the gap closed
   to watch the force arrows grow; the book prints two of the four and no
   gap at all · **still**: two magnets held a stated distance apart either
   pull or push, and the force is a state of that arrangement, so the figure
   answers its controls and registers no cycle · a choice for the left
   magnet, N on the right or S on the right, and a choice for the right
   magnet, N on the left or S on the left, the two magnets being discrete
   states and never sliders (rule 26.1); the gap between them (1 to 10 cm,
   default 3, ink) · "The poles that face each other are a north and a
   south, so each magnet is pulled toward the other." · none · 2D, flat: two
   bars on a line in the plane of the page, which is how the book draws
   them. Each magnet is an ink bar with its two halves lettered N and S;
   the force on each is an arrow in the force hue, drawn longer as the gap
   closes, and the figure states in words that the pull or push strengthens
   as the gap closes rather than writing a law, since the section gives
   none and the inverse square of Chapter 18 is not claimed for magnets.
   Readout: the facing poles, the gap and the direction of $\kF$ on each
   magnet. Draws force.
4. `sim-split-magnet` · replaces Figure 22.6, the bar magnet split again and
   again · no-magnetic-monopoles · value add: variation by slider, the
   reader cuts the magnet as many times as the slider allows and moves the
   cut off the middle, and every piece at every stage still has both poles,
   so the reader sees that the result depends neither on how many cuts are
   made nor on where they fall; the book draws three stages of even halving
   · **still**: cutting is a sequence of states the reader steps through on
   a slider, and an animated knife would add nothing to the count of poles ·
   the number of cuts (0 to 4, default 3, ink, whole numbers with soft
   detents, rule 26.1; four cuts is the last stage at which sixteen pieces
   are still wide enough to letter, and a fifth would put N and S below the
   size rule 26.5 asks a figure to stay legible at) and where each cut falls along a piece (40 to 60% of
   its length, default 50%, ink; the range is held there because a cut further
   off the middle leaves a sixteenth piece too narrow to letter) · "Three cuts leave eight shorter magnets,
   sixteen poles and not one pole on its own." · none · 2D, flat: the book's
   own stacked rows, one row per stage, each row the pieces the stage
   leaves. Every piece is an ink bar lettered N and S, drawn to the length
   the cuts left it. Readout: the pieces, $2^n$, the poles, $2^{n+1}$, and
   the number of isolated poles, which stays zero at every setting. Draws
   nothing typed.

Photographs: one kept (22.3), none dropped; the section has no splash image
of its own. Figures that serve exercises: none, since the section's one
exercise is a conceptual question about the mid-Atlantic ridge and carries
no image.

Extra simulations (rule 15), thought through, judged and left:

- A compass walked round a bar magnet on the table, the needle turning as it
  goes. Left: it is the book's own Figure 22.14 and belongs to 22.3, where
  the field line it traces is the idea; built here it would spend the
  reader's attention on a concept the page has not reached.
- A pole strength slider putting a number on the pull between two magnets.
  Left: the section states no law for the force between poles and rule 13
  forbids inventing one, so the slider would carry a number the book does
  not stand behind.

## Types the page binds

`force` alone, from the two arrows of `sim-attract-repel`, as
`ch22/COLOR.md` says this page should bind. Every angle, latitude, length,
gap and count on the page is untyped and in ink, and no body is tinted: a
bar magnet is ink with N and S lettered on its ends.

## Exercises

One, the book's single conceptual question on the magnetization of rock at
the mid-Atlantic ridge, in the Exercises document with an AI-marked
suggested approach, since the book prints no key for it (`ch22/config.md`).
No Check Your Understanding box, so the page hosts no inline exercise. No
problem, no AP item, and none held for a later section.

## Wanted at chapter level

Nothing. The section has no variable and no equation, so it asks for no
anchor, and both glossary rows and all three concept rows were written
before the build.

**Chapter pass, 2026-09-15.** Nothing was wanted and nothing was done. The
section's rows stood as they were written.
