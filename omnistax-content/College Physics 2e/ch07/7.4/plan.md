# Plan: 7.4 Conservative Forces and Potential Energy (m42149)

Source: `source.md`, converted from the CNXML module. Status: built today,
2026-09-11, without a review stop, on Chen's instruction to finish the book
in one job.

The section that turns the work done by gravity and by a spring into a
stored quantity. Three sketch figures and no photograph, one boxed note,
one worked example, nine AP items of its own (four keyed), four conceptual
questions and two problems (one keyed). The PhET note, Energy Skate Park,
is dropped per the chapter config and named in `notes`. The chapter has no
Check Your Understanding box anywhere, so nothing of the book's own fills
the inline place. One page (rule 11).

## Sub-concepts (page headers)

The book gives three headers of its own; the page keeps them and splits the
middle one, since the spring and the generalisation beyond springs are two
ideas and the second carries its own figure.

1. `conservative-forces` **Potential energy and conservative forces**
   (book: the opening paragraph on forces whose work depends only on the
   end points, the wound toy, the egg timer and the watch, and the boxed
   note Potential Energy and Conservative Forces). Introduces
   `conservative-force`.
2. `spring-energy` **The potential energy of a spring** (book: the header
   Potential Energy of a Spring, the recall of Hooke's law, the average
   force $\kk\kx/2$, the work $\kWs$, the area under the graph, and the
   definition of $\kPEs$; Figure 7.10). Introduces
   `elastic-potential-energy`. The variables $\kk$, $\kx$, $\kF$, $\kd$,
   $\kWs$ and $\kPEs$ and the equations `eq-ws` and `eq-pes` anchor here.
3. `any-deformation` **Potential energy stored in any deformation** (book:
   the paragraph that carries ${\kPEs} = \tfrac{1}{2}\kk\kx^2$ beyond the
   spring to any elastic medium and gives the general definition of
   potential energy; Figure 7.11, the guitar string). Reinforces
   `elastic-potential-energy` and `potential-energy`.
4. `conservation` **Conservation of mechanical energy** (book: the header
   Conservation of Mechanical Energy and the whole derivation, from the
   work-energy theorem through $\kWc = -\kdPE$ and $\kdKE + \kdPE = 0$ to
   both forms of the principle, and the definition of mechanical energy).
   Introduces `mechanical-energy` and `conservation-of-mechanical-energy`.
   The variables $\kWnet$, $\kWc$, $\kdKE$, $\kdPE$, $\kKEi$, $\kKEf$,
   $\kPEi$, $\kPEf$ and $\kPEtot$ and the equations `eq-wc-pe`,
   `eq-ke-pe-zero` and `eq-cme` anchor here.
5. `using-conservation` **Using conservation of mechanical energy** (book:
   Example 7.8, the toy car propelled by a compressed spring, with Figure
   7.12 inside it, and the closing paragraph on not calculating the work of
   a conservative force and not caring about the path). Introduces
   `solve-with-mechanical-energy`. The variables $\kvi$, $\kvf$, $\khi$,
   $\khf$, $\kxi$, $\kxf$, $m$ and $\kg$ and the equation `eq-cme-full`
   anchor here; the example is `ex-toy-car`.

Cross references to other chapters and sections are plain text, as the
chapter config decided: "Elasticity: Stress and Strain" and "Kinetic Energy
and the Work-Energy Theorem". The converter's flattened figure references
are written as the book prints them, "Figure 7.10", "Figure 7.10(c)",
"Figure 7.11" and "Figure 7.12", and the reference to the worked example is
written "Example 7.8"; the build links the figure numbers.

