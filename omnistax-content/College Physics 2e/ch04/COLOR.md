# Chapter 4 colour plan

Prepared 2026-09-11. Approved with `config.md`. This chapter uses the book's
declared physical types and the app's selected palette, as root rule 7
requires. No figure hard-codes hues, and every page binds only the union of
the types actually drawn by its figures. The introduction binds none.

| Quantity | Existing type | Treatment |
|---|---|---|
| Applied force, net force, weight, normal force, tension, friction, thrust and force components | `force` | One hue for all; distinguish forces by labels, arrow position, line decoration and the body acted upon |
| Acceleration and gravitational acceleration | `acceleration` | One hue; components and variants keep it |
| Velocity and speed | `velocity` | Bind where a motion figure shows them |
| Position and displacement | `position` | Bind where a scene measures position or stretch |
| Elapsed time | `time` | Bind where a moving scene exposes time |
| Mass, angle, pure ratios and categorical labels | Untyped | Ink, including controls and equation symbols |

Force pairs do not receive different hues merely because they act on
different bodies. Body outlines and labels distinguish the systems;
all actual force arrows retain the force hue. In a free-body diagram,
show only forces acting on the selected body. A resultant is labelled as
the sum and kept visually separate from its component forces.

Tension needs its own force-typed symbol row: do not reuse the existing
period symbol `T` or its time macro. Normal force likewise needs a symbol
distinct from the unit N, and weight must not reuse an angular-frequency
symbol. Check the full symbol table before choosing ids/macros during
section construction. The force categories in 4.8 do not introduce four
new quantity types; the magnitude of each is still a force.

All canvas colours come from `C(type)` and `PAL`. Turning colour off must
leave labels and vector directions sufficient to understand the figures.
