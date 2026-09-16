# Plan: 23.5 Electric Generators (m42408)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-15
without a review stop, on Chen's standing instruction to finish the book in
waves without check-ins; the per-section stop of rule 2, the plan review of
rule 5 and the user picks of rule 15 are replaced by this file, written
before the section was built and left for review after, as `ch23/config.md`
records.

The section where the chapter's machine runs backward. Chapter 22 hung a loop
on a shaft and passed a current through it, and the field turned the shaft;
here the shaft is turned by hand, by falling water or by steam, and an emf
comes out. The section does the easy case first, the average emf over a
quarter revolution, then goes back to motional emf for the emf at each
instant, and arrives at the sinusoid that is the AC voltage of Chapter 20.

Five book figures, four of them drawings and one a photograph, two worked
examples, ten displayed results of which five are worked substitution steps,
no boxed note, three glossary terms, no Check Your Understanding box, two
conceptual questions, two AP items and eleven problems. One page (rule 11).

## Sub-concepts (page headers)

The module prints no header of its own (`ch23/config.md`), so all three
headers are the agent's (rule 3). The book's subject changes twice: the
opening definition and the worked average carry one idea, the derivation of
the emf at each instant and the two shapes its output can take carry a
second, and the closing paragraphs about real machines carry a third.

1. `a-generator-induces-an-emf` **A generator induces an emf** (book: the
   opening paragraph defining an electric generator; Figure 23.19, the coil
   between the poles with its rings, brushes and galvanometer; Example 23.3,
   which finds the average emf over a quarter revolution).
2. `the-emf-at-each-instant` **The emf at each instant** (book: "The emf
   calculated in Example 23.3 is the average over one-fourth of a
   revolution" through "…had to ride home lightless one dark night", the
   whole derivation from motional emf on the two side wires, Figures 23.20
   and 23.21, the results $\text{emf} = NAB\omega\sin\omega t$ and
   $\text{emf}_0 = NAB\omega$; then the split-ring paragraph and Figure
   23.22, which are about the shape of the same output in time; then Example
   23.4, which finds the peak emf of the coil whose average Example 23.3
   found).
3. `generators-in-the-world` **Generators in the world** (book: "In real
   life, electric generators look a lot different…", Figure 23.23, the steam
   turbine, and the closing paragraph on a motor becoming a generator when
   its shaft is turned).

The split rings sit inside the second header rather than in one of their own
because the sinusoid and the train of pulses are one idea seen twice: what
the emf of a turning coil does as time passes, and what a pair of contacts
can do to it on the way out. The folded figure makes that one control.

Learning objectives, the section summary and the three glossary terms
(electric generator, emf induced in a generator coil, peak emf) come out of
the running text into the tables and the views (rule 4). The references to
Induced Emf and Magnetic Flux and to Back Emf are plain text, as
`ch23/config.md` settles every cross-reference, and the app links "Figure
23.19", "Figure 23.20", "Figure 23.21", "Figure 23.22", "Figure 23.23",
"Example 23.3" and "Example 23.4" on the page itself. There is no PhET link
in this module.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| electric-generator | idea | a-generator-induces-an-emf | the opening definition; Figure 23.19 with its rings, brushes and galvanometer; the glossary term |
| average-emf-of-a-generator | skill | a-generator-induces-an-emf | Example 23.3, the quarter revolution from greatest flux to none, 131 V |
| generator-emf-versus-time | result | the-emf-at-each-instant | the derivation from $\text{emf} = B\ell v$ on the two side wires; Figures 23.20 and 23.21; $\text{emf} = NAB\omega\sin\omega t$ |
| peak-emf | result | the-emf-at-each-instant | $\text{emf}_0 = NAB\omega$; the paragraph on what each factor does; Example 23.4, 206 V |
| commutator-pulsed-dc | idea | the-emf-at-each-instant | Figure 23.22, the split rings and the rectified output |

The page leans on 23.1's `magnetic-flux` and `ways-to-change-flux`, on
23.2's `faradays-law` and `turns-multiply-emf`, which supply the
$-N\Delta\Phi/\Delta t$ the average is got from, on 23.3's `motional-emf`,
which supplies the $B\ell v$ the instantaneous emf is got from, on Chapter
22's `brushes-reverse-the-current`, which is the same pair of contacts doing
the same work in the other direction, on Chapter 6's `angular-velocity` and
`linear-angular-velocity`, which turn $v$ into $r\omega$, and on Chapter
20's `alternating-current`, which is the shape this section explains. 23.6
leans back on the whole page for back emf.

