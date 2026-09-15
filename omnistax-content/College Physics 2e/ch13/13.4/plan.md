# Plan: 13.4 Kinetic Theory: Atomic and Molecular Explanation of Pressure and Temperature (m42217)

Source: `source.md` (converted from CNXML). Status: built 2026-09-14 without a
review stop, per `ch13/config.md`; the plan is left for review after.

The section that explains pressure and temperature from the motion of
molecules. Five sketch figures (13.21 to 13.25), one photograph (13.26), one
unnumbered graph inside an AP item, two boxed notes (Things Great and Small
with its derivation, and the Historical Note), two worked examples (13.8 and
13.9), one Check Your Understanding, six AP items, one conceptual question,
ten problems (five keyed) and one Unreasonable Results problem taken from
13.6. The PhET note (Gas Properties) is dropped per the chapter config.

## Sub-concepts (page headers)

The book prints one header of its own, Distribution of Molecular Speeds; the
rest of the run is divided by idea:

1. `collisions` **Pressure from molecular collisions** (book: the opening
   paragraph; Figure 13.21; the paragraph on the elastic collision with the
   wall; $PV = \tfrac{1}{3}Nm\overline{v^2}$ and its symbols). Variables
   $P$, $V$, $N$, $m$, $\overline{v^2}$ anchor here; the Check Your
   Understanding on the grain of pollen is inline after it.
2. `derivation` **The ideal gas law from the molecules** (book: "What can we
   learn…", $PV = NkT$ recalled, the two right-hand sides equated, then the
   boxed Making Connections: Things Great and Small, which carries the
   derivation step by step and cites Figure 13.22). $v_x$, $\Delta p$,
   $\Delta t$, $F$, $l$, $A$ and the derivation's equations anchor here.
3. `thermal-energy` **Temperature and the average kinetic energy of a
   molecule** (book: the average kinetic energy from the two forms of the
   law, the definition of thermal energy, the rms speed; Example 13.8 as
   `ex-kinetic-energy`; Figure 13.23; the Historical Note). $\overline{\text{KE}}$,
   $k$, $T$, $v_\text{rms}$ anchor here.
4. `distribution` **Distribution of Molecular Speeds** (the book's header;
   Figure 13.24 and 13.25; the fever paragraph). $v_\text{p}$, $T_1$, $T_2$
   anchor here.
5. `escape` **Escape velocity and the loss of an atmosphere** (agent header:
   Example 13.9 as `ex-escape`, Figure 13.26, the look ahead to the Problems
   and Exercises).

Cross references are plain text. Every `º` of the source is written `°C`
outside math and `^\circ\text{C}` inside. The book's $\text{PV}$, $\text{Nm}$,
$\text{kT}$ and $\text{mv}_x$ are set as products of symbols with the `\k`
macros where the page binds the type and plain LaTeX where it does not.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| kinetic-theory | idea | collisions | the opener, Figure 13.21, CQ 1, the CYU on the pollen grain |
| molecular-origin-of-pressure | result, eq-pressure-from-molecules | derivation | the Things Great and Small box, the summary, AP 1 |
| thermal-energy | result, eq-thermal-energy | thermal-energy | Example 13.8(a), the glossary, AP 2, AP 5, problem 3 |
| rms-speed | result, eq-rms-speed | thermal-energy | Example 13.8(b), Figure 13.23, problems 1, 5, 7, 9, the supernova |
| molecular-mass-from-molar-mass | skill, eq-molecular-mass | ex-kinetic-energy | Examples 13.8 and 13.9, the problems giving molar masses |
| maxwell-boltzmann-distribution | idea | distribution | Figures 13.24 and 13.25, the fever paragraph, AP 3 |
| atmospheric-escape | idea | escape | Example 13.9, Figure 13.26, problems 4 and 5 |

Used: `ideal-gas`, `pressure`, `newtons-third-law` (collisions);
`change-in-momentum`, `impulse`, `newtons-second-law-momentum`,
`elastic-collision`, `force-from-pressure`, `ideal-gas-law` (derivation);
`ideal-gas-law`, `kinetic-energy`, `boltzmann-constant` (thermal-energy);
`mole`, `avogadros-number` (ex-kinetic-energy, ex-escape);
`universal-gravitation` (escape).

