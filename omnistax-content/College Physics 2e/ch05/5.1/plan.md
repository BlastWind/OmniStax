# Plan: 5.1 Friction (m42139)

Source: `source.md` (converted from CNXML by `tools/cnxml2md.py`). Status:
built today, 2026-09-11, without a review stop, on Chen's instruction to
finish the book in one job; the per-section stop of rule 2 and the plan
review of rule 5 are replaced by this file, written before the section was
built and left for review after.

The first of the three sections that apply Newton's laws to the everyday
forces. It defines friction, separates static from kinetic, gives the two
magnitudes and the coefficients that carry the materials, works one example
on a slope, and closes on what the surfaces look like at the atomic scale.
Five book figures (two of them photographs of the same kind of thing: one
photograph, the knee X-ray, and four sketches), one table, six boxed notes,
one worked example, four AP items, four conceptual questions and nineteen
problems, seven of them keyed. The PhET note "Forces and Motion" is dropped
per the chapter config and named in `notes`. One page (rule 11).

## Sub-concepts (page headers)

The book prints no titled sub-headers, only the run of the argument.
Page structure, one block per idea:

1. `characteristics` **What friction is and which way it acts** (book: the
   opening paragraph, the boxed note Friction, the paragraph that separates
   kinetic from static friction, the boxed note Kinetic Friction, the heavy
   crate on the concrete floor, and the paragraph on Figure 5.2). The
   variable $\kff$ anchors here.
2. `magnitudes` **The magnitudes of static and kinetic friction** (book:
   the two forms of the frictional force; $\kfs \le \mu_{\text{s}}\kN$ and
   the boxed note Magnitude of Static Friction; the meaning of the
   inequality and $\kfsmax$; $\kfk = \mu_{\text{k}}\kN$ and the boxed note
   Magnitude of Kinetic Friction; Table 5.1; the 100 kg crate worked
   through both coefficients; the Take-Home Experiment with the plastic
   container). The variables $\kfs$, $\kfsmax$, $\kfk$, $\kN$, $\kF$,
   $\mu_{\text{s}}$, $\mu_{\text{k}}$, $m$ and $\kg$ and the equations
   eq-fs, eq-fs-max and eq-fk anchor here.
3. `joints` **Friction in joints and other lubricated surfaces** (book: the
   joints of the body and their very small coefficients, Figure 5.3, and
   the natural and artificial lubricants).
4. `incline` **Friction on a slope** (book: Example 5.1, the skiing
   exercise, with Figure 5.4 inside it; the Take-Home Experiment with a
   coin on a tilted book, which measures $\mu_{\text{k}} = \tan\theta$).
   The variables $\kwgt$, $\kwperp$, $\kwpar$ and $\theta$ and the
   equations eq-N-incline, eq-fk-incline, eq-mu-k-slope and eq-mu-tan
   anchor here. The example is `ex-skiing`.
5. `atomic` **The atomic origin of friction** (book: friction is always
   proportional to the normal force; the boxed note Making Connections;
   the actual area of contact of Figure 5.5; how rubbing warms a surface,
   and the probe tip of Figure 5.6).
6. `ice-block` **The block of ice for the problems** (the figure the
   winter-sporting problem refers to, drawn faithfully, as 3.2 stands its
   map of paths at the end of the section).

Cross references to sections in unbuilt chapters are plain text
("Problem-Solving Strategies", in the problems). The book's bold vectors
$\mathbf{N}$, $\mathbf{f}$ and $\mathbf{w}$ in the caption of Figure 5.4
are set bold in ink, as the caption prints them; their magnitudes take the
`\k` macros. The coefficients $\mu_{\text{s}}$ and $\mu_{\text{k}}$ are
dimensionless and stay in ink, as the chapter config decided.

