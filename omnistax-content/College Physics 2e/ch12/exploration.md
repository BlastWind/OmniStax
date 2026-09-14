# Exploration: College Physics 2e, Chapter 12 Fluid Dynamics and Its Biological and Medical Applications

Written in the chapter's prep pass (2026-09-14), after reading every module
of the chapter in full. The source of record is the CNXML bundle
(`source/osbooks-college-physics-bundle`), not the PDF. The book's
organisation (book → chapters → sections → untitled narrative headers, one
CNXML module per section, the apparatus inside the module) is as recorded in
`ch02/exploration.md`; nothing differs here.

## Why this chapter

Chapter 11 leaves the fluid standing still. This chapter sets it moving, and
almost every idea in it is a consequence of two accountings. The first is of
volume: whatever passes one cross-section of a pipe in a second must pass
every other, so a narrow pipe carries fast fluid and a wide one slow fluid.
The second is of energy: a cubic meter of fluid carries pressure, kinetic
energy and gravitational potential energy, and along a streamline their sum
does not change, so speeding a fluid up must cost it pressure. From those
two the chapter reads a nozzle, a wing, a sail, a pitot tube, a dam, a fire
hose and a pump. Then it lets friction back in. Viscosity gives a fluid a
resistance, Poiseuille's law says that resistance goes as the fourth power
of the tube's radius, and the fourth power is why a five percent narrowing
of an artery costs nineteen percent of its flow and why the body regulates
blood by opening and closing vessels rather than by working the heart
harder. The Reynolds number then says when the smooth flow all of this
assumes gives way to turbulence, first in a tube and then around a moving
object, and the chapter closes on the one kind of fluid transport that needs
no flow at all: the random walk of a molecule, which carries oxygen across
the last few micrometers into a cell and drives water through a membrane.

## Chapter 12 modules

Figures counted include the figures that sit inside exercises. CYU = Check
Your Understanding, AP = AP test prep items, CQ = conceptual questions,
Sol = exercises with an inline solution. The equation column counts the
`{eq:…}` markers the converter writes, many of which are the numbered
substitution steps of a worked example rather than results.

| Section | Module | Ex. | Fig. | Tables | Eq. | Defs | CYU | AP | CQ | Prob. | Sol. |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m42204 | 0 | 1 photo | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| 12.1 Flow Rate and Its Relation to Velocity | m42205 | 3 | 3 (2 diagrams, 1 photo in a problem) | 0 | 16 | 2 | 0 | 2 (1 keyed) | 3 | 16 | 8 |
| 12.2 Bernoulli's Equation | m42206 | 1 | 6 (4 diagrams, 1 diagram and 1 photo in CQs) | 0 | 15 | 2 | 0 | 4 (2 keyed) | 14 | 8 | 4 |
| 12.3 The Most General Applications of Bernoulli's Equation | m42208 | 2 | 3 (1 diagram, 1 photo, 1 photo in a CQ) | 0 | 12 | 0 | 0 | 4 (2 keyed) | 4 | 4 | 2 |
| 12.4 Viscosity and Laminar Flow; Poiseuille's Law | m42209 | 2 | 8 (5 diagrams, 2 photos, 1 photo in a CQ) | 1 | 18 | 5 | 0 | 0 | 4 | 22 | 10 |
| 12.5 The Onset of Turbulence | m42210 | 1 | 2 (1 diagram, 1 photo in a CQ) | 0 | 3 | 1 | 0 | 0 | 3 | 11 | 6 |
| 12.6 Motion of an Object in a Viscous Fluid | m42211 | 1 | 2 diagrams | 0 | 3 | 2 | 0 | 0 | 3 | 0 | 0 |
| 12.7 Molecular Transport Phenomena | m42212 | 1 | 4 diagrams | 1 | 3 | 9 | 0 | 0 | 2 | 5 | 3 |

