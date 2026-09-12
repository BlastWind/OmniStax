# Plan: 7.1 Work: The Scientific Definition (m42146)

Source: `source.md`, converted from the CNXML of module m42146. Status:
built 2026-09-11 without a review stop, on Chen's instruction to finish the
book in one job; the per-section stop of rule 2, the plan review of rule 5
and the user picks of rule 15 are replaced by this file, written before the
section was built and left for review after, as Chapters 1 to 6 did it.

The section where the book stops adding up forces and starts adding up
energy. One sketch figure (Figure 7.2, the five examples of work), no
photograph, one boxed note (What is Work?), one worked example, three
conceptual questions, five AP items of its own and eight problems, four of
them keyed. The chapter has no Check Your Understanding box anywhere. One
page (rule 11).

## Sub-concepts (page headers)

The book prints two headers of its own, What It Means to Do Work and
Calculating Work, and runs the five cases of Figure 7.2 and the worked
example under them. Four blocks, one per idea:

1. `definition` **What it means to do work** (book: the scientific
   definition against the everyday one, the two forms of $\kW =
   \kF\kd\cos\theta$, the note What is Work?, and Figure 7.2). The
   variables $\kW$, $\kF$, $\kd$ and $\theta$ and the equation `eq-work`
   anchor here.
2. `work-cases` **When a force does no work, and when the work is
   negative** (book: the paragraphs that walk through Figure 7.2(b) to
   (e), the briefcase held still, the briefcase carried on the level, the
   briefcase carried up stairs and the briefcase lowered into a
   generator).
3. `joule-unit` **Work and energy in joules** (book: the first paragraph
   of Calculating Work, the newton-meter, the joule and the apple lifted
   about a meter). The equation `eq-joule` and the variable $m$ anchor
   here.