Learning objectives, the section summary, the glossary and the key
equations come out of the running text into the tables and the views.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| conservative-force | idea, eq-wc-pe | conservative-forces | the definition and its boxed note; CQ 1 and CQ 4; the daily-system AP item |
| elastic-potential-energy | result, eq-pes | spring-energy | Figure 7.10 and its triangle; Example 7.8; the subway-bumper problem; the dart-gun AP item and the spring AP item taken from 7.1 |
| mechanical-energy | idea | conservation | the definition $\kKE + \kPEtot$; CQ 3; the two-mass AP item |
| conservation-of-mechanical-energy | result, eq-cme | conservation | the derivation and both boxed forms; Example 7.8; the catapult AP item |
| solve-with-mechanical-energy | skill | using-conservation | Example 7.8 worked twice; the catapult and water-tower AP items; the subway-bumper problem |

`elastic-potential-energy` is the concept 16.1 was built against, and the
chapter prep moved its `section` to 7.4, where the book introduces it. This
section's coverage introduces it and 16.1's row reinforces it, which is
already how 16.1 reads.

The section leans on `potential-energy`, `gravitational-potential-energy`
and `path-independence-of-gravity` (7.3), `work`, `work-as-area`,
`kinetic-energy` and `work-energy-theorem` (7.1 and 7.2), `hookes-law` and
`force-constant` (16.1 and 5.3) and `free-fall-kinematics` (2.7); the
coverage rows mark each as used where the text uses it.

## Figures

id · replaces or Sim · concepts · what moves or still, and why · sliders ·
headline · graph · 3D

1. `sim-spring-energy` · replaces Figure 7.10 (a), (b) and (c), which are
   sub-figures under one number and so are one row with one original ·
   elastic-potential-energy, conservative-force · **still**: the section's
   own point is that the stored energy depends only on the stretch or
   squeeze in the final configuration and not on how the spring got there,
   so the figure answers its sliders and nothing else; the reader does the
   stretching by dragging $\kx$, and a transport would promise a motion the
   idea has not got. (16.1's dart gun is the moving treatment of the same
   spring, and it is a different idea there, the release.) · force constant
   $\kk$ (50 to 500 N/m, step 10, default 250, stiffness) and stretch
   $\kx$ (0 to 0.20 m, step 0.005, default 0.040, position), which are
   Example 7.8's numbers, so the figure opens on the spring of the worked
   example · "stretched by 0.040 m a spring of force constant 250 N/m
   pulls back with 10.0 N, and the work done on it, ½kx² = 0.200 J, is the
   shaded triangle" · graph below the horizontal scene: the applied force
   against the stretch, a line of slope $\kk$ with the triangle under it
   shaded in the energy hue · no. Readout: $\kPEs = \tfrac{1}{2}\kk\kx^2$
   with the numbers; small line on the average force $\kk\kx/2$ acting
   through $\kx$, which is the book's other route to the same answer.
   Draws energy, force, position, stiffness.
2. `sim-guitar` · replaces Figure 7.11 (the plucked guitar string) ·
   elastic-potential-energy, conservation-of-mechanical-energy,
   mechanical-energy · **moves**: the book's caption says the string
   oscillates back and forth and the potential energy is converted to
   kinetic energy and back, which is a time in the idea, so the string
   swings through its pluck endlessly and the two energy bars beside it
   trade height while their total stays level; an endless oscillation has
   no finite period to scrub, so the transport is play, stop and speed ·
   the pluck $\kx$ (0.002 to 0.02 m, step 0.001, default 0.010, position)
   and the string's force constant $\kk$ (200 to 2,000 N/m, step 50,
   default 800, stiffness) · "the string is 0.006 m from its rest line, so
   0.014 J is stored in it and 0.026 J is kinetic; the total stays 0.040 J"
   · no separate graph: the two bars are the reading and the string is the
   scene · no. Readout: $\kKE + \kPEs$ with the live numbers summing to the
   constant total. The small loss to sound the book's caption mentions is
   not drawn, since the section's whole point is the total that stays put
   when only conservative forces act, and the loss is 7.5's subject; the
   caption says as much in the book's own terms. Draws energy, position,
   stiffness.
