# Plan: 22.10 Magnetic Force between Two Parallel Conductors (m42386)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-15
without a review stop, on Chen's standing instruction to finish the book in
waves without check-ins; the per-section stop of rule 2, the plan review of
rule 5 and the user picks of rule 15 are replaced by this file, written
before the section was built and left for review after, as `ch22/config.md`
records.

The section where the chapter's two halves meet. Chapter 22.9 says what
field a current makes and 22.7 says what force a field puts on a current,
and putting one into the other says what two currents do to each other:
they pull together when they run the same way and push apart when they run
opposite ways, with a force per unit length that is the permeability times
the two currents divided by two pi times their separation. Nothing new is
assumed, and the result is worth more than its derivation, because it is
what the ampere is defined by, what squeezes an arc into a narrower tube and
what burns holes in a large circuit breaker.

One book figure, a drawing in two panels; no worked example; four displayed
results; one boxed note, The Ampere, kept verbatim where the book stands it
(`ch22/config.md`); no glossary term; no Check Your Understanding box; two
AP items, six conceptual questions and eight problems. One page (rule 11).

## Sub-concepts (page headers)

The module prints no header of its own (`ch22/config.md`), so all three
headers are the agent's (rule 3). The book's own subject changes twice: the
derivation and its sense run to the end of the paragraph on attraction and
repulsion, the pinch effect is a paragraph of consequences in arcs, breakers
and the sun, and the operational definition of the ampere with its note and
its current balance closes the section. A fourth block would have to part
the force per unit length from the force it is divided out of, and the book
writes those in one breath.

1. `force-between-two-wires` **The force between two parallel wires** (book:
   the opening two paragraphs; Figure 22.40; $B_1 = \mu_0 I_1/2\pi r$;
   $F_2 = I_2 l B_1$; Newton's third law and the writing of $F$ for the
   magnitude; $F/l = \mu_0 I_1 I_2/2\pi r$; attractive for currents the same
   way and repulsive for currents opposite ways).
2. `the-pinch-effect` **The pinch effect** (book: the paragraph on electric
   arcs, on large circuit breakers and on the jets of a solar flare).
3. `defining-the-ampere` **Defining the ampere** (book: the operational
   definition; the worked number $2 \times 10^{-7}$ N/m; the exactness of
   $\mu_0$ and of $1\;\text{T} = 1\;\text{N}/(\text{A}\cdot\text{m})$; the
   boxed note The Ampere; the current balance and the coulomb).

Learning objectives, the section summary and the four displayed results come
out of the running text into the tables and the views (rule 4). The section
has no glossary term of its own. Its references to other sections are plain
text, as `ch22/config.md` settles them, and this module carries no PhET
link.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| force-between-parallel-currents | result | force-between-two-wires | the three-step derivation; $F/l = \mu_0 I_1 I_2/2\pi r$; eight of the section's problems are rearrangements of it |
| attraction-and-repulsion-of-currents | idea | force-between-two-wires | the caption of Figure 22.40 and the last line of the summary; the AP item on two equal parallel currents; the conceptual questions on power poles and on three coplanar wires |
| pinch-effect | idea | the-pinch-effect | the paragraph naming the arc, the circuit breaker and the solar flare |
| definition-of-the-ampere | idea | defining-the-ampere | the number worked out at 1 A and 1 m; the boxed note; the current balance and the coulomb |

The page leans on 22.9's `field-of-a-long-straight-wire` and
`right-hand-rule-2` for the field wire 1 makes, on 22.7's
`magnetic-force-on-a-current-carrying-wire`, `force-per-unit-length-on-a-wire`
and `direction-of-force-on-a-current` for what that field does to wire 2, on
Chapter 4's `newtons-third-law` for writing one $F$ for both wires, and on
22.9's `permeability-of-free-space` for the constant the definition turns
on. 22.11 leans back on none of it directly, but the chapter's review set
there is tagged to this section's result.

## Figures

id · replaces or Sim · concepts · value add · what moves or still · sliders
and choices · headline · graph · 3D