Learning objectives, section summary and glossary come out of the running
text into the tables and views. The section has no Check Your Understanding
box, so nothing is placed inline; the conceptual questions, the problems
and the four AP items all go to the Exercises document.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| kinetic-friction | idea | characteristics | the boxed note and the glossary; the hockey puck; the AP item on the block sliding across a floor |
| static-friction | idea | characteristics | the crate on the concrete floor; the glossary; the AP item on the 20 N push against a 40 N box; the conceptual question on the brake pedal |
| coefficient-of-friction | idea | magnitudes | Table 5.1; the 100 kg crate through both coefficients; the AP item that asks whether a coefficient is greater than 0.5 |
| static-friction-magnitude | result, eq-fs | magnitudes | the boxed note; the 440 N needed to start the crate; problems 4 and 18 |
| kinetic-friction-magnitude | result, eq-fk | magnitudes | the boxed note; the 290 N that keeps the crate moving; problems 1, 6, 10, 14, 16 and 18 |
| friction-on-an-incline | result, eq-fk-incline | incline | Example 5.1; the coin on the tilted book; problems 10 and 14 |
| atomic-origin-of-friction | idea | atomic | Figure 5.5 and Figure 5.6; the Making Connections note; the AP items on the direction of friction and on the warm box |

The section reinforces `friction` (4.3), which Chapter 4 introduces as an
external force in a free-body diagram and this section gives its
characteristics to. It leans on `normal-force` and
`weight-components-on-incline` (4.5), `weight`, `newtons-second-law` and
`free-body-diagram` (4.3 and 4.1) and `components-from-magnitude-angle`
(3.3), which the coverage rows mark as used where the text uses them.

## Figures

id · replaces or Sim · concepts · what moves, or still and why · sliders ·
headline · graph · 3D

1. `sim-interface` · **replaces Figure 5.2 and Figure 5.5**, folded (rule
   14): both draw two rough surfaces pressed together, 5.2 to say that
   friction is parallel to the surface and opposes motion and 5.5 to say
   that the actual area of contact is a tiny fraction of the total and
   grows with the normal force. One magnified interface that the reader can
   press together says both, and it is the same drawing twice in the book.
   The eyebrow reads "Figure 5.2 + 5.5", both images are its `originals`,
   and the reference to Figure 5.5 in `atomic` links back to it ·
   kinetic-friction, static-friction, atomic-origin-of-friction ·
   **still**: the idea has no time in it, since the picture answers the
   mass on the crate and the push on it and nothing accumulates as a clock
   runs · the mass $m$ on the crate (20 to 200 kg, default 100, ink, since
   a mass is untyped) and the applied force $\kF$ (0 to 800 N, default 300,
   force) · "N = 980 N presses the surfaces together, and your 300 N push
   is answered by 300 N of friction" · none: the magnified interface is the
   picture, drawn beneath the crate · no. Readout: $\kN = m\kg$ with the
   numbers; small line saying that the actual
   contact area, and the friction with it, grows in the same proportion as
   the normal force. Draws force.
2. `sim-breakaway` · **Sim** (extra simulation, rule 15; it replaces no
   book figure) · static-friction, kinetic-friction,
   static-friction-magnitude, kinetic-friction-magnitude,
   coefficient-of-friction · **moves**: the push on the crate grows from
   zero through one loop, which is the book's "you may push harder and
   harder on the crate and not move it at all", and the crate breaks away
   the moment the push passes $\kfsmax$ and then slides. The idea has a
   time in it, so the figure loops in about 5 s and carries the scrubber ·
   the mass $m$ (20 to 200 kg, default 100, ink), $\mu_{\text{s}}$ (0.05 to
   1.0, default 0.45, ink) and $\mu_{\text{k}}$ (0.02 to 0.9, default 0.30,
   ink) · "the push has reached 300 N and the friction answers with 300 N,
   so nothing moves until 441 N" · graph
   below the strip: the friction force against the applied force, the
   responsive line at 45º up to $\kfsmax$, the drop at breakaway, and the
   flat kinetic line at $\mu_{\text{k}}\kN$ afterwards, with the moving
   point on it · no. Readout: $\kfsmax = \mu_{\text{s}}\kN$ and $\kfk =
   \mu_{\text{k}}\kN$ with the book's own numbers, 440 N and 290 N at the
   defaults. Draws force.