## Figures

id · replaces · concepts · value add · motion · sliders · headline · graph · 3D

1. `sim-box` · **Figure 13.21 + 13.22** (one scene drawn twice: the
   molecule at the wall and the box it lives in) · kinetic-theory,
   molecular-origin-of-pressure · flow by animation, variation by slider,
   intuition (the pressure is a rate of momentum delivery and no still can
   show a rate) · **moves**, endlessly: $N$ molecules of the chosen gas fly
   about a box 10 nm on a side drawn in section, each with a velocity whose
   $x$ and $y$ components are drawn from the distribution at $T$, bouncing
   elastically off the walls with no collisions between them, as the book
   assumes; one molecule is followed with a ring and its velocity arrow, and
   when it strikes the right wall its momentum change $\Delta p = 2mv_x$ and
   the force on the wall flash up for half a second; a bar beside the right
   wall meters the momentum the wall has received per unit time over the
   last 3 s of the animation (restarted whenever a control changes) against
   the average $Nm\overline{v_x^2}/l$ the derivation predicts, so with few
   molecules the bar jumps about and with many it settles, which is the
   Check Your Understanding · $T$ (100 to
   1000 K, default 293, temperature), $N$ (1 to 60, default 25, ink), the
   gas (He, N₂, O₂, a choice, default N₂), Labels (off by default, because
   the component labels sit on the followed molecule, which moves; hover
   names every molecule) · "At 293 K the 25 nitrogen molecules press on the
   walls of the box at 1.01 × 10⁵ Pa, one atmosphere." · none, the box is
   the picture · 2D. Readout: $\kPr V = \tfrac{1}{3}Nm\overline{v^2} =
   Nk\kTemp$ with the live numbers and $P$; small line on the followed
   molecule's $\Delta t = 2l/v_x$ and $\Delta p = 2mv_x$, and that the
   drawing is a section of a cube whose molecules also move in and out of
   the page, which is why only a third of $\overline{v^2}$ pushes on the
   right wall. The animation runs at 1.4 × 10⁻¹¹ model seconds per real
   second, stated in a comment. Draws temperature, pressure, velocity,
   momentum, force.
2. `sim-speeds` · **Figure 13.23** (the box of molecules with their random
   velocities) · thermal-energy, rms-speed · variation by slider, intuition
   (the same temperature means the same average kinetic energy for every
   kind of molecule, but not the same speed) · still, because the drawing
   answers its sliders and 13.23(a) is a snapshot · $T$ (100 to 1500 K,
   default 293, temperature, detent at 293 K), the gas (He, N₂, O₂, a choice,
   default N₂) · "At 293 K a nitrogen molecule has an average kinetic energy
   of 6.07 × 10⁻²¹ J and an rms speed of 511 m/s." · beside: a bar of
   $\overline{\text{KE}}$ in the energy hue that is the same height for
   every gas, and an arrow of $v_\text{rms}$ in the velocity hue that is
   not; the box on the left holds forty molecules of the chosen gas with
   velocity arrows drawn from the distribution at $T$, with the rms length
   marked in the legend · 2D. Readout: $\kKEbar = \tfrac{1}{2}m\overline{v^2}
   = \tfrac{3}{2}k\kTemp$ and $\kvrms = \sqrt{3k\kTemp/m}$ with the numbers;
   small line on the speed of sound, about 340 m/s at room temperature, being
   carried at a speed set by these molecular speeds, which is 13.23(b) in
   words; the wave itself is not drawn, since the molecules of the section
   do not collide and a drawn wave would be invented. Draws temperature,
   velocity, energy.
