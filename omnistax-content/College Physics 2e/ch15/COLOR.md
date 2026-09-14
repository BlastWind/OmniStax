# Chapter 15 colour plan

Prepared 2026-09-14. Approved with `config.md`. This chapter uses the book's
declared physical types and the app's selected palette, as root rule 7
requires, and adds one type of its own. No figure hard-codes hues, and every
page binds only the union of the types its own figures actually draw. The
introduction binds none.

| Quantity | Type | Treatment |
|---|---|---|
| Entropy $S$ and its changes $\Delta S$, $\Delta S_\text{h}$, $\Delta S_\text{c}$, $\Delta S_\text{tot}$, $\Delta S_\text{syst}$, $\Delta S_\text{envir}$, $S_\text{i}$, $S_\text{f}$ | `entropy` (new) | One hue; the bar a reservoir gains or loses, the histogram column whose height is $k\ln W$, and every readout that writes $\Delta S = Q/T$ or $S = k\ln W$ wear it. A loss is the same type as a gain and is told by its sign and direction, not by another hue |
| Heat transfer $Q$, $Q_\text{h}$, $Q_\text{c}$, $Q_\text{in}$, $Q_\text{out}$, $Q_\text{f}$, $Q'_\text{h}$, $Q'_\text{c}$ | `energy` | One hue; an arrow whose width is the energy it carries. Heat into a system and heat out of it are told by the arrow's direction and its label, never by two hues |
| Work $W$, $W_\text{in}$, $W_\text{out}$, $W'$, $W_\text{AB}$ to $W_\text{DA}$, $W_\text{unavail}$ | `energy` | One hue, the same as heat's, because both are energy in transit and the chapter's first lesson is that a system cannot tell which it received. The area under a $PV$ path is a work and is filled in this hue; a negative area (work done on the system) is the same hue hatched or hollow |
| Internal energy $E_\text{int}$, $\Delta E_\text{int}$ | `energy` | One hue, the same again; it is the stored account that $Q$ and $W$ move, told from them by its label and by being drawn as a level inside the system rather than an arrow across its boundary |
| Temperature $T$, $T_\text{h}$, $T_\text{c}$, $T'_\text{h}$, $T'_\text{c}$, $T_0$ | `temperature` (Chapter 13) | One hue; declared by Chapter 13 and used here by name. It wears the hue on the reservoir's label, on the slider that sets it and on every readout; a reservoir body is never tinted hot or cold (root rule 7), and hot against cold is told by the labels $T_\text{h}$ and $T_\text{c}$ and by position, the hot reservoir above |
| Pressure $P$, $P_\text{AB}$, $P_\text{CD}$, $P_\text{ext}$ | `pressure` (Chapter 11) | One hue; the vertical axis of every $PV$ diagram, the pressure readout of a cylinder and the force per area on a piston. Declared by Chapter 11 and used here by name |
| Force $F$ on a piston | `force` | Bind only where a cylinder figure draws the force arrow $F = PA$ |
| Distance $d$ a piston moves | `position` | Bind only where a cylinder figure brackets the stroke |
| Average speed $\bar v$ of a gas atom | `velocity` | Bind only if a figure of 15.2 draws the kinetic-theory relation; none is expected to |
| Time $t$ since a gas was released into its container | `time` | Bound by 15.7 alone, where `sim-gas-disorder` traces the entropy of the arrangement against the time since the release on a graph beside the container; the horizontal axis of that graph wears the hue, since a typed quantity is never drawn in ink (settled in the chapter pass) |
| Volume $V$, $\Delta V$; area $A$; mass $m$; atom count $N$; efficiency $\text{Eff}$, $\text{Eff}_\text{C}$; coefficients of performance $\text{COP}_\text{hp}$, $\text{COP}_\text{ref}$; the EER; the number of microstates $W$; the counts of heads and tails; Boltzmann's constant $k$ | Untyped | Ink, including the sliders that set them and the equation symbols. The horizontal axis of every $PV$ diagram is ink |

Three rules of rule 7 bite in this chapter and are written down so that no
section has to decide them twice.

Heat, work and internal energy are one type. The temptation is to give heat
a warm hue and work a cool one so that the first law reads as two colours
meeting; rule 7 forbids it, since a colour belongs to a kind of quantity and
all three are energies. The figures tell them apart the way the book does,
by where they are drawn: heat crosses the boundary of the system as an
arrow labelled $Q$, work crosses it as an arrow labelled $W$, and internal
energy sits inside as a level or a number labelled $E_\text{int}$. The
readout writes $\Delta E_\text{int} = Q - W$ with all three in the energy
hue, and the reader learns that the equation balances because it is one
kind of thing on both sides.

A $PV$ diagram has one coloured axis. Pressure is a type and wears its hue on
the vertical axis, its ticks and its labels; volume is not a type and the
horizontal axis is ink. The path is drawn in ink, since a path is a sequence
of states and not a quantity, and the area under it, which is a work, is
filled in the energy hue. A loop walked clockwise fills its interior in the
energy hue as positive work; walked counterclockwise the same interior is
the same hue hatched, and the readout's sign says which. The isotherm and
the adiabat of 15.13 are two paths and are both ink, told apart by label
and by dash; the temperatures they carry, where a figure states them, wear
the temperature hue on the label.

Entropy is not an energy, and a reservoir is not a colour. $\Delta S = Q/T$
is an energy divided by a temperature giving a third kind of quantity, and
15.6's figures draw all three: the heat transfer as an energy-hued arrow,
the temperatures as hued labels on the two reservoirs, and the entropy the
reservoirs gain and lose as bars in the entropy hue. The reservoir bodies
themselves are ink, as every body in the book is; hot and cold are told by
the labels and by the hot reservoir standing above. The Carnot efficiency
that changes as the reader moves the temperatures is a pure number and is
written in ink on the readout beside the two coloured temperatures that set
it.

A page binds only what it draws. 15.1 binds energy alone; 15.2 binds energy
and pressure, and force and position where a cylinder figure draws the
piston's force and stroke; 15.3 binds energy, pressure and temperature;
15.4 binds energy and temperature, and pressure where the Carnot cycle is
drawn; 15.5 binds energy and temperature, and pressure where the reversed
cycle is drawn; 15.6 binds entropy, energy and temperature; 15.7 binds
entropy, and time for the graph of `sim-gas-disorder`, and neither energy
nor temperature, since no figure of the page restates $\Delta S = Q/T$. No
page binds a type merely because the chapter declares it. As built, the
pages bind exactly this: 15.1 energy; 15.2 energy, pressure, force and
position; 15.3 energy, pressure and temperature; 15.4 energy, temperature
and pressure; 15.5 energy, temperature and pressure; 15.6 entropy, energy
and temperature; 15.7 entropy and time; the introduction none.

All canvas colours come from `C(type)` and `PAL`, with one exception. The
water molecules of Figure 15.35 in 15.6 are the chapter's one use of the
element palette, `F.el('O')` and `F.el('H')`, since a molecule with an
identity is always drawn in it (root rule 7); the gas atoms of 15.38 carry
no type and no element (the book says only "a gas") and are ink, as are
the coins of 15.7, told apart by a filled and a hollow face. The
categorical palette `F.cat(i)` is not used on any page of the chapter: the
two paths ABC and ADC of 15.12 are one choice at a time, and nothing else
needed telling apart. Turning colour off must leave
labels, arrow directions and bar heights sufficient to understand every
figure.