3. `fig-knee` · **photograph, Figure 5.3, kept**: the text points the
   reader at it ("A damaged or arthritic joint can be replaced by an
   artificial joint"), and it shows the thing the passage is about. The
   book's caption and its credit clause are kept, and its width is 250.
4. `sim-skier` · **replaces Figure 5.4** (the skier on the 25º slope and
   the free-body diagram beside her) · friction-on-an-incline,
   kinetic-friction-magnitude, coefficient-of-friction · **moves**: the
   skier slides down the slope from rest and gains speed, since the
   friction is less than the component of the weight along the slope, which
   is what the book's caption says and what the Discussion generalises. One
   run down the slope per loop, with the scrubber. When the angle is
   lowered to $\tan^{-1}\mu_{\text{k}}$ the acceleration is zero and she
   slides at a constant velocity, which is what the Take-Home Experiment
   with the coin measures · the mass $m$ (40 to 120 kg, default 62, ink),
   the slope angle $\theta$ (5º to 45º, default 25, ink) and the friction
   $\kfk$ (0 to 200 N, default 45.0, force) · "on a 25º slope her 608 N
   weight gives 257 N along the slope and 551 N into it, so μ_k = 0.082" ·
   none: the free-body diagram
   stands beside the slope, where the book puts it, and the scene wants the
   width · no. Readout: $\mu_{\text{k}} = \kfk / (m\kg\cos\theta)$ with the
   numbers; small line with the acceleration down the slope and the angle
   at which it would be zero. Draws force, velocity, acceleration.
5. `sim-probe` · **replaces Figure 5.6** (the probe tip deformed as it is
   dragged) · atomic-origin-of-friction, kinetic-friction-magnitude ·
   **moves**: the probe is dragged across the substrate, so the idea has a
   time in it; the tip leans back under the friction on it, and the lattice
   behind it is left vibrating, which is the book's explanation of why
   surfaces get warmer when rubbed. One pass across the surface per loop,
   with the scrubber · the normal force $\kN$ pressing the tip into the
   surface (2 to 40 nN, default 12, force) and $\mu_{\text{k}}$ between the
   two materials (0.02 to 1.0, default 0.3, ink) · "pressed on with N = 12
   nN, the tip is dragged back by f = 3.60 nN and leans 2.2º behind its
   base" · none: the atoms are the picture · no. Readout: $\kfk = \mu_{\text{k}}\kN$ at the scale
   of the tip; small line on the more than a factor of $10^{12}$ by which
   the shear stress varies between materials, which the book leaves to 5.3.
   Draws force.
6. `fig-ice` · **faithful copy** of the unnumbered figure inside the
   problems, the contestant pushing and pulling the block of ice across a
   frozen lake, both parts (a) and (b) as the book draws them. It serves
   the keyed problem 18 (`fs-id1531145`), which names part (a); part (b)'s
   problem (`fs-id1529666`) is unkeyed and left out, but the book's one
   image carries both parts, so both are drawn. Eyebrow "Figure", no
   number, no sliders, no motion. Draws nothing.

Photographs: one in the section, the knee X-ray of Figure 5.3, and it is
kept (above). No splash image to drop. The figures inside the problems: the
block of ice is kept and copied (above); the two ice skaters of
`fs-id1452889` and the mountain climber of `fs-id1615856` belong to
problems that have no keyed answer and are left out, so their figures are
left out with them.

Extra simulations (rule 15), thought through and judged:

- **The push that grows until the crate breaks away** — built, as
  `sim-breakaway` above. The section's central claim is that static
  friction answers whatever you push with, up to a maximum, and that
  kinetic friction is smaller; the book states it in words and in two
  inequalities and draws no picture of it at all. The reader sees the
  friction track the push, the drop at the break, and why the crate is
  easier to keep moving than to start.
- A coin on a tilting book, its angle raised until it slides, for the
  Take-Home Experiment — left. `sim-skier` already has the angle on a
  slider and says when the acceleration is zero, so a second slope would
  animate what the reader can already do.
- Table 5.1 as a ladder of coefficients, from Teflon on steel to rubber on
  dry concrete, with the crate's breakaway force following the material —
  left. The table is in the text, and the numbers it holds are the sliders
  of two sims already.
- A car braking on dry, wet and icy concrete, for the problems on maximum
  deceleration — left. Both of those problems are unkeyed and out of the
  page, and 2.5 already built the braking car.

## Exercises

- No Check Your Understanding boxes; nothing inline.
- 4 conceptual questions, `cq1` to `cq4`, none keyed, each an open answer
  with an AI-marked suggested approach drawn from what the text supports,
  citing `magnitudes`, `characteristics`, `characteristics` and
  `characteristics`.
- 4 AP items. Two are keyed and kept as they are printed: `ap1`
  (import-auto-id0000007, the 20 N push on the 40 N box, answer (b)) and
  `ap3` (import-auto-id0000018, the direction of friction on a sliding
  block, answer (c)), both `choice` with the book's options. Two have no
  key and are kept as open items with an AI-marked suggested approach,
  never as graded choices, as Pass 20 settled for 2.2: `ap2`
  (import-auto-id0000013, the 2 kg block on the 25º ramp) and `ap4`
  (import-auto-id0000024, why the bottom of the box feels warm).
- 7 problems keyed and kept: `p1` (the steel spatula, number), `p4` (the
  120 kg wooden crate, multi), `p6` (the eight dogs and the sled, multi),
  `p10` (the snowboarder going uphill, number), `p14` (the car on the 4º
  slope, multi), `p16` (the freight train, multi), `p18` (the block of ice,
  multi, citing `fig-ice`).
- 12 problems left out, having no answer in the book's key: 2
  (fs-id1534547), 3 (fs-id1250006), 5 (fs-id1294152), 7 (fs-id1452889), 8
  (fs-id1426454), 9 (fs-id1395614), 11 (fs-id1453574), 12 (fs-id1736769),
  13 (fs-id855543), 15 (fs-id1742423), 17 (fs-id1615856) and 19
  (fs-id1529666).
- Nothing is held for a later section and nothing is taken from another
  section: all four AP items test friction, which this section introduces,
  and 5.2 and 5.3 set no item that belongs here. 5.3's Critical Thinking
  item goes to 5.2, as the chapter config says.
- No generated questions: every node of the section has a book exercise.
- Weights (rule 20): `p1` gives `coefficient-of-friction` weight 2, since
  the problem turns on $\kfk = \mu_{\text{k}}\kN$ and only reads the
  coefficient off Table 5.1; `p6` gives `kinetic-friction-magnitude` its
  full value and `coefficient-of-friction` weight 2; `p10` and `p14` give
  `friction-on-an-incline` the full value and
  `kinetic-friction-magnitude` or `static-friction-magnitude` weight 3;
  `p16` gives `kinetic-friction-magnitude` weight 2, since the friction is
  handed to the reader and the work is Newton's second law on a train;
  `ap1` gives `static-friction-magnitude` the full value and
  `coefficient-of-friction` weight 2.

## Views

- Formulas: the seven equations of the section already in `chapter.json`,
  the boxed and named ones important (eq-fs, eq-fs-max, eq-fk,
  eq-fk-incline, eq-mu-tan) and the worked steps not.
- Definitions: the fourteen variables of the section; the five glossary
  terms (friction, kinetic friction, static friction, magnitude of static
  friction, magnitude of kinetic friction).
- Concept map: the seven nodes above, with their edges into 3.3 and
  Chapter 4.

## Colour

The page binds force, velocity and acceleration. Every sim draws a force:
the applied force, the normal force and the friction of the interface and
the breakaway sims, the weight and its two components, the normal force and
the friction of the skier, and the normal force and the friction on the
probe tip. The skier gains speed down the slope, and her velocity arrow is
drawn as one; her readout and the small line under it write $\kg$, which is
an acceleration. Mass, the coefficients of friction, the slope angle, the
count of adhering atoms and every length of a scene stay in ink, as the
chapter config decided.

## Wanted at chapter level

- variables `f_fric` → 5.1-characteristics
- variables `f_s` → 5.1-magnitudes
- variables `f_smax` → 5.1-magnitudes
- variables `f_k` → 5.1-magnitudes
- variables `N` → 5.1-magnitudes
- variables `F` → 5.1-magnitudes
- variables `μ_s` → 5.1-magnitudes
- variables `μ_k` → 5.1-magnitudes
- variables `m` → 5.1-magnitudes
- variables `g` → 5.1-magnitudes
- variables `w` → 5.1-incline
- variables `w_perp` → 5.1-incline
- variables `w_par` → 5.1-incline
- variables `θ` → 5.1-incline
- equations `eq-fs` → 5.1-magnitudes
- equations `eq-fs-max` → 5.1-magnitudes
- equations `eq-fk` → 5.1-magnitudes
- equations `eq-N-incline` → 5.1-incline
- equations `eq-fk-incline` → 5.1-incline
- equations `eq-mu-k-slope` → 5.1-incline
- equations `eq-mu-tan` → 5.1-incline
- The `latex` of `eq-N-incline`, `eq-fk-incline` and `eq-mu-k-slope` writes
  the angle as `\text{25º}` with the masculine ordinal the CNXML carries,
  and KaTeX has no metrics for that character, so the formula sheet prints
  a warning and a blank where the degree sign should be. The text of the
  section writes `25^\circ` instead; the chapter pass should make the same
  change in those three rows (and in any other row of the chapter that
  carries º inside math).
- The concept `friction` sits under 4.3, where Chapter 4 names it as one of
  the external forces of a free-body diagram. This section is where the
  book's reader is given its characteristics, its two kinds and its
  magnitudes, so the chapter pass should weigh moving the node to 5.1, as
  the chapter's exploration asks. Until it moves, 5.1 reinforces it.

### What the chapter pass did with these (2026-09-11)

- Every anchor above is written into `ch05/chapter.json`, and each one names a
  span id that stands in this section's `text.html`.
- The three equation rows that the report asks about, `eq-N-incline`,
  `eq-fk-incline` and `eq-mu-k-slope`, write the angle as `\cos\theta` rather
  than as a number, so no masculine ordinal reached the chapter's math and
  nothing had to be changed there. The character did sit in three sentences of
  this section that OmniStax wrote (the caption of Figure 5.4, the lead of the
  block of ice and its caption) and in the prompt of the second AP item, where
  the rest of the prompts already write `$5.0^\circ$` and `$4^\circ$`; all four
  now write `$25^\circ$`, as Chapter 3's captions do. The angle's unit in the
  variables table stays `º`, which is what Chapters 3, 4 and 6 write there.
- The concept `friction` stays under 4.3. Chapter 4 introduces it as one of
  the external forces of a free-body diagram and its section is built, so the
  node is Chapter 4's to hold; this section reinforces it, which is what the
  coverage rows already say, and the seven nodes of 5.1 rest on it.
- Two conceptual questions printed elsewhere in the chapter are taken here
  under rule 12, since each tests the coefficient of friction that this
  section introduces and neither turns on anything its own section teaches:
  `cq5`, the soles of shoes (`fs-id1165296252981`, `source_section` 5.3), and
  `cq6`, oil and gasoline on a road in the rain (`fs-id1165296261672`,
  `source_section` 5.2). The second is the question the Take-Home Experiment
  of `magnitudes` ends on, so both cite that span. Both carry an AI-marked
  suggested approach and are tagged `coefficient-of-friction` with
  `static-friction` at weight 2. The `exercise_notes` of all three sections
  say where each item went.
- `sim-interface` writes $\kN = m\kg$ in its readout, so its `draws` gains
  `acceleration` beside `force`; the page bound the type already through
  `sim-skier`. The two sliders that had no `aria` (the friction on the skier
  and the normal force on the probe tip) have one now.

## Built (2026-09-11)

Six figure rows, five of them interactive: `sim-interface` and `fig-ice`
are still and carry no transport, and `sim-breakaway`, `sim-skier` and
`sim-probe` move and carry one. `check:content` is clean, the page builds,
and a headless pass in light and dark found no console error, every image
loading and every canvas booting. One fix pass: three headlines were too
long for the 1400-unit canvas and were shortened, the magnified interface
was redrawn with the floor and the crate in different tints so that the
two bodies can be told apart, the skier's force labels were given panel
backgrounds and her velocity arrow was moved further down the slope so the
labels stop colliding, the probe's friction arrow was moved clear of its
atoms, and the pull arrow's label in the ice figure was moved off the
contestant's head.