3. `sim-distribution` · **Figure 13.24 + 13.25** (one graph drawn at one
   temperature and then at two) · maxwell-boltzmann-distribution, rms-speed
   · variation by slider, standardisation · still · $T_1$ (100 to 1500 K,
   default 300, temperature), $T_2$ (100 to 1500 K, default 600,
   temperature), the gas (He, N₂, O₂, a choice, default O₂ as the book's
   figure) · "At 300 K the most probable speed of an oxygen molecule is 395
   m/s and its rms speed 484 m/s; at 600 K the curve moves out to 559 and 684
   m/s and flattens." · the graph is the scene: the two Maxwell-Boltzmann
   curves in ink, the second dashed, labelled $T_1$ and $T_2$ in the
   temperature hue, each with $v_\text{p}$ (hollow, dashed drop) and
   $v_\text{rms}$ (filled, solid drop) marked in the velocity hue and their
   numbers in a table at the top right; the speed axis is fixed per gas (0 to 2500 m/s for N₂ and
   O₂, 0 to 6000 m/s for He) from the slider maxima, stated in a comment,
   and the curves are the same ink at both temperatures because temperature
   is never a tint · 2D. Readout: $\kvrms = \sqrt{3k\kTemp/m}$ at $T_1$ and
   $T_2$; small line that the peak lies below the rms speed and that the
   tail holds the few molecules at several times it. Draws temperature,
   velocity.
4. `sim-escape` · **Sim** (inside Example 13.9) · atmospheric-escape,
   rms-speed · variation by slider, intuition (which gases a world can keep)
   · still · $T$ (100 to 30 000 K, default 19 800, temperature, detents at
   250 K and 19 800 K), the world (Earth, 11.1 km/s, or the Moon, 2.38 km/s,
   a choice) · "At 19 800 K the rms speed of helium reaches Earth's escape
   velocity of 11.1 km/s, while nitrogen and oxygen are still far below it."
   · the graph is the scene: $v_\text{rms}$ against $T$ for H₂, He, N₂ and
   O₂ in ink, the escape velocity a dashed level in the velocity hue, the
   set $T$ a drop line with a marker on each curve (hover names carry the
   numbers), and a table beside the graph giving each gas's rms speed at
   $T$ and the temperature at which it reaches the escape velocity; axes
   fixed at 0 to 30 000 K and 0 to 15 km/s · 2D. Readout: $\kTemp = m\overline{v^2}/3k$
   with the example's numbers; small line on the 250 K at the top of the
   atmosphere, where helium's rms speed is 1.25 km/s and only the tail of
   the distribution escapes. Draws temperature, velocity.
5. `fig-rover` · **Figure 13.26**, photograph, kept: Example 13.9's
   discussion points at it and the black sky is the point about the Moon's
   lost atmosphere. Width 250, with the book's caption and credit.

The AP item's two-temperature graph (Figure_Ch13_S02.jpg, unnumbered) travels
on that exercise card's `figure` field, per the chapter config, and is not
redrawn. The PhET Gas Properties note is dropped.

Extra simulations (rule 15) considered and left: a piston meter for AP 4
(force on a piston at two heights), a state 13.3's figures already cover;
the fraction of a distribution above a chosen speed, which would need a
formula the book does not give. None built.

Figure pass (2026-09-15, Claude Fable 5.1). Every figure was screenshot at its default, its slider extremes and every choice in both themes. `sim-box`: the meter's title "force on the right wall" sat against the headline; the box and the meter are set 18 units lower. `sim-distribution`: at the lowest temperature the curve's peak reaches the top of the box and its name was pushed into the headline; a peak within 64 units of the top now takes its name beside it. `sim-escape`: the label of the set temperature sat at the top of the box, on the axis title at the left end and on the curves' names at the right; it hangs 70 units lower, clear of both. `sim-speeds` was found clean and is unchanged.

## Exercises

- `cyu1` (fs-id1589233), Understand, inline after `collisions`, open, the
  book's answer; tagged kinetic-theory at full value.
- `cq1` (fs-id1380376), Understand, open, AI-marked approach; tagged
  kinetic-theory and molecular-origin-of-pressure.
- `ap1` (fs-id2564957), Analyze, keyed (d), a graded choice whose options
  are the rows of the book's table, the table itself in the prompt as HTML;
  tagged rms-speed and molecular-origin-of-pressure.
- `ap2` (fs-id1689385), Understand, unkeyed, open with its four options and an
  AI-marked approach; tagged thermal-energy.
- `ap3` (fs-id1860075), Understand, keyed (b), a graded choice with the
  book's graph on the card; tagged maxwell-boltzmann-distribution.
