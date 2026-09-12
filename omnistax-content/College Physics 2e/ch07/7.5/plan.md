# Plan: 7.5 Nonconservative Forces (m42150)

Source: `source.md`, converted from the CNXML module. Status: built 2026-09-11
without a review stop, on Chen's instruction to finish the book in one job.

The section that lets friction into the energy bookkeeping. Six sketch
figures and no photograph, one boxed take-home investigation, two worked
examples, two AP items, no conceptual question, two problems (one keyed),
and two glossary terms. The PhET note (The Ramp) is dropped per the chapter
config and named in `notes`. The chapter has no Check Your Understanding box
anywhere, so nothing of the book's own goes inline. One page (rule 11).

## Sub-concepts (page headers)

The book prints four headers of its own and the take-home investigation at
the end; the page keeps that order, one block per idea.

1. `path-dependence` **Nonconservative forces and the path taken** (book:
   Nonconservative Forces and Friction; the definitions of a nonconservative
   force, of friction and of thermal energy; Figure 7.13).
2. `mechanical-energy` **How a nonconservative force changes the mechanical
   energy** (book: How Nonconservative Forces Affect Mechanical Energy;
   Figure 7.14, the rock dropped onto a spring beside the rock dropped onto
   the ground).
3. `work-energy` **The work-energy theorem with both kinds of force** (book:
   How the Work-Energy Theorem Applies; the split of the net work, the
   substitution $\kWc = -\kdPE$, both forms of the result, the three signs of
   $\kWnc$; Figure 7.15, the crate pushed up a ramp). The variables $\kWnet$,
   $\kWnc$, $\kWc$, $\kdKE$, $\kdPE$, $\kKEi$, $\kKEf$, $\kPEi$, $\kPEf$ and
   the equations `eq-wnet-split`, `eq-wnc` and `eq-wnc-form` anchor here.
4. `applying` **Applying energy conservation when friction acts** (book:
   Applying Energy Conservation with Nonconservative Forces; Example 7.9, the
   baseball player sliding on the level, with Figures 7.16 and 7.17 folded
   into one figure inside it; Example 7.10, the same player sliding up a
   $5.00^\circ$ slope). The variables $\kff$, $\kd$, $\theta$, $m$, $\kvi$,
   $\kh$ and $\kg$ anchor here.
5. `investigation` **Finding the friction from a stopping distance** (book:
   Making Connections: Take-Home Investigation—Determining Friction from the
   Stopping Distance, kept verbatim as a note, with Figure 7.18).
6. `skier` **The skier for the problems** (the unnumbered figure the first
   problem refers to, copied faithfully; no coverage rows).

