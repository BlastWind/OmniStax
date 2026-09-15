# Plan: 22.8 Torque on a Current Loop: Motors and Meters (m42380)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-15
without a review stop, on Chen's standing instruction to finish the book in
waves without check-ins; the per-section stop of rule 2, the plan review of
rule 5 and the user picks of rule 15 are replaced by this file, written
before the section was built and left for review after, as `ch22/config.md`
records.

The section where the chapter turns into a machine. The previous section put
a force on a straight length of wire; bend that wire into a loop, hang the
loop on a shaft, and the forces on its two sides no longer cancel as a push:
they cancel as a push and add as a turn. That is a motor, and the section
derives its torque, watches the torque fall to zero and reverse as the loop
comes round, adds the switch that keeps it from oscillating, and then takes
the same parts and builds a meter out of them.

Four book figures, all four of them drawings, one worked example, three
displayed results, no boxed note, two glossary terms, no Check Your
Understanding box, one conceptual question and nine problems. One page
(rule 11).

## Sub-concepts (page headers)

The module prints no header of its own (`ch22/config.md`), so all three
headers are the agent's (rule 3). The book's own subject changes twice: the
derivation ends with the worked example, the brushes are a separate idea
about what a motor has to do to keep going, and the meter is a second
machine built from the same parts.

1. `torque-on-a-loop` **The torque on a current loop** (book: the opening
   paragraph on motors; Figure 22.33, the loop on its shaft between the
   poles; the segment-by-segment argument; the top views of Figure 22.34;
   $\tau = wF\sin\theta$; $\tau = wIlB\sin\theta$; $\tau = NIAB\sin\theta$;
   Example 22.5).
