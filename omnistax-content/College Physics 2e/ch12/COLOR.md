# Chapter 12 colour plan

Prepared 2026-09-14. Approved with `config.md`. This chapter uses the book's
declared physical types and the app's selected palette, as root rule 7
requires, and adds two types of its own. No figure hard-codes hues, and every
page binds only the union of the types its own figures actually draw. The
introduction binds none.

| Quantity | Type | Treatment |
|---|---|---|
| Flow rate $Q$, $Q_1$, $Q_2$ | `flow-rate` (new) | One hue; the stream drawn through a pipe, the bar that states it and the slider that sets it all wear it. A branch's share of the flow is the same type and is told apart by its label, not by another hue |
| Viscosity $η$ | `viscosity` (new) | One hue; the fluid chosen from Table 12.1, the slider that changes it and every readout that writes Poiseuille's law or a Reynolds number wear it |
| Absolute and gauge pressure $P$, $P_1$, $P_2$, and the back pressure that stops osmosis | `pressure` (Chapter 11) | One hue; declared by Chapter 11 and used here by name. The pressure term of Bernoulli's equation, the pressure difference that drives Poiseuille flow and the manometer's reading are all this type |
| Density $ρ$ | `density` (Chapter 11) | One hue; declared by Chapter 11 and used here by name |
| Fluid speed $v$, $\bar v$, $v_1$, $v_2$, terminal speed $v_\text{t}$ | `velocity` | One hue; an average speed is the same type as an instantaneous one and is told by its bar, as the book writes it |
| Height above the reference point $h$, $h_1$, $h_2$, and the root-mean-square distance $x_\text{rms}$ | `position` | Bind where a figure measures a height or a distance travelled |
| Acceleration due to gravity $g$ | `acceleration` | Bind where a figure states $ρgh$ or Torricelli's theorem |
| Force $F$, viscous drag $F_\text{V}$, Stokes' drag $F_\text{S}$, buoyant force $F_\text{B}$, weight $w$ | `force` | One hue for all; distinguish by label, arrow position and the body acted upon |
| Kinetic and gravitational potential energy per unit volume, $\tfrac12 ρv^2$ and $ρgh$ | `energy` | Bind on the Bernoulli figures, where the three terms are drawn as bars of energy per unit volume and the pressure term is the one that is not an energy by name |
| Power | `power` | Bind in 12.3 only, where the section multiplies Bernoulli's equation by the flow rate |
| Elapsed time $t$ | `time` | Bind where a figure exposes a clock: the random walk of 12.7 and the turbulence of 12.5 |
| Radii and lengths $r$, $l$, $L$, $R$; areas $A$, $A_1$, $A_2$; volume $V$; resistance $R$; diffusion constant $D$; Reynolds numbers $N_\text{R}$, $N'_\text{R}$; branch counts $n_1$, $n_2$; every ratio | Untyped | Ink, including the sliders that set them and the equation symbols |

Two rules of rule 7 bite in this chapter and are written down so that no
section has to decide them twice.

The three terms of Bernoulli's equation are not one type. $P$ is a pressure
and wears the pressure hue; $\tfrac12 ρv^2$ and $ρgh$ are energies per unit
volume and wear the energy hue. They share a dimension and they are added to
one another, and neither is a reason to give them one colour: the section's
whole argument is that pressure is energy per unit volume too, and the reader
sees that argument only if the pressure term arrives wearing the colour it
wore in Chapter 11 and is then set beside two energies. The bars of the
Bernoulli figures are drawn in those two hues and the total ruled across the
top is drawn in ink, because the total is the thing that does not change and
belongs to no one term.

A tube's radius is never given the flow-rate hue to make Poiseuille's law
look tidy. The radius is a scene length and is ink; what changes colour when
the reader drags it is the stream, which is a flow rate, and the readout,
which states $Q = (P_2 - P_1)πr^4/8ηl$ with $Q$, the pressure difference and
$η$ in their hues and $r$ and $l$ in ink. The same holds for the plate
separation of 12.4's viscosity definition and for the characteristic size $L$
of 12.6.

A page binds only what it draws. 12.1 binds flow rate, velocity and, where a
figure exposes a clock, time; 12.2 and 12.3 bind pressure, density, velocity,
position, energy and, in 12.3, flow rate and power; 12.4 binds flow rate,
viscosity, pressure and velocity; 12.5 binds viscosity, velocity, density and
flow rate; 12.6 binds viscosity, velocity, density and force; 12.7 binds
position and time, and pressure where the back pressure is drawn. No page
binds a type merely because the chapter declares it.

All canvas colours come from `C(type)` and `PAL`. A molecule drawn in 12.7 is
an element, not a type, and takes `F.el(symbol)`; the several tracers of a
random walk carry no type and are told apart with `F.cat(i)`, never in a hue
the page has bound. Turning colour off must leave labels, arrow directions
and bar heights sufficient to understand every figure.
