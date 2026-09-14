# Plan: 10.2 Kinematics of Rotational Motion (m42178)

Source: `source.md` (converted from CNXML). Status: built 2026-09-14 without a
review stop, as `ch10/config.md` records; the plan is left for review.

The section that carries the kinematic equations of Chapter 2 into rotation.
Two diagrams (the fishing reel, 10.7, and the fly on the microwave plate,
10.8), one photograph inside a problem (the yo-yo, 10.9), one book table
(Table 10.2), two boxed notes (Making Connections and the numbered
Problem-Solving Strategy), four worked examples (10.3 to 10.6), one Check Your
Understanding box, no conceptual questions, no AP items and five problems,
three of them keyed. One page (rule 11).

## Sub-concepts (page headers)

The book prints no header of its own; every header below is the agent's.

1. `rotational-kinematics` **Rotational kinematics and its analogy with
   straight-line motion** (book: the intuition about the motorcycle wheel, the
   definition of the kinematics of rotational motion, the derivation of
   $\kw = \kwo + \kalpha\kt$ from $\kv = \kvo + \ka\kt$ with $\kv = \kr\kw$
   and $\ka = \kr\kalpha$, the Making Connections box).
2. `four-equations` **The four rotational kinematic equations** (book: Table
   10.2 and the definition of $\kwb$ and $\kvb$; the sentence that the table
   solves any problem with constant $\kalpha$ and $\ka$).
