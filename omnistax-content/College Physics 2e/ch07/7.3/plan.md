# Plan: 7.3 Gravitational Potential Energy (m42148)

Source: `source.md`, converted from the CNXML module. Status: built today,
2026-09-11, without a review stop, on Chen's instruction to finish the book
in one job; the per-section stop of rule 2, the plan review of rule 5 and
the user picks of rule 15 are replaced by this file, written before the
section was built and left for review after.

The section where work done against gravity becomes stored energy. Five
numbered figures, 7.5 to 7.9 (four sketches and one photograph), two worked
examples, one boxed take-home investigation, three AP items, two conceptual
questions and six problems, three of them keyed. The chapter carries no
Check Your Understanding box anywhere, so nothing of the book's own is
inline. One page (rule 11).

## Sub-concepts (page headers)

The book gives three titled sub-headers and then runs two examples and a
boxed investigation under the last of them. The two examples each carry an
idea of their own, so they are given blocks of their own (rule 3):

1. `lifting` **Work done against gravity** (book header "Work Done Against
   Gravity": both paragraphs, from climbing stairs to the two pairs of
   rungs on a ladder). Introduces `potential-energy` and
   `pe-reference-level`. The variables $\kPEg$, $m$, $\kg$, $\kh$, $\kW$,
   $\kF$ and $\kd$ and the equation `eq-w-lift` anchor here.
2. `converting` **Converting between potential energy and kinetic energy**
   (book header: the paragraph on releasing the mass, Figure 7.5, the
   definition of $\kdPEg$ and the 0.500-kg cuckoo-clock weight raised
   1.00 m to 4.90 J). Introduces `gravitational-potential-energy`.
   $\kdPEg$, $\kKE$ and the equation `eq-peg` anchor here.