4. `calculating` **Calculating the work done by a constant force** (book:
   Example 7.1, the lawn mower pushed 25.0 m, and its comparison with a
   day's food energy). The example is `ex-mower`.

The cross reference to Gravitational Potential Energy, which the converter
flattened to `[Gravitational Potential Energy](module:m42148)`, is written
as the book prints it, in plain text, since that section is in this chapter
and is not a figure the build links.

Learning objectives, the section summary and the glossary come out of the
running text into the tables and the views. The chapter has no Check Your
Understanding box, so nothing of the book's own fills the inline place, and
no conceptual question of this section is short enough to stand inline: all
three ask the reader to invent an example and explain it, which is work for
the Exercises document.

## Concept nodes (already in `book.json`)

| id | kind | introduced in | evidence |
|---|---|---|---|
| work | idea, eq-work | definition | the definition, the note What is Work?, Figure 7.2, Example 7.1, the mule-and-barge item held from 7.6 |
| work-sign | result | work-cases | Figure 7.2(b) to (e); the three conceptual questions |
| joule | idea, eq-joule | joule-unit | the newton-meter and the joule; Example 7.1's conversion to kilocalories; problem 1 |
| calculate-work | skill | calculating | Example 7.1; problems 1, 3, 5 and 7 |

`work` was a placeholder pointing at this section since Chapter 16 was
built, and it is a built node now. The section leans on `force` and
`net-external-force` (4.1 and 4.3), `displacement` (2.1),
`components-from-magnitude-angle` (3.3), `vector` (2.3), `derived-units`
and `unit-conversion` (1.2 and 1.3), all of which the coverage rows mark
as used where the text uses them.

## Figures

id · replaces · concepts · what moves · sliders · headline · graph · 3D

1. `sim-work` · replaces Figure 7.2 (the five examples of work, (a) to
   (e), which the bundle prints as one image and which are sub-figures
   under one number rather than a fold) · work, work-sign,
   calculate-work · **moves**: a lawn mower is pushed along level ground
   and travels the whole displacement $\kd$ once per loop while the work
   accumulates, which is a quantity growing as a clock runs, so it takes
   the transport and the scrubber · the force $\kF$ (0 to 150 N, default
   75.0, force), the angle $\theta$ between the force and the displacement
   (0º to 180º, default 35º, ink), the displacement $\kd$ (0 to 40 m,
   default 25.0, position) · "the mower has gone 12.5 m of 25.0 m, and the
   force has done 768 J of work on it so far" · graph below the strip: the
   work done against the distance travelled, a straight line of slope
   $\kF\cos\theta$ that runs downward when the angle passes 90º · no.
   Readout: $\kW = \kF\kd\cos\theta$ with the numbers; small line naming
   which of the book's five cases the sliders are standing in. Draws
   force, position, energy.

   The one figure reaches every case the book draws: the default is (a),
   the lawn mower of Example 7.1 pushed with 75.0 N at 35º; $\kd = 0$ is
   (b), the briefcase held still, where the force does no work because
   nothing moves; $\theta = 90º$ is (c), the briefcase carried on level
   ground, where the force is perpendicular to the motion and $\cos\theta
   = 0$; an angle between 0º and 90º is (d), the briefcase carried up
   stairs, where the force has a component along the motion; and $\theta =
   180º$ is (e), the briefcase lowered into a generator, where the work is
   negative and energy leaves the briefcase. Sweeping one angle slider
   through the five cases is what print could not do, so the five drawings
   become one figure rather than five.
2. `sim-joule` · new, a Sim, since the book prints no figure for the size
   of a joule · joule, calculate-work · **still**: the figure answers its
   two sliders and has no time in it, so it registers no cycle and carries
   no transport · the mass lifted $m$ (0.05 to 100 kg, default 0.100,
   ink, since mass is untyped) and the height it is lifted through $\kd$
   (0.2 to 20 m, default 1.00, position) · "lifting 0.100 kg through
   1.00 m takes 0.98 J, which is about one joule" · a ladder of energies
   in powers of ten rather than axes, from 0.1 J to 10 MJ, with the apple
   at 1 J, Example 7.1's push of the lawn mower at 1536 J, one food
   calorie at 4186 J and a day's food energy at 10 MJ marked on it, and
   the work the sliders set placed among them · no. Readout: $\kW =
   \kF\kd\cos\theta$ with $\kF = mg$ and $\theta = 0$, the numbers
   substituted; small line giving the same energy in kilocalories and as a
   fraction of a day's food, which is what the Discussion of Example 7.1
   does with 1536 J. Draws force, position, energy.

   The book's own sentence, that one joule "would lift a small 100-gram
   apple a distance of about 1 meter", is the default, and the ladder is
   the shape 1.3 used for the range of lengths.

Every book figure of the section's narrative is a sketch and is replaced.
The section has no photograph to keep or drop.

Figures that serve exercises, kept on the exercise cards as the book's own
images rather than redrawn, as the diagrams inside the exercises of 3.2 and
4.3 are: the man pushing a crate up a ramp (`Figure_08_01_02a-7069.jpg`, on
`p3`), copied once into `media/ch07/`. The book prints no width for it, so
the card shows it at its natural size. The boy pulling his sister in a
wagon and the rescue sled on the 60º slope belong to problems the book does
not key, so both problems are left out and neither image is copied. The
rocket-payload table and the crane graph belong to the two AP items held
for 7.2 and travel with them.

Extra simulations (rule 15), considered and judged:

- **A work account that adds the work done by each of several forces on
  one object**, the elevator car of problem 3 with its cable, its weight
  and friction: a real view, but the net work of several forces is 7.2's
  own idea and its Figure 7.3, and building it here would run ahead of the
  book. **Left.**
- **The area under a graph of $\kF\cos\theta$ against $\kd$**: this is
  Figure 7.3 of 7.2, which that section builds, and `sim-work` already
  carries a graph of the work against the distance. **Left.**
- **The briefcase carried on level ground, with the muscles doing work
  against one another while no work is done on the briefcase**: the text
  explains it in two sentences and there is nothing to watch that
  `sim-work` does not already show at $\theta = 90º$. **Left.**

None built.

## Exercises

- Nothing inline: the chapter prints no Check Your Understanding box, and
  each of the three conceptual questions asks for an example the reader
  invents, which belongs in the Exercises document.
- 3 conceptual questions, `cq1` to `cq3` (fs-id2189314, fs-id1268060,
  fs-id1913046), Understand, none keyed, each with an AI-marked suggested
  approach, citing `definition`, `work-cases` and `work-cases`.
- 2 AP items of the section's own, both unkeyed and both open items with
  an AI-marked suggested approach: `ap3` (fs-id1277250, design an
  experiment with a cart track, a cart, masses and a position-sensing
  pulley) and `ap4` (fs-id1271091, the same with two carts and a piece of
  carpet), Create and Create.
- 2 AP items taken from 7.6 with `source_section: "7.6"`, since both test
  the scientific definition of work and nothing else and 7.6 introduces
  neither: `ap1` (fs-id772532, the mule pulling a barge with 1200 N at 20º
  for 10 km, keyed (b) 11 MJ, kept as a graded choice with the book's four
  options) and `ap2` (fs-id2338574, describe an instance today in which
  you did work and calculate how much, unkeyed, an open item with an
  AI-marked approach). Both sections' `exercise_notes` say so.
- 3 AP items of the section's own held for later sections, and this
  section's `exercise_notes` names each: `fs-id2527597` (the force a
  rocket engine exerts on a 3.0-kg payload, read off a table of distance
  against final velocity) goes to 7.2 with its table, since it is the
  work-energy theorem; `fs-id2714107` (the crane whose force ramps up,
  holds and winds down over 60 m) goes to 7.2 with its graph, since it is
  the work done by a varying force as the area under a force-distance
  graph; and `fs-id2713956` (compressing a spring by $x$ and then by $2x$)
  goes to 7.4, since it needs ${\text{PE}}_s = \tfrac{1}{2}k\kx^2$. All
  three are keyed, so all three are kept where they land.
