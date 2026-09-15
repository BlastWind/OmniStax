# Plan: 22.3 Magnetic Fields and Magnetic Field Lines (m42370)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-15
without a review stop, on Chen's standing instruction to finish the book in
waves without check-ins; the per-section stop of rule 2, the plan review of
rule 5 and the user picks of rule 15 are replaced by this file, written
before the section was built and left for review after, as `ch22/config.md`
records.

The section that gives the chapter its picture. It defines the magnetic
field as the way magnetic forces at a distance are represented, defines the
direction of a field line as the direction a small compass points, shows
what the field looks like round a bar magnet, round a current loop and round
a straight wire, introduces the dot and the cross for a field out of and
into the page, and closes with the four rules field lines obey. It carries
no equation, no variable and no worked example: two book figures, one boxed
note, four glossary terms, four conceptual questions and nothing else. One
page (rule 11).

## Sub-concepts (page headers)

The module prints no header of its own, so both headers are the agent's
(rule 3), and the break falls where the book's subject changes, between the
maps the compasses trace and the rules those maps were found to obey.

1. `field` **The magnetic field and its field lines** (book: the opening
   paragraph on Einstein's compass and action at a distance; Figure 22.14,
   the compasses round a bar magnet; the paragraph on small compasses not
   disturbing the field; Figure 22.15, the loop, the wire and the symbols
   for a field out of and into the page; the boxed Making Connections:
   Concept of a Field).
2. `rules` **The rules that field lines obey** (book: the paragraph
   introducing the hard-and-fast rules; the four numbered rules; the closing
   paragraph on poles that cannot be separated and on monopoles).

Learning objectives, the section summary and the glossary come out of the
running text into the tables and the views (rule 4); all four glossary rows,
magnetic field, B-field, magnetic field lines and direction of magnetic
field lines, are already in `chapter.json`. The section cites no other
section, carries no PhET link and prints no Check Your Understanding box.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| magnetic-field | idea | field | the opening paragraph; the boxed Making Connections: Concept of a Field; the glossary rows for magnetic field and B-field |
| direction-of-field-lines | idea | field | Figure 22.14 in its three panels; the paragraph on compasses not disturbing the field; Figure 22.15 |
| rules-for-magnetic-field-lines | result | rules | the four numbered rules and the section summary; the closing paragraph on monopoles |

The page leans back on 22.1's `magnetic-poles` and `no-magnetic-monopoles`,
which the last rule needs, and on Chapter 18's `electric-field` and
`electric-field-lines`, which the book itself sets beside the magnetic ones
twice.

## Figures

id · replaces or Sim · concepts · value add · what moves or still · sliders
and choices · headline · graph · 3D