3. `any-path` **Using potential energy to simplify calculations** (book
   header: the paragraph on any path with a change in height $\kh$, the
   look ahead to Newton's universal law of gravity, and Figure 7.6).
   Introduces `path-independence-of-gravity`.
4. `landing` **The force that stops a fall** (Example 7.6, The Force to
   Stop Falling, and the kangaroo photograph its discussion points at).
   Introduces `stopping-force-from-energy`. The example is `ex-landing`.
5. `coaster` **Finding a speed from a height** (Example 7.7, Finding the
   Speed of a Roller Coaster from its Height, with Figure 7.8 inside it;
   the closing paragraph on work that depends only on the end points; and
   the boxed take-home investigation with Figure 7.9). Introduces
   `pe-to-ke`. $\kv$, $\kvo$ and the equations `eq-ke-peg` and
   `eq-v-from-h` anchor here. The example is `ex-coaster`.

Cross references to other chapters are plain text in the book's own
wording: "Uniform Circular Motion and Gravitation" and "Falling Objects",
both of which the converter had flattened to `module:` links. The
references the book makes to its own figures and examples keep the book's
wording, "Figure 7.5", "Example 7.7", so the build links them.

Learning objectives, the section summary, the glossary term and the key
equations come out of the running text into the tables and the views. The
conceptual questions, the problems and the AP items go to the Exercises
document; nothing is inline, since the chapter has no Check Your
Understanding box and neither conceptual question is a short check beside a
passage.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| potential-energy | idea | lifting | the definition of the gravitational potential energy put into the object-Earth system, and why the word system is used |
| pe-reference-level | idea | lifting | the arbitrary zero and the two pairs of rungs of a ladder; the baseball AP item, whose potential energy is unknown |
| gravitational-potential-energy | result, eq-peg | converting | $\kdPEg = m\kg\kh$ and the 4.90 J of the cuckoo-clock weight; the dam, the pyramid, the kookaburra and the pendulum clock |
| path-independence-of-gravity | result | any-path | the television carried up the stairs and hoisted straight up; the conceptual question on lifting a book onto a shelf |
| pe-to-ke | result, eq-ke-peg | coaster | Example 7.7 and both of its parts; the toy car, the downhill skier and the yo-yo |
| stopping-force-from-energy | skill | landing | Example 7.6 and its discussion of the kangaroo |

The section leans on `work` and `joule` (7.1), `work-transfers-energy`,
`kinetic-energy` and `work-energy-theorem` (7.2), `weight` (4.3), and
`acceleration-due-to-gravity` and `free-fall` (2.7); the coverage rows mark
each of them as used where the text uses it.

## Figures

id · replaces · concepts · what moves or still · sliders · headline · graph
· 3D

1. `sim-cuckoo` · replaces Figure 7.5 (a) and (b), the cuckoo-clock weight
   raised and then lowered · potential-energy,
   gravitational-potential-energy · **moves**: the weight is wound up
   through the height $\kh$ against its weight $m\kg$ and then runs back
   down as the clock keeps time, which is a change that takes time, so the
   figure loops once up and once down and gets the transport; the lifting
   force $\kF$ is drawn on the way up and the energy bar beside the clock
   fills as the weight rises and empties as it falls · mass $m$ (0.1 to
   2.0 kg, default 0.500, ink), height $\kh$ (0.2 to 2.0 m, default 1.00,
   position) · "the weight is 0.62 m up: 3.04 J of the 4.90 J is stored,
   and the rest is still to be wound in" · the scene is vertical, so the
   graph stands beside it: $\kPEg$ against the height of the weight, a
   straight line of slope $m\kg$ with the weight's present height marked ·
   no. Readout: $\kdPEg = m\kg\kh$ with the book's numbers. Draws energy,
   position, force, acceleration.
2. `sim-ladder` · replaces nothing, so a **Sim** · pe-reference-level ·
   **still**: nothing travels; the figure answers its sliders and redraws,
   so it registers no cycle and carries no transport. A ladder stands
   against a wall with its rungs evenly spaced; two rungs are chosen and
   the difference in gravitational potential energy between them is
   bracketed, and a third slider moves the level at which the potential
   energy is called zero. Every rung's $\kPEg$ is relabelled as the zero
   level moves, while the bracketed difference between the chosen rungs
   never changes, which is the book's own point about the first two rungs
   and the last two · the lower rung and the upper rung (1 to 8, ink,
   counts), the height of the zero level (−2.0 to 3.0 m, default 0.0,
   position) · "between rungs 1 and 2 the climb stores 11.8 J, and between
   rungs 7 and 8 it stores the same 11.8 J, wherever the zero is put" ·
   graph beside the vertical ladder: $\kPEg$ against height, the same line
   shifted up or down by the zero level, with the two rungs marked and the
   difference bracketed on the axis · no. Readout: $\kdPEg = m\kg\kh$ for
   the chosen pair. Draws energy, position, acceleration (the readout writes
   $\kg$).
3. `sim-paths` · replaces Figure 7.6, the television carried up the stairs
   and hoisted straight up on a pulley · path-independence-of-gravity ·
   **moves**: both televisions travel at once, one up a flight of stairs
   and one straight up on the rope, and both arrive at the same landing;
   the journeys take time, so the figure loops through one trip and gets
   the transport, and the two energy bars grow at different rates and end
   at the same height · mass $m$ (5 to 40 kg, default 20, ink), the height
   of the landing $\kh$ (2.0 to 12.0 m, default 6.0, position), the run of
   the staircase (2.0 to 14.0 m, default 6.0, ink, a length of the scene) ·
   "the carried set has gone 7.4 m along its path and the hoisted set
   4.6 m, and both have gained 902 J" · none: the two paths and their two
   bars are the picture · no. Readout: $\kdPEg = m\kg\kh$ once, with the
   small line saying that the two path lengths differ while the two
   changes in potential energy do not. Draws energy, position,
   acceleration.
4. `fig-kangaroo` · Figure 7.7, the hopping kangaroo · **kept**: the
   discussion of Example 7.6 points the reader straight at it ("A
   kangaroo's hopping shows this method in action. (See Figure 7.7.)") and
   it shows the very thing the passage is about, a landing cushioned by
   bending legs. Photograph, with the book's caption and its credit clause.
   The CNXML gives the image a height and no width, so `widths` is empty
   and the app shows it at its natural size.
5. `sim-landing` · replaces nothing, so a **Sim** · stopping-force-from-energy
   · **moves**: the person falls the height $\kh$, lands, and the knees
   bend through the distance $\kd$ while the floor's force $\kF$ brings the
   kinetic energy to zero; the fall and the stop are a motion in time, so
   the figure loops through one landing and gets the transport, with the
   stop drawn slowly enough to be seen · height of the fall $\kh$ (0.5 to
   5.0 m, default 3.00, position), the distance the knees bend $\kd$ (0.005
   to 0.75 m, default 0.005, position), mass $m$ (20 to 120 kg, default
   60.0, ink) · "the knees bend 0.500 cm, so the floor takes 1,760 J away
   over that distance and pushes with 3.53 × 10⁵ N, 600 times the person's
   weight" · graph below the scene: the stopping force against the
   distance the knees bend, the hyperbola $\kF = m\kg\kh/\kd$, with the
   weight $m\kg$ drawn as a dashed level so the reader can read off how
   many times the weight the landing costs, the stiff landing and the
   0.5 m bend both marked · no. Readout: $\kF = -m\kg\kh/\kd$ with the
   book's numbers, and a small line on the hundredfold drop a bending
   motion of 0.5 m gives. Draws energy, position, force, acceleration.
6. `sim-coaster` · replaces Figure 7.8, the roller coaster running down the
   hill · pe-to-ke, gravitational-potential-energy · **moves**: the car
   runs from the top of the hill to the level track at the bottom, which is
   a motion in time, so the figure loops through one descent and gets the
   transport; the car's speed grows as the hill falls away, and the energy
   bar beside the track empties its gravitational potential energy into
   kinetic energy · the height of the hill $\kh$ (5.0 to 40.0 m, default
   20.0, position), the initial speed $\kvo$ (0 to 10.0 m/s, default 0,
   velocity), mass $m$ (100 to 2,000 kg, default 500, ink, which changes
   both energies and leaves the speed alone) · "20.0 m down the hill the
   car is doing 19.8 m/s, and the 98.0 kJ the car has given up in height it
   now carries as motion" · graph below the horizontal scene: energy
   against the height fallen, the gravitational potential energy falling to
   zero, the kinetic energy rising to meet it and their sum flat across the
   top · no. Readout: $\kv = \sqrt{2\kg|\kh| + \kvo^2}$ with the numbers,
   and a small line saying that the mass cancels, so the 5.00 m/s start
   adds only 0.6 m/s at the bottom. Draws energy, position, velocity,
   acceleration.
7. `sim-marble` · replaces Figure 7.9, the marble rolling down a ruler
   propped on a book · pe-to-ke · **moves**: the marble is released on the
   ruler, rolls down and crosses one metre of the level surface while a
   stopwatch runs, which is the investigation's own measurement and has a
   time in it, so the figure loops through one run and gets the transport ·
   the release position along the ruler $\kd$ (5 to 30 cm, default 10,
   position), the angle of the incline (5º to 25º, default 15º, ink) ·
   "released at 10 cm the marble drops 2.6 cm, reaches 0.71 m/s and takes
   1.41 s to cross the metre" · graph below the scene: the square of the
   speed on the level against the release position, the straight line
   through the origin the investigation asks the reader to plot, with the
   three positions the book names (10, 20 and 30 cm) marked and the present
   run's point filled · no. Readout: $\kv = \sqrt{2\kg|\kh|}$ with the
   numbers, and a small line saying that a straight line on the plot is
   what shows the kinetic energy at the bottom to be proportional to the
   potential energy at the release point. Draws energy, position, velocity,
   acceleration.

Every sketch the section prints is replaced. The one photograph, the
kangaroo, is kept and none is dropped: the section has no splash image.
Two of the section's figures sit inside exercises and are unnumbered, as
the book leaves every figure inside an exercise: the hydroelectric dam of
the first problem and the toy car on its curved track of the fifth. Both
are photographs, so each rides on its exercise card with its alt text and
its caption including the credit clause, as the graph of 2.8 and the paths
of 3.2 do, and neither needs a row of its own in the figures table.

Extra simulations (rule 15), thought through and judged:

- A pair of identical masses, one lifted straight and one dragged up a
  frictionless ramp, with the work done and the force compared: a real
  view, but it is the ramp of 7.5 and the conservative forces of 7.4, and
  the televisions of `sim-paths` already make the path-independence point
  with the book's own scene. Left.
- A drop tower that plots $\kv$ against $\kh$ for several masses at once to
  show the curves lying on top of each other: the mass slider of
  `sim-coaster` already shows the mass cancelling, and a second figure that
  says the same thing is animation rather than insight. Left.
- The chapter-wide energy-accounting sim that runs any of the chapter's
  scenes against one bar chart, which `exploration.md` proposes: it belongs
  to no one section, so it is not built here.

None of the extra simulations is built; `sim-ladder` and `sim-landing` are
not extras but the figures rule 14 asks for, since each is the one picture
of an idea the section introduces and neither replaces anything the book
draws.

## Exercises

- No Check Your Understanding box anywhere in the chapter, and neither
  conceptual question is a short check beside a passage, so nothing is
  placed inline. All nine items go to the Exercises document.
- 2 conceptual questions, `cq1` and `cq2`, Understand, neither keyed, each
  with an AI-marked suggested approach: `cq1` (fs-id1415865, the coaster
  that rolls 20 m uphill, stops and comes back to the same elevation)
  citing `coaster`, `cq2` (fs-id1759147, whether the work done lifting a
  book onto a shelf depends on the path, the time, the height or the mass)
  citing `any-path`.
- 3 AP items of the section's own. `ap1` (fs-id3349229, the 1.0 kg baseball
  at 10 m/s, keyed (d)), Understand, a graded choice with the book's four
  options, since the book keys it; it turns on the reference level, because
  the potential energy is unknown until a height is named. `ap2`
  (fs-id1258975, the potato at 15.8 m/s and 4.00 m up), Apply, unkeyed, so
  it is kept as an open item with the book's four options printed in the
  prompt and an AI-marked approach, never as a graded choice. `ap3`
  (fs-id2335813, the 120-g yo-yo at 0.9 m/s and how high it rises on Earth
  and on the Moon), Apply, keyed with three numbers, so a multi answer.
- 1 AP item held from 7.4 with `source_section: "7.4"`: `ap4`
  (fs-id2987264, the pendulum clock whose three masses drop 1.3 m in a
  week), Apply, keyed (d), a graded choice. It is $m\kg\kh$ and nothing
  else, which is this section's, so rule 12 sets it here; 7.4's
  `exercise_notes` says so as well.
- 3 problems keyed and kept: `p1` (fs-id1942940, the lake behind the
  hydroelectric dam and the fusion bomb, multi, with the dam photograph on
  its card), `p3` (fs-id1796084, the kookaburra raising a snake and itself,
  multi), `p5` (fs-id2097867, the 100-g toy car coasting 0.180 m up the
  frictionless slope, number, with the toy-car photograph on its card and
  the book's own working as the solution).
- 3 problems left out, having no answer in the book's key: 2
  (fs-id1332867, the Great Pyramid of Cheops), 4 (fs-id2189211, the ratio
  of $\kdPE$ to $\kKEi$ for the coaster) and 6 (fs-id2175922, the downhill
  ski race).
- No generated questions: every node of the section has a book exercise
  that tests it.
- Weights (rule 20): `ap1` gives `pe-reference-level` its full value and
  `kinetic-energy` weight 1, since the kinetic energy is one multiplication
  and the point of the item is the unknown potential energy; `ap3` and `p5`
  give `pe-to-ke` the full value and `gravitational-potential-energy`
  weight 2, since the conversion is the work and the expression for the
  potential energy is a step inside it; `cq2` gives
  `path-independence-of-gravity` the full value and
  `gravitational-potential-energy` weight 2.

## Views

- Formulas: the four equations of the section already in `chapter.json`,
  three of them important and the lifting step `eq-w-lift` not.
- Definitions: the eleven variables of the section; the one glossary term,
  gravitational potential energy.
- Concept map: the six nodes above with their thirteen edges into 2.7, 4.3,
  7.1 and 7.2.

## Colour

The page binds energy, position, force, velocity and acceleration. Every
sim draws an energy, in a bar, a graph or a readout; five bracket a height,
a drop or a distance in the position hue; the cuckoo clock and the landing
draw the lifting force and the floor's force; the coaster and the marble
carry a speed; and $\kg$ is stated in every readout that multiplies by it.
Mass, the angle of the marble's incline, the run of the staircase and the
count of the ladder's rungs stay untyped and in ink, as the built chapters
keep them.

## Wanted at chapter level

- variables `PE_g` → 7.3-lifting
- variables `m` → 7.3-lifting
- variables `g` → 7.3-lifting
- variables `h` → 7.3-lifting
- variables `W` → 7.3-lifting
- variables `F` → 7.3-lifting
- variables `d` → 7.3-lifting
- variables `ΔPE_g` → 7.3-converting
- variables `KE` → 7.3-converting
- variables `v` → 7.3-coaster
- variables `v0` → 7.3-coaster
- equations `eq-w-lift` → 7.3-lifting
- equations `eq-peg` → 7.3-converting
- equations `eq-ke-peg` → 7.3-coaster
- equations `eq-v-from-h` → 7.3-coaster
- The variable row for `d` reads "the distance through which the force
  acts, which for the landing is the distance the knees bend"; it is first
  written in $\kW = \kF\kd = m\kg\kh$ at `lifting` and is the knee bend at
  `landing`, and anchoring it at `lifting`, where the symbol is first
  given its meaning, is the judgement here.

**Decided in the chapter pass, 2026-09-11.** Every anchor asked for above is
written into `ch07/chapter.json`, the eleven variable rows and the four equation
rows, and the judgement on `d` is accepted as the plan argues it: the row is
anchored at `lifting`, where $\kW = \kF\kd = m\kg\kh$ first gives the symbol
its meaning, and not at `landing`, where the same symbol is the knee bend.