- `ap4` (fs-id1469775), Apply, unkeyed, open with an AI-marked approach; kept
  here as the config says; tagged force-from-pressure and ideal-gas-law.
- `ap5` (fs-id4428826), Apply, keyed with two parts, multi; tagged
  thermal-energy, rms-speed and molecular-mass-from-molar-mass at weight 2.
- `ap6` (fs-id2516136), Analyze, unkeyed, open with an AI-marked approach;
  tagged thermal-energy and rms-speed.
- Problems kept, keyed: `p1` argon (number), `p3` the Sun and the corona
  (multi), `p5` hydrogen at the Moon's escape velocity (number), `p7` carbon
  dioxide in a flame (number), `p9` hydrogen near the Sun (number).
- Left out, unkeyed: fs-id1807059 (helium at 5.00 K), fs-id1509348 (oxygen
  at Earth's escape velocity), fs-id1592552 (fusion temperature),
  fs-id2705174 (hydrogen at 193 m/s), fs-id1653384 (uranium hexafluoride).
- `ur1` (fs-id2705483, Unreasonable Results, the supernova), taken from 13.6
  with `source_section: "13.6"`, Evaluate, a number for (a) with (b) and (c)
  in the solution; tagged rms-speed.
- No generated questions.

## Colour

The page binds temperature, pressure, velocity, momentum, force and energy:
`sim-box` carries $T$ on a slider, states $P$ and draws the followed
molecule's velocity, its momentum change and the force on the wall;
`sim-speeds` draws velocity arrows and a kinetic energy bar; the two graphs
carry temperature on sliders and speeds on their axes. $N$, $m$, $k$, $l$,
$A$, $V$, $\overline{v^2}$ and the molar masses stay in ink; molecules are
drawn in the element palette (`F.el('He')`, `F.el('N')`, `F.el('O')`, and
`F.el('H')` on the escape graph's legend) and never tinted by temperature.
Time is not bound: no readout colours $\Delta t$.

## Wanted at chapter level

- variables `13.4/P_press` → 13.4-collisions
- variables `13.4/V` → 13.4-collisions
- variables `13.4/N_count` → 13.4-collisions
- variables `13.4/m` → 13.4-collisions
- variables `13.4/v2_bar` → 13.4-collisions
- variables `13.4/v_x` → 13.4-derivation
- variables `13.4/Δp` → 13.4-derivation
- variables `13.4/Δt` → 13.4-derivation
- variables `13.4/F` → 13.4-derivation
- variables `13.4/l` → 13.4-derivation
- variables `13.4/A` → 13.4-derivation
- variables `13.4/KE_bar` → 13.4-thermal-energy
- variables `13.4/k_boltz` → 13.4-thermal-energy
- variables `13.4/T_temp` → 13.4-thermal-energy
- variables `13.4/v_rms` → 13.4-thermal-energy
- variables `13.4/v_p` → 13.4-distribution
- variables `13.4/T_1temp` → 13.4-distribution
- variables `13.4/T_2temp` → 13.4-distribution
- equations `eq-pressure-from-molecules` → 13.4-collisions
- equations `eq-force-one-molecule` → 13.4-derivation
- equations `eq-mean-square-components` → 13.4-derivation
- equations `eq-thermal-energy` → 13.4-thermal-energy
- equations `eq-rms-speed` → 13.4-thermal-energy
- equations `eq-temperature-from-speed` → 13.4-ex-escape
- equations `eq-molecular-mass` → 13.4-ex-kinetic-energy
- glossary `13.4/thermal energy` → 13.4-thermal-energy
- 13.6's `exercise_notes` should say that fs-id2705483 (the supernova) is set in 13.4.

Applied in the chapter pass (2026-09-14): every anchor above is written on its
row, eighteen variables and seven equations. The glossary line cannot be
applied: a glossary row carries `section`, `term` and `definition` and no
anchor, so "thermal energy" sits in the view under the section as every
glossary term of the book does. 13.6's `exercise_notes` now names
fs-id2705483 and every other item that left it by id, with the section each
is set in. Two captions on this page began with a fragment (the distribution
and the escape Sim) and are full sentences now.
