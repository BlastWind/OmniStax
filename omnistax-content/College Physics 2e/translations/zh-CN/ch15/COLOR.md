# Chapter 15 colour plan

Prepared 2026-09-14, brought in line with root `RULES.md` item 7 on
2026-10-04. The chapter uses the book's declared categories and the
palette the reader picks, and adds one category of its own, `entropy`.
Every category is coloured on every page; the tables below say what wears
which, and the rest of this file says how the chapter's figures use item 7's
four ways.

| Quantity | Category | Treatment |
|---|---|---|
| Entropy $S$ and its changes $\Delta S$, $\Delta S_\text{h}$, $\Delta S_\text{c}$, $\Delta S_\text{tot}$, $\Delta S_\text{syst}$, $\Delta S_\text{envir}$, $S_\text{i}$, $S_\text{f}$ | `entropy` (declared here) | One hue: the bars a reservoir gains or loses, the columns whose height is $k\ln W$, every readout that writes $\Delta S = Q/T$ or $S = k\ln W$. A loss is told from a gain by its sign and by hatching, not by another hue |
| Heat transfer $Q$, $Q_\text{h}$, $Q_\text{c}$, $Q_\text{in}$, $Q_\text{out}$, $Q_\text{f}$, $Q'_\text{h}$, $Q'_\text{c}$ | `energy` | An arrow whose width is the energy it carries. Heat in and heat out are told by direction and label |
| Work $W$, $W_\text{in}$, $W_\text{out}$, $W'$, $W_\text{AB}$ to $W_\text{DA}$, $W_\text{unavail}$ | `energy` | The same hue as heat, since both are energy in transit. The area under a $PV$ path is a work and is filled in this hue; a negative area is the same hue hatched |
| Internal energy $E_\text{int}$, $\Delta E_\text{int}$ | `energy` | The same hue again, drawn as a level inside the system rather than an arrow across its boundary |
| Temperature $T$, $T_\text{h}$, $T_\text{c}$, $T'_\text{h}$, $T'_\text{c}$, $T_0$ | `temperature` (Chapter 13) | The reservoir's temperature label, the slider that sets it and every readout. A reservoir body is never tinted hot or cold |
| Pressure $P$, $P_\text{AB}$, $P_\text{CD}$, $P_\text{ext}$ | `pressure` (Chapter 11) | The vertical axis of every $PV$ diagram, the pressure readout of a cylinder |
| Volume $V$, $\Delta V$ | `volume` | The horizontal axis of every $PV$ diagram, the volume and stroke labels of a cylinder, the $\Delta V$ slider of 15.12 |
| Area $A$ of a piston | `area` | The piston's area in 15.8 and 15.9 and its slider |
| Force $F$ on a piston, distance $d$ it moves | `force`, `position` | The force arrow $F = PA$ and the bracketed stroke |
| Mass $m$ of an atom, of the ice of 15.35 | `mass` | The mass slider of 15.35 and the maths |
| Latent heat of fusion $L_\text{f}$ | `latent-heat` | The readout of 15.35 |
| Speeds of the gas atoms of 15.38, the time since their release | `velocity`, `time` | Words in 15.7; the time axis of `sim-gas-disorder` |

Ink: efficiency, the Carnot efficiency, both coefficients of performance and
the EER (ratings); the number of microstates $W$, the atom count $N$ and the
counts of heads and tails (counts); Boltzmann's constant $k$ (a constant); a
ratio of two volumes or two pressures used as a slider (a rating). The path
on a $PV$ diagram is ink, since a path is a sequence of states and not a
quantity, except where item 7 makes it a referent (below).

Heat, work and internal energy are one category. The figures tell them apart
the way the book does, by where they are drawn: heat crosses the boundary of
the system as an arrow labelled $Q$, work crosses it as an arrow labelled $W$,
and internal energy sits inside as a level labelled $E_\text{int}$.

Entropy is not an energy. $\Delta S = Q/T$ divides an energy by a temperature
and gives a third kind of quantity, and 15.6's figures draw all three: the
heat transfer as an energy arrow, the temperatures as labels on the
reservoirs, and the entropy the reservoirs gain and lose as bars. A bar chart
with one bar per referent (the reservoirs of 15.33, the Sun, the Earth and
deep space of 15.36) keeps its bars in the entropy hue and names each bar
beneath it in its referent's hue.

## Facts and conventions

The water molecules of 15.35 are drawn in the element palette, `F.el('O')`
and `F.el('H')`, a convention that outranks the referent hue of the ice and
the water they belong to; the ice and the water wear their referent hues on
their labels and on the outline of the liquid. The gas atoms of 15.38 carry
no element (the book says only "a gas") and wear the gas's referent hue. No
colour in the chapter is a fact.

## Referents

Each figure's particular things take referent hues through `F.ref`, and the
text marks every reference to them:

- 15.1: the two processes (a) and (b) of 15.4; the body and the plant of 15.5.
- 15.2: the gas and the piston of 15.8 and 15.9; the isothermal path AB and
  the adiabatic path AC of 15.13, two curves on one graph.
- 15.3: the braking car, the puff of gas and the vacuum chamber of 15.15; the
  hot reservoir, the cold reservoir and the heat engine of 15.16 and 15.18;
  the piston, the crankshaft and the air-fuel mixture of 15.17.
- 15.4: the hot and cold reservoirs and the Carnot engine of 15.21; the
  pressurized water, the steam, the turbines and the cooling tower of 15.22;
  the real engine of 15.24.
- 15.5: the hot and cold reservoirs and the machine run backward of 15.26
  and the Sim; the working fluid, the two coils, the compressor and the
  expansion valve of 15.27; the real heat pump of 15.28; the house of 15.29.
- 15.6: state 1, state 2 and the reversible and irreversible paths of 15.32;
  the hot and cold reservoirs of 15.33; the colder reservoir and engines (a)
  and (b) of 15.34; the ice and the water of 15.35; the Sun, the Earth and
  deep space of 15.36.
- 15.7: the coins; the gas and its container of 15.38; the initial and final
  macrostates of Example 15.9 and its Sim.

The subscripts h and c name the hot and the cold reservoir, so in 15.3 to
15.6 $Q_\text{h}$, $Q_\text{c}$, $T_\text{h}$, $T_\text{c}$ and their primes
(and $\Delta S_\text{h}$, $\Delta S_\text{c}$ in 15.6) are split: the main
letter in its category's hue and the subscript in its reservoir's. In 15.6
$T'_\text{h}$ and the $T'_\text{c}$ of Example 15.7 name the 250 K reservoir
the heat falls to. In 15.7 $S_\text{i}$ and $S_\text{f}$ are split to the
initial and final macrostates.

The frame of a figure and its labels stay in ink, and with colour off every
figure stays legible from its labels, its arrow directions, its fills and
hatching and its caption.
