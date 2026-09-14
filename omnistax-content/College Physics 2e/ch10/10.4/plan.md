# Plan: 10.4 Rotational Kinetic Energy: Work and Energy Revisited (m42180)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's instruction to finish the book in waves;
the per-section stop of rule 2, the plan review of rule 5 and the user picks
of rule 15 are replaced by this file, written before the section was built
and left for review after, as `ch10/config.md` records.

The section carries work and energy over from Chapter 7 into rotation. A
force kept perpendicular to the radius of a disk does work equal to the
torque times the angle, that work goes into a new form of kinetic energy,
one half the moment of inertia times the angular velocity squared, and a
body that rolls down a hill must divide its potential energy between
translation and rotation, which is why a can of thick soup loses the race.
Seven book figures (10.16 to 10.22: four photographs and three sketches),
three worked examples, two Making Connections notes, a Problem-Solving
Strategy, a Take-Home Experiment, one Check Your Understanding, two glossary
terms, four AP items, three conceptual questions and fifteen problems of
which six are keyed. One page (rule 11).

## Sub-concepts (page headers)

The module prints one header of its own, "How Thick Is the Soup? Or Why
Don't All Objects Roll Downhill at the Same Rate?", which is kept (rule 3;
`ch10/config.md`); the other four are the agent's.

1. `rotational-work` **Work done in turning a disk** (book: the opening
   paragraph and Figure 10.16; the derivation from $\text{net}\;W = (\text{net}\;F)\Delta s$
   to $\text{net}\;W = (\text{net}\;\tau)\theta$; Figure 10.17; the first
   Making Connections note). The variables $W$, $\tau$, $\theta$ and
   $\Delta s$ and the equation `eq-rotational-work` anchor here.
2. `rotational-kinetic-energy` **Rotational kinetic energy and the
   work-energy theorem** (book: from "To get an expression for rotational
   kinetic energy" through the kinematic substitution, the theorem, the
   definition of $\text{KE}_\text{rot}$ and Figure 10.18, the flywheel bus).
   The variables $I$, $\omega_0$, $\omega$ and $\text{KE}_\text{rot}$ and
   the equations `eq-rotational-work-energy-theorem` and
   `eq-rotational-kinetic-energy` anchor here. The Check Your Understanding
   on the analogy between the two kinetic energies is set inline after it.
3. `grindstone` **Spinning a grindstone** (book: Example 10.8 with
   Figure 10.19 inside it).
4. `helicopter` **The energy in a helicopter's blades** (book: the
   paragraph on helicopter pilots; the Problem-Solving Strategy for
   Rotational Energy; Example 10.9; Figure 10.20; the second Making
   Connections note). The variables $\text{KE}_\text{trans}$,
   $\text{PE}_\text{grav}$, $m$, $h$, $v$ and $g$ anchor here.
5. `rolling` **How Thick Is the Soup? Or Why Don't All Objects Roll
   Downhill at the Same Rate?** (book: the two paragraphs on the soup
   factory; Figure 10.21; the three conservation equations; the Take-Home
   Experiment; Example 10.10). The equations `eq-energy-of-a-rolling-body`
   and `eq-rolling-down-an-incline` anchor here.

The chapter's examples run 10.1 to 10.7 through 10.3, so the three here
are Examples 10.8, 10.9 and 10.10. Cross references to Work, Energy, and
Energy Resources are plain text (the CNXML links them to m42083 under the
title of Chapter 6, a slip of the book's; the text keeps the book's words),
and the references to the moment-of-inertia table of 10.3 are plain text as
`ch10/config.md` allows. Learning objectives, the section summary and the
two glossary terms come out of the running text into the tables (rule 4).

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| rotational-work | result, eq-rotational-work | rotational-work | the derivation on the disk; part (a) of Example 10.8; the leg and arm problems asking for the work done |
| rotational-kinetic-energy | result, eq-rotational-kinetic-energy | rotational-kinetic-energy | the definition; part (c) of Example 10.8; part (a) of Example 10.9; the merry-go-round, Earth, forearm and softball problems |
| rotational-work-energy-theorem | result, eq-rotational-work-energy-theorem | rotational-kinetic-energy | the substitution of the kinematic equation; the discussion of Example 10.8; the merry-go-round problem's parts (b) and (c) |
| rolling-splits-the-energy | result, eq-energy-of-a-rolling-body | rolling | the three cans; Example 10.10; the flywheel bus problem's part (b) |
| rotational-energy-strategy | skill | helicopter | the Problem-Solving Strategy; Examples 10.9 and 10.10; the flywheel bus problem, which asks the reader to show the steps |