Cross references to sections are plain text in the book's own wording
("Conservative Forces and Potential Energy", "Kinetic Energy and the
Work-Energy Theorem", "Take-Home Investigation—Converting Potential to
Kinetic Energy"), as the built chapters write them. The converter's
`[ref:…]` targets are written as the book prints them: Figure 7.13,
Figure 7.14, Figure 7.14(a), Figure 7.14(b), Figure 7.15, Figure 7.16,
Figure 7.18 and Example 7.9. Degree signs are `^\circ`.

Learning objectives, the section summary and the two glossary terms come out
of the running text into the tables and the views; the AP items and the
problems go to the Exercises document.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| nonconservative-force | idea | path-dependence | the definition and the glossary row; Figure 7.13; the rug-and-floor AP item |
| friction-dissipates-mechanical-energy | idea | mechanical-energy | Figure 7.14; the gravel-ramp AP item; the take-home investigation |
| work-by-nonconservative-forces | result, eq-wnc | work-energy | both forms of the relation, the three signs, Figure 7.15; the skier problem |
| solve-with-friction | skill | applying | Examples 7.9 and 7.10; Figure 7.16 + 7.17; the skier problem |

The section leans on `conservative-force`, `mechanical-energy`,
`elastic-potential-energy` and `conservation-of-mechanical-energy` (7.4),
`work-energy-theorem`, `net-work` and `kinetic-energy` (7.2),
`gravitational-potential-energy` and `pe-to-ke` (7.3), `work` (7.1),
`friction` (4.3), `weight-components-on-incline` (4.5) and
`kinetic-friction-magnitude` (5.1); the coverage rows mark each as used or
reinforced where the text leans on it.

## Figures

id · replaces · concepts · what moves · sliders · headline · graph or none · 3D

1. `sim-erasure` · replaces Figure 7.13 (the happy face erased along two
   paths) · nonconservative-force · **still**: the idea has no time in it.
   The two faces stand side by side with their routes already rubbed
   through them, and the picture answers its sliders and nothing else, so it
   registers no cycle and takes no transport (rule 14, and the chapter's
   `config.md`, which names the erased happy face among the chapter's still
   pictures) · the friction $\kff$ on the eraser (2 to 20 N, default 8,
   force) and the detour, how far the eraser wanders from the straight line
   (0 to 14 cm, default 8, ink, since it is a length of the scene; at 14 cm
   the wandering route is about half again as long) · "the wandering route
   is 32 per cent longer, so it costs 4.23 J against the 3.20 J of the
   straight one" · none: the two faces and their two work bars are the
   picture · no. Readout: $\kWfr = \kff\kd$ with the wandering path's length
   and the work it costs. Draws force, position and energy.
2. `sim-spring-ground` · replaces Figure 7.14 (a) and (b) (the rock dropped
   onto a spring beside the rock dropped onto the ground) ·
   friction-dissipates-mechanical-energy, nonconservative-force ·
   **moves**: the same rock falls in both systems at once, the left one onto
   a spring, which compresses and throws it back to the height it started
   from, the right one onto the ground, where it stops dead; beside each
   scene a stacked bar keeps the account of that system's energy, and the
   right-hand bar loses its mechanical energy to heat, sound and the dent in
   the ground as the rock lands · the drop height $\kh$ (0.5 to 3.0 m,
   default 1.5, position), the mass $m$ of the rock (0.5 to 5.0 kg, default
   2.0, ink) and the force constant $\kk$ of the spring (200 to 3,000 N/m,
   default 900, stiffness) · "the rock falls with 29.4 J on both sides, and
   both systems still hold all of it" · none: the two energy accounts are
   the picture · no. Readout: $\kPEg = m\kg\kh$ with the numbers; small line
   on what the spring returns and what the ground keeps. The spring's
   fullest squeeze is taken as $\sqrt{2\kPEg/\kk}$, which is the
   idealisation the book's own sentence implies, that the spring can propel
   the rock back to its original height. Draws energy, position, stiffness
   and acceleration.
3. `sim-ramp` · replaces Figure 7.15 (the person pushing a crate up a ramp) ·
   work-by-nonconservative-forces · **moves**: the crate is pushed 4.00 m up
   the ramp while the four amounts of work are drawn as they accumulate,
   the push and the friction as the two nonconservative contributions and
   gravity as the conservative one, and the mechanical energy of the crate
   rises or falls by exactly $\kWnc$ · the push $\kFa$ (0 to 800 N, default
   400, force), the friction $\kff$ (0 to 400 N, default 120, force), the
   angle $\theta$ of the ramp (0 to 30$^\circ$, default 25, ink) and the mass
   $m$ of the crate (10 to 120 kg, default 50, ink) · "the person has done
   261 J, friction has taken 78 J, and the mechanical energy has changed by
   $\kWnc$ = +182 J" · none: the four accumulating bars are the picture, and
   they stand beside the ramp rather than below it, since the ramp scene is
   short and the width would otherwise go to waste · no. Readout:
   $\kWnc = \kdKE + \kdPE$ with the numbers. Set the angle to zero and the
   push equal to the friction and the figure gives the third case the text
   names, the lawn mower pushed at a constant speed on level ground, where
   $\kWnc$ is zero and the mechanical energy does not change. Draws force,
   energy and position.
4. `sim-slide` · **folds Figure 7.16 and Figure 7.17** (the baseball player
   sliding to a stop on the level and the same player sliding up a
   $5.00^\circ$ slope), eyebrow "Figure 7.16 + 7.17", both images under
   `originals` · solve-with-friction, work-by-nonconservative-forces ·
   **moves**: the player slides from his starting speed to rest while the
   distance $\kd$ he has covered is bracketed under him; the idea has a time
   in it, so it loops once per slide and gets the scrubber · the starting
   speed $\kvi$ (2.00 to 10.00 m/s, default 6.00, velocity), the friction
   $\kff$ (200 to 800 N, default 450, force), the angle $\theta$ of the slope
   (0 to 15$^\circ$, default 0, ink; set it to 5.00 for Figure 7.17) and the
   mass $m$ of the player (40 to 110 kg, default 65.0, ink) · "he has slid
   0.92 m of the 2.60 m it takes him to stop, and 414 J of his 1,170 J are
   gone into friction" · graph below the strip: the kinetic energy, the
   energy taken by friction and the gravitational potential energy against
   the distance slid, the first falling to zero where the other two meet it ·
   no. Readout: $\kd = \frac{\tfrac{1}{2}m{\kvi}^2}{\kff + m\kg\sin\theta}$
   with the numbers; small line comparing the level slide with the slide up
   the slope. Draws velocity, force, position, energy and acceleration.
5. `sim-cup` · replaces Figure 7.18 (the marble rolled down a ruler into a
   foam cup) · friction-dissipates-mechanical-energy, solve-with-friction ·
   **moves**: the marble is released at the position the reader chooses on
   the ruler, rolls to the bottom and pushes the cup, which slides a distance
   $\kd$ and stops; the idea has a time in it, so it loops once per run and
   gets the scrubber · the release position on the ruler (5 to 30 cm,
   default 10, position), the mass of the marble (2 to 30 g, default 5, ink;
   30 g is the steel ball the investigation asks about) and the coefficient
   of kinetic friction $\mu_{\text{k}}$ of the cup on the table (0.10 to
   0.60, default 0.30, ink) · "the marble arrived with 2.45 mJ and has pushed
   the cup 5.2 cm of the 10.4 cm friction allows" · graph below the run,
   not beside it, since the ruler and the table make a horizontal scene:
   the distance the cup moves against the release position, which is the
   plot the investigation asks for and which is a straight line through the
   origin. A bar beside the scene holds the energy the marble brought and
   empties as the cup slides, so that the figure states an energy as well as
   a distance · no. Readout: $\kKE = m\kg\kh = \mu_{\text{k}}\kN\kd$ with
   the numbers. Draws position, energy, force and acceleration.
6. `fig-skier` · the unnumbered figure the first problem refers to, copied
   faithfully with the book's numbers, no sliders and nothing moving; eyebrow
   "Figure", no number, since the book numbers no figure inside an exercise ·
   the skier coasting at $\kvi$ toward a $35^\circ$ rise 2.50 m high, with
   $\kKEi$ at the bottom and $\kvf$ at the top · **still**: it answers
   nothing and shows the reader what the problem is about (rule 14) · no
   sliders · "the skier meets the rise at 12.0 m/s and coasts to the top,
   2.50 m up a slope of 35$^\circ$" · none · no. Draws velocity, position
   and energy.

Every book figure of the section is a sketch, so every one is replaced;
there is no photograph to keep or drop. Figures 7.16 and 7.17 are one scene
drawn twice, once level and once on a slope, and fold into `sim-slide` under
rule 14; the section's other runs of parts, Figure 7.13 (a) and (b) and
Figure 7.14 (a) and (b), are sub-figures under one number and are not folds.
`widths` is empty on `sim-slide`, `sim-cup` and `fig-skier`, since the CNXML
gives those images a height only or no size at all; the other three rows
carry the book's widths of 350, 450 and 275.

What changed between this plan as it was first written and the section as it
was built, all of it recorded here rather than silently: `sim-erasure` is a
still picture rather than a moving one, since the work against friction
depends on the length of the path and not on any clock, which is the test
rule 14 sets and the reading the chapter's `config.md` already took; its
second slider is the depth of the detour in centimetres rather than a
percentage added, because the percentage follows from the shape and is
reported in the headline instead; `sim-cup` takes its graph below the scene
rather than beside it, since the ruler and the table run across the page;
`sim-ramp` takes its bars beside the scene rather than below it for the
opposite reason, that the ramp is short; `sim-ramp`'s angle stops at
$30^\circ$ rather than $40^\circ$, which is as far as the ramp can be tilted
before the crate and its arrows reach the headline; and `sim-ramp` draws no
acceleration, since nothing in it states $\kg$, while `sim-cup` draws force
as well, since it states the normal force.

Extra simulations (rule 15), considered and left:

- A ledger of the three signs of $\kWnc$, with the applied force swept from
  less than the friction to more than it on level ground so that the
  mechanical energy falls, holds and rises. `sim-ramp` already gives all
  three: drop its angle to zero and set the push against the friction and it
  is the lawn mower the text names. Left; the caption says so.
- A round trip that comes back to where it started, so that the
  conservative force has returned everything and the nonconservative one has
  not. `sim-erasure` makes the same point with two paths between the same two
  points, and `sim-spring-ground` makes it with the rock that comes back up.
  Left.
- One energy account that runs any scene of the chapter. The chapter's
  exploration puts this at chapter level, since it belongs to no one section.
  Left.

None built.

## Exercises

- No Check Your Understanding box; the chapter has none at all, so nothing
  is inline.
- No conceptual question: the book prints none for this section.
- 2 AP items, both the section's own. `ap1` (fs-id1332485, the heavy box
  pushed across the rug or round the smooth floor) is keyed, so it keeps the
  book's four options as a graded choice, Apply, citing `path-dependence`.
  `ap2` (fs-id1974059, design an experiment to measure how well a gravel ramp
  stops a semi) has no key and is kept as an open item with an AI-marked
  suggested approach, Create, citing `applying`.
