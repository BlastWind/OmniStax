# Plan: 8.1 Linear Momentum and Force (m42156)

Source: `source.md` (converted from CNXML). Status: built 2026-09-11
without a review stop, on Chen's instruction to finish the book in one
job.

The section that names momentum and restates Newton's second law in terms
of it. Two results, one idea and one skill; no figure of any kind in the
book, two boxed notes and one Making Connections box, two worked examples,
two AP items (one keyed), four conceptual questions and six problems, three
of them keyed. Nothing is dropped but the three unkeyed problems. One page
(rule 11).

## Sub-concepts (page headers)

The book prints two headers of its own, Linear Momentum and Momentum and
Newton's Second Law, and runs each of its two examples straight on from the
paragraph before it. Five blocks, one idea to a block:

1. `momentum` **Linear momentum** (book: the scientific definition agreeing
   with the intuitive one, $\kp = m\mathbf{v}$, the proportionality to mass
   and to velocity, momentum as a vector in the direction of the velocity,
   the SI unit, and the boxed note Linear Momentum). The variables $\kp$,
   $m$ and $\kv$ and the equation `eq-momentum` anchor here.
2. `calculating` **Calculating a momentum** (book: Example 8.1, the football
   player and the football, with the magnitude form of the definition and
   the ratio of the two momenta). The example is `ex-football`;
   $\kpplayer$, $\kpball$ and `eq-momentum-mag` anchor here.
3. `second-law` **Momentum and Newton's second law** (book: momentum as the
   quantity of motion, Newton's own statement of the second law,
   $\kFnet = \kdp/\kdt$, the boxed note Newton's Second Law of Motion in
   Terms of Momentum, and the Making Connections box on force and
   momentum). $\kFnet$, $\kdp$, $\kdt$ and `eq-newton2-momentum` anchor
   here.
4. `constant-mass` **Constant mass and the familiar second law** (book: the
   derivation of $\kFnet = m\ka$ in three steps, the italic condition, and
   the paragraph on systems whose mass changes). $\kdv$, $\ka$ and the four
   equations of the derivation anchor here.
5. `tennis` **Finding a force from a change in momentum** (book: Example
   8.2, the serve of Venus Williams). The example is `ex-tennis`; $\kvi$
   and $\kvf$ and `eq-delta-p-velocities` anchor here.

The book's vector $\mathbf{v}$ in the definition is set bold in ink, as
Chapter 3 set $\mathbf{s}$; the magnitudes take the `\k` macros. Masses
stay in ink (rule 7). Learning objectives, the section summary and the two
glossary terms come out of the running text into the views.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| linear-momentum | idea, eq-momentum | momentum | the boxed definition; the glossary; problems 1, 3 and 5 |
| calculate-momentum | skill | calculating | Example 8.1; problems 1, 3 and 5 |
| newtons-second-law-momentum | result, eq-newton2-momentum | second-law | the boxed statement; the glossary; Example 8.2; AP items 1 and 2; problem 5 |
| constant-mass-second-law | result, eq-newton2-const-mass | constant-mass | the three-step derivation and its italic condition; the discussion of Example 8.2 |

The section leans on `mass` (4.2), `instantaneous-velocity` (2.3), `vector`
(2.2), `derived-units` (1.2), `newtons-second-law` and `net-external-force`
(4.3) and `average-acceleration` (2.4), all of which the coverage rows mark
as used where the text uses them. The two conceptual questions that set
momentum against kinetic energy also reach for `kinetic-energy` (7.2) and
`work` (7.1), which the exercises tag.

## Figures

id · replaces or Sim · concepts · what moves or still · sliders · headline ·
graph · 3D