No section of the chapter has a Check Your Understanding box, so the inline
place of rule 12 holds nothing here unless a section agent judges a short
conceptual question to be a Remember or Understand check that belongs beside
its passage. Two modules carry a table, both of which the converter wrote as
a `> TABLE` block that has to be rebuilt as a `div.book-table`: 12.4's
coefficients of viscosity, which is irregular (a fluid such as water spans
five rows of temperature under one name) and carries two footnotes about
blood, and 12.7's diffusion constants, which is plain. No module of this
chapter carries a PhET note. Five modules carry a Making Connections or
Take-Home box, which are the book's own words and are kept as notes: 12.2's
sheet of paper, its two strips of paper and its Conservation of Energy box,
12.3's Power box, 12.4's Go Down to the River, 12.5's Inhalation and 12.6's
Don't Lose Your Marbles.

## Figure numbers

Every figure of the narrative is numbered in order, and so is every figure
that sits inside a conceptual question or a problem: this chapter's figures
were counted in the order the CNXML prints them, and the count is confirmed
by the book's own example numbering, since 12.5 cites the IV needle of 12.4
as Example 12.8 and it is the eighth worked example of the chapter. The
bundle's file names say 13 rather than 12, because the module numbers are
from an earlier edition; the numbers below are the ones this edition prints.

| Section | Numbers |
|---|---|
| Intro | 12.1 the firefighters and the burning cars |
| 12.1 | 12.2 the shaded cylinder of fluid passing a point, 12.3 the narrowing tube, 12.4 the Huka Falls (in a problem) |
| 12.2 | 12.5 the car passing the truck, 12.6 the four entrainment devices, 12.7 the wing and the sail, 12.8 the manometer and the pitot tube, 12.9 the Venturi (in a CQ), 12.10 the perfume bottle (in a CQ) |
| 12.3 | 12.11 the dam and its reservoir, 12.12 the fire engine and the ladder, 12.13 the boot with two leaks (in a CQ) |
| 12.4 | 12.14 the rising smoke, 12.15 laminar and turbulent flow drawn, 12.16 the fluid between two plates, 12.17 the velocity profile and the Bunsen flame, 12.18 the tube Poiseuille's law applies to, 12.19 the water main, 12.20 the circulatory system, 12.21 the air tube beside the faucet (in a CQ) |
| 12.5 | 12.22 the occluded blood vessel, 12.23 the sink drain insert (in a CQ) |
| 12.6 | 12.24 the sphere at three speeds, 12.25 the three forces on a falling object |
| 12.7 | 12.26 the random walk, 12.27 diffusion down a concentration difference, 12.28 the semipermeable membrane, 12.29 osmosis and its back pressure |

Tables: Table 12.1, Coefficients of Viscosity of Various Fluids, in 12.4;
Table 12.2, Diffusion Constants for Various Molecules, in 12.7.

## What is new, and the types the chapter asks for

- **Flow rate is a type.** $Q$ is the chapter's first quantity and its most
  used: it is defined in 12.1, it is what continuity conserves, it is what
  Bernoulli's equation is multiplied by to give power in 12.3, and it is
  what Poiseuille's law predicts in 12.4 and what the Reynolds number of
  12.5 is computed from. Its figures draw it (a stream whose thickness is
  the flow), its sliders carry it and its readouts state it, so by rule 7 it
  is a type of the book's. Declared `flow-rate`, labelled flow rate, with
  the dimension the book writes, m³/s. It is not a velocity and not a
  volume: the whole of 12.1 is the argument that flow rate and velocity are
  different quantities, and rule 7 forbids folding one into the other to
  save a hue.
- **Viscosity is a type.** $η$ is the quantity 12.4 defines, 12.5 divides
  by and 12.6 carries into Stokes' law; the book prints a table of it across
  six orders of magnitude, from air to honey, and that table is the obvious
  slider for three of the chapter's figures. A page that lets the reader
  change the fluid must colour the quantity that changes. Declared
  `viscosity`, labelled viscosity, dimension Pa·s.