- 1 problem kept: `p1` (fs-id1838153, the 60.0-kg skier coasting up a 2.50-m
  rise), keyed at 9.46 m/s, Apply, citing `applying`, with the book's figure
  copied into the text as `fig-skier`.
- 1 problem left out, having no answer in the book's key: the car coasting
  up a hill (fs-id1788056), which is named in `notes` and `exercise_notes`.
- Nothing is taken from another section and nothing is held for a later one.
  The two energy-accounting AP items of 7.6 (the dart gun that loses 1 J to
  friction and the rock that falls through air resistance) could be read as
  this section's, since both are
  $\kKEi + \kPEi + \kWnc = \kKEf + \kPEf$; the chapter's exploration leaves
  them in 7.6, which states that equation in its most general form, and this
  section's `exercise_notes` records the judgement. 7.4's conceptual question
  "Define mechanical energy. What is the relationship of mechanical energy to
  nonconservative forces?" is first of all a question about mechanical
  energy, which 7.4 defines, so it stays there.
- No generated questions. Every node of the section carries at least one
  book exercise: `nonconservative-force` has `ap1`,
  `friction-dissipates-mechanical-energy` has `ap2` and `p1`,
  `work-by-nonconservative-forces` has `p1` and `ap2`, and
  `solve-with-friction` has `p1` and `ap2`. The section is thin in exercises,
  and the take-home investigation is the only other practice the book gives.