2. `keeping-the-coil-turning` **Keeping the coil turning** (book: the
   paragraph that begins "The torque found in the preceding example is the
   maximum"; the reversal past $\theta = 0$; the brushes; Figure 22.35).
3. `meters` **Meters and galvanometers** (book: the closing paragraph on
   meters and analog fuel gauges; Figure 22.36).

Learning objectives, the section summary and the two glossary terms (motor,
meter) come out of the running text into the tables and the views (rule 4).
The references to Figure 22.33 and Figure 22.34 inside the prose are plain
text, as `ch22/config.md` settles every cross-reference, and the app links
"Figure 22.33" and "Example 22.5" on the page itself. There is no PhET link
in this module.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| torque-on-a-current-loop | result | torque-on-a-loop | the derivation printed in full from the forces on the two vertical sides; $\tau = NIAB\sin\theta$; Example 22.5, which finds 30.0 N·m |
| torque-varies-with-angle | idea | torque-on-a-loop | the four top views of Figure 22.34, drawn to show the maximum, the zero and the reversal; $\tau_\text{max} = NIAB$ |
| net-force-on-a-loop-is-zero | idea | torque-on-a-loop | the cancellation noted twice in the derivation and stated in so many words; the section's conceptual question |
| brushes-reverse-the-current | idea | keeping-the-coil-turning | the oscillation about equilibrium; the brushes; Figure 22.35 |
| meter-and-galvanometer | idea | meters | Figure 22.36 with its shaped poles, spring and needle; the design paragraph |

The page leans on 22.7's `magnetic-force-on-a-current-carrying-wire`, which
supplies the $F = IlB$ that is put into the torque, and on Chapter 9's
`torque`, `torque-from-lever-arm` and the two conditions for equilibrium,
which are what let two equal and opposite forces add to a turn and cancel as
a push. 22.11 leans back on the result for magnetic resonance imaging.

## Figures

id · replaces or Sim · concepts · value add · what moves or still · sliders
and choices · headline · graph · 3D

1. `sim-motor` · replaces Figure 22.33, Figure 22.34 **and** Figure 22.35,
   which fold into one (eyebrow "Figure 22.33 + 22.34 + 22.35", number
   22.33, the other two under `folds`, all three images under `originals`,
   so that every number the prose cites links here) ·
   torque-on-a-current-loop, torque-varies-with-angle,
   net-force-on-a-loop-is-zero, brushes-reverse-the-current · the fold is
   the one `ch22/config.md` names: the book draws one machine three times,
   once in perspective to show where the forces are, once as four top views
   at four angles, and once with the brushes under it, and a single loop
   that turns and can be looked at from above is plainly better than three
   drawings of one machine (rule 14) · value add: intuition, variation by
   slider, flow by animation and shape in space, all four. The book's four
   top views are four instants of one turn, and the reader is asked to
   supply the motion between them and to hold in mind that the two side
   forces point out of and into the page while the torque points along the
   shaft; here the loop turns, the forces stay perpendicular to the field
   as the loop swings past them, and the reader can stop the turn anywhere
   with the transport's scrubber and read the torque off the curve · **it
   moves**: a motor turns, and the whole argument of the section is about
   what happens as it comes round — the torque falls to zero at $\theta =
   0$, reverses past it, and the brushes reverse the current there to keep
   it from reversing. The idea has a clock in it (rule 14), so the figure
   registers a cycle and takes the app's transport: one revolution in 4.0 s
   with the brushes on, one swing back and forth in 4.0 s with them off ·
   the number of turns $N$ (1 to 120, default 100, ink, a count being
   untyped), the current $\kIcur$ (0 to 20 A, default 15.0, the current
   hue), the field strength $\kBmag$ (0 to 2.50 T, default 2.00, the field
   hue) and the side of the square loop (5 to 12 cm, default 10.0, ink, a
   length being untyped), which are Example 22.5's own numbers, so the
   figure reads its 30.0 N·m maximum on load; a choice, never a slider, for
   the brushes, on or off (rule 26.1), and a second choice for the labels ·
   "The perpendicular to the loop stands 47° from the field, so the torque
   about the shaft is 21.9 N·m clockwise as seen from above, and the
   brushes reverse the current as the loop comes through." · **graph
   below** the scene, which is a wide horizontal machine (the rule of the
   plan line): the torque against the angle the loop has turned from the
   position where it faces the field, −180° to 180°, the curve rectified
   when the brushes are on and signed when they are off, with the live
   point riding along it. The angle in the readout is the one the formula
   takes the sine of, measured from the field to the perpendicular the
   right hand rule makes from the current as it now runs, which the
   brushes turn over twice a revolution; that is why the sine never goes
   negative while they are on. The axis is fixed at ±90 N·m, which is what
   the four sliders reach together, 86.4 N·m, and never rescales · **a full 3D scene** (rule
   28.3), the chapter's one moving one, argued as follows. The lesson is an
   arrangement in space: the field runs horizontally across the gap, the
   current runs up one side of the loop and down the other, the two forces
   stand horizontally at right angles to both, and the torque they make
   stands along the vertical shaft, which is a fourth direction again. The
   book needs two drawings to say this — a perspective view for where the
   forces are and a top view for the angle — and a reader who has only the
   top view has to be told that the forces point out of and into the page.
   A turning loop drawn flat would have to lie about the depth of the loop
   at every angle but two. The tier is therefore the highest, and the cost
   is paid once for the chapter's central machine. **The orbit is bounded
   to pitches from 4° to 87° above the horizontal**, that is, from just
   above the plane of the poles up to the top view: the machine stands on a
   base and is never seen from beneath, and a reader who got under it would
   see the turn reversed and read the right hand rule as a left hand rule,
   which is the one thing this figure must not let happen. The yaw is free,
   since every side of the magnet is a place worth standing. Three snap
   views (rule 26.2): the book's own three-quarter view, the top view of
   Figure 22.34, and a view along the field; auto-rotate is a button and
   starts off, since the loop is already turning; the wheel and the two
   buttons zoom. Where WebGL is missing the figure falls back to the flat
   top view of Figure 22.34, drawn on the canvas above the graph, with the
   forces as the dot and cross this chapter has used since 22.3. Labels are
   off by default behind the Labels button (rule 26.7), since every one of
   them but the poles' letters sits on something that turns, and the names
   are on hover; the frame — the N and S of the poles, the shaft, the
   scale of the graph — is always drawn. Draws magnetic-field, current,
   force, torque.
2. `sim-meter` · replaces Figure 22.36, the meter with its shaped poles,
   spring and needle · meter-and-galvanometer, torque-varies-with-angle ·
   value add: variation by slider and, above all, the choice that makes the
   book's one sentence about the design visible. The book says the poles
   are shaped so that $B$ stays perpendicular to the loop over a large
   angular range, so that the torque is proportional to $I$ and not to
   $\theta$; in a still drawing that is a claim. Here the poles are a
   choice: shaped, and the needle's deflection is proportional to the
   current and the scale is evenly divided; flat, and the torque falls away
   as the coil turns, the needle crowds toward the top of its travel and
   the scale's divisions close up. The three sliders are the three things
   the book says a sensitive galvanometer wants more of · **still**: a
   needle takes up the deflection at which the spring balances the magnetic
   torque and stays there, which is a state and not a process; nothing here
   has a clock, so no cycle and no transport (rule 14; `ch22/config.md`
   puts the meter among the still figures of the chapter) · the current
   $\kIcur$ (0 to 1.00 mA, default 0.500, the current hue), the number of
   turns $N$ (50 to 400, default 200, ink) and the field strength $\kBmag$
   (0.02 to 0.20 T, default 0.100, the field hue); a choice for the pole
   faces, shaped or flat (rule 26.1). The loop's area is held at 6.00 cm²
   and the spring's torsion constant at 1.15 × 10⁻⁵ N·m per radian, both
   stated in the readout, so that the default state puts the needle at half
   scale · "A current of 0.50 mA through 200 turns in a 0.100 T field
   turns the coil against its spring to 30° of the 60° scale." ·
   **graph below** the meter, which is a wide horizontal scene: the
   deflection against the current from 0 to 1.00 mA, the straight line of
   the shaped poles and the bending curve of the flat ones drawn together,
   the one now chosen carrying the live point. The axis is fixed at 0 to
   90° and never rescales; a deflection past the needle's stop at 75° is
   pinned · **flat** (rule 28.1): the meter is a relation between the
   current and an angle, the book draws it face on, and there is nothing in
   its depth to see. Draws magnetic-field, current, torque.

Photographs: none. The section prints no photograph, and all four of its
images are drawings, so all four are replaced (`ch22/config.md`).

Figures that serve exercises: none. The section's nine problems refer to no
image, and its conceptual question asks the reader to draw one, so nothing
is copied on a card (`ch22/config.md` counts this section's exercise images
as zero).

Extra simulations (rule 15), thought through, judged and left:

- The energy account of a motor: the work the torque does in a revolution
  against the electrical energy the current carries in. Left: the section
  says only that electrical energy is converted to mechanical work, and the
  account needs the back emf of Chapter 23, which the reader has not met.
- A galvanometer wired as an ammeter and as a voltmeter, with its shunt and
  its multiplier. Left: that is 21.4's figure, which the reader has already
  had, and this section's sentence about low-resistance coils points back at
  it rather than forward to anything new.

## Types the page binds

`magnetic-field`, `torque`, `force` and `current`, exactly the four
`ch22/COLOR.md` gives this page. The number of turns, the area of the loop,
the width $w$ and height $l$ of the rectangle, the side of the square, the
angle $\theta$, the distance $r$ from the shaft in the recalled definition
of torque, the spring's torsion constant and every axis title are untyped
and in ink. No body is tinted: the pole pieces are ink lettered N and S, the
loop and the shaft are ink, the brushes and the commutator are ink, and the
meter's needle, spring and scale are ink. The torque wears Chapter 9's hue
although its dimension matches energy's, as `ch22/COLOR.md` requires.

## Exercises

Ten in the book: one conceptual question and nine problems, of which the
book keys five.

- The one conceptual question goes to the Exercises document with an
  AI-marked suggested approach, since the book prints no key for it
  (`ch22/config.md`). It asks for a drawing; the approach describes in words
  what the drawing would show, which is that the forces on the top and
  bottom segments are vertical and so have no lever arm about the shaft.
- The five keyed problems go to the Exercises document as `p1`, `p3`, `p5`,
  `p7` and `p9`, keeping the place each holds in the book's own list.
- The four unkeyed problems are left out and named in `notes`: the maximum
  torque on a 150-turn loop and its torque at 10.9°, the field strength
  wanted for a 300 N·m torque, the three angles at which the torque is 90,
  50 and 10 percent of its maximum, and the 200-turn circular loop in
  Earth's field.
- The ninth problem says "Repeat" and the CNXML links it to the first
  problem of the section, but its keyed answer of 0.666 N·m west is the
  answer to the eighth, the 200-turn circular loop in Earth's field, so the
  link is a misprint. The eighth is one of the unkeyed problems left out, so
  the ninth carries the situation it repeats quoted inside its own prompt,
  as 9.5 does for the pulley problem, and `exercise_notes` records the
  misprint.
- No Check Your Understanding box, so the page hosts no inline exercise, and
  no exercise of this section is held for a later one or arrives from an
  earlier one.

## Wanted at chapter level

- `variables` `22.8/τ` → anchor `22.8-torque-on-a-loop`
- `variables` `22.8/A` → anchor `22.8-torque-on-a-loop`
- `variables` `22.8/N_count` → anchor `22.8-torque-on-a-loop`
- `variables` `22.8/w_loop` → anchor `22.8-torque-on-a-loop`
- `equations` `eq-torque-one-turn` → anchor `22.8-torque-on-a-loop`
- `equations` `eq-torque-on-a-loop` → anchor `22.8-torque-on-a-loop`
- `equations` `eq-maximum-torque` → anchor `22.8-torque-on-a-loop`, and the
  `ktex` it still lacks, `\ktau_{\text{max}} = N\kIcur A\kBmag`

**Chapter pass, 2026-09-15.** All seven anchors written with `ost set`: the four
variable rows and the three equation rows of the section now carry
`22.8-torque-on-a-loop`. `eq-maximum-torque` has been given the `ktex` it
lacked, `\ktau_{\text{max}} = N\kIcur A\kBmag`. The two misprints the section
kept, Example 22.5's area and the last problem's "Repeat" pointer, are gathered
in `ch22/exploration.md` under Errata. The closeness of the `force` and
`current` hues, which this page draws on one loop, is recorded in
`ch22/config.md` for the figure pass; no hue is invented here, since the scheme
is the app's own matter.
