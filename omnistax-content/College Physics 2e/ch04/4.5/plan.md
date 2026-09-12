# Plan: 4.5 Normal, Tension, and Other Examples of Forces (m42075)

Source: `source.md` (converted from CNXML). Status: built 2026-09-11 without a
review stop, on Chen's instruction to finish the book in one job; the plan
stands for review after.

The section that names the forces a free-body diagram is drawn from. Nine
numbered book figures (4.11 to 4.19), eight of them sketches and one a
photograph, four unnumbered figures inside the exercises, three boxed notes,
two worked examples, seven AP items, two conceptual questions and six
problems, three of them keyed. The PhET note (Forces in 1 Dimension) is
dropped, as the chapter config decides, and named in `notes`. One page (rule
11).

## Sub-concepts (page headers)

The book's own headers are Normal Force, Tension and Extended Topic: Real
Forces and Inertial Frames. The tension half runs long enough to divide, so
the page is seven blocks:

1. `named-forces` **The names given to forces** (book: the opening paragraph
   on the many names forces are given). The section's own introduction, kept
   at the top of the text as rule 21 asks.
2. `normal-force` **The normal force** (book: weight must be counteracted,
   the bag of dog food and the sagging table, Figure 4.11, the definition of
   the normal force, and the boxed note Common Misconception: Normal Force
   (N) vs. Newton (N)). $\kN$, $\kwgt$, $m$, $\kg$ and eq-normal anchor here.
3. `weight-on-incline` **Weight on an incline** (book: Example 4.5 Weight on
   an Incline, a Two-Dimensional Problem, with Figure 4.12 inside it; the
   boxed note Resolving Weight into Components with Figure 4.13 and the two
   component equations; the boxed note Take-Home Experiment: Force Parallel).
   $\kwpar$, $\kwperp$, $\kff$, $\kapar$, $\theta$, eq-w-parallel, eq-w-perp,
   eq-a-incline and eq-a-incline-friction anchor here. The example is
   `ex-incline`.
4. `tension` **Tension** (book: the definition of tension, the rope and the
   hanging mass of Figure 4.14, the proof that $\kTf = \kwgt = m\kg$, the
   spring cut into the rope, and tension carried round corners in Figure
   4.15). $\kTf$ and eq-tension-weight anchor here.
5. `tightrope` **The tension in a sagging wire** (book: Example 4.6 What Is
   the Tension in a Tightrope?, with Figures 4.16 and 4.17 inside it).
   $\kTL$, $\kTR$ and eq-tension-sag anchor here. The example is
   `ex-tightrope`.
6. `large-tension` **Creating a large tension** (book: the extension of the
   tightrope result to a perpendicular force, the two equations, the chain
   and the car of Figure 4.18, and the Golden Gate Bridge of Figure 4.19).
   $\kFperp$ and eq-tension-perp anchor here.
7. `inertial-frames` **Real forces and inertial frames** (book: the Extended
   Topic, real against fictitious forces, the satellite seen from a rotating
   Earth, and the closing paragraph on the four basic forces to come).

Cross references to sections in other chapters do not arise here; the only
forward reference is to "the next (extended) section", which stays as the
book writes it. The book's bold vectors are set bold in ink where the book
prints them bold and their magnitudes take the `\k` macros. The book writes
the hand's force as $F_{\text{hand}}$, for which the chapter has no symbol
row, so it is set in plain LaTeX and a row is asked for below.

Learning objectives, the section summary and the three glossary terms come
out of the running text into the views. The chapter's one Check Your
Understanding box is in 4.2, so nothing is inline here; the conceptual
questions, the AP items and the problems go to the Exercises document.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| normal-force | idea, eq-normal | normal-force | Figure 4.11; the definition; the perpendicular equation of Example 4.5; the toboggan AP item |
| weight-components-on-incline | result, eq-w-parallel | weight-on-incline | Example 4.5; the note Resolving Weight into Components; the car on the 20º slope |
| acceleration-on-frictionless-incline | result, eq-a-incline | weight-on-incline | Example 4.5 (a) and its discussion; the car on the 20º slope |
| tension | idea | tension | the definition; Figures 4.14 and 4.15; the traction questions; the tug-of-war items |
| tension-supports-weight | result, eq-tension-weight | tension | the 5.00 kg mass of Figure 4.14; the spider-web and gymnast problems; the cable AP item |
| tension-from-perpendicular-force | result, eq-tension-perp | large-tension | Example 4.6; Figure 4.18; the problem that asks the reader to show the relation |
| inertial-frame | idea | inertial-frames | the Extended Topic and the glossary entry |