The section leans on `work`, `calculate-work`, `kinetic-energy`,
`work-energy-theorem`, `gravitational-potential-energy`,
`conservation-of-mechanical-energy` and `energy-problem-solving` (Chapter
7), `arc-length` (6.1), `angular-velocity` (6.1), `torque` (9.2),
`moment-of-inertia`, `newtons-second-law-rotation` and
`choosing-a-moment-of-inertia` (10.3), `rotational-kinematic-equations` and
`linear-from-angular` (10.2); the coverage rows mark each as used where the
text uses it.

## Figures

id · replaces or Sim · concepts · value add · moving or still · sliders ·
headline · graph · 3D

1. `sim-disk-work` · replaces Figure 10.17, the disk turned by a force kept
   perpendicular to its radius · rotational-work, arc-length, torque ·
   **variation and the analogy made visible**: the book's still shows one
   force, one arc and one angle; here the reader changes the force, the
   radius and the angle and reads the same work two ways, as force times
   arc length and as torque times angle, and beside the disk the work is
   the area under a flat torque-against-angle graph, exactly as Chapter 7
   drew work under a force-against-distance graph · **still**: the angle
   the disk has turned through is the reader's choice, not the passage of
   time, and the equation has no clock in it (rule 14) · $\kF$ (50 to 400 N,
   default 200, force), $\kr$ (0.10 to 0.50 m, default 0.320, position) and
   $\theta$ (0 to 6.28 rad, default 1.00, ink, with detents at 1.00, π/2, π
   and 2π so the book's example and the whole turns are easy to hit); the
   defaults are Example 10.8's, so the figure reads 64.0 J on load · "A
   force of 200 N at 0.320 m from the axis, kept perpendicular through 1.00
   rad, does 64.0 J of work." · graph beside: the disk is a square scene,
   and the torque-against-angle graph with the work shaded under it sits to
   its right; the axes are fixed at 0 to 2π rad and 0 to 200 N·m, the
   slider maxima, rounded to ticks · 2D. Readout:
   $\text{net}\;\kW = (\text{net}\;\ktau)\theta$ with the live numbers,
   small line giving the same work as $(\text{net}\;\kF)\kds$. Labels: four
   entity labels, on by default (26.7). Draws force, position, torque,
   energy.
2. `sim-grindstone` · replaces Figure 10.19, the large grindstone given a
   spin by a person at its edge · rotational-work-energy-theorem,
   rotational-kinetic-energy, rotational-work, newtons-second-law-rotation ·
   **motion and the theorem seen holding**: the book's still shows the
   push and the arrows; here the stone starts from rest and spins up under
   the constant torque, and two bars beside it, the work done so far and
   the rotational kinetic energy so far, rise together and are equal at
   every instant, which is the work-energy theorem for rotation as a thing
   watched rather than derived · **moving**: the stone turns from rest
   through the angle while the hand pushes, a motion with a beginning and
   an end, so the figure registers a cycle over the time the turn takes and
   gets the transport (rule 14; `ch10/config.md`) · $\kF$ (50 to 400 N,
   default 200, force), $\kr$ (0.10 to 0.50 m, default 0.320, position),
   $M$ (20 to 150 kg, default 85.0, ink) and $\theta$ (0.25 to 3.14 rad,
   default 1.00, ink); the defaults are Example 10.8's, so the run ends at
   64.0 J and 5.42 rad/s · "After 0.37 s the stone has turned through 1.00
   rad, the hand has done 64.0 J of work, and the stone's rotational kinetic
   energy is 64.0 J." · graph beside: the stone is drawn face on and the two
   bars stand to its right on a fixed cap of 200 J, the range in which the
   default state is legible; a run whose energy passes the cap is pinned at
   the top with its value written beside it, as `pinned()` does on a graph,
   and never rescales the bars · 2D. The person is the library's sprite, her
   hand reaching to the rim. Readout:
   $\text{net}\;\kW = (\text{net}\;\ktau)\theta = \frac{1}{2}\kI\kw^2$ with
   the live numbers; small line giving $\kI = \frac{1}{2}MR^2$ and the
   angular velocity so far. Labels: three entity labels, on by default
   (26.7). Draws force, position, torque, rotational-inertia, angular-rate,
   energy.
3. `sim-helicopter` · Sim (it replaces no figure of the book; Figure 10.20
   is a photograph and is kept as one) · rotational-kinetic-energy,
   rotational-energy-strategy, kinetic-energy, gravitational-potential-energy
   · **variation on the example's surprise**: the discussion of Example
   10.9 says most of a helicopter's kinetic energy is in its blades, which
   is a comparison and not a picture; here two bars set the rotational
   energy of the blades against the translational energy of the whole
   craft, and beside them a height scale shows how far that stored energy
   could lift it, so the reader sees the ratio change as the rotor speed,
   the blade length, the flight speed and the mass are changed · **still**:
   it compares two energies at one moment; the blades turning would be
   decoration, and the height is a "could be raised to", not a climb (rule
   14) · rotor speed (100 to 500 rpm, default 300, angular-rate), blade
   length $\ell$ (2.00 to 6.00 m, default 4.00, ink, since a length is
   untyped in this book), $\kv$ (0 to 60.0 m/s, default 20.0, velocity) and
   the loaded mass $m$ (500 to 3000 kg, default 1000, ink); the blade mass
   stays at the book's 50.0 kg and there are four blades, as the example
   says; the defaults reproduce 5.26 × 10⁵ J, 2.00 × 10⁵ J, a ratio of 0.380
   and 53.7 m · "At 300 rpm the four blades hold 526 kJ, the helicopter
   flying at 20.0 m/s carries 200 kJ, and the blades' energy could lift it
   53.7 m." · graph beside: the helicopter in side view at the left, the two
   energy bars in the middle on a fixed cap of 1000 kJ, and the height scale
   at the right fixed at 0 to 200 m with `pinned()` for a greater height;
   both ranges hold the default state legible and are stated in a comment ·
   2D. Readout: $\kKErot = \frac{1}{2}\kI\kw^2$ and
   $\kKEtrans = \frac{1}{2}m\kv^2$ with the live numbers; small line giving
   the ratio and $\kh = \kKErot / m\kg$. Labels: four, on by default (26.7).
   Draws angular-rate, rotational-inertia, velocity, energy, position.
4. `sim-cans-race` · replaces Figure 10.21, the three cans of soup racing
   down an incline · rolling-splits-the-energy, rotational-kinetic-energy,
   conservation-of-mechanical-energy, linear-from-angular · **motion and the
   division of energy watched**: the book's still shows three cans at three
   points and tells the reader who wins; here the race is run, and beside
   each lane a bar divides the can's starting potential energy into what is
   still potential, what is translational and what is rotational at every
   instant, so the reader sees the sliding can keep everything for
   translation and the thick soup give the most to rotation, and the final
   speeds are read off at the bottom · **moving**: a race has a start, a
   finish and a winner, so the figure registers a cycle over the slowest
   can's descent and gets the transport (rule 14; `ch10/config.md`) · $\kh$
   (0.50 to 4.00 m, default 2.00, position) and the angle of the incline
   (10° to 40°, default 20°, ink), and a choice for what rolls in the third
   lane, the book's thick soup as a solid cylinder by default, or a hoop, a
   spherical shell or a solid sphere from the table of 10.3, because a shape
   is a state and not a quantity (rule 26.1); the first lane always slides
   and the second is always the thin soup. The default height is Example
   10.10's, so the third lane reaches 5.11 m/s and the first 6.26 m/s · "The
   sliding can reaches the bottom first at 6.26 m/s; the thin soup follows
   at 5.97 m/s and the thick soup last at 5.11 m/s." · graph beside: the
   three lanes are drawn one above another at the left and each lane's
   energy bar runs beside it at the right, the bar's full length being the
   can's starting energy so that only the division is on show · 2D. The
   can's mass and radius are Example 10.10's, 0.750 kg and 4.00 cm, and the
   drawn can is larger than 4.00 cm to the scene's scale so that its turning
   can be seen; the thin soup is modelled as a can whose wall holds one
   tenth of the mass and turns as a hoop while the soup inside does not
   turn, a number the book does not give and which the caption states.
   Readout: $m\kg\kh = \frac{1}{2}m\kv^2 + \frac{1}{2}\kI\kw^2$ with the live
   numbers for the third lane; small line giving the three final speeds and
   the fraction of the energy each can puts into rotation. Labels: lane
   names and the three energy kinds, in a legend once (26.7). Draws
   position, velocity, energy, rotational-inertia, angular-rate.

Photographs: Figure 10.16, the worker at the grindstone, is kept, since the
opening paragraph points at it ("Figure 10.16 shows a worker using an
electric grindstone"); Figure 10.18, the flywheel bus, is kept, since the
text points at it ("as seen in Figure 10.18"); Figure 10.20, the rescue
helicopter with the rotor drawn above it, is kept, since Example 10.9 points
at it ("similar to the one in Figure 10.20"). The book gives 10.20 no width,
so its row's `widths` stays empty. Figure 10.22, the cloud of gas and dust,
sits inside a conceptual question and travels on that item's card
(`ch10/config.md`), with its width of 250.

Extra simulations (rule 15), thought through and decided:

- **The helicopter's two energies (`sim-helicopter`): built**, argued above.
- A flywheel bus storing its energy on a hill: left. It is the helicopter
  figure with a different sprite, and the bus problem exercises the idea
  directly with the book's numbers.
- The two cylinders of the unkeyed problem, one rolling and one sliding,
  climbing a second incline to the same height in different times: left.
  `sim-cans-race` already shows the sliding body ahead, and the problem is
  left out for want of a key.

## Exercises

- One Check Your Understanding (fs-id2931518, `cyu1`), keyed by the book,
  asking whether rotational kinetic energy is completely analogous to
  translational kinetic energy; Understand, set inline after
  `rotational-kinetic-energy`, the passage that defines the quantity.
- All four AP items of the module ask how a torque changes an angular
  velocity, which is 10.3's matter, and are set with 10.3 with
  `source_section: "10.4"` (`ch10/config.md`, `ch10/exploration.md`);
  `exercise_notes` says so.
- 3 conceptual questions, none keyed, each an open item with an AI-marked
  suggested approach: `cq1` (fs-id3026004, the yo-yo, Understand, citing
  `rotational-kinetic-energy`), `cq2` (fs-id1428194, the dragster,
  Analyze, citing `rotational-kinetic-energy`) and `cq3` (fs-id2640555,
  the Earth and the cloud it formed from, Analyze, citing
  `rotational-kinetic-energy`, with Figure 10.22 on its card).
- 6 problems keyed and kept: `p1` (fs-id2402678, the merry-go-round plus
  child of Example 10.7, three parts keyed 185 J, 0.0785 rev and 9.81 N,
  the last printed by the book as "W = 9.81 N" and kept as printed in the
  solution), `p3` (fs-id3017926, the rotational kinetic energy of Earth on
  its axis and in its orbit, keyed 2.57 × 10²⁹ J and 2.65 × 10³³ J), `p5`
  (fs-id1580820, the pitcher's forearm, keyed 434 J), `p7` (fs-id2662255,
  the flywheel bus, keyed 128 rad/s and 19.9 m), `p9` (fs-id2583778, the
  leg lifting a weight, keyed 10.4 rad/s² and 6.11 J) and `p14`
  (fs-id3399194, the softball pitcher's arm, keyed 1.49 kJ and
  2.52 × 10⁴ N).
- 9 problems left out, having no answer in the book's key: the hoop rolling
  down a 5.00 m hill (fs-id2601323), the motorcycle wheel's rotational
  kinetic energy (fs-id1596687), the punter's leg (fs-id2604037), the ball
  rolling up a hill as a spherical shell (fs-id3250372), the woman lifting
  a weight with her biceps (fs-id3199856), the two cylinders on two inclines
  (fs-id3245199), the moment of inertia as a multiple of $MR^2$
  (fs-id2402928), the motorcycle coasting up a hill (fs-id2406116) and the
  Construct Your Own Problem item on the skater pulling his arms in
  (fs-id3073542). They are named in `notes` and `exercise_notes`.
- Nothing is taken from another section.
- No generated questions: every node of the section has a book exercise
  that tests it.
- Weights: `p1` gives `rotational-work-energy-theorem` its full value and
  `rotational-kinetic-energy` 4, since parts (b) and (c) are the theorem
  and part (a) the definition; `p7` gives `rotational-energy-strategy` its
  full value, `rotational-kinetic-energy` 4 and `rolling-splits-the-energy`
  2, since it asks the reader to show the strategy's steps and part (b) is
  a hill; `p9` gives `rotational-work` its full value and
  `newtons-second-law-rotation` 3, since part (a) is 10.3's law; `p14`
  gives `rotational-kinetic-energy` its full value and `rotational-work`
  2, since part (b) asks for the force through the work done; `cq1` and
  `cq2` give `rotational-kinetic-energy` its full value and
  `rolling-splits-the-energy` 2, since both turn on energy changing between
  translation and rotation.

## Views

- Formulas: the five equations of the section already in `chapter.json`,
  all important (`eq-rotational-work`, `eq-rotational-work-energy-theorem`,
  `eq-rotational-kinetic-energy`, `eq-energy-of-a-rolling-body`,
  `eq-rolling-down-an-incline`).
- Definitions: the fourteen variables of the section, and two glossary
  terms, work-energy theorem and rotational kinetic energy.
- Concept map: the five nodes above with their edges into 6.1, 7.x, 9.2,
  10.2 and 10.3.

## Colour

The page binds energy, rotational-inertia, angular-rate, torque, position,
velocity and force. Every figure states an energy (the work under the
graph, the two bars of the grindstone, the two bars of the helicopter, the
divided bars of the cans); the grindstone, the helicopter and the cans state
a moment of inertia and an angular velocity; the disk and the grindstone
draw a torque and a force and measure a radius; the helicopter and the cans
draw a velocity and the cans measure a height. `ch10/COLOR.md` forecast the
same list without force; force is bound here because Figure 10.17 and 10.19
are a force turning a disk and the force is what the reader drags. Mass,
blade length, the angle $\theta$, the incline's slope, the counts and the
ratio of the two energies stay untyped and in ink; the three cans are told
apart by lane label and by `F.cat`, never by a type hue. Nothing on the page
binds time, acceleration or angular acceleration: the grindstone's clock is
read in ink in its headline, and $\alpha$ appears in the text alone.

## Wanted at chapter level

- variables `10.4/W` → 10.4-rotational-work
- variables `10.4/τ` → 10.4-rotational-work
- variables `10.4/θ` → 10.4-rotational-work
- variables `10.4/Δs` → 10.4-rotational-work
- variables `10.4/I` → 10.4-rotational-kinetic-energy
- variables `10.4/ω_0` → 10.4-rotational-kinetic-energy
- variables `10.4/ω` → 10.4-rotational-kinetic-energy
- variables `10.4/KE_rot` → 10.4-rotational-kinetic-energy
- variables `10.4/KE_trans` → 10.4-helicopter
- variables `10.4/PE_grav` → 10.4-helicopter
- variables `10.4/m` → 10.4-helicopter
- variables `10.4/h` → 10.4-helicopter
- variables `10.4/v` → 10.4-helicopter
- variables `10.4/g` → 10.4-helicopter
- equations `eq-rotational-work` → 10.4-rotational-work
- equations `eq-rotational-work-energy-theorem` → 10.4-rotational-kinetic-energy
- equations `eq-rotational-kinetic-energy` → 10.4-rotational-kinetic-energy
- equations `eq-energy-of-a-rolling-body` → 10.4-rolling
- equations `eq-rolling-down-an-incline` → 10.4-rolling
- A variable row `10.4/r_curv` (position, m, "the radius of the disk, at
  which the perpendicular force is applied") is wanted, since the text and
  both disk figures write $\kr$ and the section's table has no radius row;
  and a row `10.4/R` (position, m, "the radius of the rolling cylinder") for
  Example 10.10, which writes $\kR$. Neither is a symbol change: both
  symbols exist.
- `ch10/COLOR.md`'s row for 10.4 should add `force` to the types bound, for
  the reason given under Colour.

Decided in the chapter pass (2026-09-14): every anchor above is written on
its row; the two variable rows `10.4/r_curv` (anchored at
`10.4-rotational-work`) and `10.4/R` (anchored at `10.4-rolling`) are added
with the meanings given; `ch10/COLOR.md`'s row for 10.4 now lists `force`.