## Figures

id · replaces or Sim · concepts · value add · what moves or still · sliders
and choices · headline · graph · 3D

1. `sim-generator` · replaces Figure 23.19, Figure 23.20, Figure 23.21
   **and** Figure 23.22, which fold into one (eyebrow "Figure 23.19 + 23.20
   + 23.21 + 23.22", number 23.19, the other three under `folds`, all four
   images under `originals`, so that every number the prose cites links
   here) · electric-generator, average-emf-of-a-generator,
   generator-emf-versus-time, peak-emf, commutator-pulsed-dc · the fold is
   the one `ch23/config.md` calls the chapter's strongest: the book draws
   one machine four times, once with slip rings and a galvanometer, once
   stripped to the bare loop so that $w$, $\ell$, $\omega$ and $v$ can be
   lettered on it, once with a lamp and the sinusoid beside it, and once
   with a split ring and the rectified output beside it. Those are one
   machine, one output curve and one choice of contacts, and a single
   generator that turns is plainly better than four drawings of it (rule
   14) · value add: intuition, variation by slider, flow by animation and
   shape in space, all four (rule 24.4). The book asks the reader to hold in
   mind that the flux through the coil falls as the coil turns while the
   field itself never changes, that the velocity of the two side wires
   swings round with the coil so that only its component across the field
   counts, and that the emfs on the two sides add rather than cancel; here
   the coil turns, the field lines the coil catches are marked where they
   pierce its face and thin out to none as it comes edge-on, the two
   velocity arrows swing with it, and the two emf arrows run the same way
   round the loop at every angle · **it moves**: a generator turns, and the
   section's result is a function of time. The idea has a clock in it (rule
   14), so the figure registers a cycle and takes the app's transport: two
   revolutions in 5.0 s, so that the reader can stop the coil with the
   scrubber at the quarter revolution of Example 23.3 and read the flux at
   each end of it. The coil is drawn far slower than it turns, 2.5 s to a
   revolution against the 60.0 ms the default angular velocity really takes,
   and the readout states the true period and the factor drawn (rule 28.4) ·
   the number of turns $N$ (50 to 250, default 200, ink, a count being
   untyped), the area of the coil $A$ (2.00 to 12.00 × 10⁻³ m², default
   7.85, ink, an area being untyped), the field strength $\kBmag$ (0 to 1.50
   T, default 1.25, the field hue) and the angular velocity $\kw$ (20 to 125
   rad/s, default 104.7, the angular-rate hue), which are Example 23.3's and
   Example 23.4's own numbers, so the figure reads Example 23.3's average of
   131 V over a quarter revolution and a peak of 205 V, which Example 23.4
   rounds to 206 V, on load; a choice, never a slider, for the contacts, two
   slip rings or one split ring (rule 26.1), and a second choice for the
   labels · "Turned 37° from the position where it faces the field, the coil
   catches a flux of 7.83 × 10⁻³ T⋅m² and induces 124 V." · **graph below** the
   scene, which is a wide horizontal machine (the rule of the plan line):
   the emf against the angle the coil has turned, 0° to 720°, so that two
   whole revolutions stand side by side, the curve a sinusoid with the slip
   rings and a train of positive pulses with the split ring, the peak marked
   as a dashed level and the live point riding along the curve. The angle is
   the axis rather than the time because the period runs from 50 ms to 314
   ms across the angular-velocity slider and a time axis would have to
   rescale, which rule 26 forbids; the period in milliseconds is stated in
   the headline and the readout at every setting. The emf axis is fixed at
   ±600 V, which covers the 564 V the four sliders reach together, and never
   rescales · **a full 3D scene** (rule 28.3), the chapter's one moving one,
   argued as follows. The lesson is an arrangement in space, and it is an
   arrangement of four directions at once: the field runs horizontally
   across the gap, the coil's perpendicular swings round in the horizontal
   plane and makes the angle whose cosine is the flux, the velocity of each
   side wire stands along that perpendicular and makes the same angle with
   the field, and the emf it drives runs vertically along the wire, which is
   a fourth direction again. The book needs three drawings to say this and
   still has to letter $w$, $\ell$, $v$, $\omega$ and $\theta$ on a flat
   picture of a turning coil; a flat drawing of the coil at any angle but
   two must lie about its depth, and the flux, which is the count of lines
   the coil's face catches, cannot be drawn at all on a face drawn as a
   line. The tier is therefore the highest, and the cost is paid once, for
   the machine the whole chapter has been building toward. **The orbit is
   bounded to pitches from 4° to 87° above the horizontal**, that is, from
   just above the plane of the poles up to the view straight down on the
   coil, and never below: the machine stands on a foot, and a reader who got
   under it would see the coil turning the other way and would read the
   emf's direction round the loop reversed, which is the one thing this
   figure must not let happen. The yaw is free, since every side of the
   magnet is a place worth standing, and the view along the field is the
   one that shows the flux best. Three snap views (rule 26.2): the book's
   own three-quarter view, the view from above, which is Figure 23.20's, and
   the view along the field, where the coil's face is seen square on and its
   apparent area is the flux itself; auto-rotate is a button and starts off,
   since the coil is already turning; the wheel and the two buttons zoom.
   Where WebGL is missing the figure falls back to the top view of Figure
   23.20 drawn on the canvas above the graph, the coil edge-on with its two
   velocity arrows, the angle and the field arrows, and the browser is told
   in a line under it what it is missing; a browser that defines the
   constructor and still refuses a context is caught by probing for a real
   context before the scene is built, as 22.4, 22.8 and 22.9 do it. Labels
   are off by default behind the Labels button (rule 26.7), since every one
   of them but the poles' letters sits on something that turns, and the
   names are on hover; the frame — the N and S of the poles, the scale of
   the graph, the headline — is always drawn. The number of field lines
   drawn is fixed and does not follow the field slider, as Chapter 22's
   figures let it: here the lines are counted, not merely shown, and the
   count is the flux, so the field's strength is told by the slider, by the
   readout and by the height of the curve instead. Draws magnetic-flux,
   magnetic-field, voltage, velocity, angular-rate and time.