1. `sim-momentum` · **Sim**, no number: the book draws nothing here, so the
   figure replaces nothing · linear-momentum, calculate-momentum ·
   **moves**: the idea has a time in it, because a speed is only visible as
   ground covered in a time. The football player and the football start
   together at the left of a thirty-metre strip and each travels at its own
   speed, so the ball outruns the player across the picture while the
   momentum bar beneath the player stays far the longer of the two; one run
   of the strip per loop, with the scrubber · the player's mass (50 to 150
   kg, default 110, ink), the player's speed $\kv$ (2.0 to 15.0 m/s,
   default 8.00, velocity), the football's mass (0.100 to 2.000 kg, default
   0.410, ink), the football's speed $\kv$ (5.0 to 40.0 m/s, default 25.0,
   velocity) · "t = 0.60 s · the football has gone 15.0 m and the player
   4.8 m, and yet the player carries 85.4 times the momentum" · no graph:
   the two lanes and the two momentum bars beneath them are the picture ·
   no 3D. Readout: $\kpplayer = m\kv$ and $\kpball = m\kv$ with the numbers;
   small line on the ratio of the two. Draws momentum and velocity.
2. `sim-force` · **Sim**, no number: the book draws nothing here either ·
   newtons-second-law-momentum, constant-mass-second-law · **moves**: the
   idea has a time in it, since the momentum accumulates while the racquet
   and the ball are in contact. The whole loop is the contact interval: the
   ball rests against the strings at $\kvi = 0$, the racquet pushes it with
   a steady net force, and the momentum the ball has taken up grows along a
   straight line until the ball leaves at $\kvf$; one contact per loop,
   with the scrubber · the ball's mass (0.020 to 0.200 kg, default 0.057,
   ink), the speed just after impact $\kvf$ (10.0 to 80.0 m/s, default
   58.0, velocity), the contact time $\kdt$ (1.0 to 40.0 ms, default 5.0,
   time) · "t = 3.0 ms · the ball has taken up 2.0 of the 3.3 kg·m/s the
   racquet will give it, at a steady 661 N" · graph below the scene: the
   momentum of the ball against time, a straight line from zero to $\kdp$
   whose slope is $\kFnet$, with the slope triangle drawn and labelled ·
   no 3D. Readout: $\kFnet = \kdp/\kdt = m(\kvf - \kvi)/\kdt$ with the
   numbers; small line on the same force found the other way, as
   $m\ka$ with $\ka = \kdv/\kdt$, which is the constant-mass case. Draws
   momentum, force, velocity, time and acceleration.

The section has no book figure of any kind, so nothing is replaced and
nothing is folded, and there is no photograph to keep or drop. No exercise
of the section refers to a figure, so no figure is copied over to serve
one.

Extra simulations (rule 15), considered and left:

- A ladder of momenta in powers of ten, from the football to the elephant,
  the garbage truck, the ship and the Earth in its orbit, which the
  problems work out one by one. It would show how wide the range is, but
  1.3 already built the ladder of powers of ten and this one would only
  place numbers on it that the reader has just calculated. Left.
- The same change in momentum delivered over a long contact and a short
  one, side by side, for the conceptual question on how a small force can
  impart the same momentum as a large one. The contact-time slider of
  `sim-force` already answers it, and the straight line whose slope falls
  as the interval widens is the whole of the argument. Left.
- A cart losing mass under a steady push, to show why the momentum form
  holds where $\kFnet = m\ka$ does not. The text points at rockets but
  gives no equation for a changing mass until 8.7, so anything drawn here
  would be invented rather than the book's. Left.

Two built, three left.

## Exercises

- No Check Your Understanding box in the section, and none anywhere in the
  chapter. One conceptual question is set inline: `cq4`, "How can a small
  force impart the same momentum to an object as a large force?", is the
  Understand check on exactly what the `tennis` block and `sim-force`
  show, so rule 12 places it there rather than at the end. The other three
  go to the Exercises document.
- 2 AP items, both the section's own. `ap1` (fs-id1022532, the boy throwing
  a snowball on frictionless ice) is keyed with (b) and is kept as the
  choice item the book prints, Understand. `ap2` (fs-id1049937, the
  baseball reversed by the bat in 20 ms) has no key and is kept as an open
  item with an AI-marked suggested approach that lays out the method and
  computes nothing, Apply.
