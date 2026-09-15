# Plan: 22.7 Magnetic Force on a Current-Carrying Conductor (m42398)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-15
without a review stop, on Chen's standing instruction to finish the book in
waves without check-ins; the per-section stop of rule 2, the plan review of
rule 5 and the user picks of rule 15 are replaced by this file, written
before the section was built and left for review after, as `ch22/config.md`
records.

The section that carries the chapter across from a law about particles to a
law about circuits. Because a charge cannot leave the wire it moves in, the
force the field puts on the charges is handed on to the wire, and adding the
force on every carrier in a length of wire turns $F = qvB\sin\theta$ into
$F = IlB\sin\theta$. The direction is the same right hand rule as before,
with the thumb now laid along the current. The section ends on an
application in which the conductor is not a wire at all but a fluid, and the
force pumps it along a tube with no moving part anywhere in the pump.

Four book figures, all four of them drawings, one worked example, two
displayed results, no boxed note, no glossary term, no Check Your
Understanding box, four conceptual questions and ten problems. One page
(rule 11).

## Sub-concepts (page headers)

The module prints no header of its own (`ch22/config.md`), so both headers
are the agent's (rule 3). The break falls where the book's own subject
changes, between the wire in the laboratory magnet and the fluid in the
pump: everything before it is the derivation and the rule, and everything
after it is one application of them. A third block would have to separate
the force per unit length from the force it is divided out of, and the book
writes them in one paragraph.

1. `force-on-a-wire` **The force on a current-carrying wire** (book: the
   opening sentence; Figure 22.29, the wire between the poles of a magnet;
   the derivation from the force on one drifting charge; $F = (nqAv_d)lB
   \sin\theta$; $F = IlB\sin\theta$; the force per unit length; RHR-1 with
   the thumb on the current; Figure 22.30; Example 22.4).
2. `pumping-a-fluid` **Pumping a fluid with a magnetic force** (book: the
   paragraph on converting electric energy to work and on
   magnetohydrodynamics; Figure 22.31, the pump; the paragraph on liquid
   sodium, artificial hearts and submarines; Figure 22.32, the propulsion
   duct).

Learning objectives, the section summary and the two displayed results come
out of the running text into the tables and the views (rule 4). The section
has no glossary term of its own. It refers the reader to Current for
$I = nqAv_d$ and forward to the next section for motors, and both references
are plain text, as `ch22/config.md` settles them. There is no PhET link in
this module.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| magnetic-force-on-a-current-carrying-wire | result | force-on-a-wire | the derivation printed in full; $F = IlB\sin\theta$; Example 22.4, which puts 1.50 N on 5.00 cm of wire |
| force-per-unit-length-on-a-wire | result | force-on-a-wire | the division of both sides by $l$; the lightning bolt and power-line problems |
| direction-of-force-on-a-current | skill | force-on-a-wire | RHR-1 with the thumb on the current; Figures 22.29 and 22.30; the direction problems |
| magnetohydrodynamic-pump | idea | pumping-a-fluid | Figures 22.31 and 22.32; the paragraphs on liquid sodium, artificial hearts and submarine drives |

The page leans on 22.4's `magnetic-force-on-a-moving-charge` and
`right-hand-rule-1`, which the derivation starts from and the direction rule
borrows whole, and on Chapter 20's `drift-velocity` and
`current-and-drift-velocity`, which are what let $nqAv_d$ be written as $I$.
22.8, 22.10 and 22.11 all lean back on the result.

## Figures

id · replaces or Sim · concepts · value add · what moves or still · sliders
and choices · headline · graph · 3D