1. `sim-field-map` · replaces Figure 22.14, the three panels of compasses,
   of field lines and of lines closing inside the magnet ·
   direction-of-field-lines, magnetic-field, rules-for-magnetic-field-lines
   · value add: variation by slider and intuition, the reader carries one
   compass anywhere round the magnet and sees the needle lie along the line
   that passes through that place, reads how much more closely the lines are
   packed there than at a fixed mark off the north pole, and switches
   between the book's three panels without turning a page; the book prints
   the three states as three drawings and gives the reader no way to test a
   place of their own · **still**: a compass laid on a table beside a magnet
   has settled where the field holds it, and the question is which way it
   ended up pointing, not how it swung there, so the figure answers its
   controls and registers no cycle (rule 14; `ch22/config.md` records that a
   compass needle settling onto a field line is a state, not a clock) · a
   choice of what is drawn, compass needles, field lines or closed loops,
   the book's three panels being three discrete states and never a slider
   (rule 26.1); the place the reader's own compass is held, as a distance
   along the magnet (−16 to 16 cm, default 9, ink) and a distance across it
   (−10 to 10 cm, default 5, ink); both untyped, since a place is untyped in
   this book · "The compass held 9.0 cm along the magnet and 5.0 cm above it
   points 61° from the line of the magnet, where the field lines are packed
   0.52 times as closely as they are at the mark." · none ·
   2D, flat: the book draws the magnet and its lines in the plane of the
   page, the field of a bar magnet has the same shape in every plane through
   its axis, and there is no depth for an orbit to add (rule 28.1). The
   magnet is an ink bar with N and S lettered on its ends and no tint (the
   chapter's colour plan); every field line and the needle of every compass
   wears the magnetic-field hue; the compass bodies, the mark and the frame
   are ink. The lines are traced from a two-pole model of the bar, and in
   the closed-loops state they are carried back through the magnet from the
   south end to the north end, which is the book's third panel. Readout: the
   place, the direction the compass points, and the packing of the lines
   there as a ratio to their packing at the mark, written with $\kBmag$ as a
   ratio and never as a number of tesla, since the section states no formula
   for the field of a magnet. The lines close on themselves and so carry no
   arrowhead, as `ch22/COLOR.md` asks; the sense is given by the N and the S on
   the ends of the magnet, by the compass the reader carries and by the sentence
   under the drawing. Labels: four, all on, none on a thing that moves far
   (rule 26.7), with hover names on the compasses. Draws magnetic-field.
2. `sim-field-sources` · replaces Figure 22.15, the current loop, the long
   straight wire and the symbols for the field out of and into the page ·
   direction-of-field-lines, rules-for-magnetic-field-lines · value add:
   variation by choice and by slider, the reader puts the same compass into
   the field of a loop, of a wire lying in the page and of a wire running
   through the page, reverses the current in each, and watches the needle
   turn with it, which is what tells the reader that the field of a current
   has a direction the current decides; the book prints three fixed drawings
   with one current direction each · **still**: a steady current makes a
   steady field and the compass in it has settled, so the figure answers its
   controls and registers no cycle · a choice of arrangement, a current
   loop, a straight wire in the page or a wire seen end-on (rule 26.1); a
   choice of which way the current runs, as the book draws it or reversed; and
   where the compass is held, as an angle round the source (0 to 360°, ink)
   and a distance from it (2 to 12 cm, ink) · "The current comes out of the
   page where the loop crosses on the left and goes back into it on the right,
   so the field runs up through the middle of the loop and back down outside
   it." · none · 2D, flat: each of the book's three panels is a plane section,
   and the panel that draws the wire lying in the page is flat by its nature,
   since the dot and the cross exist to put a direction perpendicular to the
   page on a flat drawing (rule 28.1). The loop is drawn edge-on, because the
   page is then one plane through the loop's axis and the field in that plane
   can be traced honestly; it is summed piece by piece round the whole ring, as
   Biot and Savart's law gives it, and never taken for the field of two long
   wires, which is what makes the picture the one the book draws and the
   sentence about the bar magnet true. The wires and the loop are ink; the
   arrow that carries the current along a wire, the arrow round the loop and
   the dot and the cross that say which way a current runs wear the current
   hue; every field line and the dot and the cross that stand for a field wear
   the magnetic-field hue, the dot drawn filled and the cross drawn heavy so
   that both read at the page's smallest size, as `ch22/COLOR.md` asks. The
   lines close on themselves and so carry no arrowhead (`ch22/COLOR.md`); the
   current's own symbols, the compass and the headline give the sense, and
   reversing the current turns every needle end for end. Where the field runs
   perpendicular to the page the compass is drawn on edge, since its needle
   then stands out of the page. The right hand of the book's third panel is
   left out and the book's own image carries it, since the section's words
   state no right-hand rule and 22.9 is where the book names one (rule 26.5).
   Readout: the direction of the current and the direction of the field where
   the compass is held. Labels: three in the scene and a legend of up to five
   rows in the corner, all on. Draws magnetic-field and current.

Photographs: none in the module, so none kept and none dropped. Figures that
serve exercises: none, the section's four exercises being conceptual
questions with no image.

Extra simulations (rule 15), thought through, judged and left:

- Two magnets laid side by side, so that the reader can watch two sets of
  lines refuse to cross. Left: the fact belongs to rule 3, which the page
  already carries in words and which `sim-field-map` shows at every place
  the compass is held, and a second magnet would need a field for two poles
  the section does not state.
- A field-line map of a pair of equal and opposite charges beside the map of
  the bar magnet, for the comparison the last paragraph draws. Left: the
  electric map is Chapter 18's Figure 18.28 and the comparison the section
  makes is about where lines end, which is a sentence, not a picture; a
  second map would spend the reader's attention on a chapter already read.

## Types the page binds

`magnetic-field` and `current`, as `ch22/COLOR.md` says this page should
bind: the first from every field line and every needle of both figures, the
second from the arrow along the wire and round the loop of
`sim-field-sources`. Every distance, angle and place on the page is untyped
and in ink, no body is tinted, and the ratio of packings in the first
figure's readout is a ratio and so untyped.

## Exercises

Four, all of them conceptual questions, all in the Exercises document with
AI-marked suggested approaches, since the book prints no key for any of them
(`ch22/config.md`). No problem, no AP item, no Check Your Understanding box
and so no inline exercise host, and none held here for a later section.

## Wanted at chapter level

Nothing. The section has no variable and no equation, so it asks for no
anchor, and all four glossary rows and all three concept rows were written
before the build.

**Chapter pass, 2026-09-15.** Nothing was wanted and nothing was done. The
section's rows stood as they were written.