3. `strategy` **Problem-solving strategy for rotational kinematics** (book:
   the six numbered steps, kept as the book's numbered list).
4. `ex-reel` **Example 10.3 · Calculating the Acceleration of a Fishing
   Reel**, with Figure 10.7 after it where the book prints it.
5. `ex-brake` **Example 10.4 · Calculating the Duration When the Fishing Reel
   Slows Down and Stops**.
6. `ex-train` **Example 10.5 · Calculating the Slow Acceleration of Trains and
   Their Wheels**, where $\theta = \kx/\kr$ is stated as an equation of its
   own.
7. `microwave` **Translational motion for something spinning in place**
   (book: the paragraph on the fly, Figure 10.8, Example 10.6).

Cross references: "One-Dimensional Kinematics" is Chapter 2 and is linked as
plain text naming the chapter, as the chapter config allows; the two in-section
references to the examples and the table are plain "Example 10.3", "Example
10.4" and "Table 10.2". The book's $\text{at}$ and $\text{ax}$ set as one
`\text` are written $\ka\kt$ and $\ka\kx$; $a = a_{\text{t}}$ once, in ink
macros $\ka = \kat$.

Learning objectives, section summary and glossary come out of the running text
into the views. The one Check Your Understanding box is set inline after
`microwave`, where the book prints it, citing `rotational-kinematics`.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| rotational-kinematic-equations | result, eq-omega-from-alpha-t | rotational-kinematics | the derivation; Table 10.2; Examples 10.3 to 10.5; CYU; problems 1, 3, 5 |
| average-angular-velocity | result, eq-average-angular-velocity | four-equations | the definition after Table 10.2; Example 10.6 |
| linear-from-angular | result, eq-distance-from-angle | ex-train | Examples 10.3(b), (d), 10.5, 10.6; problems 3, 5 |
| rotational-kinematics-strategy | skill | strategy | the six steps; every example |

The section leans on `angular-acceleration`, `tangential-angular-acceleration`
and `rotational-translational-analogy` (10.1), `linear-angular-velocity`,
`rotation-angle` and `radian` (6.1), and `v-from-at`, `x-from-vbar`,
`vbar-midpoint`, `x-quadratic`, `v-squared`, `choose-equation` and
`physical-solution` (2.5), and `distance-traveled` and `displacement` (2.1).

## Figures

id · replaces · concepts · value add · motion · sliders · headline · graph · depth

- `sim-reel` · Figure 10.7 · rotational-kinematic-equations, linear-from-angular · variation by slider and flow by animation: the reader sees the reel turn faster and faster, the line pay out, and the area under the $\kw$ line grow into the angle, which the still cannot show · moving, the reel spinning up (or braking to a stop) over the set time, since the idea has a clock in it; a finite cycle, so it gets the scrubber · $\kalpha$ (angular-acceleration, −300 to 200 rad/s², detents at −300, 0 and 110), $\kwo$ (angular-rate, 0 to 250 rad/s, detents at 0 and 220), $\kt$ (time, 0.5 to 4.0 s), $\kr$ (position, 1.0 to 10.0 cm) · "After 2.00 s the reel spins at 220 rad/s, has turned through 35.0 rev and has paid out 9.90 m of line." · graph below, $\kw$ against $\kt$ with the area under the line shaded as $\theta$; axes fixed at 0 to 4 s and 0 to 500 rad/s, values beyond pinned · 2D. Labels on: five entity labels, none on a moving thing (the line's marker carries its value on the strip).
- `sim-fly` · Figure 10.8 · linear-from-angular, average-angular-velocity · flow by animation and variation by slider: the fly rides the rim while its distance travelled climbs and its displacement chord shows that a whole revolution brings it back · moving, the plate turning at $\kwb$ for the cooking time, a finite cycle with the scrubber · $\kr$ (position, 0.05 to 0.30 m), $\kwb$ (angular-rate, 1.0 to 12.0 rpm), $\kt$ (time, 0.5 to 4.0 min) · "After 2.0 min the fly has gone round 12 times and travelled 11 m, and is back where it started." · graph beside the round scene, $\kx$ against $\kt$ as a straight line of slope $\kr\kwb$; axes fixed at 0 to 4 min and 0 to 30 m, values beyond pinned · 2D. Labels on: four, the fly named once.
- Figure 10.9, the yo-yo (photograph): kept on the card of the yo-yo problem `p5`, the exercise it illustrates, with the book's caption and credit; the CNXML prints it inside the preceding problem on the car's tires, but it shows the yo-yo of problem 5.
- Table 10.2 Rotational Kinematic Equations: a `div.book-table` in `four-equations`, no figure.

Examples 10.4, 10.5 and 10.6 get no figure of their own: the braking reel is one
state of `sim-reel` (set $\kwo$ to 220 rad/s and $\kalpha$ to −300 rad/s²), the
train adds no quantity the reel does not show, and the fly's example is
`sim-fly`.

No extra simulations are proposed: a figure for Table 10.2 would repeat the
reel's graph, and the train's wheel would repeat the reel.

## Exercises

- Inline: `cyu1` (fs-id3076176, Understand, after `microwave`, keyed, open).
- Problems at the end, keyed: `p1` (the gyroscope spun up by a string, multi:
  80 rad/s² and 1.0 rev), `p3` (the gyroscope slowing, multi: 45.7 s and 116
  rev), `p5` (the yo-yo, multi: 600 rad/s², 450 rad/s, 21.0 m/s²; the book's
  key prints the units of (b) and (c) with a stray superscript and the card
  writes rad/s and m/s²).
- Problems left out, unkeyed: `fs-id1815900` (the dust on the CD) and
  `fs-id3055432` (the car's tires in a quick stop).
- No conceptual questions and no AP items in this module; nothing held for a
  later page and nothing taken from another.
- Weights: `p5` gives `rotational-kinematic-equations` full value and
  `linear-from-angular` weight 2, since its parts (a) and (c) are the
  $\ka = \kr\kalpha$ of 10.1 rather than $\kx = \kr\theta$;
  `tangential-angular-acceleration` (10.1) is tagged at weight 2 as well.

## Views

- Formulas: the six equations of the section already in `chapter.json`.
- Definitions: the twelve variables of the section; the one glossary term.
- Concept map: the four nodes above with their edges into 2.1, 2.5, 6.1 and 10.1.

## Colour

The page binds angular-rate ($\kw$, $\kwo$, $\kwb$ on sliders, the graph line
and the readouts), angular-acceleration ($\kalpha$ on a slider and in the
readout), position ($\kr$ on both sliders, the paid-out line and the distance
travelled), velocity and acceleration ($\kv = \kr\kw$ and $\ka = \kr\kalpha$
for the line leaving the reel, in the reel's second readout line) and time
($\kt$ on both sliders and both graph axes). Mass, angle, revolutions and rpm
stay in ink.

## Wanted at chapter level

- variables `10.2/θ` → 10.2-rotational-kinematics
- variables `10.2/ω_0` → 10.2-rotational-kinematics
- variables `10.2/ω` → 10.2-rotational-kinematics
- variables `10.2/α` → 10.2-rotational-kinematics
- variables `10.2/t` → 10.2-rotational-kinematics
- variables `10.2/v0` → 10.2-rotational-kinematics
- variables `10.2/v` → 10.2-rotational-kinematics
- variables `10.2/a` → 10.2-rotational-kinematics
- variables `10.2/r_curv` → 10.2-rotational-kinematics
- variables `10.2/ω̄` → 10.2-four-equations
- variables `10.2/v̄` → 10.2-four-equations
- variables `10.2/x` → 10.2-ex-train
- equations `eq-omega-from-alpha-t` → 10.2-rotational-kinematics
- equations `eq-theta-from-average` → 10.2-four-equations
- equations `eq-theta-quadratic` → 10.2-four-equations
- equations `eq-omega-squared` → 10.2-four-equations
- equations `eq-average-angular-velocity` → 10.2-four-equations
- equations `eq-distance-from-angle` → 10.2-ex-train

Decided in the chapter pass (2026-09-14): every anchor above is written on
its row. Nothing else was wanted.