- 4 problems keyed and kept: `p1` (fs-id2004860, the can of soup pushed
  0.600 m with 5.00 N, a number in joules with the kilocalories in the
  solution), `p2` (fs-id1102777, the elevator car, multi with the work by
  the cable and by the gravitational force and the book's "the net force
  is zero" for part (c)), `p3` (fs-id1648144, the crate pushed 4.00 m up
  the 20.0º ramp, a number, with the book's ramp figure on the card) and
  `p4` (fs-id1779446, the grocery cart pushed 20.0 m against 35.0 N of
  friction, multi over its five parts).
- 4 problems left out, having no answer in the book's key: the person
  climbing stairs (fs-id1911221), the car and its two gallons of gasoline
  (fs-id1541465), the boy pulling his sister in a wagon (fs-id1537085) and
  the rescue sled on the 60.0º slope (fs-id1548848). Each is named in
  `notes` and in `exercise_notes`.
- No generated questions: every node of the section has a book exercise.
- Weights (rule 20): `p1` gives `joule` its full value and
  `calculate-work` weight 2, since the arithmetic is one multiplication
  and the point of the item is the unit; `ap2` gives `calculate-work`
  weight 2, since the reader chooses their own numbers; `cq1` gives
  `joule` weight 1, since it only asks whether energy was transferred.

## Views

- Formulas: the two equations of the section already in `chapter.json`,
  both important.
- Definitions: the five variables of the section; the three glossary terms
  (energy, work, joule).
- Concept map: the four nodes above with their edges into 1.2, 1.3, 2.1,
  2.3, 3.3, 4.1 and 4.3.

## Colour

The page binds force, position and energy. `sim-work` carries $\kF$ on a
slider and draws the force and its component along the motion, brackets the
displacement $\kd$ and shades the work in the energy hue; `sim-joule`
carries the lifting height on a position slider, draws the weight $\kF =
m\kg$ as a force and lays the work out on a ladder of energies. The angle
$\theta$ between the force and the displacement, the mass $m$ and the
counts on the ladder stay in ink, as Plan.md decided.

## Wanted at chapter level

- variables `W` → 7.1-definition
- variables `F` → 7.1-definition
- variables `d` → 7.1-definition
- variables `θ` → 7.1-definition
- variables `m` → 7.1-joule-unit
- equations `eq-work` → 7.1-definition
- equations `eq-joule` → 7.1-joule-unit

**Decided in the chapter pass, 2026-09-11.** Every anchor asked for above is
written into `ch07/chapter.json`: the five variable rows and the two equation
rows now carry `7.1-definition` and `7.1-joule-unit`. The mass `m` is anchored
at `joule-unit` as the plan asked, since the running text of this section never
writes the symbol and the sim that lifts a mass through a height stands there.
