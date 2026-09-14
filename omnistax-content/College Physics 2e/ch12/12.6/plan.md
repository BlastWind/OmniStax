# Plan: 12.6 Motion of an Object in a Viscous Fluid (m42211)

Source: `source.md` (converted from CNXML). Status: built 2026-09-14 without
a review stop, per `ch12/config.md`; this file is left for review.

The section that turns the Reynolds number on an object: the equivalence of
a moving object and a flowing stream, the object's Reynolds number and its
four regimes, one worked example (the thrown ball), viscous drag and how it
grows with speed, Stokes' law recalled, terminal speed, the Don't Lose Your
Marbles experiment and sedimentation. Two sketch figures, no photograph, one
boxed note, three conceptual questions, no problem set of its own; three of
12.4's problems belong here. One page (rule 11).

## Sub-concepts (page headers)

The book prints no header of its own, so these are the agent's (config).

1. `reynolds-object` **The Reynolds number for an object moving through a
   fluid** (book: the bicycle in still air, ${N'}_{\text{R}} = \krho\kv
   L/\keta$, the four ranges of ${N'}_{\text{R}}$, laminar flow round small
   objects; Example 12.10, the ball's turbulent wake, `ex-ball-wake`).
   Introduces `reynolds-number-object` and `flow-regimes-around-object`;
   uses `reynolds-number`, `relative-velocity`, `laminar-flow`,
   `turbulent-flow`, `density`, `viscosity`. The variables ${N'}_{\text{R}}$,
   $\krho$, $\kv$, $L$, $\keta$ and eq-reynolds-object anchor here.
2. `viscous-drag` **Viscous drag and how it grows with speed** (book: the
   definition of viscous drag, drag proportional to speed below one and to
   speed squared between 10 and $10^6$, the cyclists, Stokes' law for a
   small sphere; Figure 12.24 where the book places it, after the
   equation). Introduces `viscous-drag`; uses `drag-force`,
   `drag-force-equation`, `stokes-law`, `flow-regimes-around-object`.
   $\kFV$, $\kFs$, $R$ and eq-stokes-sphere anchor here.
3. `terminal-speed` **Terminal speed and sedimentation** (book: drag rising
   until the acceleration is zero, the factors of Figure 12.25, the skydiver,
   the Take-Home Experiment as a `div.note`, sedimentation and the
   centrifuge; Figure 12.25 where the book places it, after the centrifuge
   paragraph). Introduces `sedimentation-rate`; uses `terminal-velocity`,
   `viscous-drag`, `buoyant-force`, `archimedes-principle`,
   `size-and-terminal-velocity`, `centrifuge`. $\kFB$, $\kwgt$ and $\kvt$
   anchor here.

Cross references are plain text: "Recall Stoke's law" stays as the book
prints it, and the Take-Home Experiment's pointer to the viscosity table
reads "Table 12.1" in plain text since 12.4 is built in the same wave. The
book's $P$ and $\rho$ pitfalls do not arise; density is `\krho`, viscosity
`\keta`, the Reynolds number the untyped `{N'}_{\text{R}}`, and $L$, $R$
and $r$ are ink. The worked example's stray `1.00` beside the viscosity of
air is kept as printed and named in `notes`.

## Concept nodes (already in book.json)

`reynolds-number-object` (result, eq-reynolds-object),
`flow-regimes-around-object` (idea), `viscous-drag` (idea),
`sedimentation-rate` (idea). Nothing added.

## Figures

id · replaces · concepts · value add · motion · sliders · headline · graph · 3D

1. `sim-wake` · replaces Figure 12.24 (a), (b), (c), one number with one
   image · reynolds-number-object, flow-regimes-around-object, viscous-drag
   · variation by slider and flow by animation: the reader sets the
   object's speed, its size and the fluid and watches one scene pass through
   the four ranges the book draws as three stills, with the separation points
   walking forward and the wake widening as ${N'}_{\text{R}}$ climbs, which
   no still shows · **moves**: the fluid streams past the ball (the ball's
   own motion to the right, seen from the ball), tracers riding the
   streamlines and the eddies of the wake turning and drifting downstream;
   the flow is steady, so the cycle is endless and there is no scrubber; the
   config allows this one wake to move · speed $\kv$ (0.1 to 40.0 m/s,
   default 40.0, velocity); size $L$ (0.1 to 10.0 cm, default 7.4, ink); the
   fluid, a dropdown of the seven fluids Table 12.1 and Table 11.1 both give
   (air at 20 °C default, water at 20 °C, whole blood at 37 °C, ethyl
   alcohol, olive oil, motor oil SAE 10 at 0.88 g/mL from the section's own
   problem, glycerin), which sets $\krho$ and $\keta$ together · "N′R = 2.11
   × 10⁵: the flow separates from the ball and leaves a turbulent wake
   behind it, so the drag is far greater than for laminar flow." · none: the
   flow is the picture · 2D. Readout: ${N'}_{\text{R}} = \krho\kv L/\keta$
   with the numbers; small line naming the range and, where the book gives a
   law, the drag: Stokes' law $\kFs = 6\pi R\keta\kv$ below one, Chapter 5's
   $\kFD = \tfrac12 C\krho A\kv^2$ with the sphere's $C = 0.45$ between 10
   and $10^6$, and no number in the transition or beyond $10^6$, where the
   book gives none. The drag arrow $\kFV$ points upstream and lengthens
   from one range to the next as the book's three arrows do; the readout
   carries the magnitude. The picture is a close-up whose scale a bar under
   the ball states, so the drawn ball does not shrink to nothing at 1 mm.
   Labels: $\kv$ on the far-field arrow, $\kFV$, $L$ on the bar, "turbulent
   wake" and "separation points" where they exist, five at most, on by
   default (26.7); hover names on the ball, the streaming fluid, the wake
   and the arrow. Draws velocity, density, viscosity, force.
2. `sim-terminal` · replaces Figure 12.25 · sedimentation-rate,
   viscous-drag, terminal-velocity · variation by slider: the three forces
   drawn to one scale, so the reader sees the buoyant force and the drag
   stack up to the weight and how the terminal speed answers the size, the
   density and the fluid, which the book's diagram only names · **still**:
   the object is drawn at its terminal speed, where the forces balance and
   nothing changes with time; the config keeps every figure but the wake
   still · radius $R$ (0.2 to 10.0 mm, default 0.8, ink); the object's
   density $\krhoobj$ (0.50 to 12.00 × 10³ kg/m³, default 7.86, the
   problem's steel ball, density, with detents at ice 0.917, glass 2.6,
   aluminum 2.7, steel 7.86 and lead 11.3); the fluid, the same dropdown as
   the wake, default motor oil · "A steel marble 0.80 mm across in motor oil
   settles at 4.86 cm/s, where the drag and the buoyant force together
   balance its weight." · graph beside the tall scene: $\kvt$ against $R$
   for the chosen fluid and density, fixed axes 0 to 1.6 mm and 0 to 20 cm/s (twice and four times the default, so the default marble’s parabola fills the box),
   the curve solid where ${N'}_{\text{R}} \le 1$ and dashed where Stokes'
   law no longer holds, the current point through `pinned()` · 2D. Readout:
   $\kwgt - \kFB = \kFs$ written as $(\krhoobj - \krhofl)V\kg = 6\pi
   R\keta\kvt$ with the numbers and $\kvt$ solved; small line giving
   ${N'}_{\text{R}}$ at that speed and whether Stokes' law holds. An object
   less dense than the fluid rises instead and the figure says so. Draws
   force, density, viscosity, velocity.

No photograph in the section; nothing to keep or drop. No extra simulation
offered: the two figures already open the views the text lacks, and a
graph of drag against speed would need the transition law the book does
not give.

## Exercises

- No Check Your Understanding box; nothing inline.
- 3 conceptual questions, `cq1` to `cq3`, Understand, with AI-written
  suggested approaches, citing `terminal-speed` (the helium balloon in the
  slowing car, an accelerated frame as the centrifuge paragraph describes),
  `terminal-speed` (raindrops in 5 °C and 25 °C air) and `terminal-speed`
  (two marbles of different sizes).
- 1 problem taken from 12.4 with `source_section: "12.4"` and kept: `p1`
  (fs-id1427261, the viscosity of motor oil from a falling steel ball, keyed
  225 mPa·s), Apply, citing `terminal-speed`; the hint carries the
  terminal-speed relation of the preceding derivation problem, since that
  problem is not on the page.
- 2 problems taken from 12.4 and left out, having no answer in the book's
  key: the derivation of $\kvt = 2R^2\kg(\rho_{\text{s}} - \rho_1)/9\keta$
  (fs-id2401743) and the spread-eagle skydiver (fs-id3054572). Both
  sections' `exercise_notes` say so.
- No AP item; the book prints none here.

## Views

Objectives (3), summary (the book's three bullets, its broken third bullet
joined) and glossary (viscous drag, terminal speed) to the tables. The
section has no table of its own.

## Colour

The page binds velocity, density, viscosity and force, the union of the two
figures' `draws`. $L$, $R$, $r$, $V$, $C$, $A$, ${N'}_{\text{R}}$ and $\kg$
are ink on this page; the fluid and the ball wear no hue; the tracers and
the far-field arrow wear velocity, the drag, weight and buoyant arrows wear
force, the density slider wears density and the fluid's $\krho$ and
$\keta$ appear only in the readouts.

## Wanted at chapter level

- variables `N_Rprime` → 12.6-reynolds-object
- variables `ρ_dens` → 12.6-reynolds-object
- variables `v` → 12.6-reynolds-object
- variables `L` → 12.6-reynolds-object
- variables `η_visc` → 12.6-reynolds-object
- variables `F_V` → 12.6-viscous-drag
- variables `F_s` → 12.6-viscous-drag
- variables `R_sphere` → 12.6-viscous-drag
- variables `F_B` → 12.6-terminal-speed
- variables `w` → 12.6-terminal-speed
- variables `v_t` → 12.6-terminal-speed
- equations `eq-reynolds-object` → 12.6-reynolds-object
- equations `eq-stokes-sphere` → 12.6-viscous-drag
- The variables rows `L` of 12.4 and 12.6 name the symbol `L`, which is
  Chapter 10's angular momentum with the macro `\kL`; the characteristic
  length of this chapter is untyped and the page writes it as plain `L`.
  An untyped row for it (`L_wire`, latex `L`, exists from Chapter 5, or a
  new `L_len`) would let the two variables rows point at an ink symbol.
  No existing row is changed.
- The `sections` row 12.6 needs no change.

Applied in the chapter pass (2026-09-14): every anchor above is written on its
row. The length is the new untyped symbol row `L_len` (LaTeX `L`, no macro),
merged through `book-rows.json`, and the variables rows `12.4/L` and `12.6/L`
are `12.4/L_len` and `12.6/L_len`; `L_wire` was not reused, since it is
Chapter 5's wire and a row's id should say what the symbol is. A plain $L$
in the prose carries no `data-sym` and is not hoverable, so the row serves
the Definitions view, where the variable is listed under a length and not
under the angular momentum. The wake figure's
caption no longer speaks of the book; it names Stokes' law and Chapter 5's
drag equation as the two laws the readout uses.