The section leans on `weight`, `newtons-second-law`, `newtons-third-law`,
`friction` and `system-of-interest` (4.1 to 4.4), on
`components-from-magnitude-angle` and `resolving-vector` (3.3) and on
`free-body-diagram` (4.1), all of which the coverage rows mark as used where
the text uses them.

## Figures

id · replaces · concepts · what moves · sliders · headline · graph · 3D

1. `sim-normal` · replaces Figure 4.11 (the bag of dog food held, then on the
   table, with both free-body diagrams) · normal-force · **still**: the idea
   has no time in it, since the picture answers the mass and the stiffness of
   the table and nothing else; the sag is where the table has settled, not a
   motion the reader watches · mass $m$ (1 to 30 kg, default 10.0, ink),
   table stiffness $\kk$ (2,000 to 40,000 N/m, default 5,000, stiffness) ·
   "a 10.0 kg bag weighs 98.0 N, so the hand pushes up with 98.0 N, and the
   table sags 2.0 cm until its restoring force is the same 98.0 N" · none:
   the two panels and their free-body diagrams are the picture · no.
   Readout: $\kN = \kwgt = m\kg$ with the numbers; small line on the table
   sagging until the restoring force matches the weight. Draws force,
   acceleration, stiffness.
2. `sim-skier` · replaces Figure 4.12 (the skier on the 25º slope) ·
   weight-components-on-incline, acceleration-on-frictionless-incline,
   normal-force · **moves**: the idea has a time in it, since the skier
   accelerates down the slope; she starts from rest at the top and slides the
   40 m of slope once per loop, her five force arrows following her, and the
   loop gets the scrubber · the slope angle $\theta$ (5º to 40º, default
   25.0º, ink), mass $m$ (20 to 120 kg, default 60.0, ink), friction $\kff$
   (0 to 250 N, default 45.0, force) · "t = 1.80 s · she is 5.5 m down the
   slope at 6.1 m/s, gaining 3.39 m/s every second" · graph below the slope:
   speed against time, a straight line of slope $\kapar$ with the moving
   point on it · no. Readout: $\kapar = (m\kg\sin\theta - \kff)/m$ with the
   numbers; small line giving the frictionless value $\kg\sin\theta$, which
   is the same for every mass. Draws force, acceleration, velocity, time.
3. `sim-incline` · replaces Figure 4.13 (the weight resolved on an incline) ·
   weight-components-on-incline, normal-force · **still**: the figure is the
   geometry of the resolution and answers its sliders alone · the slope angle
   $\theta$ (0º to 60º, default 30.0º, ink), mass $m$ (5 to 60 kg, default
   20.0, ink) · "at 30.0º the weight of 196 N divides into 98.0 N down the
   slope and 170 N into it" · graph below: the two components against the
   angle, crossing at 45º, with the set angle marked · no. Readout:
   $\kwpar = \kwgt\sin\theta = m\kg\sin\theta$ with the numbers; small line
   on $\kwperp$ and the normal force that balances it. Draws force,
   acceleration.
4. `sim-rope` · replaces Figure 4.14 (the hand, the rope and the 5.00 kg
   mass, with the free-body diagram) · tension, tension-supports-weight ·
   **still**: the mass hangs at rest, so there is no time in the idea; the
   spring cut into the rope reads the tension as the text describes · mass
   $m$ (1 to 20 kg, default 5.00, ink), the acceleration due to gravity
   $\kg$ (1.60 to 11.0 m/s², default 9.80, acceleration), so that the same
   mass on the Moon can be seen to need a smaller tension · "a 5.00 kg mass
   hangs at rest, so the rope carries 49.0 N at every point along it" ·
   none: the scene is vertical and the free-body diagram stands beside it ·
   no. Readout: $\kTf = \kwgt = m\kg$ with the numbers; small line on the
   rope pulling equally on the hand and on the mass. Draws force,
   acceleration.
5. `sim-corners` · replaces Figure 4.15 (the tendon in the finger and the
   bicycle brake cable) · tension, tension-supports-weight · **still**: a
   cable at rest round two frictionless corners; nothing travels · mass of
   the load $m$ (1 to 20 kg, default 5.00, ink), the angle the middle segment
   is turned through (10º to 80º, default 40.0º, ink) · "the 5.00 kg load
   makes a tension of 49.0 N, and the same 49.0 N is carried round both
   corners to the hand" · none · no. Readout: $\kTf = m\kg$ with the numbers;
   small line saying that a frictionless corner changes the direction of the
   pull and not its size. Draws force, acceleration.
