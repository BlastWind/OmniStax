# Plan: 4.4 Newton’s Third Law of Motion: Symmetry in Forces (m42074)

Source: `source.md` (converted from CNXML). Status: built 2026-09-11 without a
review stop, on Chen’s instruction to finish the book in one job.

The section that turns a single push into a pair of forces and then makes the
reader choose which body the pair acts on. Two sketch figures (4.9 the swimmer,
4.10 the professor and her cart), no photograph, one boxed note stating the law,
two worked examples on the same drawing, a PhET note that is dropped per the
chapter config, eleven AP items, six conceptual questions and two problems, one
of them keyed. One page (rule 11).

## Sub-concepts (page headers)

The book prints no titled sub-headers here, only the run of the argument: the
law, the swimmer, the everyday examples, and the two examples worked on one
drawing. Page structure, one block per idea:

1. `third-law` **Newton’s third law of motion** (book: the broken bats of
   Mariano Rivera, the boxed statement of the law, the paragraph on symmetry in
   nature and on “action-reaction”). The glossary term *Newton’s third law of
   motion* belongs here.
2. `different-systems` **Why the two forces do not cancel** (book: the swimmer
   pushing off the wall, the two systems that could be investigated, and why
   $\kF_{\text{feet on wall}}$ does not cancel $\kF_{\text{wall on feet}}$;
   Figure 4.9).
3. `thrust` **Thrust and other reaction forces** (book: the walking professor,
   the car’s drive wheels, the rocket and the definition of thrust, the
   helicopter, the bird, the octopus and the boxer). The glossary term *thrust*
   belongs here.
4. `choosing-a-system` **Choosing the system of interest** (book: Example 4.3,
   the acceleration of the professor, cart and equipment taken as System 1, with
   Figure 4.10 inside it; Example 4.4, the force on the cart with System 2; the
   discussion that internal forces cancel). The section’s six variables and its
   two equations anchor here.

Cross references to other sections are plain text; this section makes none. The
book’s ${\text{F}}_{\text{wall on feet}}$, ${\text{F}}_{\text{feet on wall}}$,
${\text{F}}_{\text{foot}}$ and ${\text{F}}_{\text{cart}}$ are written as the
force $\kF$ with the book’s descriptive subscript, so they wear the force hue
without four symbol rows of their own for names the book spells out in words;
$\kFprof$, $\kFfloor$, $\kFnet$ and $\kff$ have rows and macros already. The
buoyant force $\text{BF}$ of Figure 4.9’s caption is named once and stays in
ink.

Learning objectives, section summary and glossary come out of the running text
into the views. One conceptual question is placed inline, as the chapter config
allows where an item is plainly an Understand check; the rest of the exercises
go to the Exercises document.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| newtons-third-law | result | third-law | the boxed law; AP items on the ball and the ceiling, the Earth and the Moon, the skaters; CQ 4 and 6 |
| action-reaction-pairs | idea | different-systems | the swimmer of Figure 4.9; CQ 3, 5 and 6; the AP items on the skaters and on the wheelbarrow |
| internal-forces-cancel | result | choosing-a-system | Examples 4.3 and 4.4 and their discussions; CQ 6; the AP items on the water-skiers and the figure skaters; problem 1 |
| thrust | idea | thrust | the rocket paragraph and the glossary; CQ 4 on the recoilless rifle |

The section leans on `force`, `external-force` and `free-body-diagram` (4.1),
`newtons-first-law` and `mass` (4.2), and `system-of-interest`,
`net-external-force`, `newtons-second-law`, `weight` and `friction` (4.3); the
coverage rows mark each as used where the text uses it.

## Figures

id · replaces · concepts · what moves · sliders · headline · graph · 3D

1. `sim-swimmer` · replaces Figure 4.9 (the swimmer pushing off the pool wall) ·
   newtons-third-law, action-reaction-pairs · **moves**: the swimmer’s feet are
   against the wall for a short push, during which the two forces of the pair
   are drawn where each one acts — $\kF_{\text{feet on wall}}$ on the wall and
   $\kF_{\text{wall on feet}}$ on her feet — and she accelerates away from the
   wall; when her feet leave the wall both forces go and she glides at constant
   velocity. The idea has a time in it, since she is accelerated for as long as
   she pushes and no longer, so the figure loops once per push and glide and
   gets the scrubber · the force of the push $\kF$ (100 to 600 N, default 350,
   force), her mass $m$ (40 to 90 kg, default 60, ink), the length of the push
   $\kt$ (0.20 to 0.80 s, default 0.40, time) · “t = 0.25 s · the wall pushes
   back with 350 N, which accelerates her 60.0 kg at 5.83 m/s² away from the
   wall” · graph below: the swimmer’s speed against time, rising while her feet
   are on the wall and flat afterwards · no. The dashed line around the swimmer
   is the system of interest, and her free-body diagram is drawn beside the
   graph with $\kF_{\text{wall on feet}}$, the weight $\kwgt$ and the buoyant
   force, so the reader sees that only one force of the pair is on the diagram.
   Readout: $\ka = \kFnet/m$ with the numbers. Draws force, acceleration,
   velocity, time.