1. `sim-wire-in-field` · replaces Figure 22.29, the wire carrying current
   through the gap of a magnet, with the RHR-1 hand drawn beside it ·
   magnetic-force-on-a-current-carrying-wire, direction-of-force-on-a-current
   · value add: standardisation and variation by slider, since the book
   prints one wire in one field carrying one current and the reader has to
   take the size of the force on trust; here the current, the length in the
   field and the field strength are all set by hand, the force arrow grows
   and shrinks with them, and reversing the current turns the force over,
   which is the fact the direction problems of the section turn on ·
   **still**: a wire held between the poles of a magnet feels a force, and
   that force is a state of the arrangement and has no clock in it, so the
   figure answers its controls and registers no cycle (rule 14;
   `ch22/config.md` puts the force on a wire among the still figures of the
   chapter) · the current $\kIcur$ (0 to 40 A, default 20.0, the current
   hue), the length of wire in the field $l$ (1.00 to 10.0 cm, default 5.00,
   ink, a length being untyped in this book) and the field strength
   $\kBmag$ (0 to 2.50 T, default 1.50, the field hue); a choice, never a
   slider, for which way the current runs through the gap, out of the
   drawing toward the reader or into it (rule 26.1) · "A current of 20.0 A
   through 5.00 cm of wire in a 1.50 T field is pushed upward with a force
   of 1.50 N." · none · **a locked view** (rule 28.2), not a full 3D scene:
   the book prints the magnet in perspective and the lesson is that the
   force stands at right angles to both the current and the field, which a
   fixed viewpoint with shaded faces says honestly, while an orbit would add
   no arrangement the reader cannot already see and would cost the chapter's
   3D budget, which `ch22/config.md` spends on 22.4, 22.8 and 22.9. The
   viewpoint is yaw 0.26, pitch 0.42, from a little to the right and well
   above, chosen so that the wire running away from the reader stays in the
   column of canvas between the two poles it passes; it never changes. A
   pole piece is an ink solid with N or S lettered on the face turned to the
   reader, the wire is ink, the field arrows across the gap wear the field
   hue, the current arrow along the wire the current hue and the force arrow
   the force hue; the two ends of the length in the field are marked on the
   wire in ink.
   The defaults are Example 22.4's numbers, so the figure reads 1.50 N on
   load. Draws magnetic-field, current, force.
2. `sim-angle-and-force` · replaces Figure 22.30, the plane of $I$ and $B$
   with $F$ perpendicular to it · direction-of-force-on-a-current,
   force-per-unit-length-on-a-wire · value add: variation by slider, and the
   only figure of the section that can give the reader the sine: the book's
   drawing fixes one angle and prints $F = IlB\sin\theta$ under it, so the
   factor that makes the force vanish when the wire lies along the field and
   greatest when it lies across it is a claim on the page rather than
   something seen. Here the angle is dragged from 0 to 180°, the force arrow
   follows it, and the curve below carries the live point, so the two ends
   where the force goes to zero are reached rather than described · **still**:
   an angle the reader sets is a state, and nothing in the idea has a time
   in it · the angle $\theta$ between the current and the field (0 to 180°,
   default 90°, ink, an angle being untyped, with soft detents at 0, 90 and
   180), the current $\kIcur$ (0 to 40 A, default 20.0, the current hue) and
   the field $\kBmag$ (0 to 2.50 T, default 1.50, the field hue); the length
   is held at one meter so that the
   figure reads the force per unit length, which is the section's second
   result and has no drawing of its own in the book · "A 20.0 A current
   across a 1.50 T field at 90° is pushed with 30.0 N on every meter of
   wire." · **graph below** the scene, which is a wide horizontal plane
   (rule of the plan line), plotting $F/l$ against $\theta$ from 0 to 180°
   with the live point on the curve; the range is fixed at 0 to 60 N/m so
   that the default state stands half way up it, never rescales, and a value
   past the top edge is pinned there by `pinned()` with its number written
   beside it · a locked view for the plane itself, at the same yaw and pitch
   as the figure above, with the current running away from the reader along
   the same axis as 22.29's wire so that the two drawings read as one
   arrangement; no orbit, for the reason given there. Draws magnetic-field, current, force.
3. `sim-mhd-pump` · replaces Figure 22.31 **and** Figure 22.32, which fold
   into one (eyebrow "Figure 22.31 + 22.32", number 22.31, 22.32 under
   `folds`, both images under `originals`, so that both numbers in the prose
   link here) · magnetohydrodynamic-pump, direction-of-force-on-a-current ·
   the fold is judged here, as `ch22/config.md` asks: the book draws the
   same mechanism twice, a current driven across a duct with a field through
   it and the force running along the duct's axis, once as a tube between
   the poles of a laboratory magnet and once as a thruster wrapped in
   superconducting coils in the hull of a submarine, and one live drawing
   with the surroundings on a choice is clearly better than two drawings of
   one idea (rule 14) · value add: variation by choice. The section's own
   conceptual question asks the reader to verify that the direction of the
   force does not depend on the sign of the charges that carry the current
   across the fluid, and a still drawing cannot answer it; here the carriers
   are a choice, and switching from positive to negative turns both the
   velocity of the carriers and the sign of the charge over at once, so the
   force arrow does not move, which is the answer · **still**: the fluid is
   pushed steadily along the duct and the figure's subject is which way it
   is pushed and how hard, not the flow; an animated stream would replay an
   arrow the book already draws and rule 24.9 forbids it · the current
   across the duct $\kIcur$ (0 to 150 A, default 100, the current hue), the
   field $\kBmag$ (0 to 3.00 T, default 2.00, the field hue) and the
   diameter of the duct $l$ (10.0 to 40.0 cm, default 25.0, ink, the range
   held above 10 cm so that the carriers inside the duct stay large enough
   to letter at every setting, rule 26.5), the three numbers of the
   section's own MHD problem; a choice for the carriers
   (positive, negative, or both signs at once) and a choice for the
   surroundings (a laboratory tube between the poles of a magnet, or a
   thruster duct in a submarine) · "A 100 A current across a 25.0 cm duct in
   a 2.00 T field drives the fluid along the tube with a force of 50.0 N." ·
   none · a locked view at the same yaw and pitch as the two figures above,
   so that the duct is read as the wire of Figure 22.29 with the wire taken
   away; no orbit, for the reason given there. The duct is ink, the fluid
   inside it is drawn by the packing of its carriers and never tinted, the
   carriers are dots lettered with their sign, the field arrows wear the
   field hue, the current arrow the current hue and the force arrow the
   force hue. Draws magnetic-field, current, force.