6. `sim-tightrope` · replaces Figure 4.16 and folds Figure 4.17 (the walker
   on the sagging wire, and the same forces projected onto axes) ·
   tension-from-perpendicular-force, tension · **still**: the walker stands
   still and the net force is zero, which is the whole of the argument · the
   sag angle $\theta$ (0.5º to 30º, default 5.0º, ink), mass $m$ (40 to 120
   kg, default 70.0, ink) · "a 70.0 kg walker sags the wire by 5.0º, and each
   half pulls with 3,930 N, nearly six times his 686 N weight" · graph
   beside the components diagram: the tension against the sag angle, with the
   set angle marked, so the reader sees it run away as the wire straightens ·
   no. Readout: $\kTf = \kwgt / (2\sin\theta)$ with the numbers; small line
   on the horizontal components cancelling and only $2\kTf\sin\theta$ holding
   the walker up. Draws force, acceleration. The fold is the obvious one of
   rule 14: the book draws the same walker twice, once as a scene and once as
   its components, and one figure that draws the wire and the components
   together says it better. The row carries 4.16 with 4.17 under `folds`,
   both images under `originals`, and the eyebrow reads "Figure 4.16 + 4.17",
   so both numbers in the prose land on it.
7. `sim-chain` · replaces Figure 4.18 (the chain, the car in the mud and the
   tree) · tension-from-perpendicular-force · **still**: the push is held and
   the chain is in equilibrium under it · the perpendicular force $\kFperp$
   (100 to 1,500 N, default 300, force), the angle $\theta$ the chain makes
   with the horizontal (0.5º to 15º, default 2.00º, ink) · "a push of 300 N
   at 2.00º puts 4,300 N on the car, fourteen times the push" · graph below
   the scene: the tension against the angle for the force that is set · no.
   Readout: $\kTf = \kFperp / (2\sin\theta)$ with the numbers; small line
   saying that the equation has no answer at $\theta = 0$, which is why no
   connector is ever exactly straight. Draws force.