2. `sim-cart` · replaces Figure 4.10 (the professor, the cart and the two
   systems) · internal-forces-cancel, action-reaction-pairs · **moves**: the
   professor pushes the cart across the lecture room from rest, and the loop
   ends when she reaches the far wall; the five forces the book draws
   ($\kF_{\text{foot}}$, $\kFfloor$, $\kFprof$, $\kF_{\text{cart}}$ and $\kff$)
   are drawn on the scene with their lengths proportional to their magnitudes,
   and the two system boundaries the book draws are dashed around the pair and
   around the cart alone. A professor walking a cart across a room has a time in
   it, so it runs a finite loop with the scrubber · the force she pushes back on
   the floor with $\kFfloor$ (100 to 250 N, default 150, force), the forces
   opposing the motion $\kff$ (0 to 60 N, default 24.0, force), her mass (40 to
   100 kg, default 65.0, ink), the mass of the cart and its equipment (5 to 40
   kg, default 19.0, ink) · “t = 1.60 s · System 1 is pushed forward with 150 N
   and held back by 24.0 N, so 84.0 kg accelerates at 1.50 m/s²” · no graph: the
   two free-body diagrams below the scene are the second half of the picture,
   one for System 1 with $\kFfloor$ and $\kff$ and one for System 2 with
   $\kFprof$ and $\kff$, each with its net force and the acceleration it gives ·
   no. The defaults are the book’s numbers, so the figure loads on Example 4.3
   and reads $\ka = 1.50\ \text{m/s}^2$ and $\kFprof = 53\ \text{N}$. Readout:
   $\kFnet = \kFfloor - \kff$ and $\ka = \kFnet/m$ with the numbers; the small
   line gives $\kFprof = \kFnet + \kff$ for System 2. Draws force, acceleration.
3. `sim-rocket` · **Sim**, replaces nothing in the book · thrust,
   newtons-third-law · **moves**: a rocket drifts in empty space, far from any
   ground and any air, and throws its exhaust gas backward; the force the rocket
   exerts on the gas is drawn on the gas and the equal, opposite thrust is drawn
   on the rocket, and the rocket picks up speed with nothing behind it to push
   against. The idea has a time in it, since the speed accumulates while the
   engine burns, so it loops once per burn and gets the scrubber · the force the
   rocket exerts on the gas $\kF$ (2 to 20 kN, default 10, force), the mass of
   the rocket $m$ (500 to 3000 kg, default 1200, ink) · “t = 2.40 s · the gas
   pushes the rocket forward with 10.0 kN, and 1200 kg has reached 20.0 m/s”,
   the two arrows carrying the other half of the pair · graph
   below: the rocket’s speed against time, a straight line of slope $\ka$ · no.
   This is the figure rule 14 asks for on an idea the section introduces:
   `thrust` is a concept node of this section and the book gives it no figure,
   and the picture answers the misconception the text states in words, that a
   rocket needs the ground or the air to push against. Readout: $\ka =
   \kFnet/m$ with the numbers. Draws force, velocity, acceleration, time.

No photograph in the section, so none is kept or dropped. The free-body diagram
the book prints inside the answer to the balloon AP item (`Figure_04_04_03.jpg`,
unnumbered) is copied over as the book prints it and carried inside that item’s
solution, as Chapter 2 carried the graphs of its keyed answers; it is not a row
of the figures table, since it belongs to an answer rather than to the text.

Extra simulations (rule 15), considered and left:

- Two figure skaters pushing apart, equal forces giving unequal accelerations.
  It opens a real view, but the AP item it would serve turns on why the skater
  who pushes does not move, which is friction, and the book does not introduce a
  coefficient of friction until 5.1, so anything the figure said about it would
  be invented. Left.
- A tug-of-war with the rope’s two tensions. It is the same pair of forces the
  swimmer already draws, and tension is 4.5’s. Left.
- A parachutist with the gravitational force and the air resistance drawn
  against each other, from the keyed AP item. It is second-law arithmetic, which
  4.3’s figures already carry, and nothing in it is a third-law pair. Left.