1. `sim-parallel-wires` · replaces Figure 22.40, whose two panels, the
   perspective view of the wires with the field circling wire 1 and the view
   from above with one field line for each wire, are one number with one
   image in the bundle (the publisher prints both panels in the one file
   `Figure_23_10_01a.jpg`), so the row carries one original and no fold
   (`ch22/config.md`) · force-between-parallel-currents,
   attraction-and-repulsion-of-currents · value add: variation by slider and
   by choice. The book prints one arrangement with no numbers on it, so how
   hard two wires pull on each other, and how quickly that falls off as they
   are drawn apart, are claims on the page rather than things seen. Here the
   two currents and the separation are set by hand, the wires move apart on
   the scene, the field circle through wire 2 grows and thins with them, and
   the curve below carries the force per unit length at every separation
   with the state now set pinned on it. Sending wire 2's current the other
   way turns both force arrows over at once, which is the fact the section's
   AP item and two of its conceptual questions turn on · **still**: two
   wires carrying steady currents pull on each other, and that is a state of
   the arrangement with no clock in it, so the figure answers its controls
   and registers no cycle (rule 14; `ch22/config.md` puts the two parallel
   wires among the still figures of the chapter) · the current in wire 1
   $\kIcurone$ (0 to 1000 A, default 800, the current hue), the current in
   wire 2 $\kIcurtwo$ (0 to 1000 A, default 800, the current hue) and the
   separation $\kr$ (0.10 to 2.00 m, default 0.750, the position hue); a
   choice, never a slider, for which way wire 2's current runs, the same way
   as wire 1's or the opposite way, and a second choice for the view, the
   book's own perspective or its view from the end (rule 26.1). The two
   currents and the separation default to the section's own first problem,
   the hot and neutral lines of a light-rail train, so that the figure reads
   0.171 N/m on load and 8.53 N over a 50.0 m run of line, the answer that
   problem's key gives; the direction choice stays where the book's own
   figure stands it, on two currents running the same way, since this figure
   replaces that one · "Two wires 0.750 m apart, each
   carrying 800 A the same way, are pulled together with 0.171 N on every
   meter of their length." · **graph below** the scene, which is a wide
   horizontal arrangement (rule of the plan line), plotting $F/l$ against
   the separation from 0 to 2.00 m; the range is fixed at 0 to 1.00 N/m so
   that the default state stands a fifth of the way up it, never rescales,
   and the curve is clipped at the top edge while the live point is carried
   by `pinned()` with its number beside it · **a locked view** (rule 28.2)
   for the perspective state, not a full 3D scene: the book prints the wires
   in perspective and what the reader must see is that the field circles the
   first wire and arrives at the second at right angles to it, which a fixed
   viewpoint with the circles drawn as ellipses says honestly. An orbit
   would add no arrangement that is not already visible and would spend a 3D
   budget `ch22/config.md` has already spent on 22.4, 22.8 and 22.9. The
   viewpoint is yaw 0.55, pitch 0.34, from the right and above, chosen so
   that the horizontal field circles read as open ellipses and the two
   vertical wires stay apart on the canvas at every separation the slider
   reaches; it never changes. The other state of the view choice is the
   book's panel (b), a true flat drawing looking down the wires, where each
   current is a dot or a cross and the whole direction argument can be read
   off in one plane. Both states share the sliders, the readout and the
   graph. Draws magnetic-field, current, force, position.
