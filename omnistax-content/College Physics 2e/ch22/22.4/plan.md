# Plan: 22.4 Magnetic Field Strength: Force on a Moving Charge in a Magnetic Field (m42372)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-15
without a review stop, on Chen's standing instruction to finish the book in
waves without check-ins; the per-section stop of rule 2, the plan review of
rule 5 and the user picks of rule 15 are replaced by this file, written
before the section was built and left for review after, as `ch22/config.md`
records.

The section where the force stops pointing along a line the reader can draw
on the page. It gives the magnitude of the magnetic force on a moving
charge, defines the strength of a magnetic field by turning that law round,
derives the tesla from the definition, names the gauss, and states right
hand rule 1 for the direction. Two book figures, one boxed note, one worked
example, five glossary terms, fourteen exercises and three unnumbered
images inside the problems. One page (rule 11).

## Sub-concepts (page headers)

The module prints one header of its own, Right Hand Rule 1, and
`ch22/config.md` keeps it where the book stands it. The book stands it
before the paragraph that gives the *magnitude* of the force and lets it
run over the definition of the field, the tesla, the gauss, the direction
and the worked example, which is more than one block. Three further
headers are the agent's (rule 3) and they fall where the book's own subject
changes: before the opening paragraph, which is about the mechanism rather
than the rule; at "Because sin θ is unitless", where the subject becomes
the unit; and at "The *direction* of the magnetic force", where it becomes
the geometry.

1. `moving-charges` **Magnetic fields exert forces on moving charges**
   (book: the opening paragraph on the mechanism by which one magnet
   pushes another).
2. `force-law` **Right Hand Rule 1** — the book's own header (book: the
   paragraph from "The magnetic force on a moving charge is one of the most
   fundamental known" to "we solve $F = qvB\sin\theta$ for $B$"; the
   equation $F = qvB\sin\theta$; the equation $B = F/qv\sin\theta$).
3. `tesla-and-gauss` **The tesla and the gauss** (book: "Because sin θ is
   unitless, the tesla is", the identity for one tesla, the parenthesis on
   C/s = A, and the paragraph naming the gauss and the field strengths of
   permanent magnets, superconducting electromagnets and the Earth).
4. `direction-of-the-force` **The direction of the force** (book: the
   paragraph stating right hand rule 1 and the reversal for a negative
   charge; Figure 22.16; the boxed Making Connections: Charges and Magnets;
   Example 22.1 with Figure 22.17).

Learning objectives, the section summary and the glossary come out of the
running text into the tables and the views (rule 4); the five glossary rows,
right hand rule 1 (RHR-1), Lorentz force, tesla, magnetic force and gauss,
are already in `chapter.json`. The section's closing cross-reference to
Force on a Moving Charge in a Magnetic Field: Examples and Applications is
plain text, as every cross-reference of this book is
(`ch22/config.md`). The module carries no PhET link and no Check Your
Understanding box.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| magnetic-force-on-a-moving-charge | result | force-law | the first equation; the third objective; the section summary; Example 22.1; eight of the problems |
| magnetic-field-strength-defined | idea | force-law | "this is how we define the magnetic field strength B"; the rearranged equation; the unit derived from it at once |
| the-tesla | idea | tesla-and-gauss | the identity for one tesla; the gauss in the glossary; the Earth's 5 × 10⁻⁵ T used in Example 22.1 and in five problems |
| right-hand-rule-1 | skill | direction-of-the-force | the second objective; Figure 22.16; Figure 22.17; six problems that ask for one of the three directions given the other two |
| force-reverses-with-sign-of-charge | idea | direction-of-the-force | the sentence that follows the rule; the caption of Figure 22.17; the two kept problems repeated for the other sign |

The page leans back on `magnetic-field` and `current-is-the-source-of-magnetism`
(22.2, 22.3), on `electric-charge` (18.1), on `force` (4.1) and on
`average-velocity` (2.3), and every later section of the chapter leans on
all five of its nodes.

## Figures

id · replaces or Sim · concepts · value add · what moves or still · sliders
and choices · headline · graph · 3D