Photographs: none. The section prints no photograph, and its four images are
all drawings, so all four are replaced (`ch22/config.md`).

Figures that serve exercises: the book's own images travel on the cards of
the exercises that refer to them, which is the way `ch22/config.md` picks
for this chapter. Two of the section's four exercise images belong to
problems the book keys and so are copied: the six-panel direction diagram of
the first problem and the three-panel diagram of the third. The other two,
the three-panel diagram of the second problem and the rectangular loop of
the tenth, belong to problems the book leaves unkeyed, which are left out of
the page (`ch22/config.md`), so their images are not copied and the
chapter's count of four for this section is two in the built page. Neither
copied image is a figure row: an image an exercise merely refers to travels
on the card.

Extra simulations (rule 15), thought through, judged and left:

- The derivation itself, drawn: a length of wire with $n$ carriers per cubic
  metre drifting through it, the force on one carrier growing into the force
  on the wire as the count rises. Left: the reader would watch a sum being
  taken, which is arithmetic rather than physics, and the two quantities
  that matter, the current and the length in the field, are already sliders
  on Figure 22.29.
- A lightning bolt in the Earth's field, the force per metre on it. Left:
  it is the situation of one unkeyed problem, which the page does not carry,
  and the angle figure already answers it at any current and any field.

## Types the page binds

`magnetic-field`, `force` and `current`, exactly the three `ch22/COLOR.md`
gives this page. The length of wire in the field, the diameter of the duct,
the angle between the current and the field and every axis title are untyped
and in ink; the pole pieces, the wire, the duct and the submarine's hull are
ink bodies and none of them is tinted, a north pole being told by the letter
N on its face. The carriers in the pump are drawn as lettered dots rather
than in the element palette, since the fluid is sea water or liquid sodium
and the book names no particular ion for them.

## Exercises

Fourteen in the book: four conceptual questions and ten problems, of which
the book keys five. One more arrives from another section.

- The four conceptual questions go to the Exercises document with AI-marked
  suggested approaches, since the book prints no key for any of them
  (`ch22/config.md`). The first asks for a sketch; the approach it carries
  describes in words what the sketch would show, which is the direction the
  electrons drift and why RHR-1 still gives the force upward.
- The five keyed problems go to the Exercises document as `p1`, `p3`, `p5`,
  `p7` and `p9`, keeping the place each holds in the book's own list. Two of
  them carry the book's image on the card.
- The five unkeyed problems are left out and named in `notes`: the three
  cases of a current given its force, the lightning bolt at the equator, the
  MHD tube, the car starter cable and the rectangular loop used to measure
  field strength.
- 22.5's single AP test prep item asks for the direction of the force on a
  **wire** in the Earth's field, which this section introduces and 22.5 does
  not, so it lands here as `ap1` with `source_section: "22.5"`, and both
  sections' `exercise_notes` say so (`ch22/config.md`;
  `ch22/exploration.md` § Exercises that belong to another section). The
  book keys it, so it is a graded choice and not an open item.
- No Check Your Understanding box, so the page hosts no inline exercise, and
  no exercise of this section is held for a later one.

## Wanted at chapter level

- `variables` `22.7/I_curr` → anchor `22.7-force-on-a-wire`
- `equations` `eq-force-on-a-current` → anchor `22.7-force-on-a-wire`
- `equations` `eq-force-per-length-on-a-current` → anchor `22.7-force-on-a-wire`

**Chapter pass, 2026-09-15.** All three anchors written with `ost set`: the
section's variable row and its two equation rows now carry
`22.7-force-on-a-wire`. The AP item held here from 22.5 keeps its
`source_section`, and both sections' `exercise_notes` say so. The fold of
Figures 22.31 and 22.32, which `config.md` had not named, is recorded in that
file under What the build changed.