2. `sim-pinch-effect` · Sim; the section prints no figure for the pinch, and
   this one replaces nothing, so it has no number and its eyebrow reads
   "Sim" (rule 14) · pinch-effect, force-between-parallel-currents,
   attraction-and-repulsion-of-currents · value add: intuition and variation
   by slider. The section states in one sentence that currents moving
   parallel to one another in an arc squeeze themselves into a smaller tube,
   and the reader is left to get from a law about two separate wires to a
   current that pulls on itself. Here the current of the arc is shared among
   seven strands and the force on each strand is the vector sum of the pair
   forces this section has just derived, computed over the six others with
   no new law and no model of a plasma at all: the six strands on the rim
   are pulled inward and the strand on the axis is pulled nowhere, which is
   the pinch. Dragging the current shows the squeeze growing as its square,
   which is why it is the large breakers that burn · **still**: the figure's
   subject is how hard a given current squeezes itself, which is a state of
   the arrangement; the collapse of a column in time is a process this book
   does not model, and `ch22/config.md` lists the pinch nowhere among the
   five ideas of the chapter that have a clock in them · the current in the
   arc $\kIcur$ (5.00 to 20.0 kA, default 15.0, the current hue) and the
   diameter of the column $d$ (6.00 to 16.0 mm, default 10.0, ink, a length
   being untyped in this book) · "A 15.0 kA arc 10.0 mm across squeezes
   itself: each strand of it is pulled toward the other six with 643 N on
   every meter." · none · flat (rule 28.1): a cross-section of the column
   seen end-on is a relation between distances in one plane, and the third
   dimension, along which nothing changes, would tell the reader nothing.
   The force arrows here are the one place on the page where the length of
   an arrow carries the size of a force: the two sliders together can change
   it by only a factor of three from the default, so one fixed scale, stated
   in a comment, holds at every setting. Draws current, force.
3. `sim-current-balance` · Sim; the book prints no figure of the current
   balance it describes in its last paragraph · definition-of-the-ampere,
   force-between-parallel-currents · value add: intuition and variation by
   slider. The definition asks for two infinite wires one meter apart, and
   the section says in one line that such wires are impractical and that the
   real instrument uses coils a few centimeters apart. What it does not say,
   and what the reader cannot see from the page, is why that helps: the
   force of the definition, 2 × 10⁻⁷ N on every meter, is the weight of
   about twenty micrograms, while twenty turns three centimeters apart at
   five amperes pull with the weight of about seven hundred milligrams,
   which any balance in a teaching laboratory can weigh. Here the turns, the current
   and the separation are set by hand and the mass on the pan answers them,
   so the reader sees the definition and its realisation as one arrangement
   at two settings · **still**: a balance at balance is a state, and the
   beam is drawn level because the mass on the pan is the mass that balances
   the force; nothing in the idea has a clock in it · the current $\kIcur$
   through both coils (0 to 10.0 A, default 5.00, the current hue), the
   number of turns $N$ in each (1 to 40, default 20, ink, a count being
   untyped) and the separation of the facing sides $\kr$ (1.00 to 10.0 cm,
   default 3.00, the position hue); a choice for which way the current runs
   in the upper coil, the same way as in the lower one or the opposite way,
   so that the balance is pulled down or pushed up · "Twenty turns carrying
   5.00 A, 3.00 cm above twenty more, are pulled down with 6.67 mN over the
   10.0 cm that face each other, the weight of 680 mg." · none · flat (rule
   28.1): the balance is a lever in one vertical plane and the two bundles
   of wire are seen end-on, so depth would add nothing. As on Figure 22.40,
   the force arrows carry their direction in their heads and their size in
   their labels and in the thickness of their stroke, because the turns, the
   current and the separation between them can change the force by four
   orders of magnitude and no fixed scale could draw both ends of that.
   Draws current, force, position.

Photographs: none. The section prints none, and its one image is a drawing
and is replaced (`ch22/config.md`).

Figures that serve exercises: the book's own images travel on the cards of
the exercises that refer to them, which is the way `ch22/config.md` picks
for this chapter. Three of the section's four exercise images belong to
exercises that are kept and so are copied: the three coplanar wires of the
second conceptual question, the two loops of the fourth, which the fifth
refers to as well and which therefore rides on both cards, and the triangle
and square of wires of the seventh problem. The fourth, the long straight
wire beside a rectangular loop, belongs to the sixth problem, which the book
leaves unkeyed and which is left out of the page (`ch22/config.md`), so its
image is not copied. None of the three is a figure row: an image an exercise
merely refers to travels on the card.

Extra simulations (rule 15), thought through, judged and left:

- Three coplanar wires, the arrangement of the section's second conceptual
  question, with each current on a choice of direction and the net force on
  the middle wire drawn. Left: the question asks the reader to reason it out
  with the two right hand rules, and a figure that answers it would take the
  work away; the image the book prints travels on the card instead.
- A pair of current loops face to face, the arrangement of the fourth and
  fifth conceptual questions, turning until their poles line up. Left: the
  loops belong to 22.8's torque on a loop and 22.9's field of a loop, both
  of which draw them already, and a third drawing of the same pair here
  would teach the reader nothing this section has added.