1. `sim-rhr-1` · **Figure 22.16 + 22.17**, the hand with $v$, $B$ and $F$
   and the charged rod thrown west in the Earth's northward field, folded
   as `ch22/config.md` asks: one vector trio of which the book's glass rod
   is a state, reached by loading the figure at the book's own numbers ·
   right-hand-rule-1, magnetic-force-on-a-moving-charge,
   force-reverses-with-sign-of-charge · value add: **shape in 3D**, and
   variation by slider. The whole lesson is that $F$ stands perpendicular
   to the plane the velocity and the field lie in, and flat the book has to
   draw that force straight up off a sheet of paper and hope the reader
   supplies the third axis. Turned, the reader sees the force leave the
   plane, sees it shrink to nothing as the velocity swings onto the field,
   and sees it change ends when the charge changes sign, which no still
   drawing of a hand can say · **still**: a charge crossing a field at a
   given angle feels a force that is a state of that arrangement, and the
   figure answers its controls; the charge's path is 22.5's subject and
   nothing here has a clock, so no cycle and no transport (rule 14) · the
   speed $\kv$ (0 to 15 m/s, default 10, velocity), the field $\kBmag$ (0
   to 1.00 G, default 0.50, magnetic-field) and the angle $\theta$ between
   them (0 to 180°, default 90, untyped); a choice for the sign of the
   charge (positive, the book's rule, or negative, default positive) and a
   choice for the right hand itself (shown or hidden, default shown), both
   discrete states and so never sliders (rule 26.1) · "A charge of +20 nC
   crossing a 0.50 G field at 10 m/s and 90° is pushed straight down with
   1.0 × 10⁻¹¹ N." · **graph below**: the scene is horizontal, so the graph
   of $F$ against $\theta$ from 0° to 180° sits under it with the current
   point pinned, its vertical axis fixed at 0 to 3.0 × 10⁻¹¹ N from the
   slider maxima at 20 nC · **3D**, the tier argued below.
2. `sim-tesla` · Sim · the-tesla, magnetic-field-strength-defined · value
   add: variation by slider and intuition. The section gives four field
   strengths in four sentences — the Earth's 5 × 10⁻⁵ T, half a gauss, the
   2 T of the strongest permanent magnets and the 10 T or more of a
   superconducting electromagnet — and they span five powers of ten, which
   a sentence cannot show and a linear strip cannot hold. Laid on one
   logarithmic strip in tesla above and gauss below, with a second strip
   carrying the force that field puts on the charge the reader sets, the
   reader sees both that a tesla is an enormous field and that the force it
   gives a charge anyone can rub onto a rod is still minute · **still**:
   the strips answer their controls and nothing here has a clock · the
   charge $\kq$ (1 to 100 nC, default 20, charge) and the speed $\kv$ (1 to
   100 m/s, default 10, velocity); a dropdown of the field among the
   section's own three, the Earth's field at its surface, the strongest
   permanent magnets and a superconducting electromagnet, default the
   Earth's, since these are three named states and not a continuum, and a
   dropdown rather than a button row because three names that long wrap one
   (rule 26.1) · "The Earth's field of 5 × 10⁻⁵ T pushes a 20 nC charge
   crossing it at 10 m/s with 1.0 × 10⁻¹¹ N." · **none**: the two
   logarithmic strips are the scene, and a graph of a quantity that runs
   over ten powers of ten would be a strip again · **2D**, flat: a scale of
   magnitudes is a relation between numbers and is clearest drawn flat with
   a fixed frame (rule 28.1).

### Why `sim-rhr-1` is a full 3D scene, and where the orbit stops

Rule 28.5 asks the plan to argue the tier, and rule 24.5 to default to the
lowest one that delivers the value adds.

A faithful copy is out: the book draws a hand, and the reader who cannot
already see the geometry learns nothing from a picture of someone else's
hand. A still flat simulation is the tier to beat, and it fails on the one
fact the section exists to teach. Flat, the plane of $v$ and $B$ is the
page, and the force must be drawn as a dot or a cross — the very notation
22.3 introduced — or as an arrow that runs up the page and is not
perpendicular to anything the reader can see. Either way the reader is
asked to imagine the depth, which is rule 24.3's gate for a scene that
turns. A locked view (rule 28.2) would fix one perspective, and then the
force and the velocity would be two arrows on the page whose right angle
the reader must take on trust, and turning the charge's velocity round to
$\theta = 0$ would move the force out of the drawing altogether. So the
tier is the full 3D scene, the second in this book after Chapter 6's
Cavendish balance and one of the three `ch22/config.md` allows the chapter.

The orbit is bounded to the hemisphere above the plane of $v$ and $B$:
pitch from 6° to 82°, yaw free. The bound is handedness. Right hand rule 1
is a statement about a right-handed arrangement, and a reader who drifted
under the plane would see the same three arrows with the force apparently
coming out of the other side and would learn the left hand rule. Yaw stays
free because every compass direction round the charge is a place a reader
may want to stand, and none of them mirrors anything. Three snap-to-view
buttons (rule 26.2): **as the book draws it**, the three-quarter view of
Figure 22.16; **along the field**, from the north, where the velocity is
foreshortened and the force is seen at its full length; and **from above**,
looking down on the plane of $v$ and $B$, where the force comes straight at
the reader and the figure prints the dot or the cross of 22.3 beside it.
Auto-rotate is offered and starts off, since the trio has a front and an
idle spin would only make the handedness harder to hold; the wheel and the
two zoom buttons come in and out. Where WebGL is missing the same figure
draws the plane of $v$ and $B$ flat from above, with the force as the dot
or the cross, and keeps every control and the graph.

The three arrows are drawn to a fixed scale taken from the slider maxima
(rule of the prompt): the velocity at 2.0 units when the speed slider is at
15 m/s, the force at 3.2 units when the force is the greatest the sliders
reach, 3.0 × 10⁻¹¹ N, so both shrink honestly as their quantities do and
the force vanishes at $\theta = 0$, at $\theta = 180°$ and at $v = 0$. The
field's strength is told the way 22.3 tells it, by how closely its lines
are drawn, one line for each tenth of a gauss across a plane of radius 2.1
units, so the field slider changes the picture and not only the numbers
(rule 24.6). The names on the scene are five, $v$, $B$, $F$, the charge
with its sign and the angle, so they are on by default (rule 26.7); the
four compass points are the frame and are drawn quieter, and every part of
the hand carries a hover name. The right hand itself is drawn from the
library's meshes, a translucent palm with four fingers along the field, a
thumb along the velocity and a wrist, since no sprite of a hand exists.

Photographs: none. The section prints no photograph, and its two numbered
images are both diagrams, both folded into `sim-rhr-1` and both kept as its
`originals` with the widths the book prints them at, 275 and 400.

Figures that serve exercises: three, the unnumbered direction panels inside
problems 1, 3 and 5. Each is copied faithfully to `media/ch22/` and travels
on its exercise's own `figure` field, which is the second of the book's two
ways and the one `ch22/config.md` picks for this chapter; none of the three
becomes a figure row, and none carries a slider or a caption, since the
book prints none.

Extra simulations (rule 15), thought through, judged and left:

- The six panels of problem 1 as a drill: a direction quiz that turns the
  reader's answer over and marks it. Left: the page already gives the
  reader a trio they can set to any of the six panels themselves, and the
  problems are the place a question is asked and marked.
- A charge released in a field and followed as it curves. Left: it is
  22.5's whole subject, and built here it would spend the reader's
  attention on circular motion a page before the book gives the radius.
- The Lorentz force with an electric field beside the magnetic one. Left:
  the section says nothing about the two together, and 22.6 and 22.11 are
  where the book puts them side by side.

## Types the page binds

`magnetic-field`, `force`, `velocity` and `charge`, which is exactly what
`ch22/COLOR.md` says this page should bind. The angle $\theta$, every
length, and the gauss and tesla labels on the strips are untyped and in
ink; no body is tinted, the right hand being a translucent grey shape and
the plane of $v$ and $B$ a faint ink disc with its compass points lettered.
The sign of the charge is told by the label on it, + or −, and by which way
the force arrow points, never by a second hue.

## Exercises

Fourteen, all at the end in the Exercises document; the module prints no
Check Your Understanding box, so the page hosts no inline exercise.

- Six problems with a keyed answer, kept with the book's key and numbered
  by the book's own order: `p1` and `p3` and `p5`, the three direction
  panels, each with its image on the card; `p7`, the aluminum rod between
  the poles; `p9`, the cosmic ray proton; `p11`, the physicist's charge
  limit.
- Five problems with no key, left out and named in `notes`
  (`ch22/config.md`): the two repeats of problems 1 and 3 for the other
  sign, the repeat of problem 5, the supersonic jet over the magnetic
  south pole and the electron's two angles.
- Two AP test prep items, both kept: `ap1`, the proton moving against the
  field, as a graded choice on the book's key; `ap2`, the proton at 62° to
  the field, which the book leaves unkeyed and which is therefore an open
  item with an AI-marked suggested approach (`ch22/config.md`).
- One conceptual question, `cq1`, on whether a straight path means no
  field, open with an AI-marked suggested approach.

No exercise is held here for a later section and none is taken from
another; 22.5's one AP item that belongs to 22.7 is 22.5's business.
No question is generated: every concept node of the page is tested by at
least one of the fourteen.

## Wanted at chapter level

- equation `eq-magnetic-force` → anchor `22.4-force-law`
- equation `eq-field-from-force` → anchor `22.4-force-law`
- equation `eq-tesla` → anchor `22.4-tesla-and-gauss`
- variable `B_mag` → anchor `22.4-force-law`
- variable `F` → anchor `22.4-force-law`
- variable `q` → anchor `22.4-force-law`
- variable `v` → anchor `22.4-force-law`
- variable `θ` → anchor `22.4-force-law`

**Chapter pass, 2026-09-15.** All eight anchors written with `ost set`: the
three equation rows and the five variable rows of the section now carry
`22.4-force-law`, except `eq-tesla`, which carries `22.4-tesla-and-gauss`. The
AP item fs-id2770151, whose key the publisher commented out of the CNXML, is
kept unkeyed as the section built it, and the case is recorded in
`ch22/exploration.md` under Errata and in `ch22/config.md`. The `hand3d` mesh
the section built out of `F.mesh` boxes and cylinders is left where it is: no
other section of the chapter draws a hand in 3D, so the library gains nothing
by holding one yet, and the note stands here for the section that wants a
second.
