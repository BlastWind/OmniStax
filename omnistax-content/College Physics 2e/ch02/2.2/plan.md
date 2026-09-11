# Plan: 2.2 Vectors, Scalars, and Coordinate Systems (m42124)

Source: `source.md` (converted from CNXML). Book page 61.
Status: built 2026-09-11 without a review stop, on Chen's instruction to
finish Chapters 2 and 3 in one job.

A thin section: one photograph, one sketch, no equations, no worked
example, one Check Your Understanding, one AP item without a key, four
conceptual questions and no problems. It stays a page of its own (rule
11), as the chapter config says. No PhET note.

## Sub-concepts (page headers)

The book has one untitled run of text and one titled header. Page
structure, one block per idea, span ids as the coverage rows name them:

1. `vectors` **Vectors have magnitude and direction** (book: the opening
   question about distance and displacement, the definition of a vector,
   the sign as the direction in one dimension, the arrow whose length is
   proportional to the magnitude). The jet photograph, Figure 2.6, sits
   at the head of this block as the book prints it.
2. `scalars` **Scalars have magnitude only** (book: the definition of a
   scalar, the list of scalars, the negative temperature as a point on a
   scale, scalars never drawn as arrows). The Check Your Understanding
   item asks whether speed is a scalar, so it goes inline at the end of
   this block rather than after the coordinate passage where the book
   prints it (rule 12).
3. `coordinates` **Coordinate systems for one-dimensional motion** (book's
   own header: the coordinate line within the reference frame, right and
   up as the usual positive directions, the jet and the falling object as
   cases where the other choice is more convenient, the rule that a
   choice once made is kept). Figure 2.7 is replaced here.

Learning objectives, section summary and glossary come out of the running
text into the views. The AP item and the four conceptual questions go to
the Exercises document.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| vector | idea | vectors | glossary; CYU; CQ 1 to 4 |
| scalar | idea | scalars | glossary; CYU; CQ 1, 2 and 4 |
| coordinate-system | skill | coordinates | second learning objective; the AP item on the dropped feather |

`vectors` uses `displacement` and `distance` (2.1), which the opening
sentences contrast; `scalars` uses `distance`; `coordinates` uses
`reference-frame` (2.1) and `vector`. Conceptual question 3 asks whether
acceleration is a vector and so tags `acceleration` (2.4) as well.

## Figures

id · replaces · concepts · what moves · sliders · headline · graph · 3D

1. `sim-vector-scalar` · new · vector, scalar · still: the figure answers
   its sliders and nothing else. Left half, a vector: the jet of Figure
   2.6 on a strip with a velocity arrow drawn from its nose whose length
   is proportional to the speed and which points east or west by the sign;
   the speed, the length of the arrow alone, is written beside it in ink.
   Right half, a scalar: a thermometer scale from −40 ºC to 40 ºC with a
   dot at the reading and the reading written beside it; a negative value
   sits below the zero mark, a point on a scale and not a direction, and
   nothing is drawn as an arrow · $\kv$ in km/h (−120 to 120, step 5,
   default 90, velocity hue, east positive); temperature in ºC (−40 to 40,
   step 1, default 20, ink) · "a velocity of 90 km/h east is an arrow 90
   km/h long pointing east, and a temperature of 20 ºC is a point on a
   scale with no direction" · none · no. Readout: $\kv = +90\ \text{km/h}$
   (east) beside $\text{temperature} = 20\ \text{ºC}$; small line: the
   length of the arrow alone, 90 km/h, is the speed, which is a scalar.
   Draws velocity.