8. `fig-bridge` · the photograph of Figure 4.19 (the Golden Gate Bridge),
   **kept**: the text points at it ("such as the chain at the bottom of the
   picture") and it shows the thing the passage is about, a flexible
   connector sagging under its own weight. Its caption and credit line are
   the book's, and its width is the book's 325.

Photographs: the section has one, Figure 4.19, and it is kept for the reason
above. Nothing else in the section is a photograph, so nothing is dropped.

Figures that serve exercises: four, none of them numbered by the book. The
leg traction drawing goes on both conceptual-question cards, as the book
refers to it from both; the toboggan free-body diagram goes on its AP card
and the kite free-body diagram on its AP card, inside the book's own
solution. Each is carried as the book's own image in the exercise card, which
is what the card's `figure` field is for, rather than redrawn in the text:
none of the four is referred to by the running text, so none of them has a
place in it. (The chapter config had them redrawn as figures of the text;
this is the one place where the section departs from it, and the reader sees
the book's drawing either way.) The fourth, the baby on the spring scale,
belongs to the one problem in the section that the book does not key, so it
is left out with that problem and nothing refers to it.

Extra simulations (rule 15), considered and left:

- The tension in a lift cable, $\kTf = m(\kg + \ka)$, with the lift rising,
  slowing and falling: it would open a view the section does not give, since
  every rope here is static. But apparent weight and the accelerating system
  are 4.7's, and the two items of this section that need it are worked from
  Newton's second law in one line. Left to 4.7.
- A free-body diagram the reader assembles arrow by arrow: it would serve
  this section as well as 4.1 and 4.6, and belongs to none of them, as the
  chapter's exploration says. Left.
- The traction setup of the conceptual questions, with the reader moving the
  pulleys: the question asks what the tension is, and `sim-corners` already
  carries the same tension round corners to a load. Left.

None built.

## Exercises

- No Check Your Understanding box in the section; nothing is inline.
- 6 AP items, `ap1` to `ap6`: the cable raising a 120.0 kg mass (keyed, a
  number), the child pulling a wagon (unkeyed, open with an AI-marked
  approach), the tug-of-war rope that snaps (keyed, a choice), the toboggan
  free-body diagram (unkeyed, kept as an open item with its four options as
  the book prints them and an AI-marked approach, with the book's diagram on
  the card), the kite free-body diagram (keyed, open, with the book's own
  drawing and answer), and the car on the 20º slope pulled by a cable
  (unkeyed, open with an AI-marked approach that says how to work it and
  computes nothing).
- The section's first AP item, the force of gravity on an arrow
  (`fs-id1367314`), is $\kwgt = m\kg$ and nothing more, which is 4.3's
  weight. It goes to 4.3 with `source_section` 4.5, and both sections'
  `exercise_notes` say so.
- 2 conceptual questions, `cq1` and `cq2`, on the leg in traction, Understand,
  with AI-written suggested approaches; both carry the book's traction
  drawing on their cards.
- 3 problems keyed and kept: `p1` (the two tug-of-war teams, multi with the
  acceleration and the tension), `p3` (the spider web, multi with the
  vertical and the horizontal strand), `p5` (show that
  $\kTf = \kFperp/(2\sin\theta)$, open with the book's own derivation).
- 3 problems left out, having no answer in the book's key: `fs-id1600446`
  (the trampoline and the gymnast), `fs-id1914521` (the gymnast climbing a
  rope) and `fs-id2372303` (the baby on the spring scale), the last taking
  its figure with it.
- No generated questions: every node of the section has a book exercise that
  tests it.
- Weights: `ap3` gives `tension` its full value and `newtons-first-law`
  weight 1, since the item turns on what the rope was carrying and only
  names the law; `ap4` gives `weight-components-on-incline` and `friction`
  their full value and `normal-force` weight 1, which the diagram shows but
  the answer does not use; `p1` gives `tension-supports-weight` weight 2,
  since the tension is read off the second law for one team rather than from
  a hanging weight; `cq2` gives `tension` its full value and
  `tension-from-perpendicular-force` weight 2.

## Views

- Formulas: the eight equations of the section already in `chapter.json`,
  the five boxed and named ones important and the two worked steps not.
- Definitions: the thirteen variables of the section; the three glossary
  terms (normal force, tension, inertial frame of reference).
- Concept map: the seven nodes above with their edges into 3.3, 4.1, 4.3 and
  4.4.

## Colour

The page binds force, acceleration, velocity, time and stiffness. Every
figure draws forces (the weight, the normal force, friction, the tension and
the perpendicular push), six of them write $\kg$ into a readout, the skier
carries a velocity graph and states the time in its headline, and the table
of the first figure carries a stiffness on its slider. Mass, the angle of the
incline, the sag angle of a wire and the angle a cable is turned through stay
untyped and in ink, as the chapter config decides.

## Wanted at chapter level

- variables `N` → 4.5-normal-force
- variables `w` → 4.5-normal-force
- variables `m` → 4.5-normal-force
- variables `g` → 4.5-normal-force
- variables `w_par` → 4.5-weight-on-incline
- variables `w_perp` → 4.5-weight-on-incline
- variables `f_fric` → 4.5-weight-on-incline
- variables `a_par` → 4.5-weight-on-incline
- variables `θ` → 4.5-weight-on-incline
- variables `T_force` → 4.5-tension
- variables `T_L` → 4.5-tightrope
- variables `T_R` → 4.5-tightrope
- variables `F_perp` → 4.5-large-tension
- equations `eq-normal` → 4.5-normal-force
- equations `eq-w-parallel` → 4.5-weight-on-incline
- equations `eq-w-perp` → 4.5-weight-on-incline
- equations `eq-a-incline` → 4.5-weight-on-incline
- equations `eq-a-incline-friction` → 4.5-weight-on-incline
- equations `eq-tension-weight` → 4.5-tension
- equations `eq-tension-sag` → 4.5-tightrope
- equations `eq-tension-perp` → 4.5-large-tension
- book.json symbols: add `F_hand`, latex `F_{\text{hand}}`, type `force`,
  macro `\kFhand`. The book labels the hand's upward force that way in
  Figure 4.11 and its caption, and the text sets it in plain ink LaTeX
  until the row is there.
- book.json symbols: add `F_netpar`, latex `F_{\text{net}\,\parallel}`,
  type `force`, macro `\kFnetpar`. The chapter has `F_net`, `F_netx` and
  `F_nety`, and Example 4.5 writes the net force along the slope six
  times; the text sets it in plain ink LaTeX until the row is there.

### The chapter pass decided

The thirteen variable anchors and the eight equation anchors are written.

Both symbol rows this plan asked for are merged into `book.json` and applied
in the text: `F_hand` (`F_{\text{hand}}`, force, `\kFhand`) and `F_netpar`
(`F_{\text{net}\,\parallel}`, force, `\kFnetpar`).

`inertial-frame` stays here, at 4.5, where the book prints it.

The `draws` of `sim-tightrope` no longer lists `acceleration`. The figure
colours force and nothing else; the page still binds acceleration, because
the skier, the incline and the rope all draw it.

Every `º` in the section's text, figures and rows is now the degree sign `°`.