## Types the page binds

`magnetic-field`, `force`, `current` and `position`, exactly the four
`ch22/COLOR.md` gives this page. The field circling wire 1 and the arrow it
arrives at wire 2 with wear the field hue; the current along each wire, the
dot and the cross that stand for a current toward the reader and away from
her, and the strands of the arc wear the current hue; every force arrow
wears the force hue, a magnetic force being a force; and the separation of
the wires, on its slider and in the bracket that measures it on the scene,
wears the position hue. The diameter of the arc column, the number of turns
in a coil, the length of wire that faces its neighbor, the mass on the pan
and every axis title are untyped and in ink, and no body is tinted: a wire
is ink, a balance beam is ink, and the boundary of the arc column is a faint
ink circle.

One thing has to be settled here that `ch22/COLOR.md` settles the other way.
Its last paragraph says that with colour off a field line is told from a
force arrow by the field line carrying no arrowhead where it closes on
itself. A field line round a current does close on itself, and it is drawn
here with one arrowhead all the same, because a wire has no poles whose N
and S can give the sense, and the sense is the whole of RHR-2 and therefore
the whole of this section's direction argument. With colour off the two are
still told apart, a field line being a closed ellipse or circle and a force
arrow a straight segment from the wire it acts on. 22.9 draws the same
lines and must settle it the same way; the chapter pass is asked below to
write the exception into `ch22/COLOR.md` once, for both sections.

## Exercises

Sixteen in the book: two AP test prep items, six conceptual questions and
eight problems, of which the book keys four.

- Both AP items are carried. The first, which asks the direction of the
  force between two equal currents in the same direction, the book keys, so
  it is a graded choice. The second, which asks which way a second current
  must run for the field midway between the wires to vanish, the book leaves
  unkeyed and prints with no options, so it is an open item with an
  AI-marked suggested approach (`ch22/config.md`).
- The six conceptual questions go to the Exercises document with AI-marked
  suggested approaches, since the book prints no key for any of them. The
  fourth asks for sketches; its approach describes in words what the
  sketches would show.
- The four keyed problems go to the Exercises document as `p1`, `p3`, `p5`
  and `p7`, keeping the place each holds in the book's own list. The last of
  them carries the book's image on its card.
- The four unkeyed problems are left out and named in `notes`: the current
  in a jumper cable given the force per meter, the separation of a train's
  motor and headlight wires, the force on a rectangular loop beside a long
  straight wire, and the four wires at the corners of a square.
- No Check Your Understanding box, so the page hosts no inline exercise, and
  no exercise of this section is held for a later one or arrives from an
  earlier one.

## Wanted at chapter level

- `variables` `22.10/B_1mag` → anchor `22.10-force-between-two-wires`
- `equations` `eq-field-of-wire-one` → anchor `22.10-force-between-two-wires`
- `equations` `eq-force-on-wire-two` → anchor `22.10-force-between-two-wires`
- `equations` `eq-force-per-length-parallel` → anchor `22.10-force-between-two-wires`
- `equations` `eq-the-ampere` → anchor `22.10-defining-the-ampere`
- `ch22/COLOR.md`: the sentence in the last paragraph that says a field line
  closing on itself carries no arrowhead needs its exception written in, that
  a field line circling a current carries one, since a current has no poles
  to give the sense; 22.9 and 22.10 both draw such lines and both draw the
  arrowhead.

**Chapter pass, 2026-09-15.** All five anchors written with `ost set`: the
section's variable row and three of its equation rows carry
`22.10-force-between-two-wires`, and `eq-the-ampere` carries
`22.10-defining-the-ampere`. `ch22/COLOR.md` has gained the exception this plan
asked for, written so that it covers all three ways the chapter tells the sense
of a field line round a current: the arrowhead this page puts at the top of
each circle, the tangent field arrow 22.9 draws and the compass 22.3 stands on
the line. A bar magnet's closed lines keep the plain rule and carry no head.
Figure 22.40's row keeps its one original, since the book's two panels ship as
a single image file, and `config.md` now says so.
