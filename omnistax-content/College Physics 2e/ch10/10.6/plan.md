# Plan: 10.6 Collisions of Extended Bodies in Two Dimensions (m42183)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's instruction to finish the book in waves; the
per-section stop of rule 2, the plan review of rule 5 and the picks of rule 15
are replaced by this file, written before the section was built and left for
review after, as `ch10/config.md` records.

The section takes the conservation of angular momentum of 10.5 into a
collision. A disk slides across a frictionless table and sticks to a stick
nailed at one end; the nail's force has no lever arm, so angular momentum is
conserved while kinetic energy is lost and linear momentum is not even
conserved, and the surprise of the worked example is that the momentum goes
up. From the two ends of the stick the section reasons its way to the
percussion point, and to the sweet spot of a tennis racquet. One photograph
(10.32), two sketch figures (10.33, 10.34), one worked example (the
publisher prints it as Example 10.15, the chapter's fifteenth), one Check Your
Understanding box, eight AP items, three conceptual questions, five problems
of which three are keyed, two more figures inside the problems (10.35,
10.36). No glossary term: the book sets *percussion point* in italics and
does not define it. One page (rule 11).

## Sub-concepts (page headers)

The module prints no header of its own, so all four are the agent's (rule 3).

1. `collisions-with-spin` **Collisions that set things spinning** (book: the
   opening paragraph on bowling pins, spinning cars, curve balls and top spin;
   Figure 10.32, kept).
2. `disk-and-stick` **A disk strikes a nailed stick** (book: the paragraph
   that sets up the collision and argues that angular momentum is conserved
   while kinetic energy and linear momentum need not be; Figure 10.33).
3. `rotation-in-a-collision` **Working the collision through** (book: Example
   10.15, Rotation in a Collision, in its three parts with their strategies,
   solutions and discussion). The four equations of the section and all
   sixteen variables anchor here. The Check Your Understanding box is set
   inline after it.
4. `percussion` **The percussion point** (book: the paragraph that reasons
   from the two ends of the stick to the point between them, and the
   paragraph on the racquet; Figure 10.34).

Cross references: the two figures and the example are cited by their
published numbers in plain text; the reference to the table of moments of
inertia in 10.3 is written "Figure 10.12" in plain text, as the config
allows for references within the chapter. Learning objectives and the section
summary come out of the running text into the tables and views (rule 4).

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| angular-momentum-in-collisions | result, eq-angular-momentum-of-a-point-mass | disk-and-stick | the argument that the nail's force has no lever arm; $L = mvr$ in the example; the seesaw AP item; the balls-and-string AP item |
| solving-a-rotational-collision | skill, eq-angular-velocity-after-collision | rotation-in-a-collision | part (a) of the example; the three repeats among the problems; the twin skaters; the spinner AP item |
| energy-and-momentum-in-a-rotational-collision | idea | rotation-in-a-collision | parts (b) and (c) and the discussion; the hockey puck question; the parts of the problems that compare energies and momenta |
| percussion-point | idea | percussion | the two ends of the stick, the point between, the racquet in three places; the first problem, in which the disk strikes near the nail and the momentum falls |

The section leans on `angular-momentum` and `conservation-of-angular-momentum`
(10.5), `choosing-a-moment-of-inertia` (10.3), `rotational-kinetic-energy`
(10.4), `torque` (9.2), `point-of-application` (9.1), `point-mass` (8.6),
`inelastic-collision` and `perfectly-inelastic-collision` (8.5),
`conservation-of-momentum` (8.3) and `newtons-third-law` (4.4); the coverage
rows mark each where the text uses it.

## Figures

id · replaces or Sim · concepts · value add · moving or still · sliders ·
headline · graph · 3D

1. `fig-bowling` · keeps Figure 10.32, the bowling ball among the pins, as a
   photograph · angular-momentum-in-collisions · kept because the text points
   at it ("See Figure 10.32") and it shows the thing the passage is about;
   the book's caption and credit, width 250.
2. `sim-disk-stick` · replaces Figure 10.33 (a) and (b), the disk sliding
   toward the nailed stick and the two turning together · angular-momentum-
   in-collisions, solving-a-rotational-collision, energy-and-momentum-in-a-
   rotational-collision · value add: flow by animation and variation by
   slider. The book prints a before and an after; the reader would otherwise
   have to imagine the disk arriving, sticking and carrying the stick round,
   and to work the three parts of the example by hand to learn that angular
   momentum is kept while kinetic energy falls and linear momentum rises.
   Three pairs of bars under the scene show all three at once, before and
   after, and the moment of the collision is the moment the after bars
   appear · **moving**: the idea has a before and an after and the disk's
   approach is the clock (rule 14). The loop is the approach over 2.40 m of
   table shown in about 1.5 s, then 1.00 s of model time turning together
   shown in 3.5 s, then a hold, so that the pair turns through
   $\omega' \times 1\ \text{s}$ and a slow turn and a fast one look
   different · sliders: $m$ (10.0 to 200 g, default 50.0, ink), $\kv$ (5.0
   to 40.0 m/s, default 30.0, velocity), $\kr$, where the disk strikes
   measured from the nail (0.100 to 1.20 m, default 1.20, position, with a
   detent at 0.100 m for the first problem and at 0.800 m, the percussion
   point), $M$ (0.50 to 4.00 kg, default 2.00, ink). The stick's length is
   held at the book's 1.20 m, so $\kIprime = m\kr^2 + M(1.20\ \text{m})^2/3$,
   which is the book's formula when the disk strikes the end and the first
   problem's when it does not; the after momentum is
   $(m\kr + M \cdot 0.600\ \text{m})\kwprime$, which is the book's
   $(m + M/2)r\omega'$ at the end and gives the key's 0.188 kg·m/s at 0.100 m
   · "The 50.0 g disk slides toward the stick at 30.0 m/s and will strike it
   1.20 m from the nail." then "Stuck together, the disk and the 2.00 kg stick
   turn about the nail at 1.74 rad/s." · bars below, since the scene is the
   table seen from above with the disk crossing it: $\kL$ and $\kLprime$
   (angular momentum), $\kKE$ and $\kKEprime$ (energy), $\kp$ and $\kpprime$
   (momentum), the before bar hollow and the after bar filled, each pair on a
   fixed cap taken from the book's defaults (4 kg·m²/s, 40 J, 4 kg·m/s), a
   bar past its cap clipped with a marker and its number written · 2D, the
   plane of the table. Labels: the disk, the stick and the nail move or sit
   under a moving thing, so their names are off behind a Labels button with
   hover names (rule 26.7); the quantity labels $\kv$, $\kvprime$,
   $\kvcm$ and $\kwprime$ ride their arrows through the labeller. Readout:
   $\kwprime = m\kv\kr/\kIprime$ with the live numbers; small line saying
   what the kinetic energy and the linear momentum did and which way the nail
   pushed. Draws angular-momentum, rotational-inertia, angular-rate,
   momentum, velocity, energy, position.
3. `sim-percussion` · replaces Figure 10.34 (a), (b) and (c), the stick and
   the racquet struck in three places · percussion-point · value add:
   variation by slider. The book draws three states; sliding the strike
   point along the body lets the reader watch the force on the nail and on
   the hand shrink, vanish at the percussion point and reverse, which the
   three stills only assert · **still**: the question is what one blow at
   one point does to the pivot, a picture and not a motion; the fan of
   ghosts in the book's panel (c) is notation for a free turn, not a clock
   (rules 14, 24.1) · one slider, where the ball strikes as a fraction
   $r/\ell$ of the length from the pivot (0.10 to 1.00, default 0.95, ink,
   with soft detents at 0.35, at 2/3 labelled percussion point, and at 0.95,
   the book's three panels). The stick is the section's 1.20 m rod and the
   racquet is taken as a uniform rod 0.685 m long held at its end, so both
   answer the same fraction and the two brackets read 1.14 m and 0.651 m at
   the default · "Struck 0.65 m from the hand, near its end, the racquet pulls
   the hand backward with 0.43 of the ball's force, and the stick does the
   same to its nail." · none: the two bodies side by side, as the book draws
   them, with the ball, the blow, the force on the pivot and the percussion
   point marked are the picture · 2D; the force on the pivot is drawn beneath
   the nail and the hand so it never lies along the ball's blow when the ball
   lands near the pivot. Labels on: the nail, the hand, the percussion point
   and the two force names are five and nothing moves.
   Readout: $\kF_{\text{hand}} = \kF_{\text{nail}} = (1 - \tfrac{3}{2}\,r/\ell)\,\kF_{\text{ball}}$ with the live factor; small line saying
   the two bodies are taken as uniform rods, for which the percussion point
   lies two thirds of the way from the pivot. Draws force, position.

Photographs: Figure 10.32 is kept (above). Figures 10.35, the twin skaters,
and 10.36, the skater catching a ball, sit inside problems and travel on the
cards (`ch10/config.md`); 10.35 rides `p3`, and 10.36 leaves with its unkeyed
problem and is named in `notes`.

Extra simulations (rule 15), thought through and decided:

- The twin skaters locking hands (10.35) as a moving figure: left. It is
  `sim-disk-stick` with two point masses and no nail, and the problem's card
  carries the book's drawing.
- The hockey puck on a free stick, the second conceptual question: left. A
  figure would answer the question the reader is asked.
- A bar for the force on the nail inside `sim-disk-stick`: left. The momentum
  pair already shows it as $\kpprime - \kp$, and `sim-percussion` is that
  force on its own.

## Exercises

- `cyu1` (fs-id2672292, check-understanding): is rotational kinetic energy a
  vector. Keyed by the book; set inline after `rotation-in-a-collision`
  (`ch10/config.md`), Understand.
- 8 AP items printed with the section. Five ask about torque changing angular
  momentum and about the shape of a body, not about collisions, and are set
  with 10.5 with `source_section: "10.6"` (`ch10/config.md`): fs-id2159515
  (the cyclist's gears), fs-id1526286 (the electric screwdriver),
  fs-id1519591 (why the shape matters, keyed d), fs-id1581467 (the tabletop
  fan) and fs-id1686879 (a rotational system under different torques, keyed
  with the door). Three stay: `ap1` (fs-id1664450, the person who sits
  quickly on the seesaw, keyed (b), a graded choice, Apply), `ap2`
  (fs-id1623831, the board-game spinner flicked at one end, unkeyed, open
  with an AI-marked approach, Apply) and `ap3` (fs-id1501033, balls and
  string to study angular momentum passing between systems, unkeyed, open,
  Create).
- 3 conceptual questions. The first (fs-id1575956, two collisions) is printed
  again word for word as 10.7's first and is set with 10.7
  (`ch10/config.md`). The third (fs-id2578076, pulling back on the right
  handlebar) is also printed again word for word in 10.7 and turns on the
  vector nature of angular momentum, which 10.7 introduces, so it is set
  there too under rule 12; 10.7's source carries it. `cq2` (fs-id3225926,
  the puck and the free hockey stick) stays, open, AI-marked, Analyze.
- 5 problems, 3 keyed and kept as multi-part numeric items: `p1`
  (fs-id2578283, the disk striking 0.100 m from the nail: 0.156 rad/s,
  1.17 × 10⁻² J, 0.188 kg·m/s), `p3` (fs-id2026029, the twin skaters: 3.13
  rad/s, and 438 J before and after, the figure on the card) and `p5`
  (fs-id1848842, the stick free to translate: 1.70 rad/s, 2.04 J,
  1.50 kg·m/s). Left out, unkeyed: fs-id2578396 (the disk spinning at 1000
  rpm) and fs-id1048149 (the person on ice catching a ball, whose `type=` is
  empty in the CNXML and which is classed a problem by its header; Figure
  10.36 leaves with it).
- Weights: `p1` gives `solving-a-rotational-collision` its full value,
  `energy-and-momentum-in-a-rotational-collision` 3 and `percussion-point` 2,
  since the momentum falls when the disk strikes inside the percussion point;
  `p3` gives `conservation-of-angular-momentum` 3 and `point-mass` 2 beside
  the skill; `p5` gives `energy-and-momentum-in-a-rotational-collision` 3
  and `conservation-of-momentum` 2; `ap1` gives `angular-momentum` 2; `ap2`
  gives `choosing-a-moment-of-inertia` 2 and `rotational-kinetic-energy` 2;
  `ap3` gives `conservation-of-angular-momentum` 2; `cq2` gives
  `conservation-of-momentum` 2 and `conservation-of-angular-momentum` 2.
- No generated questions.

## Views

- Formulas: the four equations already in `chapter.json`, the two named ones
  important.
- Definitions: the sixteen variables of the section; no glossary row.
- Concept map: the four nodes with their edges into 4.4, 8.3, 8.5, 8.6, 9.1,
  9.2, 10.3, 10.4 and 10.5.

## Colour

The page binds angular-momentum, rotational-inertia, angular-rate, momentum,
velocity, energy and position, as `ch10/COLOR.md` lists for 10.6, and force
as well, because `sim-percussion` draws the ball's force and the force on the
pivot, which the book's Figure 10.34 labels as forces. The masses $m$ and $M$,
the fraction $r/\ell$ and the bodies stay in ink.

## Wanted at chapter level

- `eq-angular-momentum-of-a-point-mass → 10.6-rotation-in-a-collision`
- `eq-angular-velocity-after-collision → 10.6-rotation-in-a-collision`
- `eq-moment-of-inertia-after-collision → 10.6-rotation-in-a-collision`
- `eq-linear-momentum-after-collision → 10.6-rotation-in-a-collision`
- `10.6/L → 10.6-rotation-in-a-collision`
- `10.6/L_prime → 10.6-rotation-in-a-collision`
- `10.6/I → 10.6-rotation-in-a-collision`
- `10.6/I_prime → 10.6-rotation-in-a-collision`
- `10.6/ω → 10.6-rotation-in-a-collision`
- `10.6/ω_prime → 10.6-rotation-in-a-collision`
- `10.6/m → 10.6-rotation-in-a-collision`
- `10.6/M → 10.6-rotation-in-a-collision`
- `10.6/r_curv → 10.6-rotation-in-a-collision`
- `10.6/v → 10.6-rotation-in-a-collision`
- `10.6/v_prime → 10.6-rotation-in-a-collision`
- `10.6/v_cm → 10.6-rotation-in-a-collision`
- `10.6/p → 10.6-rotation-in-a-collision`
- `10.6/p_prime → 10.6-rotation-in-a-collision`
- `10.6/KE → 10.6-rotation-in-a-collision`
- `10.6/KE_prime → 10.6-rotation-in-a-collision`
- `ch10/COLOR.md` row 10.6: add `force`, which `sim-percussion` draws.
- 10.5's `exercise_notes` should name the five AP items taken from 10.6 by
  id: fs-id2159515, fs-id1526286, fs-id1519591, fs-id1581467, fs-id1686879.
- 10.7's `exercise_notes` should say that fs-id2578076 (the handlebar) is
  printed in 10.6 as well and is set with 10.7, as fs-id1575956 is.
- The text and `ap2` cite Figure 10.12, the table of rotational inertias,
  which resolves once 10.3's `sim-inertias` row (number 10.12) is merged; if
  it does not, the two mentions stay plain text and nothing else is wanted.

Decided in the chapter pass (2026-09-14): every anchor above is written on
its row, and `ch10/COLOR.md`'s row for 10.6 now lists `force`. 10.5's
`exercise_notes` already name the five items by id. The first conceptual
question, on two collisions (fs-id1575956), was set nowhere, since 10.7
prints only the handlebar and the guidance gyroscope; it is set here as
`cq1`, before the puck, with an AI-marked suggested approach, tagged
`angular-momentum-in-collisions` with `conservation-of-angular-momentum` at
weight 2, and `exercise_notes` is corrected: of the three conceptual
questions the first two are set here and the handlebar (fs-id2578076) is set
with 10.7. Figure 10.12 resolves, since 10.3's `sim-inertias` row is built.