- 4 conceptual questions, `cq1` to `cq4`, none keyed anywhere in the
  chapter, all kept as open items with AI-marked suggested approaches.
  `cq1` and `cq2` set momentum against kinetic energy and are tagged with
  Chapter 7's `kinetic-energy` beside `linear-momentum`, as the chapter
  config decided; `cq3`, the football coach's advice, is tagged with
  `work` as well.
- 3 problems keyed and kept: `p1` (the charging elephant, the tranquilizer
  dart and the running hunter, multi), `p3` (the airplane matching the
  ship's momentum, multi with the discussion of the recoil in the
  solution), `p5` (the runaway train car brought to rest by 1500 N,
  number).
- 3 problems left out, having no answer in the book's key: 2
  (fs-id1493437, the large ship), 4 (fs-id1493804, the garbage truck) and 6
  (fs-id1542640, the linear momentum of the Earth).
- Nothing is taken from another section and nothing is held for a later
  one. 8.5's problem `fs-id1664993` asks the reader to take the mass and
  the speed of the football player and the football from this section and
  work the catch as an inelastic collision; it needs 8.5's idea and stays
  there.
- No generated questions: every node of the section has a book exercise
  that tests it.
- Weights: `cq1` and `cq2` give `kinetic-energy` its full value and
  `linear-momentum` weight 2, since the comparison turns on the square in
  the kinetic energy; `cq3` gives `work` and `kinetic-energy` weight 2
  beside the full value for `newtons-second-law-momentum`; `p5` gives
  `calculate-momentum` weight 2, since the momentum is only the first step
  and the second law does the rest.

## Views

- Formulas: the seven equations of the section already in `chapter.json`,
  the definition, the momentum form of the second law and the constant-mass
  form important and the four steps of the derivation not.
- Definitions: the twelve variables of the section; the two glossary terms,
  linear momentum and the second law of motion.
- Concept map: the four nodes above with their edges into 1.2, 2.2, 2.3,
  2.4, 4.2 and 4.3.

## Colour

The page binds momentum, velocity, force, time and acceleration.
`sim-momentum` carries two speeds on velocity sliders and draws a momentum
bar for each body; `sim-force` carries a speed and a contact time on
sliders, draws the momentum against time, the force arrow on the ball and
the slope of the line, and states the acceleration in its small line. The
masses, on their own sliders and in every readout, stay in ink, as do the
distances of the strip and the ratio of the two momenta.

## Wanted at chapter level

- variables `p` → 8.1-momentum
- variables `m` → 8.1-momentum
- variables `v` → 8.1-momentum
- variables `p_player` → 8.1-calculating
- variables `p_ball` → 8.1-calculating
- variables `F_net` → 8.1-second-law
- variables `Δp` → 8.1-second-law
- variables `Δt` → 8.1-second-law
- variables `Δv` → 8.1-constant-mass
- variables `a` → 8.1-constant-mass
- variables `v_i` → 8.1-tennis
- variables `vf` → 8.1-tennis
- equations `eq-momentum` → 8.1-momentum
- equations `eq-momentum-mag` → 8.1-calculating
- equations `eq-newton2-momentum` → 8.1-second-law
- equations `eq-delta-p` → 8.1-constant-mass
- equations `eq-delta-p-const-mass` → 8.1-constant-mass
- equations `eq-newton2-const-mass` → 8.1-constant-mass
- equations `eq-delta-p-velocities` → 8.1-tennis

Decided in the chapter pass (2026-09-12). The twelve variable anchors and the
seven equation anchors above are written into `chapter.json` as asked; every
one of them names a span or an example of this section's own `text.html`.

This section moved the book's "Professional Application" out of `cq3`'s prompt
and into the exercise's `tag`, and the chapter pass has made that the chapter's
convention, since it is what 16.1 and 16.3 already do with "Engineering
Application" and what the `tag` field is described for. The other six sections
wrote the label three different ways—in bold at the head of the prompt, in
italics, and as "Professional Application:" in plain text—and all twenty-one
items of the chapter that carry the label in the book now carry it as a `tag`
with the label gone from the prompt.