2. `sim-axes` · replaces Figure 2.7 (the axes with right and up positive)
   · coordinate-system, vector · moves: the jet flies a set distance to
   the left along a strip, one flight in about 4 real seconds, and the
   figure gets the scrubber. Above the strip is the coordinate line with
   the usual choice, right positive, and below it the same line with left
   positive, as is convenient for this jet; the origin is the same point
   on both. Each line carries the jet's starting position as a hollow
   mark, its current position as a filled mark and its displacement as an
   arrow, with the numbers under each convention written in the position
   hue · distance flown in km (0.5 to 8.0, step 0.5, default 5.0, ink);
   origin, where the zero of the coordinate line is placed, in km from the
   left edge of the strip (0 to 10, step 0.5, default 9.0, so that on
   load the zero is at the jet's starting point, ink) · at the end of the
   flight "the jet flew 5.0 km to the left, so its displacement is −5.0
   km with right positive and +5.0 km with left positive" and during it
   the distance flown so far · none · no. Readout: $\kdx = \kx - \kxo =
   -5.0\ \text{km}$ with right positive and $+5.0\ \text{km}$ with left
   positive; small line: moving the origin changes the positions but not
   the displacement, and the choice of positive direction changes the
   sign of both. Draws position.

Photographs, one:

- Figure 2.6, the Eclipse Concept jet (credit: Armchair Aviator, Flickr):
  **keep** as `fig-jet`. The text says "as with the jet in Figure 2.6",
  and the caption is the book's own statement of the choice of positive
  direction. Copied to `media/ch02/Figure_02_02_00.jpg`.

Sketch, one:

- Figure 2.7, the axes with +x to the right and +y up: **replaced** by
  `sim-axes`, which keeps the number 2.7, the book's image
  (`media/ch02/Figure_02_02_00b.jpg`) as its original and the book's
  caption. The sim shows the horizontal line only; the vertical
  convention of the book's figure is stated in its caption.

Figures that serve exercises: none.

Extra simulations (rule 15): one considered, a vertical version of the
coordinate sim with the feather of the AP item falling from a hand to
the floor under the four coordinate systems the item offers. Left: the
horizontal sim already shows what the choice of origin and of positive
direction does to a position and a displacement, and the feather's
velocity and acceleration are ideas of 2.3 and 2.4. None built.

## Exercises

- 1 Check Your Understanding, open, inline after `scalars`, with the
  book's answer: `cyu1` (is speed a scalar, citing `scalars`).
- 1 AP test prep item, `ap1` (how to set up the coordinate system for a
  dropped feather). The book prints four options and the CNXML carries no
  solution, so the item is kept as an open answer whose suggested approach
  is AI-written and marked, with the options set out in the prompt as the
  book prints them; a graded choice would grade an AI guess, which rule
  13 does not allow, and 2.5's marble item set the precedent. It names
  the feather's velocity and acceleration, which are ideas of 2.3 and
  2.4, but the choice it asks for is the coordinate system, which this
  section teaches, so it stays here.
- 4 conceptual questions, open, with AI-written suggested approaches:
  `cq1` (a speed of −10 m/s), `cq2` (the speed of that bird, which the
  book asks by a link to the previous question), `cq3` (is acceleration a
  vector), `cq4` (a temperature of −5 ºC).
- No problems in the book for this section; nothing left out.
- Nothing held from or for another section. The AP items of 2.1, 2.3 and
  2.4 test their own sections' ideas.
- No generated questions: every node has a book exercise.
- Weights: `cq3` is about vectors and merely names acceleration, so
  `acceleration` gets weight 1 there; `cq4` is about scalars and only
  touches vectors, so `vector` gets weight 1 there.

## Views

- Formulas: nothing; the section states no equation.
- Definitions: no variables; the two glossary terms, scalar and vector.
- Concept map: the three nodes above, resting on `displacement`,
  `distance`, `reference-frame` and `vector`; `acceleration` (2.4) tagged
  on conceptual question 3 only.

## Colour

The page binds velocity, from the arrow of the vector sim and its
slider, and position, from the coordinate sim's positions and
displacement. The distance flown, the place of the origin and the
temperature are untyped and in ink. No new hue, no new macro.

## Wanted at chapter level

- Nothing: the section has no variable or equation rows, so there are no
  anchors to write, and the concept, glossary and symbol rows it needs
  are all there. The chapter pass changed nothing at chapter level for
  this section and rewrote the AP item as the line above says.