- Weights: `ap1` turns on the path dependence alone and gives
  `friction-dissipates-mechanical-energy` weight 1; `ap2` is about designing
  the measurement, so `solve-with-friction` and
  `work-by-nonconservative-forces` each take weight 2 beside the full value
  for `friction-dissipates-mechanical-energy`; `p1` turns on the skill and
  gives `work-by-nonconservative-forces` its full value, and
  `kinetic-friction-magnitude` and `friction-dissipates-mechanical-energy`
  weight 2, since the coefficient enters only to give the friction force and
  the dissipation is only named.

## Views

- Formulas: the three equations of the section already in `chapter.json`,
  `eq-wnc` and `eq-wnc-form` important and the split of the net work not.
- Definitions: the sixteen variables of the section; the two glossary terms.
- Concept map: the four nodes above with their edges into 4.3, 4.5, 5.1,
  7.1, 7.2, 7.3 and 7.4.

## Colour

The page binds energy, force, position, velocity, stiffness and
acceleration. Every figure keeps an energy account and states it in the
energy hue, the friction and the push are forces, the distance slid, the
drop height and the release position on the ruler are positions, the
player's starting speed is a velocity, the spring under the rock carries the
one force constant of the section, and $\kg$ is stated in three readouts.
Mass, the angles of the slope and the ramp, the size of the detour and the
coefficient of kinetic friction stay untyped and in ink.

## Wanted at chapter level

- variables `W_net` → 7.5-work-energy
- variables `W_nc` → 7.5-work-energy
- variables `W_c` → 7.5-work-energy
- variables `ΔKE` → 7.5-work-energy
- variables `ΔPE` → 7.5-work-energy
- variables `KE_i` → 7.5-work-energy
- variables `KE_f` → 7.5-work-energy
- variables `PE_i` → 7.5-work-energy
- variables `PE_f` → 7.5-work-energy
- variables `f_fric` → 7.5-applying
- variables `d` → 7.5-applying
- variables `θ` → 7.5-applying
- variables `m` → 7.5-applying
- variables `v_i` → 7.5-applying
- variables `h` → 7.5-applying
- variables `g` → 7.5-applying
- equations `eq-wnet-split` → 7.5-work-energy
- equations `eq-wnc` → 7.5-work-energy
- equations `eq-wnc-form` → 7.5-work-energy

**Decided in the chapter pass, 2026-09-11.** Every anchor asked for above is
written into `ch07/chapter.json`, the sixteen variable rows and the three
equation rows.