3. `sim-toy-car` · replaces Figure 7.12 (the toy car and its two paths to
   the same height) · conservation-of-mechanical-energy,
   solve-with-mechanical-energy, elastic-potential-energy,
   gravitational-potential-energy · **moves**: the car is released by the
   spring, runs the level, and climbs to the shelf, which is a journey with
   a time in it; two cars run at once, one up the gradual rise and one down
   through the dip and the loop, and they arrive at the same speed at
   different moments, which is what the book's figure is for; the loop runs
   until the slower car arrives and then holds, so the scrubber is there ·
   the compression $\kxi$ (0.01 to 0.08 m, step 0.005, default 0.0400,
   position), the force constant $\kk$ (100 to 500 N/m, step 10, default
   250, stiffness) and the height of the shelf $\khf$ (0 to 0.25 m, step
   0.01, default 0.18, position); the mass stays the example's 0.100 kg ·
   "t = 0.62 s · the car on the gradual rise is 0.180 m up and moving at
   0.687 m/s, and the car that went round the loop arrives at the same
   speed" · below the scene, a stacked bar per car showing
   $\kPEs$, $\kKE$ and $\kPEg$ against the constant total · no. Readout:
   $\tfrac{1}{2}\kk\kxi^2 = \tfrac{1}{2}m\kvf^2 + m\kg\khf$ with the
   numbers; small line on part (a), the speed at the bottom of the slope.
   Draws energy, velocity, position, stiffness, acceleration.
4. `sim-double` · Sim, replacing nothing in the book · elastic-potential-
   energy · **still**: it compares two configurations and has no time in it
   · the force constant $\kk$ (50 to 500 N/m, step 10, default 250,
   stiffness) and the smaller compression $\kx$ (0.01 to 0.06 m, step
   0.005, default 0.020, position) · "compressing by 0.040 m stores 0.200
   J, four times the 0.050 J that 0.020 m stores, because the work is the
   area of a triangle whose base and height both double" · the two
   triangles are the graph, the larger one ruled into four copies of the
   smaller · no. Readout: the ratio $\tfrac{1}{2}\kk(2\kx)^2 \big/
   \tfrac{1}{2}\kk\kx^2 = 4$ with the numbers. Draws energy, force,
   position, stiffness.

No photograph stands in this section, so none is kept and none is dropped.
No figure of the section serves an exercise: the AP item taken from 7.1
points at Figure 7.10(c), which `sim-spring-energy` carries with the book's
image as its original, so the reference lands on the live figure.

Extra simulations (rule 15), thought through and judged:

- **Two compressions side by side** (built, `sim-double`). The quadratic in
  ${\kPEs} = \tfrac{1}{2}\kk\kx^2$ is what the spring AP item held from 7.1
  and the dart-gun AP item both turn on, and a single triangle that grows
  as one slider moves makes the reader remember a number rather than see a
  ratio. Two triangles at once, the larger ruled into four copies of the
  smaller, shows why doubling the squeeze costs four times as much, which
  is a view no required figure gives. Built.
- A diving board bending under a swimmer, with the board's potential
  energy, the swimmer's gravitational potential energy and the kinetic
  energy traded between them (conceptual question 2). It would be a
  handsome picture, but the toy car already shows a spring's energy going
  to kinetic energy and then to height, and the board adds no new term to
  the account. Left.
- A wound clock spring unwinding through an escapement, for the egg timer
  and the watch of the opening paragraph. It illustrates the words and
  teaches nothing the spring figure does not. Left.
- A path-chooser in which the reader drags a route between two heights and
  watches the work against gravity come out the same: this is 7.3's
  `path-independence-of-gravity` and its Figure 7.6, already built there.
  Left.

## Exercises

- No Check Your Understanding box anywhere in the chapter. One conceptual
  question, "What is a conservative force?", is a plain Remember check on
  the passage beside it, so it is set inline after `conservative-forces`,
  as the chapter config allows; everything else is in the Exercises
  document.