- **The diffusion constant is not a type, and stays in ink.** $D$ appears in
  one section, in one equation, $x_\text{rms} = \sqrt{2Dt}$, and in one
  table. What the reader of 12.7 watches vary is the distance a molecule
  reaches and the time it takes, both of which already carry a hue
  (position, time), and $D$ is the material constant that sets the rate, the
  same standing that the drag coefficient of 5.2 and the mechanical
  advantage of 9.5 have. A hue declared for the whole book and bound on one
  page is a hue the reader must learn and then never sees again, so $D$ is
  written in ink and the sentence the readout states carries its colour on
  $x_\text{rms}$ and $t$.
- **Resistance to flow is not a type either.** $R$ in $Q = (P_2 - P_1)/R$ is
  a derived quantity, but it is stated only in 12.4, and the relation the
  section's figures draw has pressure difference at one end and flow rate at
  the other, both typed. $R$ is written in ink inside that relation. A
  section agent who finds a figure that plots $R$ itself should say so in
  `plan.md` under `## Wanted at chapter level` rather than colour it.
- **Pressure and density are Chapter 11's.** This chapter writes $P$, $P_1$,
  $P_2$ and $ρ$ constantly and declares neither: it uses the `pressure` and
  `density` types and the symbol rows that Chapter 11 stages, by the ids
  that landed. Two collisions matter and every section agent must know them:
  the book already holds `P` as **power** with the macro `\kP` (Chapter 7),
  and it already holds an untyped `ρ` with no macro (Chapter 5's drag), so
  neither may be used for pressure or for density here. The ids actually
  used are named under "What the tooling needs" below.
- **Lengths stay in ink; heights do not.** The tube radius $r$, the tube
  length $l$, the plate separation and the characteristic size $L$, and the
  radius $R$ of a sphere are scene lengths and stay untyped, as the standing
  decision for this job asks. The height $h$ above a reference point in
  Bernoulli's equation is the same quantity Chapter 7 wrote as $h_\text{i}$
  and $h_\text{f}$ in the gravitational potential energy, and it keeps the
  position hue the book's existing `h` row gives it. The Reynolds number,
  the number of branches $n$ and every ratio in the chapter are
  dimensionless and stay in ink.

## Sketches to replace, and photographs

Every diagram of this chapter is a sketch of a quantity or of a flow, so
every one is a figure to transform with the book's image kept as its
original: 12.2, 12.3, 12.5, 12.6, 12.7, 12.8, 12.9, 12.11(b), 12.15, 12.16,
12.17(a) and (b), 12.18, 12.19, 12.22, 12.24, 12.25, 12.26, 12.27, 12.28 and
12.29. Seven images are photographs:

| Number | What it is | Keep or drop |
|---|---|---|
| 12.1 | firefighters and two burning cars | keep, rule 21; it is the introduction page's own photograph |
| 12.4 | the Huka Falls | keep with its problem; the problem is keyed and asks for the speed of the river in the gorge, so the picture is what the numbers describe |
| 12.10 | a perfume bottle with a spray cap | keep with its conceptual question, which points at it |
| 12.11(a) | water gushing from the Studen Kladenetz dam | keep as one of the originals of the Torricelli figure; the text points at it and the schematic beside it is its explanation |
| 12.12 | a fire engine, a ladder and a hose | drop; it illustrates the worked example that follows but the passage points at it only to say that pressure, speed and height all change at once, and the figure that is built for that example says it better |
| 12.14 | smoke rising, smooth and then swirling | keep; the text points the reader at it as the first sight of laminar flow becoming turbulent |
| 12.17(c) | a Bunsen burner flame | keep as an original beside the velocity profile it is drawn to explain |
| 12.21 | the air tube beside a faucet | keep with its conceptual question, which points at it |
| 12.23 | the insert in a sink drain | keep with its conceptual question, which points at it |

## Notes, boxes and PhET items

No PhET note anywhere in the chapter. The introduction ends on a link to the
publisher's video trailer, which is left out and named in `notes`, as every
chapter's introduction has done. The six Making Connections and Take-Home
boxes listed above are kept verbatim as notes.

## Exercises that belong to another section

- **12.6 has no problem set of its own**: three conceptual questions and
  nothing else. Three of 12.4's problems are not about Poiseuille's law at
  all but about an object moving through a viscous fluid, which is 12.6's
  subject: `fs-id2401743`, which asks the reader to show that a sphere's
  terminal speed is $v = 2R^2g(ρ_\text{s} - ρ_1)/9η$ from Stokes' law and
  buoyancy; `fs-id1427261`, which uses that result to find the viscosity of
  motor oil from a falling steel ball; and `fs-id3054572`, which asks for a
  skydiver's terminal speed from a drag force proportional to $v^2$. All
  three go to 12.6 with `source_section: "12.4"`, and both sections'
  `exercise_notes` say so. The first is unkeyed and is left out, the second
  is keyed and is kept, and the third is unkeyed and is left out, so 12.6
  gains one keyed problem; that is still the whole of its problem set, and
  its page leans on its conceptual questions.
- Nothing else moves. 12.5's Reynolds-number problems cite the oil gusher
  and the concrete pump that 12.4 sets as problems of its own, but each asks
  for a Reynolds number and belongs where the book prints it. 12.2's
  unkeyed problem about squirting water from a hose reaches forward to
  Torricelli's theorem in 12.3, but it is unkeyed and is left out on that
  ground, so no move is needed.

## The keyed items

The answer key covers roughly every second problem, as elsewhere in the
book. Of the chapter's 66 problems, 33 carry an inline solution and 33 do
not; the unkeyed ones are left out and each section's `notes` names them.
Of the 10 AP items, 5 are keyed and all 5 of those are multiple choice; the
other 5 are open questions and get an AI-marked suggested approach, as do
all 33 conceptual questions. Three problems are Construct Your Own Problem
items (two in 12.4, none keyed) and three are Unreasonable Results items
(12.1's last problem and 12.5's last, both keyed, and no others).

Two faults in the source that a section agent will meet:

- **12.2's first AP item has lost its stem.** It reads "At what depth
  beneath the surface of the lake is the pressure in the water equal to
  twice atmospheric pressure?" with no lake introduced anywhere in the
  module. The keyed answer, 10 m, is the depth of water that adds one
  atmosphere, so the item stands on its own once the reader knows $P = ρgh$;
  it is kept as the book prints it and 12.2's `exercise_notes` says that the
  lake is never described.
- **12.6's worked example prints a unit twice.** The substitution reads
  $1.81\times10^{-5}\;1.00\;\text{Pa}\cdot\text{s}$, where the second number
  is left over from an earlier edition; the viscosity of air at 20 °C is
  $1.81\times10^{-5}\;\text{Pa}\cdot\text{s}$ and the answer, $2.11\times10^5$,
  is the one that value gives. The stray `1.00` is dropped and 12.6's
  `notes` says so.

## Prerequisite edges into built chapters

The chapter rests on Chapter 11 for what a fluid is, for pressure and for
density, and on Chapters 2 to 9 for the rest. Within the built chapters the
edges that matter are: 2.3's `average-velocity` and `elapsed-time` under
flow rate; 4.3's `newtons-second-law` and 4.1's `force` under viscosity and
under the pressure difference that drives flow; 5.1's `friction` under
viscosity, which the book introduces as friction inside a fluid; 5.2's
`drag-force-equation`, `stokes-law`, `terminal-velocity` and
`size-and-terminal-velocity` under the whole of 12.6, which restates all
four; 7.2's `work-energy-theorem` and `kinetic-energy`, 7.3's
`gravitational-potential-energy` and 7.4's `conservation-of-mechanical-energy`
under Bernoulli's equation; 7.7's `power` and `calculate-power` under 12.3;
6.2's `centrifuge` under the sedimentation paragraph of 12.6; and 1.2's
`unit-conversion` under the flow-rate units of 12.1. Every id above was
checked with `ost find` and stands in `book.json`.

## Wanted at chapter level

Nothing. Every edge this chapter wants into Chapter 11 was placed on an id
that had landed in `book.json` when `ch12/book-rows.json` was merged; the
ids used are listed in `config.md`. A section agent that finds it needs an
id this pass did not stage should add it to its own `plan.md` under this
heading.

## BE INSPIRING (rule 23)

The chapter's ideas are all visible in ordinary life and almost none of them
is visible in a still drawing, which makes it one of the best chapters in
the book for what OmniStax can do.

- **One pipe, one slider, and the whole of 12.1.** A pipe whose waist the
  reader drags narrower, with the fluid drawn as a band of streamlines that
  crowd and speed up as the waist closes, and a readout writing
  $A_1\bar v_1 = A_2\bar v_2$ with the live numbers, teaches continuity in
  one gesture. The same scene, given a branch count, becomes the aorta
  dividing into five billion capillaries, and the reader sees the blood slow
  almost to a stop exactly where the body needs it to.
- **Bernoulli deserves a bar chart, not a formula.** Three stacked bars,
  pressure, $\tfrac12 ρv^2$ and $ρgh$, drawn at two points of a pipe the
  reader can narrow and tilt, with the total ruled across the top and
  visibly unchanged: that picture is the chapter's whole second idea, and
  every application (the shower curtain, the truck, the wing, the sail, the
  pitot tube, the dam, the pump) is one arrangement of those three bars. If
  one figure of this chapter is built well, it should be this one.
- **The fourth power is a shock and should be felt as one.** A single slider
  on an artery's radius, with the flow drawn as a stream whose width is $Q$
  and a readout saying that five percent off the radius costs nineteen
  percent of the flow, turns a line of algebra into something alarming. Put
  the plaque on the vessel and the reader sees why a cardiologist cares
  about a millimeter.
- **Turbulence is the one place the chapter needs motion.** Laminar flow is
  a still picture; turbulence is not, and no slider can stand in for it. A
  scene whose speed and tube radius set a Reynolds number, drawn with
  tracers that run in straight lanes below 2000, waver between 2000 and
  3000, and break into eddies above 3000, is a figure with a clock in it and
  earns the app's transport by rule 14. The same scene run past a sphere is
  12.6.
- **A random walk has to be watched.** 12.7's molecule is the second place
  with a real clock: a hundred tracers released from a point, stepping
  randomly, with a circle of radius $\sqrt{2Dt}$ drawn growing with them and
  a readout saying that glucose needs 21 hours to cross a centimeter. The
  reader who has just watched a fire hose move 40 liters a second sees why
  bodies larger than a few cells had to evolve a circulation.
- **Colour carries the argument.** With pressure, density, flow rate,
  velocity and viscosity each in its own hue, the three terms of Bernoulli's
  equation, the four factors of Poiseuille's law and the four of the
  Reynolds number can be read off any figure of the chapter without a
  legend, and a reader who meets $2ρvr/η$ in 12.5 recognises every symbol in
  it from the pages before.

## Left for a later pass

- **A fluids sheet.** The chapter would be well served by a sheet of the
  viscosities of Table 12.1 and the diffusion constants of Table 12.2, of
  the kind the book's rules foresee for constants and units. Both tables
  stay in their sections' text as `div.book-table` for now, and the sheet is
  not built, since no other chapter has one yet.
- **Lift done properly.** 12.2 explains a wing by Bernoulli and adds in a
  parenthesis that wings also gain lift by pushing air down. The honest
  figure shows both and says which dominates, and that is a larger job than
  a section of this chapter; the 12.2 agent should draw the book's account
  and leave the argument alone.
