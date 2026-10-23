# Chapter 4 colour plan

The chapter colours by item 7's four ways. Its categories are the book's, its
referents are listed per section in `referents`, and its one convention is the
element palette for the proton and the neutron of 4.8.

| Quantity | Category | Treatment |
|---|---|---|
| Applied force, net force, weight, normal force, tension, friction, thrust and force components | `force` | One hue for all; distinguish forces by labels, arrow position, line decoration and the body acted upon |
| Acceleration and gravitational acceleration | `acceleration` | One hue; components and variants keep it |
| Velocity and speed | `velocity` | Where a motion figure shows them |
| Position and displacement | `position` | Where a scene measures position or stretch |
| Elapsed time | `time` | Where a moving scene exposes time |
| Mass of a body or a system | `mass` | Its slider, its symbol *m* (`\km`) and a mass a figure prints; a body is never tinted by its mass |
| Angle of an incline, a wire, a push or a pair of axes | `angle` | Its slider, its symbol *θ* (`\ktheta`), its arc and its label |
| A test charge (4.8) | `charge` | Its slider and its label in the field figure |

Force pairs do not receive different hues merely because they act on
different bodies. The bodies are referents: each wears its referent colour on
its outline, its name label and its free-body dot, and the text marks every
reference to it. All actual force arrows retain the force hue, and a force
whose subscript names a body (*F*₁ of the first skater, *F* wall on feet,
*T*₁ of the left wire) wears that body's colour on its subscript. In a free-body diagram,
show only forces acting on the selected body. A resultant is labelled as
the sum and kept visually separate from its component forces.

Tension needs its own force-typed symbol row: do not reuse the existing
period symbol `T` or its time macro. Normal force likewise needs a symbol
distinct from the unit N, and weight must not reuse an angular-frequency
symbol. Check the full symbol table before choosing ids/macros during
section construction. The force categories in 4.8 do not introduce four
new quantity types; the magnitude of each is still a force.

Canvas colours come from `C(type)`, `F.ref(id)`, `F.el` and `PAL`. Turning
colour off must leave labels and vector directions sufficient to understand
the figures.