2. `sim-average-emf` · Sim (eyebrow "Sim"; it replaces no book figure) ·
   average-emf-of-a-generator, peak-emf, generator-emf-versus-time · value
   add: variation by slider, and above all the one comparison the section
   makes and does not draw. Example 23.3 gets 131 V and Example 23.4 gets
   206 V for the same coil, and the book's Discussion says only that the
   maximum is greater than the average "as it should be". Why it should be,
   and by how much, is a fact about a sine curve and its mean, and here it
   is a picture: the flux falls along its cosine and the chord across the
   span is the slope Faraday's law takes, while below it the same span is
   shaded under the sine and the dashed level across it is the mean of the
   curve. Slide the span to a quarter revolution starting face-on and the
   level lands at 131 V under a peak of 205 V, which is $2/\pi$ of it; open
   the span to a whole revolution and the level falls to zero, which is why
   an average emf has to be quoted with the interval it was taken over ·
   **still**: the figure answers its sliders and registers no cycle, since
   what it draws is a curve and a mean over an interval of it, not a process
   in time (rule 14). No transport · the angle the coil starts from (0° to
   270°, default 0, ink), the span it turns through (10° to 180°, default
   90°, ink) and the angular velocity $\kw$ (20 to 125 rad/s, default 104.7,
   the angular-rate hue). The coil is held at Example 23.3's own, 200 turns
   of 7.85 × 10⁻³ m² in a 1.25 T field, all three stated in the readout, so
   that the figure opens on that example exactly · "Turned through 90° from
   the position where it faces the field, the coil's flux falls from
   9.81 × 10⁻³ T⋅m² to zero in 15.0 ms, so the average emf over that quarter
   revolution is 131 V against a peak of 205 V." · **graph alone**, two
   panels stacked, which is the rule of the plan line where the graph is the
   idea: the flux against the angle turned above, 0° to 360°, fixed at
   ±0.010 T⋅m²; the emf against the same angle below, fixed at ±250 V, which
   covers the 245 V the angular-velocity slider reaches. Neither axis
   rescales · **flat** (rule 28.1): what is being shown is a relation
   between two curves and a mean, and there is nothing in its depth. Draws
   magnetic-flux, voltage, angular-rate and time.