- 4 conceptual questions, `cq1` to `cq4`, unkeyed as the book leaves them,
  each an open item with an AI-marked suggested approach: `cq1` (what is a
  conservative force, Remember, inline after `conservative-forces`), `cq2`
  (the diving board, Understand, citing `any-deformation`), `cq3` (define
  mechanical energy, Understand, citing `conservation`) and `cq4` (the
  relationship of potential energy to conservative force, Understand,
  citing `conservative-forces`).
- 9 AP items. Eight are the section's own: `ap1` (fs-id1843533, the two
  4.0 kg masses on a compressed spring, unkeyed, kept as an open item with
  the book's four options in the prompt and an AI-marked approach), `ap2`
  (fs-id1632979, the catapult, keyed "20 m high, 20 m/s", a multi answer),
  `ap3` (fs-id2319062, what information you need, unkeyed, open), `ap4`
  (fs-id2328776, the dart gun's two settings, keyed "(a)", a choice),
  `ap5` (fs-id2524398, a daily system with internal potential energy,
  unkeyed, open), `ap6` (fs-id1360944, the water tower, unkeyed, open, an
  estimate), `ap7` (fs-id1759232, the pocket watch, keyed "(c)", a choice)
  and `ap8` (fs-id1811319, the Chinese water clocks, unkeyed, open). The
  ninth, `ap9` (fs-id2713956), is taken from 7.1 with
  `source_section: "7.1"`: it compresses a spring by $\kx$ and then by
  $2\kx$ and needs ${\kPEs} = \tfrac{1}{2}\kk\kx^2$, which is this
  section's; it is keyed "(d)" and is a choice, and its prompt names
  Figure 7.10(c) as the book's link does.
- Held for another section: `fs-id2987264`, the pendulum clock whose three
  masses drop 1.3 m in a week, is $m\kg\kh$ and nothing else, which is
  7.3's, so it goes there with `source_section: "7.4"` and both sections'
  `exercise_notes` say so.
- 1 problem kept: `p1` (fs-id1088644, the subway train stopped by a spring
  bumper, keyed $7.81\times10^5$ N/m, a number).
- 1 problem left out: fs-id1628356, the pogo stick, which has no answer in
  the book's key. It is named in `notes` and in `exercise_notes`. It is
  also the one item of the section that points at the Problem-Solving
  Strategies for Energy note of 7.6, so no exercise of this section carries
  that reference.
- No generated questions: every concept node of the section has a book
  exercise that tests it.
- Weights: `cq2` gives `elastic-potential-energy` its full value and
  `potential-energy` and `conservative-force` weight 1, since the board is
  named as an elastic system and the rest is context; `cq4` gives
  `conservative-force` its full value and `potential-energy` weight 1;
  `ap1` gives `mechanical-energy` and `elastic-potential-energy` their full
  value and `kinetic-energy` weight 2, since the two speeds are the easy
  half of the sum; `ap2` gives `gravitational-potential-energy` weight 2,
  since the height the rock reaches is read off the spring's energy; `ap3`
  gives `elastic-potential-energy` its full value and `gravitational-potential-
  energy` and `kinetic-energy` weight 2, since the question asks what each
  needs; `ap5` gives `potential-energy` its full value and
  `elastic-potential-energy` weight 2, since the reader may name a system of
  any kind; `ap6` gives `gravitational-potential-energy` its full value and
  `solve-with-mechanical-energy` weight 2, since the estimate is the work;
  `ap7` gives `elastic-potential-energy` its full value and
  `gravitational-potential-energy` weight 1, since the mass-raising options
  are only the alternatives it rejects; `ap8` gives
  `gravitational-potential-energy` its full value and `potential-energy`
  weight 1; `p1` gives `elastic-potential-energy` its full value and
  `kinetic-energy` weight 2.

## What the one fix pass changed

The four figures were screenshotted in light and dark at their defaults and
again with every slider at its end of the range, and one pass of fixes
followed. In Figure 7.10 the strip and the stretch bracket were dropped
clear of the plate, the label on the shaded triangle was moved beside the
triangle while it is narrow, the scene was drawn at a smaller scale so that
the fully stretched spring and its force arrow stay on the canvas, and the
slope of the line is now named in the empty corner above it. In the sim the
springs were lengthened and spaced so that the doubled compression still
shows coils, the graph was raised to leave room for its axis title, and the
four equal energies are labelled at the centroids of the four triangles
rather than beside them. In Figure 7.11 the canvas was shortened and the
pluck is bracketed on the apex itself, its label set over the panel colour
so the string does not run through the words. In Figure 7.12 the whole
scene was lifted so that the canvas is not half empty, the launcher was
given room for the largest compression the slider allows and its spring now
returns to its natural length the moment the car leaves it, the two paths
are named in a legend above the launcher instead of beside the track, and
the car's velocity arrow was shortened and dropped so that it clears the
headline when the car is on the highest shelf.

## Views

- Formulas: the six equations of the section already in `chapter.json`,
  `eq-pes`, `eq-wc-pe`, `eq-cme` and `eq-cme-full` important, `eq-ws` and
  `eq-ke-pe-zero` the steps of the derivation.
- Definitions: the twenty-three variables of the section; the five glossary
  terms (conservative force, potential energy, potential energy of a
  spring, conservation of mechanical energy, mechanical energy).
- Concept map: the five nodes above with their edges into 5.3, 7.1, 7.2,
  7.3 and 16.1.

## Colour

The page binds energy, position, stiffness, force, velocity and
acceleration. Every figure draws an energy, since energy is what the
section is about; the stretch, the compression and the height are positions
and are bracketed in that hue; the force constant carries the stiffness hue
on three sliders; the applied force $\kk\kx$ is drawn in the force hue in
the spring and the doubling figures; the car's speed is drawn in the
velocity hue and $\kg$ is stated in the toy car's readout, which is the
acceleration hue. The masses and the counts stay in ink.

## Wanted at chapter level

- variables `PE` → 7.4-conservation
- variables `PE_s` → 7.4-spring-energy
- variables `k` → 7.4-spring-energy
- variables `x` → 7.4-spring-energy
- variables `F` → 7.4-spring-energy
- variables `d` → 7.4-spring-energy
- variables `W_s` → 7.4-spring-energy
- variables `W_c` → 7.4-conservation
- variables `W_net` → 7.4-conservation
- variables `ΔKE` → 7.4-conservation
- variables `ΔPE` → 7.4-conservation
- variables `KE_i` → 7.4-conservation
- variables `KE_f` → 7.4-conservation
- variables `PE_i` → 7.4-conservation
- variables `PE_f` → 7.4-conservation
- variables `v_i` → 7.4-using-conservation
- variables `vf` → 7.4-using-conservation
- variables `h_i` → 7.4-using-conservation
- variables `h_f` → 7.4-using-conservation
- variables `x_i` → 7.4-using-conservation
- variables `xf` → 7.4-using-conservation
- variables `m` → 7.4-using-conservation
- variables `g` → 7.4-using-conservation
- equations `eq-pes` → 7.4-spring-energy
- equations `eq-ws` → 7.4-spring-energy
- equations `eq-wc-pe` → 7.4-conservation
- equations `eq-ke-pe-zero` → 7.4-conservation
- equations `eq-cme` → 7.4-conservation
- equations `eq-cme-full` → 7.4-using-conservation

**Decided in the chapter pass, 2026-09-11.** Every anchor asked for above is
written into `ch07/chapter.json`, the twenty-three variable rows and the six
equation rows.

Two things the plan did not ask for were put right at the same time. The card
for `cq1` had nowhere to render, since the item is placed inline after the span
`conservative-forces` and `text.html` carried no host, so a
`<div class="exercises" data-place="conservative-forces"></div>` now closes that
section, as 7.7 and the rest of the chapter do it. And `cq3`, which asks what
the relationship of mechanical energy to nonconservative forces is, now also
tags `nonconservative-force`, which 7.5 introduces and which is a built node
now that the whole chapter stands; the tag carries a weight of 1, because the
question is about mechanical energy and only names the other idea.