One built (`sim-rocket`), and it is built as a required figure for the `thrust`
node rather than as an extra.

## Exercises

- Inline: `cq3` (fs-id2846557, describe a situation in which one system exerts a
  force on another and experiences one in return, and say which laws apply) is
  plainly an Understand check on the law itself, so it is placed after the
  `third-law` span, as the chapter config allows. The chapter’s one Check Your
  Understanding box is in 4.2, so nothing else is inline.
- 6 conceptual questions, `cq1` to `cq6`, none keyed by the book, each an open
  item with an AI-marked suggested approach: the jet seat, the
  ballistocardiograph, the pair of forces, the recoilless rifle, the football
  lineman and the choice of system.
- 11 AP items, `ap1` to `ap11`, in the book’s order. Six are keyed: `ap1` (the
  forces on a kicked ball, a jumping dolphin and a parachutist, open), `ap3`
  (which statement is true, a choice item keyed (c)), `ap5` (the balloon in the
  current and the wind, open, with the book’s free-body diagram in the answer),
  `ap7` (the parachutist’s speed after 10 s, a number with the book’s worked
  solution), `ap9` (the wheelbarrow on the hill, open) and `ap11` (the figure
  skaters’ acceleration, a number with the book’s worked solution). Five are
  unkeyed and are kept as open items with their options as the book prints them
  and an AI-marked approach: `ap2` (the ball and the gym ceiling), `ap4` (why
  skater A does not move), `ap6` (the object on the icy surface), `ap8` (the
  flight attendant’s cart) and `ap10` (the two water-skiers). The parachutist,
  the water-skiers and the figure skaters are second-law arithmetic set in a
  third-law situation, and each names the pair of bodies before it divides, so
  they stay here, as the chapter’s exploration decided.
- 2 problems: `p1` (fs-id1740619, the artillery shell and the force back on the
  ship) is keyed and kept as a multi answer; problem 2 (fs-id2300721, the rugby
  players) has no answer in the book’s key and is left out and named.
- Nothing is held for another section, and nothing is taken from another
  section. 4.5’s AP item on the child and the wagon and its item on the tug of
  war both name pairs of forces, but each is stated in terms of the normal
  force, the tension and the friction that 4.5 introduces, so they stay with
  4.5.
- No generated questions: every node of the section has a book exercise.
- Weights: where an exercise leans on one concept and merely touches another,
  the touched one takes weight 2. `cq1` gives `newtons-first-law` 2, `cq4`
  gives `newtons-third-law` 2 beside `thrust` at full value, `cq5` gives
  `newtons-third-law` 2, `cq6` gives `action-reaction-pairs` 2; `ap2` gives
  `weight` 2, `ap4` gives `net-external-force` 2, `ap5` gives
  `newtons-second-law` 2, `ap6` gives `newtons-second-law` 2, `ap7` gives
  `weight` and `v-from-at` 2, `ap8` gives `reference-frame` 2, `ap9` gives
  `free-body-diagram` 2, `ap10` and `ap11` give `system-of-interest` 2, and
  `p1` gives `action-reaction-pairs` 2.

## Views

- Formulas: the two equations of the section already in `chapter.json`, both of
  them steps of the worked examples and so not important.
- Definitions: the six variables of the section; the two glossary terms.
- Concept map: the four nodes above with their edges into 4.1, 4.3 and 4.2.

## Colour

The page binds force, acceleration, velocity and time. Every figure carries a
force on a slider and draws forces as arrows; the swimmer and the rocket draw
the acceleration and the velocity they produce and state the time in their
headlines; the cart draws the acceleration of each system. Mass, the lengths of
the scenes and the counts stay in ink, as the chapter config decided.

## Wanted at chapter level

- variables `F_net` → 4.4-choosing-a-system
- variables `F_floor` → 4.4-choosing-a-system
- variables `F_prof` → 4.4-choosing-a-system
- variables `f_fric` → 4.4-choosing-a-system
- variables `m` → 4.4-choosing-a-system
- variables `a` → 4.4-choosing-a-system
- equations `eq-fnet-floor` → 4.4-choosing-a-system
- equations `eq-fprof` → 4.4-choosing-a-system
- No new symbol row is wanted. The four forces the book names in words
  ($\kF_{\text{feet on wall}}$, $\kF_{\text{wall on feet}}$,
  $\kF_{\text{foot}}$, $\kF_{\text{cart}}$) are written as $\kF$ with the book’s
  subscript and already wear the force hue; should the chapter pass prefer rows
  of their own, the four places they are written are in `different-systems` and
  in Example 4.3.