Photographs: one kept, one figure of the five. Figure 23.23, the steam
turbine and generator, is kept with the book's caption and its credit
(`ch23/config.md` lists it among the chapter's kept photographs): the
paragraph it sits under is about it, and it is the only place in the section
where the reader sees what turns a real coil. The other four images are
drawings and all four are replaced, folded into `sim-generator`.

Figures that serve exercises: none. Neither AP item, neither conceptual
question and none of the eleven problems refers to an image, so nothing
travels on a card.

Extra simulations (rule 15), thought through, judged and left:

- The bicycle generator of the section's fifth problem, with the wheel that
  drives it and the lamp that burns out. Left: the story is one sentence of
  the book's and the physics is the peak emf the folded figure already
  varies; a second machine would only put different numbers into the same
  formula.
- A power station in section: turbine, shaft, coil and line. Left: the
  section gives it one sentence and one photograph, and the photograph shows
  it better than a drawing would; the distribution line belongs to 23.7,
  where the transformer is.

## Types the page binds

`magnetic-flux`, `magnetic-field`, `voltage`, `angular-rate`, `time` and
`velocity`. The first five are the ones `ch23/COLOR.md` gives this page. The
sixth is asked for below: Figure 23.20 is folded into `sim-generator`, and
the whole content of Figure 23.20 is the velocity of the side wires standing
at an angle $\theta$ to the field, so the two velocity arrows are drawn and
they take the velocity hue, as rule 7 requires of a drawn thing. The flux
never shares the field's hue, as `ch23/COLOR.md` insists: the lines drawn
across the gap wear the field hue, and the marks where they pierce the
coil's face, the patch that fills the face, and every readout that writes
$\Phi = BA\cos\theta$ wear the flux hue. The number of turns $N$, the area
$A$, the width $w$ and height $\ell$ of the rectangle, the angle $\theta$ and
every axis title are untyped and in ink, and no body is tinted: the pole
pieces are ink lettered N and S, the coil, the shaft, the crank, the rings,
the brushes, the leads and the load are ink.

## Exercises

Fifteen in the book: two conceptual questions, two AP items and eleven
problems, of which the book keys six problems and one AP item.

- Both conceptual questions go to the Exercises document with AI-marked
  suggested approaches, since the book prints no key for either
  (`ch23/config.md`).
- The first AP item is a four-option choice and the CNXML keys it (c), so it
  is a graded choice. The second AP item's solution is commented out in the
  CNXML, so it is unkeyed: it is kept as an open item with an AI-marked
  suggested approach, never as a graded answer, and the commented-out key is
  named for the chapter's errata below.
- The six keyed problems go to the Exercises document as `p1`, `p3`, `p5`,
  `p7`, `p9` and `p11`, keeping the place each holds in the book's own list.
- The five unkeyed problems are left out and named in `notes`: the angular
  velocity at which a 500-turn coil gives 480 V, the peak emf of the rotating
  coil of a problem in 23.2, the Integrated Concepts bicycle-wheel problem,
  the proof that the period is $2\pi/\omega$, and the coil whose emf first
  peaks at 0.100 ms.
- The fourth problem points back at a problem of 23.2 and is one of the
  unkeyed ones, so nothing has to be quoted into it; no exercise of this
  section is held for a later one and none arrives from an earlier one
  (`ch23/config.md` lists 23.2's two peak-emf problems among the cases
  looked at and left where the book prints them).
- No Check Your Understanding box, so the page hosts no inline exercise.

## Wanted at chapter level

- `variables` `23.5/emf_0` → anchor `23.5-the-emf-at-each-instant`
- `variables` `23.5/ω` → anchor `23.5-the-emf-at-each-instant`
- `variables` `23.5/T` → anchor `23.5-the-emf-at-each-instant`
- `variables` `23.5/f` → anchor `23.5-the-emf-at-each-instant`
- `equations` `eq-two-side-emf` → anchor `23.5-the-emf-at-each-instant`
- `equations` `eq-generator-emf` → anchor `23.5-the-emf-at-each-instant`
- `equations` `eq-generator-emf-peak-form` → anchor
  `23.5-the-emf-at-each-instant`
- `equations` `eq-peak-emf` → anchor `23.5-the-emf-at-each-instant`
- `equations` `eq-generator-period` → anchor `23.5-the-emf-at-each-instant`
- `COLOR.md`'s 23.5 line widened to `magnetic-flux`, `magnetic-field`,
  `voltage`, `angular-rate`, `time` **and `velocity`**, since Figure 23.20 is
  folded into this page's one figure and its velocity arrows are drawn
- Errata: the second AP item of this section, `fs-id1448465`, carries a
  solution in the CNXML that is commented out, "1.1 cm, 0.04 s". The item is
  therefore kept unkeyed with an AI-marked suggested approach, as
  `ch23/config.md` requires, and the commented-out key is recorded here
  rather than used.
